import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {renderRoleViewControls} from './web/src/role-view-controls.js';
test('only real Admins receive view controls',()=>{
 assert.equal(renderRoleViewControls({role:'user'}),'');assert.equal(renderRoleViewControls({role:'viewer'}),'');assert.equal(renderRoleViewControls({role:'admin',actual_role:'user'}),'');
 const html=renderRoleViewControls({role:'admin'});assert.match(html,/View as User/);assert.match(html,/View as Viewer/);assert.doesNotMatch(html,/Return to Admin View/);
});
test('preview replaces both view choices with a return-to-admin action',()=>{
 for(const role of ['user','viewer']){const html=renderRoleViewControls({role,actual_role:'admin'});assert.match(html,/Viewing as/);assert.match(html,/Return to Admin View/);assert.doesNotMatch(html,/View as User|View as Viewer/);}
});
test('both clients share the same preview menu',()=>assert.equal(readFileSync(new URL('./web/src/role-view-controls.js',import.meta.url),'utf8'),readFileSync(new URL('../../GO/GuildSync-Frontend-Client/frontend/src/role-view-controls.js',import.meta.url),'utf8')));
