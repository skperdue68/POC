(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const la="/assets/splash.ea386b6a.png",da="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",ua="/assets/GuildSync-Graphic.9169020d.png",ee=Object.create(null);ee.open="0";ee.close="1";ee.ping="2";ee.pong="3";ee.message="4";ee.upgrade="5";ee.noop="6";const lr=Object.create(null);Object.keys(ee).forEach(t=>{lr[ee[t]]=t});const dn={type:"error",data:"parser error"},cs=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",ls=typeof ArrayBuffer=="function",ds=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Tn=({type:t,data:e},r,n)=>cs&&e instanceof Blob?r?n(e):Bi(e,n):ls&&(e instanceof ArrayBuffer||ds(e))?r?n(e):Bi(new Blob([e]),n):n(ee[t]+(e||"")),Bi=(t,e)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];e("b"+(n||""))},r.readAsDataURL(t)};function Ci(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let Jr;function fa(t,e){if(cs&&t.data instanceof Blob)return t.data.arrayBuffer().then(Ci).then(e);if(ls&&(t.data instanceof ArrayBuffer||ds(t.data)))return e(Ci(t.data));Tn(t,!1,r=>{Jr||(Jr=new TextEncoder),e(Jr.encode(r))})}const Ii="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ct=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<Ii.length;t++)Ct[Ii.charCodeAt(t)]=t;const ha=t=>{let e=t.length*.75,r=t.length,n,i=0,s,o,c,h;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const b=new ArrayBuffer(e),S=new Uint8Array(b);for(n=0;n<r;n+=4)s=Ct[t.charCodeAt(n)],o=Ct[t.charCodeAt(n+1)],c=Ct[t.charCodeAt(n+2)],h=Ct[t.charCodeAt(n+3)],S[i++]=s<<2|o>>4,S[i++]=(o&15)<<4|c>>2,S[i++]=(c&3)<<6|h&63;return b},pa=typeof ArrayBuffer=="function",Nn=(t,e)=>{if(typeof t!="string")return{type:"message",data:us(t,e)};const r=t.charAt(0);return r==="b"?{type:"message",data:ma(t.substring(1),e)}:lr[r]?t.length>1?{type:lr[r],data:t.substring(1)}:{type:lr[r]}:dn},ma=(t,e)=>{if(pa){const r=ha(t);return us(r,e)}else return{base64:!0,data:t}},us=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},fs=String.fromCharCode(30),ga=(t,e)=>{const r=t.length,n=new Array(r);let i=0;t.forEach((s,o)=>{Tn(s,!1,c=>{n[o]=c,++i===r&&e(n.join(fs))})})},ya=(t,e)=>{const r=t.split(fs),n=[];for(let i=0;i<r.length;i++){const s=Nn(r[i],e);if(n.push(s),s.type==="error")break}return n};function ba(){return new TransformStream({transform(t,e){fa(t,r=>{const n=r.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,n)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(n))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(r)})}})}let Qr;function rr(t){return t.reduce((e,r)=>e+r.length,0)}function nr(t,e){if(t[0].length===e)return t.shift();const r=new Uint8Array(e);let n=0;for(let i=0;i<e;i++)r[i]=t[0][n++],n===t[0].length&&(t.shift(),n=0);return t.length&&n<t[0].length&&(t[0]=t[0].slice(n)),r}function va(t,e){Qr||(Qr=new TextDecoder);const r=[];let n=0,i=-1,s=!1;return new TransformStream({transform(o,c){for(r.push(o);;){if(n===0){if(rr(r)<1)break;const h=nr(r,1);s=(h[0]&128)===128,i=h[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(rr(r)<2)break;const h=nr(r,2);i=new DataView(h.buffer,h.byteOffset,h.length).getUint16(0),n=3}else if(n===2){if(rr(r)<8)break;const h=nr(r,8),b=new DataView(h.buffer,h.byteOffset,h.length),S=b.getUint32(0);if(S>Math.pow(2,53-32)-1){c.enqueue(dn);break}i=S*Math.pow(2,32)+b.getUint32(4),n=3}else{if(rr(r)<i)break;const h=nr(r,i);c.enqueue(Nn(s?h:Qr.decode(h),e)),n=0}if(i===0||i>t){c.enqueue(dn);break}}}})}const hs=4;function R(t){if(t)return ka(t)}function ka(t){for(var e in R.prototype)t[e]=R.prototype[e];return t}R.prototype.on=R.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};R.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this};R.prototype.off=R.prototype.removeListener=R.prototype.removeAllListeners=R.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var n,i=0;i<r.length;i++)if(n=r[i],n===e||n.fn===e){r.splice(i,1);break}return r.length===0&&delete this._callbacks["$"+t],this};R.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),r=this._callbacks["$"+t],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,i=r.length;n<i;++n)r[n].apply(this,e)}return this};R.prototype.emitReserved=R.prototype.emit;R.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};R.prototype.hasListeners=function(t){return!!this.listeners(t).length};const Tr=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,r)=>r(e,0))(),G=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),Sa="arraybuffer";function ps(t,...e){return e.reduce((r,n)=>(t.hasOwnProperty(n)&&(r[n]=t[n]),r),{})}const wa=G.setTimeout,_a=G.clearTimeout;function Nr(t,e){e.useNativeTimers?(t.setTimeoutFn=wa.bind(G),t.clearTimeoutFn=_a.bind(G)):(t.setTimeoutFn=G.setTimeout.bind(G),t.clearTimeoutFn=G.clearTimeout.bind(G))}const Aa=1.33;function La(t){return typeof t=="string"?Ea(t):Math.ceil((t.byteLength||t.size)*Aa)}function Ea(t){let e=0,r=0;for(let n=0,i=t.length;n<i;n++)e=t.charCodeAt(n),e<128?r+=1:e<2048?r+=2:e<55296||e>=57344?r+=3:(n++,r+=4);return r}function ms(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Da(t){let e="";for(let r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e}function Ra(t){let e={},r=t.split("&");for(let n=0,i=r.length;n<i;n++){let s=r[n].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class Ma extends Error{constructor(e,r,n){super(e),this.description=r,this.context=n,this.type="TransportError"}}class Bn extends R{constructor(e){super(),this.writable=!1,Nr(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,r,n){return super.emitReserved("error",new Ma(e,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const r=Nn(e,this.socket.binaryType);this.onPacket(r)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,r={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const r=Da(e);return r.length?"?"+r:""}}class $a extends Bn{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const r=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};ya(e,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,ga(e,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=ms()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(e,r)}}let gs=!1;try{gs=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Ta=gs;function Na(){}class Ba extends $a{constructor(e){if(super(e),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,r){const n=this.request({method:"POST",data:e});n.on("success",r),n.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=e}}class X extends R{constructor(e,r,n){super(),this.createRequest=e,Nr(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;const r=ps(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=X.requestsCount++,X.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Na,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete X.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}X.requestsCount=0;X.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Oi);else if(typeof addEventListener=="function"){const t="onpagehide"in G?"pagehide":"unload";addEventListener(t,Oi,!1)}}function Oi(){for(let t in X.requests)X.requests.hasOwnProperty(t)&&X.requests[t].abort()}const Ca=function(){const t=ys({xdomain:!1});return t&&t.responseType!==null}();class Ia extends Ba{constructor(e){super(e);const r=e&&e.forceBase64;this.supportsBinary=Ca&&!r}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new X(ys,this.uri(),e)}}function ys(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Ta))return new XMLHttpRequest}catch{}if(!e)try{return new G[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const bs=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Oa extends Bn{get name(){return"websocket"}doOpen(){const e=this.uri(),r=this.opts.protocols,n=bs?{}:ps(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,r,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],i=r===e.length-1;Tn(n,this.supportsBinary,s=>{try{this.doWrite(n,s)}catch{}i&&Tr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=ms()),this.supportsBinary||(r.b64=1),this.createUri(e,r)}}const Xr=G.WebSocket||G.MozWebSocket;class xa extends Oa{createSocket(e,r,n){return bs?new Xr(e,r,n):r?new Xr(e,r):new Xr(e)}doWrite(e,r){this.ws.send(r)}}class qa extends Bn{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const r=va(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(r).getReader(),i=ba();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const s=()=>{n.read().then(({done:c,value:h})=>{c||(this.onPacket(h),s())}).catch(c=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],i=r===e.length-1;this._writer.write(n).then(()=>{i&&Tr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Pa={websocket:xa,webtransport:qa,polling:Ia},Fa=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Ga=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function un(t){if(t.length>8e3)throw"URI too long";const e=t,r=t.indexOf("["),n=t.indexOf("]");r!=-1&&n!=-1&&(t=t.substring(0,r)+t.substring(r,n).replace(/:/g,";")+t.substring(n,t.length));let i=Fa.exec(t||""),s={},o=14;for(;o--;)s[Ga[o]]=i[o]||"";return r!=-1&&n!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=Ua(s,s.path),s.queryKey=Va(s,s.query),s}function Ua(t,e){const r=/\/{2,9}/g,n=e.replace(r,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Va(t,e){const r={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,s){i&&(r[i]=s)}),r}const fn=typeof addEventListener=="function"&&typeof removeEventListener=="function",dr=[];fn&&addEventListener("offline",()=>{dr.forEach(t=>t())},!1);class ke extends R{constructor(e,r){if(super(),this.binaryType=Sa,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(r=e,e=null),e){const n=un(e);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=un(r.host).host);Nr(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Ra(this.opts.query)),fn&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},dr.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const r=Object.assign({},this.opts.query);r.EIO=hs,r.transport=e,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&ke.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(e);r.open(),this.setTransport(r)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",ke.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=e.data,this._onError(r);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(r+=La(i)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Tr(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,r,n){return this._sendPacket("message",e,r,n),this}send(e,r,n){return this._sendPacket("message",e,r,n),this}_sendPacket(e,r,n,i){if(typeof r=="function"&&(i=r,r=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const s={type:e,data:r,options:n};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),e()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(ke.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),fn&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=dr.indexOf(this._offlineEventListener);n!==-1&&dr.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,r),this.writeBuffer=[],this._prevBufferLen=0}}}ke.protocol=hs;class Ha extends ke{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let r=this.createTransport(e),n=!1;ke.priorWebsocketSuccess=!1;const i=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",m=>{if(!n)if(m.type==="pong"&&m.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;ke.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(S(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const g=new Error("probe error");g.transport=r.name,this.emitReserved("upgradeError",g)}}))};function s(){n||(n=!0,S(),r.close(),r=null)}const o=m=>{const g=new Error("probe error: "+m);g.transport=r.name,s(),this.emitReserved("upgradeError",g)};function c(){o("transport closed")}function h(){o("socket closed")}function b(m){r&&m.name!==r.name&&s()}const S=()=>{r.removeListener("open",i),r.removeListener("error",o),r.removeListener("close",c),this.off("close",h),this.off("upgrading",b)};r.once("open",i),r.once("error",o),r.once("close",c),this.once("close",h),this.once("upgrading",b),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const r=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&r.push(e[n]);return r}}class Wa extends Ha{constructor(e,r={}){const n=typeof e=="object"?e:r;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(i=>Pa[i]).filter(i=>!!i)),super(e,n)}}function ja(t,e="",r){let n=t;r=r||typeof location<"u"&&location,t==null&&(t=r.protocol+"//"+r.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=r.protocol+t:t=r.host+t),/^(https?|wss?):\/\//.test(t)||(typeof r<"u"?t=r.protocol+"//"+t:t="https://"+t),n=un(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const s=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port+e,n.href=n.protocol+"://"+s+(r&&r.port===n.port?"":":"+n.port),n}const za=typeof ArrayBuffer=="function",Ya=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,vs=Object.prototype.toString,Ka=typeof Blob=="function"||typeof Blob<"u"&&vs.call(Blob)==="[object BlobConstructor]",Ja=typeof File=="function"||typeof File<"u"&&vs.call(File)==="[object FileConstructor]";function Cn(t){return za&&(t instanceof ArrayBuffer||Ya(t))||Ka&&t instanceof Blob||Ja&&t instanceof File}function ur(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let r=0,n=t.length;r<n;r++)if(ur(t[r]))return!0;return!1}if(Cn(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return ur(t.toJSON(),!0);for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&ur(t[r]))return!0;return!1}function Qa(t){const e=[],r=t.data,n=t;return n.data=hn(r,e),n.attachments=e.length,{packet:n,buffers:e}}function hn(t,e){if(!t)return t;if(Cn(t)){const r={_placeholder:!0,num:e.length};return e.push(t),r}else if(Array.isArray(t)){const r=new Array(t.length);for(let n=0;n<t.length;n++)r[n]=hn(t[n],e);return r}else if(typeof t=="object"&&!(t instanceof Date)){const r={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=hn(t[n],e));return r}return t}function Xa(t,e){return t.data=pn(t.data,e),delete t.attachments,t}function pn(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let r=0;r<t.length;r++)t[r]=pn(t[r],e);else if(typeof t=="object")for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(t[r]=pn(t[r],e));return t}const ks=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Za=5;var v;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(v||(v={}));class ec{constructor(e){this.replacer=e}encode(e){return(e.type===v.EVENT||e.type===v.ACK)&&ur(e)?this.encodeAsBinary({type:e.type===v.EVENT?v.BINARY_EVENT:v.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let r=""+e.type;return(e.type===v.BINARY_EVENT||e.type===v.BINARY_ACK)&&(r+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(r+=e.nsp+","),e.id!=null&&(r+=e.id),e.data!=null&&(r+=JSON.stringify(e.data,this.replacer)),r}encodeAsBinary(e){const r=Qa(e),n=this.encodeAsString(r.packet),i=r.buffers;return i.unshift(n),i}}class In extends R{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let r;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(e);const n=r.type===v.BINARY_EVENT;n||r.type===v.BINARY_ACK?(r.type=n?v.EVENT:v.ACK,this.reconstructor=new tc(r),r.attachments===0&&super.emitReserved("decoded",r)):super.emitReserved("decoded",r)}else if(Cn(e)||e.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(e),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let r=0;const n={type:Number(e.charAt(0))};if(v[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===v.BINARY_EVENT||n.type===v.BINARY_ACK){const s=r+1;for(;e.charAt(++r)!=="-"&&r!=e.length;);const o=e.substring(s,r);if(o!=Number(o)||e.charAt(r)!=="-")throw new Error("Illegal attachments");const c=Number(o);if(!Ss(c)||c<0)throw new Error("Illegal attachments");if(c>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=c}if(e.charAt(r+1)==="/"){const s=r+1;for(;++r&&!(e.charAt(r)===","||r===e.length););n.nsp=e.substring(s,r)}else n.nsp="/";const i=e.charAt(r+1);if(i!==""&&Number(i)==i){const s=r+1;for(;++r;){const o=e.charAt(r);if(o==null||Number(o)!=o){--r;break}if(r===e.length)break}n.id=Number(e.substring(s,r+1))}if(e.charAt(++r)){const s=this.tryParse(e.substr(r));if(In.isPayloadValid(n.type,s))n.data=s;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,r){switch(e){case v.CONNECT:return br(r);case v.DISCONNECT:return r===void 0;case v.CONNECT_ERROR:return typeof r=="string"||br(r);case v.EVENT:case v.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&ks.indexOf(r[0])===-1);case v.ACK:case v.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class tc{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const r=Xa(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function rc(t){return typeof t=="string"}const Ss=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function nc(t){return t===void 0||Ss(t)}function br(t){return Object.prototype.toString.call(t)==="[object Object]"}function ic(t,e){switch(t){case v.CONNECT:return e===void 0||br(e);case v.DISCONNECT:return e===void 0;case v.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&ks.indexOf(e[0])===-1);case v.ACK:return Array.isArray(e);case v.CONNECT_ERROR:return typeof e=="string"||br(e);default:return!1}}function sc(t){return rc(t.nsp)&&nc(t.id)&&ic(t.type,t.data)}const oc=Object.freeze(Object.defineProperty({__proto__:null,protocol:Za,get PacketType(){return v},Encoder:ec,Decoder:In,isPacketValid:sc},Symbol.toStringTag,{value:"Module"}));function W(t,e,r){return t.on(e,r),function(){t.off(e,r)}}const ac=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class ws extends R{constructor(e,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[W(e,"open",this.onopen.bind(this)),W(e,"packet",this.onpacket.bind(this)),W(e,"error",this.onerror.bind(this)),W(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...r){var n,i,s;if(ac.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(r.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const o={type:v.EVENT,data:r};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const S=this.ids++,m=r.pop();this._registerAckCallback(S,m),o.id=S}const c=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,h=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!c||(h?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,r){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[e]=r;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let c=0;c<this.sendBuffer.length;c++)this.sendBuffer[c].id===e&&this.sendBuffer.splice(c,1);r.call(this,new Error("operation has timed out"))},i),o=(...c)=>{this.io.clearTimeoutFn(s),r.apply(this,c)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...r){return new Promise((n,i)=>{const s=(o,c)=>o?i(o):n(c);s.withError=!0,r.push(s),this.emit(e,...r)})}_addToQueue(e){let r;typeof e[e.length-1]=="function"&&(r=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(i)):(this._queue.shift(),r&&r(null,...s)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!e||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:v.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){const n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case v.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case v.EVENT:case v.BINARY_EVENT:this.onevent(e);break;case v.ACK:case v.BINARY_ACK:this.onack(e);break;case v.DISCONNECT:this.ondisconnect();break;case v.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const r=e.data||[];e.id!=null&&r.push(this.ack(e.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const r=this;let n=!1;return function(...i){n||(n=!0,r.packet({type:v.ACK,id:e,data:i}))}}onack(e){const r=this.acks[e.id];typeof r=="function"&&(delete this.acks[e.id],r.withError&&e.data.unshift(null),r.apply(this,e.data))}onconnect(e,r){this.id=e,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:v.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,e.data)}}}function gt(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}gt.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-r:t+r}return Math.min(t,this.max)|0};gt.prototype.reset=function(){this.attempts=0};gt.prototype.setMin=function(t){this.ms=t};gt.prototype.setMax=function(t){this.max=t};gt.prototype.setJitter=function(t){this.jitter=t};class mn extends R{constructor(e,r){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(r=e,e=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,Nr(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new gt({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=e;const i=r.parser||oc;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var r;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(r=this.backoff)===null||r===void 0||r.setMin(e),this)}randomizationFactor(e){var r;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(r=this.backoff)===null||r===void 0||r.setJitter(e),this)}reconnectionDelayMax(e){var r;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(r=this.backoff)===null||r===void 0||r.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Wa(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=W(r,"open",function(){n.onopen(),e&&e()}),s=c=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",c),e?e(c):this.maybeReconnectOnOpen()},o=W(r,"error",s);if(this._timeout!==!1){const c=this._timeout,h=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),r.close()},c);this.opts.autoUnref&&h.unref(),this.subs.push(()=>{this.clearTimeoutFn(h)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(W(e,"ping",this.onping.bind(this)),W(e,"data",this.ondata.bind(this)),W(e,"error",this.onerror.bind(this)),W(e,"close",this.onclose.bind(this)),W(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(r){this.onclose("parse error",r)}}ondecoded(e){Tr(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,r){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new ws(this,e,r),this.nsps[e]=n),n}_destroy(e){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(e){const r=this.encoder.encode(e);for(let n=0;n<r.length;n++)this.engine.write(r[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Rt={};function fr(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const r=ja(t,e.path||"/socket.io"),n=r.source,i=r.id,s=r.path,o=Rt[i]&&s in Rt[i].nsps,c=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let h;return c?h=new mn(n,e):(Rt[i]||(Rt[i]=new mn(n,e)),h=Rt[i]),r.query&&!e.query&&(e.query=r.queryKey),h.socket(r.path,e)}Object.assign(fr,{Manager:mn,Socket:ws,io:fr,connect:fr});window.GUILDSYNC_WEB=!0;const On="guildsync-web-session";function cc(){try{return JSON.parse(localStorage.getItem(On)||"{}")||{}}catch{return{}}}function lc(t){localStorage.setItem(On,JSON.stringify(t||{}))}function _s(){localStorage.removeItem(On)}async function dc(){return!0}async function As(){return!0}async function uc(){return!0}async function fc(){return!0}async function hc(){return!0}async function pc(){return window.location.assign("/api/auth/discord/web-login"),!0}async function mc(){var s,o,c,h,b,S,m,g;const e=cc().token||localStorage.getItem("guildsync-web-token")||"";if(!e)return{logged_in:!1,allowed:!1,status_message:"Not logged in."};const r=await fetch("/api/auth/session",{headers:{Authorization:`Bearer ${e}`}}),n=await r.json().catch(()=>({}));if(!r.ok||n.ok===!1)return _s(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:n.message||"Session expired. Please log in again."};const i={logged_in:!0,allowed:!0,token:e,user:n.user,discord_user_id:((s=n.user)==null?void 0:s.discord_user_id)||"",username:((o=n.user)==null?void 0:o.username)||"",global_name:((c=n.user)==null?void 0:c.global_name)||"",display_name:((h=n.user)==null?void 0:h.display_name)||((b=n.user)==null?void 0:b.global_name)||((S=n.user)==null?void 0:S.username)||"",avatar_url:((m=n.user)==null?void 0:m.avatar_url)||"",role:((g=n.user)==null?void 0:g.role)||"user",status_message:"Logged in."};return lc(i),i}async function gc(){return _s(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:"Logged out."}}async function yc(){return Br()}async function bc(){return Br()}async function Br(){return{watching:!1,directory:"Web upload mode",files:[{key:"banking",fileName:"GuildSyncBanking.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"},{key:"roster",fileName:"GuildSyncRoster.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"}]}}async function vc(){return Br()}async function kc(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function Sc(){return{ok:!0}}async function wc(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function _c(){return{ok:!0}}async function Ac(t){return t&&window.open(t,"_blank","noopener,noreferrer"),!0}async function Lc(){return{running:!1,message:"ESO process detection is only available in the desktop client."}}async function Ec(){throw new Error("Deposit mail sending is disabled in the web client. Use the GuildSync desktop client for ESO mail queue writes.")}async function Dc(){return{ok:!0,acknowledgements:[],records:[]}}async function Rc(){return{ok:!0}}async function Mc(){return{ok:!0}}async function $c(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSyncApplications.lua onto the GuildSync web window.")}async function Tc(){return{ok:!0}}const ir=new Map;function Mt(t,e){return ir.has(t)||ir.set(t,new Set),ir.get(t).add(e),()=>{var r;return(r=ir.get(t))==null?void 0:r.delete(e)}}const Cr="1.1.2",sr={windows:{label:"Windows detected",shortLabel:"Windows",fileName:"GuildSync-windows-amd64.zip",href:"/downloads/GuildSync-windows-amd64.zip"},macos:{label:"macOS detected",shortLabel:"macOS",fileName:"GuildSync-macos.zip",href:"/downloads/GuildSync-macos.zip"},linux:{label:"Linux detected",shortLabel:"Linux",fileName:"GuildSync-linux-amd64.zip",href:"/downloads/GuildSync-linux-amd64.zip"}},Ls="guildsync-web-savedvars-upload-banner-dismissed",Nc=new Map([["GuildSyncBanking.lua","banking"],["GuildSyncRoster.lua","roster"],["GuildSyncApplications.lua","applications"]]),Bc=30*60*1e3,Es="guildsync-pending-banking-uploads",Ds="guildsync-pending-deposit-mail",Cc=5e3,Ic=30*1e3,Rs="guildsync-pending-roster-uploads",Ms="guildsync-pending-applications-uploads",p=60*1e3,$s=7e3,Ts=1400,Ns=2400,Oc=4e3,xc=38,Bs=document.querySelector("#app");let xi=null,$t=null,qi=!1,jt=!1,hr=null,Zr=!1,en=!1,tn=!1,Se=null,ne={running:!1,message:""},Qe=null,Xe=null,pr=!1,Ze=null,rn=!1,Je=0,nn=!1,De=new Map,Ce=new Map,N="",Ue=!1,Ve=!1,It=[],y={logged_in:!1,allowed:!1,status_message:""},he={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},l=null,x=[],Ir=null,Pt=!1,vr=!1,kr="",et=new Set,tt=new Set,Ft="username",Ie="asc",gn=null,yn=null,K=[],Sr=null,Re=!1,Pi=!1,wr="",bn=null,vn=null,Oe=new Set,rt=new Set,oe="",I="",$=-1,at=!1,Gt="",U=[],Me="",we=[],_e=!1,ce="",sn=null,j=-1,ct=!1,pe="",V=[],lt="",He="",Ae=[],Le=!1,le="",Fi=null,Be=0;const qc=650;let z=-1,yt=!1,bt=[],me=!1,xe="",vt=!1,Ut=[],ge=!1,qe="",kt=!1,xn=[],ye=!1,Pe="",St="",be="",nt="",ve="",E=[],q=!1,H="",ze=!1,Or="",it="",zt="",Yt="",ae=-1,Ne=!1,w=null,Fe=[],dt=!1,ue="",Kt="",Q=-1,wt=!1,qn=null,Ot=null;const Pn=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let P=[],M="biweekly",Cs=null,$e=!1,Ge=!1,Ye="biweekly",_t=!1,ut=!1,ie="",se=null,T={targetType:"other",note:"",tickets:""},de=!1,_r=!1,F="",L={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},At="",B=-1,Y=!1,kn={biweekly:0,monthly:0};const Pc=1780786800,Te=14*24*60*60,Ar=60*60,Lr=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let D=Lr[0].id;function Fc(){Bs.innerHTML=`
    <main class="splash-screen">
      <img src="${la}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await dc(),await Gc(),Is(),qt(),await ot()},5e3)}async function Gc(){try{y=await mc()}catch(t){y={logged_in:!1,allowed:!1,status_message:""},f("session-error",k(t),{ttlMs:p})}}function Is(){Bs.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${da}" alt="" class="title-icon" />
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
            <img src="${ua}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${a(Cr)}</div>
            </div>
          </div>
          <div class="compact-header-actions">
            ${Vc()}
            <div id="discordArea" class="discord-area"></div>
          </div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${Os()}
        </nav>

        <div id="webSavedVarsUploadBannerHost">
          ${bl()}
        </div>

        <section id="guildSyncTabContent" class="guildsync-tab-content${Ws()?" web-upload-banner-dismissed":""}" aria-live="polite">
          ${qs()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await fc()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await As(),await hc()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await uc()}),yr(),vl(),Fs(),Qo(),Do(),qo(),js(),Eo(),go(),yo(),bo(),vo(),so(),Ro(),Jc(),Ee(),mt(),qi||(window.addEventListener("resize",()=>{ca(),oa()}),pf(),qi=!0)}function Os(){return Lr.map(t=>{const e=t.id===D,r=Hc(t.id,e),n=r?xs():0,i=r?`Deposit mail needs attention: ${n} item${n===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${r?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${u(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${u(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${Wc(t.icon)}</span>
          <span class="guildsync-tab-label">${a(t.label)}</span>
          ${r?`<span class="guildsync-tab-mail-badge" aria-label="${u(i)}">${n>99?"99+":a(String(n))}</span>`:""}
        </button>
      `}).join("")}function Uc(){var r;const e=`${((r=navigator.userAgentData)==null?void 0:r.platform)||""} ${navigator.platform||""} ${navigator.userAgent||""}`.toLowerCase();return e.includes("win")?sr.windows:e.includes("mac")||e.includes("darwin")?sr.macos:e.includes("linux")||e.includes("x11")?sr.linux:{...sr.windows,label:"Desktop client",shortLabel:"Windows"}}function Vc(){const t=Uc();return`
    <a
      class="desktop-client-download-button"
      href="${u(t.href)}"
      download="${u(t.fileName)}"
      title="Download ${u(t.fileName)}"
      aria-label="Download GuildSync desktop client for ${u(t.shortLabel)}"
    >
      <span class="desktop-client-download-icon" aria-hidden="true">\u2B07</span>
      <span class="desktop-client-download-copy">
        <span class="desktop-client-download-title">Download Desktop Client</span>
        <span class="desktop-client-download-subtitle">${a(t.label)} \xB7 ZIP</span>
      </span>
      <span class="desktop-client-download-caret" aria-hidden="true">\u25BE</span>
    </a>
  `}function xs(){return _()?Fr()+Zt()+Oo():0}function Hc(t,e){return t!=="more"||e?!1:xs()>0}function Wc(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function qs(){const t=Lr.find(r=>r.id===D)||Lr[0];let e="";return t.id==="discord-members"?e=Xc():t.id==="eso-members"?e=Zc():t.id==="more"?e=Kd():t.id==="settings"?e=kl():e=`
      <div class="guildsync-tab-panel" data-active-tab="${u(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${a(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${de?Ed():""}
    ${_t?su():""}
    ${Ne?yd():""}
    ${yt?Ll():""}
    ${vt?Tl():""}
    ${kt?Il():""}
    ${ze?zl():""}
    ${wt?Kc():""}
  `}function jc(){return wt||at||ct||de||_t||Ne||yt||vt||kt||ze||Ge}function zc(){return wt?!1:ze?(En(),!0):kt?(Ln(),!0):vt?(An(),!0):yt?(_n(),!0):Ne?(ht(),!0):_t?(Rr(),!0):de?(de=!1,d(),!0):at?(at=!1,d(),!0):ct?(ct=!1,d(),!0):Ge?(Ge=!1,d(),!0):!1}function Yc(t){t.key==="Escape"&&zc()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",Yc,!0),window.guildSyncGlobalModalEscapeAttached=!0);function Ps(t={}){return new Promise(e=>{Ot&&Ot(!1),wt=!0,qn={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},Ot=e,d()})}function Er(t=!1){const e=Ot;Ot=null,wt=!1,qn=null,e&&e(t===!0),d()}function Kc(){const t=qn||{};return`
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
          <button id="acceptGuildSyncConfirmButton" class="guildsync-confirm-button guildsync-confirm-accept ${u(t.confirmClass||"danger")}" type="button">${a(t.confirmLabel||"Confirm")}</button>
        </div>
      </div>
    </div>
  `}function Gi(t){var n,i,s,o;const e=(i=(n=t.target).closest)==null?void 0:i.call(n,"#cancelGuildSyncConfirmButton"),r=(o=(s=t.target).closest)==null?void 0:o.call(s,"#acceptGuildSyncConfirmButton");if(!(!e&&!r)){if(t.preventDefault(),t.stopPropagation(),e){Er(!1);return}r&&Er(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",Gi,!0),document.addEventListener("pointerup",Gi,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function Jc(){if(!wt)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=n=>{n.preventDefault(),n.stopPropagation(),Er(!1)}),e&&(e.onclick=n=>{n.preventDefault(),n.stopPropagation(),Er(!0)});const r=document.querySelector(".guildsync-confirm-overlay");r&&(r.onclick=n=>{n.target===r&&(n.preventDefault(),n.stopPropagation())})}function Fs(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(jc())return;const e=t.dataset.tabId;!e||e===D||(D=e,d())})})}function Qc(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function d(t={}){ze&&Qc();const e=document.querySelector(".guildsync-tabs"),r=document.querySelector("#guildSyncTabContent");e&&(e.innerHTML=Os()),r&&(r.innerHTML=qs()),Fs(),Qo(),Do(),qo(),js(),Eo(),go(),yo(),bo(),vo(),so(),Ro(),t.restoreDiscordSearchFocus&&Fu(),t.restoreRosterSearchFocus&&Gu(),D==="discord-members"&&(l==null?void 0:l.connected)&&x.length===0&&!Pt&&ei({silent:!0}),D==="eso-members"&&(l==null?void 0:l.connected)&&K.length===0&&!Re&&!Pi&&(Pi=!0,Lt({silent:!0})),D==="more"&&(l==null?void 0:l.connected)&&P.length===0&&!$e&&re({silent:!0}),(D==="discord-members"||D==="eso-members"||D==="settings")&&(l==null?void 0:l.connected)&&E.length===0&&!q&&Xt({silent:!0})}function Xc(){const t=xu(),e=Uu(),r=Array.from(et),n=Array.from(tt);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${a(Xo(Ir))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${Pt||vr?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${vr?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${u(kr)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!et.has(i)).map(i=>`<option value="${u(i)}">${a(i)}</option>`).join("")}
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
              ${Pn.filter(i=>!tt.has(i.id)).map(i=>`<option value="${u(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(i=>Gs("discord",i)).join("")}
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
      ${ct?ul():""}
    </div>
  `}function Zc(){const t=il(),e=al(),r=Array.from(Oe),n=Array.from(rt);return`
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
          <span class="discord-last-refresh">Last Refresh: ${a(Od(Sr))}</span>
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
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${u(wr)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!Oe.has(i)).map(i=>`<option value="${u(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All ranks</span>':r.map(i=>cl(i)).join("")}
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
              ${Pn.filter(i=>!rt.has(i.id)).map(i=>`<option value="${u(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(i=>Gs("roster",i)).join("")}
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
              ${t.length>0?t.map((i,s)=>el(i,s)).join(""):tl()}
            </tbody>
          </table>
        </div>
      </div>
      ${at?ml():""}
    </div>
  `}function el(t,e=-1){const r=rl(t.rank||""),n=r?` style="color: ${r};"`:"";return`
    <tr class="eso-roster-row${e===$?" roster-search-active-row":""}"${n} data-roster-row-index="${u(String(e))}" data-eso-account-name="${u(t.account_name||"")}">
      <td>${a(t.account_name||"")}</td>
      <td>${Fn(t.rank||"")}</td>
      <td>${a(Pr(t.joined))}</td>
      <td class="member-link-action-cell">${uo({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function tl(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">${a(Re?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function rl(t){const e=String(t||"").trim(),r=ri(e);return Hr(r==null?void 0:r.role_color)}function Fn(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${a(e)}</span>`}function nl(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":Fn(e)}function il(){const t=wr.trim().toLowerCase(),e=K.filter(r=>{const n=String(r.rank||"").trim();if(Oe.size>0&&!Oe.has(n)||!Hs(rt,Sn(r)))return!1;if(!t)return!0;const i=Pr(r.joined),s=jn(r.joined),o=Sn(r),c=Vs(r.account_name||"");return[r.account_name,n,i,s,r.joined,o,c].map(b=>String(b||"").toLowerCase()).join(" ").includes(t)});return sl(e)}function sl(t){if(!oe||!I)return t;const e=I==="desc"?-1:1;return[...t].sort((r,n)=>{const i=Ui(r,oe),s=Ui(n,oe),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:String(r.account_name||"").localeCompare(String(n.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function Ui(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const r=Number(t.joined||0);return Number.isFinite(r)&&r>0?String(r).padStart(16,"0"):""}if(e==="linked"){const r=Sn(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[r]||"9"} ${r} ${Vs(t.account_name||"")}`}return String(t.account_name||"")}function ol(t){const r=new Set(["account_name","rank","joined","linked"]).has(t)?t:"account_name";oe!==r?(oe=r,I="asc"):I==="asc"?I="desc":I==="desc"?(oe="",I=""):(oe=r,I="asc"),$=-1,d()}function or(t,e,r=""){const n=oe===t&&Boolean(I),i=n?I==="asc"?"ascending":"descending":"none",s=n?I==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${u(r)}" aria-sort="${u(i)}">
      <button
        class="discord-sort-header roster-sort-header${n?" active":""}"
        type="button"
        data-roster-sort-column="${u(t)}"
        title="Sort ${u(e)}${n&&I==="asc"?" descending":n&&I==="desc"?" not sorted":" ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function al(){return Array.from(new Set(K.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function cl(t){const e=ri(t),r=Hr(e==null?void 0:e.role_color),n=ii(r),i=ni(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-roster-rank-filter="${u(t)}"
      style="${i}"
      title="Remove ${u(t)} filter"
    >
      <span>${a(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function ll(t){const e=Pn.find(r=>r.id===t);return e?e.label:t}function Gs(t,e){const r=t==="roster"?"roster":"discord",n=ll(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${r}-link-status-filter="${u(e)}"
      title="Remove ${u(n)} link filter"
    >
      <span>${a(n)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Us(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked"&&String(r.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function dl(t){return Us(qr(t==null?void 0:t.discord_id))}function Sn(t){return Us(xr(t==null?void 0:t.account_name))}function Vs(t){const e=xr(t),r=lo({mode:"eso-to-discord",esoAccountName:t}),n=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean),i=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="candidate").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean);return[r.label,r.title,n.join(" "),i.join(" ")].filter(Boolean).join(" ")}function Hs(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function ul(){return`
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
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${u(pe)}" />
        </div>

        ${le?`<div class="discord-data-error">${a(le)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${fl()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${He?`: ${a(He)}`:""}</div>
            ${hl()}
          </div>
        </div>
      </div>
    </div>
  `}function fl(){return Le&&V.length===0?'<div class="roster-history-muted">Searching...</div>':V.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${V.map((t,e)=>`
        <button class="roster-history-match${e===z||t.discord_id===lt?" is-selected":""}" type="button" data-discord-history-id="${u(t.discord_id)}" data-discord-history-name="${u(wn(t))}">
          <span>${a(wn(t))}</span>
          <strong>${a(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===z?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function hl(){return lt?Le&&Ae.length===0?'<div class="roster-history-muted">Loading history...</div>':Ae.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
              <td class="roster-history-when-cell">${a(jn(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${a(pl(t.event_type))}</td>
              <td>${a(t.old_value||"")}</td>
              <td>${a(t.new_value||"")}</td>
              <td>${a(t.initiator||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function wn(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function pl(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function ml(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(Gt)}" />
        </div>

        ${ce?`<div class="discord-data-error">${a(ce)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${gl()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${Me?`: ${a(Me)}`:""}</div>
            ${yl()}
          </div>
        </div>
      </div>
    </div>
  `}function gl(){return _e&&U.length===0?'<div class="roster-history-muted">Searching...</div>':U.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${U.map((t,e)=>`
        <button class="roster-history-match${e===j||t.account_name===Me?" is-selected":""}" type="button" data-roster-history-account="${u(t.account_name)}">
          <span>${a(t.account_name)}</span>
          <strong>${a(t.rank||"")}</strong>
          ${e===j?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function yl(){return Me?_e&&we.length===0?'<div class="roster-history-muted">Loading history...</div>':we.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
              <td class="roster-history-when-cell">${a(jn(t.timestamp))}</td>
              <td>${a(t.event_type||"")}</td>
              <td>${nl(t.rank)}</td>
              <td>${a(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function Jt(){return typeof window<"u"&&window.GUILDSYNC_WEB===!0}function Ws(){if(!Jt())return!0;try{return localStorage.getItem(Ls)==="1"}catch{return!1}}function bl(){return!Jt()||Ws()?"":`
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
  `}function vl(){const t=document.querySelector("#webSavedVarsUploadBannerDismissButton");!t||t.addEventListener("click",()=>{var e,r;try{localStorage.setItem(Ls,"1")}catch{}(e=document.querySelector("#webSavedVarsUploadBannerHost"))==null||e.remove(),(r=document.querySelector(".guildsync-tab-content"))==null||r.classList.add("web-upload-banner-dismissed")})}function kl(){return`
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
  `}function js(){var t,e,r,n;D==="settings"&&((t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>Ks()),(e=document.querySelector("#runDiscordRankAuditReportButton"))==null||e.addEventListener("click",()=>$l()),(r=document.querySelector("#runDiscordLastSeenReportButton"))==null||r.addEventListener("click",()=>Cl()),(n=document.querySelector("#runMemberLinksReportButton"))==null||n.addEventListener("click",()=>Hl()))}function mr(){return Jt()&&_()&&(l==null?void 0:l.connected)===!0}function zs(){if(!Jt())return null;let t=document.querySelector("#webSavedVarsFullScreenDropOverlay");return t||(t=document.createElement("div"),t.id="webSavedVarsFullScreenDropOverlay",t.className="web-savedvars-fullscreen-drop-overlay",t.setAttribute("aria-hidden","true"),t.innerHTML=`
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
  `,document.body.appendChild(t),t)}function Vi(){const t=zs();!t||(t.classList.add("is-visible"),t.setAttribute("aria-hidden","false"))}function on(){const t=document.querySelector("#webSavedVarsFullScreenDropOverlay");!t||(t.classList.remove("is-visible"),t.setAttribute("aria-hidden","true"))}function Tt(t){var r;return Array.from(((r=t==null?void 0:t.dataTransfer)==null?void 0:r.types)||[]).includes("Files")}function Sl(t){!(t!=null&&t.dataTransfer)||(t.dataTransfer.dropEffect=mr()?"copy":"none")}function Ys(t){const e=String(t||"").split(/[\\/]/).pop();return Nc.get(e)||""}function wl(){if(!Jt())return;zs();const t=e=>{!Tt(e)||(e.preventDefault(),e.stopPropagation(),Sl(e))};document.addEventListener("dragenter",e=>{!Tt(e)||(t(e),Je+=1,mr()&&Vi())},!0),document.addEventListener("dragover",e=>{t(e),Tt(e)&&mr()&&Vi()},!0),document.addEventListener("dragleave",e=>{!Tt(e)||(e.preventDefault(),e.stopPropagation(),Je=Math.max(0,Je-1),Je===0&&on())},!0),document.addEventListener("drop",async e=>{var n;if(!Tt(e))return;if(t(e),Je=0,on(),!mr()){f("web-savedvars-drop-not-ready","SavedVariables drag/drop is only available while logged in and connected to the GuildSync server.",{ttlMs:p});return}const r=Array.from(((n=e.dataTransfer)==null?void 0:n.files)||[]);await _l(r)},!0),window.addEventListener("blur",()=>{Je=0,on()})}async function _l(t=[]){if(nn){f("web-savedvars-drop-busy","A SavedVariables upload is already processing. Please wait for it to finish.",{ttlMs:p});return}const e=Array.from(t||[]).filter(Boolean);if(!e.length){f("web-savedvars-drop-empty","No file was dropped.",{ttlMs:p});return}const r=e.find(n=>!Ys(n.name));if(r){f("web-savedvars-drop-invalid",`Unsupported file: ${r.name}. Drop only GuildSyncBanking.lua, GuildSyncRoster.lua, or GuildSyncApplications.lua.`,{ttlMs:p});return}nn=!0;try{for(const n of e)await Al(n)}finally{nn=!1}}async function Al(t){const e=Ys(t.name);if(!e)throw new Error(`Unsupported file: ${t.name}`);const r=`web-savedvars-upload-${e}`,n=await t.text();if(!String(n||"").trim())throw new Error(`${t.name} is empty.`);f(r,`Uploading ${t.name}...`);try{const i=await A("guildsync:upload-savedvars-raw",{file_name:t.name,raw_lua_text:n,source:"web-drag-drop"},12e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||`${t.name} upload was rejected.`);e==="banking"?await re({silent:!0}):e==="roster"&&(await Lt({silent:!0}),await Xt({silent:!0})),f(r,i.message||`${t.name} uploaded and processed.`,{ttlMs:p})}catch(i){throw f(r,k(i),{ttlMs:p}),i}Wr("version")}function Ks(){yt=!0,xe="",d(),wo()}function _n(){yt=!1,xe="",d()}function Ll(){const t=El(),e=Dl(),r=bt.length;return`
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
          <span class="roster-history-muted">${a(String(r))} total row${r===1?"":"s"}</span>
        </div>

        ${xe?`<div class="discord-data-error">${a(xe)}</div>`:""}

        <div class="report-results-content">
          ${me&&r===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!me&&r===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${r>0?Hi("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${r>0?Hi("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${a(Qs())}</textarea>
      </div>
    </div>
  `}function El(){return bt.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function Dl(){return bt.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function Hi(t,e,r,n){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${a(t)}</h4>
          <p>${a(e)}</p>
        </div>
        <span>${a(String(r.length))} row${r.length===1?"":"s"}</span>
      </div>
      ${r.length>0?Rl(r):`<div class="roster-history-muted report-section-empty">${a(n)}</div>`}
    </section>
  `}function Rl(t=bt){return`
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
              <td>${Fn(e.rank||"")}</td>
              <td>${a(Pr(e.joined))}</td>
              <td>${a(Vr(e.purchased_tickets||0))}</td>
              <td>${a(Js(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Js(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function Qs(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Discord Link"]];for(const e of bt){const r=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([r,e.account_name||"",e.rank||"",Pr(e.joined),Vr(e.purchased_tickets||0),Js(e)])}return t.map(e=>e.map(Gr).join("	")).join(`
`)}async function Ml(){const t=Qs();if(await Ur(t)){f("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#associateTicketReportTsv");r&&(r.focus(),r.select()),f("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function $l(){vt=!0,qe="",d(),So()}function An(){vt=!1,qe="",d()}function Tl(){const t=Ut.length;return`
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
          <span class="roster-history-muted">${a(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${qe?`<div class="discord-data-error">${a(qe)}</div>`:""}

        <div class="report-results-content">
          ${ge&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!ge&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?Nl(Ut):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${a(eo())}</textarea>
      </div>
    </div>
  `}function Nl(t=Ut){return`
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
              <td data-label="Discord Member" class="discord-rank-audit-member-cell">${a(Xs(e))}</td>
              <td data-label="Discord Rank Role" class="discord-rank-audit-discord-cell">${a(e.discord_rank||"No matching rank role")}</td>
              <td data-label="Linked ESO Account(s)" class="discord-rank-audit-eso-account-cell">${a(e.eso_accounts||"No linked ESO account")}</td>
              <td data-label="ESO Rank" class="discord-rank-audit-eso-rank-cell">${a(e.eso_rank||"None")}</td>
              <td data-label="Issue" class="discord-rank-audit-issue-cell">${a(Zs(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Xs(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function Zs(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function eo(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of Ut)t.push([Xs(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",Zs(e)]);return t.map(e=>e.map(Gr).join("	")).join(`
`)}async function Bl(){const t=eo();if(await Ur(t)){f("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#discordRankAuditReportTsv");r&&(r.focus(),r.select()),f("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function Cl(){kt=!0,Pe="",St="",d(),ko(),E.length===0&&!q&&Xt({silent:!0})}function Ln(){kt=!1,Pe="",St="",be="",nt="",ve="",d()}function Il(){const t=Gn(),e=xn.length;return`
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
            value="${u(St)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${be===""?"selected":""}>All link statuses</option>
            <option value="linked" ${be==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${be==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${be==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${Pe?`<div class="discord-data-error discord-last-seen-report-error">${a(Pe)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${ye&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!ye&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?Ol(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${a(ro(t))}</textarea>
      </div>
    </div>
  `}function Ol(t=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${Nt("name","Discord Member")}</th>
            <th>${Nt("eso","Linked ESO Account")}</th>
            <th>${Nt("date","Last Seen")}</th>
            <th>${Nt("days","Days Since")}</th>
            <th>${Nt("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr class="discord-last-seen-row ${u(Ul(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${u(We(e).status)}" data-discord-last-seen-search="${u(to(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${Gl(e)}
                  <span>${a(ft(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${ql(e)}</td>
              <td>${a(Un(e.last_seen))}</td>
              <td>${a(Vn(e.last_seen))}</td>
              <td>${a(Dr(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function Nt(t,e){const r=nt===t,n=r?ve==="asc"?"\u25B2":"\u25BC":"\u2195",i=r?`${e}: ${ve==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${r?" active":""}" type="button" data-discord-last-seen-sort="${u(t)}" title="${u(i)}">
      <span>${a(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${a(n)}</span>
    </button>
  `}function Gn(){const t=[...xn],e=nt,r=ve;if(!e||!r)return t;const n=r==="desc"?-1:1;return t.sort((i,s)=>{var o,c;if(e==="date"){const h=Number(i.last_seen||0)||0,b=Number(s.last_seen||0)||0;return(h-b)*n}if(e==="days")return(Wi(i.last_seen)-Wi(s.last_seen))*n;if(e==="action")return Dr(i.last_seen_action).localeCompare(Dr(s.last_seen_action),void 0,{sensitivity:"base"})*n;if(e==="eso"){const h=We(i),b=We(s),S={linked:0,candidate:1,unlinked:2},m=((o=S[h.status])!=null?o:9)-((c=S[b.status])!=null?c:9);return m!==0?m*n:h.esoAccountName.localeCompare(b.esoAccountName,void 0,{sensitivity:"base"})*n}return ft(i).localeCompare(ft(s),void 0,{sensitivity:"base"})*n})}function xl(t){nt!==t?(nt=t,ve="asc"):ve==="asc"?ve="desc":(nt="",ve=""),d()}function ft(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function to(t){return[ft(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,Pl(t),Un(t==null?void 0:t.last_seen),Vn(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function We(t){const e=sd(t==null?void 0:t.discord_id),r=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),n=String((e==null?void 0:e.eso_account_name)||"").trim();return r==="linked"&&n?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:n,title:`Linked ESO account: ${n}`}:(r==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&n?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:n,title:`Fuzzy ESO account candidate: ${n}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function ql(t){const e=We(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${u(e.className)}"
      title="${u(e.title)}"
      aria-label="${u(e.label)}"
      role="img"
    ></span>
  `}function Pl(t){const e=We(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function Fl(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!r)return"";if(/^https?:\/\//i.test(e))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function Gl(t){const e=ft(t),r=e?e.slice(0,2).toUpperCase():"?",n=Fl(t);return n?`<span class="discord-member-avatar"><img src="${u(n)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${a(r)}</span>`}function Un(t){const e=Number(t);if(!e)return"Never";const r=new Date(e*1e3);if(Number.isNaN(r.getTime()))return String(t||"");const n=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(r).reduce((i,s)=>(i[s.type]=s.value,i),{});return`${n.month}/${n.day}/${n.year} ${n.hour}:${n.minute} ${n.dayPeriod}`}function Ul(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const r=(Date.now()-e*1e3)/864e5;return r>30?"discord-last-seen-red":r>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function Vn(t){const e=Number(t);if(!e)return"Never";const r=Date.now()-e*1e3;if(!Number.isFinite(r))return"";if(r<0)return"0 days";const n=Math.floor(r/864e5);return`${n} day${n===1?"":"s"}`}function Wi(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const r=Date.now()-e*1e3;return Number.isFinite(r)?r<0?0:Math.floor(r/864e5):Number.POSITIVE_INFINITY}function Dr(t){return String(t||"").trim()||"None tracked"}function ro(t=Gn()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const r of t){const n=We(r);e.push([ft(r),n.label||"",n.esoAccountName||"",Un(r==null?void 0:r.last_seen),Vn(r==null?void 0:r.last_seen),Dr(r==null?void 0:r.last_seen_action),(r==null?void 0:r.username)||"",(r==null?void 0:r.discord_id)||""])}return e.map(r=>r.map(Gr).join("	")).join(`
`)}async function Vl(){const t=Gn().filter(i=>{const s=te(St),o=String(be||"").trim().toLowerCase(),c=!s||te(to(i)).includes(s),h=!o||We(i).status===o;return c&&h}),e=ro(t);if(await Ur(e)){f("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#discordLastSeenReportTsv");n&&(n.focus(),n.select()),f("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function Hl(){ze=!0,H="",d(),E.length===0&&!q&&Xt({silent:!0})}function En(){ze=!1,Or="",it="",zt="",Yt="",ae=-1,d()}function no(t){return[...new Set((Array.isArray(E)?E:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function io(t,e){return t.map(r=>`<option value="${u(r)}" ${e===r?"selected":""}>${a(r)}</option>`).join("")}function Wl(){return io(no("link_status"),zt)}function jl(){return io(no("link_method"),Yt)}function zl(){return`
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
          <span class="roster-history-muted">${a(String(E.length))} link/candidate row${E.length===1?"":"s"}</span>
        </div>

        <div class="member-links-report-filter-row">
          <input
            id="memberLinksReportSearchInput"
            class="member-links-report-search-input"
            type="search"
            autocomplete="off"
            spellcheck="false"
            placeholder="Search Discord account or ESO member..."
            value="${u(Or)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${zt===""?"selected":""}>All statuses</option>
            ${Wl()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${Yt===""?"selected":""}>All methods</option>
            ${jl()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${it===""?"selected":""}>All actions</option>
            <option value="needs-link" ${it==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${it==="can-unlink"?"selected":""}>Unlink Available</option>
          </select>
        </div>

        ${H?`<div class="discord-data-error member-links-report-error">${a(H)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${Ql()}
        </div>
      </div>
    </div>
  `}function so(){var r,n,i,s,o,c;if(!ze)return;(r=document.querySelector("#closeMemberLinksReportButton"))==null||r.addEventListener("click",En),(n=document.querySelector("#refreshMemberLinksButton"))==null||n.addEventListener("click",()=>Xt()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>nd());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",Xl),t.addEventListener("keydown",rd)),(s=document.querySelector("#memberLinksReportActionFilter"))==null||s.addEventListener("change",Zl),(o=document.querySelector("#memberLinksReportStatusFilter"))==null||o.addEventListener("change",ed),(c=document.querySelector("#memberLinksReportMethodFilter"))==null||c.addEventListener("change",td),Qt(),document.querySelectorAll("[data-accept-member-candidate]").forEach(h=>{h.addEventListener("click",()=>ao(h.dataset.acceptMemberCandidate||"",h.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(h=>{h.addEventListener("click",()=>id(h.dataset.unlinkMemberLink||"",h.dataset.unlinkMemberLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",h=>{h.target===e&&En()})}function ji(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function zi(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Yl(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Kl(t){return[...Array.isArray(t)?t:[]].sort((e,r)=>{const n=ji(e)-ji(r);if(n!==0)return n;const i=zi(e).localeCompare(zi(r),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((r==null?void 0:r.discord_user_id)||""),void 0,{sensitivity:"base"})})}function Jl(t){const e=Dn(t);let r="";e==="Username"?r=(t==null?void 0:t.discord_username)||"":e==="Global Name"?r=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(r=(t==null?void 0:t.discord_server_nickname)||""),r||(r=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const n=e?` <span class="member-link-report-match-field">(${a(e)})</span>`:"";return`<span class="member-link-report-discord-name">${a(r)}</span>${n}`}function Ql(){return q&&E.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(E)||E.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${Kl(E).map(e=>{var s;const r=String(e.link_status||"").trim().toLowerCase(),n=String(e.link_method||"").trim().toLowerCase(),i=Jl(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${u(Yl(e))}"
                data-member-links-report-status="${u(r)}"
                data-member-links-report-method="${u(n)}"
                data-member-links-report-action="${u(r==="linked"?"can-unlink":r==="candidate"?"needs-link":"")}"
              >
                <td>${a(e.eso_account_name||"")}</td>
                <td>${i}</td>
                <td class="member-links-status-col">${a(r||"")}</td>
                <td class="member-links-method-col">${a(n||"")}${Number(e.locked||0)===1?" \u{1F512}":""}</td>
                <td class="member-links-action-col">
                  <div class="member-link-actions">
                    ${r==="candidate"?`<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${u(e.eso_account_name||"")}" data-accept-member-candidate-discord-id="${u(e.discord_user_id||"")}" aria-label="Accept candidate link" title="Accept candidate link">\u2713</button>`:""}
                    ${r==="linked"?`<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${u(e.eso_account_name||"")}" data-unlink-member-link-discord-id="${u(e.discord_user_id||"")}" aria-label="Unlink this ESO/Discord pair" title="Unlink this ESO/Discord pair">\u{1F5D1}</button>`:""}
                  </div>
                </td>
                <td class="member-links-confidence-col">${a(String((s=e.match_confidence)!=null?s:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function oo(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function Yi(t){const e=oo();if(e.forEach(n=>n.classList.remove("member-links-report-row-active")),e.length===0){ae=-1;return}ae=Math.max(0,Math.min(t,e.length-1));const r=e[ae];r.classList.add("member-links-report-row-active"),r.scrollIntoView({block:"nearest"})}function Qt(){const t=te(Or),e=String(it||"").trim().toLowerCase(),r=String(zt||"").trim().toLowerCase(),n=String(Yt||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let s=0;i.forEach(c=>{const h=te(c.dataset.memberLinksReportSearch||""),b=String(c.dataset.memberLinksReportAction||"").trim().toLowerCase(),S=String(c.dataset.memberLinksReportStatus||"").trim().toLowerCase(),m=String(c.dataset.memberLinksReportMethod||"").trim().toLowerCase(),Ke=(!t||h.includes(t))&&(!e||b===e)&&(!r||S===r)&&(!n||m===n);c.hidden=!Ke,c.classList.remove("member-links-report-row-active"),Ke&&(s+=1)});const o=document.querySelector("#memberLinksReportSearchEmpty");o&&(o.hidden=s!==0),ae=-1}function Xl(t){Or=t.target.value||"",Qt()}function Zl(t){it=t.target.value||"",Qt()}function ed(t){zt=t.target.value||"",Qt()}function td(t){Yt=t.target.value||"",Qt()}function rd(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=oo();if(e.length===0)return;if(t.key==="ArrowDown"){const n=ae<0?0:ae+1;Yi(n>=e.length?e.length-1:n);return}const r=ae<0?e.length-1:ae-1;Yi(r<0?0:r)}async function Xt(t={}){if(!(l!=null&&l.connected)){H="You must be connected to load member links.",d();return}q=!0,H="",t.silent||d();try{const e=await A("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");E=Array.isArray(e.links)?e.links:[]}catch(e){H=k(e)}finally{q=!1,d()}}async function nd(){if(!(l!=null&&l.connected)||!y.logged_in){H="You must be logged in and connected to run auto-linking.",d();return}q=!0,H="",d();try{const t=await A("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");E=Array.isArray(t.links)?t.links:[],f("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:p})}catch(t){H=k(t)}finally{q=!1,d()}}async function ao(t,e=""){try{const r=await A("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to accept candidate.");E=Array.isArray(r.links)?r.links:E,f("member-link-accepted",r.message||"Candidate accepted as a link.",{ttlMs:p})}catch(r){H=k(r),f("member-link-accept-error",H,{ttlMs:p})}}async function id(t,e=""){if(!!await Ps({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const n=await A("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to unlink member.");E=Array.isArray(n.links)?n.links:E,f("member-link-unlinked",n.message||"Member link removed.",{ttlMs:p})}catch(n){H=k(n)}d()}}function je(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function xr(t){const e=je(t);return e?E.filter(r=>je(r.eso_account_name)===e):[]}function qr(t){const e=String(t||"").trim();return e?E.filter(r=>String(r.discord_user_id||"").trim()===e):[]}function co(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const r=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(r.length>0){const i=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const s=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return s||r[0]}const n=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return n||e[0]}function sd(t){return co(qr(t))}function od(t){return`${je(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function Hn(){return w?w.mode==="discord-to-eso"?qr(w.discordUserId):xr(w.esoAccountName):[]}function ad(t){const e=String(t||"").trim(),r=x.find(n=>String(n.discord_id||"").trim()===e);return r&&(r.server_nickname||r.global_name||r.username||r.discord_id)||e}function lo(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?qr(t.discordUserId):xr(t.esoAccountName),n=co(r),i=String((n==null?void 0:n.link_status)||"").trim().toLowerCase(),s=r.filter(c=>String(c.link_status||"").trim().toLowerCase()==="linked").length,o=r.filter(c=>String(c.link_status||"").trim().toLowerCase()==="candidate").length;return s>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?s===1?n.eso_account_name:`${s} ESO accounts`:s===1?n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member":`${s} Discord accounts`}`}:i==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?n.eso_account_name:n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member"}`}:i==="blocked"||Number((n==null?void 0:n.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function uo(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,n=lo(t);return`
    <button
      class="member-link-status-dot member-link-status-${u(n.className)}"
      type="button"
      title="${u(n.title)}"
      aria-label="${u(n.label)}"
      data-open-member-link-dialog="${u(e)}"
      data-member-link-value="${u(r||"")}"
    ></button>
  `}function cd(){return w?w.mode==="discord-to-eso"?ad(w.discordUserId):w.esoAccountName||"":""}function fo(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function Dn(t){const e=fo((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const r=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(r.includes("discord_username")||r.includes("username"))return"Username";if(r.includes("discord_display_name")||r.includes("global")||r.includes("display"))return"Global Name";if(r.includes("discord_server_nickname")||r.includes("server")||r.includes("nickname"))return"Server Nickname";const n=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(n==="exact"||n==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",s=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const c of s){const h=ld(i,c.value);(!o||h>o.score)&&(o={...c,score:h})}if(o&&o.score>0)return o.field}return""}function te(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function ld(t,e){const r=te(t),n=te(e);if(!r||!n)return 0;if(r===n)return 100;if((r.includes(n)||n.includes(r))&&Math.min(r.length,n.length)>=4)return 88;const i=Math.abs(r.length-n.length),s=[...r].findIndex((c,h)=>c!==n[h]),o=s===-1?Math.min(r.length,n.length):s;return Math.max(0,Math.min(75,Math.round(o*10-i*3)))}function dd(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function ud(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function fd(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),r=dd(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${a(r)}</span>`}function hd(t){var c;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",r=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",n=String(t.link_status||"").trim().toLowerCase(),o=n==="linked"?`<button
        class="member-link-trash-button"
        type="button"
        aria-label="Unlink this ESO/Discord pair"
        title="Unlink this ESO/Discord pair"
        data-unlink-dialog-member-link
        data-unlink-eso-account="${u(t.eso_account_name||"")}"
        data-unlink-discord-user-id="${u(t.discord_user_id||"")}"
      >\u{1F5D1}</button>`:n==="candidate"?`<button
          class="member-link-approve-button"
          type="button"
          aria-label="Approve suggested link"
          title="Approve suggested link"
          data-accept-dialog-member-candidate="${u(t.eso_account_name||"")}"
          data-accept-dialog-discord-user-id="${u(t.discord_user_id||"")}"
        >\u2713</button>`:"";return`
    <div class="member-link-current-card">
      <div class="member-link-current-details">
        <div><span>ESO:</span> ${a(t.eso_account_name||"")}</div>
        <div><span>Discord:</span> ${a(e)}</div>
        <div><span>Status:</span> ${fd(t)} \xB7 ${a(ud(t.link_method))} \xB7 ${a(String((c=t.match_confidence)!=null?c:""))}% \xB7 ${a(r)}</div>
        ${Dn(t)?`<div><span>Matched:</span> Matched on ${a(Dn(t))}</div>`:""}
      </div>
      ${o}
    </div>
  `}function pd(){const t=Hn();return t.length?[...t].sort((r,n)=>{var h,b;const i=String(r.link_status||"").trim().toLowerCase(),s=String(n.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},c=((h=o[i])!=null?h:9)-((b=o[s])!=null?b:9);return c!==0?c:Number(n.match_confidence||0)-Number(r.match_confidence||0)}).map(r=>hd(r)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function md(){if(dt)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(ue)return`<div class="discord-data-error">${a(ue)}</div>`;if(!Array.isArray(Fe)||Fe.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(Hn().map(r=>od(r))),e=[...Fe].filter(r=>{const n=(w==null?void 0:w.mode)==="discord-to-eso"?`${je(r.account_name)}::${String(w.discordUserId||"").trim()}`:`${je(w==null?void 0:w.esoAccountName)}::${String(r.discord_id||"").trim()}`;return!t.has(n)}).sort((r,n)=>{const i=Number(n.confidence||0)-Number(r.confidence||0);return i!==0?i:Ki(r).localeCompare(Ki(n),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(r=>gd(r)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function Ki(t){return((w==null?void 0:w.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function gd(t,e={}){var m,g,O;const r=(w==null?void 0:w.mode)||"",n=r==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=fo(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),s=r==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[s,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),c=r==="discord-to-eso"?t.account_name:t.discord_id,h=e.disabled===!0,b=[n,s,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),S=[n,o,`${(m=t.confidence)!=null?m:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${u(c||"")}" data-member-link-option-search="${u(b)}" title="${u(S)}" ${h?"disabled":""}>
      <span class="member-link-option-name" title="${u(n||"")}">${a(n||"")}</span>
      <span class="member-link-option-subtitle" title="${u(o||"")}">${a(o||"")}</span>
      <span class="member-link-option-confidence" title="${u(String((g=t.confidence)!=null?g:0))}%">${a(String((O=t.confidence)!=null?O:0))}%</span>
    </button>
  `}function yd(){const t=(w==null?void 0:w.mode)||"",e=cd(),r=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
            ${pd()}
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
              value="${u(Kt)}"
            />
            ${md()}
          </section>
        </div>

      </div>
    </div>
  `}async function ho(t,e){if(!(l!=null&&l.connected)||!_()){f("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:p});return}Ne=!0,w=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},Fe=[],dt=!0,ue="",Kt="",Q=-1,d();try{if(!Array.isArray(E)||E.length===0){const i=await A("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(E=Array.isArray(i.links)?i.links:[])}const n=await A("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load link suggestions.");Fe=Array.isArray(n.options)?n.options:[]}catch(r){ue=k(r)}finally{dt=!1,d()}}function ht(){document.removeEventListener("keydown",Rn),Ne=!1,w=null,Fe=[],dt=!1,ue="",Kt="",Q=-1,d()}function po(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function Ji(t){const e=po();if(e.forEach(n=>n.classList.remove("member-link-option-row-active")),e.length===0){Q=-1;return}Q=Math.max(0,Math.min(t,e.length-1));const r=e[Q];r.classList.add("member-link-option-row-active"),r.scrollIntoView({block:"nearest"})}function mo(){const t=te(Kt),e=[...document.querySelectorAll(".member-link-option-row")];let r=0;e.forEach(i=>{const s=te(i.dataset.memberLinkOptionSearch||i.textContent||""),o=!t||s.includes(t);i.hidden=!o,i.classList.remove("member-link-option-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinkSuggestionSearchEmpty");n&&(n.hidden=r!==0),Q=-1}function bd(t){Kt=t.target.value||"",mo()}function vd(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=po();if(e.length===0)return;if(t.key==="ArrowDown"){const n=Q<0?0:Q+1;Ji(n>=e.length?e.length-1:n);return}const r=Q<0?e.length-1:Q-1;Ji(r<0?0:r)}function Rn(t){!Ne||t.key==="Escape"&&(t.preventDefault(),ht())}async function kd(t){if(!(!w||!t))try{const e=w.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:w.discordUserId}:{esoAccountName:w.esoAccountName,discordUserId:t},r=await A("guildsync:manual-link-member",e,3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to link members.");E=Array.isArray(r.links)?r.links:E,f("member-link-saved",r.message||"Member link saved.",{ttlMs:p}),ht()}catch(e){ue=k(e),d()}}async function Sd(t,e=""){await ao(t,e),ht()}async function wd(){if(!!w){dt=!0,ue="",d();try{const t=w.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:w.discordUserId}:{mode:"eso-to-discord",accountName:w.esoAccountName},e=await A("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");Fe=Array.isArray(e.options)?e.options:[]}catch(t){ue=k(t)}finally{dt=!1,d()}}}async function _d(t="",e=""){const r=Hn().find(i=>je(i.eso_account_name)===je(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!r||!await Ps({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await A("guildsync:manual-unlink-member",{esoAccountName:r.eso_account_name,discordUserId:r.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");E=Array.isArray(i.links)?i.links:E,f("member-link-unlinked",i.message||"Member link removed.",{ttlMs:p}),await wd()}catch(i){ue=k(i),d()}}function go(){var r;if(!Ne)return;document.removeEventListener("keydown",Rn),document.addEventListener("keydown",Rn),(r=document.querySelector("#closeMemberLinkDialogButton"))==null||r.addEventListener("click",ht);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",bd),t.addEventListener("keydown",vd),mo()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(n=>{n.addEventListener("click",()=>_d(n.dataset.unlinkEsoAccount||"",n.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(n=>{n.addEventListener("click",()=>kd(n.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(n=>{n.addEventListener("click",()=>Sd(n.dataset.acceptDialogMemberCandidate||"",n.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",n=>{n.target===e&&ht()})}function yo(){var e,r,n;if(!yt)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",_n),(r=document.querySelector("#rerunAssociateTicketReportButton"))==null||r.addEventListener("click",()=>wo()),(n=document.querySelector("#copyAssociateTicketReportGridButton"))==null||n.addEventListener("click",()=>Ml());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&_n()})}function bo(){var e,r,n;if(!vt)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",An),(r=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||r.addEventListener("click",()=>So()),(n=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||n.addEventListener("click",()=>Bl());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&An()})}function vo(){var n,i,s;if(!kt)return;(n=document.querySelector("#closeDiscordLastSeenReportButton"))==null||n.addEventListener("click",Ln),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>ko()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>Vl()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(o=>{o.addEventListener("click",()=>xl(o.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",Ad);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",Ld),Wn();const r=document.querySelector(".discord-last-seen-report-overlay");r&&r.addEventListener("click",o=>{o.target===r&&Ln()})}function Ad(t){St=t.target.value||"",Wn()}function Ld(t){be=t.target.value||"",Wn()}function Wn(){const t=te(St),e=String(be||"").trim().toLowerCase(),r=[...document.querySelectorAll("[data-discord-last-seen-row]")];let n=0;r.forEach(s=>{const o=te(s.dataset.discordLastSeenSearch||s.textContent||""),c=String(s.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),S=(!t||o.includes(t))&&(!e||c===e);s.hidden=!S,S&&(n+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=n!==0)}async function ko(){if(!(l!=null&&l.connected)||!_()){Pe="You must be logged in and connected to run this report.",d();return}ye=!0,Pe="",d();try{const t=await A("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");x=ti(t.members),xn=[...x]}catch(t){Pe=k(t)}finally{ye=!1,d(),C("discordLastSeenReportSearchInput")}}async function So(){if(!(l!=null&&l.connected)||!_()){qe="You must be logged in and connected to run this report.",d();return}ge=!0,qe="",d();try{const t=await A("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Ut=Array.isArray(t.rows)?t.rows:[]}catch(t){qe=k(t)}finally{ge=!1,d()}}async function wo(){if(!(l!=null&&l.connected)||!_()){xe="You must be logged in and connected to run this report.",d();return}me=!0,xe="",d();try{const t=await A("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");bt=Array.isArray(t.rows)?t.rows:[]}catch(t){xe=k(t)}finally{me=!1,d()}}function st(){const t=String(At||"").trim().toLowerCase(),e={account_name:"Anonymous",rank:"Manual Entry"},r=new Set(["anonymous"]),n=K.filter(i=>String(i.account_name||"").trim()).filter(i=>{const o=String(i.account_name||"").trim().toLowerCase();return!o||r.has(o)||t&&!o.includes(t)?!1:(r.add(o),!0)}).slice().sort((i,s)=>{const o=String(i.account_name||"").toLowerCase(),c=String(s.account_name||"").toLowerCase(),h=t&&o.startsWith(t)?0:1,b=t&&c.startsWith(t)?0:1;return h!==b?h-b:o.localeCompare(c)}).slice(0,19);return[e,...n]}function _o(t=st()){const e=String(L.accountName||"").trim();return t.length===0?'<div class="roster-history-muted manual-ticket-no-matches">No matching guild members found.</div>':t.map((r,n)=>`
        <button class="roster-history-match${n===B||r.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${u(r.account_name)}" role="option" aria-selected="${n===B||r.account_name===e?"true":"false"}">
          <span>${a(r.account_name)}</span>
          <strong>${a(r.rank||"")}</strong>
          ${n===B?"<small>Enter</small>":""}
        </button>
      `).join("")}function Ao(){document.querySelectorAll("[data-manual-ticket-account]").forEach(t=>{t.addEventListener("mousedown",e=>{e.preventDefault()}),t.addEventListener("click",()=>{Lo(t.dataset.manualTicketAccount||"")})})}function an(){const t=document.querySelector("#manualTicketMatchList");if(!t)return;const e=st();B>=e.length&&(B=e.length>0?e.length-1:-1),t.innerHTML=_o(e),Ao()}function Lo(t){const e=String(t||"").trim();L.accountName=e,At=e,Y=!1,B=-1,F="",d()}function C(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const r=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(r,r)},0)}function Ed(){const t=Y?st():[],e=String(L.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Entry</h3>
            <p>Add a manual banking or raffle entry such as FFTG, officer corrections, or anonymous gold.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${F?`<div class="discord-data-error">${a(F)}</div>`:""}

        <div class="manual-ticket-form">
          <div class="manual-ticket-member-picker">
            <label class="manual-ticket-member-field" for="manualTicketAccountSearchInput">
              <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(At)}" autocomplete="off" />
            </label>

            ${Y?`
              <div id="manualTicketMatchList" class="roster-history-match-list manual-ticket-match-list" role="listbox" aria-label="Matching guild members">
                ${_o(t)}
              </div>
            `:""}
          </div>

          ${e?`<div class="roster-history-muted manual-ticket-selected-member">Selected: ${a(e)}</div>`:""}

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
              <textarea id="manualTicketNoteInput" class="discord-search-input manual-ticket-note-input" rows="4" placeholder="Enter a reason such as FFTG">${a(L.note)}</textarea>
            </label>
            <div class="manual-ticket-side-fields">
              <label class="manual-ticket-gold-field">
                <input id="manualTicketGoldInput" class="discord-search-input manual-ticket-gold-input" type="number" min="0" step="1" inputmode="numeric" placeholder="Gold Value" value="${u(L.goldValue)}" />
                <span class="manual-ticket-gold-coin" aria-hidden="true"></span>
              </label>
              <label class="manual-ticket-count-field">
                <div class="manual-ticket-number-wrap">
                  <input id="manualTicketCountInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${u(L.tickets)}" />
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
  `}function Eo(){var s,o,c,h,b,S;if(!de)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{de=!1,d()});const t=document.querySelector("#manualTicketAccountSearchInput");if(t){const m=({rerender:g=!1}={})=>{if(Y=!0,B=st().length>0?0:-1,g){d(),C("manualTicketAccountSearchInput");return}an()};t.addEventListener("focus",()=>{Y||m({rerender:!0})}),t.addEventListener("click",()=>{Y||m({rerender:!0})}),t.addEventListener("input",g=>{At=g.target.value||"",L.accountName="",Y=!0,B=st().length>0?0:-1,an()}),t.addEventListener("keydown",g=>{if(g.key==="Escape")return;if(!Y){(g.key==="ArrowDown"||g.key==="ArrowUp")&&(g.preventDefault(),m({rerender:!0}));return}const O=st();if(g.key==="ArrowDown"||g.key==="ArrowUp"){if(O.length===0)return;g.preventDefault();const Dt=g.key==="ArrowDown"?1:-1;B=((B<0?0:B)+Dt+O.length)%O.length,an();return}if(g.key!=="Enter")return;g.preventDefault();const fe=O[B>=0?B:0];fe!=null&&fe.account_name&&Lo(fe.account_name)})}Ao(),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",m=>{L.note=m.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(m=>{m.addEventListener("click",()=>{const g=String(m.dataset.manualTicketType||"").trim().toLowerCase();L.ticketType=g==="monthly"?"monthly":"biweekly",d()})}),(c=document.querySelector("[data-manual-ticket-toggle]"))==null||c.addEventListener("click",()=>{L.ticketType=L.ticketType==="monthly"?"biweekly":"monthly",d()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",m=>{const g=String(m.target.value||"").replace(/\D/g,"");m.target.value!==g&&(m.target.value=g),L.goldValue=g});const r=document.querySelector("#manualTicketCountInput");r==null||r.addEventListener("input",m=>{const g=String(m.target.value||"").replace(/\D/g,"");m.target.value!==g&&(m.target.value=g),L.tickets=g});const n=m=>{const g=Number(L.tickets)||0,O=Math.max(0,g+m);L.tickets=String(O),r&&(r.value=L.tickets,r.focus())};(h=document.querySelector("#manualTicketCountUpButton"))==null||h.addEventListener("click",()=>n(1)),(b=document.querySelector("#manualTicketCountDownButton"))==null||b.addEventListener("click",()=>n(-1)),(S=document.querySelector("#saveManualBiweeklyTicketButton"))==null||S.addEventListener("click",()=>Dd());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",m=>{m.target===i&&(de=!1,d())})}async function Dd(){const t=String(L.accountName||"").trim(),e=String(L.note||"").trim(),r=String(L.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",n=Number(String(L.goldValue||"").trim()||0),i=Number(String(L.tickets||"").trim()||0);if(Y){F="Select a matching guild member or Anonymous from the list before saving.",d(),C("manualTicketAccountSearchInput");return}if(!t){F="Select a matching guild member or Anonymous from the list before saving.",d(),C("manualTicketAccountSearchInput");return}if(!Number.isFinite(n)||n<0){F="Gold value must be zero or greater.",d();return}if(!Number.isFinite(i)||i<0){F="Tickets must be zero or greater.",d();return}const s=t.toLowerCase()==="anonymous";if(s&&Math.floor(i)>0){F="Anonymous cannot be awarded tickets. Use 0 tickets and enter a gold value.",d();return}if(Math.floor(n)===0&&Math.floor(i)===0){F=s?"Enter a gold value for Anonymous when tickets are 0.":"Enter gold or tickets. Both cannot be zero.",d();return}_r=!0,F="",d();try{const o=await A("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:r,gold_value:Math.floor(n),tickets:Math.floor(i)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Failed to add manual entry.");de=!1,L={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},At="",B=-1,Y=!1,await re({silent:!0}),f("manual-ticket-added",o.message||"Manual entry added.",{ttlMs:p})}catch(o){F=k(o)}finally{_r=!1,d()}}function Do(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>Lt());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{at=!0,ce="",d()});const r=document.querySelector("#rosterMemberSearch");r&&(r.addEventListener("input",o=>{wr=o.target.value||"",bn=o.target.selectionStart,vn=o.target.selectionEnd,$=-1,d({restoreRosterSearchFocus:!0})}),r.addEventListener("keydown",Rd)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{ol(o.dataset.rosterSortColumn||"account_name")})});const n=document.querySelector("#rosterRankFilter");n&&n.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(Oe.add(c),$=-1,d())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRosterRankFilter||"";Oe.delete(c),$=-1,d()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(rt.add(c),$=-1,d())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRosterLinkStatusFilter||"";rt.delete(c),$=-1,d()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>ho(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{wr="",Oe.clear(),rt.clear(),oe="",I="",$=-1,d()}),Md()}function Rd(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){$=-1;return}t.preventDefault(),t.key==="ArrowDown"?$=$<0?0:Math.min($+1,e.length-1):t.key==="ArrowUp"&&($=$<0?e.length-1:Math.max($-1,0)),e.forEach((n,i)=>{n.classList.toggle("roster-search-active-row",i===$)});const r=e[$];r&&typeof r.scrollIntoView=="function"&&r.scrollIntoView({block:"nearest",inline:"nearest"})}function Md(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{at=!1,d()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",r=>{if(Gt=r.target.value||"",j=-1,!Gt.trim()){clearTimeout(sn),ce="",U=[],Me="",we=[],_e=!1,d(),C("rosterHistorySearchInput");return}clearTimeout(sn),sn=setTimeout(()=>{Bd({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(U.length===0)return;r.preventDefault();const i=r.key==="ArrowDown"?1:-1;j=((j<0?0:j)+i+U.length)%U.length,d(),C("rosterHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=U[j>=0?j:0];n!=null&&n.account_name&&Xi(n.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(r=>{r.addEventListener("click",()=>{Xi(r.dataset.rosterHistoryAccount||"")})})}function Ro(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{ct=!1,d()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",r=>{pe=r.target.value||"",z=-1,Be+=1;const n=Be;if(clearTimeout(Fi),!pe.trim()){le="",V=[],lt="",He="",Ae=[],Le=!1,d(),C("discordHistorySearchInput");return}Fi=setTimeout(()=>{$d({auto:!0,keepFocus:!0,generation:n})},qc)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(V.length===0)return;r.preventDefault();const i=r.key==="ArrowDown"?1:-1;z=((z<0?0:z)+i+V.length)%V.length,d(),C("discordHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=V[z>=0?z:0];n!=null&&n.discord_id&&Qi(n.discord_id,wn(n))})),document.querySelectorAll("[data-discord-history-id]").forEach(r=>{r.addEventListener("click",()=>{Qi(r.dataset.discordHistoryId||"",r.dataset.discordHistoryName||"")})})}async function $d(t={}){const e=Number.isInteger(t.generation)?t.generation:++Be,r=pe.trim();if(e===Be){if(!r){le="",V=[],z=-1,lt="",He="",Ae=[],Le=!1,d(),t.keepFocus&&C("discordHistorySearchInput");return}Le=!0,le="",V=[],z=-1,lt="",He="",Ae=[],d(),t.keepFocus&&C("discordHistorySearchInput");try{const n=await A("guildsync:request-discord-member-history",{query:r},3e4);if(e!==Be||r!==pe.trim())return;if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search Discord member history.");V=Td(n.matches),z=V.length>0?0:-1}catch(n){if(e!==Be||r!==pe.trim())return;le=k(n)}finally{if(e!==Be||r!==pe.trim())return;Le=!1,d(),t.keepFocus&&C("discordHistorySearchInput")}}}async function Qi(t,e="",r={}){const n=String(t||"").trim();if(!!n){lt=n,He=String(e||n).trim(),pe=He,Ae=[],Le=!0,le="",d();try{const i=await A("guildsync:request-discord-member-history-events",{discord_id:n},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");Ae=Nd(i.events)}catch(i){le=k(i)}finally{Le=!1,r.keepLoading||d()}}}function Td(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function Nd(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n,i,s,o,c,h,b,S,m,g;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((n=(r=e.old_value)!=null?r:e.oldValue)!=null?n:"").trim(),new_value:String((s=(i=e.new_value)!=null?i:e.newValue)!=null?s:"").trim(),event_timestamp:(h=(c=(o=e.event_timestamp)!=null?o:e.eventTimestamp)!=null?c:e.timestamp)!=null?h:"",event_datetime:(S=(b=e.event_datetime)!=null?b:e.eventDatetime)!=null?S:"",initiator:String((g=(m=e.initiator)!=null?m:e.initiatorName)!=null?g:"").trim(),source:String(e.source||"").trim()}}):[]}async function Bd(t={}){const e=Gt.trim();if(!e){ce="",U=[],j=-1,Me="",we=[],_e=!1,d(),t.keepFocus&&C("rosterHistorySearchInput");return}_e=!0,ce="",U=[],j=-1,Me="",we=[],d(),t.keepFocus&&C("rosterHistorySearchInput");try{const r=await A("guildsync:request-roster-rank-history",{query:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search roster rank history.");U=Cd(r.matches),j=U.length>0?0:-1}catch(r){ce=k(r)}finally{_e=!1,d(),t.keepFocus&&C("rosterHistorySearchInput")}}async function Xi(t,e={}){const r=String(t||"").trim();if(!!r){Me=r,Gt=r,we=[],_e=!0,ce="",d();try{const n=await A("guildsync:request-roster-stream-history",{account_name:r},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster stream history.");we=Id(n.events)}catch(n){ce=k(n)}finally{_e=!1,e.keepLoading||d()}}}function Cd(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function Id(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(n=(r=e.timestamp)!=null?r:e.timestampS)!=null?n:"",officer:String(e.officer||"").trim()}}):[]}function Mo(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(r=e.joined)!=null?r:""}}).sort((e,r)=>e.account_name.localeCompare(r.account_name)):[]}function Od(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function Pr(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function jn(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function xd(t={}){K=Mo(t.members),Sr=t.last_refresh||new Date().toISOString(),D==="eso-members"&&d(),f("roster-data-updated",`Roster data updated. Loaded ${K.length} member record${K.length===1?"":"s"}.`,{ttlMs:p})}async function Lt(t={}){if(!!(l!=null&&l.connected)){Re=!0,d();try{const e=await A("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");K=Mo(e.members),Sr=e.last_refresh||Sr,t.silent||f("roster-data-loaded",`Loaded ${K.length} roster member${K.length===1?"":"s"}.`,{ttlMs:p})}catch(e){f("roster-data-error",k(e),{ttlMs:p})}finally{Re=!1,d()}}}async function qd(t={}){var e;if(!!_()){if(!(l!=null&&l.connected)){f("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}Re=!0,d();try{const r=await wc(t);if(!(r!=null&&r.ok)){f("roster-data-pending",(r==null?void 0:r.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:p});return}const n={local_upload_id:$o(),authenticated_username:J(),authenticated_discord_user_id:((e=y==null?void 0:y.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await No(n)}catch(i){throw Pd(n),i}await Lt({silent:!0})}catch(r){f("roster-data-error",k(r),{ttlMs:p})}finally{Re=!1,d()}}}function $o(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function zn(){try{const t=window.localStorage.getItem(Rs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function To(t){window.localStorage.setItem(Rs,JSON.stringify(Array.isArray(t)?t:[]))}function Pd(t){const e=String((t==null?void 0:t.local_upload_id)||$o()),r=zn().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),To(r),f("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Fd(t){const e=zn().filter(r=>(r==null?void 0:r.local_upload_id)!==t);To(e)}async function Gd(){if(en||!(l!=null&&l.connected)||!_())return;const t=zn();if(t.length!==0){en=!0;try{for(const e of t){if(!(l!=null&&l.connected)||!_())return;await No(e),Fd(e.local_upload_id)}}catch(e){f("roster-data-pending-error",`Pending roster upload retry failed: ${k(e)}`,{ttlMs:p})}finally{en=!1}}}async function No(t){if(!(l!=null&&l.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await A("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const r=await _c(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return f("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:p}),e}async function Ud(t={}){var e,r;if(!!_()){if(!(l!=null&&l.connected)){f("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}try{const n=await $c(t);if(!(n!=null&&n.ok)){f("applications-data-info",(n==null?void 0:n.message)||"No application records were found to process.",{ttlMs:p});return}if((Array.isArray((e=n==null?void 0:n.data)==null?void 0:e.records)?n.data.records:[]).length===0){f("applications-data-info",`No application records were found in ${n.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:p});return}const s={local_upload_id:Bo(),authenticated_username:J(),authenticated_discord_user_id:((r=y==null?void 0:y.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await Io(s)}catch(o){throw Vd(s),o}}catch(n){f("applications-data-error",k(n),{ttlMs:p})}}}function Bo(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Yn(){try{const t=window.localStorage.getItem(Ms),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Co(t){window.localStorage.setItem(Ms,JSON.stringify(Array.isArray(t)?t:[]))}function Vd(t){const e=String((t==null?void 0:t.local_upload_id)||Bo()),r=Yn().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Co(r),f("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Hd(t){const e=Yn().filter(r=>(r==null?void 0:r.local_upload_id)!==t);Co(e)}async function Wd(){if(tn||!(l!=null&&l.connected)||!_())return;const t=Yn();if(t.length!==0){tn=!0;try{for(const e of t){if(!(l!=null&&l.connected)||!_())return;await Io(e),Hd(e.local_upload_id)}}catch(e){f("applications-data-pending-error",`Pending application upload retry failed: ${k(e)}`,{ttlMs:p})}finally{tn=!1}}}async function Io(t){var i;if(!(l!=null&&l.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return f("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:p}),{ok:!0,sent_count:0,skipped_empty:!0};let r=0;for(const s of e){const o=await A("guildsync:eso-guild-application-message",{...t,record:s,recordKey:(s==null?void 0:s.recordKey)||"",message:jd(s)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Backend rejected the application data payload. Application data was not cleared.");r+=1}const n=await Tc(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return f("applications-data-sent",`Sent ${r} application record${r===1?"":"s"} to GuildSync backend.`,{ttlMs:p}),{ok:!0,sent_count:r}}function jd(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),r=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",n=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",s=String(t.applicationText||"_No application text captured._"),o=Object.entries(t).filter(([c])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(c)).map(([c,h])=>`**${c}:** ${zd(h)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${r}** ${n} an application from **${i}**.`,"","**Application text:**","```",s.slice(0,1500),"```",o.length>0?"":null,o.length>0?"**Full captured record fields:**":null,...o].filter(c=>c!==null).join(`
`)}function zd(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function Yd(t={}){await Ud(t)}function Kd(){const t=Mn(M),e=mu(t,M),r=M!=="other";return`
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
          ${eu()}
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${a(Xo(Cs))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${$e||!_()?"disabled":""} ${_()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${$e?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${cn("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${cn("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${cn("other","?","Other","All other deposits")}
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
          <div>Total Deposits: <strong>${a(xt(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${M==="monthly"?`<div>Raffle Pot: <strong>${a(xt(Math.floor(e.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${M==="biweekly"?`<div>Raffle Pot: <strong>${a(xt(Vo(e.amount)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${M==="biweekly"?`<div>Draws: <strong>${a(String(gu(e.amount)))}</strong></div>`:""}
          ${r?`<div>Total Tickets Awarded: <strong>${a(Vr(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${Ge?Jd(Mn(Ye)):""}
    </div>
  `}function Jd(t){return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${a(Z(Ye))} Deposits</h3>
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

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${a(Po(t))}</textarea>
      </div>
    </div>
  `}function Qd(t){return`
    <tr>
      <td>${a(t.displayName||"")}</td>
      <td>${a(String(Xn(t,Ye)))}</td>
      <td>${a(String(Number(t.ticketAmount)||0))}</td>
      <td>${a(t.note||"")}</td>
    </tr>
  `}function Xd(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${a(Z(Ye))}.</td>
    </tr>
  `}function Zd(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=Fo(t),r=Mr(t),n=r<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${u(Z(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${a(Z(t))} Raffle Period ${r===0?"(Current)":`(${Math.abs(r)} period${Math.abs(r)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${a(gr(e.salesStart))} through ${a(gr(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${a(gr(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${n?"":"disabled"} aria-label="Next ${u(Z(t))} raffle period">\u203A</button>
    </div>
  `}function cn(t,e,r,n){const i=M===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${u(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${a(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${a(r)}</span>
        <span class="bank-section-subtitle">${a(n)}</span>
      </span>
    </button>
  `}function eu(){if(!_())return"";const t=Fr(),e=Zt(),r=Oo(),n=t+e+r;if(n<=0)return"";const i=`Desktop Client Required${n>0?` (${n})`:""}`,s="Deposit mail checkout and ESO SavedVariables writing are disabled in the web client. Use the GuildSync desktop client for this mail workflow.";return`
    <button id="checkoutDepositMailButton" class="bank-export-button deposit-mail-button deposit-mail-status-only" type="button" data-deposit-mail-action="disabled" aria-disabled="true" title="${u(s)}" aria-label="${u(`${i}. ${s}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${a(i)}</span>
      <span class="deposit-mail-web-disabled" aria-hidden="true">Web Disabled</span>
    </button>
  `}function Zt(){return er().reduce((t,e)=>t+Et(e.records).length,0)}function tu(){const t=(y==null?void 0:y.user)||{};return new Set([J(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function ru(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?tu().has(e):!1}function Oo(){return _()?P.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),r=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&r==="written_to_eso"&&ru(t)}).length:0}function Fr(){return P.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),r=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&r==="unsent"}).length}function nu(t){const e=String(t||"").trim();return P.find(r=>String(r.eventId||"").trim()===e)||null}function Kn(t){const e=String(t||"other").toLowerCase(),r=["biweekly","monthly","other"],n=r.includes(e)?e:"other",i=r.filter(s=>s!==n);return[i[0]||"biweekly",n,i[1]||"other"]}function Jn(t={},e="other"){const r=String(e||"other").toLowerCase(),n=Number(t==null?void 0:t.amount)||0;return r===String((t==null?void 0:t.type)||"").toLowerCase()?Number(t==null?void 0:t.ticketAmount)||0:r==="biweekly"?Math.floor(n/500):r==="monthly"?Math.floor(n/2500):0}function xo(t={},e="other",r=""){const n=String(t.type||"other").toLowerCase(),i=Z(n),s=Z(e),o=J()||"Unknown user",c=[`Moved from ${i} to ${s} by ${o}.`,`Ref ${t.eventId||""}`],h=String(r||"").trim();return h&&c.push(`Reason: ${h}`),c.join(`
`)}function iu(t){const e=nu(t);if(!e){f("banking-move-missing","Could not find the selected banking entry.",{ttlMs:p});return}const r=String(e.type||"other").toLowerCase();se=e,T={targetType:r,note:"",tickets:String(Jn(e,r))},ie="",ut=!1,_t=!0,d()}function Rr(){_t=!1,ut=!1,ie="",se=null,T={targetType:"other",note:"",tickets:""},d()}function su(){const t=se||{},e=String(t.type||"other").toLowerCase(),r=Z(e),n=Kn(e);let i=String(T.targetType||n[0]||"other").toLowerCase();n.includes(i)||(i=n[0]||"other",T.targetType=i);const s=xo(t,i,T.note);return`
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
            <div><strong>Amount:</strong> ${a(xt(t.amount))} \u{1FA99}</div>
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
                    data-banking-move-target="${u(o)}"
                  >
                    <strong>${a(Z(o))}</strong>
                    <span>${o===e?"Current / restore original values":`${a(String(Jn(t,o)))} tickets`}</span>
                  </button>
                `).join("")}
              </div>
            </div>
          </div>

          <div class="banking-move-compact-row">
            <label class="manual-ticket-count-field banking-move-ticket-field">
              <span>Tickets Awarded</span>
              <input id="bankingMoveTicketsInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${u(T.tickets)}" ${i==="other"?"disabled":""} />
            </label>

            <label class="manual-ticket-note-field banking-move-note-field">
              <span>Move Note</span>
              <textarea id="bankingMoveNoteInput" class="discord-search-input manual-ticket-note-input banking-move-note-input" rows="1" placeholder="Optional reason for this move">${a(T.note)}</textarea>
            </label>
          </div>

          <div class="roster-history-muted banking-move-generated-note">${a(s).replace(/\n/g,"<br>")}</div>

          <div class="manual-ticket-actions banking-move-actions">
            <button id="saveBankingMoveButton" class="refresh-discord-button banking-move-submit-button" type="button" ${ut||i===e?"disabled":""}>${ut?"MOVING...":i===e?"SELECT A SIDE TO MOVE":"MOVE"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function ou(){var r,n,i,s;if(!_t)return;(r=document.querySelector("#closeBankingMoveDialogButton"))==null||r.addEventListener("click",()=>Rr());function t(o){const c=String(o||"other").toLowerCase(),h=String((se==null?void 0:se.type)||"other").toLowerCase(),b=Kn(h);T.targetType=b.includes(c)?c:h,T.tickets=String(Jn(se||{},T.targetType)),d()}document.querySelectorAll("[data-banking-move-target]").forEach(o=>{o.addEventListener("click",()=>t(o.dataset.bankingMoveTarget))}),(n=document.querySelector("#bankingMoveTicketsInput"))==null||n.addEventListener("input",o=>{const c=String(o.target.value||"").replace(/\D/g,"");o.target.value!==c&&(o.target.value=c),T.tickets=c}),(i=document.querySelector("#bankingMoveNoteInput"))==null||i.addEventListener("input",o=>{T.note=o.target.value||"";const c=document.querySelector(".banking-move-generated-note");c&&(c.innerText=xo(se||{},T.targetType||"other",T.note))}),(s=document.querySelector("#saveBankingMoveButton"))==null||s.addEventListener("click",()=>au());const e=document.querySelector(".roster-history-overlay");e&&e.addEventListener("click",o=>{o.target===e&&Rr()})}async function au(){const t=se;if(!(t!=null&&t.eventId)){ie="No banking entry is selected.",d();return}const e=String(t.type||"other").toLowerCase(),r=Kn(e),n=String(T.targetType||r[0]||"other").toLowerCase();if(!r.includes(n)||n===e){ie="Select one of the side destinations before moving this entry.",d();return}const i=n==="other"?0:Math.floor(Number(String(T.tickets||"").trim()||0));if(!Number.isFinite(i)||i<0){ie="Tickets must be zero or greater.",d();return}ut=!0,ie="",d();try{const s=await A("guildsync:move-banking-entry",{event_id:t.eventId,target_type:n,tickets:i,note:T.note||""},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to move banking entry.");Rr(),await re({silent:!0}),f("banking-entry-moved",s.message||"Banking entry moved.",{ttlMs:p})}catch(s){ut=!1,ie=k(s),d()}}function qo(){if(D!=="more")return;ou(),document.querySelectorAll("[data-bank-entry-move]").forEach(o=>{o.addEventListener("click",()=>iu(o.dataset.bankEntryMove||""))}),document.querySelectorAll("[data-bank-section]").forEach(o=>{o.addEventListener("click",()=>{M=o.dataset.bankSection||"biweekly",d()})}),document.querySelectorAll("[data-bank-export-section]").forEach(o=>{o.addEventListener("click",()=>{Ye=(o.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",Ge=!0,d()})}),document.querySelectorAll("[data-bank-period-move]").forEach(o=>{o.addEventListener("click",()=>{du(o.dataset.bankPeriodMove||""),d()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{Ge=!1,d()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>cu());const r=document.querySelector(".bank-export-overlay");r&&r.addEventListener("click",o=>{o.target===r&&(Ge=!1,d())});const n=document.querySelector("#openManualBiweeklyTicketButton");n&&n.addEventListener("click",async()=>{if(!_()){f("manual-ticket-login-required","Login required to add manual entries.",{ttlMs:p});return}de=!0,F="",At=L.accountName||"",Y=!1,B=-1,K.length===0&&(l==null?void 0:l.connected)&&_()&&await Lt({silent:!0}),d()});const i=document.querySelector("#checkoutDepositMailButton");i&&i.addEventListener("click",()=>{i.dataset.depositMailAction==="checkout"&&i.getAttribute("aria-disabled")!=="true"&&Eu()});const s=document.querySelector("#refreshBankingDataButton");s&&s.addEventListener("click",()=>{if(!_()){f("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:p});return}Wo({key:"banking"})})}function Po(t){const e=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const r of t)e.push([r.displayName||"",String(Xn(r,Ye)),String(Number(r.ticketAmount)||0),r.note||""]);return e.map(r=>r.map(Gr).join("	")).join(`
`)}function Gr(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function Ur(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const r=document.createElement("textarea");r.value=e,r.setAttribute("readonly","readonly"),r.style.position="fixed",r.style.left="0",r.style.top="0",r.style.width="1px",r.style.height="1px",r.style.opacity="0",r.style.pointerEvents="none",r.style.zIndex="-1",document.body.appendChild(r),r.focus(),r.select(),r.setSelectionRange(0,r.value.length);let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r)}return n}async function cu(){const t=Mn(Ye),e=Po(t);if(await Ur(e)){f("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#bankingExportTsv");n&&(n.focus(),n.select()),f("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:p})}function Mn(t){return P.filter(e=>e.type===t).filter(e=>lu(t,e)).sort((e,r)=>(Number(r.time)||0)-(Number(e.time)||0))}function lu(t,e){if(t==="other")return!0;const r=Number(e==null?void 0:e.time)||0;if(r<=0)return!1;const n=Fo(t);return r>=n.salesStart&&r<=n.salesEnd}function Mr(t){return Number(kn[t])||0}function du(t){if(M!=="biweekly"&&M!=="monthly")return;const e=Mr(M);if(t==="previous"){kn[M]=e-1;return}t==="next"&&e<0&&(kn[M]=e+1)}function Fo(t){const e=Math.floor(Date.now()/1e3);if(t==="monthly"){const i=uu(e,Mr(t));return{salesStart:Uo(i)+1,salesEnd:i,raffleTime:i+Ar}}const r=Te;let n=Go(e);return n+=Mr(t)*r,{salesStart:n-r+1,salesEnd:n,raffleTime:n+Ar}}function Go(t){const e=Te;let r=Pc;for(;r-e>t;)r-=e;for(;r<t;)r+=e;return r}function uu(t,e=0){let r=fu(t),n=Number(e)||0;for(;n<0;)r=Uo(r),n+=1;for(;n>0;)r=hu(r),n-=1;return r}function fu(t){let e=Go(t);for(;!Qn(e);)e+=Te;return e}function Uo(t){let e=t-Te;for(;!Qn(e);)e-=Te;return e}function hu(t){let e=t+Te;for(;!Qn(e);)e+=Te;return e}function Qn(t){const e=t+Ar,r=t+Te+Ar;return Zi(e)!==Zi(r)}function Zi(t){var s,o;const e=new Date(Number(t||0)*1e3);if(Number.isNaN(e.getTime()))return"";const r=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit"}).formatToParts(e),n=((s=r.find(c=>c.type==="year"))==null?void 0:s.value)||"",i=((o=r.find(c=>c.type==="month"))==null?void 0:o.value)||"";return`${n}-${i}`}function pu(t=M){const e=String(t||"").toLowerCase();return e!=="monthly"&&e!=="biweekly"?0:"auto"}function Xn(t={},e=M){const r=Number(t.amount)||0;if(!pu(e))return r;const n=Math.abs(Math.trunc(r))%10,i=n===1||n===3?n:0;return i>0&&r>i?r-i:r}function mu(t,e=M){return t.reduce((r,n)=>(r.amount+=Xn(n,e),r.tickets+=Number(n.ticketAmount)||0,r),{amount:0,tickets:0})}function Vo(t){const e=Math.ceil((Number(t)||0)/2);return e<=0?0:Math.ceil(e/2e5)*2e5}function gu(t){const e=Vo(t);return e>0?e/2e5:0}function yu(t,e=!0){return`
    <tr>
      <td>${a(t.note||t.eventId||"")}</td>
      <td>${a(gr(t.time))}</td>
      <td>${a(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${a(xt(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td><strong class="bank-ticket-amount">${a(Vr(t.ticketAmount))}</strong></td>`:""}
      <td><button class="bank-entry-move-button" type="button" data-bank-entry-move="${u(t.eventId||"")}">Move</button></td>
    </tr>
  `}function bu(t=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?"6":"5"}">No ${a(Z(M))} deposits found for this ${M==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function Z(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function gr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function xt(t){return(Number(t)||0).toLocaleString()}function Vr(t){return(Number(t)||0).toLocaleString()}function Et(t){return Array.isArray(t)?t.map(e=>{var n,i,s,o,c,h,b,S,m,g,O,fe,Dt,Ke,oi,ai,ci,li,di,ui,fi,hi,pi,mi,gi,yi,bi,vi,ki,Si,wi,_i,Ai,Li,Ei,Di,Ri,Mi,$i,Ti,Ni;const r=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:r==="monthly"||r==="biweekly"||r==="other"?r:"other",eventId:String((i=(n=e==null?void 0:e.eventId)!=null?n:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((o=(s=e==null?void 0:e.time)!=null?s:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((h=(c=e==null?void 0:e.displayName)!=null?c:e==null?void 0:e.display_name)!=null?h:"").trim(),amount:Number((b=e==null?void 0:e.amount)!=null?b:0)||0,ticketAmount:Number((m=(S=e==null?void 0:e.ticketAmount)!=null?S:e==null?void 0:e.ticket_amount)!=null?m:0)||0,note:String((g=e==null?void 0:e.note)!=null?g:"").trim(),dataSource:String((fe=(O=e==null?void 0:e.dataSource)!=null?O:e==null?void 0:e.data_source)!=null?fe:"").trim(),emailRequested:Boolean((Dt=e==null?void 0:e.emailRequested)!=null?Dt:e==null?void 0:e.email_requested),mailStatus:String((oi=(Ke=e==null?void 0:e.mailStatus)!=null?Ke:e==null?void 0:e.mail_status)!=null?oi:"").trim(),mailRequestId:String((ci=(ai=e==null?void 0:e.mailRequestId)!=null?ai:e==null?void 0:e.mail_request_id)!=null?ci:"").trim(),mailBatchId:String((di=(li=e==null?void 0:e.mailBatchId)!=null?li:e==null?void 0:e.mail_batch_id)!=null?di:"").trim(),checkedOutBy:String((fi=(ui=e==null?void 0:e.checkedOutBy)!=null?ui:e==null?void 0:e.checked_out_by)!=null?fi:"").trim(),checkedOutAt:String((pi=(hi=e==null?void 0:e.checkedOutAt)!=null?hi:e==null?void 0:e.checked_out_at)!=null?pi:"").trim(),checkoutExpiresAt:String((gi=(mi=e==null?void 0:e.checkoutExpiresAt)!=null?mi:e==null?void 0:e.checkout_expires_at)!=null?gi:"").trim(),writtenToEsoAt:String((bi=(yi=e==null?void 0:e.writtenToEsoAt)!=null?yi:e==null?void 0:e.written_to_eso_at)!=null?bi:"").trim(),sentAt:String((ki=(vi=e==null?void 0:e.sentAt)!=null?vi:e==null?void 0:e.sent_at)!=null?ki:"").trim(),failedReason:String((wi=(Si=e==null?void 0:e.failedReason)!=null?Si:e==null?void 0:e.failed_reason)!=null?wi:"").trim(),recipient:String((Ei=(Li=(Ai=(_i=e==null?void 0:e.recipient)!=null?_i:e==null?void 0:e.account_name)!=null?Ai:e==null?void 0:e.displayName)!=null?Li:e==null?void 0:e.display_name)!=null?Ei:"").trim(),subject:String((Mi=(Ri=(Di=e==null?void 0:e.subject)!=null?Di:e==null?void 0:e.mailSubject)!=null?Ri:e==null?void 0:e.mail_subject)!=null?Mi:"").trim(),body:String((Ni=(Ti=($i=e==null?void 0:e.body)!=null?$i:e==null?void 0:e.mailBody)!=null?Ti:e==null?void 0:e.mail_body)!=null?Ni:"").trim()}}):[]}function vu(t){const e=new Map;for(const r of P)r.eventId&&e.set(r.eventId,r);for(const r of t)!r.eventId||e.set(r.eventId,r);P=Array.from(e.values()).sort((r,n)=>(Number(n.time)||0)-(Number(r.time)||0))}function Ho(){Cs=new Date().toISOString()}async function ku(t={}){!(t!=null&&t.ok)||(P=Et(t.entries),Ho(),D==="more"&&d(),f("banking-data-updated",`Banking data updated. Loaded ${P.length} deposit record${P.length===1?"":"s"}.`,{ttlMs:p}))}async function re(t={}){const e=Boolean(t.silent),r=Boolean(t.background);if(!(l!=null&&l.connected)){e||f("banking-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}r||($e=!0,d());try{const n=await A("guildsync:request-banking-data",{},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve banking data.");P=Et(n.entries),Ho(),e||f("banking-data",`Loaded ${P.length} banking deposit record${P.length===1?"":"s"}.`,{ttlMs:p})}catch(n){e||f("banking-data-error",k(n),{ttlMs:p})}finally{r||($e=!1),d()}}async function es(){!(l!=null&&l.connected)||!_()||$e||(await re({silent:!0,background:!0}),Fr()<=0&&Zt()>0&&(ne.running?d():Du("availability-refresh")))}function Su(){Xe&&clearInterval(Xe),es(),Xe=window.setInterval(es,Ic)}function wu(){Xe&&(clearInterval(Xe),Xe=null)}async function _u(t={}){if(!!_()){if(!(l!=null&&l.connected)){f("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:p});return}try{const e=await Dc(t);if(!(e!=null&&e.ok))return;const r=Array.isArray(e.ackEntries)?e.ackEntries:[];if(r.length===0)return;const n=await A("guildsync:mark-deposit-mail-sent",{mail_ack:r,mail_request_ids:r.map(o=>(o==null?void 0:o.mail_request_id)||(o==null?void 0:o.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(n.mail_request_ids)?n.mail_request_ids:Array.isArray(n.mailRequestIds)?n.mailRequestIds:[];if(i.length===0){f("deposit-mail-ack-none",n.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:p});return}const s=await Rc(i);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");f("deposit-mail-ack-sent",s.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:p}),await re({silent:!0})}catch(e){f("deposit-mail-ack-error",k(e),{ttlMs:p})}}}async function Au(){if(!rn){rn=!0;try{const t=await Mc();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&f("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:p})}catch(t){f("deposit-mail-ack-cleanup-error",k(t),{ttlMs:p})}finally{rn=!1}}}async function Wo(t={}){var e,r;if(!!_()){if(!(l!=null&&l.connected)){f("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}$e=!0,d();try{const n=await kc(t);if(!(n!=null&&n.ok)){f("banking-data-pending",(n==null?void 0:n.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:p});return}const i=Et((e=n==null?void 0:n.data)==null?void 0:e.entries);vu(i);const s=new Date().toISOString(),o={local_upload_id:Yo(),authenticated_username:J(),authenticated_discord_user_id:((r=y==null?void 0:y.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:s,data:n.data||{}};try{await Jo(o)}catch(c){throw $u(o),c}await re({silent:!0})}catch(n){f("banking-data-error",k(n),{ttlMs:p})}finally{$e=!1,d()}}}function jo(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function er(){try{const t=window.localStorage.getItem(Ds),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function zo(t){window.localStorage.setItem(Ds,JSON.stringify(Array.isArray(t)?t:[]))}function Lu(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||jo()),r=er().filter(n=>String((n==null?void 0:n.mail_batch_id)||(n==null?void 0:n.mailBatchId)||(n==null?void 0:n.local_batch_id)||"")!==e);r.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),zo(r)}function ts(t){const e=String(t||"").trim();if(!e)return;const r=er().filter(n=>String((n==null?void 0:n.mail_batch_id)||(n==null?void 0:n.mailBatchId)||(n==null?void 0:n.local_batch_id)||"")!==e);zo(r)}async function Eu(){if(!_()){f("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:p});return}if(!(l!=null&&l.connected)){f("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:p});return}const t=er(),e=Fr();if(t.length>0&&e<=0){await pt();return}d();try{const r=await A("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail checkout request.");const n=Et(r.records);if(n.length===0){f("deposit-mail-none",r.message||"No unsent deposit mail is available.",{ttlMs:p}),await re({silent:!0});return}const i={mail_batch_id:r.mail_batch_id||r.mailBatchId||jo(),checked_out_by:r.checked_out_by||r.checkedOutBy||J(),checked_out_at:new Date().toISOString(),records:n};Lu(i),await pt()}catch(r){f("deposit-mail-error",k(r),{ttlMs:p})}finally{d()}}function Du(t=""){Ze||pr||!_()||Zt()<=0||ne.running||(Ze=window.setTimeout(()=>{Ze=null,pt()},100))}async function pt(){if(Ze&&(window.clearTimeout(Ze),Ze=null),pr||!_())return;const t=er();if(t.length!==0){if(await $n({silent:!0}),ne.running){f("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:p}),d();return}pr=!0,d();try{for(const e of t){const r=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),n=Et(e==null?void 0:e.records);if(n.length===0){ts(r);continue}const i=await Ec(n);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(l!=null&&l.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const s=await A("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:r,event_ids:i.eventIds||n.map(o=>o.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend did not confirm deposit mail was marked written_to_eso.");ts(r),f("deposit-mail-written",i.message||`Wrote ${n.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:p})}await re({silent:!0})}catch(e){f("deposit-mail-write-error",k(e),{ttlMs:p})}finally{pr=!1,d()}}}async function $n(t={}){try{const e=Boolean(ne.running),r=await Lc();ne={running:Boolean(r==null?void 0:r.running),message:String((r==null?void 0:r.message)||"")},ne.running||await Au(),e&&!ne.running&&(f("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:p}),await pt()),e!==ne.running&&d()}catch(e){t.silent||f("eso-status-error",k(e),{ttlMs:p})}}function Ru(){Qe&&clearInterval(Qe),$n({silent:!0}).then(()=>{!ne.running&&Zt()>0&&pt()}),Qe=window.setInterval(()=>$n({silent:!0}),Cc)}function Mu(){Qe&&(clearInterval(Qe),Qe=null)}function Yo(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Zn(){try{const t=window.localStorage.getItem(Es),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Ko(t){window.localStorage.setItem(Es,JSON.stringify(Array.isArray(t)?t:[]))}function $u(t){const e=String((t==null?void 0:t.local_upload_id)||Yo()),r=Zn().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Ko(r),f("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Tu(t){const e=Zn().filter(r=>(r==null?void 0:r.local_upload_id)!==t);Ko(e)}async function Nu(){if(Zr||!(l!=null&&l.connected)||!_())return;const t=Zn();if(t.length!==0){Zr=!0;try{for(const e of t){if(!(l!=null&&l.connected)||!_())return;await Jo(e),Tu(e.local_upload_id)}}catch(e){f("banking-data-pending-error",`Pending banking upload retry failed: ${k(e)}`,{ttlMs:p})}finally{Zr=!1}}}async function Jo(t){if(!(l!=null&&l.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await A("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const r=await Sc(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return f("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:p}),e}function Qo(){if(D!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>Bu());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{ct=!0,le="",d(),C("discordHistorySearchInput")});const r=document.querySelector("#discordMemberSearch");r&&r.addEventListener("input",o=>{kr=o.target.value||"",gn=o.target.selectionStart,yn=o.target.selectionEnd,d({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Pu(o.dataset.discordSortColumn||"username")})});const n=document.querySelector("#discordRoleFilter");n&&n.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(et.add(c),d())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRoleFilter||"";et.delete(c),d()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(tt.add(c),d())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeDiscordLinkStatusFilter||"";tt.delete(c),d()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>ho(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{kr="",et.clear(),tt.clear(),d()})}async function Bu(){var t,e;if(!(l!=null&&l.connected)){f("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:p});return}vr=!0,d(),f("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const r=await A("guildsync:request-discord-data-refresh",{requested_by:((t=y==null?void 0:y.user)==null?void 0:t.display_name)||((e=y==null?void 0:y.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to request Discord data refresh.");f("discord-refresh-requested",r.message||"Discord data refresh completed.",{ttlMs:p}),await ei({silent:!0})}catch(r){f("discord-refresh-error",k(r),{ttlMs:p})}finally{vr=!1,d()}}async function Cu(){if(!(l!=null&&l.connected))return;const t=await A("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(Ir=t.value||null)}async function Iu(t={}){if(!!(t!=null&&t.ok)){x=ti(t.members),t.last_refresh&&(Ir=t.last_refresh);try{await Cu()}catch{}D==="discord-members"&&d(),f("discord-data-updated",`Discord data updated. Loaded ${x.length} member record${x.length===1?"":"s"}.`,{ttlMs:p})}}async function ei(t={}){const e=Boolean(t.silent);if(!(l!=null&&l.connected)){f("discord-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}Pt=!0,d();try{const[r,n]=await Promise.all([A("guildsync:request-discord-data-date",{}),A("guildsync:request-discord-member-dataJSON",{})]);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord refresh date.");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord member data.");Ir=r.value||null,x=ti(n.members),e||f("discord-data",`Loaded ${x.length} Discord member record${x.length===1?"":"s"}.`,{ttlMs:p})}catch(r){f("discord-data-error",k(r),{ttlMs:p})}finally{Pt=!1,d()}}function A(t,e={},r=3e4){return new Promise((n,i)=>{if(!(l!=null&&l.connected)){i(new Error("GuildSync websocket is not connected."));return}let s=!1;const o=window.setTimeout(()=>{s||(s=!0,i(new Error(`${t} timed out.`)))},r);l.emit(t,e,c=>{s||(s=!0,window.clearTimeout(o),n(c))})})}function ti(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(Ou).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,r)=>Vt(e).localeCompare(Vt(r),void 0,{sensitivity:"base"})):[]}function Ou(t){var i,s;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),r=String(t.role_name||t.name||"Unnamed Role").trim(),n=(s=(i=t.role_color)!=null?i:t.color)!=null?s:null;return{role_id:e,role_name:r||"Unnamed Role",role_color:n}}function xu(){const t=kr.trim().toLowerCase(),e=Array.from(et),r=x.filter(n=>{if(t&&![n.username,n.global_name,n.server_nickname,n.discord_id,...n.roles.map(s=>s.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(n.roles.map(s=>s.role_name));if(!e.every(s=>i.has(s)))return!1}return!!Hs(tt,dl(n))});return qu(r)}function qu(t){const e=Ie==="desc"?-1:1;return[...t].sort((r,n)=>{const i=rs(r,Ft),s=rs(n,Ft),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:Vt(r).localeCompare(Vt(n),void 0,{sensitivity:"base",numeric:!0})})}function rs(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(r=>r.role_name||"").filter(Boolean).sort((r,n)=>r.localeCompare(n,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function Pu(t){const r=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";Ft===r?Ie=Ie==="asc"?"desc":"asc":(Ft=r,Ie="asc"),d()}function ar(t,e){const r=Ft===t,n=Ie==="asc"?"ascending":"descending",i=r?Ie==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${r?n:"none"}">
      <button
        class="discord-sort-header${r?" active":""}"
        type="button"
        data-discord-sort-column="${u(t)}"
        title="Sort ${u(e)} ${r&&Ie==="asc"?"descending":"ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function Fu(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(gn)?gn:t.value.length,r=Number.isInteger(yn)?yn:e;t.setSelectionRange(e,r)}}function Gu(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(bn)?bn:t.value.length,r=Number.isInteger(vn)?vn:e;t.setSelectionRange(e,r)}}function Uu(){const t=new Set;for(const e of x)for(const r of e.roles)r.role_name&&t.add(r.role_name);return Array.from(t).sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function Vu(t){const e=zu(t),r=Vt(t),n=t.roles||[];return`
    <tr data-discord-user-id="${u(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${u(e)}" alt="${u(r)}" />`:`<span>${a(aa(r))}</span>`}
          </div>
          <span>${a(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${a(t.global_name||"")}</td>
      <td>${a(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${n.length>0?n.map(i=>Wu(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${uo({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function Hu(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${a(Pt?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function Wu(t){const e=Hr(t.role_color),r=ii(e),n=ni(e,r);return`
    <span
      class="discord-role-badge"
      title="${u(t.role_name)}"
      style="${n}"
    >${a(t.role_name)}</span>
  `}function ju(t){const e=ri(t),r=Hr(e==null?void 0:e.role_color),n=ii(r),i=ni(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-role-filter="${u(t)}"
      style="${i}"
      title="Remove ${u(t)} filter"
    >
      <span>${a(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function ri(t){for(const e of x){const r=e.roles.find(n=>n.role_name===t);if(r)return r}return null}function Hr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function ni(t,e){return[`--role-fill-top: ${ns(t,"#ffffff",.16)}`,`--role-fill-bottom: ${ns(t,"#000000",.1)}`,`--role-fill-glow: ${is(t,.28)}`,`--role-fill-edge: ${is(t,.46)}`,`color: ${e}`].join("; ")}function ns(t,e,r){const n=cr(t)||cr("#64748b"),i=cr(e)||cr("#ffffff"),s=Math.max(0,Math.min(1,Number(r)||0)),o=Math.round(n.red+(i.red-n.red)*s),c=Math.round(n.green+(i.green-n.green)*s),h=Math.round(n.blue+(i.blue-n.blue)*s);return`#${ln(o)}${ln(c)}${ln(h)}`}function cr(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function ln(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function is(t,e){const r=String(t||"#64748b").replace("#",""),n=/^[0-9a-f]{6}$/i.test(r)?r:"64748b",i=parseInt(n.slice(0,2),16),s=parseInt(n.slice(2,4),16),o=parseInt(n.slice(4,6),16);return`rgba(${i}, ${s}, ${o}, ${e})`}function ii(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const r=parseInt(e.slice(0,2),16),n=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(r*299+n*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function zu(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!r)return"";const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function Vt(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function Xo(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function yr(){const t=document.querySelector("#discordArea");if(!!t){if(tr(!1),_()){const e=y.user||{},r=J(),n=ff(e),i=aa(r);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${n?`<img src="${u(n)}" alt="${u(r)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${a(i)}</span>`}
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
  `,document.querySelector("#discordLoginButton").addEventListener("click",Xu)}}function ss(){if(jt){tr();return}Qu()}function Yu(t=Se){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],r=String((t==null?void 0:t.directory)||"").trim(),n=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const s=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),o=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),c=String((i==null?void 0:i.filePath)||(r?`${r}\\${o}`:o)).trim(),h=(i==null?void 0:i.enabled)!==!1,b=n&&h,S=`profileFileWatchToggle-${Ju(s||o)}`;return`
          <label class="profile-filewatch-item ${h?"enabled":"disabled"}" title="${u(c)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${a(o)}</span>
              <span class="profile-filewatch-state">${b?"Watching":h?"On":"Off"}</span>
            </span>
            <input
              id="${u(S)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${u(s)}"
              ${h?"checked":""}
              aria-label="Turn file watch ${h?"off":"on"} for ${u(o)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function si(){var n,i,s;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=J(),r=((n=y.user)==null?void 0:n.role)||"member";t.innerHTML=`
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
        <span class="profile-value">${a(Cr)}</span>
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
  `,(i=document.querySelector("#discordLogoutButton"))==null||i.addEventListener("click",Zu),(s=document.querySelector("#associateTicketReportButton"))==null||s.addEventListener("click",()=>{tr(!1),Ks()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",Ku)})}async function Zo(){try{Se=await Br(),jt&&si()}catch(t){f("file-watcher-error",k(t),{ttlMs:p})}}async function Ku(t){var n;const e=t.currentTarget,r=String(((n=e==null?void 0:e.dataset)==null?void 0:n.filewatchKey)||"").trim();if(!!r)try{e.disabled=!0,Se=await vc(r,e.checked),await ot({silent:!0}),jt&&si()}catch(i){f("file-watcher-error",k(i),{ttlMs:p}),await Zo()}}function Ju(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function Qu(){const t=document.querySelector("#discordProfileMenu");!t||(si(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),jt=!0,Zo(),setTimeout(()=>{window.addEventListener("click",ea),window.addEventListener("keydown",ta)},0))}function tr(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),jt=!1,t&&(window.removeEventListener("click",ea),window.removeEventListener("keydown",ta))}function ea(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&tr()}function ta(t){t.key==="Escape"&&tr()}async function Xu(){try{f("auth","Opening Discord login...",{ttlMs:p});const t=await pc();t!=null&&t.status_message&&f("auth",t.status_message,{ttlMs:p}),Ee()}catch(t){f("auth-error",k(t),{ttlMs:p}),Ee()}}async function Zu(){try{y=await gc(),f("auth",y.status_message||"Logged out.",{ttlMs:p}),Is(),qt(),await ot()}catch(t){f("auth-error",k(t),{ttlMs:p}),Ee()}}function qt(){const t=y.socket_url||"https://guildsync.perdues.me";ef(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};y!=null&&y.token&&(e.auth={token:y.token}),l=fr(t,e),l.on("connect",()=>{Ee(),ra(),D==="discord-members"&&ei({silent:!0}),D==="eso-members"&&Lt({silent:!0}),D==="more"&&re({silent:!0}),Nu(),pt(),Ru(),Su(),Gd(),Wd(),tf()}),l.on("connect_error",()=>{Ee(),$r()}),l.on("disconnect",()=>{Ee(),$r(),Mu(),wu()}),l.on("guildsync:version-status",r=>{rf(r)}),l.on("guildsync:discord-member-data-updated",r=>{Iu(r)}),l.on("guildsync:banking-data-updated",r=>{ku(r)}),l.on("guildsync:roster-data-updated",r=>{xd(r)}),l.on("guildsync:member-links-updated",(r={})=>{Array.isArray(r.links)&&(E=r.links,(D==="discord-members"||D==="eso-members"||D==="settings"||Ne)&&d())}),l.on("guildsync:discord-refresh-status",(r={})=>{const n=String(r.message||"").trim();n&&f("discord-refresh-status",n,{ttlMs:p})})}function ef(t=!0){$r(),l&&(l.disconnect(),l=null),t&&Ee()}function ra(){!(l!=null&&l.connected)||l.emit("guildsync:client-version",{version:Cr,platform:na(),client_type:"wails"})}function tf(){$r(),hr=window.setInterval(()=>{ra()},Bc)}function $r(){hr&&(window.clearInterval(hr),hr=null)}function rf(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",r=t.download&&typeof t.download=="object"?t.download:{};he={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||r.url||"").trim(),fileName:String(t.download_file_name||r.file_name||"").trim(),platformLabel:String(r.label||t.platform||na()).trim()},f("version",`GuildSync is out of date. Current version: ${Cr}. Latest version: ${e}.`),os();return}he={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},os(),Wr("version")}}function na(){const t=String(navigator.userAgent||"").toLowerCase(),r=`${String(navigator.platform||"").toLowerCase()} ${t}`;return r.includes("mac")?"macos":r.includes("linux")?"linux":"windows"}function os(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!he.updateRequired||!he.downloadUrl){t.innerHTML="";return}const e=he.platformLabel||"Desktop",r=he.latestVersion||"latest",n=he.fileName||"GuildSync client download";t.innerHTML=`
    <button
      id="desktopUpdateDownloadButton"
      class="desktop-update-download-button"
      type="button"
      title="Download ${u(n)}"
      aria-label="Download GuildSync ${u(r)} for ${u(e)}"
    >
      <span class="desktop-update-download-icon" aria-hidden="true">\u2B07</span>
      <span class="desktop-update-download-copy">
        <span class="desktop-update-download-title">Update Available</span>
        <span class="desktop-update-download-subtitle">${a(e)} \xB7 ${a(r)}</span>
      </span>
    </button>
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{nf()})}function nf(){const t=String(he.downloadUrl||"").trim();if(!t){f("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:p});return}Ac(t)}function f(t,e,r={}){const n=String(t||"").trim(),i=String(e||"").trim();if(!(!n||!i)){if(De.set(n,i),Ce.has(n)&&(window.clearTimeout(Ce.get(n)),Ce.delete(n)),r.ttlMs&&Number(r.ttlMs)>0){const s=window.setTimeout(()=>{Wr(n)},Number(r.ttlMs));Ce.set(n,s)}mt()}}function Wr(t){const e=String(t||"").trim();if(!!e){if(De.delete(e),Ce.has(e)&&(window.clearTimeout(Ce.get(e)),Ce.delete(e)),N===e){Yr(()=>{N="",mt()});return}mt()}}function mt(){const t=jr();if(t.length===0){Ue?Yr(Ht):Ht();return}!Ue&&!Ve&&zr(t[0])}function jr(){return Array.from(De.keys())}function ia(){const t=jr();if(t.length===0)return"";if(!N)return t[0];const e=t.indexOf(N);return e<0?t[0]:t[(e+1)%t.length]}function zr(t){const e=document.querySelector("#statusMessageTrack");if(!e||!De.has(t)){Ht();return}Kr();const r=De.get(t);N=t,Ue=!0,Ve=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=r,e.style.setProperty("--message-fade-duration",`${Ts}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",Ve=!1,sf()},{once:!0})})}function sf(){const t=jr();if(!N||!De.has(N)){mt();return}if(t.length<=1){as(!1);return}as(!0)}function as(t){const e=document.querySelector("#statusMessageViewport"),r=document.querySelector("#statusMessageTrack");if(!e||!r)return;const n=Math.max(0,r.scrollWidth-e.clientWidth);if(n<=0){t&&Wt(()=>{Yr(()=>{const i=ia();N="",i?zr(i):Ht()})},$s);return}Wt(()=>{sa(n,t)},Ns)}function sa(t,e){const r=document.querySelector("#statusMessageTrack");if(!r||!N||!De.has(N))return;const n=Math.max(4,Math.ceil(t/xc));r.style.setProperty("--long-scroll-distance",`${t}px`),r.style.setProperty("--long-scroll-duration",`${n}s`),r.classList.add("long-scroll"),r.addEventListener("animationend",()=>{if(r.classList.remove("long-scroll"),r.style.transform=`translateX(-${t}px) translateY(-50%)`,e){Wt(()=>{Yr(()=>{const i=ia();N="",i?zr(i):Ht()})},$s);return}Wt(()=>{of()},Oc)},{once:!0})}function of(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!N||!De.has(N))return;if(jr().length!==1){mt();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const n=Math.max(0,e.scrollWidth-t.clientWidth);n<=0||Wt(()=>{sa(n,!1)},Ns)}function Yr(t){const e=document.querySelector("#statusMessageTrack");if(Kr(),!e||!Ue){typeof t=="function"&&t();return}Ve=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${Ts}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",Ue=!1,Ve=!1,typeof t=="function"&&t()},{once:!0})}function Ht(){const t=document.querySelector("#statusMessageTrack");Kr(),N="",Ue=!1,Ve=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function Wt(t,e){const r=window.setTimeout(()=>{It=It.filter(n=>n!==r),t()},e);It.push(r)}function Kr(){for(const t of It)window.clearTimeout(t);It=[]}function oa(){if(!Ue||Ve||!N)return;const t=N;Kr(),zr(t)}function Ee(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(l!=null&&l.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!_()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${J()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${J()}`)}}async function ot(t={}){try{if(_()){const e=await yc();Se=e,!t.silent&&(e==null?void 0:e.message)&&f(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:p});return}Se=await bc(),Wr("file-watcher")}catch(e){f("file-watcher-error",k(e),{ttlMs:p})}}function Bt(t,e=null){const r="[GuildSync File Watcher]";if(e){console.log(`${r} ${t}`,e);return}console.log(`${r} ${t}`)}function af(t={}){if(!_()){Bt("SavedVariables change ignored because the user is not authenticated.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",r=e.toLowerCase(),n=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=String(t.filePath||"").trim(),o=n?`${n} saved variables (${i})`:i;Bt(`SavedVariables change detected: ${i}${s?` (${s})`:""}. Key: ${r}.`,t),f(`saved-vars-file-updated-${e}`,`${o} has been updated.`,{ttlMs:p}),r==="banking"&&(Bt(`Processing banking SavedVariables update from ${i}.`),cf(t)),r==="roster"&&(Bt(`Processing roster SavedVariables update from ${i}.`),lf(t)),r==="applications"&&(Bt(`Processing applications SavedVariables update from ${i}.`),Yd(t))}async function cf(t={}){await _u(t),await Wo(t)}async function lf(t={}){await qd(t)}function df(t){!_()||f("file-watcher-error",k(t),{ttlMs:p})}function uf(){Mt("guildsync-savedvars-file-modified",af),Mt("guildsync-file-watcher-error",df),Mt("guildsync-login-complete",async t=>{y=t||{logged_in:!1,allowed:!1},yr(),qt(),await ot(),f("auth",y.status_message||`Logged in and authorized as ${J()}.`,{ttlMs:p})}),Mt("guildsync-login-denied",async t=>{y={logged_in:!1,allowed:!1,status_message:""},yr(),await ot(),f("auth",t||"Access denied.",{ttlMs:p}),qt()}),Mt("guildsync-login-failed",async t=>{y={logged_in:!1,allowed:!1,status_message:""},yr(),await ot(),f("auth",t||"Login failed.",{ttlMs:p}),qt()})}function _(){return Boolean((y==null?void 0:y.logged_in)&&(y==null?void 0:y.allowed)&&(y==null?void 0:y.token))}function J(){var t,e;return((t=y.user)==null?void 0:t.display_name)||((e=y.user)==null?void 0:e.username)||"Discord User"}function ff(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),r=String(t.discord_user_id||"").trim();if(!e||!r)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=128`}function aa(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function hf(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function pf(){$t&&($t.disconnect(),$t=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),r=Math.round(t.getBoundingClientRect().height);$t=new ResizeObserver(n=>{const i=n[0];if(!i)return;const s=Math.round(i.contentRect.width),o=Math.round(i.contentRect.height);s===e&&o===r||(e=s,r=o,ca(),oa())}),$t.observe(t)}function ca(){clearTimeout(xi),xi=setTimeout(async()=>{try{await As()}catch{}},500)}function k(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function a(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function u(t){return a(t)}uf();Fc();wl();
