import test from 'node:test';
import assert from 'node:assert/strict';
import { data, execute } from './raffle.js';
import { requestActiveRaffles } from '../raffle.js';

test('/raffle uses the GuildSync snapshot and replies with prize gold', async () => {
  const replies = [];
  const guildId = process.env.DISCORD_GUILD_ID || 'test-guild';
  const interaction = { guildId, async deferReply() { replies.push('deferred'); }, async editReply(value) { replies.push(value); } };
  const socket = { connected: true, timeout(value) { assert.equal(value, 15000); return this; }, emit(event, payload, callback) {
    assert.equal(event, 'guildsync:request-active-raffles');
    callback(null, { ok: true, asOf: 1781996401, raffles: [{ type: 'biweekly', prizeGold: 400000, drawCount: 2, totalTickets: 10, salesOpen: false, drawTime: 1782000000 }] });
  } };
  assert.equal(data.toJSON().name, 'raffle');
  await execute(interaction, socket);
  assert.equal(replies[0], 'deferred');
  assert.match(replies[1].content, /400,000 gold/);
  assert.match(replies[1].content, /2 draws/);
  assert.deepEqual(replies[1].allowedMentions, { parse: [] });
});
test('/raffle rejects DMs and handles a disconnected backend', async () => {
  let reply;
  await execute({ guildId: null, async reply(value) { reply = value; } }, {});
  assert.match(reply.content, /server/);
  await assert.rejects(requestActiveRaffles({ connected: false }), /unavailable/);
  await assert.rejects(requestActiveRaffles({ connected: true, timeout() { return this; }, emit(_e, _p, cb) { cb(new Error('timeout')); } }), /did not respond/);
});
