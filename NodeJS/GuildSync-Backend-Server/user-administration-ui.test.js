import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createUserAdministrationPanel,renderUserCard,pendingBadge} from './web/src/user-administration.js';
const row={discord_user_id:'1',username:'Test',role:'admin',allowed:1,email:'test@example.com',guild_member_name:'@Test'};
test('own account has profile fields but no role editor or remove action',()=>{
 const html=renderUserCard(row,'1');assert.match(html,/name="email"/);assert.match(html,/name="guild_member_name"/);assert.doesNotMatch(html,/name="role"|data-user-remove|data-user-approve/);assert.match(html,/Your role cannot be changed here/);
});
test('other pending accounts expose approval, role selection, profile edits and removal',()=>{
 const html=renderUserCard({...row,discord_user_id:'2',role:'pending',allowed:0},'1');assert.match(html,/Pending approval/);assert.match(html,/data-user-approve/);assert.match(html,/data-user-remove/);assert.match(html,/name="role"/);assert.match(html,/<option value="viewer" selected>Viewer/);assert.match(html,/<option value="user" >User/);assert.match(html,/<option value="admin" >Admin/);
});
test('user-controlled names and emails are escaped and pending badge is zero-safe',()=>{
 const html=renderUserCard({...row,username:'<script>bad()</script>',guild_member_name:'" autofocus onfocus="bad()'},'1');assert.doesNotMatch(html,/<script>|" autofocus/);assert.match(html,/&lt;script&gt;/);assert.equal(pendingBadge(0),'');assert.match(pendingBadge(3),/>3<\/span>/);assert.match(pendingBadge(100),/99\+/);
});

test('a pending notification wins over an older in-flight count request',async()=>{
 let resolve,count=0;
 const panel=createUserAdministrationPanel({request:()=>new Promise(done=>resolve=done),getUser:()=>({role:'admin'}),onCount:value=>count=value});
 const request=panel.refreshCount();panel.changed({pending_count:4});resolve({ok:true,pending_count:1});await request;assert.equal(count,4);assert.equal(panel.count,4);
 panel.reset();assert.equal(count,0);
});

test('non-admins do not request account counts',async()=>{
 let calls=0;
 const panel=createUserAdministrationPanel({request:async()=>{calls++;},getUser:()=>({role:'user'})});
 await panel.refreshCount();panel.open();assert.equal(calls,0);assert.equal(panel.isOpen,false);
});

test('desktop and web share the same account editor and styles',()=>{
 for(const name of ['user-administration.js','user-administration.css'])assert.equal(readFileSync(new URL('./web/src/'+name,import.meta.url),'utf8'),readFileSync(new URL('../../GO/GuildSync-Frontend-Client/frontend/src/'+name,import.meta.url),'utf8'));
});
