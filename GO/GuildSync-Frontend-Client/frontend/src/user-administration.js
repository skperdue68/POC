import {GUILDSYNC_ROLES} from './role-permissions.js';
const escape=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const pending=user=>!user.revoked_at&&(!Number(user.allowed)||user.role==='pending');
const snapshot=user=>({allowed:Number(user.allowed),role:user.role,email:user.email??'',guild_member_name:user.guild_member_name??'',revoked_at:user.revoked_at??null});
export function filterUserAccounts(users,filter='all',search=''){
 const query=search.trim().toLowerCase();
 return users.filter(user=>(filter==='revoked'?!!user.revoked_at:!user.revoked_at&&(filter!=='pending'||pending(user)))&&(!query||[user.username,user.global_name,user.guild_member_name,user.email,user.discord_user_id,user.role].some(value=>String(value??'').toLowerCase().includes(query))));
}
export function pendingBadge(count){return Number(count)>0?`<span class="user-pending-badge" aria-hidden="true">${Number(count)>99?'99+':Number(count)}</span>`:'';}
export function renderUserCard(user,actorId,draft={}){
 const own=user.discord_user_id===actorId,revoked=!!user.revoked_at,role=draft.role??(GUILDSYNC_ROLES.includes(user.role)?user.role:'viewer'),key=escape(user.discord_user_id);
 return `<form class="user-admin-card" data-user-id="${key}">
  <header><div><h3>${escape(user.guild_member_name||user.global_name||user.username||user.discord_user_id)}${own?' (You)':''}</h3><p>${escape(user.username)} · Discord ID: ${key}</p></div><span class="user-admin-status ${pending(user)?'is-pending':''}">${revoked?'Revoked':pending(user)?'Pending approval':'Approved'}</span></header>
  <fieldset class="user-admin-fields"><label>Email<input name="email" type="email" maxlength="255" value="${escape(draft.email??user.email??'')}" placeholder="Not configured"></label>
   <label>Guild member name<input name="guild_member_name" maxlength="255" value="${escape(draft.guild_member_name??user.guild_member_name??'')}" placeholder="ESO / guild display name"></label>
   ${own?`<div class="user-admin-own-role">Role: ${escape(user.role)}<small>Your role cannot be changed here.</small></div>`:`<label>Role<select name="role">${GUILDSYNC_ROLES.map(value=>`<option value="${value}" ${role===value?'selected':''}>${value[0].toUpperCase()+value.slice(1)}</option>`).join('')}</select></label>`}
  </fieldset>
  <p class="user-admin-dates">Requested: ${escape(user.requested_at||'Not recorded')} · Last login: ${escape(user.last_login_at||'Never')}${revoked?' · Revoked: '+escape(user.revoked_at):''}</p>
  <div class="user-admin-actions">${revoked?(!own?'<button type="button" data-user-reinstate>Reinstate account</button><span>Restores access with the selected role. The user must sign in again.</span>':''):`<button type="submit">Save changes</button>${!own&&pending(user)?'<button type="button" data-user-approve>Approve account</button>':''}${!own?'<button type="button" class="user-admin-remove" data-user-remove>Revoke account</button>':''}`}</div>
 </form>`;
}
export function createUserAdministrationPanel({request,getUser,onCount=()=>{}}){
 let users=[],count=0,timer=null,overlay=null,loading=false,busy=false,search='',filter='all',generation=0,countRevision=0,previousFocus=null;
 const drafts=new Map(),admin=()=>getUser()?.role==='admin';
 const setCount=value=>{count=Math.max(0,Math.floor(Number(value)||0));onCount(admin()?count:0);};
 const message=text=>{const status=overlay?.querySelector('[data-user-admin-message]');if(status)status.textContent=text;};
 const setBusy=value=>{busy=value;overlay?.querySelectorAll('fieldset,[data-user-admin-refresh],.user-admin-actions button,.user-admin-confirmation button').forEach(element=>element.disabled=value);};
 const refreshCount=async()=>{
  if(!admin()){setCount(0);return;}
  const current=generation,revision=countRevision;
  try{const result=await request('guildsync:request-pending-users',{});if(current===generation&&revision===countRevision&&admin()&&result?.ok)setCount(result.pending_count);}catch{/* Reconnect or the next count refresh retries without disrupting other screens. */}
 };
 const collect=form=>{const data=new FormData(form),result={email:String(data.get('email')??''),guild_member_name:String(data.get('guild_member_name')??'')};if(data.has('role'))result.role=String(data.get('role'));return result;};
 const change=async(form,action)=>{
  if(busy||!admin())return;
  const user=users.find(row=>row.discord_user_id===form.dataset.userId);if(!user)return;
  const current=generation,payload={action,discord_user_id:user.discord_user_id,expected:snapshot(user),...(action==='revoke'?{}:collect(form))};
  setBusy(true);message('Saving account changes...');
  try{
   const result=await request('guildsync:change-user',payload);if(!result?.ok)throw Error(result?.message||'Could not update this account.');
   if(current!==generation||!admin())return;
   drafts.delete(user.discord_user_id);
   if(result.user)users=users.map(row=>row.discord_user_id===user.discord_user_id?result.user:row);
   else if(result.removed)users=users.filter(row=>row.discord_user_id!==user.discord_user_id);
   void refreshCount();drawRows();message(action==='revoke'?'Account access revoked and login sessions cleared. The account record is retained.':action==='reinstate'?'Account reinstated. The user can sign in again.':action==='approve'?'Account approved. The user can sign in now.':'Account changes saved.');
  }catch(error){if(current===generation)message(error.message);}finally{if(current===generation)setBusy(false);}
 };
 const confirmRemove=form=>{
  overlay?.querySelector('.user-admin-confirmation')?.remove();
  const box=document.createElement('div');box.className='user-admin-confirmation';box.innerHTML='<p>Revoke access and sign out this user? Their account and banking history will be retained. Their next Discord login will request approval again.</p><button type="button" data-confirm-remove>Revoke account</button><button type="button" data-cancel-remove>Cancel</button>';form.append(box);
  box.querySelector('[data-confirm-remove]').addEventListener('click',()=>void change(form,'revoke'));
  box.querySelector('[data-cancel-remove]').addEventListener('click',()=>box.remove());box.querySelector('button').focus();
 };
 function drawRows(){
  if(!overlay)return;const list=overlay.querySelector('.user-admin-list'),scroll=list.scrollTop;
  const rows=filterUserAccounts(users,filter,search);
  list.innerHTML=rows.map(user=>renderUserCard(user,getUser().discord_user_id,drafts.get(user.discord_user_id))).join('')||'<p>No matching accounts.</p>';
  overlay.querySelector('[data-user-admin-count]').textContent=`${rows.length} account${rows.length===1?'':'s'} · ${count} pending`;
  list.querySelectorAll('[data-user-id]').forEach(form=>{
   form.addEventListener('input',()=>drafts.set(form.dataset.userId,collect(form)));
   form.addEventListener('submit',event=>{event.preventDefault();if(!users.find(user=>user.discord_user_id===form.dataset.userId)?.revoked_at)void change(form,'save');});
   form.querySelector('[data-user-approve]')?.addEventListener('click',()=>void change(form,'approve'));
   form.querySelector('[data-user-remove]')?.addEventListener('click',()=>confirmRemove(form));
   form.querySelector('[data-user-reinstate]')?.addEventListener('click',()=>void change(form,'reinstate'));
  });list.scrollTop=scroll;setBusy(busy);
 }
 const load=async()=>{
  if(loading||busy||!admin())return;loading=true;setBusy(true);message('Loading GuildSync accounts...');const current=generation,revision=countRevision;
  try{const result=await request('guildsync:request-users',{include_revoked:true});if(!result?.ok)throw Error(result?.message||'Could not load accounts.');if(current!==generation||!admin())return;users=result.users;drafts.clear();if(revision===countRevision)setCount(result.pending_count);drawRows();message('Only admins can manage accounts. Your own role and account access are protected.');}
  catch(error){if(current===generation)message(error.message);}finally{if(current===generation){loading=false;setBusy(false);}}
 };
 const close=()=>{if(busy&&!loading)return;overlay?.remove();overlay=null;if(previousFocus?.isConnected)previousFocus.focus({preventScroll:true});};
 const open=()=>{
  if(!admin()||overlay)return;previousFocus=document.activeElement;overlay=document.createElement('div');overlay.className='user-admin-overlay';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-labelledby','userAdminTitle');
  overlay.innerHTML='<section class="user-admin-dialog"><header class="user-admin-header"><div><h2 id="userAdminTitle">Manage GuildSync Users</h2><p>Review access requests and maintain GuildSync login records.</p></div><button type="button" data-user-admin-close aria-label="Close user administration">Close</button></header><p role="status" data-user-admin-message></p><div class="user-admin-toolbar"><label>Search accounts<input type="search" data-user-admin-search placeholder="Name, email, role, or Discord ID"></label><label>Show<select data-user-admin-filter><option value="all">Current accounts</option><option value="pending">Pending approval</option><option value="revoked">Revoked accounts</option></select></label><button type="button" data-user-admin-refresh>Refresh list (discard edits)</button><span data-user-admin-count></span></div><div class="user-admin-list"></div></section>';
  document.body.append(overlay);overlay.querySelector('[data-user-admin-search]').value=search;overlay.querySelector('[data-user-admin-filter]').value=filter;
  overlay.querySelector('[data-user-admin-close]').addEventListener('click',close);
  overlay.querySelector('[data-user-admin-refresh]').addEventListener('click',()=>void load());
  overlay.querySelector('[data-user-admin-search]').addEventListener('input',event=>{search=event.target.value;drawRows();});
  overlay.querySelector('[data-user-admin-filter]').addEventListener('change',event=>{filter=event.target.value;drawRows();});
  overlay.addEventListener('keydown',event=>{
   if(event.key==='Escape'){event.preventDefault();event.stopImmediatePropagation();close();}
   if(event.key==='Tab'){const controls=[...overlay.querySelectorAll('button,input,select')].filter(element=>!element.disabled&&element.offsetParent!==null),first=controls[0],last=controls.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}}
  });overlay.querySelector('[data-user-admin-close]').focus();if(drafts.size){drawRows();message('Unsaved edits restored. Refresh the list to discard them and retrieve current records.');}else void load();
 };
 return {open,close,refreshCount,get count(){return count},get isOpen(){return !!overlay},stop(){clearInterval(timer);timer=null;},start(){clearInterval(timer);if(admin()){void refreshCount();timer=setInterval(()=>void refreshCount(),60000);}},changed(payload){if(!admin())return;countRevision++;setCount(payload.pending_count);if(overlay)message('Accounts changed. Refresh the list for current records; unsaved edits are preserved.');},reset(){generation++;clearInterval(timer);timer=null;busy=false;loading=false;close();users=[];drafts.clear();search='';filter='all';setCount(0);}};
}
