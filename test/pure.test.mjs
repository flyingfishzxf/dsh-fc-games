import test from 'node:test';
import assert from 'node:assert/strict';

import {
  buildArchiveQuery,
  dedupeResults,
  escapeLucene,
  extractYear,
  isExcludedResult,
  isNesRomHeader,
  isValidItemId,
  isValidRomFile,
  normalizeTitle,
  pickPlayableFiles,
  titleBase,
} from '../lib/pure.js';
import { expandAlias } from '../lib/aliases.js';
import { archiveRomUrl, isArchiveHost } from '../lib/archive.js';

test('normalizeTitle removes region/date metadata and punctuation', () => {
  assert.equal(normalizeTitle('Super Mario Bros. (Japan, USA)'), 'super mario bros');
  assert.equal(normalizeTitle('Legend of Zelda, The (USA)'), 'legend of zelda');
  assert.equal(normalizeTitle('Mega Man 2 [NES]'), 'mega man 2');
  assert.equal(titleBase('Super Mario Bros. (1985-09-13)(Nintendo)(JP-US).png'), 'super mario bros');
});

test('archive query is quoted, escaped, and NES-scoped', () => {
  const q = buildArchiveQuery('Contra "Hard" (USA)');
  assert.match(q, /mediatype:software/);
  assert.match(q, /subject:NES/);
  assert.doesNotMatch(q, /\(USA\)/);
  assert.ok(q.includes('Contra'));
  assert.equal(escapeLucene('a+b:c').includes('+'), false);
});

test('Chinese aliases expand to English titles', () => {
  assert.deepEqual(expandAlias('魂斗罗'), { query: 'Contra', expanded: true });
  assert.deepEqual(expandAlias('未知游戏'), { query: '未知游戏', expanded: false });
});

test('result filtering drops other platforms and non-games', () => {
  assert.equal(isExcludedResult({ title: 'Contra III (Super Nintendo)' }), true);
  assert.equal(isExcludedResult({ title: 'Nintendo Power Magazine' }), true);
  assert.equal(isExcludedResult({ title: 'Super Mario Bros. (Gameboy Advance)' }), true);
  assert.equal(isExcludedResult({ title: 'Contra (USA) NES' }), false);
});

test('dedupe keeps the more downloaded copy', () => {
  const items = dedupeResults([
    { id: 'a', title: 'Contra (USA)', downloads: 10 },
    { id: 'b', title: 'Contra (USA) [NES]', downloads: 99 },
  ]);
  assert.equal(items.length, 1);
  assert.equal(items[0].id, 'b');
});

test('playable files pick clean .nes dumps and report zip/fds', () => {
  const { playable, zips, fds } = pickPlayableFiles([
    { name: 'Contra (U) [!].nes', size: 131088 },
    { name: 'Contra (U) [b1].nes', size: 131088 },
    { name: 'Contra (2 in 1).zip', size: 236478 },
    { name: 'Disk Game.fds', size: 65536 },
    { name: 'readme.txt', size: 10 },
  ]);
  assert.equal(playable.length, 2);
  assert.equal(playable[0].name, 'Contra (U) [!].nes');
  assert.equal(zips.length, 1);
  assert.equal(fds.length, 1);
});

test('ROM identifiers and file names reject traversal', () => {
  assert.equal(isValidItemId('super-mario-bros_2024.a'), true);
  assert.equal(isValidItemId('../etc'), false);
  assert.equal(isValidRomFile('Games/1942 (USA).nes'), true);
  assert.equal(isValidRomFile('../secret.nes'), false);
  assert.equal(isValidRomFile('/abs.nes'), false);
  assert.equal(isValidRomFile('a\\b.nes'), false);
  assert.equal(isValidRomFile('game.zip'), true);
  assert.equal(
    archiveRomUrl('contranes', 'Contra (U) [!].nes'),
    'https://archive.org/download/contranes/Contra%20(U)%20%5B!%5D.nes',
  );
  assert.equal(isValidItemId('ok'), true);
  assert.equal(
    isArchiveHost('https://ia801808.us.archive.org/35/items/x/y.nes'),
    true,
  );
  assert.equal(isArchiveHost('https://evil.example/x.nes'), false);
});

test('NES header detection', () => {
  assert.equal(isNesRomHeader(new Uint8Array([0x4e, 0x45, 0x53, 0x1a])), true);
  assert.equal(isNesRomHeader(new Uint8Array([0x50, 0x4b, 0x03, 0x04])), false);
});

test('extractYear handles archive and No-Intro shapes', () => {
  assert.equal(extractYear('Super Mario Bros. (1985-09-13)'), 1985);
  assert.equal(extractYear('1987'), 1987);
  assert.equal(extractYear('no year here'), undefined);
});
