/**
 * Internet Archive access for the FC library: advanced search, item metadata,
 * and bounded ROM downloads. Only archive.org hosts are ever fetched. The
 * browser cannot download archive ROMs directly (no CORS headers), so the Host
 * route proxies the bytes.
 */

import {
  SEARCH_PAGE_SIZE,
  buildArchiveQuery,
  dedupeResults,
  extractYear,
  isExcludedResult,
  isNesRomHeader,
  isValidItemId,
  isValidRomFile,
  MAX_ROM_BYTES,
  pickCoverImage,
  pickPlayableFiles,
  rankResults,
  shortSummary,
} from './pure.js';
import { expandAlias } from './aliases.js';
import { proxyFetch } from './net.js';
import { extractNesFromZip, isZip } from './zip.js';

const SEARCH_ENDPOINT = 'https://archive.org/advancedsearch.php';
const METADATA_ENDPOINT = 'https://archive.org/metadata/';
const DOWNLOAD_ENDPOINT = 'https://archive.org/download/';
const USER_AGENT = 'dsh-fc-games/0.1 (DSH web plugin)';

export class ArchiveError extends Error {
  constructor(code, message, status = 502) {
    super(message);
    this.name = 'ArchiveError';
    this.code = code;
    this.status = status;
  }
}

/** The only hosts this plugin may fetch. */
export function isArchiveHost(value) {
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:') return false;
    return url.hostname === 'archive.org' || url.hostname.endsWith('.archive.org');
  } catch {
    return false;
  }
}

function withTimeout(signal, timeoutMs) {
  const timeout = AbortSignal.timeout(timeoutMs);
  if (signal === undefined || signal === null) return timeout;
  if (typeof AbortSignal.any === 'function') return AbortSignal.any([signal, timeout]);
  return timeout;
}

async function fetchJson(url, { signal, fetchImpl = proxyFetch, timeoutMs = 25000 } = {}) {
  let response;
  try {
    response = await fetchImpl(url, {
      headers: { 'user-agent': USER_AGENT, accept: 'application/json' },
      signal: withTimeout(signal, timeoutMs),
      redirect: 'follow',
    });
  } catch (error) {
    throw new ArchiveError('UPSTREAM_UNREACHABLE', 'Internet Archive request failed: ' + String(error?.message ?? error));
  }
  if (!response.ok) {
    throw new ArchiveError('UPSTREAM_HTTP_' + response.status, 'Internet Archive returned HTTP ' + response.status);
  }
  try {
    return await response.json();
  } catch {
    throw new ArchiveError('UPSTREAM_BAD_JSON', 'Internet Archive returned a non-JSON response');
  }
}

function asString(value) {
  if (Array.isArray(value)) return String(value[0] ?? '');
  return typeof value === 'string' ? value : '';
}

function mapDoc(doc) {
  const title = asString(doc?.title).trim();
  const id = asString(doc?.identifier);
  if (title.length === 0 || !isValidItemId(id)) return null;
  const subjects = Array.isArray(doc?.subject)
    ? doc.subject.map(String)
    : typeof doc?.subject === 'string'
      ? [doc.subject]
      : [];
  const year = Number.isFinite(Number(doc?.year)) ? Number(doc.year) : extractYear(title);
  const downloads = Number.isFinite(Number(doc?.downloads)) ? Number(doc.downloads) : 0;
  const item = {
    id,
    source: 'archive',
    title,
    year,
    coverUrl: null,
    downloads,
    subjects,
    itemUrl: 'https://archive.org/details/' + encodeURIComponent(id),
  };
  if (isExcludedResult(item)) return null;
  return item;
}

async function runSearch(query, page, { signal, fetchImpl, broad, sortDownloads = false, rows = SEARCH_PAGE_SIZE }) {
  const params = new URLSearchParams();
  params.set('q', buildArchiveQuery(query, { broad }));
  params.set('rows', String(rows));
  params.set('page', String(page));
  params.set('output', 'json');
  if (sortDownloads) params.append('sort[]', 'downloads desc');
  for (const field of ['identifier', 'title', 'year', 'subject', 'downloads', 'addeddate']) {
    params.append('fl[]', field);
  }
  const url = SEARCH_ENDPOINT + '?' + params.toString();
  const body = await fetchJson(url, { signal, fetchImpl });
  const docs = Array.isArray(body?.response?.docs) ? body.response.docs : [];
  const items = docs.map(mapDoc).filter((item) => item !== null);
  return { items, numFound: Number(body?.response?.numFound ?? items.length) };
}

/**
 * Search archive.org for NES games. A strict NES-subject query runs first; if
 * it yields nothing, a broad title/description query is filtered client-side.
 *
 * @returns {{items: object[], total: number, page: number, expandedQuery?: string}}
 */
export async function searchArchive({ query, page = 1, signal, fetchImpl = proxyFetch } = {}) {
  const raw = String(query ?? '').trim();
  if (raw.length === 0) throw new ArchiveError('BAD_QUERY', 'Search query is empty', 400);
  const expanded = expandAlias(raw);
  const searchTerm = expanded.query;
  if (buildArchiveQuery(searchTerm) === '') throw new ArchiveError('BAD_QUERY', 'Search query has no searchable characters', 400);
  const safePage = Math.max(1, Math.min(50, Number.parseInt(String(page), 10) || 1));

  const settled = await Promise.allSettled([
    runSearch(searchTerm, safePage, { signal, fetchImpl, broad: false }),
    runSearch(searchTerm, safePage, {
      signal,
      fetchImpl,
      broad: true,
      sortDownloads: true,
      rows: SEARCH_PAGE_SIZE * 2,
    }),
  ]);
  const strict = settled[0].status === 'fulfilled' ? settled[0].value : { items: [], numFound: 0 };
  const broad = settled[1].status === 'fulfilled' ? settled[1].value : { items: [], numFound: 0 };
  if (settled[0].status === 'rejected' && settled[1].status === 'rejected') throw settled[0].reason;

  const merged = dedupeResults([...strict.items, ...broad.items]);
  const ranked = rankResults(merged, searchTerm);
  return {
    items: ranked.slice(0, SEARCH_PAGE_SIZE),
    total: Math.max(strict.numFound, broad.numFound),
    page: safePage,
    expandedQuery: expanded.expanded ? searchTerm : undefined,
  };
}

