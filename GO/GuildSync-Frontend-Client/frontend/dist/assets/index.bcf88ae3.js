(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const B=t=>String(t!=null?t:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Va(){return{open:"",toggle(t){this.open=this.open===t?"":t},close(){this.open=""}}}function ri(t,e){var n;return t.type==="boolean"?String(e).toLowerCase()===String(t.defaultValue).toLowerCase():t.type==="number"?String(e).trim()!==""&&Number(e)===Number(t.defaultValue):String(e!=null?e:"")===String((n=t.defaultValue)!=null?n:"")}function fo(t,e){const r=Object.hasOwn(e,t.key)?e[t.key]===null?t.defaultValue:e[t.key]:t.value,i=!ri(t,r);return{value:r,override:i,source:i?"Overridden":"Default"}}function Nr(t,e){return t.type==="boolean"?e===!0||String(e).toLowerCase()==="true"?"Enabled":"Disabled":t.type==="select"?{private_thread:"Private thread (public fallback)",channel:"Channel or thread"}[e]||String(e):e==null||e===""?"Not configured":String(e)}function ho(t,{body:e=!1}={}){const n={recipient:"@ExampleMember",account_name:"@ExampleMember",display_name:"@ExampleMember",amount:"10,001",deposit_amount:"10,001",raw_amount:"10001",raw_deposit_amount:"10001",event_id:"123456789",ticket_quantity:"20",tickets:"20",purchased_tickets:"20",bonus_percent:"20",bonus_tickets:"4",total_tickets:"24",bonus_deadline:"October 9, 2026 at 7:00 PM Eastern",bonus_block:`Early Purchase Bonus: 20% for purchases before October 9, 2026 at 7:00 PM ET.
Bonus Tickets: 4
Total Tickets: 24`,note:"",note_block:"",ticket_type:"Bi-Weekly",ticket_type_raw:"biweekly",transaction_type:"biweekly",ticket_gold_cost:"10,001",gold_cost:"10,001",raw_gold_cost:"10001",raw_ticket_gold_cost:"10001",purchase_date:"October 5, 2026",data_source:"Guild bank",event_datetime:"2026-10-05T12:00:00Z",event_timestamp:"1791201600",raffle_datetime_eastern:"October 10, 2026 at 8:00 PM Eastern",raffle_date_time_eastern:"October 10, 2026 at 8:00 PM Eastern",raffle_datetime:"October 10, 2026 at 8:00 PM Eastern",mail_request_id:"example",mail_batch_id:"example"},r=String(t).replace(/{([a-zA-Z0-9_]+)}/g,(i,s)=>{var o;return(o=n[s])!=null?o:i});return e&&!String(t).includes("{bonus_block}")?r+`

`+n.bonus_block:r}function Wa(t,{refresh:e=!1}={}){const n=()=>{for(const s of document.querySelectorAll("[data-report-toggle]")){const o=s.dataset.reportToggle===t.open;s.setAttribute("aria-expanded",String(o));const a=document.getElementById(s.getAttribute("aria-controls"));a&&(a.classList.toggle("is-open",o),a.inert=!o)}};for(const s of document.querySelectorAll("[data-report-toggle]"))s.addEventListener("click",()=>{t.toggle(s.dataset.reportToggle),n()});for(const s of document.querySelectorAll('.reports-panel .report-run-button:not([type="submit"])'))s.addEventListener("click",()=>{t.close(),n()});const r=e?Array.from(document.querySelectorAll(".report-section-content")):[],i=r.map(s=>s.style.transition);for(const s of r)s.style.transition="none";n();for(const s of r)s.offsetHeight;r.forEach((s,o)=>s.style.transition=i[o])}const Cn=t=>t.type==="boolean"||t.type==="select"&&t.options.length===2;function ja(t,e){return Nr(t,e)+(Cn(t)&&ri(t,e)?" (Default)":"")}function za(){let t=null,e={},n=!1,r="",i=!1;const s=(d,g)=>{const m=`data-config-value="${B(d.key)}" id="config-${B(d.key)}" `;if(d.type==="boolean"||d.type==="select"){const b=d.type==="boolean"?["true","false"]:d.options;return`<select ${m}>${b.map(y=>`<option value="${B(y)}" ${String(y)===String(g.value)?"selected":""}>${B(ja(d,y))}</option>`).join("")}</select>`}return d.type==="template"?`<textarea ${m} rows="${d.key.includes("BODY")?9:3}" maxlength="${d.maxLength}">${B(g.value)}</textarea>`:`<input ${m} type="${d.type==="number"?"number":"text"}" ${d.type==="number"?`min="${d.min}" max="${d.max}" step="any"`:""} value="${B(g.value)}" placeholder="Not configured">`};return{render:()=>{const d=t?[...new Set(t.settings.map(g=>g.group))]:[];return`<article class="report-option-card admin-configuration-card"><div class="report-option-copy">
   <h3><button type="button" class="report-section-toggle" data-report-toggle="configuration" aria-expanded="false" aria-controls="adminConfigurationContent">Administrator Configuration <span aria-hidden="true">\u25BE</span></button></h3>
   <div id="adminConfigurationContent" class="report-section-content" inert><div class="report-section-inner">
   <p>Edit any setting to override its default. Changes take effect only after Save. Choose the option marked (Default) to restore a two-choice setting, or use Return to default for other fields. Settings apply live; active deliveries finish safely.</p>
   <p role="status" class="configuration-status">${B(r)}</p>
   ${t?`
   ${t.botDefaultsReported?"":"<p>Bot defaults have not been reported yet. Connect the updated bot before editing its settings.</p>"}
   <form id="adminConfigurationForm">
    ${d.map(g=>`<fieldset class="configuration-group" ${i?"disabled":""}><legend>${B(g)}</legend>
     ${t.settings.filter(m=>m.group===g).map(m=>{const b=fo(m,e);return`<div class="configuration-setting">
      <label for="config-${B(m.key)}">${B(m.label)}</label>
      <small>${B(m.key)} \xB7 <span data-config-source="${B(m.key)}">${B(b.source)}</span></small>
      <div class="configuration-values${Cn(m)?" configuration-two-options":""}">
       <div class="configuration-selected-value"><span>Current selection</span>${s(m,b)}</div>
       ${Cn(m)?"":`<div class="configuration-default-value"><span>Default value</span><output>${B(Nr(m,m.defaultValue))}</output></div>`}
      </div>
      ${Cn(m)?"":`<button type="button" class="configuration-default" data-config-default="${B(m.key)}" aria-label="Return ${B(m.label)} to default: ${B(Nr(m,m.defaultValue))}">Return to default</button>`}
      ${m.placeholders?`<small>Placeholders: ${m.placeholders.map(y=>B("{"+y+"}")).join(", ")}</small>`:""}
      ${m.group==="Receipt messages"?`<label>Example preview (20% bonus)<pre data-config-preview="${B(m.key)}">${B(ho(b.value,{body:m.key.endsWith("BODY_TEMPLATE")}))}</pre></label>`:""}
     </div>`}).join("")}
    </fieldset>`).join("")}
    <div class="configuration-actions"><button type="submit" ${i?"disabled":""}>${i?"Saving...":"Save Configuration"}</button><button type="button" id="reloadAdminConfiguration" ${i?"disabled":""}>Discard edits and reload</button></div>
   </form>`:`<p>${n?"Loading configuration...":"Configuration is not loaded."}</p><button type="button" id="reloadAdminConfiguration">Load configuration</button>`}
   </div></div></div></article>`},wire:({request:d,rerender:g})=>{var b,y;const m=async()=>{if(!n){n=!0,r="";try{const S=await d("guildsync:request-admin-configuration",{});if(!(S!=null&&S.ok))throw Error((S==null?void 0:S.message)||"Could not load configuration.");t=S.configuration,e={}}catch(S){r=S.message}finally{n=!1,g()}}};!t&&!n&&!r&&m(),(b=document.getElementById("reloadAdminConfiguration"))==null||b.addEventListener("click",()=>void m());for(const S of document.querySelectorAll("[data-config-value]"))S.addEventListener("input",()=>{const M=S.dataset.configValue,H=t.settings.find(Qe=>Qe.key===M);e[M]=ri(H,S.value)?null:S.value;const D=document.querySelector(`[data-config-source="${M}"]`);D&&(D.textContent=fo(H,e).source);const Re=document.querySelector(`[data-config-preview="${M}"]`);Re&&(Re.textContent=ho(S.value,{body:M.endsWith("BODY_TEMPLATE")}))});for(const S of document.querySelectorAll("[data-config-default]"))S.addEventListener("click",()=>{e[S.dataset.configDefault]=null,g()});(y=document.getElementById("adminConfigurationForm"))==null||y.addEventListener("submit",async S=>{var H;if(S.preventDefault(),i)return;if(!Object.keys(e).length){r="No changes to save.",g();return}i=!0,r="";const M={...e};g(),(H=document.getElementById("adminConfigurationForm"))==null||H.querySelectorAll("input,select,textarea,button").forEach(D=>D.disabled=!0);try{const D=await d("guildsync:save-admin-configuration",{revision:t.revision,changes:M});if(!(D!=null&&D.ok))throw Error((D==null?void 0:D.message)||"Could not save configuration.");t=D.configuration,e={},r="Configuration saved. Backend settings are active; the connected bot applies its settings after active deliveries finish. An offline bot applies them when it reconnects."}catch(D){r=D.message}finally{i=!1,g()}})},clear(){t=null,e={},r=""}}}const Ya="/assets/splash.ea386b6a.png",Ka="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",Ja="/assets/GuildSync-Graphic.9169020d.png",be=Object.create(null);be.open="0";be.close="1";be.ping="2";be.pong="3";be.message="4";be.upgrade="5";be.noop="6";const On=Object.create(null);Object.keys(be).forEach(t=>{On[be[t]]=t});const Br={type:"error",data:"parser error"},Vo=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Wo=typeof ArrayBuffer=="function",jo=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,ii=({type:t,data:e},n,r)=>Vo&&e instanceof Blob?n?r(e):po(e,r):Wo&&(e instanceof ArrayBuffer||jo(e))?n?r(e):po(new Blob([e]),r):r(be[t]+(e||"")),po=(t,e)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];e("b"+(r||""))},n.readAsDataURL(t)};function mo(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let vr;function Qa(t,e){if(Vo&&t.data instanceof Blob)return t.data.arrayBuffer().then(mo).then(e);if(Wo&&(t.data instanceof ArrayBuffer||jo(t.data)))return e(mo(t.data));ii(t,!1,n=>{vr||(vr=new TextEncoder),e(vr.encode(n))})}const go="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",an=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<go.length;t++)an[go.charCodeAt(t)]=t;const Xa=t=>{let e=t.length*.75,n=t.length,r,i=0,s,o,a,d;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const g=new ArrayBuffer(e),m=new Uint8Array(g);for(r=0;r<n;r+=4)s=an[t.charCodeAt(r)],o=an[t.charCodeAt(r+1)],a=an[t.charCodeAt(r+2)],d=an[t.charCodeAt(r+3)],m[i++]=s<<2|o>>4,m[i++]=(o&15)<<4|a>>2,m[i++]=(a&3)<<6|d&63;return g},Za=typeof ArrayBuffer=="function",oi=(t,e)=>{if(typeof t!="string")return{type:"message",data:zo(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:ec(t.substring(1),e)}:On[n]?t.length>1?{type:On[n],data:t.substring(1)}:{type:On[n]}:Br},ec=(t,e)=>{if(Za){const n=Xa(t);return zo(n,e)}else return{base64:!0,data:t}},zo=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},Yo=String.fromCharCode(30),tc=(t,e)=>{const n=t.length,r=new Array(n);let i=0;t.forEach((s,o)=>{ii(s,!1,a=>{r[o]=a,++i===n&&e(r.join(Yo))})})},nc=(t,e)=>{const n=t.split(Yo),r=[];for(let i=0;i<n.length;i++){const s=oi(n[i],e);if(r.push(s),s.type==="error")break}return r};function rc(){return new TransformStream({transform(t,e){Qa(t,n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,r)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(r))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(n)})}})}let Sr;function Mn(t){return t.reduce((e,n)=>e+n.length,0)}function Tn(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let r=0;for(let i=0;i<e;i++)n[i]=t[0][r++],r===t[0].length&&(t.shift(),r=0);return t.length&&r<t[0].length&&(t[0]=t[0].slice(r)),n}function ic(t,e){Sr||(Sr=new TextDecoder);const n=[];let r=0,i=-1,s=!1;return new TransformStream({transform(o,a){for(n.push(o);;){if(r===0){if(Mn(n)<1)break;const d=Tn(n,1);s=(d[0]&128)===128,i=d[0]&127,i<126?r=3:i===126?r=1:r=2}else if(r===1){if(Mn(n)<2)break;const d=Tn(n,2);i=new DataView(d.buffer,d.byteOffset,d.length).getUint16(0),r=3}else if(r===2){if(Mn(n)<8)break;const d=Tn(n,8),g=new DataView(d.buffer,d.byteOffset,d.length),m=g.getUint32(0);if(m>Math.pow(2,53-32)-1){a.enqueue(Br);break}i=m*Math.pow(2,32)+g.getUint32(4),r=3}else{if(Mn(n)<i)break;const d=Tn(n,i);a.enqueue(oi(s?d:Sr.decode(d),e)),r=0}if(i===0||i>t){a.enqueue(Br);break}}}})}const Ko=4;function C(t){if(t)return oc(t)}function oc(t){for(var e in C.prototype)t[e]=C.prototype[e];return t}C.prototype.on=C.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};C.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};C.prototype.off=C.prototype.removeListener=C.prototype.removeAllListeners=C.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===e||r.fn===e){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+t],this};C.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,e)}return this};C.prototype.emitReserved=C.prototype.emit;C.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};C.prototype.hasListeners=function(t){return!!this.listeners(t).length};const nr=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0))(),J=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),sc="arraybuffer";function Jo(t,...e){return e.reduce((n,r)=>(t.hasOwnProperty(r)&&(n[r]=t[r]),n),{})}const ac=J.setTimeout,cc=J.clearTimeout;function rr(t,e){e.useNativeTimers?(t.setTimeoutFn=ac.bind(J),t.clearTimeoutFn=cc.bind(J)):(t.setTimeoutFn=J.setTimeout.bind(J),t.clearTimeoutFn=J.clearTimeout.bind(J))}const lc=1.33;function dc(t){return typeof t=="string"?uc(t):Math.ceil((t.byteLength||t.size)*lc)}function uc(t){let e=0,n=0;for(let r=0,i=t.length;r<i;r++)e=t.charCodeAt(r),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(r++,n+=4);return n}function Qo(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function fc(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function hc(t){let e={},n=t.split("&");for(let r=0,i=n.length;r<i;r++){let s=n[r].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class pc extends Error{constructor(e,n,r){super(e),this.description=n,this.context=r,this.type="TransportError"}}class si extends C{constructor(e){super(),this.writable=!1,rr(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,r){return super.emitReserved("error",new pc(e,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=oi(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=fc(e);return n.length?"?"+n:""}}class mc extends si{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};nc(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,tc(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=Qo()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let Xo=!1;try{Xo=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const gc=Xo;function bc(){}class yc extends mc{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let r=location.port;r||(r=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,n){const r=this.request({method:"POST",data:e});r.on("success",n),r.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=e}}class fe extends C{constructor(e,n,r){super(),this.createRequest=e,rr(this,r),this._opts=r,this._method=r.method||"GET",this._uri=n,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const n=Jo(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(n);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var i;r.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=fe.requestsCount++,fe.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=bc,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete fe.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}fe.requestsCount=0;fe.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",bo);else if(typeof addEventListener=="function"){const t="onpagehide"in J?"pagehide":"unload";addEventListener(t,bo,!1)}}function bo(){for(let t in fe.requests)fe.requests.hasOwnProperty(t)&&fe.requests[t].abort()}const kc=function(){const t=Zo({xdomain:!1});return t&&t.responseType!==null}();class vc extends yc{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=kc&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new fe(Zo,this.uri(),e)}}function Zo(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||gc))return new XMLHttpRequest}catch{}if(!e)try{return new J[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const es=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Sc extends si{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,r=es?{}:Jo(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;ii(r,this.supportsBinary,s=>{try{this.doWrite(r,s)}catch{}i&&nr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=Qo()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const wr=J.WebSocket||J.MozWebSocket;class wc extends Sc{createSocket(e,n,r){return es?new wr(e,n,r):n?new wr(e,n):new wr(e)}doWrite(e,n){this.ws.send(n)}}class _c extends si{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=ic(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(n).getReader(),i=rc();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const s=()=>{r.read().then(({done:a,value:d})=>{a||(this.onPacket(d),s())}).catch(a=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;this._writer.write(r).then(()=>{i&&nr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Ac={websocket:wc,webtransport:_c,polling:vc},Lc=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,$c=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Cr(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),r=t.indexOf("]");n!=-1&&r!=-1&&(t=t.substring(0,n)+t.substring(n,r).replace(/:/g,";")+t.substring(r,t.length));let i=Lc.exec(t||""),s={},o=14;for(;o--;)s[$c[o]]=i[o]||"";return n!=-1&&r!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=Ec(s,s.path),s.queryKey=Rc(s,s.query),s}function Ec(t,e){const n=/\/{2,9}/g,r=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function Rc(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,s){i&&(n[i]=s)}),n}const Or=typeof addEventListener=="function"&&typeof removeEventListener=="function",qn=[];Or&&addEventListener("offline",()=>{qn.forEach(t=>t())},!1);class qe extends C{constructor(e,n){if(super(),this.binaryType=sc,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const r=Cr(e);n.hostname=r.host,n.secure=r.protocol==="https"||r.protocol==="wss",n.port=r.port,r.query&&(n.query=r.query)}else n.host&&(n.hostname=Cr(n.host).host);rr(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(r=>{const i=r.prototype.name;this.transports.push(i),this._transportsByName[i]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=hc(this.opts.query)),Or&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},qn.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=Ko,n.transport=e,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&qe.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",qe.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(n+=dc(i)),r>0&&n>this._maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,nr(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,r){return this._sendPacket("message",e,n,r),this}send(e,n,r){return this._sendPacket("message",e,n,r),this}_sendPacket(e,n,r,i){if(typeof n=="function"&&(i=n,n=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const s={type:e,data:n,options:r};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(qe.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Or&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=qn.indexOf(this._offlineEventListener);r!==-1&&qn.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}}qe.protocol=Ko;class Dc extends qe{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let n=this.createTransport(e),r=!1;qe.priorWebsocketSuccess=!1;const i=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",b=>{if(!r)if(b.type==="pong"&&b.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;qe.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(m(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const y=new Error("probe error");y.transport=n.name,this.emitReserved("upgradeError",y)}}))};function s(){r||(r=!0,m(),n.close(),n=null)}const o=b=>{const y=new Error("probe error: "+b);y.transport=n.name,s(),this.emitReserved("upgradeError",y)};function a(){o("transport closed")}function d(){o("socket closed")}function g(b){n&&b.name!==n.name&&s()}const m=()=>{n.removeListener("open",i),n.removeListener("error",o),n.removeListener("close",a),this.off("close",d),this.off("upgrading",g)};n.once("open",i),n.once("error",o),n.once("close",a),this.once("close",d),this.once("upgrading",g),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const n=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&n.push(e[r]);return n}}class Mc extends Dc{constructor(e,n={}){const r=typeof e=="object"?e:n;(!r.transports||r.transports&&typeof r.transports[0]=="string")&&(r.transports=(r.transports||["polling","websocket","webtransport"]).map(i=>Ac[i]).filter(i=>!!i)),super(e,r)}}function Tc(t,e="",n){let r=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),r=Cr(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const s=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+s+":"+r.port+e,r.href=r.protocol+"://"+s+(n&&n.port===r.port?"":":"+r.port),r}const Nc=typeof ArrayBuffer=="function",Bc=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,ts=Object.prototype.toString,Cc=typeof Blob=="function"||typeof Blob<"u"&&ts.call(Blob)==="[object BlobConstructor]",Oc=typeof File=="function"||typeof File<"u"&&ts.call(File)==="[object FileConstructor]";function ai(t){return Nc&&(t instanceof ArrayBuffer||Bc(t))||Cc&&t instanceof Blob||Oc&&t instanceof File}function In(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,r=t.length;n<r;n++)if(In(t[n]))return!0;return!1}if(ai(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return In(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&In(t[n]))return!0;return!1}function qc(t){const e=[],n=t.data,r=t;return r.data=qr(n,e),r.attachments=e.length,{packet:r,buffers:e}}function qr(t,e){if(!t)return t;if(ai(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let r=0;r<t.length;r++)n[r]=qr(t[r],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=qr(t[r],e));return n}return t}function Ic(t,e){return t.data=Ir(t.data,e),delete t.attachments,t}function Ir(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=Ir(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=Ir(t[n],e));return t}const ns=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],xc=5;var w;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(w||(w={}));class Pc{constructor(e){this.replacer=e}encode(e){return(e.type===w.EVENT||e.type===w.ACK)&&In(e)?this.encodeAsBinary({type:e.type===w.EVENT?w.BINARY_EVENT:w.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===w.BINARY_EVENT||e.type===w.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=qc(e),r=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(r),i}}class ci extends C{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const r=n.type===w.BINARY_EVENT;r||n.type===w.BINARY_ACK?(n.type=r?w.EVENT:w.ACK,this.reconstructor=new Fc(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(ai(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const r={type:Number(e.charAt(0))};if(w[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===w.BINARY_EVENT||r.type===w.BINARY_ACK){const s=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(s,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!rs(a)||a<0)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=a}if(e.charAt(n+1)==="/"){const s=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););r.nsp=e.substring(s,n)}else r.nsp="/";const i=e.charAt(n+1);if(i!==""&&Number(i)==i){const s=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}r.id=Number(e.substring(s,n+1))}if(e.charAt(++n)){const s=this.tryParse(e.substr(n));if(ci.isPayloadValid(r.type,s))r.data=s;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case w.CONNECT:return Hn(n);case w.DISCONNECT:return n===void 0;case w.CONNECT_ERROR:return typeof n=="string"||Hn(n);case w.EVENT:case w.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&ns.indexOf(n[0])===-1);case w.ACK:case w.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Fc{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=Ic(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Gc(t){return typeof t=="string"}const rs=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function Uc(t){return t===void 0||rs(t)}function Hn(t){return Object.prototype.toString.call(t)==="[object Object]"}function Hc(t,e){switch(t){case w.CONNECT:return e===void 0||Hn(e);case w.DISCONNECT:return e===void 0;case w.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&ns.indexOf(e[0])===-1);case w.ACK:return Array.isArray(e);case w.CONNECT_ERROR:return typeof e=="string"||Hn(e);default:return!1}}function Vc(t){return Gc(t.nsp)&&Uc(t.id)&&Hc(t.type,t.data)}const Wc=Object.freeze(Object.defineProperty({__proto__:null,protocol:xc,get PacketType(){return w},Encoder:Pc,Decoder:ci,isPacketValid:Vc},Symbol.toStringTag,{value:"Module"}));function Z(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const jc=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class is extends C{constructor(e,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Z(e,"open",this.onopen.bind(this)),Z(e,"packet",this.onpacket.bind(this)),Z(e,"error",this.onerror.bind(this)),Z(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var r,i,s;if(jc.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const o={type:w.EVENT,data:n};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const m=this.ids++,b=n.pop();this._registerAckCallback(m,b),o.id=m}const a=(i=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||i===void 0?void 0:i.writable,d=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!a||(d?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,n){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[e]=n;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);n.call(this,new Error("operation has timed out"))},i),o=(...a)=>{this.io.clearTimeoutFn(s),n.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...n){return new Promise((r,i)=>{const s=(o,a)=>o?i(o):r(a);s.withError=!0,n.push(s),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>(this._queue[0],i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(i)):(this._queue.shift(),n&&n(null,...s)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:w.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case w.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case w.EVENT:case w.BINARY_EVENT:this.onevent(e);break;case w.ACK:case w.BINARY_ACK:this.onack(e);break;case w.DISCONNECT:this.ondisconnect();break;case w.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let r=!1;return function(...i){r||(r=!0,n.packet({type:w.ACK,id:e,data:i}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:w.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,e.data)}}}function Ft(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}Ft.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-n:t+n}return Math.min(t,this.max)|0};Ft.prototype.reset=function(){this.attempts=0};Ft.prototype.setMin=function(t){this.ms=t};Ft.prototype.setMax=function(t){this.max=t};Ft.prototype.setJitter=function(t){this.jitter=t};class xr extends C{constructor(e,n){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,rr(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new Ft({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const i=n.parser||Wc;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Mc(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=Z(n,"open",function(){r.onopen(),e&&e()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=Z(n,"error",s);if(this._timeout!==!1){const a=this._timeout,d=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),n.close()},a);this.opts.autoUnref&&d.unref(),this.subs.push(()=>{this.clearTimeoutFn(d)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Z(e,"ping",this.onping.bind(this)),Z(e,"data",this.ondata.bind(this)),Z(e,"error",this.onerror.bind(this)),Z(e,"close",this.onclose.bind(this)),Z(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){nr(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new is(this,e,n),this.nsps[e]=r),r}_destroy(e){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let r=0;r<n.length;r++)this.engine.write(n[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const en={};function xn(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=Tc(t,e.path||"/socket.io"),r=n.source,i=n.id,s=n.path,o=en[i]&&s in en[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let d;return a?d=new xr(r,e):(en[i]||(en[i]=new xr(r,e)),d=en[i]),n.query&&!e.query&&(e.query=n.queryKey),d.socket(n.path,e)}Object.assign(xn,{Manager:xr,Socket:is,io:xn,connect:xn});function zc(t){return window.go.main.App.CleanupDepositMailAckFromGuildSyncBanking(t)}function Yc(){return window.go.main.App.CloseWindow()}function Kc(t){return window.go.main.App.CollectDepositMailAckFromGuildSyncBanking(t)}function Jc(t){return window.go.main.App.CollectGuildSyncApplicationsData(t)}function Qc(t){return window.go.main.App.CollectGuildSyncBankingData(t)}function Xc(t){return window.go.main.App.CollectGuildSyncRosterData(t)}function Zc(t,e){return window.go.main.App.CommitGuildSyncApplicationsData(t,e)}function el(t,e){return window.go.main.App.CommitGuildSyncBankingData(t,e)}function tl(t,e){return window.go.main.App.CommitGuildSyncRosterData(t,e)}function nl(){return window.go.main.App.FlushPendingDepositMailAckCleanup()}function rl(){return window.go.main.App.GetESORunningStatus()}function il(){return window.go.main.App.GetGuildSyncFileWatcherStatus()}function ol(){return window.go.main.App.GetGuildSyncSession()}function sl(){return window.go.main.App.LogoutGuildSync()}function al(){return window.go.main.App.MaximizeWindow()}function cl(){return window.go.main.App.MinimizeWindow()}function os(){return window.go.main.App.SaveWindowState()}function ll(t,e){return window.go.main.App.SetGuildSyncSavedVarsWatchFileEnabled(t,e)}function dl(){return window.go.main.App.ShowMainWindow()}function ul(){return window.go.main.App.StartDiscordLogin()}function fl(){return window.go.main.App.StartGuildSyncFileWatcher()}function hl(){return window.go.main.App.StopGuildSyncFileWatcher()}function pl(t){return window.go.main.App.WriteDepositMailToGuildSyncBanking(t)}function ml(t,e,n){return window.runtime.EventsOnMultiple(t,e,n)}function tn(t,e){return ml(t,e,-1)}function gl(t){window.runtime.BrowserOpenURL(t)}const ir="1.2.7",bl=30*60*1e3,ss="guildsync-pending-banking-uploads",as="guildsync-pending-deposit-mail",yl=5e3,kl=30*1e3,cs="guildsync-pending-roster-uploads",ls="guildsync-pending-applications-uploads",p=60*1e3,ds=7e3,us=1400,fs=2400,vl=4e3,Sl=38,hs=document.querySelector("#app");let yo=null,nn=null,ko=!1,Sn=!1,Pn=null,_r=!1,Ar=!1,Lr=!1,Ie=null,W={running:!1,message:""},gt=null,bt=null,Pr=!1,yt=!1,kt=null,$r=!1,We=new Map,Ze=new Map,x="",dt=!1,ut=!1,cn=[],k={logged_in:!1,allowed:!1,status_message:""},De={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},u=null,z=[],or=[],sr=null,fn=!1,Vn=!1,Wn="",vt=new Set,St=new Set,hn="username",nt="asc",Fr=null,Gr=null,j=[],pn=null,je=!1,vo=!1,jn="",Ur=null,Hr=null,rt=new Set,wt=new Set,we="",V="",O=-1,Dt=!1,mn="",Q=[],ze="",xe=[],Pe=!1,Ae="",Er=null,ee=-1,Gt=!1,gn="",Fe=[],zn=!1,it=!1,Ge="",Mt="",Tt=!1,Me="",X=[],Nt="",ft="",Ue=[],He=!1,Le="",So=null,Xe=0;const wl=650;let te=-1,Ut=!1,Ht=[],Te=!1,ot="",Vt=!1,bn=[],Ne=!1,st="",mt=!1,li=[],Be=!1,at="",Wt="",Ce="",_t="",Oe="",$=[],I=!1,U="",Je=!1,ar="",et="",wn="",_n="",_e=-1,se=!1,A=null,ct=[],Bt=!1,Ee="",An="",ue=-1,jt=!1,di=null,ln=null;const ui=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let Y=[],P=null,tt=null,de=!1;const _l=Va(),ps=za();let Ct=[],At="",wo=!1,T="biweekly",ms=null,Ye=!1,lt=!1,ae="biweekly",zt=!1,Ot=!1,ve="",Se=null,q={targetType:"other",note:"",tickets:""},Yt=!1,ht="",G=[],ie=[],he="",pe=!1,me="",Lt=null,ne=-1,$e=!1,Yn=!1,K="",E={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},Kt="",F=-1,re=!1,Vr={biweekly:0,monthly:0};const Al=1780786800,Ke=14*24*60*60,Kn=60*60,Jn=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let R=Jn[0].id;function Ll(){hs.innerHTML=`
    <main class="splash-screen">
      <img src="${Ya}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await dl(),await $l(),gs(),un(),await Rt()},5e3)}async function $l(){try{k=await ol()}catch(t){k={logged_in:!1,allowed:!1,status_message:""},h("session-error",v(t),{ttlMs:p})}}function gs(){hs.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${Ka}" alt="" class="title-icon" />
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
            <img src="${Ja}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${c(ir)}</div>
            </div>
          </div>
          <div class="compact-header-actions">
            <div id="desktopUpdateArea" class="desktop-update-area"></div>
            <div id="discordArea" class="discord-area"></div>
          </div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${bs()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content web-upload-banner-dismissed" aria-live="polite">
          ${ks()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await cl()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await os(),await Yc()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await al()}),Un(),ni(),vs(),Ta(),sa(),ya(),Ls(),oa(),Ks(),Js(),Qs(),Xs(),Is(),aa(),Bl(),Ve(),Pt(),ko||(window.addEventListener("resize",()=>{Ha(),Ga()}),ph(),ko=!0)}function bs(){return Jn.map(t=>{const e=t.id===R,n=El(t.id,e),r=n?ys():0,i=n?`Deposit mail needs attention: ${r} item${r===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${n?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${f(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${f(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${Rl(t.icon)}</span>
          <span class="guildsync-tab-label">${c(t.label)}</span>
          ${n?`<span class="guildsync-tab-mail-badge" aria-label="${f(i)}">${r>99?"99+":c(String(r))}</span>`:""}
        </button>
      `}).join("")}function ys(){return L()?fr()+En()+ga():0}function El(t,e){return t!=="more"||e?!1:ys()>0}function Rl(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function ks(){const t=Jn.find(n=>n.id===R)||Jn[0];let e="";return t.id==="discord-members"?e=ql():t.id==="eso-members"?e=Il():t.id==="more"?e=Iu():t.id==="settings"?e=ad():e=`
      <div class="guildsync-tab-panel" data-active-tab="${f(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${c(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${$e?fu():""}
    ${zt?Ju():""}
    ${Yt?xu():""}
    ${se?ru():""}
    ${Ut?dd():""}
    ${Vt?gd():""}
    ${mt?vd():""}
    ${Je?Nd():""}
    ${jt?Nl():""}
  `}function Dl(){return jt||Dt||Tt||$e||zt||Yt||se||Gt||Ut||Vt||mt||Je||lt}function Ml(){return jt?!1:Je?(Jr(),!0):mt?(Kr(),!0):Vt?(Yr(),!0):Ut?(zr(),!0):se?(It(),!0):Gt?(Zr(),!0):zt?(Zn(),!0):Yt?(ef(),l(),!0):$e?($e=!1,l(),!0):Dt?(Dt=!1,l(),!0):Tt?(Tt=!1,l(),!0):lt?(lt=!1,l(),!0):!1}function Tl(t){t.key==="Escape"&&Ml()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",Tl,!0),window.guildSyncGlobalModalEscapeAttached=!0);function fi(t={}){return new Promise(e=>{ln&&ln(!1),jt=!0,di={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},ln=e,l()})}function Qn(t=!1){const e=ln;ln=null,jt=!1,di=null,e&&e(t===!0),l()}function Nl(){const t=di||{};return`
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
  `}function _o(t){var r,i,s,o;const e=(i=(r=t.target).closest)==null?void 0:i.call(r,"#cancelGuildSyncConfirmButton"),n=(o=(s=t.target).closest)==null?void 0:o.call(s,"#acceptGuildSyncConfirmButton");if(!(!e&&!n)){if(t.preventDefault(),t.stopPropagation(),e){Qn(!1);return}n&&Qn(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",_o,!0),document.addEventListener("pointerup",_o,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function Bl(){if(!jt)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=r=>{r.preventDefault(),r.stopPropagation(),Qn(!1)}),e&&(e.onclick=r=>{r.preventDefault(),r.stopPropagation(),Qn(!0)});const n=document.querySelector(".guildsync-confirm-overlay");n&&(n.onclick=r=>{r.target===n&&(r.preventDefault(),r.stopPropagation())})}function vs(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(Dl())return;const e=t.dataset.tabId;!e||e===R||(R=e,l())})})}function Cl(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function Ol(t){const e={x:window.scrollX,y:window.scrollY},n=[];for(let o=t;o;o=o.parentElement)n.push({element:o,top:o.scrollTop,left:o.scrollLeft});const r=t?Array.from(t.querySelectorAll("*")):[],i=(o,a)=>o.id?o.id===a.id:o.tagName===a.tagName&&o.className===a.className,s=r.filter(o=>o.scrollTop||o.scrollLeft).map(o=>({identity:{id:o.id,tagName:o.tagName,className:o.className},occurrence:r.filter(a=>i(o,a)).indexOf(o),top:o.scrollTop,left:o.scrollLeft}));return()=>{const o=t?Array.from(t.querySelectorAll("*")):[];for(const{identity:a,occurrence:d,top:g,left:m}of s){const b=o.filter(y=>i(a,y))[d];b&&(b.scrollTop=g,b.scrollLeft=m)}for(const{element:a,top:d,left:g}of n)a.scrollTop=d,a.scrollLeft=g;window.scrollTo({left:e.x,top:e.y,behavior:"instant"})}}function l(t={}){Je&&Cl();const e=document.querySelector(".guildsync-tabs"),n=document.querySelector("#guildSyncTabContent"),r=Ol(n);e&&(e.innerHTML=bs()),n&&(n.innerHTML=ks()),vs(),Ta(),sa(),ya(),Ls(),oa(),Ks(),Js(),Qs(),Xs(),Is(),aa(),r(),t.restoreDiscordSearchFocus&&Pf(),t.restoreRosterSearchFocus&&Ff(),R==="discord-members"&&(u==null?void 0:u.connected)&&z.length===0&&!fn&&Ri({silent:!0}),R==="eso-members"&&(u==null?void 0:u.connected)&&j.length===0&&!je&&!vo&&(vo=!0,$n({silent:!0})),(R==="more"&&Y.length===0||R==="settings"&&!P&&!wo)&&(u==null?void 0:u.connected)&&!Ye&&(wo=!0,ke({silent:!0})),(R==="discord-members"||R==="eso-members"||R==="settings")&&(u==null?void 0:u.connected)&&$.length===0&&!I&&cr({silent:!0})}function ql(){const t=qf(),e=Gf(),n=Array.from(vt),r=Array.from(St);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${c(Ba(sr))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${fn||Vn?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Vn?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${f(Wn)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!vt.has(i)).map(i=>`<option value="${f(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All roles</span>':n.map(i=>Wf(i)).join("")}
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
              ${ui.filter(i=>!St.has(i.id)).map(i=>`<option value="${f(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>Ss("discord",i)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${Nn("username","Username")}
                ${Nn("global_name","Global Name")}
                ${Nn("server_nickname","Server Nickname")}
                ${Nn("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>Uf(i)).join(""):Hf()}
            </tbody>
          </table>
        </div>
      </div>
      ${Tt?ed():""}
    </div>
  `}function Il(){const t=zl(),e=Jl(),n=Array.from(rt),r=Array.from(wt);return`
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
          <span class="discord-last-refresh">Last Refresh: ${c(la(pn))}</span>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${je?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${je?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${f(jn)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!rt.has(i)).map(i=>`<option value="${f(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All ranks</span>':n.map(i=>Ql(i)).join("")}
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
              ${ui.filter(i=>!wt.has(i.id)).map(i=>`<option value="${f(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>Ss("roster",i)).join("")}
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
              ${t.length>0?t.map((i,s)=>xl(i,s)).join(""):Vl()}
            </tbody>
          </table>
        </div>
      </div>
      ${Dt?id():""}
      ${Gt?Fl():""}
    </div>
  `}function xl(t,e=-1){const n=Wl(t.rank||""),r=n?` style="color: ${n};"`:"";return`
    <tr class="eso-roster-row${e===O?" roster-search-active-row":""}"${r} data-roster-row-index="${f(String(e))}" data-eso-account-name="${f(t.account_name||"")}">
      <td>${c(t.account_name||"")}</td>
      <td>${hi(t.rank||"")}</td>
      <td>${c(ur(t.joined))}</td>
      <td class="roster-notes-cell">${Pl(t)}</td>
      <td class="member-link-action-cell">${Hs({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function Pl(t){const e=String((t==null?void 0:t.account_name)||"").trim(),n=Number((t==null?void 0:t.note_count)||0),r=n>0,i=r?`${n} roster note${n===1?"":"s"} for ${e}`:`No roster notes for ${e}`;return`
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
  `}function Fl(){const t=gn||"",e=Boolean((k==null?void 0:k.logged_in)&&(k==null?void 0:k.allowed));return`
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
          ${Ge?`<div class="discord-data-error">${c(Ge)}</div>`:""}
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
                ${Gl()}
              </tbody>
            </table>
          </div>
          ${e?Ul():'<div class="roster-history-muted">Log in to add a new note.</div>'}
        </div>
      </div>
    </div>
  `}function Gl(){return zn?'<tr><td class="bank-empty-row" colspan="3">Loading notes...</td></tr>':!Array.isArray(Fe)||Fe.length===0?'<tr><td class="bank-empty-row" colspan="3">No notes recorded for this member.</td></tr>':Fe.map(t=>`
      <tr>
        <td class="roster-notes-when-cell">${c(Hl(t.timestamp))}</td>
        <td class="roster-notes-officer-cell">${c(t.officer||"")}</td>
        <td class="roster-notes-note-cell">${c(t.note||"")}</td>
      </tr>
    `).join("")}function Ul(){return`
    <div class="roster-notes-form">
      <label for="rosterNotesNewNote">Add Note</label>
      <textarea
        id="rosterNotesNewNote"
        class="roster-notes-textarea"
        rows="4"
        placeholder="Enter a new roster note..."
        ${it?"disabled":""}
      >${c(Mt)}</textarea>
      <button id="saveRosterNoteButton" class="refresh-discord-button" type="button" ${it?"disabled":""}>
        ${it?"Saving...":"Save Note"}
      </button>
    </div>
  `}function Hl(t){const e=Number(t||0);return!Number.isFinite(e)||e<=0?"":new Date(e*1e3).toLocaleString()}function Vl(){return`
    <tr>
      <td class="bank-empty-row" colspan="5">${c(je?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function Wl(t){String(t||"").trim();const e=jf(t);return mr(e==null?void 0:e.role_color)}function hi(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${c(e)}</span>`}function jl(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":hi(e)}function zl(){const t=jn.trim().toLowerCase(),e=j.filter(n=>{const r=String(n.rank||"").trim();if(rt.size>0&&!rt.has(r)||!As(wt,Wr(n)))return!1;if(!t)return!0;const i=ur(n.joined),s=ki(n.joined),o=Wr(n),a=_s(n.account_name||"");return[n.account_name,r,i,s,n.joined,o,a].map(g=>String(g||"").toLowerCase()).join(" ").includes(t)});return Yl(e)}function Yl(t){if(!we||!V)return t;const e=V==="desc"?-1:1;return[...t].sort((n,r)=>{const i=Ao(n,we),s=Ao(r,we),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:String(n.account_name||"").localeCompare(String(r.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function Ao(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const n=Number(t.joined||0);return Number.isFinite(n)&&n>0?String(n).padStart(16,"0"):""}if(e==="notes")return String(Number(t.note_count||0)).padStart(8,"0");if(e==="linked"){const n=Wr(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[n]||"9"} ${n} ${_s(t.account_name||"")}`}return String(t.account_name||"")}function Kl(t){const n=new Set(["account_name","rank","joined","notes","linked"]).has(t)?t:"account_name";we!==n?(we=n,V="asc"):V==="asc"?V="desc":V==="desc"?(we="",V=""):(we=n,V="asc"),O=-1,l()}function rn(t,e,n=""){const r=we===t&&Boolean(V),i=r?V==="asc"?"ascending":"descending":"none",s=r?V==="asc"?"\u25B2":"\u25BC":"\u2195";return`
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
  `}function Jl(){return Array.from(new Set(j.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function Ql(t){const e=Ti(t),n=mr(e==null?void 0:e.role_color),r=Bi(n),i=Ni(n,r);return`
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
  `}function Xl(t){const e=ui.find(n=>n.id===t);return e?e.label:t}function Ss(t,e){const n=t==="roster"?"roster":"discord",r=Xl(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${n}-link-status-filter="${f(e)}"
      title="Remove ${f(r)} link filter"
    >
      <span>${c(r)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function ws(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked"&&String(n.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function Zl(t){return ws(dr(t==null?void 0:t.discord_id))}function Wr(t){return ws(lr(t==null?void 0:t.account_name))}function _s(t){const e=lr(t),n=Us({mode:"eso-to-discord",esoAccountName:t}),r=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean),i=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="candidate").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean);return[n.label,n.title,r.join(" "),i.join(" ")].filter(Boolean).join(" ")}function As(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function ed(){return`
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
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${f(Me)}" />
        </div>

        ${Le?`<div class="discord-data-error">${c(Le)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${td()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${ft?`: ${c(ft)}`:""}</div>
            ${nd()}
          </div>
        </div>
      </div>
    </div>
  `}function td(){return He&&X.length===0?'<div class="roster-history-muted">Searching...</div>':X.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${X.map((t,e)=>`
        <button class="roster-history-match${e===te||t.discord_id===Nt?" is-selected":""}" type="button" data-discord-history-id="${f(t.discord_id)}" data-discord-history-name="${f(jr(t))}">
          <span>${c(jr(t))}</span>
          <strong>${c(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===te?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function nd(){return Nt?He&&Ue.length===0?'<div class="roster-history-muted">Loading history...</div>':Ue.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${Ue.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(ki(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${c(rd(t.event_type))}</td>
              <td>${c(t.old_value||"")}</td>
              <td>${c(t.new_value||"")}</td>
              <td>${c(t.initiator||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function jr(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function rd(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function id(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(mn)}" />
        </div>

        ${Ae?`<div class="discord-data-error">${c(Ae)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${od()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${ze?`: ${c(ze)}`:""}</div>
            ${sd()}
          </div>
        </div>
      </div>
    </div>
  `}function od(){return Pe&&Q.length===0?'<div class="roster-history-muted">Searching...</div>':Q.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${Q.map((t,e)=>`
        <button class="roster-history-match${e===ee||t.account_name===ze?" is-selected":""}" type="button" data-roster-history-account="${f(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <strong>${c(t.rank||"")}</strong>
          ${e===ee?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function sd(){return ze?Pe&&xe.length===0?'<div class="roster-history-muted">Loading history...</div>':xe.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${xe.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(ki(t.timestamp))}</td>
              <td>${c(t.event_type||"")}</td>
              <td>${jl(t.rank)}</td>
              <td>${c(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function ad(){var t;return`
    <div class="guildsync-tab-panel reports-panel" data-active-tab="settings">
      <div class="discord-data-header reports-header">
        <div>
          <h2 class="discord-data-title">Reports & Admin</h2>
          <p class="discord-data-subtitle">Run GuildSync reports and administrative review tools. More options can be added here later.</p>
        </div>
      </div>

      <div class="reports-scroll-area">
        ${cd()}
        ${((t=k==null?void 0:k.user)==null?void 0:t.role)==="admin"?ps.render():""}
        <section class="reports-list" aria-label="Available reports">
          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Associates Promotion Eligible</h3>
              <p>Shows Associates who have been in the guild at least two weeks, have purchased at least one raffle ticket, and are linked to Discord. Also shows otherwise eligible Associates who still need a Discord link reviewed.</p>
            </div>
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${Te?"disabled":""}>
              ${Te?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${Ne?"disabled":""}>
              ${Ne?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${Be?"disabled":""}>
              ${Be?"Loading...":"Run"}
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
  `}function Ls(){var t,e,n,r,i,s,o,a,d,g;R==="settings"&&(Wa(_l,{refresh:!0}),((t=k==null?void 0:k.user)==null?void 0:t.role)==="admin"&&ps.wire({request:(m,b)=>_(m,b,12e4),rerender:l}),(e=document.querySelector("#cancelBonusDefaults"))==null||e.addEventListener("click",()=>{de=!1,l()}),(n=document.querySelector("#resetBonusDefaults"))==null||n.addEventListener("click",()=>{de=!0,l()}),(r=document.querySelector("#raffleBonusSettingsForm"))==null||r.addEventListener("submit",ld),(i=document.querySelector("#raffleBonusSettingsForm"))==null||i.addEventListener("input",m=>{tt={raffle:At,values:new Map(new FormData(m.currentTarget))}}),(s=document.querySelector("#bonusRafflePicker"))==null||s.addEventListener("change",m=>{At=m.currentTarget.value,de=!1,tt=null,l()}),(o=document.querySelector("#runAssociateTicketReportButton"))==null||o.addEventListener("click",()=>$s()),(a=document.querySelector("#runDiscordRankAuditReportButton"))==null||a.addEventListener("click",()=>md()),(d=document.querySelector("#runDiscordLastSeenReportButton"))==null||d.addEventListener("click",()=>kd()),(g=document.querySelector("#runMemberLinksReportButton"))==null||g.addEventListener("click",()=>Dd()))}function cd(){var o;if(!P)return"<p>Loading raffle bonus settings...</p>";const t=!de&&(tt==null?void 0:tt.raffle)===At?tt.values:null,e=Ct.find(a=>`${a.type}:${a.salesEnd}`===At),n=de&&(e==null?void 0:e.inheritedSettings)?e.inheritedSettings:e,r=e?{enabledByType:{...P.enabledByType,[e.type]:n.enabled},biweekly:e.type==="biweekly"?n.tiers:P.biweekly,monthly:e.type==="monthly"?n.tiers:P.monthly}:de&&P.envDefaults||P,i=((o=k==null?void 0:k.user)==null?void 0:o.role)==="admin",s=(a,d)=>{var g,m;return`
    <fieldset class="raffle-bonus-tiers" ${i&&!de?"":"disabled"}>
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
            ${Ct.map(a=>`<option value="${f(`${a.type}:${a.salesEnd}`)}" ${At===`${a.type}:${a.salesEnd}`?"selected":""}>${c(a.label)}${a.enabled?" (Bonuses)":""}</option>`).join("")}
          </select>
        </label>
        <p>Source: ${c(e?e.overridden?"Raffle override":"Saved raffle policy":P.source===".env"?"Default":P.source||"Default")}</p>
        ${de?'<p role="status">Default Hours, Bonus %, and enabled settings are shown below. Click Save Bonus Settings to apply them, or Cancel default restoration to keep your previous settings.</p><button type="button" id="cancelBonusDefaults">Cancel default restoration</button>':""}
        <form id="raffleBonusSettingsForm">
          ${i?`<button type="button" id="resetBonusDefaults">Return to defaults</button><p>Restores Hours, Bonus %, and the enabled switch ${e?"from this raffle\u2019s inherited policy":"for both raffle types from their default rules"}. Changes apply only after Save Bonus Settings.</p>`:""}
          ${e?s(e.type,e.label):s("biweekly","Bi-Weekly Raffle")+s("monthly","50/50 Raffle")}
          ${i?'<button class="refresh-discord-button report-run-button" type="submit">Save Bonus Settings</button>':"<p>Admin access is required to change these settings.</p>"}
        </form>
        </div></div>
      </div>
    </article>`}async function ld(t){t.preventDefault();const e=t.currentTarget,n=new FormData(e),r=Ct.find(o=>`${o.type}:${o.salesEnd}`===At),i=o=>((r==null?void 0:r.type)===o?r.tiers:P[o]).map((a,d)=>({hours:Number(n.get(`${o}-${d}-hours`)),percent:Number(n.get(`${o}-${d}-percent`))})),s=r?{raffleType:r.type,salesEnd:r.salesEnd,enabled:n.has(`${r.type}-enabled`),tiers:i(r.type)}:{enabledByType:{biweekly:n.has("biweekly-enabled"),monthly:n.has("monthly-enabled")},biweekly:i("biweekly"),monthly:i("monthly")};try{de&&(s.resetToDefaults=!0);const o=await _("guildsync:save-raffle-bonus-settings",s,3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||"Could not save raffle bonus settings.");P=o.bonusSettings,tt=null,de=!1,await ke({silent:!0}),h("bonus-settings","Raffle bonus settings saved.",{ttlMs:p}),l()}catch(o){h("bonus-settings-error",v(o),{ttlMs:p})}}function $s(){Ut=!0,ot="",l(),ta()}function zr(){Ut=!1,ot="",l()}function dd(){const t=ud(),e=fd(),n=Ht.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${Te?"disabled":""}>${Te?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(n))} total row${n===1?"":"s"}</span>
        </div>

        ${ot?`<div class="discord-data-error">${c(ot)}</div>`:""}

        <div class="report-results-content">
          ${Te&&n===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!Te&&n===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${n>0?Lo("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${n>0?Lo("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${c(Ds())}</textarea>
      </div>
    </div>
  `}function ud(){return Ht.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function fd(){return Ht.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function Lo(t,e,n,r){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${c(t)}</h4>
          <p>${c(e)}</p>
        </div>
        <span>${c(String(n.length))} row${n.length===1?"":"s"}</span>
      </div>
      ${n.length>0?hd(n):`<div class="roster-history-muted report-section-empty">${c(r)}</div>`}
    </section>
  `}function hd(t=Ht){return`
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
              <td>${hi(e.rank||"")}</td>
              <td>${c(ur(e.joined))}</td>
              <td>${c(oe(e.purchased_tickets||0))}</td>
              <td class="associate-earliest-deposit-cell">${c(Es(e))}</td>
              <td>${c(Rs(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Es(t){const e=String((t==null?void 0:t.earliest_deposit_summary)||"").trim();if(e)return e;const n=String((t==null?void 0:t.earliest_deposit_date)||"").trim(),r=String((t==null?void 0:t.earliest_deposit_raffle_period)||"").trim();return[n,r].filter(Boolean).join(" | ")}function Rs(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function Ds(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Earliest Deposit / Raffle","Discord Link"]];for(const e of Ht){const n=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([n,e.account_name||"",e.rank||"",ur(e.joined),oe(e.purchased_tickets||0),Es(e),Rs(e)])}return t.map(e=>e.map(hr).join("	")).join(`
`)}async function pd(){const t=Ds();if(await pr(t)){h("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#associateTicketReportTsv");n&&(n.focus(),n.select()),h("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function md(){Vt=!0,st="",l(),ea()}function Yr(){Vt=!1,st="",l()}function gd(){const t=bn.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${Ne?"disabled":""}>${Ne?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${st?`<div class="discord-data-error">${c(st)}</div>`:""}

        <div class="report-results-content">
          ${Ne&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!Ne&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?bd(bn):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${c(Ns())}</textarea>
      </div>
    </div>
  `}function bd(t=bn){return`
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
              <td data-label="Discord Member" class="discord-rank-audit-member-cell">${c(Ms(e))}</td>
              <td data-label="Discord Rank Role" class="discord-rank-audit-discord-cell">${c(e.discord_rank||"No matching rank role")}</td>
              <td data-label="Linked ESO Account(s)" class="discord-rank-audit-eso-account-cell">${c(e.eso_accounts||"No linked ESO account")}</td>
              <td data-label="ESO Rank" class="discord-rank-audit-eso-rank-cell">${c(e.eso_rank||"None")}</td>
              <td data-label="Issue" class="discord-rank-audit-issue-cell">${c(Ts(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Ms(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function Ts(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function Ns(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of bn)t.push([Ms(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",Ts(e)]);return t.map(e=>e.map(hr).join("	")).join(`
`)}async function yd(){const t=Ns();if(await pr(t)){h("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#discordRankAuditReportTsv");n&&(n.focus(),n.select()),h("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function kd(){mt=!0,at="",Wt="",l(),Zs(),$.length===0&&!I&&cr({silent:!0})}function Kr(){mt=!1,at="",Wt="",Ce="",_t="",Oe="",l()}function vd(){const t=pi(),e=li.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${Be?"disabled":""}>${Be?"Loading...":"Run Again"}</button>
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
            <option value="" ${Ce===""?"selected":""}>All link statuses</option>
            <option value="linked" ${Ce==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${Ce==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${Ce==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${at?`<div class="discord-data-error discord-last-seen-report-error">${c(at)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${Be&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!Be&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?Sd(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${c(Cs(t))}</textarea>
      </div>
    </div>
  `}function Sd(t=[]){return`
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
            <tr class="discord-last-seen-row ${f(Ed(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${f(pt(e).status)}" data-discord-last-seen-search="${f(Bs(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${$d(e)}
                  <span>${c(qt(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${_d(e)}</td>
              <td>${c(mi(e.last_seen))}</td>
              <td>${c(gi(e.last_seen))}</td>
              <td>${c(Xn(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function on(t,e){const n=_t===t,r=n?Oe==="asc"?"\u25B2":"\u25BC":"\u2195",i=n?`${e}: ${Oe==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${n?" active":""}" type="button" data-discord-last-seen-sort="${f(t)}" title="${f(i)}">
      <span>${c(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${c(r)}</span>
    </button>
  `}function pi(){const t=[...li],e=_t,n=Oe;if(!e||!n)return t;const r=n==="desc"?-1:1;return t.sort((i,s)=>{var o,a;if(e==="date"){const d=Number(i.last_seen||0)||0,g=Number(s.last_seen||0)||0;return(d-g)*r}if(e==="days")return($o(i.last_seen)-$o(s.last_seen))*r;if(e==="action")return Xn(i.last_seen_action).localeCompare(Xn(s.last_seen_action),void 0,{sensitivity:"base"})*r;if(e==="eso"){const d=pt(i),g=pt(s),m={linked:0,candidate:1,unlinked:2},b=((o=m[d.status])!=null?o:9)-((a=m[g.status])!=null?a:9);return b!==0?b*r:d.esoAccountName.localeCompare(g.esoAccountName,void 0,{sensitivity:"base"})*r}return qt(i).localeCompare(qt(s),void 0,{sensitivity:"base"})*r})}function wd(t){_t!==t?(_t=t,Oe="asc"):Oe==="asc"?Oe="desc":(_t="",Oe=""),l()}function qt(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function Bs(t){return[qt(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,Ad(t),mi(t==null?void 0:t.last_seen),gi(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function pt(t){const e=Wd(t==null?void 0:t.discord_id),n=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),r=String((e==null?void 0:e.eso_account_name)||"").trim();return n==="linked"&&r?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:r,title:`Linked ESO account: ${r}`}:(n==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&r?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:r,title:`Fuzzy ESO account candidate: ${r}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function _d(t){const e=pt(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${f(e.className)}"
      title="${f(e.title)}"
      aria-label="${f(e.label)}"
      role="img"
    ></span>
  `}function Ad(t){const e=pt(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function Ld(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!n)return"";if(/^https?:\/\//i.test(e))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function $d(t){const e=qt(t),n=e?e.slice(0,2).toUpperCase():"?",r=Ld(t);return r?`<span class="discord-member-avatar"><img src="${f(r)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${c(n)}</span>`}function mi(t){const e=Number(t);if(!e)return"Never";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t||"");const r=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(n).reduce((i,s)=>(i[s.type]=s.value,i),{});return`${r.month}/${r.day}/${r.year} ${r.hour}:${r.minute} ${r.dayPeriod}`}function Ed(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const n=(Date.now()-e*1e3)/864e5;return n>30?"discord-last-seen-red":n>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function gi(t){const e=Number(t);if(!e)return"Never";const n=Date.now()-e*1e3;if(!Number.isFinite(n))return"";if(n<0)return"0 days";const r=Math.floor(n/864e5);return`${r} day${r===1?"":"s"}`}function $o(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const n=Date.now()-e*1e3;return Number.isFinite(n)?n<0?0:Math.floor(n/864e5):Number.POSITIVE_INFINITY}function Xn(t){return String(t||"").trim()||"None tracked"}function Cs(t=pi()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const n of t){const r=pt(n);e.push([qt(n),r.label||"",r.esoAccountName||"",mi(n==null?void 0:n.last_seen),gi(n==null?void 0:n.last_seen),Xn(n==null?void 0:n.last_seen_action),(n==null?void 0:n.username)||"",(n==null?void 0:n.discord_id)||""])}return e.map(n=>n.map(hr).join("	")).join(`
`)}async function Rd(){const t=pi().filter(i=>{const s=ye(Wt),o=String(Ce||"").trim().toLowerCase(),a=!s||ye(Bs(i)).includes(s),d=!o||pt(i).status===o;return a&&d}),e=Cs(t);if(await pr(e)){h("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#discordLastSeenReportTsv");r&&(r.focus(),r.select()),h("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function Dd(){Je=!0,U="",l(),$.length===0&&!I&&cr({silent:!0})}function Jr(){Je=!1,ar="",et="",wn="",_n="",_e=-1,l()}function Os(t){return[...new Set((Array.isArray($)?$:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function qs(t,e){return t.map(n=>`<option value="${f(n)}" ${e===n?"selected":""}>${c(n)}</option>`).join("")}function Md(){return qs(Os("link_status"),wn)}function Td(){return qs(Os("link_method"),_n)}function Nd(){return`
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
            value="${f(ar)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${wn===""?"selected":""}>All statuses</option>
            ${Md()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${_n===""?"selected":""}>All methods</option>
            ${Td()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${et===""?"selected":""}>All actions</option>
            <option value="needs-link" ${et==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${et==="can-unlink"?"selected":""}>Unlink Available</option>
            <option value="can-unblock" ${et==="can-unblock"?"selected":""}>Unblock Available</option>
          </select>
        </div>

        ${U?`<div class="discord-data-error member-links-report-error">${c(U)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${qd()}
        </div>
      </div>
    </div>
  `}function Is(){var n,r,i,s,o,a;if(!Je)return;(n=document.querySelector("#closeMemberLinksReportButton"))==null||n.addEventListener("click",Jr),(r=document.querySelector("#refreshMemberLinksButton"))==null||r.addEventListener("click",()=>cr()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>Hd());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",Id),t.addEventListener("keydown",Gd)),(s=document.querySelector("#memberLinksReportActionFilter"))==null||s.addEventListener("change",xd),(o=document.querySelector("#memberLinksReportStatusFilter"))==null||o.addEventListener("change",Pd),(a=document.querySelector("#memberLinksReportMethodFilter"))==null||a.addEventListener("change",Fd),Ln(),document.querySelectorAll("[data-accept-member-candidate]").forEach(d=>{d.addEventListener("click",()=>Ps(d.dataset.acceptMemberCandidate||"",d.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(d=>{d.addEventListener("click",()=>Vd(d.dataset.unlinkMemberLink||"",d.dataset.unlinkMemberLinkDiscordId||""))}),document.querySelectorAll("[data-unblock-member-auto-link]").forEach(d=>{d.addEventListener("click",()=>Fs(d.dataset.unblockMemberAutoLink||"",d.dataset.unblockMemberAutoLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",d=>{d.target===e&&Jr()})}function Eo(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function Ro(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Bd(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Cd(t){return[...Array.isArray(t)?t:[]].sort((e,n)=>{const r=Eo(e)-Eo(n);if(r!==0)return r;const i=Ro(e).localeCompare(Ro(n),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((n==null?void 0:n.discord_user_id)||""),void 0,{sensitivity:"base"})})}function Od(t){const e=Qr(t);let n="";e==="Username"?n=(t==null?void 0:t.discord_username)||"":e==="Global Name"?n=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(n=(t==null?void 0:t.discord_server_nickname)||""),n||(n=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const r=e?` <span class="member-link-report-match-field">(${c(e)})</span>`:"";return`<span class="member-link-report-discord-name">${c(n)}</span>${r}`}function qd(){return I&&$.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray($)||$.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${Cd($).map(e=>{var s;const n=String(e.link_status||"").trim().toLowerCase(),r=String(e.link_method||"").trim().toLowerCase(),i=Od(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${f(Bd(e))}"
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
  `}function xs(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function Do(t){const e=xs();if(e.forEach(r=>r.classList.remove("member-links-report-row-active")),e.length===0){_e=-1;return}_e=Math.max(0,Math.min(t,e.length-1));const n=e[_e];n.classList.add("member-links-report-row-active"),n.scrollIntoView({block:"nearest"})}function Ln(){const t=ye(ar),e=String(et||"").trim().toLowerCase(),n=String(wn||"").trim().toLowerCase(),r=String(_n||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let s=0;i.forEach(a=>{const d=ye(a.dataset.memberLinksReportSearch||""),g=String(a.dataset.memberLinksReportAction||"").trim().toLowerCase(),m=String(a.dataset.memberLinksReportStatus||"").trim().toLowerCase(),b=String(a.dataset.memberLinksReportMethod||"").trim().toLowerCase(),D=(!t||d.includes(t))&&(!e||g===e)&&(!n||m===n)&&(!r||b===r);a.hidden=!D,a.classList.remove("member-links-report-row-active"),D&&(s+=1)});const o=document.querySelector("#memberLinksReportSearchEmpty");o&&(o.hidden=s!==0),_e=-1}function Id(t){ar=t.target.value||"",Ln()}function xd(t){et=t.target.value||"",Ln()}function Pd(t){wn=t.target.value||"",Ln()}function Fd(t){_n=t.target.value||"",Ln()}function Gd(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=xs();if(e.length===0)return;if(t.key==="ArrowDown"){const r=_e<0?0:_e+1;Do(r>=e.length?e.length-1:r);return}const n=_e<0?e.length-1:_e-1;Do(n<0?0:n)}function Fn(){return R==="discord-members"||R==="eso-members"||se||Je||mt}function Ud(t={}){if(!Array.isArray(t.links))return;const e=JSON.stringify($)!==JSON.stringify(t.links);$=t.links,e&&Fn()&&l()}function Mo(){const t=document.querySelector("#runMemberLinksReportButton");t&&(t.disabled=I,t.textContent=I?"Loading...":"Run")}async function cr(t={}){if(!(u!=null&&u.connected)){U="You must be connected to load member links.",Fn()&&l();return}I=!0,U="",Mo(),!t.silent&&Fn()&&l();try{const e=await _("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");$=Array.isArray(e.links)?e.links:[]}catch(e){U=v(e)}finally{I=!1,Mo(),Fn()&&l()}}async function Hd(){if(!(u!=null&&u.connected)||!k.logged_in){U="You must be logged in and connected to run auto-linking.",l();return}I=!0,U="",l();try{const t=await _("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");$=Array.isArray(t.links)?t.links:[],h("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:p})}catch(t){U=v(t)}finally{I=!1,l()}}async function Ps(t,e=""){try{const n=await _("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to accept candidate.");$=Array.isArray(n.links)?n.links:$,h("member-link-accepted",n.message||"Candidate accepted as a link.",{ttlMs:p})}catch(n){U=v(n),h("member-link-accept-error",U,{ttlMs:p})}}async function Fs(t,e=""){if(!await fi({title:"Remove Auto-Link Block?",message:`Remove the blocked auto-match record between ${t} and this Discord account? Auto-linking will run immediately and this screen will refresh to show whether the pair linked again.`,confirmLabel:"Unblock",cancelLabel:"Cancel",confirmClass:"danger"}))return!1;I=!0,U="",l();try{const r=await _("guildsync:unblock-member-auto-link",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to remove auto-link block.");$=Array.isArray(r.links)?r.links:$;const i=ce(t),s=String(e||"").trim(),o=r.refreshedPair||$.find(g=>ce(g.eso_account_name)===i&&String(g.discord_user_id||"").trim()===s),a=String((o==null?void 0:o.link_status)||"").trim().toLowerCase(),d=a==="linked"?" It linked again automatically.":a==="candidate"?" It is now showing as a candidate.":" No automatic link was recreated.";return h("member-link-unblocked",`${r.message||"Auto-link block removed."}${d}`,{ttlMs:p}),!0}catch(r){return U=v(r),h("member-link-unblock-error",U,{ttlMs:p}),!1}finally{I=!1,l()}}async function Vd(t,e=""){if(!!await fi({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const r=await _("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to unlink member.");$=Array.isArray(r.links)?r.links:$,h("member-link-unlinked",r.message||"Member link removed.",{ttlMs:p})}catch(r){U=v(r)}l()}}function ce(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function lr(t){const e=ce(t);return e?$.filter(n=>ce(n.eso_account_name)===e):[]}function dr(t){const e=String(t||"").trim();return e?$.filter(n=>String(n.discord_user_id||"").trim()===e):[]}function Gs(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const n=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(n.length>0){const i=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const s=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return s||n[0]}const r=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return r||e[0]}function Wd(t){return Gs(dr(t))}function jd(t){return`${ce(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function bi(){return A?A.mode==="discord-to-eso"?dr(A.discordUserId):lr(A.esoAccountName):[]}function zd(t){const e=String(t||"").trim(),n=z.find(r=>String(r.discord_id||"").trim()===e);return n&&(n.server_nickname||n.global_name||n.username||n.discord_id)||e}function Us(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?dr(t.discordUserId):lr(t.esoAccountName),r=Gs(n),i=String((r==null?void 0:r.link_status)||"").trim().toLowerCase(),s=n.filter(a=>String(a.link_status||"").trim().toLowerCase()==="linked").length,o=n.filter(a=>String(a.link_status||"").trim().toLowerCase()==="candidate").length;return s>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?s===1?r.eso_account_name:`${s} ESO accounts`:s===1?r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member":`${s} Discord accounts`}`}:i==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?r.eso_account_name:r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member"}`}:i==="blocked"||Number((r==null?void 0:r.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function Hs(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,r=Us(t);return`
    <button
      class="member-link-status-dot member-link-status-${f(r.className)}"
      type="button"
      title="${f(r.title)}"
      aria-label="${f(r.label)}"
      data-open-member-link-dialog="${f(e)}"
      data-member-link-value="${f(n||"")}"
    ></button>
  `}function Yd(){return A?A.mode==="discord-to-eso"?zd(A.discordUserId):A.esoAccountName||"":""}function Vs(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function Qr(t){const e=Vs((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const n=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(n.includes("discord_username")||n.includes("username"))return"Username";if(n.includes("discord_display_name")||n.includes("global")||n.includes("display"))return"Global Name";if(n.includes("discord_server_nickname")||n.includes("server")||n.includes("nickname"))return"Server Nickname";const r=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(r==="exact"||r==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",s=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const a of s){const d=Kd(i,a.value);(!o||d>o.score)&&(o={...a,score:d})}if(o&&o.score>0)return o.field}return""}function ye(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function Kd(t,e){const n=ye(t),r=ye(e);if(!n||!r)return 0;if(n===r)return 100;if((n.includes(r)||r.includes(n))&&Math.min(n.length,r.length)>=4)return 88;const i=Math.abs(n.length-r.length),s=[...n].findIndex((a,d)=>a!==r[d]),o=s===-1?Math.min(n.length,r.length):s;return Math.max(0,Math.min(75,Math.round(o*10-i*3)))}function Jd(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function Qd(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function Xd(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),n=Jd(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${c(n)}</span>`}function Zd(t){var a;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",n=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",r=String(t.link_status||"").trim().toLowerCase(),o=r==="linked"?`<button
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
        <div><span>Status:</span> ${Xd(t)} \xB7 ${c(Qd(t.link_method))} \xB7 ${c(String((a=t.match_confidence)!=null?a:""))}% \xB7 ${c(n)}</div>
        ${Qr(t)?`<div><span>Matched:</span> Matched on ${c(Qr(t))}</div>`:""}
      </div>
      ${o}
    </div>
  `}function eu(){const t=bi();return t.length?[...t].sort((n,r)=>{var d,g;const i=String(n.link_status||"").trim().toLowerCase(),s=String(r.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},a=((d=o[i])!=null?d:9)-((g=o[s])!=null?g:9);return a!==0?a:Number(r.match_confidence||0)-Number(n.match_confidence||0)}).map(n=>Zd(n)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function tu(){if(Bt)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(Ee)return`<div class="discord-data-error">${c(Ee)}</div>`;if(!Array.isArray(ct)||ct.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(bi().map(n=>jd(n))),e=[...ct].filter(n=>{const r=(A==null?void 0:A.mode)==="discord-to-eso"?`${ce(n.account_name)}::${String(A.discordUserId||"").trim()}`:`${ce(A==null?void 0:A.esoAccountName)}::${String(n.discord_id||"").trim()}`;return!t.has(r)}).sort((n,r)=>{const i=Number(r.confidence||0)-Number(n.confidence||0);return i!==0?i:To(n).localeCompare(To(r),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(n=>nu(n)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function To(t){return((A==null?void 0:A.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function nu(t,e={}){var b,y,S;const n=(A==null?void 0:A.mode)||"",r=n==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=Vs(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),s=n==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[s,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),a=n==="discord-to-eso"?t.account_name:t.discord_id,d=e.disabled===!0,g=[r,s,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),m=[r,o,`${(b=t.confidence)!=null?b:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${f(a||"")}" data-member-link-option-search="${f(g)}" title="${f(m)}" ${d?"disabled":""}>
      <span class="member-link-option-name" title="${f(r||"")}">${c(r||"")}</span>
      <span class="member-link-option-subtitle" title="${f(o||"")}">${c(o||"")}</span>
      <span class="member-link-option-confidence" title="${f(String((y=t.confidence)!=null?y:0))}%">${c(String((S=t.confidence)!=null?S:0))}%</span>
    </button>
  `}function ru(){const t=(A==null?void 0:A.mode)||"",e=Yd(),n=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
            ${eu()}
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
              value="${f(An)}"
            />
            ${tu()}
          </section>
        </div>

      </div>
    </div>
  `}async function Ws(t,e){if(!(u!=null&&u.connected)||!L()){h("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:p});return}se=!0,A=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},ct=[],Bt=!0,Ee="",An="",ue=-1,l();try{if(!Array.isArray($)||$.length===0){const i=await _("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&($=Array.isArray(i.links)?i.links:[])}const r=await _("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load link suggestions.");ct=Array.isArray(r.options)?r.options:[]}catch(n){Ee=v(n)}finally{Bt=!1,l()}}function It(){document.removeEventListener("keydown",Xr),se=!1,A=null,ct=[],Bt=!1,Ee="",An="",ue=-1,l()}function js(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function No(t){const e=js();if(e.forEach(r=>r.classList.remove("member-link-option-row-active")),e.length===0){ue=-1;return}ue=Math.max(0,Math.min(t,e.length-1));const n=e[ue];n.classList.add("member-link-option-row-active"),n.scrollIntoView({block:"nearest"})}function zs(){const t=ye(An),e=[...document.querySelectorAll(".member-link-option-row")];let n=0;e.forEach(i=>{const s=ye(i.dataset.memberLinkOptionSearch||i.textContent||""),o=!t||s.includes(t);i.hidden=!o,i.classList.remove("member-link-option-row-active"),o&&(n+=1)});const r=document.querySelector("#memberLinkSuggestionSearchEmpty");r&&(r.hidden=n!==0),ue=-1}function iu(t){An=t.target.value||"",zs()}function ou(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=js();if(e.length===0)return;if(t.key==="ArrowDown"){const r=ue<0?0:ue+1;No(r>=e.length?e.length-1:r);return}const n=ue<0?e.length-1:ue-1;No(n<0?0:n)}function Xr(t){!se||t.key==="Escape"&&(t.preventDefault(),It())}async function su(t){if(!(!A||!t))try{const e=A.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:A.discordUserId}:{esoAccountName:A.esoAccountName,discordUserId:t},n=await _("guildsync:manual-link-member",e,3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to link members.");$=Array.isArray(n.links)?n.links:$,h("member-link-saved",n.message||"Member link saved.",{ttlMs:p}),It()}catch(e){Ee=v(e),l()}}async function au(t,e=""){await Ps(t,e),It()}async function Ys(){if(!!A){Bt=!0,Ee="",l();try{const t=A.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:A.discordUserId}:{mode:"eso-to-discord",accountName:A.esoAccountName},e=await _("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");ct=Array.isArray(e.options)?e.options:[]}catch(t){Ee=v(t)}finally{Bt=!1,l()}}}async function cu(t="",e=""){const n=bi().find(i=>ce(i.eso_account_name)===ce(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!n||!await fi({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await _("guildsync:manual-unlink-member",{esoAccountName:n.eso_account_name,discordUserId:n.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");$=Array.isArray(i.links)?i.links:$,h("member-link-unlinked",i.message||"Member link removed.",{ttlMs:p}),await Ys()}catch(i){Ee=v(i),l()}}async function lu(t="",e=""){await Fs(t,e)&&await Ys()}function Ks(){var n;if(!se)return;document.removeEventListener("keydown",Xr),document.addEventListener("keydown",Xr),(n=document.querySelector("#closeMemberLinkDialogButton"))==null||n.addEventListener("click",It);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",iu),t.addEventListener("keydown",ou),zs()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(r=>{r.addEventListener("click",()=>cu(r.dataset.unlinkEsoAccount||"",r.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-unblock-dialog-member-auto-link]").forEach(r=>{r.addEventListener("click",()=>lu(r.dataset.unblockEsoAccount||"",r.dataset.unblockDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(r=>{r.addEventListener("click",()=>su(r.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(r=>{r.addEventListener("click",()=>au(r.dataset.acceptDialogMemberCandidate||"",r.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",r=>{r.target===e&&It()})}function Js(){var e,n,r;if(!Ut)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",zr),(n=document.querySelector("#rerunAssociateTicketReportButton"))==null||n.addEventListener("click",()=>ta()),(r=document.querySelector("#copyAssociateTicketReportGridButton"))==null||r.addEventListener("click",()=>pd());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&zr()})}function Qs(){var e,n,r;if(!Vt)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",Yr),(n=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||n.addEventListener("click",()=>ea()),(r=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||r.addEventListener("click",()=>yd());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Yr()})}function Xs(){var r,i,s;if(!mt)return;(r=document.querySelector("#closeDiscordLastSeenReportButton"))==null||r.addEventListener("click",Kr),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>Zs()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>Rd()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(o=>{o.addEventListener("click",()=>wd(o.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",du);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",uu),yi();const n=document.querySelector(".discord-last-seen-report-overlay");n&&n.addEventListener("click",o=>{o.target===n&&Kr()})}function du(t){Wt=t.target.value||"",yi()}function uu(t){Ce=t.target.value||"",yi()}function yi(){const t=ye(Wt),e=String(Ce||"").trim().toLowerCase(),n=[...document.querySelectorAll("[data-discord-last-seen-row]")];let r=0;n.forEach(s=>{const o=ye(s.dataset.discordLastSeenSearch||s.textContent||""),a=String(s.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),m=(!t||o.includes(t))&&(!e||a===e);s.hidden=!m,m&&(r+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=r!==0)}async function Zs(){if(!(u!=null&&u.connected)||!L()){at="You must be logged in and connected to run this report.",l();return}Be=!0,at="",l();try{const t=await _("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");z=Di(t.members),or=Mi(t.roles),li=[...z]}catch(t){at=v(t)}finally{Be=!1,l(),N("discordLastSeenReportSearchInput")}}async function ea(){if(!(u!=null&&u.connected)||!L()){st="You must be logged in and connected to run this report.",l();return}Ne=!0,st="",l();try{const t=await _("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");bn=Array.isArray(t.rows)?t.rows:[]}catch(t){st=v(t)}finally{Ne=!1,l()}}async function ta(){if(!(u!=null&&u.connected)||!L()){ot="You must be logged in and connected to run this report.",l();return}Te=!0,ot="",l();try{const t=await _("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Ht=Array.isArray(t.rows)?t.rows:[]}catch(t){ot=v(t)}finally{Te=!1,l()}}function $t(){const t=String(Kt||"").trim().toLowerCase(),e={account_name:"Anonymous",rank:"Manual Entry"},n=new Set(["anonymous"]),r=j.filter(i=>String(i.account_name||"").trim()).filter(i=>{const o=String(i.account_name||"").trim().toLowerCase();return!o||n.has(o)||t&&!o.includes(t)?!1:(n.add(o),!0)}).slice().sort((i,s)=>{const o=String(i.account_name||"").toLowerCase(),a=String(s.account_name||"").toLowerCase(),d=t&&o.startsWith(t)?0:1,g=t&&a.startsWith(t)?0:1;return d!==g?d-g:o.localeCompare(a)}).slice(0,19);return[e,...r]}function na(t=$t()){const e=String(E.accountName||"").trim();return t.length===0?'<div class="roster-history-muted manual-ticket-no-matches">No matching guild members found.</div>':t.map((n,r)=>`
        <button class="roster-history-match${r===F||n.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${f(n.account_name)}" role="option" aria-selected="${r===F||n.account_name===e?"true":"false"}">
          <span>${c(n.account_name)}</span>
          <strong>${c(n.rank||"")}</strong>
          ${r===F?"<small>Enter</small>":""}
        </button>
      `).join("")}function ra(){document.querySelectorAll("[data-manual-ticket-account]").forEach(t=>{t.addEventListener("mousedown",e=>{e.preventDefault()}),t.addEventListener("click",()=>{ia(t.dataset.manualTicketAccount||"")})})}function Rr(){const t=document.querySelector("#manualTicketMatchList");if(!t)return;const e=$t();F>=e.length&&(F=e.length>0?e.length-1:-1),t.innerHTML=na(e),ra()}function ia(t){const e=String(t||"").trim();E.accountName=e,Kt=e,re=!1,F=-1,K="",l()}function N(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const n=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(n,n)},0)}function fu(){const t=re?$t():[],e=String(E.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Entry</h3>
            <p>Add a manual banking or raffle entry such as FFTG, officer corrections, or anonymous gold.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${K?`<div class="discord-data-error">${c(K)}</div>`:""}

        <div class="manual-ticket-form">
          <div class="manual-ticket-member-picker">
            <label class="manual-ticket-member-field" for="manualTicketAccountSearchInput">
              <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(Kt)}" autocomplete="off" />
            </label>

            ${re?`
              <div id="manualTicketMatchList" class="roster-history-match-list manual-ticket-match-list" role="listbox" aria-label="Matching guild members">
                ${na(t)}
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
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${Yn?"disabled":""}>${Yn?"Saving...":"Add Manual Entry"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function oa(){var s,o,a,d,g,m;if(!$e)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{$e=!1,l()});const t=document.querySelector("#manualTicketAccountSearchInput");if(t){const b=({rerender:y=!1}={})=>{if(re=!0,F=$t().length>0?0:-1,y){l(),N("manualTicketAccountSearchInput");return}Rr()};t.addEventListener("focus",()=>{re||b({rerender:!0})}),t.addEventListener("click",()=>{re||b({rerender:!0})}),t.addEventListener("input",y=>{Kt=y.target.value||"",E.accountName="",re=!0,F=$t().length>0?0:-1,Rr()}),t.addEventListener("keydown",y=>{if(y.key==="Escape")return;if(!re){(y.key==="ArrowDown"||y.key==="ArrowUp")&&(y.preventDefault(),b({rerender:!0}));return}const S=$t();if(y.key==="ArrowDown"||y.key==="ArrowUp"){if(S.length===0)return;y.preventDefault();const H=y.key==="ArrowDown"?1:-1;F=((F<0?0:F)+H+S.length)%S.length,Rr();return}if(y.key!=="Enter")return;y.preventDefault();const M=S[F>=0?F:0];M!=null&&M.account_name&&ia(M.account_name)})}ra(),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",b=>{E.note=b.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(b=>{b.addEventListener("click",()=>{const y=String(b.dataset.manualTicketType||"").trim().toLowerCase();E.ticketType=y==="monthly"?"monthly":"biweekly",l()})}),(a=document.querySelector("[data-manual-ticket-toggle]"))==null||a.addEventListener("click",()=>{E.ticketType=E.ticketType==="monthly"?"biweekly":"monthly",l()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",b=>{const y=String(b.target.value||"").replace(/\D/g,"");b.target.value!==y&&(b.target.value=y),E.goldValue=y});const n=document.querySelector("#manualTicketCountInput");n==null||n.addEventListener("input",b=>{const y=String(b.target.value||"").replace(/\D/g,"");b.target.value!==y&&(b.target.value=y),E.tickets=y});const r=b=>{const y=Number(E.tickets)||0,S=Math.max(0,y+b);E.tickets=String(S),n&&(n.value=E.tickets,n.focus())};(d=document.querySelector("#manualTicketCountUpButton"))==null||d.addEventListener("click",()=>r(1)),(g=document.querySelector("#manualTicketCountDownButton"))==null||g.addEventListener("click",()=>r(-1)),(m=document.querySelector("#saveManualBiweeklyTicketButton"))==null||m.addEventListener("click",()=>hu());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",b=>{b.target===i&&($e=!1,l())})}async function hu(){const t=String(E.accountName||"").trim(),e=String(E.note||"").trim(),n=String(E.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",r=Number(String(E.goldValue||"").trim()||0),i=Number(String(E.tickets||"").trim()||0);if(re){K="Select a matching guild member or Anonymous from the list before saving.",l(),N("manualTicketAccountSearchInput");return}if(!t){K="Select a matching guild member or Anonymous from the list before saving.",l(),N("manualTicketAccountSearchInput");return}if(!Number.isFinite(r)||r<0){K="Gold value must be zero or greater.",l();return}if(!Number.isFinite(i)||i<0){K="Tickets must be zero or greater.",l();return}const s=t.toLowerCase()==="anonymous";if(s&&Math.floor(i)>0){K="Anonymous cannot be awarded tickets. Use 0 tickets and enter a gold value.",l();return}if(Math.floor(r)===0&&Math.floor(i)===0){K=s?"Enter a gold value for Anonymous when tickets are 0.":"Enter gold or tickets. Both cannot be zero.",l();return}Yn=!0,K="",l();try{const o=await _("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:n,gold_value:Math.floor(r),tickets:Math.floor(i)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Failed to add manual entry.");$e=!1,E={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},Kt="",F=-1,re=!1,await ke({silent:!0}),h("manual-ticket-added",o.message||"Manual entry added.",{ttlMs:p})}catch(o){K=v(o)}finally{Yn=!1,l()}}async function pu(t=""){const e=String(t||"").trim();if(!!e){Gt=!0,gn=e,Fe=[],zn=!0,it=!1,Ge="",Mt="",l();try{const n=await _("guildsync:request-roster-member-notes",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster notes.");Fe=Array.isArray(n.notes)?n.notes:[]}catch(n){Ge=v(n)}finally{zn=!1,l()}}}function Zr(){Gt=!1,gn="",Fe=[],zn=!1,it=!1,Ge="",Mt="",l()}function mu(){var n,r;if(!Gt)return;(n=document.querySelector("#closeRosterNotesButton"))==null||n.addEventListener("click",Zr);const t=document.querySelector("#rosterNotesNewNote");t&&t.addEventListener("input",i=>{Mt=i.target.value||""}),(r=document.querySelector("#saveRosterNoteButton"))==null||r.addEventListener("click",()=>gu());const e=document.querySelector(".roster-notes-overlay");e&&e.addEventListener("click",i=>{i.target===e&&Zr()})}async function gu(){const t=String(Mt||"").trim();if(!t){Ge="Enter a note before saving.",l();return}it=!0,Ge="",l();try{const e=await _("guildsync:add-roster-member-note",{account_name:gn,note:t},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to save roster note.");e.note&&(Fe=[...Fe,e.note]),Mt="";const n=j.find(r=>ce(r.account_name)===ce(gn));n&&(n.note_count=Number(n.note_count||0)+1)}catch(e){Ge=v(e)}finally{it=!1,l()}}function sa(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>$n());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{Dt=!0,Ae="",l()});const n=document.querySelector("#rosterMemberSearch");n&&(n.addEventListener("input",o=>{jn=o.target.value||"",Ur=o.target.selectionStart,Hr=o.target.selectionEnd,O=-1,l({restoreRosterSearchFocus:!0})}),n.addEventListener("keydown",bu)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Kl(o.dataset.rosterSortColumn||"account_name")})});const r=document.querySelector("#rosterRankFilter");r&&r.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(rt.add(a),O=-1,l())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRosterRankFilter||"";rt.delete(a),O=-1,l()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(wt.add(a),O=-1,l())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRosterLinkStatusFilter||"";wt.delete(a),O=-1,l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>Ws(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))}),document.querySelectorAll("[data-open-roster-notes]").forEach(o=>{o.addEventListener("click",()=>pu(o.dataset.openRosterNotes||""))}),mu();const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{jn="",rt.clear(),wt.clear(),we="",V="",O=-1,l()}),yu()}function bu(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){O=-1;return}t.preventDefault(),t.key==="ArrowDown"?O=O<0?0:Math.min(O+1,e.length-1):t.key==="ArrowUp"&&(O=O<0?e.length-1:Math.max(O-1,0)),e.forEach((r,i)=>{r.classList.toggle("roster-search-active-row",i===O)});const n=e[O];n&&typeof n.scrollIntoView=="function"&&n.scrollIntoView({block:"nearest",inline:"nearest"})}function yu(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{Dt=!1,l()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",n=>{if(mn=n.target.value||"",ee=-1,!mn.trim()){clearTimeout(Er),Ae="",Q=[],ze="",xe=[],Pe=!1,l(),N("rosterHistorySearchInput");return}clearTimeout(Er),Er=setTimeout(()=>{wu({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(Q.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;ee=((ee<0?0:ee)+i+Q.length)%Q.length,l(),N("rosterHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=Q[ee>=0?ee:0];r!=null&&r.account_name&&Co(r.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(n=>{n.addEventListener("click",()=>{Co(n.dataset.rosterHistoryAccount||"")})})}function aa(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{Tt=!1,l()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",n=>{Me=n.target.value||"",te=-1,Xe+=1;const r=Xe;if(clearTimeout(So),!Me.trim()){Le="",X=[],Nt="",ft="",Ue=[],He=!1,l(),N("discordHistorySearchInput");return}So=setTimeout(()=>{ku({auto:!0,keepFocus:!0,generation:r})},wl)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(X.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;te=((te<0?0:te)+i+X.length)%X.length,l(),N("discordHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=X[te>=0?te:0];r!=null&&r.discord_id&&Bo(r.discord_id,jr(r))})),document.querySelectorAll("[data-discord-history-id]").forEach(n=>{n.addEventListener("click",()=>{Bo(n.dataset.discordHistoryId||"",n.dataset.discordHistoryName||"")})})}async function ku(t={}){const e=Number.isInteger(t.generation)?t.generation:++Xe,n=Me.trim();if(e===Xe){if(!n){Le="",X=[],te=-1,Nt="",ft="",Ue=[],He=!1,l(),t.keepFocus&&N("discordHistorySearchInput");return}He=!0,Le="",X=[],te=-1,Nt="",ft="",Ue=[],l(),t.keepFocus&&N("discordHistorySearchInput");try{const r=await _("guildsync:request-discord-member-history",{query:n},3e4);if(e!==Xe||n!==Me.trim())return;if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search Discord member history.");X=vu(r.matches),te=X.length>0?0:-1}catch(r){if(e!==Xe||n!==Me.trim())return;Le=v(r)}finally{if(e!==Xe||n!==Me.trim())return;He=!1,l(),t.keepFocus&&N("discordHistorySearchInput")}}}async function Bo(t,e="",n={}){const r=String(t||"").trim();if(!!r){Nt=r,ft=String(e||r).trim(),Me=ft,Ue=[],He=!0,Le="",l();try{const i=await _("guildsync:request-discord-member-history-events",{discord_id:r},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");Ue=Su(i.events)}catch(i){Le=v(i)}finally{He=!1,n.keepLoading||l()}}}function vu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function Su(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s,o,a,d,g,m,b,y;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((r=(n=e.old_value)!=null?n:e.oldValue)!=null?r:"").trim(),new_value:String((s=(i=e.new_value)!=null?i:e.newValue)!=null?s:"").trim(),event_timestamp:(d=(a=(o=e.event_timestamp)!=null?o:e.eventTimestamp)!=null?a:e.timestamp)!=null?d:"",event_datetime:(m=(g=e.event_datetime)!=null?g:e.eventDatetime)!=null?m:"",initiator:String((y=(b=e.initiator)!=null?b:e.initiatorName)!=null?y:"").trim(),source:String(e.source||"").trim()}}):[]}async function wu(t={}){const e=mn.trim();if(!e){Ae="",Q=[],ee=-1,ze="",xe=[],Pe=!1,l(),t.keepFocus&&N("rosterHistorySearchInput");return}Pe=!0,Ae="",Q=[],ee=-1,ze="",xe=[],l(),t.keepFocus&&N("rosterHistorySearchInput");try{const n=await _("guildsync:request-roster-rank-history",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search roster rank history.");Q=_u(n.matches),ee=Q.length>0?0:-1}catch(n){Ae=v(n)}finally{Pe=!1,l(),t.keepFocus&&N("rosterHistorySearchInput")}}async function Co(t,e={}){const n=String(t||"").trim();if(!!n){ze=n,mn=n,xe=[],Pe=!0,Ae="",l();try{const r=await _("guildsync:request-roster-stream-history",{account_name:n},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load roster stream history.");xe=Au(r.events)}catch(r){Ae=v(r)}finally{Pe=!1,e.keepLoading||l()}}}function _u(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function Au(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(r=(n=e.timestamp)!=null?n:e.timestampS)!=null?r:"",officer:String(e.officer||"").trim()}}):[]}function ca(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(n=e.joined)!=null?n:"",note_count:Number((i=(r=e.note_count)!=null?r:e.noteCount)!=null?i:0)||0}}).sort((e,n)=>e.account_name.localeCompare(n.account_name)):[]}function la(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function ur(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function ki(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function Lu(t={}){const e=ca(t.members),n=JSON.stringify(j)!==JSON.stringify(e);if(j=e,pn=t.last_refresh||new Date().toISOString(),n&&(R==="eso-members"||se))l();else if(R==="eso-members"){const r=document.querySelector(".eso-roster-panel .discord-last-refresh");r&&(r.textContent=`Last Refresh: ${la(pn)}`)}h("roster-data-updated",`Roster data updated. Loaded ${j.length} member record${j.length===1?"":"s"}.`,{ttlMs:p})}async function $n(t={}){if(!!(u!=null&&u.connected)){je=!0,(R==="eso-members"||se)&&l();try{const e=await _("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");j=ca(e.members),pn=e.last_refresh||pn,t.silent||h("roster-data-loaded",`Loaded ${j.length} roster member${j.length===1?"":"s"}.`,{ttlMs:p})}catch(e){h("roster-data-error",v(e),{ttlMs:p})}finally{je=!1,(R==="eso-members"||se)&&l()}}}async function $u(t={}){var e;if(!!L()){if(!(u!=null&&u.connected)){h("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}je=!0,l();try{const n=await Xc(t);if(!(n!=null&&n.ok)){h("roster-data-pending",(n==null?void 0:n.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:p});return}const r={local_upload_id:da(),authenticated_username:le(),authenticated_discord_user_id:((e=k==null?void 0:k.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await fa(r)}catch(i){throw Eu(r),i}await $n({silent:!0})}catch(n){h("roster-data-error",v(n),{ttlMs:p})}finally{je=!1,l()}}}function da(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function vi(){try{const t=window.localStorage.getItem(cs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function ua(t){window.localStorage.setItem(cs,JSON.stringify(Array.isArray(t)?t:[]))}function Eu(t){const e=String((t==null?void 0:t.local_upload_id)||da()),n=vi().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),ua(n),h("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Ru(t){const e=vi().filter(n=>(n==null?void 0:n.local_upload_id)!==t);ua(e)}async function Du(){if(Ar||!(u!=null&&u.connected)||!L())return;const t=vi();if(t.length!==0){Ar=!0;try{for(const e of t){if(!(u!=null&&u.connected)||!L())return;await fa(e),Ru(e.local_upload_id)}}catch(e){h("roster-data-pending-error",`Pending roster upload retry failed: ${v(e)}`,{ttlMs:p})}finally{Ar=!1}}}async function fa(t){if(!(u!=null&&u.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await _("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const n=await tl(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return h("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:p}),e}async function Mu(t={}){var e,n;if(!!L()){if(!(u!=null&&u.connected)){h("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}try{const r=await Jc(t);if(!(r!=null&&r.ok)){h("applications-data-info",(r==null?void 0:r.message)||"No application records were found to process.",{ttlMs:p});return}if((Array.isArray((e=r==null?void 0:r.data)==null?void 0:e.records)?r.data.records:[]).length===0){h("applications-data-info",`No application records were found in ${r.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:p});return}const s={local_upload_id:ha(),authenticated_username:le(),authenticated_discord_user_id:((n=k==null?void 0:k.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await ma(s)}catch(o){throw Tu(s),o}}catch(r){h("applications-data-error",v(r),{ttlMs:p})}}}function ha(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Si(){try{const t=window.localStorage.getItem(ls),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function pa(t){window.localStorage.setItem(ls,JSON.stringify(Array.isArray(t)?t:[]))}function Tu(t){const e=String((t==null?void 0:t.local_upload_id)||ha()),n=Si().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),pa(n),h("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Nu(t){const e=Si().filter(n=>(n==null?void 0:n.local_upload_id)!==t);pa(e)}async function Bu(){if(Lr||!(u!=null&&u.connected)||!L())return;const t=Si();if(t.length!==0){Lr=!0;try{for(const e of t){if(!(u!=null&&u.connected)||!L())return;await ma(e),Nu(e.local_upload_id)}}catch(e){h("applications-data-pending-error",`Pending application upload retry failed: ${v(e)}`,{ttlMs:p})}finally{Lr=!1}}}async function ma(t){var i;if(!(u!=null&&u.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return h("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:p}),{ok:!0,sent_count:0,skipped_empty:!0};let n=0;for(const s of e){const o=await _("guildsync:eso-guild-application-message",{...t,record:s,recordKey:(s==null?void 0:s.recordKey)||"",message:Cu(s)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Backend rejected the application data payload. Application data was not cleared.");n+=1}const r=await Zc(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return h("applications-data-sent",`Sent ${n} application record${n===1?"":"s"} to GuildSync backend.`,{ttlMs:p}),{ok:!0,sent_count:n}}function Cu(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),n=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",r=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",s=String(t.applicationText||"_No application text captured._"),o=Object.entries(t).filter(([a])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(a)).map(([a,d])=>`**${a}:** ${Ou(d)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${n}** ${r} an application from **${i}**.`,"","**Application text:**","```",s.slice(0,1500),"```",o.length>0?"":null,o.length>0?"**Full captured record fields:**":null,...o].filter(a=>a!==null).join(`
`)}function Ou(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function qu(t={}){await Mu(t)}function Iu(){const t=ei(T),e=gf(t,T),n=T!=="other",r=n&&Jt(T);return`
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
          ${Wu()}
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${c(Ba(ms))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${Ye||!L()?"disabled":""} ${L()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Ye?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${Dr("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${Dr("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${Dr("other","?","Other","All other deposits")}
        </div>

        ${Vu(T)}

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
              ${t.length>0?t.map(i=>yf(i,n,r)).join(""):kf(n,r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${c(Et(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${T==="monthly"?`<div>Raffle Pot: <strong>${c(Et(Math.floor(e.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${T==="biweekly"?`<div>Raffle Pot: <strong>${c(Et(wa(e.amount)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${T==="biweekly"?`<div>Draws: <strong>${c(String(bf(e.amount)))}</strong></div>`:""}
          ${n?`<div>Purchased: <strong>${c(oe(e.purchased))}</strong></div>${r?`<div>Bonus: <strong>${c(oe(e.bonus))}</strong></div>`:""}<div>Total Tickets: <strong>${c(oe(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${lt?Gu(ei(ae)):""}
    </div>
  `}function xu(){return`
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
            <input id="bankingHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" autocomplete="off" placeholder="Start typing part of an account name..." value="${f(ht)}" />
          </label>
          ${Pu()}
        </div>

        ${me?`<div class="discord-data-error">${c(me)}</div>`:""}

        <div class="banking-history-results">
          <div class="roster-history-section-title">Banking History${he?`: ${c(he)}`:""}${he?`<span class="banking-history-count">${c(String(ie.length))} record${ie.length===1?"":"s"} found</span>`:""}</div>
          ${Fu()}
        </div>
      </div>
    </div>
  `}function Pu(){return ht.trim()?pe&&G.length===0&&!he?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">Searching...</div></div>':G.length===0&&!he?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">No matching banking names found.</div></div>':G.length===0?"":`
    <div class="banking-history-autocomplete" role="listbox" aria-label="Banking history matches">
      ${G.map((t,e)=>`
        <button class="banking-history-autocomplete-option${e===ne?" is-selected":""}" type="button" data-banking-history-account="${f(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <small>${c(String(Number(t.record_count||t.recordCount||0)||0))} record${Number(t.record_count||t.recordCount||0)===1?"":"s"}</small>
        </button>
      `).join("")}
    </div>
  `:""}function Fu(){const t=ie.some(e=>e.bonus_enabled);return he?pe&&ie.length===0?'<div class="roster-history-muted">Loading banking history...</div>':ie.length===0?'<div class="roster-history-muted">No banking history found for this account.</div>':`
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
              <td>${c(sf((i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:""))}</td>
              <td>${c(af(e.transaction_type||e.type||""))}</td>
              <td style="text-align:right;">${c(cf((o=(s=e.deposit_amount)!=null?s:e.depositAmount)!=null?o:e.amount))} \u{1FA99}</td>
              <td style="text-align:right;">${c(Mr(e.purchased_tickets))}</td>
              ${t?`<td style="text-align:right;">${e.bonus_enabled?`${c(oe(e.bonus_percent))}%`:""}</td><td style="text-align:right;">${e.bonus_enabled?c(Mr(e.bonus_tickets)):""}</td>`:""}
              <td style="text-align:right;">${c(Mr(e.total_tickets))}</td>
              <td class="banking-history-note-cell">${c(e.note||"")}</td>
            </tr>
          `}).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see banking history.</div>'}function Gu(t){const e=Jt(ae);return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${c(ge(ae))} Deposits</h3>
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
              ${t.length>0?t.map(n=>Uu(n)).join(""):Hu()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${c(ka(t))}</textarea>
      </div>
    </div>
  `}function Uu(t){const e=Jt(ae);return`
    <tr>
      <td>${c(t.displayName||"")}</td>
      <td>${c(String($i(t,ae)))}</td>
      <td>${c(String(t.purchasedTickets))}</td>
      ${e?`<td>${c(String(t.bonusPercent))}%</td><td>${c(String(t.bonusTickets))}</td>`:""}
      <td>${c(String(t.totalTickets))}</td>
      <td>${c(t.note||"")}</td>
    </tr>
  `}function Hu(){return`
    <tr>
      <td class="bank-empty-row" colspan="${Jt(ae)?7:5}">No deposits to export for ${c(ge(ae))}.</td>
    </tr>
  `}function Vu(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=Ai(t),n=er(t),r=n<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${f(ge(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${c(ge(t))} Raffle Period ${n===0?"(Current)":`(${Math.abs(n)} period${Math.abs(n)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${c(Gn(e.salesStart))} through ${c(Gn(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${c(Gn(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${r?"":"disabled"} aria-label="Next ${f(ge(t))} raffle period">\u203A</button>
    </div>
  `}function Dr(t,e,n,r){const i=T===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${f(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${c(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${c(n)}</span>
        <span class="bank-section-subtitle">${c(r)}</span>
      </span>
    </button>
  `}function Wu(){if(!L())return"";const t=fr(),e=En(),n=ga(),r=t>0,i=e>0,s=n>0;if(!r&&!i&&!s)return"";let o="",a="",d=!1;r?(o=`Check Out ${t} Deposit Mail`,a="checkout"):i?(d=!0,yt?o=`Writing ${e} Pending Mail`:W.running?o=`${e} Mail Waiting for ESO Closure`:(Ea("render-pending-mail-button"),o=`${e} Mail Writing to Disk`)):(d=!0,o=`${n} Mail Ready to Send`);const g=r?"Check out new deposit mail. GuildSync will immediately try to write it, or hold it until ESO closes.":i?"Deposit mail is already checked out and will be written automatically after ESO closes.":"Deposit mail has been written to ESO SavedVariables and is ready for ESO to send it and write acknowledgements.",m=Pr||yt,b=W.running?"ESO Running":"ESO Not Running",y=W.running?"eso-running":"eso-not-running";return`
    <button id="checkoutDepositMailButton" class="${`bank-export-button deposit-mail-button${d?" deposit-mail-status-only":""}`}" type="button" data-deposit-mail-action="${f(a)}" ${d||m?'aria-disabled="true"':""} title="${f(W.message||g)}" aria-label="${f(`${o}. ${g}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${c(o)}</span>
      <span aria-hidden="true">(</span><span class="deposit-mail-eso-status ${y}" aria-hidden="true">${c(b)}</span><span aria-hidden="true">)</span>
    </button>
  `}function En(){return Rn().reduce((t,e)=>t+Qt(e.records).length,0)}function ju(){const t=(k==null?void 0:k.user)||{};return new Set([le(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function zu(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?ju().has(e):!1}function ga(){return L()?Y.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="written_to_eso"&&zu(t)}).length:0}function fr(){return Y.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="unsent"}).length}function Yu(t){const e=String(t||"").trim();return Y.find(n=>String(n.eventId||"").trim()===e)||null}function wi(t){const e=String(t||"other").toLowerCase(),n=["biweekly","monthly","other"],r=n.includes(e)?e:"other",i=n.filter(s=>s!==r);return[i[0]||"biweekly",r,i[1]||"other"]}function _i(t={},e="other"){const n=String(e||"other").toLowerCase(),r=Number(t==null?void 0:t.amount)||0;return n===String((t==null?void 0:t.type)||"").toLowerCase()?Number(t==null?void 0:t.ticketAmount)||0:n==="biweekly"?Math.floor(r/500):n==="monthly"?Math.floor(r/2500):0}function ba(t={},e="other",n=""){const r=String(t.type||"other").toLowerCase(),i=ge(r),s=ge(e),o=le()||"Unknown user",a=[`Moved from ${i} to ${s} by ${o}.`,`Ref ${t.eventId||""}`],d=String(n||"").trim();return d&&a.push(`Reason: ${d}`),a.join(`
`)}function Ku(t){const e=Yu(t);if(!e){h("banking-move-missing","Could not find the selected banking entry.",{ttlMs:p});return}const n=String(e.type||"other").toLowerCase();Se=e,q={targetType:n,note:"",tickets:String(_i(e,n))},ve="",Ot=!1,zt=!0,l()}function Zn(){zt=!1,Ot=!1,ve="",Se=null,q={targetType:"other",note:"",tickets:""},l()}function Ju(){const t=Se||{},e=String(t.type||"other").toLowerCase(),n=ge(e),r=wi(e);let i=String(q.targetType||r[0]||"other").toLowerCase();r.includes(i)||(i=r[0]||"other",q.targetType=i);const s=ba(t,i,q.note);return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="bankingMoveDialogTitle">
      <div class="roster-history-dialog manual-ticket-dialog banking-move-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="bankingMoveDialogTitle">Move Banking Entry</h3>
            <p>Move this deposit to a different banking section while preserving a reference to the original event.</p>
          </div>
          <button id="closeBankingMoveDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${ve?`<div class="discord-data-error">${c(ve)}</div>`:""}

        <div class="manual-ticket-form banking-move-form">
          <div class="banking-move-current-entry">
            <div><strong>Current Type:</strong> ${c(n)}</div>
            <div><strong>Event ID:</strong> ${c(t.eventId||"")}</div>
            <div><strong>Depositor:</strong> ${c(t.displayName||"")}</div>
            <div><strong>Amount:</strong> ${c(Et(t.amount))} \u{1FA99}</div>
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
                    <strong>${c(ge(o))}</strong>
                    <span>${o===e?"Current / restore original values":`${c(String(_i(t,o)))} tickets`}</span>
                  </button>
                `).join("")}
              </div>
            </div>
          </div>

          <div class="banking-move-compact-row">
            <label class="manual-ticket-count-field banking-move-ticket-field">
              <span>Tickets Awarded</span>
              <input id="bankingMoveTicketsInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${f(q.tickets)}" ${i==="other"?"disabled":""} />
            </label>

            <label class="manual-ticket-note-field banking-move-note-field">
              <span>Move Note</span>
              <textarea id="bankingMoveNoteInput" class="discord-search-input manual-ticket-note-input banking-move-note-input" rows="1" placeholder="Optional reason for this move">${c(q.note)}</textarea>
            </label>
          </div>

          <div class="roster-history-muted banking-move-generated-note">${c(s).replace(/\n/g,"<br>")}</div>

          <div class="manual-ticket-actions banking-move-actions">
            <button id="saveBankingMoveButton" class="refresh-discord-button banking-move-submit-button" type="button" ${Ot||i===e?"disabled":""}>${Ot?"MOVING...":i===e?"SELECT A SIDE TO MOVE":"MOVE"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Qu(){var n,r,i,s;if(!zt)return;(n=document.querySelector("#closeBankingMoveDialogButton"))==null||n.addEventListener("click",()=>Zn());function t(o){const a=String(o||"other").toLowerCase(),d=String((Se==null?void 0:Se.type)||"other").toLowerCase(),g=wi(d);q.targetType=g.includes(a)?a:d,q.tickets=String(_i(Se||{},q.targetType)),l()}document.querySelectorAll("[data-banking-move-target]").forEach(o=>{o.addEventListener("click",()=>t(o.dataset.bankingMoveTarget))}),(r=document.querySelector("#bankingMoveTicketsInput"))==null||r.addEventListener("input",o=>{const a=String(o.target.value||"").replace(/\D/g,"");o.target.value!==a&&(o.target.value=a),q.tickets=a}),(i=document.querySelector("#bankingMoveNoteInput"))==null||i.addEventListener("input",o=>{q.note=o.target.value||"";const a=document.querySelector(".banking-move-generated-note");a&&(a.innerText=ba(Se||{},q.targetType||"other",q.note))}),(s=document.querySelector("#saveBankingMoveButton"))==null||s.addEventListener("click",()=>Xu());const e=document.querySelector(".roster-history-overlay");e&&e.addEventListener("click",o=>{o.target===e&&Zn()})}async function Xu(){const t=Se;if(!(t!=null&&t.eventId)){ve="No banking entry is selected.",l();return}const e=String(t.type||"other").toLowerCase(),n=wi(e),r=String(q.targetType||n[0]||"other").toLowerCase();if(!n.includes(r)||r===e){ve="Select one of the side destinations before moving this entry.",l();return}const i=r==="other"?0:Math.floor(Number(String(q.tickets||"").trim()||0));if(!Number.isFinite(i)||i<0){ve="Tickets must be zero or greater.",l();return}Ot=!0,ve="",l();try{const s=await _("guildsync:move-banking-entry",{event_id:t.eventId,target_type:r,tickets:i,note:q.note||""},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to move banking entry.");Zn(),await ke({silent:!0}),h("banking-entry-moved",s.message||"Banking entry moved.",{ttlMs:p})}catch(s){Ot=!1,ve=v(s),l()}}function Zu(){if(!L()){h("banking-history-login-required","Login required to lookup banking history.",{ttlMs:p});return}Yt=!0,ht="",G=[],ie=[],he="",pe=!1,me="",ne=-1,clearTimeout(Lt),l(),N("bankingHistorySearchInput")}function ef(){Yt=!1,pe=!1,me="",clearTimeout(Lt)}function tf(){if(!Yt)return;const t=document.querySelector("#bankingHistorySearchInput");t&&(t.addEventListener("input",e=>{if(ht=e.target.value||"",ne=-1,he="",ie=[],!ht.trim()){clearTimeout(Lt),me="",G=[],pe=!1,l(),N("bankingHistorySearchInput");return}clearTimeout(Lt),Lt=setTimeout(()=>{nf({keepFocus:!0})},250)}),t.addEventListener("keydown",e=>{if(e.key==="ArrowDown"||e.key==="ArrowUp"){if(G.length===0)return;e.preventDefault();const r=e.key==="ArrowDown"?1:-1;ne=((ne<0?0:ne)+r+G.length)%G.length,l(),N("bankingHistorySearchInput");return}if(e.key!=="Enter")return;e.preventDefault();const n=G[ne>=0?ne:0];n!=null&&n.account_name&&Oo(n.account_name)})),document.querySelectorAll("[data-banking-history-account]").forEach(e=>{e.addEventListener("click",()=>{Oo(e.dataset.bankingHistoryAccount||"")})})}async function nf(t={}){const e=ht.trim();if(!e){me="",G=[],ne=-1,he="",ie=[],pe=!1,l(),t.keepFocus&&N("bankingHistorySearchInput");return}pe=!0,me="",G=[],ne=-1,l(),t.keepFocus&&N("bankingHistorySearchInput");try{const n=await _("guildsync:request-banking-history-matches",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search banking history.");G=rf(n.matches),ne=G.length>0?0:-1}catch(n){me=v(n)}finally{pe=!1,l(),t.keepFocus&&N("bankingHistorySearchInput")}}async function Oo(t){const e=String(t||"").trim();if(!!e){clearTimeout(Lt),he=e,ht=e,G=[],ie=[],pe=!0,me="",l();try{const n=await _("guildsync:request-banking-history-records",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load banking history.");ie=of(n.records)}catch(n){me=v(n)}finally{pe=!1,l()}}}function rf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s;return{account_name:String(e.account_name||e.accountName||"").trim(),record_count:Number((r=(n=e.record_count)!=null?n:e.recordCount)!=null?r:0)||0,last_event_timestamp:(s=(i=e.last_event_timestamp)!=null?i:e.lastEventTimestamp)!=null?s:""}}).filter(e=>e.account_name):[]}function of(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s,o,a,d,g,m,b,y,S,M,H,D,Re,Qe,Xt,Zt;return{event_id:String(e.event_id||e.eventId||"").trim(),transaction_type:String(e.transaction_type||e.transactionType||e.type||"").trim(),event_timestamp:(i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:"",deposit_amount:(a=(o=(s=e.deposit_amount)!=null?s:e.depositAmount)!=null?o:e.amount)!=null?a:"",ticket_quantity:(m=(g=(d=e.ticket_quantity)!=null?d:e.ticketQuantity)!=null?g:e.ticketAmount)!=null?m:"",purchased_tickets:(M=(S=(y=(b=e.purchasedTickets)!=null?b:e.ticket_quantity)!=null?y:e.ticketQuantity)!=null?S:e.ticketAmount)!=null?M:0,bonus_tickets:(H=e.bonusTickets)!=null?H:0,bonus_percent:(D=e.bonusPercent)!=null?D:0,bonus_enabled:e.bonusEnabled===!0,total_tickets:(Zt=(Xt=(Qe=(Re=e.totalTickets)!=null?Re:e.ticket_quantity)!=null?Qe:e.ticketQuantity)!=null?Xt:e.ticketAmount)!=null?Zt:0,note:String(e.note||"").trim()}}).sort((e,n)=>{const r=Number(e.event_timestamp)||0,i=Number(n.event_timestamp)||0;return r!==i?r-i:String(e.event_id).localeCompare(String(n.event_id),void 0,{numeric:!0})}):[]}function sf(t){const e=Number(t);if(!e)return"";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t);const r=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0"),s=String(n.getFullYear()),o=String(n.getHours()).padStart(2,"0"),a=String(n.getMinutes()).padStart(2,"0"),d=String(n.getSeconds()).padStart(2,"0");return`${r}/${i}/${s} ${o}:${a}:${d}`}function af(t){const e=String(t||"").trim().toLowerCase();return e==="monthly"?"50/50":e==="biweekly"?"Bi-Weekly":e==="other"?"Other":e?e.replace(/\b\w/g,n=>n.toUpperCase()):""}function cf(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":Et(e)}function Mr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":oe(e)}function ya(){if(R!=="more")return;Qu(),tf(),document.querySelectorAll("[data-bank-entry-move]").forEach(a=>{a.addEventListener("click",()=>Ku(a.dataset.bankEntryMove||""))}),document.querySelectorAll("[data-bank-section]").forEach(a=>{a.addEventListener("click",()=>{T=a.dataset.bankSection||"biweekly",l()})}),document.querySelectorAll("[data-bank-export-section]").forEach(a=>{a.addEventListener("click",()=>{ae=(a.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",lt=!0,l()})}),document.querySelectorAll("[data-bank-period-move]").forEach(a=>{a.addEventListener("click",()=>{uf(a.dataset.bankPeriodMove||""),l()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{lt=!1,l()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>lf());const n=document.querySelector(".bank-export-overlay");n&&n.addEventListener("click",a=>{a.target===n&&(lt=!1,l())});const r=document.querySelector("#openBankingHistoryButton");r&&r.addEventListener("click",()=>Zu());const i=document.querySelector("#openManualBiweeklyTicketButton");i&&i.addEventListener("click",async()=>{if(!L()){h("manual-ticket-login-required","Login required to add manual entries.",{ttlMs:p});return}$e=!0,K="",Kt=E.accountName||"",re=!1,F=-1,j.length===0&&(u==null?void 0:u.connected)&&L()&&await $n({silent:!0}),l()});const s=document.querySelector("#checkoutDepositMailButton");s&&s.addEventListener("click",()=>{s.dataset.depositMailAction==="checkout"&&s.getAttribute("aria-disabled")!=="true"&&Ef()});const o=document.querySelector("#refreshBankingDataButton");o&&o.addEventListener("click",()=>{if(!L()){h("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:p});return}Aa({key:"banking"})})}function ka(t){const e=Jt(ae),n=[["Guildie Name","Deposit Amount","Purchased Tickets",...e?["Bonus %","Bonus Tickets"]:[],"Total Tickets","Note"]];for(const r of t)n.push([r.displayName||"",String($i(r,ae)),String(r.purchasedTickets),...e?[`${r.bonusPercent}%`,String(r.bonusTickets)]:[],String(r.totalTickets),r.note||""]);return n.map(r=>r.map(hr).join("	")).join(`
`)}function hr(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function pr(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly","readonly"),n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.width="1px",n.style.height="1px",n.style.opacity="0",n.style.pointerEvents="none",n.style.zIndex="-1",document.body.appendChild(n),n.focus(),n.select(),n.setSelectionRange(0,n.value.length);let r=!1;try{r=document.execCommand("copy")}finally{document.body.removeChild(n)}return r}async function lf(){const t=ei(ae),e=ka(t);if(await pr(e)){h("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#bankingExportTsv");r&&(r.focus(),r.select()),h("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:p})}function ei(t){return Y.filter(e=>e.type===t).filter(e=>df(t,e)).sort((e,n)=>(Number(e.time)||0)-(Number(n.time)||0))}function df(t,e){if(t==="other")return!0;const n=Number(e==null?void 0:e.time)||0;if(n<=0)return!1;const r=Ai(t);return n>=r.salesStart&&n<=r.salesEnd}function er(t){return Number(Vr[t])||0}function uf(t){if(T!=="biweekly"&&T!=="monthly")return;const e=er(T);if(t==="previous"){Vr[T]=e-1;return}t==="next"&&e<0&&(Vr[T]=e+1)}function Ai(t){const e=Math.floor(Date.now()/1e3);if(t==="monthly"){const i=ff(e,er(t));return{salesStart:Sa(i)+1,salesEnd:i,raffleTime:i+Kn}}const n=Ke;let r=va(e);return r+=er(t)*n,{salesStart:r-n+1,salesEnd:r,raffleTime:r+Kn}}function va(t){const e=Ke;let n=Al;for(;n-e>t;)n-=e;for(;n<t;)n+=e;return n}function ff(t,e=0){let n=hf(t),r=Number(e)||0;for(;r<0;)n=Sa(n),r+=1;for(;r>0;)n=pf(n),r-=1;return n}function hf(t){let e=va(t);for(;!Li(e);)e+=Ke;return e}function Sa(t){let e=t-Ke;for(;!Li(e);)e-=Ke;return e}function pf(t){let e=t+Ke;for(;!Li(e);)e+=Ke;return e}function Li(t){const e=t+Kn,n=t+Ke+Kn;return qo(e)!==qo(n)}function qo(t){var s,o;const e=new Date(Number(t||0)*1e3);if(Number.isNaN(e.getTime()))return"";const n=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit"}).formatToParts(e),r=((s=n.find(a=>a.type==="year"))==null?void 0:s.value)||"",i=((o=n.find(a=>a.type==="month"))==null?void 0:o.value)||"";return`${r}-${i}`}function mf(t=T){const e=String(t||"").toLowerCase();return e!=="monthly"&&e!=="biweekly"?0:"auto"}function $i(t={},e=T){const n=Number(t.amount)||0;if(!mf(e))return n;const r=Math.abs(Math.trunc(n))%10,i=r===1||r===3?r:0;return i>0&&n>i?n-i:n}function gf(t,e=T){return t.reduce((n,r)=>(n.amount+=$i(r,e),n.purchased+=Number(r.purchasedTickets)||0,n.bonus+=Number(r.bonusTickets)||0,n.tickets+=Number(r.totalTickets)||0,n),{amount:0,purchased:0,bonus:0,tickets:0})}function wa(t){const e=Math.ceil((Number(t)||0)/2);return e<=0?0:Math.ceil(e/2e5)*2e5}function bf(t){const e=wa(t);return e>0?e/2e5:0}function Jt(t){var n;if(t!=="biweekly"&&t!=="monthly")return!1;const{salesEnd:e}=Ai(t);return((n=Ct.find(r=>r.type===t&&r.salesEnd===e))==null?void 0:n.enabled)===!0}function yf(t,e=!0,n=Jt(T)){return`
    <tr>
      <td>${c(t.note||t.eventId||"")}</td>
      <td>${c(Gn(t.time))}</td>
      <td>${c(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${c(Et(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td>${c(oe(t.purchasedTickets))}</td>${n?`<td>${c(oe(t.bonusPercent))}%</td><td>${c(oe(t.bonusTickets))}</td>`:""}<td><strong class="bank-ticket-amount">${c(oe(t.totalTickets))}</strong></td>`:""}
      <td><button class="bank-entry-move-button" type="button" data-bank-entry-move="${f(t.eventId||"")}">Move</button></td>
    </tr>
  `}function kf(t=!0,e=!1){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?e?"9":"7":"5"}">No ${c(ge(T))} deposits found for this ${T==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function ge(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function Gn(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Et(t){return(Number(t)||0).toLocaleString()}function oe(t){return(Number(t)||0).toLocaleString()}function Qt(t){return Array.isArray(t)?t.map(e=>{var r,i,s,o,a,d,g,m,b,y,S,M,H,D,Re,Qe,Xt,Zt,qi,Ii,xi,Pi,Fi,Gi,Ui,Hi,Vi,Wi,ji,zi,Yi,Ki,Ji,Qi,Xi,Zi,eo,to,no,ro,io,oo,so,ao,co,lo,uo;const n=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:n==="monthly"||n==="biweekly"||n==="other"?n:"other",eventId:String((i=(r=e==null?void 0:e.eventId)!=null?r:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((o=(s=e==null?void 0:e.time)!=null?s:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((d=(a=e==null?void 0:e.displayName)!=null?a:e==null?void 0:e.display_name)!=null?d:"").trim(),amount:Number((g=e==null?void 0:e.amount)!=null?g:0)||0,ticketAmount:Number((b=(m=e==null?void 0:e.ticketAmount)!=null?m:e==null?void 0:e.ticket_amount)!=null?b:0)||0,purchasedTickets:Number((S=(y=e==null?void 0:e.purchasedTickets)!=null?y:e==null?void 0:e.ticketAmount)!=null?S:0)||0,bonusTickets:Number((M=e==null?void 0:e.bonusTickets)!=null?M:0)||0,bonusPercent:Number((H=e==null?void 0:e.bonusPercent)!=null?H:0)||0,bonusEnabled:(e==null?void 0:e.bonusEnabled)===!0,totalTickets:Number((Re=(D=e==null?void 0:e.totalTickets)!=null?D:e==null?void 0:e.ticketAmount)!=null?Re:0)||0,note:String((Qe=e==null?void 0:e.note)!=null?Qe:"").trim(),dataSource:String((Zt=(Xt=e==null?void 0:e.dataSource)!=null?Xt:e==null?void 0:e.data_source)!=null?Zt:"").trim(),emailRequested:Boolean((qi=e==null?void 0:e.emailRequested)!=null?qi:e==null?void 0:e.email_requested),mailStatus:String((xi=(Ii=e==null?void 0:e.mailStatus)!=null?Ii:e==null?void 0:e.mail_status)!=null?xi:"").trim(),mailRequestId:String((Fi=(Pi=e==null?void 0:e.mailRequestId)!=null?Pi:e==null?void 0:e.mail_request_id)!=null?Fi:"").trim(),mailBatchId:String((Ui=(Gi=e==null?void 0:e.mailBatchId)!=null?Gi:e==null?void 0:e.mail_batch_id)!=null?Ui:"").trim(),checkedOutBy:String((Vi=(Hi=e==null?void 0:e.checkedOutBy)!=null?Hi:e==null?void 0:e.checked_out_by)!=null?Vi:"").trim(),checkedOutAt:String((ji=(Wi=e==null?void 0:e.checkedOutAt)!=null?Wi:e==null?void 0:e.checked_out_at)!=null?ji:"").trim(),checkoutExpiresAt:String((Yi=(zi=e==null?void 0:e.checkoutExpiresAt)!=null?zi:e==null?void 0:e.checkout_expires_at)!=null?Yi:"").trim(),writtenToEsoAt:String((Ji=(Ki=e==null?void 0:e.writtenToEsoAt)!=null?Ki:e==null?void 0:e.written_to_eso_at)!=null?Ji:"").trim(),sentAt:String((Xi=(Qi=e==null?void 0:e.sentAt)!=null?Qi:e==null?void 0:e.sent_at)!=null?Xi:"").trim(),failedReason:String((eo=(Zi=e==null?void 0:e.failedReason)!=null?Zi:e==null?void 0:e.failed_reason)!=null?eo:"").trim(),recipient:String((io=(ro=(no=(to=e==null?void 0:e.recipient)!=null?to:e==null?void 0:e.account_name)!=null?no:e==null?void 0:e.displayName)!=null?ro:e==null?void 0:e.display_name)!=null?io:"").trim(),subject:String((ao=(so=(oo=e==null?void 0:e.subject)!=null?oo:e==null?void 0:e.mailSubject)!=null?so:e==null?void 0:e.mail_subject)!=null?ao:"").trim(),body:String((uo=(lo=(co=e==null?void 0:e.body)!=null?co:e==null?void 0:e.mailBody)!=null?lo:e==null?void 0:e.mail_body)!=null?uo:"").trim()}}):[]}function vf(t){const e=new Map;for(const n of Y)n.eventId&&e.set(n.eventId,n);for(const n of t)!n.eventId||e.set(n.eventId,n);Y=Array.from(e.values()).sort((n,r)=>(Number(r.time)||0)-(Number(n.time)||0))}function _a(){ms=new Date().toISOString()}async function Sf(t={}){!(t!=null&&t.ok)||(Y=Qt(t.entries),t.bonusSettings&&(P=t.bonusSettings),Array.isArray(t.bonusRaffles)&&(Ct=t.bonusRaffles),_a(),R==="more"&&l(),h("banking-data-updated",`Banking data updated. Loaded ${Y.length} deposit record${Y.length===1?"":"s"}.`,{ttlMs:p}))}async function ke(t={}){const e=Boolean(t.silent),n=Boolean(t.background);if(!(u!=null&&u.connected)){e||h("banking-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}n||(Ye=!0,l());try{const r=await _("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");Y=Qt(r.entries),r.bonusSettings&&(P=r.bonusSettings),Array.isArray(r.bonusRaffles)&&(Ct=r.bonusRaffles),_a(),e||h("banking-data",`Loaded ${Y.length} banking deposit record${Y.length===1?"":"s"}.`,{ttlMs:p})}catch(r){e||h("banking-data-error",v(r),{ttlMs:p})}finally{n||(Ye=!1),l()}}async function Io(){!(u!=null&&u.connected)||!L()||Ye||(await ke({silent:!0,background:!0}),fr()<=0&&En()>0&&(W.running?l():Ea("availability-refresh")))}function wf(){bt&&clearInterval(bt),Io(),bt=window.setInterval(Io,kl)}function _f(){bt&&(clearInterval(bt),bt=null)}async function Af(t={}){if(!!L()){if(!(u!=null&&u.connected)){h("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:p});return}try{const e=await Kc(t);if(!(e!=null&&e.ok))return;const n=Array.isArray(e.ackEntries)?e.ackEntries:[];if(n.length===0)return;const r=await _("guildsync:mark-deposit-mail-sent",{mail_ack:n,mail_request_ids:n.map(o=>(o==null?void 0:o.mail_request_id)||(o==null?void 0:o.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(r.mail_request_ids)?r.mail_request_ids:Array.isArray(r.mailRequestIds)?r.mailRequestIds:[];if(i.length===0){h("deposit-mail-ack-none",r.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:p});return}const s=await zc(i);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");h("deposit-mail-ack-sent",s.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:p}),await ke({silent:!0})}catch(e){h("deposit-mail-ack-error",v(e),{ttlMs:p})}}}async function Lf(){if(!$r){$r=!0;try{const t=await nl();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&h("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:p})}catch(t){h("deposit-mail-ack-cleanup-error",v(t),{ttlMs:p})}finally{$r=!1}}}async function Aa(t={}){var e,n;if(!!L()){if(!(u!=null&&u.connected)){h("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}Ye=!0,l();try{const r=await Qc(t);if(!(r!=null&&r.ok)){h("banking-data-pending",(r==null?void 0:r.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:p});return}const i=Qt((e=r==null?void 0:r.data)==null?void 0:e.entries);vf(i);const s=new Date().toISOString(),o={local_upload_id:Ra(),authenticated_username:le(),authenticated_discord_user_id:((n=k==null?void 0:k.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:s,data:r.data||{}};try{await Ma(o)}catch(a){throw Mf(o),a}await ke({silent:!0})}catch(r){h("banking-data-error",v(r),{ttlMs:p})}finally{Ye=!1,l()}}}function La(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Rn(){try{const t=window.localStorage.getItem(as),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function $a(t){window.localStorage.setItem(as,JSON.stringify(Array.isArray(t)?t:[]))}function $f(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||La()),n=Rn().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);n.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),$a(n)}function xo(t){const e=String(t||"").trim();if(!e)return;const n=Rn().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);$a(n)}async function Ef(){if(!L()){h("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:p});return}if(!(u!=null&&u.connected)){h("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:p});return}const t=Rn(),e=fr();if(t.length>0&&e<=0){await xt();return}Pr=!0,l();try{const n=await _("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail checkout request.");const r=Qt(n.records);if(r.length===0){h("deposit-mail-none",n.message||"No unsent deposit mail is available.",{ttlMs:p}),await ke({silent:!0});return}const i={mail_batch_id:n.mail_batch_id||n.mailBatchId||La(),checked_out_by:n.checked_out_by||n.checkedOutBy||le(),checked_out_at:new Date().toISOString(),records:r};$f(i),await xt()}catch(n){h("deposit-mail-error",v(n),{ttlMs:p})}finally{Pr=!1,l()}}function Ea(t=""){kt||yt||!L()||En()<=0||W.running||(kt=window.setTimeout(()=>{kt=null,xt()},100))}async function xt(){if(kt&&(window.clearTimeout(kt),kt=null),yt||!L())return;const t=Rn();if(t.length!==0){if(await ti({silent:!0}),W.running){h("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:p}),l();return}yt=!0,l();try{for(const e of t){const n=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),r=Qt(e==null?void 0:e.records);if(r.length===0){xo(n);continue}const i=await pl(r);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(u!=null&&u.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const s=await _("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:n,event_ids:i.eventIds||r.map(o=>o.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend did not confirm deposit mail was marked written_to_eso.");xo(n),h("deposit-mail-written",i.message||`Wrote ${r.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:p})}await ke({silent:!0})}catch(e){h("deposit-mail-write-error",v(e),{ttlMs:p})}finally{yt=!1,l()}}}async function ti(t={}){try{const e=Boolean(W.running),n=await rl();W={running:Boolean(n==null?void 0:n.running),message:String((n==null?void 0:n.message)||"")},W.running||await Lf(),e&&!W.running&&(h("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:p}),await xt()),e!==W.running&&l()}catch(e){t.silent||h("eso-status-error",v(e),{ttlMs:p})}}function Rf(){gt&&clearInterval(gt),ti({silent:!0}).then(()=>{!W.running&&En()>0&&xt()}),gt=window.setInterval(()=>ti({silent:!0}),yl)}function Df(){gt&&(clearInterval(gt),gt=null)}function Ra(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Ei(){try{const t=window.localStorage.getItem(ss),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Da(t){window.localStorage.setItem(ss,JSON.stringify(Array.isArray(t)?t:[]))}function Mf(t){const e=String((t==null?void 0:t.local_upload_id)||Ra()),n=Ei().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Da(n),h("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Tf(t){const e=Ei().filter(n=>(n==null?void 0:n.local_upload_id)!==t);Da(e)}async function Nf(){if(_r||!(u!=null&&u.connected)||!L())return;const t=Ei();if(t.length!==0){_r=!0;try{for(const e of t){if(!(u!=null&&u.connected)||!L())return;await Ma(e),Tf(e.local_upload_id)}}catch(e){h("banking-data-pending-error",`Pending banking upload retry failed: ${v(e)}`,{ttlMs:p})}finally{_r=!1}}}async function Ma(t){if(!(u!=null&&u.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await _("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const n=await el(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return h("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:p}),e}function Ta(){if(R!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>Bf());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{Tt=!0,Le="",l(),N("discordHistorySearchInput")});const n=document.querySelector("#discordMemberSearch");n&&n.addEventListener("input",o=>{Wn=o.target.value||"",Fr=o.target.selectionStart,Gr=o.target.selectionEnd,l({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{xf(o.dataset.discordSortColumn||"username")})});const r=document.querySelector("#discordRoleFilter");r&&r.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(vt.add(a),l())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRoleFilter||"";vt.delete(a),l()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(St.add(a),l())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeDiscordLinkStatusFilter||"";St.delete(a),l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>Ws(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{Wn="",vt.clear(),St.clear(),l()})}async function Bf(){var t,e;if(!(u!=null&&u.connected)){h("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:p});return}Vn=!0,l(),h("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const n=await _("guildsync:request-discord-data-refresh",{requested_by:((t=k==null?void 0:k.user)==null?void 0:t.display_name)||((e=k==null?void 0:k.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to request Discord data refresh.");h("discord-refresh-requested",n.message||"Discord data refresh completed.",{ttlMs:p}),await Ri({silent:!0})}catch(n){h("discord-refresh-error",v(n),{ttlMs:p})}finally{Vn=!1,l()}}async function Cf(){if(!(u!=null&&u.connected))return;const t=await _("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(sr=t.value||null)}async function Of(t={}){if(!!(t!=null&&t.ok)){z=Di(t.members),or=Mi(t.roles),t.last_refresh&&(sr=t.last_refresh);try{await Cf()}catch{}R==="discord-members"&&l(),h("discord-data-updated",`Discord data updated. Loaded ${z.length} member record${z.length===1?"":"s"}.`,{ttlMs:p})}}async function Ri(t={}){const e=Boolean(t.silent);if(!(u!=null&&u.connected)){h("discord-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}fn=!0,l();try{const[n,r]=await Promise.all([_("guildsync:request-discord-data-date",{}),_("guildsync:request-discord-member-dataJSON",{})]);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord refresh date.");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord member data.");sr=n.value||null,z=Di(r.members),or=Mi(r.roles),e||h("discord-data",`Loaded ${z.length} Discord member record${z.length===1?"":"s"}.`,{ttlMs:p})}catch(n){h("discord-data-error",v(n),{ttlMs:p})}finally{fn=!1,l()}}function _(t,e={},n=3e4){return new Promise((r,i)=>{if(!(u!=null&&u.connected)){i(new Error("GuildSync websocket is not connected."));return}let s=!1;const o=window.setTimeout(()=>{s||(s=!0,i(new Error(`${t} timed out.`)))},n);u.emit(t,e,a=>{s||(s=!0,window.clearTimeout(o),r(a))})})}function Di(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(Na).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,n)=>yn(e).localeCompare(yn(n),void 0,{sensitivity:"base"})):[]}function Mi(t){if(!Array.isArray(t))return[];const e=new Map;for(const n of t){const r=Na(n);if(!r)continue;const i=r.role_id||dn(r.role_name);i&&!e.has(i)&&e.set(i,r)}return Array.from(e.values()).sort((n,r)=>String(n.role_name||"").localeCompare(String(r.role_name||""),void 0,{sensitivity:"base"}))}function Na(t){var i,s;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),n=String(t.role_name||t.name||"Unnamed Role").trim(),r=(s=(i=t.role_color)!=null?i:t.color)!=null?s:null;return{role_id:e,role_name:n||"Unnamed Role",role_color:r}}function qf(){const t=Wn.trim().toLowerCase(),e=Array.from(vt),n=z.filter(r=>{if(t&&![r.username,r.global_name,r.server_nickname,r.discord_id,...r.roles.map(s=>s.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(r.roles.map(s=>s.role_name));if(!e.every(s=>i.has(s)))return!1}return!!As(St,Zl(r))});return If(n)}function If(t){const e=nt==="desc"?-1:1;return[...t].sort((n,r)=>{const i=Po(n,hn),s=Po(r,hn),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:yn(n).localeCompare(yn(r),void 0,{sensitivity:"base",numeric:!0})})}function Po(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(n=>n.role_name||"").filter(Boolean).sort((n,r)=>n.localeCompare(r,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function xf(t){const n=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";hn===n?nt=nt==="asc"?"desc":"asc":(hn=n,nt="asc"),l()}function Nn(t,e){const n=hn===t,r=nt==="asc"?"ascending":"descending",i=n?nt==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${n?r:"none"}">
      <button
        class="discord-sort-header${n?" active":""}"
        type="button"
        data-discord-sort-column="${f(t)}"
        title="Sort ${f(e)} ${n&&nt==="asc"?"descending":"ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function Pf(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(Fr)?Fr:t.value.length,n=Number.isInteger(Gr)?Gr:e;t.setSelectionRange(e,n)}}function Ff(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(Ur)?Ur:t.value.length,n=Number.isInteger(Hr)?Hr:e;t.setSelectionRange(e,n)}}function Gf(){const t=new Set;for(const e of z)for(const n of e.roles)n.role_name&&t.add(n.role_name);return Array.from(t).sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function Uf(t){const e=Yf(t),n=yn(t),r=t.roles||[];return`
    <tr data-discord-user-id="${f(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${f(e)}" alt="${f(n)}" />`:`<span>${c(Ua(n))}</span>`}
          </div>
          <span>${c(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${c(t.global_name||"")}</td>
      <td>${c(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${r.length>0?r.map(i=>Vf(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${Hs({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function Hf(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${c(fn?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function Vf(t){const e=mr(t.role_color),n=Bi(e),r=Ni(e,n);return`
    <span
      class="discord-role-badge"
      title="${f(t.role_name)}"
      style="${r}"
    >${c(t.role_name)}</span>
  `}function Wf(t){const e=Ti(t),n=mr(e==null?void 0:e.role_color),r=Bi(n),i=Ni(n,r);return`
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
  `}function jf(t){const e=zf(t);for(const n of e){const r=Ti(n);if(r)return r}return null}function zf(t){const e=String(t||"").trim();if(!e)return[];const n=dn(e),i={associate:["Associates","Associate"],associates:["Associates","Associate"],soldier:["Soldiers","Soldier"],soldiers:["Soldiers","Soldier"],capo:["Capo"],capos:["Capo","Capos"],caporegime:["CapoRegime","Capo Regime","Capo Regimes"],consiglieres:["Consigliere","Consiglieres"],consigliere:["Consigliere","Consiglieres"]}[n]||[e];return Array.from(new Set([e,...i].filter(Boolean)))}function dn(t){return String(t||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function Ti(t){const e=dn(t);if(!e)return null;const n=or.find(r=>dn(r.role_name)===e);if(n)return n;for(const r of z){const i=r.roles.find(s=>dn(s.role_name)===e);if(i)return i}return null}function mr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function Ni(t,e){return[`--role-fill-top: ${Fo(t,"#ffffff",.16)}`,`--role-fill-bottom: ${Fo(t,"#000000",.1)}`,`--role-fill-glow: ${Go(t,.28)}`,`--role-fill-edge: ${Go(t,.46)}`,`color: ${e}`].join("; ")}function Fo(t,e,n){const r=Bn(t)||Bn("#64748b"),i=Bn(e)||Bn("#ffffff"),s=Math.max(0,Math.min(1,Number(n)||0)),o=Math.round(r.red+(i.red-r.red)*s),a=Math.round(r.green+(i.green-r.green)*s),d=Math.round(r.blue+(i.blue-r.blue)*s);return`#${Tr(o)}${Tr(a)}${Tr(d)}`}function Bn(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function Tr(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function Go(t,e){const n=String(t||"#64748b").replace("#",""),r=/^[0-9a-f]{6}$/i.test(n)?n:"64748b",i=parseInt(r.slice(0,2),16),s=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`rgba(${i}, ${s}, ${o}, ${e})`}function Bi(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const n=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(n*299+r*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function Yf(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!n)return"";const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function yn(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function Ba(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Un(){const t=document.querySelector("#discordArea");if(!!t){if(Dn(!1),L()){const e=k.user||{},n=le(),r=fh(e),i=Ua(n);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${r?`<img src="${f(r)}" alt="${f(n)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${c(i)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const s=document.querySelector("#discordAvatarButton");s.addEventListener("contextmenu",o=>{o.preventDefault(),Uo()}),s.addEventListener("click",()=>{Uo()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",Zf)}}function Uo(){if(Sn){Dn();return}Xf()}function Kf(t=Ie){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],n=String((t==null?void 0:t.directory)||"").trim(),r=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const s=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),o=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),a=String((i==null?void 0:i.filePath)||(n?`${n}\\${o}`:o)).trim(),d=(i==null?void 0:i.enabled)!==!1,g=r&&d,m=`profileFileWatchToggle-${Qf(s||o)}`;return`
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
  `}function Ci(){var r,i,s;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=le(),n=((r=k.user)==null?void 0:r.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${c(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${c(hh(n))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${c(ir)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${Ie!=null&&Ie.watching?"Active":"Stopped"}</span>
        </div>
        ${Kf()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(i=document.querySelector("#discordLogoutButton"))==null||i.addEventListener("click",eh),(s=document.querySelector("#associateTicketReportButton"))==null||s.addEventListener("click",()=>{Dn(!1),$s()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",Jf)})}async function Ca(){try{Ie=await il(),Sn&&Ci()}catch(t){h("file-watcher-error",v(t),{ttlMs:p})}}async function Jf(t){var r;const e=t.currentTarget,n=String(((r=e==null?void 0:e.dataset)==null?void 0:r.filewatchKey)||"").trim();if(!!n)try{e.disabled=!0,Ie=await ll(n,e.checked),await Rt({silent:!0}),Sn&&Ci()}catch(i){h("file-watcher-error",v(i),{ttlMs:p}),await Ca()}}function Qf(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function Xf(){const t=document.querySelector("#discordProfileMenu");!t||(Ci(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),Sn=!0,Ca(),setTimeout(()=>{window.addEventListener("click",Oa),window.addEventListener("keydown",qa)},0))}function Dn(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),Sn=!1,t&&(window.removeEventListener("click",Oa),window.removeEventListener("keydown",qa))}function Oa(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&Dn()}function qa(t){t.key==="Escape"&&Dn()}async function Zf(){try{h("auth","Opening Discord login...",{ttlMs:p});const t=await ul();t!=null&&t.status_message&&h("auth",t.status_message,{ttlMs:p}),Ve()}catch(t){h("auth-error",v(t),{ttlMs:p}),Ve()}}async function eh(){try{k=await sl(),h("auth",k.status_message||"Logged out.",{ttlMs:p}),gs(),un(),await Rt()}catch(t){h("auth-error",v(t),{ttlMs:p}),Ve()}}function un(){const t=k.socket_url||"https://guildsync.perdues.me";th(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};k!=null&&k.token&&(e.auth={token:k.token}),u=xn(t,e),u.on("connect",()=>{Ve(),Ia(),R==="discord-members"&&Ri({silent:!0}),R==="eso-members"&&$n({silent:!0}),(R==="more"||R==="settings"&&!P)&&ke({silent:!0}),Nf(),xt(),Rf(),wf(),Du(),Bu(),nh()}),u.on("connect_error",()=>{Ve(),tr()}),u.on("disconnect",()=>{Ve(),tr(),Df(),_f()}),u.on("guildsync:version-status",n=>{rh(n)}),u.on("guildsync:discord-member-data-updated",n=>{Of(n)}),u.on("guildsync:banking-data-updated",n=>{Sf(n)}),u.on("guildsync:roster-data-updated",n=>{Lu(n)}),u.on("guildsync:member-links-updated",Ud),u.on("guildsync:discord-refresh-status",(n={})=>{const r=String(n.message||"").trim();r&&h("discord-refresh-status",r,{ttlMs:p})})}function th(t=!0){tr(),u&&(u.disconnect(),u=null),t&&Ve()}function Ia(){!(u!=null&&u.connected)||u.emit("guildsync:client-version",{version:ir,platform:xa(),client_type:"wails"})}function nh(){tr(),Pn=window.setInterval(()=>{Ia()},bl)}function tr(){Pn&&(window.clearInterval(Pn),Pn=null)}function rh(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",n=t.download&&typeof t.download=="object"?t.download:{};De={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||n.url||"").trim(),fileName:String(t.download_file_name||n.file_name||"").trim(),platformLabel:String(n.label||t.platform||xa()).trim()},h("version",`GuildSync is out of date. Current version: ${ir}. Latest version: ${e}.`),ni();return}De={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},ni(),Oi("version")}}function xa(){const t=String(navigator.userAgent||"").toLowerCase(),n=`${String(navigator.platform||"").toLowerCase()} ${t}`;return n.includes("mac")?"macos":n.includes("linux")?"linux":"windows"}function ni(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!De.updateRequired||!De.downloadUrl){t.innerHTML="";return}const e=De.platformLabel||"Desktop",n=De.latestVersion||"latest",r=De.fileName||"GuildSync client download";t.innerHTML=`
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
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{ih()})}function ih(){const t=String(De.downloadUrl||"").trim();if(!t){h("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:p});return}gl(t)}function h(t,e,n={}){const r=String(t||"").trim(),i=String(e||"").trim();if(!(!r||!i)){if(We.set(r,i),Ze.has(r)&&(window.clearTimeout(Ze.get(r)),Ze.delete(r)),n.ttlMs&&Number(n.ttlMs)>0){const s=window.setTimeout(()=>{Oi(r)},Number(n.ttlMs));Ze.set(r,s)}Pt()}}function Oi(t){const e=String(t||"").trim();if(!!e){if(We.delete(e),Ze.has(e)&&(window.clearTimeout(Ze.get(e)),Ze.delete(e)),x===e){yr(()=>{x="",Pt()});return}Pt()}}function Pt(){const t=gr();if(t.length===0){dt?yr(kn):kn();return}!dt&&!ut&&br(t[0])}function gr(){return Array.from(We.keys())}function Pa(){const t=gr();if(t.length===0)return"";if(!x)return t[0];const e=t.indexOf(x);return e<0?t[0]:t[(e+1)%t.length]}function br(t){const e=document.querySelector("#statusMessageTrack");if(!e||!We.has(t)){kn();return}kr();const n=We.get(t);x=t,dt=!0,ut=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=n,e.style.setProperty("--message-fade-duration",`${us}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",ut=!1,oh()},{once:!0})})}function oh(){const t=gr();if(!x||!We.has(x)){Pt();return}if(t.length<=1){Ho(!1);return}Ho(!0)}function Ho(t){const e=document.querySelector("#statusMessageViewport"),n=document.querySelector("#statusMessageTrack");if(!e||!n)return;const r=Math.max(0,n.scrollWidth-e.clientWidth);if(r<=0){t&&vn(()=>{yr(()=>{const i=Pa();x="",i?br(i):kn()})},ds);return}vn(()=>{Fa(r,t)},fs)}function Fa(t,e){const n=document.querySelector("#statusMessageTrack");if(!n||!x||!We.has(x))return;const r=Math.max(4,Math.ceil(t/Sl));n.style.setProperty("--long-scroll-distance",`${t}px`),n.style.setProperty("--long-scroll-duration",`${r}s`),n.classList.add("long-scroll"),n.addEventListener("animationend",()=>{if(n.classList.remove("long-scroll"),n.style.transform=`translateX(-${t}px) translateY(-50%)`,e){vn(()=>{yr(()=>{const i=Pa();x="",i?br(i):kn()})},ds);return}vn(()=>{sh()},vl)},{once:!0})}function sh(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!x||!We.has(x))return;if(gr().length!==1){Pt();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const r=Math.max(0,e.scrollWidth-t.clientWidth);r<=0||vn(()=>{Fa(r,!1)},fs)}function yr(t){const e=document.querySelector("#statusMessageTrack");if(kr(),!e||!dt){typeof t=="function"&&t();return}ut=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${us}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",dt=!1,ut=!1,typeof t=="function"&&t()},{once:!0})}function kn(){const t=document.querySelector("#statusMessageTrack");kr(),x="",dt=!1,ut=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function vn(t,e){const n=window.setTimeout(()=>{cn=cn.filter(r=>r!==n),t()},e);cn.push(n)}function kr(){for(const t of cn)window.clearTimeout(t);cn=[]}function Ga(){if(!dt||ut||!x)return;const t=x;kr(),br(t)}function Ve(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(u!=null&&u.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!L()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${le()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${le()}`)}}async function Rt(t={}){try{if(L()){const e=await fl();Ie=e,!t.silent&&(e==null?void 0:e.message)&&h(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:p});return}Ie=await hl(),Oi("file-watcher")}catch(e){h("file-watcher-error",v(e),{ttlMs:p})}}function sn(t,e=null){const n="[GuildSync File Watcher]";if(e){console.log(`${n} ${t}`,e);return}console.log(`${n} ${t}`)}function ah(t={}){if(!L()){sn("SavedVariables change ignored because the user is not authenticated.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",n=e.toLowerCase(),r=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=String(t.filePath||"").trim(),o=r?`${r} saved variables (${i})`:i;sn(`SavedVariables change detected: ${i}${s?` (${s})`:""}. Key: ${n}.`,t),h(`saved-vars-file-updated-${e}`,`${o} has been updated.`,{ttlMs:p}),n==="banking"&&(sn(`Processing banking SavedVariables update from ${i}.`),ch(t)),n==="roster"&&(sn(`Processing roster SavedVariables update from ${i}.`),lh(t)),n==="applications"&&(sn(`Processing applications SavedVariables update from ${i}.`),qu(t))}async function ch(t={}){await Af(t),await Aa(t)}async function lh(t={}){await $u(t)}function dh(t){!L()||h("file-watcher-error",v(t),{ttlMs:p})}function uh(){tn("guildsync-savedvars-file-modified",ah),tn("guildsync-file-watcher-error",dh),tn("guildsync-login-complete",async t=>{k=t||{logged_in:!1,allowed:!1},Un(),un(),await Rt(),h("auth",k.status_message||`Logged in and authorized as ${le()}.`,{ttlMs:p})}),tn("guildsync-login-denied",async t=>{k={logged_in:!1,allowed:!1,status_message:""},Un(),await Rt(),h("auth",t||"Access denied.",{ttlMs:p}),un()}),tn("guildsync-login-failed",async t=>{k={logged_in:!1,allowed:!1,status_message:""},Un(),await Rt(),h("auth",t||"Login failed.",{ttlMs:p}),un()})}function L(){return Boolean((k==null?void 0:k.logged_in)&&(k==null?void 0:k.allowed)&&(k==null?void 0:k.token))}function le(){var t,e;return((t=k.user)==null?void 0:t.display_name)||((e=k.user)==null?void 0:e.username)||"Discord User"}function fh(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),n=String(t.discord_user_id||"").trim();if(!e||!n)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=128`}function Ua(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function hh(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function ph(){nn&&(nn.disconnect(),nn=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),n=Math.round(t.getBoundingClientRect().height);nn=new ResizeObserver(r=>{const i=r[0];if(!i)return;const s=Math.round(i.contentRect.width),o=Math.round(i.contentRect.height);s===e&&o===n||(e=s,n=o,Ha(),Ga())}),nn.observe(t)}function Ha(){clearTimeout(yo),yo=setTimeout(async()=>{try{await os()}catch{}},500)}function v(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function c(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function f(t){return c(t)}uh();Ll();
