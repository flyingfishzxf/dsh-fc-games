/**
 * Minimal fetch implementation that can traverse the user's HTTP proxy.
 *
 * Node's global fetch (undici) ignores the Windows system proxy. On machines
 * where archive.org is reachable only through a local proxy, the plugin would
 * otherwise fail even though the browser works. This module detects the proxy
 * from the standard environment variables or the Windows Internet Settings
 * registry, opens an HTTP CONNECT tunnel, and performs the HTTPS request with
 * node:https. It returns a small fetch-compatible Response object.
 *
 * When no proxy is configured it delegates to the platform fetch.
 */

import { execFileSync } from 'node:child_process';
import net from 'node:net';
import tls from 'node:tls';

const PROXY_TTL_MS = 60 * 1000;
const CONNECT_TIMEOUT_MS = 15000;
const REQUEST_TIMEOUT_MS = 30000;
const MAX_BODY_BYTES = 12 * 1024 * 1024;

let proxyCache;
let proxyCheckedAt = 0;
let bypassCache = [];
let bypassCheckedAt = 0;

function firstEnv(names) {
  for (const name of names) {
    const value = process.env[name];
    if (typeof value === 'string' && value.trim().length > 0) return value.trim();
  }
  return undefined;
}

function parseProxy(value) {
  const text = value.includes('://') ? value : 'http://' + value;
  let url;
  try {
    url = new URL(text);
  } catch {
    return null;
  }
  if (url.protocol !== 'http:') return null;
  const port = Number(url.port || 80);
  if (!Number.isInteger(port) || port <= 0 || port > 65535) return null;
  let auth;
  if (url.username.length > 0) {
    auth = 'Basic ' + Buffer.from(decodeURIComponent(url.username) + ':' + decodeURIComponent(url.password)).toString('base64');
  }
  return { host: url.hostname, port, auth };
}

function readRegistryValue(name) {
  if (process.platform !== 'win32') return undefined;
  try {
    const output = execFileSync(
      'reg',
      ['query', 'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings', '/v', name],
      { encoding: 'utf8', timeout: 4000, windowsHide: true },
    );
    const match = output.match(new RegExp(name + '\\s+REG_(?:SZ|DWORD)\\s+(.+)', 'i'));
    return match === null ? undefined : match[1].trim();
  } catch {
    return undefined;
  }
}

/** Detect the system HTTP proxy, or null for direct access. */
export function detectProxy({ force = false } = {}) {
  if (!force && Date.now() - proxyCheckedAt < PROXY_TTL_MS) return proxyCache;
  proxyCheckedAt = Date.now();
  const env = firstEnv(['HTTPS_PROXY', 'https_proxy', 'HTTP_PROXY', 'http_proxy', 'ALL_PROXY', 'all_proxy']);
  if (env !== undefined) {
    proxyCache = parseProxy(env);
    return proxyCache;
  }
  const enabled = readRegistryValue('ProxyEnable');
  const server = readRegistryValue('ProxyServer');
  if (enabled !== undefined && /^0x0*1$/i.test(enabled) && server !== undefined) {
    proxyCache = parseProxy(server);
    return proxyCache;
  }
  proxyCache = null;
  return null;
}

function bypassList() {
  if (Date.now() - bypassCheckedAt < PROXY_TTL_MS) return bypassCache;
  bypassCheckedAt = Date.now();
  const raw = readRegistryValue('ProxyOverride');
  bypassCache = raw === undefined ? [] : raw.split(';').map((part) => part.trim().toLowerCase()).filter(Boolean);
  return bypassCache;
}

function isBypassed(hostname, bypass) {
  const host = hostname.toLowerCase();
  if (host === 'localhost' || host === '127.0.0.1' || host === '::1') return true;
  for (const entry of bypass) {
    if (entry === '<local>') {
      if (!host.includes('.')) return true;
      continue;
    }
    if (entry === host) return true;
    if (entry.startsWith('*.')) {
      const suffix = entry.slice(1);
      if (host.endsWith(suffix)) return true;
    }
    if (entry.endsWith('.*')) {
      const prefix = entry.slice(0, -1);
      if (host.startsWith(prefix)) return true;
    }
  }
  return false;
}

function destroyQuietly(socket) {
  if (socket === null || socket === undefined) return;
  try {
    socket.destroy();
  } catch {
    // ignore
  }
}

