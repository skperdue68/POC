(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Ye=t=>String(t!=null?t:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),sr=t=>!Number(t.allowed)||t.role==="pending",xc=t=>{var e,n;return{allowed:Number(t.allowed),role:t.role,email:(e=t.email)!=null?e:"",guild_member_name:(n=t.guild_member_name)!=null?n:""}};function Ic(t){return Number(t)>0?`<span class="user-pending-badge" aria-hidden="true">${Number(t)>99?"99+":Number(t)}</span>`:""}function Oc(t,e,n={}){var o,a,l,u,y;const r=t.discord_user_id===e,i=(o=n.role)!=null?o:["user","admin"].includes(t.role)?t.role:"user",s=Ye(t.discord_user_id);return`<form class="user-admin-card" data-user-id="${s}">
  <header><div><h3>${Ye(t.guild_member_name||t.global_name||t.username||t.discord_user_id)}${r?" (You)":""}</h3><p>${Ye(t.username)} \xB7 Discord ID: ${s}</p></div><span class="user-admin-status ${sr(t)?"is-pending":""}">${sr(t)?"Pending approval":"Approved"}</span></header>
  <fieldset class="user-admin-fields"><label>Email<input name="email" type="email" maxlength="255" value="${Ye((l=(a=n.email)!=null?a:t.email)!=null?l:"")}" placeholder="Not configured"></label>
   <label>Guild member name<input name="guild_member_name" maxlength="255" value="${Ye((y=(u=n.guild_member_name)!=null?u:t.guild_member_name)!=null?y:"")}" placeholder="ESO / guild display name"></label>
   ${r?`<div class="user-admin-own-role">Role: ${Ye(t.role)}<small>Your role cannot be changed here.</small></div>`:`<label>Role<select name="role"><option value="user" ${i==="user"?"selected":""}>User</option><option value="admin" ${i==="admin"?"selected":""}>Admin</option></select></label>`}
  </fieldset>
  <p class="user-admin-dates">Requested: ${Ye(t.requested_at||"Not recorded")} \xB7 Last login: ${Ye(t.last_login_at||"Never")}</p>
  <div class="user-admin-actions"><button type="submit">Save changes</button>${!r&&sr(t)?'<button type="button" data-user-approve>Approve account</button>':""}${r?"":'<button type="button" class="user-admin-remove" data-user-remove>Remove account</button>'}</div>
 </form>`}function Pc({request:t,getUser:e,onCount:n=()=>{}}){let r=[],i=0,s=null,o=null,a=!1,l=!1,u="",y="all",g=0,b=0,w=null;const S=new Map,_=()=>{var A;return((A=e())==null?void 0:A.role)==="admin"},B=A=>{i=Math.max(0,Math.floor(Number(A)||0)),n(_()?i:0)},v=A=>{const M=o==null?void 0:o.querySelector("[data-user-admin-message]");M&&(M.textContent=A)},O=A=>{l=A,o==null||o.querySelectorAll("fieldset,[data-user-admin-refresh],.user-admin-actions button,.user-admin-confirmation button").forEach(M=>M.disabled=A)},V=async()=>{if(!_()){B(0);return}const A=g,M=b;try{const $=await t("guildsync:request-pending-users",{});A===g&&M===b&&_()&&($==null?void 0:$.ok)&&B($.pending_count)}catch{}},Z=A=>{var H,N;const M=new FormData(A),$={email:String((H=M.get("email"))!=null?H:""),guild_member_name:String((N=M.get("guild_member_name"))!=null?N:"")};return M.has("role")&&($.role=String(M.get("role"))),$},Nt=async(A,M)=>{if(l||!_())return;const $=r.find(P=>P.discord_user_id===A.dataset.userId);if(!$)return;const H=g,N={action:M,discord_user_id:$.discord_user_id,expected:xc($),...M==="remove"?{}:Z(A)};O(!0),v("Saving account changes...");try{const P=await t("guildsync:change-user",N);if(!(P!=null&&P.ok))throw Error((P==null?void 0:P.message)||"Could not update this account.");if(H!==g||!_())return;S.delete($.discord_user_id),P.removed?r=r.filter(we=>we.discord_user_id!==$.discord_user_id):r=r.map(we=>we.discord_user_id===$.discord_user_id?P.user:we),V(),ze(),v(M==="remove"?"Account removed and login sessions cleared.":M==="approve"?"Account approved. The user can sign in now.":"Account changes saved.")}catch(P){H===g&&v(P.message)}finally{H===g&&O(!1)}},Zn=A=>{var $;($=o==null?void 0:o.querySelector(".user-admin-confirmation"))==null||$.remove();const M=document.createElement("div");M.className="user-admin-confirmation",M.innerHTML='<p>Remove this GuildSync login record and sign out the user? Their next Discord login will create a new pending request.</p><button type="button" data-confirm-remove>Remove account</button><button type="button" data-cancel-remove>Cancel</button>',A.append(M),M.querySelector("[data-confirm-remove]").addEventListener("click",()=>void Nt(A,"remove")),M.querySelector("[data-cancel-remove]").addEventListener("click",()=>M.remove()),M.querySelector("button").focus()};function ze(){if(!o)return;const A=o.querySelector(".user-admin-list"),M=A.scrollTop,$=u.trim().toLowerCase(),H=r.filter(N=>(y!=="pending"||sr(N))&&(!$||[N.username,N.global_name,N.guild_member_name,N.email,N.discord_user_id,N.role].some(P=>String(P!=null?P:"").toLowerCase().includes($))));A.innerHTML=H.map(N=>Oc(N,e().discord_user_id,S.get(N.discord_user_id))).join("")||"<p>No matching accounts.</p>",o.querySelector("[data-user-admin-count]").textContent=`${H.length} account${H.length===1?"":"s"} \xB7 ${i} pending`,A.querySelectorAll("[data-user-id]").forEach(N=>{var P,we;N.addEventListener("input",()=>S.set(N.dataset.userId,Z(N))),N.addEventListener("submit",er=>{er.preventDefault(),Nt(N,"save")}),(P=N.querySelector("[data-user-approve]"))==null||P.addEventListener("click",()=>void Nt(N,"approve")),(we=N.querySelector("[data-user-remove]"))==null||we.addEventListener("click",()=>Zn(N))}),A.scrollTop=M,O(l)}const vn=async()=>{if(a||l||!_())return;a=!0,O(!0),v("Loading GuildSync accounts...");const A=g,M=b;try{const $=await t("guildsync:request-users",{});if(!($!=null&&$.ok))throw Error(($==null?void 0:$.message)||"Could not load accounts.");if(A!==g||!_())return;r=$.users,S.clear(),M===b&&B($.pending_count),ze(),v("Only admins can manage accounts. Your own role and account removal are protected.")}catch($){A===g&&v($.message)}finally{A===g&&(a=!1,O(!1))}},mt=()=>{l&&!a||(o==null||o.remove(),o=null,w!=null&&w.isConnected&&w.focus({preventScroll:!0}))};return{open:()=>{!_()||o||(w=document.activeElement,o=document.createElement("div"),o.className="user-admin-overlay",o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),o.setAttribute("aria-labelledby","userAdminTitle"),o.innerHTML='<section class="user-admin-dialog"><header class="user-admin-header"><div><h2 id="userAdminTitle">Manage GuildSync Users</h2><p>Review access requests and maintain GuildSync login records.</p></div><button type="button" data-user-admin-close aria-label="Close user administration">Close</button></header><p role="status" data-user-admin-message></p><div class="user-admin-toolbar"><label>Search accounts<input type="search" data-user-admin-search placeholder="Name, email, role, or Discord ID"></label><label>Show<select data-user-admin-filter><option value="all">All accounts</option><option value="pending">Pending approval</option></select></label><button type="button" data-user-admin-refresh>Refresh list (discard edits)</button><span data-user-admin-count></span></div><div class="user-admin-list"></div></section>',document.body.append(o),o.querySelector("[data-user-admin-search]").value=u,o.querySelector("[data-user-admin-filter]").value=y,o.querySelector("[data-user-admin-close]").addEventListener("click",mt),o.querySelector("[data-user-admin-refresh]").addEventListener("click",()=>void vn()),o.querySelector("[data-user-admin-search]").addEventListener("input",A=>{u=A.target.value,ze()}),o.querySelector("[data-user-admin-filter]").addEventListener("change",A=>{y=A.target.value,ze()}),o.addEventListener("keydown",A=>{if(A.key==="Escape"&&(A.preventDefault(),A.stopImmediatePropagation(),mt()),A.key==="Tab"){const M=[...o.querySelectorAll("button,input,select")].filter(N=>!N.disabled&&N.offsetParent!==null),$=M[0],H=M.at(-1);A.shiftKey&&document.activeElement===$?(A.preventDefault(),H==null||H.focus()):!A.shiftKey&&document.activeElement===H&&(A.preventDefault(),$==null||$.focus())}}),o.querySelector("[data-user-admin-close]").focus(),S.size?(ze(),v("Unsaved edits restored. Refresh the list to discard them and retrieve current records.")):vn())},close:mt,refreshCount:V,get count(){return i},get isOpen(){return!!o},stop(){clearInterval(s),s=null},start(){clearInterval(s),_()&&(V(),s=setInterval(()=>void V(),6e4))},changed(A){!_()||(b++,B(A.pending_count),o&&v("Accounts changed. Refresh the list for current records; unsaved edits are preserved."))},reset(){g++,clearInterval(s),s=null,l=!1,a=!1,mt(),r=[],S.clear(),u="",y="all",B(0)}}}function Go(t,e,n,r=()=>{}){if(!t||!e)return;const i=a=>{var l;return(l=a.getAttribute(n))!=null?l:"__empty__"},s=new Map(Array.from(t.children).map(a=>[i(a),a])),o=new Set;Array.from(e.children).forEach((a,l)=>{let u=s.get(i(a));if(!u)u=a.cloneNode(!0),r(u);else if(!u.isEqualNode(a)){for(const y of Array.from(u.attributes))a.hasAttribute(y.name)||u.removeAttribute(y.name);for(const y of Array.from(a.attributes))u.getAttribute(y.name)!==y.value&&u.setAttribute(y.name,y.value);for(Array.from(a.children).forEach((y,g)=>{const b=u.children[g];if(b!=null&&b.isEqualNode(y))return;const w=y.cloneNode(!0);b?b.replaceWith(w):u.append(w),r(w)});u.children.length>a.children.length;)u.lastElementChild.remove()}t.children[l]!==u&&t.insertBefore(u,t.children[l]||null),o.add(u)});for(const a of Array.from(t.children))o.has(a)||a.remove()}function Rn(t,e){t&&e&&!t.isEqualNode(e)&&(t.innerHTML=e.innerHTML)}function Dn(t,e){t&&e&&t.textContent!==e.textContent&&(t.textContent=e.textContent)}const q=t=>String(t!=null?t:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Fc(){return{open:"",toggle(t){this.open=this.open===t?"":t},close(){this.open=""}}}function Fi(t,e){var n;return t.type==="boolean"?String(e).toLowerCase()===String(t.defaultValue).toLowerCase():t.type==="number"?String(e).trim()!==""&&Number(e)===Number(t.defaultValue):String(e!=null?e:"")===String((n=t.defaultValue)!=null?n:"")}function Uo(t,e){const r=Object.hasOwn(e,t.key)?e[t.key]===null?t.defaultValue:e[t.key]:t.value,i=!Fi(t,r);return{value:r,override:i,source:i?"Overridden":"Default"}}function ar(t,e){return t.type==="boolean"?e===!0||String(e).toLowerCase()==="true"?"Enabled":"Disabled":t.type==="select"?{private_thread:"Private thread (public fallback)",channel:"Channel or thread"}[e]||String(e):e==null||e===""?"Not configured":String(e)}function Vo(t,{body:e=!1}={}){const n={recipient:"@ExampleMember",account_name:"@ExampleMember",display_name:"@ExampleMember",amount:"10,001",deposit_amount:"10,001",raw_amount:"10001",raw_deposit_amount:"10001",event_id:"123456789",ticket_quantity:"20",tickets:"20",purchased_tickets:"20",bonus_percent:"20",bonus_tickets:"4",total_tickets:"24",bonus_deadline:"October 9, 2026 at 7:00 PM Eastern",bonus_block:`Early Purchase Bonus: 20% for purchases before October 9, 2026 at 7:00 PM ET.
Bonus Tickets: 4
Total Tickets: 24`,note:"",note_block:"",ticket_type:"Bi-Weekly",ticket_type_raw:"biweekly",transaction_type:"biweekly",ticket_gold_cost:"10,001",gold_cost:"10,001",raw_gold_cost:"10001",raw_ticket_gold_cost:"10001",purchase_date:"October 5, 2026",data_source:"Guild bank",event_datetime:"2026-10-05T12:00:00Z",event_timestamp:"1791201600",raffle_datetime_eastern:"October 10, 2026 at 8:00 PM Eastern",raffle_date_time_eastern:"October 10, 2026 at 8:00 PM Eastern",raffle_datetime:"October 10, 2026 at 8:00 PM Eastern",mail_request_id:"example",mail_batch_id:"example"},r=String(t).replace(/{([a-zA-Z0-9_]+)}/g,(i,s)=>{var o;return(o=n[s])!=null?o:i});return e&&!String(t).includes("{bonus_block}")?r+`

`+n.bonus_block:r}function ws(t,{refresh:e=!1,root:n=document}={}){const r=()=>{for(const o of document.querySelectorAll("[data-report-toggle]")){const a=o.dataset.reportToggle===t.open;o.setAttribute("aria-expanded",String(a));const l=document.getElementById(o.getAttribute("aria-controls"));l&&(l.classList.toggle("is-open",a),l.inert=!a)}};for(const o of n.querySelectorAll("[data-report-toggle]"))o.addEventListener("click",()=>{t.toggle(o.dataset.reportToggle),r()});for(const o of n.querySelectorAll('.reports-panel .report-run-button:not([type="submit"])'))o.addEventListener("click",()=>{t.close(),r()});const i=e?Array.from(document.querySelectorAll(".report-section-content")):[],s=i.map(o=>o.style.transition);for(const o of i)o.style.transition="none";r();for(const o of i)o.offsetHeight;i.forEach((o,a)=>o.style.transition=s[a])}const pi=t=>t.type==="boolean"||t.type==="select"&&t.options.length===2;function Gc(t,e){return ar(t,e)+(pi(t)&&Fi(t,e)?" (Default)":"")}function Uc({canEdit:t=()=>!1}={}){let e=null,n={},r=!1,i="",s=!1;const o=(u,y)=>{if(!t())return`<output class="configuration-readonly-value" id="config-${q(u.key)}" aria-describedby="config-help-${q(u.key)}">${q(ar(u,y.value))}</output>`;const g=`data-config-value="${q(u.key)}" id="config-${q(u.key)}" aria-describedby="config-help-${q(u.key)}" `;if(u.type==="boolean"||u.type==="select"){const b=u.type==="boolean"?["true","false"]:u.options;return`<select ${g}>${b.map(w=>`<option value="${q(w)}" ${String(w)===String(y.value)?"selected":""}>${q(Gc(u,w))}</option>`).join("")}</select>`}return u.type==="template"?`<textarea ${g} rows="${u.key.includes("BODY")?9:3}" maxlength="${u.maxLength}">${q(y.value)}</textarea>`:`<input ${g} type="${u.type==="number"?"number":"text"}" ${u.type==="number"?`min="${u.min}" max="${u.max}" step="any"`:""} value="${q(y.value)}" placeholder="Not configured">`};return{render:()=>{const u=t(),y=e?[...new Set(e.settings.map(g=>g.group))]:[];return`<article class="report-option-card admin-configuration-card"><div class="report-option-copy">
   <h3><button type="button" class="report-section-toggle" data-report-toggle="configuration" aria-expanded="false" aria-controls="adminConfigurationContent">Administrator Configuration <span aria-hidden="true">\u25BE</span></button></h3>
   <div id="adminConfigurationContent" class="report-section-content" inert><div class="report-section-inner">
   ${u?"<p>Edit any setting to override its default. Changes take effect only after Save. Choose the option marked (Default) to restore a two-choice setting, or use Return to default for other fields. Settings apply live; active deliveries finish safely.</p>":'<p class="configuration-readonly-notice">Read-only. You can view current settings and defaults. Admin access is required to change Administrator Configuration or raffle bonus settings.</p>'}
   <p role="status" class="configuration-status">${q(i)}</p>
   ${e?`
   ${e.botDefaultsReported?"":"<p>Bot defaults have not been reported yet. Connect the updated bot before editing its settings.</p>"}
   <form id="adminConfigurationForm">
    ${y.map((g,b)=>{const w=e.settings.filter(_=>_.group===g),S=[...new Set(w.map(_=>_.section||""))];return`<fieldset class="configuration-group" ${s?"disabled":""}><legend>${q(g)}</legend>
      ${S.map((_,B)=>`<section class="configuration-subgroup" ${_?`aria-labelledby="config-section-${b}-${B}"`:""}>
       ${_?`<h4 id="config-section-${b}-${B}">${q(_)}</h4>`:""}
       ${w.filter(v=>(v.section||"")===_).map(v=>{const O=Uo(v,u?n:{});return`<div class="configuration-setting" role="group" aria-labelledby="config-label-${q(v.key)}">
         <div class="configuration-setting-header"><label id="config-label-${q(v.key)}" for="config-${q(v.key)}">${q(v.label)}</label><span class="configuration-source" data-config-source="${q(v.key)}">${q(O.source)}</span></div>
         <small class="configuration-env-key">.env: <code>${q(v.key)}</code></small>
         <p class="configuration-help" id="config-help-${q(v.key)}">${q(v.help||"Changes this setting after you save the configuration.")}</p>
         <div class="configuration-values${u&&pi(v)?" configuration-two-options":""}">
          <div class="configuration-selected-value"><span>${u?"Current selection":"Current value"}</span>${o(v,O)}</div>
          ${u&&pi(v)?"":`<div class="configuration-default-value"><span>Default value</span><output>${q(ar(v,v.defaultValue))}</output>${u?`<button type="button" class="configuration-default" data-config-default="${q(v.key)}" aria-label="Return ${q(v.label)} to default: ${q(ar(v,v.defaultValue))}">Return to default</button>`:""}</div>`}
         </div>
         ${v.placeholders?`<small>Placeholders: ${v.placeholders.map(V=>q("{"+V+"}")).join(", ")}</small>`:""}
         ${v.group==="Receipt messages"?`<label>Example preview (20% bonus)<pre data-config-preview="${q(v.key)}">${q(Vo(O.value,{body:v.key.endsWith("BODY_TEMPLATE")}))}</pre></label>`:""}
        </div>`}).join("")}
      </section>`).join("")}
     </fieldset>`}).join("")}
    <div class="configuration-actions">${u?`<button type="submit" ${s?"disabled":""}>${s?"Saving...":"Save Configuration"}</button>`:""}<button type="button" id="reloadAdminConfiguration" ${s?"disabled":""}>${u?"Discard edits and reload":"Refresh configuration"}</button></div>
   </form>`:`<p>${r?"Loading configuration...":"Configuration is not loaded."}</p><button type="button" id="reloadAdminConfiguration">Load configuration</button>`}
   </div></div></div></article>`},wire:({request:u,rerender:y})=>{var b,w;const g=async()=>{if(!r){r=!0,i="";try{const S=await u("guildsync:request-admin-configuration",{});if(!(S!=null&&S.ok))throw Error((S==null?void 0:S.message)||"Could not load configuration.");e=S.configuration,n={}}catch(S){i=S.message}finally{r=!1,y()}}};if(!e&&!r&&!i&&g(),(b=document.getElementById("reloadAdminConfiguration"))==null||b.addEventListener("click",()=>void g()),!!t()){for(const S of document.querySelectorAll("[data-config-value]"))S.addEventListener("input",()=>{if(!t())return;const _=S.dataset.configValue,B=e.settings.find(V=>V.key===_);n[_]=Fi(B,S.value)?null:S.value;const v=document.querySelector(`[data-config-source="${_}"]`);v&&(v.textContent=Uo(B,n).source);const O=document.querySelector(`[data-config-preview="${_}"]`);O&&(O.textContent=Vo(S.value,{body:_.endsWith("BODY_TEMPLATE")}))});for(const S of document.querySelectorAll("[data-config-default]"))S.addEventListener("click",()=>{!t()||(n[S.dataset.configDefault]=null,y())});(w=document.getElementById("adminConfigurationForm"))==null||w.addEventListener("submit",async S=>{var B;if(S.preventDefault(),!t()||s)return;if(!Object.keys(n).length){i="No changes to save.",y();return}s=!0,i="";const _={...n};y(),(B=document.getElementById("adminConfigurationForm"))==null||B.querySelectorAll("input,select,textarea,button").forEach(v=>v.disabled=!0);try{const v=await u("guildsync:save-admin-configuration",{revision:e.revision,changes:_});if(!(v!=null&&v.ok))throw Error((v==null?void 0:v.message)||"Could not save configuration.");e=v.configuration,n={},i="Configuration saved. Backend settings are active; the connected bot applies its settings after active deliveries finish. An offline bot applies them when it reconnects."}catch(v){i=v.message}finally{s=!1,y()}})}},clear(){e=null,n={},i=""}}}const Vc="/assets/splash.ea386b6a.png",Hc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",Wc="/assets/GuildSync-Graphic.9169020d.png",Me=Object.create(null);Me.open="0";Me.close="1";Me.ping="2";Me.pong="3";Me.message="4";Me.upgrade="5";Me.noop="6";const cr=Object.create(null);Object.keys(Me).forEach(t=>{cr[Me[t]]=t});const mi={type:"error",data:"parser error"},_s=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",As=typeof ArrayBuffer=="function",Ls=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Gi=({type:t,data:e},n,r)=>_s&&e instanceof Blob?n?r(e):Ho(e,r):As&&(e instanceof ArrayBuffer||Ls(e))?n?r(e):Ho(new Blob([e]),r):r(Me[t]+(e||"")),Ho=(t,e)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];e("b"+(r||""))},n.readAsDataURL(t)};function Wo(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let ei;function jc(t,e){if(_s&&t.data instanceof Blob)return t.data.arrayBuffer().then(Wo).then(e);if(As&&(t.data instanceof ArrayBuffer||Ls(t.data)))return e(Wo(t.data));Gi(t,!1,n=>{ei||(ei=new TextEncoder),e(ei.encode(n))})}const jo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Mn=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<jo.length;t++)Mn[jo.charCodeAt(t)]=t;const zc=t=>{let e=t.length*.75,n=t.length,r,i=0,s,o,a,l;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const u=new ArrayBuffer(e),y=new Uint8Array(u);for(r=0;r<n;r+=4)s=Mn[t.charCodeAt(r)],o=Mn[t.charCodeAt(r+1)],a=Mn[t.charCodeAt(r+2)],l=Mn[t.charCodeAt(r+3)],y[i++]=s<<2|o>>4,y[i++]=(o&15)<<4|a>>2,y[i++]=(a&3)<<6|l&63;return u},Yc=typeof ArrayBuffer=="function",Ui=(t,e)=>{if(typeof t!="string")return{type:"message",data:Es(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:Kc(t.substring(1),e)}:cr[n]?t.length>1?{type:cr[n],data:t.substring(1)}:{type:cr[n]}:mi},Kc=(t,e)=>{if(Yc){const n=zc(t);return Es(n,e)}else return{base64:!0,data:t}},Es=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},$s=String.fromCharCode(30),Jc=(t,e)=>{const n=t.length,r=new Array(n);let i=0;t.forEach((s,o)=>{Gi(s,!1,a=>{r[o]=a,++i===n&&e(r.join($s))})})},Qc=(t,e)=>{const n=t.split($s),r=[];for(let i=0;i<n.length;i++){const s=Ui(n[i],e);if(r.push(s),s.type==="error")break}return r};function Xc(){return new TransformStream({transform(t,e){jc(t,n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,r)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(r))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(n)})}})}let ti;function tr(t){return t.reduce((e,n)=>e+n.length,0)}function nr(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let r=0;for(let i=0;i<e;i++)n[i]=t[0][r++],r===t[0].length&&(t.shift(),r=0);return t.length&&r<t[0].length&&(t[0]=t[0].slice(r)),n}function Zc(t,e){ti||(ti=new TextDecoder);const n=[];let r=0,i=-1,s=!1;return new TransformStream({transform(o,a){for(n.push(o);;){if(r===0){if(tr(n)<1)break;const l=nr(n,1);s=(l[0]&128)===128,i=l[0]&127,i<126?r=3:i===126?r=1:r=2}else if(r===1){if(tr(n)<2)break;const l=nr(n,2);i=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),r=3}else if(r===2){if(tr(n)<8)break;const l=nr(n,8),u=new DataView(l.buffer,l.byteOffset,l.length),y=u.getUint32(0);if(y>Math.pow(2,53-32)-1){a.enqueue(mi);break}i=y*Math.pow(2,32)+u.getUint32(4),r=3}else{if(tr(n)<i)break;const l=nr(n,i);a.enqueue(Ui(s?l:ti.decode(l),e)),r=0}if(i===0||i>t){a.enqueue(mi);break}}}})}const Rs=4;function U(t){if(t)return el(t)}function el(t){for(var e in U.prototype)t[e]=U.prototype[e];return t}U.prototype.on=U.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};U.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};U.prototype.off=U.prototype.removeListener=U.prototype.removeAllListeners=U.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===e||r.fn===e){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+t],this};U.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,e)}return this};U.prototype.emitReserved=U.prototype.emit;U.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};U.prototype.hasListeners=function(t){return!!this.listeners(t).length};const Br=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0))(),ie=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),tl="arraybuffer";function Ds(t,...e){return e.reduce((n,r)=>(t.hasOwnProperty(r)&&(n[r]=t[r]),n),{})}const nl=ie.setTimeout,rl=ie.clearTimeout;function Nr(t,e){e.useNativeTimers?(t.setTimeoutFn=nl.bind(ie),t.clearTimeoutFn=rl.bind(ie)):(t.setTimeoutFn=ie.setTimeout.bind(ie),t.clearTimeoutFn=ie.clearTimeout.bind(ie))}const il=1.33;function ol(t){return typeof t=="string"?sl(t):Math.ceil((t.byteLength||t.size)*il)}function sl(t){let e=0,n=0;for(let r=0,i=t.length;r<i;r++)e=t.charCodeAt(r),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(r++,n+=4);return n}function Ms(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function al(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function cl(t){let e={},n=t.split("&");for(let r=0,i=n.length;r<i;r++){let s=n[r].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class ll extends Error{constructor(e,n,r){super(e),this.description=n,this.context=r,this.type="TransportError"}}class Vi extends U{constructor(e){super(),this.writable=!1,Nr(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,r){return super.emitReserved("error",new ll(e,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=Ui(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=al(e);return n.length?"?"+n:""}}class dl extends Vi{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};Qc(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Jc(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=Ms()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let Ts=!1;try{Ts=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const ul=Ts;function fl(){}class hl extends dl{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let r=location.port;r||(r=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,n){const r=this.request({method:"POST",data:e});r.on("success",n),r.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=e}}class Le extends U{constructor(e,n,r){super(),this.createRequest=e,Nr(this,r),this._opts=r,this._method=r.method||"GET",this._uri=n,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const n=Ds(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(n);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var i;r.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=Le.requestsCount++,Le.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=fl,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Le.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Le.requestsCount=0;Le.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",zo);else if(typeof addEventListener=="function"){const t="onpagehide"in ie?"pagehide":"unload";addEventListener(t,zo,!1)}}function zo(){for(let t in Le.requests)Le.requests.hasOwnProperty(t)&&Le.requests[t].abort()}const pl=function(){const t=Bs({xdomain:!1});return t&&t.responseType!==null}();class ml extends hl{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=pl&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Le(Bs,this.uri(),e)}}function Bs(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||ul))return new XMLHttpRequest}catch{}if(!e)try{return new ie[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Ns=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class gl extends Vi{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,r=Ns?{}:Ds(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;Gi(r,this.supportsBinary,s=>{try{this.doWrite(r,s)}catch{}i&&Br(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=Ms()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const ni=ie.WebSocket||ie.MozWebSocket;class bl extends gl{createSocket(e,n,r){return Ns?new ni(e,n,r):n?new ni(e,n):new ni(e)}doWrite(e,n){this.ws.send(n)}}class yl extends Vi{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=Zc(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(n).getReader(),i=Xc();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const s=()=>{r.read().then(({done:a,value:l})=>{a||(this.onPacket(l),s())}).catch(a=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;this._writer.write(r).then(()=>{i&&Br(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const kl={websocket:bl,webtransport:yl,polling:ml},vl=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Sl=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function gi(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),r=t.indexOf("]");n!=-1&&r!=-1&&(t=t.substring(0,n)+t.substring(n,r).replace(/:/g,";")+t.substring(r,t.length));let i=vl.exec(t||""),s={},o=14;for(;o--;)s[Sl[o]]=i[o]||"";return n!=-1&&r!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=wl(s,s.path),s.queryKey=_l(s,s.query),s}function wl(t,e){const n=/\/{2,9}/g,r=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function _l(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,s){i&&(n[i]=s)}),n}const bi=typeof addEventListener=="function"&&typeof removeEventListener=="function",lr=[];bi&&addEventListener("offline",()=>{lr.forEach(t=>t())},!1);class nt extends U{constructor(e,n){if(super(),this.binaryType=tl,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const r=gi(e);n.hostname=r.host,n.secure=r.protocol==="https"||r.protocol==="wss",n.port=r.port,r.query&&(n.query=r.query)}else n.host&&(n.hostname=gi(n.host).host);Nr(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(r=>{const i=r.prototype.name;this.transports.push(i),this._transportsByName[i]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=cl(this.opts.query)),bi&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},lr.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=Rs,n.transport=e,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&nt.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",nt.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(n+=ol(i)),r>0&&n>this._maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Br(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,r){return this._sendPacket("message",e,n,r),this}send(e,n,r){return this._sendPacket("message",e,n,r),this}_sendPacket(e,n,r,i){if(typeof n=="function"&&(i=n,n=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const s={type:e,data:n,options:r};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(nt.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),bi&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=lr.indexOf(this._offlineEventListener);r!==-1&&lr.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}}nt.protocol=Rs;class Al extends nt{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let n=this.createTransport(e),r=!1;nt.priorWebsocketSuccess=!1;const i=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",g=>{if(!r)if(g.type==="pong"&&g.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;nt.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(y(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const b=new Error("probe error");b.transport=n.name,this.emitReserved("upgradeError",b)}}))};function s(){r||(r=!0,y(),n.close(),n=null)}const o=g=>{const b=new Error("probe error: "+g);b.transport=n.name,s(),this.emitReserved("upgradeError",b)};function a(){o("transport closed")}function l(){o("socket closed")}function u(g){n&&g.name!==n.name&&s()}const y=()=>{n.removeListener("open",i),n.removeListener("error",o),n.removeListener("close",a),this.off("close",l),this.off("upgrading",u)};n.once("open",i),n.once("error",o),n.once("close",a),this.once("close",l),this.once("upgrading",u),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const n=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&n.push(e[r]);return n}}class Ll extends Al{constructor(e,n={}){const r=typeof e=="object"?e:n;(!r.transports||r.transports&&typeof r.transports[0]=="string")&&(r.transports=(r.transports||["polling","websocket","webtransport"]).map(i=>kl[i]).filter(i=>!!i)),super(e,r)}}function El(t,e="",n){let r=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),r=gi(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const s=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+s+":"+r.port+e,r.href=r.protocol+"://"+s+(n&&n.port===r.port?"":":"+r.port),r}const $l=typeof ArrayBuffer=="function",Rl=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,Cs=Object.prototype.toString,Dl=typeof Blob=="function"||typeof Blob<"u"&&Cs.call(Blob)==="[object BlobConstructor]",Ml=typeof File=="function"||typeof File<"u"&&Cs.call(File)==="[object FileConstructor]";function Hi(t){return $l&&(t instanceof ArrayBuffer||Rl(t))||Dl&&t instanceof Blob||Ml&&t instanceof File}function dr(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,r=t.length;n<r;n++)if(dr(t[n]))return!0;return!1}if(Hi(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return dr(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&dr(t[n]))return!0;return!1}function Tl(t){const e=[],n=t.data,r=t;return r.data=yi(n,e),r.attachments=e.length,{packet:r,buffers:e}}function yi(t,e){if(!t)return t;if(Hi(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let r=0;r<t.length;r++)n[r]=yi(t[r],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=yi(t[r],e));return n}return t}function Bl(t,e){return t.data=ki(t.data,e),delete t.attachments,t}function ki(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=ki(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=ki(t[n],e));return t}const qs=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Nl=5;var E;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(E||(E={}));class Cl{constructor(e){this.replacer=e}encode(e){return(e.type===E.EVENT||e.type===E.ACK)&&dr(e)?this.encodeAsBinary({type:e.type===E.EVENT?E.BINARY_EVENT:E.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===E.BINARY_EVENT||e.type===E.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=Tl(e),r=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(r),i}}class Wi extends U{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const r=n.type===E.BINARY_EVENT;r||n.type===E.BINARY_ACK?(n.type=r?E.EVENT:E.ACK,this.reconstructor=new ql(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(Hi(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const r={type:Number(e.charAt(0))};if(E[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===E.BINARY_EVENT||r.type===E.BINARY_ACK){const s=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(s,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!xs(a)||a<0)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=a}if(e.charAt(n+1)==="/"){const s=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););r.nsp=e.substring(s,n)}else r.nsp="/";const i=e.charAt(n+1);if(i!==""&&Number(i)==i){const s=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}r.id=Number(e.substring(s,n+1))}if(e.charAt(++n)){const s=this.tryParse(e.substr(n));if(Wi.isPayloadValid(r.type,s))r.data=s;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case E.CONNECT:return yr(n);case E.DISCONNECT:return n===void 0;case E.CONNECT_ERROR:return typeof n=="string"||yr(n);case E.EVENT:case E.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&qs.indexOf(n[0])===-1);case E.ACK:case E.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class ql{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=Bl(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function xl(t){return typeof t=="string"}const xs=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function Il(t){return t===void 0||xs(t)}function yr(t){return Object.prototype.toString.call(t)==="[object Object]"}function Ol(t,e){switch(t){case E.CONNECT:return e===void 0||yr(e);case E.DISCONNECT:return e===void 0;case E.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&qs.indexOf(e[0])===-1);case E.ACK:return Array.isArray(e);case E.CONNECT_ERROR:return typeof e=="string"||yr(e);default:return!1}}function Pl(t){return xl(t.nsp)&&Il(t.id)&&Ol(t.type,t.data)}const Fl=Object.freeze(Object.defineProperty({__proto__:null,protocol:Nl,get PacketType(){return E},Encoder:Cl,Decoder:Wi,isPacketValid:Pl},Symbol.toStringTag,{value:"Module"}));function de(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const Gl=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Is extends U{constructor(e,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[de(e,"open",this.onopen.bind(this)),de(e,"packet",this.onpacket.bind(this)),de(e,"error",this.onerror.bind(this)),de(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var r,i,s;if(Gl.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const o={type:E.EVENT,data:n};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const y=this.ids++,g=n.pop();this._registerAckCallback(y,g),o.id=y}const a=(i=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||i===void 0?void 0:i.writable,l=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!a||(l?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,n){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[e]=n;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);n.call(this,new Error("operation has timed out"))},i),o=(...a)=>{this.io.clearTimeoutFn(s),n.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...n){return new Promise((r,i)=>{const s=(o,a)=>o?i(o):r(a);s.withError=!0,n.push(s),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>(this._queue[0],i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(i)):(this._queue.shift(),n&&n(null,...s)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:E.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case E.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case E.EVENT:case E.BINARY_EVENT:this.onevent(e);break;case E.ACK:case E.BINARY_ACK:this.onack(e);break;case E.DISCONNECT:this.ondisconnect();break;case E.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let r=!1;return function(...i){r||(r=!0,n.packet({type:E.ACK,id:e,data:i}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:E.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,e.data)}}}function cn(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}cn.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-n:t+n}return Math.min(t,this.max)|0};cn.prototype.reset=function(){this.attempts=0};cn.prototype.setMin=function(t){this.ms=t};cn.prototype.setMax=function(t){this.max=t};cn.prototype.setJitter=function(t){this.jitter=t};class vi extends U{constructor(e,n){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,Nr(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new cn({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const i=n.parser||Fl;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Ll(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=de(n,"open",function(){r.onopen(),e&&e()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=de(n,"error",s);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),n.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(de(e,"ping",this.onping.bind(this)),de(e,"data",this.ondata.bind(this)),de(e,"error",this.onerror.bind(this)),de(e,"close",this.onclose.bind(this)),de(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){Br(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new Is(this,e,n),this.nsps[e]=r),r}_destroy(e){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let r=0;r<n.length;r++)this.engine.write(n[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Sn={};function ur(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=El(t,e.path||"/socket.io"),r=n.source,i=n.id,s=n.path,o=Sn[i]&&s in Sn[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let l;return a?l=new vi(r,e):(Sn[i]||(Sn[i]=new vi(r,e)),l=Sn[i]),n.query&&!e.query&&(e.query=n.queryKey),l.socket(n.path,e)}Object.assign(ur,{Manager:vi,Socket:Is,io:ur,connect:ur});window.GUILDSYNC_WEB=!0;const ji="guildsync-web-session";function Os(){try{return JSON.parse(localStorage.getItem(ji)||"{}")||{}}catch{return{}}}function Ul(t){localStorage.setItem(ji,JSON.stringify(t||{}))}function zi(){localStorage.removeItem(ji)}function Yo(t,e){let n=0,r=!1;try{const i=JSON.parse(atob(t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/")));n=Number(i.exp)*1e3,r=Boolean(i.jti&&i.sub&&!i.exp)}catch{}return n>Date.now()||r?{...e,token:t,logged_in:!0,allowed:!0,status_message:"Reconnecting to GuildSync. Your login is saved."}:(zi(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:"Session expired. Please log in again."})}async function Vl(){return!0}async function Ps(){return!0}async function Hl(){return!0}async function Wl(){return!0}async function jl(){return!0}async function zl(){return window.location.assign("/api/auth/discord/web-login"),!0}async function Yl(){var s,o,a,l,u,y,g,b;const t=Os(),e=t.token||localStorage.getItem("guildsync-web-token")||"";if(!e)return{logged_in:!1,allowed:!1,status_message:"Not logged in."};let n;try{n=await fetch("/api/auth/session",{headers:{Authorization:`Bearer ${e}`}})}catch{return Yo(e,t)}if(n.status>=500)return Yo(e,t);const r=await n.json().catch(()=>({}));if(!n.ok||r.ok===!1)return zi(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:r.message||"Session expired. Please log in again."};const i={logged_in:!0,allowed:!0,token:e,user:r.user,discord_user_id:((s=r.user)==null?void 0:s.discord_user_id)||"",username:((o=r.user)==null?void 0:o.username)||"",global_name:((a=r.user)==null?void 0:a.global_name)||"",display_name:((l=r.user)==null?void 0:l.display_name)||((u=r.user)==null?void 0:u.global_name)||((y=r.user)==null?void 0:y.username)||"",avatar_url:((g=r.user)==null?void 0:g.avatar_url)||"",role:((b=r.user)==null?void 0:b.role)||"user",status_message:"Logged in."};return Ul(i),i}async function Kl(){const t=Os().token||localStorage.getItem("guildsync-web-token");if(t){const e=await fetch("/api/auth/logout",{method:"POST",headers:{Authorization:`Bearer ${t}`}});if(!e.ok&&e.status!==401)throw new Error("Could not log out on the server. Please try again.")}return zi(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:"Logged out."}}async function Jl(){return Cr()}async function Ql(){return Cr()}async function Cr(){return{watching:!1,directory:"Web upload mode",files:[{key:"banking",fileName:"GuildSyncBanking.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"},{key:"roster",fileName:"GuildSyncRoster.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"}]}}async function Xl(){return Cr()}async function Zl(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function ed(){return{ok:!0}}async function td(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function nd(){return{ok:!0}}async function rd(t){return t&&window.open(t,"_blank","noopener,noreferrer"),!0}async function id(){return{running:!1,message:"ESO process detection is only available in the desktop client."}}async function od(){throw new Error("Deposit mail sending is disabled in the web client. Use the GuildSync desktop client for ESO mail queue writes.")}async function sd(){return{ok:!0,acknowledgements:[],records:[]}}async function ad(){return{ok:!0}}async function cd(){return{ok:!0}}async function ld(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSyncApplications.lua onto the GuildSync web window.")}async function dd(){return{ok:!0}}const rr=new Map;function wn(t,e){return rr.has(t)||rr.set(t,new Set),rr.get(t).add(e),()=>{var n;return(n=rr.get(t))==null?void 0:n.delete(e)}}const qr="1.2.7",Fs={windows:{label:"Windows detected",shortLabel:"Windows"},macos:{label:"macOS detected",shortLabel:"macOS"},linux:{label:"Linux detected",shortLabel:"Linux"}},Gs="guildsync-web-savedvars-upload-banner-dismissed",ud=new Map([["GuildSyncBanking.lua","banking"],["GuildSyncRoster.lua","roster"],["GuildSyncApplications.lua","applications"]]),fd=30*60*1e3,Us="guildsync-pending-banking-uploads",Vs="guildsync-pending-deposit-mail",hd=5e3,pd=30*1e3,Hs="guildsync-pending-roster-uploads",Ws="guildsync-pending-applications-uploads",m=60*1e3,Yi=7e3,js=1400,zs=2400,md=4e3,gd=38,Ys=document.querySelector("#app");let Ko=null,_n=null,Jo=!1,Vn=!1;const ge=Pc({request:(t,e)=>R(t,e,3e4),getUser:()=>k.user,onCount:Ao});let fr=null,ri=!1,ii=!1,oi=!1,rt=null,Ne={running:!1,message:""},qt=null,xt=null,hr=!1,It=null,si=!1,Ct=0,ai=!1,ut=new Map,bt=new Map,Y="",$t=!1,Rt=!1,Tn=[],k={logged_in:!1,allowed:!1,status_message:""},Ke={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},Be=null,Si="",d=null,te=[],xr=[],Ir=null,jt=!1,kr=!1,vr="",Ot=new Set,Pt=new Set,xn="username",kt="asc",wi=null,_i=null,ae=[],Sr=null,Ue=!1,Ai=!1,wr="",Li=null,Ei=null,vt=new Set,Ft=new Set,xe="",ee="",W=-1,zt=!1,In="",oe=[],ft="",it=[],ot=!1,Oe="",ci=null,ue=-1,ln=!1,On="",st=[],_r=!1,St=!1,at="",Yt="",Kt=!1,Je="",se=[],Jt="",Dt="",ct=[],lt=!1,Pe="",Qo=null,gt=0;const bd=650;let fe=-1,dn=!1,un=[],Qe=!1,wt="",fn=!1,Pn=[],Xe=!1,_t="",pt=!1,Ki=[],Ze=!1,At="",hn="",et="",Gt="",tt="",C=[],z=!1,X="",We=!1,Or="",yt="",Hn="",Wn="",Ie=-1,je=!1,T=null,Lt=[],Qt=!1,Ve="",jn="",_e=-1,pn=!1,Ji=null,Bn=null;const Qi=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let ne=[],K=null,Ae=null,pe=!1;const Ks=Fc(),Xi=Uc({canEdit:()=>{var t;return((t=k==null?void 0:k.user)==null?void 0:t.role)==="admin"}});let Xt=[],Fe="",Xo=!1,F="biweekly",Js=null,He=!1,Et=!1,ke="biweekly",mn=!1,Zt=!1,Ce="",qe=null,j={targetType:"other",note:"",tickets:""},gn=!1,Mt="",Q=[],be=[],Ee="",$e=!1,Re="",Ut=null,he=-1,Ge=!1,Ar=!1,re="",x={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},bn="",J=-1,me=!1,$i={biweekly:0,monthly:0};const yd=1780786800,ht=14*24*60*60,Lr=60*60,Er=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let I=Er[0].id;const Ri=new Set;function kd(){Ys.innerHTML=`
    <main class="splash-screen">
      <img src="${Vc}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await Vl(),await vd(),Qs(),wd(),qn(),await Wt()},5e3)}async function vd(){try{k=await Yl()}catch(t){k={logged_in:!1,allowed:!1,status_message:""},p("session-error",L(t),{ttlMs:m})}}function Qs(){Ys.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${Hc}" alt="" class="title-icon" />
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
            <img src="${Wc}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${c(qr)}</div>
            </div>
          </div>
          <div class="compact-header-actions">
            ${Zs()}
            <div id="discordArea" class="discord-area"></div>
          </div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${Xs()}
        </nav>

        <div id="webSavedVarsUploadBannerHost">
          ${tu()}
        </div>

        <section id="guildSyncTabContent" class="guildsync-tab-content${da()?" web-upload-banner-dismissed":""}" aria-live="polite">
          ${ta()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await Wl()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await Ps(),await jl()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await Hl()}),Cn(),nu(),ra(),_c(),Ja(),lc(),ua(),Ya(),Oa(),Pa(),Fa(),Ga(),$a(),Qa(),Md(),dt(),an(),Jo||(window.addEventListener("resize",()=>{qc(),Nc()}),hp(),Jo=!0)}function Xs(){return Er.map(t=>{const e=t.id===I,n=Ad(t.id,e),r=n?ea():0,i=n?`Deposit mail needs attention: ${r} item${r===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${n?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${h(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${h(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${Ld(t.icon)}</span>
          <span class="guildsync-tab-label">${c(t.label)}</span>
          ${n?`<span class="guildsync-tab-mail-badge" aria-label="${h(i)}">${r>99?"99+":c(String(r))}</span>`:""}
        </button>
      `}).join("")}function Sd(){const t=zr(),e=Fs[t]||{label:"Desktop client",shortLabel:"Desktop"};return Be&&Be.platform===t?{available:!0,label:`${Be.label||e.shortLabel} detected`,shortLabel:Be.label||e.shortLabel,version:Be.version,fileName:Be.fileName,href:Be.url}:{available:!1,label:e.label,shortLabel:e.shortLabel,fileName:"",href:"",error:Si}}async function wd(){const t=zr();Si="";try{const e=await fetch(`/api/client-download?platform=${encodeURIComponent(t)}`,{headers:{Accept:"application/json"}});let n=null;try{n=await e.json()}catch{n=null}if(!e.ok)throw new Error((n==null?void 0:n.error)||`Download lookup failed with HTTP ${e.status}.`);const r=n.download&&typeof n.download=="object"?n.download:{},i=String(n.download_file_name||r.file_name||"").trim(),s=String(n.download_url||r.url||"").trim();if(!n.ok||!i||!s)throw new Error(n.error||"Download lookup did not return a usable file.");Be={platform:String(r.platform||n.platform||t).trim(),label:String(r.label||"").trim(),version:String(r.version||"").trim(),fileName:i,url:s}}catch(e){Be=null,Si=(e==null?void 0:e.message)||"No GuildSync desktop client download is currently available.";const n=(Fs[t]||{}).shortLabel||"Desktop";p("desktop-client-download-unavailable",`No ${n} client is currently available for download.`,{tone:"warning",ttl:Yi}),console.warn("GuildSync desktop client download lookup failed.",e)}_d()}function _d(){const t=document.querySelector(".compact-header-actions .desktop-client-download-button");!t||(t.outerHTML=Zs())}function Zs(){const t=Sd();if(!t.available){const e=t.error||"Looking for latest download...";return`
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
  `}function ea(){return D()?Ur()+Qn()+sc():0}function Ad(t,e){return t!=="more"||e?!1:ea()>0}function Ld(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function ta(){const t=Er.find(n=>n.id===I)||Er[0];let e="";return t.id==="discord-members"?e=ia():t.id==="eso-members"?e=oa():t.id==="more"?e=oc():t.id==="settings"?e=ru():e=`
      <div class="guildsync-tab-panel" data-active-tab="${h(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${c(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${Ge?ff():""}
    ${mn?Yf():""}
    ${gn?If():""}
    ${je?nf():""}
    ${dn?lu():""}
    ${fn?mu():""}
    ${pt?ku():""}
    ${We?Tu():""}
    ${pn?Dd():""}
  `}function Ed(){return ge.isOpen||pn||zt||Kt||Ge||mn||gn||je||ln||dn||fn||pt||We||Et}function $d(){return pn?!1:We?(Ci(),!0):pt?(Ni(),!0):fn?(Bi(),!0):dn?(Ti(),!0):je?(tn(),!0):ln?(Ii(),!0):mn?(Dr(),!0):gn?(Xf(),f(),!0):Ge?(Ge=!1,f(),!0):zt?(zt=!1,f(),!0):Kt?(Kt=!1,f(),!0):Et?(Et=!1,f(),!0):!1}function Rd(t){t.key==="Escape"&&$d()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",Rd,!0),window.guildSyncGlobalModalEscapeAttached=!0);function Zi(t={}){return new Promise(e=>{Bn&&Bn(!1),pn=!0,Ji={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},Bn=e,f()})}function $r(t=!1){const e=Bn;Bn=null,pn=!1,Ji=null,e&&e(t===!0),f()}function Dd(){const t=Ji||{};return`
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
  `}function Zo(t){var r,i,s,o;const e=(i=(r=t.target).closest)==null?void 0:i.call(r,"#cancelGuildSyncConfirmButton"),n=(o=(s=t.target).closest)==null?void 0:o.call(s,"#acceptGuildSyncConfirmButton");if(!(!e&&!n)){if(t.preventDefault(),t.stopPropagation(),e){$r(!1);return}n&&$r(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",Zo,!0),document.addEventListener("pointerup",Zo,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function Md(){if(!pn)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=r=>{r.preventDefault(),r.stopPropagation(),$r(!1)}),e&&(e.onclick=r=>{r.preventDefault(),r.stopPropagation(),$r(!0)});const n=document.querySelector(".guildsync-confirm-overlay");n&&(n.onclick=r=>{r.target===n&&(r.preventDefault(),r.stopPropagation())})}function na(t=I){if(!(d!=null&&d.connected))return;if(t==="discord-members"?jt:t==="eso-members"?Ue:t==="more"?He:!1){Ri.add(t);return}Ri.delete(t),t==="discord-members"&&Wr({silent:!0}),t==="eso-members"&&(Ai=!0,Bt({silent:!0})),t==="more"&&le({silent:!0})}function zn(t){Ri.has(t)&&na(t)}function ra(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(Ed())return;const e=t.dataset.tabId;if(!e)return;const n=e!==I;I=e,na(),n&&f()})})}function Td(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function eo(t){const e={x:window.scrollX,y:window.scrollY},n=[];for(let o=t;o;o=o.parentElement)n.push({element:o,top:o.scrollTop,left:o.scrollLeft});const r=t?Array.from(t.querySelectorAll("*")):[],i=(o,a)=>o.id?o.id===a.id:o.tagName===a.tagName&&o.className===a.className,s=r.filter(o=>o.scrollTop||o.scrollLeft).map(o=>({identity:{id:o.id,tagName:o.tagName,className:o.className},occurrence:r.filter(a=>i(o,a)).indexOf(o),top:o.scrollTop,left:o.scrollLeft}));return()=>{const o=t?Array.from(t.querySelectorAll("*")):[];for(const{identity:a,occurrence:l,top:u,left:y}of s){const g=o.filter(b=>i(a,b))[l];g&&(g.scrollTop=u,g.scrollLeft=y)}for(const{element:a,top:l,left:u}of n)a.scrollTop=l,a.scrollLeft=u;window.scrollTo({left:e.x,top:e.y,behavior:"instant"})}}function f(t={}){We&&Td();const e=document.querySelector(".guildsync-tabs"),n=document.querySelector("#guildSyncTabContent"),r=eo(n);e&&(e.innerHTML=Xs()),n&&(n.innerHTML=ta()),ra(),_c(),Ja(),lc(),ua(),Ya(),Oa(),Pa(),Fa(),Ga(),$a(),Qa(),r(),t.restoreDiscordSearchFocus&&Oh(),t.restoreRosterSearchFocus&&Ph(),I==="discord-members"&&(d==null?void 0:d.connected)&&te.length===0&&!jt&&Wr({silent:!0}),I==="eso-members"&&(d==null?void 0:d.connected)&&ae.length===0&&!Ue&&!Ai&&(Ai=!0,Bt({silent:!0})),(I==="more"&&ne.length===0||I==="settings"&&!K&&!Xo)&&(d==null?void 0:d.connected)&&!He&&(Xo=!0,le({silent:!0})),(I==="discord-members"||I==="eso-members"||I==="settings")&&(d==null?void 0:d.connected)&&C.length===0&&!z&&Jn({silent:!0})}function ia(){const t=qh(),e=Fh(),n=Array.from(Ot),r=Array.from(Pt);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${c(Lc(Ir))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${jt||kr?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${kr?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${h(vr)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!Ot.has(i)).map(i=>`<option value="${h(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All roles</span>':n.map(i=>Hh(i)).join("")}
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
              ${Qi.filter(i=>!Pt.has(i.id)).map(i=>`<option value="${h(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>sa("discord",i)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${ir("username","Username")}
                ${ir("global_name","Global Name")}
                ${ir("server_nickname","Server Nickname")}
                ${ir("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>Gh(i)).join(""):Uh()}
            </tbody>
          </table>
        </div>
      </div>
      ${Kt?Yd():""}
    </div>
  `}function oa(){const t=Gd(),e=Hd(),n=Array.from(vt),r=Array.from(Ft);return`
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
          <span class="discord-last-refresh">Last Refresh: ${c(Af(Sr))}</span>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${Ue?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Ue?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${h(wr)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!vt.has(i)).map(i=>`<option value="${h(i)}">${c(i)}</option>`).join("")}
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
              ${Qi.filter(i=>!Ft.has(i.id)).map(i=>`<option value="${h(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>sa("roster",i)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${An("account_name","Account Name")}
                ${An("rank","Rank")}
                ${An("joined","Joined")}
                ${An("notes","Notes","roster-notes-header")}
                ${An("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map((i,s)=>Bd(i,s)).join(""):Od()}
            </tbody>
          </table>
        </div>
      </div>
      ${zt?Xd():""}
      ${ln?Cd():""}
    </div>
  `}function Bd(t,e=-1){const n=Pd(t.rank||""),r=n?` style="color: ${n};"`:"";return`
    <tr class="eso-roster-row${e===W?" roster-search-active-row":""}"${r} data-roster-row-index="${h(String(e))}" data-eso-account-name="${h(t.account_name||"")}">
      <td>${c(t.account_name||"")}</td>
      <td>${to(t.rank||"")}</td>
      <td>${c(Gr(t.joined))}</td>
      <td class="roster-notes-cell">${Nd(t)}</td>
      <td class="member-link-action-cell">${Na({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function Nd(t){const e=String((t==null?void 0:t.account_name)||"").trim(),n=Number((t==null?void 0:t.note_count)||0),r=n>0,i=r?`${n} roster note${n===1?"":"s"} for ${e}`:`No roster notes for ${e}`;return`
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
  `}function Cd(){const t=On||"",e=Boolean((k==null?void 0:k.logged_in)&&(k==null?void 0:k.allowed));return`
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
          ${at?`<div class="discord-data-error">${c(at)}</div>`:""}
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
          ${e?xd():'<div class="roster-history-muted">Log in to add a new note.</div>'}
        </div>
      </div>
    </div>
  `}function qd(){return _r?'<tr><td class="bank-empty-row" colspan="3">Loading notes...</td></tr>':!Array.isArray(st)||st.length===0?'<tr><td class="bank-empty-row" colspan="3">No notes recorded for this member.</td></tr>':st.map(t=>`
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
        ${St?"disabled":""}
      >${c(Yt)}</textarea>
      <button id="saveRosterNoteButton" class="refresh-discord-button" type="button" ${St?"disabled":""}>
        ${St?"Saving...":"Save Note"}
      </button>
    </div>
  `}function Id(t){const e=Number(t||0);return!Number.isFinite(e)||e<=0?"":new Date(e*1e3).toLocaleString()}function Od(){return`
    <tr>
      <td class="bank-empty-row" colspan="5">${c(Ue?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function Pd(t){String(t||"").trim();const e=Wh(t);return jr(e==null?void 0:e.role_color)}function to(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${c(e)}</span>`}function Fd(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":to(e)}function Gd(){const t=wr.trim().toLowerCase(),e=ae.filter(n=>{const r=String(n.rank||"").trim();if(vt.size>0&&!vt.has(r)||!la(Ft,Di(n)))return!1;if(!t)return!0;const i=Gr(n.joined),s=co(n.joined),o=Di(n),a=ca(n.account_name||"");return[n.account_name,r,i,s,n.joined,o,a].map(u=>String(u||"").toLowerCase()).join(" ").includes(t)});return Ud(e)}function Ud(t){if(!xe||!ee)return t;const e=ee==="desc"?-1:1;return[...t].sort((n,r)=>{const i=es(n,xe),s=es(r,xe),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:String(n.account_name||"").localeCompare(String(r.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function es(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const n=Number(t.joined||0);return Number.isFinite(n)&&n>0?String(n).padStart(16,"0"):""}if(e==="notes")return String(Number(t.note_count||0)).padStart(8,"0");if(e==="linked"){const n=Di(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[n]||"9"} ${n} ${ca(t.account_name||"")}`}return String(t.account_name||"")}function Vd(t){const n=new Set(["account_name","rank","joined","notes","linked"]).has(t)?t:"account_name";xe!==n?(xe=n,ee="asc"):ee==="asc"?ee="desc":ee==="desc"?(xe="",ee=""):(xe=n,ee="asc"),W=-1,f()}function An(t,e,n=""){const r=xe===t&&Boolean(ee),i=r?ee==="asc"?"ascending":"descending":"none",s=r?ee==="asc"?"\u25B2":"\u25BC":"\u2195";return`
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
  `}function Hd(){return Array.from(new Set(ae.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function Wd(t){const e=So(t),n=jr(e==null?void 0:e.role_color),r=_o(n),i=wo(n,r);return`
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
  `}function jd(t){const e=Qi.find(n=>n.id===t);return e?e.label:t}function sa(t,e){const n=t==="roster"?"roster":"discord",r=jd(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${n}-link-status-filter="${h(e)}"
      title="Remove ${h(r)} link filter"
    >
      <span>${c(r)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function aa(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked"&&String(n.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function zd(t){return aa(Fr(t==null?void 0:t.discord_id))}function Di(t){return aa(Pr(t==null?void 0:t.account_name))}function ca(t){const e=Pr(t),n=Ba({mode:"eso-to-discord",esoAccountName:t}),r=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean),i=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="candidate").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean);return[n.label,n.title,r.join(" "),i.join(" ")].filter(Boolean).join(" ")}function la(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function Yd(){return`
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
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${h(Je)}" />
        </div>

        ${Pe?`<div class="discord-data-error">${c(Pe)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Kd()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${Dt?`: ${c(Dt)}`:""}</div>
            ${Jd()}
          </div>
        </div>
      </div>
    </div>
  `}function Kd(){return lt&&se.length===0?'<div class="roster-history-muted">Searching...</div>':se.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${se.map((t,e)=>`
        <button class="roster-history-match${e===fe||t.discord_id===Jt?" is-selected":""}" type="button" data-discord-history-id="${h(t.discord_id)}" data-discord-history-name="${h(Mi(t))}">
          <span>${c(Mi(t))}</span>
          <strong>${c(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===fe?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Jd(){return Jt?lt&&ct.length===0?'<div class="roster-history-muted">Loading history...</div>':ct.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${ct.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(co(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${c(Qd(t.event_type))}</td>
              <td>${c(t.old_value||"")}</td>
              <td>${c(t.new_value||"")}</td>
              <td>${c(t.initiator||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function Mi(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function Qd(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Xd(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${h(In)}" />
        </div>

        ${Oe?`<div class="discord-data-error">${c(Oe)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Zd()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${ft?`: ${c(ft)}`:""}</div>
            ${eu()}
          </div>
        </div>
      </div>
    </div>
  `}function Zd(){return ot&&oe.length===0?'<div class="roster-history-muted">Searching...</div>':oe.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${oe.map((t,e)=>`
        <button class="roster-history-match${e===ue||t.account_name===ft?" is-selected":""}" type="button" data-roster-history-account="${h(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <strong>${c(t.rank||"")}</strong>
          ${e===ue?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function eu(){return ft?ot&&it.length===0?'<div class="roster-history-muted">Loading history...</div>':it.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${it.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(co(t.timestamp))}</td>
              <td>${c(t.event_type||"")}</td>
              <td>${Fd(t.rank)}</td>
              <td>${c(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function Yn(){return typeof window<"u"&&window.GUILDSYNC_WEB===!0}function da(){if(!Yn())return!0;try{return localStorage.getItem(Gs)==="1"}catch{return!1}}function tu(){return!Yn()||da()?"":`
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
  `}function nu(){const t=document.querySelector("#webSavedVarsUploadBannerDismissButton");!t||t.addEventListener("click",()=>{var e,n;try{localStorage.setItem(Gs,"1")}catch{}(e=document.querySelector("#webSavedVarsUploadBannerHost"))==null||e.remove(),(n=document.querySelector(".guildsync-tab-content"))==null||n.classList.add("web-upload-banner-dismissed")})}function ru(){return`
    <div class="guildsync-tab-panel reports-panel" data-active-tab="settings">
      <div class="discord-data-header reports-header">
        <div>
          <h2 class="discord-data-title">Reports & Admin</h2>
          <p class="discord-data-subtitle">Run GuildSync reports and administrative review tools. More options can be added here later.</p>
        </div>
      </div>

      <div class="reports-scroll-area">
        ${ha()}
        ${Xi.render()}
        <section class="reports-list" aria-label="Available reports">
          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Associates Promotion Eligible</h3>
              <p>Shows Associates who have been in the guild at least two weeks, have purchased at least one raffle ticket, and are linked to Discord. Also shows otherwise eligible Associates who still need a Discord link reviewed.</p>
            </div>
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${Qe?"disabled":""}>
              ${Qe?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${Xe?"disabled":""}>
              ${Xe?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${Ze?"disabled":""}>
              ${Ze?"Loading...":"Run"}
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
  `}function ua(){var t,e,n,r;I==="settings"&&(ws(Ks,{refresh:!0}),Xi.wire({request:(i,s)=>R(i,s,12e4),rerender:f}),fa(),(t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>ga()),(e=document.querySelector("#runDiscordRankAuditReportButton"))==null||e.addEventListener("click",()=>pu()),(n=document.querySelector("#runDiscordLastSeenReportButton"))==null||n.addEventListener("click",()=>yu()),(r=document.querySelector("#runMemberLinksReportButton"))==null||r.addEventListener("click",()=>Ru()))}function fa(t=document){var e,n,r,i,s;(e=t.querySelector("#cancelBonusDefaults"))==null||e.addEventListener("click",()=>{pe=!1,f()}),(n=t.querySelector("#resetBonusDefaults"))==null||n.addEventListener("click",()=>{pe=!0,f()}),(r=t.querySelector("#raffleBonusSettingsForm"))==null||r.addEventListener("submit",iu),(i=t.querySelector("#raffleBonusSettingsForm"))==null||i.addEventListener("input",o=>{Ae={raffle:Fe,values:new Map(new FormData(o.currentTarget))}}),(s=t.querySelector("#bonusRafflePicker"))==null||s.addEventListener("change",o=>{Fe=o.currentTarget.value,pe=!1,Ae=null,f()})}function ha(){var o;if(!K)return'<article class="report-option-card raffle-bonus-card"><div class="report-option-copy"><h3><button type="button" class="report-section-toggle" data-report-toggle="bonus" aria-expanded="false" aria-controls="raffleBonusContent">Raffle Bonus Tickets <span aria-hidden="true">\u25BE</span></button></h3><div id="raffleBonusContent" class="report-section-content" inert><div class="report-section-inner"><p>Loading raffle bonus settings...</p></div></div></div></article>';const t=!pe&&(Ae==null?void 0:Ae.raffle)===Fe?Ae.values:null,e=Xt.find(a=>`${a.type}:${a.salesEnd}`===Fe),n=pe&&(e==null?void 0:e.inheritedSettings)?e.inheritedSettings:e,r=e?{enabledByType:{...K.enabledByType,[e.type]:n.enabled},biweekly:e.type==="biweekly"?n.tiers:K.biweekly,monthly:e.type==="monthly"?n.tiers:K.monthly}:pe&&K.envDefaults||K,i=((o=k==null?void 0:k.user)==null?void 0:o.role)==="admin",s=(a,l)=>{var u,y;return`
    <fieldset class="raffle-bonus-tiers" ${i&&!pe?"":"disabled"}>
      <legend>${l}</legend>
      <label><input name="${a}-enabled" type="checkbox" ${(t?t.has(`${a}-enabled`):(y=(u=r.enabledByType)==null?void 0:u[a])!=null?y:r.enabled)?"checked":""}> Enable bonus tickets</label>
      ${r[a].map((g,b)=>{var w,S;return`
        <div class="raffle-bonus-tier">
          <span>Period ${b+1}${b===r[a].length-1?" (final)":""}</span>
          <label>Hours <input name="${a}-${b}-hours" type="number" min="1" step="1" required value="${h(String(t&&(w=t.get(`${a}-${b}-hours`))!=null?w:g.hours))}"></label>
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
            ${Xt.map(a=>`<option value="${h(`${a.type}:${a.salesEnd}`)}" ${Fe===`${a.type}:${a.salesEnd}`?"selected":""}>${c(a.label)}${a.enabled?" (Bonuses)":""}</option>`).join("")}
          </select>
        </label>
        <p data-bonus-settings-source>Source: ${c(e?e.overridden?"Raffle override":"Saved raffle policy":K.source===".env"?"Default":K.source||"Default")}</p>
        ${pe?'<p role="status">Default Hours, Bonus %, and enabled settings are shown below. Click Save Bonus Settings to apply them, or Cancel default restoration to keep your previous settings.</p><button type="button" id="cancelBonusDefaults">Cancel default restoration</button>':""}
        <form id="raffleBonusSettingsForm">
          ${i?`<button type="button" id="resetBonusDefaults">Return to defaults</button><p>Restores Hours, Bonus %, and the enabled switch ${e?"from this raffle\u2019s inherited policy":"for both raffle types from their default rules"}. Changes apply only after Save Bonus Settings.</p>`:""}
          ${e?s(e.type,e.label):s("biweekly","Bi-Weekly Raffle")+s("monthly","50/50 Raffle")}
          ${i?'<button class="refresh-discord-button report-run-button" type="submit">Save Bonus Settings</button>':"<p>Admin access is required to change these settings.</p>"}
        </form>
        </div></div>
      </div>
    </article>`}async function iu(t){t.preventDefault();const e=t.currentTarget,n=new FormData(e),r=Xt.find(o=>`${o.type}:${o.salesEnd}`===Fe),i=o=>((r==null?void 0:r.type)===o?r.tiers:K[o]).map((a,l)=>({hours:Number(n.get(`${o}-${l}-hours`)),percent:Number(n.get(`${o}-${l}-percent`))})),s=r?{raffleType:r.type,salesEnd:r.salesEnd,enabled:n.has(`${r.type}-enabled`),tiers:i(r.type)}:{enabledByType:{biweekly:n.has("biweekly-enabled"),monthly:n.has("monthly-enabled")},biweekly:i("biweekly"),monthly:i("monthly")};try{pe&&(s.resetToDefaults=!0);const o=await R("guildsync:save-raffle-bonus-settings",s,3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||"Could not save raffle bonus settings.");K=o.bonusSettings,Ae=null,pe=!1,await le({silent:!0}),p("bonus-settings","Raffle bonus settings saved.",{ttlMs:m}),f()}catch(o){p("bonus-settings-error",L(o),{ttlMs:m})}}function pr(){return Yn()&&D()&&(d==null?void 0:d.connected)===!0}function pa(){if(!Yn())return null;let t=document.querySelector("#webSavedVarsFullScreenDropOverlay");return t||(t=document.createElement("div"),t.id="webSavedVarsFullScreenDropOverlay",t.className="web-savedvars-fullscreen-drop-overlay",t.setAttribute("aria-hidden","true"),t.innerHTML=`
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
  `,document.body.appendChild(t),t)}function ts(){const t=pa();!t||(t.classList.add("is-visible"),t.setAttribute("aria-hidden","false"))}function li(){const t=document.querySelector("#webSavedVarsFullScreenDropOverlay");!t||(t.classList.remove("is-visible"),t.setAttribute("aria-hidden","true"))}function Ln(t){var n;return Array.from(((n=t==null?void 0:t.dataTransfer)==null?void 0:n.types)||[]).includes("Files")}function ou(t){!(t!=null&&t.dataTransfer)||(t.dataTransfer.dropEffect=pr()?"copy":"none")}function ma(t){const e=String(t||"").split(/[\\/]/).pop();return ud.get(e)||""}function su(){if(!Yn())return;pa();const t=e=>{!Ln(e)||(e.preventDefault(),e.stopPropagation(),ou(e))};document.addEventListener("dragenter",e=>{!Ln(e)||(t(e),Ct+=1,pr()&&ts())},!0),document.addEventListener("dragover",e=>{t(e),Ln(e)&&pr()&&ts()},!0),document.addEventListener("dragleave",e=>{!Ln(e)||(e.preventDefault(),e.stopPropagation(),Ct=Math.max(0,Ct-1),Ct===0&&li())},!0),document.addEventListener("drop",async e=>{var r;if(!Ln(e))return;if(t(e),Ct=0,li(),!pr()){p("web-savedvars-drop-not-ready","SavedVariables drag/drop is only available while logged in and connected to the GuildSync server.",{ttlMs:m});return}const n=Array.from(((r=e.dataTransfer)==null?void 0:r.files)||[]);await au(n)},!0),window.addEventListener("blur",()=>{Ct=0,li()})}async function au(t=[]){if(ai){p("web-savedvars-drop-busy","A SavedVariables upload is already processing. Please wait for it to finish.",{ttlMs:m});return}const e=Array.from(t||[]).filter(Boolean);if(!e.length){p("web-savedvars-drop-empty","No file was dropped.",{ttlMs:m});return}const n=e.find(r=>!ma(r.name));if(n){p("web-savedvars-drop-invalid",`Unsupported file: ${n.name}. Drop only GuildSyncBanking.lua, GuildSyncRoster.lua, or GuildSyncApplications.lua.`,{ttlMs:m});return}ai=!0;try{for(const r of e)await cu(r)}finally{ai=!1}}async function cu(t){const e=ma(t.name);if(!e)throw new Error(`Unsupported file: ${t.name}`);const n=`web-savedvars-upload-${e}`,r=await t.text();if(!String(r||"").trim())throw new Error(`${t.name} is empty.`);p(n,`Uploading ${t.name}...`);try{const i=await R("guildsync:upload-savedvars-raw",{file_name:t.name,raw_lua_text:r,source:"web-drag-drop"},12e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||`${t.name} upload was rejected.`);e==="banking"?await le({silent:!0}):e==="roster"&&(await Bt({silent:!0}),await Jn({silent:!0})),p(n,i.message||`${t.name} uploaded and processed.`,{ttlMs:m})}catch(i){throw p(n,L(i),{ttlMs:m}),i}Yr("version")}function ga(){dn=!0,wt="",f(),Ha()}function Ti(){dn=!1,wt="",f()}function lu(){const t=du(),e=uu(),n=un.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${Qe?"disabled":""}>${Qe?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(n))} total row${n===1?"":"s"}</span>
        </div>

        ${wt?`<div class="discord-data-error">${c(wt)}</div>`:""}

        <div class="report-results-content">
          ${Qe&&n===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!Qe&&n===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${n>0?ns("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${n>0?ns("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${c(ka())}</textarea>
      </div>
    </div>
  `}function du(){return un.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function uu(){return un.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function ns(t,e,n,r){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${c(t)}</h4>
          <p>${c(e)}</p>
        </div>
        <span>${c(String(n.length))} row${n.length===1?"":"s"}</span>
      </div>
      ${n.length>0?fu(n):`<div class="roster-history-muted report-section-empty">${c(r)}</div>`}
    </section>
  `}function fu(t=un){return`
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
              <td>${to(e.rank||"")}</td>
              <td>${c(Gr(e.joined))}</td>
              <td>${c(ye(e.purchased_tickets||0))}</td>
              <td class="associate-earliest-deposit-cell">${c(ba(e))}</td>
              <td>${c(ya(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function ba(t){const e=String((t==null?void 0:t.earliest_deposit_summary)||"").trim();if(e)return e;const n=String((t==null?void 0:t.earliest_deposit_date)||"").trim(),r=String((t==null?void 0:t.earliest_deposit_raffle_period)||"").trim();return[n,r].filter(Boolean).join(" | ")}function ya(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function ka(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Earliest Deposit / Raffle","Discord Link"]];for(const e of un){const n=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([n,e.account_name||"",e.rank||"",Gr(e.joined),ye(e.purchased_tickets||0),ba(e),ya(e)])}return t.map(e=>e.map(Vr).join("	")).join(`
`)}async function hu(){const t=ka();if(await Hr(t)){p("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:m});return}const n=document.querySelector("#associateTicketReportTsv");n&&(n.focus(),n.select()),p("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function pu(){fn=!0,_t="",f(),Va()}function Bi(){fn=!1,_t="",f()}function mu(){const t=Pn.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${Xe?"disabled":""}>${Xe?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${_t?`<div class="discord-data-error">${c(_t)}</div>`:""}

        <div class="report-results-content">
          ${Xe&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!Xe&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?gu(Pn):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${c(wa())}</textarea>
      </div>
    </div>
  `}function gu(t=Pn){return`
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
              <td data-label="Discord Member" class="discord-rank-audit-member-cell">${c(va(e))}</td>
              <td data-label="Discord Rank Role" class="discord-rank-audit-discord-cell">${c(e.discord_rank||"No matching rank role")}</td>
              <td data-label="Linked ESO Account(s)" class="discord-rank-audit-eso-account-cell">${c(e.eso_accounts||"No linked ESO account")}</td>
              <td data-label="ESO Rank" class="discord-rank-audit-eso-rank-cell">${c(e.eso_rank||"None")}</td>
              <td data-label="Issue" class="discord-rank-audit-issue-cell">${c(Sa(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function va(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function Sa(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function wa(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of Pn)t.push([va(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",Sa(e)]);return t.map(e=>e.map(Vr).join("	")).join(`
`)}async function bu(){const t=wa();if(await Hr(t)){p("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:m});return}const n=document.querySelector("#discordRankAuditReportTsv");n&&(n.focus(),n.select()),p("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function yu(){pt=!0,At="",hn="",f(),Ua(),C.length===0&&!z&&Jn({silent:!0})}function Ni(){pt=!1,At="",hn="",et="",Gt="",tt="",f()}function ku(){const t=no(),e=Ki.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${Ze?"disabled":""}>${Ze?"Loading...":"Run Again"}</button>
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
            value="${h(hn)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${et===""?"selected":""}>All link statuses</option>
            <option value="linked" ${et==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${et==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${et==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${At?`<div class="discord-data-error discord-last-seen-report-error">${c(At)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${Ze&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!Ze&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?vu(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${c(Aa(t))}</textarea>
      </div>
    </div>
  `}function vu(t=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${En("name","Discord Member")}</th>
            <th>${En("eso","Linked ESO Account")}</th>
            <th>${En("date","Last Seen")}</th>
            <th>${En("days","Days Since")}</th>
            <th>${En("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr class="discord-last-seen-row ${h(Eu(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${h(Tt(e).status)}" data-discord-last-seen-search="${h(_a(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${Lu(e)}
                  <span>${c(en(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${wu(e)}</td>
              <td>${c(ro(e.last_seen))}</td>
              <td>${c(io(e.last_seen))}</td>
              <td>${c(Rr(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function En(t,e){const n=Gt===t,r=n?tt==="asc"?"\u25B2":"\u25BC":"\u2195",i=n?`${e}: ${tt==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${n?" active":""}" type="button" data-discord-last-seen-sort="${h(t)}" title="${h(i)}">
      <span>${c(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${c(r)}</span>
    </button>
  `}function no(){const t=[...Ki],e=Gt,n=tt;if(!e||!n)return t;const r=n==="desc"?-1:1;return t.sort((i,s)=>{var o,a;if(e==="date"){const l=Number(i.last_seen||0)||0,u=Number(s.last_seen||0)||0;return(l-u)*r}if(e==="days")return(rs(i.last_seen)-rs(s.last_seen))*r;if(e==="action")return Rr(i.last_seen_action).localeCompare(Rr(s.last_seen_action),void 0,{sensitivity:"base"})*r;if(e==="eso"){const l=Tt(i),u=Tt(s),y={linked:0,candidate:1,unlinked:2},g=((o=y[l.status])!=null?o:9)-((a=y[u.status])!=null?a:9);return g!==0?g*r:l.esoAccountName.localeCompare(u.esoAccountName,void 0,{sensitivity:"base"})*r}return en(i).localeCompare(en(s),void 0,{sensitivity:"base"})*r})}function Su(t){Gt!==t?(Gt=t,tt="asc"):tt==="asc"?tt="desc":(Gt="",tt=""),f()}function en(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function _a(t){return[en(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,_u(t),ro(t==null?void 0:t.last_seen),io(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function Tt(t){const e=Hu(t==null?void 0:t.discord_id),n=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),r=String((e==null?void 0:e.eso_account_name)||"").trim();return n==="linked"&&r?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:r,title:`Linked ESO account: ${r}`}:(n==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&r?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:r,title:`Fuzzy ESO account candidate: ${r}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function wu(t){const e=Tt(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${h(e.className)}"
      title="${h(e.title)}"
      aria-label="${h(e.label)}"
      role="img"
    ></span>
  `}function _u(t){const e=Tt(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function Au(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!n)return"";if(/^https?:\/\//i.test(e))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function Lu(t){const e=en(t),n=e?e.slice(0,2).toUpperCase():"?",r=Au(t);return r?`<span class="discord-member-avatar"><img src="${h(r)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${c(n)}</span>`}function ro(t){const e=Number(t);if(!e)return"Never";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t||"");const r=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(n).reduce((i,s)=>(i[s.type]=s.value,i),{});return`${r.month}/${r.day}/${r.year} ${r.hour}:${r.minute} ${r.dayPeriod}`}function Eu(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const n=(Date.now()-e*1e3)/864e5;return n>30?"discord-last-seen-red":n>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function io(t){const e=Number(t);if(!e)return"Never";const n=Date.now()-e*1e3;if(!Number.isFinite(n))return"";if(n<0)return"0 days";const r=Math.floor(n/864e5);return`${r} day${r===1?"":"s"}`}function rs(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const n=Date.now()-e*1e3;return Number.isFinite(n)?n<0?0:Math.floor(n/864e5):Number.POSITIVE_INFINITY}function Rr(t){return String(t||"").trim()||"None tracked"}function Aa(t=no()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const n of t){const r=Tt(n);e.push([en(n),r.label||"",r.esoAccountName||"",ro(n==null?void 0:n.last_seen),io(n==null?void 0:n.last_seen),Rr(n==null?void 0:n.last_seen_action),(n==null?void 0:n.username)||"",(n==null?void 0:n.discord_id)||""])}return e.map(n=>n.map(Vr).join("	")).join(`
`)}async function $u(){const t=no().filter(i=>{const s=Te(hn),o=String(et||"").trim().toLowerCase(),a=!s||Te(_a(i)).includes(s),l=!o||Tt(i).status===o;return a&&l}),e=Aa(t);if(await Hr(e)){p("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:m});return}const r=document.querySelector("#discordLastSeenReportTsv");r&&(r.focus(),r.select()),p("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function Ru(){We=!0,X="",f(),C.length===0&&!z&&Jn({silent:!0})}function Ci(){We=!1,Or="",yt="",Hn="",Wn="",Ie=-1,f()}function La(t){return[...new Set((Array.isArray(C)?C:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function Ea(t,e){return t.map(n=>`<option value="${h(n)}" ${e===n?"selected":""}>${c(n)}</option>`).join("")}function Du(){return Ea(La("link_status"),Hn)}function Mu(){return Ea(La("link_method"),Wn)}function Tu(){return`
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
            value="${h(Or)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${Hn===""?"selected":""}>All statuses</option>
            ${Du()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${Wn===""?"selected":""}>All methods</option>
            ${Mu()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${yt===""?"selected":""}>All actions</option>
            <option value="needs-link" ${yt==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${yt==="can-unlink"?"selected":""}>Unlink Available</option>
            <option value="can-unblock" ${yt==="can-unblock"?"selected":""}>Unblock Available</option>
          </select>
        </div>

        ${X?`<div class="discord-data-error member-links-report-error">${c(X)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${qu()}
        </div>
      </div>
    </div>
  `}function $a(){var n,r,i,s,o,a;if(!We)return;(n=document.querySelector("#closeMemberLinksReportButton"))==null||n.addEventListener("click",Ci),(r=document.querySelector("#refreshMemberLinksButton"))==null||r.addEventListener("click",()=>Jn()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>Uu());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",xu),t.addEventListener("keydown",Fu)),(s=document.querySelector("#memberLinksReportActionFilter"))==null||s.addEventListener("change",Iu),(o=document.querySelector("#memberLinksReportStatusFilter"))==null||o.addEventListener("change",Ou),(a=document.querySelector("#memberLinksReportMethodFilter"))==null||a.addEventListener("change",Pu),Kn(),document.querySelectorAll("[data-accept-member-candidate]").forEach(l=>{l.addEventListener("click",()=>Da(l.dataset.acceptMemberCandidate||"",l.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(l=>{l.addEventListener("click",()=>Vu(l.dataset.unlinkMemberLink||"",l.dataset.unlinkMemberLinkDiscordId||""))}),document.querySelectorAll("[data-unblock-member-auto-link]").forEach(l=>{l.addEventListener("click",()=>Ma(l.dataset.unblockMemberAutoLink||"",l.dataset.unblockMemberAutoLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",l=>{l.target===e&&Ci()})}function is(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function os(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Bu(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Nu(t){return[...Array.isArray(t)?t:[]].sort((e,n)=>{const r=is(e)-is(n);if(r!==0)return r;const i=os(e).localeCompare(os(n),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((n==null?void 0:n.discord_user_id)||""),void 0,{sensitivity:"base"})})}function Cu(t){const e=qi(t);let n="";e==="Username"?n=(t==null?void 0:t.discord_username)||"":e==="Global Name"?n=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(n=(t==null?void 0:t.discord_server_nickname)||""),n||(n=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const r=e?` <span class="member-link-report-match-field">(${c(e)})</span>`:"";return`<span class="member-link-report-discord-name">${c(n)}</span>${r}`}function qu(){return z&&C.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(C)||C.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${Nu(C).map(e=>{var s;const n=String(e.link_status||"").trim().toLowerCase(),r=String(e.link_method||"").trim().toLowerCase(),i=Cu(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${h(Bu(e))}"
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
  `}function Ra(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function ss(t){const e=Ra();if(e.forEach(r=>r.classList.remove("member-links-report-row-active")),e.length===0){Ie=-1;return}Ie=Math.max(0,Math.min(t,e.length-1));const n=e[Ie];n.classList.add("member-links-report-row-active"),n.scrollIntoView({block:"nearest"})}function Kn(){const t=Te(Or),e=String(yt||"").trim().toLowerCase(),n=String(Hn||"").trim().toLowerCase(),r=String(Wn||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let s=0;i.forEach(a=>{const l=Te(a.dataset.memberLinksReportSearch||""),u=String(a.dataset.memberLinksReportAction||"").trim().toLowerCase(),y=String(a.dataset.memberLinksReportStatus||"").trim().toLowerCase(),g=String(a.dataset.memberLinksReportMethod||"").trim().toLowerCase(),B=(!t||l.includes(t))&&(!e||u===e)&&(!n||y===n)&&(!r||g===r);a.hidden=!B,a.classList.remove("member-links-report-row-active"),B&&(s+=1)});const o=document.querySelector("#memberLinksReportSearchEmpty");o&&(o.hidden=s!==0),Ie=-1}function xu(t){Or=t.target.value||"",Kn()}function Iu(t){yt=t.target.value||"",Kn()}function Ou(t){Hn=t.target.value||"",Kn()}function Pu(t){Wn=t.target.value||"",Kn()}function Fu(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Ra();if(e.length===0)return;if(t.key==="ArrowDown"){const r=Ie<0?0:Ie+1;ss(r>=e.length?e.length-1:r);return}const n=Ie<0?e.length-1:Ie-1;ss(n<0?0:n)}function mr(){return I==="discord-members"||I==="eso-members"||je||We||pt}function Gu(t={}){if(!Array.isArray(t.links))return;const e=JSON.stringify(C)!==JSON.stringify(t.links);C=t.links,e&&mr()&&br()}function as(){const t=document.querySelector("#runMemberLinksReportButton");t&&(t.disabled=z,t.textContent=z?"Loading...":"Run")}async function Jn(t={}){if(!(d!=null&&d.connected)){X="You must be connected to load member links.",mr()&&br();return}z=!0,X="",as(),!t.silent&&mr()&&br();try{const e=await R("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");C=Array.isArray(e.links)?e.links:[]}catch(e){X=L(e)}finally{z=!1,as(),mr()&&br()}}async function Uu(){if(!(d!=null&&d.connected)||!k.logged_in){X="You must be logged in and connected to run auto-linking.",f();return}z=!0,X="",f();try{const t=await R("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");C=Array.isArray(t.links)?t.links:[],p("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:m})}catch(t){X=L(t)}finally{z=!1,f()}}async function Da(t,e=""){try{const n=await R("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to accept candidate.");C=Array.isArray(n.links)?n.links:C,p("member-link-accepted",n.message||"Candidate accepted as a link.",{ttlMs:m})}catch(n){X=L(n),p("member-link-accept-error",X,{ttlMs:m})}}async function Ma(t,e=""){if(!await Zi({title:"Remove Auto-Link Block?",message:`Remove the blocked auto-match record between ${t} and this Discord account? Auto-linking will run immediately and this screen will refresh to show whether the pair linked again.`,confirmLabel:"Unblock",cancelLabel:"Cancel",confirmClass:"danger"}))return!1;z=!0,X="",f();try{const r=await R("guildsync:unblock-member-auto-link",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to remove auto-link block.");C=Array.isArray(r.links)?r.links:C;const i=ve(t),s=String(e||"").trim(),o=r.refreshedPair||C.find(u=>ve(u.eso_account_name)===i&&String(u.discord_user_id||"").trim()===s),a=String((o==null?void 0:o.link_status)||"").trim().toLowerCase(),l=a==="linked"?" It linked again automatically.":a==="candidate"?" It is now showing as a candidate.":" No automatic link was recreated.";return p("member-link-unblocked",`${r.message||"Auto-link block removed."}${l}`,{ttlMs:m}),!0}catch(r){return X=L(r),p("member-link-unblock-error",X,{ttlMs:m}),!1}finally{z=!1,f()}}async function Vu(t,e=""){if(!!await Zi({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const r=await R("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to unlink member.");C=Array.isArray(r.links)?r.links:C,p("member-link-unlinked",r.message||"Member link removed.",{ttlMs:m})}catch(r){X=L(r)}f()}}function ve(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function Pr(t){const e=ve(t);return e?C.filter(n=>ve(n.eso_account_name)===e):[]}function Fr(t){const e=String(t||"").trim();return e?C.filter(n=>String(n.discord_user_id||"").trim()===e):[]}function Ta(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const n=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(n.length>0){const i=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const s=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return s||n[0]}const r=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return r||e[0]}function Hu(t){return Ta(Fr(t))}function Wu(t){return`${ve(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function oo(){return T?T.mode==="discord-to-eso"?Fr(T.discordUserId):Pr(T.esoAccountName):[]}function ju(t){const e=String(t||"").trim(),n=te.find(r=>String(r.discord_id||"").trim()===e);return n&&(n.server_nickname||n.global_name||n.username||n.discord_id)||e}function Ba(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?Fr(t.discordUserId):Pr(t.esoAccountName),r=Ta(n),i=String((r==null?void 0:r.link_status)||"").trim().toLowerCase(),s=n.filter(a=>String(a.link_status||"").trim().toLowerCase()==="linked").length,o=n.filter(a=>String(a.link_status||"").trim().toLowerCase()==="candidate").length;return s>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?s===1?r.eso_account_name:`${s} ESO accounts`:s===1?r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member":`${s} Discord accounts`}`}:i==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?r.eso_account_name:r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member"}`}:i==="blocked"||Number((r==null?void 0:r.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function Na(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,r=Ba(t);return`
    <button
      class="member-link-status-dot member-link-status-${h(r.className)}"
      type="button"
      title="${h(r.title)}"
      aria-label="${h(r.label)}"
      data-open-member-link-dialog="${h(e)}"
      data-member-link-value="${h(n||"")}"
    ></button>
  `}function zu(){return T?T.mode==="discord-to-eso"?ju(T.discordUserId):T.esoAccountName||"":""}function Ca(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function qi(t){const e=Ca((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const n=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(n.includes("discord_username")||n.includes("username"))return"Username";if(n.includes("discord_display_name")||n.includes("global")||n.includes("display"))return"Global Name";if(n.includes("discord_server_nickname")||n.includes("server")||n.includes("nickname"))return"Server Nickname";const r=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(r==="exact"||r==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",s=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const a of s){const l=Yu(i,a.value);(!o||l>o.score)&&(o={...a,score:l})}if(o&&o.score>0)return o.field}return""}function Te(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function Yu(t,e){const n=Te(t),r=Te(e);if(!n||!r)return 0;if(n===r)return 100;if((n.includes(r)||r.includes(n))&&Math.min(n.length,r.length)>=4)return 88;const i=Math.abs(n.length-r.length),s=[...n].findIndex((a,l)=>a!==r[l]),o=s===-1?Math.min(n.length,r.length):s;return Math.max(0,Math.min(75,Math.round(o*10-i*3)))}function Ku(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function Ju(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function Qu(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),n=Ku(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${c(n)}</span>`}function Xu(t){var a;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",n=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",r=String(t.link_status||"").trim().toLowerCase(),o=r==="linked"?`<button
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
        <div><span>Status:</span> ${Qu(t)} \xB7 ${c(Ju(t.link_method))} \xB7 ${c(String((a=t.match_confidence)!=null?a:""))}% \xB7 ${c(n)}</div>
        ${qi(t)?`<div><span>Matched:</span> Matched on ${c(qi(t))}</div>`:""}
      </div>
      ${o}
    </div>
  `}function Zu(){const t=oo();return t.length?[...t].sort((n,r)=>{var l,u;const i=String(n.link_status||"").trim().toLowerCase(),s=String(r.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},a=((l=o[i])!=null?l:9)-((u=o[s])!=null?u:9);return a!==0?a:Number(r.match_confidence||0)-Number(n.match_confidence||0)}).map(n=>Xu(n)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function ef(){if(Qt)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(Ve)return`<div class="discord-data-error">${c(Ve)}</div>`;if(!Array.isArray(Lt)||Lt.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(oo().map(n=>Wu(n))),e=[...Lt].filter(n=>{const r=(T==null?void 0:T.mode)==="discord-to-eso"?`${ve(n.account_name)}::${String(T.discordUserId||"").trim()}`:`${ve(T==null?void 0:T.esoAccountName)}::${String(n.discord_id||"").trim()}`;return!t.has(r)}).sort((n,r)=>{const i=Number(r.confidence||0)-Number(n.confidence||0);return i!==0?i:cs(n).localeCompare(cs(r),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(n=>tf(n)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function cs(t){return((T==null?void 0:T.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function tf(t,e={}){var g,b,w;const n=(T==null?void 0:T.mode)||"",r=n==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=Ca(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),s=n==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[s,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),a=n==="discord-to-eso"?t.account_name:t.discord_id,l=e.disabled===!0,u=[r,s,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),y=[r,o,`${(g=t.confidence)!=null?g:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${h(a||"")}" data-member-link-option-search="${h(u)}" title="${h(y)}" ${l?"disabled":""}>
      <span class="member-link-option-name" title="${h(r||"")}">${c(r||"")}</span>
      <span class="member-link-option-subtitle" title="${h(o||"")}">${c(o||"")}</span>
      <span class="member-link-option-confidence" title="${h(String((b=t.confidence)!=null?b:0))}%">${c(String((w=t.confidence)!=null?w:0))}%</span>
    </button>
  `}function nf(){const t=(T==null?void 0:T.mode)||"",e=zu(),n=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
            ${Zu()}
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
              value="${h(jn)}"
            />
            ${ef()}
          </section>
        </div>

      </div>
    </div>
  `}async function so(t,e){if(!(d!=null&&d.connected)||!D()){p("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:m});return}je=!0,T=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},Lt=[],Qt=!0,Ve="",jn="",_e=-1,f();try{if(!Array.isArray(C)||C.length===0){const i=await R("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(C=Array.isArray(i.links)?i.links:[])}const r=await R("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load link suggestions.");Lt=Array.isArray(r.options)?r.options:[]}catch(n){Ve=L(n)}finally{Qt=!1,f()}}function tn(){document.removeEventListener("keydown",xi),je=!1,T=null,Lt=[],Qt=!1,Ve="",jn="",_e=-1,f()}function qa(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function ls(t){const e=qa();if(e.forEach(r=>r.classList.remove("member-link-option-row-active")),e.length===0){_e=-1;return}_e=Math.max(0,Math.min(t,e.length-1));const n=e[_e];n.classList.add("member-link-option-row-active"),n.scrollIntoView({block:"nearest"})}function xa(){const t=Te(jn),e=[...document.querySelectorAll(".member-link-option-row")];let n=0;e.forEach(i=>{const s=Te(i.dataset.memberLinkOptionSearch||i.textContent||""),o=!t||s.includes(t);i.hidden=!o,i.classList.remove("member-link-option-row-active"),o&&(n+=1)});const r=document.querySelector("#memberLinkSuggestionSearchEmpty");r&&(r.hidden=n!==0),_e=-1}function rf(t){jn=t.target.value||"",xa()}function of(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=qa();if(e.length===0)return;if(t.key==="ArrowDown"){const r=_e<0?0:_e+1;ls(r>=e.length?e.length-1:r);return}const n=_e<0?e.length-1:_e-1;ls(n<0?0:n)}function xi(t){!je||t.key==="Escape"&&(t.preventDefault(),tn())}async function sf(t){if(!(!T||!t))try{const e=T.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:T.discordUserId}:{esoAccountName:T.esoAccountName,discordUserId:t},n=await R("guildsync:manual-link-member",e,3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to link members.");C=Array.isArray(n.links)?n.links:C,p("member-link-saved",n.message||"Member link saved.",{ttlMs:m}),tn()}catch(e){Ve=L(e),f()}}async function af(t,e=""){await Da(t,e),tn()}async function Ia(){if(!!T){Qt=!0,Ve="",f();try{const t=T.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:T.discordUserId}:{mode:"eso-to-discord",accountName:T.esoAccountName},e=await R("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");Lt=Array.isArray(e.options)?e.options:[]}catch(t){Ve=L(t)}finally{Qt=!1,f()}}}async function cf(t="",e=""){const n=oo().find(i=>ve(i.eso_account_name)===ve(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!n||!await Zi({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await R("guildsync:manual-unlink-member",{esoAccountName:n.eso_account_name,discordUserId:n.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");C=Array.isArray(i.links)?i.links:C,p("member-link-unlinked",i.message||"Member link removed.",{ttlMs:m}),await Ia()}catch(i){Ve=L(i),f()}}async function lf(t="",e=""){await Ma(t,e)&&await Ia()}function Oa(){var n;if(!je)return;document.removeEventListener("keydown",xi),document.addEventListener("keydown",xi),(n=document.querySelector("#closeMemberLinkDialogButton"))==null||n.addEventListener("click",tn);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",rf),t.addEventListener("keydown",of),xa()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(r=>{r.addEventListener("click",()=>cf(r.dataset.unlinkEsoAccount||"",r.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-unblock-dialog-member-auto-link]").forEach(r=>{r.addEventListener("click",()=>lf(r.dataset.unblockEsoAccount||"",r.dataset.unblockDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(r=>{r.addEventListener("click",()=>sf(r.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(r=>{r.addEventListener("click",()=>af(r.dataset.acceptDialogMemberCandidate||"",r.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",r=>{r.target===e&&tn()})}function Pa(){var e,n,r;if(!dn)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",Ti),(n=document.querySelector("#rerunAssociateTicketReportButton"))==null||n.addEventListener("click",()=>Ha()),(r=document.querySelector("#copyAssociateTicketReportGridButton"))==null||r.addEventListener("click",()=>hu());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Ti()})}function Fa(){var e,n,r;if(!fn)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",Bi),(n=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||n.addEventListener("click",()=>Va()),(r=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||r.addEventListener("click",()=>bu());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Bi()})}function Ga(){var r,i,s;if(!pt)return;(r=document.querySelector("#closeDiscordLastSeenReportButton"))==null||r.addEventListener("click",Ni),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>Ua()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>$u()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(o=>{o.addEventListener("click",()=>Su(o.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",df);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",uf),ao();const n=document.querySelector(".discord-last-seen-report-overlay");n&&n.addEventListener("click",o=>{o.target===n&&Ni()})}function df(t){hn=t.target.value||"",ao()}function uf(t){et=t.target.value||"",ao()}function ao(){const t=Te(hn),e=String(et||"").trim().toLowerCase(),n=[...document.querySelectorAll("[data-discord-last-seen-row]")];let r=0;n.forEach(s=>{const o=Te(s.dataset.discordLastSeenSearch||s.textContent||""),a=String(s.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),y=(!t||o.includes(t))&&(!e||a===e);s.hidden=!y,y&&(r+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=r!==0)}async function Ua(){if(!(d!=null&&d.connected)||!D()){At="You must be logged in and connected to run this report.",f();return}Ze=!0,At="",f();try{const t=await R("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");te=ko(t.members),xr=vo(t.roles),Ki=[...te]}catch(t){At=L(t)}finally{Ze=!1,f(),G("discordLastSeenReportSearchInput")}}async function Va(){if(!(d!=null&&d.connected)||!D()){_t="You must be logged in and connected to run this report.",f();return}Xe=!0,_t="",f();try{const t=await R("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Pn=Array.isArray(t.rows)?t.rows:[]}catch(t){_t=L(t)}finally{Xe=!1,f()}}async function Ha(){if(!(d!=null&&d.connected)||!D()){wt="You must be logged in and connected to run this report.",f();return}Qe=!0,wt="",f();try{const t=await R("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");un=Array.isArray(t.rows)?t.rows:[]}catch(t){wt=L(t)}finally{Qe=!1,f()}}function Vt(){const t=String(bn||"").trim().toLowerCase(),e={account_name:"Anonymous",rank:"Manual Entry"},n=new Set(["anonymous"]),r=ae.filter(i=>String(i.account_name||"").trim()).filter(i=>{const o=String(i.account_name||"").trim().toLowerCase();return!o||n.has(o)||t&&!o.includes(t)?!1:(n.add(o),!0)}).slice().sort((i,s)=>{const o=String(i.account_name||"").toLowerCase(),a=String(s.account_name||"").toLowerCase(),l=t&&o.startsWith(t)?0:1,u=t&&a.startsWith(t)?0:1;return l!==u?l-u:o.localeCompare(a)}).slice(0,19);return[e,...r]}function Wa(t=Vt()){const e=String(x.accountName||"").trim();return t.length===0?'<div class="roster-history-muted manual-ticket-no-matches">No matching guild members found.</div>':t.map((n,r)=>`
        <button class="roster-history-match${r===J||n.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${h(n.account_name)}" role="option" aria-selected="${r===J||n.account_name===e?"true":"false"}">
          <span>${c(n.account_name)}</span>
          <strong>${c(n.rank||"")}</strong>
          ${r===J?"<small>Enter</small>":""}
        </button>
      `).join("")}function ja(){document.querySelectorAll("[data-manual-ticket-account]").forEach(t=>{t.addEventListener("mousedown",e=>{e.preventDefault()}),t.addEventListener("click",()=>{za(t.dataset.manualTicketAccount||"")})})}function di(){const t=document.querySelector("#manualTicketMatchList");if(!t)return;const e=Vt();J>=e.length&&(J=e.length>0?e.length-1:-1),t.innerHTML=Wa(e),ja()}function za(t){const e=String(t||"").trim();x.accountName=e,bn=e,me=!1,J=-1,re="",f()}function G(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const n=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(n,n)},0)}function ff(){const t=me?Vt():[],e=String(x.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Entry</h3>
            <p>Add a manual banking or raffle entry such as FFTG, officer corrections, or anonymous gold.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${re?`<div class="discord-data-error">${c(re)}</div>`:""}

        <div class="manual-ticket-form">
          <div class="manual-ticket-member-picker">
            <label class="manual-ticket-member-field" for="manualTicketAccountSearchInput">
              <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${h(bn)}" autocomplete="off" />
            </label>

            ${me?`
              <div id="manualTicketMatchList" class="roster-history-match-list manual-ticket-match-list" role="listbox" aria-label="Matching guild members">
                ${Wa(t)}
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
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${Ar?"disabled":""}>${Ar?"Saving...":"Add Manual Entry"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Ya(){var s,o,a,l,u,y;if(!Ge)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{Ge=!1,f()});const t=document.querySelector("#manualTicketAccountSearchInput");if(t){const g=({rerender:b=!1}={})=>{if(me=!0,J=Vt().length>0?0:-1,b){f(),G("manualTicketAccountSearchInput");return}di()};t.addEventListener("focus",()=>{me||g({rerender:!0})}),t.addEventListener("click",()=>{me||g({rerender:!0})}),t.addEventListener("input",b=>{bn=b.target.value||"",x.accountName="",me=!0,J=Vt().length>0?0:-1,di()}),t.addEventListener("keydown",b=>{if(b.key==="Escape")return;if(!me){(b.key==="ArrowDown"||b.key==="ArrowUp")&&(b.preventDefault(),g({rerender:!0}));return}const w=Vt();if(b.key==="ArrowDown"||b.key==="ArrowUp"){if(w.length===0)return;b.preventDefault();const _=b.key==="ArrowDown"?1:-1;J=((J<0?0:J)+_+w.length)%w.length,di();return}if(b.key!=="Enter")return;b.preventDefault();const S=w[J>=0?J:0];S!=null&&S.account_name&&za(S.account_name)})}ja(),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",g=>{x.note=g.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(g=>{g.addEventListener("click",()=>{const b=String(g.dataset.manualTicketType||"").trim().toLowerCase();x.ticketType=b==="monthly"?"monthly":"biweekly",f()})}),(a=document.querySelector("[data-manual-ticket-toggle]"))==null||a.addEventListener("click",()=>{x.ticketType=x.ticketType==="monthly"?"biweekly":"monthly",f()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",g=>{const b=String(g.target.value||"").replace(/\D/g,"");g.target.value!==b&&(g.target.value=b),x.goldValue=b});const n=document.querySelector("#manualTicketCountInput");n==null||n.addEventListener("input",g=>{const b=String(g.target.value||"").replace(/\D/g,"");g.target.value!==b&&(g.target.value=b),x.tickets=b});const r=g=>{const b=Number(x.tickets)||0,w=Math.max(0,b+g);x.tickets=String(w),n&&(n.value=x.tickets,n.focus())};(l=document.querySelector("#manualTicketCountUpButton"))==null||l.addEventListener("click",()=>r(1)),(u=document.querySelector("#manualTicketCountDownButton"))==null||u.addEventListener("click",()=>r(-1)),(y=document.querySelector("#saveManualBiweeklyTicketButton"))==null||y.addEventListener("click",()=>hf());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",g=>{g.target===i&&(Ge=!1,f())})}async function hf(){const t=String(x.accountName||"").trim(),e=String(x.note||"").trim(),n=String(x.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",r=Number(String(x.goldValue||"").trim()||0),i=Number(String(x.tickets||"").trim()||0);if(me){re="Select a matching guild member or Anonymous from the list before saving.",f(),G("manualTicketAccountSearchInput");return}if(!t){re="Select a matching guild member or Anonymous from the list before saving.",f(),G("manualTicketAccountSearchInput");return}if(!Number.isFinite(r)||r<0){re="Gold value must be zero or greater.",f();return}if(!Number.isFinite(i)||i<0){re="Tickets must be zero or greater.",f();return}const s=t.toLowerCase()==="anonymous";if(s&&Math.floor(i)>0){re="Anonymous cannot be awarded tickets. Use 0 tickets and enter a gold value.",f();return}if(Math.floor(r)===0&&Math.floor(i)===0){re=s?"Enter a gold value for Anonymous when tickets are 0.":"Enter gold or tickets. Both cannot be zero.",f();return}Ar=!0,re="",f();try{const o=await R("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:n,gold_value:Math.floor(r),tickets:Math.floor(i)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Failed to add manual entry.");Ge=!1,x={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},bn="",J=-1,me=!1,await le({silent:!0}),p("manual-ticket-added",o.message||"Manual entry added.",{ttlMs:m})}catch(o){re=L(o)}finally{Ar=!1,f()}}async function Ka(t=""){const e=String(t||"").trim();if(!!e){ln=!0,On=e,st=[],_r=!0,St=!1,at="",Yt="",f();try{const n=await R("guildsync:request-roster-member-notes",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster notes.");st=Array.isArray(n.notes)?n.notes:[]}catch(n){at=L(n)}finally{_r=!1,f()}}}function Ii(){ln=!1,On="",st=[],_r=!1,St=!1,at="",Yt="",f()}function pf(){var n,r;if(!ln)return;(n=document.querySelector("#closeRosterNotesButton"))==null||n.addEventListener("click",Ii);const t=document.querySelector("#rosterNotesNewNote");t&&t.addEventListener("input",i=>{Yt=i.target.value||""}),(r=document.querySelector("#saveRosterNoteButton"))==null||r.addEventListener("click",()=>mf());const e=document.querySelector(".roster-notes-overlay");e&&e.addEventListener("click",i=>{i.target===e&&Ii()})}async function mf(){const t=String(Yt||"").trim();if(!t){at="Enter a note before saving.",f();return}St=!0,at="",f();try{const e=await R("guildsync:add-roster-member-note",{account_name:On,note:t},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to save roster note.");e.note&&(st=[...st,e.note]),Yt="";const n=ae.find(r=>ve(r.account_name)===ve(On));n&&(n.note_count=Number(n.note_count||0)+1)}catch(e){at=L(e)}finally{St=!1,f()}}function Ja(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>Bt());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{zt=!0,Oe="",f()});const n=document.querySelector("#rosterMemberSearch");n&&(n.addEventListener("input",o=>{wr=o.target.value||"",Li=o.target.selectionStart,Ei=o.target.selectionEnd,W=-1,f({restoreRosterSearchFocus:!0})}),n.addEventListener("keydown",gf)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Vd(o.dataset.rosterSortColumn||"account_name")})});const r=document.querySelector("#rosterRankFilter");r&&r.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(vt.add(a),W=-1,f())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRosterRankFilter||"";vt.delete(a),W=-1,f()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(Ft.add(a),W=-1,f())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRosterLinkStatusFilter||"";Ft.delete(a),W=-1,f()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>so(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))}),document.querySelectorAll("[data-open-roster-notes]").forEach(o=>{o.addEventListener("click",()=>Ka(o.dataset.openRosterNotes||""))}),pf();const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{wr="",vt.clear(),Ft.clear(),xe="",ee="",W=-1,f()}),bf()}function gf(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){W=-1;return}t.preventDefault(),t.key==="ArrowDown"?W=W<0?0:Math.min(W+1,e.length-1):t.key==="ArrowUp"&&(W=W<0?e.length-1:Math.max(W-1,0)),e.forEach((r,i)=>{r.classList.toggle("roster-search-active-row",i===W)});const n=e[W];n&&typeof n.scrollIntoView=="function"&&n.scrollIntoView({block:"nearest",inline:"nearest"})}function bf(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{zt=!1,f()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",n=>{if(In=n.target.value||"",ue=-1,!In.trim()){clearTimeout(ci),Oe="",oe=[],ft="",it=[],ot=!1,f(),G("rosterHistorySearchInput");return}clearTimeout(ci),ci=setTimeout(()=>{Sf({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(oe.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;ue=((ue<0?0:ue)+i+oe.length)%oe.length,f(),G("rosterHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=oe[ue>=0?ue:0];r!=null&&r.account_name&&us(r.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(n=>{n.addEventListener("click",()=>{us(n.dataset.rosterHistoryAccount||"")})})}function Qa(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{Kt=!1,f()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",n=>{Je=n.target.value||"",fe=-1,gt+=1;const r=gt;if(clearTimeout(Qo),!Je.trim()){Pe="",se=[],Jt="",Dt="",ct=[],lt=!1,f(),G("discordHistorySearchInput");return}Qo=setTimeout(()=>{yf({auto:!0,keepFocus:!0,generation:r})},bd)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(se.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;fe=((fe<0?0:fe)+i+se.length)%se.length,f(),G("discordHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=se[fe>=0?fe:0];r!=null&&r.discord_id&&ds(r.discord_id,Mi(r))})),document.querySelectorAll("[data-discord-history-id]").forEach(n=>{n.addEventListener("click",()=>{ds(n.dataset.discordHistoryId||"",n.dataset.discordHistoryName||"")})})}async function yf(t={}){const e=Number.isInteger(t.generation)?t.generation:++gt,n=Je.trim();if(e===gt){if(!n){Pe="",se=[],fe=-1,Jt="",Dt="",ct=[],lt=!1,f(),t.keepFocus&&G("discordHistorySearchInput");return}lt=!0,Pe="",se=[],fe=-1,Jt="",Dt="",ct=[],f(),t.keepFocus&&G("discordHistorySearchInput");try{const r=await R("guildsync:request-discord-member-history",{query:n},3e4);if(e!==gt||n!==Je.trim())return;if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search Discord member history.");se=kf(r.matches),fe=se.length>0?0:-1}catch(r){if(e!==gt||n!==Je.trim())return;Pe=L(r)}finally{if(e!==gt||n!==Je.trim())return;lt=!1,f(),t.keepFocus&&G("discordHistorySearchInput")}}}async function ds(t,e="",n={}){const r=String(t||"").trim();if(!!r){Jt=r,Dt=String(e||r).trim(),Je=Dt,ct=[],lt=!0,Pe="",f();try{const i=await R("guildsync:request-discord-member-history-events",{discord_id:r},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");ct=vf(i.events)}catch(i){Pe=L(i)}finally{lt=!1,n.keepLoading||f()}}}function kf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function vf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s,o,a,l,u,y,g,b;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((r=(n=e.old_value)!=null?n:e.oldValue)!=null?r:"").trim(),new_value:String((s=(i=e.new_value)!=null?i:e.newValue)!=null?s:"").trim(),event_timestamp:(l=(a=(o=e.event_timestamp)!=null?o:e.eventTimestamp)!=null?a:e.timestamp)!=null?l:"",event_datetime:(y=(u=e.event_datetime)!=null?u:e.eventDatetime)!=null?y:"",initiator:String((b=(g=e.initiator)!=null?g:e.initiatorName)!=null?b:"").trim(),source:String(e.source||"").trim()}}):[]}async function Sf(t={}){const e=In.trim();if(!e){Oe="",oe=[],ue=-1,ft="",it=[],ot=!1,f(),t.keepFocus&&G("rosterHistorySearchInput");return}ot=!0,Oe="",oe=[],ue=-1,ft="",it=[],f(),t.keepFocus&&G("rosterHistorySearchInput");try{const n=await R("guildsync:request-roster-rank-history",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search roster rank history.");oe=wf(n.matches),ue=oe.length>0?0:-1}catch(n){Oe=L(n)}finally{ot=!1,f(),t.keepFocus&&G("rosterHistorySearchInput")}}async function us(t,e={}){const n=String(t||"").trim();if(!!n){ft=n,In=n,it=[],ot=!0,Oe="",f();try{const r=await R("guildsync:request-roster-stream-history",{account_name:n},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load roster stream history.");it=_f(r.events)}catch(r){Oe=L(r)}finally{ot=!1,e.keepLoading||f()}}}function wf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function _f(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(r=(n=e.timestamp)!=null?n:e.timestampS)!=null?r:"",officer:String(e.officer||"").trim()}}):[]}function Xa(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(n=e.joined)!=null?n:"",note_count:Number((i=(r=e.note_count)!=null?r:e.noteCount)!=null?i:0)||0}}).sort((e,n)=>e.account_name.localeCompare(n.account_name)):[]}function Af(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function Gr(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function co(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function Lf(t={}){ae=Xa(t.members),Sr=t.last_refresh||new Date().toISOString(),nn(),p("roster-data-updated",`Roster data updated. Loaded ${ae.length} member record${ae.length===1?"":"s"}.`,{ttlMs:m})}async function Bt(t={}){if(!!(d!=null&&d.connected)){Ue=!0,nn();try{const e=await R("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");ae=Xa(e.members),Sr=e.last_refresh||Sr,t.silent||p("roster-data-loaded",`Loaded ${ae.length} roster member${ae.length===1?"":"s"}.`,{ttlMs:m})}catch(e){p("roster-data-error",L(e),{ttlMs:m})}finally{Ue=Boolean(t.deferPendingRefresh),nn(),t.deferPendingRefresh||zn("eso-members")}}}async function Ef(t={}){var e;if(!!D()){if(!(d!=null&&d.connected)){p("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}Ue=!0,nn();try{const n=await td(t);if(!(n!=null&&n.ok)){p("roster-data-pending",(n==null?void 0:n.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:m});return}const r={local_upload_id:Za(),authenticated_username:Se(),authenticated_discord_user_id:((e=k==null?void 0:k.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await tc(r)}catch(i){throw $f(r),i}await Bt({silent:!0,deferPendingRefresh:!0})}catch(n){p("roster-data-error",L(n),{ttlMs:m})}finally{Ue=!1,nn(),zn("eso-members")}}}function Za(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function lo(){try{const t=window.localStorage.getItem(Hs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function ec(t){window.localStorage.setItem(Hs,JSON.stringify(Array.isArray(t)?t:[]))}function $f(t){const e=String((t==null?void 0:t.local_upload_id)||Za()),n=lo().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),ec(n),p("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function Rf(t){const e=lo().filter(n=>(n==null?void 0:n.local_upload_id)!==t);ec(e)}async function Df(){if(ii||!(d!=null&&d.connected)||!D())return;const t=lo();if(t.length!==0){ii=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!D())return;await tc(e),Rf(e.local_upload_id)}}catch(e){p("roster-data-pending-error",`Pending roster upload retry failed: ${L(e)}`,{ttlMs:m})}finally{ii=!1}}}async function tc(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await R("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const n=await nd(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return p("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:m}),e}async function Mf(t={}){var e,n;if(!!D()){if(!(d!=null&&d.connected)){p("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}try{const r=await ld(t);if(!(r!=null&&r.ok)){p("applications-data-info",(r==null?void 0:r.message)||"No application records were found to process.",{ttlMs:m});return}if((Array.isArray((e=r==null?void 0:r.data)==null?void 0:e.records)?r.data.records:[]).length===0){p("applications-data-info",`No application records were found in ${r.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:m});return}const s={local_upload_id:nc(),authenticated_username:Se(),authenticated_discord_user_id:((n=k==null?void 0:k.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await ic(s)}catch(o){throw Tf(s),o}}catch(r){p("applications-data-error",L(r),{ttlMs:m})}}}function nc(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function uo(){try{const t=window.localStorage.getItem(Ws),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function rc(t){window.localStorage.setItem(Ws,JSON.stringify(Array.isArray(t)?t:[]))}function Tf(t){const e=String((t==null?void 0:t.local_upload_id)||nc()),n=uo().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),rc(n),p("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function Bf(t){const e=uo().filter(n=>(n==null?void 0:n.local_upload_id)!==t);rc(e)}async function Nf(){if(oi||!(d!=null&&d.connected)||!D())return;const t=uo();if(t.length!==0){oi=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!D())return;await ic(e),Bf(e.local_upload_id)}}catch(e){p("applications-data-pending-error",`Pending application upload retry failed: ${L(e)}`,{ttlMs:m})}finally{oi=!1}}}async function ic(t){var i;if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return p("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:m}),{ok:!0,sent_count:0,skipped_empty:!0};let n=0;for(const s of e){const o=await R("guildsync:eso-guild-application-message",{...t,record:s,recordKey:(s==null?void 0:s.recordKey)||"",message:Cf(s)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Backend rejected the application data payload. Application data was not cleared.");n+=1}const r=await dd(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return p("applications-data-sent",`Sent ${n} application record${n===1?"":"s"} to GuildSync backend.`,{ttlMs:m}),{ok:!0,sent_count:n}}function Cf(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),n=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",r=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",s=String(t.applicationText||"_No application text captured._"),o=Object.entries(t).filter(([a])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(a)).map(([a,l])=>`**${a}:** ${qf(l)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${n}** ${r} an application from **${i}**.`,"","**Application text:**","```",s.slice(0,1500),"```",o.length>0?"":null,o.length>0?"**Full captured record fields:**":null,...o].filter(a=>a!==null).join(`
`)}function qf(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function xf(t={}){await Mf(t)}function oc(){const t=Oi(F),e=hh(t,F),n=F!=="other",r=n&&yn(F);return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <button id="openBankingHistoryButton" class="refresh-discord-button banking-history-button" type="button" ${D()?"":'disabled title="Login required to lookup banking history."'}>
            <span aria-hidden="true">\u2315</span>
            <span>Lookup Banking History</span>
          </button>
          <button id="openManualBiweeklyTicketButton" class="bank-export-button" type="button" ${D()?"":'disabled title="Login required to add manual entries."'}>
            <span aria-hidden="true">\uFF0B</span>
            <span>Add Manual Entry</span>
          </button>
          ${Hf()}
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${c(Lc(Js))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${He||!D()?"disabled":""} ${D()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${He?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${ui("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${ui("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${ui("other","?","Other","All other deposits")}
        </div>

        ${Vf(F)}

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
              ${t.length>0?t.map(i=>mh(i,n,r)).join(""):gh(n,r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${c(Ht(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${F==="monthly"?`<div>Raffle Pot: <strong>${c(Ht(Math.floor(e.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${F==="biweekly"?`<div>Raffle Pot: <strong>${c(Ht(hc(e.amount)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${F==="biweekly"?`<div>Draws: <strong>${c(String(ph(e.amount)))}</strong></div>`:""}
          ${n?`<div>Purchased: <strong>${c(ye(e.purchased))}</strong></div>${r?`<div>Bonus: <strong>${c(ye(e.bonus))}</strong></div>`:""}<div>Total Tickets: <strong>${c(ye(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${Et?Ff(Oi(ke)):""}
    </div>
  `}function If(){return`
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
            <input id="bankingHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" autocomplete="off" placeholder="Start typing part of an account name..." value="${h(Mt)}" />
          </label>
          ${Of()}
        </div>

        ${Re?`<div class="discord-data-error">${c(Re)}</div>`:""}

        <div class="banking-history-results">
          <div class="roster-history-section-title">Banking History${Ee?`: ${c(Ee)}`:""}${Ee?`<span class="banking-history-count">${c(String(be.length))} record${be.length===1?"":"s"} found</span>`:""}</div>
          ${Pf()}
        </div>
      </div>
    </div>
  `}function Of(){return Mt.trim()?$e&&Q.length===0&&!Ee?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">Searching...</div></div>':Q.length===0&&!Ee?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">No matching banking names found.</div></div>':Q.length===0?"":`
    <div class="banking-history-autocomplete" role="listbox" aria-label="Banking history matches">
      ${Q.map((t,e)=>`
        <button class="banking-history-autocomplete-option${e===he?" is-selected":""}" type="button" data-banking-history-account="${h(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <small>${c(String(Number(t.record_count||t.recordCount||0)||0))} record${Number(t.record_count||t.recordCount||0)===1?"":"s"}</small>
        </button>
      `).join("")}
    </div>
  `:""}function Pf(){const t=be.some(e=>e.bonus_enabled);return Ee?$e&&be.length===0?'<div class="roster-history-muted">Loading banking history...</div>':be.length===0?'<div class="roster-history-muted">No banking history found for this account.</div>':`
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
              <td>${c(rh((i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:""))}</td>
              <td>${c(ih(e.transaction_type||e.type||""))}</td>
              <td style="text-align:right;">${c(oh((o=(s=e.deposit_amount)!=null?s:e.depositAmount)!=null?o:e.amount))} \u{1FA99}</td>
              <td style="text-align:right;">${c(fi(e.purchased_tickets))}</td>
              ${t?`<td style="text-align:right;">${e.bonus_enabled?`${c(ye(e.bonus_percent))}%`:""}</td><td style="text-align:right;">${e.bonus_enabled?c(fi(e.bonus_tickets)):""}</td>`:""}
              <td style="text-align:right;">${c(fi(e.total_tickets))}</td>
              <td class="banking-history-note-cell">${c(e.note||"")}</td>
            </tr>
          `}).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see banking history.</div>'}function Ff(t){const e=yn(ke);return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${c(De(ke))} Deposits</h3>
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
              ${t.length>0?t.map(n=>Gf(n)).join(""):Uf()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${c(dc(t))}</textarea>
      </div>
    </div>
  `}function Gf(t){const e=yn(ke);return`
    <tr data-bank-event-id="${h(t.eventId||"")}">
      <td>${c(t.displayName||"")}</td>
      <td>${c(String(go(t,ke)))}</td>
      <td>${c(String(t.purchasedTickets))}</td>
      ${e?`<td>${c(String(t.bonusPercent))}%</td><td>${c(String(t.bonusTickets))}</td>`:""}
      <td>${c(String(t.totalTickets))}</td>
      <td>${c(t.note||"")}</td>
    </tr>
  `}function Uf(){return`
    <tr>
      <td class="bank-empty-row" colspan="${yn(ke)?7:5}">No deposits to export for ${c(De(ke))}.</td>
    </tr>
  `}function Vf(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=po(t),n=Mr(t),r=n<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${h(De(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${c(De(t))} Raffle Period ${n===0?"(Current)":`(${Math.abs(n)} period${Math.abs(n)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${c(gr(e.salesStart))} through ${c(gr(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${c(gr(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${r?"":"disabled"} aria-label="Next ${h(De(t))} raffle period">\u203A</button>
    </div>
  `}function ui(t,e,n,r){const i=F===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${h(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${c(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${c(n)}</span>
        <span class="bank-section-subtitle">${c(r)}</span>
      </span>
    </button>
  `}function Hf(){if(!D())return"";const t=Ur(),e=Qn(),n=sc(),r=t+e+n;if(r<=0)return"";const i=`Desktop Client Required${r>0?` (${r})`:""}`,s="Deposit mail checkout and ESO SavedVariables writing are disabled in the web client. Use the GuildSync desktop client for this mail workflow.";return`
    <button id="checkoutDepositMailButton" class="bank-export-button deposit-mail-button deposit-mail-status-only" type="button" data-deposit-mail-action="disabled" aria-disabled="true" title="${h(s)}" aria-label="${h(`${i}. ${s}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${c(i)}</span>
      <span class="deposit-mail-web-disabled" aria-hidden="true">Web Disabled</span>
    </button>
  `}function Qn(){return Xn().reduce((t,e)=>t+kn(e.records).length,0)}function Wf(){const t=(k==null?void 0:k.user)||{};return new Set([Se(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function jf(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?Wf().has(e):!1}function sc(){return D()?ne.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="written_to_eso"&&jf(t)}).length:0}function Ur(){return ne.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="unsent"}).length}function zf(t){const e=String(t||"").trim();return ne.find(n=>String(n.eventId||"").trim()===e)||null}function fo(t){const e=String(t||"other").toLowerCase(),n=["biweekly","monthly","other"],r=n.includes(e)?e:"other",i=n.filter(s=>s!==r);return[i[0]||"biweekly",r,i[1]||"other"]}function ho(t={},e="other"){const n=String(e||"other").toLowerCase(),r=Number(t==null?void 0:t.amount)||0;return n===String((t==null?void 0:t.type)||"").toLowerCase()?Number(t==null?void 0:t.ticketAmount)||0:n==="biweekly"?Math.floor(r/500):n==="monthly"?Math.floor(r/2500):0}function ac(t={},e="other",n=""){const r=String(t.type||"other").toLowerCase(),i=De(r),s=De(e),o=Se()||"Unknown user",a=[`Moved from ${i} to ${s} by ${o}.`,`Ref ${t.eventId||""}`],l=String(n||"").trim();return l&&a.push(`Reason: ${l}`),a.join(`
`)}function cc(t){const e=zf(t);if(!e){p("banking-move-missing","Could not find the selected banking entry.",{ttlMs:m});return}const n=String(e.type||"other").toLowerCase();qe=e,j={targetType:n,note:"",tickets:String(ho(e,n))},Ce="",Zt=!1,mn=!0,f()}function Dr(){mn=!1,Zt=!1,Ce="",qe=null,j={targetType:"other",note:"",tickets:""},f()}function Yf(){const t=qe||{},e=String(t.type||"other").toLowerCase(),n=De(e),r=fo(e);let i=String(j.targetType||r[0]||"other").toLowerCase();r.includes(i)||(i=r[0]||"other",j.targetType=i);const s=ac(t,i,j.note);return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="bankingMoveDialogTitle">
      <div class="roster-history-dialog manual-ticket-dialog banking-move-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="bankingMoveDialogTitle">Move Banking Entry</h3>
            <p>Move this deposit to a different banking section while preserving a reference to the original event.</p>
          </div>
          <button id="closeBankingMoveDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${Ce?`<div class="discord-data-error">${c(Ce)}</div>`:""}

        <div class="manual-ticket-form banking-move-form">
          <div class="banking-move-current-entry">
            <div><strong>Current Type:</strong> ${c(n)}</div>
            <div><strong>Event ID:</strong> ${c(t.eventId||"")}</div>
            <div><strong>Depositor:</strong> ${c(t.displayName||"")}</div>
            <div><strong>Amount:</strong> ${c(Ht(t.amount))} \u{1FA99}</div>
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
                    <strong>${c(De(o))}</strong>
                    <span>${o===e?"Current / restore original values":`${c(String(ho(t,o)))} tickets`}</span>
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
            <button id="saveBankingMoveButton" class="refresh-discord-button banking-move-submit-button" type="button" ${Zt||i===e?"disabled":""}>${Zt?"MOVING...":i===e?"SELECT A SIDE TO MOVE":"MOVE"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Kf(){var n,r,i,s;if(!mn)return;(n=document.querySelector("#closeBankingMoveDialogButton"))==null||n.addEventListener("click",()=>Dr());function t(o){const a=String(o||"other").toLowerCase(),l=String((qe==null?void 0:qe.type)||"other").toLowerCase(),u=fo(l);j.targetType=u.includes(a)?a:l,j.tickets=String(ho(qe||{},j.targetType)),f()}document.querySelectorAll("[data-banking-move-target]").forEach(o=>{o.addEventListener("click",()=>t(o.dataset.bankingMoveTarget))}),(r=document.querySelector("#bankingMoveTicketsInput"))==null||r.addEventListener("input",o=>{const a=String(o.target.value||"").replace(/\D/g,"");o.target.value!==a&&(o.target.value=a),j.tickets=a}),(i=document.querySelector("#bankingMoveNoteInput"))==null||i.addEventListener("input",o=>{j.note=o.target.value||"";const a=document.querySelector(".banking-move-generated-note");a&&(a.innerText=ac(qe||{},j.targetType||"other",j.note))}),(s=document.querySelector("#saveBankingMoveButton"))==null||s.addEventListener("click",()=>Jf());const e=document.querySelector(".roster-history-overlay");e&&e.addEventListener("click",o=>{o.target===e&&Dr()})}async function Jf(){const t=qe;if(!(t!=null&&t.eventId)){Ce="No banking entry is selected.",f();return}const e=String(t.type||"other").toLowerCase(),n=fo(e),r=String(j.targetType||n[0]||"other").toLowerCase();if(!n.includes(r)||r===e){Ce="Select one of the side destinations before moving this entry.",f();return}const i=r==="other"?0:Math.floor(Number(String(j.tickets||"").trim()||0));if(!Number.isFinite(i)||i<0){Ce="Tickets must be zero or greater.",f();return}Zt=!0,Ce="",f();try{const s=await R("guildsync:move-banking-entry",{event_id:t.eventId,target_type:r,tickets:i,note:j.note||""},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to move banking entry.");Dr(),await le({silent:!0}),p("banking-entry-moved",s.message||"Banking entry moved.",{ttlMs:m})}catch(s){Zt=!1,Ce=L(s),f()}}function Qf(){if(!D()){p("banking-history-login-required","Login required to lookup banking history.",{ttlMs:m});return}gn=!0,Mt="",Q=[],be=[],Ee="",$e=!1,Re="",he=-1,clearTimeout(Ut),f(),G("bankingHistorySearchInput")}function Xf(){gn=!1,$e=!1,Re="",clearTimeout(Ut)}function Zf(){if(!gn)return;const t=document.querySelector("#bankingHistorySearchInput");t&&(t.addEventListener("input",e=>{if(Mt=e.target.value||"",he=-1,Ee="",be=[],!Mt.trim()){clearTimeout(Ut),Re="",Q=[],$e=!1,f(),G("bankingHistorySearchInput");return}clearTimeout(Ut),Ut=setTimeout(()=>{eh({keepFocus:!0})},250)}),t.addEventListener("keydown",e=>{if(e.key==="ArrowDown"||e.key==="ArrowUp"){if(Q.length===0)return;e.preventDefault();const r=e.key==="ArrowDown"?1:-1;he=((he<0?0:he)+r+Q.length)%Q.length,f(),G("bankingHistorySearchInput");return}if(e.key!=="Enter")return;e.preventDefault();const n=Q[he>=0?he:0];n!=null&&n.account_name&&fs(n.account_name)})),document.querySelectorAll("[data-banking-history-account]").forEach(e=>{e.addEventListener("click",()=>{fs(e.dataset.bankingHistoryAccount||"")})})}async function eh(t={}){const e=Mt.trim();if(!e){Re="",Q=[],he=-1,Ee="",be=[],$e=!1,f(),t.keepFocus&&G("bankingHistorySearchInput");return}$e=!0,Re="",Q=[],he=-1,f(),t.keepFocus&&G("bankingHistorySearchInput");try{const n=await R("guildsync:request-banking-history-matches",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search banking history.");Q=th(n.matches),he=Q.length>0?0:-1}catch(n){Re=L(n)}finally{$e=!1,f(),t.keepFocus&&G("bankingHistorySearchInput")}}async function fs(t){const e=String(t||"").trim();if(!!e){clearTimeout(Ut),Ee=e,Mt=e,Q=[],be=[],$e=!0,Re="",f();try{const n=await R("guildsync:request-banking-history-records",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load banking history.");be=nh(n.records)}catch(n){Re=L(n)}finally{$e=!1,f()}}}function th(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s;return{account_name:String(e.account_name||e.accountName||"").trim(),record_count:Number((r=(n=e.record_count)!=null?n:e.recordCount)!=null?r:0)||0,last_event_timestamp:(s=(i=e.last_event_timestamp)!=null?i:e.lastEventTimestamp)!=null?s:""}}).filter(e=>e.account_name):[]}function nh(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s,o,a,l,u,y,g,b,w,S,_,B,v,O,V,Z;return{event_id:String(e.event_id||e.eventId||"").trim(),transaction_type:String(e.transaction_type||e.transactionType||e.type||"").trim(),event_timestamp:(i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:"",deposit_amount:(a=(o=(s=e.deposit_amount)!=null?s:e.depositAmount)!=null?o:e.amount)!=null?a:"",ticket_quantity:(y=(u=(l=e.ticket_quantity)!=null?l:e.ticketQuantity)!=null?u:e.ticketAmount)!=null?y:"",purchased_tickets:(S=(w=(b=(g=e.purchasedTickets)!=null?g:e.ticket_quantity)!=null?b:e.ticketQuantity)!=null?w:e.ticketAmount)!=null?S:0,bonus_tickets:(_=e.bonusTickets)!=null?_:0,bonus_percent:(B=e.bonusPercent)!=null?B:0,bonus_enabled:e.bonusEnabled===!0,total_tickets:(Z=(V=(O=(v=e.totalTickets)!=null?v:e.ticket_quantity)!=null?O:e.ticketQuantity)!=null?V:e.ticketAmount)!=null?Z:0,note:String(e.note||"").trim()}}).sort((e,n)=>{const r=Number(e.event_timestamp)||0,i=Number(n.event_timestamp)||0;return r!==i?r-i:String(e.event_id).localeCompare(String(n.event_id),void 0,{numeric:!0})}):[]}function rh(t){const e=Number(t);if(!e)return"";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t);const r=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0"),s=String(n.getFullYear()),o=String(n.getHours()).padStart(2,"0"),a=String(n.getMinutes()).padStart(2,"0"),l=String(n.getSeconds()).padStart(2,"0");return`${r}/${i}/${s} ${o}:${a}:${l}`}function ih(t){const e=String(t||"").trim().toLowerCase();return e==="monthly"?"50/50":e==="biweekly"?"Bi-Weekly":e==="other"?"Other":e?e.replace(/\b\w/g,n=>n.toUpperCase()):""}function oh(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":Ht(e)}function fi(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":ye(e)}function lc(){if(I!=="more")return;Kf(),Zf(),document.querySelectorAll("[data-bank-entry-move]").forEach(a=>{a.addEventListener("click",()=>cc(a.dataset.bankEntryMove||""))}),document.querySelectorAll("[data-bank-section]").forEach(a=>{a.addEventListener("click",()=>{F=a.dataset.bankSection||"biweekly",f()})}),document.querySelectorAll("[data-bank-export-section]").forEach(a=>{a.addEventListener("click",()=>{ke=(a.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",Et=!0,f()})}),document.querySelectorAll("[data-bank-period-move]").forEach(a=>{a.addEventListener("click",()=>{ch(a.dataset.bankPeriodMove||""),f()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{Et=!1,f()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>sh());const n=document.querySelector(".bank-export-overlay");n&&n.addEventListener("click",a=>{a.target===n&&(Et=!1,f())});const r=document.querySelector("#openBankingHistoryButton");r&&r.addEventListener("click",()=>Qf());const i=document.querySelector("#openManualBiweeklyTicketButton");i&&i.addEventListener("click",async()=>{if(!D()){p("manual-ticket-login-required","Login required to add manual entries.",{ttlMs:m});return}Ge=!0,re="",bn=x.accountName||"",me=!1,J=-1,ae.length===0&&(d==null?void 0:d.connected)&&D()&&await Bt({silent:!0}),f()});const s=document.querySelector("#checkoutDepositMailButton");s&&s.addEventListener("click",()=>{s.dataset.depositMailAction==="checkout"&&s.getAttribute("aria-disabled")!=="true"&&kc()});const o=document.querySelector("#refreshBankingDataButton");o&&o.addEventListener("click",()=>{if(!D()){p("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:m});return}gc({key:"banking"})})}function dc(t){const e=yn(ke),n=[["Guildie Name","Deposit Amount","Purchased Tickets",...e?["Bonus %","Bonus Tickets"]:[],"Total Tickets","Note"]];for(const r of t)n.push([r.displayName||"",String(go(r,ke)),String(r.purchasedTickets),...e?[`${r.bonusPercent}%`,String(r.bonusTickets)]:[],String(r.totalTickets),r.note||""]);return n.map(r=>r.map(Vr).join("	")).join(`
`)}function Vr(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function Hr(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly","readonly"),n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.width="1px",n.style.height="1px",n.style.opacity="0",n.style.pointerEvents="none",n.style.zIndex="-1",document.body.appendChild(n),n.focus(),n.select(),n.setSelectionRange(0,n.value.length);let r=!1;try{r=document.execCommand("copy")}finally{document.body.removeChild(n)}return r}async function sh(){const t=Oi(ke),e=dc(t);if(await Hr(e)){p("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:m});return}const r=document.querySelector("#bankingExportTsv");r&&(r.focus(),r.select()),p("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:m})}function Oi(t){return ne.filter(e=>e.type===t).filter(e=>ah(t,e)).sort((e,n)=>(Number(e.time)||0)-(Number(n.time)||0))}function ah(t,e){if(t==="other")return!0;const n=Number(e==null?void 0:e.time)||0;if(n<=0)return!1;const r=po(t);return n>=r.salesStart&&n<=r.salesEnd}function Mr(t){return Number($i[t])||0}function ch(t){if(F!=="biweekly"&&F!=="monthly")return;const e=Mr(F);if(t==="previous"){$i[F]=e-1;return}t==="next"&&e<0&&($i[F]=e+1)}function po(t){const e=Math.floor(Date.now()/1e3);if(t==="monthly"){const i=lh(e,Mr(t));return{salesStart:fc(i)+1,salesEnd:i,raffleTime:i+Lr}}const n=ht;let r=uc(e);return r+=Mr(t)*n,{salesStart:r-n+1,salesEnd:r,raffleTime:r+Lr}}function uc(t){const e=ht;let n=yd;for(;n-e>t;)n-=e;for(;n<t;)n+=e;return n}function lh(t,e=0){let n=dh(t),r=Number(e)||0;for(;r<0;)n=fc(n),r+=1;for(;r>0;)n=uh(n),r-=1;return n}function dh(t){let e=uc(t);for(;!mo(e);)e+=ht;return e}function fc(t){let e=t-ht;for(;!mo(e);)e-=ht;return e}function uh(t){let e=t+ht;for(;!mo(e);)e+=ht;return e}function mo(t){const e=t+Lr,n=t+ht+Lr;return hs(e)!==hs(n)}function hs(t){var s,o;const e=new Date(Number(t||0)*1e3);if(Number.isNaN(e.getTime()))return"";const n=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit"}).formatToParts(e),r=((s=n.find(a=>a.type==="year"))==null?void 0:s.value)||"",i=((o=n.find(a=>a.type==="month"))==null?void 0:o.value)||"";return`${r}-${i}`}function fh(t=F){const e=String(t||"").toLowerCase();return e!=="monthly"&&e!=="biweekly"?0:"auto"}function go(t={},e=F){const n=Number(t.amount)||0;if(!fh(e))return n;const r=Math.abs(Math.trunc(n))%10,i=r===1||r===3?r:0;return i>0&&n>i?n-i:n}function hh(t,e=F){return t.reduce((n,r)=>(n.amount+=go(r,e),n.purchased+=Number(r.purchasedTickets)||0,n.bonus+=Number(r.bonusTickets)||0,n.tickets+=Number(r.totalTickets)||0,n),{amount:0,purchased:0,bonus:0,tickets:0})}function hc(t){const e=Math.ceil((Number(t)||0)/2);return e<=0?0:Math.ceil(e/2e5)*2e5}function ph(t){const e=hc(t);return e>0?e/2e5:0}function yn(t){var n;if(t!=="biweekly"&&t!=="monthly")return!1;const{salesEnd:e}=po(t);return((n=Xt.find(r=>r.type===t&&r.salesEnd===e))==null?void 0:n.enabled)===!0}function mh(t,e=!0,n=yn(F)){return`
    <tr data-bank-event-id="${h(t.eventId||"")}">
      <td>${c(t.note||t.eventId||"")}</td>
      <td>${c(gr(t.time))}</td>
      <td>${c(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${c(Ht(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td>${c(ye(t.purchasedTickets))}</td>${n?`<td>${c(ye(t.bonusPercent))}%</td><td>${c(ye(t.bonusTickets))}</td>`:""}<td><strong class="bank-ticket-amount">${c(ye(t.totalTickets))}</strong></td>`:""}
      <td><button class="bank-entry-move-button" type="button" data-bank-entry-move="${h(t.eventId||"")}">Move</button></td>
    </tr>
  `}function gh(t=!0,e=!1){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?e?"9":"7":"5"}">No ${c(De(F))} deposits found for this ${F==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function De(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function gr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Ht(t){return(Number(t)||0).toLocaleString()}function ye(t){return(Number(t)||0).toLocaleString()}function kn(t){return Array.isArray(t)?t.map(e=>{var r,i,s,o,a,l,u,y,g,b,w,S,_,B,v,O,V,Z,Nt,Zn,ze,vn,mt,Zr,A,M,$,H,N,P,we,er,Eo,$o,Ro,Do,Mo,To,Bo,No,Co,qo,xo,Io,Oo,Po,Fo;const n=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:n==="monthly"||n==="biweekly"||n==="other"?n:"other",eventId:String((i=(r=e==null?void 0:e.eventId)!=null?r:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((o=(s=e==null?void 0:e.time)!=null?s:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((l=(a=e==null?void 0:e.displayName)!=null?a:e==null?void 0:e.display_name)!=null?l:"").trim(),amount:Number((u=e==null?void 0:e.amount)!=null?u:0)||0,ticketAmount:Number((g=(y=e==null?void 0:e.ticketAmount)!=null?y:e==null?void 0:e.ticket_amount)!=null?g:0)||0,purchasedTickets:Number((w=(b=e==null?void 0:e.purchasedTickets)!=null?b:e==null?void 0:e.ticketAmount)!=null?w:0)||0,bonusTickets:Number((S=e==null?void 0:e.bonusTickets)!=null?S:0)||0,bonusPercent:Number((_=e==null?void 0:e.bonusPercent)!=null?_:0)||0,bonusEnabled:(e==null?void 0:e.bonusEnabled)===!0,totalTickets:Number((v=(B=e==null?void 0:e.totalTickets)!=null?B:e==null?void 0:e.ticketAmount)!=null?v:0)||0,note:String((O=e==null?void 0:e.note)!=null?O:"").trim(),dataSource:String((Z=(V=e==null?void 0:e.dataSource)!=null?V:e==null?void 0:e.data_source)!=null?Z:"").trim(),emailRequested:Boolean((Nt=e==null?void 0:e.emailRequested)!=null?Nt:e==null?void 0:e.email_requested),mailStatus:String((ze=(Zn=e==null?void 0:e.mailStatus)!=null?Zn:e==null?void 0:e.mail_status)!=null?ze:"").trim(),mailRequestId:String((mt=(vn=e==null?void 0:e.mailRequestId)!=null?vn:e==null?void 0:e.mail_request_id)!=null?mt:"").trim(),mailBatchId:String((A=(Zr=e==null?void 0:e.mailBatchId)!=null?Zr:e==null?void 0:e.mail_batch_id)!=null?A:"").trim(),checkedOutBy:String(($=(M=e==null?void 0:e.checkedOutBy)!=null?M:e==null?void 0:e.checked_out_by)!=null?$:"").trim(),checkedOutAt:String((N=(H=e==null?void 0:e.checkedOutAt)!=null?H:e==null?void 0:e.checked_out_at)!=null?N:"").trim(),checkoutExpiresAt:String((we=(P=e==null?void 0:e.checkoutExpiresAt)!=null?P:e==null?void 0:e.checkout_expires_at)!=null?we:"").trim(),writtenToEsoAt:String((Eo=(er=e==null?void 0:e.writtenToEsoAt)!=null?er:e==null?void 0:e.written_to_eso_at)!=null?Eo:"").trim(),sentAt:String((Ro=($o=e==null?void 0:e.sentAt)!=null?$o:e==null?void 0:e.sent_at)!=null?Ro:"").trim(),failedReason:String((Mo=(Do=e==null?void 0:e.failedReason)!=null?Do:e==null?void 0:e.failed_reason)!=null?Mo:"").trim(),recipient:String((Co=(No=(Bo=(To=e==null?void 0:e.recipient)!=null?To:e==null?void 0:e.account_name)!=null?Bo:e==null?void 0:e.displayName)!=null?No:e==null?void 0:e.display_name)!=null?Co:"").trim(),subject:String((Io=(xo=(qo=e==null?void 0:e.subject)!=null?qo:e==null?void 0:e.mailSubject)!=null?xo:e==null?void 0:e.mail_subject)!=null?Io:"").trim(),body:String((Fo=(Po=(Oo=e==null?void 0:e.body)!=null?Oo:e==null?void 0:e.mailBody)!=null?Po:e==null?void 0:e.mail_body)!=null?Fo:"").trim()}}):[]}function bh(t){const e=new Map;for(const n of ne)n.eventId&&e.set(n.eventId,n);for(const n of t)!n.eventId||e.set(n.eventId,n);ne=Array.from(e.values()).sort((n,r)=>(Number(r.time)||0)-(Number(n.time)||0))}function yh(t){t.querySelectorAll("[data-open-member-link-dialog]").forEach(e=>{e.addEventListener("click",()=>so(e.dataset.openMemberLinkDialog||"",e.dataset.memberLinkValue||""))}),t.querySelectorAll("[data-open-roster-notes]").forEach(e=>{e.addEventListener("click",()=>Ka(e.dataset.openRosterNotes||""))}),t.querySelectorAll("[data-bank-entry-move]").forEach(e=>{e.addEventListener("click",()=>cc(e.dataset.bankEntryMove||""))})}function bo(t,e,n=!1,r=!1){const i=document.querySelector(t);if(!i)return;const s=eo(i),o=document.activeElement,a=o&&"selectionStart"in o?[o.selectionStart,o.selectionEnd]:null,l=document.createElement("template");l.innerHTML=e;const u=l.content.firstElementChild,y=n?".bank-deposit-table":r?".eso-roster-table":".discord-member-table";Go(i.querySelector(`${y} tbody`),u.querySelector(`${y} tbody`),n?"data-bank-event-id":r?"data-eso-account-name":"data-discord-user-id",yh),Rn(i.querySelector(`${y} thead`),u.querySelector(`${y} thead`)),Dn(i.querySelector(".discord-data-actions .discord-last-refresh"),u.querySelector(".discord-data-actions .discord-last-refresh"));const g=n?"#refreshBankingDataButton":r?"#refreshRosterDataButton":"#refreshDiscordDataButton",b=i.querySelector(g),w=u.querySelector(g);if(b&&w&&(b.disabled=w.disabled,Dn(b.lastElementChild,w.lastElementChild)),n){Rn(i.querySelector(".bank-deposits-summary-row"),u.querySelector(".bank-deposits-summary-row")),Rn(i.querySelector(".bank-raffle-period-content"),u.querySelector(".bank-raffle-period-content"));const S=i.querySelector("#checkoutDepositMailButton"),_=u.querySelector("#checkoutDepositMailButton");if(!_)S==null||S.remove();else if(!S||!S.isEqualNode(_)){const Z=_.cloneNode(!0);Z.addEventListener("click",()=>{Z.dataset.depositMailAction==="checkout"&&Z.getAttribute("aria-disabled")!=="true"&&kc()}),S?S.replaceWith(Z):i.querySelector(".discord-data-actions").insertBefore(Z,i.querySelector("[data-bank-export-section]"))}Go(i.querySelector("#bankingExportGrid tbody"),u.querySelector("#bankingExportGrid tbody"),"data-bank-event-id"),Rn(i.querySelector("#bankingExportGrid thead"),u.querySelector("#bankingExportGrid thead")),Dn(i.querySelector(".bank-export-count"),u.querySelector(".bank-export-count"));const B=i.querySelector("#copyBankingExportGridButton"),v=u.querySelector("#copyBankingExportGridButton");B&&v&&(B.disabled=v.disabled);const O=i.querySelector("#bankingExportTsv"),V=u.querySelector("#bankingExportTsv");O&&V&&O.value!==V.value&&(O.value=V.value)}else{Dn(i.querySelector(".discord-results-count"),u.querySelector(".discord-results-count"));const S=r?"#rosterRankFilter":"#discordRoleFilter",_=i.querySelector(S),B=u.querySelector(S);if(_&&B&&_.innerHTML!==B.innerHTML){const v=_.value;_.innerHTML=B.innerHTML,_.value=v}}(o==null?void 0:o.isConnected)&&document.activeElement!==o&&(o.focus({preventScroll:!0}),a&&a[0]!==null&&o.setSelectionRange(...a)),s()}function nn(){I==="eso-members"&&document.querySelector(".eso-roster-panel")&&bo(".eso-roster-panel",oa(),!1,!0)}function br(){je||We||pt?f():I==="discord-members"?rn():I==="eso-members"&&nn()}function rn(){I==="discord-members"&&document.querySelector(".discord-member-panel")&&bo(".discord-member-panel",ia())}function pc(t){const e=Xt.find(n=>`${n.type}:${n.salesEnd}`===Fe);if(t.bonusSettings&&(K=t.bonusSettings),Array.isArray(t.bonusRaffles)){const n=[...t.bonusRaffles];e&&!n.some(r=>`${r.type}:${r.salesEnd}`===Fe)&&n.push(e),Xt=n}}function kh(){if(I!=="settings"||!K)return;const t=document.querySelector(".raffle-bonus-card");if(!t)return;const e=eo(t.parentElement),n=document.createElement("template");n.innerHTML=ha();const r=n.content.firstElementChild;if(t.querySelector("#raffleBonusSettingsForm")){const i=t.querySelector("#bonusRafflePicker"),s=r.querySelector("#bonusRafflePicker");if(i&&s&&i.innerHTML!==s.innerHTML){const o=i.value;i.innerHTML=s.innerHTML,i.value=o}if(!pe&&(Ae==null?void 0:Ae.raffle)!==Fe){Dn(t.querySelector("[data-bonus-settings-source]"),r.querySelector("[data-bonus-settings-source]"));const o=t.querySelectorAll(".raffle-bonus-tiers"),a=r.querySelectorAll(".raffle-bonus-tiers");o.forEach((l,u)=>{const y=a[u];!y||(l.querySelectorAll("input").length!==y.querySelectorAll("input").length?Rn(l,y):y.querySelectorAll("input").forEach(g=>{const b=Array.from(l.querySelectorAll("input")).find(w=>w.name===g.name);!b||(b.type==="checkbox"?b.checked!==g.checked&&(b.checked=g.checked):b.value!==g.value&&(b.value=g.value))}))})}}else{const i=r.cloneNode(!0);t.replaceWith(i),fa(i),ws(Ks,{refresh:!0,root:i})}e()}function ce(){kh(),I==="more"&&document.querySelector(".bank-deposits-panel")&&bo(".bank-deposits-panel",oc(),!0)}function mc(){Js=new Date().toISOString()}async function vh(t={}){!(t!=null&&t.ok)||(ne=kn(t.entries),pc(t),mc(),ce(),p("banking-data-updated",`Banking data updated. Loaded ${ne.length} deposit record${ne.length===1?"":"s"}.`,{ttlMs:m}))}async function le(t={}){const e=Boolean(t.silent),n=Boolean(t.background);if(!(d!=null&&d.connected)){e||p("banking-data-error","GuildSync websocket is not connected.",{ttlMs:m});return}n||(He=!0,ce());try{const r=await R("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");ne=kn(r.entries),pc(r),mc(),e||p("banking-data",`Loaded ${ne.length} banking deposit record${ne.length===1?"":"s"}.`,{ttlMs:m})}catch(r){e||p("banking-data-error",L(r),{ttlMs:m})}finally{n||(He=Boolean(t.deferPendingRefresh)),ce(),t.deferPendingRefresh||zn("more")}}async function ps(){!(d!=null&&d.connected)||!D()||He||(await le({silent:!0,background:!0}),Ur()<=0&&Qn()>0&&(Ne.running?ce():Eh("availability-refresh")))}function Sh(){xt&&clearInterval(xt),ps(),xt=window.setInterval(ps,pd)}function wh(){xt&&(clearInterval(xt),xt=null)}async function _h(t={}){if(!!D()){if(!(d!=null&&d.connected)){p("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:m});return}try{const e=await sd(t);if(!(e!=null&&e.ok))return;const n=Array.isArray(e.ackEntries)?e.ackEntries:[];if(n.length===0)return;const r=await R("guildsync:mark-deposit-mail-sent",{mail_ack:n,mail_request_ids:n.map(o=>(o==null?void 0:o.mail_request_id)||(o==null?void 0:o.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(r.mail_request_ids)?r.mail_request_ids:Array.isArray(r.mailRequestIds)?r.mailRequestIds:[];if(i.length===0){p("deposit-mail-ack-none",r.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:m});return}const s=await ad(i);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");p("deposit-mail-ack-sent",s.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:m}),await le({silent:!0})}catch(e){p("deposit-mail-ack-error",L(e),{ttlMs:m})}}}async function Ah(){if(!si){si=!0;try{const t=await cd();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&p("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:m})}catch(t){p("deposit-mail-ack-cleanup-error",L(t),{ttlMs:m})}finally{si=!1}}}async function gc(t={}){var e,n;if(!!D()){if(!(d!=null&&d.connected)){p("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}He=!0,ce();try{const r=await Zl(t);if(!(r!=null&&r.ok)){p("banking-data-pending",(r==null?void 0:r.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:m});return}const i=kn((e=r==null?void 0:r.data)==null?void 0:e.entries);bh(i);const s=new Date().toISOString(),o={local_upload_id:vc(),authenticated_username:Se(),authenticated_discord_user_id:((n=k==null?void 0:k.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:s,data:r.data||{}};try{await wc(o)}catch(a){throw Dh(o),a}await le({silent:!0,deferPendingRefresh:!0})}catch(r){p("banking-data-error",L(r),{ttlMs:m})}finally{He=!1,ce(),zn("more")}}}function bc(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Xn(){try{const t=window.localStorage.getItem(Vs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function yc(t){window.localStorage.setItem(Vs,JSON.stringify(Array.isArray(t)?t:[]))}function Lh(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||bc()),n=Xn().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);n.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),yc(n)}function ms(t){const e=String(t||"").trim();if(!e)return;const n=Xn().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);yc(n)}async function kc(){if(!D()){p("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:m});return}if(!(d!=null&&d.connected)){p("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:m});return}const t=Xn(),e=Ur();if(t.length>0&&e<=0){await on();return}ce();try{const n=await R("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail checkout request.");const r=kn(n.records);if(r.length===0){p("deposit-mail-none",n.message||"No unsent deposit mail is available.",{ttlMs:m}),await le({silent:!0});return}const i={mail_batch_id:n.mail_batch_id||n.mailBatchId||bc(),checked_out_by:n.checked_out_by||n.checkedOutBy||Se(),checked_out_at:new Date().toISOString(),records:r};Lh(i),await on()}catch(n){p("deposit-mail-error",L(n),{ttlMs:m})}finally{ce()}}function Eh(t=""){It||hr||!D()||Qn()<=0||Ne.running||(It=window.setTimeout(()=>{It=null,on()},100))}async function on(){if(It&&(window.clearTimeout(It),It=null),hr||!D())return;const t=Xn();if(t.length!==0){if(await Pi({silent:!0}),Ne.running){p("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:m}),ce();return}hr=!0,ce();try{for(const e of t){const n=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),r=kn(e==null?void 0:e.records);if(r.length===0){ms(n);continue}const i=await od(r);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(d!=null&&d.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const s=await R("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:n,event_ids:i.eventIds||r.map(o=>o.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend did not confirm deposit mail was marked written_to_eso.");ms(n),p("deposit-mail-written",i.message||`Wrote ${r.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:m})}await le({silent:!0})}catch(e){p("deposit-mail-write-error",L(e),{ttlMs:m})}finally{hr=!1,ce()}}}async function Pi(t={}){try{const e=Boolean(Ne.running),n=await id();Ne={running:Boolean(n==null?void 0:n.running),message:String((n==null?void 0:n.message)||"")},Ne.running||await Ah(),e&&!Ne.running&&(p("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:m}),await on()),e!==Ne.running&&ce()}catch(e){t.silent||p("eso-status-error",L(e),{ttlMs:m})}}function $h(){qt&&clearInterval(qt),Pi({silent:!0}).then(()=>{!Ne.running&&Qn()>0&&on()}),qt=window.setInterval(()=>Pi({silent:!0}),hd)}function Rh(){qt&&(clearInterval(qt),qt=null)}function vc(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function yo(){try{const t=window.localStorage.getItem(Us),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Sc(t){window.localStorage.setItem(Us,JSON.stringify(Array.isArray(t)?t:[]))}function Dh(t){const e=String((t==null?void 0:t.local_upload_id)||vc()),n=yo().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Sc(n),p("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function Mh(t){const e=yo().filter(n=>(n==null?void 0:n.local_upload_id)!==t);Sc(e)}async function Th(){if(ri||!(d!=null&&d.connected)||!D())return;const t=yo();if(t.length!==0){ri=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!D())return;await wc(e),Mh(e.local_upload_id)}}catch(e){p("banking-data-pending-error",`Pending banking upload retry failed: ${L(e)}`,{ttlMs:m})}finally{ri=!1}}}async function wc(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await R("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const n=await ed(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return p("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:m}),e}function _c(){if(I!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>Bh());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{Kt=!0,Pe="",f(),G("discordHistorySearchInput")});const n=document.querySelector("#discordMemberSearch");n&&n.addEventListener("input",o=>{vr=o.target.value||"",wi=o.target.selectionStart,_i=o.target.selectionEnd,f({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Ih(o.dataset.discordSortColumn||"username")})});const r=document.querySelector("#discordRoleFilter");r&&r.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(Ot.add(a),f())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRoleFilter||"";Ot.delete(a),f()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(Pt.add(a),f())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeDiscordLinkStatusFilter||"";Pt.delete(a),f()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>so(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{vr="",Ot.clear(),Pt.clear(),f()})}async function Bh(){var t,e;if(!(d!=null&&d.connected)){p("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:m});return}kr=!0,rn(),p("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const n=await R("guildsync:request-discord-data-refresh",{requested_by:((t=k==null?void 0:k.user)==null?void 0:t.display_name)||((e=k==null?void 0:k.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to request Discord data refresh.");p("discord-refresh-requested",n.message||"Discord data refresh completed.",{ttlMs:m}),await Wr({silent:!0})}catch(n){p("discord-refresh-error",L(n),{ttlMs:m})}finally{kr=!1,rn()}}async function Nh(){if(!(d!=null&&d.connected))return;const t=await R("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(Ir=t.value||null)}async function Ch(t={}){if(!!(t!=null&&t.ok)){te=ko(t.members),xr=vo(t.roles),t.last_refresh&&(Ir=t.last_refresh);try{await Nh()}catch{}I==="discord-members"&&rn(),p("discord-data-updated",`Discord data updated. Loaded ${te.length} member record${te.length===1?"":"s"}.`,{ttlMs:m})}}async function Wr(t={}){const e=Boolean(t.silent);if(!(d!=null&&d.connected)){p("discord-data-error","GuildSync websocket is not connected.",{ttlMs:m});return}jt=!0,rn();try{const[n,r]=await Promise.all([R("guildsync:request-discord-data-date",{}),R("guildsync:request-discord-member-dataJSON",{})]);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord refresh date.");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord member data.");Ir=n.value||null,te=ko(r.members),xr=vo(r.roles),e||p("discord-data",`Loaded ${te.length} Discord member record${te.length===1?"":"s"}.`,{ttlMs:m})}catch(n){p("discord-data-error",L(n),{ttlMs:m})}finally{jt=!1,rn(),zn("discord-members")}}function R(t,e={},n=3e4){return new Promise((r,i)=>{if(!(d!=null&&d.connected)){i(new Error("GuildSync websocket is not connected."));return}let s=!1;const o=window.setTimeout(()=>{s||(s=!0,i(new Error(`${t} timed out.`)))},n);d.emit(t,e,a=>{s||(s=!0,window.clearTimeout(o),r(a))})})}function ko(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(Ac).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,n)=>Fn(e).localeCompare(Fn(n),void 0,{sensitivity:"base"})):[]}function vo(t){if(!Array.isArray(t))return[];const e=new Map;for(const n of t){const r=Ac(n);if(!r)continue;const i=r.role_id||Nn(r.role_name);i&&!e.has(i)&&e.set(i,r)}return Array.from(e.values()).sort((n,r)=>String(n.role_name||"").localeCompare(String(r.role_name||""),void 0,{sensitivity:"base"}))}function Ac(t){var i,s;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),n=String(t.role_name||t.name||"Unnamed Role").trim(),r=(s=(i=t.role_color)!=null?i:t.color)!=null?s:null;return{role_id:e,role_name:n||"Unnamed Role",role_color:r}}function qh(){const t=vr.trim().toLowerCase(),e=Array.from(Ot),n=te.filter(r=>{if(t&&![r.username,r.global_name,r.server_nickname,r.discord_id,...r.roles.map(s=>s.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(r.roles.map(s=>s.role_name));if(!e.every(s=>i.has(s)))return!1}return!!la(Pt,zd(r))});return xh(n)}function xh(t){const e=kt==="desc"?-1:1;return[...t].sort((n,r)=>{const i=gs(n,xn),s=gs(r,xn),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:Fn(n).localeCompare(Fn(r),void 0,{sensitivity:"base",numeric:!0})})}function gs(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(n=>n.role_name||"").filter(Boolean).sort((n,r)=>n.localeCompare(r,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function Ih(t){const n=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";xn===n?kt=kt==="asc"?"desc":"asc":(xn=n,kt="asc"),f()}function ir(t,e){const n=xn===t,r=kt==="asc"?"ascending":"descending",i=n?kt==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${n?r:"none"}">
      <button
        class="discord-sort-header${n?" active":""}"
        type="button"
        data-discord-sort-column="${h(t)}"
        title="Sort ${h(e)} ${n&&kt==="asc"?"descending":"ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function Oh(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(wi)?wi:t.value.length,n=Number.isInteger(_i)?_i:e;t.setSelectionRange(e,n)}}function Ph(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(Li)?Li:t.value.length,n=Number.isInteger(Ei)?Ei:e;t.setSelectionRange(e,n)}}function Fh(){const t=new Set;for(const e of te)for(const n of e.roles)n.role_name&&t.add(n.role_name);return Array.from(t).sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function Gh(t){const e=zh(t),n=Fn(t),r=t.roles||[];return`
    <tr data-discord-user-id="${h(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${h(e)}" alt="${h(n)}" />`:`<span>${c(Cc(n))}</span>`}
          </div>
          <span>${c(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${c(t.global_name||"")}</td>
      <td>${c(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${r.length>0?r.map(i=>Vh(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${Na({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function Uh(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${c(jt?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function Vh(t){const e=jr(t.role_color),n=_o(e),r=wo(e,n);return`
    <span
      class="discord-role-badge"
      title="${h(t.role_name)}"
      style="${r}"
    >${c(t.role_name)}</span>
  `}function Hh(t){const e=So(t),n=jr(e==null?void 0:e.role_color),r=_o(n),i=wo(n,r);return`
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
  `}function Wh(t){const e=jh(t);for(const n of e){const r=So(n);if(r)return r}return null}function jh(t){const e=String(t||"").trim();if(!e)return[];const n=Nn(e),i={associate:["Associates","Associate"],associates:["Associates","Associate"],soldier:["Soldiers","Soldier"],soldiers:["Soldiers","Soldier"],capo:["Capo"],capos:["Capo","Capos"],caporegime:["CapoRegime","Capo Regime","Capo Regimes"],consiglieres:["Consigliere","Consiglieres"],consigliere:["Consigliere","Consiglieres"]}[n]||[e];return Array.from(new Set([e,...i].filter(Boolean)))}function Nn(t){return String(t||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function So(t){const e=Nn(t);if(!e)return null;const n=xr.find(r=>Nn(r.role_name)===e);if(n)return n;for(const r of te){const i=r.roles.find(s=>Nn(s.role_name)===e);if(i)return i}return null}function jr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function wo(t,e){return[`--role-fill-top: ${bs(t,"#ffffff",.16)}`,`--role-fill-bottom: ${bs(t,"#000000",.1)}`,`--role-fill-glow: ${ys(t,.28)}`,`--role-fill-edge: ${ys(t,.46)}`,`color: ${e}`].join("; ")}function bs(t,e,n){const r=or(t)||or("#64748b"),i=or(e)||or("#ffffff"),s=Math.max(0,Math.min(1,Number(n)||0)),o=Math.round(r.red+(i.red-r.red)*s),a=Math.round(r.green+(i.green-r.green)*s),l=Math.round(r.blue+(i.blue-r.blue)*s);return`#${hi(o)}${hi(a)}${hi(l)}`}function or(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function hi(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function ys(t,e){const n=String(t||"#64748b").replace("#",""),r=/^[0-9a-f]{6}$/i.test(n)?n:"64748b",i=parseInt(r.slice(0,2),16),s=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`rgba(${i}, ${s}, ${o}, ${e})`}function _o(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const n=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(n*299+r*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function zh(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!n)return"";const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function Fn(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function Lc(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Ao(t){var o;const e=((o=k.user)==null?void 0:o.role)==="admin",n=e&&Number(t)||0,r=document.querySelector("#userPendingBadge");r&&(r.innerHTML=Ic(n));const i=document.querySelector("#userAdminMenuCount");i&&(i.textContent=n?`${n} pending`:"");const s=document.querySelector("#discordAvatarButton");s&&s.setAttribute("aria-label",n?`GuildSync profile menu, ${n} pending account requests`:"GuildSync profile menu")}function Yh(t){var n;if(!t||t.discord_user_id!==((n=k.user)==null?void 0:n.discord_user_id))return;const e=k.user.role;k.user={...k.user,...t},e!==t.role&&(ge.reset(),Xi.clear(),I==="settings"&&f()),Cn(),ge.start()}function Cn(){const t=document.querySelector("#discordArea");if(!!t){if(sn(!1),D()){const e=k.user||{},n=Se(),r=up(e),i=Cc(n);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Open GuildSync user menu" aria-label="GuildSync profile menu">
          ${r?`<img src="${h(r)}" alt="${h(n)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${c(i)}</span>`}
        </button>
        <span id="userPendingBadge" class="user-pending-badge-wrap"></span>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `,Ao(ge.count);const s=document.querySelector("#discordAvatarButton");s.addEventListener("contextmenu",o=>{o.preventDefault(),ks()}),s.addEventListener("click",()=>{ks()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",Zh)}}function ks(){if(Vn){sn();return}Xh()}function Kh(t=rt){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],n=String((t==null?void 0:t.directory)||"").trim(),r=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const s=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),o=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),a=String((i==null?void 0:i.filePath)||(n?`${n}\\${o}`:o)).trim(),l=(i==null?void 0:i.enabled)!==!1,u=r&&l,y=`profileFileWatchToggle-${Qh(s||o)}`;return`
          <label class="profile-filewatch-item ${l?"enabled":"disabled"}" title="${h(a)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${c(o)}</span>
              <span class="profile-filewatch-state">${u?"Watching":l?"On":"Off"}</span>
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
  `}function Lo(){var r,i,s,o,a;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=Se(),n=((r=k.user)==null?void 0:r.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${c(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Role</span>
        <span class="profile-value">${c(fp(n))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${c(qr)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${rt!=null&&rt.watching?"Active":"Stopped"}</span>
        </div>
        ${Kh()}
      </div>
      ${((i=k.user)==null?void 0:i.role)==="admin"?'<button id="manageGuildSyncUsersButton" class="discord-secondary-button user-admin-menu-button" type="button">Manage GuildSync Users <span id="userAdminMenuCount"></span></button>':""}
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(s=document.querySelector("#manageGuildSyncUsersButton"))==null||s.addEventListener("click",()=>{sn(!1),ge.open()}),Ao(ge.count),(o=document.querySelector("#discordLogoutButton"))==null||o.addEventListener("click",Dc),(a=document.querySelector("#associateTicketReportButton"))==null||a.addEventListener("click",()=>{sn(!1),ga()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(l=>{l.addEventListener("change",Jh)})}async function Ec(){try{rt=await Cr(),Vn&&Lo()}catch(t){p("file-watcher-error",L(t),{ttlMs:m})}}async function Jh(t){var r;const e=t.currentTarget,n=String(((r=e==null?void 0:e.dataset)==null?void 0:r.filewatchKey)||"").trim();if(!!n)try{e.disabled=!0,rt=await Xl(n,e.checked),await Wt({silent:!0}),Vn&&Lo()}catch(i){p("file-watcher-error",L(i),{ttlMs:m}),await Ec()}}function Qh(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function Xh(){const t=document.querySelector("#discordProfileMenu");!t||(Lo(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),Vn=!0,Ec(),setTimeout(()=>{window.addEventListener("click",$c),window.addEventListener("keydown",Rc)},0))}function sn(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),Vn=!1,t&&(window.removeEventListener("click",$c),window.removeEventListener("keydown",Rc))}function $c(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&sn()}function Rc(t){t.key==="Escape"&&sn()}async function Zh(){try{p("auth","Opening Discord login...",{ttlMs:m});const t=await zl();t!=null&&t.status_message&&p("auth",t.status_message,{ttlMs:m}),dt()}catch(t){p("auth-error",L(t),{ttlMs:m}),dt()}}async function Dc(){try{k=await Kl(),p("auth",k.status_message||"Logged out.",{ttlMs:m}),Qs(),qn(),await Wt()}catch(t){p("auth-error",L(t),{ttlMs:m}),dt()}}function qn(){const t=k.socket_url||"https://guildsync.perdues.me";ep(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};k!=null&&k.token&&(e.auth={token:k.token}),d=ur(t,e),d.on("connect",()=>{ge.start(),dt(),Mc(),I==="discord-members"&&Wr({silent:!0}),I==="eso-members"&&Bt({silent:!0}),(I==="more"||I==="settings"&&!K)&&le({silent:!0}),Th(),on(),$h(),Sh(),Df(),Nf(),tp()}),d.on("guildsync:users-changed",n=>ge.changed(n)),d.on("guildsync:account-profile",Yh),d.on("guildsync:account-removed",()=>void Dc()),d.on("connect_error",()=>{ge.stop(),dt(),Tr()}),d.on("disconnect",()=>{ge.stop(),dt(),Tr(),Rh(),wh()}),d.on("guildsync:version-status",n=>{np(n)}),d.on("guildsync:discord-member-data-updated",n=>{Ch(n)}),d.on("guildsync:banking-data-updated",n=>{vh(n)}),d.on("guildsync:roster-data-updated",n=>{Lf(n)}),d.on("guildsync:member-links-updated",Gu),d.on("guildsync:discord-refresh-status",(n={})=>{const r=String(n.message||"").trim();r&&p("discord-refresh-status",r,{ttlMs:m})})}function ep(t=!0){ge.reset(),Tr(),d&&(d.disconnect(),d=null),t&&dt()}function Mc(){!(d!=null&&d.connected)||d.emit("guildsync:client-version",{version:qr,platform:zr(),client_type:"web"})}function tp(){Tr(),fr=window.setInterval(()=>{Mc()},fd)}function Tr(){fr&&(window.clearInterval(fr),fr=null)}function np(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",n=t.download&&typeof t.download=="object"?t.download:{};Ke={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||n.url||"").trim(),fileName:String(t.download_file_name||n.file_name||"").trim(),platformLabel:String(n.label||t.platform||zr()).trim()},p("version",`GuildSync is out of date. Current version: ${qr}. Latest version: ${e}.`),vs();return}Ke={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},vs(),Yr("version")}}function zr(){const t=String(navigator.userAgent||"").toLowerCase(),n=`${String(navigator.platform||"").toLowerCase()} ${t}`;return n.includes("mac")?"macos":n.includes("linux")?"linux":"windows"}function vs(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!Ke.updateRequired||!Ke.downloadUrl){t.innerHTML="";return}const e=Ke.platformLabel||"Desktop",n=Ke.latestVersion||"latest",r=Ke.fileName||"GuildSync client download";t.innerHTML=`
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
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{rp()})}function rp(){const t=String(Ke.downloadUrl||"").trim();if(!t){p("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:m});return}rd(t)}function p(t,e,n={}){const r=String(t||"").trim(),i=String(e||"").trim();if(!(!r||!i)){if(ut.set(r,i),bt.has(r)&&(window.clearTimeout(bt.get(r)),bt.delete(r)),n.ttlMs&&Number(n.ttlMs)>0){const s=window.setTimeout(()=>{Yr(r)},Number(n.ttlMs));bt.set(r,s)}an()}}function Yr(t){const e=String(t||"").trim();if(!!e){if(ut.delete(e),bt.has(e)&&(window.clearTimeout(bt.get(e)),bt.delete(e)),Y===e){Qr(()=>{Y="",an()});return}an()}}function an(){const t=Kr();if(t.length===0){$t?Qr(Gn):Gn();return}!$t&&!Rt&&Jr(t[0])}function Kr(){return Array.from(ut.keys())}function Tc(){const t=Kr();if(t.length===0)return"";if(!Y)return t[0];const e=t.indexOf(Y);return e<0?t[0]:t[(e+1)%t.length]}function Jr(t){const e=document.querySelector("#statusMessageTrack");if(!e||!ut.has(t)){Gn();return}Xr();const n=ut.get(t);Y=t,$t=!0,Rt=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=n,e.style.setProperty("--message-fade-duration",`${js}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",Rt=!1,ip()},{once:!0})})}function ip(){const t=Kr();if(!Y||!ut.has(Y)){an();return}if(t.length<=1){Ss(!1);return}Ss(!0)}function Ss(t){const e=document.querySelector("#statusMessageViewport"),n=document.querySelector("#statusMessageTrack");if(!e||!n)return;const r=Math.max(0,n.scrollWidth-e.clientWidth);if(r<=0){t&&Un(()=>{Qr(()=>{const i=Tc();Y="",i?Jr(i):Gn()})},Yi);return}Un(()=>{Bc(r,t)},zs)}function Bc(t,e){const n=document.querySelector("#statusMessageTrack");if(!n||!Y||!ut.has(Y))return;const r=Math.max(4,Math.ceil(t/gd));n.style.setProperty("--long-scroll-distance",`${t}px`),n.style.setProperty("--long-scroll-duration",`${r}s`),n.classList.add("long-scroll"),n.addEventListener("animationend",()=>{if(n.classList.remove("long-scroll"),n.style.transform=`translateX(-${t}px) translateY(-50%)`,e){Un(()=>{Qr(()=>{const i=Tc();Y="",i?Jr(i):Gn()})},Yi);return}Un(()=>{op()},md)},{once:!0})}function op(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!Y||!ut.has(Y))return;if(Kr().length!==1){an();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const r=Math.max(0,e.scrollWidth-t.clientWidth);r<=0||Un(()=>{Bc(r,!1)},zs)}function Qr(t){const e=document.querySelector("#statusMessageTrack");if(Xr(),!e||!$t){typeof t=="function"&&t();return}Rt=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${js}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",$t=!1,Rt=!1,typeof t=="function"&&t()},{once:!0})}function Gn(){const t=document.querySelector("#statusMessageTrack");Xr(),Y="",$t=!1,Rt=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function Un(t,e){const n=window.setTimeout(()=>{Tn=Tn.filter(r=>r!==n),t()},e);Tn.push(n)}function Xr(){for(const t of Tn)window.clearTimeout(t);Tn=[]}function Nc(){if(!$t||Rt||!Y)return;const t=Y;Xr(),Jr(t)}function dt(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(d!=null&&d.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!D()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${Se()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${Se()}`)}}async function Wt(t={}){try{if(D()){const e=await Jl();rt=e,!t.silent&&(e==null?void 0:e.message)&&p(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:m});return}rt=await Ql(),Yr("file-watcher")}catch(e){p("file-watcher-error",L(e),{ttlMs:m})}}function $n(t,e=null){const n="[GuildSync File Watcher]";if(e){console.log(`${n} ${t}`,e);return}console.log(`${n} ${t}`)}function sp(t={}){if(!D()){$n("SavedVariables change ignored because the user is not authenticated.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",n=e.toLowerCase(),r=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=String(t.filePath||"").trim(),o=r?`${r} saved variables (${i})`:i;$n(`SavedVariables change detected: ${i}${s?` (${s})`:""}. Key: ${n}.`,t),p(`saved-vars-file-updated-${e}`,`${o} has been updated.`,{ttlMs:m}),n==="banking"&&($n(`Processing banking SavedVariables update from ${i}.`),ap(t)),n==="roster"&&($n(`Processing roster SavedVariables update from ${i}.`),cp(t)),n==="applications"&&($n(`Processing applications SavedVariables update from ${i}.`),xf(t))}async function ap(t={}){await _h(t),await gc(t)}async function cp(t={}){await Ef(t)}function lp(t){!D()||p("file-watcher-error",L(t),{ttlMs:m})}function dp(){wn("guildsync-savedvars-file-modified",sp),wn("guildsync-file-watcher-error",lp),wn("guildsync-login-complete",async t=>{k=t||{logged_in:!1,allowed:!1},Cn(),qn(),await Wt(),p("auth",k.status_message||`Logged in and authorized as ${Se()}.`,{ttlMs:m})}),wn("guildsync-login-denied",async t=>{k={logged_in:!1,allowed:!1,status_message:""},Cn(),await Wt(),p("auth",t||"Access denied.",{ttlMs:m}),qn()}),wn("guildsync-login-failed",async t=>{k={logged_in:!1,allowed:!1,status_message:""},Cn(),await Wt(),p("auth",t||"Login failed.",{ttlMs:m}),qn()})}function D(){return Boolean((k==null?void 0:k.logged_in)&&(k==null?void 0:k.allowed)&&(k==null?void 0:k.token))}function Se(){var t,e;return((t=k.user)==null?void 0:t.display_name)||((e=k.user)==null?void 0:e.username)||"Discord User"}function up(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),n=String(t.discord_user_id||"").trim();if(!e||!n)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=128`}function Cc(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function fp(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function hp(){_n&&(_n.disconnect(),_n=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),n=Math.round(t.getBoundingClientRect().height);_n=new ResizeObserver(r=>{const i=r[0];if(!i)return;const s=Math.round(i.contentRect.width),o=Math.round(i.contentRect.height);s===e&&o===n||(e=s,n=o,qc(),Nc())}),_n.observe(t)}function qc(){clearTimeout(Ko),Ko=setTimeout(async()=>{try{await Ps()}catch{}},500)}function L(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function c(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function h(t){return c(t)}dp();kd();su();
