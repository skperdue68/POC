import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { DatabaseSync } from 'node:sqlite';
import jwt from 'jsonwebtoken';

test('persistent sessions use current approval and role, and disconnect when revoked', async () => {
  // Exercise the real verifier without starting the server or opening production databases.
  const source = readFileSync(new URL('./guildsync-backend-server.js', import.meta.url), 'utf8');
  const verifier = source.slice(source.indexOf('async function verifyGuildSyncSession('), source.indexOf('\nfunction getBearerToken('));
  const db = new DatabaseSync(':memory:');
  try {
    db.exec(`
      CREATE TABLE guildsync_login_sessions (session_id TEXT, discord_user_id TEXT);
      CREATE TABLE guildsync_users (discord_user_id TEXT, allowed INTEGER, role TEXT);
      INSERT INTO guildsync_login_sessions VALUES ('session-1', 'user-1');
      INSERT INTO guildsync_users VALUES ('user-1', 1, 'user');
    `);
    let disconnected = false;
    const socket = { guildSyncSessionId: 'session-1', disconnect() { disconnected = true; } };
    const secret = 'test-only-secret';
    const verify = vm.runInNewContext(`${verifier}\nverifyGuildSyncSession`, {
      jwt, GUILDSYNC_JWT_SECRET: secret,
      loginDB: { async execute(sql, params) { return [db.prepare(sql).all(...params)]; } },
      io: { sockets: { sockets: new Map([['socket-1', socket]]) } }
    });
    const token = jwt.sign({ sub: 'user-1', jti: 'session-1', role: 'admin' }, secret,
      { issuer: 'guildsync-auth-server', audience: 'guildsync-desktop' });
    assert.equal((await verify(token)).role, 'user');
    assert.equal(disconnected, false);
    db.exec('UPDATE guildsync_users SET allowed = 0');
    await assert.rejects(verify(token), /Session was logged out/);
    assert.equal(disconnected, true);
  } finally {
    db.close();
  }
});
