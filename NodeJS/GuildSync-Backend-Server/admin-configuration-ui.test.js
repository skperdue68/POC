import test from 'node:test';
import assert from 'node:assert/strict';
import {draftSetting,createAccordionState,receiptPreview,formatConfigurationValue,createConfigurationPanel} from './web/src/admin-configuration.js';
import fs from 'node:fs';
test('accordion toggles one section without changing a draft',()=>{const a=createAccordionState();const draft={key:'edited'};a.toggle('bonus');assert.equal(a.open,'bonus');a.toggle('configuration');assert.equal(a.open,'configuration');a.toggle('configuration');assert.equal(a.open,'');assert.deepEqual(draft,{key:'edited'});});
test('default reset displays environment value and remains a deletion in the draft',()=>{const setting={key:'key',value:20,defaultValue:10,source:'GuildSync override'};const changes={key:null};assert.deepEqual(draftSetting(setting,changes),{value:10,override:false,source:'Default (pending Save)'});assert.equal(changes.key,null);assert.equal(draftSetting(setting,{}).value,20);});
test('preview substitutes bonus and common receipt placeholders',()=>{assert.match(receiptPreview('Tickets {ticket_quantity}\n{bonus_block}'),/Tickets 20/);assert.match(receiptPreview('{bonus_block}'),/20%/);assert.doesNotMatch(receiptPreview('{bonus_block}'),/\{/);});
test('desktop and web use the same configuration component',()=>{assert.equal(fs.readFileSync(new URL('./web/src/admin-configuration.js',import.meta.url),'utf8'),fs.readFileSync(new URL('../../GO/GuildSync-Frontend-Client/frontend/src/admin-configuration.js',import.meta.url),'utf8'));});

test('boolean and mode defaults use the same display labels as selections',()=>{
 assert.equal(formatConfigurationValue({type:'boolean'},true),'Enabled');assert.equal(formatConfigurationValue({type:'boolean'},false),'Disabled');
 assert.equal(formatConfigurationValue({type:'boolean'},'false'),'Disabled');assert.equal(formatConfigurationValue({type:'select'},'private_thread'),'Private thread (public fallback)');
 assert.equal(formatConfigurationValue({type:'number'},24),'24');assert.equal(formatConfigurationValue({type:'id'},''),'Not configured');
});
test('configuration renders Return to default with an aligned human-readable default value',async t=>{
 const original=globalThis.document;globalThis.document={getElementById:()=>null,querySelectorAll:()=>[]};t.after(()=>globalThis.document=original);
 const panel=createConfigurationPanel();let rendered;const ready=new Promise(resolve=>rendered=resolve);
 panel.wire({request:async()=>({ok:true,configuration:{revision:1,botDefaultsReported:true,settings:[{key:'enabled',group:'Example',label:'Feature enabled',type:'boolean',value:false,defaultValue:true,source:'GuildSync override'},{key:'mode',group:'Example',label:'Delivery',type:'select',options:['private_thread','channel'],value:'channel',defaultValue:'private_thread',source:'.env'}]}}),rerender:()=>rendered()});
 await ready;const html=panel.render();assert.match(html,/Return to default/);assert.match(html,/class="configuration-values"/);assert.match(html,/<output[^>]*>Enabled<\/output>/);assert.match(html,/<output[^>]*>Private thread \(public fallback\)<\/output>/);
 assert.match(html,/<option value="false" selected>Disabled<\/option>/);assert.match(html,/<option value="channel" selected>Channel or thread<\/option>/);
 assert.doesNotMatch(html,/Default: (?:true|false)|Use \.env default|original \.env default/);
});
