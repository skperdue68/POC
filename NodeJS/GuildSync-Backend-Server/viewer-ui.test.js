import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {canEditGuildSyncRole,isReadOnlyGuildSyncEvent} from './role-permissions.js';

for(const file of ['./web/src/main.js','../../GO/GuildSync-Frontend-Client/frontend/src/main.js']) {
 const source=readFileSync(new URL(file,import.meta.url),'utf8');
 const functions=names=>names.map(name=>source.match(new RegExp(`(?:async )?function ${name}\\([^]*?(?=\\n(?:async )?function |$)`))?.[0]||assert.fail('Missing '+name)).join('\n');
 const context=extra=>vm.createContext({guildSyncSession:{logged_in:true,allowed:true,token:'token',user:{role:'viewer'}},socket:{connected:true},canEditGuildSyncRole,isReadOnlyGuildSyncEvent,escapeHtml:String,escapeAttribute:String,...extra});
 test(`${file}: Viewer remains authenticated for reads but cannot edit`,()=>{
  const ctx=context();vm.runInContext(functions(['isAuthenticatedSession','canEditGuildSyncData']),ctx);
  assert.equal(vm.runInContext('isAuthenticatedSession()',ctx),true);assert.equal(vm.runInContext('canEditGuildSyncData()',ctx),false);
  for(const role of ['user','admin']){ctx.guildSyncSession.user.role=role;assert.equal(vm.runInContext('canEditGuildSyncData()',ctx),true);}
 });
 test(`${file}: link reports retain rows and omit approve/unlink/unblock controls`,()=>{
  const ctx=context({canEditGuildSyncData:()=>false,memberLinksLoading:false,memberLinks:[{eso_account_name:'@Test',discord_user_id:'2',link_status:'candidate'},{link_status:'linked'},{link_status:'blocked',locked:1}],getSortedMemberLinksForReport:links=>links,getMemberLinkReportDiscordDisplay:()=> 'Discord member',getMemberLinksReportSearchText:()=> '@Test'});
  vm.runInContext(functions(['renderMemberLinksRows']),ctx);const html=vm.runInContext('renderMemberLinksRows()',ctx);
  assert.match(html,/@Test|Discord member/);assert.doesNotMatch(html,/data-accept-member-candidate|data-unlink-member-link|data-unblock-member-auto-link/);
  ctx.canEditGuildSyncData=()=>true;assert.match(vm.runInContext('renderMemberLinksRows()',ctx),/data-accept-member-candidate/);
 });
 test(`${file}: Viewer can read notes and linked identities without editing forms`,()=>{
  const ctx=context({canEditGuildSyncData:()=>false,rosterNotesDialogAccountName:'@Test',rosterNotesDialogError:'',renderRosterNotesRows:()=>'<tr><td>Existing note</td></tr>',renderRosterNotesForm:()=>'<textarea id="editNote"></textarea>',getMemberLinkMatchedField:()=>'',renderMemberLinkCurrentStatus:()=> 'Linked',formatMemberLinkMethodForDisplay:String});
  vm.runInContext(functions(['renderRosterNotesDialog','renderMemberLinkCurrentCard','renderMemberLinkDialogOptions']),ctx);
  const notes=vm.runInContext('renderRosterNotesDialog()',ctx);assert.match(notes,/Existing note/);assert.doesNotMatch(notes,/editNote/);
  const link=vm.runInContext('renderMemberLinkCurrentCard({eso_account_name:"@Test",discord_username:"Member",link_status:"linked"})',ctx);assert.match(link,/@Test|Member/);assert.doesNotMatch(link,/data-unlink-dialog/);assert.equal(vm.runInContext('renderMemberLinkDialogOptions()',ctx),'');
 });
 test(`${file}: Viewer refresh loads stored Discord data without bot synchronization`,async()=>{
  let reads=0;const ctx=context({canEditGuildSyncData:()=>false,refreshDiscordData:async()=>reads++});vm.runInContext(functions(['requestDiscordDataRefresh']),ctx);await vm.runInContext('requestDiscordDataRefresh()',ctx);assert.equal(reads,1);
 });
 test(`${file}: Viewer background uploads and receipt processing return without side effects`,async()=>{
  const ctx=context({canEditGuildSyncData:()=>false,rosterUploadQueueProcessing:false,applicationsUploadQueueProcessing:false,bankingUploadQueueProcessing:false,depositMailPendingWriteAutoTimer:null,depositMailPendingWriteRunning:false});
  const names=['processPendingGuildSyncRosterUploads','processPendingGuildSyncApplicationsUploads','processPendingGuildSyncBankingUploads','processPendingDepositMailBatches','flushPendingDepositMailAckCleanup'];vm.runInContext(functions(names),ctx);for(const name of names)await vm.runInContext(name+'()',ctx);
 });
 test(`${file}: Viewer client refuses direct write events before emitting packets`,async()=>{
  let emissions=0;const ctx=context({socket:{connected:true,emit(){emissions++;}}});vm.runInContext(functions(['emitSocketWithAck']),ctx);await assert.rejects(vm.runInContext('emitSocketWithAck("guildsync:manual-link-member")',ctx),/read-only/);assert.equal(emissions,0);
 });
}
test('backend and both clients use the same role/event policy',()=>{
 const policy=readFileSync(new URL('./role-permissions.js',import.meta.url),'utf8');
 for(const path of ['./web/src/role-permissions.js','../../GO/GuildSync-Frontend-Client/frontend/src/role-permissions.js'])assert.equal(readFileSync(new URL(path,import.meta.url),'utf8'),policy);
});
