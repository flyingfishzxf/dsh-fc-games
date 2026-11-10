import test from 'node:test';
import assert from 'node:assert/strict';

import {
  assertRemoteUrl,
  decodeRemoteId,
  encodeRemoteId,
  resolveRemoteItem,
  searchCustom,
} from '../lib/sources.js';

function jsonFetch(payload) {
  return async () => ({
    ok: true,
    status: 200,
    headers: new Map(),
    async json() {
      return payload;
    },
  });
}

test('custom source maps relative URLs and cover fields', async () => {
  const calls = [];
  const impl = async (url) => {
    calls.push(String(url));
    return {
      ok: true,
      status: 200,
      async json() {
        return {
          items: [
            { title: 'Contra', url: '/roms/contra.nes', cover: '/covers/contra.jpg', year: 1987, page: '/games/contra' },
            { title: 'Ignored', url: 'http://insecure.example/game.nes' },
          ],
        };
      },
    };
  };
  const result = await searchCustom({
    source: { id: 'mine', name: 'My shelf', searchUrl: 'https://example.com/search?q={query}&page={page}' },
    query: 'contra',
    page: 1,
    fetchImpl: impl,
  });
  assert.equal(calls.length, 1);
  assert.match(calls[0], /q=contra/);
  assert.equal(result.items.length, 1);
  assert.equal(result.items[0].title, 'Contra');
  assert.equal(result.items[0].coverUrl, 'https://example.com/covers/contra.jpg');
  assert.equal(result.items[0].itemUrl, 'https://example.com/games/contra');
  assert.equal(result.items[0].fileName, 'contra.nes');
  assert.equal(resolveRemoteItem(result.items[0].id).files[0].name, 'contra.nes');
});

test('custom static index is filtered and paginated locally', async () => {
  const body = {
    items: Array.from({ length: 25 }, (_, index) => ({
      title: 'Contra ' + index,
      url: 'https://cdn.example.com/contra-' + index + '.nes',
    })),
  };
  const result = await searchCustom({
    source: { id: 'static', name: 'Static', searchUrl: 'https://example.com/index.json' },
    query: 'contra',
    page: 2,
    fetchImpl: jsonFetch(body),
  });
  assert.equal(result.items.length, 7);
  assert.equal(result.hasMore, false);
  assert.equal(result.items[0].title, 'Contra 18');
});

test('remote ids are opaque, validated, and source-tagged', () => {
  const id = encodeRemoteId({
    source: 'custom',
    url: 'https://cdn.example.com/contra.nes',
    name: 'contra.nes',
    title: 'Contra',
  });
  const decoded = decodeRemoteId(id);
  assert.equal(decoded.source, 'custom');
  assert.equal(decoded.name, 'contra.nes');
  assert.equal(resolveRemoteItem(id).files.length, 1);
  assert.throws(() => assertRemoteUrl('https://127.0.0.1/rom.nes', 'custom'));
  assert.throws(() => decodeRemoteId('not-a-remote-id'));
});

test('github ids reject non-GitHub hosts', () => {
  const id = encodeRemoteId({
    source: 'github',
    url: 'https://evil.example.com/rom.nes',
    name: 'rom.nes',
    title: 'Bad',
  });
  assert.throws(() => decodeRemoteId(id), /GitHub/);
});
