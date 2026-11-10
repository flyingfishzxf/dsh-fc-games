import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const vendor = await readFile(join(root, 'vendor/jsnes.min.js'), 'utf8');
const source = await readFile(join(root, 'src/client.js'), 'utf8');

const cleanedVendor = vendor
  .replace(/\/\/# sourceMappingURL=.*$/m, '')
  .trimEnd();

const header =
  '/*! dsh-fc-games client bundle — includes jsnes 2.1.0 (Apache-2.0).\n' +
  ' *  jsnes: https://github.com/bfirsh/jsnes — see NOTICE and vendor/jsnes-LICENSE.txt.\n' +
  ' */\n';

const out = header + cleanedVendor + ';\n\n' + source.trimStart();
await writeFile(join(root, 'client.js'), out, 'utf8');
console.log('built client.js (' + Buffer.byteLength(out) + ' bytes)');