/** Open an HTTPS CONNECT tunnel through an HTTP proxy. */
function openTunnel(target, proxy, signal) {
  return new Promise((resolve, reject) => {
    const proxySocket = net.connect({ host: proxy.host, port: proxy.port });
    let settled = false;
    let buffer = '';

    const fail = (error) => {
      if (settled) return;
      settled = true;
      cleanup();
      destroyQuietly(proxySocket);
      reject(error);
    };

    const cleanup = () => {
      proxySocket.off('data', onData);
      proxySocket.off('error', fail);
      proxySocket.off('close', onClose);
      proxySocket.off('timeout', onTimeout);
      if (signal !== undefined) signal.removeEventListener('abort', onAbort);
    };

    const onTimeout = () => fail(new Error('proxy CONNECT timed out'));
    const onClose = () => fail(new Error('proxy closed the CONNECT tunnel'));
    const onAbort = () => fail(new Error('request aborted'));

    const onData = (chunk) => {
      buffer += chunk.toString('latin1');
      const end = buffer.indexOf('\r\n\r\n');
      if (end === -1) {
        if (buffer.length > 16 * 1024) fail(new Error('proxy CONNECT response too large'));
        return;
      }
      const head = buffer.slice(0, end);
      const statusLine = head.split('\r\n')[0] ?? '';
      const status = Number(statusLine.split(/\s+/)[1] ?? 0);
      if (status !== 200) {
        fail(new Error('proxy CONNECT refused with status ' + status));
        return;
      }
      cleanup();
      proxySocket.setTimeout(0);
      const secure = tls.connect({
        socket: proxySocket,
        servername: target.hostname,
        rejectUnauthorized: true,
      });
      // Keep the TLS socket flowing while the handshake runs; the request
      // layer attaches its real data listener after this promise resolves.
      secure.resume();
      secure.setTimeout(REQUEST_TIMEOUT_MS, () => {
        destroyQuietly(secure);
        reject(new Error('TLS handshake timed out'));
      });
      secure.once('secureConnect', () => {
        secure.setTimeout(0);
        settled = true;
        resolve(secure);
      });
      secure.once('error', (error) => {
        if (!settled) {
          settled = true;
          reject(error);
        }
      });
    };

    proxySocket.setTimeout(CONNECT_TIMEOUT_MS, onTimeout);
    proxySocket.on('data', onData);
    proxySocket.on('error', fail);
    proxySocket.on('close', onClose);
    if (signal !== undefined) {
      if (signal.aborted) {
        fail(new Error('request aborted'));
        return;
      }
      signal.addEventListener('abort', onAbort, { once: true });
    }
    proxySocket.once('connect', () => {
      const auth = proxy.auth === undefined ? '' : 'Proxy-Authorization: ' + proxy.auth + '\r\n';
      const port = target.port || '443';
      proxySocket.write(
        'CONNECT ' + target.hostname + ':' + port + ' HTTP/1.1\r\n' +
          'Host: ' + target.hostname + ':' + port + '\r\n' +
          auth +
          'Proxy-Connection: keep-alive\r\n\r\n',
      );
    });
  });
}

function makeResponse(url, status, headers, body) {
  const normalized = new Map();
  for (const [key, value] of Object.entries(headers)) {
    normalized.set(key.toLowerCase(), Array.isArray(value) ? value.join(', ') : String(value ?? ''));
  }
  return {
    ok: status >= 200 && status < 300,
    status,
    url,
    headers: {
      get(name) {
        return normalized.get(String(name).toLowerCase()) ?? null;
      },
    },
    async arrayBuffer() {
      return body.buffer.slice(body.byteOffset, body.byteOffset + body.byteLength);
    },
    async text() {
      return body.toString('utf8');
    },
    async json() {
      return JSON.parse(body.toString('utf8'));
    },
  };
}

function parseChunkedBody(buffer) {
  const chunks = [];
  let offset = 0;
  for (;;) {
    const lineEnd = buffer.indexOf('\r\n', offset);
    if (lineEnd === -1) return null;
    const sizeLine = buffer.slice(offset, lineEnd).toString('latin1').trim();
    const semi = sizeLine.indexOf(';');
    const size = Number.parseInt(semi === -1 ? sizeLine : sizeLine.slice(0, semi), 16);
    if (!Number.isFinite(size)) throw new Error('invalid chunked encoding');
    offset = lineEnd + 2;
    if (size === 0) {
      const tail = buffer.indexOf('\r\n', offset);
      if (tail === -1) return null;
      return Buffer.concat(chunks);
    }
    if (offset + size + 2 > buffer.length) return null;
    chunks.push(buffer.slice(offset, offset + size));
    offset += size + 2;
  }
}

