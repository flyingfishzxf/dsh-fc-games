/**
 * dsh-fc-games Host half.
 *
 * Owns a token-protected HTTP prefix route used by the browser panel:
 *   GET /fc-games-api/search?q=&page=&source=archive|github|custom:<id>
 *   GET /fc-games-api/resolve?source=&id=
 *   GET /fc-games-api/rom?source=&id=&file=
 *
 * Internet Archive ROM bytes are proxied here because the download endpoint
 * sends no CORS headers. GitHub and custom-source bytes are proxied through
 * the same validated remote-download path. A single zero-argument Typert
 * Remote exposes the route base and the random per-activation token to the
 * Client; all heavier traffic uses plain fetch.
 */

import { randomBytes, timingSafeEqual } from 'node:crypto';
import { Remote, TypertRemoteService } from '@deepseek-ai/dsh-typert-protocol';

import {
  ArchiveError,
  downloadRom,
  resolveArchiveItem,
  searchArchive,
} from './lib/archive.js';
import {
  SourceError,
  downloadRemoteRom,
  resolveRemoteItem,
  searchCustom,
  searchGithub,
} from './lib/sources.js';
import { parseGameUrl } from './lib/link.js';
import { SEARCH_PAGE_SIZE } from './lib/pure.js';

export const name = 'dsh-fc-games';
export const inject = ['typert', 'webServer'];

const BASE_PATH = '/fc-games-api';
const INVOCATION_ID = 'dsh-fc-games#fcGames/bootstrap';
const SEARCH_TTL_MS = 5 * 60 * 1000;
const RESOLVE_TTL_MS = 10 * 60 * 1000;
const ROM_CACHE_MAX_BYTES = 24 * 1024 * 1024;
const ROM_CACHE_MAX_ITEMS = 3;

const BOOTSTRAP_INVOCATION = {
  id: INVOCATION_ID,
  service: 'fcGames',
  namespace: 'fcGames',
  method: 'bootstrap',
  invocation: { kind: 'direct' },
  parameters: [],
  result: { mode: 'src-json' },
};

const TYPERT_MANIFEST = {
  package: 'dsh-fc-games',
  face: 'host',
  schemas: [],
  model: {
    services: [
      {
        key: 'fcGames',
        exportName: 'FcGamesRuntime',
        description: 'FC/NES game library bootstrap for the web panel.',
        tags: [],
        members: [
          {
            kind: 'method',
            name: 'bootstrap',
            signature: 'bootstrap(): Promise<FcGamesBootstrap>',
          },
        ],
        types: [],
      },
    ],
    events: [],
    objects: [],
  },
  invocations: [BOOTSTRAP_INVOCATION],
};

// Mark one plain-JS method as a Remote using the protocol's decorator marker.
const _remoteInitializers = [];
function markRemote(proto, method) {
  Remote(method)(proto[method], {
    kind: 'method',
    name: method,
    static: false,
    private: false,
    addInitializer: (fn) => {
      _remoteInitializers.push(fn);
    },
  });
}

export class FcGamesRuntime extends TypertRemoteService {
  constructor(ctx, state) {
    super(ctx, 'fcGames');
    this._state = state;
    for (const fn of _remoteInitializers) fn.call(this);
  }

  /** Return the route base and the per-activation bearer token. */
  async bootstrap() {
    return {
      base: this._state.basePath,
      token: this._state.token,
      version: 2,
    };
  }
}
markRemote(FcGamesRuntime.prototype, 'bootstrap');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function corsHeaders() {
  return {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, HEAD, OPTIONS',
    'access-control-allow-headers': 'x-fc-games-token, content-type',
    'access-control-expose-headers': 'x-fc-filename, content-length',
    'access-control-max-age': '600',
  };
}

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    ...corsHeaders(),
    'content-type': 'application/json; charset=utf-8',
    'content-length': Buffer.byteLength(body),
    'cache-control': 'no-store',
    'x-content-type-options': 'nosniff',
  });
  res.end(body);
}

function sendEmpty(res, status) {
  res.writeHead(status, { ...corsHeaders(), 'content-length': '0' });
  res.end();
}

function sendArchiveError(res, error) {
  const status = Number(error?.status) || 500;
  const code = typeof error?.code === 'string' ? error.code : 'INTERNAL';
  const message = String(error?.message ?? error);
  sendJson(res, status, { ok: false, error: { code, message } });
}

