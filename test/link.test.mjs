import test from 'node:test';
import assert from 'node:assert/strict';

import { parseGameUrl } from '../lib/link.js';
import { decodeRemoteId, resolveRemoteItem } from '../lib/sources.js';

function htmlResponse(html, url = 'https://example.com/games/contra') {
  return {
    ok: true,
    status: 200,
    url,
    headers: new Map([['content-type', 'text/html; charset=utf-8']]),
    async text() { return html; },
  };
}

const PAGE = `<!doctype html><html><head>
<title>Contra - Example ROMs</title>
<meta property="og:title" content="Contra (NES)">
<meta property="og:image" content="/images/contra.jpg">
<meta property="og:description" content="Run and gun classic from 1987.">
</head><body>
<a href="/downloads/contra.nes">Download ROM</a>
<a href="/downloads/contra.zip">ZIP mirror</a>
</body></html>`;

test('parses a game page into a linked card', async () => {
  const item = await parseGameUrl('https://example.com/games/contra', {
    fetchImpl: async () => htmlResponse(PAGE),
  });
  assert.equal(item.title, 'Contra (NES)');
  assert.equal(item.source, 'url');
  assert.equal(item.year, 1987);
  assert.equal(item.coverUrl, 'https://example.com/images/contra.jpg');
  assert.equal(item.fileName, 'contra.nes');
  const decoded = decodeRemoteId(item.id);
  assert.equal(decoded.source, 'url');
  assert.equal(decoded.url, 'https://example.com/downloads/contra.nes');
  assert.equal(resolveRemoteItem(item.id).files[0].name, 'contra.nes');
});

test('accepts a direct ROM URL without fetching a page', async () => {
  let called = false;
  const item = await parseGameUrl('https://cdn.example.com/roms/Battle City (U).nes', {
    fetchImpl: async () => { called = true; throw new Error('must not fetch'); },
  });
  assert.equal(called, false);
  assert.equal(item.title, 'Battle City');
  assert.equal(item.fileName, 'Battle City (U).nes');
  assert.equal(item.source, 'url');
});

test('rejects pages without a direct ROM link', async () => {
  await assert.rejects(
    parseGameUrl('https://example.com/games/contra', {
      fetchImpl: async () => htmlResponse('<html><title>Contra</title><a href="/about">About</a></html>'),
    }),
    /No direct .nes or .zip/,
  );
});
