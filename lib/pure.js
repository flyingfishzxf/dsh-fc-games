/**
 * Pure helpers for the FC game library: title normalization, Internet Archive
 * query construction, result filtering, and ROM/file validation. No network
 * or DOM access here so these functions stay unit-testable.
 */

export const MAX_QUERY_LENGTH = 80;
export const MAX_ROM_BYTES = 8 * 1024 * 1024;
export const SEARCH_PAGE_SIZE = 36;

const STOP_WORDS = new Set([
  'the', 'a', 'an', 'of', 'and', 'in', 'to', 'for', 'vs', 'with', 'on', 'at',
]);

const EXCLUDED_PLATFORM_WORDS = [
  'super nintendo',
  'snes',
  'sega genesis',
  'genesis',
  'mega drive',
  'game boy advance',
  'game boy',
  'nintendo 64',
  'n64',
  'playstation',
  'ps1',
  'sega saturn',
  'saturn',
  'arcade',
  'mame',
  'famicom disk system',
  'fds',
  'virtual boy',
  'atari',
  'game gear',
  'master system',
  'windows',
  'wii',
  'nintendo switch',
  'steam',
  'new super mario',
  'newer super mario',
  'super mario bros. x',
  'super mario bros x',
  'crossover',
  'portable',
  'mod archive',
  'nkit',
  'wbfs',
  'nintendo ds',
  '3ds',
  'commodore',
  'winamp',
  'skin',
  'movie',
  'print world',
  'ibm pc',
  'floppy',
  'remastered',
  'dos',
  'gameboy',
  'psp',
  'megadrive',
  'game maker',
  'handheld',
  'sega',
];

const EXCLUDED_CONTENT_WORDS = [
  'manual',
  'magazine',
  'soundtrack',
  'strategy guide',
  'review',
  'commercial',
  'advertisement',
  'poster',
  'notebook',
  'art book',
  'encyclopedia',
  'walkthrough',
  'collection',
  'complete set',
  'top 100',
  'nes pack',
  'rom pack',
  'rom set',
  'dumping project',
  'bootleg collection',
  'anniversary collection',
  '1000 in 1',
  '100 in 1',
  'multicart',
  'multi-game',
  'multi game',
];

/** Unicode-fold, lowercase, and strip Latin diacritics. */
export function foldText(value) {
  return String(value ?? '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

/** Strip trailing ", The" and a leading English article. */
function stripArticles(text) {
  let out = text.replace(/,\s*the\s*$/i, '').replace(/^the\s+/i, '');
  return out;
}

/**
 * Normalize a game title for comparison. Removes bracket tags and
 * parenthesized metadata such as regions, dates, revisions, and publisher.
 */
export function normalizeTitle(value) {
  let text = String(value ?? '');
  text = text.replace(/\[[^\]]*\]/g, ' ');
  text = text.replace(/\([^)]*\)/g, ' ');
  text = text.replace(/&/g, ' and ');
  text = foldText(text);
  text = stripArticles(text);
  text = text.replace(/[^a-z0-9]+/g, ' ');
  return text.replace(/\s+/g, ' ').trim();
}

