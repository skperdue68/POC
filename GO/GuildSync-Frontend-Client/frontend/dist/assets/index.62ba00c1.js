(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ao(t,e,n,r=()=>{}){if(!t||!e)return;const i=a=>{var l;return(l=a.getAttribute(n))!=null?l:"__empty__"},s=new Map(Array.from(t.children).map(a=>[i(a),a])),o=new Set;Array.from(e.children).forEach((a,l)=>{let u=s.get(i(a));if(!u)u=a.cloneNode(!0),r(u);else if(!u.isEqualNode(a)){for(const y of Array.from(u.attributes))a.hasAttribute(y.name)||u.removeAttribute(y.name);for(const y of Array.from(a.attributes))u.getAttribute(y.name)!==y.value&&u.setAttribute(y.name,y.value);for(Array.from(a.children).forEach((y,b)=>{const g=u.children[b];if(g!=null&&g.isEqualNode(y))return;const _=y.cloneNode(!0);g?g.replaceWith(_):u.append(_),r(_)});u.children.length>a.children.length;)u.lastElementChild.remove()}t.children[l]!==u&&t.insertBefore(u,t.children[l]||null),o.add(u)});for(const a of Array.from(t.children))o.has(a)||a.remove()}function fn(t,e){t&&e&&!t.isEqualNode(e)&&(t.innerHTML=e.innerHTML)}function hn(t,e){t&&e&&t.textContent!==e.textContent&&(t.textContent=e.textContent)}const M=t=>String(t!=null?t:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function fc(){return{open:"",toggle(t){this.open=this.open===t?"":t},close(){this.open=""}}}function hi(t,e){var n;return t.type==="boolean"?String(e).toLowerCase()===String(t.defaultValue).toLowerCase():t.type==="number"?String(e).trim()!==""&&Number(e)===Number(t.defaultValue):String(e!=null?e:"")===String((n=t.defaultValue)!=null?n:"")}function Lo(t,e){const r=Object.hasOwn(e,t.key)?e[t.key]===null?t.defaultValue:e[t.key]:t.value,i=!hi(t,r);return{value:r,override:i,source:i?"Overridden":"Default"}}function Pn(t,e){return t.type==="boolean"?e===!0||String(e).toLowerCase()==="true"?"Enabled":"Disabled":t.type==="select"?{private_thread:"Private thread (public fallback)",channel:"Channel or thread"}[e]||String(e):e==null||e===""?"Not configured":String(e)}function $o(t,{body:e=!1}={}){const n={recipient:"@ExampleMember",account_name:"@ExampleMember",display_name:"@ExampleMember",amount:"10,001",deposit_amount:"10,001",raw_amount:"10001",raw_deposit_amount:"10001",event_id:"123456789",ticket_quantity:"20",tickets:"20",purchased_tickets:"20",bonus_percent:"20",bonus_tickets:"4",total_tickets:"24",bonus_deadline:"October 9, 2026 at 7:00 PM Eastern",bonus_block:`Early Purchase Bonus: 20% for purchases before October 9, 2026 at 7:00 PM ET.
Bonus Tickets: 4
Total Tickets: 24`,note:"",note_block:"",ticket_type:"Bi-Weekly",ticket_type_raw:"biweekly",transaction_type:"biweekly",ticket_gold_cost:"10,001",gold_cost:"10,001",raw_gold_cost:"10001",raw_ticket_gold_cost:"10001",purchase_date:"October 5, 2026",data_source:"Guild bank",event_datetime:"2026-10-05T12:00:00Z",event_timestamp:"1791201600",raffle_datetime_eastern:"October 10, 2026 at 8:00 PM Eastern",raffle_date_time_eastern:"October 10, 2026 at 8:00 PM Eastern",raffle_datetime:"October 10, 2026 at 8:00 PM Eastern",mail_request_id:"example",mail_batch_id:"example"},r=String(t).replace(/{([a-zA-Z0-9_]+)}/g,(i,s)=>{var o;return(o=n[s])!=null?o:i});return e&&!String(t).includes("{bonus_block}")?r+`

`+n.bonus_block:r}function ns(t,{refresh:e=!1,root:n=document}={}){const r=()=>{for(const o of document.querySelectorAll("[data-report-toggle]")){const a=o.dataset.reportToggle===t.open;o.setAttribute("aria-expanded",String(a));const l=document.getElementById(o.getAttribute("aria-controls"));l&&(l.classList.toggle("is-open",a),l.inert=!a)}};for(const o of n.querySelectorAll("[data-report-toggle]"))o.addEventListener("click",()=>{t.toggle(o.dataset.reportToggle),r()});for(const o of n.querySelectorAll('.reports-panel .report-run-button:not([type="submit"])'))o.addEventListener("click",()=>{t.close(),r()});const i=e?Array.from(document.querySelectorAll(".report-section-content")):[],s=i.map(o=>o.style.transition);for(const o of i)o.style.transition="none";r();for(const o of i)o.offsetHeight;i.forEach((o,a)=>o.style.transition=s[a])}const Fr=t=>t.type==="boolean"||t.type==="select"&&t.options.length===2;function hc(t,e){return Pn(t,e)+(Fr(t)&&hi(t,e)?" (Default)":"")}function pc({canEdit:t=()=>!1}={}){let e=null,n={},r=!1,i="",s=!1;const o=(u,y)=>{if(!t())return`<output class="configuration-readonly-value" id="config-${M(u.key)}" aria-describedby="config-help-${M(u.key)}">${M(Pn(u,y.value))}</output>`;const b=`data-config-value="${M(u.key)}" id="config-${M(u.key)}" aria-describedby="config-help-${M(u.key)}" `;if(u.type==="boolean"||u.type==="select"){const g=u.type==="boolean"?["true","false"]:u.options;return`<select ${b}>${g.map(_=>`<option value="${M(_)}" ${String(_)===String(y.value)?"selected":""}>${M(hc(u,_))}</option>`).join("")}</select>`}return u.type==="template"?`<textarea ${b} rows="${u.key.includes("BODY")?9:3}" maxlength="${u.maxLength}">${M(y.value)}</textarea>`:`<input ${b} type="${u.type==="number"?"number":"text"}" ${u.type==="number"?`min="${u.min}" max="${u.max}" step="any"`:""} value="${M(y.value)}" placeholder="Not configured">`};return{render:()=>{const u=t(),y=e?[...new Set(e.settings.map(b=>b.group))]:[];return`<article class="report-option-card admin-configuration-card"><div class="report-option-copy">
   <h3><button type="button" class="report-section-toggle" data-report-toggle="configuration" aria-expanded="false" aria-controls="adminConfigurationContent">Administrator Configuration <span aria-hidden="true">\u25BE</span></button></h3>
   <div id="adminConfigurationContent" class="report-section-content" inert><div class="report-section-inner">
   ${u?"<p>Edit any setting to override its default. Changes take effect only after Save. Choose the option marked (Default) to restore a two-choice setting, or use Return to default for other fields. Settings apply live; active deliveries finish safely.</p>":'<p class="configuration-readonly-notice">Read-only. You can view current settings and defaults. Admin access is required to change Administrator Configuration or raffle bonus settings.</p>'}
   <p role="status" class="configuration-status">${M(i)}</p>
   ${e?`
   ${e.botDefaultsReported?"":"<p>Bot defaults have not been reported yet. Connect the updated bot before editing its settings.</p>"}
   <form id="adminConfigurationForm">
    ${y.map((b,g)=>{const _=e.settings.filter($=>$.group===b),S=[...new Set(_.map($=>$.section||""))];return`<fieldset class="configuration-group" ${s?"disabled":""}><legend>${M(b)}</legend>
      ${S.map(($,N)=>`<section class="configuration-subgroup" ${$?`aria-labelledby="config-section-${g}-${N}"`:""}>
       ${$?`<h4 id="config-section-${g}-${N}">${M($)}</h4>`:""}
       ${_.filter(v=>(v.section||"")===$).map(v=>{const F=Lo(v,u?n:{});return`<div class="configuration-setting" role="group" aria-labelledby="config-label-${M(v.key)}">
         <div class="configuration-setting-header"><label id="config-label-${M(v.key)}" for="config-${M(v.key)}">${M(v.label)}</label><span class="configuration-source" data-config-source="${M(v.key)}">${M(F.source)}</span></div>
         <small class="configuration-env-key">.env: <code>${M(v.key)}</code></small>
         <p class="configuration-help" id="config-help-${M(v.key)}">${M(v.help||"Changes this setting after you save the configuration.")}</p>
         <div class="configuration-values${u&&Fr(v)?" configuration-two-options":""}">
          <div class="configuration-selected-value"><span>${u?"Current selection":"Current value"}</span>${o(v,F)}</div>
          ${u&&Fr(v)?"":`<div class="configuration-default-value"><span>Default value</span><output>${M(Pn(v,v.defaultValue))}</output>${u?`<button type="button" class="configuration-default" data-config-default="${M(v.key)}" aria-label="Return ${M(v.label)} to default: ${M(Pn(v,v.defaultValue))}">Return to default</button>`:""}</div>`}
         </div>
         ${v.placeholders?`<small>Placeholders: ${v.placeholders.map(z=>M("{"+z+"}")).join(", ")}</small>`:""}
         ${v.group==="Receipt messages"?`<label>Example preview (20% bonus)<pre data-config-preview="${M(v.key)}">${M($o(F.value,{body:v.key.endsWith("BODY_TEMPLATE")}))}</pre></label>`:""}
        </div>`}).join("")}
      </section>`).join("")}
     </fieldset>`}).join("")}
    <div class="configuration-actions">${u?`<button type="submit" ${s?"disabled":""}>${s?"Saving...":"Save Configuration"}</button>`:""}<button type="button" id="reloadAdminConfiguration" ${s?"disabled":""}>${u?"Discard edits and reload":"Refresh configuration"}</button></div>
   </form>`:`<p>${r?"Loading configuration...":"Configuration is not loaded."}</p><button type="button" id="reloadAdminConfiguration">Load configuration</button>`}
   </div></div></div></article>`},wire:({request:u,rerender:y})=>{var g,_;const b=async()=>{if(!r){r=!0,i="";try{const S=await u("guildsync:request-admin-configuration",{});if(!(S!=null&&S.ok))throw Error((S==null?void 0:S.message)||"Could not load configuration.");e=S.configuration,n={}}catch(S){i=S.message}finally{r=!1,y()}}};if(!e&&!r&&!i&&b(),(g=document.getElementById("reloadAdminConfiguration"))==null||g.addEventListener("click",()=>void b()),!!t()){for(const S of document.querySelectorAll("[data-config-value]"))S.addEventListener("input",()=>{if(!t())return;const $=S.dataset.configValue,N=e.settings.find(z=>z.key===$);n[$]=hi(N,S.value)?null:S.value;const v=document.querySelector(`[data-config-source="${$}"]`);v&&(v.textContent=Lo(N,n).source);const F=document.querySelector(`[data-config-preview="${$}"]`);F&&(F.textContent=$o(S.value,{body:$.endsWith("BODY_TEMPLATE")}))});for(const S of document.querySelectorAll("[data-config-default]"))S.addEventListener("click",()=>{!t()||(n[S.dataset.configDefault]=null,y())});(_=document.getElementById("adminConfigurationForm"))==null||_.addEventListener("submit",async S=>{var N;if(S.preventDefault(),!t()||s)return;if(!Object.keys(n).length){i="No changes to save.",y();return}s=!0,i="";const $={...n};y(),(N=document.getElementById("adminConfigurationForm"))==null||N.querySelectorAll("input,select,textarea,button").forEach(v=>v.disabled=!0);try{const v=await u("guildsync:save-admin-configuration",{revision:e.revision,changes:$});if(!(v!=null&&v.ok))throw Error((v==null?void 0:v.message)||"Could not save configuration.");e=v.configuration,n={},i="Configuration saved. Backend settings are active; the connected bot applies its settings after active deliveries finish. An offline bot applies them when it reconnects."}catch(v){i=v.message}finally{s=!1,y()}})}},clear(){e=null,n={},i=""}}}const mc="/assets/splash.ea386b6a.png",gc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",bc="/assets/GuildSync-Graphic.9169020d.png",_e=Object.create(null);_e.open="0";_e.close="1";_e.ping="2";_e.pong="3";_e.message="4";_e.upgrade="5";_e.noop="6";const Fn=Object.create(null);Object.keys(_e).forEach(t=>{Fn[_e[t]]=t});const Gr={type:"error",data:"parser error"},rs=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",is=typeof ArrayBuffer=="function",os=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,pi=({type:t,data:e},n,r)=>rs&&e instanceof Blob?n?r(e):Eo(e,r):is&&(e instanceof ArrayBuffer||os(e))?n?r(e):Eo(new Blob([e]),r):r(_e[t]+(e||"")),Eo=(t,e)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];e("b"+(r||""))},n.readAsDataURL(t)};function Ro(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let Rr;function yc(t,e){if(rs&&t.data instanceof Blob)return t.data.arrayBuffer().then(Ro).then(e);if(is&&(t.data instanceof ArrayBuffer||os(t.data)))return e(Ro(t.data));pi(t,!1,n=>{Rr||(Rr=new TextEncoder),e(Rr.encode(n))})}const Do="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",pn=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<Do.length;t++)pn[Do.charCodeAt(t)]=t;const kc=t=>{let e=t.length*.75,n=t.length,r,i=0,s,o,a,l;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const u=new ArrayBuffer(e),y=new Uint8Array(u);for(r=0;r<n;r+=4)s=pn[t.charCodeAt(r)],o=pn[t.charCodeAt(r+1)],a=pn[t.charCodeAt(r+2)],l=pn[t.charCodeAt(r+3)],y[i++]=s<<2|o>>4,y[i++]=(o&15)<<4|a>>2,y[i++]=(a&3)<<6|l&63;return u},vc=typeof ArrayBuffer=="function",mi=(t,e)=>{if(typeof t!="string")return{type:"message",data:ss(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:Sc(t.substring(1),e)}:Fn[n]?t.length>1?{type:Fn[n],data:t.substring(1)}:{type:Fn[n]}:Gr},Sc=(t,e)=>{if(vc){const n=kc(t);return ss(n,e)}else return{base64:!0,data:t}},ss=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},as=String.fromCharCode(30),wc=(t,e)=>{const n=t.length,r=new Array(n);let i=0;t.forEach((s,o)=>{pi(s,!1,a=>{r[o]=a,++i===n&&e(r.join(as))})})},_c=(t,e)=>{const n=t.split(as),r=[];for(let i=0;i<n.length;i++){const s=mi(n[i],e);if(r.push(s),s.type==="error")break}return r};function Ac(){return new TransformStream({transform(t,e){yc(t,n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,r)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(r))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(n)})}})}let Dr;function qn(t){return t.reduce((e,n)=>e+n.length,0)}function xn(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let r=0;for(let i=0;i<e;i++)n[i]=t[0][r++],r===t[0].length&&(t.shift(),r=0);return t.length&&r<t[0].length&&(t[0]=t[0].slice(r)),n}function Lc(t,e){Dr||(Dr=new TextDecoder);const n=[];let r=0,i=-1,s=!1;return new TransformStream({transform(o,a){for(n.push(o);;){if(r===0){if(qn(n)<1)break;const l=xn(n,1);s=(l[0]&128)===128,i=l[0]&127,i<126?r=3:i===126?r=1:r=2}else if(r===1){if(qn(n)<2)break;const l=xn(n,2);i=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),r=3}else if(r===2){if(qn(n)<8)break;const l=xn(n,8),u=new DataView(l.buffer,l.byteOffset,l.length),y=u.getUint32(0);if(y>Math.pow(2,53-32)-1){a.enqueue(Gr);break}i=y*Math.pow(2,32)+u.getUint32(4),r=3}else{if(qn(n)<i)break;const l=xn(n,i);a.enqueue(mi(s?l:Dr.decode(l),e)),r=0}if(i===0||i>t){a.enqueue(Gr);break}}}})}const cs=4;function x(t){if(t)return $c(t)}function $c(t){for(var e in x.prototype)t[e]=x.prototype[e];return t}x.prototype.on=x.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};x.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};x.prototype.off=x.prototype.removeListener=x.prototype.removeAllListeners=x.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===e||r.fn===e){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+t],this};x.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,e)}return this};x.prototype.emitReserved=x.prototype.emit;x.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};x.prototype.hasListeners=function(t){return!!this.listeners(t).length};const lr=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0))(),X=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),Ec="arraybuffer";function ls(t,...e){return e.reduce((n,r)=>(t.hasOwnProperty(r)&&(n[r]=t[r]),n),{})}const Rc=X.setTimeout,Dc=X.clearTimeout;function dr(t,e){e.useNativeTimers?(t.setTimeoutFn=Rc.bind(X),t.clearTimeoutFn=Dc.bind(X)):(t.setTimeoutFn=X.setTimeout.bind(X),t.clearTimeoutFn=X.clearTimeout.bind(X))}const Mc=1.33;function Tc(t){return typeof t=="string"?Bc(t):Math.ceil((t.byteLength||t.size)*Mc)}function Bc(t){let e=0,n=0;for(let r=0,i=t.length;r<i;r++)e=t.charCodeAt(r),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(r++,n+=4);return n}function ds(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Nc(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function Cc(t){let e={},n=t.split("&");for(let r=0,i=n.length;r<i;r++){let s=n[r].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class qc extends Error{constructor(e,n,r){super(e),this.description=n,this.context=r,this.type="TransportError"}}class gi extends x{constructor(e){super(),this.writable=!1,dr(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,r){return super.emitReserved("error",new qc(e,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=mi(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=Nc(e);return n.length?"?"+n:""}}class xc extends gi{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};_c(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,wc(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=ds()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let us=!1;try{us=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Oc=us;function Ic(){}class Pc extends xc{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let r=location.port;r||(r=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,n){const r=this.request({method:"POST",data:e});r.on("success",n),r.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=e}}class ye extends x{constructor(e,n,r){super(),this.createRequest=e,dr(this,r),this._opts=r,this._method=r.method||"GET",this._uri=n,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const n=ls(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(n);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var i;r.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=ye.requestsCount++,ye.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Ic,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete ye.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}ye.requestsCount=0;ye.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Mo);else if(typeof addEventListener=="function"){const t="onpagehide"in X?"pagehide":"unload";addEventListener(t,Mo,!1)}}function Mo(){for(let t in ye.requests)ye.requests.hasOwnProperty(t)&&ye.requests[t].abort()}const Fc=function(){const t=fs({xdomain:!1});return t&&t.responseType!==null}();class Gc extends Pc{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=Fc&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new ye(fs,this.uri(),e)}}function fs(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Oc))return new XMLHttpRequest}catch{}if(!e)try{return new X[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const hs=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Uc extends gi{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,r=hs?{}:ls(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;pi(r,this.supportsBinary,s=>{try{this.doWrite(r,s)}catch{}i&&lr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=ds()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const Mr=X.WebSocket||X.MozWebSocket;class Hc extends Uc{createSocket(e,n,r){return hs?new Mr(e,n,r):n?new Mr(e,n):new Mr(e)}doWrite(e,n){this.ws.send(n)}}class Vc extends gi{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=Lc(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(n).getReader(),i=Ac();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const s=()=>{r.read().then(({done:a,value:l})=>{a||(this.onPacket(l),s())}).catch(a=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;this._writer.write(r).then(()=>{i&&lr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Wc={websocket:Hc,webtransport:Vc,polling:Gc},jc=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,zc=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Ur(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),r=t.indexOf("]");n!=-1&&r!=-1&&(t=t.substring(0,n)+t.substring(n,r).replace(/:/g,";")+t.substring(r,t.length));let i=jc.exec(t||""),s={},o=14;for(;o--;)s[zc[o]]=i[o]||"";return n!=-1&&r!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=Yc(s,s.path),s.queryKey=Kc(s,s.query),s}function Yc(t,e){const n=/\/{2,9}/g,r=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function Kc(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,s){i&&(n[i]=s)}),n}const Hr=typeof addEventListener=="function"&&typeof removeEventListener=="function",Gn=[];Hr&&addEventListener("offline",()=>{Gn.forEach(t=>t())},!1);class We extends x{constructor(e,n){if(super(),this.binaryType=Ec,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const r=Ur(e);n.hostname=r.host,n.secure=r.protocol==="https"||r.protocol==="wss",n.port=r.port,r.query&&(n.query=r.query)}else n.host&&(n.hostname=Ur(n.host).host);dr(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(r=>{const i=r.prototype.name;this.transports.push(i),this._transportsByName[i]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Cc(this.opts.query)),Hr&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Gn.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=cs,n.transport=e,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&We.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",We.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(n+=Tc(i)),r>0&&n>this._maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,lr(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,r){return this._sendPacket("message",e,n,r),this}send(e,n,r){return this._sendPacket("message",e,n,r),this}_sendPacket(e,n,r,i){if(typeof n=="function"&&(i=n,n=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const s={type:e,data:n,options:r};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(We.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Hr&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=Gn.indexOf(this._offlineEventListener);r!==-1&&Gn.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}}We.protocol=cs;class Jc extends We{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let n=this.createTransport(e),r=!1;We.priorWebsocketSuccess=!1;const i=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",b=>{if(!r)if(b.type==="pong"&&b.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;We.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(y(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const g=new Error("probe error");g.transport=n.name,this.emitReserved("upgradeError",g)}}))};function s(){r||(r=!0,y(),n.close(),n=null)}const o=b=>{const g=new Error("probe error: "+b);g.transport=n.name,s(),this.emitReserved("upgradeError",g)};function a(){o("transport closed")}function l(){o("socket closed")}function u(b){n&&b.name!==n.name&&s()}const y=()=>{n.removeListener("open",i),n.removeListener("error",o),n.removeListener("close",a),this.off("close",l),this.off("upgrading",u)};n.once("open",i),n.once("error",o),n.once("close",a),this.once("close",l),this.once("upgrading",u),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const n=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&n.push(e[r]);return n}}class Qc extends Jc{constructor(e,n={}){const r=typeof e=="object"?e:n;(!r.transports||r.transports&&typeof r.transports[0]=="string")&&(r.transports=(r.transports||["polling","websocket","webtransport"]).map(i=>Wc[i]).filter(i=>!!i)),super(e,r)}}function Xc(t,e="",n){let r=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),r=Ur(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const s=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+s+":"+r.port+e,r.href=r.protocol+"://"+s+(n&&n.port===r.port?"":":"+r.port),r}const Zc=typeof ArrayBuffer=="function",el=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,ps=Object.prototype.toString,tl=typeof Blob=="function"||typeof Blob<"u"&&ps.call(Blob)==="[object BlobConstructor]",nl=typeof File=="function"||typeof File<"u"&&ps.call(File)==="[object FileConstructor]";function bi(t){return Zc&&(t instanceof ArrayBuffer||el(t))||tl&&t instanceof Blob||nl&&t instanceof File}function Un(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,r=t.length;n<r;n++)if(Un(t[n]))return!0;return!1}if(bi(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return Un(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&Un(t[n]))return!0;return!1}function rl(t){const e=[],n=t.data,r=t;return r.data=Vr(n,e),r.attachments=e.length,{packet:r,buffers:e}}function Vr(t,e){if(!t)return t;if(bi(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let r=0;r<t.length;r++)n[r]=Vr(t[r],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=Vr(t[r],e));return n}return t}function il(t,e){return t.data=Wr(t.data,e),delete t.attachments,t}function Wr(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=Wr(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=Wr(t[n],e));return t}const ms=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],ol=5;var A;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(A||(A={}));class sl{constructor(e){this.replacer=e}encode(e){return(e.type===A.EVENT||e.type===A.ACK)&&Un(e)?this.encodeAsBinary({type:e.type===A.EVENT?A.BINARY_EVENT:A.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===A.BINARY_EVENT||e.type===A.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=rl(e),r=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(r),i}}class yi extends x{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const r=n.type===A.BINARY_EVENT;r||n.type===A.BINARY_ACK?(n.type=r?A.EVENT:A.ACK,this.reconstructor=new al(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(bi(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const r={type:Number(e.charAt(0))};if(A[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===A.BINARY_EVENT||r.type===A.BINARY_ACK){const s=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(s,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!gs(a)||a<0)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=a}if(e.charAt(n+1)==="/"){const s=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););r.nsp=e.substring(s,n)}else r.nsp="/";const i=e.charAt(n+1);if(i!==""&&Number(i)==i){const s=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}r.id=Number(e.substring(s,n+1))}if(e.charAt(++n)){const s=this.tryParse(e.substr(n));if(yi.isPayloadValid(r.type,s))r.data=s;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case A.CONNECT:return Kn(n);case A.DISCONNECT:return n===void 0;case A.CONNECT_ERROR:return typeof n=="string"||Kn(n);case A.EVENT:case A.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&ms.indexOf(n[0])===-1);case A.ACK:case A.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class al{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=il(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function cl(t){return typeof t=="string"}const gs=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function ll(t){return t===void 0||gs(t)}function Kn(t){return Object.prototype.toString.call(t)==="[object Object]"}function dl(t,e){switch(t){case A.CONNECT:return e===void 0||Kn(e);case A.DISCONNECT:return e===void 0;case A.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&ms.indexOf(e[0])===-1);case A.ACK:return Array.isArray(e);case A.CONNECT_ERROR:return typeof e=="string"||Kn(e);default:return!1}}function ul(t){return cl(t.nsp)&&ll(t.id)&&dl(t.type,t.data)}const fl=Object.freeze(Object.defineProperty({__proto__:null,protocol:ol,get PacketType(){return A},Encoder:sl,Decoder:yi,isPacketValid:ul},Symbol.toStringTag,{value:"Module"}));function ie(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const hl=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class bs extends x{constructor(e,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[ie(e,"open",this.onopen.bind(this)),ie(e,"packet",this.onpacket.bind(this)),ie(e,"error",this.onerror.bind(this)),ie(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var r,i,s;if(hl.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const o={type:A.EVENT,data:n};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const y=this.ids++,b=n.pop();this._registerAckCallback(y,b),o.id=y}const a=(i=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||i===void 0?void 0:i.writable,l=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!a||(l?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,n){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[e]=n;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);n.call(this,new Error("operation has timed out"))},i),o=(...a)=>{this.io.clearTimeoutFn(s),n.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...n){return new Promise((r,i)=>{const s=(o,a)=>o?i(o):r(a);s.withError=!0,n.push(s),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>(this._queue[0],i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(i)):(this._queue.shift(),n&&n(null,...s)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:A.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case A.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case A.EVENT:case A.BINARY_EVENT:this.onevent(e);break;case A.ACK:case A.BINARY_ACK:this.onack(e);break;case A.DISCONNECT:this.ondisconnect();break;case A.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let r=!1;return function(...i){r||(r=!0,n.packet({type:A.ACK,id:e,data:i}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:A.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,e.data)}}}function jt(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}jt.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-n:t+n}return Math.min(t,this.max)|0};jt.prototype.reset=function(){this.attempts=0};jt.prototype.setMin=function(t){this.ms=t};jt.prototype.setMax=function(t){this.max=t};jt.prototype.setJitter=function(t){this.jitter=t};class jr extends x{constructor(e,n){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,dr(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new jt({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const i=n.parser||fl;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Qc(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=ie(n,"open",function(){r.onopen(),e&&e()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=ie(n,"error",s);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),n.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(ie(e,"ping",this.onping.bind(this)),ie(e,"data",this.ondata.bind(this)),ie(e,"error",this.onerror.bind(this)),ie(e,"close",this.onclose.bind(this)),ie(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){lr(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new bs(this,e,n),this.nsps[e]=r),r}_destroy(e){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let r=0;r<n.length;r++)this.engine.write(n[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const sn={};function Hn(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=Xc(t,e.path||"/socket.io"),r=n.source,i=n.id,s=n.path,o=sn[i]&&s in sn[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let l;return a?l=new jr(r,e):(sn[i]||(sn[i]=new jr(r,e)),l=sn[i]),n.query&&!e.query&&(e.query=n.queryKey),l.socket(n.path,e)}Object.assign(Hn,{Manager:jr,Socket:bs,io:Hn,connect:Hn});function pl(t){return window.go.main.App.CleanupDepositMailAckFromGuildSyncBanking(t)}function ml(){return window.go.main.App.CloseWindow()}function gl(t){return window.go.main.App.CollectDepositMailAckFromGuildSyncBanking(t)}function bl(t){return window.go.main.App.CollectGuildSyncApplicationsData(t)}function yl(t){return window.go.main.App.CollectGuildSyncBankingData(t)}function kl(t){return window.go.main.App.CollectGuildSyncRosterData(t)}function vl(t,e){return window.go.main.App.CommitGuildSyncApplicationsData(t,e)}function Sl(t,e){return window.go.main.App.CommitGuildSyncBankingData(t,e)}function wl(t,e){return window.go.main.App.CommitGuildSyncRosterData(t,e)}function _l(){return window.go.main.App.FlushPendingDepositMailAckCleanup()}function Al(){return window.go.main.App.GetESORunningStatus()}function Ll(){return window.go.main.App.GetGuildSyncFileWatcherStatus()}function $l(){return window.go.main.App.GetGuildSyncSession()}function El(){return window.go.main.App.LogoutGuildSync()}function Rl(){return window.go.main.App.MaximizeWindow()}function Dl(){return window.go.main.App.MinimizeWindow()}function ys(){return window.go.main.App.SaveWindowState()}function Ml(t,e){return window.go.main.App.SetGuildSyncSavedVarsWatchFileEnabled(t,e)}function Tl(){return window.go.main.App.ShowMainWindow()}function Bl(){return window.go.main.App.StartDiscordLogin()}function Nl(){return window.go.main.App.StartGuildSyncFileWatcher()}function Cl(){return window.go.main.App.StopGuildSyncFileWatcher()}function ql(t){return window.go.main.App.WriteDepositMailToGuildSyncBanking(t)}function xl(t,e,n){return window.runtime.EventsOnMultiple(t,e,n)}function an(t,e){return xl(t,e,-1)}function Ol(t){window.runtime.BrowserOpenURL(t)}const ur="1.2.7",Il=30*60*1e3,ks="guildsync-pending-banking-uploads",vs="guildsync-pending-deposit-mail",Pl=5e3,Fl=30*1e3,Ss="guildsync-pending-roster-uploads",ws="guildsync-pending-applications-uploads",m=60*1e3,_s=7e3,As=1400,Ls=2400,Gl=4e3,Ul=38,$s=document.querySelector("#app");let To=null,cn=null,Bo=!1,$n=!1,Vn=null,Tr=!1,Br=!1,Nr=!1,je=null,Y={running:!1,message:""},vt=null,St=null,zr=!1,wt=!1,_t=null,Cr=!1,et=new Map,ot=new Map,G="",mt=!1,gt=!1,mn=[],k={logged_in:!1,allowed:!1,status_message:""},Ie={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},d=null,K=[],fr=[],hr=null,Bt=!1,Jn=!1,Qn="",At=new Set,Lt=new Set,kn="username",at="asc",Yr=null,Kr=null,te=[],Xn=null,Ne=!1,Jr=!1,Zn="",Qr=null,Xr=null,ct=new Set,$t=new Set,Ee="",j="",O=-1,Nt=!1,vn="",Z=[],tt="",ze=[],Ye=!1,De="",qr=null,oe=-1,zt=!1,Sn="",Ke=[],er=!1,lt=!1,Je="",Ct="",qt=!1,Pe="",ee=[],xt="",bt="",Qe=[],Xe=!1,Me="",No=null,it=0;const Hl=650;let se=-1,Yt=!1,Kt=[],Fe=!1,dt="",Jt=!1,wn=[],Ge=!1,ut="",rt=!1,ki=[],Ue=!1,ft="",Qt="",He="",Et="",Ve="",D=[],P=!1,W="",xe=!1,pr="",st="",En="",Rn="",Re=-1,Oe=!1,E=null,ht=[],Ot=!1,Ce="",Dn="",ge=-1,Xt=!1,vi=null,gn=null;const Si=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let J=[],U=null,be=null,ce=!1;const Es=fc(),Rs=pc({canEdit:()=>{var t;return((t=k==null?void 0:k.user)==null?void 0:t.role)==="admin"}});let It=[],Te="",Co=!1,C="biweekly",Ds=null,qe=!1,pt=!1,fe="biweekly",Zt=!1,Pt=!1,Le="",$e=null,I={targetType:"other",note:"",tickets:""},en=!1,yt="",V=[],de=[],ke="",ve=!1,Se="",Rt=null,ae=-1,Be=!1,tr=!1,Q="",T={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},tn="",H=-1,le=!1,Zr={biweekly:0,monthly:0};const Vl=1780786800,nt=14*24*60*60,nr=60*60,rr=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let B=rr[0].id;const ei=new Set;function Wl(){$s.innerHTML=`
    <main class="splash-screen">
      <img src="${mc}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await Tl(),await jl(),Ms(),yn(),await Tt()},5e3)}async function jl(){try{k=await $l()}catch(t){k={logged_in:!1,allowed:!1,status_message:""},p("session-error",w(t),{ttlMs:m})}}function Ms(){$s.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${gc}" alt="" class="title-icon" />
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
            <img src="${bc}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${c(ur)}</div>
            </div>
          </div>
          <div class="compact-header-actions">
            <div id="desktopUpdateArea" class="desktop-update-area"></div>
            <div id="discordArea" class="discord-area"></div>
          </div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${Ts()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content web-upload-banner-dismissed" aria-live="polite">
          ${Ns()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await Dl()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await ys(),await ml()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await Rl()}),Yn(),fi(),qs(),Za(),La(),Ia(),Us(),_a(),ha(),pa(),ma(),ga(),na(),$a(),Zl(),Ze(),Wt(),Bo||(window.addEventListener("resize",()=>{uc(),lc()}),Dh(),Bo=!0)}function Ts(){return rr.map(t=>{const e=t.id===B,n=zl(t.id,e),r=n?Bs():0,i=n?`Deposit mail needs attention: ${r} item${r===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${n?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${h(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${h(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${Yl(t.icon)}</span>
          <span class="guildsync-tab-label">${c(t.label)}</span>
          ${n?`<span class="guildsync-tab-mail-badge" aria-label="${h(i)}">${r>99?"99+":c(String(r))}</span>`:""}
        </button>
      `}).join("")}function Bs(){return R()?kr()+Bn()+qa():0}function zl(t,e){return t!=="more"||e?!1:Bs()>0}function Yl(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function Ns(){const t=rr.find(n=>n.id===B)||rr[0];let e="";return t.id==="discord-members"?e=xs():t.id==="eso-members"?e=Os():t.id==="more"?e=Ca():t.id==="settings"?e=Ad():e=`
      <div class="guildsync-tab-panel" data-active-tab="${h(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${c(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${Be?Ru():""}
    ${Zt?uf():""}
    ${en?Zu():""}
    ${Oe?ku():""}
    ${Yt?$d():""}
    ${Jt?Bd():""}
    ${rt?xd():""}
    ${xe?Yd():""}
    ${Xt?Xl():""}
  `}function Kl(){return Xt||Nt||qt||Be||Zt||en||Oe||zt||Yt||Jt||rt||xe||pt}function Jl(){return Xt?!1:xe?(si(),!0):rt?(oi(),!0):Jt?(ii(),!0):Yt?(ri(),!0):Oe?(Gt(),!0):zt?(li(),!0):Zt?(sr(),!0):en?(mf(),f(),!0):Be?(Be=!1,f(),!0):Nt?(Nt=!1,f(),!0):qt?(qt=!1,f(),!0):pt?(pt=!1,f(),!0):!1}function Ql(t){t.key==="Escape"&&Jl()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",Ql,!0),window.guildSyncGlobalModalEscapeAttached=!0);function wi(t={}){return new Promise(e=>{gn&&gn(!1),Xt=!0,vi={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},gn=e,f()})}function ir(t=!1){const e=gn;gn=null,Xt=!1,vi=null,e&&e(t===!0),f()}function Xl(){const t=vi||{};return`
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
  `}function qo(t){var r,i,s,o;const e=(i=(r=t.target).closest)==null?void 0:i.call(r,"#cancelGuildSyncConfirmButton"),n=(o=(s=t.target).closest)==null?void 0:o.call(s,"#acceptGuildSyncConfirmButton");if(!(!e&&!n)){if(t.preventDefault(),t.stopPropagation(),e){ir(!1);return}n&&ir(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",qo,!0),document.addEventListener("pointerup",qo,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function Zl(){if(!Xt)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=r=>{r.preventDefault(),r.stopPropagation(),ir(!1)}),e&&(e.onclick=r=>{r.preventDefault(),r.stopPropagation(),ir(!0)});const n=document.querySelector(".guildsync-confirm-overlay");n&&(n.onclick=r=>{r.target===n&&(r.preventDefault(),r.stopPropagation())})}function Cs(t=B){if(!(d!=null&&d.connected))return;if(t==="discord-members"?Bt:t==="eso-members"?Ne:t==="more"?qe:!1){ei.add(t);return}ei.delete(t),t==="discord-members"&&wr({silent:!0}),t==="eso-members"&&(Jr=!0,nn({silent:!0})),t==="more"&&me({silent:!0})}function Mn(t){ei.has(t)&&Cs(t)}function qs(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(Kl())return;const e=t.dataset.tabId;if(!e)return;const n=e!==B;B=e,Cs(),n&&f()})})}function ed(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function _i(t){const e={x:window.scrollX,y:window.scrollY},n=[];for(let o=t;o;o=o.parentElement)n.push({element:o,top:o.scrollTop,left:o.scrollLeft});const r=t?Array.from(t.querySelectorAll("*")):[],i=(o,a)=>o.id?o.id===a.id:o.tagName===a.tagName&&o.className===a.className,s=r.filter(o=>o.scrollTop||o.scrollLeft).map(o=>({identity:{id:o.id,tagName:o.tagName,className:o.className},occurrence:r.filter(a=>i(o,a)).indexOf(o),top:o.scrollTop,left:o.scrollLeft}));return()=>{const o=t?Array.from(t.querySelectorAll("*")):[];for(const{identity:a,occurrence:l,top:u,left:y}of s){const b=o.filter(g=>i(a,g))[l];b&&(b.scrollTop=u,b.scrollLeft=y)}for(const{element:a,top:l,left:u}of n)a.scrollTop=l,a.scrollLeft=u;window.scrollTo({left:e.x,top:e.y,behavior:"instant"})}}function f(t={}){xe&&ed();const e=document.querySelector(".guildsync-tabs"),n=document.querySelector("#guildSyncTabContent"),r=_i(n);e&&(e.innerHTML=Ts()),n&&(n.innerHTML=Ns()),qs(),Za(),La(),Ia(),Us(),_a(),ha(),pa(),ma(),ga(),na(),$a(),r(),t.restoreDiscordSearchFocus&&eh(),t.restoreRosterSearchFocus&&th(),B==="discord-members"&&(d==null?void 0:d.connected)&&K.length===0&&!Bt&&wr({silent:!0}),B==="eso-members"&&(d==null?void 0:d.connected)&&te.length===0&&!Ne&&!Jr&&(Jr=!0,nn({silent:!0})),(B==="more"&&J.length===0||B==="settings"&&!U&&!Co)&&(d==null?void 0:d.connected)&&!qe&&(Co=!0,me({silent:!0})),(B==="discord-members"||B==="eso-members"||B==="settings")&&(d==null?void 0:d.connected)&&D.length===0&&!P&&mr({silent:!0})}function xs(){const t=Qf(),e=nh(),n=Array.from(At),r=Array.from(Lt);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${c(tc(hr))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${Bt||Jn?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Jn?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${h(Qn)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!At.has(i)).map(i=>`<option value="${h(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All roles</span>':n.map(i=>sh(i)).join("")}
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
              ${Si.filter(i=>!Lt.has(i.id)).map(i=>`<option value="${h(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>Is("discord",i)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${On("username","Username")}
                ${On("global_name","Global Name")}
                ${On("server_nickname","Server Nickname")}
                ${On("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>rh(i)).join(""):ih()}
            </tbody>
          </table>
        </div>
      </div>
      ${qt?bd():""}
    </div>
  `}function Os(){const t=dd(),e=hd(),n=Array.from(ct),r=Array.from($t);return`
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
          <span class="discord-last-refresh">Last Refresh: ${c(Fu(Xn))}</span>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${Ne?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Ne?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${h(Zn)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!ct.has(i)).map(i=>`<option value="${h(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All ranks</span>':n.map(i=>pd(i)).join("")}
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
              ${Si.filter(i=>!$t.has(i.id)).map(i=>`<option value="${h(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>Is("roster",i)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${ln("account_name","Account Name")}
                ${ln("rank","Rank")}
                ${ln("joined","Joined")}
                ${ln("notes","Notes","roster-notes-header")}
                ${ln("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map((i,s)=>td(i,s)).join(""):ad()}
            </tbody>
          </table>
        </div>
      </div>
      ${Nt?Sd():""}
      ${zt?rd():""}
    </div>
  `}function td(t,e=-1){const n=cd(t.rank||""),r=n?` style="color: ${n};"`:"";return`
    <tr class="eso-roster-row${e===O?" roster-search-active-row":""}"${r} data-roster-row-index="${h(String(e))}" data-eso-account-name="${h(t.account_name||"")}">
      <td>${c(t.account_name||"")}</td>
      <td>${Ai(t.rank||"")}</td>
      <td>${c(yr(t.joined))}</td>
      <td class="roster-notes-cell">${nd(t)}</td>
      <td class="member-link-action-cell">${ca({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function nd(t){const e=String((t==null?void 0:t.account_name)||"").trim(),n=Number((t==null?void 0:t.note_count)||0),r=n>0,i=r?`${n} roster note${n===1?"":"s"} for ${e}`:`No roster notes for ${e}`;return`
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
  `}function rd(){const t=Sn||"",e=Boolean((k==null?void 0:k.logged_in)&&(k==null?void 0:k.allowed));return`
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
          ${Je?`<div class="discord-data-error">${c(Je)}</div>`:""}
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
                ${id()}
              </tbody>
            </table>
          </div>
          ${e?od():'<div class="roster-history-muted">Log in to add a new note.</div>'}
        </div>
      </div>
    </div>
  `}function id(){return er?'<tr><td class="bank-empty-row" colspan="3">Loading notes...</td></tr>':!Array.isArray(Ke)||Ke.length===0?'<tr><td class="bank-empty-row" colspan="3">No notes recorded for this member.</td></tr>':Ke.map(t=>`
      <tr>
        <td class="roster-notes-when-cell">${c(sd(t.timestamp))}</td>
        <td class="roster-notes-officer-cell">${c(t.officer||"")}</td>
        <td class="roster-notes-note-cell">${c(t.note||"")}</td>
      </tr>
    `).join("")}function od(){return`
    <div class="roster-notes-form">
      <label for="rosterNotesNewNote">Add Note</label>
      <textarea
        id="rosterNotesNewNote"
        class="roster-notes-textarea"
        rows="4"
        placeholder="Enter a new roster note..."
        ${lt?"disabled":""}
      >${c(Ct)}</textarea>
      <button id="saveRosterNoteButton" class="refresh-discord-button" type="button" ${lt?"disabled":""}>
        ${lt?"Saving...":"Save Note"}
      </button>
    </div>
  `}function sd(t){const e=Number(t||0);return!Number.isFinite(e)||e<=0?"":new Date(e*1e3).toLocaleString()}function ad(){return`
    <tr>
      <td class="bank-empty-row" colspan="5">${c(Ne?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function cd(t){String(t||"").trim();const e=ah(t);return _r(e==null?void 0:e.role_color)}function Ai(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${c(e)}</span>`}function ld(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":Ai(e)}function dd(){const t=Zn.trim().toLowerCase(),e=te.filter(n=>{const r=String(n.rank||"").trim();if(ct.size>0&&!ct.has(r)||!Gs($t,ti(n)))return!1;if(!t)return!0;const i=yr(n.joined),s=Ti(n.joined),o=ti(n),a=Fs(n.account_name||"");return[n.account_name,r,i,s,n.joined,o,a].map(u=>String(u||"").toLowerCase()).join(" ").includes(t)});return ud(e)}function ud(t){if(!Ee||!j)return t;const e=j==="desc"?-1:1;return[...t].sort((n,r)=>{const i=xo(n,Ee),s=xo(r,Ee),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:String(n.account_name||"").localeCompare(String(r.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function xo(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const n=Number(t.joined||0);return Number.isFinite(n)&&n>0?String(n).padStart(16,"0"):""}if(e==="notes")return String(Number(t.note_count||0)).padStart(8,"0");if(e==="linked"){const n=ti(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[n]||"9"} ${n} ${Fs(t.account_name||"")}`}return String(t.account_name||"")}function fd(t){const n=new Set(["account_name","rank","joined","notes","linked"]).has(t)?t:"account_name";Ee!==n?(Ee=n,j="asc"):j==="asc"?j="desc":j==="desc"?(Ee="",j=""):(Ee=n,j="asc"),O=-1,f()}function ln(t,e,n=""){const r=Ee===t&&Boolean(j),i=r?j==="asc"?"ascending":"descending":"none",s=r?j==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${h(n)}" aria-sort="${h(i)}">
      <button
        class="discord-sort-header roster-sort-header${r?" active":""}"
        type="button"
        data-roster-sort-column="${h(t)}"
        title="Sort ${h(e)}${r&&j==="asc"?" descending":r&&j==="desc"?" not sorted":" ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function hd(){return Array.from(new Set(te.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function pd(t){const e=Hi(t),n=_r(e==null?void 0:e.role_color),r=Wi(n),i=Vi(n,r);return`
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
  `}function md(t){const e=Si.find(n=>n.id===t);return e?e.label:t}function Is(t,e){const n=t==="roster"?"roster":"discord",r=md(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${n}-link-status-filter="${h(e)}"
      title="Remove ${h(r)} link filter"
    >
      <span>${c(r)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Ps(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked"&&String(n.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function gd(t){return Ps(br(t==null?void 0:t.discord_id))}function ti(t){return Ps(gr(t==null?void 0:t.account_name))}function Fs(t){const e=gr(t),n=aa({mode:"eso-to-discord",esoAccountName:t}),r=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean),i=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="candidate").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean);return[n.label,n.title,r.join(" "),i.join(" ")].filter(Boolean).join(" ")}function Gs(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function bd(){return`
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
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${h(Pe)}" />
        </div>

        ${Me?`<div class="discord-data-error">${c(Me)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${yd()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${bt?`: ${c(bt)}`:""}</div>
            ${kd()}
          </div>
        </div>
      </div>
    </div>
  `}function yd(){return Xe&&ee.length===0?'<div class="roster-history-muted">Searching...</div>':ee.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${ee.map((t,e)=>`
        <button class="roster-history-match${e===se||t.discord_id===xt?" is-selected":""}" type="button" data-discord-history-id="${h(t.discord_id)}" data-discord-history-name="${h(ni(t))}">
          <span>${c(ni(t))}</span>
          <strong>${c(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===se?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function kd(){return xt?Xe&&Qe.length===0?'<div class="roster-history-muted">Loading history...</div>':Qe.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${Qe.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(Ti(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${c(vd(t.event_type))}</td>
              <td>${c(t.old_value||"")}</td>
              <td>${c(t.new_value||"")}</td>
              <td>${c(t.initiator||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function ni(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function vd(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Sd(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${h(vn)}" />
        </div>

        ${De?`<div class="discord-data-error">${c(De)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${wd()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${tt?`: ${c(tt)}`:""}</div>
            ${_d()}
          </div>
        </div>
      </div>
    </div>
  `}function wd(){return Ye&&Z.length===0?'<div class="roster-history-muted">Searching...</div>':Z.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${Z.map((t,e)=>`
        <button class="roster-history-match${e===oe||t.account_name===tt?" is-selected":""}" type="button" data-roster-history-account="${h(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <strong>${c(t.rank||"")}</strong>
          ${e===oe?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function _d(){return tt?Ye&&ze.length===0?'<div class="roster-history-muted">Loading history...</div>':ze.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${ze.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(Ti(t.timestamp))}</td>
              <td>${c(t.event_type||"")}</td>
              <td>${ld(t.rank)}</td>
              <td>${c(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function Ad(){return`
    <div class="guildsync-tab-panel reports-panel" data-active-tab="settings">
      <div class="discord-data-header reports-header">
        <div>
          <h2 class="discord-data-title">Reports & Admin</h2>
          <p class="discord-data-subtitle">Run GuildSync reports and administrative review tools. More options can be added here later.</p>
        </div>
      </div>

      <div class="reports-scroll-area">
        ${Vs()}
        ${Rs.render()}
        <section class="reports-list" aria-label="Available reports">
          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Associates Promotion Eligible</h3>
              <p>Shows Associates who have been in the guild at least two weeks, have purchased at least one raffle ticket, and are linked to Discord. Also shows otherwise eligible Associates who still need a Discord link reviewed.</p>
            </div>
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${Fe?"disabled":""}>
              ${Fe?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${Ge?"disabled":""}>
              ${Ge?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${Ue?"disabled":""}>
              ${Ue?"Loading...":"Run"}
            </button>
          </article>
        </section>

        <article class="report-option-card">
          <div class="report-option-copy">
            <h3>ESO / Discord Member Links</h3>
            <p>Review automatic ESO-to-Discord links, accept candidate matches, unlink blocked matches, or run the matcher again after roster or Discord refreshes.</p>
          </div>
          <button id="runMemberLinksReportButton" class="refresh-discord-button report-run-button" type="button" ${P?"disabled":""}>
            ${P?"Loading...":"Run"}
          </button>
        </article>
      </div>
    </div>
  `}function Us(){var t,e,n,r;B==="settings"&&(ns(Es,{refresh:!0}),Rs.wire({request:(i,s)=>L(i,s,12e4),rerender:f}),Hs(),(t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>Ws()),(e=document.querySelector("#runDiscordRankAuditReportButton"))==null||e.addEventListener("click",()=>Td()),(n=document.querySelector("#runDiscordLastSeenReportButton"))==null||n.addEventListener("click",()=>qd()),(r=document.querySelector("#runMemberLinksReportButton"))==null||r.addEventListener("click",()=>Wd()))}function Hs(t=document){var e,n,r,i,s;(e=t.querySelector("#cancelBonusDefaults"))==null||e.addEventListener("click",()=>{ce=!1,f()}),(n=t.querySelector("#resetBonusDefaults"))==null||n.addEventListener("click",()=>{ce=!0,f()}),(r=t.querySelector("#raffleBonusSettingsForm"))==null||r.addEventListener("submit",Ld),(i=t.querySelector("#raffleBonusSettingsForm"))==null||i.addEventListener("input",o=>{be={raffle:Te,values:new Map(new FormData(o.currentTarget))}}),(s=t.querySelector("#bonusRafflePicker"))==null||s.addEventListener("change",o=>{Te=o.currentTarget.value,ce=!1,be=null,f()})}function Vs(){var o;if(!U)return'<article class="report-option-card raffle-bonus-card"><div class="report-option-copy"><h3><button type="button" class="report-section-toggle" data-report-toggle="bonus" aria-expanded="false" aria-controls="raffleBonusContent">Raffle Bonus Tickets <span aria-hidden="true">\u25BE</span></button></h3><div id="raffleBonusContent" class="report-section-content" inert><div class="report-section-inner"><p>Loading raffle bonus settings...</p></div></div></div></article>';const t=!ce&&(be==null?void 0:be.raffle)===Te?be.values:null,e=It.find(a=>`${a.type}:${a.salesEnd}`===Te),n=ce&&(e==null?void 0:e.inheritedSettings)?e.inheritedSettings:e,r=e?{enabledByType:{...U.enabledByType,[e.type]:n.enabled},biweekly:e.type==="biweekly"?n.tiers:U.biweekly,monthly:e.type==="monthly"?n.tiers:U.monthly}:ce&&U.envDefaults||U,i=((o=k==null?void 0:k.user)==null?void 0:o.role)==="admin",s=(a,l)=>{var u,y;return`
    <fieldset class="raffle-bonus-tiers" ${i&&!ce?"":"disabled"}>
      <legend>${l}</legend>
      <label><input name="${a}-enabled" type="checkbox" ${(t?t.has(`${a}-enabled`):(y=(u=r.enabledByType)==null?void 0:u[a])!=null?y:r.enabled)?"checked":""}> Enable bonus tickets</label>
      ${r[a].map((b,g)=>{var _,S;return`
        <div class="raffle-bonus-tier">
          <span>Period ${g+1}${g===r[a].length-1?" (final)":""}</span>
          <label>Hours <input name="${a}-${g}-hours" type="number" min="1" step="1" required value="${h(String(t&&(_=t.get(`${a}-${g}-hours`))!=null?_:b.hours))}"></label>
          <label>Bonus % <input name="${a}-${g}-percent" type="number" min="0" max="100" step="0.1" required value="${h(String(t&&(S=t.get(`${a}-${g}-percent`))!=null?S:b.percent))}"></label>
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
            ${It.map(a=>`<option value="${h(`${a.type}:${a.salesEnd}`)}" ${Te===`${a.type}:${a.salesEnd}`?"selected":""}>${c(a.label)}${a.enabled?" (Bonuses)":""}</option>`).join("")}
          </select>
        </label>
        <p data-bonus-settings-source>Source: ${c(e?e.overridden?"Raffle override":"Saved raffle policy":U.source===".env"?"Default":U.source||"Default")}</p>
        ${ce?'<p role="status">Default Hours, Bonus %, and enabled settings are shown below. Click Save Bonus Settings to apply them, or Cancel default restoration to keep your previous settings.</p><button type="button" id="cancelBonusDefaults">Cancel default restoration</button>':""}
        <form id="raffleBonusSettingsForm">
          ${i?`<button type="button" id="resetBonusDefaults">Return to defaults</button><p>Restores Hours, Bonus %, and the enabled switch ${e?"from this raffle\u2019s inherited policy":"for both raffle types from their default rules"}. Changes apply only after Save Bonus Settings.</p>`:""}
          ${e?s(e.type,e.label):s("biweekly","Bi-Weekly Raffle")+s("monthly","50/50 Raffle")}
          ${i?'<button class="refresh-discord-button report-run-button" type="submit">Save Bonus Settings</button>':"<p>Admin access is required to change these settings.</p>"}
        </form>
        </div></div>
      </div>
    </article>`}async function Ld(t){t.preventDefault();const e=t.currentTarget,n=new FormData(e),r=It.find(o=>`${o.type}:${o.salesEnd}`===Te),i=o=>((r==null?void 0:r.type)===o?r.tiers:U[o]).map((a,l)=>({hours:Number(n.get(`${o}-${l}-hours`)),percent:Number(n.get(`${o}-${l}-percent`))})),s=r?{raffleType:r.type,salesEnd:r.salesEnd,enabled:n.has(`${r.type}-enabled`),tiers:i(r.type)}:{enabledByType:{biweekly:n.has("biweekly-enabled"),monthly:n.has("monthly-enabled")},biweekly:i("biweekly"),monthly:i("monthly")};try{ce&&(s.resetToDefaults=!0);const o=await L("guildsync:save-raffle-bonus-settings",s,3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||"Could not save raffle bonus settings.");U=o.bonusSettings,be=null,ce=!1,await me({silent:!0}),p("bonus-settings","Raffle bonus settings saved.",{ttlMs:m}),f()}catch(o){p("bonus-settings-error",w(o),{ttlMs:m})}}function Ws(){Yt=!0,dt="",f(),ka()}function ri(){Yt=!1,dt="",f()}function $d(){const t=Ed(),e=Rd(),n=Kt.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${Fe?"disabled":""}>${Fe?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(n))} total row${n===1?"":"s"}</span>
        </div>

        ${dt?`<div class="discord-data-error">${c(dt)}</div>`:""}

        <div class="report-results-content">
          ${Fe&&n===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!Fe&&n===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${n>0?Oo("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${n>0?Oo("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${c(Ys())}</textarea>
      </div>
    </div>
  `}function Ed(){return Kt.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function Rd(){return Kt.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function Oo(t,e,n,r){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${c(t)}</h4>
          <p>${c(e)}</p>
        </div>
        <span>${c(String(n.length))} row${n.length===1?"":"s"}</span>
      </div>
      ${n.length>0?Dd(n):`<div class="roster-history-muted report-section-empty">${c(r)}</div>`}
    </section>
  `}function Dd(t=Kt){return`
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
              <td>${Ai(e.rank||"")}</td>
              <td>${c(yr(e.joined))}</td>
              <td>${c(ue(e.purchased_tickets||0))}</td>
              <td class="associate-earliest-deposit-cell">${c(js(e))}</td>
              <td>${c(zs(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function js(t){const e=String((t==null?void 0:t.earliest_deposit_summary)||"").trim();if(e)return e;const n=String((t==null?void 0:t.earliest_deposit_date)||"").trim(),r=String((t==null?void 0:t.earliest_deposit_raffle_period)||"").trim();return[n,r].filter(Boolean).join(" | ")}function zs(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function Ys(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Earliest Deposit / Raffle","Discord Link"]];for(const e of Kt){const n=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([n,e.account_name||"",e.rank||"",yr(e.joined),ue(e.purchased_tickets||0),js(e),zs(e)])}return t.map(e=>e.map(vr).join("	")).join(`
`)}async function Md(){const t=Ys();if(await Sr(t)){p("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:m});return}const n=document.querySelector("#associateTicketReportTsv");n&&(n.focus(),n.select()),p("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function Td(){Jt=!0,ut="",f(),ya()}function ii(){Jt=!1,ut="",f()}function Bd(){const t=wn.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${Ge?"disabled":""}>${Ge?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${ut?`<div class="discord-data-error">${c(ut)}</div>`:""}

        <div class="report-results-content">
          ${Ge&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!Ge&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?Nd(wn):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${c(Qs())}</textarea>
      </div>
    </div>
  `}function Nd(t=wn){return`
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
              <td data-label="Discord Member" class="discord-rank-audit-member-cell">${c(Ks(e))}</td>
              <td data-label="Discord Rank Role" class="discord-rank-audit-discord-cell">${c(e.discord_rank||"No matching rank role")}</td>
              <td data-label="Linked ESO Account(s)" class="discord-rank-audit-eso-account-cell">${c(e.eso_accounts||"No linked ESO account")}</td>
              <td data-label="ESO Rank" class="discord-rank-audit-eso-rank-cell">${c(e.eso_rank||"None")}</td>
              <td data-label="Issue" class="discord-rank-audit-issue-cell">${c(Js(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Ks(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function Js(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function Qs(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of wn)t.push([Ks(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",Js(e)]);return t.map(e=>e.map(vr).join("	")).join(`
`)}async function Cd(){const t=Qs();if(await Sr(t)){p("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:m});return}const n=document.querySelector("#discordRankAuditReportTsv");n&&(n.focus(),n.select()),p("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function qd(){rt=!0,ft="",Qt="",f(),ba(),D.length===0&&!P&&mr({silent:!0})}function oi(){rt=!1,ft="",Qt="",He="",Et="",Ve="",f()}function xd(){const t=Li(),e=ki.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${Ue?"disabled":""}>${Ue?"Loading...":"Run Again"}</button>
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
            value="${h(Qt)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${He===""?"selected":""}>All link statuses</option>
            <option value="linked" ${He==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${He==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${He==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${ft?`<div class="discord-data-error discord-last-seen-report-error">${c(ft)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${Ue&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!Ue&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?Od(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${c(Zs(t))}</textarea>
      </div>
    </div>
  `}function Od(t=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${dn("name","Discord Member")}</th>
            <th>${dn("eso","Linked ESO Account")}</th>
            <th>${dn("date","Last Seen")}</th>
            <th>${dn("days","Days Since")}</th>
            <th>${dn("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr class="discord-last-seen-row ${h(Hd(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${h(kt(e).status)}" data-discord-last-seen-search="${h(Xs(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${Ud(e)}
                  <span>${c(Ft(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${Pd(e)}</td>
              <td>${c($i(e.last_seen))}</td>
              <td>${c(Ei(e.last_seen))}</td>
              <td>${c(or(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function dn(t,e){const n=Et===t,r=n?Ve==="asc"?"\u25B2":"\u25BC":"\u2195",i=n?`${e}: ${Ve==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${n?" active":""}" type="button" data-discord-last-seen-sort="${h(t)}" title="${h(i)}">
      <span>${c(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${c(r)}</span>
    </button>
  `}function Li(){const t=[...ki],e=Et,n=Ve;if(!e||!n)return t;const r=n==="desc"?-1:1;return t.sort((i,s)=>{var o,a;if(e==="date"){const l=Number(i.last_seen||0)||0,u=Number(s.last_seen||0)||0;return(l-u)*r}if(e==="days")return(Io(i.last_seen)-Io(s.last_seen))*r;if(e==="action")return or(i.last_seen_action).localeCompare(or(s.last_seen_action),void 0,{sensitivity:"base"})*r;if(e==="eso"){const l=kt(i),u=kt(s),y={linked:0,candidate:1,unlinked:2},b=((o=y[l.status])!=null?o:9)-((a=y[u.status])!=null?a:9);return b!==0?b*r:l.esoAccountName.localeCompare(u.esoAccountName,void 0,{sensitivity:"base"})*r}return Ft(i).localeCompare(Ft(s),void 0,{sensitivity:"base"})*r})}function Id(t){Et!==t?(Et=t,Ve="asc"):Ve==="asc"?Ve="desc":(Et="",Ve=""),f()}function Ft(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function Xs(t){return[Ft(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,Fd(t),$i(t==null?void 0:t.last_seen),Ei(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function kt(t){const e=au(t==null?void 0:t.discord_id),n=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),r=String((e==null?void 0:e.eso_account_name)||"").trim();return n==="linked"&&r?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:r,title:`Linked ESO account: ${r}`}:(n==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&r?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:r,title:`Fuzzy ESO account candidate: ${r}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function Pd(t){const e=kt(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${h(e.className)}"
      title="${h(e.title)}"
      aria-label="${h(e.label)}"
      role="img"
    ></span>
  `}function Fd(t){const e=kt(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function Gd(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!n)return"";if(/^https?:\/\//i.test(e))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function Ud(t){const e=Ft(t),n=e?e.slice(0,2).toUpperCase():"?",r=Gd(t);return r?`<span class="discord-member-avatar"><img src="${h(r)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${c(n)}</span>`}function $i(t){const e=Number(t);if(!e)return"Never";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t||"");const r=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(n).reduce((i,s)=>(i[s.type]=s.value,i),{});return`${r.month}/${r.day}/${r.year} ${r.hour}:${r.minute} ${r.dayPeriod}`}function Hd(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const n=(Date.now()-e*1e3)/864e5;return n>30?"discord-last-seen-red":n>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function Ei(t){const e=Number(t);if(!e)return"Never";const n=Date.now()-e*1e3;if(!Number.isFinite(n))return"";if(n<0)return"0 days";const r=Math.floor(n/864e5);return`${r} day${r===1?"":"s"}`}function Io(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const n=Date.now()-e*1e3;return Number.isFinite(n)?n<0?0:Math.floor(n/864e5):Number.POSITIVE_INFINITY}function or(t){return String(t||"").trim()||"None tracked"}function Zs(t=Li()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const n of t){const r=kt(n);e.push([Ft(n),r.label||"",r.esoAccountName||"",$i(n==null?void 0:n.last_seen),Ei(n==null?void 0:n.last_seen),or(n==null?void 0:n.last_seen_action),(n==null?void 0:n.username)||"",(n==null?void 0:n.discord_id)||""])}return e.map(n=>n.map(vr).join("	")).join(`
`)}async function Vd(){const t=Li().filter(i=>{const s=Ae(Qt),o=String(He||"").trim().toLowerCase(),a=!s||Ae(Xs(i)).includes(s),l=!o||kt(i).status===o;return a&&l}),e=Zs(t);if(await Sr(e)){p("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:m});return}const r=document.querySelector("#discordLastSeenReportTsv");r&&(r.focus(),r.select()),p("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function Wd(){xe=!0,W="",f(),D.length===0&&!P&&mr({silent:!0})}function si(){xe=!1,pr="",st="",En="",Rn="",Re=-1,f()}function ea(t){return[...new Set((Array.isArray(D)?D:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function ta(t,e){return t.map(n=>`<option value="${h(n)}" ${e===n?"selected":""}>${c(n)}</option>`).join("")}function jd(){return ta(ea("link_status"),En)}function zd(){return ta(ea("link_method"),Rn)}function Yd(){return`
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
          <button id="refreshMemberLinksButton" class="clear-discord-filters-button" type="button" ${P?"disabled":""}>Refresh Links</button>
          <button id="runMemberAutoLinkButton" class="refresh-discord-button" type="button" ${P?"disabled":""}>${P?"Running...":"Run Auto-Linking"}</button>
          <span class="roster-history-muted">${c(String(D.length))} link/candidate row${D.length===1?"":"s"}</span>
        </div>

        <div class="member-links-report-filter-row">
          <input
            id="memberLinksReportSearchInput"
            class="member-links-report-search-input"
            type="search"
            autocomplete="off"
            spellcheck="false"
            placeholder="Search Discord account or ESO member..."
            value="${h(pr)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${En===""?"selected":""}>All statuses</option>
            ${jd()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${Rn===""?"selected":""}>All methods</option>
            ${zd()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${st===""?"selected":""}>All actions</option>
            <option value="needs-link" ${st==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${st==="can-unlink"?"selected":""}>Unlink Available</option>
            <option value="can-unblock" ${st==="can-unblock"?"selected":""}>Unblock Available</option>
          </select>
        </div>

        ${W?`<div class="discord-data-error member-links-report-error">${c(W)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${Xd()}
        </div>
      </div>
    </div>
  `}function na(){var n,r,i,s,o,a;if(!xe)return;(n=document.querySelector("#closeMemberLinksReportButton"))==null||n.addEventListener("click",si),(r=document.querySelector("#refreshMemberLinksButton"))==null||r.addEventListener("click",()=>mr()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>ou());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",Zd),t.addEventListener("keydown",ru)),(s=document.querySelector("#memberLinksReportActionFilter"))==null||s.addEventListener("change",eu),(o=document.querySelector("#memberLinksReportStatusFilter"))==null||o.addEventListener("change",tu),(a=document.querySelector("#memberLinksReportMethodFilter"))==null||a.addEventListener("change",nu),Tn(),document.querySelectorAll("[data-accept-member-candidate]").forEach(l=>{l.addEventListener("click",()=>ia(l.dataset.acceptMemberCandidate||"",l.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(l=>{l.addEventListener("click",()=>su(l.dataset.unlinkMemberLink||"",l.dataset.unlinkMemberLinkDiscordId||""))}),document.querySelectorAll("[data-unblock-member-auto-link]").forEach(l=>{l.addEventListener("click",()=>oa(l.dataset.unblockMemberAutoLink||"",l.dataset.unblockMemberAutoLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",l=>{l.target===e&&si()})}function Po(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function Fo(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Kd(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Jd(t){return[...Array.isArray(t)?t:[]].sort((e,n)=>{const r=Po(e)-Po(n);if(r!==0)return r;const i=Fo(e).localeCompare(Fo(n),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((n==null?void 0:n.discord_user_id)||""),void 0,{sensitivity:"base"})})}function Qd(t){const e=ai(t);let n="";e==="Username"?n=(t==null?void 0:t.discord_username)||"":e==="Global Name"?n=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(n=(t==null?void 0:t.discord_server_nickname)||""),n||(n=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const r=e?` <span class="member-link-report-match-field">(${c(e)})</span>`:"";return`<span class="member-link-report-discord-name">${c(n)}</span>${r}`}function Xd(){return P&&D.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(D)||D.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${Jd(D).map(e=>{var s;const n=String(e.link_status||"").trim().toLowerCase(),r=String(e.link_method||"").trim().toLowerCase(),i=Qd(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${h(Kd(e))}"
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
  `}function ra(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function Go(t){const e=ra();if(e.forEach(r=>r.classList.remove("member-links-report-row-active")),e.length===0){Re=-1;return}Re=Math.max(0,Math.min(t,e.length-1));const n=e[Re];n.classList.add("member-links-report-row-active"),n.scrollIntoView({block:"nearest"})}function Tn(){const t=Ae(pr),e=String(st||"").trim().toLowerCase(),n=String(En||"").trim().toLowerCase(),r=String(Rn||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let s=0;i.forEach(a=>{const l=Ae(a.dataset.memberLinksReportSearch||""),u=String(a.dataset.memberLinksReportAction||"").trim().toLowerCase(),y=String(a.dataset.memberLinksReportStatus||"").trim().toLowerCase(),b=String(a.dataset.memberLinksReportMethod||"").trim().toLowerCase(),N=(!t||l.includes(t))&&(!e||u===e)&&(!n||y===n)&&(!r||b===r);a.hidden=!N,a.classList.remove("member-links-report-row-active"),N&&(s+=1)});const o=document.querySelector("#memberLinksReportSearchEmpty");o&&(o.hidden=s!==0),Re=-1}function Zd(t){pr=t.target.value||"",Tn()}function eu(t){st=t.target.value||"",Tn()}function tu(t){En=t.target.value||"",Tn()}function nu(t){Rn=t.target.value||"",Tn()}function ru(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=ra();if(e.length===0)return;if(t.key==="ArrowDown"){const r=Re<0?0:Re+1;Go(r>=e.length?e.length-1:r);return}const n=Re<0?e.length-1:Re-1;Go(n<0?0:n)}function Wn(){return B==="discord-members"||B==="eso-members"||Oe||xe||rt}function iu(t={}){if(!Array.isArray(t.links))return;const e=JSON.stringify(D)!==JSON.stringify(t.links);D=t.links,e&&Wn()&&zn()}function Uo(){const t=document.querySelector("#runMemberLinksReportButton");t&&(t.disabled=P,t.textContent=P?"Loading...":"Run")}async function mr(t={}){if(!(d!=null&&d.connected)){W="You must be connected to load member links.",Wn()&&zn();return}P=!0,W="",Uo(),!t.silent&&Wn()&&zn();try{const e=await L("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");D=Array.isArray(e.links)?e.links:[]}catch(e){W=w(e)}finally{P=!1,Uo(),Wn()&&zn()}}async function ou(){if(!(d!=null&&d.connected)||!k.logged_in){W="You must be logged in and connected to run auto-linking.",f();return}P=!0,W="",f();try{const t=await L("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");D=Array.isArray(t.links)?t.links:[],p("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:m})}catch(t){W=w(t)}finally{P=!1,f()}}async function ia(t,e=""){try{const n=await L("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to accept candidate.");D=Array.isArray(n.links)?n.links:D,p("member-link-accepted",n.message||"Candidate accepted as a link.",{ttlMs:m})}catch(n){W=w(n),p("member-link-accept-error",W,{ttlMs:m})}}async function oa(t,e=""){if(!await wi({title:"Remove Auto-Link Block?",message:`Remove the blocked auto-match record between ${t} and this Discord account? Auto-linking will run immediately and this screen will refresh to show whether the pair linked again.`,confirmLabel:"Unblock",cancelLabel:"Cancel",confirmClass:"danger"}))return!1;P=!0,W="",f();try{const r=await L("guildsync:unblock-member-auto-link",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to remove auto-link block.");D=Array.isArray(r.links)?r.links:D;const i=he(t),s=String(e||"").trim(),o=r.refreshedPair||D.find(u=>he(u.eso_account_name)===i&&String(u.discord_user_id||"").trim()===s),a=String((o==null?void 0:o.link_status)||"").trim().toLowerCase(),l=a==="linked"?" It linked again automatically.":a==="candidate"?" It is now showing as a candidate.":" No automatic link was recreated.";return p("member-link-unblocked",`${r.message||"Auto-link block removed."}${l}`,{ttlMs:m}),!0}catch(r){return W=w(r),p("member-link-unblock-error",W,{ttlMs:m}),!1}finally{P=!1,f()}}async function su(t,e=""){if(!!await wi({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const r=await L("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to unlink member.");D=Array.isArray(r.links)?r.links:D,p("member-link-unlinked",r.message||"Member link removed.",{ttlMs:m})}catch(r){W=w(r)}f()}}function he(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function gr(t){const e=he(t);return e?D.filter(n=>he(n.eso_account_name)===e):[]}function br(t){const e=String(t||"").trim();return e?D.filter(n=>String(n.discord_user_id||"").trim()===e):[]}function sa(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const n=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(n.length>0){const i=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const s=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return s||n[0]}const r=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return r||e[0]}function au(t){return sa(br(t))}function cu(t){return`${he(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function Ri(){return E?E.mode==="discord-to-eso"?br(E.discordUserId):gr(E.esoAccountName):[]}function lu(t){const e=String(t||"").trim(),n=K.find(r=>String(r.discord_id||"").trim()===e);return n&&(n.server_nickname||n.global_name||n.username||n.discord_id)||e}function aa(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?br(t.discordUserId):gr(t.esoAccountName),r=sa(n),i=String((r==null?void 0:r.link_status)||"").trim().toLowerCase(),s=n.filter(a=>String(a.link_status||"").trim().toLowerCase()==="linked").length,o=n.filter(a=>String(a.link_status||"").trim().toLowerCase()==="candidate").length;return s>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?s===1?r.eso_account_name:`${s} ESO accounts`:s===1?r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member":`${s} Discord accounts`}`}:i==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?r.eso_account_name:r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member"}`}:i==="blocked"||Number((r==null?void 0:r.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function ca(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,r=aa(t);return`
    <button
      class="member-link-status-dot member-link-status-${h(r.className)}"
      type="button"
      title="${h(r.title)}"
      aria-label="${h(r.label)}"
      data-open-member-link-dialog="${h(e)}"
      data-member-link-value="${h(n||"")}"
    ></button>
  `}function du(){return E?E.mode==="discord-to-eso"?lu(E.discordUserId):E.esoAccountName||"":""}function la(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function ai(t){const e=la((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const n=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(n.includes("discord_username")||n.includes("username"))return"Username";if(n.includes("discord_display_name")||n.includes("global")||n.includes("display"))return"Global Name";if(n.includes("discord_server_nickname")||n.includes("server")||n.includes("nickname"))return"Server Nickname";const r=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(r==="exact"||r==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",s=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const a of s){const l=uu(i,a.value);(!o||l>o.score)&&(o={...a,score:l})}if(o&&o.score>0)return o.field}return""}function Ae(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function uu(t,e){const n=Ae(t),r=Ae(e);if(!n||!r)return 0;if(n===r)return 100;if((n.includes(r)||r.includes(n))&&Math.min(n.length,r.length)>=4)return 88;const i=Math.abs(n.length-r.length),s=[...n].findIndex((a,l)=>a!==r[l]),o=s===-1?Math.min(n.length,r.length):s;return Math.max(0,Math.min(75,Math.round(o*10-i*3)))}function fu(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function hu(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function pu(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),n=fu(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${c(n)}</span>`}function mu(t){var a;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",n=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",r=String(t.link_status||"").trim().toLowerCase(),o=r==="linked"?`<button
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
        <div><span>Status:</span> ${pu(t)} \xB7 ${c(hu(t.link_method))} \xB7 ${c(String((a=t.match_confidence)!=null?a:""))}% \xB7 ${c(n)}</div>
        ${ai(t)?`<div><span>Matched:</span> Matched on ${c(ai(t))}</div>`:""}
      </div>
      ${o}
    </div>
  `}function gu(){const t=Ri();return t.length?[...t].sort((n,r)=>{var l,u;const i=String(n.link_status||"").trim().toLowerCase(),s=String(r.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},a=((l=o[i])!=null?l:9)-((u=o[s])!=null?u:9);return a!==0?a:Number(r.match_confidence||0)-Number(n.match_confidence||0)}).map(n=>mu(n)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function bu(){if(Ot)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(Ce)return`<div class="discord-data-error">${c(Ce)}</div>`;if(!Array.isArray(ht)||ht.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(Ri().map(n=>cu(n))),e=[...ht].filter(n=>{const r=(E==null?void 0:E.mode)==="discord-to-eso"?`${he(n.account_name)}::${String(E.discordUserId||"").trim()}`:`${he(E==null?void 0:E.esoAccountName)}::${String(n.discord_id||"").trim()}`;return!t.has(r)}).sort((n,r)=>{const i=Number(r.confidence||0)-Number(n.confidence||0);return i!==0?i:Ho(n).localeCompare(Ho(r),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(n=>yu(n)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function Ho(t){return((E==null?void 0:E.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function yu(t,e={}){var b,g,_;const n=(E==null?void 0:E.mode)||"",r=n==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=la(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),s=n==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[s,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),a=n==="discord-to-eso"?t.account_name:t.discord_id,l=e.disabled===!0,u=[r,s,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),y=[r,o,`${(b=t.confidence)!=null?b:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${h(a||"")}" data-member-link-option-search="${h(u)}" title="${h(y)}" ${l?"disabled":""}>
      <span class="member-link-option-name" title="${h(r||"")}">${c(r||"")}</span>
      <span class="member-link-option-subtitle" title="${h(o||"")}">${c(o||"")}</span>
      <span class="member-link-option-confidence" title="${h(String((g=t.confidence)!=null?g:0))}%">${c(String((_=t.confidence)!=null?_:0))}%</span>
    </button>
  `}function ku(){const t=(E==null?void 0:E.mode)||"",e=du(),n=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
            ${gu()}
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
              value="${h(Dn)}"
            />
            ${bu()}
          </section>
        </div>

      </div>
    </div>
  `}async function Di(t,e){if(!(d!=null&&d.connected)||!R()){p("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:m});return}Oe=!0,E=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},ht=[],Ot=!0,Ce="",Dn="",ge=-1,f();try{if(!Array.isArray(D)||D.length===0){const i=await L("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(D=Array.isArray(i.links)?i.links:[])}const r=await L("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load link suggestions.");ht=Array.isArray(r.options)?r.options:[]}catch(n){Ce=w(n)}finally{Ot=!1,f()}}function Gt(){document.removeEventListener("keydown",ci),Oe=!1,E=null,ht=[],Ot=!1,Ce="",Dn="",ge=-1,f()}function da(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function Vo(t){const e=da();if(e.forEach(r=>r.classList.remove("member-link-option-row-active")),e.length===0){ge=-1;return}ge=Math.max(0,Math.min(t,e.length-1));const n=e[ge];n.classList.add("member-link-option-row-active"),n.scrollIntoView({block:"nearest"})}function ua(){const t=Ae(Dn),e=[...document.querySelectorAll(".member-link-option-row")];let n=0;e.forEach(i=>{const s=Ae(i.dataset.memberLinkOptionSearch||i.textContent||""),o=!t||s.includes(t);i.hidden=!o,i.classList.remove("member-link-option-row-active"),o&&(n+=1)});const r=document.querySelector("#memberLinkSuggestionSearchEmpty");r&&(r.hidden=n!==0),ge=-1}function vu(t){Dn=t.target.value||"",ua()}function Su(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=da();if(e.length===0)return;if(t.key==="ArrowDown"){const r=ge<0?0:ge+1;Vo(r>=e.length?e.length-1:r);return}const n=ge<0?e.length-1:ge-1;Vo(n<0?0:n)}function ci(t){!Oe||t.key==="Escape"&&(t.preventDefault(),Gt())}async function wu(t){if(!(!E||!t))try{const e=E.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:E.discordUserId}:{esoAccountName:E.esoAccountName,discordUserId:t},n=await L("guildsync:manual-link-member",e,3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to link members.");D=Array.isArray(n.links)?n.links:D,p("member-link-saved",n.message||"Member link saved.",{ttlMs:m}),Gt()}catch(e){Ce=w(e),f()}}async function _u(t,e=""){await ia(t,e),Gt()}async function fa(){if(!!E){Ot=!0,Ce="",f();try{const t=E.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:E.discordUserId}:{mode:"eso-to-discord",accountName:E.esoAccountName},e=await L("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");ht=Array.isArray(e.options)?e.options:[]}catch(t){Ce=w(t)}finally{Ot=!1,f()}}}async function Au(t="",e=""){const n=Ri().find(i=>he(i.eso_account_name)===he(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!n||!await wi({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await L("guildsync:manual-unlink-member",{esoAccountName:n.eso_account_name,discordUserId:n.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");D=Array.isArray(i.links)?i.links:D,p("member-link-unlinked",i.message||"Member link removed.",{ttlMs:m}),await fa()}catch(i){Ce=w(i),f()}}async function Lu(t="",e=""){await oa(t,e)&&await fa()}function ha(){var n;if(!Oe)return;document.removeEventListener("keydown",ci),document.addEventListener("keydown",ci),(n=document.querySelector("#closeMemberLinkDialogButton"))==null||n.addEventListener("click",Gt);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",vu),t.addEventListener("keydown",Su),ua()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(r=>{r.addEventListener("click",()=>Au(r.dataset.unlinkEsoAccount||"",r.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-unblock-dialog-member-auto-link]").forEach(r=>{r.addEventListener("click",()=>Lu(r.dataset.unblockEsoAccount||"",r.dataset.unblockDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(r=>{r.addEventListener("click",()=>wu(r.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(r=>{r.addEventListener("click",()=>_u(r.dataset.acceptDialogMemberCandidate||"",r.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",r=>{r.target===e&&Gt()})}function pa(){var e,n,r;if(!Yt)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",ri),(n=document.querySelector("#rerunAssociateTicketReportButton"))==null||n.addEventListener("click",()=>ka()),(r=document.querySelector("#copyAssociateTicketReportGridButton"))==null||r.addEventListener("click",()=>Md());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&ri()})}function ma(){var e,n,r;if(!Jt)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",ii),(n=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||n.addEventListener("click",()=>ya()),(r=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||r.addEventListener("click",()=>Cd());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&ii()})}function ga(){var r,i,s;if(!rt)return;(r=document.querySelector("#closeDiscordLastSeenReportButton"))==null||r.addEventListener("click",oi),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>ba()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>Vd()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(o=>{o.addEventListener("click",()=>Id(o.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",$u);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",Eu),Mi();const n=document.querySelector(".discord-last-seen-report-overlay");n&&n.addEventListener("click",o=>{o.target===n&&oi()})}function $u(t){Qt=t.target.value||"",Mi()}function Eu(t){He=t.target.value||"",Mi()}function Mi(){const t=Ae(Qt),e=String(He||"").trim().toLowerCase(),n=[...document.querySelectorAll("[data-discord-last-seen-row]")];let r=0;n.forEach(s=>{const o=Ae(s.dataset.discordLastSeenSearch||s.textContent||""),a=String(s.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),y=(!t||o.includes(t))&&(!e||a===e);s.hidden=!y,y&&(r+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=r!==0)}async function ba(){if(!(d!=null&&d.connected)||!R()){ft="You must be logged in and connected to run this report.",f();return}Ue=!0,ft="",f();try{const t=await L("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");K=Gi(t.members),fr=Ui(t.roles),ki=[...K]}catch(t){ft=w(t)}finally{Ue=!1,f(),q("discordLastSeenReportSearchInput")}}async function ya(){if(!(d!=null&&d.connected)||!R()){ut="You must be logged in and connected to run this report.",f();return}Ge=!0,ut="",f();try{const t=await L("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");wn=Array.isArray(t.rows)?t.rows:[]}catch(t){ut=w(t)}finally{Ge=!1,f()}}async function ka(){if(!(d!=null&&d.connected)||!R()){dt="You must be logged in and connected to run this report.",f();return}Fe=!0,dt="",f();try{const t=await L("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Kt=Array.isArray(t.rows)?t.rows:[]}catch(t){dt=w(t)}finally{Fe=!1,f()}}function Dt(){const t=String(tn||"").trim().toLowerCase(),e={account_name:"Anonymous",rank:"Manual Entry"},n=new Set(["anonymous"]),r=te.filter(i=>String(i.account_name||"").trim()).filter(i=>{const o=String(i.account_name||"").trim().toLowerCase();return!o||n.has(o)||t&&!o.includes(t)?!1:(n.add(o),!0)}).slice().sort((i,s)=>{const o=String(i.account_name||"").toLowerCase(),a=String(s.account_name||"").toLowerCase(),l=t&&o.startsWith(t)?0:1,u=t&&a.startsWith(t)?0:1;return l!==u?l-u:o.localeCompare(a)}).slice(0,19);return[e,...r]}function va(t=Dt()){const e=String(T.accountName||"").trim();return t.length===0?'<div class="roster-history-muted manual-ticket-no-matches">No matching guild members found.</div>':t.map((n,r)=>`
        <button class="roster-history-match${r===H||n.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${h(n.account_name)}" role="option" aria-selected="${r===H||n.account_name===e?"true":"false"}">
          <span>${c(n.account_name)}</span>
          <strong>${c(n.rank||"")}</strong>
          ${r===H?"<small>Enter</small>":""}
        </button>
      `).join("")}function Sa(){document.querySelectorAll("[data-manual-ticket-account]").forEach(t=>{t.addEventListener("mousedown",e=>{e.preventDefault()}),t.addEventListener("click",()=>{wa(t.dataset.manualTicketAccount||"")})})}function xr(){const t=document.querySelector("#manualTicketMatchList");if(!t)return;const e=Dt();H>=e.length&&(H=e.length>0?e.length-1:-1),t.innerHTML=va(e),Sa()}function wa(t){const e=String(t||"").trim();T.accountName=e,tn=e,le=!1,H=-1,Q="",f()}function q(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const n=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(n,n)},0)}function Ru(){const t=le?Dt():[],e=String(T.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Entry</h3>
            <p>Add a manual banking or raffle entry such as FFTG, officer corrections, or anonymous gold.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${Q?`<div class="discord-data-error">${c(Q)}</div>`:""}

        <div class="manual-ticket-form">
          <div class="manual-ticket-member-picker">
            <label class="manual-ticket-member-field" for="manualTicketAccountSearchInput">
              <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${h(tn)}" autocomplete="off" />
            </label>

            ${le?`
              <div id="manualTicketMatchList" class="roster-history-match-list manual-ticket-match-list" role="listbox" aria-label="Matching guild members">
                ${va(t)}
              </div>
            `:""}
          </div>

          ${e?`<div class="roster-history-muted manual-ticket-selected-member">Selected: ${c(e)}</div>`:""}

          <div class="manual-ticket-entry-row">
            <div class="manual-ticket-type-field" role="group" aria-label="Ticket type">
              <button class="manual-ticket-type-label${T.ticketType!=="monthly"?" is-selected":""}" type="button" data-manual-ticket-type="biweekly" aria-pressed="${T.ticketType!=="monthly"?"true":"false"}">Bi-Weekly</button>
              <button class="manual-ticket-type-switch" type="button" data-manual-ticket-toggle="true" data-selected-type="${T.ticketType==="monthly"?"monthly":"biweekly"}" aria-label="Toggle ticket type. Current selection is ${T.ticketType==="monthly"?"50/50":"Bi-Weekly"}">
                <span class="manual-ticket-type-track" aria-hidden="true"></span>
                <span class="manual-ticket-type-thumb" aria-hidden="true"></span>
              </button>
              <button class="manual-ticket-type-label${T.ticketType==="monthly"?" is-selected":""}" type="button" data-manual-ticket-type="monthly" aria-pressed="${T.ticketType==="monthly"?"true":"false"}">50/50</button>
            </div>
            <label class="manual-ticket-note-field">
              <textarea id="manualTicketNoteInput" class="discord-search-input manual-ticket-note-input" rows="4" placeholder="Enter a reason such as FFTG">${c(T.note)}</textarea>
            </label>
            <div class="manual-ticket-side-fields">
              <label class="manual-ticket-gold-field">
                <input id="manualTicketGoldInput" class="discord-search-input manual-ticket-gold-input" type="number" min="0" step="1" inputmode="numeric" placeholder="Gold Value" value="${h(T.goldValue)}" />
                <span class="manual-ticket-gold-coin" aria-hidden="true"></span>
              </label>
              <label class="manual-ticket-count-field">
                <div class="manual-ticket-number-wrap">
                  <input id="manualTicketCountInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${h(T.tickets)}" />
                  <div class="manual-ticket-number-buttons" aria-hidden="true">
                    <button id="manualTicketCountUpButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2303</button>
                    <button id="manualTicketCountDownButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2304</button>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div class="manual-ticket-actions">
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${tr?"disabled":""}>${tr?"Saving...":"Add Manual Entry"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function _a(){var s,o,a,l,u,y;if(!Be)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{Be=!1,f()});const t=document.querySelector("#manualTicketAccountSearchInput");if(t){const b=({rerender:g=!1}={})=>{if(le=!0,H=Dt().length>0?0:-1,g){f(),q("manualTicketAccountSearchInput");return}xr()};t.addEventListener("focus",()=>{le||b({rerender:!0})}),t.addEventListener("click",()=>{le||b({rerender:!0})}),t.addEventListener("input",g=>{tn=g.target.value||"",T.accountName="",le=!0,H=Dt().length>0?0:-1,xr()}),t.addEventListener("keydown",g=>{if(g.key==="Escape")return;if(!le){(g.key==="ArrowDown"||g.key==="ArrowUp")&&(g.preventDefault(),b({rerender:!0}));return}const _=Dt();if(g.key==="ArrowDown"||g.key==="ArrowUp"){if(_.length===0)return;g.preventDefault();const $=g.key==="ArrowDown"?1:-1;H=((H<0?0:H)+$+_.length)%_.length,xr();return}if(g.key!=="Enter")return;g.preventDefault();const S=_[H>=0?H:0];S!=null&&S.account_name&&wa(S.account_name)})}Sa(),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",b=>{T.note=b.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(b=>{b.addEventListener("click",()=>{const g=String(b.dataset.manualTicketType||"").trim().toLowerCase();T.ticketType=g==="monthly"?"monthly":"biweekly",f()})}),(a=document.querySelector("[data-manual-ticket-toggle]"))==null||a.addEventListener("click",()=>{T.ticketType=T.ticketType==="monthly"?"biweekly":"monthly",f()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",b=>{const g=String(b.target.value||"").replace(/\D/g,"");b.target.value!==g&&(b.target.value=g),T.goldValue=g});const n=document.querySelector("#manualTicketCountInput");n==null||n.addEventListener("input",b=>{const g=String(b.target.value||"").replace(/\D/g,"");b.target.value!==g&&(b.target.value=g),T.tickets=g});const r=b=>{const g=Number(T.tickets)||0,_=Math.max(0,g+b);T.tickets=String(_),n&&(n.value=T.tickets,n.focus())};(l=document.querySelector("#manualTicketCountUpButton"))==null||l.addEventListener("click",()=>r(1)),(u=document.querySelector("#manualTicketCountDownButton"))==null||u.addEventListener("click",()=>r(-1)),(y=document.querySelector("#saveManualBiweeklyTicketButton"))==null||y.addEventListener("click",()=>Du());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",b=>{b.target===i&&(Be=!1,f())})}async function Du(){const t=String(T.accountName||"").trim(),e=String(T.note||"").trim(),n=String(T.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",r=Number(String(T.goldValue||"").trim()||0),i=Number(String(T.tickets||"").trim()||0);if(le){Q="Select a matching guild member or Anonymous from the list before saving.",f(),q("manualTicketAccountSearchInput");return}if(!t){Q="Select a matching guild member or Anonymous from the list before saving.",f(),q("manualTicketAccountSearchInput");return}if(!Number.isFinite(r)||r<0){Q="Gold value must be zero or greater.",f();return}if(!Number.isFinite(i)||i<0){Q="Tickets must be zero or greater.",f();return}const s=t.toLowerCase()==="anonymous";if(s&&Math.floor(i)>0){Q="Anonymous cannot be awarded tickets. Use 0 tickets and enter a gold value.",f();return}if(Math.floor(r)===0&&Math.floor(i)===0){Q=s?"Enter a gold value for Anonymous when tickets are 0.":"Enter gold or tickets. Both cannot be zero.",f();return}tr=!0,Q="",f();try{const o=await L("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:n,gold_value:Math.floor(r),tickets:Math.floor(i)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Failed to add manual entry.");Be=!1,T={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},tn="",H=-1,le=!1,await me({silent:!0}),p("manual-ticket-added",o.message||"Manual entry added.",{ttlMs:m})}catch(o){Q=w(o)}finally{tr=!1,f()}}async function Aa(t=""){const e=String(t||"").trim();if(!!e){zt=!0,Sn=e,Ke=[],er=!0,lt=!1,Je="",Ct="",f();try{const n=await L("guildsync:request-roster-member-notes",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster notes.");Ke=Array.isArray(n.notes)?n.notes:[]}catch(n){Je=w(n)}finally{er=!1,f()}}}function li(){zt=!1,Sn="",Ke=[],er=!1,lt=!1,Je="",Ct="",f()}function Mu(){var n,r;if(!zt)return;(n=document.querySelector("#closeRosterNotesButton"))==null||n.addEventListener("click",li);const t=document.querySelector("#rosterNotesNewNote");t&&t.addEventListener("input",i=>{Ct=i.target.value||""}),(r=document.querySelector("#saveRosterNoteButton"))==null||r.addEventListener("click",()=>Tu());const e=document.querySelector(".roster-notes-overlay");e&&e.addEventListener("click",i=>{i.target===e&&li()})}async function Tu(){const t=String(Ct||"").trim();if(!t){Je="Enter a note before saving.",f();return}lt=!0,Je="",f();try{const e=await L("guildsync:add-roster-member-note",{account_name:Sn,note:t},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to save roster note.");e.note&&(Ke=[...Ke,e.note]),Ct="";const n=te.find(r=>he(r.account_name)===he(Sn));n&&(n.note_count=Number(n.note_count||0)+1)}catch(e){Je=w(e)}finally{lt=!1,f()}}function La(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>nn());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{Nt=!0,De="",f()});const n=document.querySelector("#rosterMemberSearch");n&&(n.addEventListener("input",o=>{Zn=o.target.value||"",Qr=o.target.selectionStart,Xr=o.target.selectionEnd,O=-1,f({restoreRosterSearchFocus:!0})}),n.addEventListener("keydown",Bu)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{fd(o.dataset.rosterSortColumn||"account_name")})});const r=document.querySelector("#rosterRankFilter");r&&r.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(ct.add(a),O=-1,f())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRosterRankFilter||"";ct.delete(a),O=-1,f()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&($t.add(a),O=-1,f())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRosterLinkStatusFilter||"";$t.delete(a),O=-1,f()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>Di(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))}),document.querySelectorAll("[data-open-roster-notes]").forEach(o=>{o.addEventListener("click",()=>Aa(o.dataset.openRosterNotes||""))}),Mu();const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{Zn="",ct.clear(),$t.clear(),Ee="",j="",O=-1,f()}),Nu()}function Bu(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){O=-1;return}t.preventDefault(),t.key==="ArrowDown"?O=O<0?0:Math.min(O+1,e.length-1):t.key==="ArrowUp"&&(O=O<0?e.length-1:Math.max(O-1,0)),e.forEach((r,i)=>{r.classList.toggle("roster-search-active-row",i===O)});const n=e[O];n&&typeof n.scrollIntoView=="function"&&n.scrollIntoView({block:"nearest",inline:"nearest"})}function Nu(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{Nt=!1,f()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",n=>{if(vn=n.target.value||"",oe=-1,!vn.trim()){clearTimeout(qr),De="",Z=[],tt="",ze=[],Ye=!1,f(),q("rosterHistorySearchInput");return}clearTimeout(qr),qr=setTimeout(()=>{Ou({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(Z.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;oe=((oe<0?0:oe)+i+Z.length)%Z.length,f(),q("rosterHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=Z[oe>=0?oe:0];r!=null&&r.account_name&&jo(r.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(n=>{n.addEventListener("click",()=>{jo(n.dataset.rosterHistoryAccount||"")})})}function $a(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{qt=!1,f()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",n=>{Pe=n.target.value||"",se=-1,it+=1;const r=it;if(clearTimeout(No),!Pe.trim()){Me="",ee=[],xt="",bt="",Qe=[],Xe=!1,f(),q("discordHistorySearchInput");return}No=setTimeout(()=>{Cu({auto:!0,keepFocus:!0,generation:r})},Hl)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(ee.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;se=((se<0?0:se)+i+ee.length)%ee.length,f(),q("discordHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=ee[se>=0?se:0];r!=null&&r.discord_id&&Wo(r.discord_id,ni(r))})),document.querySelectorAll("[data-discord-history-id]").forEach(n=>{n.addEventListener("click",()=>{Wo(n.dataset.discordHistoryId||"",n.dataset.discordHistoryName||"")})})}async function Cu(t={}){const e=Number.isInteger(t.generation)?t.generation:++it,n=Pe.trim();if(e===it){if(!n){Me="",ee=[],se=-1,xt="",bt="",Qe=[],Xe=!1,f(),t.keepFocus&&q("discordHistorySearchInput");return}Xe=!0,Me="",ee=[],se=-1,xt="",bt="",Qe=[],f(),t.keepFocus&&q("discordHistorySearchInput");try{const r=await L("guildsync:request-discord-member-history",{query:n},3e4);if(e!==it||n!==Pe.trim())return;if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search Discord member history.");ee=qu(r.matches),se=ee.length>0?0:-1}catch(r){if(e!==it||n!==Pe.trim())return;Me=w(r)}finally{if(e!==it||n!==Pe.trim())return;Xe=!1,f(),t.keepFocus&&q("discordHistorySearchInput")}}}async function Wo(t,e="",n={}){const r=String(t||"").trim();if(!!r){xt=r,bt=String(e||r).trim(),Pe=bt,Qe=[],Xe=!0,Me="",f();try{const i=await L("guildsync:request-discord-member-history-events",{discord_id:r},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");Qe=xu(i.events)}catch(i){Me=w(i)}finally{Xe=!1,n.keepLoading||f()}}}function qu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function xu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s,o,a,l,u,y,b,g;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((r=(n=e.old_value)!=null?n:e.oldValue)!=null?r:"").trim(),new_value:String((s=(i=e.new_value)!=null?i:e.newValue)!=null?s:"").trim(),event_timestamp:(l=(a=(o=e.event_timestamp)!=null?o:e.eventTimestamp)!=null?a:e.timestamp)!=null?l:"",event_datetime:(y=(u=e.event_datetime)!=null?u:e.eventDatetime)!=null?y:"",initiator:String((g=(b=e.initiator)!=null?b:e.initiatorName)!=null?g:"").trim(),source:String(e.source||"").trim()}}):[]}async function Ou(t={}){const e=vn.trim();if(!e){De="",Z=[],oe=-1,tt="",ze=[],Ye=!1,f(),t.keepFocus&&q("rosterHistorySearchInput");return}Ye=!0,De="",Z=[],oe=-1,tt="",ze=[],f(),t.keepFocus&&q("rosterHistorySearchInput");try{const n=await L("guildsync:request-roster-rank-history",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search roster rank history.");Z=Iu(n.matches),oe=Z.length>0?0:-1}catch(n){De=w(n)}finally{Ye=!1,f(),t.keepFocus&&q("rosterHistorySearchInput")}}async function jo(t,e={}){const n=String(t||"").trim();if(!!n){tt=n,vn=n,ze=[],Ye=!0,De="",f();try{const r=await L("guildsync:request-roster-stream-history",{account_name:n},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load roster stream history.");ze=Pu(r.events)}catch(r){De=w(r)}finally{Ye=!1,e.keepLoading||f()}}}function Iu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function Pu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(r=(n=e.timestamp)!=null?n:e.timestampS)!=null?r:"",officer:String(e.officer||"").trim()}}):[]}function Ea(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(n=e.joined)!=null?n:"",note_count:Number((i=(r=e.note_count)!=null?r:e.noteCount)!=null?i:0)||0}}).sort((e,n)=>e.account_name.localeCompare(n.account_name)):[]}function Fu(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function yr(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function Ti(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function Gu(t={}){te=Ea(t.members),Xn=t.last_refresh||new Date().toISOString(),Ut(),p("roster-data-updated",`Roster data updated. Loaded ${te.length} member record${te.length===1?"":"s"}.`,{ttlMs:m})}async function nn(t={}){if(!!(d!=null&&d.connected)){Ne=!0,Ut();try{const e=await L("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");te=Ea(e.members),Xn=e.last_refresh||Xn,t.silent||p("roster-data-loaded",`Loaded ${te.length} roster member${te.length===1?"":"s"}.`,{ttlMs:m})}catch(e){p("roster-data-error",w(e),{ttlMs:m})}finally{Ne=Boolean(t.deferPendingRefresh),Ut(),t.deferPendingRefresh||Mn("eso-members")}}}async function Uu(t={}){var e;if(!!R()){if(!(d!=null&&d.connected)){p("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}Ne=!0,Ut();try{const n=await kl(t);if(!(n!=null&&n.ok)){p("roster-data-pending",(n==null?void 0:n.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:m});return}const r={local_upload_id:Ra(),authenticated_username:pe(),authenticated_discord_user_id:((e=k==null?void 0:k.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await Ma(r)}catch(i){throw Hu(r),i}await nn({silent:!0,deferPendingRefresh:!0})}catch(n){p("roster-data-error",w(n),{ttlMs:m})}finally{Ne=!1,Ut(),Mn("eso-members")}}}function Ra(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Bi(){try{const t=window.localStorage.getItem(Ss),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Da(t){window.localStorage.setItem(Ss,JSON.stringify(Array.isArray(t)?t:[]))}function Hu(t){const e=String((t==null?void 0:t.local_upload_id)||Ra()),n=Bi().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Da(n),p("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function Vu(t){const e=Bi().filter(n=>(n==null?void 0:n.local_upload_id)!==t);Da(e)}async function Wu(){if(Br||!(d!=null&&d.connected)||!R())return;const t=Bi();if(t.length!==0){Br=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!R())return;await Ma(e),Vu(e.local_upload_id)}}catch(e){p("roster-data-pending-error",`Pending roster upload retry failed: ${w(e)}`,{ttlMs:m})}finally{Br=!1}}}async function Ma(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await L("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const n=await wl(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return p("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:m}),e}async function ju(t={}){var e,n;if(!!R()){if(!(d!=null&&d.connected)){p("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}try{const r=await bl(t);if(!(r!=null&&r.ok)){p("applications-data-info",(r==null?void 0:r.message)||"No application records were found to process.",{ttlMs:m});return}if((Array.isArray((e=r==null?void 0:r.data)==null?void 0:e.records)?r.data.records:[]).length===0){p("applications-data-info",`No application records were found in ${r.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:m});return}const s={local_upload_id:Ta(),authenticated_username:pe(),authenticated_discord_user_id:((n=k==null?void 0:k.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await Na(s)}catch(o){throw zu(s),o}}catch(r){p("applications-data-error",w(r),{ttlMs:m})}}}function Ta(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Ni(){try{const t=window.localStorage.getItem(ws),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Ba(t){window.localStorage.setItem(ws,JSON.stringify(Array.isArray(t)?t:[]))}function zu(t){const e=String((t==null?void 0:t.local_upload_id)||Ta()),n=Ni().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Ba(n),p("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function Yu(t){const e=Ni().filter(n=>(n==null?void 0:n.local_upload_id)!==t);Ba(e)}async function Ku(){if(Nr||!(d!=null&&d.connected)||!R())return;const t=Ni();if(t.length!==0){Nr=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!R())return;await Na(e),Yu(e.local_upload_id)}}catch(e){p("applications-data-pending-error",`Pending application upload retry failed: ${w(e)}`,{ttlMs:m})}finally{Nr=!1}}}async function Na(t){var i;if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return p("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:m}),{ok:!0,sent_count:0,skipped_empty:!0};let n=0;for(const s of e){const o=await L("guildsync:eso-guild-application-message",{...t,record:s,recordKey:(s==null?void 0:s.recordKey)||"",message:Ju(s)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Backend rejected the application data payload. Application data was not cleared.");n+=1}const r=await vl(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return p("applications-data-sent",`Sent ${n} application record${n===1?"":"s"} to GuildSync backend.`,{ttlMs:m}),{ok:!0,sent_count:n}}function Ju(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),n=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",r=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",s=String(t.applicationText||"_No application text captured._"),o=Object.entries(t).filter(([a])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(a)).map(([a,l])=>`**${a}:** ${Qu(l)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${n}** ${r} an application from **${i}**.`,"","**Application text:**","```",s.slice(0,1500),"```",o.length>0?"":null,o.length>0?"**Full captured record fields:**":null,...o].filter(a=>a!==null).join(`
`)}function Qu(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function Xu(t={}){await ju(t)}function Ca(){const t=di(C),e=Mf(t,C),n=C!=="other",r=n&&rn(C);return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <button id="openBankingHistoryButton" class="refresh-discord-button banking-history-button" type="button" ${R()?"":'disabled title="Login required to lookup banking history."'}>
            <span aria-hidden="true">\u2315</span>
            <span>Lookup Banking History</span>
          </button>
          <button id="openManualBiweeklyTicketButton" class="bank-export-button" type="button" ${R()?"":'disabled title="Login required to add manual entries."'}>
            <span aria-hidden="true">\uFF0B</span>
            <span>Add Manual Entry</span>
          </button>
          ${af()}
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${c(tc(Ds))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${qe||!R()?"disabled":""} ${R()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${qe?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${Or("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${Or("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${Or("other","?","Other","All other deposits")}
        </div>

        ${sf(C)}

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
              ${t.length>0?t.map(i=>Bf(i,n,r)).join(""):Nf(n,r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${c(Mt(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${C==="monthly"?`<div>Raffle Pot: <strong>${c(Mt(Math.floor(e.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${C==="biweekly"?`<div>Raffle Pot: <strong>${c(Mt(Ua(e.amount)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${C==="biweekly"?`<div>Draws: <strong>${c(String(Tf(e.amount)))}</strong></div>`:""}
          ${n?`<div>Purchased: <strong>${c(ue(e.purchased))}</strong></div>${r?`<div>Bonus: <strong>${c(ue(e.bonus))}</strong></div>`:""}<div>Total Tickets: <strong>${c(ue(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${pt?nf(di(fe)):""}
    </div>
  `}function Zu(){return`
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
            <input id="bankingHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" autocomplete="off" placeholder="Start typing part of an account name..." value="${h(yt)}" />
          </label>
          ${ef()}
        </div>

        ${Se?`<div class="discord-data-error">${c(Se)}</div>`:""}

        <div class="banking-history-results">
          <div class="roster-history-section-title">Banking History${ke?`: ${c(ke)}`:""}${ke?`<span class="banking-history-count">${c(String(de.length))} record${de.length===1?"":"s"} found</span>`:""}</div>
          ${tf()}
        </div>
      </div>
    </div>
  `}function ef(){return yt.trim()?ve&&V.length===0&&!ke?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">Searching...</div></div>':V.length===0&&!ke?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">No matching banking names found.</div></div>':V.length===0?"":`
    <div class="banking-history-autocomplete" role="listbox" aria-label="Banking history matches">
      ${V.map((t,e)=>`
        <button class="banking-history-autocomplete-option${e===ae?" is-selected":""}" type="button" data-banking-history-account="${h(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <small>${c(String(Number(t.record_count||t.recordCount||0)||0))} record${Number(t.record_count||t.recordCount||0)===1?"":"s"}</small>
        </button>
      `).join("")}
    </div>
  `:""}function tf(){const t=de.some(e=>e.bonus_enabled);return ke?ve&&de.length===0?'<div class="roster-history-muted">Loading banking history...</div>':de.length===0?'<div class="roster-history-muted">No banking history found for this account.</div>':`
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
          ${de.map(e=>{var n,r,i,s,o;return`
            <tr>
              <td>${c(vf((i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:""))}</td>
              <td>${c(Sf(e.transaction_type||e.type||""))}</td>
              <td style="text-align:right;">${c(wf((o=(s=e.deposit_amount)!=null?s:e.depositAmount)!=null?o:e.amount))} \u{1FA99}</td>
              <td style="text-align:right;">${c(Ir(e.purchased_tickets))}</td>
              ${t?`<td style="text-align:right;">${e.bonus_enabled?`${c(ue(e.bonus_percent))}%`:""}</td><td style="text-align:right;">${e.bonus_enabled?c(Ir(e.bonus_tickets)):""}</td>`:""}
              <td style="text-align:right;">${c(Ir(e.total_tickets))}</td>
              <td class="banking-history-note-cell">${c(e.note||"")}</td>
            </tr>
          `}).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see banking history.</div>'}function nf(t){const e=rn(fe);return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${c(we(fe))} Deposits</h3>
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
              ${t.length>0?t.map(n=>rf(n)).join(""):of()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${c(Pa(t))}</textarea>
      </div>
    </div>
  `}function rf(t){const e=rn(fe);return`
    <tr data-bank-event-id="${h(t.eventId||"")}">
      <td>${c(t.displayName||"")}</td>
      <td>${c(String(Ii(t,fe)))}</td>
      <td>${c(String(t.purchasedTickets))}</td>
      ${e?`<td>${c(String(t.bonusPercent))}%</td><td>${c(String(t.bonusTickets))}</td>`:""}
      <td>${c(String(t.totalTickets))}</td>
      <td>${c(t.note||"")}</td>
    </tr>
  `}function of(){return`
    <tr>
      <td class="bank-empty-row" colspan="${rn(fe)?7:5}">No deposits to export for ${c(we(fe))}.</td>
    </tr>
  `}function sf(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=xi(t),n=ar(t),r=n<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${h(we(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${c(we(t))} Raffle Period ${n===0?"(Current)":`(${Math.abs(n)} period${Math.abs(n)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${c(jn(e.salesStart))} through ${c(jn(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${c(jn(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${r?"":"disabled"} aria-label="Next ${h(we(t))} raffle period">\u203A</button>
    </div>
  `}function Or(t,e,n,r){const i=C===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${h(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${c(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${c(n)}</span>
        <span class="bank-section-subtitle">${c(r)}</span>
      </span>
    </button>
  `}function af(){if(!R())return"";const t=kr(),e=Bn(),n=qa(),r=t>0,i=e>0,s=n>0;if(!r&&!i&&!s)return"";let o="",a="",l=!1;r?(o=`Check Out ${t} Deposit Mail`,a="checkout"):i?(l=!0,wt?o=`Writing ${e} Pending Mail`:Y.running?o=`${e} Mail Waiting for ESO Closure`:(Ka("render-pending-mail-button"),o=`${e} Mail Writing to Disk`)):(l=!0,o=`${n} Mail Ready to Send`);const u=r?"Check out new deposit mail. GuildSync will immediately try to write it, or hold it until ESO closes.":i?"Deposit mail is already checked out and will be written automatically after ESO closes.":"Deposit mail has been written to ESO SavedVariables and is ready for ESO to send it and write acknowledgements.",y=zr||wt,b=Y.running?"ESO Running":"ESO Not Running",g=Y.running?"eso-running":"eso-not-running";return`
    <button id="checkoutDepositMailButton" class="${`bank-export-button deposit-mail-button${l?" deposit-mail-status-only":""}`}" type="button" data-deposit-mail-action="${h(a)}" ${l||y?'aria-disabled="true"':""} title="${h(Y.message||u)}" aria-label="${h(`${o}. ${u}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${c(o)}</span>
      <span aria-hidden="true">(</span><span class="deposit-mail-eso-status ${g}" aria-hidden="true">${c(b)}</span><span aria-hidden="true">)</span>
    </button>
  `}function Bn(){return Nn().reduce((t,e)=>t+on(e.records).length,0)}function cf(){const t=(k==null?void 0:k.user)||{};return new Set([pe(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function lf(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?cf().has(e):!1}function qa(){return R()?J.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="written_to_eso"&&lf(t)}).length:0}function kr(){return J.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="unsent"}).length}function df(t){const e=String(t||"").trim();return J.find(n=>String(n.eventId||"").trim()===e)||null}function Ci(t){const e=String(t||"other").toLowerCase(),n=["biweekly","monthly","other"],r=n.includes(e)?e:"other",i=n.filter(s=>s!==r);return[i[0]||"biweekly",r,i[1]||"other"]}function qi(t={},e="other"){const n=String(e||"other").toLowerCase(),r=Number(t==null?void 0:t.amount)||0;return n===String((t==null?void 0:t.type)||"").toLowerCase()?Number(t==null?void 0:t.ticketAmount)||0:n==="biweekly"?Math.floor(r/500):n==="monthly"?Math.floor(r/2500):0}function xa(t={},e="other",n=""){const r=String(t.type||"other").toLowerCase(),i=we(r),s=we(e),o=pe()||"Unknown user",a=[`Moved from ${i} to ${s} by ${o}.`,`Ref ${t.eventId||""}`],l=String(n||"").trim();return l&&a.push(`Reason: ${l}`),a.join(`
`)}function Oa(t){const e=df(t);if(!e){p("banking-move-missing","Could not find the selected banking entry.",{ttlMs:m});return}const n=String(e.type||"other").toLowerCase();$e=e,I={targetType:n,note:"",tickets:String(qi(e,n))},Le="",Pt=!1,Zt=!0,f()}function sr(){Zt=!1,Pt=!1,Le="",$e=null,I={targetType:"other",note:"",tickets:""},f()}function uf(){const t=$e||{},e=String(t.type||"other").toLowerCase(),n=we(e),r=Ci(e);let i=String(I.targetType||r[0]||"other").toLowerCase();r.includes(i)||(i=r[0]||"other",I.targetType=i);const s=xa(t,i,I.note);return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="bankingMoveDialogTitle">
      <div class="roster-history-dialog manual-ticket-dialog banking-move-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="bankingMoveDialogTitle">Move Banking Entry</h3>
            <p>Move this deposit to a different banking section while preserving a reference to the original event.</p>
          </div>
          <button id="closeBankingMoveDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${Le?`<div class="discord-data-error">${c(Le)}</div>`:""}

        <div class="manual-ticket-form banking-move-form">
          <div class="banking-move-current-entry">
            <div><strong>Current Type:</strong> ${c(n)}</div>
            <div><strong>Event ID:</strong> ${c(t.eventId||"")}</div>
            <div><strong>Depositor:</strong> ${c(t.displayName||"")}</div>
            <div><strong>Amount:</strong> ${c(Mt(t.amount))} \u{1FA99}</div>
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
                    <strong>${c(we(o))}</strong>
                    <span>${o===e?"Current / restore original values":`${c(String(qi(t,o)))} tickets`}</span>
                  </button>
                `).join("")}
              </div>
            </div>
          </div>

          <div class="banking-move-compact-row">
            <label class="manual-ticket-count-field banking-move-ticket-field">
              <span>Tickets Awarded</span>
              <input id="bankingMoveTicketsInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${h(I.tickets)}" ${i==="other"?"disabled":""} />
            </label>

            <label class="manual-ticket-note-field banking-move-note-field">
              <span>Move Note</span>
              <textarea id="bankingMoveNoteInput" class="discord-search-input manual-ticket-note-input banking-move-note-input" rows="1" placeholder="Optional reason for this move">${c(I.note)}</textarea>
            </label>
          </div>

          <div class="roster-history-muted banking-move-generated-note">${c(s).replace(/\n/g,"<br>")}</div>

          <div class="manual-ticket-actions banking-move-actions">
            <button id="saveBankingMoveButton" class="refresh-discord-button banking-move-submit-button" type="button" ${Pt||i===e?"disabled":""}>${Pt?"MOVING...":i===e?"SELECT A SIDE TO MOVE":"MOVE"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function ff(){var n,r,i,s;if(!Zt)return;(n=document.querySelector("#closeBankingMoveDialogButton"))==null||n.addEventListener("click",()=>sr());function t(o){const a=String(o||"other").toLowerCase(),l=String(($e==null?void 0:$e.type)||"other").toLowerCase(),u=Ci(l);I.targetType=u.includes(a)?a:l,I.tickets=String(qi($e||{},I.targetType)),f()}document.querySelectorAll("[data-banking-move-target]").forEach(o=>{o.addEventListener("click",()=>t(o.dataset.bankingMoveTarget))}),(r=document.querySelector("#bankingMoveTicketsInput"))==null||r.addEventListener("input",o=>{const a=String(o.target.value||"").replace(/\D/g,"");o.target.value!==a&&(o.target.value=a),I.tickets=a}),(i=document.querySelector("#bankingMoveNoteInput"))==null||i.addEventListener("input",o=>{I.note=o.target.value||"";const a=document.querySelector(".banking-move-generated-note");a&&(a.innerText=xa($e||{},I.targetType||"other",I.note))}),(s=document.querySelector("#saveBankingMoveButton"))==null||s.addEventListener("click",()=>hf());const e=document.querySelector(".roster-history-overlay");e&&e.addEventListener("click",o=>{o.target===e&&sr()})}async function hf(){const t=$e;if(!(t!=null&&t.eventId)){Le="No banking entry is selected.",f();return}const e=String(t.type||"other").toLowerCase(),n=Ci(e),r=String(I.targetType||n[0]||"other").toLowerCase();if(!n.includes(r)||r===e){Le="Select one of the side destinations before moving this entry.",f();return}const i=r==="other"?0:Math.floor(Number(String(I.tickets||"").trim()||0));if(!Number.isFinite(i)||i<0){Le="Tickets must be zero or greater.",f();return}Pt=!0,Le="",f();try{const s=await L("guildsync:move-banking-entry",{event_id:t.eventId,target_type:r,tickets:i,note:I.note||""},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to move banking entry.");sr(),await me({silent:!0}),p("banking-entry-moved",s.message||"Banking entry moved.",{ttlMs:m})}catch(s){Pt=!1,Le=w(s),f()}}function pf(){if(!R()){p("banking-history-login-required","Login required to lookup banking history.",{ttlMs:m});return}en=!0,yt="",V=[],de=[],ke="",ve=!1,Se="",ae=-1,clearTimeout(Rt),f(),q("bankingHistorySearchInput")}function mf(){en=!1,ve=!1,Se="",clearTimeout(Rt)}function gf(){if(!en)return;const t=document.querySelector("#bankingHistorySearchInput");t&&(t.addEventListener("input",e=>{if(yt=e.target.value||"",ae=-1,ke="",de=[],!yt.trim()){clearTimeout(Rt),Se="",V=[],ve=!1,f(),q("bankingHistorySearchInput");return}clearTimeout(Rt),Rt=setTimeout(()=>{bf({keepFocus:!0})},250)}),t.addEventListener("keydown",e=>{if(e.key==="ArrowDown"||e.key==="ArrowUp"){if(V.length===0)return;e.preventDefault();const r=e.key==="ArrowDown"?1:-1;ae=((ae<0?0:ae)+r+V.length)%V.length,f(),q("bankingHistorySearchInput");return}if(e.key!=="Enter")return;e.preventDefault();const n=V[ae>=0?ae:0];n!=null&&n.account_name&&zo(n.account_name)})),document.querySelectorAll("[data-banking-history-account]").forEach(e=>{e.addEventListener("click",()=>{zo(e.dataset.bankingHistoryAccount||"")})})}async function bf(t={}){const e=yt.trim();if(!e){Se="",V=[],ae=-1,ke="",de=[],ve=!1,f(),t.keepFocus&&q("bankingHistorySearchInput");return}ve=!0,Se="",V=[],ae=-1,f(),t.keepFocus&&q("bankingHistorySearchInput");try{const n=await L("guildsync:request-banking-history-matches",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search banking history.");V=yf(n.matches),ae=V.length>0?0:-1}catch(n){Se=w(n)}finally{ve=!1,f(),t.keepFocus&&q("bankingHistorySearchInput")}}async function zo(t){const e=String(t||"").trim();if(!!e){clearTimeout(Rt),ke=e,yt=e,V=[],de=[],ve=!0,Se="",f();try{const n=await L("guildsync:request-banking-history-records",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load banking history.");de=kf(n.records)}catch(n){Se=w(n)}finally{ve=!1,f()}}}function yf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s;return{account_name:String(e.account_name||e.accountName||"").trim(),record_count:Number((r=(n=e.record_count)!=null?n:e.recordCount)!=null?r:0)||0,last_event_timestamp:(s=(i=e.last_event_timestamp)!=null?i:e.lastEventTimestamp)!=null?s:""}}).filter(e=>e.account_name):[]}function kf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s,o,a,l,u,y,b,g,_,S,$,N,v,F,z,re;return{event_id:String(e.event_id||e.eventId||"").trim(),transaction_type:String(e.transaction_type||e.transactionType||e.type||"").trim(),event_timestamp:(i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:"",deposit_amount:(a=(o=(s=e.deposit_amount)!=null?s:e.depositAmount)!=null?o:e.amount)!=null?a:"",ticket_quantity:(y=(u=(l=e.ticket_quantity)!=null?l:e.ticketQuantity)!=null?u:e.ticketAmount)!=null?y:"",purchased_tickets:(S=(_=(g=(b=e.purchasedTickets)!=null?b:e.ticket_quantity)!=null?g:e.ticketQuantity)!=null?_:e.ticketAmount)!=null?S:0,bonus_tickets:($=e.bonusTickets)!=null?$:0,bonus_percent:(N=e.bonusPercent)!=null?N:0,bonus_enabled:e.bonusEnabled===!0,total_tickets:(re=(z=(F=(v=e.totalTickets)!=null?v:e.ticket_quantity)!=null?F:e.ticketQuantity)!=null?z:e.ticketAmount)!=null?re:0,note:String(e.note||"").trim()}}).sort((e,n)=>{const r=Number(e.event_timestamp)||0,i=Number(n.event_timestamp)||0;return r!==i?r-i:String(e.event_id).localeCompare(String(n.event_id),void 0,{numeric:!0})}):[]}function vf(t){const e=Number(t);if(!e)return"";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t);const r=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0"),s=String(n.getFullYear()),o=String(n.getHours()).padStart(2,"0"),a=String(n.getMinutes()).padStart(2,"0"),l=String(n.getSeconds()).padStart(2,"0");return`${r}/${i}/${s} ${o}:${a}:${l}`}function Sf(t){const e=String(t||"").trim().toLowerCase();return e==="monthly"?"50/50":e==="biweekly"?"Bi-Weekly":e==="other"?"Other":e?e.replace(/\b\w/g,n=>n.toUpperCase()):""}function wf(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":Mt(e)}function Ir(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":ue(e)}function Ia(){if(B!=="more")return;ff(),gf(),document.querySelectorAll("[data-bank-entry-move]").forEach(a=>{a.addEventListener("click",()=>Oa(a.dataset.bankEntryMove||""))}),document.querySelectorAll("[data-bank-section]").forEach(a=>{a.addEventListener("click",()=>{C=a.dataset.bankSection||"biweekly",f()})}),document.querySelectorAll("[data-bank-export-section]").forEach(a=>{a.addEventListener("click",()=>{fe=(a.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",pt=!0,f()})}),document.querySelectorAll("[data-bank-period-move]").forEach(a=>{a.addEventListener("click",()=>{Lf(a.dataset.bankPeriodMove||""),f()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{pt=!1,f()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>_f());const n=document.querySelector(".bank-export-overlay");n&&n.addEventListener("click",a=>{a.target===n&&(pt=!1,f())});const r=document.querySelector("#openBankingHistoryButton");r&&r.addEventListener("click",()=>pf());const i=document.querySelector("#openManualBiweeklyTicketButton");i&&i.addEventListener("click",async()=>{if(!R()){p("manual-ticket-login-required","Login required to add manual entries.",{ttlMs:m});return}Be=!0,Q="",tn=T.accountName||"",le=!1,H=-1,te.length===0&&(d==null?void 0:d.connected)&&R()&&await nn({silent:!0}),f()});const s=document.querySelector("#checkoutDepositMailButton");s&&s.addEventListener("click",()=>{s.dataset.depositMailAction==="checkout"&&s.getAttribute("aria-disabled")!=="true"&&Ya()});const o=document.querySelector("#refreshBankingDataButton");o&&o.addEventListener("click",()=>{if(!R()){p("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:m});return}Wa({key:"banking"})})}function Pa(t){const e=rn(fe),n=[["Guildie Name","Deposit Amount","Purchased Tickets",...e?["Bonus %","Bonus Tickets"]:[],"Total Tickets","Note"]];for(const r of t)n.push([r.displayName||"",String(Ii(r,fe)),String(r.purchasedTickets),...e?[`${r.bonusPercent}%`,String(r.bonusTickets)]:[],String(r.totalTickets),r.note||""]);return n.map(r=>r.map(vr).join("	")).join(`
`)}function vr(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function Sr(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly","readonly"),n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.width="1px",n.style.height="1px",n.style.opacity="0",n.style.pointerEvents="none",n.style.zIndex="-1",document.body.appendChild(n),n.focus(),n.select(),n.setSelectionRange(0,n.value.length);let r=!1;try{r=document.execCommand("copy")}finally{document.body.removeChild(n)}return r}async function _f(){const t=di(fe),e=Pa(t);if(await Sr(e)){p("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:m});return}const r=document.querySelector("#bankingExportTsv");r&&(r.focus(),r.select()),p("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:m})}function di(t){return J.filter(e=>e.type===t).filter(e=>Af(t,e)).sort((e,n)=>(Number(e.time)||0)-(Number(n.time)||0))}function Af(t,e){if(t==="other")return!0;const n=Number(e==null?void 0:e.time)||0;if(n<=0)return!1;const r=xi(t);return n>=r.salesStart&&n<=r.salesEnd}function ar(t){return Number(Zr[t])||0}function Lf(t){if(C!=="biweekly"&&C!=="monthly")return;const e=ar(C);if(t==="previous"){Zr[C]=e-1;return}t==="next"&&e<0&&(Zr[C]=e+1)}function xi(t){const e=Math.floor(Date.now()/1e3);if(t==="monthly"){const i=$f(e,ar(t));return{salesStart:Ga(i)+1,salesEnd:i,raffleTime:i+nr}}const n=nt;let r=Fa(e);return r+=ar(t)*n,{salesStart:r-n+1,salesEnd:r,raffleTime:r+nr}}function Fa(t){const e=nt;let n=Vl;for(;n-e>t;)n-=e;for(;n<t;)n+=e;return n}function $f(t,e=0){let n=Ef(t),r=Number(e)||0;for(;r<0;)n=Ga(n),r+=1;for(;r>0;)n=Rf(n),r-=1;return n}function Ef(t){let e=Fa(t);for(;!Oi(e);)e+=nt;return e}function Ga(t){let e=t-nt;for(;!Oi(e);)e-=nt;return e}function Rf(t){let e=t+nt;for(;!Oi(e);)e+=nt;return e}function Oi(t){const e=t+nr,n=t+nt+nr;return Yo(e)!==Yo(n)}function Yo(t){var s,o;const e=new Date(Number(t||0)*1e3);if(Number.isNaN(e.getTime()))return"";const n=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit"}).formatToParts(e),r=((s=n.find(a=>a.type==="year"))==null?void 0:s.value)||"",i=((o=n.find(a=>a.type==="month"))==null?void 0:o.value)||"";return`${r}-${i}`}function Df(t=C){const e=String(t||"").toLowerCase();return e!=="monthly"&&e!=="biweekly"?0:"auto"}function Ii(t={},e=C){const n=Number(t.amount)||0;if(!Df(e))return n;const r=Math.abs(Math.trunc(n))%10,i=r===1||r===3?r:0;return i>0&&n>i?n-i:n}function Mf(t,e=C){return t.reduce((n,r)=>(n.amount+=Ii(r,e),n.purchased+=Number(r.purchasedTickets)||0,n.bonus+=Number(r.bonusTickets)||0,n.tickets+=Number(r.totalTickets)||0,n),{amount:0,purchased:0,bonus:0,tickets:0})}function Ua(t){const e=Math.ceil((Number(t)||0)/2);return e<=0?0:Math.ceil(e/2e5)*2e5}function Tf(t){const e=Ua(t);return e>0?e/2e5:0}function rn(t){var n;if(t!=="biweekly"&&t!=="monthly")return!1;const{salesEnd:e}=xi(t);return((n=It.find(r=>r.type===t&&r.salesEnd===e))==null?void 0:n.enabled)===!0}function Bf(t,e=!0,n=rn(C)){return`
    <tr data-bank-event-id="${h(t.eventId||"")}">
      <td>${c(t.note||t.eventId||"")}</td>
      <td>${c(jn(t.time))}</td>
      <td>${c(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${c(Mt(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td>${c(ue(t.purchasedTickets))}</td>${n?`<td>${c(ue(t.bonusPercent))}%</td><td>${c(ue(t.bonusTickets))}</td>`:""}<td><strong class="bank-ticket-amount">${c(ue(t.totalTickets))}</strong></td>`:""}
      <td><button class="bank-entry-move-button" type="button" data-bank-entry-move="${h(t.eventId||"")}">Move</button></td>
    </tr>
  `}function Nf(t=!0,e=!1){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?e?"9":"7":"5"}">No ${c(we(C))} deposits found for this ${C==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function we(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function jn(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Mt(t){return(Number(t)||0).toLocaleString()}function ue(t){return(Number(t)||0).toLocaleString()}function on(t){return Array.isArray(t)?t.map(e=>{var r,i,s,o,a,l,u,y,b,g,_,S,$,N,v,F,z,re,Yi,Ki,Ji,Qi,Xi,Zi,eo,to,no,ro,io,oo,so,ao,co,lo,uo,fo,ho,po,mo,go,bo,yo,ko,vo,So,wo,_o;const n=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:n==="monthly"||n==="biweekly"||n==="other"?n:"other",eventId:String((i=(r=e==null?void 0:e.eventId)!=null?r:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((o=(s=e==null?void 0:e.time)!=null?s:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((l=(a=e==null?void 0:e.displayName)!=null?a:e==null?void 0:e.display_name)!=null?l:"").trim(),amount:Number((u=e==null?void 0:e.amount)!=null?u:0)||0,ticketAmount:Number((b=(y=e==null?void 0:e.ticketAmount)!=null?y:e==null?void 0:e.ticket_amount)!=null?b:0)||0,purchasedTickets:Number((_=(g=e==null?void 0:e.purchasedTickets)!=null?g:e==null?void 0:e.ticketAmount)!=null?_:0)||0,bonusTickets:Number((S=e==null?void 0:e.bonusTickets)!=null?S:0)||0,bonusPercent:Number(($=e==null?void 0:e.bonusPercent)!=null?$:0)||0,bonusEnabled:(e==null?void 0:e.bonusEnabled)===!0,totalTickets:Number((v=(N=e==null?void 0:e.totalTickets)!=null?N:e==null?void 0:e.ticketAmount)!=null?v:0)||0,note:String((F=e==null?void 0:e.note)!=null?F:"").trim(),dataSource:String((re=(z=e==null?void 0:e.dataSource)!=null?z:e==null?void 0:e.data_source)!=null?re:"").trim(),emailRequested:Boolean((Yi=e==null?void 0:e.emailRequested)!=null?Yi:e==null?void 0:e.email_requested),mailStatus:String((Ji=(Ki=e==null?void 0:e.mailStatus)!=null?Ki:e==null?void 0:e.mail_status)!=null?Ji:"").trim(),mailRequestId:String((Xi=(Qi=e==null?void 0:e.mailRequestId)!=null?Qi:e==null?void 0:e.mail_request_id)!=null?Xi:"").trim(),mailBatchId:String((eo=(Zi=e==null?void 0:e.mailBatchId)!=null?Zi:e==null?void 0:e.mail_batch_id)!=null?eo:"").trim(),checkedOutBy:String((no=(to=e==null?void 0:e.checkedOutBy)!=null?to:e==null?void 0:e.checked_out_by)!=null?no:"").trim(),checkedOutAt:String((io=(ro=e==null?void 0:e.checkedOutAt)!=null?ro:e==null?void 0:e.checked_out_at)!=null?io:"").trim(),checkoutExpiresAt:String((so=(oo=e==null?void 0:e.checkoutExpiresAt)!=null?oo:e==null?void 0:e.checkout_expires_at)!=null?so:"").trim(),writtenToEsoAt:String((co=(ao=e==null?void 0:e.writtenToEsoAt)!=null?ao:e==null?void 0:e.written_to_eso_at)!=null?co:"").trim(),sentAt:String((uo=(lo=e==null?void 0:e.sentAt)!=null?lo:e==null?void 0:e.sent_at)!=null?uo:"").trim(),failedReason:String((ho=(fo=e==null?void 0:e.failedReason)!=null?fo:e==null?void 0:e.failed_reason)!=null?ho:"").trim(),recipient:String((bo=(go=(mo=(po=e==null?void 0:e.recipient)!=null?po:e==null?void 0:e.account_name)!=null?mo:e==null?void 0:e.displayName)!=null?go:e==null?void 0:e.display_name)!=null?bo:"").trim(),subject:String((vo=(ko=(yo=e==null?void 0:e.subject)!=null?yo:e==null?void 0:e.mailSubject)!=null?ko:e==null?void 0:e.mail_subject)!=null?vo:"").trim(),body:String((_o=(wo=(So=e==null?void 0:e.body)!=null?So:e==null?void 0:e.mailBody)!=null?wo:e==null?void 0:e.mail_body)!=null?_o:"").trim()}}):[]}function Cf(t){const e=new Map;for(const n of J)n.eventId&&e.set(n.eventId,n);for(const n of t)!n.eventId||e.set(n.eventId,n);J=Array.from(e.values()).sort((n,r)=>(Number(r.time)||0)-(Number(n.time)||0))}function qf(t){t.querySelectorAll("[data-open-member-link-dialog]").forEach(e=>{e.addEventListener("click",()=>Di(e.dataset.openMemberLinkDialog||"",e.dataset.memberLinkValue||""))}),t.querySelectorAll("[data-open-roster-notes]").forEach(e=>{e.addEventListener("click",()=>Aa(e.dataset.openRosterNotes||""))}),t.querySelectorAll("[data-bank-entry-move]").forEach(e=>{e.addEventListener("click",()=>Oa(e.dataset.bankEntryMove||""))})}function Pi(t,e,n=!1,r=!1){const i=document.querySelector(t);if(!i)return;const s=_i(i),o=document.activeElement,a=o&&"selectionStart"in o?[o.selectionStart,o.selectionEnd]:null,l=document.createElement("template");l.innerHTML=e;const u=l.content.firstElementChild,y=n?".bank-deposit-table":r?".eso-roster-table":".discord-member-table";Ao(i.querySelector(`${y} tbody`),u.querySelector(`${y} tbody`),n?"data-bank-event-id":r?"data-eso-account-name":"data-discord-user-id",qf),fn(i.querySelector(`${y} thead`),u.querySelector(`${y} thead`)),hn(i.querySelector(".discord-data-actions .discord-last-refresh"),u.querySelector(".discord-data-actions .discord-last-refresh"));const b=n?"#refreshBankingDataButton":r?"#refreshRosterDataButton":"#refreshDiscordDataButton",g=i.querySelector(b),_=u.querySelector(b);if(g&&_&&(g.disabled=_.disabled,hn(g.lastElementChild,_.lastElementChild)),n){fn(i.querySelector(".bank-deposits-summary-row"),u.querySelector(".bank-deposits-summary-row")),fn(i.querySelector(".bank-raffle-period-content"),u.querySelector(".bank-raffle-period-content"));const S=i.querySelector("#checkoutDepositMailButton"),$=u.querySelector("#checkoutDepositMailButton");if(!$)S==null||S.remove();else if(!S||!S.isEqualNode($)){const re=$.cloneNode(!0);re.addEventListener("click",()=>{re.dataset.depositMailAction==="checkout"&&re.getAttribute("aria-disabled")!=="true"&&Ya()}),S?S.replaceWith(re):i.querySelector(".discord-data-actions").insertBefore(re,i.querySelector("[data-bank-export-section]"))}Ao(i.querySelector("#bankingExportGrid tbody"),u.querySelector("#bankingExportGrid tbody"),"data-bank-event-id"),fn(i.querySelector("#bankingExportGrid thead"),u.querySelector("#bankingExportGrid thead")),hn(i.querySelector(".bank-export-count"),u.querySelector(".bank-export-count"));const N=i.querySelector("#copyBankingExportGridButton"),v=u.querySelector("#copyBankingExportGridButton");N&&v&&(N.disabled=v.disabled);const F=i.querySelector("#bankingExportTsv"),z=u.querySelector("#bankingExportTsv");F&&z&&F.value!==z.value&&(F.value=z.value)}else{hn(i.querySelector(".discord-results-count"),u.querySelector(".discord-results-count"));const S=r?"#rosterRankFilter":"#discordRoleFilter",$=i.querySelector(S),N=u.querySelector(S);if($&&N&&$.innerHTML!==N.innerHTML){const v=$.value;$.innerHTML=N.innerHTML,$.value=v}}(o==null?void 0:o.isConnected)&&document.activeElement!==o&&(o.focus({preventScroll:!0}),a&&a[0]!==null&&o.setSelectionRange(...a)),s()}function Ut(){B==="eso-members"&&document.querySelector(".eso-roster-panel")&&Pi(".eso-roster-panel",Os(),!1,!0)}function zn(){Oe||xe||rt?f():B==="discord-members"?Ht():B==="eso-members"&&Ut()}function Ht(){B==="discord-members"&&document.querySelector(".discord-member-panel")&&Pi(".discord-member-panel",xs())}function Ha(t){const e=It.find(n=>`${n.type}:${n.salesEnd}`===Te);if(t.bonusSettings&&(U=t.bonusSettings),Array.isArray(t.bonusRaffles)){const n=[...t.bonusRaffles];e&&!n.some(r=>`${r.type}:${r.salesEnd}`===Te)&&n.push(e),It=n}}function xf(){if(B!=="settings"||!U)return;const t=document.querySelector(".raffle-bonus-card");if(!t)return;const e=_i(t.parentElement),n=document.createElement("template");n.innerHTML=Vs();const r=n.content.firstElementChild;if(t.querySelector("#raffleBonusSettingsForm")){const i=t.querySelector("#bonusRafflePicker"),s=r.querySelector("#bonusRafflePicker");if(i&&s&&i.innerHTML!==s.innerHTML){const o=i.value;i.innerHTML=s.innerHTML,i.value=o}if(!ce&&(be==null?void 0:be.raffle)!==Te){hn(t.querySelector("[data-bonus-settings-source]"),r.querySelector("[data-bonus-settings-source]"));const o=t.querySelectorAll(".raffle-bonus-tiers"),a=r.querySelectorAll(".raffle-bonus-tiers");o.forEach((l,u)=>{const y=a[u];!y||(l.querySelectorAll("input").length!==y.querySelectorAll("input").length?fn(l,y):y.querySelectorAll("input").forEach(b=>{const g=Array.from(l.querySelectorAll("input")).find(_=>_.name===b.name);!g||(g.type==="checkbox"?g.checked!==b.checked&&(g.checked=b.checked):g.value!==b.value&&(g.value=b.value))}))})}}else{const i=r.cloneNode(!0);t.replaceWith(i),Hs(i),ns(Es,{refresh:!0,root:i})}e()}function ne(){xf(),B==="more"&&document.querySelector(".bank-deposits-panel")&&Pi(".bank-deposits-panel",Ca(),!0)}function Va(){Ds=new Date().toISOString()}async function Of(t={}){!(t!=null&&t.ok)||(J=on(t.entries),Ha(t),Va(),ne(),p("banking-data-updated",`Banking data updated. Loaded ${J.length} deposit record${J.length===1?"":"s"}.`,{ttlMs:m}))}async function me(t={}){const e=Boolean(t.silent),n=Boolean(t.background);if(!(d!=null&&d.connected)){e||p("banking-data-error","GuildSync websocket is not connected.",{ttlMs:m});return}n||(qe=!0,ne());try{const r=await L("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");J=on(r.entries),Ha(r),Va(),e||p("banking-data",`Loaded ${J.length} banking deposit record${J.length===1?"":"s"}.`,{ttlMs:m})}catch(r){e||p("banking-data-error",w(r),{ttlMs:m})}finally{n||(qe=Boolean(t.deferPendingRefresh)),ne(),t.deferPendingRefresh||Mn("more")}}async function Ko(){!(d!=null&&d.connected)||!R()||qe||(await me({silent:!0,background:!0}),kr()<=0&&Bn()>0&&(Y.running?ne():Ka("availability-refresh")))}function If(){St&&clearInterval(St),Ko(),St=window.setInterval(Ko,Fl)}function Pf(){St&&(clearInterval(St),St=null)}async function Ff(t={}){if(!!R()){if(!(d!=null&&d.connected)){p("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:m});return}try{const e=await gl(t);if(!(e!=null&&e.ok))return;const n=Array.isArray(e.ackEntries)?e.ackEntries:[];if(n.length===0)return;const r=await L("guildsync:mark-deposit-mail-sent",{mail_ack:n,mail_request_ids:n.map(o=>(o==null?void 0:o.mail_request_id)||(o==null?void 0:o.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(r.mail_request_ids)?r.mail_request_ids:Array.isArray(r.mailRequestIds)?r.mailRequestIds:[];if(i.length===0){p("deposit-mail-ack-none",r.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:m});return}const s=await pl(i);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");p("deposit-mail-ack-sent",s.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:m}),await me({silent:!0})}catch(e){p("deposit-mail-ack-error",w(e),{ttlMs:m})}}}async function Gf(){if(!Cr){Cr=!0;try{const t=await _l();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&p("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:m})}catch(t){p("deposit-mail-ack-cleanup-error",w(t),{ttlMs:m})}finally{Cr=!1}}}async function Wa(t={}){var e,n;if(!!R()){if(!(d!=null&&d.connected)){p("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}qe=!0,ne();try{const r=await yl(t);if(!(r!=null&&r.ok)){p("banking-data-pending",(r==null?void 0:r.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:m});return}const i=on((e=r==null?void 0:r.data)==null?void 0:e.entries);Cf(i);const s=new Date().toISOString(),o={local_upload_id:Ja(),authenticated_username:pe(),authenticated_discord_user_id:((n=k==null?void 0:k.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:s,data:r.data||{}};try{await Xa(o)}catch(a){throw Wf(o),a}await me({silent:!0,deferPendingRefresh:!0})}catch(r){p("banking-data-error",w(r),{ttlMs:m})}finally{qe=!1,ne(),Mn("more")}}}function ja(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Nn(){try{const t=window.localStorage.getItem(vs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function za(t){window.localStorage.setItem(vs,JSON.stringify(Array.isArray(t)?t:[]))}function Uf(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||ja()),n=Nn().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);n.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),za(n)}function Jo(t){const e=String(t||"").trim();if(!e)return;const n=Nn().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);za(n)}async function Ya(){if(!R()){p("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:m});return}if(!(d!=null&&d.connected)){p("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:m});return}const t=Nn(),e=kr();if(t.length>0&&e<=0){await Vt();return}zr=!0,ne();try{const n=await L("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail checkout request.");const r=on(n.records);if(r.length===0){p("deposit-mail-none",n.message||"No unsent deposit mail is available.",{ttlMs:m}),await me({silent:!0});return}const i={mail_batch_id:n.mail_batch_id||n.mailBatchId||ja(),checked_out_by:n.checked_out_by||n.checkedOutBy||pe(),checked_out_at:new Date().toISOString(),records:r};Uf(i),await Vt()}catch(n){p("deposit-mail-error",w(n),{ttlMs:m})}finally{zr=!1,ne()}}function Ka(t=""){_t||wt||!R()||Bn()<=0||Y.running||(_t=window.setTimeout(()=>{_t=null,Vt()},100))}async function Vt(){if(_t&&(window.clearTimeout(_t),_t=null),wt||!R())return;const t=Nn();if(t.length!==0){if(await ui({silent:!0}),Y.running){p("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:m}),ne();return}wt=!0,ne();try{for(const e of t){const n=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),r=on(e==null?void 0:e.records);if(r.length===0){Jo(n);continue}const i=await ql(r);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(d!=null&&d.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const s=await L("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:n,event_ids:i.eventIds||r.map(o=>o.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend did not confirm deposit mail was marked written_to_eso.");Jo(n),p("deposit-mail-written",i.message||`Wrote ${r.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:m})}await me({silent:!0})}catch(e){p("deposit-mail-write-error",w(e),{ttlMs:m})}finally{wt=!1,ne()}}}async function ui(t={}){try{const e=Boolean(Y.running),n=await Al();Y={running:Boolean(n==null?void 0:n.running),message:String((n==null?void 0:n.message)||"")},Y.running||await Gf(),e&&!Y.running&&(p("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:m}),await Vt()),e!==Y.running&&ne()}catch(e){t.silent||p("eso-status-error",w(e),{ttlMs:m})}}function Hf(){vt&&clearInterval(vt),ui({silent:!0}).then(()=>{!Y.running&&Bn()>0&&Vt()}),vt=window.setInterval(()=>ui({silent:!0}),Pl)}function Vf(){vt&&(clearInterval(vt),vt=null)}function Ja(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Fi(){try{const t=window.localStorage.getItem(ks),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Qa(t){window.localStorage.setItem(ks,JSON.stringify(Array.isArray(t)?t:[]))}function Wf(t){const e=String((t==null?void 0:t.local_upload_id)||Ja()),n=Fi().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Qa(n),p("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function jf(t){const e=Fi().filter(n=>(n==null?void 0:n.local_upload_id)!==t);Qa(e)}async function zf(){if(Tr||!(d!=null&&d.connected)||!R())return;const t=Fi();if(t.length!==0){Tr=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!R())return;await Xa(e),jf(e.local_upload_id)}}catch(e){p("banking-data-pending-error",`Pending banking upload retry failed: ${w(e)}`,{ttlMs:m})}finally{Tr=!1}}}async function Xa(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await L("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const n=await Sl(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return p("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:m}),e}function Za(){if(B!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>Yf());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{qt=!0,Me="",f(),q("discordHistorySearchInput")});const n=document.querySelector("#discordMemberSearch");n&&n.addEventListener("input",o=>{Qn=o.target.value||"",Yr=o.target.selectionStart,Kr=o.target.selectionEnd,f({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Zf(o.dataset.discordSortColumn||"username")})});const r=document.querySelector("#discordRoleFilter");r&&r.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(At.add(a),f())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRoleFilter||"";At.delete(a),f()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(Lt.add(a),f())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeDiscordLinkStatusFilter||"";Lt.delete(a),f()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>Di(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{Qn="",At.clear(),Lt.clear(),f()})}async function Yf(){var t,e;if(!(d!=null&&d.connected)){p("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:m});return}Jn=!0,Ht(),p("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const n=await L("guildsync:request-discord-data-refresh",{requested_by:((t=k==null?void 0:k.user)==null?void 0:t.display_name)||((e=k==null?void 0:k.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to request Discord data refresh.");p("discord-refresh-requested",n.message||"Discord data refresh completed.",{ttlMs:m}),await wr({silent:!0})}catch(n){p("discord-refresh-error",w(n),{ttlMs:m})}finally{Jn=!1,Ht()}}async function Kf(){if(!(d!=null&&d.connected))return;const t=await L("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(hr=t.value||null)}async function Jf(t={}){if(!!(t!=null&&t.ok)){K=Gi(t.members),fr=Ui(t.roles),t.last_refresh&&(hr=t.last_refresh);try{await Kf()}catch{}B==="discord-members"&&Ht(),p("discord-data-updated",`Discord data updated. Loaded ${K.length} member record${K.length===1?"":"s"}.`,{ttlMs:m})}}async function wr(t={}){const e=Boolean(t.silent);if(!(d!=null&&d.connected)){p("discord-data-error","GuildSync websocket is not connected.",{ttlMs:m});return}Bt=!0,Ht();try{const[n,r]=await Promise.all([L("guildsync:request-discord-data-date",{}),L("guildsync:request-discord-member-dataJSON",{})]);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord refresh date.");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord member data.");hr=n.value||null,K=Gi(r.members),fr=Ui(r.roles),e||p("discord-data",`Loaded ${K.length} Discord member record${K.length===1?"":"s"}.`,{ttlMs:m})}catch(n){p("discord-data-error",w(n),{ttlMs:m})}finally{Bt=!1,Ht(),Mn("discord-members")}}function L(t,e={},n=3e4){return new Promise((r,i)=>{if(!(d!=null&&d.connected)){i(new Error("GuildSync websocket is not connected."));return}let s=!1;const o=window.setTimeout(()=>{s||(s=!0,i(new Error(`${t} timed out.`)))},n);d.emit(t,e,a=>{s||(s=!0,window.clearTimeout(o),r(a))})})}function Gi(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(ec).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,n)=>_n(e).localeCompare(_n(n),void 0,{sensitivity:"base"})):[]}function Ui(t){if(!Array.isArray(t))return[];const e=new Map;for(const n of t){const r=ec(n);if(!r)continue;const i=r.role_id||bn(r.role_name);i&&!e.has(i)&&e.set(i,r)}return Array.from(e.values()).sort((n,r)=>String(n.role_name||"").localeCompare(String(r.role_name||""),void 0,{sensitivity:"base"}))}function ec(t){var i,s;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),n=String(t.role_name||t.name||"Unnamed Role").trim(),r=(s=(i=t.role_color)!=null?i:t.color)!=null?s:null;return{role_id:e,role_name:n||"Unnamed Role",role_color:r}}function Qf(){const t=Qn.trim().toLowerCase(),e=Array.from(At),n=K.filter(r=>{if(t&&![r.username,r.global_name,r.server_nickname,r.discord_id,...r.roles.map(s=>s.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(r.roles.map(s=>s.role_name));if(!e.every(s=>i.has(s)))return!1}return!!Gs(Lt,gd(r))});return Xf(n)}function Xf(t){const e=at==="desc"?-1:1;return[...t].sort((n,r)=>{const i=Qo(n,kn),s=Qo(r,kn),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:_n(n).localeCompare(_n(r),void 0,{sensitivity:"base",numeric:!0})})}function Qo(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(n=>n.role_name||"").filter(Boolean).sort((n,r)=>n.localeCompare(r,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function Zf(t){const n=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";kn===n?at=at==="asc"?"desc":"asc":(kn=n,at="asc"),f()}function On(t,e){const n=kn===t,r=at==="asc"?"ascending":"descending",i=n?at==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${n?r:"none"}">
      <button
        class="discord-sort-header${n?" active":""}"
        type="button"
        data-discord-sort-column="${h(t)}"
        title="Sort ${h(e)} ${n&&at==="asc"?"descending":"ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function eh(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(Yr)?Yr:t.value.length,n=Number.isInteger(Kr)?Kr:e;t.setSelectionRange(e,n)}}function th(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(Qr)?Qr:t.value.length,n=Number.isInteger(Xr)?Xr:e;t.setSelectionRange(e,n)}}function nh(){const t=new Set;for(const e of K)for(const n of e.roles)n.role_name&&t.add(n.role_name);return Array.from(t).sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function rh(t){const e=lh(t),n=_n(t),r=t.roles||[];return`
    <tr data-discord-user-id="${h(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${h(e)}" alt="${h(n)}" />`:`<span>${c(dc(n))}</span>`}
          </div>
          <span>${c(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${c(t.global_name||"")}</td>
      <td>${c(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${r.length>0?r.map(i=>oh(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${ca({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function ih(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${c(Bt?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function oh(t){const e=_r(t.role_color),n=Wi(e),r=Vi(e,n);return`
    <span
      class="discord-role-badge"
      title="${h(t.role_name)}"
      style="${r}"
    >${c(t.role_name)}</span>
  `}function sh(t){const e=Hi(t),n=_r(e==null?void 0:e.role_color),r=Wi(n),i=Vi(n,r);return`
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
  `}function ah(t){const e=ch(t);for(const n of e){const r=Hi(n);if(r)return r}return null}function ch(t){const e=String(t||"").trim();if(!e)return[];const n=bn(e),i={associate:["Associates","Associate"],associates:["Associates","Associate"],soldier:["Soldiers","Soldier"],soldiers:["Soldiers","Soldier"],capo:["Capo"],capos:["Capo","Capos"],caporegime:["CapoRegime","Capo Regime","Capo Regimes"],consiglieres:["Consigliere","Consiglieres"],consigliere:["Consigliere","Consiglieres"]}[n]||[e];return Array.from(new Set([e,...i].filter(Boolean)))}function bn(t){return String(t||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function Hi(t){const e=bn(t);if(!e)return null;const n=fr.find(r=>bn(r.role_name)===e);if(n)return n;for(const r of K){const i=r.roles.find(s=>bn(s.role_name)===e);if(i)return i}return null}function _r(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function Vi(t,e){return[`--role-fill-top: ${Xo(t,"#ffffff",.16)}`,`--role-fill-bottom: ${Xo(t,"#000000",.1)}`,`--role-fill-glow: ${Zo(t,.28)}`,`--role-fill-edge: ${Zo(t,.46)}`,`color: ${e}`].join("; ")}function Xo(t,e,n){const r=In(t)||In("#64748b"),i=In(e)||In("#ffffff"),s=Math.max(0,Math.min(1,Number(n)||0)),o=Math.round(r.red+(i.red-r.red)*s),a=Math.round(r.green+(i.green-r.green)*s),l=Math.round(r.blue+(i.blue-r.blue)*s);return`#${Pr(o)}${Pr(a)}${Pr(l)}`}function In(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function Pr(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function Zo(t,e){const n=String(t||"#64748b").replace("#",""),r=/^[0-9a-f]{6}$/i.test(n)?n:"64748b",i=parseInt(r.slice(0,2),16),s=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`rgba(${i}, ${s}, ${o}, ${e})`}function Wi(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const n=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(n*299+r*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function lh(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!n)return"";const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function _n(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function tc(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Yn(){const t=document.querySelector("#discordArea");if(!!t){if(Cn(!1),R()){const e=k.user||{},n=pe(),r=Eh(e),i=dc(n);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${r?`<img src="${h(r)}" alt="${h(n)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${c(i)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const s=document.querySelector("#discordAvatarButton");s.addEventListener("contextmenu",o=>{o.preventDefault(),es()}),s.addEventListener("click",()=>{es()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",ph)}}function es(){if($n){Cn();return}hh()}function dh(t=je){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],n=String((t==null?void 0:t.directory)||"").trim(),r=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const s=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),o=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),a=String((i==null?void 0:i.filePath)||(n?`${n}\\${o}`:o)).trim(),l=(i==null?void 0:i.enabled)!==!1,u=r&&l,y=`profileFileWatchToggle-${fh(s||o)}`;return`
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
  `}function ji(){var r,i,s;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=pe(),n=((r=k.user)==null?void 0:r.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${c(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${c(Rh(n))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${c(ur)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${je!=null&&je.watching?"Active":"Stopped"}</span>
        </div>
        ${dh()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(i=document.querySelector("#discordLogoutButton"))==null||i.addEventListener("click",mh),(s=document.querySelector("#associateTicketReportButton"))==null||s.addEventListener("click",()=>{Cn(!1),Ws()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",uh)})}async function nc(){try{je=await Ll(),$n&&ji()}catch(t){p("file-watcher-error",w(t),{ttlMs:m})}}async function uh(t){var r;const e=t.currentTarget,n=String(((r=e==null?void 0:e.dataset)==null?void 0:r.filewatchKey)||"").trim();if(!!n)try{e.disabled=!0,je=await Ml(n,e.checked),await Tt({silent:!0}),$n&&ji()}catch(i){p("file-watcher-error",w(i),{ttlMs:m}),await nc()}}function fh(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function hh(){const t=document.querySelector("#discordProfileMenu");!t||(ji(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),$n=!0,nc(),setTimeout(()=>{window.addEventListener("click",rc),window.addEventListener("keydown",ic)},0))}function Cn(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),$n=!1,t&&(window.removeEventListener("click",rc),window.removeEventListener("keydown",ic))}function rc(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&Cn()}function ic(t){t.key==="Escape"&&Cn()}async function ph(){try{p("auth","Opening Discord login...",{ttlMs:m});const t=await Bl();t!=null&&t.status_message&&p("auth",t.status_message,{ttlMs:m}),Ze()}catch(t){p("auth-error",w(t),{ttlMs:m}),Ze()}}async function mh(){try{k=await El(),p("auth",k.status_message||"Logged out.",{ttlMs:m}),Ms(),yn(),await Tt()}catch(t){p("auth-error",w(t),{ttlMs:m}),Ze()}}function yn(){const t=k.socket_url||"https://guildsync.perdues.me";gh(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};k!=null&&k.token&&(e.auth={token:k.token}),d=Hn(t,e),d.on("connect",()=>{Ze(),oc(),B==="discord-members"&&wr({silent:!0}),B==="eso-members"&&nn({silent:!0}),(B==="more"||B==="settings"&&!U)&&me({silent:!0}),zf(),Vt(),Hf(),If(),Wu(),Ku(),bh()}),d.on("connect_error",()=>{Ze(),cr()}),d.on("disconnect",()=>{Ze(),cr(),Vf(),Pf()}),d.on("guildsync:version-status",n=>{yh(n)}),d.on("guildsync:discord-member-data-updated",n=>{Jf(n)}),d.on("guildsync:banking-data-updated",n=>{Of(n)}),d.on("guildsync:roster-data-updated",n=>{Gu(n)}),d.on("guildsync:member-links-updated",iu),d.on("guildsync:discord-refresh-status",(n={})=>{const r=String(n.message||"").trim();r&&p("discord-refresh-status",r,{ttlMs:m})})}function gh(t=!0){cr(),d&&(d.disconnect(),d=null),t&&Ze()}function oc(){!(d!=null&&d.connected)||d.emit("guildsync:client-version",{version:ur,platform:sc(),client_type:"wails"})}function bh(){cr(),Vn=window.setInterval(()=>{oc()},Il)}function cr(){Vn&&(window.clearInterval(Vn),Vn=null)}function yh(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",n=t.download&&typeof t.download=="object"?t.download:{};Ie={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||n.url||"").trim(),fileName:String(t.download_file_name||n.file_name||"").trim(),platformLabel:String(n.label||t.platform||sc()).trim()},p("version",`GuildSync is out of date. Current version: ${ur}. Latest version: ${e}.`),fi();return}Ie={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},fi(),zi("version")}}function sc(){const t=String(navigator.userAgent||"").toLowerCase(),n=`${String(navigator.platform||"").toLowerCase()} ${t}`;return n.includes("mac")?"macos":n.includes("linux")?"linux":"windows"}function fi(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!Ie.updateRequired||!Ie.downloadUrl){t.innerHTML="";return}const e=Ie.platformLabel||"Desktop",n=Ie.latestVersion||"latest",r=Ie.fileName||"GuildSync client download";t.innerHTML=`
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
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{kh()})}function kh(){const t=String(Ie.downloadUrl||"").trim();if(!t){p("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:m});return}Ol(t)}function p(t,e,n={}){const r=String(t||"").trim(),i=String(e||"").trim();if(!(!r||!i)){if(et.set(r,i),ot.has(r)&&(window.clearTimeout(ot.get(r)),ot.delete(r)),n.ttlMs&&Number(n.ttlMs)>0){const s=window.setTimeout(()=>{zi(r)},Number(n.ttlMs));ot.set(r,s)}Wt()}}function zi(t){const e=String(t||"").trim();if(!!e){if(et.delete(e),ot.has(e)&&(window.clearTimeout(ot.get(e)),ot.delete(e)),G===e){$r(()=>{G="",Wt()});return}Wt()}}function Wt(){const t=Ar();if(t.length===0){mt?$r(An):An();return}!mt&&!gt&&Lr(t[0])}function Ar(){return Array.from(et.keys())}function ac(){const t=Ar();if(t.length===0)return"";if(!G)return t[0];const e=t.indexOf(G);return e<0?t[0]:t[(e+1)%t.length]}function Lr(t){const e=document.querySelector("#statusMessageTrack");if(!e||!et.has(t)){An();return}Er();const n=et.get(t);G=t,mt=!0,gt=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=n,e.style.setProperty("--message-fade-duration",`${As}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",gt=!1,vh()},{once:!0})})}function vh(){const t=Ar();if(!G||!et.has(G)){Wt();return}if(t.length<=1){ts(!1);return}ts(!0)}function ts(t){const e=document.querySelector("#statusMessageViewport"),n=document.querySelector("#statusMessageTrack");if(!e||!n)return;const r=Math.max(0,n.scrollWidth-e.clientWidth);if(r<=0){t&&Ln(()=>{$r(()=>{const i=ac();G="",i?Lr(i):An()})},_s);return}Ln(()=>{cc(r,t)},Ls)}function cc(t,e){const n=document.querySelector("#statusMessageTrack");if(!n||!G||!et.has(G))return;const r=Math.max(4,Math.ceil(t/Ul));n.style.setProperty("--long-scroll-distance",`${t}px`),n.style.setProperty("--long-scroll-duration",`${r}s`),n.classList.add("long-scroll"),n.addEventListener("animationend",()=>{if(n.classList.remove("long-scroll"),n.style.transform=`translateX(-${t}px) translateY(-50%)`,e){Ln(()=>{$r(()=>{const i=ac();G="",i?Lr(i):An()})},_s);return}Ln(()=>{Sh()},Gl)},{once:!0})}function Sh(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!G||!et.has(G))return;if(Ar().length!==1){Wt();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const r=Math.max(0,e.scrollWidth-t.clientWidth);r<=0||Ln(()=>{cc(r,!1)},Ls)}function $r(t){const e=document.querySelector("#statusMessageTrack");if(Er(),!e||!mt){typeof t=="function"&&t();return}gt=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${As}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",mt=!1,gt=!1,typeof t=="function"&&t()},{once:!0})}function An(){const t=document.querySelector("#statusMessageTrack");Er(),G="",mt=!1,gt=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function Ln(t,e){const n=window.setTimeout(()=>{mn=mn.filter(r=>r!==n),t()},e);mn.push(n)}function Er(){for(const t of mn)window.clearTimeout(t);mn=[]}function lc(){if(!mt||gt||!G)return;const t=G;Er(),Lr(t)}function Ze(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(d!=null&&d.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!R()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${pe()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${pe()}`)}}async function Tt(t={}){try{if(R()){const e=await Nl();je=e,!t.silent&&(e==null?void 0:e.message)&&p(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:m});return}je=await Cl(),zi("file-watcher")}catch(e){p("file-watcher-error",w(e),{ttlMs:m})}}function un(t,e=null){const n="[GuildSync File Watcher]";if(e){console.log(`${n} ${t}`,e);return}console.log(`${n} ${t}`)}function wh(t={}){if(!R()){un("SavedVariables change ignored because the user is not authenticated.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",n=e.toLowerCase(),r=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=String(t.filePath||"").trim(),o=r?`${r} saved variables (${i})`:i;un(`SavedVariables change detected: ${i}${s?` (${s})`:""}. Key: ${n}.`,t),p(`saved-vars-file-updated-${e}`,`${o} has been updated.`,{ttlMs:m}),n==="banking"&&(un(`Processing banking SavedVariables update from ${i}.`),_h(t)),n==="roster"&&(un(`Processing roster SavedVariables update from ${i}.`),Ah(t)),n==="applications"&&(un(`Processing applications SavedVariables update from ${i}.`),Xu(t))}async function _h(t={}){await Ff(t),await Wa(t)}async function Ah(t={}){await Uu(t)}function Lh(t){!R()||p("file-watcher-error",w(t),{ttlMs:m})}function $h(){an("guildsync-savedvars-file-modified",wh),an("guildsync-file-watcher-error",Lh),an("guildsync-login-complete",async t=>{k=t||{logged_in:!1,allowed:!1},Yn(),yn(),await Tt(),p("auth",k.status_message||`Logged in and authorized as ${pe()}.`,{ttlMs:m})}),an("guildsync-login-denied",async t=>{k={logged_in:!1,allowed:!1,status_message:""},Yn(),await Tt(),p("auth",t||"Access denied.",{ttlMs:m}),yn()}),an("guildsync-login-failed",async t=>{k={logged_in:!1,allowed:!1,status_message:""},Yn(),await Tt(),p("auth",t||"Login failed.",{ttlMs:m}),yn()})}function R(){return Boolean((k==null?void 0:k.logged_in)&&(k==null?void 0:k.allowed)&&(k==null?void 0:k.token))}function pe(){var t,e;return((t=k.user)==null?void 0:t.display_name)||((e=k.user)==null?void 0:e.username)||"Discord User"}function Eh(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),n=String(t.discord_user_id||"").trim();if(!e||!n)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=128`}function dc(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function Rh(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Dh(){cn&&(cn.disconnect(),cn=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),n=Math.round(t.getBoundingClientRect().height);cn=new ResizeObserver(r=>{const i=r[0];if(!i)return;const s=Math.round(i.contentRect.width),o=Math.round(i.contentRect.height);s===e&&o===n||(e=s,n=o,uc(),lc())}),cn.observe(t)}function uc(){clearTimeout(To),To=setTimeout(async()=>{try{await ys()}catch{}},500)}function w(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function c(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function h(t){return c(t)}$h();Wl();
