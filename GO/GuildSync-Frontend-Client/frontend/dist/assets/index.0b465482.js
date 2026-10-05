(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const C=t=>String(t!=null?t:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function xa(){return{open:"",toggle(t){this.open=this.open===t?"":t},close(){this.open=""}}}function ao(t,e){return Object.hasOwn(e,t.key)?e[t.key]===null?{value:t.defaultValue,override:!1,source:".env (pending Save)"}:{value:e[t.key],override:!0,source:"GuildSync override (pending Save)"}:{value:t.value,override:t.source==="GuildSync override",source:t.source}}function co(t,{body:e=!1}={}){const n={recipient:"@ExampleMember",account_name:"@ExampleMember",display_name:"@ExampleMember",amount:"10,001",deposit_amount:"10,001",raw_amount:"10001",raw_deposit_amount:"10001",event_id:"123456789",ticket_quantity:"20",tickets:"20",purchased_tickets:"20",bonus_percent:"20",bonus_tickets:"4",total_tickets:"24",bonus_deadline:"October 9, 2026 at 7:00 PM Eastern",bonus_block:`Early Purchase Bonus: 20% for purchases before October 9, 2026 at 7:00 PM ET.
Bonus Tickets: 4
Total Tickets: 24`,note:"",note_block:"",ticket_type:"Bi-Weekly",ticket_type_raw:"biweekly",transaction_type:"biweekly",ticket_gold_cost:"10,001",gold_cost:"10,001",raw_gold_cost:"10001",raw_ticket_gold_cost:"10001",purchase_date:"October 5, 2026",data_source:"Guild bank",event_datetime:"2026-10-05T12:00:00Z",event_timestamp:"1791201600",raffle_datetime_eastern:"October 10, 2026 at 8:00 PM Eastern",raffle_date_time_eastern:"October 10, 2026 at 8:00 PM Eastern",raffle_datetime:"October 10, 2026 at 8:00 PM Eastern",mail_request_id:"example",mail_batch_id:"example"},r=String(t).replace(/{([a-zA-Z0-9_]+)}/g,(i,o)=>{var s;return(s=n[o])!=null?s:i});return e&&!String(t).includes("{bonus_block}")?r+`

`+n.bonus_block:r}function Pa(t){const e=()=>{for(const n of document.querySelectorAll("[data-report-toggle]")){const r=n.dataset.reportToggle===t.open;n.setAttribute("aria-expanded",String(r));const i=document.getElementById(n.getAttribute("aria-controls"));i&&(i.classList.toggle("is-open",r),i.inert=!r)}};for(const n of document.querySelectorAll("[data-report-toggle]"))n.addEventListener("click",()=>{t.toggle(n.dataset.reportToggle),e()});for(const n of document.querySelectorAll('.reports-panel .report-run-button:not([type="submit"])'))n.addEventListener("click",()=>{t.close(),e()});e()}function Fa(){let t=null,e={},n=!1,r="",i=!1;const o=(d,m)=>{const g=`data-config-value="${C(d.key)}" id="config-${C(d.key)}" ${m.override?"":"disabled"}`;return d.type==="boolean"?`<select ${g}><option value="true" ${String(m.value)==="true"?"selected":""}>Enabled</option><option value="false" ${String(m.value)==="false"?"selected":""}>Disabled</option></select>`:d.type==="select"?`<select ${g}>${d.options.map(b=>`<option ${b===m.value?"selected":""}>${C(b)}</option>`).join("")}</select>`:d.type==="template"?`<textarea ${g} rows="${d.key.includes("BODY")?9:3}" maxlength="${d.maxLength}">${C(m.value)}</textarea>`:`<input ${g} type="${d.type==="number"?"number":"text"}" ${d.type==="number"?`min="${d.min}" max="${d.max}" step="any"`:""} value="${C(m.value)}">`};return{render:()=>{const d=t?[...new Set(t.settings.map(m=>m.group))]:[];return`<article class="report-option-card admin-configuration-card"><div class="report-option-copy">
   <h3><button type="button" class="report-section-toggle" data-report-toggle="configuration" aria-expanded="false" aria-controls="adminConfigurationContent">Administrator Configuration <span aria-hidden="true">\u25BE</span></button></h3>
   <div id="adminConfigurationContent" class="report-section-content" inert><div class="report-section-inner">
   <p>Changes take effect only after Save. Clear an override to use the original .env default. Settings apply live; active deliveries finish safely.</p>
   <p role="status" class="configuration-status">${C(r)}</p>
   ${t?`
   ${t.botDefaultsReported?"":"<p>Bot defaults have not been reported yet. Connect the updated bot before editing its settings.</p>"}
   <form id="adminConfigurationForm">
    ${d.map(m=>`<fieldset class="configuration-group" ${i?"disabled":""}><legend>${C(m)}</legend>
     ${t.settings.filter(g=>g.group===m).map(g=>{const b=ao(g,e);return`<div class="configuration-setting">
      <label for="config-${C(g.key)}">${C(g.label)}</label>
      <small>${C(g.key)} \xB7 <span data-config-source="${C(g.key)}">${C(b.source)}</span></small>
      <label class="configuration-override"><input type="checkbox" data-config-override="${C(g.key)}" ${b.override?"checked":""}> Use a GuildSync override</label>
      ${o(g,b)}
      <button type="button" class="configuration-default" data-config-default="${C(g.key)}">Use .env default</button>
      <small>Default: ${C(g.defaultValue)}</small>
      ${g.placeholders?`<small>Placeholders: ${g.placeholders.map(k=>C("{"+k+"}")).join(", ")}</small>`:""}
      ${g.group==="Receipt messages"?`<label>Example preview (20% bonus)<pre data-config-preview="${C(g.key)}">${C(co(b.value,{body:g.key.endsWith("BODY_TEMPLATE")}))}</pre></label>`:""}
     </div>`}).join("")}
    </fieldset>`).join("")}
    <div class="configuration-actions"><button type="submit" ${i?"disabled":""}>${i?"Saving...":"Save Configuration"}</button><button type="button" id="reloadAdminConfiguration" ${i?"disabled":""}>Discard edits and reload</button></div>
   </form>`:`<p>${n?"Loading configuration...":"Configuration is not loaded."}</p><button type="button" id="reloadAdminConfiguration">Load configuration</button>`}
   </div></div></div></article>`},wire:({request:d,rerender:m})=>{var b,k;const g=async()=>{if(!n){n=!0,r="";try{const S=await d("guildsync:request-admin-configuration",{});if(!(S!=null&&S.ok))throw Error((S==null?void 0:S.message)||"Could not load configuration.");t=S.configuration,e={}}catch(S){r=S.message}finally{n=!1,m()}}};!t&&!n&&!r&&g(),(b=document.getElementById("reloadAdminConfiguration"))==null||b.addEventListener("click",()=>void g());for(const S of document.querySelectorAll("[data-config-value]"))S.addEventListener("input",()=>{const D=S.dataset.configValue;e[D]=S.value;const q=document.querySelector(`[data-config-source="${D}"]`);q&&(q.textContent="GuildSync override (pending Save)");const R=document.querySelector(`[data-config-preview="${D}"]`);R&&(R.textContent=co(S.value,{body:D.endsWith("BODY_TEMPLATE")}))});for(const S of document.querySelectorAll("[data-config-override]"))S.addEventListener("change",()=>{const D=S.dataset.configOverride,q=t.settings.find(R=>R.key===D);e[D]=S.checked?ao(q,e).value:null,m()});for(const S of document.querySelectorAll("[data-config-default]"))S.addEventListener("click",()=>{e[S.dataset.configDefault]=null,m()});(k=document.getElementById("adminConfigurationForm"))==null||k.addEventListener("submit",async S=>{var q;if(S.preventDefault(),i)return;if(!Object.keys(e).length){r="No changes to save.",m();return}i=!0,r="";const D={...e};m(),(q=document.getElementById("adminConfigurationForm"))==null||q.querySelectorAll("input,select,textarea,button").forEach(R=>R.disabled=!0);try{const R=await d("guildsync:save-admin-configuration",{revision:t.revision,changes:D});if(!(R!=null&&R.ok))throw Error((R==null?void 0:R.message)||"Could not save configuration.");t=R.configuration,e={},r="Configuration saved. Backend settings are active; the connected bot applies its settings after active deliveries finish. An offline bot applies them when it reconnects."}catch(R){r=R.message}finally{i=!1,m()}})},clear(){t=null,e={},r=""}}}const Ga="/assets/splash.ea386b6a.png",Ua="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",Ha="/assets/GuildSync-Graphic.9169020d.png",ge=Object.create(null);ge.open="0";ge.close="1";ge.ping="2";ge.pong="3";ge.message="4";ge.upgrade="5";ge.noop="6";const Nn=Object.create(null);Object.keys(ge).forEach(t=>{Nn[ge[t]]=t});const Mr={type:"error",data:"parser error"},Po=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Fo=typeof ArrayBuffer=="function",Go=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,ei=({type:t,data:e},n,r)=>Po&&e instanceof Blob?n?r(e):lo(e,r):Fo&&(e instanceof ArrayBuffer||Go(e))?n?r(e):lo(new Blob([e]),r):r(ge[t]+(e||"")),lo=(t,e)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];e("b"+(r||""))},n.readAsDataURL(t)};function uo(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let yr;function Va(t,e){if(Po&&t.data instanceof Blob)return t.data.arrayBuffer().then(uo).then(e);if(Fo&&(t.data instanceof ArrayBuffer||Go(t.data)))return e(uo(t.data));ei(t,!1,n=>{yr||(yr=new TextEncoder),e(yr.encode(n))})}const fo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",an=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<fo.length;t++)an[fo.charCodeAt(t)]=t;const Wa=t=>{let e=t.length*.75,n=t.length,r,i=0,o,s,a,d;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const m=new ArrayBuffer(e),g=new Uint8Array(m);for(r=0;r<n;r+=4)o=an[t.charCodeAt(r)],s=an[t.charCodeAt(r+1)],a=an[t.charCodeAt(r+2)],d=an[t.charCodeAt(r+3)],g[i++]=o<<2|s>>4,g[i++]=(s&15)<<4|a>>2,g[i++]=(a&3)<<6|d&63;return m},ja=typeof ArrayBuffer=="function",ti=(t,e)=>{if(typeof t!="string")return{type:"message",data:Uo(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:za(t.substring(1),e)}:Nn[n]?t.length>1?{type:Nn[n],data:t.substring(1)}:{type:Nn[n]}:Mr},za=(t,e)=>{if(ja){const n=Wa(t);return Uo(n,e)}else return{base64:!0,data:t}},Uo=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},Ho=String.fromCharCode(30),Ya=(t,e)=>{const n=t.length,r=new Array(n);let i=0;t.forEach((o,s)=>{ei(o,!1,a=>{r[s]=a,++i===n&&e(r.join(Ho))})})},Ka=(t,e)=>{const n=t.split(Ho),r=[];for(let i=0;i<n.length;i++){const o=ti(n[i],e);if(r.push(o),o.type==="error")break}return r};function Ja(){return new TransformStream({transform(t,e){Va(t,n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const o=new DataView(i.buffer);o.setUint8(0,126),o.setUint16(1,r)}else{i=new Uint8Array(9);const o=new DataView(i.buffer);o.setUint8(0,127),o.setBigUint64(1,BigInt(r))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(n)})}})}let kr;function Dn(t){return t.reduce((e,n)=>e+n.length,0)}function Mn(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let r=0;for(let i=0;i<e;i++)n[i]=t[0][r++],r===t[0].length&&(t.shift(),r=0);return t.length&&r<t[0].length&&(t[0]=t[0].slice(r)),n}function Qa(t,e){kr||(kr=new TextDecoder);const n=[];let r=0,i=-1,o=!1;return new TransformStream({transform(s,a){for(n.push(s);;){if(r===0){if(Dn(n)<1)break;const d=Mn(n,1);o=(d[0]&128)===128,i=d[0]&127,i<126?r=3:i===126?r=1:r=2}else if(r===1){if(Dn(n)<2)break;const d=Mn(n,2);i=new DataView(d.buffer,d.byteOffset,d.length).getUint16(0),r=3}else if(r===2){if(Dn(n)<8)break;const d=Mn(n,8),m=new DataView(d.buffer,d.byteOffset,d.length),g=m.getUint32(0);if(g>Math.pow(2,53-32)-1){a.enqueue(Mr);break}i=g*Math.pow(2,32)+m.getUint32(4),r=3}else{if(Dn(n)<i)break;const d=Mn(n,i);a.enqueue(ti(o?d:kr.decode(d),e)),r=0}if(i===0||i>t){a.enqueue(Mr);break}}}})}const Vo=4;function N(t){if(t)return Xa(t)}function Xa(t){for(var e in N.prototype)t[e]=N.prototype[e];return t}N.prototype.on=N.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};N.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};N.prototype.off=N.prototype.removeListener=N.prototype.removeAllListeners=N.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===e||r.fn===e){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+t],this};N.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,e)}return this};N.prototype.emitReserved=N.prototype.emit;N.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};N.prototype.hasListeners=function(t){return!!this.listeners(t).length};const er=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0))(),K=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),Za="arraybuffer";function Wo(t,...e){return e.reduce((n,r)=>(t.hasOwnProperty(r)&&(n[r]=t[r]),n),{})}const ec=K.setTimeout,tc=K.clearTimeout;function tr(t,e){e.useNativeTimers?(t.setTimeoutFn=ec.bind(K),t.clearTimeoutFn=tc.bind(K)):(t.setTimeoutFn=K.setTimeout.bind(K),t.clearTimeoutFn=K.clearTimeout.bind(K))}const nc=1.33;function rc(t){return typeof t=="string"?ic(t):Math.ceil((t.byteLength||t.size)*nc)}function ic(t){let e=0,n=0;for(let r=0,i=t.length;r<i;r++)e=t.charCodeAt(r),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(r++,n+=4);return n}function jo(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function oc(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function sc(t){let e={},n=t.split("&");for(let r=0,i=n.length;r<i;r++){let o=n[r].split("=");e[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return e}class ac extends Error{constructor(e,n,r){super(e),this.description=n,this.context=r,this.type="TransportError"}}class ni extends N{constructor(e){super(),this.writable=!1,tr(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,r){return super.emitReserved("error",new ac(e,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=ti(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=oc(e);return n.length?"?"+n:""}}class cc extends ni{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};Ka(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Ya(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=jo()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let zo=!1;try{zo=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const lc=zo;function dc(){}class uc extends cc{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let r=location.port;r||(r=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,n){const r=this.request({method:"POST",data:e});r.on("success",n),r.on("error",(i,o)=>{this.onError("xhr post error",i,o)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=e}}class ue extends N{constructor(e,n,r){super(),this.createRequest=e,tr(this,r),this._opts=r,this._method=r.method||"GET",this._uri=n,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const n=Wo(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(n);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var i;r.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=ue.requestsCount++,ue.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=dc,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete ue.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}ue.requestsCount=0;ue.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",ho);else if(typeof addEventListener=="function"){const t="onpagehide"in K?"pagehide":"unload";addEventListener(t,ho,!1)}}function ho(){for(let t in ue.requests)ue.requests.hasOwnProperty(t)&&ue.requests[t].abort()}const fc=function(){const t=Yo({xdomain:!1});return t&&t.responseType!==null}();class hc extends uc{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=fc&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new ue(Yo,this.uri(),e)}}function Yo(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||lc))return new XMLHttpRequest}catch{}if(!e)try{return new K[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Ko=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class pc extends ni{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,r=Ko?{}:Wo(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;ei(r,this.supportsBinary,o=>{try{this.doWrite(r,o)}catch{}i&&er(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=jo()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const vr=K.WebSocket||K.MozWebSocket;class mc extends pc{createSocket(e,n,r){return Ko?new vr(e,n,r):n?new vr(e,n):new vr(e)}doWrite(e,n){this.ws.send(n)}}class gc extends ni{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=Qa(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(n).getReader(),i=Ja();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const o=()=>{r.read().then(({done:a,value:d})=>{a||(this.onPacket(d),o())}).catch(a=>{})};o();const s={type:"open"};this.query.sid&&(s.data=`{"sid":"${this.query.sid}"}`),this._writer.write(s).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;this._writer.write(r).then(()=>{i&&er(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const bc={websocket:mc,webtransport:gc,polling:hc},yc=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,kc=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Tr(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),r=t.indexOf("]");n!=-1&&r!=-1&&(t=t.substring(0,n)+t.substring(n,r).replace(/:/g,";")+t.substring(r,t.length));let i=yc.exec(t||""),o={},s=14;for(;s--;)o[kc[s]]=i[s]||"";return n!=-1&&r!=-1&&(o.source=e,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=vc(o,o.path),o.queryKey=Sc(o,o.query),o}function vc(t,e){const n=/\/{2,9}/g,r=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function Sc(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,o){i&&(n[i]=o)}),n}const Br=typeof addEventListener=="function"&&typeof removeEventListener=="function",Cn=[];Br&&addEventListener("offline",()=>{Cn.forEach(t=>t())},!1);class Ce extends N{constructor(e,n){if(super(),this.binaryType=Za,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const r=Tr(e);n.hostname=r.host,n.secure=r.protocol==="https"||r.protocol==="wss",n.port=r.port,r.query&&(n.query=r.query)}else n.host&&(n.hostname=Tr(n.host).host);tr(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(r=>{const i=r.prototype.name;this.transports.push(i),this._transportsByName[i]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=sc(this.opts.query)),Br&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Cn.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=Vo,n.transport=e,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Ce.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",Ce.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(n+=rc(i)),r>0&&n>this._maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,er(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,r){return this._sendPacket("message",e,n,r),this}send(e,n,r){return this._sendPacket("message",e,n,r),this}_sendPacket(e,n,r,i){if(typeof n=="function"&&(i=n,n=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const o={type:e,data:n,options:r};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(Ce.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Br&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=Cn.indexOf(this._offlineEventListener);r!==-1&&Cn.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}}Ce.protocol=Vo;class wc extends Ce{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let n=this.createTransport(e),r=!1;Ce.priorWebsocketSuccess=!1;const i=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",b=>{if(!r)if(b.type==="pong"&&b.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;Ce.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(g(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const k=new Error("probe error");k.transport=n.name,this.emitReserved("upgradeError",k)}}))};function o(){r||(r=!0,g(),n.close(),n=null)}const s=b=>{const k=new Error("probe error: "+b);k.transport=n.name,o(),this.emitReserved("upgradeError",k)};function a(){s("transport closed")}function d(){s("socket closed")}function m(b){n&&b.name!==n.name&&o()}const g=()=>{n.removeListener("open",i),n.removeListener("error",s),n.removeListener("close",a),this.off("close",d),this.off("upgrading",m)};n.once("open",i),n.once("error",s),n.once("close",a),this.once("close",d),this.once("upgrading",m),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const n=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&n.push(e[r]);return n}}class _c extends wc{constructor(e,n={}){const r=typeof e=="object"?e:n;(!r.transports||r.transports&&typeof r.transports[0]=="string")&&(r.transports=(r.transports||["polling","websocket","webtransport"]).map(i=>bc[i]).filter(i=>!!i)),super(e,r)}}function Ac(t,e="",n){let r=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),r=Tr(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const o=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+o+":"+r.port+e,r.href=r.protocol+"://"+o+(n&&n.port===r.port?"":":"+r.port),r}const Lc=typeof ArrayBuffer=="function",$c=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,Jo=Object.prototype.toString,Ec=typeof Blob=="function"||typeof Blob<"u"&&Jo.call(Blob)==="[object BlobConstructor]",Rc=typeof File=="function"||typeof File<"u"&&Jo.call(File)==="[object FileConstructor]";function ri(t){return Lc&&(t instanceof ArrayBuffer||$c(t))||Ec&&t instanceof Blob||Rc&&t instanceof File}function On(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,r=t.length;n<r;n++)if(On(t[n]))return!0;return!1}if(ri(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return On(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&On(t[n]))return!0;return!1}function Dc(t){const e=[],n=t.data,r=t;return r.data=Nr(n,e),r.attachments=e.length,{packet:r,buffers:e}}function Nr(t,e){if(!t)return t;if(ri(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let r=0;r<t.length;r++)n[r]=Nr(t[r],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=Nr(t[r],e));return n}return t}function Mc(t,e){return t.data=Cr(t.data,e),delete t.attachments,t}function Cr(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=Cr(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=Cr(t[n],e));return t}const Qo=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Tc=5;var w;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(w||(w={}));class Bc{constructor(e){this.replacer=e}encode(e){return(e.type===w.EVENT||e.type===w.ACK)&&On(e)?this.encodeAsBinary({type:e.type===w.EVENT?w.BINARY_EVENT:w.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===w.BINARY_EVENT||e.type===w.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=Dc(e),r=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(r),i}}class ii extends N{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const r=n.type===w.BINARY_EVENT;r||n.type===w.BINARY_ACK?(n.type=r?w.EVENT:w.ACK,this.reconstructor=new Nc(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(ri(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const r={type:Number(e.charAt(0))};if(w[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===w.BINARY_EVENT||r.type===w.BINARY_ACK){const o=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const s=e.substring(o,n);if(s!=Number(s)||e.charAt(n)!=="-")throw new Error("Illegal attachments");const a=Number(s);if(!Xo(a)||a<0)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=a}if(e.charAt(n+1)==="/"){const o=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););r.nsp=e.substring(o,n)}else r.nsp="/";const i=e.charAt(n+1);if(i!==""&&Number(i)==i){const o=n+1;for(;++n;){const s=e.charAt(n);if(s==null||Number(s)!=s){--n;break}if(n===e.length)break}r.id=Number(e.substring(o,n+1))}if(e.charAt(++n)){const o=this.tryParse(e.substr(n));if(ii.isPayloadValid(r.type,o))r.data=o;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case w.CONNECT:return Fn(n);case w.DISCONNECT:return n===void 0;case w.CONNECT_ERROR:return typeof n=="string"||Fn(n);case w.EVENT:case w.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&Qo.indexOf(n[0])===-1);case w.ACK:case w.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Nc{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=Mc(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Cc(t){return typeof t=="string"}const Xo=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function Oc(t){return t===void 0||Xo(t)}function Fn(t){return Object.prototype.toString.call(t)==="[object Object]"}function Ic(t,e){switch(t){case w.CONNECT:return e===void 0||Fn(e);case w.DISCONNECT:return e===void 0;case w.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&Qo.indexOf(e[0])===-1);case w.ACK:return Array.isArray(e);case w.CONNECT_ERROR:return typeof e=="string"||Fn(e);default:return!1}}function qc(t){return Cc(t.nsp)&&Oc(t.id)&&Ic(t.type,t.data)}const xc=Object.freeze(Object.defineProperty({__proto__:null,protocol:Tc,get PacketType(){return w},Encoder:Bc,Decoder:ii,isPacketValid:qc},Symbol.toStringTag,{value:"Module"}));function Z(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const Pc=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Zo extends N{constructor(e,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Z(e,"open",this.onopen.bind(this)),Z(e,"packet",this.onpacket.bind(this)),Z(e,"error",this.onerror.bind(this)),Z(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var r,i,o;if(Pc.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const s={type:w.EVENT,data:n};if(s.options={},s.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const g=this.ids++,b=n.pop();this._registerAckCallback(g,b),s.id=g}const a=(i=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||i===void 0?void 0:i.writable,d=this.connected&&!(!((o=this.io.engine)===null||o===void 0)&&o._hasPingExpired());return this.flags.volatile&&!a||(d?(this.notifyOutgoingListeners(s),this.packet(s)):this.sendBuffer.push(s)),this.flags={},this}_registerAckCallback(e,n){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[e]=n;return}const o=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);n.call(this,new Error("operation has timed out"))},i),s=(...a)=>{this.io.clearTimeoutFn(o),n.apply(this,a)};s.withError=!0,this.acks[e]=s}emitWithAck(e,...n){return new Promise((r,i)=>{const o=(s,a)=>s?i(s):r(a);o.withError=!0,n.push(o),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...o)=>(this._queue[0],i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(i)):(this._queue.shift(),n&&n(null,...o)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:w.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case w.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case w.EVENT:case w.BINARY_EVENT:this.onevent(e);break;case w.ACK:case w.BINARY_ACK:this.onack(e);break;case w.DISCONNECT:this.ondisconnect();break;case w.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let r=!1;return function(...i){r||(r=!0,n.packet({type:w.ACK,id:e,data:i}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:w.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,e.data)}}}function qt(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}qt.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-n:t+n}return Math.min(t,this.max)|0};qt.prototype.reset=function(){this.attempts=0};qt.prototype.setMin=function(t){this.ms=t};qt.prototype.setMax=function(t){this.max=t};qt.prototype.setJitter=function(t){this.jitter=t};class Or extends N{constructor(e,n){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,tr(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new qt({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const i=n.parser||xc;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new _c(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=Z(n,"open",function(){r.onopen(),e&&e()}),o=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},s=Z(n,"error",o);if(this._timeout!==!1){const a=this._timeout,d=this.setTimeoutFn(()=>{i(),o(new Error("timeout")),n.close()},a);this.opts.autoUnref&&d.unref(),this.subs.push(()=>{this.clearTimeoutFn(d)})}return this.subs.push(i),this.subs.push(s),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Z(e,"ping",this.onping.bind(this)),Z(e,"data",this.ondata.bind(this)),Z(e,"error",this.onerror.bind(this)),Z(e,"close",this.onclose.bind(this)),Z(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){er(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new Zo(this,e,n),this.nsps[e]=r),r}_destroy(e){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let r=0;r<n.length;r++)this.engine.write(n[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const en={};function In(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=Ac(t,e.path||"/socket.io"),r=n.source,i=n.id,o=n.path,s=en[i]&&o in en[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||s;let d;return a?d=new Or(r,e):(en[i]||(en[i]=new Or(r,e)),d=en[i]),n.query&&!e.query&&(e.query=n.queryKey),d.socket(n.path,e)}Object.assign(In,{Manager:Or,Socket:Zo,io:In,connect:In});function Fc(t){return window.go.main.App.CleanupDepositMailAckFromGuildSyncBanking(t)}function Gc(){return window.go.main.App.CloseWindow()}function Uc(t){return window.go.main.App.CollectDepositMailAckFromGuildSyncBanking(t)}function Hc(t){return window.go.main.App.CollectGuildSyncApplicationsData(t)}function Vc(t){return window.go.main.App.CollectGuildSyncBankingData(t)}function Wc(t){return window.go.main.App.CollectGuildSyncRosterData(t)}function jc(t,e){return window.go.main.App.CommitGuildSyncApplicationsData(t,e)}function zc(t,e){return window.go.main.App.CommitGuildSyncBankingData(t,e)}function Yc(t,e){return window.go.main.App.CommitGuildSyncRosterData(t,e)}function Kc(){return window.go.main.App.FlushPendingDepositMailAckCleanup()}function Jc(){return window.go.main.App.GetESORunningStatus()}function Qc(){return window.go.main.App.GetGuildSyncFileWatcherStatus()}function Xc(){return window.go.main.App.GetGuildSyncSession()}function Zc(){return window.go.main.App.LogoutGuildSync()}function el(){return window.go.main.App.MaximizeWindow()}function tl(){return window.go.main.App.MinimizeWindow()}function es(){return window.go.main.App.SaveWindowState()}function nl(t,e){return window.go.main.App.SetGuildSyncSavedVarsWatchFileEnabled(t,e)}function rl(){return window.go.main.App.ShowMainWindow()}function il(){return window.go.main.App.StartDiscordLogin()}function ol(){return window.go.main.App.StartGuildSyncFileWatcher()}function sl(){return window.go.main.App.StopGuildSyncFileWatcher()}function al(t){return window.go.main.App.WriteDepositMailToGuildSyncBanking(t)}function cl(t,e,n){return window.runtime.EventsOnMultiple(t,e,n)}function tn(t,e){return cl(t,e,-1)}function ll(t){window.runtime.BrowserOpenURL(t)}const nr="1.2.7",dl=30*60*1e3,ts="guildsync-pending-banking-uploads",ns="guildsync-pending-deposit-mail",ul=5e3,fl=30*1e3,rs="guildsync-pending-roster-uploads",is="guildsync-pending-applications-uploads",p=60*1e3,os=7e3,ss=1400,as=2400,hl=4e3,pl=38,cs=document.querySelector("#app");let po=null,nn=null,mo=!1,vn=!1,qn=null,Sr=!1,wr=!1,_r=!1,Oe=null,W={running:!1,message:""},ht=null,pt=null,Ir=!1,mt=!1,gt=null,Ar=!1,He=new Map,Je=new Map,x="",at=!1,ct=!1,cn=[],y={logged_in:!1,allowed:!1,status_message:""},Ee={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},u=null,j=[],rr=[],ir=null,fn=!1,Gn=!1,Un="",bt=new Set,yt=new Set,hn="username",Ze="asc",qr=null,xr=null,X=[],Hn=null,Ve=!1,go=!1,Vn="",Pr=null,Fr=null,et=new Set,kt=new Set,Se="",V="",O=-1,$t=!1,pn="",J=[],We="",Ie=[],qe=!1,_e="",Lr=null,ee=-1,xt=!1,mn="",xe=[],Wn=!1,tt=!1,Pe="",Et="",Rt=!1,Re="",Q=[],Dt="",lt="",Fe=[],Ge=!1,Ae="",bo=null,Ke=0;const ml=650;let te=-1,Pt=!1,Ft=[],De=!1,nt="",Gt=!1,gn=[],Me=!1,rt="",Ut=!1,oi=[],Te=!1,it="",Ht="",Be="",vt="",Ne="",$=[],G=!1,U="",ft=!1,or="",Qe="",Sn="",wn="",we=-1,Ye=!1,A=null,ot=[],Mt=!1,$e="",_n="",de=-1,Vt=!1,si=null,ln=null;const ai=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let z=[],H=null,Xe=null,le=!1;const gl=xa(),ls=Fa();let Tt=[],St="",yo=!1,T="biweekly",ds=null,je=!1,st=!1,se="biweekly",Wt=!1,Bt=!1,ke="",ve=null,I={targetType:"other",note:"",tickets:""},jt=!1,dt="",F=[],ie=[],fe="",he=!1,pe="",wt=null,ne=-1,Le=!1,jn=!1,Y="",E={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},zt="",P=-1,re=!1,Gr={biweekly:0,monthly:0};const bl=1780786800,ze=14*24*60*60,zn=60*60,Yn=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let M=Yn[0].id;function yl(){cs.innerHTML=`
    <main class="splash-screen">
      <img src="${Ga}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await rl(),await kl(),us(),un(),await Lt()},5e3)}async function kl(){try{y=await Xc()}catch(t){y={logged_in:!1,allowed:!1,status_message:""},h("session-error",v(t),{ttlMs:p})}}function us(){cs.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${Ua}" alt="" class="title-icon" />
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
            <img src="${Ha}" alt="GuildSync" class="compact-brand-logo" />
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
          ${fs()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content web-upload-banner-dismissed" aria-live="polite">
          ${ps()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await tl()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await es(),await Gc()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await el()}),Pn(),Zr(),ms(),La(),ta(),fa(),vs(),ea(),Vs(),Ws(),js(),zs(),Bs(),na(),$l(),Ue(),It(),mo||(window.addEventListener("resize",()=>{qa(),Oa()}),sh(),mo=!0)}function fs(){return Yn.map(t=>{const e=t.id===M,n=vl(t.id,e),r=n?hs():0,i=n?`Deposit mail needs attention: ${r} item${r===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${n?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${f(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${f(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${Sl(t.icon)}</span>
          <span class="guildsync-tab-label">${c(t.label)}</span>
          ${n?`<span class="guildsync-tab-mail-badge" aria-label="${f(i)}">${r>99?"99+":c(String(r))}</span>`:""}
        </button>
      `}).join("")}function hs(){return L()?dr()+$n()+da():0}function vl(t,e){return t!=="more"||e?!1:hs()>0}function Sl(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function ps(){const t=Yn.find(n=>n.id===M)||Yn[0];let e="";return t.id==="discord-members"?e=Rl():t.id==="eso-members"?e=Dl():t.id==="more"?e=Du():t.id==="settings"?e=Zl():e=`
      <div class="guildsync-tab-panel" data-active-tab="${f(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${c(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${Le?ru():""}
    ${Wt?Uu():""}
    ${jt?Mu():""}
    ${Ye?Yd():""}
    ${Pt?nd():""}
    ${Gt?cd():""}
    ${Ut?fd():""}
    ${ft?Ad():""}
    ${Vt?Ll():""}
  `}function wl(){return Vt||$t||Rt||Le||Wt||jt||Ye||xt||Pt||Gt||Ut||ft||st}function _l(){return Vt?!1:ft?(zr(),!0):Ut?(jr(),!0):Gt?(Wr(),!0):Pt?(Vr(),!0):Ye?(Ct(),!0):xt?(Jr(),!0):Wt?(Qn(),!0):jt?(ju(),l(),!0):Le?(Le=!1,l(),!0):$t?($t=!1,l(),!0):Rt?(Rt=!1,l(),!0):st?(st=!1,l(),!0):!1}function Al(t){t.key==="Escape"&&_l()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",Al,!0),window.guildSyncGlobalModalEscapeAttached=!0);function ci(t={}){return new Promise(e=>{ln&&ln(!1),Vt=!0,si={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},ln=e,l()})}function Kn(t=!1){const e=ln;ln=null,Vt=!1,si=null,e&&e(t===!0),l()}function Ll(){const t=si||{};return`
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
  `}function ko(t){var r,i,o,s;const e=(i=(r=t.target).closest)==null?void 0:i.call(r,"#cancelGuildSyncConfirmButton"),n=(s=(o=t.target).closest)==null?void 0:s.call(o,"#acceptGuildSyncConfirmButton");if(!(!e&&!n)){if(t.preventDefault(),t.stopPropagation(),e){Kn(!1);return}n&&Kn(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",ko,!0),document.addEventListener("pointerup",ko,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function $l(){if(!Vt)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=r=>{r.preventDefault(),r.stopPropagation(),Kn(!1)}),e&&(e.onclick=r=>{r.preventDefault(),r.stopPropagation(),Kn(!0)});const n=document.querySelector(".guildsync-confirm-overlay");n&&(n.onclick=r=>{r.target===n&&(r.preventDefault(),r.stopPropagation())})}function ms(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(wl())return;const e=t.dataset.tabId;!e||e===M||(M=e,l())})})}function El(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function l(t={}){ft&&El();const e=document.querySelector(".guildsync-tabs"),n=document.querySelector("#guildSyncTabContent"),r=n?Array.from(n.querySelectorAll("*")).map((o,s)=>({index:s,top:o.scrollTop,left:o.scrollLeft})).filter(({top:o,left:s})=>o||s):[],i={x:window.scrollX,y:window.scrollY};if(e&&(e.innerHTML=fs()),n){n.innerHTML=ps();const o=n.querySelectorAll("*");for(const{index:s,top:a,left:d}of r)o[s]&&(o[s].scrollTop=a,o[s].scrollLeft=d);window.scrollTo(i.x,i.y)}ms(),La(),ta(),fa(),vs(),ea(),Vs(),Ws(),js(),zs(),Bs(),na(),t.restoreDiscordSearchFocus&&Tf(),t.restoreRosterSearchFocus&&Bf(),M==="discord-members"&&(u==null?void 0:u.connected)&&j.length===0&&!fn&&Ai({silent:!0}),M==="eso-members"&&(u==null?void 0:u.connected)&&X.length===0&&!Ve&&!go&&(go=!0,Ln({silent:!0})),(M==="more"&&z.length===0||M==="settings"&&!H&&!yo)&&(u==null?void 0:u.connected)&&!je&&(yo=!0,ye({silent:!0})),(M==="discord-members"||M==="eso-members"||M==="settings")&&(u==null?void 0:u.connected)&&$.length===0&&!G&&sr({silent:!0})}function Rl(){const t=Rf(),e=Nf(),n=Array.from(bt),r=Array.from(yt);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${c(Ea(ir))}</span>
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
              ${e.filter(i=>!bt.has(i)).map(i=>`<option value="${f(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All roles</span>':n.map(i=>qf(i)).join("")}
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
              ${ai.filter(i=>!yt.has(i.id)).map(i=>`<option value="${f(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>gs("discord",i)).join("")}
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
              ${t.length>0?t.map(i=>Cf(i)).join(""):Of()}
            </tbody>
          </table>
        </div>
      </div>
      ${Rt?jl():""}
    </div>
  `}function Dl(){const t=Pl(),e=Ul(),n=Array.from(et),r=Array.from(kt);return`
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
          <span class="discord-last-refresh">Last Refresh: ${c(gu(Hn))}</span>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${Ve?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Ve?"Refreshing...":"Refresh Roster Data"}</span>
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
              ${e.filter(i=>!et.has(i)).map(i=>`<option value="${f(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All ranks</span>':n.map(i=>Hl(i)).join("")}
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
              ${ai.filter(i=>!kt.has(i.id)).map(i=>`<option value="${f(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>gs("roster",i)).join("")}
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
              ${t.length>0?t.map((i,o)=>Ml(i,o)).join(""):Il()}
            </tbody>
          </table>
        </div>
      </div>
      ${$t?Jl():""}
      ${xt?Bl():""}
    </div>
  `}function Ml(t,e=-1){const n=ql(t.rank||""),r=n?` style="color: ${n};"`:"";return`
    <tr class="eso-roster-row${e===O?" roster-search-active-row":""}"${r} data-roster-row-index="${f(String(e))}" data-eso-account-name="${f(t.account_name||"")}">
      <td>${c(t.account_name||"")}</td>
      <td>${li(t.rank||"")}</td>
      <td>${c(lr(t.joined))}</td>
      <td class="roster-notes-cell">${Tl(t)}</td>
      <td class="member-link-action-cell">${xs({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function Tl(t){const e=String((t==null?void 0:t.account_name)||"").trim(),n=Number((t==null?void 0:t.note_count)||0),r=n>0,i=r?`${n} roster note${n===1?"":"s"} for ${e}`:`No roster notes for ${e}`;return`
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
  `}function Bl(){const t=mn||"",e=Boolean((y==null?void 0:y.logged_in)&&(y==null?void 0:y.allowed));return`
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
          ${Pe?`<div class="discord-data-error">${c(Pe)}</div>`:""}
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
                ${Nl()}
              </tbody>
            </table>
          </div>
          ${e?Cl():'<div class="roster-history-muted">Log in to add a new note.</div>'}
        </div>
      </div>
    </div>
  `}function Nl(){return Wn?'<tr><td class="bank-empty-row" colspan="3">Loading notes...</td></tr>':!Array.isArray(xe)||xe.length===0?'<tr><td class="bank-empty-row" colspan="3">No notes recorded for this member.</td></tr>':xe.map(t=>`
      <tr>
        <td class="roster-notes-when-cell">${c(Ol(t.timestamp))}</td>
        <td class="roster-notes-officer-cell">${c(t.officer||"")}</td>
        <td class="roster-notes-note-cell">${c(t.note||"")}</td>
      </tr>
    `).join("")}function Cl(){return`
    <div class="roster-notes-form">
      <label for="rosterNotesNewNote">Add Note</label>
      <textarea
        id="rosterNotesNewNote"
        class="roster-notes-textarea"
        rows="4"
        placeholder="Enter a new roster note..."
        ${tt?"disabled":""}
      >${c(Et)}</textarea>
      <button id="saveRosterNoteButton" class="refresh-discord-button" type="button" ${tt?"disabled":""}>
        ${tt?"Saving...":"Save Note"}
      </button>
    </div>
  `}function Ol(t){const e=Number(t||0);return!Number.isFinite(e)||e<=0?"":new Date(e*1e3).toLocaleString()}function Il(){return`
    <tr>
      <td class="bank-empty-row" colspan="5">${c(Ve?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function ql(t){String(t||"").trim();const e=xf(t);return hr(e==null?void 0:e.role_color)}function li(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${c(e)}</span>`}function xl(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":li(e)}function Pl(){const t=Vn.trim().toLowerCase(),e=X.filter(n=>{const r=String(n.rank||"").trim();if(et.size>0&&!et.has(r)||!ks(kt,Ur(n)))return!1;if(!t)return!0;const i=lr(n.joined),o=mi(n.joined),s=Ur(n),a=ys(n.account_name||"");return[n.account_name,r,i,o,n.joined,s,a].map(m=>String(m||"").toLowerCase()).join(" ").includes(t)});return Fl(e)}function Fl(t){if(!Se||!V)return t;const e=V==="desc"?-1:1;return[...t].sort((n,r)=>{const i=vo(n,Se),o=vo(r,Se),s=i.localeCompare(o,void 0,{sensitivity:"base",numeric:!0});return s!==0?s*e:String(n.account_name||"").localeCompare(String(r.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function vo(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const n=Number(t.joined||0);return Number.isFinite(n)&&n>0?String(n).padStart(16,"0"):""}if(e==="notes")return String(Number(t.note_count||0)).padStart(8,"0");if(e==="linked"){const n=Ur(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[n]||"9"} ${n} ${ys(t.account_name||"")}`}return String(t.account_name||"")}function Gl(t){const n=new Set(["account_name","rank","joined","notes","linked"]).has(t)?t:"account_name";Se!==n?(Se=n,V="asc"):V==="asc"?V="desc":V==="desc"?(Se="",V=""):(Se=n,V="asc"),O=-1,l()}function rn(t,e,n=""){const r=Se===t&&Boolean(V),i=r?V==="asc"?"ascending":"descending":"none",o=r?V==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${f(n)}" aria-sort="${f(i)}">
      <button
        class="discord-sort-header roster-sort-header${r?" active":""}"
        type="button"
        data-roster-sort-column="${f(t)}"
        title="Sort ${f(e)}${r&&V==="asc"?" descending":r&&V==="desc"?" not sorted":" ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${o}</span>
      </button>
    </th>
  `}function Ul(){return Array.from(new Set(X.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function Hl(t){const e=Ei(t),n=hr(e==null?void 0:e.role_color),r=Di(n),i=Ri(n,r);return`
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
  `}function Vl(t){const e=ai.find(n=>n.id===t);return e?e.label:t}function gs(t,e){const n=t==="roster"?"roster":"discord",r=Vl(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${n}-link-status-filter="${f(e)}"
      title="Remove ${f(r)} link filter"
    >
      <span>${c(r)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function bs(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked"&&String(n.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function Wl(t){return bs(cr(t==null?void 0:t.discord_id))}function Ur(t){return bs(ar(t==null?void 0:t.account_name))}function ys(t){const e=ar(t),n=qs({mode:"eso-to-discord",esoAccountName:t}),r=e.filter(o=>String(o.link_status||"").trim().toLowerCase()==="linked").map(o=>o.discord_server_nickname||o.discord_display_name||o.discord_username||o.discord_user_id||"").filter(Boolean),i=e.filter(o=>String(o.link_status||"").trim().toLowerCase()==="candidate").map(o=>o.discord_server_nickname||o.discord_display_name||o.discord_username||o.discord_user_id||"").filter(Boolean);return[n.label,n.title,r.join(" "),i.join(" ")].filter(Boolean).join(" ")}function ks(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function jl(){return`
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
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${f(Re)}" />
        </div>

        ${Ae?`<div class="discord-data-error">${c(Ae)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${zl()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${lt?`: ${c(lt)}`:""}</div>
            ${Yl()}
          </div>
        </div>
      </div>
    </div>
  `}function zl(){return Ge&&Q.length===0?'<div class="roster-history-muted">Searching...</div>':Q.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${Q.map((t,e)=>`
        <button class="roster-history-match${e===te||t.discord_id===Dt?" is-selected":""}" type="button" data-discord-history-id="${f(t.discord_id)}" data-discord-history-name="${f(Hr(t))}">
          <span>${c(Hr(t))}</span>
          <strong>${c(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===te?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Yl(){return Dt?Ge&&Fe.length===0?'<div class="roster-history-muted">Loading history...</div>':Fe.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${Fe.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(mi(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${c(Kl(t.event_type))}</td>
              <td>${c(t.old_value||"")}</td>
              <td>${c(t.new_value||"")}</td>
              <td>${c(t.initiator||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function Hr(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function Kl(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Jl(){return`
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
            ${Ql()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${We?`: ${c(We)}`:""}</div>
            ${Xl()}
          </div>
        </div>
      </div>
    </div>
  `}function Ql(){return qe&&J.length===0?'<div class="roster-history-muted">Searching...</div>':J.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${J.map((t,e)=>`
        <button class="roster-history-match${e===ee||t.account_name===We?" is-selected":""}" type="button" data-roster-history-account="${f(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <strong>${c(t.rank||"")}</strong>
          ${e===ee?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Xl(){return We?qe&&Ie.length===0?'<div class="roster-history-muted">Loading history...</div>':Ie.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${Ie.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(mi(t.timestamp))}</td>
              <td>${c(t.event_type||"")}</td>
              <td>${xl(t.rank)}</td>
              <td>${c(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function Zl(){var t;return`
    <div class="guildsync-tab-panel reports-panel" data-active-tab="settings">
      <div class="discord-data-header reports-header">
        <div>
          <h2 class="discord-data-title">Reports & Admin</h2>
          <p class="discord-data-subtitle">Run GuildSync reports and administrative review tools. More options can be added here later.</p>
        </div>
      </div>

      <div class="reports-scroll-area">
        ${ed()}
        ${((t=y==null?void 0:y.user)==null?void 0:t.role)==="admin"?ls.render():""}
        <section class="reports-list" aria-label="Available reports">
          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Associates Promotion Eligible</h3>
              <p>Shows Associates who have been in the guild at least two weeks, have purchased at least one raffle ticket, and are linked to Discord. Also shows otherwise eligible Associates who still need a Discord link reviewed.</p>
            </div>
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${De?"disabled":""}>
              ${De?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${Me?"disabled":""}>
              ${Me?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${Te?"disabled":""}>
              ${Te?"Loading...":"Run"}
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
  `}function vs(){var t,e,n,r,i,o,s,a,d,m;M==="settings"&&(Pa(gl),((t=y==null?void 0:y.user)==null?void 0:t.role)==="admin"&&ls.wire({request:(g,b)=>_(g,b,12e4),rerender:l}),(e=document.querySelector("#cancelBonusDefaults"))==null||e.addEventListener("click",()=>{le=!1,l()}),(n=document.querySelector("#resetBonusDefaults"))==null||n.addEventListener("click",()=>{le=!0,l()}),(r=document.querySelector("#raffleBonusSettingsForm"))==null||r.addEventListener("submit",td),(i=document.querySelector("#raffleBonusSettingsForm"))==null||i.addEventListener("input",g=>{Xe={raffle:St,values:new Map(new FormData(g.currentTarget))}}),(o=document.querySelector("#bonusRafflePicker"))==null||o.addEventListener("change",g=>{St=g.currentTarget.value,le=!1,Xe=null,l()}),(s=document.querySelector("#runAssociateTicketReportButton"))==null||s.addEventListener("click",()=>Ss()),(a=document.querySelector("#runDiscordRankAuditReportButton"))==null||a.addEventListener("click",()=>ad()),(d=document.querySelector("#runDiscordLastSeenReportButton"))==null||d.addEventListener("click",()=>ud()),(m=document.querySelector("#runMemberLinksReportButton"))==null||m.addEventListener("click",()=>Sd()))}function ed(){var s;if(!H)return"<p>Loading raffle bonus settings...</p>";const t=!le&&(Xe==null?void 0:Xe.raffle)===St?Xe.values:null,e=Tt.find(a=>`${a.type}:${a.salesEnd}`===St),n=le&&(e==null?void 0:e.inheritedSettings)?e.inheritedSettings:e,r=e?{enabledByType:{...H.enabledByType,[e.type]:n.enabled},biweekly:e.type==="biweekly"?n.tiers:H.biweekly,monthly:e.type==="monthly"?n.tiers:H.monthly}:le&&H.envDefaults||H,i=((s=y==null?void 0:y.user)==null?void 0:s.role)==="admin",o=(a,d)=>{var m,g;return`
    <fieldset class="raffle-bonus-tiers" ${i&&!le?"":"disabled"}>
      <legend>${d}</legend>
      <label><input name="${a}-enabled" type="checkbox" ${(t?t.has(`${a}-enabled`):(g=(m=r.enabledByType)==null?void 0:m[a])!=null?g:r.enabled)?"checked":""}> Enable bonus tickets</label>
      ${r[a].map((b,k)=>{var S,D;return`
        <div class="raffle-bonus-tier">
          <span>Period ${k+1}${k===r[a].length-1?" (final)":""}</span>
          <label>Hours <input name="${a}-${k}-hours" type="number" min="1" step="1" required value="${f(String(t&&(S=t.get(`${a}-${k}-hours`))!=null?S:b.hours))}"></label>
          <label>Bonus % <input name="${a}-${k}-percent" type="number" min="0" max="100" step="0.1" required value="${f(String(t&&(D=t.get(`${a}-${k}-percent`))!=null?D:b.percent))}"></label>
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
            ${Tt.map(a=>`<option value="${f(`${a.type}:${a.salesEnd}`)}" ${St===`${a.type}:${a.salesEnd}`?"selected":""}>${c(a.label)}${a.enabled?" (Bonuses)":""}</option>`).join("")}
          </select>
        </label>
        <p>Source: ${c(e?e.overridden?"Raffle override":"Saved raffle policy":H.source||".env")}</p>
        ${le?'<p role="status">Default restoration is pending. Click Save Bonus Settings to apply it, or change the selected raffle to cancel.</p><button type="button" id="cancelBonusDefaults">Cancel default restoration</button>':""}
        <form id="raffleBonusSettingsForm">
          ${i?`<button type="button" id="resetBonusDefaults">${e?"Remove this raffle override (on Save)":"Use .env bonus defaults (on Save)"}</button>`:""}
          ${e?o(e.type,e.label):o("biweekly","Bi-Weekly Raffle")+o("monthly","50/50 Raffle")}
          ${i?'<button class="refresh-discord-button report-run-button" type="submit">Save Bonus Settings</button>':"<p>Admin access is required to change these settings.</p>"}
        </form>
        </div></div>
      </div>
    </article>`}async function td(t){t.preventDefault();const e=t.currentTarget,n=new FormData(e),r=Tt.find(s=>`${s.type}:${s.salesEnd}`===St),i=s=>((r==null?void 0:r.type)===s?r.tiers:H[s]).map((a,d)=>({hours:Number(n.get(`${s}-${d}-hours`)),percent:Number(n.get(`${s}-${d}-percent`))})),o=r?{raffleType:r.type,salesEnd:r.salesEnd,enabled:n.has(`${r.type}-enabled`),tiers:i(r.type)}:{enabledByType:{biweekly:n.has("biweekly-enabled"),monthly:n.has("monthly-enabled")},biweekly:i("biweekly"),monthly:i("monthly")};try{le&&(o.resetToDefaults=!0);const s=await _("guildsync:save-raffle-bonus-settings",o,3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Could not save raffle bonus settings.");H=s.bonusSettings,Xe=null,le=!1,await ye({silent:!0}),h("bonus-settings","Raffle bonus settings saved.",{ttlMs:p}),l()}catch(s){h("bonus-settings-error",v(s),{ttlMs:p})}}function Ss(){Pt=!0,nt="",l(),Js()}function Vr(){Pt=!1,nt="",l()}function nd(){const t=rd(),e=id(),n=Ft.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${De?"disabled":""}>${De?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(n))} total row${n===1?"":"s"}</span>
        </div>

        ${nt?`<div class="discord-data-error">${c(nt)}</div>`:""}

        <div class="report-results-content">
          ${De&&n===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!De&&n===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${n>0?So("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${n>0?So("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${c(As())}</textarea>
      </div>
    </div>
  `}function rd(){return Ft.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function id(){return Ft.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function So(t,e,n,r){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${c(t)}</h4>
          <p>${c(e)}</p>
        </div>
        <span>${c(String(n.length))} row${n.length===1?"":"s"}</span>
      </div>
      ${n.length>0?od(n):`<div class="roster-history-muted report-section-empty">${c(r)}</div>`}
    </section>
  `}function od(t=Ft){return`
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
              <td>${li(e.rank||"")}</td>
              <td>${c(lr(e.joined))}</td>
              <td>${c(oe(e.purchased_tickets||0))}</td>
              <td class="associate-earliest-deposit-cell">${c(ws(e))}</td>
              <td>${c(_s(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function ws(t){const e=String((t==null?void 0:t.earliest_deposit_summary)||"").trim();if(e)return e;const n=String((t==null?void 0:t.earliest_deposit_date)||"").trim(),r=String((t==null?void 0:t.earliest_deposit_raffle_period)||"").trim();return[n,r].filter(Boolean).join(" | ")}function _s(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function As(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Earliest Deposit / Raffle","Discord Link"]];for(const e of Ft){const n=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([n,e.account_name||"",e.rank||"",lr(e.joined),oe(e.purchased_tickets||0),ws(e),_s(e)])}return t.map(e=>e.map(ur).join("	")).join(`
`)}async function sd(){const t=As();if(await fr(t)){h("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#associateTicketReportTsv");n&&(n.focus(),n.select()),h("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function ad(){Gt=!0,rt="",l(),Ks()}function Wr(){Gt=!1,rt="",l()}function cd(){const t=gn.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${Me?"disabled":""}>${Me?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${rt?`<div class="discord-data-error">${c(rt)}</div>`:""}

        <div class="report-results-content">
          ${Me&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!Me&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?ld(gn):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${c(Es())}</textarea>
      </div>
    </div>
  `}function ld(t=gn){return`
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
              <td data-label="Discord Member" class="discord-rank-audit-member-cell">${c(Ls(e))}</td>
              <td data-label="Discord Rank Role" class="discord-rank-audit-discord-cell">${c(e.discord_rank||"No matching rank role")}</td>
              <td data-label="Linked ESO Account(s)" class="discord-rank-audit-eso-account-cell">${c(e.eso_accounts||"No linked ESO account")}</td>
              <td data-label="ESO Rank" class="discord-rank-audit-eso-rank-cell">${c(e.eso_rank||"None")}</td>
              <td data-label="Issue" class="discord-rank-audit-issue-cell">${c($s(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Ls(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function $s(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function Es(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of gn)t.push([Ls(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",$s(e)]);return t.map(e=>e.map(ur).join("	")).join(`
`)}async function dd(){const t=Es();if(await fr(t)){h("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#discordRankAuditReportTsv");n&&(n.focus(),n.select()),h("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function ud(){Ut=!0,it="",Ht="",l(),Ys(),$.length===0&&!G&&sr({silent:!0})}function jr(){Ut=!1,it="",Ht="",Be="",vt="",Ne="",l()}function fd(){const t=di(),e=oi.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${Te?"disabled":""}>${Te?"Loading...":"Run Again"}</button>
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
            value="${f(Ht)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${Be===""?"selected":""}>All link statuses</option>
            <option value="linked" ${Be==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${Be==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${Be==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${it?`<div class="discord-data-error discord-last-seen-report-error">${c(it)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${Te&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!Te&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?hd(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${c(Ds(t))}</textarea>
      </div>
    </div>
  `}function hd(t=[]){return`
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
            <tr class="discord-last-seen-row ${f(kd(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${f(ut(e).status)}" data-discord-last-seen-search="${f(Rs(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${yd(e)}
                  <span>${c(Nt(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${md(e)}</td>
              <td>${c(ui(e.last_seen))}</td>
              <td>${c(fi(e.last_seen))}</td>
              <td>${c(Jn(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function on(t,e){const n=vt===t,r=n?Ne==="asc"?"\u25B2":"\u25BC":"\u2195",i=n?`${e}: ${Ne==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${n?" active":""}" type="button" data-discord-last-seen-sort="${f(t)}" title="${f(i)}">
      <span>${c(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${c(r)}</span>
    </button>
  `}function di(){const t=[...oi],e=vt,n=Ne;if(!e||!n)return t;const r=n==="desc"?-1:1;return t.sort((i,o)=>{var s,a;if(e==="date"){const d=Number(i.last_seen||0)||0,m=Number(o.last_seen||0)||0;return(d-m)*r}if(e==="days")return(wo(i.last_seen)-wo(o.last_seen))*r;if(e==="action")return Jn(i.last_seen_action).localeCompare(Jn(o.last_seen_action),void 0,{sensitivity:"base"})*r;if(e==="eso"){const d=ut(i),m=ut(o),g={linked:0,candidate:1,unlinked:2},b=((s=g[d.status])!=null?s:9)-((a=g[m.status])!=null?a:9);return b!==0?b*r:d.esoAccountName.localeCompare(m.esoAccountName,void 0,{sensitivity:"base"})*r}return Nt(i).localeCompare(Nt(o),void 0,{sensitivity:"base"})*r})}function pd(t){vt!==t?(vt=t,Ne="asc"):Ne==="asc"?Ne="desc":(vt="",Ne=""),l()}function Nt(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function Rs(t){return[Nt(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,gd(t),ui(t==null?void 0:t.last_seen),fi(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function ut(t){const e=Id(t==null?void 0:t.discord_id),n=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),r=String((e==null?void 0:e.eso_account_name)||"").trim();return n==="linked"&&r?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:r,title:`Linked ESO account: ${r}`}:(n==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&r?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:r,title:`Fuzzy ESO account candidate: ${r}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function md(t){const e=ut(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${f(e.className)}"
      title="${f(e.title)}"
      aria-label="${f(e.label)}"
      role="img"
    ></span>
  `}function gd(t){const e=ut(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function bd(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!n)return"";if(/^https?:\/\//i.test(e))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function yd(t){const e=Nt(t),n=e?e.slice(0,2).toUpperCase():"?",r=bd(t);return r?`<span class="discord-member-avatar"><img src="${f(r)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${c(n)}</span>`}function ui(t){const e=Number(t);if(!e)return"Never";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t||"");const r=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(n).reduce((i,o)=>(i[o.type]=o.value,i),{});return`${r.month}/${r.day}/${r.year} ${r.hour}:${r.minute} ${r.dayPeriod}`}function kd(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const n=(Date.now()-e*1e3)/864e5;return n>30?"discord-last-seen-red":n>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function fi(t){const e=Number(t);if(!e)return"Never";const n=Date.now()-e*1e3;if(!Number.isFinite(n))return"";if(n<0)return"0 days";const r=Math.floor(n/864e5);return`${r} day${r===1?"":"s"}`}function wo(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const n=Date.now()-e*1e3;return Number.isFinite(n)?n<0?0:Math.floor(n/864e5):Number.POSITIVE_INFINITY}function Jn(t){return String(t||"").trim()||"None tracked"}function Ds(t=di()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const n of t){const r=ut(n);e.push([Nt(n),r.label||"",r.esoAccountName||"",ui(n==null?void 0:n.last_seen),fi(n==null?void 0:n.last_seen),Jn(n==null?void 0:n.last_seen_action),(n==null?void 0:n.username)||"",(n==null?void 0:n.discord_id)||""])}return e.map(n=>n.map(ur).join("	")).join(`
`)}async function vd(){const t=di().filter(i=>{const o=be(Ht),s=String(Be||"").trim().toLowerCase(),a=!o||be(Rs(i)).includes(o),d=!s||ut(i).status===s;return a&&d}),e=Ds(t);if(await fr(e)){h("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#discordLastSeenReportTsv");r&&(r.focus(),r.select()),h("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function Sd(){ft=!0,U="",l(),$.length===0&&!G&&sr({silent:!0})}function zr(){ft=!1,or="",Qe="",Sn="",wn="",we=-1,l()}function Ms(t){return[...new Set((Array.isArray($)?$:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function Ts(t,e){return t.map(n=>`<option value="${f(n)}" ${e===n?"selected":""}>${c(n)}</option>`).join("")}function wd(){return Ts(Ms("link_status"),Sn)}function _d(){return Ts(Ms("link_method"),wn)}function Ad(){return`
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
            ${wd()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${wn===""?"selected":""}>All methods</option>
            ${_d()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${Qe===""?"selected":""}>All actions</option>
            <option value="needs-link" ${Qe==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${Qe==="can-unlink"?"selected":""}>Unlink Available</option>
            <option value="can-unblock" ${Qe==="can-unblock"?"selected":""}>Unblock Available</option>
          </select>
        </div>

        ${U?`<div class="discord-data-error member-links-report-error">${c(U)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${Rd()}
        </div>
      </div>
    </div>
  `}function Bs(){var n,r,i,o,s,a;if(!ft)return;(n=document.querySelector("#closeMemberLinksReportButton"))==null||n.addEventListener("click",zr),(r=document.querySelector("#refreshMemberLinksButton"))==null||r.addEventListener("click",()=>sr()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>Cd());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",Dd),t.addEventListener("keydown",Nd)),(o=document.querySelector("#memberLinksReportActionFilter"))==null||o.addEventListener("change",Md),(s=document.querySelector("#memberLinksReportStatusFilter"))==null||s.addEventListener("change",Td),(a=document.querySelector("#memberLinksReportMethodFilter"))==null||a.addEventListener("change",Bd),An(),document.querySelectorAll("[data-accept-member-candidate]").forEach(d=>{d.addEventListener("click",()=>Cs(d.dataset.acceptMemberCandidate||"",d.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(d=>{d.addEventListener("click",()=>Od(d.dataset.unlinkMemberLink||"",d.dataset.unlinkMemberLinkDiscordId||""))}),document.querySelectorAll("[data-unblock-member-auto-link]").forEach(d=>{d.addEventListener("click",()=>Os(d.dataset.unblockMemberAutoLink||"",d.dataset.unblockMemberAutoLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",d=>{d.target===e&&zr()})}function _o(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function Ao(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Ld(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function $d(t){return[...Array.isArray(t)?t:[]].sort((e,n)=>{const r=_o(e)-_o(n);if(r!==0)return r;const i=Ao(e).localeCompare(Ao(n),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((n==null?void 0:n.discord_user_id)||""),void 0,{sensitivity:"base"})})}function Ed(t){const e=Yr(t);let n="";e==="Username"?n=(t==null?void 0:t.discord_username)||"":e==="Global Name"?n=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(n=(t==null?void 0:t.discord_server_nickname)||""),n||(n=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const r=e?` <span class="member-link-report-match-field">(${c(e)})</span>`:"";return`<span class="member-link-report-discord-name">${c(n)}</span>${r}`}function Rd(){return G&&$.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray($)||$.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${$d($).map(e=>{var o;const n=String(e.link_status||"").trim().toLowerCase(),r=String(e.link_method||"").trim().toLowerCase(),i=Ed(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${f(Ld(e))}"
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
                <td class="member-links-confidence-col">${c(String((o=e.match_confidence)!=null?o:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function Ns(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function Lo(t){const e=Ns();if(e.forEach(r=>r.classList.remove("member-links-report-row-active")),e.length===0){we=-1;return}we=Math.max(0,Math.min(t,e.length-1));const n=e[we];n.classList.add("member-links-report-row-active"),n.scrollIntoView({block:"nearest"})}function An(){const t=be(or),e=String(Qe||"").trim().toLowerCase(),n=String(Sn||"").trim().toLowerCase(),r=String(wn||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let o=0;i.forEach(a=>{const d=be(a.dataset.memberLinksReportSearch||""),m=String(a.dataset.memberLinksReportAction||"").trim().toLowerCase(),g=String(a.dataset.memberLinksReportStatus||"").trim().toLowerCase(),b=String(a.dataset.memberLinksReportMethod||"").trim().toLowerCase(),R=(!t||d.includes(t))&&(!e||m===e)&&(!n||g===n)&&(!r||b===r);a.hidden=!R,a.classList.remove("member-links-report-row-active"),R&&(o+=1)});const s=document.querySelector("#memberLinksReportSearchEmpty");s&&(s.hidden=o!==0),we=-1}function Dd(t){or=t.target.value||"",An()}function Md(t){Qe=t.target.value||"",An()}function Td(t){Sn=t.target.value||"",An()}function Bd(t){wn=t.target.value||"",An()}function Nd(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Ns();if(e.length===0)return;if(t.key==="ArrowDown"){const r=we<0?0:we+1;Lo(r>=e.length?e.length-1:r);return}const n=we<0?e.length-1:we-1;Lo(n<0?0:n)}async function sr(t={}){if(!(u!=null&&u.connected)){U="You must be connected to load member links.",l();return}G=!0,U="",t.silent||l();try{const e=await _("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");$=Array.isArray(e.links)?e.links:[]}catch(e){U=v(e)}finally{G=!1,l()}}async function Cd(){if(!(u!=null&&u.connected)||!y.logged_in){U="You must be logged in and connected to run auto-linking.",l();return}G=!0,U="",l();try{const t=await _("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");$=Array.isArray(t.links)?t.links:[],h("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:p})}catch(t){U=v(t)}finally{G=!1,l()}}async function Cs(t,e=""){try{const n=await _("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to accept candidate.");$=Array.isArray(n.links)?n.links:$,h("member-link-accepted",n.message||"Candidate accepted as a link.",{ttlMs:p})}catch(n){U=v(n),h("member-link-accept-error",U,{ttlMs:p})}}async function Os(t,e=""){if(!await ci({title:"Remove Auto-Link Block?",message:`Remove the blocked auto-match record between ${t} and this Discord account? Auto-linking will run immediately and this screen will refresh to show whether the pair linked again.`,confirmLabel:"Unblock",cancelLabel:"Cancel",confirmClass:"danger"}))return!1;G=!0,U="",l();try{const r=await _("guildsync:unblock-member-auto-link",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to remove auto-link block.");$=Array.isArray(r.links)?r.links:$;const i=ae(t),o=String(e||"").trim(),s=r.refreshedPair||$.find(m=>ae(m.eso_account_name)===i&&String(m.discord_user_id||"").trim()===o),a=String((s==null?void 0:s.link_status)||"").trim().toLowerCase(),d=a==="linked"?" It linked again automatically.":a==="candidate"?" It is now showing as a candidate.":" No automatic link was recreated.";return h("member-link-unblocked",`${r.message||"Auto-link block removed."}${d}`,{ttlMs:p}),!0}catch(r){return U=v(r),h("member-link-unblock-error",U,{ttlMs:p}),!1}finally{G=!1,l()}}async function Od(t,e=""){if(!!await ci({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const r=await _("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to unlink member.");$=Array.isArray(r.links)?r.links:$,h("member-link-unlinked",r.message||"Member link removed.",{ttlMs:p})}catch(r){U=v(r)}l()}}function ae(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function ar(t){const e=ae(t);return e?$.filter(n=>ae(n.eso_account_name)===e):[]}function cr(t){const e=String(t||"").trim();return e?$.filter(n=>String(n.discord_user_id||"").trim()===e):[]}function Is(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const n=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(n.length>0){const i=n.find(s=>String(s.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const o=n.find(s=>String(s.link_method||"").trim().toLowerCase()==="exact");return o||n[0]}const r=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return r||e[0]}function Id(t){return Is(cr(t))}function qd(t){return`${ae(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function hi(){return A?A.mode==="discord-to-eso"?cr(A.discordUserId):ar(A.esoAccountName):[]}function xd(t){const e=String(t||"").trim(),n=j.find(r=>String(r.discord_id||"").trim()===e);return n&&(n.server_nickname||n.global_name||n.username||n.discord_id)||e}function qs(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?cr(t.discordUserId):ar(t.esoAccountName),r=Is(n),i=String((r==null?void 0:r.link_status)||"").trim().toLowerCase(),o=n.filter(a=>String(a.link_status||"").trim().toLowerCase()==="linked").length,s=n.filter(a=>String(a.link_status||"").trim().toLowerCase()==="candidate").length;return o>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?o===1?r.eso_account_name:`${o} ESO accounts`:o===1?r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member":`${o} Discord accounts`}`}:i==="candidate"||s>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?r.eso_account_name:r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member"}`}:i==="blocked"||Number((r==null?void 0:r.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function xs(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,r=qs(t);return`
    <button
      class="member-link-status-dot member-link-status-${f(r.className)}"
      type="button"
      title="${f(r.title)}"
      aria-label="${f(r.label)}"
      data-open-member-link-dialog="${f(e)}"
      data-member-link-value="${f(n||"")}"
    ></button>
  `}function Pd(){return A?A.mode==="discord-to-eso"?xd(A.discordUserId):A.esoAccountName||"":""}function Ps(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function Yr(t){const e=Ps((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const n=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(n.includes("discord_username")||n.includes("username"))return"Username";if(n.includes("discord_display_name")||n.includes("global")||n.includes("display"))return"Global Name";if(n.includes("discord_server_nickname")||n.includes("server")||n.includes("nickname"))return"Server Nickname";const r=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(r==="exact"||r==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",o=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let s=null;for(const a of o){const d=Fd(i,a.value);(!s||d>s.score)&&(s={...a,score:d})}if(s&&s.score>0)return s.field}return""}function be(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function Fd(t,e){const n=be(t),r=be(e);if(!n||!r)return 0;if(n===r)return 100;if((n.includes(r)||r.includes(n))&&Math.min(n.length,r.length)>=4)return 88;const i=Math.abs(n.length-r.length),o=[...n].findIndex((a,d)=>a!==r[d]),s=o===-1?Math.min(n.length,r.length):o;return Math.max(0,Math.min(75,Math.round(s*10-i*3)))}function Gd(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function Ud(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function Hd(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),n=Gd(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${c(n)}</span>`}function Vd(t){var a;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",n=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",r=String(t.link_status||"").trim().toLowerCase(),s=r==="linked"?`<button
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
        <div><span>Status:</span> ${Hd(t)} \xB7 ${c(Ud(t.link_method))} \xB7 ${c(String((a=t.match_confidence)!=null?a:""))}% \xB7 ${c(n)}</div>
        ${Yr(t)?`<div><span>Matched:</span> Matched on ${c(Yr(t))}</div>`:""}
      </div>
      ${s}
    </div>
  `}function Wd(){const t=hi();return t.length?[...t].sort((n,r)=>{var d,m;const i=String(n.link_status||"").trim().toLowerCase(),o=String(r.link_status||"").trim().toLowerCase(),s={linked:0,candidate:1,blocked:2,unlinked:3},a=((d=s[i])!=null?d:9)-((m=s[o])!=null?m:9);return a!==0?a:Number(r.match_confidence||0)-Number(n.match_confidence||0)}).map(n=>Vd(n)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function jd(){if(Mt)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if($e)return`<div class="discord-data-error">${c($e)}</div>`;if(!Array.isArray(ot)||ot.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(hi().map(n=>qd(n))),e=[...ot].filter(n=>{const r=(A==null?void 0:A.mode)==="discord-to-eso"?`${ae(n.account_name)}::${String(A.discordUserId||"").trim()}`:`${ae(A==null?void 0:A.esoAccountName)}::${String(n.discord_id||"").trim()}`;return!t.has(r)}).sort((n,r)=>{const i=Number(r.confidence||0)-Number(n.confidence||0);return i!==0?i:$o(n).localeCompare($o(r),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(n=>zd(n)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function $o(t){return((A==null?void 0:A.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function zd(t,e={}){var b,k,S;const n=(A==null?void 0:A.mode)||"",r=n==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=Ps(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),o=n==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),s=[o,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),a=n==="discord-to-eso"?t.account_name:t.discord_id,d=e.disabled===!0,m=[r,o,s,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),g=[r,s,`${(b=t.confidence)!=null?b:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${f(a||"")}" data-member-link-option-search="${f(m)}" title="${f(g)}" ${d?"disabled":""}>
      <span class="member-link-option-name" title="${f(r||"")}">${c(r||"")}</span>
      <span class="member-link-option-subtitle" title="${f(s||"")}">${c(s||"")}</span>
      <span class="member-link-option-confidence" title="${f(String((k=t.confidence)!=null?k:0))}%">${c(String((S=t.confidence)!=null?S:0))}%</span>
    </button>
  `}function Yd(){const t=(A==null?void 0:A.mode)||"",e=Pd(),n=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
            ${Wd()}
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
            ${jd()}
          </section>
        </div>

      </div>
    </div>
  `}async function Fs(t,e){if(!(u!=null&&u.connected)||!L()){h("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:p});return}Ye=!0,A=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},ot=[],Mt=!0,$e="",_n="",de=-1,l();try{if(!Array.isArray($)||$.length===0){const i=await _("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&($=Array.isArray(i.links)?i.links:[])}const r=await _("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load link suggestions.");ot=Array.isArray(r.options)?r.options:[]}catch(n){$e=v(n)}finally{Mt=!1,l()}}function Ct(){document.removeEventListener("keydown",Kr),Ye=!1,A=null,ot=[],Mt=!1,$e="",_n="",de=-1,l()}function Gs(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function Eo(t){const e=Gs();if(e.forEach(r=>r.classList.remove("member-link-option-row-active")),e.length===0){de=-1;return}de=Math.max(0,Math.min(t,e.length-1));const n=e[de];n.classList.add("member-link-option-row-active"),n.scrollIntoView({block:"nearest"})}function Us(){const t=be(_n),e=[...document.querySelectorAll(".member-link-option-row")];let n=0;e.forEach(i=>{const o=be(i.dataset.memberLinkOptionSearch||i.textContent||""),s=!t||o.includes(t);i.hidden=!s,i.classList.remove("member-link-option-row-active"),s&&(n+=1)});const r=document.querySelector("#memberLinkSuggestionSearchEmpty");r&&(r.hidden=n!==0),de=-1}function Kd(t){_n=t.target.value||"",Us()}function Jd(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Gs();if(e.length===0)return;if(t.key==="ArrowDown"){const r=de<0?0:de+1;Eo(r>=e.length?e.length-1:r);return}const n=de<0?e.length-1:de-1;Eo(n<0?0:n)}function Kr(t){!Ye||t.key==="Escape"&&(t.preventDefault(),Ct())}async function Qd(t){if(!(!A||!t))try{const e=A.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:A.discordUserId}:{esoAccountName:A.esoAccountName,discordUserId:t},n=await _("guildsync:manual-link-member",e,3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to link members.");$=Array.isArray(n.links)?n.links:$,h("member-link-saved",n.message||"Member link saved.",{ttlMs:p}),Ct()}catch(e){$e=v(e),l()}}async function Xd(t,e=""){await Cs(t,e),Ct()}async function Hs(){if(!!A){Mt=!0,$e="",l();try{const t=A.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:A.discordUserId}:{mode:"eso-to-discord",accountName:A.esoAccountName},e=await _("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");ot=Array.isArray(e.options)?e.options:[]}catch(t){$e=v(t)}finally{Mt=!1,l()}}}async function Zd(t="",e=""){const n=hi().find(i=>ae(i.eso_account_name)===ae(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!n||!await ci({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await _("guildsync:manual-unlink-member",{esoAccountName:n.eso_account_name,discordUserId:n.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");$=Array.isArray(i.links)?i.links:$,h("member-link-unlinked",i.message||"Member link removed.",{ttlMs:p}),await Hs()}catch(i){$e=v(i),l()}}async function eu(t="",e=""){await Os(t,e)&&await Hs()}function Vs(){var n;if(!Ye)return;document.removeEventListener("keydown",Kr),document.addEventListener("keydown",Kr),(n=document.querySelector("#closeMemberLinkDialogButton"))==null||n.addEventListener("click",Ct);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",Kd),t.addEventListener("keydown",Jd),Us()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(r=>{r.addEventListener("click",()=>Zd(r.dataset.unlinkEsoAccount||"",r.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-unblock-dialog-member-auto-link]").forEach(r=>{r.addEventListener("click",()=>eu(r.dataset.unblockEsoAccount||"",r.dataset.unblockDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(r=>{r.addEventListener("click",()=>Qd(r.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(r=>{r.addEventListener("click",()=>Xd(r.dataset.acceptDialogMemberCandidate||"",r.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",r=>{r.target===e&&Ct()})}function Ws(){var e,n,r;if(!Pt)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",Vr),(n=document.querySelector("#rerunAssociateTicketReportButton"))==null||n.addEventListener("click",()=>Js()),(r=document.querySelector("#copyAssociateTicketReportGridButton"))==null||r.addEventListener("click",()=>sd());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Vr()})}function js(){var e,n,r;if(!Gt)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",Wr),(n=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||n.addEventListener("click",()=>Ks()),(r=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||r.addEventListener("click",()=>dd());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Wr()})}function zs(){var r,i,o;if(!Ut)return;(r=document.querySelector("#closeDiscordLastSeenReportButton"))==null||r.addEventListener("click",jr),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>Ys()),(o=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||o.addEventListener("click",()=>vd()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(s=>{s.addEventListener("click",()=>pd(s.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",tu);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",nu),pi();const n=document.querySelector(".discord-last-seen-report-overlay");n&&n.addEventListener("click",s=>{s.target===n&&jr()})}function tu(t){Ht=t.target.value||"",pi()}function nu(t){Be=t.target.value||"",pi()}function pi(){const t=be(Ht),e=String(Be||"").trim().toLowerCase(),n=[...document.querySelectorAll("[data-discord-last-seen-row]")];let r=0;n.forEach(o=>{const s=be(o.dataset.discordLastSeenSearch||o.textContent||""),a=String(o.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),g=(!t||s.includes(t))&&(!e||a===e);o.hidden=!g,g&&(r+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=r!==0)}async function Ys(){if(!(u!=null&&u.connected)||!L()){it="You must be logged in and connected to run this report.",l();return}Te=!0,it="",l();try{const t=await _("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");j=Li(t.members),rr=$i(t.roles),oi=[...j]}catch(t){it=v(t)}finally{Te=!1,l(),B("discordLastSeenReportSearchInput")}}async function Ks(){if(!(u!=null&&u.connected)||!L()){rt="You must be logged in and connected to run this report.",l();return}Me=!0,rt="",l();try{const t=await _("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");gn=Array.isArray(t.rows)?t.rows:[]}catch(t){rt=v(t)}finally{Me=!1,l()}}async function Js(){if(!(u!=null&&u.connected)||!L()){nt="You must be logged in and connected to run this report.",l();return}De=!0,nt="",l();try{const t=await _("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Ft=Array.isArray(t.rows)?t.rows:[]}catch(t){nt=v(t)}finally{De=!1,l()}}function _t(){const t=String(zt||"").trim().toLowerCase(),e={account_name:"Anonymous",rank:"Manual Entry"},n=new Set(["anonymous"]),r=X.filter(i=>String(i.account_name||"").trim()).filter(i=>{const s=String(i.account_name||"").trim().toLowerCase();return!s||n.has(s)||t&&!s.includes(t)?!1:(n.add(s),!0)}).slice().sort((i,o)=>{const s=String(i.account_name||"").toLowerCase(),a=String(o.account_name||"").toLowerCase(),d=t&&s.startsWith(t)?0:1,m=t&&a.startsWith(t)?0:1;return d!==m?d-m:s.localeCompare(a)}).slice(0,19);return[e,...r]}function Qs(t=_t()){const e=String(E.accountName||"").trim();return t.length===0?'<div class="roster-history-muted manual-ticket-no-matches">No matching guild members found.</div>':t.map((n,r)=>`
        <button class="roster-history-match${r===P||n.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${f(n.account_name)}" role="option" aria-selected="${r===P||n.account_name===e?"true":"false"}">
          <span>${c(n.account_name)}</span>
          <strong>${c(n.rank||"")}</strong>
          ${r===P?"<small>Enter</small>":""}
        </button>
      `).join("")}function Xs(){document.querySelectorAll("[data-manual-ticket-account]").forEach(t=>{t.addEventListener("mousedown",e=>{e.preventDefault()}),t.addEventListener("click",()=>{Zs(t.dataset.manualTicketAccount||"")})})}function $r(){const t=document.querySelector("#manualTicketMatchList");if(!t)return;const e=_t();P>=e.length&&(P=e.length>0?e.length-1:-1),t.innerHTML=Qs(e),Xs()}function Zs(t){const e=String(t||"").trim();E.accountName=e,zt=e,re=!1,P=-1,Y="",l()}function B(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const n=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(n,n)},0)}function ru(){const t=re?_t():[],e=String(E.accountName||"").trim();return`
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
              <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(zt)}" autocomplete="off" />
            </label>

            ${re?`
              <div id="manualTicketMatchList" class="roster-history-match-list manual-ticket-match-list" role="listbox" aria-label="Matching guild members">
                ${Qs(t)}
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
  `}function ea(){var o,s,a,d,m,g;if(!Le)return;(o=document.querySelector("#closeManualBiweeklyTicketButton"))==null||o.addEventListener("click",()=>{Le=!1,l()});const t=document.querySelector("#manualTicketAccountSearchInput");if(t){const b=({rerender:k=!1}={})=>{if(re=!0,P=_t().length>0?0:-1,k){l(),B("manualTicketAccountSearchInput");return}$r()};t.addEventListener("focus",()=>{re||b({rerender:!0})}),t.addEventListener("click",()=>{re||b({rerender:!0})}),t.addEventListener("input",k=>{zt=k.target.value||"",E.accountName="",re=!0,P=_t().length>0?0:-1,$r()}),t.addEventListener("keydown",k=>{if(k.key==="Escape")return;if(!re){(k.key==="ArrowDown"||k.key==="ArrowUp")&&(k.preventDefault(),b({rerender:!0}));return}const S=_t();if(k.key==="ArrowDown"||k.key==="ArrowUp"){if(S.length===0)return;k.preventDefault();const q=k.key==="ArrowDown"?1:-1;P=((P<0?0:P)+q+S.length)%S.length,$r();return}if(k.key!=="Enter")return;k.preventDefault();const D=S[P>=0?P:0];D!=null&&D.account_name&&Zs(D.account_name)})}Xs(),(s=document.querySelector("#manualTicketNoteInput"))==null||s.addEventListener("input",b=>{E.note=b.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(b=>{b.addEventListener("click",()=>{const k=String(b.dataset.manualTicketType||"").trim().toLowerCase();E.ticketType=k==="monthly"?"monthly":"biweekly",l()})}),(a=document.querySelector("[data-manual-ticket-toggle]"))==null||a.addEventListener("click",()=>{E.ticketType=E.ticketType==="monthly"?"biweekly":"monthly",l()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",b=>{const k=String(b.target.value||"").replace(/\D/g,"");b.target.value!==k&&(b.target.value=k),E.goldValue=k});const n=document.querySelector("#manualTicketCountInput");n==null||n.addEventListener("input",b=>{const k=String(b.target.value||"").replace(/\D/g,"");b.target.value!==k&&(b.target.value=k),E.tickets=k});const r=b=>{const k=Number(E.tickets)||0,S=Math.max(0,k+b);E.tickets=String(S),n&&(n.value=E.tickets,n.focus())};(d=document.querySelector("#manualTicketCountUpButton"))==null||d.addEventListener("click",()=>r(1)),(m=document.querySelector("#manualTicketCountDownButton"))==null||m.addEventListener("click",()=>r(-1)),(g=document.querySelector("#saveManualBiweeklyTicketButton"))==null||g.addEventListener("click",()=>iu());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",b=>{b.target===i&&(Le=!1,l())})}async function iu(){const t=String(E.accountName||"").trim(),e=String(E.note||"").trim(),n=String(E.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",r=Number(String(E.goldValue||"").trim()||0),i=Number(String(E.tickets||"").trim()||0);if(re){Y="Select a matching guild member or Anonymous from the list before saving.",l(),B("manualTicketAccountSearchInput");return}if(!t){Y="Select a matching guild member or Anonymous from the list before saving.",l(),B("manualTicketAccountSearchInput");return}if(!Number.isFinite(r)||r<0){Y="Gold value must be zero or greater.",l();return}if(!Number.isFinite(i)||i<0){Y="Tickets must be zero or greater.",l();return}const o=t.toLowerCase()==="anonymous";if(o&&Math.floor(i)>0){Y="Anonymous cannot be awarded tickets. Use 0 tickets and enter a gold value.",l();return}if(Math.floor(r)===0&&Math.floor(i)===0){Y=o?"Enter a gold value for Anonymous when tickets are 0.":"Enter gold or tickets. Both cannot be zero.",l();return}jn=!0,Y="",l();try{const s=await _("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:n,gold_value:Math.floor(r),tickets:Math.floor(i)},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to add manual entry.");Le=!1,E={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},zt="",P=-1,re=!1,await ye({silent:!0}),h("manual-ticket-added",s.message||"Manual entry added.",{ttlMs:p})}catch(s){Y=v(s)}finally{jn=!1,l()}}async function ou(t=""){const e=String(t||"").trim();if(!!e){xt=!0,mn=e,xe=[],Wn=!0,tt=!1,Pe="",Et="",l();try{const n=await _("guildsync:request-roster-member-notes",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster notes.");xe=Array.isArray(n.notes)?n.notes:[]}catch(n){Pe=v(n)}finally{Wn=!1,l()}}}function Jr(){xt=!1,mn="",xe=[],Wn=!1,tt=!1,Pe="",Et="",l()}function su(){var n,r;if(!xt)return;(n=document.querySelector("#closeRosterNotesButton"))==null||n.addEventListener("click",Jr);const t=document.querySelector("#rosterNotesNewNote");t&&t.addEventListener("input",i=>{Et=i.target.value||""}),(r=document.querySelector("#saveRosterNoteButton"))==null||r.addEventListener("click",()=>au());const e=document.querySelector(".roster-notes-overlay");e&&e.addEventListener("click",i=>{i.target===e&&Jr()})}async function au(){const t=String(Et||"").trim();if(!t){Pe="Enter a note before saving.",l();return}tt=!0,Pe="",l();try{const e=await _("guildsync:add-roster-member-note",{account_name:mn,note:t},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to save roster note.");e.note&&(xe=[...xe,e.note]),Et="";const n=X.find(r=>ae(r.account_name)===ae(mn));n&&(n.note_count=Number(n.note_count||0)+1)}catch(e){Pe=v(e)}finally{tt=!1,l()}}function ta(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>Ln());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{$t=!0,_e="",l()});const n=document.querySelector("#rosterMemberSearch");n&&(n.addEventListener("input",s=>{Vn=s.target.value||"",Pr=s.target.selectionStart,Fr=s.target.selectionEnd,O=-1,l({restoreRosterSearchFocus:!0})}),n.addEventListener("keydown",cu)),document.querySelectorAll("[data-roster-sort-column]").forEach(s=>{s.addEventListener("click",()=>{Gl(s.dataset.rosterSortColumn||"account_name")})});const r=document.querySelector("#rosterRankFilter");r&&r.addEventListener("change",s=>{const a=String(s.target.value||"").trim();a&&(et.add(a),O=-1,l())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(s=>{s.addEventListener("click",()=>{const a=s.dataset.removeRosterRankFilter||"";et.delete(a),O=-1,l()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",s=>{const a=String(s.target.value||"").trim();a&&(kt.add(a),O=-1,l())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(s=>{s.addEventListener("click",()=>{const a=s.dataset.removeRosterLinkStatusFilter||"";kt.delete(a),O=-1,l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(s=>{s.addEventListener("click",()=>Fs(s.dataset.openMemberLinkDialog||"",s.dataset.memberLinkValue||""))}),document.querySelectorAll("[data-open-roster-notes]").forEach(s=>{s.addEventListener("click",()=>ou(s.dataset.openRosterNotes||""))}),su();const o=document.querySelector("#clearRosterFiltersButton");o&&o.addEventListener("click",()=>{Vn="",et.clear(),kt.clear(),Se="",V="",O=-1,l()}),lu()}function cu(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){O=-1;return}t.preventDefault(),t.key==="ArrowDown"?O=O<0?0:Math.min(O+1,e.length-1):t.key==="ArrowUp"&&(O=O<0?e.length-1:Math.max(O-1,0)),e.forEach((r,i)=>{r.classList.toggle("roster-search-active-row",i===O)});const n=e[O];n&&typeof n.scrollIntoView=="function"&&n.scrollIntoView({block:"nearest",inline:"nearest"})}function lu(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{$t=!1,l()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",n=>{if(pn=n.target.value||"",ee=-1,!pn.trim()){clearTimeout(Lr),_e="",J=[],We="",Ie=[],qe=!1,l(),B("rosterHistorySearchInput");return}clearTimeout(Lr),Lr=setTimeout(()=>{hu({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(J.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;ee=((ee<0?0:ee)+i+J.length)%J.length,l(),B("rosterHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=J[ee>=0?ee:0];r!=null&&r.account_name&&Do(r.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(n=>{n.addEventListener("click",()=>{Do(n.dataset.rosterHistoryAccount||"")})})}function na(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{Rt=!1,l()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",n=>{Re=n.target.value||"",te=-1,Ke+=1;const r=Ke;if(clearTimeout(bo),!Re.trim()){Ae="",Q=[],Dt="",lt="",Fe=[],Ge=!1,l(),B("discordHistorySearchInput");return}bo=setTimeout(()=>{du({auto:!0,keepFocus:!0,generation:r})},ml)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(Q.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;te=((te<0?0:te)+i+Q.length)%Q.length,l(),B("discordHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=Q[te>=0?te:0];r!=null&&r.discord_id&&Ro(r.discord_id,Hr(r))})),document.querySelectorAll("[data-discord-history-id]").forEach(n=>{n.addEventListener("click",()=>{Ro(n.dataset.discordHistoryId||"",n.dataset.discordHistoryName||"")})})}async function du(t={}){const e=Number.isInteger(t.generation)?t.generation:++Ke,n=Re.trim();if(e===Ke){if(!n){Ae="",Q=[],te=-1,Dt="",lt="",Fe=[],Ge=!1,l(),t.keepFocus&&B("discordHistorySearchInput");return}Ge=!0,Ae="",Q=[],te=-1,Dt="",lt="",Fe=[],l(),t.keepFocus&&B("discordHistorySearchInput");try{const r=await _("guildsync:request-discord-member-history",{query:n},3e4);if(e!==Ke||n!==Re.trim())return;if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search Discord member history.");Q=uu(r.matches),te=Q.length>0?0:-1}catch(r){if(e!==Ke||n!==Re.trim())return;Ae=v(r)}finally{if(e!==Ke||n!==Re.trim())return;Ge=!1,l(),t.keepFocus&&B("discordHistorySearchInput")}}}async function Ro(t,e="",n={}){const r=String(t||"").trim();if(!!r){Dt=r,lt=String(e||r).trim(),Re=lt,Fe=[],Ge=!0,Ae="",l();try{const i=await _("guildsync:request-discord-member-history-events",{discord_id:r},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");Fe=fu(i.events)}catch(i){Ae=v(i)}finally{Ge=!1,n.keepLoading||l()}}}function uu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function fu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,o,s,a,d,m,g,b,k;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((r=(n=e.old_value)!=null?n:e.oldValue)!=null?r:"").trim(),new_value:String((o=(i=e.new_value)!=null?i:e.newValue)!=null?o:"").trim(),event_timestamp:(d=(a=(s=e.event_timestamp)!=null?s:e.eventTimestamp)!=null?a:e.timestamp)!=null?d:"",event_datetime:(g=(m=e.event_datetime)!=null?m:e.eventDatetime)!=null?g:"",initiator:String((k=(b=e.initiator)!=null?b:e.initiatorName)!=null?k:"").trim(),source:String(e.source||"").trim()}}):[]}async function hu(t={}){const e=pn.trim();if(!e){_e="",J=[],ee=-1,We="",Ie=[],qe=!1,l(),t.keepFocus&&B("rosterHistorySearchInput");return}qe=!0,_e="",J=[],ee=-1,We="",Ie=[],l(),t.keepFocus&&B("rosterHistorySearchInput");try{const n=await _("guildsync:request-roster-rank-history",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search roster rank history.");J=pu(n.matches),ee=J.length>0?0:-1}catch(n){_e=v(n)}finally{qe=!1,l(),t.keepFocus&&B("rosterHistorySearchInput")}}async function Do(t,e={}){const n=String(t||"").trim();if(!!n){We=n,pn=n,Ie=[],qe=!0,_e="",l();try{const r=await _("guildsync:request-roster-stream-history",{account_name:n},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load roster stream history.");Ie=mu(r.events)}catch(r){_e=v(r)}finally{qe=!1,e.keepLoading||l()}}}function pu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function mu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(r=(n=e.timestamp)!=null?n:e.timestampS)!=null?r:"",officer:String(e.officer||"").trim()}}):[]}function ra(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(n=e.joined)!=null?n:"",note_count:Number((i=(r=e.note_count)!=null?r:e.noteCount)!=null?i:0)||0}}).sort((e,n)=>e.account_name.localeCompare(n.account_name)):[]}function gu(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function lr(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function mi(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function bu(t={}){X=ra(t.members),Hn=t.last_refresh||new Date().toISOString(),M==="eso-members"&&l(),h("roster-data-updated",`Roster data updated. Loaded ${X.length} member record${X.length===1?"":"s"}.`,{ttlMs:p})}async function Ln(t={}){if(!!(u!=null&&u.connected)){Ve=!0,l();try{const e=await _("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");X=ra(e.members),Hn=e.last_refresh||Hn,t.silent||h("roster-data-loaded",`Loaded ${X.length} roster member${X.length===1?"":"s"}.`,{ttlMs:p})}catch(e){h("roster-data-error",v(e),{ttlMs:p})}finally{Ve=!1,l()}}}async function yu(t={}){var e;if(!!L()){if(!(u!=null&&u.connected)){h("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}Ve=!0,l();try{const n=await Wc(t);if(!(n!=null&&n.ok)){h("roster-data-pending",(n==null?void 0:n.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:p});return}const r={local_upload_id:ia(),authenticated_username:ce(),authenticated_discord_user_id:((e=y==null?void 0:y.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await sa(r)}catch(i){throw ku(r),i}await Ln({silent:!0})}catch(n){h("roster-data-error",v(n),{ttlMs:p})}finally{Ve=!1,l()}}}function ia(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function gi(){try{const t=window.localStorage.getItem(rs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function oa(t){window.localStorage.setItem(rs,JSON.stringify(Array.isArray(t)?t:[]))}function ku(t){const e=String((t==null?void 0:t.local_upload_id)||ia()),n=gi().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),oa(n),h("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function vu(t){const e=gi().filter(n=>(n==null?void 0:n.local_upload_id)!==t);oa(e)}async function Su(){if(wr||!(u!=null&&u.connected)||!L())return;const t=gi();if(t.length!==0){wr=!0;try{for(const e of t){if(!(u!=null&&u.connected)||!L())return;await sa(e),vu(e.local_upload_id)}}catch(e){h("roster-data-pending-error",`Pending roster upload retry failed: ${v(e)}`,{ttlMs:p})}finally{wr=!1}}}async function sa(t){if(!(u!=null&&u.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await _("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const n=await Yc(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return h("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:p}),e}async function wu(t={}){var e,n;if(!!L()){if(!(u!=null&&u.connected)){h("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}try{const r=await Hc(t);if(!(r!=null&&r.ok)){h("applications-data-info",(r==null?void 0:r.message)||"No application records were found to process.",{ttlMs:p});return}if((Array.isArray((e=r==null?void 0:r.data)==null?void 0:e.records)?r.data.records:[]).length===0){h("applications-data-info",`No application records were found in ${r.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:p});return}const o={local_upload_id:aa(),authenticated_username:ce(),authenticated_discord_user_id:((n=y==null?void 0:y.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await la(o)}catch(s){throw _u(o),s}}catch(r){h("applications-data-error",v(r),{ttlMs:p})}}}function aa(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function bi(){try{const t=window.localStorage.getItem(is),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function ca(t){window.localStorage.setItem(is,JSON.stringify(Array.isArray(t)?t:[]))}function _u(t){const e=String((t==null?void 0:t.local_upload_id)||aa()),n=bi().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),ca(n),h("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Au(t){const e=bi().filter(n=>(n==null?void 0:n.local_upload_id)!==t);ca(e)}async function Lu(){if(_r||!(u!=null&&u.connected)||!L())return;const t=bi();if(t.length!==0){_r=!0;try{for(const e of t){if(!(u!=null&&u.connected)||!L())return;await la(e),Au(e.local_upload_id)}}catch(e){h("applications-data-pending-error",`Pending application upload retry failed: ${v(e)}`,{ttlMs:p})}finally{_r=!1}}}async function la(t){var i;if(!(u!=null&&u.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return h("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:p}),{ok:!0,sent_count:0,skipped_empty:!0};let n=0;for(const o of e){const s=await _("guildsync:eso-guild-application-message",{...t,record:o,recordKey:(o==null?void 0:o.recordKey)||"",message:$u(o)},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Backend rejected the application data payload. Application data was not cleared.");n+=1}const r=await jc(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return h("applications-data-sent",`Sent ${n} application record${n===1?"":"s"} to GuildSync backend.`,{ttlMs:p}),{ok:!0,sent_count:n}}function $u(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),n=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",r=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",o=String(t.applicationText||"_No application text captured._"),s=Object.entries(t).filter(([a])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(a)).map(([a,d])=>`**${a}:** ${Eu(d)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${n}** ${r} an application from **${i}**.`,"","**Application text:**","```",o.slice(0,1500),"```",s.length>0?"":null,s.length>0?"**Full captured record fields:**":null,...s].filter(a=>a!==null).join(`
`)}function Eu(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function Ru(t={}){await wu(t)}function Du(){const t=Qr(T),e=cf(t,T),n=T!=="other",r=n&&Yt(T);return`
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
          ${qu()}
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${c(Ea(ds))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${je||!L()?"disabled":""} ${L()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${je?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${Er("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${Er("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${Er("other","?","Other","All other deposits")}
        </div>

        ${Iu(T)}

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
              ${t.length>0?t.map(i=>df(i,n,r)).join(""):uf(n,r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${c(At(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${T==="monthly"?`<div>Raffle Pot: <strong>${c(At(Math.floor(e.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${T==="biweekly"?`<div>Raffle Pot: <strong>${c(At(ga(e.amount)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${T==="biweekly"?`<div>Draws: <strong>${c(String(lf(e.amount)))}</strong></div>`:""}
          ${n?`<div>Purchased: <strong>${c(oe(e.purchased))}</strong></div>${r?`<div>Bonus: <strong>${c(oe(e.bonus))}</strong></div>`:""}<div>Total Tickets: <strong>${c(oe(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${st?Nu(Qr(se)):""}
    </div>
  `}function Mu(){return`
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
            <input id="bankingHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" autocomplete="off" placeholder="Start typing part of an account name..." value="${f(dt)}" />
          </label>
          ${Tu()}
        </div>

        ${pe?`<div class="discord-data-error">${c(pe)}</div>`:""}

        <div class="banking-history-results">
          <div class="roster-history-section-title">Banking History${fe?`: ${c(fe)}`:""}${fe?`<span class="banking-history-count">${c(String(ie.length))} record${ie.length===1?"":"s"} found</span>`:""}</div>
          ${Bu()}
        </div>
      </div>
    </div>
  `}function Tu(){return dt.trim()?he&&F.length===0&&!fe?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">Searching...</div></div>':F.length===0&&!fe?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">No matching banking names found.</div></div>':F.length===0?"":`
    <div class="banking-history-autocomplete" role="listbox" aria-label="Banking history matches">
      ${F.map((t,e)=>`
        <button class="banking-history-autocomplete-option${e===ne?" is-selected":""}" type="button" data-banking-history-account="${f(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <small>${c(String(Number(t.record_count||t.recordCount||0)||0))} record${Number(t.record_count||t.recordCount||0)===1?"":"s"}</small>
        </button>
      `).join("")}
    </div>
  `:""}function Bu(){const t=ie.some(e=>e.bonus_enabled);return fe?he&&ie.length===0?'<div class="roster-history-muted">Loading banking history...</div>':ie.length===0?'<div class="roster-history-muted">No banking history found for this account.</div>':`
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
          ${ie.map(e=>{var n,r,i,o,s;return`
            <tr>
              <td>${c(Qu((i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:""))}</td>
              <td>${c(Xu(e.transaction_type||e.type||""))}</td>
              <td style="text-align:right;">${c(Zu((s=(o=e.deposit_amount)!=null?o:e.depositAmount)!=null?s:e.amount))} \u{1FA99}</td>
              <td style="text-align:right;">${c(Rr(e.purchased_tickets))}</td>
              ${t?`<td style="text-align:right;">${e.bonus_enabled?`${c(oe(e.bonus_percent))}%`:""}</td><td style="text-align:right;">${e.bonus_enabled?c(Rr(e.bonus_tickets)):""}</td>`:""}
              <td style="text-align:right;">${c(Rr(e.total_tickets))}</td>
              <td class="banking-history-note-cell">${c(e.note||"")}</td>
            </tr>
          `}).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see banking history.</div>'}function Nu(t){const e=Yt(se);return`
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
              ${t.length>0?t.map(n=>Cu(n)).join(""):Ou()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${c(ha(t))}</textarea>
      </div>
    </div>
  `}function Cu(t){const e=Yt(se);return`
    <tr>
      <td>${c(t.displayName||"")}</td>
      <td>${c(String(wi(t,se)))}</td>
      <td>${c(String(t.purchasedTickets))}</td>
      ${e?`<td>${c(String(t.bonusPercent))}%</td><td>${c(String(t.bonusTickets))}</td>`:""}
      <td>${c(String(t.totalTickets))}</td>
      <td>${c(t.note||"")}</td>
    </tr>
  `}function Ou(){return`
    <tr>
      <td class="bank-empty-row" colspan="${Yt(se)?7:5}">No deposits to export for ${c(me(se))}.</td>
    </tr>
  `}function Iu(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=vi(t),n=Xn(t),r=n<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${f(me(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${c(me(t))} Raffle Period ${n===0?"(Current)":`(${Math.abs(n)} period${Math.abs(n)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${c(xn(e.salesStart))} through ${c(xn(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${c(xn(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${r?"":"disabled"} aria-label="Next ${f(me(t))} raffle period">\u203A</button>
    </div>
  `}function Er(t,e,n,r){const i=T===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${f(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${c(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${c(n)}</span>
        <span class="bank-section-subtitle">${c(r)}</span>
      </span>
    </button>
  `}function qu(){if(!L())return"";const t=dr(),e=$n(),n=da(),r=t>0,i=e>0,o=n>0;if(!r&&!i&&!o)return"";let s="",a="",d=!1;r?(s=`Check Out ${t} Deposit Mail`,a="checkout"):i?(d=!0,mt?s=`Writing ${e} Pending Mail`:W.running?s=`${e} Mail Waiting for ESO Closure`:(Sa("render-pending-mail-button"),s=`${e} Mail Writing to Disk`)):(d=!0,s=`${n} Mail Ready to Send`);const m=r?"Check out new deposit mail. GuildSync will immediately try to write it, or hold it until ESO closes.":i?"Deposit mail is already checked out and will be written automatically after ESO closes.":"Deposit mail has been written to ESO SavedVariables and is ready for ESO to send it and write acknowledgements.",g=Ir||mt,b=W.running?"ESO Running":"ESO Not Running",k=W.running?"eso-running":"eso-not-running";return`
    <button id="checkoutDepositMailButton" class="${`bank-export-button deposit-mail-button${d?" deposit-mail-status-only":""}`}" type="button" data-deposit-mail-action="${f(a)}" ${d||g?'aria-disabled="true"':""} title="${f(W.message||m)}" aria-label="${f(`${s}. ${m}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${c(s)}</span>
      <span aria-hidden="true">(</span><span class="deposit-mail-eso-status ${k}" aria-hidden="true">${c(b)}</span><span aria-hidden="true">)</span>
    </button>
  `}function $n(){return En().reduce((t,e)=>t+Kt(e.records).length,0)}function xu(){const t=(y==null?void 0:y.user)||{};return new Set([ce(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function Pu(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?xu().has(e):!1}function da(){return L()?z.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="written_to_eso"&&Pu(t)}).length:0}function dr(){return z.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="unsent"}).length}function Fu(t){const e=String(t||"").trim();return z.find(n=>String(n.eventId||"").trim()===e)||null}function yi(t){const e=String(t||"other").toLowerCase(),n=["biweekly","monthly","other"],r=n.includes(e)?e:"other",i=n.filter(o=>o!==r);return[i[0]||"biweekly",r,i[1]||"other"]}function ki(t={},e="other"){const n=String(e||"other").toLowerCase(),r=Number(t==null?void 0:t.amount)||0;return n===String((t==null?void 0:t.type)||"").toLowerCase()?Number(t==null?void 0:t.ticketAmount)||0:n==="biweekly"?Math.floor(r/500):n==="monthly"?Math.floor(r/2500):0}function ua(t={},e="other",n=""){const r=String(t.type||"other").toLowerCase(),i=me(r),o=me(e),s=ce()||"Unknown user",a=[`Moved from ${i} to ${o} by ${s}.`,`Ref ${t.eventId||""}`],d=String(n||"").trim();return d&&a.push(`Reason: ${d}`),a.join(`
`)}function Gu(t){const e=Fu(t);if(!e){h("banking-move-missing","Could not find the selected banking entry.",{ttlMs:p});return}const n=String(e.type||"other").toLowerCase();ve=e,I={targetType:n,note:"",tickets:String(ki(e,n))},ke="",Bt=!1,Wt=!0,l()}function Qn(){Wt=!1,Bt=!1,ke="",ve=null,I={targetType:"other",note:"",tickets:""},l()}function Uu(){const t=ve||{},e=String(t.type||"other").toLowerCase(),n=me(e),r=yi(e);let i=String(I.targetType||r[0]||"other").toLowerCase();r.includes(i)||(i=r[0]||"other",I.targetType=i);const o=ua(t,i,I.note);return`
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
            <div><strong>Amount:</strong> ${c(At(t.amount))} \u{1FA99}</div>
          </div>

          <div class="banking-move-target-row banking-move-slider-row">
            <span>Move To</span>
            <div class="banking-move-slider-control" role="radiogroup" aria-label="Move banking entry destination">
              <div class="banking-move-slider-labels">
                ${r.map(s=>`
                  <button
                    class="banking-move-slider-label ${i===s?"selected":""} ${s===e?"current":""}"
                    type="button"
                    role="radio"
                    aria-checked="${i===s?"true":"false"}"
                    data-banking-move-target="${f(s)}"
                  >
                    <strong>${c(me(s))}</strong>
                    <span>${s===e?"Current / restore original values":`${c(String(ki(t,s)))} tickets`}</span>
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

          <div class="roster-history-muted banking-move-generated-note">${c(o).replace(/\n/g,"<br>")}</div>

          <div class="manual-ticket-actions banking-move-actions">
            <button id="saveBankingMoveButton" class="refresh-discord-button banking-move-submit-button" type="button" ${Bt||i===e?"disabled":""}>${Bt?"MOVING...":i===e?"SELECT A SIDE TO MOVE":"MOVE"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Hu(){var n,r,i,o;if(!Wt)return;(n=document.querySelector("#closeBankingMoveDialogButton"))==null||n.addEventListener("click",()=>Qn());function t(s){const a=String(s||"other").toLowerCase(),d=String((ve==null?void 0:ve.type)||"other").toLowerCase(),m=yi(d);I.targetType=m.includes(a)?a:d,I.tickets=String(ki(ve||{},I.targetType)),l()}document.querySelectorAll("[data-banking-move-target]").forEach(s=>{s.addEventListener("click",()=>t(s.dataset.bankingMoveTarget))}),(r=document.querySelector("#bankingMoveTicketsInput"))==null||r.addEventListener("input",s=>{const a=String(s.target.value||"").replace(/\D/g,"");s.target.value!==a&&(s.target.value=a),I.tickets=a}),(i=document.querySelector("#bankingMoveNoteInput"))==null||i.addEventListener("input",s=>{I.note=s.target.value||"";const a=document.querySelector(".banking-move-generated-note");a&&(a.innerText=ua(ve||{},I.targetType||"other",I.note))}),(o=document.querySelector("#saveBankingMoveButton"))==null||o.addEventListener("click",()=>Vu());const e=document.querySelector(".roster-history-overlay");e&&e.addEventListener("click",s=>{s.target===e&&Qn()})}async function Vu(){const t=ve;if(!(t!=null&&t.eventId)){ke="No banking entry is selected.",l();return}const e=String(t.type||"other").toLowerCase(),n=yi(e),r=String(I.targetType||n[0]||"other").toLowerCase();if(!n.includes(r)||r===e){ke="Select one of the side destinations before moving this entry.",l();return}const i=r==="other"?0:Math.floor(Number(String(I.tickets||"").trim()||0));if(!Number.isFinite(i)||i<0){ke="Tickets must be zero or greater.",l();return}Bt=!0,ke="",l();try{const o=await _("guildsync:move-banking-entry",{event_id:t.eventId,target_type:r,tickets:i,note:I.note||""},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Failed to move banking entry.");Qn(),await ye({silent:!0}),h("banking-entry-moved",o.message||"Banking entry moved.",{ttlMs:p})}catch(o){Bt=!1,ke=v(o),l()}}function Wu(){if(!L()){h("banking-history-login-required","Login required to lookup banking history.",{ttlMs:p});return}jt=!0,dt="",F=[],ie=[],fe="",he=!1,pe="",ne=-1,clearTimeout(wt),l(),B("bankingHistorySearchInput")}function ju(){jt=!1,he=!1,pe="",clearTimeout(wt)}function zu(){if(!jt)return;const t=document.querySelector("#bankingHistorySearchInput");t&&(t.addEventListener("input",e=>{if(dt=e.target.value||"",ne=-1,fe="",ie=[],!dt.trim()){clearTimeout(wt),pe="",F=[],he=!1,l(),B("bankingHistorySearchInput");return}clearTimeout(wt),wt=setTimeout(()=>{Yu({keepFocus:!0})},250)}),t.addEventListener("keydown",e=>{if(e.key==="ArrowDown"||e.key==="ArrowUp"){if(F.length===0)return;e.preventDefault();const r=e.key==="ArrowDown"?1:-1;ne=((ne<0?0:ne)+r+F.length)%F.length,l(),B("bankingHistorySearchInput");return}if(e.key!=="Enter")return;e.preventDefault();const n=F[ne>=0?ne:0];n!=null&&n.account_name&&Mo(n.account_name)})),document.querySelectorAll("[data-banking-history-account]").forEach(e=>{e.addEventListener("click",()=>{Mo(e.dataset.bankingHistoryAccount||"")})})}async function Yu(t={}){const e=dt.trim();if(!e){pe="",F=[],ne=-1,fe="",ie=[],he=!1,l(),t.keepFocus&&B("bankingHistorySearchInput");return}he=!0,pe="",F=[],ne=-1,l(),t.keepFocus&&B("bankingHistorySearchInput");try{const n=await _("guildsync:request-banking-history-matches",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search banking history.");F=Ku(n.matches),ne=F.length>0?0:-1}catch(n){pe=v(n)}finally{he=!1,l(),t.keepFocus&&B("bankingHistorySearchInput")}}async function Mo(t){const e=String(t||"").trim();if(!!e){clearTimeout(wt),fe=e,dt=e,F=[],ie=[],he=!0,pe="",l();try{const n=await _("guildsync:request-banking-history-records",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load banking history.");ie=Ju(n.records)}catch(n){pe=v(n)}finally{he=!1,l()}}}function Ku(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,o;return{account_name:String(e.account_name||e.accountName||"").trim(),record_count:Number((r=(n=e.record_count)!=null?n:e.recordCount)!=null?r:0)||0,last_event_timestamp:(o=(i=e.last_event_timestamp)!=null?i:e.lastEventTimestamp)!=null?o:""}}).filter(e=>e.account_name):[]}function Ju(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,o,s,a,d,m,g,b,k,S,D,q,R,Jt,Qt,Xt,Zt;return{event_id:String(e.event_id||e.eventId||"").trim(),transaction_type:String(e.transaction_type||e.transactionType||e.type||"").trim(),event_timestamp:(i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:"",deposit_amount:(a=(s=(o=e.deposit_amount)!=null?o:e.depositAmount)!=null?s:e.amount)!=null?a:"",ticket_quantity:(g=(m=(d=e.ticket_quantity)!=null?d:e.ticketQuantity)!=null?m:e.ticketAmount)!=null?g:"",purchased_tickets:(D=(S=(k=(b=e.purchasedTickets)!=null?b:e.ticket_quantity)!=null?k:e.ticketQuantity)!=null?S:e.ticketAmount)!=null?D:0,bonus_tickets:(q=e.bonusTickets)!=null?q:0,bonus_percent:(R=e.bonusPercent)!=null?R:0,bonus_enabled:e.bonusEnabled===!0,total_tickets:(Zt=(Xt=(Qt=(Jt=e.totalTickets)!=null?Jt:e.ticket_quantity)!=null?Qt:e.ticketQuantity)!=null?Xt:e.ticketAmount)!=null?Zt:0,note:String(e.note||"").trim()}}).sort((e,n)=>{const r=Number(e.event_timestamp)||0,i=Number(n.event_timestamp)||0;return r!==i?r-i:String(e.event_id).localeCompare(String(n.event_id),void 0,{numeric:!0})}):[]}function Qu(t){const e=Number(t);if(!e)return"";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t);const r=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0"),o=String(n.getFullYear()),s=String(n.getHours()).padStart(2,"0"),a=String(n.getMinutes()).padStart(2,"0"),d=String(n.getSeconds()).padStart(2,"0");return`${r}/${i}/${o} ${s}:${a}:${d}`}function Xu(t){const e=String(t||"").trim().toLowerCase();return e==="monthly"?"50/50":e==="biweekly"?"Bi-Weekly":e==="other"?"Other":e?e.replace(/\b\w/g,n=>n.toUpperCase()):""}function Zu(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":At(e)}function Rr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":oe(e)}function fa(){if(M!=="more")return;Hu(),zu(),document.querySelectorAll("[data-bank-entry-move]").forEach(a=>{a.addEventListener("click",()=>Gu(a.dataset.bankEntryMove||""))}),document.querySelectorAll("[data-bank-section]").forEach(a=>{a.addEventListener("click",()=>{T=a.dataset.bankSection||"biweekly",l()})}),document.querySelectorAll("[data-bank-export-section]").forEach(a=>{a.addEventListener("click",()=>{se=(a.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",st=!0,l()})}),document.querySelectorAll("[data-bank-period-move]").forEach(a=>{a.addEventListener("click",()=>{nf(a.dataset.bankPeriodMove||""),l()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{st=!1,l()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>ef());const n=document.querySelector(".bank-export-overlay");n&&n.addEventListener("click",a=>{a.target===n&&(st=!1,l())});const r=document.querySelector("#openBankingHistoryButton");r&&r.addEventListener("click",()=>Wu());const i=document.querySelector("#openManualBiweeklyTicketButton");i&&i.addEventListener("click",async()=>{if(!L()){h("manual-ticket-login-required","Login required to add manual entries.",{ttlMs:p});return}Le=!0,Y="",zt=E.accountName||"",re=!1,P=-1,X.length===0&&(u==null?void 0:u.connected)&&L()&&await Ln({silent:!0}),l()});const o=document.querySelector("#checkoutDepositMailButton");o&&o.addEventListener("click",()=>{o.dataset.depositMailAction==="checkout"&&o.getAttribute("aria-disabled")!=="true"&&kf()});const s=document.querySelector("#refreshBankingDataButton");s&&s.addEventListener("click",()=>{if(!L()){h("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:p});return}ya({key:"banking"})})}function ha(t){const e=Yt(se),n=[["Guildie Name","Deposit Amount","Purchased Tickets",...e?["Bonus %","Bonus Tickets"]:[],"Total Tickets","Note"]];for(const r of t)n.push([r.displayName||"",String(wi(r,se)),String(r.purchasedTickets),...e?[`${r.bonusPercent}%`,String(r.bonusTickets)]:[],String(r.totalTickets),r.note||""]);return n.map(r=>r.map(ur).join("	")).join(`
`)}function ur(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function fr(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly","readonly"),n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.width="1px",n.style.height="1px",n.style.opacity="0",n.style.pointerEvents="none",n.style.zIndex="-1",document.body.appendChild(n),n.focus(),n.select(),n.setSelectionRange(0,n.value.length);let r=!1;try{r=document.execCommand("copy")}finally{document.body.removeChild(n)}return r}async function ef(){const t=Qr(se),e=ha(t);if(await fr(e)){h("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#bankingExportTsv");r&&(r.focus(),r.select()),h("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:p})}function Qr(t){return z.filter(e=>e.type===t).filter(e=>tf(t,e)).sort((e,n)=>(Number(e.time)||0)-(Number(n.time)||0))}function tf(t,e){if(t==="other")return!0;const n=Number(e==null?void 0:e.time)||0;if(n<=0)return!1;const r=vi(t);return n>=r.salesStart&&n<=r.salesEnd}function Xn(t){return Number(Gr[t])||0}function nf(t){if(T!=="biweekly"&&T!=="monthly")return;const e=Xn(T);if(t==="previous"){Gr[T]=e-1;return}t==="next"&&e<0&&(Gr[T]=e+1)}function vi(t){const e=Math.floor(Date.now()/1e3);if(t==="monthly"){const i=rf(e,Xn(t));return{salesStart:ma(i)+1,salesEnd:i,raffleTime:i+zn}}const n=ze;let r=pa(e);return r+=Xn(t)*n,{salesStart:r-n+1,salesEnd:r,raffleTime:r+zn}}function pa(t){const e=ze;let n=bl;for(;n-e>t;)n-=e;for(;n<t;)n+=e;return n}function rf(t,e=0){let n=of(t),r=Number(e)||0;for(;r<0;)n=ma(n),r+=1;for(;r>0;)n=sf(n),r-=1;return n}function of(t){let e=pa(t);for(;!Si(e);)e+=ze;return e}function ma(t){let e=t-ze;for(;!Si(e);)e-=ze;return e}function sf(t){let e=t+ze;for(;!Si(e);)e+=ze;return e}function Si(t){const e=t+zn,n=t+ze+zn;return To(e)!==To(n)}function To(t){var o,s;const e=new Date(Number(t||0)*1e3);if(Number.isNaN(e.getTime()))return"";const n=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit"}).formatToParts(e),r=((o=n.find(a=>a.type==="year"))==null?void 0:o.value)||"",i=((s=n.find(a=>a.type==="month"))==null?void 0:s.value)||"";return`${r}-${i}`}function af(t=T){const e=String(t||"").toLowerCase();return e!=="monthly"&&e!=="biweekly"?0:"auto"}function wi(t={},e=T){const n=Number(t.amount)||0;if(!af(e))return n;const r=Math.abs(Math.trunc(n))%10,i=r===1||r===3?r:0;return i>0&&n>i?n-i:n}function cf(t,e=T){return t.reduce((n,r)=>(n.amount+=wi(r,e),n.purchased+=Number(r.purchasedTickets)||0,n.bonus+=Number(r.bonusTickets)||0,n.tickets+=Number(r.totalTickets)||0,n),{amount:0,purchased:0,bonus:0,tickets:0})}function ga(t){const e=Math.ceil((Number(t)||0)/2);return e<=0?0:Math.ceil(e/2e5)*2e5}function lf(t){const e=ga(t);return e>0?e/2e5:0}function Yt(t){var n;if(t!=="biweekly"&&t!=="monthly")return!1;const{salesEnd:e}=vi(t);return((n=Tt.find(r=>r.type===t&&r.salesEnd===e))==null?void 0:n.enabled)===!0}function df(t,e=!0,n=Yt(T)){return`
    <tr>
      <td>${c(t.note||t.eventId||"")}</td>
      <td>${c(xn(t.time))}</td>
      <td>${c(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${c(At(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td>${c(oe(t.purchasedTickets))}</td>${n?`<td>${c(oe(t.bonusPercent))}%</td><td>${c(oe(t.bonusTickets))}</td>`:""}<td><strong class="bank-ticket-amount">${c(oe(t.totalTickets))}</strong></td>`:""}
      <td><button class="bank-entry-move-button" type="button" data-bank-entry-move="${f(t.eventId||"")}">Move</button></td>
    </tr>
  `}function uf(t=!0,e=!1){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?e?"9":"7":"5"}">No ${c(me(T))} deposits found for this ${T==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function me(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function xn(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function At(t){return(Number(t)||0).toLocaleString()}function oe(t){return(Number(t)||0).toLocaleString()}function Kt(t){return Array.isArray(t)?t.map(e=>{var r,i,o,s,a,d,m,g,b,k,S,D,q,R,Jt,Qt,Xt,Zt,Bi,Ni,Ci,Oi,Ii,qi,xi,Pi,Fi,Gi,Ui,Hi,Vi,Wi,ji,zi,Yi,Ki,Ji,Qi,Xi,Zi,eo,to,no,ro,io,oo,so;const n=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:n==="monthly"||n==="biweekly"||n==="other"?n:"other",eventId:String((i=(r=e==null?void 0:e.eventId)!=null?r:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((s=(o=e==null?void 0:e.time)!=null?o:e==null?void 0:e.timestamp)!=null?s:0)||0,displayName:String((d=(a=e==null?void 0:e.displayName)!=null?a:e==null?void 0:e.display_name)!=null?d:"").trim(),amount:Number((m=e==null?void 0:e.amount)!=null?m:0)||0,ticketAmount:Number((b=(g=e==null?void 0:e.ticketAmount)!=null?g:e==null?void 0:e.ticket_amount)!=null?b:0)||0,purchasedTickets:Number((S=(k=e==null?void 0:e.purchasedTickets)!=null?k:e==null?void 0:e.ticketAmount)!=null?S:0)||0,bonusTickets:Number((D=e==null?void 0:e.bonusTickets)!=null?D:0)||0,bonusPercent:Number((q=e==null?void 0:e.bonusPercent)!=null?q:0)||0,bonusEnabled:(e==null?void 0:e.bonusEnabled)===!0,totalTickets:Number((Jt=(R=e==null?void 0:e.totalTickets)!=null?R:e==null?void 0:e.ticketAmount)!=null?Jt:0)||0,note:String((Qt=e==null?void 0:e.note)!=null?Qt:"").trim(),dataSource:String((Zt=(Xt=e==null?void 0:e.dataSource)!=null?Xt:e==null?void 0:e.data_source)!=null?Zt:"").trim(),emailRequested:Boolean((Bi=e==null?void 0:e.emailRequested)!=null?Bi:e==null?void 0:e.email_requested),mailStatus:String((Ci=(Ni=e==null?void 0:e.mailStatus)!=null?Ni:e==null?void 0:e.mail_status)!=null?Ci:"").trim(),mailRequestId:String((Ii=(Oi=e==null?void 0:e.mailRequestId)!=null?Oi:e==null?void 0:e.mail_request_id)!=null?Ii:"").trim(),mailBatchId:String((xi=(qi=e==null?void 0:e.mailBatchId)!=null?qi:e==null?void 0:e.mail_batch_id)!=null?xi:"").trim(),checkedOutBy:String((Fi=(Pi=e==null?void 0:e.checkedOutBy)!=null?Pi:e==null?void 0:e.checked_out_by)!=null?Fi:"").trim(),checkedOutAt:String((Ui=(Gi=e==null?void 0:e.checkedOutAt)!=null?Gi:e==null?void 0:e.checked_out_at)!=null?Ui:"").trim(),checkoutExpiresAt:String((Vi=(Hi=e==null?void 0:e.checkoutExpiresAt)!=null?Hi:e==null?void 0:e.checkout_expires_at)!=null?Vi:"").trim(),writtenToEsoAt:String((ji=(Wi=e==null?void 0:e.writtenToEsoAt)!=null?Wi:e==null?void 0:e.written_to_eso_at)!=null?ji:"").trim(),sentAt:String((Yi=(zi=e==null?void 0:e.sentAt)!=null?zi:e==null?void 0:e.sent_at)!=null?Yi:"").trim(),failedReason:String((Ji=(Ki=e==null?void 0:e.failedReason)!=null?Ki:e==null?void 0:e.failed_reason)!=null?Ji:"").trim(),recipient:String((eo=(Zi=(Xi=(Qi=e==null?void 0:e.recipient)!=null?Qi:e==null?void 0:e.account_name)!=null?Xi:e==null?void 0:e.displayName)!=null?Zi:e==null?void 0:e.display_name)!=null?eo:"").trim(),subject:String((ro=(no=(to=e==null?void 0:e.subject)!=null?to:e==null?void 0:e.mailSubject)!=null?no:e==null?void 0:e.mail_subject)!=null?ro:"").trim(),body:String((so=(oo=(io=e==null?void 0:e.body)!=null?io:e==null?void 0:e.mailBody)!=null?oo:e==null?void 0:e.mail_body)!=null?so:"").trim()}}):[]}function ff(t){const e=new Map;for(const n of z)n.eventId&&e.set(n.eventId,n);for(const n of t)!n.eventId||e.set(n.eventId,n);z=Array.from(e.values()).sort((n,r)=>(Number(r.time)||0)-(Number(n.time)||0))}function ba(){ds=new Date().toISOString()}async function hf(t={}){!(t!=null&&t.ok)||(z=Kt(t.entries),t.bonusSettings&&(H=t.bonusSettings),Array.isArray(t.bonusRaffles)&&(Tt=t.bonusRaffles),ba(),M==="more"&&l(),h("banking-data-updated",`Banking data updated. Loaded ${z.length} deposit record${z.length===1?"":"s"}.`,{ttlMs:p}))}async function ye(t={}){const e=Boolean(t.silent),n=Boolean(t.background);if(!(u!=null&&u.connected)){e||h("banking-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}n||(je=!0,l());try{const r=await _("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");z=Kt(r.entries),r.bonusSettings&&(H=r.bonusSettings),Array.isArray(r.bonusRaffles)&&(Tt=r.bonusRaffles),ba(),e||h("banking-data",`Loaded ${z.length} banking deposit record${z.length===1?"":"s"}.`,{ttlMs:p})}catch(r){e||h("banking-data-error",v(r),{ttlMs:p})}finally{n||(je=!1),l()}}async function Bo(){!(u!=null&&u.connected)||!L()||je||(await ye({silent:!0,background:!0}),dr()<=0&&$n()>0&&(W.running?l():Sa("availability-refresh")))}function pf(){pt&&clearInterval(pt),Bo(),pt=window.setInterval(Bo,fl)}function mf(){pt&&(clearInterval(pt),pt=null)}async function gf(t={}){if(!!L()){if(!(u!=null&&u.connected)){h("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:p});return}try{const e=await Uc(t);if(!(e!=null&&e.ok))return;const n=Array.isArray(e.ackEntries)?e.ackEntries:[];if(n.length===0)return;const r=await _("guildsync:mark-deposit-mail-sent",{mail_ack:n,mail_request_ids:n.map(s=>(s==null?void 0:s.mail_request_id)||(s==null?void 0:s.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(r.mail_request_ids)?r.mail_request_ids:Array.isArray(r.mailRequestIds)?r.mailRequestIds:[];if(i.length===0){h("deposit-mail-ack-none",r.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:p});return}const o=await Fc(i);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");h("deposit-mail-ack-sent",o.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:p}),await ye({silent:!0})}catch(e){h("deposit-mail-ack-error",v(e),{ttlMs:p})}}}async function bf(){if(!Ar){Ar=!0;try{const t=await Kc();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&h("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:p})}catch(t){h("deposit-mail-ack-cleanup-error",v(t),{ttlMs:p})}finally{Ar=!1}}}async function ya(t={}){var e,n;if(!!L()){if(!(u!=null&&u.connected)){h("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}je=!0,l();try{const r=await Vc(t);if(!(r!=null&&r.ok)){h("banking-data-pending",(r==null?void 0:r.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:p});return}const i=Kt((e=r==null?void 0:r.data)==null?void 0:e.entries);ff(i);const o=new Date().toISOString(),s={local_upload_id:wa(),authenticated_username:ce(),authenticated_discord_user_id:((n=y==null?void 0:y.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:o,data:r.data||{}};try{await Aa(s)}catch(a){throw wf(s),a}await ye({silent:!0})}catch(r){h("banking-data-error",v(r),{ttlMs:p})}finally{je=!1,l()}}}function ka(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function En(){try{const t=window.localStorage.getItem(ns),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function va(t){window.localStorage.setItem(ns,JSON.stringify(Array.isArray(t)?t:[]))}function yf(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||ka()),n=En().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);n.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),va(n)}function No(t){const e=String(t||"").trim();if(!e)return;const n=En().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);va(n)}async function kf(){if(!L()){h("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:p});return}if(!(u!=null&&u.connected)){h("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:p});return}const t=En(),e=dr();if(t.length>0&&e<=0){await Ot();return}Ir=!0,l();try{const n=await _("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail checkout request.");const r=Kt(n.records);if(r.length===0){h("deposit-mail-none",n.message||"No unsent deposit mail is available.",{ttlMs:p}),await ye({silent:!0});return}const i={mail_batch_id:n.mail_batch_id||n.mailBatchId||ka(),checked_out_by:n.checked_out_by||n.checkedOutBy||ce(),checked_out_at:new Date().toISOString(),records:r};yf(i),await Ot()}catch(n){h("deposit-mail-error",v(n),{ttlMs:p})}finally{Ir=!1,l()}}function Sa(t=""){gt||mt||!L()||$n()<=0||W.running||(gt=window.setTimeout(()=>{gt=null,Ot()},100))}async function Ot(){if(gt&&(window.clearTimeout(gt),gt=null),mt||!L())return;const t=En();if(t.length!==0){if(await Xr({silent:!0}),W.running){h("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:p}),l();return}mt=!0,l();try{for(const e of t){const n=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),r=Kt(e==null?void 0:e.records);if(r.length===0){No(n);continue}const i=await al(r);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(u!=null&&u.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const o=await _("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:n,event_ids:i.eventIds||r.map(s=>s.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||"Backend did not confirm deposit mail was marked written_to_eso.");No(n),h("deposit-mail-written",i.message||`Wrote ${r.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:p})}await ye({silent:!0})}catch(e){h("deposit-mail-write-error",v(e),{ttlMs:p})}finally{mt=!1,l()}}}async function Xr(t={}){try{const e=Boolean(W.running),n=await Jc();W={running:Boolean(n==null?void 0:n.running),message:String((n==null?void 0:n.message)||"")},W.running||await bf(),e&&!W.running&&(h("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:p}),await Ot()),e!==W.running&&l()}catch(e){t.silent||h("eso-status-error",v(e),{ttlMs:p})}}function vf(){ht&&clearInterval(ht),Xr({silent:!0}).then(()=>{!W.running&&$n()>0&&Ot()}),ht=window.setInterval(()=>Xr({silent:!0}),ul)}function Sf(){ht&&(clearInterval(ht),ht=null)}function wa(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function _i(){try{const t=window.localStorage.getItem(ts),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function _a(t){window.localStorage.setItem(ts,JSON.stringify(Array.isArray(t)?t:[]))}function wf(t){const e=String((t==null?void 0:t.local_upload_id)||wa()),n=_i().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),_a(n),h("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function _f(t){const e=_i().filter(n=>(n==null?void 0:n.local_upload_id)!==t);_a(e)}async function Af(){if(Sr||!(u!=null&&u.connected)||!L())return;const t=_i();if(t.length!==0){Sr=!0;try{for(const e of t){if(!(u!=null&&u.connected)||!L())return;await Aa(e),_f(e.local_upload_id)}}catch(e){h("banking-data-pending-error",`Pending banking upload retry failed: ${v(e)}`,{ttlMs:p})}finally{Sr=!1}}}async function Aa(t){if(!(u!=null&&u.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await _("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const n=await zc(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return h("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:p}),e}function La(){if(M!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>Lf());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{Rt=!0,Ae="",l(),B("discordHistorySearchInput")});const n=document.querySelector("#discordMemberSearch");n&&n.addEventListener("input",s=>{Un=s.target.value||"",qr=s.target.selectionStart,xr=s.target.selectionEnd,l({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(s=>{s.addEventListener("click",()=>{Mf(s.dataset.discordSortColumn||"username")})});const r=document.querySelector("#discordRoleFilter");r&&r.addEventListener("change",s=>{const a=String(s.target.value||"").trim();a&&(bt.add(a),l())}),document.querySelectorAll("[data-remove-role-filter]").forEach(s=>{s.addEventListener("click",()=>{const a=s.dataset.removeRoleFilter||"";bt.delete(a),l()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",s=>{const a=String(s.target.value||"").trim();a&&(yt.add(a),l())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(s=>{s.addEventListener("click",()=>{const a=s.dataset.removeDiscordLinkStatusFilter||"";yt.delete(a),l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(s=>{s.addEventListener("click",()=>Fs(s.dataset.openMemberLinkDialog||"",s.dataset.memberLinkValue||""))});const o=document.querySelector("#clearDiscordFiltersButton");o&&o.addEventListener("click",()=>{Un="",bt.clear(),yt.clear(),l()})}async function Lf(){var t,e;if(!(u!=null&&u.connected)){h("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:p});return}Gn=!0,l(),h("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const n=await _("guildsync:request-discord-data-refresh",{requested_by:((t=y==null?void 0:y.user)==null?void 0:t.display_name)||((e=y==null?void 0:y.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to request Discord data refresh.");h("discord-refresh-requested",n.message||"Discord data refresh completed.",{ttlMs:p}),await Ai({silent:!0})}catch(n){h("discord-refresh-error",v(n),{ttlMs:p})}finally{Gn=!1,l()}}async function $f(){if(!(u!=null&&u.connected))return;const t=await _("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(ir=t.value||null)}async function Ef(t={}){if(!!(t!=null&&t.ok)){j=Li(t.members),rr=$i(t.roles),t.last_refresh&&(ir=t.last_refresh);try{await $f()}catch{}M==="discord-members"&&l(),h("discord-data-updated",`Discord data updated. Loaded ${j.length} member record${j.length===1?"":"s"}.`,{ttlMs:p})}}async function Ai(t={}){const e=Boolean(t.silent);if(!(u!=null&&u.connected)){h("discord-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}fn=!0,l();try{const[n,r]=await Promise.all([_("guildsync:request-discord-data-date",{}),_("guildsync:request-discord-member-dataJSON",{})]);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord refresh date.");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord member data.");ir=n.value||null,j=Li(r.members),rr=$i(r.roles),e||h("discord-data",`Loaded ${j.length} Discord member record${j.length===1?"":"s"}.`,{ttlMs:p})}catch(n){h("discord-data-error",v(n),{ttlMs:p})}finally{fn=!1,l()}}function _(t,e={},n=3e4){return new Promise((r,i)=>{if(!(u!=null&&u.connected)){i(new Error("GuildSync websocket is not connected."));return}let o=!1;const s=window.setTimeout(()=>{o||(o=!0,i(new Error(`${t} timed out.`)))},n);u.emit(t,e,a=>{o||(o=!0,window.clearTimeout(s),r(a))})})}function Li(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map($a).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,n)=>bn(e).localeCompare(bn(n),void 0,{sensitivity:"base"})):[]}function $i(t){if(!Array.isArray(t))return[];const e=new Map;for(const n of t){const r=$a(n);if(!r)continue;const i=r.role_id||dn(r.role_name);i&&!e.has(i)&&e.set(i,r)}return Array.from(e.values()).sort((n,r)=>String(n.role_name||"").localeCompare(String(r.role_name||""),void 0,{sensitivity:"base"}))}function $a(t){var i,o;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),n=String(t.role_name||t.name||"Unnamed Role").trim(),r=(o=(i=t.role_color)!=null?i:t.color)!=null?o:null;return{role_id:e,role_name:n||"Unnamed Role",role_color:r}}function Rf(){const t=Un.trim().toLowerCase(),e=Array.from(bt),n=j.filter(r=>{if(t&&![r.username,r.global_name,r.server_nickname,r.discord_id,...r.roles.map(o=>o.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(r.roles.map(o=>o.role_name));if(!e.every(o=>i.has(o)))return!1}return!!ks(yt,Wl(r))});return Df(n)}function Df(t){const e=Ze==="desc"?-1:1;return[...t].sort((n,r)=>{const i=Co(n,hn),o=Co(r,hn),s=i.localeCompare(o,void 0,{sensitivity:"base",numeric:!0});return s!==0?s*e:bn(n).localeCompare(bn(r),void 0,{sensitivity:"base",numeric:!0})})}function Co(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(n=>n.role_name||"").filter(Boolean).sort((n,r)=>n.localeCompare(r,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function Mf(t){const n=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";hn===n?Ze=Ze==="asc"?"desc":"asc":(hn=n,Ze="asc"),l()}function Tn(t,e){const n=hn===t,r=Ze==="asc"?"ascending":"descending",i=n?Ze==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${n?r:"none"}">
      <button
        class="discord-sort-header${n?" active":""}"
        type="button"
        data-discord-sort-column="${f(t)}"
        title="Sort ${f(e)} ${n&&Ze==="asc"?"descending":"ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function Tf(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(qr)?qr:t.value.length,n=Number.isInteger(xr)?xr:e;t.setSelectionRange(e,n)}}function Bf(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(Pr)?Pr:t.value.length,n=Number.isInteger(Fr)?Fr:e;t.setSelectionRange(e,n)}}function Nf(){const t=new Set;for(const e of j)for(const n of e.roles)n.role_name&&t.add(n.role_name);return Array.from(t).sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function Cf(t){const e=Ff(t),n=bn(t),r=t.roles||[];return`
    <tr data-discord-user-id="${f(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${f(e)}" alt="${f(n)}" />`:`<span>${c(Ia(n))}</span>`}
          </div>
          <span>${c(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${c(t.global_name||"")}</td>
      <td>${c(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${r.length>0?r.map(i=>If(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${xs({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function Of(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${c(fn?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function If(t){const e=hr(t.role_color),n=Di(e),r=Ri(e,n);return`
    <span
      class="discord-role-badge"
      title="${f(t.role_name)}"
      style="${r}"
    >${c(t.role_name)}</span>
  `}function qf(t){const e=Ei(t),n=hr(e==null?void 0:e.role_color),r=Di(n),i=Ri(n,r);return`
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
  `}function xf(t){const e=Pf(t);for(const n of e){const r=Ei(n);if(r)return r}return null}function Pf(t){const e=String(t||"").trim();if(!e)return[];const n=dn(e),i={associate:["Associates","Associate"],associates:["Associates","Associate"],soldier:["Soldiers","Soldier"],soldiers:["Soldiers","Soldier"],capo:["Capo"],capos:["Capo","Capos"],caporegime:["CapoRegime","Capo Regime","Capo Regimes"],consiglieres:["Consigliere","Consiglieres"],consigliere:["Consigliere","Consiglieres"]}[n]||[e];return Array.from(new Set([e,...i].filter(Boolean)))}function dn(t){return String(t||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function Ei(t){const e=dn(t);if(!e)return null;const n=rr.find(r=>dn(r.role_name)===e);if(n)return n;for(const r of j){const i=r.roles.find(o=>dn(o.role_name)===e);if(i)return i}return null}function hr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function Ri(t,e){return[`--role-fill-top: ${Oo(t,"#ffffff",.16)}`,`--role-fill-bottom: ${Oo(t,"#000000",.1)}`,`--role-fill-glow: ${Io(t,.28)}`,`--role-fill-edge: ${Io(t,.46)}`,`color: ${e}`].join("; ")}function Oo(t,e,n){const r=Bn(t)||Bn("#64748b"),i=Bn(e)||Bn("#ffffff"),o=Math.max(0,Math.min(1,Number(n)||0)),s=Math.round(r.red+(i.red-r.red)*o),a=Math.round(r.green+(i.green-r.green)*o),d=Math.round(r.blue+(i.blue-r.blue)*o);return`#${Dr(s)}${Dr(a)}${Dr(d)}`}function Bn(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function Dr(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function Io(t,e){const n=String(t||"#64748b").replace("#",""),r=/^[0-9a-f]{6}$/i.test(n)?n:"64748b",i=parseInt(r.slice(0,2),16),o=parseInt(r.slice(2,4),16),s=parseInt(r.slice(4,6),16);return`rgba(${i}, ${o}, ${s}, ${e})`}function Di(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const n=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(n*299+r*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function Ff(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!n)return"";const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function bn(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function Ea(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Pn(){const t=document.querySelector("#discordArea");if(!!t){if(Rn(!1),L()){const e=y.user||{},n=ce(),r=ih(e),i=Ia(n);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${r?`<img src="${f(r)}" alt="${f(n)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${c(i)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const o=document.querySelector("#discordAvatarButton");o.addEventListener("contextmenu",s=>{s.preventDefault(),qo()}),o.addEventListener("click",()=>{qo()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",Wf)}}function qo(){if(vn){Rn();return}Vf()}function Gf(t=Oe){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],n=String((t==null?void 0:t.directory)||"").trim(),r=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const o=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),s=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),a=String((i==null?void 0:i.filePath)||(n?`${n}\\${s}`:s)).trim(),d=(i==null?void 0:i.enabled)!==!1,m=r&&d,g=`profileFileWatchToggle-${Hf(o||s)}`;return`
          <label class="profile-filewatch-item ${d?"enabled":"disabled"}" title="${f(a)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${c(s)}</span>
              <span class="profile-filewatch-state">${m?"Watching":d?"On":"Off"}</span>
            </span>
            <input
              id="${f(g)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${f(o)}"
              ${d?"checked":""}
              aria-label="Turn file watch ${d?"off":"on"} for ${f(s)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function Mi(){var r,i,o;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=ce(),n=((r=y.user)==null?void 0:r.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${c(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${c(oh(n))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${c(nr)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${Oe!=null&&Oe.watching?"Active":"Stopped"}</span>
        </div>
        ${Gf()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(i=document.querySelector("#discordLogoutButton"))==null||i.addEventListener("click",jf),(o=document.querySelector("#associateTicketReportButton"))==null||o.addEventListener("click",()=>{Rn(!1),Ss()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(s=>{s.addEventListener("change",Uf)})}async function Ra(){try{Oe=await Qc(),vn&&Mi()}catch(t){h("file-watcher-error",v(t),{ttlMs:p})}}async function Uf(t){var r;const e=t.currentTarget,n=String(((r=e==null?void 0:e.dataset)==null?void 0:r.filewatchKey)||"").trim();if(!!n)try{e.disabled=!0,Oe=await nl(n,e.checked),await Lt({silent:!0}),vn&&Mi()}catch(i){h("file-watcher-error",v(i),{ttlMs:p}),await Ra()}}function Hf(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function Vf(){const t=document.querySelector("#discordProfileMenu");!t||(Mi(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),vn=!0,Ra(),setTimeout(()=>{window.addEventListener("click",Da),window.addEventListener("keydown",Ma)},0))}function Rn(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),vn=!1,t&&(window.removeEventListener("click",Da),window.removeEventListener("keydown",Ma))}function Da(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&Rn()}function Ma(t){t.key==="Escape"&&Rn()}async function Wf(){try{h("auth","Opening Discord login...",{ttlMs:p});const t=await il();t!=null&&t.status_message&&h("auth",t.status_message,{ttlMs:p}),Ue()}catch(t){h("auth-error",v(t),{ttlMs:p}),Ue()}}async function jf(){try{y=await Zc(),h("auth",y.status_message||"Logged out.",{ttlMs:p}),us(),un(),await Lt()}catch(t){h("auth-error",v(t),{ttlMs:p}),Ue()}}function un(){const t=y.socket_url||"https://guildsync.perdues.me";zf(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};y!=null&&y.token&&(e.auth={token:y.token}),u=In(t,e),u.on("connect",()=>{Ue(),Ta(),M==="discord-members"&&Ai({silent:!0}),M==="eso-members"&&Ln({silent:!0}),(M==="more"||M==="settings"&&!H)&&ye({silent:!0}),Af(),Ot(),vf(),pf(),Su(),Lu(),Yf()}),u.on("connect_error",()=>{Ue(),Zn()}),u.on("disconnect",()=>{Ue(),Zn(),Sf(),mf()}),u.on("guildsync:version-status",n=>{Kf(n)}),u.on("guildsync:discord-member-data-updated",n=>{Ef(n)}),u.on("guildsync:banking-data-updated",n=>{hf(n)}),u.on("guildsync:roster-data-updated",n=>{bu(n)}),u.on("guildsync:member-links-updated",(n={})=>{Array.isArray(n.links)&&($=n.links,(M==="discord-members"||M==="eso-members"||M==="settings"||Ye)&&l())}),u.on("guildsync:discord-refresh-status",(n={})=>{const r=String(n.message||"").trim();r&&h("discord-refresh-status",r,{ttlMs:p})})}function zf(t=!0){Zn(),u&&(u.disconnect(),u=null),t&&Ue()}function Ta(){!(u!=null&&u.connected)||u.emit("guildsync:client-version",{version:nr,platform:Ba(),client_type:"wails"})}function Yf(){Zn(),qn=window.setInterval(()=>{Ta()},dl)}function Zn(){qn&&(window.clearInterval(qn),qn=null)}function Kf(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",n=t.download&&typeof t.download=="object"?t.download:{};Ee={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||n.url||"").trim(),fileName:String(t.download_file_name||n.file_name||"").trim(),platformLabel:String(n.label||t.platform||Ba()).trim()},h("version",`GuildSync is out of date. Current version: ${nr}. Latest version: ${e}.`),Zr();return}Ee={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},Zr(),Ti("version")}}function Ba(){const t=String(navigator.userAgent||"").toLowerCase(),n=`${String(navigator.platform||"").toLowerCase()} ${t}`;return n.includes("mac")?"macos":n.includes("linux")?"linux":"windows"}function Zr(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!Ee.updateRequired||!Ee.downloadUrl){t.innerHTML="";return}const e=Ee.platformLabel||"Desktop",n=Ee.latestVersion||"latest",r=Ee.fileName||"GuildSync client download";t.innerHTML=`
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
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{Jf()})}function Jf(){const t=String(Ee.downloadUrl||"").trim();if(!t){h("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:p});return}ll(t)}function h(t,e,n={}){const r=String(t||"").trim(),i=String(e||"").trim();if(!(!r||!i)){if(He.set(r,i),Je.has(r)&&(window.clearTimeout(Je.get(r)),Je.delete(r)),n.ttlMs&&Number(n.ttlMs)>0){const o=window.setTimeout(()=>{Ti(r)},Number(n.ttlMs));Je.set(r,o)}It()}}function Ti(t){const e=String(t||"").trim();if(!!e){if(He.delete(e),Je.has(e)&&(window.clearTimeout(Je.get(e)),Je.delete(e)),x===e){gr(()=>{x="",It()});return}It()}}function It(){const t=pr();if(t.length===0){at?gr(yn):yn();return}!at&&!ct&&mr(t[0])}function pr(){return Array.from(He.keys())}function Na(){const t=pr();if(t.length===0)return"";if(!x)return t[0];const e=t.indexOf(x);return e<0?t[0]:t[(e+1)%t.length]}function mr(t){const e=document.querySelector("#statusMessageTrack");if(!e||!He.has(t)){yn();return}br();const n=He.get(t);x=t,at=!0,ct=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=n,e.style.setProperty("--message-fade-duration",`${ss}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",ct=!1,Qf()},{once:!0})})}function Qf(){const t=pr();if(!x||!He.has(x)){It();return}if(t.length<=1){xo(!1);return}xo(!0)}function xo(t){const e=document.querySelector("#statusMessageViewport"),n=document.querySelector("#statusMessageTrack");if(!e||!n)return;const r=Math.max(0,n.scrollWidth-e.clientWidth);if(r<=0){t&&kn(()=>{gr(()=>{const i=Na();x="",i?mr(i):yn()})},os);return}kn(()=>{Ca(r,t)},as)}function Ca(t,e){const n=document.querySelector("#statusMessageTrack");if(!n||!x||!He.has(x))return;const r=Math.max(4,Math.ceil(t/pl));n.style.setProperty("--long-scroll-distance",`${t}px`),n.style.setProperty("--long-scroll-duration",`${r}s`),n.classList.add("long-scroll"),n.addEventListener("animationend",()=>{if(n.classList.remove("long-scroll"),n.style.transform=`translateX(-${t}px) translateY(-50%)`,e){kn(()=>{gr(()=>{const i=Na();x="",i?mr(i):yn()})},os);return}kn(()=>{Xf()},hl)},{once:!0})}function Xf(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!x||!He.has(x))return;if(pr().length!==1){It();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const r=Math.max(0,e.scrollWidth-t.clientWidth);r<=0||kn(()=>{Ca(r,!1)},as)}function gr(t){const e=document.querySelector("#statusMessageTrack");if(br(),!e||!at){typeof t=="function"&&t();return}ct=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${ss}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",at=!1,ct=!1,typeof t=="function"&&t()},{once:!0})}function yn(){const t=document.querySelector("#statusMessageTrack");br(),x="",at=!1,ct=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function kn(t,e){const n=window.setTimeout(()=>{cn=cn.filter(r=>r!==n),t()},e);cn.push(n)}function br(){for(const t of cn)window.clearTimeout(t);cn=[]}function Oa(){if(!at||ct||!x)return;const t=x;br(),mr(t)}function Ue(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(u!=null&&u.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!L()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${ce()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${ce()}`)}}async function Lt(t={}){try{if(L()){const e=await ol();Oe=e,!t.silent&&(e==null?void 0:e.message)&&h(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:p});return}Oe=await sl(),Ti("file-watcher")}catch(e){h("file-watcher-error",v(e),{ttlMs:p})}}function sn(t,e=null){const n="[GuildSync File Watcher]";if(e){console.log(`${n} ${t}`,e);return}console.log(`${n} ${t}`)}function Zf(t={}){if(!L()){sn("SavedVariables change ignored because the user is not authenticated.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",n=e.toLowerCase(),r=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",o=String(t.filePath||"").trim(),s=r?`${r} saved variables (${i})`:i;sn(`SavedVariables change detected: ${i}${o?` (${o})`:""}. Key: ${n}.`,t),h(`saved-vars-file-updated-${e}`,`${s} has been updated.`,{ttlMs:p}),n==="banking"&&(sn(`Processing banking SavedVariables update from ${i}.`),eh(t)),n==="roster"&&(sn(`Processing roster SavedVariables update from ${i}.`),th(t)),n==="applications"&&(sn(`Processing applications SavedVariables update from ${i}.`),Ru(t))}async function eh(t={}){await gf(t),await ya(t)}async function th(t={}){await yu(t)}function nh(t){!L()||h("file-watcher-error",v(t),{ttlMs:p})}function rh(){tn("guildsync-savedvars-file-modified",Zf),tn("guildsync-file-watcher-error",nh),tn("guildsync-login-complete",async t=>{y=t||{logged_in:!1,allowed:!1},Pn(),un(),await Lt(),h("auth",y.status_message||`Logged in and authorized as ${ce()}.`,{ttlMs:p})}),tn("guildsync-login-denied",async t=>{y={logged_in:!1,allowed:!1,status_message:""},Pn(),await Lt(),h("auth",t||"Access denied.",{ttlMs:p}),un()}),tn("guildsync-login-failed",async t=>{y={logged_in:!1,allowed:!1,status_message:""},Pn(),await Lt(),h("auth",t||"Login failed.",{ttlMs:p}),un()})}function L(){return Boolean((y==null?void 0:y.logged_in)&&(y==null?void 0:y.allowed)&&(y==null?void 0:y.token))}function ce(){var t,e;return((t=y.user)==null?void 0:t.display_name)||((e=y.user)==null?void 0:e.username)||"Discord User"}function ih(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),n=String(t.discord_user_id||"").trim();if(!e||!n)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=128`}function Ia(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function oh(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function sh(){nn&&(nn.disconnect(),nn=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),n=Math.round(t.getBoundingClientRect().height);nn=new ResizeObserver(r=>{const i=r[0];if(!i)return;const o=Math.round(i.contentRect.width),s=Math.round(i.contentRect.height);o===e&&s===n||(e=o,n=s,qa(),Oa())}),nn.observe(t)}function qa(){clearTimeout(po),po=setTimeout(async()=>{try{await es()}catch{}},500)}function v(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function c(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function f(t){return c(t)}rh();yl();
