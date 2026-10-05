import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createUserAdministration, registerUserAdministrationSocket} from './user-administration.js';

function database() {
 const users=new Map([
  ['1',{discord_user_id:'1',username:'Admin',role:'admin',allowed:1,email:'admin@example.com',guild_member_name:'@Admin'}],
  ['2',{discord_user_id:'2',username:'Pending',role:'pending',allowed:0,email:null,guild_member_name:null}],
  ['3',{discord_user_id:'3',username:'Member',role:'user',allowed:1,email:'old@example.com',guild_member_name:'@Member'}]
 ]);const sessions=new Set(['2','3']);let snapshot;
 const db={users,sessions,async getConnection(){return this},async beginTransaction(){snapshot=new Map([...users].map(([k,v])=>[k,{...v}]))},async commit(){snapshot=null},async rollback(){if(snapshot){users.clear();for(const [k,v] of snapshot)users.set(k,v)}},release(){},async execute(sql,args=[]){
  if(sql.includes('COUNT(*)'))return [[{pending_count:[...users.values()].filter(u=>!u.allowed||u.role==='pending').length,admin_count:[...users.values()].filter(u=>u.allowed&&u.role==='admin').length}]];
  if(sql.startsWith('SELECT')) {
   if(sql.includes("role = 'admin'"))return [[...users.values()].filter(u=>u.allowed&&u.role==='admin').map(u=>({...u}))];
   if(sql.includes('discord_user_id = ?'))return [[...users.values()].filter(u=>u.discord_user_id===args[0]).map(u=>({...u}))];
   return [[...users.values()].map(u=>({...u}))];
  }
  if(sql.startsWith('UPDATE')){const id=args.at(-1),row=users.get(id);const fields=sql.split(' SET ')[1].split(' WHERE ')[0].split(',').map(x=>x.trim().split(' = ')[0]);fields.forEach((key,i)=>row[key]=args[i]);return [{}]}
  if(sql.startsWith('DELETE FROM guildsync_login_sessions'))sessions.delete(args[0]);
  else if(sql.startsWith('DELETE'))users.delete(args[0]);
  else if(sql.trimStart().startsWith('INSERT INTO guildsync_users')){const old=users.get(args[0]);if(old){old.username=args[1];if(/email\s*=/.test(sql.split('ON DUPLICATE KEY UPDATE')[1]))old.email=args[3]}else users.set(args[0],{discord_user_id:args[0],username:args[1],email:args[3],allowed:args[5],role:args[6]})}
  return [{}];
 }};return db;
}
const expected=row=>({allowed:row.allowed,role:row.role,email:row.email??'',guild_member_name:row.guild_member_name??''});
test('only current approved admins can list users or see pending counts',async()=>{
 const db=database(),service=createUserAdministration(db);await assert.rejects(service.list('3'),/Admin/);await assert.rejects(service.pending('2'),/Admin/);
 db.users.get('3').token='private';const result=await service.list('1');assert.equal(result.users.length,3);assert.equal(result.pending_count,1);assert.equal(result.users[2].token,undefined);
});
test('approve and edit records, including role, email and guild name',async()=>{
 const db=database(),service=createUserAdministration(db);await service.change('1',{action:'approve',discord_user_id:'2',expected:expected(db.users.get('2')),role:'user',email:'new@example.com',guild_member_name:'@New'});
 assert.equal(db.users.get('2').allowed,1);assert.equal(db.users.get('2').role,'user');assert.ok(db.users.get('2').approved_at);
 await service.change('1',{action:'save',discord_user_id:'3',expected:expected(db.users.get('3')),role:'admin',email:'edited@example.com',guild_member_name:'@Edited'});
 assert.equal(db.users.get('3').role,'admin');assert.equal(db.users.get('3').email,'edited@example.com');assert.equal(db.users.get('3').guild_member_name,'@Edited');
});
test('self role changes and self removal are rejected but own profile edits work',async()=>{
 const db=database(),service=createUserAdministration(db);for(const change of [{action:'remove'},{action:'save',role:'user'}])await assert.rejects(service.change('1',{...change,discord_user_id:'1',expected:expected(db.users.get('1'))}),/own/);
 await service.change('1',{action:'save',discord_user_id:'1',expected:expected(db.users.get('1')),email:'self@example.com'});assert.equal(db.users.get('1').role,'admin');assert.equal(db.users.get('1').email,'self@example.com');
});
test('removal deletes the login record and all login sessions and notifies after commit',async()=>{
 const db=database(),changes=[],service=createUserAdministration(db,{onChange:async change=>{assert.equal(db.users.has('3'),false);changes.push(change)}});
 await service.change('1',{action:'remove',discord_user_id:'3',expected:expected(db.users.get('3'))});assert.equal(db.users.has('3'),false);assert.equal(db.sessions.has('3'),false);assert.equal(changes[0].removed,true);
});
test('reject invalid fields, stale edits and a demoted administrator without changing records',async()=>{
 const db=database(),service=createUserAdministration(db),base={action:'save',discord_user_id:'3',expected:expected(db.users.get('3'))};
 for(const invalid of [{role:'owner'},{email:'invalid'},{guild_member_name:'x'.repeat(256)},{allowed:1}])await assert.rejects(service.change('1',{...base,...invalid}));
 db.users.get('3').email='other@example.com';await assert.rejects(service.change('1',{...base,email:'stale@example.com'}),/changed/);
 db.users.get('1').role='user';await assert.rejects(service.change('1',{...base,expected:expected(db.users.get('3'))}),/Admin/);assert.equal(db.users.get('3').email,'other@example.com');
});
test('Discord login preserves administrator-edited or cleared email',async()=>{
 const source=fs.readFileSync(new URL('./guildsync-database-actions.js',import.meta.url),'utf8');const fn=source.match(/export async function upsertLoginUser\([^]*?(?=\nexport )/)[0].replace('export ','');
 const db=database(),ctx={};vm.createContext(ctx);vm.runInContext(fn,ctx);
 db.users.get('3').email='edited@example.com';await ctx.upsertLoginUser(db,{id:'3',username:'Member',email:'discord@example.com'});assert.equal(db.users.get('3').email,'edited@example.com');
 db.users.get('3').email=null;await ctx.upsertLoginUser(db,{id:'3',username:'Member',email:'discord@example.com'});assert.equal(db.users.get('3').email,null);
});
test('socket routes reject bots/anonymous callers and derive actor from authentication',async()=>{
 const handlers=new Map(),actors=[],socket={guildSyncAuthenticated:true,guildSyncAuthType:'discord-bot',guildSyncUser:{discord_user_id:'1'},on:(key,fn)=>handlers.set(key,fn)};
 registerUserAdministrationSocket(socket,{list:async id=>{actors.push(id);return{}},pending:async()=>({pending_count:0}),change:async()=>({})});
 let result;await handlers.get('guildsync:request-users')({},r=>result=r);assert.equal(result.ok,false);assert.equal(actors.length,0);
 socket.guildSyncAuthType='GuildSync user';await handlers.get('guildsync:request-users')({actor:'3'},r=>result=r);assert.equal(result.ok,true);assert.deepEqual(actors,['1']);
});
