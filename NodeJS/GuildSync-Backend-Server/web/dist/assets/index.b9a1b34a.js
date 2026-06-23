(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const ca="/assets/splash.ea386b6a.png",la="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",da="/assets/GuildSync-Graphic.9169020d.png",te=Object.create(null);te.open="0";te.close="1";te.ping="2";te.pong="3";te.message="4";te.upgrade="5";te.noop="6";const lr=Object.create(null);Object.keys(te).forEach(t=>{lr[te[t]]=t});const un={type:"error",data:"parser error"},as=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",cs=typeof ArrayBuffer=="function",ls=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Nn=({type:t,data:e},r,n)=>as&&e instanceof Blob?r?n(e):Ni(e,n):cs&&(e instanceof ArrayBuffer||ls(e))?r?n(e):Ni(new Blob([e]),n):n(te[t]+(e||"")),Ni=(t,e)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];e("b"+(n||""))},r.readAsDataURL(t)};function Bi(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let Qr;function ua(t,e){if(as&&t.data instanceof Blob)return t.data.arrayBuffer().then(Bi).then(e);if(cs&&(t.data instanceof ArrayBuffer||ls(t.data)))return e(Bi(t.data));Nn(t,!1,r=>{Qr||(Qr=new TextEncoder),e(Qr.encode(r))})}const Ci="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Bt=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<Ci.length;t++)Bt[Ci.charCodeAt(t)]=t;const fa=t=>{let e=t.length*.75,r=t.length,n,i=0,s,o,a,u;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const m=new ArrayBuffer(e),v=new Uint8Array(m);for(n=0;n<r;n+=4)s=Bt[t.charCodeAt(n)],o=Bt[t.charCodeAt(n+1)],a=Bt[t.charCodeAt(n+2)],u=Bt[t.charCodeAt(n+3)],v[i++]=s<<2|o>>4,v[i++]=(o&15)<<4|a>>2,v[i++]=(a&3)<<6|u&63;return m},ha=typeof ArrayBuffer=="function",Bn=(t,e)=>{if(typeof t!="string")return{type:"message",data:ds(t,e)};const r=t.charAt(0);return r==="b"?{type:"message",data:pa(t.substring(1),e)}:lr[r]?t.length>1?{type:lr[r],data:t.substring(1)}:{type:lr[r]}:un},pa=(t,e)=>{if(ha){const r=fa(t);return ds(r,e)}else return{base64:!0,data:t}},ds=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},us=String.fromCharCode(30),ma=(t,e)=>{const r=t.length,n=new Array(r);let i=0;t.forEach((s,o)=>{Nn(s,!1,a=>{n[o]=a,++i===r&&e(n.join(us))})})},ga=(t,e)=>{const r=t.split(us),n=[];for(let i=0;i<r.length;i++){const s=Bn(r[i],e);if(n.push(s),s.type==="error")break}return n};function ya(){return new TransformStream({transform(t,e){ua(t,r=>{const n=r.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,n)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(n))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(r)})}})}let Xr;function rr(t){return t.reduce((e,r)=>e+r.length,0)}function nr(t,e){if(t[0].length===e)return t.shift();const r=new Uint8Array(e);let n=0;for(let i=0;i<e;i++)r[i]=t[0][n++],n===t[0].length&&(t.shift(),n=0);return t.length&&n<t[0].length&&(t[0]=t[0].slice(n)),r}function ba(t,e){Xr||(Xr=new TextDecoder);const r=[];let n=0,i=-1,s=!1;return new TransformStream({transform(o,a){for(r.push(o);;){if(n===0){if(rr(r)<1)break;const u=nr(r,1);s=(u[0]&128)===128,i=u[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(rr(r)<2)break;const u=nr(r,2);i=new DataView(u.buffer,u.byteOffset,u.length).getUint16(0),n=3}else if(n===2){if(rr(r)<8)break;const u=nr(r,8),m=new DataView(u.buffer,u.byteOffset,u.length),v=m.getUint32(0);if(v>Math.pow(2,53-32)-1){a.enqueue(un);break}i=v*Math.pow(2,32)+m.getUint32(4),n=3}else{if(rr(r)<i)break;const u=nr(r,i);a.enqueue(Bn(s?u:Xr.decode(u),e)),n=0}if(i===0||i>t){a.enqueue(un);break}}}})}const fs=4;function R(t){if(t)return va(t)}function va(t){for(var e in R.prototype)t[e]=R.prototype[e];return t}R.prototype.on=R.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};R.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this};R.prototype.off=R.prototype.removeListener=R.prototype.removeAllListeners=R.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var n,i=0;i<r.length;i++)if(n=r[i],n===e||n.fn===e){r.splice(i,1);break}return r.length===0&&delete this._callbacks["$"+t],this};R.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),r=this._callbacks["$"+t],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,i=r.length;n<i;++n)r[n].apply(this,e)}return this};R.prototype.emitReserved=R.prototype.emit;R.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};R.prototype.hasListeners=function(t){return!!this.listeners(t).length};const Nr=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,r)=>r(e,0))(),U=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),ka="arraybuffer";function hs(t,...e){return e.reduce((r,n)=>(t.hasOwnProperty(n)&&(r[n]=t[n]),r),{})}const Sa=U.setTimeout,wa=U.clearTimeout;function Br(t,e){e.useNativeTimers?(t.setTimeoutFn=Sa.bind(U),t.clearTimeoutFn=wa.bind(U)):(t.setTimeoutFn=U.setTimeout.bind(U),t.clearTimeoutFn=U.clearTimeout.bind(U))}const _a=1.33;function Aa(t){return typeof t=="string"?La(t):Math.ceil((t.byteLength||t.size)*_a)}function La(t){let e=0,r=0;for(let n=0,i=t.length;n<i;n++)e=t.charCodeAt(n),e<128?r+=1:e<2048?r+=2:e<55296||e>=57344?r+=3:(n++,r+=4);return r}function ps(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Ea(t){let e="";for(let r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e}function Da(t){let e={},r=t.split("&");for(let n=0,i=r.length;n<i;n++){let s=r[n].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class Ra extends Error{constructor(e,r,n){super(e),this.description=r,this.context=n,this.type="TransportError"}}class Cn extends R{constructor(e){super(),this.writable=!1,Br(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,r,n){return super.emitReserved("error",new Ra(e,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const r=Bn(e,this.socket.binaryType);this.onPacket(r)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,r={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const r=Ea(e);return r.length?"?"+r:""}}class Ma extends Cn{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const r=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};ga(e,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,ma(e,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=ps()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(e,r)}}let ms=!1;try{ms=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const $a=ms;function Ta(){}class Na extends Ma{constructor(e){if(super(e),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,r){const n=this.request({method:"POST",data:e});n.on("success",r),n.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=e}}class Z extends R{constructor(e,r,n){super(),this.createRequest=e,Br(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;const r=hs(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=Z.requestsCount++,Z.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Ta,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Z.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Z.requestsCount=0;Z.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Ii);else if(typeof addEventListener=="function"){const t="onpagehide"in U?"pagehide":"unload";addEventListener(t,Ii,!1)}}function Ii(){for(let t in Z.requests)Z.requests.hasOwnProperty(t)&&Z.requests[t].abort()}const Ba=function(){const t=gs({xdomain:!1});return t&&t.responseType!==null}();class Ca extends Na{constructor(e){super(e);const r=e&&e.forceBase64;this.supportsBinary=Ba&&!r}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Z(gs,this.uri(),e)}}function gs(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||$a))return new XMLHttpRequest}catch{}if(!e)try{return new U[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const ys=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Ia extends Cn{get name(){return"websocket"}doOpen(){const e=this.uri(),r=this.opts.protocols,n=ys?{}:hs(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,r,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],i=r===e.length-1;Nn(n,this.supportsBinary,s=>{try{this.doWrite(n,s)}catch{}i&&Nr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=ps()),this.supportsBinary||(r.b64=1),this.createUri(e,r)}}const Zr=U.WebSocket||U.MozWebSocket;class Oa extends Ia{createSocket(e,r,n){return ys?new Zr(e,r,n):r?new Zr(e,r):new Zr(e)}doWrite(e,r){this.ws.send(r)}}class xa extends Cn{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const r=ba(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(r).getReader(),i=ya();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const s=()=>{n.read().then(({done:a,value:u})=>{a||(this.onPacket(u),s())}).catch(a=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],i=r===e.length-1;this._writer.write(n).then(()=>{i&&Nr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const qa={websocket:Oa,webtransport:xa,polling:Ca},Pa=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Fa=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function fn(t){if(t.length>8e3)throw"URI too long";const e=t,r=t.indexOf("["),n=t.indexOf("]");r!=-1&&n!=-1&&(t=t.substring(0,r)+t.substring(r,n).replace(/:/g,";")+t.substring(n,t.length));let i=Pa.exec(t||""),s={},o=14;for(;o--;)s[Fa[o]]=i[o]||"";return r!=-1&&n!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=Ga(s,s.path),s.queryKey=Ua(s,s.query),s}function Ga(t,e){const r=/\/{2,9}/g,n=e.replace(r,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Ua(t,e){const r={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,s){i&&(r[i]=s)}),r}const hn=typeof addEventListener=="function"&&typeof removeEventListener=="function",dr=[];hn&&addEventListener("offline",()=>{dr.forEach(t=>t())},!1);class ke extends R{constructor(e,r){if(super(),this.binaryType=ka,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(r=e,e=null),e){const n=fn(e);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=fn(r.host).host);Br(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Da(this.opts.query)),hn&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},dr.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const r=Object.assign({},this.opts.query);r.EIO=fs,r.transport=e,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&ke.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(e);r.open(),this.setTransport(r)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",ke.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=e.data,this._onError(r);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(r+=Aa(i)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Nr(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,r,n){return this._sendPacket("message",e,r,n),this}send(e,r,n){return this._sendPacket("message",e,r,n),this}_sendPacket(e,r,n,i){if(typeof r=="function"&&(i=r,r=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const s={type:e,data:r,options:n};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),e()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(ke.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),hn&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=dr.indexOf(this._offlineEventListener);n!==-1&&dr.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,r),this.writeBuffer=[],this._prevBufferLen=0}}}ke.protocol=fs;class Va extends ke{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let r=this.createTransport(e),n=!1;ke.priorWebsocketSuccess=!1;const i=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",g=>{if(!n)if(g.type==="pong"&&g.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;ke.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(v(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const y=new Error("probe error");y.transport=r.name,this.emitReserved("upgradeError",y)}}))};function s(){n||(n=!0,v(),r.close(),r=null)}const o=g=>{const y=new Error("probe error: "+g);y.transport=r.name,s(),this.emitReserved("upgradeError",y)};function a(){o("transport closed")}function u(){o("socket closed")}function m(g){r&&g.name!==r.name&&s()}const v=()=>{r.removeListener("open",i),r.removeListener("error",o),r.removeListener("close",a),this.off("close",u),this.off("upgrading",m)};r.once("open",i),r.once("error",o),r.once("close",a),this.once("close",u),this.once("upgrading",m),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const r=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&r.push(e[n]);return r}}class Ha extends Va{constructor(e,r={}){const n=typeof e=="object"?e:r;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(i=>qa[i]).filter(i=>!!i)),super(e,n)}}function Wa(t,e="",r){let n=t;r=r||typeof location<"u"&&location,t==null&&(t=r.protocol+"//"+r.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=r.protocol+t:t=r.host+t),/^(https?|wss?):\/\//.test(t)||(typeof r<"u"?t=r.protocol+"//"+t:t="https://"+t),n=fn(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const s=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port+e,n.href=n.protocol+"://"+s+(r&&r.port===n.port?"":":"+n.port),n}const ja=typeof ArrayBuffer=="function",za=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,bs=Object.prototype.toString,Ya=typeof Blob=="function"||typeof Blob<"u"&&bs.call(Blob)==="[object BlobConstructor]",Ka=typeof File=="function"||typeof File<"u"&&bs.call(File)==="[object FileConstructor]";function In(t){return ja&&(t instanceof ArrayBuffer||za(t))||Ya&&t instanceof Blob||Ka&&t instanceof File}function ur(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let r=0,n=t.length;r<n;r++)if(ur(t[r]))return!0;return!1}if(In(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return ur(t.toJSON(),!0);for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&ur(t[r]))return!0;return!1}function Ja(t){const e=[],r=t.data,n=t;return n.data=pn(r,e),n.attachments=e.length,{packet:n,buffers:e}}function pn(t,e){if(!t)return t;if(In(t)){const r={_placeholder:!0,num:e.length};return e.push(t),r}else if(Array.isArray(t)){const r=new Array(t.length);for(let n=0;n<t.length;n++)r[n]=pn(t[n],e);return r}else if(typeof t=="object"&&!(t instanceof Date)){const r={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=pn(t[n],e));return r}return t}function Qa(t,e){return t.data=mn(t.data,e),delete t.attachments,t}function mn(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let r=0;r<t.length;r++)t[r]=mn(t[r],e);else if(typeof t=="object")for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(t[r]=mn(t[r],e));return t}const vs=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Xa=5;var k;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(k||(k={}));class Za{constructor(e){this.replacer=e}encode(e){return(e.type===k.EVENT||e.type===k.ACK)&&ur(e)?this.encodeAsBinary({type:e.type===k.EVENT?k.BINARY_EVENT:k.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let r=""+e.type;return(e.type===k.BINARY_EVENT||e.type===k.BINARY_ACK)&&(r+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(r+=e.nsp+","),e.id!=null&&(r+=e.id),e.data!=null&&(r+=JSON.stringify(e.data,this.replacer)),r}encodeAsBinary(e){const r=Ja(e),n=this.encodeAsString(r.packet),i=r.buffers;return i.unshift(n),i}}class On extends R{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let r;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(e);const n=r.type===k.BINARY_EVENT;n||r.type===k.BINARY_ACK?(r.type=n?k.EVENT:k.ACK,this.reconstructor=new ec(r),r.attachments===0&&super.emitReserved("decoded",r)):super.emitReserved("decoded",r)}else if(In(e)||e.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(e),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let r=0;const n={type:Number(e.charAt(0))};if(k[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===k.BINARY_EVENT||n.type===k.BINARY_ACK){const s=r+1;for(;e.charAt(++r)!=="-"&&r!=e.length;);const o=e.substring(s,r);if(o!=Number(o)||e.charAt(r)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!ks(a)||a<0)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=a}if(e.charAt(r+1)==="/"){const s=r+1;for(;++r&&!(e.charAt(r)===","||r===e.length););n.nsp=e.substring(s,r)}else n.nsp="/";const i=e.charAt(r+1);if(i!==""&&Number(i)==i){const s=r+1;for(;++r;){const o=e.charAt(r);if(o==null||Number(o)!=o){--r;break}if(r===e.length)break}n.id=Number(e.substring(s,r+1))}if(e.charAt(++r)){const s=this.tryParse(e.substr(r));if(On.isPayloadValid(n.type,s))n.data=s;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,r){switch(e){case k.CONNECT:return br(r);case k.DISCONNECT:return r===void 0;case k.CONNECT_ERROR:return typeof r=="string"||br(r);case k.EVENT:case k.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&vs.indexOf(r[0])===-1);case k.ACK:case k.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class ec{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const r=Qa(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function tc(t){return typeof t=="string"}const ks=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function rc(t){return t===void 0||ks(t)}function br(t){return Object.prototype.toString.call(t)==="[object Object]"}function nc(t,e){switch(t){case k.CONNECT:return e===void 0||br(e);case k.DISCONNECT:return e===void 0;case k.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&vs.indexOf(e[0])===-1);case k.ACK:return Array.isArray(e);case k.CONNECT_ERROR:return typeof e=="string"||br(e);default:return!1}}function ic(t){return tc(t.nsp)&&rc(t.id)&&nc(t.type,t.data)}const sc=Object.freeze(Object.defineProperty({__proto__:null,protocol:Xa,get PacketType(){return k},Encoder:Za,Decoder:On,isPacketValid:ic},Symbol.toStringTag,{value:"Module"}));function j(t,e,r){return t.on(e,r),function(){t.off(e,r)}}const oc=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Ss extends R{constructor(e,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[j(e,"open",this.onopen.bind(this)),j(e,"packet",this.onpacket.bind(this)),j(e,"error",this.onerror.bind(this)),j(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...r){var n,i,s;if(oc.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(r.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const o={type:k.EVENT,data:r};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const v=this.ids++,g=r.pop();this._registerAckCallback(v,g),o.id=v}const a=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,u=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!a||(u?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,r){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[e]=r;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);r.call(this,new Error("operation has timed out"))},i),o=(...a)=>{this.io.clearTimeoutFn(s),r.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...r){return new Promise((n,i)=>{const s=(o,a)=>o?i(o):n(a);s.withError=!0,r.push(s),this.emit(e,...r)})}_addToQueue(e){let r;typeof e[e.length-1]=="function"&&(r=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(i)):(this._queue.shift(),r&&r(null,...s)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!e||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:k.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){const n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case k.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case k.EVENT:case k.BINARY_EVENT:this.onevent(e);break;case k.ACK:case k.BINARY_ACK:this.onack(e);break;case k.DISCONNECT:this.ondisconnect();break;case k.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const r=e.data||[];e.id!=null&&r.push(this.ack(e.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const r=this;let n=!1;return function(...i){n||(n=!0,r.packet({type:k.ACK,id:e,data:i}))}}onack(e){const r=this.acks[e.id];typeof r=="function"&&(delete this.acks[e.id],r.withError&&e.data.unshift(null),r.apply(this,e.data))}onconnect(e,r){this.id=e,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:k.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,e.data)}}}function mt(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}mt.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-r:t+r}return Math.min(t,this.max)|0};mt.prototype.reset=function(){this.attempts=0};mt.prototype.setMin=function(t){this.ms=t};mt.prototype.setMax=function(t){this.max=t};mt.prototype.setJitter=function(t){this.jitter=t};class gn extends R{constructor(e,r){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(r=e,e=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,Br(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new mt({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=e;const i=r.parser||sc;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var r;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(r=this.backoff)===null||r===void 0||r.setMin(e),this)}randomizationFactor(e){var r;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(r=this.backoff)===null||r===void 0||r.setJitter(e),this)}reconnectionDelayMax(e){var r;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(r=this.backoff)===null||r===void 0||r.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Ha(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=j(r,"open",function(){n.onopen(),e&&e()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=j(r,"error",s);if(this._timeout!==!1){const a=this._timeout,u=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),r.close()},a);this.opts.autoUnref&&u.unref(),this.subs.push(()=>{this.clearTimeoutFn(u)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(j(e,"ping",this.onping.bind(this)),j(e,"data",this.ondata.bind(this)),j(e,"error",this.onerror.bind(this)),j(e,"close",this.onclose.bind(this)),j(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(r){this.onclose("parse error",r)}}ondecoded(e){Nr(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,r){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new Ss(this,e,r),this.nsps[e]=n),n}_destroy(e){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(e){const r=this.encoder.encode(e);for(let n=0;n<r.length;n++)this.engine.write(r[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Dt={};function fr(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const r=Wa(t,e.path||"/socket.io"),n=r.source,i=r.id,s=r.path,o=Dt[i]&&s in Dt[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let u;return a?u=new gn(n,e):(Dt[i]||(Dt[i]=new gn(n,e)),u=Dt[i]),r.query&&!e.query&&(e.query=r.queryKey),u.socket(r.path,e)}Object.assign(fr,{Manager:gn,Socket:Ss,io:fr,connect:fr});window.GUILDSYNC_WEB=!0;const xn="guildsync-web-session";function ac(){try{return JSON.parse(localStorage.getItem(xn)||"{}")||{}}catch{return{}}}function cc(t){localStorage.setItem(xn,JSON.stringify(t||{}))}function ws(){localStorage.removeItem(xn)}async function lc(){return!0}async function _s(){return!0}async function dc(){return!0}async function uc(){return!0}async function fc(){return!0}async function hc(){return window.location.assign("/api/auth/discord/web-login"),!0}async function pc(){var s,o,a,u,m,v,g,y;const e=ac().token||localStorage.getItem("guildsync-web-token")||"";if(!e)return{logged_in:!1,allowed:!1,status_message:"Not logged in."};const r=await fetch("/api/auth/session",{headers:{Authorization:`Bearer ${e}`}}),n=await r.json().catch(()=>({}));if(!r.ok||n.ok===!1)return ws(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:n.message||"Session expired. Please log in again."};const i={logged_in:!0,allowed:!0,token:e,user:n.user,discord_user_id:((s=n.user)==null?void 0:s.discord_user_id)||"",username:((o=n.user)==null?void 0:o.username)||"",global_name:((a=n.user)==null?void 0:a.global_name)||"",display_name:((u=n.user)==null?void 0:u.display_name)||((m=n.user)==null?void 0:m.global_name)||((v=n.user)==null?void 0:v.username)||"",avatar_url:((g=n.user)==null?void 0:g.avatar_url)||"",role:((y=n.user)==null?void 0:y.role)||"user",status_message:"Logged in."};return cc(i),i}async function mc(){return ws(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:"Logged out."}}async function gc(){return Cr()}async function yc(){return Cr()}async function Cr(){return{watching:!1,directory:"Web upload mode",files:[{key:"banking",fileName:"GuildSyncBanking.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"},{key:"roster",fileName:"GuildSyncRoster.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"}]}}async function bc(){return Cr()}async function vc(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function kc(){return{ok:!0}}async function Sc(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function wc(){return{ok:!0}}async function _c(t){return t&&window.open(t,"_blank","noopener,noreferrer"),!0}async function Ac(){return{running:!1,message:"ESO process detection is only available in the desktop client."}}async function Lc(){throw new Error("Deposit mail sending is disabled in the web client. Use the GuildSync desktop client for ESO mail queue writes.")}async function Ec(){return{ok:!0,acknowledgements:[],records:[]}}async function Dc(){return{ok:!0}}async function Rc(){return{ok:!0}}async function Mc(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSyncApplications.lua onto the GuildSync web window.")}async function $c(){return{ok:!0}}const ir=new Map;function Rt(t,e){return ir.has(t)||ir.set(t,new Set),ir.get(t).add(e),()=>{var r;return(r=ir.get(t))==null?void 0:r.delete(e)}}const Ir="1.1.2",sr={windows:{label:"Windows detected",shortLabel:"Windows",fileName:"GuildSync-windows-amd64.zip",href:"/downloads/GuildSync-windows-amd64.zip"},macos:{label:"macOS detected",shortLabel:"macOS",fileName:"GuildSync-macos.zip",href:"/downloads/GuildSync-macos.zip"},linux:{label:"Linux detected",shortLabel:"Linux",fileName:"GuildSync-linux-amd64.zip",href:"/downloads/GuildSync-linux-amd64.zip"}},As="guildsync-web-savedvars-upload-banner-dismissed",Tc=new Map([["GuildSyncBanking.lua","banking"],["GuildSyncRoster.lua","roster"],["GuildSyncApplications.lua","applications"]]),Nc=30*60*1e3,Ls="guildsync-pending-banking-uploads",Es="guildsync-pending-deposit-mail",Bc=5e3,Cc=30*1e3,Ds="guildsync-pending-roster-uploads",Rs="guildsync-pending-applications-uploads",p=60*1e3,Ms=7e3,$s=1400,Ts=2400,Ic=4e3,Oc=38,Ns=document.querySelector("#app");let Oi=null,Mt=null,xi=!1,Wt=!1,hr=null,en=!1,tn=!1,rn=!1,Se=null,ie={running:!1,message:""},Je=null,Qe=null,pr=!1,Xe=null,nn=!1,Ke=0,sn=!1,De=new Map,Ce=new Map,N="",Ue=!1,Ve=!1,Ct=[],b={logged_in:!1,allowed:!1,status_message:""},he={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},l=null,x=[],Or=null,qt=!1,vr=!1,kr="",Ze=new Set,et=new Set,Pt="username",Ie="asc",yn=null,bn=null,J=[],Sr=null,Re=!1,qi=!1,wr="",vn=null,kn=null,Oe=new Set,tt=new Set,oe="",I="",$=-1,ot=!1,Ft="",V=[],Me="",we=[],_e=!1,ce="",on=null,z=-1,at=!1,pe="",H=[],ct="",He="",Ae=[],Le=!1,le="",Pi=null,Be=0;const xc=650;let Y=-1,gt=!1,yt=[],me=!1,xe="",bt=!1,Gt=[],ge=!1,qe="",vt=!1,qn=[],ye=!1,Pe="",kt="",be="",rt="",ve="",E=[],q=!1,W="",ze=!1,xr="",nt="",jt="",zt="",ae=-1,Ne=!1,w=null,Fe=[],lt=!1,ue="",Yt="",X=-1,St=!1,Pn=null,It=null;const Fn=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let P=[],M="biweekly",Bs=null,$e=!1,Ge=!1,Kt="biweekly",wt=!1,dt=!1,se="",F=null,T={targetType:"other",note:"",tickets:""},de=!1,_r=!1,G="",L={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},_t="",B=-1,K=!1,Sn={biweekly:0,monthly:0};const qc=1780786800,Te=14*24*60*60,Ar=60*60,Lr=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let D=Lr[0].id;function Pc(){Ns.innerHTML=`
    <main class="splash-screen">
      <img src="${ca}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await lc(),await Fc(),Cs(),xt(),await st()},5e3)}async function Fc(){try{b=await pc()}catch(t){b={logged_in:!1,allowed:!1,status_message:""},h("session-error",S(t),{ttlMs:p})}}function Cs(){Ns.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${la}" alt="" class="title-icon" />
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
            <img src="${da}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${c(Ir)}</div>
            </div>
          </div>
          <div class="compact-header-actions">
            ${Uc()}
            <div id="discordArea" class="discord-area"></div>
          </div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${Is()}
        </nav>

        <div id="webSavedVarsUploadBannerHost">
          ${yl()}
        </div>

        <section id="guildSyncTabContent" class="guildsync-tab-content${Hs()?" web-upload-banner-dismissed":""}" aria-live="polite">
          ${xs()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await uc()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await _s(),await fc()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await dc()}),yr(),bl(),Ps(),Jo(),Eo(),xo(),Ws(),Lo(),mo(),go(),yo(),bo(),io(),Do(),Kc(),Ee(),pt(),xi||(window.addEventListener("resize",()=>{aa(),sa()}),pf(),xi=!0)}function Is(){return Lr.map(t=>{const e=t.id===D,r=Vc(t.id,e),n=r?Os():0,i=r?`Deposit mail needs attention: ${n} item${n===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${r?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${f(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${f(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${Hc(t.icon)}</span>
          <span class="guildsync-tab-label">${c(t.label)}</span>
          ${r?`<span class="guildsync-tab-mail-badge" aria-label="${f(i)}">${n>99?"99+":c(String(n))}</span>`:""}
        </button>
      `}).join("")}function Gc(){var r;const e=`${((r=navigator.userAgentData)==null?void 0:r.platform)||""} ${navigator.platform||""} ${navigator.userAgent||""}`.toLowerCase();return e.includes("win")?sr.windows:e.includes("mac")||e.includes("darwin")?sr.macos:e.includes("linux")||e.includes("x11")?sr.linux:{...sr.windows,label:"Desktop client",shortLabel:"Windows"}}function Uc(){const t=Gc();return`
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
        <span class="desktop-client-download-subtitle">${c(t.label)} \xB7 ZIP</span>
      </span>
      <span class="desktop-client-download-caret" aria-hidden="true">\u25BE</span>
    </a>
  `}function Os(){return _()?Gr()+Zt()+Io():0}function Vc(t,e){return t!=="more"||e?!1:Os()>0}function Hc(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function xs(){const t=Lr.find(r=>r.id===D)||Lr[0];let e="";return t.id==="discord-members"?e=Qc():t.id==="eso-members"?e=Xc():t.id==="more"?e=Yd():t.id==="settings"?e=vl():e=`
      <div class="guildsync-tab-panel" data-active-tab="${f(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${c(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${de?Ld():""}
    ${wt?iu():""}
    ${Ne?gd():""}
    ${gt?Al():""}
    ${bt?$l():""}
    ${vt?Cl():""}
    ${ze?jl():""}
    ${St?Yc():""}
  `}function Wc(){return St||ot||at||de||wt||Ne||gt||bt||vt||ze||Ge}function jc(){return St?!1:ze?(Dn(),!0):vt?(En(),!0):bt?(Ln(),!0):gt?(An(),!0):Ne?(ft(),!0):wt?(Mr(),!0):de?(de=!1,d(),!0):ot?(ot=!1,d(),!0):at?(at=!1,d(),!0):Ge?(Ge=!1,d(),!0):!1}function zc(t){t.key==="Escape"&&jc()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",zc,!0),window.guildSyncGlobalModalEscapeAttached=!0);function qs(t={}){return new Promise(e=>{It&&It(!1),St=!0,Pn={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},It=e,d()})}function Er(t=!1){const e=It;It=null,St=!1,Pn=null,e&&e(t===!0),d()}function Yc(){const t=Pn||{};return`
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
  `}function Fi(t){var n,i,s,o;const e=(i=(n=t.target).closest)==null?void 0:i.call(n,"#cancelGuildSyncConfirmButton"),r=(o=(s=t.target).closest)==null?void 0:o.call(s,"#acceptGuildSyncConfirmButton");if(!(!e&&!r)){if(t.preventDefault(),t.stopPropagation(),e){Er(!1);return}r&&Er(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",Fi,!0),document.addEventListener("pointerup",Fi,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function Kc(){if(!St)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=n=>{n.preventDefault(),n.stopPropagation(),Er(!1)}),e&&(e.onclick=n=>{n.preventDefault(),n.stopPropagation(),Er(!0)});const r=document.querySelector(".guildsync-confirm-overlay");r&&(r.onclick=n=>{n.target===r&&(n.preventDefault(),n.stopPropagation())})}function Ps(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(Wc())return;const e=t.dataset.tabId;!e||e===D||(D=e,d())})})}function Jc(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function d(t={}){ze&&Jc();const e=document.querySelector(".guildsync-tabs"),r=document.querySelector("#guildSyncTabContent");e&&(e.innerHTML=Is()),r&&(r.innerHTML=xs()),Ps(),Jo(),Eo(),xo(),Ws(),Lo(),mo(),go(),yo(),bo(),io(),Do(),t.restoreDiscordSearchFocus&&Fu(),t.restoreRosterSearchFocus&&Gu(),D==="discord-members"&&(l==null?void 0:l.connected)&&x.length===0&&!qt&&Zn({silent:!0}),D==="eso-members"&&(l==null?void 0:l.connected)&&J.length===0&&!Re&&!qi&&(qi=!0,At({silent:!0})),D==="more"&&(l==null?void 0:l.connected)&&P.length===0&&!$e&&ne({silent:!0}),(D==="discord-members"||D==="eso-members"||D==="settings")&&(l==null?void 0:l.connected)&&E.length===0&&!q&&Xt({silent:!0})}function Qc(){const t=xu(),e=Uu(),r=Array.from(Ze),n=Array.from(et);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${c(Qo(Or))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${qt||vr?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${vr?"Refreshing...":"Refresh Discord Data"}</span>
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
              ${e.filter(i=>!Ze.has(i)).map(i=>`<option value="${f(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All roles</span>':r.map(i=>ju(i)).join("")}
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
              ${Fn.filter(i=>!et.has(i.id)).map(i=>`<option value="${f(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(i=>Fs("discord",i)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${ar("username","Username")}
                ${ar("global_name","Global Name")}
                ${ar("server_nickname","Server Nickname")}
                ${ar("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>Vu(i)).join(""):Hu()}
            </tbody>
          </table>
        </div>
      </div>
      ${at?dl():""}
    </div>
  `}function Xc(){const t=nl(),e=ol(),r=Array.from(Oe),n=Array.from(tt);return`
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
          <span class="discord-last-refresh">Last Refresh: ${c(Id(Sr))}</span>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${Re?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Re?"Refreshing...":"Refresh Roster Data"}</span>
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
              ${e.filter(i=>!Oe.has(i)).map(i=>`<option value="${f(i)}">${c(i)}</option>`).join("")}
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
              ${Fn.filter(i=>!tt.has(i.id)).map(i=>`<option value="${f(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(i=>Fs("roster",i)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${or("account_name","Account Name")}
                ${or("rank","Rank")}
                ${or("joined","Joined")}
                ${or("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map((i,s)=>Zc(i,s)).join(""):el()}
            </tbody>
          </table>
        </div>
      </div>
      ${ot?pl():""}
    </div>
  `}function Zc(t,e=-1){const r=tl(t.rank||""),n=r?` style="color: ${r};"`:"";return`
    <tr class="eso-roster-row${e===$?" roster-search-active-row":""}"${n} data-roster-row-index="${f(String(e))}" data-eso-account-name="${f(t.account_name||"")}">
      <td>${c(t.account_name||"")}</td>
      <td>${Gn(t.rank||"")}</td>
      <td>${c(Fr(t.joined))}</td>
      <td class="member-link-action-cell">${lo({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function el(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">${c(Re?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function tl(t){const e=String(t||"").trim(),r=ti(e);return Wr(r==null?void 0:r.role_color)}function Gn(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${c(e)}</span>`}function rl(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":Gn(e)}function nl(){const t=wr.trim().toLowerCase(),e=J.filter(r=>{const n=String(r.rank||"").trim();if(Oe.size>0&&!Oe.has(n)||!Vs(tt,wn(r)))return!1;if(!t)return!0;const i=Fr(r.joined),s=zn(r.joined),o=wn(r),a=Us(r.account_name||"");return[r.account_name,n,i,s,r.joined,o,a].map(m=>String(m||"").toLowerCase()).join(" ").includes(t)});return il(e)}function il(t){if(!oe||!I)return t;const e=I==="desc"?-1:1;return[...t].sort((r,n)=>{const i=Gi(r,oe),s=Gi(n,oe),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:String(r.account_name||"").localeCompare(String(n.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function Gi(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const r=Number(t.joined||0);return Number.isFinite(r)&&r>0?String(r).padStart(16,"0"):""}if(e==="linked"){const r=wn(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[r]||"9"} ${r} ${Us(t.account_name||"")}`}return String(t.account_name||"")}function sl(t){const r=new Set(["account_name","rank","joined","linked"]).has(t)?t:"account_name";oe!==r?(oe=r,I="asc"):I==="asc"?I="desc":I==="desc"?(oe="",I=""):(oe=r,I="asc"),$=-1,d()}function or(t,e,r=""){const n=oe===t&&Boolean(I),i=n?I==="asc"?"ascending":"descending":"none",s=n?I==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${f(r)}" aria-sort="${f(i)}">
      <button
        class="discord-sort-header roster-sort-header${n?" active":""}"
        type="button"
        data-roster-sort-column="${f(t)}"
        title="Sort ${f(e)}${n&&I==="asc"?" descending":n&&I==="desc"?" not sorted":" ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function ol(){return Array.from(new Set(J.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function al(t){const e=ti(t),r=Wr(e==null?void 0:e.role_color),n=ni(r),i=ri(r,n);return`
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
  `}function cl(t){const e=Fn.find(r=>r.id===t);return e?e.label:t}function Fs(t,e){const r=t==="roster"?"roster":"discord",n=cl(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${r}-link-status-filter="${f(e)}"
      title="Remove ${f(n)} link filter"
    >
      <span>${c(n)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Gs(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked"&&String(r.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function ll(t){return Gs(Pr(t==null?void 0:t.discord_id))}function wn(t){return Gs(qr(t==null?void 0:t.account_name))}function Us(t){const e=qr(t),r=co({mode:"eso-to-discord",esoAccountName:t}),n=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean),i=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="candidate").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean);return[r.label,r.title,n.join(" "),i.join(" ")].filter(Boolean).join(" ")}function Vs(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function dl(){return`
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

        ${le?`<div class="discord-data-error">${c(le)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${ul()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${He?`: ${c(He)}`:""}</div>
            ${fl()}
          </div>
        </div>
      </div>
    </div>
  `}function ul(){return Le&&H.length===0?'<div class="roster-history-muted">Searching...</div>':H.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${H.map((t,e)=>`
        <button class="roster-history-match${e===Y||t.discord_id===ct?" is-selected":""}" type="button" data-discord-history-id="${f(t.discord_id)}" data-discord-history-name="${f(_n(t))}">
          <span>${c(_n(t))}</span>
          <strong>${c(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===Y?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function fl(){return ct?Le&&Ae.length===0?'<div class="roster-history-muted">Loading history...</div>':Ae.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${Ae.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(zn(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${c(hl(t.event_type))}</td>
              <td>${c(t.old_value||"")}</td>
              <td>${c(t.new_value||"")}</td>
              <td>${c(t.initiator||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function _n(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function hl(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function pl(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(Ft)}" />
        </div>

        ${ce?`<div class="discord-data-error">${c(ce)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${ml()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${Me?`: ${c(Me)}`:""}</div>
            ${gl()}
          </div>
        </div>
      </div>
    </div>
  `}function ml(){return _e&&V.length===0?'<div class="roster-history-muted">Searching...</div>':V.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${V.map((t,e)=>`
        <button class="roster-history-match${e===z||t.account_name===Me?" is-selected":""}" type="button" data-roster-history-account="${f(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <strong>${c(t.rank||"")}</strong>
          ${e===z?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function gl(){return Me?_e&&we.length===0?'<div class="roster-history-muted">Loading history...</div>':we.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${we.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(zn(t.timestamp))}</td>
              <td>${c(t.event_type||"")}</td>
              <td>${rl(t.rank)}</td>
              <td>${c(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function Jt(){return typeof window<"u"&&window.GUILDSYNC_WEB===!0}function Hs(){if(!Jt())return!0;try{return localStorage.getItem(As)==="1"}catch{return!1}}function yl(){return!Jt()||Hs()?"":`
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
  `}function bl(){const t=document.querySelector("#webSavedVarsUploadBannerDismissButton");!t||t.addEventListener("click",()=>{var e,r;try{localStorage.setItem(As,"1")}catch{}(e=document.querySelector("#webSavedVarsUploadBannerHost"))==null||e.remove(),(r=document.querySelector(".guildsync-tab-content"))==null||r.classList.add("web-upload-banner-dismissed")})}function vl(){return`
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
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${me?"disabled":""}>
              ${me?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${ge?"disabled":""}>
              ${ge?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${ye?"disabled":""}>
              ${ye?"Loading...":"Run"}
            </button>
          </article>
        </section>

        <article class="report-option-card">
          <div class="report-option-copy">
            <h3>ESO / Discord Member Links</h3>
            <p>Review automatic ESO-to-Discord links, accept candidate matches, unlink blocked matches, or run the matcher again after roster or Discord refreshes.</p>
          </div>
          <button id="runMemberLinksReportButton" class="refresh-discord-button report-run-button" type="button" ${q?"disabled":""}>
            ${q?"Loading...":"Run"}
          </button>
        </article>
      </div>
    </div>
  `}function Ws(){var t,e,r,n;D==="settings"&&((t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>Ys()),(e=document.querySelector("#runDiscordRankAuditReportButton"))==null||e.addEventListener("click",()=>Ml()),(r=document.querySelector("#runDiscordLastSeenReportButton"))==null||r.addEventListener("click",()=>Bl()),(n=document.querySelector("#runMemberLinksReportButton"))==null||n.addEventListener("click",()=>Vl()))}function mr(){return Jt()&&_()&&(l==null?void 0:l.connected)===!0}function js(){if(!Jt())return null;let t=document.querySelector("#webSavedVarsFullScreenDropOverlay");return t||(t=document.createElement("div"),t.id="webSavedVarsFullScreenDropOverlay",t.className="web-savedvars-fullscreen-drop-overlay",t.setAttribute("aria-hidden","true"),t.innerHTML=`
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
  `,document.body.appendChild(t),t)}function Ui(){const t=js();!t||(t.classList.add("is-visible"),t.setAttribute("aria-hidden","false"))}function an(){const t=document.querySelector("#webSavedVarsFullScreenDropOverlay");!t||(t.classList.remove("is-visible"),t.setAttribute("aria-hidden","true"))}function $t(t){var r;return Array.from(((r=t==null?void 0:t.dataTransfer)==null?void 0:r.types)||[]).includes("Files")}function kl(t){!(t!=null&&t.dataTransfer)||(t.dataTransfer.dropEffect=mr()?"copy":"none")}function zs(t){const e=String(t||"").split(/[\\/]/).pop();return Tc.get(e)||""}function Sl(){if(!Jt())return;js();const t=e=>{!$t(e)||(e.preventDefault(),e.stopPropagation(),kl(e))};document.addEventListener("dragenter",e=>{!$t(e)||(t(e),Ke+=1,mr()&&Ui())},!0),document.addEventListener("dragover",e=>{t(e),$t(e)&&mr()&&Ui()},!0),document.addEventListener("dragleave",e=>{!$t(e)||(e.preventDefault(),e.stopPropagation(),Ke=Math.max(0,Ke-1),Ke===0&&an())},!0),document.addEventListener("drop",async e=>{var n;if(!$t(e))return;if(t(e),Ke=0,an(),!mr()){h("web-savedvars-drop-not-ready","SavedVariables drag/drop is only available while logged in and connected to the GuildSync server.",{ttlMs:p});return}const r=Array.from(((n=e.dataTransfer)==null?void 0:n.files)||[]);await wl(r)},!0),window.addEventListener("blur",()=>{Ke=0,an()})}async function wl(t=[]){if(sn){h("web-savedvars-drop-busy","A SavedVariables upload is already processing. Please wait for it to finish.",{ttlMs:p});return}const e=Array.from(t||[]).filter(Boolean);if(!e.length){h("web-savedvars-drop-empty","No file was dropped.",{ttlMs:p});return}const r=e.find(n=>!zs(n.name));if(r){h("web-savedvars-drop-invalid",`Unsupported file: ${r.name}. Drop only GuildSyncBanking.lua, GuildSyncRoster.lua, or GuildSyncApplications.lua.`,{ttlMs:p});return}sn=!0;try{for(const n of e)await _l(n)}finally{sn=!1}}async function _l(t){const e=zs(t.name);if(!e)throw new Error(`Unsupported file: ${t.name}`);const r=`web-savedvars-upload-${e}`,n=await t.text();if(!String(n||"").trim())throw new Error(`${t.name} is empty.`);h(r,`Uploading ${t.name}...`);try{const i=await A("guildsync:upload-savedvars-raw",{file_name:t.name,raw_lua_text:n,source:"web-drag-drop"},12e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||`${t.name} upload was rejected.`);e==="banking"?await ne({silent:!0}):e==="roster"&&(await At({silent:!0}),await Xt({silent:!0})),h(r,i.message||`${t.name} uploaded and processed.`,{ttlMs:p})}catch(i){throw h(r,S(i),{ttlMs:p}),i}jr("version")}function Ys(){gt=!0,xe="",d(),So()}function An(){gt=!1,xe="",d()}function Al(){const t=Ll(),e=El(),r=yt.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${me?"disabled":""}>${me?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(r))} total row${r===1?"":"s"}</span>
        </div>

        ${xe?`<div class="discord-data-error">${c(xe)}</div>`:""}

        <div class="report-results-content">
          ${me&&r===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!me&&r===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${r>0?Vi("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${r>0?Vi("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${c(Js())}</textarea>
      </div>
    </div>
  `}function Ll(){return yt.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function El(){return yt.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function Vi(t,e,r,n){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${c(t)}</h4>
          <p>${c(e)}</p>
        </div>
        <span>${c(String(r.length))} row${r.length===1?"":"s"}</span>
      </div>
      ${r.length>0?Dl(r):`<div class="roster-history-muted report-section-empty">${c(n)}</div>`}
    </section>
  `}function Dl(t=yt){return`
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
              <td>${c(e.account_name||"")}</td>
              <td>${Gn(e.rank||"")}</td>
              <td>${c(Fr(e.joined))}</td>
              <td>${c(Hr(e.purchased_tickets||0))}</td>
              <td>${c(Ks(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Ks(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function Js(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Discord Link"]];for(const e of yt){const r=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([r,e.account_name||"",e.rank||"",Fr(e.joined),Hr(e.purchased_tickets||0),Ks(e)])}return t.map(e=>e.map(Ur).join("	")).join(`
`)}async function Rl(){const t=Js();if(await Vr(t)){h("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#associateTicketReportTsv");r&&(r.focus(),r.select()),h("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function Ml(){bt=!0,qe="",d(),ko()}function Ln(){bt=!1,qe="",d()}function $l(){const t=Gt.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${ge?"disabled":""}>${ge?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${qe?`<div class="discord-data-error">${c(qe)}</div>`:""}

        <div class="report-results-content">
          ${ge&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!ge&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?Tl(Gt):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${c(Zs())}</textarea>
      </div>
    </div>
  `}function Tl(t=Gt){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-rank-audit-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-rank-audit-table">
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
              <td>${c(Qs(e))}</td>
              <td>${c(e.discord_rank||"No matching rank role")}</td>
              <td>${c(e.eso_accounts||"No linked ESO account")}</td>
              <td>${c(e.eso_rank||"None")}</td>
              <td>${c(Xs(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Qs(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function Xs(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function Zs(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of Gt)t.push([Qs(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",Xs(e)]);return t.map(e=>e.map(Ur).join("	")).join(`
`)}async function Nl(){const t=Zs();if(await Vr(t)){h("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#discordRankAuditReportTsv");r&&(r.focus(),r.select()),h("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function Bl(){vt=!0,Pe="",kt="",d(),vo(),E.length===0&&!q&&Xt({silent:!0})}function En(){vt=!1,Pe="",kt="",be="",rt="",ve="",d()}function Cl(){const t=Un(),e=qn.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${ye?"disabled":""}>${ye?"Loading...":"Run Again"}</button>
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
            value="${f(kt)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${be===""?"selected":""}>All link statuses</option>
            <option value="linked" ${be==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${be==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${be==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${Pe?`<div class="discord-data-error discord-last-seen-report-error">${c(Pe)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${ye&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!ye&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?Il(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${c(to(t))}</textarea>
      </div>
    </div>
  `}function Il(t=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${Tt("name","Discord Member")}</th>
            <th>${Tt("eso","Linked ESO Account")}</th>
            <th>${Tt("date","Last Seen")}</th>
            <th>${Tt("days","Days Since")}</th>
            <th>${Tt("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr class="discord-last-seen-row ${f(Gl(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${f(We(e).status)}" data-discord-last-seen-search="${f(eo(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${Fl(e)}
                  <span>${c(ut(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${xl(e)}</td>
              <td>${c(Vn(e.last_seen))}</td>
              <td>${c(Hn(e.last_seen))}</td>
              <td>${c(Dr(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function Tt(t,e){const r=rt===t,n=r?ve==="asc"?"\u25B2":"\u25BC":"\u2195",i=r?`${e}: ${ve==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${r?" active":""}" type="button" data-discord-last-seen-sort="${f(t)}" title="${f(i)}">
      <span>${c(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${c(n)}</span>
    </button>
  `}function Un(){const t=[...qn],e=rt,r=ve;if(!e||!r)return t;const n=r==="desc"?-1:1;return t.sort((i,s)=>{var o,a;if(e==="date"){const u=Number(i.last_seen||0)||0,m=Number(s.last_seen||0)||0;return(u-m)*n}if(e==="days")return(Hi(i.last_seen)-Hi(s.last_seen))*n;if(e==="action")return Dr(i.last_seen_action).localeCompare(Dr(s.last_seen_action),void 0,{sensitivity:"base"})*n;if(e==="eso"){const u=We(i),m=We(s),v={linked:0,candidate:1,unlinked:2},g=((o=v[u.status])!=null?o:9)-((a=v[m.status])!=null?a:9);return g!==0?g*n:u.esoAccountName.localeCompare(m.esoAccountName,void 0,{sensitivity:"base"})*n}return ut(i).localeCompare(ut(s),void 0,{sensitivity:"base"})*n})}function Ol(t){rt!==t?(rt=t,ve="asc"):ve==="asc"?ve="desc":(rt="",ve=""),d()}function ut(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function eo(t){return[ut(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,ql(t),Vn(t==null?void 0:t.last_seen),Hn(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function We(t){const e=id(t==null?void 0:t.discord_id),r=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),n=String((e==null?void 0:e.eso_account_name)||"").trim();return r==="linked"&&n?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:n,title:`Linked ESO account: ${n}`}:(r==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&n?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:n,title:`Fuzzy ESO account candidate: ${n}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function xl(t){const e=We(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${f(e.className)}"
      title="${f(e.title)}"
      aria-label="${f(e.label)}"
      role="img"
    ></span>
  `}function ql(t){const e=We(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function Pl(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!r)return"";if(/^https?:\/\//i.test(e))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function Fl(t){const e=ut(t),r=e?e.slice(0,2).toUpperCase():"?",n=Pl(t);return n?`<span class="discord-member-avatar"><img src="${f(n)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${c(r)}</span>`}function Vn(t){const e=Number(t);if(!e)return"Never";const r=new Date(e*1e3);if(Number.isNaN(r.getTime()))return String(t||"");const n=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(r).reduce((i,s)=>(i[s.type]=s.value,i),{});return`${n.month}/${n.day}/${n.year} ${n.hour}:${n.minute} ${n.dayPeriod}`}function Gl(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const r=(Date.now()-e*1e3)/864e5;return r>30?"discord-last-seen-red":r>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function Hn(t){const e=Number(t);if(!e)return"Never";const r=Date.now()-e*1e3;if(!Number.isFinite(r))return"";if(r<0)return"0 days";const n=Math.floor(r/864e5);return`${n} day${n===1?"":"s"}`}function Hi(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const r=Date.now()-e*1e3;return Number.isFinite(r)?r<0?0:Math.floor(r/864e5):Number.POSITIVE_INFINITY}function Dr(t){return String(t||"").trim()||"None tracked"}function to(t=Un()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const r of t){const n=We(r);e.push([ut(r),n.label||"",n.esoAccountName||"",Vn(r==null?void 0:r.last_seen),Hn(r==null?void 0:r.last_seen),Dr(r==null?void 0:r.last_seen_action),(r==null?void 0:r.username)||"",(r==null?void 0:r.discord_id)||""])}return e.map(r=>r.map(Ur).join("	")).join(`
`)}async function Ul(){const t=Un().filter(i=>{const s=re(kt),o=String(be||"").trim().toLowerCase(),a=!s||re(eo(i)).includes(s),u=!o||We(i).status===o;return a&&u}),e=to(t);if(await Vr(e)){h("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#discordLastSeenReportTsv");n&&(n.focus(),n.select()),h("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function Vl(){ze=!0,W="",d(),E.length===0&&!q&&Xt({silent:!0})}function Dn(){ze=!1,xr="",nt="",jt="",zt="",ae=-1,d()}function ro(t){return[...new Set((Array.isArray(E)?E:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function no(t,e){return t.map(r=>`<option value="${f(r)}" ${e===r?"selected":""}>${c(r)}</option>`).join("")}function Hl(){return no(ro("link_status"),jt)}function Wl(){return no(ro("link_method"),zt)}function jl(){return`
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
          <button id="refreshMemberLinksButton" class="clear-discord-filters-button" type="button" ${q?"disabled":""}>Refresh Links</button>
          <button id="runMemberAutoLinkButton" class="refresh-discord-button" type="button" ${q?"disabled":""}>${q?"Running...":"Run Auto-Linking"}</button>
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
            value="${f(xr)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${jt===""?"selected":""}>All statuses</option>
            ${Hl()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${zt===""?"selected":""}>All methods</option>
            ${Wl()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${nt===""?"selected":""}>All actions</option>
            <option value="needs-link" ${nt==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${nt==="can-unlink"?"selected":""}>Unlink Available</option>
          </select>
        </div>

        ${W?`<div class="discord-data-error member-links-report-error">${c(W)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${Jl()}
        </div>
      </div>
    </div>
  `}function io(){var r,n,i,s,o,a;if(!ze)return;(r=document.querySelector("#closeMemberLinksReportButton"))==null||r.addEventListener("click",Dn),(n=document.querySelector("#refreshMemberLinksButton"))==null||n.addEventListener("click",()=>Xt()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>rd());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",Ql),t.addEventListener("keydown",td)),(s=document.querySelector("#memberLinksReportActionFilter"))==null||s.addEventListener("change",Xl),(o=document.querySelector("#memberLinksReportStatusFilter"))==null||o.addEventListener("change",Zl),(a=document.querySelector("#memberLinksReportMethodFilter"))==null||a.addEventListener("change",ed),Qt(),document.querySelectorAll("[data-accept-member-candidate]").forEach(u=>{u.addEventListener("click",()=>oo(u.dataset.acceptMemberCandidate||"",u.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(u=>{u.addEventListener("click",()=>nd(u.dataset.unlinkMemberLink||"",u.dataset.unlinkMemberLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",u=>{u.target===e&&Dn()})}function Wi(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function ji(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function zl(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Yl(t){return[...Array.isArray(t)?t:[]].sort((e,r)=>{const n=Wi(e)-Wi(r);if(n!==0)return n;const i=ji(e).localeCompare(ji(r),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((r==null?void 0:r.discord_user_id)||""),void 0,{sensitivity:"base"})})}function Kl(t){const e=Rn(t);let r="";e==="Username"?r=(t==null?void 0:t.discord_username)||"":e==="Global Name"?r=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(r=(t==null?void 0:t.discord_server_nickname)||""),r||(r=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const n=e?` <span class="member-link-report-match-field">(${c(e)})</span>`:"";return`<span class="member-link-report-discord-name">${c(r)}</span>${n}`}function Jl(){return q&&E.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(E)||E.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${Yl(E).map(e=>{var s;const r=String(e.link_status||"").trim().toLowerCase(),n=String(e.link_method||"").trim().toLowerCase(),i=Kl(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${f(zl(e))}"
                data-member-links-report-status="${f(r)}"
                data-member-links-report-method="${f(n)}"
                data-member-links-report-action="${f(r==="linked"?"can-unlink":r==="candidate"?"needs-link":"")}"
              >
                <td>${c(e.eso_account_name||"")}</td>
                <td>${i}</td>
                <td class="member-links-status-col">${c(r||"")}</td>
                <td class="member-links-method-col">${c(n||"")}${Number(e.locked||0)===1?" \u{1F512}":""}</td>
                <td class="member-links-action-col">
                  <div class="member-link-actions">
                    ${r==="candidate"?`<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${f(e.eso_account_name||"")}" data-accept-member-candidate-discord-id="${f(e.discord_user_id||"")}" aria-label="Accept candidate link" title="Accept candidate link">\u2713</button>`:""}
                    ${r==="linked"?`<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${f(e.eso_account_name||"")}" data-unlink-member-link-discord-id="${f(e.discord_user_id||"")}" aria-label="Unlink this ESO/Discord pair" title="Unlink this ESO/Discord pair">\u{1F5D1}</button>`:""}
                  </div>
                </td>
                <td class="member-links-confidence-col">${c(String((s=e.match_confidence)!=null?s:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function so(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function zi(t){const e=so();if(e.forEach(n=>n.classList.remove("member-links-report-row-active")),e.length===0){ae=-1;return}ae=Math.max(0,Math.min(t,e.length-1));const r=e[ae];r.classList.add("member-links-report-row-active"),r.scrollIntoView({block:"nearest"})}function Qt(){const t=re(xr),e=String(nt||"").trim().toLowerCase(),r=String(jt||"").trim().toLowerCase(),n=String(zt||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let s=0;i.forEach(a=>{const u=re(a.dataset.memberLinksReportSearch||""),m=String(a.dataset.memberLinksReportAction||"").trim().toLowerCase(),v=String(a.dataset.memberLinksReportStatus||"").trim().toLowerCase(),g=String(a.dataset.memberLinksReportMethod||"").trim().toLowerCase(),Ye=(!t||u.includes(t))&&(!e||m===e)&&(!r||v===r)&&(!n||g===n);a.hidden=!Ye,a.classList.remove("member-links-report-row-active"),Ye&&(s+=1)});const o=document.querySelector("#memberLinksReportSearchEmpty");o&&(o.hidden=s!==0),ae=-1}function Ql(t){xr=t.target.value||"",Qt()}function Xl(t){nt=t.target.value||"",Qt()}function Zl(t){jt=t.target.value||"",Qt()}function ed(t){zt=t.target.value||"",Qt()}function td(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=so();if(e.length===0)return;if(t.key==="ArrowDown"){const n=ae<0?0:ae+1;zi(n>=e.length?e.length-1:n);return}const r=ae<0?e.length-1:ae-1;zi(r<0?0:r)}async function Xt(t={}){if(!(l!=null&&l.connected)){W="You must be connected to load member links.",d();return}q=!0,W="",t.silent||d();try{const e=await A("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");E=Array.isArray(e.links)?e.links:[]}catch(e){W=S(e)}finally{q=!1,d()}}async function rd(){if(!(l!=null&&l.connected)||!b.logged_in){W="You must be logged in and connected to run auto-linking.",d();return}q=!0,W="",d();try{const t=await A("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");E=Array.isArray(t.links)?t.links:[],h("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:p})}catch(t){W=S(t)}finally{q=!1,d()}}async function oo(t,e=""){try{const r=await A("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to accept candidate.");E=Array.isArray(r.links)?r.links:E,h("member-link-accepted",r.message||"Candidate accepted as a link.",{ttlMs:p})}catch(r){W=S(r),h("member-link-accept-error",W,{ttlMs:p})}}async function nd(t,e=""){if(!!await qs({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const n=await A("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to unlink member.");E=Array.isArray(n.links)?n.links:E,h("member-link-unlinked",n.message||"Member link removed.",{ttlMs:p})}catch(n){W=S(n)}d()}}function je(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function qr(t){const e=je(t);return e?E.filter(r=>je(r.eso_account_name)===e):[]}function Pr(t){const e=String(t||"").trim();return e?E.filter(r=>String(r.discord_user_id||"").trim()===e):[]}function ao(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const r=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(r.length>0){const i=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const s=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return s||r[0]}const n=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return n||e[0]}function id(t){return ao(Pr(t))}function sd(t){return`${je(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function Wn(){return w?w.mode==="discord-to-eso"?Pr(w.discordUserId):qr(w.esoAccountName):[]}function od(t){const e=String(t||"").trim(),r=x.find(n=>String(n.discord_id||"").trim()===e);return r&&(r.server_nickname||r.global_name||r.username||r.discord_id)||e}function co(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?Pr(t.discordUserId):qr(t.esoAccountName),n=ao(r),i=String((n==null?void 0:n.link_status)||"").trim().toLowerCase(),s=r.filter(a=>String(a.link_status||"").trim().toLowerCase()==="linked").length,o=r.filter(a=>String(a.link_status||"").trim().toLowerCase()==="candidate").length;return s>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?s===1?n.eso_account_name:`${s} ESO accounts`:s===1?n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member":`${s} Discord accounts`}`}:i==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?n.eso_account_name:n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member"}`}:i==="blocked"||Number((n==null?void 0:n.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function lo(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,n=co(t);return`
    <button
      class="member-link-status-dot member-link-status-${f(n.className)}"
      type="button"
      title="${f(n.title)}"
      aria-label="${f(n.label)}"
      data-open-member-link-dialog="${f(e)}"
      data-member-link-value="${f(r||"")}"
    ></button>
  `}function ad(){return w?w.mode==="discord-to-eso"?od(w.discordUserId):w.esoAccountName||"":""}function uo(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function Rn(t){const e=uo((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const r=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(r.includes("discord_username")||r.includes("username"))return"Username";if(r.includes("discord_display_name")||r.includes("global")||r.includes("display"))return"Global Name";if(r.includes("discord_server_nickname")||r.includes("server")||r.includes("nickname"))return"Server Nickname";const n=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(n==="exact"||n==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",s=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const a of s){const u=cd(i,a.value);(!o||u>o.score)&&(o={...a,score:u})}if(o&&o.score>0)return o.field}return""}function re(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function cd(t,e){const r=re(t),n=re(e);if(!r||!n)return 0;if(r===n)return 100;if((r.includes(n)||n.includes(r))&&Math.min(r.length,n.length)>=4)return 88;const i=Math.abs(r.length-n.length),s=[...r].findIndex((a,u)=>a!==n[u]),o=s===-1?Math.min(r.length,n.length):s;return Math.max(0,Math.min(75,Math.round(o*10-i*3)))}function ld(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function dd(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function ud(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),r=ld(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${c(r)}</span>`}function fd(t){var a;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",r=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",n=String(t.link_status||"").trim().toLowerCase(),o=n==="linked"?`<button
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
        >\u2713</button>`:"";return`
    <div class="member-link-current-card">
      <div class="member-link-current-details">
        <div><span>ESO:</span> ${c(t.eso_account_name||"")}</div>
        <div><span>Discord:</span> ${c(e)}</div>
        <div><span>Status:</span> ${ud(t)} \xB7 ${c(dd(t.link_method))} \xB7 ${c(String((a=t.match_confidence)!=null?a:""))}% \xB7 ${c(r)}</div>
        ${Rn(t)?`<div><span>Matched:</span> Matched on ${c(Rn(t))}</div>`:""}
      </div>
      ${o}
    </div>
  `}function hd(){const t=Wn();return t.length?[...t].sort((r,n)=>{var u,m;const i=String(r.link_status||"").trim().toLowerCase(),s=String(n.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},a=((u=o[i])!=null?u:9)-((m=o[s])!=null?m:9);return a!==0?a:Number(n.match_confidence||0)-Number(r.match_confidence||0)}).map(r=>fd(r)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function pd(){if(lt)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(ue)return`<div class="discord-data-error">${c(ue)}</div>`;if(!Array.isArray(Fe)||Fe.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(Wn().map(r=>sd(r))),e=[...Fe].filter(r=>{const n=(w==null?void 0:w.mode)==="discord-to-eso"?`${je(r.account_name)}::${String(w.discordUserId||"").trim()}`:`${je(w==null?void 0:w.esoAccountName)}::${String(r.discord_id||"").trim()}`;return!t.has(n)}).sort((r,n)=>{const i=Number(n.confidence||0)-Number(r.confidence||0);return i!==0?i:Yi(r).localeCompare(Yi(n),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(r=>md(r)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function Yi(t){return((w==null?void 0:w.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function md(t,e={}){var g,y,O;const r=(w==null?void 0:w.mode)||"",n=r==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=uo(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),s=r==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[s,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),a=r==="discord-to-eso"?t.account_name:t.discord_id,u=e.disabled===!0,m=[n,s,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),v=[n,o,`${(g=t.confidence)!=null?g:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${f(a||"")}" data-member-link-option-search="${f(m)}" title="${f(v)}" ${u?"disabled":""}>
      <span class="member-link-option-name" title="${f(n||"")}">${c(n||"")}</span>
      <span class="member-link-option-subtitle" title="${f(o||"")}">${c(o||"")}</span>
      <span class="member-link-option-confidence" title="${f(String((y=t.confidence)!=null?y:0))}%">${c(String((O=t.confidence)!=null?O:0))}%</span>
    </button>
  `}function gd(){const t=(w==null?void 0:w.mode)||"",e=ad(),r=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
    <div class="roster-history-overlay member-link-dialog-overlay" role="dialog" aria-modal="true" aria-labelledby="memberLinkDialogTitle">
      <div class="roster-history-dialog member-link-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="memberLinkDialogTitle">Member Link</h3>
            <p>${c(e)} \u2192 choose ${c(r)}.</p>
          </div>
          <button id="closeMemberLinkDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close member link window" title="Close">\xD7</button>
        </div>

        <div class="member-link-dialog-body">
          <section class="member-link-dialog-section member-link-current-section">
            ${hd()}
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
              value="${f(Yt)}"
            />
            ${pd()}
          </section>
        </div>

      </div>
    </div>
  `}async function fo(t,e){if(!(l!=null&&l.connected)||!_()){h("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:p});return}Ne=!0,w=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},Fe=[],lt=!0,ue="",Yt="",X=-1,d();try{if(!Array.isArray(E)||E.length===0){const i=await A("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(E=Array.isArray(i.links)?i.links:[])}const n=await A("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load link suggestions.");Fe=Array.isArray(n.options)?n.options:[]}catch(r){ue=S(r)}finally{lt=!1,d()}}function ft(){document.removeEventListener("keydown",Mn),Ne=!1,w=null,Fe=[],lt=!1,ue="",Yt="",X=-1,d()}function ho(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function Ki(t){const e=ho();if(e.forEach(n=>n.classList.remove("member-link-option-row-active")),e.length===0){X=-1;return}X=Math.max(0,Math.min(t,e.length-1));const r=e[X];r.classList.add("member-link-option-row-active"),r.scrollIntoView({block:"nearest"})}function po(){const t=re(Yt),e=[...document.querySelectorAll(".member-link-option-row")];let r=0;e.forEach(i=>{const s=re(i.dataset.memberLinkOptionSearch||i.textContent||""),o=!t||s.includes(t);i.hidden=!o,i.classList.remove("member-link-option-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinkSuggestionSearchEmpty");n&&(n.hidden=r!==0),X=-1}function yd(t){Yt=t.target.value||"",po()}function bd(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=ho();if(e.length===0)return;if(t.key==="ArrowDown"){const n=X<0?0:X+1;Ki(n>=e.length?e.length-1:n);return}const r=X<0?e.length-1:X-1;Ki(r<0?0:r)}function Mn(t){!Ne||t.key==="Escape"&&(t.preventDefault(),ft())}async function vd(t){if(!(!w||!t))try{const e=w.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:w.discordUserId}:{esoAccountName:w.esoAccountName,discordUserId:t},r=await A("guildsync:manual-link-member",e,3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to link members.");E=Array.isArray(r.links)?r.links:E,h("member-link-saved",r.message||"Member link saved.",{ttlMs:p}),ft()}catch(e){ue=S(e),d()}}async function kd(t,e=""){await oo(t,e),ft()}async function Sd(){if(!!w){lt=!0,ue="",d();try{const t=w.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:w.discordUserId}:{mode:"eso-to-discord",accountName:w.esoAccountName},e=await A("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");Fe=Array.isArray(e.options)?e.options:[]}catch(t){ue=S(t)}finally{lt=!1,d()}}}async function wd(t="",e=""){const r=Wn().find(i=>je(i.eso_account_name)===je(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!r||!await qs({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await A("guildsync:manual-unlink-member",{esoAccountName:r.eso_account_name,discordUserId:r.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");E=Array.isArray(i.links)?i.links:E,h("member-link-unlinked",i.message||"Member link removed.",{ttlMs:p}),await Sd()}catch(i){ue=S(i),d()}}function mo(){var r;if(!Ne)return;document.removeEventListener("keydown",Mn),document.addEventListener("keydown",Mn),(r=document.querySelector("#closeMemberLinkDialogButton"))==null||r.addEventListener("click",ft);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",yd),t.addEventListener("keydown",bd),po()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(n=>{n.addEventListener("click",()=>wd(n.dataset.unlinkEsoAccount||"",n.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(n=>{n.addEventListener("click",()=>vd(n.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(n=>{n.addEventListener("click",()=>kd(n.dataset.acceptDialogMemberCandidate||"",n.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",n=>{n.target===e&&ft()})}function go(){var e,r,n;if(!gt)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",An),(r=document.querySelector("#rerunAssociateTicketReportButton"))==null||r.addEventListener("click",()=>So()),(n=document.querySelector("#copyAssociateTicketReportGridButton"))==null||n.addEventListener("click",()=>Rl());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&An()})}function yo(){var e,r,n;if(!bt)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",Ln),(r=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||r.addEventListener("click",()=>ko()),(n=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||n.addEventListener("click",()=>Nl());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Ln()})}function bo(){var n,i,s;if(!vt)return;(n=document.querySelector("#closeDiscordLastSeenReportButton"))==null||n.addEventListener("click",En),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>vo()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>Ul()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(o=>{o.addEventListener("click",()=>Ol(o.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",_d);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",Ad),jn();const r=document.querySelector(".discord-last-seen-report-overlay");r&&r.addEventListener("click",o=>{o.target===r&&En()})}function _d(t){kt=t.target.value||"",jn()}function Ad(t){be=t.target.value||"",jn()}function jn(){const t=re(kt),e=String(be||"").trim().toLowerCase(),r=[...document.querySelectorAll("[data-discord-last-seen-row]")];let n=0;r.forEach(s=>{const o=re(s.dataset.discordLastSeenSearch||s.textContent||""),a=String(s.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),v=(!t||o.includes(t))&&(!e||a===e);s.hidden=!v,v&&(n+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=n!==0)}async function vo(){if(!(l!=null&&l.connected)||!_()){Pe="You must be logged in and connected to run this report.",d();return}ye=!0,Pe="",d();try{const t=await A("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");x=ei(t.members),qn=[...x]}catch(t){Pe=S(t)}finally{ye=!1,d(),C("discordLastSeenReportSearchInput")}}async function ko(){if(!(l!=null&&l.connected)||!_()){qe="You must be logged in and connected to run this report.",d();return}ge=!0,qe="",d();try{const t=await A("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Gt=Array.isArray(t.rows)?t.rows:[]}catch(t){qe=S(t)}finally{ge=!1,d()}}async function So(){if(!(l!=null&&l.connected)||!_()){xe="You must be logged in and connected to run this report.",d();return}me=!0,xe="",d();try{const t=await A("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");yt=Array.isArray(t.rows)?t.rows:[]}catch(t){xe=S(t)}finally{me=!1,d()}}function it(){const t=String(_t||"").trim().toLowerCase(),e={account_name:"Anonymous",rank:"Manual Entry"},r=new Set(["anonymous"]),n=J.filter(i=>String(i.account_name||"").trim()).filter(i=>{const o=String(i.account_name||"").trim().toLowerCase();return!o||r.has(o)||t&&!o.includes(t)?!1:(r.add(o),!0)}).slice().sort((i,s)=>{const o=String(i.account_name||"").toLowerCase(),a=String(s.account_name||"").toLowerCase(),u=t&&o.startsWith(t)?0:1,m=t&&a.startsWith(t)?0:1;return u!==m?u-m:o.localeCompare(a)}).slice(0,19);return[e,...n]}function wo(t=it()){const e=String(L.accountName||"").trim();return t.length===0?'<div class="roster-history-muted manual-ticket-no-matches">No matching guild members found.</div>':t.map((r,n)=>`
        <button class="roster-history-match${n===B||r.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${f(r.account_name)}" role="option" aria-selected="${n===B||r.account_name===e?"true":"false"}">
          <span>${c(r.account_name)}</span>
          <strong>${c(r.rank||"")}</strong>
          ${n===B?"<small>Enter</small>":""}
        </button>
      `).join("")}function _o(){document.querySelectorAll("[data-manual-ticket-account]").forEach(t=>{t.addEventListener("mousedown",e=>{e.preventDefault()}),t.addEventListener("click",()=>{Ao(t.dataset.manualTicketAccount||"")})})}function cn(){const t=document.querySelector("#manualTicketMatchList");if(!t)return;const e=it();B>=e.length&&(B=e.length>0?e.length-1:-1),t.innerHTML=wo(e),_o()}function Ao(t){const e=String(t||"").trim();L.accountName=e,_t=e,K=!1,B=-1,G="",d()}function C(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const r=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(r,r)},0)}function Ld(){const t=K?it():[],e=String(L.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Entry</h3>
            <p>Add a manual banking or raffle entry such as FFTG, officer corrections, or anonymous gold.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${G?`<div class="discord-data-error">${c(G)}</div>`:""}

        <div class="manual-ticket-form">
          <div class="manual-ticket-member-picker">
            <label class="manual-ticket-member-field" for="manualTicketAccountSearchInput">
              <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(_t)}" autocomplete="off" />
            </label>

            ${K?`
              <div id="manualTicketMatchList" class="roster-history-match-list manual-ticket-match-list" role="listbox" aria-label="Matching guild members">
                ${wo(t)}
              </div>
            `:""}
          </div>

          ${e?`<div class="roster-history-muted manual-ticket-selected-member">Selected: ${c(e)}</div>`:""}

          <div class="manual-ticket-entry-row">
            <div class="manual-ticket-type-field" role="group" aria-label="Ticket type">
              <button class="manual-ticket-type-label${L.ticketType!=="monthly"?" is-selected":""}" type="button" data-manual-ticket-type="biweekly" aria-pressed="${L.ticketType!=="monthly"?"true":"false"}">Bi-Weekly</button>
              <button class="manual-ticket-type-switch" type="button" data-manual-ticket-toggle="true" data-selected-type="${L.ticketType==="monthly"?"monthly":"biweekly"}" aria-label="Toggle ticket type. Current selection is ${L.ticketType==="monthly"?"50/50":"Bi-Weekly"}">
                <span class="manual-ticket-type-track" aria-hidden="true"></span>
                <span class="manual-ticket-type-thumb" aria-hidden="true"></span>
              </button>
              <button class="manual-ticket-type-label${L.ticketType==="monthly"?" is-selected":""}" type="button" data-manual-ticket-type="monthly" aria-pressed="${L.ticketType==="monthly"?"true":"false"}">50/50</button>
            </div>
            <label class="manual-ticket-note-field">
              <textarea id="manualTicketNoteInput" class="discord-search-input manual-ticket-note-input" rows="4" placeholder="Enter a reason such as FFTG">${c(L.note)}</textarea>
            </label>
            <div class="manual-ticket-side-fields">
              <label class="manual-ticket-gold-field">
                <input id="manualTicketGoldInput" class="discord-search-input manual-ticket-gold-input" type="number" min="0" step="1" inputmode="numeric" placeholder="Gold Value" value="${f(L.goldValue)}" />
                <span class="manual-ticket-gold-coin" aria-hidden="true"></span>
              </label>
              <label class="manual-ticket-count-field">
                <div class="manual-ticket-number-wrap">
                  <input id="manualTicketCountInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${f(L.tickets)}" />
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
  `}function Lo(){var s,o,a,u,m,v;if(!de)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{de=!1,d()});const t=document.querySelector("#manualTicketAccountSearchInput");if(t){const g=({rerender:y=!1}={})=>{if(K=!0,B=it().length>0?0:-1,y){d(),C("manualTicketAccountSearchInput");return}cn()};t.addEventListener("focus",()=>{K||g({rerender:!0})}),t.addEventListener("click",()=>{K||g({rerender:!0})}),t.addEventListener("input",y=>{_t=y.target.value||"",L.accountName="",K=!0,B=it().length>0?0:-1,cn()}),t.addEventListener("keydown",y=>{if(y.key==="Escape")return;if(!K){(y.key==="ArrowDown"||y.key==="ArrowUp")&&(y.preventDefault(),g({rerender:!0}));return}const O=it();if(y.key==="ArrowDown"||y.key==="ArrowUp"){if(O.length===0)return;y.preventDefault();const Et=y.key==="ArrowDown"?1:-1;B=((B<0?0:B)+Et+O.length)%O.length,cn();return}if(y.key!=="Enter")return;y.preventDefault();const fe=O[B>=0?B:0];fe!=null&&fe.account_name&&Ao(fe.account_name)})}_o(),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",g=>{L.note=g.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(g=>{g.addEventListener("click",()=>{const y=String(g.dataset.manualTicketType||"").trim().toLowerCase();L.ticketType=y==="monthly"?"monthly":"biweekly",d()})}),(a=document.querySelector("[data-manual-ticket-toggle]"))==null||a.addEventListener("click",()=>{L.ticketType=L.ticketType==="monthly"?"biweekly":"monthly",d()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",g=>{const y=String(g.target.value||"").replace(/\D/g,"");g.target.value!==y&&(g.target.value=y),L.goldValue=y});const r=document.querySelector("#manualTicketCountInput");r==null||r.addEventListener("input",g=>{const y=String(g.target.value||"").replace(/\D/g,"");g.target.value!==y&&(g.target.value=y),L.tickets=y});const n=g=>{const y=Number(L.tickets)||0,O=Math.max(0,y+g);L.tickets=String(O),r&&(r.value=L.tickets,r.focus())};(u=document.querySelector("#manualTicketCountUpButton"))==null||u.addEventListener("click",()=>n(1)),(m=document.querySelector("#manualTicketCountDownButton"))==null||m.addEventListener("click",()=>n(-1)),(v=document.querySelector("#saveManualBiweeklyTicketButton"))==null||v.addEventListener("click",()=>Ed());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",g=>{g.target===i&&(de=!1,d())})}async function Ed(){const t=String(L.accountName||"").trim(),e=String(L.note||"").trim(),r=String(L.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",n=Number(String(L.goldValue||"").trim()||0),i=Number(String(L.tickets||"").trim()||0);if(K){G="Select a matching guild member or Anonymous from the list before saving.",d(),C("manualTicketAccountSearchInput");return}if(!t){G="Select a matching guild member or Anonymous from the list before saving.",d(),C("manualTicketAccountSearchInput");return}if(!Number.isFinite(n)||n<0){G="Gold value must be zero or greater.",d();return}if(!Number.isFinite(i)||i<0){G="Tickets must be zero or greater.",d();return}const s=t.toLowerCase()==="anonymous";if(s&&Math.floor(i)>0){G="Anonymous cannot be awarded tickets. Use 0 tickets and enter a gold value.",d();return}if(Math.floor(n)===0&&Math.floor(i)===0){G=s?"Enter a gold value for Anonymous when tickets are 0.":"Enter gold or tickets. Both cannot be zero.",d();return}_r=!0,G="",d();try{const o=await A("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:r,gold_value:Math.floor(n),tickets:Math.floor(i)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Failed to add manual entry.");de=!1,L={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},_t="",B=-1,K=!1,await ne({silent:!0}),h("manual-ticket-added",o.message||"Manual entry added.",{ttlMs:p})}catch(o){G=S(o)}finally{_r=!1,d()}}function Eo(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>At());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{ot=!0,ce="",d()});const r=document.querySelector("#rosterMemberSearch");r&&(r.addEventListener("input",o=>{wr=o.target.value||"",vn=o.target.selectionStart,kn=o.target.selectionEnd,$=-1,d({restoreRosterSearchFocus:!0})}),r.addEventListener("keydown",Dd)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{sl(o.dataset.rosterSortColumn||"account_name")})});const n=document.querySelector("#rosterRankFilter");n&&n.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(Oe.add(a),$=-1,d())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRosterRankFilter||"";Oe.delete(a),$=-1,d()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(tt.add(a),$=-1,d())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRosterLinkStatusFilter||"";tt.delete(a),$=-1,d()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>fo(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{wr="",Oe.clear(),tt.clear(),oe="",I="",$=-1,d()}),Rd()}function Dd(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){$=-1;return}t.preventDefault(),t.key==="ArrowDown"?$=$<0?0:Math.min($+1,e.length-1):t.key==="ArrowUp"&&($=$<0?e.length-1:Math.max($-1,0)),e.forEach((n,i)=>{n.classList.toggle("roster-search-active-row",i===$)});const r=e[$];r&&typeof r.scrollIntoView=="function"&&r.scrollIntoView({block:"nearest",inline:"nearest"})}function Rd(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{ot=!1,d()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",r=>{if(Ft=r.target.value||"",z=-1,!Ft.trim()){clearTimeout(on),ce="",V=[],Me="",we=[],_e=!1,d(),C("rosterHistorySearchInput");return}clearTimeout(on),on=setTimeout(()=>{Nd({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(V.length===0)return;r.preventDefault();const i=r.key==="ArrowDown"?1:-1;z=((z<0?0:z)+i+V.length)%V.length,d(),C("rosterHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=V[z>=0?z:0];n!=null&&n.account_name&&Qi(n.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(r=>{r.addEventListener("click",()=>{Qi(r.dataset.rosterHistoryAccount||"")})})}function Do(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{at=!1,d()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",r=>{pe=r.target.value||"",Y=-1,Be+=1;const n=Be;if(clearTimeout(Pi),!pe.trim()){le="",H=[],ct="",He="",Ae=[],Le=!1,d(),C("discordHistorySearchInput");return}Pi=setTimeout(()=>{Md({auto:!0,keepFocus:!0,generation:n})},xc)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(H.length===0)return;r.preventDefault();const i=r.key==="ArrowDown"?1:-1;Y=((Y<0?0:Y)+i+H.length)%H.length,d(),C("discordHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=H[Y>=0?Y:0];n!=null&&n.discord_id&&Ji(n.discord_id,_n(n))})),document.querySelectorAll("[data-discord-history-id]").forEach(r=>{r.addEventListener("click",()=>{Ji(r.dataset.discordHistoryId||"",r.dataset.discordHistoryName||"")})})}async function Md(t={}){const e=Number.isInteger(t.generation)?t.generation:++Be,r=pe.trim();if(e===Be){if(!r){le="",H=[],Y=-1,ct="",He="",Ae=[],Le=!1,d(),t.keepFocus&&C("discordHistorySearchInput");return}Le=!0,le="",H=[],Y=-1,ct="",He="",Ae=[],d(),t.keepFocus&&C("discordHistorySearchInput");try{const n=await A("guildsync:request-discord-member-history",{query:r},3e4);if(e!==Be||r!==pe.trim())return;if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search Discord member history.");H=$d(n.matches),Y=H.length>0?0:-1}catch(n){if(e!==Be||r!==pe.trim())return;le=S(n)}finally{if(e!==Be||r!==pe.trim())return;Le=!1,d(),t.keepFocus&&C("discordHistorySearchInput")}}}async function Ji(t,e="",r={}){const n=String(t||"").trim();if(!!n){ct=n,He=String(e||n).trim(),pe=He,Ae=[],Le=!0,le="",d();try{const i=await A("guildsync:request-discord-member-history-events",{discord_id:n},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");Ae=Td(i.events)}catch(i){le=S(i)}finally{Le=!1,r.keepLoading||d()}}}function $d(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function Td(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n,i,s,o,a,u,m,v,g,y;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((n=(r=e.old_value)!=null?r:e.oldValue)!=null?n:"").trim(),new_value:String((s=(i=e.new_value)!=null?i:e.newValue)!=null?s:"").trim(),event_timestamp:(u=(a=(o=e.event_timestamp)!=null?o:e.eventTimestamp)!=null?a:e.timestamp)!=null?u:"",event_datetime:(v=(m=e.event_datetime)!=null?m:e.eventDatetime)!=null?v:"",initiator:String((y=(g=e.initiator)!=null?g:e.initiatorName)!=null?y:"").trim(),source:String(e.source||"").trim()}}):[]}async function Nd(t={}){const e=Ft.trim();if(!e){ce="",V=[],z=-1,Me="",we=[],_e=!1,d(),t.keepFocus&&C("rosterHistorySearchInput");return}_e=!0,ce="",V=[],z=-1,Me="",we=[],d(),t.keepFocus&&C("rosterHistorySearchInput");try{const r=await A("guildsync:request-roster-rank-history",{query:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search roster rank history.");V=Bd(r.matches),z=V.length>0?0:-1}catch(r){ce=S(r)}finally{_e=!1,d(),t.keepFocus&&C("rosterHistorySearchInput")}}async function Qi(t,e={}){const r=String(t||"").trim();if(!!r){Me=r,Ft=r,we=[],_e=!0,ce="",d();try{const n=await A("guildsync:request-roster-stream-history",{account_name:r},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster stream history.");we=Cd(n.events)}catch(n){ce=S(n)}finally{_e=!1,e.keepLoading||d()}}}function Bd(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function Cd(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(n=(r=e.timestamp)!=null?r:e.timestampS)!=null?n:"",officer:String(e.officer||"").trim()}}):[]}function Ro(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(r=e.joined)!=null?r:""}}).sort((e,r)=>e.account_name.localeCompare(r.account_name)):[]}function Id(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function Fr(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function zn(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function Od(t={}){J=Ro(t.members),Sr=t.last_refresh||new Date().toISOString(),D==="eso-members"&&d(),h("roster-data-updated",`Roster data updated. Loaded ${J.length} member record${J.length===1?"":"s"}.`,{ttlMs:p})}async function At(t={}){if(!!(l!=null&&l.connected)){Re=!0,d();try{const e=await A("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");J=Ro(e.members),Sr=e.last_refresh||Sr,t.silent||h("roster-data-loaded",`Loaded ${J.length} roster member${J.length===1?"":"s"}.`,{ttlMs:p})}catch(e){h("roster-data-error",S(e),{ttlMs:p})}finally{Re=!1,d()}}}async function xd(t={}){var e;if(!!_()){if(!(l!=null&&l.connected)){h("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}Re=!0,d();try{const r=await Sc(t);if(!(r!=null&&r.ok)){h("roster-data-pending",(r==null?void 0:r.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:p});return}const n={local_upload_id:Mo(),authenticated_username:Q(),authenticated_discord_user_id:((e=b==null?void 0:b.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await To(n)}catch(i){throw qd(n),i}await At({silent:!0})}catch(r){h("roster-data-error",S(r),{ttlMs:p})}finally{Re=!1,d()}}}function Mo(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Yn(){try{const t=window.localStorage.getItem(Ds),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function $o(t){window.localStorage.setItem(Ds,JSON.stringify(Array.isArray(t)?t:[]))}function qd(t){const e=String((t==null?void 0:t.local_upload_id)||Mo()),r=Yn().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),$o(r),h("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Pd(t){const e=Yn().filter(r=>(r==null?void 0:r.local_upload_id)!==t);$o(e)}async function Fd(){if(tn||!(l!=null&&l.connected)||!_())return;const t=Yn();if(t.length!==0){tn=!0;try{for(const e of t){if(!(l!=null&&l.connected)||!_())return;await To(e),Pd(e.local_upload_id)}}catch(e){h("roster-data-pending-error",`Pending roster upload retry failed: ${S(e)}`,{ttlMs:p})}finally{tn=!1}}}async function To(t){if(!(l!=null&&l.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await A("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const r=await wc(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return h("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:p}),e}async function Gd(t={}){var e,r;if(!!_()){if(!(l!=null&&l.connected)){h("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}try{const n=await Mc(t);if(!(n!=null&&n.ok)){h("applications-data-info",(n==null?void 0:n.message)||"No application records were found to process.",{ttlMs:p});return}if((Array.isArray((e=n==null?void 0:n.data)==null?void 0:e.records)?n.data.records:[]).length===0){h("applications-data-info",`No application records were found in ${n.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:p});return}const s={local_upload_id:No(),authenticated_username:Q(),authenticated_discord_user_id:((r=b==null?void 0:b.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await Co(s)}catch(o){throw Ud(s),o}}catch(n){h("applications-data-error",S(n),{ttlMs:p})}}}function No(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Kn(){try{const t=window.localStorage.getItem(Rs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Bo(t){window.localStorage.setItem(Rs,JSON.stringify(Array.isArray(t)?t:[]))}function Ud(t){const e=String((t==null?void 0:t.local_upload_id)||No()),r=Kn().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Bo(r),h("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Vd(t){const e=Kn().filter(r=>(r==null?void 0:r.local_upload_id)!==t);Bo(e)}async function Hd(){if(rn||!(l!=null&&l.connected)||!_())return;const t=Kn();if(t.length!==0){rn=!0;try{for(const e of t){if(!(l!=null&&l.connected)||!_())return;await Co(e),Vd(e.local_upload_id)}}catch(e){h("applications-data-pending-error",`Pending application upload retry failed: ${S(e)}`,{ttlMs:p})}finally{rn=!1}}}async function Co(t){var i;if(!(l!=null&&l.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return h("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:p}),{ok:!0,sent_count:0,skipped_empty:!0};let r=0;for(const s of e){const o=await A("guildsync:eso-guild-application-message",{...t,record:s,recordKey:(s==null?void 0:s.recordKey)||"",message:Wd(s)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Backend rejected the application data payload. Application data was not cleared.");r+=1}const n=await $c(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return h("applications-data-sent",`Sent ${r} application record${r===1?"":"s"} to GuildSync backend.`,{ttlMs:p}),{ok:!0,sent_count:r}}function Wd(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),r=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",n=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",s=String(t.applicationText||"_No application text captured._"),o=Object.entries(t).filter(([a])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(a)).map(([a,u])=>`**${a}:** ${jd(u)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${r}** ${n} an application from **${i}**.`,"","**Application text:**","```",s.slice(0,1500),"```",o.length>0?"":null,o.length>0?"**Full captured record fields:**":null,...o].filter(a=>a!==null).join(`
`)}function jd(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function zd(t={}){await Gd(t)}function Yd(){const t=$n(M),e=mu(t,M),r=M!=="other";return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <button id="openManualBiweeklyTicketButton" class="bank-export-button" type="button" ${_()?"":'disabled title="Login required to add manual entries."'}>
            <span aria-hidden="true">\uFF0B</span>
            <span>Add Manual Entry</span>
          </button>
          ${Zd()}
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${c(Qo(Bs))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${$e||!_()?"disabled":""} ${_()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${$e?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${ln("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${ln("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${ln("other","?","Other","All other deposits")}
        </div>

        ${Xd(M)}

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
          <div>Total Deposits: <strong>${c(Ot(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${M==="monthly"?`<div>Raffle Pot: <strong>${c(Ot(Math.floor(e.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${M==="biweekly"?`<div>Raffle Pot: <strong>${c(Ot(Uo(e.amount)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${M==="biweekly"?`<div>Draws: <strong>${c(String(gu(e.amount)))}</strong></div>`:""}
          ${r?`<div>Total Tickets Awarded: <strong>${c(Hr(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${Ge?Kd($n(Kt)):""}
    </div>
  `}function Kd(t){return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${c(ee(Kt))} Deposits</h3>
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
                <th>Number of Tickets</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(e=>Jd(e)).join(""):Qd()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${c(qo(t))}</textarea>
      </div>
    </div>
  `}function Jd(t){return`
    <tr>
      <td>${c(t.displayName||"")}</td>
      <td>${c(String(Number(t.amount)||0))}</td>
      <td>${c(String(Number(t.ticketAmount)||0))}</td>
      <td>${c(t.note||"")}</td>
    </tr>
  `}function Qd(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${c(ee(Kt))}.</td>
    </tr>
  `}function Xd(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=Po(t),r=$r(t),n=r<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${f(ee(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${c(ee(t))} Raffle Period ${r===0?"(Current)":`(${Math.abs(r)} period${Math.abs(r)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${c(gr(e.salesStart))} through ${c(gr(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${c(gr(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${n?"":"disabled"} aria-label="Next ${f(ee(t))} raffle period">\u203A</button>
    </div>
  `}function ln(t,e,r,n){const i=M===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${f(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${c(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${c(r)}</span>
        <span class="bank-section-subtitle">${c(n)}</span>
      </span>
    </button>
  `}function Zd(){if(!_())return"";const t=Gr(),e=Zt(),r=Io(),n=t+e+r;if(n<=0)return"";const i=`Desktop Client Required${n>0?` (${n})`:""}`,s="Deposit mail checkout and ESO SavedVariables writing are disabled in the web client. Use the GuildSync desktop client for this mail workflow.";return`
    <button id="checkoutDepositMailButton" class="bank-export-button deposit-mail-button deposit-mail-status-only" type="button" data-deposit-mail-action="disabled" aria-disabled="true" title="${f(s)}" aria-label="${f(`${i}. ${s}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${c(i)}</span>
      <span class="deposit-mail-web-disabled" aria-hidden="true">Web Disabled</span>
    </button>
  `}function Zt(){return er().reduce((t,e)=>t+Lt(e.records).length,0)}function eu(){const t=(b==null?void 0:b.user)||{};return new Set([Q(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function tu(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?eu().has(e):!1}function Io(){return _()?P.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),r=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&r==="written_to_eso"&&tu(t)}).length:0}function Gr(){return P.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),r=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&r==="unsent"}).length}function ru(t){const e=String(t||"").trim();return P.find(r=>String(r.eventId||"").trim()===e)||null}function Rr(t){const e=String(t||"other").toLowerCase(),r=["biweekly","monthly","other"],n=r.includes(e)?e:"other",i=r.filter(s=>s!==n);return[i[0]||"biweekly",n,i[1]||"other"]}function Jn(t={},e="other"){const r=String(e||"other").toLowerCase(),n=Number(t==null?void 0:t.amount)||0;return r===String((t==null?void 0:t.type)||"").toLowerCase()?Number(t==null?void 0:t.ticketAmount)||0:r==="biweekly"?Math.floor(n/500):r==="monthly"?Math.floor(n/2500):0}function Oo(t={},e="other",r=""){const n=String(t.type||"other").toLowerCase(),i=ee(n),s=ee(e),o=Q()||"Unknown user",a=[`Moved from ${i} to ${s} by ${o}.`,`Ref ${t.eventId||""}`],u=String(r||"").trim();return u&&a.push(`Reason: ${u}`),a.join(`
`)}function nu(t){const e=ru(t);if(!e){h("banking-move-missing","Could not find the selected banking entry.",{ttlMs:p});return}const r=String(e.type||"other").toLowerCase();F=e,T={targetType:r,note:"",tickets:String(Jn(e,r))},se="",dt=!1,wt=!0,d()}function Mr(){wt=!1,dt=!1,se="",F=null,T={targetType:"other",note:"",tickets:""},d()}function iu(){const t=F||{},e=String(t.type||"other").toLowerCase(),r=ee(e),n=Rr(e);let i=String(T.targetType||n[0]||"other").toLowerCase();n.includes(i)||(i=n[0]||"other",T.targetType=i);const s=i!=="other",o=Math.max(0,n.indexOf(i)),a=Oo(t,i,T.note);return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="bankingMoveDialogTitle">
      <div class="roster-history-dialog manual-ticket-dialog banking-move-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="bankingMoveDialogTitle">Move Banking Entry</h3>
            <p>Move this deposit to a different banking section while preserving a reference to the original event.</p>
          </div>
          <button id="closeBankingMoveDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${se?`<div class="discord-data-error">${c(se)}</div>`:""}

        <div class="manual-ticket-form banking-move-form">
          <div class="banking-move-current-entry">
            <div><strong>Current Type:</strong> ${c(r)}</div>
            <div><strong>Event ID:</strong> ${c(t.eventId||"")}</div>
            <div><strong>Depositor:</strong> ${c(t.displayName||"")}</div>
            <div><strong>Amount:</strong> ${c(Ot(t.amount))} \u{1FA99}</div>
          </div>

          <div class="banking-move-target-row banking-move-slider-row">
            <span>Move To</span>
            <div class="banking-move-slider-control" role="radiogroup" aria-label="Move banking entry destination">
              <div class="banking-move-slider-labels">
                ${n.map((u,m)=>`
                  <button
                    class="banking-move-slider-label ${i===u?"selected":""} ${u===e?"current":""}"
                    type="button"
                    role="radio"
                    aria-checked="${i===u?"true":"false"}"
                    data-banking-move-target="${f(u)}"
                  >
                    <strong>${c(ee(u))}</strong>
                    <span>${u===e?"Current":`${c(String(Jn(t,u)))} tickets`}</span>
                  </button>
                `).join("")}
              </div>
              <input
                id="bankingMoveTargetSlider"
                class="banking-move-target-slider banking-move-slider-position-${o}"
                type="range"
                min="0"
                max="2"
                step="1"
                value="${f(String(o))}"
                aria-label="Move banking entry destination slider"
              />
              <div class="banking-move-slider-help">Left / middle / right are the only allowed choices. Middle restores the original entry values.</div>
            </div>
          </div>

          ${s?`
            <label class="manual-ticket-count-field banking-move-ticket-field">
              <span>Tickets Awarded</span>
              <input id="bankingMoveTicketsInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${f(T.tickets)}" />
            </label>
          `:""}

          <label class="manual-ticket-note-field banking-move-note-field">
            <span>Move Note</span>
            <textarea id="bankingMoveNoteInput" class="discord-search-input manual-ticket-note-input banking-move-note-input" rows="2" placeholder="Optional reason for this move">${c(T.note)}</textarea>
          </label>

          <div class="roster-history-muted banking-move-generated-note">${c(a).replace(/\n/g,"<br>")}</div>

          <div class="manual-ticket-actions banking-move-actions">
            <button id="saveBankingMoveButton" class="refresh-discord-button banking-move-submit-button" type="button" ${dt||i===e?"disabled":""}>${dt?"MOVING...":i===e?"SELECT A SIDE TO MOVE":"MOVE"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function su(){var r,n,i,s,o;if(!wt)return;(r=document.querySelector("#closeBankingMoveDialogButton"))==null||r.addEventListener("click",()=>Mr());function t(a){const u=String(a||"other").toLowerCase(),m=String((F==null?void 0:F.type)||"other").toLowerCase(),v=Rr(m);T.targetType=v.includes(u)?u:m,T.tickets=String(Jn(F||{},T.targetType)),d()}document.querySelectorAll("[data-banking-move-target]").forEach(a=>{a.addEventListener("click",()=>t(a.dataset.bankingMoveTarget))}),(n=document.querySelector("#bankingMoveTargetSlider"))==null||n.addEventListener("input",a=>{const u=String((F==null?void 0:F.type)||"other").toLowerCase(),m=Rr(u),v=Math.max(0,Math.min(2,Math.round(Number(a.target.value)||0)));t(m[v]||u)}),(i=document.querySelector("#bankingMoveTicketsInput"))==null||i.addEventListener("input",a=>{const u=String(a.target.value||"").replace(/\D/g,"");a.target.value!==u&&(a.target.value=u),T.tickets=u}),(s=document.querySelector("#bankingMoveNoteInput"))==null||s.addEventListener("input",a=>{T.note=a.target.value||"";const u=document.querySelector(".banking-move-generated-note");u&&(u.innerText=Oo(F||{},T.targetType||"other",T.note))}),(o=document.querySelector("#saveBankingMoveButton"))==null||o.addEventListener("click",()=>ou());const e=document.querySelector(".roster-history-overlay");e&&e.addEventListener("click",a=>{a.target===e&&Mr()})}async function ou(){const t=F;if(!(t!=null&&t.eventId)){se="No banking entry is selected.",d();return}const e=String(t.type||"other").toLowerCase(),r=Rr(e),n=String(T.targetType||r[0]||"other").toLowerCase();if(!r.includes(n)||n===e){se="Select one of the side destinations before moving this entry.",d();return}const i=n==="other"?0:Math.floor(Number(String(T.tickets||"").trim()||0));if(!Number.isFinite(i)||i<0){se="Tickets must be zero or greater.",d();return}dt=!0,se="",d();try{const s=await A("guildsync:move-banking-entry",{event_id:t.eventId,target_type:n,tickets:i,note:T.note||""},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to move banking entry.");Mr(),await ne({silent:!0}),h("banking-entry-moved",s.message||"Banking entry moved.",{ttlMs:p})}catch(s){dt=!1,se=S(s),d()}}function xo(){if(D!=="more")return;su(),document.querySelectorAll("[data-bank-entry-move]").forEach(o=>{o.addEventListener("click",()=>nu(o.dataset.bankEntryMove||""))}),document.querySelectorAll("[data-bank-section]").forEach(o=>{o.addEventListener("click",()=>{M=o.dataset.bankSection||"biweekly",d()})}),document.querySelectorAll("[data-bank-export-section]").forEach(o=>{o.addEventListener("click",()=>{Kt=(o.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",Ge=!0,d()})}),document.querySelectorAll("[data-bank-period-move]").forEach(o=>{o.addEventListener("click",()=>{lu(o.dataset.bankPeriodMove||""),d()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{Ge=!1,d()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>au());const r=document.querySelector(".bank-export-overlay");r&&r.addEventListener("click",o=>{o.target===r&&(Ge=!1,d())});const n=document.querySelector("#openManualBiweeklyTicketButton");n&&n.addEventListener("click",async()=>{if(!_()){h("manual-ticket-login-required","Login required to add manual entries.",{ttlMs:p});return}de=!0,G="",_t=L.accountName||"",K=!1,B=-1,J.length===0&&(l==null?void 0:l.connected)&&_()&&await At({silent:!0}),d()});const i=document.querySelector("#checkoutDepositMailButton");i&&i.addEventListener("click",()=>{i.dataset.depositMailAction==="checkout"&&i.getAttribute("aria-disabled")!=="true"&&Eu()});const s=document.querySelector("#refreshBankingDataButton");s&&s.addEventListener("click",()=>{if(!_()){h("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:p});return}Ho({key:"banking"})})}function qo(t){const e=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const r of t)e.push([r.displayName||"",String(Number(r.amount)||0),String(Number(r.ticketAmount)||0),r.note||""]);return e.map(r=>r.map(Ur).join("	")).join(`
`)}function Ur(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function Vr(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const r=document.createElement("textarea");r.value=e,r.setAttribute("readonly","readonly"),r.style.position="fixed",r.style.left="0",r.style.top="0",r.style.width="1px",r.style.height="1px",r.style.opacity="0",r.style.pointerEvents="none",r.style.zIndex="-1",document.body.appendChild(r),r.focus(),r.select(),r.setSelectionRange(0,r.value.length);let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r)}return n}async function au(){const t=$n(Kt),e=qo(t);if(await Vr(e)){h("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#bankingExportTsv");n&&(n.focus(),n.select()),h("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:p})}function $n(t){return P.filter(e=>e.type===t).filter(e=>cu(t,e)).sort((e,r)=>(Number(r.time)||0)-(Number(e.time)||0))}function cu(t,e){if(t==="other")return!0;const r=Number(e==null?void 0:e.time)||0;if(r<=0)return!1;const n=Po(t);return r>=n.salesStart&&r<=n.salesEnd}function $r(t){return Number(Sn[t])||0}function lu(t){if(M!=="biweekly"&&M!=="monthly")return;const e=$r(M);if(t==="previous"){Sn[M]=e-1;return}t==="next"&&e<0&&(Sn[M]=e+1)}function Po(t){const e=Math.floor(Date.now()/1e3);if(t==="monthly"){const i=du(e,$r(t));return{salesStart:Go(i)+1,salesEnd:i,raffleTime:i+Ar}}const r=Te;let n=Fo(e);return n+=$r(t)*r,{salesStart:n-r+1,salesEnd:n,raffleTime:n+Ar}}function Fo(t){const e=Te;let r=qc;for(;r-e>t;)r-=e;for(;r<t;)r+=e;return r}function du(t,e=0){let r=uu(t),n=Number(e)||0;for(;n<0;)r=Go(r),n+=1;for(;n>0;)r=fu(r),n-=1;return r}function uu(t){let e=Fo(t);for(;!Qn(e);)e+=Te;return e}function Go(t){let e=t-Te;for(;!Qn(e);)e-=Te;return e}function fu(t){let e=t+Te;for(;!Qn(e);)e+=Te;return e}function Qn(t){const e=t+Ar,r=t+Te+Ar;return Xi(e)!==Xi(r)}function Xi(t){var s,o;const e=new Date(Number(t||0)*1e3);if(Number.isNaN(e.getTime()))return"";const r=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit"}).formatToParts(e),n=((s=r.find(a=>a.type==="year"))==null?void 0:s.value)||"",i=((o=r.find(a=>a.type==="month"))==null?void 0:o.value)||"";return`${n}-${i}`}function hu(t=M){const e=String(t||"").toLowerCase();return e!=="monthly"&&e!=="biweekly"?0:"auto"}function pu(t={},e=M){const r=Number(t.amount)||0;if(!hu(e))return r;const n=Math.abs(Math.trunc(r))%10,i=n===1||n===3?n:0;return i>0&&r>i?r-i:r}function mu(t,e=M){return t.reduce((r,n)=>(r.amount+=pu(n,e),r.tickets+=Number(n.ticketAmount)||0,r),{amount:0,tickets:0})}function Uo(t){const e=Math.ceil((Number(t)||0)/2);return e<=0?0:Math.ceil(e/2e5)*2e5}function gu(t){const e=Uo(t);return e>0?e/2e5:0}function yu(t,e=!0){return`
    <tr>
      <td>${c(t.note||t.eventId||"")}</td>
      <td>${c(gr(t.time))}</td>
      <td>${c(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${c(Ot(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td><strong class="bank-ticket-amount">${c(Hr(t.ticketAmount))}</strong></td>`:""}
      <td><button class="bank-entry-move-button" type="button" data-bank-entry-move="${f(t.eventId||"")}">Move</button></td>
    </tr>
  `}function bu(t=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?"6":"5"}">No ${c(ee(M))} deposits found for this ${M==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function ee(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function gr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Ot(t){return(Number(t)||0).toLocaleString()}function Hr(t){return(Number(t)||0).toLocaleString()}function Lt(t){return Array.isArray(t)?t.map(e=>{var n,i,s,o,a,u,m,v,g,y,O,fe,Et,Ye,si,oi,ai,ci,li,di,ui,fi,hi,pi,mi,gi,yi,bi,vi,ki,Si,wi,_i,Ai,Li,Ei,Di,Ri,Mi,$i,Ti;const r=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:r==="monthly"||r==="biweekly"||r==="other"?r:"other",eventId:String((i=(n=e==null?void 0:e.eventId)!=null?n:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((o=(s=e==null?void 0:e.time)!=null?s:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((u=(a=e==null?void 0:e.displayName)!=null?a:e==null?void 0:e.display_name)!=null?u:"").trim(),amount:Number((m=e==null?void 0:e.amount)!=null?m:0)||0,ticketAmount:Number((g=(v=e==null?void 0:e.ticketAmount)!=null?v:e==null?void 0:e.ticket_amount)!=null?g:0)||0,note:String((y=e==null?void 0:e.note)!=null?y:"").trim(),dataSource:String((fe=(O=e==null?void 0:e.dataSource)!=null?O:e==null?void 0:e.data_source)!=null?fe:"").trim(),emailRequested:Boolean((Et=e==null?void 0:e.emailRequested)!=null?Et:e==null?void 0:e.email_requested),mailStatus:String((si=(Ye=e==null?void 0:e.mailStatus)!=null?Ye:e==null?void 0:e.mail_status)!=null?si:"").trim(),mailRequestId:String((ai=(oi=e==null?void 0:e.mailRequestId)!=null?oi:e==null?void 0:e.mail_request_id)!=null?ai:"").trim(),mailBatchId:String((li=(ci=e==null?void 0:e.mailBatchId)!=null?ci:e==null?void 0:e.mail_batch_id)!=null?li:"").trim(),checkedOutBy:String((ui=(di=e==null?void 0:e.checkedOutBy)!=null?di:e==null?void 0:e.checked_out_by)!=null?ui:"").trim(),checkedOutAt:String((hi=(fi=e==null?void 0:e.checkedOutAt)!=null?fi:e==null?void 0:e.checked_out_at)!=null?hi:"").trim(),checkoutExpiresAt:String((mi=(pi=e==null?void 0:e.checkoutExpiresAt)!=null?pi:e==null?void 0:e.checkout_expires_at)!=null?mi:"").trim(),writtenToEsoAt:String((yi=(gi=e==null?void 0:e.writtenToEsoAt)!=null?gi:e==null?void 0:e.written_to_eso_at)!=null?yi:"").trim(),sentAt:String((vi=(bi=e==null?void 0:e.sentAt)!=null?bi:e==null?void 0:e.sent_at)!=null?vi:"").trim(),failedReason:String((Si=(ki=e==null?void 0:e.failedReason)!=null?ki:e==null?void 0:e.failed_reason)!=null?Si:"").trim(),recipient:String((Li=(Ai=(_i=(wi=e==null?void 0:e.recipient)!=null?wi:e==null?void 0:e.account_name)!=null?_i:e==null?void 0:e.displayName)!=null?Ai:e==null?void 0:e.display_name)!=null?Li:"").trim(),subject:String((Ri=(Di=(Ei=e==null?void 0:e.subject)!=null?Ei:e==null?void 0:e.mailSubject)!=null?Di:e==null?void 0:e.mail_subject)!=null?Ri:"").trim(),body:String((Ti=($i=(Mi=e==null?void 0:e.body)!=null?Mi:e==null?void 0:e.mailBody)!=null?$i:e==null?void 0:e.mail_body)!=null?Ti:"").trim()}}):[]}function vu(t){const e=new Map;for(const r of P)r.eventId&&e.set(r.eventId,r);for(const r of t)!r.eventId||e.set(r.eventId,r);P=Array.from(e.values()).sort((r,n)=>(Number(n.time)||0)-(Number(r.time)||0))}function Vo(){Bs=new Date().toISOString()}async function ku(t={}){!(t!=null&&t.ok)||(P=Lt(t.entries),Vo(),D==="more"&&d(),h("banking-data-updated",`Banking data updated. Loaded ${P.length} deposit record${P.length===1?"":"s"}.`,{ttlMs:p}))}async function ne(t={}){const e=Boolean(t.silent),r=Boolean(t.background);if(!(l!=null&&l.connected)){e||h("banking-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}r||($e=!0,d());try{const n=await A("guildsync:request-banking-data",{},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve banking data.");P=Lt(n.entries),Vo(),e||h("banking-data",`Loaded ${P.length} banking deposit record${P.length===1?"":"s"}.`,{ttlMs:p})}catch(n){e||h("banking-data-error",S(n),{ttlMs:p})}finally{r||($e=!1),d()}}async function Zi(){!(l!=null&&l.connected)||!_()||$e||(await ne({silent:!0,background:!0}),Gr()<=0&&Zt()>0&&(ie.running?d():Du("availability-refresh")))}function Su(){Qe&&clearInterval(Qe),Zi(),Qe=window.setInterval(Zi,Cc)}function wu(){Qe&&(clearInterval(Qe),Qe=null)}async function _u(t={}){if(!!_()){if(!(l!=null&&l.connected)){h("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:p});return}try{const e=await Ec(t);if(!(e!=null&&e.ok))return;const r=Array.isArray(e.ackEntries)?e.ackEntries:[];if(r.length===0)return;const n=await A("guildsync:mark-deposit-mail-sent",{mail_ack:r,mail_request_ids:r.map(o=>(o==null?void 0:o.mail_request_id)||(o==null?void 0:o.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(n.mail_request_ids)?n.mail_request_ids:Array.isArray(n.mailRequestIds)?n.mailRequestIds:[];if(i.length===0){h("deposit-mail-ack-none",n.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:p});return}const s=await Dc(i);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");h("deposit-mail-ack-sent",s.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:p}),await ne({silent:!0})}catch(e){h("deposit-mail-ack-error",S(e),{ttlMs:p})}}}async function Au(){if(!nn){nn=!0;try{const t=await Rc();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&h("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:p})}catch(t){h("deposit-mail-ack-cleanup-error",S(t),{ttlMs:p})}finally{nn=!1}}}async function Ho(t={}){var e,r;if(!!_()){if(!(l!=null&&l.connected)){h("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}$e=!0,d();try{const n=await vc(t);if(!(n!=null&&n.ok)){h("banking-data-pending",(n==null?void 0:n.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:p});return}const i=Lt((e=n==null?void 0:n.data)==null?void 0:e.entries);vu(i);const s=new Date().toISOString(),o={local_upload_id:zo(),authenticated_username:Q(),authenticated_discord_user_id:((r=b==null?void 0:b.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:s,data:n.data||{}};try{await Ko(o)}catch(a){throw $u(o),a}await ne({silent:!0})}catch(n){h("banking-data-error",S(n),{ttlMs:p})}finally{$e=!1,d()}}}function Wo(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function er(){try{const t=window.localStorage.getItem(Es),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function jo(t){window.localStorage.setItem(Es,JSON.stringify(Array.isArray(t)?t:[]))}function Lu(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||Wo()),r=er().filter(n=>String((n==null?void 0:n.mail_batch_id)||(n==null?void 0:n.mailBatchId)||(n==null?void 0:n.local_batch_id)||"")!==e);r.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),jo(r)}function es(t){const e=String(t||"").trim();if(!e)return;const r=er().filter(n=>String((n==null?void 0:n.mail_batch_id)||(n==null?void 0:n.mailBatchId)||(n==null?void 0:n.local_batch_id)||"")!==e);jo(r)}async function Eu(){if(!_()){h("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:p});return}if(!(l!=null&&l.connected)){h("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:p});return}const t=er(),e=Gr();if(t.length>0&&e<=0){await ht();return}d();try{const r=await A("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail checkout request.");const n=Lt(r.records);if(n.length===0){h("deposit-mail-none",r.message||"No unsent deposit mail is available.",{ttlMs:p}),await ne({silent:!0});return}const i={mail_batch_id:r.mail_batch_id||r.mailBatchId||Wo(),checked_out_by:r.checked_out_by||r.checkedOutBy||Q(),checked_out_at:new Date().toISOString(),records:n};Lu(i),await ht()}catch(r){h("deposit-mail-error",S(r),{ttlMs:p})}finally{d()}}function Du(t=""){Xe||pr||!_()||Zt()<=0||ie.running||(Xe=window.setTimeout(()=>{Xe=null,ht()},100))}async function ht(){if(Xe&&(window.clearTimeout(Xe),Xe=null),pr||!_())return;const t=er();if(t.length!==0){if(await Tn({silent:!0}),ie.running){h("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:p}),d();return}pr=!0,d();try{for(const e of t){const r=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),n=Lt(e==null?void 0:e.records);if(n.length===0){es(r);continue}const i=await Lc(n);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(l!=null&&l.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const s=await A("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:r,event_ids:i.eventIds||n.map(o=>o.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend did not confirm deposit mail was marked written_to_eso.");es(r),h("deposit-mail-written",i.message||`Wrote ${n.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:p})}await ne({silent:!0})}catch(e){h("deposit-mail-write-error",S(e),{ttlMs:p})}finally{pr=!1,d()}}}async function Tn(t={}){try{const e=Boolean(ie.running),r=await Ac();ie={running:Boolean(r==null?void 0:r.running),message:String((r==null?void 0:r.message)||"")},ie.running||await Au(),e&&!ie.running&&(h("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:p}),await ht()),e!==ie.running&&d()}catch(e){t.silent||h("eso-status-error",S(e),{ttlMs:p})}}function Ru(){Je&&clearInterval(Je),Tn({silent:!0}).then(()=>{!ie.running&&Zt()>0&&ht()}),Je=window.setInterval(()=>Tn({silent:!0}),Bc)}function Mu(){Je&&(clearInterval(Je),Je=null)}function zo(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Xn(){try{const t=window.localStorage.getItem(Ls),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Yo(t){window.localStorage.setItem(Ls,JSON.stringify(Array.isArray(t)?t:[]))}function $u(t){const e=String((t==null?void 0:t.local_upload_id)||zo()),r=Xn().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Yo(r),h("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Tu(t){const e=Xn().filter(r=>(r==null?void 0:r.local_upload_id)!==t);Yo(e)}async function Nu(){if(en||!(l!=null&&l.connected)||!_())return;const t=Xn();if(t.length!==0){en=!0;try{for(const e of t){if(!(l!=null&&l.connected)||!_())return;await Ko(e),Tu(e.local_upload_id)}}catch(e){h("banking-data-pending-error",`Pending banking upload retry failed: ${S(e)}`,{ttlMs:p})}finally{en=!1}}}async function Ko(t){if(!(l!=null&&l.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await A("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const r=await kc(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return h("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:p}),e}function Jo(){if(D!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>Bu());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{at=!0,le="",d(),C("discordHistorySearchInput")});const r=document.querySelector("#discordMemberSearch");r&&r.addEventListener("input",o=>{kr=o.target.value||"",yn=o.target.selectionStart,bn=o.target.selectionEnd,d({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Pu(o.dataset.discordSortColumn||"username")})});const n=document.querySelector("#discordRoleFilter");n&&n.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(Ze.add(a),d())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRoleFilter||"";Ze.delete(a),d()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(et.add(a),d())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeDiscordLinkStatusFilter||"";et.delete(a),d()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>fo(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{kr="",Ze.clear(),et.clear(),d()})}async function Bu(){var t,e;if(!(l!=null&&l.connected)){h("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:p});return}vr=!0,d(),h("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const r=await A("guildsync:request-discord-data-refresh",{requested_by:((t=b==null?void 0:b.user)==null?void 0:t.display_name)||((e=b==null?void 0:b.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to request Discord data refresh.");h("discord-refresh-requested",r.message||"Discord data refresh completed.",{ttlMs:p}),await Zn({silent:!0})}catch(r){h("discord-refresh-error",S(r),{ttlMs:p})}finally{vr=!1,d()}}async function Cu(){if(!(l!=null&&l.connected))return;const t=await A("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(Or=t.value||null)}async function Iu(t={}){if(!!(t!=null&&t.ok)){x=ei(t.members),t.last_refresh&&(Or=t.last_refresh);try{await Cu()}catch{}D==="discord-members"&&d(),h("discord-data-updated",`Discord data updated. Loaded ${x.length} member record${x.length===1?"":"s"}.`,{ttlMs:p})}}async function Zn(t={}){const e=Boolean(t.silent);if(!(l!=null&&l.connected)){h("discord-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}qt=!0,d();try{const[r,n]=await Promise.all([A("guildsync:request-discord-data-date",{}),A("guildsync:request-discord-member-dataJSON",{})]);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord refresh date.");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord member data.");Or=r.value||null,x=ei(n.members),e||h("discord-data",`Loaded ${x.length} Discord member record${x.length===1?"":"s"}.`,{ttlMs:p})}catch(r){h("discord-data-error",S(r),{ttlMs:p})}finally{qt=!1,d()}}function A(t,e={},r=3e4){return new Promise((n,i)=>{if(!(l!=null&&l.connected)){i(new Error("GuildSync websocket is not connected."));return}let s=!1;const o=window.setTimeout(()=>{s||(s=!0,i(new Error(`${t} timed out.`)))},r);l.emit(t,e,a=>{s||(s=!0,window.clearTimeout(o),n(a))})})}function ei(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(Ou).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,r)=>Ut(e).localeCompare(Ut(r),void 0,{sensitivity:"base"})):[]}function Ou(t){var i,s;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),r=String(t.role_name||t.name||"Unnamed Role").trim(),n=(s=(i=t.role_color)!=null?i:t.color)!=null?s:null;return{role_id:e,role_name:r||"Unnamed Role",role_color:n}}function xu(){const t=kr.trim().toLowerCase(),e=Array.from(Ze),r=x.filter(n=>{if(t&&![n.username,n.global_name,n.server_nickname,n.discord_id,...n.roles.map(s=>s.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(n.roles.map(s=>s.role_name));if(!e.every(s=>i.has(s)))return!1}return!!Vs(et,ll(n))});return qu(r)}function qu(t){const e=Ie==="desc"?-1:1;return[...t].sort((r,n)=>{const i=ts(r,Pt),s=ts(n,Pt),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:Ut(r).localeCompare(Ut(n),void 0,{sensitivity:"base",numeric:!0})})}function ts(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(r=>r.role_name||"").filter(Boolean).sort((r,n)=>r.localeCompare(n,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function Pu(t){const r=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";Pt===r?Ie=Ie==="asc"?"desc":"asc":(Pt=r,Ie="asc"),d()}function ar(t,e){const r=Pt===t,n=Ie==="asc"?"ascending":"descending",i=r?Ie==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${r?n:"none"}">
      <button
        class="discord-sort-header${r?" active":""}"
        type="button"
        data-discord-sort-column="${f(t)}"
        title="Sort ${f(e)} ${r&&Ie==="asc"?"descending":"ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function Fu(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(yn)?yn:t.value.length,r=Number.isInteger(bn)?bn:e;t.setSelectionRange(e,r)}}function Gu(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(vn)?vn:t.value.length,r=Number.isInteger(kn)?kn:e;t.setSelectionRange(e,r)}}function Uu(){const t=new Set;for(const e of x)for(const r of e.roles)r.role_name&&t.add(r.role_name);return Array.from(t).sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function Vu(t){const e=zu(t),r=Ut(t),n=t.roles||[];return`
    <tr data-discord-user-id="${f(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${f(e)}" alt="${f(r)}" />`:`<span>${c(oa(r))}</span>`}
          </div>
          <span>${c(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${c(t.global_name||"")}</td>
      <td>${c(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${n.length>0?n.map(i=>Wu(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${lo({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function Hu(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${c(qt?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function Wu(t){const e=Wr(t.role_color),r=ni(e),n=ri(e,r);return`
    <span
      class="discord-role-badge"
      title="${f(t.role_name)}"
      style="${n}"
    >${c(t.role_name)}</span>
  `}function ju(t){const e=ti(t),r=Wr(e==null?void 0:e.role_color),n=ni(r),i=ri(r,n);return`
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
  `}function ti(t){for(const e of x){const r=e.roles.find(n=>n.role_name===t);if(r)return r}return null}function Wr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function ri(t,e){return[`--role-fill-top: ${rs(t,"#ffffff",.16)}`,`--role-fill-bottom: ${rs(t,"#000000",.1)}`,`--role-fill-glow: ${ns(t,.28)}`,`--role-fill-edge: ${ns(t,.46)}`,`color: ${e}`].join("; ")}function rs(t,e,r){const n=cr(t)||cr("#64748b"),i=cr(e)||cr("#ffffff"),s=Math.max(0,Math.min(1,Number(r)||0)),o=Math.round(n.red+(i.red-n.red)*s),a=Math.round(n.green+(i.green-n.green)*s),u=Math.round(n.blue+(i.blue-n.blue)*s);return`#${dn(o)}${dn(a)}${dn(u)}`}function cr(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function dn(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function ns(t,e){const r=String(t||"#64748b").replace("#",""),n=/^[0-9a-f]{6}$/i.test(r)?r:"64748b",i=parseInt(n.slice(0,2),16),s=parseInt(n.slice(2,4),16),o=parseInt(n.slice(4,6),16);return`rgba(${i}, ${s}, ${o}, ${e})`}function ni(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const r=parseInt(e.slice(0,2),16),n=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(r*299+n*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function zu(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!r)return"";const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function Ut(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function Qo(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function yr(){const t=document.querySelector("#discordArea");if(!!t){if(tr(!1),_()){const e=b.user||{},r=Q(),n=ff(e),i=oa(r);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${n?`<img src="${f(n)}" alt="${f(r)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${c(i)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const s=document.querySelector("#discordAvatarButton");s.addEventListener("contextmenu",o=>{o.preventDefault(),is()}),s.addEventListener("click",()=>{is()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",Xu)}}function is(){if(Wt){tr();return}Qu()}function Yu(t=Se){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],r=String((t==null?void 0:t.directory)||"").trim(),n=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const s=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),o=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),a=String((i==null?void 0:i.filePath)||(r?`${r}\\${o}`:o)).trim(),u=(i==null?void 0:i.enabled)!==!1,m=n&&u,v=`profileFileWatchToggle-${Ju(s||o)}`;return`
          <label class="profile-filewatch-item ${u?"enabled":"disabled"}" title="${f(a)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${c(o)}</span>
              <span class="profile-filewatch-state">${m?"Watching":u?"On":"Off"}</span>
            </span>
            <input
              id="${f(v)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${f(s)}"
              ${u?"checked":""}
              aria-label="Turn file watch ${u?"off":"on"} for ${f(o)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function ii(){var n,i,s;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=Q(),r=((n=b.user)==null?void 0:n.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${c(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${c(hf(r))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${c(Ir)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${Se!=null&&Se.watching?"Active":"Stopped"}</span>
        </div>
        ${Yu()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(i=document.querySelector("#discordLogoutButton"))==null||i.addEventListener("click",Zu),(s=document.querySelector("#associateTicketReportButton"))==null||s.addEventListener("click",()=>{tr(!1),Ys()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",Ku)})}async function Xo(){try{Se=await Cr(),Wt&&ii()}catch(t){h("file-watcher-error",S(t),{ttlMs:p})}}async function Ku(t){var n;const e=t.currentTarget,r=String(((n=e==null?void 0:e.dataset)==null?void 0:n.filewatchKey)||"").trim();if(!!r)try{e.disabled=!0,Se=await bc(r,e.checked),await st({silent:!0}),Wt&&ii()}catch(i){h("file-watcher-error",S(i),{ttlMs:p}),await Xo()}}function Ju(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function Qu(){const t=document.querySelector("#discordProfileMenu");!t||(ii(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),Wt=!0,Xo(),setTimeout(()=>{window.addEventListener("click",Zo),window.addEventListener("keydown",ea)},0))}function tr(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),Wt=!1,t&&(window.removeEventListener("click",Zo),window.removeEventListener("keydown",ea))}function Zo(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&tr()}function ea(t){t.key==="Escape"&&tr()}async function Xu(){try{h("auth","Opening Discord login...",{ttlMs:p});const t=await hc();t!=null&&t.status_message&&h("auth",t.status_message,{ttlMs:p}),Ee()}catch(t){h("auth-error",S(t),{ttlMs:p}),Ee()}}async function Zu(){try{b=await mc(),h("auth",b.status_message||"Logged out.",{ttlMs:p}),Cs(),xt(),await st()}catch(t){h("auth-error",S(t),{ttlMs:p}),Ee()}}function xt(){const t=b.socket_url||"https://guildsync.perdues.me";ef(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};b!=null&&b.token&&(e.auth={token:b.token}),l=fr(t,e),l.on("connect",()=>{Ee(),ta(),D==="discord-members"&&Zn({silent:!0}),D==="eso-members"&&At({silent:!0}),D==="more"&&ne({silent:!0}),Nu(),ht(),Ru(),Su(),Fd(),Hd(),tf()}),l.on("connect_error",()=>{Ee(),Tr()}),l.on("disconnect",()=>{Ee(),Tr(),Mu(),wu()}),l.on("guildsync:version-status",r=>{rf(r)}),l.on("guildsync:discord-member-data-updated",r=>{Iu(r)}),l.on("guildsync:banking-data-updated",r=>{ku(r)}),l.on("guildsync:roster-data-updated",r=>{Od(r)}),l.on("guildsync:member-links-updated",(r={})=>{Array.isArray(r.links)&&(E=r.links,(D==="discord-members"||D==="eso-members"||D==="settings"||Ne)&&d())}),l.on("guildsync:discord-refresh-status",(r={})=>{const n=String(r.message||"").trim();n&&h("discord-refresh-status",n,{ttlMs:p})})}function ef(t=!0){Tr(),l&&(l.disconnect(),l=null),t&&Ee()}function ta(){!(l!=null&&l.connected)||l.emit("guildsync:client-version",{version:Ir,platform:ra(),client_type:"wails"})}function tf(){Tr(),hr=window.setInterval(()=>{ta()},Nc)}function Tr(){hr&&(window.clearInterval(hr),hr=null)}function rf(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",r=t.download&&typeof t.download=="object"?t.download:{};he={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||r.url||"").trim(),fileName:String(t.download_file_name||r.file_name||"").trim(),platformLabel:String(r.label||t.platform||ra()).trim()},h("version",`GuildSync is out of date. Current version: ${Ir}. Latest version: ${e}.`),ss();return}he={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},ss(),jr("version")}}function ra(){const t=String(navigator.userAgent||"").toLowerCase(),r=`${String(navigator.platform||"").toLowerCase()} ${t}`;return r.includes("mac")?"macos":r.includes("linux")?"linux":"windows"}function ss(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!he.updateRequired||!he.downloadUrl){t.innerHTML="";return}const e=he.platformLabel||"Desktop",r=he.latestVersion||"latest",n=he.fileName||"GuildSync client download";t.innerHTML=`
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
        <span class="desktop-update-download-subtitle">${c(e)} \xB7 ${c(r)}</span>
      </span>
    </button>
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{nf()})}function nf(){const t=String(he.downloadUrl||"").trim();if(!t){h("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:p});return}_c(t)}function h(t,e,r={}){const n=String(t||"").trim(),i=String(e||"").trim();if(!(!n||!i)){if(De.set(n,i),Ce.has(n)&&(window.clearTimeout(Ce.get(n)),Ce.delete(n)),r.ttlMs&&Number(r.ttlMs)>0){const s=window.setTimeout(()=>{jr(n)},Number(r.ttlMs));Ce.set(n,s)}pt()}}function jr(t){const e=String(t||"").trim();if(!!e){if(De.delete(e),Ce.has(e)&&(window.clearTimeout(Ce.get(e)),Ce.delete(e)),N===e){Kr(()=>{N="",pt()});return}pt()}}function pt(){const t=zr();if(t.length===0){Ue?Kr(Vt):Vt();return}!Ue&&!Ve&&Yr(t[0])}function zr(){return Array.from(De.keys())}function na(){const t=zr();if(t.length===0)return"";if(!N)return t[0];const e=t.indexOf(N);return e<0?t[0]:t[(e+1)%t.length]}function Yr(t){const e=document.querySelector("#statusMessageTrack");if(!e||!De.has(t)){Vt();return}Jr();const r=De.get(t);N=t,Ue=!0,Ve=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=r,e.style.setProperty("--message-fade-duration",`${$s}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",Ve=!1,sf()},{once:!0})})}function sf(){const t=zr();if(!N||!De.has(N)){pt();return}if(t.length<=1){os(!1);return}os(!0)}function os(t){const e=document.querySelector("#statusMessageViewport"),r=document.querySelector("#statusMessageTrack");if(!e||!r)return;const n=Math.max(0,r.scrollWidth-e.clientWidth);if(n<=0){t&&Ht(()=>{Kr(()=>{const i=na();N="",i?Yr(i):Vt()})},Ms);return}Ht(()=>{ia(n,t)},Ts)}function ia(t,e){const r=document.querySelector("#statusMessageTrack");if(!r||!N||!De.has(N))return;const n=Math.max(4,Math.ceil(t/Oc));r.style.setProperty("--long-scroll-distance",`${t}px`),r.style.setProperty("--long-scroll-duration",`${n}s`),r.classList.add("long-scroll"),r.addEventListener("animationend",()=>{if(r.classList.remove("long-scroll"),r.style.transform=`translateX(-${t}px) translateY(-50%)`,e){Ht(()=>{Kr(()=>{const i=na();N="",i?Yr(i):Vt()})},Ms);return}Ht(()=>{of()},Ic)},{once:!0})}function of(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!N||!De.has(N))return;if(zr().length!==1){pt();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const n=Math.max(0,e.scrollWidth-t.clientWidth);n<=0||Ht(()=>{ia(n,!1)},Ts)}function Kr(t){const e=document.querySelector("#statusMessageTrack");if(Jr(),!e||!Ue){typeof t=="function"&&t();return}Ve=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${$s}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",Ue=!1,Ve=!1,typeof t=="function"&&t()},{once:!0})}function Vt(){const t=document.querySelector("#statusMessageTrack");Jr(),N="",Ue=!1,Ve=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function Ht(t,e){const r=window.setTimeout(()=>{Ct=Ct.filter(n=>n!==r),t()},e);Ct.push(r)}function Jr(){for(const t of Ct)window.clearTimeout(t);Ct=[]}function sa(){if(!Ue||Ve||!N)return;const t=N;Jr(),Yr(t)}function Ee(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(l!=null&&l.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!_()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${Q()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${Q()}`)}}async function st(t={}){try{if(_()){const e=await gc();Se=e,!t.silent&&(e==null?void 0:e.message)&&h(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:p});return}Se=await yc(),jr("file-watcher")}catch(e){h("file-watcher-error",S(e),{ttlMs:p})}}function Nt(t,e=null){const r="[GuildSync File Watcher]";if(e){console.log(`${r} ${t}`,e);return}console.log(`${r} ${t}`)}function af(t={}){if(!_()){Nt("SavedVariables change ignored because the user is not authenticated.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",r=e.toLowerCase(),n=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=String(t.filePath||"").trim(),o=n?`${n} saved variables (${i})`:i;Nt(`SavedVariables change detected: ${i}${s?` (${s})`:""}. Key: ${r}.`,t),h(`saved-vars-file-updated-${e}`,`${o} has been updated.`,{ttlMs:p}),r==="banking"&&(Nt(`Processing banking SavedVariables update from ${i}.`),cf(t)),r==="roster"&&(Nt(`Processing roster SavedVariables update from ${i}.`),lf(t)),r==="applications"&&(Nt(`Processing applications SavedVariables update from ${i}.`),zd(t))}async function cf(t={}){await _u(t),await Ho(t)}async function lf(t={}){await xd(t)}function df(t){!_()||h("file-watcher-error",S(t),{ttlMs:p})}function uf(){Rt("guildsync-savedvars-file-modified",af),Rt("guildsync-file-watcher-error",df),Rt("guildsync-login-complete",async t=>{b=t||{logged_in:!1,allowed:!1},yr(),xt(),await st(),h("auth",b.status_message||`Logged in and authorized as ${Q()}.`,{ttlMs:p})}),Rt("guildsync-login-denied",async t=>{b={logged_in:!1,allowed:!1,status_message:""},yr(),await st(),h("auth",t||"Access denied.",{ttlMs:p}),xt()}),Rt("guildsync-login-failed",async t=>{b={logged_in:!1,allowed:!1,status_message:""},yr(),await st(),h("auth",t||"Login failed.",{ttlMs:p}),xt()})}function _(){return Boolean((b==null?void 0:b.logged_in)&&(b==null?void 0:b.allowed)&&(b==null?void 0:b.token))}function Q(){var t,e;return((t=b.user)==null?void 0:t.display_name)||((e=b.user)==null?void 0:e.username)||"Discord User"}function ff(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),r=String(t.discord_user_id||"").trim();if(!e||!r)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=128`}function oa(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function hf(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function pf(){Mt&&(Mt.disconnect(),Mt=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),r=Math.round(t.getBoundingClientRect().height);Mt=new ResizeObserver(n=>{const i=n[0];if(!i)return;const s=Math.round(i.contentRect.width),o=Math.round(i.contentRect.height);s===e&&o===r||(e=s,r=o,aa(),sa())}),Mt.observe(t)}function aa(){clearTimeout(Oi),Oi=setTimeout(async()=>{try{await _s()}catch{}},500)}function S(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function c(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function f(t){return c(t)}uf();Pc();Sl();
