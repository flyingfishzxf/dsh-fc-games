/**
 * Additional game sources and the generic JSON source contract.
 *
 * Every remote item is addressed by an opaque `r1.<base64url(JSON)>` id. The
 * descriptor contains the direct `.nes` URL, a server-chosen display name, and
 * the origin source. The Host validates the decoded URL before fetching, and
 * never writes anything to disk.
 */

import { isIP } from 'node:net';
import { proxyFetch } from './net.js';
import { expandAlias } from './aliases.js';
import { extractYear, isNesRomHeader, MAX_ROM_BYTES, normalizeTitle } from './pure.js';
import { extractNesFromZip, isZip } from './zip.js';

const USER_AGENT = 'dsh-fc-games/0.2 (DSH web plugin)';
const GITHUB_HOSTS = new Set([
  'github.com',
  'api.github.com',
  'objects.githubusercontent.com',
  'raw.githubusercontent.com',
]);

export class SourceError extends Error {
  constructor(code, message, status = 502) {
    super(message);
    this.name = 'SourceError';
    this.code = code;
    this.status = status;
  }
}

function withTimeout(signal, timeoutMs) {
  const timeout = AbortSignal.timeout(timeoutMs);
  if (signal === undefined || signal === null) return timeout;
  if (typeof AbortSignal.any === 'function') return AbortSignal.any([signal, timeout]);
  return timeout;
}

function asString(value) {
  return typeof value === 'string' ? value : '';
}

function firstString(...values) {
  for (const value of values) {
    const text = asString(value).trim();
    if (text.length > 0) return text;
  }
  return '';
}

function basename(value) {
  try {
    const path = new URL(value).pathname;
    const name = decodeURIComponent(path.split('/').filter(Boolean).pop() || '');
    return name;
  } catch {
    return '';
  }
}

