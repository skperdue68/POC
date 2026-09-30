import test from 'node:test';
import assert from 'node:assert/strict';
import { createRollover } from './raffle-sheet-rollover.js';

function fixture(deadlines = [100, 100]) {
  let state = null;
  const io = { time: 50, copies: [], clears: [], saves: 0, failSave: 0, failArchive: false, failReset: false };
  io.getWindows = (time) => ['biweekly', 'monthly'].map((type, i) => {
    let cutoff = deadlines[i];
    while (cutoff < time) cutoff += 100;
    return { type, salesEnd: cutoff, drawTime: Date.parse('2026-10-01T02:00:00Z') / 1000 };
  });
  io.engine = () => createRollover({
    now: () => io.time, getWindows: (time) => io.getWindows(time),
    log: () => io.log?.(),
    loadState: async () => structuredClone(state),
    saveState: async (next) => {
      if (++io.saves === io.failSave) throw new Error('save failed');
      state = structuredClone(next);
    },
    archive: async (job) => {
      if (io.failArchive) throw new Error('archive failed');
      let copy = io.copies.find((copy) => copy.key === job.key);
      if (!copy) { copy = { ...job, id: `copy-${io.copies.length}` }; io.copies.push(copy); }
      return copy.id;
    },
    reset: async (job) => {
      assert.equal(state.pending.archiveId, job.archiveId, 'archive ID must be durable before clearing');
      if (!io.clears.some((clear) => clear.key === job.key)) io.clears.push(job);
      if (io.failReset) throw new Error('reset response lost');
    },
  });
  io.state = () => structuredClone(state);
  return io;
}

test('first boot arms the next period without clearing historical or exact-cutoff entries', async () => {
  const io = fixture(); io.time = 100;
  await io.engine().tick();
  assert.equal(io.copies.length, 0);
  assert.equal(io.clears.length, 0);
  assert.deepEqual(io.state().windows.map((w) => w.salesEnd), [200, 200]);
});

test('same cutoff archives the whole spreadsheet once, names using Eastern draw date, then resets both tabs', async () => {
  const io = fixture(); const engine = io.engine();
  await engine.tick(); io.time = 100; await engine.tick();
  assert.equal(io.copies.length, 1);
  assert.equal(io.copies[0].name, '260930 raffle');
  assert.deepEqual(io.clears[0].raffles.map((r) => r.type), ['biweekly', 'monthly']);
  assert.deepEqual(io.state().lastClosedSalesEnd, { biweekly: 100, monthly: 100 });
  await engine.tick(); assert.equal(io.copies.length, 1);
});

test('different cutoffs reset only the closed raffle and catch up missed cycles', async () => {
  const io = fixture([100, 150]); const engine = io.engine();
  await engine.tick(); io.time = 250; await engine.tick();
  assert.deepEqual(io.clears.map((job) => job.raffles.map((r) => r.type)), [['biweekly'], ['monthly'], ['biweekly'], ['monthly']]);
  assert.deepEqual(io.state().lastClosedSalesEnd, { biweekly: 200, monthly: 250 });
});

test('failed pending-state save prevents copying and clearing', async () => {
  const io = fixture(); await io.engine().tick(); io.time = 100; io.failSave = 2;
  await assert.rejects(io.engine().tick(), /save failed/);
  assert.equal(io.copies.length, 0); assert.equal(io.clears.length, 0);
});

test('archive failure keeps pending work durable without clearing', async () => {
  const io = fixture(); await io.engine().tick(); io.time = 100; io.failArchive = true;
  await assert.rejects(io.engine().tick(), /archive failed/);
  assert.equal(io.clears.length, 0); assert.ok(io.state().pending);
  io.failArchive = false; await io.engine().tick(); assert.equal(io.clears.length, 1);
});

test('restart after archive ID save failure reconciles the existing archive before clearing', async () => {
  const io = fixture(); await io.engine().tick(); io.time = 100; io.failSave = 3;
  await assert.rejects(io.engine().tick(), /save failed/);
  assert.equal(io.copies.length, 1); assert.equal(io.clears.length, 0);
  await io.engine().tick();
  assert.equal(io.copies.length, 1); assert.equal(io.clears.length, 1);
});

for (const failure of ['lost reset response', 'completion save failure']) {
  test(`restart handles ${failure} without a second destructive reset`, async () => {
    const io = fixture(); await io.engine().tick(); io.time = 100;
    if (failure === 'lost reset response') io.failReset = true; else io.failSave = 4;
    await assert.rejects(io.engine().tick());
    io.failReset = false; await io.engine().tick();
    assert.equal(io.copies.length, 1); assert.equal(io.clears.length, 1);
    assert.equal(io.state().pending, null);
  });
}

test('rejects a nonadvancing schedule before copying or clearing', async () => {
  const io = fixture(); await io.engine().tick(); io.time = 100;
  io.getWindows = () => [{ type: 'biweekly', salesEnd: 100, drawTime: 101 }, { type: 'monthly', salesEnd: 100, drawTime: 101 }];
  await assert.rejects(io.engine().tick(), /schedule/i);
  assert.equal(io.copies.length, 0); assert.equal(io.clears.length, 0);
});

test('overdue work at the catchup cap blocks exports until the next tick catches up', async () => {
  const io = fixture(); await io.engine().tick(); io.time = 10100;
  await assert.rejects(io.engine().tick(), /catchup/i);
  assert.equal(io.clears.length, 100);
  await io.engine().tick(); assert.equal(io.clears.length, 101);
});

test('tick waits for asynchronous completion logging', async () => {
  const io = fixture(); await io.engine().tick(); io.time = 100;
  let logged = false;
  io.log = async () => { await new Promise(resolve => setTimeout(resolve, 10)); logged = true; };
  await io.engine().tick(); assert.equal(logged, true);
});
