(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Dc({save:t,cancel:e,error:n=()=>{},changed:r=()=>{}}){let i=!1;const s=new Set,o=new Set,a=f=>{const p=f.code||f.key;return/^Control/.test(p)||p==="Ctrl"?"Ctrl":/^Shift/.test(p)?"Shift":/^Alt/.test(p)?"Alt":/^[a-z0-9]$/i.test(f.key)?f.key.toUpperCase():/^Key[A-Z]$/.test(p)?p.slice(3):/^Digit[0-9]$/.test(p)||/^Arrow/.test(p)?p.slice(5):p===" "||p==="Space"?"Space":/^([A-Za-z0-9]|F([1-9]|1[0-2])|Tab|Enter|Backspace|Delete|Insert|Home|End|PageUp|PageDown|Left|Right|Up|Down)$/.test(p)?p.toUpperCase():null},l=()=>{i=!1,s.clear(),o.clear()},d=()=>{!i||(l(),e())};return{start(){l(),i=!0},cancel:d,keydown(f){var m;if(!i)return;if(f.preventDefault(),(m=f.stopImmediatePropagation)==null||m.call(f),f.key==="Escape"){d();return}const p=a(f);if(!p){d(),n("This key is not supported. Use letters, numbers, F1\u2013F12, Ctrl, Alt, Shift, Space, or navigation keys.");return}s.add(f.code||f.key),o.add(p),r([...o].join("+"))},keyup(f){var p;if(!!i&&(f.preventDefault(),(p=f.stopImmediatePropagation)==null||p.call(f),s.delete(f.code||f.key),!s.size&&o.size)){const m=[...o].join("+");l(),t(m)}}}}function Mc({bridge:t,eventsOn:e,getSocket:n,authenticated:r,changed:i=()=>{}}){let s={enabled:!1,shortcut:"Ctrl+M",supported:!1},o=!1,a=null,l=null,d=!1,f="",p=!1,m=!1,A=!1,S=null,_=0,R=null;const k=()=>i(),G=(T,N,z)=>{const F=n();F!=null&&F.connected&&F.emit("guildsync:voice-mute-hotkey",{state:T,sessionId:N},z)};function x(){clearInterval(l),l=null;const T=a;a=null,T&&G("released",T)}function X({state:T}){var z;if(T==="released"){o=!1,x();return}if(T!=="pressed"||o||(o=!0,!m||!s.enabled||d||!r()||!((z=n())!=null&&z.connected)))return;const N=crypto.randomUUID();a=N,G("pressed",N,F=>{if(N===a){if(!(F!=null&&F.ok)){f=(F==null?void 0:F.message)||"Voice mute was rejected.",x(),k();return}f="Hold to mute active",k()}}),a===N&&(l=setInterval(()=>{var F;if(!m||!o||!r()||!((F=n())!=null&&F.connected)){x();return}if(a!==N){x();return}G("heartbeat",N,se=>{N===a&&!(se!=null&&se.ok)&&(f=(se==null?void 0:se.message)||"Voice mute ended.",x(),k())})},2e3))}async function Se(){if(!p){p=!0,e("guildsync:voice-hotkey",X);try{s=await t.GetVoiceHotkeySettings()}catch(T){f=String(T)}k()}}async function jt(T){var N,z;if(await Se(),clearInterval(S),S=null,!T){_++,R=null,m=!1,x(),w(),await le(!1),k();return}await Ne(),(N=n())!=null&&N.connected&&(S=setInterval(()=>void Ne(),3e4),(z=S.unref)==null||z.call(S))}async function le(T){if(A!==T){A=T;try{await t.SetVoiceHotkeyActive(T)}catch(N){A=!1,f=String(N),k()}}}async function Ne(){if(R)return R;const T=++_,N=n(),z=(async()=>{await Se();let F;if(r()&&(N==null?void 0:N.connected)&&(F=await new Promise(qn=>{const fr=setTimeout(()=>qn(null),5e3);N.emit("guildsync:voice-mute-access",{},hr=>{clearTimeout(fr),qn(hr)})})),T!==_||N!==n())return;const se=Boolean((N==null?void 0:N.connected)&&r()&&(F==null?void 0:F.ok)===!0&&F.enabled===!0&&F.allowed===!0),ur=m!==se;m=se,m||(x(),w()),await le(m),ur&&k()})();R=z;try{await z}finally{R===z&&(R=null)}}async function We(){_++,R=null,m=!1,x(),w(),k(),await le(!1),await Ne()}async function zt(T,N){x(),w();try{s=await t.SetVoiceHotkeySettings(T,N),f=""}catch(z){f=String(z)}k()}function w(){!d||(d=!1,$.cancel(),document.removeEventListener("keydown",E,!0),document.removeEventListener("keyup",B,!0),window.removeEventListener("blur",Z),t.SetVoiceHotkeyCapture(!1))}const $=Dc({save:T=>void zt(s.enabled,T),cancel:()=>{w(),f="",k()},error:T=>{f=T,k()},changed:T=>{f=T+" \u2014 release all keys to save",k()}});function E(T){$.keydown(T)}function B(T){$.keyup(T)}function Z(){$.cancel()}function U(){return m?s.supported?`<div id="voiceHotkeySection" class="profile-section"><strong>Voice Channel Mute</strong><label class="profile-row voice-hotkey-row">Enable <input id="voiceHotkeyEnabled" type="checkbox" ${s.enabled?"checked":""}></label><div class="profile-row voice-hotkey-row">Shortcut <span>${s.shortcut}</span></div><button id="voiceHotkeyCapture" type="button" class="voice-hotkey-capture-button">${d?"Press shortcut (Escape cancels)":"Set Hotkey"}</button><p id="voiceHotkeyStatus" class="voice-hotkey-help" role="status"></p><p class="voice-hotkey-help">Hold the shortcut to mute eligible lower-ranked channel members. Server permission is required.</p></div>`:'<div id="voiceHotkeySection" class="profile-section"><strong>Voice Channel Mute</strong><p>Global voice hotkeys require the Windows desktop client.</p></div>':""}function he(T){var z,F;(z=T.querySelector("#voiceHotkeyEnabled"))==null||z.addEventListener("change",se=>void zt(se.target.checked,s.shortcut)),(F=T.querySelector("#voiceHotkeyCapture"))==null||F.addEventListener("click",async()=>{x(),d=!0,$.start(),f="Press one or more keys, then release all keys to save.",await t.SetVoiceHotkeyCapture(!0),document.addEventListener("keydown",E,!0),document.addEventListener("keyup",B,!0),window.addEventListener("blur",Z),k()});const N=T.querySelector("#voiceHotkeyStatus");N&&(N.textContent=f)}function Yt(){w()}function Et(){_++,R=null,clearInterval(S),S=null,m=!1,x(),w(),le(!1),k()}return{initialize:Se,connection:jt,refreshAccess:Ne,invalidateAccess:We,render:U,wire:he,close:Yt,stop:Et}}const Rr=["viewer","user","admin"],Kn=t=>t==="user"||t==="admin",hs=t=>Rr.includes(t),Tc=Kn,Cc=new Set(["guildsync:request-users","guildsync:request-pending-users","guildsync:change-user","guildsync:save-admin-configuration","guildsync:save-raffle-bonus-settings"]),Bc=new Set(["guildsync:upload-savedvars-raw","guildsync:sending-banking-data","guildsync:sending-roster-data","guildsync:gsa-post-application","guildsync:eso-guild-application-message","guildsync:run-member-auto-linking","guildsync:request-discord-data-refresh"]);function Nc(t,e){return Rr.includes(t)?xc(e)||Bc.has(e)?!0:Cc.has(e)?t==="admin":Kn(t):!1}const qc=new Set(["guildsync:client-version","guildsync:request-discord-data-date","guildsync:request-discord-member-dataJSON","guildsync:request-banking-data","guildsync:request-roster-data","guildsync:request-roster-member-notes","guildsync:request-banking-history-matches","guildsync:request-banking-history-records","guildsync:request-roster-rank-history","guildsync:request-roster-stream-history","guildsync:request-discord-member-history","guildsync:request-discord-member-history-events","guildsync:request-associate-ticket-report","guildsync:request-discord-rank-audit-report","guildsync:request-member-links","guildsync:request-member-link-options","guildsync:request-admin-configuration","guildsync:request-active-raffles","guildsync:request-raffle-archives"]),xc=t=>qc.has(t);function Ic(t={}){return(t.actual_role||t.role)!=="admin"?"":t.role!=="admin"?'<section class="profile-section profile-test-mode-section" aria-label="View Test Mode"><div class="profile-section-header">View Test Mode</div><div class="profile-role-view-spacer" aria-hidden="true"></div><button class="profile-role-view-button profile-role-view-return" type="button" data-role-view="admin">Return to Admin View</button></section>':'<section class="profile-section profile-test-mode-section" aria-label="View Test Mode"><div class="profile-section-header">View Test Mode</div><div class="profile-role-view-actions"><button class="profile-role-view-button profile-role-view-user" type="button" data-role-view="user" aria-label="View As User"><span>View As</span><span>User</span></button><button class="profile-role-view-button profile-role-view-viewer" type="button" data-role-view="viewer" aria-label="View As Viewer"><span>View As</span><span>Viewer</span></button></div></section>'}const je=t=>String(t!=null?t:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),br=t=>!t.revoked_at&&(!Number(t.allowed)||t.role==="pending"),Oc=t=>{var e,n,r;return{allowed:Number(t.allowed),role:t.role,email:(e=t.email)!=null?e:"",guild_member_name:(n=t.guild_member_name)!=null?n:"",revoked_at:(r=t.revoked_at)!=null?r:null}};function Pc(t,e="all",n=""){const r=n.trim().toLowerCase();return t.filter(i=>(e==="revoked"?!!i.revoked_at:!i.revoked_at&&(e!=="pending"||br(i)))&&(!r||[i.username,i.global_name,i.guild_member_name,i.email,i.discord_user_id,i.role].some(s=>String(s!=null?s:"").toLowerCase().includes(r))))}function Fc(t){return Number(t)>0?`<span class="user-pending-badge" aria-hidden="true">${Number(t)>99?"99+":Number(t)}</span>`:""}function Gc(t,e,n={}){var a,l,d,f,p;const r=t.discord_user_id===e,i=!!t.revoked_at,s=(a=n.role)!=null?a:Rr.includes(t.role)?t.role:"viewer",o=je(t.discord_user_id);return`<form class="user-admin-card" data-user-id="${o}">
  <header><div><h3>${je(t.guild_member_name||t.global_name||t.username||t.discord_user_id)}${r?" (You)":""}</h3><p>${je(t.username)} \xB7 Discord ID: ${o}</p></div><span class="user-admin-status ${br(t)?"is-pending":""}">${i?"Revoked":br(t)?"Pending approval":"Approved"}</span></header>
  <fieldset class="user-admin-fields"><label>Email<input name="email" type="email" maxlength="255" value="${je((d=(l=n.email)!=null?l:t.email)!=null?d:"")}" placeholder="Not configured"></label>
   <label>Guild member name<input name="guild_member_name" maxlength="255" value="${je((p=(f=n.guild_member_name)!=null?f:t.guild_member_name)!=null?p:"")}" placeholder="ESO / guild display name"></label>
   ${r?`<div class="user-admin-own-role">Role: ${je(t.role)}<small>Your role cannot be changed here.</small></div>`:`<label>Role<select name="role">${Rr.map(m=>`<option value="${m}" ${s===m?"selected":""}>${m[0].toUpperCase()+m.slice(1)}</option>`).join("")}</select></label>`}
  </fieldset>
  <p class="user-admin-dates">Requested: ${je(t.requested_at||"Not recorded")} \xB7 Last login: ${je(t.last_login_at||"Never")}${i?" \xB7 Revoked: "+je(t.revoked_at):""}</p>
  <div class="user-admin-actions">${i?r?"":'<button type="button" data-user-reinstate>Reinstate account</button><span>Restores access with the selected role. The user must sign in again.</span>':`<button type="submit">Save changes</button>${!r&&br(t)?'<button type="button" data-user-approve>Approve account</button>':""}${r?"":'<button type="button" class="user-admin-remove" data-user-remove>Revoke account</button>'}`}</div>
 </form>`}function Uc({request:t,getUser:e,onCount:n=()=>{}}){let r=[],i=0,s=null,o=null,a=!1,l=!1,d="",f="all",p=0,m=0,A=null;const S=new Map,_=()=>{var w;return((w=e())==null?void 0:w.role)==="admin"},R=w=>{i=Math.max(0,Math.floor(Number(w)||0)),n(_()?i:0)},k=w=>{const $=o==null?void 0:o.querySelector("[data-user-admin-message]");$&&($.textContent=w)},G=w=>{l=w,o==null||o.querySelectorAll("fieldset,[data-user-admin-refresh],.user-admin-actions button,.user-admin-confirmation button").forEach($=>$.disabled=w)},x=async()=>{if(!_()){R(0);return}const w=p,$=m;try{const E=await t("guildsync:request-pending-users",{});w===p&&$===m&&_()&&(E==null?void 0:E.ok)&&R(E.pending_count)}catch{}},X=w=>{var B,Z;const $=new FormData(w),E={email:String((B=$.get("email"))!=null?B:""),guild_member_name:String((Z=$.get("guild_member_name"))!=null?Z:"")};return $.has("role")&&(E.role=String($.get("role"))),E},Se=async(w,$)=>{if(l||!_())return;const E=r.find(U=>U.discord_user_id===w.dataset.userId);if(!E)return;const B=p,Z={action:$,discord_user_id:E.discord_user_id,expected:Oc(E),...$==="revoke"?{}:X(w)};G(!0),k("Saving account changes...");try{const U=await t("guildsync:change-user",Z);if(!(U!=null&&U.ok))throw Error((U==null?void 0:U.message)||"Could not update this account.");if(B!==p||!_())return;S.delete(E.discord_user_id),U.user?r=r.map(he=>he.discord_user_id===E.discord_user_id?U.user:he):U.removed&&(r=r.filter(he=>he.discord_user_id!==E.discord_user_id)),x(),le(),k($==="revoke"?"Account access revoked and login sessions cleared. The account record is retained.":$==="reinstate"?"Account reinstated. The user can sign in again.":$==="approve"?"Account approved. The user can sign in now.":"Account changes saved.")}catch(U){B===p&&k(U.message)}finally{B===p&&G(!1)}},jt=w=>{var E;(E=o==null?void 0:o.querySelector(".user-admin-confirmation"))==null||E.remove();const $=document.createElement("div");$.className="user-admin-confirmation",$.innerHTML='<p>Revoke access and sign out this user? Their account and banking history will be retained. Their next Discord login will request approval again.</p><button type="button" data-confirm-remove>Revoke account</button><button type="button" data-cancel-remove>Cancel</button>',w.append($),$.querySelector("[data-confirm-remove]").addEventListener("click",()=>void Se(w,"revoke")),$.querySelector("[data-cancel-remove]").addEventListener("click",()=>$.remove()),$.querySelector("button").focus()};function le(){if(!o)return;const w=o.querySelector(".user-admin-list"),$=w.scrollTop,E=Pc(r,f,d);w.innerHTML=E.map(B=>Gc(B,e().discord_user_id,S.get(B.discord_user_id))).join("")||"<p>No matching accounts.</p>",o.querySelector("[data-user-admin-count]").textContent=`${E.length} account${E.length===1?"":"s"} \xB7 ${i} pending`,w.querySelectorAll("[data-user-id]").forEach(B=>{var Z,U,he;B.addEventListener("input",()=>S.set(B.dataset.userId,X(B))),B.addEventListener("submit",Yt=>{var Et;Yt.preventDefault(),(Et=r.find(T=>T.discord_user_id===B.dataset.userId))!=null&&Et.revoked_at||Se(B,"save")}),(Z=B.querySelector("[data-user-approve]"))==null||Z.addEventListener("click",()=>void Se(B,"approve")),(U=B.querySelector("[data-user-remove]"))==null||U.addEventListener("click",()=>jt(B)),(he=B.querySelector("[data-user-reinstate]"))==null||he.addEventListener("click",()=>void Se(B,"reinstate"))}),w.scrollTop=$,G(l)}const Ne=async()=>{if(a||l||!_())return;a=!0,G(!0),k("Loading GuildSync accounts...");const w=p,$=m;try{const E=await t("guildsync:request-users",{include_revoked:!0});if(!(E!=null&&E.ok))throw Error((E==null?void 0:E.message)||"Could not load accounts.");if(w!==p||!_())return;r=E.users,S.clear(),$===m&&R(E.pending_count),le(),k("Only admins can manage accounts. Your own role and account access are protected.")}catch(E){w===p&&k(E.message)}finally{w===p&&(a=!1,G(!1))}},We=()=>{l&&!a||(o==null||o.remove(),o=null,A!=null&&A.isConnected&&A.focus({preventScroll:!0}))};return{open:()=>{!_()||o||(A=document.activeElement,o=document.createElement("div"),o.className="user-admin-overlay",o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),o.setAttribute("aria-labelledby","userAdminTitle"),o.innerHTML='<section class="user-admin-dialog"><header class="user-admin-header"><div><h2 id="userAdminTitle">Manage GuildSync Users</h2><p>Review access requests and maintain GuildSync login records.</p></div><button type="button" data-user-admin-close aria-label="Close user administration">Close</button></header><p role="status" data-user-admin-message></p><div class="user-admin-toolbar"><label>Search accounts<input type="search" data-user-admin-search placeholder="Name, email, role, or Discord ID"></label><label>Show<select data-user-admin-filter><option value="all">Current accounts</option><option value="pending">Pending approval</option><option value="revoked">Revoked accounts</option></select></label><button type="button" data-user-admin-refresh>Refresh list (discard edits)</button><span data-user-admin-count></span></div><div class="user-admin-list"></div></section>',document.body.append(o),o.querySelector("[data-user-admin-search]").value=d,o.querySelector("[data-user-admin-filter]").value=f,o.querySelector("[data-user-admin-close]").addEventListener("click",We),o.querySelector("[data-user-admin-refresh]").addEventListener("click",()=>void Ne()),o.querySelector("[data-user-admin-search]").addEventListener("input",w=>{d=w.target.value,le()}),o.querySelector("[data-user-admin-filter]").addEventListener("change",w=>{f=w.target.value,le()}),o.addEventListener("keydown",w=>{if(w.key==="Escape"&&(w.preventDefault(),w.stopImmediatePropagation(),We()),w.key==="Tab"){const $=[...o.querySelectorAll("button,input,select")].filter(Z=>!Z.disabled&&Z.offsetParent!==null),E=$[0],B=$.at(-1);w.shiftKey&&document.activeElement===E?(w.preventDefault(),B==null||B.focus()):!w.shiftKey&&document.activeElement===B&&(w.preventDefault(),E==null||E.focus())}}),o.querySelector("[data-user-admin-close]").focus(),S.size?(le(),k("Unsaved edits restored. Refresh the list to discard them and retrieve current records.")):Ne())},close:We,refreshCount:x,get count(){return i},get isOpen(){return!!o},stop(){clearInterval(s),s=null},start(){clearInterval(s),_()&&(x(),s=setInterval(()=>void x(),6e4))},changed(w){!_()||(m++,R(w.pending_count),o&&k("Accounts changed. Refresh the list for current records; unsaved edits are preserved."))},reset(){p++,clearInterval(s),s=null,l=!1,a=!1,We(),r=[],S.clear(),d="",f="all",R(0)}}}function qo(t,e,n,r=()=>{}){if(!t||!e)return;const i=a=>{var l;return(l=a.getAttribute(n))!=null?l:"__empty__"},s=new Map(Array.from(t.children).map(a=>[i(a),a])),o=new Set;Array.from(e.children).forEach((a,l)=>{let d=s.get(i(a));if(!d)d=a.cloneNode(!0),r(d);else if(!d.isEqualNode(a)){for(const f of Array.from(d.attributes))a.hasAttribute(f.name)||d.removeAttribute(f.name);for(const f of Array.from(a.attributes))d.getAttribute(f.name)!==f.value&&d.setAttribute(f.name,f.value);for(Array.from(a.children).forEach((f,p)=>{const m=d.children[p];if(m!=null&&m.isEqualNode(f))return;const A=f.cloneNode(!0);m?m.replaceWith(A):d.append(A),r(A)});d.children.length>a.children.length;)d.lastElementChild.remove()}t.children[l]!==d&&t.insertBefore(d,t.children[l]||null),o.add(d)});for(const a of Array.from(t.children))o.has(a)||a.remove()}function Gn(t,e){t&&e&&!t.isEqualNode(e)&&(t.innerHTML=e.innerHTML)}function Un(t,e){t&&e&&t.textContent!==e.textContent&&(t.textContent=e.textContent)}const I=t=>String(t!=null?t:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Hc(){return{open:"",toggle(t){this.open=this.open===t?"":t},close(){this.open=""}}}function ji(t,e){var n;return t.type==="boolean"?String(e).toLowerCase()===String(t.defaultValue).toLowerCase():t.type==="number"?String(e).trim()!==""&&Number(e)===Number(t.defaultValue):String(e!=null?e:"")===String((n=t.defaultValue)!=null?n:"")}function xo(t,e){const r=Object.hasOwn(e,t.key)?e[t.key]===null?t.defaultValue:e[t.key]:t.value,i=!ji(t,r);return{value:r,override:i,source:i?"Overridden":"Default"}}function kr(t,e){return t.type==="boolean"?e===!0||String(e).toLowerCase()==="true"?"Enabled":"Disabled":t.type==="select"?{private_thread:"Private thread (public fallback)",channel:"Channel or thread"}[e]||String(e):e==null||e===""?"Not configured":String(e)}function Io(t,{body:e=!1}={}){const n={recipient:"@ExampleMember",account_name:"@ExampleMember",display_name:"@ExampleMember",amount:"10,001",deposit_amount:"10,001",raw_amount:"10001",raw_deposit_amount:"10001",event_id:"123456789",ticket_quantity:"20",tickets:"20",purchased_tickets:"20",bonus_percent:"20",bonus_tickets:"4",total_tickets:"24",bonus_deadline:"October 9, 2026 at 7:00 PM Eastern",bonus_block:`Early Purchase Bonus: 20% for purchases before October 9, 2026 at 7:00 PM ET.
Bonus Tickets: 4
Total Tickets: 24`,note:"",note_block:"",ticket_type:"Bi-Weekly",ticket_type_raw:"biweekly",transaction_type:"biweekly",ticket_gold_cost:"10,001",gold_cost:"10,001",raw_gold_cost:"10001",raw_ticket_gold_cost:"10001",purchase_date:"October 5, 2026",data_source:"Guild bank",event_datetime:"2026-10-05T12:00:00Z",event_timestamp:"1791201600",raffle_datetime_eastern:"October 10, 2026 at 8:00 PM Eastern",raffle_date_time_eastern:"October 10, 2026 at 8:00 PM Eastern",raffle_datetime:"October 10, 2026 at 8:00 PM Eastern",mail_request_id:"example",mail_batch_id:"example"},r=String(t).replace(/{([a-zA-Z0-9_]+)}/g,(i,s)=>{var o;return(o=n[s])!=null?o:i});return e&&!String(t).includes("{bonus_block}")?r+`

`+n.bonus_block:r}function ps(t,{refresh:e=!1,root:n=document}={}){const r=()=>{for(const o of document.querySelectorAll("[data-report-toggle]")){const a=o.dataset.reportToggle===t.open;o.setAttribute("aria-expanded",String(a));const l=document.getElementById(o.getAttribute("aria-controls"));l&&(l.classList.toggle("is-open",a),l.inert=!a)}};for(const o of n.querySelectorAll("[data-report-toggle]"))o.addEventListener("click",()=>{t.toggle(o.dataset.reportToggle),r()});for(const o of n.querySelectorAll('.reports-panel .report-run-button:not([type="submit"])'))o.addEventListener("click",()=>{t.close(),r()});const i=e?Array.from(document.querySelectorAll(".report-section-content")):[],s=i.map(o=>o.style.transition);for(const o of i)o.style.transition="none";r();for(const o of i)o.offsetHeight;i.forEach((o,a)=>o.style.transition=s[a])}const ki=t=>t.type==="boolean"||t.type==="select"&&t.options.length===2;function Vc(t,e){return kr(t,e)+(ki(t)&&ji(t,e)?" (Default)":"")}function Wc({canEdit:t=()=>!1}={}){let e=null,n={},r=!1,i="",s=!1;const o=(d,f)=>{if(!t())return`<output class="configuration-readonly-value" id="config-${I(d.key)}" aria-describedby="config-help-${I(d.key)}">${I(kr(d,f.value))}</output>`;const p=`data-config-value="${I(d.key)}" id="config-${I(d.key)}" aria-describedby="config-help-${I(d.key)}" `;if(d.type==="boolean"||d.type==="select"){const m=d.type==="boolean"?["true","false"]:d.options;return`<select ${p}>${m.map(A=>`<option value="${I(A)}" ${String(A)===String(f.value)?"selected":""}>${I(Vc(d,A))}</option>`).join("")}</select>`}return d.type==="template"?`<textarea ${p} rows="${d.key.includes("BODY")?9:3}" maxlength="${d.maxLength}">${I(f.value)}</textarea>`:`<input ${p} type="${d.type==="number"?"number":"text"}" ${d.type==="number"?`min="${d.min}" max="${d.max}" step="any"`:""} value="${I(f.value)}" placeholder="Not configured">`};return{render:()=>{const d=t(),f=e?[...new Set(e.settings.map(p=>p.group))]:[];return`<article class="report-option-card admin-configuration-card"><div class="report-option-copy">
   <h3><button type="button" class="report-section-toggle" data-report-toggle="configuration" aria-expanded="false" aria-controls="adminConfigurationContent">Administrator Configuration <span aria-hidden="true">\u25BE</span></button></h3>
   <div id="adminConfigurationContent" class="report-section-content" inert><div class="report-section-inner">
   ${d?"<p>Edit any setting to override its default. Changes take effect only after Save. Choose the option marked (Default) to restore a two-choice setting, or use Return to default for other fields. Settings apply live; active deliveries finish safely.</p>":'<p class="configuration-readonly-notice">Read-only. You can view current settings and defaults. Admin access is required to change Administrator Configuration or raffle bonus settings.</p>'}
   <p role="status" class="configuration-status">${I(i)}</p>
   ${e?`
   ${e.botDefaultsReported?"":"<p>Bot defaults have not been reported yet. Connect the updated bot before editing its settings.</p>"}
   <form id="adminConfigurationForm">
    ${f.map((p,m)=>{const A=e.settings.filter(_=>_.group===p),S=[...new Set(A.map(_=>_.section||""))];return`<fieldset class="configuration-group" ${s?"disabled":""}><legend>${I(p)}</legend>
      ${S.map((_,R)=>`<section class="configuration-subgroup" ${_?`aria-labelledby="config-section-${m}-${R}"`:""}>
       ${_?`<h4 id="config-section-${m}-${R}">${I(_)}</h4>`:""}
       ${A.filter(k=>(k.section||"")===_).map(k=>{const G=xo(k,d?n:{});return`<div class="configuration-setting" role="group" aria-labelledby="config-label-${I(k.key)}">
         <div class="configuration-setting-header"><label id="config-label-${I(k.key)}" for="config-${I(k.key)}">${I(k.label)}</label><span class="configuration-source" data-config-source="${I(k.key)}">${I(G.source)}</span></div>
         <small class="configuration-env-key">.env: <code>${I(k.key)}</code></small>
         <p class="configuration-help" id="config-help-${I(k.key)}">${I(k.help||"Changes this setting after you save the configuration.")}</p>
         <div class="configuration-values${d&&ki(k)?" configuration-two-options":""}">
          <div class="configuration-selected-value"><span>${d?"Current selection":"Current value"}</span>${o(k,G)}</div>
          ${d&&ki(k)?"":`<div class="configuration-default-value"><span>Default value</span><output>${I(kr(k,k.defaultValue))}</output>${d?`<button type="button" class="configuration-default" data-config-default="${I(k.key)}" aria-label="Return ${I(k.label)} to default: ${I(kr(k,k.defaultValue))}">Return to default</button>`:""}</div>`}
         </div>
         ${k.placeholders?`<small>Placeholders: ${k.placeholders.map(x=>I("{"+x+"}")).join(", ")}</small>`:""}
         ${k.group==="Receipt messages"?`<label>Example preview (20% bonus)<pre data-config-preview="${I(k.key)}">${I(Io(G.value,{body:k.key.endsWith("BODY_TEMPLATE")}))}</pre></label>`:""}
        </div>`}).join("")}
      </section>`).join("")}
     </fieldset>`}).join("")}
    <div class="configuration-actions">${d?`<button type="submit" ${s?"disabled":""}>${s?"Saving...":"Save Configuration"}</button>`:""}<button type="button" id="reloadAdminConfiguration" ${s?"disabled":""}>${d?"Discard edits and reload":"Refresh configuration"}</button></div>
   </form>`:`<p>${r?"Loading configuration...":"Configuration is not loaded."}</p><button type="button" id="reloadAdminConfiguration">Load configuration</button>`}
   </div></div></div></article>`},wire:({request:d,rerender:f})=>{var m,A;const p=async()=>{if(!r){r=!0,i="";try{const S=await d("guildsync:request-admin-configuration",{});if(!(S!=null&&S.ok))throw Error((S==null?void 0:S.message)||"Could not load configuration.");e=S.configuration,n={}}catch(S){i=S.message}finally{r=!1,f()}}};if(!e&&!r&&!i&&p(),(m=document.getElementById("reloadAdminConfiguration"))==null||m.addEventListener("click",()=>void p()),!!t()){for(const S of document.querySelectorAll("[data-config-value]"))S.addEventListener("input",()=>{if(!t())return;const _=S.dataset.configValue,R=e.settings.find(x=>x.key===_);n[_]=ji(R,S.value)?null:S.value;const k=document.querySelector(`[data-config-source="${_}"]`);k&&(k.textContent=xo(R,n).source);const G=document.querySelector(`[data-config-preview="${_}"]`);G&&(G.textContent=Io(S.value,{body:_.endsWith("BODY_TEMPLATE")}))});for(const S of document.querySelectorAll("[data-config-default]"))S.addEventListener("click",()=>{!t()||(n[S.dataset.configDefault]=null,f())});(A=document.getElementById("adminConfigurationForm"))==null||A.addEventListener("submit",async S=>{var R;if(S.preventDefault(),!t()||s)return;if(!Object.keys(n).length){i="No changes to save.",f();return}s=!0,i="";const _={...n};f(),(R=document.getElementById("adminConfigurationForm"))==null||R.querySelectorAll("input,select,textarea,button").forEach(k=>k.disabled=!0);try{const k=await d("guildsync:save-admin-configuration",{revision:e.revision,changes:_});if(!(k!=null&&k.ok))throw Error((k==null?void 0:k.message)||"Could not save configuration.");e=k.configuration,n={},i="Configuration saved. Backend settings are active; the connected bot applies its settings after active deliveries finish. An offline bot applies them when it reconnects."}catch(k){i=k.message}finally{s=!1,f()}})}},clear(){e=null,n={},i=""}}}const jc="/assets/splash.ea386b6a.png",zc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",Yc="/assets/GuildSync-Graphic.9169020d.png",He=Object.create(null);He.open="0";He.close="1";He.ping="2";He.pong="3";He.message="4";He.upgrade="5";He.noop="6";const vr=Object.create(null);Object.keys(He).forEach(t=>{vr[He[t]]=t});const vi={type:"error",data:"parser error"},ms=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",gs=typeof ArrayBuffer=="function",ys=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,zi=({type:t,data:e},n,r)=>ms&&e instanceof Blob?n?r(e):Oo(e,r):gs&&(e instanceof ArrayBuffer||ys(e))?n?r(e):Oo(new Blob([e]),r):r(He[t]+(e||"")),Oo=(t,e)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];e("b"+(r||""))},n.readAsDataURL(t)};function Po(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let ai;function Kc(t,e){if(ms&&t.data instanceof Blob)return t.data.arrayBuffer().then(Po).then(e);if(gs&&(t.data instanceof ArrayBuffer||ys(t.data)))return e(Po(t.data));zi(t,!1,n=>{ai||(ai=new TextEncoder),e(ai.encode(n))})}const Fo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Hn=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<Fo.length;t++)Hn[Fo.charCodeAt(t)]=t;const Jc=t=>{let e=t.length*.75,n=t.length,r,i=0,s,o,a,l;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const d=new ArrayBuffer(e),f=new Uint8Array(d);for(r=0;r<n;r+=4)s=Hn[t.charCodeAt(r)],o=Hn[t.charCodeAt(r+1)],a=Hn[t.charCodeAt(r+2)],l=Hn[t.charCodeAt(r+3)],f[i++]=s<<2|o>>4,f[i++]=(o&15)<<4|a>>2,f[i++]=(a&3)<<6|l&63;return d},Qc=typeof ArrayBuffer=="function",Yi=(t,e)=>{if(typeof t!="string")return{type:"message",data:bs(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:Xc(t.substring(1),e)}:vr[n]?t.length>1?{type:vr[n],data:t.substring(1)}:{type:vr[n]}:vi},Xc=(t,e)=>{if(Qc){const n=Jc(t);return bs(n,e)}else return{base64:!0,data:t}},bs=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},ks=String.fromCharCode(30),Zc=(t,e)=>{const n=t.length,r=new Array(n);let i=0;t.forEach((s,o)=>{zi(s,!1,a=>{r[o]=a,++i===n&&e(r.join(ks))})})},el=(t,e)=>{const n=t.split(ks),r=[];for(let i=0;i<n.length;i++){const s=Yi(n[i],e);if(r.push(s),s.type==="error")break}return r};function tl(){return new TransformStream({transform(t,e){Kc(t,n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,r)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(r))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(n)})}})}let ci;function pr(t){return t.reduce((e,n)=>e+n.length,0)}function mr(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let r=0;for(let i=0;i<e;i++)n[i]=t[0][r++],r===t[0].length&&(t.shift(),r=0);return t.length&&r<t[0].length&&(t[0]=t[0].slice(r)),n}function nl(t,e){ci||(ci=new TextDecoder);const n=[];let r=0,i=-1,s=!1;return new TransformStream({transform(o,a){for(n.push(o);;){if(r===0){if(pr(n)<1)break;const l=mr(n,1);s=(l[0]&128)===128,i=l[0]&127,i<126?r=3:i===126?r=1:r=2}else if(r===1){if(pr(n)<2)break;const l=mr(n,2);i=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),r=3}else if(r===2){if(pr(n)<8)break;const l=mr(n,8),d=new DataView(l.buffer,l.byteOffset,l.length),f=d.getUint32(0);if(f>Math.pow(2,53-32)-1){a.enqueue(vi);break}i=f*Math.pow(2,32)+d.getUint32(4),r=3}else{if(pr(n)<i)break;const l=mr(n,i);a.enqueue(Yi(s?l:ci.decode(l),e)),r=0}if(i===0||i>t){a.enqueue(vi);break}}}})}const vs=4;function W(t){if(t)return rl(t)}function rl(t){for(var e in W.prototype)t[e]=W.prototype[e];return t}W.prototype.on=W.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};W.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};W.prototype.off=W.prototype.removeListener=W.prototype.removeAllListeners=W.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===e||r.fn===e){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+t],this};W.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,e)}return this};W.prototype.emitReserved=W.prototype.emit;W.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};W.prototype.hasListeners=function(t){return!!this.listeners(t).length};const Hr=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0))(),me=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),il="arraybuffer";function Ss(t,...e){return e.reduce((n,r)=>(t.hasOwnProperty(r)&&(n[r]=t[r]),n),{})}const ol=me.setTimeout,sl=me.clearTimeout;function Vr(t,e){e.useNativeTimers?(t.setTimeoutFn=ol.bind(me),t.clearTimeoutFn=sl.bind(me)):(t.setTimeoutFn=me.setTimeout.bind(me),t.clearTimeoutFn=me.clearTimeout.bind(me))}const al=1.33;function cl(t){return typeof t=="string"?ll(t):Math.ceil((t.byteLength||t.size)*al)}function ll(t){let e=0,n=0;for(let r=0,i=t.length;r<i;r++)e=t.charCodeAt(r),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(r++,n+=4);return n}function ws(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function dl(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function ul(t){let e={},n=t.split("&");for(let r=0,i=n.length;r<i;r++){let s=n[r].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class fl extends Error{constructor(e,n,r){super(e),this.description=n,this.context=r,this.type="TransportError"}}class Ki extends W{constructor(e){super(),this.writable=!1,Vr(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,r){return super.emitReserved("error",new fl(e,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=Yi(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=dl(e);return n.length?"?"+n:""}}class hl extends Ki{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};el(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Zc(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=ws()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let _s=!1;try{_s=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const pl=_s;function ml(){}class gl extends hl{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let r=location.port;r||(r=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,n){const r=this.request({method:"POST",data:e});r.on("success",n),r.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=e}}class Ie extends W{constructor(e,n,r){super(),this.createRequest=e,Vr(this,r),this._opts=r,this._method=r.method||"GET",this._uri=n,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const n=Ss(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(n);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var i;r.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=Ie.requestsCount++,Ie.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=ml,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Ie.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Ie.requestsCount=0;Ie.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Go);else if(typeof addEventListener=="function"){const t="onpagehide"in me?"pagehide":"unload";addEventListener(t,Go,!1)}}function Go(){for(let t in Ie.requests)Ie.requests.hasOwnProperty(t)&&Ie.requests[t].abort()}const yl=function(){const t=As({xdomain:!1});return t&&t.responseType!==null}();class bl extends gl{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=yl&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Ie(As,this.uri(),e)}}function As(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||pl))return new XMLHttpRequest}catch{}if(!e)try{return new me[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Ls=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class kl extends Ki{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,r=Ls?{}:Ss(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;zi(r,this.supportsBinary,s=>{try{this.doWrite(r,s)}catch{}i&&Hr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=ws()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const li=me.WebSocket||me.MozWebSocket;class vl extends kl{createSocket(e,n,r){return Ls?new li(e,n,r):n?new li(e,n):new li(e)}doWrite(e,n){this.ws.send(n)}}class Sl extends Ki{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=nl(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(n).getReader(),i=tl();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const s=()=>{r.read().then(({done:a,value:l})=>{a||(this.onPacket(l),s())}).catch(a=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;this._writer.write(r).then(()=>{i&&Hr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const wl={websocket:vl,webtransport:Sl,polling:bl},_l=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Al=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Si(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),r=t.indexOf("]");n!=-1&&r!=-1&&(t=t.substring(0,n)+t.substring(n,r).replace(/:/g,";")+t.substring(r,t.length));let i=_l.exec(t||""),s={},o=14;for(;o--;)s[Al[o]]=i[o]||"";return n!=-1&&r!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=Ll(s,s.path),s.queryKey=El(s,s.query),s}function Ll(t,e){const n=/\/{2,9}/g,r=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function El(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,s){i&&(n[i]=s)}),n}const wi=typeof addEventListener=="function"&&typeof removeEventListener=="function",Sr=[];wi&&addEventListener("offline",()=>{Sr.forEach(t=>t())},!1);class ft extends W{constructor(e,n){if(super(),this.binaryType=il,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const r=Si(e);n.hostname=r.host,n.secure=r.protocol==="https"||r.protocol==="wss",n.port=r.port,r.query&&(n.query=r.query)}else n.host&&(n.hostname=Si(n.host).host);Vr(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(r=>{const i=r.prototype.name;this.transports.push(i),this._transportsByName[i]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=ul(this.opts.query)),wi&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Sr.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=vs,n.transport=e,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&ft.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",ft.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(n+=cl(i)),r>0&&n>this._maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Hr(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,r){return this._sendPacket("message",e,n,r),this}send(e,n,r){return this._sendPacket("message",e,n,r),this}_sendPacket(e,n,r,i){if(typeof n=="function"&&(i=n,n=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const s={type:e,data:n,options:r};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(ft.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),wi&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=Sr.indexOf(this._offlineEventListener);r!==-1&&Sr.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}}ft.protocol=vs;class $l extends ft{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let n=this.createTransport(e),r=!1;ft.priorWebsocketSuccess=!1;const i=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",p=>{if(!r)if(p.type==="pong"&&p.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;ft.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(f(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const m=new Error("probe error");m.transport=n.name,this.emitReserved("upgradeError",m)}}))};function s(){r||(r=!0,f(),n.close(),n=null)}const o=p=>{const m=new Error("probe error: "+p);m.transport=n.name,s(),this.emitReserved("upgradeError",m)};function a(){o("transport closed")}function l(){o("socket closed")}function d(p){n&&p.name!==n.name&&s()}const f=()=>{n.removeListener("open",i),n.removeListener("error",o),n.removeListener("close",a),this.off("close",l),this.off("upgrading",d)};n.once("open",i),n.once("error",o),n.once("close",a),this.once("close",l),this.once("upgrading",d),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const n=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&n.push(e[r]);return n}}class Rl extends $l{constructor(e,n={}){const r=typeof e=="object"?e:n;(!r.transports||r.transports&&typeof r.transports[0]=="string")&&(r.transports=(r.transports||["polling","websocket","webtransport"]).map(i=>wl[i]).filter(i=>!!i)),super(e,r)}}function Dl(t,e="",n){let r=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),r=Si(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const s=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+s+":"+r.port+e,r.href=r.protocol+"://"+s+(n&&n.port===r.port?"":":"+r.port),r}const Ml=typeof ArrayBuffer=="function",Tl=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,Es=Object.prototype.toString,Cl=typeof Blob=="function"||typeof Blob<"u"&&Es.call(Blob)==="[object BlobConstructor]",Bl=typeof File=="function"||typeof File<"u"&&Es.call(File)==="[object FileConstructor]";function Ji(t){return Ml&&(t instanceof ArrayBuffer||Tl(t))||Cl&&t instanceof Blob||Bl&&t instanceof File}function wr(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,r=t.length;n<r;n++)if(wr(t[n]))return!0;return!1}if(Ji(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return wr(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&wr(t[n]))return!0;return!1}function Nl(t){const e=[],n=t.data,r=t;return r.data=_i(n,e),r.attachments=e.length,{packet:r,buffers:e}}function _i(t,e){if(!t)return t;if(Ji(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let r=0;r<t.length;r++)n[r]=_i(t[r],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=_i(t[r],e));return n}return t}function ql(t,e){return t.data=Ai(t.data,e),delete t.attachments,t}function Ai(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=Ai(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=Ai(t[n],e));return t}const $s=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],xl=5;var D;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(D||(D={}));class Il{constructor(e){this.replacer=e}encode(e){return(e.type===D.EVENT||e.type===D.ACK)&&wr(e)?this.encodeAsBinary({type:e.type===D.EVENT?D.BINARY_EVENT:D.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===D.BINARY_EVENT||e.type===D.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=Nl(e),r=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(r),i}}class Qi extends W{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const r=n.type===D.BINARY_EVENT;r||n.type===D.BINARY_ACK?(n.type=r?D.EVENT:D.ACK,this.reconstructor=new Ol(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(Ji(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const r={type:Number(e.charAt(0))};if(D[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===D.BINARY_EVENT||r.type===D.BINARY_ACK){const s=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(s,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!Rs(a)||a<0)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=a}if(e.charAt(n+1)==="/"){const s=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););r.nsp=e.substring(s,n)}else r.nsp="/";const i=e.charAt(n+1);if(i!==""&&Number(i)==i){const s=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}r.id=Number(e.substring(s,n+1))}if(e.charAt(++n)){const s=this.tryParse(e.substr(n));if(Qi.isPayloadValid(r.type,s))r.data=s;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case D.CONNECT:return Dr(n);case D.DISCONNECT:return n===void 0;case D.CONNECT_ERROR:return typeof n=="string"||Dr(n);case D.EVENT:case D.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&$s.indexOf(n[0])===-1);case D.ACK:case D.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Ol{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=ql(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Pl(t){return typeof t=="string"}const Rs=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function Fl(t){return t===void 0||Rs(t)}function Dr(t){return Object.prototype.toString.call(t)==="[object Object]"}function Gl(t,e){switch(t){case D.CONNECT:return e===void 0||Dr(e);case D.DISCONNECT:return e===void 0;case D.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&$s.indexOf(e[0])===-1);case D.ACK:return Array.isArray(e);case D.CONNECT_ERROR:return typeof e=="string"||Dr(e);default:return!1}}function Ul(t){return Pl(t.nsp)&&Fl(t.id)&&Gl(t.type,t.data)}const Hl=Object.freeze(Object.defineProperty({__proto__:null,protocol:xl,get PacketType(){return D},Encoder:Il,Decoder:Qi,isPacketValid:Ul},Symbol.toStringTag,{value:"Module"}));function we(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const Vl=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Ds extends W{constructor(e,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[we(e,"open",this.onopen.bind(this)),we(e,"packet",this.onpacket.bind(this)),we(e,"error",this.onerror.bind(this)),we(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var r,i,s;if(Vl.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const o={type:D.EVENT,data:n};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const f=this.ids++,p=n.pop();this._registerAckCallback(f,p),o.id=f}const a=(i=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||i===void 0?void 0:i.writable,l=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!a||(l?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,n){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[e]=n;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);n.call(this,new Error("operation has timed out"))},i),o=(...a)=>{this.io.clearTimeoutFn(s),n.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...n){return new Promise((r,i)=>{const s=(o,a)=>o?i(o):r(a);s.withError=!0,n.push(s),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>(this._queue[0],i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(i)):(this._queue.shift(),n&&n(null,...s)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:D.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case D.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case D.EVENT:case D.BINARY_EVENT:this.onevent(e);break;case D.ACK:case D.BINARY_ACK:this.onack(e);break;case D.DISCONNECT:this.ondisconnect();break;case D.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let r=!1;return function(...i){r||(r=!0,n.packet({type:D.ACK,id:e,data:i}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:D.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,e.data)}}}function wn(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}wn.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-n:t+n}return Math.min(t,this.max)|0};wn.prototype.reset=function(){this.attempts=0};wn.prototype.setMin=function(t){this.ms=t};wn.prototype.setMax=function(t){this.max=t};wn.prototype.setJitter=function(t){this.jitter=t};class Li extends W{constructor(e,n){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,Vr(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new wn({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const i=n.parser||Hl;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Rl(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=we(n,"open",function(){r.onopen(),e&&e()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=we(n,"error",s);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),n.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(we(e,"ping",this.onping.bind(this)),we(e,"data",this.ondata.bind(this)),we(e,"error",this.onerror.bind(this)),we(e,"close",this.onclose.bind(this)),we(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){Hr(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new Ds(this,e,n),this.nsps[e]=r),r}_destroy(e){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let r=0;r<n.length;r++)this.engine.write(n[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const xn={};function _r(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=Dl(t,e.path||"/socket.io"),r=n.source,i=n.id,s=n.path,o=xn[i]&&s in xn[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let l;return a?l=new Li(r,e):(xn[i]||(xn[i]=new Li(r,e)),l=xn[i]),n.query&&!e.query&&(e.query=n.queryKey),l.socket(n.path,e)}Object.assign(_r,{Manager:Li,Socket:Ds,io:_r,connect:_r});function Wl(t){return window.go.main.App.CleanupDepositMailAckFromGuildSyncBanking(t)}function jl(){return window.go.main.App.CloseWindow()}function zl(t){return window.go.main.App.CollectDepositMailAckFromGuildSyncBanking(t)}function Yl(t){return window.go.main.App.CollectGuildSyncApplicationsData(t)}function Kl(t){return window.go.main.App.CollectGuildSyncBankingData(t)}function Jl(t){return window.go.main.App.CollectGuildSyncRosterData(t)}function Ql(t,e){return window.go.main.App.CommitGuildSyncApplicationsData(t,e)}function Xl(t,e){return window.go.main.App.CommitGuildSyncBankingData(t,e)}function Zl(t,e){return window.go.main.App.CommitGuildSyncRosterData(t,e)}function ed(){return window.go.main.App.FlushPendingDepositMailAckCleanup()}function td(){return window.go.main.App.GetESORunningStatus()}function nd(){return window.go.main.App.GetGuildSyncFileWatcherStatus()}function rd(){return window.go.main.App.GetGuildSyncSession()}function id(){return window.go.main.App.LogoutGuildSync()}function od(){return window.go.main.App.MaximizeWindow()}function sd(){return window.go.main.App.MinimizeWindow()}function Ms(){return window.go.main.App.SaveWindowState()}function ad(t,e){return window.go.main.App.SetGuildSyncSavedVarsWatchFileEnabled(t,e)}function cd(){return window.go.main.App.ShowMainWindow()}function ld(){return window.go.main.App.StartDiscordLogin()}function dd(){return window.go.main.App.StartGuildSyncFileWatcher()}function ud(){return window.go.main.App.StopGuildSyncFileWatcher()}function fd(t){return window.go.main.App.WriteDepositMailToGuildSyncBanking(t)}function hd(t,e,n){return window.runtime.EventsOnMultiple(t,e,n)}function Kt(t,e){return hd(t,e,-1)}function pd(t){window.runtime.BrowserOpenURL(t)}const Wr="1.3.3",md=30*60*1e3,Ts="guildsync-pending-banking-uploads",Cs="guildsync-pending-deposit-mail",gd=5e3,yd=30*1e3,Bs="guildsync-pending-roster-uploads",Ns="guildsync-pending-applications-uploads",b=60*1e3,qs=7e3,xs=1400,Is=2400,bd=4e3,kd=38,Os=document.querySelector("#app");let Uo=null,In=null,Ho=!1,_n=!1;const Re=Uc({request:(t,e)=>M(t,e,3e4),getUser:()=>v.user,onCount:$o});let Ar=null,di=!1,ui=!1,fi=!1,ht=null,de={running:!1,message:""},Jt=null,Qt=null,Ei=!1,Xt=!1,Zt=null,hi=!1,wt=new Map,Rt=new Map,ee="",Pt=!1,Ft=!1,Vn=[],v={logged_in:!1,allowed:!1,status_message:""},ot={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},u=null;const ce=Mc({bridge:new Proxy({},{get:(t,e)=>(...n)=>window.go.main.App[e](...n)}),eventsOn:Kt,getSocket:()=>u,authenticated:()=>j(),changed:()=>{if(!_n)return;const t=document.querySelector("#discordProfileMenu"),e=t==null?void 0:t.querySelector("#voiceHotkeyMount");if(!e)return;const n=t.scrollTop;e.innerHTML=ce.render(),ce.wire(t),t.scrollTop=n}});window.addEventListener("pagehide",()=>ce.stop());let ue=[],jr=[],zr=null,cn=!1,Mr=!1,Tr="",en=new Set,tn=new Set,Jn="username",Mt="asc",$i=null,Ri=null,be=[],Cr=null,et=!1,Di=!1,Br="",Mi=null,Ti=null,Tt=new Set,nn=new Set,Ke="",ae="",Y=-1,ln=!1,Qn="",ge=[],_t="",pt=[],mt=!1,Qe="",pi=null,_e=-1,An=!1,Xn="",gt=[],Nr=!1,Ct=!1,yt="",dn="",un=!1,st="",ye=[],fn="",Gt="",bt=[],kt=!1,Xe="",Vo=null,$t=0;const vd=650;let Ae=-1,Ln=!1,En=[],at=!1,Bt="",$n=!1,Zn=[],ct=!1,Nt="",Lt=!1,Xi=[],lt=!1,qt="",Rn="",dt="",rn="",ut="",q=[],J=!1,ie="",rt=!1,Yr="",Dt="",ir="",or="",Je=-1,it=!1,C=null,xt=[],hn=!1,tt="",sr="",qe=-1,Dn=!1,Zi=null,Wn=null;const eo=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let fe=[],te=null,xe=null,Ee=!1;const Ps=Hc(),to=Wc({canEdit:()=>{var t;return((t=v==null?void 0:v.user)==null?void 0:t.role)==="admin"}});let pn=[],Ze="",Wo=!1,H="biweekly",Fs=null,nt=!1,It=!1,Te="biweekly",Wt=!1,mn=!1,ze="",Ye=null,K={targetType:"other",note:"",tickets:""},Mn=!1,Ut="",re=[],De=[],Oe="",Pe=!1,Fe="",on=null,Le=-1,Ge=!1,qr=!1,pe="",O={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},Tn="",ne=-1,$e=!1,Ci={biweekly:0,monthly:0};const Sd=1780786800,At=14*24*60*60,xr=60*60,Ir=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let P=Ir[0].id;const Bi=new Set;function wd(){Os.innerHTML=`
    <main class="splash-screen">
      <img src="${jc}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await cd(),await _d(),Gs(),Yn(),await Ot()},5e3)}async function _d(){try{v=await rd()}catch(t){v={logged_in:!1,allowed:!1,status_message:""},y("session-error",L(t),{ttlMs:b})}}function Gs(){Os.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${zc}" alt="" class="title-icon" />
          <span class="app-title">GuildSync</span>
        </div>

        <div class="window-buttons">
          <button id="minimizeButton" class="window-button" title="Minimize">\u2212</button>
          <button id="maximizeButton" class="window-button" title="Maximize">\u25A1</button>
          <button id="closeButton" class="window-button close-button" title="Close to tray">\xD7</button>
        </div>
      </header>

      <section class="main-surface">
        <div class="compact-app-header">
          <div class="compact-brand">
            <img src="${Yc}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${c(Wr)}</div>
            </div>
          </div>
          <div class="compact-header-actions">
            <div id="desktopUpdateArea" class="desktop-update-area"></div>
            <div id="discordArea" class="discord-area"></div>
          </div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${Us()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content web-upload-banner-dismissed" aria-live="polite">
          ${Vs()}
        </section>

        <footer class="status-bar">
          <div id="statusMessageViewport" class="status-message-viewport" aria-live="polite">
            <div id="statusMessageTrack" class="status-message-track"></div>
          </div>
          <div class="status-spacer"></div>
          <div class="status-connection-wrap" aria-live="polite">
            <span id="statusConnectionLabel" class="status-connection-label">Server Unavailable</span>
            <div id="statusDot" class="status-dot" title="Websocket not connected"></div>
          </div>
        </footer>
      </section>
    </main>
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await sd()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await Ms(),await jl()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await od()}),zn(),Wi(),js(),mc(),xa(),Qa(),Zs(),Na(),Aa(),La(),Ea(),$a(),ha(),Ia(),Md(),vt(),Sn(),Ho||(window.addEventListener("resize",()=>{Rc(),Ec()}),np(),Ho=!0)}function Us(){return Ir.map(t=>{const e=t.id===P,n=Ad(t.id,e),r=n?Hs():0,i=n?`Deposit mail needs attention: ${r} item${r===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${n?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${g(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${g(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${Ld(t.icon)}</span>
          <span class="guildsync-tab-label">${c(t.label)}</span>
          ${n?`<span class="guildsync-tab-mail-badge" aria-label="${g(i)}">${r>99?"99+":c(String(r))}</span>`:""}
        </button>
      `}).join("")}function Hs(){return Q()?Zr()+lr()+Ya():0}function Ad(t,e){return t!=="more"||e?!1:Hs()>0}function Ld(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function Vs(){const t=Ir.find(n=>n.id===P)||Ir[0];let e="";return t.id==="discord-members"?e=zs():t.id==="eso-members"?e=Ys():t.id==="more"?e=za():t.id==="settings"?e=tu():e=`
      <div class="guildsync-tab-panel" data-active-tab="${g(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${c(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${Ge?sf():""}
    ${Wt?Ff():""}
    ${Mn?Df():""}
    ${it?Ju():""}
    ${Ln?ru():""}
    ${$n?lu():""}
    ${Lt?hu():""}
    ${rt?Lu():""}
    ${Dn?Dd():""}
  `}function Ed(){return Re.isOpen||Dn||ln||un||Ge||Wt||Mn||it||An||Ln||$n||Lt||rt||It}function $d(){return Dn?!1:rt?(Pi(),!0):Lt?(Oi(),!0):$n?(Ii(),!0):Ln?(xi(),!0):it?(yn(),!0):An?(Ui(),!0):Wt?(Fr(),!0):Mn?(Vf(),h(),!0):Ge?(Ge=!1,h(),!0):ln?(ln=!1,h(),!0):un?(un=!1,h(),!0):It?(It=!1,h(),!0):!1}function Rd(t){t.key==="Escape"&&$d()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",Rd,!0),window.guildSyncGlobalModalEscapeAttached=!0);function no(t={}){return new Promise(e=>{Wn&&Wn(!1),Dn=!0,Zi={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},Wn=e,h()})}function Or(t=!1){const e=Wn;Wn=null,Dn=!1,Zi=null,e&&e(t===!0),h()}function Dd(){const t=Zi||{};return`
    <div class="roster-history-overlay guildsync-confirm-overlay" role="dialog" aria-modal="true" aria-labelledby="guildSyncConfirmTitle">
      <div class="roster-history-dialog guildsync-confirm-dialog">
        <div class="roster-history-header guildsync-confirm-header">
          <div>
            <h3 id="guildSyncConfirmTitle">${c(t.title||"Confirm Action")}</h3>
            ${t.detail?`<p>${c(t.detail)}</p>`:""}
          </div>
        </div>
        <div class="guildsync-confirm-body">
          ${c(t.message||"Are you sure?")}
        </div>
        <div class="guildsync-confirm-actions">
          <button id="cancelGuildSyncConfirmButton" class="guildsync-confirm-button guildsync-confirm-cancel" type="button">${c(t.cancelLabel||"Cancel")}</button>
          <button id="acceptGuildSyncConfirmButton" class="guildsync-confirm-button guildsync-confirm-accept ${g(t.confirmClass||"danger")}" type="button">${c(t.confirmLabel||"Confirm")}</button>
        </div>
      </div>
    </div>
  `}function jo(t){var r,i,s,o;const e=(i=(r=t.target).closest)==null?void 0:i.call(r,"#cancelGuildSyncConfirmButton"),n=(o=(s=t.target).closest)==null?void 0:o.call(s,"#acceptGuildSyncConfirmButton");if(!(!e&&!n)){if(t.preventDefault(),t.stopPropagation(),e){Or(!1);return}n&&Or(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",jo,!0),document.addEventListener("pointerup",jo,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function Md(){if(!Dn)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=r=>{r.preventDefault(),r.stopPropagation(),Or(!1)}),e&&(e.onclick=r=>{r.preventDefault(),r.stopPropagation(),Or(!0)});const n=document.querySelector(".guildsync-confirm-overlay");n&&(n.onclick=r=>{r.target===n&&(r.preventDefault(),r.stopPropagation())})}function Ws(t=P){if(!(u!=null&&u.connected))return;if(t==="discord-members"?cn:t==="eso-members"?et:t==="more"?nt:!1){Bi.add(t);return}Bi.delete(t),t==="discord-members"&&er({silent:!0}),t==="eso-members"&&(Di=!0,Cn({silent:!0})),t==="more"&&ve({silent:!0})}function ar(t){Bi.has(t)&&Ws(t)}function js(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(Ed())return;const e=t.dataset.tabId;if(!e)return;const n=e!==P;P=e,Ws(),n&&h()})})}function Td(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function ro(t){const e={x:window.scrollX,y:window.scrollY},n=[];for(let o=t;o;o=o.parentElement)n.push({element:o,top:o.scrollTop,left:o.scrollLeft});const r=t?Array.from(t.querySelectorAll("*")):[],i=(o,a)=>o.id?o.id===a.id:o.tagName===a.tagName&&o.className===a.className,s=r.filter(o=>o.scrollTop||o.scrollLeft).map(o=>({identity:{id:o.id,tagName:o.tagName,className:o.className},occurrence:r.filter(a=>i(o,a)).indexOf(o),top:o.scrollTop,left:o.scrollLeft}));return()=>{const o=t?Array.from(t.querySelectorAll("*")):[];for(const{identity:a,occurrence:l,top:d,left:f}of s){const p=o.filter(m=>i(a,m))[l];p&&(p.scrollTop=d,p.scrollLeft=f)}for(const{element:a,top:l,left:d}of n)a.scrollTop=l,a.scrollLeft=d;window.scrollTo({left:e.x,top:e.y,behavior:"instant"})}}function h(t={}){rt&&Td();const e=document.querySelector(".guildsync-tabs"),n=document.querySelector("#guildSyncTabContent"),r=ro(n);e&&(e.innerHTML=Us()),n&&(n.innerHTML=Vs()),js(),mc(),xa(),Qa(),Zs(),Na(),Aa(),La(),Ea(),$a(),ha(),Ia(),r(),t.restoreDiscordSearchFocus&&Eh(),t.restoreRosterSearchFocus&&$h(),P==="discord-members"&&(u==null?void 0:u.connected)&&ue.length===0&&!cn&&er({silent:!0}),P==="eso-members"&&(u==null?void 0:u.connected)&&be.length===0&&!et&&!Di&&(Di=!0,Cn({silent:!0})),(P==="more"&&fe.length===0||P==="settings"&&!te&&!Wo)&&(u==null?void 0:u.connected)&&!nt&&(Wo=!0,ve({silent:!0})),(P==="discord-members"||P==="eso-members"||P==="settings")&&(u==null?void 0:u.connected)&&q.length===0&&!J&&Kr({silent:!0})}function zs(){const t=_h(),e=Rh(),n=Array.from(en),r=Array.from(tn);return`
    <div class="guildsync-tab-panel discord-member-panel" data-active-tab="discord-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Discord Member Data</h2>
          <p class="discord-data-subtitle">Manage and view Discord member information.</p>
        </div>
        <div class="discord-history-header-action" style="flex: 1; display: flex; justify-content: center; align-items: center;">
          <button id="openDiscordHistoryButton" class="refresh-discord-button" type="button">Lookup Member History</button>
        </div>
        <div class="discord-data-actions">
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${c(yc(zr))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${cn||Mr?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Mr?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${g(Tr)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!en.has(i)).map(i=>`<option value="${g(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All roles</span>':n.map(i=>Ch(i)).join("")}
            </div>
          </div>

          <button id="clearDiscordFiltersButton" class="clear-discord-filters-button" type="button">Clear Filters</button>
          <div class="discord-results-count">${t.length} result${t.length===1?"":"s"}</div>
        </div>

        <div class="discord-filter-row discord-link-filter-row">
          <div class="discord-role-filter-wrap member-link-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordLinkStatusFilter">Link Status</label>
            <select id="discordLinkStatusFilter" class="discord-role-select">
              <option value="">Add link status...</option>
              ${eo.filter(i=>!tn.has(i.id)).map(i=>`<option value="${g(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>Ks("discord",i)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${gr("username","Username")}
                ${gr("global_name","Global Name")}
                ${gr("server_nickname","Server Nickname")}
                ${gr("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>Dh(i)).join(""):Mh()}
            </tbody>
          </table>
        </div>
      </div>
      ${un?Yd():""}
    </div>
  `}function Ys(){const t=Gd(),e=Vd(),n=Array.from(Tt),r=Array.from(nn);return`
    <div class="guildsync-tab-panel eso-roster-panel" data-active-tab="eso-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Guild Roster</h2>
          <p class="discord-data-subtitle">Current ESO roster imported from GuildSyncRoster.</p>
        </div>
        <div class="discord-history-header-action" style="flex: 1; display: flex; justify-content: center; align-items: center;">
          <button id="openRosterHistoryButton" class="refresh-discord-button" type="button">Lookup Roster History</button>
        </div>
        <div class="discord-data-actions">
          <span class="discord-last-refresh">Last Refresh: ${c(bf(Cr))}</span>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${et?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${et?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${g(Br)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!Tt.has(i)).map(i=>`<option value="${g(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All ranks</span>':n.map(i=>Wd(i)).join("")}
            </div>
          </div>

          <button id="clearRosterFiltersButton" class="clear-discord-filters-button" type="button">Clear Filters</button>
          <div class="discord-results-count">${t.length} result${t.length===1?"":"s"}</div>
        </div>

        <div class="discord-filter-row discord-link-filter-row">
          <div class="discord-role-filter-wrap member-link-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterLinkStatusFilter">Link Status</label>
            <select id="rosterLinkStatusFilter" class="discord-role-select">
              <option value="">Add link status...</option>
              ${eo.filter(i=>!nn.has(i.id)).map(i=>`<option value="${g(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>Ks("roster",i)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${On("account_name","Account Name")}
                ${On("rank","Rank")}
                ${On("joined","Joined")}
                ${On("notes","Notes","roster-notes-header")}
                ${On("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map((i,s)=>Cd(i,s)).join(""):Od()}
            </tbody>
          </table>
        </div>
      </div>
      ${ln?Xd():""}
      ${An?Nd():""}
    </div>
  `}function Cd(t,e=-1){const n=Pd(t.rank||""),r=n?` style="color: ${n};"`:"";return`
    <tr class="eso-roster-row${e===Y?" roster-search-active-row":""}"${r} data-roster-row-index="${g(String(e))}" data-eso-account-name="${g(t.account_name||"")}">
      <td>${c(t.account_name||"")}</td>
      <td>${io(t.rank||"")}</td>
      <td>${c(Xr(t.joined))}</td>
      <td class="roster-notes-cell">${Bd(t)}</td>
      <td class="member-link-action-cell">${ka({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function Bd(t){const e=String((t==null?void 0:t.account_name)||"").trim(),n=Number((t==null?void 0:t.note_count)||0),r=n>0,i=r?`${n} roster note${n===1?"":"s"} for ${e}`:`No roster notes for ${e}`;return`
    <button
      class="roster-notes-button${r?" has-notes":""}"
      type="button"
      data-open-roster-notes="${g(e)}"
      title="${g(i)}"
      aria-label="${g(i)}"
    >
      <svg class="roster-notes-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4.5 5.25c0-.69.56-1.25 1.25-1.25h5.1c.89 0 1.72.34 2.35.95A3.28 3.28 0 0 1 15.55 4h2.7c.69 0 1.25.56 1.25 1.25v13.5c0 .69-.56 1.25-1.25 1.25h-4.6c-.75 0-1.45.29-1.98.82a.95.95 0 0 1-1.34 0A2.8 2.8 0 0 0 8.35 20h-2.6c-.69 0-1.25-.56-1.25-1.25V5.25Zm7.25 1.6A1.28 1.28 0 0 0 10.85 6H6.5v12h1.85c1.14 0 2.24.35 3.15 1V7.1c0-.09.01-.17.25-.25Zm1.75 12.15a6.32 6.32 0 0 1 3.15-1h.85V6h-1.95c-.73 0-1.4.29-1.9.8l-.15.15V19Z"/></svg>
      ${r?`<span class="roster-notes-count" aria-hidden="true">${n}</span>`:""}
    </button>
  `}function Nd(){const t=Xn||"",e=Q();return`
    <div class="roster-history-overlay roster-notes-overlay" role="dialog" aria-modal="true" aria-labelledby="rosterNotesTitle">
      <div class="roster-history-dialog roster-notes-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="rosterNotesTitle">Roster Notes</h3>
            <p>${c(t)}</p>
          </div>
          <button id="closeRosterNotesButton" class="roster-history-close" type="button" aria-label="Close roster notes">\xD7</button>
        </div>
        <div class="roster-notes-body">
          ${yt?`<div class="discord-data-error">${c(yt)}</div>`:""}
          <div class="roster-notes-table-shell">
            <table class="discord-member-table roster-notes-table">
              <thead>
                <tr>
                  <th>Date/Time</th>
                  <th>Officer</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                ${qd()}
              </tbody>
            </table>
          </div>
          ${e?xd():'<div class="roster-history-muted">A User or Admin role is required to add notes.</div>'}
        </div>
      </div>
    </div>
  `}function qd(){return Nr?'<tr><td class="bank-empty-row" colspan="3">Loading notes...</td></tr>':!Array.isArray(gt)||gt.length===0?'<tr><td class="bank-empty-row" colspan="3">No notes recorded for this member.</td></tr>':gt.map(t=>`
      <tr>
        <td class="roster-notes-when-cell">${c(Id(t.timestamp))}</td>
        <td class="roster-notes-officer-cell">${c(t.officer||"")}</td>
        <td class="roster-notes-note-cell">${c(t.note||"")}</td>
      </tr>
    `).join("")}function xd(){return`
    <div class="roster-notes-form">
      <label for="rosterNotesNewNote">Add Note</label>
      <textarea
        id="rosterNotesNewNote"
        class="roster-notes-textarea"
        rows="4"
        placeholder="Enter a new roster note..."
        ${Ct?"disabled":""}
      >${c(dn)}</textarea>
      <button id="saveRosterNoteButton" class="refresh-discord-button" type="button" ${Ct?"disabled":""}>
        ${Ct?"Saving...":"Save Note"}
      </button>
    </div>
  `}function Id(t){const e=Number(t||0);return!Number.isFinite(e)||e<=0?"":new Date(e*1e3).toLocaleString()}function Od(){return`
    <tr>
      <td class="bank-empty-row" colspan="5">${c(et?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function Pd(t){String(t||"").trim();const e=Bh(t);return ni(e==null?void 0:e.role_color)}function io(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${c(e)}</span>`}function Fd(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":io(e)}function Gd(){const t=Br.trim().toLowerCase(),e=be.filter(n=>{const r=String(n.rank||"").trim();if(Tt.size>0&&!Tt.has(r)||!Xs(nn,Ni(n)))return!1;if(!t)return!0;const i=Xr(n.joined),s=fo(n.joined),o=Ni(n),a=Qs(n.account_name||"");return[n.account_name,r,i,s,n.joined,o,a].map(d=>String(d||"").toLowerCase()).join(" ").includes(t)});return Ud(e)}function Ud(t){if(!Ke||!ae)return t;const e=ae==="desc"?-1:1;return[...t].sort((n,r)=>{const i=zo(n,Ke),s=zo(r,Ke),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:String(n.account_name||"").localeCompare(String(r.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function zo(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const n=Number(t.joined||0);return Number.isFinite(n)&&n>0?String(n).padStart(16,"0"):""}if(e==="notes")return String(Number(t.note_count||0)).padStart(8,"0");if(e==="linked"){const n=Ni(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[n]||"9"} ${n} ${Qs(t.account_name||"")}`}return String(t.account_name||"")}function Hd(t){const n=new Set(["account_name","rank","joined","notes","linked"]).has(t)?t:"account_name";Ke!==n?(Ke=n,ae="asc"):ae==="asc"?ae="desc":ae==="desc"?(Ke="",ae=""):(Ke=n,ae="asc"),Y=-1,h()}function On(t,e,n=""){const r=Ke===t&&Boolean(ae),i=r?ae==="asc"?"ascending":"descending":"none",s=r?ae==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${g(n)}" aria-sort="${g(i)}">
      <button
        class="discord-sort-header roster-sort-header${r?" active":""}"
        type="button"
        data-roster-sort-column="${g(t)}"
        title="Sort ${g(e)}${r&&ae==="asc"?" descending":r&&ae==="desc"?" not sorted":" ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function Vd(){return Array.from(new Set(be.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function Wd(t){const e=Ao(t),n=ni(e==null?void 0:e.role_color),r=Eo(n),i=Lo(n,r);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-roster-rank-filter="${g(t)}"
      style="${i}"
      title="Remove ${g(t)} filter"
    >
      <span>${c(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function jd(t){const e=eo.find(n=>n.id===t);return e?e.label:t}function Ks(t,e){const n=t==="roster"?"roster":"discord",r=jd(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${n}-link-status-filter="${g(e)}"
      title="Remove ${g(r)} link filter"
    >
      <span>${c(r)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Js(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked"&&String(n.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function zd(t){return Js(Qr(t==null?void 0:t.discord_id))}function Ni(t){return Js(Jr(t==null?void 0:t.account_name))}function Qs(t){const e=Jr(t),n=ba({mode:"eso-to-discord",esoAccountName:t}),r=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean),i=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="candidate").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean);return[n.label,n.title,r.join(" "),i.join(" ")].filter(Boolean).join(" ")}function Xs(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function Yd(){return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="discordHistoryTitle">
      <div class="roster-history-dialog roster-rank-history-dialog discord-member-history-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="discordHistoryTitle">Discord Member Historical Data</h3>
            <p>Search Discord member changes, including joins, leaves, name changes, nickname changes, and role changes.</p>
          </div>
          <button id="closeDiscordHistoryButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        <div class="roster-history-search-row">
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${g(st)}" />
        </div>

        ${Xe?`<div class="discord-data-error">${c(Xe)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Kd()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${Gt?`: ${c(Gt)}`:""}</div>
            ${Jd()}
          </div>
        </div>
      </div>
    </div>
  `}function Kd(){return kt&&ye.length===0?'<div class="roster-history-muted">Searching...</div>':ye.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${ye.map((t,e)=>`
        <button class="roster-history-match${e===Ae||t.discord_id===fn?" is-selected":""}" type="button" data-discord-history-id="${g(t.discord_id)}" data-discord-history-name="${g(qi(t))}">
          <span>${c(qi(t))}</span>
          <strong>${c(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===Ae?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Jd(){return fn?kt&&bt.length===0?'<div class="roster-history-muted">Loading history...</div>':bt.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
    <div class="roster-history-event-table-shell">
      <table class="discord-member-table roster-history-event-table roster-rank-history-event-table discord-member-history-event-table">
        <thead>
          <tr>
            <th class="roster-history-when-column">When</th>
            <th>Event</th>
            <th>Old</th>
            <th>New</th>
            <th>Initiator</th>
          </tr>
        </thead>
        <tbody>
          ${bt.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(fo(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${c(Qd(t.event_type))}</td>
              <td>${c(t.old_value||"")}</td>
              <td>${c(t.new_value||"")}</td>
              <td>${c(t.initiator||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function qi(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function Qd(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Xd(){return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="rosterHistoryTitle">
      <div class="roster-history-dialog roster-rank-history-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="rosterHistoryTitle">Roster Rank Historical Data</h3>
            <p>Search prior rank records, including members no longer on the current roster.</p>
          </div>
          <button id="closeRosterHistoryButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        <div class="roster-history-search-row">
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${g(Qn)}" />
        </div>

        ${Qe?`<div class="discord-data-error">${c(Qe)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Zd()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${_t?`: ${c(_t)}`:""}</div>
            ${eu()}
          </div>
        </div>
      </div>
    </div>
  `}function Zd(){return mt&&ge.length===0?'<div class="roster-history-muted">Searching...</div>':ge.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${ge.map((t,e)=>`
        <button class="roster-history-match${e===_e||t.account_name===_t?" is-selected":""}" type="button" data-roster-history-account="${g(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <strong>${c(t.rank||"")}</strong>
          ${e===_e?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function eu(){return _t?mt&&pt.length===0?'<div class="roster-history-muted">Loading history...</div>':pt.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
    <div class="roster-history-event-table-shell">
      <table class="discord-member-table roster-history-event-table roster-rank-history-event-table">
        <thead>
          <tr>
            <th class="roster-history-when-column">When</th>
            <th>Event</th>
            <th>Rank</th>
            <th>Officer</th>
          </tr>
        </thead>
        <tbody>
          ${pt.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(fo(t.timestamp))}</td>
              <td>${c(t.event_type||"")}</td>
              <td>${Fd(t.rank)}</td>
              <td>${c(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function tu(){return`
    <div class="guildsync-tab-panel reports-panel" data-active-tab="settings">
      <div class="discord-data-header reports-header">
        <div>
          <h2 class="discord-data-title">Reports & Admin</h2>
          <p class="discord-data-subtitle">Run GuildSync reports and administrative review tools. More options can be added here later.</p>
        </div>
      </div>

      <div class="reports-scroll-area">
        ${ta()}
        ${to.render()}
        <section class="reports-list" aria-label="Available reports">
          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Associates Promotion Eligible</h3>
              <p>Shows Associates who have been in the guild at least two weeks, have purchased at least one raffle ticket, and are linked to Discord. Also shows otherwise eligible Associates who still need a Discord link reviewed.</p>
            </div>
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${at?"disabled":""}>
              ${at?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${ct?"disabled":""}>
              ${ct?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${lt?"disabled":""}>
              ${lt?"Loading...":"Run"}
            </button>
          </article>
        </section>

        <article class="report-option-card">
          <div class="report-option-copy">
            <h3>ESO / Discord Member Links</h3>
            <p>Review automatic ESO-to-Discord links, accept candidate matches, unlink blocked matches, or run the matcher again after roster or Discord refreshes.</p>
          </div>
          <button id="runMemberLinksReportButton" class="refresh-discord-button report-run-button" type="button" ${J?"disabled":""}>
            ${J?"Loading...":"Run"}
          </button>
        </article>
      </div>
    </div>
  `}function Zs(){var t,e,n,r;P==="settings"&&(ps(Ps,{refresh:!0}),to.wire({request:(i,s)=>M(i,s,12e4),rerender:h}),ea(),(t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>na()),(e=document.querySelector("#runDiscordRankAuditReportButton"))==null||e.addEventListener("click",()=>cu()),(n=document.querySelector("#runDiscordLastSeenReportButton"))==null||n.addEventListener("click",()=>fu()),(r=document.querySelector("#runMemberLinksReportButton"))==null||r.addEventListener("click",()=>wu()))}function ea(t=document){var e,n,r,i,s;(e=t.querySelector("#cancelBonusDefaults"))==null||e.addEventListener("click",()=>{Ee=!1,h()}),(n=t.querySelector("#resetBonusDefaults"))==null||n.addEventListener("click",()=>{Ee=!0,h()}),(r=t.querySelector("#raffleBonusSettingsForm"))==null||r.addEventListener("submit",nu),(i=t.querySelector("#raffleBonusSettingsForm"))==null||i.addEventListener("input",o=>{xe={raffle:Ze,values:new Map(new FormData(o.currentTarget))}}),(s=t.querySelector("#bonusRafflePicker"))==null||s.addEventListener("change",o=>{Ze=o.currentTarget.value,Ee=!1,xe=null,h()})}function ta(){var o;if(!te)return'<article class="report-option-card raffle-bonus-card"><div class="report-option-copy"><h3><button type="button" class="report-section-toggle" data-report-toggle="bonus" aria-expanded="false" aria-controls="raffleBonusContent">Raffle Bonus Tickets <span aria-hidden="true">\u25BE</span></button></h3><div id="raffleBonusContent" class="report-section-content" inert><div class="report-section-inner"><p>Loading raffle bonus settings...</p></div></div></div></article>';const t=!Ee&&(xe==null?void 0:xe.raffle)===Ze?xe.values:null,e=pn.find(a=>`${a.type}:${a.salesEnd}`===Ze),n=Ee&&(e==null?void 0:e.inheritedSettings)?e.inheritedSettings:e,r=e?{enabledByType:{...te.enabledByType,[e.type]:n.enabled},biweekly:e.type==="biweekly"?n.tiers:te.biweekly,monthly:e.type==="monthly"?n.tiers:te.monthly}:Ee&&te.envDefaults||te,i=((o=v==null?void 0:v.user)==null?void 0:o.role)==="admin",s=(a,l)=>{var d,f;return`
    <fieldset class="raffle-bonus-tiers" ${i&&!Ee?"":"disabled"}>
      <legend>${l}</legend>
      <label><input name="${a}-enabled" type="checkbox" ${(t?t.has(`${a}-enabled`):(f=(d=r.enabledByType)==null?void 0:d[a])!=null?f:r.enabled)?"checked":""}> Enable bonus tickets</label>
      ${r[a].map((p,m)=>{var A,S;return`
        <div class="raffle-bonus-tier">
          <span>Period ${m+1}${m===r[a].length-1?" (final)":""}</span>
          <label>Hours <input name="${a}-${m}-hours" type="number" min="1" step="1" required value="${g(String(t&&(A=t.get(`${a}-${m}-hours`))!=null?A:p.hours))}"></label>
          <label>Bonus % <input name="${a}-${m}-percent" type="number" min="0" max="100" step="0.1" required value="${g(String(t&&(S=t.get(`${a}-${m}-percent`))!=null?S:p.percent))}"></label>
        </div>
      `}).join("")}
    </fieldset>`};return`
    <article class="report-option-card raffle-bonus-card">
      <div class="report-option-copy">
        <h3><button type="button" class="report-section-toggle" data-report-toggle="bonus" aria-expanded="false" aria-controls="raffleBonusContent">Raffle Bonus Tickets <span aria-hidden="true">\u25BE</span></button></h3>
        <div id="raffleBonusContent" class="report-section-content" inert><div class="report-section-inner">
        <p>Default settings carry forward. Select a raffle to edit only that raffle, including past raffles. Purchase time determines its hour period. Bonuses round down; the final tier must be 0%. Manual entries never receive additional bonuses. Changes apply only when you save.</p>
        <label>Bonus rules for
          <select id="bonusRafflePicker">
            <option value="">Default rules for upcoming raffles</option>
            ${pn.map(a=>`<option value="${g(`${a.type}:${a.salesEnd}`)}" ${Ze===`${a.type}:${a.salesEnd}`?"selected":""}>${c(a.label)}${a.enabled?" (Bonuses)":""}</option>`).join("")}
          </select>
        </label>
        <p data-bonus-settings-source>Source: ${c(e?e.overridden?"Raffle override":"Saved raffle policy":te.source===".env"?"Default":te.source||"Default")}</p>
        ${Ee?'<p role="status">Default Hours, Bonus %, and enabled settings are shown below. Click Save Bonus Settings to apply them, or Cancel default restoration to keep your previous settings.</p><button type="button" id="cancelBonusDefaults">Cancel default restoration</button>':""}
        <form id="raffleBonusSettingsForm">
          ${i?`<button type="button" id="resetBonusDefaults">Return to defaults</button><p>Restores Hours, Bonus %, and the enabled switch ${e?"from this raffle\u2019s inherited policy":"for both raffle types from their default rules"}. Changes apply only after Save Bonus Settings.</p>`:""}
          ${e?s(e.type,e.label):s("biweekly","Bi-Weekly Raffle")+s("monthly","50/50 Raffle")}
          ${i?'<button class="refresh-discord-button report-run-button" type="submit">Save Bonus Settings</button>':"<p>Admin access is required to change these settings.</p>"}
        </form>
        </div></div>
      </div>
    </article>`}async function nu(t){t.preventDefault();const e=t.currentTarget,n=new FormData(e),r=pn.find(o=>`${o.type}:${o.salesEnd}`===Ze),i=o=>((r==null?void 0:r.type)===o?r.tiers:te[o]).map((a,l)=>({hours:Number(n.get(`${o}-${l}-hours`)),percent:Number(n.get(`${o}-${l}-percent`))})),s=r?{raffleType:r.type,salesEnd:r.salesEnd,enabled:n.has(`${r.type}-enabled`),tiers:i(r.type)}:{enabledByType:{biweekly:n.has("biweekly-enabled"),monthly:n.has("monthly-enabled")},biweekly:i("biweekly"),monthly:i("monthly")};try{Ee&&(s.resetToDefaults=!0);const o=await M("guildsync:save-raffle-bonus-settings",s,3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||"Could not save raffle bonus settings.");te=o.bonusSettings,xe=null,Ee=!1,await ve({silent:!0}),y("bonus-settings","Raffle bonus settings saved.",{ttlMs:b}),h()}catch(o){y("bonus-settings-error",L(o),{ttlMs:b})}}function na(){Ln=!0,Bt="",h(),Ma()}function xi(){Ln=!1,Bt="",h()}function ru(){const t=iu(),e=ou(),n=En.length;return`
    <div class="roster-history-overlay report-results-overlay" role="dialog" aria-modal="true" aria-labelledby="associateTicketReportTitle">
      <div class="roster-history-dialog report-results-dialog associate-ticket-report-dialog">
        <div class="roster-history-header report-results-header">
          <div>
            <h3 id="associateTicketReportTitle">Associates Promotion Eligible</h3>
            <p>Associates who meet tenure and ticket requirements, separated by Discord link status.</p>
          </div>
          <button id="closeAssociateTicketReportButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        <div class="report-results-toolbar">
          <button id="copyAssociateTicketReportGridButton" class="bank-export-copy-button" type="button" ${n===0?"disabled":""}>Copy Grid</button>
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${at?"disabled":""}>${at?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(n))} total row${n===1?"":"s"}</span>
        </div>

        ${Bt?`<div class="discord-data-error">${c(Bt)}</div>`:""}

        <div class="report-results-content">
          ${at&&n===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!at&&n===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${n>0?Yo("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${n>0?Yo("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${c(oa())}</textarea>
      </div>
    </div>
  `}function iu(){return En.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function ou(){return En.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function Yo(t,e,n,r){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${c(t)}</h4>
          <p>${c(e)}</p>
        </div>
        <span>${c(String(n.length))} row${n.length===1?"":"s"}</span>
      </div>
      ${n.length>0?su(n):`<div class="roster-history-muted report-section-empty">${c(r)}</div>`}
    </section>
  `}function su(t=En){return`
    <div class="roster-history-event-table-shell report-result-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table">
        <thead>
          <tr>
            <th>Account Name</th>
            <th>Rank</th>
            <th>Joined</th>
            <th>Purchased Tickets</th>
            <th>Earliest Deposit / Raffle</th>
            <th>Discord Link</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr>
              <td>${c(e.account_name||"")}</td>
              <td>${io(e.rank||"")}</td>
              <td>${c(Xr(e.joined))}</td>
              <td>${c(Me(e.purchased_tickets||0))}</td>
              <td class="associate-earliest-deposit-cell">${c(ra(e))}</td>
              <td>${c(ia(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function ra(t){const e=String((t==null?void 0:t.earliest_deposit_summary)||"").trim();if(e)return e;const n=String((t==null?void 0:t.earliest_deposit_date)||"").trim(),r=String((t==null?void 0:t.earliest_deposit_raffle_period)||"").trim();return[n,r].filter(Boolean).join(" | ")}function ia(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function oa(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Earliest Deposit / Raffle","Discord Link"]];for(const e of En){const n=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([n,e.account_name||"",e.rank||"",Xr(e.joined),Me(e.purchased_tickets||0),ra(e),ia(e)])}return t.map(e=>e.map(ei).join("	")).join(`
`)}async function au(){const t=oa();if(await ti(t)){y("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:b});return}const n=document.querySelector("#associateTicketReportTsv");n&&(n.focus(),n.select()),y("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:b})}function cu(){$n=!0,Nt="",h(),Da()}function Ii(){$n=!1,Nt="",h()}function lu(){const t=Zn.length;return`
    <div class="roster-history-overlay report-results-overlay" role="dialog" aria-modal="true" aria-labelledby="discordRankAuditReportTitle">
      <div class="roster-history-dialog report-results-dialog discord-rank-audit-report-dialog">
        <div class="roster-history-header report-results-header">
          <div>
            <h3 id="discordRankAuditReportTitle">Discord Rank Audit</h3>
            <p>Discord members with missing links or rank-role differences compared to linked ESO roster accounts.</p>
          </div>
          <button id="closeDiscordRankAuditReportButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        <div class="report-results-toolbar">
          <button id="copyDiscordRankAuditReportGridButton" class="bank-export-copy-button" type="button" ${t===0?"disabled":""}>Copy Grid</button>
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${ct?"disabled":""}>${ct?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${Nt?`<div class="discord-data-error">${c(Nt)}</div>`:""}

        <div class="report-results-content">
          ${ct&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!ct&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?du(Zn):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${c(ca())}</textarea>
      </div>
    </div>
  `}function du(t=Zn){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-rank-audit-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-rank-audit-table">
        <colgroup>
          <col class="discord-rank-audit-member-col">
          <col class="discord-rank-audit-discord-col">
          <col class="discord-rank-audit-eso-account-col">
          <col class="discord-rank-audit-eso-rank-col">
          <col class="discord-rank-audit-issue-col">
        </colgroup>
        <thead>
          <tr>
            <th>Discord Member</th>
            <th>Discord Rank Role</th>
            <th>Linked ESO Account(s)</th>
            <th>ESO Rank</th>
            <th>Issue</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr>
              <td data-label="Discord Member" class="discord-rank-audit-member-cell">${c(sa(e))}</td>
              <td data-label="Discord Rank Role" class="discord-rank-audit-discord-cell">${c(e.discord_rank||"No matching rank role")}</td>
              <td data-label="Linked ESO Account(s)" class="discord-rank-audit-eso-account-cell">${c(e.eso_accounts||"No linked ESO account")}</td>
              <td data-label="ESO Rank" class="discord-rank-audit-eso-rank-cell">${c(e.eso_rank||"None")}</td>
              <td data-label="Issue" class="discord-rank-audit-issue-cell">${c(aa(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function sa(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function aa(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function ca(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of Zn)t.push([sa(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",aa(e)]);return t.map(e=>e.map(ei).join("	")).join(`
`)}async function uu(){const t=ca();if(await ti(t)){y("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:b});return}const n=document.querySelector("#discordRankAuditReportTsv");n&&(n.focus(),n.select()),y("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:b})}function fu(){Lt=!0,qt="",Rn="",h(),Ra(),q.length===0&&!J&&Kr({silent:!0})}function Oi(){Lt=!1,qt="",Rn="",dt="",rn="",ut="",h()}function hu(){const t=oo(),e=Xi.length;return`
    <div class="roster-history-overlay report-results-overlay discord-last-seen-report-overlay" role="dialog" aria-modal="true" aria-labelledby="discordLastSeenReportTitle">
      <div class="roster-history-dialog report-results-dialog discord-last-seen-report-dialog">
        <div class="roster-history-header report-results-header">
          <div>
            <h3 id="discordLastSeenReportTitle">Discord Last Seen</h3>
            <p>Last server-specific activity tracked by GuildSync. Times are shown in your local time zone.</p>
          </div>
          <button id="closeDiscordLastSeenReportButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        <div class="report-results-toolbar">
          <button id="copyDiscordLastSeenReportGridButton" class="bank-export-copy-button" type="button" ${e===0?"disabled":""}>Copy Grid</button>
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${lt?"disabled":""}>${lt?"Loading...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(e))} Discord member${e===1?"":"s"}</span>
        </div>

        <div class="discord-last-seen-filter-row">
          <input
            id="discordLastSeenReportSearchInput"
            class="member-links-report-search-input discord-last-seen-search-input"
            type="search"
            autocomplete="off"
            spellcheck="false"
            placeholder="Search Discord member, username, last seen action, or date..."
            value="${g(Rn)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${dt===""?"selected":""}>All link statuses</option>
            <option value="linked" ${dt==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${dt==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${dt==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${qt?`<div class="discord-data-error discord-last-seen-report-error">${c(qt)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${lt&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!lt&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?pu(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${c(da(t))}</textarea>
      </div>
    </div>
  `}function pu(t=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${Pn("name","Discord Member")}</th>
            <th>${Pn("eso","Linked ESO Account")}</th>
            <th>${Pn("date","Last Seen")}</th>
            <th>${Pn("days","Days Since")}</th>
            <th>${Pn("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr class="discord-last-seen-row ${g(vu(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${g(Ht(e).status)}" data-discord-last-seen-search="${g(la(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${ku(e)}
                  <span>${c(gn(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${gu(e)}</td>
              <td>${c(so(e.last_seen))}</td>
              <td>${c(ao(e.last_seen))}</td>
              <td>${c(Pr(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function Pn(t,e){const n=rn===t,r=n?ut==="asc"?"\u25B2":"\u25BC":"\u2195",i=n?`${e}: ${ut==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${n?" active":""}" type="button" data-discord-last-seen-sort="${g(t)}" title="${g(i)}">
      <span>${c(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${c(r)}</span>
    </button>
  `}function oo(){const t=[...Xi],e=rn,n=ut;if(!e||!n)return t;const r=n==="desc"?-1:1;return t.sort((i,s)=>{var o,a;if(e==="date"){const l=Number(i.last_seen||0)||0,d=Number(s.last_seen||0)||0;return(l-d)*r}if(e==="days")return(Ko(i.last_seen)-Ko(s.last_seen))*r;if(e==="action")return Pr(i.last_seen_action).localeCompare(Pr(s.last_seen_action),void 0,{sensitivity:"base"})*r;if(e==="eso"){const l=Ht(i),d=Ht(s),f={linked:0,candidate:1,unlinked:2},p=((o=f[l.status])!=null?o:9)-((a=f[d.status])!=null?a:9);return p!==0?p*r:l.esoAccountName.localeCompare(d.esoAccountName,void 0,{sensitivity:"base"})*r}return gn(i).localeCompare(gn(s),void 0,{sensitivity:"base"})*r})}function mu(t){rn!==t?(rn=t,ut="asc"):ut==="asc"?ut="desc":(rn="",ut=""),h()}function gn(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function la(t){return[gn(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,yu(t),so(t==null?void 0:t.last_seen),ao(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function Ht(t){const e=Ou(t==null?void 0:t.discord_id),n=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),r=String((e==null?void 0:e.eso_account_name)||"").trim();return n==="linked"&&r?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:r,title:`Linked ESO account: ${r}`}:(n==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&r?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:r,title:`Fuzzy ESO account candidate: ${r}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function gu(t){const e=Ht(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${g(e.className)}"
      title="${g(e.title)}"
      aria-label="${g(e.label)}"
      role="img"
    ></span>
  `}function yu(t){const e=Ht(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function bu(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!n)return"";if(/^https?:\/\//i.test(e))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function ku(t){const e=gn(t),n=e?e.slice(0,2).toUpperCase():"?",r=bu(t);return r?`<span class="discord-member-avatar"><img src="${g(r)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${c(n)}</span>`}function so(t){const e=Number(t);if(!e)return"Never";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t||"");const r=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(n).reduce((i,s)=>(i[s.type]=s.value,i),{});return`${r.month}/${r.day}/${r.year} ${r.hour}:${r.minute} ${r.dayPeriod}`}function vu(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const n=(Date.now()-e*1e3)/864e5;return n>30?"discord-last-seen-red":n>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function ao(t){const e=Number(t);if(!e)return"Never";const n=Date.now()-e*1e3;if(!Number.isFinite(n))return"";if(n<0)return"0 days";const r=Math.floor(n/864e5);return`${r} day${r===1?"":"s"}`}function Ko(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const n=Date.now()-e*1e3;return Number.isFinite(n)?n<0?0:Math.floor(n/864e5):Number.POSITIVE_INFINITY}function Pr(t){return String(t||"").trim()||"None tracked"}function da(t=oo()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const n of t){const r=Ht(n);e.push([gn(n),r.label||"",r.esoAccountName||"",so(n==null?void 0:n.last_seen),ao(n==null?void 0:n.last_seen),Pr(n==null?void 0:n.last_seen_action),(n==null?void 0:n.username)||"",(n==null?void 0:n.discord_id)||""])}return e.map(n=>n.map(ei).join("	")).join(`
`)}async function Su(){const t=oo().filter(i=>{const s=Ve(Rn),o=String(dt||"").trim().toLowerCase(),a=!s||Ve(la(i)).includes(s),l=!o||Ht(i).status===o;return a&&l}),e=da(t);if(await ti(e)){y("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:b});return}const r=document.querySelector("#discordLastSeenReportTsv");r&&(r.focus(),r.select()),y("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:b})}function wu(){rt=!0,ie="",h(),q.length===0&&!J&&Kr({silent:!0})}function Pi(){rt=!1,Yr="",Dt="",ir="",or="",Je=-1,h()}function ua(t){return[...new Set((Array.isArray(q)?q:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function fa(t,e){return t.map(n=>`<option value="${g(n)}" ${e===n?"selected":""}>${c(n)}</option>`).join("")}function _u(){return fa(ua("link_status"),ir)}function Au(){return fa(ua("link_method"),or)}function Lu(){return`
    <div class="roster-history-overlay member-links-report-overlay" role="dialog" aria-modal="true" aria-labelledby="memberLinksReportTitle">
      <div class="roster-history-dialog report-results-dialog member-links-report-dialog">
        <div class="roster-history-header report-results-header">
          <div>
            <h3 id="memberLinksReportTitle">ESO / Discord Member Links</h3>
            <p>${St()?"Review automatic links, accept fuzzy candidates, unblock/relink members, or run the matcher again.":"View ESO/Discord account links and suggested matches."}</p>
          </div>
          <button id="closeMemberLinksReportButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        <div class="report-results-toolbar">
          <button id="refreshMemberLinksButton" class="clear-discord-filters-button" type="button" ${J?"disabled":""}>Refresh Links</button>
          <button ${oe()?"":"hidden disabled"} id="runMemberAutoLinkButton" class="refresh-discord-button" type="button" ${J?"disabled":""}>${J?"Running...":"Run Auto-Linking"}</button>
          <span class="roster-history-muted">${c(String(q.length))} link/candidate row${q.length===1?"":"s"}</span>
        </div>

        <div class="member-links-report-filter-row">
          <input
            id="memberLinksReportSearchInput"
            class="member-links-report-search-input"
            type="search"
            autocomplete="off"
            spellcheck="false"
            placeholder="Search Discord account or ESO member..."
            value="${g(Yr)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${ir===""?"selected":""}>All statuses</option>
            ${_u()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${or===""?"selected":""}>All methods</option>
            ${Au()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${Dt===""?"selected":""}>All actions</option>
            <option value="needs-link" ${Dt==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${Dt==="can-unlink"?"selected":""}>Unlink Available</option>
            <option value="can-unblock" ${Dt==="can-unblock"?"selected":""}>Unblock Available</option>
          </select>
        </div>

        ${ie?`<div class="discord-data-error member-links-report-error">${c(ie)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${Du()}
        </div>
      </div>
    </div>
  `}function ha(){var n,r,i,s,o,a;if(!rt)return;(n=document.querySelector("#closeMemberLinksReportButton"))==null||n.addEventListener("click",Pi),(r=document.querySelector("#refreshMemberLinksButton"))==null||r.addEventListener("click",()=>Kr()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>xu());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",Mu),t.addEventListener("keydown",Nu)),(s=document.querySelector("#memberLinksReportActionFilter"))==null||s.addEventListener("change",Tu),(o=document.querySelector("#memberLinksReportStatusFilter"))==null||o.addEventListener("change",Cu),(a=document.querySelector("#memberLinksReportMethodFilter"))==null||a.addEventListener("change",Bu),cr(),document.querySelectorAll("[data-accept-member-candidate]").forEach(l=>{l.addEventListener("click",()=>ma(l.dataset.acceptMemberCandidate||"",l.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(l=>{l.addEventListener("click",()=>Iu(l.dataset.unlinkMemberLink||"",l.dataset.unlinkMemberLinkDiscordId||""))}),document.querySelectorAll("[data-unblock-member-auto-link]").forEach(l=>{l.addEventListener("click",()=>ga(l.dataset.unblockMemberAutoLink||"",l.dataset.unblockMemberAutoLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",l=>{l.target===e&&Pi()})}function Jo(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function Qo(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Eu(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function $u(t){return[...Array.isArray(t)?t:[]].sort((e,n)=>{const r=Jo(e)-Jo(n);if(r!==0)return r;const i=Qo(e).localeCompare(Qo(n),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((n==null?void 0:n.discord_user_id)||""),void 0,{sensitivity:"base"})})}function Ru(t){const e=Fi(t);let n="";e==="Username"?n=(t==null?void 0:t.discord_username)||"":e==="Global Name"?n=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(n=(t==null?void 0:t.discord_server_nickname)||""),n||(n=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const r=e?` <span class="member-link-report-match-field">(${c(e)})</span>`:"";return`<span class="member-link-report-discord-name">${c(n)}</span>${r}`}function Du(){return J&&q.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(q)||q.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
    <div class="roster-history-event-table-shell member-links-table-shell">
      <table class="discord-member-table roster-history-event-table member-links-table">
        <thead>
          <tr>
            <th>ESO Account</th>
            <th>Discord Member</th>
            <th class="member-links-status-col">Status</th>
            <th class="member-links-method-col">Method</th>
            <th class="member-links-action-col">Action</th>
            <th class="member-links-confidence-col">Confidence %</th>
          </tr>
        </thead>
        <tbody>
          ${$u(q).map(e=>{var s;const n=String(e.link_status||"").trim().toLowerCase(),r=String(e.link_method||"").trim().toLowerCase(),i=Ru(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${g(Eu(e))}"
                data-member-links-report-status="${g(n)}"
                data-member-links-report-method="${g(r)}"
                data-member-links-report-action="${g(Number(e.locked||0)===1||n==="blocked"?"can-unblock":n==="linked"?"can-unlink":n==="candidate"?"needs-link":"")}"
              >
                <td>${c(e.eso_account_name||"")}</td>
                <td>${i}</td>
                <td class="member-links-status-col">${c(Number(e.locked||0)===1||n==="blocked"?"blocked":n||"")}</td>
                <td class="member-links-method-col">${c(r||"")}${Number(e.locked||0)===1?" \u{1F512}":""}</td>
                <td class="member-links-action-col">
                  <div class="member-link-actions">
                    ${St()&&n==="candidate"?`<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${g(e.eso_account_name||"")}" data-accept-member-candidate-discord-id="${g(e.discord_user_id||"")}" aria-label="Accept candidate link" title="Accept candidate link">\u2713</button>`:""}
                    ${St()&&n==="linked"?`<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${g(e.eso_account_name||"")}" data-unlink-member-link-discord-id="${g(e.discord_user_id||"")}" aria-label="Unlink this ESO/Discord pair" title="Unlink this ESO/Discord pair">\u{1F5D1}</button>`:""}
                    ${St()&&(Number(e.locked||0)===1||n==="blocked")?`<button class="member-link-report-action member-link-report-unblock" type="button" data-unblock-member-auto-link="${g(e.eso_account_name||"")}" data-unblock-member-auto-link-discord-id="${g(e.discord_user_id||"")}" aria-label="Remove auto-link block" title="Remove auto-link block">\u21BA</button>`:""}
                  </div>
                </td>
                <td class="member-links-confidence-col">${c(String((s=e.match_confidence)!=null?s:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function pa(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function Xo(t){const e=pa();if(e.forEach(r=>r.classList.remove("member-links-report-row-active")),e.length===0){Je=-1;return}Je=Math.max(0,Math.min(t,e.length-1));const n=e[Je];n.classList.add("member-links-report-row-active"),n.scrollIntoView({block:"nearest"})}function cr(){const t=Ve(Yr),e=String(Dt||"").trim().toLowerCase(),n=String(ir||"").trim().toLowerCase(),r=String(or||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let s=0;i.forEach(a=>{const l=Ve(a.dataset.memberLinksReportSearch||""),d=String(a.dataset.memberLinksReportAction||"").trim().toLowerCase(),f=String(a.dataset.memberLinksReportStatus||"").trim().toLowerCase(),p=String(a.dataset.memberLinksReportMethod||"").trim().toLowerCase(),R=(!t||l.includes(t))&&(!e||d===e)&&(!n||f===n)&&(!r||p===r);a.hidden=!R,a.classList.remove("member-links-report-row-active"),R&&(s+=1)});const o=document.querySelector("#memberLinksReportSearchEmpty");o&&(o.hidden=s!==0),Je=-1}function Mu(t){Yr=t.target.value||"",cr()}function Tu(t){Dt=t.target.value||"",cr()}function Cu(t){ir=t.target.value||"",cr()}function Bu(t){or=t.target.value||"",cr()}function Nu(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=pa();if(e.length===0)return;if(t.key==="ArrowDown"){const r=Je<0?0:Je+1;Xo(r>=e.length?e.length-1:r);return}const n=Je<0?e.length-1:Je-1;Xo(n<0?0:n)}function Lr(){return P==="discord-members"||P==="eso-members"||it||rt||Lt}function qu(t={}){if(!Array.isArray(t.links))return;const e=JSON.stringify(q)!==JSON.stringify(t.links);q=t.links,e&&Lr()&&$r()}function Zo(){const t=document.querySelector("#runMemberLinksReportButton");t&&(t.disabled=J,t.textContent=J?"Loading...":"Run")}async function Kr(t={}){if(!(u!=null&&u.connected)){ie="You must be connected to load member links.",Lr()&&$r();return}J=!0,ie="",Zo(),!t.silent&&Lr()&&$r();try{const e=await M("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");q=Array.isArray(e.links)?e.links:[]}catch(e){ie=L(e)}finally{J=!1,Zo(),Lr()&&$r()}}async function xu(){if(!(u!=null&&u.connected)||!v.logged_in){ie="You must be logged in and connected to run auto-linking.",h();return}J=!0,ie="",h();try{const t=await M("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");q=Array.isArray(t.links)?t.links:[],y("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:b})}catch(t){ie=L(t)}finally{J=!1,h()}}async function ma(t,e=""){try{const n=await M("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to accept candidate.");q=Array.isArray(n.links)?n.links:q,y("member-link-accepted",n.message||"Candidate accepted as a link.",{ttlMs:b})}catch(n){ie=L(n),y("member-link-accept-error",ie,{ttlMs:b})}}async function ga(t,e=""){if(!await no({title:"Remove Auto-Link Block?",message:`Remove the blocked auto-match record between ${t} and this Discord account? Auto-linking will run immediately and this screen will refresh to show whether the pair linked again.`,confirmLabel:"Unblock",cancelLabel:"Cancel",confirmClass:"danger"}))return!1;J=!0,ie="",h();try{const r=await M("guildsync:unblock-member-auto-link",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to remove auto-link block.");q=Array.isArray(r.links)?r.links:q;const i=Ce(t),s=String(e||"").trim(),o=r.refreshedPair||q.find(d=>Ce(d.eso_account_name)===i&&String(d.discord_user_id||"").trim()===s),a=String((o==null?void 0:o.link_status)||"").trim().toLowerCase(),l=a==="linked"?" It linked again automatically.":a==="candidate"?" It is now showing as a candidate.":" No automatic link was recreated.";return y("member-link-unblocked",`${r.message||"Auto-link block removed."}${l}`,{ttlMs:b}),!0}catch(r){return ie=L(r),y("member-link-unblock-error",ie,{ttlMs:b}),!1}finally{J=!1,h()}}async function Iu(t,e=""){if(!!await no({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const r=await M("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to unlink member.");q=Array.isArray(r.links)?r.links:q,y("member-link-unlinked",r.message||"Member link removed.",{ttlMs:b})}catch(r){ie=L(r)}h()}}function Ce(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function Jr(t){const e=Ce(t);return e?q.filter(n=>Ce(n.eso_account_name)===e):[]}function Qr(t){const e=String(t||"").trim();return e?q.filter(n=>String(n.discord_user_id||"").trim()===e):[]}function ya(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const n=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(n.length>0){const i=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const s=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return s||n[0]}const r=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return r||e[0]}function Ou(t){return ya(Qr(t))}function Pu(t){return`${Ce(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function co(){return C?C.mode==="discord-to-eso"?Qr(C.discordUserId):Jr(C.esoAccountName):[]}function Fu(t){const e=String(t||"").trim(),n=ue.find(r=>String(r.discord_id||"").trim()===e);return n&&(n.server_nickname||n.global_name||n.username||n.discord_id)||e}function ba(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?Qr(t.discordUserId):Jr(t.esoAccountName),r=ya(n),i=String((r==null?void 0:r.link_status)||"").trim().toLowerCase(),s=n.filter(a=>String(a.link_status||"").trim().toLowerCase()==="linked").length,o=n.filter(a=>String(a.link_status||"").trim().toLowerCase()==="candidate").length;return s>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?s===1?r.eso_account_name:`${s} ESO accounts`:s===1?r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member":`${s} Discord accounts`}`}:i==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?r.eso_account_name:r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member"}`}:i==="blocked"||Number((r==null?void 0:r.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function ka(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,r=ba(t);return`
    <button
      class="member-link-status-dot member-link-status-${g(r.className)}"
      type="button"
      title="${g(r.title)}"
      aria-label="${g(r.label)}"
      data-open-member-link-dialog="${g(e)}"
      data-member-link-value="${g(n||"")}"
    ></button>
  `}function Gu(){return C?C.mode==="discord-to-eso"?Fu(C.discordUserId):C.esoAccountName||"":""}function va(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function Fi(t){const e=va((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const n=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(n.includes("discord_username")||n.includes("username"))return"Username";if(n.includes("discord_display_name")||n.includes("global")||n.includes("display"))return"Global Name";if(n.includes("discord_server_nickname")||n.includes("server")||n.includes("nickname"))return"Server Nickname";const r=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(r==="exact"||r==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",s=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const a of s){const l=Uu(i,a.value);(!o||l>o.score)&&(o={...a,score:l})}if(o&&o.score>0)return o.field}return""}function Ve(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function Uu(t,e){const n=Ve(t),r=Ve(e);if(!n||!r)return 0;if(n===r)return 100;if((n.includes(r)||r.includes(n))&&Math.min(n.length,r.length)>=4)return 88;const i=Math.abs(n.length-r.length),s=[...n].findIndex((a,l)=>a!==r[l]),o=s===-1?Math.min(n.length,r.length):s;return Math.max(0,Math.min(75,Math.round(o*10-i*3)))}function Hu(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function Vu(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function Wu(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),n=Hu(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${c(n)}</span>`}function ju(t){var a;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",n=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",r=String(t.link_status||"").trim().toLowerCase(),o=r==="linked"?`<button
        class="member-link-trash-button"
        type="button"
        aria-label="Unlink this ESO/Discord pair"
        title="Unlink this ESO/Discord pair"
        data-unlink-dialog-member-link
        data-unlink-eso-account="${g(t.eso_account_name||"")}"
        data-unlink-discord-user-id="${g(t.discord_user_id||"")}"
      >\u{1F5D1}</button>`:r==="candidate"?`<button
          class="member-link-approve-button"
          type="button"
          aria-label="Approve suggested link"
          title="Approve suggested link"
          data-accept-dialog-member-candidate="${g(t.eso_account_name||"")}"
          data-accept-dialog-discord-user-id="${g(t.discord_user_id||"")}"
        >\u2713</button>`:Number(t.locked||0)===1||r==="blocked"?`<button
            class="member-link-approve-button member-link-unblock-button"
            type="button"
            aria-label="Remove auto-link block"
            title="Remove auto-link block"
            data-unblock-dialog-member-auto-link
            data-unblock-eso-account="${g(t.eso_account_name||"")}"
            data-unblock-discord-user-id="${g(t.discord_user_id||"")}"
          >\u21BA</button>`:"";return`
    <div class="member-link-current-card">
      <div class="member-link-current-details">
        <div><span>ESO:</span> ${c(t.eso_account_name||"")}</div>
        <div><span>Discord:</span> ${c(e)}</div>
        <div><span>Status:</span> ${Wu(t)} \xB7 ${c(Vu(t.link_method))} \xB7 ${c(String((a=t.match_confidence)!=null?a:""))}% \xB7 ${c(n)}</div>
        ${Fi(t)?`<div><span>Matched:</span> Matched on ${c(Fi(t))}</div>`:""}
      </div>
      ${St()?o:""}
    </div>
  `}function zu(){const t=co();return t.length?[...t].sort((n,r)=>{var l,d;const i=String(n.link_status||"").trim().toLowerCase(),s=String(r.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},a=((l=o[i])!=null?l:9)-((d=o[s])!=null?d:9);return a!==0?a:Number(r.match_confidence||0)-Number(n.match_confidence||0)}).map(n=>ju(n)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function Yu(){if(!St())return"";if(hn)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(tt)return`<div class="discord-data-error">${c(tt)}</div>`;if(!Array.isArray(xt)||xt.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(co().map(n=>Pu(n))),e=[...xt].filter(n=>{const r=(C==null?void 0:C.mode)==="discord-to-eso"?`${Ce(n.account_name)}::${String(C.discordUserId||"").trim()}`:`${Ce(C==null?void 0:C.esoAccountName)}::${String(n.discord_id||"").trim()}`;return!t.has(r)}).sort((n,r)=>{const i=Number(r.confidence||0)-Number(n.confidence||0);return i!==0?i:es(n).localeCompare(es(r),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(n=>Ku(n)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function es(t){return((C==null?void 0:C.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function Ku(t,e={}){var p,m,A;const n=(C==null?void 0:C.mode)||"",r=n==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=va(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),s=n==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[s,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),a=n==="discord-to-eso"?t.account_name:t.discord_id,l=e.disabled===!0,d=[r,s,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),f=[r,o,`${(p=t.confidence)!=null?p:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${g(a||"")}" data-member-link-option-search="${g(d)}" title="${g(f)}" ${l?"disabled":""}>
      <span class="member-link-option-name" title="${g(r||"")}">${c(r||"")}</span>
      <span class="member-link-option-subtitle" title="${g(o||"")}">${c(o||"")}</span>
      <span class="member-link-option-confidence" title="${g(String((m=t.confidence)!=null?m:0))}%">${c(String((A=t.confidence)!=null?A:0))}%</span>
    </button>
  `}function Ju(){const t=(C==null?void 0:C.mode)||"",e=Gu(),n=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
    <div class="roster-history-overlay member-link-dialog-overlay" role="dialog" aria-modal="true" aria-labelledby="memberLinkDialogTitle">
      <div class="roster-history-dialog member-link-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="memberLinkDialogTitle">Member Link</h3>
            <p>${c(e)}${St()?` \u2192 choose ${c(n)}.`:" \xB7 View current account links."}</p>
          </div>
          <button id="closeMemberLinkDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close member link window" title="Close">\xD7</button>
        </div>

        <div class="member-link-dialog-body">
          <section class="member-link-dialog-section member-link-current-section">
            ${zu()}
          </section>

          <section class="member-link-dialog-section" ${St()?"":"hidden inert"}>
            <h4>Suggested Matches</h4>
            <input
              id="memberLinkSuggestionSearchInput"
              class="member-link-suggestion-search-input"
              type="search"
              autocomplete="off"
              spellcheck="false"
              placeholder="Search suggested matches..."
              value="${g(sr)}"
            />
            ${Yu()}
          </section>
        </div>

      </div>
    </div>
  `}async function lo(t,e){if(!(u!=null&&u.connected)||!j()){y("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:b});return}it=!0,C=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},xt=[],hn=!0,tt="",sr="",qe=-1,h();try{if(!Array.isArray(q)||q.length===0){const i=await M("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(q=Array.isArray(i.links)?i.links:[])}const r=await M("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load link suggestions.");xt=Array.isArray(r.options)?r.options:[]}catch(n){tt=L(n)}finally{hn=!1,h()}}function yn(){document.removeEventListener("keydown",Gi),it=!1,C=null,xt=[],hn=!1,tt="",sr="",qe=-1,h()}function Sa(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function ts(t){const e=Sa();if(e.forEach(r=>r.classList.remove("member-link-option-row-active")),e.length===0){qe=-1;return}qe=Math.max(0,Math.min(t,e.length-1));const n=e[qe];n.classList.add("member-link-option-row-active"),n.scrollIntoView({block:"nearest"})}function wa(){const t=Ve(sr),e=[...document.querySelectorAll(".member-link-option-row")];let n=0;e.forEach(i=>{const s=Ve(i.dataset.memberLinkOptionSearch||i.textContent||""),o=!t||s.includes(t);i.hidden=!o,i.classList.remove("member-link-option-row-active"),o&&(n+=1)});const r=document.querySelector("#memberLinkSuggestionSearchEmpty");r&&(r.hidden=n!==0),qe=-1}function Qu(t){sr=t.target.value||"",wa()}function Xu(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Sa();if(e.length===0)return;if(t.key==="ArrowDown"){const r=qe<0?0:qe+1;ts(r>=e.length?e.length-1:r);return}const n=qe<0?e.length-1:qe-1;ts(n<0?0:n)}function Gi(t){!it||t.key==="Escape"&&(t.preventDefault(),yn())}async function Zu(t){if(!(!C||!t))try{const e=C.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:C.discordUserId}:{esoAccountName:C.esoAccountName,discordUserId:t},n=await M("guildsync:manual-link-member",e,3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to link members.");q=Array.isArray(n.links)?n.links:q,y("member-link-saved",n.message||"Member link saved.",{ttlMs:b}),yn()}catch(e){tt=L(e),h()}}async function ef(t,e=""){await ma(t,e),yn()}async function _a(){if(!!C){hn=!0,tt="",h();try{const t=C.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:C.discordUserId}:{mode:"eso-to-discord",accountName:C.esoAccountName},e=await M("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");xt=Array.isArray(e.options)?e.options:[]}catch(t){tt=L(t)}finally{hn=!1,h()}}}async function tf(t="",e=""){const n=co().find(i=>Ce(i.eso_account_name)===Ce(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!n||!await no({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await M("guildsync:manual-unlink-member",{esoAccountName:n.eso_account_name,discordUserId:n.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");q=Array.isArray(i.links)?i.links:q,y("member-link-unlinked",i.message||"Member link removed.",{ttlMs:b}),await _a()}catch(i){tt=L(i),h()}}async function nf(t="",e=""){await ga(t,e)&&await _a()}function Aa(){var n;if(!it)return;document.removeEventListener("keydown",Gi),document.addEventListener("keydown",Gi),(n=document.querySelector("#closeMemberLinkDialogButton"))==null||n.addEventListener("click",yn);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",Qu),t.addEventListener("keydown",Xu),wa()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(r=>{r.addEventListener("click",()=>tf(r.dataset.unlinkEsoAccount||"",r.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-unblock-dialog-member-auto-link]").forEach(r=>{r.addEventListener("click",()=>nf(r.dataset.unblockEsoAccount||"",r.dataset.unblockDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(r=>{r.addEventListener("click",()=>Zu(r.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(r=>{r.addEventListener("click",()=>ef(r.dataset.acceptDialogMemberCandidate||"",r.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",r=>{r.target===e&&yn()})}function La(){var e,n,r;if(!Ln)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",xi),(n=document.querySelector("#rerunAssociateTicketReportButton"))==null||n.addEventListener("click",()=>Ma()),(r=document.querySelector("#copyAssociateTicketReportGridButton"))==null||r.addEventListener("click",()=>au());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&xi()})}function Ea(){var e,n,r;if(!$n)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",Ii),(n=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||n.addEventListener("click",()=>Da()),(r=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||r.addEventListener("click",()=>uu());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Ii()})}function $a(){var r,i,s;if(!Lt)return;(r=document.querySelector("#closeDiscordLastSeenReportButton"))==null||r.addEventListener("click",Oi),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>Ra()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>Su()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(o=>{o.addEventListener("click",()=>mu(o.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",rf);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",of),uo();const n=document.querySelector(".discord-last-seen-report-overlay");n&&n.addEventListener("click",o=>{o.target===n&&Oi()})}function rf(t){Rn=t.target.value||"",uo()}function of(t){dt=t.target.value||"",uo()}function uo(){const t=Ve(Rn),e=String(dt||"").trim().toLowerCase(),n=[...document.querySelectorAll("[data-discord-last-seen-row]")];let r=0;n.forEach(s=>{const o=Ve(s.dataset.discordLastSeenSearch||s.textContent||""),a=String(s.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),f=(!t||o.includes(t))&&(!e||a===e);s.hidden=!f,f&&(r+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=r!==0)}async function Ra(){if(!(u!=null&&u.connected)||!j()){qt="You must be logged in and connected to run this report.",h();return}lt=!0,qt="",h();try{const t=await M("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");ue=wo(t.members),jr=_o(t.roles),Xi=[...ue]}catch(t){qt=L(t)}finally{lt=!1,h(),V("discordLastSeenReportSearchInput")}}async function Da(){if(!(u!=null&&u.connected)||!j()){Nt="You must be logged in and connected to run this report.",h();return}ct=!0,Nt="",h();try{const t=await M("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Zn=Array.isArray(t.rows)?t.rows:[]}catch(t){Nt=L(t)}finally{ct=!1,h()}}async function Ma(){if(!(u!=null&&u.connected)||!j()){Bt="You must be logged in and connected to run this report.",h();return}at=!0,Bt="",h();try{const t=await M("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");En=Array.isArray(t.rows)?t.rows:[]}catch(t){Bt=L(t)}finally{at=!1,h()}}function sn(){const t=String(Tn||"").trim().toLowerCase(),e={account_name:"Anonymous",rank:"Manual Entry"},n=new Set(["anonymous"]),r=be.filter(i=>String(i.account_name||"").trim()).filter(i=>{const o=String(i.account_name||"").trim().toLowerCase();return!o||n.has(o)||t&&!o.includes(t)?!1:(n.add(o),!0)}).slice().sort((i,s)=>{const o=String(i.account_name||"").toLowerCase(),a=String(s.account_name||"").toLowerCase(),l=t&&o.startsWith(t)?0:1,d=t&&a.startsWith(t)?0:1;return l!==d?l-d:o.localeCompare(a)}).slice(0,19);return[e,...r]}function Ta(t=sn()){const e=String(O.accountName||"").trim();return t.length===0?'<div class="roster-history-muted manual-ticket-no-matches">No matching guild members found.</div>':t.map((n,r)=>`
        <button class="roster-history-match${r===ne||n.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${g(n.account_name)}" role="option" aria-selected="${r===ne||n.account_name===e?"true":"false"}">
          <span>${c(n.account_name)}</span>
          <strong>${c(n.rank||"")}</strong>
          ${r===ne?"<small>Enter</small>":""}
        </button>
      `).join("")}function Ca(){document.querySelectorAll("[data-manual-ticket-account]").forEach(t=>{t.addEventListener("mousedown",e=>{e.preventDefault()}),t.addEventListener("click",()=>{Ba(t.dataset.manualTicketAccount||"")})})}function mi(){const t=document.querySelector("#manualTicketMatchList");if(!t)return;const e=sn();ne>=e.length&&(ne=e.length>0?e.length-1:-1),t.innerHTML=Ta(e),Ca()}function Ba(t){const e=String(t||"").trim();O.accountName=e,Tn=e,$e=!1,ne=-1,pe="",h()}function V(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const n=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(n,n)},0)}function sf(){const t=$e?sn():[],e=String(O.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Entry</h3>
            <p>Add a manual banking or raffle entry such as FFTG, officer corrections, or anonymous gold.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${pe?`<div class="discord-data-error">${c(pe)}</div>`:""}

        <div class="manual-ticket-form">
          <div class="manual-ticket-member-picker">
            <label class="manual-ticket-member-field" for="manualTicketAccountSearchInput">
              <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${g(Tn)}" autocomplete="off" />
            </label>

            ${$e?`
              <div id="manualTicketMatchList" class="roster-history-match-list manual-ticket-match-list" role="listbox" aria-label="Matching guild members">
                ${Ta(t)}
              </div>
            `:""}
          </div>

          ${e?`<div class="roster-history-muted manual-ticket-selected-member">Selected: ${c(e)}</div>`:""}

          <div class="manual-ticket-entry-row">
            <div class="manual-ticket-type-field" role="group" aria-label="Ticket type">
              <button class="manual-ticket-type-label${O.ticketType!=="monthly"?" is-selected":""}" type="button" data-manual-ticket-type="biweekly" aria-pressed="${O.ticketType!=="monthly"?"true":"false"}">Bi-Weekly</button>
              <button class="manual-ticket-type-switch" type="button" data-manual-ticket-toggle="true" data-selected-type="${O.ticketType==="monthly"?"monthly":"biweekly"}" aria-label="Toggle ticket type. Current selection is ${O.ticketType==="monthly"?"50/50":"Bi-Weekly"}">
                <span class="manual-ticket-type-track" aria-hidden="true"></span>
                <span class="manual-ticket-type-thumb" aria-hidden="true"></span>
              </button>
              <button class="manual-ticket-type-label${O.ticketType==="monthly"?" is-selected":""}" type="button" data-manual-ticket-type="monthly" aria-pressed="${O.ticketType==="monthly"?"true":"false"}">50/50</button>
            </div>
            <label class="manual-ticket-note-field">
              <textarea id="manualTicketNoteInput" class="discord-search-input manual-ticket-note-input" rows="4" placeholder="Enter a reason such as FFTG">${c(O.note)}</textarea>
            </label>
            <div class="manual-ticket-side-fields">
              <label class="manual-ticket-gold-field">
                <input id="manualTicketGoldInput" class="discord-search-input manual-ticket-gold-input" type="number" min="0" step="1" inputmode="numeric" placeholder="Gold Value" value="${g(O.goldValue)}" />
                <span class="manual-ticket-gold-coin" aria-hidden="true"></span>
              </label>
              <label class="manual-ticket-count-field">
                <div class="manual-ticket-number-wrap">
                  <input id="manualTicketCountInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${g(O.tickets)}" />
                  <div class="manual-ticket-number-buttons" aria-hidden="true">
                    <button id="manualTicketCountUpButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2303</button>
                    <button id="manualTicketCountDownButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2304</button>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div class="manual-ticket-actions">
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${qr?"disabled":""}>${qr?"Saving...":"Add Manual Entry"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Na(){var s,o,a,l,d,f;if(!Ge)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{Ge=!1,h()});const t=document.querySelector("#manualTicketAccountSearchInput");if(t){const p=({rerender:m=!1}={})=>{if($e=!0,ne=sn().length>0?0:-1,m){h(),V("manualTicketAccountSearchInput");return}mi()};t.addEventListener("focus",()=>{$e||p({rerender:!0})}),t.addEventListener("click",()=>{$e||p({rerender:!0})}),t.addEventListener("input",m=>{Tn=m.target.value||"",O.accountName="",$e=!0,ne=sn().length>0?0:-1,mi()}),t.addEventListener("keydown",m=>{if(m.key==="Escape")return;if(!$e){(m.key==="ArrowDown"||m.key==="ArrowUp")&&(m.preventDefault(),p({rerender:!0}));return}const A=sn();if(m.key==="ArrowDown"||m.key==="ArrowUp"){if(A.length===0)return;m.preventDefault();const _=m.key==="ArrowDown"?1:-1;ne=((ne<0?0:ne)+_+A.length)%A.length,mi();return}if(m.key!=="Enter")return;m.preventDefault();const S=A[ne>=0?ne:0];S!=null&&S.account_name&&Ba(S.account_name)})}Ca(),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",p=>{O.note=p.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(p=>{p.addEventListener("click",()=>{const m=String(p.dataset.manualTicketType||"").trim().toLowerCase();O.ticketType=m==="monthly"?"monthly":"biweekly",h()})}),(a=document.querySelector("[data-manual-ticket-toggle]"))==null||a.addEventListener("click",()=>{O.ticketType=O.ticketType==="monthly"?"biweekly":"monthly",h()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",p=>{const m=String(p.target.value||"").replace(/\D/g,"");p.target.value!==m&&(p.target.value=m),O.goldValue=m});const n=document.querySelector("#manualTicketCountInput");n==null||n.addEventListener("input",p=>{const m=String(p.target.value||"").replace(/\D/g,"");p.target.value!==m&&(p.target.value=m),O.tickets=m});const r=p=>{const m=Number(O.tickets)||0,A=Math.max(0,m+p);O.tickets=String(A),n&&(n.value=O.tickets,n.focus())};(l=document.querySelector("#manualTicketCountUpButton"))==null||l.addEventListener("click",()=>r(1)),(d=document.querySelector("#manualTicketCountDownButton"))==null||d.addEventListener("click",()=>r(-1)),(f=document.querySelector("#saveManualBiweeklyTicketButton"))==null||f.addEventListener("click",()=>af());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",p=>{p.target===i&&(Ge=!1,h())})}async function af(){if(!Q())return;const t=String(O.accountName||"").trim(),e=String(O.note||"").trim(),n=String(O.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",r=Number(String(O.goldValue||"").trim()||0),i=Number(String(O.tickets||"").trim()||0);if($e){pe="Select a matching guild member or Anonymous from the list before saving.",h(),V("manualTicketAccountSearchInput");return}if(!t){pe="Select a matching guild member or Anonymous from the list before saving.",h(),V("manualTicketAccountSearchInput");return}if(!Number.isFinite(r)||r<0){pe="Gold value must be zero or greater.",h();return}if(!Number.isFinite(i)||i<0){pe="Tickets must be zero or greater.",h();return}const s=t.toLowerCase()==="anonymous";if(s&&Math.floor(i)>0){pe="Anonymous cannot be awarded tickets. Use 0 tickets and enter a gold value.",h();return}if(Math.floor(r)===0&&Math.floor(i)===0){pe=s?"Enter a gold value for Anonymous when tickets are 0.":"Enter gold or tickets. Both cannot be zero.",h();return}qr=!0,pe="",h();try{const o=await M("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:n,gold_value:Math.floor(r),tickets:Math.floor(i)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Failed to add manual entry.");Ge=!1,O={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},Tn="",ne=-1,$e=!1,await ve({silent:!0}),y("manual-ticket-added",o.message||"Manual entry added.",{ttlMs:b})}catch(o){pe=L(o)}finally{qr=!1,h()}}async function qa(t=""){const e=String(t||"").trim();if(!!e){An=!0,Xn=e,gt=[],Nr=!0,Ct=!1,yt="",dn="",h();try{const n=await M("guildsync:request-roster-member-notes",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster notes.");gt=Array.isArray(n.notes)?n.notes:[]}catch(n){yt=L(n)}finally{Nr=!1,h()}}}function Ui(){An=!1,Xn="",gt=[],Nr=!1,Ct=!1,yt="",dn="",h()}function cf(){var n,r;if(!An)return;(n=document.querySelector("#closeRosterNotesButton"))==null||n.addEventListener("click",Ui);const t=document.querySelector("#rosterNotesNewNote");t&&t.addEventListener("input",i=>{dn=i.target.value||""}),(r=document.querySelector("#saveRosterNoteButton"))==null||r.addEventListener("click",()=>lf());const e=document.querySelector(".roster-notes-overlay");e&&e.addEventListener("click",i=>{i.target===e&&Ui()})}async function lf(){if(!Q())return;const t=String(dn||"").trim();if(!t){yt="Enter a note before saving.",h();return}Ct=!0,yt="",h();try{const e=await M("guildsync:add-roster-member-note",{account_name:Xn,note:t},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to save roster note.");e.note&&(gt=[...gt,e.note]),dn="";const n=be.find(r=>Ce(r.account_name)===Ce(Xn));n&&(n.note_count=Number(n.note_count||0)+1)}catch(e){yt=L(e)}finally{Ct=!1,h()}}function xa(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>Cn());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{ln=!0,Qe="",h()});const n=document.querySelector("#rosterMemberSearch");n&&(n.addEventListener("input",o=>{Br=o.target.value||"",Mi=o.target.selectionStart,Ti=o.target.selectionEnd,Y=-1,h({restoreRosterSearchFocus:!0})}),n.addEventListener("keydown",df)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Hd(o.dataset.rosterSortColumn||"account_name")})});const r=document.querySelector("#rosterRankFilter");r&&r.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(Tt.add(a),Y=-1,h())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRosterRankFilter||"";Tt.delete(a),Y=-1,h()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(nn.add(a),Y=-1,h())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRosterLinkStatusFilter||"";nn.delete(a),Y=-1,h()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>lo(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))}),document.querySelectorAll("[data-open-roster-notes]").forEach(o=>{o.addEventListener("click",()=>qa(o.dataset.openRosterNotes||""))}),cf();const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{Br="",Tt.clear(),nn.clear(),Ke="",ae="",Y=-1,h()}),uf()}function df(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){Y=-1;return}t.preventDefault(),t.key==="ArrowDown"?Y=Y<0?0:Math.min(Y+1,e.length-1):t.key==="ArrowUp"&&(Y=Y<0?e.length-1:Math.max(Y-1,0)),e.forEach((r,i)=>{r.classList.toggle("roster-search-active-row",i===Y)});const n=e[Y];n&&typeof n.scrollIntoView=="function"&&n.scrollIntoView({block:"nearest",inline:"nearest"})}function uf(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{ln=!1,h()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",n=>{if(Qn=n.target.value||"",_e=-1,!Qn.trim()){clearTimeout(pi),Qe="",ge=[],_t="",pt=[],mt=!1,h(),V("rosterHistorySearchInput");return}clearTimeout(pi),pi=setTimeout(()=>{mf({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(ge.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;_e=((_e<0?0:_e)+i+ge.length)%ge.length,h(),V("rosterHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=ge[_e>=0?_e:0];r!=null&&r.account_name&&rs(r.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(n=>{n.addEventListener("click",()=>{rs(n.dataset.rosterHistoryAccount||"")})})}function Ia(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{un=!1,h()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",n=>{st=n.target.value||"",Ae=-1,$t+=1;const r=$t;if(clearTimeout(Vo),!st.trim()){Xe="",ye=[],fn="",Gt="",bt=[],kt=!1,h(),V("discordHistorySearchInput");return}Vo=setTimeout(()=>{ff({auto:!0,keepFocus:!0,generation:r})},vd)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(ye.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;Ae=((Ae<0?0:Ae)+i+ye.length)%ye.length,h(),V("discordHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=ye[Ae>=0?Ae:0];r!=null&&r.discord_id&&ns(r.discord_id,qi(r))})),document.querySelectorAll("[data-discord-history-id]").forEach(n=>{n.addEventListener("click",()=>{ns(n.dataset.discordHistoryId||"",n.dataset.discordHistoryName||"")})})}async function ff(t={}){const e=Number.isInteger(t.generation)?t.generation:++$t,n=st.trim();if(e===$t){if(!n){Xe="",ye=[],Ae=-1,fn="",Gt="",bt=[],kt=!1,h(),t.keepFocus&&V("discordHistorySearchInput");return}kt=!0,Xe="",ye=[],Ae=-1,fn="",Gt="",bt=[],h(),t.keepFocus&&V("discordHistorySearchInput");try{const r=await M("guildsync:request-discord-member-history",{query:n},3e4);if(e!==$t||n!==st.trim())return;if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search Discord member history.");ye=hf(r.matches),Ae=ye.length>0?0:-1}catch(r){if(e!==$t||n!==st.trim())return;Xe=L(r)}finally{if(e!==$t||n!==st.trim())return;kt=!1,h(),t.keepFocus&&V("discordHistorySearchInput")}}}async function ns(t,e="",n={}){const r=String(t||"").trim();if(!!r){fn=r,Gt=String(e||r).trim(),st=Gt,bt=[],kt=!0,Xe="",h();try{const i=await M("guildsync:request-discord-member-history-events",{discord_id:r},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");bt=pf(i.events)}catch(i){Xe=L(i)}finally{kt=!1,n.keepLoading||h()}}}function hf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function pf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s,o,a,l,d,f,p,m;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((r=(n=e.old_value)!=null?n:e.oldValue)!=null?r:"").trim(),new_value:String((s=(i=e.new_value)!=null?i:e.newValue)!=null?s:"").trim(),event_timestamp:(l=(a=(o=e.event_timestamp)!=null?o:e.eventTimestamp)!=null?a:e.timestamp)!=null?l:"",event_datetime:(f=(d=e.event_datetime)!=null?d:e.eventDatetime)!=null?f:"",initiator:String((m=(p=e.initiator)!=null?p:e.initiatorName)!=null?m:"").trim(),source:String(e.source||"").trim()}}):[]}async function mf(t={}){const e=Qn.trim();if(!e){Qe="",ge=[],_e=-1,_t="",pt=[],mt=!1,h(),t.keepFocus&&V("rosterHistorySearchInput");return}mt=!0,Qe="",ge=[],_e=-1,_t="",pt=[],h(),t.keepFocus&&V("rosterHistorySearchInput");try{const n=await M("guildsync:request-roster-rank-history",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search roster rank history.");ge=gf(n.matches),_e=ge.length>0?0:-1}catch(n){Qe=L(n)}finally{mt=!1,h(),t.keepFocus&&V("rosterHistorySearchInput")}}async function rs(t,e={}){const n=String(t||"").trim();if(!!n){_t=n,Qn=n,pt=[],mt=!0,Qe="",h();try{const r=await M("guildsync:request-roster-stream-history",{account_name:n},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load roster stream history.");pt=yf(r.events)}catch(r){Qe=L(r)}finally{mt=!1,e.keepLoading||h()}}}function gf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function yf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(r=(n=e.timestamp)!=null?n:e.timestampS)!=null?r:"",officer:String(e.officer||"").trim()}}):[]}function Oa(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(n=e.joined)!=null?n:"",note_count:Number((i=(r=e.note_count)!=null?r:e.noteCount)!=null?i:0)||0}}).sort((e,n)=>e.account_name.localeCompare(n.account_name)):[]}function bf(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function Xr(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function fo(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function kf(t={}){be=Oa(t.members),Cr=t.last_refresh||new Date().toISOString(),bn(),y("roster-data-updated",`Roster data updated. Loaded ${be.length} member record${be.length===1?"":"s"}.`,{ttlMs:b})}async function Cn(t={}){if(!!(u!=null&&u.connected)){et=!0,bn();try{const e=await M("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");be=Oa(e.members),Cr=e.last_refresh||Cr,t.silent||y("roster-data-loaded",`Loaded ${be.length} roster member${be.length===1?"":"s"}.`,{ttlMs:b})}catch(e){y("roster-data-error",L(e),{ttlMs:b})}finally{et=Boolean(t.deferPendingRefresh),bn(),t.deferPendingRefresh||ar("eso-members")}}}async function vf(t={}){var e;if(!!oe()){if(!(u!=null&&u.connected)){y("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:b});return}et=!0,bn();try{const n=await Jl(t);if(!(n!=null&&n.ok)){y("roster-data-pending",(n==null?void 0:n.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:b});return}const r={local_upload_id:Pa(),authenticated_username:Be(),authenticated_discord_user_id:((e=v==null?void 0:v.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await Ua(r)}catch(i){throw Sf(r),i}await Cn({silent:!0,deferPendingRefresh:!0})}catch(n){y("roster-data-error",L(n),{ttlMs:b})}finally{et=!1,bn(),ar("eso-members")}}}function Pa(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function ho(){try{const t=window.localStorage.getItem(Bs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Fa(t){window.localStorage.setItem(Bs,JSON.stringify(Array.isArray(t)?t:[]))}function Sf(t){const e=String((t==null?void 0:t.local_upload_id)||Pa()),n=ho().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Fa(n),y("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:b})}function wf(t){const e=ho().filter(n=>(n==null?void 0:n.local_upload_id)!==t);Fa(e)}async function Ga(){if(ui||!(u!=null&&u.connected)||!oe())return;const t=ho();if(t.length!==0){ui=!0;try{for(const e of t){if(!(u!=null&&u.connected)||!oe())return;await Ua(e),wf(e.local_upload_id)}}catch(e){y("roster-data-pending-error",`Pending roster upload retry failed: ${L(e)}`,{ttlMs:b})}finally{ui=!1}}}async function Ua(t){if(!(u!=null&&u.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await M("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const n=await Zl(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return y("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:b}),e}async function _f(t={}){var e,n;if(!!oe()){if(!(u!=null&&u.connected)){y("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:b});return}try{const r=await Yl(t);if(!(r!=null&&r.ok)){y("applications-data-info",(r==null?void 0:r.message)||"No application records were found to process.",{ttlMs:b});return}if((Array.isArray((e=r==null?void 0:r.data)==null?void 0:e.records)?r.data.records:[]).length===0){y("applications-data-info",`No application records were found in ${r.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:b});return}const s={local_upload_id:Ha(),authenticated_username:Be(),authenticated_discord_user_id:((n=v==null?void 0:v.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await ja(s)}catch(o){throw Af(s),o}}catch(r){y("applications-data-error",L(r),{ttlMs:b})}}}function Ha(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function po(){try{const t=window.localStorage.getItem(Ns),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Va(t){window.localStorage.setItem(Ns,JSON.stringify(Array.isArray(t)?t:[]))}function Af(t){const e=String((t==null?void 0:t.local_upload_id)||Ha()),n=po().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Va(n),y("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:b})}function Lf(t){const e=po().filter(n=>(n==null?void 0:n.local_upload_id)!==t);Va(e)}async function Wa(){if(fi||!(u!=null&&u.connected)||!oe())return;const t=po();if(t.length!==0){fi=!0;try{for(const e of t){if(!(u!=null&&u.connected)||!oe())return;await ja(e),Lf(e.local_upload_id)}}catch(e){y("applications-data-pending-error",`Pending application upload retry failed: ${L(e)}`,{ttlMs:b})}finally{fi=!1}}}async function ja(t){var i;if(!(u!=null&&u.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return y("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:b}),{ok:!0,sent_count:0,skipped_empty:!0};let n=0;for(const s of e){const o=await M("guildsync:eso-guild-application-message",{...t,record:s,recordKey:(s==null?void 0:s.recordKey)||"",message:Ef(s)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Backend rejected the application data payload. Application data was not cleared.");n+=1}const r=await Ql(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return y("applications-data-sent",`Sent ${n} application record${n===1?"":"s"} to GuildSync backend.`,{ttlMs:b}),{ok:!0,sent_count:n}}function Ef(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),n=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",r=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",s=String(t.applicationText||"_No application text captured._"),o=Object.entries(t).filter(([a])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(a)).map(([a,l])=>`**${a}:** ${$f(l)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${n}** ${r} an application from **${i}**.`,"","**Application text:**","```",s.slice(0,1500),"```",o.length>0?"":null,o.length>0?"**Full captured record fields:**":null,...o].filter(a=>a!==null).join(`
`)}function $f(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function Rf(t={}){await _f(t)}function za(){const t=Hi(H),e=oh(t,H),n=H!=="other",r=n&&Bn(H);return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <button id="openBankingHistoryButton" class="refresh-discord-button banking-history-button" type="button" ${j()?"":'disabled title="Login required to lookup banking history."'}>
            <span aria-hidden="true">\u2315</span>
            <span>Lookup Banking History</span>
          </button>
          <button ${Q()?"":"hidden disabled"} id="openManualBiweeklyTicketButton" class="bank-export-button" type="button" ${j()?"":'disabled title="Login required to add manual entries."'}>
            <span aria-hidden="true">\uFF0B</span>
            <span>Add Manual Entry</span>
          </button>
          ${xf()}
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${c(yc(Fs))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${nt||!j()?"disabled":""} ${j()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${nt?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${gi("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${gi("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${gi("other","?","Other","All other deposits")}
        </div>

        ${qf(H)}

        <div class="bank-deposit-table-shell">
          <table class="bank-deposit-table${n?"":" bank-deposit-table-no-tickets"}">
            <thead>
              <tr>
                <th>Event ID</th>
                <th>Date / Time (Local)</th>
                <th>Depositor</th>
                <th>Amount Deposited</th>
                ${n?`<th>Purchased</th>${r?"<th>Bonus %</th><th>Bonus Tickets</th>":""}<th>Total Tickets</th>`:""}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>ah(i,n,r)).join(""):ch(n,r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${c(an(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${H==="monthly"?`<div>Raffle Pot: <strong>${c(an(Math.floor(e.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${H==="biweekly"?`<div>Raffle Pot: <strong>${c(an(tc(e.amount)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${H==="biweekly"?`<div>Draws: <strong>${c(String(sh(e.amount)))}</strong></div>`:""}
          ${n?`<div>Purchased: <strong>${c(Me(e.purchased))}</strong></div>${r?`<div>Bonus: <strong>${c(Me(e.bonus))}</strong></div>`:""}<div>Total Tickets: <strong>${c(Me(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${It?Cf(Hi(Te)):""}
    </div>
  `}function Df(){return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="bankingHistoryTitle">
      <div class="roster-history-dialog banking-history-dialog">
        <div class="roster-history-header banking-history-header">
          <div>
            <h3 id="bankingHistoryTitle">Banking History Lookup</h3>
            <p>Search prior banking records for a guild member.</p>
          </div>
        </div>

        <div class="banking-history-search-block">
          <label class="manual-ticket-field banking-history-search-field">
            <span>Search Member</span>
            <input id="bankingHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" autocomplete="off" placeholder="Start typing part of an account name..." value="${g(Ut)}" />
          </label>
          ${Mf()}
        </div>

        ${Fe?`<div class="discord-data-error">${c(Fe)}</div>`:""}

        <div class="banking-history-results">
          <div class="roster-history-section-title">Banking History${Oe?`: ${c(Oe)}`:""}${Oe?`<span class="banking-history-count">${c(String(De.length))} record${De.length===1?"":"s"} found</span>`:""}</div>
          ${Tf()}
        </div>
      </div>
    </div>
  `}function Mf(){return Ut.trim()?Pe&&re.length===0&&!Oe?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">Searching...</div></div>':re.length===0&&!Oe?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">No matching banking names found.</div></div>':re.length===0?"":`
    <div class="banking-history-autocomplete" role="listbox" aria-label="Banking history matches">
      ${re.map((t,e)=>`
        <button class="banking-history-autocomplete-option${e===Le?" is-selected":""}" type="button" data-banking-history-account="${g(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <small>${c(String(Number(t.record_count||t.recordCount||0)||0))} record${Number(t.record_count||t.recordCount||0)===1?"":"s"}</small>
        </button>
      `).join("")}
    </div>
  `:""}function Tf(){const t=De.some(e=>e.bonus_enabled);return Oe?Pe&&De.length===0?'<div class="roster-history-muted">Loading banking history...</div>':De.length===0?'<div class="roster-history-muted">No banking history found for this account.</div>':`
    <div class="roster-history-event-table-shell banking-history-table-shell">
      <table class="discord-member-table roster-history-event-table banking-history-table">
        <thead>
          <tr>
            <th class="banking-history-date-column">Date / Time (Local)</th>
            <th>Type</th>
            <th style="text-align:right;">Amount</th>
            <th style="text-align:right;">Purchased</th>
            ${t?'<th style="text-align:right;">Bonus %</th><th style="text-align:right;">Bonus Tickets</th>':""}
            <th style="text-align:right;">Total Tickets</th>
            <th class="banking-history-notes-column">Notes</th>
          </tr>
        </thead>
        <tbody>
          ${De.map(e=>{var n,r,i,s,o;return`
            <tr>
              <td>${c(Kf((i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:""))}</td>
              <td>${c(Jf(e.transaction_type||e.type||""))}</td>
              <td style="text-align:right;">${c(Qf((o=(s=e.deposit_amount)!=null?s:e.depositAmount)!=null?o:e.amount))} \u{1FA99}</td>
              <td style="text-align:right;">${c(yi(e.purchased_tickets))}</td>
              ${t?`<td style="text-align:right;">${e.bonus_enabled?`${c(Me(e.bonus_percent))}%`:""}</td><td style="text-align:right;">${e.bonus_enabled?c(yi(e.bonus_tickets)):""}</td>`:""}
              <td style="text-align:right;">${c(yi(e.total_tickets))}</td>
              <td class="banking-history-note-cell">${c(e.note||"")}</td>
            </tr>
          `}).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see banking history.</div>'}function Cf(t){const e=Bn(Te);return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${c(Ue(Te))} Deposits</h3>
            <p class="bank-export-subtitle">Copy this grid and paste it directly into Google Sheets.</p>
          </div>
          <button id="closeBankingExportGridButton" class="roster-history-close modal-close-button bank-export-close-button" type="button" aria-label="Close export grid">\xD7</button>
        </div>

        <div class="bank-export-toolbar">
          <button id="copyBankingExportGridButton" class="bank-export-copy-button" type="button" ${t.length===0?"disabled":""}>Copy Grid</button>
          <span class="bank-export-count">${c(String(t.length))} row${t.length===1?"":"s"}</span>
        </div>

        <div class="bank-export-grid-shell">
          <table id="bankingExportGrid" class="bank-export-grid">
            <thead>
              <tr>
                <th>Guildie Name</th>
                <th>Deposit Amount</th>
                <th>Purchased Tickets</th>
                ${e?"<th>Bonus %</th><th>Bonus Tickets</th>":""}
                <th>Total Tickets</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(n=>Bf(n)).join(""):Nf()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${c(Xa(t))}</textarea>
      </div>
    </div>
  `}function Bf(t){const e=Bn(Te);return`
    <tr data-bank-event-id="${g(t.eventId||"")}">
      <td>${c(t.displayName||"")}</td>
      <td>${c(String(ko(t,Te)))}</td>
      <td>${c(String(t.purchasedTickets))}</td>
      ${e?`<td>${c(String(t.bonusPercent))}%</td><td>${c(String(t.bonusTickets))}</td>`:""}
      <td>${c(String(t.totalTickets))}</td>
      <td>${c(t.note||"")}</td>
    </tr>
  `}function Nf(){return`
    <tr>
      <td class="bank-empty-row" colspan="${Bn(Te)?7:5}">No deposits to export for ${c(Ue(Te))}.</td>
    </tr>
  `}function qf(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=yo(t),n=Gr(t),r=n<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${g(Ue(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${c(Ue(t))} Raffle Period ${n===0?"(Current)":`(${Math.abs(n)} period${Math.abs(n)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${c(Er(e.salesStart))} through ${c(Er(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${c(Er(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${r?"":"disabled"} aria-label="Next ${g(Ue(t))} raffle period">\u203A</button>
    </div>
  `}function gi(t,e,n,r){const i=H===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${g(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${c(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${c(n)}</span>
        <span class="bank-section-subtitle">${c(r)}</span>
      </span>
    </button>
  `}function xf(){if(!Q())return"";const t=Zr(),e=lr(),n=Ya(),r=t>0,i=e>0,s=n>0;if(!r&&!i&&!s)return"";let o="",a="",l=!1;r?(o=`Check Out ${t} Deposit Mail`,a="checkout"):i?(l=!0,Xt?o=`Writing ${e} Pending Mail`:de.running?o=`${e} Mail Waiting for ESO Closure`:(dc("render-pending-mail-button"),o=`${e} Mail Writing to Disk`)):(l=!0,o=`${n} Mail Ready to Send`);const d=r?"Check out new deposit mail. GuildSync will immediately try to write it, or hold it until ESO closes.":i?"Deposit mail is already checked out and will be written automatically after ESO closes.":"Deposit mail has been written to ESO SavedVariables and is ready for ESO to send it and write acknowledgements.",f=Ei||Xt,p=de.running?"ESO Running":"ESO Not Running",m=de.running?"eso-running":"eso-not-running";return`
    <button id="checkoutDepositMailButton" class="${`bank-export-button deposit-mail-button${l?" deposit-mail-status-only":""}`}" type="button" data-deposit-mail-action="${g(a)}" ${l||f?'aria-disabled="true"':""} title="${g(de.message||d)}" aria-label="${g(`${o}. ${d}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${c(o)}</span>
      <span aria-hidden="true">(</span><span class="deposit-mail-eso-status ${m}" aria-hidden="true">${c(p)}</span><span aria-hidden="true">)</span>
    </button>
  `}function lr(){return dr().reduce((t,e)=>t+Nn(e.records).length,0)}function If(){const t=(v==null?void 0:v.user)||{};return new Set([Be(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function Of(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?If().has(e):!1}function Ya(){return j()?fe.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="written_to_eso"&&Of(t)}).length:0}function Zr(){return fe.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="unsent"}).length}function Pf(t){const e=String(t||"").trim();return fe.find(n=>String(n.eventId||"").trim()===e)||null}function mo(t){const e=String(t||"other").toLowerCase(),n=["biweekly","monthly","other"],r=n.includes(e)?e:"other",i=n.filter(s=>s!==r);return[i[0]||"biweekly",r,i[1]||"other"]}function go(t={},e="other"){const n=String(e||"other").toLowerCase(),r=Number(t==null?void 0:t.amount)||0;return n===String((t==null?void 0:t.type)||"").toLowerCase()?Number(t==null?void 0:t.ticketAmount)||0:n==="biweekly"?Math.floor(r/500):n==="monthly"?Math.floor(r/2500):0}function Ka(t={},e="other",n=""){const r=String(t.type||"other").toLowerCase(),i=Ue(r),s=Ue(e),o=Be()||"Unknown user",a=[`Moved from ${i} to ${s} by ${o}.`,`Ref ${t.eventId||""}`],l=String(n||"").trim();return l&&a.push(`Reason: ${l}`),a.join(`
`)}function Ja(t){if(!Q())return;const e=Pf(t);if(!e){y("banking-move-missing","Could not find the selected banking entry.",{ttlMs:b});return}const n=String(e.type||"other").toLowerCase();Ye=e,K={targetType:n,note:"",tickets:String(go(e,n))},ze="",mn=!1,Wt=!0,h()}function Fr(){Wt=!1,mn=!1,ze="",Ye=null,K={targetType:"other",note:"",tickets:""},h()}function Ff(){const t=Ye||{},e=String(t.type||"other").toLowerCase(),n=Ue(e),r=mo(e);let i=String(K.targetType||r[0]||"other").toLowerCase();r.includes(i)||(i=r[0]||"other",K.targetType=i);const s=Ka(t,i,K.note);return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="bankingMoveDialogTitle">
      <div class="roster-history-dialog manual-ticket-dialog banking-move-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="bankingMoveDialogTitle">Move Banking Entry</h3>
            <p>Move this deposit to a different banking section while preserving a reference to the original event.</p>
          </div>
          <button id="closeBankingMoveDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${ze?`<div class="discord-data-error">${c(ze)}</div>`:""}

        <div class="manual-ticket-form banking-move-form">
          <div class="banking-move-current-entry">
            <div><strong>Current Type:</strong> ${c(n)}</div>
            <div><strong>Event ID:</strong> ${c(t.eventId||"")}</div>
            <div><strong>Depositor:</strong> ${c(t.displayName||"")}</div>
            <div><strong>Amount:</strong> ${c(an(t.amount))} \u{1FA99}</div>
          </div>

          <div class="banking-move-target-row banking-move-slider-row">
            <span>Move To</span>
            <div class="banking-move-slider-control" role="radiogroup" aria-label="Move banking entry destination">
              <div class="banking-move-slider-labels">
                ${r.map(o=>`
                  <button
                    class="banking-move-slider-label ${i===o?"selected":""} ${o===e?"current":""}"
                    type="button"
                    role="radio"
                    aria-checked="${i===o?"true":"false"}"
                    data-banking-move-target="${g(o)}"
                  >
                    <strong>${c(Ue(o))}</strong>
                    <span>${o===e?"Current / restore original values":`${c(String(go(t,o)))} tickets`}</span>
                  </button>
                `).join("")}
              </div>
            </div>
          </div>

          <div class="banking-move-compact-row">
            <label class="manual-ticket-count-field banking-move-ticket-field">
              <span>Tickets Awarded</span>
              <input id="bankingMoveTicketsInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${g(K.tickets)}" ${i==="other"?"disabled":""} />
            </label>

            <label class="manual-ticket-note-field banking-move-note-field">
              <span>Move Note</span>
              <textarea id="bankingMoveNoteInput" class="discord-search-input manual-ticket-note-input banking-move-note-input" rows="1" placeholder="Optional reason for this move">${c(K.note)}</textarea>
            </label>
          </div>

          <div class="roster-history-muted banking-move-generated-note">${c(s).replace(/\n/g,"<br>")}</div>

          <div class="manual-ticket-actions banking-move-actions">
            <button id="saveBankingMoveButton" class="refresh-discord-button banking-move-submit-button" type="button" ${mn||i===e?"disabled":""}>${mn?"MOVING...":i===e?"SELECT A SIDE TO MOVE":"MOVE"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Gf(){var n,r,i,s;if(!Wt)return;(n=document.querySelector("#closeBankingMoveDialogButton"))==null||n.addEventListener("click",()=>Fr());function t(o){const a=String(o||"other").toLowerCase(),l=String((Ye==null?void 0:Ye.type)||"other").toLowerCase(),d=mo(l);K.targetType=d.includes(a)?a:l,K.tickets=String(go(Ye||{},K.targetType)),h()}document.querySelectorAll("[data-banking-move-target]").forEach(o=>{o.addEventListener("click",()=>t(o.dataset.bankingMoveTarget))}),(r=document.querySelector("#bankingMoveTicketsInput"))==null||r.addEventListener("input",o=>{const a=String(o.target.value||"").replace(/\D/g,"");o.target.value!==a&&(o.target.value=a),K.tickets=a}),(i=document.querySelector("#bankingMoveNoteInput"))==null||i.addEventListener("input",o=>{K.note=o.target.value||"";const a=document.querySelector(".banking-move-generated-note");a&&(a.innerText=Ka(Ye||{},K.targetType||"other",K.note))}),(s=document.querySelector("#saveBankingMoveButton"))==null||s.addEventListener("click",()=>Uf());const e=document.querySelector(".roster-history-overlay");e&&e.addEventListener("click",o=>{o.target===e&&Fr()})}async function Uf(){if(!Q())return;const t=Ye;if(!(t!=null&&t.eventId)){ze="No banking entry is selected.",h();return}const e=String(t.type||"other").toLowerCase(),n=mo(e),r=String(K.targetType||n[0]||"other").toLowerCase();if(!n.includes(r)||r===e){ze="Select one of the side destinations before moving this entry.",h();return}const i=r==="other"?0:Math.floor(Number(String(K.tickets||"").trim()||0));if(!Number.isFinite(i)||i<0){ze="Tickets must be zero or greater.",h();return}mn=!0,ze="",h();try{const s=await M("guildsync:move-banking-entry",{event_id:t.eventId,target_type:r,tickets:i,note:K.note||""},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to move banking entry.");Fr(),await ve({silent:!0}),y("banking-entry-moved",s.message||"Banking entry moved.",{ttlMs:b})}catch(s){mn=!1,ze=L(s),h()}}function Hf(){if(!j()){y("banking-history-login-required","Login required to lookup banking history.",{ttlMs:b});return}Mn=!0,Ut="",re=[],De=[],Oe="",Pe=!1,Fe="",Le=-1,clearTimeout(on),h(),V("bankingHistorySearchInput")}function Vf(){Mn=!1,Pe=!1,Fe="",clearTimeout(on)}function Wf(){if(!Mn)return;const t=document.querySelector("#bankingHistorySearchInput");t&&(t.addEventListener("input",e=>{if(Ut=e.target.value||"",Le=-1,Oe="",De=[],!Ut.trim()){clearTimeout(on),Fe="",re=[],Pe=!1,h(),V("bankingHistorySearchInput");return}clearTimeout(on),on=setTimeout(()=>{jf({keepFocus:!0})},250)}),t.addEventListener("keydown",e=>{if(e.key==="ArrowDown"||e.key==="ArrowUp"){if(re.length===0)return;e.preventDefault();const r=e.key==="ArrowDown"?1:-1;Le=((Le<0?0:Le)+r+re.length)%re.length,h(),V("bankingHistorySearchInput");return}if(e.key!=="Enter")return;e.preventDefault();const n=re[Le>=0?Le:0];n!=null&&n.account_name&&is(n.account_name)})),document.querySelectorAll("[data-banking-history-account]").forEach(e=>{e.addEventListener("click",()=>{is(e.dataset.bankingHistoryAccount||"")})})}async function jf(t={}){const e=Ut.trim();if(!e){Fe="",re=[],Le=-1,Oe="",De=[],Pe=!1,h(),t.keepFocus&&V("bankingHistorySearchInput");return}Pe=!0,Fe="",re=[],Le=-1,h(),t.keepFocus&&V("bankingHistorySearchInput");try{const n=await M("guildsync:request-banking-history-matches",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search banking history.");re=zf(n.matches),Le=re.length>0?0:-1}catch(n){Fe=L(n)}finally{Pe=!1,h(),t.keepFocus&&V("bankingHistorySearchInput")}}async function is(t){const e=String(t||"").trim();if(!!e){clearTimeout(on),Oe=e,Ut=e,re=[],De=[],Pe=!0,Fe="",h();try{const n=await M("guildsync:request-banking-history-records",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load banking history.");De=Yf(n.records)}catch(n){Fe=L(n)}finally{Pe=!1,h()}}}function zf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s;return{account_name:String(e.account_name||e.accountName||"").trim(),record_count:Number((r=(n=e.record_count)!=null?n:e.recordCount)!=null?r:0)||0,last_event_timestamp:(s=(i=e.last_event_timestamp)!=null?i:e.lastEventTimestamp)!=null?s:""}}).filter(e=>e.account_name):[]}function Yf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s,o,a,l,d,f,p,m,A,S,_,R,k,G,x,X;return{event_id:String(e.event_id||e.eventId||"").trim(),transaction_type:String(e.transaction_type||e.transactionType||e.type||"").trim(),event_timestamp:(i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:"",deposit_amount:(a=(o=(s=e.deposit_amount)!=null?s:e.depositAmount)!=null?o:e.amount)!=null?a:"",ticket_quantity:(f=(d=(l=e.ticket_quantity)!=null?l:e.ticketQuantity)!=null?d:e.ticketAmount)!=null?f:"",purchased_tickets:(S=(A=(m=(p=e.purchasedTickets)!=null?p:e.ticket_quantity)!=null?m:e.ticketQuantity)!=null?A:e.ticketAmount)!=null?S:0,bonus_tickets:(_=e.bonusTickets)!=null?_:0,bonus_percent:(R=e.bonusPercent)!=null?R:0,bonus_enabled:e.bonusEnabled===!0,total_tickets:(X=(x=(G=(k=e.totalTickets)!=null?k:e.ticket_quantity)!=null?G:e.ticketQuantity)!=null?x:e.ticketAmount)!=null?X:0,note:String(e.note||"").trim()}}).sort((e,n)=>{const r=Number(e.event_timestamp)||0,i=Number(n.event_timestamp)||0;return r!==i?r-i:String(e.event_id).localeCompare(String(n.event_id),void 0,{numeric:!0})}):[]}function Kf(t){const e=Number(t);if(!e)return"";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t);const r=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0"),s=String(n.getFullYear()),o=String(n.getHours()).padStart(2,"0"),a=String(n.getMinutes()).padStart(2,"0"),l=String(n.getSeconds()).padStart(2,"0");return`${r}/${i}/${s} ${o}:${a}:${l}`}function Jf(t){const e=String(t||"").trim().toLowerCase();return e==="monthly"?"50/50":e==="biweekly"?"Bi-Weekly":e==="other"?"Other":e?e.replace(/\b\w/g,n=>n.toUpperCase()):""}function Qf(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":an(e)}function yi(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":Me(e)}function Qa(){if(P!=="more")return;Gf(),Wf(),document.querySelectorAll("[data-bank-entry-move]").forEach(a=>{a.addEventListener("click",()=>Ja(a.dataset.bankEntryMove||""))}),document.querySelectorAll("[data-bank-section]").forEach(a=>{a.addEventListener("click",()=>{H=a.dataset.bankSection||"biweekly",h()})}),document.querySelectorAll("[data-bank-export-section]").forEach(a=>{a.addEventListener("click",()=>{Te=(a.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",It=!0,h()})}),document.querySelectorAll("[data-bank-period-move]").forEach(a=>{a.addEventListener("click",()=>{eh(a.dataset.bankPeriodMove||""),h()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{It=!1,h()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>Xf());const n=document.querySelector(".bank-export-overlay");n&&n.addEventListener("click",a=>{a.target===n&&(It=!1,h())});const r=document.querySelector("#openBankingHistoryButton");r&&r.addEventListener("click",()=>Hf());const i=document.querySelector("#openManualBiweeklyTicketButton");i&&i.addEventListener("click",async()=>{if(!!Q()){if(!j()){y("manual-ticket-login-required","Login required to add manual entries.",{ttlMs:b});return}Ge=!0,pe="",Tn=O.accountName||"",$e=!1,ne=-1,be.length===0&&(u==null?void 0:u.connected)&&j()&&await Cn({silent:!0}),h()}});const s=document.querySelector("#checkoutDepositMailButton");s&&s.addEventListener("click",()=>{s.dataset.depositMailAction==="checkout"&&s.getAttribute("aria-disabled")!=="true"&&lc()});const o=document.querySelector("#refreshBankingDataButton");o&&o.addEventListener("click",()=>{if(!oe()){ve();return}if(!j()){y("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:b});return}sc({key:"banking"})})}function Xa(t){const e=Bn(Te),n=[["Guildie Name","Deposit Amount","Purchased Tickets",...e?["Bonus %","Bonus Tickets"]:[],"Total Tickets","Note"]];for(const r of t)n.push([r.displayName||"",String(ko(r,Te)),String(r.purchasedTickets),...e?[`${r.bonusPercent}%`,String(r.bonusTickets)]:[],String(r.totalTickets),r.note||""]);return n.map(r=>r.map(ei).join("	")).join(`
`)}function ei(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function ti(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly","readonly"),n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.width="1px",n.style.height="1px",n.style.opacity="0",n.style.pointerEvents="none",n.style.zIndex="-1",document.body.appendChild(n),n.focus(),n.select(),n.setSelectionRange(0,n.value.length);let r=!1;try{r=document.execCommand("copy")}finally{document.body.removeChild(n)}return r}async function Xf(){const t=Hi(Te),e=Xa(t);if(await ti(e)){y("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:b});return}const r=document.querySelector("#bankingExportTsv");r&&(r.focus(),r.select()),y("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:b})}function Hi(t){return fe.filter(e=>e.type===t).filter(e=>Zf(t,e)).sort((e,n)=>(Number(e.time)||0)-(Number(n.time)||0))}function Zf(t,e){if(t==="other")return!0;const n=Number(e==null?void 0:e.time)||0;if(n<=0)return!1;const r=yo(t);return n>=r.salesStart&&n<=r.salesEnd}function Gr(t){return Number(Ci[t])||0}function eh(t){if(H!=="biweekly"&&H!=="monthly")return;const e=Gr(H);if(t==="previous"){Ci[H]=e-1;return}t==="next"&&e<0&&(Ci[H]=e+1)}function yo(t){const e=Math.floor(Date.now()/1e3);if(t==="monthly"){const i=th(e,Gr(t));return{salesStart:ec(i)+1,salesEnd:i,raffleTime:i+xr}}const n=At;let r=Za(e);return r+=Gr(t)*n,{salesStart:r-n+1,salesEnd:r,raffleTime:r+xr}}function Za(t){const e=At;let n=Sd;for(;n-e>t;)n-=e;for(;n<t;)n+=e;return n}function th(t,e=0){let n=nh(t),r=Number(e)||0;for(;r<0;)n=ec(n),r+=1;for(;r>0;)n=rh(n),r-=1;return n}function nh(t){let e=Za(t);for(;!bo(e);)e+=At;return e}function ec(t){let e=t-At;for(;!bo(e);)e-=At;return e}function rh(t){let e=t+At;for(;!bo(e);)e+=At;return e}function bo(t){const e=t+xr,n=t+At+xr;return os(e)!==os(n)}function os(t){var s,o;const e=new Date(Number(t||0)*1e3);if(Number.isNaN(e.getTime()))return"";const n=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit"}).formatToParts(e),r=((s=n.find(a=>a.type==="year"))==null?void 0:s.value)||"",i=((o=n.find(a=>a.type==="month"))==null?void 0:o.value)||"";return`${r}-${i}`}function ih(t=H){const e=String(t||"").toLowerCase();return e!=="monthly"&&e!=="biweekly"?0:"auto"}function ko(t={},e=H){const n=Number(t.amount)||0;if(!ih(e))return n;const r=Math.abs(Math.trunc(n))%10,i=r===1||r===3?r:0;return i>0&&n>i?n-i:n}function oh(t,e=H){return t.reduce((n,r)=>(n.amount+=ko(r,e),n.purchased+=Number(r.purchasedTickets)||0,n.bonus+=Number(r.bonusTickets)||0,n.tickets+=Number(r.totalTickets)||0,n),{amount:0,purchased:0,bonus:0,tickets:0})}function tc(t){const e=Math.ceil((Number(t)||0)/2);return e<=0?0:Math.ceil(e/2e5)*2e5}function sh(t){const e=tc(t);return e>0?e/2e5:0}function Bn(t){var n;if(t!=="biweekly"&&t!=="monthly")return!1;const{salesEnd:e}=yo(t);return((n=pn.find(r=>r.type===t&&r.salesEnd===e))==null?void 0:n.enabled)===!0}function ah(t,e=!0,n=Bn(H)){return`
    <tr data-bank-event-id="${g(t.eventId||"")}">
      <td>${c(t.note||t.eventId||"")}</td>
      <td>${c(Er(t.time))}</td>
      <td>${c(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${c(an(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td>${c(Me(t.purchasedTickets))}</td>${n?`<td>${c(Me(t.bonusPercent))}%</td><td>${c(Me(t.bonusTickets))}</td>`:""}<td><strong class="bank-ticket-amount">${c(Me(t.totalTickets))}</strong></td>`:""}
      <td>${Q()?`<button class="bank-entry-move-button" type="button" data-bank-entry-move="${g(t.eventId||"")}">Move</button>`:""}</td>
    </tr>
  `}function ch(t=!0,e=!1){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?e?"9":"7":"5"}">No ${c(Ue(H))} deposits found for this ${H==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function Ue(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function Er(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function an(t){return(Number(t)||0).toLocaleString()}function Me(t){return(Number(t)||0).toLocaleString()}function Nn(t){return Array.isArray(t)?t.map(e=>{var r,i,s,o,a,l,d,f,p,m,A,S,_,R,k,G,x,X,Se,jt,le,Ne,We,zt,w,$,E,B,Z,U,he,Yt,Et,T,N,z,F,se,ur,qn,fr,hr,Mo,To,Co,Bo,No;const n=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:n==="monthly"||n==="biweekly"||n==="other"?n:"other",eventId:String((i=(r=e==null?void 0:e.eventId)!=null?r:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((o=(s=e==null?void 0:e.time)!=null?s:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((l=(a=e==null?void 0:e.displayName)!=null?a:e==null?void 0:e.display_name)!=null?l:"").trim(),amount:Number((d=e==null?void 0:e.amount)!=null?d:0)||0,ticketAmount:Number((p=(f=e==null?void 0:e.ticketAmount)!=null?f:e==null?void 0:e.ticket_amount)!=null?p:0)||0,purchasedTickets:Number((A=(m=e==null?void 0:e.purchasedTickets)!=null?m:e==null?void 0:e.ticketAmount)!=null?A:0)||0,bonusTickets:Number((S=e==null?void 0:e.bonusTickets)!=null?S:0)||0,bonusPercent:Number((_=e==null?void 0:e.bonusPercent)!=null?_:0)||0,bonusEnabled:(e==null?void 0:e.bonusEnabled)===!0,totalTickets:Number((k=(R=e==null?void 0:e.totalTickets)!=null?R:e==null?void 0:e.ticketAmount)!=null?k:0)||0,note:String((G=e==null?void 0:e.note)!=null?G:"").trim(),dataSource:String((X=(x=e==null?void 0:e.dataSource)!=null?x:e==null?void 0:e.data_source)!=null?X:"").trim(),emailRequested:Boolean((Se=e==null?void 0:e.emailRequested)!=null?Se:e==null?void 0:e.email_requested),mailStatus:String((le=(jt=e==null?void 0:e.mailStatus)!=null?jt:e==null?void 0:e.mail_status)!=null?le:"").trim(),mailRequestId:String((We=(Ne=e==null?void 0:e.mailRequestId)!=null?Ne:e==null?void 0:e.mail_request_id)!=null?We:"").trim(),mailBatchId:String((w=(zt=e==null?void 0:e.mailBatchId)!=null?zt:e==null?void 0:e.mail_batch_id)!=null?w:"").trim(),checkedOutBy:String((E=($=e==null?void 0:e.checkedOutBy)!=null?$:e==null?void 0:e.checked_out_by)!=null?E:"").trim(),checkedOutAt:String((Z=(B=e==null?void 0:e.checkedOutAt)!=null?B:e==null?void 0:e.checked_out_at)!=null?Z:"").trim(),checkoutExpiresAt:String((he=(U=e==null?void 0:e.checkoutExpiresAt)!=null?U:e==null?void 0:e.checkout_expires_at)!=null?he:"").trim(),writtenToEsoAt:String((Et=(Yt=e==null?void 0:e.writtenToEsoAt)!=null?Yt:e==null?void 0:e.written_to_eso_at)!=null?Et:"").trim(),sentAt:String((N=(T=e==null?void 0:e.sentAt)!=null?T:e==null?void 0:e.sent_at)!=null?N:"").trim(),failedReason:String((F=(z=e==null?void 0:e.failedReason)!=null?z:e==null?void 0:e.failed_reason)!=null?F:"").trim(),recipient:String((fr=(qn=(ur=(se=e==null?void 0:e.recipient)!=null?se:e==null?void 0:e.account_name)!=null?ur:e==null?void 0:e.displayName)!=null?qn:e==null?void 0:e.display_name)!=null?fr:"").trim(),subject:String((To=(Mo=(hr=e==null?void 0:e.subject)!=null?hr:e==null?void 0:e.mailSubject)!=null?Mo:e==null?void 0:e.mail_subject)!=null?To:"").trim(),body:String((No=(Bo=(Co=e==null?void 0:e.body)!=null?Co:e==null?void 0:e.mailBody)!=null?Bo:e==null?void 0:e.mail_body)!=null?No:"").trim()}}):[]}function lh(t){const e=new Map;for(const n of fe)n.eventId&&e.set(n.eventId,n);for(const n of t)!n.eventId||e.set(n.eventId,n);fe=Array.from(e.values()).sort((n,r)=>(Number(r.time)||0)-(Number(n.time)||0))}function dh(t){t.querySelectorAll("[data-open-member-link-dialog]").forEach(e=>{e.addEventListener("click",()=>lo(e.dataset.openMemberLinkDialog||"",e.dataset.memberLinkValue||""))}),t.querySelectorAll("[data-open-roster-notes]").forEach(e=>{e.addEventListener("click",()=>qa(e.dataset.openRosterNotes||""))}),t.querySelectorAll("[data-bank-entry-move]").forEach(e=>{e.addEventListener("click",()=>Ja(e.dataset.bankEntryMove||""))})}function vo(t,e,n=!1,r=!1){const i=document.querySelector(t);if(!i)return;const s=ro(i),o=document.activeElement,a=o&&"selectionStart"in o?[o.selectionStart,o.selectionEnd]:null,l=document.createElement("template");l.innerHTML=e;const d=l.content.firstElementChild,f=n?".bank-deposit-table":r?".eso-roster-table":".discord-member-table";qo(i.querySelector(`${f} tbody`),d.querySelector(`${f} tbody`),n?"data-bank-event-id":r?"data-eso-account-name":"data-discord-user-id",dh),Gn(i.querySelector(`${f} thead`),d.querySelector(`${f} thead`)),Un(i.querySelector(".discord-data-actions .discord-last-refresh"),d.querySelector(".discord-data-actions .discord-last-refresh"));const p=n?"#refreshBankingDataButton":r?"#refreshRosterDataButton":"#refreshDiscordDataButton",m=i.querySelector(p),A=d.querySelector(p);if(m&&A&&(m.disabled=A.disabled,Un(m.lastElementChild,A.lastElementChild)),n){Gn(i.querySelector(".bank-deposits-summary-row"),d.querySelector(".bank-deposits-summary-row")),Gn(i.querySelector(".bank-raffle-period-content"),d.querySelector(".bank-raffle-period-content"));const S=i.querySelector("#checkoutDepositMailButton"),_=d.querySelector("#checkoutDepositMailButton");if(!_)S==null||S.remove();else if(!S||!S.isEqualNode(_)){const X=_.cloneNode(!0);X.addEventListener("click",()=>{X.dataset.depositMailAction==="checkout"&&X.getAttribute("aria-disabled")!=="true"&&lc()}),S?S.replaceWith(X):i.querySelector(".discord-data-actions").insertBefore(X,i.querySelector("[data-bank-export-section]"))}qo(i.querySelector("#bankingExportGrid tbody"),d.querySelector("#bankingExportGrid tbody"),"data-bank-event-id"),Gn(i.querySelector("#bankingExportGrid thead"),d.querySelector("#bankingExportGrid thead")),Un(i.querySelector(".bank-export-count"),d.querySelector(".bank-export-count"));const R=i.querySelector("#copyBankingExportGridButton"),k=d.querySelector("#copyBankingExportGridButton");R&&k&&(R.disabled=k.disabled);const G=i.querySelector("#bankingExportTsv"),x=d.querySelector("#bankingExportTsv");G&&x&&G.value!==x.value&&(G.value=x.value)}else{Un(i.querySelector(".discord-results-count"),d.querySelector(".discord-results-count"));const S=r?"#rosterRankFilter":"#discordRoleFilter",_=i.querySelector(S),R=d.querySelector(S);if(_&&R&&_.innerHTML!==R.innerHTML){const k=_.value;_.innerHTML=R.innerHTML,_.value=k}}(o==null?void 0:o.isConnected)&&document.activeElement!==o&&(o.focus({preventScroll:!0}),a&&a[0]!==null&&o.setSelectionRange(...a)),s()}function bn(){P==="eso-members"&&document.querySelector(".eso-roster-panel")&&vo(".eso-roster-panel",Ys(),!1,!0)}function $r(){it||rt||Lt?h():P==="discord-members"?kn():P==="eso-members"&&bn()}function kn(){P==="discord-members"&&document.querySelector(".discord-member-panel")&&vo(".discord-member-panel",zs())}function nc(t){const e=pn.find(n=>`${n.type}:${n.salesEnd}`===Ze);if(t.bonusSettings&&(te=t.bonusSettings),Array.isArray(t.bonusRaffles)){const n=[...t.bonusRaffles];e&&!n.some(r=>`${r.type}:${r.salesEnd}`===Ze)&&n.push(e),pn=n}}function uh(){if(P!=="settings"||!te)return;const t=document.querySelector(".raffle-bonus-card");if(!t)return;const e=ro(t.parentElement),n=document.createElement("template");n.innerHTML=ta();const r=n.content.firstElementChild;if(t.querySelector("#raffleBonusSettingsForm")){const i=t.querySelector("#bonusRafflePicker"),s=r.querySelector("#bonusRafflePicker");if(i&&s&&i.innerHTML!==s.innerHTML){const o=i.value;i.innerHTML=s.innerHTML,i.value=o}if(!Ee&&(xe==null?void 0:xe.raffle)!==Ze){Un(t.querySelector("[data-bonus-settings-source]"),r.querySelector("[data-bonus-settings-source]"));const o=t.querySelectorAll(".raffle-bonus-tiers"),a=r.querySelectorAll(".raffle-bonus-tiers");o.forEach((l,d)=>{const f=a[d];!f||(l.querySelectorAll("input").length!==f.querySelectorAll("input").length?Gn(l,f):f.querySelectorAll("input").forEach(p=>{const m=Array.from(l.querySelectorAll("input")).find(A=>A.name===p.name);!m||(m.type==="checkbox"?m.checked!==p.checked&&(m.checked=p.checked):m.value!==p.value&&(m.value=p.value))}))})}}else{const i=r.cloneNode(!0);t.replaceWith(i),ea(i),ps(Ps,{refresh:!0,root:i})}e()}function ke(){uh(),P==="more"&&document.querySelector(".bank-deposits-panel")&&vo(".bank-deposits-panel",za(),!0)}function rc(){Fs=new Date().toISOString()}async function fh(t={}){!(t!=null&&t.ok)||(fe=Nn(t.entries),nc(t),rc(),ke(),y("banking-data-updated",`Banking data updated. Loaded ${fe.length} deposit record${fe.length===1?"":"s"}.`,{ttlMs:b}))}async function ve(t={}){const e=Boolean(t.silent),n=Boolean(t.background);if(!(u!=null&&u.connected)){e||y("banking-data-error","GuildSync websocket is not connected.",{ttlMs:b});return}n||(nt=!0,ke());try{const r=await M("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");fe=Nn(r.entries),nc(r),rc(),e||y("banking-data",`Loaded ${fe.length} banking deposit record${fe.length===1?"":"s"}.`,{ttlMs:b})}catch(r){e||y("banking-data-error",L(r),{ttlMs:b})}finally{n||(nt=Boolean(t.deferPendingRefresh)),ke(),t.deferPendingRefresh||ar("more")}}async function ss(){!(u!=null&&u.connected)||!Q()||nt||(await ve({silent:!0,background:!0}),Zr()<=0&&lr()>0&&(de.running?ke():dc("availability-refresh")))}function ic(){Qt&&clearInterval(Qt),ss(),Qt=window.setInterval(ss,yd)}function oc(){Qt&&(clearInterval(Qt),Qt=null)}async function hh(t={}){if(!!Q()){if(!(u!=null&&u.connected)){y("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:b});return}try{const e=await zl(t);if(!(e!=null&&e.ok))return;const n=Array.isArray(e.ackEntries)?e.ackEntries:[];if(n.length===0)return;const r=await M("guildsync:mark-deposit-mail-sent",{mail_ack:n,mail_request_ids:n.map(o=>(o==null?void 0:o.mail_request_id)||(o==null?void 0:o.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(r.mail_request_ids)?r.mail_request_ids:Array.isArray(r.mailRequestIds)?r.mailRequestIds:[];if(i.length===0){y("deposit-mail-ack-none",r.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:b});return}const s=await Wl(i);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");y("deposit-mail-ack-sent",s.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:b}),await ve({silent:!0})}catch(e){y("deposit-mail-ack-error",L(e),{ttlMs:b})}}}async function ph(){if(!!Q()&&!hi){hi=!0;try{const t=await ed();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&y("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:b})}catch(t){y("deposit-mail-ack-cleanup-error",L(t),{ttlMs:b})}finally{hi=!1}}}async function sc(t={}){var e,n;if(!!oe()){if(!(u!=null&&u.connected)){y("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:b});return}nt=!0,ke();try{const r=await Kl(t);if(!(r!=null&&r.ok)){y("banking-data-pending",(r==null?void 0:r.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:b});return}const i=Nn((e=r==null?void 0:r.data)==null?void 0:e.entries);lh(i);const s=new Date().toISOString(),o={local_upload_id:uc(),authenticated_username:Be(),authenticated_discord_user_id:((n=v==null?void 0:v.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:s,data:r.data||{}};try{await pc(o)}catch(a){throw bh(o),a}await ve({silent:!0,deferPendingRefresh:!0})}catch(r){y("banking-data-error",L(r),{ttlMs:b})}finally{nt=!1,ke(),ar("more")}}}function ac(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function dr(){try{const t=window.localStorage.getItem(Cs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function cc(t){window.localStorage.setItem(Cs,JSON.stringify(Array.isArray(t)?t:[]))}function mh(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||ac()),n=dr().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);n.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),cc(n)}function as(t){const e=String(t||"").trim();if(!e)return;const n=dr().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);cc(n)}async function lc(){if(!Q()){y("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:b});return}if(!(u!=null&&u.connected)){y("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:b});return}const t=dr(),e=Zr();if(t.length>0&&e<=0){await vn();return}Ei=!0,ke();try{const n=await M("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail checkout request.");const r=Nn(n.records);if(r.length===0){y("deposit-mail-none",n.message||"No unsent deposit mail is available.",{ttlMs:b}),await ve({silent:!0});return}const i={mail_batch_id:n.mail_batch_id||n.mailBatchId||ac(),checked_out_by:n.checked_out_by||n.checkedOutBy||Be(),checked_out_at:new Date().toISOString(),records:r};mh(i),await vn()}catch(n){y("deposit-mail-error",L(n),{ttlMs:b})}finally{Ei=!1,ke()}}function dc(t=""){Zt||Xt||!Q()||lr()<=0||de.running||(Zt=window.setTimeout(()=>{Zt=null,vn()},100))}async function vn(){if(Zt&&(window.clearTimeout(Zt),Zt=null),Xt||!Q())return;const t=dr();if(t.length!==0){if(await Vi({silent:!0}),de.running){y("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:b}),ke();return}Xt=!0,ke();try{for(const e of t){if(!Q())return;const n=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),r=Nn(e==null?void 0:e.records);if(r.length===0){as(n);continue}const i=await fd(r);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(u!=null&&u.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const s=await M("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:n,event_ids:i.eventIds||r.map(o=>o.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend did not confirm deposit mail was marked written_to_eso.");as(n),y("deposit-mail-written",i.message||`Wrote ${r.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:b})}await ve({silent:!0})}catch(e){y("deposit-mail-write-error",L(e),{ttlMs:b})}finally{Xt=!1,ke()}}}async function Vi(t={}){try{const e=Boolean(de.running),n=await td();de={running:Boolean(n==null?void 0:n.running),message:String((n==null?void 0:n.message)||"")},de.running||await ph(),e&&!de.running&&(y("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:b}),await vn()),e!==de.running&&ke()}catch(e){t.silent||y("eso-status-error",L(e),{ttlMs:b})}}function gh(){Jt&&clearInterval(Jt),Vi({silent:!0}).then(()=>{!de.running&&lr()>0&&vn()}),Jt=window.setInterval(()=>Vi({silent:!0}),gd)}function yh(){Jt&&(clearInterval(Jt),Jt=null)}function uc(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function So(){try{const t=window.localStorage.getItem(Ts),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function fc(t){window.localStorage.setItem(Ts,JSON.stringify(Array.isArray(t)?t:[]))}function bh(t){const e=String((t==null?void 0:t.local_upload_id)||uc()),n=So().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),fc(n),y("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:b})}function kh(t){const e=So().filter(n=>(n==null?void 0:n.local_upload_id)!==t);fc(e)}async function hc(){if(di||!(u!=null&&u.connected)||!oe())return;const t=So();if(t.length!==0){di=!0;try{for(const e of t){if(!(u!=null&&u.connected)||!oe())return;await pc(e),kh(e.local_upload_id)}}catch(e){y("banking-data-pending-error",`Pending banking upload retry failed: ${L(e)}`,{ttlMs:b})}finally{di=!1}}}async function pc(t){if(!(u!=null&&u.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await M("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const n=await Xl(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return y("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:b}),e}function mc(){if(P!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>vh());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{un=!0,Xe="",h(),V("discordHistorySearchInput")});const n=document.querySelector("#discordMemberSearch");n&&n.addEventListener("input",o=>{Tr=o.target.value||"",$i=o.target.selectionStart,Ri=o.target.selectionEnd,h({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Lh(o.dataset.discordSortColumn||"username")})});const r=document.querySelector("#discordRoleFilter");r&&r.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(en.add(a),h())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRoleFilter||"";en.delete(a),h()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(tn.add(a),h())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeDiscordLinkStatusFilter||"";tn.delete(a),h()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>lo(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{Tr="",en.clear(),tn.clear(),h()})}async function vh(){var t,e;if(!oe()){await er();return}if(!(u!=null&&u.connected)){y("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:b});return}Mr=!0,kn(),y("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const n=await M("guildsync:request-discord-data-refresh",{requested_by:((t=v==null?void 0:v.user)==null?void 0:t.display_name)||((e=v==null?void 0:v.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to request Discord data refresh.");y("discord-refresh-requested",n.message||"Discord data refresh completed.",{ttlMs:b}),await er({silent:!0})}catch(n){y("discord-refresh-error",L(n),{ttlMs:b})}finally{Mr=!1,kn()}}async function Sh(){if(!(u!=null&&u.connected))return;const t=await M("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(zr=t.value||null)}async function wh(t={}){if(!!(t!=null&&t.ok)){ue=wo(t.members),jr=_o(t.roles),t.last_refresh&&(zr=t.last_refresh);try{await Sh()}catch{}P==="discord-members"&&kn(),y("discord-data-updated",`Discord data updated. Loaded ${ue.length} member record${ue.length===1?"":"s"}.`,{ttlMs:b})}}async function er(t={}){const e=Boolean(t.silent);if(!(u!=null&&u.connected)){y("discord-data-error","GuildSync websocket is not connected.",{ttlMs:b});return}cn=!0,kn();try{const[n,r]=await Promise.all([M("guildsync:request-discord-data-date",{}),M("guildsync:request-discord-member-dataJSON",{})]);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord refresh date.");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord member data.");zr=n.value||null,ue=wo(r.members),jr=_o(r.roles),e||y("discord-data",`Loaded ${ue.length} Discord member record${ue.length===1?"":"s"}.`,{ttlMs:b})}catch(n){y("discord-data-error",L(n),{ttlMs:b})}finally{cn=!1,kn(),ar("discord-members")}}function M(t,e={},n=3e4){return new Promise((r,i)=>{var a,l,d;if(!(t==="guildsync:set-role-view"&&(((a=v.user)==null?void 0:a.actual_role)||((l=v.user)==null?void 0:l.role))==="admin")&&!Nc((d=v.user)==null?void 0:d.role,t)){i(new Error("Your current role or view does not have permission to perform this action."));return}if(!(u!=null&&u.connected)){i(new Error("GuildSync websocket is not connected."));return}let s=!1;const o=window.setTimeout(()=>{s||(s=!0,i(new Error(`${t} timed out.`)))},n);u.emit(t,e,f=>{s||(s=!0,window.clearTimeout(o),r(f))})})}function wo(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(gc).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,n)=>tr(e).localeCompare(tr(n),void 0,{sensitivity:"base"})):[]}function _o(t){if(!Array.isArray(t))return[];const e=new Map;for(const n of t){const r=gc(n);if(!r)continue;const i=r.role_id||jn(r.role_name);i&&!e.has(i)&&e.set(i,r)}return Array.from(e.values()).sort((n,r)=>String(n.role_name||"").localeCompare(String(r.role_name||""),void 0,{sensitivity:"base"}))}function gc(t){var i,s;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),n=String(t.role_name||t.name||"Unnamed Role").trim(),r=(s=(i=t.role_color)!=null?i:t.color)!=null?s:null;return{role_id:e,role_name:n||"Unnamed Role",role_color:r}}function _h(){const t=Tr.trim().toLowerCase(),e=Array.from(en),n=ue.filter(r=>{if(t&&![r.username,r.global_name,r.server_nickname,r.discord_id,...r.roles.map(s=>s.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(r.roles.map(s=>s.role_name));if(!e.every(s=>i.has(s)))return!1}return!!Xs(tn,zd(r))});return Ah(n)}function Ah(t){const e=Mt==="desc"?-1:1;return[...t].sort((n,r)=>{const i=cs(n,Jn),s=cs(r,Jn),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:tr(n).localeCompare(tr(r),void 0,{sensitivity:"base",numeric:!0})})}function cs(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(n=>n.role_name||"").filter(Boolean).sort((n,r)=>n.localeCompare(r,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function Lh(t){const n=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";Jn===n?Mt=Mt==="asc"?"desc":"asc":(Jn=n,Mt="asc"),h()}function gr(t,e){const n=Jn===t,r=Mt==="asc"?"ascending":"descending",i=n?Mt==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${n?r:"none"}">
      <button
        class="discord-sort-header${n?" active":""}"
        type="button"
        data-discord-sort-column="${g(t)}"
        title="Sort ${g(e)} ${n&&Mt==="asc"?"descending":"ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function Eh(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger($i)?$i:t.value.length,n=Number.isInteger(Ri)?Ri:e;t.setSelectionRange(e,n)}}function $h(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(Mi)?Mi:t.value.length,n=Number.isInteger(Ti)?Ti:e;t.setSelectionRange(e,n)}}function Rh(){const t=new Set;for(const e of ue)for(const n of e.roles)n.role_name&&t.add(n.role_name);return Array.from(t).sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function Dh(t){const e=qh(t),n=tr(t),r=t.roles||[];return`
    <tr data-discord-user-id="${g(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${g(e)}" alt="${g(n)}" />`:`<span>${c($c(n))}</span>`}
          </div>
          <span>${c(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${c(t.global_name||"")}</td>
      <td>${c(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${r.length>0?r.map(i=>Th(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${ka({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function Mh(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${c(cn?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function Th(t){const e=ni(t.role_color),n=Eo(e),r=Lo(e,n);return`
    <span
      class="discord-role-badge"
      title="${g(t.role_name)}"
      style="${r}"
    >${c(t.role_name)}</span>
  `}function Ch(t){const e=Ao(t),n=ni(e==null?void 0:e.role_color),r=Eo(n),i=Lo(n,r);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-role-filter="${g(t)}"
      style="${i}"
      title="Remove ${g(t)} filter"
    >
      <span>${c(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Bh(t){const e=Nh(t);for(const n of e){const r=Ao(n);if(r)return r}return null}function Nh(t){const e=String(t||"").trim();if(!e)return[];const n=jn(e),i={associate:["Associates","Associate"],associates:["Associates","Associate"],soldier:["Soldiers","Soldier"],soldiers:["Soldiers","Soldier"],capo:["Capo"],capos:["Capo","Capos"],caporegime:["CapoRegime","Capo Regime","Capo Regimes"],consiglieres:["Consigliere","Consiglieres"],consigliere:["Consigliere","Consiglieres"]}[n]||[e];return Array.from(new Set([e,...i].filter(Boolean)))}function jn(t){return String(t||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function Ao(t){const e=jn(t);if(!e)return null;const n=jr.find(r=>jn(r.role_name)===e);if(n)return n;for(const r of ue){const i=r.roles.find(s=>jn(s.role_name)===e);if(i)return i}return null}function ni(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function Lo(t,e){return[`--role-fill-top: ${ls(t,"#ffffff",.16)}`,`--role-fill-bottom: ${ls(t,"#000000",.1)}`,`--role-fill-glow: ${ds(t,.28)}`,`--role-fill-edge: ${ds(t,.46)}`,`color: ${e}`].join("; ")}function ls(t,e,n){const r=yr(t)||yr("#64748b"),i=yr(e)||yr("#ffffff"),s=Math.max(0,Math.min(1,Number(n)||0)),o=Math.round(r.red+(i.red-r.red)*s),a=Math.round(r.green+(i.green-r.green)*s),l=Math.round(r.blue+(i.blue-r.blue)*s);return`#${bi(o)}${bi(a)}${bi(l)}`}function yr(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function bi(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function ds(t,e){const n=String(t||"#64748b").replace("#",""),r=/^[0-9a-f]{6}$/i.test(n)?n:"64748b",i=parseInt(r.slice(0,2),16),s=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`rgba(${i}, ${s}, ${o}, ${e})`}function Eo(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const n=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(n*299+r*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function qh(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!n)return"";const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function tr(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function yc(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function $o(t){var o;const e=((o=v.user)==null?void 0:o.role)==="admin",n=e&&Number(t)||0,r=document.querySelector("#userPendingBadge");r&&(r.innerHTML=Fc(n));const i=document.querySelector("#userAdminMenuCount");i&&(i.textContent=n?`${n} pending`:"");const s=document.querySelector("#discordAvatarButton");s&&s.setAttribute("aria-label",n?`GuildSync profile menu, ${n} pending account requests`:"GuildSync profile menu")}function xh(t){var n;if(!t||t.discord_user_id!==((n=v.user)==null?void 0:n.discord_user_id))return;const e=v.user.role;v.user={...v.user,...t},e!==t.role&&ce.invalidateAccess(),e!==t.role&&(Re.reset(),to.clear(),Kn(t.role)||(Wt=!1,Ge=!1),h(),Ot({silent:!0}),hs(t.role)&&(hc(),Ga(),Wa()),Kn(t.role)?ic():oc()),zn(),Re.start()}function zn(){const t=document.querySelector("#discordArea");if(!!t){if(Vt(!1),j()){const e=v.user||{},n=Be(),r=ep(e),i=$c(n);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Open GuildSync user menu" aria-label="GuildSync profile menu">
          ${r?`<img src="${g(r)}" alt="${g(n)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${c(i)}</span>`}
        </button>
        <span id="userPendingBadge" class="user-pending-badge-wrap"></span>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `,$o(Re.count);const s=document.querySelector("#discordAvatarButton");s.addEventListener("contextmenu",o=>{o.preventDefault(),us()}),s.addEventListener("click",()=>{us()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",Uh)}}function us(){if(_n){Vt();return}Gh()}function Ih(t=ht){if(!oe())return'<p class="roster-history-muted">Approved GuildSync access is required to upload files.</p>';const e=Array.isArray(t==null?void 0:t.files)?t.files:[],n=String((t==null?void 0:t.directory)||"").trim(),r=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const s=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),o=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),a=String((i==null?void 0:i.filePath)||(n?`${n}\\${o}`:o)).trim(),l=(i==null?void 0:i.enabled)!==!1,d=r&&l,f=`profileFileWatchToggle-${Fh(s||o)}`;return`
          <label class="profile-filewatch-item ${l?"enabled":"disabled"}" title="${g(a)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${c(o)}</span>
              <span class="profile-filewatch-state">${d?"Watching":l?"On":"Off"}</span>
            </span>
            <input
              id="${g(f)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${g(s)}"
              ${l?"checked":""}
              aria-label="Turn file watch ${l?"off":"on"} for ${g(o)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function Ro(){var r,i,s,o,a;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=Be(),n=((r=v.user)==null?void 0:r.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${c(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Role</span>
        <span class="profile-value">${c(tp(n))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${c(Wr)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${ht!=null&&ht.watching?"Active":"Stopped"}</span>
        </div>
        ${Ih()}
      </div>
      ${((i=v.user)==null?void 0:i.role)==="admin"?'<section class="profile-section profile-user-management-section" aria-label="User Management"><div class="profile-section-header">User Management</div><button id="manageGuildSyncUsersButton" class="user-admin-menu-button" type="button"><span>Manage GuildSync Users</span><span id="userAdminMenuCount"></span></button></section>':""}
      <div id="voiceHotkeyMount">${ce.render()}</div>
      ${Ic(v.user)}
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,ce.wire(t),t.querySelectorAll("[data-role-view]").forEach(l=>l.addEventListener("click",()=>void Oh(l.dataset.roleView))),(s=document.querySelector("#manageGuildSyncUsersButton"))==null||s.addEventListener("click",()=>{Vt(!1),Re.open()}),$o(Re.count),(o=document.querySelector("#discordLogoutButton"))==null||o.addEventListener("click",Sc),(a=document.querySelector("#associateTicketReportButton"))==null||a.addEventListener("click",()=>{Vt(!1),na()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(l=>{l.addEventListener("change",Ph)})}async function Oh(t){var n;const e=document.querySelectorAll("[data-role-view]");e.forEach(r=>r.disabled=!0);try{const r=await M("guildsync:set-role-view",{role:t},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Could not change view.");Vt(!1);const i=(n=v.user)==null?void 0:n.role;y("role-view",i==="admin"?"Returned to Admin View.":`Viewing GuildSync as ${i==="viewer"?"Viewer":"User"}. Use the profile menu to return to Admin View.`,{ttlMs:b})}catch(r){y("role-view-error",L(r),{ttlMs:b})}finally{e.forEach(r=>r.disabled=!1)}}async function bc(){try{ht=await nd(),_n&&Ro()}catch(t){y("file-watcher-error",L(t),{ttlMs:b})}}async function Ph(t){var r;const e=t.currentTarget,n=String(((r=e==null?void 0:e.dataset)==null?void 0:r.filewatchKey)||"").trim();if(!!n)try{e.disabled=!0,ht=await ad(n,e.checked),await Ot({silent:!0}),_n&&Ro()}catch(i){y("file-watcher-error",L(i),{ttlMs:b}),await bc()}}function Fh(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function Gh(){const t=document.querySelector("#discordProfileMenu");!t||(Ro(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),_n=!0,ce.refreshAccess(),bc(),setTimeout(()=>{window.addEventListener("click",kc),window.addEventListener("keydown",vc)},0))}function Vt(t=!0){ce.close();const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),_n=!1,t&&(window.removeEventListener("click",kc),window.removeEventListener("keydown",vc))}function kc(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&Vt()}function vc(t){t.key==="Escape"&&Vt()}async function Uh(){try{y("auth","Opening Discord login...",{ttlMs:b});const t=await ld();t!=null&&t.status_message&&y("auth",t.status_message,{ttlMs:b}),vt()}catch(t){y("auth-error",L(t),{ttlMs:b}),vt()}}async function Sc(){ce.stop();try{v=await id(),y("auth",v.status_message||"Logged out.",{ttlMs:b}),Gs(),Yn(),await Ot()}catch(t){y("auth-error",L(t),{ttlMs:b}),vt()}}function Yn(){const t=v.socket_url||"https://guildsync.perdues.me";Hh(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};v!=null&&v.token&&(e.auth={token:v.token}),u=_r(t,e),u.on("connect",()=>{ce.connection(!0),Re.start(),vt(),wc(),P==="discord-members"&&er({silent:!0}),P==="eso-members"&&Cn({silent:!0}),(P==="more"||P==="settings"&&!te)&&ve({silent:!0}),hc(),vn(),gh(),ic(),Ga(),Wa(),Vh()}),u.on("guildsync:users-changed",n=>Re.changed(n)),u.on("guildsync:account-profile",xh),u.on("guildsync:account-removed",()=>void Sc()),u.on("guildsync:voice-mute-access-changed",()=>void ce.invalidateAccess()),u.on("connect_error",()=>{Re.stop(),vt(),Ur()}),u.on("disconnect",()=>{ce.connection(!1),Re.stop(),vt(),Ur(),yh(),oc()}),u.on("guildsync:version-status",n=>{Wh(n)}),u.on("guildsync:discord-member-data-updated",n=>{ce.refreshAccess(),wh(n)}),u.on("guildsync:banking-data-updated",n=>{fh(n)}),u.on("guildsync:roster-data-updated",n=>{kf(n)}),u.on("guildsync:member-links-updated",qu),u.on("guildsync:discord-refresh-status",(n={})=>{const r=String(n.message||"").trim();r&&y("discord-refresh-status",r,{ttlMs:b})})}function Hh(t=!0){ce.stop(),Re.reset(),Ur(),u&&(u.disconnect(),u=null),t&&vt()}function wc(){!(u!=null&&u.connected)||u.emit("guildsync:client-version",{version:Wr,platform:_c(),client_type:"wails"})}function Vh(){Ur(),Ar=window.setInterval(()=>{wc()},md)}function Ur(){Ar&&(window.clearInterval(Ar),Ar=null)}function Wh(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",n=t.download&&typeof t.download=="object"?t.download:{};ot={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||n.url||"").trim(),fileName:String(t.download_file_name||n.file_name||"").trim(),platformLabel:String(n.label||t.platform||_c()).trim()},y("version",`GuildSync is out of date. Current version: ${Wr}. Latest version: ${e}.`),Wi();return}ot={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},Wi(),Do("version")}}function _c(){const t=String(navigator.userAgent||"").toLowerCase(),n=`${String(navigator.platform||"").toLowerCase()} ${t}`;return n.includes("mac")?"macos":n.includes("linux")?"linux":"windows"}function Wi(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!ot.updateRequired||!ot.downloadUrl){t.innerHTML="";return}const e=ot.platformLabel||"Desktop",n=ot.latestVersion||"latest",r=ot.fileName||"GuildSync client download";t.innerHTML=`
    <button
      id="desktopUpdateDownloadButton"
      class="desktop-client-download-button"
      type="button"
      title="Download ${g(r)}"
      aria-label="Download GuildSync ${g(n)} for ${g(e)}"
    >
      <span class="desktop-client-download-icon" aria-hidden="true">\u2B07</span>
      <span class="desktop-client-download-copy">
        <span class="desktop-client-download-title">Download Update</span>
        <span class="desktop-client-download-subtitle">${c(e)} detected \xB7 ${c(n)}</span>
      </span>
      <span class="desktop-client-download-caret" aria-hidden="true">\u25BE</span>
    </button>
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{jh()})}function jh(){const t=String(ot.downloadUrl||"").trim();if(!t){y("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:b});return}pd(t)}function y(t,e,n={}){const r=String(t||"").trim(),i=String(e||"").trim();if(!(!r||!i)){if(wt.set(r,i),Rt.has(r)&&(window.clearTimeout(Rt.get(r)),Rt.delete(r)),n.ttlMs&&Number(n.ttlMs)>0){const s=window.setTimeout(()=>{Do(r)},Number(n.ttlMs));Rt.set(r,s)}Sn()}}function Do(t){const e=String(t||"").trim();if(!!e){if(wt.delete(e),Rt.has(e)&&(window.clearTimeout(Rt.get(e)),Rt.delete(e)),ee===e){oi(()=>{ee="",Sn()});return}Sn()}}function Sn(){const t=ri();if(t.length===0){Pt?oi(nr):nr();return}!Pt&&!Ft&&ii(t[0])}function ri(){return Array.from(wt.keys())}function Ac(){const t=ri();if(t.length===0)return"";if(!ee)return t[0];const e=t.indexOf(ee);return e<0?t[0]:t[(e+1)%t.length]}function ii(t){const e=document.querySelector("#statusMessageTrack");if(!e||!wt.has(t)){nr();return}si();const n=wt.get(t);ee=t,Pt=!0,Ft=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=n,e.style.setProperty("--message-fade-duration",`${xs}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",Ft=!1,zh()},{once:!0})})}function zh(){const t=ri();if(!ee||!wt.has(ee)){Sn();return}if(t.length<=1){fs(!1);return}fs(!0)}function fs(t){const e=document.querySelector("#statusMessageViewport"),n=document.querySelector("#statusMessageTrack");if(!e||!n)return;const r=Math.max(0,n.scrollWidth-e.clientWidth);if(r<=0){t&&rr(()=>{oi(()=>{const i=Ac();ee="",i?ii(i):nr()})},qs);return}rr(()=>{Lc(r,t)},Is)}function Lc(t,e){const n=document.querySelector("#statusMessageTrack");if(!n||!ee||!wt.has(ee))return;const r=Math.max(4,Math.ceil(t/kd));n.style.setProperty("--long-scroll-distance",`${t}px`),n.style.setProperty("--long-scroll-duration",`${r}s`),n.classList.add("long-scroll"),n.addEventListener("animationend",()=>{if(n.classList.remove("long-scroll"),n.style.transform=`translateX(-${t}px) translateY(-50%)`,e){rr(()=>{oi(()=>{const i=Ac();ee="",i?ii(i):nr()})},qs);return}rr(()=>{Yh()},bd)},{once:!0})}function Yh(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!ee||!wt.has(ee))return;if(ri().length!==1){Sn();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const r=Math.max(0,e.scrollWidth-t.clientWidth);r<=0||rr(()=>{Lc(r,!1)},Is)}function oi(t){const e=document.querySelector("#statusMessageTrack");if(si(),!e||!Pt){typeof t=="function"&&t();return}Ft=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${xs}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",Pt=!1,Ft=!1,typeof t=="function"&&t()},{once:!0})}function nr(){const t=document.querySelector("#statusMessageTrack");si(),ee="",Pt=!1,Ft=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function rr(t,e){const n=window.setTimeout(()=>{Vn=Vn.filter(r=>r!==n),t()},e);Vn.push(n)}function si(){for(const t of Vn)window.clearTimeout(t);Vn=[]}function Ec(){if(!Pt||Ft||!ee)return;const t=ee;si(),ii(t)}function vt(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(u!=null&&u.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!j()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${Be()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${Be()}`)}}async function Ot(t={}){try{if(oe()){const e=await dd();ht=e,!t.silent&&(e==null?void 0:e.message)&&y(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:b});return}ht=await ud(),Do("file-watcher")}catch(e){y("file-watcher-error",L(e),{ttlMs:b})}}function Fn(t,e=null){const n="[GuildSync File Watcher]";if(e){console.log(`${n} ${t}`,e);return}console.log(`${n} ${t}`)}function Kh(t={}){if(!oe()){Fn("SavedVariables change ignored because the account cannot edit data.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",n=e.toLowerCase(),r=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=String(t.filePath||"").trim(),o=r?`${r} saved variables (${i})`:i;Fn(`SavedVariables change detected: ${i}${s?` (${s})`:""}. Key: ${n}.`,t),y(`saved-vars-file-updated-${e}`,`${o} has been updated.`,{ttlMs:b}),n==="banking"&&(Fn(`Processing banking SavedVariables update from ${i}.`),Jh(t)),n==="roster"&&(Fn(`Processing roster SavedVariables update from ${i}.`),Qh(t)),n==="applications"&&(Fn(`Processing applications SavedVariables update from ${i}.`),Rf(t))}async function Jh(t={}){await hh(t),await sc(t)}async function Qh(t={}){await vf(t)}function Xh(t){!j()||y("file-watcher-error",L(t),{ttlMs:b})}function Zh(){Kt("guildsync-savedvars-file-modified",Kh),Kt("guildsync-file-watcher-error",Xh),Kt("guildsync-login-complete",async t=>{v=t||{logged_in:!1,allowed:!1},zn(),Yn(),await Ot(),y("auth",v.status_message||`Logged in and authorized as ${Be()}.`,{ttlMs:b})}),Kt("guildsync-login-denied",async t=>{v={logged_in:!1,allowed:!1,status_message:""},zn(),await Ot(),y("auth",t||"Access denied.",{ttlMs:b}),Yn()}),Kt("guildsync-login-failed",async t=>{v={logged_in:!1,allowed:!1,status_message:""},zn(),await Ot(),y("auth",t||"Login failed.",{ttlMs:b}),Yn()})}function j(){return Boolean((v==null?void 0:v.logged_in)&&(v==null?void 0:v.allowed)&&(v==null?void 0:v.token))}function Q(){var t;return j()&&Kn((t=v.user)==null?void 0:t.role)}function oe(){var t;return j()&&hs((t=v.user)==null?void 0:t.role)}function St(){var t;return j()&&Tc((t=v.user)==null?void 0:t.role)}function Be(){var t,e;return((t=v.user)==null?void 0:t.display_name)||((e=v.user)==null?void 0:e.username)||"Discord User"}function ep(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),n=String(t.discord_user_id||"").trim();if(!e||!n)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=128`}function $c(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function tp(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function np(){In&&(In.disconnect(),In=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),n=Math.round(t.getBoundingClientRect().height);In=new ResizeObserver(r=>{const i=r[0];if(!i)return;const s=Math.round(i.contentRect.width),o=Math.round(i.contentRect.height);s===e&&o===n||(e=s,n=o,Rc(),Ec())}),In.observe(t)}function Rc(){clearTimeout(Uo),Uo=setTimeout(async()=>{try{await Ms()}catch{}},500)}function L(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function c(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function g(t){return c(t)}Zh();wd();
