(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const ze=t=>String(t!=null?t:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),tr=t=>!Number(t.allowed)||t.role==="pending",bc=t=>{var e,n;return{allowed:Number(t.allowed),role:t.role,email:(e=t.email)!=null?e:"",guild_member_name:(n=t.guild_member_name)!=null?n:""}};function yc(t){return Number(t)>0?`<span class="user-pending-badge" aria-hidden="true">${Number(t)>99?"99+":Number(t)}</span>`:""}function kc(t,e,n={}){var o,a,l,d,y;const r=t.discord_user_id===e,i=(o=n.role)!=null?o:["user","admin"].includes(t.role)?t.role:"user",s=ze(t.discord_user_id);return`<form class="user-admin-card" data-user-id="${s}">
  <header><div><h3>${ze(t.guild_member_name||t.global_name||t.username||t.discord_user_id)}${r?" (You)":""}</h3><p>${ze(t.username)} \xB7 Discord ID: ${s}</p></div><span class="user-admin-status ${tr(t)?"is-pending":""}">${tr(t)?"Pending approval":"Approved"}</span></header>
  <fieldset class="user-admin-fields"><label>Email<input name="email" type="email" maxlength="255" value="${ze((l=(a=n.email)!=null?a:t.email)!=null?l:"")}" placeholder="Not configured"></label>
   <label>Guild member name<input name="guild_member_name" maxlength="255" value="${ze((y=(d=n.guild_member_name)!=null?d:t.guild_member_name)!=null?y:"")}" placeholder="ESO / guild display name"></label>
   ${r?`<div class="user-admin-own-role">Role: ${ze(t.role)}<small>Your role cannot be changed here.</small></div>`:`<label>Role<select name="role"><option value="user" ${i==="user"?"selected":""}>User</option><option value="admin" ${i==="admin"?"selected":""}>Admin</option></select></label>`}
  </fieldset>
  <p class="user-admin-dates">Requested: ${ze(t.requested_at||"Not recorded")} \xB7 Last login: ${ze(t.last_login_at||"Never")}</p>
  <div class="user-admin-actions"><button type="submit">Save changes</button>${!r&&tr(t)?'<button type="button" data-user-approve>Approve account</button>':""}${r?"":'<button type="button" class="user-admin-remove" data-user-remove>Remove account</button>'}</div>
 </form>`}function vc({request:t,getUser:e,onCount:n=()=>{}}){let r=[],i=0,s=null,o=null,a=!1,l=!1,d="",y="all",p=0,b=0,w=null;const S=new Map,_=()=>{var A;return((A=e())==null?void 0:A.role)==="admin"},B=A=>{i=Math.max(0,Math.floor(Number(A)||0)),n(_()?i:0)},v=A=>{const D=o==null?void 0:o.querySelector("[data-user-admin-message]");D&&(D.textContent=A)},O=A=>{l=A,o==null||o.querySelectorAll("fieldset,[data-user-admin-refresh],.user-admin-actions button,.user-admin-confirmation button").forEach(D=>D.disabled=A)},H=async()=>{if(!_()){B(0);return}const A=p,D=b;try{const E=await t("guildsync:request-pending-users",{});A===p&&D===b&&_()&&(E==null?void 0:E.ok)&&B(E.pending_count)}catch{}},Z=A=>{var V,N;const D=new FormData(A),E={email:String((V=D.get("email"))!=null?V:""),guild_member_name:String((N=D.get("guild_member_name"))!=null?N:"")};return D.has("role")&&(E.role=String(D.get("role"))),E},Tt=async(A,D)=>{if(l||!_())return;const E=r.find(P=>P.discord_user_id===A.dataset.userId);if(!E)return;const V=p,N={action:D,discord_user_id:E.discord_user_id,expected:bc(E),...D==="remove"?{}:Z(A)};O(!0),v("Saving account changes...");try{const P=await t("guildsync:change-user",N);if(!(P!=null&&P.ok))throw Error((P==null?void 0:P.message)||"Could not update this account.");if(V!==p||!_())return;S.delete(E.discord_user_id),P.removed?r=r.filter(_e=>_e.discord_user_id!==E.discord_user_id):r=r.map(_e=>_e.discord_user_id===E.discord_user_id?P.user:_e),H(),je(),v(D==="remove"?"Account removed and login sessions cleared.":D==="approve"?"Account approved. The user can sign in now.":"Account changes saved.")}catch(P){V===p&&v(P.message)}finally{V===p&&O(!1)}},Kn=A=>{var E;(E=o==null?void 0:o.querySelector(".user-admin-confirmation"))==null||E.remove();const D=document.createElement("div");D.className="user-admin-confirmation",D.innerHTML='<p>Remove this GuildSync login record and sign out the user? Their next Discord login will create a new pending request.</p><button type="button" data-confirm-remove>Remove account</button><button type="button" data-cancel-remove>Cancel</button>',A.append(D),D.querySelector("[data-confirm-remove]").addEventListener("click",()=>void Tt(A,"remove")),D.querySelector("[data-cancel-remove]").addEventListener("click",()=>D.remove()),D.querySelector("button").focus()};function je(){if(!o)return;const A=o.querySelector(".user-admin-list"),D=A.scrollTop,E=d.trim().toLowerCase(),V=r.filter(N=>(y!=="pending"||tr(N))&&(!E||[N.username,N.global_name,N.guild_member_name,N.email,N.discord_user_id,N.role].some(P=>String(P!=null?P:"").toLowerCase().includes(E))));A.innerHTML=V.map(N=>kc(N,e().discord_user_id,S.get(N.discord_user_id))).join("")||"<p>No matching accounts.</p>",o.querySelector("[data-user-admin-count]").textContent=`${V.length} account${V.length===1?"":"s"} \xB7 ${i} pending`,A.querySelectorAll("[data-user-id]").forEach(N=>{var P,_e;N.addEventListener("input",()=>S.set(N.dataset.userId,Z(N))),N.addEventListener("submit",Jn=>{Jn.preventDefault(),Tt(N,"save")}),(P=N.querySelector("[data-user-approve]"))==null||P.addEventListener("click",()=>void Tt(N,"approve")),(_e=N.querySelector("[data-user-remove]"))==null||_e.addEventListener("click",()=>Kn(N))}),A.scrollTop=D,O(l)}const kn=async()=>{if(a||l||!_())return;a=!0,O(!0),v("Loading GuildSync accounts...");const A=p,D=b;try{const E=await t("guildsync:request-users",{});if(!(E!=null&&E.ok))throw Error((E==null?void 0:E.message)||"Could not load accounts.");if(A!==p||!_())return;r=E.users,S.clear(),D===b&&B(E.pending_count),je(),v("Only admins can manage accounts. Your own role and account removal are protected.")}catch(E){A===p&&v(E.message)}finally{A===p&&(a=!1,O(!1))}},mt=()=>{l&&!a||(o==null||o.remove(),o=null,w!=null&&w.isConnected&&w.focus({preventScroll:!0}))};return{open:()=>{!_()||o||(w=document.activeElement,o=document.createElement("div"),o.className="user-admin-overlay",o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),o.setAttribute("aria-labelledby","userAdminTitle"),o.innerHTML='<section class="user-admin-dialog"><header class="user-admin-header"><div><h2 id="userAdminTitle">Manage GuildSync Users</h2><p>Review access requests and maintain GuildSync login records.</p></div><button type="button" data-user-admin-close aria-label="Close user administration">Close</button></header><p role="status" data-user-admin-message></p><div class="user-admin-toolbar"><label>Search accounts<input type="search" data-user-admin-search placeholder="Name, email, role, or Discord ID"></label><label>Show<select data-user-admin-filter><option value="all">All accounts</option><option value="pending">Pending approval</option></select></label><button type="button" data-user-admin-refresh>Refresh list (discard edits)</button><span data-user-admin-count></span></div><div class="user-admin-list"></div></section>',document.body.append(o),o.querySelector("[data-user-admin-search]").value=d,o.querySelector("[data-user-admin-filter]").value=y,o.querySelector("[data-user-admin-close]").addEventListener("click",mt),o.querySelector("[data-user-admin-refresh]").addEventListener("click",()=>void kn()),o.querySelector("[data-user-admin-search]").addEventListener("input",A=>{d=A.target.value,je()}),o.querySelector("[data-user-admin-filter]").addEventListener("change",A=>{y=A.target.value,je()}),o.addEventListener("keydown",A=>{if(A.key==="Escape"&&(A.preventDefault(),A.stopImmediatePropagation(),mt()),A.key==="Tab"){const D=[...o.querySelectorAll("button,input,select")].filter(N=>!N.disabled&&N.offsetParent!==null),E=D[0],V=D.at(-1);A.shiftKey&&document.activeElement===E?(A.preventDefault(),V==null||V.focus()):!A.shiftKey&&document.activeElement===V&&(A.preventDefault(),E==null||E.focus())}}),o.querySelector("[data-user-admin-close]").focus(),S.size?(je(),v("Unsaved edits restored. Refresh the list to discard them and retrieve current records.")):kn())},close:mt,refreshCount:H,get count(){return i},get isOpen(){return!!o},stop(){clearInterval(s),s=null},start(){clearInterval(s),_()&&(H(),s=setInterval(()=>void H(),6e4))},changed(A){!_()||(b++,B(A.pending_count),o&&v("Accounts changed. Refresh the list for current records; unsaved edits are preserved."))},reset(){p++,clearInterval(s),s=null,l=!1,a=!1,mt(),r=[],S.clear(),d="",y="all",B(0)}}}function Do(t,e,n,r=()=>{}){if(!t||!e)return;const i=a=>{var l;return(l=a.getAttribute(n))!=null?l:"__empty__"},s=new Map(Array.from(t.children).map(a=>[i(a),a])),o=new Set;Array.from(e.children).forEach((a,l)=>{let d=s.get(i(a));if(!d)d=a.cloneNode(!0),r(d);else if(!d.isEqualNode(a)){for(const y of Array.from(d.attributes))a.hasAttribute(y.name)||d.removeAttribute(y.name);for(const y of Array.from(a.attributes))d.getAttribute(y.name)!==y.value&&d.setAttribute(y.name,y.value);for(Array.from(a.children).forEach((y,p)=>{const b=d.children[p];if(b!=null&&b.isEqualNode(y))return;const w=y.cloneNode(!0);b?b.replaceWith(w):d.append(w),r(w)});d.children.length>a.children.length;)d.lastElementChild.remove()}t.children[l]!==d&&t.insertBefore(d,t.children[l]||null),o.add(d)});for(const a of Array.from(t.children))o.has(a)||a.remove()}function $n(t,e){t&&e&&!t.isEqualNode(e)&&(t.innerHTML=e.innerHTML)}function En(t,e){t&&e&&t.textContent!==e.textContent&&(t.textContent=e.textContent)}const q=t=>String(t!=null?t:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Sc(){return{open:"",toggle(t){this.open=this.open===t?"":t},close(){this.open=""}}}function Mi(t,e){var n;return t.type==="boolean"?String(e).toLowerCase()===String(t.defaultValue).toLowerCase():t.type==="number"?String(e).trim()!==""&&Number(e)===Number(t.defaultValue):String(e!=null?e:"")===String((n=t.defaultValue)!=null?n:"")}function Mo(t,e){const r=Object.hasOwn(e,t.key)?e[t.key]===null?t.defaultValue:e[t.key]:t.value,i=!Mi(t,r);return{value:r,override:i,source:i?"Overridden":"Default"}}function nr(t,e){return t.type==="boolean"?e===!0||String(e).toLowerCase()==="true"?"Enabled":"Disabled":t.type==="select"?{private_thread:"Private thread (public fallback)",channel:"Channel or thread"}[e]||String(e):e==null||e===""?"Not configured":String(e)}function To(t,{body:e=!1}={}){const n={recipient:"@ExampleMember",account_name:"@ExampleMember",display_name:"@ExampleMember",amount:"10,001",deposit_amount:"10,001",raw_amount:"10001",raw_deposit_amount:"10001",event_id:"123456789",ticket_quantity:"20",tickets:"20",purchased_tickets:"20",bonus_percent:"20",bonus_tickets:"4",total_tickets:"24",bonus_deadline:"October 9, 2026 at 7:00 PM Eastern",bonus_block:`Early Purchase Bonus: 20% for purchases before October 9, 2026 at 7:00 PM ET.
Bonus Tickets: 4
Total Tickets: 24`,note:"",note_block:"",ticket_type:"Bi-Weekly",ticket_type_raw:"biweekly",transaction_type:"biweekly",ticket_gold_cost:"10,001",gold_cost:"10,001",raw_gold_cost:"10001",raw_ticket_gold_cost:"10001",purchase_date:"October 5, 2026",data_source:"Guild bank",event_datetime:"2026-10-05T12:00:00Z",event_timestamp:"1791201600",raffle_datetime_eastern:"October 10, 2026 at 8:00 PM Eastern",raffle_date_time_eastern:"October 10, 2026 at 8:00 PM Eastern",raffle_datetime:"October 10, 2026 at 8:00 PM Eastern",mail_request_id:"example",mail_batch_id:"example"},r=String(t).replace(/{([a-zA-Z0-9_]+)}/g,(i,s)=>{var o;return(o=n[s])!=null?o:i});return e&&!String(t).includes("{bonus_block}")?r+`

`+n.bonus_block:r}function as(t,{refresh:e=!1,root:n=document}={}){const r=()=>{for(const o of document.querySelectorAll("[data-report-toggle]")){const a=o.dataset.reportToggle===t.open;o.setAttribute("aria-expanded",String(a));const l=document.getElementById(o.getAttribute("aria-controls"));l&&(l.classList.toggle("is-open",a),l.inert=!a)}};for(const o of n.querySelectorAll("[data-report-toggle]"))o.addEventListener("click",()=>{t.toggle(o.dataset.reportToggle),r()});for(const o of n.querySelectorAll('.reports-panel .report-run-button:not([type="submit"])'))o.addEventListener("click",()=>{t.close(),r()});const i=e?Array.from(document.querySelectorAll(".report-section-content")):[],s=i.map(o=>o.style.transition);for(const o of i)o.style.transition="none";r();for(const o of i)o.offsetHeight;i.forEach((o,a)=>o.style.transition=s[a])}const ri=t=>t.type==="boolean"||t.type==="select"&&t.options.length===2;function wc(t,e){return nr(t,e)+(ri(t)&&Mi(t,e)?" (Default)":"")}function _c({canEdit:t=()=>!1}={}){let e=null,n={},r=!1,i="",s=!1;const o=(d,y)=>{if(!t())return`<output class="configuration-readonly-value" id="config-${q(d.key)}" aria-describedby="config-help-${q(d.key)}">${q(nr(d,y.value))}</output>`;const p=`data-config-value="${q(d.key)}" id="config-${q(d.key)}" aria-describedby="config-help-${q(d.key)}" `;if(d.type==="boolean"||d.type==="select"){const b=d.type==="boolean"?["true","false"]:d.options;return`<select ${p}>${b.map(w=>`<option value="${q(w)}" ${String(w)===String(y.value)?"selected":""}>${q(wc(d,w))}</option>`).join("")}</select>`}return d.type==="template"?`<textarea ${p} rows="${d.key.includes("BODY")?9:3}" maxlength="${d.maxLength}">${q(y.value)}</textarea>`:`<input ${p} type="${d.type==="number"?"number":"text"}" ${d.type==="number"?`min="${d.min}" max="${d.max}" step="any"`:""} value="${q(y.value)}" placeholder="Not configured">`};return{render:()=>{const d=t(),y=e?[...new Set(e.settings.map(p=>p.group))]:[];return`<article class="report-option-card admin-configuration-card"><div class="report-option-copy">
   <h3><button type="button" class="report-section-toggle" data-report-toggle="configuration" aria-expanded="false" aria-controls="adminConfigurationContent">Administrator Configuration <span aria-hidden="true">\u25BE</span></button></h3>
   <div id="adminConfigurationContent" class="report-section-content" inert><div class="report-section-inner">
   ${d?"<p>Edit any setting to override its default. Changes take effect only after Save. Choose the option marked (Default) to restore a two-choice setting, or use Return to default for other fields. Settings apply live; active deliveries finish safely.</p>":'<p class="configuration-readonly-notice">Read-only. You can view current settings and defaults. Admin access is required to change Administrator Configuration or raffle bonus settings.</p>'}
   <p role="status" class="configuration-status">${q(i)}</p>
   ${e?`
   ${e.botDefaultsReported?"":"<p>Bot defaults have not been reported yet. Connect the updated bot before editing its settings.</p>"}
   <form id="adminConfigurationForm">
    ${y.map((p,b)=>{const w=e.settings.filter(_=>_.group===p),S=[...new Set(w.map(_=>_.section||""))];return`<fieldset class="configuration-group" ${s?"disabled":""}><legend>${q(p)}</legend>
      ${S.map((_,B)=>`<section class="configuration-subgroup" ${_?`aria-labelledby="config-section-${b}-${B}"`:""}>
       ${_?`<h4 id="config-section-${b}-${B}">${q(_)}</h4>`:""}
       ${w.filter(v=>(v.section||"")===_).map(v=>{const O=Mo(v,d?n:{});return`<div class="configuration-setting" role="group" aria-labelledby="config-label-${q(v.key)}">
         <div class="configuration-setting-header"><label id="config-label-${q(v.key)}" for="config-${q(v.key)}">${q(v.label)}</label><span class="configuration-source" data-config-source="${q(v.key)}">${q(O.source)}</span></div>
         <small class="configuration-env-key">.env: <code>${q(v.key)}</code></small>
         <p class="configuration-help" id="config-help-${q(v.key)}">${q(v.help||"Changes this setting after you save the configuration.")}</p>
         <div class="configuration-values${d&&ri(v)?" configuration-two-options":""}">
          <div class="configuration-selected-value"><span>${d?"Current selection":"Current value"}</span>${o(v,O)}</div>
          ${d&&ri(v)?"":`<div class="configuration-default-value"><span>Default value</span><output>${q(nr(v,v.defaultValue))}</output>${d?`<button type="button" class="configuration-default" data-config-default="${q(v.key)}" aria-label="Return ${q(v.label)} to default: ${q(nr(v,v.defaultValue))}">Return to default</button>`:""}</div>`}
         </div>
         ${v.placeholders?`<small>Placeholders: ${v.placeholders.map(H=>q("{"+H+"}")).join(", ")}</small>`:""}
         ${v.group==="Receipt messages"?`<label>Example preview (20% bonus)<pre data-config-preview="${q(v.key)}">${q(To(O.value,{body:v.key.endsWith("BODY_TEMPLATE")}))}</pre></label>`:""}
        </div>`}).join("")}
      </section>`).join("")}
     </fieldset>`}).join("")}
    <div class="configuration-actions">${d?`<button type="submit" ${s?"disabled":""}>${s?"Saving...":"Save Configuration"}</button>`:""}<button type="button" id="reloadAdminConfiguration" ${s?"disabled":""}>${d?"Discard edits and reload":"Refresh configuration"}</button></div>
   </form>`:`<p>${r?"Loading configuration...":"Configuration is not loaded."}</p><button type="button" id="reloadAdminConfiguration">Load configuration</button>`}
   </div></div></div></article>`},wire:({request:d,rerender:y})=>{var b,w;const p=async()=>{if(!r){r=!0,i="";try{const S=await d("guildsync:request-admin-configuration",{});if(!(S!=null&&S.ok))throw Error((S==null?void 0:S.message)||"Could not load configuration.");e=S.configuration,n={}}catch(S){i=S.message}finally{r=!1,y()}}};if(!e&&!r&&!i&&p(),(b=document.getElementById("reloadAdminConfiguration"))==null||b.addEventListener("click",()=>void p()),!!t()){for(const S of document.querySelectorAll("[data-config-value]"))S.addEventListener("input",()=>{if(!t())return;const _=S.dataset.configValue,B=e.settings.find(H=>H.key===_);n[_]=Mi(B,S.value)?null:S.value;const v=document.querySelector(`[data-config-source="${_}"]`);v&&(v.textContent=Mo(B,n).source);const O=document.querySelector(`[data-config-preview="${_}"]`);O&&(O.textContent=To(S.value,{body:_.endsWith("BODY_TEMPLATE")}))});for(const S of document.querySelectorAll("[data-config-default]"))S.addEventListener("click",()=>{!t()||(n[S.dataset.configDefault]=null,y())});(w=document.getElementById("adminConfigurationForm"))==null||w.addEventListener("submit",async S=>{var B;if(S.preventDefault(),!t()||s)return;if(!Object.keys(n).length){i="No changes to save.",y();return}s=!0,i="";const _={...n};y(),(B=document.getElementById("adminConfigurationForm"))==null||B.querySelectorAll("input,select,textarea,button").forEach(v=>v.disabled=!0);try{const v=await d("guildsync:save-admin-configuration",{revision:e.revision,changes:_});if(!(v!=null&&v.ok))throw Error((v==null?void 0:v.message)||"Could not save configuration.");e=v.configuration,n={},i="Configuration saved. Backend settings are active; the connected bot applies its settings after active deliveries finish. An offline bot applies them when it reconnects."}catch(v){i=v.message}finally{s=!1,y()}})}},clear(){e=null,n={},i=""}}}const Ac="/assets/splash.ea386b6a.png",Lc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",$c="/assets/GuildSync-Graphic.9169020d.png",Te=Object.create(null);Te.open="0";Te.close="1";Te.ping="2";Te.pong="3";Te.message="4";Te.upgrade="5";Te.noop="6";const rr=Object.create(null);Object.keys(Te).forEach(t=>{rr[Te[t]]=t});const ii={type:"error",data:"parser error"},cs=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",ls=typeof ArrayBuffer=="function",ds=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Ti=({type:t,data:e},n,r)=>cs&&e instanceof Blob?n?r(e):Bo(e,r):ls&&(e instanceof ArrayBuffer||ds(e))?n?r(e):Bo(new Blob([e]),r):r(Te[t]+(e||"")),Bo=(t,e)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];e("b"+(r||""))},n.readAsDataURL(t)};function No(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let Wr;function Ec(t,e){if(cs&&t.data instanceof Blob)return t.data.arrayBuffer().then(No).then(e);if(ls&&(t.data instanceof ArrayBuffer||ds(t.data)))return e(No(t.data));Ti(t,!1,n=>{Wr||(Wr=new TextEncoder),e(Wr.encode(n))})}const Co="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Rn=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<Co.length;t++)Rn[Co.charCodeAt(t)]=t;const Rc=t=>{let e=t.length*.75,n=t.length,r,i=0,s,o,a,l;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const d=new ArrayBuffer(e),y=new Uint8Array(d);for(r=0;r<n;r+=4)s=Rn[t.charCodeAt(r)],o=Rn[t.charCodeAt(r+1)],a=Rn[t.charCodeAt(r+2)],l=Rn[t.charCodeAt(r+3)],y[i++]=s<<2|o>>4,y[i++]=(o&15)<<4|a>>2,y[i++]=(a&3)<<6|l&63;return d},Dc=typeof ArrayBuffer=="function",Bi=(t,e)=>{if(typeof t!="string")return{type:"message",data:us(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:Mc(t.substring(1),e)}:rr[n]?t.length>1?{type:rr[n],data:t.substring(1)}:{type:rr[n]}:ii},Mc=(t,e)=>{if(Dc){const n=Rc(t);return us(n,e)}else return{base64:!0,data:t}},us=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},fs=String.fromCharCode(30),Tc=(t,e)=>{const n=t.length,r=new Array(n);let i=0;t.forEach((s,o)=>{Ti(s,!1,a=>{r[o]=a,++i===n&&e(r.join(fs))})})},Bc=(t,e)=>{const n=t.split(fs),r=[];for(let i=0;i<n.length;i++){const s=Bi(n[i],e);if(r.push(s),s.type==="error")break}return r};function Nc(){return new TransformStream({transform(t,e){Ec(t,n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,r)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(r))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(n)})}})}let jr;function Qn(t){return t.reduce((e,n)=>e+n.length,0)}function Xn(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let r=0;for(let i=0;i<e;i++)n[i]=t[0][r++],r===t[0].length&&(t.shift(),r=0);return t.length&&r<t[0].length&&(t[0]=t[0].slice(r)),n}function Cc(t,e){jr||(jr=new TextDecoder);const n=[];let r=0,i=-1,s=!1;return new TransformStream({transform(o,a){for(n.push(o);;){if(r===0){if(Qn(n)<1)break;const l=Xn(n,1);s=(l[0]&128)===128,i=l[0]&127,i<126?r=3:i===126?r=1:r=2}else if(r===1){if(Qn(n)<2)break;const l=Xn(n,2);i=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),r=3}else if(r===2){if(Qn(n)<8)break;const l=Xn(n,8),d=new DataView(l.buffer,l.byteOffset,l.length),y=d.getUint32(0);if(y>Math.pow(2,53-32)-1){a.enqueue(ii);break}i=y*Math.pow(2,32)+d.getUint32(4),r=3}else{if(Qn(n)<i)break;const l=Xn(n,i);a.enqueue(Bi(s?l:jr.decode(l),e)),r=0}if(i===0||i>t){a.enqueue(ii);break}}}})}const hs=4;function U(t){if(t)return qc(t)}function qc(t){for(var e in U.prototype)t[e]=U.prototype[e];return t}U.prototype.on=U.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};U.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};U.prototype.off=U.prototype.removeListener=U.prototype.removeAllListeners=U.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===e||r.fn===e){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+t],this};U.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,e)}return this};U.prototype.emitReserved=U.prototype.emit;U.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};U.prototype.hasListeners=function(t){return!!this.listeners(t).length};const Lr=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0))(),oe=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),xc="arraybuffer";function ms(t,...e){return e.reduce((n,r)=>(t.hasOwnProperty(r)&&(n[r]=t[r]),n),{})}const Ic=oe.setTimeout,Oc=oe.clearTimeout;function $r(t,e){e.useNativeTimers?(t.setTimeoutFn=Ic.bind(oe),t.clearTimeoutFn=Oc.bind(oe)):(t.setTimeoutFn=oe.setTimeout.bind(oe),t.clearTimeoutFn=oe.clearTimeout.bind(oe))}const Pc=1.33;function Fc(t){return typeof t=="string"?Gc(t):Math.ceil((t.byteLength||t.size)*Pc)}function Gc(t){let e=0,n=0;for(let r=0,i=t.length;r<i;r++)e=t.charCodeAt(r),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(r++,n+=4);return n}function ps(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Uc(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function Hc(t){let e={},n=t.split("&");for(let r=0,i=n.length;r<i;r++){let s=n[r].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class Vc extends Error{constructor(e,n,r){super(e),this.description=n,this.context=r,this.type="TransportError"}}class Ni extends U{constructor(e){super(),this.writable=!1,$r(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,r){return super.emitReserved("error",new Vc(e,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=Bi(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=Uc(e);return n.length?"?"+n:""}}class Wc extends Ni{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};Bc(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Tc(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=ps()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let gs=!1;try{gs=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const jc=gs;function zc(){}class Yc extends Wc{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let r=location.port;r||(r=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,n){const r=this.request({method:"POST",data:e});r.on("success",n),r.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=e}}class $e extends U{constructor(e,n,r){super(),this.createRequest=e,$r(this,r),this._opts=r,this._method=r.method||"GET",this._uri=n,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const n=ms(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(n);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var i;r.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=$e.requestsCount++,$e.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=zc,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete $e.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}$e.requestsCount=0;$e.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",qo);else if(typeof addEventListener=="function"){const t="onpagehide"in oe?"pagehide":"unload";addEventListener(t,qo,!1)}}function qo(){for(let t in $e.requests)$e.requests.hasOwnProperty(t)&&$e.requests[t].abort()}const Kc=function(){const t=bs({xdomain:!1});return t&&t.responseType!==null}();class Jc extends Yc{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=Kc&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new $e(bs,this.uri(),e)}}function bs(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||jc))return new XMLHttpRequest}catch{}if(!e)try{return new oe[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const ys=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Qc extends Ni{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,r=ys?{}:ms(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;Ti(r,this.supportsBinary,s=>{try{this.doWrite(r,s)}catch{}i&&Lr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=ps()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const zr=oe.WebSocket||oe.MozWebSocket;class Xc extends Qc{createSocket(e,n,r){return ys?new zr(e,n,r):n?new zr(e,n):new zr(e)}doWrite(e,n){this.ws.send(n)}}class Zc extends Ni{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=Cc(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(n).getReader(),i=Nc();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const s=()=>{r.read().then(({done:a,value:l})=>{a||(this.onPacket(l),s())}).catch(a=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;this._writer.write(r).then(()=>{i&&Lr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const el={websocket:Xc,webtransport:Zc,polling:Jc},tl=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,nl=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function oi(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),r=t.indexOf("]");n!=-1&&r!=-1&&(t=t.substring(0,n)+t.substring(n,r).replace(/:/g,";")+t.substring(r,t.length));let i=tl.exec(t||""),s={},o=14;for(;o--;)s[nl[o]]=i[o]||"";return n!=-1&&r!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=rl(s,s.path),s.queryKey=il(s,s.query),s}function rl(t,e){const n=/\/{2,9}/g,r=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function il(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,s){i&&(n[i]=s)}),n}const si=typeof addEventListener=="function"&&typeof removeEventListener=="function",ir=[];si&&addEventListener("offline",()=>{ir.forEach(t=>t())},!1);class tt extends U{constructor(e,n){if(super(),this.binaryType=xc,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const r=oi(e);n.hostname=r.host,n.secure=r.protocol==="https"||r.protocol==="wss",n.port=r.port,r.query&&(n.query=r.query)}else n.host&&(n.hostname=oi(n.host).host);$r(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(r=>{const i=r.prototype.name;this.transports.push(i),this._transportsByName[i]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Hc(this.opts.query)),si&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},ir.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=hs,n.transport=e,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&tt.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",tt.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(n+=Fc(i)),r>0&&n>this._maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Lr(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,r){return this._sendPacket("message",e,n,r),this}send(e,n,r){return this._sendPacket("message",e,n,r),this}_sendPacket(e,n,r,i){if(typeof n=="function"&&(i=n,n=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const s={type:e,data:n,options:r};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(tt.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),si&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=ir.indexOf(this._offlineEventListener);r!==-1&&ir.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}}tt.protocol=hs;class ol extends tt{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let n=this.createTransport(e),r=!1;tt.priorWebsocketSuccess=!1;const i=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",p=>{if(!r)if(p.type==="pong"&&p.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;tt.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(y(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const b=new Error("probe error");b.transport=n.name,this.emitReserved("upgradeError",b)}}))};function s(){r||(r=!0,y(),n.close(),n=null)}const o=p=>{const b=new Error("probe error: "+p);b.transport=n.name,s(),this.emitReserved("upgradeError",b)};function a(){o("transport closed")}function l(){o("socket closed")}function d(p){n&&p.name!==n.name&&s()}const y=()=>{n.removeListener("open",i),n.removeListener("error",o),n.removeListener("close",a),this.off("close",l),this.off("upgrading",d)};n.once("open",i),n.once("error",o),n.once("close",a),this.once("close",l),this.once("upgrading",d),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const n=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&n.push(e[r]);return n}}class sl extends ol{constructor(e,n={}){const r=typeof e=="object"?e:n;(!r.transports||r.transports&&typeof r.transports[0]=="string")&&(r.transports=(r.transports||["polling","websocket","webtransport"]).map(i=>el[i]).filter(i=>!!i)),super(e,r)}}function al(t,e="",n){let r=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),r=oi(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const s=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+s+":"+r.port+e,r.href=r.protocol+"://"+s+(n&&n.port===r.port?"":":"+r.port),r}const cl=typeof ArrayBuffer=="function",ll=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,ks=Object.prototype.toString,dl=typeof Blob=="function"||typeof Blob<"u"&&ks.call(Blob)==="[object BlobConstructor]",ul=typeof File=="function"||typeof File<"u"&&ks.call(File)==="[object FileConstructor]";function Ci(t){return cl&&(t instanceof ArrayBuffer||ll(t))||dl&&t instanceof Blob||ul&&t instanceof File}function or(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,r=t.length;n<r;n++)if(or(t[n]))return!0;return!1}if(Ci(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return or(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&or(t[n]))return!0;return!1}function fl(t){const e=[],n=t.data,r=t;return r.data=ai(n,e),r.attachments=e.length,{packet:r,buffers:e}}function ai(t,e){if(!t)return t;if(Ci(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let r=0;r<t.length;r++)n[r]=ai(t[r],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=ai(t[r],e));return n}return t}function hl(t,e){return t.data=ci(t.data,e),delete t.attachments,t}function ci(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=ci(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=ci(t[n],e));return t}const vs=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],ml=5;var $;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})($||($={}));class pl{constructor(e){this.replacer=e}encode(e){return(e.type===$.EVENT||e.type===$.ACK)&&or(e)?this.encodeAsBinary({type:e.type===$.EVENT?$.BINARY_EVENT:$.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===$.BINARY_EVENT||e.type===$.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=fl(e),r=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(r),i}}class qi extends U{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const r=n.type===$.BINARY_EVENT;r||n.type===$.BINARY_ACK?(n.type=r?$.EVENT:$.ACK,this.reconstructor=new gl(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(Ci(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const r={type:Number(e.charAt(0))};if($[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===$.BINARY_EVENT||r.type===$.BINARY_ACK){const s=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(s,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!Ss(a)||a<0)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=a}if(e.charAt(n+1)==="/"){const s=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););r.nsp=e.substring(s,n)}else r.nsp="/";const i=e.charAt(n+1);if(i!==""&&Number(i)==i){const s=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}r.id=Number(e.substring(s,n+1))}if(e.charAt(++n)){const s=this.tryParse(e.substr(n));if(qi.isPayloadValid(r.type,s))r.data=s;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case $.CONNECT:return ur(n);case $.DISCONNECT:return n===void 0;case $.CONNECT_ERROR:return typeof n=="string"||ur(n);case $.EVENT:case $.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&vs.indexOf(n[0])===-1);case $.ACK:case $.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class gl{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=hl(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function bl(t){return typeof t=="string"}const Ss=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function yl(t){return t===void 0||Ss(t)}function ur(t){return Object.prototype.toString.call(t)==="[object Object]"}function kl(t,e){switch(t){case $.CONNECT:return e===void 0||ur(e);case $.DISCONNECT:return e===void 0;case $.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&vs.indexOf(e[0])===-1);case $.ACK:return Array.isArray(e);case $.CONNECT_ERROR:return typeof e=="string"||ur(e);default:return!1}}function vl(t){return bl(t.nsp)&&yl(t.id)&&kl(t.type,t.data)}const Sl=Object.freeze(Object.defineProperty({__proto__:null,protocol:ml,get PacketType(){return $},Encoder:pl,Decoder:qi,isPacketValid:vl},Symbol.toStringTag,{value:"Module"}));function de(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const wl=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class ws extends U{constructor(e,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[de(e,"open",this.onopen.bind(this)),de(e,"packet",this.onpacket.bind(this)),de(e,"error",this.onerror.bind(this)),de(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var r,i,s;if(wl.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const o={type:$.EVENT,data:n};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const y=this.ids++,p=n.pop();this._registerAckCallback(y,p),o.id=y}const a=(i=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||i===void 0?void 0:i.writable,l=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!a||(l?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,n){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[e]=n;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);n.call(this,new Error("operation has timed out"))},i),o=(...a)=>{this.io.clearTimeoutFn(s),n.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...n){return new Promise((r,i)=>{const s=(o,a)=>o?i(o):r(a);s.withError=!0,n.push(s),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>(this._queue[0],i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(i)):(this._queue.shift(),n&&n(null,...s)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:$.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case $.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case $.EVENT:case $.BINARY_EVENT:this.onevent(e);break;case $.ACK:case $.BINARY_ACK:this.onack(e);break;case $.DISCONNECT:this.ondisconnect();break;case $.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let r=!1;return function(...i){r||(r=!0,n.packet({type:$.ACK,id:e,data:i}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:$.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,e.data)}}}function sn(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}sn.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-n:t+n}return Math.min(t,this.max)|0};sn.prototype.reset=function(){this.attempts=0};sn.prototype.setMin=function(t){this.ms=t};sn.prototype.setMax=function(t){this.max=t};sn.prototype.setJitter=function(t){this.jitter=t};class li extends U{constructor(e,n){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,$r(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new sn({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const i=n.parser||Sl;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new sl(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=de(n,"open",function(){r.onopen(),e&&e()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=de(n,"error",s);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),n.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(de(e,"ping",this.onping.bind(this)),de(e,"data",this.ondata.bind(this)),de(e,"error",this.onerror.bind(this)),de(e,"close",this.onclose.bind(this)),de(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){Lr(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new ws(this,e,n),this.nsps[e]=r),r}_destroy(e){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let r=0;r<n.length;r++)this.engine.write(n[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const vn={};function sr(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=al(t,e.path||"/socket.io"),r=n.source,i=n.id,s=n.path,o=vn[i]&&s in vn[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let l;return a?l=new li(r,e):(vn[i]||(vn[i]=new li(r,e)),l=vn[i]),n.query&&!e.query&&(e.query=n.queryKey),l.socket(n.path,e)}Object.assign(sr,{Manager:li,Socket:ws,io:sr,connect:sr});function _l(t){return window.go.main.App.CleanupDepositMailAckFromGuildSyncBanking(t)}function Al(){return window.go.main.App.CloseWindow()}function Ll(t){return window.go.main.App.CollectDepositMailAckFromGuildSyncBanking(t)}function $l(t){return window.go.main.App.CollectGuildSyncApplicationsData(t)}function El(t){return window.go.main.App.CollectGuildSyncBankingData(t)}function Rl(t){return window.go.main.App.CollectGuildSyncRosterData(t)}function Dl(t,e){return window.go.main.App.CommitGuildSyncApplicationsData(t,e)}function Ml(t,e){return window.go.main.App.CommitGuildSyncBankingData(t,e)}function Tl(t,e){return window.go.main.App.CommitGuildSyncRosterData(t,e)}function Bl(){return window.go.main.App.FlushPendingDepositMailAckCleanup()}function Nl(){return window.go.main.App.GetESORunningStatus()}function Cl(){return window.go.main.App.GetGuildSyncFileWatcherStatus()}function ql(){return window.go.main.App.GetGuildSyncSession()}function xl(){return window.go.main.App.LogoutGuildSync()}function Il(){return window.go.main.App.MaximizeWindow()}function Ol(){return window.go.main.App.MinimizeWindow()}function _s(){return window.go.main.App.SaveWindowState()}function Pl(t,e){return window.go.main.App.SetGuildSyncSavedVarsWatchFileEnabled(t,e)}function Fl(){return window.go.main.App.ShowMainWindow()}function Gl(){return window.go.main.App.StartDiscordLogin()}function Ul(){return window.go.main.App.StartGuildSyncFileWatcher()}function Hl(){return window.go.main.App.StopGuildSyncFileWatcher()}function Vl(t){return window.go.main.App.WriteDepositMailToGuildSyncBanking(t)}function Wl(t,e,n){return window.runtime.EventsOnMultiple(t,e,n)}function Sn(t,e){return Wl(t,e,-1)}function jl(t){window.runtime.BrowserOpenURL(t)}const Er="1.2.7",zl=30*60*1e3,As="guildsync-pending-banking-uploads",Ls="guildsync-pending-deposit-mail",Yl=5e3,Kl=30*1e3,$s="guildsync-pending-roster-uploads",Es="guildsync-pending-applications-uploads",g=60*1e3,Rs=7e3,Ds=1400,Ms=2400,Jl=4e3,Ql=38,Ts=document.querySelector("#app");let xo=null,wn=null,Io=!1,Gn=!1;const ge=vc({request:(t,e)=>R(t,e,3e4),getUser:()=>k.user,onCount:uo});let ar=null,Yr=!1,Kr=!1,Jr=!1,nt=null,te={running:!1,message:""},Bt=null,Nt=null,di=!1,Ct=!1,qt=null,Qr=!1,dt=new Map,gt=new Map,Y="",$t=!1,Et=!1,Dn=[],k={logged_in:!1,allowed:!1,status_message:""},Ye={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},u=null,ne=[],Rr=[],Dr=null,Vt=!1,fr=!1,hr="",xt=new Set,It=new Set,Cn="username",yt="asc",ui=null,fi=null,ce=[],mr=null,Ge=!1,hi=!1,pr="",mi=null,pi=null,kt=new Set,Ot=new Set,qe="",ee="",W=-1,Wt=!1,qn="",se=[],ut="",rt=[],it=!1,Ie="",Xr=null,ue=-1,an=!1,xn="",ot=[],gr=!1,vt=!1,st="",jt="",zt=!1,Ke="",ae=[],Yt="",Rt="",at=[],ct=!1,Oe="",Oo=null,pt=0;const Xl=650;let fe=-1,cn=!1,ln=[],Je=!1,St="",dn=!1,In=[],Qe=!1,wt="",ht=!1,xi=[],Xe=!1,_t="",un="",Ze="",Pt="",et="",C=[],z=!1,X="",Ve=!1,Mr="",bt="",Un="",Hn="",xe=-1,We=!1,M=null,At=[],Kt=!1,Ue="",Vn="",Ae=-1,fn=!1,Ii=null,Mn=null;const Oi=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let re=[],K=null,Le=null,me=!1;const Bs=Sc(),Pi=_c({canEdit:()=>{var t;return((t=k==null?void 0:k.user)==null?void 0:t.role)==="admin"}});let Jt=[],Pe="",Po=!1,F="biweekly",Ns=null,He=!1,Lt=!1,ke="biweekly",hn=!1,Qt=!1,Ne="",Ce=null,j={targetType:"other",note:"",tickets:""},mn=!1,Dt="",Q=[],be=[],Ee="",Re=!1,De="",Ft=null,he=-1,Fe=!1,br=!1,ie="",x={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},pn="",J=-1,pe=!1,gi={biweekly:0,monthly:0};const Zl=1780786800,ft=14*24*60*60,yr=60*60,kr=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let I=kr[0].id;const bi=new Set;function ed(){Ts.innerHTML=`
    <main class="splash-screen">
      <img src="${Ac}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await Fl(),await td(),Cs(),Nn(),await Ht()},5e3)}async function td(){try{k=await ql()}catch(t){k={logged_in:!1,allowed:!1,status_message:""},m("session-error",L(t),{ttlMs:g})}}function Cs(){Ts.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${Lc}" alt="" class="title-icon" />
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
            <img src="${$c}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${c(Er)}</div>
            </div>
          </div>
          <div class="compact-header-actions">
            <div id="desktopUpdateArea" class="desktop-update-area"></div>
            <div id="discordArea" class="discord-area"></div>
          </div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${qs()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content web-upload-banner-dismissed" aria-live="polite">
          ${Is()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await Ol()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await _s(),await Al()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await Il()}),Bn(),Di(),Ps(),rc(),Da(),Ua(),js(),Ea(),ba(),ya(),ka(),va(),sa(),Ma(),cd(),lt(),on(),Io||(window.addEventListener("resize",()=>{gc(),mc()}),Oh(),Io=!0)}function qs(){return kr.map(t=>{const e=t.id===I,n=nd(t.id,e),r=n?xs():0,i=n?`Deposit mail needs attention: ${r} item${r===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${n?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${h(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${h(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${rd(t.icon)}</span>
          <span class="guildsync-tab-label">${c(t.label)}</span>
          ${n?`<span class="guildsync-tab-mail-badge" aria-label="${h(i)}">${r>99?"99+":c(String(r))}</span>`:""}
        </button>
      `}).join("")}function xs(){return T()?qr()+zn()+Pa():0}function nd(t,e){return t!=="more"||e?!1:xs()>0}function rd(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function Is(){const t=kr.find(n=>n.id===I)||kr[0];let e="";return t.id==="discord-members"?e=Fs():t.id==="eso-members"?e=Gs():t.id==="more"?e=Oa():t.id==="settings"?e=Nd():e=`
      <div class="guildsync-tab-panel" data-active-tab="${h(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${c(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${Fe?Iu():""}
    ${hn?vf():""}
    ${mn?lf():""}
    ${We?Ru():""}
    ${cn?qd():""}
    ${dn?Gd():""}
    ${ht?Wd():""}
    ${Ve?ru():""}
    ${fn?ad():""}
  `}function id(){return ge.isOpen||fn||Wt||zt||Fe||hn||mn||We||an||cn||dn||ht||Ve||Lt}function od(){return fn?!1:Ve?(_i(),!0):ht?(wi(),!0):dn?(Si(),!0):cn?(vi(),!0):We?(Zt(),!0):an?($i(),!0):hn?(wr(),!0):mn?(Af(),f(),!0):Fe?(Fe=!1,f(),!0):Wt?(Wt=!1,f(),!0):zt?(zt=!1,f(),!0):Lt?(Lt=!1,f(),!0):!1}function sd(t){t.key==="Escape"&&od()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",sd,!0),window.guildSyncGlobalModalEscapeAttached=!0);function Fi(t={}){return new Promise(e=>{Mn&&Mn(!1),fn=!0,Ii={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},Mn=e,f()})}function vr(t=!1){const e=Mn;Mn=null,fn=!1,Ii=null,e&&e(t===!0),f()}function ad(){const t=Ii||{};return`
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
  `}function Fo(t){var r,i,s,o;const e=(i=(r=t.target).closest)==null?void 0:i.call(r,"#cancelGuildSyncConfirmButton"),n=(o=(s=t.target).closest)==null?void 0:o.call(s,"#acceptGuildSyncConfirmButton");if(!(!e&&!n)){if(t.preventDefault(),t.stopPropagation(),e){vr(!1);return}n&&vr(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",Fo,!0),document.addEventListener("pointerup",Fo,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function cd(){if(!fn)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=r=>{r.preventDefault(),r.stopPropagation(),vr(!1)}),e&&(e.onclick=r=>{r.preventDefault(),r.stopPropagation(),vr(!0)});const n=document.querySelector(".guildsync-confirm-overlay");n&&(n.onclick=r=>{r.target===n&&(r.preventDefault(),r.stopPropagation())})}function Os(t=I){if(!(u!=null&&u.connected))return;if(t==="discord-members"?Vt:t==="eso-members"?Ge:t==="more"?He:!1){bi.add(t);return}bi.delete(t),t==="discord-members"&&Or({silent:!0}),t==="eso-members"&&(hi=!0,gn({silent:!0})),t==="more"&&we({silent:!0})}function Wn(t){bi.has(t)&&Os(t)}function Ps(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(id())return;const e=t.dataset.tabId;if(!e)return;const n=e!==I;I=e,Os(),n&&f()})})}function ld(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function Gi(t){const e={x:window.scrollX,y:window.scrollY},n=[];for(let o=t;o;o=o.parentElement)n.push({element:o,top:o.scrollTop,left:o.scrollLeft});const r=t?Array.from(t.querySelectorAll("*")):[],i=(o,a)=>o.id?o.id===a.id:o.tagName===a.tagName&&o.className===a.className,s=r.filter(o=>o.scrollTop||o.scrollLeft).map(o=>({identity:{id:o.id,tagName:o.tagName,className:o.className},occurrence:r.filter(a=>i(o,a)).indexOf(o),top:o.scrollTop,left:o.scrollLeft}));return()=>{const o=t?Array.from(t.querySelectorAll("*")):[];for(const{identity:a,occurrence:l,top:d,left:y}of s){const p=o.filter(b=>i(a,b))[l];p&&(p.scrollTop=d,p.scrollLeft=y)}for(const{element:a,top:l,left:d}of n)a.scrollTop=l,a.scrollLeft=d;window.scrollTo({left:e.x,top:e.y,behavior:"instant"})}}function f(t={}){Ve&&ld();const e=document.querySelector(".guildsync-tabs"),n=document.querySelector("#guildSyncTabContent"),r=Gi(n);e&&(e.innerHTML=qs()),n&&(n.innerHTML=Is()),Ps(),rc(),Da(),Ua(),js(),Ea(),ba(),ya(),ka(),va(),sa(),Ma(),r(),t.restoreDiscordSearchFocus&&lh(),t.restoreRosterSearchFocus&&dh(),I==="discord-members"&&(u==null?void 0:u.connected)&&ne.length===0&&!Vt&&Or({silent:!0}),I==="eso-members"&&(u==null?void 0:u.connected)&&ce.length===0&&!Ge&&!hi&&(hi=!0,gn({silent:!0})),(I==="more"&&re.length===0||I==="settings"&&!K&&!Po)&&(u==null?void 0:u.connected)&&!He&&(Po=!0,we({silent:!0})),(I==="discord-members"||I==="eso-members"||I==="settings")&&(u==null?void 0:u.connected)&&C.length===0&&!z&&Tr({silent:!0})}function Fs(){const t=sh(),e=uh(),n=Array.from(xt),r=Array.from(It);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${c(oc(Dr))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${Vt||fr?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${fr?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${h(hr)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!xt.has(i)).map(i=>`<option value="${h(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All roles</span>':n.map(i=>ph(i)).join("")}
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
              ${Oi.filter(i=>!It.has(i.id)).map(i=>`<option value="${h(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>Us("discord",i)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${Zn("username","Username")}
                ${Zn("global_name","Global Name")}
                ${Zn("server_nickname","Server Nickname")}
                ${Zn("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>fh(i)).join(""):hh()}
            </tbody>
          </table>
        </div>
      </div>
      ${zt?$d():""}
    </div>
  `}function Gs(){const t=kd(),e=wd(),n=Array.from(kt),r=Array.from(Ot);return`
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
          <span class="discord-last-refresh">Last Refresh: ${c(Ku(mr))}</span>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${Ge?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Ge?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${h(pr)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!kt.has(i)).map(i=>`<option value="${h(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All ranks</span>':n.map(i=>_d(i)).join("")}
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
              ${Oi.filter(i=>!Ot.has(i.id)).map(i=>`<option value="${h(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>Us("roster",i)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${_n("account_name","Account Name")}
                ${_n("rank","Rank")}
                ${_n("joined","Joined")}
                ${_n("notes","Notes","roster-notes-header")}
                ${_n("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map((i,s)=>dd(i,s)).join(""):gd()}
            </tbody>
          </table>
        </div>
      </div>
      ${Wt?Md():""}
      ${an?fd():""}
    </div>
  `}function dd(t,e=-1){const n=bd(t.rank||""),r=n?` style="color: ${n};"`:"";return`
    <tr class="eso-roster-row${e===W?" roster-search-active-row":""}"${r} data-roster-row-index="${h(String(e))}" data-eso-account-name="${h(t.account_name||"")}">
      <td>${c(t.account_name||"")}</td>
      <td>${Ui(t.rank||"")}</td>
      <td>${c(Cr(t.joined))}</td>
      <td class="roster-notes-cell">${ud(t)}</td>
      <td class="member-link-action-cell">${fa({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function ud(t){const e=String((t==null?void 0:t.account_name)||"").trim(),n=Number((t==null?void 0:t.note_count)||0),r=n>0,i=r?`${n} roster note${n===1?"":"s"} for ${e}`:`No roster notes for ${e}`;return`
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
  `}function fd(){const t=xn||"",e=Boolean((k==null?void 0:k.logged_in)&&(k==null?void 0:k.allowed));return`
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
          ${st?`<div class="discord-data-error">${c(st)}</div>`:""}
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
                ${hd()}
              </tbody>
            </table>
          </div>
          ${e?md():'<div class="roster-history-muted">Log in to add a new note.</div>'}
        </div>
      </div>
    </div>
  `}function hd(){return gr?'<tr><td class="bank-empty-row" colspan="3">Loading notes...</td></tr>':!Array.isArray(ot)||ot.length===0?'<tr><td class="bank-empty-row" colspan="3">No notes recorded for this member.</td></tr>':ot.map(t=>`
      <tr>
        <td class="roster-notes-when-cell">${c(pd(t.timestamp))}</td>
        <td class="roster-notes-officer-cell">${c(t.officer||"")}</td>
        <td class="roster-notes-note-cell">${c(t.note||"")}</td>
      </tr>
    `).join("")}function md(){return`
    <div class="roster-notes-form">
      <label for="rosterNotesNewNote">Add Note</label>
      <textarea
        id="rosterNotesNewNote"
        class="roster-notes-textarea"
        rows="4"
        placeholder="Enter a new roster note..."
        ${vt?"disabled":""}
      >${c(jt)}</textarea>
      <button id="saveRosterNoteButton" class="refresh-discord-button" type="button" ${vt?"disabled":""}>
        ${vt?"Saving...":"Save Note"}
      </button>
    </div>
  `}function pd(t){const e=Number(t||0);return!Number.isFinite(e)||e<=0?"":new Date(e*1e3).toLocaleString()}function gd(){return`
    <tr>
      <td class="bank-empty-row" colspan="5">${c(Ge?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function bd(t){String(t||"").trim();const e=gh(t);return Pr(e==null?void 0:e.role_color)}function Ui(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${c(e)}</span>`}function yd(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":Ui(e)}function kd(){const t=pr.trim().toLowerCase(),e=ce.filter(n=>{const r=String(n.rank||"").trim();if(kt.size>0&&!kt.has(r)||!Ws(Ot,yi(n)))return!1;if(!t)return!0;const i=Cr(n.joined),s=Ki(n.joined),o=yi(n),a=Vs(n.account_name||"");return[n.account_name,r,i,s,n.joined,o,a].map(d=>String(d||"").toLowerCase()).join(" ").includes(t)});return vd(e)}function vd(t){if(!qe||!ee)return t;const e=ee==="desc"?-1:1;return[...t].sort((n,r)=>{const i=Go(n,qe),s=Go(r,qe),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:String(n.account_name||"").localeCompare(String(r.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function Go(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const n=Number(t.joined||0);return Number.isFinite(n)&&n>0?String(n).padStart(16,"0"):""}if(e==="notes")return String(Number(t.note_count||0)).padStart(8,"0");if(e==="linked"){const n=yi(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[n]||"9"} ${n} ${Vs(t.account_name||"")}`}return String(t.account_name||"")}function Sd(t){const n=new Set(["account_name","rank","joined","notes","linked"]).has(t)?t:"account_name";qe!==n?(qe=n,ee="asc"):ee==="asc"?ee="desc":ee==="desc"?(qe="",ee=""):(qe=n,ee="asc"),W=-1,f()}function _n(t,e,n=""){const r=qe===t&&Boolean(ee),i=r?ee==="asc"?"ascending":"descending":"none",s=r?ee==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${h(n)}" aria-sort="${h(i)}">
      <button
        class="discord-sort-header roster-sort-header${r?" active":""}"
        type="button"
        data-roster-sort-column="${h(t)}"
        title="Sort ${h(e)}${r&&ee==="asc"?" descending":r&&ee==="desc"?" not sorted":" ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function wd(){return Array.from(new Set(ce.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function _d(t){const e=ao(t),n=Pr(e==null?void 0:e.role_color),r=lo(n),i=co(n,r);return`
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
  `}function Ad(t){const e=Oi.find(n=>n.id===t);return e?e.label:t}function Us(t,e){const n=t==="roster"?"roster":"discord",r=Ad(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${n}-link-status-filter="${h(e)}"
      title="Remove ${h(r)} link filter"
    >
      <span>${c(r)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Hs(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked"&&String(n.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function Ld(t){return Hs(Nr(t==null?void 0:t.discord_id))}function yi(t){return Hs(Br(t==null?void 0:t.account_name))}function Vs(t){const e=Br(t),n=ua({mode:"eso-to-discord",esoAccountName:t}),r=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean),i=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="candidate").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean);return[n.label,n.title,r.join(" "),i.join(" ")].filter(Boolean).join(" ")}function Ws(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function $d(){return`
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
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${h(Ke)}" />
        </div>

        ${Oe?`<div class="discord-data-error">${c(Oe)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Ed()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${Rt?`: ${c(Rt)}`:""}</div>
            ${Rd()}
          </div>
        </div>
      </div>
    </div>
  `}function Ed(){return ct&&ae.length===0?'<div class="roster-history-muted">Searching...</div>':ae.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${ae.map((t,e)=>`
        <button class="roster-history-match${e===fe||t.discord_id===Yt?" is-selected":""}" type="button" data-discord-history-id="${h(t.discord_id)}" data-discord-history-name="${h(ki(t))}">
          <span>${c(ki(t))}</span>
          <strong>${c(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===fe?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Rd(){return Yt?ct&&at.length===0?'<div class="roster-history-muted">Loading history...</div>':at.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${at.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(Ki(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${c(Dd(t.event_type))}</td>
              <td>${c(t.old_value||"")}</td>
              <td>${c(t.new_value||"")}</td>
              <td>${c(t.initiator||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function ki(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function Dd(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Md(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${h(qn)}" />
        </div>

        ${Ie?`<div class="discord-data-error">${c(Ie)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Td()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${ut?`: ${c(ut)}`:""}</div>
            ${Bd()}
          </div>
        </div>
      </div>
    </div>
  `}function Td(){return it&&se.length===0?'<div class="roster-history-muted">Searching...</div>':se.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${se.map((t,e)=>`
        <button class="roster-history-match${e===ue||t.account_name===ut?" is-selected":""}" type="button" data-roster-history-account="${h(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <strong>${c(t.rank||"")}</strong>
          ${e===ue?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Bd(){return ut?it&&rt.length===0?'<div class="roster-history-muted">Loading history...</div>':rt.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${rt.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(Ki(t.timestamp))}</td>
              <td>${c(t.event_type||"")}</td>
              <td>${yd(t.rank)}</td>
              <td>${c(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function Nd(){return`
    <div class="guildsync-tab-panel reports-panel" data-active-tab="settings">
      <div class="discord-data-header reports-header">
        <div>
          <h2 class="discord-data-title">Reports & Admin</h2>
          <p class="discord-data-subtitle">Run GuildSync reports and administrative review tools. More options can be added here later.</p>
        </div>
      </div>

      <div class="reports-scroll-area">
        ${Ys()}
        ${Pi.render()}
        <section class="reports-list" aria-label="Available reports">
          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Associates Promotion Eligible</h3>
              <p>Shows Associates who have been in the guild at least two weeks, have purchased at least one raffle ticket, and are linked to Discord. Also shows otherwise eligible Associates who still need a Discord link reviewed.</p>
            </div>
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${Je?"disabled":""}>
              ${Je?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${Qe?"disabled":""}>
              ${Qe?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${Xe?"disabled":""}>
              ${Xe?"Loading...":"Run"}
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
  `}function js(){var t,e,n,r;I==="settings"&&(as(Bs,{refresh:!0}),Pi.wire({request:(i,s)=>R(i,s,12e4),rerender:f}),zs(),(t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>Ks()),(e=document.querySelector("#runDiscordRankAuditReportButton"))==null||e.addEventListener("click",()=>Fd()),(n=document.querySelector("#runDiscordLastSeenReportButton"))==null||n.addEventListener("click",()=>Vd()),(r=document.querySelector("#runMemberLinksReportButton"))==null||r.addEventListener("click",()=>eu()))}function zs(t=document){var e,n,r,i,s;(e=t.querySelector("#cancelBonusDefaults"))==null||e.addEventListener("click",()=>{me=!1,f()}),(n=t.querySelector("#resetBonusDefaults"))==null||n.addEventListener("click",()=>{me=!0,f()}),(r=t.querySelector("#raffleBonusSettingsForm"))==null||r.addEventListener("submit",Cd),(i=t.querySelector("#raffleBonusSettingsForm"))==null||i.addEventListener("input",o=>{Le={raffle:Pe,values:new Map(new FormData(o.currentTarget))}}),(s=t.querySelector("#bonusRafflePicker"))==null||s.addEventListener("change",o=>{Pe=o.currentTarget.value,me=!1,Le=null,f()})}function Ys(){var o;if(!K)return'<article class="report-option-card raffle-bonus-card"><div class="report-option-copy"><h3><button type="button" class="report-section-toggle" data-report-toggle="bonus" aria-expanded="false" aria-controls="raffleBonusContent">Raffle Bonus Tickets <span aria-hidden="true">\u25BE</span></button></h3><div id="raffleBonusContent" class="report-section-content" inert><div class="report-section-inner"><p>Loading raffle bonus settings...</p></div></div></div></article>';const t=!me&&(Le==null?void 0:Le.raffle)===Pe?Le.values:null,e=Jt.find(a=>`${a.type}:${a.salesEnd}`===Pe),n=me&&(e==null?void 0:e.inheritedSettings)?e.inheritedSettings:e,r=e?{enabledByType:{...K.enabledByType,[e.type]:n.enabled},biweekly:e.type==="biweekly"?n.tiers:K.biweekly,monthly:e.type==="monthly"?n.tiers:K.monthly}:me&&K.envDefaults||K,i=((o=k==null?void 0:k.user)==null?void 0:o.role)==="admin",s=(a,l)=>{var d,y;return`
    <fieldset class="raffle-bonus-tiers" ${i&&!me?"":"disabled"}>
      <legend>${l}</legend>
      <label><input name="${a}-enabled" type="checkbox" ${(t?t.has(`${a}-enabled`):(y=(d=r.enabledByType)==null?void 0:d[a])!=null?y:r.enabled)?"checked":""}> Enable bonus tickets</label>
      ${r[a].map((p,b)=>{var w,S;return`
        <div class="raffle-bonus-tier">
          <span>Period ${b+1}${b===r[a].length-1?" (final)":""}</span>
          <label>Hours <input name="${a}-${b}-hours" type="number" min="1" step="1" required value="${h(String(t&&(w=t.get(`${a}-${b}-hours`))!=null?w:p.hours))}"></label>
          <label>Bonus % <input name="${a}-${b}-percent" type="number" min="0" max="100" step="0.1" required value="${h(String(t&&(S=t.get(`${a}-${b}-percent`))!=null?S:p.percent))}"></label>
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
            ${Jt.map(a=>`<option value="${h(`${a.type}:${a.salesEnd}`)}" ${Pe===`${a.type}:${a.salesEnd}`?"selected":""}>${c(a.label)}${a.enabled?" (Bonuses)":""}</option>`).join("")}
          </select>
        </label>
        <p data-bonus-settings-source>Source: ${c(e?e.overridden?"Raffle override":"Saved raffle policy":K.source===".env"?"Default":K.source||"Default")}</p>
        ${me?'<p role="status">Default Hours, Bonus %, and enabled settings are shown below. Click Save Bonus Settings to apply them, or Cancel default restoration to keep your previous settings.</p><button type="button" id="cancelBonusDefaults">Cancel default restoration</button>':""}
        <form id="raffleBonusSettingsForm">
          ${i?`<button type="button" id="resetBonusDefaults">Return to defaults</button><p>Restores Hours, Bonus %, and the enabled switch ${e?"from this raffle\u2019s inherited policy":"for both raffle types from their default rules"}. Changes apply only after Save Bonus Settings.</p>`:""}
          ${e?s(e.type,e.label):s("biweekly","Bi-Weekly Raffle")+s("monthly","50/50 Raffle")}
          ${i?'<button class="refresh-discord-button report-run-button" type="submit">Save Bonus Settings</button>':"<p>Admin access is required to change these settings.</p>"}
        </form>
        </div></div>
      </div>
    </article>`}async function Cd(t){t.preventDefault();const e=t.currentTarget,n=new FormData(e),r=Jt.find(o=>`${o.type}:${o.salesEnd}`===Pe),i=o=>((r==null?void 0:r.type)===o?r.tiers:K[o]).map((a,l)=>({hours:Number(n.get(`${o}-${l}-hours`)),percent:Number(n.get(`${o}-${l}-percent`))})),s=r?{raffleType:r.type,salesEnd:r.salesEnd,enabled:n.has(`${r.type}-enabled`),tiers:i(r.type)}:{enabledByType:{biweekly:n.has("biweekly-enabled"),monthly:n.has("monthly-enabled")},biweekly:i("biweekly"),monthly:i("monthly")};try{me&&(s.resetToDefaults=!0);const o=await R("guildsync:save-raffle-bonus-settings",s,3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||"Could not save raffle bonus settings.");K=o.bonusSettings,Le=null,me=!1,await we({silent:!0}),m("bonus-settings","Raffle bonus settings saved.",{ttlMs:g}),f()}catch(o){m("bonus-settings-error",L(o),{ttlMs:g})}}function Ks(){cn=!0,St="",f(),_a()}function vi(){cn=!1,St="",f()}function qd(){const t=xd(),e=Id(),n=ln.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${Je?"disabled":""}>${Je?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(n))} total row${n===1?"":"s"}</span>
        </div>

        ${St?`<div class="discord-data-error">${c(St)}</div>`:""}

        <div class="report-results-content">
          ${Je&&n===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!Je&&n===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${n>0?Uo("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${n>0?Uo("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${c(Xs())}</textarea>
      </div>
    </div>
  `}function xd(){return ln.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function Id(){return ln.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function Uo(t,e,n,r){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${c(t)}</h4>
          <p>${c(e)}</p>
        </div>
        <span>${c(String(n.length))} row${n.length===1?"":"s"}</span>
      </div>
      ${n.length>0?Od(n):`<div class="roster-history-muted report-section-empty">${c(r)}</div>`}
    </section>
  `}function Od(t=ln){return`
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
              <td>${Ui(e.rank||"")}</td>
              <td>${c(Cr(e.joined))}</td>
              <td>${c(ye(e.purchased_tickets||0))}</td>
              <td class="associate-earliest-deposit-cell">${c(Js(e))}</td>
              <td>${c(Qs(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Js(t){const e=String((t==null?void 0:t.earliest_deposit_summary)||"").trim();if(e)return e;const n=String((t==null?void 0:t.earliest_deposit_date)||"").trim(),r=String((t==null?void 0:t.earliest_deposit_raffle_period)||"").trim();return[n,r].filter(Boolean).join(" | ")}function Qs(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function Xs(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Earliest Deposit / Raffle","Discord Link"]];for(const e of ln){const n=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([n,e.account_name||"",e.rank||"",Cr(e.joined),ye(e.purchased_tickets||0),Js(e),Qs(e)])}return t.map(e=>e.map(xr).join("	")).join(`
`)}async function Pd(){const t=Xs();if(await Ir(t)){m("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:g});return}const n=document.querySelector("#associateTicketReportTsv");n&&(n.focus(),n.select()),m("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:g})}function Fd(){dn=!0,wt="",f(),wa()}function Si(){dn=!1,wt="",f()}function Gd(){const t=In.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${Qe?"disabled":""}>${Qe?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${wt?`<div class="discord-data-error">${c(wt)}</div>`:""}

        <div class="report-results-content">
          ${Qe&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!Qe&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?Ud(In):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${c(ta())}</textarea>
      </div>
    </div>
  `}function Ud(t=In){return`
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
              <td data-label="Discord Member" class="discord-rank-audit-member-cell">${c(Zs(e))}</td>
              <td data-label="Discord Rank Role" class="discord-rank-audit-discord-cell">${c(e.discord_rank||"No matching rank role")}</td>
              <td data-label="Linked ESO Account(s)" class="discord-rank-audit-eso-account-cell">${c(e.eso_accounts||"No linked ESO account")}</td>
              <td data-label="ESO Rank" class="discord-rank-audit-eso-rank-cell">${c(e.eso_rank||"None")}</td>
              <td data-label="Issue" class="discord-rank-audit-issue-cell">${c(ea(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Zs(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function ea(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function ta(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of In)t.push([Zs(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",ea(e)]);return t.map(e=>e.map(xr).join("	")).join(`
`)}async function Hd(){const t=ta();if(await Ir(t)){m("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:g});return}const n=document.querySelector("#discordRankAuditReportTsv");n&&(n.focus(),n.select()),m("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:g})}function Vd(){ht=!0,_t="",un="",f(),Sa(),C.length===0&&!z&&Tr({silent:!0})}function wi(){ht=!1,_t="",un="",Ze="",Pt="",et="",f()}function Wd(){const t=Hi(),e=xi.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${Xe?"disabled":""}>${Xe?"Loading...":"Run Again"}</button>
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
            value="${h(un)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${Ze===""?"selected":""}>All link statuses</option>
            <option value="linked" ${Ze==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${Ze==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${Ze==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${_t?`<div class="discord-data-error discord-last-seen-report-error">${c(_t)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${Xe&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!Xe&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?jd(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${c(ra(t))}</textarea>
      </div>
    </div>
  `}function jd(t=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${An("name","Discord Member")}</th>
            <th>${An("eso","Linked ESO Account")}</th>
            <th>${An("date","Last Seen")}</th>
            <th>${An("days","Days Since")}</th>
            <th>${An("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr class="discord-last-seen-row ${h(Xd(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${h(Mt(e).status)}" data-discord-last-seen-search="${h(na(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${Qd(e)}
                  <span>${c(Xt(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${Yd(e)}</td>
              <td>${c(Vi(e.last_seen))}</td>
              <td>${c(Wi(e.last_seen))}</td>
              <td>${c(Sr(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function An(t,e){const n=Pt===t,r=n?et==="asc"?"\u25B2":"\u25BC":"\u2195",i=n?`${e}: ${et==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${n?" active":""}" type="button" data-discord-last-seen-sort="${h(t)}" title="${h(i)}">
      <span>${c(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${c(r)}</span>
    </button>
  `}function Hi(){const t=[...xi],e=Pt,n=et;if(!e||!n)return t;const r=n==="desc"?-1:1;return t.sort((i,s)=>{var o,a;if(e==="date"){const l=Number(i.last_seen||0)||0,d=Number(s.last_seen||0)||0;return(l-d)*r}if(e==="days")return(Ho(i.last_seen)-Ho(s.last_seen))*r;if(e==="action")return Sr(i.last_seen_action).localeCompare(Sr(s.last_seen_action),void 0,{sensitivity:"base"})*r;if(e==="eso"){const l=Mt(i),d=Mt(s),y={linked:0,candidate:1,unlinked:2},p=((o=y[l.status])!=null?o:9)-((a=y[d.status])!=null?a:9);return p!==0?p*r:l.esoAccountName.localeCompare(d.esoAccountName,void 0,{sensitivity:"base"})*r}return Xt(i).localeCompare(Xt(s),void 0,{sensitivity:"base"})*r})}function zd(t){Pt!==t?(Pt=t,et="asc"):et==="asc"?et="desc":(Pt="",et=""),f()}function Xt(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function na(t){return[Xt(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,Kd(t),Vi(t==null?void 0:t.last_seen),Wi(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function Mt(t){const e=gu(t==null?void 0:t.discord_id),n=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),r=String((e==null?void 0:e.eso_account_name)||"").trim();return n==="linked"&&r?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:r,title:`Linked ESO account: ${r}`}:(n==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&r?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:r,title:`Fuzzy ESO account candidate: ${r}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function Yd(t){const e=Mt(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${h(e.className)}"
      title="${h(e.title)}"
      aria-label="${h(e.label)}"
      role="img"
    ></span>
  `}function Kd(t){const e=Mt(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function Jd(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!n)return"";if(/^https?:\/\//i.test(e))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function Qd(t){const e=Xt(t),n=e?e.slice(0,2).toUpperCase():"?",r=Jd(t);return r?`<span class="discord-member-avatar"><img src="${h(r)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${c(n)}</span>`}function Vi(t){const e=Number(t);if(!e)return"Never";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t||"");const r=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(n).reduce((i,s)=>(i[s.type]=s.value,i),{});return`${r.month}/${r.day}/${r.year} ${r.hour}:${r.minute} ${r.dayPeriod}`}function Xd(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const n=(Date.now()-e*1e3)/864e5;return n>30?"discord-last-seen-red":n>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function Wi(t){const e=Number(t);if(!e)return"Never";const n=Date.now()-e*1e3;if(!Number.isFinite(n))return"";if(n<0)return"0 days";const r=Math.floor(n/864e5);return`${r} day${r===1?"":"s"}`}function Ho(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const n=Date.now()-e*1e3;return Number.isFinite(n)?n<0?0:Math.floor(n/864e5):Number.POSITIVE_INFINITY}function Sr(t){return String(t||"").trim()||"None tracked"}function ra(t=Hi()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const n of t){const r=Mt(n);e.push([Xt(n),r.label||"",r.esoAccountName||"",Vi(n==null?void 0:n.last_seen),Wi(n==null?void 0:n.last_seen),Sr(n==null?void 0:n.last_seen_action),(n==null?void 0:n.username)||"",(n==null?void 0:n.discord_id)||""])}return e.map(n=>n.map(xr).join("	")).join(`
`)}async function Zd(){const t=Hi().filter(i=>{const s=Be(un),o=String(Ze||"").trim().toLowerCase(),a=!s||Be(na(i)).includes(s),l=!o||Mt(i).status===o;return a&&l}),e=ra(t);if(await Ir(e)){m("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:g});return}const r=document.querySelector("#discordLastSeenReportTsv");r&&(r.focus(),r.select()),m("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:g})}function eu(){Ve=!0,X="",f(),C.length===0&&!z&&Tr({silent:!0})}function _i(){Ve=!1,Mr="",bt="",Un="",Hn="",xe=-1,f()}function ia(t){return[...new Set((Array.isArray(C)?C:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function oa(t,e){return t.map(n=>`<option value="${h(n)}" ${e===n?"selected":""}>${c(n)}</option>`).join("")}function tu(){return oa(ia("link_status"),Un)}function nu(){return oa(ia("link_method"),Hn)}function ru(){return`
    <div class="roster-history-overlay member-links-report-overlay" role="dialog" aria-modal="true" aria-labelledby="memberLinksReportTitle">
      <div class="roster-history-dialog report-results-dialog member-links-report-dialog">
        <div class="roster-history-header report-results-header">
          <div>
            <h3 id="memberLinksReportTitle">ESO / Discord Member Links</h3>
            <p>Review automatic links, accept fuzzy candidates, unblock/relink members, or run the matcher again.</p>
          </div>
          <button id="closeMemberLinksReportButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        <div class="report-results-toolbar">
          <button id="refreshMemberLinksButton" class="clear-discord-filters-button" type="button" ${z?"disabled":""}>Refresh Links</button>
          <button id="runMemberAutoLinkButton" class="refresh-discord-button" type="button" ${z?"disabled":""}>${z?"Running...":"Run Auto-Linking"}</button>
          <span class="roster-history-muted">${c(String(C.length))} link/candidate row${C.length===1?"":"s"}</span>
        </div>

        <div class="member-links-report-filter-row">
          <input
            id="memberLinksReportSearchInput"
            class="member-links-report-search-input"
            type="search"
            autocomplete="off"
            spellcheck="false"
            placeholder="Search Discord account or ESO member..."
            value="${h(Mr)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${Un===""?"selected":""}>All statuses</option>
            ${tu()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${Hn===""?"selected":""}>All methods</option>
            ${nu()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${bt===""?"selected":""}>All actions</option>
            <option value="needs-link" ${bt==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${bt==="can-unlink"?"selected":""}>Unlink Available</option>
            <option value="can-unblock" ${bt==="can-unblock"?"selected":""}>Unblock Available</option>
          </select>
        </div>

        ${X?`<div class="discord-data-error member-links-report-error">${c(X)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${au()}
        </div>
      </div>
    </div>
  `}function sa(){var n,r,i,s,o,a;if(!Ve)return;(n=document.querySelector("#closeMemberLinksReportButton"))==null||n.addEventListener("click",_i),(r=document.querySelector("#refreshMemberLinksButton"))==null||r.addEventListener("click",()=>Tr()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>mu());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",cu),t.addEventListener("keydown",fu)),(s=document.querySelector("#memberLinksReportActionFilter"))==null||s.addEventListener("change",lu),(o=document.querySelector("#memberLinksReportStatusFilter"))==null||o.addEventListener("change",du),(a=document.querySelector("#memberLinksReportMethodFilter"))==null||a.addEventListener("change",uu),jn(),document.querySelectorAll("[data-accept-member-candidate]").forEach(l=>{l.addEventListener("click",()=>ca(l.dataset.acceptMemberCandidate||"",l.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(l=>{l.addEventListener("click",()=>pu(l.dataset.unlinkMemberLink||"",l.dataset.unlinkMemberLinkDiscordId||""))}),document.querySelectorAll("[data-unblock-member-auto-link]").forEach(l=>{l.addEventListener("click",()=>la(l.dataset.unblockMemberAutoLink||"",l.dataset.unblockMemberAutoLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",l=>{l.target===e&&_i()})}function Vo(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function Wo(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function iu(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function ou(t){return[...Array.isArray(t)?t:[]].sort((e,n)=>{const r=Vo(e)-Vo(n);if(r!==0)return r;const i=Wo(e).localeCompare(Wo(n),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((n==null?void 0:n.discord_user_id)||""),void 0,{sensitivity:"base"})})}function su(t){const e=Ai(t);let n="";e==="Username"?n=(t==null?void 0:t.discord_username)||"":e==="Global Name"?n=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(n=(t==null?void 0:t.discord_server_nickname)||""),n||(n=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const r=e?` <span class="member-link-report-match-field">(${c(e)})</span>`:"";return`<span class="member-link-report-discord-name">${c(n)}</span>${r}`}function au(){return z&&C.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(C)||C.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${ou(C).map(e=>{var s;const n=String(e.link_status||"").trim().toLowerCase(),r=String(e.link_method||"").trim().toLowerCase(),i=su(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${h(iu(e))}"
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
                    ${n==="candidate"?`<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${h(e.eso_account_name||"")}" data-accept-member-candidate-discord-id="${h(e.discord_user_id||"")}" aria-label="Accept candidate link" title="Accept candidate link">\u2713</button>`:""}
                    ${n==="linked"?`<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${h(e.eso_account_name||"")}" data-unlink-member-link-discord-id="${h(e.discord_user_id||"")}" aria-label="Unlink this ESO/Discord pair" title="Unlink this ESO/Discord pair">\u{1F5D1}</button>`:""}
                    ${Number(e.locked||0)===1||n==="blocked"?`<button class="member-link-report-action member-link-report-unblock" type="button" data-unblock-member-auto-link="${h(e.eso_account_name||"")}" data-unblock-member-auto-link-discord-id="${h(e.discord_user_id||"")}" aria-label="Remove auto-link block" title="Remove auto-link block">\u21BA</button>`:""}
                  </div>
                </td>
                <td class="member-links-confidence-col">${c(String((s=e.match_confidence)!=null?s:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function aa(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function jo(t){const e=aa();if(e.forEach(r=>r.classList.remove("member-links-report-row-active")),e.length===0){xe=-1;return}xe=Math.max(0,Math.min(t,e.length-1));const n=e[xe];n.classList.add("member-links-report-row-active"),n.scrollIntoView({block:"nearest"})}function jn(){const t=Be(Mr),e=String(bt||"").trim().toLowerCase(),n=String(Un||"").trim().toLowerCase(),r=String(Hn||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let s=0;i.forEach(a=>{const l=Be(a.dataset.memberLinksReportSearch||""),d=String(a.dataset.memberLinksReportAction||"").trim().toLowerCase(),y=String(a.dataset.memberLinksReportStatus||"").trim().toLowerCase(),p=String(a.dataset.memberLinksReportMethod||"").trim().toLowerCase(),B=(!t||l.includes(t))&&(!e||d===e)&&(!n||y===n)&&(!r||p===r);a.hidden=!B,a.classList.remove("member-links-report-row-active"),B&&(s+=1)});const o=document.querySelector("#memberLinksReportSearchEmpty");o&&(o.hidden=s!==0),xe=-1}function cu(t){Mr=t.target.value||"",jn()}function lu(t){bt=t.target.value||"",jn()}function du(t){Un=t.target.value||"",jn()}function uu(t){Hn=t.target.value||"",jn()}function fu(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=aa();if(e.length===0)return;if(t.key==="ArrowDown"){const r=xe<0?0:xe+1;jo(r>=e.length?e.length-1:r);return}const n=xe<0?e.length-1:xe-1;jo(n<0?0:n)}function cr(){return I==="discord-members"||I==="eso-members"||We||Ve||ht}function hu(t={}){if(!Array.isArray(t.links))return;const e=JSON.stringify(C)!==JSON.stringify(t.links);C=t.links,e&&cr()&&dr()}function zo(){const t=document.querySelector("#runMemberLinksReportButton");t&&(t.disabled=z,t.textContent=z?"Loading...":"Run")}async function Tr(t={}){if(!(u!=null&&u.connected)){X="You must be connected to load member links.",cr()&&dr();return}z=!0,X="",zo(),!t.silent&&cr()&&dr();try{const e=await R("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");C=Array.isArray(e.links)?e.links:[]}catch(e){X=L(e)}finally{z=!1,zo(),cr()&&dr()}}async function mu(){if(!(u!=null&&u.connected)||!k.logged_in){X="You must be logged in and connected to run auto-linking.",f();return}z=!0,X="",f();try{const t=await R("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");C=Array.isArray(t.links)?t.links:[],m("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:g})}catch(t){X=L(t)}finally{z=!1,f()}}async function ca(t,e=""){try{const n=await R("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to accept candidate.");C=Array.isArray(n.links)?n.links:C,m("member-link-accepted",n.message||"Candidate accepted as a link.",{ttlMs:g})}catch(n){X=L(n),m("member-link-accept-error",X,{ttlMs:g})}}async function la(t,e=""){if(!await Fi({title:"Remove Auto-Link Block?",message:`Remove the blocked auto-match record between ${t} and this Discord account? Auto-linking will run immediately and this screen will refresh to show whether the pair linked again.`,confirmLabel:"Unblock",cancelLabel:"Cancel",confirmClass:"danger"}))return!1;z=!0,X="",f();try{const r=await R("guildsync:unblock-member-auto-link",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to remove auto-link block.");C=Array.isArray(r.links)?r.links:C;const i=ve(t),s=String(e||"").trim(),o=r.refreshedPair||C.find(d=>ve(d.eso_account_name)===i&&String(d.discord_user_id||"").trim()===s),a=String((o==null?void 0:o.link_status)||"").trim().toLowerCase(),l=a==="linked"?" It linked again automatically.":a==="candidate"?" It is now showing as a candidate.":" No automatic link was recreated.";return m("member-link-unblocked",`${r.message||"Auto-link block removed."}${l}`,{ttlMs:g}),!0}catch(r){return X=L(r),m("member-link-unblock-error",X,{ttlMs:g}),!1}finally{z=!1,f()}}async function pu(t,e=""){if(!!await Fi({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const r=await R("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to unlink member.");C=Array.isArray(r.links)?r.links:C,m("member-link-unlinked",r.message||"Member link removed.",{ttlMs:g})}catch(r){X=L(r)}f()}}function ve(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function Br(t){const e=ve(t);return e?C.filter(n=>ve(n.eso_account_name)===e):[]}function Nr(t){const e=String(t||"").trim();return e?C.filter(n=>String(n.discord_user_id||"").trim()===e):[]}function da(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const n=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(n.length>0){const i=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const s=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return s||n[0]}const r=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return r||e[0]}function gu(t){return da(Nr(t))}function bu(t){return`${ve(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function ji(){return M?M.mode==="discord-to-eso"?Nr(M.discordUserId):Br(M.esoAccountName):[]}function yu(t){const e=String(t||"").trim(),n=ne.find(r=>String(r.discord_id||"").trim()===e);return n&&(n.server_nickname||n.global_name||n.username||n.discord_id)||e}function ua(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?Nr(t.discordUserId):Br(t.esoAccountName),r=da(n),i=String((r==null?void 0:r.link_status)||"").trim().toLowerCase(),s=n.filter(a=>String(a.link_status||"").trim().toLowerCase()==="linked").length,o=n.filter(a=>String(a.link_status||"").trim().toLowerCase()==="candidate").length;return s>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?s===1?r.eso_account_name:`${s} ESO accounts`:s===1?r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member":`${s} Discord accounts`}`}:i==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?r.eso_account_name:r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member"}`}:i==="blocked"||Number((r==null?void 0:r.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function fa(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,r=ua(t);return`
    <button
      class="member-link-status-dot member-link-status-${h(r.className)}"
      type="button"
      title="${h(r.title)}"
      aria-label="${h(r.label)}"
      data-open-member-link-dialog="${h(e)}"
      data-member-link-value="${h(n||"")}"
    ></button>
  `}function ku(){return M?M.mode==="discord-to-eso"?yu(M.discordUserId):M.esoAccountName||"":""}function ha(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function Ai(t){const e=ha((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const n=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(n.includes("discord_username")||n.includes("username"))return"Username";if(n.includes("discord_display_name")||n.includes("global")||n.includes("display"))return"Global Name";if(n.includes("discord_server_nickname")||n.includes("server")||n.includes("nickname"))return"Server Nickname";const r=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(r==="exact"||r==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",s=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const a of s){const l=vu(i,a.value);(!o||l>o.score)&&(o={...a,score:l})}if(o&&o.score>0)return o.field}return""}function Be(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function vu(t,e){const n=Be(t),r=Be(e);if(!n||!r)return 0;if(n===r)return 100;if((n.includes(r)||r.includes(n))&&Math.min(n.length,r.length)>=4)return 88;const i=Math.abs(n.length-r.length),s=[...n].findIndex((a,l)=>a!==r[l]),o=s===-1?Math.min(n.length,r.length):s;return Math.max(0,Math.min(75,Math.round(o*10-i*3)))}function Su(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function wu(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function _u(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),n=Su(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${c(n)}</span>`}function Au(t){var a;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",n=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",r=String(t.link_status||"").trim().toLowerCase(),o=r==="linked"?`<button
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
        <div><span>Status:</span> ${_u(t)} \xB7 ${c(wu(t.link_method))} \xB7 ${c(String((a=t.match_confidence)!=null?a:""))}% \xB7 ${c(n)}</div>
        ${Ai(t)?`<div><span>Matched:</span> Matched on ${c(Ai(t))}</div>`:""}
      </div>
      ${o}
    </div>
  `}function Lu(){const t=ji();return t.length?[...t].sort((n,r)=>{var l,d;const i=String(n.link_status||"").trim().toLowerCase(),s=String(r.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},a=((l=o[i])!=null?l:9)-((d=o[s])!=null?d:9);return a!==0?a:Number(r.match_confidence||0)-Number(n.match_confidence||0)}).map(n=>Au(n)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function $u(){if(Kt)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(Ue)return`<div class="discord-data-error">${c(Ue)}</div>`;if(!Array.isArray(At)||At.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(ji().map(n=>bu(n))),e=[...At].filter(n=>{const r=(M==null?void 0:M.mode)==="discord-to-eso"?`${ve(n.account_name)}::${String(M.discordUserId||"").trim()}`:`${ve(M==null?void 0:M.esoAccountName)}::${String(n.discord_id||"").trim()}`;return!t.has(r)}).sort((n,r)=>{const i=Number(r.confidence||0)-Number(n.confidence||0);return i!==0?i:Yo(n).localeCompare(Yo(r),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(n=>Eu(n)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function Yo(t){return((M==null?void 0:M.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function Eu(t,e={}){var p,b,w;const n=(M==null?void 0:M.mode)||"",r=n==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=ha(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),s=n==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[s,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),a=n==="discord-to-eso"?t.account_name:t.discord_id,l=e.disabled===!0,d=[r,s,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),y=[r,o,`${(p=t.confidence)!=null?p:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${h(a||"")}" data-member-link-option-search="${h(d)}" title="${h(y)}" ${l?"disabled":""}>
      <span class="member-link-option-name" title="${h(r||"")}">${c(r||"")}</span>
      <span class="member-link-option-subtitle" title="${h(o||"")}">${c(o||"")}</span>
      <span class="member-link-option-confidence" title="${h(String((b=t.confidence)!=null?b:0))}%">${c(String((w=t.confidence)!=null?w:0))}%</span>
    </button>
  `}function Ru(){const t=(M==null?void 0:M.mode)||"",e=ku(),n=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
    <div class="roster-history-overlay member-link-dialog-overlay" role="dialog" aria-modal="true" aria-labelledby="memberLinkDialogTitle">
      <div class="roster-history-dialog member-link-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="memberLinkDialogTitle">Member Link</h3>
            <p>${c(e)} \u2192 choose ${c(n)}.</p>
          </div>
          <button id="closeMemberLinkDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close member link window" title="Close">\xD7</button>
        </div>

        <div class="member-link-dialog-body">
          <section class="member-link-dialog-section member-link-current-section">
            ${Lu()}
          </section>

          <section class="member-link-dialog-section">
            <h4>Suggested Matches</h4>
            <input
              id="memberLinkSuggestionSearchInput"
              class="member-link-suggestion-search-input"
              type="search"
              autocomplete="off"
              spellcheck="false"
              placeholder="Search suggested matches..."
              value="${h(Vn)}"
            />
            ${$u()}
          </section>
        </div>

      </div>
    </div>
  `}async function zi(t,e){if(!(u!=null&&u.connected)||!T()){m("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:g});return}We=!0,M=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},At=[],Kt=!0,Ue="",Vn="",Ae=-1,f();try{if(!Array.isArray(C)||C.length===0){const i=await R("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(C=Array.isArray(i.links)?i.links:[])}const r=await R("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load link suggestions.");At=Array.isArray(r.options)?r.options:[]}catch(n){Ue=L(n)}finally{Kt=!1,f()}}function Zt(){document.removeEventListener("keydown",Li),We=!1,M=null,At=[],Kt=!1,Ue="",Vn="",Ae=-1,f()}function ma(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function Ko(t){const e=ma();if(e.forEach(r=>r.classList.remove("member-link-option-row-active")),e.length===0){Ae=-1;return}Ae=Math.max(0,Math.min(t,e.length-1));const n=e[Ae];n.classList.add("member-link-option-row-active"),n.scrollIntoView({block:"nearest"})}function pa(){const t=Be(Vn),e=[...document.querySelectorAll(".member-link-option-row")];let n=0;e.forEach(i=>{const s=Be(i.dataset.memberLinkOptionSearch||i.textContent||""),o=!t||s.includes(t);i.hidden=!o,i.classList.remove("member-link-option-row-active"),o&&(n+=1)});const r=document.querySelector("#memberLinkSuggestionSearchEmpty");r&&(r.hidden=n!==0),Ae=-1}function Du(t){Vn=t.target.value||"",pa()}function Mu(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=ma();if(e.length===0)return;if(t.key==="ArrowDown"){const r=Ae<0?0:Ae+1;Ko(r>=e.length?e.length-1:r);return}const n=Ae<0?e.length-1:Ae-1;Ko(n<0?0:n)}function Li(t){!We||t.key==="Escape"&&(t.preventDefault(),Zt())}async function Tu(t){if(!(!M||!t))try{const e=M.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:M.discordUserId}:{esoAccountName:M.esoAccountName,discordUserId:t},n=await R("guildsync:manual-link-member",e,3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to link members.");C=Array.isArray(n.links)?n.links:C,m("member-link-saved",n.message||"Member link saved.",{ttlMs:g}),Zt()}catch(e){Ue=L(e),f()}}async function Bu(t,e=""){await ca(t,e),Zt()}async function ga(){if(!!M){Kt=!0,Ue="",f();try{const t=M.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:M.discordUserId}:{mode:"eso-to-discord",accountName:M.esoAccountName},e=await R("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");At=Array.isArray(e.options)?e.options:[]}catch(t){Ue=L(t)}finally{Kt=!1,f()}}}async function Nu(t="",e=""){const n=ji().find(i=>ve(i.eso_account_name)===ve(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!n||!await Fi({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await R("guildsync:manual-unlink-member",{esoAccountName:n.eso_account_name,discordUserId:n.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");C=Array.isArray(i.links)?i.links:C,m("member-link-unlinked",i.message||"Member link removed.",{ttlMs:g}),await ga()}catch(i){Ue=L(i),f()}}async function Cu(t="",e=""){await la(t,e)&&await ga()}function ba(){var n;if(!We)return;document.removeEventListener("keydown",Li),document.addEventListener("keydown",Li),(n=document.querySelector("#closeMemberLinkDialogButton"))==null||n.addEventListener("click",Zt);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",Du),t.addEventListener("keydown",Mu),pa()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(r=>{r.addEventListener("click",()=>Nu(r.dataset.unlinkEsoAccount||"",r.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-unblock-dialog-member-auto-link]").forEach(r=>{r.addEventListener("click",()=>Cu(r.dataset.unblockEsoAccount||"",r.dataset.unblockDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(r=>{r.addEventListener("click",()=>Tu(r.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(r=>{r.addEventListener("click",()=>Bu(r.dataset.acceptDialogMemberCandidate||"",r.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",r=>{r.target===e&&Zt()})}function ya(){var e,n,r;if(!cn)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",vi),(n=document.querySelector("#rerunAssociateTicketReportButton"))==null||n.addEventListener("click",()=>_a()),(r=document.querySelector("#copyAssociateTicketReportGridButton"))==null||r.addEventListener("click",()=>Pd());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&vi()})}function ka(){var e,n,r;if(!dn)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",Si),(n=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||n.addEventListener("click",()=>wa()),(r=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||r.addEventListener("click",()=>Hd());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Si()})}function va(){var r,i,s;if(!ht)return;(r=document.querySelector("#closeDiscordLastSeenReportButton"))==null||r.addEventListener("click",wi),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>Sa()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>Zd()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(o=>{o.addEventListener("click",()=>zd(o.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",qu);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",xu),Yi();const n=document.querySelector(".discord-last-seen-report-overlay");n&&n.addEventListener("click",o=>{o.target===n&&wi()})}function qu(t){un=t.target.value||"",Yi()}function xu(t){Ze=t.target.value||"",Yi()}function Yi(){const t=Be(un),e=String(Ze||"").trim().toLowerCase(),n=[...document.querySelectorAll("[data-discord-last-seen-row]")];let r=0;n.forEach(s=>{const o=Be(s.dataset.discordLastSeenSearch||s.textContent||""),a=String(s.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),y=(!t||o.includes(t))&&(!e||a===e);s.hidden=!y,y&&(r+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=r!==0)}async function Sa(){if(!(u!=null&&u.connected)||!T()){_t="You must be logged in and connected to run this report.",f();return}Xe=!0,_t="",f();try{const t=await R("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");ne=oo(t.members),Rr=so(t.roles),xi=[...ne]}catch(t){_t=L(t)}finally{Xe=!1,f(),G("discordLastSeenReportSearchInput")}}async function wa(){if(!(u!=null&&u.connected)||!T()){wt="You must be logged in and connected to run this report.",f();return}Qe=!0,wt="",f();try{const t=await R("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");In=Array.isArray(t.rows)?t.rows:[]}catch(t){wt=L(t)}finally{Qe=!1,f()}}async function _a(){if(!(u!=null&&u.connected)||!T()){St="You must be logged in and connected to run this report.",f();return}Je=!0,St="",f();try{const t=await R("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");ln=Array.isArray(t.rows)?t.rows:[]}catch(t){St=L(t)}finally{Je=!1,f()}}function Gt(){const t=String(pn||"").trim().toLowerCase(),e={account_name:"Anonymous",rank:"Manual Entry"},n=new Set(["anonymous"]),r=ce.filter(i=>String(i.account_name||"").trim()).filter(i=>{const o=String(i.account_name||"").trim().toLowerCase();return!o||n.has(o)||t&&!o.includes(t)?!1:(n.add(o),!0)}).slice().sort((i,s)=>{const o=String(i.account_name||"").toLowerCase(),a=String(s.account_name||"").toLowerCase(),l=t&&o.startsWith(t)?0:1,d=t&&a.startsWith(t)?0:1;return l!==d?l-d:o.localeCompare(a)}).slice(0,19);return[e,...r]}function Aa(t=Gt()){const e=String(x.accountName||"").trim();return t.length===0?'<div class="roster-history-muted manual-ticket-no-matches">No matching guild members found.</div>':t.map((n,r)=>`
        <button class="roster-history-match${r===J||n.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${h(n.account_name)}" role="option" aria-selected="${r===J||n.account_name===e?"true":"false"}">
          <span>${c(n.account_name)}</span>
          <strong>${c(n.rank||"")}</strong>
          ${r===J?"<small>Enter</small>":""}
        </button>
      `).join("")}function La(){document.querySelectorAll("[data-manual-ticket-account]").forEach(t=>{t.addEventListener("mousedown",e=>{e.preventDefault()}),t.addEventListener("click",()=>{$a(t.dataset.manualTicketAccount||"")})})}function Zr(){const t=document.querySelector("#manualTicketMatchList");if(!t)return;const e=Gt();J>=e.length&&(J=e.length>0?e.length-1:-1),t.innerHTML=Aa(e),La()}function $a(t){const e=String(t||"").trim();x.accountName=e,pn=e,pe=!1,J=-1,ie="",f()}function G(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const n=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(n,n)},0)}function Iu(){const t=pe?Gt():[],e=String(x.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Entry</h3>
            <p>Add a manual banking or raffle entry such as FFTG, officer corrections, or anonymous gold.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${ie?`<div class="discord-data-error">${c(ie)}</div>`:""}

        <div class="manual-ticket-form">
          <div class="manual-ticket-member-picker">
            <label class="manual-ticket-member-field" for="manualTicketAccountSearchInput">
              <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${h(pn)}" autocomplete="off" />
            </label>

            ${pe?`
              <div id="manualTicketMatchList" class="roster-history-match-list manual-ticket-match-list" role="listbox" aria-label="Matching guild members">
                ${Aa(t)}
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
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${br?"disabled":""}>${br?"Saving...":"Add Manual Entry"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Ea(){var s,o,a,l,d,y;if(!Fe)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{Fe=!1,f()});const t=document.querySelector("#manualTicketAccountSearchInput");if(t){const p=({rerender:b=!1}={})=>{if(pe=!0,J=Gt().length>0?0:-1,b){f(),G("manualTicketAccountSearchInput");return}Zr()};t.addEventListener("focus",()=>{pe||p({rerender:!0})}),t.addEventListener("click",()=>{pe||p({rerender:!0})}),t.addEventListener("input",b=>{pn=b.target.value||"",x.accountName="",pe=!0,J=Gt().length>0?0:-1,Zr()}),t.addEventListener("keydown",b=>{if(b.key==="Escape")return;if(!pe){(b.key==="ArrowDown"||b.key==="ArrowUp")&&(b.preventDefault(),p({rerender:!0}));return}const w=Gt();if(b.key==="ArrowDown"||b.key==="ArrowUp"){if(w.length===0)return;b.preventDefault();const _=b.key==="ArrowDown"?1:-1;J=((J<0?0:J)+_+w.length)%w.length,Zr();return}if(b.key!=="Enter")return;b.preventDefault();const S=w[J>=0?J:0];S!=null&&S.account_name&&$a(S.account_name)})}La(),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",p=>{x.note=p.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(p=>{p.addEventListener("click",()=>{const b=String(p.dataset.manualTicketType||"").trim().toLowerCase();x.ticketType=b==="monthly"?"monthly":"biweekly",f()})}),(a=document.querySelector("[data-manual-ticket-toggle]"))==null||a.addEventListener("click",()=>{x.ticketType=x.ticketType==="monthly"?"biweekly":"monthly",f()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",p=>{const b=String(p.target.value||"").replace(/\D/g,"");p.target.value!==b&&(p.target.value=b),x.goldValue=b});const n=document.querySelector("#manualTicketCountInput");n==null||n.addEventListener("input",p=>{const b=String(p.target.value||"").replace(/\D/g,"");p.target.value!==b&&(p.target.value=b),x.tickets=b});const r=p=>{const b=Number(x.tickets)||0,w=Math.max(0,b+p);x.tickets=String(w),n&&(n.value=x.tickets,n.focus())};(l=document.querySelector("#manualTicketCountUpButton"))==null||l.addEventListener("click",()=>r(1)),(d=document.querySelector("#manualTicketCountDownButton"))==null||d.addEventListener("click",()=>r(-1)),(y=document.querySelector("#saveManualBiweeklyTicketButton"))==null||y.addEventListener("click",()=>Ou());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",p=>{p.target===i&&(Fe=!1,f())})}async function Ou(){const t=String(x.accountName||"").trim(),e=String(x.note||"").trim(),n=String(x.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",r=Number(String(x.goldValue||"").trim()||0),i=Number(String(x.tickets||"").trim()||0);if(pe){ie="Select a matching guild member or Anonymous from the list before saving.",f(),G("manualTicketAccountSearchInput");return}if(!t){ie="Select a matching guild member or Anonymous from the list before saving.",f(),G("manualTicketAccountSearchInput");return}if(!Number.isFinite(r)||r<0){ie="Gold value must be zero or greater.",f();return}if(!Number.isFinite(i)||i<0){ie="Tickets must be zero or greater.",f();return}const s=t.toLowerCase()==="anonymous";if(s&&Math.floor(i)>0){ie="Anonymous cannot be awarded tickets. Use 0 tickets and enter a gold value.",f();return}if(Math.floor(r)===0&&Math.floor(i)===0){ie=s?"Enter a gold value for Anonymous when tickets are 0.":"Enter gold or tickets. Both cannot be zero.",f();return}br=!0,ie="",f();try{const o=await R("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:n,gold_value:Math.floor(r),tickets:Math.floor(i)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Failed to add manual entry.");Fe=!1,x={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},pn="",J=-1,pe=!1,await we({silent:!0}),m("manual-ticket-added",o.message||"Manual entry added.",{ttlMs:g})}catch(o){ie=L(o)}finally{br=!1,f()}}async function Ra(t=""){const e=String(t||"").trim();if(!!e){an=!0,xn=e,ot=[],gr=!0,vt=!1,st="",jt="",f();try{const n=await R("guildsync:request-roster-member-notes",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster notes.");ot=Array.isArray(n.notes)?n.notes:[]}catch(n){st=L(n)}finally{gr=!1,f()}}}function $i(){an=!1,xn="",ot=[],gr=!1,vt=!1,st="",jt="",f()}function Pu(){var n,r;if(!an)return;(n=document.querySelector("#closeRosterNotesButton"))==null||n.addEventListener("click",$i);const t=document.querySelector("#rosterNotesNewNote");t&&t.addEventListener("input",i=>{jt=i.target.value||""}),(r=document.querySelector("#saveRosterNoteButton"))==null||r.addEventListener("click",()=>Fu());const e=document.querySelector(".roster-notes-overlay");e&&e.addEventListener("click",i=>{i.target===e&&$i()})}async function Fu(){const t=String(jt||"").trim();if(!t){st="Enter a note before saving.",f();return}vt=!0,st="",f();try{const e=await R("guildsync:add-roster-member-note",{account_name:xn,note:t},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to save roster note.");e.note&&(ot=[...ot,e.note]),jt="";const n=ce.find(r=>ve(r.account_name)===ve(xn));n&&(n.note_count=Number(n.note_count||0)+1)}catch(e){st=L(e)}finally{vt=!1,f()}}function Da(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>gn());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{Wt=!0,Ie="",f()});const n=document.querySelector("#rosterMemberSearch");n&&(n.addEventListener("input",o=>{pr=o.target.value||"",mi=o.target.selectionStart,pi=o.target.selectionEnd,W=-1,f({restoreRosterSearchFocus:!0})}),n.addEventListener("keydown",Gu)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Sd(o.dataset.rosterSortColumn||"account_name")})});const r=document.querySelector("#rosterRankFilter");r&&r.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(kt.add(a),W=-1,f())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRosterRankFilter||"";kt.delete(a),W=-1,f()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(Ot.add(a),W=-1,f())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRosterLinkStatusFilter||"";Ot.delete(a),W=-1,f()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>zi(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))}),document.querySelectorAll("[data-open-roster-notes]").forEach(o=>{o.addEventListener("click",()=>Ra(o.dataset.openRosterNotes||""))}),Pu();const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{pr="",kt.clear(),Ot.clear(),qe="",ee="",W=-1,f()}),Uu()}function Gu(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){W=-1;return}t.preventDefault(),t.key==="ArrowDown"?W=W<0?0:Math.min(W+1,e.length-1):t.key==="ArrowUp"&&(W=W<0?e.length-1:Math.max(W-1,0)),e.forEach((r,i)=>{r.classList.toggle("roster-search-active-row",i===W)});const n=e[W];n&&typeof n.scrollIntoView=="function"&&n.scrollIntoView({block:"nearest",inline:"nearest"})}function Uu(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{Wt=!1,f()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",n=>{if(qn=n.target.value||"",ue=-1,!qn.trim()){clearTimeout(Xr),Ie="",se=[],ut="",rt=[],it=!1,f(),G("rosterHistorySearchInput");return}clearTimeout(Xr),Xr=setTimeout(()=>{ju({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(se.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;ue=((ue<0?0:ue)+i+se.length)%se.length,f(),G("rosterHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=se[ue>=0?ue:0];r!=null&&r.account_name&&Qo(r.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(n=>{n.addEventListener("click",()=>{Qo(n.dataset.rosterHistoryAccount||"")})})}function Ma(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{zt=!1,f()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",n=>{Ke=n.target.value||"",fe=-1,pt+=1;const r=pt;if(clearTimeout(Oo),!Ke.trim()){Oe="",ae=[],Yt="",Rt="",at=[],ct=!1,f(),G("discordHistorySearchInput");return}Oo=setTimeout(()=>{Hu({auto:!0,keepFocus:!0,generation:r})},Xl)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(ae.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;fe=((fe<0?0:fe)+i+ae.length)%ae.length,f(),G("discordHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=ae[fe>=0?fe:0];r!=null&&r.discord_id&&Jo(r.discord_id,ki(r))})),document.querySelectorAll("[data-discord-history-id]").forEach(n=>{n.addEventListener("click",()=>{Jo(n.dataset.discordHistoryId||"",n.dataset.discordHistoryName||"")})})}async function Hu(t={}){const e=Number.isInteger(t.generation)?t.generation:++pt,n=Ke.trim();if(e===pt){if(!n){Oe="",ae=[],fe=-1,Yt="",Rt="",at=[],ct=!1,f(),t.keepFocus&&G("discordHistorySearchInput");return}ct=!0,Oe="",ae=[],fe=-1,Yt="",Rt="",at=[],f(),t.keepFocus&&G("discordHistorySearchInput");try{const r=await R("guildsync:request-discord-member-history",{query:n},3e4);if(e!==pt||n!==Ke.trim())return;if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search Discord member history.");ae=Vu(r.matches),fe=ae.length>0?0:-1}catch(r){if(e!==pt||n!==Ke.trim())return;Oe=L(r)}finally{if(e!==pt||n!==Ke.trim())return;ct=!1,f(),t.keepFocus&&G("discordHistorySearchInput")}}}async function Jo(t,e="",n={}){const r=String(t||"").trim();if(!!r){Yt=r,Rt=String(e||r).trim(),Ke=Rt,at=[],ct=!0,Oe="",f();try{const i=await R("guildsync:request-discord-member-history-events",{discord_id:r},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");at=Wu(i.events)}catch(i){Oe=L(i)}finally{ct=!1,n.keepLoading||f()}}}function Vu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function Wu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s,o,a,l,d,y,p,b;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((r=(n=e.old_value)!=null?n:e.oldValue)!=null?r:"").trim(),new_value:String((s=(i=e.new_value)!=null?i:e.newValue)!=null?s:"").trim(),event_timestamp:(l=(a=(o=e.event_timestamp)!=null?o:e.eventTimestamp)!=null?a:e.timestamp)!=null?l:"",event_datetime:(y=(d=e.event_datetime)!=null?d:e.eventDatetime)!=null?y:"",initiator:String((b=(p=e.initiator)!=null?p:e.initiatorName)!=null?b:"").trim(),source:String(e.source||"").trim()}}):[]}async function ju(t={}){const e=qn.trim();if(!e){Ie="",se=[],ue=-1,ut="",rt=[],it=!1,f(),t.keepFocus&&G("rosterHistorySearchInput");return}it=!0,Ie="",se=[],ue=-1,ut="",rt=[],f(),t.keepFocus&&G("rosterHistorySearchInput");try{const n=await R("guildsync:request-roster-rank-history",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search roster rank history.");se=zu(n.matches),ue=se.length>0?0:-1}catch(n){Ie=L(n)}finally{it=!1,f(),t.keepFocus&&G("rosterHistorySearchInput")}}async function Qo(t,e={}){const n=String(t||"").trim();if(!!n){ut=n,qn=n,rt=[],it=!0,Ie="",f();try{const r=await R("guildsync:request-roster-stream-history",{account_name:n},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load roster stream history.");rt=Yu(r.events)}catch(r){Ie=L(r)}finally{it=!1,e.keepLoading||f()}}}function zu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function Yu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(r=(n=e.timestamp)!=null?n:e.timestampS)!=null?r:"",officer:String(e.officer||"").trim()}}):[]}function Ta(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(n=e.joined)!=null?n:"",note_count:Number((i=(r=e.note_count)!=null?r:e.noteCount)!=null?i:0)||0}}).sort((e,n)=>e.account_name.localeCompare(n.account_name)):[]}function Ku(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function Cr(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function Ki(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function Ju(t={}){ce=Ta(t.members),mr=t.last_refresh||new Date().toISOString(),en(),m("roster-data-updated",`Roster data updated. Loaded ${ce.length} member record${ce.length===1?"":"s"}.`,{ttlMs:g})}async function gn(t={}){if(!!(u!=null&&u.connected)){Ge=!0,en();try{const e=await R("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");ce=Ta(e.members),mr=e.last_refresh||mr,t.silent||m("roster-data-loaded",`Loaded ${ce.length} roster member${ce.length===1?"":"s"}.`,{ttlMs:g})}catch(e){m("roster-data-error",L(e),{ttlMs:g})}finally{Ge=Boolean(t.deferPendingRefresh),en(),t.deferPendingRefresh||Wn("eso-members")}}}async function Qu(t={}){var e;if(!!T()){if(!(u!=null&&u.connected)){m("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:g});return}Ge=!0,en();try{const n=await Rl(t);if(!(n!=null&&n.ok)){m("roster-data-pending",(n==null?void 0:n.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:g});return}const r={local_upload_id:Ba(),authenticated_username:Se(),authenticated_discord_user_id:((e=k==null?void 0:k.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await Ca(r)}catch(i){throw Xu(r),i}await gn({silent:!0,deferPendingRefresh:!0})}catch(n){m("roster-data-error",L(n),{ttlMs:g})}finally{Ge=!1,en(),Wn("eso-members")}}}function Ba(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Ji(){try{const t=window.localStorage.getItem($s),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Na(t){window.localStorage.setItem($s,JSON.stringify(Array.isArray(t)?t:[]))}function Xu(t){const e=String((t==null?void 0:t.local_upload_id)||Ba()),n=Ji().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Na(n),m("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:g})}function Zu(t){const e=Ji().filter(n=>(n==null?void 0:n.local_upload_id)!==t);Na(e)}async function ef(){if(Kr||!(u!=null&&u.connected)||!T())return;const t=Ji();if(t.length!==0){Kr=!0;try{for(const e of t){if(!(u!=null&&u.connected)||!T())return;await Ca(e),Zu(e.local_upload_id)}}catch(e){m("roster-data-pending-error",`Pending roster upload retry failed: ${L(e)}`,{ttlMs:g})}finally{Kr=!1}}}async function Ca(t){if(!(u!=null&&u.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await R("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const n=await Tl(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return m("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:g}),e}async function tf(t={}){var e,n;if(!!T()){if(!(u!=null&&u.connected)){m("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:g});return}try{const r=await $l(t);if(!(r!=null&&r.ok)){m("applications-data-info",(r==null?void 0:r.message)||"No application records were found to process.",{ttlMs:g});return}if((Array.isArray((e=r==null?void 0:r.data)==null?void 0:e.records)?r.data.records:[]).length===0){m("applications-data-info",`No application records were found in ${r.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:g});return}const s={local_upload_id:qa(),authenticated_username:Se(),authenticated_discord_user_id:((n=k==null?void 0:k.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await Ia(s)}catch(o){throw nf(s),o}}catch(r){m("applications-data-error",L(r),{ttlMs:g})}}}function qa(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Qi(){try{const t=window.localStorage.getItem(Es),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function xa(t){window.localStorage.setItem(Es,JSON.stringify(Array.isArray(t)?t:[]))}function nf(t){const e=String((t==null?void 0:t.local_upload_id)||qa()),n=Qi().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),xa(n),m("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:g})}function rf(t){const e=Qi().filter(n=>(n==null?void 0:n.local_upload_id)!==t);xa(e)}async function of(){if(Jr||!(u!=null&&u.connected)||!T())return;const t=Qi();if(t.length!==0){Jr=!0;try{for(const e of t){if(!(u!=null&&u.connected)||!T())return;await Ia(e),rf(e.local_upload_id)}}catch(e){m("applications-data-pending-error",`Pending application upload retry failed: ${L(e)}`,{ttlMs:g})}finally{Jr=!1}}}async function Ia(t){var i;if(!(u!=null&&u.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return m("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:g}),{ok:!0,sent_count:0,skipped_empty:!0};let n=0;for(const s of e){const o=await R("guildsync:eso-guild-application-message",{...t,record:s,recordKey:(s==null?void 0:s.recordKey)||"",message:sf(s)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Backend rejected the application data payload. Application data was not cleared.");n+=1}const r=await Dl(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return m("applications-data-sent",`Sent ${n} application record${n===1?"":"s"} to GuildSync backend.`,{ttlMs:g}),{ok:!0,sent_count:n}}function sf(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),n=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",r=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",s=String(t.applicationText||"_No application text captured._"),o=Object.entries(t).filter(([a])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(a)).map(([a,l])=>`**${a}:** ${af(l)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${n}** ${r} an application from **${i}**.`,"","**Application text:**","```",s.slice(0,1500),"```",o.length>0?"":null,o.length>0?"**Full captured record fields:**":null,...o].filter(a=>a!==null).join(`
`)}function af(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function cf(t={}){await tf(t)}function Oa(){const t=Ei(F),e=Pf(t,F),n=F!=="other",r=n&&bn(F);return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <button id="openBankingHistoryButton" class="refresh-discord-button banking-history-button" type="button" ${T()?"":'disabled title="Login required to lookup banking history."'}>
            <span aria-hidden="true">\u2315</span>
            <span>Lookup Banking History</span>
          </button>
          <button id="openManualBiweeklyTicketButton" class="bank-export-button" type="button" ${T()?"":'disabled title="Login required to add manual entries."'}>
            <span aria-hidden="true">\uFF0B</span>
            <span>Add Manual Entry</span>
          </button>
          ${gf()}
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${c(oc(Ns))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${He||!T()?"disabled":""} ${T()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${He?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${ei("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${ei("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${ei("other","?","Other","All other deposits")}
        </div>

        ${pf(F)}

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
              ${t.length>0?t.map(i=>Gf(i,n,r)).join(""):Uf(n,r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${c(Ut(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${F==="monthly"?`<div>Raffle Pot: <strong>${c(Ut(Math.floor(e.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${F==="biweekly"?`<div>Raffle Pot: <strong>${c(Ut(ja(e.amount)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${F==="biweekly"?`<div>Draws: <strong>${c(String(Ff(e.amount)))}</strong></div>`:""}
          ${n?`<div>Purchased: <strong>${c(ye(e.purchased))}</strong></div>${r?`<div>Bonus: <strong>${c(ye(e.bonus))}</strong></div>`:""}<div>Total Tickets: <strong>${c(ye(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${Lt?ff(Ei(ke)):""}
    </div>
  `}function lf(){return`
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
            <input id="bankingHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" autocomplete="off" placeholder="Start typing part of an account name..." value="${h(Dt)}" />
          </label>
          ${df()}
        </div>

        ${De?`<div class="discord-data-error">${c(De)}</div>`:""}

        <div class="banking-history-results">
          <div class="roster-history-section-title">Banking History${Ee?`: ${c(Ee)}`:""}${Ee?`<span class="banking-history-count">${c(String(be.length))} record${be.length===1?"":"s"} found</span>`:""}</div>
          ${uf()}
        </div>
      </div>
    </div>
  `}function df(){return Dt.trim()?Re&&Q.length===0&&!Ee?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">Searching...</div></div>':Q.length===0&&!Ee?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">No matching banking names found.</div></div>':Q.length===0?"":`
    <div class="banking-history-autocomplete" role="listbox" aria-label="Banking history matches">
      ${Q.map((t,e)=>`
        <button class="banking-history-autocomplete-option${e===he?" is-selected":""}" type="button" data-banking-history-account="${h(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <small>${c(String(Number(t.record_count||t.recordCount||0)||0))} record${Number(t.record_count||t.recordCount||0)===1?"":"s"}</small>
        </button>
      `).join("")}
    </div>
  `:""}function uf(){const t=be.some(e=>e.bonus_enabled);return Ee?Re&&be.length===0?'<div class="roster-history-muted">Loading banking history...</div>':be.length===0?'<div class="roster-history-muted">No banking history found for this account.</div>':`
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
          ${be.map(e=>{var n,r,i,s,o;return`
            <tr>
              <td>${c(Df((i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:""))}</td>
              <td>${c(Mf(e.transaction_type||e.type||""))}</td>
              <td style="text-align:right;">${c(Tf((o=(s=e.deposit_amount)!=null?s:e.depositAmount)!=null?o:e.amount))} \u{1FA99}</td>
              <td style="text-align:right;">${c(ti(e.purchased_tickets))}</td>
              ${t?`<td style="text-align:right;">${e.bonus_enabled?`${c(ye(e.bonus_percent))}%`:""}</td><td style="text-align:right;">${e.bonus_enabled?c(ti(e.bonus_tickets)):""}</td>`:""}
              <td style="text-align:right;">${c(ti(e.total_tickets))}</td>
              <td class="banking-history-note-cell">${c(e.note||"")}</td>
            </tr>
          `}).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see banking history.</div>'}function ff(t){const e=bn(ke);return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${c(Me(ke))} Deposits</h3>
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
              ${t.length>0?t.map(n=>hf(n)).join(""):mf()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${c(Ha(t))}</textarea>
      </div>
    </div>
  `}function hf(t){const e=bn(ke);return`
    <tr data-bank-event-id="${h(t.eventId||"")}">
      <td>${c(t.displayName||"")}</td>
      <td>${c(String(no(t,ke)))}</td>
      <td>${c(String(t.purchasedTickets))}</td>
      ${e?`<td>${c(String(t.bonusPercent))}%</td><td>${c(String(t.bonusTickets))}</td>`:""}
      <td>${c(String(t.totalTickets))}</td>
      <td>${c(t.note||"")}</td>
    </tr>
  `}function mf(){return`
    <tr>
      <td class="bank-empty-row" colspan="${bn(ke)?7:5}">No deposits to export for ${c(Me(ke))}.</td>
    </tr>
  `}function pf(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=eo(t),n=_r(t),r=n<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${h(Me(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${c(Me(t))} Raffle Period ${n===0?"(Current)":`(${Math.abs(n)} period${Math.abs(n)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${c(lr(e.salesStart))} through ${c(lr(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${c(lr(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${r?"":"disabled"} aria-label="Next ${h(Me(t))} raffle period">\u203A</button>
    </div>
  `}function ei(t,e,n,r){const i=F===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${h(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${c(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${c(n)}</span>
        <span class="bank-section-subtitle">${c(r)}</span>
      </span>
    </button>
  `}function gf(){if(!T())return"";const t=qr(),e=zn(),n=Pa(),r=t>0,i=e>0,s=n>0;if(!r&&!i&&!s)return"";let o="",a="",l=!1;r?(o=`Check Out ${t} Deposit Mail`,a="checkout"):i?(l=!0,Ct?o=`Writing ${e} Pending Mail`:te.running?o=`${e} Mail Waiting for ESO Closure`:(Za("render-pending-mail-button"),o=`${e} Mail Writing to Disk`)):(l=!0,o=`${n} Mail Ready to Send`);const d=r?"Check out new deposit mail. GuildSync will immediately try to write it, or hold it until ESO closes.":i?"Deposit mail is already checked out and will be written automatically after ESO closes.":"Deposit mail has been written to ESO SavedVariables and is ready for ESO to send it and write acknowledgements.",y=di||Ct,p=te.running?"ESO Running":"ESO Not Running",b=te.running?"eso-running":"eso-not-running";return`
    <button id="checkoutDepositMailButton" class="${`bank-export-button deposit-mail-button${l?" deposit-mail-status-only":""}`}" type="button" data-deposit-mail-action="${h(a)}" ${l||y?'aria-disabled="true"':""} title="${h(te.message||d)}" aria-label="${h(`${o}. ${d}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${c(o)}</span>
      <span aria-hidden="true">(</span><span class="deposit-mail-eso-status ${b}" aria-hidden="true">${c(p)}</span><span aria-hidden="true">)</span>
    </button>
  `}function zn(){return Yn().reduce((t,e)=>t+yn(e.records).length,0)}function bf(){const t=(k==null?void 0:k.user)||{};return new Set([Se(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function yf(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?bf().has(e):!1}function Pa(){return T()?re.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="written_to_eso"&&yf(t)}).length:0}function qr(){return re.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="unsent"}).length}function kf(t){const e=String(t||"").trim();return re.find(n=>String(n.eventId||"").trim()===e)||null}function Xi(t){const e=String(t||"other").toLowerCase(),n=["biweekly","monthly","other"],r=n.includes(e)?e:"other",i=n.filter(s=>s!==r);return[i[0]||"biweekly",r,i[1]||"other"]}function Zi(t={},e="other"){const n=String(e||"other").toLowerCase(),r=Number(t==null?void 0:t.amount)||0;return n===String((t==null?void 0:t.type)||"").toLowerCase()?Number(t==null?void 0:t.ticketAmount)||0:n==="biweekly"?Math.floor(r/500):n==="monthly"?Math.floor(r/2500):0}function Fa(t={},e="other",n=""){const r=String(t.type||"other").toLowerCase(),i=Me(r),s=Me(e),o=Se()||"Unknown user",a=[`Moved from ${i} to ${s} by ${o}.`,`Ref ${t.eventId||""}`],l=String(n||"").trim();return l&&a.push(`Reason: ${l}`),a.join(`
`)}function Ga(t){const e=kf(t);if(!e){m("banking-move-missing","Could not find the selected banking entry.",{ttlMs:g});return}const n=String(e.type||"other").toLowerCase();Ce=e,j={targetType:n,note:"",tickets:String(Zi(e,n))},Ne="",Qt=!1,hn=!0,f()}function wr(){hn=!1,Qt=!1,Ne="",Ce=null,j={targetType:"other",note:"",tickets:""},f()}function vf(){const t=Ce||{},e=String(t.type||"other").toLowerCase(),n=Me(e),r=Xi(e);let i=String(j.targetType||r[0]||"other").toLowerCase();r.includes(i)||(i=r[0]||"other",j.targetType=i);const s=Fa(t,i,j.note);return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="bankingMoveDialogTitle">
      <div class="roster-history-dialog manual-ticket-dialog banking-move-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="bankingMoveDialogTitle">Move Banking Entry</h3>
            <p>Move this deposit to a different banking section while preserving a reference to the original event.</p>
          </div>
          <button id="closeBankingMoveDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${Ne?`<div class="discord-data-error">${c(Ne)}</div>`:""}

        <div class="manual-ticket-form banking-move-form">
          <div class="banking-move-current-entry">
            <div><strong>Current Type:</strong> ${c(n)}</div>
            <div><strong>Event ID:</strong> ${c(t.eventId||"")}</div>
            <div><strong>Depositor:</strong> ${c(t.displayName||"")}</div>
            <div><strong>Amount:</strong> ${c(Ut(t.amount))} \u{1FA99}</div>
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
                    <strong>${c(Me(o))}</strong>
                    <span>${o===e?"Current / restore original values":`${c(String(Zi(t,o)))} tickets`}</span>
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
            <button id="saveBankingMoveButton" class="refresh-discord-button banking-move-submit-button" type="button" ${Qt||i===e?"disabled":""}>${Qt?"MOVING...":i===e?"SELECT A SIDE TO MOVE":"MOVE"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Sf(){var n,r,i,s;if(!hn)return;(n=document.querySelector("#closeBankingMoveDialogButton"))==null||n.addEventListener("click",()=>wr());function t(o){const a=String(o||"other").toLowerCase(),l=String((Ce==null?void 0:Ce.type)||"other").toLowerCase(),d=Xi(l);j.targetType=d.includes(a)?a:l,j.tickets=String(Zi(Ce||{},j.targetType)),f()}document.querySelectorAll("[data-banking-move-target]").forEach(o=>{o.addEventListener("click",()=>t(o.dataset.bankingMoveTarget))}),(r=document.querySelector("#bankingMoveTicketsInput"))==null||r.addEventListener("input",o=>{const a=String(o.target.value||"").replace(/\D/g,"");o.target.value!==a&&(o.target.value=a),j.tickets=a}),(i=document.querySelector("#bankingMoveNoteInput"))==null||i.addEventListener("input",o=>{j.note=o.target.value||"";const a=document.querySelector(".banking-move-generated-note");a&&(a.innerText=Fa(Ce||{},j.targetType||"other",j.note))}),(s=document.querySelector("#saveBankingMoveButton"))==null||s.addEventListener("click",()=>wf());const e=document.querySelector(".roster-history-overlay");e&&e.addEventListener("click",o=>{o.target===e&&wr()})}async function wf(){const t=Ce;if(!(t!=null&&t.eventId)){Ne="No banking entry is selected.",f();return}const e=String(t.type||"other").toLowerCase(),n=Xi(e),r=String(j.targetType||n[0]||"other").toLowerCase();if(!n.includes(r)||r===e){Ne="Select one of the side destinations before moving this entry.",f();return}const i=r==="other"?0:Math.floor(Number(String(j.tickets||"").trim()||0));if(!Number.isFinite(i)||i<0){Ne="Tickets must be zero or greater.",f();return}Qt=!0,Ne="",f();try{const s=await R("guildsync:move-banking-entry",{event_id:t.eventId,target_type:r,tickets:i,note:j.note||""},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to move banking entry.");wr(),await we({silent:!0}),m("banking-entry-moved",s.message||"Banking entry moved.",{ttlMs:g})}catch(s){Qt=!1,Ne=L(s),f()}}function _f(){if(!T()){m("banking-history-login-required","Login required to lookup banking history.",{ttlMs:g});return}mn=!0,Dt="",Q=[],be=[],Ee="",Re=!1,De="",he=-1,clearTimeout(Ft),f(),G("bankingHistorySearchInput")}function Af(){mn=!1,Re=!1,De="",clearTimeout(Ft)}function Lf(){if(!mn)return;const t=document.querySelector("#bankingHistorySearchInput");t&&(t.addEventListener("input",e=>{if(Dt=e.target.value||"",he=-1,Ee="",be=[],!Dt.trim()){clearTimeout(Ft),De="",Q=[],Re=!1,f(),G("bankingHistorySearchInput");return}clearTimeout(Ft),Ft=setTimeout(()=>{$f({keepFocus:!0})},250)}),t.addEventListener("keydown",e=>{if(e.key==="ArrowDown"||e.key==="ArrowUp"){if(Q.length===0)return;e.preventDefault();const r=e.key==="ArrowDown"?1:-1;he=((he<0?0:he)+r+Q.length)%Q.length,f(),G("bankingHistorySearchInput");return}if(e.key!=="Enter")return;e.preventDefault();const n=Q[he>=0?he:0];n!=null&&n.account_name&&Xo(n.account_name)})),document.querySelectorAll("[data-banking-history-account]").forEach(e=>{e.addEventListener("click",()=>{Xo(e.dataset.bankingHistoryAccount||"")})})}async function $f(t={}){const e=Dt.trim();if(!e){De="",Q=[],he=-1,Ee="",be=[],Re=!1,f(),t.keepFocus&&G("bankingHistorySearchInput");return}Re=!0,De="",Q=[],he=-1,f(),t.keepFocus&&G("bankingHistorySearchInput");try{const n=await R("guildsync:request-banking-history-matches",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search banking history.");Q=Ef(n.matches),he=Q.length>0?0:-1}catch(n){De=L(n)}finally{Re=!1,f(),t.keepFocus&&G("bankingHistorySearchInput")}}async function Xo(t){const e=String(t||"").trim();if(!!e){clearTimeout(Ft),Ee=e,Dt=e,Q=[],be=[],Re=!0,De="",f();try{const n=await R("guildsync:request-banking-history-records",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load banking history.");be=Rf(n.records)}catch(n){De=L(n)}finally{Re=!1,f()}}}function Ef(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s;return{account_name:String(e.account_name||e.accountName||"").trim(),record_count:Number((r=(n=e.record_count)!=null?n:e.recordCount)!=null?r:0)||0,last_event_timestamp:(s=(i=e.last_event_timestamp)!=null?i:e.lastEventTimestamp)!=null?s:""}}).filter(e=>e.account_name):[]}function Rf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s,o,a,l,d,y,p,b,w,S,_,B,v,O,H,Z;return{event_id:String(e.event_id||e.eventId||"").trim(),transaction_type:String(e.transaction_type||e.transactionType||e.type||"").trim(),event_timestamp:(i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:"",deposit_amount:(a=(o=(s=e.deposit_amount)!=null?s:e.depositAmount)!=null?o:e.amount)!=null?a:"",ticket_quantity:(y=(d=(l=e.ticket_quantity)!=null?l:e.ticketQuantity)!=null?d:e.ticketAmount)!=null?y:"",purchased_tickets:(S=(w=(b=(p=e.purchasedTickets)!=null?p:e.ticket_quantity)!=null?b:e.ticketQuantity)!=null?w:e.ticketAmount)!=null?S:0,bonus_tickets:(_=e.bonusTickets)!=null?_:0,bonus_percent:(B=e.bonusPercent)!=null?B:0,bonus_enabled:e.bonusEnabled===!0,total_tickets:(Z=(H=(O=(v=e.totalTickets)!=null?v:e.ticket_quantity)!=null?O:e.ticketQuantity)!=null?H:e.ticketAmount)!=null?Z:0,note:String(e.note||"").trim()}}).sort((e,n)=>{const r=Number(e.event_timestamp)||0,i=Number(n.event_timestamp)||0;return r!==i?r-i:String(e.event_id).localeCompare(String(n.event_id),void 0,{numeric:!0})}):[]}function Df(t){const e=Number(t);if(!e)return"";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t);const r=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0"),s=String(n.getFullYear()),o=String(n.getHours()).padStart(2,"0"),a=String(n.getMinutes()).padStart(2,"0"),l=String(n.getSeconds()).padStart(2,"0");return`${r}/${i}/${s} ${o}:${a}:${l}`}function Mf(t){const e=String(t||"").trim().toLowerCase();return e==="monthly"?"50/50":e==="biweekly"?"Bi-Weekly":e==="other"?"Other":e?e.replace(/\b\w/g,n=>n.toUpperCase()):""}function Tf(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":Ut(e)}function ti(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":ye(e)}function Ua(){if(I!=="more")return;Sf(),Lf(),document.querySelectorAll("[data-bank-entry-move]").forEach(a=>{a.addEventListener("click",()=>Ga(a.dataset.bankEntryMove||""))}),document.querySelectorAll("[data-bank-section]").forEach(a=>{a.addEventListener("click",()=>{F=a.dataset.bankSection||"biweekly",f()})}),document.querySelectorAll("[data-bank-export-section]").forEach(a=>{a.addEventListener("click",()=>{ke=(a.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",Lt=!0,f()})}),document.querySelectorAll("[data-bank-period-move]").forEach(a=>{a.addEventListener("click",()=>{Cf(a.dataset.bankPeriodMove||""),f()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{Lt=!1,f()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>Bf());const n=document.querySelector(".bank-export-overlay");n&&n.addEventListener("click",a=>{a.target===n&&(Lt=!1,f())});const r=document.querySelector("#openBankingHistoryButton");r&&r.addEventListener("click",()=>_f());const i=document.querySelector("#openManualBiweeklyTicketButton");i&&i.addEventListener("click",async()=>{if(!T()){m("manual-ticket-login-required","Login required to add manual entries.",{ttlMs:g});return}Fe=!0,ie="",pn=x.accountName||"",pe=!1,J=-1,ce.length===0&&(u==null?void 0:u.connected)&&T()&&await gn({silent:!0}),f()});const s=document.querySelector("#checkoutDepositMailButton");s&&s.addEventListener("click",()=>{s.dataset.depositMailAction==="checkout"&&s.getAttribute("aria-disabled")!=="true"&&Xa()});const o=document.querySelector("#refreshBankingDataButton");o&&o.addEventListener("click",()=>{if(!T()){m("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:g});return}Ka({key:"banking"})})}function Ha(t){const e=bn(ke),n=[["Guildie Name","Deposit Amount","Purchased Tickets",...e?["Bonus %","Bonus Tickets"]:[],"Total Tickets","Note"]];for(const r of t)n.push([r.displayName||"",String(no(r,ke)),String(r.purchasedTickets),...e?[`${r.bonusPercent}%`,String(r.bonusTickets)]:[],String(r.totalTickets),r.note||""]);return n.map(r=>r.map(xr).join("	")).join(`
`)}function xr(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function Ir(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly","readonly"),n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.width="1px",n.style.height="1px",n.style.opacity="0",n.style.pointerEvents="none",n.style.zIndex="-1",document.body.appendChild(n),n.focus(),n.select(),n.setSelectionRange(0,n.value.length);let r=!1;try{r=document.execCommand("copy")}finally{document.body.removeChild(n)}return r}async function Bf(){const t=Ei(ke),e=Ha(t);if(await Ir(e)){m("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:g});return}const r=document.querySelector("#bankingExportTsv");r&&(r.focus(),r.select()),m("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:g})}function Ei(t){return re.filter(e=>e.type===t).filter(e=>Nf(t,e)).sort((e,n)=>(Number(e.time)||0)-(Number(n.time)||0))}function Nf(t,e){if(t==="other")return!0;const n=Number(e==null?void 0:e.time)||0;if(n<=0)return!1;const r=eo(t);return n>=r.salesStart&&n<=r.salesEnd}function _r(t){return Number(gi[t])||0}function Cf(t){if(F!=="biweekly"&&F!=="monthly")return;const e=_r(F);if(t==="previous"){gi[F]=e-1;return}t==="next"&&e<0&&(gi[F]=e+1)}function eo(t){const e=Math.floor(Date.now()/1e3);if(t==="monthly"){const i=qf(e,_r(t));return{salesStart:Wa(i)+1,salesEnd:i,raffleTime:i+yr}}const n=ft;let r=Va(e);return r+=_r(t)*n,{salesStart:r-n+1,salesEnd:r,raffleTime:r+yr}}function Va(t){const e=ft;let n=Zl;for(;n-e>t;)n-=e;for(;n<t;)n+=e;return n}function qf(t,e=0){let n=xf(t),r=Number(e)||0;for(;r<0;)n=Wa(n),r+=1;for(;r>0;)n=If(n),r-=1;return n}function xf(t){let e=Va(t);for(;!to(e);)e+=ft;return e}function Wa(t){let e=t-ft;for(;!to(e);)e-=ft;return e}function If(t){let e=t+ft;for(;!to(e);)e+=ft;return e}function to(t){const e=t+yr,n=t+ft+yr;return Zo(e)!==Zo(n)}function Zo(t){var s,o;const e=new Date(Number(t||0)*1e3);if(Number.isNaN(e.getTime()))return"";const n=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit"}).formatToParts(e),r=((s=n.find(a=>a.type==="year"))==null?void 0:s.value)||"",i=((o=n.find(a=>a.type==="month"))==null?void 0:o.value)||"";return`${r}-${i}`}function Of(t=F){const e=String(t||"").toLowerCase();return e!=="monthly"&&e!=="biweekly"?0:"auto"}function no(t={},e=F){const n=Number(t.amount)||0;if(!Of(e))return n;const r=Math.abs(Math.trunc(n))%10,i=r===1||r===3?r:0;return i>0&&n>i?n-i:n}function Pf(t,e=F){return t.reduce((n,r)=>(n.amount+=no(r,e),n.purchased+=Number(r.purchasedTickets)||0,n.bonus+=Number(r.bonusTickets)||0,n.tickets+=Number(r.totalTickets)||0,n),{amount:0,purchased:0,bonus:0,tickets:0})}function ja(t){const e=Math.ceil((Number(t)||0)/2);return e<=0?0:Math.ceil(e/2e5)*2e5}function Ff(t){const e=ja(t);return e>0?e/2e5:0}function bn(t){var n;if(t!=="biweekly"&&t!=="monthly")return!1;const{salesEnd:e}=eo(t);return((n=Jt.find(r=>r.type===t&&r.salesEnd===e))==null?void 0:n.enabled)===!0}function Gf(t,e=!0,n=bn(F)){return`
    <tr data-bank-event-id="${h(t.eventId||"")}">
      <td>${c(t.note||t.eventId||"")}</td>
      <td>${c(lr(t.time))}</td>
      <td>${c(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${c(Ut(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td>${c(ye(t.purchasedTickets))}</td>${n?`<td>${c(ye(t.bonusPercent))}%</td><td>${c(ye(t.bonusTickets))}</td>`:""}<td><strong class="bank-ticket-amount">${c(ye(t.totalTickets))}</strong></td>`:""}
      <td><button class="bank-entry-move-button" type="button" data-bank-entry-move="${h(t.eventId||"")}">Move</button></td>
    </tr>
  `}function Uf(t=!0,e=!1){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?e?"9":"7":"5"}">No ${c(Me(F))} deposits found for this ${F==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function Me(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function lr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Ut(t){return(Number(t)||0).toLocaleString()}function ye(t){return(Number(t)||0).toLocaleString()}function yn(t){return Array.isArray(t)?t.map(e=>{var r,i,s,o,a,l,d,y,p,b,w,S,_,B,v,O,H,Z,Tt,Kn,je,kn,mt,Vr,A,D,E,V,N,P,_e,Jn,mo,po,go,bo,yo,ko,vo,So,wo,_o,Ao,Lo,$o,Eo,Ro;const n=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:n==="monthly"||n==="biweekly"||n==="other"?n:"other",eventId:String((i=(r=e==null?void 0:e.eventId)!=null?r:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((o=(s=e==null?void 0:e.time)!=null?s:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((l=(a=e==null?void 0:e.displayName)!=null?a:e==null?void 0:e.display_name)!=null?l:"").trim(),amount:Number((d=e==null?void 0:e.amount)!=null?d:0)||0,ticketAmount:Number((p=(y=e==null?void 0:e.ticketAmount)!=null?y:e==null?void 0:e.ticket_amount)!=null?p:0)||0,purchasedTickets:Number((w=(b=e==null?void 0:e.purchasedTickets)!=null?b:e==null?void 0:e.ticketAmount)!=null?w:0)||0,bonusTickets:Number((S=e==null?void 0:e.bonusTickets)!=null?S:0)||0,bonusPercent:Number((_=e==null?void 0:e.bonusPercent)!=null?_:0)||0,bonusEnabled:(e==null?void 0:e.bonusEnabled)===!0,totalTickets:Number((v=(B=e==null?void 0:e.totalTickets)!=null?B:e==null?void 0:e.ticketAmount)!=null?v:0)||0,note:String((O=e==null?void 0:e.note)!=null?O:"").trim(),dataSource:String((Z=(H=e==null?void 0:e.dataSource)!=null?H:e==null?void 0:e.data_source)!=null?Z:"").trim(),emailRequested:Boolean((Tt=e==null?void 0:e.emailRequested)!=null?Tt:e==null?void 0:e.email_requested),mailStatus:String((je=(Kn=e==null?void 0:e.mailStatus)!=null?Kn:e==null?void 0:e.mail_status)!=null?je:"").trim(),mailRequestId:String((mt=(kn=e==null?void 0:e.mailRequestId)!=null?kn:e==null?void 0:e.mail_request_id)!=null?mt:"").trim(),mailBatchId:String((A=(Vr=e==null?void 0:e.mailBatchId)!=null?Vr:e==null?void 0:e.mail_batch_id)!=null?A:"").trim(),checkedOutBy:String((E=(D=e==null?void 0:e.checkedOutBy)!=null?D:e==null?void 0:e.checked_out_by)!=null?E:"").trim(),checkedOutAt:String((N=(V=e==null?void 0:e.checkedOutAt)!=null?V:e==null?void 0:e.checked_out_at)!=null?N:"").trim(),checkoutExpiresAt:String((_e=(P=e==null?void 0:e.checkoutExpiresAt)!=null?P:e==null?void 0:e.checkout_expires_at)!=null?_e:"").trim(),writtenToEsoAt:String((mo=(Jn=e==null?void 0:e.writtenToEsoAt)!=null?Jn:e==null?void 0:e.written_to_eso_at)!=null?mo:"").trim(),sentAt:String((go=(po=e==null?void 0:e.sentAt)!=null?po:e==null?void 0:e.sent_at)!=null?go:"").trim(),failedReason:String((yo=(bo=e==null?void 0:e.failedReason)!=null?bo:e==null?void 0:e.failed_reason)!=null?yo:"").trim(),recipient:String((wo=(So=(vo=(ko=e==null?void 0:e.recipient)!=null?ko:e==null?void 0:e.account_name)!=null?vo:e==null?void 0:e.displayName)!=null?So:e==null?void 0:e.display_name)!=null?wo:"").trim(),subject:String((Lo=(Ao=(_o=e==null?void 0:e.subject)!=null?_o:e==null?void 0:e.mailSubject)!=null?Ao:e==null?void 0:e.mail_subject)!=null?Lo:"").trim(),body:String((Ro=(Eo=($o=e==null?void 0:e.body)!=null?$o:e==null?void 0:e.mailBody)!=null?Eo:e==null?void 0:e.mail_body)!=null?Ro:"").trim()}}):[]}function Hf(t){const e=new Map;for(const n of re)n.eventId&&e.set(n.eventId,n);for(const n of t)!n.eventId||e.set(n.eventId,n);re=Array.from(e.values()).sort((n,r)=>(Number(r.time)||0)-(Number(n.time)||0))}function Vf(t){t.querySelectorAll("[data-open-member-link-dialog]").forEach(e=>{e.addEventListener("click",()=>zi(e.dataset.openMemberLinkDialog||"",e.dataset.memberLinkValue||""))}),t.querySelectorAll("[data-open-roster-notes]").forEach(e=>{e.addEventListener("click",()=>Ra(e.dataset.openRosterNotes||""))}),t.querySelectorAll("[data-bank-entry-move]").forEach(e=>{e.addEventListener("click",()=>Ga(e.dataset.bankEntryMove||""))})}function ro(t,e,n=!1,r=!1){const i=document.querySelector(t);if(!i)return;const s=Gi(i),o=document.activeElement,a=o&&"selectionStart"in o?[o.selectionStart,o.selectionEnd]:null,l=document.createElement("template");l.innerHTML=e;const d=l.content.firstElementChild,y=n?".bank-deposit-table":r?".eso-roster-table":".discord-member-table";Do(i.querySelector(`${y} tbody`),d.querySelector(`${y} tbody`),n?"data-bank-event-id":r?"data-eso-account-name":"data-discord-user-id",Vf),$n(i.querySelector(`${y} thead`),d.querySelector(`${y} thead`)),En(i.querySelector(".discord-data-actions .discord-last-refresh"),d.querySelector(".discord-data-actions .discord-last-refresh"));const p=n?"#refreshBankingDataButton":r?"#refreshRosterDataButton":"#refreshDiscordDataButton",b=i.querySelector(p),w=d.querySelector(p);if(b&&w&&(b.disabled=w.disabled,En(b.lastElementChild,w.lastElementChild)),n){$n(i.querySelector(".bank-deposits-summary-row"),d.querySelector(".bank-deposits-summary-row")),$n(i.querySelector(".bank-raffle-period-content"),d.querySelector(".bank-raffle-period-content"));const S=i.querySelector("#checkoutDepositMailButton"),_=d.querySelector("#checkoutDepositMailButton");if(!_)S==null||S.remove();else if(!S||!S.isEqualNode(_)){const Z=_.cloneNode(!0);Z.addEventListener("click",()=>{Z.dataset.depositMailAction==="checkout"&&Z.getAttribute("aria-disabled")!=="true"&&Xa()}),S?S.replaceWith(Z):i.querySelector(".discord-data-actions").insertBefore(Z,i.querySelector("[data-bank-export-section]"))}Do(i.querySelector("#bankingExportGrid tbody"),d.querySelector("#bankingExportGrid tbody"),"data-bank-event-id"),$n(i.querySelector("#bankingExportGrid thead"),d.querySelector("#bankingExportGrid thead")),En(i.querySelector(".bank-export-count"),d.querySelector(".bank-export-count"));const B=i.querySelector("#copyBankingExportGridButton"),v=d.querySelector("#copyBankingExportGridButton");B&&v&&(B.disabled=v.disabled);const O=i.querySelector("#bankingExportTsv"),H=d.querySelector("#bankingExportTsv");O&&H&&O.value!==H.value&&(O.value=H.value)}else{En(i.querySelector(".discord-results-count"),d.querySelector(".discord-results-count"));const S=r?"#rosterRankFilter":"#discordRoleFilter",_=i.querySelector(S),B=d.querySelector(S);if(_&&B&&_.innerHTML!==B.innerHTML){const v=_.value;_.innerHTML=B.innerHTML,_.value=v}}(o==null?void 0:o.isConnected)&&document.activeElement!==o&&(o.focus({preventScroll:!0}),a&&a[0]!==null&&o.setSelectionRange(...a)),s()}function en(){I==="eso-members"&&document.querySelector(".eso-roster-panel")&&ro(".eso-roster-panel",Gs(),!1,!0)}function dr(){We||Ve||ht?f():I==="discord-members"?tn():I==="eso-members"&&en()}function tn(){I==="discord-members"&&document.querySelector(".discord-member-panel")&&ro(".discord-member-panel",Fs())}function za(t){const e=Jt.find(n=>`${n.type}:${n.salesEnd}`===Pe);if(t.bonusSettings&&(K=t.bonusSettings),Array.isArray(t.bonusRaffles)){const n=[...t.bonusRaffles];e&&!n.some(r=>`${r.type}:${r.salesEnd}`===Pe)&&n.push(e),Jt=n}}function Wf(){if(I!=="settings"||!K)return;const t=document.querySelector(".raffle-bonus-card");if(!t)return;const e=Gi(t.parentElement),n=document.createElement("template");n.innerHTML=Ys();const r=n.content.firstElementChild;if(t.querySelector("#raffleBonusSettingsForm")){const i=t.querySelector("#bonusRafflePicker"),s=r.querySelector("#bonusRafflePicker");if(i&&s&&i.innerHTML!==s.innerHTML){const o=i.value;i.innerHTML=s.innerHTML,i.value=o}if(!me&&(Le==null?void 0:Le.raffle)!==Pe){En(t.querySelector("[data-bonus-settings-source]"),r.querySelector("[data-bonus-settings-source]"));const o=t.querySelectorAll(".raffle-bonus-tiers"),a=r.querySelectorAll(".raffle-bonus-tiers");o.forEach((l,d)=>{const y=a[d];!y||(l.querySelectorAll("input").length!==y.querySelectorAll("input").length?$n(l,y):y.querySelectorAll("input").forEach(p=>{const b=Array.from(l.querySelectorAll("input")).find(w=>w.name===p.name);!b||(b.type==="checkbox"?b.checked!==p.checked&&(b.checked=p.checked):b.value!==p.value&&(b.value=p.value))}))})}}else{const i=r.cloneNode(!0);t.replaceWith(i),zs(i),as(Bs,{refresh:!0,root:i})}e()}function le(){Wf(),I==="more"&&document.querySelector(".bank-deposits-panel")&&ro(".bank-deposits-panel",Oa(),!0)}function Ya(){Ns=new Date().toISOString()}async function jf(t={}){!(t!=null&&t.ok)||(re=yn(t.entries),za(t),Ya(),le(),m("banking-data-updated",`Banking data updated. Loaded ${re.length} deposit record${re.length===1?"":"s"}.`,{ttlMs:g}))}async function we(t={}){const e=Boolean(t.silent),n=Boolean(t.background);if(!(u!=null&&u.connected)){e||m("banking-data-error","GuildSync websocket is not connected.",{ttlMs:g});return}n||(He=!0,le());try{const r=await R("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");re=yn(r.entries),za(r),Ya(),e||m("banking-data",`Loaded ${re.length} banking deposit record${re.length===1?"":"s"}.`,{ttlMs:g})}catch(r){e||m("banking-data-error",L(r),{ttlMs:g})}finally{n||(He=Boolean(t.deferPendingRefresh)),le(),t.deferPendingRefresh||Wn("more")}}async function es(){!(u!=null&&u.connected)||!T()||He||(await we({silent:!0,background:!0}),qr()<=0&&zn()>0&&(te.running?le():Za("availability-refresh")))}function zf(){Nt&&clearInterval(Nt),es(),Nt=window.setInterval(es,Kl)}function Yf(){Nt&&(clearInterval(Nt),Nt=null)}async function Kf(t={}){if(!!T()){if(!(u!=null&&u.connected)){m("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:g});return}try{const e=await Ll(t);if(!(e!=null&&e.ok))return;const n=Array.isArray(e.ackEntries)?e.ackEntries:[];if(n.length===0)return;const r=await R("guildsync:mark-deposit-mail-sent",{mail_ack:n,mail_request_ids:n.map(o=>(o==null?void 0:o.mail_request_id)||(o==null?void 0:o.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(r.mail_request_ids)?r.mail_request_ids:Array.isArray(r.mailRequestIds)?r.mailRequestIds:[];if(i.length===0){m("deposit-mail-ack-none",r.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:g});return}const s=await _l(i);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");m("deposit-mail-ack-sent",s.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:g}),await we({silent:!0})}catch(e){m("deposit-mail-ack-error",L(e),{ttlMs:g})}}}async function Jf(){if(!Qr){Qr=!0;try{const t=await Bl();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&m("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:g})}catch(t){m("deposit-mail-ack-cleanup-error",L(t),{ttlMs:g})}finally{Qr=!1}}}async function Ka(t={}){var e,n;if(!!T()){if(!(u!=null&&u.connected)){m("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:g});return}He=!0,le();try{const r=await El(t);if(!(r!=null&&r.ok)){m("banking-data-pending",(r==null?void 0:r.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:g});return}const i=yn((e=r==null?void 0:r.data)==null?void 0:e.entries);Hf(i);const s=new Date().toISOString(),o={local_upload_id:ec(),authenticated_username:Se(),authenticated_discord_user_id:((n=k==null?void 0:k.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:s,data:r.data||{}};try{await nc(o)}catch(a){throw eh(o),a}await we({silent:!0,deferPendingRefresh:!0})}catch(r){m("banking-data-error",L(r),{ttlMs:g})}finally{He=!1,le(),Wn("more")}}}function Ja(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Yn(){try{const t=window.localStorage.getItem(Ls),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Qa(t){window.localStorage.setItem(Ls,JSON.stringify(Array.isArray(t)?t:[]))}function Qf(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||Ja()),n=Yn().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);n.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),Qa(n)}function ts(t){const e=String(t||"").trim();if(!e)return;const n=Yn().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);Qa(n)}async function Xa(){if(!T()){m("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:g});return}if(!(u!=null&&u.connected)){m("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:g});return}const t=Yn(),e=qr();if(t.length>0&&e<=0){await nn();return}di=!0,le();try{const n=await R("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail checkout request.");const r=yn(n.records);if(r.length===0){m("deposit-mail-none",n.message||"No unsent deposit mail is available.",{ttlMs:g}),await we({silent:!0});return}const i={mail_batch_id:n.mail_batch_id||n.mailBatchId||Ja(),checked_out_by:n.checked_out_by||n.checkedOutBy||Se(),checked_out_at:new Date().toISOString(),records:r};Qf(i),await nn()}catch(n){m("deposit-mail-error",L(n),{ttlMs:g})}finally{di=!1,le()}}function Za(t=""){qt||Ct||!T()||zn()<=0||te.running||(qt=window.setTimeout(()=>{qt=null,nn()},100))}async function nn(){if(qt&&(window.clearTimeout(qt),qt=null),Ct||!T())return;const t=Yn();if(t.length!==0){if(await Ri({silent:!0}),te.running){m("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:g}),le();return}Ct=!0,le();try{for(const e of t){const n=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),r=yn(e==null?void 0:e.records);if(r.length===0){ts(n);continue}const i=await Vl(r);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(u!=null&&u.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const s=await R("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:n,event_ids:i.eventIds||r.map(o=>o.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend did not confirm deposit mail was marked written_to_eso.");ts(n),m("deposit-mail-written",i.message||`Wrote ${r.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:g})}await we({silent:!0})}catch(e){m("deposit-mail-write-error",L(e),{ttlMs:g})}finally{Ct=!1,le()}}}async function Ri(t={}){try{const e=Boolean(te.running),n=await Nl();te={running:Boolean(n==null?void 0:n.running),message:String((n==null?void 0:n.message)||"")},te.running||await Jf(),e&&!te.running&&(m("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:g}),await nn()),e!==te.running&&le()}catch(e){t.silent||m("eso-status-error",L(e),{ttlMs:g})}}function Xf(){Bt&&clearInterval(Bt),Ri({silent:!0}).then(()=>{!te.running&&zn()>0&&nn()}),Bt=window.setInterval(()=>Ri({silent:!0}),Yl)}function Zf(){Bt&&(clearInterval(Bt),Bt=null)}function ec(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function io(){try{const t=window.localStorage.getItem(As),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function tc(t){window.localStorage.setItem(As,JSON.stringify(Array.isArray(t)?t:[]))}function eh(t){const e=String((t==null?void 0:t.local_upload_id)||ec()),n=io().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),tc(n),m("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:g})}function th(t){const e=io().filter(n=>(n==null?void 0:n.local_upload_id)!==t);tc(e)}async function nh(){if(Yr||!(u!=null&&u.connected)||!T())return;const t=io();if(t.length!==0){Yr=!0;try{for(const e of t){if(!(u!=null&&u.connected)||!T())return;await nc(e),th(e.local_upload_id)}}catch(e){m("banking-data-pending-error",`Pending banking upload retry failed: ${L(e)}`,{ttlMs:g})}finally{Yr=!1}}}async function nc(t){if(!(u!=null&&u.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await R("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const n=await Ml(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return m("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:g}),e}function rc(){if(I!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>rh());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{zt=!0,Oe="",f(),G("discordHistorySearchInput")});const n=document.querySelector("#discordMemberSearch");n&&n.addEventListener("input",o=>{hr=o.target.value||"",ui=o.target.selectionStart,fi=o.target.selectionEnd,f({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{ch(o.dataset.discordSortColumn||"username")})});const r=document.querySelector("#discordRoleFilter");r&&r.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(xt.add(a),f())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRoleFilter||"";xt.delete(a),f()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(It.add(a),f())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeDiscordLinkStatusFilter||"";It.delete(a),f()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>zi(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{hr="",xt.clear(),It.clear(),f()})}async function rh(){var t,e;if(!(u!=null&&u.connected)){m("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:g});return}fr=!0,tn(),m("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const n=await R("guildsync:request-discord-data-refresh",{requested_by:((t=k==null?void 0:k.user)==null?void 0:t.display_name)||((e=k==null?void 0:k.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to request Discord data refresh.");m("discord-refresh-requested",n.message||"Discord data refresh completed.",{ttlMs:g}),await Or({silent:!0})}catch(n){m("discord-refresh-error",L(n),{ttlMs:g})}finally{fr=!1,tn()}}async function ih(){if(!(u!=null&&u.connected))return;const t=await R("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(Dr=t.value||null)}async function oh(t={}){if(!!(t!=null&&t.ok)){ne=oo(t.members),Rr=so(t.roles),t.last_refresh&&(Dr=t.last_refresh);try{await ih()}catch{}I==="discord-members"&&tn(),m("discord-data-updated",`Discord data updated. Loaded ${ne.length} member record${ne.length===1?"":"s"}.`,{ttlMs:g})}}async function Or(t={}){const e=Boolean(t.silent);if(!(u!=null&&u.connected)){m("discord-data-error","GuildSync websocket is not connected.",{ttlMs:g});return}Vt=!0,tn();try{const[n,r]=await Promise.all([R("guildsync:request-discord-data-date",{}),R("guildsync:request-discord-member-dataJSON",{})]);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord refresh date.");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord member data.");Dr=n.value||null,ne=oo(r.members),Rr=so(r.roles),e||m("discord-data",`Loaded ${ne.length} Discord member record${ne.length===1?"":"s"}.`,{ttlMs:g})}catch(n){m("discord-data-error",L(n),{ttlMs:g})}finally{Vt=!1,tn(),Wn("discord-members")}}function R(t,e={},n=3e4){return new Promise((r,i)=>{if(!(u!=null&&u.connected)){i(new Error("GuildSync websocket is not connected."));return}let s=!1;const o=window.setTimeout(()=>{s||(s=!0,i(new Error(`${t} timed out.`)))},n);u.emit(t,e,a=>{s||(s=!0,window.clearTimeout(o),r(a))})})}function oo(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(ic).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,n)=>On(e).localeCompare(On(n),void 0,{sensitivity:"base"})):[]}function so(t){if(!Array.isArray(t))return[];const e=new Map;for(const n of t){const r=ic(n);if(!r)continue;const i=r.role_id||Tn(r.role_name);i&&!e.has(i)&&e.set(i,r)}return Array.from(e.values()).sort((n,r)=>String(n.role_name||"").localeCompare(String(r.role_name||""),void 0,{sensitivity:"base"}))}function ic(t){var i,s;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),n=String(t.role_name||t.name||"Unnamed Role").trim(),r=(s=(i=t.role_color)!=null?i:t.color)!=null?s:null;return{role_id:e,role_name:n||"Unnamed Role",role_color:r}}function sh(){const t=hr.trim().toLowerCase(),e=Array.from(xt),n=ne.filter(r=>{if(t&&![r.username,r.global_name,r.server_nickname,r.discord_id,...r.roles.map(s=>s.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(r.roles.map(s=>s.role_name));if(!e.every(s=>i.has(s)))return!1}return!!Ws(It,Ld(r))});return ah(n)}function ah(t){const e=yt==="desc"?-1:1;return[...t].sort((n,r)=>{const i=ns(n,Cn),s=ns(r,Cn),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:On(n).localeCompare(On(r),void 0,{sensitivity:"base",numeric:!0})})}function ns(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(n=>n.role_name||"").filter(Boolean).sort((n,r)=>n.localeCompare(r,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function ch(t){const n=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";Cn===n?yt=yt==="asc"?"desc":"asc":(Cn=n,yt="asc"),f()}function Zn(t,e){const n=Cn===t,r=yt==="asc"?"ascending":"descending",i=n?yt==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${n?r:"none"}">
      <button
        class="discord-sort-header${n?" active":""}"
        type="button"
        data-discord-sort-column="${h(t)}"
        title="Sort ${h(e)} ${n&&yt==="asc"?"descending":"ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function lh(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(ui)?ui:t.value.length,n=Number.isInteger(fi)?fi:e;t.setSelectionRange(e,n)}}function dh(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(mi)?mi:t.value.length,n=Number.isInteger(pi)?pi:e;t.setSelectionRange(e,n)}}function uh(){const t=new Set;for(const e of ne)for(const n of e.roles)n.role_name&&t.add(n.role_name);return Array.from(t).sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function fh(t){const e=yh(t),n=On(t),r=t.roles||[];return`
    <tr data-discord-user-id="${h(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${h(e)}" alt="${h(n)}" />`:`<span>${c(pc(n))}</span>`}
          </div>
          <span>${c(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${c(t.global_name||"")}</td>
      <td>${c(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${r.length>0?r.map(i=>mh(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${fa({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function hh(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${c(Vt?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function mh(t){const e=Pr(t.role_color),n=lo(e),r=co(e,n);return`
    <span
      class="discord-role-badge"
      title="${h(t.role_name)}"
      style="${r}"
    >${c(t.role_name)}</span>
  `}function ph(t){const e=ao(t),n=Pr(e==null?void 0:e.role_color),r=lo(n),i=co(n,r);return`
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
  `}function gh(t){const e=bh(t);for(const n of e){const r=ao(n);if(r)return r}return null}function bh(t){const e=String(t||"").trim();if(!e)return[];const n=Tn(e),i={associate:["Associates","Associate"],associates:["Associates","Associate"],soldier:["Soldiers","Soldier"],soldiers:["Soldiers","Soldier"],capo:["Capo"],capos:["Capo","Capos"],caporegime:["CapoRegime","Capo Regime","Capo Regimes"],consiglieres:["Consigliere","Consiglieres"],consigliere:["Consigliere","Consiglieres"]}[n]||[e];return Array.from(new Set([e,...i].filter(Boolean)))}function Tn(t){return String(t||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function ao(t){const e=Tn(t);if(!e)return null;const n=Rr.find(r=>Tn(r.role_name)===e);if(n)return n;for(const r of ne){const i=r.roles.find(s=>Tn(s.role_name)===e);if(i)return i}return null}function Pr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function co(t,e){return[`--role-fill-top: ${rs(t,"#ffffff",.16)}`,`--role-fill-bottom: ${rs(t,"#000000",.1)}`,`--role-fill-glow: ${is(t,.28)}`,`--role-fill-edge: ${is(t,.46)}`,`color: ${e}`].join("; ")}function rs(t,e,n){const r=er(t)||er("#64748b"),i=er(e)||er("#ffffff"),s=Math.max(0,Math.min(1,Number(n)||0)),o=Math.round(r.red+(i.red-r.red)*s),a=Math.round(r.green+(i.green-r.green)*s),l=Math.round(r.blue+(i.blue-r.blue)*s);return`#${ni(o)}${ni(a)}${ni(l)}`}function er(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function ni(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function is(t,e){const n=String(t||"#64748b").replace("#",""),r=/^[0-9a-f]{6}$/i.test(n)?n:"64748b",i=parseInt(r.slice(0,2),16),s=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`rgba(${i}, ${s}, ${o}, ${e})`}function lo(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const n=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(n*299+r*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function yh(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!n)return"";const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function On(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function oc(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function uo(t){var o;const e=((o=k.user)==null?void 0:o.role)==="admin",n=e&&Number(t)||0,r=document.querySelector("#userPendingBadge");r&&(r.innerHTML=yc(n));const i=document.querySelector("#userAdminMenuCount");i&&(i.textContent=n?`${n} pending`:"");const s=document.querySelector("#discordAvatarButton");s&&s.setAttribute("aria-label",n?`GuildSync profile menu, ${n} pending account requests`:"GuildSync profile menu")}function kh(t){var n;if(!t||t.discord_user_id!==((n=k.user)==null?void 0:n.discord_user_id))return;const e=k.user.role;k.user={...k.user,...t},e!==t.role&&(ge.reset(),Pi.clear(),I==="settings"&&f()),Bn(),ge.start()}function Bn(){const t=document.querySelector("#discordArea");if(!!t){if(rn(!1),T()){const e=k.user||{},n=Se(),r=xh(e),i=pc(n);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Open GuildSync user menu" aria-label="GuildSync profile menu">
          ${r?`<img src="${h(r)}" alt="${h(n)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${c(i)}</span>`}
        </button>
        <span id="userPendingBadge" class="user-pending-badge-wrap"></span>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `,uo(ge.count);const s=document.querySelector("#discordAvatarButton");s.addEventListener("contextmenu",o=>{o.preventDefault(),os()}),s.addEventListener("click",()=>{os()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",Ah)}}function os(){if(Gn){rn();return}_h()}function vh(t=nt){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],n=String((t==null?void 0:t.directory)||"").trim(),r=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const s=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),o=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),a=String((i==null?void 0:i.filePath)||(n?`${n}\\${o}`:o)).trim(),l=(i==null?void 0:i.enabled)!==!1,d=r&&l,y=`profileFileWatchToggle-${wh(s||o)}`;return`
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
  `}function fo(){var r,i,s,o,a;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=Se(),n=((r=k.user)==null?void 0:r.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${c(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Role</span>
        <span class="profile-value">${c(Ih(n))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${c(Er)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${nt!=null&&nt.watching?"Active":"Stopped"}</span>
        </div>
        ${vh()}
      </div>
      ${((i=k.user)==null?void 0:i.role)==="admin"?'<button id="manageGuildSyncUsersButton" class="discord-secondary-button user-admin-menu-button" type="button">Manage GuildSync Users <span id="userAdminMenuCount"></span></button>':""}
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(s=document.querySelector("#manageGuildSyncUsersButton"))==null||s.addEventListener("click",()=>{rn(!1),ge.open()}),uo(ge.count),(o=document.querySelector("#discordLogoutButton"))==null||o.addEventListener("click",lc),(a=document.querySelector("#associateTicketReportButton"))==null||a.addEventListener("click",()=>{rn(!1),Ks()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(l=>{l.addEventListener("change",Sh)})}async function sc(){try{nt=await Cl(),Gn&&fo()}catch(t){m("file-watcher-error",L(t),{ttlMs:g})}}async function Sh(t){var r;const e=t.currentTarget,n=String(((r=e==null?void 0:e.dataset)==null?void 0:r.filewatchKey)||"").trim();if(!!n)try{e.disabled=!0,nt=await Pl(n,e.checked),await Ht({silent:!0}),Gn&&fo()}catch(i){m("file-watcher-error",L(i),{ttlMs:g}),await sc()}}function wh(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function _h(){const t=document.querySelector("#discordProfileMenu");!t||(fo(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),Gn=!0,sc(),setTimeout(()=>{window.addEventListener("click",ac),window.addEventListener("keydown",cc)},0))}function rn(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),Gn=!1,t&&(window.removeEventListener("click",ac),window.removeEventListener("keydown",cc))}function ac(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&rn()}function cc(t){t.key==="Escape"&&rn()}async function Ah(){try{m("auth","Opening Discord login...",{ttlMs:g});const t=await Gl();t!=null&&t.status_message&&m("auth",t.status_message,{ttlMs:g}),lt()}catch(t){m("auth-error",L(t),{ttlMs:g}),lt()}}async function lc(){try{k=await xl(),m("auth",k.status_message||"Logged out.",{ttlMs:g}),Cs(),Nn(),await Ht()}catch(t){m("auth-error",L(t),{ttlMs:g}),lt()}}function Nn(){const t=k.socket_url||"https://guildsync.perdues.me";Lh(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};k!=null&&k.token&&(e.auth={token:k.token}),u=sr(t,e),u.on("connect",()=>{ge.start(),lt(),dc(),I==="discord-members"&&Or({silent:!0}),I==="eso-members"&&gn({silent:!0}),(I==="more"||I==="settings"&&!K)&&we({silent:!0}),nh(),nn(),Xf(),zf(),ef(),of(),$h()}),u.on("guildsync:users-changed",n=>ge.changed(n)),u.on("guildsync:account-profile",kh),u.on("guildsync:account-removed",()=>void lc()),u.on("connect_error",()=>{ge.stop(),lt(),Ar()}),u.on("disconnect",()=>{ge.stop(),lt(),Ar(),Zf(),Yf()}),u.on("guildsync:version-status",n=>{Eh(n)}),u.on("guildsync:discord-member-data-updated",n=>{oh(n)}),u.on("guildsync:banking-data-updated",n=>{jf(n)}),u.on("guildsync:roster-data-updated",n=>{Ju(n)}),u.on("guildsync:member-links-updated",hu),u.on("guildsync:discord-refresh-status",(n={})=>{const r=String(n.message||"").trim();r&&m("discord-refresh-status",r,{ttlMs:g})})}function Lh(t=!0){ge.reset(),Ar(),u&&(u.disconnect(),u=null),t&&lt()}function dc(){!(u!=null&&u.connected)||u.emit("guildsync:client-version",{version:Er,platform:uc(),client_type:"wails"})}function $h(){Ar(),ar=window.setInterval(()=>{dc()},zl)}function Ar(){ar&&(window.clearInterval(ar),ar=null)}function Eh(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",n=t.download&&typeof t.download=="object"?t.download:{};Ye={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||n.url||"").trim(),fileName:String(t.download_file_name||n.file_name||"").trim(),platformLabel:String(n.label||t.platform||uc()).trim()},m("version",`GuildSync is out of date. Current version: ${Er}. Latest version: ${e}.`),Di();return}Ye={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},Di(),ho("version")}}function uc(){const t=String(navigator.userAgent||"").toLowerCase(),n=`${String(navigator.platform||"").toLowerCase()} ${t}`;return n.includes("mac")?"macos":n.includes("linux")?"linux":"windows"}function Di(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!Ye.updateRequired||!Ye.downloadUrl){t.innerHTML="";return}const e=Ye.platformLabel||"Desktop",n=Ye.latestVersion||"latest",r=Ye.fileName||"GuildSync client download";t.innerHTML=`
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
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{Rh()})}function Rh(){const t=String(Ye.downloadUrl||"").trim();if(!t){m("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:g});return}jl(t)}function m(t,e,n={}){const r=String(t||"").trim(),i=String(e||"").trim();if(!(!r||!i)){if(dt.set(r,i),gt.has(r)&&(window.clearTimeout(gt.get(r)),gt.delete(r)),n.ttlMs&&Number(n.ttlMs)>0){const s=window.setTimeout(()=>{ho(r)},Number(n.ttlMs));gt.set(r,s)}on()}}function ho(t){const e=String(t||"").trim();if(!!e){if(dt.delete(e),gt.has(e)&&(window.clearTimeout(gt.get(e)),gt.delete(e)),Y===e){Ur(()=>{Y="",on()});return}on()}}function on(){const t=Fr();if(t.length===0){$t?Ur(Pn):Pn();return}!$t&&!Et&&Gr(t[0])}function Fr(){return Array.from(dt.keys())}function fc(){const t=Fr();if(t.length===0)return"";if(!Y)return t[0];const e=t.indexOf(Y);return e<0?t[0]:t[(e+1)%t.length]}function Gr(t){const e=document.querySelector("#statusMessageTrack");if(!e||!dt.has(t)){Pn();return}Hr();const n=dt.get(t);Y=t,$t=!0,Et=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=n,e.style.setProperty("--message-fade-duration",`${Ds}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",Et=!1,Dh()},{once:!0})})}function Dh(){const t=Fr();if(!Y||!dt.has(Y)){on();return}if(t.length<=1){ss(!1);return}ss(!0)}function ss(t){const e=document.querySelector("#statusMessageViewport"),n=document.querySelector("#statusMessageTrack");if(!e||!n)return;const r=Math.max(0,n.scrollWidth-e.clientWidth);if(r<=0){t&&Fn(()=>{Ur(()=>{const i=fc();Y="",i?Gr(i):Pn()})},Rs);return}Fn(()=>{hc(r,t)},Ms)}function hc(t,e){const n=document.querySelector("#statusMessageTrack");if(!n||!Y||!dt.has(Y))return;const r=Math.max(4,Math.ceil(t/Ql));n.style.setProperty("--long-scroll-distance",`${t}px`),n.style.setProperty("--long-scroll-duration",`${r}s`),n.classList.add("long-scroll"),n.addEventListener("animationend",()=>{if(n.classList.remove("long-scroll"),n.style.transform=`translateX(-${t}px) translateY(-50%)`,e){Fn(()=>{Ur(()=>{const i=fc();Y="",i?Gr(i):Pn()})},Rs);return}Fn(()=>{Mh()},Jl)},{once:!0})}function Mh(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!Y||!dt.has(Y))return;if(Fr().length!==1){on();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const r=Math.max(0,e.scrollWidth-t.clientWidth);r<=0||Fn(()=>{hc(r,!1)},Ms)}function Ur(t){const e=document.querySelector("#statusMessageTrack");if(Hr(),!e||!$t){typeof t=="function"&&t();return}Et=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${Ds}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",$t=!1,Et=!1,typeof t=="function"&&t()},{once:!0})}function Pn(){const t=document.querySelector("#statusMessageTrack");Hr(),Y="",$t=!1,Et=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function Fn(t,e){const n=window.setTimeout(()=>{Dn=Dn.filter(r=>r!==n),t()},e);Dn.push(n)}function Hr(){for(const t of Dn)window.clearTimeout(t);Dn=[]}function mc(){if(!$t||Et||!Y)return;const t=Y;Hr(),Gr(t)}function lt(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(u!=null&&u.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!T()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${Se()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${Se()}`)}}async function Ht(t={}){try{if(T()){const e=await Ul();nt=e,!t.silent&&(e==null?void 0:e.message)&&m(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:g});return}nt=await Hl(),ho("file-watcher")}catch(e){m("file-watcher-error",L(e),{ttlMs:g})}}function Ln(t,e=null){const n="[GuildSync File Watcher]";if(e){console.log(`${n} ${t}`,e);return}console.log(`${n} ${t}`)}function Th(t={}){if(!T()){Ln("SavedVariables change ignored because the user is not authenticated.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",n=e.toLowerCase(),r=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=String(t.filePath||"").trim(),o=r?`${r} saved variables (${i})`:i;Ln(`SavedVariables change detected: ${i}${s?` (${s})`:""}. Key: ${n}.`,t),m(`saved-vars-file-updated-${e}`,`${o} has been updated.`,{ttlMs:g}),n==="banking"&&(Ln(`Processing banking SavedVariables update from ${i}.`),Bh(t)),n==="roster"&&(Ln(`Processing roster SavedVariables update from ${i}.`),Nh(t)),n==="applications"&&(Ln(`Processing applications SavedVariables update from ${i}.`),cf(t))}async function Bh(t={}){await Kf(t),await Ka(t)}async function Nh(t={}){await Qu(t)}function Ch(t){!T()||m("file-watcher-error",L(t),{ttlMs:g})}function qh(){Sn("guildsync-savedvars-file-modified",Th),Sn("guildsync-file-watcher-error",Ch),Sn("guildsync-login-complete",async t=>{k=t||{logged_in:!1,allowed:!1},Bn(),Nn(),await Ht(),m("auth",k.status_message||`Logged in and authorized as ${Se()}.`,{ttlMs:g})}),Sn("guildsync-login-denied",async t=>{k={logged_in:!1,allowed:!1,status_message:""},Bn(),await Ht(),m("auth",t||"Access denied.",{ttlMs:g}),Nn()}),Sn("guildsync-login-failed",async t=>{k={logged_in:!1,allowed:!1,status_message:""},Bn(),await Ht(),m("auth",t||"Login failed.",{ttlMs:g}),Nn()})}function T(){return Boolean((k==null?void 0:k.logged_in)&&(k==null?void 0:k.allowed)&&(k==null?void 0:k.token))}function Se(){var t,e;return((t=k.user)==null?void 0:t.display_name)||((e=k.user)==null?void 0:e.username)||"Discord User"}function xh(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),n=String(t.discord_user_id||"").trim();if(!e||!n)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=128`}function pc(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function Ih(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Oh(){wn&&(wn.disconnect(),wn=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),n=Math.round(t.getBoundingClientRect().height);wn=new ResizeObserver(r=>{const i=r[0];if(!i)return;const s=Math.round(i.contentRect.width),o=Math.round(i.contentRect.height);s===e&&o===n||(e=s,n=o,gc(),mc())}),wn.observe(t)}function gc(){clearTimeout(xo),xo=setTimeout(async()=>{try{await _s()}catch{}},500)}function L(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function c(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function h(t){return c(t)}qh();ed();