/** Fetch one item's metadata, title/year, and playable `.nes` files. */
export async function resolveArchiveItem({ id, signal, fetchImpl = proxyFetch } = {}) {
  if (!isValidItemId(id)) throw new ArchiveError('BAD_ID', 'Invalid archive item id', 400);
  const metadataUrl = METADATA_ENDPOINT + encodeURIComponent(id);
  const body = await fetchJson(metadataUrl, { signal, fetchImpl, timeoutMs: 30000 });
  const files = Array.isArray(body?.files) ? body.files : [];
  const meta = body?.metadata ?? {};
  const title = asString(meta.title).trim() || id;
  const year = Number.isFinite(Number(meta.year)) ? Number(meta.year) : extractYear(title);
  const { playable, zips, fds } = pickPlayableFiles(files, { maxBytes: MAX_ROM_BYTES });
  let unsupported = null;
  if (playable.length === 0 && zips.length === 0) {
    if (fds.length > 0) unsupported = 'fds';
    else unsupported = 'none';
  }
  return {
    id,
    source: 'archive',
    title,
    year,
    itemUrl: 'https://archive.org/details/' + encodeURIComponent(id),
    coverUrl: pickCoverImage(files, id, title),
    files: playable.slice(0, 12).concat(zips.slice(0, 12)).slice(0, 12),
    zipCount: zips.length,
    fdsCount: fds.length,
    unsupported,
    description: shortSummary(meta.description),
  };
}

/** Build a direct, encoded download URL for one validated item file. */
export function archiveRomUrl(id, file) {
  if (!isValidItemId(id)) throw new ArchiveError('BAD_ID', 'Invalid archive item id', 400);
  if (!isValidRomFile(file)) throw new ArchiveError('BAD_FILE', 'Invalid ROM file name', 400);
  const encodedPath = file.split('/').map((part) => encodeURIComponent(part)).join('/');
  return DOWNLOAD_ENDPOINT + encodeURIComponent(id) + '/' + encodedPath;
}

/**
 * Download and validate one ROM. Bounds are enforced before and after the
 * body read; the final redirect target must still be an archive.org host.
 */
export async function downloadRom({ id, file, signal, fetchImpl = proxyFetch } = {}) {
  const url = archiveRomUrl(id, file);
  let response;
  try {
    response = await fetchImpl(url, {
      headers: { 'user-agent': USER_AGENT },
      signal: withTimeout(signal, 60000),
      redirect: 'follow',
    });
  } catch (error) {
    throw new ArchiveError('ROM_UNREACHABLE', 'ROM download failed: ' + String(error?.message ?? error));
  }
  if (!response.ok) {
    throw new ArchiveError('ROM_HTTP_' + response.status, 'ROM download returned HTTP ' + response.status);
  }
  if (response.url !== undefined && response.url !== '' && !isArchiveHost(response.url)) {
    throw new ArchiveError('ROM_BAD_REDIRECT', 'ROM download redirected outside archive.org');
  }
  const contentType = String(response.headers?.get?.('content-type') ?? '').toLowerCase();
  if (contentType.includes('text/html')) {
    throw new ArchiveError('ROM_NOT_FOUND', 'Internet Archive returned an HTML page instead of a ROM');
  }
  const declared = Number(response.headers?.get?.('content-length') ?? 0);
  if (Number.isFinite(declared) && declared > MAX_ROM_BYTES) {
    throw new ArchiveError('ROM_TOO_LARGE', 'ROM exceeds the 8 MB limit', 413);
  }
  let bytes;
  try {
    const buffer = await response.arrayBuffer();
    bytes = new Uint8Array(buffer);
  } catch (error) {
    throw new ArchiveError('ROM_READ_FAILED', 'Could not read the ROM body: ' + String(error?.message ?? error));
  }
  if (bytes.length > MAX_ROM_BYTES) {
    throw new ArchiveError('ROM_TOO_LARGE', 'ROM exceeds the 8 MB limit', 413);
  }
  let fileName = file;
  if (isZip(bytes)) {
    try {
      const extracted = extractNesFromZip(bytes, { maxBytes: MAX_ROM_BYTES });
      if (extracted === null) {
        throw new ArchiveError('ZIP_NO_ROM', 'The ZIP archive contains no playable .nes file', 422);
      }
      bytes = extracted.bytes;
      fileName = extracted.name;
    } catch (error) {
      if (error instanceof ArchiveError) throw error;
      throw new ArchiveError('ZIP_INVALID', 'Could not extract the ZIP archive: ' + String(error?.message ?? error), 422);
    }
  }
  if (!isNesRomHeader(bytes)) {
    throw new ArchiveError('NOT_A_ROM', 'The downloaded file is not an iNES/NES 2.0 ROM', 422);
  }
  return {
    bytes,
    fileName,
    size: bytes.length,
    contentType: 'application/octet-stream',
  };
}
