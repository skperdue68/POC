import test from 'node:test';
import assert from 'node:assert/strict';
import {draftSetting,createAccordionState,receiptPreview} from './web/src/admin-configuration.js';
import fs from 'node:fs';
test('accordion toggles one section without changing a draft',()=>{const a=createAccordionState();const draft={key:'edited'};a.toggle('bonus');assert.equal(a.open,'bonus');a.toggle('configuration');assert.equal(a.open,'configuration');a.toggle('configuration');assert.equal(a.open,'');assert.deepEqual(draft,{key:'edited'});});
test('default reset displays environment value and remains a deletion in the draft',()=>{const setting={key:'key',value:20,defaultValue:10,source:'GuildSync override'};const changes={key:null};assert.deepEqual(draftSetting(setting,changes),{value:10,override:false,source:'.env (pending Save)'});assert.equal(changes.key,null);assert.equal(draftSetting(setting,{}).value,20);});
test('preview substitutes bonus and common receipt placeholders',()=>{assert.match(receiptPreview('Tickets {ticket_quantity}\n{bonus_block}'),/Tickets 20/);assert.match(receiptPreview('{bonus_block}'),/20%/);assert.doesNotMatch(receiptPreview('{bonus_block}'),/\{/);});
test('desktop and web use the same configuration component',()=>{assert.equal(fs.readFileSync(new URL('./web/src/admin-configuration.js',import.meta.url),'utf8'),fs.readFileSync(new URL('../../GO/GuildSync-Frontend-Client/frontend/src/admin-configuration.js',import.meta.url),'utf8'));});
