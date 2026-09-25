import test from 'node:test';
import assert from 'node:assert/strict';

// This suite uses an in-memory database boundary and never opens a connection.
process.env.MARIADB_USER ||= 'test';
process.env.MARIADB_PASSWORD ||= 'test';
const { getRaffleBonusChoices, saveRaffleBonusOverride } = await import('./guildsync-database-actions.js');

for (const type of ['biweekly', 'monthly']) {
  test(`saves an override for an existing ${type} raffle and rejects an unknown raffle`, async () => {
    const purchase = { transaction_type: type, event_timestamp: 1780000000 };
    const writes = [];
    const db = {
      async execute(sql, params = []) {
        const query = sql.trim();
        if (/^SELECT .* FROM guildsync_banking_entries/.test(query)) {
          const columns = query.match(/^SELECT (.*?) FROM/)[1].split(',').map((column) => column.trim());
          const rows = params.length && params[0] !== type ? [] : [purchase];
          return [rows.map((row) => Object.fromEntries(columns.map((column) => [column, row[column]])))];
        }
        if (/^SELECT/.test(query) && query.includes('guildsync_settings')) return [[]];
        if (/^INSERT INTO guildsync_raffle_bonus_overrides/.test(query)) {
          writes.push(params);
          return [{ affectedRows: 1 }];
        }
        throw new Error(`Unexpected query: ${query}`);
      }
    };
    const [choice] = await getRaffleBonusChoices(db, [], []);
    assert.equal(choice.type, type);
    const input = { raffleType: type, salesEnd: choice.salesEnd, enabled: true, tiers: choice.tiers };
    await saveRaffleBonusOverride(db, input);
    assert.deepEqual(writes, [[type, choice.salesEnd, 1, JSON.stringify(choice.tiers)]]);
    await assert.rejects(saveRaffleBonusOverride(db, { ...input, salesEnd: choice.salesEnd + 1 }), /no ticket purchases/);
    assert.equal(writes.length, 1);
  });
}
