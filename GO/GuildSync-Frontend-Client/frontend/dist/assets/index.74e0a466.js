(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Dc({bridge:t,eventsOn:e,getSocket:n,authenticated:r,changed:i=()=>{}}){let s={enabled:!1,shortcut:"Ctrl+M",supported:!1},o=!1,a=null,l=null,d=!1,m="",g=!1;const p=()=>i(),A=(M,P,w)=>{const _=n();_!=null&&_.connected&&_.emit("guildsync:voice-mute-hotkey",{state:M,sessionId:P},w)};function v(){clearInterval(l),l=null;const M=a;a=null,M&&A("released",M)}function E({state:M}){var w;if(M==="released"){o=!1,v();return}if(M!=="pressed"||o||(o=!0,!s.enabled||d||!r()||!((w=n())!=null&&w.connected)))return;const P=crypto.randomUUID();a=P,A("pressed",P,_=>{if(P===a){if(!(_!=null&&_.ok)){m=(_==null?void 0:_.message)||"Voice mute was rejected.",v(),p();return}m="Hold to mute active",p()}}),a===P&&(l=setInterval(()=>{var _;if(!o||!r()||!((_=n())!=null&&_.connected)){v();return}if(a!==P){v();return}A("heartbeat",P,L=>{P===a&&!(L!=null&&L.ok)&&(m=(L==null?void 0:L.message)||"Voice mute ended.",v(),p())})},2e3))}async function T(){if(!g){g=!0,e("guildsync:voice-hotkey",E);try{s=await t.GetVoiceHotkeySettings()}catch(M){m=String(M)}p()}}async function S(M){var P;await T(),M||(v(),F());try{await t.SetVoiceHotkeyActive(M&&r()&&Boolean((P=n())==null?void 0:P.connected))}catch(w){m=String(w),p()}}async function O(M,P){v(),F();try{s=await t.SetVoiceHotkeySettings(M,P),m=""}catch(w){m=String(w)}p()}function F(){!d||(d=!1,document.removeEventListener("keydown",j,!0),t.SetVoiceHotkeyCapture(!1))}function j(M){if(M.preventDefault(),M.stopImmediatePropagation(),M.key==="Escape"){F(),m="",p();return}if(["Control","Alt","Shift","Meta"].includes(M.key))return;const P=[M.ctrlKey&&"Ctrl",M.altKey&&"Alt",M.shiftKey&&"Shift"].filter(Boolean);if(M.metaKey||!P.length){m="Use Ctrl, Alt, or Shift plus a letter, number, or function key.",p();return}P.push(M.key.toUpperCase()),O(s.enabled,P.join("+"))}function Fe(){return s.supported?`<div id="voiceHotkeySection" class="profile-section"><strong>Voice Channel Mute</strong><label class="profile-row">Enable <input id="voiceHotkeyEnabled" type="checkbox" ${s.enabled?"checked":""}></label><div class="profile-row">Shortcut <span>${s.shortcut}</span></div><button id="voiceHotkeyCapture" type="button" class="discord-secondary-button">${d?"Press shortcut (Escape cancels)":"Set Hotkey"}</button><button id="voiceHotkeyDefault" type="button" class="discord-secondary-button">Return to Default</button><p id="voiceHotkeyStatus" role="status"></p><p>Hold the shortcut to mute eligible lower-ranked channel members. Server permission is required.</p></div>`:'<div id="voiceHotkeySection" class="profile-section"><strong>Voice Channel Mute</strong><p>Global voice hotkeys require the Windows desktop client.</p></div>'}function Gt(M){var w,_,L;(w=M.querySelector("#voiceHotkeyEnabled"))==null||w.addEventListener("change",B=>void O(B.target.checked,s.shortcut)),(_=M.querySelector("#voiceHotkeyDefault"))==null||_.addEventListener("click",()=>void O(s.enabled,"Ctrl+M")),(L=M.querySelector("#voiceHotkeyCapture"))==null||L.addEventListener("click",async()=>{v(),d=!0,m="",await t.SetVoiceHotkeyCapture(!0),document.addEventListener("keydown",j,!0),p()});const P=M.querySelector("#voiceHotkeyStatus");P&&(P.textContent=m)}function $e(){F()}function St(){v(),F(),t.SetVoiceHotkeyActive(!1)}return{initialize:T,connection:S,render:Fe,wire:Gt,close:$e,stop:St}}const vr=["viewer","user","admin"],Un=t=>t==="user"||t==="admin",hs=t=>vr.includes(t),Mc=Un,Tc=new Set(["guildsync:request-users","guildsync:request-pending-users","guildsync:change-user","guildsync:save-admin-configuration","guildsync:save-raffle-bonus-settings"]),Cc=new Set(["guildsync:upload-savedvars-raw","guildsync:sending-banking-data","guildsync:sending-roster-data","guildsync:gsa-post-application","guildsync:eso-guild-application-message","guildsync:run-member-auto-linking","guildsync:request-discord-data-refresh"]);function Bc(t,e){return vr.includes(t)?qc(e)||Cc.has(e)?!0:Tc.has(e)?t==="admin":Un(t):!1}const Nc=new Set(["guildsync:client-version","guildsync:request-discord-data-date","guildsync:request-discord-member-dataJSON","guildsync:request-banking-data","guildsync:request-roster-data","guildsync:request-roster-member-notes","guildsync:request-banking-history-matches","guildsync:request-banking-history-records","guildsync:request-roster-rank-history","guildsync:request-roster-stream-history","guildsync:request-discord-member-history","guildsync:request-discord-member-history-events","guildsync:request-associate-ticket-report","guildsync:request-discord-rank-audit-report","guildsync:request-member-links","guildsync:request-member-link-options","guildsync:request-admin-configuration","guildsync:request-active-raffles","guildsync:request-raffle-archives"]),qc=t=>Nc.has(t);function xc(t={}){return(t.actual_role||t.role)!=="admin"?"":t.role!=="admin"?'<section class="profile-section profile-test-mode-section" aria-label="View Test Mode"><div class="profile-section-header">View Test Mode</div><div class="profile-role-view-spacer" aria-hidden="true"></div><button class="profile-role-view-button profile-role-view-return" type="button" data-role-view="admin">Return to Admin View</button></section>':'<section class="profile-section profile-test-mode-section" aria-label="View Test Mode"><div class="profile-section-header">View Test Mode</div><div class="profile-role-view-actions"><button class="profile-role-view-button profile-role-view-user" type="button" data-role-view="user" aria-label="View As User"><span>View As</span><span>User</span></button><button class="profile-role-view-button profile-role-view-viewer" type="button" data-role-view="viewer" aria-label="View As Viewer"><span>View As</span><span>Viewer</span></button></div></section>'}const Ge=t=>String(t!=null?t:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),dr=t=>!t.revoked_at&&(!Number(t.allowed)||t.role==="pending"),Ic=t=>{var e,n,r;return{allowed:Number(t.allowed),role:t.role,email:(e=t.email)!=null?e:"",guild_member_name:(n=t.guild_member_name)!=null?n:"",revoked_at:(r=t.revoked_at)!=null?r:null}};function Oc(t,e="all",n=""){const r=n.trim().toLowerCase();return t.filter(i=>(e==="revoked"?!!i.revoked_at:!i.revoked_at&&(e!=="pending"||dr(i)))&&(!r||[i.username,i.global_name,i.guild_member_name,i.email,i.discord_user_id,i.role].some(s=>String(s!=null?s:"").toLowerCase().includes(r))))}function Pc(t){return Number(t)>0?`<span class="user-pending-badge" aria-hidden="true">${Number(t)>99?"99+":Number(t)}</span>`:""}function Fc(t,e,n={}){var a,l,d,m,g;const r=t.discord_user_id===e,i=!!t.revoked_at,s=(a=n.role)!=null?a:vr.includes(t.role)?t.role:"viewer",o=Ge(t.discord_user_id);return`<form class="user-admin-card" data-user-id="${o}">
  <header><div><h3>${Ge(t.guild_member_name||t.global_name||t.username||t.discord_user_id)}${r?" (You)":""}</h3><p>${Ge(t.username)} \xB7 Discord ID: ${o}</p></div><span class="user-admin-status ${dr(t)?"is-pending":""}">${i?"Revoked":dr(t)?"Pending approval":"Approved"}</span></header>
  <fieldset class="user-admin-fields"><label>Email<input name="email" type="email" maxlength="255" value="${Ge((d=(l=n.email)!=null?l:t.email)!=null?d:"")}" placeholder="Not configured"></label>
   <label>Guild member name<input name="guild_member_name" maxlength="255" value="${Ge((g=(m=n.guild_member_name)!=null?m:t.guild_member_name)!=null?g:"")}" placeholder="ESO / guild display name"></label>
   ${r?`<div class="user-admin-own-role">Role: ${Ge(t.role)}<small>Your role cannot be changed here.</small></div>`:`<label>Role<select name="role">${vr.map(p=>`<option value="${p}" ${s===p?"selected":""}>${p[0].toUpperCase()+p.slice(1)}</option>`).join("")}</select></label>`}
  </fieldset>
  <p class="user-admin-dates">Requested: ${Ge(t.requested_at||"Not recorded")} \xB7 Last login: ${Ge(t.last_login_at||"Never")}${i?" \xB7 Revoked: "+Ge(t.revoked_at):""}</p>
  <div class="user-admin-actions">${i?r?"":'<button type="button" data-user-reinstate>Reinstate account</button><span>Restores access with the selected role. The user must sign in again.</span>':`<button type="submit">Save changes</button>${!r&&dr(t)?'<button type="button" data-user-approve>Approve account</button>':""}${r?"":'<button type="button" class="user-admin-remove" data-user-remove>Revoke account</button>'}`}</div>
 </form>`}function Gc({request:t,getUser:e,onCount:n=()=>{}}){let r=[],i=0,s=null,o=null,a=!1,l=!1,d="",m="all",g=0,p=0,A=null;const v=new Map,E=()=>{var w;return((w=e())==null?void 0:w.role)==="admin"},T=w=>{i=Math.max(0,Math.floor(Number(w)||0)),n(E()?i:0)},S=w=>{const _=o==null?void 0:o.querySelector("[data-user-admin-message]");_&&(_.textContent=w)},O=w=>{l=w,o==null||o.querySelectorAll("fieldset,[data-user-admin-refresh],.user-admin-actions button,.user-admin-confirmation button").forEach(_=>_.disabled=w)},F=async()=>{if(!E()){T(0);return}const w=g,_=p;try{const L=await t("guildsync:request-pending-users",{});w===g&&_===p&&E()&&(L==null?void 0:L.ok)&&T(L.pending_count)}catch{}},j=w=>{var B,ie;const _=new FormData(w),L={email:String((B=_.get("email"))!=null?B:""),guild_member_name:String((ie=_.get("guild_member_name"))!=null?ie:"")};return _.has("role")&&(L.role=String(_.get("role"))),L},Fe=async(w,_)=>{if(l||!E())return;const L=r.find(W=>W.discord_user_id===w.dataset.userId);if(!L)return;const B=g,ie={action:_,discord_user_id:L.discord_user_id,expected:Ic(L),..._==="revoke"?{}:j(w)};O(!0),S("Saving account changes...");try{const W=await t("guildsync:change-user",ie);if(!(W!=null&&W.ok))throw Error((W==null?void 0:W.message)||"Could not update this account.");if(B!==g||!E())return;v.delete(L.discord_user_id),W.user?r=r.map(Re=>Re.discord_user_id===L.discord_user_id?W.user:Re):W.removed&&(r=r.filter(Re=>Re.discord_user_id!==L.discord_user_id)),F(),$e(),S(_==="revoke"?"Account access revoked and login sessions cleared. The account record is retained.":_==="reinstate"?"Account reinstated. The user can sign in again.":_==="approve"?"Account approved. The user can sign in now.":"Account changes saved.")}catch(W){B===g&&S(W.message)}finally{B===g&&O(!1)}},Gt=w=>{var L;(L=o==null?void 0:o.querySelector(".user-admin-confirmation"))==null||L.remove();const _=document.createElement("div");_.className="user-admin-confirmation",_.innerHTML='<p>Revoke access and sign out this user? Their account and banking history will be retained. Their next Discord login will request approval again.</p><button type="button" data-confirm-remove>Revoke account</button><button type="button" data-cancel-remove>Cancel</button>',w.append(_),_.querySelector("[data-confirm-remove]").addEventListener("click",()=>void Fe(w,"revoke")),_.querySelector("[data-cancel-remove]").addEventListener("click",()=>_.remove()),_.querySelector("button").focus()};function $e(){if(!o)return;const w=o.querySelector(".user-admin-list"),_=w.scrollTop,L=Oc(r,m,d);w.innerHTML=L.map(B=>Fc(B,e().discord_user_id,v.get(B.discord_user_id))).join("")||"<p>No matching accounts.</p>",o.querySelector("[data-user-admin-count]").textContent=`${L.length} account${L.length===1?"":"s"} \xB7 ${i} pending`,w.querySelectorAll("[data-user-id]").forEach(B=>{var ie,W,Re;B.addEventListener("input",()=>v.set(B.dataset.userId,j(B))),B.addEventListener("submit",ir=>{var Rn;ir.preventDefault(),(Rn=r.find(or=>or.discord_user_id===B.dataset.userId))!=null&&Rn.revoked_at||Fe(B,"save")}),(ie=B.querySelector("[data-user-approve]"))==null||ie.addEventListener("click",()=>void Fe(B,"approve")),(W=B.querySelector("[data-user-remove]"))==null||W.addEventListener("click",()=>Gt(B)),(Re=B.querySelector("[data-user-reinstate]"))==null||Re.addEventListener("click",()=>void Fe(B,"reinstate"))}),w.scrollTop=_,O(l)}const St=async()=>{if(a||l||!E())return;a=!0,O(!0),S("Loading GuildSync accounts...");const w=g,_=p;try{const L=await t("guildsync:request-users",{include_revoked:!0});if(!(L!=null&&L.ok))throw Error((L==null?void 0:L.message)||"Could not load accounts.");if(w!==g||!E())return;r=L.users,v.clear(),_===p&&T(L.pending_count),$e(),S("Only admins can manage accounts. Your own role and account access are protected.")}catch(L){w===g&&S(L.message)}finally{w===g&&(a=!1,O(!1))}},M=()=>{l&&!a||(o==null||o.remove(),o=null,A!=null&&A.isConnected&&A.focus({preventScroll:!0}))};return{open:()=>{!E()||o||(A=document.activeElement,o=document.createElement("div"),o.className="user-admin-overlay",o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),o.setAttribute("aria-labelledby","userAdminTitle"),o.innerHTML='<section class="user-admin-dialog"><header class="user-admin-header"><div><h2 id="userAdminTitle">Manage GuildSync Users</h2><p>Review access requests and maintain GuildSync login records.</p></div><button type="button" data-user-admin-close aria-label="Close user administration">Close</button></header><p role="status" data-user-admin-message></p><div class="user-admin-toolbar"><label>Search accounts<input type="search" data-user-admin-search placeholder="Name, email, role, or Discord ID"></label><label>Show<select data-user-admin-filter><option value="all">Current accounts</option><option value="pending">Pending approval</option><option value="revoked">Revoked accounts</option></select></label><button type="button" data-user-admin-refresh>Refresh list (discard edits)</button><span data-user-admin-count></span></div><div class="user-admin-list"></div></section>',document.body.append(o),o.querySelector("[data-user-admin-search]").value=d,o.querySelector("[data-user-admin-filter]").value=m,o.querySelector("[data-user-admin-close]").addEventListener("click",M),o.querySelector("[data-user-admin-refresh]").addEventListener("click",()=>void St()),o.querySelector("[data-user-admin-search]").addEventListener("input",w=>{d=w.target.value,$e()}),o.querySelector("[data-user-admin-filter]").addEventListener("change",w=>{m=w.target.value,$e()}),o.addEventListener("keydown",w=>{if(w.key==="Escape"&&(w.preventDefault(),w.stopImmediatePropagation(),M()),w.key==="Tab"){const _=[...o.querySelectorAll("button,input,select")].filter(ie=>!ie.disabled&&ie.offsetParent!==null),L=_[0],B=_.at(-1);w.shiftKey&&document.activeElement===L?(w.preventDefault(),B==null||B.focus()):!w.shiftKey&&document.activeElement===B&&(w.preventDefault(),L==null||L.focus())}}),o.querySelector("[data-user-admin-close]").focus(),v.size?($e(),S("Unsaved edits restored. Refresh the list to discard them and retrieve current records.")):St())},close:M,refreshCount:F,get count(){return i},get isOpen(){return!!o},stop(){clearInterval(s),s=null},start(){clearInterval(s),E()&&(F(),s=setInterval(()=>void F(),6e4))},changed(w){!E()||(p++,T(w.pending_count),o&&S("Accounts changed. Refresh the list for current records; unsaved edits are preserved."))},reset(){g++,clearInterval(s),s=null,l=!1,a=!1,M(),r=[],v.clear(),d="",m="all",T(0)}}}function qo(t,e,n,r=()=>{}){if(!t||!e)return;const i=a=>{var l;return(l=a.getAttribute(n))!=null?l:"__empty__"},s=new Map(Array.from(t.children).map(a=>[i(a),a])),o=new Set;Array.from(e.children).forEach((a,l)=>{let d=s.get(i(a));if(!d)d=a.cloneNode(!0),r(d);else if(!d.isEqualNode(a)){for(const m of Array.from(d.attributes))a.hasAttribute(m.name)||d.removeAttribute(m.name);for(const m of Array.from(a.attributes))d.getAttribute(m.name)!==m.value&&d.setAttribute(m.name,m.value);for(Array.from(a.children).forEach((m,g)=>{const p=d.children[g];if(p!=null&&p.isEqualNode(m))return;const A=m.cloneNode(!0);p?p.replaceWith(A):d.append(A),r(A)});d.children.length>a.children.length;)d.lastElementChild.remove()}t.children[l]!==d&&t.insertBefore(d,t.children[l]||null),o.add(d)});for(const a of Array.from(t.children))o.has(a)||a.remove()}function Nn(t,e){t&&e&&!t.isEqualNode(e)&&(t.innerHTML=e.innerHTML)}function qn(t,e){t&&e&&t.textContent!==e.textContent&&(t.textContent=e.textContent)}const q=t=>String(t!=null?t:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Uc(){return{open:"",toggle(t){this.open=this.open===t?"":t},close(){this.open=""}}}function Oi(t,e){var n;return t.type==="boolean"?String(e).toLowerCase()===String(t.defaultValue).toLowerCase():t.type==="number"?String(e).trim()!==""&&Number(e)===Number(t.defaultValue):String(e!=null?e:"")===String((n=t.defaultValue)!=null?n:"")}function xo(t,e){const r=Object.hasOwn(e,t.key)?e[t.key]===null?t.defaultValue:e[t.key]:t.value,i=!Oi(t,r);return{value:r,override:i,source:i?"Overridden":"Default"}}function ur(t,e){return t.type==="boolean"?e===!0||String(e).toLowerCase()==="true"?"Enabled":"Disabled":t.type==="select"?{private_thread:"Private thread (public fallback)",channel:"Channel or thread"}[e]||String(e):e==null||e===""?"Not configured":String(e)}function Io(t,{body:e=!1}={}){const n={recipient:"@ExampleMember",account_name:"@ExampleMember",display_name:"@ExampleMember",amount:"10,001",deposit_amount:"10,001",raw_amount:"10001",raw_deposit_amount:"10001",event_id:"123456789",ticket_quantity:"20",tickets:"20",purchased_tickets:"20",bonus_percent:"20",bonus_tickets:"4",total_tickets:"24",bonus_deadline:"October 9, 2026 at 7:00 PM Eastern",bonus_block:`Early Purchase Bonus: 20% for purchases before October 9, 2026 at 7:00 PM ET.
Bonus Tickets: 4
Total Tickets: 24`,note:"",note_block:"",ticket_type:"Bi-Weekly",ticket_type_raw:"biweekly",transaction_type:"biweekly",ticket_gold_cost:"10,001",gold_cost:"10,001",raw_gold_cost:"10001",raw_ticket_gold_cost:"10001",purchase_date:"October 5, 2026",data_source:"Guild bank",event_datetime:"2026-10-05T12:00:00Z",event_timestamp:"1791201600",raffle_datetime_eastern:"October 10, 2026 at 8:00 PM Eastern",raffle_date_time_eastern:"October 10, 2026 at 8:00 PM Eastern",raffle_datetime:"October 10, 2026 at 8:00 PM Eastern",mail_request_id:"example",mail_batch_id:"example"},r=String(t).replace(/{([a-zA-Z0-9_]+)}/g,(i,s)=>{var o;return(o=n[s])!=null?o:i});return e&&!String(t).includes("{bonus_block}")?r+`

`+n.bonus_block:r}function ps(t,{refresh:e=!1,root:n=document}={}){const r=()=>{for(const o of document.querySelectorAll("[data-report-toggle]")){const a=o.dataset.reportToggle===t.open;o.setAttribute("aria-expanded",String(a));const l=document.getElementById(o.getAttribute("aria-controls"));l&&(l.classList.toggle("is-open",a),l.inert=!a)}};for(const o of n.querySelectorAll("[data-report-toggle]"))o.addEventListener("click",()=>{t.toggle(o.dataset.reportToggle),r()});for(const o of n.querySelectorAll('.reports-panel .report-run-button:not([type="submit"])'))o.addEventListener("click",()=>{t.close(),r()});const i=e?Array.from(document.querySelectorAll(".report-section-content")):[],s=i.map(o=>o.style.transition);for(const o of i)o.style.transition="none";r();for(const o of i)o.offsetHeight;i.forEach((o,a)=>o.style.transition=s[a])}const ui=t=>t.type==="boolean"||t.type==="select"&&t.options.length===2;function Hc(t,e){return ur(t,e)+(ui(t)&&Oi(t,e)?" (Default)":"")}function Vc({canEdit:t=()=>!1}={}){let e=null,n={},r=!1,i="",s=!1;const o=(d,m)=>{if(!t())return`<output class="configuration-readonly-value" id="config-${q(d.key)}" aria-describedby="config-help-${q(d.key)}">${q(ur(d,m.value))}</output>`;const g=`data-config-value="${q(d.key)}" id="config-${q(d.key)}" aria-describedby="config-help-${q(d.key)}" `;if(d.type==="boolean"||d.type==="select"){const p=d.type==="boolean"?["true","false"]:d.options;return`<select ${g}>${p.map(A=>`<option value="${q(A)}" ${String(A)===String(m.value)?"selected":""}>${q(Hc(d,A))}</option>`).join("")}</select>`}return d.type==="template"?`<textarea ${g} rows="${d.key.includes("BODY")?9:3}" maxlength="${d.maxLength}">${q(m.value)}</textarea>`:`<input ${g} type="${d.type==="number"?"number":"text"}" ${d.type==="number"?`min="${d.min}" max="${d.max}" step="any"`:""} value="${q(m.value)}" placeholder="Not configured">`};return{render:()=>{const d=t(),m=e?[...new Set(e.settings.map(g=>g.group))]:[];return`<article class="report-option-card admin-configuration-card"><div class="report-option-copy">
   <h3><button type="button" class="report-section-toggle" data-report-toggle="configuration" aria-expanded="false" aria-controls="adminConfigurationContent">Administrator Configuration <span aria-hidden="true">\u25BE</span></button></h3>
   <div id="adminConfigurationContent" class="report-section-content" inert><div class="report-section-inner">
   ${d?"<p>Edit any setting to override its default. Changes take effect only after Save. Choose the option marked (Default) to restore a two-choice setting, or use Return to default for other fields. Settings apply live; active deliveries finish safely.</p>":'<p class="configuration-readonly-notice">Read-only. You can view current settings and defaults. Admin access is required to change Administrator Configuration or raffle bonus settings.</p>'}
   <p role="status" class="configuration-status">${q(i)}</p>
   ${e?`
   ${e.botDefaultsReported?"":"<p>Bot defaults have not been reported yet. Connect the updated bot before editing its settings.</p>"}
   <form id="adminConfigurationForm">
    ${m.map((g,p)=>{const A=e.settings.filter(E=>E.group===g),v=[...new Set(A.map(E=>E.section||""))];return`<fieldset class="configuration-group" ${s?"disabled":""}><legend>${q(g)}</legend>
      ${v.map((E,T)=>`<section class="configuration-subgroup" ${E?`aria-labelledby="config-section-${p}-${T}"`:""}>
       ${E?`<h4 id="config-section-${p}-${T}">${q(E)}</h4>`:""}
       ${A.filter(S=>(S.section||"")===E).map(S=>{const O=xo(S,d?n:{});return`<div class="configuration-setting" role="group" aria-labelledby="config-label-${q(S.key)}">
         <div class="configuration-setting-header"><label id="config-label-${q(S.key)}" for="config-${q(S.key)}">${q(S.label)}</label><span class="configuration-source" data-config-source="${q(S.key)}">${q(O.source)}</span></div>
         <small class="configuration-env-key">.env: <code>${q(S.key)}</code></small>
         <p class="configuration-help" id="config-help-${q(S.key)}">${q(S.help||"Changes this setting after you save the configuration.")}</p>
         <div class="configuration-values${d&&ui(S)?" configuration-two-options":""}">
          <div class="configuration-selected-value"><span>${d?"Current selection":"Current value"}</span>${o(S,O)}</div>
          ${d&&ui(S)?"":`<div class="configuration-default-value"><span>Default value</span><output>${q(ur(S,S.defaultValue))}</output>${d?`<button type="button" class="configuration-default" data-config-default="${q(S.key)}" aria-label="Return ${q(S.label)} to default: ${q(ur(S,S.defaultValue))}">Return to default</button>`:""}</div>`}
         </div>
         ${S.placeholders?`<small>Placeholders: ${S.placeholders.map(F=>q("{"+F+"}")).join(", ")}</small>`:""}
         ${S.group==="Receipt messages"?`<label>Example preview (20% bonus)<pre data-config-preview="${q(S.key)}">${q(Io(O.value,{body:S.key.endsWith("BODY_TEMPLATE")}))}</pre></label>`:""}
        </div>`}).join("")}
      </section>`).join("")}
     </fieldset>`}).join("")}
    <div class="configuration-actions">${d?`<button type="submit" ${s?"disabled":""}>${s?"Saving...":"Save Configuration"}</button>`:""}<button type="button" id="reloadAdminConfiguration" ${s?"disabled":""}>${d?"Discard edits and reload":"Refresh configuration"}</button></div>
   </form>`:`<p>${r?"Loading configuration...":"Configuration is not loaded."}</p><button type="button" id="reloadAdminConfiguration">Load configuration</button>`}
   </div></div></div></article>`},wire:({request:d,rerender:m})=>{var p,A;const g=async()=>{if(!r){r=!0,i="";try{const v=await d("guildsync:request-admin-configuration",{});if(!(v!=null&&v.ok))throw Error((v==null?void 0:v.message)||"Could not load configuration.");e=v.configuration,n={}}catch(v){i=v.message}finally{r=!1,m()}}};if(!e&&!r&&!i&&g(),(p=document.getElementById("reloadAdminConfiguration"))==null||p.addEventListener("click",()=>void g()),!!t()){for(const v of document.querySelectorAll("[data-config-value]"))v.addEventListener("input",()=>{if(!t())return;const E=v.dataset.configValue,T=e.settings.find(F=>F.key===E);n[E]=Oi(T,v.value)?null:v.value;const S=document.querySelector(`[data-config-source="${E}"]`);S&&(S.textContent=xo(T,n).source);const O=document.querySelector(`[data-config-preview="${E}"]`);O&&(O.textContent=Io(v.value,{body:E.endsWith("BODY_TEMPLATE")}))});for(const v of document.querySelectorAll("[data-config-default]"))v.addEventListener("click",()=>{!t()||(n[v.dataset.configDefault]=null,m())});(A=document.getElementById("adminConfigurationForm"))==null||A.addEventListener("submit",async v=>{var T;if(v.preventDefault(),!t()||s)return;if(!Object.keys(n).length){i="No changes to save.",m();return}s=!0,i="";const E={...n};m(),(T=document.getElementById("adminConfigurationForm"))==null||T.querySelectorAll("input,select,textarea,button").forEach(S=>S.disabled=!0);try{const S=await d("guildsync:save-admin-configuration",{revision:e.revision,changes:E});if(!(S!=null&&S.ok))throw Error((S==null?void 0:S.message)||"Could not save configuration.");e=S.configuration,n={},i="Configuration saved. Backend settings are active; the connected bot applies its settings after active deliveries finish. An offline bot applies them when it reconnects."}catch(S){i=S.message}finally{s=!1,m()}})}},clear(){e=null,n={},i=""}}}const Wc="/assets/splash.ea386b6a.png",jc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",zc="/assets/GuildSync-Graphic.9169020d.png",Ie=Object.create(null);Ie.open="0";Ie.close="1";Ie.ping="2";Ie.pong="3";Ie.message="4";Ie.upgrade="5";Ie.noop="6";const fr=Object.create(null);Object.keys(Ie).forEach(t=>{fr[Ie[t]]=t});const fi={type:"error",data:"parser error"},ms=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",gs=typeof ArrayBuffer=="function",ys=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Pi=({type:t,data:e},n,r)=>ms&&e instanceof Blob?n?r(e):Oo(e,r):gs&&(e instanceof ArrayBuffer||ys(e))?n?r(e):Oo(new Blob([e]),r):r(Ie[t]+(e||"")),Oo=(t,e)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];e("b"+(r||""))},n.readAsDataURL(t)};function Po(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let Zr;function Yc(t,e){if(ms&&t.data instanceof Blob)return t.data.arrayBuffer().then(Po).then(e);if(gs&&(t.data instanceof ArrayBuffer||ys(t.data)))return e(Po(t.data));Pi(t,!1,n=>{Zr||(Zr=new TextEncoder),e(Zr.encode(n))})}const Fo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",xn=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<Fo.length;t++)xn[Fo.charCodeAt(t)]=t;const Kc=t=>{let e=t.length*.75,n=t.length,r,i=0,s,o,a,l;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const d=new ArrayBuffer(e),m=new Uint8Array(d);for(r=0;r<n;r+=4)s=xn[t.charCodeAt(r)],o=xn[t.charCodeAt(r+1)],a=xn[t.charCodeAt(r+2)],l=xn[t.charCodeAt(r+3)],m[i++]=s<<2|o>>4,m[i++]=(o&15)<<4|a>>2,m[i++]=(a&3)<<6|l&63;return d},Jc=typeof ArrayBuffer=="function",Fi=(t,e)=>{if(typeof t!="string")return{type:"message",data:bs(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:Qc(t.substring(1),e)}:fr[n]?t.length>1?{type:fr[n],data:t.substring(1)}:{type:fr[n]}:fi},Qc=(t,e)=>{if(Jc){const n=Kc(t);return bs(n,e)}else return{base64:!0,data:t}},bs=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},ks=String.fromCharCode(30),Xc=(t,e)=>{const n=t.length,r=new Array(n);let i=0;t.forEach((s,o)=>{Pi(s,!1,a=>{r[o]=a,++i===n&&e(r.join(ks))})})},Zc=(t,e)=>{const n=t.split(ks),r=[];for(let i=0;i<n.length;i++){const s=Fi(n[i],e);if(r.push(s),s.type==="error")break}return r};function el(){return new TransformStream({transform(t,e){Yc(t,n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,r)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(r))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(n)})}})}let ei;function sr(t){return t.reduce((e,n)=>e+n.length,0)}function ar(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let r=0;for(let i=0;i<e;i++)n[i]=t[0][r++],r===t[0].length&&(t.shift(),r=0);return t.length&&r<t[0].length&&(t[0]=t[0].slice(r)),n}function tl(t,e){ei||(ei=new TextDecoder);const n=[];let r=0,i=-1,s=!1;return new TransformStream({transform(o,a){for(n.push(o);;){if(r===0){if(sr(n)<1)break;const l=ar(n,1);s=(l[0]&128)===128,i=l[0]&127,i<126?r=3:i===126?r=1:r=2}else if(r===1){if(sr(n)<2)break;const l=ar(n,2);i=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),r=3}else if(r===2){if(sr(n)<8)break;const l=ar(n,8),d=new DataView(l.buffer,l.byteOffset,l.length),m=d.getUint32(0);if(m>Math.pow(2,53-32)-1){a.enqueue(fi);break}i=m*Math.pow(2,32)+d.getUint32(4),r=3}else{if(sr(n)<i)break;const l=ar(n,i);a.enqueue(Fi(s?l:ei.decode(l),e)),r=0}if(i===0||i>t){a.enqueue(fi);break}}}})}const vs=4;function H(t){if(t)return nl(t)}function nl(t){for(var e in H.prototype)t[e]=H.prototype[e];return t}H.prototype.on=H.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};H.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};H.prototype.off=H.prototype.removeListener=H.prototype.removeAllListeners=H.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===e||r.fn===e){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+t],this};H.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,e)}return this};H.prototype.emitReserved=H.prototype.emit;H.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};H.prototype.hasListeners=function(t){return!!this.listeners(t).length};const qr=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0))(),le=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),rl="arraybuffer";function Ss(t,...e){return e.reduce((n,r)=>(t.hasOwnProperty(r)&&(n[r]=t[r]),n),{})}const il=le.setTimeout,ol=le.clearTimeout;function xr(t,e){e.useNativeTimers?(t.setTimeoutFn=il.bind(le),t.clearTimeoutFn=ol.bind(le)):(t.setTimeoutFn=le.setTimeout.bind(le),t.clearTimeoutFn=le.clearTimeout.bind(le))}const sl=1.33;function al(t){return typeof t=="string"?cl(t):Math.ceil((t.byteLength||t.size)*sl)}function cl(t){let e=0,n=0;for(let r=0,i=t.length;r<i;r++)e=t.charCodeAt(r),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(r++,n+=4);return n}function ws(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function ll(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function dl(t){let e={},n=t.split("&");for(let r=0,i=n.length;r<i;r++){let s=n[r].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class ul extends Error{constructor(e,n,r){super(e),this.description=n,this.context=r,this.type="TransportError"}}class Gi extends H{constructor(e){super(),this.writable=!1,xr(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,r){return super.emitReserved("error",new ul(e,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=Fi(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=ll(e);return n.length?"?"+n:""}}class fl extends Gi{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};Zc(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Xc(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=ws()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let _s=!1;try{_s=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const hl=_s;function pl(){}class ml extends fl{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let r=location.port;r||(r=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,n){const r=this.request({method:"POST",data:e});r.on("success",n),r.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=e}}class Te extends H{constructor(e,n,r){super(),this.createRequest=e,xr(this,r),this._opts=r,this._method=r.method||"GET",this._uri=n,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const n=Ss(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(n);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var i;r.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=Te.requestsCount++,Te.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=pl,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Te.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Te.requestsCount=0;Te.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Go);else if(typeof addEventListener=="function"){const t="onpagehide"in le?"pagehide":"unload";addEventListener(t,Go,!1)}}function Go(){for(let t in Te.requests)Te.requests.hasOwnProperty(t)&&Te.requests[t].abort()}const gl=function(){const t=As({xdomain:!1});return t&&t.responseType!==null}();class yl extends ml{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=gl&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Te(As,this.uri(),e)}}function As(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||hl))return new XMLHttpRequest}catch{}if(!e)try{return new le[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Ls=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class bl extends Gi{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,r=Ls?{}:Ss(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;Pi(r,this.supportsBinary,s=>{try{this.doWrite(r,s)}catch{}i&&qr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=ws()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const ti=le.WebSocket||le.MozWebSocket;class kl extends bl{createSocket(e,n,r){return Ls?new ti(e,n,r):n?new ti(e,n):new ti(e)}doWrite(e,n){this.ws.send(n)}}class vl extends Gi{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=tl(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(n).getReader(),i=el();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const s=()=>{r.read().then(({done:a,value:l})=>{a||(this.onPacket(l),s())}).catch(a=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;this._writer.write(r).then(()=>{i&&qr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Sl={websocket:kl,webtransport:vl,polling:yl},wl=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,_l=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function hi(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),r=t.indexOf("]");n!=-1&&r!=-1&&(t=t.substring(0,n)+t.substring(n,r).replace(/:/g,";")+t.substring(r,t.length));let i=wl.exec(t||""),s={},o=14;for(;o--;)s[_l[o]]=i[o]||"";return n!=-1&&r!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=Al(s,s.path),s.queryKey=Ll(s,s.query),s}function Al(t,e){const n=/\/{2,9}/g,r=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function Ll(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,s){i&&(n[i]=s)}),n}const pi=typeof addEventListener=="function"&&typeof removeEventListener=="function",hr=[];pi&&addEventListener("offline",()=>{hr.forEach(t=>t())},!1);class at extends H{constructor(e,n){if(super(),this.binaryType=rl,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const r=hi(e);n.hostname=r.host,n.secure=r.protocol==="https"||r.protocol==="wss",n.port=r.port,r.query&&(n.query=r.query)}else n.host&&(n.hostname=hi(n.host).host);xr(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(r=>{const i=r.prototype.name;this.transports.push(i),this._transportsByName[i]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=dl(this.opts.query)),pi&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},hr.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=vs,n.transport=e,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&at.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",at.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(n+=al(i)),r>0&&n>this._maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,qr(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,r){return this._sendPacket("message",e,n,r),this}send(e,n,r){return this._sendPacket("message",e,n,r),this}_sendPacket(e,n,r,i){if(typeof n=="function"&&(i=n,n=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const s={type:e,data:n,options:r};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(at.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),pi&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=hr.indexOf(this._offlineEventListener);r!==-1&&hr.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}}at.protocol=vs;class El extends at{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let n=this.createTransport(e),r=!1;at.priorWebsocketSuccess=!1;const i=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",g=>{if(!r)if(g.type==="pong"&&g.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;at.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(m(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const p=new Error("probe error");p.transport=n.name,this.emitReserved("upgradeError",p)}}))};function s(){r||(r=!0,m(),n.close(),n=null)}const o=g=>{const p=new Error("probe error: "+g);p.transport=n.name,s(),this.emitReserved("upgradeError",p)};function a(){o("transport closed")}function l(){o("socket closed")}function d(g){n&&g.name!==n.name&&s()}const m=()=>{n.removeListener("open",i),n.removeListener("error",o),n.removeListener("close",a),this.off("close",l),this.off("upgrading",d)};n.once("open",i),n.once("error",o),n.once("close",a),this.once("close",l),this.once("upgrading",d),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const n=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&n.push(e[r]);return n}}class $l extends El{constructor(e,n={}){const r=typeof e=="object"?e:n;(!r.transports||r.transports&&typeof r.transports[0]=="string")&&(r.transports=(r.transports||["polling","websocket","webtransport"]).map(i=>Sl[i]).filter(i=>!!i)),super(e,r)}}function Rl(t,e="",n){let r=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),r=hi(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const s=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+s+":"+r.port+e,r.href=r.protocol+"://"+s+(n&&n.port===r.port?"":":"+r.port),r}const Dl=typeof ArrayBuffer=="function",Ml=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,Es=Object.prototype.toString,Tl=typeof Blob=="function"||typeof Blob<"u"&&Es.call(Blob)==="[object BlobConstructor]",Cl=typeof File=="function"||typeof File<"u"&&Es.call(File)==="[object FileConstructor]";function Ui(t){return Dl&&(t instanceof ArrayBuffer||Ml(t))||Tl&&t instanceof Blob||Cl&&t instanceof File}function pr(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,r=t.length;n<r;n++)if(pr(t[n]))return!0;return!1}if(Ui(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return pr(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&pr(t[n]))return!0;return!1}function Bl(t){const e=[],n=t.data,r=t;return r.data=mi(n,e),r.attachments=e.length,{packet:r,buffers:e}}function mi(t,e){if(!t)return t;if(Ui(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let r=0;r<t.length;r++)n[r]=mi(t[r],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=mi(t[r],e));return n}return t}function Nl(t,e){return t.data=gi(t.data,e),delete t.attachments,t}function gi(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=gi(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=gi(t[n],e));return t}const $s=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],ql=5;var R;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(R||(R={}));class xl{constructor(e){this.replacer=e}encode(e){return(e.type===R.EVENT||e.type===R.ACK)&&pr(e)?this.encodeAsBinary({type:e.type===R.EVENT?R.BINARY_EVENT:R.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===R.BINARY_EVENT||e.type===R.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=Bl(e),r=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(r),i}}class Hi extends H{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const r=n.type===R.BINARY_EVENT;r||n.type===R.BINARY_ACK?(n.type=r?R.EVENT:R.ACK,this.reconstructor=new Il(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(Ui(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const r={type:Number(e.charAt(0))};if(R[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===R.BINARY_EVENT||r.type===R.BINARY_ACK){const s=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(s,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!Rs(a)||a<0)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=a}if(e.charAt(n+1)==="/"){const s=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););r.nsp=e.substring(s,n)}else r.nsp="/";const i=e.charAt(n+1);if(i!==""&&Number(i)==i){const s=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}r.id=Number(e.substring(s,n+1))}if(e.charAt(++n)){const s=this.tryParse(e.substr(n));if(Hi.isPayloadValid(r.type,s))r.data=s;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case R.CONNECT:return Sr(n);case R.DISCONNECT:return n===void 0;case R.CONNECT_ERROR:return typeof n=="string"||Sr(n);case R.EVENT:case R.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&$s.indexOf(n[0])===-1);case R.ACK:case R.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Il{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=Nl(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Ol(t){return typeof t=="string"}const Rs=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function Pl(t){return t===void 0||Rs(t)}function Sr(t){return Object.prototype.toString.call(t)==="[object Object]"}function Fl(t,e){switch(t){case R.CONNECT:return e===void 0||Sr(e);case R.DISCONNECT:return e===void 0;case R.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&$s.indexOf(e[0])===-1);case R.ACK:return Array.isArray(e);case R.CONNECT_ERROR:return typeof e=="string"||Sr(e);default:return!1}}function Gl(t){return Ol(t.nsp)&&Pl(t.id)&&Fl(t.type,t.data)}const Ul=Object.freeze(Object.defineProperty({__proto__:null,protocol:ql,get PacketType(){return R},Encoder:xl,Decoder:Hi,isPacketValid:Gl},Symbol.toStringTag,{value:"Module"}));function me(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const Hl=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Ds extends H{constructor(e,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[me(e,"open",this.onopen.bind(this)),me(e,"packet",this.onpacket.bind(this)),me(e,"error",this.onerror.bind(this)),me(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var r,i,s;if(Hl.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const o={type:R.EVENT,data:n};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const m=this.ids++,g=n.pop();this._registerAckCallback(m,g),o.id=m}const a=(i=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||i===void 0?void 0:i.writable,l=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!a||(l?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,n){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[e]=n;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);n.call(this,new Error("operation has timed out"))},i),o=(...a)=>{this.io.clearTimeoutFn(s),n.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...n){return new Promise((r,i)=>{const s=(o,a)=>o?i(o):r(a);s.withError=!0,n.push(s),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>(this._queue[0],i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(i)):(this._queue.shift(),n&&n(null,...s)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:R.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case R.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case R.EVENT:case R.BINARY_EVENT:this.onevent(e);break;case R.ACK:case R.BINARY_ACK:this.onack(e);break;case R.DISCONNECT:this.ondisconnect();break;case R.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let r=!1;return function(...i){r||(r=!0,n.packet({type:R.ACK,id:e,data:i}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:R.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,e.data)}}}function mn(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}mn.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-n:t+n}return Math.min(t,this.max)|0};mn.prototype.reset=function(){this.attempts=0};mn.prototype.setMin=function(t){this.ms=t};mn.prototype.setMax=function(t){this.max=t};mn.prototype.setJitter=function(t){this.jitter=t};class yi extends H{constructor(e,n){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,xr(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new mn({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const i=n.parser||Ul;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new $l(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=me(n,"open",function(){r.onopen(),e&&e()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=me(n,"error",s);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),n.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(me(e,"ping",this.onping.bind(this)),me(e,"data",this.ondata.bind(this)),me(e,"error",this.onerror.bind(this)),me(e,"close",this.onclose.bind(this)),me(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){qr(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new Ds(this,e,n),this.nsps[e]=r),r}_destroy(e){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let r=0;r<n.length;r++)this.engine.write(n[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Dn={};function mr(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=Rl(t,e.path||"/socket.io"),r=n.source,i=n.id,s=n.path,o=Dn[i]&&s in Dn[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let l;return a?l=new yi(r,e):(Dn[i]||(Dn[i]=new yi(r,e)),l=Dn[i]),n.query&&!e.query&&(e.query=n.queryKey),l.socket(n.path,e)}Object.assign(mr,{Manager:yi,Socket:Ds,io:mr,connect:mr});function Vl(t){return window.go.main.App.CleanupDepositMailAckFromGuildSyncBanking(t)}function Wl(){return window.go.main.App.CloseWindow()}function jl(t){return window.go.main.App.CollectDepositMailAckFromGuildSyncBanking(t)}function zl(t){return window.go.main.App.CollectGuildSyncApplicationsData(t)}function Yl(t){return window.go.main.App.CollectGuildSyncBankingData(t)}function Kl(t){return window.go.main.App.CollectGuildSyncRosterData(t)}function Jl(t,e){return window.go.main.App.CommitGuildSyncApplicationsData(t,e)}function Ql(t,e){return window.go.main.App.CommitGuildSyncBankingData(t,e)}function Xl(t,e){return window.go.main.App.CommitGuildSyncRosterData(t,e)}function Zl(){return window.go.main.App.FlushPendingDepositMailAckCleanup()}function ed(){return window.go.main.App.GetESORunningStatus()}function td(){return window.go.main.App.GetGuildSyncFileWatcherStatus()}function nd(){return window.go.main.App.GetGuildSyncSession()}function rd(){return window.go.main.App.LogoutGuildSync()}function id(){return window.go.main.App.MaximizeWindow()}function od(){return window.go.main.App.MinimizeWindow()}function Ms(){return window.go.main.App.SaveWindowState()}function sd(t,e){return window.go.main.App.SetGuildSyncSavedVarsWatchFileEnabled(t,e)}function ad(){return window.go.main.App.ShowMainWindow()}function cd(){return window.go.main.App.StartDiscordLogin()}function ld(){return window.go.main.App.StartGuildSyncFileWatcher()}function dd(){return window.go.main.App.StopGuildSyncFileWatcher()}function ud(t){return window.go.main.App.WriteDepositMailToGuildSyncBanking(t)}function fd(t,e,n){return window.runtime.EventsOnMultiple(t,e,n)}function Ut(t,e){return fd(t,e,-1)}function hd(t){window.runtime.BrowserOpenURL(t)}const Ir="1.3.3",pd=30*60*1e3,Ts="guildsync-pending-banking-uploads",Cs="guildsync-pending-deposit-mail",md=5e3,gd=30*1e3,Bs="guildsync-pending-roster-uploads",Ns="guildsync-pending-applications-uploads",b=60*1e3,qs=7e3,xs=1400,Is=2400,yd=4e3,bd=38,Os=document.querySelector("#app");let Uo=null,Mn=null,Ho=!1,gn=!1;const Se=Gc({request:(t,e)=>D(t,e,3e4),getUser:()=>k.user,onCount:ko});let gr=null,ni=!1,ri=!1,ii=!1,ct=null,oe={running:!1,message:""},Ht=null,Vt=null,bi=!1,Wt=!1,jt=null,oi=!1,yt=new Map,_t=new Map,Q="",Nt=!1,qt=!1,In=[],k={logged_in:!1,allowed:!1,status_message:""},et={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},u=null;const Oe=Dc({bridge:new Proxy({},{get:(t,e)=>(...n)=>window.go.main.App[e](...n)}),eventsOn:Ut,getSocket:()=>u,authenticated:()=>V(),changed:()=>{if(!gn)return;const t=document.querySelector("#discordProfileMenu"),e=t==null?void 0:t.querySelector("#voiceHotkeySection");if(!e)return;const n=t.scrollTop;e.outerHTML=Oe.render(),Oe.wire(t),t.scrollTop=n}});window.addEventListener("pagehide",()=>Oe.stop());let se=[],Or=[],Pr=null,en=!1,wr=!1,_r="",zt=new Set,Yt=new Set,Hn="username",Lt="asc",ki=null,vi=null,fe=[],Ar=null,Ke=!1,Si=!1,Lr="",wi=null,_i=null,Et=new Set,Kt=new Set,Ve="",re="",z=-1,tn=!1,Vn="",de=[],bt="",lt=[],dt=!1,je="",si=null,ge=-1,yn=!1,Wn="",ut=[],Er=!1,$t=!1,ft="",nn="",rn=!1,tt="",ue=[],on="",xt="",ht=[],pt=!1,ze="",Vo=null,wt=0;const kd=650;let ye=-1,bn=!1,kn=[],nt=!1,Rt="",vn=!1,jn=[],rt=!1,Dt="",vt=!1,Vi=[],it=!1,Mt="",Sn="",ot="",Jt="",st="",N=[],K=!1,te="",Xe=!1,Fr="",At="",Qn="",Xn="",We=-1,Ze=!1,C=null,Tt=[],sn=!1,Je="",Zn="",De=-1,wn=!1,Wi=null,On=null;const ji=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let ae=[],X=null,Me=null,ke=!1;const Ps=Uc(),zi=Vc({canEdit:()=>{var t;return((t=k==null?void 0:k.user)==null?void 0:t.role)==="admin"}});let an=[],Ye="",Wo=!1,G="biweekly",Fs=null,Qe=!1,Ct=!1,Ae="biweekly",Ft=!1,cn=!1,Ue="",He=null,Y={targetType:"other",note:"",tickets:""},_n=!1,It="",ee=[],we=[],Ce="",Be=!1,Ne="",Qt=null,be=-1,qe=!1,$r=!1,ce="",x={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},An="",Z=-1,ve=!1,Ai={biweekly:0,monthly:0};const vd=1780786800,kt=14*24*60*60,Rr=60*60,Dr=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let I=Dr[0].id;const Li=new Set;function Sd(){Os.innerHTML=`
    <main class="splash-screen">
      <img src="${Wc}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await ad(),await wd(),Gs(),Gn(),await Bt()},5e3)}async function wd(){try{k=await nd()}catch(t){k={logged_in:!1,allowed:!1,status_message:""},y("session-error",$(t),{ttlMs:b})}}function Gs(){Os.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${jc}" alt="" class="title-icon" />
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
            <img src="${zc}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${c(Ir)}</div>
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await od()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await Ms(),await Wl()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await id()}),Fn(),Ii(),js(),mc(),xa(),Qa(),Zs(),Na(),Aa(),La(),Ea(),$a(),ha(),Ia(),Dd(),mt(),pn(),Ho||(window.addEventListener("resize",()=>{Rc(),Ec()}),tp(),Ho=!0)}function Us(){return Dr.map(t=>{const e=t.id===I,n=_d(t.id,e),r=n?Hs():0,i=n?`Deposit mail needs attention: ${r} item${r===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${n?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${h(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${h(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${Ad(t.icon)}</span>
          <span class="guildsync-tab-label">${c(t.label)}</span>
          ${n?`<span class="guildsync-tab-mail-badge" aria-label="${h(i)}">${r>99?"99+":c(String(r))}</span>`:""}
        </button>
      `}).join("")}function Hs(){return J()?Wr()+nr()+Ya():0}function _d(t,e){return t!=="more"||e?!1:Hs()>0}function Ad(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function Vs(){const t=Dr.find(n=>n.id===I)||Dr[0];let e="";return t.id==="discord-members"?e=zs():t.id==="eso-members"?e=Ys():t.id==="more"?e=za():t.id==="settings"?e=eu():e=`
      <div class="guildsync-tab-panel" data-active-tab="${h(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${c(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${qe?of():""}
    ${Ft?Pf():""}
    ${_n?Rf():""}
    ${Ze?Ku():""}
    ${bn?nu():""}
    ${vn?cu():""}
    ${vt?fu():""}
    ${Xe?Au():""}
    ${wn?Rd():""}
  `}function Ld(){return Se.isOpen||wn||tn||rn||qe||Ft||_n||Ze||yn||bn||vn||vt||Xe||Ct}function Ed(){return wn?!1:Xe?(Ti(),!0):vt?(Mi(),!0):vn?(Di(),!0):bn?(Ri(),!0):Ze?(dn(),!0):yn?(Ni(),!0):Ft?(Cr(),!0):_n?(Hf(),f(),!0):qe?(qe=!1,f(),!0):tn?(tn=!1,f(),!0):rn?(rn=!1,f(),!0):Ct?(Ct=!1,f(),!0):!1}function $d(t){t.key==="Escape"&&Ed()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",$d,!0),window.guildSyncGlobalModalEscapeAttached=!0);function Yi(t={}){return new Promise(e=>{On&&On(!1),wn=!0,Wi={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},On=e,f()})}function Mr(t=!1){const e=On;On=null,wn=!1,Wi=null,e&&e(t===!0),f()}function Rd(){const t=Wi||{};return`
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
          <button id="acceptGuildSyncConfirmButton" class="guildsync-confirm-button guildsync-confirm-accept ${h(t.confirmClass||"danger")}" type="button">${c(t.confirmLabel||"Confirm")}</button>
        </div>
      </div>
    </div>
  `}function jo(t){var r,i,s,o;const e=(i=(r=t.target).closest)==null?void 0:i.call(r,"#cancelGuildSyncConfirmButton"),n=(o=(s=t.target).closest)==null?void 0:o.call(s,"#acceptGuildSyncConfirmButton");if(!(!e&&!n)){if(t.preventDefault(),t.stopPropagation(),e){Mr(!1);return}n&&Mr(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",jo,!0),document.addEventListener("pointerup",jo,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function Dd(){if(!wn)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=r=>{r.preventDefault(),r.stopPropagation(),Mr(!1)}),e&&(e.onclick=r=>{r.preventDefault(),r.stopPropagation(),Mr(!0)});const n=document.querySelector(".guildsync-confirm-overlay");n&&(n.onclick=r=>{r.target===n&&(r.preventDefault(),r.stopPropagation())})}function Ws(t=I){if(!(u!=null&&u.connected))return;if(t==="discord-members"?en:t==="eso-members"?Ke:t==="more"?Qe:!1){Li.add(t);return}Li.delete(t),t==="discord-members"&&zn({silent:!0}),t==="eso-members"&&(Si=!0,Ln({silent:!0})),t==="more"&&pe({silent:!0})}function er(t){Li.has(t)&&Ws(t)}function js(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(Ld())return;const e=t.dataset.tabId;if(!e)return;const n=e!==I;I=e,Ws(),n&&f()})})}function Md(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function Ki(t){const e={x:window.scrollX,y:window.scrollY},n=[];for(let o=t;o;o=o.parentElement)n.push({element:o,top:o.scrollTop,left:o.scrollLeft});const r=t?Array.from(t.querySelectorAll("*")):[],i=(o,a)=>o.id?o.id===a.id:o.tagName===a.tagName&&o.className===a.className,s=r.filter(o=>o.scrollTop||o.scrollLeft).map(o=>({identity:{id:o.id,tagName:o.tagName,className:o.className},occurrence:r.filter(a=>i(o,a)).indexOf(o),top:o.scrollTop,left:o.scrollLeft}));return()=>{const o=t?Array.from(t.querySelectorAll("*")):[];for(const{identity:a,occurrence:l,top:d,left:m}of s){const g=o.filter(p=>i(a,p))[l];g&&(g.scrollTop=d,g.scrollLeft=m)}for(const{element:a,top:l,left:d}of n)a.scrollTop=l,a.scrollLeft=d;window.scrollTo({left:e.x,top:e.y,behavior:"instant"})}}function f(t={}){Xe&&Md();const e=document.querySelector(".guildsync-tabs"),n=document.querySelector("#guildSyncTabContent"),r=Ki(n);e&&(e.innerHTML=Us()),n&&(n.innerHTML=Vs()),js(),mc(),xa(),Qa(),Zs(),Na(),Aa(),La(),Ea(),$a(),ha(),Ia(),r(),t.restoreDiscordSearchFocus&&Lh(),t.restoreRosterSearchFocus&&Eh(),I==="discord-members"&&(u==null?void 0:u.connected)&&se.length===0&&!en&&zn({silent:!0}),I==="eso-members"&&(u==null?void 0:u.connected)&&fe.length===0&&!Ke&&!Si&&(Si=!0,Ln({silent:!0})),(I==="more"&&ae.length===0||I==="settings"&&!X&&!Wo)&&(u==null?void 0:u.connected)&&!Qe&&(Wo=!0,pe({silent:!0})),(I==="discord-members"||I==="eso-members"||I==="settings")&&(u==null?void 0:u.connected)&&N.length===0&&!K&&Gr({silent:!0})}function zs(){const t=wh(),e=$h(),n=Array.from(zt),r=Array.from(Yt);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${c(yc(Pr))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${en||wr?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${wr?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${h(_r)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!zt.has(i)).map(i=>`<option value="${h(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All roles</span>':n.map(i=>Th(i)).join("")}
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
              ${ji.filter(i=>!Yt.has(i.id)).map(i=>`<option value="${h(i.id)}">${c(i.label)}</option>`).join("")}
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
                ${cr("username","Username")}
                ${cr("global_name","Global Name")}
                ${cr("server_nickname","Server Nickname")}
                ${cr("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>Rh(i)).join(""):Dh()}
            </tbody>
          </table>
        </div>
      </div>
      ${rn?zd():""}
    </div>
  `}function Ys(){const t=Fd(),e=Hd(),n=Array.from(Et),r=Array.from(Kt);return`
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
          <span class="discord-last-refresh">Last Refresh: ${c(yf(Ar))}</span>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${Ke?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Ke?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${h(Lr)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!Et.has(i)).map(i=>`<option value="${h(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All ranks</span>':n.map(i=>Vd(i)).join("")}
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
              ${ji.filter(i=>!Kt.has(i.id)).map(i=>`<option value="${h(i.id)}">${c(i.label)}</option>`).join("")}
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
                ${Tn("account_name","Account Name")}
                ${Tn("rank","Rank")}
                ${Tn("joined","Joined")}
                ${Tn("notes","Notes","roster-notes-header")}
                ${Tn("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map((i,s)=>Td(i,s)).join(""):Id()}
            </tbody>
          </table>
        </div>
      </div>
      ${tn?Qd():""}
      ${yn?Bd():""}
    </div>
  `}function Td(t,e=-1){const n=Od(t.rank||""),r=n?` style="color: ${n};"`:"";return`
    <tr class="eso-roster-row${e===z?" roster-search-active-row":""}"${r} data-roster-row-index="${h(String(e))}" data-eso-account-name="${h(t.account_name||"")}">
      <td>${c(t.account_name||"")}</td>
      <td>${Ji(t.rank||"")}</td>
      <td>${c(Vr(t.joined))}</td>
      <td class="roster-notes-cell">${Cd(t)}</td>
      <td class="member-link-action-cell">${ka({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function Cd(t){const e=String((t==null?void 0:t.account_name)||"").trim(),n=Number((t==null?void 0:t.note_count)||0),r=n>0,i=r?`${n} roster note${n===1?"":"s"} for ${e}`:`No roster notes for ${e}`;return`
    <button
      class="roster-notes-button${r?" has-notes":""}"
      type="button"
      data-open-roster-notes="${h(e)}"
      title="${h(i)}"
      aria-label="${h(i)}"
    >
      <svg class="roster-notes-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4.5 5.25c0-.69.56-1.25 1.25-1.25h5.1c.89 0 1.72.34 2.35.95A3.28 3.28 0 0 1 15.55 4h2.7c.69 0 1.25.56 1.25 1.25v13.5c0 .69-.56 1.25-1.25 1.25h-4.6c-.75 0-1.45.29-1.98.82a.95.95 0 0 1-1.34 0A2.8 2.8 0 0 0 8.35 20h-2.6c-.69 0-1.25-.56-1.25-1.25V5.25Zm7.25 1.6A1.28 1.28 0 0 0 10.85 6H6.5v12h1.85c1.14 0 2.24.35 3.15 1V7.1c0-.09.01-.17.25-.25Zm1.75 12.15a6.32 6.32 0 0 1 3.15-1h.85V6h-1.95c-.73 0-1.4.29-1.9.8l-.15.15V19Z"/></svg>
      ${r?`<span class="roster-notes-count" aria-hidden="true">${n}</span>`:""}
    </button>
  `}function Bd(){const t=Wn||"",e=J();return`
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
          ${ft?`<div class="discord-data-error">${c(ft)}</div>`:""}
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
                ${Nd()}
              </tbody>
            </table>
          </div>
          ${e?qd():'<div class="roster-history-muted">A User or Admin role is required to add notes.</div>'}
        </div>
      </div>
    </div>
  `}function Nd(){return Er?'<tr><td class="bank-empty-row" colspan="3">Loading notes...</td></tr>':!Array.isArray(ut)||ut.length===0?'<tr><td class="bank-empty-row" colspan="3">No notes recorded for this member.</td></tr>':ut.map(t=>`
      <tr>
        <td class="roster-notes-when-cell">${c(xd(t.timestamp))}</td>
        <td class="roster-notes-officer-cell">${c(t.officer||"")}</td>
        <td class="roster-notes-note-cell">${c(t.note||"")}</td>
      </tr>
    `).join("")}function qd(){return`
    <div class="roster-notes-form">
      <label for="rosterNotesNewNote">Add Note</label>
      <textarea
        id="rosterNotesNewNote"
        class="roster-notes-textarea"
        rows="4"
        placeholder="Enter a new roster note..."
        ${$t?"disabled":""}
      >${c(nn)}</textarea>
      <button id="saveRosterNoteButton" class="refresh-discord-button" type="button" ${$t?"disabled":""}>
        ${$t?"Saving...":"Save Note"}
      </button>
    </div>
  `}function xd(t){const e=Number(t||0);return!Number.isFinite(e)||e<=0?"":new Date(e*1e3).toLocaleString()}function Id(){return`
    <tr>
      <td class="bank-empty-row" colspan="5">${c(Ke?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function Od(t){String(t||"").trim();const e=Ch(t);return Yr(e==null?void 0:e.role_color)}function Ji(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${c(e)}</span>`}function Pd(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":Ji(e)}function Fd(){const t=Lr.trim().toLowerCase(),e=fe.filter(n=>{const r=String(n.rank||"").trim();if(Et.size>0&&!Et.has(r)||!Xs(Kt,Ei(n)))return!1;if(!t)return!0;const i=Vr(n.joined),s=ro(n.joined),o=Ei(n),a=Qs(n.account_name||"");return[n.account_name,r,i,s,n.joined,o,a].map(d=>String(d||"").toLowerCase()).join(" ").includes(t)});return Gd(e)}function Gd(t){if(!Ve||!re)return t;const e=re==="desc"?-1:1;return[...t].sort((n,r)=>{const i=zo(n,Ve),s=zo(r,Ve),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:String(n.account_name||"").localeCompare(String(r.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function zo(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const n=Number(t.joined||0);return Number.isFinite(n)&&n>0?String(n).padStart(16,"0"):""}if(e==="notes")return String(Number(t.note_count||0)).padStart(8,"0");if(e==="linked"){const n=Ei(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[n]||"9"} ${n} ${Qs(t.account_name||"")}`}return String(t.account_name||"")}function Ud(t){const n=new Set(["account_name","rank","joined","notes","linked"]).has(t)?t:"account_name";Ve!==n?(Ve=n,re="asc"):re==="asc"?re="desc":re==="desc"?(Ve="",re=""):(Ve=n,re="asc"),z=-1,f()}function Tn(t,e,n=""){const r=Ve===t&&Boolean(re),i=r?re==="asc"?"ascending":"descending":"none",s=r?re==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${h(n)}" aria-sort="${h(i)}">
      <button
        class="discord-sort-header roster-sort-header${r?" active":""}"
        type="button"
        data-roster-sort-column="${h(t)}"
        title="Sort ${h(e)}${r&&re==="asc"?" descending":r&&re==="desc"?" not sorted":" ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function Hd(){return Array.from(new Set(fe.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function Vd(t){const e=go(t),n=Yr(e==null?void 0:e.role_color),r=bo(n),i=yo(n,r);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-roster-rank-filter="${h(t)}"
      style="${i}"
      title="Remove ${h(t)} filter"
    >
      <span>${c(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Wd(t){const e=ji.find(n=>n.id===t);return e?e.label:t}function Ks(t,e){const n=t==="roster"?"roster":"discord",r=Wd(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${n}-link-status-filter="${h(e)}"
      title="Remove ${h(r)} link filter"
    >
      <span>${c(r)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Js(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked"&&String(n.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function jd(t){return Js(Hr(t==null?void 0:t.discord_id))}function Ei(t){return Js(Ur(t==null?void 0:t.account_name))}function Qs(t){const e=Ur(t),n=ba({mode:"eso-to-discord",esoAccountName:t}),r=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean),i=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="candidate").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean);return[n.label,n.title,r.join(" "),i.join(" ")].filter(Boolean).join(" ")}function Xs(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function zd(){return`
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
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${h(tt)}" />
        </div>

        ${ze?`<div class="discord-data-error">${c(ze)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Yd()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${xt?`: ${c(xt)}`:""}</div>
            ${Kd()}
          </div>
        </div>
      </div>
    </div>
  `}function Yd(){return pt&&ue.length===0?'<div class="roster-history-muted">Searching...</div>':ue.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${ue.map((t,e)=>`
        <button class="roster-history-match${e===ye||t.discord_id===on?" is-selected":""}" type="button" data-discord-history-id="${h(t.discord_id)}" data-discord-history-name="${h($i(t))}">
          <span>${c($i(t))}</span>
          <strong>${c(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===ye?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Kd(){return on?pt&&ht.length===0?'<div class="roster-history-muted">Loading history...</div>':ht.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${ht.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(ro(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${c(Jd(t.event_type))}</td>
              <td>${c(t.old_value||"")}</td>
              <td>${c(t.new_value||"")}</td>
              <td>${c(t.initiator||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function $i(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function Jd(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Qd(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${h(Vn)}" />
        </div>

        ${je?`<div class="discord-data-error">${c(je)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Xd()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${bt?`: ${c(bt)}`:""}</div>
            ${Zd()}
          </div>
        </div>
      </div>
    </div>
  `}function Xd(){return dt&&de.length===0?'<div class="roster-history-muted">Searching...</div>':de.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${de.map((t,e)=>`
        <button class="roster-history-match${e===ge||t.account_name===bt?" is-selected":""}" type="button" data-roster-history-account="${h(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <strong>${c(t.rank||"")}</strong>
          ${e===ge?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Zd(){return bt?dt&&lt.length===0?'<div class="roster-history-muted">Loading history...</div>':lt.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${lt.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(ro(t.timestamp))}</td>
              <td>${c(t.event_type||"")}</td>
              <td>${Pd(t.rank)}</td>
              <td>${c(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function eu(){return`
    <div class="guildsync-tab-panel reports-panel" data-active-tab="settings">
      <div class="discord-data-header reports-header">
        <div>
          <h2 class="discord-data-title">Reports & Admin</h2>
          <p class="discord-data-subtitle">Run GuildSync reports and administrative review tools. More options can be added here later.</p>
        </div>
      </div>

      <div class="reports-scroll-area">
        ${ta()}
        ${zi.render()}
        <section class="reports-list" aria-label="Available reports">
          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Associates Promotion Eligible</h3>
              <p>Shows Associates who have been in the guild at least two weeks, have purchased at least one raffle ticket, and are linked to Discord. Also shows otherwise eligible Associates who still need a Discord link reviewed.</p>
            </div>
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${nt?"disabled":""}>
              ${nt?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${rt?"disabled":""}>
              ${rt?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${it?"disabled":""}>
              ${it?"Loading...":"Run"}
            </button>
          </article>
        </section>

        <article class="report-option-card">
          <div class="report-option-copy">
            <h3>ESO / Discord Member Links</h3>
            <p>Review automatic ESO-to-Discord links, accept candidate matches, unlink blocked matches, or run the matcher again after roster or Discord refreshes.</p>
          </div>
          <button id="runMemberLinksReportButton" class="refresh-discord-button report-run-button" type="button" ${K?"disabled":""}>
            ${K?"Loading...":"Run"}
          </button>
        </article>
      </div>
    </div>
  `}function Zs(){var t,e,n,r;I==="settings"&&(ps(Ps,{refresh:!0}),zi.wire({request:(i,s)=>D(i,s,12e4),rerender:f}),ea(),(t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>na()),(e=document.querySelector("#runDiscordRankAuditReportButton"))==null||e.addEventListener("click",()=>au()),(n=document.querySelector("#runDiscordLastSeenReportButton"))==null||n.addEventListener("click",()=>uu()),(r=document.querySelector("#runMemberLinksReportButton"))==null||r.addEventListener("click",()=>Su()))}function ea(t=document){var e,n,r,i,s;(e=t.querySelector("#cancelBonusDefaults"))==null||e.addEventListener("click",()=>{ke=!1,f()}),(n=t.querySelector("#resetBonusDefaults"))==null||n.addEventListener("click",()=>{ke=!0,f()}),(r=t.querySelector("#raffleBonusSettingsForm"))==null||r.addEventListener("submit",tu),(i=t.querySelector("#raffleBonusSettingsForm"))==null||i.addEventListener("input",o=>{Me={raffle:Ye,values:new Map(new FormData(o.currentTarget))}}),(s=t.querySelector("#bonusRafflePicker"))==null||s.addEventListener("change",o=>{Ye=o.currentTarget.value,ke=!1,Me=null,f()})}function ta(){var o;if(!X)return'<article class="report-option-card raffle-bonus-card"><div class="report-option-copy"><h3><button type="button" class="report-section-toggle" data-report-toggle="bonus" aria-expanded="false" aria-controls="raffleBonusContent">Raffle Bonus Tickets <span aria-hidden="true">\u25BE</span></button></h3><div id="raffleBonusContent" class="report-section-content" inert><div class="report-section-inner"><p>Loading raffle bonus settings...</p></div></div></div></article>';const t=!ke&&(Me==null?void 0:Me.raffle)===Ye?Me.values:null,e=an.find(a=>`${a.type}:${a.salesEnd}`===Ye),n=ke&&(e==null?void 0:e.inheritedSettings)?e.inheritedSettings:e,r=e?{enabledByType:{...X.enabledByType,[e.type]:n.enabled},biweekly:e.type==="biweekly"?n.tiers:X.biweekly,monthly:e.type==="monthly"?n.tiers:X.monthly}:ke&&X.envDefaults||X,i=((o=k==null?void 0:k.user)==null?void 0:o.role)==="admin",s=(a,l)=>{var d,m;return`
    <fieldset class="raffle-bonus-tiers" ${i&&!ke?"":"disabled"}>
      <legend>${l}</legend>
      <label><input name="${a}-enabled" type="checkbox" ${(t?t.has(`${a}-enabled`):(m=(d=r.enabledByType)==null?void 0:d[a])!=null?m:r.enabled)?"checked":""}> Enable bonus tickets</label>
      ${r[a].map((g,p)=>{var A,v;return`
        <div class="raffle-bonus-tier">
          <span>Period ${p+1}${p===r[a].length-1?" (final)":""}</span>
          <label>Hours <input name="${a}-${p}-hours" type="number" min="1" step="1" required value="${h(String(t&&(A=t.get(`${a}-${p}-hours`))!=null?A:g.hours))}"></label>
          <label>Bonus % <input name="${a}-${p}-percent" type="number" min="0" max="100" step="0.1" required value="${h(String(t&&(v=t.get(`${a}-${p}-percent`))!=null?v:g.percent))}"></label>
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
            ${an.map(a=>`<option value="${h(`${a.type}:${a.salesEnd}`)}" ${Ye===`${a.type}:${a.salesEnd}`?"selected":""}>${c(a.label)}${a.enabled?" (Bonuses)":""}</option>`).join("")}
          </select>
        </label>
        <p data-bonus-settings-source>Source: ${c(e?e.overridden?"Raffle override":"Saved raffle policy":X.source===".env"?"Default":X.source||"Default")}</p>
        ${ke?'<p role="status">Default Hours, Bonus %, and enabled settings are shown below. Click Save Bonus Settings to apply them, or Cancel default restoration to keep your previous settings.</p><button type="button" id="cancelBonusDefaults">Cancel default restoration</button>':""}
        <form id="raffleBonusSettingsForm">
          ${i?`<button type="button" id="resetBonusDefaults">Return to defaults</button><p>Restores Hours, Bonus %, and the enabled switch ${e?"from this raffle\u2019s inherited policy":"for both raffle types from their default rules"}. Changes apply only after Save Bonus Settings.</p>`:""}
          ${e?s(e.type,e.label):s("biweekly","Bi-Weekly Raffle")+s("monthly","50/50 Raffle")}
          ${i?'<button class="refresh-discord-button report-run-button" type="submit">Save Bonus Settings</button>':"<p>Admin access is required to change these settings.</p>"}
        </form>
        </div></div>
      </div>
    </article>`}async function tu(t){t.preventDefault();const e=t.currentTarget,n=new FormData(e),r=an.find(o=>`${o.type}:${o.salesEnd}`===Ye),i=o=>((r==null?void 0:r.type)===o?r.tiers:X[o]).map((a,l)=>({hours:Number(n.get(`${o}-${l}-hours`)),percent:Number(n.get(`${o}-${l}-percent`))})),s=r?{raffleType:r.type,salesEnd:r.salesEnd,enabled:n.has(`${r.type}-enabled`),tiers:i(r.type)}:{enabledByType:{biweekly:n.has("biweekly-enabled"),monthly:n.has("monthly-enabled")},biweekly:i("biweekly"),monthly:i("monthly")};try{ke&&(s.resetToDefaults=!0);const o=await D("guildsync:save-raffle-bonus-settings",s,3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||"Could not save raffle bonus settings.");X=o.bonusSettings,Me=null,ke=!1,await pe({silent:!0}),y("bonus-settings","Raffle bonus settings saved.",{ttlMs:b}),f()}catch(o){y("bonus-settings-error",$(o),{ttlMs:b})}}function na(){bn=!0,Rt="",f(),Ma()}function Ri(){bn=!1,Rt="",f()}function nu(){const t=ru(),e=iu(),n=kn.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${nt?"disabled":""}>${nt?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(n))} total row${n===1?"":"s"}</span>
        </div>

        ${Rt?`<div class="discord-data-error">${c(Rt)}</div>`:""}

        <div class="report-results-content">
          ${nt&&n===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!nt&&n===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${n>0?Yo("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${n>0?Yo("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${c(oa())}</textarea>
      </div>
    </div>
  `}function ru(){return kn.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function iu(){return kn.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function Yo(t,e,n,r){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${c(t)}</h4>
          <p>${c(e)}</p>
        </div>
        <span>${c(String(n.length))} row${n.length===1?"":"s"}</span>
      </div>
      ${n.length>0?ou(n):`<div class="roster-history-muted report-section-empty">${c(r)}</div>`}
    </section>
  `}function ou(t=kn){return`
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
              <td>${Ji(e.rank||"")}</td>
              <td>${c(Vr(e.joined))}</td>
              <td>${c(_e(e.purchased_tickets||0))}</td>
              <td class="associate-earliest-deposit-cell">${c(ra(e))}</td>
              <td>${c(ia(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function ra(t){const e=String((t==null?void 0:t.earliest_deposit_summary)||"").trim();if(e)return e;const n=String((t==null?void 0:t.earliest_deposit_date)||"").trim(),r=String((t==null?void 0:t.earliest_deposit_raffle_period)||"").trim();return[n,r].filter(Boolean).join(" | ")}function ia(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function oa(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Earliest Deposit / Raffle","Discord Link"]];for(const e of kn){const n=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([n,e.account_name||"",e.rank||"",Vr(e.joined),_e(e.purchased_tickets||0),ra(e),ia(e)])}return t.map(e=>e.map(jr).join("	")).join(`
`)}async function su(){const t=oa();if(await zr(t)){y("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:b});return}const n=document.querySelector("#associateTicketReportTsv");n&&(n.focus(),n.select()),y("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:b})}function au(){vn=!0,Dt="",f(),Da()}function Di(){vn=!1,Dt="",f()}function cu(){const t=jn.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${rt?"disabled":""}>${rt?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${Dt?`<div class="discord-data-error">${c(Dt)}</div>`:""}

        <div class="report-results-content">
          ${rt&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!rt&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?lu(jn):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${c(ca())}</textarea>
      </div>
    </div>
  `}function lu(t=jn){return`
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
  `}function sa(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function aa(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function ca(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of jn)t.push([sa(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",aa(e)]);return t.map(e=>e.map(jr).join("	")).join(`
`)}async function du(){const t=ca();if(await zr(t)){y("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:b});return}const n=document.querySelector("#discordRankAuditReportTsv");n&&(n.focus(),n.select()),y("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:b})}function uu(){vt=!0,Mt="",Sn="",f(),Ra(),N.length===0&&!K&&Gr({silent:!0})}function Mi(){vt=!1,Mt="",Sn="",ot="",Jt="",st="",f()}function fu(){const t=Qi(),e=Vi.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${it?"disabled":""}>${it?"Loading...":"Run Again"}</button>
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
            value="${h(Sn)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${ot===""?"selected":""}>All link statuses</option>
            <option value="linked" ${ot==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${ot==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${ot==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${Mt?`<div class="discord-data-error discord-last-seen-report-error">${c(Mt)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${it&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!it&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?hu(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${c(da(t))}</textarea>
      </div>
    </div>
  `}function hu(t=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${Cn("name","Discord Member")}</th>
            <th>${Cn("eso","Linked ESO Account")}</th>
            <th>${Cn("date","Last Seen")}</th>
            <th>${Cn("days","Days Since")}</th>
            <th>${Cn("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr class="discord-last-seen-row ${h(ku(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${h(Ot(e).status)}" data-discord-last-seen-search="${h(la(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${bu(e)}
                  <span>${c(ln(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${mu(e)}</td>
              <td>${c(Xi(e.last_seen))}</td>
              <td>${c(Zi(e.last_seen))}</td>
              <td>${c(Tr(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function Cn(t,e){const n=Jt===t,r=n?st==="asc"?"\u25B2":"\u25BC":"\u2195",i=n?`${e}: ${st==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${n?" active":""}" type="button" data-discord-last-seen-sort="${h(t)}" title="${h(i)}">
      <span>${c(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${c(r)}</span>
    </button>
  `}function Qi(){const t=[...Vi],e=Jt,n=st;if(!e||!n)return t;const r=n==="desc"?-1:1;return t.sort((i,s)=>{var o,a;if(e==="date"){const l=Number(i.last_seen||0)||0,d=Number(s.last_seen||0)||0;return(l-d)*r}if(e==="days")return(Ko(i.last_seen)-Ko(s.last_seen))*r;if(e==="action")return Tr(i.last_seen_action).localeCompare(Tr(s.last_seen_action),void 0,{sensitivity:"base"})*r;if(e==="eso"){const l=Ot(i),d=Ot(s),m={linked:0,candidate:1,unlinked:2},g=((o=m[l.status])!=null?o:9)-((a=m[d.status])!=null?a:9);return g!==0?g*r:l.esoAccountName.localeCompare(d.esoAccountName,void 0,{sensitivity:"base"})*r}return ln(i).localeCompare(ln(s),void 0,{sensitivity:"base"})*r})}function pu(t){Jt!==t?(Jt=t,st="asc"):st==="asc"?st="desc":(Jt="",st=""),f()}function ln(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function la(t){return[ln(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,gu(t),Xi(t==null?void 0:t.last_seen),Zi(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function Ot(t){const e=Iu(t==null?void 0:t.discord_id),n=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),r=String((e==null?void 0:e.eso_account_name)||"").trim();return n==="linked"&&r?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:r,title:`Linked ESO account: ${r}`}:(n==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&r?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:r,title:`Fuzzy ESO account candidate: ${r}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function mu(t){const e=Ot(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${h(e.className)}"
      title="${h(e.title)}"
      aria-label="${h(e.label)}"
      role="img"
    ></span>
  `}function gu(t){const e=Ot(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function yu(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!n)return"";if(/^https?:\/\//i.test(e))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function bu(t){const e=ln(t),n=e?e.slice(0,2).toUpperCase():"?",r=yu(t);return r?`<span class="discord-member-avatar"><img src="${h(r)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${c(n)}</span>`}function Xi(t){const e=Number(t);if(!e)return"Never";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t||"");const r=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(n).reduce((i,s)=>(i[s.type]=s.value,i),{});return`${r.month}/${r.day}/${r.year} ${r.hour}:${r.minute} ${r.dayPeriod}`}function ku(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const n=(Date.now()-e*1e3)/864e5;return n>30?"discord-last-seen-red":n>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function Zi(t){const e=Number(t);if(!e)return"Never";const n=Date.now()-e*1e3;if(!Number.isFinite(n))return"";if(n<0)return"0 days";const r=Math.floor(n/864e5);return`${r} day${r===1?"":"s"}`}function Ko(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const n=Date.now()-e*1e3;return Number.isFinite(n)?n<0?0:Math.floor(n/864e5):Number.POSITIVE_INFINITY}function Tr(t){return String(t||"").trim()||"None tracked"}function da(t=Qi()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const n of t){const r=Ot(n);e.push([ln(n),r.label||"",r.esoAccountName||"",Xi(n==null?void 0:n.last_seen),Zi(n==null?void 0:n.last_seen),Tr(n==null?void 0:n.last_seen_action),(n==null?void 0:n.username)||"",(n==null?void 0:n.discord_id)||""])}return e.map(n=>n.map(jr).join("	")).join(`
`)}async function vu(){const t=Qi().filter(i=>{const s=Pe(Sn),o=String(ot||"").trim().toLowerCase(),a=!s||Pe(la(i)).includes(s),l=!o||Ot(i).status===o;return a&&l}),e=da(t);if(await zr(e)){y("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:b});return}const r=document.querySelector("#discordLastSeenReportTsv");r&&(r.focus(),r.select()),y("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:b})}function Su(){Xe=!0,te="",f(),N.length===0&&!K&&Gr({silent:!0})}function Ti(){Xe=!1,Fr="",At="",Qn="",Xn="",We=-1,f()}function ua(t){return[...new Set((Array.isArray(N)?N:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function fa(t,e){return t.map(n=>`<option value="${h(n)}" ${e===n?"selected":""}>${c(n)}</option>`).join("")}function wu(){return fa(ua("link_status"),Qn)}function _u(){return fa(ua("link_method"),Xn)}function Au(){return`
    <div class="roster-history-overlay member-links-report-overlay" role="dialog" aria-modal="true" aria-labelledby="memberLinksReportTitle">
      <div class="roster-history-dialog report-results-dialog member-links-report-dialog">
        <div class="roster-history-header report-results-header">
          <div>
            <h3 id="memberLinksReportTitle">ESO / Discord Member Links</h3>
            <p>${gt()?"Review automatic links, accept fuzzy candidates, unblock/relink members, or run the matcher again.":"View ESO/Discord account links and suggested matches."}</p>
          </div>
          <button id="closeMemberLinksReportButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        <div class="report-results-toolbar">
          <button id="refreshMemberLinksButton" class="clear-discord-filters-button" type="button" ${K?"disabled":""}>Refresh Links</button>
          <button ${ne()?"":"hidden disabled"} id="runMemberAutoLinkButton" class="refresh-discord-button" type="button" ${K?"disabled":""}>${K?"Running...":"Run Auto-Linking"}</button>
          <span class="roster-history-muted">${c(String(N.length))} link/candidate row${N.length===1?"":"s"}</span>
        </div>

        <div class="member-links-report-filter-row">
          <input
            id="memberLinksReportSearchInput"
            class="member-links-report-search-input"
            type="search"
            autocomplete="off"
            spellcheck="false"
            placeholder="Search Discord account or ESO member..."
            value="${h(Fr)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${Qn===""?"selected":""}>All statuses</option>
            ${wu()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${Xn===""?"selected":""}>All methods</option>
            ${_u()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${At===""?"selected":""}>All actions</option>
            <option value="needs-link" ${At==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${At==="can-unlink"?"selected":""}>Unlink Available</option>
            <option value="can-unblock" ${At==="can-unblock"?"selected":""}>Unblock Available</option>
          </select>
        </div>

        ${te?`<div class="discord-data-error member-links-report-error">${c(te)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${Ru()}
        </div>
      </div>
    </div>
  `}function ha(){var n,r,i,s,o,a;if(!Xe)return;(n=document.querySelector("#closeMemberLinksReportButton"))==null||n.addEventListener("click",Ti),(r=document.querySelector("#refreshMemberLinksButton"))==null||r.addEventListener("click",()=>Gr()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>qu());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",Du),t.addEventListener("keydown",Bu)),(s=document.querySelector("#memberLinksReportActionFilter"))==null||s.addEventListener("change",Mu),(o=document.querySelector("#memberLinksReportStatusFilter"))==null||o.addEventListener("change",Tu),(a=document.querySelector("#memberLinksReportMethodFilter"))==null||a.addEventListener("change",Cu),tr(),document.querySelectorAll("[data-accept-member-candidate]").forEach(l=>{l.addEventListener("click",()=>ma(l.dataset.acceptMemberCandidate||"",l.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(l=>{l.addEventListener("click",()=>xu(l.dataset.unlinkMemberLink||"",l.dataset.unlinkMemberLinkDiscordId||""))}),document.querySelectorAll("[data-unblock-member-auto-link]").forEach(l=>{l.addEventListener("click",()=>ga(l.dataset.unblockMemberAutoLink||"",l.dataset.unblockMemberAutoLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",l=>{l.target===e&&Ti()})}function Jo(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function Qo(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Lu(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Eu(t){return[...Array.isArray(t)?t:[]].sort((e,n)=>{const r=Jo(e)-Jo(n);if(r!==0)return r;const i=Qo(e).localeCompare(Qo(n),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((n==null?void 0:n.discord_user_id)||""),void 0,{sensitivity:"base"})})}function $u(t){const e=Ci(t);let n="";e==="Username"?n=(t==null?void 0:t.discord_username)||"":e==="Global Name"?n=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(n=(t==null?void 0:t.discord_server_nickname)||""),n||(n=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const r=e?` <span class="member-link-report-match-field">(${c(e)})</span>`:"";return`<span class="member-link-report-discord-name">${c(n)}</span>${r}`}function Ru(){return K&&N.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(N)||N.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${Eu(N).map(e=>{var s;const n=String(e.link_status||"").trim().toLowerCase(),r=String(e.link_method||"").trim().toLowerCase(),i=$u(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${h(Lu(e))}"
                data-member-links-report-status="${h(n)}"
                data-member-links-report-method="${h(r)}"
                data-member-links-report-action="${h(Number(e.locked||0)===1||n==="blocked"?"can-unblock":n==="linked"?"can-unlink":n==="candidate"?"needs-link":"")}"
              >
                <td>${c(e.eso_account_name||"")}</td>
                <td>${i}</td>
                <td class="member-links-status-col">${c(Number(e.locked||0)===1||n==="blocked"?"blocked":n||"")}</td>
                <td class="member-links-method-col">${c(r||"")}${Number(e.locked||0)===1?" \u{1F512}":""}</td>
                <td class="member-links-action-col">
                  <div class="member-link-actions">
                    ${gt()&&n==="candidate"?`<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${h(e.eso_account_name||"")}" data-accept-member-candidate-discord-id="${h(e.discord_user_id||"")}" aria-label="Accept candidate link" title="Accept candidate link">\u2713</button>`:""}
                    ${gt()&&n==="linked"?`<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${h(e.eso_account_name||"")}" data-unlink-member-link-discord-id="${h(e.discord_user_id||"")}" aria-label="Unlink this ESO/Discord pair" title="Unlink this ESO/Discord pair">\u{1F5D1}</button>`:""}
                    ${gt()&&(Number(e.locked||0)===1||n==="blocked")?`<button class="member-link-report-action member-link-report-unblock" type="button" data-unblock-member-auto-link="${h(e.eso_account_name||"")}" data-unblock-member-auto-link-discord-id="${h(e.discord_user_id||"")}" aria-label="Remove auto-link block" title="Remove auto-link block">\u21BA</button>`:""}
                  </div>
                </td>
                <td class="member-links-confidence-col">${c(String((s=e.match_confidence)!=null?s:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function pa(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function Xo(t){const e=pa();if(e.forEach(r=>r.classList.remove("member-links-report-row-active")),e.length===0){We=-1;return}We=Math.max(0,Math.min(t,e.length-1));const n=e[We];n.classList.add("member-links-report-row-active"),n.scrollIntoView({block:"nearest"})}function tr(){const t=Pe(Fr),e=String(At||"").trim().toLowerCase(),n=String(Qn||"").trim().toLowerCase(),r=String(Xn||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let s=0;i.forEach(a=>{const l=Pe(a.dataset.memberLinksReportSearch||""),d=String(a.dataset.memberLinksReportAction||"").trim().toLowerCase(),m=String(a.dataset.memberLinksReportStatus||"").trim().toLowerCase(),g=String(a.dataset.memberLinksReportMethod||"").trim().toLowerCase(),T=(!t||l.includes(t))&&(!e||d===e)&&(!n||m===n)&&(!r||g===r);a.hidden=!T,a.classList.remove("member-links-report-row-active"),T&&(s+=1)});const o=document.querySelector("#memberLinksReportSearchEmpty");o&&(o.hidden=s!==0),We=-1}function Du(t){Fr=t.target.value||"",tr()}function Mu(t){At=t.target.value||"",tr()}function Tu(t){Qn=t.target.value||"",tr()}function Cu(t){Xn=t.target.value||"",tr()}function Bu(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=pa();if(e.length===0)return;if(t.key==="ArrowDown"){const r=We<0?0:We+1;Xo(r>=e.length?e.length-1:r);return}const n=We<0?e.length-1:We-1;Xo(n<0?0:n)}function yr(){return I==="discord-members"||I==="eso-members"||Ze||Xe||vt}function Nu(t={}){if(!Array.isArray(t.links))return;const e=JSON.stringify(N)!==JSON.stringify(t.links);N=t.links,e&&yr()&&kr()}function Zo(){const t=document.querySelector("#runMemberLinksReportButton");t&&(t.disabled=K,t.textContent=K?"Loading...":"Run")}async function Gr(t={}){if(!(u!=null&&u.connected)){te="You must be connected to load member links.",yr()&&kr();return}K=!0,te="",Zo(),!t.silent&&yr()&&kr();try{const e=await D("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");N=Array.isArray(e.links)?e.links:[]}catch(e){te=$(e)}finally{K=!1,Zo(),yr()&&kr()}}async function qu(){if(!(u!=null&&u.connected)||!k.logged_in){te="You must be logged in and connected to run auto-linking.",f();return}K=!0,te="",f();try{const t=await D("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");N=Array.isArray(t.links)?t.links:[],y("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:b})}catch(t){te=$(t)}finally{K=!1,f()}}async function ma(t,e=""){try{const n=await D("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to accept candidate.");N=Array.isArray(n.links)?n.links:N,y("member-link-accepted",n.message||"Candidate accepted as a link.",{ttlMs:b})}catch(n){te=$(n),y("member-link-accept-error",te,{ttlMs:b})}}async function ga(t,e=""){if(!await Yi({title:"Remove Auto-Link Block?",message:`Remove the blocked auto-match record between ${t} and this Discord account? Auto-linking will run immediately and this screen will refresh to show whether the pair linked again.`,confirmLabel:"Unblock",cancelLabel:"Cancel",confirmClass:"danger"}))return!1;K=!0,te="",f();try{const r=await D("guildsync:unblock-member-auto-link",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to remove auto-link block.");N=Array.isArray(r.links)?r.links:N;const i=Le(t),s=String(e||"").trim(),o=r.refreshedPair||N.find(d=>Le(d.eso_account_name)===i&&String(d.discord_user_id||"").trim()===s),a=String((o==null?void 0:o.link_status)||"").trim().toLowerCase(),l=a==="linked"?" It linked again automatically.":a==="candidate"?" It is now showing as a candidate.":" No automatic link was recreated.";return y("member-link-unblocked",`${r.message||"Auto-link block removed."}${l}`,{ttlMs:b}),!0}catch(r){return te=$(r),y("member-link-unblock-error",te,{ttlMs:b}),!1}finally{K=!1,f()}}async function xu(t,e=""){if(!!await Yi({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const r=await D("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to unlink member.");N=Array.isArray(r.links)?r.links:N,y("member-link-unlinked",r.message||"Member link removed.",{ttlMs:b})}catch(r){te=$(r)}f()}}function Le(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function Ur(t){const e=Le(t);return e?N.filter(n=>Le(n.eso_account_name)===e):[]}function Hr(t){const e=String(t||"").trim();return e?N.filter(n=>String(n.discord_user_id||"").trim()===e):[]}function ya(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const n=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(n.length>0){const i=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const s=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return s||n[0]}const r=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return r||e[0]}function Iu(t){return ya(Hr(t))}function Ou(t){return`${Le(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function eo(){return C?C.mode==="discord-to-eso"?Hr(C.discordUserId):Ur(C.esoAccountName):[]}function Pu(t){const e=String(t||"").trim(),n=se.find(r=>String(r.discord_id||"").trim()===e);return n&&(n.server_nickname||n.global_name||n.username||n.discord_id)||e}function ba(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?Hr(t.discordUserId):Ur(t.esoAccountName),r=ya(n),i=String((r==null?void 0:r.link_status)||"").trim().toLowerCase(),s=n.filter(a=>String(a.link_status||"").trim().toLowerCase()==="linked").length,o=n.filter(a=>String(a.link_status||"").trim().toLowerCase()==="candidate").length;return s>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?s===1?r.eso_account_name:`${s} ESO accounts`:s===1?r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member":`${s} Discord accounts`}`}:i==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?r.eso_account_name:r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member"}`}:i==="blocked"||Number((r==null?void 0:r.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function ka(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,r=ba(t);return`
    <button
      class="member-link-status-dot member-link-status-${h(r.className)}"
      type="button"
      title="${h(r.title)}"
      aria-label="${h(r.label)}"
      data-open-member-link-dialog="${h(e)}"
      data-member-link-value="${h(n||"")}"
    ></button>
  `}function Fu(){return C?C.mode==="discord-to-eso"?Pu(C.discordUserId):C.esoAccountName||"":""}function va(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function Ci(t){const e=va((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const n=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(n.includes("discord_username")||n.includes("username"))return"Username";if(n.includes("discord_display_name")||n.includes("global")||n.includes("display"))return"Global Name";if(n.includes("discord_server_nickname")||n.includes("server")||n.includes("nickname"))return"Server Nickname";const r=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(r==="exact"||r==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",s=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const a of s){const l=Gu(i,a.value);(!o||l>o.score)&&(o={...a,score:l})}if(o&&o.score>0)return o.field}return""}function Pe(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function Gu(t,e){const n=Pe(t),r=Pe(e);if(!n||!r)return 0;if(n===r)return 100;if((n.includes(r)||r.includes(n))&&Math.min(n.length,r.length)>=4)return 88;const i=Math.abs(n.length-r.length),s=[...n].findIndex((a,l)=>a!==r[l]),o=s===-1?Math.min(n.length,r.length):s;return Math.max(0,Math.min(75,Math.round(o*10-i*3)))}function Uu(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function Hu(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function Vu(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),n=Uu(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${c(n)}</span>`}function Wu(t){var a;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",n=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",r=String(t.link_status||"").trim().toLowerCase(),o=r==="linked"?`<button
        class="member-link-trash-button"
        type="button"
        aria-label="Unlink this ESO/Discord pair"
        title="Unlink this ESO/Discord pair"
        data-unlink-dialog-member-link
        data-unlink-eso-account="${h(t.eso_account_name||"")}"
        data-unlink-discord-user-id="${h(t.discord_user_id||"")}"
      >\u{1F5D1}</button>`:r==="candidate"?`<button
          class="member-link-approve-button"
          type="button"
          aria-label="Approve suggested link"
          title="Approve suggested link"
          data-accept-dialog-member-candidate="${h(t.eso_account_name||"")}"
          data-accept-dialog-discord-user-id="${h(t.discord_user_id||"")}"
        >\u2713</button>`:Number(t.locked||0)===1||r==="blocked"?`<button
            class="member-link-approve-button member-link-unblock-button"
            type="button"
            aria-label="Remove auto-link block"
            title="Remove auto-link block"
            data-unblock-dialog-member-auto-link
            data-unblock-eso-account="${h(t.eso_account_name||"")}"
            data-unblock-discord-user-id="${h(t.discord_user_id||"")}"
          >\u21BA</button>`:"";return`
    <div class="member-link-current-card">
      <div class="member-link-current-details">
        <div><span>ESO:</span> ${c(t.eso_account_name||"")}</div>
        <div><span>Discord:</span> ${c(e)}</div>
        <div><span>Status:</span> ${Vu(t)} \xB7 ${c(Hu(t.link_method))} \xB7 ${c(String((a=t.match_confidence)!=null?a:""))}% \xB7 ${c(n)}</div>
        ${Ci(t)?`<div><span>Matched:</span> Matched on ${c(Ci(t))}</div>`:""}
      </div>
      ${gt()?o:""}
    </div>
  `}function ju(){const t=eo();return t.length?[...t].sort((n,r)=>{var l,d;const i=String(n.link_status||"").trim().toLowerCase(),s=String(r.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},a=((l=o[i])!=null?l:9)-((d=o[s])!=null?d:9);return a!==0?a:Number(r.match_confidence||0)-Number(n.match_confidence||0)}).map(n=>Wu(n)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function zu(){if(!gt())return"";if(sn)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(Je)return`<div class="discord-data-error">${c(Je)}</div>`;if(!Array.isArray(Tt)||Tt.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(eo().map(n=>Ou(n))),e=[...Tt].filter(n=>{const r=(C==null?void 0:C.mode)==="discord-to-eso"?`${Le(n.account_name)}::${String(C.discordUserId||"").trim()}`:`${Le(C==null?void 0:C.esoAccountName)}::${String(n.discord_id||"").trim()}`;return!t.has(r)}).sort((n,r)=>{const i=Number(r.confidence||0)-Number(n.confidence||0);return i!==0?i:es(n).localeCompare(es(r),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(n=>Yu(n)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function es(t){return((C==null?void 0:C.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function Yu(t,e={}){var g,p,A;const n=(C==null?void 0:C.mode)||"",r=n==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=va(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),s=n==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[s,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),a=n==="discord-to-eso"?t.account_name:t.discord_id,l=e.disabled===!0,d=[r,s,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),m=[r,o,`${(g=t.confidence)!=null?g:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${h(a||"")}" data-member-link-option-search="${h(d)}" title="${h(m)}" ${l?"disabled":""}>
      <span class="member-link-option-name" title="${h(r||"")}">${c(r||"")}</span>
      <span class="member-link-option-subtitle" title="${h(o||"")}">${c(o||"")}</span>
      <span class="member-link-option-confidence" title="${h(String((p=t.confidence)!=null?p:0))}%">${c(String((A=t.confidence)!=null?A:0))}%</span>
    </button>
  `}function Ku(){const t=(C==null?void 0:C.mode)||"",e=Fu(),n=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
    <div class="roster-history-overlay member-link-dialog-overlay" role="dialog" aria-modal="true" aria-labelledby="memberLinkDialogTitle">
      <div class="roster-history-dialog member-link-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="memberLinkDialogTitle">Member Link</h3>
            <p>${c(e)}${gt()?` \u2192 choose ${c(n)}.`:" \xB7 View current account links."}</p>
          </div>
          <button id="closeMemberLinkDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close member link window" title="Close">\xD7</button>
        </div>

        <div class="member-link-dialog-body">
          <section class="member-link-dialog-section member-link-current-section">
            ${ju()}
          </section>

          <section class="member-link-dialog-section" ${gt()?"":"hidden inert"}>
            <h4>Suggested Matches</h4>
            <input
              id="memberLinkSuggestionSearchInput"
              class="member-link-suggestion-search-input"
              type="search"
              autocomplete="off"
              spellcheck="false"
              placeholder="Search suggested matches..."
              value="${h(Zn)}"
            />
            ${zu()}
          </section>
        </div>

      </div>
    </div>
  `}async function to(t,e){if(!(u!=null&&u.connected)||!V()){y("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:b});return}Ze=!0,C=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},Tt=[],sn=!0,Je="",Zn="",De=-1,f();try{if(!Array.isArray(N)||N.length===0){const i=await D("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(N=Array.isArray(i.links)?i.links:[])}const r=await D("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load link suggestions.");Tt=Array.isArray(r.options)?r.options:[]}catch(n){Je=$(n)}finally{sn=!1,f()}}function dn(){document.removeEventListener("keydown",Bi),Ze=!1,C=null,Tt=[],sn=!1,Je="",Zn="",De=-1,f()}function Sa(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function ts(t){const e=Sa();if(e.forEach(r=>r.classList.remove("member-link-option-row-active")),e.length===0){De=-1;return}De=Math.max(0,Math.min(t,e.length-1));const n=e[De];n.classList.add("member-link-option-row-active"),n.scrollIntoView({block:"nearest"})}function wa(){const t=Pe(Zn),e=[...document.querySelectorAll(".member-link-option-row")];let n=0;e.forEach(i=>{const s=Pe(i.dataset.memberLinkOptionSearch||i.textContent||""),o=!t||s.includes(t);i.hidden=!o,i.classList.remove("member-link-option-row-active"),o&&(n+=1)});const r=document.querySelector("#memberLinkSuggestionSearchEmpty");r&&(r.hidden=n!==0),De=-1}function Ju(t){Zn=t.target.value||"",wa()}function Qu(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Sa();if(e.length===0)return;if(t.key==="ArrowDown"){const r=De<0?0:De+1;ts(r>=e.length?e.length-1:r);return}const n=De<0?e.length-1:De-1;ts(n<0?0:n)}function Bi(t){!Ze||t.key==="Escape"&&(t.preventDefault(),dn())}async function Xu(t){if(!(!C||!t))try{const e=C.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:C.discordUserId}:{esoAccountName:C.esoAccountName,discordUserId:t},n=await D("guildsync:manual-link-member",e,3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to link members.");N=Array.isArray(n.links)?n.links:N,y("member-link-saved",n.message||"Member link saved.",{ttlMs:b}),dn()}catch(e){Je=$(e),f()}}async function Zu(t,e=""){await ma(t,e),dn()}async function _a(){if(!!C){sn=!0,Je="",f();try{const t=C.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:C.discordUserId}:{mode:"eso-to-discord",accountName:C.esoAccountName},e=await D("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");Tt=Array.isArray(e.options)?e.options:[]}catch(t){Je=$(t)}finally{sn=!1,f()}}}async function ef(t="",e=""){const n=eo().find(i=>Le(i.eso_account_name)===Le(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!n||!await Yi({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await D("guildsync:manual-unlink-member",{esoAccountName:n.eso_account_name,discordUserId:n.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");N=Array.isArray(i.links)?i.links:N,y("member-link-unlinked",i.message||"Member link removed.",{ttlMs:b}),await _a()}catch(i){Je=$(i),f()}}async function tf(t="",e=""){await ga(t,e)&&await _a()}function Aa(){var n;if(!Ze)return;document.removeEventListener("keydown",Bi),document.addEventListener("keydown",Bi),(n=document.querySelector("#closeMemberLinkDialogButton"))==null||n.addEventListener("click",dn);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",Ju),t.addEventListener("keydown",Qu),wa()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(r=>{r.addEventListener("click",()=>ef(r.dataset.unlinkEsoAccount||"",r.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-unblock-dialog-member-auto-link]").forEach(r=>{r.addEventListener("click",()=>tf(r.dataset.unblockEsoAccount||"",r.dataset.unblockDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(r=>{r.addEventListener("click",()=>Xu(r.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(r=>{r.addEventListener("click",()=>Zu(r.dataset.acceptDialogMemberCandidate||"",r.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",r=>{r.target===e&&dn()})}function La(){var e,n,r;if(!bn)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",Ri),(n=document.querySelector("#rerunAssociateTicketReportButton"))==null||n.addEventListener("click",()=>Ma()),(r=document.querySelector("#copyAssociateTicketReportGridButton"))==null||r.addEventListener("click",()=>su());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Ri()})}function Ea(){var e,n,r;if(!vn)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",Di),(n=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||n.addEventListener("click",()=>Da()),(r=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||r.addEventListener("click",()=>du());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Di()})}function $a(){var r,i,s;if(!vt)return;(r=document.querySelector("#closeDiscordLastSeenReportButton"))==null||r.addEventListener("click",Mi),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>Ra()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>vu()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(o=>{o.addEventListener("click",()=>pu(o.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",nf);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",rf),no();const n=document.querySelector(".discord-last-seen-report-overlay");n&&n.addEventListener("click",o=>{o.target===n&&Mi()})}function nf(t){Sn=t.target.value||"",no()}function rf(t){ot=t.target.value||"",no()}function no(){const t=Pe(Sn),e=String(ot||"").trim().toLowerCase(),n=[...document.querySelectorAll("[data-discord-last-seen-row]")];let r=0;n.forEach(s=>{const o=Pe(s.dataset.discordLastSeenSearch||s.textContent||""),a=String(s.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),m=(!t||o.includes(t))&&(!e||a===e);s.hidden=!m,m&&(r+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=r!==0)}async function Ra(){if(!(u!=null&&u.connected)||!V()){Mt="You must be logged in and connected to run this report.",f();return}it=!0,Mt="",f();try{const t=await D("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");se=po(t.members),Or=mo(t.roles),Vi=[...se]}catch(t){Mt=$(t)}finally{it=!1,f(),U("discordLastSeenReportSearchInput")}}async function Da(){if(!(u!=null&&u.connected)||!V()){Dt="You must be logged in and connected to run this report.",f();return}rt=!0,Dt="",f();try{const t=await D("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");jn=Array.isArray(t.rows)?t.rows:[]}catch(t){Dt=$(t)}finally{rt=!1,f()}}async function Ma(){if(!(u!=null&&u.connected)||!V()){Rt="You must be logged in and connected to run this report.",f();return}nt=!0,Rt="",f();try{const t=await D("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");kn=Array.isArray(t.rows)?t.rows:[]}catch(t){Rt=$(t)}finally{nt=!1,f()}}function Xt(){const t=String(An||"").trim().toLowerCase(),e={account_name:"Anonymous",rank:"Manual Entry"},n=new Set(["anonymous"]),r=fe.filter(i=>String(i.account_name||"").trim()).filter(i=>{const o=String(i.account_name||"").trim().toLowerCase();return!o||n.has(o)||t&&!o.includes(t)?!1:(n.add(o),!0)}).slice().sort((i,s)=>{const o=String(i.account_name||"").toLowerCase(),a=String(s.account_name||"").toLowerCase(),l=t&&o.startsWith(t)?0:1,d=t&&a.startsWith(t)?0:1;return l!==d?l-d:o.localeCompare(a)}).slice(0,19);return[e,...r]}function Ta(t=Xt()){const e=String(x.accountName||"").trim();return t.length===0?'<div class="roster-history-muted manual-ticket-no-matches">No matching guild members found.</div>':t.map((n,r)=>`
        <button class="roster-history-match${r===Z||n.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${h(n.account_name)}" role="option" aria-selected="${r===Z||n.account_name===e?"true":"false"}">
          <span>${c(n.account_name)}</span>
          <strong>${c(n.rank||"")}</strong>
          ${r===Z?"<small>Enter</small>":""}
        </button>
      `).join("")}function Ca(){document.querySelectorAll("[data-manual-ticket-account]").forEach(t=>{t.addEventListener("mousedown",e=>{e.preventDefault()}),t.addEventListener("click",()=>{Ba(t.dataset.manualTicketAccount||"")})})}function ai(){const t=document.querySelector("#manualTicketMatchList");if(!t)return;const e=Xt();Z>=e.length&&(Z=e.length>0?e.length-1:-1),t.innerHTML=Ta(e),Ca()}function Ba(t){const e=String(t||"").trim();x.accountName=e,An=e,ve=!1,Z=-1,ce="",f()}function U(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const n=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(n,n)},0)}function of(){const t=ve?Xt():[],e=String(x.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Entry</h3>
            <p>Add a manual banking or raffle entry such as FFTG, officer corrections, or anonymous gold.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${ce?`<div class="discord-data-error">${c(ce)}</div>`:""}

        <div class="manual-ticket-form">
          <div class="manual-ticket-member-picker">
            <label class="manual-ticket-member-field" for="manualTicketAccountSearchInput">
              <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${h(An)}" autocomplete="off" />
            </label>

            ${ve?`
              <div id="manualTicketMatchList" class="roster-history-match-list manual-ticket-match-list" role="listbox" aria-label="Matching guild members">
                ${Ta(t)}
              </div>
            `:""}
          </div>

          ${e?`<div class="roster-history-muted manual-ticket-selected-member">Selected: ${c(e)}</div>`:""}

          <div class="manual-ticket-entry-row">
            <div class="manual-ticket-type-field" role="group" aria-label="Ticket type">
              <button class="manual-ticket-type-label${x.ticketType!=="monthly"?" is-selected":""}" type="button" data-manual-ticket-type="biweekly" aria-pressed="${x.ticketType!=="monthly"?"true":"false"}">Bi-Weekly</button>
              <button class="manual-ticket-type-switch" type="button" data-manual-ticket-toggle="true" data-selected-type="${x.ticketType==="monthly"?"monthly":"biweekly"}" aria-label="Toggle ticket type. Current selection is ${x.ticketType==="monthly"?"50/50":"Bi-Weekly"}">
                <span class="manual-ticket-type-track" aria-hidden="true"></span>
                <span class="manual-ticket-type-thumb" aria-hidden="true"></span>
              </button>
              <button class="manual-ticket-type-label${x.ticketType==="monthly"?" is-selected":""}" type="button" data-manual-ticket-type="monthly" aria-pressed="${x.ticketType==="monthly"?"true":"false"}">50/50</button>
            </div>
            <label class="manual-ticket-note-field">
              <textarea id="manualTicketNoteInput" class="discord-search-input manual-ticket-note-input" rows="4" placeholder="Enter a reason such as FFTG">${c(x.note)}</textarea>
            </label>
            <div class="manual-ticket-side-fields">
              <label class="manual-ticket-gold-field">
                <input id="manualTicketGoldInput" class="discord-search-input manual-ticket-gold-input" type="number" min="0" step="1" inputmode="numeric" placeholder="Gold Value" value="${h(x.goldValue)}" />
                <span class="manual-ticket-gold-coin" aria-hidden="true"></span>
              </label>
              <label class="manual-ticket-count-field">
                <div class="manual-ticket-number-wrap">
                  <input id="manualTicketCountInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${h(x.tickets)}" />
                  <div class="manual-ticket-number-buttons" aria-hidden="true">
                    <button id="manualTicketCountUpButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2303</button>
                    <button id="manualTicketCountDownButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2304</button>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div class="manual-ticket-actions">
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${$r?"disabled":""}>${$r?"Saving...":"Add Manual Entry"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Na(){var s,o,a,l,d,m;if(!qe)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{qe=!1,f()});const t=document.querySelector("#manualTicketAccountSearchInput");if(t){const g=({rerender:p=!1}={})=>{if(ve=!0,Z=Xt().length>0?0:-1,p){f(),U("manualTicketAccountSearchInput");return}ai()};t.addEventListener("focus",()=>{ve||g({rerender:!0})}),t.addEventListener("click",()=>{ve||g({rerender:!0})}),t.addEventListener("input",p=>{An=p.target.value||"",x.accountName="",ve=!0,Z=Xt().length>0?0:-1,ai()}),t.addEventListener("keydown",p=>{if(p.key==="Escape")return;if(!ve){(p.key==="ArrowDown"||p.key==="ArrowUp")&&(p.preventDefault(),g({rerender:!0}));return}const A=Xt();if(p.key==="ArrowDown"||p.key==="ArrowUp"){if(A.length===0)return;p.preventDefault();const E=p.key==="ArrowDown"?1:-1;Z=((Z<0?0:Z)+E+A.length)%A.length,ai();return}if(p.key!=="Enter")return;p.preventDefault();const v=A[Z>=0?Z:0];v!=null&&v.account_name&&Ba(v.account_name)})}Ca(),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",g=>{x.note=g.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(g=>{g.addEventListener("click",()=>{const p=String(g.dataset.manualTicketType||"").trim().toLowerCase();x.ticketType=p==="monthly"?"monthly":"biweekly",f()})}),(a=document.querySelector("[data-manual-ticket-toggle]"))==null||a.addEventListener("click",()=>{x.ticketType=x.ticketType==="monthly"?"biweekly":"monthly",f()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",g=>{const p=String(g.target.value||"").replace(/\D/g,"");g.target.value!==p&&(g.target.value=p),x.goldValue=p});const n=document.querySelector("#manualTicketCountInput");n==null||n.addEventListener("input",g=>{const p=String(g.target.value||"").replace(/\D/g,"");g.target.value!==p&&(g.target.value=p),x.tickets=p});const r=g=>{const p=Number(x.tickets)||0,A=Math.max(0,p+g);x.tickets=String(A),n&&(n.value=x.tickets,n.focus())};(l=document.querySelector("#manualTicketCountUpButton"))==null||l.addEventListener("click",()=>r(1)),(d=document.querySelector("#manualTicketCountDownButton"))==null||d.addEventListener("click",()=>r(-1)),(m=document.querySelector("#saveManualBiweeklyTicketButton"))==null||m.addEventListener("click",()=>sf());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",g=>{g.target===i&&(qe=!1,f())})}async function sf(){if(!J())return;const t=String(x.accountName||"").trim(),e=String(x.note||"").trim(),n=String(x.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",r=Number(String(x.goldValue||"").trim()||0),i=Number(String(x.tickets||"").trim()||0);if(ve){ce="Select a matching guild member or Anonymous from the list before saving.",f(),U("manualTicketAccountSearchInput");return}if(!t){ce="Select a matching guild member or Anonymous from the list before saving.",f(),U("manualTicketAccountSearchInput");return}if(!Number.isFinite(r)||r<0){ce="Gold value must be zero or greater.",f();return}if(!Number.isFinite(i)||i<0){ce="Tickets must be zero or greater.",f();return}const s=t.toLowerCase()==="anonymous";if(s&&Math.floor(i)>0){ce="Anonymous cannot be awarded tickets. Use 0 tickets and enter a gold value.",f();return}if(Math.floor(r)===0&&Math.floor(i)===0){ce=s?"Enter a gold value for Anonymous when tickets are 0.":"Enter gold or tickets. Both cannot be zero.",f();return}$r=!0,ce="",f();try{const o=await D("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:n,gold_value:Math.floor(r),tickets:Math.floor(i)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Failed to add manual entry.");qe=!1,x={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},An="",Z=-1,ve=!1,await pe({silent:!0}),y("manual-ticket-added",o.message||"Manual entry added.",{ttlMs:b})}catch(o){ce=$(o)}finally{$r=!1,f()}}async function qa(t=""){const e=String(t||"").trim();if(!!e){yn=!0,Wn=e,ut=[],Er=!0,$t=!1,ft="",nn="",f();try{const n=await D("guildsync:request-roster-member-notes",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster notes.");ut=Array.isArray(n.notes)?n.notes:[]}catch(n){ft=$(n)}finally{Er=!1,f()}}}function Ni(){yn=!1,Wn="",ut=[],Er=!1,$t=!1,ft="",nn="",f()}function af(){var n,r;if(!yn)return;(n=document.querySelector("#closeRosterNotesButton"))==null||n.addEventListener("click",Ni);const t=document.querySelector("#rosterNotesNewNote");t&&t.addEventListener("input",i=>{nn=i.target.value||""}),(r=document.querySelector("#saveRosterNoteButton"))==null||r.addEventListener("click",()=>cf());const e=document.querySelector(".roster-notes-overlay");e&&e.addEventListener("click",i=>{i.target===e&&Ni()})}async function cf(){if(!J())return;const t=String(nn||"").trim();if(!t){ft="Enter a note before saving.",f();return}$t=!0,ft="",f();try{const e=await D("guildsync:add-roster-member-note",{account_name:Wn,note:t},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to save roster note.");e.note&&(ut=[...ut,e.note]),nn="";const n=fe.find(r=>Le(r.account_name)===Le(Wn));n&&(n.note_count=Number(n.note_count||0)+1)}catch(e){ft=$(e)}finally{$t=!1,f()}}function xa(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>Ln());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{tn=!0,je="",f()});const n=document.querySelector("#rosterMemberSearch");n&&(n.addEventListener("input",o=>{Lr=o.target.value||"",wi=o.target.selectionStart,_i=o.target.selectionEnd,z=-1,f({restoreRosterSearchFocus:!0})}),n.addEventListener("keydown",lf)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Ud(o.dataset.rosterSortColumn||"account_name")})});const r=document.querySelector("#rosterRankFilter");r&&r.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(Et.add(a),z=-1,f())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRosterRankFilter||"";Et.delete(a),z=-1,f()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(Kt.add(a),z=-1,f())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRosterLinkStatusFilter||"";Kt.delete(a),z=-1,f()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>to(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))}),document.querySelectorAll("[data-open-roster-notes]").forEach(o=>{o.addEventListener("click",()=>qa(o.dataset.openRosterNotes||""))}),af();const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{Lr="",Et.clear(),Kt.clear(),Ve="",re="",z=-1,f()}),df()}function lf(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){z=-1;return}t.preventDefault(),t.key==="ArrowDown"?z=z<0?0:Math.min(z+1,e.length-1):t.key==="ArrowUp"&&(z=z<0?e.length-1:Math.max(z-1,0)),e.forEach((r,i)=>{r.classList.toggle("roster-search-active-row",i===z)});const n=e[z];n&&typeof n.scrollIntoView=="function"&&n.scrollIntoView({block:"nearest",inline:"nearest"})}function df(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{tn=!1,f()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",n=>{if(Vn=n.target.value||"",ge=-1,!Vn.trim()){clearTimeout(si),je="",de=[],bt="",lt=[],dt=!1,f(),U("rosterHistorySearchInput");return}clearTimeout(si),si=setTimeout(()=>{pf({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(de.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;ge=((ge<0?0:ge)+i+de.length)%de.length,f(),U("rosterHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=de[ge>=0?ge:0];r!=null&&r.account_name&&rs(r.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(n=>{n.addEventListener("click",()=>{rs(n.dataset.rosterHistoryAccount||"")})})}function Ia(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{rn=!1,f()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",n=>{tt=n.target.value||"",ye=-1,wt+=1;const r=wt;if(clearTimeout(Vo),!tt.trim()){ze="",ue=[],on="",xt="",ht=[],pt=!1,f(),U("discordHistorySearchInput");return}Vo=setTimeout(()=>{uf({auto:!0,keepFocus:!0,generation:r})},kd)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(ue.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;ye=((ye<0?0:ye)+i+ue.length)%ue.length,f(),U("discordHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=ue[ye>=0?ye:0];r!=null&&r.discord_id&&ns(r.discord_id,$i(r))})),document.querySelectorAll("[data-discord-history-id]").forEach(n=>{n.addEventListener("click",()=>{ns(n.dataset.discordHistoryId||"",n.dataset.discordHistoryName||"")})})}async function uf(t={}){const e=Number.isInteger(t.generation)?t.generation:++wt,n=tt.trim();if(e===wt){if(!n){ze="",ue=[],ye=-1,on="",xt="",ht=[],pt=!1,f(),t.keepFocus&&U("discordHistorySearchInput");return}pt=!0,ze="",ue=[],ye=-1,on="",xt="",ht=[],f(),t.keepFocus&&U("discordHistorySearchInput");try{const r=await D("guildsync:request-discord-member-history",{query:n},3e4);if(e!==wt||n!==tt.trim())return;if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search Discord member history.");ue=ff(r.matches),ye=ue.length>0?0:-1}catch(r){if(e!==wt||n!==tt.trim())return;ze=$(r)}finally{if(e!==wt||n!==tt.trim())return;pt=!1,f(),t.keepFocus&&U("discordHistorySearchInput")}}}async function ns(t,e="",n={}){const r=String(t||"").trim();if(!!r){on=r,xt=String(e||r).trim(),tt=xt,ht=[],pt=!0,ze="",f();try{const i=await D("guildsync:request-discord-member-history-events",{discord_id:r},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");ht=hf(i.events)}catch(i){ze=$(i)}finally{pt=!1,n.keepLoading||f()}}}function ff(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function hf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s,o,a,l,d,m,g,p;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((r=(n=e.old_value)!=null?n:e.oldValue)!=null?r:"").trim(),new_value:String((s=(i=e.new_value)!=null?i:e.newValue)!=null?s:"").trim(),event_timestamp:(l=(a=(o=e.event_timestamp)!=null?o:e.eventTimestamp)!=null?a:e.timestamp)!=null?l:"",event_datetime:(m=(d=e.event_datetime)!=null?d:e.eventDatetime)!=null?m:"",initiator:String((p=(g=e.initiator)!=null?g:e.initiatorName)!=null?p:"").trim(),source:String(e.source||"").trim()}}):[]}async function pf(t={}){const e=Vn.trim();if(!e){je="",de=[],ge=-1,bt="",lt=[],dt=!1,f(),t.keepFocus&&U("rosterHistorySearchInput");return}dt=!0,je="",de=[],ge=-1,bt="",lt=[],f(),t.keepFocus&&U("rosterHistorySearchInput");try{const n=await D("guildsync:request-roster-rank-history",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search roster rank history.");de=mf(n.matches),ge=de.length>0?0:-1}catch(n){je=$(n)}finally{dt=!1,f(),t.keepFocus&&U("rosterHistorySearchInput")}}async function rs(t,e={}){const n=String(t||"").trim();if(!!n){bt=n,Vn=n,lt=[],dt=!0,je="",f();try{const r=await D("guildsync:request-roster-stream-history",{account_name:n},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load roster stream history.");lt=gf(r.events)}catch(r){je=$(r)}finally{dt=!1,e.keepLoading||f()}}}function mf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function gf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(r=(n=e.timestamp)!=null?n:e.timestampS)!=null?r:"",officer:String(e.officer||"").trim()}}):[]}function Oa(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(n=e.joined)!=null?n:"",note_count:Number((i=(r=e.note_count)!=null?r:e.noteCount)!=null?i:0)||0}}).sort((e,n)=>e.account_name.localeCompare(n.account_name)):[]}function yf(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function Vr(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function ro(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function bf(t={}){fe=Oa(t.members),Ar=t.last_refresh||new Date().toISOString(),un(),y("roster-data-updated",`Roster data updated. Loaded ${fe.length} member record${fe.length===1?"":"s"}.`,{ttlMs:b})}async function Ln(t={}){if(!!(u!=null&&u.connected)){Ke=!0,un();try{const e=await D("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");fe=Oa(e.members),Ar=e.last_refresh||Ar,t.silent||y("roster-data-loaded",`Loaded ${fe.length} roster member${fe.length===1?"":"s"}.`,{ttlMs:b})}catch(e){y("roster-data-error",$(e),{ttlMs:b})}finally{Ke=Boolean(t.deferPendingRefresh),un(),t.deferPendingRefresh||er("eso-members")}}}async function kf(t={}){var e;if(!!ne()){if(!(u!=null&&u.connected)){y("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:b});return}Ke=!0,un();try{const n=await Kl(t);if(!(n!=null&&n.ok)){y("roster-data-pending",(n==null?void 0:n.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:b});return}const r={local_upload_id:Pa(),authenticated_username:Ee(),authenticated_discord_user_id:((e=k==null?void 0:k.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await Ua(r)}catch(i){throw vf(r),i}await Ln({silent:!0,deferPendingRefresh:!0})}catch(n){y("roster-data-error",$(n),{ttlMs:b})}finally{Ke=!1,un(),er("eso-members")}}}function Pa(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function io(){try{const t=window.localStorage.getItem(Bs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Fa(t){window.localStorage.setItem(Bs,JSON.stringify(Array.isArray(t)?t:[]))}function vf(t){const e=String((t==null?void 0:t.local_upload_id)||Pa()),n=io().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Fa(n),y("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:b})}function Sf(t){const e=io().filter(n=>(n==null?void 0:n.local_upload_id)!==t);Fa(e)}async function Ga(){if(ri||!(u!=null&&u.connected)||!ne())return;const t=io();if(t.length!==0){ri=!0;try{for(const e of t){if(!(u!=null&&u.connected)||!ne())return;await Ua(e),Sf(e.local_upload_id)}}catch(e){y("roster-data-pending-error",`Pending roster upload retry failed: ${$(e)}`,{ttlMs:b})}finally{ri=!1}}}async function Ua(t){if(!(u!=null&&u.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await D("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const n=await Xl(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return y("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:b}),e}async function wf(t={}){var e,n;if(!!ne()){if(!(u!=null&&u.connected)){y("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:b});return}try{const r=await zl(t);if(!(r!=null&&r.ok)){y("applications-data-info",(r==null?void 0:r.message)||"No application records were found to process.",{ttlMs:b});return}if((Array.isArray((e=r==null?void 0:r.data)==null?void 0:e.records)?r.data.records:[]).length===0){y("applications-data-info",`No application records were found in ${r.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:b});return}const s={local_upload_id:Ha(),authenticated_username:Ee(),authenticated_discord_user_id:((n=k==null?void 0:k.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await ja(s)}catch(o){throw _f(s),o}}catch(r){y("applications-data-error",$(r),{ttlMs:b})}}}function Ha(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function oo(){try{const t=window.localStorage.getItem(Ns),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Va(t){window.localStorage.setItem(Ns,JSON.stringify(Array.isArray(t)?t:[]))}function _f(t){const e=String((t==null?void 0:t.local_upload_id)||Ha()),n=oo().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Va(n),y("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:b})}function Af(t){const e=oo().filter(n=>(n==null?void 0:n.local_upload_id)!==t);Va(e)}async function Wa(){if(ii||!(u!=null&&u.connected)||!ne())return;const t=oo();if(t.length!==0){ii=!0;try{for(const e of t){if(!(u!=null&&u.connected)||!ne())return;await ja(e),Af(e.local_upload_id)}}catch(e){y("applications-data-pending-error",`Pending application upload retry failed: ${$(e)}`,{ttlMs:b})}finally{ii=!1}}}async function ja(t){var i;if(!(u!=null&&u.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return y("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:b}),{ok:!0,sent_count:0,skipped_empty:!0};let n=0;for(const s of e){const o=await D("guildsync:eso-guild-application-message",{...t,record:s,recordKey:(s==null?void 0:s.recordKey)||"",message:Lf(s)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Backend rejected the application data payload. Application data was not cleared.");n+=1}const r=await Jl(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return y("applications-data-sent",`Sent ${n} application record${n===1?"":"s"} to GuildSync backend.`,{ttlMs:b}),{ok:!0,sent_count:n}}function Lf(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),n=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",r=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",s=String(t.applicationText||"_No application text captured._"),o=Object.entries(t).filter(([a])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(a)).map(([a,l])=>`**${a}:** ${Ef(l)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${n}** ${r} an application from **${i}**.`,"","**Application text:**","```",s.slice(0,1500),"```",o.length>0?"":null,o.length>0?"**Full captured record fields:**":null,...o].filter(a=>a!==null).join(`
`)}function Ef(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function $f(t={}){await wf(t)}function za(){const t=qi(G),e=ih(t,G),n=G!=="other",r=n&&En(G);return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <button id="openBankingHistoryButton" class="refresh-discord-button banking-history-button" type="button" ${V()?"":'disabled title="Login required to lookup banking history."'}>
            <span aria-hidden="true">\u2315</span>
            <span>Lookup Banking History</span>
          </button>
          <button ${J()?"":"hidden disabled"} id="openManualBiweeklyTicketButton" class="bank-export-button" type="button" ${V()?"":'disabled title="Login required to add manual entries."'}>
            <span aria-hidden="true">\uFF0B</span>
            <span>Add Manual Entry</span>
          </button>
          ${qf()}
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${c(yc(Fs))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${Qe||!V()?"disabled":""} ${V()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Qe?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${ci("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${ci("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${ci("other","?","Other","All other deposits")}
        </div>

        ${Nf(G)}

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
              ${t.length>0?t.map(i=>sh(i,n,r)).join(""):ah(n,r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${c(Zt(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${G==="monthly"?`<div>Raffle Pot: <strong>${c(Zt(Math.floor(e.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${G==="biweekly"?`<div>Raffle Pot: <strong>${c(Zt(tc(e.amount)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${G==="biweekly"?`<div>Draws: <strong>${c(String(oh(e.amount)))}</strong></div>`:""}
          ${n?`<div>Purchased: <strong>${c(_e(e.purchased))}</strong></div>${r?`<div>Bonus: <strong>${c(_e(e.bonus))}</strong></div>`:""}<div>Total Tickets: <strong>${c(_e(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${Ct?Tf(qi(Ae)):""}
    </div>
  `}function Rf(){return`
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
            <input id="bankingHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" autocomplete="off" placeholder="Start typing part of an account name..." value="${h(It)}" />
          </label>
          ${Df()}
        </div>

        ${Ne?`<div class="discord-data-error">${c(Ne)}</div>`:""}

        <div class="banking-history-results">
          <div class="roster-history-section-title">Banking History${Ce?`: ${c(Ce)}`:""}${Ce?`<span class="banking-history-count">${c(String(we.length))} record${we.length===1?"":"s"} found</span>`:""}</div>
          ${Mf()}
        </div>
      </div>
    </div>
  `}function Df(){return It.trim()?Be&&ee.length===0&&!Ce?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">Searching...</div></div>':ee.length===0&&!Ce?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">No matching banking names found.</div></div>':ee.length===0?"":`
    <div class="banking-history-autocomplete" role="listbox" aria-label="Banking history matches">
      ${ee.map((t,e)=>`
        <button class="banking-history-autocomplete-option${e===be?" is-selected":""}" type="button" data-banking-history-account="${h(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <small>${c(String(Number(t.record_count||t.recordCount||0)||0))} record${Number(t.record_count||t.recordCount||0)===1?"":"s"}</small>
        </button>
      `).join("")}
    </div>
  `:""}function Mf(){const t=we.some(e=>e.bonus_enabled);return Ce?Be&&we.length===0?'<div class="roster-history-muted">Loading banking history...</div>':we.length===0?'<div class="roster-history-muted">No banking history found for this account.</div>':`
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
          ${we.map(e=>{var n,r,i,s,o;return`
            <tr>
              <td>${c(Yf((i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:""))}</td>
              <td>${c(Kf(e.transaction_type||e.type||""))}</td>
              <td style="text-align:right;">${c(Jf((o=(s=e.deposit_amount)!=null?s:e.depositAmount)!=null?o:e.amount))} \u{1FA99}</td>
              <td style="text-align:right;">${c(li(e.purchased_tickets))}</td>
              ${t?`<td style="text-align:right;">${e.bonus_enabled?`${c(_e(e.bonus_percent))}%`:""}</td><td style="text-align:right;">${e.bonus_enabled?c(li(e.bonus_tickets)):""}</td>`:""}
              <td style="text-align:right;">${c(li(e.total_tickets))}</td>
              <td class="banking-history-note-cell">${c(e.note||"")}</td>
            </tr>
          `}).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see banking history.</div>'}function Tf(t){const e=En(Ae);return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${c(xe(Ae))} Deposits</h3>
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
              ${t.length>0?t.map(n=>Cf(n)).join(""):Bf()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${c(Xa(t))}</textarea>
      </div>
    </div>
  `}function Cf(t){const e=En(Ae);return`
    <tr data-bank-event-id="${h(t.eventId||"")}">
      <td>${c(t.displayName||"")}</td>
      <td>${c(String(uo(t,Ae)))}</td>
      <td>${c(String(t.purchasedTickets))}</td>
      ${e?`<td>${c(String(t.bonusPercent))}%</td><td>${c(String(t.bonusTickets))}</td>`:""}
      <td>${c(String(t.totalTickets))}</td>
      <td>${c(t.note||"")}</td>
    </tr>
  `}function Bf(){return`
    <tr>
      <td class="bank-empty-row" colspan="${En(Ae)?7:5}">No deposits to export for ${c(xe(Ae))}.</td>
    </tr>
  `}function Nf(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=co(t),n=Br(t),r=n<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${h(xe(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${c(xe(t))} Raffle Period ${n===0?"(Current)":`(${Math.abs(n)} period${Math.abs(n)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${c(br(e.salesStart))} through ${c(br(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${c(br(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${r?"":"disabled"} aria-label="Next ${h(xe(t))} raffle period">\u203A</button>
    </div>
  `}function ci(t,e,n,r){const i=G===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${h(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${c(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${c(n)}</span>
        <span class="bank-section-subtitle">${c(r)}</span>
      </span>
    </button>
  `}function qf(){if(!J())return"";const t=Wr(),e=nr(),n=Ya(),r=t>0,i=e>0,s=n>0;if(!r&&!i&&!s)return"";let o="",a="",l=!1;r?(o=`Check Out ${t} Deposit Mail`,a="checkout"):i?(l=!0,Wt?o=`Writing ${e} Pending Mail`:oe.running?o=`${e} Mail Waiting for ESO Closure`:(dc("render-pending-mail-button"),o=`${e} Mail Writing to Disk`)):(l=!0,o=`${n} Mail Ready to Send`);const d=r?"Check out new deposit mail. GuildSync will immediately try to write it, or hold it until ESO closes.":i?"Deposit mail is already checked out and will be written automatically after ESO closes.":"Deposit mail has been written to ESO SavedVariables and is ready for ESO to send it and write acknowledgements.",m=bi||Wt,g=oe.running?"ESO Running":"ESO Not Running",p=oe.running?"eso-running":"eso-not-running";return`
    <button id="checkoutDepositMailButton" class="${`bank-export-button deposit-mail-button${l?" deposit-mail-status-only":""}`}" type="button" data-deposit-mail-action="${h(a)}" ${l||m?'aria-disabled="true"':""} title="${h(oe.message||d)}" aria-label="${h(`${o}. ${d}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${c(o)}</span>
      <span aria-hidden="true">(</span><span class="deposit-mail-eso-status ${p}" aria-hidden="true">${c(g)}</span><span aria-hidden="true">)</span>
    </button>
  `}function nr(){return rr().reduce((t,e)=>t+$n(e.records).length,0)}function xf(){const t=(k==null?void 0:k.user)||{};return new Set([Ee(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function If(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?xf().has(e):!1}function Ya(){return V()?ae.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="written_to_eso"&&If(t)}).length:0}function Wr(){return ae.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="unsent"}).length}function Of(t){const e=String(t||"").trim();return ae.find(n=>String(n.eventId||"").trim()===e)||null}function so(t){const e=String(t||"other").toLowerCase(),n=["biweekly","monthly","other"],r=n.includes(e)?e:"other",i=n.filter(s=>s!==r);return[i[0]||"biweekly",r,i[1]||"other"]}function ao(t={},e="other"){const n=String(e||"other").toLowerCase(),r=Number(t==null?void 0:t.amount)||0;return n===String((t==null?void 0:t.type)||"").toLowerCase()?Number(t==null?void 0:t.ticketAmount)||0:n==="biweekly"?Math.floor(r/500):n==="monthly"?Math.floor(r/2500):0}function Ka(t={},e="other",n=""){const r=String(t.type||"other").toLowerCase(),i=xe(r),s=xe(e),o=Ee()||"Unknown user",a=[`Moved from ${i} to ${s} by ${o}.`,`Ref ${t.eventId||""}`],l=String(n||"").trim();return l&&a.push(`Reason: ${l}`),a.join(`
`)}function Ja(t){if(!J())return;const e=Of(t);if(!e){y("banking-move-missing","Could not find the selected banking entry.",{ttlMs:b});return}const n=String(e.type||"other").toLowerCase();He=e,Y={targetType:n,note:"",tickets:String(ao(e,n))},Ue="",cn=!1,Ft=!0,f()}function Cr(){Ft=!1,cn=!1,Ue="",He=null,Y={targetType:"other",note:"",tickets:""},f()}function Pf(){const t=He||{},e=String(t.type||"other").toLowerCase(),n=xe(e),r=so(e);let i=String(Y.targetType||r[0]||"other").toLowerCase();r.includes(i)||(i=r[0]||"other",Y.targetType=i);const s=Ka(t,i,Y.note);return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="bankingMoveDialogTitle">
      <div class="roster-history-dialog manual-ticket-dialog banking-move-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="bankingMoveDialogTitle">Move Banking Entry</h3>
            <p>Move this deposit to a different banking section while preserving a reference to the original event.</p>
          </div>
          <button id="closeBankingMoveDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${Ue?`<div class="discord-data-error">${c(Ue)}</div>`:""}

        <div class="manual-ticket-form banking-move-form">
          <div class="banking-move-current-entry">
            <div><strong>Current Type:</strong> ${c(n)}</div>
            <div><strong>Event ID:</strong> ${c(t.eventId||"")}</div>
            <div><strong>Depositor:</strong> ${c(t.displayName||"")}</div>
            <div><strong>Amount:</strong> ${c(Zt(t.amount))} \u{1FA99}</div>
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
                    data-banking-move-target="${h(o)}"
                  >
                    <strong>${c(xe(o))}</strong>
                    <span>${o===e?"Current / restore original values":`${c(String(ao(t,o)))} tickets`}</span>
                  </button>
                `).join("")}
              </div>
            </div>
          </div>

          <div class="banking-move-compact-row">
            <label class="manual-ticket-count-field banking-move-ticket-field">
              <span>Tickets Awarded</span>
              <input id="bankingMoveTicketsInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${h(Y.tickets)}" ${i==="other"?"disabled":""} />
            </label>

            <label class="manual-ticket-note-field banking-move-note-field">
              <span>Move Note</span>
              <textarea id="bankingMoveNoteInput" class="discord-search-input manual-ticket-note-input banking-move-note-input" rows="1" placeholder="Optional reason for this move">${c(Y.note)}</textarea>
            </label>
          </div>

          <div class="roster-history-muted banking-move-generated-note">${c(s).replace(/\n/g,"<br>")}</div>

          <div class="manual-ticket-actions banking-move-actions">
            <button id="saveBankingMoveButton" class="refresh-discord-button banking-move-submit-button" type="button" ${cn||i===e?"disabled":""}>${cn?"MOVING...":i===e?"SELECT A SIDE TO MOVE":"MOVE"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Ff(){var n,r,i,s;if(!Ft)return;(n=document.querySelector("#closeBankingMoveDialogButton"))==null||n.addEventListener("click",()=>Cr());function t(o){const a=String(o||"other").toLowerCase(),l=String((He==null?void 0:He.type)||"other").toLowerCase(),d=so(l);Y.targetType=d.includes(a)?a:l,Y.tickets=String(ao(He||{},Y.targetType)),f()}document.querySelectorAll("[data-banking-move-target]").forEach(o=>{o.addEventListener("click",()=>t(o.dataset.bankingMoveTarget))}),(r=document.querySelector("#bankingMoveTicketsInput"))==null||r.addEventListener("input",o=>{const a=String(o.target.value||"").replace(/\D/g,"");o.target.value!==a&&(o.target.value=a),Y.tickets=a}),(i=document.querySelector("#bankingMoveNoteInput"))==null||i.addEventListener("input",o=>{Y.note=o.target.value||"";const a=document.querySelector(".banking-move-generated-note");a&&(a.innerText=Ka(He||{},Y.targetType||"other",Y.note))}),(s=document.querySelector("#saveBankingMoveButton"))==null||s.addEventListener("click",()=>Gf());const e=document.querySelector(".roster-history-overlay");e&&e.addEventListener("click",o=>{o.target===e&&Cr()})}async function Gf(){if(!J())return;const t=He;if(!(t!=null&&t.eventId)){Ue="No banking entry is selected.",f();return}const e=String(t.type||"other").toLowerCase(),n=so(e),r=String(Y.targetType||n[0]||"other").toLowerCase();if(!n.includes(r)||r===e){Ue="Select one of the side destinations before moving this entry.",f();return}const i=r==="other"?0:Math.floor(Number(String(Y.tickets||"").trim()||0));if(!Number.isFinite(i)||i<0){Ue="Tickets must be zero or greater.",f();return}cn=!0,Ue="",f();try{const s=await D("guildsync:move-banking-entry",{event_id:t.eventId,target_type:r,tickets:i,note:Y.note||""},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to move banking entry.");Cr(),await pe({silent:!0}),y("banking-entry-moved",s.message||"Banking entry moved.",{ttlMs:b})}catch(s){cn=!1,Ue=$(s),f()}}function Uf(){if(!V()){y("banking-history-login-required","Login required to lookup banking history.",{ttlMs:b});return}_n=!0,It="",ee=[],we=[],Ce="",Be=!1,Ne="",be=-1,clearTimeout(Qt),f(),U("bankingHistorySearchInput")}function Hf(){_n=!1,Be=!1,Ne="",clearTimeout(Qt)}function Vf(){if(!_n)return;const t=document.querySelector("#bankingHistorySearchInput");t&&(t.addEventListener("input",e=>{if(It=e.target.value||"",be=-1,Ce="",we=[],!It.trim()){clearTimeout(Qt),Ne="",ee=[],Be=!1,f(),U("bankingHistorySearchInput");return}clearTimeout(Qt),Qt=setTimeout(()=>{Wf({keepFocus:!0})},250)}),t.addEventListener("keydown",e=>{if(e.key==="ArrowDown"||e.key==="ArrowUp"){if(ee.length===0)return;e.preventDefault();const r=e.key==="ArrowDown"?1:-1;be=((be<0?0:be)+r+ee.length)%ee.length,f(),U("bankingHistorySearchInput");return}if(e.key!=="Enter")return;e.preventDefault();const n=ee[be>=0?be:0];n!=null&&n.account_name&&is(n.account_name)})),document.querySelectorAll("[data-banking-history-account]").forEach(e=>{e.addEventListener("click",()=>{is(e.dataset.bankingHistoryAccount||"")})})}async function Wf(t={}){const e=It.trim();if(!e){Ne="",ee=[],be=-1,Ce="",we=[],Be=!1,f(),t.keepFocus&&U("bankingHistorySearchInput");return}Be=!0,Ne="",ee=[],be=-1,f(),t.keepFocus&&U("bankingHistorySearchInput");try{const n=await D("guildsync:request-banking-history-matches",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search banking history.");ee=jf(n.matches),be=ee.length>0?0:-1}catch(n){Ne=$(n)}finally{Be=!1,f(),t.keepFocus&&U("bankingHistorySearchInput")}}async function is(t){const e=String(t||"").trim();if(!!e){clearTimeout(Qt),Ce=e,It=e,ee=[],we=[],Be=!0,Ne="",f();try{const n=await D("guildsync:request-banking-history-records",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load banking history.");we=zf(n.records)}catch(n){Ne=$(n)}finally{Be=!1,f()}}}function jf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s;return{account_name:String(e.account_name||e.accountName||"").trim(),record_count:Number((r=(n=e.record_count)!=null?n:e.recordCount)!=null?r:0)||0,last_event_timestamp:(s=(i=e.last_event_timestamp)!=null?i:e.lastEventTimestamp)!=null?s:""}}).filter(e=>e.account_name):[]}function zf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s,o,a,l,d,m,g,p,A,v,E,T,S,O,F,j;return{event_id:String(e.event_id||e.eventId||"").trim(),transaction_type:String(e.transaction_type||e.transactionType||e.type||"").trim(),event_timestamp:(i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:"",deposit_amount:(a=(o=(s=e.deposit_amount)!=null?s:e.depositAmount)!=null?o:e.amount)!=null?a:"",ticket_quantity:(m=(d=(l=e.ticket_quantity)!=null?l:e.ticketQuantity)!=null?d:e.ticketAmount)!=null?m:"",purchased_tickets:(v=(A=(p=(g=e.purchasedTickets)!=null?g:e.ticket_quantity)!=null?p:e.ticketQuantity)!=null?A:e.ticketAmount)!=null?v:0,bonus_tickets:(E=e.bonusTickets)!=null?E:0,bonus_percent:(T=e.bonusPercent)!=null?T:0,bonus_enabled:e.bonusEnabled===!0,total_tickets:(j=(F=(O=(S=e.totalTickets)!=null?S:e.ticket_quantity)!=null?O:e.ticketQuantity)!=null?F:e.ticketAmount)!=null?j:0,note:String(e.note||"").trim()}}).sort((e,n)=>{const r=Number(e.event_timestamp)||0,i=Number(n.event_timestamp)||0;return r!==i?r-i:String(e.event_id).localeCompare(String(n.event_id),void 0,{numeric:!0})}):[]}function Yf(t){const e=Number(t);if(!e)return"";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t);const r=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0"),s=String(n.getFullYear()),o=String(n.getHours()).padStart(2,"0"),a=String(n.getMinutes()).padStart(2,"0"),l=String(n.getSeconds()).padStart(2,"0");return`${r}/${i}/${s} ${o}:${a}:${l}`}function Kf(t){const e=String(t||"").trim().toLowerCase();return e==="monthly"?"50/50":e==="biweekly"?"Bi-Weekly":e==="other"?"Other":e?e.replace(/\b\w/g,n=>n.toUpperCase()):""}function Jf(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":Zt(e)}function li(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":_e(e)}function Qa(){if(I!=="more")return;Ff(),Vf(),document.querySelectorAll("[data-bank-entry-move]").forEach(a=>{a.addEventListener("click",()=>Ja(a.dataset.bankEntryMove||""))}),document.querySelectorAll("[data-bank-section]").forEach(a=>{a.addEventListener("click",()=>{G=a.dataset.bankSection||"biweekly",f()})}),document.querySelectorAll("[data-bank-export-section]").forEach(a=>{a.addEventListener("click",()=>{Ae=(a.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",Ct=!0,f()})}),document.querySelectorAll("[data-bank-period-move]").forEach(a=>{a.addEventListener("click",()=>{Zf(a.dataset.bankPeriodMove||""),f()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{Ct=!1,f()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>Qf());const n=document.querySelector(".bank-export-overlay");n&&n.addEventListener("click",a=>{a.target===n&&(Ct=!1,f())});const r=document.querySelector("#openBankingHistoryButton");r&&r.addEventListener("click",()=>Uf());const i=document.querySelector("#openManualBiweeklyTicketButton");i&&i.addEventListener("click",async()=>{if(!!J()){if(!V()){y("manual-ticket-login-required","Login required to add manual entries.",{ttlMs:b});return}qe=!0,ce="",An=x.accountName||"",ve=!1,Z=-1,fe.length===0&&(u==null?void 0:u.connected)&&V()&&await Ln({silent:!0}),f()}});const s=document.querySelector("#checkoutDepositMailButton");s&&s.addEventListener("click",()=>{s.dataset.depositMailAction==="checkout"&&s.getAttribute("aria-disabled")!=="true"&&lc()});const o=document.querySelector("#refreshBankingDataButton");o&&o.addEventListener("click",()=>{if(!ne()){pe();return}if(!V()){y("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:b});return}sc({key:"banking"})})}function Xa(t){const e=En(Ae),n=[["Guildie Name","Deposit Amount","Purchased Tickets",...e?["Bonus %","Bonus Tickets"]:[],"Total Tickets","Note"]];for(const r of t)n.push([r.displayName||"",String(uo(r,Ae)),String(r.purchasedTickets),...e?[`${r.bonusPercent}%`,String(r.bonusTickets)]:[],String(r.totalTickets),r.note||""]);return n.map(r=>r.map(jr).join("	")).join(`
`)}function jr(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function zr(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly","readonly"),n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.width="1px",n.style.height="1px",n.style.opacity="0",n.style.pointerEvents="none",n.style.zIndex="-1",document.body.appendChild(n),n.focus(),n.select(),n.setSelectionRange(0,n.value.length);let r=!1;try{r=document.execCommand("copy")}finally{document.body.removeChild(n)}return r}async function Qf(){const t=qi(Ae),e=Xa(t);if(await zr(e)){y("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:b});return}const r=document.querySelector("#bankingExportTsv");r&&(r.focus(),r.select()),y("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:b})}function qi(t){return ae.filter(e=>e.type===t).filter(e=>Xf(t,e)).sort((e,n)=>(Number(e.time)||0)-(Number(n.time)||0))}function Xf(t,e){if(t==="other")return!0;const n=Number(e==null?void 0:e.time)||0;if(n<=0)return!1;const r=co(t);return n>=r.salesStart&&n<=r.salesEnd}function Br(t){return Number(Ai[t])||0}function Zf(t){if(G!=="biweekly"&&G!=="monthly")return;const e=Br(G);if(t==="previous"){Ai[G]=e-1;return}t==="next"&&e<0&&(Ai[G]=e+1)}function co(t){const e=Math.floor(Date.now()/1e3);if(t==="monthly"){const i=eh(e,Br(t));return{salesStart:ec(i)+1,salesEnd:i,raffleTime:i+Rr}}const n=kt;let r=Za(e);return r+=Br(t)*n,{salesStart:r-n+1,salesEnd:r,raffleTime:r+Rr}}function Za(t){const e=kt;let n=vd;for(;n-e>t;)n-=e;for(;n<t;)n+=e;return n}function eh(t,e=0){let n=th(t),r=Number(e)||0;for(;r<0;)n=ec(n),r+=1;for(;r>0;)n=nh(n),r-=1;return n}function th(t){let e=Za(t);for(;!lo(e);)e+=kt;return e}function ec(t){let e=t-kt;for(;!lo(e);)e-=kt;return e}function nh(t){let e=t+kt;for(;!lo(e);)e+=kt;return e}function lo(t){const e=t+Rr,n=t+kt+Rr;return os(e)!==os(n)}function os(t){var s,o;const e=new Date(Number(t||0)*1e3);if(Number.isNaN(e.getTime()))return"";const n=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit"}).formatToParts(e),r=((s=n.find(a=>a.type==="year"))==null?void 0:s.value)||"",i=((o=n.find(a=>a.type==="month"))==null?void 0:o.value)||"";return`${r}-${i}`}function rh(t=G){const e=String(t||"").toLowerCase();return e!=="monthly"&&e!=="biweekly"?0:"auto"}function uo(t={},e=G){const n=Number(t.amount)||0;if(!rh(e))return n;const r=Math.abs(Math.trunc(n))%10,i=r===1||r===3?r:0;return i>0&&n>i?n-i:n}function ih(t,e=G){return t.reduce((n,r)=>(n.amount+=uo(r,e),n.purchased+=Number(r.purchasedTickets)||0,n.bonus+=Number(r.bonusTickets)||0,n.tickets+=Number(r.totalTickets)||0,n),{amount:0,purchased:0,bonus:0,tickets:0})}function tc(t){const e=Math.ceil((Number(t)||0)/2);return e<=0?0:Math.ceil(e/2e5)*2e5}function oh(t){const e=tc(t);return e>0?e/2e5:0}function En(t){var n;if(t!=="biweekly"&&t!=="monthly")return!1;const{salesEnd:e}=co(t);return((n=an.find(r=>r.type===t&&r.salesEnd===e))==null?void 0:n.enabled)===!0}function sh(t,e=!0,n=En(G)){return`
    <tr data-bank-event-id="${h(t.eventId||"")}">
      <td>${c(t.note||t.eventId||"")}</td>
      <td>${c(br(t.time))}</td>
      <td>${c(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${c(Zt(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td>${c(_e(t.purchasedTickets))}</td>${n?`<td>${c(_e(t.bonusPercent))}%</td><td>${c(_e(t.bonusTickets))}</td>`:""}<td><strong class="bank-ticket-amount">${c(_e(t.totalTickets))}</strong></td>`:""}
      <td>${J()?`<button class="bank-entry-move-button" type="button" data-bank-entry-move="${h(t.eventId||"")}">Move</button>`:""}</td>
    </tr>
  `}function ah(t=!0,e=!1){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?e?"9":"7":"5"}">No ${c(xe(G))} deposits found for this ${G==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function xe(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function br(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Zt(t){return(Number(t)||0).toLocaleString()}function _e(t){return(Number(t)||0).toLocaleString()}function $n(t){return Array.isArray(t)?t.map(e=>{var r,i,s,o,a,l,d,m,g,p,A,v,E,T,S,O,F,j,Fe,Gt,$e,St,M,P,w,_,L,B,ie,W,Re,ir,Rn,or,wo,_o,Ao,Lo,Eo,$o,Ro,Do,Mo,To,Co,Bo,No;const n=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:n==="monthly"||n==="biweekly"||n==="other"?n:"other",eventId:String((i=(r=e==null?void 0:e.eventId)!=null?r:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((o=(s=e==null?void 0:e.time)!=null?s:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((l=(a=e==null?void 0:e.displayName)!=null?a:e==null?void 0:e.display_name)!=null?l:"").trim(),amount:Number((d=e==null?void 0:e.amount)!=null?d:0)||0,ticketAmount:Number((g=(m=e==null?void 0:e.ticketAmount)!=null?m:e==null?void 0:e.ticket_amount)!=null?g:0)||0,purchasedTickets:Number((A=(p=e==null?void 0:e.purchasedTickets)!=null?p:e==null?void 0:e.ticketAmount)!=null?A:0)||0,bonusTickets:Number((v=e==null?void 0:e.bonusTickets)!=null?v:0)||0,bonusPercent:Number((E=e==null?void 0:e.bonusPercent)!=null?E:0)||0,bonusEnabled:(e==null?void 0:e.bonusEnabled)===!0,totalTickets:Number((S=(T=e==null?void 0:e.totalTickets)!=null?T:e==null?void 0:e.ticketAmount)!=null?S:0)||0,note:String((O=e==null?void 0:e.note)!=null?O:"").trim(),dataSource:String((j=(F=e==null?void 0:e.dataSource)!=null?F:e==null?void 0:e.data_source)!=null?j:"").trim(),emailRequested:Boolean((Fe=e==null?void 0:e.emailRequested)!=null?Fe:e==null?void 0:e.email_requested),mailStatus:String(($e=(Gt=e==null?void 0:e.mailStatus)!=null?Gt:e==null?void 0:e.mail_status)!=null?$e:"").trim(),mailRequestId:String((M=(St=e==null?void 0:e.mailRequestId)!=null?St:e==null?void 0:e.mail_request_id)!=null?M:"").trim(),mailBatchId:String((w=(P=e==null?void 0:e.mailBatchId)!=null?P:e==null?void 0:e.mail_batch_id)!=null?w:"").trim(),checkedOutBy:String((L=(_=e==null?void 0:e.checkedOutBy)!=null?_:e==null?void 0:e.checked_out_by)!=null?L:"").trim(),checkedOutAt:String((ie=(B=e==null?void 0:e.checkedOutAt)!=null?B:e==null?void 0:e.checked_out_at)!=null?ie:"").trim(),checkoutExpiresAt:String((Re=(W=e==null?void 0:e.checkoutExpiresAt)!=null?W:e==null?void 0:e.checkout_expires_at)!=null?Re:"").trim(),writtenToEsoAt:String((Rn=(ir=e==null?void 0:e.writtenToEsoAt)!=null?ir:e==null?void 0:e.written_to_eso_at)!=null?Rn:"").trim(),sentAt:String((wo=(or=e==null?void 0:e.sentAt)!=null?or:e==null?void 0:e.sent_at)!=null?wo:"").trim(),failedReason:String((Ao=(_o=e==null?void 0:e.failedReason)!=null?_o:e==null?void 0:e.failed_reason)!=null?Ao:"").trim(),recipient:String((Ro=($o=(Eo=(Lo=e==null?void 0:e.recipient)!=null?Lo:e==null?void 0:e.account_name)!=null?Eo:e==null?void 0:e.displayName)!=null?$o:e==null?void 0:e.display_name)!=null?Ro:"").trim(),subject:String((To=(Mo=(Do=e==null?void 0:e.subject)!=null?Do:e==null?void 0:e.mailSubject)!=null?Mo:e==null?void 0:e.mail_subject)!=null?To:"").trim(),body:String((No=(Bo=(Co=e==null?void 0:e.body)!=null?Co:e==null?void 0:e.mailBody)!=null?Bo:e==null?void 0:e.mail_body)!=null?No:"").trim()}}):[]}function ch(t){const e=new Map;for(const n of ae)n.eventId&&e.set(n.eventId,n);for(const n of t)!n.eventId||e.set(n.eventId,n);ae=Array.from(e.values()).sort((n,r)=>(Number(r.time)||0)-(Number(n.time)||0))}function lh(t){t.querySelectorAll("[data-open-member-link-dialog]").forEach(e=>{e.addEventListener("click",()=>to(e.dataset.openMemberLinkDialog||"",e.dataset.memberLinkValue||""))}),t.querySelectorAll("[data-open-roster-notes]").forEach(e=>{e.addEventListener("click",()=>qa(e.dataset.openRosterNotes||""))}),t.querySelectorAll("[data-bank-entry-move]").forEach(e=>{e.addEventListener("click",()=>Ja(e.dataset.bankEntryMove||""))})}function fo(t,e,n=!1,r=!1){const i=document.querySelector(t);if(!i)return;const s=Ki(i),o=document.activeElement,a=o&&"selectionStart"in o?[o.selectionStart,o.selectionEnd]:null,l=document.createElement("template");l.innerHTML=e;const d=l.content.firstElementChild,m=n?".bank-deposit-table":r?".eso-roster-table":".discord-member-table";qo(i.querySelector(`${m} tbody`),d.querySelector(`${m} tbody`),n?"data-bank-event-id":r?"data-eso-account-name":"data-discord-user-id",lh),Nn(i.querySelector(`${m} thead`),d.querySelector(`${m} thead`)),qn(i.querySelector(".discord-data-actions .discord-last-refresh"),d.querySelector(".discord-data-actions .discord-last-refresh"));const g=n?"#refreshBankingDataButton":r?"#refreshRosterDataButton":"#refreshDiscordDataButton",p=i.querySelector(g),A=d.querySelector(g);if(p&&A&&(p.disabled=A.disabled,qn(p.lastElementChild,A.lastElementChild)),n){Nn(i.querySelector(".bank-deposits-summary-row"),d.querySelector(".bank-deposits-summary-row")),Nn(i.querySelector(".bank-raffle-period-content"),d.querySelector(".bank-raffle-period-content"));const v=i.querySelector("#checkoutDepositMailButton"),E=d.querySelector("#checkoutDepositMailButton");if(!E)v==null||v.remove();else if(!v||!v.isEqualNode(E)){const j=E.cloneNode(!0);j.addEventListener("click",()=>{j.dataset.depositMailAction==="checkout"&&j.getAttribute("aria-disabled")!=="true"&&lc()}),v?v.replaceWith(j):i.querySelector(".discord-data-actions").insertBefore(j,i.querySelector("[data-bank-export-section]"))}qo(i.querySelector("#bankingExportGrid tbody"),d.querySelector("#bankingExportGrid tbody"),"data-bank-event-id"),Nn(i.querySelector("#bankingExportGrid thead"),d.querySelector("#bankingExportGrid thead")),qn(i.querySelector(".bank-export-count"),d.querySelector(".bank-export-count"));const T=i.querySelector("#copyBankingExportGridButton"),S=d.querySelector("#copyBankingExportGridButton");T&&S&&(T.disabled=S.disabled);const O=i.querySelector("#bankingExportTsv"),F=d.querySelector("#bankingExportTsv");O&&F&&O.value!==F.value&&(O.value=F.value)}else{qn(i.querySelector(".discord-results-count"),d.querySelector(".discord-results-count"));const v=r?"#rosterRankFilter":"#discordRoleFilter",E=i.querySelector(v),T=d.querySelector(v);if(E&&T&&E.innerHTML!==T.innerHTML){const S=E.value;E.innerHTML=T.innerHTML,E.value=S}}(o==null?void 0:o.isConnected)&&document.activeElement!==o&&(o.focus({preventScroll:!0}),a&&a[0]!==null&&o.setSelectionRange(...a)),s()}function un(){I==="eso-members"&&document.querySelector(".eso-roster-panel")&&fo(".eso-roster-panel",Ys(),!1,!0)}function kr(){Ze||Xe||vt?f():I==="discord-members"?fn():I==="eso-members"&&un()}function fn(){I==="discord-members"&&document.querySelector(".discord-member-panel")&&fo(".discord-member-panel",zs())}function nc(t){const e=an.find(n=>`${n.type}:${n.salesEnd}`===Ye);if(t.bonusSettings&&(X=t.bonusSettings),Array.isArray(t.bonusRaffles)){const n=[...t.bonusRaffles];e&&!n.some(r=>`${r.type}:${r.salesEnd}`===Ye)&&n.push(e),an=n}}function dh(){if(I!=="settings"||!X)return;const t=document.querySelector(".raffle-bonus-card");if(!t)return;const e=Ki(t.parentElement),n=document.createElement("template");n.innerHTML=ta();const r=n.content.firstElementChild;if(t.querySelector("#raffleBonusSettingsForm")){const i=t.querySelector("#bonusRafflePicker"),s=r.querySelector("#bonusRafflePicker");if(i&&s&&i.innerHTML!==s.innerHTML){const o=i.value;i.innerHTML=s.innerHTML,i.value=o}if(!ke&&(Me==null?void 0:Me.raffle)!==Ye){qn(t.querySelector("[data-bonus-settings-source]"),r.querySelector("[data-bonus-settings-source]"));const o=t.querySelectorAll(".raffle-bonus-tiers"),a=r.querySelectorAll(".raffle-bonus-tiers");o.forEach((l,d)=>{const m=a[d];!m||(l.querySelectorAll("input").length!==m.querySelectorAll("input").length?Nn(l,m):m.querySelectorAll("input").forEach(g=>{const p=Array.from(l.querySelectorAll("input")).find(A=>A.name===g.name);!p||(p.type==="checkbox"?p.checked!==g.checked&&(p.checked=g.checked):p.value!==g.value&&(p.value=g.value))}))})}}else{const i=r.cloneNode(!0);t.replaceWith(i),ea(i),ps(Ps,{refresh:!0,root:i})}e()}function he(){dh(),I==="more"&&document.querySelector(".bank-deposits-panel")&&fo(".bank-deposits-panel",za(),!0)}function rc(){Fs=new Date().toISOString()}async function uh(t={}){!(t!=null&&t.ok)||(ae=$n(t.entries),nc(t),rc(),he(),y("banking-data-updated",`Banking data updated. Loaded ${ae.length} deposit record${ae.length===1?"":"s"}.`,{ttlMs:b}))}async function pe(t={}){const e=Boolean(t.silent),n=Boolean(t.background);if(!(u!=null&&u.connected)){e||y("banking-data-error","GuildSync websocket is not connected.",{ttlMs:b});return}n||(Qe=!0,he());try{const r=await D("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");ae=$n(r.entries),nc(r),rc(),e||y("banking-data",`Loaded ${ae.length} banking deposit record${ae.length===1?"":"s"}.`,{ttlMs:b})}catch(r){e||y("banking-data-error",$(r),{ttlMs:b})}finally{n||(Qe=Boolean(t.deferPendingRefresh)),he(),t.deferPendingRefresh||er("more")}}async function ss(){!(u!=null&&u.connected)||!J()||Qe||(await pe({silent:!0,background:!0}),Wr()<=0&&nr()>0&&(oe.running?he():dc("availability-refresh")))}function ic(){Vt&&clearInterval(Vt),ss(),Vt=window.setInterval(ss,gd)}function oc(){Vt&&(clearInterval(Vt),Vt=null)}async function fh(t={}){if(!!J()){if(!(u!=null&&u.connected)){y("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:b});return}try{const e=await jl(t);if(!(e!=null&&e.ok))return;const n=Array.isArray(e.ackEntries)?e.ackEntries:[];if(n.length===0)return;const r=await D("guildsync:mark-deposit-mail-sent",{mail_ack:n,mail_request_ids:n.map(o=>(o==null?void 0:o.mail_request_id)||(o==null?void 0:o.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(r.mail_request_ids)?r.mail_request_ids:Array.isArray(r.mailRequestIds)?r.mailRequestIds:[];if(i.length===0){y("deposit-mail-ack-none",r.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:b});return}const s=await Vl(i);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");y("deposit-mail-ack-sent",s.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:b}),await pe({silent:!0})}catch(e){y("deposit-mail-ack-error",$(e),{ttlMs:b})}}}async function hh(){if(!!J()&&!oi){oi=!0;try{const t=await Zl();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&y("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:b})}catch(t){y("deposit-mail-ack-cleanup-error",$(t),{ttlMs:b})}finally{oi=!1}}}async function sc(t={}){var e,n;if(!!ne()){if(!(u!=null&&u.connected)){y("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:b});return}Qe=!0,he();try{const r=await Yl(t);if(!(r!=null&&r.ok)){y("banking-data-pending",(r==null?void 0:r.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:b});return}const i=$n((e=r==null?void 0:r.data)==null?void 0:e.entries);ch(i);const s=new Date().toISOString(),o={local_upload_id:uc(),authenticated_username:Ee(),authenticated_discord_user_id:((n=k==null?void 0:k.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:s,data:r.data||{}};try{await pc(o)}catch(a){throw yh(o),a}await pe({silent:!0,deferPendingRefresh:!0})}catch(r){y("banking-data-error",$(r),{ttlMs:b})}finally{Qe=!1,he(),er("more")}}}function ac(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function rr(){try{const t=window.localStorage.getItem(Cs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function cc(t){window.localStorage.setItem(Cs,JSON.stringify(Array.isArray(t)?t:[]))}function ph(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||ac()),n=rr().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);n.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),cc(n)}function as(t){const e=String(t||"").trim();if(!e)return;const n=rr().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);cc(n)}async function lc(){if(!J()){y("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:b});return}if(!(u!=null&&u.connected)){y("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:b});return}const t=rr(),e=Wr();if(t.length>0&&e<=0){await hn();return}bi=!0,he();try{const n=await D("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail checkout request.");const r=$n(n.records);if(r.length===0){y("deposit-mail-none",n.message||"No unsent deposit mail is available.",{ttlMs:b}),await pe({silent:!0});return}const i={mail_batch_id:n.mail_batch_id||n.mailBatchId||ac(),checked_out_by:n.checked_out_by||n.checkedOutBy||Ee(),checked_out_at:new Date().toISOString(),records:r};ph(i),await hn()}catch(n){y("deposit-mail-error",$(n),{ttlMs:b})}finally{bi=!1,he()}}function dc(t=""){jt||Wt||!J()||nr()<=0||oe.running||(jt=window.setTimeout(()=>{jt=null,hn()},100))}async function hn(){if(jt&&(window.clearTimeout(jt),jt=null),Wt||!J())return;const t=rr();if(t.length!==0){if(await xi({silent:!0}),oe.running){y("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:b}),he();return}Wt=!0,he();try{for(const e of t){if(!J())return;const n=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),r=$n(e==null?void 0:e.records);if(r.length===0){as(n);continue}const i=await ud(r);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(u!=null&&u.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const s=await D("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:n,event_ids:i.eventIds||r.map(o=>o.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend did not confirm deposit mail was marked written_to_eso.");as(n),y("deposit-mail-written",i.message||`Wrote ${r.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:b})}await pe({silent:!0})}catch(e){y("deposit-mail-write-error",$(e),{ttlMs:b})}finally{Wt=!1,he()}}}async function xi(t={}){try{const e=Boolean(oe.running),n=await ed();oe={running:Boolean(n==null?void 0:n.running),message:String((n==null?void 0:n.message)||"")},oe.running||await hh(),e&&!oe.running&&(y("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:b}),await hn()),e!==oe.running&&he()}catch(e){t.silent||y("eso-status-error",$(e),{ttlMs:b})}}function mh(){Ht&&clearInterval(Ht),xi({silent:!0}).then(()=>{!oe.running&&nr()>0&&hn()}),Ht=window.setInterval(()=>xi({silent:!0}),md)}function gh(){Ht&&(clearInterval(Ht),Ht=null)}function uc(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function ho(){try{const t=window.localStorage.getItem(Ts),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function fc(t){window.localStorage.setItem(Ts,JSON.stringify(Array.isArray(t)?t:[]))}function yh(t){const e=String((t==null?void 0:t.local_upload_id)||uc()),n=ho().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),fc(n),y("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:b})}function bh(t){const e=ho().filter(n=>(n==null?void 0:n.local_upload_id)!==t);fc(e)}async function hc(){if(ni||!(u!=null&&u.connected)||!ne())return;const t=ho();if(t.length!==0){ni=!0;try{for(const e of t){if(!(u!=null&&u.connected)||!ne())return;await pc(e),bh(e.local_upload_id)}}catch(e){y("banking-data-pending-error",`Pending banking upload retry failed: ${$(e)}`,{ttlMs:b})}finally{ni=!1}}}async function pc(t){if(!(u!=null&&u.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await D("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const n=await Ql(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return y("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:b}),e}function mc(){if(I!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>kh());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{rn=!0,ze="",f(),U("discordHistorySearchInput")});const n=document.querySelector("#discordMemberSearch");n&&n.addEventListener("input",o=>{_r=o.target.value||"",ki=o.target.selectionStart,vi=o.target.selectionEnd,f({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Ah(o.dataset.discordSortColumn||"username")})});const r=document.querySelector("#discordRoleFilter");r&&r.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(zt.add(a),f())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRoleFilter||"";zt.delete(a),f()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(Yt.add(a),f())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeDiscordLinkStatusFilter||"";Yt.delete(a),f()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>to(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{_r="",zt.clear(),Yt.clear(),f()})}async function kh(){var t,e;if(!ne()){await zn();return}if(!(u!=null&&u.connected)){y("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:b});return}wr=!0,fn(),y("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const n=await D("guildsync:request-discord-data-refresh",{requested_by:((t=k==null?void 0:k.user)==null?void 0:t.display_name)||((e=k==null?void 0:k.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to request Discord data refresh.");y("discord-refresh-requested",n.message||"Discord data refresh completed.",{ttlMs:b}),await zn({silent:!0})}catch(n){y("discord-refresh-error",$(n),{ttlMs:b})}finally{wr=!1,fn()}}async function vh(){if(!(u!=null&&u.connected))return;const t=await D("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(Pr=t.value||null)}async function Sh(t={}){if(!!(t!=null&&t.ok)){se=po(t.members),Or=mo(t.roles),t.last_refresh&&(Pr=t.last_refresh);try{await vh()}catch{}I==="discord-members"&&fn(),y("discord-data-updated",`Discord data updated. Loaded ${se.length} member record${se.length===1?"":"s"}.`,{ttlMs:b})}}async function zn(t={}){const e=Boolean(t.silent);if(!(u!=null&&u.connected)){y("discord-data-error","GuildSync websocket is not connected.",{ttlMs:b});return}en=!0,fn();try{const[n,r]=await Promise.all([D("guildsync:request-discord-data-date",{}),D("guildsync:request-discord-member-dataJSON",{})]);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord refresh date.");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord member data.");Pr=n.value||null,se=po(r.members),Or=mo(r.roles),e||y("discord-data",`Loaded ${se.length} Discord member record${se.length===1?"":"s"}.`,{ttlMs:b})}catch(n){y("discord-data-error",$(n),{ttlMs:b})}finally{en=!1,fn(),er("discord-members")}}function D(t,e={},n=3e4){return new Promise((r,i)=>{var a,l,d;if(!(t==="guildsync:set-role-view"&&(((a=k.user)==null?void 0:a.actual_role)||((l=k.user)==null?void 0:l.role))==="admin")&&!Bc((d=k.user)==null?void 0:d.role,t)){i(new Error("Your current role or view does not have permission to perform this action."));return}if(!(u!=null&&u.connected)){i(new Error("GuildSync websocket is not connected."));return}let s=!1;const o=window.setTimeout(()=>{s||(s=!0,i(new Error(`${t} timed out.`)))},n);u.emit(t,e,m=>{s||(s=!0,window.clearTimeout(o),r(m))})})}function po(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(gc).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,n)=>Yn(e).localeCompare(Yn(n),void 0,{sensitivity:"base"})):[]}function mo(t){if(!Array.isArray(t))return[];const e=new Map;for(const n of t){const r=gc(n);if(!r)continue;const i=r.role_id||Pn(r.role_name);i&&!e.has(i)&&e.set(i,r)}return Array.from(e.values()).sort((n,r)=>String(n.role_name||"").localeCompare(String(r.role_name||""),void 0,{sensitivity:"base"}))}function gc(t){var i,s;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),n=String(t.role_name||t.name||"Unnamed Role").trim(),r=(s=(i=t.role_color)!=null?i:t.color)!=null?s:null;return{role_id:e,role_name:n||"Unnamed Role",role_color:r}}function wh(){const t=_r.trim().toLowerCase(),e=Array.from(zt),n=se.filter(r=>{if(t&&![r.username,r.global_name,r.server_nickname,r.discord_id,...r.roles.map(s=>s.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(r.roles.map(s=>s.role_name));if(!e.every(s=>i.has(s)))return!1}return!!Xs(Yt,jd(r))});return _h(n)}function _h(t){const e=Lt==="desc"?-1:1;return[...t].sort((n,r)=>{const i=cs(n,Hn),s=cs(r,Hn),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:Yn(n).localeCompare(Yn(r),void 0,{sensitivity:"base",numeric:!0})})}function cs(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(n=>n.role_name||"").filter(Boolean).sort((n,r)=>n.localeCompare(r,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function Ah(t){const n=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";Hn===n?Lt=Lt==="asc"?"desc":"asc":(Hn=n,Lt="asc"),f()}function cr(t,e){const n=Hn===t,r=Lt==="asc"?"ascending":"descending",i=n?Lt==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${n?r:"none"}">
      <button
        class="discord-sort-header${n?" active":""}"
        type="button"
        data-discord-sort-column="${h(t)}"
        title="Sort ${h(e)} ${n&&Lt==="asc"?"descending":"ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function Lh(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(ki)?ki:t.value.length,n=Number.isInteger(vi)?vi:e;t.setSelectionRange(e,n)}}function Eh(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(wi)?wi:t.value.length,n=Number.isInteger(_i)?_i:e;t.setSelectionRange(e,n)}}function $h(){const t=new Set;for(const e of se)for(const n of e.roles)n.role_name&&t.add(n.role_name);return Array.from(t).sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function Rh(t){const e=Nh(t),n=Yn(t),r=t.roles||[];return`
    <tr data-discord-user-id="${h(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${h(e)}" alt="${h(n)}" />`:`<span>${c($c(n))}</span>`}
          </div>
          <span>${c(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${c(t.global_name||"")}</td>
      <td>${c(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${r.length>0?r.map(i=>Mh(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${ka({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function Dh(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${c(en?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function Mh(t){const e=Yr(t.role_color),n=bo(e),r=yo(e,n);return`
    <span
      class="discord-role-badge"
      title="${h(t.role_name)}"
      style="${r}"
    >${c(t.role_name)}</span>
  `}function Th(t){const e=go(t),n=Yr(e==null?void 0:e.role_color),r=bo(n),i=yo(n,r);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-role-filter="${h(t)}"
      style="${i}"
      title="Remove ${h(t)} filter"
    >
      <span>${c(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Ch(t){const e=Bh(t);for(const n of e){const r=go(n);if(r)return r}return null}function Bh(t){const e=String(t||"").trim();if(!e)return[];const n=Pn(e),i={associate:["Associates","Associate"],associates:["Associates","Associate"],soldier:["Soldiers","Soldier"],soldiers:["Soldiers","Soldier"],capo:["Capo"],capos:["Capo","Capos"],caporegime:["CapoRegime","Capo Regime","Capo Regimes"],consiglieres:["Consigliere","Consiglieres"],consigliere:["Consigliere","Consiglieres"]}[n]||[e];return Array.from(new Set([e,...i].filter(Boolean)))}function Pn(t){return String(t||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function go(t){const e=Pn(t);if(!e)return null;const n=Or.find(r=>Pn(r.role_name)===e);if(n)return n;for(const r of se){const i=r.roles.find(s=>Pn(s.role_name)===e);if(i)return i}return null}function Yr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function yo(t,e){return[`--role-fill-top: ${ls(t,"#ffffff",.16)}`,`--role-fill-bottom: ${ls(t,"#000000",.1)}`,`--role-fill-glow: ${ds(t,.28)}`,`--role-fill-edge: ${ds(t,.46)}`,`color: ${e}`].join("; ")}function ls(t,e,n){const r=lr(t)||lr("#64748b"),i=lr(e)||lr("#ffffff"),s=Math.max(0,Math.min(1,Number(n)||0)),o=Math.round(r.red+(i.red-r.red)*s),a=Math.round(r.green+(i.green-r.green)*s),l=Math.round(r.blue+(i.blue-r.blue)*s);return`#${di(o)}${di(a)}${di(l)}`}function lr(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function di(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function ds(t,e){const n=String(t||"#64748b").replace("#",""),r=/^[0-9a-f]{6}$/i.test(n)?n:"64748b",i=parseInt(r.slice(0,2),16),s=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`rgba(${i}, ${s}, ${o}, ${e})`}function bo(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const n=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(n*299+r*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function Nh(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!n)return"";const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function Yn(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function yc(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function ko(t){var o;const e=((o=k.user)==null?void 0:o.role)==="admin",n=e&&Number(t)||0,r=document.querySelector("#userPendingBadge");r&&(r.innerHTML=Pc(n));const i=document.querySelector("#userAdminMenuCount");i&&(i.textContent=n?`${n} pending`:"");const s=document.querySelector("#discordAvatarButton");s&&s.setAttribute("aria-label",n?`GuildSync profile menu, ${n} pending account requests`:"GuildSync profile menu")}function qh(t){var n;if(!t||t.discord_user_id!==((n=k.user)==null?void 0:n.discord_user_id))return;const e=k.user.role;k.user={...k.user,...t},e!==t.role&&(Se.reset(),zi.clear(),Un(t.role)||(Ft=!1,qe=!1),f(),Bt({silent:!0}),hs(t.role)&&(hc(),Ga(),Wa()),Un(t.role)?ic():oc()),Fn(),Se.start()}function Fn(){const t=document.querySelector("#discordArea");if(!!t){if(Pt(!1),V()){const e=k.user||{},n=Ee(),r=Zh(e),i=$c(n);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Open GuildSync user menu" aria-label="GuildSync profile menu">
          ${r?`<img src="${h(r)}" alt="${h(n)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${c(i)}</span>`}
        </button>
        <span id="userPendingBadge" class="user-pending-badge-wrap"></span>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `,ko(Se.count);const s=document.querySelector("#discordAvatarButton");s.addEventListener("contextmenu",o=>{o.preventDefault(),us()}),s.addEventListener("click",()=>{us()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",Gh)}}function us(){if(gn){Pt();return}Fh()}function xh(t=ct){if(!ne())return'<p class="roster-history-muted">Approved GuildSync access is required to upload files.</p>';const e=Array.isArray(t==null?void 0:t.files)?t.files:[],n=String((t==null?void 0:t.directory)||"").trim(),r=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const s=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),o=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),a=String((i==null?void 0:i.filePath)||(n?`${n}\\${o}`:o)).trim(),l=(i==null?void 0:i.enabled)!==!1,d=r&&l,m=`profileFileWatchToggle-${Ph(s||o)}`;return`
          <label class="profile-filewatch-item ${l?"enabled":"disabled"}" title="${h(a)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${c(o)}</span>
              <span class="profile-filewatch-state">${d?"Watching":l?"On":"Off"}</span>
            </span>
            <input
              id="${h(m)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${h(s)}"
              ${l?"checked":""}
              aria-label="Turn file watch ${l?"off":"on"} for ${h(o)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function vo(){var r,i,s,o,a;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=Ee(),n=((r=k.user)==null?void 0:r.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${c(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Role</span>
        <span class="profile-value">${c(ep(n))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${c(Ir)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${ct!=null&&ct.watching?"Active":"Stopped"}</span>
        </div>
        ${xh()}
      </div>
      ${((i=k.user)==null?void 0:i.role)==="admin"?'<section class="profile-section profile-user-management-section" aria-label="User Management"><div class="profile-section-header">User Management</div><button id="manageGuildSyncUsersButton" class="user-admin-menu-button" type="button"><span>Manage GuildSync Users</span><span id="userAdminMenuCount"></span></button></section>':""}
      ${Oe.render()}
      ${xc(k.user)}
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,Oe.wire(t),t.querySelectorAll("[data-role-view]").forEach(l=>l.addEventListener("click",()=>void Ih(l.dataset.roleView))),(s=document.querySelector("#manageGuildSyncUsersButton"))==null||s.addEventListener("click",()=>{Pt(!1),Se.open()}),ko(Se.count),(o=document.querySelector("#discordLogoutButton"))==null||o.addEventListener("click",Sc),(a=document.querySelector("#associateTicketReportButton"))==null||a.addEventListener("click",()=>{Pt(!1),na()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(l=>{l.addEventListener("change",Oh)})}async function Ih(t){var n;const e=document.querySelectorAll("[data-role-view]");e.forEach(r=>r.disabled=!0);try{const r=await D("guildsync:set-role-view",{role:t},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Could not change view.");Pt(!1);const i=(n=k.user)==null?void 0:n.role;y("role-view",i==="admin"?"Returned to Admin View.":`Viewing GuildSync as ${i==="viewer"?"Viewer":"User"}. Use the profile menu to return to Admin View.`,{ttlMs:b})}catch(r){y("role-view-error",$(r),{ttlMs:b})}finally{e.forEach(r=>r.disabled=!1)}}async function bc(){try{ct=await td(),gn&&vo()}catch(t){y("file-watcher-error",$(t),{ttlMs:b})}}async function Oh(t){var r;const e=t.currentTarget,n=String(((r=e==null?void 0:e.dataset)==null?void 0:r.filewatchKey)||"").trim();if(!!n)try{e.disabled=!0,ct=await sd(n,e.checked),await Bt({silent:!0}),gn&&vo()}catch(i){y("file-watcher-error",$(i),{ttlMs:b}),await bc()}}function Ph(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function Fh(){const t=document.querySelector("#discordProfileMenu");!t||(vo(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),gn=!0,bc(),setTimeout(()=>{window.addEventListener("click",kc),window.addEventListener("keydown",vc)},0))}function Pt(t=!0){Oe.close();const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),gn=!1,t&&(window.removeEventListener("click",kc),window.removeEventListener("keydown",vc))}function kc(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&Pt()}function vc(t){t.key==="Escape"&&Pt()}async function Gh(){try{y("auth","Opening Discord login...",{ttlMs:b});const t=await cd();t!=null&&t.status_message&&y("auth",t.status_message,{ttlMs:b}),mt()}catch(t){y("auth-error",$(t),{ttlMs:b}),mt()}}async function Sc(){Oe.stop();try{k=await rd(),y("auth",k.status_message||"Logged out.",{ttlMs:b}),Gs(),Gn(),await Bt()}catch(t){y("auth-error",$(t),{ttlMs:b}),mt()}}function Gn(){const t=k.socket_url||"https://guildsync.perdues.me";Uh(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};k!=null&&k.token&&(e.auth={token:k.token}),u=mr(t,e),u.on("connect",()=>{Oe.connection(!0),Se.start(),mt(),wc(),I==="discord-members"&&zn({silent:!0}),I==="eso-members"&&Ln({silent:!0}),(I==="more"||I==="settings"&&!X)&&pe({silent:!0}),hc(),hn(),mh(),ic(),Ga(),Wa(),Hh()}),u.on("guildsync:users-changed",n=>Se.changed(n)),u.on("guildsync:account-profile",qh),u.on("guildsync:account-removed",()=>void Sc()),u.on("connect_error",()=>{Se.stop(),mt(),Nr()}),u.on("disconnect",()=>{Oe.connection(!1),Se.stop(),mt(),Nr(),gh(),oc()}),u.on("guildsync:version-status",n=>{Vh(n)}),u.on("guildsync:discord-member-data-updated",n=>{Sh(n)}),u.on("guildsync:banking-data-updated",n=>{uh(n)}),u.on("guildsync:roster-data-updated",n=>{bf(n)}),u.on("guildsync:member-links-updated",Nu),u.on("guildsync:discord-refresh-status",(n={})=>{const r=String(n.message||"").trim();r&&y("discord-refresh-status",r,{ttlMs:b})})}function Uh(t=!0){Oe.stop(),Se.reset(),Nr(),u&&(u.disconnect(),u=null),t&&mt()}function wc(){!(u!=null&&u.connected)||u.emit("guildsync:client-version",{version:Ir,platform:_c(),client_type:"wails"})}function Hh(){Nr(),gr=window.setInterval(()=>{wc()},pd)}function Nr(){gr&&(window.clearInterval(gr),gr=null)}function Vh(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",n=t.download&&typeof t.download=="object"?t.download:{};et={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||n.url||"").trim(),fileName:String(t.download_file_name||n.file_name||"").trim(),platformLabel:String(n.label||t.platform||_c()).trim()},y("version",`GuildSync is out of date. Current version: ${Ir}. Latest version: ${e}.`),Ii();return}et={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},Ii(),So("version")}}function _c(){const t=String(navigator.userAgent||"").toLowerCase(),n=`${String(navigator.platform||"").toLowerCase()} ${t}`;return n.includes("mac")?"macos":n.includes("linux")?"linux":"windows"}function Ii(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!et.updateRequired||!et.downloadUrl){t.innerHTML="";return}const e=et.platformLabel||"Desktop",n=et.latestVersion||"latest",r=et.fileName||"GuildSync client download";t.innerHTML=`
    <button
      id="desktopUpdateDownloadButton"
      class="desktop-client-download-button"
      type="button"
      title="Download ${h(r)}"
      aria-label="Download GuildSync ${h(n)} for ${h(e)}"
    >
      <span class="desktop-client-download-icon" aria-hidden="true">\u2B07</span>
      <span class="desktop-client-download-copy">
        <span class="desktop-client-download-title">Download Update</span>
        <span class="desktop-client-download-subtitle">${c(e)} detected \xB7 ${c(n)}</span>
      </span>
      <span class="desktop-client-download-caret" aria-hidden="true">\u25BE</span>
    </button>
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{Wh()})}function Wh(){const t=String(et.downloadUrl||"").trim();if(!t){y("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:b});return}hd(t)}function y(t,e,n={}){const r=String(t||"").trim(),i=String(e||"").trim();if(!(!r||!i)){if(yt.set(r,i),_t.has(r)&&(window.clearTimeout(_t.get(r)),_t.delete(r)),n.ttlMs&&Number(n.ttlMs)>0){const s=window.setTimeout(()=>{So(r)},Number(n.ttlMs));_t.set(r,s)}pn()}}function So(t){const e=String(t||"").trim();if(!!e){if(yt.delete(e),_t.has(e)&&(window.clearTimeout(_t.get(e)),_t.delete(e)),Q===e){Qr(()=>{Q="",pn()});return}pn()}}function pn(){const t=Kr();if(t.length===0){Nt?Qr(Kn):Kn();return}!Nt&&!qt&&Jr(t[0])}function Kr(){return Array.from(yt.keys())}function Ac(){const t=Kr();if(t.length===0)return"";if(!Q)return t[0];const e=t.indexOf(Q);return e<0?t[0]:t[(e+1)%t.length]}function Jr(t){const e=document.querySelector("#statusMessageTrack");if(!e||!yt.has(t)){Kn();return}Xr();const n=yt.get(t);Q=t,Nt=!0,qt=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=n,e.style.setProperty("--message-fade-duration",`${xs}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",qt=!1,jh()},{once:!0})})}function jh(){const t=Kr();if(!Q||!yt.has(Q)){pn();return}if(t.length<=1){fs(!1);return}fs(!0)}function fs(t){const e=document.querySelector("#statusMessageViewport"),n=document.querySelector("#statusMessageTrack");if(!e||!n)return;const r=Math.max(0,n.scrollWidth-e.clientWidth);if(r<=0){t&&Jn(()=>{Qr(()=>{const i=Ac();Q="",i?Jr(i):Kn()})},qs);return}Jn(()=>{Lc(r,t)},Is)}function Lc(t,e){const n=document.querySelector("#statusMessageTrack");if(!n||!Q||!yt.has(Q))return;const r=Math.max(4,Math.ceil(t/bd));n.style.setProperty("--long-scroll-distance",`${t}px`),n.style.setProperty("--long-scroll-duration",`${r}s`),n.classList.add("long-scroll"),n.addEventListener("animationend",()=>{if(n.classList.remove("long-scroll"),n.style.transform=`translateX(-${t}px) translateY(-50%)`,e){Jn(()=>{Qr(()=>{const i=Ac();Q="",i?Jr(i):Kn()})},qs);return}Jn(()=>{zh()},yd)},{once:!0})}function zh(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!Q||!yt.has(Q))return;if(Kr().length!==1){pn();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const r=Math.max(0,e.scrollWidth-t.clientWidth);r<=0||Jn(()=>{Lc(r,!1)},Is)}function Qr(t){const e=document.querySelector("#statusMessageTrack");if(Xr(),!e||!Nt){typeof t=="function"&&t();return}qt=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${xs}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",Nt=!1,qt=!1,typeof t=="function"&&t()},{once:!0})}function Kn(){const t=document.querySelector("#statusMessageTrack");Xr(),Q="",Nt=!1,qt=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function Jn(t,e){const n=window.setTimeout(()=>{In=In.filter(r=>r!==n),t()},e);In.push(n)}function Xr(){for(const t of In)window.clearTimeout(t);In=[]}function Ec(){if(!Nt||qt||!Q)return;const t=Q;Xr(),Jr(t)}function mt(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(u!=null&&u.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!V()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${Ee()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${Ee()}`)}}async function Bt(t={}){try{if(ne()){const e=await ld();ct=e,!t.silent&&(e==null?void 0:e.message)&&y(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:b});return}ct=await dd(),So("file-watcher")}catch(e){y("file-watcher-error",$(e),{ttlMs:b})}}function Bn(t,e=null){const n="[GuildSync File Watcher]";if(e){console.log(`${n} ${t}`,e);return}console.log(`${n} ${t}`)}function Yh(t={}){if(!ne()){Bn("SavedVariables change ignored because the account cannot edit data.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",n=e.toLowerCase(),r=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=String(t.filePath||"").trim(),o=r?`${r} saved variables (${i})`:i;Bn(`SavedVariables change detected: ${i}${s?` (${s})`:""}. Key: ${n}.`,t),y(`saved-vars-file-updated-${e}`,`${o} has been updated.`,{ttlMs:b}),n==="banking"&&(Bn(`Processing banking SavedVariables update from ${i}.`),Kh(t)),n==="roster"&&(Bn(`Processing roster SavedVariables update from ${i}.`),Jh(t)),n==="applications"&&(Bn(`Processing applications SavedVariables update from ${i}.`),$f(t))}async function Kh(t={}){await fh(t),await sc(t)}async function Jh(t={}){await kf(t)}function Qh(t){!V()||y("file-watcher-error",$(t),{ttlMs:b})}function Xh(){Ut("guildsync-savedvars-file-modified",Yh),Ut("guildsync-file-watcher-error",Qh),Ut("guildsync-login-complete",async t=>{k=t||{logged_in:!1,allowed:!1},Fn(),Gn(),await Bt(),y("auth",k.status_message||`Logged in and authorized as ${Ee()}.`,{ttlMs:b})}),Ut("guildsync-login-denied",async t=>{k={logged_in:!1,allowed:!1,status_message:""},Fn(),await Bt(),y("auth",t||"Access denied.",{ttlMs:b}),Gn()}),Ut("guildsync-login-failed",async t=>{k={logged_in:!1,allowed:!1,status_message:""},Fn(),await Bt(),y("auth",t||"Login failed.",{ttlMs:b}),Gn()})}function V(){return Boolean((k==null?void 0:k.logged_in)&&(k==null?void 0:k.allowed)&&(k==null?void 0:k.token))}function J(){var t;return V()&&Un((t=k.user)==null?void 0:t.role)}function ne(){var t;return V()&&hs((t=k.user)==null?void 0:t.role)}function gt(){var t;return V()&&Mc((t=k.user)==null?void 0:t.role)}function Ee(){var t,e;return((t=k.user)==null?void 0:t.display_name)||((e=k.user)==null?void 0:e.username)||"Discord User"}function Zh(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),n=String(t.discord_user_id||"").trim();if(!e||!n)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=128`}function $c(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function ep(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function tp(){Mn&&(Mn.disconnect(),Mn=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),n=Math.round(t.getBoundingClientRect().height);Mn=new ResizeObserver(r=>{const i=r[0];if(!i)return;const s=Math.round(i.contentRect.width),o=Math.round(i.contentRect.height);s===e&&o===n||(e=s,n=o,Rc(),Ec())}),Mn.observe(t)}function Rc(){clearTimeout(Uo),Uo=setTimeout(async()=>{try{await Ms()}catch{}},500)}function $(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function c(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function h(t){return c(t)}Xh();Sd();
