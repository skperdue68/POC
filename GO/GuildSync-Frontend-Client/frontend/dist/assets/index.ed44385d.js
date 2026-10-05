(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function yo(t,e,n,r=()=>{}){if(!t||!e)return;const i=a=>{var l;return(l=a.getAttribute(n))!=null?l:"__empty__"},s=new Map(Array.from(t.children).map(a=>[i(a),a])),o=new Set;Array.from(e.children).forEach((a,l)=>{let m=s.get(i(a));if(!m)m=a.cloneNode(!0),r(m);else if(!m.isEqualNode(a))for(Array.from(a.children).forEach((g,y)=>{const b=m.children[y];if(b!=null&&b.isEqualNode(g))return;const k=g.cloneNode(!0);b?b.replaceWith(k):m.append(k),r(k)});m.children.length>a.children.length;)m.lastElementChild.remove();t.children[l]!==m&&t.insertBefore(m,t.children[l]||null),o.add(m)});for(const a of Array.from(t.children))o.has(a)||a.remove()}function ln(t,e){t&&e&&!t.isEqualNode(e)&&(t.innerHTML=e.innerHTML)}function dn(t,e){t&&e&&t.textContent!==e.textContent&&(t.textContent=e.textContent)}const N=t=>String(t!=null?t:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function sc(){return{open:"",toggle(t){this.open=this.open===t?"":t},close(){this.open=""}}}function ai(t,e){var n;return t.type==="boolean"?String(e).toLowerCase()===String(t.defaultValue).toLowerCase():t.type==="number"?String(e).trim()!==""&&Number(e)===Number(t.defaultValue):String(e!=null?e:"")===String((n=t.defaultValue)!=null?n:"")}function ko(t,e){const r=Object.hasOwn(e,t.key)?e[t.key]===null?t.defaultValue:e[t.key]:t.value,i=!ai(t,r);return{value:r,override:i,source:i?"Overridden":"Default"}}function xr(t,e){return t.type==="boolean"?e===!0||String(e).toLowerCase()==="true"?"Enabled":"Disabled":t.type==="select"?{private_thread:"Private thread (public fallback)",channel:"Channel or thread"}[e]||String(e):e==null||e===""?"Not configured":String(e)}function vo(t,{body:e=!1}={}){const n={recipient:"@ExampleMember",account_name:"@ExampleMember",display_name:"@ExampleMember",amount:"10,001",deposit_amount:"10,001",raw_amount:"10001",raw_deposit_amount:"10001",event_id:"123456789",ticket_quantity:"20",tickets:"20",purchased_tickets:"20",bonus_percent:"20",bonus_tickets:"4",total_tickets:"24",bonus_deadline:"October 9, 2026 at 7:00 PM Eastern",bonus_block:`Early Purchase Bonus: 20% for purchases before October 9, 2026 at 7:00 PM ET.
Bonus Tickets: 4
Total Tickets: 24`,note:"",note_block:"",ticket_type:"Bi-Weekly",ticket_type_raw:"biweekly",transaction_type:"biweekly",ticket_gold_cost:"10,001",gold_cost:"10,001",raw_gold_cost:"10001",raw_ticket_gold_cost:"10001",purchase_date:"October 5, 2026",data_source:"Guild bank",event_datetime:"2026-10-05T12:00:00Z",event_timestamp:"1791201600",raffle_datetime_eastern:"October 10, 2026 at 8:00 PM Eastern",raffle_date_time_eastern:"October 10, 2026 at 8:00 PM Eastern",raffle_datetime:"October 10, 2026 at 8:00 PM Eastern",mail_request_id:"example",mail_batch_id:"example"},r=String(t).replace(/{([a-zA-Z0-9_]+)}/g,(i,s)=>{var o;return(o=n[s])!=null?o:i});return e&&!String(t).includes("{bonus_block}")?r+`

`+n.bonus_block:r}function Qo(t,{refresh:e=!1,root:n=document}={}){const r=()=>{for(const o of document.querySelectorAll("[data-report-toggle]")){const a=o.dataset.reportToggle===t.open;o.setAttribute("aria-expanded",String(a));const l=document.getElementById(o.getAttribute("aria-controls"));l&&(l.classList.toggle("is-open",a),l.inert=!a)}};for(const o of n.querySelectorAll("[data-report-toggle]"))o.addEventListener("click",()=>{t.toggle(o.dataset.reportToggle),r()});for(const o of n.querySelectorAll('.reports-panel .report-run-button:not([type="submit"])'))o.addEventListener("click",()=>{t.close(),r()});const i=e?Array.from(document.querySelectorAll(".report-section-content")):[],s=i.map(o=>o.style.transition);for(const o of i)o.style.transition="none";r();for(const o of i)o.offsetHeight;i.forEach((o,a)=>o.style.transition=s[a])}const In=t=>t.type==="boolean"||t.type==="select"&&t.options.length===2;function ac(t,e){return xr(t,e)+(In(t)&&ai(t,e)?" (Default)":"")}function cc(){let t=null,e={},n=!1,r="",i=!1;const s=(l,m)=>{const g=`data-config-value="${N(l.key)}" id="config-${N(l.key)}" `;if(l.type==="boolean"||l.type==="select"){const y=l.type==="boolean"?["true","false"]:l.options;return`<select ${g}>${y.map(b=>`<option value="${N(b)}" ${String(b)===String(m.value)?"selected":""}>${N(ac(l,b))}</option>`).join("")}</select>`}return l.type==="template"?`<textarea ${g} rows="${l.key.includes("BODY")?9:3}" maxlength="${l.maxLength}">${N(m.value)}</textarea>`:`<input ${g} type="${l.type==="number"?"number":"text"}" ${l.type==="number"?`min="${l.min}" max="${l.max}" step="any"`:""} value="${N(m.value)}" placeholder="Not configured">`};return{render:()=>{const l=t?[...new Set(t.settings.map(m=>m.group))]:[];return`<article class="report-option-card admin-configuration-card"><div class="report-option-copy">
   <h3><button type="button" class="report-section-toggle" data-report-toggle="configuration" aria-expanded="false" aria-controls="adminConfigurationContent">Administrator Configuration <span aria-hidden="true">\u25BE</span></button></h3>
   <div id="adminConfigurationContent" class="report-section-content" inert><div class="report-section-inner">
   <p>Edit any setting to override its default. Changes take effect only after Save. Choose the option marked (Default) to restore a two-choice setting, or use Return to default for other fields. Settings apply live; active deliveries finish safely.</p>
   <p role="status" class="configuration-status">${N(r)}</p>
   ${t?`
   ${t.botDefaultsReported?"":"<p>Bot defaults have not been reported yet. Connect the updated bot before editing its settings.</p>"}
   <form id="adminConfigurationForm">
    ${l.map(m=>`<fieldset class="configuration-group" ${i?"disabled":""}><legend>${N(m)}</legend>
     ${t.settings.filter(g=>g.group===m).map(g=>{const y=ko(g,e);return`<div class="configuration-setting">
      <label for="config-${N(g.key)}">${N(g.label)}</label>
      <small>${N(g.key)} \xB7 <span data-config-source="${N(g.key)}">${N(y.source)}</span></small>
      <div class="configuration-values${In(g)?" configuration-two-options":""}">
       <div class="configuration-selected-value"><span>Current selection</span>${s(g,y)}</div>
       ${In(g)?"":`<div class="configuration-default-value"><span>Default value</span><output>${N(xr(g,g.defaultValue))}</output></div>`}
      </div>
      ${In(g)?"":`<button type="button" class="configuration-default" data-config-default="${N(g.key)}" aria-label="Return ${N(g.label)} to default: ${N(xr(g,g.defaultValue))}">Return to default</button>`}
      ${g.placeholders?`<small>Placeholders: ${g.placeholders.map(b=>N("{"+b+"}")).join(", ")}</small>`:""}
      ${g.group==="Receipt messages"?`<label>Example preview (20% bonus)<pre data-config-preview="${N(g.key)}">${N(vo(y.value,{body:g.key.endsWith("BODY_TEMPLATE")}))}</pre></label>`:""}
     </div>`}).join("")}
    </fieldset>`).join("")}
    <div class="configuration-actions"><button type="submit" ${i?"disabled":""}>${i?"Saving...":"Save Configuration"}</button><button type="button" id="reloadAdminConfiguration" ${i?"disabled":""}>Discard edits and reload</button></div>
   </form>`:`<p>${n?"Loading configuration...":"Configuration is not loaded."}</p><button type="button" id="reloadAdminConfiguration">Load configuration</button>`}
   </div></div></div></article>`},wire:({request:l,rerender:m})=>{var y,b;const g=async()=>{if(!n){n=!0,r="";try{const k=await l("guildsync:request-admin-configuration",{});if(!(k!=null&&k.ok))throw Error((k==null?void 0:k.message)||"Could not load configuration.");t=k.configuration,e={}}catch(k){r=k.message}finally{n=!1,m()}}};!t&&!n&&!r&&g(),(y=document.getElementById("reloadAdminConfiguration"))==null||y.addEventListener("click",()=>void g());for(const k of document.querySelectorAll("[data-config-value]"))k.addEventListener("input",()=>{const $=k.dataset.configValue,q=t.settings.find(ne=>ne.key===$);e[$]=ai(q,k.value)?null:k.value;const M=document.querySelector(`[data-config-source="${$}"]`);M&&(M.textContent=ko(q,e).source);const K=document.querySelector(`[data-config-preview="${$}"]`);K&&(K.textContent=vo(k.value,{body:$.endsWith("BODY_TEMPLATE")}))});for(const k of document.querySelectorAll("[data-config-default]"))k.addEventListener("click",()=>{e[k.dataset.configDefault]=null,m()});(b=document.getElementById("adminConfigurationForm"))==null||b.addEventListener("submit",async k=>{var q;if(k.preventDefault(),i)return;if(!Object.keys(e).length){r="No changes to save.",m();return}i=!0,r="";const $={...e};m(),(q=document.getElementById("adminConfigurationForm"))==null||q.querySelectorAll("input,select,textarea,button").forEach(M=>M.disabled=!0);try{const M=await l("guildsync:save-admin-configuration",{revision:t.revision,changes:$});if(!(M!=null&&M.ok))throw Error((M==null?void 0:M.message)||"Could not save configuration.");t=M.configuration,e={},r="Configuration saved. Backend settings are active; the connected bot applies its settings after active deliveries finish. An offline bot applies them when it reconnects."}catch(M){r=M.message}finally{i=!1,m()}})},clear(){t=null,e={},r=""}}}const lc="/assets/splash.ea386b6a.png",dc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",uc="/assets/GuildSync-Graphic.9169020d.png",we=Object.create(null);we.open="0";we.close="1";we.ping="2";we.pong="3";we.message="4";we.upgrade="5";we.noop="6";const Pn=Object.create(null);Object.keys(we).forEach(t=>{Pn[we[t]]=t});const Or={type:"error",data:"parser error"},Xo=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Zo=typeof ArrayBuffer=="function",es=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,ci=({type:t,data:e},n,r)=>Xo&&e instanceof Blob?n?r(e):So(e,r):Zo&&(e instanceof ArrayBuffer||es(e))?n?r(e):So(new Blob([e]),r):r(we[t]+(e||"")),So=(t,e)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];e("b"+(r||""))},n.readAsDataURL(t)};function wo(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let Ar;function fc(t,e){if(Xo&&t.data instanceof Blob)return t.data.arrayBuffer().then(wo).then(e);if(Zo&&(t.data instanceof ArrayBuffer||es(t.data)))return e(wo(t.data));ci(t,!1,n=>{Ar||(Ar=new TextEncoder),e(Ar.encode(n))})}const _o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",un=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<_o.length;t++)un[_o.charCodeAt(t)]=t;const hc=t=>{let e=t.length*.75,n=t.length,r,i=0,s,o,a,l;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const m=new ArrayBuffer(e),g=new Uint8Array(m);for(r=0;r<n;r+=4)s=un[t.charCodeAt(r)],o=un[t.charCodeAt(r+1)],a=un[t.charCodeAt(r+2)],l=un[t.charCodeAt(r+3)],g[i++]=s<<2|o>>4,g[i++]=(o&15)<<4|a>>2,g[i++]=(a&3)<<6|l&63;return m},pc=typeof ArrayBuffer=="function",li=(t,e)=>{if(typeof t!="string")return{type:"message",data:ts(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:mc(t.substring(1),e)}:Pn[n]?t.length>1?{type:Pn[n],data:t.substring(1)}:{type:Pn[n]}:Or},mc=(t,e)=>{if(pc){const n=hc(t);return ts(n,e)}else return{base64:!0,data:t}},ts=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},ns=String.fromCharCode(30),gc=(t,e)=>{const n=t.length,r=new Array(n);let i=0;t.forEach((s,o)=>{ci(s,!1,a=>{r[o]=a,++i===n&&e(r.join(ns))})})},bc=(t,e)=>{const n=t.split(ns),r=[];for(let i=0;i<n.length;i++){const s=li(n[i],e);if(r.push(s),s.type==="error")break}return r};function yc(){return new TransformStream({transform(t,e){fc(t,n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,r)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(r))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(n)})}})}let Lr;function Cn(t){return t.reduce((e,n)=>e+n.length,0)}function qn(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let r=0;for(let i=0;i<e;i++)n[i]=t[0][r++],r===t[0].length&&(t.shift(),r=0);return t.length&&r<t[0].length&&(t[0]=t[0].slice(r)),n}function kc(t,e){Lr||(Lr=new TextDecoder);const n=[];let r=0,i=-1,s=!1;return new TransformStream({transform(o,a){for(n.push(o);;){if(r===0){if(Cn(n)<1)break;const l=qn(n,1);s=(l[0]&128)===128,i=l[0]&127,i<126?r=3:i===126?r=1:r=2}else if(r===1){if(Cn(n)<2)break;const l=qn(n,2);i=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),r=3}else if(r===2){if(Cn(n)<8)break;const l=qn(n,8),m=new DataView(l.buffer,l.byteOffset,l.length),g=m.getUint32(0);if(g>Math.pow(2,53-32)-1){a.enqueue(Or);break}i=g*Math.pow(2,32)+m.getUint32(4),r=3}else{if(Cn(n)<i)break;const l=qn(n,i);a.enqueue(li(s?l:Lr.decode(l),e)),r=0}if(i===0||i>t){a.enqueue(Or);break}}}})}const rs=4;function C(t){if(t)return vc(t)}function vc(t){for(var e in C.prototype)t[e]=C.prototype[e];return t}C.prototype.on=C.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};C.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};C.prototype.off=C.prototype.removeListener=C.prototype.removeAllListeners=C.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===e||r.fn===e){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+t],this};C.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,e)}return this};C.prototype.emitReserved=C.prototype.emit;C.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};C.prototype.hasListeners=function(t){return!!this.listeners(t).length};const sr=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0))(),Q=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),Sc="arraybuffer";function is(t,...e){return e.reduce((n,r)=>(t.hasOwnProperty(r)&&(n[r]=t[r]),n),{})}const wc=Q.setTimeout,_c=Q.clearTimeout;function ar(t,e){e.useNativeTimers?(t.setTimeoutFn=wc.bind(Q),t.clearTimeoutFn=_c.bind(Q)):(t.setTimeoutFn=Q.setTimeout.bind(Q),t.clearTimeoutFn=Q.clearTimeout.bind(Q))}const Ac=1.33;function Lc(t){return typeof t=="string"?Ec(t):Math.ceil((t.byteLength||t.size)*Ac)}function Ec(t){let e=0,n=0;for(let r=0,i=t.length;r<i;r++)e=t.charCodeAt(r),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(r++,n+=4);return n}function os(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function $c(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function Rc(t){let e={},n=t.split("&");for(let r=0,i=n.length;r<i;r++){let s=n[r].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class Dc extends Error{constructor(e,n,r){super(e),this.description=n,this.context=r,this.type="TransportError"}}class di extends C{constructor(e){super(),this.writable=!1,ar(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,r){return super.emitReserved("error",new Dc(e,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=li(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=$c(e);return n.length?"?"+n:""}}class Mc extends di{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};bc(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,gc(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=os()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let ss=!1;try{ss=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Tc=ss;function Bc(){}class Nc extends Mc{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let r=location.port;r||(r=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,n){const r=this.request({method:"POST",data:e});r.on("success",n),r.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=e}}class be extends C{constructor(e,n,r){super(),this.createRequest=e,ar(this,r),this._opts=r,this._method=r.method||"GET",this._uri=n,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const n=is(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(n);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var i;r.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=be.requestsCount++,be.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Bc,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete be.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}be.requestsCount=0;be.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Ao);else if(typeof addEventListener=="function"){const t="onpagehide"in Q?"pagehide":"unload";addEventListener(t,Ao,!1)}}function Ao(){for(let t in be.requests)be.requests.hasOwnProperty(t)&&be.requests[t].abort()}const Cc=function(){const t=as({xdomain:!1});return t&&t.responseType!==null}();class qc extends Nc{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=Cc&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new be(as,this.uri(),e)}}function as(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Tc))return new XMLHttpRequest}catch{}if(!e)try{return new Q[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const cs=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class xc extends di{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,r=cs?{}:is(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;ci(r,this.supportsBinary,s=>{try{this.doWrite(r,s)}catch{}i&&sr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=os()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const Er=Q.WebSocket||Q.MozWebSocket;class Oc extends xc{createSocket(e,n,r){return cs?new Er(e,n,r):n?new Er(e,n):new Er(e)}doWrite(e,n){this.ws.send(n)}}class Ic extends di{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=kc(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(n).getReader(),i=yc();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const s=()=>{r.read().then(({done:a,value:l})=>{a||(this.onPacket(l),s())}).catch(a=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;this._writer.write(r).then(()=>{i&&sr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Pc={websocket:Oc,webtransport:Ic,polling:qc},Fc=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Gc=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Ir(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),r=t.indexOf("]");n!=-1&&r!=-1&&(t=t.substring(0,n)+t.substring(n,r).replace(/:/g,";")+t.substring(r,t.length));let i=Fc.exec(t||""),s={},o=14;for(;o--;)s[Gc[o]]=i[o]||"";return n!=-1&&r!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=Uc(s,s.path),s.queryKey=Hc(s,s.query),s}function Uc(t,e){const n=/\/{2,9}/g,r=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function Hc(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,s){i&&(n[i]=s)}),n}const Pr=typeof addEventListener=="function"&&typeof removeEventListener=="function",Fn=[];Pr&&addEventListener("offline",()=>{Fn.forEach(t=>t())},!1);class Ue extends C{constructor(e,n){if(super(),this.binaryType=Sc,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const r=Ir(e);n.hostname=r.host,n.secure=r.protocol==="https"||r.protocol==="wss",n.port=r.port,r.query&&(n.query=r.query)}else n.host&&(n.hostname=Ir(n.host).host);ar(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(r=>{const i=r.prototype.name;this.transports.push(i),this._transportsByName[i]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Rc(this.opts.query)),Pr&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Fn.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=rs,n.transport=e,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Ue.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",Ue.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(n+=Lc(i)),r>0&&n>this._maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,sr(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,r){return this._sendPacket("message",e,n,r),this}send(e,n,r){return this._sendPacket("message",e,n,r),this}_sendPacket(e,n,r,i){if(typeof n=="function"&&(i=n,n=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const s={type:e,data:n,options:r};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(Ue.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Pr&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=Fn.indexOf(this._offlineEventListener);r!==-1&&Fn.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}}Ue.protocol=rs;class Vc extends Ue{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let n=this.createTransport(e),r=!1;Ue.priorWebsocketSuccess=!1;const i=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",y=>{if(!r)if(y.type==="pong"&&y.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;Ue.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(g(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const b=new Error("probe error");b.transport=n.name,this.emitReserved("upgradeError",b)}}))};function s(){r||(r=!0,g(),n.close(),n=null)}const o=y=>{const b=new Error("probe error: "+y);b.transport=n.name,s(),this.emitReserved("upgradeError",b)};function a(){o("transport closed")}function l(){o("socket closed")}function m(y){n&&y.name!==n.name&&s()}const g=()=>{n.removeListener("open",i),n.removeListener("error",o),n.removeListener("close",a),this.off("close",l),this.off("upgrading",m)};n.once("open",i),n.once("error",o),n.once("close",a),this.once("close",l),this.once("upgrading",m),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const n=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&n.push(e[r]);return n}}class Wc extends Vc{constructor(e,n={}){const r=typeof e=="object"?e:n;(!r.transports||r.transports&&typeof r.transports[0]=="string")&&(r.transports=(r.transports||["polling","websocket","webtransport"]).map(i=>Pc[i]).filter(i=>!!i)),super(e,r)}}function jc(t,e="",n){let r=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),r=Ir(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const s=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+s+":"+r.port+e,r.href=r.protocol+"://"+s+(n&&n.port===r.port?"":":"+r.port),r}const zc=typeof ArrayBuffer=="function",Yc=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,ls=Object.prototype.toString,Kc=typeof Blob=="function"||typeof Blob<"u"&&ls.call(Blob)==="[object BlobConstructor]",Jc=typeof File=="function"||typeof File<"u"&&ls.call(File)==="[object FileConstructor]";function ui(t){return zc&&(t instanceof ArrayBuffer||Yc(t))||Kc&&t instanceof Blob||Jc&&t instanceof File}function Gn(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,r=t.length;n<r;n++)if(Gn(t[n]))return!0;return!1}if(ui(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return Gn(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&Gn(t[n]))return!0;return!1}function Qc(t){const e=[],n=t.data,r=t;return r.data=Fr(n,e),r.attachments=e.length,{packet:r,buffers:e}}function Fr(t,e){if(!t)return t;if(ui(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let r=0;r<t.length;r++)n[r]=Fr(t[r],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=Fr(t[r],e));return n}return t}function Xc(t,e){return t.data=Gr(t.data,e),delete t.attachments,t}function Gr(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=Gr(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=Gr(t[n],e));return t}const ds=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Zc=5;var w;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(w||(w={}));class el{constructor(e){this.replacer=e}encode(e){return(e.type===w.EVENT||e.type===w.ACK)&&Gn(e)?this.encodeAsBinary({type:e.type===w.EVENT?w.BINARY_EVENT:w.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===w.BINARY_EVENT||e.type===w.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=Qc(e),r=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(r),i}}class fi extends C{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const r=n.type===w.BINARY_EVENT;r||n.type===w.BINARY_ACK?(n.type=r?w.EVENT:w.ACK,this.reconstructor=new tl(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(ui(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const r={type:Number(e.charAt(0))};if(w[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===w.BINARY_EVENT||r.type===w.BINARY_ACK){const s=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(s,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!us(a)||a<0)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=a}if(e.charAt(n+1)==="/"){const s=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););r.nsp=e.substring(s,n)}else r.nsp="/";const i=e.charAt(n+1);if(i!==""&&Number(i)==i){const s=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}r.id=Number(e.substring(s,n+1))}if(e.charAt(++n)){const s=this.tryParse(e.substr(n));if(fi.isPayloadValid(r.type,s))r.data=s;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case w.CONNECT:return zn(n);case w.DISCONNECT:return n===void 0;case w.CONNECT_ERROR:return typeof n=="string"||zn(n);case w.EVENT:case w.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&ds.indexOf(n[0])===-1);case w.ACK:case w.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class tl{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=Xc(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function nl(t){return typeof t=="string"}const us=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function rl(t){return t===void 0||us(t)}function zn(t){return Object.prototype.toString.call(t)==="[object Object]"}function il(t,e){switch(t){case w.CONNECT:return e===void 0||zn(e);case w.DISCONNECT:return e===void 0;case w.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&ds.indexOf(e[0])===-1);case w.ACK:return Array.isArray(e);case w.CONNECT_ERROR:return typeof e=="string"||zn(e);default:return!1}}function ol(t){return nl(t.nsp)&&rl(t.id)&&il(t.type,t.data)}const sl=Object.freeze(Object.defineProperty({__proto__:null,protocol:Zc,get PacketType(){return w},Encoder:el,Decoder:fi,isPacketValid:ol},Symbol.toStringTag,{value:"Module"}));function ie(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const al=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class fs extends C{constructor(e,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[ie(e,"open",this.onopen.bind(this)),ie(e,"packet",this.onpacket.bind(this)),ie(e,"error",this.onerror.bind(this)),ie(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var r,i,s;if(al.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const o={type:w.EVENT,data:n};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const g=this.ids++,y=n.pop();this._registerAckCallback(g,y),o.id=g}const a=(i=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||i===void 0?void 0:i.writable,l=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!a||(l?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,n){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[e]=n;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);n.call(this,new Error("operation has timed out"))},i),o=(...a)=>{this.io.clearTimeoutFn(s),n.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...n){return new Promise((r,i)=>{const s=(o,a)=>o?i(o):r(a);s.withError=!0,n.push(s),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>(this._queue[0],i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(i)):(this._queue.shift(),n&&n(null,...s)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:w.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case w.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case w.EVENT:case w.BINARY_EVENT:this.onevent(e);break;case w.ACK:case w.BINARY_ACK:this.onack(e);break;case w.DISCONNECT:this.ondisconnect();break;case w.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let r=!1;return function(...i){r||(r=!0,n.packet({type:w.ACK,id:e,data:i}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:w.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,e.data)}}}function Ht(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}Ht.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-n:t+n}return Math.min(t,this.max)|0};Ht.prototype.reset=function(){this.attempts=0};Ht.prototype.setMin=function(t){this.ms=t};Ht.prototype.setMax=function(t){this.max=t};Ht.prototype.setJitter=function(t){this.jitter=t};class Ur extends C{constructor(e,n){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,ar(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new Ht({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const i=n.parser||sl;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Wc(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=ie(n,"open",function(){r.onopen(),e&&e()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=ie(n,"error",s);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),n.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(ie(e,"ping",this.onping.bind(this)),ie(e,"data",this.ondata.bind(this)),ie(e,"error",this.onerror.bind(this)),ie(e,"close",this.onclose.bind(this)),ie(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){sr(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new fs(this,e,n),this.nsps[e]=r),r}_destroy(e){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let r=0;r<n.length;r++)this.engine.write(n[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const nn={};function Un(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=jc(t,e.path||"/socket.io"),r=n.source,i=n.id,s=n.path,o=nn[i]&&s in nn[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let l;return a?l=new Ur(r,e):(nn[i]||(nn[i]=new Ur(r,e)),l=nn[i]),n.query&&!e.query&&(e.query=n.queryKey),l.socket(n.path,e)}Object.assign(Un,{Manager:Ur,Socket:fs,io:Un,connect:Un});function cl(t){return window.go.main.App.CleanupDepositMailAckFromGuildSyncBanking(t)}function ll(){return window.go.main.App.CloseWindow()}function dl(t){return window.go.main.App.CollectDepositMailAckFromGuildSyncBanking(t)}function ul(t){return window.go.main.App.CollectGuildSyncApplicationsData(t)}function fl(t){return window.go.main.App.CollectGuildSyncBankingData(t)}function hl(t){return window.go.main.App.CollectGuildSyncRosterData(t)}function pl(t,e){return window.go.main.App.CommitGuildSyncApplicationsData(t,e)}function ml(t,e){return window.go.main.App.CommitGuildSyncBankingData(t,e)}function gl(t,e){return window.go.main.App.CommitGuildSyncRosterData(t,e)}function bl(){return window.go.main.App.FlushPendingDepositMailAckCleanup()}function yl(){return window.go.main.App.GetESORunningStatus()}function kl(){return window.go.main.App.GetGuildSyncFileWatcherStatus()}function vl(){return window.go.main.App.GetGuildSyncSession()}function Sl(){return window.go.main.App.LogoutGuildSync()}function wl(){return window.go.main.App.MaximizeWindow()}function _l(){return window.go.main.App.MinimizeWindow()}function hs(){return window.go.main.App.SaveWindowState()}function Al(t,e){return window.go.main.App.SetGuildSyncSavedVarsWatchFileEnabled(t,e)}function Ll(){return window.go.main.App.ShowMainWindow()}function El(){return window.go.main.App.StartDiscordLogin()}function $l(){return window.go.main.App.StartGuildSyncFileWatcher()}function Rl(){return window.go.main.App.StopGuildSyncFileWatcher()}function Dl(t){return window.go.main.App.WriteDepositMailToGuildSyncBanking(t)}function Ml(t,e,n){return window.runtime.EventsOnMultiple(t,e,n)}function rn(t,e){return Ml(t,e,-1)}function Tl(t){window.runtime.BrowserOpenURL(t)}const cr="1.2.7",Bl=30*60*1e3,ps="guildsync-pending-banking-uploads",ms="guildsync-pending-deposit-mail",Nl=5e3,Cl=30*1e3,gs="guildsync-pending-roster-uploads",bs="guildsync-pending-applications-uploads",p=60*1e3,ys=7e3,ks=1400,vs=2400,ql=4e3,xl=38,Ss=document.querySelector("#app");let Lo=null,on=null,Eo=!1,Ln=!1,Hn=null,$r=!1,Rr=!1,Dr=!1,He=null,W={running:!1,message:""},kt=null,vt=null,Hr=!1,St=!1,wt=null,Mr=!1,Qe=new Map,it=new Map,P="",pt=!1,mt=!1,fn=[],v={logged_in:!1,allowed:!1,status_message:""},qe={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},u=null,z=[],lr=[],dr=null,gn=!1,Yn=!1,Kn="",_t=new Set,At=new Set,bn="username",st="asc",Vr=null,Wr=null,j=[],yn=null,Xe=!1,$o=!1,Jn="",jr=null,zr=null,at=new Set,Lt=new Set,$e="",V="",x=-1,Tt=!1,kn="",X=[],Ze="",Ve=[],We=!1,De="",Tr=null,oe=-1,Vt=!1,vn="",je=[],Qn=!1,ct=!1,ze="",Bt="",Nt=!1,xe="",Z=[],Ct="",gt="",Ye=[],Ke=!1,Me="",Ro=null,rt=0;const Ol=650;let se=-1,Wt=!1,jt=[],Oe=!1,lt="",zt=!1,Sn=[],Ie=!1,dt="",nt=!1,hi=[],Pe=!1,ut="",Yt="",Fe="",Et="",Ge="",E=[],I=!1,H="",Ce=!1,ur="",ot="",En="",$n="",Re=-1,te=!1,A=null,ft=[],qt=!1,Ne="",Rn="",me=-1,Kt=!1,pi=null,hn=null;const mi=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let Y=[],F=null,ge=null,ce=!1;const ws=sc(),_s=cc();let xt=[],Te="",Do=!1,T="biweekly",As=null,et=!1,ht=!1,fe="biweekly",Jt=!1,Ot=!1,Le="",Ee=null,O={targetType:"other",note:"",tickets:""},Qt=!1,bt="",U=[],de=[],ye="",ke=!1,ve="",$t=null,ae=-1,Be=!1,Xn=!1,J="",D={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},Xt="",G=-1,le=!1,Yr={biweekly:0,monthly:0};const Il=1780786800,tt=14*24*60*60,Zn=60*60,er=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let R=er[0].id;function Pl(){Ss.innerHTML=`
    <main class="splash-screen">
      <img src="${lc}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await Ll(),await Fl(),Ls(),mn(),await Mt()},5e3)}async function Fl(){try{v=await vl()}catch(t){v={logged_in:!1,allowed:!1,status_message:""},h("session-error",S(t),{ttlMs:p})}}function Ls(){Ss.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${dc}" alt="" class="title-icon" />
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
            <img src="${uc}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${c(cr)}</div>
            </div>
          </div>
          <div class="compact-header-actions">
            <div id="desktopUpdateArea" class="desktop-update-area"></div>
            <div id="discordArea" class="discord-area"></div>
          </div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${Es()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content web-upload-banner-dismissed" aria-live="polite">
          ${Rs()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await _l()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await hs(),await ll()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await wl()}),jn(),si(),Ds(),za(),ba(),Ta(),qs(),ga(),sa(),aa(),ca(),la(),Ks(),ya(),zl(),Je(),Ut(),Eo||(window.addEventListener("resize",()=>{oc(),rc()}),Ah(),Eo=!0)}function Es(){return er.map(t=>{const e=t.id===R,n=Gl(t.id,e),r=n?$s():0,i=n?`Deposit mail needs attention: ${r} item${r===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${n?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${f(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${f(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${Ul(t.icon)}</span>
          <span class="guildsync-tab-label">${c(t.label)}</span>
          ${n?`<span class="guildsync-tab-mail-badge" aria-label="${f(i)}">${r>99?"99+":c(String(r))}</span>`:""}
        </button>
      `}).join("")}function $s(){return L()?gr()+Tn()+Ra():0}function Gl(t,e){return t!=="more"||e?!1:$s()>0}function Ul(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function Rs(){const t=er.find(n=>n.id===R)||er[0];let e="";return t.id==="discord-members"?e=Ms():t.id==="eso-members"?e=Kl():t.id==="more"?e=$a():t.id==="settings"?e=kd():e=`
      <div class="guildsync-tab-panel" data-active-tab="${f(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${c(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${Be?_u():""}
    ${Jt?sf():""}
    ${Qt?Yu():""}
    ${te?pu():""}
    ${Wt?Sd():""}
    ${zt?$d():""}
    ${nt?Td():""}
    ${Ce?Hd():""}
    ${Kt?jl():""}
  `}function Hl(){return Kt||Tt||Nt||Be||Jt||Qt||te||Vt||Wt||zt||nt||Ce||ht}function Vl(){return Kt?!1:Ce?(ei(),!0):nt?(Zr(),!0):zt?(Xr(),!0):Wt?(Qr(),!0):te?(Pt(),!0):Vt?(ri(),!0):Jt?(rr(),!0):Qt?(df(),d(),!0):Be?(Be=!1,d(),!0):Tt?(Tt=!1,d(),!0):Nt?(Nt=!1,d(),!0):ht?(ht=!1,d(),!0):!1}function Wl(t){t.key==="Escape"&&Vl()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",Wl,!0),window.guildSyncGlobalModalEscapeAttached=!0);function gi(t={}){return new Promise(e=>{hn&&hn(!1),Kt=!0,pi={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},hn=e,d()})}function tr(t=!1){const e=hn;hn=null,Kt=!1,pi=null,e&&e(t===!0),d()}function jl(){const t=pi||{};return`
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
  `}function Mo(t){var r,i,s,o;const e=(i=(r=t.target).closest)==null?void 0:i.call(r,"#cancelGuildSyncConfirmButton"),n=(o=(s=t.target).closest)==null?void 0:o.call(s,"#acceptGuildSyncConfirmButton");if(!(!e&&!n)){if(t.preventDefault(),t.stopPropagation(),e){tr(!1);return}n&&tr(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",Mo,!0),document.addEventListener("pointerup",Mo,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function zl(){if(!Kt)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=r=>{r.preventDefault(),r.stopPropagation(),tr(!1)}),e&&(e.onclick=r=>{r.preventDefault(),r.stopPropagation(),tr(!0)});const n=document.querySelector(".guildsync-confirm-overlay");n&&(n.onclick=r=>{r.target===n&&(r.preventDefault(),r.stopPropagation())})}function Ds(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(Hl())return;const e=t.dataset.tabId;!e||e===R||(R=e,d())})})}function Yl(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function bi(t){const e={x:window.scrollX,y:window.scrollY},n=[];for(let o=t;o;o=o.parentElement)n.push({element:o,top:o.scrollTop,left:o.scrollLeft});const r=t?Array.from(t.querySelectorAll("*")):[],i=(o,a)=>o.id?o.id===a.id:o.tagName===a.tagName&&o.className===a.className,s=r.filter(o=>o.scrollTop||o.scrollLeft).map(o=>({identity:{id:o.id,tagName:o.tagName,className:o.className},occurrence:r.filter(a=>i(o,a)).indexOf(o),top:o.scrollTop,left:o.scrollLeft}));return()=>{const o=t?Array.from(t.querySelectorAll("*")):[];for(const{identity:a,occurrence:l,top:m,left:g}of s){const y=o.filter(b=>i(a,b))[l];y&&(y.scrollTop=m,y.scrollLeft=g)}for(const{element:a,top:l,left:m}of n)a.scrollTop=l,a.scrollLeft=m;window.scrollTo({left:e.x,top:e.y,behavior:"instant"})}}function d(t={}){Ce&&Yl();const e=document.querySelector(".guildsync-tabs"),n=document.querySelector("#guildSyncTabContent"),r=bi(n);e&&(e.innerHTML=Es()),n&&(n.innerHTML=Rs()),Ds(),za(),ba(),Ta(),qs(),ga(),sa(),aa(),ca(),la(),Ks(),ya(),r(),t.restoreDiscordSearchFocus&&Kf(),t.restoreRosterSearchFocus&&Jf(),R==="discord-members"&&(u==null?void 0:u.connected)&&z.length===0&&!gn&&Ci({silent:!0}),R==="eso-members"&&(u==null?void 0:u.connected)&&j.length===0&&!Xe&&!$o&&($o=!0,Mn({silent:!0})),(R==="more"&&Y.length===0||R==="settings"&&!F&&!Do)&&(u==null?void 0:u.connected)&&!et&&(Do=!0,Ae({silent:!0})),(R==="discord-members"||R==="eso-members"||R==="settings")&&(u==null?void 0:u.connected)&&E.length===0&&!I&&fr({silent:!0})}function Ms(){const t=jf(),e=Qf(),n=Array.from(_t),r=Array.from(At);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${c(Ka(dr))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${gn||Yn?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Yn?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${f(Kn)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!_t.has(i)).map(i=>`<option value="${f(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All roles</span>':n.map(i=>th(i)).join("")}
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
              ${mi.filter(i=>!At.has(i.id)).map(i=>`<option value="${f(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>Ts("discord",i)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${xn("username","Username")}
                ${xn("global_name","Global Name")}
                ${xn("server_nickname","Server Nickname")}
                ${xn("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>Xf(i)).join(""):Zf()}
            </tbody>
          </table>
        </div>
      </div>
      ${Nt?fd():""}
    </div>
  `}function Kl(){const t=od(),e=cd(),n=Array.from(at),r=Array.from(Lt);return`
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
          <span class="discord-last-refresh">Last Refresh: ${c(va(yn))}</span>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${Xe?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Xe?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${f(Jn)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!at.has(i)).map(i=>`<option value="${f(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All ranks</span>':n.map(i=>ld(i)).join("")}
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
              ${mi.filter(i=>!Lt.has(i.id)).map(i=>`<option value="${f(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>Ts("roster",i)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${sn("account_name","Account Name")}
                ${sn("rank","Rank")}
                ${sn("joined","Joined")}
                ${sn("notes","Notes","roster-notes-header")}
                ${sn("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map((i,s)=>Jl(i,s)).join(""):nd()}
            </tbody>
          </table>
        </div>
      </div>
      ${Tt?gd():""}
      ${Vt?Xl():""}
    </div>
  `}function Jl(t,e=-1){const n=rd(t.rank||""),r=n?` style="color: ${n};"`:"";return`
    <tr class="eso-roster-row${e===x?" roster-search-active-row":""}"${r} data-roster-row-index="${f(String(e))}" data-eso-account-name="${f(t.account_name||"")}">
      <td>${c(t.account_name||"")}</td>
      <td>${yi(t.rank||"")}</td>
      <td>${c(mr(t.joined))}</td>
      <td class="roster-notes-cell">${Ql(t)}</td>
      <td class="member-link-action-cell">${ta({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function Ql(t){const e=String((t==null?void 0:t.account_name)||"").trim(),n=Number((t==null?void 0:t.note_count)||0),r=n>0,i=r?`${n} roster note${n===1?"":"s"} for ${e}`:`No roster notes for ${e}`;return`
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
  `}function Xl(){const t=vn||"",e=Boolean((v==null?void 0:v.logged_in)&&(v==null?void 0:v.allowed));return`
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
          ${ze?`<div class="discord-data-error">${c(ze)}</div>`:""}
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
                ${Zl()}
              </tbody>
            </table>
          </div>
          ${e?ed():'<div class="roster-history-muted">Log in to add a new note.</div>'}
        </div>
      </div>
    </div>
  `}function Zl(){return Qn?'<tr><td class="bank-empty-row" colspan="3">Loading notes...</td></tr>':!Array.isArray(je)||je.length===0?'<tr><td class="bank-empty-row" colspan="3">No notes recorded for this member.</td></tr>':je.map(t=>`
      <tr>
        <td class="roster-notes-when-cell">${c(td(t.timestamp))}</td>
        <td class="roster-notes-officer-cell">${c(t.officer||"")}</td>
        <td class="roster-notes-note-cell">${c(t.note||"")}</td>
      </tr>
    `).join("")}function ed(){return`
    <div class="roster-notes-form">
      <label for="rosterNotesNewNote">Add Note</label>
      <textarea
        id="rosterNotesNewNote"
        class="roster-notes-textarea"
        rows="4"
        placeholder="Enter a new roster note..."
        ${ct?"disabled":""}
      >${c(Bt)}</textarea>
      <button id="saveRosterNoteButton" class="refresh-discord-button" type="button" ${ct?"disabled":""}>
        ${ct?"Saving...":"Save Note"}
      </button>
    </div>
  `}function td(t){const e=Number(t||0);return!Number.isFinite(e)||e<=0?"":new Date(e*1e3).toLocaleString()}function nd(){return`
    <tr>
      <td class="bank-empty-row" colspan="5">${c(Xe?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function rd(t){String(t||"").trim();const e=nh(t);return kr(e==null?void 0:e.role_color)}function yi(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${c(e)}</span>`}function id(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":yi(e)}function od(){const t=Jn.trim().toLowerCase(),e=j.filter(n=>{const r=String(n.rank||"").trim();if(at.size>0&&!at.has(r)||!Cs(Lt,Kr(n)))return!1;if(!t)return!0;const i=mr(n.joined),s=Li(n.joined),o=Kr(n),a=Ns(n.account_name||"");return[n.account_name,r,i,s,n.joined,o,a].map(m=>String(m||"").toLowerCase()).join(" ").includes(t)});return sd(e)}function sd(t){if(!$e||!V)return t;const e=V==="desc"?-1:1;return[...t].sort((n,r)=>{const i=To(n,$e),s=To(r,$e),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:String(n.account_name||"").localeCompare(String(r.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function To(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const n=Number(t.joined||0);return Number.isFinite(n)&&n>0?String(n).padStart(16,"0"):""}if(e==="notes")return String(Number(t.note_count||0)).padStart(8,"0");if(e==="linked"){const n=Kr(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[n]||"9"} ${n} ${Ns(t.account_name||"")}`}return String(t.account_name||"")}function ad(t){const n=new Set(["account_name","rank","joined","notes","linked"]).has(t)?t:"account_name";$e!==n?($e=n,V="asc"):V==="asc"?V="desc":V==="desc"?($e="",V=""):($e=n,V="asc"),x=-1,d()}function sn(t,e,n=""){const r=$e===t&&Boolean(V),i=r?V==="asc"?"ascending":"descending":"none",s=r?V==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${f(n)}" aria-sort="${f(i)}">
      <button
        class="discord-sort-header roster-sort-header${r?" active":""}"
        type="button"
        data-roster-sort-column="${f(t)}"
        title="Sort ${f(e)}${r&&V==="asc"?" descending":r&&V==="desc"?" not sorted":" ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function cd(){return Array.from(new Set(j.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function ld(t){const e=Oi(t),n=kr(e==null?void 0:e.role_color),r=Pi(n),i=Ii(n,r);return`
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
  `}function dd(t){const e=mi.find(n=>n.id===t);return e?e.label:t}function Ts(t,e){const n=t==="roster"?"roster":"discord",r=dd(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${n}-link-status-filter="${f(e)}"
      title="Remove ${f(r)} link filter"
    >
      <span>${c(r)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Bs(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked"&&String(n.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function ud(t){return Bs(pr(t==null?void 0:t.discord_id))}function Kr(t){return Bs(hr(t==null?void 0:t.account_name))}function Ns(t){const e=hr(t),n=ea({mode:"eso-to-discord",esoAccountName:t}),r=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean),i=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="candidate").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean);return[n.label,n.title,r.join(" "),i.join(" ")].filter(Boolean).join(" ")}function Cs(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function fd(){return`
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
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${f(xe)}" />
        </div>

        ${Me?`<div class="discord-data-error">${c(Me)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${hd()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${gt?`: ${c(gt)}`:""}</div>
            ${pd()}
          </div>
        </div>
      </div>
    </div>
  `}function hd(){return Ke&&Z.length===0?'<div class="roster-history-muted">Searching...</div>':Z.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${Z.map((t,e)=>`
        <button class="roster-history-match${e===se||t.discord_id===Ct?" is-selected":""}" type="button" data-discord-history-id="${f(t.discord_id)}" data-discord-history-name="${f(Jr(t))}">
          <span>${c(Jr(t))}</span>
          <strong>${c(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===se?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function pd(){return Ct?Ke&&Ye.length===0?'<div class="roster-history-muted">Loading history...</div>':Ye.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${Ye.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(Li(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${c(md(t.event_type))}</td>
              <td>${c(t.old_value||"")}</td>
              <td>${c(t.new_value||"")}</td>
              <td>${c(t.initiator||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function Jr(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function md(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function gd(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(kn)}" />
        </div>

        ${De?`<div class="discord-data-error">${c(De)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${bd()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${Ze?`: ${c(Ze)}`:""}</div>
            ${yd()}
          </div>
        </div>
      </div>
    </div>
  `}function bd(){return We&&X.length===0?'<div class="roster-history-muted">Searching...</div>':X.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${X.map((t,e)=>`
        <button class="roster-history-match${e===oe||t.account_name===Ze?" is-selected":""}" type="button" data-roster-history-account="${f(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <strong>${c(t.rank||"")}</strong>
          ${e===oe?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function yd(){return Ze?We&&Ve.length===0?'<div class="roster-history-muted">Loading history...</div>':Ve.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${Ve.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(Li(t.timestamp))}</td>
              <td>${c(t.event_type||"")}</td>
              <td>${id(t.rank)}</td>
              <td>${c(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function kd(){var t;return`
    <div class="guildsync-tab-panel reports-panel" data-active-tab="settings">
      <div class="discord-data-header reports-header">
        <div>
          <h2 class="discord-data-title">Reports & Admin</h2>
          <p class="discord-data-subtitle">Run GuildSync reports and administrative review tools. More options can be added here later.</p>
        </div>
      </div>

      <div class="reports-scroll-area">
        ${Os()}
        ${((t=v==null?void 0:v.user)==null?void 0:t.role)==="admin"?_s.render():""}
        <section class="reports-list" aria-label="Available reports">
          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Associates Promotion Eligible</h3>
              <p>Shows Associates who have been in the guild at least two weeks, have purchased at least one raffle ticket, and are linked to Discord. Also shows otherwise eligible Associates who still need a Discord link reviewed.</p>
            </div>
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${Oe?"disabled":""}>
              ${Oe?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${Ie?"disabled":""}>
              ${Ie?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${Pe?"disabled":""}>
              ${Pe?"Loading...":"Run"}
            </button>
          </article>
        </section>

        <article class="report-option-card">
          <div class="report-option-copy">
            <h3>ESO / Discord Member Links</h3>
            <p>Review automatic ESO-to-Discord links, accept candidate matches, unlink blocked matches, or run the matcher again after roster or Discord refreshes.</p>
          </div>
          <button id="runMemberLinksReportButton" class="refresh-discord-button report-run-button" type="button" ${I?"disabled":""}>
            ${I?"Loading...":"Run"}
          </button>
        </article>
      </div>
    </div>
  `}function qs(){var t,e,n,r,i;R==="settings"&&(Qo(ws,{refresh:!0}),((t=v==null?void 0:v.user)==null?void 0:t.role)==="admin"&&_s.wire({request:(s,o)=>_(s,o,12e4),rerender:d}),xs(),(e=document.querySelector("#runAssociateTicketReportButton"))==null||e.addEventListener("click",()=>Is()),(n=document.querySelector("#runDiscordRankAuditReportButton"))==null||n.addEventListener("click",()=>Ed()),(r=document.querySelector("#runDiscordLastSeenReportButton"))==null||r.addEventListener("click",()=>Md()),(i=document.querySelector("#runMemberLinksReportButton"))==null||i.addEventListener("click",()=>Fd()))}function xs(t=document){var e,n,r,i,s;(e=t.querySelector("#cancelBonusDefaults"))==null||e.addEventListener("click",()=>{ce=!1,d()}),(n=t.querySelector("#resetBonusDefaults"))==null||n.addEventListener("click",()=>{ce=!0,d()}),(r=t.querySelector("#raffleBonusSettingsForm"))==null||r.addEventListener("submit",vd),(i=t.querySelector("#raffleBonusSettingsForm"))==null||i.addEventListener("input",o=>{ge={raffle:Te,values:new Map(new FormData(o.currentTarget))}}),(s=t.querySelector("#bonusRafflePicker"))==null||s.addEventListener("change",o=>{Te=o.currentTarget.value,ce=!1,ge=null,d()})}function Os(){var o;if(!F)return'<article class="report-option-card raffle-bonus-card"><div class="report-option-copy"><h3><button type="button" class="report-section-toggle" data-report-toggle="bonus" aria-expanded="false" aria-controls="raffleBonusContent">Raffle Bonus Tickets <span aria-hidden="true">\u25BE</span></button></h3><div id="raffleBonusContent" class="report-section-content" inert><div class="report-section-inner"><p>Loading raffle bonus settings...</p></div></div></div></article>';const t=!ce&&(ge==null?void 0:ge.raffle)===Te?ge.values:null,e=xt.find(a=>`${a.type}:${a.salesEnd}`===Te),n=ce&&(e==null?void 0:e.inheritedSettings)?e.inheritedSettings:e,r=e?{enabledByType:{...F.enabledByType,[e.type]:n.enabled},biweekly:e.type==="biweekly"?n.tiers:F.biweekly,monthly:e.type==="monthly"?n.tiers:F.monthly}:ce&&F.envDefaults||F,i=((o=v==null?void 0:v.user)==null?void 0:o.role)==="admin",s=(a,l)=>{var m,g;return`
    <fieldset class="raffle-bonus-tiers" ${i&&!ce?"":"disabled"}>
      <legend>${l}</legend>
      <label><input name="${a}-enabled" type="checkbox" ${(t?t.has(`${a}-enabled`):(g=(m=r.enabledByType)==null?void 0:m[a])!=null?g:r.enabled)?"checked":""}> Enable bonus tickets</label>
      ${r[a].map((y,b)=>{var k,$;return`
        <div class="raffle-bonus-tier">
          <span>Period ${b+1}${b===r[a].length-1?" (final)":""}</span>
          <label>Hours <input name="${a}-${b}-hours" type="number" min="1" step="1" required value="${f(String(t&&(k=t.get(`${a}-${b}-hours`))!=null?k:y.hours))}"></label>
          <label>Bonus % <input name="${a}-${b}-percent" type="number" min="0" max="100" step="0.1" required value="${f(String(t&&($=t.get(`${a}-${b}-percent`))!=null?$:y.percent))}"></label>
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
            ${xt.map(a=>`<option value="${f(`${a.type}:${a.salesEnd}`)}" ${Te===`${a.type}:${a.salesEnd}`?"selected":""}>${c(a.label)}${a.enabled?" (Bonuses)":""}</option>`).join("")}
          </select>
        </label>
        <p data-bonus-settings-source>Source: ${c(e?e.overridden?"Raffle override":"Saved raffle policy":F.source===".env"?"Default":F.source||"Default")}</p>
        ${ce?'<p role="status">Default Hours, Bonus %, and enabled settings are shown below. Click Save Bonus Settings to apply them, or Cancel default restoration to keep your previous settings.</p><button type="button" id="cancelBonusDefaults">Cancel default restoration</button>':""}
        <form id="raffleBonusSettingsForm">
          ${i?`<button type="button" id="resetBonusDefaults">Return to defaults</button><p>Restores Hours, Bonus %, and the enabled switch ${e?"from this raffle\u2019s inherited policy":"for both raffle types from their default rules"}. Changes apply only after Save Bonus Settings.</p>`:""}
          ${e?s(e.type,e.label):s("biweekly","Bi-Weekly Raffle")+s("monthly","50/50 Raffle")}
          ${i?'<button class="refresh-discord-button report-run-button" type="submit">Save Bonus Settings</button>':"<p>Admin access is required to change these settings.</p>"}
        </form>
        </div></div>
      </div>
    </article>`}async function vd(t){t.preventDefault();const e=t.currentTarget,n=new FormData(e),r=xt.find(o=>`${o.type}:${o.salesEnd}`===Te),i=o=>((r==null?void 0:r.type)===o?r.tiers:F[o]).map((a,l)=>({hours:Number(n.get(`${o}-${l}-hours`)),percent:Number(n.get(`${o}-${l}-percent`))})),s=r?{raffleType:r.type,salesEnd:r.salesEnd,enabled:n.has(`${r.type}-enabled`),tiers:i(r.type)}:{enabledByType:{biweekly:n.has("biweekly-enabled"),monthly:n.has("monthly-enabled")},biweekly:i("biweekly"),monthly:i("monthly")};try{ce&&(s.resetToDefaults=!0);const o=await _("guildsync:save-raffle-bonus-settings",s,3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||"Could not save raffle bonus settings.");F=o.bonusSettings,ge=null,ce=!1,await Ae({silent:!0}),h("bonus-settings","Raffle bonus settings saved.",{ttlMs:p}),d()}catch(o){h("bonus-settings-error",S(o),{ttlMs:p})}}function Is(){Wt=!0,lt="",d(),fa()}function Qr(){Wt=!1,lt="",d()}function Sd(){const t=wd(),e=_d(),n=jt.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${Oe?"disabled":""}>${Oe?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(n))} total row${n===1?"":"s"}</span>
        </div>

        ${lt?`<div class="discord-data-error">${c(lt)}</div>`:""}

        <div class="report-results-content">
          ${Oe&&n===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!Oe&&n===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${n>0?Bo("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${n>0?Bo("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${c(Gs())}</textarea>
      </div>
    </div>
  `}function wd(){return jt.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function _d(){return jt.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function Bo(t,e,n,r){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${c(t)}</h4>
          <p>${c(e)}</p>
        </div>
        <span>${c(String(n.length))} row${n.length===1?"":"s"}</span>
      </div>
      ${n.length>0?Ad(n):`<div class="roster-history-muted report-section-empty">${c(r)}</div>`}
    </section>
  `}function Ad(t=jt){return`
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
              <td>${yi(e.rank||"")}</td>
              <td>${c(mr(e.joined))}</td>
              <td>${c(ue(e.purchased_tickets||0))}</td>
              <td class="associate-earliest-deposit-cell">${c(Ps(e))}</td>
              <td>${c(Fs(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Ps(t){const e=String((t==null?void 0:t.earliest_deposit_summary)||"").trim();if(e)return e;const n=String((t==null?void 0:t.earliest_deposit_date)||"").trim(),r=String((t==null?void 0:t.earliest_deposit_raffle_period)||"").trim();return[n,r].filter(Boolean).join(" | ")}function Fs(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function Gs(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Earliest Deposit / Raffle","Discord Link"]];for(const e of jt){const n=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([n,e.account_name||"",e.rank||"",mr(e.joined),ue(e.purchased_tickets||0),Ps(e),Fs(e)])}return t.map(e=>e.map(br).join("	")).join(`
`)}async function Ld(){const t=Gs();if(await yr(t)){h("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#associateTicketReportTsv");n&&(n.focus(),n.select()),h("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function Ed(){zt=!0,dt="",d(),ua()}function Xr(){zt=!1,dt="",d()}function $d(){const t=Sn.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${Ie?"disabled":""}>${Ie?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${dt?`<div class="discord-data-error">${c(dt)}</div>`:""}

        <div class="report-results-content">
          ${Ie&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!Ie&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?Rd(Sn):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${c(Vs())}</textarea>
      </div>
    </div>
  `}function Rd(t=Sn){return`
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
              <td data-label="Discord Member" class="discord-rank-audit-member-cell">${c(Us(e))}</td>
              <td data-label="Discord Rank Role" class="discord-rank-audit-discord-cell">${c(e.discord_rank||"No matching rank role")}</td>
              <td data-label="Linked ESO Account(s)" class="discord-rank-audit-eso-account-cell">${c(e.eso_accounts||"No linked ESO account")}</td>
              <td data-label="ESO Rank" class="discord-rank-audit-eso-rank-cell">${c(e.eso_rank||"None")}</td>
              <td data-label="Issue" class="discord-rank-audit-issue-cell">${c(Hs(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Us(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function Hs(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function Vs(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of Sn)t.push([Us(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",Hs(e)]);return t.map(e=>e.map(br).join("	")).join(`
`)}async function Dd(){const t=Vs();if(await yr(t)){h("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#discordRankAuditReportTsv");n&&(n.focus(),n.select()),h("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function Md(){nt=!0,ut="",Yt="",d(),da(),E.length===0&&!I&&fr({silent:!0})}function Zr(){nt=!1,ut="",Yt="",Fe="",Et="",Ge="",d()}function Td(){const t=ki(),e=hi.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${Pe?"disabled":""}>${Pe?"Loading...":"Run Again"}</button>
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
            value="${f(Yt)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${Fe===""?"selected":""}>All link statuses</option>
            <option value="linked" ${Fe==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${Fe==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${Fe==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${ut?`<div class="discord-data-error discord-last-seen-report-error">${c(ut)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${Pe&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!Pe&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?Bd(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${c(js(t))}</textarea>
      </div>
    </div>
  `}function Bd(t=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${an("name","Discord Member")}</th>
            <th>${an("eso","Linked ESO Account")}</th>
            <th>${an("date","Last Seen")}</th>
            <th>${an("days","Days Since")}</th>
            <th>${an("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr class="discord-last-seen-row ${f(Id(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${f(yt(e).status)}" data-discord-last-seen-search="${f(Ws(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${Od(e)}
                  <span>${c(It(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${Cd(e)}</td>
              <td>${c(vi(e.last_seen))}</td>
              <td>${c(Si(e.last_seen))}</td>
              <td>${c(nr(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function an(t,e){const n=Et===t,r=n?Ge==="asc"?"\u25B2":"\u25BC":"\u2195",i=n?`${e}: ${Ge==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${n?" active":""}" type="button" data-discord-last-seen-sort="${f(t)}" title="${f(i)}">
      <span>${c(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${c(r)}</span>
    </button>
  `}function ki(){const t=[...hi],e=Et,n=Ge;if(!e||!n)return t;const r=n==="desc"?-1:1;return t.sort((i,s)=>{var o,a;if(e==="date"){const l=Number(i.last_seen||0)||0,m=Number(s.last_seen||0)||0;return(l-m)*r}if(e==="days")return(No(i.last_seen)-No(s.last_seen))*r;if(e==="action")return nr(i.last_seen_action).localeCompare(nr(s.last_seen_action),void 0,{sensitivity:"base"})*r;if(e==="eso"){const l=yt(i),m=yt(s),g={linked:0,candidate:1,unlinked:2},y=((o=g[l.status])!=null?o:9)-((a=g[m.status])!=null?a:9);return y!==0?y*r:l.esoAccountName.localeCompare(m.esoAccountName,void 0,{sensitivity:"base"})*r}return It(i).localeCompare(It(s),void 0,{sensitivity:"base"})*r})}function Nd(t){Et!==t?(Et=t,Ge="asc"):Ge==="asc"?Ge="desc":(Et="",Ge=""),d()}function It(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function Ws(t){return[It(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,qd(t),vi(t==null?void 0:t.last_seen),Si(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function yt(t){const e=nu(t==null?void 0:t.discord_id),n=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),r=String((e==null?void 0:e.eso_account_name)||"").trim();return n==="linked"&&r?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:r,title:`Linked ESO account: ${r}`}:(n==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&r?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:r,title:`Fuzzy ESO account candidate: ${r}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function Cd(t){const e=yt(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${f(e.className)}"
      title="${f(e.title)}"
      aria-label="${f(e.label)}"
      role="img"
    ></span>
  `}function qd(t){const e=yt(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function xd(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!n)return"";if(/^https?:\/\//i.test(e))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function Od(t){const e=It(t),n=e?e.slice(0,2).toUpperCase():"?",r=xd(t);return r?`<span class="discord-member-avatar"><img src="${f(r)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${c(n)}</span>`}function vi(t){const e=Number(t);if(!e)return"Never";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t||"");const r=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(n).reduce((i,s)=>(i[s.type]=s.value,i),{});return`${r.month}/${r.day}/${r.year} ${r.hour}:${r.minute} ${r.dayPeriod}`}function Id(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const n=(Date.now()-e*1e3)/864e5;return n>30?"discord-last-seen-red":n>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function Si(t){const e=Number(t);if(!e)return"Never";const n=Date.now()-e*1e3;if(!Number.isFinite(n))return"";if(n<0)return"0 days";const r=Math.floor(n/864e5);return`${r} day${r===1?"":"s"}`}function No(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const n=Date.now()-e*1e3;return Number.isFinite(n)?n<0?0:Math.floor(n/864e5):Number.POSITIVE_INFINITY}function nr(t){return String(t||"").trim()||"None tracked"}function js(t=ki()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const n of t){const r=yt(n);e.push([It(n),r.label||"",r.esoAccountName||"",vi(n==null?void 0:n.last_seen),Si(n==null?void 0:n.last_seen),nr(n==null?void 0:n.last_seen_action),(n==null?void 0:n.username)||"",(n==null?void 0:n.discord_id)||""])}return e.map(n=>n.map(br).join("	")).join(`
`)}async function Pd(){const t=ki().filter(i=>{const s=_e(Yt),o=String(Fe||"").trim().toLowerCase(),a=!s||_e(Ws(i)).includes(s),l=!o||yt(i).status===o;return a&&l}),e=js(t);if(await yr(e)){h("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#discordLastSeenReportTsv");r&&(r.focus(),r.select()),h("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function Fd(){Ce=!0,H="",d(),E.length===0&&!I&&fr({silent:!0})}function ei(){Ce=!1,ur="",ot="",En="",$n="",Re=-1,d()}function zs(t){return[...new Set((Array.isArray(E)?E:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function Ys(t,e){return t.map(n=>`<option value="${f(n)}" ${e===n?"selected":""}>${c(n)}</option>`).join("")}function Gd(){return Ys(zs("link_status"),En)}function Ud(){return Ys(zs("link_method"),$n)}function Hd(){return`
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
          <button id="refreshMemberLinksButton" class="clear-discord-filters-button" type="button" ${I?"disabled":""}>Refresh Links</button>
          <button id="runMemberAutoLinkButton" class="refresh-discord-button" type="button" ${I?"disabled":""}>${I?"Running...":"Run Auto-Linking"}</button>
          <span class="roster-history-muted">${c(String(E.length))} link/candidate row${E.length===1?"":"s"}</span>
        </div>

        <div class="member-links-report-filter-row">
          <input
            id="memberLinksReportSearchInput"
            class="member-links-report-search-input"
            type="search"
            autocomplete="off"
            spellcheck="false"
            placeholder="Search Discord account or ESO member..."
            value="${f(ur)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${En===""?"selected":""}>All statuses</option>
            ${Gd()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${$n===""?"selected":""}>All methods</option>
            ${Ud()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${ot===""?"selected":""}>All actions</option>
            <option value="needs-link" ${ot==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${ot==="can-unlink"?"selected":""}>Unlink Available</option>
            <option value="can-unblock" ${ot==="can-unblock"?"selected":""}>Unblock Available</option>
          </select>
        </div>

        ${H?`<div class="discord-data-error member-links-report-error">${c(H)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${zd()}
        </div>
      </div>
    </div>
  `}function Ks(){var n,r,i,s,o,a;if(!Ce)return;(n=document.querySelector("#closeMemberLinksReportButton"))==null||n.addEventListener("click",ei),(r=document.querySelector("#refreshMemberLinksButton"))==null||r.addEventListener("click",()=>fr()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>eu());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",Yd),t.addEventListener("keydown",Xd)),(s=document.querySelector("#memberLinksReportActionFilter"))==null||s.addEventListener("change",Kd),(o=document.querySelector("#memberLinksReportStatusFilter"))==null||o.addEventListener("change",Jd),(a=document.querySelector("#memberLinksReportMethodFilter"))==null||a.addEventListener("change",Qd),Dn(),document.querySelectorAll("[data-accept-member-candidate]").forEach(l=>{l.addEventListener("click",()=>Qs(l.dataset.acceptMemberCandidate||"",l.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(l=>{l.addEventListener("click",()=>tu(l.dataset.unlinkMemberLink||"",l.dataset.unlinkMemberLinkDiscordId||""))}),document.querySelectorAll("[data-unblock-member-auto-link]").forEach(l=>{l.addEventListener("click",()=>Xs(l.dataset.unblockMemberAutoLink||"",l.dataset.unblockMemberAutoLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",l=>{l.target===e&&ei()})}function Co(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function qo(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Vd(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Wd(t){return[...Array.isArray(t)?t:[]].sort((e,n)=>{const r=Co(e)-Co(n);if(r!==0)return r;const i=qo(e).localeCompare(qo(n),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((n==null?void 0:n.discord_user_id)||""),void 0,{sensitivity:"base"})})}function jd(t){const e=ti(t);let n="";e==="Username"?n=(t==null?void 0:t.discord_username)||"":e==="Global Name"?n=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(n=(t==null?void 0:t.discord_server_nickname)||""),n||(n=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const r=e?` <span class="member-link-report-match-field">(${c(e)})</span>`:"";return`<span class="member-link-report-discord-name">${c(n)}</span>${r}`}function zd(){return I&&E.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(E)||E.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${Wd(E).map(e=>{var s;const n=String(e.link_status||"").trim().toLowerCase(),r=String(e.link_method||"").trim().toLowerCase(),i=jd(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${f(Vd(e))}"
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
  `}function Js(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function xo(t){const e=Js();if(e.forEach(r=>r.classList.remove("member-links-report-row-active")),e.length===0){Re=-1;return}Re=Math.max(0,Math.min(t,e.length-1));const n=e[Re];n.classList.add("member-links-report-row-active"),n.scrollIntoView({block:"nearest"})}function Dn(){const t=_e(ur),e=String(ot||"").trim().toLowerCase(),n=String(En||"").trim().toLowerCase(),r=String($n||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let s=0;i.forEach(a=>{const l=_e(a.dataset.memberLinksReportSearch||""),m=String(a.dataset.memberLinksReportAction||"").trim().toLowerCase(),g=String(a.dataset.memberLinksReportStatus||"").trim().toLowerCase(),y=String(a.dataset.memberLinksReportMethod||"").trim().toLowerCase(),M=(!t||l.includes(t))&&(!e||m===e)&&(!n||g===n)&&(!r||y===r);a.hidden=!M,a.classList.remove("member-links-report-row-active"),M&&(s+=1)});const o=document.querySelector("#memberLinksReportSearchEmpty");o&&(o.hidden=s!==0),Re=-1}function Yd(t){ur=t.target.value||"",Dn()}function Kd(t){ot=t.target.value||"",Dn()}function Jd(t){En=t.target.value||"",Dn()}function Qd(t){$n=t.target.value||"",Dn()}function Xd(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Js();if(e.length===0)return;if(t.key==="ArrowDown"){const r=Re<0?0:Re+1;xo(r>=e.length?e.length-1:r);return}const n=Re<0?e.length-1:Re-1;xo(n<0?0:n)}function Vn(){return R==="discord-members"||R==="eso-members"||te||Ce||nt}function Zd(t={}){if(!Array.isArray(t.links))return;const e=JSON.stringify(E)!==JSON.stringify(t.links);E=t.links,e&&Vn()&&(R==="discord-members"&&!te&&!Ce&&!nt?Ft():d())}function Oo(){const t=document.querySelector("#runMemberLinksReportButton");t&&(t.disabled=I,t.textContent=I?"Loading...":"Run")}async function fr(t={}){if(!(u!=null&&u.connected)){H="You must be connected to load member links.",Vn()&&d();return}I=!0,H="",Oo(),!t.silent&&Vn()&&d();try{const e=await _("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");E=Array.isArray(e.links)?e.links:[]}catch(e){H=S(e)}finally{I=!1,Oo(),Vn()&&d()}}async function eu(){if(!(u!=null&&u.connected)||!v.logged_in){H="You must be logged in and connected to run auto-linking.",d();return}I=!0,H="",d();try{const t=await _("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");E=Array.isArray(t.links)?t.links:[],h("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:p})}catch(t){H=S(t)}finally{I=!1,d()}}async function Qs(t,e=""){try{const n=await _("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to accept candidate.");E=Array.isArray(n.links)?n.links:E,h("member-link-accepted",n.message||"Candidate accepted as a link.",{ttlMs:p})}catch(n){H=S(n),h("member-link-accept-error",H,{ttlMs:p})}}async function Xs(t,e=""){if(!await gi({title:"Remove Auto-Link Block?",message:`Remove the blocked auto-match record between ${t} and this Discord account? Auto-linking will run immediately and this screen will refresh to show whether the pair linked again.`,confirmLabel:"Unblock",cancelLabel:"Cancel",confirmClass:"danger"}))return!1;I=!0,H="",d();try{const r=await _("guildsync:unblock-member-auto-link",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to remove auto-link block.");E=Array.isArray(r.links)?r.links:E;const i=he(t),s=String(e||"").trim(),o=r.refreshedPair||E.find(m=>he(m.eso_account_name)===i&&String(m.discord_user_id||"").trim()===s),a=String((o==null?void 0:o.link_status)||"").trim().toLowerCase(),l=a==="linked"?" It linked again automatically.":a==="candidate"?" It is now showing as a candidate.":" No automatic link was recreated.";return h("member-link-unblocked",`${r.message||"Auto-link block removed."}${l}`,{ttlMs:p}),!0}catch(r){return H=S(r),h("member-link-unblock-error",H,{ttlMs:p}),!1}finally{I=!1,d()}}async function tu(t,e=""){if(!!await gi({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const r=await _("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to unlink member.");E=Array.isArray(r.links)?r.links:E,h("member-link-unlinked",r.message||"Member link removed.",{ttlMs:p})}catch(r){H=S(r)}d()}}function he(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function hr(t){const e=he(t);return e?E.filter(n=>he(n.eso_account_name)===e):[]}function pr(t){const e=String(t||"").trim();return e?E.filter(n=>String(n.discord_user_id||"").trim()===e):[]}function Zs(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const n=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(n.length>0){const i=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const s=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return s||n[0]}const r=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return r||e[0]}function nu(t){return Zs(pr(t))}function ru(t){return`${he(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function wi(){return A?A.mode==="discord-to-eso"?pr(A.discordUserId):hr(A.esoAccountName):[]}function iu(t){const e=String(t||"").trim(),n=z.find(r=>String(r.discord_id||"").trim()===e);return n&&(n.server_nickname||n.global_name||n.username||n.discord_id)||e}function ea(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?pr(t.discordUserId):hr(t.esoAccountName),r=Zs(n),i=String((r==null?void 0:r.link_status)||"").trim().toLowerCase(),s=n.filter(a=>String(a.link_status||"").trim().toLowerCase()==="linked").length,o=n.filter(a=>String(a.link_status||"").trim().toLowerCase()==="candidate").length;return s>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?s===1?r.eso_account_name:`${s} ESO accounts`:s===1?r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member":`${s} Discord accounts`}`}:i==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?r.eso_account_name:r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member"}`}:i==="blocked"||Number((r==null?void 0:r.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function ta(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,r=ea(t);return`
    <button
      class="member-link-status-dot member-link-status-${f(r.className)}"
      type="button"
      title="${f(r.title)}"
      aria-label="${f(r.label)}"
      data-open-member-link-dialog="${f(e)}"
      data-member-link-value="${f(n||"")}"
    ></button>
  `}function ou(){return A?A.mode==="discord-to-eso"?iu(A.discordUserId):A.esoAccountName||"":""}function na(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function ti(t){const e=na((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const n=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(n.includes("discord_username")||n.includes("username"))return"Username";if(n.includes("discord_display_name")||n.includes("global")||n.includes("display"))return"Global Name";if(n.includes("discord_server_nickname")||n.includes("server")||n.includes("nickname"))return"Server Nickname";const r=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(r==="exact"||r==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",s=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const a of s){const l=su(i,a.value);(!o||l>o.score)&&(o={...a,score:l})}if(o&&o.score>0)return o.field}return""}function _e(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function su(t,e){const n=_e(t),r=_e(e);if(!n||!r)return 0;if(n===r)return 100;if((n.includes(r)||r.includes(n))&&Math.min(n.length,r.length)>=4)return 88;const i=Math.abs(n.length-r.length),s=[...n].findIndex((a,l)=>a!==r[l]),o=s===-1?Math.min(n.length,r.length):s;return Math.max(0,Math.min(75,Math.round(o*10-i*3)))}function au(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function cu(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function lu(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),n=au(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${c(n)}</span>`}function du(t){var a;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",n=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",r=String(t.link_status||"").trim().toLowerCase(),o=r==="linked"?`<button
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
        <div><span>Status:</span> ${lu(t)} \xB7 ${c(cu(t.link_method))} \xB7 ${c(String((a=t.match_confidence)!=null?a:""))}% \xB7 ${c(n)}</div>
        ${ti(t)?`<div><span>Matched:</span> Matched on ${c(ti(t))}</div>`:""}
      </div>
      ${o}
    </div>
  `}function uu(){const t=wi();return t.length?[...t].sort((n,r)=>{var l,m;const i=String(n.link_status||"").trim().toLowerCase(),s=String(r.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},a=((l=o[i])!=null?l:9)-((m=o[s])!=null?m:9);return a!==0?a:Number(r.match_confidence||0)-Number(n.match_confidence||0)}).map(n=>du(n)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function fu(){if(qt)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(Ne)return`<div class="discord-data-error">${c(Ne)}</div>`;if(!Array.isArray(ft)||ft.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(wi().map(n=>ru(n))),e=[...ft].filter(n=>{const r=(A==null?void 0:A.mode)==="discord-to-eso"?`${he(n.account_name)}::${String(A.discordUserId||"").trim()}`:`${he(A==null?void 0:A.esoAccountName)}::${String(n.discord_id||"").trim()}`;return!t.has(r)}).sort((n,r)=>{const i=Number(r.confidence||0)-Number(n.confidence||0);return i!==0?i:Io(n).localeCompare(Io(r),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(n=>hu(n)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function Io(t){return((A==null?void 0:A.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function hu(t,e={}){var y,b,k;const n=(A==null?void 0:A.mode)||"",r=n==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=na(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),s=n==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[s,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),a=n==="discord-to-eso"?t.account_name:t.discord_id,l=e.disabled===!0,m=[r,s,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),g=[r,o,`${(y=t.confidence)!=null?y:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${f(a||"")}" data-member-link-option-search="${f(m)}" title="${f(g)}" ${l?"disabled":""}>
      <span class="member-link-option-name" title="${f(r||"")}">${c(r||"")}</span>
      <span class="member-link-option-subtitle" title="${f(o||"")}">${c(o||"")}</span>
      <span class="member-link-option-confidence" title="${f(String((b=t.confidence)!=null?b:0))}%">${c(String((k=t.confidence)!=null?k:0))}%</span>
    </button>
  `}function pu(){const t=(A==null?void 0:A.mode)||"",e=ou(),n=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
            ${uu()}
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
              value="${f(Rn)}"
            />
            ${fu()}
          </section>
        </div>

      </div>
    </div>
  `}async function _i(t,e){if(!(u!=null&&u.connected)||!L()){h("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:p});return}te=!0,A=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},ft=[],qt=!0,Ne="",Rn="",me=-1,d();try{if(!Array.isArray(E)||E.length===0){const i=await _("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(E=Array.isArray(i.links)?i.links:[])}const r=await _("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load link suggestions.");ft=Array.isArray(r.options)?r.options:[]}catch(n){Ne=S(n)}finally{qt=!1,d()}}function Pt(){document.removeEventListener("keydown",ni),te=!1,A=null,ft=[],qt=!1,Ne="",Rn="",me=-1,d()}function ra(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function Po(t){const e=ra();if(e.forEach(r=>r.classList.remove("member-link-option-row-active")),e.length===0){me=-1;return}me=Math.max(0,Math.min(t,e.length-1));const n=e[me];n.classList.add("member-link-option-row-active"),n.scrollIntoView({block:"nearest"})}function ia(){const t=_e(Rn),e=[...document.querySelectorAll(".member-link-option-row")];let n=0;e.forEach(i=>{const s=_e(i.dataset.memberLinkOptionSearch||i.textContent||""),o=!t||s.includes(t);i.hidden=!o,i.classList.remove("member-link-option-row-active"),o&&(n+=1)});const r=document.querySelector("#memberLinkSuggestionSearchEmpty");r&&(r.hidden=n!==0),me=-1}function mu(t){Rn=t.target.value||"",ia()}function gu(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=ra();if(e.length===0)return;if(t.key==="ArrowDown"){const r=me<0?0:me+1;Po(r>=e.length?e.length-1:r);return}const n=me<0?e.length-1:me-1;Po(n<0?0:n)}function ni(t){!te||t.key==="Escape"&&(t.preventDefault(),Pt())}async function bu(t){if(!(!A||!t))try{const e=A.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:A.discordUserId}:{esoAccountName:A.esoAccountName,discordUserId:t},n=await _("guildsync:manual-link-member",e,3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to link members.");E=Array.isArray(n.links)?n.links:E,h("member-link-saved",n.message||"Member link saved.",{ttlMs:p}),Pt()}catch(e){Ne=S(e),d()}}async function yu(t,e=""){await Qs(t,e),Pt()}async function oa(){if(!!A){qt=!0,Ne="",d();try{const t=A.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:A.discordUserId}:{mode:"eso-to-discord",accountName:A.esoAccountName},e=await _("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");ft=Array.isArray(e.options)?e.options:[]}catch(t){Ne=S(t)}finally{qt=!1,d()}}}async function ku(t="",e=""){const n=wi().find(i=>he(i.eso_account_name)===he(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!n||!await gi({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await _("guildsync:manual-unlink-member",{esoAccountName:n.eso_account_name,discordUserId:n.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");E=Array.isArray(i.links)?i.links:E,h("member-link-unlinked",i.message||"Member link removed.",{ttlMs:p}),await oa()}catch(i){Ne=S(i),d()}}async function vu(t="",e=""){await Xs(t,e)&&await oa()}function sa(){var n;if(!te)return;document.removeEventListener("keydown",ni),document.addEventListener("keydown",ni),(n=document.querySelector("#closeMemberLinkDialogButton"))==null||n.addEventListener("click",Pt);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",mu),t.addEventListener("keydown",gu),ia()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(r=>{r.addEventListener("click",()=>ku(r.dataset.unlinkEsoAccount||"",r.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-unblock-dialog-member-auto-link]").forEach(r=>{r.addEventListener("click",()=>vu(r.dataset.unblockEsoAccount||"",r.dataset.unblockDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(r=>{r.addEventListener("click",()=>bu(r.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(r=>{r.addEventListener("click",()=>yu(r.dataset.acceptDialogMemberCandidate||"",r.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",r=>{r.target===e&&Pt()})}function aa(){var e,n,r;if(!Wt)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",Qr),(n=document.querySelector("#rerunAssociateTicketReportButton"))==null||n.addEventListener("click",()=>fa()),(r=document.querySelector("#copyAssociateTicketReportGridButton"))==null||r.addEventListener("click",()=>Ld());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Qr()})}function ca(){var e,n,r;if(!zt)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",Xr),(n=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||n.addEventListener("click",()=>ua()),(r=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||r.addEventListener("click",()=>Dd());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Xr()})}function la(){var r,i,s;if(!nt)return;(r=document.querySelector("#closeDiscordLastSeenReportButton"))==null||r.addEventListener("click",Zr),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>da()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>Pd()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(o=>{o.addEventListener("click",()=>Nd(o.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",Su);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",wu),Ai();const n=document.querySelector(".discord-last-seen-report-overlay");n&&n.addEventListener("click",o=>{o.target===n&&Zr()})}function Su(t){Yt=t.target.value||"",Ai()}function wu(t){Fe=t.target.value||"",Ai()}function Ai(){const t=_e(Yt),e=String(Fe||"").trim().toLowerCase(),n=[...document.querySelectorAll("[data-discord-last-seen-row]")];let r=0;n.forEach(s=>{const o=_e(s.dataset.discordLastSeenSearch||s.textContent||""),a=String(s.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),g=(!t||o.includes(t))&&(!e||a===e);s.hidden=!g,g&&(r+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=r!==0)}async function da(){if(!(u!=null&&u.connected)||!L()){ut="You must be logged in and connected to run this report.",d();return}Pe=!0,ut="",d();try{const t=await _("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");z=qi(t.members),lr=xi(t.roles),hi=[...z]}catch(t){ut=S(t)}finally{Pe=!1,d(),B("discordLastSeenReportSearchInput")}}async function ua(){if(!(u!=null&&u.connected)||!L()){dt="You must be logged in and connected to run this report.",d();return}Ie=!0,dt="",d();try{const t=await _("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Sn=Array.isArray(t.rows)?t.rows:[]}catch(t){dt=S(t)}finally{Ie=!1,d()}}async function fa(){if(!(u!=null&&u.connected)||!L()){lt="You must be logged in and connected to run this report.",d();return}Oe=!0,lt="",d();try{const t=await _("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");jt=Array.isArray(t.rows)?t.rows:[]}catch(t){lt=S(t)}finally{Oe=!1,d()}}function Rt(){const t=String(Xt||"").trim().toLowerCase(),e={account_name:"Anonymous",rank:"Manual Entry"},n=new Set(["anonymous"]),r=j.filter(i=>String(i.account_name||"").trim()).filter(i=>{const o=String(i.account_name||"").trim().toLowerCase();return!o||n.has(o)||t&&!o.includes(t)?!1:(n.add(o),!0)}).slice().sort((i,s)=>{const o=String(i.account_name||"").toLowerCase(),a=String(s.account_name||"").toLowerCase(),l=t&&o.startsWith(t)?0:1,m=t&&a.startsWith(t)?0:1;return l!==m?l-m:o.localeCompare(a)}).slice(0,19);return[e,...r]}function ha(t=Rt()){const e=String(D.accountName||"").trim();return t.length===0?'<div class="roster-history-muted manual-ticket-no-matches">No matching guild members found.</div>':t.map((n,r)=>`
        <button class="roster-history-match${r===G||n.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${f(n.account_name)}" role="option" aria-selected="${r===G||n.account_name===e?"true":"false"}">
          <span>${c(n.account_name)}</span>
          <strong>${c(n.rank||"")}</strong>
          ${r===G?"<small>Enter</small>":""}
        </button>
      `).join("")}function pa(){document.querySelectorAll("[data-manual-ticket-account]").forEach(t=>{t.addEventListener("mousedown",e=>{e.preventDefault()}),t.addEventListener("click",()=>{ma(t.dataset.manualTicketAccount||"")})})}function Br(){const t=document.querySelector("#manualTicketMatchList");if(!t)return;const e=Rt();G>=e.length&&(G=e.length>0?e.length-1:-1),t.innerHTML=ha(e),pa()}function ma(t){const e=String(t||"").trim();D.accountName=e,Xt=e,le=!1,G=-1,J="",d()}function B(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const n=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(n,n)},0)}function _u(){const t=le?Rt():[],e=String(D.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Entry</h3>
            <p>Add a manual banking or raffle entry such as FFTG, officer corrections, or anonymous gold.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${J?`<div class="discord-data-error">${c(J)}</div>`:""}

        <div class="manual-ticket-form">
          <div class="manual-ticket-member-picker">
            <label class="manual-ticket-member-field" for="manualTicketAccountSearchInput">
              <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(Xt)}" autocomplete="off" />
            </label>

            ${le?`
              <div id="manualTicketMatchList" class="roster-history-match-list manual-ticket-match-list" role="listbox" aria-label="Matching guild members">
                ${ha(t)}
              </div>
            `:""}
          </div>

          ${e?`<div class="roster-history-muted manual-ticket-selected-member">Selected: ${c(e)}</div>`:""}

          <div class="manual-ticket-entry-row">
            <div class="manual-ticket-type-field" role="group" aria-label="Ticket type">
              <button class="manual-ticket-type-label${D.ticketType!=="monthly"?" is-selected":""}" type="button" data-manual-ticket-type="biweekly" aria-pressed="${D.ticketType!=="monthly"?"true":"false"}">Bi-Weekly</button>
              <button class="manual-ticket-type-switch" type="button" data-manual-ticket-toggle="true" data-selected-type="${D.ticketType==="monthly"?"monthly":"biweekly"}" aria-label="Toggle ticket type. Current selection is ${D.ticketType==="monthly"?"50/50":"Bi-Weekly"}">
                <span class="manual-ticket-type-track" aria-hidden="true"></span>
                <span class="manual-ticket-type-thumb" aria-hidden="true"></span>
              </button>
              <button class="manual-ticket-type-label${D.ticketType==="monthly"?" is-selected":""}" type="button" data-manual-ticket-type="monthly" aria-pressed="${D.ticketType==="monthly"?"true":"false"}">50/50</button>
            </div>
            <label class="manual-ticket-note-field">
              <textarea id="manualTicketNoteInput" class="discord-search-input manual-ticket-note-input" rows="4" placeholder="Enter a reason such as FFTG">${c(D.note)}</textarea>
            </label>
            <div class="manual-ticket-side-fields">
              <label class="manual-ticket-gold-field">
                <input id="manualTicketGoldInput" class="discord-search-input manual-ticket-gold-input" type="number" min="0" step="1" inputmode="numeric" placeholder="Gold Value" value="${f(D.goldValue)}" />
                <span class="manual-ticket-gold-coin" aria-hidden="true"></span>
              </label>
              <label class="manual-ticket-count-field">
                <div class="manual-ticket-number-wrap">
                  <input id="manualTicketCountInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${f(D.tickets)}" />
                  <div class="manual-ticket-number-buttons" aria-hidden="true">
                    <button id="manualTicketCountUpButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2303</button>
                    <button id="manualTicketCountDownButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2304</button>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div class="manual-ticket-actions">
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${Xn?"disabled":""}>${Xn?"Saving...":"Add Manual Entry"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function ga(){var s,o,a,l,m,g;if(!Be)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{Be=!1,d()});const t=document.querySelector("#manualTicketAccountSearchInput");if(t){const y=({rerender:b=!1}={})=>{if(le=!0,G=Rt().length>0?0:-1,b){d(),B("manualTicketAccountSearchInput");return}Br()};t.addEventListener("focus",()=>{le||y({rerender:!0})}),t.addEventListener("click",()=>{le||y({rerender:!0})}),t.addEventListener("input",b=>{Xt=b.target.value||"",D.accountName="",le=!0,G=Rt().length>0?0:-1,Br()}),t.addEventListener("keydown",b=>{if(b.key==="Escape")return;if(!le){(b.key==="ArrowDown"||b.key==="ArrowUp")&&(b.preventDefault(),y({rerender:!0}));return}const k=Rt();if(b.key==="ArrowDown"||b.key==="ArrowUp"){if(k.length===0)return;b.preventDefault();const q=b.key==="ArrowDown"?1:-1;G=((G<0?0:G)+q+k.length)%k.length,Br();return}if(b.key!=="Enter")return;b.preventDefault();const $=k[G>=0?G:0];$!=null&&$.account_name&&ma($.account_name)})}pa(),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",y=>{D.note=y.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(y=>{y.addEventListener("click",()=>{const b=String(y.dataset.manualTicketType||"").trim().toLowerCase();D.ticketType=b==="monthly"?"monthly":"biweekly",d()})}),(a=document.querySelector("[data-manual-ticket-toggle]"))==null||a.addEventListener("click",()=>{D.ticketType=D.ticketType==="monthly"?"biweekly":"monthly",d()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",y=>{const b=String(y.target.value||"").replace(/\D/g,"");y.target.value!==b&&(y.target.value=b),D.goldValue=b});const n=document.querySelector("#manualTicketCountInput");n==null||n.addEventListener("input",y=>{const b=String(y.target.value||"").replace(/\D/g,"");y.target.value!==b&&(y.target.value=b),D.tickets=b});const r=y=>{const b=Number(D.tickets)||0,k=Math.max(0,b+y);D.tickets=String(k),n&&(n.value=D.tickets,n.focus())};(l=document.querySelector("#manualTicketCountUpButton"))==null||l.addEventListener("click",()=>r(1)),(m=document.querySelector("#manualTicketCountDownButton"))==null||m.addEventListener("click",()=>r(-1)),(g=document.querySelector("#saveManualBiweeklyTicketButton"))==null||g.addEventListener("click",()=>Au());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",y=>{y.target===i&&(Be=!1,d())})}async function Au(){const t=String(D.accountName||"").trim(),e=String(D.note||"").trim(),n=String(D.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",r=Number(String(D.goldValue||"").trim()||0),i=Number(String(D.tickets||"").trim()||0);if(le){J="Select a matching guild member or Anonymous from the list before saving.",d(),B("manualTicketAccountSearchInput");return}if(!t){J="Select a matching guild member or Anonymous from the list before saving.",d(),B("manualTicketAccountSearchInput");return}if(!Number.isFinite(r)||r<0){J="Gold value must be zero or greater.",d();return}if(!Number.isFinite(i)||i<0){J="Tickets must be zero or greater.",d();return}const s=t.toLowerCase()==="anonymous";if(s&&Math.floor(i)>0){J="Anonymous cannot be awarded tickets. Use 0 tickets and enter a gold value.",d();return}if(Math.floor(r)===0&&Math.floor(i)===0){J=s?"Enter a gold value for Anonymous when tickets are 0.":"Enter gold or tickets. Both cannot be zero.",d();return}Xn=!0,J="",d();try{const o=await _("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:n,gold_value:Math.floor(r),tickets:Math.floor(i)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Failed to add manual entry.");Be=!1,D={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},Xt="",G=-1,le=!1,await Ae({silent:!0}),h("manual-ticket-added",o.message||"Manual entry added.",{ttlMs:p})}catch(o){J=S(o)}finally{Xn=!1,d()}}async function Lu(t=""){const e=String(t||"").trim();if(!!e){Vt=!0,vn=e,je=[],Qn=!0,ct=!1,ze="",Bt="",d();try{const n=await _("guildsync:request-roster-member-notes",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster notes.");je=Array.isArray(n.notes)?n.notes:[]}catch(n){ze=S(n)}finally{Qn=!1,d()}}}function ri(){Vt=!1,vn="",je=[],Qn=!1,ct=!1,ze="",Bt="",d()}function Eu(){var n,r;if(!Vt)return;(n=document.querySelector("#closeRosterNotesButton"))==null||n.addEventListener("click",ri);const t=document.querySelector("#rosterNotesNewNote");t&&t.addEventListener("input",i=>{Bt=i.target.value||""}),(r=document.querySelector("#saveRosterNoteButton"))==null||r.addEventListener("click",()=>$u());const e=document.querySelector(".roster-notes-overlay");e&&e.addEventListener("click",i=>{i.target===e&&ri()})}async function $u(){const t=String(Bt||"").trim();if(!t){ze="Enter a note before saving.",d();return}ct=!0,ze="",d();try{const e=await _("guildsync:add-roster-member-note",{account_name:vn,note:t},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to save roster note.");e.note&&(je=[...je,e.note]),Bt="";const n=j.find(r=>he(r.account_name)===he(vn));n&&(n.note_count=Number(n.note_count||0)+1)}catch(e){ze=S(e)}finally{ct=!1,d()}}function ba(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>Mn());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{Tt=!0,De="",d()});const n=document.querySelector("#rosterMemberSearch");n&&(n.addEventListener("input",o=>{Jn=o.target.value||"",jr=o.target.selectionStart,zr=o.target.selectionEnd,x=-1,d({restoreRosterSearchFocus:!0})}),n.addEventListener("keydown",Ru)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{ad(o.dataset.rosterSortColumn||"account_name")})});const r=document.querySelector("#rosterRankFilter");r&&r.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(at.add(a),x=-1,d())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRosterRankFilter||"";at.delete(a),x=-1,d()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(Lt.add(a),x=-1,d())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRosterLinkStatusFilter||"";Lt.delete(a),x=-1,d()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>_i(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))}),document.querySelectorAll("[data-open-roster-notes]").forEach(o=>{o.addEventListener("click",()=>Lu(o.dataset.openRosterNotes||""))}),Eu();const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{Jn="",at.clear(),Lt.clear(),$e="",V="",x=-1,d()}),Du()}function Ru(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){x=-1;return}t.preventDefault(),t.key==="ArrowDown"?x=x<0?0:Math.min(x+1,e.length-1):t.key==="ArrowUp"&&(x=x<0?e.length-1:Math.max(x-1,0)),e.forEach((r,i)=>{r.classList.toggle("roster-search-active-row",i===x)});const n=e[x];n&&typeof n.scrollIntoView=="function"&&n.scrollIntoView({block:"nearest",inline:"nearest"})}function Du(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{Tt=!1,d()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",n=>{if(kn=n.target.value||"",oe=-1,!kn.trim()){clearTimeout(Tr),De="",X=[],Ze="",Ve=[],We=!1,d(),B("rosterHistorySearchInput");return}clearTimeout(Tr),Tr=setTimeout(()=>{Nu({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(X.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;oe=((oe<0?0:oe)+i+X.length)%X.length,d(),B("rosterHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=X[oe>=0?oe:0];r!=null&&r.account_name&&Go(r.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(n=>{n.addEventListener("click",()=>{Go(n.dataset.rosterHistoryAccount||"")})})}function ya(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{Nt=!1,d()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",n=>{xe=n.target.value||"",se=-1,rt+=1;const r=rt;if(clearTimeout(Ro),!xe.trim()){Me="",Z=[],Ct="",gt="",Ye=[],Ke=!1,d(),B("discordHistorySearchInput");return}Ro=setTimeout(()=>{Mu({auto:!0,keepFocus:!0,generation:r})},Ol)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(Z.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;se=((se<0?0:se)+i+Z.length)%Z.length,d(),B("discordHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=Z[se>=0?se:0];r!=null&&r.discord_id&&Fo(r.discord_id,Jr(r))})),document.querySelectorAll("[data-discord-history-id]").forEach(n=>{n.addEventListener("click",()=>{Fo(n.dataset.discordHistoryId||"",n.dataset.discordHistoryName||"")})})}async function Mu(t={}){const e=Number.isInteger(t.generation)?t.generation:++rt,n=xe.trim();if(e===rt){if(!n){Me="",Z=[],se=-1,Ct="",gt="",Ye=[],Ke=!1,d(),t.keepFocus&&B("discordHistorySearchInput");return}Ke=!0,Me="",Z=[],se=-1,Ct="",gt="",Ye=[],d(),t.keepFocus&&B("discordHistorySearchInput");try{const r=await _("guildsync:request-discord-member-history",{query:n},3e4);if(e!==rt||n!==xe.trim())return;if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search Discord member history.");Z=Tu(r.matches),se=Z.length>0?0:-1}catch(r){if(e!==rt||n!==xe.trim())return;Me=S(r)}finally{if(e!==rt||n!==xe.trim())return;Ke=!1,d(),t.keepFocus&&B("discordHistorySearchInput")}}}async function Fo(t,e="",n={}){const r=String(t||"").trim();if(!!r){Ct=r,gt=String(e||r).trim(),xe=gt,Ye=[],Ke=!0,Me="",d();try{const i=await _("guildsync:request-discord-member-history-events",{discord_id:r},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");Ye=Bu(i.events)}catch(i){Me=S(i)}finally{Ke=!1,n.keepLoading||d()}}}function Tu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function Bu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s,o,a,l,m,g,y,b;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((r=(n=e.old_value)!=null?n:e.oldValue)!=null?r:"").trim(),new_value:String((s=(i=e.new_value)!=null?i:e.newValue)!=null?s:"").trim(),event_timestamp:(l=(a=(o=e.event_timestamp)!=null?o:e.eventTimestamp)!=null?a:e.timestamp)!=null?l:"",event_datetime:(g=(m=e.event_datetime)!=null?m:e.eventDatetime)!=null?g:"",initiator:String((b=(y=e.initiator)!=null?y:e.initiatorName)!=null?b:"").trim(),source:String(e.source||"").trim()}}):[]}async function Nu(t={}){const e=kn.trim();if(!e){De="",X=[],oe=-1,Ze="",Ve=[],We=!1,d(),t.keepFocus&&B("rosterHistorySearchInput");return}We=!0,De="",X=[],oe=-1,Ze="",Ve=[],d(),t.keepFocus&&B("rosterHistorySearchInput");try{const n=await _("guildsync:request-roster-rank-history",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search roster rank history.");X=Cu(n.matches),oe=X.length>0?0:-1}catch(n){De=S(n)}finally{We=!1,d(),t.keepFocus&&B("rosterHistorySearchInput")}}async function Go(t,e={}){const n=String(t||"").trim();if(!!n){Ze=n,kn=n,Ve=[],We=!0,De="",d();try{const r=await _("guildsync:request-roster-stream-history",{account_name:n},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load roster stream history.");Ve=qu(r.events)}catch(r){De=S(r)}finally{We=!1,e.keepLoading||d()}}}function Cu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function qu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(r=(n=e.timestamp)!=null?n:e.timestampS)!=null?r:"",officer:String(e.officer||"").trim()}}):[]}function ka(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(n=e.joined)!=null?n:"",note_count:Number((i=(r=e.note_count)!=null?r:e.noteCount)!=null?i:0)||0}}).sort((e,n)=>e.account_name.localeCompare(n.account_name)):[]}function va(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function mr(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function Li(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function xu(t={}){const e=ka(t.members),n=JSON.stringify(j)!==JSON.stringify(e);if(j=e,yn=t.last_refresh||new Date().toISOString(),n&&(R==="eso-members"||te))d();else if(R==="eso-members"){const r=document.querySelector(".eso-roster-panel .discord-last-refresh");r&&(r.textContent=`Last Refresh: ${va(yn)}`)}h("roster-data-updated",`Roster data updated. Loaded ${j.length} member record${j.length===1?"":"s"}.`,{ttlMs:p})}async function Mn(t={}){if(!!(u!=null&&u.connected)){Xe=!0,(R==="eso-members"||te)&&d();try{const e=await _("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");j=ka(e.members),yn=e.last_refresh||yn,t.silent||h("roster-data-loaded",`Loaded ${j.length} roster member${j.length===1?"":"s"}.`,{ttlMs:p})}catch(e){h("roster-data-error",S(e),{ttlMs:p})}finally{Xe=!1,(R==="eso-members"||te)&&d()}}}async function Ou(t={}){var e;if(!!L()){if(!(u!=null&&u.connected)){h("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}Xe=!0,d();try{const n=await hl(t);if(!(n!=null&&n.ok)){h("roster-data-pending",(n==null?void 0:n.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:p});return}const r={local_upload_id:Sa(),authenticated_username:pe(),authenticated_discord_user_id:((e=v==null?void 0:v.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await _a(r)}catch(i){throw Iu(r),i}await Mn({silent:!0})}catch(n){h("roster-data-error",S(n),{ttlMs:p})}finally{Xe=!1,d()}}}function Sa(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Ei(){try{const t=window.localStorage.getItem(gs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function wa(t){window.localStorage.setItem(gs,JSON.stringify(Array.isArray(t)?t:[]))}function Iu(t){const e=String((t==null?void 0:t.local_upload_id)||Sa()),n=Ei().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),wa(n),h("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Pu(t){const e=Ei().filter(n=>(n==null?void 0:n.local_upload_id)!==t);wa(e)}async function Fu(){if(Rr||!(u!=null&&u.connected)||!L())return;const t=Ei();if(t.length!==0){Rr=!0;try{for(const e of t){if(!(u!=null&&u.connected)||!L())return;await _a(e),Pu(e.local_upload_id)}}catch(e){h("roster-data-pending-error",`Pending roster upload retry failed: ${S(e)}`,{ttlMs:p})}finally{Rr=!1}}}async function _a(t){if(!(u!=null&&u.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await _("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const n=await gl(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return h("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:p}),e}async function Gu(t={}){var e,n;if(!!L()){if(!(u!=null&&u.connected)){h("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}try{const r=await ul(t);if(!(r!=null&&r.ok)){h("applications-data-info",(r==null?void 0:r.message)||"No application records were found to process.",{ttlMs:p});return}if((Array.isArray((e=r==null?void 0:r.data)==null?void 0:e.records)?r.data.records:[]).length===0){h("applications-data-info",`No application records were found in ${r.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:p});return}const s={local_upload_id:Aa(),authenticated_username:pe(),authenticated_discord_user_id:((n=v==null?void 0:v.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await Ea(s)}catch(o){throw Uu(s),o}}catch(r){h("applications-data-error",S(r),{ttlMs:p})}}}function Aa(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function $i(){try{const t=window.localStorage.getItem(bs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function La(t){window.localStorage.setItem(bs,JSON.stringify(Array.isArray(t)?t:[]))}function Uu(t){const e=String((t==null?void 0:t.local_upload_id)||Aa()),n=$i().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),La(n),h("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Hu(t){const e=$i().filter(n=>(n==null?void 0:n.local_upload_id)!==t);La(e)}async function Vu(){if(Dr||!(u!=null&&u.connected)||!L())return;const t=$i();if(t.length!==0){Dr=!0;try{for(const e of t){if(!(u!=null&&u.connected)||!L())return;await Ea(e),Hu(e.local_upload_id)}}catch(e){h("applications-data-pending-error",`Pending application upload retry failed: ${S(e)}`,{ttlMs:p})}finally{Dr=!1}}}async function Ea(t){var i;if(!(u!=null&&u.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return h("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:p}),{ok:!0,sent_count:0,skipped_empty:!0};let n=0;for(const s of e){const o=await _("guildsync:eso-guild-application-message",{...t,record:s,recordKey:(s==null?void 0:s.recordKey)||"",message:Wu(s)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Backend rejected the application data payload. Application data was not cleared.");n+=1}const r=await pl(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return h("applications-data-sent",`Sent ${n} application record${n===1?"":"s"} to GuildSync backend.`,{ttlMs:p}),{ok:!0,sent_count:n}}function Wu(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),n=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",r=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",s=String(t.applicationText||"_No application text captured._"),o=Object.entries(t).filter(([a])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(a)).map(([a,l])=>`**${a}:** ${ju(l)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${n}** ${r} an application from **${i}**.`,"","**Application text:**","```",s.slice(0,1500),"```",o.length>0?"":null,o.length>0?"**Full captured record fields:**":null,...o].filter(a=>a!==null).join(`
`)}function ju(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function zu(t={}){await Gu(t)}function $a(){const t=ii(T),e=Lf(t,T),n=T!=="other",r=n&&Zt(T);return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <button id="openBankingHistoryButton" class="refresh-discord-button banking-history-button" type="button" ${L()?"":'disabled title="Login required to lookup banking history."'}>
            <span aria-hidden="true">\u2315</span>
            <span>Lookup Banking History</span>
          </button>
          <button id="openManualBiweeklyTicketButton" class="bank-export-button" type="button" ${L()?"":'disabled title="Login required to add manual entries."'}>
            <span aria-hidden="true">\uFF0B</span>
            <span>Add Manual Entry</span>
          </button>
          ${tf()}
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${c(Ka(As))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${et||!L()?"disabled":""} ${L()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${et?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${Nr("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${Nr("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${Nr("other","?","Other","All other deposits")}
        </div>

        ${ef(T)}

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
              ${t.length>0?t.map(i=>$f(i,n,r)).join(""):Rf(n,r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${c(Dt(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${T==="monthly"?`<div>Raffle Pot: <strong>${c(Dt(Math.floor(e.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${T==="biweekly"?`<div>Raffle Pot: <strong>${c(Dt(qa(e.amount)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${T==="biweekly"?`<div>Draws: <strong>${c(String(Ef(e.amount)))}</strong></div>`:""}
          ${n?`<div>Purchased: <strong>${c(ue(e.purchased))}</strong></div>${r?`<div>Bonus: <strong>${c(ue(e.bonus))}</strong></div>`:""}<div>Total Tickets: <strong>${c(ue(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${ht?Qu(ii(fe)):""}
    </div>
  `}function Yu(){return`
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
            <input id="bankingHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" autocomplete="off" placeholder="Start typing part of an account name..." value="${f(bt)}" />
          </label>
          ${Ku()}
        </div>

        ${ve?`<div class="discord-data-error">${c(ve)}</div>`:""}

        <div class="banking-history-results">
          <div class="roster-history-section-title">Banking History${ye?`: ${c(ye)}`:""}${ye?`<span class="banking-history-count">${c(String(de.length))} record${de.length===1?"":"s"} found</span>`:""}</div>
          ${Ju()}
        </div>
      </div>
    </div>
  `}function Ku(){return bt.trim()?ke&&U.length===0&&!ye?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">Searching...</div></div>':U.length===0&&!ye?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">No matching banking names found.</div></div>':U.length===0?"":`
    <div class="banking-history-autocomplete" role="listbox" aria-label="Banking history matches">
      ${U.map((t,e)=>`
        <button class="banking-history-autocomplete-option${e===ae?" is-selected":""}" type="button" data-banking-history-account="${f(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <small>${c(String(Number(t.record_count||t.recordCount||0)||0))} record${Number(t.record_count||t.recordCount||0)===1?"":"s"}</small>
        </button>
      `).join("")}
    </div>
  `:""}function Ju(){const t=de.some(e=>e.bonus_enabled);return ye?ke&&de.length===0?'<div class="roster-history-muted">Loading banking history...</div>':de.length===0?'<div class="roster-history-muted">No banking history found for this account.</div>':`
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
              <td>${c(mf((i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:""))}</td>
              <td>${c(gf(e.transaction_type||e.type||""))}</td>
              <td style="text-align:right;">${c(bf((o=(s=e.deposit_amount)!=null?s:e.depositAmount)!=null?o:e.amount))} \u{1FA99}</td>
              <td style="text-align:right;">${c(Cr(e.purchased_tickets))}</td>
              ${t?`<td style="text-align:right;">${e.bonus_enabled?`${c(ue(e.bonus_percent))}%`:""}</td><td style="text-align:right;">${e.bonus_enabled?c(Cr(e.bonus_tickets)):""}</td>`:""}
              <td style="text-align:right;">${c(Cr(e.total_tickets))}</td>
              <td class="banking-history-note-cell">${c(e.note||"")}</td>
            </tr>
          `}).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see banking history.</div>'}function Qu(t){const e=Zt(fe);return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${c(Se(fe))} Deposits</h3>
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
              ${t.length>0?t.map(n=>Xu(n)).join(""):Zu()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${c(Ba(t))}</textarea>
      </div>
    </div>
  `}function Xu(t){const e=Zt(fe);return`
    <tr data-bank-event-id="${f(t.eventId||"")}">
      <td>${c(t.displayName||"")}</td>
      <td>${c(String(Bi(t,fe)))}</td>
      <td>${c(String(t.purchasedTickets))}</td>
      ${e?`<td>${c(String(t.bonusPercent))}%</td><td>${c(String(t.bonusTickets))}</td>`:""}
      <td>${c(String(t.totalTickets))}</td>
      <td>${c(t.note||"")}</td>
    </tr>
  `}function Zu(){return`
    <tr>
      <td class="bank-empty-row" colspan="${Zt(fe)?7:5}">No deposits to export for ${c(Se(fe))}.</td>
    </tr>
  `}function ef(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=Mi(t),n=ir(t),r=n<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${f(Se(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${c(Se(t))} Raffle Period ${n===0?"(Current)":`(${Math.abs(n)} period${Math.abs(n)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${c(Wn(e.salesStart))} through ${c(Wn(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${c(Wn(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${r?"":"disabled"} aria-label="Next ${f(Se(t))} raffle period">\u203A</button>
    </div>
  `}function Nr(t,e,n,r){const i=T===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${f(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${c(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${c(n)}</span>
        <span class="bank-section-subtitle">${c(r)}</span>
      </span>
    </button>
  `}function tf(){if(!L())return"";const t=gr(),e=Tn(),n=Ra(),r=t>0,i=e>0,s=n>0;if(!r&&!i&&!s)return"";let o="",a="",l=!1;r?(o=`Check Out ${t} Deposit Mail`,a="checkout"):i?(l=!0,St?o=`Writing ${e} Pending Mail`:W.running?o=`${e} Mail Waiting for ESO Closure`:(Ha("render-pending-mail-button"),o=`${e} Mail Writing to Disk`)):(l=!0,o=`${n} Mail Ready to Send`);const m=r?"Check out new deposit mail. GuildSync will immediately try to write it, or hold it until ESO closes.":i?"Deposit mail is already checked out and will be written automatically after ESO closes.":"Deposit mail has been written to ESO SavedVariables and is ready for ESO to send it and write acknowledgements.",g=Hr||St,y=W.running?"ESO Running":"ESO Not Running",b=W.running?"eso-running":"eso-not-running";return`
    <button id="checkoutDepositMailButton" class="${`bank-export-button deposit-mail-button${l?" deposit-mail-status-only":""}`}" type="button" data-deposit-mail-action="${f(a)}" ${l||g?'aria-disabled="true"':""} title="${f(W.message||m)}" aria-label="${f(`${o}. ${m}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${c(o)}</span>
      <span aria-hidden="true">(</span><span class="deposit-mail-eso-status ${b}" aria-hidden="true">${c(y)}</span><span aria-hidden="true">)</span>
    </button>
  `}function Tn(){return Bn().reduce((t,e)=>t+en(e.records).length,0)}function nf(){const t=(v==null?void 0:v.user)||{};return new Set([pe(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function rf(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?nf().has(e):!1}function Ra(){return L()?Y.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="written_to_eso"&&rf(t)}).length:0}function gr(){return Y.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="unsent"}).length}function of(t){const e=String(t||"").trim();return Y.find(n=>String(n.eventId||"").trim()===e)||null}function Ri(t){const e=String(t||"other").toLowerCase(),n=["biweekly","monthly","other"],r=n.includes(e)?e:"other",i=n.filter(s=>s!==r);return[i[0]||"biweekly",r,i[1]||"other"]}function Di(t={},e="other"){const n=String(e||"other").toLowerCase(),r=Number(t==null?void 0:t.amount)||0;return n===String((t==null?void 0:t.type)||"").toLowerCase()?Number(t==null?void 0:t.ticketAmount)||0:n==="biweekly"?Math.floor(r/500):n==="monthly"?Math.floor(r/2500):0}function Da(t={},e="other",n=""){const r=String(t.type||"other").toLowerCase(),i=Se(r),s=Se(e),o=pe()||"Unknown user",a=[`Moved from ${i} to ${s} by ${o}.`,`Ref ${t.eventId||""}`],l=String(n||"").trim();return l&&a.push(`Reason: ${l}`),a.join(`
`)}function Ma(t){const e=of(t);if(!e){h("banking-move-missing","Could not find the selected banking entry.",{ttlMs:p});return}const n=String(e.type||"other").toLowerCase();Ee=e,O={targetType:n,note:"",tickets:String(Di(e,n))},Le="",Ot=!1,Jt=!0,d()}function rr(){Jt=!1,Ot=!1,Le="",Ee=null,O={targetType:"other",note:"",tickets:""},d()}function sf(){const t=Ee||{},e=String(t.type||"other").toLowerCase(),n=Se(e),r=Ri(e);let i=String(O.targetType||r[0]||"other").toLowerCase();r.includes(i)||(i=r[0]||"other",O.targetType=i);const s=Da(t,i,O.note);return`
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
            <div><strong>Amount:</strong> ${c(Dt(t.amount))} \u{1FA99}</div>
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
                    <strong>${c(Se(o))}</strong>
                    <span>${o===e?"Current / restore original values":`${c(String(Di(t,o)))} tickets`}</span>
                  </button>
                `).join("")}
              </div>
            </div>
          </div>

          <div class="banking-move-compact-row">
            <label class="manual-ticket-count-field banking-move-ticket-field">
              <span>Tickets Awarded</span>
              <input id="bankingMoveTicketsInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${f(O.tickets)}" ${i==="other"?"disabled":""} />
            </label>

            <label class="manual-ticket-note-field banking-move-note-field">
              <span>Move Note</span>
              <textarea id="bankingMoveNoteInput" class="discord-search-input manual-ticket-note-input banking-move-note-input" rows="1" placeholder="Optional reason for this move">${c(O.note)}</textarea>
            </label>
          </div>

          <div class="roster-history-muted banking-move-generated-note">${c(s).replace(/\n/g,"<br>")}</div>

          <div class="manual-ticket-actions banking-move-actions">
            <button id="saveBankingMoveButton" class="refresh-discord-button banking-move-submit-button" type="button" ${Ot||i===e?"disabled":""}>${Ot?"MOVING...":i===e?"SELECT A SIDE TO MOVE":"MOVE"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function af(){var n,r,i,s;if(!Jt)return;(n=document.querySelector("#closeBankingMoveDialogButton"))==null||n.addEventListener("click",()=>rr());function t(o){const a=String(o||"other").toLowerCase(),l=String((Ee==null?void 0:Ee.type)||"other").toLowerCase(),m=Ri(l);O.targetType=m.includes(a)?a:l,O.tickets=String(Di(Ee||{},O.targetType)),d()}document.querySelectorAll("[data-banking-move-target]").forEach(o=>{o.addEventListener("click",()=>t(o.dataset.bankingMoveTarget))}),(r=document.querySelector("#bankingMoveTicketsInput"))==null||r.addEventListener("input",o=>{const a=String(o.target.value||"").replace(/\D/g,"");o.target.value!==a&&(o.target.value=a),O.tickets=a}),(i=document.querySelector("#bankingMoveNoteInput"))==null||i.addEventListener("input",o=>{O.note=o.target.value||"";const a=document.querySelector(".banking-move-generated-note");a&&(a.innerText=Da(Ee||{},O.targetType||"other",O.note))}),(s=document.querySelector("#saveBankingMoveButton"))==null||s.addEventListener("click",()=>cf());const e=document.querySelector(".roster-history-overlay");e&&e.addEventListener("click",o=>{o.target===e&&rr()})}async function cf(){const t=Ee;if(!(t!=null&&t.eventId)){Le="No banking entry is selected.",d();return}const e=String(t.type||"other").toLowerCase(),n=Ri(e),r=String(O.targetType||n[0]||"other").toLowerCase();if(!n.includes(r)||r===e){Le="Select one of the side destinations before moving this entry.",d();return}const i=r==="other"?0:Math.floor(Number(String(O.tickets||"").trim()||0));if(!Number.isFinite(i)||i<0){Le="Tickets must be zero or greater.",d();return}Ot=!0,Le="",d();try{const s=await _("guildsync:move-banking-entry",{event_id:t.eventId,target_type:r,tickets:i,note:O.note||""},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to move banking entry.");rr(),await Ae({silent:!0}),h("banking-entry-moved",s.message||"Banking entry moved.",{ttlMs:p})}catch(s){Ot=!1,Le=S(s),d()}}function lf(){if(!L()){h("banking-history-login-required","Login required to lookup banking history.",{ttlMs:p});return}Qt=!0,bt="",U=[],de=[],ye="",ke=!1,ve="",ae=-1,clearTimeout($t),d(),B("bankingHistorySearchInput")}function df(){Qt=!1,ke=!1,ve="",clearTimeout($t)}function uf(){if(!Qt)return;const t=document.querySelector("#bankingHistorySearchInput");t&&(t.addEventListener("input",e=>{if(bt=e.target.value||"",ae=-1,ye="",de=[],!bt.trim()){clearTimeout($t),ve="",U=[],ke=!1,d(),B("bankingHistorySearchInput");return}clearTimeout($t),$t=setTimeout(()=>{ff({keepFocus:!0})},250)}),t.addEventListener("keydown",e=>{if(e.key==="ArrowDown"||e.key==="ArrowUp"){if(U.length===0)return;e.preventDefault();const r=e.key==="ArrowDown"?1:-1;ae=((ae<0?0:ae)+r+U.length)%U.length,d(),B("bankingHistorySearchInput");return}if(e.key!=="Enter")return;e.preventDefault();const n=U[ae>=0?ae:0];n!=null&&n.account_name&&Uo(n.account_name)})),document.querySelectorAll("[data-banking-history-account]").forEach(e=>{e.addEventListener("click",()=>{Uo(e.dataset.bankingHistoryAccount||"")})})}async function ff(t={}){const e=bt.trim();if(!e){ve="",U=[],ae=-1,ye="",de=[],ke=!1,d(),t.keepFocus&&B("bankingHistorySearchInput");return}ke=!0,ve="",U=[],ae=-1,d(),t.keepFocus&&B("bankingHistorySearchInput");try{const n=await _("guildsync:request-banking-history-matches",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search banking history.");U=hf(n.matches),ae=U.length>0?0:-1}catch(n){ve=S(n)}finally{ke=!1,d(),t.keepFocus&&B("bankingHistorySearchInput")}}async function Uo(t){const e=String(t||"").trim();if(!!e){clearTimeout($t),ye=e,bt=e,U=[],de=[],ke=!0,ve="",d();try{const n=await _("guildsync:request-banking-history-records",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load banking history.");de=pf(n.records)}catch(n){ve=S(n)}finally{ke=!1,d()}}}function hf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s;return{account_name:String(e.account_name||e.accountName||"").trim(),record_count:Number((r=(n=e.record_count)!=null?n:e.recordCount)!=null?r:0)||0,last_event_timestamp:(s=(i=e.last_event_timestamp)!=null?i:e.lastEventTimestamp)!=null?s:""}}).filter(e=>e.account_name):[]}function pf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s,o,a,l,m,g,y,b,k,$,q,M,K,ne,re,tn;return{event_id:String(e.event_id||e.eventId||"").trim(),transaction_type:String(e.transaction_type||e.transactionType||e.type||"").trim(),event_timestamp:(i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:"",deposit_amount:(a=(o=(s=e.deposit_amount)!=null?s:e.depositAmount)!=null?o:e.amount)!=null?a:"",ticket_quantity:(g=(m=(l=e.ticket_quantity)!=null?l:e.ticketQuantity)!=null?m:e.ticketAmount)!=null?g:"",purchased_tickets:($=(k=(b=(y=e.purchasedTickets)!=null?y:e.ticket_quantity)!=null?b:e.ticketQuantity)!=null?k:e.ticketAmount)!=null?$:0,bonus_tickets:(q=e.bonusTickets)!=null?q:0,bonus_percent:(M=e.bonusPercent)!=null?M:0,bonus_enabled:e.bonusEnabled===!0,total_tickets:(tn=(re=(ne=(K=e.totalTickets)!=null?K:e.ticket_quantity)!=null?ne:e.ticketQuantity)!=null?re:e.ticketAmount)!=null?tn:0,note:String(e.note||"").trim()}}).sort((e,n)=>{const r=Number(e.event_timestamp)||0,i=Number(n.event_timestamp)||0;return r!==i?r-i:String(e.event_id).localeCompare(String(n.event_id),void 0,{numeric:!0})}):[]}function mf(t){const e=Number(t);if(!e)return"";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t);const r=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0"),s=String(n.getFullYear()),o=String(n.getHours()).padStart(2,"0"),a=String(n.getMinutes()).padStart(2,"0"),l=String(n.getSeconds()).padStart(2,"0");return`${r}/${i}/${s} ${o}:${a}:${l}`}function gf(t){const e=String(t||"").trim().toLowerCase();return e==="monthly"?"50/50":e==="biweekly"?"Bi-Weekly":e==="other"?"Other":e?e.replace(/\b\w/g,n=>n.toUpperCase()):""}function bf(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":Dt(e)}function Cr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":ue(e)}function Ta(){if(R!=="more")return;af(),uf(),document.querySelectorAll("[data-bank-entry-move]").forEach(a=>{a.addEventListener("click",()=>Ma(a.dataset.bankEntryMove||""))}),document.querySelectorAll("[data-bank-section]").forEach(a=>{a.addEventListener("click",()=>{T=a.dataset.bankSection||"biweekly",d()})}),document.querySelectorAll("[data-bank-export-section]").forEach(a=>{a.addEventListener("click",()=>{fe=(a.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",ht=!0,d()})}),document.querySelectorAll("[data-bank-period-move]").forEach(a=>{a.addEventListener("click",()=>{vf(a.dataset.bankPeriodMove||""),d()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{ht=!1,d()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>yf());const n=document.querySelector(".bank-export-overlay");n&&n.addEventListener("click",a=>{a.target===n&&(ht=!1,d())});const r=document.querySelector("#openBankingHistoryButton");r&&r.addEventListener("click",()=>lf());const i=document.querySelector("#openManualBiweeklyTicketButton");i&&i.addEventListener("click",async()=>{if(!L()){h("manual-ticket-login-required","Login required to add manual entries.",{ttlMs:p});return}Be=!0,J="",Xt=D.accountName||"",le=!1,G=-1,j.length===0&&(u==null?void 0:u.connected)&&L()&&await Mn({silent:!0}),d()});const s=document.querySelector("#checkoutDepositMailButton");s&&s.addEventListener("click",()=>{s.dataset.depositMailAction==="checkout"&&s.getAttribute("aria-disabled")!=="true"&&Ua()});const o=document.querySelector("#refreshBankingDataButton");o&&o.addEventListener("click",()=>{if(!L()){h("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:p});return}Pa({key:"banking"})})}function Ba(t){const e=Zt(fe),n=[["Guildie Name","Deposit Amount","Purchased Tickets",...e?["Bonus %","Bonus Tickets"]:[],"Total Tickets","Note"]];for(const r of t)n.push([r.displayName||"",String(Bi(r,fe)),String(r.purchasedTickets),...e?[`${r.bonusPercent}%`,String(r.bonusTickets)]:[],String(r.totalTickets),r.note||""]);return n.map(r=>r.map(br).join("	")).join(`
`)}function br(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function yr(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly","readonly"),n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.width="1px",n.style.height="1px",n.style.opacity="0",n.style.pointerEvents="none",n.style.zIndex="-1",document.body.appendChild(n),n.focus(),n.select(),n.setSelectionRange(0,n.value.length);let r=!1;try{r=document.execCommand("copy")}finally{document.body.removeChild(n)}return r}async function yf(){const t=ii(fe),e=Ba(t);if(await yr(e)){h("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#bankingExportTsv");r&&(r.focus(),r.select()),h("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:p})}function ii(t){return Y.filter(e=>e.type===t).filter(e=>kf(t,e)).sort((e,n)=>(Number(e.time)||0)-(Number(n.time)||0))}function kf(t,e){if(t==="other")return!0;const n=Number(e==null?void 0:e.time)||0;if(n<=0)return!1;const r=Mi(t);return n>=r.salesStart&&n<=r.salesEnd}function ir(t){return Number(Yr[t])||0}function vf(t){if(T!=="biweekly"&&T!=="monthly")return;const e=ir(T);if(t==="previous"){Yr[T]=e-1;return}t==="next"&&e<0&&(Yr[T]=e+1)}function Mi(t){const e=Math.floor(Date.now()/1e3);if(t==="monthly"){const i=Sf(e,ir(t));return{salesStart:Ca(i)+1,salesEnd:i,raffleTime:i+Zn}}const n=tt;let r=Na(e);return r+=ir(t)*n,{salesStart:r-n+1,salesEnd:r,raffleTime:r+Zn}}function Na(t){const e=tt;let n=Il;for(;n-e>t;)n-=e;for(;n<t;)n+=e;return n}function Sf(t,e=0){let n=wf(t),r=Number(e)||0;for(;r<0;)n=Ca(n),r+=1;for(;r>0;)n=_f(n),r-=1;return n}function wf(t){let e=Na(t);for(;!Ti(e);)e+=tt;return e}function Ca(t){let e=t-tt;for(;!Ti(e);)e-=tt;return e}function _f(t){let e=t+tt;for(;!Ti(e);)e+=tt;return e}function Ti(t){const e=t+Zn,n=t+tt+Zn;return Ho(e)!==Ho(n)}function Ho(t){var s,o;const e=new Date(Number(t||0)*1e3);if(Number.isNaN(e.getTime()))return"";const n=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit"}).formatToParts(e),r=((s=n.find(a=>a.type==="year"))==null?void 0:s.value)||"",i=((o=n.find(a=>a.type==="month"))==null?void 0:o.value)||"";return`${r}-${i}`}function Af(t=T){const e=String(t||"").toLowerCase();return e!=="monthly"&&e!=="biweekly"?0:"auto"}function Bi(t={},e=T){const n=Number(t.amount)||0;if(!Af(e))return n;const r=Math.abs(Math.trunc(n))%10,i=r===1||r===3?r:0;return i>0&&n>i?n-i:n}function Lf(t,e=T){return t.reduce((n,r)=>(n.amount+=Bi(r,e),n.purchased+=Number(r.purchasedTickets)||0,n.bonus+=Number(r.bonusTickets)||0,n.tickets+=Number(r.totalTickets)||0,n),{amount:0,purchased:0,bonus:0,tickets:0})}function qa(t){const e=Math.ceil((Number(t)||0)/2);return e<=0?0:Math.ceil(e/2e5)*2e5}function Ef(t){const e=qa(t);return e>0?e/2e5:0}function Zt(t){var n;if(t!=="biweekly"&&t!=="monthly")return!1;const{salesEnd:e}=Mi(t);return((n=xt.find(r=>r.type===t&&r.salesEnd===e))==null?void 0:n.enabled)===!0}function $f(t,e=!0,n=Zt(T)){return`
    <tr data-bank-event-id="${f(t.eventId||"")}">
      <td>${c(t.note||t.eventId||"")}</td>
      <td>${c(Wn(t.time))}</td>
      <td>${c(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${c(Dt(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td>${c(ue(t.purchasedTickets))}</td>${n?`<td>${c(ue(t.bonusPercent))}%</td><td>${c(ue(t.bonusTickets))}</td>`:""}<td><strong class="bank-ticket-amount">${c(ue(t.totalTickets))}</strong></td>`:""}
      <td><button class="bank-entry-move-button" type="button" data-bank-entry-move="${f(t.eventId||"")}">Move</button></td>
    </tr>
  `}function Rf(t=!0,e=!1){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?e?"9":"7":"5"}">No ${c(Se(T))} deposits found for this ${T==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function Se(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function Wn(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Dt(t){return(Number(t)||0).toLocaleString()}function ue(t){return(Number(t)||0).toLocaleString()}function en(t){return Array.isArray(t)?t.map(e=>{var r,i,s,o,a,l,m,g,y,b,k,$,q,M,K,ne,re,tn,Ui,Hi,Vi,Wi,ji,zi,Yi,Ki,Ji,Qi,Xi,Zi,eo,to,no,ro,io,oo,so,ao,co,lo,uo,fo,ho,po,mo,go,bo;const n=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:n==="monthly"||n==="biweekly"||n==="other"?n:"other",eventId:String((i=(r=e==null?void 0:e.eventId)!=null?r:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((o=(s=e==null?void 0:e.time)!=null?s:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((l=(a=e==null?void 0:e.displayName)!=null?a:e==null?void 0:e.display_name)!=null?l:"").trim(),amount:Number((m=e==null?void 0:e.amount)!=null?m:0)||0,ticketAmount:Number((y=(g=e==null?void 0:e.ticketAmount)!=null?g:e==null?void 0:e.ticket_amount)!=null?y:0)||0,purchasedTickets:Number((k=(b=e==null?void 0:e.purchasedTickets)!=null?b:e==null?void 0:e.ticketAmount)!=null?k:0)||0,bonusTickets:Number(($=e==null?void 0:e.bonusTickets)!=null?$:0)||0,bonusPercent:Number((q=e==null?void 0:e.bonusPercent)!=null?q:0)||0,bonusEnabled:(e==null?void 0:e.bonusEnabled)===!0,totalTickets:Number((K=(M=e==null?void 0:e.totalTickets)!=null?M:e==null?void 0:e.ticketAmount)!=null?K:0)||0,note:String((ne=e==null?void 0:e.note)!=null?ne:"").trim(),dataSource:String((tn=(re=e==null?void 0:e.dataSource)!=null?re:e==null?void 0:e.data_source)!=null?tn:"").trim(),emailRequested:Boolean((Ui=e==null?void 0:e.emailRequested)!=null?Ui:e==null?void 0:e.email_requested),mailStatus:String((Vi=(Hi=e==null?void 0:e.mailStatus)!=null?Hi:e==null?void 0:e.mail_status)!=null?Vi:"").trim(),mailRequestId:String((ji=(Wi=e==null?void 0:e.mailRequestId)!=null?Wi:e==null?void 0:e.mail_request_id)!=null?ji:"").trim(),mailBatchId:String((Yi=(zi=e==null?void 0:e.mailBatchId)!=null?zi:e==null?void 0:e.mail_batch_id)!=null?Yi:"").trim(),checkedOutBy:String((Ji=(Ki=e==null?void 0:e.checkedOutBy)!=null?Ki:e==null?void 0:e.checked_out_by)!=null?Ji:"").trim(),checkedOutAt:String((Xi=(Qi=e==null?void 0:e.checkedOutAt)!=null?Qi:e==null?void 0:e.checked_out_at)!=null?Xi:"").trim(),checkoutExpiresAt:String((eo=(Zi=e==null?void 0:e.checkoutExpiresAt)!=null?Zi:e==null?void 0:e.checkout_expires_at)!=null?eo:"").trim(),writtenToEsoAt:String((no=(to=e==null?void 0:e.writtenToEsoAt)!=null?to:e==null?void 0:e.written_to_eso_at)!=null?no:"").trim(),sentAt:String((io=(ro=e==null?void 0:e.sentAt)!=null?ro:e==null?void 0:e.sent_at)!=null?io:"").trim(),failedReason:String((so=(oo=e==null?void 0:e.failedReason)!=null?oo:e==null?void 0:e.failed_reason)!=null?so:"").trim(),recipient:String((uo=(lo=(co=(ao=e==null?void 0:e.recipient)!=null?ao:e==null?void 0:e.account_name)!=null?co:e==null?void 0:e.displayName)!=null?lo:e==null?void 0:e.display_name)!=null?uo:"").trim(),subject:String((po=(ho=(fo=e==null?void 0:e.subject)!=null?fo:e==null?void 0:e.mailSubject)!=null?ho:e==null?void 0:e.mail_subject)!=null?po:"").trim(),body:String((bo=(go=(mo=e==null?void 0:e.body)!=null?mo:e==null?void 0:e.mailBody)!=null?go:e==null?void 0:e.mail_body)!=null?bo:"").trim()}}):[]}function Df(t){const e=new Map;for(const n of Y)n.eventId&&e.set(n.eventId,n);for(const n of t)!n.eventId||e.set(n.eventId,n);Y=Array.from(e.values()).sort((n,r)=>(Number(r.time)||0)-(Number(n.time)||0))}function Mf(t){t.querySelectorAll("[data-open-member-link-dialog]").forEach(e=>{e.addEventListener("click",()=>_i(e.dataset.openMemberLinkDialog||"",e.dataset.memberLinkValue||""))}),t.querySelectorAll("[data-bank-entry-move]").forEach(e=>{e.addEventListener("click",()=>Ma(e.dataset.bankEntryMove||""))})}function xa(t,e,n=!1){const r=document.querySelector(t);if(!r)return;const i=bi(r),s=document.activeElement,o=s&&"selectionStart"in s?[s.selectionStart,s.selectionEnd]:null,a=document.createElement("template");a.innerHTML=e;const l=a.content.firstElementChild,m=n?".bank-deposit-table":".discord-member-table";yo(r.querySelector(`${m} tbody`),l.querySelector(`${m} tbody`),n?"data-bank-event-id":"data-discord-user-id",Mf),ln(r.querySelector(`${m} thead`),l.querySelector(`${m} thead`)),dn(r.querySelector(".discord-data-actions .discord-last-refresh"),l.querySelector(".discord-data-actions .discord-last-refresh"));const g=n?"#refreshBankingDataButton":"#refreshDiscordDataButton",y=r.querySelector(g),b=l.querySelector(g);if(y&&b&&(y.disabled=b.disabled,dn(y.lastElementChild,b.lastElementChild)),n){ln(r.querySelector(".bank-deposits-summary-row"),l.querySelector(".bank-deposits-summary-row")),ln(r.querySelector(".bank-raffle-period-content"),l.querySelector(".bank-raffle-period-content"));const k=r.querySelector("#checkoutDepositMailButton"),$=l.querySelector("#checkoutDepositMailButton");if(!$)k==null||k.remove();else if(!k||!k.isEqualNode($)){const re=$.cloneNode(!0);re.addEventListener("click",()=>{re.dataset.depositMailAction==="checkout"&&re.getAttribute("aria-disabled")!=="true"&&Ua()}),k?k.replaceWith(re):r.querySelector(".discord-data-actions").insertBefore(re,r.querySelector("[data-bank-export-section]"))}yo(r.querySelector("#bankingExportGrid tbody"),l.querySelector("#bankingExportGrid tbody"),"data-bank-event-id"),ln(r.querySelector("#bankingExportGrid thead"),l.querySelector("#bankingExportGrid thead")),dn(r.querySelector(".bank-export-count"),l.querySelector(".bank-export-count"));const q=r.querySelector("#copyBankingExportGridButton"),M=l.querySelector("#copyBankingExportGridButton");q&&M&&(q.disabled=M.disabled);const K=r.querySelector("#bankingExportTsv"),ne=l.querySelector("#bankingExportTsv");K&&ne&&K.value!==ne.value&&(K.value=ne.value)}else{dn(r.querySelector(".discord-results-count"),l.querySelector(".discord-results-count"));const k=r.querySelector("#discordRoleFilter"),$=l.querySelector("#discordRoleFilter");if(k&&$&&k.innerHTML!==$.innerHTML){const q=k.value;k.innerHTML=$.innerHTML,k.value=q}}(s==null?void 0:s.isConnected)&&document.activeElement!==s&&(s.focus({preventScroll:!0}),o&&o[0]!==null&&s.setSelectionRange(...o)),i()}function Ft(){R==="discord-members"&&document.querySelector(".discord-member-panel")&&xa(".discord-member-panel",Ms())}function Oa(t){const e=xt.find(n=>`${n.type}:${n.salesEnd}`===Te);if(t.bonusSettings&&(F=t.bonusSettings),Array.isArray(t.bonusRaffles)){const n=[...t.bonusRaffles];e&&!n.some(r=>`${r.type}:${r.salesEnd}`===Te)&&n.push(e),xt=n}}function Tf(){if(R!=="settings"||!F)return;const t=document.querySelector(".raffle-bonus-card");if(!t)return;const e=bi(t.parentElement),n=document.createElement("template");n.innerHTML=Os();const r=n.content.firstElementChild;if(t.querySelector("#raffleBonusSettingsForm")){const i=t.querySelector("#bonusRafflePicker"),s=r.querySelector("#bonusRafflePicker");if(i&&s&&i.innerHTML!==s.innerHTML){const o=i.value;i.innerHTML=s.innerHTML,i.value=o}if(!ce&&(ge==null?void 0:ge.raffle)!==Te){dn(t.querySelector("[data-bonus-settings-source]"),r.querySelector("[data-bonus-settings-source]"));const o=t.querySelectorAll(".raffle-bonus-tiers"),a=r.querySelectorAll(".raffle-bonus-tiers");o.forEach((l,m)=>{const g=a[m];!g||(l.querySelectorAll("input").length!==g.querySelectorAll("input").length?ln(l,g):g.querySelectorAll("input").forEach(y=>{const b=Array.from(l.querySelectorAll("input")).find(k=>k.name===y.name);!b||(b.type==="checkbox"?b.checked!==y.checked&&(b.checked=y.checked):b.value!==y.value&&(b.value=y.value))}))})}}else{const i=r.cloneNode(!0);t.replaceWith(i),xs(i),Qo(ws,{refresh:!0,root:i})}e()}function ee(){Tf(),R==="more"&&document.querySelector(".bank-deposits-panel")&&xa(".bank-deposits-panel",$a(),!0)}function Ia(){As=new Date().toISOString()}async function Bf(t={}){!(t!=null&&t.ok)||(Y=en(t.entries),Oa(t),Ia(),R==="more"&&ee(),h("banking-data-updated",`Banking data updated. Loaded ${Y.length} deposit record${Y.length===1?"":"s"}.`,{ttlMs:p}))}async function Ae(t={}){const e=Boolean(t.silent),n=Boolean(t.background);if(!(u!=null&&u.connected)){e||h("banking-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}n||(et=!0,ee());try{const r=await _("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");Y=en(r.entries),Oa(r),Ia(),e||h("banking-data",`Loaded ${Y.length} banking deposit record${Y.length===1?"":"s"}.`,{ttlMs:p})}catch(r){e||h("banking-data-error",S(r),{ttlMs:p})}finally{n||(et=!1),ee()}}async function Vo(){!(u!=null&&u.connected)||!L()||et||(await Ae({silent:!0,background:!0}),gr()<=0&&Tn()>0&&(W.running?ee():Ha("availability-refresh")))}function Nf(){vt&&clearInterval(vt),Vo(),vt=window.setInterval(Vo,Cl)}function Cf(){vt&&(clearInterval(vt),vt=null)}async function qf(t={}){if(!!L()){if(!(u!=null&&u.connected)){h("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:p});return}try{const e=await dl(t);if(!(e!=null&&e.ok))return;const n=Array.isArray(e.ackEntries)?e.ackEntries:[];if(n.length===0)return;const r=await _("guildsync:mark-deposit-mail-sent",{mail_ack:n,mail_request_ids:n.map(o=>(o==null?void 0:o.mail_request_id)||(o==null?void 0:o.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(r.mail_request_ids)?r.mail_request_ids:Array.isArray(r.mailRequestIds)?r.mailRequestIds:[];if(i.length===0){h("deposit-mail-ack-none",r.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:p});return}const s=await cl(i);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");h("deposit-mail-ack-sent",s.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:p}),await Ae({silent:!0})}catch(e){h("deposit-mail-ack-error",S(e),{ttlMs:p})}}}async function xf(){if(!Mr){Mr=!0;try{const t=await bl();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&h("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:p})}catch(t){h("deposit-mail-ack-cleanup-error",S(t),{ttlMs:p})}finally{Mr=!1}}}async function Pa(t={}){var e,n;if(!!L()){if(!(u!=null&&u.connected)){h("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}et=!0,ee();try{const r=await fl(t);if(!(r!=null&&r.ok)){h("banking-data-pending",(r==null?void 0:r.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:p});return}const i=en((e=r==null?void 0:r.data)==null?void 0:e.entries);Df(i);const s=new Date().toISOString(),o={local_upload_id:Va(),authenticated_username:pe(),authenticated_discord_user_id:((n=v==null?void 0:v.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:s,data:r.data||{}};try{await ja(o)}catch(a){throw Ff(o),a}await Ae({silent:!0})}catch(r){h("banking-data-error",S(r),{ttlMs:p})}finally{et=!1,ee()}}}function Fa(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Bn(){try{const t=window.localStorage.getItem(ms),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Ga(t){window.localStorage.setItem(ms,JSON.stringify(Array.isArray(t)?t:[]))}function Of(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||Fa()),n=Bn().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);n.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),Ga(n)}function Wo(t){const e=String(t||"").trim();if(!e)return;const n=Bn().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);Ga(n)}async function Ua(){if(!L()){h("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:p});return}if(!(u!=null&&u.connected)){h("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:p});return}const t=Bn(),e=gr();if(t.length>0&&e<=0){await Gt();return}Hr=!0,ee();try{const n=await _("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail checkout request.");const r=en(n.records);if(r.length===0){h("deposit-mail-none",n.message||"No unsent deposit mail is available.",{ttlMs:p}),await Ae({silent:!0});return}const i={mail_batch_id:n.mail_batch_id||n.mailBatchId||Fa(),checked_out_by:n.checked_out_by||n.checkedOutBy||pe(),checked_out_at:new Date().toISOString(),records:r};Of(i),await Gt()}catch(n){h("deposit-mail-error",S(n),{ttlMs:p})}finally{Hr=!1,ee()}}function Ha(t=""){wt||St||!L()||Tn()<=0||W.running||(wt=window.setTimeout(()=>{wt=null,Gt()},100))}async function Gt(){if(wt&&(window.clearTimeout(wt),wt=null),St||!L())return;const t=Bn();if(t.length!==0){if(await oi({silent:!0}),W.running){h("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:p}),ee();return}St=!0,ee();try{for(const e of t){const n=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),r=en(e==null?void 0:e.records);if(r.length===0){Wo(n);continue}const i=await Dl(r);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(u!=null&&u.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const s=await _("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:n,event_ids:i.eventIds||r.map(o=>o.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend did not confirm deposit mail was marked written_to_eso.");Wo(n),h("deposit-mail-written",i.message||`Wrote ${r.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:p})}await Ae({silent:!0})}catch(e){h("deposit-mail-write-error",S(e),{ttlMs:p})}finally{St=!1,ee()}}}async function oi(t={}){try{const e=Boolean(W.running),n=await yl();W={running:Boolean(n==null?void 0:n.running),message:String((n==null?void 0:n.message)||"")},W.running||await xf(),e&&!W.running&&(h("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:p}),await Gt()),e!==W.running&&ee()}catch(e){t.silent||h("eso-status-error",S(e),{ttlMs:p})}}function If(){kt&&clearInterval(kt),oi({silent:!0}).then(()=>{!W.running&&Tn()>0&&Gt()}),kt=window.setInterval(()=>oi({silent:!0}),Nl)}function Pf(){kt&&(clearInterval(kt),kt=null)}function Va(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Ni(){try{const t=window.localStorage.getItem(ps),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Wa(t){window.localStorage.setItem(ps,JSON.stringify(Array.isArray(t)?t:[]))}function Ff(t){const e=String((t==null?void 0:t.local_upload_id)||Va()),n=Ni().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Wa(n),h("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Gf(t){const e=Ni().filter(n=>(n==null?void 0:n.local_upload_id)!==t);Wa(e)}async function Uf(){if($r||!(u!=null&&u.connected)||!L())return;const t=Ni();if(t.length!==0){$r=!0;try{for(const e of t){if(!(u!=null&&u.connected)||!L())return;await ja(e),Gf(e.local_upload_id)}}catch(e){h("banking-data-pending-error",`Pending banking upload retry failed: ${S(e)}`,{ttlMs:p})}finally{$r=!1}}}async function ja(t){if(!(u!=null&&u.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await _("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const n=await ml(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return h("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:p}),e}function za(){if(R!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>Hf());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{Nt=!0,Me="",d(),B("discordHistorySearchInput")});const n=document.querySelector("#discordMemberSearch");n&&n.addEventListener("input",o=>{Kn=o.target.value||"",Vr=o.target.selectionStart,Wr=o.target.selectionEnd,d({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Yf(o.dataset.discordSortColumn||"username")})});const r=document.querySelector("#discordRoleFilter");r&&r.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(_t.add(a),d())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRoleFilter||"";_t.delete(a),d()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(At.add(a),d())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeDiscordLinkStatusFilter||"";At.delete(a),d()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>_i(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{Kn="",_t.clear(),At.clear(),d()})}async function Hf(){var t,e;if(!(u!=null&&u.connected)){h("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:p});return}Yn=!0,Ft(),h("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const n=await _("guildsync:request-discord-data-refresh",{requested_by:((t=v==null?void 0:v.user)==null?void 0:t.display_name)||((e=v==null?void 0:v.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to request Discord data refresh.");h("discord-refresh-requested",n.message||"Discord data refresh completed.",{ttlMs:p}),await Ci({silent:!0})}catch(n){h("discord-refresh-error",S(n),{ttlMs:p})}finally{Yn=!1,Ft()}}async function Vf(){if(!(u!=null&&u.connected))return;const t=await _("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(dr=t.value||null)}async function Wf(t={}){if(!!(t!=null&&t.ok)){z=qi(t.members),lr=xi(t.roles),t.last_refresh&&(dr=t.last_refresh);try{await Vf()}catch{}R==="discord-members"&&Ft(),h("discord-data-updated",`Discord data updated. Loaded ${z.length} member record${z.length===1?"":"s"}.`,{ttlMs:p})}}async function Ci(t={}){const e=Boolean(t.silent);if(!(u!=null&&u.connected)){h("discord-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}gn=!0,Ft();try{const[n,r]=await Promise.all([_("guildsync:request-discord-data-date",{}),_("guildsync:request-discord-member-dataJSON",{})]);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord refresh date.");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord member data.");dr=n.value||null,z=qi(r.members),lr=xi(r.roles),e||h("discord-data",`Loaded ${z.length} Discord member record${z.length===1?"":"s"}.`,{ttlMs:p})}catch(n){h("discord-data-error",S(n),{ttlMs:p})}finally{gn=!1,Ft()}}function _(t,e={},n=3e4){return new Promise((r,i)=>{if(!(u!=null&&u.connected)){i(new Error("GuildSync websocket is not connected."));return}let s=!1;const o=window.setTimeout(()=>{s||(s=!0,i(new Error(`${t} timed out.`)))},n);u.emit(t,e,a=>{s||(s=!0,window.clearTimeout(o),r(a))})})}function qi(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(Ya).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,n)=>wn(e).localeCompare(wn(n),void 0,{sensitivity:"base"})):[]}function xi(t){if(!Array.isArray(t))return[];const e=new Map;for(const n of t){const r=Ya(n);if(!r)continue;const i=r.role_id||pn(r.role_name);i&&!e.has(i)&&e.set(i,r)}return Array.from(e.values()).sort((n,r)=>String(n.role_name||"").localeCompare(String(r.role_name||""),void 0,{sensitivity:"base"}))}function Ya(t){var i,s;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),n=String(t.role_name||t.name||"Unnamed Role").trim(),r=(s=(i=t.role_color)!=null?i:t.color)!=null?s:null;return{role_id:e,role_name:n||"Unnamed Role",role_color:r}}function jf(){const t=Kn.trim().toLowerCase(),e=Array.from(_t),n=z.filter(r=>{if(t&&![r.username,r.global_name,r.server_nickname,r.discord_id,...r.roles.map(s=>s.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(r.roles.map(s=>s.role_name));if(!e.every(s=>i.has(s)))return!1}return!!Cs(At,ud(r))});return zf(n)}function zf(t){const e=st==="desc"?-1:1;return[...t].sort((n,r)=>{const i=jo(n,bn),s=jo(r,bn),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:wn(n).localeCompare(wn(r),void 0,{sensitivity:"base",numeric:!0})})}function jo(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(n=>n.role_name||"").filter(Boolean).sort((n,r)=>n.localeCompare(r,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function Yf(t){const n=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";bn===n?st=st==="asc"?"desc":"asc":(bn=n,st="asc"),d()}function xn(t,e){const n=bn===t,r=st==="asc"?"ascending":"descending",i=n?st==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${n?r:"none"}">
      <button
        class="discord-sort-header${n?" active":""}"
        type="button"
        data-discord-sort-column="${f(t)}"
        title="Sort ${f(e)} ${n&&st==="asc"?"descending":"ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function Kf(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(Vr)?Vr:t.value.length,n=Number.isInteger(Wr)?Wr:e;t.setSelectionRange(e,n)}}function Jf(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(jr)?jr:t.value.length,n=Number.isInteger(zr)?zr:e;t.setSelectionRange(e,n)}}function Qf(){const t=new Set;for(const e of z)for(const n of e.roles)n.role_name&&t.add(n.role_name);return Array.from(t).sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function Xf(t){const e=ih(t),n=wn(t),r=t.roles||[];return`
    <tr data-discord-user-id="${f(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${f(e)}" alt="${f(n)}" />`:`<span>${c(ic(n))}</span>`}
          </div>
          <span>${c(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${c(t.global_name||"")}</td>
      <td>${c(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${r.length>0?r.map(i=>eh(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${ta({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function Zf(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${c(gn?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function eh(t){const e=kr(t.role_color),n=Pi(e),r=Ii(e,n);return`
    <span
      class="discord-role-badge"
      title="${f(t.role_name)}"
      style="${r}"
    >${c(t.role_name)}</span>
  `}function th(t){const e=Oi(t),n=kr(e==null?void 0:e.role_color),r=Pi(n),i=Ii(n,r);return`
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
  `}function nh(t){const e=rh(t);for(const n of e){const r=Oi(n);if(r)return r}return null}function rh(t){const e=String(t||"").trim();if(!e)return[];const n=pn(e),i={associate:["Associates","Associate"],associates:["Associates","Associate"],soldier:["Soldiers","Soldier"],soldiers:["Soldiers","Soldier"],capo:["Capo"],capos:["Capo","Capos"],caporegime:["CapoRegime","Capo Regime","Capo Regimes"],consiglieres:["Consigliere","Consiglieres"],consigliere:["Consigliere","Consiglieres"]}[n]||[e];return Array.from(new Set([e,...i].filter(Boolean)))}function pn(t){return String(t||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function Oi(t){const e=pn(t);if(!e)return null;const n=lr.find(r=>pn(r.role_name)===e);if(n)return n;for(const r of z){const i=r.roles.find(s=>pn(s.role_name)===e);if(i)return i}return null}function kr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function Ii(t,e){return[`--role-fill-top: ${zo(t,"#ffffff",.16)}`,`--role-fill-bottom: ${zo(t,"#000000",.1)}`,`--role-fill-glow: ${Yo(t,.28)}`,`--role-fill-edge: ${Yo(t,.46)}`,`color: ${e}`].join("; ")}function zo(t,e,n){const r=On(t)||On("#64748b"),i=On(e)||On("#ffffff"),s=Math.max(0,Math.min(1,Number(n)||0)),o=Math.round(r.red+(i.red-r.red)*s),a=Math.round(r.green+(i.green-r.green)*s),l=Math.round(r.blue+(i.blue-r.blue)*s);return`#${qr(o)}${qr(a)}${qr(l)}`}function On(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function qr(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function Yo(t,e){const n=String(t||"#64748b").replace("#",""),r=/^[0-9a-f]{6}$/i.test(n)?n:"64748b",i=parseInt(r.slice(0,2),16),s=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`rgba(${i}, ${s}, ${o}, ${e})`}function Pi(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const n=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(n*299+r*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function ih(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!n)return"";const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function wn(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function Ka(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function jn(){const t=document.querySelector("#discordArea");if(!!t){if(Nn(!1),L()){const e=v.user||{},n=pe(),r=wh(e),i=ic(n);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${r?`<img src="${f(r)}" alt="${f(n)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${c(i)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const s=document.querySelector("#discordAvatarButton");s.addEventListener("contextmenu",o=>{o.preventDefault(),Ko()}),s.addEventListener("click",()=>{Ko()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",lh)}}function Ko(){if(Ln){Nn();return}ch()}function oh(t=He){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],n=String((t==null?void 0:t.directory)||"").trim(),r=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const s=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),o=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),a=String((i==null?void 0:i.filePath)||(n?`${n}\\${o}`:o)).trim(),l=(i==null?void 0:i.enabled)!==!1,m=r&&l,g=`profileFileWatchToggle-${ah(s||o)}`;return`
          <label class="profile-filewatch-item ${l?"enabled":"disabled"}" title="${f(a)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${c(o)}</span>
              <span class="profile-filewatch-state">${m?"Watching":l?"On":"Off"}</span>
            </span>
            <input
              id="${f(g)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${f(s)}"
              ${l?"checked":""}
              aria-label="Turn file watch ${l?"off":"on"} for ${f(o)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function Fi(){var r,i,s;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=pe(),n=((r=v.user)==null?void 0:r.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${c(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${c(_h(n))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${c(cr)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${He!=null&&He.watching?"Active":"Stopped"}</span>
        </div>
        ${oh()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(i=document.querySelector("#discordLogoutButton"))==null||i.addEventListener("click",dh),(s=document.querySelector("#associateTicketReportButton"))==null||s.addEventListener("click",()=>{Nn(!1),Is()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",sh)})}async function Ja(){try{He=await kl(),Ln&&Fi()}catch(t){h("file-watcher-error",S(t),{ttlMs:p})}}async function sh(t){var r;const e=t.currentTarget,n=String(((r=e==null?void 0:e.dataset)==null?void 0:r.filewatchKey)||"").trim();if(!!n)try{e.disabled=!0,He=await Al(n,e.checked),await Mt({silent:!0}),Ln&&Fi()}catch(i){h("file-watcher-error",S(i),{ttlMs:p}),await Ja()}}function ah(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function ch(){const t=document.querySelector("#discordProfileMenu");!t||(Fi(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),Ln=!0,Ja(),setTimeout(()=>{window.addEventListener("click",Qa),window.addEventListener("keydown",Xa)},0))}function Nn(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),Ln=!1,t&&(window.removeEventListener("click",Qa),window.removeEventListener("keydown",Xa))}function Qa(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&Nn()}function Xa(t){t.key==="Escape"&&Nn()}async function lh(){try{h("auth","Opening Discord login...",{ttlMs:p});const t=await El();t!=null&&t.status_message&&h("auth",t.status_message,{ttlMs:p}),Je()}catch(t){h("auth-error",S(t),{ttlMs:p}),Je()}}async function dh(){try{v=await Sl(),h("auth",v.status_message||"Logged out.",{ttlMs:p}),Ls(),mn(),await Mt()}catch(t){h("auth-error",S(t),{ttlMs:p}),Je()}}function mn(){const t=v.socket_url||"https://guildsync.perdues.me";uh(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};v!=null&&v.token&&(e.auth={token:v.token}),u=Un(t,e),u.on("connect",()=>{Je(),Za(),R==="discord-members"&&Ci({silent:!0}),R==="eso-members"&&Mn({silent:!0}),(R==="more"||R==="settings"&&!F)&&Ae({silent:!0}),Uf(),Gt(),If(),Nf(),Fu(),Vu(),fh()}),u.on("connect_error",()=>{Je(),or()}),u.on("disconnect",()=>{Je(),or(),Pf(),Cf()}),u.on("guildsync:version-status",n=>{hh(n)}),u.on("guildsync:discord-member-data-updated",n=>{Wf(n)}),u.on("guildsync:banking-data-updated",n=>{Bf(n)}),u.on("guildsync:roster-data-updated",n=>{xu(n)}),u.on("guildsync:member-links-updated",Zd),u.on("guildsync:discord-refresh-status",(n={})=>{const r=String(n.message||"").trim();r&&h("discord-refresh-status",r,{ttlMs:p})})}function uh(t=!0){or(),u&&(u.disconnect(),u=null),t&&Je()}function Za(){!(u!=null&&u.connected)||u.emit("guildsync:client-version",{version:cr,platform:ec(),client_type:"wails"})}function fh(){or(),Hn=window.setInterval(()=>{Za()},Bl)}function or(){Hn&&(window.clearInterval(Hn),Hn=null)}function hh(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",n=t.download&&typeof t.download=="object"?t.download:{};qe={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||n.url||"").trim(),fileName:String(t.download_file_name||n.file_name||"").trim(),platformLabel:String(n.label||t.platform||ec()).trim()},h("version",`GuildSync is out of date. Current version: ${cr}. Latest version: ${e}.`),si();return}qe={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},si(),Gi("version")}}function ec(){const t=String(navigator.userAgent||"").toLowerCase(),n=`${String(navigator.platform||"").toLowerCase()} ${t}`;return n.includes("mac")?"macos":n.includes("linux")?"linux":"windows"}function si(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!qe.updateRequired||!qe.downloadUrl){t.innerHTML="";return}const e=qe.platformLabel||"Desktop",n=qe.latestVersion||"latest",r=qe.fileName||"GuildSync client download";t.innerHTML=`
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
      <span class="desktop-client-download-caret" aria-hidden="true">\u25BE</span>
    </button>
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{ph()})}function ph(){const t=String(qe.downloadUrl||"").trim();if(!t){h("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:p});return}Tl(t)}function h(t,e,n={}){const r=String(t||"").trim(),i=String(e||"").trim();if(!(!r||!i)){if(Qe.set(r,i),it.has(r)&&(window.clearTimeout(it.get(r)),it.delete(r)),n.ttlMs&&Number(n.ttlMs)>0){const s=window.setTimeout(()=>{Gi(r)},Number(n.ttlMs));it.set(r,s)}Ut()}}function Gi(t){const e=String(t||"").trim();if(!!e){if(Qe.delete(e),it.has(e)&&(window.clearTimeout(it.get(e)),it.delete(e)),P===e){wr(()=>{P="",Ut()});return}Ut()}}function Ut(){const t=vr();if(t.length===0){pt?wr(_n):_n();return}!pt&&!mt&&Sr(t[0])}function vr(){return Array.from(Qe.keys())}function tc(){const t=vr();if(t.length===0)return"";if(!P)return t[0];const e=t.indexOf(P);return e<0?t[0]:t[(e+1)%t.length]}function Sr(t){const e=document.querySelector("#statusMessageTrack");if(!e||!Qe.has(t)){_n();return}_r();const n=Qe.get(t);P=t,pt=!0,mt=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=n,e.style.setProperty("--message-fade-duration",`${ks}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",mt=!1,mh()},{once:!0})})}function mh(){const t=vr();if(!P||!Qe.has(P)){Ut();return}if(t.length<=1){Jo(!1);return}Jo(!0)}function Jo(t){const e=document.querySelector("#statusMessageViewport"),n=document.querySelector("#statusMessageTrack");if(!e||!n)return;const r=Math.max(0,n.scrollWidth-e.clientWidth);if(r<=0){t&&An(()=>{wr(()=>{const i=tc();P="",i?Sr(i):_n()})},ys);return}An(()=>{nc(r,t)},vs)}function nc(t,e){const n=document.querySelector("#statusMessageTrack");if(!n||!P||!Qe.has(P))return;const r=Math.max(4,Math.ceil(t/xl));n.style.setProperty("--long-scroll-distance",`${t}px`),n.style.setProperty("--long-scroll-duration",`${r}s`),n.classList.add("long-scroll"),n.addEventListener("animationend",()=>{if(n.classList.remove("long-scroll"),n.style.transform=`translateX(-${t}px) translateY(-50%)`,e){An(()=>{wr(()=>{const i=tc();P="",i?Sr(i):_n()})},ys);return}An(()=>{gh()},ql)},{once:!0})}function gh(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!P||!Qe.has(P))return;if(vr().length!==1){Ut();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const r=Math.max(0,e.scrollWidth-t.clientWidth);r<=0||An(()=>{nc(r,!1)},vs)}function wr(t){const e=document.querySelector("#statusMessageTrack");if(_r(),!e||!pt){typeof t=="function"&&t();return}mt=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${ks}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",pt=!1,mt=!1,typeof t=="function"&&t()},{once:!0})}function _n(){const t=document.querySelector("#statusMessageTrack");_r(),P="",pt=!1,mt=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function An(t,e){const n=window.setTimeout(()=>{fn=fn.filter(r=>r!==n),t()},e);fn.push(n)}function _r(){for(const t of fn)window.clearTimeout(t);fn=[]}function rc(){if(!pt||mt||!P)return;const t=P;_r(),Sr(t)}function Je(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(u!=null&&u.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!L()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${pe()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${pe()}`)}}async function Mt(t={}){try{if(L()){const e=await $l();He=e,!t.silent&&(e==null?void 0:e.message)&&h(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:p});return}He=await Rl(),Gi("file-watcher")}catch(e){h("file-watcher-error",S(e),{ttlMs:p})}}function cn(t,e=null){const n="[GuildSync File Watcher]";if(e){console.log(`${n} ${t}`,e);return}console.log(`${n} ${t}`)}function bh(t={}){if(!L()){cn("SavedVariables change ignored because the user is not authenticated.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",n=e.toLowerCase(),r=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=String(t.filePath||"").trim(),o=r?`${r} saved variables (${i})`:i;cn(`SavedVariables change detected: ${i}${s?` (${s})`:""}. Key: ${n}.`,t),h(`saved-vars-file-updated-${e}`,`${o} has been updated.`,{ttlMs:p}),n==="banking"&&(cn(`Processing banking SavedVariables update from ${i}.`),yh(t)),n==="roster"&&(cn(`Processing roster SavedVariables update from ${i}.`),kh(t)),n==="applications"&&(cn(`Processing applications SavedVariables update from ${i}.`),zu(t))}async function yh(t={}){await qf(t),await Pa(t)}async function kh(t={}){await Ou(t)}function vh(t){!L()||h("file-watcher-error",S(t),{ttlMs:p})}function Sh(){rn("guildsync-savedvars-file-modified",bh),rn("guildsync-file-watcher-error",vh),rn("guildsync-login-complete",async t=>{v=t||{logged_in:!1,allowed:!1},jn(),mn(),await Mt(),h("auth",v.status_message||`Logged in and authorized as ${pe()}.`,{ttlMs:p})}),rn("guildsync-login-denied",async t=>{v={logged_in:!1,allowed:!1,status_message:""},jn(),await Mt(),h("auth",t||"Access denied.",{ttlMs:p}),mn()}),rn("guildsync-login-failed",async t=>{v={logged_in:!1,allowed:!1,status_message:""},jn(),await Mt(),h("auth",t||"Login failed.",{ttlMs:p}),mn()})}function L(){return Boolean((v==null?void 0:v.logged_in)&&(v==null?void 0:v.allowed)&&(v==null?void 0:v.token))}function pe(){var t,e;return((t=v.user)==null?void 0:t.display_name)||((e=v.user)==null?void 0:e.username)||"Discord User"}function wh(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),n=String(t.discord_user_id||"").trim();if(!e||!n)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=128`}function ic(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function _h(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Ah(){on&&(on.disconnect(),on=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),n=Math.round(t.getBoundingClientRect().height);on=new ResizeObserver(r=>{const i=r[0];if(!i)return;const s=Math.round(i.contentRect.width),o=Math.round(i.contentRect.height);s===e&&o===n||(e=s,n=o,oc(),rc())}),on.observe(t)}function oc(){clearTimeout(Lo),Lo=setTimeout(async()=>{try{await hs()}catch{}},500)}function S(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function c(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function f(t){return c(t)}Sh();Pl();
