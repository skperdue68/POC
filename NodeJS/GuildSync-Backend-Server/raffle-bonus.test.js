import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateRaffleBonus, parseBonusTiers, selectBonusPolicy, selectRafflePolicy, selectRaffleBonusSettings } from './raffle-bonus.js';

test('biweekly bonus steps down on elapsed-hour boundaries and rounds per purchase', () => {
  const tiers = parseBonusTiers('120:20,120:10,72:5,24:0');
  const start = 1000000;
  const bonusAt = (hours, paid = 19) => calculateRaffleBonus({
    purchasedTickets: paid, purchaseTimestamp: start + hours * 3600,
    salesStart: start, salesEnd: start + 336 * 3600, tiers
  });
  assert.equal(bonusAt(0).bonusTickets, 3);
  assert.equal(bonusAt(119.999).bonusTickets, 3);
  assert.equal(bonusAt(120).bonusTickets, 1);
  assert.equal(bonusAt(240).bonusTickets, 0);
  assert.equal(bonusAt(312).bonusTickets, 0);
  assert.equal(bonusAt(100, 20).totalTickets, 24);
  assert.equal(bonusAt(-1).totalTickets, 0);
  assert.equal(bonusAt(336).totalTickets, 0);
});

test('monthly extra days use the earliest rate while final day always has zero bonus', () => {
  const tiers = parseBonusTiers('168:40,168:20,168:10,144:5,24:0');
  const start = 1000000;
  const salesEnd = start + 42 * 86400;
  const at = (day) => calculateRaffleBonus({ purchasedTickets: 20,
    purchaseTimestamp: start + day * 86400, salesStart: start, salesEnd, tiers });
  assert.equal(at(0).bonusTickets, 8);
  assert.equal(at(14).bonusTickets, 8);
  assert.equal(at(21).bonusTickets, 4);
  assert.equal(at(41).bonusTickets, 0);
});

test('invalid configuration fails clearly', () => {
  assert.throws(() => parseBonusTiers('120:20,24:10'), /zero bonus/);
  assert.throws(() => parseBonusTiers('120:20,0:0'), /positive hours/);
});

test('disabling bonuses keeps purchased tickets and awards none', () => {
  const result = calculateRaffleBonus({
    purchasedTickets: 15, purchaseTimestamp: 1000,
    salesStart: 0, salesEnd: 336 * 3600,
    tiers: parseBonusTiers('120:20,120:10,72:5,24:0'), enabled: false
  });
  assert.deepEqual(result, {
    purchasedTickets: 15, bonusPercent: 0, bonusTickets: 0, totalTickets: 15
  });
});

test('policy versions choose the latest setting up to a given time', () => {
  const before = { type: 'biweekly', effectiveFrom: 1000, enabled: true,
    tiers: parseBonusTiers('120:20,120:10,72:5,24:0') };
  const changed = { type: 'biweekly', effectiveFrom: 2000, enabled: true,
    tiers: parseBonusTiers('120:30,120:10,72:5,24:0') };
  const monthly = { type: 'monthly', effectiveFrom: 1500, enabled: false,
    tiers: parseBonusTiers('168:40,168:20,168:10,144:5,24:0') };
  const policies = [before, monthly, changed];
  assert.equal(selectBonusPolicy(policies, 'biweekly', 999), null);
  assert.equal(selectBonusPolicy(policies, 'biweekly', 1900), before);
  assert.equal(selectBonusPolicy(policies, 'biweekly', 2100), changed);
  assert.equal(selectBonusPolicy(policies, 'monthly', 2100), monthly);
});

test('changes recalculate an active raffle, while completed raffles keep their policies', () => {
  const original = { type: 'biweekly', effectiveFrom: 1000, enabled: true };
  const changed = { type: 'biweekly', effectiveFrom: 2000, enabled: false };
  const policies = [original, changed];
  assert.equal(selectRafflePolicy(policies, 'biweekly', 3000, 1900), original);
  assert.equal(selectRafflePolicy(policies, 'biweekly', 3000, 2100), changed);
  assert.equal(selectRafflePolicy(policies, 'biweekly', 1800, 2100), original);
  assert.equal(selectRafflePolicy(policies, 'biweekly', 4000, 3500), changed);
});

test('a historical raffle override changes only the selected raffle', () => {
  const defaultPolicy = { type: 'biweekly', effectiveFrom: 1000, enabled: true };
  const oldRaffle = { type: 'biweekly', salesEnd: 1800, enabled: false };
  assert.equal(selectRaffleBonusSettings([defaultPolicy], [oldRaffle], 'biweekly', 1800, 5000), oldRaffle);
  assert.equal(selectRaffleBonusSettings([defaultPolicy], [oldRaffle], 'biweekly', 2800, 5000), defaultPolicy);
});
