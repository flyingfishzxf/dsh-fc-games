/**
 * Parse a single game page/direct URL into a card.
 *
 * The page is fetched through the Host proxy, bounded in size, and only public
 * HTTPS targets are accepted. The parser prefers Open Graph metadata, then
 * ordinary title/description tags, and finally the first direct `.nes`/`.zip`
 * link on the page. Internet Archive `/details/<id>` pages are resolved through
 * the existing archive metadata path instead of scraping their HTML.
 */

import { isValidItemId, extractYear, shortSummary } from './pure.js';
import { resolveArchiveItem } from './archive.js';
import { assertRemoteUrl, encodeRemoteId, SourceError } from './sources.js';
import { proxyFetch } from './net.js';

const USER_AGENT = 'dsh-fc-games/0.2 (DSH web plugin)';
const MAX_PAGE_BYTES = 2 * 1024 * 1024;

function withTimeout(signal, timeoutMs) {
  const timeout = AbortSignal.timeout(timeoutMs);
  if (signal === undefined || signal === null) return timeout;
  if (typeof AbortSignal.any === 'function') return AbortSignal.any([signal, timeout]);
  return timeout;
}

function decodeHtml(value) {
  return String(value || '')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#([0-9]+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>');
}

function attrs(tag) {
  const out = {};
  const re = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+))/g;
  let match;
  while ((match = re.exec(tag)) !== null) {
    out[match[1].toLowerCase()] = decodeHtml(match[2] ?? match[3] ?? match[4] ?? '');
  }
  return out;
}

function metaMap(html) {
  const map = {};
  const tags = html.match(/<meta\b[^>]*>/gi) || [];
  for (const tag of tags) {
    const values = attrs(tag);
    const key = String(values.property || values.name || values.itemprop || '').toLowerCase();
    if (key && values.content) map[key] = values.content;
  }
  return map;
}

function firstText(html, tag) {
  const match = html.match(new RegExp('<' + tag + '\\b[^>]*>([\\s\\S]*?)</' + tag + '>', 'i'));
  return match ? decodeHtml(match[1].replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim() : '';
}

function fileNameOf(value) {
  try {
    const path = new URL(value).pathname;
    return decodeURIComponent(path.split('/').filter(Boolean).pop() || '');
  } catch {
    return '';
  }
}

function cleanTitle(value) {
  return decodeHtml(String(value || ''))
    .replace(/\s+/g, ' ')
    .replace(/\s*[|–-]\s*(ROM|Roms|Download|Emulator|Game)\b.*$/i, '')
    .trim()
    .slice(0, 160);
}

function titleFromFile(name) {
  return String(name || '')
    .replace(/\.(nes|zip)$/i, '')
    .replace(/\[[^\]]*\]/g, ' ')
    .replace(/\([^)]*\)/g, ' ')
    .replace(/[_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 160);
}

