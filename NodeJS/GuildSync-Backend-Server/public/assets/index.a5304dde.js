(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Lr=["viewer","user","admin"],Fn=t=>t==="user"||t==="admin",$s=t=>Lr.includes(t),zc=Fn,Yc=new Set(["guildsync:request-users","guildsync:request-pending-users","guildsync:change-user","guildsync:save-admin-configuration","guildsync:save-raffle-bonus-settings"]),Kc=new Set(["guildsync:upload-savedvars-raw","guildsync:sending-banking-data","guildsync:sending-roster-data","guildsync:gsa-post-application","guildsync:eso-guild-application-message","guildsync:run-member-auto-linking","guildsync:request-discord-data-refresh"]);function Jc(t,e){return Lr.includes(t)?Xc(e)||Kc.has(e)?!0:Yc.has(e)?t==="admin":Fn(t):!1}const Qc=new Set(["guildsync:client-version","guildsync:request-discord-data-date","guildsync:request-discord-member-dataJSON","guildsync:request-banking-data","guildsync:request-roster-data","guildsync:request-roster-member-notes","guildsync:request-banking-history-matches","guildsync:request-banking-history-records","guildsync:request-roster-rank-history","guildsync:request-roster-stream-history","guildsync:request-discord-member-history","guildsync:request-discord-member-history-events","guildsync:request-associate-ticket-report","guildsync:request-discord-rank-audit-report","guildsync:request-member-links","guildsync:request-member-link-options","guildsync:request-admin-configuration","guildsync:request-active-raffles","guildsync:request-raffle-archives"]),Xc=t=>Qc.has(t);function Zc(t={}){return(t.actual_role||t.role)!=="admin"?"":t.role!=="admin"?`<div class="profile-role-view-notice">Viewing as ${t.role==="viewer"?"Viewer":"User"} \xB7 Admin account</div><button class="discord-secondary-button user-admin-menu-button" type="button" data-role-view="admin">Return to Admin View</button>`:'<button class="discord-secondary-button user-admin-menu-button" type="button" data-role-view="user">View as User</button><button class="discord-secondary-button user-admin-menu-button" type="button" data-role-view="viewer">View as Viewer</button>'}const qe=t=>String(t!=null?t:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),hr=t=>!t.revoked_at&&(!Number(t.allowed)||t.role==="pending"),el=t=>{var e,n,r;return{allowed:Number(t.allowed),role:t.role,email:(e=t.email)!=null?e:"",guild_member_name:(n=t.guild_member_name)!=null?n:"",revoked_at:(r=t.revoked_at)!=null?r:null}};function tl(t,e="all",n=""){const r=n.trim().toLowerCase();return t.filter(i=>(e==="revoked"?!!i.revoked_at:!i.revoked_at&&(e!=="pending"||hr(i)))&&(!r||[i.username,i.global_name,i.guild_member_name,i.email,i.discord_user_id,i.role].some(s=>String(s!=null?s:"").toLowerCase().includes(r))))}function nl(t){return Number(t)>0?`<span class="user-pending-badge" aria-hidden="true">${Number(t)>99?"99+":Number(t)}</span>`:""}function rl(t,e,n={}){var a,l,d,y,g;const r=t.discord_user_id===e,i=!!t.revoked_at,s=(a=n.role)!=null?a:Lr.includes(t.role)?t.role:"viewer",o=qe(t.discord_user_id);return`<form class="user-admin-card" data-user-id="${o}">
  <header><div><h3>${qe(t.guild_member_name||t.global_name||t.username||t.discord_user_id)}${r?" (You)":""}</h3><p>${qe(t.username)} \xB7 Discord ID: ${o}</p></div><span class="user-admin-status ${hr(t)?"is-pending":""}">${i?"Revoked":hr(t)?"Pending approval":"Approved"}</span></header>
  <fieldset class="user-admin-fields"><label>Email<input name="email" type="email" maxlength="255" value="${qe((d=(l=n.email)!=null?l:t.email)!=null?d:"")}" placeholder="Not configured"></label>
   <label>Guild member name<input name="guild_member_name" maxlength="255" value="${qe((g=(y=n.guild_member_name)!=null?y:t.guild_member_name)!=null?g:"")}" placeholder="ESO / guild display name"></label>
   ${r?`<div class="user-admin-own-role">Role: ${qe(t.role)}<small>Your role cannot be changed here.</small></div>`:`<label>Role<select name="role">${Lr.map(b=>`<option value="${b}" ${s===b?"selected":""}>${b[0].toUpperCase()+b.slice(1)}</option>`).join("")}</select></label>`}
  </fieldset>
  <p class="user-admin-dates">Requested: ${qe(t.requested_at||"Not recorded")} \xB7 Last login: ${qe(t.last_login_at||"Never")}${i?" \xB7 Revoked: "+qe(t.revoked_at):""}</p>
  <div class="user-admin-actions">${i?r?"":'<button type="button" data-user-reinstate>Reinstate account</button><span>Restores access with the selected role. The user must sign in again.</span>':`<button type="submit">Save changes</button>${!r&&hr(t)?'<button type="button" data-user-approve>Approve account</button>':""}${r?"":'<button type="button" class="user-admin-remove" data-user-remove>Revoke account</button>'}`}</div>
 </form>`}function il({request:t,getUser:e,onCount:n=()=>{}}){let r=[],i=0,s=null,o=null,a=!1,l=!1,d="",y="all",g=0,b=0,_=null;const S=new Map,A=()=>{var L;return((L=e())==null?void 0:L.role)==="admin"},T=L=>{i=Math.max(0,Math.floor(Number(L)||0)),n(A()?i:0)},v=L=>{const D=o==null?void 0:o.querySelector("[data-user-admin-message]");D&&(D.textContent=L)},x=L=>{l=L,o==null||o.querySelectorAll("fieldset,[data-user-admin-refresh],.user-admin-actions button,.user-admin-confirmation button").forEach(D=>D.disabled=L)},V=async()=>{if(!A()){T(0);return}const L=g,D=b;try{const E=await t("guildsync:request-pending-users",{});L===g&&D===b&&A()&&(E==null?void 0:E.ok)&&T(E.pending_count)}catch{}},ee=L=>{var N,ne;const D=new FormData(L),E={email:String((N=D.get("email"))!=null?N:""),guild_member_name:String((ne=D.get("guild_member_name"))!=null?ne:"")};return D.has("role")&&(E.role=String(D.get("role"))),E},yt=async(L,D)=>{if(l||!A())return;const E=r.find(G=>G.discord_user_id===L.dataset.userId);if(!E)return;const N=g,ne={action:D,discord_user_id:E.discord_user_id,expected:el(E),...D==="revoke"?{}:ee(L)};x(!0),v("Saving account changes...");try{const G=await t("guildsync:change-user",ne);if(!(G!=null&&G.ok))throw Error((G==null?void 0:G.message)||"Could not update this account.");if(N!==g||!A())return;S.delete(E.discord_user_id),G.user?r=r.map(Ae=>Ae.discord_user_id===E.discord_user_id?G.user:Ae):G.removed&&(r=r.filter(Ae=>Ae.discord_user_id!==E.discord_user_id)),V(),Je(),v(D==="revoke"?"Account access revoked and login sessions cleared. The account record is retained.":D==="reinstate"?"Account reinstated. The user can sign in again.":D==="approve"?"Account approved. The user can sign in now.":"Account changes saved.")}catch(G){N===g&&v(G.message)}finally{N===g&&x(!1)}},or=L=>{var E;(E=o==null?void 0:o.querySelector(".user-admin-confirmation"))==null||E.remove();const D=document.createElement("div");D.className="user-admin-confirmation",D.innerHTML='<p>Revoke access and sign out this user? Their account and banking history will be retained. Their next Discord login will request approval again.</p><button type="button" data-confirm-remove>Revoke account</button><button type="button" data-cancel-remove>Cancel</button>',L.append(D),D.querySelector("[data-confirm-remove]").addEventListener("click",()=>void yt(L,"revoke")),D.querySelector("[data-cancel-remove]").addEventListener("click",()=>D.remove()),D.querySelector("button").focus()};function Je(){if(!o)return;const L=o.querySelector(".user-admin-list"),D=L.scrollTop,E=tl(r,y,d);L.innerHTML=E.map(N=>rl(N,e().discord_user_id,S.get(N.discord_user_id))).join("")||"<p>No matching accounts.</p>",o.querySelector("[data-user-admin-count]").textContent=`${E.length} account${E.length===1?"":"s"} \xB7 ${i} pending`,L.querySelectorAll("[data-user-id]").forEach(N=>{var ne,G,Ae;N.addEventListener("input",()=>S.set(N.dataset.userId,ee(N))),N.addEventListener("submit",sr=>{var An;sr.preventDefault(),(An=r.find(ar=>ar.discord_user_id===N.dataset.userId))!=null&&An.revoked_at||yt(N,"save")}),(ne=N.querySelector("[data-user-approve]"))==null||ne.addEventListener("click",()=>void yt(N,"approve")),(G=N.querySelector("[data-user-remove]"))==null||G.addEventListener("click",()=>or(N)),(Ae=N.querySelector("[data-user-reinstate]"))==null||Ae.addEventListener("click",()=>void yt(N,"reinstate"))}),L.scrollTop=D,x(l)}const _n=async()=>{if(a||l||!A())return;a=!0,x(!0),v("Loading GuildSync accounts...");const L=g,D=b;try{const E=await t("guildsync:request-users",{include_revoked:!0});if(!(E!=null&&E.ok))throw Error((E==null?void 0:E.message)||"Could not load accounts.");if(L!==g||!A())return;r=E.users,S.clear(),D===b&&T(E.pending_count),Je(),v("Only admins can manage accounts. Your own role and account access are protected.")}catch(E){L===g&&v(E.message)}finally{L===g&&(a=!1,x(!1))}},kt=()=>{l&&!a||(o==null||o.remove(),o=null,_!=null&&_.isConnected&&_.focus({preventScroll:!0}))};return{open:()=>{!A()||o||(_=document.activeElement,o=document.createElement("div"),o.className="user-admin-overlay",o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),o.setAttribute("aria-labelledby","userAdminTitle"),o.innerHTML='<section class="user-admin-dialog"><header class="user-admin-header"><div><h2 id="userAdminTitle">Manage GuildSync Users</h2><p>Review access requests and maintain GuildSync login records.</p></div><button type="button" data-user-admin-close aria-label="Close user administration">Close</button></header><p role="status" data-user-admin-message></p><div class="user-admin-toolbar"><label>Search accounts<input type="search" data-user-admin-search placeholder="Name, email, role, or Discord ID"></label><label>Show<select data-user-admin-filter><option value="all">Current accounts</option><option value="pending">Pending approval</option><option value="revoked">Revoked accounts</option></select></label><button type="button" data-user-admin-refresh>Refresh list (discard edits)</button><span data-user-admin-count></span></div><div class="user-admin-list"></div></section>',document.body.append(o),o.querySelector("[data-user-admin-search]").value=d,o.querySelector("[data-user-admin-filter]").value=y,o.querySelector("[data-user-admin-close]").addEventListener("click",kt),o.querySelector("[data-user-admin-refresh]").addEventListener("click",()=>void _n()),o.querySelector("[data-user-admin-search]").addEventListener("input",L=>{d=L.target.value,Je()}),o.querySelector("[data-user-admin-filter]").addEventListener("change",L=>{y=L.target.value,Je()}),o.addEventListener("keydown",L=>{if(L.key==="Escape"&&(L.preventDefault(),L.stopImmediatePropagation(),kt()),L.key==="Tab"){const D=[...o.querySelectorAll("button,input,select")].filter(ne=>!ne.disabled&&ne.offsetParent!==null),E=D[0],N=D.at(-1);L.shiftKey&&document.activeElement===E?(L.preventDefault(),N==null||N.focus()):!L.shiftKey&&document.activeElement===N&&(L.preventDefault(),E==null||E.focus())}}),o.querySelector("[data-user-admin-close]").focus(),S.size?(Je(),v("Unsaved edits restored. Refresh the list to discard them and retrieve current records.")):_n())},close:kt,refreshCount:V,get count(){return i},get isOpen(){return!!o},stop(){clearInterval(s),s=null},start(){clearInterval(s),A()&&(V(),s=setInterval(()=>void V(),6e4))},changed(L){!A()||(b++,T(L.pending_count),o&&v("Accounts changed. Refresh the list for current records; unsaved edits are preserved."))},reset(){g++,clearInterval(s),s=null,l=!1,a=!1,kt(),r=[],S.clear(),d="",y="all",T(0)}}}function jo(t,e,n,r=()=>{}){if(!t||!e)return;const i=a=>{var l;return(l=a.getAttribute(n))!=null?l:"__empty__"},s=new Map(Array.from(t.children).map(a=>[i(a),a])),o=new Set;Array.from(e.children).forEach((a,l)=>{let d=s.get(i(a));if(!d)d=a.cloneNode(!0),r(d);else if(!d.isEqualNode(a)){for(const y of Array.from(d.attributes))a.hasAttribute(y.name)||d.removeAttribute(y.name);for(const y of Array.from(a.attributes))d.getAttribute(y.name)!==y.value&&d.setAttribute(y.name,y.value);for(Array.from(a.children).forEach((y,g)=>{const b=d.children[g];if(b!=null&&b.isEqualNode(y))return;const _=y.cloneNode(!0);b?b.replaceWith(_):d.append(_),r(_)});d.children.length>a.children.length;)d.lastElementChild.remove()}t.children[l]!==d&&t.insertBefore(d,t.children[l]||null),o.add(d)});for(const a of Array.from(t.children))o.has(a)||a.remove()}function Bn(t,e){t&&e&&!t.isEqualNode(e)&&(t.innerHTML=e.innerHTML)}function Nn(t,e){t&&e&&t.textContent!==e.textContent&&(t.textContent=e.textContent)}const C=t=>String(t!=null?t:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function ol(){return{open:"",toggle(t){this.open=this.open===t?"":t},close(){this.open=""}}}function zi(t,e){var n;return t.type==="boolean"?String(e).toLowerCase()===String(t.defaultValue).toLowerCase():t.type==="number"?String(e).trim()!==""&&Number(e)===Number(t.defaultValue):String(e!=null?e:"")===String((n=t.defaultValue)!=null?n:"")}function zo(t,e){const r=Object.hasOwn(e,t.key)?e[t.key]===null?t.defaultValue:e[t.key]:t.value,i=!zi(t,r);return{value:r,override:i,source:i?"Overridden":"Default"}}function pr(t,e){return t.type==="boolean"?e===!0||String(e).toLowerCase()==="true"?"Enabled":"Disabled":t.type==="select"?{private_thread:"Private thread (public fallback)",channel:"Channel or thread"}[e]||String(e):e==null||e===""?"Not configured":String(e)}function Yo(t,{body:e=!1}={}){const n={recipient:"@ExampleMember",account_name:"@ExampleMember",display_name:"@ExampleMember",amount:"10,001",deposit_amount:"10,001",raw_amount:"10001",raw_deposit_amount:"10001",event_id:"123456789",ticket_quantity:"20",tickets:"20",purchased_tickets:"20",bonus_percent:"20",bonus_tickets:"4",total_tickets:"24",bonus_deadline:"October 9, 2026 at 7:00 PM Eastern",bonus_block:`Early Purchase Bonus: 20% for purchases before October 9, 2026 at 7:00 PM ET.
Bonus Tickets: 4
Total Tickets: 24`,note:"",note_block:"",ticket_type:"Bi-Weekly",ticket_type_raw:"biweekly",transaction_type:"biweekly",ticket_gold_cost:"10,001",gold_cost:"10,001",raw_gold_cost:"10001",raw_ticket_gold_cost:"10001",purchase_date:"October 5, 2026",data_source:"Guild bank",event_datetime:"2026-10-05T12:00:00Z",event_timestamp:"1791201600",raffle_datetime_eastern:"October 10, 2026 at 8:00 PM Eastern",raffle_date_time_eastern:"October 10, 2026 at 8:00 PM Eastern",raffle_datetime:"October 10, 2026 at 8:00 PM Eastern",mail_request_id:"example",mail_batch_id:"example"},r=String(t).replace(/{([a-zA-Z0-9_]+)}/g,(i,s)=>{var o;return(o=n[s])!=null?o:i});return e&&!String(t).includes("{bonus_block}")?r+`

`+n.bonus_block:r}function Rs(t,{refresh:e=!1,root:n=document}={}){const r=()=>{for(const o of document.querySelectorAll("[data-report-toggle]")){const a=o.dataset.reportToggle===t.open;o.setAttribute("aria-expanded",String(a));const l=document.getElementById(o.getAttribute("aria-controls"));l&&(l.classList.toggle("is-open",a),l.inert=!a)}};for(const o of n.querySelectorAll("[data-report-toggle]"))o.addEventListener("click",()=>{t.toggle(o.dataset.reportToggle),r()});for(const o of n.querySelectorAll('.reports-panel .report-run-button:not([type="submit"])'))o.addEventListener("click",()=>{t.close(),r()});const i=e?Array.from(document.querySelectorAll(".report-section-content")):[],s=i.map(o=>o.style.transition);for(const o of i)o.style.transition="none";r();for(const o of i)o.offsetHeight;i.forEach((o,a)=>o.style.transition=s[a])}const Si=t=>t.type==="boolean"||t.type==="select"&&t.options.length===2;function sl(t,e){return pr(t,e)+(Si(t)&&zi(t,e)?" (Default)":"")}function al({canEdit:t=()=>!1}={}){let e=null,n={},r=!1,i="",s=!1;const o=(d,y)=>{if(!t())return`<output class="configuration-readonly-value" id="config-${C(d.key)}" aria-describedby="config-help-${C(d.key)}">${C(pr(d,y.value))}</output>`;const g=`data-config-value="${C(d.key)}" id="config-${C(d.key)}" aria-describedby="config-help-${C(d.key)}" `;if(d.type==="boolean"||d.type==="select"){const b=d.type==="boolean"?["true","false"]:d.options;return`<select ${g}>${b.map(_=>`<option value="${C(_)}" ${String(_)===String(y.value)?"selected":""}>${C(sl(d,_))}</option>`).join("")}</select>`}return d.type==="template"?`<textarea ${g} rows="${d.key.includes("BODY")?9:3}" maxlength="${d.maxLength}">${C(y.value)}</textarea>`:`<input ${g} type="${d.type==="number"?"number":"text"}" ${d.type==="number"?`min="${d.min}" max="${d.max}" step="any"`:""} value="${C(y.value)}" placeholder="Not configured">`};return{render:()=>{const d=t(),y=e?[...new Set(e.settings.map(g=>g.group))]:[];return`<article class="report-option-card admin-configuration-card"><div class="report-option-copy">
   <h3><button type="button" class="report-section-toggle" data-report-toggle="configuration" aria-expanded="false" aria-controls="adminConfigurationContent">Administrator Configuration <span aria-hidden="true">\u25BE</span></button></h3>
   <div id="adminConfigurationContent" class="report-section-content" inert><div class="report-section-inner">
   ${d?"<p>Edit any setting to override its default. Changes take effect only after Save. Choose the option marked (Default) to restore a two-choice setting, or use Return to default for other fields. Settings apply live; active deliveries finish safely.</p>":'<p class="configuration-readonly-notice">Read-only. You can view current settings and defaults. Admin access is required to change Administrator Configuration or raffle bonus settings.</p>'}
   <p role="status" class="configuration-status">${C(i)}</p>
   ${e?`
   ${e.botDefaultsReported?"":"<p>Bot defaults have not been reported yet. Connect the updated bot before editing its settings.</p>"}
   <form id="adminConfigurationForm">
    ${y.map((g,b)=>{const _=e.settings.filter(A=>A.group===g),S=[...new Set(_.map(A=>A.section||""))];return`<fieldset class="configuration-group" ${s?"disabled":""}><legend>${C(g)}</legend>
      ${S.map((A,T)=>`<section class="configuration-subgroup" ${A?`aria-labelledby="config-section-${b}-${T}"`:""}>
       ${A?`<h4 id="config-section-${b}-${T}">${C(A)}</h4>`:""}
       ${_.filter(v=>(v.section||"")===A).map(v=>{const x=zo(v,d?n:{});return`<div class="configuration-setting" role="group" aria-labelledby="config-label-${C(v.key)}">
         <div class="configuration-setting-header"><label id="config-label-${C(v.key)}" for="config-${C(v.key)}">${C(v.label)}</label><span class="configuration-source" data-config-source="${C(v.key)}">${C(x.source)}</span></div>
         <small class="configuration-env-key">.env: <code>${C(v.key)}</code></small>
         <p class="configuration-help" id="config-help-${C(v.key)}">${C(v.help||"Changes this setting after you save the configuration.")}</p>
         <div class="configuration-values${d&&Si(v)?" configuration-two-options":""}">
          <div class="configuration-selected-value"><span>${d?"Current selection":"Current value"}</span>${o(v,x)}</div>
          ${d&&Si(v)?"":`<div class="configuration-default-value"><span>Default value</span><output>${C(pr(v,v.defaultValue))}</output>${d?`<button type="button" class="configuration-default" data-config-default="${C(v.key)}" aria-label="Return ${C(v.label)} to default: ${C(pr(v,v.defaultValue))}">Return to default</button>`:""}</div>`}
         </div>
         ${v.placeholders?`<small>Placeholders: ${v.placeholders.map(V=>C("{"+V+"}")).join(", ")}</small>`:""}
         ${v.group==="Receipt messages"?`<label>Example preview (20% bonus)<pre data-config-preview="${C(v.key)}">${C(Yo(x.value,{body:v.key.endsWith("BODY_TEMPLATE")}))}</pre></label>`:""}
        </div>`}).join("")}
      </section>`).join("")}
     </fieldset>`}).join("")}
    <div class="configuration-actions">${d?`<button type="submit" ${s?"disabled":""}>${s?"Saving...":"Save Configuration"}</button>`:""}<button type="button" id="reloadAdminConfiguration" ${s?"disabled":""}>${d?"Discard edits and reload":"Refresh configuration"}</button></div>
   </form>`:`<p>${r?"Loading configuration...":"Configuration is not loaded."}</p><button type="button" id="reloadAdminConfiguration">Load configuration</button>`}
   </div></div></div></article>`},wire:({request:d,rerender:y})=>{var b,_;const g=async()=>{if(!r){r=!0,i="";try{const S=await d("guildsync:request-admin-configuration",{});if(!(S!=null&&S.ok))throw Error((S==null?void 0:S.message)||"Could not load configuration.");e=S.configuration,n={}}catch(S){i=S.message}finally{r=!1,y()}}};if(!e&&!r&&!i&&g(),(b=document.getElementById("reloadAdminConfiguration"))==null||b.addEventListener("click",()=>void g()),!!t()){for(const S of document.querySelectorAll("[data-config-value]"))S.addEventListener("input",()=>{if(!t())return;const A=S.dataset.configValue,T=e.settings.find(V=>V.key===A);n[A]=zi(T,S.value)?null:S.value;const v=document.querySelector(`[data-config-source="${A}"]`);v&&(v.textContent=zo(T,n).source);const x=document.querySelector(`[data-config-preview="${A}"]`);x&&(x.textContent=Yo(S.value,{body:A.endsWith("BODY_TEMPLATE")}))});for(const S of document.querySelectorAll("[data-config-default]"))S.addEventListener("click",()=>{!t()||(n[S.dataset.configDefault]=null,y())});(_=document.getElementById("adminConfigurationForm"))==null||_.addEventListener("submit",async S=>{var T;if(S.preventDefault(),!t()||s)return;if(!Object.keys(n).length){i="No changes to save.",y();return}s=!0,i="";const A={...n};y(),(T=document.getElementById("adminConfigurationForm"))==null||T.querySelectorAll("input,select,textarea,button").forEach(v=>v.disabled=!0);try{const v=await d("guildsync:save-admin-configuration",{revision:e.revision,changes:A});if(!(v!=null&&v.ok))throw Error((v==null?void 0:v.message)||"Could not save configuration.");e=v.configuration,n={},i="Configuration saved. Backend settings are active; the connected bot applies its settings after active deliveries finish. An offline bot applies them when it reconnects."}catch(v){i=v.message}finally{s=!1,y()}})}},clear(){e=null,n={},i=""}}}const cl="/assets/splash.ea386b6a.png",ll="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",dl="/assets/GuildSync-Graphic.9169020d.png",Ne=Object.create(null);Ne.open="0";Ne.close="1";Ne.ping="2";Ne.pong="3";Ne.message="4";Ne.upgrade="5";Ne.noop="6";const mr=Object.create(null);Object.keys(Ne).forEach(t=>{mr[Ne[t]]=t});const wi={type:"error",data:"parser error"},Ds=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Ms=typeof ArrayBuffer=="function",Ts=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Yi=({type:t,data:e},n,r)=>Ds&&e instanceof Blob?n?r(e):Ko(e,r):Ms&&(e instanceof ArrayBuffer||Ts(e))?n?r(e):Ko(new Blob([e]),r):r(Ne[t]+(e||"")),Ko=(t,e)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];e("b"+(r||""))},n.readAsDataURL(t)};function Jo(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let ai;function ul(t,e){if(Ds&&t.data instanceof Blob)return t.data.arrayBuffer().then(Jo).then(e);if(Ms&&(t.data instanceof ArrayBuffer||Ts(t.data)))return e(Jo(t.data));Yi(t,!1,n=>{ai||(ai=new TextEncoder),e(ai.encode(n))})}const Qo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Cn=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<Qo.length;t++)Cn[Qo.charCodeAt(t)]=t;const fl=t=>{let e=t.length*.75,n=t.length,r,i=0,s,o,a,l;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const d=new ArrayBuffer(e),y=new Uint8Array(d);for(r=0;r<n;r+=4)s=Cn[t.charCodeAt(r)],o=Cn[t.charCodeAt(r+1)],a=Cn[t.charCodeAt(r+2)],l=Cn[t.charCodeAt(r+3)],y[i++]=s<<2|o>>4,y[i++]=(o&15)<<4|a>>2,y[i++]=(a&3)<<6|l&63;return d},hl=typeof ArrayBuffer=="function",Ki=(t,e)=>{if(typeof t!="string")return{type:"message",data:Bs(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:pl(t.substring(1),e)}:mr[n]?t.length>1?{type:mr[n],data:t.substring(1)}:{type:mr[n]}:wi},pl=(t,e)=>{if(hl){const n=fl(t);return Bs(n,e)}else return{base64:!0,data:t}},Bs=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},Ns=String.fromCharCode(30),ml=(t,e)=>{const n=t.length,r=new Array(n);let i=0;t.forEach((s,o)=>{Yi(s,!1,a=>{r[o]=a,++i===n&&e(r.join(Ns))})})},gl=(t,e)=>{const n=t.split(Ns),r=[];for(let i=0;i<n.length;i++){const s=Ki(n[i],e);if(r.push(s),s.type==="error")break}return r};function bl(){return new TransformStream({transform(t,e){ul(t,n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,r)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(r))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(n)})}})}let ci;function cr(t){return t.reduce((e,n)=>e+n.length,0)}function lr(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let r=0;for(let i=0;i<e;i++)n[i]=t[0][r++],r===t[0].length&&(t.shift(),r=0);return t.length&&r<t[0].length&&(t[0]=t[0].slice(r)),n}function yl(t,e){ci||(ci=new TextDecoder);const n=[];let r=0,i=-1,s=!1;return new TransformStream({transform(o,a){for(n.push(o);;){if(r===0){if(cr(n)<1)break;const l=lr(n,1);s=(l[0]&128)===128,i=l[0]&127,i<126?r=3:i===126?r=1:r=2}else if(r===1){if(cr(n)<2)break;const l=lr(n,2);i=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),r=3}else if(r===2){if(cr(n)<8)break;const l=lr(n,8),d=new DataView(l.buffer,l.byteOffset,l.length),y=d.getUint32(0);if(y>Math.pow(2,53-32)-1){a.enqueue(wi);break}i=y*Math.pow(2,32)+d.getUint32(4),r=3}else{if(cr(n)<i)break;const l=lr(n,i);a.enqueue(Ki(s?l:ci.decode(l),e)),r=0}if(i===0||i>t){a.enqueue(wi);break}}}})}const Cs=4;function F(t){if(t)return kl(t)}function kl(t){for(var e in F.prototype)t[e]=F.prototype[e];return t}F.prototype.on=F.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};F.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};F.prototype.off=F.prototype.removeListener=F.prototype.removeAllListeners=F.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===e||r.fn===e){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+t],this};F.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,e)}return this};F.prototype.emitReserved=F.prototype.emit;F.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};F.prototype.hasListeners=function(t){return!!this.listeners(t).length};const Fr=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0))(),ae=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),vl="arraybuffer";function qs(t,...e){return e.reduce((n,r)=>(t.hasOwnProperty(r)&&(n[r]=t[r]),n),{})}const Sl=ae.setTimeout,wl=ae.clearTimeout;function Gr(t,e){e.useNativeTimers?(t.setTimeoutFn=Sl.bind(ae),t.clearTimeoutFn=wl.bind(ae)):(t.setTimeoutFn=ae.setTimeout.bind(ae),t.clearTimeoutFn=ae.clearTimeout.bind(ae))}const _l=1.33;function Al(t){return typeof t=="string"?Ll(t):Math.ceil((t.byteLength||t.size)*_l)}function Ll(t){let e=0,n=0;for(let r=0,i=t.length;r<i;r++)e=t.charCodeAt(r),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(r++,n+=4);return n}function Is(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function El(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function $l(t){let e={},n=t.split("&");for(let r=0,i=n.length;r<i;r++){let s=n[r].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class Rl extends Error{constructor(e,n,r){super(e),this.description=n,this.context=r,this.type="TransportError"}}class Ji extends F{constructor(e){super(),this.writable=!1,Gr(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,r){return super.emitReserved("error",new Rl(e,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=Ki(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=El(e);return n.length?"?"+n:""}}class Dl extends Ji{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};gl(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,ml(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=Is()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let xs=!1;try{xs=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Ml=xs;function Tl(){}class Bl extends Dl{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let r=location.port;r||(r=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,n){const r=this.request({method:"POST",data:e});r.on("success",n),r.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=e}}class $e extends F{constructor(e,n,r){super(),this.createRequest=e,Gr(this,r),this._opts=r,this._method=r.method||"GET",this._uri=n,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const n=qs(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(n);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var i;r.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=$e.requestsCount++,$e.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Tl,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete $e.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}$e.requestsCount=0;$e.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Xo);else if(typeof addEventListener=="function"){const t="onpagehide"in ae?"pagehide":"unload";addEventListener(t,Xo,!1)}}function Xo(){for(let t in $e.requests)$e.requests.hasOwnProperty(t)&&$e.requests[t].abort()}const Nl=function(){const t=Os({xdomain:!1});return t&&t.responseType!==null}();class Cl extends Bl{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=Nl&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new $e(Os,this.uri(),e)}}function Os(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Ml))return new XMLHttpRequest}catch{}if(!e)try{return new ae[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Ps=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class ql extends Ji{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,r=Ps?{}:qs(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;Yi(r,this.supportsBinary,s=>{try{this.doWrite(r,s)}catch{}i&&Fr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=Is()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const li=ae.WebSocket||ae.MozWebSocket;class Il extends ql{createSocket(e,n,r){return Ps?new li(e,n,r):n?new li(e,n):new li(e)}doWrite(e,n){this.ws.send(n)}}class xl extends Ji{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=yl(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(n).getReader(),i=bl();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const s=()=>{r.read().then(({done:a,value:l})=>{a||(this.onPacket(l),s())}).catch(a=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;this._writer.write(r).then(()=>{i&&Fr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Ol={websocket:Il,webtransport:xl,polling:Cl},Pl=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Fl=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function _i(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),r=t.indexOf("]");n!=-1&&r!=-1&&(t=t.substring(0,n)+t.substring(n,r).replace(/:/g,";")+t.substring(r,t.length));let i=Pl.exec(t||""),s={},o=14;for(;o--;)s[Fl[o]]=i[o]||"";return n!=-1&&r!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=Gl(s,s.path),s.queryKey=Ul(s,s.query),s}function Gl(t,e){const n=/\/{2,9}/g,r=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function Ul(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,s){i&&(n[i]=s)}),n}const Ai=typeof addEventListener=="function"&&typeof removeEventListener=="function",gr=[];Ai&&addEventListener("offline",()=>{gr.forEach(t=>t())},!1);class it extends F{constructor(e,n){if(super(),this.binaryType=vl,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const r=_i(e);n.hostname=r.host,n.secure=r.protocol==="https"||r.protocol==="wss",n.port=r.port,r.query&&(n.query=r.query)}else n.host&&(n.hostname=_i(n.host).host);Gr(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(r=>{const i=r.prototype.name;this.transports.push(i),this._transportsByName[i]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=$l(this.opts.query)),Ai&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},gr.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=Cs,n.transport=e,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&it.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",it.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(n+=Al(i)),r>0&&n>this._maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Fr(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,r){return this._sendPacket("message",e,n,r),this}send(e,n,r){return this._sendPacket("message",e,n,r),this}_sendPacket(e,n,r,i){if(typeof n=="function"&&(i=n,n=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const s={type:e,data:n,options:r};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(it.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Ai&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=gr.indexOf(this._offlineEventListener);r!==-1&&gr.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}}it.protocol=Cs;class Vl extends it{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let n=this.createTransport(e),r=!1;it.priorWebsocketSuccess=!1;const i=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",g=>{if(!r)if(g.type==="pong"&&g.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;it.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(y(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const b=new Error("probe error");b.transport=n.name,this.emitReserved("upgradeError",b)}}))};function s(){r||(r=!0,y(),n.close(),n=null)}const o=g=>{const b=new Error("probe error: "+g);b.transport=n.name,s(),this.emitReserved("upgradeError",b)};function a(){o("transport closed")}function l(){o("socket closed")}function d(g){n&&g.name!==n.name&&s()}const y=()=>{n.removeListener("open",i),n.removeListener("error",o),n.removeListener("close",a),this.off("close",l),this.off("upgrading",d)};n.once("open",i),n.once("error",o),n.once("close",a),this.once("close",l),this.once("upgrading",d),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const n=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&n.push(e[r]);return n}}class Hl extends Vl{constructor(e,n={}){const r=typeof e=="object"?e:n;(!r.transports||r.transports&&typeof r.transports[0]=="string")&&(r.transports=(r.transports||["polling","websocket","webtransport"]).map(i=>Ol[i]).filter(i=>!!i)),super(e,r)}}function Wl(t,e="",n){let r=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),r=_i(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const s=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+s+":"+r.port+e,r.href=r.protocol+"://"+s+(n&&n.port===r.port?"":":"+r.port),r}const jl=typeof ArrayBuffer=="function",zl=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,Fs=Object.prototype.toString,Yl=typeof Blob=="function"||typeof Blob<"u"&&Fs.call(Blob)==="[object BlobConstructor]",Kl=typeof File=="function"||typeof File<"u"&&Fs.call(File)==="[object FileConstructor]";function Qi(t){return jl&&(t instanceof ArrayBuffer||zl(t))||Yl&&t instanceof Blob||Kl&&t instanceof File}function br(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,r=t.length;n<r;n++)if(br(t[n]))return!0;return!1}if(Qi(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return br(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&br(t[n]))return!0;return!1}function Jl(t){const e=[],n=t.data,r=t;return r.data=Li(n,e),r.attachments=e.length,{packet:r,buffers:e}}function Li(t,e){if(!t)return t;if(Qi(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let r=0;r<t.length;r++)n[r]=Li(t[r],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=Li(t[r],e));return n}return t}function Ql(t,e){return t.data=Ei(t.data,e),delete t.attachments,t}function Ei(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=Ei(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=Ei(t[n],e));return t}const Gs=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Xl=5;var $;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})($||($={}));class Zl{constructor(e){this.replacer=e}encode(e){return(e.type===$.EVENT||e.type===$.ACK)&&br(e)?this.encodeAsBinary({type:e.type===$.EVENT?$.BINARY_EVENT:$.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===$.BINARY_EVENT||e.type===$.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=Jl(e),r=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(r),i}}class Xi extends F{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const r=n.type===$.BINARY_EVENT;r||n.type===$.BINARY_ACK?(n.type=r?$.EVENT:$.ACK,this.reconstructor=new ed(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(Qi(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const r={type:Number(e.charAt(0))};if($[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===$.BINARY_EVENT||r.type===$.BINARY_ACK){const s=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(s,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!Us(a)||a<0)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=a}if(e.charAt(n+1)==="/"){const s=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););r.nsp=e.substring(s,n)}else r.nsp="/";const i=e.charAt(n+1);if(i!==""&&Number(i)==i){const s=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}r.id=Number(e.substring(s,n+1))}if(e.charAt(++n)){const s=this.tryParse(e.substr(n));if(Xi.isPayloadValid(r.type,s))r.data=s;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case $.CONNECT:return Er(n);case $.DISCONNECT:return n===void 0;case $.CONNECT_ERROR:return typeof n=="string"||Er(n);case $.EVENT:case $.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&Gs.indexOf(n[0])===-1);case $.ACK:case $.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class ed{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=Ql(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function td(t){return typeof t=="string"}const Us=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function nd(t){return t===void 0||Us(t)}function Er(t){return Object.prototype.toString.call(t)==="[object Object]"}function rd(t,e){switch(t){case $.CONNECT:return e===void 0||Er(e);case $.DISCONNECT:return e===void 0;case $.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&Gs.indexOf(e[0])===-1);case $.ACK:return Array.isArray(e);case $.CONNECT_ERROR:return typeof e=="string"||Er(e);default:return!1}}function id(t){return td(t.nsp)&&nd(t.id)&&rd(t.type,t.data)}const od=Object.freeze(Object.defineProperty({__proto__:null,protocol:Xl,get PacketType(){return $},Encoder:Zl,Decoder:Xi,isPacketValid:id},Symbol.toStringTag,{value:"Module"}));function fe(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const sd=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Vs extends F{constructor(e,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[fe(e,"open",this.onopen.bind(this)),fe(e,"packet",this.onpacket.bind(this)),fe(e,"error",this.onerror.bind(this)),fe(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var r,i,s;if(sd.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const o={type:$.EVENT,data:n};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const y=this.ids++,g=n.pop();this._registerAckCallback(y,g),o.id=y}const a=(i=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||i===void 0?void 0:i.writable,l=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!a||(l?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,n){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[e]=n;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);n.call(this,new Error("operation has timed out"))},i),o=(...a)=>{this.io.clearTimeoutFn(s),n.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...n){return new Promise((r,i)=>{const s=(o,a)=>o?i(o):r(a);s.withError=!0,n.push(s),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>(this._queue[0],i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(i)):(this._queue.shift(),n&&n(null,...s)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:$.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case $.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case $.EVENT:case $.BINARY_EVENT:this.onevent(e);break;case $.ACK:case $.BINARY_ACK:this.onack(e);break;case $.DISCONNECT:this.ondisconnect();break;case $.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let r=!1;return function(...i){r||(r=!0,n.packet({type:$.ACK,id:e,data:i}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:$.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,e.data)}}}function fn(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}fn.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-n:t+n}return Math.min(t,this.max)|0};fn.prototype.reset=function(){this.attempts=0};fn.prototype.setMin=function(t){this.ms=t};fn.prototype.setMax=function(t){this.max=t};fn.prototype.setJitter=function(t){this.jitter=t};class $i extends F{constructor(e,n){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,Gr(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new fn({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const i=n.parser||od;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Hl(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=fe(n,"open",function(){r.onopen(),e&&e()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=fe(n,"error",s);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),n.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(fe(e,"ping",this.onping.bind(this)),fe(e,"data",this.ondata.bind(this)),fe(e,"error",this.onerror.bind(this)),fe(e,"close",this.onclose.bind(this)),fe(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){Fr(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new Vs(this,e,n),this.nsps[e]=r),r}_destroy(e){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let r=0;r<n.length;r++)this.engine.write(n[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Ln={};function yr(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=Wl(t,e.path||"/socket.io"),r=n.source,i=n.id,s=n.path,o=Ln[i]&&s in Ln[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let l;return a?l=new $i(r,e):(Ln[i]||(Ln[i]=new $i(r,e)),l=Ln[i]),n.query&&!e.query&&(e.query=n.queryKey),l.socket(n.path,e)}Object.assign(yr,{Manager:$i,Socket:Vs,io:yr,connect:yr});window.GUILDSYNC_WEB=!0;const Zi="guildsync-web-session";function Hs(){try{return JSON.parse(localStorage.getItem(Zi)||"{}")||{}}catch{return{}}}function ad(t){localStorage.setItem(Zi,JSON.stringify(t||{}))}function eo(){localStorage.removeItem(Zi)}function Zo(t,e){let n=0,r=!1;try{const i=JSON.parse(atob(t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/")));n=Number(i.exp)*1e3,r=Boolean(i.jti&&i.sub&&!i.exp)}catch{}return n>Date.now()||r?{...e,token:t,logged_in:!0,allowed:!0,status_message:"Reconnecting to GuildSync. Your login is saved."}:(eo(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:"Session expired. Please log in again."})}async function cd(){return!0}async function Ws(){return!0}async function ld(){return!0}async function dd(){return!0}async function ud(){return!0}async function fd(){return window.location.assign("/api/auth/discord/web-login"),!0}async function hd(){var s,o,a,l,d,y,g,b;const t=Hs(),e=t.token||localStorage.getItem("guildsync-web-token")||"";if(!e)return{logged_in:!1,allowed:!1,status_message:"Not logged in."};let n;try{n=await fetch("/api/auth/session",{headers:{Authorization:`Bearer ${e}`}})}catch{return Zo(e,t)}if(n.status>=500)return Zo(e,t);const r=await n.json().catch(()=>({}));if(!n.ok||r.ok===!1)return eo(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:r.message||"Session expired. Please log in again."};const i={logged_in:!0,allowed:!0,token:e,user:r.user,discord_user_id:((s=r.user)==null?void 0:s.discord_user_id)||"",username:((o=r.user)==null?void 0:o.username)||"",global_name:((a=r.user)==null?void 0:a.global_name)||"",display_name:((l=r.user)==null?void 0:l.display_name)||((d=r.user)==null?void 0:d.global_name)||((y=r.user)==null?void 0:y.username)||"",avatar_url:((g=r.user)==null?void 0:g.avatar_url)||"",role:((b=r.user)==null?void 0:b.role)||"user",status_message:"Logged in."};return ad(i),i}async function pd(){const t=Hs().token||localStorage.getItem("guildsync-web-token");if(t){const e=await fetch("/api/auth/logout",{method:"POST",headers:{Authorization:`Bearer ${t}`}});if(!e.ok&&e.status!==401)throw new Error("Could not log out on the server. Please try again.")}return eo(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:"Logged out."}}async function md(){return Ur()}async function gd(){return Ur()}async function Ur(){return{watching:!1,directory:"Web upload mode",files:[{key:"banking",fileName:"GuildSyncBanking.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"},{key:"roster",fileName:"GuildSyncRoster.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"}]}}async function bd(){return Ur()}async function yd(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function kd(){return{ok:!0}}async function vd(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function Sd(){return{ok:!0}}async function wd(t){return t&&window.open(t,"_blank","noopener,noreferrer"),!0}async function _d(){return{running:!1,message:"ESO process detection is only available in the desktop client."}}async function Ad(){throw new Error("Deposit mail sending is disabled in the web client. Use the GuildSync desktop client for ESO mail queue writes.")}async function Ld(){return{ok:!0,acknowledgements:[],records:[]}}async function Ed(){return{ok:!0}}async function $d(){return{ok:!0}}async function Rd(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSyncApplications.lua onto the GuildSync web window.")}async function Dd(){return{ok:!0}}const dr=new Map;function En(t,e){return dr.has(t)||dr.set(t,new Set),dr.get(t).add(e),()=>{var n;return(n=dr.get(t))==null?void 0:n.delete(e)}}const Vr="1.3.3",js={windows:{label:"Windows detected",shortLabel:"Windows"},macos:{label:"macOS detected",shortLabel:"macOS"},linux:{label:"Linux detected",shortLabel:"Linux"}},zs="guildsync-web-savedvars-upload-banner-dismissed",Md=new Map([["GuildSyncBanking.lua","banking"],["GuildSyncRoster.lua","roster"],["GuildSyncApplications.lua","applications"]]),Td=30*60*1e3,Ys="guildsync-pending-banking-uploads",Ks="guildsync-pending-deposit-mail",Bd=5e3,Nd=30*1e3,Js="guildsync-pending-roster-uploads",Qs="guildsync-pending-applications-uploads",m=60*1e3,to=7e3,Xs=1400,Zs=2400,Cd=4e3,qd=38,ea=document.querySelector("#app");let es=null,$n=null,ts=!1,Kn=!1;const ye=il({request:(t,e)=>R(t,e,3e4),getUser:()=>k.user,onCount:To});let kr=null,di=!1,ui=!1,fi=!1,ot=null,xe={running:!1,message:""},Gt=null,Ut=null,vr=!1,Vt=null,hi=!1,Ft=0,pi=!1,pt=new Map,St=new Map,K="",Bt=!1,Nt=!1,qn=[],k={logged_in:!1,allowed:!1,status_message:""},Qe={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},Ie=null,Ri="",u=null,re=[],Hr=[],Wr=null,Qt=!1,$r=!1,Rr="",Ht=new Set,Wt=new Set,Gn="username",_t="asc",Di=null,Mi=null,de=[],Dr=null,We=!1,Ti=!1,Mr="",Bi=null,Ni=null,At=new Set,jt=new Set,Fe="",te="",W=-1,Xt=!1,Un="",ce=[],mt="",st=[],at=!1,Ue="",mi=null,he=-1,hn=!1,Vn="",ct=[],Tr=!1,Lt=!1,lt="",Zt="",en=!1,Xe="",le=[],tn="",Ct="",dt=[],ut=!1,Ve="",ns=null,vt=0;const Id=650;let pe=-1,pn=!1,mn=[],Ze=!1,Et="",gn=!1,Hn=[],et=!1,$t="",bt=!1,no=[],tt=!1,Rt="",bn="",nt="",zt="",rt="",B=[],z=!1,Z="",Ye=!1,jr="",wt="",Jn="",Qn="",Ge=-1,Ke=!1,M=null,Dt=[],nn=!1,je="",Xn="",Le=-1,yn=!1,ro=null,In=null;const io=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let ie=[],J=null,Ee=null,ge=!1;const ta=ol(),oo=al({canEdit:()=>{var t;return((t=k==null?void 0:k.user)==null?void 0:t.role)==="admin"}});let rn=[],He="",rs=!1,O="biweekly",na=null,ze=!1,Mt=!1,Se="biweekly",Ot=!1,on=!1,Oe="",Pe=null,j={targetType:"other",note:"",tickets:""},kn=!1,qt="",X=[],ke=[],Re="",De=!1,Me="",Yt=null,me=-1,Te=!1,Br=!1,se="",q={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},vn="",Q=-1,be=!1,Ci={biweekly:0,monthly:0};const xd=1780786800,gt=14*24*60*60,Nr=60*60,Cr=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let I=Cr[0].id;const qi=new Set;function Od(){ea.innerHTML=`
    <main class="splash-screen">
      <img src="${cl}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await cd(),await Pd(),ra(),Gd(),Pn(),await Tt()},5e3)}async function Pd(){try{k=await hd()}catch(t){k={logged_in:!1,allowed:!1,status_message:""},p("session-error",w(t),{ttlMs:m})}}function ra(){ea.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${ll}" alt="" class="title-icon" />
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
            <img src="${dl}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${c(Vr)}</div>
            </div>
          </div>
          <div class="compact-header-actions">
            ${oa()}
            <div id="discordArea" class="discord-area"></div>
          </div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${ia()}
        </nav>

        <div id="webSavedVarsUploadBannerHost">
          ${vu()}
        </div>

        <section id="guildSyncTabContent" class="guildsync-tab-content${ga()?" web-upload-banner-dismissed":""}" aria-live="polite">
          ${aa()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await dd()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await Ws(),await ud()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await ld()}),On(),Su(),la(),Cc(),nc(),bc(),ba(),ec(),Ha(),Wa(),ja(),za(),Na(),rc(),Kd(),ft(),un(),ts||(window.addEventListener("resize",()=>{jc(),Hc()}),Rp(),ts=!0)}function ia(){return Cr.map(t=>{const e=t.id===I,n=Vd(t.id,e),r=n?sa():0,i=n?`Deposit mail needs attention: ${r} item${r===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${n?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${h(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${h(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${Hd(t.icon)}</span>
          <span class="guildsync-tab-label">${c(t.label)}</span>
          ${n?`<span class="guildsync-tab-mail-badge" aria-label="${h(i)}">${r>99?"99+":c(String(r))}</span>`:""}
        </button>
      `}).join("")}function Fd(){const t=ei(),e=js[t]||{label:"Desktop client",shortLabel:"Desktop"};return Ie&&Ie.platform===t?{available:!0,label:`${Ie.label||e.shortLabel} detected`,shortLabel:Ie.label||e.shortLabel,version:Ie.version,fileName:Ie.fileName,href:Ie.url}:{available:!1,label:e.label,shortLabel:e.shortLabel,fileName:"",href:"",error:Ri}}async function Gd(){const t=ei();Ri="";try{const e=await fetch(`/api/client-download?platform=${encodeURIComponent(t)}`,{headers:{Accept:"application/json"}});let n=null;try{n=await e.json()}catch{n=null}if(!e.ok)throw new Error((n==null?void 0:n.error)||`Download lookup failed with HTTP ${e.status}.`);const r=n.download&&typeof n.download=="object"?n.download:{},i=String(n.download_file_name||r.file_name||"").trim(),s=String(n.download_url||r.url||"").trim();if(!n.ok||!i||!s)throw new Error(n.error||"Download lookup did not return a usable file.");Ie={platform:String(r.platform||n.platform||t).trim(),label:String(r.label||"").trim(),version:String(r.version||"").trim(),fileName:i,url:s}}catch(e){Ie=null,Ri=(e==null?void 0:e.message)||"No GuildSync desktop client download is currently available.";const n=(js[t]||{}).shortLabel||"Desktop";p("desktop-client-download-unavailable",`No ${n} client is currently available for download.`,{tone:"warning",ttl:to}),console.warn("GuildSync desktop client download lookup failed.",e)}Ud()}function Ud(){const t=document.querySelector(".compact-header-actions .desktop-client-download-button");!t||(t.outerHTML=oa())}function oa(){const t=Fd();if(!t.available){const e=t.error||"Looking for latest download...";return`
      <button
        class="desktop-client-download-button"
        type="button"
        disabled
        title="${h(e)}"
        aria-label="${h(e)}"
      >
        <span class="desktop-client-download-icon" aria-hidden="true">\u2B07</span>
        <span class="desktop-client-download-copy">
          <span class="desktop-client-download-title">Download Desktop Client</span>
          <span class="desktop-client-download-subtitle">${c(t.label)} \xB7 ${c(e)}</span>
        </span>
        <span class="desktop-client-download-caret" aria-hidden="true">\u25BE</span>
      </button>
    `}return`
    <a
      class="desktop-client-download-button"
      href="${h(t.href)}"
      download="${h(t.fileName)}"
      title="Download ${h(t.fileName)}"
      aria-label="Download GuildSync desktop client for ${h(t.shortLabel)}"
    >
      <span class="desktop-client-download-icon" aria-hidden="true">\u2B07</span>
      <span class="desktop-client-download-copy">
        <span class="desktop-client-download-title">Download Desktop Client</span>
        <span class="desktop-client-download-subtitle">${c(t.label)} \xB7 ${c(t.version)} \xB7 ZIP</span>
      </span>
      <span class="desktop-client-download-caret" aria-hidden="true">\u25BE</span>
    </a>
  `}function sa(){return Y()?Jr()+rr()+pc():0}function Vd(t,e){return t!=="more"||e?!1:sa()>0}function Hd(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function aa(){const t=Cr.find(n=>n.id===I)||Cr[0];let e="";return t.id==="discord-members"?e=da():t.id==="eso-members"?e=ua():t.id==="more"?e=hc():t.id==="settings"?e=wu():e=`
      <div class="guildsync-tab-panel" data-active-tab="${h(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${c(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${Te?Tf():""}
    ${Ot?uh():""}
    ${kn?eh():""}
    ${Ke?wf():""}
    ${pn?Ru():""}
    ${gn?Cu():""}
    ${bt?Ou():""}
    ${Ye?Ju():""}
    ${yn?Yd():""}
  `}function Wd(){return ye.isOpen||yn||Xt||en||Te||Ot||kn||Ke||hn||pn||gn||bt||Ye||Mt}function jd(){return yn?!1:Ye?(Gi(),!0):bt?(Fi(),!0):gn?(Pi(),!0):pn?(Oi(),!0):Ke?(an(),!0):hn?(Hi(),!0):Ot?(xr(),!0):kn?(mh(),f(),!0):Te?(Te=!1,f(),!0):Xt?(Xt=!1,f(),!0):en?(en=!1,f(),!0):Mt?(Mt=!1,f(),!0):!1}function zd(t){t.key==="Escape"&&jd()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",zd,!0),window.guildSyncGlobalModalEscapeAttached=!0);function so(t={}){return new Promise(e=>{In&&In(!1),yn=!0,ro={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},In=e,f()})}function qr(t=!1){const e=In;In=null,yn=!1,ro=null,e&&e(t===!0),f()}function Yd(){const t=ro||{};return`
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
  `}function is(t){var r,i,s,o;const e=(i=(r=t.target).closest)==null?void 0:i.call(r,"#cancelGuildSyncConfirmButton"),n=(o=(s=t.target).closest)==null?void 0:o.call(s,"#acceptGuildSyncConfirmButton");if(!(!e&&!n)){if(t.preventDefault(),t.stopPropagation(),e){qr(!1);return}n&&qr(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",is,!0),document.addEventListener("pointerup",is,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function Kd(){if(!yn)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=r=>{r.preventDefault(),r.stopPropagation(),qr(!1)}),e&&(e.onclick=r=>{r.preventDefault(),r.stopPropagation(),qr(!0)});const n=document.querySelector(".guildsync-confirm-overlay");n&&(n.onclick=r=>{r.target===n&&(r.preventDefault(),r.stopPropagation())})}function ca(t=I){if(!(u!=null&&u.connected))return;if(t==="discord-members"?Qt:t==="eso-members"?We:t==="more"?ze:!1){qi.add(t);return}qi.delete(t),t==="discord-members"&&Wn({silent:!0}),t==="eso-members"&&(Ti=!0,Pt({silent:!0})),t==="more"&&oe({silent:!0})}function Zn(t){qi.has(t)&&ca(t)}function la(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(Wd())return;const e=t.dataset.tabId;if(!e)return;const n=e!==I;I=e,ca(),n&&f()})})}function Jd(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function ao(t){const e={x:window.scrollX,y:window.scrollY},n=[];for(let o=t;o;o=o.parentElement)n.push({element:o,top:o.scrollTop,left:o.scrollLeft});const r=t?Array.from(t.querySelectorAll("*")):[],i=(o,a)=>o.id?o.id===a.id:o.tagName===a.tagName&&o.className===a.className,s=r.filter(o=>o.scrollTop||o.scrollLeft).map(o=>({identity:{id:o.id,tagName:o.tagName,className:o.className},occurrence:r.filter(a=>i(o,a)).indexOf(o),top:o.scrollTop,left:o.scrollLeft}));return()=>{const o=t?Array.from(t.querySelectorAll("*")):[];for(const{identity:a,occurrence:l,top:d,left:y}of s){const g=o.filter(b=>i(a,b))[l];g&&(g.scrollTop=d,g.scrollLeft=y)}for(const{element:a,top:l,left:d}of n)a.scrollTop=l,a.scrollLeft=d;window.scrollTo({left:e.x,top:e.y,behavior:"instant"})}}function f(t={}){Ye&&Jd();const e=document.querySelector(".guildsync-tabs"),n=document.querySelector("#guildSyncTabContent"),r=ao(n);e&&(e.innerHTML=ia()),n&&(n.innerHTML=aa()),la(),Cc(),nc(),bc(),ba(),ec(),Ha(),Wa(),ja(),za(),Na(),rc(),r(),t.restoreDiscordSearchFocus&&Xh(),t.restoreRosterSearchFocus&&Zh(),I==="discord-members"&&(u==null?void 0:u.connected)&&re.length===0&&!Qt&&Wn({silent:!0}),I==="eso-members"&&(u==null?void 0:u.connected)&&de.length===0&&!We&&!Ti&&(Ti=!0,Pt({silent:!0})),(I==="more"&&ie.length===0||I==="settings"&&!J&&!rs)&&(u==null?void 0:u.connected)&&!ze&&(rs=!0,oe({silent:!0})),(I==="discord-members"||I==="eso-members"||I==="settings")&&(u==null?void 0:u.connected)&&B.length===0&&!z&&nr({silent:!0})}function da(){const t=Kh(),e=ep(),n=Array.from(Ht),r=Array.from(Wt);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${c(Ic(Wr))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${Qt||$r?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${$r?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${h(Rr)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!Ht.has(i)).map(i=>`<option value="${h(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All roles</span>':n.map(i=>ip(i)).join("")}
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
              ${io.filter(i=>!Wt.has(i.id)).map(i=>`<option value="${h(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>fa("discord",i)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${ur("username","Username")}
                ${ur("global_name","Global Name")}
                ${ur("server_nickname","Server Nickname")}
                ${ur("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>tp(i)).join(""):np()}
            </tbody>
          </table>
        </div>
      </div>
      ${en?hu():""}
    </div>
  `}function ua(){const t=su(),e=lu(),n=Array.from(At),r=Array.from(jt);return`
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
          <span class="discord-last-refresh">Last Refresh: ${c(Vf(Dr))}</span>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${We?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${We?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${h(Mr)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!At.has(i)).map(i=>`<option value="${h(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All ranks</span>':n.map(i=>du(i)).join("")}
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
              ${io.filter(i=>!jt.has(i.id)).map(i=>`<option value="${h(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>fa("roster",i)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${Rn("account_name","Account Name")}
                ${Rn("rank","Rank")}
                ${Rn("joined","Joined")}
                ${Rn("notes","Notes","roster-notes-header")}
                ${Rn("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map((i,s)=>Qd(i,s)).join(""):ru()}
            </tbody>
          </table>
        </div>
      </div>
      ${Xt?bu():""}
      ${hn?Zd():""}
    </div>
  `}function Qd(t,e=-1){const n=iu(t.rank||""),r=n?` style="color: ${n};"`:"";return`
    <tr class="eso-roster-row${e===W?" roster-search-active-row":""}"${r} data-roster-row-index="${h(String(e))}" data-eso-account-name="${h(t.account_name||"")}">
      <td>${c(t.account_name||"")}</td>
      <td>${co(t.rank||"")}</td>
      <td>${c(Kr(t.joined))}</td>
      <td class="roster-notes-cell">${Xd(t)}</td>
      <td class="member-link-action-cell">${Pa({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function Xd(t){const e=String((t==null?void 0:t.account_name)||"").trim(),n=Number((t==null?void 0:t.note_count)||0),r=n>0,i=r?`${n} roster note${n===1?"":"s"} for ${e}`:`No roster notes for ${e}`;return`
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
  `}function Zd(){const t=Vn||"",e=Y();return`
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
          ${lt?`<div class="discord-data-error">${c(lt)}</div>`:""}
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
                ${eu()}
              </tbody>
            </table>
          </div>
          ${e?tu():'<div class="roster-history-muted">A User or Admin role is required to add notes.</div>'}
        </div>
      </div>
    </div>
  `}function eu(){return Tr?'<tr><td class="bank-empty-row" colspan="3">Loading notes...</td></tr>':!Array.isArray(ct)||ct.length===0?'<tr><td class="bank-empty-row" colspan="3">No notes recorded for this member.</td></tr>':ct.map(t=>`
      <tr>
        <td class="roster-notes-when-cell">${c(nu(t.timestamp))}</td>
        <td class="roster-notes-officer-cell">${c(t.officer||"")}</td>
        <td class="roster-notes-note-cell">${c(t.note||"")}</td>
      </tr>
    `).join("")}function tu(){return`
    <div class="roster-notes-form">
      <label for="rosterNotesNewNote">Add Note</label>
      <textarea
        id="rosterNotesNewNote"
        class="roster-notes-textarea"
        rows="4"
        placeholder="Enter a new roster note..."
        ${Lt?"disabled":""}
      >${c(Zt)}</textarea>
      <button id="saveRosterNoteButton" class="refresh-discord-button" type="button" ${Lt?"disabled":""}>
        ${Lt?"Saving...":"Save Note"}
      </button>
    </div>
  `}function nu(t){const e=Number(t||0);return!Number.isFinite(e)||e<=0?"":new Date(e*1e3).toLocaleString()}function ru(){return`
    <tr>
      <td class="bank-empty-row" colspan="5">${c(We?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function iu(t){String(t||"").trim();const e=op(t);return Zr(e==null?void 0:e.role_color)}function co(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${c(e)}</span>`}function ou(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":co(e)}function su(){const t=Mr.trim().toLowerCase(),e=de.filter(n=>{const r=String(n.rank||"").trim();if(At.size>0&&!At.has(r)||!ma(jt,Ii(n)))return!1;if(!t)return!0;const i=Kr(n.joined),s=go(n.joined),o=Ii(n),a=pa(n.account_name||"");return[n.account_name,r,i,s,n.joined,o,a].map(d=>String(d||"").toLowerCase()).join(" ").includes(t)});return au(e)}function au(t){if(!Fe||!te)return t;const e=te==="desc"?-1:1;return[...t].sort((n,r)=>{const i=os(n,Fe),s=os(r,Fe),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:String(n.account_name||"").localeCompare(String(r.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function os(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const n=Number(t.joined||0);return Number.isFinite(n)&&n>0?String(n).padStart(16,"0"):""}if(e==="notes")return String(Number(t.note_count||0)).padStart(8,"0");if(e==="linked"){const n=Ii(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[n]||"9"} ${n} ${pa(t.account_name||"")}`}return String(t.account_name||"")}function cu(t){const n=new Set(["account_name","rank","joined","notes","linked"]).has(t)?t:"account_name";Fe!==n?(Fe=n,te="asc"):te==="asc"?te="desc":te==="desc"?(Fe="",te=""):(Fe=n,te="asc"),W=-1,f()}function Rn(t,e,n=""){const r=Fe===t&&Boolean(te),i=r?te==="asc"?"ascending":"descending":"none",s=r?te==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${h(n)}" aria-sort="${h(i)}">
      <button
        class="discord-sort-header roster-sort-header${r?" active":""}"
        type="button"
        data-roster-sort-column="${h(t)}"
        title="Sort ${h(e)}${r&&te==="asc"?" descending":r&&te==="desc"?" not sorted":" ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function lu(){return Array.from(new Set(de.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function du(t){const e=Ro(t),n=Zr(e==null?void 0:e.role_color),r=Mo(n),i=Do(n,r);return`
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
  `}function uu(t){const e=io.find(n=>n.id===t);return e?e.label:t}function fa(t,e){const n=t==="roster"?"roster":"discord",r=uu(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${n}-link-status-filter="${h(e)}"
      title="Remove ${h(r)} link filter"
    >
      <span>${c(r)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function ha(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked"&&String(n.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function fu(t){return ha(Yr(t==null?void 0:t.discord_id))}function Ii(t){return ha(zr(t==null?void 0:t.account_name))}function pa(t){const e=zr(t),n=Oa({mode:"eso-to-discord",esoAccountName:t}),r=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean),i=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="candidate").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean);return[n.label,n.title,r.join(" "),i.join(" ")].filter(Boolean).join(" ")}function ma(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function hu(){return`
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
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${h(Xe)}" />
        </div>

        ${Ve?`<div class="discord-data-error">${c(Ve)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${pu()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${Ct?`: ${c(Ct)}`:""}</div>
            ${mu()}
          </div>
        </div>
      </div>
    </div>
  `}function pu(){return ut&&le.length===0?'<div class="roster-history-muted">Searching...</div>':le.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${le.map((t,e)=>`
        <button class="roster-history-match${e===pe||t.discord_id===tn?" is-selected":""}" type="button" data-discord-history-id="${h(t.discord_id)}" data-discord-history-name="${h(xi(t))}">
          <span>${c(xi(t))}</span>
          <strong>${c(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===pe?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function mu(){return tn?ut&&dt.length===0?'<div class="roster-history-muted">Loading history...</div>':dt.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${dt.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(go(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${c(gu(t.event_type))}</td>
              <td>${c(t.old_value||"")}</td>
              <td>${c(t.new_value||"")}</td>
              <td>${c(t.initiator||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function xi(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function gu(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function bu(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${h(Un)}" />
        </div>

        ${Ue?`<div class="discord-data-error">${c(Ue)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${yu()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${mt?`: ${c(mt)}`:""}</div>
            ${ku()}
          </div>
        </div>
      </div>
    </div>
  `}function yu(){return at&&ce.length===0?'<div class="roster-history-muted">Searching...</div>':ce.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${ce.map((t,e)=>`
        <button class="roster-history-match${e===he||t.account_name===mt?" is-selected":""}" type="button" data-roster-history-account="${h(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <strong>${c(t.rank||"")}</strong>
          ${e===he?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function ku(){return mt?at&&st.length===0?'<div class="roster-history-muted">Loading history...</div>':st.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${st.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(go(t.timestamp))}</td>
              <td>${c(t.event_type||"")}</td>
              <td>${ou(t.rank)}</td>
              <td>${c(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function er(){return typeof window<"u"&&window.GUILDSYNC_WEB===!0}function ga(){if(!er())return!0;try{return localStorage.getItem(zs)==="1"}catch{return!1}}function vu(){return!H()||!er()||ga()?"":`
    <aside class="web-savedvars-upload-banner" aria-label="ESO SavedVariables upload help">
      <div class="web-savedvars-upload-banner-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path d="M12 3.25c-2.74 0-5.03 1.94-5.56 4.52C3.9 8.24 2 10.47 2 13.12 2 16.2 4.5 18.7 7.58 18.7h2.19v-4.46H6.91l5.09-5.1 5.09 5.1h-2.86v4.46h2.32c3.01 0 5.45-2.44 5.45-5.45 0-2.62-1.86-4.82-4.33-5.33-.49-2.67-2.84-4.67-5.67-4.67Z" fill="currentColor"/>
          <path d="M11.02 14.25h1.96v6.5h-1.96v-6.5Z" fill="currentColor"/>
        </svg>
      </div>
      <div class="web-savedvars-upload-banner-copy">
        <div class="web-savedvars-upload-banner-title">Upload ESO SavedVariables</div>
        <div class="web-savedvars-upload-banner-text">
          Drag and drop <strong>GuildSyncBanking.lua</strong>, <strong>GuildSyncRoster.lua</strong>, or <strong>GuildSyncApplications.lua</strong> anywhere on this page to upload them.
        </div>
      </div>
      <button id="webSavedVarsUploadBannerDismissButton" class="web-savedvars-upload-banner-dismiss" type="button" title="Dismiss upload tip" aria-label="Dismiss upload tip">\xD7</button>
    </aside>
  `}function Su(){const t=document.querySelector("#webSavedVarsUploadBannerDismissButton");!t||t.addEventListener("click",()=>{var e,n;try{localStorage.setItem(zs,"1")}catch{}(e=document.querySelector("#webSavedVarsUploadBannerHost"))==null||e.remove(),(n=document.querySelector(".guildsync-tab-content"))==null||n.classList.add("web-upload-banner-dismissed")})}function wu(){return`
    <div class="guildsync-tab-panel reports-panel" data-active-tab="settings">
      <div class="discord-data-header reports-header">
        <div>
          <h2 class="discord-data-title">Reports & Admin</h2>
          <p class="discord-data-subtitle">Run GuildSync reports and administrative review tools. More options can be added here later.</p>
        </div>
      </div>

      <div class="reports-scroll-area">
        ${ka()}
        ${oo.render()}
        <section class="reports-list" aria-label="Available reports">
          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Associates Promotion Eligible</h3>
              <p>Shows Associates who have been in the guild at least two weeks, have purchased at least one raffle ticket, and are linked to Discord. Also shows otherwise eligible Associates who still need a Discord link reviewed.</p>
            </div>
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${Ze?"disabled":""}>
              ${Ze?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${et?"disabled":""}>
              ${et?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${tt?"disabled":""}>
              ${tt?"Loading...":"Run"}
            </button>
          </article>
        </section>

        <article class="report-option-card">
          <div class="report-option-copy">
            <h3>ESO / Discord Member Links</h3>
            <p>Review automatic ESO-to-Discord links, accept candidate matches, unlink blocked matches, or run the matcher again after roster or Discord refreshes.</p>
          </div>
          <button id="runMemberLinksReportButton" class="refresh-discord-button report-run-button" type="button" ${z?"disabled":""}>
            ${z?"Loading...":"Run"}
          </button>
        </article>
      </div>
    </div>
  `}function ba(){var t,e,n,r;I==="settings"&&(Rs(ta,{refresh:!0}),oo.wire({request:(i,s)=>R(i,s,12e4),rerender:f}),ya(),(t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>wa()),(e=document.querySelector("#runDiscordRankAuditReportButton"))==null||e.addEventListener("click",()=>Nu()),(n=document.querySelector("#runDiscordLastSeenReportButton"))==null||n.addEventListener("click",()=>xu()),(r=document.querySelector("#runMemberLinksReportButton"))==null||r.addEventListener("click",()=>zu()))}function ya(t=document){var e,n,r,i,s;(e=t.querySelector("#cancelBonusDefaults"))==null||e.addEventListener("click",()=>{ge=!1,f()}),(n=t.querySelector("#resetBonusDefaults"))==null||n.addEventListener("click",()=>{ge=!0,f()}),(r=t.querySelector("#raffleBonusSettingsForm"))==null||r.addEventListener("submit",_u),(i=t.querySelector("#raffleBonusSettingsForm"))==null||i.addEventListener("input",o=>{Ee={raffle:He,values:new Map(new FormData(o.currentTarget))}}),(s=t.querySelector("#bonusRafflePicker"))==null||s.addEventListener("change",o=>{He=o.currentTarget.value,ge=!1,Ee=null,f()})}function ka(){var o;if(!J)return'<article class="report-option-card raffle-bonus-card"><div class="report-option-copy"><h3><button type="button" class="report-section-toggle" data-report-toggle="bonus" aria-expanded="false" aria-controls="raffleBonusContent">Raffle Bonus Tickets <span aria-hidden="true">\u25BE</span></button></h3><div id="raffleBonusContent" class="report-section-content" inert><div class="report-section-inner"><p>Loading raffle bonus settings...</p></div></div></div></article>';const t=!ge&&(Ee==null?void 0:Ee.raffle)===He?Ee.values:null,e=rn.find(a=>`${a.type}:${a.salesEnd}`===He),n=ge&&(e==null?void 0:e.inheritedSettings)?e.inheritedSettings:e,r=e?{enabledByType:{...J.enabledByType,[e.type]:n.enabled},biweekly:e.type==="biweekly"?n.tiers:J.biweekly,monthly:e.type==="monthly"?n.tiers:J.monthly}:ge&&J.envDefaults||J,i=((o=k==null?void 0:k.user)==null?void 0:o.role)==="admin",s=(a,l)=>{var d,y;return`
    <fieldset class="raffle-bonus-tiers" ${i&&!ge?"":"disabled"}>
      <legend>${l}</legend>
      <label><input name="${a}-enabled" type="checkbox" ${(t?t.has(`${a}-enabled`):(y=(d=r.enabledByType)==null?void 0:d[a])!=null?y:r.enabled)?"checked":""}> Enable bonus tickets</label>
      ${r[a].map((g,b)=>{var _,S;return`
        <div class="raffle-bonus-tier">
          <span>Period ${b+1}${b===r[a].length-1?" (final)":""}</span>
          <label>Hours <input name="${a}-${b}-hours" type="number" min="1" step="1" required value="${h(String(t&&(_=t.get(`${a}-${b}-hours`))!=null?_:g.hours))}"></label>
          <label>Bonus % <input name="${a}-${b}-percent" type="number" min="0" max="100" step="0.1" required value="${h(String(t&&(S=t.get(`${a}-${b}-percent`))!=null?S:g.percent))}"></label>
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
            ${rn.map(a=>`<option value="${h(`${a.type}:${a.salesEnd}`)}" ${He===`${a.type}:${a.salesEnd}`?"selected":""}>${c(a.label)}${a.enabled?" (Bonuses)":""}</option>`).join("")}
          </select>
        </label>
        <p data-bonus-settings-source>Source: ${c(e?e.overridden?"Raffle override":"Saved raffle policy":J.source===".env"?"Default":J.source||"Default")}</p>
        ${ge?'<p role="status">Default Hours, Bonus %, and enabled settings are shown below. Click Save Bonus Settings to apply them, or Cancel default restoration to keep your previous settings.</p><button type="button" id="cancelBonusDefaults">Cancel default restoration</button>':""}
        <form id="raffleBonusSettingsForm">
          ${i?`<button type="button" id="resetBonusDefaults">Return to defaults</button><p>Restores Hours, Bonus %, and the enabled switch ${e?"from this raffle\u2019s inherited policy":"for both raffle types from their default rules"}. Changes apply only after Save Bonus Settings.</p>`:""}
          ${e?s(e.type,e.label):s("biweekly","Bi-Weekly Raffle")+s("monthly","50/50 Raffle")}
          ${i?'<button class="refresh-discord-button report-run-button" type="submit">Save Bonus Settings</button>':"<p>Admin access is required to change these settings.</p>"}
        </form>
        </div></div>
      </div>
    </article>`}async function _u(t){t.preventDefault();const e=t.currentTarget,n=new FormData(e),r=rn.find(o=>`${o.type}:${o.salesEnd}`===He),i=o=>((r==null?void 0:r.type)===o?r.tiers:J[o]).map((a,l)=>({hours:Number(n.get(`${o}-${l}-hours`)),percent:Number(n.get(`${o}-${l}-percent`))})),s=r?{raffleType:r.type,salesEnd:r.salesEnd,enabled:n.has(`${r.type}-enabled`),tiers:i(r.type)}:{enabledByType:{biweekly:n.has("biweekly-enabled"),monthly:n.has("monthly-enabled")},biweekly:i("biweekly"),monthly:i("monthly")};try{ge&&(s.resetToDefaults=!0);const o=await R("guildsync:save-raffle-bonus-settings",s,3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||"Could not save raffle bonus settings.");J=o.bonusSettings,Ee=null,ge=!1,await oe({silent:!0}),p("bonus-settings","Raffle bonus settings saved.",{ttlMs:m}),f()}catch(o){p("bonus-settings-error",w(o),{ttlMs:m})}}function Sr(){return er()&&H()&&(u==null?void 0:u.connected)===!0}function va(){if(!er())return null;let t=document.querySelector("#webSavedVarsFullScreenDropOverlay");return t||(t=document.createElement("div"),t.id="webSavedVarsFullScreenDropOverlay",t.className="web-savedvars-fullscreen-drop-overlay",t.setAttribute("aria-hidden","true"),t.innerHTML=`
    <div class="web-savedvars-fullscreen-drop-card">
      <div class="web-savedvars-drop-icon" aria-hidden="true">\u21E9</div>
      <h2>Drop GuildSync SavedVariables File</h2>
      <p>Allowed files only:</p>
      <div class="web-savedvars-allowed-file-list">
        <span>GuildSyncBanking.lua</span>
        <span>GuildSyncRoster.lua</span>
        <span>GuildSyncApplications.lua</span>
      </div>
    </div>
  `,document.body.appendChild(t),t)}function ss(){const t=va();!t||(t.classList.add("is-visible"),t.setAttribute("aria-hidden","false"))}function gi(){const t=document.querySelector("#webSavedVarsFullScreenDropOverlay");!t||(t.classList.remove("is-visible"),t.setAttribute("aria-hidden","true"))}function Dn(t){var n;return Array.from(((n=t==null?void 0:t.dataTransfer)==null?void 0:n.types)||[]).includes("Files")}function Au(t){!(t!=null&&t.dataTransfer)||(t.dataTransfer.dropEffect=Sr()?"copy":"none")}function Sa(t){const e=String(t||"").split(/[\\/]/).pop();return Md.get(e)||""}function Lu(){if(!er())return;va();const t=e=>{!Dn(e)||(e.preventDefault(),e.stopPropagation(),Au(e))};document.addEventListener("dragenter",e=>{!Dn(e)||(t(e),Ft+=1,Sr()&&ss())},!0),document.addEventListener("dragover",e=>{t(e),Dn(e)&&Sr()&&ss()},!0),document.addEventListener("dragleave",e=>{!Dn(e)||(e.preventDefault(),e.stopPropagation(),Ft=Math.max(0,Ft-1),Ft===0&&gi())},!0),document.addEventListener("drop",async e=>{var r;if(!Dn(e))return;if(t(e),Ft=0,gi(),!Sr()){p("web-savedvars-drop-not-ready","SavedVariables drag/drop is only available while logged in and connected to the GuildSync server.",{ttlMs:m});return}const n=Array.from(((r=e.dataTransfer)==null?void 0:r.files)||[]);await Eu(n)},!0),window.addEventListener("blur",()=>{Ft=0,gi()})}async function Eu(t=[]){if(pi){p("web-savedvars-drop-busy","A SavedVariables upload is already processing. Please wait for it to finish.",{ttlMs:m});return}const e=Array.from(t||[]).filter(Boolean);if(!e.length){p("web-savedvars-drop-empty","No file was dropped.",{ttlMs:m});return}const n=e.find(r=>!Sa(r.name));if(n){p("web-savedvars-drop-invalid",`Unsupported file: ${n.name}. Drop only GuildSyncBanking.lua, GuildSyncRoster.lua, or GuildSyncApplications.lua.`,{ttlMs:m});return}pi=!0;try{for(const r of e)await $u(r)}finally{pi=!1}}async function $u(t){if(!H())throw new Error("Approved GuildSync access is required to upload files.");const e=Sa(t.name);if(!e)throw new Error(`Unsupported file: ${t.name}`);const n=`web-savedvars-upload-${e}`,r=await t.text();if(!String(r||"").trim())throw new Error(`${t.name} is empty.`);p(n,`Uploading ${t.name}...`);try{const i=await R("guildsync:upload-savedvars-raw",{file_name:t.name,raw_lua_text:r,source:"web-drag-drop"},12e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||`${t.name} upload was rejected.`);e==="banking"?await oe({silent:!0}):e==="roster"&&(await Pt({silent:!0}),await nr({silent:!0})),p(n,i.message||`${t.name} uploaded and processed.`,{ttlMs:m})}catch(i){throw p(n,w(i),{ttlMs:m}),i}ti("version")}function wa(){pn=!0,Et="",f(),Ja()}function Oi(){pn=!1,Et="",f()}function Ru(){const t=Du(),e=Mu(),n=mn.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${Ze?"disabled":""}>${Ze?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(n))} total row${n===1?"":"s"}</span>
        </div>

        ${Et?`<div class="discord-data-error">${c(Et)}</div>`:""}

        <div class="report-results-content">
          ${Ze&&n===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!Ze&&n===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${n>0?as("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${n>0?as("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${c(La())}</textarea>
      </div>
    </div>
  `}function Du(){return mn.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function Mu(){return mn.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function as(t,e,n,r){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${c(t)}</h4>
          <p>${c(e)}</p>
        </div>
        <span>${c(String(n.length))} row${n.length===1?"":"s"}</span>
      </div>
      ${n.length>0?Tu(n):`<div class="roster-history-muted report-section-empty">${c(r)}</div>`}
    </section>
  `}function Tu(t=mn){return`
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
              <td>${co(e.rank||"")}</td>
              <td>${c(Kr(e.joined))}</td>
              <td>${c(ve(e.purchased_tickets||0))}</td>
              <td class="associate-earliest-deposit-cell">${c(_a(e))}</td>
              <td>${c(Aa(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function _a(t){const e=String((t==null?void 0:t.earliest_deposit_summary)||"").trim();if(e)return e;const n=String((t==null?void 0:t.earliest_deposit_date)||"").trim(),r=String((t==null?void 0:t.earliest_deposit_raffle_period)||"").trim();return[n,r].filter(Boolean).join(" | ")}function Aa(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function La(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Earliest Deposit / Raffle","Discord Link"]];for(const e of mn){const n=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([n,e.account_name||"",e.rank||"",Kr(e.joined),ve(e.purchased_tickets||0),_a(e),Aa(e)])}return t.map(e=>e.map(Qr).join("	")).join(`
`)}async function Bu(){const t=La();if(await Xr(t)){p("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:m});return}const n=document.querySelector("#associateTicketReportTsv");n&&(n.focus(),n.select()),p("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function Nu(){gn=!0,$t="",f(),Ka()}function Pi(){gn=!1,$t="",f()}function Cu(){const t=Hn.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${et?"disabled":""}>${et?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${$t?`<div class="discord-data-error">${c($t)}</div>`:""}

        <div class="report-results-content">
          ${et&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!et&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?qu(Hn):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${c(Ra())}</textarea>
      </div>
    </div>
  `}function qu(t=Hn){return`
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
              <td data-label="Discord Member" class="discord-rank-audit-member-cell">${c(Ea(e))}</td>
              <td data-label="Discord Rank Role" class="discord-rank-audit-discord-cell">${c(e.discord_rank||"No matching rank role")}</td>
              <td data-label="Linked ESO Account(s)" class="discord-rank-audit-eso-account-cell">${c(e.eso_accounts||"No linked ESO account")}</td>
              <td data-label="ESO Rank" class="discord-rank-audit-eso-rank-cell">${c(e.eso_rank||"None")}</td>
              <td data-label="Issue" class="discord-rank-audit-issue-cell">${c($a(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Ea(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function $a(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function Ra(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of Hn)t.push([Ea(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",$a(e)]);return t.map(e=>e.map(Qr).join("	")).join(`
`)}async function Iu(){const t=Ra();if(await Xr(t)){p("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:m});return}const n=document.querySelector("#discordRankAuditReportTsv");n&&(n.focus(),n.select()),p("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function xu(){bt=!0,Rt="",bn="",f(),Ya(),B.length===0&&!z&&nr({silent:!0})}function Fi(){bt=!1,Rt="",bn="",nt="",zt="",rt="",f()}function Ou(){const t=lo(),e=no.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${tt?"disabled":""}>${tt?"Loading...":"Run Again"}</button>
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
            value="${h(bn)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${nt===""?"selected":""}>All link statuses</option>
            <option value="linked" ${nt==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${nt==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${nt==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${Rt?`<div class="discord-data-error discord-last-seen-report-error">${c(Rt)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${tt&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!tt&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?Pu(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${c(Ma(t))}</textarea>
      </div>
    </div>
  `}function Pu(t=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${Mn("name","Discord Member")}</th>
            <th>${Mn("eso","Linked ESO Account")}</th>
            <th>${Mn("date","Last Seen")}</th>
            <th>${Mn("days","Days Since")}</th>
            <th>${Mn("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr class="discord-last-seen-row ${h(Wu(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${h(It(e).status)}" data-discord-last-seen-search="${h(Da(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${Hu(e)}
                  <span>${c(sn(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${Gu(e)}</td>
              <td>${c(uo(e.last_seen))}</td>
              <td>${c(fo(e.last_seen))}</td>
              <td>${c(Ir(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function Mn(t,e){const n=zt===t,r=n?rt==="asc"?"\u25B2":"\u25BC":"\u2195",i=n?`${e}: ${rt==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${n?" active":""}" type="button" data-discord-last-seen-sort="${h(t)}" title="${h(i)}">
      <span>${c(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${c(r)}</span>
    </button>
  `}function lo(){const t=[...no],e=zt,n=rt;if(!e||!n)return t;const r=n==="desc"?-1:1;return t.sort((i,s)=>{var o,a;if(e==="date"){const l=Number(i.last_seen||0)||0,d=Number(s.last_seen||0)||0;return(l-d)*r}if(e==="days")return(cs(i.last_seen)-cs(s.last_seen))*r;if(e==="action")return Ir(i.last_seen_action).localeCompare(Ir(s.last_seen_action),void 0,{sensitivity:"base"})*r;if(e==="eso"){const l=It(i),d=It(s),y={linked:0,candidate:1,unlinked:2},g=((o=y[l.status])!=null?o:9)-((a=y[d.status])!=null?a:9);return g!==0?g*r:l.esoAccountName.localeCompare(d.esoAccountName,void 0,{sensitivity:"base"})*r}return sn(i).localeCompare(sn(s),void 0,{sensitivity:"base"})*r})}function Fu(t){zt!==t?(zt=t,rt="asc"):rt==="asc"?rt="desc":(zt="",rt=""),f()}function sn(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function Da(t){return[sn(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,Uu(t),uo(t==null?void 0:t.last_seen),fo(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function It(t){const e=df(t==null?void 0:t.discord_id),n=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),r=String((e==null?void 0:e.eso_account_name)||"").trim();return n==="linked"&&r?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:r,title:`Linked ESO account: ${r}`}:(n==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&r?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:r,title:`Fuzzy ESO account candidate: ${r}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function Gu(t){const e=It(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${h(e.className)}"
      title="${h(e.title)}"
      aria-label="${h(e.label)}"
      role="img"
    ></span>
  `}function Uu(t){const e=It(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function Vu(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!n)return"";if(/^https?:\/\//i.test(e))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function Hu(t){const e=sn(t),n=e?e.slice(0,2).toUpperCase():"?",r=Vu(t);return r?`<span class="discord-member-avatar"><img src="${h(r)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${c(n)}</span>`}function uo(t){const e=Number(t);if(!e)return"Never";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t||"");const r=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(n).reduce((i,s)=>(i[s.type]=s.value,i),{});return`${r.month}/${r.day}/${r.year} ${r.hour}:${r.minute} ${r.dayPeriod}`}function Wu(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const n=(Date.now()-e*1e3)/864e5;return n>30?"discord-last-seen-red":n>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function fo(t){const e=Number(t);if(!e)return"Never";const n=Date.now()-e*1e3;if(!Number.isFinite(n))return"";if(n<0)return"0 days";const r=Math.floor(n/864e5);return`${r} day${r===1?"":"s"}`}function cs(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const n=Date.now()-e*1e3;return Number.isFinite(n)?n<0?0:Math.floor(n/864e5):Number.POSITIVE_INFINITY}function Ir(t){return String(t||"").trim()||"None tracked"}function Ma(t=lo()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const n of t){const r=It(n);e.push([sn(n),r.label||"",r.esoAccountName||"",uo(n==null?void 0:n.last_seen),fo(n==null?void 0:n.last_seen),Ir(n==null?void 0:n.last_seen_action),(n==null?void 0:n.username)||"",(n==null?void 0:n.discord_id)||""])}return e.map(n=>n.map(Qr).join("	")).join(`
`)}async function ju(){const t=lo().filter(i=>{const s=Ce(bn),o=String(nt||"").trim().toLowerCase(),a=!s||Ce(Da(i)).includes(s),l=!o||It(i).status===o;return a&&l}),e=Ma(t);if(await Xr(e)){p("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:m});return}const r=document.querySelector("#discordLastSeenReportTsv");r&&(r.focus(),r.select()),p("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function zu(){Ye=!0,Z="",f(),B.length===0&&!z&&nr({silent:!0})}function Gi(){Ye=!1,jr="",wt="",Jn="",Qn="",Ge=-1,f()}function Ta(t){return[...new Set((Array.isArray(B)?B:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function Ba(t,e){return t.map(n=>`<option value="${h(n)}" ${e===n?"selected":""}>${c(n)}</option>`).join("")}function Yu(){return Ba(Ta("link_status"),Jn)}function Ku(){return Ba(Ta("link_method"),Qn)}function Ju(){return`
    <div class="roster-history-overlay member-links-report-overlay" role="dialog" aria-modal="true" aria-labelledby="memberLinksReportTitle">
      <div class="roster-history-dialog report-results-dialog member-links-report-dialog">
        <div class="roster-history-header report-results-header">
          <div>
            <h3 id="memberLinksReportTitle">ESO / Discord Member Links</h3>
            <p>${ht()?"Review automatic links, accept fuzzy candidates, unblock/relink members, or run the matcher again.":"View ESO/Discord account links and suggested matches."}</p>
          </div>
          <button id="closeMemberLinksReportButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        <div class="report-results-toolbar">
          <button id="refreshMemberLinksButton" class="clear-discord-filters-button" type="button" ${z?"disabled":""}>Refresh Links</button>
          <button ${H()?"":"hidden disabled"} id="runMemberAutoLinkButton" class="refresh-discord-button" type="button" ${z?"disabled":""}>${z?"Running...":"Run Auto-Linking"}</button>
          <span class="roster-history-muted">${c(String(B.length))} link/candidate row${B.length===1?"":"s"}</span>
        </div>

        <div class="member-links-report-filter-row">
          <input
            id="memberLinksReportSearchInput"
            class="member-links-report-search-input"
            type="search"
            autocomplete="off"
            spellcheck="false"
            placeholder="Search Discord account or ESO member..."
            value="${h(jr)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${Jn===""?"selected":""}>All statuses</option>
            ${Yu()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${Qn===""?"selected":""}>All methods</option>
            ${Ku()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${wt===""?"selected":""}>All actions</option>
            <option value="needs-link" ${wt==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${wt==="can-unlink"?"selected":""}>Unlink Available</option>
            <option value="can-unblock" ${wt==="can-unblock"?"selected":""}>Unblock Available</option>
          </select>
        </div>

        ${Z?`<div class="discord-data-error member-links-report-error">${c(Z)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${ef()}
        </div>
      </div>
    </div>
  `}function Na(){var n,r,i,s,o,a;if(!Ye)return;(n=document.querySelector("#closeMemberLinksReportButton"))==null||n.addEventListener("click",Gi),(r=document.querySelector("#refreshMemberLinksButton"))==null||r.addEventListener("click",()=>nr()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>cf());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",tf),t.addEventListener("keydown",sf)),(s=document.querySelector("#memberLinksReportActionFilter"))==null||s.addEventListener("change",nf),(o=document.querySelector("#memberLinksReportStatusFilter"))==null||o.addEventListener("change",rf),(a=document.querySelector("#memberLinksReportMethodFilter"))==null||a.addEventListener("change",of),tr(),document.querySelectorAll("[data-accept-member-candidate]").forEach(l=>{l.addEventListener("click",()=>qa(l.dataset.acceptMemberCandidate||"",l.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(l=>{l.addEventListener("click",()=>lf(l.dataset.unlinkMemberLink||"",l.dataset.unlinkMemberLinkDiscordId||""))}),document.querySelectorAll("[data-unblock-member-auto-link]").forEach(l=>{l.addEventListener("click",()=>Ia(l.dataset.unblockMemberAutoLink||"",l.dataset.unblockMemberAutoLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",l=>{l.target===e&&Gi()})}function ls(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function ds(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Qu(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Xu(t){return[...Array.isArray(t)?t:[]].sort((e,n)=>{const r=ls(e)-ls(n);if(r!==0)return r;const i=ds(e).localeCompare(ds(n),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((n==null?void 0:n.discord_user_id)||""),void 0,{sensitivity:"base"})})}function Zu(t){const e=Ui(t);let n="";e==="Username"?n=(t==null?void 0:t.discord_username)||"":e==="Global Name"?n=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(n=(t==null?void 0:t.discord_server_nickname)||""),n||(n=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const r=e?` <span class="member-link-report-match-field">(${c(e)})</span>`:"";return`<span class="member-link-report-discord-name">${c(n)}</span>${r}`}function ef(){return z&&B.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(B)||B.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${Xu(B).map(e=>{var s;const n=String(e.link_status||"").trim().toLowerCase(),r=String(e.link_method||"").trim().toLowerCase(),i=Zu(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${h(Qu(e))}"
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
                    ${ht()&&n==="candidate"?`<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${h(e.eso_account_name||"")}" data-accept-member-candidate-discord-id="${h(e.discord_user_id||"")}" aria-label="Accept candidate link" title="Accept candidate link">\u2713</button>`:""}
                    ${ht()&&n==="linked"?`<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${h(e.eso_account_name||"")}" data-unlink-member-link-discord-id="${h(e.discord_user_id||"")}" aria-label="Unlink this ESO/Discord pair" title="Unlink this ESO/Discord pair">\u{1F5D1}</button>`:""}
                    ${ht()&&(Number(e.locked||0)===1||n==="blocked")?`<button class="member-link-report-action member-link-report-unblock" type="button" data-unblock-member-auto-link="${h(e.eso_account_name||"")}" data-unblock-member-auto-link-discord-id="${h(e.discord_user_id||"")}" aria-label="Remove auto-link block" title="Remove auto-link block">\u21BA</button>`:""}
                  </div>
                </td>
                <td class="member-links-confidence-col">${c(String((s=e.match_confidence)!=null?s:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function Ca(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function us(t){const e=Ca();if(e.forEach(r=>r.classList.remove("member-links-report-row-active")),e.length===0){Ge=-1;return}Ge=Math.max(0,Math.min(t,e.length-1));const n=e[Ge];n.classList.add("member-links-report-row-active"),n.scrollIntoView({block:"nearest"})}function tr(){const t=Ce(jr),e=String(wt||"").trim().toLowerCase(),n=String(Jn||"").trim().toLowerCase(),r=String(Qn||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let s=0;i.forEach(a=>{const l=Ce(a.dataset.memberLinksReportSearch||""),d=String(a.dataset.memberLinksReportAction||"").trim().toLowerCase(),y=String(a.dataset.memberLinksReportStatus||"").trim().toLowerCase(),g=String(a.dataset.memberLinksReportMethod||"").trim().toLowerCase(),T=(!t||l.includes(t))&&(!e||d===e)&&(!n||y===n)&&(!r||g===r);a.hidden=!T,a.classList.remove("member-links-report-row-active"),T&&(s+=1)});const o=document.querySelector("#memberLinksReportSearchEmpty");o&&(o.hidden=s!==0),Ge=-1}function tf(t){jr=t.target.value||"",tr()}function nf(t){wt=t.target.value||"",tr()}function rf(t){Jn=t.target.value||"",tr()}function of(t){Qn=t.target.value||"",tr()}function sf(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Ca();if(e.length===0)return;if(t.key==="ArrowDown"){const r=Ge<0?0:Ge+1;us(r>=e.length?e.length-1:r);return}const n=Ge<0?e.length-1:Ge-1;us(n<0?0:n)}function wr(){return I==="discord-members"||I==="eso-members"||Ke||Ye||bt}function af(t={}){if(!Array.isArray(t.links))return;const e=JSON.stringify(B)!==JSON.stringify(t.links);B=t.links,e&&wr()&&Ar()}function fs(){const t=document.querySelector("#runMemberLinksReportButton");t&&(t.disabled=z,t.textContent=z?"Loading...":"Run")}async function nr(t={}){if(!(u!=null&&u.connected)){Z="You must be connected to load member links.",wr()&&Ar();return}z=!0,Z="",fs(),!t.silent&&wr()&&Ar();try{const e=await R("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");B=Array.isArray(e.links)?e.links:[]}catch(e){Z=w(e)}finally{z=!1,fs(),wr()&&Ar()}}async function cf(){if(!(u!=null&&u.connected)||!k.logged_in){Z="You must be logged in and connected to run auto-linking.",f();return}z=!0,Z="",f();try{const t=await R("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");B=Array.isArray(t.links)?t.links:[],p("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:m})}catch(t){Z=w(t)}finally{z=!1,f()}}async function qa(t,e=""){try{const n=await R("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to accept candidate.");B=Array.isArray(n.links)?n.links:B,p("member-link-accepted",n.message||"Candidate accepted as a link.",{ttlMs:m})}catch(n){Z=w(n),p("member-link-accept-error",Z,{ttlMs:m})}}async function Ia(t,e=""){if(!await so({title:"Remove Auto-Link Block?",message:`Remove the blocked auto-match record between ${t} and this Discord account? Auto-linking will run immediately and this screen will refresh to show whether the pair linked again.`,confirmLabel:"Unblock",cancelLabel:"Cancel",confirmClass:"danger"}))return!1;z=!0,Z="",f();try{const r=await R("guildsync:unblock-member-auto-link",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to remove auto-link block.");B=Array.isArray(r.links)?r.links:B;const i=we(t),s=String(e||"").trim(),o=r.refreshedPair||B.find(d=>we(d.eso_account_name)===i&&String(d.discord_user_id||"").trim()===s),a=String((o==null?void 0:o.link_status)||"").trim().toLowerCase(),l=a==="linked"?" It linked again automatically.":a==="candidate"?" It is now showing as a candidate.":" No automatic link was recreated.";return p("member-link-unblocked",`${r.message||"Auto-link block removed."}${l}`,{ttlMs:m}),!0}catch(r){return Z=w(r),p("member-link-unblock-error",Z,{ttlMs:m}),!1}finally{z=!1,f()}}async function lf(t,e=""){if(!!await so({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const r=await R("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to unlink member.");B=Array.isArray(r.links)?r.links:B,p("member-link-unlinked",r.message||"Member link removed.",{ttlMs:m})}catch(r){Z=w(r)}f()}}function we(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function zr(t){const e=we(t);return e?B.filter(n=>we(n.eso_account_name)===e):[]}function Yr(t){const e=String(t||"").trim();return e?B.filter(n=>String(n.discord_user_id||"").trim()===e):[]}function xa(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const n=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(n.length>0){const i=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const s=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return s||n[0]}const r=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return r||e[0]}function df(t){return xa(Yr(t))}function uf(t){return`${we(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function ho(){return M?M.mode==="discord-to-eso"?Yr(M.discordUserId):zr(M.esoAccountName):[]}function ff(t){const e=String(t||"").trim(),n=re.find(r=>String(r.discord_id||"").trim()===e);return n&&(n.server_nickname||n.global_name||n.username||n.discord_id)||e}function Oa(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?Yr(t.discordUserId):zr(t.esoAccountName),r=xa(n),i=String((r==null?void 0:r.link_status)||"").trim().toLowerCase(),s=n.filter(a=>String(a.link_status||"").trim().toLowerCase()==="linked").length,o=n.filter(a=>String(a.link_status||"").trim().toLowerCase()==="candidate").length;return s>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?s===1?r.eso_account_name:`${s} ESO accounts`:s===1?r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member":`${s} Discord accounts`}`}:i==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?r.eso_account_name:r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member"}`}:i==="blocked"||Number((r==null?void 0:r.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function Pa(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,r=Oa(t);return`
    <button
      class="member-link-status-dot member-link-status-${h(r.className)}"
      type="button"
      title="${h(r.title)}"
      aria-label="${h(r.label)}"
      data-open-member-link-dialog="${h(e)}"
      data-member-link-value="${h(n||"")}"
    ></button>
  `}function hf(){return M?M.mode==="discord-to-eso"?ff(M.discordUserId):M.esoAccountName||"":""}function Fa(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function Ui(t){const e=Fa((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const n=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(n.includes("discord_username")||n.includes("username"))return"Username";if(n.includes("discord_display_name")||n.includes("global")||n.includes("display"))return"Global Name";if(n.includes("discord_server_nickname")||n.includes("server")||n.includes("nickname"))return"Server Nickname";const r=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(r==="exact"||r==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",s=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const a of s){const l=pf(i,a.value);(!o||l>o.score)&&(o={...a,score:l})}if(o&&o.score>0)return o.field}return""}function Ce(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function pf(t,e){const n=Ce(t),r=Ce(e);if(!n||!r)return 0;if(n===r)return 100;if((n.includes(r)||r.includes(n))&&Math.min(n.length,r.length)>=4)return 88;const i=Math.abs(n.length-r.length),s=[...n].findIndex((a,l)=>a!==r[l]),o=s===-1?Math.min(n.length,r.length):s;return Math.max(0,Math.min(75,Math.round(o*10-i*3)))}function mf(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function gf(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function bf(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),n=mf(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${c(n)}</span>`}function yf(t){var a;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",n=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",r=String(t.link_status||"").trim().toLowerCase(),o=r==="linked"?`<button
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
        <div><span>Status:</span> ${bf(t)} \xB7 ${c(gf(t.link_method))} \xB7 ${c(String((a=t.match_confidence)!=null?a:""))}% \xB7 ${c(n)}</div>
        ${Ui(t)?`<div><span>Matched:</span> Matched on ${c(Ui(t))}</div>`:""}
      </div>
      ${ht()?o:""}
    </div>
  `}function kf(){const t=ho();return t.length?[...t].sort((n,r)=>{var l,d;const i=String(n.link_status||"").trim().toLowerCase(),s=String(r.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},a=((l=o[i])!=null?l:9)-((d=o[s])!=null?d:9);return a!==0?a:Number(r.match_confidence||0)-Number(n.match_confidence||0)}).map(n=>yf(n)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function vf(){if(!ht())return"";if(nn)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(je)return`<div class="discord-data-error">${c(je)}</div>`;if(!Array.isArray(Dt)||Dt.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(ho().map(n=>uf(n))),e=[...Dt].filter(n=>{const r=(M==null?void 0:M.mode)==="discord-to-eso"?`${we(n.account_name)}::${String(M.discordUserId||"").trim()}`:`${we(M==null?void 0:M.esoAccountName)}::${String(n.discord_id||"").trim()}`;return!t.has(r)}).sort((n,r)=>{const i=Number(r.confidence||0)-Number(n.confidence||0);return i!==0?i:hs(n).localeCompare(hs(r),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(n=>Sf(n)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function hs(t){return((M==null?void 0:M.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function Sf(t,e={}){var g,b,_;const n=(M==null?void 0:M.mode)||"",r=n==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=Fa(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),s=n==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[s,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),a=n==="discord-to-eso"?t.account_name:t.discord_id,l=e.disabled===!0,d=[r,s,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),y=[r,o,`${(g=t.confidence)!=null?g:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${h(a||"")}" data-member-link-option-search="${h(d)}" title="${h(y)}" ${l?"disabled":""}>
      <span class="member-link-option-name" title="${h(r||"")}">${c(r||"")}</span>
      <span class="member-link-option-subtitle" title="${h(o||"")}">${c(o||"")}</span>
      <span class="member-link-option-confidence" title="${h(String((b=t.confidence)!=null?b:0))}%">${c(String((_=t.confidence)!=null?_:0))}%</span>
    </button>
  `}function wf(){const t=(M==null?void 0:M.mode)||"",e=hf(),n=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
    <div class="roster-history-overlay member-link-dialog-overlay" role="dialog" aria-modal="true" aria-labelledby="memberLinkDialogTitle">
      <div class="roster-history-dialog member-link-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="memberLinkDialogTitle">Member Link</h3>
            <p>${c(e)}${ht()?` \u2192 choose ${c(n)}.`:" \xB7 View current account links."}</p>
          </div>
          <button id="closeMemberLinkDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close member link window" title="Close">\xD7</button>
        </div>

        <div class="member-link-dialog-body">
          <section class="member-link-dialog-section member-link-current-section">
            ${kf()}
          </section>

          <section class="member-link-dialog-section" ${ht()?"":"hidden inert"}>
            <h4>Suggested Matches</h4>
            <input
              id="memberLinkSuggestionSearchInput"
              class="member-link-suggestion-search-input"
              type="search"
              autocomplete="off"
              spellcheck="false"
              placeholder="Search suggested matches..."
              value="${h(Xn)}"
            />
            ${vf()}
          </section>
        </div>

      </div>
    </div>
  `}async function po(t,e){if(!(u!=null&&u.connected)||!U()){p("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:m});return}Ke=!0,M=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},Dt=[],nn=!0,je="",Xn="",Le=-1,f();try{if(!Array.isArray(B)||B.length===0){const i=await R("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(B=Array.isArray(i.links)?i.links:[])}const r=await R("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load link suggestions.");Dt=Array.isArray(r.options)?r.options:[]}catch(n){je=w(n)}finally{nn=!1,f()}}function an(){document.removeEventListener("keydown",Vi),Ke=!1,M=null,Dt=[],nn=!1,je="",Xn="",Le=-1,f()}function Ga(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function ps(t){const e=Ga();if(e.forEach(r=>r.classList.remove("member-link-option-row-active")),e.length===0){Le=-1;return}Le=Math.max(0,Math.min(t,e.length-1));const n=e[Le];n.classList.add("member-link-option-row-active"),n.scrollIntoView({block:"nearest"})}function Ua(){const t=Ce(Xn),e=[...document.querySelectorAll(".member-link-option-row")];let n=0;e.forEach(i=>{const s=Ce(i.dataset.memberLinkOptionSearch||i.textContent||""),o=!t||s.includes(t);i.hidden=!o,i.classList.remove("member-link-option-row-active"),o&&(n+=1)});const r=document.querySelector("#memberLinkSuggestionSearchEmpty");r&&(r.hidden=n!==0),Le=-1}function _f(t){Xn=t.target.value||"",Ua()}function Af(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Ga();if(e.length===0)return;if(t.key==="ArrowDown"){const r=Le<0?0:Le+1;ps(r>=e.length?e.length-1:r);return}const n=Le<0?e.length-1:Le-1;ps(n<0?0:n)}function Vi(t){!Ke||t.key==="Escape"&&(t.preventDefault(),an())}async function Lf(t){if(!(!M||!t))try{const e=M.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:M.discordUserId}:{esoAccountName:M.esoAccountName,discordUserId:t},n=await R("guildsync:manual-link-member",e,3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to link members.");B=Array.isArray(n.links)?n.links:B,p("member-link-saved",n.message||"Member link saved.",{ttlMs:m}),an()}catch(e){je=w(e),f()}}async function Ef(t,e=""){await qa(t,e),an()}async function Va(){if(!!M){nn=!0,je="",f();try{const t=M.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:M.discordUserId}:{mode:"eso-to-discord",accountName:M.esoAccountName},e=await R("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");Dt=Array.isArray(e.options)?e.options:[]}catch(t){je=w(t)}finally{nn=!1,f()}}}async function $f(t="",e=""){const n=ho().find(i=>we(i.eso_account_name)===we(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!n||!await so({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await R("guildsync:manual-unlink-member",{esoAccountName:n.eso_account_name,discordUserId:n.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");B=Array.isArray(i.links)?i.links:B,p("member-link-unlinked",i.message||"Member link removed.",{ttlMs:m}),await Va()}catch(i){je=w(i),f()}}async function Rf(t="",e=""){await Ia(t,e)&&await Va()}function Ha(){var n;if(!Ke)return;document.removeEventListener("keydown",Vi),document.addEventListener("keydown",Vi),(n=document.querySelector("#closeMemberLinkDialogButton"))==null||n.addEventListener("click",an);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",_f),t.addEventListener("keydown",Af),Ua()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(r=>{r.addEventListener("click",()=>$f(r.dataset.unlinkEsoAccount||"",r.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-unblock-dialog-member-auto-link]").forEach(r=>{r.addEventListener("click",()=>Rf(r.dataset.unblockEsoAccount||"",r.dataset.unblockDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(r=>{r.addEventListener("click",()=>Lf(r.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(r=>{r.addEventListener("click",()=>Ef(r.dataset.acceptDialogMemberCandidate||"",r.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",r=>{r.target===e&&an()})}function Wa(){var e,n,r;if(!pn)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",Oi),(n=document.querySelector("#rerunAssociateTicketReportButton"))==null||n.addEventListener("click",()=>Ja()),(r=document.querySelector("#copyAssociateTicketReportGridButton"))==null||r.addEventListener("click",()=>Bu());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Oi()})}function ja(){var e,n,r;if(!gn)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",Pi),(n=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||n.addEventListener("click",()=>Ka()),(r=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||r.addEventListener("click",()=>Iu());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Pi()})}function za(){var r,i,s;if(!bt)return;(r=document.querySelector("#closeDiscordLastSeenReportButton"))==null||r.addEventListener("click",Fi),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>Ya()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>ju()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(o=>{o.addEventListener("click",()=>Fu(o.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",Df);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",Mf),mo();const n=document.querySelector(".discord-last-seen-report-overlay");n&&n.addEventListener("click",o=>{o.target===n&&Fi()})}function Df(t){bn=t.target.value||"",mo()}function Mf(t){nt=t.target.value||"",mo()}function mo(){const t=Ce(bn),e=String(nt||"").trim().toLowerCase(),n=[...document.querySelectorAll("[data-discord-last-seen-row]")];let r=0;n.forEach(s=>{const o=Ce(s.dataset.discordLastSeenSearch||s.textContent||""),a=String(s.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),y=(!t||o.includes(t))&&(!e||a===e);s.hidden=!y,y&&(r+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=r!==0)}async function Ya(){if(!(u!=null&&u.connected)||!U()){Rt="You must be logged in and connected to run this report.",f();return}tt=!0,Rt="",f();try{const t=await R("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");re=Eo(t.members),Hr=$o(t.roles),no=[...re]}catch(t){Rt=w(t)}finally{tt=!1,f(),P("discordLastSeenReportSearchInput")}}async function Ka(){if(!(u!=null&&u.connected)||!U()){$t="You must be logged in and connected to run this report.",f();return}et=!0,$t="",f();try{const t=await R("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Hn=Array.isArray(t.rows)?t.rows:[]}catch(t){$t=w(t)}finally{et=!1,f()}}async function Ja(){if(!(u!=null&&u.connected)||!U()){Et="You must be logged in and connected to run this report.",f();return}Ze=!0,Et="",f();try{const t=await R("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");mn=Array.isArray(t.rows)?t.rows:[]}catch(t){Et=w(t)}finally{Ze=!1,f()}}function Kt(){const t=String(vn||"").trim().toLowerCase(),e={account_name:"Anonymous",rank:"Manual Entry"},n=new Set(["anonymous"]),r=de.filter(i=>String(i.account_name||"").trim()).filter(i=>{const o=String(i.account_name||"").trim().toLowerCase();return!o||n.has(o)||t&&!o.includes(t)?!1:(n.add(o),!0)}).slice().sort((i,s)=>{const o=String(i.account_name||"").toLowerCase(),a=String(s.account_name||"").toLowerCase(),l=t&&o.startsWith(t)?0:1,d=t&&a.startsWith(t)?0:1;return l!==d?l-d:o.localeCompare(a)}).slice(0,19);return[e,...r]}function Qa(t=Kt()){const e=String(q.accountName||"").trim();return t.length===0?'<div class="roster-history-muted manual-ticket-no-matches">No matching guild members found.</div>':t.map((n,r)=>`
        <button class="roster-history-match${r===Q||n.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${h(n.account_name)}" role="option" aria-selected="${r===Q||n.account_name===e?"true":"false"}">
          <span>${c(n.account_name)}</span>
          <strong>${c(n.rank||"")}</strong>
          ${r===Q?"<small>Enter</small>":""}
        </button>
      `).join("")}function Xa(){document.querySelectorAll("[data-manual-ticket-account]").forEach(t=>{t.addEventListener("mousedown",e=>{e.preventDefault()}),t.addEventListener("click",()=>{Za(t.dataset.manualTicketAccount||"")})})}function bi(){const t=document.querySelector("#manualTicketMatchList");if(!t)return;const e=Kt();Q>=e.length&&(Q=e.length>0?e.length-1:-1),t.innerHTML=Qa(e),Xa()}function Za(t){const e=String(t||"").trim();q.accountName=e,vn=e,be=!1,Q=-1,se="",f()}function P(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const n=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(n,n)},0)}function Tf(){const t=be?Kt():[],e=String(q.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Entry</h3>
            <p>Add a manual banking or raffle entry such as FFTG, officer corrections, or anonymous gold.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${se?`<div class="discord-data-error">${c(se)}</div>`:""}

        <div class="manual-ticket-form">
          <div class="manual-ticket-member-picker">
            <label class="manual-ticket-member-field" for="manualTicketAccountSearchInput">
              <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${h(vn)}" autocomplete="off" />
            </label>

            ${be?`
              <div id="manualTicketMatchList" class="roster-history-match-list manual-ticket-match-list" role="listbox" aria-label="Matching guild members">
                ${Qa(t)}
              </div>
            `:""}
          </div>

          ${e?`<div class="roster-history-muted manual-ticket-selected-member">Selected: ${c(e)}</div>`:""}

          <div class="manual-ticket-entry-row">
            <div class="manual-ticket-type-field" role="group" aria-label="Ticket type">
              <button class="manual-ticket-type-label${q.ticketType!=="monthly"?" is-selected":""}" type="button" data-manual-ticket-type="biweekly" aria-pressed="${q.ticketType!=="monthly"?"true":"false"}">Bi-Weekly</button>
              <button class="manual-ticket-type-switch" type="button" data-manual-ticket-toggle="true" data-selected-type="${q.ticketType==="monthly"?"monthly":"biweekly"}" aria-label="Toggle ticket type. Current selection is ${q.ticketType==="monthly"?"50/50":"Bi-Weekly"}">
                <span class="manual-ticket-type-track" aria-hidden="true"></span>
                <span class="manual-ticket-type-thumb" aria-hidden="true"></span>
              </button>
              <button class="manual-ticket-type-label${q.ticketType==="monthly"?" is-selected":""}" type="button" data-manual-ticket-type="monthly" aria-pressed="${q.ticketType==="monthly"?"true":"false"}">50/50</button>
            </div>
            <label class="manual-ticket-note-field">
              <textarea id="manualTicketNoteInput" class="discord-search-input manual-ticket-note-input" rows="4" placeholder="Enter a reason such as FFTG">${c(q.note)}</textarea>
            </label>
            <div class="manual-ticket-side-fields">
              <label class="manual-ticket-gold-field">
                <input id="manualTicketGoldInput" class="discord-search-input manual-ticket-gold-input" type="number" min="0" step="1" inputmode="numeric" placeholder="Gold Value" value="${h(q.goldValue)}" />
                <span class="manual-ticket-gold-coin" aria-hidden="true"></span>
              </label>
              <label class="manual-ticket-count-field">
                <div class="manual-ticket-number-wrap">
                  <input id="manualTicketCountInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${h(q.tickets)}" />
                  <div class="manual-ticket-number-buttons" aria-hidden="true">
                    <button id="manualTicketCountUpButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2303</button>
                    <button id="manualTicketCountDownButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2304</button>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div class="manual-ticket-actions">
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${Br?"disabled":""}>${Br?"Saving...":"Add Manual Entry"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function ec(){var s,o,a,l,d,y;if(!Te)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{Te=!1,f()});const t=document.querySelector("#manualTicketAccountSearchInput");if(t){const g=({rerender:b=!1}={})=>{if(be=!0,Q=Kt().length>0?0:-1,b){f(),P("manualTicketAccountSearchInput");return}bi()};t.addEventListener("focus",()=>{be||g({rerender:!0})}),t.addEventListener("click",()=>{be||g({rerender:!0})}),t.addEventListener("input",b=>{vn=b.target.value||"",q.accountName="",be=!0,Q=Kt().length>0?0:-1,bi()}),t.addEventListener("keydown",b=>{if(b.key==="Escape")return;if(!be){(b.key==="ArrowDown"||b.key==="ArrowUp")&&(b.preventDefault(),g({rerender:!0}));return}const _=Kt();if(b.key==="ArrowDown"||b.key==="ArrowUp"){if(_.length===0)return;b.preventDefault();const A=b.key==="ArrowDown"?1:-1;Q=((Q<0?0:Q)+A+_.length)%_.length,bi();return}if(b.key!=="Enter")return;b.preventDefault();const S=_[Q>=0?Q:0];S!=null&&S.account_name&&Za(S.account_name)})}Xa(),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",g=>{q.note=g.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(g=>{g.addEventListener("click",()=>{const b=String(g.dataset.manualTicketType||"").trim().toLowerCase();q.ticketType=b==="monthly"?"monthly":"biweekly",f()})}),(a=document.querySelector("[data-manual-ticket-toggle]"))==null||a.addEventListener("click",()=>{q.ticketType=q.ticketType==="monthly"?"biweekly":"monthly",f()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",g=>{const b=String(g.target.value||"").replace(/\D/g,"");g.target.value!==b&&(g.target.value=b),q.goldValue=b});const n=document.querySelector("#manualTicketCountInput");n==null||n.addEventListener("input",g=>{const b=String(g.target.value||"").replace(/\D/g,"");g.target.value!==b&&(g.target.value=b),q.tickets=b});const r=g=>{const b=Number(q.tickets)||0,_=Math.max(0,b+g);q.tickets=String(_),n&&(n.value=q.tickets,n.focus())};(l=document.querySelector("#manualTicketCountUpButton"))==null||l.addEventListener("click",()=>r(1)),(d=document.querySelector("#manualTicketCountDownButton"))==null||d.addEventListener("click",()=>r(-1)),(y=document.querySelector("#saveManualBiweeklyTicketButton"))==null||y.addEventListener("click",()=>Bf());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",g=>{g.target===i&&(Te=!1,f())})}async function Bf(){if(!Y())return;const t=String(q.accountName||"").trim(),e=String(q.note||"").trim(),n=String(q.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",r=Number(String(q.goldValue||"").trim()||0),i=Number(String(q.tickets||"").trim()||0);if(be){se="Select a matching guild member or Anonymous from the list before saving.",f(),P("manualTicketAccountSearchInput");return}if(!t){se="Select a matching guild member or Anonymous from the list before saving.",f(),P("manualTicketAccountSearchInput");return}if(!Number.isFinite(r)||r<0){se="Gold value must be zero or greater.",f();return}if(!Number.isFinite(i)||i<0){se="Tickets must be zero or greater.",f();return}const s=t.toLowerCase()==="anonymous";if(s&&Math.floor(i)>0){se="Anonymous cannot be awarded tickets. Use 0 tickets and enter a gold value.",f();return}if(Math.floor(r)===0&&Math.floor(i)===0){se=s?"Enter a gold value for Anonymous when tickets are 0.":"Enter gold or tickets. Both cannot be zero.",f();return}Br=!0,se="",f();try{const o=await R("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:n,gold_value:Math.floor(r),tickets:Math.floor(i)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Failed to add manual entry.");Te=!1,q={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},vn="",Q=-1,be=!1,await oe({silent:!0}),p("manual-ticket-added",o.message||"Manual entry added.",{ttlMs:m})}catch(o){se=w(o)}finally{Br=!1,f()}}async function tc(t=""){const e=String(t||"").trim();if(!!e){hn=!0,Vn=e,ct=[],Tr=!0,Lt=!1,lt="",Zt="",f();try{const n=await R("guildsync:request-roster-member-notes",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster notes.");ct=Array.isArray(n.notes)?n.notes:[]}catch(n){lt=w(n)}finally{Tr=!1,f()}}}function Hi(){hn=!1,Vn="",ct=[],Tr=!1,Lt=!1,lt="",Zt="",f()}function Nf(){var n,r;if(!hn)return;(n=document.querySelector("#closeRosterNotesButton"))==null||n.addEventListener("click",Hi);const t=document.querySelector("#rosterNotesNewNote");t&&t.addEventListener("input",i=>{Zt=i.target.value||""}),(r=document.querySelector("#saveRosterNoteButton"))==null||r.addEventListener("click",()=>Cf());const e=document.querySelector(".roster-notes-overlay");e&&e.addEventListener("click",i=>{i.target===e&&Hi()})}async function Cf(){if(!Y())return;const t=String(Zt||"").trim();if(!t){lt="Enter a note before saving.",f();return}Lt=!0,lt="",f();try{const e=await R("guildsync:add-roster-member-note",{account_name:Vn,note:t},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to save roster note.");e.note&&(ct=[...ct,e.note]),Zt="";const n=de.find(r=>we(r.account_name)===we(Vn));n&&(n.note_count=Number(n.note_count||0)+1)}catch(e){lt=w(e)}finally{Lt=!1,f()}}function nc(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>Pt());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{Xt=!0,Ue="",f()});const n=document.querySelector("#rosterMemberSearch");n&&(n.addEventListener("input",o=>{Mr=o.target.value||"",Bi=o.target.selectionStart,Ni=o.target.selectionEnd,W=-1,f({restoreRosterSearchFocus:!0})}),n.addEventListener("keydown",qf)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{cu(o.dataset.rosterSortColumn||"account_name")})});const r=document.querySelector("#rosterRankFilter");r&&r.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(At.add(a),W=-1,f())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRosterRankFilter||"";At.delete(a),W=-1,f()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(jt.add(a),W=-1,f())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRosterLinkStatusFilter||"";jt.delete(a),W=-1,f()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>po(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))}),document.querySelectorAll("[data-open-roster-notes]").forEach(o=>{o.addEventListener("click",()=>tc(o.dataset.openRosterNotes||""))}),Nf();const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{Mr="",At.clear(),jt.clear(),Fe="",te="",W=-1,f()}),If()}function qf(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){W=-1;return}t.preventDefault(),t.key==="ArrowDown"?W=W<0?0:Math.min(W+1,e.length-1):t.key==="ArrowUp"&&(W=W<0?e.length-1:Math.max(W-1,0)),e.forEach((r,i)=>{r.classList.toggle("roster-search-active-row",i===W)});const n=e[W];n&&typeof n.scrollIntoView=="function"&&n.scrollIntoView({block:"nearest",inline:"nearest"})}function If(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{Xt=!1,f()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",n=>{if(Un=n.target.value||"",he=-1,!Un.trim()){clearTimeout(mi),Ue="",ce=[],mt="",st=[],at=!1,f(),P("rosterHistorySearchInput");return}clearTimeout(mi),mi=setTimeout(()=>{Ff({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(ce.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;he=((he<0?0:he)+i+ce.length)%ce.length,f(),P("rosterHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=ce[he>=0?he:0];r!=null&&r.account_name&&gs(r.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(n=>{n.addEventListener("click",()=>{gs(n.dataset.rosterHistoryAccount||"")})})}function rc(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{en=!1,f()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",n=>{Xe=n.target.value||"",pe=-1,vt+=1;const r=vt;if(clearTimeout(ns),!Xe.trim()){Ve="",le=[],tn="",Ct="",dt=[],ut=!1,f(),P("discordHistorySearchInput");return}ns=setTimeout(()=>{xf({auto:!0,keepFocus:!0,generation:r})},Id)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(le.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;pe=((pe<0?0:pe)+i+le.length)%le.length,f(),P("discordHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=le[pe>=0?pe:0];r!=null&&r.discord_id&&ms(r.discord_id,xi(r))})),document.querySelectorAll("[data-discord-history-id]").forEach(n=>{n.addEventListener("click",()=>{ms(n.dataset.discordHistoryId||"",n.dataset.discordHistoryName||"")})})}async function xf(t={}){const e=Number.isInteger(t.generation)?t.generation:++vt,n=Xe.trim();if(e===vt){if(!n){Ve="",le=[],pe=-1,tn="",Ct="",dt=[],ut=!1,f(),t.keepFocus&&P("discordHistorySearchInput");return}ut=!0,Ve="",le=[],pe=-1,tn="",Ct="",dt=[],f(),t.keepFocus&&P("discordHistorySearchInput");try{const r=await R("guildsync:request-discord-member-history",{query:n},3e4);if(e!==vt||n!==Xe.trim())return;if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search Discord member history.");le=Of(r.matches),pe=le.length>0?0:-1}catch(r){if(e!==vt||n!==Xe.trim())return;Ve=w(r)}finally{if(e!==vt||n!==Xe.trim())return;ut=!1,f(),t.keepFocus&&P("discordHistorySearchInput")}}}async function ms(t,e="",n={}){const r=String(t||"").trim();if(!!r){tn=r,Ct=String(e||r).trim(),Xe=Ct,dt=[],ut=!0,Ve="",f();try{const i=await R("guildsync:request-discord-member-history-events",{discord_id:r},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");dt=Pf(i.events)}catch(i){Ve=w(i)}finally{ut=!1,n.keepLoading||f()}}}function Of(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function Pf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s,o,a,l,d,y,g,b;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((r=(n=e.old_value)!=null?n:e.oldValue)!=null?r:"").trim(),new_value:String((s=(i=e.new_value)!=null?i:e.newValue)!=null?s:"").trim(),event_timestamp:(l=(a=(o=e.event_timestamp)!=null?o:e.eventTimestamp)!=null?a:e.timestamp)!=null?l:"",event_datetime:(y=(d=e.event_datetime)!=null?d:e.eventDatetime)!=null?y:"",initiator:String((b=(g=e.initiator)!=null?g:e.initiatorName)!=null?b:"").trim(),source:String(e.source||"").trim()}}):[]}async function Ff(t={}){const e=Un.trim();if(!e){Ue="",ce=[],he=-1,mt="",st=[],at=!1,f(),t.keepFocus&&P("rosterHistorySearchInput");return}at=!0,Ue="",ce=[],he=-1,mt="",st=[],f(),t.keepFocus&&P("rosterHistorySearchInput");try{const n=await R("guildsync:request-roster-rank-history",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search roster rank history.");ce=Gf(n.matches),he=ce.length>0?0:-1}catch(n){Ue=w(n)}finally{at=!1,f(),t.keepFocus&&P("rosterHistorySearchInput")}}async function gs(t,e={}){const n=String(t||"").trim();if(!!n){mt=n,Un=n,st=[],at=!0,Ue="",f();try{const r=await R("guildsync:request-roster-stream-history",{account_name:n},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load roster stream history.");st=Uf(r.events)}catch(r){Ue=w(r)}finally{at=!1,e.keepLoading||f()}}}function Gf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function Uf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(r=(n=e.timestamp)!=null?n:e.timestampS)!=null?r:"",officer:String(e.officer||"").trim()}}):[]}function ic(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(n=e.joined)!=null?n:"",note_count:Number((i=(r=e.note_count)!=null?r:e.noteCount)!=null?i:0)||0}}).sort((e,n)=>e.account_name.localeCompare(n.account_name)):[]}function Vf(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function Kr(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function go(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function Hf(t={}){de=ic(t.members),Dr=t.last_refresh||new Date().toISOString(),cn(),p("roster-data-updated",`Roster data updated. Loaded ${de.length} member record${de.length===1?"":"s"}.`,{ttlMs:m})}async function Pt(t={}){if(!!(u!=null&&u.connected)){We=!0,cn();try{const e=await R("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");de=ic(e.members),Dr=e.last_refresh||Dr,t.silent||p("roster-data-loaded",`Loaded ${de.length} roster member${de.length===1?"":"s"}.`,{ttlMs:m})}catch(e){p("roster-data-error",w(e),{ttlMs:m})}finally{We=Boolean(t.deferPendingRefresh),cn(),t.deferPendingRefresh||Zn("eso-members")}}}async function Wf(t={}){var e;if(!!H()){if(!(u!=null&&u.connected)){p("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}We=!0,cn();try{const n=await vd(t);if(!(n!=null&&n.ok)){p("roster-data-pending",(n==null?void 0:n.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:m});return}const r={local_upload_id:oc(),authenticated_username:_e(),authenticated_discord_user_id:((e=k==null?void 0:k.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await cc(r)}catch(i){throw jf(r),i}await Pt({silent:!0,deferPendingRefresh:!0})}catch(n){p("roster-data-error",w(n),{ttlMs:m})}finally{We=!1,cn(),Zn("eso-members")}}}function oc(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function bo(){try{const t=window.localStorage.getItem(Js),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function sc(t){window.localStorage.setItem(Js,JSON.stringify(Array.isArray(t)?t:[]))}function jf(t){const e=String((t==null?void 0:t.local_upload_id)||oc()),n=bo().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),sc(n),p("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function zf(t){const e=bo().filter(n=>(n==null?void 0:n.local_upload_id)!==t);sc(e)}async function ac(){if(ui||!(u!=null&&u.connected)||!H())return;const t=bo();if(t.length!==0){ui=!0;try{for(const e of t){if(!(u!=null&&u.connected)||!H())return;await cc(e),zf(e.local_upload_id)}}catch(e){p("roster-data-pending-error",`Pending roster upload retry failed: ${w(e)}`,{ttlMs:m})}finally{ui=!1}}}async function cc(t){if(!(u!=null&&u.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await R("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const n=await Sd(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return p("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:m}),e}async function Yf(t={}){var e,n;if(!!H()){if(!(u!=null&&u.connected)){p("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}try{const r=await Rd(t);if(!(r!=null&&r.ok)){p("applications-data-info",(r==null?void 0:r.message)||"No application records were found to process.",{ttlMs:m});return}if((Array.isArray((e=r==null?void 0:r.data)==null?void 0:e.records)?r.data.records:[]).length===0){p("applications-data-info",`No application records were found in ${r.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:m});return}const s={local_upload_id:lc(),authenticated_username:_e(),authenticated_discord_user_id:((n=k==null?void 0:k.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await fc(s)}catch(o){throw Kf(s),o}}catch(r){p("applications-data-error",w(r),{ttlMs:m})}}}function lc(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function yo(){try{const t=window.localStorage.getItem(Qs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function dc(t){window.localStorage.setItem(Qs,JSON.stringify(Array.isArray(t)?t:[]))}function Kf(t){const e=String((t==null?void 0:t.local_upload_id)||lc()),n=yo().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),dc(n),p("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function Jf(t){const e=yo().filter(n=>(n==null?void 0:n.local_upload_id)!==t);dc(e)}async function uc(){if(fi||!(u!=null&&u.connected)||!H())return;const t=yo();if(t.length!==0){fi=!0;try{for(const e of t){if(!(u!=null&&u.connected)||!H())return;await fc(e),Jf(e.local_upload_id)}}catch(e){p("applications-data-pending-error",`Pending application upload retry failed: ${w(e)}`,{ttlMs:m})}finally{fi=!1}}}async function fc(t){var i;if(!(u!=null&&u.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return p("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:m}),{ok:!0,sent_count:0,skipped_empty:!0};let n=0;for(const s of e){const o=await R("guildsync:eso-guild-application-message",{...t,record:s,recordKey:(s==null?void 0:s.recordKey)||"",message:Qf(s)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Backend rejected the application data payload. Application data was not cleared.");n+=1}const r=await Dd(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return p("applications-data-sent",`Sent ${n} application record${n===1?"":"s"} to GuildSync backend.`,{ttlMs:m}),{ok:!0,sent_count:n}}function Qf(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),n=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",r=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",s=String(t.applicationText||"_No application text captured._"),o=Object.entries(t).filter(([a])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(a)).map(([a,l])=>`**${a}:** ${Xf(l)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${n}** ${r} an application from **${i}**.`,"","**Application text:**","```",s.slice(0,1500),"```",o.length>0?"":null,o.length>0?"**Full captured record fields:**":null,...o].filter(a=>a!==null).join(`
`)}function Xf(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function Zf(t={}){await Yf(t)}function hc(){const t=Wi(O),e=Mh(t,O),n=O!=="other",r=n&&Sn(O);return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <button id="openBankingHistoryButton" class="refresh-discord-button banking-history-button" type="button" ${U()?"":'disabled title="Login required to lookup banking history."'}>
            <span aria-hidden="true">\u2315</span>
            <span>Lookup Banking History</span>
          </button>
          <button ${Y()?"":"hidden disabled"} id="openManualBiweeklyTicketButton" class="bank-export-button" type="button" ${U()?"":'disabled title="Login required to add manual entries."'}>
            <span aria-hidden="true">\uFF0B</span>
            <span>Add Manual Entry</span>
          </button>
          ${ah()}
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${c(Ic(na))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${ze||!U()?"disabled":""} ${U()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${ze?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${yi("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${yi("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${yi("other","?","Other","All other deposits")}
        </div>

        ${sh(O)}

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
              ${t.length>0?t.map(i=>Bh(i,n,r)).join(""):Nh(n,r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${c(Jt(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${O==="monthly"?`<div>Raffle Pot: <strong>${c(Jt(Math.floor(e.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${O==="biweekly"?`<div>Raffle Pot: <strong>${c(Jt(Sc(e.amount)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${O==="biweekly"?`<div>Draws: <strong>${c(String(Th(e.amount)))}</strong></div>`:""}
          ${n?`<div>Purchased: <strong>${c(ve(e.purchased))}</strong></div>${r?`<div>Bonus: <strong>${c(ve(e.bonus))}</strong></div>`:""}<div>Total Tickets: <strong>${c(ve(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${Mt?rh(Wi(Se)):""}
    </div>
  `}function eh(){return`
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
            <input id="bankingHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" autocomplete="off" placeholder="Start typing part of an account name..." value="${h(qt)}" />
          </label>
          ${th()}
        </div>

        ${Me?`<div class="discord-data-error">${c(Me)}</div>`:""}

        <div class="banking-history-results">
          <div class="roster-history-section-title">Banking History${Re?`: ${c(Re)}`:""}${Re?`<span class="banking-history-count">${c(String(ke.length))} record${ke.length===1?"":"s"} found</span>`:""}</div>
          ${nh()}
        </div>
      </div>
    </div>
  `}function th(){return qt.trim()?De&&X.length===0&&!Re?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">Searching...</div></div>':X.length===0&&!Re?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">No matching banking names found.</div></div>':X.length===0?"":`
    <div class="banking-history-autocomplete" role="listbox" aria-label="Banking history matches">
      ${X.map((t,e)=>`
        <button class="banking-history-autocomplete-option${e===me?" is-selected":""}" type="button" data-banking-history-account="${h(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <small>${c(String(Number(t.record_count||t.recordCount||0)||0))} record${Number(t.record_count||t.recordCount||0)===1?"":"s"}</small>
        </button>
      `).join("")}
    </div>
  `:""}function nh(){const t=ke.some(e=>e.bonus_enabled);return Re?De&&ke.length===0?'<div class="roster-history-muted">Loading banking history...</div>':ke.length===0?'<div class="roster-history-muted">No banking history found for this account.</div>':`
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
          ${ke.map(e=>{var n,r,i,s,o;return`
            <tr>
              <td>${c(vh((i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:""))}</td>
              <td>${c(Sh(e.transaction_type||e.type||""))}</td>
              <td style="text-align:right;">${c(wh((o=(s=e.deposit_amount)!=null?s:e.depositAmount)!=null?o:e.amount))} \u{1FA99}</td>
              <td style="text-align:right;">${c(ki(e.purchased_tickets))}</td>
              ${t?`<td style="text-align:right;">${e.bonus_enabled?`${c(ve(e.bonus_percent))}%`:""}</td><td style="text-align:right;">${e.bonus_enabled?c(ki(e.bonus_tickets)):""}</td>`:""}
              <td style="text-align:right;">${c(ki(e.total_tickets))}</td>
              <td class="banking-history-note-cell">${c(e.note||"")}</td>
            </tr>
          `}).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see banking history.</div>'}function rh(t){const e=Sn(Se);return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${c(Be(Se))} Deposits</h3>
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
              ${t.length>0?t.map(n=>ih(n)).join(""):oh()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${c(yc(t))}</textarea>
      </div>
    </div>
  `}function ih(t){const e=Sn(Se);return`
    <tr data-bank-event-id="${h(t.eventId||"")}">
      <td>${c(t.displayName||"")}</td>
      <td>${c(String(_o(t,Se)))}</td>
      <td>${c(String(t.purchasedTickets))}</td>
      ${e?`<td>${c(String(t.bonusPercent))}%</td><td>${c(String(t.bonusTickets))}</td>`:""}
      <td>${c(String(t.totalTickets))}</td>
      <td>${c(t.note||"")}</td>
    </tr>
  `}function oh(){return`
    <tr>
      <td class="bank-empty-row" colspan="${Sn(Se)?7:5}">No deposits to export for ${c(Be(Se))}.</td>
    </tr>
  `}function sh(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=So(t),n=Or(t),r=n<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${h(Be(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${c(Be(t))} Raffle Period ${n===0?"(Current)":`(${Math.abs(n)} period${Math.abs(n)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${c(_r(e.salesStart))} through ${c(_r(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${c(_r(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${r?"":"disabled"} aria-label="Next ${h(Be(t))} raffle period">\u203A</button>
    </div>
  `}function yi(t,e,n,r){const i=O===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${h(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${c(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${c(n)}</span>
        <span class="bank-section-subtitle">${c(r)}</span>
      </span>
    </button>
  `}function ah(){if(!Y())return"";const t=Jr(),e=rr(),n=pc(),r=t+e+n;if(r<=0)return"";const i=`Desktop Client Required${r>0?` (${r})`:""}`,s="Deposit mail checkout and ESO SavedVariables writing are disabled in the web client. Use the GuildSync desktop client for this mail workflow.";return`
    <button id="checkoutDepositMailButton" class="bank-export-button deposit-mail-button deposit-mail-status-only" type="button" data-deposit-mail-action="disabled" aria-disabled="true" title="${h(s)}" aria-label="${h(`${i}. ${s}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${c(i)}</span>
      <span class="deposit-mail-web-disabled" aria-hidden="true">Web Disabled</span>
    </button>
  `}function rr(){return ir().reduce((t,e)=>t+wn(e.records).length,0)}function ch(){const t=(k==null?void 0:k.user)||{};return new Set([_e(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function lh(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?ch().has(e):!1}function pc(){return U()?ie.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="written_to_eso"&&lh(t)}).length:0}function Jr(){return ie.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="unsent"}).length}function dh(t){const e=String(t||"").trim();return ie.find(n=>String(n.eventId||"").trim()===e)||null}function ko(t){const e=String(t||"other").toLowerCase(),n=["biweekly","monthly","other"],r=n.includes(e)?e:"other",i=n.filter(s=>s!==r);return[i[0]||"biweekly",r,i[1]||"other"]}function vo(t={},e="other"){const n=String(e||"other").toLowerCase(),r=Number(t==null?void 0:t.amount)||0;return n===String((t==null?void 0:t.type)||"").toLowerCase()?Number(t==null?void 0:t.ticketAmount)||0:n==="biweekly"?Math.floor(r/500):n==="monthly"?Math.floor(r/2500):0}function mc(t={},e="other",n=""){const r=String(t.type||"other").toLowerCase(),i=Be(r),s=Be(e),o=_e()||"Unknown user",a=[`Moved from ${i} to ${s} by ${o}.`,`Ref ${t.eventId||""}`],l=String(n||"").trim();return l&&a.push(`Reason: ${l}`),a.join(`
`)}function gc(t){if(!Y())return;const e=dh(t);if(!e){p("banking-move-missing","Could not find the selected banking entry.",{ttlMs:m});return}const n=String(e.type||"other").toLowerCase();Pe=e,j={targetType:n,note:"",tickets:String(vo(e,n))},Oe="",on=!1,Ot=!0,f()}function xr(){Ot=!1,on=!1,Oe="",Pe=null,j={targetType:"other",note:"",tickets:""},f()}function uh(){const t=Pe||{},e=String(t.type||"other").toLowerCase(),n=Be(e),r=ko(e);let i=String(j.targetType||r[0]||"other").toLowerCase();r.includes(i)||(i=r[0]||"other",j.targetType=i);const s=mc(t,i,j.note);return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="bankingMoveDialogTitle">
      <div class="roster-history-dialog manual-ticket-dialog banking-move-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="bankingMoveDialogTitle">Move Banking Entry</h3>
            <p>Move this deposit to a different banking section while preserving a reference to the original event.</p>
          </div>
          <button id="closeBankingMoveDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${Oe?`<div class="discord-data-error">${c(Oe)}</div>`:""}

        <div class="manual-ticket-form banking-move-form">
          <div class="banking-move-current-entry">
            <div><strong>Current Type:</strong> ${c(n)}</div>
            <div><strong>Event ID:</strong> ${c(t.eventId||"")}</div>
            <div><strong>Depositor:</strong> ${c(t.displayName||"")}</div>
            <div><strong>Amount:</strong> ${c(Jt(t.amount))} \u{1FA99}</div>
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
                    <strong>${c(Be(o))}</strong>
                    <span>${o===e?"Current / restore original values":`${c(String(vo(t,o)))} tickets`}</span>
                  </button>
                `).join("")}
              </div>
            </div>
          </div>

          <div class="banking-move-compact-row">
            <label class="manual-ticket-count-field banking-move-ticket-field">
              <span>Tickets Awarded</span>
              <input id="bankingMoveTicketsInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${h(j.tickets)}" ${i==="other"?"disabled":""} />
            </label>

            <label class="manual-ticket-note-field banking-move-note-field">
              <span>Move Note</span>
              <textarea id="bankingMoveNoteInput" class="discord-search-input manual-ticket-note-input banking-move-note-input" rows="1" placeholder="Optional reason for this move">${c(j.note)}</textarea>
            </label>
          </div>

          <div class="roster-history-muted banking-move-generated-note">${c(s).replace(/\n/g,"<br>")}</div>

          <div class="manual-ticket-actions banking-move-actions">
            <button id="saveBankingMoveButton" class="refresh-discord-button banking-move-submit-button" type="button" ${on||i===e?"disabled":""}>${on?"MOVING...":i===e?"SELECT A SIDE TO MOVE":"MOVE"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function fh(){var n,r,i,s;if(!Ot)return;(n=document.querySelector("#closeBankingMoveDialogButton"))==null||n.addEventListener("click",()=>xr());function t(o){const a=String(o||"other").toLowerCase(),l=String((Pe==null?void 0:Pe.type)||"other").toLowerCase(),d=ko(l);j.targetType=d.includes(a)?a:l,j.tickets=String(vo(Pe||{},j.targetType)),f()}document.querySelectorAll("[data-banking-move-target]").forEach(o=>{o.addEventListener("click",()=>t(o.dataset.bankingMoveTarget))}),(r=document.querySelector("#bankingMoveTicketsInput"))==null||r.addEventListener("input",o=>{const a=String(o.target.value||"").replace(/\D/g,"");o.target.value!==a&&(o.target.value=a),j.tickets=a}),(i=document.querySelector("#bankingMoveNoteInput"))==null||i.addEventListener("input",o=>{j.note=o.target.value||"";const a=document.querySelector(".banking-move-generated-note");a&&(a.innerText=mc(Pe||{},j.targetType||"other",j.note))}),(s=document.querySelector("#saveBankingMoveButton"))==null||s.addEventListener("click",()=>hh());const e=document.querySelector(".roster-history-overlay");e&&e.addEventListener("click",o=>{o.target===e&&xr()})}async function hh(){if(!Y())return;const t=Pe;if(!(t!=null&&t.eventId)){Oe="No banking entry is selected.",f();return}const e=String(t.type||"other").toLowerCase(),n=ko(e),r=String(j.targetType||n[0]||"other").toLowerCase();if(!n.includes(r)||r===e){Oe="Select one of the side destinations before moving this entry.",f();return}const i=r==="other"?0:Math.floor(Number(String(j.tickets||"").trim()||0));if(!Number.isFinite(i)||i<0){Oe="Tickets must be zero or greater.",f();return}on=!0,Oe="",f();try{const s=await R("guildsync:move-banking-entry",{event_id:t.eventId,target_type:r,tickets:i,note:j.note||""},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to move banking entry.");xr(),await oe({silent:!0}),p("banking-entry-moved",s.message||"Banking entry moved.",{ttlMs:m})}catch(s){on=!1,Oe=w(s),f()}}function ph(){if(!U()){p("banking-history-login-required","Login required to lookup banking history.",{ttlMs:m});return}kn=!0,qt="",X=[],ke=[],Re="",De=!1,Me="",me=-1,clearTimeout(Yt),f(),P("bankingHistorySearchInput")}function mh(){kn=!1,De=!1,Me="",clearTimeout(Yt)}function gh(){if(!kn)return;const t=document.querySelector("#bankingHistorySearchInput");t&&(t.addEventListener("input",e=>{if(qt=e.target.value||"",me=-1,Re="",ke=[],!qt.trim()){clearTimeout(Yt),Me="",X=[],De=!1,f(),P("bankingHistorySearchInput");return}clearTimeout(Yt),Yt=setTimeout(()=>{bh({keepFocus:!0})},250)}),t.addEventListener("keydown",e=>{if(e.key==="ArrowDown"||e.key==="ArrowUp"){if(X.length===0)return;e.preventDefault();const r=e.key==="ArrowDown"?1:-1;me=((me<0?0:me)+r+X.length)%X.length,f(),P("bankingHistorySearchInput");return}if(e.key!=="Enter")return;e.preventDefault();const n=X[me>=0?me:0];n!=null&&n.account_name&&bs(n.account_name)})),document.querySelectorAll("[data-banking-history-account]").forEach(e=>{e.addEventListener("click",()=>{bs(e.dataset.bankingHistoryAccount||"")})})}async function bh(t={}){const e=qt.trim();if(!e){Me="",X=[],me=-1,Re="",ke=[],De=!1,f(),t.keepFocus&&P("bankingHistorySearchInput");return}De=!0,Me="",X=[],me=-1,f(),t.keepFocus&&P("bankingHistorySearchInput");try{const n=await R("guildsync:request-banking-history-matches",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search banking history.");X=yh(n.matches),me=X.length>0?0:-1}catch(n){Me=w(n)}finally{De=!1,f(),t.keepFocus&&P("bankingHistorySearchInput")}}async function bs(t){const e=String(t||"").trim();if(!!e){clearTimeout(Yt),Re=e,qt=e,X=[],ke=[],De=!0,Me="",f();try{const n=await R("guildsync:request-banking-history-records",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load banking history.");ke=kh(n.records)}catch(n){Me=w(n)}finally{De=!1,f()}}}function yh(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s;return{account_name:String(e.account_name||e.accountName||"").trim(),record_count:Number((r=(n=e.record_count)!=null?n:e.recordCount)!=null?r:0)||0,last_event_timestamp:(s=(i=e.last_event_timestamp)!=null?i:e.lastEventTimestamp)!=null?s:""}}).filter(e=>e.account_name):[]}function kh(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s,o,a,l,d,y,g,b,_,S,A,T,v,x,V,ee;return{event_id:String(e.event_id||e.eventId||"").trim(),transaction_type:String(e.transaction_type||e.transactionType||e.type||"").trim(),event_timestamp:(i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:"",deposit_amount:(a=(o=(s=e.deposit_amount)!=null?s:e.depositAmount)!=null?o:e.amount)!=null?a:"",ticket_quantity:(y=(d=(l=e.ticket_quantity)!=null?l:e.ticketQuantity)!=null?d:e.ticketAmount)!=null?y:"",purchased_tickets:(S=(_=(b=(g=e.purchasedTickets)!=null?g:e.ticket_quantity)!=null?b:e.ticketQuantity)!=null?_:e.ticketAmount)!=null?S:0,bonus_tickets:(A=e.bonusTickets)!=null?A:0,bonus_percent:(T=e.bonusPercent)!=null?T:0,bonus_enabled:e.bonusEnabled===!0,total_tickets:(ee=(V=(x=(v=e.totalTickets)!=null?v:e.ticket_quantity)!=null?x:e.ticketQuantity)!=null?V:e.ticketAmount)!=null?ee:0,note:String(e.note||"").trim()}}).sort((e,n)=>{const r=Number(e.event_timestamp)||0,i=Number(n.event_timestamp)||0;return r!==i?r-i:String(e.event_id).localeCompare(String(n.event_id),void 0,{numeric:!0})}):[]}function vh(t){const e=Number(t);if(!e)return"";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t);const r=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0"),s=String(n.getFullYear()),o=String(n.getHours()).padStart(2,"0"),a=String(n.getMinutes()).padStart(2,"0"),l=String(n.getSeconds()).padStart(2,"0");return`${r}/${i}/${s} ${o}:${a}:${l}`}function Sh(t){const e=String(t||"").trim().toLowerCase();return e==="monthly"?"50/50":e==="biweekly"?"Bi-Weekly":e==="other"?"Other":e?e.replace(/\b\w/g,n=>n.toUpperCase()):""}function wh(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":Jt(e)}function ki(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":ve(e)}function bc(){if(I!=="more")return;fh(),gh(),document.querySelectorAll("[data-bank-entry-move]").forEach(a=>{a.addEventListener("click",()=>gc(a.dataset.bankEntryMove||""))}),document.querySelectorAll("[data-bank-section]").forEach(a=>{a.addEventListener("click",()=>{O=a.dataset.bankSection||"biweekly",f()})}),document.querySelectorAll("[data-bank-export-section]").forEach(a=>{a.addEventListener("click",()=>{Se=(a.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",Mt=!0,f()})}),document.querySelectorAll("[data-bank-period-move]").forEach(a=>{a.addEventListener("click",()=>{Lh(a.dataset.bankPeriodMove||""),f()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{Mt=!1,f()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>_h());const n=document.querySelector(".bank-export-overlay");n&&n.addEventListener("click",a=>{a.target===n&&(Mt=!1,f())});const r=document.querySelector("#openBankingHistoryButton");r&&r.addEventListener("click",()=>ph());const i=document.querySelector("#openManualBiweeklyTicketButton");i&&i.addEventListener("click",async()=>{if(!!Y()){if(!U()){p("manual-ticket-login-required","Login required to add manual entries.",{ttlMs:m});return}Te=!0,se="",vn=q.accountName||"",be=!1,Q=-1,de.length===0&&(u==null?void 0:u.connected)&&U()&&await Pt({silent:!0}),f()}});const s=document.querySelector("#checkoutDepositMailButton");s&&s.addEventListener("click",()=>{s.dataset.depositMailAction==="checkout"&&s.getAttribute("aria-disabled")!=="true"&&Dc()});const o=document.querySelector("#refreshBankingDataButton");o&&o.addEventListener("click",()=>{if(!H()){oe();return}if(!U()){p("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:m});return}Ec({key:"banking"})})}function yc(t){const e=Sn(Se),n=[["Guildie Name","Deposit Amount","Purchased Tickets",...e?["Bonus %","Bonus Tickets"]:[],"Total Tickets","Note"]];for(const r of t)n.push([r.displayName||"",String(_o(r,Se)),String(r.purchasedTickets),...e?[`${r.bonusPercent}%`,String(r.bonusTickets)]:[],String(r.totalTickets),r.note||""]);return n.map(r=>r.map(Qr).join("	")).join(`
`)}function Qr(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function Xr(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly","readonly"),n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.width="1px",n.style.height="1px",n.style.opacity="0",n.style.pointerEvents="none",n.style.zIndex="-1",document.body.appendChild(n),n.focus(),n.select(),n.setSelectionRange(0,n.value.length);let r=!1;try{r=document.execCommand("copy")}finally{document.body.removeChild(n)}return r}async function _h(){const t=Wi(Se),e=yc(t);if(await Xr(e)){p("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:m});return}const r=document.querySelector("#bankingExportTsv");r&&(r.focus(),r.select()),p("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:m})}function Wi(t){return ie.filter(e=>e.type===t).filter(e=>Ah(t,e)).sort((e,n)=>(Number(e.time)||0)-(Number(n.time)||0))}function Ah(t,e){if(t==="other")return!0;const n=Number(e==null?void 0:e.time)||0;if(n<=0)return!1;const r=So(t);return n>=r.salesStart&&n<=r.salesEnd}function Or(t){return Number(Ci[t])||0}function Lh(t){if(O!=="biweekly"&&O!=="monthly")return;const e=Or(O);if(t==="previous"){Ci[O]=e-1;return}t==="next"&&e<0&&(Ci[O]=e+1)}function So(t){const e=Math.floor(Date.now()/1e3);if(t==="monthly"){const i=Eh(e,Or(t));return{salesStart:vc(i)+1,salesEnd:i,raffleTime:i+Nr}}const n=gt;let r=kc(e);return r+=Or(t)*n,{salesStart:r-n+1,salesEnd:r,raffleTime:r+Nr}}function kc(t){const e=gt;let n=xd;for(;n-e>t;)n-=e;for(;n<t;)n+=e;return n}function Eh(t,e=0){let n=$h(t),r=Number(e)||0;for(;r<0;)n=vc(n),r+=1;for(;r>0;)n=Rh(n),r-=1;return n}function $h(t){let e=kc(t);for(;!wo(e);)e+=gt;return e}function vc(t){let e=t-gt;for(;!wo(e);)e-=gt;return e}function Rh(t){let e=t+gt;for(;!wo(e);)e+=gt;return e}function wo(t){const e=t+Nr,n=t+gt+Nr;return ys(e)!==ys(n)}function ys(t){var s,o;const e=new Date(Number(t||0)*1e3);if(Number.isNaN(e.getTime()))return"";const n=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit"}).formatToParts(e),r=((s=n.find(a=>a.type==="year"))==null?void 0:s.value)||"",i=((o=n.find(a=>a.type==="month"))==null?void 0:o.value)||"";return`${r}-${i}`}function Dh(t=O){const e=String(t||"").toLowerCase();return e!=="monthly"&&e!=="biweekly"?0:"auto"}function _o(t={},e=O){const n=Number(t.amount)||0;if(!Dh(e))return n;const r=Math.abs(Math.trunc(n))%10,i=r===1||r===3?r:0;return i>0&&n>i?n-i:n}function Mh(t,e=O){return t.reduce((n,r)=>(n.amount+=_o(r,e),n.purchased+=Number(r.purchasedTickets)||0,n.bonus+=Number(r.bonusTickets)||0,n.tickets+=Number(r.totalTickets)||0,n),{amount:0,purchased:0,bonus:0,tickets:0})}function Sc(t){const e=Math.ceil((Number(t)||0)/2);return e<=0?0:Math.ceil(e/2e5)*2e5}function Th(t){const e=Sc(t);return e>0?e/2e5:0}function Sn(t){var n;if(t!=="biweekly"&&t!=="monthly")return!1;const{salesEnd:e}=So(t);return((n=rn.find(r=>r.type===t&&r.salesEnd===e))==null?void 0:n.enabled)===!0}function Bh(t,e=!0,n=Sn(O)){return`
    <tr data-bank-event-id="${h(t.eventId||"")}">
      <td>${c(t.note||t.eventId||"")}</td>
      <td>${c(_r(t.time))}</td>
      <td>${c(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${c(Jt(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td>${c(ve(t.purchasedTickets))}</td>${n?`<td>${c(ve(t.bonusPercent))}%</td><td>${c(ve(t.bonusTickets))}</td>`:""}<td><strong class="bank-ticket-amount">${c(ve(t.totalTickets))}</strong></td>`:""}
      <td>${Y()?`<button class="bank-entry-move-button" type="button" data-bank-entry-move="${h(t.eventId||"")}">Move</button>`:""}</td>
    </tr>
  `}function Nh(t=!0,e=!1){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?e?"9":"7":"5"}">No ${c(Be(O))} deposits found for this ${O==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function Be(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function _r(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Jt(t){return(Number(t)||0).toLocaleString()}function ve(t){return(Number(t)||0).toLocaleString()}function wn(t){return Array.isArray(t)?t.map(e=>{var r,i,s,o,a,l,d,y,g,b,_,S,A,T,v,x,V,ee,yt,or,Je,_n,kt,si,L,D,E,N,ne,G,Ae,sr,An,ar,No,Co,qo,Io,xo,Oo,Po,Fo,Go,Uo,Vo,Ho,Wo;const n=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:n==="monthly"||n==="biweekly"||n==="other"?n:"other",eventId:String((i=(r=e==null?void 0:e.eventId)!=null?r:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((o=(s=e==null?void 0:e.time)!=null?s:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((l=(a=e==null?void 0:e.displayName)!=null?a:e==null?void 0:e.display_name)!=null?l:"").trim(),amount:Number((d=e==null?void 0:e.amount)!=null?d:0)||0,ticketAmount:Number((g=(y=e==null?void 0:e.ticketAmount)!=null?y:e==null?void 0:e.ticket_amount)!=null?g:0)||0,purchasedTickets:Number((_=(b=e==null?void 0:e.purchasedTickets)!=null?b:e==null?void 0:e.ticketAmount)!=null?_:0)||0,bonusTickets:Number((S=e==null?void 0:e.bonusTickets)!=null?S:0)||0,bonusPercent:Number((A=e==null?void 0:e.bonusPercent)!=null?A:0)||0,bonusEnabled:(e==null?void 0:e.bonusEnabled)===!0,totalTickets:Number((v=(T=e==null?void 0:e.totalTickets)!=null?T:e==null?void 0:e.ticketAmount)!=null?v:0)||0,note:String((x=e==null?void 0:e.note)!=null?x:"").trim(),dataSource:String((ee=(V=e==null?void 0:e.dataSource)!=null?V:e==null?void 0:e.data_source)!=null?ee:"").trim(),emailRequested:Boolean((yt=e==null?void 0:e.emailRequested)!=null?yt:e==null?void 0:e.email_requested),mailStatus:String((Je=(or=e==null?void 0:e.mailStatus)!=null?or:e==null?void 0:e.mail_status)!=null?Je:"").trim(),mailRequestId:String((kt=(_n=e==null?void 0:e.mailRequestId)!=null?_n:e==null?void 0:e.mail_request_id)!=null?kt:"").trim(),mailBatchId:String((L=(si=e==null?void 0:e.mailBatchId)!=null?si:e==null?void 0:e.mail_batch_id)!=null?L:"").trim(),checkedOutBy:String((E=(D=e==null?void 0:e.checkedOutBy)!=null?D:e==null?void 0:e.checked_out_by)!=null?E:"").trim(),checkedOutAt:String((ne=(N=e==null?void 0:e.checkedOutAt)!=null?N:e==null?void 0:e.checked_out_at)!=null?ne:"").trim(),checkoutExpiresAt:String((Ae=(G=e==null?void 0:e.checkoutExpiresAt)!=null?G:e==null?void 0:e.checkout_expires_at)!=null?Ae:"").trim(),writtenToEsoAt:String((An=(sr=e==null?void 0:e.writtenToEsoAt)!=null?sr:e==null?void 0:e.written_to_eso_at)!=null?An:"").trim(),sentAt:String((No=(ar=e==null?void 0:e.sentAt)!=null?ar:e==null?void 0:e.sent_at)!=null?No:"").trim(),failedReason:String((qo=(Co=e==null?void 0:e.failedReason)!=null?Co:e==null?void 0:e.failed_reason)!=null?qo:"").trim(),recipient:String((Po=(Oo=(xo=(Io=e==null?void 0:e.recipient)!=null?Io:e==null?void 0:e.account_name)!=null?xo:e==null?void 0:e.displayName)!=null?Oo:e==null?void 0:e.display_name)!=null?Po:"").trim(),subject:String((Uo=(Go=(Fo=e==null?void 0:e.subject)!=null?Fo:e==null?void 0:e.mailSubject)!=null?Go:e==null?void 0:e.mail_subject)!=null?Uo:"").trim(),body:String((Wo=(Ho=(Vo=e==null?void 0:e.body)!=null?Vo:e==null?void 0:e.mailBody)!=null?Ho:e==null?void 0:e.mail_body)!=null?Wo:"").trim()}}):[]}function Ch(t){const e=new Map;for(const n of ie)n.eventId&&e.set(n.eventId,n);for(const n of t)!n.eventId||e.set(n.eventId,n);ie=Array.from(e.values()).sort((n,r)=>(Number(r.time)||0)-(Number(n.time)||0))}function qh(t){t.querySelectorAll("[data-open-member-link-dialog]").forEach(e=>{e.addEventListener("click",()=>po(e.dataset.openMemberLinkDialog||"",e.dataset.memberLinkValue||""))}),t.querySelectorAll("[data-open-roster-notes]").forEach(e=>{e.addEventListener("click",()=>tc(e.dataset.openRosterNotes||""))}),t.querySelectorAll("[data-bank-entry-move]").forEach(e=>{e.addEventListener("click",()=>gc(e.dataset.bankEntryMove||""))})}function Ao(t,e,n=!1,r=!1){const i=document.querySelector(t);if(!i)return;const s=ao(i),o=document.activeElement,a=o&&"selectionStart"in o?[o.selectionStart,o.selectionEnd]:null,l=document.createElement("template");l.innerHTML=e;const d=l.content.firstElementChild,y=n?".bank-deposit-table":r?".eso-roster-table":".discord-member-table";jo(i.querySelector(`${y} tbody`),d.querySelector(`${y} tbody`),n?"data-bank-event-id":r?"data-eso-account-name":"data-discord-user-id",qh),Bn(i.querySelector(`${y} thead`),d.querySelector(`${y} thead`)),Nn(i.querySelector(".discord-data-actions .discord-last-refresh"),d.querySelector(".discord-data-actions .discord-last-refresh"));const g=n?"#refreshBankingDataButton":r?"#refreshRosterDataButton":"#refreshDiscordDataButton",b=i.querySelector(g),_=d.querySelector(g);if(b&&_&&(b.disabled=_.disabled,Nn(b.lastElementChild,_.lastElementChild)),n){Bn(i.querySelector(".bank-deposits-summary-row"),d.querySelector(".bank-deposits-summary-row")),Bn(i.querySelector(".bank-raffle-period-content"),d.querySelector(".bank-raffle-period-content"));const S=i.querySelector("#checkoutDepositMailButton"),A=d.querySelector("#checkoutDepositMailButton");if(!A)S==null||S.remove();else if(!S||!S.isEqualNode(A)){const ee=A.cloneNode(!0);ee.addEventListener("click",()=>{ee.dataset.depositMailAction==="checkout"&&ee.getAttribute("aria-disabled")!=="true"&&Dc()}),S?S.replaceWith(ee):i.querySelector(".discord-data-actions").insertBefore(ee,i.querySelector("[data-bank-export-section]"))}jo(i.querySelector("#bankingExportGrid tbody"),d.querySelector("#bankingExportGrid tbody"),"data-bank-event-id"),Bn(i.querySelector("#bankingExportGrid thead"),d.querySelector("#bankingExportGrid thead")),Nn(i.querySelector(".bank-export-count"),d.querySelector(".bank-export-count"));const T=i.querySelector("#copyBankingExportGridButton"),v=d.querySelector("#copyBankingExportGridButton");T&&v&&(T.disabled=v.disabled);const x=i.querySelector("#bankingExportTsv"),V=d.querySelector("#bankingExportTsv");x&&V&&x.value!==V.value&&(x.value=V.value)}else{Nn(i.querySelector(".discord-results-count"),d.querySelector(".discord-results-count"));const S=r?"#rosterRankFilter":"#discordRoleFilter",A=i.querySelector(S),T=d.querySelector(S);if(A&&T&&A.innerHTML!==T.innerHTML){const v=A.value;A.innerHTML=T.innerHTML,A.value=v}}(o==null?void 0:o.isConnected)&&document.activeElement!==o&&(o.focus({preventScroll:!0}),a&&a[0]!==null&&o.setSelectionRange(...a)),s()}function cn(){I==="eso-members"&&document.querySelector(".eso-roster-panel")&&Ao(".eso-roster-panel",ua(),!1,!0)}function Ar(){Ke||Ye||bt?f():I==="discord-members"?ln():I==="eso-members"&&cn()}function ln(){I==="discord-members"&&document.querySelector(".discord-member-panel")&&Ao(".discord-member-panel",da())}function wc(t){const e=rn.find(n=>`${n.type}:${n.salesEnd}`===He);if(t.bonusSettings&&(J=t.bonusSettings),Array.isArray(t.bonusRaffles)){const n=[...t.bonusRaffles];e&&!n.some(r=>`${r.type}:${r.salesEnd}`===He)&&n.push(e),rn=n}}function Ih(){if(I!=="settings"||!J)return;const t=document.querySelector(".raffle-bonus-card");if(!t)return;const e=ao(t.parentElement),n=document.createElement("template");n.innerHTML=ka();const r=n.content.firstElementChild;if(t.querySelector("#raffleBonusSettingsForm")){const i=t.querySelector("#bonusRafflePicker"),s=r.querySelector("#bonusRafflePicker");if(i&&s&&i.innerHTML!==s.innerHTML){const o=i.value;i.innerHTML=s.innerHTML,i.value=o}if(!ge&&(Ee==null?void 0:Ee.raffle)!==He){Nn(t.querySelector("[data-bonus-settings-source]"),r.querySelector("[data-bonus-settings-source]"));const o=t.querySelectorAll(".raffle-bonus-tiers"),a=r.querySelectorAll(".raffle-bonus-tiers");o.forEach((l,d)=>{const y=a[d];!y||(l.querySelectorAll("input").length!==y.querySelectorAll("input").length?Bn(l,y):y.querySelectorAll("input").forEach(g=>{const b=Array.from(l.querySelectorAll("input")).find(_=>_.name===g.name);!b||(b.type==="checkbox"?b.checked!==g.checked&&(b.checked=g.checked):b.value!==g.value&&(b.value=g.value))}))})}}else{const i=r.cloneNode(!0);t.replaceWith(i),ya(i),Rs(ta,{refresh:!0,root:i})}e()}function ue(){Ih(),I==="more"&&document.querySelector(".bank-deposits-panel")&&Ao(".bank-deposits-panel",hc(),!0)}function _c(){na=new Date().toISOString()}async function xh(t={}){!(t!=null&&t.ok)||(ie=wn(t.entries),wc(t),_c(),ue(),p("banking-data-updated",`Banking data updated. Loaded ${ie.length} deposit record${ie.length===1?"":"s"}.`,{ttlMs:m}))}async function oe(t={}){const e=Boolean(t.silent),n=Boolean(t.background);if(!(u!=null&&u.connected)){e||p("banking-data-error","GuildSync websocket is not connected.",{ttlMs:m});return}n||(ze=!0,ue());try{const r=await R("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");ie=wn(r.entries),wc(r),_c(),e||p("banking-data",`Loaded ${ie.length} banking deposit record${ie.length===1?"":"s"}.`,{ttlMs:m})}catch(r){e||p("banking-data-error",w(r),{ttlMs:m})}finally{n||(ze=Boolean(t.deferPendingRefresh)),ue(),t.deferPendingRefresh||Zn("more")}}async function ks(){!(u!=null&&u.connected)||!Y()||ze||(await oe({silent:!0,background:!0}),Jr()<=0&&rr()>0&&(xe.running?ue():Gh("availability-refresh")))}function Ac(){Ut&&clearInterval(Ut),ks(),Ut=window.setInterval(ks,Nd)}function Lc(){Ut&&(clearInterval(Ut),Ut=null)}async function Oh(t={}){if(!!Y()){if(!(u!=null&&u.connected)){p("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:m});return}try{const e=await Ld(t);if(!(e!=null&&e.ok))return;const n=Array.isArray(e.ackEntries)?e.ackEntries:[];if(n.length===0)return;const r=await R("guildsync:mark-deposit-mail-sent",{mail_ack:n,mail_request_ids:n.map(o=>(o==null?void 0:o.mail_request_id)||(o==null?void 0:o.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(r.mail_request_ids)?r.mail_request_ids:Array.isArray(r.mailRequestIds)?r.mailRequestIds:[];if(i.length===0){p("deposit-mail-ack-none",r.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:m});return}const s=await Ed(i);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");p("deposit-mail-ack-sent",s.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:m}),await oe({silent:!0})}catch(e){p("deposit-mail-ack-error",w(e),{ttlMs:m})}}}async function Ph(){if(!!Y()&&!hi){hi=!0;try{const t=await $d();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&p("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:m})}catch(t){p("deposit-mail-ack-cleanup-error",w(t),{ttlMs:m})}finally{hi=!1}}}async function Ec(t={}){var e,n;if(!!H()){if(!(u!=null&&u.connected)){p("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}ze=!0,ue();try{const r=await yd(t);if(!(r!=null&&r.ok)){p("banking-data-pending",(r==null?void 0:r.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:m});return}const i=wn((e=r==null?void 0:r.data)==null?void 0:e.entries);Ch(i);const s=new Date().toISOString(),o={local_upload_id:Mc(),authenticated_username:_e(),authenticated_discord_user_id:((n=k==null?void 0:k.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:s,data:r.data||{}};try{await Nc(o)}catch(a){throw Hh(o),a}await oe({silent:!0,deferPendingRefresh:!0})}catch(r){p("banking-data-error",w(r),{ttlMs:m})}finally{ze=!1,ue(),Zn("more")}}}function $c(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function ir(){try{const t=window.localStorage.getItem(Ks),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Rc(t){window.localStorage.setItem(Ks,JSON.stringify(Array.isArray(t)?t:[]))}function Fh(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||$c()),n=ir().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);n.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),Rc(n)}function vs(t){const e=String(t||"").trim();if(!e)return;const n=ir().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);Rc(n)}async function Dc(){if(!Y()){p("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:m});return}if(!(u!=null&&u.connected)){p("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:m});return}const t=ir(),e=Jr();if(t.length>0&&e<=0){await dn();return}ue();try{const n=await R("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail checkout request.");const r=wn(n.records);if(r.length===0){p("deposit-mail-none",n.message||"No unsent deposit mail is available.",{ttlMs:m}),await oe({silent:!0});return}const i={mail_batch_id:n.mail_batch_id||n.mailBatchId||$c(),checked_out_by:n.checked_out_by||n.checkedOutBy||_e(),checked_out_at:new Date().toISOString(),records:r};Fh(i),await dn()}catch(n){p("deposit-mail-error",w(n),{ttlMs:m})}finally{ue()}}function Gh(t=""){Vt||vr||!Y()||rr()<=0||xe.running||(Vt=window.setTimeout(()=>{Vt=null,dn()},100))}async function dn(){if(Vt&&(window.clearTimeout(Vt),Vt=null),vr||!Y())return;const t=ir();if(t.length!==0){if(await ji({silent:!0}),xe.running){p("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:m}),ue();return}vr=!0,ue();try{for(const e of t){if(!Y())return;const n=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),r=wn(e==null?void 0:e.records);if(r.length===0){vs(n);continue}const i=await Ad(r);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(u!=null&&u.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const s=await R("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:n,event_ids:i.eventIds||r.map(o=>o.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend did not confirm deposit mail was marked written_to_eso.");vs(n),p("deposit-mail-written",i.message||`Wrote ${r.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:m})}await oe({silent:!0})}catch(e){p("deposit-mail-write-error",w(e),{ttlMs:m})}finally{vr=!1,ue()}}}async function ji(t={}){try{const e=Boolean(xe.running),n=await _d();xe={running:Boolean(n==null?void 0:n.running),message:String((n==null?void 0:n.message)||"")},xe.running||await Ph(),e&&!xe.running&&(p("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:m}),await dn()),e!==xe.running&&ue()}catch(e){t.silent||p("eso-status-error",w(e),{ttlMs:m})}}function Uh(){Gt&&clearInterval(Gt),ji({silent:!0}).then(()=>{!xe.running&&rr()>0&&dn()}),Gt=window.setInterval(()=>ji({silent:!0}),Bd)}function Vh(){Gt&&(clearInterval(Gt),Gt=null)}function Mc(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Lo(){try{const t=window.localStorage.getItem(Ys),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Tc(t){window.localStorage.setItem(Ys,JSON.stringify(Array.isArray(t)?t:[]))}function Hh(t){const e=String((t==null?void 0:t.local_upload_id)||Mc()),n=Lo().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Tc(n),p("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function Wh(t){const e=Lo().filter(n=>(n==null?void 0:n.local_upload_id)!==t);Tc(e)}async function Bc(){if(di||!(u!=null&&u.connected)||!H())return;const t=Lo();if(t.length!==0){di=!0;try{for(const e of t){if(!(u!=null&&u.connected)||!H())return;await Nc(e),Wh(e.local_upload_id)}}catch(e){p("banking-data-pending-error",`Pending banking upload retry failed: ${w(e)}`,{ttlMs:m})}finally{di=!1}}}async function Nc(t){if(!(u!=null&&u.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await R("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const n=await kd(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return p("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:m}),e}function Cc(){if(I!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>jh());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{en=!0,Ve="",f(),P("discordHistorySearchInput")});const n=document.querySelector("#discordMemberSearch");n&&n.addEventListener("input",o=>{Rr=o.target.value||"",Di=o.target.selectionStart,Mi=o.target.selectionEnd,f({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Qh(o.dataset.discordSortColumn||"username")})});const r=document.querySelector("#discordRoleFilter");r&&r.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(Ht.add(a),f())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRoleFilter||"";Ht.delete(a),f()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(Wt.add(a),f())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeDiscordLinkStatusFilter||"";Wt.delete(a),f()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>po(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{Rr="",Ht.clear(),Wt.clear(),f()})}async function jh(){var t,e;if(!H()){await Wn();return}if(!(u!=null&&u.connected)){p("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:m});return}$r=!0,ln(),p("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const n=await R("guildsync:request-discord-data-refresh",{requested_by:((t=k==null?void 0:k.user)==null?void 0:t.display_name)||((e=k==null?void 0:k.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to request Discord data refresh.");p("discord-refresh-requested",n.message||"Discord data refresh completed.",{ttlMs:m}),await Wn({silent:!0})}catch(n){p("discord-refresh-error",w(n),{ttlMs:m})}finally{$r=!1,ln()}}async function zh(){if(!(u!=null&&u.connected))return;const t=await R("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(Wr=t.value||null)}async function Yh(t={}){if(!!(t!=null&&t.ok)){re=Eo(t.members),Hr=$o(t.roles),t.last_refresh&&(Wr=t.last_refresh);try{await zh()}catch{}I==="discord-members"&&ln(),p("discord-data-updated",`Discord data updated. Loaded ${re.length} member record${re.length===1?"":"s"}.`,{ttlMs:m})}}async function Wn(t={}){const e=Boolean(t.silent);if(!(u!=null&&u.connected)){p("discord-data-error","GuildSync websocket is not connected.",{ttlMs:m});return}Qt=!0,ln();try{const[n,r]=await Promise.all([R("guildsync:request-discord-data-date",{}),R("guildsync:request-discord-member-dataJSON",{})]);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord refresh date.");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord member data.");Wr=n.value||null,re=Eo(r.members),Hr=$o(r.roles),e||p("discord-data",`Loaded ${re.length} Discord member record${re.length===1?"":"s"}.`,{ttlMs:m})}catch(n){p("discord-data-error",w(n),{ttlMs:m})}finally{Qt=!1,ln(),Zn("discord-members")}}function R(t,e={},n=3e4){return new Promise((r,i)=>{var a,l,d;if(!(t==="guildsync:set-role-view"&&(((a=k.user)==null?void 0:a.actual_role)||((l=k.user)==null?void 0:l.role))==="admin")&&!Jc((d=k.user)==null?void 0:d.role,t)){i(new Error("Your current role or view does not have permission to perform this action."));return}if(!(u!=null&&u.connected)){i(new Error("GuildSync websocket is not connected."));return}let s=!1;const o=window.setTimeout(()=>{s||(s=!0,i(new Error(`${t} timed out.`)))},n);u.emit(t,e,y=>{s||(s=!0,window.clearTimeout(o),r(y))})})}function Eo(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(qc).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,n)=>jn(e).localeCompare(jn(n),void 0,{sensitivity:"base"})):[]}function $o(t){if(!Array.isArray(t))return[];const e=new Map;for(const n of t){const r=qc(n);if(!r)continue;const i=r.role_id||xn(r.role_name);i&&!e.has(i)&&e.set(i,r)}return Array.from(e.values()).sort((n,r)=>String(n.role_name||"").localeCompare(String(r.role_name||""),void 0,{sensitivity:"base"}))}function qc(t){var i,s;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),n=String(t.role_name||t.name||"Unnamed Role").trim(),r=(s=(i=t.role_color)!=null?i:t.color)!=null?s:null;return{role_id:e,role_name:n||"Unnamed Role",role_color:r}}function Kh(){const t=Rr.trim().toLowerCase(),e=Array.from(Ht),n=re.filter(r=>{if(t&&![r.username,r.global_name,r.server_nickname,r.discord_id,...r.roles.map(s=>s.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(r.roles.map(s=>s.role_name));if(!e.every(s=>i.has(s)))return!1}return!!ma(Wt,fu(r))});return Jh(n)}function Jh(t){const e=_t==="desc"?-1:1;return[...t].sort((n,r)=>{const i=Ss(n,Gn),s=Ss(r,Gn),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:jn(n).localeCompare(jn(r),void 0,{sensitivity:"base",numeric:!0})})}function Ss(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(n=>n.role_name||"").filter(Boolean).sort((n,r)=>n.localeCompare(r,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function Qh(t){const n=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";Gn===n?_t=_t==="asc"?"desc":"asc":(Gn=n,_t="asc"),f()}function ur(t,e){const n=Gn===t,r=_t==="asc"?"ascending":"descending",i=n?_t==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${n?r:"none"}">
      <button
        class="discord-sort-header${n?" active":""}"
        type="button"
        data-discord-sort-column="${h(t)}"
        title="Sort ${h(e)} ${n&&_t==="asc"?"descending":"ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function Xh(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(Di)?Di:t.value.length,n=Number.isInteger(Mi)?Mi:e;t.setSelectionRange(e,n)}}function Zh(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(Bi)?Bi:t.value.length,n=Number.isInteger(Ni)?Ni:e;t.setSelectionRange(e,n)}}function ep(){const t=new Set;for(const e of re)for(const n of e.roles)n.role_name&&t.add(n.role_name);return Array.from(t).sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function tp(t){const e=ap(t),n=jn(t),r=t.roles||[];return`
    <tr data-discord-user-id="${h(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${h(e)}" alt="${h(n)}" />`:`<span>${c(Wc(n))}</span>`}
          </div>
          <span>${c(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${c(t.global_name||"")}</td>
      <td>${c(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${r.length>0?r.map(i=>rp(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${Pa({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function np(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${c(Qt?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function rp(t){const e=Zr(t.role_color),n=Mo(e),r=Do(e,n);return`
    <span
      class="discord-role-badge"
      title="${h(t.role_name)}"
      style="${r}"
    >${c(t.role_name)}</span>
  `}function ip(t){const e=Ro(t),n=Zr(e==null?void 0:e.role_color),r=Mo(n),i=Do(n,r);return`
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
  `}function op(t){const e=sp(t);for(const n of e){const r=Ro(n);if(r)return r}return null}function sp(t){const e=String(t||"").trim();if(!e)return[];const n=xn(e),i={associate:["Associates","Associate"],associates:["Associates","Associate"],soldier:["Soldiers","Soldier"],soldiers:["Soldiers","Soldier"],capo:["Capo"],capos:["Capo","Capos"],caporegime:["CapoRegime","Capo Regime","Capo Regimes"],consiglieres:["Consigliere","Consiglieres"],consigliere:["Consigliere","Consiglieres"]}[n]||[e];return Array.from(new Set([e,...i].filter(Boolean)))}function xn(t){return String(t||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function Ro(t){const e=xn(t);if(!e)return null;const n=Hr.find(r=>xn(r.role_name)===e);if(n)return n;for(const r of re){const i=r.roles.find(s=>xn(s.role_name)===e);if(i)return i}return null}function Zr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function Do(t,e){return[`--role-fill-top: ${ws(t,"#ffffff",.16)}`,`--role-fill-bottom: ${ws(t,"#000000",.1)}`,`--role-fill-glow: ${_s(t,.28)}`,`--role-fill-edge: ${_s(t,.46)}`,`color: ${e}`].join("; ")}function ws(t,e,n){const r=fr(t)||fr("#64748b"),i=fr(e)||fr("#ffffff"),s=Math.max(0,Math.min(1,Number(n)||0)),o=Math.round(r.red+(i.red-r.red)*s),a=Math.round(r.green+(i.green-r.green)*s),l=Math.round(r.blue+(i.blue-r.blue)*s);return`#${vi(o)}${vi(a)}${vi(l)}`}function fr(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function vi(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function _s(t,e){const n=String(t||"#64748b").replace("#",""),r=/^[0-9a-f]{6}$/i.test(n)?n:"64748b",i=parseInt(r.slice(0,2),16),s=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`rgba(${i}, ${s}, ${o}, ${e})`}function Mo(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const n=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(n*299+r*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function ap(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!n)return"";const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function jn(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function Ic(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function To(t){var o;const e=((o=k.user)==null?void 0:o.role)==="admin",n=e&&Number(t)||0,r=document.querySelector("#userPendingBadge");r&&(r.innerHTML=nl(n));const i=document.querySelector("#userAdminMenuCount");i&&(i.textContent=n?`${n} pending`:"");const s=document.querySelector("#discordAvatarButton");s&&s.setAttribute("aria-label",n?`GuildSync profile menu, ${n} pending account requests`:"GuildSync profile menu")}function cp(t){var n;if(!t||t.discord_user_id!==((n=k.user)==null?void 0:n.discord_user_id))return;const e=k.user.role;k.user={...k.user,...t},e!==t.role&&(ye.reset(),oo.clear(),Fn(t.role)||(Ot=!1,Te=!1),f(),Tt({silent:!0}),$s(t.role)&&(Bc(),ac(),uc()),Fn(t.role)?Ac():Lc()),On(),ye.start()}function On(){const t=document.querySelector("#discordArea");if(!!t){if(xt(!1),U()){const e=k.user||{},n=_e(),r=Ep(e),i=Wc(n);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Open GuildSync user menu" aria-label="GuildSync profile menu">
          ${r?`<img src="${h(r)}" alt="${h(n)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${c(i)}</span>`}
        </button>
        <span id="userPendingBadge" class="user-pending-badge-wrap"></span>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `,To(ye.count);const s=document.querySelector("#discordAvatarButton");s.addEventListener("contextmenu",o=>{o.preventDefault(),As()}),s.addEventListener("click",()=>{As()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",pp)}}function As(){if(Kn){xt();return}hp()}function lp(t=ot){if(!H())return'<p class="roster-history-muted">Approved GuildSync access is required to upload files.</p>';const e=Array.isArray(t==null?void 0:t.files)?t.files:[],n=String((t==null?void 0:t.directory)||"").trim(),r=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const s=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),o=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),a=String((i==null?void 0:i.filePath)||(n?`${n}\\${o}`:o)).trim(),l=(i==null?void 0:i.enabled)!==!1,d=r&&l,y=`profileFileWatchToggle-${fp(s||o)}`;return`
          <label class="profile-filewatch-item ${l?"enabled":"disabled"}" title="${h(a)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${c(o)}</span>
              <span class="profile-filewatch-state">${d?"Watching":l?"On":"Off"}</span>
            </span>
            <input
              id="${h(y)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${h(s)}"
              ${l?"checked":""}
              aria-label="Turn file watch ${l?"off":"on"} for ${h(o)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function Bo(){var r,i,s,o,a;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=_e(),n=((r=k.user)==null?void 0:r.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${c(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Role</span>
        <span class="profile-value">${c($p(n))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${c(Vr)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${ot!=null&&ot.watching?"Active":"Stopped"}</span>
        </div>
        ${lp()}
      </div>
      ${((i=k.user)==null?void 0:i.role)==="admin"?'<button id="manageGuildSyncUsersButton" class="discord-secondary-button user-admin-menu-button" type="button">Manage GuildSync Users <span id="userAdminMenuCount"></span></button>':""}
      <div class="profile-section"><strong>Voice Channel Mute</strong><p>Global voice hotkeys require the Windows desktop client.</p></div>
      ${Zc(k.user)}
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,t.querySelectorAll("[data-role-view]").forEach(l=>l.addEventListener("click",()=>void dp(l.dataset.roleView))),(s=document.querySelector("#manageGuildSyncUsersButton"))==null||s.addEventListener("click",()=>{xt(!1),ye.open()}),To(ye.count),(o=document.querySelector("#discordLogoutButton"))==null||o.addEventListener("click",Fc),(a=document.querySelector("#associateTicketReportButton"))==null||a.addEventListener("click",()=>{xt(!1),wa()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(l=>{l.addEventListener("change",up)})}async function dp(t){var n;const e=document.querySelectorAll("[data-role-view]");e.forEach(r=>r.disabled=!0);try{const r=await R("guildsync:set-role-view",{role:t},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Could not change view.");xt(!1);const i=(n=k.user)==null?void 0:n.role;p("role-view",i==="admin"?"Returned to Admin View.":`Viewing GuildSync as ${i==="viewer"?"Viewer":"User"}. Use the profile menu to return to Admin View.`,{ttlMs:m})}catch(r){p("role-view-error",w(r),{ttlMs:m})}finally{e.forEach(r=>r.disabled=!1)}}async function xc(){try{ot=await Ur(),Kn&&Bo()}catch(t){p("file-watcher-error",w(t),{ttlMs:m})}}async function up(t){var r;const e=t.currentTarget,n=String(((r=e==null?void 0:e.dataset)==null?void 0:r.filewatchKey)||"").trim();if(!!n)try{e.disabled=!0,ot=await bd(n,e.checked),await Tt({silent:!0}),Kn&&Bo()}catch(i){p("file-watcher-error",w(i),{ttlMs:m}),await xc()}}function fp(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function hp(){const t=document.querySelector("#discordProfileMenu");!t||(Bo(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),Kn=!0,xc(),setTimeout(()=>{window.addEventListener("click",Oc),window.addEventListener("keydown",Pc)},0))}function xt(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),Kn=!1,t&&(window.removeEventListener("click",Oc),window.removeEventListener("keydown",Pc))}function Oc(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&xt()}function Pc(t){t.key==="Escape"&&xt()}async function pp(){try{p("auth","Opening Discord login...",{ttlMs:m});const t=await fd();t!=null&&t.status_message&&p("auth",t.status_message,{ttlMs:m}),ft()}catch(t){p("auth-error",w(t),{ttlMs:m}),ft()}}async function Fc(){try{k=await pd(),p("auth",k.status_message||"Logged out.",{ttlMs:m}),ra(),Pn(),await Tt()}catch(t){p("auth-error",w(t),{ttlMs:m}),ft()}}function Pn(){const t=k.socket_url||"https://guildsync.perdues.me";mp(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};k!=null&&k.token&&(e.auth={token:k.token}),u=yr(t,e),u.on("connect",()=>{ye.start(),ft(),Gc(),I==="discord-members"&&Wn({silent:!0}),I==="eso-members"&&Pt({silent:!0}),(I==="more"||I==="settings"&&!J)&&oe({silent:!0}),Bc(),dn(),Uh(),Ac(),ac(),uc(),gp()}),u.on("guildsync:users-changed",n=>ye.changed(n)),u.on("guildsync:account-profile",cp),u.on("guildsync:account-removed",()=>void Fc()),u.on("connect_error",()=>{ye.stop(),ft(),Pr()}),u.on("disconnect",()=>{ye.stop(),ft(),Pr(),Vh(),Lc()}),u.on("guildsync:version-status",n=>{bp(n)}),u.on("guildsync:discord-member-data-updated",n=>{Yh(n)}),u.on("guildsync:banking-data-updated",n=>{xh(n)}),u.on("guildsync:roster-data-updated",n=>{Hf(n)}),u.on("guildsync:member-links-updated",af),u.on("guildsync:discord-refresh-status",(n={})=>{const r=String(n.message||"").trim();r&&p("discord-refresh-status",r,{ttlMs:m})})}function mp(t=!0){ye.reset(),Pr(),u&&(u.disconnect(),u=null),t&&ft()}function Gc(){!(u!=null&&u.connected)||u.emit("guildsync:client-version",{version:Vr,platform:ei(),client_type:"web"})}function gp(){Pr(),kr=window.setInterval(()=>{Gc()},Td)}function Pr(){kr&&(window.clearInterval(kr),kr=null)}function bp(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",n=t.download&&typeof t.download=="object"?t.download:{};Qe={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||n.url||"").trim(),fileName:String(t.download_file_name||n.file_name||"").trim(),platformLabel:String(n.label||t.platform||ei()).trim()},p("version",`GuildSync is out of date. Current version: ${Vr}. Latest version: ${e}.`),Ls();return}Qe={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},Ls(),ti("version")}}function ei(){const t=String(navigator.userAgent||"").toLowerCase(),n=`${String(navigator.platform||"").toLowerCase()} ${t}`;return n.includes("mac")?"macos":n.includes("linux")?"linux":"windows"}function Ls(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!Qe.updateRequired||!Qe.downloadUrl){t.innerHTML="";return}const e=Qe.platformLabel||"Desktop",n=Qe.latestVersion||"latest",r=Qe.fileName||"GuildSync client download";t.innerHTML=`
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
      <span class="desktop-client-download-caret" aria-hidden="true">\u25BC</span>
    </button>
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{yp()})}function yp(){const t=String(Qe.downloadUrl||"").trim();if(!t){p("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:m});return}wd(t)}function p(t,e,n={}){const r=String(t||"").trim(),i=String(e||"").trim();if(!(!r||!i)){if(pt.set(r,i),St.has(r)&&(window.clearTimeout(St.get(r)),St.delete(r)),n.ttlMs&&Number(n.ttlMs)>0){const s=window.setTimeout(()=>{ti(r)},Number(n.ttlMs));St.set(r,s)}un()}}function ti(t){const e=String(t||"").trim();if(!!e){if(pt.delete(e),St.has(e)&&(window.clearTimeout(St.get(e)),St.delete(e)),K===e){ii(()=>{K="",un()});return}un()}}function un(){const t=ni();if(t.length===0){Bt?ii(zn):zn();return}!Bt&&!Nt&&ri(t[0])}function ni(){return Array.from(pt.keys())}function Uc(){const t=ni();if(t.length===0)return"";if(!K)return t[0];const e=t.indexOf(K);return e<0?t[0]:t[(e+1)%t.length]}function ri(t){const e=document.querySelector("#statusMessageTrack");if(!e||!pt.has(t)){zn();return}oi();const n=pt.get(t);K=t,Bt=!0,Nt=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=n,e.style.setProperty("--message-fade-duration",`${Xs}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",Nt=!1,kp()},{once:!0})})}function kp(){const t=ni();if(!K||!pt.has(K)){un();return}if(t.length<=1){Es(!1);return}Es(!0)}function Es(t){const e=document.querySelector("#statusMessageViewport"),n=document.querySelector("#statusMessageTrack");if(!e||!n)return;const r=Math.max(0,n.scrollWidth-e.clientWidth);if(r<=0){t&&Yn(()=>{ii(()=>{const i=Uc();K="",i?ri(i):zn()})},to);return}Yn(()=>{Vc(r,t)},Zs)}function Vc(t,e){const n=document.querySelector("#statusMessageTrack");if(!n||!K||!pt.has(K))return;const r=Math.max(4,Math.ceil(t/qd));n.style.setProperty("--long-scroll-distance",`${t}px`),n.style.setProperty("--long-scroll-duration",`${r}s`),n.classList.add("long-scroll"),n.addEventListener("animationend",()=>{if(n.classList.remove("long-scroll"),n.style.transform=`translateX(-${t}px) translateY(-50%)`,e){Yn(()=>{ii(()=>{const i=Uc();K="",i?ri(i):zn()})},to);return}Yn(()=>{vp()},Cd)},{once:!0})}function vp(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!K||!pt.has(K))return;if(ni().length!==1){un();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const r=Math.max(0,e.scrollWidth-t.clientWidth);r<=0||Yn(()=>{Vc(r,!1)},Zs)}function ii(t){const e=document.querySelector("#statusMessageTrack");if(oi(),!e||!Bt){typeof t=="function"&&t();return}Nt=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${Xs}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",Bt=!1,Nt=!1,typeof t=="function"&&t()},{once:!0})}function zn(){const t=document.querySelector("#statusMessageTrack");oi(),K="",Bt=!1,Nt=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function Yn(t,e){const n=window.setTimeout(()=>{qn=qn.filter(r=>r!==n),t()},e);qn.push(n)}function oi(){for(const t of qn)window.clearTimeout(t);qn=[]}function Hc(){if(!Bt||Nt||!K)return;const t=K;oi(),ri(t)}function ft(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(u!=null&&u.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!U()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${_e()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${_e()}`)}}async function Tt(t={}){try{if(H()){const e=await md();ot=e,!t.silent&&(e==null?void 0:e.message)&&p(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:m});return}ot=await gd(),ti("file-watcher")}catch(e){p("file-watcher-error",w(e),{ttlMs:m})}}function Tn(t,e=null){const n="[GuildSync File Watcher]";if(e){console.log(`${n} ${t}`,e);return}console.log(`${n} ${t}`)}function Sp(t={}){if(!H()){Tn("SavedVariables change ignored because the account cannot edit data.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",n=e.toLowerCase(),r=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=String(t.filePath||"").trim(),o=r?`${r} saved variables (${i})`:i;Tn(`SavedVariables change detected: ${i}${s?` (${s})`:""}. Key: ${n}.`,t),p(`saved-vars-file-updated-${e}`,`${o} has been updated.`,{ttlMs:m}),n==="banking"&&(Tn(`Processing banking SavedVariables update from ${i}.`),wp(t)),n==="roster"&&(Tn(`Processing roster SavedVariables update from ${i}.`),_p(t)),n==="applications"&&(Tn(`Processing applications SavedVariables update from ${i}.`),Zf(t))}async function wp(t={}){await Oh(t),await Ec(t)}async function _p(t={}){await Wf(t)}function Ap(t){!U()||p("file-watcher-error",w(t),{ttlMs:m})}function Lp(){En("guildsync-savedvars-file-modified",Sp),En("guildsync-file-watcher-error",Ap),En("guildsync-login-complete",async t=>{k=t||{logged_in:!1,allowed:!1},On(),Pn(),await Tt(),p("auth",k.status_message||`Logged in and authorized as ${_e()}.`,{ttlMs:m})}),En("guildsync-login-denied",async t=>{k={logged_in:!1,allowed:!1,status_message:""},On(),await Tt(),p("auth",t||"Access denied.",{ttlMs:m}),Pn()}),En("guildsync-login-failed",async t=>{k={logged_in:!1,allowed:!1,status_message:""},On(),await Tt(),p("auth",t||"Login failed.",{ttlMs:m}),Pn()})}function U(){return Boolean((k==null?void 0:k.logged_in)&&(k==null?void 0:k.allowed)&&(k==null?void 0:k.token))}function Y(){var t;return U()&&Fn((t=k.user)==null?void 0:t.role)}function H(){var t;return U()&&$s((t=k.user)==null?void 0:t.role)}function ht(){var t;return U()&&zc((t=k.user)==null?void 0:t.role)}function _e(){var t,e;return((t=k.user)==null?void 0:t.display_name)||((e=k.user)==null?void 0:e.username)||"Discord User"}function Ep(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),n=String(t.discord_user_id||"").trim();if(!e||!n)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=128`}function Wc(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function $p(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Rp(){$n&&($n.disconnect(),$n=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),n=Math.round(t.getBoundingClientRect().height);$n=new ResizeObserver(r=>{const i=r[0];if(!i)return;const s=Math.round(i.contentRect.width),o=Math.round(i.contentRect.height);s===e&&o===n||(e=s,n=o,jc(),Hc())}),$n.observe(t)}function jc(){clearTimeout(es),es=setTimeout(async()=>{try{await Ws()}catch{}},500)}function w(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function c(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function h(t){return c(t)}Lp();Od();Lu();
