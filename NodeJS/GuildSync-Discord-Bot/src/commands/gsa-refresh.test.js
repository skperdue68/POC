import test from 'node:test';
import assert from 'node:assert/strict';
import { MessageFlags } from 'discord.js';
import * as command from './gsa-raffle.js';
const snapshot = { lookupAt: Date.parse('2026-09-15T23:00:00Z') / 1000, timeZone: 'America/New_York', raffles: [
  { type: 'biweekly', label: 'Bi-Weekly', start: Date.parse('2026-09-12T23:00:00Z') / 1000, end: Date.parse('2026-09-26T23:00:00Z') / 1000 },
  { type: 'monthly', label: '50/50', start: Date.parse('2026-08-29T23:00:00Z') / 1000, end: Date.parse('2026-09-26T23:00:00Z') / 1000 }
] };
function fixture({ role = 'Consigliere', action = 'load', date = '091526' } = {}) {
  const replies = [], calls = [];
  const interaction = { guildId: process.env.DISCORD_GUILD_ID || 'guild', user: { id: '123' },
    member: { displayName: 'Officer', roles: { cache: [{ name: role }] } },
    options: { getSubcommand: () => action, getString: key => key === 'date' ? date : 'both', getBoolean: () => true },
    reply: async value => replies.push(value), deferReply: async value => replies.push(value), editReply: async value => replies.push(value)
  };
  const socket = { connected: true, timeout() { return this; }, emit(event, payload, cb) {
    calls.push({ event, payload }); cb(null, { ok: true, selection: snapshot, synced: 2, workingSheetUrl: 'https://docs.google.com/spreadsheets/d/working/edit' });
  } };
  return { interaction, socket, replies, calls };
}
test('registration only exposes production commands regardless of obsolete test flag', () => {
  assert.equal(typeof command.createGsaCommandData, 'function');
  for (const enabled of [false, true]) {
    const applications = command.createGsaCommandData().toJSON();
    assert.deepEqual(applications.options.map(o => o.name), ['post', 'stop', 'start']);
    const data = command.createGsrCommandData({ GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED: String(enabled) }).toJSON();
    assert.equal(data.name, 'gsraffle');
    const group = data;
    assert.deepEqual(group.options.map(o => o.name), ['load', 'reset', 'archive', 'save']);
    assert.deepEqual(group.options[0].options.map(o => o.name), ['date']);
    assert.ok(!group.options[0].options[0].required);
  }
});
test('production refresh is private, independent of test flag, and identifies both selected periods', async t => {
  const old = process.env.GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED;
  process.env.GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED = 'false';
  t.after(() => old === undefined ? delete process.env.GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED : process.env.GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED = old);
  const f = fixture(); await command.execute(f.interaction, f.socket);
  assert.equal(f.calls.length, 2);
  assert.deepEqual(f.calls.map(c => c.payload.action), ['plan', 'export']);
  assert.ok(f.calls.every(c => c.event === 'guildsync:raffle-refresh' && c.payload.date === '091526' && c.payload.discordUserId === '123'));
  assert.equal(f.replies[0].flags, MessageFlags.Ephemeral);
  const text = f.replies.at(-1).content;
  for (const expected of ['September 15, 2026', 'Bi-Weekly', '50/50', 'September 12, 2026', 'August 29, 2026', 'September 26, 2026']) assert.ok(text.includes(expected), text);
  assert.match(f.replies[1].content, /Exporting/);
  assert.match(text, /Both worksheets were cleared/);
  assert.match(text, /Raffle data has been loaded to the working sheet \[HERE\]\(https:\/\/docs.google.com\/spreadsheets\/d\/working\/edit\)/);
  assert.doesNotMatch(text, /R7|P7/);
});
test('all gsa raffle actions require the exact Consigliere role', async () => {
  for (const role of ['Capo', 'caporegieme', 'consigliere', 'Member']) for (const action of ['load', 'reset', 'archive', 'save']) {
    const f = fixture({ role, action }); await command.execute(f.interaction, f.socket);
    assert.deepEqual(f.calls, []);
    assert.equal(f.replies[0].flags, MessageFlags.Ephemeral);
    assert.match(f.replies[0].content, /Consigliere/);
  }
});

test('historical load returns archive link and save reminder with the original date', async () => {
 const f=fixture({date:'091526'});
 f.socket.emit=(event,payload,cb)=>{f.calls.push({event,payload});cb(null,{ok:true,selection:snapshot,synced:2,historical:true,sheetUrl:'https://docs.google.com/spreadsheets/d/archive/edit'});};
 await command.execute(f.interaction,f.socket);
 const text=f.replies.at(-1).content;
 assert.match(text,/Data for the raffle ending September 26, 2026 has been refreshed from the database\. The sheet may be found \[HERE\]\(https:\/\/docs.google.com\/spreadsheets\/d\/archive\/edit\)/);
 assert.match(text,/\/gsr save date:091526/);
 assert.doesNotMatch(text,/working sheet/);
 assert.doesNotMatch(text,/Both worksheets were cleared|Looking up|Load complete/);
});