/** Leading title before the first bracket, normalized (best for No-Intro names). */
export function titleBase(value) {
  let text = String(value ?? '');
  const cut = text.search(/[([{]/);
  if (cut > 0) text = text.slice(0, cut);
  return normalizeTitle(text);
}

/** Stable token set used by the fuzzy box-art matcher. */
export function tokenSet(value) {
  return new Set(
    normalizeTitle(value)
      .split(' ')
      .filter((token) => token.length > 1 && !STOP_WORDS.has(token)),
  );
}

/** Jaccard similarity over normalized title tokens. */
export function jaccard(left, right) {
  const a = tokenSet(left);
  const b = tokenSet(right);
  if (a.size === 0 || b.size === 0) return 0;
  let shared = 0;
  for (const token of a) if (b.has(token)) shared += 1;
  return shared / (a.size + b.size - shared);
}

/** Year from an archive field or a No-Intro-style parenthesized date. */
export function extractYear(value) {
  const match = String(value ?? '').match(/\b(19\d{2}|20\d{2})\b/);
  return match === null ? undefined : Number(match[1]);
}

/** Region tokens found in a title or filename. */
export function extractRegion(value) {
  const text = String(value ?? '').toLowerCase();
  const out = [];
  if (/\busa?\b|\(us\)|\(u\)/.test(text)) out.push('us');
  if (/\bjapan\b|\(jp\)|\(j\)/.test(text)) out.push('jp');
  if (/\beurope\b|\(eu\)|\(e\)/.test(text)) out.push('eu');
  if (/\bworld\b/.test(text)) out.push('world');
  return out;
}

/** Escape a user query for the Lucene-ish archive.org query parser. */
export function escapeLucene(value) {
  return String(value ?? '')
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/[+\-!(){}[\]^~*?:/|&]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, MAX_QUERY_LENGTH);
}

/** Build the strict NES-only archive query, or its broad fallback. */
export function buildArchiveQuery(query, { broad = false } = {}) {
  const term = escapeLucene(query);
  if (term.length === 0) return '';
  const quoted = `"${term}"`;
  if (broad) {
    return `(title:(${quoted}) OR description:(${quoted})) AND mediatype:software`;
  }
  return (
    `title:(${quoted}) AND mediatype:software` +
    ' AND (subject:"Nintendo Entertainment System" OR subject:NES' +
    ' OR subject:Famicom OR subject:"Family Computer")'
  );
}

/** True when a result looks like another platform or non-game material. */
export function isExcludedResult(item) {
  const title = String(item?.title ?? '').toLowerCase();
  if (title.length === 0) return true;
  if (EXCLUDED_PLATFORM_WORDS.some((word) => title.includes(word))) return true;
  if (EXCLUDED_CONTENT_WORDS.some((word) => title.includes(word))) return true;
  return false;
}

/** Deduplicate by normalized title + year, keeping the more downloaded item. */
export function dedupeResults(items) {
  const byKey = new Map();
  for (const item of items) {
    if (item === null || typeof item !== 'object') continue;
    const title = typeof item.title === 'string' ? item.title : '';
    if (title.length === 0) continue;
    const year = Number.isFinite(item.year) ? item.year : extractYear(title);
    const key = normalizeTitle(title) + '::' + (year ?? '');
    const previous = byKey.get(key);
    if (previous === undefined || (item.downloads ?? 0) > (previous.downloads ?? 0)) {
      byKey.set(key, item);
    }
  }
  return [...byKey.values()];
}

/** Relevance-first ordering for archive results: exact titles before loose ones. */
export function rankResults(items, query) {
  const term = normalizeTitle(query);
  const termTokens = new Set(term.split(' ').filter(Boolean));
  const scored = items.map((item) => {
    const base = titleBase(item.title);
    let score = 0;
    if (base === term) score += 100;
    else if (base.startsWith(term + ' ') || base.startsWith(term)) score += 80;
    else {
      const tokens = titleBase(item.title).split(' ').filter(Boolean);
      if (termTokens.size > 0 && tokens.length > 0) {
        let matched = 0;
        for (const token of termTokens) if (tokens.includes(token)) matched += 1;
        if (matched === termTokens.size) score += 60;
      }
    }
    if (score === 0 && base.includes(term)) score += 40;
    const downloads = Number.isFinite(item.downloads) ? item.downloads : 0;
    score += Math.min(20, Math.log10(downloads + 1) * 4);
    const lower = String(item.title).toLowerCase();
    if (/(hack|bootleg|translation|prototype|beta|demo|unlicensed|\bunl\b|co-op|co op|wrong|two players|2 players)/.test(lower)) score -= 20;
    return { item, score };
  });
  scored.sort((left, right) => right.score - left.score || (right.item.downloads ?? 0) - (left.item.downloads ?? 0));
  return scored.map((entry) => entry.item);
}

function filePenalty(name) {
  const lower = name.toLowerCase();
  let score = 0;
  if (lower.includes('[!]')) score += 20;
  if (lower.includes('[b')) score -= 30;
  if (lower.includes('[o')) score -= 20;
  if (lower.includes('[t')) score -= 8;
  if (lower.includes('[h')) score -= 6;
  if (lower.includes('[p')) score -= 4;
  if (lower.includes('(u)') || lower.includes('(usa)')) score += 10;
  if (lower.includes('(world)')) score += 10;
  if (lower.includes('(j)') || lower.includes('(japan)')) score += 5;
  if (lower.includes('(e)') || lower.includes('(europe)')) score += 5;
  return score;
}

/**
 * Rank playable `.nes` files. Only iNES/NES 2.0 `.nes` files are playable by
 * the bundled jsnes core; `.zip` and `.fds` are reported separately.
 */
export function pickPlayableFiles(files, { maxBytes = MAX_ROM_BYTES } = {}) {
  const list = Array.isArray(files) ? files : [];
  const playable = [];
  const zips = [];
  const fds = [];
  for (const file of list) {
    const name = typeof file?.name === 'string' ? file.name : '';
    const size = Number(file?.size ?? 0);
    if (name.length === 0) continue;
    if (/\.zip$/i.test(name)) {
      zips.push({ name, size });
      continue;
    }
    if (/\.(fds|unf|unif)$/i.test(name)) {
      fds.push({ name, size });
      continue;
    }
    if (!/\.nes$/i.test(name)) continue;
    if (/bios/i.test(name)) continue;
    if (!Number.isFinite(size) || size <= 16 || size > maxBytes) continue;
    playable.push({ name, size, score: filePenalty(name) + Math.min(size / 1024, 64) / 100 });
  }
  playable.sort((a, b) => b.score - a.score);
  zips.sort((a, b) => b.size - a.size);
  fds.sort((a, b) => b.size - a.size);
  return { playable, zips, fds };
}

/** Archive item identifiers are short, URL-safe, and never path segments. */
export function isValidItemId(id) {
  return typeof id === 'string' && /^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/.test(id);
}

/**
 * Validate a file name inside an archive item. Paths may contain `/` for
 * multi-file items, but never traversal, absolute paths, or control bytes.
 */
export function isValidRomFile(name) {
  if (typeof name !== 'string') return false;
  if (name.length === 0 || name.length > 256) return false;
  if (!/\.(nes|zip)$/i.test(name)) return false;
  if (name.startsWith('/') || name.startsWith('\\') || name.includes('\\')) return false;
  if (name.includes('\u0000') || /[\u0000-\u001f]/.test(name)) return false;
  const parts = name.split('/');
  if (parts.some((part) => part.length === 0 || part === '.' || part === '..')) return false;
  return true;
}

/** True only for an iNES / NES 2.0 header. */
export function isNesRomHeader(bytes) {
  if (bytes === null || bytes === undefined) return false;
  const view = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  return (
    view.length >= 4 &&
    view[0] === 0x4e &&
    view[1] === 0x45 &&
    view[2] === 0x53 &&
    view[3] === 0x1a
  );
}

/** Short, plain-text summary for a result card subtitle. */
export function shortSummary(value, limit = 140) {
  const text = String(value ?? '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > limit ? text.slice(0, limit - 1) + '…' : text;
}

/**
 * Choose an item-local image as a cover. Internet Archive items often carry a
 * cover scan plus a small `_thumb` rendition; `__ia_thumb` is the generic
 * archive icon and must never be used as game art.
 */
export function pickCoverImage(files, id, title = '') {
  const list = Array.isArray(files) ? files : [];
  const titleText = normalizeTitle(title);
  const titleTokens = titleText.split(' ').filter((token) => token.length > 2);
  let best = null;
  let bestScore = -1;
  for (const file of list) {
    const name = typeof file?.name === 'string' ? file.name : '';
    const size = Number(file?.size ?? 0);
    if (!/\.(png|jpe?g|webp|gif)$/i.test(name)) continue;
    if (/__ia_thumb/i.test(name)) continue;
    if (name.length > 96) continue;
    if (/(logo|template|vector|stock|banner|abstract|wallpaper|icon|music-player)/i.test(name)) continue;
    if (!Number.isFinite(size) || size < 1500 || size > 3 * 1024 * 1024) continue;
    const lower = name.toLowerCase();
    const nameText = normalizeTitle(name);
    const titleMatch = titleTokens.some((token) => nameText.includes(token));
    let score = 0;
    if (/_thumb\.(jpg|jpeg|png)$/.test(lower)) score += 25;
    if (/(cover|box|front|boxart|cartridge|label)/.test(lower)) score += 40;
    if (/(title|screen|snap|gameplay)/.test(lower)) score += 10;
    if (titleMatch) score += 30;
    else if (/_thumb/.test(lower) && !/(cover|box|screenshot|snap)/.test(lower)) score -= 20;
    if (size >= 4000 && size <= 300000) score += 15;
    if (size > 1024 * 1024) score -= 15;
    if (!name.includes('/')) score += 5;
    if (score > bestScore) {
      best = { name, score };
      bestScore = score;
    }
  }
  if (best === null) return null;
  const encoded = best.name.split('/').map((part) => encodeURIComponent(part)).join('/');
  return 'https://archive.org/download/' + encodeURIComponent(id) + '/' + encoded;
}

