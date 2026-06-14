(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const di="/assets/splash.ea386b6a.png",ui="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",fi="/assets/GuildSync-Graphic.9169020d.png",U=Object.create(null);U.open="0";U.close="1";U.ping="2";U.pong="3";U.message="4";U.upgrade="5";U.noop="6";const Ze=Object.create(null);Object.keys(U).forEach(t=>{Ze[U[t]]=t});const qt={type:"error",data:"parser error"},Ur=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Vr=typeof ArrayBuffer=="function",Wr=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,er=({type:t,data:e},r,n)=>Ur&&e instanceof Blob?r?n(e):_r(e,n):Vr&&(e instanceof ArrayBuffer||Wr(e))?r?n(e):_r(new Blob([e]),n):n(U[t]+(e||"")),_r=(t,e)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];e("b"+(n||""))},r.readAsDataURL(t)};function Ar(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let Tt;function hi(t,e){if(Ur&&t.data instanceof Blob)return t.data.arrayBuffer().then(Ar).then(e);if(Vr&&(t.data instanceof ArrayBuffer||Wr(t.data)))return e(Ar(t.data));er(t,!1,r=>{Tt||(Tt=new TextEncoder),e(Tt.encode(r))})}const Er="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",De=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<Er.length;t++)De[Er.charCodeAt(t)]=t;const mi=t=>{let e=t.length*.75,r=t.length,n,i=0,s,o,d,u;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const p=new ArrayBuffer(e),k=new Uint8Array(p);for(n=0;n<r;n+=4)s=De[t.charCodeAt(n)],o=De[t.charCodeAt(n+1)],d=De[t.charCodeAt(n+2)],u=De[t.charCodeAt(n+3)],k[i++]=s<<2|o>>4,k[i++]=(o&15)<<4|d>>2,k[i++]=(d&3)<<6|u&63;return p},pi=typeof ArrayBuffer=="function",tr=(t,e)=>{if(typeof t!="string")return{type:"message",data:Hr(t,e)};const r=t.charAt(0);return r==="b"?{type:"message",data:gi(t.substring(1),e)}:Ze[r]?t.length>1?{type:Ze[r],data:t.substring(1)}:{type:Ze[r]}:qt},gi=(t,e)=>{if(pi){const r=mi(t);return Hr(r,e)}else return{base64:!0,data:t}},Hr=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},zr=String.fromCharCode(30),yi=(t,e)=>{const r=t.length,n=new Array(r);let i=0;t.forEach((s,o)=>{er(s,!1,d=>{n[o]=d,++i===r&&e(n.join(zr))})})},bi=(t,e)=>{const r=t.split(zr),n=[];for(let i=0;i<r.length;i++){const s=tr(r[i],e);if(n.push(s),s.type==="error")break}return n};function ki(){return new TransformStream({transform(t,e){hi(t,r=>{const n=r.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,n)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(n))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(r)})}})}let Ct;function Ke(t){return t.reduce((e,r)=>e+r.length,0)}function Je(t,e){if(t[0].length===e)return t.shift();const r=new Uint8Array(e);let n=0;for(let i=0;i<e;i++)r[i]=t[0][n++],n===t[0].length&&(t.shift(),n=0);return t.length&&n<t[0].length&&(t[0]=t[0].slice(n)),r}function vi(t,e){Ct||(Ct=new TextDecoder);const r=[];let n=0,i=-1,s=!1;return new TransformStream({transform(o,d){for(r.push(o);;){if(n===0){if(Ke(r)<1)break;const u=Je(r,1);s=(u[0]&128)===128,i=u[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(Ke(r)<2)break;const u=Je(r,2);i=new DataView(u.buffer,u.byteOffset,u.length).getUint16(0),n=3}else if(n===2){if(Ke(r)<8)break;const u=Je(r,8),p=new DataView(u.buffer,u.byteOffset,u.length),k=p.getUint32(0);if(k>Math.pow(2,53-32)-1){d.enqueue(qt);break}i=k*Math.pow(2,32)+p.getUint32(4),n=3}else{if(Ke(r)<i)break;const u=Je(r,i);d.enqueue(tr(s?u:Ct.decode(u),e)),n=0}if(i===0||i>t){d.enqueue(qt);break}}}})}const jr=4;function A(t){if(t)return wi(t)}function wi(t){for(var e in A.prototype)t[e]=A.prototype[e];return t}A.prototype.on=A.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};A.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this};A.prototype.off=A.prototype.removeListener=A.prototype.removeAllListeners=A.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var n,i=0;i<r.length;i++)if(n=r[i],n===e||n.fn===e){r.splice(i,1);break}return r.length===0&&delete this._callbacks["$"+t],this};A.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),r=this._callbacks["$"+t],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,i=r.length;n<i;++n)r[n].apply(this,e)}return this};A.prototype.emitReserved=A.prototype.emit;A.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};A.prototype.hasListeners=function(t){return!!this.listeners(t).length};const gt=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,r)=>r(e,0))(),T=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),Si="arraybuffer";function Yr(t,...e){return e.reduce((r,n)=>(t.hasOwnProperty(n)&&(r[n]=t[n]),r),{})}const _i=T.setTimeout,Ai=T.clearTimeout;function yt(t,e){e.useNativeTimers?(t.setTimeoutFn=_i.bind(T),t.clearTimeoutFn=Ai.bind(T)):(t.setTimeoutFn=T.setTimeout.bind(T),t.clearTimeoutFn=T.clearTimeout.bind(T))}const Ei=1.33;function Li(t){return typeof t=="string"?Ri(t):Math.ceil((t.byteLength||t.size)*Ei)}function Ri(t){let e=0,r=0;for(let n=0,i=t.length;n<i;n++)e=t.charCodeAt(n),e<128?r+=1:e<2048?r+=2:e<55296||e>=57344?r+=3:(n++,r+=4);return r}function Kr(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Mi(t){let e="";for(let r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e}function Ti(t){let e={},r=t.split("&");for(let n=0,i=r.length;n<i;n++){let s=r[n].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class Ci extends Error{constructor(e,r,n){super(e),this.description=r,this.context=n,this.type="TransportError"}}class rr extends A{constructor(e){super(),this.writable=!1,yt(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,r,n){return super.emitReserved("error",new Ci(e,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const r=tr(e,this.socket.binaryType);this.onPacket(r)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,r={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const r=Mi(e);return r.length?"?"+r:""}}class Ni extends rr{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const r=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};bi(e,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,yi(e,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=Kr()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(e,r)}}let Jr=!1;try{Jr=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Bi=Jr;function $i(){}class Di extends Ni{constructor(e){if(super(e),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,r){const n=this.request({method:"POST",data:e});n.on("success",r),n.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=e}}class F extends A{constructor(e,r,n){super(),this.createRequest=e,yt(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;const r=Yr(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=F.requestsCount++,F.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=$i,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete F.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}F.requestsCount=0;F.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Lr);else if(typeof addEventListener=="function"){const t="onpagehide"in T?"pagehide":"unload";addEventListener(t,Lr,!1)}}function Lr(){for(let t in F.requests)F.requests.hasOwnProperty(t)&&F.requests[t].abort()}const xi=function(){const t=Qr({xdomain:!1});return t&&t.responseType!==null}();class Oi extends Di{constructor(e){super(e);const r=e&&e.forceBase64;this.supportsBinary=xi&&!r}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new F(Qr,this.uri(),e)}}function Qr(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Bi))return new XMLHttpRequest}catch{}if(!e)try{return new T[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Xr=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class qi extends rr{get name(){return"websocket"}doOpen(){const e=this.uri(),r=this.opts.protocols,n=Xr?{}:Yr(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,r,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],i=r===e.length-1;er(n,this.supportsBinary,s=>{try{this.doWrite(n,s)}catch{}i&&gt(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=Kr()),this.supportsBinary||(r.b64=1),this.createUri(e,r)}}const Nt=T.WebSocket||T.MozWebSocket;class Ii extends qi{createSocket(e,r,n){return Xr?new Nt(e,r,n):r?new Nt(e,r):new Nt(e)}doWrite(e,r){this.ws.send(r)}}class Pi extends rr{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const r=vi(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(r).getReader(),i=ki();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const s=()=>{n.read().then(({done:d,value:u})=>{d||(this.onPacket(u),s())}).catch(d=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],i=r===e.length-1;this._writer.write(n).then(()=>{i&&gt(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Fi={websocket:Ii,webtransport:Pi,polling:Oi},Gi=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Ui=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function It(t){if(t.length>8e3)throw"URI too long";const e=t,r=t.indexOf("["),n=t.indexOf("]");r!=-1&&n!=-1&&(t=t.substring(0,r)+t.substring(r,n).replace(/:/g,";")+t.substring(n,t.length));let i=Gi.exec(t||""),s={},o=14;for(;o--;)s[Ui[o]]=i[o]||"";return r!=-1&&n!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=Vi(s,s.path),s.queryKey=Wi(s,s.query),s}function Vi(t,e){const r=/\/{2,9}/g,n=e.replace(r,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Wi(t,e){const r={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,s){i&&(r[i]=s)}),r}const Pt=typeof addEventListener=="function"&&typeof removeEventListener=="function",et=[];Pt&&addEventListener("offline",()=>{et.forEach(t=>t())},!1);class K extends A{constructor(e,r){if(super(),this.binaryType=Si,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(r=e,e=null),e){const n=It(e);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=It(r.host).host);yt(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Ti(this.opts.query)),Pt&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},et.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const r=Object.assign({},this.opts.query);r.EIO=jr,r.transport=e,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&K.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(e);r.open(),this.setTransport(r)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",K.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=e.data,this._onError(r);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(r+=Li(i)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,gt(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,r,n){return this._sendPacket("message",e,r,n),this}send(e,r,n){return this._sendPacket("message",e,r,n),this}_sendPacket(e,r,n,i){if(typeof r=="function"&&(i=r,r=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const s={type:e,data:r,options:n};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),e()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(K.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Pt&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=et.indexOf(this._offlineEventListener);n!==-1&&et.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,r),this.writeBuffer=[],this._prevBufferLen=0}}}K.protocol=jr;class Hi extends K{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let r=this.createTransport(e),n=!1;K.priorWebsocketSuccess=!1;const i=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",E=>{if(!n)if(E.type==="pong"&&E.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;K.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(k(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const I=new Error("probe error");I.transport=r.name,this.emitReserved("upgradeError",I)}}))};function s(){n||(n=!0,k(),r.close(),r=null)}const o=E=>{const I=new Error("probe error: "+E);I.transport=r.name,s(),this.emitReserved("upgradeError",I)};function d(){o("transport closed")}function u(){o("socket closed")}function p(E){r&&E.name!==r.name&&s()}const k=()=>{r.removeListener("open",i),r.removeListener("error",o),r.removeListener("close",d),this.off("close",u),this.off("upgrading",p)};r.once("open",i),r.once("error",o),r.once("close",d),this.once("close",u),this.once("upgrading",p),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const r=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&r.push(e[n]);return r}}class zi extends Hi{constructor(e,r={}){const n=typeof e=="object"?e:r;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(i=>Fi[i]).filter(i=>!!i)),super(e,n)}}function ji(t,e="",r){let n=t;r=r||typeof location<"u"&&location,t==null&&(t=r.protocol+"//"+r.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=r.protocol+t:t=r.host+t),/^(https?|wss?):\/\//.test(t)||(typeof r<"u"?t=r.protocol+"//"+t:t="https://"+t),n=It(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const s=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port+e,n.href=n.protocol+"://"+s+(r&&r.port===n.port?"":":"+n.port),n}const Yi=typeof ArrayBuffer=="function",Ki=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,Zr=Object.prototype.toString,Ji=typeof Blob=="function"||typeof Blob<"u"&&Zr.call(Blob)==="[object BlobConstructor]",Qi=typeof File=="function"||typeof File<"u"&&Zr.call(File)==="[object FileConstructor]";function nr(t){return Yi&&(t instanceof ArrayBuffer||Ki(t))||Ji&&t instanceof Blob||Qi&&t instanceof File}function tt(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let r=0,n=t.length;r<n;r++)if(tt(t[r]))return!0;return!1}if(nr(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return tt(t.toJSON(),!0);for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&tt(t[r]))return!0;return!1}function Xi(t){const e=[],r=t.data,n=t;return n.data=Ft(r,e),n.attachments=e.length,{packet:n,buffers:e}}function Ft(t,e){if(!t)return t;if(nr(t)){const r={_placeholder:!0,num:e.length};return e.push(t),r}else if(Array.isArray(t)){const r=new Array(t.length);for(let n=0;n<t.length;n++)r[n]=Ft(t[n],e);return r}else if(typeof t=="object"&&!(t instanceof Date)){const r={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=Ft(t[n],e));return r}return t}function Zi(t,e){return t.data=Gt(t.data,e),delete t.attachments,t}function Gt(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let r=0;r<t.length;r++)t[r]=Gt(t[r],e);else if(typeof t=="object")for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(t[r]=Gt(t[r],e));return t}const en=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],es=5;var g;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(g||(g={}));class ts{constructor(e){this.replacer=e}encode(e){return(e.type===g.EVENT||e.type===g.ACK)&&tt(e)?this.encodeAsBinary({type:e.type===g.EVENT?g.BINARY_EVENT:g.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let r=""+e.type;return(e.type===g.BINARY_EVENT||e.type===g.BINARY_ACK)&&(r+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(r+=e.nsp+","),e.id!=null&&(r+=e.id),e.data!=null&&(r+=JSON.stringify(e.data,this.replacer)),r}encodeAsBinary(e){const r=Xi(e),n=this.encodeAsString(r.packet),i=r.buffers;return i.unshift(n),i}}class ir extends A{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let r;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(e);const n=r.type===g.BINARY_EVENT;n||r.type===g.BINARY_ACK?(r.type=n?g.EVENT:g.ACK,this.reconstructor=new rs(r),r.attachments===0&&super.emitReserved("decoded",r)):super.emitReserved("decoded",r)}else if(nr(e)||e.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(e),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let r=0;const n={type:Number(e.charAt(0))};if(g[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===g.BINARY_EVENT||n.type===g.BINARY_ACK){const s=r+1;for(;e.charAt(++r)!=="-"&&r!=e.length;);const o=e.substring(s,r);if(o!=Number(o)||e.charAt(r)!=="-")throw new Error("Illegal attachments");const d=Number(o);if(!tn(d)||d<0)throw new Error("Illegal attachments");if(d>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=d}if(e.charAt(r+1)==="/"){const s=r+1;for(;++r&&!(e.charAt(r)===","||r===e.length););n.nsp=e.substring(s,r)}else n.nsp="/";const i=e.charAt(r+1);if(i!==""&&Number(i)==i){const s=r+1;for(;++r;){const o=e.charAt(r);if(o==null||Number(o)!=o){--r;break}if(r===e.length)break}n.id=Number(e.substring(s,r+1))}if(e.charAt(++r)){const s=this.tryParse(e.substr(r));if(ir.isPayloadValid(n.type,s))n.data=s;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,r){switch(e){case g.CONNECT:return ot(r);case g.DISCONNECT:return r===void 0;case g.CONNECT_ERROR:return typeof r=="string"||ot(r);case g.EVENT:case g.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&en.indexOf(r[0])===-1);case g.ACK:case g.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class rs{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const r=Zi(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function ns(t){return typeof t=="string"}const tn=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function is(t){return t===void 0||tn(t)}function ot(t){return Object.prototype.toString.call(t)==="[object Object]"}function ss(t,e){switch(t){case g.CONNECT:return e===void 0||ot(e);case g.DISCONNECT:return e===void 0;case g.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&en.indexOf(e[0])===-1);case g.ACK:return Array.isArray(e);case g.CONNECT_ERROR:return typeof e=="string"||ot(e);default:return!1}}function os(t){return ns(t.nsp)&&is(t.id)&&ss(t.type,t.data)}const as=Object.freeze(Object.defineProperty({__proto__:null,protocol:es,get PacketType(){return g},Encoder:ts,Decoder:ir,isPacketValid:os},Symbol.toStringTag,{value:"Module"}));function D(t,e,r){return t.on(e,r),function(){t.off(e,r)}}const cs=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class rn extends A{constructor(e,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[D(e,"open",this.onopen.bind(this)),D(e,"packet",this.onpacket.bind(this)),D(e,"error",this.onerror.bind(this)),D(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...r){var n,i,s;if(cs.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(r.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const o={type:g.EVENT,data:r};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const k=this.ids++,E=r.pop();this._registerAckCallback(k,E),o.id=k}const d=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,u=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!d||(u?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,r){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[e]=r;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let d=0;d<this.sendBuffer.length;d++)this.sendBuffer[d].id===e&&this.sendBuffer.splice(d,1);r.call(this,new Error("operation has timed out"))},i),o=(...d)=>{this.io.clearTimeoutFn(s),r.apply(this,d)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...r){return new Promise((n,i)=>{const s=(o,d)=>o?i(o):n(d);s.withError=!0,r.push(s),this.emit(e,...r)})}_addToQueue(e){let r;typeof e[e.length-1]=="function"&&(r=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(i)):(this._queue.shift(),r&&r(null,...s)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!e||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:g.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){const n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case g.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case g.EVENT:case g.BINARY_EVENT:this.onevent(e);break;case g.ACK:case g.BINARY_ACK:this.onack(e);break;case g.DISCONNECT:this.ondisconnect();break;case g.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const r=e.data||[];e.id!=null&&r.push(this.ack(e.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const r=this;let n=!1;return function(...i){n||(n=!0,r.packet({type:g.ACK,id:e,data:i}))}}onack(e){const r=this.acks[e.id];typeof r=="function"&&(delete this.acks[e.id],r.withError&&e.data.unshift(null),r.apply(this,e.data))}onconnect(e,r){this.id=e,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:g.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,e.data)}}}function Ae(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}Ae.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-r:t+r}return Math.min(t,this.max)|0};Ae.prototype.reset=function(){this.attempts=0};Ae.prototype.setMin=function(t){this.ms=t};Ae.prototype.setMax=function(t){this.max=t};Ae.prototype.setJitter=function(t){this.jitter=t};class Ut extends A{constructor(e,r){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(r=e,e=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,yt(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Ae({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=e;const i=r.parser||as;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var r;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(r=this.backoff)===null||r===void 0||r.setMin(e),this)}randomizationFactor(e){var r;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(r=this.backoff)===null||r===void 0||r.setJitter(e),this)}reconnectionDelayMax(e){var r;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(r=this.backoff)===null||r===void 0||r.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new zi(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=D(r,"open",function(){n.onopen(),e&&e()}),s=d=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",d),e?e(d):this.maybeReconnectOnOpen()},o=D(r,"error",s);if(this._timeout!==!1){const d=this._timeout,u=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),r.close()},d);this.opts.autoUnref&&u.unref(),this.subs.push(()=>{this.clearTimeoutFn(u)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(D(e,"ping",this.onping.bind(this)),D(e,"data",this.ondata.bind(this)),D(e,"error",this.onerror.bind(this)),D(e,"close",this.onclose.bind(this)),D(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(r){this.onclose("parse error",r)}}ondecoded(e){gt(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,r){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new rn(this,e,r),this.nsps[e]=n),n}_destroy(e){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(e){const r=this.encoder.encode(e);for(let n=0;n<r.length;n++)this.engine.write(r[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Ne={};function rt(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const r=ji(t,e.path||"/socket.io"),n=r.source,i=r.id,s=r.path,o=Ne[i]&&s in Ne[i].nsps,d=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let u;return d?u=new Ut(n,e):(Ne[i]||(Ne[i]=new Ut(n,e)),u=Ne[i]),r.query&&!e.query&&(e.query=r.queryKey),u.socket(r.path,e)}Object.assign(rt,{Manager:Ut,Socket:rn,io:rt,connect:rt});function ls(){return window.go.main.App.CloseWindow()}function ds(t){return window.go.main.App.CollectGuildSyncBankingData(t)}function us(t){return window.go.main.App.CollectGuildSyncRosterData(t)}function fs(t,e){return window.go.main.App.CommitGuildSyncBankingData(t,e)}function hs(t,e){return window.go.main.App.CommitGuildSyncRosterData(t,e)}function ms(){return window.go.main.App.GetGuildSyncFileWatcherStatus()}function ps(){return window.go.main.App.GetGuildSyncSession()}function gs(){return window.go.main.App.LogoutGuildSync()}function ys(){return window.go.main.App.MaximizeWindow()}function bs(){return window.go.main.App.MinimizeWindow()}function nn(){return window.go.main.App.SaveWindowState()}function ks(t,e){return window.go.main.App.SetGuildSyncSavedVarsWatchFileEnabled(t,e)}function vs(){return window.go.main.App.ShowMainWindow()}function ws(){return window.go.main.App.StartDiscordLogin()}function Ss(){return window.go.main.App.StartGuildSyncFileWatcher()}function _s(){return window.go.main.App.StopGuildSyncFileWatcher()}function As(t,e,r){return window.runtime.EventsOnMultiple(t,e,r)}function Be(t,e){return As(t,e,-1)}const bt="1.0.3",Es=30*60*1e3,sn="guildsync-pending-banking-uploads",on="guildsync-pending-roster-uploads",h=60*1e3,an=7e3,cn=1400,ln=2400,Ls=4e3,Rs=38,dn=document.querySelector("#app");let Rr=null,$e=null,Mr=!1,We=!1,nt=null,Bt=!1,$t=!1,J=null,te=new Map,se=new Map,L="",ue=!1,fe=!1,xe=[],y={logged_in:!1,allowed:!1,status_message:""},c=null,O=[],kt=null,Ie=!1,at=!1,ct="",pe=new Set,ge=new Set,Pe="username",oe="asc",Vt=null,Wt=null,q=[],lt=null,re=!1,Tr=!1,dt="",Ht=null,zt=null,ae=new Set,ye=new Set,ve=!1,Fe="",C=[],ne="",Q=[],X=!1,H="",Dt=null,x=-1,Ee=!1,Le=[],Y=!1,ce="",w=[],B=!1,$="",Re=!1,ie=!1,b=null,le=[],we=!1,j="",He="",P=-1,Me=!1,sr=null,Oe=null;const or=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let G=[],N="biweekly",un=null,he=!1,de=!1,ze="biweekly",z=!1,ut=!1,W="",M={accountName:"",note:"",tickets:""},Te="",V=-1,jt={biweekly:0,monthly:0};const Ms=1780786800,Ts=1781996400,Cs=14*24*60*60,Ns=28*24*60*60,Bs=60*60,ft=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let S=ft[0].id;function $s(){dn.innerHTML=`
    <main class="splash-screen">
      <img src="${di}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await vs(),await Ds(),fn(),qe(),await ke()},5e3)}async function Ds(){try{y=await ps()}catch(t){y={logged_in:!1,allowed:!1,status_message:""},f("session-error",v(t),{ttlMs:h})}}function fn(){dn.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${ui}" alt="" class="title-icon" />
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
            <img src="${fi}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${a(bt)}</div>
            </div>
          </div>
          <div id="discordArea" class="discord-area"></div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${hn()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content" aria-live="polite">
          ${mn()}
        </section>

        <footer class="status-bar">
          <div id="statusMessageViewport" class="status-message-viewport" aria-live="polite">
            <div id="statusMessageTrack" class="status-message-track"></div>
          </div>
          <div class="status-spacer"></div>
          <div id="statusDot" class="status-dot" title="Websocket not connected"></div>
        </footer>
      </section>
    </main>
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await bs()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await nn(),await ls()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await ys()}),st(),gn(),Xn(),xn(),Gn(),vn(),Dn(),Nn(),Bn(),An(),Fs(),ee(),_e(),Mr||(window.addEventListener("resize",()=>{li(),ai()}),Ua(),Mr=!0)}function hn(){return ft.map(t=>{const e=t.id===S;return`
        <button
          class="guildsync-tab${e?" active":""}"
          type="button"
          data-tab-id="${m(t.id)}"
          aria-selected="${e?"true":"false"}"
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${xs(t.icon)}</span>
          <span class="guildsync-tab-label">${a(t.label)}</span>
        </button>
      `}).join("")}function xs(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function mn(){const t=ft.find(r=>r.id===S)||ft[0];let e="";return t.id==="discord-members"?e=Gs():t.id==="eso-members"?e=Us():t.id==="more"?e=jo():t.id==="settings"?e=ro():e=`
      <div class="guildsync-tab-panel" data-active-tab="${m(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${a(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${z?xo():""}
    ${ie?Mo():""}
    ${Ee?no():""}
    ${Re?lo():""}
    ${Me?Ps():""}
  `}function Os(){return Me||ve||z||ie||Ee||Re||de}function qs(){return Me?!1:Re?(Kt(),!0):Ee?(Yt(),!0):ie?(Se(),!0):z?(z=!1,l(),!0):ve?(ve=!1,l(),!0):de?(de=!1,l(),!0):!1}function Is(t){t.key==="Escape"&&qs()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",Is,!0),window.guildSyncGlobalModalEscapeAttached=!0);function pn(t={}){return new Promise(e=>{Oe&&Oe(!1),Me=!0,sr={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},Oe=e,l()})}function ht(t=!1){const e=Oe;Oe=null,Me=!1,sr=null,e&&e(t===!0),l()}function Ps(){const t=sr||{};return`
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
          <button id="acceptGuildSyncConfirmButton" class="guildsync-confirm-button guildsync-confirm-accept ${m(t.confirmClass||"danger")}" type="button">${a(t.confirmLabel||"Confirm")}</button>
        </div>
      </div>
    </div>
  `}function Cr(t){var n,i,s,o;const e=(i=(n=t.target).closest)==null?void 0:i.call(n,"#cancelGuildSyncConfirmButton"),r=(o=(s=t.target).closest)==null?void 0:o.call(s,"#acceptGuildSyncConfirmButton");if(!(!e&&!r)){if(t.preventDefault(),t.stopPropagation(),e){ht(!1);return}r&&ht(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",Cr,!0),document.addEventListener("pointerup",Cr,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function Fs(){if(!Me)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=n=>{n.preventDefault(),n.stopPropagation(),ht(!1)}),e&&(e.onclick=n=>{n.preventDefault(),n.stopPropagation(),ht(!0)});const r=document.querySelector(".guildsync-confirm-overlay");r&&(r.onclick=n=>{n.target===r&&(n.preventDefault(),n.stopPropagation())})}function gn(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(Os())return;const e=t.dataset.tabId;!e||e===S||(S=e,l())})})}function l(t={}){const e=document.querySelector(".guildsync-tabs"),r=document.querySelector("#guildSyncTabContent");e&&(e.innerHTML=hn()),r&&(r.innerHTML=mn()),gn(),Xn(),xn(),Gn(),vn(),Dn(),Nn(),Bn(),An(),t.restoreDiscordSearchFocus&&ga(),t.restoreRosterSearchFocus&&ya(),S==="discord-members"&&(c==null?void 0:c.connected)&&O.length===0&&!Ie&&gr({silent:!0}),S==="eso-members"&&(c==null?void 0:c.connected)&&q.length===0&&!re&&!Tr&&(Tr=!0,je({silent:!0})),S==="more"&&(c==null?void 0:c.connected)&&G.length===0&&!he&&St({silent:!0}),(S==="discord-members"||S==="eso-members"||S==="settings")&&(c==null?void 0:c.connected)&&R()&&w.length===0&&!B&&cr({silent:!0})}function Gs(){const t=ha(),e=ba(),r=Array.from(pe),n=Array.from(ge);return`
    <div class="guildsync-tab-panel discord-member-panel" data-active-tab="discord-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Discord Member Data</h2>
          <p class="discord-data-subtitle">Manage and view Discord member information.</p>
        </div>
        <div class="discord-data-actions">
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${a(ei(kt))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${Ie||at?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${at?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${m(ct)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!pe.has(i)).map(i=>`<option value="${m(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All roles</span>':r.map(i=>Sa(i)).join("")}
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
              ${or.filter(i=>!ge.has(i.id)).map(i=>`<option value="${m(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(i=>yn("discord",i)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${Qe("username","Username")}
                ${Qe("global_name","Global Name")}
                ${Qe("server_nickname","Server Nickname")}
                ${Qe("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>ka(i)).join(""):va()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `}function Us(){const t=js(),e=Ys(),r=Array.from(ae),n=Array.from(ye);return`
    <div class="guildsync-tab-panel eso-roster-panel" data-active-tab="eso-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Guild Roster</h2>
          <p class="discord-data-subtitle">Current ESO roster imported from GuildSyncRoster.</p>
        </div>
        <div class="discord-data-actions">
          <span class="discord-last-refresh">Last Refresh: ${a(Go(lt))}</span>
          <button id="openRosterHistoryButton" class="clear-discord-filters-button" type="button">Lookup Rank Historical Data</button>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${re?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${re?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${m(dt)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!ae.has(i)).map(i=>`<option value="${m(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All ranks</span>':r.map(i=>Ks(i)).join("")}
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
              ${or.filter(i=>!ye.has(i.id)).map(i=>`<option value="${m(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(i=>yn("roster",i)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                <th>Account Name</th>
                <th>Rank</th>
                <th>Joined</th>
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(Vs).join(""):Ws()}
            </tbody>
          </table>
        </div>
      </div>
      ${ve?Zs():""}
    </div>
  `}function Vs(t){const e=Hs(t.rank||"");return`
    <tr class="eso-roster-row"${e?` style="color: ${e};"`:""} data-eso-account-name="${m(t.account_name||"")}">
      <td>${a(t.account_name||"")}</td>
      <td>${ar(t.rank||"")}</td>
      <td>${a(vt(t.joined))}</td>
      <td class="member-link-action-cell">${Ln({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function Ws(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">${a(re?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function Hs(t){const e=String(t||"").trim(),r=yr(e);return _t(r==null?void 0:r.role_color)}function ar(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${a(e)}</span>`}function zs(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":ar(e)}function js(){const t=dt.trim().toLowerCase();return q.filter(e=>{const r=String(e.rank||"").trim();if(ae.size>0&&!ae.has(r)||!kn(ye,Xs(e)))return!1;if(!t)return!0;const n=vt(e.joined),i=qn(e.joined);return[e.account_name,r,n,i,e.joined].map(o=>String(o||"").toLowerCase()).join(" ").includes(t)})}function Ys(){return Array.from(new Set(q.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function Ks(t){const e=yr(t),r=_t(e==null?void 0:e.role_color),n=kr(r),i=br(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-roster-rank-filter="${m(t)}"
      style="${i}"
      title="Remove ${m(t)} filter"
    >
      <span>${a(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Js(t){const e=or.find(r=>r.id===t);return e?e.label:t}function yn(t,e){const r=t==="roster"?"roster":"discord",n=Js(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${r}-link-status-filter="${m(e)}"
      title="Remove ${m(n)} link filter"
    >
      <span>${a(n)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function bn(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked"&&String(r.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function Qs(t){return bn(dr(t==null?void 0:t.discord_id))}function Xs(t){return bn(lr(t==null?void 0:t.account_name))}function kn(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function Zs(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${m(Fe)}" />
        </div>

        ${H?`<div class="discord-data-error">${a(H)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${eo()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${ne?`: ${a(ne)}`:""}</div>
            ${to()}
          </div>
        </div>
      </div>
    </div>
  `}function eo(){return X&&C.length===0?'<div class="roster-history-muted">Searching...</div>':C.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${C.map((t,e)=>`
        <button class="roster-history-match${e===x||t.account_name===ne?" is-selected":""}" type="button" data-roster-history-account="${m(t.account_name)}">
          <span>${a(t.account_name)}</span>
          <strong>${a(t.rank||"")}</strong>
          ${e===x?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function to(){return ne?X&&Q.length===0?'<div class="roster-history-muted">Loading history...</div>':Q.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${Q.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${a(qn(t.timestamp))}</td>
              <td>${a(t.event_type||"")}</td>
              <td>${zs(t.rank)}</td>
              <td>${a(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function ro(){return`
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
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${Y?"disabled":""}>
              ${Y?"Running...":"Run"}
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
  `}function vn(){var t,e;S==="settings"&&((t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>wn()),(e=document.querySelector("#runMemberLinksReportButton"))==null||e.addEventListener("click",()=>co()))}function wn(){Ee=!0,ce="",l(),$n()}function Yt(){Ee=!1,ce="",l()}function no(){const t=io(),e=so(),r=Le.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${Y?"disabled":""}>${Y?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(r))} total row${r===1?"":"s"}</span>
        </div>

        ${ce?`<div class="discord-data-error">${a(ce)}</div>`:""}

        <div class="report-results-content">
          ${Y&&r===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!Y&&r===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${r>0?Nr("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${r>0?Nr("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${a(_n())}</textarea>
      </div>
    </div>
  `}function io(){return Le.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function so(){return Le.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function Nr(t,e,r,n){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${a(t)}</h4>
          <p>${a(e)}</p>
        </div>
        <span>${a(String(r.length))} row${r.length===1?"":"s"}</span>
      </div>
      ${r.length>0?oo(r):`<div class="roster-history-muted report-section-empty">${a(n)}</div>`}
    </section>
  `}function oo(t=Le){return`
    <div class="roster-history-event-table-shell report-result-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table">
        <thead>
          <tr>
            <th>Account Name</th>
            <th>Rank</th>
            <th>Joined</th>
            <th>Purchased Tickets</th>
            <th>Discord Link</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr>
              <td>${a(e.account_name||"")}</td>
              <td>${ar(e.rank||"")}</td>
              <td>${a(vt(e.joined))}</td>
              <td>${a(wt(e.purchased_tickets||0))}</td>
              <td>${a(Sn(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Sn(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function _n(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Discord Link"]];for(const e of Le){const r=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([r,e.account_name||"",e.rank||"",vt(e.joined),wt(e.purchased_tickets||0),Sn(e)])}return t.map(e=>e.map(Vn).join("	")).join(`
`)}async function ao(){const t=_n();if(await Wn(t)){f("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:h});return}const r=document.querySelector("#associateTicketReportTsv");r&&(r.focus(),r.select()),f("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:h})}function co(){Re=!0,$="",l(),w.length===0&&!B&&cr({silent:!0})}function Kt(){Re=!1,l()}function lo(){return`
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
          <span class="roster-history-muted">${a(String(w.length))} link/candidate row${w.length===1?"":"s"}</span>
        </div>

        ${$?`<div class="discord-data-error member-links-report-error">${a($)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${ho()}
        </div>
      </div>
    </div>
  `}function An(){var e,r,n;if(!Re)return;(e=document.querySelector("#closeMemberLinksReportButton"))==null||e.addEventListener("click",Kt),(r=document.querySelector("#refreshMemberLinksButton"))==null||r.addEventListener("click",()=>cr()),(n=document.querySelector("#runMemberAutoLinkButton"))==null||n.addEventListener("click",()=>mo()),document.querySelectorAll("[data-accept-member-candidate]").forEach(i=>{i.addEventListener("click",()=>En(i.dataset.acceptMemberCandidate||"",i.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(i=>{i.addEventListener("click",()=>po(i.dataset.unlinkMemberLink||"",i.dataset.unlinkMemberLinkDiscordId||""))});const t=document.querySelector(".member-links-report-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Kt()})}function Br(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),r=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();return e==="candidate"||r==="fuzzy"?0:e==="linked"?2:1}function uo(t){return[...Array.isArray(t)?t:[]].sort((e,r)=>{const n=Br(e)-Br(r);if(n!==0)return n;const i=Number((r==null?void 0:r.match_confidence)||0)-Number((e==null?void 0:e.match_confidence)||0);return i!==0?i:String((e==null?void 0:e.eso_account_name)||"").localeCompare(String((r==null?void 0:r.eso_account_name)||""),void 0,{sensitivity:"base"})})}function fo(t){const e=Jt(t);let r="";e==="Username"?r=(t==null?void 0:t.discord_username)||"":e==="Global Name"?r=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(r=(t==null?void 0:t.discord_server_nickname)||""),r||(r=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const n=e?` <span class="member-link-report-match-field">(${a(e)})</span>`:"";return`<span class="member-link-report-discord-name">${a(r)}</span>${n}`}function ho(){return B&&w.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(w)||w.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${uo(w).map(e=>{var s;const r=String(e.link_status||"").trim().toLowerCase(),n=String(e.link_method||"").trim().toLowerCase(),i=fo(e);return`
              <tr>
                <td>${a(e.eso_account_name||"")}</td>
                <td>${i}</td>
                <td class="member-links-status-col">${a(r||"")}</td>
                <td class="member-links-method-col">${a(n||"")}${Number(e.locked||0)===1?" \u{1F512}":""}</td>
                <td class="member-links-action-col">
                  <div class="member-link-actions">
                    ${r==="candidate"?`<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${m(e.eso_account_name||"")}" data-accept-member-candidate-discord-id="${m(e.discord_user_id||"")}" aria-label="Accept candidate link" title="Accept candidate link">\u2713</button>`:""}
                    ${r==="linked"?`<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${m(e.eso_account_name||"")}" data-unlink-member-link-discord-id="${m(e.discord_user_id||"")}" aria-label="Unlink this ESO/Discord pair" title="Unlink this ESO/Discord pair">\u{1F5D1}</button>`:""}
                  </div>
                </td>
                <td class="member-links-confidence-col">${a(String((s=e.match_confidence)!=null?s:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
    </div>
  `}async function cr(t={}){if(!(c!=null&&c.connected)||!y.logged_in){$="You must be logged in and connected to load member links.",l();return}B=!0,$="",t.silent||l();try{const e=await _("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");w=Array.isArray(e.links)?e.links:[]}catch(e){$=v(e)}finally{B=!1,l()}}async function mo(){if(!(c!=null&&c.connected)||!y.logged_in){$="You must be logged in and connected to run auto-linking.",l();return}B=!0,$="",l();try{const t=await _("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");w=Array.isArray(t.links)?t.links:[],f("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:h})}catch(t){$=v(t)}finally{B=!1,l()}}async function En(t,e=""){try{const r=await _("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to accept candidate.");w=Array.isArray(r.links)?r.links:w,f("member-link-accepted",r.message||"Candidate accepted as a link.",{ttlMs:h})}catch(r){$=v(r),f("member-link-accept-error",$,{ttlMs:h})}}async function po(t,e=""){if(!!await pn({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const n=await _("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to unlink member.");w=Array.isArray(n.links)?n.links:w,f("member-link-unlinked",n.message||"Member link removed.",{ttlMs:h})}catch(n){$=v(n)}l()}}function me(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function lr(t){const e=me(t);return e?w.filter(r=>me(r.eso_account_name)===e):[]}function dr(t){const e=String(t||"").trim();return e?w.filter(r=>String(r.discord_user_id||"").trim()===e):[]}function go(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const r=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(r.length>0){const i=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const s=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return s||r[0]}const n=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return n||e[0]}function yo(t){return`${me(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function ur(){return b?b.mode==="discord-to-eso"?dr(b.discordUserId):lr(b.esoAccountName):[]}function bo(t){const e=String(t||"").trim(),r=O.find(n=>String(n.discord_id||"").trim()===e);return r&&(r.server_nickname||r.global_name||r.username||r.discord_id)||e}function ko(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?dr(t.discordUserId):lr(t.esoAccountName),n=go(r),i=String((n==null?void 0:n.link_status)||"").trim().toLowerCase(),s=r.filter(d=>String(d.link_status||"").trim().toLowerCase()==="linked").length,o=r.filter(d=>String(d.link_status||"").trim().toLowerCase()==="candidate").length;return s>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?s===1?n.eso_account_name:`${s} ESO accounts`:s===1?n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member":`${s} Discord accounts`}`}:i==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?n.eso_account_name:n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member"}`}:i==="blocked"||Number((n==null?void 0:n.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function Ln(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,n=ko(t);return`
    <button
      class="member-link-status-dot member-link-status-${m(n.className)}"
      type="button"
      title="${m(n.title)}"
      aria-label="${m(n.label)}"
      data-open-member-link-dialog="${m(e)}"
      data-member-link-value="${m(r||"")}"
    ></button>
  `}function vo(){return b?b.mode==="discord-to-eso"?bo(b.discordUserId):b.esoAccountName||"":""}function Rn(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function Jt(t){const e=Rn((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const r=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(r.includes("discord_username")||r.includes("username"))return"Username";if(r.includes("discord_display_name")||r.includes("global")||r.includes("display"))return"Global Name";if(r.includes("discord_server_nickname")||r.includes("server")||r.includes("nickname"))return"Server Nickname";const n=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(n==="exact"||n==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",s=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const d of s){const u=wo(i,d.value);(!o||u>o.score)&&(o={...d,score:u})}if(o&&o.score>0)return o.field}return""}function mt(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function wo(t,e){const r=mt(t),n=mt(e);if(!r||!n)return 0;if(r===n)return 100;if((r.includes(n)||n.includes(r))&&Math.min(r.length,n.length)>=4)return 88;const i=Math.abs(r.length-n.length),s=[...r].findIndex((d,u)=>d!==n[u]),o=s===-1?Math.min(r.length,n.length):s;return Math.max(0,Math.min(75,Math.round(o*10-i*3)))}function So(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function _o(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function Ao(t){var u;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",r=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",n=String(t.link_status||"").trim().toLowerCase(),i=n==="linked",s=n==="candidate",o=i?"Current Link":s?"Suggested Link":"Blocked Link",d=i?`<button
        class="member-link-trash-button"
        type="button"
        aria-label="Unlink this ESO/Discord pair"
        title="Unlink this ESO/Discord pair"
        data-unlink-dialog-member-link
        data-unlink-eso-account="${m(t.eso_account_name||"")}"
        data-unlink-discord-user-id="${m(t.discord_user_id||"")}"
      >\u{1F5D1}</button>`:s?`<button
          class="member-link-approve-button"
          type="button"
          aria-label="Approve suggested link"
          title="Approve suggested link"
          data-accept-dialog-member-candidate="${m(t.eso_account_name||"")}"
          data-accept-dialog-discord-user-id="${m(t.discord_user_id||"")}"
        >\u2713</button>`:"";return`
    <div class="member-link-current-card">
      <div class="member-link-current-details">
        <div class="member-link-current-kind">${a(o)}</div>
        <div><span>ESO:</span> ${a(t.eso_account_name||"")}</div>
        <div><span>Discord:</span> ${a(e)}</div>
        <div><span>Status:</span> ${a(So(t.link_status))} \xB7 ${a(_o(t.link_method))} \xB7 ${a(String((u=t.match_confidence)!=null?u:""))}% \xB7 ${a(r)}</div>
        ${Jt(t)?`<div><span>Matched:</span> Matched on ${a(Jt(t))}</div>`:""}
      </div>
      ${d}
    </div>
  `}function Eo(){const t=ur();return t.length?[...t].sort((r,n)=>{var u,p;const i=String(r.link_status||"").trim().toLowerCase(),s=String(n.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},d=((u=o[i])!=null?u:9)-((p=o[s])!=null?p:9);return d!==0?d:Number(n.match_confidence||0)-Number(r.match_confidence||0)}).map(r=>Ao(r)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function Lo(){if(we)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(j)return`<div class="discord-data-error">${a(j)}</div>`;if(!Array.isArray(le)||le.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(ur().map(r=>yo(r))),e=[...le].filter(r=>{const n=(b==null?void 0:b.mode)==="discord-to-eso"?`${me(r.account_name)}::${String(b.discordUserId||"").trim()}`:`${me(b==null?void 0:b.esoAccountName)}::${String(r.discord_id||"").trim()}`;return!t.has(n)}).sort((r,n)=>{const i=Number(n.confidence||0)-Number(r.confidence||0);return i!==0?i:$r(r).localeCompare($r(n),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(r=>Ro(r)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function $r(t){return((b==null?void 0:b.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function Ro(t,e={}){var k;const r=(b==null?void 0:b.mode)||"",n=r==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=Rn(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),s=r==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[s,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),d=r==="discord-to-eso"?t.account_name:t.discord_id,u=e.disabled===!0,p=[n,s,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${m(d||"")}" data-member-link-option-search="${m(p)}" ${u?"disabled":""}>
      <span class="member-link-option-name">${a(n||"")}</span>
      <span class="member-link-option-subtitle">${a(o||"")}</span>
      <span class="member-link-option-confidence">${a(String((k=t.confidence)!=null?k:0))}%</span>
    </button>
  `}function Mo(){const t=(b==null?void 0:b.mode)||"",e=vo(),r=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
          <section class="member-link-dialog-section">
            <h4>Current Link</h4>
            ${Eo()}
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
              value="${m(He)}"
            />
            ${Lo()}
          </section>
        </div>

      </div>
    </div>
  `}async function Mn(t,e){if(!(c!=null&&c.connected)||!R()){f("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:h});return}ie=!0,b=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},le=[],we=!0,j="",He="",P=-1,l();try{if(!Array.isArray(w)||w.length===0){const i=await _("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(w=Array.isArray(i.links)?i.links:[])}const n=await _("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load link suggestions.");le=Array.isArray(n.options)?n.options:[]}catch(r){j=v(r)}finally{we=!1,l()}}function Se(){document.removeEventListener("keydown",Qt),ie=!1,b=null,le=[],we=!1,j="",He="",P=-1,l()}function Tn(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function Dr(t){const e=Tn();if(e.forEach(n=>n.classList.remove("member-link-option-row-active")),e.length===0){P=-1;return}P=Math.max(0,Math.min(t,e.length-1));const r=e[P];r.classList.add("member-link-option-row-active"),r.scrollIntoView({block:"nearest"})}function Cn(){const t=mt(He),e=[...document.querySelectorAll(".member-link-option-row")];let r=0;e.forEach(i=>{const s=mt(i.dataset.memberLinkOptionSearch||i.textContent||""),o=!t||s.includes(t);i.hidden=!o,i.classList.remove("member-link-option-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinkSuggestionSearchEmpty");n&&(n.hidden=r!==0),P=-1}function To(t){He=t.target.value||"",Cn()}function Co(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Tn();if(e.length===0)return;if(t.key==="ArrowDown"){const n=P<0?0:P+1;Dr(n>=e.length?e.length-1:n);return}const r=P<0?e.length-1:P-1;Dr(r<0?0:r)}function Qt(t){!ie||t.key==="Escape"&&(t.preventDefault(),Se())}async function No(t){if(!(!b||!t))try{const e=b.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:b.discordUserId}:{esoAccountName:b.esoAccountName,discordUserId:t},r=await _("guildsync:manual-link-member",e,3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to link members.");w=Array.isArray(r.links)?r.links:w,f("member-link-saved",r.message||"Member link saved.",{ttlMs:h}),Se()}catch(e){j=v(e),l()}}async function Bo(t,e=""){await En(t,e),Se()}async function $o(){if(!!b){we=!0,j="",l();try{const t=b.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:b.discordUserId}:{mode:"eso-to-discord",accountName:b.esoAccountName},e=await _("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");le=Array.isArray(e.options)?e.options:[]}catch(t){j=v(t)}finally{we=!1,l()}}}async function Do(t="",e=""){const r=ur().find(i=>me(i.eso_account_name)===me(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!r||!await pn({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await _("guildsync:manual-unlink-member",{esoAccountName:r.eso_account_name,discordUserId:r.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");w=Array.isArray(i.links)?i.links:w,f("member-link-unlinked",i.message||"Member link removed.",{ttlMs:h}),await $o()}catch(i){j=v(i),l()}}function Nn(){var r;if(!ie)return;document.removeEventListener("keydown",Qt),document.addEventListener("keydown",Qt),(r=document.querySelector("#closeMemberLinkDialogButton"))==null||r.addEventListener("click",Se);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",To),t.addEventListener("keydown",Co),Cn()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(n=>{n.addEventListener("click",()=>Do(n.dataset.unlinkEsoAccount||"",n.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(n=>{n.addEventListener("click",()=>No(n.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(n=>{n.addEventListener("click",()=>Bo(n.dataset.acceptDialogMemberCandidate||"",n.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",n=>{n.target===e&&Se()})}function Bn(){var e,r,n;if(!Ee)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",Yt),(r=document.querySelector("#rerunAssociateTicketReportButton"))==null||r.addEventListener("click",()=>$n()),(n=document.querySelector("#copyAssociateTicketReportGridButton"))==null||n.addEventListener("click",()=>ao());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Yt()})}async function $n(){if(!(c!=null&&c.connected)||!R()){ce="You must be logged in and connected to run this report.",l();return}Y=!0,ce="",l();try{const t=await _("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Le=Array.isArray(t.rows)?t.rows:[]}catch(t){ce=v(t)}finally{Y=!1,l()}}function Xt(){const t=String(Te||"").trim().toLowerCase();return t?q.filter(e=>String(e.account_name||"").trim()).filter(e=>String(e.account_name||"").toLowerCase().includes(t)).slice().sort((e,r)=>{const n=String(e.account_name||"").toLowerCase(),i=String(r.account_name||"").toLowerCase(),s=n.startsWith(t)?0:1,o=i.startsWith(t)?0:1;return s!==o?s-o:n.localeCompare(i)}).slice(0,20):[]}function xr(t){const e=String(t||"").trim();M.accountName=e,Te=e,W="",l(),Z("manualTicketAccountSearchInput")}function Z(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const r=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(r,r)},0)}function xo(){const t=Xt(),e=String(M.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Bi-Weekly Tickets</h3>
            <p>Add free/manual raffle tickets such as FFTG. These do not count as purchased tickets.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${W?`<div class="discord-data-error">${a(W)}</div>`:""}

        <div class="manual-ticket-form">
          <label class="manual-ticket-member-field">
            <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${m(Te)}" autocomplete="off" />
          </label>

          ${e?`<div class="roster-history-muted">Selected: ${a(e)}</div>`:""}

          <div class="roster-history-match-list manual-ticket-match-list">
            ${t.length===0?'<div class="roster-history-muted">No matching names</div>':t.map((r,n)=>`
                <button class="roster-history-match${n===V||r.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${m(r.account_name)}">
                  <span>${a(r.account_name)}</span>
                  <strong>${a(r.rank||"")}</strong>
                  ${n===V?"<small>Enter</small>":""}
                </button>
              `).join("")}
          </div>

          <div class="manual-ticket-entry-row">
            <label class="manual-ticket-note-field">
              <textarea id="manualTicketNoteInput" class="discord-search-input manual-ticket-note-input" rows="4" placeholder="Enter a reason such as FFTG">${a(M.note)}</textarea>
            </label>
            <label class="manual-ticket-count-field">
              <div class="manual-ticket-number-wrap">
                <input id="manualTicketCountInput" class="discord-search-input manual-ticket-count-input" type="number" min="1" step="1" inputmode="numeric" placeholder="# Tickets" value="${m(M.tickets)}" />
                <div class="manual-ticket-number-buttons" aria-hidden="true">
                  <button id="manualTicketCountUpButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2303</button>
                  <button id="manualTicketCountDownButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2304</button>
                </div>
              </div>
            </label>
          </div>
          <div class="manual-ticket-actions">
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${ut?"disabled":""}>${ut?"Saving...":"Add Manual Tickets"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Dn(){var i,s,o,d,u;if(!z)return;(i=document.querySelector("#closeManualBiweeklyTicketButton"))==null||i.addEventListener("click",()=>{z=!1,l()});const t=document.querySelector("#manualTicketAccountSearchInput");t&&(t.addEventListener("input",p=>{Te=p.target.value||"",M.accountName="",V=Xt().length>0?0:-1,l(),Z("manualTicketAccountSearchInput")}),t.addEventListener("keydown",p=>{const k=Xt();if(p.key==="ArrowDown"||p.key==="ArrowUp"){if(k.length===0)return;p.preventDefault();const I=p.key==="ArrowDown"?1:-1;V=((V<0?0:V)+I+k.length)%k.length,l(),Z("manualTicketAccountSearchInput");return}if(p.key!=="Enter")return;p.preventDefault();const E=k[V>=0?V:0];E!=null&&E.account_name&&xr(E.account_name)})),document.querySelectorAll("[data-manual-ticket-account]").forEach(p=>{p.addEventListener("click",()=>{xr(p.dataset.manualTicketAccount||"")})}),(s=document.querySelector("#manualTicketNoteInput"))==null||s.addEventListener("input",p=>{M.note=p.target.value||""});const e=document.querySelector("#manualTicketCountInput");e==null||e.addEventListener("input",p=>{const k=String(p.target.value||"").replace(/\D/g,"");p.target.value!==k&&(p.target.value=k),M.tickets=k});const r=p=>{const k=Number(M.tickets)||0,E=Math.max(1,k+p);M.tickets=String(E),e&&(e.value=M.tickets,e.focus())};(o=document.querySelector("#manualTicketCountUpButton"))==null||o.addEventListener("click",()=>r(1)),(d=document.querySelector("#manualTicketCountDownButton"))==null||d.addEventListener("click",()=>r(-1)),(u=document.querySelector("#saveManualBiweeklyTicketButton"))==null||u.addEventListener("click",()=>Oo());const n=document.querySelector(".roster-history-overlay");n&&n.addEventListener("click",p=>{p.target===n&&(z=!1,l())})}async function Oo(){const t=String(M.accountName||"").trim(),e=String(M.note||"").trim(),r=Number(M.tickets);if(!t){W="Choose a guild member.",l();return}if(!e){W="Enter a reason or note.",l();return}if(!Number.isFinite(r)||r<=0){W="Enter the number of tickets to add.",l();return}ut=!0,W="",l();try{const n=await _("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,tickets:Math.floor(r)},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to add manual ticket entry.");z=!1,M={accountName:"",note:"",tickets:""},Te="",V=-1,await St({silent:!0}),f("manual-ticket-added",n.message||"Manual ticket entry added.",{ttlMs:h})}catch(n){W=v(n)}finally{ut=!1,l()}}function xn(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>je());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{ve=!0,H="",l()});const r=document.querySelector("#rosterMemberSearch");r&&r.addEventListener("input",o=>{dt=o.target.value||"",Ht=o.target.selectionStart,zt=o.target.selectionEnd,l({restoreRosterSearchFocus:!0})});const n=document.querySelector("#rosterRankFilter");n&&n.addEventListener("change",o=>{const d=String(o.target.value||"").trim();d&&(ae.add(d),l())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const d=o.dataset.removeRosterRankFilter||"";ae.delete(d),l()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",o=>{const d=String(o.target.value||"").trim();d&&(ye.add(d),l())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const d=o.dataset.removeRosterLinkStatusFilter||"";ye.delete(d),l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>Mn(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{dt="",ae.clear(),ye.clear(),l()}),qo()}function qo(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{ve=!1,l()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",r=>{if(Fe=r.target.value||"",x=-1,!Fe.trim()){clearTimeout(Dt),H="",C=[],ne="",Q=[],X=!1,l(),Z("rosterHistorySearchInput");return}clearTimeout(Dt),Dt=setTimeout(()=>{Io({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(C.length===0)return;r.preventDefault();const i=r.key==="ArrowDown"?1:-1;x=((x<0?0:x)+i+C.length)%C.length,l(),Z("rosterHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=C[x>=0?x:0];n!=null&&n.account_name&&Or(n.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(r=>{r.addEventListener("click",()=>{Or(r.dataset.rosterHistoryAccount||"")})})}async function Io(t={}){const e=Fe.trim();if(!e){H="",C=[],x=-1,ne="",Q=[],X=!1,l(),t.keepFocus&&Z("rosterHistorySearchInput");return}X=!0,H="",C=[],x=-1,ne="",Q=[],l(),t.keepFocus&&Z("rosterHistorySearchInput");try{const r=await _("guildsync:request-roster-rank-history",{query:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search roster rank history.");C=Po(r.matches),x=C.length>0?0:-1}catch(r){H=v(r)}finally{X=!1,l(),t.keepFocus&&Z("rosterHistorySearchInput")}}async function Or(t,e={}){const r=String(t||"").trim();if(!!r){ne=r,Fe=r,Q=[],X=!0,H="",l();try{const n=await _("guildsync:request-roster-stream-history",{account_name:r},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster stream history.");Q=Fo(n.events)}catch(n){H=v(n)}finally{X=!1,e.keepLoading||l()}}}function Po(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function Fo(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(n=(r=e.timestamp)!=null?r:e.timestampS)!=null?n:"",officer:String(e.officer||"").trim()}}):[]}function On(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(r=e.joined)!=null?r:""}}).sort((e,r)=>e.account_name.localeCompare(r.account_name)):[]}function Go(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function vt(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function qn(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function Uo(t={}){q=On(t.members),lt=t.last_refresh||new Date().toISOString(),S==="eso-members"&&l(),f("roster-data-updated",`Roster data updated. Loaded ${q.length} member record${q.length===1?"":"s"}.`,{ttlMs:h})}async function je(t={}){if(!!(c!=null&&c.connected)){re=!0,l();try{const e=await _("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");q=On(e.members),lt=e.last_refresh||lt,t.silent||f("roster-data-loaded",`Loaded ${q.length} roster member${q.length===1?"":"s"}.`,{ttlMs:h})}catch(e){f("roster-data-error",v(e),{ttlMs:h})}finally{re=!1,l()}}}async function Vo(t={}){var e;if(!!R()){if(!(c!=null&&c.connected)){f("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:h});return}re=!0,l();try{const r=await us(t);if(!(r!=null&&r.ok)){f("roster-data-pending",(r==null?void 0:r.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:h});return}const n={local_upload_id:In(),authenticated_username:Ce(),authenticated_discord_user_id:((e=y==null?void 0:y.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await Fn(n)}catch(i){throw Wo(n),i}await je({silent:!0})}catch(r){f("roster-data-error",v(r),{ttlMs:h})}finally{re=!1,l()}}}function In(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function fr(){try{const t=window.localStorage.getItem(on),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Pn(t){window.localStorage.setItem(on,JSON.stringify(Array.isArray(t)?t:[]))}function Wo(t){const e=String((t==null?void 0:t.local_upload_id)||In()),r=fr().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Pn(r),f("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:h})}function Ho(t){const e=fr().filter(r=>(r==null?void 0:r.local_upload_id)!==t);Pn(e)}async function zo(){if($t||!(c!=null&&c.connected)||!R())return;const t=fr();if(t.length!==0){$t=!0;try{for(const e of t){if(!(c!=null&&c.connected)||!R())return;await Fn(e),Ho(e.local_upload_id)}}catch(e){f("roster-data-pending-error",`Pending roster upload retry failed: ${v(e)}`,{ttlMs:h})}finally{$t=!1}}}async function Fn(t){if(!(c!=null&&c.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await _("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const r=await hs(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return f("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:h}),e}function jo(){const t=Zt(N),e=ta(t),r=N!=="other";return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <span class="discord-last-refresh">Last Refresh: ${a(ei(un))}</span>
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button id="openManualBiweeklyTicketButton" class="bank-export-button" type="button">
            <span aria-hidden="true">\uFF0B</span>
            <span>Add Manual Tickets</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${he?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${he?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${xt("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${xt("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${xt("other","?","Other","All other deposits")}
        </div>

        ${Qo(N)}

        <div class="bank-deposit-table-shell">
          <table class="bank-deposit-table${r?"":" bank-deposit-table-no-tickets"}">
            <thead>
              <tr>
                <th>Event ID <span class="bank-info-dot">i</span></th>
                <th>Date / Time (Local) <span class="bank-info-dot">i</span></th>
                <th>Depositor</th>
                <th>Amount Deposited <span class="bank-info-dot">i</span></th>
                ${r?'<th>Tickets Awarded <span class="bank-info-dot">i</span></th>':""}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(n=>ra(n,r)).join(""):na(r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${a(zn(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${r?`<div>Total Tickets Awarded: <strong>${a(wt(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${de?Yo(Zt(ze)):""}
    </div>
  `}function Yo(t){return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${a(be(ze))} Deposits</h3>
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
              ${t.length>0?t.map(e=>Ko(e)).join(""):Jo()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${a(Un(t))}</textarea>
      </div>
    </div>
  `}function Ko(t){return`
    <tr>
      <td>${a(t.displayName||"")}</td>
      <td>${a(String(Number(t.amount)||0))}</td>
      <td>${a(String(Number(t.ticketAmount)||0))}</td>
      <td>${a(t.note||"")}</td>
    </tr>
  `}function Jo(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${a(be(ze))}.</td>
    </tr>
  `}function Qo(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=Hn(t),r=hr(t),n=r<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${m(be(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${a(be(t))} Raffle Period ${r===0?"(Current)":`(${Math.abs(r)} period${Math.abs(r)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${a(it(e.salesStart))} through ${a(it(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${a(it(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${n?"":"disabled"} aria-label="Next ${m(be(t))} raffle period">\u203A</button>
    </div>
  `}function xt(t,e,r,n){const i=N===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${m(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${a(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${a(r)}</span>
        <span class="bank-section-subtitle">${a(n)}</span>
      </span>
    </button>
  `}function Gn(){if(S!=="more")return;document.querySelectorAll("[data-bank-section]").forEach(s=>{s.addEventListener("click",()=>{N=s.dataset.bankSection||"biweekly",l()})}),document.querySelectorAll("[data-bank-export-section]").forEach(s=>{s.addEventListener("click",()=>{ze=(s.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",de=!0,l()})}),document.querySelectorAll("[data-bank-period-move]").forEach(s=>{s.addEventListener("click",()=>{ea(s.dataset.bankPeriodMove||""),l()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{de=!1,l()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>Xo());const r=document.querySelector(".bank-export-overlay");r&&r.addEventListener("click",s=>{s.target===r&&(de=!1,l())});const n=document.querySelector("#openManualBiweeklyTicketButton");n&&n.addEventListener("click",async()=>{z=!0,W="",Te=M.accountName||"",q.length===0&&(c==null?void 0:c.connected)&&R()&&await je({silent:!0}),l()});const i=document.querySelector("#refreshBankingDataButton");i&&i.addEventListener("click",()=>Yn({key:"banking"}))}function Un(t){const e=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const r of t)e.push([r.displayName||"",String(Number(r.amount)||0),String(Number(r.ticketAmount)||0),r.note||""]);return e.map(r=>r.map(Vn).join("	")).join(`
`)}function Vn(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function Wn(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const r=document.createElement("textarea");r.value=e,r.setAttribute("readonly","readonly"),r.style.position="fixed",r.style.left="0",r.style.top="0",r.style.width="1px",r.style.height="1px",r.style.opacity="0",r.style.pointerEvents="none",r.style.zIndex="-1",document.body.appendChild(r),r.focus(),r.select(),r.setSelectionRange(0,r.value.length);let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r)}return n}async function Xo(){const t=Zt(ze),e=Un(t);if(await Wn(e)){f("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:h});return}const n=document.querySelector("#bankingExportTsv");n&&(n.focus(),n.select()),f("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:h})}function Zt(t){return G.filter(e=>e.type===t).filter(e=>Zo(t,e)).sort((e,r)=>(Number(r.time)||0)-(Number(e.time)||0))}function Zo(t,e){if(t==="other")return!0;const r=Number(e==null?void 0:e.time)||0;if(r<=0)return!1;const n=Hn(t);return r>=n.salesStart&&r<=n.salesEnd}function hr(t){return Number(jt[t])||0}function ea(t){if(N!=="biweekly"&&N!=="monthly")return;const e=hr(N);if(t==="previous"){jt[N]=e-1;return}t==="next"&&e<0&&(jt[N]=e+1)}function Hn(t){const e=Math.floor(Date.now()/1e3),r=t==="monthly",n=r?Ns:Cs;let i=r?Ts:Ms;for(;i-n>e;)i-=n;for(;i<e;)i+=n;return i+=hr(t)*n,{salesStart:i-n+1,salesEnd:i,raffleTime:i+Bs}}function ta(t){return t.reduce((e,r)=>(e.amount+=Number(r.amount)||0,e.tickets+=Number(r.ticketAmount)||0,e),{amount:0,tickets:0})}function ra(t,e=!0){return`
    <tr>
      <td>${a(t.note||t.eventId||"")}</td>
      <td>${a(it(t.time))}</td>
      <td>${a(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${a(zn(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td><strong class="bank-ticket-amount">${a(wt(t.ticketAmount))}</strong></td>`:""}
    </tr>
  `}function na(t=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?"5":"4"}">No ${a(be(N))} deposits found for this ${N==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function be(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function it(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function zn(t){return(Number(t)||0).toLocaleString()}function wt(t){return(Number(t)||0).toLocaleString()}function mr(t){return Array.isArray(t)?t.map(e=>{var n,i,s,o,d,u,p,k,E,I,Mt,Sr;const r=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:r==="monthly"||r==="biweekly"||r==="other"?r:"other",eventId:String((i=(n=e==null?void 0:e.eventId)!=null?n:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((o=(s=e==null?void 0:e.time)!=null?s:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((u=(d=e==null?void 0:e.displayName)!=null?d:e==null?void 0:e.display_name)!=null?u:"").trim(),amount:Number((p=e==null?void 0:e.amount)!=null?p:0)||0,ticketAmount:Number((E=(k=e==null?void 0:e.ticketAmount)!=null?k:e==null?void 0:e.ticket_amount)!=null?E:0)||0,note:String((I=e==null?void 0:e.note)!=null?I:"").trim(),dataSource:String((Sr=(Mt=e==null?void 0:e.dataSource)!=null?Mt:e==null?void 0:e.data_source)!=null?Sr:"").trim()}}):[]}function ia(t){const e=new Map;for(const r of G)r.eventId&&e.set(r.eventId,r);for(const r of t)!r.eventId||e.set(r.eventId,r);G=Array.from(e.values()).sort((r,n)=>(Number(n.time)||0)-(Number(r.time)||0))}function jn(){un=new Date().toISOString()}async function sa(t={}){!(t!=null&&t.ok)||(G=mr(t.entries),jn(),S==="more"&&l(),f("banking-data-updated",`Banking data updated. Loaded ${G.length} deposit record${G.length===1?"":"s"}.`,{ttlMs:h}))}async function St(t={}){const e=Boolean(t.silent);if(!(c!=null&&c.connected)){e||f("banking-data-error","GuildSync websocket is not connected.",{ttlMs:h});return}if(!!R()){he=!0,l();try{const r=await _("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");G=mr(r.entries),jn(),e||f("banking-data",`Loaded ${G.length} banking deposit record${G.length===1?"":"s"}.`,{ttlMs:h})}catch(r){e||f("banking-data-error",v(r),{ttlMs:h})}finally{he=!1,l()}}}async function Yn(t={}){var e,r;if(!!R()){if(!(c!=null&&c.connected)){f("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:h});return}he=!0,l();try{const n=await ds(t);if(!(n!=null&&n.ok)){f("banking-data-pending",(n==null?void 0:n.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:h});return}const i=mr((e=n==null?void 0:n.data)==null?void 0:e.entries);ia(i);const s=new Date().toISOString(),o={local_upload_id:Kn(),authenticated_username:Ce(),authenticated_discord_user_id:((r=y==null?void 0:y.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:s,data:n.data||{}};try{await Qn(o)}catch(d){throw oa(o),d}await St({silent:!0})}catch(n){f("banking-data-error",v(n),{ttlMs:h})}finally{he=!1,l()}}}function Kn(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function pr(){try{const t=window.localStorage.getItem(sn),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Jn(t){window.localStorage.setItem(sn,JSON.stringify(Array.isArray(t)?t:[]))}function oa(t){const e=String((t==null?void 0:t.local_upload_id)||Kn()),r=pr().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Jn(r),f("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:h})}function aa(t){const e=pr().filter(r=>(r==null?void 0:r.local_upload_id)!==t);Jn(e)}async function ca(){if(Bt||!(c!=null&&c.connected)||!R())return;const t=pr();if(t.length!==0){Bt=!0;try{for(const e of t){if(!(c!=null&&c.connected)||!R())return;await Qn(e),aa(e.local_upload_id)}}catch(e){f("banking-data-pending-error",`Pending banking upload retry failed: ${v(e)}`,{ttlMs:h})}finally{Bt=!1}}}async function Qn(t){if(!(c!=null&&c.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await _("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const r=await fs(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return f("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:h}),e}function Xn(){if(S!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>la());const e=document.querySelector("#discordMemberSearch");e&&e.addEventListener("input",s=>{ct=s.target.value||"",Vt=s.target.selectionStart,Wt=s.target.selectionEnd,l({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(s=>{s.addEventListener("click",()=>{pa(s.dataset.discordSortColumn||"username")})});const r=document.querySelector("#discordRoleFilter");r&&r.addEventListener("change",s=>{const o=String(s.target.value||"").trim();o&&(pe.add(o),l())}),document.querySelectorAll("[data-remove-role-filter]").forEach(s=>{s.addEventListener("click",()=>{const o=s.dataset.removeRoleFilter||"";pe.delete(o),l()})});const n=document.querySelector("#discordLinkStatusFilter");n&&n.addEventListener("change",s=>{const o=String(s.target.value||"").trim();o&&(ge.add(o),l())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(s=>{s.addEventListener("click",()=>{const o=s.dataset.removeDiscordLinkStatusFilter||"";ge.delete(o),l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(s=>{s.addEventListener("click",()=>Mn(s.dataset.openMemberLinkDialog||"",s.dataset.memberLinkValue||""))});const i=document.querySelector("#clearDiscordFiltersButton");i&&i.addEventListener("click",()=>{ct="",pe.clear(),ge.clear(),l()})}async function la(){var t,e;if(!(c!=null&&c.connected)){f("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:h});return}at=!0,l(),f("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const r=await _("guildsync:request-discord-data-refresh",{requested_by:((t=y==null?void 0:y.user)==null?void 0:t.display_name)||((e=y==null?void 0:y.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to request Discord data refresh.");f("discord-refresh-requested",r.message||"Discord data refresh completed.",{ttlMs:h}),await gr({silent:!0})}catch(r){f("discord-refresh-error",v(r),{ttlMs:h})}finally{at=!1,l()}}async function da(){if(!(c!=null&&c.connected))return;const t=await _("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(kt=t.value||null)}async function ua(t={}){if(!!(t!=null&&t.ok)){O=Zn(t.members),t.last_refresh&&(kt=t.last_refresh);try{await da()}catch{}S==="discord-members"&&l(),f("discord-data-updated",`Discord data updated. Loaded ${O.length} member record${O.length===1?"":"s"}.`,{ttlMs:h})}}async function gr(t={}){const e=Boolean(t.silent);if(!(c!=null&&c.connected)){f("discord-data-error","GuildSync websocket is not connected.",{ttlMs:h});return}Ie=!0,l();try{const[r,n]=await Promise.all([_("guildsync:request-discord-data-date",{}),_("guildsync:request-discord-member-dataJSON",{})]);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord refresh date.");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord member data.");kt=r.value||null,O=Zn(n.members),e||f("discord-data",`Loaded ${O.length} Discord member record${O.length===1?"":"s"}.`,{ttlMs:h})}catch(r){f("discord-data-error",v(r),{ttlMs:h})}finally{Ie=!1,l()}}function _(t,e={},r=3e4){return new Promise((n,i)=>{if(!(c!=null&&c.connected)){i(new Error("GuildSync websocket is not connected."));return}let s=!1;const o=window.setTimeout(()=>{s||(s=!0,i(new Error(`${t} timed out.`)))},r);c.emit(t,e,d=>{s||(s=!0,window.clearTimeout(o),n(d))})})}function Zn(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(fa).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,r)=>Ge(e).localeCompare(Ge(r),void 0,{sensitivity:"base"})):[]}function fa(t){var i,s;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),r=String(t.role_name||t.name||"Unnamed Role").trim(),n=(s=(i=t.role_color)!=null?i:t.color)!=null?s:null;return{role_id:e,role_name:r||"Unnamed Role",role_color:n}}function ha(){const t=ct.trim().toLowerCase(),e=Array.from(pe),r=O.filter(n=>{if(t&&![n.username,n.global_name,n.server_nickname,n.discord_id,...n.roles.map(s=>s.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(n.roles.map(s=>s.role_name));if(!e.every(s=>i.has(s)))return!1}return!!kn(ge,Qs(n))});return ma(r)}function ma(t){const e=oe==="desc"?-1:1;return[...t].sort((r,n)=>{const i=qr(r,Pe),s=qr(n,Pe),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:Ge(r).localeCompare(Ge(n),void 0,{sensitivity:"base",numeric:!0})})}function qr(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(r=>r.role_name||"").filter(Boolean).sort((r,n)=>r.localeCompare(n,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function pa(t){const r=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";Pe===r?oe=oe==="asc"?"desc":"asc":(Pe=r,oe="asc"),l()}function Qe(t,e){const r=Pe===t,n=oe==="asc"?"ascending":"descending",i=r?oe==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${r?n:"none"}">
      <button
        class="discord-sort-header${r?" active":""}"
        type="button"
        data-discord-sort-column="${m(t)}"
        title="Sort ${m(e)} ${r&&oe==="asc"?"descending":"ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function ga(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(Vt)?Vt:t.value.length,r=Number.isInteger(Wt)?Wt:e;t.setSelectionRange(e,r)}}function ya(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(Ht)?Ht:t.value.length,r=Number.isInteger(zt)?zt:e;t.setSelectionRange(e,r)}}function ba(){const t=new Set;for(const e of O)for(const r of e.roles)r.role_name&&t.add(r.role_name);return Array.from(t).sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function ka(t){const e=_a(t),r=Ge(t),n=t.roles||[];return`
    <tr data-discord-user-id="${m(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${m(e)}" alt="${m(r)}" />`:`<span>${a(ci(r))}</span>`}
          </div>
          <span>${a(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${a(t.global_name||"")}</td>
      <td>${a(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${n.length>0?n.map(i=>wa(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${Ln({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function va(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${a(Ie?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function wa(t){const e=_t(t.role_color),r=kr(e),n=br(e,r);return`
    <span
      class="discord-role-badge"
      title="${m(t.role_name)}"
      style="${n}"
    >${a(t.role_name)}</span>
  `}function Sa(t){const e=yr(t),r=_t(e==null?void 0:e.role_color),n=kr(r),i=br(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-role-filter="${m(t)}"
      style="${i}"
      title="Remove ${m(t)} filter"
    >
      <span>${a(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function yr(t){for(const e of O){const r=e.roles.find(n=>n.role_name===t);if(r)return r}return null}function _t(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function br(t,e){return[`--role-fill-top: ${Ir(t,"#ffffff",.16)}`,`--role-fill-bottom: ${Ir(t,"#000000",.1)}`,`--role-fill-glow: ${Pr(t,.28)}`,`--role-fill-edge: ${Pr(t,.46)}`,`color: ${e}`].join("; ")}function Ir(t,e,r){const n=Xe(t)||Xe("#64748b"),i=Xe(e)||Xe("#ffffff"),s=Math.max(0,Math.min(1,Number(r)||0)),o=Math.round(n.red+(i.red-n.red)*s),d=Math.round(n.green+(i.green-n.green)*s),u=Math.round(n.blue+(i.blue-n.blue)*s);return`#${Ot(o)}${Ot(d)}${Ot(u)}`}function Xe(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function Ot(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function Pr(t,e){const r=String(t||"#64748b").replace("#",""),n=/^[0-9a-f]{6}$/i.test(r)?r:"64748b",i=parseInt(n.slice(0,2),16),s=parseInt(n.slice(2,4),16),o=parseInt(n.slice(4,6),16);return`rgba(${i}, ${s}, ${o}, ${e})`}function kr(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const r=parseInt(e.slice(0,2),16),n=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(r*299+n*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function _a(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!r)return"";const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function Ge(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function ei(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function st(){const t=document.querySelector("#discordArea");if(!!t){if(Ye(!1),R()){const e=y.user||{},r=Ce(),n=Fa(e),i=ci(r);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${n?`<img src="${m(n)}" alt="${m(r)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${a(i)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const s=document.querySelector("#discordAvatarButton");s.addEventListener("contextmenu",o=>{o.preventDefault(),Fr()}),s.addEventListener("click",()=>{Fr()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",Ma)}}function Fr(){if(We){Ye();return}Ra()}function Aa(t=J){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],r=String((t==null?void 0:t.directory)||"").trim(),n=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const s=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),o=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),d=String((i==null?void 0:i.filePath)||(r?`${r}\\${o}`:o)).trim(),u=(i==null?void 0:i.enabled)!==!1,p=n&&u,k=`profileFileWatchToggle-${La(s||o)}`;return`
          <label class="profile-filewatch-item ${u?"enabled":"disabled"}" title="${m(d)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${a(o)}</span>
              <span class="profile-filewatch-state">${p?"Watching":u?"On":"Off"}</span>
            </span>
            <input
              id="${m(k)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${m(s)}"
              ${u?"checked":""}
              aria-label="Turn file watch ${u?"off":"on"} for ${m(o)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function vr(){var n,i,s;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=Ce(),r=((n=y.user)==null?void 0:n.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${a(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${a(Ga(r))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${a(bt)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${J!=null&&J.watching?"Active":"Stopped"}</span>
        </div>
        ${Aa()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(i=document.querySelector("#discordLogoutButton"))==null||i.addEventListener("click",Ta),(s=document.querySelector("#associateTicketReportButton"))==null||s.addEventListener("click",()=>{Ye(!1),wn()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",Ea)})}async function ti(){try{J=await ms(),We&&vr()}catch(t){f("file-watcher-error",v(t),{ttlMs:h})}}async function Ea(t){var n;const e=t.currentTarget,r=String(((n=e==null?void 0:e.dataset)==null?void 0:n.filewatchKey)||"").trim();if(!!r)try{e.disabled=!0,J=await ks(r,e.checked),await ke({silent:!0}),We&&vr()}catch(i){f("file-watcher-error",v(i),{ttlMs:h}),await ti()}}function La(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function Ra(){const t=document.querySelector("#discordProfileMenu");!t||(vr(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),We=!0,ti(),setTimeout(()=>{window.addEventListener("click",ri),window.addEventListener("keydown",ni)},0))}function Ye(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),We=!1,t&&(window.removeEventListener("click",ri),window.removeEventListener("keydown",ni))}function ri(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&Ye()}function ni(t){t.key==="Escape"&&Ye()}async function Ma(){try{f("auth","Opening Discord login...",{ttlMs:h});const t=await ws();t!=null&&t.status_message&&f("auth",t.status_message,{ttlMs:h}),ee()}catch(t){f("auth-error",v(t),{ttlMs:h}),ee()}}async function Ta(){try{y=await gs(),f("auth",y.status_message||"Logged out.",{ttlMs:h}),fn(),qe(),await ke()}catch(t){f("auth-error",v(t),{ttlMs:h}),ee()}}function qe(){const t=y.socket_url||"https://guildsync.perdues.me";Ca(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};y!=null&&y.token&&(e.auth={token:y.token}),c=rt(t,e),c.on("connect",()=>{ee(),ii(),S==="discord-members"&&gr({silent:!0}),S==="eso-members"&&je({silent:!0}),S==="more"&&St({silent:!0}),ca(),zo(),Na()}),c.on("connect_error",()=>{ee(),pt()}),c.on("disconnect",()=>{ee(),pt()}),c.on("guildsync:version-status",r=>{Ba(r)}),c.on("guildsync:discord-member-data-updated",r=>{ua(r)}),c.on("guildsync:banking-data-updated",r=>{sa(r)}),c.on("guildsync:roster-data-updated",r=>{Uo(r)}),c.on("guildsync:member-links-updated",(r={})=>{Array.isArray(r.links)&&(w=r.links,(S==="discord-members"||S==="eso-members"||S==="settings"||ie)&&l())}),c.on("guildsync:discord-refresh-status",(r={})=>{const n=String(r.message||"").trim();n&&f("discord-refresh-status",n,{ttlMs:h})})}function Ca(t=!0){pt(),c&&(c.disconnect(),c=null),t&&ee()}function ii(){!(c!=null&&c.connected)||c.emit("guildsync:client-version",{version:bt})}function Na(){pt(),nt=window.setInterval(()=>{ii()},Es)}function pt(){nt&&(window.clearInterval(nt),nt=null)}function Ba(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown";f("version",`GuildSync is out of date. Current version: ${bt}. Latest version: ${e}.`);return}wr("version")}}function f(t,e,r={}){const n=String(t||"").trim(),i=String(e||"").trim();if(!(!n||!i)){if(te.set(n,i),se.has(n)&&(window.clearTimeout(se.get(n)),se.delete(n)),r.ttlMs&&Number(r.ttlMs)>0){const s=window.setTimeout(()=>{wr(n)},Number(r.ttlMs));se.set(n,s)}_e()}}function wr(t){const e=String(t||"").trim();if(!!e){if(te.delete(e),se.has(e)&&(window.clearTimeout(se.get(e)),se.delete(e)),L===e){Lt(()=>{L="",_e()});return}_e()}}function _e(){const t=At();if(t.length===0){ue?Lt(Ue):Ue();return}!ue&&!fe&&Et(t[0])}function At(){return Array.from(te.keys())}function si(){const t=At();if(t.length===0)return"";if(!L)return t[0];const e=t.indexOf(L);return e<0?t[0]:t[(e+1)%t.length]}function Et(t){const e=document.querySelector("#statusMessageTrack");if(!e||!te.has(t)){Ue();return}Rt();const r=te.get(t);L=t,ue=!0,fe=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=r,e.style.setProperty("--message-fade-duration",`${cn}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",fe=!1,$a()},{once:!0})})}function $a(){const t=At();if(!L||!te.has(L)){_e();return}if(t.length<=1){Gr(!1);return}Gr(!0)}function Gr(t){const e=document.querySelector("#statusMessageViewport"),r=document.querySelector("#statusMessageTrack");if(!e||!r)return;const n=Math.max(0,r.scrollWidth-e.clientWidth);if(n<=0){t&&Ve(()=>{Lt(()=>{const i=si();L="",i?Et(i):Ue()})},an);return}Ve(()=>{oi(n,t)},ln)}function oi(t,e){const r=document.querySelector("#statusMessageTrack");if(!r||!L||!te.has(L))return;const n=Math.max(4,Math.ceil(t/Rs));r.style.setProperty("--long-scroll-distance",`${t}px`),r.style.setProperty("--long-scroll-duration",`${n}s`),r.classList.add("long-scroll"),r.addEventListener("animationend",()=>{if(r.classList.remove("long-scroll"),r.style.transform=`translateX(-${t}px) translateY(-50%)`,e){Ve(()=>{Lt(()=>{const i=si();L="",i?Et(i):Ue()})},an);return}Ve(()=>{Da()},Ls)},{once:!0})}function Da(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!L||!te.has(L))return;if(At().length!==1){_e();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const n=Math.max(0,e.scrollWidth-t.clientWidth);n<=0||Ve(()=>{oi(n,!1)},ln)}function Lt(t){const e=document.querySelector("#statusMessageTrack");if(Rt(),!e||!ue){typeof t=="function"&&t();return}fe=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${cn}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",ue=!1,fe=!1,typeof t=="function"&&t()},{once:!0})}function Ue(){const t=document.querySelector("#statusMessageTrack");Rt(),L="",ue=!1,fe=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function Ve(t,e){const r=window.setTimeout(()=>{xe=xe.filter(n=>n!==r),t()},e);xe.push(r)}function Rt(){for(const t of xe)window.clearTimeout(t);xe=[]}function ai(){if(!ue||fe||!L)return;const t=L;Rt(),Et(t)}function ee(){const t=document.querySelector("#statusDot");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(c!=null&&c.connected)){t.classList.add("status-red"),t.title="Websocket not connected";return}if(!R()){t.classList.add("status-yellow"),t.title="Websocket connected. User is not authenticated.";return}t.classList.add("status-green"),t.title=`Websocket connected. Authenticated as ${Ce()}.`}}async function ke(t={}){try{if(R()){const e=await Ss();J=e,!t.silent&&(e==null?void 0:e.message)&&f(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:h});return}J=await _s(),wr("file-watcher")}catch(e){f("file-watcher-error",v(e),{ttlMs:h})}}function xa(t={}){if(!R())return;const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",r=String(t.label||"").trim(),n=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",i=r?`${r} saved variables (${n})`:n;f(`saved-vars-file-updated-${e}`,`${i} has been updated.`,{ttlMs:h}),e.toLowerCase()==="banking"&&Oa(t),e.toLowerCase()==="roster"&&qa(t)}async function Oa(t={}){await Yn(t)}async function qa(t={}){await Vo(t)}function Ia(t){!R()||f("file-watcher-error",v(t),{ttlMs:h})}function Pa(){Be("guildsync-savedvars-file-modified",xa),Be("guildsync-file-watcher-error",Ia),Be("guildsync-login-complete",async t=>{y=t||{logged_in:!1,allowed:!1},st(),qe(),await ke(),f("auth",y.status_message||`Logged in and authorized as ${Ce()}.`,{ttlMs:h})}),Be("guildsync-login-denied",async t=>{y={logged_in:!1,allowed:!1,status_message:""},st(),await ke(),f("auth",t||"Access denied.",{ttlMs:h}),qe()}),Be("guildsync-login-failed",async t=>{y={logged_in:!1,allowed:!1,status_message:""},st(),await ke(),f("auth",t||"Login failed.",{ttlMs:h}),qe()})}function R(){return Boolean((y==null?void 0:y.logged_in)&&(y==null?void 0:y.allowed)&&(y==null?void 0:y.token))}function Ce(){var t,e;return((t=y.user)==null?void 0:t.display_name)||((e=y.user)==null?void 0:e.username)||"Discord User"}function Fa(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),r=String(t.discord_user_id||"").trim();if(!e||!r)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=128`}function ci(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function Ga(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Ua(){$e&&($e.disconnect(),$e=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),r=Math.round(t.getBoundingClientRect().height);$e=new ResizeObserver(n=>{const i=n[0];if(!i)return;const s=Math.round(i.contentRect.width),o=Math.round(i.contentRect.height);s===e&&o===r||(e=s,r=o,li(),ai())}),$e.observe(t)}function li(){clearTimeout(Rr),Rr=setTimeout(async()=>{try{await nn()}catch{}},500)}function v(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function a(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function m(t){return a(t)}Pa();$s();
