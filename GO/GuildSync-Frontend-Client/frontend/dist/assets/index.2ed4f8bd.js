(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const B=t=>String(t!=null?t:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Fa(){return{open:"",toggle(t){this.open=this.open===t?"":t},close(){this.open=""}}}function Fo(t,e){var n;return t.type==="boolean"?String(e).toLowerCase()===String(t.defaultValue).toLowerCase():t.type==="number"?String(e).trim()!==""&&Number(e)===Number(t.defaultValue):String(e!=null?e:"")===String((n=t.defaultValue)!=null?n:"")}function co(t,e){const r=Object.hasOwn(e,t.key)?e[t.key]===null?t.defaultValue:e[t.key]:t.value,i=!Fo(t,r);return{value:r,override:i,source:i?"Overridden":"Default"}}function yr(t,e){return t.type==="boolean"?e===!0||String(e).toLowerCase()==="true"?"Enabled":"Disabled":t.type==="select"?{private_thread:"Private thread (public fallback)",channel:"Channel or thread"}[e]||String(e):e==null||e===""?"Not configured":String(e)}function lo(t,{body:e=!1}={}){const n={recipient:"@ExampleMember",account_name:"@ExampleMember",display_name:"@ExampleMember",amount:"10,001",deposit_amount:"10,001",raw_amount:"10001",raw_deposit_amount:"10001",event_id:"123456789",ticket_quantity:"20",tickets:"20",purchased_tickets:"20",bonus_percent:"20",bonus_tickets:"4",total_tickets:"24",bonus_deadline:"October 9, 2026 at 7:00 PM Eastern",bonus_block:`Early Purchase Bonus: 20% for purchases before October 9, 2026 at 7:00 PM ET.
Bonus Tickets: 4
Total Tickets: 24`,note:"",note_block:"",ticket_type:"Bi-Weekly",ticket_type_raw:"biweekly",transaction_type:"biweekly",ticket_gold_cost:"10,001",gold_cost:"10,001",raw_gold_cost:"10001",raw_ticket_gold_cost:"10001",purchase_date:"October 5, 2026",data_source:"Guild bank",event_datetime:"2026-10-05T12:00:00Z",event_timestamp:"1791201600",raffle_datetime_eastern:"October 10, 2026 at 8:00 PM Eastern",raffle_date_time_eastern:"October 10, 2026 at 8:00 PM Eastern",raffle_datetime:"October 10, 2026 at 8:00 PM Eastern",mail_request_id:"example",mail_batch_id:"example"},r=String(t).replace(/{([a-zA-Z0-9_]+)}/g,(i,s)=>{var o;return(o=n[s])!=null?o:i});return e&&!String(t).includes("{bonus_block}")?r+`

`+n.bonus_block:r}function Ga(t,{refresh:e=!1}={}){const n=()=>{for(const s of document.querySelectorAll("[data-report-toggle]")){const o=s.dataset.reportToggle===t.open;s.setAttribute("aria-expanded",String(o));const a=document.getElementById(s.getAttribute("aria-controls"));a&&(a.classList.toggle("is-open",o),a.inert=!o)}};for(const s of document.querySelectorAll("[data-report-toggle]"))s.addEventListener("click",()=>{t.toggle(s.dataset.reportToggle),n()});for(const s of document.querySelectorAll('.reports-panel .report-run-button:not([type="submit"])'))s.addEventListener("click",()=>{t.close(),n()});const r=e?Array.from(document.querySelectorAll(".report-section-content")):[],i=r.map(s=>s.style.transition);for(const s of r)s.style.transition="none";n();for(const s of r)s.offsetHeight;r.forEach((s,o)=>s.style.transition=i[o])}function Ua(){let t=null,e={},n=!1,r="",i=!1;const s=(d,g)=>{const m=`data-config-value="${B(d.key)}" id="config-${B(d.key)}" `;return d.type==="boolean"?`<select ${m}><option value="true" ${String(g.value)==="true"?"selected":""}>Enabled</option><option value="false" ${String(g.value)==="false"?"selected":""}>Disabled</option></select>`:d.type==="select"?`<select ${m}>${d.options.map(b=>`<option value="${B(b)}" ${b===g.value?"selected":""}>${B(yr(d,b))}</option>`).join("")}</select>`:d.type==="template"?`<textarea ${m} rows="${d.key.includes("BODY")?9:3}" maxlength="${d.maxLength}">${B(g.value)}</textarea>`:`<input ${m} type="${d.type==="number"?"number":"text"}" ${d.type==="number"?`min="${d.min}" max="${d.max}" step="any"`:""} value="${B(g.value)}" placeholder="Not configured">`};return{render:()=>{const d=t?[...new Set(t.settings.map(g=>g.group))]:[];return`<article class="report-option-card admin-configuration-card"><div class="report-option-copy">
   <h3><button type="button" class="report-section-toggle" data-report-toggle="configuration" aria-expanded="false" aria-controls="adminConfigurationContent">Administrator Configuration <span aria-hidden="true">\u25BE</span></button></h3>
   <div id="adminConfigurationContent" class="report-section-content" inert><div class="report-section-inner">
   <p>Edit any setting to override its default. Changes take effect only after Save. Return to default to restore the default value. Settings apply live; active deliveries finish safely.</p>
   <p role="status" class="configuration-status">${B(r)}</p>
   ${t?`
   ${t.botDefaultsReported?"":"<p>Bot defaults have not been reported yet. Connect the updated bot before editing its settings.</p>"}
   <form id="adminConfigurationForm">
    ${d.map(g=>`<fieldset class="configuration-group" ${i?"disabled":""}><legend>${B(g)}</legend>
     ${t.settings.filter(m=>m.group===g).map(m=>{const b=co(m,e);return`<div class="configuration-setting">
      <label for="config-${B(m.key)}">${B(m.label)}</label>
      <small>${B(m.key)} \xB7 <span data-config-source="${B(m.key)}">${B(b.source)}</span></small>
      <div class="configuration-values">
       <div class="configuration-selected-value"><span>Current selection</span>${s(m,b)}</div>
       <div class="configuration-default-value"><span>Default value</span><output>${B(yr(m,m.defaultValue))}</output></div>
      </div>
      <button type="button" class="configuration-default" data-config-default="${B(m.key)}" aria-label="Return ${B(m.label)} to default: ${B(yr(m,m.defaultValue))}">Return to default</button>
      ${m.placeholders?`<small>Placeholders: ${m.placeholders.map(y=>B("{"+y+"}")).join(", ")}</small>`:""}
      ${m.group==="Receipt messages"?`<label>Example preview (20% bonus)<pre data-config-preview="${B(m.key)}">${B(lo(b.value,{body:m.key.endsWith("BODY_TEMPLATE")}))}</pre></label>`:""}
     </div>`}).join("")}
    </fieldset>`).join("")}
    <div class="configuration-actions"><button type="submit" ${i?"disabled":""}>${i?"Saving...":"Save Configuration"}</button><button type="button" id="reloadAdminConfiguration" ${i?"disabled":""}>Discard edits and reload</button></div>
   </form>`:`<p>${n?"Loading configuration...":"Configuration is not loaded."}</p><button type="button" id="reloadAdminConfiguration">Load configuration</button>`}
   </div></div></div></article>`},wire:({request:d,rerender:g})=>{var b,y;const m=async()=>{if(!n){n=!0,r="";try{const S=await d("guildsync:request-admin-configuration",{});if(!(S!=null&&S.ok))throw Error((S==null?void 0:S.message)||"Could not load configuration.");t=S.configuration,e={}}catch(S){r=S.message}finally{n=!1,g()}}};!t&&!n&&!r&&m(),(b=document.getElementById("reloadAdminConfiguration"))==null||b.addEventListener("click",()=>void m());for(const S of document.querySelectorAll("[data-config-value]"))S.addEventListener("input",()=>{const M=S.dataset.configValue,H=t.settings.find(Je=>Je.key===M);e[M]=Fo(H,S.value)?null:S.value;const R=document.querySelector(`[data-config-source="${M}"]`);R&&(R.textContent=co(H,e).source);const Ee=document.querySelector(`[data-config-preview="${M}"]`);Ee&&(Ee.textContent=lo(S.value,{body:M.endsWith("BODY_TEMPLATE")}))});for(const S of document.querySelectorAll("[data-config-default]"))S.addEventListener("click",()=>{e[S.dataset.configDefault]=null,g()});(y=document.getElementById("adminConfigurationForm"))==null||y.addEventListener("submit",async S=>{var H;if(S.preventDefault(),i)return;if(!Object.keys(e).length){r="No changes to save.",g();return}i=!0,r="";const M={...e};g(),(H=document.getElementById("adminConfigurationForm"))==null||H.querySelectorAll("input,select,textarea,button").forEach(R=>R.disabled=!0);try{const R=await d("guildsync:save-admin-configuration",{revision:t.revision,changes:M});if(!(R!=null&&R.ok))throw Error((R==null?void 0:R.message)||"Could not save configuration.");t=R.configuration,e={},r="Configuration saved. Backend settings are active; the connected bot applies its settings after active deliveries finish. An offline bot applies them when it reconnects."}catch(R){r=R.message}finally{i=!1,g()}})},clear(){t=null,e={},r=""}}}const Ha="/assets/splash.ea386b6a.png",Va="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",Wa="/assets/GuildSync-Graphic.9169020d.png",ge=Object.create(null);ge.open="0";ge.close="1";ge.ping="2";ge.pong="3";ge.message="4";ge.upgrade="5";ge.noop="6";const Bn=Object.create(null);Object.keys(ge).forEach(t=>{Bn[ge[t]]=t});const Tr={type:"error",data:"parser error"},Go=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Uo=typeof ArrayBuffer=="function",Ho=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,ti=({type:t,data:e},n,r)=>Go&&e instanceof Blob?n?r(e):uo(e,r):Uo&&(e instanceof ArrayBuffer||Ho(e))?n?r(e):uo(new Blob([e]),r):r(ge[t]+(e||"")),uo=(t,e)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];e("b"+(r||""))},n.readAsDataURL(t)};function fo(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let kr;function ja(t,e){if(Go&&t.data instanceof Blob)return t.data.arrayBuffer().then(fo).then(e);if(Uo&&(t.data instanceof ArrayBuffer||Ho(t.data)))return e(fo(t.data));ti(t,!1,n=>{kr||(kr=new TextEncoder),e(kr.encode(n))})}const ho="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",an=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<ho.length;t++)an[ho.charCodeAt(t)]=t;const za=t=>{let e=t.length*.75,n=t.length,r,i=0,s,o,a,d;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const g=new ArrayBuffer(e),m=new Uint8Array(g);for(r=0;r<n;r+=4)s=an[t.charCodeAt(r)],o=an[t.charCodeAt(r+1)],a=an[t.charCodeAt(r+2)],d=an[t.charCodeAt(r+3)],m[i++]=s<<2|o>>4,m[i++]=(o&15)<<4|a>>2,m[i++]=(a&3)<<6|d&63;return g},Ya=typeof ArrayBuffer=="function",ni=(t,e)=>{if(typeof t!="string")return{type:"message",data:Vo(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:Ka(t.substring(1),e)}:Bn[n]?t.length>1?{type:Bn[n],data:t.substring(1)}:{type:Bn[n]}:Tr},Ka=(t,e)=>{if(Ya){const n=za(t);return Vo(n,e)}else return{base64:!0,data:t}},Vo=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},Wo=String.fromCharCode(30),Ja=(t,e)=>{const n=t.length,r=new Array(n);let i=0;t.forEach((s,o)=>{ti(s,!1,a=>{r[o]=a,++i===n&&e(r.join(Wo))})})},Qa=(t,e)=>{const n=t.split(Wo),r=[];for(let i=0;i<n.length;i++){const s=ni(n[i],e);if(r.push(s),s.type==="error")break}return r};function Xa(){return new TransformStream({transform(t,e){ja(t,n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,r)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(r))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(n)})}})}let vr;function Dn(t){return t.reduce((e,n)=>e+n.length,0)}function Mn(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let r=0;for(let i=0;i<e;i++)n[i]=t[0][r++],r===t[0].length&&(t.shift(),r=0);return t.length&&r<t[0].length&&(t[0]=t[0].slice(r)),n}function Za(t,e){vr||(vr=new TextDecoder);const n=[];let r=0,i=-1,s=!1;return new TransformStream({transform(o,a){for(n.push(o);;){if(r===0){if(Dn(n)<1)break;const d=Mn(n,1);s=(d[0]&128)===128,i=d[0]&127,i<126?r=3:i===126?r=1:r=2}else if(r===1){if(Dn(n)<2)break;const d=Mn(n,2);i=new DataView(d.buffer,d.byteOffset,d.length).getUint16(0),r=3}else if(r===2){if(Dn(n)<8)break;const d=Mn(n,8),g=new DataView(d.buffer,d.byteOffset,d.length),m=g.getUint32(0);if(m>Math.pow(2,53-32)-1){a.enqueue(Tr);break}i=m*Math.pow(2,32)+g.getUint32(4),r=3}else{if(Dn(n)<i)break;const d=Mn(n,i);a.enqueue(ni(s?d:vr.decode(d),e)),r=0}if(i===0||i>t){a.enqueue(Tr);break}}}})}const jo=4;function C(t){if(t)return ec(t)}function ec(t){for(var e in C.prototype)t[e]=C.prototype[e];return t}C.prototype.on=C.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};C.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};C.prototype.off=C.prototype.removeListener=C.prototype.removeAllListeners=C.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===e||r.fn===e){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+t],this};C.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,e)}return this};C.prototype.emitReserved=C.prototype.emit;C.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};C.prototype.hasListeners=function(t){return!!this.listeners(t).length};const er=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0))(),K=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),tc="arraybuffer";function zo(t,...e){return e.reduce((n,r)=>(t.hasOwnProperty(r)&&(n[r]=t[r]),n),{})}const nc=K.setTimeout,rc=K.clearTimeout;function tr(t,e){e.useNativeTimers?(t.setTimeoutFn=nc.bind(K),t.clearTimeoutFn=rc.bind(K)):(t.setTimeoutFn=K.setTimeout.bind(K),t.clearTimeoutFn=K.clearTimeout.bind(K))}const ic=1.33;function oc(t){return typeof t=="string"?sc(t):Math.ceil((t.byteLength||t.size)*ic)}function sc(t){let e=0,n=0;for(let r=0,i=t.length;r<i;r++)e=t.charCodeAt(r),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(r++,n+=4);return n}function Yo(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function ac(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function cc(t){let e={},n=t.split("&");for(let r=0,i=n.length;r<i;r++){let s=n[r].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class lc extends Error{constructor(e,n,r){super(e),this.description=n,this.context=r,this.type="TransportError"}}class ri extends C{constructor(e){super(),this.writable=!1,tr(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,r){return super.emitReserved("error",new lc(e,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=ni(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=ac(e);return n.length?"?"+n:""}}class dc extends ri{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};Qa(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Ja(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=Yo()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let Ko=!1;try{Ko=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const uc=Ko;function fc(){}class hc extends dc{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let r=location.port;r||(r=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,n){const r=this.request({method:"POST",data:e});r.on("success",n),r.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=e}}class ue extends C{constructor(e,n,r){super(),this.createRequest=e,tr(this,r),this._opts=r,this._method=r.method||"GET",this._uri=n,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const n=zo(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(n);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var i;r.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=ue.requestsCount++,ue.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=fc,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete ue.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}ue.requestsCount=0;ue.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",po);else if(typeof addEventListener=="function"){const t="onpagehide"in K?"pagehide":"unload";addEventListener(t,po,!1)}}function po(){for(let t in ue.requests)ue.requests.hasOwnProperty(t)&&ue.requests[t].abort()}const pc=function(){const t=Jo({xdomain:!1});return t&&t.responseType!==null}();class mc extends hc{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=pc&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new ue(Jo,this.uri(),e)}}function Jo(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||uc))return new XMLHttpRequest}catch{}if(!e)try{return new K[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Qo=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class gc extends ri{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,r=Qo?{}:zo(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;ti(r,this.supportsBinary,s=>{try{this.doWrite(r,s)}catch{}i&&er(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=Yo()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const Sr=K.WebSocket||K.MozWebSocket;class bc extends gc{createSocket(e,n,r){return Qo?new Sr(e,n,r):n?new Sr(e,n):new Sr(e)}doWrite(e,n){this.ws.send(n)}}class yc extends ri{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=Za(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(n).getReader(),i=Xa();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const s=()=>{r.read().then(({done:a,value:d})=>{a||(this.onPacket(d),s())}).catch(a=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;this._writer.write(r).then(()=>{i&&er(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const kc={websocket:bc,webtransport:yc,polling:mc},vc=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Sc=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Nr(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),r=t.indexOf("]");n!=-1&&r!=-1&&(t=t.substring(0,n)+t.substring(n,r).replace(/:/g,";")+t.substring(r,t.length));let i=vc.exec(t||""),s={},o=14;for(;o--;)s[Sc[o]]=i[o]||"";return n!=-1&&r!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=wc(s,s.path),s.queryKey=_c(s,s.query),s}function wc(t,e){const n=/\/{2,9}/g,r=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function _c(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,s){i&&(n[i]=s)}),n}const Br=typeof addEventListener=="function"&&typeof removeEventListener=="function",Cn=[];Br&&addEventListener("offline",()=>{Cn.forEach(t=>t())},!1);class Oe extends C{constructor(e,n){if(super(),this.binaryType=tc,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const r=Nr(e);n.hostname=r.host,n.secure=r.protocol==="https"||r.protocol==="wss",n.port=r.port,r.query&&(n.query=r.query)}else n.host&&(n.hostname=Nr(n.host).host);tr(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(r=>{const i=r.prototype.name;this.transports.push(i),this._transportsByName[i]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=cc(this.opts.query)),Br&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Cn.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=jo,n.transport=e,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Oe.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",Oe.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(n+=oc(i)),r>0&&n>this._maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,er(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,r){return this._sendPacket("message",e,n,r),this}send(e,n,r){return this._sendPacket("message",e,n,r),this}_sendPacket(e,n,r,i){if(typeof n=="function"&&(i=n,n=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const s={type:e,data:n,options:r};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(Oe.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Br&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=Cn.indexOf(this._offlineEventListener);r!==-1&&Cn.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}}Oe.protocol=jo;class Ac extends Oe{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let n=this.createTransport(e),r=!1;Oe.priorWebsocketSuccess=!1;const i=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",b=>{if(!r)if(b.type==="pong"&&b.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;Oe.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(m(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const y=new Error("probe error");y.transport=n.name,this.emitReserved("upgradeError",y)}}))};function s(){r||(r=!0,m(),n.close(),n=null)}const o=b=>{const y=new Error("probe error: "+b);y.transport=n.name,s(),this.emitReserved("upgradeError",y)};function a(){o("transport closed")}function d(){o("socket closed")}function g(b){n&&b.name!==n.name&&s()}const m=()=>{n.removeListener("open",i),n.removeListener("error",o),n.removeListener("close",a),this.off("close",d),this.off("upgrading",g)};n.once("open",i),n.once("error",o),n.once("close",a),this.once("close",d),this.once("upgrading",g),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const n=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&n.push(e[r]);return n}}class Lc extends Ac{constructor(e,n={}){const r=typeof e=="object"?e:n;(!r.transports||r.transports&&typeof r.transports[0]=="string")&&(r.transports=(r.transports||["polling","websocket","webtransport"]).map(i=>kc[i]).filter(i=>!!i)),super(e,r)}}function $c(t,e="",n){let r=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),r=Nr(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const s=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+s+":"+r.port+e,r.href=r.protocol+"://"+s+(n&&n.port===r.port?"":":"+r.port),r}const Ec=typeof ArrayBuffer=="function",Rc=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,Xo=Object.prototype.toString,Dc=typeof Blob=="function"||typeof Blob<"u"&&Xo.call(Blob)==="[object BlobConstructor]",Mc=typeof File=="function"||typeof File<"u"&&Xo.call(File)==="[object FileConstructor]";function ii(t){return Ec&&(t instanceof ArrayBuffer||Rc(t))||Dc&&t instanceof Blob||Mc&&t instanceof File}function On(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,r=t.length;n<r;n++)if(On(t[n]))return!0;return!1}if(ii(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return On(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&On(t[n]))return!0;return!1}function Tc(t){const e=[],n=t.data,r=t;return r.data=Cr(n,e),r.attachments=e.length,{packet:r,buffers:e}}function Cr(t,e){if(!t)return t;if(ii(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let r=0;r<t.length;r++)n[r]=Cr(t[r],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=Cr(t[r],e));return n}return t}function Nc(t,e){return t.data=Or(t.data,e),delete t.attachments,t}function Or(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=Or(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=Or(t[n],e));return t}const Zo=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Bc=5;var w;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(w||(w={}));class Cc{constructor(e){this.replacer=e}encode(e){return(e.type===w.EVENT||e.type===w.ACK)&&On(e)?this.encodeAsBinary({type:e.type===w.EVENT?w.BINARY_EVENT:w.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===w.BINARY_EVENT||e.type===w.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=Tc(e),r=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(r),i}}class oi extends C{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const r=n.type===w.BINARY_EVENT;r||n.type===w.BINARY_ACK?(n.type=r?w.EVENT:w.ACK,this.reconstructor=new Oc(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(ii(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const r={type:Number(e.charAt(0))};if(w[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===w.BINARY_EVENT||r.type===w.BINARY_ACK){const s=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(s,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!es(a)||a<0)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=a}if(e.charAt(n+1)==="/"){const s=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););r.nsp=e.substring(s,n)}else r.nsp="/";const i=e.charAt(n+1);if(i!==""&&Number(i)==i){const s=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}r.id=Number(e.substring(s,n+1))}if(e.charAt(++n)){const s=this.tryParse(e.substr(n));if(oi.isPayloadValid(r.type,s))r.data=s;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case w.CONNECT:return Fn(n);case w.DISCONNECT:return n===void 0;case w.CONNECT_ERROR:return typeof n=="string"||Fn(n);case w.EVENT:case w.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&Zo.indexOf(n[0])===-1);case w.ACK:case w.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Oc{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=Nc(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Ic(t){return typeof t=="string"}const es=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function qc(t){return t===void 0||es(t)}function Fn(t){return Object.prototype.toString.call(t)==="[object Object]"}function xc(t,e){switch(t){case w.CONNECT:return e===void 0||Fn(e);case w.DISCONNECT:return e===void 0;case w.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&Zo.indexOf(e[0])===-1);case w.ACK:return Array.isArray(e);case w.CONNECT_ERROR:return typeof e=="string"||Fn(e);default:return!1}}function Pc(t){return Ic(t.nsp)&&qc(t.id)&&xc(t.type,t.data)}const Fc=Object.freeze(Object.defineProperty({__proto__:null,protocol:Bc,get PacketType(){return w},Encoder:Cc,Decoder:oi,isPacketValid:Pc},Symbol.toStringTag,{value:"Module"}));function Z(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const Gc=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class ts extends C{constructor(e,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Z(e,"open",this.onopen.bind(this)),Z(e,"packet",this.onpacket.bind(this)),Z(e,"error",this.onerror.bind(this)),Z(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var r,i,s;if(Gc.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const o={type:w.EVENT,data:n};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const m=this.ids++,b=n.pop();this._registerAckCallback(m,b),o.id=m}const a=(i=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||i===void 0?void 0:i.writable,d=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!a||(d?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,n){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[e]=n;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);n.call(this,new Error("operation has timed out"))},i),o=(...a)=>{this.io.clearTimeoutFn(s),n.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...n){return new Promise((r,i)=>{const s=(o,a)=>o?i(o):r(a);s.withError=!0,n.push(s),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>(this._queue[0],i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(i)):(this._queue.shift(),n&&n(null,...s)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:w.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case w.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case w.EVENT:case w.BINARY_EVENT:this.onevent(e);break;case w.ACK:case w.BINARY_ACK:this.onack(e);break;case w.DISCONNECT:this.ondisconnect();break;case w.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let r=!1;return function(...i){r||(r=!0,n.packet({type:w.ACK,id:e,data:i}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:w.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,e.data)}}}function Pt(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}Pt.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-n:t+n}return Math.min(t,this.max)|0};Pt.prototype.reset=function(){this.attempts=0};Pt.prototype.setMin=function(t){this.ms=t};Pt.prototype.setMax=function(t){this.max=t};Pt.prototype.setJitter=function(t){this.jitter=t};class Ir extends C{constructor(e,n){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,tr(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new Pt({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const i=n.parser||Fc;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Lc(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=Z(n,"open",function(){r.onopen(),e&&e()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=Z(n,"error",s);if(this._timeout!==!1){const a=this._timeout,d=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),n.close()},a);this.opts.autoUnref&&d.unref(),this.subs.push(()=>{this.clearTimeoutFn(d)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Z(e,"ping",this.onping.bind(this)),Z(e,"data",this.ondata.bind(this)),Z(e,"error",this.onerror.bind(this)),Z(e,"close",this.onclose.bind(this)),Z(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){er(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new ts(this,e,n),this.nsps[e]=r),r}_destroy(e){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let r=0;r<n.length;r++)this.engine.write(n[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const en={};function In(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=$c(t,e.path||"/socket.io"),r=n.source,i=n.id,s=n.path,o=en[i]&&s in en[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let d;return a?d=new Ir(r,e):(en[i]||(en[i]=new Ir(r,e)),d=en[i]),n.query&&!e.query&&(e.query=n.queryKey),d.socket(n.path,e)}Object.assign(In,{Manager:Ir,Socket:ts,io:In,connect:In});function Uc(t){return window.go.main.App.CleanupDepositMailAckFromGuildSyncBanking(t)}function Hc(){return window.go.main.App.CloseWindow()}function Vc(t){return window.go.main.App.CollectDepositMailAckFromGuildSyncBanking(t)}function Wc(t){return window.go.main.App.CollectGuildSyncApplicationsData(t)}function jc(t){return window.go.main.App.CollectGuildSyncBankingData(t)}function zc(t){return window.go.main.App.CollectGuildSyncRosterData(t)}function Yc(t,e){return window.go.main.App.CommitGuildSyncApplicationsData(t,e)}function Kc(t,e){return window.go.main.App.CommitGuildSyncBankingData(t,e)}function Jc(t,e){return window.go.main.App.CommitGuildSyncRosterData(t,e)}function Qc(){return window.go.main.App.FlushPendingDepositMailAckCleanup()}function Xc(){return window.go.main.App.GetESORunningStatus()}function Zc(){return window.go.main.App.GetGuildSyncFileWatcherStatus()}function el(){return window.go.main.App.GetGuildSyncSession()}function tl(){return window.go.main.App.LogoutGuildSync()}function nl(){return window.go.main.App.MaximizeWindow()}function rl(){return window.go.main.App.MinimizeWindow()}function ns(){return window.go.main.App.SaveWindowState()}function il(t,e){return window.go.main.App.SetGuildSyncSavedVarsWatchFileEnabled(t,e)}function ol(){return window.go.main.App.ShowMainWindow()}function sl(){return window.go.main.App.StartDiscordLogin()}function al(){return window.go.main.App.StartGuildSyncFileWatcher()}function cl(){return window.go.main.App.StopGuildSyncFileWatcher()}function ll(t){return window.go.main.App.WriteDepositMailToGuildSyncBanking(t)}function dl(t,e,n){return window.runtime.EventsOnMultiple(t,e,n)}function tn(t,e){return dl(t,e,-1)}function ul(t){window.runtime.BrowserOpenURL(t)}const nr="1.2.7",fl=30*60*1e3,rs="guildsync-pending-banking-uploads",is="guildsync-pending-deposit-mail",hl=5e3,pl=30*1e3,os="guildsync-pending-roster-uploads",ss="guildsync-pending-applications-uploads",p=60*1e3,as=7e3,cs=1400,ls=2400,ml=4e3,gl=38,ds=document.querySelector("#app");let mo=null,nn=null,go=!1,vn=!1,qn=null,wr=!1,_r=!1,Ar=!1,Ie=null,W={running:!1,message:""},mt=null,gt=null,qr=!1,bt=!1,yt=null,Lr=!1,Ve=new Map,Xe=new Map,q="",lt=!1,dt=!1,cn=[],k={logged_in:!1,allowed:!1,status_message:""},Re={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},u=null,j=[],rr=[],ir=null,fn=!1,Gn=!1,Un="",kt=new Set,vt=new Set,hn="username",tt="asc",xr=null,Pr=null,X=[],Hn=null,We=!1,bo=!1,Vn="",Fr=null,Gr=null,nt=new Set,St=new Set,Se="",V="",O=-1,Rt=!1,pn="",J=[],je="",qe=[],xe=!1,_e="",$r=null,ee=-1,Ft=!1,mn="",Pe=[],Wn=!1,rt=!1,Fe="",Dt="",Mt=!1,De="",Q=[],Tt="",ut="",Ge=[],Ue=!1,Ae="",yo=null,Qe=0;const bl=650;let te=-1,Gt=!1,Ut=[],Me=!1,it="",Ht=!1,gn=[],Te=!1,ot="",Vt=!1,si=[],Ne=!1,st="",Wt="",Be="",wt="",Ce="",$=[],G=!1,U="",pt=!1,or="",Ze="",Sn="",wn="",we=-1,Ke=!1,A=null,at=[],Nt=!1,$e="",_n="",de=-1,jt=!1,ai=null,ln=null;const ci=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let z=[],x=null,et=null,le=!1;const yl=Fa(),us=Ua();let Bt=[],_t="",ko=!1,T="biweekly",fs=null,ze=!1,ct=!1,se="biweekly",zt=!1,Ct=!1,ke="",ve=null,I={targetType:"other",note:"",tickets:""},Yt=!1,ft="",F=[],ie=[],fe="",he=!1,pe="",At=null,ne=-1,Le=!1,jn=!1,Y="",E={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},Kt="",P=-1,re=!1,Ur={biweekly:0,monthly:0};const kl=1780786800,Ye=14*24*60*60,zn=60*60,Yn=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let D=Yn[0].id;function vl(){ds.innerHTML=`
    <main class="splash-screen">
      <img src="${Ha}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await ol(),await Sl(),hs(),un(),await Et()},5e3)}async function Sl(){try{k=await el()}catch(t){k={logged_in:!1,allowed:!1,status_message:""},h("session-error",v(t),{ttlMs:p})}}function hs(){ds.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${Va}" alt="" class="title-icon" />
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
            <img src="${Wa}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${c(nr)}</div>
            </div>
          </div>
          <div class="compact-header-actions">
            <div id="desktopUpdateArea" class="desktop-update-area"></div>
            <div id="discordArea" class="discord-area"></div>
          </div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${ps()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content web-upload-banner-dismissed" aria-live="polite">
          ${gs()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await rl()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await ns(),await Hc()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await nl()}),Pn(),ei(),bs(),Ea(),ra(),pa(),ws(),na(),js(),zs(),Ys(),Ks(),Cs(),ia(),Rl(),He(),xt(),go||(window.addEventListener("resize",()=>{Pa(),qa()}),lh(),go=!0)}function ps(){return Yn.map(t=>{const e=t.id===D,n=wl(t.id,e),r=n?ms():0,i=n?`Deposit mail needs attention: ${r} item${r===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${n?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${f(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${f(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${_l(t.icon)}</span>
          <span class="guildsync-tab-label">${c(t.label)}</span>
          ${n?`<span class="guildsync-tab-mail-badge" aria-label="${f(i)}">${r>99?"99+":c(String(r))}</span>`:""}
        </button>
      `}).join("")}function ms(){return L()?dr()+$n()+fa():0}function wl(t,e){return t!=="more"||e?!1:ms()>0}function _l(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function gs(){const t=Yn.find(n=>n.id===D)||Yn[0];let e="";return t.id==="discord-members"?e=Tl():t.id==="eso-members"?e=Nl():t.id==="more"?e=Nu():t.id==="settings"?e=nd():e=`
      <div class="guildsync-tab-panel" data-active-tab="${f(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${c(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${Le?su():""}
    ${zt?Wu():""}
    ${Yt?Bu():""}
    ${Ke?Qd():""}
    ${Gt?od():""}
    ${Ht?ud():""}
    ${Vt?md():""}
    ${pt?Ed():""}
    ${jt?El():""}
  `}function Al(){return jt||Rt||Mt||Le||zt||Yt||Ke||Ft||Gt||Ht||Vt||pt||ct}function Ll(){return jt?!1:pt?(Yr(),!0):Vt?(zr(),!0):Ht?(jr(),!0):Gt?(Wr(),!0):Ke?(It(),!0):Ft?(Qr(),!0):zt?(Qn(),!0):Yt?(Ku(),l(),!0):Le?(Le=!1,l(),!0):Rt?(Rt=!1,l(),!0):Mt?(Mt=!1,l(),!0):ct?(ct=!1,l(),!0):!1}function $l(t){t.key==="Escape"&&Ll()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",$l,!0),window.guildSyncGlobalModalEscapeAttached=!0);function li(t={}){return new Promise(e=>{ln&&ln(!1),jt=!0,ai={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},ln=e,l()})}function Kn(t=!1){const e=ln;ln=null,jt=!1,ai=null,e&&e(t===!0),l()}function El(){const t=ai||{};return`
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
  `}function vo(t){var r,i,s,o;const e=(i=(r=t.target).closest)==null?void 0:i.call(r,"#cancelGuildSyncConfirmButton"),n=(o=(s=t.target).closest)==null?void 0:o.call(s,"#acceptGuildSyncConfirmButton");if(!(!e&&!n)){if(t.preventDefault(),t.stopPropagation(),e){Kn(!1);return}n&&Kn(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",vo,!0),document.addEventListener("pointerup",vo,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function Rl(){if(!jt)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=r=>{r.preventDefault(),r.stopPropagation(),Kn(!1)}),e&&(e.onclick=r=>{r.preventDefault(),r.stopPropagation(),Kn(!0)});const n=document.querySelector(".guildsync-confirm-overlay");n&&(n.onclick=r=>{r.target===n&&(r.preventDefault(),r.stopPropagation())})}function bs(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(Al())return;const e=t.dataset.tabId;!e||e===D||(D=e,l())})})}function Dl(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function Ml(t){const e={x:window.scrollX,y:window.scrollY},n=[];for(let o=t;o;o=o.parentElement)n.push({element:o,top:o.scrollTop,left:o.scrollLeft});const r=t?Array.from(t.querySelectorAll("*")):[],i=(o,a)=>o.id?o.id===a.id:o.tagName===a.tagName&&o.className===a.className,s=r.filter(o=>o.scrollTop||o.scrollLeft).map(o=>({identity:{id:o.id,tagName:o.tagName,className:o.className},occurrence:r.filter(a=>i(o,a)).indexOf(o),top:o.scrollTop,left:o.scrollLeft}));return()=>{const o=t?Array.from(t.querySelectorAll("*")):[];for(const{identity:a,occurrence:d,top:g,left:m}of s){const b=o.filter(y=>i(a,y))[d];b&&(b.scrollTop=g,b.scrollLeft=m)}for(const{element:a,top:d,left:g}of n)a.scrollTop=d,a.scrollLeft=g;window.scrollTo({left:e.x,top:e.y,behavior:"instant"})}}function l(t={}){pt&&Dl();const e=document.querySelector(".guildsync-tabs"),n=document.querySelector("#guildSyncTabContent"),r=Ml(n);e&&(e.innerHTML=ps()),n&&(n.innerHTML=gs()),bs(),Ea(),ra(),pa(),ws(),na(),js(),zs(),Ys(),Ks(),Cs(),ia(),r(),t.restoreDiscordSearchFocus&&Cf(),t.restoreRosterSearchFocus&&Of(),D==="discord-members"&&(u==null?void 0:u.connected)&&j.length===0&&!fn&&Li({silent:!0}),D==="eso-members"&&(u==null?void 0:u.connected)&&X.length===0&&!We&&!bo&&(bo=!0,Ln({silent:!0})),(D==="more"&&z.length===0||D==="settings"&&!x&&!ko)&&(u==null?void 0:u.connected)&&!ze&&(ko=!0,ye({silent:!0})),(D==="discord-members"||D==="eso-members"||D==="settings")&&(u==null?void 0:u.connected)&&$.length===0&&!G&&sr({silent:!0})}function Tl(){const t=Tf(),e=If(),n=Array.from(kt),r=Array.from(vt);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${c(Da(ir))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${fn||Gn?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Gn?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${f(Un)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!kt.has(i)).map(i=>`<option value="${f(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All roles</span>':n.map(i=>Ff(i)).join("")}
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
              ${ci.filter(i=>!vt.has(i.id)).map(i=>`<option value="${f(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>ys("discord",i)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${Tn("username","Username")}
                ${Tn("global_name","Global Name")}
                ${Tn("server_nickname","Server Nickname")}
                ${Tn("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>qf(i)).join(""):xf()}
            </tbody>
          </table>
        </div>
      </div>
      ${Mt?Kl():""}
    </div>
  `}function Nl(){const t=Ul(),e=Wl(),n=Array.from(nt),r=Array.from(St);return`
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
          <span class="discord-last-refresh">Last Refresh: ${c(ku(Hn))}</span>
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
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${f(Vn)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!nt.has(i)).map(i=>`<option value="${f(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All ranks</span>':n.map(i=>jl(i)).join("")}
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
              ${ci.filter(i=>!St.has(i.id)).map(i=>`<option value="${f(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>ys("roster",i)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${rn("account_name","Account Name")}
                ${rn("rank","Rank")}
                ${rn("joined","Joined")}
                ${rn("notes","Notes","roster-notes-header")}
                ${rn("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map((i,s)=>Bl(i,s)).join(""):Pl()}
            </tbody>
          </table>
        </div>
      </div>
      ${Rt?Zl():""}
      ${Ft?Ol():""}
    </div>
  `}function Bl(t,e=-1){const n=Fl(t.rank||""),r=n?` style="color: ${n};"`:"";return`
    <tr class="eso-roster-row${e===O?" roster-search-active-row":""}"${r} data-roster-row-index="${f(String(e))}" data-eso-account-name="${f(t.account_name||"")}">
      <td>${c(t.account_name||"")}</td>
      <td>${di(t.rank||"")}</td>
      <td>${c(lr(t.joined))}</td>
      <td class="roster-notes-cell">${Cl(t)}</td>
      <td class="member-link-action-cell">${Fs({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function Cl(t){const e=String((t==null?void 0:t.account_name)||"").trim(),n=Number((t==null?void 0:t.note_count)||0),r=n>0,i=r?`${n} roster note${n===1?"":"s"} for ${e}`:`No roster notes for ${e}`;return`
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
  `}function Ol(){const t=mn||"",e=Boolean((k==null?void 0:k.logged_in)&&(k==null?void 0:k.allowed));return`
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
          ${Fe?`<div class="discord-data-error">${c(Fe)}</div>`:""}
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
                ${Il()}
              </tbody>
            </table>
          </div>
          ${e?ql():'<div class="roster-history-muted">Log in to add a new note.</div>'}
        </div>
      </div>
    </div>
  `}function Il(){return Wn?'<tr><td class="bank-empty-row" colspan="3">Loading notes...</td></tr>':!Array.isArray(Pe)||Pe.length===0?'<tr><td class="bank-empty-row" colspan="3">No notes recorded for this member.</td></tr>':Pe.map(t=>`
      <tr>
        <td class="roster-notes-when-cell">${c(xl(t.timestamp))}</td>
        <td class="roster-notes-officer-cell">${c(t.officer||"")}</td>
        <td class="roster-notes-note-cell">${c(t.note||"")}</td>
      </tr>
    `).join("")}function ql(){return`
    <div class="roster-notes-form">
      <label for="rosterNotesNewNote">Add Note</label>
      <textarea
        id="rosterNotesNewNote"
        class="roster-notes-textarea"
        rows="4"
        placeholder="Enter a new roster note..."
        ${rt?"disabled":""}
      >${c(Dt)}</textarea>
      <button id="saveRosterNoteButton" class="refresh-discord-button" type="button" ${rt?"disabled":""}>
        ${rt?"Saving...":"Save Note"}
      </button>
    </div>
  `}function xl(t){const e=Number(t||0);return!Number.isFinite(e)||e<=0?"":new Date(e*1e3).toLocaleString()}function Pl(){return`
    <tr>
      <td class="bank-empty-row" colspan="5">${c(We?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function Fl(t){String(t||"").trim();const e=Gf(t);return hr(e==null?void 0:e.role_color)}function di(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${c(e)}</span>`}function Gl(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":di(e)}function Ul(){const t=Vn.trim().toLowerCase(),e=X.filter(n=>{const r=String(n.rank||"").trim();if(nt.size>0&&!nt.has(r)||!Ss(St,Hr(n)))return!1;if(!t)return!0;const i=lr(n.joined),s=gi(n.joined),o=Hr(n),a=vs(n.account_name||"");return[n.account_name,r,i,s,n.joined,o,a].map(g=>String(g||"").toLowerCase()).join(" ").includes(t)});return Hl(e)}function Hl(t){if(!Se||!V)return t;const e=V==="desc"?-1:1;return[...t].sort((n,r)=>{const i=So(n,Se),s=So(r,Se),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:String(n.account_name||"").localeCompare(String(r.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function So(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const n=Number(t.joined||0);return Number.isFinite(n)&&n>0?String(n).padStart(16,"0"):""}if(e==="notes")return String(Number(t.note_count||0)).padStart(8,"0");if(e==="linked"){const n=Hr(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[n]||"9"} ${n} ${vs(t.account_name||"")}`}return String(t.account_name||"")}function Vl(t){const n=new Set(["account_name","rank","joined","notes","linked"]).has(t)?t:"account_name";Se!==n?(Se=n,V="asc"):V==="asc"?V="desc":V==="desc"?(Se="",V=""):(Se=n,V="asc"),O=-1,l()}function rn(t,e,n=""){const r=Se===t&&Boolean(V),i=r?V==="asc"?"ascending":"descending":"none",s=r?V==="asc"?"\u25B2":"\u25BC":"\u2195";return`
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
  `}function Wl(){return Array.from(new Set(X.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function jl(t){const e=Ri(t),n=hr(e==null?void 0:e.role_color),r=Mi(n),i=Di(n,r);return`
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
  `}function zl(t){const e=ci.find(n=>n.id===t);return e?e.label:t}function ys(t,e){const n=t==="roster"?"roster":"discord",r=zl(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${n}-link-status-filter="${f(e)}"
      title="Remove ${f(r)} link filter"
    >
      <span>${c(r)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function ks(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked"&&String(n.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function Yl(t){return ks(cr(t==null?void 0:t.discord_id))}function Hr(t){return ks(ar(t==null?void 0:t.account_name))}function vs(t){const e=ar(t),n=Ps({mode:"eso-to-discord",esoAccountName:t}),r=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean),i=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="candidate").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean);return[n.label,n.title,r.join(" "),i.join(" ")].filter(Boolean).join(" ")}function Ss(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function Kl(){return`
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
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${f(De)}" />
        </div>

        ${Ae?`<div class="discord-data-error">${c(Ae)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Jl()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${ut?`: ${c(ut)}`:""}</div>
            ${Ql()}
          </div>
        </div>
      </div>
    </div>
  `}function Jl(){return Ue&&Q.length===0?'<div class="roster-history-muted">Searching...</div>':Q.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${Q.map((t,e)=>`
        <button class="roster-history-match${e===te||t.discord_id===Tt?" is-selected":""}" type="button" data-discord-history-id="${f(t.discord_id)}" data-discord-history-name="${f(Vr(t))}">
          <span>${c(Vr(t))}</span>
          <strong>${c(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===te?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Ql(){return Tt?Ue&&Ge.length===0?'<div class="roster-history-muted">Loading history...</div>':Ge.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${Ge.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(gi(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${c(Xl(t.event_type))}</td>
              <td>${c(t.old_value||"")}</td>
              <td>${c(t.new_value||"")}</td>
              <td>${c(t.initiator||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function Vr(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function Xl(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Zl(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(pn)}" />
        </div>

        ${_e?`<div class="discord-data-error">${c(_e)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${ed()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${je?`: ${c(je)}`:""}</div>
            ${td()}
          </div>
        </div>
      </div>
    </div>
  `}function ed(){return xe&&J.length===0?'<div class="roster-history-muted">Searching...</div>':J.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${J.map((t,e)=>`
        <button class="roster-history-match${e===ee||t.account_name===je?" is-selected":""}" type="button" data-roster-history-account="${f(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <strong>${c(t.rank||"")}</strong>
          ${e===ee?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function td(){return je?xe&&qe.length===0?'<div class="roster-history-muted">Loading history...</div>':qe.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${qe.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(gi(t.timestamp))}</td>
              <td>${c(t.event_type||"")}</td>
              <td>${Gl(t.rank)}</td>
              <td>${c(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function nd(){var t;return`
    <div class="guildsync-tab-panel reports-panel" data-active-tab="settings">
      <div class="discord-data-header reports-header">
        <div>
          <h2 class="discord-data-title">Reports & Admin</h2>
          <p class="discord-data-subtitle">Run GuildSync reports and administrative review tools. More options can be added here later.</p>
        </div>
      </div>

      <div class="reports-scroll-area">
        ${rd()}
        ${((t=k==null?void 0:k.user)==null?void 0:t.role)==="admin"?us.render():""}
        <section class="reports-list" aria-label="Available reports">
          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Associates Promotion Eligible</h3>
              <p>Shows Associates who have been in the guild at least two weeks, have purchased at least one raffle ticket, and are linked to Discord. Also shows otherwise eligible Associates who still need a Discord link reviewed.</p>
            </div>
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${Me?"disabled":""}>
              ${Me?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${Te?"disabled":""}>
              ${Te?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${Ne?"disabled":""}>
              ${Ne?"Loading...":"Run"}
            </button>
          </article>
        </section>

        <article class="report-option-card">
          <div class="report-option-copy">
            <h3>ESO / Discord Member Links</h3>
            <p>Review automatic ESO-to-Discord links, accept candidate matches, unlink blocked matches, or run the matcher again after roster or Discord refreshes.</p>
          </div>
          <button id="runMemberLinksReportButton" class="refresh-discord-button report-run-button" type="button" ${G?"disabled":""}>
            ${G?"Loading...":"Run"}
          </button>
        </article>
      </div>
    </div>
  `}function ws(){var t,e,n,r,i,s,o,a,d,g;D==="settings"&&(Ga(yl,{refresh:!0}),((t=k==null?void 0:k.user)==null?void 0:t.role)==="admin"&&us.wire({request:(m,b)=>_(m,b,12e4),rerender:l}),(e=document.querySelector("#cancelBonusDefaults"))==null||e.addEventListener("click",()=>{le=!1,l()}),(n=document.querySelector("#resetBonusDefaults"))==null||n.addEventListener("click",()=>{le=!0,l()}),(r=document.querySelector("#raffleBonusSettingsForm"))==null||r.addEventListener("submit",id),(i=document.querySelector("#raffleBonusSettingsForm"))==null||i.addEventListener("input",m=>{et={raffle:_t,values:new Map(new FormData(m.currentTarget))}}),(s=document.querySelector("#bonusRafflePicker"))==null||s.addEventListener("change",m=>{_t=m.currentTarget.value,le=!1,et=null,l()}),(o=document.querySelector("#runAssociateTicketReportButton"))==null||o.addEventListener("click",()=>_s()),(a=document.querySelector("#runDiscordRankAuditReportButton"))==null||a.addEventListener("click",()=>dd()),(d=document.querySelector("#runDiscordLastSeenReportButton"))==null||d.addEventListener("click",()=>pd()),(g=document.querySelector("#runMemberLinksReportButton"))==null||g.addEventListener("click",()=>Ad()))}function rd(){var o;if(!x)return"<p>Loading raffle bonus settings...</p>";const t=!le&&(et==null?void 0:et.raffle)===_t?et.values:null,e=Bt.find(a=>`${a.type}:${a.salesEnd}`===_t),n=le&&(e==null?void 0:e.inheritedSettings)?e.inheritedSettings:e,r=e?{enabledByType:{...x.enabledByType,[e.type]:n.enabled},biweekly:e.type==="biweekly"?n.tiers:x.biweekly,monthly:e.type==="monthly"?n.tiers:x.monthly}:le&&x.envDefaults||x,i=((o=k==null?void 0:k.user)==null?void 0:o.role)==="admin",s=(a,d)=>{var g,m;return`
    <fieldset class="raffle-bonus-tiers" ${i&&!le?"":"disabled"}>
      <legend>${d}</legend>
      <label><input name="${a}-enabled" type="checkbox" ${(t?t.has(`${a}-enabled`):(m=(g=r.enabledByType)==null?void 0:g[a])!=null?m:r.enabled)?"checked":""}> Enable bonus tickets</label>
      ${r[a].map((b,y)=>{var S,M;return`
        <div class="raffle-bonus-tier">
          <span>Period ${y+1}${y===r[a].length-1?" (final)":""}</span>
          <label>Hours <input name="${a}-${y}-hours" type="number" min="1" step="1" required value="${f(String(t&&(S=t.get(`${a}-${y}-hours`))!=null?S:b.hours))}"></label>
          <label>Bonus % <input name="${a}-${y}-percent" type="number" min="0" max="100" step="0.1" required value="${f(String(t&&(M=t.get(`${a}-${y}-percent`))!=null?M:b.percent))}"></label>
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
            ${Bt.map(a=>`<option value="${f(`${a.type}:${a.salesEnd}`)}" ${_t===`${a.type}:${a.salesEnd}`?"selected":""}>${c(a.label)}${a.enabled?" (Bonuses)":""}</option>`).join("")}
          </select>
        </label>
        <p>Source: ${c(e?e.overridden?"Raffle override":"Saved raffle policy":x.source===".env"?"Default":x.source||"Default")}</p>
        ${le?'<p role="status">Default restoration is pending. Click Save Bonus Settings to apply it, or change the selected raffle to cancel.</p><button type="button" id="cancelBonusDefaults">Cancel default restoration</button>':""}
        <form id="raffleBonusSettingsForm">
          ${i?`<button type="button" id="resetBonusDefaults">${e?"Return to raffle default (on Save)":"Return to default (on Save)"}</button>`:""}
          ${e?s(e.type,e.label):s("biweekly","Bi-Weekly Raffle")+s("monthly","50/50 Raffle")}
          ${i?'<button class="refresh-discord-button report-run-button" type="submit">Save Bonus Settings</button>':"<p>Admin access is required to change these settings.</p>"}
        </form>
        </div></div>
      </div>
    </article>`}async function id(t){t.preventDefault();const e=t.currentTarget,n=new FormData(e),r=Bt.find(o=>`${o.type}:${o.salesEnd}`===_t),i=o=>((r==null?void 0:r.type)===o?r.tiers:x[o]).map((a,d)=>({hours:Number(n.get(`${o}-${d}-hours`)),percent:Number(n.get(`${o}-${d}-percent`))})),s=r?{raffleType:r.type,salesEnd:r.salesEnd,enabled:n.has(`${r.type}-enabled`),tiers:i(r.type)}:{enabledByType:{biweekly:n.has("biweekly-enabled"),monthly:n.has("monthly-enabled")},biweekly:i("biweekly"),monthly:i("monthly")};try{le&&(s.resetToDefaults=!0);const o=await _("guildsync:save-raffle-bonus-settings",s,3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||"Could not save raffle bonus settings.");x=o.bonusSettings,et=null,le=!1,await ye({silent:!0}),h("bonus-settings","Raffle bonus settings saved.",{ttlMs:p}),l()}catch(o){h("bonus-settings-error",v(o),{ttlMs:p})}}function _s(){Gt=!0,it="",l(),Xs()}function Wr(){Gt=!1,it="",l()}function od(){const t=sd(),e=ad(),n=Ut.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${Me?"disabled":""}>${Me?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(n))} total row${n===1?"":"s"}</span>
        </div>

        ${it?`<div class="discord-data-error">${c(it)}</div>`:""}

        <div class="report-results-content">
          ${Me&&n===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!Me&&n===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${n>0?wo("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${n>0?wo("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${c($s())}</textarea>
      </div>
    </div>
  `}function sd(){return Ut.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function ad(){return Ut.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function wo(t,e,n,r){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${c(t)}</h4>
          <p>${c(e)}</p>
        </div>
        <span>${c(String(n.length))} row${n.length===1?"":"s"}</span>
      </div>
      ${n.length>0?cd(n):`<div class="roster-history-muted report-section-empty">${c(r)}</div>`}
    </section>
  `}function cd(t=Ut){return`
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
              <td>${di(e.rank||"")}</td>
              <td>${c(lr(e.joined))}</td>
              <td>${c(oe(e.purchased_tickets||0))}</td>
              <td class="associate-earliest-deposit-cell">${c(As(e))}</td>
              <td>${c(Ls(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function As(t){const e=String((t==null?void 0:t.earliest_deposit_summary)||"").trim();if(e)return e;const n=String((t==null?void 0:t.earliest_deposit_date)||"").trim(),r=String((t==null?void 0:t.earliest_deposit_raffle_period)||"").trim();return[n,r].filter(Boolean).join(" | ")}function Ls(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function $s(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Earliest Deposit / Raffle","Discord Link"]];for(const e of Ut){const n=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([n,e.account_name||"",e.rank||"",lr(e.joined),oe(e.purchased_tickets||0),As(e),Ls(e)])}return t.map(e=>e.map(ur).join("	")).join(`
`)}async function ld(){const t=$s();if(await fr(t)){h("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#associateTicketReportTsv");n&&(n.focus(),n.select()),h("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function dd(){Ht=!0,ot="",l(),Qs()}function jr(){Ht=!1,ot="",l()}function ud(){const t=gn.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${Te?"disabled":""}>${Te?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${ot?`<div class="discord-data-error">${c(ot)}</div>`:""}

        <div class="report-results-content">
          ${Te&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!Te&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?fd(gn):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${c(Ds())}</textarea>
      </div>
    </div>
  `}function fd(t=gn){return`
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
              <td data-label="Discord Member" class="discord-rank-audit-member-cell">${c(Es(e))}</td>
              <td data-label="Discord Rank Role" class="discord-rank-audit-discord-cell">${c(e.discord_rank||"No matching rank role")}</td>
              <td data-label="Linked ESO Account(s)" class="discord-rank-audit-eso-account-cell">${c(e.eso_accounts||"No linked ESO account")}</td>
              <td data-label="ESO Rank" class="discord-rank-audit-eso-rank-cell">${c(e.eso_rank||"None")}</td>
              <td data-label="Issue" class="discord-rank-audit-issue-cell">${c(Rs(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Es(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function Rs(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function Ds(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of gn)t.push([Es(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",Rs(e)]);return t.map(e=>e.map(ur).join("	")).join(`
`)}async function hd(){const t=Ds();if(await fr(t)){h("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#discordRankAuditReportTsv");n&&(n.focus(),n.select()),h("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function pd(){Vt=!0,st="",Wt="",l(),Js(),$.length===0&&!G&&sr({silent:!0})}function zr(){Vt=!1,st="",Wt="",Be="",wt="",Ce="",l()}function md(){const t=ui(),e=si.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${Ne?"disabled":""}>${Ne?"Loading...":"Run Again"}</button>
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
            value="${f(Wt)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${Be===""?"selected":""}>All link statuses</option>
            <option value="linked" ${Be==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${Be==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${Be==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${st?`<div class="discord-data-error discord-last-seen-report-error">${c(st)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${Ne&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!Ne&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?gd(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${c(Ts(t))}</textarea>
      </div>
    </div>
  `}function gd(t=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${on("name","Discord Member")}</th>
            <th>${on("eso","Linked ESO Account")}</th>
            <th>${on("date","Last Seen")}</th>
            <th>${on("days","Days Since")}</th>
            <th>${on("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr class="discord-last-seen-row ${f(wd(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${f(ht(e).status)}" data-discord-last-seen-search="${f(Ms(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${Sd(e)}
                  <span>${c(Ot(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${yd(e)}</td>
              <td>${c(fi(e.last_seen))}</td>
              <td>${c(hi(e.last_seen))}</td>
              <td>${c(Jn(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function on(t,e){const n=wt===t,r=n?Ce==="asc"?"\u25B2":"\u25BC":"\u2195",i=n?`${e}: ${Ce==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${n?" active":""}" type="button" data-discord-last-seen-sort="${f(t)}" title="${f(i)}">
      <span>${c(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${c(r)}</span>
    </button>
  `}function ui(){const t=[...si],e=wt,n=Ce;if(!e||!n)return t;const r=n==="desc"?-1:1;return t.sort((i,s)=>{var o,a;if(e==="date"){const d=Number(i.last_seen||0)||0,g=Number(s.last_seen||0)||0;return(d-g)*r}if(e==="days")return(_o(i.last_seen)-_o(s.last_seen))*r;if(e==="action")return Jn(i.last_seen_action).localeCompare(Jn(s.last_seen_action),void 0,{sensitivity:"base"})*r;if(e==="eso"){const d=ht(i),g=ht(s),m={linked:0,candidate:1,unlinked:2},b=((o=m[d.status])!=null?o:9)-((a=m[g.status])!=null?a:9);return b!==0?b*r:d.esoAccountName.localeCompare(g.esoAccountName,void 0,{sensitivity:"base"})*r}return Ot(i).localeCompare(Ot(s),void 0,{sensitivity:"base"})*r})}function bd(t){wt!==t?(wt=t,Ce="asc"):Ce==="asc"?Ce="desc":(wt="",Ce=""),l()}function Ot(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function Ms(t){return[Ot(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,kd(t),fi(t==null?void 0:t.last_seen),hi(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function ht(t){const e=Pd(t==null?void 0:t.discord_id),n=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),r=String((e==null?void 0:e.eso_account_name)||"").trim();return n==="linked"&&r?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:r,title:`Linked ESO account: ${r}`}:(n==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&r?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:r,title:`Fuzzy ESO account candidate: ${r}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function yd(t){const e=ht(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${f(e.className)}"
      title="${f(e.title)}"
      aria-label="${f(e.label)}"
      role="img"
    ></span>
  `}function kd(t){const e=ht(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function vd(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!n)return"";if(/^https?:\/\//i.test(e))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function Sd(t){const e=Ot(t),n=e?e.slice(0,2).toUpperCase():"?",r=vd(t);return r?`<span class="discord-member-avatar"><img src="${f(r)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${c(n)}</span>`}function fi(t){const e=Number(t);if(!e)return"Never";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t||"");const r=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(n).reduce((i,s)=>(i[s.type]=s.value,i),{});return`${r.month}/${r.day}/${r.year} ${r.hour}:${r.minute} ${r.dayPeriod}`}function wd(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const n=(Date.now()-e*1e3)/864e5;return n>30?"discord-last-seen-red":n>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function hi(t){const e=Number(t);if(!e)return"Never";const n=Date.now()-e*1e3;if(!Number.isFinite(n))return"";if(n<0)return"0 days";const r=Math.floor(n/864e5);return`${r} day${r===1?"":"s"}`}function _o(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const n=Date.now()-e*1e3;return Number.isFinite(n)?n<0?0:Math.floor(n/864e5):Number.POSITIVE_INFINITY}function Jn(t){return String(t||"").trim()||"None tracked"}function Ts(t=ui()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const n of t){const r=ht(n);e.push([Ot(n),r.label||"",r.esoAccountName||"",fi(n==null?void 0:n.last_seen),hi(n==null?void 0:n.last_seen),Jn(n==null?void 0:n.last_seen_action),(n==null?void 0:n.username)||"",(n==null?void 0:n.discord_id)||""])}return e.map(n=>n.map(ur).join("	")).join(`
`)}async function _d(){const t=ui().filter(i=>{const s=be(Wt),o=String(Be||"").trim().toLowerCase(),a=!s||be(Ms(i)).includes(s),d=!o||ht(i).status===o;return a&&d}),e=Ts(t);if(await fr(e)){h("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#discordLastSeenReportTsv");r&&(r.focus(),r.select()),h("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function Ad(){pt=!0,U="",l(),$.length===0&&!G&&sr({silent:!0})}function Yr(){pt=!1,or="",Ze="",Sn="",wn="",we=-1,l()}function Ns(t){return[...new Set((Array.isArray($)?$:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function Bs(t,e){return t.map(n=>`<option value="${f(n)}" ${e===n?"selected":""}>${c(n)}</option>`).join("")}function Ld(){return Bs(Ns("link_status"),Sn)}function $d(){return Bs(Ns("link_method"),wn)}function Ed(){return`
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
          <button id="refreshMemberLinksButton" class="clear-discord-filters-button" type="button" ${G?"disabled":""}>Refresh Links</button>
          <button id="runMemberAutoLinkButton" class="refresh-discord-button" type="button" ${G?"disabled":""}>${G?"Running...":"Run Auto-Linking"}</button>
          <span class="roster-history-muted">${c(String($.length))} link/candidate row${$.length===1?"":"s"}</span>
        </div>

        <div class="member-links-report-filter-row">
          <input
            id="memberLinksReportSearchInput"
            class="member-links-report-search-input"
            type="search"
            autocomplete="off"
            spellcheck="false"
            placeholder="Search Discord account or ESO member..."
            value="${f(or)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${Sn===""?"selected":""}>All statuses</option>
            ${Ld()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${wn===""?"selected":""}>All methods</option>
            ${$d()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${Ze===""?"selected":""}>All actions</option>
            <option value="needs-link" ${Ze==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${Ze==="can-unlink"?"selected":""}>Unlink Available</option>
            <option value="can-unblock" ${Ze==="can-unblock"?"selected":""}>Unblock Available</option>
          </select>
        </div>

        ${U?`<div class="discord-data-error member-links-report-error">${c(U)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${Td()}
        </div>
      </div>
    </div>
  `}function Cs(){var n,r,i,s,o,a;if(!pt)return;(n=document.querySelector("#closeMemberLinksReportButton"))==null||n.addEventListener("click",Yr),(r=document.querySelector("#refreshMemberLinksButton"))==null||r.addEventListener("click",()=>sr()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>qd());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",Nd),t.addEventListener("keydown",Id)),(s=document.querySelector("#memberLinksReportActionFilter"))==null||s.addEventListener("change",Bd),(o=document.querySelector("#memberLinksReportStatusFilter"))==null||o.addEventListener("change",Cd),(a=document.querySelector("#memberLinksReportMethodFilter"))==null||a.addEventListener("change",Od),An(),document.querySelectorAll("[data-accept-member-candidate]").forEach(d=>{d.addEventListener("click",()=>Is(d.dataset.acceptMemberCandidate||"",d.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(d=>{d.addEventListener("click",()=>xd(d.dataset.unlinkMemberLink||"",d.dataset.unlinkMemberLinkDiscordId||""))}),document.querySelectorAll("[data-unblock-member-auto-link]").forEach(d=>{d.addEventListener("click",()=>qs(d.dataset.unblockMemberAutoLink||"",d.dataset.unblockMemberAutoLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",d=>{d.target===e&&Yr()})}function Ao(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function Lo(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Rd(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Dd(t){return[...Array.isArray(t)?t:[]].sort((e,n)=>{const r=Ao(e)-Ao(n);if(r!==0)return r;const i=Lo(e).localeCompare(Lo(n),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((n==null?void 0:n.discord_user_id)||""),void 0,{sensitivity:"base"})})}function Md(t){const e=Kr(t);let n="";e==="Username"?n=(t==null?void 0:t.discord_username)||"":e==="Global Name"?n=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(n=(t==null?void 0:t.discord_server_nickname)||""),n||(n=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const r=e?` <span class="member-link-report-match-field">(${c(e)})</span>`:"";return`<span class="member-link-report-discord-name">${c(n)}</span>${r}`}function Td(){return G&&$.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray($)||$.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${Dd($).map(e=>{var s;const n=String(e.link_status||"").trim().toLowerCase(),r=String(e.link_method||"").trim().toLowerCase(),i=Md(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${f(Rd(e))}"
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
  `}function Os(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function $o(t){const e=Os();if(e.forEach(r=>r.classList.remove("member-links-report-row-active")),e.length===0){we=-1;return}we=Math.max(0,Math.min(t,e.length-1));const n=e[we];n.classList.add("member-links-report-row-active"),n.scrollIntoView({block:"nearest"})}function An(){const t=be(or),e=String(Ze||"").trim().toLowerCase(),n=String(Sn||"").trim().toLowerCase(),r=String(wn||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let s=0;i.forEach(a=>{const d=be(a.dataset.memberLinksReportSearch||""),g=String(a.dataset.memberLinksReportAction||"").trim().toLowerCase(),m=String(a.dataset.memberLinksReportStatus||"").trim().toLowerCase(),b=String(a.dataset.memberLinksReportMethod||"").trim().toLowerCase(),R=(!t||d.includes(t))&&(!e||g===e)&&(!n||m===n)&&(!r||b===r);a.hidden=!R,a.classList.remove("member-links-report-row-active"),R&&(s+=1)});const o=document.querySelector("#memberLinksReportSearchEmpty");o&&(o.hidden=s!==0),we=-1}function Nd(t){or=t.target.value||"",An()}function Bd(t){Ze=t.target.value||"",An()}function Cd(t){Sn=t.target.value||"",An()}function Od(t){wn=t.target.value||"",An()}function Id(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Os();if(e.length===0)return;if(t.key==="ArrowDown"){const r=we<0?0:we+1;$o(r>=e.length?e.length-1:r);return}const n=we<0?e.length-1:we-1;$o(n<0?0:n)}async function sr(t={}){if(!(u!=null&&u.connected)){U="You must be connected to load member links.",l();return}G=!0,U="",t.silent||l();try{const e=await _("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");$=Array.isArray(e.links)?e.links:[]}catch(e){U=v(e)}finally{G=!1,l()}}async function qd(){if(!(u!=null&&u.connected)||!k.logged_in){U="You must be logged in and connected to run auto-linking.",l();return}G=!0,U="",l();try{const t=await _("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");$=Array.isArray(t.links)?t.links:[],h("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:p})}catch(t){U=v(t)}finally{G=!1,l()}}async function Is(t,e=""){try{const n=await _("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to accept candidate.");$=Array.isArray(n.links)?n.links:$,h("member-link-accepted",n.message||"Candidate accepted as a link.",{ttlMs:p})}catch(n){U=v(n),h("member-link-accept-error",U,{ttlMs:p})}}async function qs(t,e=""){if(!await li({title:"Remove Auto-Link Block?",message:`Remove the blocked auto-match record between ${t} and this Discord account? Auto-linking will run immediately and this screen will refresh to show whether the pair linked again.`,confirmLabel:"Unblock",cancelLabel:"Cancel",confirmClass:"danger"}))return!1;G=!0,U="",l();try{const r=await _("guildsync:unblock-member-auto-link",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to remove auto-link block.");$=Array.isArray(r.links)?r.links:$;const i=ae(t),s=String(e||"").trim(),o=r.refreshedPair||$.find(g=>ae(g.eso_account_name)===i&&String(g.discord_user_id||"").trim()===s),a=String((o==null?void 0:o.link_status)||"").trim().toLowerCase(),d=a==="linked"?" It linked again automatically.":a==="candidate"?" It is now showing as a candidate.":" No automatic link was recreated.";return h("member-link-unblocked",`${r.message||"Auto-link block removed."}${d}`,{ttlMs:p}),!0}catch(r){return U=v(r),h("member-link-unblock-error",U,{ttlMs:p}),!1}finally{G=!1,l()}}async function xd(t,e=""){if(!!await li({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const r=await _("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to unlink member.");$=Array.isArray(r.links)?r.links:$,h("member-link-unlinked",r.message||"Member link removed.",{ttlMs:p})}catch(r){U=v(r)}l()}}function ae(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function ar(t){const e=ae(t);return e?$.filter(n=>ae(n.eso_account_name)===e):[]}function cr(t){const e=String(t||"").trim();return e?$.filter(n=>String(n.discord_user_id||"").trim()===e):[]}function xs(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const n=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(n.length>0){const i=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const s=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return s||n[0]}const r=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return r||e[0]}function Pd(t){return xs(cr(t))}function Fd(t){return`${ae(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function pi(){return A?A.mode==="discord-to-eso"?cr(A.discordUserId):ar(A.esoAccountName):[]}function Gd(t){const e=String(t||"").trim(),n=j.find(r=>String(r.discord_id||"").trim()===e);return n&&(n.server_nickname||n.global_name||n.username||n.discord_id)||e}function Ps(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?cr(t.discordUserId):ar(t.esoAccountName),r=xs(n),i=String((r==null?void 0:r.link_status)||"").trim().toLowerCase(),s=n.filter(a=>String(a.link_status||"").trim().toLowerCase()==="linked").length,o=n.filter(a=>String(a.link_status||"").trim().toLowerCase()==="candidate").length;return s>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?s===1?r.eso_account_name:`${s} ESO accounts`:s===1?r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member":`${s} Discord accounts`}`}:i==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?r.eso_account_name:r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member"}`}:i==="blocked"||Number((r==null?void 0:r.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function Fs(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,r=Ps(t);return`
    <button
      class="member-link-status-dot member-link-status-${f(r.className)}"
      type="button"
      title="${f(r.title)}"
      aria-label="${f(r.label)}"
      data-open-member-link-dialog="${f(e)}"
      data-member-link-value="${f(n||"")}"
    ></button>
  `}function Ud(){return A?A.mode==="discord-to-eso"?Gd(A.discordUserId):A.esoAccountName||"":""}function Gs(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function Kr(t){const e=Gs((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const n=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(n.includes("discord_username")||n.includes("username"))return"Username";if(n.includes("discord_display_name")||n.includes("global")||n.includes("display"))return"Global Name";if(n.includes("discord_server_nickname")||n.includes("server")||n.includes("nickname"))return"Server Nickname";const r=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(r==="exact"||r==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",s=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const a of s){const d=Hd(i,a.value);(!o||d>o.score)&&(o={...a,score:d})}if(o&&o.score>0)return o.field}return""}function be(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function Hd(t,e){const n=be(t),r=be(e);if(!n||!r)return 0;if(n===r)return 100;if((n.includes(r)||r.includes(n))&&Math.min(n.length,r.length)>=4)return 88;const i=Math.abs(n.length-r.length),s=[...n].findIndex((a,d)=>a!==r[d]),o=s===-1?Math.min(n.length,r.length):s;return Math.max(0,Math.min(75,Math.round(o*10-i*3)))}function Vd(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function Wd(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function jd(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),n=Vd(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${c(n)}</span>`}function zd(t){var a;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",n=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",r=String(t.link_status||"").trim().toLowerCase(),o=r==="linked"?`<button
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
        <div><span>Status:</span> ${jd(t)} \xB7 ${c(Wd(t.link_method))} \xB7 ${c(String((a=t.match_confidence)!=null?a:""))}% \xB7 ${c(n)}</div>
        ${Kr(t)?`<div><span>Matched:</span> Matched on ${c(Kr(t))}</div>`:""}
      </div>
      ${o}
    </div>
  `}function Yd(){const t=pi();return t.length?[...t].sort((n,r)=>{var d,g;const i=String(n.link_status||"").trim().toLowerCase(),s=String(r.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},a=((d=o[i])!=null?d:9)-((g=o[s])!=null?g:9);return a!==0?a:Number(r.match_confidence||0)-Number(n.match_confidence||0)}).map(n=>zd(n)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function Kd(){if(Nt)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if($e)return`<div class="discord-data-error">${c($e)}</div>`;if(!Array.isArray(at)||at.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(pi().map(n=>Fd(n))),e=[...at].filter(n=>{const r=(A==null?void 0:A.mode)==="discord-to-eso"?`${ae(n.account_name)}::${String(A.discordUserId||"").trim()}`:`${ae(A==null?void 0:A.esoAccountName)}::${String(n.discord_id||"").trim()}`;return!t.has(r)}).sort((n,r)=>{const i=Number(r.confidence||0)-Number(n.confidence||0);return i!==0?i:Eo(n).localeCompare(Eo(r),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(n=>Jd(n)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function Eo(t){return((A==null?void 0:A.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function Jd(t,e={}){var b,y,S;const n=(A==null?void 0:A.mode)||"",r=n==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=Gs(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),s=n==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[s,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),a=n==="discord-to-eso"?t.account_name:t.discord_id,d=e.disabled===!0,g=[r,s,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),m=[r,o,`${(b=t.confidence)!=null?b:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${f(a||"")}" data-member-link-option-search="${f(g)}" title="${f(m)}" ${d?"disabled":""}>
      <span class="member-link-option-name" title="${f(r||"")}">${c(r||"")}</span>
      <span class="member-link-option-subtitle" title="${f(o||"")}">${c(o||"")}</span>
      <span class="member-link-option-confidence" title="${f(String((y=t.confidence)!=null?y:0))}%">${c(String((S=t.confidence)!=null?S:0))}%</span>
    </button>
  `}function Qd(){const t=(A==null?void 0:A.mode)||"",e=Ud(),n=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
            ${Yd()}
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
              value="${f(_n)}"
            />
            ${Kd()}
          </section>
        </div>

      </div>
    </div>
  `}async function Us(t,e){if(!(u!=null&&u.connected)||!L()){h("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:p});return}Ke=!0,A=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},at=[],Nt=!0,$e="",_n="",de=-1,l();try{if(!Array.isArray($)||$.length===0){const i=await _("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&($=Array.isArray(i.links)?i.links:[])}const r=await _("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load link suggestions.");at=Array.isArray(r.options)?r.options:[]}catch(n){$e=v(n)}finally{Nt=!1,l()}}function It(){document.removeEventListener("keydown",Jr),Ke=!1,A=null,at=[],Nt=!1,$e="",_n="",de=-1,l()}function Hs(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function Ro(t){const e=Hs();if(e.forEach(r=>r.classList.remove("member-link-option-row-active")),e.length===0){de=-1;return}de=Math.max(0,Math.min(t,e.length-1));const n=e[de];n.classList.add("member-link-option-row-active"),n.scrollIntoView({block:"nearest"})}function Vs(){const t=be(_n),e=[...document.querySelectorAll(".member-link-option-row")];let n=0;e.forEach(i=>{const s=be(i.dataset.memberLinkOptionSearch||i.textContent||""),o=!t||s.includes(t);i.hidden=!o,i.classList.remove("member-link-option-row-active"),o&&(n+=1)});const r=document.querySelector("#memberLinkSuggestionSearchEmpty");r&&(r.hidden=n!==0),de=-1}function Xd(t){_n=t.target.value||"",Vs()}function Zd(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Hs();if(e.length===0)return;if(t.key==="ArrowDown"){const r=de<0?0:de+1;Ro(r>=e.length?e.length-1:r);return}const n=de<0?e.length-1:de-1;Ro(n<0?0:n)}function Jr(t){!Ke||t.key==="Escape"&&(t.preventDefault(),It())}async function eu(t){if(!(!A||!t))try{const e=A.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:A.discordUserId}:{esoAccountName:A.esoAccountName,discordUserId:t},n=await _("guildsync:manual-link-member",e,3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to link members.");$=Array.isArray(n.links)?n.links:$,h("member-link-saved",n.message||"Member link saved.",{ttlMs:p}),It()}catch(e){$e=v(e),l()}}async function tu(t,e=""){await Is(t,e),It()}async function Ws(){if(!!A){Nt=!0,$e="",l();try{const t=A.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:A.discordUserId}:{mode:"eso-to-discord",accountName:A.esoAccountName},e=await _("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");at=Array.isArray(e.options)?e.options:[]}catch(t){$e=v(t)}finally{Nt=!1,l()}}}async function nu(t="",e=""){const n=pi().find(i=>ae(i.eso_account_name)===ae(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!n||!await li({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await _("guildsync:manual-unlink-member",{esoAccountName:n.eso_account_name,discordUserId:n.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");$=Array.isArray(i.links)?i.links:$,h("member-link-unlinked",i.message||"Member link removed.",{ttlMs:p}),await Ws()}catch(i){$e=v(i),l()}}async function ru(t="",e=""){await qs(t,e)&&await Ws()}function js(){var n;if(!Ke)return;document.removeEventListener("keydown",Jr),document.addEventListener("keydown",Jr),(n=document.querySelector("#closeMemberLinkDialogButton"))==null||n.addEventListener("click",It);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",Xd),t.addEventListener("keydown",Zd),Vs()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(r=>{r.addEventListener("click",()=>nu(r.dataset.unlinkEsoAccount||"",r.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-unblock-dialog-member-auto-link]").forEach(r=>{r.addEventListener("click",()=>ru(r.dataset.unblockEsoAccount||"",r.dataset.unblockDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(r=>{r.addEventListener("click",()=>eu(r.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(r=>{r.addEventListener("click",()=>tu(r.dataset.acceptDialogMemberCandidate||"",r.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",r=>{r.target===e&&It()})}function zs(){var e,n,r;if(!Gt)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",Wr),(n=document.querySelector("#rerunAssociateTicketReportButton"))==null||n.addEventListener("click",()=>Xs()),(r=document.querySelector("#copyAssociateTicketReportGridButton"))==null||r.addEventListener("click",()=>ld());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Wr()})}function Ys(){var e,n,r;if(!Ht)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",jr),(n=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||n.addEventListener("click",()=>Qs()),(r=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||r.addEventListener("click",()=>hd());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&jr()})}function Ks(){var r,i,s;if(!Vt)return;(r=document.querySelector("#closeDiscordLastSeenReportButton"))==null||r.addEventListener("click",zr),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>Js()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>_d()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(o=>{o.addEventListener("click",()=>bd(o.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",iu);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",ou),mi();const n=document.querySelector(".discord-last-seen-report-overlay");n&&n.addEventListener("click",o=>{o.target===n&&zr()})}function iu(t){Wt=t.target.value||"",mi()}function ou(t){Be=t.target.value||"",mi()}function mi(){const t=be(Wt),e=String(Be||"").trim().toLowerCase(),n=[...document.querySelectorAll("[data-discord-last-seen-row]")];let r=0;n.forEach(s=>{const o=be(s.dataset.discordLastSeenSearch||s.textContent||""),a=String(s.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),m=(!t||o.includes(t))&&(!e||a===e);s.hidden=!m,m&&(r+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=r!==0)}async function Js(){if(!(u!=null&&u.connected)||!L()){st="You must be logged in and connected to run this report.",l();return}Ne=!0,st="",l();try{const t=await _("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");j=$i(t.members),rr=Ei(t.roles),si=[...j]}catch(t){st=v(t)}finally{Ne=!1,l(),N("discordLastSeenReportSearchInput")}}async function Qs(){if(!(u!=null&&u.connected)||!L()){ot="You must be logged in and connected to run this report.",l();return}Te=!0,ot="",l();try{const t=await _("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");gn=Array.isArray(t.rows)?t.rows:[]}catch(t){ot=v(t)}finally{Te=!1,l()}}async function Xs(){if(!(u!=null&&u.connected)||!L()){it="You must be logged in and connected to run this report.",l();return}Me=!0,it="",l();try{const t=await _("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Ut=Array.isArray(t.rows)?t.rows:[]}catch(t){it=v(t)}finally{Me=!1,l()}}function Lt(){const t=String(Kt||"").trim().toLowerCase(),e={account_name:"Anonymous",rank:"Manual Entry"},n=new Set(["anonymous"]),r=X.filter(i=>String(i.account_name||"").trim()).filter(i=>{const o=String(i.account_name||"").trim().toLowerCase();return!o||n.has(o)||t&&!o.includes(t)?!1:(n.add(o),!0)}).slice().sort((i,s)=>{const o=String(i.account_name||"").toLowerCase(),a=String(s.account_name||"").toLowerCase(),d=t&&o.startsWith(t)?0:1,g=t&&a.startsWith(t)?0:1;return d!==g?d-g:o.localeCompare(a)}).slice(0,19);return[e,...r]}function Zs(t=Lt()){const e=String(E.accountName||"").trim();return t.length===0?'<div class="roster-history-muted manual-ticket-no-matches">No matching guild members found.</div>':t.map((n,r)=>`
        <button class="roster-history-match${r===P||n.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${f(n.account_name)}" role="option" aria-selected="${r===P||n.account_name===e?"true":"false"}">
          <span>${c(n.account_name)}</span>
          <strong>${c(n.rank||"")}</strong>
          ${r===P?"<small>Enter</small>":""}
        </button>
      `).join("")}function ea(){document.querySelectorAll("[data-manual-ticket-account]").forEach(t=>{t.addEventListener("mousedown",e=>{e.preventDefault()}),t.addEventListener("click",()=>{ta(t.dataset.manualTicketAccount||"")})})}function Er(){const t=document.querySelector("#manualTicketMatchList");if(!t)return;const e=Lt();P>=e.length&&(P=e.length>0?e.length-1:-1),t.innerHTML=Zs(e),ea()}function ta(t){const e=String(t||"").trim();E.accountName=e,Kt=e,re=!1,P=-1,Y="",l()}function N(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const n=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(n,n)},0)}function su(){const t=re?Lt():[],e=String(E.accountName||"").trim();return`
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
              <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(Kt)}" autocomplete="off" />
            </label>

            ${re?`
              <div id="manualTicketMatchList" class="roster-history-match-list manual-ticket-match-list" role="listbox" aria-label="Matching guild members">
                ${Zs(t)}
              </div>
            `:""}
          </div>

          ${e?`<div class="roster-history-muted manual-ticket-selected-member">Selected: ${c(e)}</div>`:""}

          <div class="manual-ticket-entry-row">
            <div class="manual-ticket-type-field" role="group" aria-label="Ticket type">
              <button class="manual-ticket-type-label${E.ticketType!=="monthly"?" is-selected":""}" type="button" data-manual-ticket-type="biweekly" aria-pressed="${E.ticketType!=="monthly"?"true":"false"}">Bi-Weekly</button>
              <button class="manual-ticket-type-switch" type="button" data-manual-ticket-toggle="true" data-selected-type="${E.ticketType==="monthly"?"monthly":"biweekly"}" aria-label="Toggle ticket type. Current selection is ${E.ticketType==="monthly"?"50/50":"Bi-Weekly"}">
                <span class="manual-ticket-type-track" aria-hidden="true"></span>
                <span class="manual-ticket-type-thumb" aria-hidden="true"></span>
              </button>
              <button class="manual-ticket-type-label${E.ticketType==="monthly"?" is-selected":""}" type="button" data-manual-ticket-type="monthly" aria-pressed="${E.ticketType==="monthly"?"true":"false"}">50/50</button>
            </div>
            <label class="manual-ticket-note-field">
              <textarea id="manualTicketNoteInput" class="discord-search-input manual-ticket-note-input" rows="4" placeholder="Enter a reason such as FFTG">${c(E.note)}</textarea>
            </label>
            <div class="manual-ticket-side-fields">
              <label class="manual-ticket-gold-field">
                <input id="manualTicketGoldInput" class="discord-search-input manual-ticket-gold-input" type="number" min="0" step="1" inputmode="numeric" placeholder="Gold Value" value="${f(E.goldValue)}" />
                <span class="manual-ticket-gold-coin" aria-hidden="true"></span>
              </label>
              <label class="manual-ticket-count-field">
                <div class="manual-ticket-number-wrap">
                  <input id="manualTicketCountInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${f(E.tickets)}" />
                  <div class="manual-ticket-number-buttons" aria-hidden="true">
                    <button id="manualTicketCountUpButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2303</button>
                    <button id="manualTicketCountDownButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2304</button>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div class="manual-ticket-actions">
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${jn?"disabled":""}>${jn?"Saving...":"Add Manual Entry"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function na(){var s,o,a,d,g,m;if(!Le)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{Le=!1,l()});const t=document.querySelector("#manualTicketAccountSearchInput");if(t){const b=({rerender:y=!1}={})=>{if(re=!0,P=Lt().length>0?0:-1,y){l(),N("manualTicketAccountSearchInput");return}Er()};t.addEventListener("focus",()=>{re||b({rerender:!0})}),t.addEventListener("click",()=>{re||b({rerender:!0})}),t.addEventListener("input",y=>{Kt=y.target.value||"",E.accountName="",re=!0,P=Lt().length>0?0:-1,Er()}),t.addEventListener("keydown",y=>{if(y.key==="Escape")return;if(!re){(y.key==="ArrowDown"||y.key==="ArrowUp")&&(y.preventDefault(),b({rerender:!0}));return}const S=Lt();if(y.key==="ArrowDown"||y.key==="ArrowUp"){if(S.length===0)return;y.preventDefault();const H=y.key==="ArrowDown"?1:-1;P=((P<0?0:P)+H+S.length)%S.length,Er();return}if(y.key!=="Enter")return;y.preventDefault();const M=S[P>=0?P:0];M!=null&&M.account_name&&ta(M.account_name)})}ea(),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",b=>{E.note=b.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(b=>{b.addEventListener("click",()=>{const y=String(b.dataset.manualTicketType||"").trim().toLowerCase();E.ticketType=y==="monthly"?"monthly":"biweekly",l()})}),(a=document.querySelector("[data-manual-ticket-toggle]"))==null||a.addEventListener("click",()=>{E.ticketType=E.ticketType==="monthly"?"biweekly":"monthly",l()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",b=>{const y=String(b.target.value||"").replace(/\D/g,"");b.target.value!==y&&(b.target.value=y),E.goldValue=y});const n=document.querySelector("#manualTicketCountInput");n==null||n.addEventListener("input",b=>{const y=String(b.target.value||"").replace(/\D/g,"");b.target.value!==y&&(b.target.value=y),E.tickets=y});const r=b=>{const y=Number(E.tickets)||0,S=Math.max(0,y+b);E.tickets=String(S),n&&(n.value=E.tickets,n.focus())};(d=document.querySelector("#manualTicketCountUpButton"))==null||d.addEventListener("click",()=>r(1)),(g=document.querySelector("#manualTicketCountDownButton"))==null||g.addEventListener("click",()=>r(-1)),(m=document.querySelector("#saveManualBiweeklyTicketButton"))==null||m.addEventListener("click",()=>au());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",b=>{b.target===i&&(Le=!1,l())})}async function au(){const t=String(E.accountName||"").trim(),e=String(E.note||"").trim(),n=String(E.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",r=Number(String(E.goldValue||"").trim()||0),i=Number(String(E.tickets||"").trim()||0);if(re){Y="Select a matching guild member or Anonymous from the list before saving.",l(),N("manualTicketAccountSearchInput");return}if(!t){Y="Select a matching guild member or Anonymous from the list before saving.",l(),N("manualTicketAccountSearchInput");return}if(!Number.isFinite(r)||r<0){Y="Gold value must be zero or greater.",l();return}if(!Number.isFinite(i)||i<0){Y="Tickets must be zero or greater.",l();return}const s=t.toLowerCase()==="anonymous";if(s&&Math.floor(i)>0){Y="Anonymous cannot be awarded tickets. Use 0 tickets and enter a gold value.",l();return}if(Math.floor(r)===0&&Math.floor(i)===0){Y=s?"Enter a gold value for Anonymous when tickets are 0.":"Enter gold or tickets. Both cannot be zero.",l();return}jn=!0,Y="",l();try{const o=await _("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:n,gold_value:Math.floor(r),tickets:Math.floor(i)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Failed to add manual entry.");Le=!1,E={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},Kt="",P=-1,re=!1,await ye({silent:!0}),h("manual-ticket-added",o.message||"Manual entry added.",{ttlMs:p})}catch(o){Y=v(o)}finally{jn=!1,l()}}async function cu(t=""){const e=String(t||"").trim();if(!!e){Ft=!0,mn=e,Pe=[],Wn=!0,rt=!1,Fe="",Dt="",l();try{const n=await _("guildsync:request-roster-member-notes",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster notes.");Pe=Array.isArray(n.notes)?n.notes:[]}catch(n){Fe=v(n)}finally{Wn=!1,l()}}}function Qr(){Ft=!1,mn="",Pe=[],Wn=!1,rt=!1,Fe="",Dt="",l()}function lu(){var n,r;if(!Ft)return;(n=document.querySelector("#closeRosterNotesButton"))==null||n.addEventListener("click",Qr);const t=document.querySelector("#rosterNotesNewNote");t&&t.addEventListener("input",i=>{Dt=i.target.value||""}),(r=document.querySelector("#saveRosterNoteButton"))==null||r.addEventListener("click",()=>du());const e=document.querySelector(".roster-notes-overlay");e&&e.addEventListener("click",i=>{i.target===e&&Qr()})}async function du(){const t=String(Dt||"").trim();if(!t){Fe="Enter a note before saving.",l();return}rt=!0,Fe="",l();try{const e=await _("guildsync:add-roster-member-note",{account_name:mn,note:t},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to save roster note.");e.note&&(Pe=[...Pe,e.note]),Dt="";const n=X.find(r=>ae(r.account_name)===ae(mn));n&&(n.note_count=Number(n.note_count||0)+1)}catch(e){Fe=v(e)}finally{rt=!1,l()}}function ra(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>Ln());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{Rt=!0,_e="",l()});const n=document.querySelector("#rosterMemberSearch");n&&(n.addEventListener("input",o=>{Vn=o.target.value||"",Fr=o.target.selectionStart,Gr=o.target.selectionEnd,O=-1,l({restoreRosterSearchFocus:!0})}),n.addEventListener("keydown",uu)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Vl(o.dataset.rosterSortColumn||"account_name")})});const r=document.querySelector("#rosterRankFilter");r&&r.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(nt.add(a),O=-1,l())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRosterRankFilter||"";nt.delete(a),O=-1,l()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(St.add(a),O=-1,l())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRosterLinkStatusFilter||"";St.delete(a),O=-1,l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>Us(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))}),document.querySelectorAll("[data-open-roster-notes]").forEach(o=>{o.addEventListener("click",()=>cu(o.dataset.openRosterNotes||""))}),lu();const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{Vn="",nt.clear(),St.clear(),Se="",V="",O=-1,l()}),fu()}function uu(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){O=-1;return}t.preventDefault(),t.key==="ArrowDown"?O=O<0?0:Math.min(O+1,e.length-1):t.key==="ArrowUp"&&(O=O<0?e.length-1:Math.max(O-1,0)),e.forEach((r,i)=>{r.classList.toggle("roster-search-active-row",i===O)});const n=e[O];n&&typeof n.scrollIntoView=="function"&&n.scrollIntoView({block:"nearest",inline:"nearest"})}function fu(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{Rt=!1,l()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",n=>{if(pn=n.target.value||"",ee=-1,!pn.trim()){clearTimeout($r),_e="",J=[],je="",qe=[],xe=!1,l(),N("rosterHistorySearchInput");return}clearTimeout($r),$r=setTimeout(()=>{gu({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(J.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;ee=((ee<0?0:ee)+i+J.length)%J.length,l(),N("rosterHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=J[ee>=0?ee:0];r!=null&&r.account_name&&Mo(r.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(n=>{n.addEventListener("click",()=>{Mo(n.dataset.rosterHistoryAccount||"")})})}function ia(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{Mt=!1,l()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",n=>{De=n.target.value||"",te=-1,Qe+=1;const r=Qe;if(clearTimeout(yo),!De.trim()){Ae="",Q=[],Tt="",ut="",Ge=[],Ue=!1,l(),N("discordHistorySearchInput");return}yo=setTimeout(()=>{hu({auto:!0,keepFocus:!0,generation:r})},bl)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(Q.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;te=((te<0?0:te)+i+Q.length)%Q.length,l(),N("discordHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=Q[te>=0?te:0];r!=null&&r.discord_id&&Do(r.discord_id,Vr(r))})),document.querySelectorAll("[data-discord-history-id]").forEach(n=>{n.addEventListener("click",()=>{Do(n.dataset.discordHistoryId||"",n.dataset.discordHistoryName||"")})})}async function hu(t={}){const e=Number.isInteger(t.generation)?t.generation:++Qe,n=De.trim();if(e===Qe){if(!n){Ae="",Q=[],te=-1,Tt="",ut="",Ge=[],Ue=!1,l(),t.keepFocus&&N("discordHistorySearchInput");return}Ue=!0,Ae="",Q=[],te=-1,Tt="",ut="",Ge=[],l(),t.keepFocus&&N("discordHistorySearchInput");try{const r=await _("guildsync:request-discord-member-history",{query:n},3e4);if(e!==Qe||n!==De.trim())return;if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search Discord member history.");Q=pu(r.matches),te=Q.length>0?0:-1}catch(r){if(e!==Qe||n!==De.trim())return;Ae=v(r)}finally{if(e!==Qe||n!==De.trim())return;Ue=!1,l(),t.keepFocus&&N("discordHistorySearchInput")}}}async function Do(t,e="",n={}){const r=String(t||"").trim();if(!!r){Tt=r,ut=String(e||r).trim(),De=ut,Ge=[],Ue=!0,Ae="",l();try{const i=await _("guildsync:request-discord-member-history-events",{discord_id:r},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");Ge=mu(i.events)}catch(i){Ae=v(i)}finally{Ue=!1,n.keepLoading||l()}}}function pu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function mu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s,o,a,d,g,m,b,y;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((r=(n=e.old_value)!=null?n:e.oldValue)!=null?r:"").trim(),new_value:String((s=(i=e.new_value)!=null?i:e.newValue)!=null?s:"").trim(),event_timestamp:(d=(a=(o=e.event_timestamp)!=null?o:e.eventTimestamp)!=null?a:e.timestamp)!=null?d:"",event_datetime:(m=(g=e.event_datetime)!=null?g:e.eventDatetime)!=null?m:"",initiator:String((y=(b=e.initiator)!=null?b:e.initiatorName)!=null?y:"").trim(),source:String(e.source||"").trim()}}):[]}async function gu(t={}){const e=pn.trim();if(!e){_e="",J=[],ee=-1,je="",qe=[],xe=!1,l(),t.keepFocus&&N("rosterHistorySearchInput");return}xe=!0,_e="",J=[],ee=-1,je="",qe=[],l(),t.keepFocus&&N("rosterHistorySearchInput");try{const n=await _("guildsync:request-roster-rank-history",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search roster rank history.");J=bu(n.matches),ee=J.length>0?0:-1}catch(n){_e=v(n)}finally{xe=!1,l(),t.keepFocus&&N("rosterHistorySearchInput")}}async function Mo(t,e={}){const n=String(t||"").trim();if(!!n){je=n,pn=n,qe=[],xe=!0,_e="",l();try{const r=await _("guildsync:request-roster-stream-history",{account_name:n},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load roster stream history.");qe=yu(r.events)}catch(r){_e=v(r)}finally{xe=!1,e.keepLoading||l()}}}function bu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function yu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(r=(n=e.timestamp)!=null?n:e.timestampS)!=null?r:"",officer:String(e.officer||"").trim()}}):[]}function oa(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(n=e.joined)!=null?n:"",note_count:Number((i=(r=e.note_count)!=null?r:e.noteCount)!=null?i:0)||0}}).sort((e,n)=>e.account_name.localeCompare(n.account_name)):[]}function ku(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function lr(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function gi(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function vu(t={}){X=oa(t.members),Hn=t.last_refresh||new Date().toISOString(),D==="eso-members"&&l(),h("roster-data-updated",`Roster data updated. Loaded ${X.length} member record${X.length===1?"":"s"}.`,{ttlMs:p})}async function Ln(t={}){if(!!(u!=null&&u.connected)){We=!0,l();try{const e=await _("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");X=oa(e.members),Hn=e.last_refresh||Hn,t.silent||h("roster-data-loaded",`Loaded ${X.length} roster member${X.length===1?"":"s"}.`,{ttlMs:p})}catch(e){h("roster-data-error",v(e),{ttlMs:p})}finally{We=!1,l()}}}async function Su(t={}){var e;if(!!L()){if(!(u!=null&&u.connected)){h("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}We=!0,l();try{const n=await zc(t);if(!(n!=null&&n.ok)){h("roster-data-pending",(n==null?void 0:n.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:p});return}const r={local_upload_id:sa(),authenticated_username:ce(),authenticated_discord_user_id:((e=k==null?void 0:k.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await ca(r)}catch(i){throw wu(r),i}await Ln({silent:!0})}catch(n){h("roster-data-error",v(n),{ttlMs:p})}finally{We=!1,l()}}}function sa(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function bi(){try{const t=window.localStorage.getItem(os),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function aa(t){window.localStorage.setItem(os,JSON.stringify(Array.isArray(t)?t:[]))}function wu(t){const e=String((t==null?void 0:t.local_upload_id)||sa()),n=bi().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),aa(n),h("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function _u(t){const e=bi().filter(n=>(n==null?void 0:n.local_upload_id)!==t);aa(e)}async function Au(){if(_r||!(u!=null&&u.connected)||!L())return;const t=bi();if(t.length!==0){_r=!0;try{for(const e of t){if(!(u!=null&&u.connected)||!L())return;await ca(e),_u(e.local_upload_id)}}catch(e){h("roster-data-pending-error",`Pending roster upload retry failed: ${v(e)}`,{ttlMs:p})}finally{_r=!1}}}async function ca(t){if(!(u!=null&&u.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await _("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const n=await Jc(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return h("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:p}),e}async function Lu(t={}){var e,n;if(!!L()){if(!(u!=null&&u.connected)){h("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}try{const r=await Wc(t);if(!(r!=null&&r.ok)){h("applications-data-info",(r==null?void 0:r.message)||"No application records were found to process.",{ttlMs:p});return}if((Array.isArray((e=r==null?void 0:r.data)==null?void 0:e.records)?r.data.records:[]).length===0){h("applications-data-info",`No application records were found in ${r.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:p});return}const s={local_upload_id:la(),authenticated_username:ce(),authenticated_discord_user_id:((n=k==null?void 0:k.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await ua(s)}catch(o){throw $u(s),o}}catch(r){h("applications-data-error",v(r),{ttlMs:p})}}}function la(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function yi(){try{const t=window.localStorage.getItem(ss),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function da(t){window.localStorage.setItem(ss,JSON.stringify(Array.isArray(t)?t:[]))}function $u(t){const e=String((t==null?void 0:t.local_upload_id)||la()),n=yi().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),da(n),h("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Eu(t){const e=yi().filter(n=>(n==null?void 0:n.local_upload_id)!==t);da(e)}async function Ru(){if(Ar||!(u!=null&&u.connected)||!L())return;const t=yi();if(t.length!==0){Ar=!0;try{for(const e of t){if(!(u!=null&&u.connected)||!L())return;await ua(e),Eu(e.local_upload_id)}}catch(e){h("applications-data-pending-error",`Pending application upload retry failed: ${v(e)}`,{ttlMs:p})}finally{Ar=!1}}}async function ua(t){var i;if(!(u!=null&&u.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return h("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:p}),{ok:!0,sent_count:0,skipped_empty:!0};let n=0;for(const s of e){const o=await _("guildsync:eso-guild-application-message",{...t,record:s,recordKey:(s==null?void 0:s.recordKey)||"",message:Du(s)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Backend rejected the application data payload. Application data was not cleared.");n+=1}const r=await Yc(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return h("applications-data-sent",`Sent ${n} application record${n===1?"":"s"} to GuildSync backend.`,{ttlMs:p}),{ok:!0,sent_count:n}}function Du(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),n=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",r=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",s=String(t.applicationText||"_No application text captured._"),o=Object.entries(t).filter(([a])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(a)).map(([a,d])=>`**${a}:** ${Mu(d)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${n}** ${r} an application from **${i}**.`,"","**Application text:**","```",s.slice(0,1500),"```",o.length>0?"":null,o.length>0?"**Full captured record fields:**":null,...o].filter(a=>a!==null).join(`
`)}function Mu(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function Tu(t={}){await Lu(t)}function Nu(){const t=Xr(T),e=uf(t,T),n=T!=="other",r=n&&Jt(T);return`
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
          ${Fu()}
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${c(Da(fs))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${ze||!L()?"disabled":""} ${L()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${ze?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${Rr("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${Rr("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${Rr("other","?","Other","All other deposits")}
        </div>

        ${Pu(T)}

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
              ${t.length>0?t.map(i=>hf(i,n,r)).join(""):pf(n,r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${c($t(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${T==="monthly"?`<div>Raffle Pot: <strong>${c($t(Math.floor(e.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${T==="biweekly"?`<div>Raffle Pot: <strong>${c($t(ya(e.amount)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${T==="biweekly"?`<div>Draws: <strong>${c(String(ff(e.amount)))}</strong></div>`:""}
          ${n?`<div>Purchased: <strong>${c(oe(e.purchased))}</strong></div>${r?`<div>Bonus: <strong>${c(oe(e.bonus))}</strong></div>`:""}<div>Total Tickets: <strong>${c(oe(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${ct?Iu(Xr(se)):""}
    </div>
  `}function Bu(){return`
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
            <input id="bankingHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" autocomplete="off" placeholder="Start typing part of an account name..." value="${f(ft)}" />
          </label>
          ${Cu()}
        </div>

        ${pe?`<div class="discord-data-error">${c(pe)}</div>`:""}

        <div class="banking-history-results">
          <div class="roster-history-section-title">Banking History${fe?`: ${c(fe)}`:""}${fe?`<span class="banking-history-count">${c(String(ie.length))} record${ie.length===1?"":"s"} found</span>`:""}</div>
          ${Ou()}
        </div>
      </div>
    </div>
  `}function Cu(){return ft.trim()?he&&F.length===0&&!fe?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">Searching...</div></div>':F.length===0&&!fe?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">No matching banking names found.</div></div>':F.length===0?"":`
    <div class="banking-history-autocomplete" role="listbox" aria-label="Banking history matches">
      ${F.map((t,e)=>`
        <button class="banking-history-autocomplete-option${e===ne?" is-selected":""}" type="button" data-banking-history-account="${f(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <small>${c(String(Number(t.record_count||t.recordCount||0)||0))} record${Number(t.record_count||t.recordCount||0)===1?"":"s"}</small>
        </button>
      `).join("")}
    </div>
  `:""}function Ou(){const t=ie.some(e=>e.bonus_enabled);return fe?he&&ie.length===0?'<div class="roster-history-muted">Loading banking history...</div>':ie.length===0?'<div class="roster-history-muted">No banking history found for this account.</div>':`
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
          ${ie.map(e=>{var n,r,i,s,o;return`
            <tr>
              <td>${c(ef((i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:""))}</td>
              <td>${c(tf(e.transaction_type||e.type||""))}</td>
              <td style="text-align:right;">${c(nf((o=(s=e.deposit_amount)!=null?s:e.depositAmount)!=null?o:e.amount))} \u{1FA99}</td>
              <td style="text-align:right;">${c(Dr(e.purchased_tickets))}</td>
              ${t?`<td style="text-align:right;">${e.bonus_enabled?`${c(oe(e.bonus_percent))}%`:""}</td><td style="text-align:right;">${e.bonus_enabled?c(Dr(e.bonus_tickets)):""}</td>`:""}
              <td style="text-align:right;">${c(Dr(e.total_tickets))}</td>
              <td class="banking-history-note-cell">${c(e.note||"")}</td>
            </tr>
          `}).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see banking history.</div>'}function Iu(t){const e=Jt(se);return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${c(me(se))} Deposits</h3>
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
              ${t.length>0?t.map(n=>qu(n)).join(""):xu()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${c(ma(t))}</textarea>
      </div>
    </div>
  `}function qu(t){const e=Jt(se);return`
    <tr>
      <td>${c(t.displayName||"")}</td>
      <td>${c(String(_i(t,se)))}</td>
      <td>${c(String(t.purchasedTickets))}</td>
      ${e?`<td>${c(String(t.bonusPercent))}%</td><td>${c(String(t.bonusTickets))}</td>`:""}
      <td>${c(String(t.totalTickets))}</td>
      <td>${c(t.note||"")}</td>
    </tr>
  `}function xu(){return`
    <tr>
      <td class="bank-empty-row" colspan="${Jt(se)?7:5}">No deposits to export for ${c(me(se))}.</td>
    </tr>
  `}function Pu(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=Si(t),n=Xn(t),r=n<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${f(me(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${c(me(t))} Raffle Period ${n===0?"(Current)":`(${Math.abs(n)} period${Math.abs(n)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${c(xn(e.salesStart))} through ${c(xn(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${c(xn(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${r?"":"disabled"} aria-label="Next ${f(me(t))} raffle period">\u203A</button>
    </div>
  `}function Rr(t,e,n,r){const i=T===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${f(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${c(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${c(n)}</span>
        <span class="bank-section-subtitle">${c(r)}</span>
      </span>
    </button>
  `}function Fu(){if(!L())return"";const t=dr(),e=$n(),n=fa(),r=t>0,i=e>0,s=n>0;if(!r&&!i&&!s)return"";let o="",a="",d=!1;r?(o=`Check Out ${t} Deposit Mail`,a="checkout"):i?(d=!0,bt?o=`Writing ${e} Pending Mail`:W.running?o=`${e} Mail Waiting for ESO Closure`:(_a("render-pending-mail-button"),o=`${e} Mail Writing to Disk`)):(d=!0,o=`${n} Mail Ready to Send`);const g=r?"Check out new deposit mail. GuildSync will immediately try to write it, or hold it until ESO closes.":i?"Deposit mail is already checked out and will be written automatically after ESO closes.":"Deposit mail has been written to ESO SavedVariables and is ready for ESO to send it and write acknowledgements.",m=qr||bt,b=W.running?"ESO Running":"ESO Not Running",y=W.running?"eso-running":"eso-not-running";return`
    <button id="checkoutDepositMailButton" class="${`bank-export-button deposit-mail-button${d?" deposit-mail-status-only":""}`}" type="button" data-deposit-mail-action="${f(a)}" ${d||m?'aria-disabled="true"':""} title="${f(W.message||g)}" aria-label="${f(`${o}. ${g}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${c(o)}</span>
      <span aria-hidden="true">(</span><span class="deposit-mail-eso-status ${y}" aria-hidden="true">${c(b)}</span><span aria-hidden="true">)</span>
    </button>
  `}function $n(){return En().reduce((t,e)=>t+Qt(e.records).length,0)}function Gu(){const t=(k==null?void 0:k.user)||{};return new Set([ce(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function Uu(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?Gu().has(e):!1}function fa(){return L()?z.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="written_to_eso"&&Uu(t)}).length:0}function dr(){return z.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="unsent"}).length}function Hu(t){const e=String(t||"").trim();return z.find(n=>String(n.eventId||"").trim()===e)||null}function ki(t){const e=String(t||"other").toLowerCase(),n=["biweekly","monthly","other"],r=n.includes(e)?e:"other",i=n.filter(s=>s!==r);return[i[0]||"biweekly",r,i[1]||"other"]}function vi(t={},e="other"){const n=String(e||"other").toLowerCase(),r=Number(t==null?void 0:t.amount)||0;return n===String((t==null?void 0:t.type)||"").toLowerCase()?Number(t==null?void 0:t.ticketAmount)||0:n==="biweekly"?Math.floor(r/500):n==="monthly"?Math.floor(r/2500):0}function ha(t={},e="other",n=""){const r=String(t.type||"other").toLowerCase(),i=me(r),s=me(e),o=ce()||"Unknown user",a=[`Moved from ${i} to ${s} by ${o}.`,`Ref ${t.eventId||""}`],d=String(n||"").trim();return d&&a.push(`Reason: ${d}`),a.join(`
`)}function Vu(t){const e=Hu(t);if(!e){h("banking-move-missing","Could not find the selected banking entry.",{ttlMs:p});return}const n=String(e.type||"other").toLowerCase();ve=e,I={targetType:n,note:"",tickets:String(vi(e,n))},ke="",Ct=!1,zt=!0,l()}function Qn(){zt=!1,Ct=!1,ke="",ve=null,I={targetType:"other",note:"",tickets:""},l()}function Wu(){const t=ve||{},e=String(t.type||"other").toLowerCase(),n=me(e),r=ki(e);let i=String(I.targetType||r[0]||"other").toLowerCase();r.includes(i)||(i=r[0]||"other",I.targetType=i);const s=ha(t,i,I.note);return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="bankingMoveDialogTitle">
      <div class="roster-history-dialog manual-ticket-dialog banking-move-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="bankingMoveDialogTitle">Move Banking Entry</h3>
            <p>Move this deposit to a different banking section while preserving a reference to the original event.</p>
          </div>
          <button id="closeBankingMoveDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${ke?`<div class="discord-data-error">${c(ke)}</div>`:""}

        <div class="manual-ticket-form banking-move-form">
          <div class="banking-move-current-entry">
            <div><strong>Current Type:</strong> ${c(n)}</div>
            <div><strong>Event ID:</strong> ${c(t.eventId||"")}</div>
            <div><strong>Depositor:</strong> ${c(t.displayName||"")}</div>
            <div><strong>Amount:</strong> ${c($t(t.amount))} \u{1FA99}</div>
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
                    <strong>${c(me(o))}</strong>
                    <span>${o===e?"Current / restore original values":`${c(String(vi(t,o)))} tickets`}</span>
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
            <button id="saveBankingMoveButton" class="refresh-discord-button banking-move-submit-button" type="button" ${Ct||i===e?"disabled":""}>${Ct?"MOVING...":i===e?"SELECT A SIDE TO MOVE":"MOVE"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function ju(){var n,r,i,s;if(!zt)return;(n=document.querySelector("#closeBankingMoveDialogButton"))==null||n.addEventListener("click",()=>Qn());function t(o){const a=String(o||"other").toLowerCase(),d=String((ve==null?void 0:ve.type)||"other").toLowerCase(),g=ki(d);I.targetType=g.includes(a)?a:d,I.tickets=String(vi(ve||{},I.targetType)),l()}document.querySelectorAll("[data-banking-move-target]").forEach(o=>{o.addEventListener("click",()=>t(o.dataset.bankingMoveTarget))}),(r=document.querySelector("#bankingMoveTicketsInput"))==null||r.addEventListener("input",o=>{const a=String(o.target.value||"").replace(/\D/g,"");o.target.value!==a&&(o.target.value=a),I.tickets=a}),(i=document.querySelector("#bankingMoveNoteInput"))==null||i.addEventListener("input",o=>{I.note=o.target.value||"";const a=document.querySelector(".banking-move-generated-note");a&&(a.innerText=ha(ve||{},I.targetType||"other",I.note))}),(s=document.querySelector("#saveBankingMoveButton"))==null||s.addEventListener("click",()=>zu());const e=document.querySelector(".roster-history-overlay");e&&e.addEventListener("click",o=>{o.target===e&&Qn()})}async function zu(){const t=ve;if(!(t!=null&&t.eventId)){ke="No banking entry is selected.",l();return}const e=String(t.type||"other").toLowerCase(),n=ki(e),r=String(I.targetType||n[0]||"other").toLowerCase();if(!n.includes(r)||r===e){ke="Select one of the side destinations before moving this entry.",l();return}const i=r==="other"?0:Math.floor(Number(String(I.tickets||"").trim()||0));if(!Number.isFinite(i)||i<0){ke="Tickets must be zero or greater.",l();return}Ct=!0,ke="",l();try{const s=await _("guildsync:move-banking-entry",{event_id:t.eventId,target_type:r,tickets:i,note:I.note||""},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to move banking entry.");Qn(),await ye({silent:!0}),h("banking-entry-moved",s.message||"Banking entry moved.",{ttlMs:p})}catch(s){Ct=!1,ke=v(s),l()}}function Yu(){if(!L()){h("banking-history-login-required","Login required to lookup banking history.",{ttlMs:p});return}Yt=!0,ft="",F=[],ie=[],fe="",he=!1,pe="",ne=-1,clearTimeout(At),l(),N("bankingHistorySearchInput")}function Ku(){Yt=!1,he=!1,pe="",clearTimeout(At)}function Ju(){if(!Yt)return;const t=document.querySelector("#bankingHistorySearchInput");t&&(t.addEventListener("input",e=>{if(ft=e.target.value||"",ne=-1,fe="",ie=[],!ft.trim()){clearTimeout(At),pe="",F=[],he=!1,l(),N("bankingHistorySearchInput");return}clearTimeout(At),At=setTimeout(()=>{Qu({keepFocus:!0})},250)}),t.addEventListener("keydown",e=>{if(e.key==="ArrowDown"||e.key==="ArrowUp"){if(F.length===0)return;e.preventDefault();const r=e.key==="ArrowDown"?1:-1;ne=((ne<0?0:ne)+r+F.length)%F.length,l(),N("bankingHistorySearchInput");return}if(e.key!=="Enter")return;e.preventDefault();const n=F[ne>=0?ne:0];n!=null&&n.account_name&&To(n.account_name)})),document.querySelectorAll("[data-banking-history-account]").forEach(e=>{e.addEventListener("click",()=>{To(e.dataset.bankingHistoryAccount||"")})})}async function Qu(t={}){const e=ft.trim();if(!e){pe="",F=[],ne=-1,fe="",ie=[],he=!1,l(),t.keepFocus&&N("bankingHistorySearchInput");return}he=!0,pe="",F=[],ne=-1,l(),t.keepFocus&&N("bankingHistorySearchInput");try{const n=await _("guildsync:request-banking-history-matches",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search banking history.");F=Xu(n.matches),ne=F.length>0?0:-1}catch(n){pe=v(n)}finally{he=!1,l(),t.keepFocus&&N("bankingHistorySearchInput")}}async function To(t){const e=String(t||"").trim();if(!!e){clearTimeout(At),fe=e,ft=e,F=[],ie=[],he=!0,pe="",l();try{const n=await _("guildsync:request-banking-history-records",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load banking history.");ie=Zu(n.records)}catch(n){pe=v(n)}finally{he=!1,l()}}}function Xu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s;return{account_name:String(e.account_name||e.accountName||"").trim(),record_count:Number((r=(n=e.record_count)!=null?n:e.recordCount)!=null?r:0)||0,last_event_timestamp:(s=(i=e.last_event_timestamp)!=null?i:e.lastEventTimestamp)!=null?s:""}}).filter(e=>e.account_name):[]}function Zu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s,o,a,d,g,m,b,y,S,M,H,R,Ee,Je,Xt,Zt;return{event_id:String(e.event_id||e.eventId||"").trim(),transaction_type:String(e.transaction_type||e.transactionType||e.type||"").trim(),event_timestamp:(i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:"",deposit_amount:(a=(o=(s=e.deposit_amount)!=null?s:e.depositAmount)!=null?o:e.amount)!=null?a:"",ticket_quantity:(m=(g=(d=e.ticket_quantity)!=null?d:e.ticketQuantity)!=null?g:e.ticketAmount)!=null?m:"",purchased_tickets:(M=(S=(y=(b=e.purchasedTickets)!=null?b:e.ticket_quantity)!=null?y:e.ticketQuantity)!=null?S:e.ticketAmount)!=null?M:0,bonus_tickets:(H=e.bonusTickets)!=null?H:0,bonus_percent:(R=e.bonusPercent)!=null?R:0,bonus_enabled:e.bonusEnabled===!0,total_tickets:(Zt=(Xt=(Je=(Ee=e.totalTickets)!=null?Ee:e.ticket_quantity)!=null?Je:e.ticketQuantity)!=null?Xt:e.ticketAmount)!=null?Zt:0,note:String(e.note||"").trim()}}).sort((e,n)=>{const r=Number(e.event_timestamp)||0,i=Number(n.event_timestamp)||0;return r!==i?r-i:String(e.event_id).localeCompare(String(n.event_id),void 0,{numeric:!0})}):[]}function ef(t){const e=Number(t);if(!e)return"";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t);const r=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0"),s=String(n.getFullYear()),o=String(n.getHours()).padStart(2,"0"),a=String(n.getMinutes()).padStart(2,"0"),d=String(n.getSeconds()).padStart(2,"0");return`${r}/${i}/${s} ${o}:${a}:${d}`}function tf(t){const e=String(t||"").trim().toLowerCase();return e==="monthly"?"50/50":e==="biweekly"?"Bi-Weekly":e==="other"?"Other":e?e.replace(/\b\w/g,n=>n.toUpperCase()):""}function nf(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":$t(e)}function Dr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":oe(e)}function pa(){if(D!=="more")return;ju(),Ju(),document.querySelectorAll("[data-bank-entry-move]").forEach(a=>{a.addEventListener("click",()=>Vu(a.dataset.bankEntryMove||""))}),document.querySelectorAll("[data-bank-section]").forEach(a=>{a.addEventListener("click",()=>{T=a.dataset.bankSection||"biweekly",l()})}),document.querySelectorAll("[data-bank-export-section]").forEach(a=>{a.addEventListener("click",()=>{se=(a.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",ct=!0,l()})}),document.querySelectorAll("[data-bank-period-move]").forEach(a=>{a.addEventListener("click",()=>{sf(a.dataset.bankPeriodMove||""),l()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{ct=!1,l()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>rf());const n=document.querySelector(".bank-export-overlay");n&&n.addEventListener("click",a=>{a.target===n&&(ct=!1,l())});const r=document.querySelector("#openBankingHistoryButton");r&&r.addEventListener("click",()=>Yu());const i=document.querySelector("#openManualBiweeklyTicketButton");i&&i.addEventListener("click",async()=>{if(!L()){h("manual-ticket-login-required","Login required to add manual entries.",{ttlMs:p});return}Le=!0,Y="",Kt=E.accountName||"",re=!1,P=-1,X.length===0&&(u==null?void 0:u.connected)&&L()&&await Ln({silent:!0}),l()});const s=document.querySelector("#checkoutDepositMailButton");s&&s.addEventListener("click",()=>{s.dataset.depositMailAction==="checkout"&&s.getAttribute("aria-disabled")!=="true"&&wf()});const o=document.querySelector("#refreshBankingDataButton");o&&o.addEventListener("click",()=>{if(!L()){h("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:p});return}va({key:"banking"})})}function ma(t){const e=Jt(se),n=[["Guildie Name","Deposit Amount","Purchased Tickets",...e?["Bonus %","Bonus Tickets"]:[],"Total Tickets","Note"]];for(const r of t)n.push([r.displayName||"",String(_i(r,se)),String(r.purchasedTickets),...e?[`${r.bonusPercent}%`,String(r.bonusTickets)]:[],String(r.totalTickets),r.note||""]);return n.map(r=>r.map(ur).join("	")).join(`
`)}function ur(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function fr(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly","readonly"),n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.width="1px",n.style.height="1px",n.style.opacity="0",n.style.pointerEvents="none",n.style.zIndex="-1",document.body.appendChild(n),n.focus(),n.select(),n.setSelectionRange(0,n.value.length);let r=!1;try{r=document.execCommand("copy")}finally{document.body.removeChild(n)}return r}async function rf(){const t=Xr(se),e=ma(t);if(await fr(e)){h("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#bankingExportTsv");r&&(r.focus(),r.select()),h("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:p})}function Xr(t){return z.filter(e=>e.type===t).filter(e=>of(t,e)).sort((e,n)=>(Number(e.time)||0)-(Number(n.time)||0))}function of(t,e){if(t==="other")return!0;const n=Number(e==null?void 0:e.time)||0;if(n<=0)return!1;const r=Si(t);return n>=r.salesStart&&n<=r.salesEnd}function Xn(t){return Number(Ur[t])||0}function sf(t){if(T!=="biweekly"&&T!=="monthly")return;const e=Xn(T);if(t==="previous"){Ur[T]=e-1;return}t==="next"&&e<0&&(Ur[T]=e+1)}function Si(t){const e=Math.floor(Date.now()/1e3);if(t==="monthly"){const i=af(e,Xn(t));return{salesStart:ba(i)+1,salesEnd:i,raffleTime:i+zn}}const n=Ye;let r=ga(e);return r+=Xn(t)*n,{salesStart:r-n+1,salesEnd:r,raffleTime:r+zn}}function ga(t){const e=Ye;let n=kl;for(;n-e>t;)n-=e;for(;n<t;)n+=e;return n}function af(t,e=0){let n=cf(t),r=Number(e)||0;for(;r<0;)n=ba(n),r+=1;for(;r>0;)n=lf(n),r-=1;return n}function cf(t){let e=ga(t);for(;!wi(e);)e+=Ye;return e}function ba(t){let e=t-Ye;for(;!wi(e);)e-=Ye;return e}function lf(t){let e=t+Ye;for(;!wi(e);)e+=Ye;return e}function wi(t){const e=t+zn,n=t+Ye+zn;return No(e)!==No(n)}function No(t){var s,o;const e=new Date(Number(t||0)*1e3);if(Number.isNaN(e.getTime()))return"";const n=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit"}).formatToParts(e),r=((s=n.find(a=>a.type==="year"))==null?void 0:s.value)||"",i=((o=n.find(a=>a.type==="month"))==null?void 0:o.value)||"";return`${r}-${i}`}function df(t=T){const e=String(t||"").toLowerCase();return e!=="monthly"&&e!=="biweekly"?0:"auto"}function _i(t={},e=T){const n=Number(t.amount)||0;if(!df(e))return n;const r=Math.abs(Math.trunc(n))%10,i=r===1||r===3?r:0;return i>0&&n>i?n-i:n}function uf(t,e=T){return t.reduce((n,r)=>(n.amount+=_i(r,e),n.purchased+=Number(r.purchasedTickets)||0,n.bonus+=Number(r.bonusTickets)||0,n.tickets+=Number(r.totalTickets)||0,n),{amount:0,purchased:0,bonus:0,tickets:0})}function ya(t){const e=Math.ceil((Number(t)||0)/2);return e<=0?0:Math.ceil(e/2e5)*2e5}function ff(t){const e=ya(t);return e>0?e/2e5:0}function Jt(t){var n;if(t!=="biweekly"&&t!=="monthly")return!1;const{salesEnd:e}=Si(t);return((n=Bt.find(r=>r.type===t&&r.salesEnd===e))==null?void 0:n.enabled)===!0}function hf(t,e=!0,n=Jt(T)){return`
    <tr>
      <td>${c(t.note||t.eventId||"")}</td>
      <td>${c(xn(t.time))}</td>
      <td>${c(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${c($t(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td>${c(oe(t.purchasedTickets))}</td>${n?`<td>${c(oe(t.bonusPercent))}%</td><td>${c(oe(t.bonusTickets))}</td>`:""}<td><strong class="bank-ticket-amount">${c(oe(t.totalTickets))}</strong></td>`:""}
      <td><button class="bank-entry-move-button" type="button" data-bank-entry-move="${f(t.eventId||"")}">Move</button></td>
    </tr>
  `}function pf(t=!0,e=!1){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?e?"9":"7":"5"}">No ${c(me(T))} deposits found for this ${T==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function me(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function xn(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function $t(t){return(Number(t)||0).toLocaleString()}function oe(t){return(Number(t)||0).toLocaleString()}function Qt(t){return Array.isArray(t)?t.map(e=>{var r,i,s,o,a,d,g,m,b,y,S,M,H,R,Ee,Je,Xt,Zt,Bi,Ci,Oi,Ii,qi,xi,Pi,Fi,Gi,Ui,Hi,Vi,Wi,ji,zi,Yi,Ki,Ji,Qi,Xi,Zi,eo,to,no,ro,io,oo,so,ao;const n=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:n==="monthly"||n==="biweekly"||n==="other"?n:"other",eventId:String((i=(r=e==null?void 0:e.eventId)!=null?r:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((o=(s=e==null?void 0:e.time)!=null?s:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((d=(a=e==null?void 0:e.displayName)!=null?a:e==null?void 0:e.display_name)!=null?d:"").trim(),amount:Number((g=e==null?void 0:e.amount)!=null?g:0)||0,ticketAmount:Number((b=(m=e==null?void 0:e.ticketAmount)!=null?m:e==null?void 0:e.ticket_amount)!=null?b:0)||0,purchasedTickets:Number((S=(y=e==null?void 0:e.purchasedTickets)!=null?y:e==null?void 0:e.ticketAmount)!=null?S:0)||0,bonusTickets:Number((M=e==null?void 0:e.bonusTickets)!=null?M:0)||0,bonusPercent:Number((H=e==null?void 0:e.bonusPercent)!=null?H:0)||0,bonusEnabled:(e==null?void 0:e.bonusEnabled)===!0,totalTickets:Number((Ee=(R=e==null?void 0:e.totalTickets)!=null?R:e==null?void 0:e.ticketAmount)!=null?Ee:0)||0,note:String((Je=e==null?void 0:e.note)!=null?Je:"").trim(),dataSource:String((Zt=(Xt=e==null?void 0:e.dataSource)!=null?Xt:e==null?void 0:e.data_source)!=null?Zt:"").trim(),emailRequested:Boolean((Bi=e==null?void 0:e.emailRequested)!=null?Bi:e==null?void 0:e.email_requested),mailStatus:String((Oi=(Ci=e==null?void 0:e.mailStatus)!=null?Ci:e==null?void 0:e.mail_status)!=null?Oi:"").trim(),mailRequestId:String((qi=(Ii=e==null?void 0:e.mailRequestId)!=null?Ii:e==null?void 0:e.mail_request_id)!=null?qi:"").trim(),mailBatchId:String((Pi=(xi=e==null?void 0:e.mailBatchId)!=null?xi:e==null?void 0:e.mail_batch_id)!=null?Pi:"").trim(),checkedOutBy:String((Gi=(Fi=e==null?void 0:e.checkedOutBy)!=null?Fi:e==null?void 0:e.checked_out_by)!=null?Gi:"").trim(),checkedOutAt:String((Hi=(Ui=e==null?void 0:e.checkedOutAt)!=null?Ui:e==null?void 0:e.checked_out_at)!=null?Hi:"").trim(),checkoutExpiresAt:String((Wi=(Vi=e==null?void 0:e.checkoutExpiresAt)!=null?Vi:e==null?void 0:e.checkout_expires_at)!=null?Wi:"").trim(),writtenToEsoAt:String((zi=(ji=e==null?void 0:e.writtenToEsoAt)!=null?ji:e==null?void 0:e.written_to_eso_at)!=null?zi:"").trim(),sentAt:String((Ki=(Yi=e==null?void 0:e.sentAt)!=null?Yi:e==null?void 0:e.sent_at)!=null?Ki:"").trim(),failedReason:String((Qi=(Ji=e==null?void 0:e.failedReason)!=null?Ji:e==null?void 0:e.failed_reason)!=null?Qi:"").trim(),recipient:String((to=(eo=(Zi=(Xi=e==null?void 0:e.recipient)!=null?Xi:e==null?void 0:e.account_name)!=null?Zi:e==null?void 0:e.displayName)!=null?eo:e==null?void 0:e.display_name)!=null?to:"").trim(),subject:String((io=(ro=(no=e==null?void 0:e.subject)!=null?no:e==null?void 0:e.mailSubject)!=null?ro:e==null?void 0:e.mail_subject)!=null?io:"").trim(),body:String((ao=(so=(oo=e==null?void 0:e.body)!=null?oo:e==null?void 0:e.mailBody)!=null?so:e==null?void 0:e.mail_body)!=null?ao:"").trim()}}):[]}function mf(t){const e=new Map;for(const n of z)n.eventId&&e.set(n.eventId,n);for(const n of t)!n.eventId||e.set(n.eventId,n);z=Array.from(e.values()).sort((n,r)=>(Number(r.time)||0)-(Number(n.time)||0))}function ka(){fs=new Date().toISOString()}async function gf(t={}){!(t!=null&&t.ok)||(z=Qt(t.entries),t.bonusSettings&&(x=t.bonusSettings),Array.isArray(t.bonusRaffles)&&(Bt=t.bonusRaffles),ka(),D==="more"&&l(),h("banking-data-updated",`Banking data updated. Loaded ${z.length} deposit record${z.length===1?"":"s"}.`,{ttlMs:p}))}async function ye(t={}){const e=Boolean(t.silent),n=Boolean(t.background);if(!(u!=null&&u.connected)){e||h("banking-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}n||(ze=!0,l());try{const r=await _("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");z=Qt(r.entries),r.bonusSettings&&(x=r.bonusSettings),Array.isArray(r.bonusRaffles)&&(Bt=r.bonusRaffles),ka(),e||h("banking-data",`Loaded ${z.length} banking deposit record${z.length===1?"":"s"}.`,{ttlMs:p})}catch(r){e||h("banking-data-error",v(r),{ttlMs:p})}finally{n||(ze=!1),l()}}async function Bo(){!(u!=null&&u.connected)||!L()||ze||(await ye({silent:!0,background:!0}),dr()<=0&&$n()>0&&(W.running?l():_a("availability-refresh")))}function bf(){gt&&clearInterval(gt),Bo(),gt=window.setInterval(Bo,pl)}function yf(){gt&&(clearInterval(gt),gt=null)}async function kf(t={}){if(!!L()){if(!(u!=null&&u.connected)){h("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:p});return}try{const e=await Vc(t);if(!(e!=null&&e.ok))return;const n=Array.isArray(e.ackEntries)?e.ackEntries:[];if(n.length===0)return;const r=await _("guildsync:mark-deposit-mail-sent",{mail_ack:n,mail_request_ids:n.map(o=>(o==null?void 0:o.mail_request_id)||(o==null?void 0:o.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(r.mail_request_ids)?r.mail_request_ids:Array.isArray(r.mailRequestIds)?r.mailRequestIds:[];if(i.length===0){h("deposit-mail-ack-none",r.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:p});return}const s=await Uc(i);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");h("deposit-mail-ack-sent",s.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:p}),await ye({silent:!0})}catch(e){h("deposit-mail-ack-error",v(e),{ttlMs:p})}}}async function vf(){if(!Lr){Lr=!0;try{const t=await Qc();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&h("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:p})}catch(t){h("deposit-mail-ack-cleanup-error",v(t),{ttlMs:p})}finally{Lr=!1}}}async function va(t={}){var e,n;if(!!L()){if(!(u!=null&&u.connected)){h("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}ze=!0,l();try{const r=await jc(t);if(!(r!=null&&r.ok)){h("banking-data-pending",(r==null?void 0:r.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:p});return}const i=Qt((e=r==null?void 0:r.data)==null?void 0:e.entries);mf(i);const s=new Date().toISOString(),o={local_upload_id:Aa(),authenticated_username:ce(),authenticated_discord_user_id:((n=k==null?void 0:k.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:s,data:r.data||{}};try{await $a(o)}catch(a){throw Lf(o),a}await ye({silent:!0})}catch(r){h("banking-data-error",v(r),{ttlMs:p})}finally{ze=!1,l()}}}function Sa(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function En(){try{const t=window.localStorage.getItem(is),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function wa(t){window.localStorage.setItem(is,JSON.stringify(Array.isArray(t)?t:[]))}function Sf(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||Sa()),n=En().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);n.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),wa(n)}function Co(t){const e=String(t||"").trim();if(!e)return;const n=En().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);wa(n)}async function wf(){if(!L()){h("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:p});return}if(!(u!=null&&u.connected)){h("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:p});return}const t=En(),e=dr();if(t.length>0&&e<=0){await qt();return}qr=!0,l();try{const n=await _("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail checkout request.");const r=Qt(n.records);if(r.length===0){h("deposit-mail-none",n.message||"No unsent deposit mail is available.",{ttlMs:p}),await ye({silent:!0});return}const i={mail_batch_id:n.mail_batch_id||n.mailBatchId||Sa(),checked_out_by:n.checked_out_by||n.checkedOutBy||ce(),checked_out_at:new Date().toISOString(),records:r};Sf(i),await qt()}catch(n){h("deposit-mail-error",v(n),{ttlMs:p})}finally{qr=!1,l()}}function _a(t=""){yt||bt||!L()||$n()<=0||W.running||(yt=window.setTimeout(()=>{yt=null,qt()},100))}async function qt(){if(yt&&(window.clearTimeout(yt),yt=null),bt||!L())return;const t=En();if(t.length!==0){if(await Zr({silent:!0}),W.running){h("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:p}),l();return}bt=!0,l();try{for(const e of t){const n=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),r=Qt(e==null?void 0:e.records);if(r.length===0){Co(n);continue}const i=await ll(r);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(u!=null&&u.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const s=await _("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:n,event_ids:i.eventIds||r.map(o=>o.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend did not confirm deposit mail was marked written_to_eso.");Co(n),h("deposit-mail-written",i.message||`Wrote ${r.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:p})}await ye({silent:!0})}catch(e){h("deposit-mail-write-error",v(e),{ttlMs:p})}finally{bt=!1,l()}}}async function Zr(t={}){try{const e=Boolean(W.running),n=await Xc();W={running:Boolean(n==null?void 0:n.running),message:String((n==null?void 0:n.message)||"")},W.running||await vf(),e&&!W.running&&(h("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:p}),await qt()),e!==W.running&&l()}catch(e){t.silent||h("eso-status-error",v(e),{ttlMs:p})}}function _f(){mt&&clearInterval(mt),Zr({silent:!0}).then(()=>{!W.running&&$n()>0&&qt()}),mt=window.setInterval(()=>Zr({silent:!0}),hl)}function Af(){mt&&(clearInterval(mt),mt=null)}function Aa(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Ai(){try{const t=window.localStorage.getItem(rs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function La(t){window.localStorage.setItem(rs,JSON.stringify(Array.isArray(t)?t:[]))}function Lf(t){const e=String((t==null?void 0:t.local_upload_id)||Aa()),n=Ai().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),La(n),h("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function $f(t){const e=Ai().filter(n=>(n==null?void 0:n.local_upload_id)!==t);La(e)}async function Ef(){if(wr||!(u!=null&&u.connected)||!L())return;const t=Ai();if(t.length!==0){wr=!0;try{for(const e of t){if(!(u!=null&&u.connected)||!L())return;await $a(e),$f(e.local_upload_id)}}catch(e){h("banking-data-pending-error",`Pending banking upload retry failed: ${v(e)}`,{ttlMs:p})}finally{wr=!1}}}async function $a(t){if(!(u!=null&&u.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await _("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const n=await Kc(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return h("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:p}),e}function Ea(){if(D!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>Rf());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{Mt=!0,Ae="",l(),N("discordHistorySearchInput")});const n=document.querySelector("#discordMemberSearch");n&&n.addEventListener("input",o=>{Un=o.target.value||"",xr=o.target.selectionStart,Pr=o.target.selectionEnd,l({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Bf(o.dataset.discordSortColumn||"username")})});const r=document.querySelector("#discordRoleFilter");r&&r.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(kt.add(a),l())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRoleFilter||"";kt.delete(a),l()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(vt.add(a),l())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeDiscordLinkStatusFilter||"";vt.delete(a),l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>Us(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{Un="",kt.clear(),vt.clear(),l()})}async function Rf(){var t,e;if(!(u!=null&&u.connected)){h("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:p});return}Gn=!0,l(),h("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const n=await _("guildsync:request-discord-data-refresh",{requested_by:((t=k==null?void 0:k.user)==null?void 0:t.display_name)||((e=k==null?void 0:k.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to request Discord data refresh.");h("discord-refresh-requested",n.message||"Discord data refresh completed.",{ttlMs:p}),await Li({silent:!0})}catch(n){h("discord-refresh-error",v(n),{ttlMs:p})}finally{Gn=!1,l()}}async function Df(){if(!(u!=null&&u.connected))return;const t=await _("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(ir=t.value||null)}async function Mf(t={}){if(!!(t!=null&&t.ok)){j=$i(t.members),rr=Ei(t.roles),t.last_refresh&&(ir=t.last_refresh);try{await Df()}catch{}D==="discord-members"&&l(),h("discord-data-updated",`Discord data updated. Loaded ${j.length} member record${j.length===1?"":"s"}.`,{ttlMs:p})}}async function Li(t={}){const e=Boolean(t.silent);if(!(u!=null&&u.connected)){h("discord-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}fn=!0,l();try{const[n,r]=await Promise.all([_("guildsync:request-discord-data-date",{}),_("guildsync:request-discord-member-dataJSON",{})]);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord refresh date.");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord member data.");ir=n.value||null,j=$i(r.members),rr=Ei(r.roles),e||h("discord-data",`Loaded ${j.length} Discord member record${j.length===1?"":"s"}.`,{ttlMs:p})}catch(n){h("discord-data-error",v(n),{ttlMs:p})}finally{fn=!1,l()}}function _(t,e={},n=3e4){return new Promise((r,i)=>{if(!(u!=null&&u.connected)){i(new Error("GuildSync websocket is not connected."));return}let s=!1;const o=window.setTimeout(()=>{s||(s=!0,i(new Error(`${t} timed out.`)))},n);u.emit(t,e,a=>{s||(s=!0,window.clearTimeout(o),r(a))})})}function $i(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(Ra).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,n)=>bn(e).localeCompare(bn(n),void 0,{sensitivity:"base"})):[]}function Ei(t){if(!Array.isArray(t))return[];const e=new Map;for(const n of t){const r=Ra(n);if(!r)continue;const i=r.role_id||dn(r.role_name);i&&!e.has(i)&&e.set(i,r)}return Array.from(e.values()).sort((n,r)=>String(n.role_name||"").localeCompare(String(r.role_name||""),void 0,{sensitivity:"base"}))}function Ra(t){var i,s;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),n=String(t.role_name||t.name||"Unnamed Role").trim(),r=(s=(i=t.role_color)!=null?i:t.color)!=null?s:null;return{role_id:e,role_name:n||"Unnamed Role",role_color:r}}function Tf(){const t=Un.trim().toLowerCase(),e=Array.from(kt),n=j.filter(r=>{if(t&&![r.username,r.global_name,r.server_nickname,r.discord_id,...r.roles.map(s=>s.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(r.roles.map(s=>s.role_name));if(!e.every(s=>i.has(s)))return!1}return!!Ss(vt,Yl(r))});return Nf(n)}function Nf(t){const e=tt==="desc"?-1:1;return[...t].sort((n,r)=>{const i=Oo(n,hn),s=Oo(r,hn),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:bn(n).localeCompare(bn(r),void 0,{sensitivity:"base",numeric:!0})})}function Oo(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(n=>n.role_name||"").filter(Boolean).sort((n,r)=>n.localeCompare(r,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function Bf(t){const n=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";hn===n?tt=tt==="asc"?"desc":"asc":(hn=n,tt="asc"),l()}function Tn(t,e){const n=hn===t,r=tt==="asc"?"ascending":"descending",i=n?tt==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${n?r:"none"}">
      <button
        class="discord-sort-header${n?" active":""}"
        type="button"
        data-discord-sort-column="${f(t)}"
        title="Sort ${f(e)} ${n&&tt==="asc"?"descending":"ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function Cf(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(xr)?xr:t.value.length,n=Number.isInteger(Pr)?Pr:e;t.setSelectionRange(e,n)}}function Of(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(Fr)?Fr:t.value.length,n=Number.isInteger(Gr)?Gr:e;t.setSelectionRange(e,n)}}function If(){const t=new Set;for(const e of j)for(const n of e.roles)n.role_name&&t.add(n.role_name);return Array.from(t).sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function qf(t){const e=Hf(t),n=bn(t),r=t.roles||[];return`
    <tr data-discord-user-id="${f(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${f(e)}" alt="${f(n)}" />`:`<span>${c(xa(n))}</span>`}
          </div>
          <span>${c(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${c(t.global_name||"")}</td>
      <td>${c(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${r.length>0?r.map(i=>Pf(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${Fs({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function xf(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${c(fn?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function Pf(t){const e=hr(t.role_color),n=Mi(e),r=Di(e,n);return`
    <span
      class="discord-role-badge"
      title="${f(t.role_name)}"
      style="${r}"
    >${c(t.role_name)}</span>
  `}function Ff(t){const e=Ri(t),n=hr(e==null?void 0:e.role_color),r=Mi(n),i=Di(n,r);return`
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
  `}function Gf(t){const e=Uf(t);for(const n of e){const r=Ri(n);if(r)return r}return null}function Uf(t){const e=String(t||"").trim();if(!e)return[];const n=dn(e),i={associate:["Associates","Associate"],associates:["Associates","Associate"],soldier:["Soldiers","Soldier"],soldiers:["Soldiers","Soldier"],capo:["Capo"],capos:["Capo","Capos"],caporegime:["CapoRegime","Capo Regime","Capo Regimes"],consiglieres:["Consigliere","Consiglieres"],consigliere:["Consigliere","Consiglieres"]}[n]||[e];return Array.from(new Set([e,...i].filter(Boolean)))}function dn(t){return String(t||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function Ri(t){const e=dn(t);if(!e)return null;const n=rr.find(r=>dn(r.role_name)===e);if(n)return n;for(const r of j){const i=r.roles.find(s=>dn(s.role_name)===e);if(i)return i}return null}function hr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function Di(t,e){return[`--role-fill-top: ${Io(t,"#ffffff",.16)}`,`--role-fill-bottom: ${Io(t,"#000000",.1)}`,`--role-fill-glow: ${qo(t,.28)}`,`--role-fill-edge: ${qo(t,.46)}`,`color: ${e}`].join("; ")}function Io(t,e,n){const r=Nn(t)||Nn("#64748b"),i=Nn(e)||Nn("#ffffff"),s=Math.max(0,Math.min(1,Number(n)||0)),o=Math.round(r.red+(i.red-r.red)*s),a=Math.round(r.green+(i.green-r.green)*s),d=Math.round(r.blue+(i.blue-r.blue)*s);return`#${Mr(o)}${Mr(a)}${Mr(d)}`}function Nn(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function Mr(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function qo(t,e){const n=String(t||"#64748b").replace("#",""),r=/^[0-9a-f]{6}$/i.test(n)?n:"64748b",i=parseInt(r.slice(0,2),16),s=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`rgba(${i}, ${s}, ${o}, ${e})`}function Mi(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const n=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(n*299+r*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function Hf(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!n)return"";const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function bn(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function Da(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Pn(){const t=document.querySelector("#discordArea");if(!!t){if(Rn(!1),L()){const e=k.user||{},n=ce(),r=ah(e),i=xa(n);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${r?`<img src="${f(r)}" alt="${f(n)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${c(i)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const s=document.querySelector("#discordAvatarButton");s.addEventListener("contextmenu",o=>{o.preventDefault(),xo()}),s.addEventListener("click",()=>{xo()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",Yf)}}function xo(){if(vn){Rn();return}zf()}function Vf(t=Ie){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],n=String((t==null?void 0:t.directory)||"").trim(),r=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const s=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),o=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),a=String((i==null?void 0:i.filePath)||(n?`${n}\\${o}`:o)).trim(),d=(i==null?void 0:i.enabled)!==!1,g=r&&d,m=`profileFileWatchToggle-${jf(s||o)}`;return`
          <label class="profile-filewatch-item ${d?"enabled":"disabled"}" title="${f(a)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${c(o)}</span>
              <span class="profile-filewatch-state">${g?"Watching":d?"On":"Off"}</span>
            </span>
            <input
              id="${f(m)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${f(s)}"
              ${d?"checked":""}
              aria-label="Turn file watch ${d?"off":"on"} for ${f(o)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function Ti(){var r,i,s;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=ce(),n=((r=k.user)==null?void 0:r.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${c(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${c(ch(n))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${c(nr)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${Ie!=null&&Ie.watching?"Active":"Stopped"}</span>
        </div>
        ${Vf()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(i=document.querySelector("#discordLogoutButton"))==null||i.addEventListener("click",Kf),(s=document.querySelector("#associateTicketReportButton"))==null||s.addEventListener("click",()=>{Rn(!1),_s()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",Wf)})}async function Ma(){try{Ie=await Zc(),vn&&Ti()}catch(t){h("file-watcher-error",v(t),{ttlMs:p})}}async function Wf(t){var r;const e=t.currentTarget,n=String(((r=e==null?void 0:e.dataset)==null?void 0:r.filewatchKey)||"").trim();if(!!n)try{e.disabled=!0,Ie=await il(n,e.checked),await Et({silent:!0}),vn&&Ti()}catch(i){h("file-watcher-error",v(i),{ttlMs:p}),await Ma()}}function jf(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function zf(){const t=document.querySelector("#discordProfileMenu");!t||(Ti(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),vn=!0,Ma(),setTimeout(()=>{window.addEventListener("click",Ta),window.addEventListener("keydown",Na)},0))}function Rn(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),vn=!1,t&&(window.removeEventListener("click",Ta),window.removeEventListener("keydown",Na))}function Ta(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&Rn()}function Na(t){t.key==="Escape"&&Rn()}async function Yf(){try{h("auth","Opening Discord login...",{ttlMs:p});const t=await sl();t!=null&&t.status_message&&h("auth",t.status_message,{ttlMs:p}),He()}catch(t){h("auth-error",v(t),{ttlMs:p}),He()}}async function Kf(){try{k=await tl(),h("auth",k.status_message||"Logged out.",{ttlMs:p}),hs(),un(),await Et()}catch(t){h("auth-error",v(t),{ttlMs:p}),He()}}function un(){const t=k.socket_url||"https://guildsync.perdues.me";Jf(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};k!=null&&k.token&&(e.auth={token:k.token}),u=In(t,e),u.on("connect",()=>{He(),Ba(),D==="discord-members"&&Li({silent:!0}),D==="eso-members"&&Ln({silent:!0}),(D==="more"||D==="settings"&&!x)&&ye({silent:!0}),Ef(),qt(),_f(),bf(),Au(),Ru(),Qf()}),u.on("connect_error",()=>{He(),Zn()}),u.on("disconnect",()=>{He(),Zn(),Af(),yf()}),u.on("guildsync:version-status",n=>{Xf(n)}),u.on("guildsync:discord-member-data-updated",n=>{Mf(n)}),u.on("guildsync:banking-data-updated",n=>{gf(n)}),u.on("guildsync:roster-data-updated",n=>{vu(n)}),u.on("guildsync:member-links-updated",(n={})=>{Array.isArray(n.links)&&($=n.links,(D==="discord-members"||D==="eso-members"||D==="settings"||Ke)&&l())}),u.on("guildsync:discord-refresh-status",(n={})=>{const r=String(n.message||"").trim();r&&h("discord-refresh-status",r,{ttlMs:p})})}function Jf(t=!0){Zn(),u&&(u.disconnect(),u=null),t&&He()}function Ba(){!(u!=null&&u.connected)||u.emit("guildsync:client-version",{version:nr,platform:Ca(),client_type:"wails"})}function Qf(){Zn(),qn=window.setInterval(()=>{Ba()},fl)}function Zn(){qn&&(window.clearInterval(qn),qn=null)}function Xf(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",n=t.download&&typeof t.download=="object"?t.download:{};Re={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||n.url||"").trim(),fileName:String(t.download_file_name||n.file_name||"").trim(),platformLabel:String(n.label||t.platform||Ca()).trim()},h("version",`GuildSync is out of date. Current version: ${nr}. Latest version: ${e}.`),ei();return}Re={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},ei(),Ni("version")}}function Ca(){const t=String(navigator.userAgent||"").toLowerCase(),n=`${String(navigator.platform||"").toLowerCase()} ${t}`;return n.includes("mac")?"macos":n.includes("linux")?"linux":"windows"}function ei(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!Re.updateRequired||!Re.downloadUrl){t.innerHTML="";return}const e=Re.platformLabel||"Desktop",n=Re.latestVersion||"latest",r=Re.fileName||"GuildSync client download";t.innerHTML=`
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
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{Zf()})}function Zf(){const t=String(Re.downloadUrl||"").trim();if(!t){h("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:p});return}ul(t)}function h(t,e,n={}){const r=String(t||"").trim(),i=String(e||"").trim();if(!(!r||!i)){if(Ve.set(r,i),Xe.has(r)&&(window.clearTimeout(Xe.get(r)),Xe.delete(r)),n.ttlMs&&Number(n.ttlMs)>0){const s=window.setTimeout(()=>{Ni(r)},Number(n.ttlMs));Xe.set(r,s)}xt()}}function Ni(t){const e=String(t||"").trim();if(!!e){if(Ve.delete(e),Xe.has(e)&&(window.clearTimeout(Xe.get(e)),Xe.delete(e)),q===e){gr(()=>{q="",xt()});return}xt()}}function xt(){const t=pr();if(t.length===0){lt?gr(yn):yn();return}!lt&&!dt&&mr(t[0])}function pr(){return Array.from(Ve.keys())}function Oa(){const t=pr();if(t.length===0)return"";if(!q)return t[0];const e=t.indexOf(q);return e<0?t[0]:t[(e+1)%t.length]}function mr(t){const e=document.querySelector("#statusMessageTrack");if(!e||!Ve.has(t)){yn();return}br();const n=Ve.get(t);q=t,lt=!0,dt=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=n,e.style.setProperty("--message-fade-duration",`${cs}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",dt=!1,eh()},{once:!0})})}function eh(){const t=pr();if(!q||!Ve.has(q)){xt();return}if(t.length<=1){Po(!1);return}Po(!0)}function Po(t){const e=document.querySelector("#statusMessageViewport"),n=document.querySelector("#statusMessageTrack");if(!e||!n)return;const r=Math.max(0,n.scrollWidth-e.clientWidth);if(r<=0){t&&kn(()=>{gr(()=>{const i=Oa();q="",i?mr(i):yn()})},as);return}kn(()=>{Ia(r,t)},ls)}function Ia(t,e){const n=document.querySelector("#statusMessageTrack");if(!n||!q||!Ve.has(q))return;const r=Math.max(4,Math.ceil(t/gl));n.style.setProperty("--long-scroll-distance",`${t}px`),n.style.setProperty("--long-scroll-duration",`${r}s`),n.classList.add("long-scroll"),n.addEventListener("animationend",()=>{if(n.classList.remove("long-scroll"),n.style.transform=`translateX(-${t}px) translateY(-50%)`,e){kn(()=>{gr(()=>{const i=Oa();q="",i?mr(i):yn()})},as);return}kn(()=>{th()},ml)},{once:!0})}function th(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!q||!Ve.has(q))return;if(pr().length!==1){xt();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const r=Math.max(0,e.scrollWidth-t.clientWidth);r<=0||kn(()=>{Ia(r,!1)},ls)}function gr(t){const e=document.querySelector("#statusMessageTrack");if(br(),!e||!lt){typeof t=="function"&&t();return}dt=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${cs}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",lt=!1,dt=!1,typeof t=="function"&&t()},{once:!0})}function yn(){const t=document.querySelector("#statusMessageTrack");br(),q="",lt=!1,dt=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function kn(t,e){const n=window.setTimeout(()=>{cn=cn.filter(r=>r!==n),t()},e);cn.push(n)}function br(){for(const t of cn)window.clearTimeout(t);cn=[]}function qa(){if(!lt||dt||!q)return;const t=q;br(),mr(t)}function He(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(u!=null&&u.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!L()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${ce()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${ce()}`)}}async function Et(t={}){try{if(L()){const e=await al();Ie=e,!t.silent&&(e==null?void 0:e.message)&&h(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:p});return}Ie=await cl(),Ni("file-watcher")}catch(e){h("file-watcher-error",v(e),{ttlMs:p})}}function sn(t,e=null){const n="[GuildSync File Watcher]";if(e){console.log(`${n} ${t}`,e);return}console.log(`${n} ${t}`)}function nh(t={}){if(!L()){sn("SavedVariables change ignored because the user is not authenticated.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",n=e.toLowerCase(),r=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=String(t.filePath||"").trim(),o=r?`${r} saved variables (${i})`:i;sn(`SavedVariables change detected: ${i}${s?` (${s})`:""}. Key: ${n}.`,t),h(`saved-vars-file-updated-${e}`,`${o} has been updated.`,{ttlMs:p}),n==="banking"&&(sn(`Processing banking SavedVariables update from ${i}.`),rh(t)),n==="roster"&&(sn(`Processing roster SavedVariables update from ${i}.`),ih(t)),n==="applications"&&(sn(`Processing applications SavedVariables update from ${i}.`),Tu(t))}async function rh(t={}){await kf(t),await va(t)}async function ih(t={}){await Su(t)}function oh(t){!L()||h("file-watcher-error",v(t),{ttlMs:p})}function sh(){tn("guildsync-savedvars-file-modified",nh),tn("guildsync-file-watcher-error",oh),tn("guildsync-login-complete",async t=>{k=t||{logged_in:!1,allowed:!1},Pn(),un(),await Et(),h("auth",k.status_message||`Logged in and authorized as ${ce()}.`,{ttlMs:p})}),tn("guildsync-login-denied",async t=>{k={logged_in:!1,allowed:!1,status_message:""},Pn(),await Et(),h("auth",t||"Access denied.",{ttlMs:p}),un()}),tn("guildsync-login-failed",async t=>{k={logged_in:!1,allowed:!1,status_message:""},Pn(),await Et(),h("auth",t||"Login failed.",{ttlMs:p}),un()})}function L(){return Boolean((k==null?void 0:k.logged_in)&&(k==null?void 0:k.allowed)&&(k==null?void 0:k.token))}function ce(){var t,e;return((t=k.user)==null?void 0:t.display_name)||((e=k.user)==null?void 0:e.username)||"Discord User"}function ah(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),n=String(t.discord_user_id||"").trim();if(!e||!n)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=128`}function xa(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function ch(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function lh(){nn&&(nn.disconnect(),nn=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),n=Math.round(t.getBoundingClientRect().height);nn=new ResizeObserver(r=>{const i=r[0];if(!i)return;const s=Math.round(i.contentRect.width),o=Math.round(i.contentRect.height);s===e&&o===n||(e=s,n=o,Pa(),qa())}),nn.observe(t)}function Pa(){clearTimeout(mo),mo=setTimeout(async()=>{try{await ns()}catch{}},500)}function v(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function c(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function f(t){return c(t)}sh();vl();
