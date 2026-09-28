import test from 'node:test';
import assert from 'node:assert/strict';

test('raffle messages advertise prize gold and biweekly draw count, not deposits', async () => {
  const { formatRaffles } = await import('./raffle.js');
  const content = formatRaffles({ asOf: 1781996401, raffles: [
    { type: 'biweekly', label: 'Bi-Weekly', prizeGold: 600000, drawCount: 3, totalTickets: 100, salesOpen: false, salesEnd: 1781996400, drawTime: 1782000000, deposits: 1000000 },
    { type: 'monthly', label: '50/50', prizeGold: 500000, totalTickets: 200, salesOpen: true, salesEnd: 1781996400, drawTime: 1782000000 }
  ] });
  assert.match(content, /600,000 gold/);
  assert.match(content, /3 draws.*200,000 gold/);
  assert.match(content, /500,000 gold/);
  assert.doesNotMatch(content, /1,000,000/);
  assert.match(content, /Sales closed/);
});

test('announcements persist cadence and high-water milestones, coalescing crossings', async () => {
  const { createRaffleAnnouncer } = await import('./raffle.js');
  let now = 1000, state = null, sent = 0;
  const raffles = [{ id: 'b:1', type: 'biweekly', prizeGold: 200000 }, { id: 'm:1', type: 'monthly', prizeGold: 499999 }];
  const options = { channelId: 'channel', intervalHours: 48, thresholds: { biweekly: 200000, monthly: 500000 },
    now: () => now, loadState: async () => state, saveState: async value => { state = structuredClone(value); },
    fetchRaffles: async () => ({ raffles }), send: async () => { sent++; } };
  let announcer = createRaffleAnnouncer(options);
  await announcer.tick(); assert.equal(sent, 1);
  announcer = createRaffleAnnouncer(options); // Restart must not repost.
  await announcer.tick(); assert.equal(sent, 1);
  raffles[1].prizeGold = 500000;
  await announcer.tick(); assert.equal(sent, 2);
  raffles[1].prizeGold = 499999;
  await announcer.tick();
  raffles[1].prizeGold = 500000;
  await announcer.tick(); assert.equal(sent, 2);
  raffles[0].prizeGold = 800000; raffles[1].prizeGold = 2000000;
  await announcer.tick(); assert.equal(sent, 3); // One combined announcement, not each crossed threshold.
  now += 48 * 3600;
  await announcer.tick(); assert.equal(sent, 4);
  raffles[0].id = 'b:2'; raffles[0].prizeGold = 0;
  await announcer.tick(); assert.equal(sent, 5);
});

test('failed sends are retried, and overlapping ticks cannot duplicate posts', async () => {
  const { createRaffleAnnouncer } = await import('./raffle.js');
  let sent = 0, fail = true, saved = 0;
  const announcer = createRaffleAnnouncer({ channelId: 'c', intervalHours: 24, thresholds: { biweekly: 200000, monthly: 500000 },
    loadState: async () => null, saveState: async () => { saved++; }, now: () => 100,
    fetchRaffles: async () => ({ raffles: [{ type: 'biweekly', id: 'b:1', prizeGold: 200000 }] }),
    send: async () => { if (fail) throw new Error('Discord unavailable'); sent++; } });
  await assert.rejects(announcer.tick(), /unavailable/);
  assert.equal(saved, 1); // Delivery is persisted before attempting Discord.
  fail = false;
  await Promise.all([announcer.tick(), announcer.tick()]);
  assert.equal(sent, 1); assert.equal(saved, 2);
});

test('successful send with failed final save is reconciled after restart', async () => {
  const { createRaffleAnnouncer } = await import('./raffle.js');
  let disk = null, writes = 0, posts = 0;
  const delivered = new Set();
  const options = { channelId: 'c', intervalHours: 48, thresholds: { biweekly: 200000, monthly: 500000 },
    now: () => 100, fetchRaffles: async () => ({ raffles: [{ id: 'b:1', type: 'biweekly', prizeGold: 200000 }] }),
    loadState: async () => structuredClone(disk),
    saveState: async state => { if (++writes === 2) throw new Error('disk unavailable'); disk = structuredClone(state); },
    send: async (_snapshot, delivery) => { if (!delivered.has(delivery.id)) { posts++; delivered.add(delivery.id); } }
  };
  await assert.rejects(createRaffleAnnouncer(options).tick(), /disk unavailable/);
  await createRaffleAnnouncer(options).tick();
  assert.equal(posts, 1);
  assert.equal(disk.pending, undefined);
  assert.equal(disk.raffles.biweekly.id, 'b:1');
});

test('no announcement is sent when pending state cannot be persisted', async () => {
  const { createRaffleAnnouncer } = await import('./raffle.js');
  let sent = 0;
  const announcer = createRaffleAnnouncer({ channelId: 'c', intervalHours: 48, thresholds: { biweekly: 200000, monthly: 500000 },
    loadState: async () => null, saveState: async () => { throw new Error('read-only state'); },
    fetchRaffles: async () => ({ raffles: [{ id: 'b:1', type: 'biweekly', prizeGold: 0 }] }), send: async () => { sent++; } });
  await assert.rejects(announcer.tick(), /read-only state/);
  assert.equal(sent, 0);
});
