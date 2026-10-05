import test from 'node:test';
import assert from 'node:assert/strict';
import { initializeDiscordOnboardingSchema } from './discord-onboarding-schema.js';
test('onboarding tables are additive and unique by guild/user or delivery',async()=>{
 const queries=[];const db={query:async sql=>queries.push(sql)};
 await initializeDiscordOnboardingSchema(db);await initializeDiscordOnboardingSchema(db);
 assert.equal(queries.length,6);
 assert.ok(queries.every(sql=>sql.includes('CREATE TABLE IF NOT EXISTS')));
 assert.ok(queries.some(sql=>/PRIMARY KEY \(guild_id, discord_id\)/.test(sql)));
 assert.ok(queries.some(sql=>/UNIQUE KEY.*guild_id, discord_id, kind/.test(sql)));
});