function isAuthorized(req, token) {
  const raw = req.headers['x-fc-games-token'];
  const value = Array.isArray(raw) ? raw[0] : raw;
  if (typeof value !== 'string') return false;
  const left = Buffer.from(value);
  const right = Buffer.from(token);
  return left.length === right.length && timingSafeEqual(left, right);
}

function cacheGet(map, key) {
  const hit = map.get(key);
  if (hit === undefined) return undefined;
  if (Date.now() - hit.at > hit.ttl) {
    map.delete(key);
    return undefined;
  }
  return hit.value;
}

function cacheSet(map, key, value, ttl, max) {
  map.set(key, { value, at: Date.now(), ttl });
  while (map.size > max) {
    const oldest = map.keys().next().value;
    map.delete(oldest);
  }
}

function createRomCache() {
  const map = new Map();
  let bytes = 0;
  return {
    get(key) {
      const hit = map.get(key);
      if (hit === undefined) return undefined;
      map.delete(key);
      map.set(key, hit);
      return hit.value;
    },
    set(key, value) {
      const previous = map.get(key);
      if (previous !== undefined) bytes -= previous.value.byteLength;
      map.set(key, { value, at: Date.now() });
      bytes += value.byteLength;
      while (map.size > ROM_CACHE_MAX_ITEMS || bytes > ROM_CACHE_MAX_BYTES) {
        const oldestKey = map.keys().next().value;
        const oldest = map.get(oldestKey);
        map.delete(oldestKey);
        bytes -= oldest?.value?.byteLength ?? 0;
      }
    },
  };
}

/**
 * Keep only search hits that actually contain a playable `.nes` file. Metadata
 * resolution runs with a small worker pool and a bounded budget so a slow
 * archive item cannot hold the whole result page hostage.
 */
async function filterPlayable(items, ensureResolved, signal, options = {}) {
  const limit = options.limit ?? 18;
  const workers = options.workers ?? 6;
  const budgetMs = options.budgetMs ?? 5500;
  const targets = items.slice(0, limit);
  const results = new Array(targets.length).fill(null);
  const deadline = Date.now() + budgetMs;
  let cursor = 0;
  const run = async () => {
    for (;;) {
      if (Date.now() > deadline) return;
      const index = cursor;
      cursor += 1;
      if (index >= targets.length) return;
      const item = targets[index];
      try {
        const resolved = await ensureResolved(item.id, signal);
        if (Array.isArray(resolved.files) && resolved.files.length > 0) {
          results[index] = {
            ...item,
            coverUrl: item.coverUrl || resolved.coverUrl || null,
            fileCount: resolved.files.length,
          };
        }
      } catch {
        // Unplayable or missing metadata: drop the card from the playable page.
      }
    }
  };
  await Promise.all(Array.from({ length: Math.min(workers, targets.length) }, run));
  return results.filter((item) => item !== null);
}

/**
 * Decode the compact custom-source list sent by the browser. Only definitions
 * that passed the basic shape check are kept; the URL is fully validated again
 * by the source layer before any request.
 */
