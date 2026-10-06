import test from 'node:test';
import assert from 'node:assert/strict';
import {initializeVoiceMuteSchema} from './voice-mute-schema.js';
import {createVoiceMuteStore,validateVoiceMuteSnapshot} from './voice-mute-store.js';

const empty=()=>({revision:0,moderatorMutes:[],sessions:[],targets:[],auditCursor:null});
test('startup migration is additive and keys mute records by server and member',async()=>{
 const sql=[];await initializeVoiceMuteSchema({query:async q=>sql.push(q)});await initializeVoiceMuteSchema({query:async q=>sql.push(q)});
 assert.equal(sql.length,8);assert.ok(sql.every(q=>q.startsWith('CREATE TABLE IF NOT EXISTS')));assert.match(sql[1],/PRIMARY KEY \(guild_id, discord_user_id\)/);assert.match(sql[3],/PRIMARY KEY \(guild_id, session_id, discord_user_id\)/);
});
test('snapshot rejects duplicates, missing sessions and malformed identities',()=>{
 assert.doesNotThrow(()=>validateVoiceMuteSnapshot(empty()));
 assert.throws(()=>validateVoiceMuteSnapshot({...empty(),moderatorMutes:[{userId:'1',mutedAt:1},{userId:'1',mutedAt:1}]}),/duplicate/i);
 assert.throws(()=>validateVoiceMuteSnapshot({...empty(),targets:[{sessionId:'s',userId:'1',state:'applied'}]}),/session/i);
 assert.throws(()=>validateVoiceMuteSnapshot({...empty(),moderatorMutes:[{userId:'spoof',mutedAt:1}]}),/ID/);
});
function db() {
 let row=null,records={guildsync_discord_mutes:[],guildsync_voice_mute_sessions:[],guildsync_voice_mute_targets:[]},backup;
 const trace=[];const database={trace,async getConnection(){return this;},async beginTransaction(){backup=structuredClone({row,records});},async commit(){},async rollback(){row=backup.row;records=backup.records;},release(){},async execute(sql,args=[]){
  trace.push(sql);
  if(sql.startsWith('INSERT IGNORE INTO guildsync_voice_mute_state'))row ||= {revision:0,owner_id:null,lease_until:0,audit_cursor:null};
  else if(sql.startsWith('SELECT * FROM guildsync_voice_mute_state'))return [[row].filter(Boolean)];
  else if(sql.startsWith('UPDATE guildsync_voice_mute_state SET owner_id')){row.owner_id=args[0];row.lease_until=args[1];}
  else if(sql.startsWith('UPDATE guildsync_voice_mute_state SET revision')){row.revision=args[0];row.audit_cursor=args[1];row.audit_state_json=args[2];}
  else for(const name of Object.keys(records)) {
   if(sql.startsWith('SELECT data_json FROM '+name))return [records[name].map(data_json=>({data_json}))];
   if(sql.startsWith('DELETE FROM '+name))records[name]=[];
   if(sql.startsWith('INSERT INTO '+name))records[name].push(args.at(-1));
  }
  return [{}];
 }};return database;
}
test('single worker lease, revision compare-and-swap, and complete snapshot replacement',async()=>{
 let time=1000;const database=db(),store=createVoiceMuteStore(database,{now:()=>time});
 let state=await store.claim('999','bot-1');assert.equal(state.revision,0);
 await assert.rejects(store.claim('999','bot-2'),/another/i);await assert.rejects(store.read('999','bot-2'),/lease/i);
 state=await store.save('999','bot-1',{...state,moderatorMutes:[{userId:'123',actorId:'124',mutedAt:1000,auditEntryId:'125'}]});
 assert.equal(state.revision,1);assert.equal((await store.read('999','bot-1')).moderatorMutes[0].userId,'123');
 await assert.rejects(store.save('999','bot-1',empty()),/revision/i);
 state=await store.save('999','bot-1',{...state,moderatorMutes:[]});assert.deepEqual((await store.read('999','bot-1')).moderatorMutes,[]);
 time=21001;await assert.rejects(store.read('999','bot-1'),/lease/i);assert.equal((await store.claim('999','bot-2')).revision,2);
 assert.ok(database.trace.some(q=>q.includes('FOR UPDATE')));
});
test('only the lease owner can release it',async()=>{
 const store=createVoiceMuteStore(db(),{now:()=>1000});await store.claim('999','owner');await store.release('999','other');await assert.rejects(store.claim('999','other'),/another/i);await store.release('999','owner');assert.equal((await store.claim('999','other')).revision,0);
});
