import test from 'node:test';
import assert from 'node:assert/strict';

import { extractNesFromZip, isZip } from '../lib/zip.js';

function u16(value) {
  return [value & 0xff, (value >>> 8) & 0xff];
}

function u32(value) {
  return [value & 0xff, (value >>> 8) & 0xff, (value >>> 16) & 0xff, (value >>> 24) & 0xff];
}

function storedZip(name, data) {
  const nameBytes = [...Buffer.from(name, 'utf8')];
  const local = [
    ...u32(0x04034b50), ...u16(20), ...u16(0), ...u16(0), ...u16(0), ...u16(0),
    ...u32(0), ...u32(data.length), ...u32(data.length), ...u16(nameBytes.length), ...u16(0),
    ...nameBytes, ...data,
  ];
  const centralOffset = local.length;
  const central = [
    ...u32(0x02014b50), ...u16(20), ...u16(20), ...u16(0), ...u16(0), ...u16(0), ...u16(0),
    ...u32(0), ...u32(data.length), ...u32(data.length), ...u16(nameBytes.length), ...u16(0),
    ...u16(0), ...u16(0), ...u16(0), ...u32(0), ...u32(0), ...nameBytes,
  ];
  const eocd = [
    ...u32(0x06054b50), ...u16(0), ...u16(0), ...u16(1), ...u16(1),
    ...u32(central.length), ...u32(centralOffset), ...u16(0),
  ];
  return new Uint8Array([...local, ...central, ...eocd]);
}

const NES = new Uint8Array(32);
NES.set([0x4e, 0x45, 0x53, 0x1a], 0);

test('extracts the first NES file from a stored ZIP', () => {
  const zip = storedZip('Contra (U) [!].nes', NES);
  assert.equal(isZip(zip), true);
  const result = extractNesFromZip(zip);
  assert.ok(result);
  assert.equal(result.name, 'Contra (U) [!].nes');
  assert.deepEqual([...result.bytes.slice(0, 4)], [0x4e, 0x45, 0x53, 0x1a]);
});

test('returns null for a ZIP without a NES file', () => {
  const zip = storedZip('readme.txt', [...Buffer.from('hello', 'utf8')]);
  assert.equal(extractNesFromZip(zip), null);
});

test('rejects malformed ZIP input', () => {
  assert.throws(() => extractNesFromZip(new Uint8Array(22)), /ZIP/i);
});