async function proxiedRequest(url, init, proxy, redirectsLeft) {
  const target = new URL(url);
  if (target.protocol !== 'https:') throw new Error('proxiedRequest only supports https URLs');
  if (init?.signal?.aborted) throw new Error('request aborted');

  const tunnel = await openTunnel(target, proxy, init?.signal);
  const headers = {
    'user-agent': 'dsh-fc-games/0.1',
    accept: '*/*',
    'accept-encoding': 'identity',
    connection: 'close',
    ...(init?.headers ?? {}),
  };
  const method = String(init?.method ?? 'GET').toUpperCase();
  const requestText =
    method + ' ' + target.pathname + target.search + ' HTTP/1.1\r\n' +
    'Host: ' + target.hostname + '\r\n' +
    Object.entries(headers)
      .map(([key, value]) => key + ': ' + value)
      .join('\r\n') +
    '\r\n\r\n';

  return new Promise((resolve, reject) => {
    let settled = false;
    let buffer = Buffer.alloc(0);
    let headerEnd = -1;
    let responseHeaders = {};
    let status = 0;
    let bodyComplete = false;

    const finish = (body) => {
      if (settled) return;
      settled = true;
      if (init?.signal !== undefined) init.signal.removeEventListener('abort', onAbort);
      tunnel.setTimeout(0);
      destroyQuietly(tunnel);
      resolve(makeResponse(url, status, responseHeaders, body));
    };

    const fail = (error) => {
      if (settled) return;
      settled = true;
      if (init?.signal !== undefined) init.signal.removeEventListener('abort', onAbort);
      destroyQuietly(tunnel);
      reject(error);
    };

    const onAbort = () => fail(new Error('request aborted'));

    const headerMap = () => {
      const out = {};
      for (const [key, value] of Object.entries(responseHeaders)) {
        out[key.toLowerCase()] = value;
      }
      return out;
    };

    const tryComplete = () => {
      if (headerEnd === -1) return;
      const head = buffer.slice(0, headerEnd).toString('latin1');
      const lines = head.split('\r\n');
      const statusLine = lines.shift() ?? '';
      status = Number(statusLine.split(/\s+/)[1] ?? 0);
      responseHeaders = {};
      for (const line of lines) {
        const colon = line.indexOf(':');
        if (colon <= 0) continue;
        const key = line.slice(0, colon).trim();
        const value = line.slice(colon + 1).trim();
        if (responseHeaders[key] === undefined) responseHeaders[key] = value;
      }
      const lower = headerMap();
      const bodyStart = buffer.slice(headerEnd + 4);
      const location = lower.location;
      if (status >= 300 && status < 400 && typeof location === 'string' && redirectsLeft > 0) {
        settled = true;
        if (init?.signal !== undefined) init.signal.removeEventListener('abort', onAbort);
        destroyQuietly(tunnel);
        const next = new URL(location, target).href;
        proxiedRequest(next, init, proxy, redirectsLeft - 1).then(resolve, reject);
        return;
      }
      if (method === 'HEAD' || status === 204 || status === 304) {
        finish(Buffer.alloc(0));
        return;
      }
      const transfer = String(lower['transfer-encoding'] ?? '').toLowerCase();
      if (transfer.includes('chunked')) {
        let body = null;
        try {
          body = parseChunkedBody(bodyStart);
        } catch (error) {
          fail(error);
          return;
        }
        if (body !== null) {
          bodyComplete = true;
          finish(body);
        }
        return;
      }
      const length = Number(lower['content-length'] ?? -1);
      if (Number.isFinite(length) && length >= 0) {
        if (bodyStart.length >= length) {
          bodyComplete = true;
          finish(bodyStart.slice(0, length));
        }
        return;
      }
      // No length and no chunking: wait for connection close.
    };

    const onData = (chunk) => {
      buffer = Buffer.concat([buffer, chunk]);
      if (buffer.length > MAX_BODY_BYTES + 64 * 1024) {
        fail(new Error('response body exceeds limit'));
        return;
      }
      if (headerEnd === -1) {
        headerEnd = buffer.indexOf('\r\n\r\n');
        if (headerEnd === -1) return;
      }
      tryComplete();
    };

    tunnel.setTimeout(REQUEST_TIMEOUT_MS, () => {
      fail(new Error('request timed out'));
    });
    tunnel.on('data', onData);
    tunnel.on('error', fail);
    tunnel.on('end', () => {
      if (settled) return;
      if (headerEnd === -1) {
        fail(new Error('connection closed before response headers'));
        return;
      }
      tryComplete();
      if (settled) return;
      if (!bodyComplete) {
        const lower = headerMap();
        const transfer = String(lower['transfer-encoding'] ?? '').toLowerCase();
        if (transfer.includes('chunked')) {
          try {
            const body = parseChunkedBody(buffer.slice(headerEnd + 4));
            if (body === null) {
              fail(new Error('incomplete chunked response'));
              return;
            }
            finish(body);
            return;
          } catch (error) {
            fail(error);
            return;
          }
        }
        finish(buffer.slice(headerEnd + 4));
      }
    });
    if (init?.signal !== undefined) {
      if (init.signal.aborted) {
        fail(new Error('request aborted'));
        return;
      }
      init.signal.addEventListener('abort', onAbort, { once: true });
    }
    tunnel.write(requestText);
  });
}

/**
 * Fetch a URL through the detected proxy when one exists.
 * @param {string|URL} input
 * @param {RequestInit} [init]
 * @returns {Promise<Response>}
 */
export async function proxyFetch(input, init) {
  const url = typeof input === 'string' ? input : String(input);
  const proxy = detectProxy();
  if (proxy === null) return fetch(url, init);
  let hostname;
  try {
    hostname = new URL(url).hostname;
  } catch {
    return fetch(url, init);
  }
  if (isBypassed(hostname, bypassList())) return fetch(url, init);
  return proxiedRequest(url, init, proxy, 5);
}
