(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const oa="/assets/splash.ea386b6a.png",aa="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",ca="/assets/GuildSync-Graphic.9169020d.png",re=Object.create(null);re.open="0";re.close="1";re.ping="2";re.pong="3";re.message="4";re.upgrade="5";re.noop="6";const dr=Object.create(null);Object.keys(re).forEach(t=>{dr[re[t]]=t});const an={type:"error",data:"parser error"},as=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",cs=typeof ArrayBuffer=="function",ls=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Nn=({type:t,data:e},r,n)=>as&&e instanceof Blob?r?n(e):Bi(e,n):cs&&(e instanceof ArrayBuffer||ls(e))?r?n(e):Bi(new Blob([e]),n):n(re[t]+(e||"")),Bi=(t,e)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];e("b"+(n||""))},r.readAsDataURL(t)};function Oi(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let Yr;function la(t,e){if(as&&t.data instanceof Blob)return t.data.arrayBuffer().then(Oi).then(e);if(cs&&(t.data instanceof ArrayBuffer||ls(t.data)))return e(Oi(t.data));Nn(t,!1,r=>{Yr||(Yr=new TextEncoder),e(Yr.encode(r))})}const Ii="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",xt=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<Ii.length;t++)xt[Ii.charCodeAt(t)]=t;const da=t=>{let e=t.length*.75,r=t.length,n,i=0,s,o,c,u;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const g=new ArrayBuffer(e),S=new Uint8Array(g);for(n=0;n<r;n+=4)s=xt[t.charCodeAt(n)],o=xt[t.charCodeAt(n+1)],c=xt[t.charCodeAt(n+2)],u=xt[t.charCodeAt(n+3)],S[i++]=s<<2|o>>4,S[i++]=(o&15)<<4|c>>2,S[i++]=(c&3)<<6|u&63;return g},ua=typeof ArrayBuffer=="function",Tn=(t,e)=>{if(typeof t!="string")return{type:"message",data:ds(t,e)};const r=t.charAt(0);return r==="b"?{type:"message",data:fa(t.substring(1),e)}:dr[r]?t.length>1?{type:dr[r],data:t.substring(1)}:{type:dr[r]}:an},fa=(t,e)=>{if(ua){const r=da(t);return ds(r,e)}else return{base64:!0,data:t}},ds=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},us=String.fromCharCode(30),ha=(t,e)=>{const r=t.length,n=new Array(r);let i=0;t.forEach((s,o)=>{Nn(s,!1,c=>{n[o]=c,++i===r&&e(n.join(us))})})},ma=(t,e)=>{const r=t.split(us),n=[];for(let i=0;i<r.length;i++){const s=Tn(r[i],e);if(n.push(s),s.type==="error")break}return n};function pa(){return new TransformStream({transform(t,e){la(t,r=>{const n=r.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,n)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(n))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(r)})}})}let Jr;function or(t){return t.reduce((e,r)=>e+r.length,0)}function ar(t,e){if(t[0].length===e)return t.shift();const r=new Uint8Array(e);let n=0;for(let i=0;i<e;i++)r[i]=t[0][n++],n===t[0].length&&(t.shift(),n=0);return t.length&&n<t[0].length&&(t[0]=t[0].slice(n)),r}function ga(t,e){Jr||(Jr=new TextDecoder);const r=[];let n=0,i=-1,s=!1;return new TransformStream({transform(o,c){for(r.push(o);;){if(n===0){if(or(r)<1)break;const u=ar(r,1);s=(u[0]&128)===128,i=u[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(or(r)<2)break;const u=ar(r,2);i=new DataView(u.buffer,u.byteOffset,u.length).getUint16(0),n=3}else if(n===2){if(or(r)<8)break;const u=ar(r,8),g=new DataView(u.buffer,u.byteOffset,u.length),S=g.getUint32(0);if(S>Math.pow(2,53-32)-1){c.enqueue(an);break}i=S*Math.pow(2,32)+g.getUint32(4),n=3}else{if(or(r)<i)break;const u=ar(r,i);c.enqueue(Tn(s?u:Jr.decode(u),e)),n=0}if(i===0||i>t){c.enqueue(an);break}}}})}const fs=4;function $(t){if(t)return ya(t)}function ya(t){for(var e in $.prototype)t[e]=$.prototype[e];return t}$.prototype.on=$.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};$.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this};$.prototype.off=$.prototype.removeListener=$.prototype.removeAllListeners=$.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var n,i=0;i<r.length;i++)if(n=r[i],n===e||n.fn===e){r.splice(i,1);break}return r.length===0&&delete this._callbacks["$"+t],this};$.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),r=this._callbacks["$"+t],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,i=r.length;n<i;++n)r[n].apply(this,e)}return this};$.prototype.emitReserved=$.prototype.emit;$.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};$.prototype.hasListeners=function(t){return!!this.listeners(t).length};const Nr=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,r)=>r(e,0))(),V=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),ba="arraybuffer";function hs(t,...e){return e.reduce((r,n)=>(t.hasOwnProperty(n)&&(r[n]=t[n]),r),{})}const ka=V.setTimeout,va=V.clearTimeout;function Tr(t,e){e.useNativeTimers?(t.setTimeoutFn=ka.bind(V),t.clearTimeoutFn=va.bind(V)):(t.setTimeoutFn=V.setTimeout.bind(V),t.clearTimeoutFn=V.clearTimeout.bind(V))}const Sa=1.33;function wa(t){return typeof t=="string"?_a(t):Math.ceil((t.byteLength||t.size)*Sa)}function _a(t){let e=0,r=0;for(let n=0,i=t.length;n<i;n++)e=t.charCodeAt(n),e<128?r+=1:e<2048?r+=2:e<55296||e>=57344?r+=3:(n++,r+=4);return r}function ms(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Aa(t){let e="";for(let r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e}function La(t){let e={},r=t.split("&");for(let n=0,i=r.length;n<i;n++){let s=r[n].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class Ea extends Error{constructor(e,r,n){super(e),this.description=r,this.context=n,this.type="TransportError"}}class Cn extends ${constructor(e){super(),this.writable=!1,Tr(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,r,n){return super.emitReserved("error",new Ea(e,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const r=Tn(e,this.socket.binaryType);this.onPacket(r)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,r={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const r=Aa(e);return r.length?"?"+r:""}}class Ra extends Cn{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const r=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};ma(e,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,ha(e,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=ms()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(e,r)}}let ps=!1;try{ps=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const $a=ps;function Ma(){}class Da extends Ra{constructor(e){if(super(e),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,r){const n=this.request({method:"POST",data:e});n.on("success",r),n.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=e}}class ee extends ${constructor(e,r,n){super(),this.createRequest=e,Tr(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;const r=hs(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=ee.requestsCount++,ee.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Ma,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete ee.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}ee.requestsCount=0;ee.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",qi);else if(typeof addEventListener=="function"){const t="onpagehide"in V?"pagehide":"unload";addEventListener(t,qi,!1)}}function qi(){for(let t in ee.requests)ee.requests.hasOwnProperty(t)&&ee.requests[t].abort()}const Na=function(){const t=gs({xdomain:!1});return t&&t.responseType!==null}();class Ta extends Da{constructor(e){super(e);const r=e&&e.forceBase64;this.supportsBinary=Na&&!r}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new ee(gs,this.uri(),e)}}function gs(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||$a))return new XMLHttpRequest}catch{}if(!e)try{return new V[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const ys=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Ca extends Cn{get name(){return"websocket"}doOpen(){const e=this.uri(),r=this.opts.protocols,n=ys?{}:hs(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,r,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],i=r===e.length-1;Nn(n,this.supportsBinary,s=>{try{this.doWrite(n,s)}catch{}i&&Nr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=ms()),this.supportsBinary||(r.b64=1),this.createUri(e,r)}}const Qr=V.WebSocket||V.MozWebSocket;class Ba extends Ca{createSocket(e,r,n){return ys?new Qr(e,r,n):r?new Qr(e,r):new Qr(e)}doWrite(e,r){this.ws.send(r)}}class Oa extends Cn{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const r=ga(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(r).getReader(),i=pa();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const s=()=>{n.read().then(({done:c,value:u})=>{c||(this.onPacket(u),s())}).catch(c=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],i=r===e.length-1;this._writer.write(n).then(()=>{i&&Nr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Ia={websocket:Ba,webtransport:Oa,polling:Ta},qa=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,xa=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function cn(t){if(t.length>8e3)throw"URI too long";const e=t,r=t.indexOf("["),n=t.indexOf("]");r!=-1&&n!=-1&&(t=t.substring(0,r)+t.substring(r,n).replace(/:/g,";")+t.substring(n,t.length));let i=qa.exec(t||""),s={},o=14;for(;o--;)s[xa[o]]=i[o]||"";return r!=-1&&n!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=Fa(s,s.path),s.queryKey=Pa(s,s.query),s}function Fa(t,e){const r=/\/{2,9}/g,n=e.replace(r,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Pa(t,e){const r={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,s){i&&(r[i]=s)}),r}const ln=typeof addEventListener=="function"&&typeof removeEventListener=="function",ur=[];ln&&addEventListener("offline",()=>{ur.forEach(t=>t())},!1);class Se extends ${constructor(e,r){if(super(),this.binaryType=ba,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(r=e,e=null),e){const n=cn(e);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=cn(r.host).host);Tr(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=La(this.opts.query)),ln&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},ur.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const r=Object.assign({},this.opts.query);r.EIO=fs,r.transport=e,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Se.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(e);r.open(),this.setTransport(r)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",Se.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=e.data,this._onError(r);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(r+=wa(i)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Nr(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,r,n){return this._sendPacket("message",e,r,n),this}send(e,r,n){return this._sendPacket("message",e,r,n),this}_sendPacket(e,r,n,i){if(typeof r=="function"&&(i=r,r=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const s={type:e,data:r,options:n};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),e()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(Se.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),ln&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=ur.indexOf(this._offlineEventListener);n!==-1&&ur.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,r),this.writeBuffer=[],this._prevBufferLen=0}}}Se.protocol=fs;class Ga extends Se{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let r=this.createTransport(e),n=!1;Se.priorWebsocketSuccess=!1;const i=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",y=>{if(!n)if(y.type==="pong"&&y.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;Se.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(S(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const b=new Error("probe error");b.transport=r.name,this.emitReserved("upgradeError",b)}}))};function s(){n||(n=!0,S(),r.close(),r=null)}const o=y=>{const b=new Error("probe error: "+y);b.transport=r.name,s(),this.emitReserved("upgradeError",b)};function c(){o("transport closed")}function u(){o("socket closed")}function g(y){r&&y.name!==r.name&&s()}const S=()=>{r.removeListener("open",i),r.removeListener("error",o),r.removeListener("close",c),this.off("close",u),this.off("upgrading",g)};r.once("open",i),r.once("error",o),r.once("close",c),this.once("close",u),this.once("upgrading",g),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const r=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&r.push(e[n]);return r}}class Ua extends Ga{constructor(e,r={}){const n=typeof e=="object"?e:r;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(i=>Ia[i]).filter(i=>!!i)),super(e,n)}}function Va(t,e="",r){let n=t;r=r||typeof location<"u"&&location,t==null&&(t=r.protocol+"//"+r.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=r.protocol+t:t=r.host+t),/^(https?|wss?):\/\//.test(t)||(typeof r<"u"?t=r.protocol+"//"+t:t="https://"+t),n=cn(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const s=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port+e,n.href=n.protocol+"://"+s+(r&&r.port===n.port?"":":"+n.port),n}const Ha=typeof ArrayBuffer=="function",Wa=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,bs=Object.prototype.toString,ja=typeof Blob=="function"||typeof Blob<"u"&&bs.call(Blob)==="[object BlobConstructor]",za=typeof File=="function"||typeof File<"u"&&bs.call(File)==="[object FileConstructor]";function Bn(t){return Ha&&(t instanceof ArrayBuffer||Wa(t))||ja&&t instanceof Blob||za&&t instanceof File}function fr(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let r=0,n=t.length;r<n;r++)if(fr(t[r]))return!0;return!1}if(Bn(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return fr(t.toJSON(),!0);for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&fr(t[r]))return!0;return!1}function Ka(t){const e=[],r=t.data,n=t;return n.data=dn(r,e),n.attachments=e.length,{packet:n,buffers:e}}function dn(t,e){if(!t)return t;if(Bn(t)){const r={_placeholder:!0,num:e.length};return e.push(t),r}else if(Array.isArray(t)){const r=new Array(t.length);for(let n=0;n<t.length;n++)r[n]=dn(t[n],e);return r}else if(typeof t=="object"&&!(t instanceof Date)){const r={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=dn(t[n],e));return r}return t}function Ya(t,e){return t.data=un(t.data,e),delete t.attachments,t}function un(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let r=0;r<t.length;r++)t[r]=un(t[r],e);else if(typeof t=="object")for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(t[r]=un(t[r],e));return t}const ks=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Ja=5;var v;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(v||(v={}));class Qa{constructor(e){this.replacer=e}encode(e){return(e.type===v.EVENT||e.type===v.ACK)&&fr(e)?this.encodeAsBinary({type:e.type===v.EVENT?v.BINARY_EVENT:v.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let r=""+e.type;return(e.type===v.BINARY_EVENT||e.type===v.BINARY_ACK)&&(r+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(r+=e.nsp+","),e.id!=null&&(r+=e.id),e.data!=null&&(r+=JSON.stringify(e.data,this.replacer)),r}encodeAsBinary(e){const r=Ka(e),n=this.encodeAsString(r.packet),i=r.buffers;return i.unshift(n),i}}class On extends ${constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let r;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(e);const n=r.type===v.BINARY_EVENT;n||r.type===v.BINARY_ACK?(r.type=n?v.EVENT:v.ACK,this.reconstructor=new Xa(r),r.attachments===0&&super.emitReserved("decoded",r)):super.emitReserved("decoded",r)}else if(Bn(e)||e.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(e),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let r=0;const n={type:Number(e.charAt(0))};if(v[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===v.BINARY_EVENT||n.type===v.BINARY_ACK){const s=r+1;for(;e.charAt(++r)!=="-"&&r!=e.length;);const o=e.substring(s,r);if(o!=Number(o)||e.charAt(r)!=="-")throw new Error("Illegal attachments");const c=Number(o);if(!vs(c)||c<0)throw new Error("Illegal attachments");if(c>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=c}if(e.charAt(r+1)==="/"){const s=r+1;for(;++r&&!(e.charAt(r)===","||r===e.length););n.nsp=e.substring(s,r)}else n.nsp="/";const i=e.charAt(r+1);if(i!==""&&Number(i)==i){const s=r+1;for(;++r;){const o=e.charAt(r);if(o==null||Number(o)!=o){--r;break}if(r===e.length)break}n.id=Number(e.substring(s,r+1))}if(e.charAt(++r)){const s=this.tryParse(e.substr(r));if(On.isPayloadValid(n.type,s))n.data=s;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,r){switch(e){case v.CONNECT:return yr(r);case v.DISCONNECT:return r===void 0;case v.CONNECT_ERROR:return typeof r=="string"||yr(r);case v.EVENT:case v.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&ks.indexOf(r[0])===-1);case v.ACK:case v.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Xa{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const r=Ya(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Za(t){return typeof t=="string"}const vs=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function ec(t){return t===void 0||vs(t)}function yr(t){return Object.prototype.toString.call(t)==="[object Object]"}function tc(t,e){switch(t){case v.CONNECT:return e===void 0||yr(e);case v.DISCONNECT:return e===void 0;case v.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&ks.indexOf(e[0])===-1);case v.ACK:return Array.isArray(e);case v.CONNECT_ERROR:return typeof e=="string"||yr(e);default:return!1}}function rc(t){return Za(t.nsp)&&ec(t.id)&&tc(t.type,t.data)}const nc=Object.freeze(Object.defineProperty({__proto__:null,protocol:Ja,get PacketType(){return v},Encoder:Qa,Decoder:On,isPacketValid:rc},Symbol.toStringTag,{value:"Module"}));function z(t,e,r){return t.on(e,r),function(){t.off(e,r)}}const ic=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Ss extends ${constructor(e,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[z(e,"open",this.onopen.bind(this)),z(e,"packet",this.onpacket.bind(this)),z(e,"error",this.onerror.bind(this)),z(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...r){var n,i,s;if(ic.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(r.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const o={type:v.EVENT,data:r};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const S=this.ids++,y=r.pop();this._registerAckCallback(S,y),o.id=S}const c=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,u=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!c||(u?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,r){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[e]=r;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let c=0;c<this.sendBuffer.length;c++)this.sendBuffer[c].id===e&&this.sendBuffer.splice(c,1);r.call(this,new Error("operation has timed out"))},i),o=(...c)=>{this.io.clearTimeoutFn(s),r.apply(this,c)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...r){return new Promise((n,i)=>{const s=(o,c)=>o?i(o):n(c);s.withError=!0,r.push(s),this.emit(e,...r)})}_addToQueue(e){let r;typeof e[e.length-1]=="function"&&(r=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(i)):(this._queue.shift(),r&&r(null,...s)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!e||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:v.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){const n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case v.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case v.EVENT:case v.BINARY_EVENT:this.onevent(e);break;case v.ACK:case v.BINARY_ACK:this.onack(e);break;case v.DISCONNECT:this.ondisconnect();break;case v.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const r=e.data||[];e.id!=null&&r.push(this.ack(e.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const r=this;let n=!1;return function(...i){n||(n=!0,r.packet({type:v.ACK,id:e,data:i}))}}onack(e){const r=this.acks[e.id];typeof r=="function"&&(delete this.acks[e.id],r.withError&&e.data.unshift(null),r.apply(this,e.data))}onconnect(e,r){this.id=e,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:v.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,e.data)}}}function vt(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}vt.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-r:t+r}return Math.min(t,this.max)|0};vt.prototype.reset=function(){this.attempts=0};vt.prototype.setMin=function(t){this.ms=t};vt.prototype.setMax=function(t){this.max=t};vt.prototype.setJitter=function(t){this.jitter=t};class fn extends ${constructor(e,r){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(r=e,e=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,Tr(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new vt({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=e;const i=r.parser||nc;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var r;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(r=this.backoff)===null||r===void 0||r.setMin(e),this)}randomizationFactor(e){var r;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(r=this.backoff)===null||r===void 0||r.setJitter(e),this)}reconnectionDelayMax(e){var r;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(r=this.backoff)===null||r===void 0||r.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Ua(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=z(r,"open",function(){n.onopen(),e&&e()}),s=c=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",c),e?e(c):this.maybeReconnectOnOpen()},o=z(r,"error",s);if(this._timeout!==!1){const c=this._timeout,u=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),r.close()},c);this.opts.autoUnref&&u.unref(),this.subs.push(()=>{this.clearTimeoutFn(u)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(z(e,"ping",this.onping.bind(this)),z(e,"data",this.ondata.bind(this)),z(e,"error",this.onerror.bind(this)),z(e,"close",this.onclose.bind(this)),z(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(r){this.onclose("parse error",r)}}ondecoded(e){Nr(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,r){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new Ss(this,e,r),this.nsps[e]=n),n}_destroy(e){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(e){const r=this.encoder.encode(e);for(let n=0;n<r.length;n++)this.engine.write(r[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Tt={};function hr(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const r=Va(t,e.path||"/socket.io"),n=r.source,i=r.id,s=r.path,o=Tt[i]&&s in Tt[i].nsps,c=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let u;return c?u=new fn(n,e):(Tt[i]||(Tt[i]=new fn(n,e)),u=Tt[i]),r.query&&!e.query&&(e.query=r.queryKey),u.socket(r.path,e)}Object.assign(hr,{Manager:fn,Socket:Ss,io:hr,connect:hr});function sc(t){return window.go.main.App.CleanupDepositMailAckFromGuildSyncBanking(t)}function oc(){return window.go.main.App.CloseWindow()}function ac(t){return window.go.main.App.CollectDepositMailAckFromGuildSyncBanking(t)}function cc(t){return window.go.main.App.CollectGuildSyncApplicationsData(t)}function lc(t){return window.go.main.App.CollectGuildSyncBankingData(t)}function dc(t){return window.go.main.App.CollectGuildSyncRosterData(t)}function uc(t,e){return window.go.main.App.CommitGuildSyncApplicationsData(t,e)}function fc(t,e){return window.go.main.App.CommitGuildSyncBankingData(t,e)}function hc(t,e){return window.go.main.App.CommitGuildSyncRosterData(t,e)}function mc(){return window.go.main.App.FlushPendingDepositMailAckCleanup()}function pc(){return window.go.main.App.GetESORunningStatus()}function gc(){return window.go.main.App.GetGuildSyncFileWatcherStatus()}function yc(){return window.go.main.App.GetGuildSyncSession()}function bc(){return window.go.main.App.LogoutGuildSync()}function kc(){return window.go.main.App.MaximizeWindow()}function vc(){return window.go.main.App.MinimizeWindow()}function ws(){return window.go.main.App.SaveWindowState()}function Sc(t,e){return window.go.main.App.SetGuildSyncSavedVarsWatchFileEnabled(t,e)}function wc(){return window.go.main.App.ShowMainWindow()}function _c(){return window.go.main.App.StartDiscordLogin()}function Ac(){return window.go.main.App.StartGuildSyncFileWatcher()}function Lc(){return window.go.main.App.StopGuildSyncFileWatcher()}function Ec(t){return window.go.main.App.WriteDepositMailToGuildSyncBanking(t)}function Rc(t,e,r){return window.runtime.EventsOnMultiple(t,e,r)}function Ct(t,e){return Rc(t,e,-1)}function $c(t){window.runtime.BrowserOpenURL(t)}const Cr="1.1.2",Mc=30*60*1e3,_s="guildsync-pending-banking-uploads",As="guildsync-pending-deposit-mail",Dc=5e3,Nc=30*1e3,Ls="guildsync-pending-roster-uploads",Es="guildsync-pending-applications-uploads",m=60*1e3,Rs=7e3,$s=1400,Ms=2400,Tc=4e3,Cc=38,Ds=document.querySelector("#app");let xi=null,Bt=null,Fi=!1,Qt=!1,mr=null,Xr=!1,Zr=!1,en=!1,we=null,F={running:!1,message:""},et=null,tt=null,hn=!1,rt=!1,nt=null,tn=!1,De=new Map,qe=new Map,T="",ze=!1,Ke=!1,Ft=[],p={logged_in:!1,allowed:!1,status_message:""},me={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},d=null,P=[],Br=null,Vt=!1,br=!1,kr="",it=new Set,st=new Set,Ht="username",Fe="asc",mn=null,pn=null,j=[],vr=null,Ne=!1,Pi=!1,Sr="",gn=null,yn=null,Pe=new Set,ot=new Set,oe="",x="",D=-1,dt=!1,Wt="",H=[],Te="",_e=[],Ae=!1,ce="",rn=null,K=-1,St=!1,jt="",Le=[],wr=!1,Ge=!1,Ee="",ut="",ft=!1,pe="",W=[],ht="",Ye="",Re=[],$e=!1,le="",Gi=null,Ie=0;const Bc=650;let Y=-1,wt=!1,_t=[],ge=!1,Ue="",At=!1,zt=[],ye=!1,Ve="",Lt=!1,In=[],be=!1,He="",Et="",ke="",at="",ve="",L=[],B=!1,O="",Qe=!1,Or="",xe="",Xt="",Zt="",ae=-1,Oe=!1,w=null,We=[],mt=!1,ue="",er="",Z=-1,Rt=!1,qn=null,Pt=null;const xn=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let G=[],M="biweekly",Ns=null,Ce=!1,je=!1,Xe="biweekly",$t=!1,pt=!1,ie="",se=null,N={targetType:"other",note:"",tickets:""},de=!1,_r=!1,U="",E={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},Mt="",C=-1,J=!1,bn={biweekly:0,monthly:0};const Oc=1780786800,Be=14*24*60*60,Ar=60*60,Lr=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let R=Lr[0].id;function Ic(){Ds.innerHTML=`
    <main class="splash-screen">
      <img src="${oa}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await wc(),await qc(),Ts(),Ut(),await lt()},5e3)}async function qc(){try{p=await yc()}catch(t){p={logged_in:!1,allowed:!1,status_message:""},h("session-error",k(t),{ttlMs:m})}}function Ts(){Ds.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${aa}" alt="" class="title-icon" />
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
            <img src="${ca}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${a(Cr)}</div>
            </div>
          </div>
          <div id="desktopUpdateArea" class="desktop-update-area"></div>
          <div id="discordArea" class="discord-area"></div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${Cs()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content" aria-live="polite">
          ${Os()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await vc()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await ws(),await oc()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await kc()}),gr(),Dn(),Is(),Ko(),_o(),Bo(),Gs(),wo(),fo(),ho(),mo(),po(),Zs(),Ao(),Hc(),Me(),kt(),Fi||(window.addEventListener("resize",()=>{sa(),na()}),lf(),Fi=!0)}function Cs(){return Lr.map(t=>{const e=t.id===R,r=xc(t.id,e),n=r?Bs():0,i=r?`Deposit mail needs attention: ${n} item${n===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${r?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${f(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${f(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${Fc(t.icon)}</span>
          <span class="guildsync-tab-label">${a(t.label)}</span>
          ${r?`<span class="guildsync-tab-mail-badge" aria-label="${f(i)}">${n>99?"99+":a(String(n))}</span>`:""}
        </button>
      `}).join("")}function Bs(){return A()?Pr()+nr()+To():0}function xc(t,e){return t!=="more"||e?!1:Bs()>0}function Fc(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function Os(){const t=Lr.find(r=>r.id===R)||Lr[0];let e="";return t.id==="discord-members"?e=jc():t.id==="eso-members"?e=zc():t.id==="more"?e=Wd():t.id==="settings"?e=yl():e=`
      <div class="guildsync-tab-panel" data-active-tab="${f(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${a(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${de?kd():""}
    ${$t?tu():""}
    ${Oe?dd():""}
    ${wt?bl():""}
    ${At?Al():""}
    ${Lt?$l():""}
    ${Qe?Pl():""}
    ${Rt?Vc():""}
  `}function Pc(){return Rt||dt||ft||de||$t||Oe||St||wt||At||Lt||Qe||je}function Gc(){return Rt?!1:Qe?(An(),!0):Lt?(_n(),!0):At?(wn(),!0):wt?(Sn(),!0):Oe?(yt(),!0):St?(Rn(),!0):$t?($r(),!0):de?(de=!1,l(),!0):dt?(dt=!1,l(),!0):ft?(ft=!1,l(),!0):je?(je=!1,l(),!0):!1}function Uc(t){t.key==="Escape"&&Gc()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",Uc,!0),window.guildSyncGlobalModalEscapeAttached=!0);function Fn(t={}){return new Promise(e=>{Pt&&Pt(!1),Rt=!0,qn={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},Pt=e,l()})}function Er(t=!1){const e=Pt;Pt=null,Rt=!1,qn=null,e&&e(t===!0),l()}function Vc(){const t=qn||{};return`
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
  `}function Ui(t){var n,i,s,o;const e=(i=(n=t.target).closest)==null?void 0:i.call(n,"#cancelGuildSyncConfirmButton"),r=(o=(s=t.target).closest)==null?void 0:o.call(s,"#acceptGuildSyncConfirmButton");if(!(!e&&!r)){if(t.preventDefault(),t.stopPropagation(),e){Er(!1);return}r&&Er(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",Ui,!0),document.addEventListener("pointerup",Ui,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function Hc(){if(!Rt)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=n=>{n.preventDefault(),n.stopPropagation(),Er(!1)}),e&&(e.onclick=n=>{n.preventDefault(),n.stopPropagation(),Er(!0)});const r=document.querySelector(".guildsync-confirm-overlay");r&&(r.onclick=n=>{n.target===r&&(n.preventDefault(),n.stopPropagation())})}function Is(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(Pc())return;const e=t.dataset.tabId;!e||e===R||(R=e,l())})})}function Wc(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function l(t={}){Qe&&Wc();const e=document.querySelector(".guildsync-tabs"),r=document.querySelector("#guildSyncTabContent");e&&(e.innerHTML=Cs()),r&&(r.innerHTML=Os()),Is(),Ko(),_o(),Bo(),Gs(),wo(),fo(),ho(),mo(),po(),Zs(),Ao(),t.restoreDiscordSearchFocus&&Ou(),t.restoreRosterSearchFocus&&Iu(),R==="discord-members"&&(d==null?void 0:d.connected)&&P.length===0&&!Vt&&ei({silent:!0}),R==="eso-members"&&(d==null?void 0:d.connected)&&j.length===0&&!Ne&&!Pi&&(Pi=!0,rr({silent:!0})),R==="more"&&(d==null?void 0:d.connected)&&G.length===0&&!Ce&&fe({silent:!0}),(R==="discord-members"||R==="eso-members"||R==="settings")&&(d==null?void 0:d.connected)&&L.length===0&&!B&&Ir({silent:!0})}function jc(){const t=Tu(),e=qu(),r=Array.from(it),n=Array.from(st);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${a(Yo(Br))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${Vt||br?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${br?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${f(kr)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!it.has(i)).map(i=>`<option value="${f(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All roles</span>':r.map(i=>Gu(i)).join("")}
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
              ${xn.filter(i=>!st.has(i.id)).map(i=>`<option value="${f(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(i=>qs("discord",i)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${cr("username","Username")}
                ${cr("global_name","Global Name")}
                ${cr("server_nickname","Server Nickname")}
                ${cr("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>xu(i)).join(""):Fu()}
            </tbody>
          </table>
        </div>
      </div>
      ${ft?dl():""}
    </div>
  `}function zc(){const t=nl(),e=ol(),r=Array.from(Pe),n=Array.from(ot);return`
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
          <span class="discord-last-refresh">Last Refresh: ${a(Td(vr))}</span>
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
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${f(Sr)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!Pe.has(i)).map(i=>`<option value="${f(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All ranks</span>':r.map(i=>al(i)).join("")}
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
              ${xn.filter(i=>!ot.has(i.id)).map(i=>`<option value="${f(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(i=>qs("roster",i)).join("")}
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
              ${t.length>0?t.map((i,s)=>Kc(i,s)).join(""):el()}
            </tbody>
          </table>
        </div>
      </div>
      ${dt?ml():""}
      ${St?Jc():""}
    </div>
  `}function Kc(t,e=-1){const r=tl(t.rank||""),n=r?` style="color: ${r};"`:"";return`
    <tr class="eso-roster-row${e===D?" roster-search-active-row":""}"${n} data-roster-row-index="${f(String(e))}" data-eso-account-name="${f(t.account_name||"")}">
      <td>${a(t.account_name||"")}</td>
      <td>${Pn(t.rank||"")}</td>
      <td>${a(Fr(t.joined))}</td>
      <td class="roster-notes-cell">${Yc(t)}</td>
      <td class="member-link-action-cell">${so({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function Yc(t){const e=String((t==null?void 0:t.account_name)||"").trim(),r=Number((t==null?void 0:t.note_count)||0),n=r>0,i=n?`${r} roster note${r===1?"":"s"} for ${e}`:`No roster notes for ${e}`;return`
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
  `}function Jc(){const t=jt||"",e=Boolean((p==null?void 0:p.logged_in)&&(p==null?void 0:p.allowed));return`
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
                ${Qc()}
              </tbody>
            </table>
          </div>
          ${e?Xc():'<div class="roster-history-muted">Log in to add a new note.</div>'}
        </div>
      </div>
    </div>
  `}function Qc(){return wr?'<tr><td class="bank-empty-row" colspan="3">Loading notes...</td></tr>':!Array.isArray(Le)||Le.length===0?'<tr><td class="bank-empty-row" colspan="3">No notes recorded for this member.</td></tr>':Le.map(t=>`
      <tr>
        <td class="roster-notes-when-cell">${a(Zc(t.timestamp))}</td>
        <td class="roster-notes-officer-cell">${a(t.officer||"")}</td>
        <td class="roster-notes-note-cell">${a(t.note||"")}</td>
      </tr>
    `).join("")}function Xc(){return`
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
  `}function Zc(t){const e=Number(t||0);return!Number.isFinite(e)||e<=0?"":new Date(e*1e3).toLocaleString()}function el(){return`
    <tr>
      <td class="bank-empty-row" colspan="5">${a(Ne?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function tl(t){const e=String(t||"").trim(),r=ri(e);return Hr(r==null?void 0:r.role_color)}function Pn(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${a(e)}</span>`}function rl(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":Pn(e)}function nl(){const t=Sr.trim().toLowerCase(),e=j.filter(r=>{const n=String(r.rank||"").trim();if(Pe.size>0&&!Pe.has(n)||!Ps(ot,kn(r)))return!1;if(!t)return!0;const i=Fr(r.joined),s=jn(r.joined),o=kn(r),c=Fs(r.account_name||"");return[r.account_name,n,i,s,r.joined,o,c].map(g=>String(g||"").toLowerCase()).join(" ").includes(t)});return il(e)}function il(t){if(!oe||!x)return t;const e=x==="desc"?-1:1;return[...t].sort((r,n)=>{const i=Vi(r,oe),s=Vi(n,oe),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:String(r.account_name||"").localeCompare(String(n.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function Vi(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const r=Number(t.joined||0);return Number.isFinite(r)&&r>0?String(r).padStart(16,"0"):""}if(e==="notes")return String(Number(t.note_count||0)).padStart(8,"0");if(e==="linked"){const r=kn(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[r]||"9"} ${r} ${Fs(t.account_name||"")}`}return String(t.account_name||"")}function sl(t){const r=new Set(["account_name","rank","joined","notes","linked"]).has(t)?t:"account_name";oe!==r?(oe=r,x="asc"):x==="asc"?x="desc":x==="desc"?(oe="",x=""):(oe=r,x="asc"),D=-1,l()}function Ot(t,e,r=""){const n=oe===t&&Boolean(x),i=n?x==="asc"?"ascending":"descending":"none",s=n?x==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${f(r)}" aria-sort="${f(i)}">
      <button
        class="discord-sort-header roster-sort-header${n?" active":""}"
        type="button"
        data-roster-sort-column="${f(t)}"
        title="Sort ${f(e)}${n&&x==="asc"?" descending":n&&x==="desc"?" not sorted":" ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function ol(){return Array.from(new Set(j.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function al(t){const e=ri(t),r=Hr(e==null?void 0:e.role_color),n=ii(r),i=ni(r,n);return`
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
  `}function cl(t){const e=xn.find(r=>r.id===t);return e?e.label:t}function qs(t,e){const r=t==="roster"?"roster":"discord",n=cl(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${r}-link-status-filter="${f(e)}"
      title="Remove ${f(n)} link filter"
    >
      <span>${a(n)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function xs(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked"&&String(r.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function ll(t){return xs(xr(t==null?void 0:t.discord_id))}function kn(t){return xs(qr(t==null?void 0:t.account_name))}function Fs(t){const e=qr(t),r=io({mode:"eso-to-discord",esoAccountName:t}),n=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean),i=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="candidate").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean);return[r.label,r.title,n.join(" "),i.join(" ")].filter(Boolean).join(" ")}function Ps(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function dl(){return`
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
            ${ul()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${Ye?`: ${a(Ye)}`:""}</div>
            ${fl()}
          </div>
        </div>
      </div>
    </div>
  `}function ul(){return $e&&W.length===0?'<div class="roster-history-muted">Searching...</div>':W.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${W.map((t,e)=>`
        <button class="roster-history-match${e===Y||t.discord_id===ht?" is-selected":""}" type="button" data-discord-history-id="${f(t.discord_id)}" data-discord-history-name="${f(vn(t))}">
          <span>${a(vn(t))}</span>
          <strong>${a(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===Y?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function fl(){return ht?$e&&Re.length===0?'<div class="roster-history-muted">Loading history...</div>':Re.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
              <td class="roster-history-when-cell">${a(jn(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${a(hl(t.event_type))}</td>
              <td>${a(t.old_value||"")}</td>
              <td>${a(t.new_value||"")}</td>
              <td>${a(t.initiator||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function vn(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function hl(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function ml(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(Wt)}" />
        </div>

        ${ce?`<div class="discord-data-error">${a(ce)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${pl()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${Te?`: ${a(Te)}`:""}</div>
            ${gl()}
          </div>
        </div>
      </div>
    </div>
  `}function pl(){return Ae&&H.length===0?'<div class="roster-history-muted">Searching...</div>':H.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${H.map((t,e)=>`
        <button class="roster-history-match${e===K||t.account_name===Te?" is-selected":""}" type="button" data-roster-history-account="${f(t.account_name)}">
          <span>${a(t.account_name)}</span>
          <strong>${a(t.rank||"")}</strong>
          ${e===K?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function gl(){return Te?Ae&&_e.length===0?'<div class="roster-history-muted">Loading history...</div>':_e.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
              <td class="roster-history-when-cell">${a(jn(t.timestamp))}</td>
              <td>${a(t.event_type||"")}</td>
              <td>${rl(t.rank)}</td>
              <td>${a(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function yl(){return`
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
  `}function Gs(){var t,e,r,n;R==="settings"&&((t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>Us()),(e=document.querySelector("#runDiscordRankAuditReportButton"))==null||e.addEventListener("click",()=>_l()),(r=document.querySelector("#runDiscordLastSeenReportButton"))==null||r.addEventListener("click",()=>Rl()),(n=document.querySelector("#runMemberLinksReportButton"))==null||n.addEventListener("click",()=>ql()))}function Us(){wt=!0,Ue="",l(),bo()}function Sn(){wt=!1,Ue="",l()}function bl(){const t=kl(),e=vl(),r=_t.length;return`
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
          ${r>0?Hi("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${r>0?Hi("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${a(Ws())}</textarea>
      </div>
    </div>
  `}function kl(){return _t.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function vl(){return _t.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function Hi(t,e,r,n){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${a(t)}</h4>
          <p>${a(e)}</p>
        </div>
        <span>${a(String(r.length))} row${r.length===1?"":"s"}</span>
      </div>
      ${r.length>0?Sl(r):`<div class="roster-history-muted report-section-empty">${a(n)}</div>`}
    </section>
  `}function Sl(t=_t){return`
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
              <td>${Pn(e.rank||"")}</td>
              <td>${a(Fr(e.joined))}</td>
              <td>${a(Vr(e.purchased_tickets||0))}</td>
              <td class="associate-earliest-deposit-cell">${a(Vs(e))}</td>
              <td>${a(Hs(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Vs(t){const e=String((t==null?void 0:t.earliest_deposit_summary)||"").trim();if(e)return e;const r=String((t==null?void 0:t.earliest_deposit_date)||"").trim(),n=String((t==null?void 0:t.earliest_deposit_raffle_period)||"").trim();return[r,n].filter(Boolean).join(" | ")}function Hs(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function Ws(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Earliest Deposit / Raffle","Discord Link"]];for(const e of _t){const r=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([r,e.account_name||"",e.rank||"",Fr(e.joined),Vr(e.purchased_tickets||0),Vs(e),Hs(e)])}return t.map(e=>e.map(Gr).join("	")).join(`
`)}async function wl(){const t=Ws();if(await Ur(t)){h("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:m});return}const r=document.querySelector("#associateTicketReportTsv");r&&(r.focus(),r.select()),h("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function _l(){At=!0,Ve="",l(),yo()}function wn(){At=!1,Ve="",l()}function Al(){const t=zt.length;return`
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
          ${t>0?Ll(zt):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${a(Ks())}</textarea>
      </div>
    </div>
  `}function Ll(t=zt){return`
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
              <td data-label="Discord Member" class="discord-rank-audit-member-cell">${a(js(e))}</td>
              <td data-label="Discord Rank Role" class="discord-rank-audit-discord-cell">${a(e.discord_rank||"No matching rank role")}</td>
              <td data-label="Linked ESO Account(s)" class="discord-rank-audit-eso-account-cell">${a(e.eso_accounts||"No linked ESO account")}</td>
              <td data-label="ESO Rank" class="discord-rank-audit-eso-rank-cell">${a(e.eso_rank||"None")}</td>
              <td data-label="Issue" class="discord-rank-audit-issue-cell">${a(zs(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function js(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function zs(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function Ks(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of zt)t.push([js(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",zs(e)]);return t.map(e=>e.map(Gr).join("	")).join(`
`)}async function El(){const t=Ks();if(await Ur(t)){h("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:m});return}const r=document.querySelector("#discordRankAuditReportTsv");r&&(r.focus(),r.select()),h("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function Rl(){Lt=!0,He="",Et="",l(),go(),L.length===0&&!B&&Ir({silent:!0})}function _n(){Lt=!1,He="",Et="",ke="",at="",ve="",l()}function $l(){const t=Gn(),e=In.length;return`
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
          ${e>0?Ml(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${a(Js(t))}</textarea>
      </div>
    </div>
  `}function Ml(t=[]){return`
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
            <tr class="discord-last-seen-row ${f(Ol(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${f(Je(e).status)}" data-discord-last-seen-search="${f(Ys(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${Bl(e)}
                  <span>${a(gt(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${Nl(e)}</td>
              <td>${a(Un(e.last_seen))}</td>
              <td>${a(Vn(e.last_seen))}</td>
              <td>${a(Rr(e.last_seen_action))}</td>
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
  `}function Gn(){const t=[...In],e=at,r=ve;if(!e||!r)return t;const n=r==="desc"?-1:1;return t.sort((i,s)=>{var o,c;if(e==="date"){const u=Number(i.last_seen||0)||0,g=Number(s.last_seen||0)||0;return(u-g)*n}if(e==="days")return(Wi(i.last_seen)-Wi(s.last_seen))*n;if(e==="action")return Rr(i.last_seen_action).localeCompare(Rr(s.last_seen_action),void 0,{sensitivity:"base"})*n;if(e==="eso"){const u=Je(i),g=Je(s),S={linked:0,candidate:1,unlinked:2},y=((o=S[u.status])!=null?o:9)-((c=S[g.status])!=null?c:9);return y!==0?y*n:u.esoAccountName.localeCompare(g.esoAccountName,void 0,{sensitivity:"base"})*n}return gt(i).localeCompare(gt(s),void 0,{sensitivity:"base"})*n})}function Dl(t){at!==t?(at=t,ve="asc"):ve==="asc"?ve="desc":(at="",ve=""),l()}function gt(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function Ys(t){return[gt(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,Tl(t),Un(t==null?void 0:t.last_seen),Vn(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function Je(t){const e=Xl(t==null?void 0:t.discord_id),r=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),n=String((e==null?void 0:e.eso_account_name)||"").trim();return r==="linked"&&n?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:n,title:`Linked ESO account: ${n}`}:(r==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&n?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:n,title:`Fuzzy ESO account candidate: ${n}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function Nl(t){const e=Je(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${f(e.className)}"
      title="${f(e.title)}"
      aria-label="${f(e.label)}"
      role="img"
    ></span>
  `}function Tl(t){const e=Je(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function Cl(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!r)return"";if(/^https?:\/\//i.test(e))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function Bl(t){const e=gt(t),r=e?e.slice(0,2).toUpperCase():"?",n=Cl(t);return n?`<span class="discord-member-avatar"><img src="${f(n)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${a(r)}</span>`}function Un(t){const e=Number(t);if(!e)return"Never";const r=new Date(e*1e3);if(Number.isNaN(r.getTime()))return String(t||"");const n=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(r).reduce((i,s)=>(i[s.type]=s.value,i),{});return`${n.month}/${n.day}/${n.year} ${n.hour}:${n.minute} ${n.dayPeriod}`}function Ol(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const r=(Date.now()-e*1e3)/864e5;return r>30?"discord-last-seen-red":r>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function Vn(t){const e=Number(t);if(!e)return"Never";const r=Date.now()-e*1e3;if(!Number.isFinite(r))return"";if(r<0)return"0 days";const n=Math.floor(r/864e5);return`${n} day${n===1?"":"s"}`}function Wi(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const r=Date.now()-e*1e3;return Number.isFinite(r)?r<0?0:Math.floor(r/864e5):Number.POSITIVE_INFINITY}function Rr(t){return String(t||"").trim()||"None tracked"}function Js(t=Gn()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const r of t){const n=Je(r);e.push([gt(r),n.label||"",n.esoAccountName||"",Un(r==null?void 0:r.last_seen),Vn(r==null?void 0:r.last_seen),Rr(r==null?void 0:r.last_seen_action),(r==null?void 0:r.username)||"",(r==null?void 0:r.discord_id)||""])}return e.map(r=>r.map(Gr).join("	")).join(`
`)}async function Il(){const t=Gn().filter(i=>{const s=ne(Et),o=String(ke||"").trim().toLowerCase(),c=!s||ne(Ys(i)).includes(s),u=!o||Je(i).status===o;return c&&u}),e=Js(t);if(await Ur(e)){h("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:m});return}const n=document.querySelector("#discordLastSeenReportTsv");n&&(n.focus(),n.select()),h("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function ql(){Qe=!0,O="",l(),L.length===0&&!B&&Ir({silent:!0})}function An(){Qe=!1,Or="",xe="",Xt="",Zt="",ae=-1,l()}function Qs(t){return[...new Set((Array.isArray(L)?L:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function Xs(t,e){return t.map(r=>`<option value="${f(r)}" ${e===r?"selected":""}>${a(r)}</option>`).join("")}function xl(){return Xs(Qs("link_status"),Xt)}function Fl(){return Xs(Qs("link_method"),Zt)}function Pl(){return`
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
            value="${f(Or)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${Xt===""?"selected":""}>All statuses</option>
            ${xl()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${Zt===""?"selected":""}>All methods</option>
            ${Fl()}
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
          ${Hl()}
        </div>
      </div>
    </div>
  `}function Zs(){var r,n,i,s,o,c;if(!Qe)return;(r=document.querySelector("#closeMemberLinksReportButton"))==null||r.addEventListener("click",An),(n=document.querySelector("#refreshMemberLinksButton"))==null||n.addEventListener("click",()=>Ir()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>Jl());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",Wl),t.addEventListener("keydown",Yl)),(s=document.querySelector("#memberLinksReportActionFilter"))==null||s.addEventListener("change",jl),(o=document.querySelector("#memberLinksReportStatusFilter"))==null||o.addEventListener("change",zl),(c=document.querySelector("#memberLinksReportMethodFilter"))==null||c.addEventListener("change",Kl),tr(),document.querySelectorAll("[data-accept-member-candidate]").forEach(u=>{u.addEventListener("click",()=>to(u.dataset.acceptMemberCandidate||"",u.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(u=>{u.addEventListener("click",()=>Ql(u.dataset.unlinkMemberLink||"",u.dataset.unlinkMemberLinkDiscordId||""))}),document.querySelectorAll("[data-unblock-member-auto-link]").forEach(u=>{u.addEventListener("click",()=>ro(u.dataset.unblockMemberAutoLink||"",u.dataset.unblockMemberAutoLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",u=>{u.target===e&&An()})}function ji(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function zi(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Gl(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Ul(t){return[...Array.isArray(t)?t:[]].sort((e,r)=>{const n=ji(e)-ji(r);if(n!==0)return n;const i=zi(e).localeCompare(zi(r),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((r==null?void 0:r.discord_user_id)||""),void 0,{sensitivity:"base"})})}function Vl(t){const e=Ln(t);let r="";e==="Username"?r=(t==null?void 0:t.discord_username)||"":e==="Global Name"?r=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(r=(t==null?void 0:t.discord_server_nickname)||""),r||(r=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const n=e?` <span class="member-link-report-match-field">(${a(e)})</span>`:"";return`<span class="member-link-report-discord-name">${a(r)}</span>${n}`}function Hl(){return B&&L.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(L)||L.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${Ul(L).map(e=>{var s;const r=String(e.link_status||"").trim().toLowerCase(),n=String(e.link_method||"").trim().toLowerCase(),i=Vl(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${f(Gl(e))}"
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
                <td class="member-links-confidence-col">${a(String((s=e.match_confidence)!=null?s:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function eo(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function Ki(t){const e=eo();if(e.forEach(n=>n.classList.remove("member-links-report-row-active")),e.length===0){ae=-1;return}ae=Math.max(0,Math.min(t,e.length-1));const r=e[ae];r.classList.add("member-links-report-row-active"),r.scrollIntoView({block:"nearest"})}function tr(){const t=ne(Or),e=String(xe||"").trim().toLowerCase(),r=String(Xt||"").trim().toLowerCase(),n=String(Zt||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let s=0;i.forEach(c=>{const u=ne(c.dataset.memberLinksReportSearch||""),g=String(c.dataset.memberLinksReportAction||"").trim().toLowerCase(),S=String(c.dataset.memberLinksReportStatus||"").trim().toLowerCase(),y=String(c.dataset.memberLinksReportMethod||"").trim().toLowerCase(),Ze=(!t||u.includes(t))&&(!e||g===e)&&(!r||S===r)&&(!n||y===n);c.hidden=!Ze,c.classList.remove("member-links-report-row-active"),Ze&&(s+=1)});const o=document.querySelector("#memberLinksReportSearchEmpty");o&&(o.hidden=s!==0),ae=-1}function Wl(t){Or=t.target.value||"",tr()}function jl(t){xe=t.target.value||"",tr()}function zl(t){Xt=t.target.value||"",tr()}function Kl(t){Zt=t.target.value||"",tr()}function Yl(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=eo();if(e.length===0)return;if(t.key==="ArrowDown"){const n=ae<0?0:ae+1;Ki(n>=e.length?e.length-1:n);return}const r=ae<0?e.length-1:ae-1;Ki(r<0?0:r)}async function Ir(t={}){if(!(d!=null&&d.connected)){O="You must be connected to load member links.",l();return}B=!0,O="",t.silent||l();try{const e=await _("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");L=Array.isArray(e.links)?e.links:[]}catch(e){O=k(e)}finally{B=!1,l()}}async function Jl(){if(!(d!=null&&d.connected)||!p.logged_in){O="You must be logged in and connected to run auto-linking.",l();return}B=!0,O="",l();try{const t=await _("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");L=Array.isArray(t.links)?t.links:[],h("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:m})}catch(t){O=k(t)}finally{B=!1,l()}}async function to(t,e=""){try{const r=await _("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to accept candidate.");L=Array.isArray(r.links)?r.links:L,h("member-link-accepted",r.message||"Candidate accepted as a link.",{ttlMs:m})}catch(r){O=k(r),h("member-link-accept-error",O,{ttlMs:m})}}async function ro(t,e=""){if(!await Fn({title:"Remove Auto-Link Block?",message:`Remove the blocked auto-match record between ${t} and this Discord account? Auto-linking will run immediately and this screen will refresh to show whether the pair linked again.`,confirmLabel:"Unblock",cancelLabel:"Cancel",confirmClass:"danger"}))return!1;B=!0,O="",l();try{const n=await _("guildsync:unblock-member-auto-link",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to remove auto-link block.");L=Array.isArray(n.links)?n.links:L;const i=Q(t),s=String(e||"").trim(),o=n.refreshedPair||L.find(g=>Q(g.eso_account_name)===i&&String(g.discord_user_id||"").trim()===s),c=String((o==null?void 0:o.link_status)||"").trim().toLowerCase(),u=c==="linked"?" It linked again automatically.":c==="candidate"?" It is now showing as a candidate.":" No automatic link was recreated.";return h("member-link-unblocked",`${n.message||"Auto-link block removed."}${u}`,{ttlMs:m}),!0}catch(n){return O=k(n),h("member-link-unblock-error",O,{ttlMs:m}),!1}finally{B=!1,l()}}async function Ql(t,e=""){if(!!await Fn({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const n=await _("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to unlink member.");L=Array.isArray(n.links)?n.links:L,h("member-link-unlinked",n.message||"Member link removed.",{ttlMs:m})}catch(n){O=k(n)}l()}}function Q(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function qr(t){const e=Q(t);return e?L.filter(r=>Q(r.eso_account_name)===e):[]}function xr(t){const e=String(t||"").trim();return e?L.filter(r=>String(r.discord_user_id||"").trim()===e):[]}function no(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const r=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(r.length>0){const i=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const s=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return s||r[0]}const n=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return n||e[0]}function Xl(t){return no(xr(t))}function Zl(t){return`${Q(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function Hn(){return w?w.mode==="discord-to-eso"?xr(w.discordUserId):qr(w.esoAccountName):[]}function ed(t){const e=String(t||"").trim(),r=P.find(n=>String(n.discord_id||"").trim()===e);return r&&(r.server_nickname||r.global_name||r.username||r.discord_id)||e}function io(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?xr(t.discordUserId):qr(t.esoAccountName),n=no(r),i=String((n==null?void 0:n.link_status)||"").trim().toLowerCase(),s=r.filter(c=>String(c.link_status||"").trim().toLowerCase()==="linked").length,o=r.filter(c=>String(c.link_status||"").trim().toLowerCase()==="candidate").length;return s>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?s===1?n.eso_account_name:`${s} ESO accounts`:s===1?n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member":`${s} Discord accounts`}`}:i==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?n.eso_account_name:n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member"}`}:i==="blocked"||Number((n==null?void 0:n.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function so(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,n=io(t);return`
    <button
      class="member-link-status-dot member-link-status-${f(n.className)}"
      type="button"
      title="${f(n.title)}"
      aria-label="${f(n.label)}"
      data-open-member-link-dialog="${f(e)}"
      data-member-link-value="${f(r||"")}"
    ></button>
  `}function td(){return w?w.mode==="discord-to-eso"?ed(w.discordUserId):w.esoAccountName||"":""}function oo(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function Ln(t){const e=oo((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const r=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(r.includes("discord_username")||r.includes("username"))return"Username";if(r.includes("discord_display_name")||r.includes("global")||r.includes("display"))return"Global Name";if(r.includes("discord_server_nickname")||r.includes("server")||r.includes("nickname"))return"Server Nickname";const n=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(n==="exact"||n==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",s=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const c of s){const u=rd(i,c.value);(!o||u>o.score)&&(o={...c,score:u})}if(o&&o.score>0)return o.field}return""}function ne(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function rd(t,e){const r=ne(t),n=ne(e);if(!r||!n)return 0;if(r===n)return 100;if((r.includes(n)||n.includes(r))&&Math.min(r.length,n.length)>=4)return 88;const i=Math.abs(r.length-n.length),s=[...r].findIndex((c,u)=>c!==n[u]),o=s===-1?Math.min(r.length,n.length):s;return Math.max(0,Math.min(75,Math.round(o*10-i*3)))}function nd(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function id(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function sd(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),r=nd(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${a(r)}</span>`}function od(t){var c;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",r=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",n=String(t.link_status||"").trim().toLowerCase(),o=n==="linked"?`<button
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
        <div><span>Status:</span> ${sd(t)} \xB7 ${a(id(t.link_method))} \xB7 ${a(String((c=t.match_confidence)!=null?c:""))}% \xB7 ${a(r)}</div>
        ${Ln(t)?`<div><span>Matched:</span> Matched on ${a(Ln(t))}</div>`:""}
      </div>
      ${o}
    </div>
  `}function ad(){const t=Hn();return t.length?[...t].sort((r,n)=>{var u,g;const i=String(r.link_status||"").trim().toLowerCase(),s=String(n.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},c=((u=o[i])!=null?u:9)-((g=o[s])!=null?g:9);return c!==0?c:Number(n.match_confidence||0)-Number(r.match_confidence||0)}).map(r=>od(r)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function cd(){if(mt)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(ue)return`<div class="discord-data-error">${a(ue)}</div>`;if(!Array.isArray(We)||We.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(Hn().map(r=>Zl(r))),e=[...We].filter(r=>{const n=(w==null?void 0:w.mode)==="discord-to-eso"?`${Q(r.account_name)}::${String(w.discordUserId||"").trim()}`:`${Q(w==null?void 0:w.esoAccountName)}::${String(r.discord_id||"").trim()}`;return!t.has(n)}).sort((r,n)=>{const i=Number(n.confidence||0)-Number(r.confidence||0);return i!==0?i:Yi(r).localeCompare(Yi(n),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(r=>ld(r)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function Yi(t){return((w==null?void 0:w.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function ld(t,e={}){var y,b,q;const r=(w==null?void 0:w.mode)||"",n=r==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=oo(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),s=r==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[s,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),c=r==="discord-to-eso"?t.account_name:t.discord_id,u=e.disabled===!0,g=[n,s,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),S=[n,o,`${(y=t.confidence)!=null?y:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${f(c||"")}" data-member-link-option-search="${f(g)}" title="${f(S)}" ${u?"disabled":""}>
      <span class="member-link-option-name" title="${f(n||"")}">${a(n||"")}</span>
      <span class="member-link-option-subtitle" title="${f(o||"")}">${a(o||"")}</span>
      <span class="member-link-option-confidence" title="${f(String((b=t.confidence)!=null?b:0))}%">${a(String((q=t.confidence)!=null?q:0))}%</span>
    </button>
  `}function dd(){const t=(w==null?void 0:w.mode)||"",e=td(),r=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
            ${ad()}
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
              value="${f(er)}"
            />
            ${cd()}
          </section>
        </div>

      </div>
    </div>
  `}async function ao(t,e){if(!(d!=null&&d.connected)||!A()){h("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:m});return}Oe=!0,w=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},We=[],mt=!0,ue="",er="",Z=-1,l();try{if(!Array.isArray(L)||L.length===0){const i=await _("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(L=Array.isArray(i.links)?i.links:[])}const n=await _("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load link suggestions.");We=Array.isArray(n.options)?n.options:[]}catch(r){ue=k(r)}finally{mt=!1,l()}}function yt(){document.removeEventListener("keydown",En),Oe=!1,w=null,We=[],mt=!1,ue="",er="",Z=-1,l()}function co(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function Ji(t){const e=co();if(e.forEach(n=>n.classList.remove("member-link-option-row-active")),e.length===0){Z=-1;return}Z=Math.max(0,Math.min(t,e.length-1));const r=e[Z];r.classList.add("member-link-option-row-active"),r.scrollIntoView({block:"nearest"})}function lo(){const t=ne(er),e=[...document.querySelectorAll(".member-link-option-row")];let r=0;e.forEach(i=>{const s=ne(i.dataset.memberLinkOptionSearch||i.textContent||""),o=!t||s.includes(t);i.hidden=!o,i.classList.remove("member-link-option-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinkSuggestionSearchEmpty");n&&(n.hidden=r!==0),Z=-1}function ud(t){er=t.target.value||"",lo()}function fd(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=co();if(e.length===0)return;if(t.key==="ArrowDown"){const n=Z<0?0:Z+1;Ji(n>=e.length?e.length-1:n);return}const r=Z<0?e.length-1:Z-1;Ji(r<0?0:r)}function En(t){!Oe||t.key==="Escape"&&(t.preventDefault(),yt())}async function hd(t){if(!(!w||!t))try{const e=w.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:w.discordUserId}:{esoAccountName:w.esoAccountName,discordUserId:t},r=await _("guildsync:manual-link-member",e,3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to link members.");L=Array.isArray(r.links)?r.links:L,h("member-link-saved",r.message||"Member link saved.",{ttlMs:m}),yt()}catch(e){ue=k(e),l()}}async function md(t,e=""){await to(t,e),yt()}async function uo(){if(!!w){mt=!0,ue="",l();try{const t=w.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:w.discordUserId}:{mode:"eso-to-discord",accountName:w.esoAccountName},e=await _("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");We=Array.isArray(e.options)?e.options:[]}catch(t){ue=k(t)}finally{mt=!1,l()}}}async function pd(t="",e=""){const r=Hn().find(i=>Q(i.eso_account_name)===Q(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!r||!await Fn({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await _("guildsync:manual-unlink-member",{esoAccountName:r.eso_account_name,discordUserId:r.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");L=Array.isArray(i.links)?i.links:L,h("member-link-unlinked",i.message||"Member link removed.",{ttlMs:m}),await uo()}catch(i){ue=k(i),l()}}async function gd(t="",e=""){await ro(t,e)&&await uo()}function fo(){var r;if(!Oe)return;document.removeEventListener("keydown",En),document.addEventListener("keydown",En),(r=document.querySelector("#closeMemberLinkDialogButton"))==null||r.addEventListener("click",yt);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",ud),t.addEventListener("keydown",fd),lo()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(n=>{n.addEventListener("click",()=>pd(n.dataset.unlinkEsoAccount||"",n.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-unblock-dialog-member-auto-link]").forEach(n=>{n.addEventListener("click",()=>gd(n.dataset.unblockEsoAccount||"",n.dataset.unblockDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(n=>{n.addEventListener("click",()=>hd(n.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(n=>{n.addEventListener("click",()=>md(n.dataset.acceptDialogMemberCandidate||"",n.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",n=>{n.target===e&&yt()})}function ho(){var e,r,n;if(!wt)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",Sn),(r=document.querySelector("#rerunAssociateTicketReportButton"))==null||r.addEventListener("click",()=>bo()),(n=document.querySelector("#copyAssociateTicketReportGridButton"))==null||n.addEventListener("click",()=>wl());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Sn()})}function mo(){var e,r,n;if(!At)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",wn),(r=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||r.addEventListener("click",()=>yo()),(n=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||n.addEventListener("click",()=>El());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&wn()})}function po(){var n,i,s;if(!Lt)return;(n=document.querySelector("#closeDiscordLastSeenReportButton"))==null||n.addEventListener("click",_n),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>go()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>Il()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(o=>{o.addEventListener("click",()=>Dl(o.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",yd);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",bd),Wn();const r=document.querySelector(".discord-last-seen-report-overlay");r&&r.addEventListener("click",o=>{o.target===r&&_n()})}function yd(t){Et=t.target.value||"",Wn()}function bd(t){ke=t.target.value||"",Wn()}function Wn(){const t=ne(Et),e=String(ke||"").trim().toLowerCase(),r=[...document.querySelectorAll("[data-discord-last-seen-row]")];let n=0;r.forEach(s=>{const o=ne(s.dataset.discordLastSeenSearch||s.textContent||""),c=String(s.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),S=(!t||o.includes(t))&&(!e||c===e);s.hidden=!S,S&&(n+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=n!==0)}async function go(){if(!(d!=null&&d.connected)||!A()){He="You must be logged in and connected to run this report.",l();return}be=!0,He="",l();try{const t=await _("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");P=ti(t.members),In=[...P]}catch(t){He=k(t)}finally{be=!1,l(),I("discordLastSeenReportSearchInput")}}async function yo(){if(!(d!=null&&d.connected)||!A()){Ve="You must be logged in and connected to run this report.",l();return}ye=!0,Ve="",l();try{const t=await _("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");zt=Array.isArray(t.rows)?t.rows:[]}catch(t){Ve=k(t)}finally{ye=!1,l()}}async function bo(){if(!(d!=null&&d.connected)||!A()){Ue="You must be logged in and connected to run this report.",l();return}ge=!0,Ue="",l();try{const t=await _("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");_t=Array.isArray(t.rows)?t.rows:[]}catch(t){Ue=k(t)}finally{ge=!1,l()}}function ct(){const t=String(Mt||"").trim().toLowerCase(),e={account_name:"Anonymous",rank:"Manual Entry"},r=new Set(["anonymous"]),n=j.filter(i=>String(i.account_name||"").trim()).filter(i=>{const o=String(i.account_name||"").trim().toLowerCase();return!o||r.has(o)||t&&!o.includes(t)?!1:(r.add(o),!0)}).slice().sort((i,s)=>{const o=String(i.account_name||"").toLowerCase(),c=String(s.account_name||"").toLowerCase(),u=t&&o.startsWith(t)?0:1,g=t&&c.startsWith(t)?0:1;return u!==g?u-g:o.localeCompare(c)}).slice(0,19);return[e,...n]}function ko(t=ct()){const e=String(E.accountName||"").trim();return t.length===0?'<div class="roster-history-muted manual-ticket-no-matches">No matching guild members found.</div>':t.map((r,n)=>`
        <button class="roster-history-match${n===C||r.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${f(r.account_name)}" role="option" aria-selected="${n===C||r.account_name===e?"true":"false"}">
          <span>${a(r.account_name)}</span>
          <strong>${a(r.rank||"")}</strong>
          ${n===C?"<small>Enter</small>":""}
        </button>
      `).join("")}function vo(){document.querySelectorAll("[data-manual-ticket-account]").forEach(t=>{t.addEventListener("mousedown",e=>{e.preventDefault()}),t.addEventListener("click",()=>{So(t.dataset.manualTicketAccount||"")})})}function nn(){const t=document.querySelector("#manualTicketMatchList");if(!t)return;const e=ct();C>=e.length&&(C=e.length>0?e.length-1:-1),t.innerHTML=ko(e),vo()}function So(t){const e=String(t||"").trim();E.accountName=e,Mt=e,J=!1,C=-1,U="",l()}function I(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const r=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(r,r)},0)}function kd(){const t=J?ct():[],e=String(E.accountName||"").trim();return`
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
                ${ko(t)}
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
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${_r?"disabled":""}>${_r?"Saving...":"Add Manual Entry"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function wo(){var s,o,c,u,g,S;if(!de)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{de=!1,l()});const t=document.querySelector("#manualTicketAccountSearchInput");if(t){const y=({rerender:b=!1}={})=>{if(J=!0,C=ct().length>0?0:-1,b){l(),I("manualTicketAccountSearchInput");return}nn()};t.addEventListener("focus",()=>{J||y({rerender:!0})}),t.addEventListener("click",()=>{J||y({rerender:!0})}),t.addEventListener("input",b=>{Mt=b.target.value||"",E.accountName="",J=!0,C=ct().length>0?0:-1,nn()}),t.addEventListener("keydown",b=>{if(b.key==="Escape")return;if(!J){(b.key==="ArrowDown"||b.key==="ArrowUp")&&(b.preventDefault(),y({rerender:!0}));return}const q=ct();if(b.key==="ArrowDown"||b.key==="ArrowUp"){if(q.length===0)return;b.preventDefault();const Nt=b.key==="ArrowDown"?1:-1;C=((C<0?0:C)+Nt+q.length)%q.length,nn();return}if(b.key!=="Enter")return;b.preventDefault();const he=q[C>=0?C:0];he!=null&&he.account_name&&So(he.account_name)})}vo(),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",y=>{E.note=y.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(y=>{y.addEventListener("click",()=>{const b=String(y.dataset.manualTicketType||"").trim().toLowerCase();E.ticketType=b==="monthly"?"monthly":"biweekly",l()})}),(c=document.querySelector("[data-manual-ticket-toggle]"))==null||c.addEventListener("click",()=>{E.ticketType=E.ticketType==="monthly"?"biweekly":"monthly",l()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",y=>{const b=String(y.target.value||"").replace(/\D/g,"");y.target.value!==b&&(y.target.value=b),E.goldValue=b});const r=document.querySelector("#manualTicketCountInput");r==null||r.addEventListener("input",y=>{const b=String(y.target.value||"").replace(/\D/g,"");y.target.value!==b&&(y.target.value=b),E.tickets=b});const n=y=>{const b=Number(E.tickets)||0,q=Math.max(0,b+y);E.tickets=String(q),r&&(r.value=E.tickets,r.focus())};(u=document.querySelector("#manualTicketCountUpButton"))==null||u.addEventListener("click",()=>n(1)),(g=document.querySelector("#manualTicketCountDownButton"))==null||g.addEventListener("click",()=>n(-1)),(S=document.querySelector("#saveManualBiweeklyTicketButton"))==null||S.addEventListener("click",()=>vd());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",y=>{y.target===i&&(de=!1,l())})}async function vd(){const t=String(E.accountName||"").trim(),e=String(E.note||"").trim(),r=String(E.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",n=Number(String(E.goldValue||"").trim()||0),i=Number(String(E.tickets||"").trim()||0);if(J){U="Select a matching guild member or Anonymous from the list before saving.",l(),I("manualTicketAccountSearchInput");return}if(!t){U="Select a matching guild member or Anonymous from the list before saving.",l(),I("manualTicketAccountSearchInput");return}if(!Number.isFinite(n)||n<0){U="Gold value must be zero or greater.",l();return}if(!Number.isFinite(i)||i<0){U="Tickets must be zero or greater.",l();return}const s=t.toLowerCase()==="anonymous";if(s&&Math.floor(i)>0){U="Anonymous cannot be awarded tickets. Use 0 tickets and enter a gold value.",l();return}if(Math.floor(n)===0&&Math.floor(i)===0){U=s?"Enter a gold value for Anonymous when tickets are 0.":"Enter gold or tickets. Both cannot be zero.",l();return}_r=!0,U="",l();try{const o=await _("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:r,gold_value:Math.floor(n),tickets:Math.floor(i)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Failed to add manual entry.");de=!1,E={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},Mt="",C=-1,J=!1,await fe({silent:!0}),h("manual-ticket-added",o.message||"Manual entry added.",{ttlMs:m})}catch(o){U=k(o)}finally{_r=!1,l()}}async function Sd(t=""){const e=String(t||"").trim();if(!!e){St=!0,jt=e,Le=[],wr=!0,Ge=!1,Ee="",ut="",l();try{const r=await _("guildsync:request-roster-member-notes",{account_name:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load roster notes.");Le=Array.isArray(r.notes)?r.notes:[]}catch(r){Ee=k(r)}finally{wr=!1,l()}}}function Rn(){St=!1,jt="",Le=[],wr=!1,Ge=!1,Ee="",ut="",l()}function wd(){var r,n;if(!St)return;(r=document.querySelector("#closeRosterNotesButton"))==null||r.addEventListener("click",Rn);const t=document.querySelector("#rosterNotesNewNote");t&&t.addEventListener("input",i=>{ut=i.target.value||""}),(n=document.querySelector("#saveRosterNoteButton"))==null||n.addEventListener("click",()=>_d());const e=document.querySelector(".roster-notes-overlay");e&&e.addEventListener("click",i=>{i.target===e&&Rn()})}async function _d(){const t=String(ut||"").trim();if(!t){Ee="Enter a note before saving.",l();return}Ge=!0,Ee="",l();try{const e=await _("guildsync:add-roster-member-note",{account_name:jt,note:t},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to save roster note.");e.note&&(Le=[...Le,e.note]),ut="";const r=j.find(n=>Q(n.account_name)===Q(jt));r&&(r.note_count=Number(r.note_count||0)+1)}catch(e){Ee=k(e)}finally{Ge=!1,l()}}function _o(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>rr());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{dt=!0,ce="",l()});const r=document.querySelector("#rosterMemberSearch");r&&(r.addEventListener("input",o=>{Sr=o.target.value||"",gn=o.target.selectionStart,yn=o.target.selectionEnd,D=-1,l({restoreRosterSearchFocus:!0})}),r.addEventListener("keydown",Ad)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{sl(o.dataset.rosterSortColumn||"account_name")})});const n=document.querySelector("#rosterRankFilter");n&&n.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(Pe.add(c),D=-1,l())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRosterRankFilter||"";Pe.delete(c),D=-1,l()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(ot.add(c),D=-1,l())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRosterLinkStatusFilter||"";ot.delete(c),D=-1,l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>ao(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))}),document.querySelectorAll("[data-open-roster-notes]").forEach(o=>{o.addEventListener("click",()=>Sd(o.dataset.openRosterNotes||""))}),wd();const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{Sr="",Pe.clear(),ot.clear(),oe="",x="",D=-1,l()}),Ld()}function Ad(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){D=-1;return}t.preventDefault(),t.key==="ArrowDown"?D=D<0?0:Math.min(D+1,e.length-1):t.key==="ArrowUp"&&(D=D<0?e.length-1:Math.max(D-1,0)),e.forEach((n,i)=>{n.classList.toggle("roster-search-active-row",i===D)});const r=e[D];r&&typeof r.scrollIntoView=="function"&&r.scrollIntoView({block:"nearest",inline:"nearest"})}function Ld(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{dt=!1,l()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",r=>{if(Wt=r.target.value||"",K=-1,!Wt.trim()){clearTimeout(rn),ce="",H=[],Te="",_e=[],Ae=!1,l(),I("rosterHistorySearchInput");return}clearTimeout(rn),rn=setTimeout(()=>{Md({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(H.length===0)return;r.preventDefault();const i=r.key==="ArrowDown"?1:-1;K=((K<0?0:K)+i+H.length)%H.length,l(),I("rosterHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=H[K>=0?K:0];n!=null&&n.account_name&&Xi(n.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(r=>{r.addEventListener("click",()=>{Xi(r.dataset.rosterHistoryAccount||"")})})}function Ao(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{ft=!1,l()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",r=>{pe=r.target.value||"",Y=-1,Ie+=1;const n=Ie;if(clearTimeout(Gi),!pe.trim()){le="",W=[],ht="",Ye="",Re=[],$e=!1,l(),I("discordHistorySearchInput");return}Gi=setTimeout(()=>{Ed({auto:!0,keepFocus:!0,generation:n})},Bc)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(W.length===0)return;r.preventDefault();const i=r.key==="ArrowDown"?1:-1;Y=((Y<0?0:Y)+i+W.length)%W.length,l(),I("discordHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=W[Y>=0?Y:0];n!=null&&n.discord_id&&Qi(n.discord_id,vn(n))})),document.querySelectorAll("[data-discord-history-id]").forEach(r=>{r.addEventListener("click",()=>{Qi(r.dataset.discordHistoryId||"",r.dataset.discordHistoryName||"")})})}async function Ed(t={}){const e=Number.isInteger(t.generation)?t.generation:++Ie,r=pe.trim();if(e===Ie){if(!r){le="",W=[],Y=-1,ht="",Ye="",Re=[],$e=!1,l(),t.keepFocus&&I("discordHistorySearchInput");return}$e=!0,le="",W=[],Y=-1,ht="",Ye="",Re=[],l(),t.keepFocus&&I("discordHistorySearchInput");try{const n=await _("guildsync:request-discord-member-history",{query:r},3e4);if(e!==Ie||r!==pe.trim())return;if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search Discord member history.");W=Rd(n.matches),Y=W.length>0?0:-1}catch(n){if(e!==Ie||r!==pe.trim())return;le=k(n)}finally{if(e!==Ie||r!==pe.trim())return;$e=!1,l(),t.keepFocus&&I("discordHistorySearchInput")}}}async function Qi(t,e="",r={}){const n=String(t||"").trim();if(!!n){ht=n,Ye=String(e||n).trim(),pe=Ye,Re=[],$e=!0,le="",l();try{const i=await _("guildsync:request-discord-member-history-events",{discord_id:n},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");Re=$d(i.events)}catch(i){le=k(i)}finally{$e=!1,r.keepLoading||l()}}}function Rd(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function $d(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n,i,s,o,c,u,g,S,y,b;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((n=(r=e.old_value)!=null?r:e.oldValue)!=null?n:"").trim(),new_value:String((s=(i=e.new_value)!=null?i:e.newValue)!=null?s:"").trim(),event_timestamp:(u=(c=(o=e.event_timestamp)!=null?o:e.eventTimestamp)!=null?c:e.timestamp)!=null?u:"",event_datetime:(S=(g=e.event_datetime)!=null?g:e.eventDatetime)!=null?S:"",initiator:String((b=(y=e.initiator)!=null?y:e.initiatorName)!=null?b:"").trim(),source:String(e.source||"").trim()}}):[]}async function Md(t={}){const e=Wt.trim();if(!e){ce="",H=[],K=-1,Te="",_e=[],Ae=!1,l(),t.keepFocus&&I("rosterHistorySearchInput");return}Ae=!0,ce="",H=[],K=-1,Te="",_e=[],l(),t.keepFocus&&I("rosterHistorySearchInput");try{const r=await _("guildsync:request-roster-rank-history",{query:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search roster rank history.");H=Dd(r.matches),K=H.length>0?0:-1}catch(r){ce=k(r)}finally{Ae=!1,l(),t.keepFocus&&I("rosterHistorySearchInput")}}async function Xi(t,e={}){const r=String(t||"").trim();if(!!r){Te=r,Wt=r,_e=[],Ae=!0,ce="",l();try{const n=await _("guildsync:request-roster-stream-history",{account_name:r},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster stream history.");_e=Nd(n.events)}catch(n){ce=k(n)}finally{Ae=!1,e.keepLoading||l()}}}function Dd(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function Nd(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(n=(r=e.timestamp)!=null?r:e.timestampS)!=null?n:"",officer:String(e.officer||"").trim()}}):[]}function Lo(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n,i;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(r=e.joined)!=null?r:"",note_count:Number((i=(n=e.note_count)!=null?n:e.noteCount)!=null?i:0)||0}}).sort((e,r)=>e.account_name.localeCompare(r.account_name)):[]}function Td(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function Fr(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function jn(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function Cd(t={}){j=Lo(t.members),vr=t.last_refresh||new Date().toISOString(),R==="eso-members"&&l(),h("roster-data-updated",`Roster data updated. Loaded ${j.length} member record${j.length===1?"":"s"}.`,{ttlMs:m})}async function rr(t={}){if(!!(d!=null&&d.connected)){Ne=!0,l();try{const e=await _("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");j=Lo(e.members),vr=e.last_refresh||vr,t.silent||h("roster-data-loaded",`Loaded ${j.length} roster member${j.length===1?"":"s"}.`,{ttlMs:m})}catch(e){h("roster-data-error",k(e),{ttlMs:m})}finally{Ne=!1,l()}}}async function Bd(t={}){var e;if(!!A()){if(!(d!=null&&d.connected)){h("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}Ne=!0,l();try{const r=await dc(t);if(!(r!=null&&r.ok)){h("roster-data-pending",(r==null?void 0:r.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:m});return}const n={local_upload_id:Eo(),authenticated_username:X(),authenticated_discord_user_id:((e=p==null?void 0:p.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await $o(n)}catch(i){throw Od(n),i}await rr({silent:!0})}catch(r){h("roster-data-error",k(r),{ttlMs:m})}finally{Ne=!1,l()}}}function Eo(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function zn(){try{const t=window.localStorage.getItem(Ls),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Ro(t){window.localStorage.setItem(Ls,JSON.stringify(Array.isArray(t)?t:[]))}function Od(t){const e=String((t==null?void 0:t.local_upload_id)||Eo()),r=zn().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Ro(r),h("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function Id(t){const e=zn().filter(r=>(r==null?void 0:r.local_upload_id)!==t);Ro(e)}async function qd(){if(Zr||!(d!=null&&d.connected)||!A())return;const t=zn();if(t.length!==0){Zr=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!A())return;await $o(e),Id(e.local_upload_id)}}catch(e){h("roster-data-pending-error",`Pending roster upload retry failed: ${k(e)}`,{ttlMs:m})}finally{Zr=!1}}}async function $o(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await _("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const r=await hc(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return h("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:m}),e}async function xd(t={}){var e,r;if(!!A()){if(!(d!=null&&d.connected)){h("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}try{const n=await cc(t);if(!(n!=null&&n.ok)){h("applications-data-info",(n==null?void 0:n.message)||"No application records were found to process.",{ttlMs:m});return}if((Array.isArray((e=n==null?void 0:n.data)==null?void 0:e.records)?n.data.records:[]).length===0){h("applications-data-info",`No application records were found in ${n.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:m});return}const s={local_upload_id:Mo(),authenticated_username:X(),authenticated_discord_user_id:((r=p==null?void 0:p.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await No(s)}catch(o){throw Fd(s),o}}catch(n){h("applications-data-error",k(n),{ttlMs:m})}}}function Mo(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Kn(){try{const t=window.localStorage.getItem(Es),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Do(t){window.localStorage.setItem(Es,JSON.stringify(Array.isArray(t)?t:[]))}function Fd(t){const e=String((t==null?void 0:t.local_upload_id)||Mo()),r=Kn().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Do(r),h("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function Pd(t){const e=Kn().filter(r=>(r==null?void 0:r.local_upload_id)!==t);Do(e)}async function Gd(){if(en||!(d!=null&&d.connected)||!A())return;const t=Kn();if(t.length!==0){en=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!A())return;await No(e),Pd(e.local_upload_id)}}catch(e){h("applications-data-pending-error",`Pending application upload retry failed: ${k(e)}`,{ttlMs:m})}finally{en=!1}}}async function No(t){var i;if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return h("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:m}),{ok:!0,sent_count:0,skipped_empty:!0};let r=0;for(const s of e){const o=await _("guildsync:eso-guild-application-message",{...t,record:s,recordKey:(s==null?void 0:s.recordKey)||"",message:Ud(s)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Backend rejected the application data payload. Application data was not cleared.");r+=1}const n=await uc(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return h("applications-data-sent",`Sent ${r} application record${r===1?"":"s"} to GuildSync backend.`,{ttlMs:m}),{ok:!0,sent_count:r}}function Ud(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),r=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",n=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",s=String(t.applicationText||"_No application text captured._"),o=Object.entries(t).filter(([c])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(c)).map(([c,u])=>`**${c}:** ${Vd(u)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${r}** ${n} an application from **${i}**.`,"","**Application text:**","```",s.slice(0,1500),"```",o.length>0?"":null,o.length>0?"**Full captured record fields:**":null,...o].filter(c=>c!==null).join(`
`)}function Vd(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function Hd(t={}){await xd(t)}function Wd(){const t=$n(M),e=uu(t,M),r=M!=="other";return`
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
          ${Jd()}
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${a(Yo(Ns))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${Ce||!A()?"disabled":""} ${A()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Ce?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${sn("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${sn("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${sn("other","?","Other","All other deposits")}
        </div>

        ${Yd(M)}

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
              ${t.length>0?t.map(n=>hu(n,r)).join(""):mu(r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${a(Gt(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${M==="monthly"?`<div>Raffle Pot: <strong>${a(Gt(Math.floor(e.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${M==="biweekly"?`<div>Raffle Pot: <strong>${a(Gt(Fo(e.amount)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${M==="biweekly"?`<div>Draws: <strong>${a(String(fu(e.amount)))}</strong></div>`:""}
          ${r?`<div>Total Tickets Awarded: <strong>${a(Vr(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${je?jd($n(Xe)):""}
    </div>
  `}function jd(t){return`
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
              ${t.length>0?t.map(e=>zd(e)).join(""):Kd()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${a(Oo(t))}</textarea>
      </div>
    </div>
  `}function zd(t){return`
    <tr>
      <td>${a(t.displayName||"")}</td>
      <td>${a(String(Xn(t,Xe)))}</td>
      <td>${a(String(Number(t.ticketAmount)||0))}</td>
      <td>${a(t.note||"")}</td>
    </tr>
  `}function Kd(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${a(te(Xe))}.</td>
    </tr>
  `}function Yd(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=Io(t),r=Mr(t),n=r<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${f(te(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${a(te(t))} Raffle Period ${r===0?"(Current)":`(${Math.abs(r)} period${Math.abs(r)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${a(pr(e.salesStart))} through ${a(pr(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${a(pr(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${n?"":"disabled"} aria-label="Next ${f(te(t))} raffle period">\u203A</button>
    </div>
  `}function sn(t,e,r,n){const i=M===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${f(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${a(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${a(r)}</span>
        <span class="bank-section-subtitle">${a(n)}</span>
      </span>
    </button>
  `}function Jd(){if(!A())return"";const t=Pr(),e=nr(),r=To(),n=t>0,i=e>0,s=r>0;if(!n&&!i&&!s)return"";let o="",c="",u=!1;n?(o=`Check Out ${t} Deposit Mail`,c="checkout"):i?(u=!0,rt?o=`Writing ${e} Pending Mail`:F.running?o=`${e} Mail Waiting for ESO Closure`:(Ho("render-pending-mail-button"),o=`${e} Mail Writing to Disk`)):(u=!0,o=`${r} Mail Ready to Send`);const g=n?"Check out new deposit mail. GuildSync will immediately try to write it, or hold it until ESO closes.":i?"Deposit mail is already checked out and will be written automatically after ESO closes.":"Deposit mail has been written to ESO SavedVariables and is ready for ESO to send it and write acknowledgements.",S=hn||rt,y=F.running?"ESO Running":"ESO Not Running",b=F.running?"eso-running":"eso-not-running";return`
    <button id="checkoutDepositMailButton" class="${`bank-export-button deposit-mail-button${u?" deposit-mail-status-only":""}`}" type="button" data-deposit-mail-action="${f(c)}" ${u||S?'aria-disabled="true"':""} title="${f(F.message||g)}" aria-label="${f(`${o}. ${g}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${a(o)}</span>
      <span aria-hidden="true">(</span><span class="deposit-mail-eso-status ${b}" aria-hidden="true">${a(y)}</span><span aria-hidden="true">)</span>
    </button>
  `}function nr(){return ir().reduce((t,e)=>t+Dt(e.records).length,0)}function Qd(){const t=(p==null?void 0:p.user)||{};return new Set([X(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function Xd(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?Qd().has(e):!1}function To(){return A()?G.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),r=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&r==="written_to_eso"&&Xd(t)}).length:0}function Pr(){return G.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),r=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&r==="unsent"}).length}function Zd(t){const e=String(t||"").trim();return G.find(r=>String(r.eventId||"").trim()===e)||null}function Yn(t){const e=String(t||"other").toLowerCase(),r=["biweekly","monthly","other"],n=r.includes(e)?e:"other",i=r.filter(s=>s!==n);return[i[0]||"biweekly",n,i[1]||"other"]}function Jn(t={},e="other"){const r=String(e||"other").toLowerCase(),n=Number(t==null?void 0:t.amount)||0;return r===String((t==null?void 0:t.type)||"").toLowerCase()?Number(t==null?void 0:t.ticketAmount)||0:r==="biweekly"?Math.floor(n/500):r==="monthly"?Math.floor(n/2500):0}function Co(t={},e="other",r=""){const n=String(t.type||"other").toLowerCase(),i=te(n),s=te(e),o=X()||"Unknown user",c=[`Moved from ${i} to ${s} by ${o}.`,`Ref ${t.eventId||""}`],u=String(r||"").trim();return u&&c.push(`Reason: ${u}`),c.join(`
`)}function eu(t){const e=Zd(t);if(!e){h("banking-move-missing","Could not find the selected banking entry.",{ttlMs:m});return}const r=String(e.type||"other").toLowerCase();se=e,N={targetType:r,note:"",tickets:String(Jn(e,r))},ie="",pt=!1,$t=!0,l()}function $r(){$t=!1,pt=!1,ie="",se=null,N={targetType:"other",note:"",tickets:""},l()}function tu(){const t=se||{},e=String(t.type||"other").toLowerCase(),r=te(e),n=Yn(e);let i=String(N.targetType||n[0]||"other").toLowerCase();n.includes(i)||(i=n[0]||"other",N.targetType=i);const s=Co(t,i,N.note);return`
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
                ${n.map(o=>`
                  <button
                    class="banking-move-slider-label ${i===o?"selected":""} ${o===e?"current":""}"
                    type="button"
                    role="radio"
                    aria-checked="${i===o?"true":"false"}"
                    data-banking-move-target="${f(o)}"
                  >
                    <strong>${a(te(o))}</strong>
                    <span>${o===e?"Current / restore original values":`${a(String(Jn(t,o)))} tickets`}</span>
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

          <div class="roster-history-muted banking-move-generated-note">${a(s).replace(/\n/g,"<br>")}</div>

          <div class="manual-ticket-actions banking-move-actions">
            <button id="saveBankingMoveButton" class="refresh-discord-button banking-move-submit-button" type="button" ${pt||i===e?"disabled":""}>${pt?"MOVING...":i===e?"SELECT A SIDE TO MOVE":"MOVE"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function ru(){var r,n,i,s;if(!$t)return;(r=document.querySelector("#closeBankingMoveDialogButton"))==null||r.addEventListener("click",()=>$r());function t(o){const c=String(o||"other").toLowerCase(),u=String((se==null?void 0:se.type)||"other").toLowerCase(),g=Yn(u);N.targetType=g.includes(c)?c:u,N.tickets=String(Jn(se||{},N.targetType)),l()}document.querySelectorAll("[data-banking-move-target]").forEach(o=>{o.addEventListener("click",()=>t(o.dataset.bankingMoveTarget))}),(n=document.querySelector("#bankingMoveTicketsInput"))==null||n.addEventListener("input",o=>{const c=String(o.target.value||"").replace(/\D/g,"");o.target.value!==c&&(o.target.value=c),N.tickets=c}),(i=document.querySelector("#bankingMoveNoteInput"))==null||i.addEventListener("input",o=>{N.note=o.target.value||"";const c=document.querySelector(".banking-move-generated-note");c&&(c.innerText=Co(se||{},N.targetType||"other",N.note))}),(s=document.querySelector("#saveBankingMoveButton"))==null||s.addEventListener("click",()=>nu());const e=document.querySelector(".roster-history-overlay");e&&e.addEventListener("click",o=>{o.target===e&&$r()})}async function nu(){const t=se;if(!(t!=null&&t.eventId)){ie="No banking entry is selected.",l();return}const e=String(t.type||"other").toLowerCase(),r=Yn(e),n=String(N.targetType||r[0]||"other").toLowerCase();if(!r.includes(n)||n===e){ie="Select one of the side destinations before moving this entry.",l();return}const i=n==="other"?0:Math.floor(Number(String(N.tickets||"").trim()||0));if(!Number.isFinite(i)||i<0){ie="Tickets must be zero or greater.",l();return}pt=!0,ie="",l();try{const s=await _("guildsync:move-banking-entry",{event_id:t.eventId,target_type:n,tickets:i,note:N.note||""},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to move banking entry.");$r(),await fe({silent:!0}),h("banking-entry-moved",s.message||"Banking entry moved.",{ttlMs:m})}catch(s){pt=!1,ie=k(s),l()}}function Bo(){if(R!=="more")return;ru(),document.querySelectorAll("[data-bank-entry-move]").forEach(o=>{o.addEventListener("click",()=>eu(o.dataset.bankEntryMove||""))}),document.querySelectorAll("[data-bank-section]").forEach(o=>{o.addEventListener("click",()=>{M=o.dataset.bankSection||"biweekly",l()})}),document.querySelectorAll("[data-bank-export-section]").forEach(o=>{o.addEventListener("click",()=>{Xe=(o.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",je=!0,l()})}),document.querySelectorAll("[data-bank-period-move]").forEach(o=>{o.addEventListener("click",()=>{ou(o.dataset.bankPeriodMove||""),l()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{je=!1,l()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>iu());const r=document.querySelector(".bank-export-overlay");r&&r.addEventListener("click",o=>{o.target===r&&(je=!1,l())});const n=document.querySelector("#openManualBiweeklyTicketButton");n&&n.addEventListener("click",async()=>{if(!A()){h("manual-ticket-login-required","Login required to add manual entries.",{ttlMs:m});return}de=!0,U="",Mt=E.accountName||"",J=!1,C=-1,j.length===0&&(d==null?void 0:d.connected)&&A()&&await rr({silent:!0}),l()});const i=document.querySelector("#checkoutDepositMailButton");i&&i.addEventListener("click",()=>{i.dataset.depositMailAction==="checkout"&&i.getAttribute("aria-disabled")!=="true"&&wu()});const s=document.querySelector("#refreshBankingDataButton");s&&s.addEventListener("click",()=>{if(!A()){h("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:m});return}Go({key:"banking"})})}function Oo(t){const e=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const r of t)e.push([r.displayName||"",String(Xn(r,Xe)),String(Number(r.ticketAmount)||0),r.note||""]);return e.map(r=>r.map(Gr).join("	")).join(`
`)}function Gr(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function Ur(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const r=document.createElement("textarea");r.value=e,r.setAttribute("readonly","readonly"),r.style.position="fixed",r.style.left="0",r.style.top="0",r.style.width="1px",r.style.height="1px",r.style.opacity="0",r.style.pointerEvents="none",r.style.zIndex="-1",document.body.appendChild(r),r.focus(),r.select(),r.setSelectionRange(0,r.value.length);let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r)}return n}async function iu(){const t=$n(Xe),e=Oo(t);if(await Ur(e)){h("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:m});return}const n=document.querySelector("#bankingExportTsv");n&&(n.focus(),n.select()),h("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:m})}function $n(t){return G.filter(e=>e.type===t).filter(e=>su(t,e)).sort((e,r)=>(Number(r.time)||0)-(Number(e.time)||0))}function su(t,e){if(t==="other")return!0;const r=Number(e==null?void 0:e.time)||0;if(r<=0)return!1;const n=Io(t);return r>=n.salesStart&&r<=n.salesEnd}function Mr(t){return Number(bn[t])||0}function ou(t){if(M!=="biweekly"&&M!=="monthly")return;const e=Mr(M);if(t==="previous"){bn[M]=e-1;return}t==="next"&&e<0&&(bn[M]=e+1)}function Io(t){const e=Math.floor(Date.now()/1e3);if(t==="monthly"){const i=au(e,Mr(t));return{salesStart:xo(i)+1,salesEnd:i,raffleTime:i+Ar}}const r=Be;let n=qo(e);return n+=Mr(t)*r,{salesStart:n-r+1,salesEnd:n,raffleTime:n+Ar}}function qo(t){const e=Be;let r=Oc;for(;r-e>t;)r-=e;for(;r<t;)r+=e;return r}function au(t,e=0){let r=cu(t),n=Number(e)||0;for(;n<0;)r=xo(r),n+=1;for(;n>0;)r=lu(r),n-=1;return r}function cu(t){let e=qo(t);for(;!Qn(e);)e+=Be;return e}function xo(t){let e=t-Be;for(;!Qn(e);)e-=Be;return e}function lu(t){let e=t+Be;for(;!Qn(e);)e+=Be;return e}function Qn(t){const e=t+Ar,r=t+Be+Ar;return Zi(e)!==Zi(r)}function Zi(t){var s,o;const e=new Date(Number(t||0)*1e3);if(Number.isNaN(e.getTime()))return"";const r=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit"}).formatToParts(e),n=((s=r.find(c=>c.type==="year"))==null?void 0:s.value)||"",i=((o=r.find(c=>c.type==="month"))==null?void 0:o.value)||"";return`${n}-${i}`}function du(t=M){const e=String(t||"").toLowerCase();return e!=="monthly"&&e!=="biweekly"?0:"auto"}function Xn(t={},e=M){const r=Number(t.amount)||0;if(!du(e))return r;const n=Math.abs(Math.trunc(r))%10,i=n===1||n===3?n:0;return i>0&&r>i?r-i:r}function uu(t,e=M){return t.reduce((r,n)=>(r.amount+=Xn(n,e),r.tickets+=Number(n.ticketAmount)||0,r),{amount:0,tickets:0})}function Fo(t){const e=Math.ceil((Number(t)||0)/2);return e<=0?0:Math.ceil(e/2e5)*2e5}function fu(t){const e=Fo(t);return e>0?e/2e5:0}function hu(t,e=!0){return`
    <tr>
      <td>${a(t.note||t.eventId||"")}</td>
      <td>${a(pr(t.time))}</td>
      <td>${a(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${a(Gt(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td><strong class="bank-ticket-amount">${a(Vr(t.ticketAmount))}</strong></td>`:""}
      <td><button class="bank-entry-move-button" type="button" data-bank-entry-move="${f(t.eventId||"")}">Move</button></td>
    </tr>
  `}function mu(t=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?"6":"5"}">No ${a(te(M))} deposits found for this ${M==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function te(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function pr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Gt(t){return(Number(t)||0).toLocaleString()}function Vr(t){return(Number(t)||0).toLocaleString()}function Dt(t){return Array.isArray(t)?t.map(e=>{var n,i,s,o,c,u,g,S,y,b,q,he,Nt,Ze,ai,ci,li,di,ui,fi,hi,mi,pi,gi,yi,bi,ki,vi,Si,wi,_i,Ai,Li,Ei,Ri,$i,Mi,Di,Ni,Ti,Ci;const r=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:r==="monthly"||r==="biweekly"||r==="other"?r:"other",eventId:String((i=(n=e==null?void 0:e.eventId)!=null?n:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((o=(s=e==null?void 0:e.time)!=null?s:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((u=(c=e==null?void 0:e.displayName)!=null?c:e==null?void 0:e.display_name)!=null?u:"").trim(),amount:Number((g=e==null?void 0:e.amount)!=null?g:0)||0,ticketAmount:Number((y=(S=e==null?void 0:e.ticketAmount)!=null?S:e==null?void 0:e.ticket_amount)!=null?y:0)||0,note:String((b=e==null?void 0:e.note)!=null?b:"").trim(),dataSource:String((he=(q=e==null?void 0:e.dataSource)!=null?q:e==null?void 0:e.data_source)!=null?he:"").trim(),emailRequested:Boolean((Nt=e==null?void 0:e.emailRequested)!=null?Nt:e==null?void 0:e.email_requested),mailStatus:String((ai=(Ze=e==null?void 0:e.mailStatus)!=null?Ze:e==null?void 0:e.mail_status)!=null?ai:"").trim(),mailRequestId:String((li=(ci=e==null?void 0:e.mailRequestId)!=null?ci:e==null?void 0:e.mail_request_id)!=null?li:"").trim(),mailBatchId:String((ui=(di=e==null?void 0:e.mailBatchId)!=null?di:e==null?void 0:e.mail_batch_id)!=null?ui:"").trim(),checkedOutBy:String((hi=(fi=e==null?void 0:e.checkedOutBy)!=null?fi:e==null?void 0:e.checked_out_by)!=null?hi:"").trim(),checkedOutAt:String((pi=(mi=e==null?void 0:e.checkedOutAt)!=null?mi:e==null?void 0:e.checked_out_at)!=null?pi:"").trim(),checkoutExpiresAt:String((yi=(gi=e==null?void 0:e.checkoutExpiresAt)!=null?gi:e==null?void 0:e.checkout_expires_at)!=null?yi:"").trim(),writtenToEsoAt:String((ki=(bi=e==null?void 0:e.writtenToEsoAt)!=null?bi:e==null?void 0:e.written_to_eso_at)!=null?ki:"").trim(),sentAt:String((Si=(vi=e==null?void 0:e.sentAt)!=null?vi:e==null?void 0:e.sent_at)!=null?Si:"").trim(),failedReason:String((_i=(wi=e==null?void 0:e.failedReason)!=null?wi:e==null?void 0:e.failed_reason)!=null?_i:"").trim(),recipient:String((Ri=(Ei=(Li=(Ai=e==null?void 0:e.recipient)!=null?Ai:e==null?void 0:e.account_name)!=null?Li:e==null?void 0:e.displayName)!=null?Ei:e==null?void 0:e.display_name)!=null?Ri:"").trim(),subject:String((Di=(Mi=($i=e==null?void 0:e.subject)!=null?$i:e==null?void 0:e.mailSubject)!=null?Mi:e==null?void 0:e.mail_subject)!=null?Di:"").trim(),body:String((Ci=(Ti=(Ni=e==null?void 0:e.body)!=null?Ni:e==null?void 0:e.mailBody)!=null?Ti:e==null?void 0:e.mail_body)!=null?Ci:"").trim()}}):[]}function pu(t){const e=new Map;for(const r of G)r.eventId&&e.set(r.eventId,r);for(const r of t)!r.eventId||e.set(r.eventId,r);G=Array.from(e.values()).sort((r,n)=>(Number(n.time)||0)-(Number(r.time)||0))}function Po(){Ns=new Date().toISOString()}async function gu(t={}){!(t!=null&&t.ok)||(G=Dt(t.entries),Po(),R==="more"&&l(),h("banking-data-updated",`Banking data updated. Loaded ${G.length} deposit record${G.length===1?"":"s"}.`,{ttlMs:m}))}async function fe(t={}){const e=Boolean(t.silent),r=Boolean(t.background);if(!(d!=null&&d.connected)){e||h("banking-data-error","GuildSync websocket is not connected.",{ttlMs:m});return}r||(Ce=!0,l());try{const n=await _("guildsync:request-banking-data",{},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve banking data.");G=Dt(n.entries),Po(),e||h("banking-data",`Loaded ${G.length} banking deposit record${G.length===1?"":"s"}.`,{ttlMs:m})}catch(n){e||h("banking-data-error",k(n),{ttlMs:m})}finally{r||(Ce=!1),l()}}async function es(){!(d!=null&&d.connected)||!A()||Ce||(await fe({silent:!0,background:!0}),Pr()<=0&&nr()>0&&(F.running?l():Ho("availability-refresh")))}function yu(){tt&&clearInterval(tt),es(),tt=window.setInterval(es,Nc)}function bu(){tt&&(clearInterval(tt),tt=null)}async function ku(t={}){if(!!A()){if(!(d!=null&&d.connected)){h("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:m});return}try{const e=await ac(t);if(!(e!=null&&e.ok))return;const r=Array.isArray(e.ackEntries)?e.ackEntries:[];if(r.length===0)return;const n=await _("guildsync:mark-deposit-mail-sent",{mail_ack:r,mail_request_ids:r.map(o=>(o==null?void 0:o.mail_request_id)||(o==null?void 0:o.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(n.mail_request_ids)?n.mail_request_ids:Array.isArray(n.mailRequestIds)?n.mailRequestIds:[];if(i.length===0){h("deposit-mail-ack-none",n.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:m});return}const s=await sc(i);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");h("deposit-mail-ack-sent",s.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:m}),await fe({silent:!0})}catch(e){h("deposit-mail-ack-error",k(e),{ttlMs:m})}}}async function vu(){if(!tn){tn=!0;try{const t=await mc();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&h("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:m})}catch(t){h("deposit-mail-ack-cleanup-error",k(t),{ttlMs:m})}finally{tn=!1}}}async function Go(t={}){var e,r;if(!!A()){if(!(d!=null&&d.connected)){h("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}Ce=!0,l();try{const n=await lc(t);if(!(n!=null&&n.ok)){h("banking-data-pending",(n==null?void 0:n.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:m});return}const i=Dt((e=n==null?void 0:n.data)==null?void 0:e.entries);pu(i);const s=new Date().toISOString(),o={local_upload_id:Wo(),authenticated_username:X(),authenticated_discord_user_id:((r=p==null?void 0:p.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:s,data:n.data||{}};try{await zo(o)}catch(c){throw Lu(o),c}await fe({silent:!0})}catch(n){h("banking-data-error",k(n),{ttlMs:m})}finally{Ce=!1,l()}}}function Uo(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function ir(){try{const t=window.localStorage.getItem(As),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Vo(t){window.localStorage.setItem(As,JSON.stringify(Array.isArray(t)?t:[]))}function Su(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||Uo()),r=ir().filter(n=>String((n==null?void 0:n.mail_batch_id)||(n==null?void 0:n.mailBatchId)||(n==null?void 0:n.local_batch_id)||"")!==e);r.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),Vo(r)}function ts(t){const e=String(t||"").trim();if(!e)return;const r=ir().filter(n=>String((n==null?void 0:n.mail_batch_id)||(n==null?void 0:n.mailBatchId)||(n==null?void 0:n.local_batch_id)||"")!==e);Vo(r)}async function wu(){if(!A()){h("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:m});return}if(!(d!=null&&d.connected)){h("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:m});return}const t=ir(),e=Pr();if(t.length>0&&e<=0){await bt();return}hn=!0,l();try{const r=await _("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail checkout request.");const n=Dt(r.records);if(n.length===0){h("deposit-mail-none",r.message||"No unsent deposit mail is available.",{ttlMs:m}),await fe({silent:!0});return}const i={mail_batch_id:r.mail_batch_id||r.mailBatchId||Uo(),checked_out_by:r.checked_out_by||r.checkedOutBy||X(),checked_out_at:new Date().toISOString(),records:n};Su(i),await bt()}catch(r){h("deposit-mail-error",k(r),{ttlMs:m})}finally{hn=!1,l()}}function Ho(t=""){nt||rt||!A()||nr()<=0||F.running||(nt=window.setTimeout(()=>{nt=null,bt()},100))}async function bt(){if(nt&&(window.clearTimeout(nt),nt=null),rt||!A())return;const t=ir();if(t.length!==0){if(await Mn({silent:!0}),F.running){h("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:m}),l();return}rt=!0,l();try{for(const e of t){const r=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),n=Dt(e==null?void 0:e.records);if(n.length===0){ts(r);continue}const i=await Ec(n);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(d!=null&&d.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const s=await _("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:r,event_ids:i.eventIds||n.map(o=>o.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend did not confirm deposit mail was marked written_to_eso.");ts(r),h("deposit-mail-written",i.message||`Wrote ${n.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:m})}await fe({silent:!0})}catch(e){h("deposit-mail-write-error",k(e),{ttlMs:m})}finally{rt=!1,l()}}}async function Mn(t={}){try{const e=Boolean(F.running),r=await pc();F={running:Boolean(r==null?void 0:r.running),message:String((r==null?void 0:r.message)||"")},F.running||await vu(),e&&!F.running&&(h("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:m}),await bt()),e!==F.running&&l()}catch(e){t.silent||h("eso-status-error",k(e),{ttlMs:m})}}function _u(){et&&clearInterval(et),Mn({silent:!0}).then(()=>{!F.running&&nr()>0&&bt()}),et=window.setInterval(()=>Mn({silent:!0}),Dc)}function Au(){et&&(clearInterval(et),et=null)}function Wo(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Zn(){try{const t=window.localStorage.getItem(_s),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function jo(t){window.localStorage.setItem(_s,JSON.stringify(Array.isArray(t)?t:[]))}function Lu(t){const e=String((t==null?void 0:t.local_upload_id)||Wo()),r=Zn().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),jo(r),h("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function Eu(t){const e=Zn().filter(r=>(r==null?void 0:r.local_upload_id)!==t);jo(e)}async function Ru(){if(Xr||!(d!=null&&d.connected)||!A())return;const t=Zn();if(t.length!==0){Xr=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!A())return;await zo(e),Eu(e.local_upload_id)}}catch(e){h("banking-data-pending-error",`Pending banking upload retry failed: ${k(e)}`,{ttlMs:m})}finally{Xr=!1}}}async function zo(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await _("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const r=await fc(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return h("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:m}),e}function Ko(){if(R!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>$u());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{ft=!0,le="",l(),I("discordHistorySearchInput")});const r=document.querySelector("#discordMemberSearch");r&&r.addEventListener("input",o=>{kr=o.target.value||"",mn=o.target.selectionStart,pn=o.target.selectionEnd,l({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Bu(o.dataset.discordSortColumn||"username")})});const n=document.querySelector("#discordRoleFilter");n&&n.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(it.add(c),l())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRoleFilter||"";it.delete(c),l()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(st.add(c),l())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeDiscordLinkStatusFilter||"";st.delete(c),l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>ao(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{kr="",it.clear(),st.clear(),l()})}async function $u(){var t,e;if(!(d!=null&&d.connected)){h("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:m});return}br=!0,l(),h("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const r=await _("guildsync:request-discord-data-refresh",{requested_by:((t=p==null?void 0:p.user)==null?void 0:t.display_name)||((e=p==null?void 0:p.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to request Discord data refresh.");h("discord-refresh-requested",r.message||"Discord data refresh completed.",{ttlMs:m}),await ei({silent:!0})}catch(r){h("discord-refresh-error",k(r),{ttlMs:m})}finally{br=!1,l()}}async function Mu(){if(!(d!=null&&d.connected))return;const t=await _("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(Br=t.value||null)}async function Du(t={}){if(!!(t!=null&&t.ok)){P=ti(t.members),t.last_refresh&&(Br=t.last_refresh);try{await Mu()}catch{}R==="discord-members"&&l(),h("discord-data-updated",`Discord data updated. Loaded ${P.length} member record${P.length===1?"":"s"}.`,{ttlMs:m})}}async function ei(t={}){const e=Boolean(t.silent);if(!(d!=null&&d.connected)){h("discord-data-error","GuildSync websocket is not connected.",{ttlMs:m});return}Vt=!0,l();try{const[r,n]=await Promise.all([_("guildsync:request-discord-data-date",{}),_("guildsync:request-discord-member-dataJSON",{})]);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord refresh date.");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord member data.");Br=r.value||null,P=ti(n.members),e||h("discord-data",`Loaded ${P.length} Discord member record${P.length===1?"":"s"}.`,{ttlMs:m})}catch(r){h("discord-data-error",k(r),{ttlMs:m})}finally{Vt=!1,l()}}function _(t,e={},r=3e4){return new Promise((n,i)=>{if(!(d!=null&&d.connected)){i(new Error("GuildSync websocket is not connected."));return}let s=!1;const o=window.setTimeout(()=>{s||(s=!0,i(new Error(`${t} timed out.`)))},r);d.emit(t,e,c=>{s||(s=!0,window.clearTimeout(o),n(c))})})}function ti(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(Nu).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,r)=>Kt(e).localeCompare(Kt(r),void 0,{sensitivity:"base"})):[]}function Nu(t){var i,s;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),r=String(t.role_name||t.name||"Unnamed Role").trim(),n=(s=(i=t.role_color)!=null?i:t.color)!=null?s:null;return{role_id:e,role_name:r||"Unnamed Role",role_color:n}}function Tu(){const t=kr.trim().toLowerCase(),e=Array.from(it),r=P.filter(n=>{if(t&&![n.username,n.global_name,n.server_nickname,n.discord_id,...n.roles.map(s=>s.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(n.roles.map(s=>s.role_name));if(!e.every(s=>i.has(s)))return!1}return!!Ps(st,ll(n))});return Cu(r)}function Cu(t){const e=Fe==="desc"?-1:1;return[...t].sort((r,n)=>{const i=rs(r,Ht),s=rs(n,Ht),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:Kt(r).localeCompare(Kt(n),void 0,{sensitivity:"base",numeric:!0})})}function rs(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(r=>r.role_name||"").filter(Boolean).sort((r,n)=>r.localeCompare(n,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function Bu(t){const r=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";Ht===r?Fe=Fe==="asc"?"desc":"asc":(Ht=r,Fe="asc"),l()}function cr(t,e){const r=Ht===t,n=Fe==="asc"?"ascending":"descending",i=r?Fe==="asc"?"\u25B2":"\u25BC":"\u2195";return`
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
  `}function Ou(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(mn)?mn:t.value.length,r=Number.isInteger(pn)?pn:e;t.setSelectionRange(e,r)}}function Iu(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(gn)?gn:t.value.length,r=Number.isInteger(yn)?yn:e;t.setSelectionRange(e,r)}}function qu(){const t=new Set;for(const e of P)for(const r of e.roles)r.role_name&&t.add(r.role_name);return Array.from(t).sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function xu(t){const e=Uu(t),r=Kt(t),n=t.roles||[];return`
    <tr data-discord-user-id="${f(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${f(e)}" alt="${f(r)}" />`:`<span>${a(ia(r))}</span>`}
          </div>
          <span>${a(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${a(t.global_name||"")}</td>
      <td>${a(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${n.length>0?n.map(i=>Pu(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${so({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function Fu(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${a(Vt?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function Pu(t){const e=Hr(t.role_color),r=ii(e),n=ni(e,r);return`
    <span
      class="discord-role-badge"
      title="${f(t.role_name)}"
      style="${n}"
    >${a(t.role_name)}</span>
  `}function Gu(t){const e=ri(t),r=Hr(e==null?void 0:e.role_color),n=ii(r),i=ni(r,n);return`
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
  `}function ri(t){for(const e of P){const r=e.roles.find(n=>n.role_name===t);if(r)return r}return null}function Hr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function ni(t,e){return[`--role-fill-top: ${ns(t,"#ffffff",.16)}`,`--role-fill-bottom: ${ns(t,"#000000",.1)}`,`--role-fill-glow: ${is(t,.28)}`,`--role-fill-edge: ${is(t,.46)}`,`color: ${e}`].join("; ")}function ns(t,e,r){const n=lr(t)||lr("#64748b"),i=lr(e)||lr("#ffffff"),s=Math.max(0,Math.min(1,Number(r)||0)),o=Math.round(n.red+(i.red-n.red)*s),c=Math.round(n.green+(i.green-n.green)*s),u=Math.round(n.blue+(i.blue-n.blue)*s);return`#${on(o)}${on(c)}${on(u)}`}function lr(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function on(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function is(t,e){const r=String(t||"#64748b").replace("#",""),n=/^[0-9a-f]{6}$/i.test(r)?r:"64748b",i=parseInt(n.slice(0,2),16),s=parseInt(n.slice(2,4),16),o=parseInt(n.slice(4,6),16);return`rgba(${i}, ${s}, ${o}, ${e})`}function ii(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const r=parseInt(e.slice(0,2),16),n=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(r*299+n*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function Uu(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!r)return"";const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function Kt(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function Yo(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function gr(){const t=document.querySelector("#discordArea");if(!!t){if(sr(!1),A()){const e=p.user||{},r=X(),n=af(e),i=ia(r);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${n?`<img src="${f(n)}" alt="${f(r)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${a(i)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const s=document.querySelector("#discordAvatarButton");s.addEventListener("contextmenu",o=>{o.preventDefault(),ss()}),s.addEventListener("click",()=>{ss()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",zu)}}function ss(){if(Qt){sr();return}ju()}function Vu(t=we){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],r=String((t==null?void 0:t.directory)||"").trim(),n=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const s=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),o=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),c=String((i==null?void 0:i.filePath)||(r?`${r}\\${o}`:o)).trim(),u=(i==null?void 0:i.enabled)!==!1,g=n&&u,S=`profileFileWatchToggle-${Wu(s||o)}`;return`
          <label class="profile-filewatch-item ${u?"enabled":"disabled"}" title="${f(c)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${a(o)}</span>
              <span class="profile-filewatch-state">${g?"Watching":u?"On":"Off"}</span>
            </span>
            <input
              id="${f(S)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${f(s)}"
              ${u?"checked":""}
              aria-label="Turn file watch ${u?"off":"on"} for ${f(o)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function si(){var n,i,s;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=X(),r=((n=p.user)==null?void 0:n.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${a(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${a(cf(r))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${a(Cr)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${we!=null&&we.watching?"Active":"Stopped"}</span>
        </div>
        ${Vu()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(i=document.querySelector("#discordLogoutButton"))==null||i.addEventListener("click",Ku),(s=document.querySelector("#associateTicketReportButton"))==null||s.addEventListener("click",()=>{sr(!1),Us()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",Hu)})}async function Jo(){try{we=await gc(),Qt&&si()}catch(t){h("file-watcher-error",k(t),{ttlMs:m})}}async function Hu(t){var n;const e=t.currentTarget,r=String(((n=e==null?void 0:e.dataset)==null?void 0:n.filewatchKey)||"").trim();if(!!r)try{e.disabled=!0,we=await Sc(r,e.checked),await lt({silent:!0}),Qt&&si()}catch(i){h("file-watcher-error",k(i),{ttlMs:m}),await Jo()}}function Wu(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function ju(){const t=document.querySelector("#discordProfileMenu");!t||(si(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),Qt=!0,Jo(),setTimeout(()=>{window.addEventListener("click",Qo),window.addEventListener("keydown",Xo)},0))}function sr(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),Qt=!1,t&&(window.removeEventListener("click",Qo),window.removeEventListener("keydown",Xo))}function Qo(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&sr()}function Xo(t){t.key==="Escape"&&sr()}async function zu(){try{h("auth","Opening Discord login...",{ttlMs:m});const t=await _c();t!=null&&t.status_message&&h("auth",t.status_message,{ttlMs:m}),Me()}catch(t){h("auth-error",k(t),{ttlMs:m}),Me()}}async function Ku(){try{p=await bc(),h("auth",p.status_message||"Logged out.",{ttlMs:m}),Ts(),Ut(),await lt()}catch(t){h("auth-error",k(t),{ttlMs:m}),Me()}}function Ut(){const t=p.socket_url||"https://guildsync.perdues.me";Yu(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};p!=null&&p.token&&(e.auth={token:p.token}),d=hr(t,e),d.on("connect",()=>{Me(),Zo(),R==="discord-members"&&ei({silent:!0}),R==="eso-members"&&rr({silent:!0}),R==="more"&&fe({silent:!0}),Ru(),bt(),_u(),yu(),qd(),Gd(),Ju()}),d.on("connect_error",()=>{Me(),Dr()}),d.on("disconnect",()=>{Me(),Dr(),Au(),bu()}),d.on("guildsync:version-status",r=>{Qu(r)}),d.on("guildsync:discord-member-data-updated",r=>{Du(r)}),d.on("guildsync:banking-data-updated",r=>{gu(r)}),d.on("guildsync:roster-data-updated",r=>{Cd(r)}),d.on("guildsync:member-links-updated",(r={})=>{Array.isArray(r.links)&&(L=r.links,(R==="discord-members"||R==="eso-members"||R==="settings"||Oe)&&l())}),d.on("guildsync:discord-refresh-status",(r={})=>{const n=String(r.message||"").trim();n&&h("discord-refresh-status",n,{ttlMs:m})})}function Yu(t=!0){Dr(),d&&(d.disconnect(),d=null),t&&Me()}function Zo(){!(d!=null&&d.connected)||d.emit("guildsync:client-version",{version:Cr,platform:ea(),client_type:"wails"})}function Ju(){Dr(),mr=window.setInterval(()=>{Zo()},Mc)}function Dr(){mr&&(window.clearInterval(mr),mr=null)}function Qu(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",r=t.download&&typeof t.download=="object"?t.download:{};me={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||r.url||"").trim(),fileName:String(t.download_file_name||r.file_name||"").trim(),platformLabel:String(r.label||t.platform||ea()).trim()},h("version",`GuildSync is out of date. Current version: ${Cr}. Latest version: ${e}.`),Dn();return}me={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},Dn(),oi("version")}}function ea(){const t=String(navigator.userAgent||"").toLowerCase(),r=`${String(navigator.platform||"").toLowerCase()} ${t}`;return r.includes("mac")?"macos":r.includes("linux")?"linux":"windows"}function Dn(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!me.updateRequired||!me.downloadUrl){t.innerHTML="";return}const e=me.platformLabel||"Desktop",r=me.latestVersion||"latest",n=me.fileName||"GuildSync client download";t.innerHTML=`
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
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{Xu()})}function Xu(){const t=String(me.downloadUrl||"").trim();if(!t){h("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:m});return}$c(t)}function h(t,e,r={}){const n=String(t||"").trim(),i=String(e||"").trim();if(!(!n||!i)){if(De.set(n,i),qe.has(n)&&(window.clearTimeout(qe.get(n)),qe.delete(n)),r.ttlMs&&Number(r.ttlMs)>0){const s=window.setTimeout(()=>{oi(n)},Number(r.ttlMs));qe.set(n,s)}kt()}}function oi(t){const e=String(t||"").trim();if(!!e){if(De.delete(e),qe.has(e)&&(window.clearTimeout(qe.get(e)),qe.delete(e)),T===e){zr(()=>{T="",kt()});return}kt()}}function kt(){const t=Wr();if(t.length===0){ze?zr(Yt):Yt();return}!ze&&!Ke&&jr(t[0])}function Wr(){return Array.from(De.keys())}function ta(){const t=Wr();if(t.length===0)return"";if(!T)return t[0];const e=t.indexOf(T);return e<0?t[0]:t[(e+1)%t.length]}function jr(t){const e=document.querySelector("#statusMessageTrack");if(!e||!De.has(t)){Yt();return}Kr();const r=De.get(t);T=t,ze=!0,Ke=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=r,e.style.setProperty("--message-fade-duration",`${$s}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",Ke=!1,Zu()},{once:!0})})}function Zu(){const t=Wr();if(!T||!De.has(T)){kt();return}if(t.length<=1){os(!1);return}os(!0)}function os(t){const e=document.querySelector("#statusMessageViewport"),r=document.querySelector("#statusMessageTrack");if(!e||!r)return;const n=Math.max(0,r.scrollWidth-e.clientWidth);if(n<=0){t&&Jt(()=>{zr(()=>{const i=ta();T="",i?jr(i):Yt()})},Rs);return}Jt(()=>{ra(n,t)},Ms)}function ra(t,e){const r=document.querySelector("#statusMessageTrack");if(!r||!T||!De.has(T))return;const n=Math.max(4,Math.ceil(t/Cc));r.style.setProperty("--long-scroll-distance",`${t}px`),r.style.setProperty("--long-scroll-duration",`${n}s`),r.classList.add("long-scroll"),r.addEventListener("animationend",()=>{if(r.classList.remove("long-scroll"),r.style.transform=`translateX(-${t}px) translateY(-50%)`,e){Jt(()=>{zr(()=>{const i=ta();T="",i?jr(i):Yt()})},Rs);return}Jt(()=>{ef()},Tc)},{once:!0})}function ef(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!T||!De.has(T))return;if(Wr().length!==1){kt();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const n=Math.max(0,e.scrollWidth-t.clientWidth);n<=0||Jt(()=>{ra(n,!1)},Ms)}function zr(t){const e=document.querySelector("#statusMessageTrack");if(Kr(),!e||!ze){typeof t=="function"&&t();return}Ke=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${$s}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",ze=!1,Ke=!1,typeof t=="function"&&t()},{once:!0})}function Yt(){const t=document.querySelector("#statusMessageTrack");Kr(),T="",ze=!1,Ke=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function Jt(t,e){const r=window.setTimeout(()=>{Ft=Ft.filter(n=>n!==r),t()},e);Ft.push(r)}function Kr(){for(const t of Ft)window.clearTimeout(t);Ft=[]}function na(){if(!ze||Ke||!T)return;const t=T;Kr(),jr(t)}function Me(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(d!=null&&d.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!A()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${X()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${X()}`)}}async function lt(t={}){try{if(A()){const e=await Ac();we=e,!t.silent&&(e==null?void 0:e.message)&&h(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:m});return}we=await Lc(),oi("file-watcher")}catch(e){h("file-watcher-error",k(e),{ttlMs:m})}}function qt(t,e=null){const r="[GuildSync File Watcher]";if(e){console.log(`${r} ${t}`,e);return}console.log(`${r} ${t}`)}function tf(t={}){if(!A()){qt("SavedVariables change ignored because the user is not authenticated.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",r=e.toLowerCase(),n=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=String(t.filePath||"").trim(),o=n?`${n} saved variables (${i})`:i;qt(`SavedVariables change detected: ${i}${s?` (${s})`:""}. Key: ${r}.`,t),h(`saved-vars-file-updated-${e}`,`${o} has been updated.`,{ttlMs:m}),r==="banking"&&(qt(`Processing banking SavedVariables update from ${i}.`),rf(t)),r==="roster"&&(qt(`Processing roster SavedVariables update from ${i}.`),nf(t)),r==="applications"&&(qt(`Processing applications SavedVariables update from ${i}.`),Hd(t))}async function rf(t={}){await ku(t),await Go(t)}async function nf(t={}){await Bd(t)}function sf(t){!A()||h("file-watcher-error",k(t),{ttlMs:m})}function of(){Ct("guildsync-savedvars-file-modified",tf),Ct("guildsync-file-watcher-error",sf),Ct("guildsync-login-complete",async t=>{p=t||{logged_in:!1,allowed:!1},gr(),Ut(),await lt(),h("auth",p.status_message||`Logged in and authorized as ${X()}.`,{ttlMs:m})}),Ct("guildsync-login-denied",async t=>{p={logged_in:!1,allowed:!1,status_message:""},gr(),await lt(),h("auth",t||"Access denied.",{ttlMs:m}),Ut()}),Ct("guildsync-login-failed",async t=>{p={logged_in:!1,allowed:!1,status_message:""},gr(),await lt(),h("auth",t||"Login failed.",{ttlMs:m}),Ut()})}function A(){return Boolean((p==null?void 0:p.logged_in)&&(p==null?void 0:p.allowed)&&(p==null?void 0:p.token))}function X(){var t,e;return((t=p.user)==null?void 0:t.display_name)||((e=p.user)==null?void 0:e.username)||"Discord User"}function af(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),r=String(t.discord_user_id||"").trim();if(!e||!r)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=128`}function ia(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function cf(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function lf(){Bt&&(Bt.disconnect(),Bt=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),r=Math.round(t.getBoundingClientRect().height);Bt=new ResizeObserver(n=>{const i=n[0];if(!i)return;const s=Math.round(i.contentRect.width),o=Math.round(i.contentRect.height);s===e&&o===r||(e=s,r=o,sa(),na())}),Bt.observe(t)}function sa(){clearTimeout(xi),xi=setTimeout(async()=>{try{await ws()}catch{}},500)}function k(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function a(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function f(t){return a(t)}of();Ic();
