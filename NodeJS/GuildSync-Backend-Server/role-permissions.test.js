import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {canEditGuildSyncRole,canIngestGuildSyncRole,isReadOnlyGuildSyncEvent} from './role-permissions.js';
import {registerRolePermissions} from './role-permissions-socket.js';

function socket(role='viewer') {
 return {guildSyncAuthenticated:true,guildSyncAuthType:'guildsync-user',guildSyncUser:{discord_user_id:'1',role},use(fn){this.middleware=fn},emit(event,payload){this.lastEvent={event,payload}}};
}
async function packet(client,event) {
 let allowed=false,result;
 await client.middleware([event,{},response=>result=response],()=>allowed=true);
 return {allowed,result};
}
test('viewers can read, ingest history and run auto-linking but cannot manually edit or process receipts',async()=>{
 const client=socket();registerRolePermissions(client,{execute:async()=>[[{allowed:1,role:'viewer'}]]});
 for(const event of ['request-banking-data','request-roster-data','request-discord-member-dataJSON','request-member-links','request-associate-ticket-report','request-discord-rank-audit-report','request-roster-member-notes','request-banking-history-records','request-admin-configuration'])assert.equal((await packet(client,'guildsync:'+event)).allowed,true,event);
 for(const event of ['upload-savedvars-raw','sending-banking-data','sending-roster-data','gsa-post-application','eso-guild-application-message','run-member-auto-linking','request-discord-data-refresh'])assert.equal((await packet(client,'guildsync:'+event)).allowed,true,event);
 for(const event of ['manual-link-member','manual-unlink-member','accept-member-link-candidate','unblock-member-auto-link','add-manual-biweekly-ticket-entry','move-banking-entry','add-roster-member-note','checkout-deposit-mail','mark-deposit-mail-sent','save-raffle-bonus-settings','change-user','save-admin-configuration','future-new-write']){const result=await packet(client,'guildsync:'+event);assert.equal(result.allowed,false,event);assert.equal(result.result.ok,false);assert.match(result.result.message,/access|permission/i);}
});
test('write permissions check current database role rather than cached or supplied roles',async()=>{
 const client=socket('admin');let current={allowed:1,role:'viewer'};
 registerRolePermissions(client,{execute:async(sql,args)=>{assert.deepEqual(args,['1']);return [[current]]}});
 assert.equal((await packet(client,'guildsync:manual-link-member')).allowed,false);
 current={allowed:1,role:'user'};assert.equal((await packet(client,'guildsync:manual-link-member')).allowed,true);assert.equal((await packet(client,'guildsync:move-banking-entry')).allowed,true);
 current={allowed:1,role:'admin'};assert.equal((await packet(client,'guildsync:change-user')).allowed,true);
 current={allowed:0,role:'admin'};assert.equal((await packet(client,'guildsync:manual-link-member')).allowed,false);
});
test('bot traffic keeps its existing independent authorization and failures deny writes',async()=>{
 const client=socket();client.guildSyncAuthType='discord-bot';registerRolePermissions(client,{execute:async()=>{throw Error('not needed')}});assert.equal((await packet(client,'guildsync:sending-banking-data')).allowed,true);
 client.guildSyncAuthType='guildsync-user';assert.equal((await packet(client,'guildsync:manual-link-member')).allowed,false);
 await client.middleware(['guildsync:manual-link-member',{}],()=>assert.fail('must not run handler'));assert.equal(client.lastEvent.event,'guildsync:permission-denied');
});
test('only User and Admin roles allow data edits',()=>{
 for(const role of ['viewer','pending','',undefined,'unexpected'])assert.equal(canEditGuildSyncRole(role),false);
 for(const role of ['user','admin'])assert.equal(canEditGuildSyncRole(role),true);
 assert.equal(isReadOnlyGuildSyncEvent('guildsync:request-discord-data-refresh'),false,'sync refresh can auto-link and must remain an edit action');
});
test('HTTP uploads accept approved viewers and reject accounts without ingestion access',async()=>{
 const source=readFileSync(new URL('./guildsync-backend-server.js',import.meta.url),'utf8');
 const text=source.slice(source.indexOf('async function requireGuildSyncWebUser('),source.indexOf('\nfunction renderWebAuthResultPage('));
 let role='pending';const middleware=vm.runInNewContext(text+'\nrequireGuildSyncWebUser',{getBearerToken:()=> 'token',verifyGuildSyncSession:async()=>({role}),canIngestGuildSyncRole});
 let status,body,next=false;const response={status(value){status=value;return this},json(value){body=value;return this}};
 await middleware({},response,()=>next=true);assert.equal(status,403);assert.equal(next,false);
 role='viewer';await middleware({},response,()=>next=true);assert.equal(next,true);
});
