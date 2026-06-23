(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();const da="/assets/splash.ea386b6a.png",ua="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",fa="/assets/GuildSync-Graphic.9169020d.png",re=Object.create(null);re.open="0";re.close="1";re.ping="2";re.pong="3";re.message="4";re.upgrade="5";re.noop="6";const ur=Object.create(null);Object.keys(re).forEach(t=>{ur[re[t]]=t});const ln={type:"error",data:"parser error"},uo=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",fo=typeof ArrayBuffer=="function",ho=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Cn=({type:t,data:e},r,n)=>uo&&e instanceof Blob?r?n(e):qi(e,n):fo&&(e instanceof ArrayBuffer||ho(e))?r?n(e):qi(new Blob([e]),n):n(re[t]+(e||"")),qi=(t,e)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];e("b"+(n||""))},r.readAsDataURL(t)};function xi(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let Qr;function ha(t,e){if(uo&&t.data instanceof Blob)return t.data.arrayBuffer().then(xi).then(e);if(fo&&(t.data instanceof ArrayBuffer||ho(t.data)))return e(xi(t.data));Cn(t,!1,r=>{Qr||(Qr=new TextEncoder),e(Qr.encode(r))})}const Fi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",xt=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<Fi.length;t++)xt[Fi.charCodeAt(t)]=t;const ma=t=>{let e=t.length*.75,r=t.length,n,i=0,o,s,c,u;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const g=new ArrayBuffer(e),S=new Uint8Array(g);for(n=0;n<r;n+=4)o=xt[t.charCodeAt(n)],s=xt[t.charCodeAt(n+1)],c=xt[t.charCodeAt(n+2)],u=xt[t.charCodeAt(n+3)],S[i++]=o<<2|s>>4,S[i++]=(s&15)<<4|c>>2,S[i++]=(c&3)<<6|u&63;return g},pa=typeof ArrayBuffer=="function",Bn=(t,e)=>{if(typeof t!="string")return{type:"message",data:mo(t,e)};const r=t.charAt(0);return r==="b"?{type:"message",data:ga(t.substring(1),e)}:ur[r]?t.length>1?{type:ur[r],data:t.substring(1)}:{type:ur[r]}:ln},ga=(t,e)=>{if(pa){const r=ma(t);return mo(r,e)}else return{base64:!0,data:t}},mo=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},po=String.fromCharCode(30),ya=(t,e)=>{const r=t.length,n=new Array(r);let i=0;t.forEach((o,s)=>{Cn(o,!1,c=>{n[s]=c,++i===r&&e(n.join(po))})})},ba=(t,e)=>{const r=t.split(po),n=[];for(let i=0;i<r.length;i++){const o=Bn(r[i],e);if(n.push(o),o.type==="error")break}return n};function ka(){return new TransformStream({transform(t,e){ha(t,r=>{const n=r.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const o=new DataView(i.buffer);o.setUint8(0,126),o.setUint16(1,n)}else{i=new Uint8Array(9);const o=new DataView(i.buffer);o.setUint8(0,127),o.setBigUint64(1,BigInt(n))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(r)})}})}let Xr;function ar(t){return t.reduce((e,r)=>e+r.length,0)}function cr(t,e){if(t[0].length===e)return t.shift();const r=new Uint8Array(e);let n=0;for(let i=0;i<e;i++)r[i]=t[0][n++],n===t[0].length&&(t.shift(),n=0);return t.length&&n<t[0].length&&(t[0]=t[0].slice(n)),r}function va(t,e){Xr||(Xr=new TextDecoder);const r=[];let n=0,i=-1,o=!1;return new TransformStream({transform(s,c){for(r.push(s);;){if(n===0){if(ar(r)<1)break;const u=cr(r,1);o=(u[0]&128)===128,i=u[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(ar(r)<2)break;const u=cr(r,2);i=new DataView(u.buffer,u.byteOffset,u.length).getUint16(0),n=3}else if(n===2){if(ar(r)<8)break;const u=cr(r,8),g=new DataView(u.buffer,u.byteOffset,u.length),S=g.getUint32(0);if(S>Math.pow(2,53-32)-1){c.enqueue(ln);break}i=S*Math.pow(2,32)+g.getUint32(4),n=3}else{if(ar(r)<i)break;const u=cr(r,i);c.enqueue(Bn(o?u:Xr.decode(u),e)),n=0}if(i===0||i>t){c.enqueue(ln);break}}}})}const go=4;function $(t){if(t)return Sa(t)}function Sa(t){for(var e in $.prototype)t[e]=$.prototype[e];return t}$.prototype.on=$.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};$.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this};$.prototype.off=$.prototype.removeListener=$.prototype.removeAllListeners=$.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var n,i=0;i<r.length;i++)if(n=r[i],n===e||n.fn===e){r.splice(i,1);break}return r.length===0&&delete this._callbacks["$"+t],this};$.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),r=this._callbacks["$"+t],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,i=r.length;n<i;++n)r[n].apply(this,e)}return this};$.prototype.emitReserved=$.prototype.emit;$.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};$.prototype.hasListeners=function(t){return!!this.listeners(t).length};const Tr=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,r)=>r(e,0))(),V=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),wa="arraybuffer";function yo(t,...e){return e.reduce((r,n)=>(t.hasOwnProperty(n)&&(r[n]=t[n]),r),{})}const _a=V.setTimeout,Aa=V.clearTimeout;function Cr(t,e){e.useNativeTimers?(t.setTimeoutFn=_a.bind(V),t.clearTimeoutFn=Aa.bind(V)):(t.setTimeoutFn=V.setTimeout.bind(V),t.clearTimeoutFn=V.clearTimeout.bind(V))}const La=1.33;function Ea(t){return typeof t=="string"?Ra(t):Math.ceil((t.byteLength||t.size)*La)}function Ra(t){let e=0,r=0;for(let n=0,i=t.length;n<i;n++)e=t.charCodeAt(n),e<128?r+=1:e<2048?r+=2:e<55296||e>=57344?r+=3:(n++,r+=4);return r}function bo(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function $a(t){let e="";for(let r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e}function Ma(t){let e={},r=t.split("&");for(let n=0,i=r.length;n<i;n++){let o=r[n].split("=");e[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return e}class Da extends Error{constructor(e,r,n){super(e),this.description=r,this.context=n,this.type="TransportError"}}class On extends ${constructor(e){super(),this.writable=!1,Cr(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,r,n){return super.emitReserved("error",new Da(e,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const r=Bn(e,this.socket.binaryType);this.onPacket(r)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,r={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const r=$a(e);return r.length?"?"+r:""}}class Na extends On{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const r=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};ba(e,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,ya(e,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=bo()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(e,r)}}let ko=!1;try{ko=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Ta=ko;function Ca(){}class Ba extends Na{constructor(e){if(super(e),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,r){const n=this.request({method:"POST",data:e});n.on("success",r),n.on("error",(i,o)=>{this.onError("xhr post error",i,o)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=e}}class ee extends ${constructor(e,r,n){super(),this.createRequest=e,Cr(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;const r=yo(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=ee.requestsCount++,ee.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Ca,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete ee.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}ee.requestsCount=0;ee.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Pi);else if(typeof addEventListener=="function"){const t="onpagehide"in V?"pagehide":"unload";addEventListener(t,Pi,!1)}}function Pi(){for(let t in ee.requests)ee.requests.hasOwnProperty(t)&&ee.requests[t].abort()}const Oa=function(){const t=vo({xdomain:!1});return t&&t.responseType!==null}();class Ia extends Ba{constructor(e){super(e);const r=e&&e.forceBase64;this.supportsBinary=Oa&&!r}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new ee(vo,this.uri(),e)}}function vo(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Ta))return new XMLHttpRequest}catch{}if(!e)try{return new V[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const So=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class qa extends On{get name(){return"websocket"}doOpen(){const e=this.uri(),r=this.opts.protocols,n=So?{}:yo(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,r,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],i=r===e.length-1;Cn(n,this.supportsBinary,o=>{try{this.doWrite(n,o)}catch{}i&&Tr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=bo()),this.supportsBinary||(r.b64=1),this.createUri(e,r)}}const Zr=V.WebSocket||V.MozWebSocket;class xa extends qa{createSocket(e,r,n){return So?new Zr(e,r,n):r?new Zr(e,r):new Zr(e)}doWrite(e,r){this.ws.send(r)}}class Fa extends On{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const r=va(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(r).getReader(),i=ka();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const o=()=>{n.read().then(({done:c,value:u})=>{c||(this.onPacket(u),o())}).catch(c=>{})};o();const s={type:"open"};this.query.sid&&(s.data=`{"sid":"${this.query.sid}"}`),this._writer.write(s).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],i=r===e.length-1;this._writer.write(n).then(()=>{i&&Tr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Pa={websocket:xa,webtransport:Fa,polling:Ia},Ga=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Ua=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function dn(t){if(t.length>8e3)throw"URI too long";const e=t,r=t.indexOf("["),n=t.indexOf("]");r!=-1&&n!=-1&&(t=t.substring(0,r)+t.substring(r,n).replace(/:/g,";")+t.substring(n,t.length));let i=Ga.exec(t||""),o={},s=14;for(;s--;)o[Ua[s]]=i[s]||"";return r!=-1&&n!=-1&&(o.source=e,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=Va(o,o.path),o.queryKey=Ha(o,o.query),o}function Va(t,e){const r=/\/{2,9}/g,n=e.replace(r,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Ha(t,e){const r={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,o){i&&(r[i]=o)}),r}const un=typeof addEventListener=="function"&&typeof removeEventListener=="function",fr=[];un&&addEventListener("offline",()=>{fr.forEach(t=>t())},!1);class Se extends ${constructor(e,r){if(super(),this.binaryType=wa,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(r=e,e=null),e){const n=dn(e);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=dn(r.host).host);Cr(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Ma(this.opts.query)),un&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},fr.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const r=Object.assign({},this.opts.query);r.EIO=go,r.transport=e,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Se.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(e);r.open(),this.setTransport(r)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",Se.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=e.data,this._onError(r);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(r+=Ea(i)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Tr(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,r,n){return this._sendPacket("message",e,r,n),this}send(e,r,n){return this._sendPacket("message",e,r,n),this}_sendPacket(e,r,n,i){if(typeof r=="function"&&(i=r,r=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const o={type:e,data:r,options:n};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),e()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(Se.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),un&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=fr.indexOf(this._offlineEventListener);n!==-1&&fr.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,r),this.writeBuffer=[],this._prevBufferLen=0}}}Se.protocol=go;class Wa extends Se{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let r=this.createTransport(e),n=!1;Se.priorWebsocketSuccess=!1;const i=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",y=>{if(!n)if(y.type==="pong"&&y.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;Se.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(S(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const b=new Error("probe error");b.transport=r.name,this.emitReserved("upgradeError",b)}}))};function o(){n||(n=!0,S(),r.close(),r=null)}const s=y=>{const b=new Error("probe error: "+y);b.transport=r.name,o(),this.emitReserved("upgradeError",b)};function c(){s("transport closed")}function u(){s("socket closed")}function g(y){r&&y.name!==r.name&&o()}const S=()=>{r.removeListener("open",i),r.removeListener("error",s),r.removeListener("close",c),this.off("close",u),this.off("upgrading",g)};r.once("open",i),r.once("error",s),r.once("close",c),this.once("close",u),this.once("upgrading",g),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const r=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&r.push(e[n]);return r}}class za extends Wa{constructor(e,r={}){const n=typeof e=="object"?e:r;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(i=>Pa[i]).filter(i=>!!i)),super(e,n)}}function ja(t,e="",r){let n=t;r=r||typeof location<"u"&&location,t==null&&(t=r.protocol+"//"+r.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=r.protocol+t:t=r.host+t),/^(https?|wss?):\/\//.test(t)||(typeof r<"u"?t=r.protocol+"//"+t:t="https://"+t),n=dn(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const o=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+o+":"+n.port+e,n.href=n.protocol+"://"+o+(r&&r.port===n.port?"":":"+n.port),n}const Ka=typeof ArrayBuffer=="function",Ya=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,wo=Object.prototype.toString,Ja=typeof Blob=="function"||typeof Blob<"u"&&wo.call(Blob)==="[object BlobConstructor]",Qa=typeof File=="function"||typeof File<"u"&&wo.call(File)==="[object FileConstructor]";function In(t){return Ka&&(t instanceof ArrayBuffer||Ya(t))||Ja&&t instanceof Blob||Qa&&t instanceof File}function hr(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let r=0,n=t.length;r<n;r++)if(hr(t[r]))return!0;return!1}if(In(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return hr(t.toJSON(),!0);for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&hr(t[r]))return!0;return!1}function Xa(t){const e=[],r=t.data,n=t;return n.data=fn(r,e),n.attachments=e.length,{packet:n,buffers:e}}function fn(t,e){if(!t)return t;if(In(t)){const r={_placeholder:!0,num:e.length};return e.push(t),r}else if(Array.isArray(t)){const r=new Array(t.length);for(let n=0;n<t.length;n++)r[n]=fn(t[n],e);return r}else if(typeof t=="object"&&!(t instanceof Date)){const r={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=fn(t[n],e));return r}return t}function Za(t,e){return t.data=hn(t.data,e),delete t.attachments,t}function hn(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let r=0;r<t.length;r++)t[r]=hn(t[r],e);else if(typeof t=="object")for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(t[r]=hn(t[r],e));return t}const _o=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],ec=5;var v;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(v||(v={}));class tc{constructor(e){this.replacer=e}encode(e){return(e.type===v.EVENT||e.type===v.ACK)&&hr(e)?this.encodeAsBinary({type:e.type===v.EVENT?v.BINARY_EVENT:v.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let r=""+e.type;return(e.type===v.BINARY_EVENT||e.type===v.BINARY_ACK)&&(r+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(r+=e.nsp+","),e.id!=null&&(r+=e.id),e.data!=null&&(r+=JSON.stringify(e.data,this.replacer)),r}encodeAsBinary(e){const r=Xa(e),n=this.encodeAsString(r.packet),i=r.buffers;return i.unshift(n),i}}class qn extends ${constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let r;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(e);const n=r.type===v.BINARY_EVENT;n||r.type===v.BINARY_ACK?(r.type=n?v.EVENT:v.ACK,this.reconstructor=new rc(r),r.attachments===0&&super.emitReserved("decoded",r)):super.emitReserved("decoded",r)}else if(In(e)||e.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(e),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let r=0;const n={type:Number(e.charAt(0))};if(v[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===v.BINARY_EVENT||n.type===v.BINARY_ACK){const o=r+1;for(;e.charAt(++r)!=="-"&&r!=e.length;);const s=e.substring(o,r);if(s!=Number(s)||e.charAt(r)!=="-")throw new Error("Illegal attachments");const c=Number(s);if(!Ao(c)||c<0)throw new Error("Illegal attachments");if(c>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=c}if(e.charAt(r+1)==="/"){const o=r+1;for(;++r&&!(e.charAt(r)===","||r===e.length););n.nsp=e.substring(o,r)}else n.nsp="/";const i=e.charAt(r+1);if(i!==""&&Number(i)==i){const o=r+1;for(;++r;){const s=e.charAt(r);if(s==null||Number(s)!=s){--r;break}if(r===e.length)break}n.id=Number(e.substring(o,r+1))}if(e.charAt(++r)){const o=this.tryParse(e.substr(r));if(qn.isPayloadValid(n.type,o))n.data=o;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,r){switch(e){case v.CONNECT:return br(r);case v.DISCONNECT:return r===void 0;case v.CONNECT_ERROR:return typeof r=="string"||br(r);case v.EVENT:case v.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&_o.indexOf(r[0])===-1);case v.ACK:case v.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class rc{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const r=Za(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function nc(t){return typeof t=="string"}const Ao=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function ic(t){return t===void 0||Ao(t)}function br(t){return Object.prototype.toString.call(t)==="[object Object]"}function oc(t,e){switch(t){case v.CONNECT:return e===void 0||br(e);case v.DISCONNECT:return e===void 0;case v.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&_o.indexOf(e[0])===-1);case v.ACK:return Array.isArray(e);case v.CONNECT_ERROR:return typeof e=="string"||br(e);default:return!1}}function sc(t){return nc(t.nsp)&&ic(t.id)&&oc(t.type,t.data)}const ac=Object.freeze(Object.defineProperty({__proto__:null,protocol:ec,get PacketType(){return v},Encoder:tc,Decoder:qn,isPacketValid:sc},Symbol.toStringTag,{value:"Module"}));function j(t,e,r){return t.on(e,r),function(){t.off(e,r)}}const cc=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Lo extends ${constructor(e,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[j(e,"open",this.onopen.bind(this)),j(e,"packet",this.onpacket.bind(this)),j(e,"error",this.onerror.bind(this)),j(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...r){var n,i,o;if(cc.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(r.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const s={type:v.EVENT,data:r};if(s.options={},s.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const S=this.ids++,y=r.pop();this._registerAckCallback(S,y),s.id=S}const c=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,u=this.connected&&!(!((o=this.io.engine)===null||o===void 0)&&o._hasPingExpired());return this.flags.volatile&&!c||(u?(this.notifyOutgoingListeners(s),this.packet(s)):this.sendBuffer.push(s)),this.flags={},this}_registerAckCallback(e,r){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[e]=r;return}const o=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let c=0;c<this.sendBuffer.length;c++)this.sendBuffer[c].id===e&&this.sendBuffer.splice(c,1);r.call(this,new Error("operation has timed out"))},i),s=(...c)=>{this.io.clearTimeoutFn(o),r.apply(this,c)};s.withError=!0,this.acks[e]=s}emitWithAck(e,...r){return new Promise((n,i)=>{const o=(s,c)=>s?i(s):n(c);o.withError=!0,r.push(o),this.emit(e,...r)})}_addToQueue(e){let r;typeof e[e.length-1]=="function"&&(r=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...o)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(i)):(this._queue.shift(),r&&r(null,...o)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!e||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:v.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){const n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case v.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case v.EVENT:case v.BINARY_EVENT:this.onevent(e);break;case v.ACK:case v.BINARY_ACK:this.onack(e);break;case v.DISCONNECT:this.ondisconnect();break;case v.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const r=e.data||[];e.id!=null&&r.push(this.ack(e.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const r=this;let n=!1;return function(...i){n||(n=!0,r.packet({type:v.ACK,id:e,data:i}))}}onack(e){const r=this.acks[e.id];typeof r=="function"&&(delete this.acks[e.id],r.withError&&e.data.unshift(null),r.apply(this,e.data))}onconnect(e,r){this.id=e,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:v.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,e.data)}}}function vt(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}vt.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-r:t+r}return Math.min(t,this.max)|0};vt.prototype.reset=function(){this.attempts=0};vt.prototype.setMin=function(t){this.ms=t};vt.prototype.setMax=function(t){this.max=t};vt.prototype.setJitter=function(t){this.jitter=t};class mn extends ${constructor(e,r){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(r=e,e=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,Cr(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new vt({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=e;const i=r.parser||ac;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var r;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(r=this.backoff)===null||r===void 0||r.setMin(e),this)}randomizationFactor(e){var r;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(r=this.backoff)===null||r===void 0||r.setJitter(e),this)}reconnectionDelayMax(e){var r;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(r=this.backoff)===null||r===void 0||r.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new za(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=j(r,"open",function(){n.onopen(),e&&e()}),o=c=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",c),e?e(c):this.maybeReconnectOnOpen()},s=j(r,"error",o);if(this._timeout!==!1){const c=this._timeout,u=this.setTimeoutFn(()=>{i(),o(new Error("timeout")),r.close()},c);this.opts.autoUnref&&u.unref(),this.subs.push(()=>{this.clearTimeoutFn(u)})}return this.subs.push(i),this.subs.push(s),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(j(e,"ping",this.onping.bind(this)),j(e,"data",this.ondata.bind(this)),j(e,"error",this.onerror.bind(this)),j(e,"close",this.onclose.bind(this)),j(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(r){this.onclose("parse error",r)}}ondecoded(e){Tr(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,r){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new Lo(this,e,r),this.nsps[e]=n),n}_destroy(e){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(e){const r=this.encoder.encode(e);for(let n=0;n<r.length;n++)this.engine.write(r[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Tt={};function mr(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const r=ja(t,e.path||"/socket.io"),n=r.source,i=r.id,o=r.path,s=Tt[i]&&o in Tt[i].nsps,c=e.forceNew||e["force new connection"]||e.multiplex===!1||s;let u;return c?u=new mn(n,e):(Tt[i]||(Tt[i]=new mn(n,e)),u=Tt[i]),r.query&&!e.query&&(e.query=r.queryKey),u.socket(r.path,e)}Object.assign(mr,{Manager:mn,Socket:Lo,io:mr,connect:mr});function lc(t){return window.go.main.App.CleanupDepositMailAckFromGuildSyncBanking(t)}function dc(){return window.go.main.App.CloseWindow()}function uc(t){return window.go.main.App.CollectDepositMailAckFromGuildSyncBanking(t)}function fc(t){return window.go.main.App.CollectGuildSyncApplicationsData(t)}function hc(t){return window.go.main.App.CollectGuildSyncBankingData(t)}function mc(t){return window.go.main.App.CollectGuildSyncRosterData(t)}function pc(t,e){return window.go.main.App.CommitGuildSyncApplicationsData(t,e)}function gc(t,e){return window.go.main.App.CommitGuildSyncBankingData(t,e)}function yc(t,e){return window.go.main.App.CommitGuildSyncRosterData(t,e)}function bc(){return window.go.main.App.FlushPendingDepositMailAckCleanup()}function kc(){return window.go.main.App.GetESORunningStatus()}function vc(){return window.go.main.App.GetGuildSyncFileWatcherStatus()}function Sc(){return window.go.main.App.GetGuildSyncSession()}function wc(){return window.go.main.App.LogoutGuildSync()}function _c(){return window.go.main.App.MaximizeWindow()}function Ac(){return window.go.main.App.MinimizeWindow()}function Eo(){return window.go.main.App.SaveWindowState()}function Lc(t,e){return window.go.main.App.SetGuildSyncSavedVarsWatchFileEnabled(t,e)}function Ec(){return window.go.main.App.ShowMainWindow()}function Rc(){return window.go.main.App.StartDiscordLogin()}function $c(){return window.go.main.App.StartGuildSyncFileWatcher()}function Mc(){return window.go.main.App.StopGuildSyncFileWatcher()}function Dc(t){return window.go.main.App.WriteDepositMailToGuildSyncBanking(t)}function Nc(t,e,r){return window.runtime.EventsOnMultiple(t,e,r)}function Ct(t,e){return Nc(t,e,-1)}function Tc(t){window.runtime.BrowserOpenURL(t)}const Br="1.1.2",Cc=30*60*1e3,Ro="guildsync-pending-banking-uploads",$o="guildsync-pending-deposit-mail",Bc=5e3,Oc=30*1e3,Mo="guildsync-pending-roster-uploads",Do="guildsync-pending-applications-uploads",m=60*1e3,No=7e3,To=1400,Co=2400,Ic=4e3,qc=38,Bo=document.querySelector("#app");let Gi=null,Bt=null,Ui=!1,Xt=!1,pr=null,en=!1,tn=!1,rn=!1,we=null,F={running:!1,message:""},et=null,tt=null,pn=!1,rt=!1,nt=null,nn=!1,De=new Map,qe=new Map,T="",je=!1,Ke=!1,Ft=[],p={logged_in:!1,allowed:!1,status_message:""},me={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},d=null,P=[],Or=[],Ir=null,Ht=!1,kr=!1,vr="",it=new Set,ot=new Set,Wt="username",Fe="asc",gn=null,yn=null,z=[],Sr=null,Ne=!1,Vi=!1,wr="",bn=null,kn=null,Pe=new Set,st=new Set,se="",x="",D=-1,dt=!1,zt="",H=[],Te="",_e=[],Ae=!1,ce="",on=null,K=-1,St=!1,jt="",Le=[],_r=!1,Ge=!1,Ee="",ut="",ft=!1,pe="",W=[],ht="",Ye="",Re=[],$e=!1,le="",Hi=null,Ie=0;const xc=650;let Y=-1,wt=!1,_t=[],ge=!1,Ue="",At=!1,Kt=[],ye=!1,Ve="",Lt=!1,xn=[],be=!1,He="",Et="",ke="",at="",ve="",L=[],B=!1,O="",Qe=!1,qr="",xe="",Zt="",er="",ae=-1,Oe=!1,w=null,We=[],mt=!1,ue="",tr="",Z=-1,Rt=!1,Fn=null,Pt=null;const Pn=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let G=[],M="biweekly",Oo=null,Ce=!1,ze=!1,Xe="biweekly",$t=!1,pt=!1,ie="",oe=null,N={targetType:"other",note:"",tickets:""},de=!1,Ar=!1,U="",E={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},Mt="",C=-1,J=!1,vn={biweekly:0,monthly:0};const Fc=1780786800,Be=14*24*60*60,Lr=60*60,Er=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let R=Er[0].id;function Pc(){Bo.innerHTML=`
    <main class="splash-screen">
      <img src="${da}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await Ec(),await Gc(),Io(),Vt(),await lt()},5e3)}async function Gc(){try{p=await Sc()}catch(t){p={logged_in:!1,allowed:!1,status_message:""},h("session-error",k(t),{ttlMs:m})}}function Io(){Bo.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${ua}" alt="" class="title-icon" />
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
            <img src="${fa}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${a(Br)}</div>
            </div>
          </div>
          <div id="desktopUpdateArea" class="desktop-update-area"></div>
          <div id="discordArea" class="discord-area"></div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${qo()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content" aria-live="polite">
          ${Fo()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await Ac()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await Eo(),await dc()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await _c()}),yr(),Tn(),Po(),Qs(),Es(),qs(),Wo(),Ls(),ps(),gs(),ys(),bs(),ns(),Rs(),Kc(),Me(),kt(),Ui||(window.addEventListener("resize",()=>{la(),aa()}),mf(),Ui=!0)}function qo(){return Er.map(t=>{const e=t.id===R,r=Uc(t.id,e),n=r?xo():0,i=r?`Deposit mail needs attention: ${n} item${n===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${r?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${f(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${f(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${Vc(t.icon)}</span>
          <span class="guildsync-tab-label">${a(t.label)}</span>
          ${r?`<span class="guildsync-tab-mail-badge" aria-label="${f(i)}">${n>99?"99+":a(String(n))}</span>`:""}
        </button>
      `}).join("")}function xo(){return A()?Ur()+ir()+Os():0}function Uc(t,e){return t!=="more"||e?!1:xo()>0}function Vc(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function Fo(){const t=Er.find(r=>r.id===R)||Er[0];let e="";return t.id==="discord-members"?e=Jc():t.id==="eso-members"?e=Qc():t.id==="more"?e=Yd():t.id==="settings"?e=Sl():e=`
      <div class="guildsync-tab-panel" data-active-tab="${f(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${a(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${de?_d():""}
    ${$t?ou():""}
    ${Oe?md():""}
    ${wt?wl():""}
    ${At?$l():""}
    ${Lt?Tl():""}
    ${Qe?Hl():""}
    ${Rt?jc():""}
  `}function Hc(){return Rt||dt||ft||de||$t||Oe||St||wt||At||Lt||Qe||ze}function Wc(){return Rt?!1:Qe?(En(),!0):Lt?(Ln(),!0):At?(An(),!0):wt?(_n(),!0):Oe?(yt(),!0):St?(Mn(),!0):$t?(Mr(),!0):de?(de=!1,l(),!0):dt?(dt=!1,l(),!0):ft?(ft=!1,l(),!0):ze?(ze=!1,l(),!0):!1}function zc(t){t.key==="Escape"&&Wc()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",zc,!0),window.guildSyncGlobalModalEscapeAttached=!0);function Gn(t={}){return new Promise(e=>{Pt&&Pt(!1),Rt=!0,Fn={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},Pt=e,l()})}function Rr(t=!1){const e=Pt;Pt=null,Rt=!1,Fn=null,e&&e(t===!0),l()}function jc(){const t=Fn||{};return`
    <div class="roster-history-overlay guildsync-confirm-overlay" role="dialog" aria-modal="true" aria-labelledby="guildSyncConfirmTitle">
      <div class="roster-history-dialog guildsync-confirm-dialog">
        <div class="roster-history-header guildsync-confirm-header">
          <div>
            <h3 id="guildSyncConfirmTitle">${a(t.title||"Confirm Action")}</h3>
            ${t.detail?`<p>${a(t.detail)}</p>`:""}
          </div>
        </div>
        <div class="guildsync-confirm-body">
          ${a(t.message||"Are you sure?")}
        </div>
        <div class="guildsync-confirm-actions">
          <button id="cancelGuildSyncConfirmButton" class="guildsync-confirm-button guildsync-confirm-cancel" type="button">${a(t.cancelLabel||"Cancel")}</button>
          <button id="acceptGuildSyncConfirmButton" class="guildsync-confirm-button guildsync-confirm-accept ${f(t.confirmClass||"danger")}" type="button">${a(t.confirmLabel||"Confirm")}</button>
        </div>
      </div>
    </div>
  `}function Wi(t){var n,i,o,s;const e=(i=(n=t.target).closest)==null?void 0:i.call(n,"#cancelGuildSyncConfirmButton"),r=(s=(o=t.target).closest)==null?void 0:s.call(o,"#acceptGuildSyncConfirmButton");if(!(!e&&!r)){if(t.preventDefault(),t.stopPropagation(),e){Rr(!1);return}r&&Rr(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",Wi,!0),document.addEventListener("pointerup",Wi,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function Kc(){if(!Rt)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=n=>{n.preventDefault(),n.stopPropagation(),Rr(!1)}),e&&(e.onclick=n=>{n.preventDefault(),n.stopPropagation(),Rr(!0)});const r=document.querySelector(".guildsync-confirm-overlay");r&&(r.onclick=n=>{n.target===r&&(n.preventDefault(),n.stopPropagation())})}function Po(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(Hc())return;const e=t.dataset.tabId;!e||e===R||(R=e,l())})})}function Yc(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function l(t={}){Qe&&Yc();const e=document.querySelector(".guildsync-tabs"),r=document.querySelector("#guildSyncTabContent");e&&(e.innerHTML=qo()),r&&(r.innerHTML=Fo()),Po(),Qs(),Es(),qs(),Wo(),Ls(),ps(),gs(),ys(),bs(),ns(),Rs(),t.restoreDiscordSearchFocus&&xu(),t.restoreRosterSearchFocus&&Fu(),R==="discord-members"&&(d==null?void 0:d.connected)&&P.length===0&&!Ht&&ri({silent:!0}),R==="eso-members"&&(d==null?void 0:d.connected)&&z.length===0&&!Ne&&!Vi&&(Vi=!0,nr({silent:!0})),R==="more"&&(d==null?void 0:d.connected)&&G.length===0&&!Ce&&fe({silent:!0}),(R==="discord-members"||R==="eso-members"||R==="settings")&&(d==null?void 0:d.connected)&&L.length===0&&!B&&xr({silent:!0})}function Jc(){const t=Ou(),e=Pu(),r=Array.from(it),n=Array.from(ot);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${a(Zs(Ir))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${Ht||kr?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${kr?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${f(vr)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!it.has(i)).map(i=>`<option value="${f(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All roles</span>':r.map(i=>Hu(i)).join("")}
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
              ${Pn.filter(i=>!ot.has(i.id)).map(i=>`<option value="${f(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(i=>Go("discord",i)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${lr("username","Username")}
                ${lr("global_name","Global Name")}
                ${lr("server_nickname","Server Nickname")}
                ${lr("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>Gu(i)).join(""):Uu()}
            </tbody>
          </table>
        </div>
      </div>
      ${ft?ml():""}
    </div>
  `}function Qc(){const t=al(),e=dl(),r=Array.from(Pe),n=Array.from(st);return`
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
          <span class="discord-last-refresh">Last Refresh: ${a(Id(Sr))}</span>
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
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${f(wr)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!Pe.has(i)).map(i=>`<option value="${f(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All ranks</span>':r.map(i=>ul(i)).join("")}
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
              ${Pn.filter(i=>!st.has(i.id)).map(i=>`<option value="${f(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(i=>Go("roster",i)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${Ot("account_name","Account Name")}
                ${Ot("rank","Rank")}
                ${Ot("joined","Joined")}
                ${Ot("notes","Notes","roster-notes-header")}
                ${Ot("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map((i,o)=>Xc(i,o)).join(""):il()}
            </tbody>
          </table>
        </div>
      </div>
      ${dt?bl():""}
      ${St?el():""}
    </div>
  `}function Xc(t,e=-1){const r=ol(t.rank||""),n=r?` style="color: ${r};"`:"";return`
    <tr class="eso-roster-row${e===D?" roster-search-active-row":""}"${n} data-roster-row-index="${f(String(e))}" data-eso-account-name="${f(t.account_name||"")}">
      <td>${a(t.account_name||"")}</td>
      <td>${Un(t.rank||"")}</td>
      <td>${a(Gr(t.joined))}</td>
      <td class="roster-notes-cell">${Zc(t)}</td>
      <td class="member-link-action-cell">${ls({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function Zc(t){const e=String((t==null?void 0:t.account_name)||"").trim(),r=Number((t==null?void 0:t.note_count)||0),n=r>0,i=n?`${r} roster note${r===1?"":"s"} for ${e}`:`No roster notes for ${e}`;return`
    <button
      class="roster-notes-button${n?" has-notes":""}"
      type="button"
      data-open-roster-notes="${f(e)}"
      title="${f(i)}"
      aria-label="${f(i)}"
    >
      <svg class="roster-notes-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4.5 5.25c0-.69.56-1.25 1.25-1.25h5.1c.89 0 1.72.34 2.35.95A3.28 3.28 0 0 1 15.55 4h2.7c.69 0 1.25.56 1.25 1.25v13.5c0 .69-.56 1.25-1.25 1.25h-4.6c-.75 0-1.45.29-1.98.82a.95.95 0 0 1-1.34 0A2.8 2.8 0 0 0 8.35 20h-2.6c-.69 0-1.25-.56-1.25-1.25V5.25Zm7.25 1.6A1.28 1.28 0 0 0 10.85 6H6.5v12h1.85c1.14 0 2.24.35 3.15 1V7.1c0-.09.01-.17.25-.25Zm1.75 12.15a6.32 6.32 0 0 1 3.15-1h.85V6h-1.95c-.73 0-1.4.29-1.9.8l-.15.15V19Z"/></svg>
      ${n?`<span class="roster-notes-count" aria-hidden="true">${r}</span>`:""}
    </button>
  `}function el(){const t=jt||"",e=Boolean((p==null?void 0:p.logged_in)&&(p==null?void 0:p.allowed));return`
    <div class="roster-history-overlay roster-notes-overlay" role="dialog" aria-modal="true" aria-labelledby="rosterNotesTitle">
      <div class="roster-history-dialog roster-notes-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="rosterNotesTitle">Roster Notes</h3>
            <p>${a(t)}</p>
          </div>
          <button id="closeRosterNotesButton" class="roster-history-close" type="button" aria-label="Close roster notes">\xD7</button>
        </div>
        <div class="roster-notes-body">
          ${Ee?`<div class="discord-data-error">${a(Ee)}</div>`:""}
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
                ${tl()}
              </tbody>
            </table>
          </div>
          ${e?rl():'<div class="roster-history-muted">Log in to add a new note.</div>'}
        </div>
      </div>
    </div>
  `}function tl(){return _r?'<tr><td class="bank-empty-row" colspan="3">Loading notes...</td></tr>':!Array.isArray(Le)||Le.length===0?'<tr><td class="bank-empty-row" colspan="3">No notes recorded for this member.</td></tr>':Le.map(t=>`
      <tr>
        <td class="roster-notes-when-cell">${a(nl(t.timestamp))}</td>
        <td class="roster-notes-officer-cell">${a(t.officer||"")}</td>
        <td class="roster-notes-note-cell">${a(t.note||"")}</td>
      </tr>
    `).join("")}function rl(){return`
    <div class="roster-notes-form">
      <label for="rosterNotesNewNote">Add Note</label>
      <textarea
        id="rosterNotesNewNote"
        class="roster-notes-textarea"
        rows="4"
        placeholder="Enter a new roster note..."
        ${Ge?"disabled":""}
      >${a(ut)}</textarea>
      <button id="saveRosterNoteButton" class="refresh-discord-button" type="button" ${Ge?"disabled":""}>
        ${Ge?"Saving...":"Save Note"}
      </button>
    </div>
  `}function nl(t){const e=Number(t||0);return!Number.isFinite(e)||e<=0?"":new Date(e*1e3).toLocaleString()}function il(){return`
    <tr>
      <td class="bank-empty-row" colspan="5">${a(Ne?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function ol(t){String(t||"").trim();const e=Wu(t);return zr(e==null?void 0:e.role_color)}function Un(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${a(e)}</span>`}function sl(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":Un(e)}function al(){const t=wr.trim().toLowerCase(),e=z.filter(r=>{const n=String(r.rank||"").trim();if(Pe.size>0&&!Pe.has(n)||!Ho(st,Sn(r)))return!1;if(!t)return!0;const i=Gr(r.joined),o=Kn(r.joined),s=Sn(r),c=Vo(r.account_name||"");return[r.account_name,n,i,o,r.joined,s,c].map(g=>String(g||"").toLowerCase()).join(" ").includes(t)});return cl(e)}function cl(t){if(!se||!x)return t;const e=x==="desc"?-1:1;return[...t].sort((r,n)=>{const i=zi(r,se),o=zi(n,se),s=i.localeCompare(o,void 0,{sensitivity:"base",numeric:!0});return s!==0?s*e:String(r.account_name||"").localeCompare(String(n.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function zi(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const r=Number(t.joined||0);return Number.isFinite(r)&&r>0?String(r).padStart(16,"0"):""}if(e==="notes")return String(Number(t.note_count||0)).padStart(8,"0");if(e==="linked"){const r=Sn(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[r]||"9"} ${r} ${Vo(t.account_name||"")}`}return String(t.account_name||"")}function ll(t){const r=new Set(["account_name","rank","joined","notes","linked"]).has(t)?t:"account_name";se!==r?(se=r,x="asc"):x==="asc"?x="desc":x==="desc"?(se="",x=""):(se=r,x="asc"),D=-1,l()}function Ot(t,e,r=""){const n=se===t&&Boolean(x),i=n?x==="asc"?"ascending":"descending":"none",o=n?x==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${f(r)}" aria-sort="${f(i)}">
      <button
        class="discord-sort-header roster-sort-header${n?" active":""}"
        type="button"
        data-roster-sort-column="${f(t)}"
        title="Sort ${f(e)}${n&&x==="asc"?" descending":n&&x==="desc"?" not sorted":" ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${o}</span>
      </button>
    </th>
  `}function dl(){return Array.from(new Set(z.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function ul(t){const e=oi(t),r=zr(e==null?void 0:e.role_color),n=ai(r),i=si(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-roster-rank-filter="${f(t)}"
      style="${i}"
      title="Remove ${f(t)} filter"
    >
      <span>${a(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function fl(t){const e=Pn.find(r=>r.id===t);return e?e.label:t}function Go(t,e){const r=t==="roster"?"roster":"discord",n=fl(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${r}-link-status-filter="${f(e)}"
      title="Remove ${f(n)} link filter"
    >
      <span>${a(n)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Uo(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked"&&String(r.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function hl(t){return Uo(Pr(t==null?void 0:t.discord_id))}function Sn(t){return Uo(Fr(t==null?void 0:t.account_name))}function Vo(t){const e=Fr(t),r=cs({mode:"eso-to-discord",esoAccountName:t}),n=e.filter(o=>String(o.link_status||"").trim().toLowerCase()==="linked").map(o=>o.discord_server_nickname||o.discord_display_name||o.discord_username||o.discord_user_id||"").filter(Boolean),i=e.filter(o=>String(o.link_status||"").trim().toLowerCase()==="candidate").map(o=>o.discord_server_nickname||o.discord_display_name||o.discord_username||o.discord_user_id||"").filter(Boolean);return[r.label,r.title,n.join(" "),i.join(" ")].filter(Boolean).join(" ")}function Ho(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function ml(){return`
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
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${f(pe)}" />
        </div>

        ${le?`<div class="discord-data-error">${a(le)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${pl()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${Ye?`: ${a(Ye)}`:""}</div>
            ${gl()}
          </div>
        </div>
      </div>
    </div>
  `}function pl(){return $e&&W.length===0?'<div class="roster-history-muted">Searching...</div>':W.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${W.map((t,e)=>`
        <button class="roster-history-match${e===Y||t.discord_id===ht?" is-selected":""}" type="button" data-discord-history-id="${f(t.discord_id)}" data-discord-history-name="${f(wn(t))}">
          <span>${a(wn(t))}</span>
          <strong>${a(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===Y?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function gl(){return ht?$e&&Re.length===0?'<div class="roster-history-muted">Loading history...</div>':Re.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${Re.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${a(Kn(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${a(yl(t.event_type))}</td>
              <td>${a(t.old_value||"")}</td>
              <td>${a(t.new_value||"")}</td>
              <td>${a(t.initiator||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function wn(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function yl(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function bl(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(zt)}" />
        </div>

        ${ce?`<div class="discord-data-error">${a(ce)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${kl()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${Te?`: ${a(Te)}`:""}</div>
            ${vl()}
          </div>
        </div>
      </div>
    </div>
  `}function kl(){return Ae&&H.length===0?'<div class="roster-history-muted">Searching...</div>':H.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${H.map((t,e)=>`
        <button class="roster-history-match${e===K||t.account_name===Te?" is-selected":""}" type="button" data-roster-history-account="${f(t.account_name)}">
          <span>${a(t.account_name)}</span>
          <strong>${a(t.rank||"")}</strong>
          ${e===K?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function vl(){return Te?Ae&&_e.length===0?'<div class="roster-history-muted">Loading history...</div>':_e.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${_e.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${a(Kn(t.timestamp))}</td>
              <td>${a(t.event_type||"")}</td>
              <td>${sl(t.rank)}</td>
              <td>${a(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function Sl(){return`
    <div class="guildsync-tab-panel reports-panel" data-active-tab="settings">
      <div class="discord-data-header reports-header">
        <div>
          <h2 class="discord-data-title">Reports & Admin</h2>
          <p class="discord-data-subtitle">Run GuildSync reports and administrative review tools. More options can be added here later.</p>
        </div>
      </div>

      <div class="reports-scroll-area">
        <section class="reports-list" aria-label="Available reports">
          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Associates Promotion Eligible</h3>
              <p>Shows Associates who have been in the guild at least two weeks, have purchased at least one raffle ticket, and are linked to Discord. Also shows otherwise eligible Associates who still need a Discord link reviewed.</p>
            </div>
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${ge?"disabled":""}>
              ${ge?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${ye?"disabled":""}>
              ${ye?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${be?"disabled":""}>
              ${be?"Loading...":"Run"}
            </button>
          </article>
        </section>

        <article class="report-option-card">
          <div class="report-option-copy">
            <h3>ESO / Discord Member Links</h3>
            <p>Review automatic ESO-to-Discord links, accept candidate matches, unlink blocked matches, or run the matcher again after roster or Discord refreshes.</p>
          </div>
          <button id="runMemberLinksReportButton" class="refresh-discord-button report-run-button" type="button" ${B?"disabled":""}>
            ${B?"Loading...":"Run"}
          </button>
        </article>
      </div>
    </div>
  `}function Wo(){var t,e,r,n;R==="settings"&&((t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>zo()),(e=document.querySelector("#runDiscordRankAuditReportButton"))==null||e.addEventListener("click",()=>Rl()),(r=document.querySelector("#runDiscordLastSeenReportButton"))==null||r.addEventListener("click",()=>Nl()),(n=document.querySelector("#runMemberLinksReportButton"))==null||n.addEventListener("click",()=>Gl()))}function zo(){wt=!0,Ue="",l(),Ss()}function _n(){wt=!1,Ue="",l()}function wl(){const t=_l(),e=Al(),r=_t.length;return`
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
          <button id="copyAssociateTicketReportGridButton" class="bank-export-copy-button" type="button" ${r===0?"disabled":""}>Copy Grid</button>
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${ge?"disabled":""}>${ge?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(r))} total row${r===1?"":"s"}</span>
        </div>

        ${Ue?`<div class="discord-data-error">${a(Ue)}</div>`:""}

        <div class="report-results-content">
          ${ge&&r===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!ge&&r===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${r>0?ji("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${r>0?ji("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${a(Yo())}</textarea>
      </div>
    </div>
  `}function _l(){return _t.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function Al(){return _t.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function ji(t,e,r,n){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${a(t)}</h4>
          <p>${a(e)}</p>
        </div>
        <span>${a(String(r.length))} row${r.length===1?"":"s"}</span>
      </div>
      ${r.length>0?Ll(r):`<div class="roster-history-muted report-section-empty">${a(n)}</div>`}
    </section>
  `}function Ll(t=_t){return`
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
              <td>${a(e.account_name||"")}</td>
              <td>${Un(e.rank||"")}</td>
              <td>${a(Gr(e.joined))}</td>
              <td>${a(Wr(e.purchased_tickets||0))}</td>
              <td class="associate-earliest-deposit-cell">${a(jo(e))}</td>
              <td>${a(Ko(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function jo(t){const e=String((t==null?void 0:t.earliest_deposit_summary)||"").trim();if(e)return e;const r=String((t==null?void 0:t.earliest_deposit_date)||"").trim(),n=String((t==null?void 0:t.earliest_deposit_raffle_period)||"").trim();return[r,n].filter(Boolean).join(" | ")}function Ko(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function Yo(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Earliest Deposit / Raffle","Discord Link"]];for(const e of _t){const r=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([r,e.account_name||"",e.rank||"",Gr(e.joined),Wr(e.purchased_tickets||0),jo(e),Ko(e)])}return t.map(e=>e.map(Vr).join("	")).join(`
`)}async function El(){const t=Yo();if(await Hr(t)){h("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:m});return}const r=document.querySelector("#associateTicketReportTsv");r&&(r.focus(),r.select()),h("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function Rl(){At=!0,Ve="",l(),vs()}function An(){At=!1,Ve="",l()}function $l(){const t=Kt.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${ye?"disabled":""}>${ye?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${Ve?`<div class="discord-data-error">${a(Ve)}</div>`:""}

        <div class="report-results-content">
          ${ye&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!ye&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?Ml(Kt):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${a(Xo())}</textarea>
      </div>
    </div>
  `}function Ml(t=Kt){return`
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
              <td data-label="Discord Member" class="discord-rank-audit-member-cell">${a(Jo(e))}</td>
              <td data-label="Discord Rank Role" class="discord-rank-audit-discord-cell">${a(e.discord_rank||"No matching rank role")}</td>
              <td data-label="Linked ESO Account(s)" class="discord-rank-audit-eso-account-cell">${a(e.eso_accounts||"No linked ESO account")}</td>
              <td data-label="ESO Rank" class="discord-rank-audit-eso-rank-cell">${a(e.eso_rank||"None")}</td>
              <td data-label="Issue" class="discord-rank-audit-issue-cell">${a(Qo(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Jo(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function Qo(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function Xo(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of Kt)t.push([Jo(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",Qo(e)]);return t.map(e=>e.map(Vr).join("	")).join(`
`)}async function Dl(){const t=Xo();if(await Hr(t)){h("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:m});return}const r=document.querySelector("#discordRankAuditReportTsv");r&&(r.focus(),r.select()),h("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function Nl(){Lt=!0,He="",Et="",l(),ks(),L.length===0&&!B&&xr({silent:!0})}function Ln(){Lt=!1,He="",Et="",ke="",at="",ve="",l()}function Tl(){const t=Vn(),e=xn.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${be?"disabled":""}>${be?"Loading...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(e))} Discord member${e===1?"":"s"}</span>
        </div>

        <div class="discord-last-seen-filter-row">
          <input
            id="discordLastSeenReportSearchInput"
            class="member-links-report-search-input discord-last-seen-search-input"
            type="search"
            autocomplete="off"
            spellcheck="false"
            placeholder="Search Discord member, username, last seen action, or date..."
            value="${f(Et)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${ke===""?"selected":""}>All link statuses</option>
            <option value="linked" ${ke==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${ke==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${ke==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${He?`<div class="discord-data-error discord-last-seen-report-error">${a(He)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${be&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!be&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?Cl(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${a(es(t))}</textarea>
      </div>
    </div>
  `}function Cl(t=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${It("name","Discord Member")}</th>
            <th>${It("eso","Linked ESO Account")}</th>
            <th>${It("date","Last Seen")}</th>
            <th>${It("days","Days Since")}</th>
            <th>${It("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr class="discord-last-seen-row ${f(Fl(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${f(Je(e).status)}" data-discord-last-seen-search="${f(Zo(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${xl(e)}
                  <span>${a(gt(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${Ol(e)}</td>
              <td>${a(Hn(e.last_seen))}</td>
              <td>${a(Wn(e.last_seen))}</td>
              <td>${a($r(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function It(t,e){const r=at===t,n=r?ve==="asc"?"\u25B2":"\u25BC":"\u2195",i=r?`${e}: ${ve==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${r?" active":""}" type="button" data-discord-last-seen-sort="${f(t)}" title="${f(i)}">
      <span>${a(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${a(n)}</span>
    </button>
  `}function Vn(){const t=[...xn],e=at,r=ve;if(!e||!r)return t;const n=r==="desc"?-1:1;return t.sort((i,o)=>{var s,c;if(e==="date"){const u=Number(i.last_seen||0)||0,g=Number(o.last_seen||0)||0;return(u-g)*n}if(e==="days")return(Ki(i.last_seen)-Ki(o.last_seen))*n;if(e==="action")return $r(i.last_seen_action).localeCompare($r(o.last_seen_action),void 0,{sensitivity:"base"})*n;if(e==="eso"){const u=Je(i),g=Je(o),S={linked:0,candidate:1,unlinked:2},y=((s=S[u.status])!=null?s:9)-((c=S[g.status])!=null?c:9);return y!==0?y*n:u.esoAccountName.localeCompare(g.esoAccountName,void 0,{sensitivity:"base"})*n}return gt(i).localeCompare(gt(o),void 0,{sensitivity:"base"})*n})}function Bl(t){at!==t?(at=t,ve="asc"):ve==="asc"?ve="desc":(at="",ve=""),l()}function gt(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function Zo(t){return[gt(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,Il(t),Hn(t==null?void 0:t.last_seen),Wn(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function Je(t){const e=rd(t==null?void 0:t.discord_id),r=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),n=String((e==null?void 0:e.eso_account_name)||"").trim();return r==="linked"&&n?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:n,title:`Linked ESO account: ${n}`}:(r==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&n?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:n,title:`Fuzzy ESO account candidate: ${n}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function Ol(t){const e=Je(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${f(e.className)}"
      title="${f(e.title)}"
      aria-label="${f(e.label)}"
      role="img"
    ></span>
  `}function Il(t){const e=Je(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function ql(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!r)return"";if(/^https?:\/\//i.test(e))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function xl(t){const e=gt(t),r=e?e.slice(0,2).toUpperCase():"?",n=ql(t);return n?`<span class="discord-member-avatar"><img src="${f(n)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${a(r)}</span>`}function Hn(t){const e=Number(t);if(!e)return"Never";const r=new Date(e*1e3);if(Number.isNaN(r.getTime()))return String(t||"");const n=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(r).reduce((i,o)=>(i[o.type]=o.value,i),{});return`${n.month}/${n.day}/${n.year} ${n.hour}:${n.minute} ${n.dayPeriod}`}function Fl(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const r=(Date.now()-e*1e3)/864e5;return r>30?"discord-last-seen-red":r>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function Wn(t){const e=Number(t);if(!e)return"Never";const r=Date.now()-e*1e3;if(!Number.isFinite(r))return"";if(r<0)return"0 days";const n=Math.floor(r/864e5);return`${n} day${n===1?"":"s"}`}function Ki(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const r=Date.now()-e*1e3;return Number.isFinite(r)?r<0?0:Math.floor(r/864e5):Number.POSITIVE_INFINITY}function $r(t){return String(t||"").trim()||"None tracked"}function es(t=Vn()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const r of t){const n=Je(r);e.push([gt(r),n.label||"",n.esoAccountName||"",Hn(r==null?void 0:r.last_seen),Wn(r==null?void 0:r.last_seen),$r(r==null?void 0:r.last_seen_action),(r==null?void 0:r.username)||"",(r==null?void 0:r.discord_id)||""])}return e.map(r=>r.map(Vr).join("	")).join(`
`)}async function Pl(){const t=Vn().filter(i=>{const o=ne(Et),s=String(ke||"").trim().toLowerCase(),c=!o||ne(Zo(i)).includes(o),u=!s||Je(i).status===s;return c&&u}),e=es(t);if(await Hr(e)){h("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:m});return}const n=document.querySelector("#discordLastSeenReportTsv");n&&(n.focus(),n.select()),h("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function Gl(){Qe=!0,O="",l(),L.length===0&&!B&&xr({silent:!0})}function En(){Qe=!1,qr="",xe="",Zt="",er="",ae=-1,l()}function ts(t){return[...new Set((Array.isArray(L)?L:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function rs(t,e){return t.map(r=>`<option value="${f(r)}" ${e===r?"selected":""}>${a(r)}</option>`).join("")}function Ul(){return rs(ts("link_status"),Zt)}function Vl(){return rs(ts("link_method"),er)}function Hl(){return`
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
          <button id="refreshMemberLinksButton" class="clear-discord-filters-button" type="button" ${B?"disabled":""}>Refresh Links</button>
          <button id="runMemberAutoLinkButton" class="refresh-discord-button" type="button" ${B?"disabled":""}>${B?"Running...":"Run Auto-Linking"}</button>
          <span class="roster-history-muted">${a(String(L.length))} link/candidate row${L.length===1?"":"s"}</span>
        </div>

        <div class="member-links-report-filter-row">
          <input
            id="memberLinksReportSearchInput"
            class="member-links-report-search-input"
            type="search"
            autocomplete="off"
            spellcheck="false"
            placeholder="Search Discord account or ESO member..."
            value="${f(qr)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${Zt===""?"selected":""}>All statuses</option>
            ${Ul()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${er===""?"selected":""}>All methods</option>
            ${Vl()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${xe===""?"selected":""}>All actions</option>
            <option value="needs-link" ${xe==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${xe==="can-unlink"?"selected":""}>Unlink Available</option>
            <option value="can-unblock" ${xe==="can-unblock"?"selected":""}>Unblock Available</option>
          </select>
        </div>

        ${O?`<div class="discord-data-error member-links-report-error">${a(O)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${Kl()}
        </div>
      </div>
    </div>
  `}function ns(){var r,n,i,o,s,c;if(!Qe)return;(r=document.querySelector("#closeMemberLinksReportButton"))==null||r.addEventListener("click",En),(n=document.querySelector("#refreshMemberLinksButton"))==null||n.addEventListener("click",()=>xr()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>ed());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",Yl),t.addEventListener("keydown",Zl)),(o=document.querySelector("#memberLinksReportActionFilter"))==null||o.addEventListener("change",Jl),(s=document.querySelector("#memberLinksReportStatusFilter"))==null||s.addEventListener("change",Ql),(c=document.querySelector("#memberLinksReportMethodFilter"))==null||c.addEventListener("change",Xl),rr(),document.querySelectorAll("[data-accept-member-candidate]").forEach(u=>{u.addEventListener("click",()=>os(u.dataset.acceptMemberCandidate||"",u.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(u=>{u.addEventListener("click",()=>td(u.dataset.unlinkMemberLink||"",u.dataset.unlinkMemberLinkDiscordId||""))}),document.querySelectorAll("[data-unblock-member-auto-link]").forEach(u=>{u.addEventListener("click",()=>ss(u.dataset.unblockMemberAutoLink||"",u.dataset.unblockMemberAutoLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",u=>{u.target===e&&En()})}function Yi(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function Ji(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Wl(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function zl(t){return[...Array.isArray(t)?t:[]].sort((e,r)=>{const n=Yi(e)-Yi(r);if(n!==0)return n;const i=Ji(e).localeCompare(Ji(r),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((r==null?void 0:r.discord_user_id)||""),void 0,{sensitivity:"base"})})}function jl(t){const e=Rn(t);let r="";e==="Username"?r=(t==null?void 0:t.discord_username)||"":e==="Global Name"?r=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(r=(t==null?void 0:t.discord_server_nickname)||""),r||(r=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const n=e?` <span class="member-link-report-match-field">(${a(e)})</span>`:"";return`<span class="member-link-report-discord-name">${a(r)}</span>${n}`}function Kl(){return B&&L.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(L)||L.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${zl(L).map(e=>{var o;const r=String(e.link_status||"").trim().toLowerCase(),n=String(e.link_method||"").trim().toLowerCase(),i=jl(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${f(Wl(e))}"
                data-member-links-report-status="${f(r)}"
                data-member-links-report-method="${f(n)}"
                data-member-links-report-action="${f(Number(e.locked||0)===1||r==="blocked"?"can-unblock":r==="linked"?"can-unlink":r==="candidate"?"needs-link":"")}"
              >
                <td>${a(e.eso_account_name||"")}</td>
                <td>${i}</td>
                <td class="member-links-status-col">${a(Number(e.locked||0)===1||r==="blocked"?"blocked":r||"")}</td>
                <td class="member-links-method-col">${a(n||"")}${Number(e.locked||0)===1?" \u{1F512}":""}</td>
                <td class="member-links-action-col">
                  <div class="member-link-actions">
                    ${r==="candidate"?`<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${f(e.eso_account_name||"")}" data-accept-member-candidate-discord-id="${f(e.discord_user_id||"")}" aria-label="Accept candidate link" title="Accept candidate link">\u2713</button>`:""}
                    ${r==="linked"?`<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${f(e.eso_account_name||"")}" data-unlink-member-link-discord-id="${f(e.discord_user_id||"")}" aria-label="Unlink this ESO/Discord pair" title="Unlink this ESO/Discord pair">\u{1F5D1}</button>`:""}
                    ${Number(e.locked||0)===1||r==="blocked"?`<button class="member-link-report-action member-link-report-unblock" type="button" data-unblock-member-auto-link="${f(e.eso_account_name||"")}" data-unblock-member-auto-link-discord-id="${f(e.discord_user_id||"")}" aria-label="Remove auto-link block" title="Remove auto-link block">\u21BA</button>`:""}
                  </div>
                </td>
                <td class="member-links-confidence-col">${a(String((o=e.match_confidence)!=null?o:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function is(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function Qi(t){const e=is();if(e.forEach(n=>n.classList.remove("member-links-report-row-active")),e.length===0){ae=-1;return}ae=Math.max(0,Math.min(t,e.length-1));const r=e[ae];r.classList.add("member-links-report-row-active"),r.scrollIntoView({block:"nearest"})}function rr(){const t=ne(qr),e=String(xe||"").trim().toLowerCase(),r=String(Zt||"").trim().toLowerCase(),n=String(er||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let o=0;i.forEach(c=>{const u=ne(c.dataset.memberLinksReportSearch||""),g=String(c.dataset.memberLinksReportAction||"").trim().toLowerCase(),S=String(c.dataset.memberLinksReportStatus||"").trim().toLowerCase(),y=String(c.dataset.memberLinksReportMethod||"").trim().toLowerCase(),Ze=(!t||u.includes(t))&&(!e||g===e)&&(!r||S===r)&&(!n||y===n);c.hidden=!Ze,c.classList.remove("member-links-report-row-active"),Ze&&(o+=1)});const s=document.querySelector("#memberLinksReportSearchEmpty");s&&(s.hidden=o!==0),ae=-1}function Yl(t){qr=t.target.value||"",rr()}function Jl(t){xe=t.target.value||"",rr()}function Ql(t){Zt=t.target.value||"",rr()}function Xl(t){er=t.target.value||"",rr()}function Zl(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=is();if(e.length===0)return;if(t.key==="ArrowDown"){const n=ae<0?0:ae+1;Qi(n>=e.length?e.length-1:n);return}const r=ae<0?e.length-1:ae-1;Qi(r<0?0:r)}async function xr(t={}){if(!(d!=null&&d.connected)){O="You must be connected to load member links.",l();return}B=!0,O="",t.silent||l();try{const e=await _("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");L=Array.isArray(e.links)?e.links:[]}catch(e){O=k(e)}finally{B=!1,l()}}async function ed(){if(!(d!=null&&d.connected)||!p.logged_in){O="You must be logged in and connected to run auto-linking.",l();return}B=!0,O="",l();try{const t=await _("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");L=Array.isArray(t.links)?t.links:[],h("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:m})}catch(t){O=k(t)}finally{B=!1,l()}}async function os(t,e=""){try{const r=await _("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to accept candidate.");L=Array.isArray(r.links)?r.links:L,h("member-link-accepted",r.message||"Candidate accepted as a link.",{ttlMs:m})}catch(r){O=k(r),h("member-link-accept-error",O,{ttlMs:m})}}async function ss(t,e=""){if(!await Gn({title:"Remove Auto-Link Block?",message:`Remove the blocked auto-match record between ${t} and this Discord account? Auto-linking will run immediately and this screen will refresh to show whether the pair linked again.`,confirmLabel:"Unblock",cancelLabel:"Cancel",confirmClass:"danger"}))return!1;B=!0,O="",l();try{const n=await _("guildsync:unblock-member-auto-link",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to remove auto-link block.");L=Array.isArray(n.links)?n.links:L;const i=Q(t),o=String(e||"").trim(),s=n.refreshedPair||L.find(g=>Q(g.eso_account_name)===i&&String(g.discord_user_id||"").trim()===o),c=String((s==null?void 0:s.link_status)||"").trim().toLowerCase(),u=c==="linked"?" It linked again automatically.":c==="candidate"?" It is now showing as a candidate.":" No automatic link was recreated.";return h("member-link-unblocked",`${n.message||"Auto-link block removed."}${u}`,{ttlMs:m}),!0}catch(n){return O=k(n),h("member-link-unblock-error",O,{ttlMs:m}),!1}finally{B=!1,l()}}async function td(t,e=""){if(!!await Gn({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const n=await _("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to unlink member.");L=Array.isArray(n.links)?n.links:L,h("member-link-unlinked",n.message||"Member link removed.",{ttlMs:m})}catch(n){O=k(n)}l()}}function Q(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function Fr(t){const e=Q(t);return e?L.filter(r=>Q(r.eso_account_name)===e):[]}function Pr(t){const e=String(t||"").trim();return e?L.filter(r=>String(r.discord_user_id||"").trim()===e):[]}function as(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const r=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(r.length>0){const i=r.find(s=>String(s.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const o=r.find(s=>String(s.link_method||"").trim().toLowerCase()==="exact");return o||r[0]}const n=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return n||e[0]}function rd(t){return as(Pr(t))}function nd(t){return`${Q(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function zn(){return w?w.mode==="discord-to-eso"?Pr(w.discordUserId):Fr(w.esoAccountName):[]}function id(t){const e=String(t||"").trim(),r=P.find(n=>String(n.discord_id||"").trim()===e);return r&&(r.server_nickname||r.global_name||r.username||r.discord_id)||e}function cs(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?Pr(t.discordUserId):Fr(t.esoAccountName),n=as(r),i=String((n==null?void 0:n.link_status)||"").trim().toLowerCase(),o=r.filter(c=>String(c.link_status||"").trim().toLowerCase()==="linked").length,s=r.filter(c=>String(c.link_status||"").trim().toLowerCase()==="candidate").length;return o>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?o===1?n.eso_account_name:`${o} ESO accounts`:o===1?n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member":`${o} Discord accounts`}`}:i==="candidate"||s>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?n.eso_account_name:n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member"}`}:i==="blocked"||Number((n==null?void 0:n.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function ls(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,n=cs(t);return`
    <button
      class="member-link-status-dot member-link-status-${f(n.className)}"
      type="button"
      title="${f(n.title)}"
      aria-label="${f(n.label)}"
      data-open-member-link-dialog="${f(e)}"
      data-member-link-value="${f(r||"")}"
    ></button>
  `}function od(){return w?w.mode==="discord-to-eso"?id(w.discordUserId):w.esoAccountName||"":""}function ds(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function Rn(t){const e=ds((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const r=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(r.includes("discord_username")||r.includes("username"))return"Username";if(r.includes("discord_display_name")||r.includes("global")||r.includes("display"))return"Global Name";if(r.includes("discord_server_nickname")||r.includes("server")||r.includes("nickname"))return"Server Nickname";const n=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(n==="exact"||n==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",o=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let s=null;for(const c of o){const u=sd(i,c.value);(!s||u>s.score)&&(s={...c,score:u})}if(s&&s.score>0)return s.field}return""}function ne(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function sd(t,e){const r=ne(t),n=ne(e);if(!r||!n)return 0;if(r===n)return 100;if((r.includes(n)||n.includes(r))&&Math.min(r.length,n.length)>=4)return 88;const i=Math.abs(r.length-n.length),o=[...r].findIndex((c,u)=>c!==n[u]),s=o===-1?Math.min(r.length,n.length):o;return Math.max(0,Math.min(75,Math.round(s*10-i*3)))}function ad(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function cd(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function ld(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),r=ad(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${a(r)}</span>`}function dd(t){var c;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",r=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",n=String(t.link_status||"").trim().toLowerCase(),s=n==="linked"?`<button
        class="member-link-trash-button"
        type="button"
        aria-label="Unlink this ESO/Discord pair"
        title="Unlink this ESO/Discord pair"
        data-unlink-dialog-member-link
        data-unlink-eso-account="${f(t.eso_account_name||"")}"
        data-unlink-discord-user-id="${f(t.discord_user_id||"")}"
      >\u{1F5D1}</button>`:n==="candidate"?`<button
          class="member-link-approve-button"
          type="button"
          aria-label="Approve suggested link"
          title="Approve suggested link"
          data-accept-dialog-member-candidate="${f(t.eso_account_name||"")}"
          data-accept-dialog-discord-user-id="${f(t.discord_user_id||"")}"
        >\u2713</button>`:Number(t.locked||0)===1||n==="blocked"?`<button
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
        <div><span>ESO:</span> ${a(t.eso_account_name||"")}</div>
        <div><span>Discord:</span> ${a(e)}</div>
        <div><span>Status:</span> ${ld(t)} \xB7 ${a(cd(t.link_method))} \xB7 ${a(String((c=t.match_confidence)!=null?c:""))}% \xB7 ${a(r)}</div>
        ${Rn(t)?`<div><span>Matched:</span> Matched on ${a(Rn(t))}</div>`:""}
      </div>
      ${s}
    </div>
  `}function ud(){const t=zn();return t.length?[...t].sort((r,n)=>{var u,g;const i=String(r.link_status||"").trim().toLowerCase(),o=String(n.link_status||"").trim().toLowerCase(),s={linked:0,candidate:1,blocked:2,unlinked:3},c=((u=s[i])!=null?u:9)-((g=s[o])!=null?g:9);return c!==0?c:Number(n.match_confidence||0)-Number(r.match_confidence||0)}).map(r=>dd(r)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function fd(){if(mt)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(ue)return`<div class="discord-data-error">${a(ue)}</div>`;if(!Array.isArray(We)||We.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(zn().map(r=>nd(r))),e=[...We].filter(r=>{const n=(w==null?void 0:w.mode)==="discord-to-eso"?`${Q(r.account_name)}::${String(w.discordUserId||"").trim()}`:`${Q(w==null?void 0:w.esoAccountName)}::${String(r.discord_id||"").trim()}`;return!t.has(n)}).sort((r,n)=>{const i=Number(n.confidence||0)-Number(r.confidence||0);return i!==0?i:Xi(r).localeCompare(Xi(n),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(r=>hd(r)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function Xi(t){return((w==null?void 0:w.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function hd(t,e={}){var y,b,q;const r=(w==null?void 0:w.mode)||"",n=r==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=ds(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),o=r==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),s=[o,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),c=r==="discord-to-eso"?t.account_name:t.discord_id,u=e.disabled===!0,g=[n,o,s,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),S=[n,s,`${(y=t.confidence)!=null?y:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${f(c||"")}" data-member-link-option-search="${f(g)}" title="${f(S)}" ${u?"disabled":""}>
      <span class="member-link-option-name" title="${f(n||"")}">${a(n||"")}</span>
      <span class="member-link-option-subtitle" title="${f(s||"")}">${a(s||"")}</span>
      <span class="member-link-option-confidence" title="${f(String((b=t.confidence)!=null?b:0))}%">${a(String((q=t.confidence)!=null?q:0))}%</span>
    </button>
  `}function md(){const t=(w==null?void 0:w.mode)||"",e=od(),r=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
    <div class="roster-history-overlay member-link-dialog-overlay" role="dialog" aria-modal="true" aria-labelledby="memberLinkDialogTitle">
      <div class="roster-history-dialog member-link-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="memberLinkDialogTitle">Member Link</h3>
            <p>${a(e)} \u2192 choose ${a(r)}.</p>
          </div>
          <button id="closeMemberLinkDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close member link window" title="Close">\xD7</button>
        </div>

        <div class="member-link-dialog-body">
          <section class="member-link-dialog-section member-link-current-section">
            ${ud()}
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
              value="${f(tr)}"
            />
            ${fd()}
          </section>
        </div>

      </div>
    </div>
  `}async function us(t,e){if(!(d!=null&&d.connected)||!A()){h("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:m});return}Oe=!0,w=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},We=[],mt=!0,ue="",tr="",Z=-1,l();try{if(!Array.isArray(L)||L.length===0){const i=await _("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(L=Array.isArray(i.links)?i.links:[])}const n=await _("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load link suggestions.");We=Array.isArray(n.options)?n.options:[]}catch(r){ue=k(r)}finally{mt=!1,l()}}function yt(){document.removeEventListener("keydown",$n),Oe=!1,w=null,We=[],mt=!1,ue="",tr="",Z=-1,l()}function fs(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function Zi(t){const e=fs();if(e.forEach(n=>n.classList.remove("member-link-option-row-active")),e.length===0){Z=-1;return}Z=Math.max(0,Math.min(t,e.length-1));const r=e[Z];r.classList.add("member-link-option-row-active"),r.scrollIntoView({block:"nearest"})}function hs(){const t=ne(tr),e=[...document.querySelectorAll(".member-link-option-row")];let r=0;e.forEach(i=>{const o=ne(i.dataset.memberLinkOptionSearch||i.textContent||""),s=!t||o.includes(t);i.hidden=!s,i.classList.remove("member-link-option-row-active"),s&&(r+=1)});const n=document.querySelector("#memberLinkSuggestionSearchEmpty");n&&(n.hidden=r!==0),Z=-1}function pd(t){tr=t.target.value||"",hs()}function gd(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=fs();if(e.length===0)return;if(t.key==="ArrowDown"){const n=Z<0?0:Z+1;Zi(n>=e.length?e.length-1:n);return}const r=Z<0?e.length-1:Z-1;Zi(r<0?0:r)}function $n(t){!Oe||t.key==="Escape"&&(t.preventDefault(),yt())}async function yd(t){if(!(!w||!t))try{const e=w.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:w.discordUserId}:{esoAccountName:w.esoAccountName,discordUserId:t},r=await _("guildsync:manual-link-member",e,3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to link members.");L=Array.isArray(r.links)?r.links:L,h("member-link-saved",r.message||"Member link saved.",{ttlMs:m}),yt()}catch(e){ue=k(e),l()}}async function bd(t,e=""){await os(t,e),yt()}async function ms(){if(!!w){mt=!0,ue="",l();try{const t=w.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:w.discordUserId}:{mode:"eso-to-discord",accountName:w.esoAccountName},e=await _("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");We=Array.isArray(e.options)?e.options:[]}catch(t){ue=k(t)}finally{mt=!1,l()}}}async function kd(t="",e=""){const r=zn().find(i=>Q(i.eso_account_name)===Q(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!r||!await Gn({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await _("guildsync:manual-unlink-member",{esoAccountName:r.eso_account_name,discordUserId:r.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");L=Array.isArray(i.links)?i.links:L,h("member-link-unlinked",i.message||"Member link removed.",{ttlMs:m}),await ms()}catch(i){ue=k(i),l()}}async function vd(t="",e=""){await ss(t,e)&&await ms()}function ps(){var r;if(!Oe)return;document.removeEventListener("keydown",$n),document.addEventListener("keydown",$n),(r=document.querySelector("#closeMemberLinkDialogButton"))==null||r.addEventListener("click",yt);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",pd),t.addEventListener("keydown",gd),hs()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(n=>{n.addEventListener("click",()=>kd(n.dataset.unlinkEsoAccount||"",n.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-unblock-dialog-member-auto-link]").forEach(n=>{n.addEventListener("click",()=>vd(n.dataset.unblockEsoAccount||"",n.dataset.unblockDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(n=>{n.addEventListener("click",()=>yd(n.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(n=>{n.addEventListener("click",()=>bd(n.dataset.acceptDialogMemberCandidate||"",n.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",n=>{n.target===e&&yt()})}function gs(){var e,r,n;if(!wt)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",_n),(r=document.querySelector("#rerunAssociateTicketReportButton"))==null||r.addEventListener("click",()=>Ss()),(n=document.querySelector("#copyAssociateTicketReportGridButton"))==null||n.addEventListener("click",()=>El());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&_n()})}function ys(){var e,r,n;if(!At)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",An),(r=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||r.addEventListener("click",()=>vs()),(n=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||n.addEventListener("click",()=>Dl());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&An()})}function bs(){var n,i,o;if(!Lt)return;(n=document.querySelector("#closeDiscordLastSeenReportButton"))==null||n.addEventListener("click",Ln),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>ks()),(o=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||o.addEventListener("click",()=>Pl()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(s=>{s.addEventListener("click",()=>Bl(s.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",Sd);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",wd),jn();const r=document.querySelector(".discord-last-seen-report-overlay");r&&r.addEventListener("click",s=>{s.target===r&&Ln()})}function Sd(t){Et=t.target.value||"",jn()}function wd(t){ke=t.target.value||"",jn()}function jn(){const t=ne(Et),e=String(ke||"").trim().toLowerCase(),r=[...document.querySelectorAll("[data-discord-last-seen-row]")];let n=0;r.forEach(o=>{const s=ne(o.dataset.discordLastSeenSearch||o.textContent||""),c=String(o.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),S=(!t||s.includes(t))&&(!e||c===e);o.hidden=!S,S&&(n+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=n!==0)}async function ks(){if(!(d!=null&&d.connected)||!A()){He="You must be logged in and connected to run this report.",l();return}be=!0,He="",l();try{const t=await _("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");P=ni(t.members),Or=ii(t.roles),xn=[...P]}catch(t){He=k(t)}finally{be=!1,l(),I("discordLastSeenReportSearchInput")}}async function vs(){if(!(d!=null&&d.connected)||!A()){Ve="You must be logged in and connected to run this report.",l();return}ye=!0,Ve="",l();try{const t=await _("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Kt=Array.isArray(t.rows)?t.rows:[]}catch(t){Ve=k(t)}finally{ye=!1,l()}}async function Ss(){if(!(d!=null&&d.connected)||!A()){Ue="You must be logged in and connected to run this report.",l();return}ge=!0,Ue="",l();try{const t=await _("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");_t=Array.isArray(t.rows)?t.rows:[]}catch(t){Ue=k(t)}finally{ge=!1,l()}}function ct(){const t=String(Mt||"").trim().toLowerCase(),e={account_name:"Anonymous",rank:"Manual Entry"},r=new Set(["anonymous"]),n=z.filter(i=>String(i.account_name||"").trim()).filter(i=>{const s=String(i.account_name||"").trim().toLowerCase();return!s||r.has(s)||t&&!s.includes(t)?!1:(r.add(s),!0)}).slice().sort((i,o)=>{const s=String(i.account_name||"").toLowerCase(),c=String(o.account_name||"").toLowerCase(),u=t&&s.startsWith(t)?0:1,g=t&&c.startsWith(t)?0:1;return u!==g?u-g:s.localeCompare(c)}).slice(0,19);return[e,...n]}function ws(t=ct()){const e=String(E.accountName||"").trim();return t.length===0?'<div class="roster-history-muted manual-ticket-no-matches">No matching guild members found.</div>':t.map((r,n)=>`
        <button class="roster-history-match${n===C||r.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${f(r.account_name)}" role="option" aria-selected="${n===C||r.account_name===e?"true":"false"}">
          <span>${a(r.account_name)}</span>
          <strong>${a(r.rank||"")}</strong>
          ${n===C?"<small>Enter</small>":""}
        </button>
      `).join("")}function _s(){document.querySelectorAll("[data-manual-ticket-account]").forEach(t=>{t.addEventListener("mousedown",e=>{e.preventDefault()}),t.addEventListener("click",()=>{As(t.dataset.manualTicketAccount||"")})})}function sn(){const t=document.querySelector("#manualTicketMatchList");if(!t)return;const e=ct();C>=e.length&&(C=e.length>0?e.length-1:-1),t.innerHTML=ws(e),_s()}function As(t){const e=String(t||"").trim();E.accountName=e,Mt=e,J=!1,C=-1,U="",l()}function I(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const r=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(r,r)},0)}function _d(){const t=J?ct():[],e=String(E.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Entry</h3>
            <p>Add a manual banking or raffle entry such as FFTG, officer corrections, or anonymous gold.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${U?`<div class="discord-data-error">${a(U)}</div>`:""}

        <div class="manual-ticket-form">
          <div class="manual-ticket-member-picker">
            <label class="manual-ticket-member-field" for="manualTicketAccountSearchInput">
              <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(Mt)}" autocomplete="off" />
            </label>

            ${J?`
              <div id="manualTicketMatchList" class="roster-history-match-list manual-ticket-match-list" role="listbox" aria-label="Matching guild members">
                ${ws(t)}
              </div>
            `:""}
          </div>

          ${e?`<div class="roster-history-muted manual-ticket-selected-member">Selected: ${a(e)}</div>`:""}

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
              <textarea id="manualTicketNoteInput" class="discord-search-input manual-ticket-note-input" rows="4" placeholder="Enter a reason such as FFTG">${a(E.note)}</textarea>
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
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${Ar?"disabled":""}>${Ar?"Saving...":"Add Manual Entry"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Ls(){var o,s,c,u,g,S;if(!de)return;(o=document.querySelector("#closeManualBiweeklyTicketButton"))==null||o.addEventListener("click",()=>{de=!1,l()});const t=document.querySelector("#manualTicketAccountSearchInput");if(t){const y=({rerender:b=!1}={})=>{if(J=!0,C=ct().length>0?0:-1,b){l(),I("manualTicketAccountSearchInput");return}sn()};t.addEventListener("focus",()=>{J||y({rerender:!0})}),t.addEventListener("click",()=>{J||y({rerender:!0})}),t.addEventListener("input",b=>{Mt=b.target.value||"",E.accountName="",J=!0,C=ct().length>0?0:-1,sn()}),t.addEventListener("keydown",b=>{if(b.key==="Escape")return;if(!J){(b.key==="ArrowDown"||b.key==="ArrowUp")&&(b.preventDefault(),y({rerender:!0}));return}const q=ct();if(b.key==="ArrowDown"||b.key==="ArrowUp"){if(q.length===0)return;b.preventDefault();const Nt=b.key==="ArrowDown"?1:-1;C=((C<0?0:C)+Nt+q.length)%q.length,sn();return}if(b.key!=="Enter")return;b.preventDefault();const he=q[C>=0?C:0];he!=null&&he.account_name&&As(he.account_name)})}_s(),(s=document.querySelector("#manualTicketNoteInput"))==null||s.addEventListener("input",y=>{E.note=y.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(y=>{y.addEventListener("click",()=>{const b=String(y.dataset.manualTicketType||"").trim().toLowerCase();E.ticketType=b==="monthly"?"monthly":"biweekly",l()})}),(c=document.querySelector("[data-manual-ticket-toggle]"))==null||c.addEventListener("click",()=>{E.ticketType=E.ticketType==="monthly"?"biweekly":"monthly",l()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",y=>{const b=String(y.target.value||"").replace(/\D/g,"");y.target.value!==b&&(y.target.value=b),E.goldValue=b});const r=document.querySelector("#manualTicketCountInput");r==null||r.addEventListener("input",y=>{const b=String(y.target.value||"").replace(/\D/g,"");y.target.value!==b&&(y.target.value=b),E.tickets=b});const n=y=>{const b=Number(E.tickets)||0,q=Math.max(0,b+y);E.tickets=String(q),r&&(r.value=E.tickets,r.focus())};(u=document.querySelector("#manualTicketCountUpButton"))==null||u.addEventListener("click",()=>n(1)),(g=document.querySelector("#manualTicketCountDownButton"))==null||g.addEventListener("click",()=>n(-1)),(S=document.querySelector("#saveManualBiweeklyTicketButton"))==null||S.addEventListener("click",()=>Ad());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",y=>{y.target===i&&(de=!1,l())})}async function Ad(){const t=String(E.accountName||"").trim(),e=String(E.note||"").trim(),r=String(E.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",n=Number(String(E.goldValue||"").trim()||0),i=Number(String(E.tickets||"").trim()||0);if(J){U="Select a matching guild member or Anonymous from the list before saving.",l(),I("manualTicketAccountSearchInput");return}if(!t){U="Select a matching guild member or Anonymous from the list before saving.",l(),I("manualTicketAccountSearchInput");return}if(!Number.isFinite(n)||n<0){U="Gold value must be zero or greater.",l();return}if(!Number.isFinite(i)||i<0){U="Tickets must be zero or greater.",l();return}const o=t.toLowerCase()==="anonymous";if(o&&Math.floor(i)>0){U="Anonymous cannot be awarded tickets. Use 0 tickets and enter a gold value.",l();return}if(Math.floor(n)===0&&Math.floor(i)===0){U=o?"Enter a gold value for Anonymous when tickets are 0.":"Enter gold or tickets. Both cannot be zero.",l();return}Ar=!0,U="",l();try{const s=await _("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:r,gold_value:Math.floor(n),tickets:Math.floor(i)},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to add manual entry.");de=!1,E={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},Mt="",C=-1,J=!1,await fe({silent:!0}),h("manual-ticket-added",s.message||"Manual entry added.",{ttlMs:m})}catch(s){U=k(s)}finally{Ar=!1,l()}}async function Ld(t=""){const e=String(t||"").trim();if(!!e){St=!0,jt=e,Le=[],_r=!0,Ge=!1,Ee="",ut="",l();try{const r=await _("guildsync:request-roster-member-notes",{account_name:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load roster notes.");Le=Array.isArray(r.notes)?r.notes:[]}catch(r){Ee=k(r)}finally{_r=!1,l()}}}function Mn(){St=!1,jt="",Le=[],_r=!1,Ge=!1,Ee="",ut="",l()}function Ed(){var r,n;if(!St)return;(r=document.querySelector("#closeRosterNotesButton"))==null||r.addEventListener("click",Mn);const t=document.querySelector("#rosterNotesNewNote");t&&t.addEventListener("input",i=>{ut=i.target.value||""}),(n=document.querySelector("#saveRosterNoteButton"))==null||n.addEventListener("click",()=>Rd());const e=document.querySelector(".roster-notes-overlay");e&&e.addEventListener("click",i=>{i.target===e&&Mn()})}async function Rd(){const t=String(ut||"").trim();if(!t){Ee="Enter a note before saving.",l();return}Ge=!0,Ee="",l();try{const e=await _("guildsync:add-roster-member-note",{account_name:jt,note:t},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to save roster note.");e.note&&(Le=[...Le,e.note]),ut="";const r=z.find(n=>Q(n.account_name)===Q(jt));r&&(r.note_count=Number(r.note_count||0)+1)}catch(e){Ee=k(e)}finally{Ge=!1,l()}}function Es(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>nr());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{dt=!0,ce="",l()});const r=document.querySelector("#rosterMemberSearch");r&&(r.addEventListener("input",s=>{wr=s.target.value||"",bn=s.target.selectionStart,kn=s.target.selectionEnd,D=-1,l({restoreRosterSearchFocus:!0})}),r.addEventListener("keydown",$d)),document.querySelectorAll("[data-roster-sort-column]").forEach(s=>{s.addEventListener("click",()=>{ll(s.dataset.rosterSortColumn||"account_name")})});const n=document.querySelector("#rosterRankFilter");n&&n.addEventListener("change",s=>{const c=String(s.target.value||"").trim();c&&(Pe.add(c),D=-1,l())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(s=>{s.addEventListener("click",()=>{const c=s.dataset.removeRosterRankFilter||"";Pe.delete(c),D=-1,l()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",s=>{const c=String(s.target.value||"").trim();c&&(st.add(c),D=-1,l())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(s=>{s.addEventListener("click",()=>{const c=s.dataset.removeRosterLinkStatusFilter||"";st.delete(c),D=-1,l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(s=>{s.addEventListener("click",()=>us(s.dataset.openMemberLinkDialog||"",s.dataset.memberLinkValue||""))}),document.querySelectorAll("[data-open-roster-notes]").forEach(s=>{s.addEventListener("click",()=>Ld(s.dataset.openRosterNotes||""))}),Ed();const o=document.querySelector("#clearRosterFiltersButton");o&&o.addEventListener("click",()=>{wr="",Pe.clear(),st.clear(),se="",x="",D=-1,l()}),Md()}function $d(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){D=-1;return}t.preventDefault(),t.key==="ArrowDown"?D=D<0?0:Math.min(D+1,e.length-1):t.key==="ArrowUp"&&(D=D<0?e.length-1:Math.max(D-1,0)),e.forEach((n,i)=>{n.classList.toggle("roster-search-active-row",i===D)});const r=e[D];r&&typeof r.scrollIntoView=="function"&&r.scrollIntoView({block:"nearest",inline:"nearest"})}function Md(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{dt=!1,l()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",r=>{if(zt=r.target.value||"",K=-1,!zt.trim()){clearTimeout(on),ce="",H=[],Te="",_e=[],Ae=!1,l(),I("rosterHistorySearchInput");return}clearTimeout(on),on=setTimeout(()=>{Cd({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(H.length===0)return;r.preventDefault();const i=r.key==="ArrowDown"?1:-1;K=((K<0?0:K)+i+H.length)%H.length,l(),I("rosterHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=H[K>=0?K:0];n!=null&&n.account_name&&to(n.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(r=>{r.addEventListener("click",()=>{to(r.dataset.rosterHistoryAccount||"")})})}function Rs(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{ft=!1,l()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",r=>{pe=r.target.value||"",Y=-1,Ie+=1;const n=Ie;if(clearTimeout(Hi),!pe.trim()){le="",W=[],ht="",Ye="",Re=[],$e=!1,l(),I("discordHistorySearchInput");return}Hi=setTimeout(()=>{Dd({auto:!0,keepFocus:!0,generation:n})},xc)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(W.length===0)return;r.preventDefault();const i=r.key==="ArrowDown"?1:-1;Y=((Y<0?0:Y)+i+W.length)%W.length,l(),I("discordHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=W[Y>=0?Y:0];n!=null&&n.discord_id&&eo(n.discord_id,wn(n))})),document.querySelectorAll("[data-discord-history-id]").forEach(r=>{r.addEventListener("click",()=>{eo(r.dataset.discordHistoryId||"",r.dataset.discordHistoryName||"")})})}async function Dd(t={}){const e=Number.isInteger(t.generation)?t.generation:++Ie,r=pe.trim();if(e===Ie){if(!r){le="",W=[],Y=-1,ht="",Ye="",Re=[],$e=!1,l(),t.keepFocus&&I("discordHistorySearchInput");return}$e=!0,le="",W=[],Y=-1,ht="",Ye="",Re=[],l(),t.keepFocus&&I("discordHistorySearchInput");try{const n=await _("guildsync:request-discord-member-history",{query:r},3e4);if(e!==Ie||r!==pe.trim())return;if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search Discord member history.");W=Nd(n.matches),Y=W.length>0?0:-1}catch(n){if(e!==Ie||r!==pe.trim())return;le=k(n)}finally{if(e!==Ie||r!==pe.trim())return;$e=!1,l(),t.keepFocus&&I("discordHistorySearchInput")}}}async function eo(t,e="",r={}){const n=String(t||"").trim();if(!!n){ht=n,Ye=String(e||n).trim(),pe=Ye,Re=[],$e=!0,le="",l();try{const i=await _("guildsync:request-discord-member-history-events",{discord_id:n},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");Re=Td(i.events)}catch(i){le=k(i)}finally{$e=!1,r.keepLoading||l()}}}function Nd(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function Td(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n,i,o,s,c,u,g,S,y,b;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((n=(r=e.old_value)!=null?r:e.oldValue)!=null?n:"").trim(),new_value:String((o=(i=e.new_value)!=null?i:e.newValue)!=null?o:"").trim(),event_timestamp:(u=(c=(s=e.event_timestamp)!=null?s:e.eventTimestamp)!=null?c:e.timestamp)!=null?u:"",event_datetime:(S=(g=e.event_datetime)!=null?g:e.eventDatetime)!=null?S:"",initiator:String((b=(y=e.initiator)!=null?y:e.initiatorName)!=null?b:"").trim(),source:String(e.source||"").trim()}}):[]}async function Cd(t={}){const e=zt.trim();if(!e){ce="",H=[],K=-1,Te="",_e=[],Ae=!1,l(),t.keepFocus&&I("rosterHistorySearchInput");return}Ae=!0,ce="",H=[],K=-1,Te="",_e=[],l(),t.keepFocus&&I("rosterHistorySearchInput");try{const r=await _("guildsync:request-roster-rank-history",{query:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search roster rank history.");H=Bd(r.matches),K=H.length>0?0:-1}catch(r){ce=k(r)}finally{Ae=!1,l(),t.keepFocus&&I("rosterHistorySearchInput")}}async function to(t,e={}){const r=String(t||"").trim();if(!!r){Te=r,zt=r,_e=[],Ae=!0,ce="",l();try{const n=await _("guildsync:request-roster-stream-history",{account_name:r},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster stream history.");_e=Od(n.events)}catch(n){ce=k(n)}finally{Ae=!1,e.keepLoading||l()}}}function Bd(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function Od(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(n=(r=e.timestamp)!=null?r:e.timestampS)!=null?n:"",officer:String(e.officer||"").trim()}}):[]}function $s(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n,i;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(r=e.joined)!=null?r:"",note_count:Number((i=(n=e.note_count)!=null?n:e.noteCount)!=null?i:0)||0}}).sort((e,r)=>e.account_name.localeCompare(r.account_name)):[]}function Id(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function Gr(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function Kn(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function qd(t={}){z=$s(t.members),Sr=t.last_refresh||new Date().toISOString(),R==="eso-members"&&l(),h("roster-data-updated",`Roster data updated. Loaded ${z.length} member record${z.length===1?"":"s"}.`,{ttlMs:m})}async function nr(t={}){if(!!(d!=null&&d.connected)){Ne=!0,l();try{const e=await _("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");z=$s(e.members),Sr=e.last_refresh||Sr,t.silent||h("roster-data-loaded",`Loaded ${z.length} roster member${z.length===1?"":"s"}.`,{ttlMs:m})}catch(e){h("roster-data-error",k(e),{ttlMs:m})}finally{Ne=!1,l()}}}async function xd(t={}){var e;if(!!A()){if(!(d!=null&&d.connected)){h("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}Ne=!0,l();try{const r=await mc(t);if(!(r!=null&&r.ok)){h("roster-data-pending",(r==null?void 0:r.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:m});return}const n={local_upload_id:Ms(),authenticated_username:X(),authenticated_discord_user_id:((e=p==null?void 0:p.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await Ns(n)}catch(i){throw Fd(n),i}await nr({silent:!0})}catch(r){h("roster-data-error",k(r),{ttlMs:m})}finally{Ne=!1,l()}}}function Ms(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Yn(){try{const t=window.localStorage.getItem(Mo),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Ds(t){window.localStorage.setItem(Mo,JSON.stringify(Array.isArray(t)?t:[]))}function Fd(t){const e=String((t==null?void 0:t.local_upload_id)||Ms()),r=Yn().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Ds(r),h("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function Pd(t){const e=Yn().filter(r=>(r==null?void 0:r.local_upload_id)!==t);Ds(e)}async function Gd(){if(tn||!(d!=null&&d.connected)||!A())return;const t=Yn();if(t.length!==0){tn=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!A())return;await Ns(e),Pd(e.local_upload_id)}}catch(e){h("roster-data-pending-error",`Pending roster upload retry failed: ${k(e)}`,{ttlMs:m})}finally{tn=!1}}}async function Ns(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await _("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const r=await yc(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return h("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:m}),e}async function Ud(t={}){var e,r;if(!!A()){if(!(d!=null&&d.connected)){h("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}try{const n=await fc(t);if(!(n!=null&&n.ok)){h("applications-data-info",(n==null?void 0:n.message)||"No application records were found to process.",{ttlMs:m});return}if((Array.isArray((e=n==null?void 0:n.data)==null?void 0:e.records)?n.data.records:[]).length===0){h("applications-data-info",`No application records were found in ${n.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:m});return}const o={local_upload_id:Ts(),authenticated_username:X(),authenticated_discord_user_id:((r=p==null?void 0:p.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await Bs(o)}catch(s){throw Vd(o),s}}catch(n){h("applications-data-error",k(n),{ttlMs:m})}}}function Ts(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Jn(){try{const t=window.localStorage.getItem(Do),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Cs(t){window.localStorage.setItem(Do,JSON.stringify(Array.isArray(t)?t:[]))}function Vd(t){const e=String((t==null?void 0:t.local_upload_id)||Ts()),r=Jn().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Cs(r),h("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function Hd(t){const e=Jn().filter(r=>(r==null?void 0:r.local_upload_id)!==t);Cs(e)}async function Wd(){if(rn||!(d!=null&&d.connected)||!A())return;const t=Jn();if(t.length!==0){rn=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!A())return;await Bs(e),Hd(e.local_upload_id)}}catch(e){h("applications-data-pending-error",`Pending application upload retry failed: ${k(e)}`,{ttlMs:m})}finally{rn=!1}}}async function Bs(t){var i;if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return h("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:m}),{ok:!0,sent_count:0,skipped_empty:!0};let r=0;for(const o of e){const s=await _("guildsync:eso-guild-application-message",{...t,record:o,recordKey:(o==null?void 0:o.recordKey)||"",message:zd(o)},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Backend rejected the application data payload. Application data was not cleared.");r+=1}const n=await pc(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return h("applications-data-sent",`Sent ${r} application record${r===1?"":"s"} to GuildSync backend.`,{ttlMs:m}),{ok:!0,sent_count:r}}function zd(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),r=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",n=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",o=String(t.applicationText||"_No application text captured._"),s=Object.entries(t).filter(([c])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(c)).map(([c,u])=>`**${c}:** ${jd(u)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${r}** ${n} an application from **${i}**.`,"","**Application text:**","```",o.slice(0,1500),"```",s.length>0?"":null,s.length>0?"**Full captured record fields:**":null,...s].filter(c=>c!==null).join(`
`)}function jd(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function Kd(t={}){await Ud(t)}function Yd(){const t=Dn(M),e=pu(t,M),r=M!=="other";return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <button id="openManualBiweeklyTicketButton" class="bank-export-button" type="button" ${A()?"":'disabled title="Login required to add manual entries."'}>
            <span aria-hidden="true">\uFF0B</span>
            <span>Add Manual Entry</span>
          </button>
          ${eu()}
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${a(Zs(Oo))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${Ce||!A()?"disabled":""} ${A()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Ce?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${an("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${an("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${an("other","?","Other","All other deposits")}
        </div>

        ${Zd(M)}

        <div class="bank-deposit-table-shell">
          <table class="bank-deposit-table${r?"":" bank-deposit-table-no-tickets"}">
            <thead>
              <tr>
                <th>Event ID</th>
                <th>Date / Time (Local)</th>
                <th>Depositor</th>
                <th>Amount Deposited</th>
                ${r?"<th>Tickets Awarded</th>":""}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(n=>yu(n,r)).join(""):bu(r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${a(Gt(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${M==="monthly"?`<div>Raffle Pot: <strong>${a(Gt(Math.floor(e.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${M==="biweekly"?`<div>Raffle Pot: <strong>${a(Gt(Us(e.amount)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${M==="biweekly"?`<div>Draws: <strong>${a(String(gu(e.amount)))}</strong></div>`:""}
          ${r?`<div>Total Tickets Awarded: <strong>${a(Wr(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${ze?Jd(Dn(Xe)):""}
    </div>
  `}function Jd(t){return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${a(te(Xe))} Deposits</h3>
            <p class="bank-export-subtitle">Copy this grid and paste it directly into Google Sheets.</p>
          </div>
          <button id="closeBankingExportGridButton" class="roster-history-close modal-close-button bank-export-close-button" type="button" aria-label="Close export grid">\xD7</button>
        </div>

        <div class="bank-export-toolbar">
          <button id="copyBankingExportGridButton" class="bank-export-copy-button" type="button" ${t.length===0?"disabled":""}>Copy Grid</button>
          <span class="bank-export-count">${a(String(t.length))} row${t.length===1?"":"s"}</span>
        </div>

        <div class="bank-export-grid-shell">
          <table id="bankingExportGrid" class="bank-export-grid">
            <thead>
              <tr>
                <th>Guildie Name</th>
                <th>Deposit Amount</th>
                <th>Number of Tickets</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(e=>Qd(e)).join(""):Xd()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${a(xs(t))}</textarea>
      </div>
    </div>
  `}function Qd(t){return`
    <tr>
      <td>${a(t.displayName||"")}</td>
      <td>${a(String(ei(t,Xe)))}</td>
      <td>${a(String(Number(t.ticketAmount)||0))}</td>
      <td>${a(t.note||"")}</td>
    </tr>
  `}function Xd(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${a(te(Xe))}.</td>
    </tr>
  `}function Zd(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=Fs(t),r=Dr(t),n=r<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${f(te(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${a(te(t))} Raffle Period ${r===0?"(Current)":`(${Math.abs(r)} period${Math.abs(r)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${a(gr(e.salesStart))} through ${a(gr(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${a(gr(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${n?"":"disabled"} aria-label="Next ${f(te(t))} raffle period">\u203A</button>
    </div>
  `}function an(t,e,r,n){const i=M===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${f(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${a(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${a(r)}</span>
        <span class="bank-section-subtitle">${a(n)}</span>
      </span>
    </button>
  `}function eu(){if(!A())return"";const t=Ur(),e=ir(),r=Os(),n=t>0,i=e>0,o=r>0;if(!n&&!i&&!o)return"";let s="",c="",u=!1;n?(s=`Check Out ${t} Deposit Mail`,c="checkout"):i?(u=!0,rt?s=`Writing ${e} Pending Mail`:F.running?s=`${e} Mail Waiting for ESO Closure`:(js("render-pending-mail-button"),s=`${e} Mail Writing to Disk`)):(u=!0,s=`${r} Mail Ready to Send`);const g=n?"Check out new deposit mail. GuildSync will immediately try to write it, or hold it until ESO closes.":i?"Deposit mail is already checked out and will be written automatically after ESO closes.":"Deposit mail has been written to ESO SavedVariables and is ready for ESO to send it and write acknowledgements.",S=pn||rt,y=F.running?"ESO Running":"ESO Not Running",b=F.running?"eso-running":"eso-not-running";return`
    <button id="checkoutDepositMailButton" class="${`bank-export-button deposit-mail-button${u?" deposit-mail-status-only":""}`}" type="button" data-deposit-mail-action="${f(c)}" ${u||S?'aria-disabled="true"':""} title="${f(F.message||g)}" aria-label="${f(`${s}. ${g}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${a(s)}</span>
      <span aria-hidden="true">(</span><span class="deposit-mail-eso-status ${b}" aria-hidden="true">${a(y)}</span><span aria-hidden="true">)</span>
    </button>
  `}function ir(){return or().reduce((t,e)=>t+Dt(e.records).length,0)}function tu(){const t=(p==null?void 0:p.user)||{};return new Set([X(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function ru(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?tu().has(e):!1}function Os(){return A()?G.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),r=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&r==="written_to_eso"&&ru(t)}).length:0}function Ur(){return G.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),r=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&r==="unsent"}).length}function nu(t){const e=String(t||"").trim();return G.find(r=>String(r.eventId||"").trim()===e)||null}function Qn(t){const e=String(t||"other").toLowerCase(),r=["biweekly","monthly","other"],n=r.includes(e)?e:"other",i=r.filter(o=>o!==n);return[i[0]||"biweekly",n,i[1]||"other"]}function Xn(t={},e="other"){const r=String(e||"other").toLowerCase(),n=Number(t==null?void 0:t.amount)||0;return r===String((t==null?void 0:t.type)||"").toLowerCase()?Number(t==null?void 0:t.ticketAmount)||0:r==="biweekly"?Math.floor(n/500):r==="monthly"?Math.floor(n/2500):0}function Is(t={},e="other",r=""){const n=String(t.type||"other").toLowerCase(),i=te(n),o=te(e),s=X()||"Unknown user",c=[`Moved from ${i} to ${o} by ${s}.`,`Ref ${t.eventId||""}`],u=String(r||"").trim();return u&&c.push(`Reason: ${u}`),c.join(`
`)}function iu(t){const e=nu(t);if(!e){h("banking-move-missing","Could not find the selected banking entry.",{ttlMs:m});return}const r=String(e.type||"other").toLowerCase();oe=e,N={targetType:r,note:"",tickets:String(Xn(e,r))},ie="",pt=!1,$t=!0,l()}function Mr(){$t=!1,pt=!1,ie="",oe=null,N={targetType:"other",note:"",tickets:""},l()}function ou(){const t=oe||{},e=String(t.type||"other").toLowerCase(),r=te(e),n=Qn(e);let i=String(N.targetType||n[0]||"other").toLowerCase();n.includes(i)||(i=n[0]||"other",N.targetType=i);const o=Is(t,i,N.note);return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="bankingMoveDialogTitle">
      <div class="roster-history-dialog manual-ticket-dialog banking-move-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="bankingMoveDialogTitle">Move Banking Entry</h3>
            <p>Move this deposit to a different banking section while preserving a reference to the original event.</p>
          </div>
          <button id="closeBankingMoveDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${ie?`<div class="discord-data-error">${a(ie)}</div>`:""}

        <div class="manual-ticket-form banking-move-form">
          <div class="banking-move-current-entry">
            <div><strong>Current Type:</strong> ${a(r)}</div>
            <div><strong>Event ID:</strong> ${a(t.eventId||"")}</div>
            <div><strong>Depositor:</strong> ${a(t.displayName||"")}</div>
            <div><strong>Amount:</strong> ${a(Gt(t.amount))} \u{1FA99}</div>
          </div>

          <div class="banking-move-target-row banking-move-slider-row">
            <span>Move To</span>
            <div class="banking-move-slider-control" role="radiogroup" aria-label="Move banking entry destination">
              <div class="banking-move-slider-labels">
                ${n.map(s=>`
                  <button
                    class="banking-move-slider-label ${i===s?"selected":""} ${s===e?"current":""}"
                    type="button"
                    role="radio"
                    aria-checked="${i===s?"true":"false"}"
                    data-banking-move-target="${f(s)}"
                  >
                    <strong>${a(te(s))}</strong>
                    <span>${s===e?"Current / restore original values":`${a(String(Xn(t,s)))} tickets`}</span>
                  </button>
                `).join("")}
              </div>
            </div>
          </div>

          <div class="banking-move-compact-row">
            <label class="manual-ticket-count-field banking-move-ticket-field">
              <span>Tickets Awarded</span>
              <input id="bankingMoveTicketsInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${f(N.tickets)}" ${i==="other"?"disabled":""} />
            </label>

            <label class="manual-ticket-note-field banking-move-note-field">
              <span>Move Note</span>
              <textarea id="bankingMoveNoteInput" class="discord-search-input manual-ticket-note-input banking-move-note-input" rows="1" placeholder="Optional reason for this move">${a(N.note)}</textarea>
            </label>
          </div>

          <div class="roster-history-muted banking-move-generated-note">${a(o).replace(/\n/g,"<br>")}</div>

          <div class="manual-ticket-actions banking-move-actions">
            <button id="saveBankingMoveButton" class="refresh-discord-button banking-move-submit-button" type="button" ${pt||i===e?"disabled":""}>${pt?"MOVING...":i===e?"SELECT A SIDE TO MOVE":"MOVE"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function su(){var r,n,i,o;if(!$t)return;(r=document.querySelector("#closeBankingMoveDialogButton"))==null||r.addEventListener("click",()=>Mr());function t(s){const c=String(s||"other").toLowerCase(),u=String((oe==null?void 0:oe.type)||"other").toLowerCase(),g=Qn(u);N.targetType=g.includes(c)?c:u,N.tickets=String(Xn(oe||{},N.targetType)),l()}document.querySelectorAll("[data-banking-move-target]").forEach(s=>{s.addEventListener("click",()=>t(s.dataset.bankingMoveTarget))}),(n=document.querySelector("#bankingMoveTicketsInput"))==null||n.addEventListener("input",s=>{const c=String(s.target.value||"").replace(/\D/g,"");s.target.value!==c&&(s.target.value=c),N.tickets=c}),(i=document.querySelector("#bankingMoveNoteInput"))==null||i.addEventListener("input",s=>{N.note=s.target.value||"";const c=document.querySelector(".banking-move-generated-note");c&&(c.innerText=Is(oe||{},N.targetType||"other",N.note))}),(o=document.querySelector("#saveBankingMoveButton"))==null||o.addEventListener("click",()=>au());const e=document.querySelector(".roster-history-overlay");e&&e.addEventListener("click",s=>{s.target===e&&Mr()})}async function au(){const t=oe;if(!(t!=null&&t.eventId)){ie="No banking entry is selected.",l();return}const e=String(t.type||"other").toLowerCase(),r=Qn(e),n=String(N.targetType||r[0]||"other").toLowerCase();if(!r.includes(n)||n===e){ie="Select one of the side destinations before moving this entry.",l();return}const i=n==="other"?0:Math.floor(Number(String(N.tickets||"").trim()||0));if(!Number.isFinite(i)||i<0){ie="Tickets must be zero or greater.",l();return}pt=!0,ie="",l();try{const o=await _("guildsync:move-banking-entry",{event_id:t.eventId,target_type:n,tickets:i,note:N.note||""},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Failed to move banking entry.");Mr(),await fe({silent:!0}),h("banking-entry-moved",o.message||"Banking entry moved.",{ttlMs:m})}catch(o){pt=!1,ie=k(o),l()}}function qs(){if(R!=="more")return;su(),document.querySelectorAll("[data-bank-entry-move]").forEach(s=>{s.addEventListener("click",()=>iu(s.dataset.bankEntryMove||""))}),document.querySelectorAll("[data-bank-section]").forEach(s=>{s.addEventListener("click",()=>{M=s.dataset.bankSection||"biweekly",l()})}),document.querySelectorAll("[data-bank-export-section]").forEach(s=>{s.addEventListener("click",()=>{Xe=(s.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",ze=!0,l()})}),document.querySelectorAll("[data-bank-period-move]").forEach(s=>{s.addEventListener("click",()=>{du(s.dataset.bankPeriodMove||""),l()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{ze=!1,l()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>cu());const r=document.querySelector(".bank-export-overlay");r&&r.addEventListener("click",s=>{s.target===r&&(ze=!1,l())});const n=document.querySelector("#openManualBiweeklyTicketButton");n&&n.addEventListener("click",async()=>{if(!A()){h("manual-ticket-login-required","Login required to add manual entries.",{ttlMs:m});return}de=!0,U="",Mt=E.accountName||"",J=!1,C=-1,z.length===0&&(d==null?void 0:d.connected)&&A()&&await nr({silent:!0}),l()});const i=document.querySelector("#checkoutDepositMailButton");i&&i.addEventListener("click",()=>{i.dataset.depositMailAction==="checkout"&&i.getAttribute("aria-disabled")!=="true"&&Eu()});const o=document.querySelector("#refreshBankingDataButton");o&&o.addEventListener("click",()=>{if(!A()){h("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:m});return}Hs({key:"banking"})})}function xs(t){const e=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const r of t)e.push([r.displayName||"",String(ei(r,Xe)),String(Number(r.ticketAmount)||0),r.note||""]);return e.map(r=>r.map(Vr).join("	")).join(`
`)}function Vr(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function Hr(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const r=document.createElement("textarea");r.value=e,r.setAttribute("readonly","readonly"),r.style.position="fixed",r.style.left="0",r.style.top="0",r.style.width="1px",r.style.height="1px",r.style.opacity="0",r.style.pointerEvents="none",r.style.zIndex="-1",document.body.appendChild(r),r.focus(),r.select(),r.setSelectionRange(0,r.value.length);let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r)}return n}async function cu(){const t=Dn(Xe),e=xs(t);if(await Hr(e)){h("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:m});return}const n=document.querySelector("#bankingExportTsv");n&&(n.focus(),n.select()),h("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:m})}function Dn(t){return G.filter(e=>e.type===t).filter(e=>lu(t,e)).sort((e,r)=>(Number(r.time)||0)-(Number(e.time)||0))}function lu(t,e){if(t==="other")return!0;const r=Number(e==null?void 0:e.time)||0;if(r<=0)return!1;const n=Fs(t);return r>=n.salesStart&&r<=n.salesEnd}function Dr(t){return Number(vn[t])||0}function du(t){if(M!=="biweekly"&&M!=="monthly")return;const e=Dr(M);if(t==="previous"){vn[M]=e-1;return}t==="next"&&e<0&&(vn[M]=e+1)}function Fs(t){const e=Math.floor(Date.now()/1e3);if(t==="monthly"){const i=uu(e,Dr(t));return{salesStart:Gs(i)+1,salesEnd:i,raffleTime:i+Lr}}const r=Be;let n=Ps(e);return n+=Dr(t)*r,{salesStart:n-r+1,salesEnd:n,raffleTime:n+Lr}}function Ps(t){const e=Be;let r=Fc;for(;r-e>t;)r-=e;for(;r<t;)r+=e;return r}function uu(t,e=0){let r=fu(t),n=Number(e)||0;for(;n<0;)r=Gs(r),n+=1;for(;n>0;)r=hu(r),n-=1;return r}function fu(t){let e=Ps(t);for(;!Zn(e);)e+=Be;return e}function Gs(t){let e=t-Be;for(;!Zn(e);)e-=Be;return e}function hu(t){let e=t+Be;for(;!Zn(e);)e+=Be;return e}function Zn(t){const e=t+Lr,r=t+Be+Lr;return ro(e)!==ro(r)}function ro(t){var o,s;const e=new Date(Number(t||0)*1e3);if(Number.isNaN(e.getTime()))return"";const r=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit"}).formatToParts(e),n=((o=r.find(c=>c.type==="year"))==null?void 0:o.value)||"",i=((s=r.find(c=>c.type==="month"))==null?void 0:s.value)||"";return`${n}-${i}`}function mu(t=M){const e=String(t||"").toLowerCase();return e!=="monthly"&&e!=="biweekly"?0:"auto"}function ei(t={},e=M){const r=Number(t.amount)||0;if(!mu(e))return r;const n=Math.abs(Math.trunc(r))%10,i=n===1||n===3?n:0;return i>0&&r>i?r-i:r}function pu(t,e=M){return t.reduce((r,n)=>(r.amount+=ei(n,e),r.tickets+=Number(n.ticketAmount)||0,r),{amount:0,tickets:0})}function Us(t){const e=Math.ceil((Number(t)||0)/2);return e<=0?0:Math.ceil(e/2e5)*2e5}function gu(t){const e=Us(t);return e>0?e/2e5:0}function yu(t,e=!0){return`
    <tr>
      <td>${a(t.note||t.eventId||"")}</td>
      <td>${a(gr(t.time))}</td>
      <td>${a(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${a(Gt(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td><strong class="bank-ticket-amount">${a(Wr(t.ticketAmount))}</strong></td>`:""}
      <td><button class="bank-entry-move-button" type="button" data-bank-entry-move="${f(t.eventId||"")}">Move</button></td>
    </tr>
  `}function bu(t=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?"6":"5"}">No ${a(te(M))} deposits found for this ${M==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function te(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function gr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Gt(t){return(Number(t)||0).toLocaleString()}function Wr(t){return(Number(t)||0).toLocaleString()}function Dt(t){return Array.isArray(t)?t.map(e=>{var n,i,o,s,c,u,g,S,y,b,q,he,Nt,Ze,di,ui,fi,hi,mi,pi,gi,yi,bi,ki,vi,Si,wi,_i,Ai,Li,Ei,Ri,$i,Mi,Di,Ni,Ti,Ci,Bi,Oi,Ii;const r=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:r==="monthly"||r==="biweekly"||r==="other"?r:"other",eventId:String((i=(n=e==null?void 0:e.eventId)!=null?n:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((s=(o=e==null?void 0:e.time)!=null?o:e==null?void 0:e.timestamp)!=null?s:0)||0,displayName:String((u=(c=e==null?void 0:e.displayName)!=null?c:e==null?void 0:e.display_name)!=null?u:"").trim(),amount:Number((g=e==null?void 0:e.amount)!=null?g:0)||0,ticketAmount:Number((y=(S=e==null?void 0:e.ticketAmount)!=null?S:e==null?void 0:e.ticket_amount)!=null?y:0)||0,note:String((b=e==null?void 0:e.note)!=null?b:"").trim(),dataSource:String((he=(q=e==null?void 0:e.dataSource)!=null?q:e==null?void 0:e.data_source)!=null?he:"").trim(),emailRequested:Boolean((Nt=e==null?void 0:e.emailRequested)!=null?Nt:e==null?void 0:e.email_requested),mailStatus:String((di=(Ze=e==null?void 0:e.mailStatus)!=null?Ze:e==null?void 0:e.mail_status)!=null?di:"").trim(),mailRequestId:String((fi=(ui=e==null?void 0:e.mailRequestId)!=null?ui:e==null?void 0:e.mail_request_id)!=null?fi:"").trim(),mailBatchId:String((mi=(hi=e==null?void 0:e.mailBatchId)!=null?hi:e==null?void 0:e.mail_batch_id)!=null?mi:"").trim(),checkedOutBy:String((gi=(pi=e==null?void 0:e.checkedOutBy)!=null?pi:e==null?void 0:e.checked_out_by)!=null?gi:"").trim(),checkedOutAt:String((bi=(yi=e==null?void 0:e.checkedOutAt)!=null?yi:e==null?void 0:e.checked_out_at)!=null?bi:"").trim(),checkoutExpiresAt:String((vi=(ki=e==null?void 0:e.checkoutExpiresAt)!=null?ki:e==null?void 0:e.checkout_expires_at)!=null?vi:"").trim(),writtenToEsoAt:String((wi=(Si=e==null?void 0:e.writtenToEsoAt)!=null?Si:e==null?void 0:e.written_to_eso_at)!=null?wi:"").trim(),sentAt:String((Ai=(_i=e==null?void 0:e.sentAt)!=null?_i:e==null?void 0:e.sent_at)!=null?Ai:"").trim(),failedReason:String((Ei=(Li=e==null?void 0:e.failedReason)!=null?Li:e==null?void 0:e.failed_reason)!=null?Ei:"").trim(),recipient:String((Di=(Mi=($i=(Ri=e==null?void 0:e.recipient)!=null?Ri:e==null?void 0:e.account_name)!=null?$i:e==null?void 0:e.displayName)!=null?Mi:e==null?void 0:e.display_name)!=null?Di:"").trim(),subject:String((Ci=(Ti=(Ni=e==null?void 0:e.subject)!=null?Ni:e==null?void 0:e.mailSubject)!=null?Ti:e==null?void 0:e.mail_subject)!=null?Ci:"").trim(),body:String((Ii=(Oi=(Bi=e==null?void 0:e.body)!=null?Bi:e==null?void 0:e.mailBody)!=null?Oi:e==null?void 0:e.mail_body)!=null?Ii:"").trim()}}):[]}function ku(t){const e=new Map;for(const r of G)r.eventId&&e.set(r.eventId,r);for(const r of t)!r.eventId||e.set(r.eventId,r);G=Array.from(e.values()).sort((r,n)=>(Number(n.time)||0)-(Number(r.time)||0))}function Vs(){Oo=new Date().toISOString()}async function vu(t={}){!(t!=null&&t.ok)||(G=Dt(t.entries),Vs(),R==="more"&&l(),h("banking-data-updated",`Banking data updated. Loaded ${G.length} deposit record${G.length===1?"":"s"}.`,{ttlMs:m}))}async function fe(t={}){const e=Boolean(t.silent),r=Boolean(t.background);if(!(d!=null&&d.connected)){e||h("banking-data-error","GuildSync websocket is not connected.",{ttlMs:m});return}r||(Ce=!0,l());try{const n=await _("guildsync:request-banking-data",{},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve banking data.");G=Dt(n.entries),Vs(),e||h("banking-data",`Loaded ${G.length} banking deposit record${G.length===1?"":"s"}.`,{ttlMs:m})}catch(n){e||h("banking-data-error",k(n),{ttlMs:m})}finally{r||(Ce=!1),l()}}async function no(){!(d!=null&&d.connected)||!A()||Ce||(await fe({silent:!0,background:!0}),Ur()<=0&&ir()>0&&(F.running?l():js("availability-refresh")))}function Su(){tt&&clearInterval(tt),no(),tt=window.setInterval(no,Oc)}function wu(){tt&&(clearInterval(tt),tt=null)}async function _u(t={}){if(!!A()){if(!(d!=null&&d.connected)){h("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:m});return}try{const e=await uc(t);if(!(e!=null&&e.ok))return;const r=Array.isArray(e.ackEntries)?e.ackEntries:[];if(r.length===0)return;const n=await _("guildsync:mark-deposit-mail-sent",{mail_ack:r,mail_request_ids:r.map(s=>(s==null?void 0:s.mail_request_id)||(s==null?void 0:s.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(n.mail_request_ids)?n.mail_request_ids:Array.isArray(n.mailRequestIds)?n.mailRequestIds:[];if(i.length===0){h("deposit-mail-ack-none",n.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:m});return}const o=await lc(i);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");h("deposit-mail-ack-sent",o.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:m}),await fe({silent:!0})}catch(e){h("deposit-mail-ack-error",k(e),{ttlMs:m})}}}async function Au(){if(!nn){nn=!0;try{const t=await bc();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&h("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:m})}catch(t){h("deposit-mail-ack-cleanup-error",k(t),{ttlMs:m})}finally{nn=!1}}}async function Hs(t={}){var e,r;if(!!A()){if(!(d!=null&&d.connected)){h("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}Ce=!0,l();try{const n=await hc(t);if(!(n!=null&&n.ok)){h("banking-data-pending",(n==null?void 0:n.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:m});return}const i=Dt((e=n==null?void 0:n.data)==null?void 0:e.entries);ku(i);const o=new Date().toISOString(),s={local_upload_id:Ks(),authenticated_username:X(),authenticated_discord_user_id:((r=p==null?void 0:p.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:o,data:n.data||{}};try{await Js(s)}catch(c){throw Mu(s),c}await fe({silent:!0})}catch(n){h("banking-data-error",k(n),{ttlMs:m})}finally{Ce=!1,l()}}}function Ws(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function or(){try{const t=window.localStorage.getItem($o),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function zs(t){window.localStorage.setItem($o,JSON.stringify(Array.isArray(t)?t:[]))}function Lu(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||Ws()),r=or().filter(n=>String((n==null?void 0:n.mail_batch_id)||(n==null?void 0:n.mailBatchId)||(n==null?void 0:n.local_batch_id)||"")!==e);r.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),zs(r)}function io(t){const e=String(t||"").trim();if(!e)return;const r=or().filter(n=>String((n==null?void 0:n.mail_batch_id)||(n==null?void 0:n.mailBatchId)||(n==null?void 0:n.local_batch_id)||"")!==e);zs(r)}async function Eu(){if(!A()){h("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:m});return}if(!(d!=null&&d.connected)){h("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:m});return}const t=or(),e=Ur();if(t.length>0&&e<=0){await bt();return}pn=!0,l();try{const r=await _("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail checkout request.");const n=Dt(r.records);if(n.length===0){h("deposit-mail-none",r.message||"No unsent deposit mail is available.",{ttlMs:m}),await fe({silent:!0});return}const i={mail_batch_id:r.mail_batch_id||r.mailBatchId||Ws(),checked_out_by:r.checked_out_by||r.checkedOutBy||X(),checked_out_at:new Date().toISOString(),records:n};Lu(i),await bt()}catch(r){h("deposit-mail-error",k(r),{ttlMs:m})}finally{pn=!1,l()}}function js(t=""){nt||rt||!A()||ir()<=0||F.running||(nt=window.setTimeout(()=>{nt=null,bt()},100))}async function bt(){if(nt&&(window.clearTimeout(nt),nt=null),rt||!A())return;const t=or();if(t.length!==0){if(await Nn({silent:!0}),F.running){h("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:m}),l();return}rt=!0,l();try{for(const e of t){const r=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),n=Dt(e==null?void 0:e.records);if(n.length===0){io(r);continue}const i=await Dc(n);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(d!=null&&d.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const o=await _("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:r,event_ids:i.eventIds||n.map(s=>s.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||"Backend did not confirm deposit mail was marked written_to_eso.");io(r),h("deposit-mail-written",i.message||`Wrote ${n.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:m})}await fe({silent:!0})}catch(e){h("deposit-mail-write-error",k(e),{ttlMs:m})}finally{rt=!1,l()}}}async function Nn(t={}){try{const e=Boolean(F.running),r=await kc();F={running:Boolean(r==null?void 0:r.running),message:String((r==null?void 0:r.message)||"")},F.running||await Au(),e&&!F.running&&(h("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:m}),await bt()),e!==F.running&&l()}catch(e){t.silent||h("eso-status-error",k(e),{ttlMs:m})}}function Ru(){et&&clearInterval(et),Nn({silent:!0}).then(()=>{!F.running&&ir()>0&&bt()}),et=window.setInterval(()=>Nn({silent:!0}),Bc)}function $u(){et&&(clearInterval(et),et=null)}function Ks(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function ti(){try{const t=window.localStorage.getItem(Ro),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Ys(t){window.localStorage.setItem(Ro,JSON.stringify(Array.isArray(t)?t:[]))}function Mu(t){const e=String((t==null?void 0:t.local_upload_id)||Ks()),r=ti().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Ys(r),h("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function Du(t){const e=ti().filter(r=>(r==null?void 0:r.local_upload_id)!==t);Ys(e)}async function Nu(){if(en||!(d!=null&&d.connected)||!A())return;const t=ti();if(t.length!==0){en=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!A())return;await Js(e),Du(e.local_upload_id)}}catch(e){h("banking-data-pending-error",`Pending banking upload retry failed: ${k(e)}`,{ttlMs:m})}finally{en=!1}}}async function Js(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await _("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const r=await gc(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return h("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:m}),e}function Qs(){if(R!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>Tu());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{ft=!0,le="",l(),I("discordHistorySearchInput")});const r=document.querySelector("#discordMemberSearch");r&&r.addEventListener("input",s=>{vr=s.target.value||"",gn=s.target.selectionStart,yn=s.target.selectionEnd,l({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(s=>{s.addEventListener("click",()=>{qu(s.dataset.discordSortColumn||"username")})});const n=document.querySelector("#discordRoleFilter");n&&n.addEventListener("change",s=>{const c=String(s.target.value||"").trim();c&&(it.add(c),l())}),document.querySelectorAll("[data-remove-role-filter]").forEach(s=>{s.addEventListener("click",()=>{const c=s.dataset.removeRoleFilter||"";it.delete(c),l()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",s=>{const c=String(s.target.value||"").trim();c&&(ot.add(c),l())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(s=>{s.addEventListener("click",()=>{const c=s.dataset.removeDiscordLinkStatusFilter||"";ot.delete(c),l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(s=>{s.addEventListener("click",()=>us(s.dataset.openMemberLinkDialog||"",s.dataset.memberLinkValue||""))});const o=document.querySelector("#clearDiscordFiltersButton");o&&o.addEventListener("click",()=>{vr="",it.clear(),ot.clear(),l()})}async function Tu(){var t,e;if(!(d!=null&&d.connected)){h("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:m});return}kr=!0,l(),h("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const r=await _("guildsync:request-discord-data-refresh",{requested_by:((t=p==null?void 0:p.user)==null?void 0:t.display_name)||((e=p==null?void 0:p.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to request Discord data refresh.");h("discord-refresh-requested",r.message||"Discord data refresh completed.",{ttlMs:m}),await ri({silent:!0})}catch(r){h("discord-refresh-error",k(r),{ttlMs:m})}finally{kr=!1,l()}}async function Cu(){if(!(d!=null&&d.connected))return;const t=await _("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(Ir=t.value||null)}async function Bu(t={}){if(!!(t!=null&&t.ok)){P=ni(t.members),Or=ii(t.roles),t.last_refresh&&(Ir=t.last_refresh);try{await Cu()}catch{}R==="discord-members"&&l(),h("discord-data-updated",`Discord data updated. Loaded ${P.length} member record${P.length===1?"":"s"}.`,{ttlMs:m})}}async function ri(t={}){const e=Boolean(t.silent);if(!(d!=null&&d.connected)){h("discord-data-error","GuildSync websocket is not connected.",{ttlMs:m});return}Ht=!0,l();try{const[r,n]=await Promise.all([_("guildsync:request-discord-data-date",{}),_("guildsync:request-discord-member-dataJSON",{})]);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord refresh date.");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord member data.");Ir=r.value||null,P=ni(n.members),Or=ii(n.roles),e||h("discord-data",`Loaded ${P.length} Discord member record${P.length===1?"":"s"}.`,{ttlMs:m})}catch(r){h("discord-data-error",k(r),{ttlMs:m})}finally{Ht=!1,l()}}function _(t,e={},r=3e4){return new Promise((n,i)=>{if(!(d!=null&&d.connected)){i(new Error("GuildSync websocket is not connected."));return}let o=!1;const s=window.setTimeout(()=>{o||(o=!0,i(new Error(`${t} timed out.`)))},r);d.emit(t,e,c=>{o||(o=!0,window.clearTimeout(s),n(c))})})}function ni(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(Xs).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,r)=>Yt(e).localeCompare(Yt(r),void 0,{sensitivity:"base"})):[]}function ii(t){if(!Array.isArray(t))return[];const e=new Map;for(const r of t){const n=Xs(r);if(!n)continue;const i=n.role_id||Ut(n.role_name);i&&!e.has(i)&&e.set(i,n)}return Array.from(e.values()).sort((r,n)=>String(r.role_name||"").localeCompare(String(n.role_name||""),void 0,{sensitivity:"base"}))}function Xs(t){var i,o;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),r=String(t.role_name||t.name||"Unnamed Role").trim(),n=(o=(i=t.role_color)!=null?i:t.color)!=null?o:null;return{role_id:e,role_name:r||"Unnamed Role",role_color:n}}function Ou(){const t=vr.trim().toLowerCase(),e=Array.from(it),r=P.filter(n=>{if(t&&![n.username,n.global_name,n.server_nickname,n.discord_id,...n.roles.map(o=>o.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(n.roles.map(o=>o.role_name));if(!e.every(o=>i.has(o)))return!1}return!!Ho(ot,hl(n))});return Iu(r)}function Iu(t){const e=Fe==="desc"?-1:1;return[...t].sort((r,n)=>{const i=oo(r,Wt),o=oo(n,Wt),s=i.localeCompare(o,void 0,{sensitivity:"base",numeric:!0});return s!==0?s*e:Yt(r).localeCompare(Yt(n),void 0,{sensitivity:"base",numeric:!0})})}function oo(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(r=>r.role_name||"").filter(Boolean).sort((r,n)=>r.localeCompare(n,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function qu(t){const r=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";Wt===r?Fe=Fe==="asc"?"desc":"asc":(Wt=r,Fe="asc"),l()}function lr(t,e){const r=Wt===t,n=Fe==="asc"?"ascending":"descending",i=r?Fe==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${r?n:"none"}">
      <button
        class="discord-sort-header${r?" active":""}"
        type="button"
        data-discord-sort-column="${f(t)}"
        title="Sort ${f(e)} ${r&&Fe==="asc"?"descending":"ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function xu(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(gn)?gn:t.value.length,r=Number.isInteger(yn)?yn:e;t.setSelectionRange(e,r)}}function Fu(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(bn)?bn:t.value.length,r=Number.isInteger(kn)?kn:e;t.setSelectionRange(e,r)}}function Pu(){const t=new Set;for(const e of P)for(const r of e.roles)r.role_name&&t.add(r.role_name);return Array.from(t).sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function Gu(t){const e=ju(t),r=Yt(t),n=t.roles||[];return`
    <tr data-discord-user-id="${f(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${f(e)}" alt="${f(r)}" />`:`<span>${a(ca(r))}</span>`}
          </div>
          <span>${a(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${a(t.global_name||"")}</td>
      <td>${a(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${n.length>0?n.map(i=>Vu(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${ls({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function Uu(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${a(Ht?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function Vu(t){const e=zr(t.role_color),r=ai(e),n=si(e,r);return`
    <span
      class="discord-role-badge"
      title="${f(t.role_name)}"
      style="${n}"
    >${a(t.role_name)}</span>
  `}function Hu(t){const e=oi(t),r=zr(e==null?void 0:e.role_color),n=ai(r),i=si(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-role-filter="${f(t)}"
      style="${i}"
      title="Remove ${f(t)} filter"
    >
      <span>${a(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Wu(t){const e=zu(t);for(const r of e){const n=oi(r);if(n)return n}return null}function zu(t){const e=String(t||"").trim();if(!e)return[];const r=Ut(e),i={associate:["Associates","Associate"],associates:["Associates","Associate"],soldier:["Soldiers","Soldier"],soldiers:["Soldiers","Soldier"],capo:["Capo"],capos:["Capo","Capos"],caporegime:["CapoRegime","Capo Regime","Capo Regimes"],consiglieres:["Consigliere","Consiglieres"],consigliere:["Consigliere","Consiglieres"]}[r]||[e];return Array.from(new Set([e,...i].filter(Boolean)))}function Ut(t){return String(t||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function oi(t){const e=Ut(t);if(!e)return null;const r=Or.find(n=>Ut(n.role_name)===e);if(r)return r;for(const n of P){const i=n.roles.find(o=>Ut(o.role_name)===e);if(i)return i}return null}function zr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function si(t,e){return[`--role-fill-top: ${so(t,"#ffffff",.16)}`,`--role-fill-bottom: ${so(t,"#000000",.1)}`,`--role-fill-glow: ${ao(t,.28)}`,`--role-fill-edge: ${ao(t,.46)}`,`color: ${e}`].join("; ")}function so(t,e,r){const n=dr(t)||dr("#64748b"),i=dr(e)||dr("#ffffff"),o=Math.max(0,Math.min(1,Number(r)||0)),s=Math.round(n.red+(i.red-n.red)*o),c=Math.round(n.green+(i.green-n.green)*o),u=Math.round(n.blue+(i.blue-n.blue)*o);return`#${cn(s)}${cn(c)}${cn(u)}`}function dr(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function cn(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function ao(t,e){const r=String(t||"#64748b").replace("#",""),n=/^[0-9a-f]{6}$/i.test(r)?r:"64748b",i=parseInt(n.slice(0,2),16),o=parseInt(n.slice(2,4),16),s=parseInt(n.slice(4,6),16);return`rgba(${i}, ${o}, ${s}, ${e})`}function ai(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const r=parseInt(e.slice(0,2),16),n=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(r*299+n*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function ju(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!r)return"";const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function Yt(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function Zs(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function yr(){const t=document.querySelector("#discordArea");if(!!t){if(sr(!1),A()){const e=p.user||{},r=X(),n=ff(e),i=ca(r);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${n?`<img src="${f(n)}" alt="${f(r)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${a(i)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const o=document.querySelector("#discordAvatarButton");o.addEventListener("contextmenu",s=>{s.preventDefault(),co()}),o.addEventListener("click",()=>{co()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",Xu)}}function co(){if(Xt){sr();return}Qu()}function Ku(t=we){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],r=String((t==null?void 0:t.directory)||"").trim(),n=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const o=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),s=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),c=String((i==null?void 0:i.filePath)||(r?`${r}\\${s}`:s)).trim(),u=(i==null?void 0:i.enabled)!==!1,g=n&&u,S=`profileFileWatchToggle-${Ju(o||s)}`;return`
          <label class="profile-filewatch-item ${u?"enabled":"disabled"}" title="${f(c)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${a(s)}</span>
              <span class="profile-filewatch-state">${g?"Watching":u?"On":"Off"}</span>
            </span>
            <input
              id="${f(S)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${f(o)}"
              ${u?"checked":""}
              aria-label="Turn file watch ${u?"off":"on"} for ${f(s)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function ci(){var n,i,o;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=X(),r=((n=p.user)==null?void 0:n.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${a(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${a(hf(r))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${a(Br)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${we!=null&&we.watching?"Active":"Stopped"}</span>
        </div>
        ${Ku()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(i=document.querySelector("#discordLogoutButton"))==null||i.addEventListener("click",Zu),(o=document.querySelector("#associateTicketReportButton"))==null||o.addEventListener("click",()=>{sr(!1),zo()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(s=>{s.addEventListener("change",Yu)})}async function ea(){try{we=await vc(),Xt&&ci()}catch(t){h("file-watcher-error",k(t),{ttlMs:m})}}async function Yu(t){var n;const e=t.currentTarget,r=String(((n=e==null?void 0:e.dataset)==null?void 0:n.filewatchKey)||"").trim();if(!!r)try{e.disabled=!0,we=await Lc(r,e.checked),await lt({silent:!0}),Xt&&ci()}catch(i){h("file-watcher-error",k(i),{ttlMs:m}),await ea()}}function Ju(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function Qu(){const t=document.querySelector("#discordProfileMenu");!t||(ci(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),Xt=!0,ea(),setTimeout(()=>{window.addEventListener("click",ta),window.addEventListener("keydown",ra)},0))}function sr(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),Xt=!1,t&&(window.removeEventListener("click",ta),window.removeEventListener("keydown",ra))}function ta(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&sr()}function ra(t){t.key==="Escape"&&sr()}async function Xu(){try{h("auth","Opening Discord login...",{ttlMs:m});const t=await Rc();t!=null&&t.status_message&&h("auth",t.status_message,{ttlMs:m}),Me()}catch(t){h("auth-error",k(t),{ttlMs:m}),Me()}}async function Zu(){try{p=await wc(),h("auth",p.status_message||"Logged out.",{ttlMs:m}),Io(),Vt(),await lt()}catch(t){h("auth-error",k(t),{ttlMs:m}),Me()}}function Vt(){const t=p.socket_url||"https://guildsync.perdues.me";ef(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};p!=null&&p.token&&(e.auth={token:p.token}),d=mr(t,e),d.on("connect",()=>{Me(),na(),R==="discord-members"&&ri({silent:!0}),R==="eso-members"&&nr({silent:!0}),R==="more"&&fe({silent:!0}),Nu(),bt(),Ru(),Su(),Gd(),Wd(),tf()}),d.on("connect_error",()=>{Me(),Nr()}),d.on("disconnect",()=>{Me(),Nr(),$u(),wu()}),d.on("guildsync:version-status",r=>{rf(r)}),d.on("guildsync:discord-member-data-updated",r=>{Bu(r)}),d.on("guildsync:banking-data-updated",r=>{vu(r)}),d.on("guildsync:roster-data-updated",r=>{qd(r)}),d.on("guildsync:member-links-updated",(r={})=>{Array.isArray(r.links)&&(L=r.links,(R==="discord-members"||R==="eso-members"||R==="settings"||Oe)&&l())}),d.on("guildsync:discord-refresh-status",(r={})=>{const n=String(r.message||"").trim();n&&h("discord-refresh-status",n,{ttlMs:m})})}function ef(t=!0){Nr(),d&&(d.disconnect(),d=null),t&&Me()}function na(){!(d!=null&&d.connected)||d.emit("guildsync:client-version",{version:Br,platform:ia(),client_type:"wails"})}function tf(){Nr(),pr=window.setInterval(()=>{na()},Cc)}function Nr(){pr&&(window.clearInterval(pr),pr=null)}function rf(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",r=t.download&&typeof t.download=="object"?t.download:{};me={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||r.url||"").trim(),fileName:String(t.download_file_name||r.file_name||"").trim(),platformLabel:String(r.label||t.platform||ia()).trim()},h("version",`GuildSync is out of date. Current version: ${Br}. Latest version: ${e}.`),Tn();return}me={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},Tn(),li("version")}}function ia(){const t=String(navigator.userAgent||"").toLowerCase(),r=`${String(navigator.platform||"").toLowerCase()} ${t}`;return r.includes("mac")?"macos":r.includes("linux")?"linux":"windows"}function Tn(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!me.updateRequired||!me.downloadUrl){t.innerHTML="";return}const e=me.platformLabel||"Desktop",r=me.latestVersion||"latest",n=me.fileName||"GuildSync client download";t.innerHTML=`
    <button
      id="desktopUpdateDownloadButton"
      class="desktop-update-download-button"
      type="button"
      title="Download ${f(n)}"
      aria-label="Download GuildSync ${f(r)} for ${f(e)}"
    >
      <span class="desktop-update-download-icon" aria-hidden="true">\u2B07</span>
      <span class="desktop-update-download-copy">
        <span class="desktop-update-download-title">Update Available</span>
        <span class="desktop-update-download-subtitle">${a(e)} \xB7 ${a(r)}</span>
      </span>
    </button>
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{nf()})}function nf(){const t=String(me.downloadUrl||"").trim();if(!t){h("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:m});return}Tc(t)}function h(t,e,r={}){const n=String(t||"").trim(),i=String(e||"").trim();if(!(!n||!i)){if(De.set(n,i),qe.has(n)&&(window.clearTimeout(qe.get(n)),qe.delete(n)),r.ttlMs&&Number(r.ttlMs)>0){const o=window.setTimeout(()=>{li(n)},Number(r.ttlMs));qe.set(n,o)}kt()}}function li(t){const e=String(t||"").trim();if(!!e){if(De.delete(e),qe.has(e)&&(window.clearTimeout(qe.get(e)),qe.delete(e)),T===e){Yr(()=>{T="",kt()});return}kt()}}function kt(){const t=jr();if(t.length===0){je?Yr(Jt):Jt();return}!je&&!Ke&&Kr(t[0])}function jr(){return Array.from(De.keys())}function oa(){const t=jr();if(t.length===0)return"";if(!T)return t[0];const e=t.indexOf(T);return e<0?t[0]:t[(e+1)%t.length]}function Kr(t){const e=document.querySelector("#statusMessageTrack");if(!e||!De.has(t)){Jt();return}Jr();const r=De.get(t);T=t,je=!0,Ke=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=r,e.style.setProperty("--message-fade-duration",`${To}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",Ke=!1,of()},{once:!0})})}function of(){const t=jr();if(!T||!De.has(T)){kt();return}if(t.length<=1){lo(!1);return}lo(!0)}function lo(t){const e=document.querySelector("#statusMessageViewport"),r=document.querySelector("#statusMessageTrack");if(!e||!r)return;const n=Math.max(0,r.scrollWidth-e.clientWidth);if(n<=0){t&&Qt(()=>{Yr(()=>{const i=oa();T="",i?Kr(i):Jt()})},No);return}Qt(()=>{sa(n,t)},Co)}function sa(t,e){const r=document.querySelector("#statusMessageTrack");if(!r||!T||!De.has(T))return;const n=Math.max(4,Math.ceil(t/qc));r.style.setProperty("--long-scroll-distance",`${t}px`),r.style.setProperty("--long-scroll-duration",`${n}s`),r.classList.add("long-scroll"),r.addEventListener("animationend",()=>{if(r.classList.remove("long-scroll"),r.style.transform=`translateX(-${t}px) translateY(-50%)`,e){Qt(()=>{Yr(()=>{const i=oa();T="",i?Kr(i):Jt()})},No);return}Qt(()=>{sf()},Ic)},{once:!0})}function sf(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!T||!De.has(T))return;if(jr().length!==1){kt();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const n=Math.max(0,e.scrollWidth-t.clientWidth);n<=0||Qt(()=>{sa(n,!1)},Co)}function Yr(t){const e=document.querySelector("#statusMessageTrack");if(Jr(),!e||!je){typeof t=="function"&&t();return}Ke=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${To}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",je=!1,Ke=!1,typeof t=="function"&&t()},{once:!0})}function Jt(){const t=document.querySelector("#statusMessageTrack");Jr(),T="",je=!1,Ke=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function Qt(t,e){const r=window.setTimeout(()=>{Ft=Ft.filter(n=>n!==r),t()},e);Ft.push(r)}function Jr(){for(const t of Ft)window.clearTimeout(t);Ft=[]}function aa(){if(!je||Ke||!T)return;const t=T;Jr(),Kr(t)}function Me(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(d!=null&&d.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!A()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${X()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${X()}`)}}async function lt(t={}){try{if(A()){const e=await $c();we=e,!t.silent&&(e==null?void 0:e.message)&&h(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:m});return}we=await Mc(),li("file-watcher")}catch(e){h("file-watcher-error",k(e),{ttlMs:m})}}function qt(t,e=null){const r="[GuildSync File Watcher]";if(e){console.log(`${r} ${t}`,e);return}console.log(`${r} ${t}`)}function af(t={}){if(!A()){qt("SavedVariables change ignored because the user is not authenticated.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",r=e.toLowerCase(),n=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",o=String(t.filePath||"").trim(),s=n?`${n} saved variables (${i})`:i;qt(`SavedVariables change detected: ${i}${o?` (${o})`:""}. Key: ${r}.`,t),h(`saved-vars-file-updated-${e}`,`${s} has been updated.`,{ttlMs:m}),r==="banking"&&(qt(`Processing banking SavedVariables update from ${i}.`),cf(t)),r==="roster"&&(qt(`Processing roster SavedVariables update from ${i}.`),lf(t)),r==="applications"&&(qt(`Processing applications SavedVariables update from ${i}.`),Kd(t))}async function cf(t={}){await _u(t),await Hs(t)}async function lf(t={}){await xd(t)}function df(t){!A()||h("file-watcher-error",k(t),{ttlMs:m})}function uf(){Ct("guildsync-savedvars-file-modified",af),Ct("guildsync-file-watcher-error",df),Ct("guildsync-login-complete",async t=>{p=t||{logged_in:!1,allowed:!1},yr(),Vt(),await lt(),h("auth",p.status_message||`Logged in and authorized as ${X()}.`,{ttlMs:m})}),Ct("guildsync-login-denied",async t=>{p={logged_in:!1,allowed:!1,status_message:""},yr(),await lt(),h("auth",t||"Access denied.",{ttlMs:m}),Vt()}),Ct("guildsync-login-failed",async t=>{p={logged_in:!1,allowed:!1,status_message:""},yr(),await lt(),h("auth",t||"Login failed.",{ttlMs:m}),Vt()})}function A(){return Boolean((p==null?void 0:p.logged_in)&&(p==null?void 0:p.allowed)&&(p==null?void 0:p.token))}function X(){var t,e;return((t=p.user)==null?void 0:t.display_name)||((e=p.user)==null?void 0:e.username)||"Discord User"}function ff(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),r=String(t.discord_user_id||"").trim();if(!e||!r)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=128`}function ca(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function hf(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function mf(){Bt&&(Bt.disconnect(),Bt=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),r=Math.round(t.getBoundingClientRect().height);Bt=new ResizeObserver(n=>{const i=n[0];if(!i)return;const o=Math.round(i.contentRect.width),s=Math.round(i.contentRect.height);o===e&&s===r||(e=o,r=s,la(),aa())}),Bt.observe(t)}function la(){clearTimeout(Gi),Gi=setTimeout(async()=>{try{await Eo()}catch{}},500)}function k(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function a(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function f(t){return a(t)}uf();Pc();
