import test from 'node:test';
import assert from 'node:assert/strict';
import { registerArchiveSocket } from './raffle-socket.js';
test('archive history requires authenticated bot and exposes only completed events', async () => {
  const handlers = {};
  const socket = { on: (name, fn) => handlers[name] = fn };
  let reads = 0;
  const db = { execute: async () => { reads++; return [[{ value: JSON.stringify({
    lastArchive: { archiveId: 'incomplete' }, catchupRequired: true,
    completedArchives: [{ archiveId: 'done', name: '261010 raffle' }]
  }) }]]; } };
  registerArchiveSocket(socket, db);
  let result;
  await handlers['guildsync:request-raffle-archives']({}, value => result = value);
  assert.equal(result.ok, false); assert.equal(reads, 0);
  socket.guildSyncAuthenticated = true; socket.guildSyncAuthType = 'discord-bot';
  await handlers['guildsync:request-raffle-archives']({}, value => result = value);
  assert.deepEqual(result.archives, [{ archiveId: 'done', name: '261010 raffle' }]);
});
