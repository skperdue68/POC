(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function xo(t,e,n,r=()=>{}){if(!t||!e)return;const i=a=>{var l;return(l=a.getAttribute(n))!=null?l:"__empty__"},s=new Map(Array.from(t.children).map(a=>[i(a),a])),o=new Set;Array.from(e.children).forEach((a,l)=>{let h=s.get(i(a));if(!h)h=a.cloneNode(!0),r(h);else if(!h.isEqualNode(a)){for(const y of Array.from(h.attributes))a.hasAttribute(y.name)||h.removeAttribute(y.name);for(const y of Array.from(a.attributes))h.getAttribute(y.name)!==y.value&&h.setAttribute(y.name,y.value);for(Array.from(a.children).forEach((y,b)=>{const g=h.children[b];if(g!=null&&g.isEqualNode(y))return;const k=y.cloneNode(!0);g?g.replaceWith(k):h.append(k),r(k)});h.children.length>a.children.length;)h.lastElementChild.remove()}t.children[l]!==h&&t.insertBefore(h,t.children[l]||null),o.add(h)});for(const a of Array.from(t.children))o.has(a)||a.remove()}function pn(t,e){t&&e&&!t.isEqualNode(e)&&(t.innerHTML=e.innerHTML)}function mn(t,e){t&&e&&t.textContent!==e.textContent&&(t.textContent=e.textContent)}const B=t=>String(t!=null?t:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Tc(){return{open:"",toggle(t){this.open=this.open===t?"":t},close(){this.open=""}}}function _i(t,e){var n;return t.type==="boolean"?String(e).toLowerCase()===String(t.defaultValue).toLowerCase():t.type==="number"?String(e).trim()!==""&&Number(e)===Number(t.defaultValue):String(e!=null?e:"")===String((n=t.defaultValue)!=null?n:"")}function Io(t,e){const r=Object.hasOwn(e,t.key)?e[t.key]===null?t.defaultValue:e[t.key]:t.value,i=!_i(t,r);return{value:r,override:i,source:i?"Overridden":"Default"}}function Jr(t,e){return t.type==="boolean"?e===!0||String(e).toLowerCase()==="true"?"Enabled":"Disabled":t.type==="select"?{private_thread:"Private thread (public fallback)",channel:"Channel or thread"}[e]||String(e):e==null||e===""?"Not configured":String(e)}function Oo(t,{body:e=!1}={}){const n={recipient:"@ExampleMember",account_name:"@ExampleMember",display_name:"@ExampleMember",amount:"10,001",deposit_amount:"10,001",raw_amount:"10001",raw_deposit_amount:"10001",event_id:"123456789",ticket_quantity:"20",tickets:"20",purchased_tickets:"20",bonus_percent:"20",bonus_tickets:"4",total_tickets:"24",bonus_deadline:"October 9, 2026 at 7:00 PM Eastern",bonus_block:`Early Purchase Bonus: 20% for purchases before October 9, 2026 at 7:00 PM ET.
Bonus Tickets: 4
Total Tickets: 24`,note:"",note_block:"",ticket_type:"Bi-Weekly",ticket_type_raw:"biweekly",transaction_type:"biweekly",ticket_gold_cost:"10,001",gold_cost:"10,001",raw_gold_cost:"10001",raw_ticket_gold_cost:"10001",purchase_date:"October 5, 2026",data_source:"Guild bank",event_datetime:"2026-10-05T12:00:00Z",event_timestamp:"1791201600",raffle_datetime_eastern:"October 10, 2026 at 8:00 PM Eastern",raffle_date_time_eastern:"October 10, 2026 at 8:00 PM Eastern",raffle_datetime:"October 10, 2026 at 8:00 PM Eastern",mail_request_id:"example",mail_batch_id:"example"},r=String(t).replace(/{([a-zA-Z0-9_]+)}/g,(i,s)=>{var o;return(o=n[s])!=null?o:i});return e&&!String(t).includes("{bonus_block}")?r+`

`+n.bonus_block:r}function bs(t,{refresh:e=!1,root:n=document}={}){const r=()=>{for(const o of document.querySelectorAll("[data-report-toggle]")){const a=o.dataset.reportToggle===t.open;o.setAttribute("aria-expanded",String(a));const l=document.getElementById(o.getAttribute("aria-controls"));l&&(l.classList.toggle("is-open",a),l.inert=!a)}};for(const o of n.querySelectorAll("[data-report-toggle]"))o.addEventListener("click",()=>{t.toggle(o.dataset.reportToggle),r()});for(const o of n.querySelectorAll('.reports-panel .report-run-button:not([type="submit"])'))o.addEventListener("click",()=>{t.close(),r()});const i=e?Array.from(document.querySelectorAll(".report-section-content")):[],s=i.map(o=>o.style.transition);for(const o of i)o.style.transition="none";r();for(const o of i)o.offsetHeight;i.forEach((o,a)=>o.style.transition=s[a])}const Qr=t=>t.type==="boolean"||t.type==="select"&&t.options.length===2;function Bc(t,e){return Jr(t,e)+(Qr(t)&&_i(t,e)?" (Default)":"")}function Nc(){let t=null,e={},n=!1,r="",i=!1;const s=(l,h)=>{const y=`data-config-value="${B(l.key)}" id="config-${B(l.key)}" aria-describedby="config-help-${B(l.key)}" `;if(l.type==="boolean"||l.type==="select"){const b=l.type==="boolean"?["true","false"]:l.options;return`<select ${y}>${b.map(g=>`<option value="${B(g)}" ${String(g)===String(h.value)?"selected":""}>${B(Bc(l,g))}</option>`).join("")}</select>`}return l.type==="template"?`<textarea ${y} rows="${l.key.includes("BODY")?9:3}" maxlength="${l.maxLength}">${B(h.value)}</textarea>`:`<input ${y} type="${l.type==="number"?"number":"text"}" ${l.type==="number"?`min="${l.min}" max="${l.max}" step="any"`:""} value="${B(h.value)}" placeholder="Not configured">`};return{render:()=>{const l=t?[...new Set(t.settings.map(h=>h.group))]:[];return`<article class="report-option-card admin-configuration-card"><div class="report-option-copy">
   <h3><button type="button" class="report-section-toggle" data-report-toggle="configuration" aria-expanded="false" aria-controls="adminConfigurationContent">Administrator Configuration <span aria-hidden="true">\u25BE</span></button></h3>
   <div id="adminConfigurationContent" class="report-section-content" inert><div class="report-section-inner">
   <p>Edit any setting to override its default. Changes take effect only after Save. Choose the option marked (Default) to restore a two-choice setting, or use Return to default for other fields. Settings apply live; active deliveries finish safely.</p>
   <p role="status" class="configuration-status">${B(r)}</p>
   ${t?`
   ${t.botDefaultsReported?"":"<p>Bot defaults have not been reported yet. Connect the updated bot before editing its settings.</p>"}
   <form id="adminConfigurationForm">
    ${l.map((h,y)=>{const b=t.settings.filter(k=>k.group===h),g=[...new Set(b.map(k=>k.section||""))];return`<fieldset class="configuration-group" ${i?"disabled":""}><legend>${B(h)}</legend>
      ${g.map((k,L)=>`<section class="configuration-subgroup" ${k?`aria-labelledby="config-section-${y}-${L}"`:""}>
       ${k?`<h4 id="config-section-${y}-${L}">${B(k)}</h4>`:""}
       ${b.filter(S=>(S.section||"")===k).map(S=>{const E=Io(S,e);return`<div class="configuration-setting" role="group" aria-labelledby="config-label-${B(S.key)}">
         <div class="configuration-setting-header"><label id="config-label-${B(S.key)}" for="config-${B(S.key)}">${B(S.label)}</label><span class="configuration-source" data-config-source="${B(S.key)}">${B(E.source)}</span></div>
         <small class="configuration-env-key">.env: <code>${B(S.key)}</code></small>
         <p class="configuration-help" id="config-help-${B(S.key)}">${B(S.help||"Changes this setting after you save the configuration.")}</p>
         <div class="configuration-values${Qr(S)?" configuration-two-options":""}">
          <div class="configuration-selected-value"><span>Current selection</span>${s(S,E)}</div>
          ${Qr(S)?"":`<div class="configuration-default-value"><span>Default value</span><output>${B(Jr(S,S.defaultValue))}</output><button type="button" class="configuration-default" data-config-default="${B(S.key)}" aria-label="Return ${B(S.label)} to default: ${B(Jr(S,S.defaultValue))}">Return to default</button></div>`}
         </div>
         ${S.placeholders?`<small>Placeholders: ${S.placeholders.map(F=>B("{"+F+"}")).join(", ")}</small>`:""}
         ${S.group==="Receipt messages"?`<label>Example preview (20% bonus)<pre data-config-preview="${B(S.key)}">${B(Oo(E.value,{body:S.key.endsWith("BODY_TEMPLATE")}))}</pre></label>`:""}
        </div>`}).join("")}
      </section>`).join("")}
     </fieldset>`}).join("")}
    <div class="configuration-actions"><button type="submit" ${i?"disabled":""}>${i?"Saving...":"Save Configuration"}</button><button type="button" id="reloadAdminConfiguration" ${i?"disabled":""}>Discard edits and reload</button></div>
   </form>`:`<p>${n?"Loading configuration...":"Configuration is not loaded."}</p><button type="button" id="reloadAdminConfiguration">Load configuration</button>`}
   </div></div></div></article>`},wire:({request:l,rerender:h})=>{var b,g;const y=async()=>{if(!n){n=!0,r="";try{const k=await l("guildsync:request-admin-configuration",{});if(!(k!=null&&k.ok))throw Error((k==null?void 0:k.message)||"Could not load configuration.");t=k.configuration,e={}}catch(k){r=k.message}finally{n=!1,h()}}};!t&&!n&&!r&&y(),(b=document.getElementById("reloadAdminConfiguration"))==null||b.addEventListener("click",()=>void y());for(const k of document.querySelectorAll("[data-config-value]"))k.addEventListener("input",()=>{const L=k.dataset.configValue,S=t.settings.find(te=>te.key===L);e[L]=_i(S,k.value)?null:k.value;const E=document.querySelector(`[data-config-source="${L}"]`);E&&(E.textContent=Io(S,e).source);const F=document.querySelector(`[data-config-preview="${L}"]`);F&&(F.textContent=Oo(k.value,{body:L.endsWith("BODY_TEMPLATE")}))});for(const k of document.querySelectorAll("[data-config-default]"))k.addEventListener("click",()=>{e[k.dataset.configDefault]=null,h()});(g=document.getElementById("adminConfigurationForm"))==null||g.addEventListener("submit",async k=>{var S;if(k.preventDefault(),i)return;if(!Object.keys(e).length){r="No changes to save.",h();return}i=!0,r="";const L={...e};h(),(S=document.getElementById("adminConfigurationForm"))==null||S.querySelectorAll("input,select,textarea,button").forEach(E=>E.disabled=!0);try{const E=await l("guildsync:save-admin-configuration",{revision:t.revision,changes:L});if(!(E!=null&&E.ok))throw Error((E==null?void 0:E.message)||"Could not save configuration.");t=E.configuration,e={},r="Configuration saved. Backend settings are active; the connected bot applies its settings after active deliveries finish. An offline bot applies them when it reconnects."}catch(E){r=E.message}finally{i=!1,h()}})},clear(){t=null,e={},r=""}}}const Cc="/assets/splash.ea386b6a.png",qc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",xc="/assets/GuildSync-Graphic.9169020d.png",Se=Object.create(null);Se.open="0";Se.close="1";Se.ping="2";Se.pong="3";Se.message="4";Se.upgrade="5";Se.noop="6";const Hn=Object.create(null);Object.keys(Se).forEach(t=>{Hn[Se[t]]=t});const Xr={type:"error",data:"parser error"},ys=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",ks=typeof ArrayBuffer=="function",vs=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Ai=({type:t,data:e},n,r)=>ys&&e instanceof Blob?n?r(e):Po(e,r):ks&&(e instanceof ArrayBuffer||vs(e))?n?r(e):Po(new Blob([e]),r):r(Se[t]+(e||"")),Po=(t,e)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];e("b"+(r||""))},n.readAsDataURL(t)};function Fo(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let xr;function Ic(t,e){if(ys&&t.data instanceof Blob)return t.data.arrayBuffer().then(Fo).then(e);if(ks&&(t.data instanceof ArrayBuffer||vs(t.data)))return e(Fo(t.data));Ai(t,!1,n=>{xr||(xr=new TextEncoder),e(xr.encode(n))})}const Go="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",gn=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<Go.length;t++)gn[Go.charCodeAt(t)]=t;const Oc=t=>{let e=t.length*.75,n=t.length,r,i=0,s,o,a,l;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const h=new ArrayBuffer(e),y=new Uint8Array(h);for(r=0;r<n;r+=4)s=gn[t.charCodeAt(r)],o=gn[t.charCodeAt(r+1)],a=gn[t.charCodeAt(r+2)],l=gn[t.charCodeAt(r+3)],y[i++]=s<<2|o>>4,y[i++]=(o&15)<<4|a>>2,y[i++]=(a&3)<<6|l&63;return h},Pc=typeof ArrayBuffer=="function",Li=(t,e)=>{if(typeof t!="string")return{type:"message",data:Ss(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:Fc(t.substring(1),e)}:Hn[n]?t.length>1?{type:Hn[n],data:t.substring(1)}:{type:Hn[n]}:Xr},Fc=(t,e)=>{if(Pc){const n=Oc(t);return Ss(n,e)}else return{base64:!0,data:t}},Ss=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},ws=String.fromCharCode(30),Gc=(t,e)=>{const n=t.length,r=new Array(n);let i=0;t.forEach((s,o)=>{Ai(s,!1,a=>{r[o]=a,++i===n&&e(r.join(ws))})})},Uc=(t,e)=>{const n=t.split(ws),r=[];for(let i=0;i<n.length;i++){const s=Li(n[i],e);if(r.push(s),s.type==="error")break}return r};function Vc(){return new TransformStream({transform(t,e){Ic(t,n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,r)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(r))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(n)})}})}let Ir;function Pn(t){return t.reduce((e,n)=>e+n.length,0)}function Fn(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let r=0;for(let i=0;i<e;i++)n[i]=t[0][r++],r===t[0].length&&(t.shift(),r=0);return t.length&&r<t[0].length&&(t[0]=t[0].slice(r)),n}function Hc(t,e){Ir||(Ir=new TextDecoder);const n=[];let r=0,i=-1,s=!1;return new TransformStream({transform(o,a){for(n.push(o);;){if(r===0){if(Pn(n)<1)break;const l=Fn(n,1);s=(l[0]&128)===128,i=l[0]&127,i<126?r=3:i===126?r=1:r=2}else if(r===1){if(Pn(n)<2)break;const l=Fn(n,2);i=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),r=3}else if(r===2){if(Pn(n)<8)break;const l=Fn(n,8),h=new DataView(l.buffer,l.byteOffset,l.length),y=h.getUint32(0);if(y>Math.pow(2,53-32)-1){a.enqueue(Xr);break}i=y*Math.pow(2,32)+h.getUint32(4),r=3}else{if(Pn(n)<i)break;const l=Fn(n,i);a.enqueue(Li(s?l:Ir.decode(l),e)),r=0}if(i===0||i>t){a.enqueue(Xr);break}}}})}const _s=4;function q(t){if(t)return Wc(t)}function Wc(t){for(var e in q.prototype)t[e]=q.prototype[e];return t}q.prototype.on=q.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};q.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};q.prototype.off=q.prototype.removeListener=q.prototype.removeAllListeners=q.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===e||r.fn===e){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+t],this};q.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,e)}return this};q.prototype.emitReserved=q.prototype.emit;q.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};q.prototype.hasListeners=function(t){return!!this.listeners(t).length};const mr=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0))(),K=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),jc="arraybuffer";function As(t,...e){return e.reduce((n,r)=>(t.hasOwnProperty(r)&&(n[r]=t[r]),n),{})}const zc=K.setTimeout,Yc=K.clearTimeout;function gr(t,e){e.useNativeTimers?(t.setTimeoutFn=zc.bind(K),t.clearTimeoutFn=Yc.bind(K)):(t.setTimeoutFn=K.setTimeout.bind(K),t.clearTimeoutFn=K.clearTimeout.bind(K))}const Kc=1.33;function Jc(t){return typeof t=="string"?Qc(t):Math.ceil((t.byteLength||t.size)*Kc)}function Qc(t){let e=0,n=0;for(let r=0,i=t.length;r<i;r++)e=t.charCodeAt(r),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(r++,n+=4);return n}function Ls(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Xc(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function Zc(t){let e={},n=t.split("&");for(let r=0,i=n.length;r<i;r++){let s=n[r].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class el extends Error{constructor(e,n,r){super(e),this.description=n,this.context=r,this.type="TransportError"}}class Ei extends q{constructor(e){super(),this.writable=!1,gr(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,r){return super.emitReserved("error",new el(e,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=Li(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=Xc(e);return n.length?"?"+n:""}}class tl extends Ei{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};Uc(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Gc(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=Ls()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let Es=!1;try{Es=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const nl=Es;function rl(){}class il extends tl{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let r=location.port;r||(r=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,n){const r=this.request({method:"POST",data:e});r.on("success",n),r.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=e}}class ge extends q{constructor(e,n,r){super(),this.createRequest=e,gr(this,r),this._opts=r,this._method=r.method||"GET",this._uri=n,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const n=As(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(n);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var i;r.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=ge.requestsCount++,ge.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=rl,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete ge.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}ge.requestsCount=0;ge.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Uo);else if(typeof addEventListener=="function"){const t="onpagehide"in K?"pagehide":"unload";addEventListener(t,Uo,!1)}}function Uo(){for(let t in ge.requests)ge.requests.hasOwnProperty(t)&&ge.requests[t].abort()}const ol=function(){const t=$s({xdomain:!1});return t&&t.responseType!==null}();class sl extends il{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=ol&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new ge($s,this.uri(),e)}}function $s(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||nl))return new XMLHttpRequest}catch{}if(!e)try{return new K[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Rs=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class al extends Ei{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,r=Rs?{}:As(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;Ai(r,this.supportsBinary,s=>{try{this.doWrite(r,s)}catch{}i&&mr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=Ls()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const Or=K.WebSocket||K.MozWebSocket;class cl extends al{createSocket(e,n,r){return Rs?new Or(e,n,r):n?new Or(e,n):new Or(e)}doWrite(e,n){this.ws.send(n)}}class ll extends Ei{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=Hc(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(n).getReader(),i=Vc();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const s=()=>{r.read().then(({done:a,value:l})=>{a||(this.onPacket(l),s())}).catch(a=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;this._writer.write(r).then(()=>{i&&mr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const dl={websocket:cl,webtransport:ll,polling:sl},ul=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,fl=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Zr(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),r=t.indexOf("]");n!=-1&&r!=-1&&(t=t.substring(0,n)+t.substring(n,r).replace(/:/g,";")+t.substring(r,t.length));let i=ul.exec(t||""),s={},o=14;for(;o--;)s[fl[o]]=i[o]||"";return n!=-1&&r!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=hl(s,s.path),s.queryKey=pl(s,s.query),s}function hl(t,e){const n=/\/{2,9}/g,r=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function pl(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,s){i&&(n[i]=s)}),n}const ei=typeof addEventListener=="function"&&typeof removeEventListener=="function",Wn=[];ei&&addEventListener("offline",()=>{Wn.forEach(t=>t())},!1);class je extends q{constructor(e,n){if(super(),this.binaryType=jc,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const r=Zr(e);n.hostname=r.host,n.secure=r.protocol==="https"||r.protocol==="wss",n.port=r.port,r.query&&(n.query=r.query)}else n.host&&(n.hostname=Zr(n.host).host);gr(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(r=>{const i=r.prototype.name;this.transports.push(i),this._transportsByName[i]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Zc(this.opts.query)),ei&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Wn.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=_s,n.transport=e,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&je.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",je.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(n+=Jc(i)),r>0&&n>this._maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,mr(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,r){return this._sendPacket("message",e,n,r),this}send(e,n,r){return this._sendPacket("message",e,n,r),this}_sendPacket(e,n,r,i){if(typeof n=="function"&&(i=n,n=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const s={type:e,data:n,options:r};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(je.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),ei&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=Wn.indexOf(this._offlineEventListener);r!==-1&&Wn.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}}je.protocol=_s;class ml extends je{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let n=this.createTransport(e),r=!1;je.priorWebsocketSuccess=!1;const i=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",b=>{if(!r)if(b.type==="pong"&&b.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;je.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(y(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const g=new Error("probe error");g.transport=n.name,this.emitReserved("upgradeError",g)}}))};function s(){r||(r=!0,y(),n.close(),n=null)}const o=b=>{const g=new Error("probe error: "+b);g.transport=n.name,s(),this.emitReserved("upgradeError",g)};function a(){o("transport closed")}function l(){o("socket closed")}function h(b){n&&b.name!==n.name&&s()}const y=()=>{n.removeListener("open",i),n.removeListener("error",o),n.removeListener("close",a),this.off("close",l),this.off("upgrading",h)};n.once("open",i),n.once("error",o),n.once("close",a),this.once("close",l),this.once("upgrading",h),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const n=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&n.push(e[r]);return n}}class gl extends ml{constructor(e,n={}){const r=typeof e=="object"?e:n;(!r.transports||r.transports&&typeof r.transports[0]=="string")&&(r.transports=(r.transports||["polling","websocket","webtransport"]).map(i=>dl[i]).filter(i=>!!i)),super(e,r)}}function bl(t,e="",n){let r=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),r=Zr(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const s=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+s+":"+r.port+e,r.href=r.protocol+"://"+s+(n&&n.port===r.port?"":":"+r.port),r}const yl=typeof ArrayBuffer=="function",kl=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,Ds=Object.prototype.toString,vl=typeof Blob=="function"||typeof Blob<"u"&&Ds.call(Blob)==="[object BlobConstructor]",Sl=typeof File=="function"||typeof File<"u"&&Ds.call(File)==="[object FileConstructor]";function $i(t){return yl&&(t instanceof ArrayBuffer||kl(t))||vl&&t instanceof Blob||Sl&&t instanceof File}function jn(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,r=t.length;n<r;n++)if(jn(t[n]))return!0;return!1}if($i(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return jn(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&jn(t[n]))return!0;return!1}function wl(t){const e=[],n=t.data,r=t;return r.data=ti(n,e),r.attachments=e.length,{packet:r,buffers:e}}function ti(t,e){if(!t)return t;if($i(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let r=0;r<t.length;r++)n[r]=ti(t[r],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=ti(t[r],e));return n}return t}function _l(t,e){return t.data=ni(t.data,e),delete t.attachments,t}function ni(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=ni(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=ni(t[n],e));return t}const Ms=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Al=5;var _;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(_||(_={}));class Ll{constructor(e){this.replacer=e}encode(e){return(e.type===_.EVENT||e.type===_.ACK)&&jn(e)?this.encodeAsBinary({type:e.type===_.EVENT?_.BINARY_EVENT:_.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===_.BINARY_EVENT||e.type===_.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=wl(e),r=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(r),i}}class Ri extends q{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const r=n.type===_.BINARY_EVENT;r||n.type===_.BINARY_ACK?(n.type=r?_.EVENT:_.ACK,this.reconstructor=new El(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if($i(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const r={type:Number(e.charAt(0))};if(_[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===_.BINARY_EVENT||r.type===_.BINARY_ACK){const s=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(s,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!Ts(a)||a<0)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=a}if(e.charAt(n+1)==="/"){const s=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););r.nsp=e.substring(s,n)}else r.nsp="/";const i=e.charAt(n+1);if(i!==""&&Number(i)==i){const s=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}r.id=Number(e.substring(s,n+1))}if(e.charAt(++n)){const s=this.tryParse(e.substr(n));if(Ri.isPayloadValid(r.type,s))r.data=s;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case _.CONNECT:return tr(n);case _.DISCONNECT:return n===void 0;case _.CONNECT_ERROR:return typeof n=="string"||tr(n);case _.EVENT:case _.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&Ms.indexOf(n[0])===-1);case _.ACK:case _.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class El{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=_l(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function $l(t){return typeof t=="string"}const Ts=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function Rl(t){return t===void 0||Ts(t)}function tr(t){return Object.prototype.toString.call(t)==="[object Object]"}function Dl(t,e){switch(t){case _.CONNECT:return e===void 0||tr(e);case _.DISCONNECT:return e===void 0;case _.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&Ms.indexOf(e[0])===-1);case _.ACK:return Array.isArray(e);case _.CONNECT_ERROR:return typeof e=="string"||tr(e);default:return!1}}function Ml(t){return $l(t.nsp)&&Rl(t.id)&&Dl(t.type,t.data)}const Tl=Object.freeze(Object.defineProperty({__proto__:null,protocol:Al,get PacketType(){return _},Encoder:Ll,Decoder:Ri,isPacketValid:Ml},Symbol.toStringTag,{value:"Module"}));function re(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const Bl=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Bs extends q{constructor(e,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[re(e,"open",this.onopen.bind(this)),re(e,"packet",this.onpacket.bind(this)),re(e,"error",this.onerror.bind(this)),re(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var r,i,s;if(Bl.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const o={type:_.EVENT,data:n};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const y=this.ids++,b=n.pop();this._registerAckCallback(y,b),o.id=y}const a=(i=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||i===void 0?void 0:i.writable,l=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!a||(l?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,n){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[e]=n;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);n.call(this,new Error("operation has timed out"))},i),o=(...a)=>{this.io.clearTimeoutFn(s),n.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...n){return new Promise((r,i)=>{const s=(o,a)=>o?i(o):r(a);s.withError=!0,n.push(s),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>(this._queue[0],i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(i)):(this._queue.shift(),n&&n(null,...s)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:_.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case _.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case _.EVENT:case _.BINARY_EVENT:this.onevent(e);break;case _.ACK:case _.BINARY_ACK:this.onack(e);break;case _.DISCONNECT:this.ondisconnect();break;case _.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let r=!1;return function(...i){r||(r=!0,n.packet({type:_.ACK,id:e,data:i}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:_.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,e.data)}}}function Yt(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}Yt.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-n:t+n}return Math.min(t,this.max)|0};Yt.prototype.reset=function(){this.attempts=0};Yt.prototype.setMin=function(t){this.ms=t};Yt.prototype.setMax=function(t){this.max=t};Yt.prototype.setJitter=function(t){this.jitter=t};class ri extends q{constructor(e,n){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,gr(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new Yt({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const i=n.parser||Tl;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new gl(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=re(n,"open",function(){r.onopen(),e&&e()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=re(n,"error",s);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),n.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(re(e,"ping",this.onping.bind(this)),re(e,"data",this.ondata.bind(this)),re(e,"error",this.onerror.bind(this)),re(e,"close",this.onclose.bind(this)),re(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){mr(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new Bs(this,e,n),this.nsps[e]=r),r}_destroy(e){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let r=0;r<n.length;r++)this.engine.write(n[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const an={};function zn(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=bl(t,e.path||"/socket.io"),r=n.source,i=n.id,s=n.path,o=an[i]&&s in an[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let l;return a?l=new ri(r,e):(an[i]||(an[i]=new ri(r,e)),l=an[i]),n.query&&!e.query&&(e.query=n.queryKey),l.socket(n.path,e)}Object.assign(zn,{Manager:ri,Socket:Bs,io:zn,connect:zn});window.GUILDSYNC_WEB=!0;const Di="guildsync-web-session";function Ns(){try{return JSON.parse(localStorage.getItem(Di)||"{}")||{}}catch{return{}}}function Nl(t){localStorage.setItem(Di,JSON.stringify(t||{}))}function Mi(){localStorage.removeItem(Di)}function Vo(t,e){let n=0,r=!1;try{const i=JSON.parse(atob(t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/")));n=Number(i.exp)*1e3,r=Boolean(i.jti&&i.sub&&!i.exp)}catch{}return n>Date.now()||r?{...e,token:t,logged_in:!0,allowed:!0,status_message:"Reconnecting to GuildSync. Your login is saved."}:(Mi(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:"Session expired. Please log in again."})}async function Cl(){return!0}async function Cs(){return!0}async function ql(){return!0}async function xl(){return!0}async function Il(){return!0}async function Ol(){return window.location.assign("/api/auth/discord/web-login"),!0}async function Pl(){var s,o,a,l,h,y,b,g;const t=Ns(),e=t.token||localStorage.getItem("guildsync-web-token")||"";if(!e)return{logged_in:!1,allowed:!1,status_message:"Not logged in."};let n;try{n=await fetch("/api/auth/session",{headers:{Authorization:`Bearer ${e}`}})}catch{return Vo(e,t)}if(n.status>=500)return Vo(e,t);const r=await n.json().catch(()=>({}));if(!n.ok||r.ok===!1)return Mi(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:r.message||"Session expired. Please log in again."};const i={logged_in:!0,allowed:!0,token:e,user:r.user,discord_user_id:((s=r.user)==null?void 0:s.discord_user_id)||"",username:((o=r.user)==null?void 0:o.username)||"",global_name:((a=r.user)==null?void 0:a.global_name)||"",display_name:((l=r.user)==null?void 0:l.display_name)||((h=r.user)==null?void 0:h.global_name)||((y=r.user)==null?void 0:y.username)||"",avatar_url:((b=r.user)==null?void 0:b.avatar_url)||"",role:((g=r.user)==null?void 0:g.role)||"user",status_message:"Logged in."};return Nl(i),i}async function Fl(){const t=Ns().token||localStorage.getItem("guildsync-web-token");if(t){const e=await fetch("/api/auth/logout",{method:"POST",headers:{Authorization:`Bearer ${t}`}});if(!e.ok&&e.status!==401)throw new Error("Could not log out on the server. Please try again.")}return Mi(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:"Logged out."}}async function Gl(){return br()}async function Ul(){return br()}async function br(){return{watching:!1,directory:"Web upload mode",files:[{key:"banking",fileName:"GuildSyncBanking.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"},{key:"roster",fileName:"GuildSyncRoster.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"}]}}async function Vl(){return br()}async function Hl(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function Wl(){return{ok:!0}}async function jl(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function zl(){return{ok:!0}}async function Yl(t){return t&&window.open(t,"_blank","noopener,noreferrer"),!0}async function Kl(){return{running:!1,message:"ESO process detection is only available in the desktop client."}}async function Jl(){throw new Error("Deposit mail sending is disabled in the web client. Use the GuildSync desktop client for ESO mail queue writes.")}async function Ql(){return{ok:!0,acknowledgements:[],records:[]}}async function Xl(){return{ok:!0}}async function Zl(){return{ok:!0}}async function ed(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSyncApplications.lua onto the GuildSync web window.")}async function td(){return{ok:!0}}const Gn=new Map;function cn(t,e){return Gn.has(t)||Gn.set(t,new Set),Gn.get(t).add(e),()=>{var n;return(n=Gn.get(t))==null?void 0:n.delete(e)}}const yr="1.2.7",qs={windows:{label:"Windows detected",shortLabel:"Windows"},macos:{label:"macOS detected",shortLabel:"macOS"},linux:{label:"Linux detected",shortLabel:"Linux"}},xs="guildsync-web-savedvars-upload-banner-dismissed",nd=new Map([["GuildSyncBanking.lua","banking"],["GuildSyncRoster.lua","roster"],["GuildSyncApplications.lua","applications"]]),rd=30*60*1e3,Is="guildsync-pending-banking-uploads",Os="guildsync-pending-deposit-mail",id=5e3,od=30*1e3,Ps="guildsync-pending-roster-uploads",Fs="guildsync-pending-applications-uploads",m=60*1e3,Ti=7e3,Gs=1400,Us=2400,sd=4e3,ad=38,Vs=document.querySelector("#app");let Ho=null,ln=null,Wo=!1,Rn=!1,Yn=null,Pr=!1,Fr=!1,Gr=!1,ze=null,Le={running:!1,message:""},_t=null,At=null,Kn=!1,Lt=null,Ur=!1,wt=0,Vr=!1,tt=new Map,st=new Map,P="",gt=!1,bt=!1,bn=[],v={logged_in:!1,allowed:!1,status_message:""},Pe={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},Ae=null,ii="",d=null,j=[],kr=[],vr=null,Ct=!1,nr=!1,rr="",Et=new Set,$t=new Set,Sn="username",ct="asc",oi=null,si=null,X=[],ir=null,Ce=!1,ai=!1,or="",ci=null,li=null,lt=new Set,Rt=new Set,Re="",W="",x=-1,qt=!1,wn="",J=[],nt="",Ye=[],Ke=!1,Me="",Hr=null,ie=-1,Kt=!1,_n="",Je=[],sr=!1,dt=!1,Qe="",xt="",It=!1,Fe="",Q=[],Ot="",yt="",Xe=[],Ze=!1,Te="",jo=null,ot=0;const cd=650;let oe=-1,Jt=!1,Qt=[],Ge=!1,ut="",Xt=!1,An=[],Ue=!1,ft="",it=!1,Bi=[],Ve=!1,ht="",Zt="",He="",Dt="",We="",D=[],O=!1,H="",Ie=!1,Sr="",at="",Dn="",Mn="",De=-1,Oe=!1,R=null,pt=[],Pt=!1,qe="",Tn="",pe=-1,en=!1,Ni=null,yn=null;const Ci=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let z=[],G=null,me=null,ae=!1;const Hs=Tc(),Ws=Nc();let Ft=[],Be="",zo=!1,N="biweekly",js=null,xe=!1,mt=!1,ue="biweekly",tn=!1,Gt=!1,Ee="",$e=null,I={targetType:"other",note:"",tickets:""},nn=!1,kt="",V=[],le=[],be="",ye=!1,ke="",Mt=null,se=-1,Ne=!1,ar=!1,Y="",M={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},rn="",U=-1,ce=!1,di={biweekly:0,monthly:0};const ld=1780786800,rt=14*24*60*60,cr=60*60,lr=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let T=lr[0].id;const ui=new Set;function dd(){Vs.innerHTML=`
    <main class="splash-screen">
      <img src="${Cc}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await Cl(),await ud(),zs(),hd(),vn(),await Nt()},5e3)}async function ud(){try{v=await Pl()}catch(t){v={logged_in:!1,allowed:!1,status_message:""},p("session-error",w(t),{ttlMs:m})}}function zs(){Vs.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${qc}" alt="" class="title-icon" />
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
            <img src="${xc}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${c(yr)}</div>
            </div>
          </div>
          <div class="compact-header-actions">
            ${Ks()}
            <div id="discordArea" class="discord-area"></div>
          </div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${Ys()}
        </nav>

        <div id="webSavedVarsUploadBannerHost">
          ${jd()}
        </div>

        <section id="guildSyncTabContent" class="guildsync-tab-content${sa()?" web-upload-banner-dismissed":""}" aria-live="polite">
          ${Qs()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await xl()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await Cs(),await Il()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await ql()}),er(),zd(),Zs(),kc(),ja(),oc(),aa(),Ha(),Ca(),qa(),xa(),Ia(),_a(),za(),Sd(),et(),zt(),Wo||(window.addEventListener("resize",()=>{Mc(),Rc()}),ip(),Wo=!0)}function Ys(){return lr.map(t=>{const e=t.id===T,n=md(t.id,e),r=n?Js():0,i=n?`Deposit mail needs attention: ${r} item${r===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${n?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${f(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${f(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${gd(t.icon)}</span>
          <span class="guildsync-tab-label">${c(t.label)}</span>
          ${n?`<span class="guildsync-tab-mail-badge" aria-label="${f(i)}">${r>99?"99+":c(String(r))}</span>`:""}
        </button>
      `}).join("")}function fd(){const t=Mr(),e=qs[t]||{label:"Desktop client",shortLabel:"Desktop"};return Ae&&Ae.platform===t?{available:!0,label:`${Ae.label||e.shortLabel} detected`,shortLabel:Ae.label||e.shortLabel,version:Ae.version,fileName:Ae.fileName,href:Ae.url}:{available:!1,label:e.label,shortLabel:e.shortLabel,fileName:"",href:"",error:ii}}async function hd(){const t=Mr();ii="";try{const e=await fetch(`/api/client-download?platform=${encodeURIComponent(t)}`,{headers:{Accept:"application/json"}});let n=null;try{n=await e.json()}catch{n=null}if(!e.ok)throw new Error((n==null?void 0:n.error)||`Download lookup failed with HTTP ${e.status}.`);const r=n.download&&typeof n.download=="object"?n.download:{},i=String(n.download_file_name||r.file_name||"").trim(),s=String(n.download_url||r.url||"").trim();if(!n.ok||!i||!s)throw new Error(n.error||"Download lookup did not return a usable file.");Ae={platform:String(r.platform||n.platform||t).trim(),label:String(r.label||"").trim(),version:String(r.version||"").trim(),fileName:i,url:s}}catch(e){Ae=null,ii=(e==null?void 0:e.message)||"No GuildSync desktop client download is currently available.";const n=(qs[t]||{}).shortLabel||"Desktop";p("desktop-client-download-unavailable",`No ${n} client is currently available for download.`,{tone:"warning",ttl:Ti}),console.warn("GuildSync desktop client download lookup failed.",e)}pd()}function pd(){const t=document.querySelector(".compact-header-actions .desktop-client-download-button");!t||(t.outerHTML=Ks())}function Ks(){const t=fd();if(!t.available){const e=t.error||"Looking for latest download...";return`
      <button
        class="desktop-client-download-button"
        type="button"
        disabled
        title="${f(e)}"
        aria-label="${f(e)}"
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
      href="${f(t.href)}"
      download="${f(t.fileName)}"
      title="Download ${f(t.fileName)}"
      aria-label="Download GuildSync desktop client for ${f(t.shortLabel)}"
    >
      <span class="desktop-client-download-icon" aria-hidden="true">\u2B07</span>
      <span class="desktop-client-download-copy">
        <span class="desktop-client-download-title">Download Desktop Client</span>
        <span class="desktop-client-download-subtitle">${c(t.label)} \xB7 ${c(t.version)} \xB7 ZIP</span>
      </span>
      <span class="desktop-client-download-caret" aria-hidden="true">\u25BE</span>
    </a>
  `}function Js(){return $()?Lr()+xn()+nc():0}function md(t,e){return t!=="more"||e?!1:Js()>0}function gd(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function Qs(){const t=lr.find(n=>n.id===T)||lr[0];let e="";return t.id==="discord-members"?e=ea():t.id==="eso-members"?e=ta():t.id==="more"?e=tc():t.id==="settings"?e=Yd():e=`
      <div class="guildsync-tab-panel" data-active-tab="${f(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${c(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${Ne?nf():""}
    ${tn?Pf():""}
    ${nn?Rf():""}
    ${Oe?zu():""}
    ${Jt?eu():""}
    ${Xt?su():""}
    ${it?du():""}
    ${Ie?wu():""}
    ${en?vd():""}
  `}function bd(){return en||qt||It||Ne||tn||nn||Oe||Kt||Jt||Xt||it||Ie||mt}function yd(){return en?!1:Ie?(bi(),!0):it?(gi(),!0):Xt?(mi(),!0):Jt?(pi(),!0):Oe?(Vt(),!0):Kt?(vi(),!0):tn?(fr(),!0):nn?(Vf(),u(),!0):Ne?(Ne=!1,u(),!0):qt?(qt=!1,u(),!0):It?(It=!1,u(),!0):mt?(mt=!1,u(),!0):!1}function kd(t){t.key==="Escape"&&yd()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",kd,!0),window.guildSyncGlobalModalEscapeAttached=!0);function qi(t={}){return new Promise(e=>{yn&&yn(!1),en=!0,Ni={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},yn=e,u()})}function dr(t=!1){const e=yn;yn=null,en=!1,Ni=null,e&&e(t===!0),u()}function vd(){const t=Ni||{};return`
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
          <button id="acceptGuildSyncConfirmButton" class="guildsync-confirm-button guildsync-confirm-accept ${f(t.confirmClass||"danger")}" type="button">${c(t.confirmLabel||"Confirm")}</button>
        </div>
      </div>
    </div>
  `}function Yo(t){var r,i,s,o;const e=(i=(r=t.target).closest)==null?void 0:i.call(r,"#cancelGuildSyncConfirmButton"),n=(o=(s=t.target).closest)==null?void 0:o.call(s,"#acceptGuildSyncConfirmButton");if(!(!e&&!n)){if(t.preventDefault(),t.stopPropagation(),e){dr(!1);return}n&&dr(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",Yo,!0),document.addEventListener("pointerup",Yo,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function Sd(){if(!en)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=r=>{r.preventDefault(),r.stopPropagation(),dr(!1)}),e&&(e.onclick=r=>{r.preventDefault(),r.stopPropagation(),dr(!0)});const n=document.querySelector(".guildsync-confirm-overlay");n&&(n.onclick=r=>{r.target===n&&(r.preventDefault(),r.stopPropagation())})}function Xs(t=T){if(!(d!=null&&d.connected))return;if(t==="discord-members"?Ct:t==="eso-members"?Ce:t==="more"?xe:!1){ui.add(t);return}ui.delete(t),t==="discord-members"&&Rr({silent:!0}),t==="eso-members"&&(ai=!0,St({silent:!0})),t==="more"&&ee({silent:!0})}function Bn(t){ui.has(t)&&Xs(t)}function Zs(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(bd())return;const e=t.dataset.tabId;if(!e)return;const n=e!==T;T=e,Xs(),n&&u()})})}function wd(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function xi(t){const e={x:window.scrollX,y:window.scrollY},n=[];for(let o=t;o;o=o.parentElement)n.push({element:o,top:o.scrollTop,left:o.scrollLeft});const r=t?Array.from(t.querySelectorAll("*")):[],i=(o,a)=>o.id?o.id===a.id:o.tagName===a.tagName&&o.className===a.className,s=r.filter(o=>o.scrollTop||o.scrollLeft).map(o=>({identity:{id:o.id,tagName:o.tagName,className:o.className},occurrence:r.filter(a=>i(o,a)).indexOf(o),top:o.scrollTop,left:o.scrollLeft}));return()=>{const o=t?Array.from(t.querySelectorAll("*")):[];for(const{identity:a,occurrence:l,top:h,left:y}of s){const b=o.filter(g=>i(a,g))[l];b&&(b.scrollTop=h,b.scrollLeft=y)}for(const{element:a,top:l,left:h}of n)a.scrollTop=l,a.scrollLeft=h;window.scrollTo({left:e.x,top:e.y,behavior:"instant"})}}function u(t={}){Ie&&wd();const e=document.querySelector(".guildsync-tabs"),n=document.querySelector("#guildSyncTabContent"),r=xi(n);e&&(e.innerHTML=Ys()),n&&(n.innerHTML=Qs()),Zs(),kc(),ja(),oc(),aa(),Ha(),Ca(),qa(),xa(),Ia(),_a(),za(),r(),t.restoreDiscordSearchFocus&&Dh(),t.restoreRosterSearchFocus&&Mh(),T==="discord-members"&&(d==null?void 0:d.connected)&&j.length===0&&!Ct&&Rr({silent:!0}),T==="eso-members"&&(d==null?void 0:d.connected)&&X.length===0&&!Ce&&!ai&&(ai=!0,St({silent:!0})),(T==="more"&&z.length===0||T==="settings"&&!G&&!zo)&&(d==null?void 0:d.connected)&&!xe&&(zo=!0,ee({silent:!0})),(T==="discord-members"||T==="eso-members"||T==="settings")&&(d==null?void 0:d.connected)&&D.length===0&&!O&&qn({silent:!0})}function ea(){const t=Eh(),e=Th(),n=Array.from(Et),r=Array.from($t);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${c(Sc(vr))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${Ct||nr?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${nr?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${f(rr)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!Et.has(i)).map(i=>`<option value="${f(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All roles</span>':n.map(i=>qh(i)).join("")}
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
              ${Ci.filter(i=>!$t.has(i.id)).map(i=>`<option value="${f(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>na("discord",i)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${Un("username","Username")}
                ${Un("global_name","Global Name")}
                ${Un("server_nickname","Server Nickname")}
                ${Un("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>Bh(i)).join(""):Nh()}
            </tbody>
          </table>
        </div>
      </div>
      ${It?Pd():""}
    </div>
  `}function ta(){const t=Bd(),e=qd(),n=Array.from(lt),r=Array.from(Rt);return`
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
          <span class="discord-last-refresh">Last Refresh: ${c(mf(ir))}</span>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${Ce?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Ce?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${f(or)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!lt.has(i)).map(i=>`<option value="${f(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All ranks</span>':n.map(i=>xd(i)).join("")}
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
              ${Ci.filter(i=>!Rt.has(i.id)).map(i=>`<option value="${f(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>na("roster",i)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${dn("account_name","Account Name")}
                ${dn("rank","Rank")}
                ${dn("joined","Joined")}
                ${dn("notes","Notes","roster-notes-header")}
                ${dn("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map((i,s)=>_d(i,s)).join(""):Dd()}
            </tbody>
          </table>
        </div>
      </div>
      ${qt?Vd():""}
      ${Kt?Ld():""}
    </div>
  `}function _d(t,e=-1){const n=Md(t.rank||""),r=n?` style="color: ${n};"`:"";return`
    <tr class="eso-roster-row${e===x?" roster-search-active-row":""}"${r} data-roster-row-index="${f(String(e))}" data-eso-account-name="${f(t.account_name||"")}">
      <td>${c(t.account_name||"")}</td>
      <td>${Ii(t.rank||"")}</td>
      <td>${c(Ar(t.joined))}</td>
      <td class="roster-notes-cell">${Ad(t)}</td>
      <td class="member-link-action-cell">${Da({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function Ad(t){const e=String((t==null?void 0:t.account_name)||"").trim(),n=Number((t==null?void 0:t.note_count)||0),r=n>0,i=r?`${n} roster note${n===1?"":"s"} for ${e}`:`No roster notes for ${e}`;return`
    <button
      class="roster-notes-button${r?" has-notes":""}"
      type="button"
      data-open-roster-notes="${f(e)}"
      title="${f(i)}"
      aria-label="${f(i)}"
    >
      <svg class="roster-notes-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4.5 5.25c0-.69.56-1.25 1.25-1.25h5.1c.89 0 1.72.34 2.35.95A3.28 3.28 0 0 1 15.55 4h2.7c.69 0 1.25.56 1.25 1.25v13.5c0 .69-.56 1.25-1.25 1.25h-4.6c-.75 0-1.45.29-1.98.82a.95.95 0 0 1-1.34 0A2.8 2.8 0 0 0 8.35 20h-2.6c-.69 0-1.25-.56-1.25-1.25V5.25Zm7.25 1.6A1.28 1.28 0 0 0 10.85 6H6.5v12h1.85c1.14 0 2.24.35 3.15 1V7.1c0-.09.01-.17.25-.25Zm1.75 12.15a6.32 6.32 0 0 1 3.15-1h.85V6h-1.95c-.73 0-1.4.29-1.9.8l-.15.15V19Z"/></svg>
      ${r?`<span class="roster-notes-count" aria-hidden="true">${n}</span>`:""}
    </button>
  `}function Ld(){const t=_n||"",e=Boolean((v==null?void 0:v.logged_in)&&(v==null?void 0:v.allowed));return`
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
          ${Qe?`<div class="discord-data-error">${c(Qe)}</div>`:""}
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
                ${Ed()}
              </tbody>
            </table>
          </div>
          ${e?$d():'<div class="roster-history-muted">Log in to add a new note.</div>'}
        </div>
      </div>
    </div>
  `}function Ed(){return sr?'<tr><td class="bank-empty-row" colspan="3">Loading notes...</td></tr>':!Array.isArray(Je)||Je.length===0?'<tr><td class="bank-empty-row" colspan="3">No notes recorded for this member.</td></tr>':Je.map(t=>`
      <tr>
        <td class="roster-notes-when-cell">${c(Rd(t.timestamp))}</td>
        <td class="roster-notes-officer-cell">${c(t.officer||"")}</td>
        <td class="roster-notes-note-cell">${c(t.note||"")}</td>
      </tr>
    `).join("")}function $d(){return`
    <div class="roster-notes-form">
      <label for="rosterNotesNewNote">Add Note</label>
      <textarea
        id="rosterNotesNewNote"
        class="roster-notes-textarea"
        rows="4"
        placeholder="Enter a new roster note..."
        ${dt?"disabled":""}
      >${c(xt)}</textarea>
      <button id="saveRosterNoteButton" class="refresh-discord-button" type="button" ${dt?"disabled":""}>
        ${dt?"Saving...":"Save Note"}
      </button>
    </div>
  `}function Rd(t){const e=Number(t||0);return!Number.isFinite(e)||e<=0?"":new Date(e*1e3).toLocaleString()}function Dd(){return`
    <tr>
      <td class="bank-empty-row" colspan="5">${c(Ce?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function Md(t){String(t||"").trim();const e=xh(t);return Dr(e==null?void 0:e.role_color)}function Ii(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${c(e)}</span>`}function Td(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":Ii(e)}function Bd(){const t=or.trim().toLowerCase(),e=X.filter(n=>{const r=String(n.rank||"").trim();if(lt.size>0&&!lt.has(r)||!oa(Rt,fi(n)))return!1;if(!t)return!0;const i=Ar(n.joined),s=Hi(n.joined),o=fi(n),a=ia(n.account_name||"");return[n.account_name,r,i,s,n.joined,o,a].map(h=>String(h||"").toLowerCase()).join(" ").includes(t)});return Nd(e)}function Nd(t){if(!Re||!W)return t;const e=W==="desc"?-1:1;return[...t].sort((n,r)=>{const i=Ko(n,Re),s=Ko(r,Re),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:String(n.account_name||"").localeCompare(String(r.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function Ko(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const n=Number(t.joined||0);return Number.isFinite(n)&&n>0?String(n).padStart(16,"0"):""}if(e==="notes")return String(Number(t.note_count||0)).padStart(8,"0");if(e==="linked"){const n=fi(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[n]||"9"} ${n} ${ia(t.account_name||"")}`}return String(t.account_name||"")}function Cd(t){const n=new Set(["account_name","rank","joined","notes","linked"]).has(t)?t:"account_name";Re!==n?(Re=n,W="asc"):W==="asc"?W="desc":W==="desc"?(Re="",W=""):(Re=n,W="asc"),x=-1,u()}function dn(t,e,n=""){const r=Re===t&&Boolean(W),i=r?W==="asc"?"ascending":"descending":"none",s=r?W==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${f(n)}" aria-sort="${f(i)}">
      <button
        class="discord-sort-header roster-sort-header${r?" active":""}"
        type="button"
        data-roster-sort-column="${f(t)}"
        title="Sort ${f(e)}${r&&W==="asc"?" descending":r&&W==="desc"?" not sorted":" ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function qd(){return Array.from(new Set(X.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function xd(t){const e=no(t),n=Dr(e==null?void 0:e.role_color),r=io(n),i=ro(n,r);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-roster-rank-filter="${f(t)}"
      style="${i}"
      title="Remove ${f(t)} filter"
    >
      <span>${c(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Id(t){const e=Ci.find(n=>n.id===t);return e?e.label:t}function na(t,e){const n=t==="roster"?"roster":"discord",r=Id(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${n}-link-status-filter="${f(e)}"
      title="Remove ${f(r)} link filter"
    >
      <span>${c(r)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function ra(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked"&&String(n.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function Od(t){return ra(_r(t==null?void 0:t.discord_id))}function fi(t){return ra(wr(t==null?void 0:t.account_name))}function ia(t){const e=wr(t),n=Ra({mode:"eso-to-discord",esoAccountName:t}),r=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean),i=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="candidate").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean);return[n.label,n.title,r.join(" "),i.join(" ")].filter(Boolean).join(" ")}function oa(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function Pd(){return`
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
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${f(Fe)}" />
        </div>

        ${Te?`<div class="discord-data-error">${c(Te)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Fd()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${yt?`: ${c(yt)}`:""}</div>
            ${Gd()}
          </div>
        </div>
      </div>
    </div>
  `}function Fd(){return Ze&&Q.length===0?'<div class="roster-history-muted">Searching...</div>':Q.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${Q.map((t,e)=>`
        <button class="roster-history-match${e===oe||t.discord_id===Ot?" is-selected":""}" type="button" data-discord-history-id="${f(t.discord_id)}" data-discord-history-name="${f(hi(t))}">
          <span>${c(hi(t))}</span>
          <strong>${c(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===oe?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Gd(){return Ot?Ze&&Xe.length===0?'<div class="roster-history-muted">Loading history...</div>':Xe.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${Xe.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(Hi(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${c(Ud(t.event_type))}</td>
              <td>${c(t.old_value||"")}</td>
              <td>${c(t.new_value||"")}</td>
              <td>${c(t.initiator||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function hi(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function Ud(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Vd(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(wn)}" />
        </div>

        ${Me?`<div class="discord-data-error">${c(Me)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Hd()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${nt?`: ${c(nt)}`:""}</div>
            ${Wd()}
          </div>
        </div>
      </div>
    </div>
  `}function Hd(){return Ke&&J.length===0?'<div class="roster-history-muted">Searching...</div>':J.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${J.map((t,e)=>`
        <button class="roster-history-match${e===ie||t.account_name===nt?" is-selected":""}" type="button" data-roster-history-account="${f(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <strong>${c(t.rank||"")}</strong>
          ${e===ie?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Wd(){return nt?Ke&&Ye.length===0?'<div class="roster-history-muted">Loading history...</div>':Ye.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${Ye.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(Hi(t.timestamp))}</td>
              <td>${c(t.event_type||"")}</td>
              <td>${Td(t.rank)}</td>
              <td>${c(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function Nn(){return typeof window<"u"&&window.GUILDSYNC_WEB===!0}function sa(){if(!Nn())return!0;try{return localStorage.getItem(xs)==="1"}catch{return!1}}function jd(){return!Nn()||sa()?"":`
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
  `}function zd(){const t=document.querySelector("#webSavedVarsUploadBannerDismissButton");!t||t.addEventListener("click",()=>{var e,n;try{localStorage.setItem(xs,"1")}catch{}(e=document.querySelector("#webSavedVarsUploadBannerHost"))==null||e.remove(),(n=document.querySelector(".guildsync-tab-content"))==null||n.classList.add("web-upload-banner-dismissed")})}function Yd(){var t;return`
    <div class="guildsync-tab-panel reports-panel" data-active-tab="settings">
      <div class="discord-data-header reports-header">
        <div>
          <h2 class="discord-data-title">Reports & Admin</h2>
          <p class="discord-data-subtitle">Run GuildSync reports and administrative review tools. More options can be added here later.</p>
        </div>
      </div>

      <div class="reports-scroll-area">
        ${la()}
        ${((t=v==null?void 0:v.user)==null?void 0:t.role)==="admin"?Ws.render():""}
        <section class="reports-list" aria-label="Available reports">
          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Associates Promotion Eligible</h3>
              <p>Shows Associates who have been in the guild at least two weeks, have purchased at least one raffle ticket, and are linked to Discord. Also shows otherwise eligible Associates who still need a Discord link reviewed.</p>
            </div>
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${Ge?"disabled":""}>
              ${Ge?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${Ue?"disabled":""}>
              ${Ue?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${Ve?"disabled":""}>
              ${Ve?"Loading...":"Run"}
            </button>
          </article>
        </section>

        <article class="report-option-card">
          <div class="report-option-copy">
            <h3>ESO / Discord Member Links</h3>
            <p>Review automatic ESO-to-Discord links, accept candidate matches, unlink blocked matches, or run the matcher again after roster or Discord refreshes.</p>
          </div>
          <button id="runMemberLinksReportButton" class="refresh-discord-button report-run-button" type="button" ${O?"disabled":""}>
            ${O?"Loading...":"Run"}
          </button>
        </article>
      </div>
    </div>
  `}function aa(){var t,e,n,r,i;T==="settings"&&(bs(Hs,{refresh:!0}),((t=v==null?void 0:v.user)==null?void 0:t.role)==="admin"&&Ws.wire({request:(s,o)=>A(s,o,12e4),rerender:u}),ca(),(e=document.querySelector("#runAssociateTicketReportButton"))==null||e.addEventListener("click",()=>fa()),(n=document.querySelector("#runDiscordRankAuditReportButton"))==null||n.addEventListener("click",()=>ou()),(r=document.querySelector("#runDiscordLastSeenReportButton"))==null||r.addEventListener("click",()=>lu()),(i=document.querySelector("#runMemberLinksReportButton"))==null||i.addEventListener("click",()=>ku()))}function ca(t=document){var e,n,r,i,s;(e=t.querySelector("#cancelBonusDefaults"))==null||e.addEventListener("click",()=>{ae=!1,u()}),(n=t.querySelector("#resetBonusDefaults"))==null||n.addEventListener("click",()=>{ae=!0,u()}),(r=t.querySelector("#raffleBonusSettingsForm"))==null||r.addEventListener("submit",Kd),(i=t.querySelector("#raffleBonusSettingsForm"))==null||i.addEventListener("input",o=>{me={raffle:Be,values:new Map(new FormData(o.currentTarget))}}),(s=t.querySelector("#bonusRafflePicker"))==null||s.addEventListener("change",o=>{Be=o.currentTarget.value,ae=!1,me=null,u()})}function la(){var o;if(!G)return'<article class="report-option-card raffle-bonus-card"><div class="report-option-copy"><h3><button type="button" class="report-section-toggle" data-report-toggle="bonus" aria-expanded="false" aria-controls="raffleBonusContent">Raffle Bonus Tickets <span aria-hidden="true">\u25BE</span></button></h3><div id="raffleBonusContent" class="report-section-content" inert><div class="report-section-inner"><p>Loading raffle bonus settings...</p></div></div></div></article>';const t=!ae&&(me==null?void 0:me.raffle)===Be?me.values:null,e=Ft.find(a=>`${a.type}:${a.salesEnd}`===Be),n=ae&&(e==null?void 0:e.inheritedSettings)?e.inheritedSettings:e,r=e?{enabledByType:{...G.enabledByType,[e.type]:n.enabled},biweekly:e.type==="biweekly"?n.tiers:G.biweekly,monthly:e.type==="monthly"?n.tiers:G.monthly}:ae&&G.envDefaults||G,i=((o=v==null?void 0:v.user)==null?void 0:o.role)==="admin",s=(a,l)=>{var h,y;return`
    <fieldset class="raffle-bonus-tiers" ${i&&!ae?"":"disabled"}>
      <legend>${l}</legend>
      <label><input name="${a}-enabled" type="checkbox" ${(t?t.has(`${a}-enabled`):(y=(h=r.enabledByType)==null?void 0:h[a])!=null?y:r.enabled)?"checked":""}> Enable bonus tickets</label>
      ${r[a].map((b,g)=>{var k,L;return`
        <div class="raffle-bonus-tier">
          <span>Period ${g+1}${g===r[a].length-1?" (final)":""}</span>
          <label>Hours <input name="${a}-${g}-hours" type="number" min="1" step="1" required value="${f(String(t&&(k=t.get(`${a}-${g}-hours`))!=null?k:b.hours))}"></label>
          <label>Bonus % <input name="${a}-${g}-percent" type="number" min="0" max="100" step="0.1" required value="${f(String(t&&(L=t.get(`${a}-${g}-percent`))!=null?L:b.percent))}"></label>
        </div>
      `}).join("")}
    </fieldset>`};return`
    <article class="report-option-card raffle-bonus-card">
      <div class="report-option-copy">
        <h3><button type="button" class="report-section-toggle" data-report-toggle="bonus" aria-expanded="false" aria-controls="raffleBonusContent">Raffle Bonus Tickets <span aria-hidden="true">\u25BE</span></button></h3>
        <div id="raffleBonusContent" class="report-section-content" inert><div class="report-section-inner">
        <p>Default settings carry forward. Select a raffle to edit only that raffle, including past raffles. Purchase time determines its hour period. Bonuses round down; the final tier must be 0%. Manual entries never receive additional bonuses. Changes apply only when you save.</p>
        <label>Bonus rules for
          <select id="bonusRafflePicker" ${i?"":"disabled"}>
            <option value="">Default rules for upcoming raffles</option>
            ${Ft.map(a=>`<option value="${f(`${a.type}:${a.salesEnd}`)}" ${Be===`${a.type}:${a.salesEnd}`?"selected":""}>${c(a.label)}${a.enabled?" (Bonuses)":""}</option>`).join("")}
          </select>
        </label>
        <p data-bonus-settings-source>Source: ${c(e?e.overridden?"Raffle override":"Saved raffle policy":G.source===".env"?"Default":G.source||"Default")}</p>
        ${ae?'<p role="status">Default Hours, Bonus %, and enabled settings are shown below. Click Save Bonus Settings to apply them, or Cancel default restoration to keep your previous settings.</p><button type="button" id="cancelBonusDefaults">Cancel default restoration</button>':""}
        <form id="raffleBonusSettingsForm">
          ${i?`<button type="button" id="resetBonusDefaults">Return to defaults</button><p>Restores Hours, Bonus %, and the enabled switch ${e?"from this raffle\u2019s inherited policy":"for both raffle types from their default rules"}. Changes apply only after Save Bonus Settings.</p>`:""}
          ${e?s(e.type,e.label):s("biweekly","Bi-Weekly Raffle")+s("monthly","50/50 Raffle")}
          ${i?'<button class="refresh-discord-button report-run-button" type="submit">Save Bonus Settings</button>':"<p>Admin access is required to change these settings.</p>"}
        </form>
        </div></div>
      </div>
    </article>`}async function Kd(t){t.preventDefault();const e=t.currentTarget,n=new FormData(e),r=Ft.find(o=>`${o.type}:${o.salesEnd}`===Be),i=o=>((r==null?void 0:r.type)===o?r.tiers:G[o]).map((a,l)=>({hours:Number(n.get(`${o}-${l}-hours`)),percent:Number(n.get(`${o}-${l}-percent`))})),s=r?{raffleType:r.type,salesEnd:r.salesEnd,enabled:n.has(`${r.type}-enabled`),tiers:i(r.type)}:{enabledByType:{biweekly:n.has("biweekly-enabled"),monthly:n.has("monthly-enabled")},biweekly:i("biweekly"),monthly:i("monthly")};try{ae&&(s.resetToDefaults=!0);const o=await A("guildsync:save-raffle-bonus-settings",s,3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||"Could not save raffle bonus settings.");G=o.bonusSettings,me=null,ae=!1,await ee({silent:!0}),p("bonus-settings","Raffle bonus settings saved.",{ttlMs:m}),u()}catch(o){p("bonus-settings-error",w(o),{ttlMs:m})}}function Jn(){return Nn()&&$()&&(d==null?void 0:d.connected)===!0}function da(){if(!Nn())return null;let t=document.querySelector("#webSavedVarsFullScreenDropOverlay");return t||(t=document.createElement("div"),t.id="webSavedVarsFullScreenDropOverlay",t.className="web-savedvars-fullscreen-drop-overlay",t.setAttribute("aria-hidden","true"),t.innerHTML=`
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
  `,document.body.appendChild(t),t)}function Jo(){const t=da();!t||(t.classList.add("is-visible"),t.setAttribute("aria-hidden","false"))}function Wr(){const t=document.querySelector("#webSavedVarsFullScreenDropOverlay");!t||(t.classList.remove("is-visible"),t.setAttribute("aria-hidden","true"))}function un(t){var n;return Array.from(((n=t==null?void 0:t.dataTransfer)==null?void 0:n.types)||[]).includes("Files")}function Jd(t){!(t!=null&&t.dataTransfer)||(t.dataTransfer.dropEffect=Jn()?"copy":"none")}function ua(t){const e=String(t||"").split(/[\\/]/).pop();return nd.get(e)||""}function Qd(){if(!Nn())return;da();const t=e=>{!un(e)||(e.preventDefault(),e.stopPropagation(),Jd(e))};document.addEventListener("dragenter",e=>{!un(e)||(t(e),wt+=1,Jn()&&Jo())},!0),document.addEventListener("dragover",e=>{t(e),un(e)&&Jn()&&Jo()},!0),document.addEventListener("dragleave",e=>{!un(e)||(e.preventDefault(),e.stopPropagation(),wt=Math.max(0,wt-1),wt===0&&Wr())},!0),document.addEventListener("drop",async e=>{var r;if(!un(e))return;if(t(e),wt=0,Wr(),!Jn()){p("web-savedvars-drop-not-ready","SavedVariables drag/drop is only available while logged in and connected to the GuildSync server.",{ttlMs:m});return}const n=Array.from(((r=e.dataTransfer)==null?void 0:r.files)||[]);await Xd(n)},!0),window.addEventListener("blur",()=>{wt=0,Wr()})}async function Xd(t=[]){if(Vr){p("web-savedvars-drop-busy","A SavedVariables upload is already processing. Please wait for it to finish.",{ttlMs:m});return}const e=Array.from(t||[]).filter(Boolean);if(!e.length){p("web-savedvars-drop-empty","No file was dropped.",{ttlMs:m});return}const n=e.find(r=>!ua(r.name));if(n){p("web-savedvars-drop-invalid",`Unsupported file: ${n.name}. Drop only GuildSyncBanking.lua, GuildSyncRoster.lua, or GuildSyncApplications.lua.`,{ttlMs:m});return}Vr=!0;try{for(const r of e)await Zd(r)}finally{Vr=!1}}async function Zd(t){const e=ua(t.name);if(!e)throw new Error(`Unsupported file: ${t.name}`);const n=`web-savedvars-upload-${e}`,r=await t.text();if(!String(r||"").trim())throw new Error(`${t.name} is empty.`);p(n,`Uploading ${t.name}...`);try{const i=await A("guildsync:upload-savedvars-raw",{file_name:t.name,raw_lua_text:r,source:"web-drag-drop"},12e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||`${t.name} upload was rejected.`);e==="banking"?await ee({silent:!0}):e==="roster"&&(await St({silent:!0}),await qn({silent:!0})),p(n,i.message||`${t.name} uploaded and processed.`,{ttlMs:m})}catch(i){throw p(n,w(i),{ttlMs:m}),i}Tr("version")}function fa(){Jt=!0,ut="",u(),Fa()}function pi(){Jt=!1,ut="",u()}function eu(){const t=tu(),e=nu(),n=Qt.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${Ge?"disabled":""}>${Ge?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(n))} total row${n===1?"":"s"}</span>
        </div>

        ${ut?`<div class="discord-data-error">${c(ut)}</div>`:""}

        <div class="report-results-content">
          ${Ge&&n===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!Ge&&n===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${n>0?Qo("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${n>0?Qo("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${c(ma())}</textarea>
      </div>
    </div>
  `}function tu(){return Qt.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function nu(){return Qt.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function Qo(t,e,n,r){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${c(t)}</h4>
          <p>${c(e)}</p>
        </div>
        <span>${c(String(n.length))} row${n.length===1?"":"s"}</span>
      </div>
      ${n.length>0?ru(n):`<div class="roster-history-muted report-section-empty">${c(r)}</div>`}
    </section>
  `}function ru(t=Qt){return`
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
              <td>${Ii(e.rank||"")}</td>
              <td>${c(Ar(e.joined))}</td>
              <td>${c(de(e.purchased_tickets||0))}</td>
              <td class="associate-earliest-deposit-cell">${c(ha(e))}</td>
              <td>${c(pa(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function ha(t){const e=String((t==null?void 0:t.earliest_deposit_summary)||"").trim();if(e)return e;const n=String((t==null?void 0:t.earliest_deposit_date)||"").trim(),r=String((t==null?void 0:t.earliest_deposit_raffle_period)||"").trim();return[n,r].filter(Boolean).join(" | ")}function pa(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function ma(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Earliest Deposit / Raffle","Discord Link"]];for(const e of Qt){const n=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([n,e.account_name||"",e.rank||"",Ar(e.joined),de(e.purchased_tickets||0),ha(e),pa(e)])}return t.map(e=>e.map(Er).join("	")).join(`
`)}async function iu(){const t=ma();if(await $r(t)){p("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:m});return}const n=document.querySelector("#associateTicketReportTsv");n&&(n.focus(),n.select()),p("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function ou(){Xt=!0,ft="",u(),Pa()}function mi(){Xt=!1,ft="",u()}function su(){const t=An.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${Ue?"disabled":""}>${Ue?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${ft?`<div class="discord-data-error">${c(ft)}</div>`:""}

        <div class="report-results-content">
          ${Ue&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!Ue&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?au(An):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${c(ya())}</textarea>
      </div>
    </div>
  `}function au(t=An){return`
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
              <td data-label="Discord Member" class="discord-rank-audit-member-cell">${c(ga(e))}</td>
              <td data-label="Discord Rank Role" class="discord-rank-audit-discord-cell">${c(e.discord_rank||"No matching rank role")}</td>
              <td data-label="Linked ESO Account(s)" class="discord-rank-audit-eso-account-cell">${c(e.eso_accounts||"No linked ESO account")}</td>
              <td data-label="ESO Rank" class="discord-rank-audit-eso-rank-cell">${c(e.eso_rank||"None")}</td>
              <td data-label="Issue" class="discord-rank-audit-issue-cell">${c(ba(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function ga(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function ba(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function ya(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of An)t.push([ga(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",ba(e)]);return t.map(e=>e.map(Er).join("	")).join(`
`)}async function cu(){const t=ya();if(await $r(t)){p("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:m});return}const n=document.querySelector("#discordRankAuditReportTsv");n&&(n.focus(),n.select()),p("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function lu(){it=!0,ht="",Zt="",u(),Oa(),D.length===0&&!O&&qn({silent:!0})}function gi(){it=!1,ht="",Zt="",He="",Dt="",We="",u()}function du(){const t=Oi(),e=Bi.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${Ve?"disabled":""}>${Ve?"Loading...":"Run Again"}</button>
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
            value="${f(Zt)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${He===""?"selected":""}>All link statuses</option>
            <option value="linked" ${He==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${He==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${He==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${ht?`<div class="discord-data-error discord-last-seen-report-error">${c(ht)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${Ve&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!Ve&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?uu(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${c(va(t))}</textarea>
      </div>
    </div>
  `}function uu(t=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${fn("name","Discord Member")}</th>
            <th>${fn("eso","Linked ESO Account")}</th>
            <th>${fn("date","Last Seen")}</th>
            <th>${fn("days","Days Since")}</th>
            <th>${fn("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr class="discord-last-seen-row ${f(bu(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${f(vt(e).status)}" data-discord-last-seen-search="${f(ka(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${gu(e)}
                  <span>${c(Ut(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${hu(e)}</td>
              <td>${c(Pi(e.last_seen))}</td>
              <td>${c(Fi(e.last_seen))}</td>
              <td>${c(ur(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function fn(t,e){const n=Dt===t,r=n?We==="asc"?"\u25B2":"\u25BC":"\u2195",i=n?`${e}: ${We==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${n?" active":""}" type="button" data-discord-last-seen-sort="${f(t)}" title="${f(i)}">
      <span>${c(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${c(r)}</span>
    </button>
  `}function Oi(){const t=[...Bi],e=Dt,n=We;if(!e||!n)return t;const r=n==="desc"?-1:1;return t.sort((i,s)=>{var o,a;if(e==="date"){const l=Number(i.last_seen||0)||0,h=Number(s.last_seen||0)||0;return(l-h)*r}if(e==="days")return(Xo(i.last_seen)-Xo(s.last_seen))*r;if(e==="action")return ur(i.last_seen_action).localeCompare(ur(s.last_seen_action),void 0,{sensitivity:"base"})*r;if(e==="eso"){const l=vt(i),h=vt(s),y={linked:0,candidate:1,unlinked:2},b=((o=y[l.status])!=null?o:9)-((a=y[h.status])!=null?a:9);return b!==0?b*r:l.esoAccountName.localeCompare(h.esoAccountName,void 0,{sensitivity:"base"})*r}return Ut(i).localeCompare(Ut(s),void 0,{sensitivity:"base"})*r})}function fu(t){Dt!==t?(Dt=t,We="asc"):We==="asc"?We="desc":(Dt="",We=""),u()}function Ut(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function ka(t){return[Ut(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,pu(t),Pi(t==null?void 0:t.last_seen),Fi(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function vt(t){const e=qu(t==null?void 0:t.discord_id),n=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),r=String((e==null?void 0:e.eso_account_name)||"").trim();return n==="linked"&&r?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:r,title:`Linked ESO account: ${r}`}:(n==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&r?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:r,title:`Fuzzy ESO account candidate: ${r}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function hu(t){const e=vt(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${f(e.className)}"
      title="${f(e.title)}"
      aria-label="${f(e.label)}"
      role="img"
    ></span>
  `}function pu(t){const e=vt(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function mu(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!n)return"";if(/^https?:\/\//i.test(e))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function gu(t){const e=Ut(t),n=e?e.slice(0,2).toUpperCase():"?",r=mu(t);return r?`<span class="discord-member-avatar"><img src="${f(r)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${c(n)}</span>`}function Pi(t){const e=Number(t);if(!e)return"Never";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t||"");const r=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(n).reduce((i,s)=>(i[s.type]=s.value,i),{});return`${r.month}/${r.day}/${r.year} ${r.hour}:${r.minute} ${r.dayPeriod}`}function bu(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const n=(Date.now()-e*1e3)/864e5;return n>30?"discord-last-seen-red":n>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function Fi(t){const e=Number(t);if(!e)return"Never";const n=Date.now()-e*1e3;if(!Number.isFinite(n))return"";if(n<0)return"0 days";const r=Math.floor(n/864e5);return`${r} day${r===1?"":"s"}`}function Xo(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const n=Date.now()-e*1e3;return Number.isFinite(n)?n<0?0:Math.floor(n/864e5):Number.POSITIVE_INFINITY}function ur(t){return String(t||"").trim()||"None tracked"}function va(t=Oi()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const n of t){const r=vt(n);e.push([Ut(n),r.label||"",r.esoAccountName||"",Pi(n==null?void 0:n.last_seen),Fi(n==null?void 0:n.last_seen),ur(n==null?void 0:n.last_seen_action),(n==null?void 0:n.username)||"",(n==null?void 0:n.discord_id)||""])}return e.map(n=>n.map(Er).join("	")).join(`
`)}async function yu(){const t=Oi().filter(i=>{const s=we(Zt),o=String(He||"").trim().toLowerCase(),a=!s||we(ka(i)).includes(s),l=!o||vt(i).status===o;return a&&l}),e=va(t);if(await $r(e)){p("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:m});return}const r=document.querySelector("#discordLastSeenReportTsv");r&&(r.focus(),r.select()),p("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function ku(){Ie=!0,H="",u(),D.length===0&&!O&&qn({silent:!0})}function bi(){Ie=!1,Sr="",at="",Dn="",Mn="",De=-1,u()}function Sa(t){return[...new Set((Array.isArray(D)?D:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function wa(t,e){return t.map(n=>`<option value="${f(n)}" ${e===n?"selected":""}>${c(n)}</option>`).join("")}function vu(){return wa(Sa("link_status"),Dn)}function Su(){return wa(Sa("link_method"),Mn)}function wu(){return`
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
          <button id="refreshMemberLinksButton" class="clear-discord-filters-button" type="button" ${O?"disabled":""}>Refresh Links</button>
          <button id="runMemberAutoLinkButton" class="refresh-discord-button" type="button" ${O?"disabled":""}>${O?"Running...":"Run Auto-Linking"}</button>
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
            value="${f(Sr)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${Dn===""?"selected":""}>All statuses</option>
            ${vu()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${Mn===""?"selected":""}>All methods</option>
            ${Su()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${at===""?"selected":""}>All actions</option>
            <option value="needs-link" ${at==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${at==="can-unlink"?"selected":""}>Unlink Available</option>
            <option value="can-unblock" ${at==="can-unblock"?"selected":""}>Unblock Available</option>
          </select>
        </div>

        ${H?`<div class="discord-data-error member-links-report-error">${c(H)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${Eu()}
        </div>
      </div>
    </div>
  `}function _a(){var n,r,i,s,o,a;if(!Ie)return;(n=document.querySelector("#closeMemberLinksReportButton"))==null||n.addEventListener("click",bi),(r=document.querySelector("#refreshMemberLinksButton"))==null||r.addEventListener("click",()=>qn()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>Nu());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",$u),t.addEventListener("keydown",Tu)),(s=document.querySelector("#memberLinksReportActionFilter"))==null||s.addEventListener("change",Ru),(o=document.querySelector("#memberLinksReportStatusFilter"))==null||o.addEventListener("change",Du),(a=document.querySelector("#memberLinksReportMethodFilter"))==null||a.addEventListener("change",Mu),Cn(),document.querySelectorAll("[data-accept-member-candidate]").forEach(l=>{l.addEventListener("click",()=>La(l.dataset.acceptMemberCandidate||"",l.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(l=>{l.addEventListener("click",()=>Cu(l.dataset.unlinkMemberLink||"",l.dataset.unlinkMemberLinkDiscordId||""))}),document.querySelectorAll("[data-unblock-member-auto-link]").forEach(l=>{l.addEventListener("click",()=>Ea(l.dataset.unblockMemberAutoLink||"",l.dataset.unblockMemberAutoLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",l=>{l.target===e&&bi()})}function Zo(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function es(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function _u(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Au(t){return[...Array.isArray(t)?t:[]].sort((e,n)=>{const r=Zo(e)-Zo(n);if(r!==0)return r;const i=es(e).localeCompare(es(n),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((n==null?void 0:n.discord_user_id)||""),void 0,{sensitivity:"base"})})}function Lu(t){const e=yi(t);let n="";e==="Username"?n=(t==null?void 0:t.discord_username)||"":e==="Global Name"?n=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(n=(t==null?void 0:t.discord_server_nickname)||""),n||(n=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const r=e?` <span class="member-link-report-match-field">(${c(e)})</span>`:"";return`<span class="member-link-report-discord-name">${c(n)}</span>${r}`}function Eu(){return O&&D.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(D)||D.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${Au(D).map(e=>{var s;const n=String(e.link_status||"").trim().toLowerCase(),r=String(e.link_method||"").trim().toLowerCase(),i=Lu(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${f(_u(e))}"
                data-member-links-report-status="${f(n)}"
                data-member-links-report-method="${f(r)}"
                data-member-links-report-action="${f(Number(e.locked||0)===1||n==="blocked"?"can-unblock":n==="linked"?"can-unlink":n==="candidate"?"needs-link":"")}"
              >
                <td>${c(e.eso_account_name||"")}</td>
                <td>${i}</td>
                <td class="member-links-status-col">${c(Number(e.locked||0)===1||n==="blocked"?"blocked":n||"")}</td>
                <td class="member-links-method-col">${c(r||"")}${Number(e.locked||0)===1?" \u{1F512}":""}</td>
                <td class="member-links-action-col">
                  <div class="member-link-actions">
                    ${n==="candidate"?`<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${f(e.eso_account_name||"")}" data-accept-member-candidate-discord-id="${f(e.discord_user_id||"")}" aria-label="Accept candidate link" title="Accept candidate link">\u2713</button>`:""}
                    ${n==="linked"?`<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${f(e.eso_account_name||"")}" data-unlink-member-link-discord-id="${f(e.discord_user_id||"")}" aria-label="Unlink this ESO/Discord pair" title="Unlink this ESO/Discord pair">\u{1F5D1}</button>`:""}
                    ${Number(e.locked||0)===1||n==="blocked"?`<button class="member-link-report-action member-link-report-unblock" type="button" data-unblock-member-auto-link="${f(e.eso_account_name||"")}" data-unblock-member-auto-link-discord-id="${f(e.discord_user_id||"")}" aria-label="Remove auto-link block" title="Remove auto-link block">\u21BA</button>`:""}
                  </div>
                </td>
                <td class="member-links-confidence-col">${c(String((s=e.match_confidence)!=null?s:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function Aa(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function ts(t){const e=Aa();if(e.forEach(r=>r.classList.remove("member-links-report-row-active")),e.length===0){De=-1;return}De=Math.max(0,Math.min(t,e.length-1));const n=e[De];n.classList.add("member-links-report-row-active"),n.scrollIntoView({block:"nearest"})}function Cn(){const t=we(Sr),e=String(at||"").trim().toLowerCase(),n=String(Dn||"").trim().toLowerCase(),r=String(Mn||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let s=0;i.forEach(a=>{const l=we(a.dataset.memberLinksReportSearch||""),h=String(a.dataset.memberLinksReportAction||"").trim().toLowerCase(),y=String(a.dataset.memberLinksReportStatus||"").trim().toLowerCase(),b=String(a.dataset.memberLinksReportMethod||"").trim().toLowerCase(),E=(!t||l.includes(t))&&(!e||h===e)&&(!n||y===n)&&(!r||b===r);a.hidden=!E,a.classList.remove("member-links-report-row-active"),E&&(s+=1)});const o=document.querySelector("#memberLinksReportSearchEmpty");o&&(o.hidden=s!==0),De=-1}function $u(t){Sr=t.target.value||"",Cn()}function Ru(t){at=t.target.value||"",Cn()}function Du(t){Dn=t.target.value||"",Cn()}function Mu(t){Mn=t.target.value||"",Cn()}function Tu(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Aa();if(e.length===0)return;if(t.key==="ArrowDown"){const r=De<0?0:De+1;ts(r>=e.length?e.length-1:r);return}const n=De<0?e.length-1:De-1;ts(n<0?0:n)}function Qn(){return T==="discord-members"||T==="eso-members"||Oe||Ie||it}function Bu(t={}){if(!Array.isArray(t.links))return;const e=JSON.stringify(D)!==JSON.stringify(t.links);D=t.links,e&&Qn()&&Zn()}function ns(){const t=document.querySelector("#runMemberLinksReportButton");t&&(t.disabled=O,t.textContent=O?"Loading...":"Run")}async function qn(t={}){if(!(d!=null&&d.connected)){H="You must be connected to load member links.",Qn()&&Zn();return}O=!0,H="",ns(),!t.silent&&Qn()&&Zn();try{const e=await A("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");D=Array.isArray(e.links)?e.links:[]}catch(e){H=w(e)}finally{O=!1,ns(),Qn()&&Zn()}}async function Nu(){if(!(d!=null&&d.connected)||!v.logged_in){H="You must be logged in and connected to run auto-linking.",u();return}O=!0,H="",u();try{const t=await A("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");D=Array.isArray(t.links)?t.links:[],p("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:m})}catch(t){H=w(t)}finally{O=!1,u()}}async function La(t,e=""){try{const n=await A("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to accept candidate.");D=Array.isArray(n.links)?n.links:D,p("member-link-accepted",n.message||"Candidate accepted as a link.",{ttlMs:m})}catch(n){H=w(n),p("member-link-accept-error",H,{ttlMs:m})}}async function Ea(t,e=""){if(!await qi({title:"Remove Auto-Link Block?",message:`Remove the blocked auto-match record between ${t} and this Discord account? Auto-linking will run immediately and this screen will refresh to show whether the pair linked again.`,confirmLabel:"Unblock",cancelLabel:"Cancel",confirmClass:"danger"}))return!1;O=!0,H="",u();try{const r=await A("guildsync:unblock-member-auto-link",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to remove auto-link block.");D=Array.isArray(r.links)?r.links:D;const i=fe(t),s=String(e||"").trim(),o=r.refreshedPair||D.find(h=>fe(h.eso_account_name)===i&&String(h.discord_user_id||"").trim()===s),a=String((o==null?void 0:o.link_status)||"").trim().toLowerCase(),l=a==="linked"?" It linked again automatically.":a==="candidate"?" It is now showing as a candidate.":" No automatic link was recreated.";return p("member-link-unblocked",`${r.message||"Auto-link block removed."}${l}`,{ttlMs:m}),!0}catch(r){return H=w(r),p("member-link-unblock-error",H,{ttlMs:m}),!1}finally{O=!1,u()}}async function Cu(t,e=""){if(!!await qi({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const r=await A("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to unlink member.");D=Array.isArray(r.links)?r.links:D,p("member-link-unlinked",r.message||"Member link removed.",{ttlMs:m})}catch(r){H=w(r)}u()}}function fe(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function wr(t){const e=fe(t);return e?D.filter(n=>fe(n.eso_account_name)===e):[]}function _r(t){const e=String(t||"").trim();return e?D.filter(n=>String(n.discord_user_id||"").trim()===e):[]}function $a(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const n=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(n.length>0){const i=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const s=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return s||n[0]}const r=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return r||e[0]}function qu(t){return $a(_r(t))}function xu(t){return`${fe(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function Gi(){return R?R.mode==="discord-to-eso"?_r(R.discordUserId):wr(R.esoAccountName):[]}function Iu(t){const e=String(t||"").trim(),n=j.find(r=>String(r.discord_id||"").trim()===e);return n&&(n.server_nickname||n.global_name||n.username||n.discord_id)||e}function Ra(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?_r(t.discordUserId):wr(t.esoAccountName),r=$a(n),i=String((r==null?void 0:r.link_status)||"").trim().toLowerCase(),s=n.filter(a=>String(a.link_status||"").trim().toLowerCase()==="linked").length,o=n.filter(a=>String(a.link_status||"").trim().toLowerCase()==="candidate").length;return s>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?s===1?r.eso_account_name:`${s} ESO accounts`:s===1?r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member":`${s} Discord accounts`}`}:i==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?r.eso_account_name:r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member"}`}:i==="blocked"||Number((r==null?void 0:r.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function Da(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,r=Ra(t);return`
    <button
      class="member-link-status-dot member-link-status-${f(r.className)}"
      type="button"
      title="${f(r.title)}"
      aria-label="${f(r.label)}"
      data-open-member-link-dialog="${f(e)}"
      data-member-link-value="${f(n||"")}"
    ></button>
  `}function Ou(){return R?R.mode==="discord-to-eso"?Iu(R.discordUserId):R.esoAccountName||"":""}function Ma(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function yi(t){const e=Ma((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const n=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(n.includes("discord_username")||n.includes("username"))return"Username";if(n.includes("discord_display_name")||n.includes("global")||n.includes("display"))return"Global Name";if(n.includes("discord_server_nickname")||n.includes("server")||n.includes("nickname"))return"Server Nickname";const r=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(r==="exact"||r==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",s=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const a of s){const l=Pu(i,a.value);(!o||l>o.score)&&(o={...a,score:l})}if(o&&o.score>0)return o.field}return""}function we(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function Pu(t,e){const n=we(t),r=we(e);if(!n||!r)return 0;if(n===r)return 100;if((n.includes(r)||r.includes(n))&&Math.min(n.length,r.length)>=4)return 88;const i=Math.abs(n.length-r.length),s=[...n].findIndex((a,l)=>a!==r[l]),o=s===-1?Math.min(n.length,r.length):s;return Math.max(0,Math.min(75,Math.round(o*10-i*3)))}function Fu(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function Gu(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function Uu(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),n=Fu(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${c(n)}</span>`}function Vu(t){var a;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",n=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",r=String(t.link_status||"").trim().toLowerCase(),o=r==="linked"?`<button
        class="member-link-trash-button"
        type="button"
        aria-label="Unlink this ESO/Discord pair"
        title="Unlink this ESO/Discord pair"
        data-unlink-dialog-member-link
        data-unlink-eso-account="${f(t.eso_account_name||"")}"
        data-unlink-discord-user-id="${f(t.discord_user_id||"")}"
      >\u{1F5D1}</button>`:r==="candidate"?`<button
          class="member-link-approve-button"
          type="button"
          aria-label="Approve suggested link"
          title="Approve suggested link"
          data-accept-dialog-member-candidate="${f(t.eso_account_name||"")}"
          data-accept-dialog-discord-user-id="${f(t.discord_user_id||"")}"
        >\u2713</button>`:Number(t.locked||0)===1||r==="blocked"?`<button
            class="member-link-approve-button member-link-unblock-button"
            type="button"
            aria-label="Remove auto-link block"
            title="Remove auto-link block"
            data-unblock-dialog-member-auto-link
            data-unblock-eso-account="${f(t.eso_account_name||"")}"
            data-unblock-discord-user-id="${f(t.discord_user_id||"")}"
          >\u21BA</button>`:"";return`
    <div class="member-link-current-card">
      <div class="member-link-current-details">
        <div><span>ESO:</span> ${c(t.eso_account_name||"")}</div>
        <div><span>Discord:</span> ${c(e)}</div>
        <div><span>Status:</span> ${Uu(t)} \xB7 ${c(Gu(t.link_method))} \xB7 ${c(String((a=t.match_confidence)!=null?a:""))}% \xB7 ${c(n)}</div>
        ${yi(t)?`<div><span>Matched:</span> Matched on ${c(yi(t))}</div>`:""}
      </div>
      ${o}
    </div>
  `}function Hu(){const t=Gi();return t.length?[...t].sort((n,r)=>{var l,h;const i=String(n.link_status||"").trim().toLowerCase(),s=String(r.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},a=((l=o[i])!=null?l:9)-((h=o[s])!=null?h:9);return a!==0?a:Number(r.match_confidence||0)-Number(n.match_confidence||0)}).map(n=>Vu(n)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function Wu(){if(Pt)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(qe)return`<div class="discord-data-error">${c(qe)}</div>`;if(!Array.isArray(pt)||pt.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(Gi().map(n=>xu(n))),e=[...pt].filter(n=>{const r=(R==null?void 0:R.mode)==="discord-to-eso"?`${fe(n.account_name)}::${String(R.discordUserId||"").trim()}`:`${fe(R==null?void 0:R.esoAccountName)}::${String(n.discord_id||"").trim()}`;return!t.has(r)}).sort((n,r)=>{const i=Number(r.confidence||0)-Number(n.confidence||0);return i!==0?i:rs(n).localeCompare(rs(r),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(n=>ju(n)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function rs(t){return((R==null?void 0:R.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function ju(t,e={}){var b,g,k;const n=(R==null?void 0:R.mode)||"",r=n==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=Ma(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),s=n==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[s,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),a=n==="discord-to-eso"?t.account_name:t.discord_id,l=e.disabled===!0,h=[r,s,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),y=[r,o,`${(b=t.confidence)!=null?b:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${f(a||"")}" data-member-link-option-search="${f(h)}" title="${f(y)}" ${l?"disabled":""}>
      <span class="member-link-option-name" title="${f(r||"")}">${c(r||"")}</span>
      <span class="member-link-option-subtitle" title="${f(o||"")}">${c(o||"")}</span>
      <span class="member-link-option-confidence" title="${f(String((g=t.confidence)!=null?g:0))}%">${c(String((k=t.confidence)!=null?k:0))}%</span>
    </button>
  `}function zu(){const t=(R==null?void 0:R.mode)||"",e=Ou(),n=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
            ${Hu()}
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
              value="${f(Tn)}"
            />
            ${Wu()}
          </section>
        </div>

      </div>
    </div>
  `}async function Ui(t,e){if(!(d!=null&&d.connected)||!$()){p("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:m});return}Oe=!0,R=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},pt=[],Pt=!0,qe="",Tn="",pe=-1,u();try{if(!Array.isArray(D)||D.length===0){const i=await A("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(D=Array.isArray(i.links)?i.links:[])}const r=await A("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load link suggestions.");pt=Array.isArray(r.options)?r.options:[]}catch(n){qe=w(n)}finally{Pt=!1,u()}}function Vt(){document.removeEventListener("keydown",ki),Oe=!1,R=null,pt=[],Pt=!1,qe="",Tn="",pe=-1,u()}function Ta(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function is(t){const e=Ta();if(e.forEach(r=>r.classList.remove("member-link-option-row-active")),e.length===0){pe=-1;return}pe=Math.max(0,Math.min(t,e.length-1));const n=e[pe];n.classList.add("member-link-option-row-active"),n.scrollIntoView({block:"nearest"})}function Ba(){const t=we(Tn),e=[...document.querySelectorAll(".member-link-option-row")];let n=0;e.forEach(i=>{const s=we(i.dataset.memberLinkOptionSearch||i.textContent||""),o=!t||s.includes(t);i.hidden=!o,i.classList.remove("member-link-option-row-active"),o&&(n+=1)});const r=document.querySelector("#memberLinkSuggestionSearchEmpty");r&&(r.hidden=n!==0),pe=-1}function Yu(t){Tn=t.target.value||"",Ba()}function Ku(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Ta();if(e.length===0)return;if(t.key==="ArrowDown"){const r=pe<0?0:pe+1;is(r>=e.length?e.length-1:r);return}const n=pe<0?e.length-1:pe-1;is(n<0?0:n)}function ki(t){!Oe||t.key==="Escape"&&(t.preventDefault(),Vt())}async function Ju(t){if(!(!R||!t))try{const e=R.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:R.discordUserId}:{esoAccountName:R.esoAccountName,discordUserId:t},n=await A("guildsync:manual-link-member",e,3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to link members.");D=Array.isArray(n.links)?n.links:D,p("member-link-saved",n.message||"Member link saved.",{ttlMs:m}),Vt()}catch(e){qe=w(e),u()}}async function Qu(t,e=""){await La(t,e),Vt()}async function Na(){if(!!R){Pt=!0,qe="",u();try{const t=R.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:R.discordUserId}:{mode:"eso-to-discord",accountName:R.esoAccountName},e=await A("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");pt=Array.isArray(e.options)?e.options:[]}catch(t){qe=w(t)}finally{Pt=!1,u()}}}async function Xu(t="",e=""){const n=Gi().find(i=>fe(i.eso_account_name)===fe(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!n||!await qi({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await A("guildsync:manual-unlink-member",{esoAccountName:n.eso_account_name,discordUserId:n.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");D=Array.isArray(i.links)?i.links:D,p("member-link-unlinked",i.message||"Member link removed.",{ttlMs:m}),await Na()}catch(i){qe=w(i),u()}}async function Zu(t="",e=""){await Ea(t,e)&&await Na()}function Ca(){var n;if(!Oe)return;document.removeEventListener("keydown",ki),document.addEventListener("keydown",ki),(n=document.querySelector("#closeMemberLinkDialogButton"))==null||n.addEventListener("click",Vt);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",Yu),t.addEventListener("keydown",Ku),Ba()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(r=>{r.addEventListener("click",()=>Xu(r.dataset.unlinkEsoAccount||"",r.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-unblock-dialog-member-auto-link]").forEach(r=>{r.addEventListener("click",()=>Zu(r.dataset.unblockEsoAccount||"",r.dataset.unblockDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(r=>{r.addEventListener("click",()=>Ju(r.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(r=>{r.addEventListener("click",()=>Qu(r.dataset.acceptDialogMemberCandidate||"",r.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",r=>{r.target===e&&Vt()})}function qa(){var e,n,r;if(!Jt)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",pi),(n=document.querySelector("#rerunAssociateTicketReportButton"))==null||n.addEventListener("click",()=>Fa()),(r=document.querySelector("#copyAssociateTicketReportGridButton"))==null||r.addEventListener("click",()=>iu());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&pi()})}function xa(){var e,n,r;if(!Xt)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",mi),(n=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||n.addEventListener("click",()=>Pa()),(r=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||r.addEventListener("click",()=>cu());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&mi()})}function Ia(){var r,i,s;if(!it)return;(r=document.querySelector("#closeDiscordLastSeenReportButton"))==null||r.addEventListener("click",gi),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>Oa()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>yu()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(o=>{o.addEventListener("click",()=>fu(o.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",ef);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",tf),Vi();const n=document.querySelector(".discord-last-seen-report-overlay");n&&n.addEventListener("click",o=>{o.target===n&&gi()})}function ef(t){Zt=t.target.value||"",Vi()}function tf(t){He=t.target.value||"",Vi()}function Vi(){const t=we(Zt),e=String(He||"").trim().toLowerCase(),n=[...document.querySelectorAll("[data-discord-last-seen-row]")];let r=0;n.forEach(s=>{const o=we(s.dataset.discordLastSeenSearch||s.textContent||""),a=String(s.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),y=(!t||o.includes(t))&&(!e||a===e);s.hidden=!y,y&&(r+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=r!==0)}async function Oa(){if(!(d!=null&&d.connected)||!$()){ht="You must be logged in and connected to run this report.",u();return}Ve=!0,ht="",u();try{const t=await A("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");j=eo(t.members),kr=to(t.roles),Bi=[...j]}catch(t){ht=w(t)}finally{Ve=!1,u(),C("discordLastSeenReportSearchInput")}}async function Pa(){if(!(d!=null&&d.connected)||!$()){ft="You must be logged in and connected to run this report.",u();return}Ue=!0,ft="",u();try{const t=await A("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");An=Array.isArray(t.rows)?t.rows:[]}catch(t){ft=w(t)}finally{Ue=!1,u()}}async function Fa(){if(!(d!=null&&d.connected)||!$()){ut="You must be logged in and connected to run this report.",u();return}Ge=!0,ut="",u();try{const t=await A("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Qt=Array.isArray(t.rows)?t.rows:[]}catch(t){ut=w(t)}finally{Ge=!1,u()}}function Tt(){const t=String(rn||"").trim().toLowerCase(),e={account_name:"Anonymous",rank:"Manual Entry"},n=new Set(["anonymous"]),r=X.filter(i=>String(i.account_name||"").trim()).filter(i=>{const o=String(i.account_name||"").trim().toLowerCase();return!o||n.has(o)||t&&!o.includes(t)?!1:(n.add(o),!0)}).slice().sort((i,s)=>{const o=String(i.account_name||"").toLowerCase(),a=String(s.account_name||"").toLowerCase(),l=t&&o.startsWith(t)?0:1,h=t&&a.startsWith(t)?0:1;return l!==h?l-h:o.localeCompare(a)}).slice(0,19);return[e,...r]}function Ga(t=Tt()){const e=String(M.accountName||"").trim();return t.length===0?'<div class="roster-history-muted manual-ticket-no-matches">No matching guild members found.</div>':t.map((n,r)=>`
        <button class="roster-history-match${r===U||n.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${f(n.account_name)}" role="option" aria-selected="${r===U||n.account_name===e?"true":"false"}">
          <span>${c(n.account_name)}</span>
          <strong>${c(n.rank||"")}</strong>
          ${r===U?"<small>Enter</small>":""}
        </button>
      `).join("")}function Ua(){document.querySelectorAll("[data-manual-ticket-account]").forEach(t=>{t.addEventListener("mousedown",e=>{e.preventDefault()}),t.addEventListener("click",()=>{Va(t.dataset.manualTicketAccount||"")})})}function jr(){const t=document.querySelector("#manualTicketMatchList");if(!t)return;const e=Tt();U>=e.length&&(U=e.length>0?e.length-1:-1),t.innerHTML=Ga(e),Ua()}function Va(t){const e=String(t||"").trim();M.accountName=e,rn=e,ce=!1,U=-1,Y="",u()}function C(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const n=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(n,n)},0)}function nf(){const t=ce?Tt():[],e=String(M.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Entry</h3>
            <p>Add a manual banking or raffle entry such as FFTG, officer corrections, or anonymous gold.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${Y?`<div class="discord-data-error">${c(Y)}</div>`:""}

        <div class="manual-ticket-form">
          <div class="manual-ticket-member-picker">
            <label class="manual-ticket-member-field" for="manualTicketAccountSearchInput">
              <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(rn)}" autocomplete="off" />
            </label>

            ${ce?`
              <div id="manualTicketMatchList" class="roster-history-match-list manual-ticket-match-list" role="listbox" aria-label="Matching guild members">
                ${Ga(t)}
              </div>
            `:""}
          </div>

          ${e?`<div class="roster-history-muted manual-ticket-selected-member">Selected: ${c(e)}</div>`:""}

          <div class="manual-ticket-entry-row">
            <div class="manual-ticket-type-field" role="group" aria-label="Ticket type">
              <button class="manual-ticket-type-label${M.ticketType!=="monthly"?" is-selected":""}" type="button" data-manual-ticket-type="biweekly" aria-pressed="${M.ticketType!=="monthly"?"true":"false"}">Bi-Weekly</button>
              <button class="manual-ticket-type-switch" type="button" data-manual-ticket-toggle="true" data-selected-type="${M.ticketType==="monthly"?"monthly":"biweekly"}" aria-label="Toggle ticket type. Current selection is ${M.ticketType==="monthly"?"50/50":"Bi-Weekly"}">
                <span class="manual-ticket-type-track" aria-hidden="true"></span>
                <span class="manual-ticket-type-thumb" aria-hidden="true"></span>
              </button>
              <button class="manual-ticket-type-label${M.ticketType==="monthly"?" is-selected":""}" type="button" data-manual-ticket-type="monthly" aria-pressed="${M.ticketType==="monthly"?"true":"false"}">50/50</button>
            </div>
            <label class="manual-ticket-note-field">
              <textarea id="manualTicketNoteInput" class="discord-search-input manual-ticket-note-input" rows="4" placeholder="Enter a reason such as FFTG">${c(M.note)}</textarea>
            </label>
            <div class="manual-ticket-side-fields">
              <label class="manual-ticket-gold-field">
                <input id="manualTicketGoldInput" class="discord-search-input manual-ticket-gold-input" type="number" min="0" step="1" inputmode="numeric" placeholder="Gold Value" value="${f(M.goldValue)}" />
                <span class="manual-ticket-gold-coin" aria-hidden="true"></span>
              </label>
              <label class="manual-ticket-count-field">
                <div class="manual-ticket-number-wrap">
                  <input id="manualTicketCountInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${f(M.tickets)}" />
                  <div class="manual-ticket-number-buttons" aria-hidden="true">
                    <button id="manualTicketCountUpButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2303</button>
                    <button id="manualTicketCountDownButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2304</button>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div class="manual-ticket-actions">
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${ar?"disabled":""}>${ar?"Saving...":"Add Manual Entry"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Ha(){var s,o,a,l,h,y;if(!Ne)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{Ne=!1,u()});const t=document.querySelector("#manualTicketAccountSearchInput");if(t){const b=({rerender:g=!1}={})=>{if(ce=!0,U=Tt().length>0?0:-1,g){u(),C("manualTicketAccountSearchInput");return}jr()};t.addEventListener("focus",()=>{ce||b({rerender:!0})}),t.addEventListener("click",()=>{ce||b({rerender:!0})}),t.addEventListener("input",g=>{rn=g.target.value||"",M.accountName="",ce=!0,U=Tt().length>0?0:-1,jr()}),t.addEventListener("keydown",g=>{if(g.key==="Escape")return;if(!ce){(g.key==="ArrowDown"||g.key==="ArrowUp")&&(g.preventDefault(),b({rerender:!0}));return}const k=Tt();if(g.key==="ArrowDown"||g.key==="ArrowUp"){if(k.length===0)return;g.preventDefault();const S=g.key==="ArrowDown"?1:-1;U=((U<0?0:U)+S+k.length)%k.length,jr();return}if(g.key!=="Enter")return;g.preventDefault();const L=k[U>=0?U:0];L!=null&&L.account_name&&Va(L.account_name)})}Ua(),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",b=>{M.note=b.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(b=>{b.addEventListener("click",()=>{const g=String(b.dataset.manualTicketType||"").trim().toLowerCase();M.ticketType=g==="monthly"?"monthly":"biweekly",u()})}),(a=document.querySelector("[data-manual-ticket-toggle]"))==null||a.addEventListener("click",()=>{M.ticketType=M.ticketType==="monthly"?"biweekly":"monthly",u()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",b=>{const g=String(b.target.value||"").replace(/\D/g,"");b.target.value!==g&&(b.target.value=g),M.goldValue=g});const n=document.querySelector("#manualTicketCountInput");n==null||n.addEventListener("input",b=>{const g=String(b.target.value||"").replace(/\D/g,"");b.target.value!==g&&(b.target.value=g),M.tickets=g});const r=b=>{const g=Number(M.tickets)||0,k=Math.max(0,g+b);M.tickets=String(k),n&&(n.value=M.tickets,n.focus())};(l=document.querySelector("#manualTicketCountUpButton"))==null||l.addEventListener("click",()=>r(1)),(h=document.querySelector("#manualTicketCountDownButton"))==null||h.addEventListener("click",()=>r(-1)),(y=document.querySelector("#saveManualBiweeklyTicketButton"))==null||y.addEventListener("click",()=>rf());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",b=>{b.target===i&&(Ne=!1,u())})}async function rf(){const t=String(M.accountName||"").trim(),e=String(M.note||"").trim(),n=String(M.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",r=Number(String(M.goldValue||"").trim()||0),i=Number(String(M.tickets||"").trim()||0);if(ce){Y="Select a matching guild member or Anonymous from the list before saving.",u(),C("manualTicketAccountSearchInput");return}if(!t){Y="Select a matching guild member or Anonymous from the list before saving.",u(),C("manualTicketAccountSearchInput");return}if(!Number.isFinite(r)||r<0){Y="Gold value must be zero or greater.",u();return}if(!Number.isFinite(i)||i<0){Y="Tickets must be zero or greater.",u();return}const s=t.toLowerCase()==="anonymous";if(s&&Math.floor(i)>0){Y="Anonymous cannot be awarded tickets. Use 0 tickets and enter a gold value.",u();return}if(Math.floor(r)===0&&Math.floor(i)===0){Y=s?"Enter a gold value for Anonymous when tickets are 0.":"Enter gold or tickets. Both cannot be zero.",u();return}ar=!0,Y="",u();try{const o=await A("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:n,gold_value:Math.floor(r),tickets:Math.floor(i)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Failed to add manual entry.");Ne=!1,M={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},rn="",U=-1,ce=!1,await ee({silent:!0}),p("manual-ticket-added",o.message||"Manual entry added.",{ttlMs:m})}catch(o){Y=w(o)}finally{ar=!1,u()}}async function Wa(t=""){const e=String(t||"").trim();if(!!e){Kt=!0,_n=e,Je=[],sr=!0,dt=!1,Qe="",xt="",u();try{const n=await A("guildsync:request-roster-member-notes",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster notes.");Je=Array.isArray(n.notes)?n.notes:[]}catch(n){Qe=w(n)}finally{sr=!1,u()}}}function vi(){Kt=!1,_n="",Je=[],sr=!1,dt=!1,Qe="",xt="",u()}function of(){var n,r;if(!Kt)return;(n=document.querySelector("#closeRosterNotesButton"))==null||n.addEventListener("click",vi);const t=document.querySelector("#rosterNotesNewNote");t&&t.addEventListener("input",i=>{xt=i.target.value||""}),(r=document.querySelector("#saveRosterNoteButton"))==null||r.addEventListener("click",()=>sf());const e=document.querySelector(".roster-notes-overlay");e&&e.addEventListener("click",i=>{i.target===e&&vi()})}async function sf(){const t=String(xt||"").trim();if(!t){Qe="Enter a note before saving.",u();return}dt=!0,Qe="",u();try{const e=await A("guildsync:add-roster-member-note",{account_name:_n,note:t},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to save roster note.");e.note&&(Je=[...Je,e.note]),xt="";const n=X.find(r=>fe(r.account_name)===fe(_n));n&&(n.note_count=Number(n.note_count||0)+1)}catch(e){Qe=w(e)}finally{dt=!1,u()}}function ja(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>St());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{qt=!0,Me="",u()});const n=document.querySelector("#rosterMemberSearch");n&&(n.addEventListener("input",o=>{or=o.target.value||"",ci=o.target.selectionStart,li=o.target.selectionEnd,x=-1,u({restoreRosterSearchFocus:!0})}),n.addEventListener("keydown",af)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Cd(o.dataset.rosterSortColumn||"account_name")})});const r=document.querySelector("#rosterRankFilter");r&&r.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(lt.add(a),x=-1,u())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRosterRankFilter||"";lt.delete(a),x=-1,u()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(Rt.add(a),x=-1,u())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRosterLinkStatusFilter||"";Rt.delete(a),x=-1,u()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>Ui(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))}),document.querySelectorAll("[data-open-roster-notes]").forEach(o=>{o.addEventListener("click",()=>Wa(o.dataset.openRosterNotes||""))}),of();const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{or="",lt.clear(),Rt.clear(),Re="",W="",x=-1,u()}),cf()}function af(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){x=-1;return}t.preventDefault(),t.key==="ArrowDown"?x=x<0?0:Math.min(x+1,e.length-1):t.key==="ArrowUp"&&(x=x<0?e.length-1:Math.max(x-1,0)),e.forEach((r,i)=>{r.classList.toggle("roster-search-active-row",i===x)});const n=e[x];n&&typeof n.scrollIntoView=="function"&&n.scrollIntoView({block:"nearest",inline:"nearest"})}function cf(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{qt=!1,u()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",n=>{if(wn=n.target.value||"",ie=-1,!wn.trim()){clearTimeout(Hr),Me="",J=[],nt="",Ye=[],Ke=!1,u(),C("rosterHistorySearchInput");return}clearTimeout(Hr),Hr=setTimeout(()=>{ff({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(J.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;ie=((ie<0?0:ie)+i+J.length)%J.length,u(),C("rosterHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=J[ie>=0?ie:0];r!=null&&r.account_name&&ss(r.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(n=>{n.addEventListener("click",()=>{ss(n.dataset.rosterHistoryAccount||"")})})}function za(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{It=!1,u()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",n=>{Fe=n.target.value||"",oe=-1,ot+=1;const r=ot;if(clearTimeout(jo),!Fe.trim()){Te="",Q=[],Ot="",yt="",Xe=[],Ze=!1,u(),C("discordHistorySearchInput");return}jo=setTimeout(()=>{lf({auto:!0,keepFocus:!0,generation:r})},cd)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(Q.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;oe=((oe<0?0:oe)+i+Q.length)%Q.length,u(),C("discordHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=Q[oe>=0?oe:0];r!=null&&r.discord_id&&os(r.discord_id,hi(r))})),document.querySelectorAll("[data-discord-history-id]").forEach(n=>{n.addEventListener("click",()=>{os(n.dataset.discordHistoryId||"",n.dataset.discordHistoryName||"")})})}async function lf(t={}){const e=Number.isInteger(t.generation)?t.generation:++ot,n=Fe.trim();if(e===ot){if(!n){Te="",Q=[],oe=-1,Ot="",yt="",Xe=[],Ze=!1,u(),t.keepFocus&&C("discordHistorySearchInput");return}Ze=!0,Te="",Q=[],oe=-1,Ot="",yt="",Xe=[],u(),t.keepFocus&&C("discordHistorySearchInput");try{const r=await A("guildsync:request-discord-member-history",{query:n},3e4);if(e!==ot||n!==Fe.trim())return;if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search Discord member history.");Q=df(r.matches),oe=Q.length>0?0:-1}catch(r){if(e!==ot||n!==Fe.trim())return;Te=w(r)}finally{if(e!==ot||n!==Fe.trim())return;Ze=!1,u(),t.keepFocus&&C("discordHistorySearchInput")}}}async function os(t,e="",n={}){const r=String(t||"").trim();if(!!r){Ot=r,yt=String(e||r).trim(),Fe=yt,Xe=[],Ze=!0,Te="",u();try{const i=await A("guildsync:request-discord-member-history-events",{discord_id:r},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");Xe=uf(i.events)}catch(i){Te=w(i)}finally{Ze=!1,n.keepLoading||u()}}}function df(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function uf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s,o,a,l,h,y,b,g;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((r=(n=e.old_value)!=null?n:e.oldValue)!=null?r:"").trim(),new_value:String((s=(i=e.new_value)!=null?i:e.newValue)!=null?s:"").trim(),event_timestamp:(l=(a=(o=e.event_timestamp)!=null?o:e.eventTimestamp)!=null?a:e.timestamp)!=null?l:"",event_datetime:(y=(h=e.event_datetime)!=null?h:e.eventDatetime)!=null?y:"",initiator:String((g=(b=e.initiator)!=null?b:e.initiatorName)!=null?g:"").trim(),source:String(e.source||"").trim()}}):[]}async function ff(t={}){const e=wn.trim();if(!e){Me="",J=[],ie=-1,nt="",Ye=[],Ke=!1,u(),t.keepFocus&&C("rosterHistorySearchInput");return}Ke=!0,Me="",J=[],ie=-1,nt="",Ye=[],u(),t.keepFocus&&C("rosterHistorySearchInput");try{const n=await A("guildsync:request-roster-rank-history",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search roster rank history.");J=hf(n.matches),ie=J.length>0?0:-1}catch(n){Me=w(n)}finally{Ke=!1,u(),t.keepFocus&&C("rosterHistorySearchInput")}}async function ss(t,e={}){const n=String(t||"").trim();if(!!n){nt=n,wn=n,Ye=[],Ke=!0,Me="",u();try{const r=await A("guildsync:request-roster-stream-history",{account_name:n},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load roster stream history.");Ye=pf(r.events)}catch(r){Me=w(r)}finally{Ke=!1,e.keepLoading||u()}}}function hf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function pf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(r=(n=e.timestamp)!=null?n:e.timestampS)!=null?r:"",officer:String(e.officer||"").trim()}}):[]}function Ya(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(n=e.joined)!=null?n:"",note_count:Number((i=(r=e.note_count)!=null?r:e.noteCount)!=null?i:0)||0}}).sort((e,n)=>e.account_name.localeCompare(n.account_name)):[]}function mf(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function Ar(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function Hi(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function gf(t={}){X=Ya(t.members),ir=t.last_refresh||new Date().toISOString(),Ht(),p("roster-data-updated",`Roster data updated. Loaded ${X.length} member record${X.length===1?"":"s"}.`,{ttlMs:m})}async function St(t={}){if(!!(d!=null&&d.connected)){Ce=!0,Ht();try{const e=await A("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");X=Ya(e.members),ir=e.last_refresh||ir,t.silent||p("roster-data-loaded",`Loaded ${X.length} roster member${X.length===1?"":"s"}.`,{ttlMs:m})}catch(e){p("roster-data-error",w(e),{ttlMs:m})}finally{Ce=Boolean(t.deferPendingRefresh),Ht(),t.deferPendingRefresh||Bn("eso-members")}}}async function bf(t={}){var e;if(!!$()){if(!(d!=null&&d.connected)){p("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}Ce=!0,Ht();try{const n=await jl(t);if(!(n!=null&&n.ok)){p("roster-data-pending",(n==null?void 0:n.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:m});return}const r={local_upload_id:Ka(),authenticated_username:he(),authenticated_discord_user_id:((e=v==null?void 0:v.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await Qa(r)}catch(i){throw yf(r),i}await St({silent:!0,deferPendingRefresh:!0})}catch(n){p("roster-data-error",w(n),{ttlMs:m})}finally{Ce=!1,Ht(),Bn("eso-members")}}}function Ka(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Wi(){try{const t=window.localStorage.getItem(Ps),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Ja(t){window.localStorage.setItem(Ps,JSON.stringify(Array.isArray(t)?t:[]))}function yf(t){const e=String((t==null?void 0:t.local_upload_id)||Ka()),n=Wi().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Ja(n),p("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function kf(t){const e=Wi().filter(n=>(n==null?void 0:n.local_upload_id)!==t);Ja(e)}async function vf(){if(Fr||!(d!=null&&d.connected)||!$())return;const t=Wi();if(t.length!==0){Fr=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!$())return;await Qa(e),kf(e.local_upload_id)}}catch(e){p("roster-data-pending-error",`Pending roster upload retry failed: ${w(e)}`,{ttlMs:m})}finally{Fr=!1}}}async function Qa(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await A("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const n=await zl(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return p("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:m}),e}async function Sf(t={}){var e,n;if(!!$()){if(!(d!=null&&d.connected)){p("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}try{const r=await ed(t);if(!(r!=null&&r.ok)){p("applications-data-info",(r==null?void 0:r.message)||"No application records were found to process.",{ttlMs:m});return}if((Array.isArray((e=r==null?void 0:r.data)==null?void 0:e.records)?r.data.records:[]).length===0){p("applications-data-info",`No application records were found in ${r.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:m});return}const s={local_upload_id:Xa(),authenticated_username:he(),authenticated_discord_user_id:((n=v==null?void 0:v.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await ec(s)}catch(o){throw wf(s),o}}catch(r){p("applications-data-error",w(r),{ttlMs:m})}}}function Xa(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function ji(){try{const t=window.localStorage.getItem(Fs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Za(t){window.localStorage.setItem(Fs,JSON.stringify(Array.isArray(t)?t:[]))}function wf(t){const e=String((t==null?void 0:t.local_upload_id)||Xa()),n=ji().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Za(n),p("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function _f(t){const e=ji().filter(n=>(n==null?void 0:n.local_upload_id)!==t);Za(e)}async function Af(){if(Gr||!(d!=null&&d.connected)||!$())return;const t=ji();if(t.length!==0){Gr=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!$())return;await ec(e),_f(e.local_upload_id)}}catch(e){p("applications-data-pending-error",`Pending application upload retry failed: ${w(e)}`,{ttlMs:m})}finally{Gr=!1}}}async function ec(t){var i;if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return p("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:m}),{ok:!0,sent_count:0,skipped_empty:!0};let n=0;for(const s of e){const o=await A("guildsync:eso-guild-application-message",{...t,record:s,recordKey:(s==null?void 0:s.recordKey)||"",message:Lf(s)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Backend rejected the application data payload. Application data was not cleared.");n+=1}const r=await td(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return p("applications-data-sent",`Sent ${n} application record${n===1?"":"s"} to GuildSync backend.`,{ttlMs:m}),{ok:!0,sent_count:n}}function Lf(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),n=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",r=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",s=String(t.applicationText||"_No application text captured._"),o=Object.entries(t).filter(([a])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(a)).map(([a,l])=>`**${a}:** ${Ef(l)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${n}** ${r} an application from **${i}**.`,"","**Application text:**","```",s.slice(0,1500),"```",o.length>0?"":null,o.length>0?"**Full captured record fields:**":null,...o].filter(a=>a!==null).join(`
`)}function Ef(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function $f(t={}){await Sf(t)}function tc(){const t=Si(N),e=ih(t,N),n=N!=="other",r=n&&on(N);return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <button id="openBankingHistoryButton" class="refresh-discord-button banking-history-button" type="button" ${$()?"":'disabled title="Login required to lookup banking history."'}>
            <span aria-hidden="true">\u2315</span>
            <span>Lookup Banking History</span>
          </button>
          <button id="openManualBiweeklyTicketButton" class="bank-export-button" type="button" ${$()?"":'disabled title="Login required to add manual entries."'}>
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
          <span class="discord-last-refresh">Last Refresh: ${c(Sc(js))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${xe||!$()?"disabled":""} ${$()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${xe?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${zr("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${zr("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${zr("other","?","Other","All other deposits")}
        </div>

        ${Cf(N)}

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
          <div>Total Deposits: <strong>${c(Bt(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${N==="monthly"?`<div>Raffle Pot: <strong>${c(Bt(Math.floor(e.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${N==="biweekly"?`<div>Raffle Pot: <strong>${c(Bt(lc(e.amount)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${N==="biweekly"?`<div>Draws: <strong>${c(String(oh(e.amount)))}</strong></div>`:""}
          ${n?`<div>Purchased: <strong>${c(de(e.purchased))}</strong></div>${r?`<div>Bonus: <strong>${c(de(e.bonus))}</strong></div>`:""}<div>Total Tickets: <strong>${c(de(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${mt?Tf(Si(ue)):""}
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
            <input id="bankingHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" autocomplete="off" placeholder="Start typing part of an account name..." value="${f(kt)}" />
          </label>
          ${Df()}
        </div>

        ${ke?`<div class="discord-data-error">${c(ke)}</div>`:""}

        <div class="banking-history-results">
          <div class="roster-history-section-title">Banking History${be?`: ${c(be)}`:""}${be?`<span class="banking-history-count">${c(String(le.length))} record${le.length===1?"":"s"} found</span>`:""}</div>
          ${Mf()}
        </div>
      </div>
    </div>
  `}function Df(){return kt.trim()?ye&&V.length===0&&!be?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">Searching...</div></div>':V.length===0&&!be?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">No matching banking names found.</div></div>':V.length===0?"":`
    <div class="banking-history-autocomplete" role="listbox" aria-label="Banking history matches">
      ${V.map((t,e)=>`
        <button class="banking-history-autocomplete-option${e===se?" is-selected":""}" type="button" data-banking-history-account="${f(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <small>${c(String(Number(t.record_count||t.recordCount||0)||0))} record${Number(t.record_count||t.recordCount||0)===1?"":"s"}</small>
        </button>
      `).join("")}
    </div>
  `:""}function Mf(){const t=le.some(e=>e.bonus_enabled);return be?ye&&le.length===0?'<div class="roster-history-muted">Loading banking history...</div>':le.length===0?'<div class="roster-history-muted">No banking history found for this account.</div>':`
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
          ${le.map(e=>{var n,r,i,s,o;return`
            <tr>
              <td>${c(Yf((i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:""))}</td>
              <td>${c(Kf(e.transaction_type||e.type||""))}</td>
              <td style="text-align:right;">${c(Jf((o=(s=e.deposit_amount)!=null?s:e.depositAmount)!=null?o:e.amount))} \u{1FA99}</td>
              <td style="text-align:right;">${c(Yr(e.purchased_tickets))}</td>
              ${t?`<td style="text-align:right;">${e.bonus_enabled?`${c(de(e.bonus_percent))}%`:""}</td><td style="text-align:right;">${e.bonus_enabled?c(Yr(e.bonus_tickets)):""}</td>`:""}
              <td style="text-align:right;">${c(Yr(e.total_tickets))}</td>
              <td class="banking-history-note-cell">${c(e.note||"")}</td>
            </tr>
          `}).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see banking history.</div>'}function Tf(t){const e=on(ue);return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${c(ve(ue))} Deposits</h3>
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

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${c(sc(t))}</textarea>
      </div>
    </div>
  `}function Bf(t){const e=on(ue);return`
    <tr data-bank-event-id="${f(t.eventId||"")}">
      <td>${c(t.displayName||"")}</td>
      <td>${c(String(Qi(t,ue)))}</td>
      <td>${c(String(t.purchasedTickets))}</td>
      ${e?`<td>${c(String(t.bonusPercent))}%</td><td>${c(String(t.bonusTickets))}</td>`:""}
      <td>${c(String(t.totalTickets))}</td>
      <td>${c(t.note||"")}</td>
    </tr>
  `}function Nf(){return`
    <tr>
      <td class="bank-empty-row" colspan="${on(ue)?7:5}">No deposits to export for ${c(ve(ue))}.</td>
    </tr>
  `}function Cf(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=Ki(t),n=hr(t),r=n<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${f(ve(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${c(ve(t))} Raffle Period ${n===0?"(Current)":`(${Math.abs(n)} period${Math.abs(n)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${c(Xn(e.salesStart))} through ${c(Xn(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${c(Xn(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${r?"":"disabled"} aria-label="Next ${f(ve(t))} raffle period">\u203A</button>
    </div>
  `}function zr(t,e,n,r){const i=N===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${f(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${c(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${c(n)}</span>
        <span class="bank-section-subtitle">${c(r)}</span>
      </span>
    </button>
  `}function qf(){if(!$())return"";const t=Lr(),e=xn(),n=nc(),r=t+e+n;if(r<=0)return"";const i=`Desktop Client Required${r>0?` (${r})`:""}`,s="Deposit mail checkout and ESO SavedVariables writing are disabled in the web client. Use the GuildSync desktop client for this mail workflow.";return`
    <button id="checkoutDepositMailButton" class="bank-export-button deposit-mail-button deposit-mail-status-only" type="button" data-deposit-mail-action="disabled" aria-disabled="true" title="${f(s)}" aria-label="${f(`${i}. ${s}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${c(i)}</span>
      <span class="deposit-mail-web-disabled" aria-hidden="true">Web Disabled</span>
    </button>
  `}function xn(){return In().reduce((t,e)=>t+sn(e.records).length,0)}function xf(){const t=(v==null?void 0:v.user)||{};return new Set([he(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function If(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?xf().has(e):!1}function nc(){return $()?z.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="written_to_eso"&&If(t)}).length:0}function Lr(){return z.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="unsent"}).length}function Of(t){const e=String(t||"").trim();return z.find(n=>String(n.eventId||"").trim()===e)||null}function zi(t){const e=String(t||"other").toLowerCase(),n=["biweekly","monthly","other"],r=n.includes(e)?e:"other",i=n.filter(s=>s!==r);return[i[0]||"biweekly",r,i[1]||"other"]}function Yi(t={},e="other"){const n=String(e||"other").toLowerCase(),r=Number(t==null?void 0:t.amount)||0;return n===String((t==null?void 0:t.type)||"").toLowerCase()?Number(t==null?void 0:t.ticketAmount)||0:n==="biweekly"?Math.floor(r/500):n==="monthly"?Math.floor(r/2500):0}function rc(t={},e="other",n=""){const r=String(t.type||"other").toLowerCase(),i=ve(r),s=ve(e),o=he()||"Unknown user",a=[`Moved from ${i} to ${s} by ${o}.`,`Ref ${t.eventId||""}`],l=String(n||"").trim();return l&&a.push(`Reason: ${l}`),a.join(`
`)}function ic(t){const e=Of(t);if(!e){p("banking-move-missing","Could not find the selected banking entry.",{ttlMs:m});return}const n=String(e.type||"other").toLowerCase();$e=e,I={targetType:n,note:"",tickets:String(Yi(e,n))},Ee="",Gt=!1,tn=!0,u()}function fr(){tn=!1,Gt=!1,Ee="",$e=null,I={targetType:"other",note:"",tickets:""},u()}function Pf(){const t=$e||{},e=String(t.type||"other").toLowerCase(),n=ve(e),r=zi(e);let i=String(I.targetType||r[0]||"other").toLowerCase();r.includes(i)||(i=r[0]||"other",I.targetType=i);const s=rc(t,i,I.note);return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="bankingMoveDialogTitle">
      <div class="roster-history-dialog manual-ticket-dialog banking-move-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="bankingMoveDialogTitle">Move Banking Entry</h3>
            <p>Move this deposit to a different banking section while preserving a reference to the original event.</p>
          </div>
          <button id="closeBankingMoveDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${Ee?`<div class="discord-data-error">${c(Ee)}</div>`:""}

        <div class="manual-ticket-form banking-move-form">
          <div class="banking-move-current-entry">
            <div><strong>Current Type:</strong> ${c(n)}</div>
            <div><strong>Event ID:</strong> ${c(t.eventId||"")}</div>
            <div><strong>Depositor:</strong> ${c(t.displayName||"")}</div>
            <div><strong>Amount:</strong> ${c(Bt(t.amount))} \u{1FA99}</div>
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
                    data-banking-move-target="${f(o)}"
                  >
                    <strong>${c(ve(o))}</strong>
                    <span>${o===e?"Current / restore original values":`${c(String(Yi(t,o)))} tickets`}</span>
                  </button>
                `).join("")}
              </div>
            </div>
          </div>

          <div class="banking-move-compact-row">
            <label class="manual-ticket-count-field banking-move-ticket-field">
              <span>Tickets Awarded</span>
              <input id="bankingMoveTicketsInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${f(I.tickets)}" ${i==="other"?"disabled":""} />
            </label>

            <label class="manual-ticket-note-field banking-move-note-field">
              <span>Move Note</span>
              <textarea id="bankingMoveNoteInput" class="discord-search-input manual-ticket-note-input banking-move-note-input" rows="1" placeholder="Optional reason for this move">${c(I.note)}</textarea>
            </label>
          </div>

          <div class="roster-history-muted banking-move-generated-note">${c(s).replace(/\n/g,"<br>")}</div>

          <div class="manual-ticket-actions banking-move-actions">
            <button id="saveBankingMoveButton" class="refresh-discord-button banking-move-submit-button" type="button" ${Gt||i===e?"disabled":""}>${Gt?"MOVING...":i===e?"SELECT A SIDE TO MOVE":"MOVE"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Ff(){var n,r,i,s;if(!tn)return;(n=document.querySelector("#closeBankingMoveDialogButton"))==null||n.addEventListener("click",()=>fr());function t(o){const a=String(o||"other").toLowerCase(),l=String(($e==null?void 0:$e.type)||"other").toLowerCase(),h=zi(l);I.targetType=h.includes(a)?a:l,I.tickets=String(Yi($e||{},I.targetType)),u()}document.querySelectorAll("[data-banking-move-target]").forEach(o=>{o.addEventListener("click",()=>t(o.dataset.bankingMoveTarget))}),(r=document.querySelector("#bankingMoveTicketsInput"))==null||r.addEventListener("input",o=>{const a=String(o.target.value||"").replace(/\D/g,"");o.target.value!==a&&(o.target.value=a),I.tickets=a}),(i=document.querySelector("#bankingMoveNoteInput"))==null||i.addEventListener("input",o=>{I.note=o.target.value||"";const a=document.querySelector(".banking-move-generated-note");a&&(a.innerText=rc($e||{},I.targetType||"other",I.note))}),(s=document.querySelector("#saveBankingMoveButton"))==null||s.addEventListener("click",()=>Gf());const e=document.querySelector(".roster-history-overlay");e&&e.addEventListener("click",o=>{o.target===e&&fr()})}async function Gf(){const t=$e;if(!(t!=null&&t.eventId)){Ee="No banking entry is selected.",u();return}const e=String(t.type||"other").toLowerCase(),n=zi(e),r=String(I.targetType||n[0]||"other").toLowerCase();if(!n.includes(r)||r===e){Ee="Select one of the side destinations before moving this entry.",u();return}const i=r==="other"?0:Math.floor(Number(String(I.tickets||"").trim()||0));if(!Number.isFinite(i)||i<0){Ee="Tickets must be zero or greater.",u();return}Gt=!0,Ee="",u();try{const s=await A("guildsync:move-banking-entry",{event_id:t.eventId,target_type:r,tickets:i,note:I.note||""},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to move banking entry.");fr(),await ee({silent:!0}),p("banking-entry-moved",s.message||"Banking entry moved.",{ttlMs:m})}catch(s){Gt=!1,Ee=w(s),u()}}function Uf(){if(!$()){p("banking-history-login-required","Login required to lookup banking history.",{ttlMs:m});return}nn=!0,kt="",V=[],le=[],be="",ye=!1,ke="",se=-1,clearTimeout(Mt),u(),C("bankingHistorySearchInput")}function Vf(){nn=!1,ye=!1,ke="",clearTimeout(Mt)}function Hf(){if(!nn)return;const t=document.querySelector("#bankingHistorySearchInput");t&&(t.addEventListener("input",e=>{if(kt=e.target.value||"",se=-1,be="",le=[],!kt.trim()){clearTimeout(Mt),ke="",V=[],ye=!1,u(),C("bankingHistorySearchInput");return}clearTimeout(Mt),Mt=setTimeout(()=>{Wf({keepFocus:!0})},250)}),t.addEventListener("keydown",e=>{if(e.key==="ArrowDown"||e.key==="ArrowUp"){if(V.length===0)return;e.preventDefault();const r=e.key==="ArrowDown"?1:-1;se=((se<0?0:se)+r+V.length)%V.length,u(),C("bankingHistorySearchInput");return}if(e.key!=="Enter")return;e.preventDefault();const n=V[se>=0?se:0];n!=null&&n.account_name&&as(n.account_name)})),document.querySelectorAll("[data-banking-history-account]").forEach(e=>{e.addEventListener("click",()=>{as(e.dataset.bankingHistoryAccount||"")})})}async function Wf(t={}){const e=kt.trim();if(!e){ke="",V=[],se=-1,be="",le=[],ye=!1,u(),t.keepFocus&&C("bankingHistorySearchInput");return}ye=!0,ke="",V=[],se=-1,u(),t.keepFocus&&C("bankingHistorySearchInput");try{const n=await A("guildsync:request-banking-history-matches",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search banking history.");V=jf(n.matches),se=V.length>0?0:-1}catch(n){ke=w(n)}finally{ye=!1,u(),t.keepFocus&&C("bankingHistorySearchInput")}}async function as(t){const e=String(t||"").trim();if(!!e){clearTimeout(Mt),be=e,kt=e,V=[],le=[],ye=!0,ke="",u();try{const n=await A("guildsync:request-banking-history-records",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load banking history.");le=zf(n.records)}catch(n){ke=w(n)}finally{ye=!1,u()}}}function jf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s;return{account_name:String(e.account_name||e.accountName||"").trim(),record_count:Number((r=(n=e.record_count)!=null?n:e.recordCount)!=null?r:0)||0,last_event_timestamp:(s=(i=e.last_event_timestamp)!=null?i:e.lastEventTimestamp)!=null?s:""}}).filter(e=>e.account_name):[]}function zf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s,o,a,l,h,y,b,g,k,L,S,E,F,te,_e,ne;return{event_id:String(e.event_id||e.eventId||"").trim(),transaction_type:String(e.transaction_type||e.transactionType||e.type||"").trim(),event_timestamp:(i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:"",deposit_amount:(a=(o=(s=e.deposit_amount)!=null?s:e.depositAmount)!=null?o:e.amount)!=null?a:"",ticket_quantity:(y=(h=(l=e.ticket_quantity)!=null?l:e.ticketQuantity)!=null?h:e.ticketAmount)!=null?y:"",purchased_tickets:(L=(k=(g=(b=e.purchasedTickets)!=null?b:e.ticket_quantity)!=null?g:e.ticketQuantity)!=null?k:e.ticketAmount)!=null?L:0,bonus_tickets:(S=e.bonusTickets)!=null?S:0,bonus_percent:(E=e.bonusPercent)!=null?E:0,bonus_enabled:e.bonusEnabled===!0,total_tickets:(ne=(_e=(te=(F=e.totalTickets)!=null?F:e.ticket_quantity)!=null?te:e.ticketQuantity)!=null?_e:e.ticketAmount)!=null?ne:0,note:String(e.note||"").trim()}}).sort((e,n)=>{const r=Number(e.event_timestamp)||0,i=Number(n.event_timestamp)||0;return r!==i?r-i:String(e.event_id).localeCompare(String(n.event_id),void 0,{numeric:!0})}):[]}function Yf(t){const e=Number(t);if(!e)return"";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t);const r=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0"),s=String(n.getFullYear()),o=String(n.getHours()).padStart(2,"0"),a=String(n.getMinutes()).padStart(2,"0"),l=String(n.getSeconds()).padStart(2,"0");return`${r}/${i}/${s} ${o}:${a}:${l}`}function Kf(t){const e=String(t||"").trim().toLowerCase();return e==="monthly"?"50/50":e==="biweekly"?"Bi-Weekly":e==="other"?"Other":e?e.replace(/\b\w/g,n=>n.toUpperCase()):""}function Jf(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":Bt(e)}function Yr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":de(e)}function oc(){if(T!=="more")return;Ff(),Hf(),document.querySelectorAll("[data-bank-entry-move]").forEach(a=>{a.addEventListener("click",()=>ic(a.dataset.bankEntryMove||""))}),document.querySelectorAll("[data-bank-section]").forEach(a=>{a.addEventListener("click",()=>{N=a.dataset.bankSection||"biweekly",u()})}),document.querySelectorAll("[data-bank-export-section]").forEach(a=>{a.addEventListener("click",()=>{ue=(a.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",mt=!0,u()})}),document.querySelectorAll("[data-bank-period-move]").forEach(a=>{a.addEventListener("click",()=>{Zf(a.dataset.bankPeriodMove||""),u()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{mt=!1,u()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>Qf());const n=document.querySelector(".bank-export-overlay");n&&n.addEventListener("click",a=>{a.target===n&&(mt=!1,u())});const r=document.querySelector("#openBankingHistoryButton");r&&r.addEventListener("click",()=>Uf());const i=document.querySelector("#openManualBiweeklyTicketButton");i&&i.addEventListener("click",async()=>{if(!$()){p("manual-ticket-login-required","Login required to add manual entries.",{ttlMs:m});return}Ne=!0,Y="",rn=M.accountName||"",ce=!1,U=-1,X.length===0&&(d==null?void 0:d.connected)&&$()&&await St({silent:!0}),u()});const s=document.querySelector("#checkoutDepositMailButton");s&&s.addEventListener("click",()=>{s.dataset.depositMailAction==="checkout"&&s.getAttribute("aria-disabled")!=="true"&&mc()});const o=document.querySelector("#refreshBankingDataButton");o&&o.addEventListener("click",()=>{if(!$()){p("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:m});return}fc({key:"banking"})})}function sc(t){const e=on(ue),n=[["Guildie Name","Deposit Amount","Purchased Tickets",...e?["Bonus %","Bonus Tickets"]:[],"Total Tickets","Note"]];for(const r of t)n.push([r.displayName||"",String(Qi(r,ue)),String(r.purchasedTickets),...e?[`${r.bonusPercent}%`,String(r.bonusTickets)]:[],String(r.totalTickets),r.note||""]);return n.map(r=>r.map(Er).join("	")).join(`
`)}function Er(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function $r(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly","readonly"),n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.width="1px",n.style.height="1px",n.style.opacity="0",n.style.pointerEvents="none",n.style.zIndex="-1",document.body.appendChild(n),n.focus(),n.select(),n.setSelectionRange(0,n.value.length);let r=!1;try{r=document.execCommand("copy")}finally{document.body.removeChild(n)}return r}async function Qf(){const t=Si(ue),e=sc(t);if(await $r(e)){p("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:m});return}const r=document.querySelector("#bankingExportTsv");r&&(r.focus(),r.select()),p("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:m})}function Si(t){return z.filter(e=>e.type===t).filter(e=>Xf(t,e)).sort((e,n)=>(Number(e.time)||0)-(Number(n.time)||0))}function Xf(t,e){if(t==="other")return!0;const n=Number(e==null?void 0:e.time)||0;if(n<=0)return!1;const r=Ki(t);return n>=r.salesStart&&n<=r.salesEnd}function hr(t){return Number(di[t])||0}function Zf(t){if(N!=="biweekly"&&N!=="monthly")return;const e=hr(N);if(t==="previous"){di[N]=e-1;return}t==="next"&&e<0&&(di[N]=e+1)}function Ki(t){const e=Math.floor(Date.now()/1e3);if(t==="monthly"){const i=eh(e,hr(t));return{salesStart:cc(i)+1,salesEnd:i,raffleTime:i+cr}}const n=rt;let r=ac(e);return r+=hr(t)*n,{salesStart:r-n+1,salesEnd:r,raffleTime:r+cr}}function ac(t){const e=rt;let n=ld;for(;n-e>t;)n-=e;for(;n<t;)n+=e;return n}function eh(t,e=0){let n=th(t),r=Number(e)||0;for(;r<0;)n=cc(n),r+=1;for(;r>0;)n=nh(n),r-=1;return n}function th(t){let e=ac(t);for(;!Ji(e);)e+=rt;return e}function cc(t){let e=t-rt;for(;!Ji(e);)e-=rt;return e}function nh(t){let e=t+rt;for(;!Ji(e);)e+=rt;return e}function Ji(t){const e=t+cr,n=t+rt+cr;return cs(e)!==cs(n)}function cs(t){var s,o;const e=new Date(Number(t||0)*1e3);if(Number.isNaN(e.getTime()))return"";const n=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit"}).formatToParts(e),r=((s=n.find(a=>a.type==="year"))==null?void 0:s.value)||"",i=((o=n.find(a=>a.type==="month"))==null?void 0:o.value)||"";return`${r}-${i}`}function rh(t=N){const e=String(t||"").toLowerCase();return e!=="monthly"&&e!=="biweekly"?0:"auto"}function Qi(t={},e=N){const n=Number(t.amount)||0;if(!rh(e))return n;const r=Math.abs(Math.trunc(n))%10,i=r===1||r===3?r:0;return i>0&&n>i?n-i:n}function ih(t,e=N){return t.reduce((n,r)=>(n.amount+=Qi(r,e),n.purchased+=Number(r.purchasedTickets)||0,n.bonus+=Number(r.bonusTickets)||0,n.tickets+=Number(r.totalTickets)||0,n),{amount:0,purchased:0,bonus:0,tickets:0})}function lc(t){const e=Math.ceil((Number(t)||0)/2);return e<=0?0:Math.ceil(e/2e5)*2e5}function oh(t){const e=lc(t);return e>0?e/2e5:0}function on(t){var n;if(t!=="biweekly"&&t!=="monthly")return!1;const{salesEnd:e}=Ki(t);return((n=Ft.find(r=>r.type===t&&r.salesEnd===e))==null?void 0:n.enabled)===!0}function sh(t,e=!0,n=on(N)){return`
    <tr data-bank-event-id="${f(t.eventId||"")}">
      <td>${c(t.note||t.eventId||"")}</td>
      <td>${c(Xn(t.time))}</td>
      <td>${c(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${c(Bt(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td>${c(de(t.purchasedTickets))}</td>${n?`<td>${c(de(t.bonusPercent))}%</td><td>${c(de(t.bonusTickets))}</td>`:""}<td><strong class="bank-ticket-amount">${c(de(t.totalTickets))}</strong></td>`:""}
      <td><button class="bank-entry-move-button" type="button" data-bank-entry-move="${f(t.eventId||"")}">Move</button></td>
    </tr>
  `}function ah(t=!0,e=!1){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?e?"9":"7":"5"}">No ${c(ve(N))} deposits found for this ${N==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function ve(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function Xn(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Bt(t){return(Number(t)||0).toLocaleString()}function de(t){return(Number(t)||0).toLocaleString()}function sn(t){return Array.isArray(t)?t.map(e=>{var r,i,s,o,a,l,h,y,b,g,k,L,S,E,F,te,_e,ne,so,ao,co,lo,uo,fo,ho,po,mo,go,bo,yo,ko,vo,So,wo,_o,Ao,Lo,Eo,$o,Ro,Do,Mo,To,Bo,No,Co,qo;const n=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:n==="monthly"||n==="biweekly"||n==="other"?n:"other",eventId:String((i=(r=e==null?void 0:e.eventId)!=null?r:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((o=(s=e==null?void 0:e.time)!=null?s:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((l=(a=e==null?void 0:e.displayName)!=null?a:e==null?void 0:e.display_name)!=null?l:"").trim(),amount:Number((h=e==null?void 0:e.amount)!=null?h:0)||0,ticketAmount:Number((b=(y=e==null?void 0:e.ticketAmount)!=null?y:e==null?void 0:e.ticket_amount)!=null?b:0)||0,purchasedTickets:Number((k=(g=e==null?void 0:e.purchasedTickets)!=null?g:e==null?void 0:e.ticketAmount)!=null?k:0)||0,bonusTickets:Number((L=e==null?void 0:e.bonusTickets)!=null?L:0)||0,bonusPercent:Number((S=e==null?void 0:e.bonusPercent)!=null?S:0)||0,bonusEnabled:(e==null?void 0:e.bonusEnabled)===!0,totalTickets:Number((F=(E=e==null?void 0:e.totalTickets)!=null?E:e==null?void 0:e.ticketAmount)!=null?F:0)||0,note:String((te=e==null?void 0:e.note)!=null?te:"").trim(),dataSource:String((ne=(_e=e==null?void 0:e.dataSource)!=null?_e:e==null?void 0:e.data_source)!=null?ne:"").trim(),emailRequested:Boolean((so=e==null?void 0:e.emailRequested)!=null?so:e==null?void 0:e.email_requested),mailStatus:String((co=(ao=e==null?void 0:e.mailStatus)!=null?ao:e==null?void 0:e.mail_status)!=null?co:"").trim(),mailRequestId:String((uo=(lo=e==null?void 0:e.mailRequestId)!=null?lo:e==null?void 0:e.mail_request_id)!=null?uo:"").trim(),mailBatchId:String((ho=(fo=e==null?void 0:e.mailBatchId)!=null?fo:e==null?void 0:e.mail_batch_id)!=null?ho:"").trim(),checkedOutBy:String((mo=(po=e==null?void 0:e.checkedOutBy)!=null?po:e==null?void 0:e.checked_out_by)!=null?mo:"").trim(),checkedOutAt:String((bo=(go=e==null?void 0:e.checkedOutAt)!=null?go:e==null?void 0:e.checked_out_at)!=null?bo:"").trim(),checkoutExpiresAt:String((ko=(yo=e==null?void 0:e.checkoutExpiresAt)!=null?yo:e==null?void 0:e.checkout_expires_at)!=null?ko:"").trim(),writtenToEsoAt:String((So=(vo=e==null?void 0:e.writtenToEsoAt)!=null?vo:e==null?void 0:e.written_to_eso_at)!=null?So:"").trim(),sentAt:String((_o=(wo=e==null?void 0:e.sentAt)!=null?wo:e==null?void 0:e.sent_at)!=null?_o:"").trim(),failedReason:String((Lo=(Ao=e==null?void 0:e.failedReason)!=null?Ao:e==null?void 0:e.failed_reason)!=null?Lo:"").trim(),recipient:String((Do=(Ro=($o=(Eo=e==null?void 0:e.recipient)!=null?Eo:e==null?void 0:e.account_name)!=null?$o:e==null?void 0:e.displayName)!=null?Ro:e==null?void 0:e.display_name)!=null?Do:"").trim(),subject:String((Bo=(To=(Mo=e==null?void 0:e.subject)!=null?Mo:e==null?void 0:e.mailSubject)!=null?To:e==null?void 0:e.mail_subject)!=null?Bo:"").trim(),body:String((qo=(Co=(No=e==null?void 0:e.body)!=null?No:e==null?void 0:e.mailBody)!=null?Co:e==null?void 0:e.mail_body)!=null?qo:"").trim()}}):[]}function ch(t){const e=new Map;for(const n of z)n.eventId&&e.set(n.eventId,n);for(const n of t)!n.eventId||e.set(n.eventId,n);z=Array.from(e.values()).sort((n,r)=>(Number(r.time)||0)-(Number(n.time)||0))}function lh(t){t.querySelectorAll("[data-open-member-link-dialog]").forEach(e=>{e.addEventListener("click",()=>Ui(e.dataset.openMemberLinkDialog||"",e.dataset.memberLinkValue||""))}),t.querySelectorAll("[data-open-roster-notes]").forEach(e=>{e.addEventListener("click",()=>Wa(e.dataset.openRosterNotes||""))}),t.querySelectorAll("[data-bank-entry-move]").forEach(e=>{e.addEventListener("click",()=>ic(e.dataset.bankEntryMove||""))})}function Xi(t,e,n=!1,r=!1){const i=document.querySelector(t);if(!i)return;const s=xi(i),o=document.activeElement,a=o&&"selectionStart"in o?[o.selectionStart,o.selectionEnd]:null,l=document.createElement("template");l.innerHTML=e;const h=l.content.firstElementChild,y=n?".bank-deposit-table":r?".eso-roster-table":".discord-member-table";xo(i.querySelector(`${y} tbody`),h.querySelector(`${y} tbody`),n?"data-bank-event-id":r?"data-eso-account-name":"data-discord-user-id",lh),pn(i.querySelector(`${y} thead`),h.querySelector(`${y} thead`)),mn(i.querySelector(".discord-data-actions .discord-last-refresh"),h.querySelector(".discord-data-actions .discord-last-refresh"));const b=n?"#refreshBankingDataButton":r?"#refreshRosterDataButton":"#refreshDiscordDataButton",g=i.querySelector(b),k=h.querySelector(b);if(g&&k&&(g.disabled=k.disabled,mn(g.lastElementChild,k.lastElementChild)),n){pn(i.querySelector(".bank-deposits-summary-row"),h.querySelector(".bank-deposits-summary-row")),pn(i.querySelector(".bank-raffle-period-content"),h.querySelector(".bank-raffle-period-content"));const L=i.querySelector("#checkoutDepositMailButton"),S=h.querySelector("#checkoutDepositMailButton");if(!S)L==null||L.remove();else if(!L||!L.isEqualNode(S)){const ne=S.cloneNode(!0);ne.addEventListener("click",()=>{ne.dataset.depositMailAction==="checkout"&&ne.getAttribute("aria-disabled")!=="true"&&mc()}),L?L.replaceWith(ne):i.querySelector(".discord-data-actions").insertBefore(ne,i.querySelector("[data-bank-export-section]"))}xo(i.querySelector("#bankingExportGrid tbody"),h.querySelector("#bankingExportGrid tbody"),"data-bank-event-id"),pn(i.querySelector("#bankingExportGrid thead"),h.querySelector("#bankingExportGrid thead")),mn(i.querySelector(".bank-export-count"),h.querySelector(".bank-export-count"));const E=i.querySelector("#copyBankingExportGridButton"),F=h.querySelector("#copyBankingExportGridButton");E&&F&&(E.disabled=F.disabled);const te=i.querySelector("#bankingExportTsv"),_e=h.querySelector("#bankingExportTsv");te&&_e&&te.value!==_e.value&&(te.value=_e.value)}else{mn(i.querySelector(".discord-results-count"),h.querySelector(".discord-results-count"));const L=r?"#rosterRankFilter":"#discordRoleFilter",S=i.querySelector(L),E=h.querySelector(L);if(S&&E&&S.innerHTML!==E.innerHTML){const F=S.value;S.innerHTML=E.innerHTML,S.value=F}}(o==null?void 0:o.isConnected)&&document.activeElement!==o&&(o.focus({preventScroll:!0}),a&&a[0]!==null&&o.setSelectionRange(...a)),s()}function Ht(){T==="eso-members"&&document.querySelector(".eso-roster-panel")&&Xi(".eso-roster-panel",ta(),!1,!0)}function Zn(){Oe||Ie||it?u():T==="discord-members"?Wt():T==="eso-members"&&Ht()}function Wt(){T==="discord-members"&&document.querySelector(".discord-member-panel")&&Xi(".discord-member-panel",ea())}function dc(t){const e=Ft.find(n=>`${n.type}:${n.salesEnd}`===Be);if(t.bonusSettings&&(G=t.bonusSettings),Array.isArray(t.bonusRaffles)){const n=[...t.bonusRaffles];e&&!n.some(r=>`${r.type}:${r.salesEnd}`===Be)&&n.push(e),Ft=n}}function dh(){if(T!=="settings"||!G)return;const t=document.querySelector(".raffle-bonus-card");if(!t)return;const e=xi(t.parentElement),n=document.createElement("template");n.innerHTML=la();const r=n.content.firstElementChild;if(t.querySelector("#raffleBonusSettingsForm")){const i=t.querySelector("#bonusRafflePicker"),s=r.querySelector("#bonusRafflePicker");if(i&&s&&i.innerHTML!==s.innerHTML){const o=i.value;i.innerHTML=s.innerHTML,i.value=o}if(!ae&&(me==null?void 0:me.raffle)!==Be){mn(t.querySelector("[data-bonus-settings-source]"),r.querySelector("[data-bonus-settings-source]"));const o=t.querySelectorAll(".raffle-bonus-tiers"),a=r.querySelectorAll(".raffle-bonus-tiers");o.forEach((l,h)=>{const y=a[h];!y||(l.querySelectorAll("input").length!==y.querySelectorAll("input").length?pn(l,y):y.querySelectorAll("input").forEach(b=>{const g=Array.from(l.querySelectorAll("input")).find(k=>k.name===b.name);!g||(g.type==="checkbox"?g.checked!==b.checked&&(g.checked=b.checked):g.value!==b.value&&(g.value=b.value))}))})}}else{const i=r.cloneNode(!0);t.replaceWith(i),ca(i),bs(Hs,{refresh:!0,root:i})}e()}function Z(){dh(),T==="more"&&document.querySelector(".bank-deposits-panel")&&Xi(".bank-deposits-panel",tc(),!0)}function uc(){js=new Date().toISOString()}async function uh(t={}){!(t!=null&&t.ok)||(z=sn(t.entries),dc(t),uc(),Z(),p("banking-data-updated",`Banking data updated. Loaded ${z.length} deposit record${z.length===1?"":"s"}.`,{ttlMs:m}))}async function ee(t={}){const e=Boolean(t.silent),n=Boolean(t.background);if(!(d!=null&&d.connected)){e||p("banking-data-error","GuildSync websocket is not connected.",{ttlMs:m});return}n||(xe=!0,Z());try{const r=await A("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");z=sn(r.entries),dc(r),uc(),e||p("banking-data",`Loaded ${z.length} banking deposit record${z.length===1?"":"s"}.`,{ttlMs:m})}catch(r){e||p("banking-data-error",w(r),{ttlMs:m})}finally{n||(xe=Boolean(t.deferPendingRefresh)),Z(),t.deferPendingRefresh||Bn("more")}}async function ls(){!(d!=null&&d.connected)||!$()||xe||(await ee({silent:!0,background:!0}),Lr()<=0&&xn()>0&&(Le.running?Z():bh("availability-refresh")))}function fh(){At&&clearInterval(At),ls(),At=window.setInterval(ls,od)}function hh(){At&&(clearInterval(At),At=null)}async function ph(t={}){if(!!$()){if(!(d!=null&&d.connected)){p("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:m});return}try{const e=await Ql(t);if(!(e!=null&&e.ok))return;const n=Array.isArray(e.ackEntries)?e.ackEntries:[];if(n.length===0)return;const r=await A("guildsync:mark-deposit-mail-sent",{mail_ack:n,mail_request_ids:n.map(o=>(o==null?void 0:o.mail_request_id)||(o==null?void 0:o.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(r.mail_request_ids)?r.mail_request_ids:Array.isArray(r.mailRequestIds)?r.mailRequestIds:[];if(i.length===0){p("deposit-mail-ack-none",r.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:m});return}const s=await Xl(i);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");p("deposit-mail-ack-sent",s.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:m}),await ee({silent:!0})}catch(e){p("deposit-mail-ack-error",w(e),{ttlMs:m})}}}async function mh(){if(!Ur){Ur=!0;try{const t=await Zl();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&p("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:m})}catch(t){p("deposit-mail-ack-cleanup-error",w(t),{ttlMs:m})}finally{Ur=!1}}}async function fc(t={}){var e,n;if(!!$()){if(!(d!=null&&d.connected)){p("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}xe=!0,Z();try{const r=await Hl(t);if(!(r!=null&&r.ok)){p("banking-data-pending",(r==null?void 0:r.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:m});return}const i=sn((e=r==null?void 0:r.data)==null?void 0:e.entries);ch(i);const s=new Date().toISOString(),o={local_upload_id:gc(),authenticated_username:he(),authenticated_discord_user_id:((n=v==null?void 0:v.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:s,data:r.data||{}};try{await yc(o)}catch(a){throw vh(o),a}await ee({silent:!0,deferPendingRefresh:!0})}catch(r){p("banking-data-error",w(r),{ttlMs:m})}finally{xe=!1,Z(),Bn("more")}}}function hc(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function In(){try{const t=window.localStorage.getItem(Os),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function pc(t){window.localStorage.setItem(Os,JSON.stringify(Array.isArray(t)?t:[]))}function gh(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||hc()),n=In().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);n.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),pc(n)}function ds(t){const e=String(t||"").trim();if(!e)return;const n=In().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);pc(n)}async function mc(){if(!$()){p("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:m});return}if(!(d!=null&&d.connected)){p("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:m});return}const t=In(),e=Lr();if(t.length>0&&e<=0){await jt();return}Z();try{const n=await A("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail checkout request.");const r=sn(n.records);if(r.length===0){p("deposit-mail-none",n.message||"No unsent deposit mail is available.",{ttlMs:m}),await ee({silent:!0});return}const i={mail_batch_id:n.mail_batch_id||n.mailBatchId||hc(),checked_out_by:n.checked_out_by||n.checkedOutBy||he(),checked_out_at:new Date().toISOString(),records:r};gh(i),await jt()}catch(n){p("deposit-mail-error",w(n),{ttlMs:m})}finally{Z()}}function bh(t=""){Lt||Kn||!$()||xn()<=0||Le.running||(Lt=window.setTimeout(()=>{Lt=null,jt()},100))}async function jt(){if(Lt&&(window.clearTimeout(Lt),Lt=null),Kn||!$())return;const t=In();if(t.length!==0){if(await wi({silent:!0}),Le.running){p("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:m}),Z();return}Kn=!0,Z();try{for(const e of t){const n=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),r=sn(e==null?void 0:e.records);if(r.length===0){ds(n);continue}const i=await Jl(r);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(d!=null&&d.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const s=await A("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:n,event_ids:i.eventIds||r.map(o=>o.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend did not confirm deposit mail was marked written_to_eso.");ds(n),p("deposit-mail-written",i.message||`Wrote ${r.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:m})}await ee({silent:!0})}catch(e){p("deposit-mail-write-error",w(e),{ttlMs:m})}finally{Kn=!1,Z()}}}async function wi(t={}){try{const e=Boolean(Le.running),n=await Kl();Le={running:Boolean(n==null?void 0:n.running),message:String((n==null?void 0:n.message)||"")},Le.running||await mh(),e&&!Le.running&&(p("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:m}),await jt()),e!==Le.running&&Z()}catch(e){t.silent||p("eso-status-error",w(e),{ttlMs:m})}}function yh(){_t&&clearInterval(_t),wi({silent:!0}).then(()=>{!Le.running&&xn()>0&&jt()}),_t=window.setInterval(()=>wi({silent:!0}),id)}function kh(){_t&&(clearInterval(_t),_t=null)}function gc(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Zi(){try{const t=window.localStorage.getItem(Is),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function bc(t){window.localStorage.setItem(Is,JSON.stringify(Array.isArray(t)?t:[]))}function vh(t){const e=String((t==null?void 0:t.local_upload_id)||gc()),n=Zi().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),bc(n),p("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function Sh(t){const e=Zi().filter(n=>(n==null?void 0:n.local_upload_id)!==t);bc(e)}async function wh(){if(Pr||!(d!=null&&d.connected)||!$())return;const t=Zi();if(t.length!==0){Pr=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!$())return;await yc(e),Sh(e.local_upload_id)}}catch(e){p("banking-data-pending-error",`Pending banking upload retry failed: ${w(e)}`,{ttlMs:m})}finally{Pr=!1}}}async function yc(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await A("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const n=await Wl(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return p("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:m}),e}function kc(){if(T!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>_h());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{It=!0,Te="",u(),C("discordHistorySearchInput")});const n=document.querySelector("#discordMemberSearch");n&&n.addEventListener("input",o=>{rr=o.target.value||"",oi=o.target.selectionStart,si=o.target.selectionEnd,u({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Rh(o.dataset.discordSortColumn||"username")})});const r=document.querySelector("#discordRoleFilter");r&&r.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(Et.add(a),u())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRoleFilter||"";Et.delete(a),u()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&($t.add(a),u())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeDiscordLinkStatusFilter||"";$t.delete(a),u()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>Ui(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{rr="",Et.clear(),$t.clear(),u()})}async function _h(){var t,e;if(!(d!=null&&d.connected)){p("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:m});return}nr=!0,Wt(),p("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const n=await A("guildsync:request-discord-data-refresh",{requested_by:((t=v==null?void 0:v.user)==null?void 0:t.display_name)||((e=v==null?void 0:v.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to request Discord data refresh.");p("discord-refresh-requested",n.message||"Discord data refresh completed.",{ttlMs:m}),await Rr({silent:!0})}catch(n){p("discord-refresh-error",w(n),{ttlMs:m})}finally{nr=!1,Wt()}}async function Ah(){if(!(d!=null&&d.connected))return;const t=await A("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(vr=t.value||null)}async function Lh(t={}){if(!!(t!=null&&t.ok)){j=eo(t.members),kr=to(t.roles),t.last_refresh&&(vr=t.last_refresh);try{await Ah()}catch{}T==="discord-members"&&Wt(),p("discord-data-updated",`Discord data updated. Loaded ${j.length} member record${j.length===1?"":"s"}.`,{ttlMs:m})}}async function Rr(t={}){const e=Boolean(t.silent);if(!(d!=null&&d.connected)){p("discord-data-error","GuildSync websocket is not connected.",{ttlMs:m});return}Ct=!0,Wt();try{const[n,r]=await Promise.all([A("guildsync:request-discord-data-date",{}),A("guildsync:request-discord-member-dataJSON",{})]);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord refresh date.");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord member data.");vr=n.value||null,j=eo(r.members),kr=to(r.roles),e||p("discord-data",`Loaded ${j.length} Discord member record${j.length===1?"":"s"}.`,{ttlMs:m})}catch(n){p("discord-data-error",w(n),{ttlMs:m})}finally{Ct=!1,Wt(),Bn("discord-members")}}function A(t,e={},n=3e4){return new Promise((r,i)=>{if(!(d!=null&&d.connected)){i(new Error("GuildSync websocket is not connected."));return}let s=!1;const o=window.setTimeout(()=>{s||(s=!0,i(new Error(`${t} timed out.`)))},n);d.emit(t,e,a=>{s||(s=!0,window.clearTimeout(o),r(a))})})}function eo(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(vc).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,n)=>Ln(e).localeCompare(Ln(n),void 0,{sensitivity:"base"})):[]}function to(t){if(!Array.isArray(t))return[];const e=new Map;for(const n of t){const r=vc(n);if(!r)continue;const i=r.role_id||kn(r.role_name);i&&!e.has(i)&&e.set(i,r)}return Array.from(e.values()).sort((n,r)=>String(n.role_name||"").localeCompare(String(r.role_name||""),void 0,{sensitivity:"base"}))}function vc(t){var i,s;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),n=String(t.role_name||t.name||"Unnamed Role").trim(),r=(s=(i=t.role_color)!=null?i:t.color)!=null?s:null;return{role_id:e,role_name:n||"Unnamed Role",role_color:r}}function Eh(){const t=rr.trim().toLowerCase(),e=Array.from(Et),n=j.filter(r=>{if(t&&![r.username,r.global_name,r.server_nickname,r.discord_id,...r.roles.map(s=>s.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(r.roles.map(s=>s.role_name));if(!e.every(s=>i.has(s)))return!1}return!!oa($t,Od(r))});return $h(n)}function $h(t){const e=ct==="desc"?-1:1;return[...t].sort((n,r)=>{const i=us(n,Sn),s=us(r,Sn),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:Ln(n).localeCompare(Ln(r),void 0,{sensitivity:"base",numeric:!0})})}function us(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(n=>n.role_name||"").filter(Boolean).sort((n,r)=>n.localeCompare(r,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function Rh(t){const n=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";Sn===n?ct=ct==="asc"?"desc":"asc":(Sn=n,ct="asc"),u()}function Un(t,e){const n=Sn===t,r=ct==="asc"?"ascending":"descending",i=n?ct==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${n?r:"none"}">
      <button
        class="discord-sort-header${n?" active":""}"
        type="button"
        data-discord-sort-column="${f(t)}"
        title="Sort ${f(e)} ${n&&ct==="asc"?"descending":"ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function Dh(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(oi)?oi:t.value.length,n=Number.isInteger(si)?si:e;t.setSelectionRange(e,n)}}function Mh(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(ci)?ci:t.value.length,n=Number.isInteger(li)?li:e;t.setSelectionRange(e,n)}}function Th(){const t=new Set;for(const e of j)for(const n of e.roles)n.role_name&&t.add(n.role_name);return Array.from(t).sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function Bh(t){const e=Oh(t),n=Ln(t),r=t.roles||[];return`
    <tr data-discord-user-id="${f(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${f(e)}" alt="${f(n)}" />`:`<span>${c(Dc(n))}</span>`}
          </div>
          <span>${c(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${c(t.global_name||"")}</td>
      <td>${c(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${r.length>0?r.map(i=>Ch(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${Da({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function Nh(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${c(Ct?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function Ch(t){const e=Dr(t.role_color),n=io(e),r=ro(e,n);return`
    <span
      class="discord-role-badge"
      title="${f(t.role_name)}"
      style="${r}"
    >${c(t.role_name)}</span>
  `}function qh(t){const e=no(t),n=Dr(e==null?void 0:e.role_color),r=io(n),i=ro(n,r);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-role-filter="${f(t)}"
      style="${i}"
      title="Remove ${f(t)} filter"
    >
      <span>${c(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function xh(t){const e=Ih(t);for(const n of e){const r=no(n);if(r)return r}return null}function Ih(t){const e=String(t||"").trim();if(!e)return[];const n=kn(e),i={associate:["Associates","Associate"],associates:["Associates","Associate"],soldier:["Soldiers","Soldier"],soldiers:["Soldiers","Soldier"],capo:["Capo"],capos:["Capo","Capos"],caporegime:["CapoRegime","Capo Regime","Capo Regimes"],consiglieres:["Consigliere","Consiglieres"],consigliere:["Consigliere","Consiglieres"]}[n]||[e];return Array.from(new Set([e,...i].filter(Boolean)))}function kn(t){return String(t||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function no(t){const e=kn(t);if(!e)return null;const n=kr.find(r=>kn(r.role_name)===e);if(n)return n;for(const r of j){const i=r.roles.find(s=>kn(s.role_name)===e);if(i)return i}return null}function Dr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function ro(t,e){return[`--role-fill-top: ${fs(t,"#ffffff",.16)}`,`--role-fill-bottom: ${fs(t,"#000000",.1)}`,`--role-fill-glow: ${hs(t,.28)}`,`--role-fill-edge: ${hs(t,.46)}`,`color: ${e}`].join("; ")}function fs(t,e,n){const r=Vn(t)||Vn("#64748b"),i=Vn(e)||Vn("#ffffff"),s=Math.max(0,Math.min(1,Number(n)||0)),o=Math.round(r.red+(i.red-r.red)*s),a=Math.round(r.green+(i.green-r.green)*s),l=Math.round(r.blue+(i.blue-r.blue)*s);return`#${Kr(o)}${Kr(a)}${Kr(l)}`}function Vn(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function Kr(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function hs(t,e){const n=String(t||"#64748b").replace("#",""),r=/^[0-9a-f]{6}$/i.test(n)?n:"64748b",i=parseInt(r.slice(0,2),16),s=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`rgba(${i}, ${s}, ${o}, ${e})`}function io(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const n=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(n*299+r*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function Oh(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!n)return"";const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function Ln(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function Sc(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function er(){const t=document.querySelector("#discordArea");if(!!t){if(On(!1),$()){const e=v.user||{},n=he(),r=np(e),i=Dc(n);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${r?`<img src="${f(r)}" alt="${f(n)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${c(i)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const s=document.querySelector("#discordAvatarButton");s.addEventListener("contextmenu",o=>{o.preventDefault(),ps()}),s.addEventListener("click",()=>{ps()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",Vh)}}function ps(){if(Rn){On();return}Uh()}function Ph(t=ze){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],n=String((t==null?void 0:t.directory)||"").trim(),r=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const s=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),o=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),a=String((i==null?void 0:i.filePath)||(n?`${n}\\${o}`:o)).trim(),l=(i==null?void 0:i.enabled)!==!1,h=r&&l,y=`profileFileWatchToggle-${Gh(s||o)}`;return`
          <label class="profile-filewatch-item ${l?"enabled":"disabled"}" title="${f(a)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${c(o)}</span>
              <span class="profile-filewatch-state">${h?"Watching":l?"On":"Off"}</span>
            </span>
            <input
              id="${f(y)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${f(s)}"
              ${l?"checked":""}
              aria-label="Turn file watch ${l?"off":"on"} for ${f(o)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function oo(){var r,i,s;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=he(),n=((r=v.user)==null?void 0:r.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${c(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${c(rp(n))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${c(yr)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${ze!=null&&ze.watching?"Active":"Stopped"}</span>
        </div>
        ${Ph()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(i=document.querySelector("#discordLogoutButton"))==null||i.addEventListener("click",Hh),(s=document.querySelector("#associateTicketReportButton"))==null||s.addEventListener("click",()=>{On(!1),fa()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",Fh)})}async function wc(){try{ze=await br(),Rn&&oo()}catch(t){p("file-watcher-error",w(t),{ttlMs:m})}}async function Fh(t){var r;const e=t.currentTarget,n=String(((r=e==null?void 0:e.dataset)==null?void 0:r.filewatchKey)||"").trim();if(!!n)try{e.disabled=!0,ze=await Vl(n,e.checked),await Nt({silent:!0}),Rn&&oo()}catch(i){p("file-watcher-error",w(i),{ttlMs:m}),await wc()}}function Gh(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function Uh(){const t=document.querySelector("#discordProfileMenu");!t||(oo(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),Rn=!0,wc(),setTimeout(()=>{window.addEventListener("click",_c),window.addEventListener("keydown",Ac)},0))}function On(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),Rn=!1,t&&(window.removeEventListener("click",_c),window.removeEventListener("keydown",Ac))}function _c(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&On()}function Ac(t){t.key==="Escape"&&On()}async function Vh(){try{p("auth","Opening Discord login...",{ttlMs:m});const t=await Ol();t!=null&&t.status_message&&p("auth",t.status_message,{ttlMs:m}),et()}catch(t){p("auth-error",w(t),{ttlMs:m}),et()}}async function Hh(){try{v=await Fl(),p("auth",v.status_message||"Logged out.",{ttlMs:m}),zs(),vn(),await Nt()}catch(t){p("auth-error",w(t),{ttlMs:m}),et()}}function vn(){const t=v.socket_url||"https://guildsync.perdues.me";Wh(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};v!=null&&v.token&&(e.auth={token:v.token}),d=zn(t,e),d.on("connect",()=>{et(),Lc(),T==="discord-members"&&Rr({silent:!0}),T==="eso-members"&&St({silent:!0}),(T==="more"||T==="settings"&&!G)&&ee({silent:!0}),wh(),jt(),yh(),fh(),vf(),Af(),jh()}),d.on("connect_error",()=>{et(),pr()}),d.on("disconnect",()=>{et(),pr(),kh(),hh()}),d.on("guildsync:version-status",n=>{zh(n)}),d.on("guildsync:discord-member-data-updated",n=>{Lh(n)}),d.on("guildsync:banking-data-updated",n=>{uh(n)}),d.on("guildsync:roster-data-updated",n=>{gf(n)}),d.on("guildsync:member-links-updated",Bu),d.on("guildsync:discord-refresh-status",(n={})=>{const r=String(n.message||"").trim();r&&p("discord-refresh-status",r,{ttlMs:m})})}function Wh(t=!0){pr(),d&&(d.disconnect(),d=null),t&&et()}function Lc(){!(d!=null&&d.connected)||d.emit("guildsync:client-version",{version:yr,platform:Mr(),client_type:"web"})}function jh(){pr(),Yn=window.setInterval(()=>{Lc()},rd)}function pr(){Yn&&(window.clearInterval(Yn),Yn=null)}function zh(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",n=t.download&&typeof t.download=="object"?t.download:{};Pe={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||n.url||"").trim(),fileName:String(t.download_file_name||n.file_name||"").trim(),platformLabel:String(n.label||t.platform||Mr()).trim()},p("version",`GuildSync is out of date. Current version: ${yr}. Latest version: ${e}.`),ms();return}Pe={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},ms(),Tr("version")}}function Mr(){const t=String(navigator.userAgent||"").toLowerCase(),n=`${String(navigator.platform||"").toLowerCase()} ${t}`;return n.includes("mac")?"macos":n.includes("linux")?"linux":"windows"}function ms(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!Pe.updateRequired||!Pe.downloadUrl){t.innerHTML="";return}const e=Pe.platformLabel||"Desktop",n=Pe.latestVersion||"latest",r=Pe.fileName||"GuildSync client download";t.innerHTML=`
    <button
      id="desktopUpdateDownloadButton"
      class="desktop-client-download-button"
      type="button"
      title="Download ${f(r)}"
      aria-label="Download GuildSync ${f(n)} for ${f(e)}"
    >
      <span class="desktop-client-download-icon" aria-hidden="true">\u2B07</span>
      <span class="desktop-client-download-copy">
        <span class="desktop-client-download-title">Download Update</span>
        <span class="desktop-client-download-subtitle">${c(e)} detected \xB7 ${c(n)}</span>
      </span>
      <span class="desktop-client-download-caret" aria-hidden="true">\u25BC</span>
    </button>
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{Yh()})}function Yh(){const t=String(Pe.downloadUrl||"").trim();if(!t){p("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:m});return}Yl(t)}function p(t,e,n={}){const r=String(t||"").trim(),i=String(e||"").trim();if(!(!r||!i)){if(tt.set(r,i),st.has(r)&&(window.clearTimeout(st.get(r)),st.delete(r)),n.ttlMs&&Number(n.ttlMs)>0){const s=window.setTimeout(()=>{Tr(r)},Number(n.ttlMs));st.set(r,s)}zt()}}function Tr(t){const e=String(t||"").trim();if(!!e){if(tt.delete(e),st.has(e)&&(window.clearTimeout(st.get(e)),st.delete(e)),P===e){Cr(()=>{P="",zt()});return}zt()}}function zt(){const t=Br();if(t.length===0){gt?Cr(En):En();return}!gt&&!bt&&Nr(t[0])}function Br(){return Array.from(tt.keys())}function Ec(){const t=Br();if(t.length===0)return"";if(!P)return t[0];const e=t.indexOf(P);return e<0?t[0]:t[(e+1)%t.length]}function Nr(t){const e=document.querySelector("#statusMessageTrack");if(!e||!tt.has(t)){En();return}qr();const n=tt.get(t);P=t,gt=!0,bt=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=n,e.style.setProperty("--message-fade-duration",`${Gs}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",bt=!1,Kh()},{once:!0})})}function Kh(){const t=Br();if(!P||!tt.has(P)){zt();return}if(t.length<=1){gs(!1);return}gs(!0)}function gs(t){const e=document.querySelector("#statusMessageViewport"),n=document.querySelector("#statusMessageTrack");if(!e||!n)return;const r=Math.max(0,n.scrollWidth-e.clientWidth);if(r<=0){t&&$n(()=>{Cr(()=>{const i=Ec();P="",i?Nr(i):En()})},Ti);return}$n(()=>{$c(r,t)},Us)}function $c(t,e){const n=document.querySelector("#statusMessageTrack");if(!n||!P||!tt.has(P))return;const r=Math.max(4,Math.ceil(t/ad));n.style.setProperty("--long-scroll-distance",`${t}px`),n.style.setProperty("--long-scroll-duration",`${r}s`),n.classList.add("long-scroll"),n.addEventListener("animationend",()=>{if(n.classList.remove("long-scroll"),n.style.transform=`translateX(-${t}px) translateY(-50%)`,e){$n(()=>{Cr(()=>{const i=Ec();P="",i?Nr(i):En()})},Ti);return}$n(()=>{Jh()},sd)},{once:!0})}function Jh(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!P||!tt.has(P))return;if(Br().length!==1){zt();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const r=Math.max(0,e.scrollWidth-t.clientWidth);r<=0||$n(()=>{$c(r,!1)},Us)}function Cr(t){const e=document.querySelector("#statusMessageTrack");if(qr(),!e||!gt){typeof t=="function"&&t();return}bt=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${Gs}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",gt=!1,bt=!1,typeof t=="function"&&t()},{once:!0})}function En(){const t=document.querySelector("#statusMessageTrack");qr(),P="",gt=!1,bt=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function $n(t,e){const n=window.setTimeout(()=>{bn=bn.filter(r=>r!==n),t()},e);bn.push(n)}function qr(){for(const t of bn)window.clearTimeout(t);bn=[]}function Rc(){if(!gt||bt||!P)return;const t=P;qr(),Nr(t)}function et(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(d!=null&&d.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!$()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${he()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${he()}`)}}async function Nt(t={}){try{if($()){const e=await Gl();ze=e,!t.silent&&(e==null?void 0:e.message)&&p(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:m});return}ze=await Ul(),Tr("file-watcher")}catch(e){p("file-watcher-error",w(e),{ttlMs:m})}}function hn(t,e=null){const n="[GuildSync File Watcher]";if(e){console.log(`${n} ${t}`,e);return}console.log(`${n} ${t}`)}function Qh(t={}){if(!$()){hn("SavedVariables change ignored because the user is not authenticated.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",n=e.toLowerCase(),r=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=String(t.filePath||"").trim(),o=r?`${r} saved variables (${i})`:i;hn(`SavedVariables change detected: ${i}${s?` (${s})`:""}. Key: ${n}.`,t),p(`saved-vars-file-updated-${e}`,`${o} has been updated.`,{ttlMs:m}),n==="banking"&&(hn(`Processing banking SavedVariables update from ${i}.`),Xh(t)),n==="roster"&&(hn(`Processing roster SavedVariables update from ${i}.`),Zh(t)),n==="applications"&&(hn(`Processing applications SavedVariables update from ${i}.`),$f(t))}async function Xh(t={}){await ph(t),await fc(t)}async function Zh(t={}){await bf(t)}function ep(t){!$()||p("file-watcher-error",w(t),{ttlMs:m})}function tp(){cn("guildsync-savedvars-file-modified",Qh),cn("guildsync-file-watcher-error",ep),cn("guildsync-login-complete",async t=>{v=t||{logged_in:!1,allowed:!1},er(),vn(),await Nt(),p("auth",v.status_message||`Logged in and authorized as ${he()}.`,{ttlMs:m})}),cn("guildsync-login-denied",async t=>{v={logged_in:!1,allowed:!1,status_message:""},er(),await Nt(),p("auth",t||"Access denied.",{ttlMs:m}),vn()}),cn("guildsync-login-failed",async t=>{v={logged_in:!1,allowed:!1,status_message:""},er(),await Nt(),p("auth",t||"Login failed.",{ttlMs:m}),vn()})}function $(){return Boolean((v==null?void 0:v.logged_in)&&(v==null?void 0:v.allowed)&&(v==null?void 0:v.token))}function he(){var t,e;return((t=v.user)==null?void 0:t.display_name)||((e=v.user)==null?void 0:e.username)||"Discord User"}function np(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),n=String(t.discord_user_id||"").trim();if(!e||!n)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=128`}function Dc(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function rp(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function ip(){ln&&(ln.disconnect(),ln=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),n=Math.round(t.getBoundingClientRect().height);ln=new ResizeObserver(r=>{const i=r[0];if(!i)return;const s=Math.round(i.contentRect.width),o=Math.round(i.contentRect.height);s===e&&o===n||(e=s,n=o,Mc(),Rc())}),ln.observe(t)}function Mc(){clearTimeout(Ho),Ho=setTimeout(async()=>{try{await Cs()}catch{}},500)}function w(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function c(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function f(t){return c(t)}tp();dd();Qd();
