import test from 'node:test';
import assert from 'node:assert/strict';
import { MessageFlags } from 'discord.js';
import { createGsrCommand, createGsaCommandData } from './gsa-raffle.js';

test('gsr test add routes invented names directly to the synthetic endpoint and replies privately', async () => {
  const command = createGsrCommand({});
  assert.equal(command.data.name, 'gsr');
  const replies = [], calls = [];
  const interaction = {
    guildId: process.env.DISCORD_GUILD_ID || 'guild', user: { id: '123' },
    member: { displayName: 'Officer', roles: { cache: [{ name: 'Consigliere' }] } },
    options: { getSubcommandGroup: () => 'test', getSubcommand: () => 'add',
      getString: name => name === 'name' ? 'InventedTester' : 'biweekly', getInteger: () => 5000, getBoolean: () => false },
    deferReply: async value => replies.push(value), editReply: async value => replies.push(value), reply: async value => replies.push(value)
  };
  const socket = { connected: true, timeout() { return this; }, emit(event, payload, callback) {
    calls.push({ event, payload }); callback(null, { ok: true, message: 'Test entry added: bonuses enabled, 20% (+2).' });
  } };
  await command.execute(interaction, socket);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].event, 'guildsync:test-add');
  assert.equal(calls[0].payload.name, 'InventedTester');
  assert.equal(replies[0].flags, MessageFlags.Ephemeral);
  assert.match(replies.at(-1).content, /20%/);
  interaction.member.roles.cache = [{ name: 'Capo' }];
  await command.execute(interaction, socket);
  assert.equal(calls.length, 1);
  assert.match(replies.at(-1).content, /Consigliere/);
});

test('replacement registration removes raffle and test groups from gsa and defines them under gsr', () => {
  assert.deepEqual(createGsaCommandData().toJSON().options.map(option => option.name), ['post', 'stop', 'start']);
  const data = createGsrCommand({ GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED: 'true' }).data.toJSON();
  assert.deepEqual(data.options.map(option => option.name), ['raffle', 'test']);
  const add = data.options.find(option => option.name === 'test').options[0];
  assert.equal(add.name, 'add');
  assert.deepEqual(add.options.filter(option => option.required).map(option => option.name), ['name', 'gold', 'raffle']);
});