function decodeCustomSources(raw) {
  if (typeof raw !== 'string' || raw.trim() === '') return [];
  let parsed;
  try {
    parsed = JSON.parse(Buffer.from(raw, 'base64url').toString('utf8'));
  } catch {
    throw new SourceError('BAD_SOURCE', 'Malformed custom source list', 400);
  }
  if (!Array.isArray(parsed)) throw new SourceError('BAD_SOURCE', 'Malformed custom source list', 400);
  const seen = new Set();
  const sources = [];
  for (const value of parsed.slice(0, 10)) {
    if (!value || typeof value !== 'object') continue;
    const id = typeof value.id === 'string' ? value.id.trim().slice(0, 40) : '';
    const name = typeof value.name === 'string' ? value.name.trim().slice(0, 60) : '';
    const searchUrl = typeof value.searchUrl === 'string' ? value.searchUrl.trim().slice(0, 2048) : '';
    if (!/^[a-z0-9-]{1,40}$/i.test(id) || name === '' || !/^https:\/\//i.test(searchUrl) || seen.has(id)) continue;
    seen.add(id);
    sources.push({ id, name, searchUrl });
  }
  return sources;
}

function findCustomSource(sources, source) {
  const id = source.startsWith('custom:') ? source.slice('custom:'.length) : '';
  return sources.find((entry) => entry.id === id) || null;
}

/**
 * Mount the bootstrap Remote and the HTTP route.
 * @param ctx - plugin context carrying `typert` and `webServer`.
 */
export function apply(ctx) {
  const state = {
    basePath: BASE_PATH,
    token: randomBytes(32).toString('base64url'),
  };

  // Constructing the service registers `ctx.fcGames`.
  new FcGamesRuntime(ctx, state);

  ctx.effect(() => {
    const dispose = ctx.typert.register(TYPERT_MANIFEST);
    return () => {
      void dispose();
    };
  }, 'dsh-fc-games: typert manifest');

  const searchCache = new Map();
  const resolveCache = new Map();
  const romCache = createRomCache();

  const ensureResolved = async (id, signal) => {
    const cached = cacheGet(resolveCache, 'archive|' + id);
    if (cached !== undefined) return cached;
    const resolved = await resolveArchiveItem({ id, signal });
    cacheSet(resolveCache, 'archive|' + id, resolved, RESOLVE_TTL_MS, 100);
    return resolved;
  };

  const runArchiveSearch = async ({ query, page, signal }) => {
    const result = await searchArchive({ query, page, signal });
    const playable = await filterPlayable(result.items, ensureResolved, signal);
    const chosen = playable.length > 0 ? playable : result.items;
    const items = chosen.slice(0, 18).map((item) => ({
      ...item,
      sourceName: 'Internet Archive',
    }));
    return {
      source: 'archive',
      query,
      page: result.page,
      total: result.total,
      hasMore: result.page * SEARCH_PAGE_SIZE < result.total,
      filtered: playable.length > 0,
      expandedQuery: result.expandedQuery,
      items,
    };
  };

  const handler = async (req, res) => {
    if (req.method === 'OPTIONS') {
      sendEmpty(res, 204);
      return;
    }
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      sendEmpty(res, 405);
      return;
    }

    let url;
    try {
      url = new URL(req.url ?? '/', 'http://localhost');
    } catch {
      sendJson(res, 400, { ok: false, error: { code: 'BAD_URL', message: 'Malformed request URL' } });
      return;
    }

    const subPath = url.pathname.startsWith(BASE_PATH)
      ? url.pathname.slice(BASE_PATH.length) || '/'
      : '/';

    // A token-free health probe makes it possible to verify that the Host
    // route mounted without leaking any game data or the bootstrap token.
    if (subPath === '/health') {
      sendJson(res, 200, { ok: true, sources: ['archive', 'github', 'custom'], version: 2 });
      return;
    }

    if (!isAuthorized(req, state.token)) {
      sendJson(res, 401, { ok: false, error: { code: 'UNAUTHORIZED', message: 'Missing or invalid plugin token' } });
      return;
    }

    const signal = AbortSignal.timeout(90000);

    try {
      if (subPath === '/url') {
        const target = String(url.searchParams.get('url') ?? '').trim();
        const cacheKey = 'url|' + target;
        const cached = cacheGet(searchCache, cacheKey);
        if (cached !== undefined) {
          sendJson(res, 200, cached);
          return;
        }
        const item = await parseGameUrl(target, { signal });
        const payload = { ok: true, item };
        cacheSet(searchCache, cacheKey, payload, SEARCH_TTL_MS, 50);
        sendJson(res, 200, payload);
        return;
      }

      if (subPath === '/search') {
        const query = String(url.searchParams.get('q') ?? '').trim();
        const page = Number.parseInt(String(url.searchParams.get('page') ?? '1'), 10) || 1;
        const source = String(url.searchParams.get('source') ?? 'archive').trim() || 'archive';
        const customSources = decodeCustomSources(url.searchParams.get('custom'));
        const cacheKey = source + '|' + query + '|' + page;
        const cached = cacheGet(searchCache, cacheKey);
        if (cached !== undefined) {
          sendJson(res, 200, cached);
          return;
        }

        let payload;
        if (source === 'archive') {
          const result = await runArchiveSearch({ query, page, signal });
          payload = { ok: true, ...result };
        } else if (source === 'github') {
          const result = await searchGithub({ query, page, signal });
          payload = { ok: true, ...result, query, page };
        } else if (source.startsWith('custom:')) {
          const definition = findCustomSource(customSources, source);
          if (definition === null) throw new SourceError('BAD_SOURCE', 'Custom source is not configured', 400);
          const result = await searchCustom({ source: definition, query, page, signal });
          payload = { ok: true, ...result, query, page };
        } else {
          throw new SourceError('BAD_SOURCE', 'Unknown source', 400);
        }
        cacheSet(searchCache, cacheKey, payload, SEARCH_TTL_MS, 50);
        sendJson(res, 200, payload);
        return;
      }

      if (subPath === '/resolve') {
        const id = String(url.searchParams.get('id') ?? '').trim();
        const source = String(url.searchParams.get('source') ?? 'archive').trim() || 'archive';
        let resolved;
        if (source === 'archive') {
          resolved = await ensureResolved(id, signal);
        } else if (source === 'github' || source === 'custom' || source === 'url') {
          resolved = resolveRemoteItem(id);
          if (resolved.source !== source) throw new SourceError('BAD_ID', 'Game id does not match its source', 400);
        } else {
          throw new SourceError('BAD_SOURCE', 'Unknown source', 400);
        }
        sendJson(res, 200, { ok: true, ...resolved });
        return;
      }

      if (subPath === '/rom') {
        const id = String(url.searchParams.get('id') ?? '').trim();
        const file = String(url.searchParams.get('file') ?? '').trim();
        const source = String(url.searchParams.get('source') ?? 'archive').trim() || 'archive';
        let bytes;
        if (source === 'archive') {
          const resolved = await ensureResolved(id, signal);
          const known = resolved.files.some((candidate) => candidate.name === file);
          if (!known) {
            sendJson(res, 404, {
              ok: false,
              error: { code: 'FILE_NOT_IN_ITEM', message: 'That ROM file is not part of the resolved item' },
            });
            return;
          }
          const cacheKey = 'archive|' + id + '|' + file;
          bytes = romCache.get(cacheKey);
          if (bytes === undefined) {
            const result = await downloadRom({ id, file, signal });
            bytes = result.bytes;
            romCache.set(cacheKey, bytes);
          }
        } else if (source === 'github' || source === 'custom' || source === 'url') {
          const resolved = resolveRemoteItem(id);
          if (resolved.source !== source) throw new SourceError('BAD_ID', 'Game id does not match its source', 400);
          const known = resolved.files.some((candidate) => candidate.name === file);
          if (!known) {
            sendJson(res, 404, {
              ok: false,
              error: { code: 'FILE_NOT_IN_ITEM', message: 'That ROM file is not part of the resolved item' },
            });
            return;
          }
          const cacheKey = source + '|' + id + '|' + file;
          bytes = romCache.get(cacheKey);
          if (bytes === undefined) {
            const result = await downloadRemoteRom({ id, signal });
            bytes = result.bytes;
            romCache.set(cacheKey, bytes);
          }
        } else {
          throw new SourceError('BAD_SOURCE', 'Unknown source', 400);
        }
        const headers = {
          ...corsHeaders(),
          'content-type': 'application/octet-stream',
          'content-length': bytes.byteLength,
          'cache-control': 'private, max-age=86400',
          'x-content-type-options': 'nosniff',
          'x-fc-filename': encodeURIComponent(file),
        };
        res.writeHead(200, headers);
        if (req.method === 'HEAD') res.end();
        else res.end(Buffer.from(bytes.buffer, bytes.byteOffset, bytes.byteLength));
        return;
      }

      if (subPath === '/health') {
        sendJson(res, 200, { ok: true, sources: ['archive', 'github', 'custom'], version: 2 });
        return;
      }

      sendJson(res, 404, { ok: false, error: { code: 'NOT_FOUND', message: 'Unknown fc-games endpoint' } });
    } catch (error) {
      if (res.headersSent) {
        res.destroy();
        return;
      }
      if (!(error instanceof ArchiveError)) {
        ctx.logger?.warn?.(error instanceof Error ? error : new Error(String(error)));
      }
      sendArchiveError(res, error);
    }
  };

  ctx.effect(() => {
    return ctx.webServer.register({ kind: 'prefix', path: BASE_PATH, handler });
  }, 'dsh-fc-games: http route');
}