test('save uses boundary clarification and only sends save after the choice', async () => {
 const f=fixture({action:'save',date:'092626'});
 f.socket.emit=(event,payload,cb)=>{f.calls.push({event,payload});cb(null,{ok:true,selection:{...snapshot,boundaryTypes:['biweekly']},saved:3,sheetUrl:'https://docs.google.com/spreadsheets/d/archive/edit'});};
 f.interaction.editReply=async value=>{f.replies.push(value);return {awaitMessageComponent:async()=>({customId:'ends',deferUpdate:async()=>{}})};};
 await command.execute(f.interaction,f.socket);
 assert.deepEqual(f.calls.map(call=>call.payload.action),['plan','plan','save']);
 assert.deepEqual(f.calls.at(-1).payload.boundaryChoices,{biweekly:'ends'});
 assert.match(f.replies.at(-1).content,/Saved 3/);
 assert.ok(!f.calls.some(call=>call.payload.action==='export'));
});

test('save boundary timeout cancels without saving and save date is required',async()=>{
 const f=fixture({action:'save',date:'092626'});
 f.socket.emit=(event,payload,cb)=>{f.calls.push({event,payload});cb(null,{ok:true,selection:{...snapshot,boundaryTypes:['biweekly']}});};
 f.interaction.editReply=async value=>{f.replies.push(value);return {awaitMessageComponent:async()=>{throw Error('timeout');}};};
 await command.execute(f.interaction,f.socket);
 assert.deepEqual(f.calls.map(call=>call.payload.action),['plan']);
 assert.match(f.replies.at(-1).content,/Save cancelled/);
 const missing=fixture({action:'save',date:null});await command.execute(missing.interaction,missing.socket);
 assert.equal(missing.calls.length,0);
 const builder=command.createGsrCommandData().toJSON();
 assert.equal(builder.options.find(option=>option.name==='save').options[0].required,true);
});
test('invalid date from backend is reported privately without starting an export', async () => {
  const f = fixture({ date: '023126' });
  f.socket.emit = (event, payload, cb) => { f.calls.push(payload); cb(null, { ok: false, message: 'Enter a valid calendar date in MMDDYY format.' }); };
  await command.execute(f.interaction, f.socket);
  assert.equal(f.calls.length, 1);
  assert.equal(f.replies[0].flags, MessageFlags.Ephemeral);
  assert.match(f.replies.at(-1).content, /valid.*MMDDYY/);
});

test('omitting date leaves selection to the backend and preserves ephemeral errors', async () => {
  const f = fixture({ date: null }); await command.execute(f.interaction, f.socket);
  assert.equal(f.calls.length, 2);
  assert.ok(f.calls.every(call => call.payload.date === undefined && !('raffleType' in call.payload)));
  for (const failure of ['disconnected', 'timeout']) {
    const failed = fixture();
    failed.socket.connected = failure !== 'disconnected';
    failed.socket.emit = (_event, _payload, callback) => callback(new Error('timeout'));
    await command.execute(failed.interaction, failed.socket);
    assert.equal(failed.replies[0].flags, MessageFlags.Ephemeral);
    assert.match(failed.replies.at(-1).content, /unavailable|timed out/);
  }
});


test('boundary answers are forwarded before exporting and timeout cancels without export',async()=>{
 for (const timeout of [false,true]) {
  const f=fixture({date:'092626'}); let prompted=0;
  f.socket.emit=(event,payload,cb)=>{f.calls.push({event,payload});cb(null,{ok:true,selection:{...snapshot,boundaryTypes:['biweekly']},synced:2});};
  f.interaction.editReply=async value=>{f.replies.push(value);return {awaitMessageComponent:async options=>{
   prompted++; assert.equal(f.calls.some(call=>call.payload.action==='export'),false);
   assert.equal(options.filter({user:{id:'other'}}),false);
   if(timeout) throw Error('expired');
   return {customId:prompted===1?'ends':'starts',deferUpdate:async()=>{}};
  }};};
  await command.execute(f.interaction,f.socket);
  const exported=f.calls.find(call=>call.payload.action==='export');
  if(timeout) {assert.equal(exported,undefined);assert.match(f.replies.at(-1).content,/cancelled/);}
  else {assert.equal(prompted,1);assert.deepEqual(exported.payload.boundaryChoices,{biweekly:'ends'});}
 }
});

test('gsr alias exposes the same subcommands and handler',()=>{
 const original=command.createGsrCommand(), alias=command.createGsrAliasCommand();
 assert.equal(alias.data.toJSON().name,'gsr');
 assert.deepEqual(alias.data.toJSON().options,original.data.toJSON().options);
 assert.equal(alias.execute,original.execute);
});
