import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
test('version command updates both desktop and web in a release', () => {
 const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'guildsync-version-'));
 const files = ['GO/GuildSync-Frontend-Client/frontend/src/main.js', 'NodeJS/GuildSync-Backend-Server/web/src/main.js'];
 try {
  for (const file of files) { fs.mkdirSync(path.dirname(path.join(dir, file)), { recursive: true }); fs.writeFileSync(path.join(dir, file), "const GUILDSYNC_APP_VERSION = '1.2.0';\n"); }
  execFileSync('go', ['run', fileURLToPath(new URL('./update-version.go', import.meta.url)), 'v1.2.7'], { cwd: dir });
  for (const file of files) assert.match(fs.readFileSync(path.join(dir, file), 'utf8'), /'1\.2\.7'/, file);
 } finally {
  assert.equal(path.dirname(path.resolve(dir)), path.resolve(os.tmpdir()));
  assert.ok(path.basename(dir).startsWith('guildsync-version-'));
  fs.rmSync(dir, { recursive: true, force: true });
 }
});