function safeFileName(value, fallback = 'game.nes') {
  const name = String(value || '')
    .replace(/[/\\?%*:|"<>]/g, '_')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 120);
  if (name === '') return fallback;
  return /\.(nes|zip)$/i.test(name) ? name : name + '.nes';
}

function isPrivateHost(hostname) {
  const host = hostname.toLowerCase().replace(/^\[|\]$/g, '');
  if (host === 'localhost' || host.endsWith('.localhost') || host.endsWith('.local')) return true;
  if (isIP(host) === 4) {
    const parts = host.split('.').map(Number);
    if (parts[0] === 0 || parts[0] === 10 || parts[0] === 127) return true;
    if (parts[0] === 169 && parts[1] === 254) return true;
    if (parts[0] === 192 && parts[1] === 168) return true;
    if (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) return true;
    if (parts[0] === 100 && parts[1] >= 64 && parts[1] <= 127) return true;
    if (parts[0] === 198 && (parts[1] === 18 || parts[1] === 19)) return true;
  }
  if (isIP(host) === 6) {
    if (host === '::1' || host === '::') return true;
    if (/^(fc|fd|fe80)/i.test(host)) return true;
  }
  return false;
}

/** Validate a URL the browser asked the Host to fetch. */
export function assertRemoteUrl(value, source) {
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new SourceError('BAD_URL', 'The source returned an invalid URL', 400);
  }
  if (url.protocol !== 'https:') throw new SourceError('BAD_URL', 'Only HTTPS URLs are allowed', 400);
  if (url.username || url.password) throw new SourceError('BAD_URL', 'URLs with credentials are not allowed', 400);
  const host = url.hostname.toLowerCase();
  if (source === 'github') {
    if (!GITHUB_HOSTS.has(host)) throw new SourceError('BAD_URL', 'GitHub source returned a non-GitHub URL', 400);
  } else if (isPrivateHost(host)) {
    throw new SourceError('BAD_URL', 'Private and local hosts are not allowed', 400);
  }
  return url;
}

/** Pack a direct-ROM descriptor into the opaque id returned by search. */
export function encodeRemoteId(descriptor) {
  const payload = {
    s: descriptor.source,
    u: descriptor.url,
    n: safeFileName(descriptor.name, 'game.nes'),
    t: String(descriptor.title || 'Game').slice(0, 160),
    p: String(descriptor.page || '').slice(0, 500),
  };
  return 'r1.' + Buffer.from(JSON.stringify(payload), 'utf8').toString('base64url');
}

/** Decode and structurally validate an opaque remote id. */
export function decodeRemoteId(id) {
  if (typeof id !== 'string' || !id.startsWith('r1.')) {
    throw new SourceError('BAD_ID', 'Invalid remote game id', 400);
  }
  let payload;
  try {
    payload = JSON.parse(Buffer.from(id.slice(3), 'base64url').toString('utf8'));
  } catch {
    throw new SourceError('BAD_ID', 'Invalid remote game id', 400);
  }
  if (!payload || typeof payload !== 'object' || typeof payload.u !== 'string') {
    throw new SourceError('BAD_ID', 'Invalid remote game id', 400);
  }
  const source = payload.s === 'github' ? 'github' : payload.s === 'custom' ? 'custom' : payload.s === 'url' ? 'url' : '';
  if (source === '') throw new SourceError('BAD_ID', 'Unknown remote game source', 400);
  assertRemoteUrl(payload.u, source);
  return {
    source,
    url: payload.u,
    name: safeFileName(payload.n, basename(payload.u) || 'game.nes'),
    title: String(payload.t || 'Game').slice(0, 160),
    page: asString(payload.p).slice(0, 500),
  };
}

async function fetchJson(url, { signal, timeoutMs = 20000, headers = {}, fetchImpl = proxyFetch } = {}) {
  let response;
  try {
    response = await fetchImpl(url, {
      headers: { 'user-agent': USER_AGENT, accept: 'application/json', ...headers },
      signal: withTimeout(signal, timeoutMs),
      redirect: 'follow',
    });
  } catch (error) {
    throw new SourceError('SOURCE_UNREACHABLE', 'Source request failed: ' + String(error?.message ?? error));
  }
  if (!response.ok) {
    throw new SourceError('SOURCE_HTTP_' + response.status, 'Source returned HTTP ' + response.status);
  }
  try {
    return await response.json();
  } catch {
    throw new SourceError('SOURCE_BAD_JSON', 'Source did not return JSON');
  }
}

/* ------------------------------------------------------------------ GitHub */

/**
 * Curated public GitHub repositories with directly playable `.nes` files.
 * The tree is fetched once and cached; search is a local filename match, so no
 * GitHub search rate limit is involved after the first page.
 */
const GITHUB_COLLECTIONS = [
  { repo: 'zdg-kinlon/FC_ROMS', branch: 'main', label: 'GitHub FC 合集' },
  { repo: 'lucaszhongsj/fcgame', branch: 'main', label: 'GitHub 开源游戏' },
];

const treeCache = new Map();

async function githubJson(path, signal) {
  return fetchJson('https://api.github.com' + path, {
    signal,
    timeoutMs: 20000,
    headers: {
      accept: 'application/vnd.github+json',
      'x-github-api-version': '2022-11-28',
    },
  });
}

async function collectionTree(collection, signal) {
  const hit = treeCache.get(collection.repo);
  if (hit !== undefined && Date.now() - hit.at < 15 * 60 * 1000) return hit.files;
  let rawFiles = null;
  try {
    const proxy = await fetchJson(
      'https://ungh.cc/repos/' + collection.repo + '/files/' + encodeURIComponent(collection.branch),
      { signal, timeoutMs: 20000 },
    );
    if (Array.isArray(proxy?.files)) rawFiles = proxy.files;
  } catch {
    // Fall back to the GitHub API when the public ungh proxy is unavailable.
  }
  if (rawFiles === null) {
    const repo = await githubJson('/repos/' + collection.repo, signal);
    const branch = typeof repo?.default_branch === 'string' ? repo.default_branch : collection.branch;
    const body = await githubJson(
      '/repos/' + collection.repo + '/git/trees/' + encodeURIComponent(branch) + '?recursive=1',
      signal,
    );
    rawFiles = (Array.isArray(body?.tree) ? body.tree : [])
      .filter((entry) => entry?.type === 'blob')
      .map((entry) => ({ path: entry.path, size: entry.size }));
  }
  const files = rawFiles
    .filter((entry) => entry && /\.(nes|zip)$/i.test(String(entry.path || '')))
    .filter((entry) => Number(entry.size || 0) > 0 && Number(entry.size || 0) <= MAX_ROM_BYTES)
    .map((entry) => ({
      path: String(entry.path),
      size: Number(entry.size || 0),
      name: String(entry.path).split('/').pop() || 'game.nes',
      branch: collection.branch,
    }));
  treeCache.set(collection.repo, { at: Date.now(), files });
  return files;
}

function displayTitleFromFile(name) {
  return decodeURIComponent(String(name || ''))
    .replace(/\.(nes|zip)$/i, '')
    .replace(/\[[^\]]*\]/g, ' ')
    .replace(/\([^)]*\)/g, ' ')
    .replace(/[_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function rawGithubUrl(collection, file) {
  const encoded = file.path.split('/').map(encodeURIComponent).join('/');
  return 'https://raw.githubusercontent.com/' + collection.repo + '/' + encodeURIComponent(file.branch) + '/' + encoded;
}

function regionScore(path) {
  const text = String(path).toLowerCase();
  let score = 0;
  if (/\(u\)|\(usa\)|\(world\)|\(w\)/.test(text)) score += 4;
  else if (/\(e\)|\(eu\)/.test(text)) score += 2;
  if (/\[!\]/.test(text)) score += 2;
  return score;
}

/** Search the curated GitHub NES folders. */
export async function searchGithub({ query, page = 1, signal } = {}) {
  const rawQuery = String(query || '').trim();
  if (rawQuery === '') throw new SourceError('BAD_QUERY', 'Search query is empty', 400);
  const expanded = expandAlias(rawQuery).query || rawQuery;
  const normalized = normalizeTitle(expanded);
  if (normalized === '') throw new SourceError('BAD_QUERY', 'Search query has no searchable characters', 400);
  const safePage = Math.max(1, Math.min(50, page));
  const candidates = [];
  let trees = 0;
  let lastError = null;
  for (const collection of GITHUB_COLLECTIONS) {
    let files;
    try {
      files = await collectionTree(collection, signal);
      trees += 1;
    } catch (error) {
      lastError = error;
      continue;
    }
    for (const file of files) {
      const title = displayTitleFromFile(file.name);
      const normalizedTitle = normalizeTitle(title);
      if (normalizedTitle === '') continue;
      const direct = normalizedTitle.includes(normalized);
      if (!direct) continue;
      let score = normalizedTitle === normalized ? 120 : normalizedTitle.startsWith(normalized) ? 90 : 60;
      score += Math.min(20, Math.max(0, normalizedTitle.length - normalized.length));
      score += regionScore(file.path);
      candidates.push({
        title,
        normalizedTitle,
        score,
        collection,
        file,
      });
    }
  }
  if (trees === 0 && lastError !== null) throw lastError;
  candidates.sort((left, right) => right.score - left.score || left.title.localeCompare(right.title));
  const seen = new Set();
  const unique = [];
  for (const candidate of candidates) {
    const key = candidate.normalizedTitle;
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(candidate);
  }
  const total = unique.length;
  const start = (safePage - 1) * 18;
  const items = unique.slice(start, start + 18).map((candidate) => {
    const { collection, file } = candidate;
    const url = rawGithubUrl(collection, file);
    const year = extractYear(file.name);
    return {
      id: encodeRemoteId({
        source: 'github',
        url,
        name: file.name,
        title: candidate.title,
        page: 'https://github.com/' + collection.repo,
      }),
      source: 'github',
      sourceName: collection.label,
      title: candidate.title,
      year: year === undefined ? null : year,
      coverUrl: null,
      downloads: 0,
      itemUrl: 'https://github.com/' + collection.repo,
      fileName: file.name,
      size: file.size,
    };
  });
  return { items, total, hasMore: start + items.length < total, source: 'github' };
}

/* ------------------------------------------------------------------ Custom */

function customUrl(template, query, page) {
  const raw = String(template || '').trim();
  if (raw === '') throw new SourceError('BAD_SOURCE', 'Custom source has no search URL', 400);
  const substituted = raw
    .split('{query}').join(encodeURIComponent(query))
    .split('{page}').join(String(page));
  const url = assertRemoteUrl(substituted, 'custom');
  return url.href;
}

function normalizeCustomItem(raw, baseUrl, definition, index) {
  if (!raw || typeof raw !== 'object') return null;
  const title = firstString(raw.title, raw.name, raw.game, raw.label);
  if (title === '') return null;
  const download = firstString(raw.url, raw.downloadUrl, raw.download_url, raw.romUrl, raw.rom_url, raw.file, raw.path);
  if (download === '') return null;
  let absolute;
  try {
    absolute = new URL(download, baseUrl).href;
  } catch {
    return null;
  }
  if (!/^https:/i.test(absolute)) return null;
  const name = safeFileName(firstString(raw.fileName, raw.filename, basename(absolute)), 'game-' + index + '.nes');
  let coverUrl = null;
  const cover = firstString(raw.coverUrl, raw.cover, raw.image, raw.thumbnail);
  if (cover !== '') {
    try {
      const absoluteCover = new URL(cover, baseUrl);
      if (absoluteCover.protocol === 'https:') coverUrl = absoluteCover.href;
    } catch {
      // ignore invalid cover
    }
  }
  let pageUrl = null;
  const page = firstString(raw.itemUrl, raw.page, raw.pageUrl, raw.details);
  if (page !== '') {
    try {
      const absolutePage = new URL(page, baseUrl);
      if (absolutePage.protocol === 'https:') pageUrl = absolutePage.href;
    } catch {
      // ignore invalid page
    }
  }
  const year = Number.isFinite(Number(raw.year)) ? Number(raw.year) : null;
  return {
    id: encodeRemoteId({
      source: 'custom',
      url: absolute,
      name,
      title,
      page: pageUrl || '',
    }),
    source: 'custom',
    sourceName: definition.name,
    title,
    year,
    coverUrl,
    downloads: 0,
    itemUrl: pageUrl,
    fileName: name,
  };
}

/** Search one user-provided JSON source. */
export async function searchCustom({ source, query, page = 1, signal, fetchImpl = proxyFetch } = {}) {
  const definition = source || {};
  const q = String(query || '').trim();
  if (q === '') throw new SourceError('BAD_QUERY', 'Search query is empty', 400);
  const hasQuery = String(definition.searchUrl || '').includes('{query}');
  const url = customUrl(definition.searchUrl, q, page);
  const body = await fetchJson(url, { signal, timeoutMs: 15000, fetchImpl });
  const rawItems = Array.isArray(body)
    ? body
    : Array.isArray(body?.items)
      ? body.items
      : Array.isArray(body?.results)
        ? body.results
        : Array.isArray(body?.data)
          ? body.data
          : null;
  if (rawItems === null) {
    throw new SourceError('SOURCE_BAD_SHAPE', 'Custom source must return an array or { "items": [...] }');
  }
  let items = rawItems
    .map((raw, index) => normalizeCustomItem(raw, url, definition, index))
    .filter((item) => item !== null);
  if (!hasQuery) {
    const needle = q.toLowerCase();
    items = items.filter((item) => item.title.toLowerCase().includes(needle));
  }
  const start = hasQuery ? 0 : (Math.max(1, page) - 1) * 18;
  const pageItems = items.slice(start, start + 18);
  return {
    items: pageItems,
    total: hasQuery ? pageItems.length : items.length,
    hasMore: hasQuery ? pageItems.length >= 18 : start + pageItems.length < items.length,
    source: 'custom:' + definition.id,
  };
}

/* ------------------------------------------------------------- Resolution */

export function resolveRemoteItem(id) {
  const descriptor = decodeRemoteId(id);
  return {
    id,
    source: descriptor.source,
    sourceName: descriptor.source === 'github' ? 'GitHub Homebrew' : descriptor.source === 'url' ? 'Linked page' : 'Custom source',
    title: descriptor.title,
    year: null,
    itemUrl: descriptor.page || null,
    coverUrl: null,
    files: [{ name: descriptor.name, size: null }],
    zipCount: 0,
    fdsCount: 0,
    unsupported: null,
    description: '',
  };
}

/** Download a direct remote ROM and validate its iNES header. */
export async function downloadRemoteRom({ id, signal } = {}) {
  const descriptor = decodeRemoteId(id);
  assertRemoteUrl(descriptor.url, descriptor.source);
  let response;
  try {
    response = await proxyFetch(descriptor.url, {
      headers: { 'user-agent': USER_AGENT, accept: 'application/octet-stream, application/zip;q=0.8, */*;q=0.5' },
      signal: withTimeout(signal, 60000),
      redirect: 'follow',
    });
  } catch (error) {
    throw new SourceError('ROM_UNREACHABLE', 'ROM download failed: ' + String(error?.message ?? error));
  }
  if (!response.ok) {
    throw new SourceError('ROM_HTTP_' + response.status, 'ROM download returned HTTP ' + response.status);
  }
  if (response.url !== undefined && response.url !== '') {
    try {
      assertRemoteUrl(response.url, descriptor.source);
    } catch {
      throw new SourceError('ROM_BAD_REDIRECT', 'ROM download redirected to a disallowed host');
    }
  }
  const contentType = String(response.headers?.get?.('content-type') ?? '').toLowerCase();
  if (contentType.includes('text/html')) {
    throw new SourceError('ROM_NOT_FOUND', 'The source returned an HTML page instead of a ROM');
  }
  const declared = Number(response.headers?.get?.('content-length') ?? 0);
  if (Number.isFinite(declared) && declared > MAX_ROM_BYTES) {
    throw new SourceError('ROM_TOO_LARGE', 'ROM exceeds the 8 MB limit', 413);
  }
  let buffer;
  try {
    buffer = await response.arrayBuffer();
  } catch (error) {
    throw new SourceError('ROM_READ_FAILED', 'Could not read the ROM body: ' + String(error?.message ?? error));
  }
  const bytes = new Uint8Array(buffer);
  if (bytes.length > MAX_ROM_BYTES) throw new SourceError('ROM_TOO_LARGE', 'ROM exceeds the 8 MB limit', 413);
  let fileName = descriptor.name;
  let romBytes = bytes;
  if (isZip(bytes)) {
    try {
      const extracted = extractNesFromZip(bytes, { maxBytes: MAX_ROM_BYTES });
      if (extracted === null) {
        throw new SourceError('ZIP_NO_ROM', 'The ZIP archive contains no playable .nes file', 422);
      }
      romBytes = extracted.bytes;
      fileName = extracted.name;
    } catch (error) {
      if (error instanceof SourceError) throw error;
      throw new SourceError('ZIP_INVALID', 'Could not extract the ZIP archive: ' + String(error?.message ?? error), 422);
    }
  }
  if (!isNesRomHeader(romBytes)) {
    throw new SourceError('NOT_A_ROM', 'The downloaded file is not an iNES/NES 2.0 ROM', 422);
  }
  return {
    bytes: romBytes,
    fileName,
    size: romBytes.length,
    contentType: 'application/octet-stream',
  };
}