function safeFileName(value) {
  const name = String(value || '').replace(/[/\\?%*:|"<>]/g, '_').trim().slice(0, 120);
  if (name === '') return 'game.nes';
  return /\.(nes|zip)$/i.test(name) ? name : name + '.nes';
}

function publicAbsolute(value, baseUrl) {
  let url;
  try {
    url = new URL(decodeHtml(value), baseUrl);
  } catch {
    return null;
  }
  try {
    assertRemoteUrl(url.href, 'custom');
  } catch {
    return null;
  }
  return url.href;
}

function findRomLinks(html, pageUrl) {
  const anchors = html.match(/<a\b[^>]*>/gi) || [];
  const pageHost = new URL(pageUrl).hostname;
  const found = new Map();
  for (const tag of anchors) {
    const href = attrs(tag).href;
    if (!href || /^(javascript:|mailto:|#)/i.test(href)) continue;
    const absolute = publicAbsolute(href, pageUrl);
    if (absolute === null) continue;
    let path;
    try {
      path = new URL(absolute).pathname;
    } catch {
      continue;
    }
    if (!/\.(nes|zip)$/i.test(path)) continue;
    const file = safeFileName(fileNameOf(absolute));
    let score = 0;
    if (/\.nes$/i.test(file)) score += 10;
    if (/\[!\]/i.test(file)) score += 4;
    if (new URL(absolute).hostname === pageHost) score += 3;
    if (!found.has(absolute) || found.get(absolute) < score) found.set(absolute, score);
  }
  return [...found.entries()]
    .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
    .map(([url, score]) => ({ url, score }));
}

/**
 * Parse a page or direct ROM URL into a card descriptor.
 *
 * @param {string} rawUrl - user-supplied HTTPS URL.
 * @param {{signal?: AbortSignal, fetchImpl?: typeof proxyFetch}} options fetch context.
 * @returns {Promise<object>} normalized card item.
 */
export async function parseGameUrl(rawUrl, { signal, fetchImpl = proxyFetch } = {}) {
  const target = String(rawUrl || '').trim();
  if (target === '') throw new SourceError('BAD_URL', 'Enter a game page URL', 400);
  const pageUrl = assertRemoteUrl(target, 'custom').href;
  const parsed = new URL(pageUrl);
  const directFile = fileNameOf(pageUrl);
  const direct = /\.(nes|zip)$/i.test(directFile);

  if (
    (parsed.hostname === 'archive.org' || parsed.hostname === 'www.archive.org')
    && /^\/details\//.test(parsed.pathname)
  ) {
    const id = decodeURIComponent(parsed.pathname.slice('/details/'.length).split('/')[0] || '');
    if (isValidItemId(id)) {
      const resolved = await resolveArchiveItem({ id, signal, fetchImpl });
      if (resolved.files && resolved.files.length > 0) {
        return {
          id: resolved.id,
          source: 'archive',
          sourceName: 'Internet Archive',
          title: resolved.title,
          year: resolved.year,
          coverUrl: resolved.coverUrl,
          downloads: 0,
          itemUrl: resolved.itemUrl,
          fileName: resolved.files[0].name,
          description: resolved.description,
        };
      }
    }
  }

  if (direct) {
    const name = safeFileName(directFile);
    return {
      id: encodeRemoteId({ source: 'url', url: pageUrl, name, title: titleFromFile(name), page: pageUrl }),
      source: 'url',
      sourceName: 'Linked page',
      title: titleFromFile(name),
      year: extractYear(name) ?? null,
      coverUrl: null,
      downloads: 0,
      itemUrl: pageUrl,
      fileName: name,
      description: '',
    };
  }

  let response;
  try {
    response = await fetchImpl(pageUrl, {
      headers: { 'user-agent': USER_AGENT, accept: 'text/html,application/xhtml+xml' },
      signal: withTimeout(signal, 25000),
      redirect: 'follow',
    });
  } catch (error) {
    throw new SourceError('URL_UNREACHABLE', 'Could not open page: ' + String(error?.message ?? error));
  }
  if (!response.ok) throw new SourceError('URL_HTTP_' + response.status, 'Page returned HTTP ' + response.status);
  if (response.url) {
    try {
      assertRemoteUrl(response.url, 'custom');
    } catch {
      throw new SourceError('URL_BAD_REDIRECT', 'Page redirected to a disallowed host');
    }
  }
  const type = String(response.headers?.get?.('content-type') || '').toLowerCase();
  if (type !== '' && !/text\/html|application\/xhtml/i.test(type)) {
    throw new SourceError('URL_NOT_HTML', 'That URL is not an HTML game page');
  }
  const declared = Number(response.headers?.get?.('content-length') || 0);
  if (Number.isFinite(declared) && declared > MAX_PAGE_BYTES) {
    throw new SourceError('URL_TOO_LARGE', 'Page is larger than 2 MB', 413);
  }
  let html;
  try {
    html = await response.text();
  } catch (error) {
    throw new SourceError('URL_READ_FAILED', 'Could not read the page: ' + String(error?.message ?? error));
  }
  if (html.length > MAX_PAGE_BYTES) throw new SourceError('URL_TOO_LARGE', 'Page is larger than 2 MB', 413);

  const metas = metaMap(html);
  const links = findRomLinks(html, pageUrl);
  if (links.length === 0) {
    throw new SourceError('URL_NO_ROM', 'No direct .nes or .zip download link was found on that page', 422);
  }
  const best = links[0];
  const fileName = safeFileName(fileNameOf(best.url));
  const title = cleanTitle(
    metas['og:title']
      || metas['twitter:title']
      || firstText(html, 'title')
      || firstText(html, 'h1')
      || titleFromFile(fileName),
  );
  const coverValue = metas['og:image'] || metas['twitter:image'] || metas['twitter:image:src'] || '';
  const cover = coverValue === '' ? null : publicAbsolute(coverValue, pageUrl);
  const description = shortSummary(
    metas['og:description'] || metas['description'] || metas['twitter:description'] || '',
    180,
  );
  const year = extractYear(title + ' ' + description + ' ' + fileName);
  return {
    id: encodeRemoteId({ source: 'url', url: best.url, name: fileName, title, page: pageUrl }),
    source: 'url',
    sourceName: 'Linked page',
    title: title || titleFromFile(fileName),
    year: year ?? null,
    coverUrl: cover,
    downloads: 0,
    itemUrl: pageUrl,
    fileName,
    description,
  };
}
