/**
 * Minimal, bounded ZIP reader for NES ROM archives.
 *
 * Only the central directory is used to locate entries, and only the first
 * playable `.nes` entry is extracted. Stored and deflated entries are
 * supported; encrypted and ZIP64 archives are rejected. Nothing is written to
 * disk, and inflated output is capped at the NES ROM limit.
 */

import { inflateRawSync } from 'node:zlib';
import { isNesRomHeader, MAX_ROM_BYTES } from './pure.js';

const EOCD_SIGNATURE = 0x06054b50;
const CENTRAL_SIGNATURE = 0x02014b50;
const LOCAL_SIGNATURE = 0x04034b50;
const MAX_ZIP_ENTRIES = 2000;

function u16(bytes, offset) {
  return bytes[offset] | (bytes[offset + 1] << 8);
}

function u32(bytes, offset) {
  return (
    (bytes[offset] |
      (bytes[offset + 1] << 8) |
      (bytes[offset + 2] << 16) |
      (bytes[offset + 3] << 24)) >>>
    0
  );
}

function decodeName(bytes, utf8) {
  const decoder = new TextDecoder(utf8 ? 'utf-8' : 'utf-8', { fatal: false });
  return decoder.decode(bytes).replace(/\u0000/g, '');
}

/** Whether a byte sequence starts like a ZIP file. */
export function isZip(bytes) {
  if (!(bytes instanceof Uint8Array) || bytes.length < 4) return false;
  return (
    (bytes[0] === 0x50 && bytes[1] === 0x4b && bytes[2] === 0x03 && bytes[3] === 0x04) ||
    (bytes[0] === 0x50 && bytes[1] === 0x4b && bytes[2] === 0x05 && bytes[3] === 0x06)
  );
}

function findEndOfCentralDirectory(bytes) {
  const start = Math.max(0, bytes.length - 22 - 0xffff);
  for (let offset = bytes.length - 22; offset >= start; offset -= 1) {
    if (u32(bytes, offset) === EOCD_SIGNATURE) return offset;
  }
  return -1;
}

function scoreEntry(name) {
  let score = 0;
  if (/\[!\]/i.test(name)) score += 6;
  if (/\(u\)|\(usa\)|\(world\)|\(w\)/i.test(name)) score += 4;
  else if (/\(e\)|\(eu\)/i.test(name)) score += 2;
  if (/bios|fds|unf|unif|test/i.test(name)) score -= 20;
  return score;
}

/**
 * Extract the best playable `.nes` entry from a ZIP buffer.
 *
 * @param {Uint8Array} bytes ZIP bytes.
 * @param {{maxBytes?: number}} options output bound.
 * @returns {{name: string, bytes: Uint8Array} | null} the extracted ROM.
 * @throws when the archive is malformed, encrypted, ZIP64, or exceeds bounds.
 */
export function extractNesFromZip(bytes, { maxBytes = MAX_ROM_BYTES } = {}) {
  if (!(bytes instanceof Uint8Array) || bytes.length < 22) return null;
  const eocd = findEndOfCentralDirectory(bytes);
  if (eocd < 0) throw new Error('ZIP end-of-central-directory record is missing');
  const total = u16(bytes, eocd + 10);
  const centralOffset = u32(bytes, eocd + 16);
  const centralSize = u32(bytes, eocd + 12);
  if (total === 0xffff || centralOffset === 0xffffffff || centralSize === 0xffffffff) {
    throw new Error('ZIP64 archives are not supported');
  }
  if (total > MAX_ZIP_ENTRIES) throw new Error('ZIP archive has too many entries');
  if (centralOffset < 0 || centralOffset + centralSize > bytes.length) {
    throw new Error('ZIP central directory is out of bounds');
  }

  const candidates = [];
  let offset = centralOffset;
  for (let index = 0; index < total; index += 1) {
    if (offset + 46 > bytes.length || u32(bytes, offset) !== CENTRAL_SIGNATURE) break;
    const flags = u16(bytes, offset + 8);
    const method = u16(bytes, offset + 10);
    const compressedSize = u32(bytes, offset + 20);
    const uncompressedSize = u32(bytes, offset + 24);
    const nameLength = u16(bytes, offset + 28);
    const extraLength = u16(bytes, offset + 30);
    const commentLength = u16(bytes, offset + 32);
    const localOffset = u32(bytes, offset + 42);
    const nameStart = offset + 46;
    const nameEnd = nameStart + nameLength;
    if (nameEnd > bytes.length) break;
    const name = decodeName(bytes.subarray(nameStart, nameEnd), (flags & 0x0800) !== 0);
    offset = nameEnd + extraLength + commentLength;
    if ((flags & 1) !== 0) continue;
    if (!/\.nes$/i.test(name)) continue;
    if (uncompressedSize <= 16 || uncompressedSize > maxBytes) continue;
    candidates.push({ name, method, compressedSize, uncompressedSize, localOffset, score: scoreEntry(name) });
  }
  candidates.sort((left, right) => right.score - left.score || left.name.localeCompare(right.name));
  if (candidates.length === 0) return null;

  for (const candidate of candidates) {
    if (candidate.localOffset + 30 > bytes.length || u32(bytes, candidate.localOffset) !== LOCAL_SIGNATURE) continue;
    const localNameLength = u16(bytes, candidate.localOffset + 26);
    const localExtraLength = u16(bytes, candidate.localOffset + 28);
    const dataStart = candidate.localOffset + 30 + localNameLength + localExtraLength;
    const dataEnd = dataStart + candidate.compressedSize;
    if (dataStart < 0 || dataEnd > bytes.length) continue;
    const compressed = bytes.subarray(dataStart, dataEnd);
    let output;
    if (candidate.method === 0) {
      if (compressed.byteLength > maxBytes) continue;
      output = new Uint8Array(compressed);
    } else if (candidate.method === 8) {
      try {
        output = new Uint8Array(inflateRawSync(compressed, { maxOutputLength: Math.min(maxBytes, candidate.uncompressedSize + 1) }));
      } catch {
        continue;
      }
    } else {
      continue;
    }
    if (output.byteLength > maxBytes) continue;
    if (!isNesRomHeader(output)) continue;
    return { name: candidate.name.split('/').pop() || 'game.nes', bytes: output };
  }
  return null;
}
