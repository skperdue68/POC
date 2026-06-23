(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const ya="/assets/splash.ea386b6a.png",ba="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",ka="/assets/GuildSync-Graphic.9169020d.png",ee=Object.create(null);ee.open="0";ee.close="1";ee.ping="2";ee.pong="3";ee.message="4";ee.upgrade="5";ee.noop="6";const dr=Object.create(null);Object.keys(ee).forEach(t=>{dr[ee[t]]=t});const fn={type:"error",data:"parser error"},us=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",fs=typeof ArrayBuffer=="function",hs=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Cn=({type:t,data:e},r,n)=>us&&e instanceof Blob?r?n(e):Oi(e,n):fs&&(e instanceof ArrayBuffer||hs(e))?r?n(e):Oi(new Blob([e]),n):n(ee[t]+(e||"")),Oi=(t,e)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];e("b"+(n||""))},r.readAsDataURL(t)};function xi(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let Xr;function va(t,e){if(us&&t.data instanceof Blob)return t.data.arrayBuffer().then(xi).then(e);if(fs&&(t.data instanceof ArrayBuffer||hs(t.data)))return e(xi(t.data));Cn(t,!1,r=>{Xr||(Xr=new TextEncoder),e(Xr.encode(r))})}const qi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Bt=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<qi.length;t++)Bt[qi.charCodeAt(t)]=t;const Sa=t=>{let e=t.length*.75,r=t.length,n,i=0,s,o,c,f;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const m=new ArrayBuffer(e),S=new Uint8Array(m);for(n=0;n<r;n+=4)s=Bt[t.charCodeAt(n)],o=Bt[t.charCodeAt(n+1)],c=Bt[t.charCodeAt(n+2)],f=Bt[t.charCodeAt(n+3)],S[i++]=s<<2|o>>4,S[i++]=(o&15)<<4|c>>2,S[i++]=(c&3)<<6|f&63;return m},wa=typeof ArrayBuffer=="function",Bn=(t,e)=>{if(typeof t!="string")return{type:"message",data:ps(t,e)};const r=t.charAt(0);return r==="b"?{type:"message",data:_a(t.substring(1),e)}:dr[r]?t.length>1?{type:dr[r],data:t.substring(1)}:{type:dr[r]}:fn},_a=(t,e)=>{if(wa){const r=Sa(t);return ps(r,e)}else return{base64:!0,data:t}},ps=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},ms=String.fromCharCode(30),Aa=(t,e)=>{const r=t.length,n=new Array(r);let i=0;t.forEach((s,o)=>{Cn(s,!1,c=>{n[o]=c,++i===r&&e(n.join(ms))})})},La=(t,e)=>{const r=t.split(ms),n=[];for(let i=0;i<r.length;i++){const s=Bn(r[i],e);if(n.push(s),s.type==="error")break}return n};function Ea(){return new TransformStream({transform(t,e){va(t,r=>{const n=r.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,n)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(n))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(r)})}})}let Zr;function nr(t){return t.reduce((e,r)=>e+r.length,0)}function ir(t,e){if(t[0].length===e)return t.shift();const r=new Uint8Array(e);let n=0;for(let i=0;i<e;i++)r[i]=t[0][n++],n===t[0].length&&(t.shift(),n=0);return t.length&&n<t[0].length&&(t[0]=t[0].slice(n)),r}function Ra(t,e){Zr||(Zr=new TextDecoder);const r=[];let n=0,i=-1,s=!1;return new TransformStream({transform(o,c){for(r.push(o);;){if(n===0){if(nr(r)<1)break;const f=ir(r,1);s=(f[0]&128)===128,i=f[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(nr(r)<2)break;const f=ir(r,2);i=new DataView(f.buffer,f.byteOffset,f.length).getUint16(0),n=3}else if(n===2){if(nr(r)<8)break;const f=ir(r,8),m=new DataView(f.buffer,f.byteOffset,f.length),S=m.getUint32(0);if(S>Math.pow(2,53-32)-1){c.enqueue(fn);break}i=S*Math.pow(2,32)+m.getUint32(4),n=3}else{if(nr(r)<i)break;const f=ir(r,i);c.enqueue(Bn(s?f:Zr.decode(f),e)),n=0}if(i===0||i>t){c.enqueue(fn);break}}}})}const gs=4;function D(t){if(t)return Da(t)}function Da(t){for(var e in D.prototype)t[e]=D.prototype[e];return t}D.prototype.on=D.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};D.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this};D.prototype.off=D.prototype.removeListener=D.prototype.removeAllListeners=D.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var n,i=0;i<r.length;i++)if(n=r[i],n===e||n.fn===e){r.splice(i,1);break}return r.length===0&&delete this._callbacks["$"+t],this};D.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),r=this._callbacks["$"+t],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,i=r.length;n<i;++n)r[n].apply(this,e)}return this};D.prototype.emitReserved=D.prototype.emit;D.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};D.prototype.hasListeners=function(t){return!!this.listeners(t).length};const Nr=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,r)=>r(e,0))(),U=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),$a="arraybuffer";function ys(t,...e){return e.reduce((r,n)=>(t.hasOwnProperty(n)&&(r[n]=t[n]),r),{})}const Ma=U.setTimeout,Ta=U.clearTimeout;function Cr(t,e){e.useNativeTimers?(t.setTimeoutFn=Ma.bind(U),t.clearTimeoutFn=Ta.bind(U)):(t.setTimeoutFn=U.setTimeout.bind(U),t.clearTimeoutFn=U.clearTimeout.bind(U))}const Na=1.33;function Ca(t){return typeof t=="string"?Ba(t):Math.ceil((t.byteLength||t.size)*Na)}function Ba(t){let e=0,r=0;for(let n=0,i=t.length;n<i;n++)e=t.charCodeAt(n),e<128?r+=1:e<2048?r+=2:e<55296||e>=57344?r+=3:(n++,r+=4);return r}function bs(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Ia(t){let e="";for(let r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e}function Oa(t){let e={},r=t.split("&");for(let n=0,i=r.length;n<i;n++){let s=r[n].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class xa extends Error{constructor(e,r,n){super(e),this.description=r,this.context=n,this.type="TransportError"}}class In extends D{constructor(e){super(),this.writable=!1,Cr(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,r,n){return super.emitReserved("error",new xa(e,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const r=Bn(e,this.socket.binaryType);this.onPacket(r)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,r={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const r=Ia(e);return r.length?"?"+r:""}}class qa extends In{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const r=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};La(e,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Aa(e,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=bs()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(e,r)}}let ks=!1;try{ks=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Fa=ks;function Pa(){}class Ga extends qa{constructor(e){if(super(e),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,r){const n=this.request({method:"POST",data:e});n.on("success",r),n.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=e}}class X extends D{constructor(e,r,n){super(),this.createRequest=e,Cr(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;const r=ys(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=X.requestsCount++,X.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Pa,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete X.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}X.requestsCount=0;X.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Fi);else if(typeof addEventListener=="function"){const t="onpagehide"in U?"pagehide":"unload";addEventListener(t,Fi,!1)}}function Fi(){for(let t in X.requests)X.requests.hasOwnProperty(t)&&X.requests[t].abort()}const Ua=function(){const t=vs({xdomain:!1});return t&&t.responseType!==null}();class Va extends Ga{constructor(e){super(e);const r=e&&e.forceBase64;this.supportsBinary=Ua&&!r}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new X(vs,this.uri(),e)}}function vs(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Fa))return new XMLHttpRequest}catch{}if(!e)try{return new U[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Ss=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Ha extends In{get name(){return"websocket"}doOpen(){const e=this.uri(),r=this.opts.protocols,n=Ss?{}:ys(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,r,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],i=r===e.length-1;Cn(n,this.supportsBinary,s=>{try{this.doWrite(n,s)}catch{}i&&Nr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=bs()),this.supportsBinary||(r.b64=1),this.createUri(e,r)}}const en=U.WebSocket||U.MozWebSocket;class Wa extends Ha{createSocket(e,r,n){return Ss?new en(e,r,n):r?new en(e,r):new en(e)}doWrite(e,r){this.ws.send(r)}}class za extends In{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const r=Ra(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(r).getReader(),i=Ea();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const s=()=>{n.read().then(({done:c,value:f})=>{c||(this.onPacket(f),s())}).catch(c=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],i=r===e.length-1;this._writer.write(n).then(()=>{i&&Nr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const ja={websocket:Wa,webtransport:za,polling:Va},Ka=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Ya=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function hn(t){if(t.length>8e3)throw"URI too long";const e=t,r=t.indexOf("["),n=t.indexOf("]");r!=-1&&n!=-1&&(t=t.substring(0,r)+t.substring(r,n).replace(/:/g,";")+t.substring(n,t.length));let i=Ka.exec(t||""),s={},o=14;for(;o--;)s[Ya[o]]=i[o]||"";return r!=-1&&n!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=Ja(s,s.path),s.queryKey=Qa(s,s.query),s}function Ja(t,e){const r=/\/{2,9}/g,n=e.replace(r,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Qa(t,e){const r={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,s){i&&(r[i]=s)}),r}const pn=typeof addEventListener=="function"&&typeof removeEventListener=="function",ur=[];pn&&addEventListener("offline",()=>{ur.forEach(t=>t())},!1);class Se extends D{constructor(e,r){if(super(),this.binaryType=$a,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(r=e,e=null),e){const n=hn(e);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=hn(r.host).host);Cr(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Oa(this.opts.query)),pn&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},ur.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const r=Object.assign({},this.opts.query);r.EIO=gs,r.transport=e,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Se.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(e);r.open(),this.setTransport(r)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",Se.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=e.data,this._onError(r);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(r+=Ca(i)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Nr(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,r,n){return this._sendPacket("message",e,r,n),this}send(e,r,n){return this._sendPacket("message",e,r,n),this}_sendPacket(e,r,n,i){if(typeof r=="function"&&(i=r,r=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const s={type:e,data:r,options:n};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),e()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(Se.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),pn&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=ur.indexOf(this._offlineEventListener);n!==-1&&ur.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,r),this.writeBuffer=[],this._prevBufferLen=0}}}Se.protocol=gs;class Xa extends Se{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let r=this.createTransport(e),n=!1;Se.priorWebsocketSuccess=!1;const i=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",g=>{if(!n)if(g.type==="pong"&&g.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;Se.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(S(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const y=new Error("probe error");y.transport=r.name,this.emitReserved("upgradeError",y)}}))};function s(){n||(n=!0,S(),r.close(),r=null)}const o=g=>{const y=new Error("probe error: "+g);y.transport=r.name,s(),this.emitReserved("upgradeError",y)};function c(){o("transport closed")}function f(){o("socket closed")}function m(g){r&&g.name!==r.name&&s()}const S=()=>{r.removeListener("open",i),r.removeListener("error",o),r.removeListener("close",c),this.off("close",f),this.off("upgrading",m)};r.once("open",i),r.once("error",o),r.once("close",c),this.once("close",f),this.once("upgrading",m),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const r=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&r.push(e[n]);return r}}class Za extends Xa{constructor(e,r={}){const n=typeof e=="object"?e:r;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(i=>ja[i]).filter(i=>!!i)),super(e,n)}}function ec(t,e="",r){let n=t;r=r||typeof location<"u"&&location,t==null&&(t=r.protocol+"//"+r.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=r.protocol+t:t=r.host+t),/^(https?|wss?):\/\//.test(t)||(typeof r<"u"?t=r.protocol+"//"+t:t="https://"+t),n=hn(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const s=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port+e,n.href=n.protocol+"://"+s+(r&&r.port===n.port?"":":"+n.port),n}const tc=typeof ArrayBuffer=="function",rc=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,ws=Object.prototype.toString,nc=typeof Blob=="function"||typeof Blob<"u"&&ws.call(Blob)==="[object BlobConstructor]",ic=typeof File=="function"||typeof File<"u"&&ws.call(File)==="[object FileConstructor]";function On(t){return tc&&(t instanceof ArrayBuffer||rc(t))||nc&&t instanceof Blob||ic&&t instanceof File}function fr(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let r=0,n=t.length;r<n;r++)if(fr(t[r]))return!0;return!1}if(On(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return fr(t.toJSON(),!0);for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&fr(t[r]))return!0;return!1}function sc(t){const e=[],r=t.data,n=t;return n.data=mn(r,e),n.attachments=e.length,{packet:n,buffers:e}}function mn(t,e){if(!t)return t;if(On(t)){const r={_placeholder:!0,num:e.length};return e.push(t),r}else if(Array.isArray(t)){const r=new Array(t.length);for(let n=0;n<t.length;n++)r[n]=mn(t[n],e);return r}else if(typeof t=="object"&&!(t instanceof Date)){const r={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=mn(t[n],e));return r}return t}function oc(t,e){return t.data=gn(t.data,e),delete t.attachments,t}function gn(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let r=0;r<t.length;r++)t[r]=gn(t[r],e);else if(typeof t=="object")for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(t[r]=gn(t[r],e));return t}const _s=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],ac=5;var v;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(v||(v={}));class cc{constructor(e){this.replacer=e}encode(e){return(e.type===v.EVENT||e.type===v.ACK)&&fr(e)?this.encodeAsBinary({type:e.type===v.EVENT?v.BINARY_EVENT:v.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let r=""+e.type;return(e.type===v.BINARY_EVENT||e.type===v.BINARY_ACK)&&(r+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(r+=e.nsp+","),e.id!=null&&(r+=e.id),e.data!=null&&(r+=JSON.stringify(e.data,this.replacer)),r}encodeAsBinary(e){const r=sc(e),n=this.encodeAsString(r.packet),i=r.buffers;return i.unshift(n),i}}class xn extends D{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let r;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(e);const n=r.type===v.BINARY_EVENT;n||r.type===v.BINARY_ACK?(r.type=n?v.EVENT:v.ACK,this.reconstructor=new lc(r),r.attachments===0&&super.emitReserved("decoded",r)):super.emitReserved("decoded",r)}else if(On(e)||e.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(e),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let r=0;const n={type:Number(e.charAt(0))};if(v[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===v.BINARY_EVENT||n.type===v.BINARY_ACK){const s=r+1;for(;e.charAt(++r)!=="-"&&r!=e.length;);const o=e.substring(s,r);if(o!=Number(o)||e.charAt(r)!=="-")throw new Error("Illegal attachments");const c=Number(o);if(!As(c)||c<0)throw new Error("Illegal attachments");if(c>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=c}if(e.charAt(r+1)==="/"){const s=r+1;for(;++r&&!(e.charAt(r)===","||r===e.length););n.nsp=e.substring(s,r)}else n.nsp="/";const i=e.charAt(r+1);if(i!==""&&Number(i)==i){const s=r+1;for(;++r;){const o=e.charAt(r);if(o==null||Number(o)!=o){--r;break}if(r===e.length)break}n.id=Number(e.substring(s,r+1))}if(e.charAt(++r)){const s=this.tryParse(e.substr(r));if(xn.isPayloadValid(n.type,s))n.data=s;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,r){switch(e){case v.CONNECT:return kr(r);case v.DISCONNECT:return r===void 0;case v.CONNECT_ERROR:return typeof r=="string"||kr(r);case v.EVENT:case v.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&_s.indexOf(r[0])===-1);case v.ACK:case v.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class lc{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const r=oc(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function dc(t){return typeof t=="string"}const As=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function uc(t){return t===void 0||As(t)}function kr(t){return Object.prototype.toString.call(t)==="[object Object]"}function fc(t,e){switch(t){case v.CONNECT:return e===void 0||kr(e);case v.DISCONNECT:return e===void 0;case v.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&_s.indexOf(e[0])===-1);case v.ACK:return Array.isArray(e);case v.CONNECT_ERROR:return typeof e=="string"||kr(e);default:return!1}}function hc(t){return dc(t.nsp)&&uc(t.id)&&fc(t.type,t.data)}const pc=Object.freeze(Object.defineProperty({__proto__:null,protocol:ac,get PacketType(){return v},Encoder:cc,Decoder:xn,isPacketValid:hc},Symbol.toStringTag,{value:"Module"}));function W(t,e,r){return t.on(e,r),function(){t.off(e,r)}}const mc=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Ls extends D{constructor(e,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[W(e,"open",this.onopen.bind(this)),W(e,"packet",this.onpacket.bind(this)),W(e,"error",this.onerror.bind(this)),W(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...r){var n,i,s;if(mc.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(r.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const o={type:v.EVENT,data:r};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const S=this.ids++,g=r.pop();this._registerAckCallback(S,g),o.id=S}const c=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,f=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!c||(f?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,r){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[e]=r;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let c=0;c<this.sendBuffer.length;c++)this.sendBuffer[c].id===e&&this.sendBuffer.splice(c,1);r.call(this,new Error("operation has timed out"))},i),o=(...c)=>{this.io.clearTimeoutFn(s),r.apply(this,c)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...r){return new Promise((n,i)=>{const s=(o,c)=>o?i(o):n(c);s.withError=!0,r.push(s),this.emit(e,...r)})}_addToQueue(e){let r;typeof e[e.length-1]=="function"&&(r=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(i)):(this._queue.shift(),r&&r(null,...s)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!e||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:v.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){const n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case v.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case v.EVENT:case v.BINARY_EVENT:this.onevent(e);break;case v.ACK:case v.BINARY_ACK:this.onack(e);break;case v.DISCONNECT:this.ondisconnect();break;case v.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const r=e.data||[];e.id!=null&&r.push(this.ack(e.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const r=this;let n=!1;return function(...i){n||(n=!0,r.packet({type:v.ACK,id:e,data:i}))}}onack(e){const r=this.acks[e.id];typeof r=="function"&&(delete this.acks[e.id],r.withError&&e.data.unshift(null),r.apply(this,e.data))}onconnect(e,r){this.id=e,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:v.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,e.data)}}}function gt(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}gt.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-r:t+r}return Math.min(t,this.max)|0};gt.prototype.reset=function(){this.attempts=0};gt.prototype.setMin=function(t){this.ms=t};gt.prototype.setMax=function(t){this.max=t};gt.prototype.setJitter=function(t){this.jitter=t};class yn extends D{constructor(e,r){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(r=e,e=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,Cr(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new gt({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=e;const i=r.parser||pc;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var r;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(r=this.backoff)===null||r===void 0||r.setMin(e),this)}randomizationFactor(e){var r;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(r=this.backoff)===null||r===void 0||r.setJitter(e),this)}reconnectionDelayMax(e){var r;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(r=this.backoff)===null||r===void 0||r.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Za(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=W(r,"open",function(){n.onopen(),e&&e()}),s=c=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",c),e?e(c):this.maybeReconnectOnOpen()},o=W(r,"error",s);if(this._timeout!==!1){const c=this._timeout,f=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),r.close()},c);this.opts.autoUnref&&f.unref(),this.subs.push(()=>{this.clearTimeoutFn(f)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(W(e,"ping",this.onping.bind(this)),W(e,"data",this.ondata.bind(this)),W(e,"error",this.onerror.bind(this)),W(e,"close",this.onclose.bind(this)),W(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(r){this.onclose("parse error",r)}}ondecoded(e){Nr(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,r){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new Ls(this,e,r),this.nsps[e]=n),n}_destroy(e){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(e){const r=this.encoder.encode(e);for(let n=0;n<r.length;n++)this.engine.write(r[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Dt={};function hr(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const r=ec(t,e.path||"/socket.io"),n=r.source,i=r.id,s=r.path,o=Dt[i]&&s in Dt[i].nsps,c=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let f;return c?f=new yn(n,e):(Dt[i]||(Dt[i]=new yn(n,e)),f=Dt[i]),r.query&&!e.query&&(e.query=r.queryKey),f.socket(r.path,e)}Object.assign(hr,{Manager:yn,Socket:Ls,io:hr,connect:hr});window.GUILDSYNC_WEB=!0;const qn="guildsync-web-session";function gc(){try{return JSON.parse(localStorage.getItem(qn)||"{}")||{}}catch{return{}}}function yc(t){localStorage.setItem(qn,JSON.stringify(t||{}))}function Es(){localStorage.removeItem(qn)}async function bc(){return!0}async function Rs(){return!0}async function kc(){return!0}async function vc(){return!0}async function Sc(){return!0}async function wc(){return window.location.assign("/api/auth/discord/web-login"),!0}async function _c(){var s,o,c,f,m,S,g,y;const e=gc().token||localStorage.getItem("guildsync-web-token")||"";if(!e)return{logged_in:!1,allowed:!1,status_message:"Not logged in."};const r=await fetch("/api/auth/session",{headers:{Authorization:`Bearer ${e}`}}),n=await r.json().catch(()=>({}));if(!r.ok||n.ok===!1)return Es(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:n.message||"Session expired. Please log in again."};const i={logged_in:!0,allowed:!0,token:e,user:n.user,discord_user_id:((s=n.user)==null?void 0:s.discord_user_id)||"",username:((o=n.user)==null?void 0:o.username)||"",global_name:((c=n.user)==null?void 0:c.global_name)||"",display_name:((f=n.user)==null?void 0:f.display_name)||((m=n.user)==null?void 0:m.global_name)||((S=n.user)==null?void 0:S.username)||"",avatar_url:((g=n.user)==null?void 0:g.avatar_url)||"",role:((y=n.user)==null?void 0:y.role)||"user",status_message:"Logged in."};return yc(i),i}async function Ac(){return Es(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:"Logged out."}}async function Lc(){return Br()}async function Ec(){return Br()}async function Br(){return{watching:!1,directory:"Web upload mode",files:[{key:"banking",fileName:"GuildSyncBanking.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"},{key:"roster",fileName:"GuildSyncRoster.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"}]}}async function Rc(){return Br()}async function Dc(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function $c(){return{ok:!0}}async function Mc(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function Tc(){return{ok:!0}}async function Nc(t){return t&&window.open(t,"_blank","noopener,noreferrer"),!0}async function Cc(){return{running:!1,message:"ESO process detection is only available in the desktop client."}}async function Bc(){throw new Error("Deposit mail sending is disabled in the web client. Use the GuildSync desktop client for ESO mail queue writes.")}async function Ic(){return{ok:!0,acknowledgements:[],records:[]}}async function Oc(){return{ok:!0}}async function xc(){return{ok:!0}}async function qc(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSyncApplications.lua onto the GuildSync web window.")}async function Fc(){return{ok:!0}}const sr=new Map;function $t(t,e){return sr.has(t)||sr.set(t,new Set),sr.get(t).add(e),()=>{var r;return(r=sr.get(t))==null?void 0:r.delete(e)}}const Ir="1.1.2",or={windows:{label:"Windows detected",shortLabel:"Windows",fileName:"GuildSync-windows-amd64.zip",href:"/downloads/GuildSync-windows-amd64.zip"},macos:{label:"macOS detected",shortLabel:"macOS",fileName:"GuildSync-macos.zip",href:"/downloads/GuildSync-macos.zip"},linux:{label:"Linux detected",shortLabel:"Linux",fileName:"GuildSync-linux-amd64.zip",href:"/downloads/GuildSync-linux-amd64.zip"}},Ds="guildsync-web-savedvars-upload-banner-dismissed",Pc=new Map([["GuildSyncBanking.lua","banking"],["GuildSyncRoster.lua","roster"],["GuildSyncApplications.lua","applications"]]),Gc=30*60*1e3,$s="guildsync-pending-banking-uploads",Ms="guildsync-pending-deposit-mail",Uc=5e3,Vc=30*1e3,Ts="guildsync-pending-roster-uploads",Ns="guildsync-pending-applications-uploads",p=60*1e3,Cs=7e3,Bs=1400,Is=2400,Hc=4e3,Wc=38,Os=document.querySelector("#app");let Pi=null,Mt=null,Gi=!1,jt=!1,pr=null,tn=!1,rn=!1,nn=!1,we=null,ne={running:!1,message:""},Xe=null,Ze=null,mr=!1,et=null,sn=!1,Qe=0,on=!1,De=new Map,Ie=new Map,N="",He=!1,We=!1,It=[],b={logged_in:!1,allowed:!1,status_message:""},pe={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},d=null,F=[],Or=[],xr=null,Pt=!1,vr=!1,Sr="",tt=new Set,rt=new Set,Gt="username",xe="asc",bn=null,kn=null,Y=[],wr=null,$e=!1,Ui=!1,_r="",vn=null,Sn=null,qe=new Set,nt=new Set,oe="",x="",M=-1,at=!1,Ut="",V=[],Me="",_e=[],Ae=!1,ce="",an=null,z=-1,ct=!1,me="",H=[],lt="",ze="",Le=[],Ee=!1,le="",Vi=null,Be=0;const zc=650;let j=-1,yt=!1,bt=[],ge=!1,Fe="",kt=!1,Vt=[],ye=!1,Pe="",vt=!1,Fn=[],be=!1,Ge="",St="",ke="",it="",ve="",L=[],B=!1,I="",Ke=!1,qr="",Oe="",Kt="",Yt="",ae=-1,Ce=!1,w=null,Ue=[],dt=!1,ue="",Jt="",Q=-1,wt=!1,Pn=null,Ot=null;const Gn=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let P=[],$="biweekly",xs=null,Te=!1,Ve=!1,Ye="biweekly",_t=!1,ut=!1,ie="",se=null,T={targetType:"other",note:"",tickets:""},de=!1,Ar=!1,G="",E={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},At="",C=-1,K=!1,wn={biweekly:0,monthly:0};const jc=1780786800,Ne=14*24*60*60,Lr=60*60,Er=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let R=Er[0].id;function Kc(){Os.innerHTML=`
    <main class="splash-screen">
      <img src="${ya}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await bc(),await Yc(),qs(),Ft(),await ot()},5e3)}async function Yc(){try{b=await _c()}catch(t){b={logged_in:!1,allowed:!1,status_message:""},h("session-error",k(t),{ttlMs:p})}}function qs(){Os.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${ba}" alt="" class="title-icon" />
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
            <img src="${ka}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${a(Ir)}</div>
            </div>
          </div>
          <div class="compact-header-actions">
            ${Qc()}
            <div id="discordArea" class="discord-area"></div>
          </div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${Fs()}
        </nav>

        <div id="webSavedVarsUploadBannerHost">
          ${El()}
        </div>

        <section id="guildSyncTabContent" class="guildsync-tab-content${js()?" web-upload-banner-dismissed":""}" aria-live="polite">
          ${Gs()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await vc()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await Rs(),await Sc()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await kc()}),br(),Rl(),Us(),ra(),No(),Vo(),Ks(),To(),So(),wo(),_o(),Ao(),co(),Co(),il(),Re(),mt(),Gi||(window.addEventListener("resize",()=>{ga(),pa()}),wf(),Gi=!0)}function Fs(){return Er.map(t=>{const e=t.id===R,r=Xc(t.id,e),n=r?Ps():0,i=r?`Deposit mail needs attention: ${n} item${n===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${r?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${u(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${u(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${Zc(t.icon)}</span>
          <span class="guildsync-tab-label">${a(t.label)}</span>
          ${r?`<span class="guildsync-tab-mail-badge" aria-label="${u(i)}">${n>99?"99+":a(String(n))}</span>`:""}
        </button>
      `}).join("")}function Jc(){var r;const e=`${((r=navigator.userAgentData)==null?void 0:r.platform)||""} ${navigator.platform||""} ${navigator.userAgent||""}`.toLowerCase();return e.includes("win")?or.windows:e.includes("mac")||e.includes("darwin")?or.macos:e.includes("linux")||e.includes("x11")?or.linux:{...or.windows,label:"Desktop client",shortLabel:"Windows"}}function Qc(){const t=Jc();return`
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
  `}function Ps(){return _()?Ur()+er()+Go():0}function Xc(t,e){return t!=="more"||e?!1:Ps()>0}function Zc(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function Gs(){const t=Er.find(r=>r.id===R)||Er[0];let e="";return t.id==="discord-members"?e=ol():t.id==="eso-members"?e=al():t.id==="more"?e=nu():t.id==="settings"?e=Dl():e=`
      <div class="guildsync-tab-panel" data-active-tab="${u(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${a(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${de?Bd():""}
    ${_t?hu():""}
    ${Ce?Ld():""}
    ${yt?Cl():""}
    ${kt?Fl():""}
    ${vt?Vl():""}
    ${Ke?td():""}
    ${wt?nl():""}
  `}function el(){return wt||at||ct||de||_t||Ce||yt||kt||vt||Ke||Ve}function tl(){return wt?!1:Ke?(Dn(),!0):vt?(Rn(),!0):kt?(En(),!0):yt?(Ln(),!0):Ce?(ht(),!0):_t?($r(),!0):de?(de=!1,l(),!0):at?(at=!1,l(),!0):ct?(ct=!1,l(),!0):Ve?(Ve=!1,l(),!0):!1}function rl(t){t.key==="Escape"&&tl()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",rl,!0),window.guildSyncGlobalModalEscapeAttached=!0);function Un(t={}){return new Promise(e=>{Ot&&Ot(!1),wt=!0,Pn={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},Ot=e,l()})}function Rr(t=!1){const e=Ot;Ot=null,wt=!1,Pn=null,e&&e(t===!0),l()}function nl(){const t=Pn||{};return`
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
  `}function Hi(t){var n,i,s,o;const e=(i=(n=t.target).closest)==null?void 0:i.call(n,"#cancelGuildSyncConfirmButton"),r=(o=(s=t.target).closest)==null?void 0:o.call(s,"#acceptGuildSyncConfirmButton");if(!(!e&&!r)){if(t.preventDefault(),t.stopPropagation(),e){Rr(!1);return}r&&Rr(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",Hi,!0),document.addEventListener("pointerup",Hi,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function il(){if(!wt)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=n=>{n.preventDefault(),n.stopPropagation(),Rr(!1)}),e&&(e.onclick=n=>{n.preventDefault(),n.stopPropagation(),Rr(!0)});const r=document.querySelector(".guildsync-confirm-overlay");r&&(r.onclick=n=>{n.target===r&&(n.preventDefault(),n.stopPropagation())})}function Us(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(el())return;const e=t.dataset.tabId;!e||e===R||(R=e,l())})})}function sl(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function l(t={}){Ke&&sl();const e=document.querySelector(".guildsync-tabs"),r=document.querySelector("#guildSyncTabContent");e&&(e.innerHTML=Fs()),r&&(r.innerHTML=Gs()),Us(),ra(),No(),Vo(),Ks(),To(),So(),wo(),_o(),Ao(),co(),Co(),t.restoreDiscordSearchFocus&&ju(),t.restoreRosterSearchFocus&&Ku(),R==="discord-members"&&(d==null?void 0:d.connected)&&F.length===0&&!Pt&&ni({silent:!0}),R==="eso-members"&&(d==null?void 0:d.connected)&&Y.length===0&&!$e&&!Ui&&(Ui=!0,Lt({silent:!0})),R==="more"&&(d==null?void 0:d.connected)&&P.length===0&&!Te&&re({silent:!0}),(R==="discord-members"||R==="eso-members"||R==="settings")&&(d==null?void 0:d.connected)&&L.length===0&&!B&&Zt({silent:!0})}function ol(){const t=Hu(),e=Yu(),r=Array.from(tt),n=Array.from(rt);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${a(oa(xr))}</span>
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
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${u(Sr)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!tt.has(i)).map(i=>`<option value="${u(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All roles</span>':r.map(i=>Zu(i)).join("")}
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
              ${Gn.filter(i=>!rt.has(i.id)).map(i=>`<option value="${u(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(i=>Vs("discord",i)).join("")}
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
              ${t.length>0?t.map(i=>Ju(i)).join(""):Qu()}
            </tbody>
          </table>
        </div>
      </div>
      ${ct?kl():""}
    </div>
  `}function al(){const t=fl(),e=ml(),r=Array.from(qe),n=Array.from(nt);return`
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
          <span class="discord-last-refresh">Last Refresh: ${a(Hd(wr))}</span>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${$e?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${$e?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${u(_r)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!qe.has(i)).map(i=>`<option value="${u(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All ranks</span>':r.map(i=>gl(i)).join("")}
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
              ${Gn.filter(i=>!nt.has(i.id)).map(i=>`<option value="${u(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(i=>Vs("roster",i)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${ar("account_name","Account Name")}
                ${ar("rank","Rank")}
                ${ar("joined","Joined")}
                ${ar("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map((i,s)=>cl(i,s)).join(""):ll()}
            </tbody>
          </table>
        </div>
      </div>
      ${at?_l():""}
    </div>
  `}function cl(t,e=-1){const r=dl(t.rank||""),n=r?` style="color: ${r};"`:"";return`
    <tr class="eso-roster-row${e===M?" roster-search-active-row":""}"${n} data-roster-row-index="${u(String(e))}" data-eso-account-name="${u(t.account_name||"")}">
      <td>${a(t.account_name||"")}</td>
      <td>${Vn(t.rank||"")}</td>
      <td>${a(Gr(t.joined))}</td>
      <td class="member-link-action-cell">${mo({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function ll(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">${a($e?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function dl(t){const e=ia(t);return zr(e==null?void 0:e.role_color)}function Vn(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${a(e)}</span>`}function ul(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":Vn(e)}function fl(){const t=_r.trim().toLowerCase(),e=Y.filter(r=>{const n=String(r.rank||"").trim();if(qe.size>0&&!qe.has(n)||!zs(nt,_n(r)))return!1;if(!t)return!0;const i=Gr(r.joined),s=Yn(r.joined),o=_n(r),c=Ws(r.account_name||"");return[r.account_name,n,i,s,r.joined,o,c].map(m=>String(m||"").toLowerCase()).join(" ").includes(t)});return hl(e)}function hl(t){if(!oe||!x)return t;const e=x==="desc"?-1:1;return[...t].sort((r,n)=>{const i=Wi(r,oe),s=Wi(n,oe),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:String(r.account_name||"").localeCompare(String(n.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function Wi(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const r=Number(t.joined||0);return Number.isFinite(r)&&r>0?String(r).padStart(16,"0"):""}if(e==="linked"){const r=_n(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[r]||"9"} ${r} ${Ws(t.account_name||"")}`}return String(t.account_name||"")}function pl(t){const r=new Set(["account_name","rank","joined","linked"]).has(t)?t:"account_name";oe!==r?(oe=r,x="asc"):x==="asc"?x="desc":x==="desc"?(oe="",x=""):(oe=r,x="asc"),M=-1,l()}function ar(t,e,r=""){const n=oe===t&&Boolean(x),i=n?x==="asc"?"ascending":"descending":"none",s=n?x==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${u(r)}" aria-sort="${u(i)}">
      <button
        class="discord-sort-header roster-sort-header${n?" active":""}"
        type="button"
        data-roster-sort-column="${u(t)}"
        title="Sort ${u(e)}${n&&x==="asc"?" descending":n&&x==="desc"?" not sorted":" ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function ml(){return Array.from(new Set(Y.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function gl(t){const e=ia(t),r=zr(e==null?void 0:e.role_color),n=ai(r),i=oi(r,n);return`
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
  `}function yl(t){const e=Gn.find(r=>r.id===t);return e?e.label:t}function Vs(t,e){const r=t==="roster"?"roster":"discord",n=yl(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${r}-link-status-filter="${u(e)}"
      title="Remove ${u(n)} link filter"
    >
      <span>${a(n)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Hs(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked"&&String(r.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function bl(t){return Hs(Pr(t==null?void 0:t.discord_id))}function _n(t){return Hs(Fr(t==null?void 0:t.account_name))}function Ws(t){const e=Fr(t),r=po({mode:"eso-to-discord",esoAccountName:t}),n=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean),i=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="candidate").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean);return[r.label,r.title,n.join(" "),i.join(" ")].filter(Boolean).join(" ")}function zs(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function kl(){return`
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
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${u(me)}" />
        </div>

        ${le?`<div class="discord-data-error">${a(le)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${vl()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${ze?`: ${a(ze)}`:""}</div>
            ${Sl()}
          </div>
        </div>
      </div>
    </div>
  `}function vl(){return Ee&&H.length===0?'<div class="roster-history-muted">Searching...</div>':H.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${H.map((t,e)=>`
        <button class="roster-history-match${e===j||t.discord_id===lt?" is-selected":""}" type="button" data-discord-history-id="${u(t.discord_id)}" data-discord-history-name="${u(An(t))}">
          <span>${a(An(t))}</span>
          <strong>${a(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===j?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Sl(){return lt?Ee&&Le.length===0?'<div class="roster-history-muted">Loading history...</div>':Le.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${Le.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${a(Yn(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${a(wl(t.event_type))}</td>
              <td>${a(t.old_value||"")}</td>
              <td>${a(t.new_value||"")}</td>
              <td>${a(t.initiator||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function An(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function wl(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function _l(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(Ut)}" />
        </div>

        ${ce?`<div class="discord-data-error">${a(ce)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Al()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${Me?`: ${a(Me)}`:""}</div>
            ${Ll()}
          </div>
        </div>
      </div>
    </div>
  `}function Al(){return Ae&&V.length===0?'<div class="roster-history-muted">Searching...</div>':V.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${V.map((t,e)=>`
        <button class="roster-history-match${e===z||t.account_name===Me?" is-selected":""}" type="button" data-roster-history-account="${u(t.account_name)}">
          <span>${a(t.account_name)}</span>
          <strong>${a(t.rank||"")}</strong>
          ${e===z?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Ll(){return Me?Ae&&_e.length===0?'<div class="roster-history-muted">Loading history...</div>':_e.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
              <td class="roster-history-when-cell">${a(Yn(t.timestamp))}</td>
              <td>${a(t.event_type||"")}</td>
              <td>${ul(t.rank)}</td>
              <td>${a(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function Qt(){return typeof window<"u"&&window.GUILDSYNC_WEB===!0}function js(){if(!Qt())return!0;try{return localStorage.getItem(Ds)==="1"}catch{return!1}}function El(){return!Qt()||js()?"":`
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
  `}function Rl(){const t=document.querySelector("#webSavedVarsUploadBannerDismissButton");!t||t.addEventListener("click",()=>{var e,r;try{localStorage.setItem(Ds,"1")}catch{}(e=document.querySelector("#webSavedVarsUploadBannerHost"))==null||e.remove(),(r=document.querySelector(".guildsync-tab-content"))==null||r.classList.add("web-upload-banner-dismissed")})}function Dl(){return`
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
  `}function Ks(){var t,e,r,n;R==="settings"&&((t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>Qs()),(e=document.querySelector("#runDiscordRankAuditReportButton"))==null||e.addEventListener("click",()=>ql()),(r=document.querySelector("#runDiscordLastSeenReportButton"))==null||r.addEventListener("click",()=>Ul()),(n=document.querySelector("#runMemberLinksReportButton"))==null||n.addEventListener("click",()=>Xl()))}function gr(){return Qt()&&_()&&(d==null?void 0:d.connected)===!0}function Ys(){if(!Qt())return null;let t=document.querySelector("#webSavedVarsFullScreenDropOverlay");return t||(t=document.createElement("div"),t.id="webSavedVarsFullScreenDropOverlay",t.className="web-savedvars-fullscreen-drop-overlay",t.setAttribute("aria-hidden","true"),t.innerHTML=`
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
  `,document.body.appendChild(t),t)}function zi(){const t=Ys();!t||(t.classList.add("is-visible"),t.setAttribute("aria-hidden","false"))}function cn(){const t=document.querySelector("#webSavedVarsFullScreenDropOverlay");!t||(t.classList.remove("is-visible"),t.setAttribute("aria-hidden","true"))}function Tt(t){var r;return Array.from(((r=t==null?void 0:t.dataTransfer)==null?void 0:r.types)||[]).includes("Files")}function $l(t){!(t!=null&&t.dataTransfer)||(t.dataTransfer.dropEffect=gr()?"copy":"none")}function Js(t){const e=String(t||"").split(/[\\/]/).pop();return Pc.get(e)||""}function Ml(){if(!Qt())return;Ys();const t=e=>{!Tt(e)||(e.preventDefault(),e.stopPropagation(),$l(e))};document.addEventListener("dragenter",e=>{!Tt(e)||(t(e),Qe+=1,gr()&&zi())},!0),document.addEventListener("dragover",e=>{t(e),Tt(e)&&gr()&&zi()},!0),document.addEventListener("dragleave",e=>{!Tt(e)||(e.preventDefault(),e.stopPropagation(),Qe=Math.max(0,Qe-1),Qe===0&&cn())},!0),document.addEventListener("drop",async e=>{var n;if(!Tt(e))return;if(t(e),Qe=0,cn(),!gr()){h("web-savedvars-drop-not-ready","SavedVariables drag/drop is only available while logged in and connected to the GuildSync server.",{ttlMs:p});return}const r=Array.from(((n=e.dataTransfer)==null?void 0:n.files)||[]);await Tl(r)},!0),window.addEventListener("blur",()=>{Qe=0,cn()})}async function Tl(t=[]){if(on){h("web-savedvars-drop-busy","A SavedVariables upload is already processing. Please wait for it to finish.",{ttlMs:p});return}const e=Array.from(t||[]).filter(Boolean);if(!e.length){h("web-savedvars-drop-empty","No file was dropped.",{ttlMs:p});return}const r=e.find(n=>!Js(n.name));if(r){h("web-savedvars-drop-invalid",`Unsupported file: ${r.name}. Drop only GuildSyncBanking.lua, GuildSyncRoster.lua, or GuildSyncApplications.lua.`,{ttlMs:p});return}on=!0;try{for(const n of e)await Nl(n)}finally{on=!1}}async function Nl(t){const e=Js(t.name);if(!e)throw new Error(`Unsupported file: ${t.name}`);const r=`web-savedvars-upload-${e}`,n=await t.text();if(!String(n||"").trim())throw new Error(`${t.name} is empty.`);h(r,`Uploading ${t.name}...`);try{const i=await A("guildsync:upload-savedvars-raw",{file_name:t.name,raw_lua_text:n,source:"web-drag-drop"},12e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||`${t.name} upload was rejected.`);e==="banking"?await re({silent:!0}):e==="roster"&&(await Lt({silent:!0}),await Zt({silent:!0})),h(r,i.message||`${t.name} uploaded and processed.`,{ttlMs:p})}catch(i){throw h(r,k(i),{ttlMs:p}),i}jr("version")}function Qs(){yt=!0,Fe="",l(),Ro()}function Ln(){yt=!1,Fe="",l()}function Cl(){const t=Bl(),e=Il(),r=bt.length;return`
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

        ${Fe?`<div class="discord-data-error">${a(Fe)}</div>`:""}

        <div class="report-results-content">
          ${ge&&r===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!ge&&r===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${r>0?ji("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${r>0?ji("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${a(eo())}</textarea>
      </div>
    </div>
  `}function Bl(){return bt.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function Il(){return bt.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function ji(t,e,r,n){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${a(t)}</h4>
          <p>${a(e)}</p>
        </div>
        <span>${a(String(r.length))} row${r.length===1?"":"s"}</span>
      </div>
      ${r.length>0?Ol(r):`<div class="roster-history-muted report-section-empty">${a(n)}</div>`}
    </section>
  `}function Ol(t=bt){return`
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
              <td>${Vn(e.rank||"")}</td>
              <td>${a(Gr(e.joined))}</td>
              <td>${a(Wr(e.purchased_tickets||0))}</td>
              <td class="associate-earliest-deposit-cell">${a(Xs(e))}</td>
              <td>${a(Zs(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Xs(t){const e=String((t==null?void 0:t.earliest_deposit_summary)||"").trim();if(e)return e;const r=String((t==null?void 0:t.earliest_deposit_date)||"").trim(),n=String((t==null?void 0:t.earliest_deposit_raffle_period)||"").trim();return[r,n].filter(Boolean).join(" | ")}function Zs(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function eo(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Earliest Deposit / Raffle","Discord Link"]];for(const e of bt){const r=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([r,e.account_name||"",e.rank||"",Gr(e.joined),Wr(e.purchased_tickets||0),Xs(e),Zs(e)])}return t.map(e=>e.map(Vr).join("	")).join(`
`)}async function xl(){const t=eo();if(await Hr(t)){h("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#associateTicketReportTsv");r&&(r.focus(),r.select()),h("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function ql(){kt=!0,Pe="",l(),Eo()}function En(){kt=!1,Pe="",l()}function Fl(){const t=Vt.length;return`
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

        ${Pe?`<div class="discord-data-error">${a(Pe)}</div>`:""}

        <div class="report-results-content">
          ${ye&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!ye&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?Pl(Vt):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${a(no())}</textarea>
      </div>
    </div>
  `}function Pl(t=Vt){return`
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
              <td data-label="Discord Member" class="discord-rank-audit-member-cell">${a(to(e))}</td>
              <td data-label="Discord Rank Role" class="discord-rank-audit-discord-cell">${a(e.discord_rank||"No matching rank role")}</td>
              <td data-label="Linked ESO Account(s)" class="discord-rank-audit-eso-account-cell">${a(e.eso_accounts||"No linked ESO account")}</td>
              <td data-label="ESO Rank" class="discord-rank-audit-eso-rank-cell">${a(e.eso_rank||"None")}</td>
              <td data-label="Issue" class="discord-rank-audit-issue-cell">${a(ro(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function to(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function ro(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function no(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of Vt)t.push([to(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",ro(e)]);return t.map(e=>e.map(Vr).join("	")).join(`
`)}async function Gl(){const t=no();if(await Hr(t)){h("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#discordRankAuditReportTsv");r&&(r.focus(),r.select()),h("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function Ul(){vt=!0,Ge="",St="",l(),Lo(),L.length===0&&!B&&Zt({silent:!0})}function Rn(){vt=!1,Ge="",St="",ke="",it="",ve="",l()}function Vl(){const t=Hn(),e=Fn.length;return`
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
            value="${u(St)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${ke===""?"selected":""}>All link statuses</option>
            <option value="linked" ${ke==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${ke==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${ke==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${Ge?`<div class="discord-data-error discord-last-seen-report-error">${a(Ge)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${be&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!be&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?Hl(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${a(so(t))}</textarea>
      </div>
    </div>
  `}function Hl(t=[]){return`
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
            <tr class="discord-last-seen-row ${u(Jl(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${u(je(e).status)}" data-discord-last-seen-search="${u(io(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${Yl(e)}
                  <span>${a(ft(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${zl(e)}</td>
              <td>${a(Wn(e.last_seen))}</td>
              <td>${a(zn(e.last_seen))}</td>
              <td>${a(Dr(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function Nt(t,e){const r=it===t,n=r?ve==="asc"?"\u25B2":"\u25BC":"\u2195",i=r?`${e}: ${ve==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${r?" active":""}" type="button" data-discord-last-seen-sort="${u(t)}" title="${u(i)}">
      <span>${a(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${a(n)}</span>
    </button>
  `}function Hn(){const t=[...Fn],e=it,r=ve;if(!e||!r)return t;const n=r==="desc"?-1:1;return t.sort((i,s)=>{var o,c;if(e==="date"){const f=Number(i.last_seen||0)||0,m=Number(s.last_seen||0)||0;return(f-m)*n}if(e==="days")return(Ki(i.last_seen)-Ki(s.last_seen))*n;if(e==="action")return Dr(i.last_seen_action).localeCompare(Dr(s.last_seen_action),void 0,{sensitivity:"base"})*n;if(e==="eso"){const f=je(i),m=je(s),S={linked:0,candidate:1,unlinked:2},g=((o=S[f.status])!=null?o:9)-((c=S[m.status])!=null?c:9);return g!==0?g*n:f.esoAccountName.localeCompare(m.esoAccountName,void 0,{sensitivity:"base"})*n}return ft(i).localeCompare(ft(s),void 0,{sensitivity:"base"})*n})}function Wl(t){it!==t?(it=t,ve="asc"):ve==="asc"?ve="desc":(it="",ve=""),l()}function ft(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function io(t){return[ft(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,jl(t),Wn(t==null?void 0:t.last_seen),zn(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function je(t){const e=hd(t==null?void 0:t.discord_id),r=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),n=String((e==null?void 0:e.eso_account_name)||"").trim();return r==="linked"&&n?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:n,title:`Linked ESO account: ${n}`}:(r==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&n?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:n,title:`Fuzzy ESO account candidate: ${n}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function zl(t){const e=je(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${u(e.className)}"
      title="${u(e.title)}"
      aria-label="${u(e.label)}"
      role="img"
    ></span>
  `}function jl(t){const e=je(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function Kl(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!r)return"";if(/^https?:\/\//i.test(e))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function Yl(t){const e=ft(t),r=e?e.slice(0,2).toUpperCase():"?",n=Kl(t);return n?`<span class="discord-member-avatar"><img src="${u(n)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${a(r)}</span>`}function Wn(t){const e=Number(t);if(!e)return"Never";const r=new Date(e*1e3);if(Number.isNaN(r.getTime()))return String(t||"");const n=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(r).reduce((i,s)=>(i[s.type]=s.value,i),{});return`${n.month}/${n.day}/${n.year} ${n.hour}:${n.minute} ${n.dayPeriod}`}function Jl(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const r=(Date.now()-e*1e3)/864e5;return r>30?"discord-last-seen-red":r>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function zn(t){const e=Number(t);if(!e)return"Never";const r=Date.now()-e*1e3;if(!Number.isFinite(r))return"";if(r<0)return"0 days";const n=Math.floor(r/864e5);return`${n} day${n===1?"":"s"}`}function Ki(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const r=Date.now()-e*1e3;return Number.isFinite(r)?r<0?0:Math.floor(r/864e5):Number.POSITIVE_INFINITY}function Dr(t){return String(t||"").trim()||"None tracked"}function so(t=Hn()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const r of t){const n=je(r);e.push([ft(r),n.label||"",n.esoAccountName||"",Wn(r==null?void 0:r.last_seen),zn(r==null?void 0:r.last_seen),Dr(r==null?void 0:r.last_seen_action),(r==null?void 0:r.username)||"",(r==null?void 0:r.discord_id)||""])}return e.map(r=>r.map(Vr).join("	")).join(`
`)}async function Ql(){const t=Hn().filter(i=>{const s=te(St),o=String(ke||"").trim().toLowerCase(),c=!s||te(io(i)).includes(s),f=!o||je(i).status===o;return c&&f}),e=so(t);if(await Hr(e)){h("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#discordLastSeenReportTsv");n&&(n.focus(),n.select()),h("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function Xl(){Ke=!0,I="",l(),L.length===0&&!B&&Zt({silent:!0})}function Dn(){Ke=!1,qr="",Oe="",Kt="",Yt="",ae=-1,l()}function oo(t){return[...new Set((Array.isArray(L)?L:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function ao(t,e){return t.map(r=>`<option value="${u(r)}" ${e===r?"selected":""}>${a(r)}</option>`).join("")}function Zl(){return ao(oo("link_status"),Kt)}function ed(){return ao(oo("link_method"),Yt)}function td(){return`
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
            value="${u(qr)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${Kt===""?"selected":""}>All statuses</option>
            ${Zl()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${Yt===""?"selected":""}>All methods</option>
            ${ed()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${Oe===""?"selected":""}>All actions</option>
            <option value="needs-link" ${Oe==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${Oe==="can-unlink"?"selected":""}>Unlink Available</option>
            <option value="can-unblock" ${Oe==="can-unblock"?"selected":""}>Unblock Available</option>
          </select>
        </div>

        ${I?`<div class="discord-data-error member-links-report-error">${a(I)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${sd()}
        </div>
      </div>
    </div>
  `}function co(){var r,n,i,s,o,c;if(!Ke)return;(r=document.querySelector("#closeMemberLinksReportButton"))==null||r.addEventListener("click",Dn),(n=document.querySelector("#refreshMemberLinksButton"))==null||n.addEventListener("click",()=>Zt()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>ud());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",od),t.addEventListener("keydown",dd)),(s=document.querySelector("#memberLinksReportActionFilter"))==null||s.addEventListener("change",ad),(o=document.querySelector("#memberLinksReportStatusFilter"))==null||o.addEventListener("change",cd),(c=document.querySelector("#memberLinksReportMethodFilter"))==null||c.addEventListener("change",ld),Xt(),document.querySelectorAll("[data-accept-member-candidate]").forEach(f=>{f.addEventListener("click",()=>uo(f.dataset.acceptMemberCandidate||"",f.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(f=>{f.addEventListener("click",()=>fd(f.dataset.unlinkMemberLink||"",f.dataset.unlinkMemberLinkDiscordId||""))}),document.querySelectorAll("[data-unblock-member-auto-link]").forEach(f=>{f.addEventListener("click",()=>fo(f.dataset.unblockMemberAutoLink||"",f.dataset.unblockMemberAutoLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",f=>{f.target===e&&Dn()})}function Yi(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function Ji(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function rd(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function nd(t){return[...Array.isArray(t)?t:[]].sort((e,r)=>{const n=Yi(e)-Yi(r);if(n!==0)return n;const i=Ji(e).localeCompare(Ji(r),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((r==null?void 0:r.discord_user_id)||""),void 0,{sensitivity:"base"})})}function id(t){const e=$n(t);let r="";e==="Username"?r=(t==null?void 0:t.discord_username)||"":e==="Global Name"?r=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(r=(t==null?void 0:t.discord_server_nickname)||""),r||(r=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const n=e?` <span class="member-link-report-match-field">(${a(e)})</span>`:"";return`<span class="member-link-report-discord-name">${a(r)}</span>${n}`}function sd(){return B&&L.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(L)||L.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${nd(L).map(e=>{var s;const r=String(e.link_status||"").trim().toLowerCase(),n=String(e.link_method||"").trim().toLowerCase(),i=id(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${u(rd(e))}"
                data-member-links-report-status="${u(r)}"
                data-member-links-report-method="${u(n)}"
                data-member-links-report-action="${u(Number(e.locked||0)===1||r==="blocked"?"can-unblock":r==="linked"?"can-unlink":r==="candidate"?"needs-link":"")}"
              >
                <td>${a(e.eso_account_name||"")}</td>
                <td>${i}</td>
                <td class="member-links-status-col">${a(Number(e.locked||0)===1||r==="blocked"?"blocked":r||"")}</td>
                <td class="member-links-method-col">${a(n||"")}${Number(e.locked||0)===1?" \u{1F512}":""}</td>
                <td class="member-links-action-col">
                  <div class="member-link-actions">
                    ${r==="candidate"?`<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${u(e.eso_account_name||"")}" data-accept-member-candidate-discord-id="${u(e.discord_user_id||"")}" aria-label="Accept candidate link" title="Accept candidate link">\u2713</button>`:""}
                    ${r==="linked"?`<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${u(e.eso_account_name||"")}" data-unlink-member-link-discord-id="${u(e.discord_user_id||"")}" aria-label="Unlink this ESO/Discord pair" title="Unlink this ESO/Discord pair">\u{1F5D1}</button>`:""}
                    ${Number(e.locked||0)===1||r==="blocked"?`<button class="member-link-report-action member-link-report-unblock" type="button" data-unblock-member-auto-link="${u(e.eso_account_name||"")}" data-unblock-member-auto-link-discord-id="${u(e.discord_user_id||"")}" aria-label="Remove auto-link block" title="Remove auto-link block">\u21BA</button>`:""}
                  </div>
                </td>
                <td class="member-links-confidence-col">${a(String((s=e.match_confidence)!=null?s:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function lo(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function Qi(t){const e=lo();if(e.forEach(n=>n.classList.remove("member-links-report-row-active")),e.length===0){ae=-1;return}ae=Math.max(0,Math.min(t,e.length-1));const r=e[ae];r.classList.add("member-links-report-row-active"),r.scrollIntoView({block:"nearest"})}function Xt(){const t=te(qr),e=String(Oe||"").trim().toLowerCase(),r=String(Kt||"").trim().toLowerCase(),n=String(Yt||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let s=0;i.forEach(c=>{const f=te(c.dataset.memberLinksReportSearch||""),m=String(c.dataset.memberLinksReportAction||"").trim().toLowerCase(),S=String(c.dataset.memberLinksReportStatus||"").trim().toLowerCase(),g=String(c.dataset.memberLinksReportMethod||"").trim().toLowerCase(),Je=(!t||f.includes(t))&&(!e||m===e)&&(!r||S===r)&&(!n||g===n);c.hidden=!Je,c.classList.remove("member-links-report-row-active"),Je&&(s+=1)});const o=document.querySelector("#memberLinksReportSearchEmpty");o&&(o.hidden=s!==0),ae=-1}function od(t){qr=t.target.value||"",Xt()}function ad(t){Oe=t.target.value||"",Xt()}function cd(t){Kt=t.target.value||"",Xt()}function ld(t){Yt=t.target.value||"",Xt()}function dd(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=lo();if(e.length===0)return;if(t.key==="ArrowDown"){const n=ae<0?0:ae+1;Qi(n>=e.length?e.length-1:n);return}const r=ae<0?e.length-1:ae-1;Qi(r<0?0:r)}async function Zt(t={}){if(!(d!=null&&d.connected)){I="You must be connected to load member links.",l();return}B=!0,I="",t.silent||l();try{const e=await A("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");L=Array.isArray(e.links)?e.links:[]}catch(e){I=k(e)}finally{B=!1,l()}}async function ud(){if(!(d!=null&&d.connected)||!b.logged_in){I="You must be logged in and connected to run auto-linking.",l();return}B=!0,I="",l();try{const t=await A("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");L=Array.isArray(t.links)?t.links:[],h("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:p})}catch(t){I=k(t)}finally{B=!1,l()}}async function uo(t,e=""){try{const r=await A("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to accept candidate.");L=Array.isArray(r.links)?r.links:L,h("member-link-accepted",r.message||"Candidate accepted as a link.",{ttlMs:p})}catch(r){I=k(r),h("member-link-accept-error",I,{ttlMs:p})}}async function fo(t,e=""){if(!await Un({title:"Remove Auto-Link Block?",message:`Remove the blocked auto-match record between ${t} and this Discord account? Auto-linking will run immediately and this screen will refresh to show whether the pair linked again.`,confirmLabel:"Unblock",cancelLabel:"Cancel",confirmClass:"danger"}))return!1;B=!0,I="",l();try{const n=await A("guildsync:unblock-member-auto-link",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to remove auto-link block.");L=Array.isArray(n.links)?n.links:L;const i=fe(t),s=String(e||"").trim(),o=n.refreshedPair||L.find(m=>fe(m.eso_account_name)===i&&String(m.discord_user_id||"").trim()===s),c=String((o==null?void 0:o.link_status)||"").trim().toLowerCase(),f=c==="linked"?" It linked again automatically.":c==="candidate"?" It is now showing as a candidate.":" No automatic link was recreated.";return h("member-link-unblocked",`${n.message||"Auto-link block removed."}${f}`,{ttlMs:p}),!0}catch(n){return I=k(n),h("member-link-unblock-error",I,{ttlMs:p}),!1}finally{B=!1,l()}}async function fd(t,e=""){if(!!await Un({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const n=await A("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to unlink member.");L=Array.isArray(n.links)?n.links:L,h("member-link-unlinked",n.message||"Member link removed.",{ttlMs:p})}catch(n){I=k(n)}l()}}function fe(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function Fr(t){const e=fe(t);return e?L.filter(r=>fe(r.eso_account_name)===e):[]}function Pr(t){const e=String(t||"").trim();return e?L.filter(r=>String(r.discord_user_id||"").trim()===e):[]}function ho(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const r=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(r.length>0){const i=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const s=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return s||r[0]}const n=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return n||e[0]}function hd(t){return ho(Pr(t))}function pd(t){return`${fe(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function jn(){return w?w.mode==="discord-to-eso"?Pr(w.discordUserId):Fr(w.esoAccountName):[]}function md(t){const e=String(t||"").trim(),r=F.find(n=>String(n.discord_id||"").trim()===e);return r&&(r.server_nickname||r.global_name||r.username||r.discord_id)||e}function po(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?Pr(t.discordUserId):Fr(t.esoAccountName),n=ho(r),i=String((n==null?void 0:n.link_status)||"").trim().toLowerCase(),s=r.filter(c=>String(c.link_status||"").trim().toLowerCase()==="linked").length,o=r.filter(c=>String(c.link_status||"").trim().toLowerCase()==="candidate").length;return s>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?s===1?n.eso_account_name:`${s} ESO accounts`:s===1?n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member":`${s} Discord accounts`}`}:i==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?n.eso_account_name:n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member"}`}:i==="blocked"||Number((n==null?void 0:n.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function mo(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,n=po(t);return`
    <button
      class="member-link-status-dot member-link-status-${u(n.className)}"
      type="button"
      title="${u(n.title)}"
      aria-label="${u(n.label)}"
      data-open-member-link-dialog="${u(e)}"
      data-member-link-value="${u(r||"")}"
    ></button>
  `}function gd(){return w?w.mode==="discord-to-eso"?md(w.discordUserId):w.esoAccountName||"":""}function go(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function $n(t){const e=go((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const r=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(r.includes("discord_username")||r.includes("username"))return"Username";if(r.includes("discord_display_name")||r.includes("global")||r.includes("display"))return"Global Name";if(r.includes("discord_server_nickname")||r.includes("server")||r.includes("nickname"))return"Server Nickname";const n=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(n==="exact"||n==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",s=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const c of s){const f=yd(i,c.value);(!o||f>o.score)&&(o={...c,score:f})}if(o&&o.score>0)return o.field}return""}function te(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function yd(t,e){const r=te(t),n=te(e);if(!r||!n)return 0;if(r===n)return 100;if((r.includes(n)||n.includes(r))&&Math.min(r.length,n.length)>=4)return 88;const i=Math.abs(r.length-n.length),s=[...r].findIndex((c,f)=>c!==n[f]),o=s===-1?Math.min(r.length,n.length):s;return Math.max(0,Math.min(75,Math.round(o*10-i*3)))}function bd(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function kd(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function vd(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),r=bd(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${a(r)}</span>`}function Sd(t){var c;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",r=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",n=String(t.link_status||"").trim().toLowerCase(),o=n==="linked"?`<button
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
        >\u2713</button>`:Number(t.locked||0)===1||n==="blocked"?`<button
            class="member-link-approve-button member-link-unblock-button"
            type="button"
            aria-label="Remove auto-link block"
            title="Remove auto-link block"
            data-unblock-dialog-member-auto-link
            data-unblock-eso-account="${u(t.eso_account_name||"")}"
            data-unblock-discord-user-id="${u(t.discord_user_id||"")}"
          >\u21BA</button>`:"";return`
    <div class="member-link-current-card">
      <div class="member-link-current-details">
        <div><span>ESO:</span> ${a(t.eso_account_name||"")}</div>
        <div><span>Discord:</span> ${a(e)}</div>
        <div><span>Status:</span> ${vd(t)} \xB7 ${a(kd(t.link_method))} \xB7 ${a(String((c=t.match_confidence)!=null?c:""))}% \xB7 ${a(r)}</div>
        ${$n(t)?`<div><span>Matched:</span> Matched on ${a($n(t))}</div>`:""}
      </div>
      ${o}
    </div>
  `}function wd(){const t=jn();return t.length?[...t].sort((r,n)=>{var f,m;const i=String(r.link_status||"").trim().toLowerCase(),s=String(n.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},c=((f=o[i])!=null?f:9)-((m=o[s])!=null?m:9);return c!==0?c:Number(n.match_confidence||0)-Number(r.match_confidence||0)}).map(r=>Sd(r)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function _d(){if(dt)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(ue)return`<div class="discord-data-error">${a(ue)}</div>`;if(!Array.isArray(Ue)||Ue.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(jn().map(r=>pd(r))),e=[...Ue].filter(r=>{const n=(w==null?void 0:w.mode)==="discord-to-eso"?`${fe(r.account_name)}::${String(w.discordUserId||"").trim()}`:`${fe(w==null?void 0:w.esoAccountName)}::${String(r.discord_id||"").trim()}`;return!t.has(n)}).sort((r,n)=>{const i=Number(n.confidence||0)-Number(r.confidence||0);return i!==0?i:Xi(r).localeCompare(Xi(n),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(r=>Ad(r)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function Xi(t){return((w==null?void 0:w.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function Ad(t,e={}){var g,y,q;const r=(w==null?void 0:w.mode)||"",n=r==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=go(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),s=r==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[s,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),c=r==="discord-to-eso"?t.account_name:t.discord_id,f=e.disabled===!0,m=[n,s,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),S=[n,o,`${(g=t.confidence)!=null?g:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${u(c||"")}" data-member-link-option-search="${u(m)}" title="${u(S)}" ${f?"disabled":""}>
      <span class="member-link-option-name" title="${u(n||"")}">${a(n||"")}</span>
      <span class="member-link-option-subtitle" title="${u(o||"")}">${a(o||"")}</span>
      <span class="member-link-option-confidence" title="${u(String((y=t.confidence)!=null?y:0))}%">${a(String((q=t.confidence)!=null?q:0))}%</span>
    </button>
  `}function Ld(){const t=(w==null?void 0:w.mode)||"",e=gd(),r=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
            ${wd()}
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
              value="${u(Jt)}"
            />
            ${_d()}
          </section>
        </div>

      </div>
    </div>
  `}async function yo(t,e){if(!(d!=null&&d.connected)||!_()){h("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:p});return}Ce=!0,w=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},Ue=[],dt=!0,ue="",Jt="",Q=-1,l();try{if(!Array.isArray(L)||L.length===0){const i=await A("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(L=Array.isArray(i.links)?i.links:[])}const n=await A("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load link suggestions.");Ue=Array.isArray(n.options)?n.options:[]}catch(r){ue=k(r)}finally{dt=!1,l()}}function ht(){document.removeEventListener("keydown",Mn),Ce=!1,w=null,Ue=[],dt=!1,ue="",Jt="",Q=-1,l()}function bo(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function Zi(t){const e=bo();if(e.forEach(n=>n.classList.remove("member-link-option-row-active")),e.length===0){Q=-1;return}Q=Math.max(0,Math.min(t,e.length-1));const r=e[Q];r.classList.add("member-link-option-row-active"),r.scrollIntoView({block:"nearest"})}function ko(){const t=te(Jt),e=[...document.querySelectorAll(".member-link-option-row")];let r=0;e.forEach(i=>{const s=te(i.dataset.memberLinkOptionSearch||i.textContent||""),o=!t||s.includes(t);i.hidden=!o,i.classList.remove("member-link-option-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinkSuggestionSearchEmpty");n&&(n.hidden=r!==0),Q=-1}function Ed(t){Jt=t.target.value||"",ko()}function Rd(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=bo();if(e.length===0)return;if(t.key==="ArrowDown"){const n=Q<0?0:Q+1;Zi(n>=e.length?e.length-1:n);return}const r=Q<0?e.length-1:Q-1;Zi(r<0?0:r)}function Mn(t){!Ce||t.key==="Escape"&&(t.preventDefault(),ht())}async function Dd(t){if(!(!w||!t))try{const e=w.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:w.discordUserId}:{esoAccountName:w.esoAccountName,discordUserId:t},r=await A("guildsync:manual-link-member",e,3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to link members.");L=Array.isArray(r.links)?r.links:L,h("member-link-saved",r.message||"Member link saved.",{ttlMs:p}),ht()}catch(e){ue=k(e),l()}}async function $d(t,e=""){await uo(t,e),ht()}async function vo(){if(!!w){dt=!0,ue="",l();try{const t=w.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:w.discordUserId}:{mode:"eso-to-discord",accountName:w.esoAccountName},e=await A("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");Ue=Array.isArray(e.options)?e.options:[]}catch(t){ue=k(t)}finally{dt=!1,l()}}}async function Md(t="",e=""){const r=jn().find(i=>fe(i.eso_account_name)===fe(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!r||!await Un({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await A("guildsync:manual-unlink-member",{esoAccountName:r.eso_account_name,discordUserId:r.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");L=Array.isArray(i.links)?i.links:L,h("member-link-unlinked",i.message||"Member link removed.",{ttlMs:p}),await vo()}catch(i){ue=k(i),l()}}async function Td(t="",e=""){await fo(t,e)&&await vo()}function So(){var r;if(!Ce)return;document.removeEventListener("keydown",Mn),document.addEventListener("keydown",Mn),(r=document.querySelector("#closeMemberLinkDialogButton"))==null||r.addEventListener("click",ht);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",Ed),t.addEventListener("keydown",Rd),ko()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(n=>{n.addEventListener("click",()=>Md(n.dataset.unlinkEsoAccount||"",n.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-unblock-dialog-member-auto-link]").forEach(n=>{n.addEventListener("click",()=>Td(n.dataset.unblockEsoAccount||"",n.dataset.unblockDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(n=>{n.addEventListener("click",()=>Dd(n.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(n=>{n.addEventListener("click",()=>$d(n.dataset.acceptDialogMemberCandidate||"",n.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",n=>{n.target===e&&ht()})}function wo(){var e,r,n;if(!yt)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",Ln),(r=document.querySelector("#rerunAssociateTicketReportButton"))==null||r.addEventListener("click",()=>Ro()),(n=document.querySelector("#copyAssociateTicketReportGridButton"))==null||n.addEventListener("click",()=>xl());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Ln()})}function _o(){var e,r,n;if(!kt)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",En),(r=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||r.addEventListener("click",()=>Eo()),(n=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||n.addEventListener("click",()=>Gl());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&En()})}function Ao(){var n,i,s;if(!vt)return;(n=document.querySelector("#closeDiscordLastSeenReportButton"))==null||n.addEventListener("click",Rn),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>Lo()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>Ql()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(o=>{o.addEventListener("click",()=>Wl(o.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",Nd);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",Cd),Kn();const r=document.querySelector(".discord-last-seen-report-overlay");r&&r.addEventListener("click",o=>{o.target===r&&Rn()})}function Nd(t){St=t.target.value||"",Kn()}function Cd(t){ke=t.target.value||"",Kn()}function Kn(){const t=te(St),e=String(ke||"").trim().toLowerCase(),r=[...document.querySelectorAll("[data-discord-last-seen-row]")];let n=0;r.forEach(s=>{const o=te(s.dataset.discordLastSeenSearch||s.textContent||""),c=String(s.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),S=(!t||o.includes(t))&&(!e||c===e);s.hidden=!S,S&&(n+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=n!==0)}async function Lo(){if(!(d!=null&&d.connected)||!_()){Ge="You must be logged in and connected to run this report.",l();return}be=!0,Ge="",l();try{const t=await A("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");F=ii(t.members),Or=si(t.roles),Fn=[...F]}catch(t){Ge=k(t)}finally{be=!1,l(),O("discordLastSeenReportSearchInput")}}async function Eo(){if(!(d!=null&&d.connected)||!_()){Pe="You must be logged in and connected to run this report.",l();return}ye=!0,Pe="",l();try{const t=await A("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Vt=Array.isArray(t.rows)?t.rows:[]}catch(t){Pe=k(t)}finally{ye=!1,l()}}async function Ro(){if(!(d!=null&&d.connected)||!_()){Fe="You must be logged in and connected to run this report.",l();return}ge=!0,Fe="",l();try{const t=await A("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");bt=Array.isArray(t.rows)?t.rows:[]}catch(t){Fe=k(t)}finally{ge=!1,l()}}function st(){const t=String(At||"").trim().toLowerCase(),e={account_name:"Anonymous",rank:"Manual Entry"},r=new Set(["anonymous"]),n=Y.filter(i=>String(i.account_name||"").trim()).filter(i=>{const o=String(i.account_name||"").trim().toLowerCase();return!o||r.has(o)||t&&!o.includes(t)?!1:(r.add(o),!0)}).slice().sort((i,s)=>{const o=String(i.account_name||"").toLowerCase(),c=String(s.account_name||"").toLowerCase(),f=t&&o.startsWith(t)?0:1,m=t&&c.startsWith(t)?0:1;return f!==m?f-m:o.localeCompare(c)}).slice(0,19);return[e,...n]}function Do(t=st()){const e=String(E.accountName||"").trim();return t.length===0?'<div class="roster-history-muted manual-ticket-no-matches">No matching guild members found.</div>':t.map((r,n)=>`
        <button class="roster-history-match${n===C||r.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${u(r.account_name)}" role="option" aria-selected="${n===C||r.account_name===e?"true":"false"}">
          <span>${a(r.account_name)}</span>
          <strong>${a(r.rank||"")}</strong>
          ${n===C?"<small>Enter</small>":""}
        </button>
      `).join("")}function $o(){document.querySelectorAll("[data-manual-ticket-account]").forEach(t=>{t.addEventListener("mousedown",e=>{e.preventDefault()}),t.addEventListener("click",()=>{Mo(t.dataset.manualTicketAccount||"")})})}function ln(){const t=document.querySelector("#manualTicketMatchList");if(!t)return;const e=st();C>=e.length&&(C=e.length>0?e.length-1:-1),t.innerHTML=Do(e),$o()}function Mo(t){const e=String(t||"").trim();E.accountName=e,At=e,K=!1,C=-1,G="",l()}function O(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const r=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(r,r)},0)}function Bd(){const t=K?st():[],e=String(E.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Entry</h3>
            <p>Add a manual banking or raffle entry such as FFTG, officer corrections, or anonymous gold.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${G?`<div class="discord-data-error">${a(G)}</div>`:""}

        <div class="manual-ticket-form">
          <div class="manual-ticket-member-picker">
            <label class="manual-ticket-member-field" for="manualTicketAccountSearchInput">
              <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(At)}" autocomplete="off" />
            </label>

            ${K?`
              <div id="manualTicketMatchList" class="roster-history-match-list manual-ticket-match-list" role="listbox" aria-label="Matching guild members">
                ${Do(t)}
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
                <input id="manualTicketGoldInput" class="discord-search-input manual-ticket-gold-input" type="number" min="0" step="1" inputmode="numeric" placeholder="Gold Value" value="${u(E.goldValue)}" />
                <span class="manual-ticket-gold-coin" aria-hidden="true"></span>
              </label>
              <label class="manual-ticket-count-field">
                <div class="manual-ticket-number-wrap">
                  <input id="manualTicketCountInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${u(E.tickets)}" />
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
  `}function To(){var s,o,c,f,m,S;if(!de)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{de=!1,l()});const t=document.querySelector("#manualTicketAccountSearchInput");if(t){const g=({rerender:y=!1}={})=>{if(K=!0,C=st().length>0?0:-1,y){l(),O("manualTicketAccountSearchInput");return}ln()};t.addEventListener("focus",()=>{K||g({rerender:!0})}),t.addEventListener("click",()=>{K||g({rerender:!0})}),t.addEventListener("input",y=>{At=y.target.value||"",E.accountName="",K=!0,C=st().length>0?0:-1,ln()}),t.addEventListener("keydown",y=>{if(y.key==="Escape")return;if(!K){(y.key==="ArrowDown"||y.key==="ArrowUp")&&(y.preventDefault(),g({rerender:!0}));return}const q=st();if(y.key==="ArrowDown"||y.key==="ArrowUp"){if(q.length===0)return;y.preventDefault();const Rt=y.key==="ArrowDown"?1:-1;C=((C<0?0:C)+Rt+q.length)%q.length,ln();return}if(y.key!=="Enter")return;y.preventDefault();const he=q[C>=0?C:0];he!=null&&he.account_name&&Mo(he.account_name)})}$o(),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",g=>{E.note=g.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(g=>{g.addEventListener("click",()=>{const y=String(g.dataset.manualTicketType||"").trim().toLowerCase();E.ticketType=y==="monthly"?"monthly":"biweekly",l()})}),(c=document.querySelector("[data-manual-ticket-toggle]"))==null||c.addEventListener("click",()=>{E.ticketType=E.ticketType==="monthly"?"biweekly":"monthly",l()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",g=>{const y=String(g.target.value||"").replace(/\D/g,"");g.target.value!==y&&(g.target.value=y),E.goldValue=y});const r=document.querySelector("#manualTicketCountInput");r==null||r.addEventListener("input",g=>{const y=String(g.target.value||"").replace(/\D/g,"");g.target.value!==y&&(g.target.value=y),E.tickets=y});const n=g=>{const y=Number(E.tickets)||0,q=Math.max(0,y+g);E.tickets=String(q),r&&(r.value=E.tickets,r.focus())};(f=document.querySelector("#manualTicketCountUpButton"))==null||f.addEventListener("click",()=>n(1)),(m=document.querySelector("#manualTicketCountDownButton"))==null||m.addEventListener("click",()=>n(-1)),(S=document.querySelector("#saveManualBiweeklyTicketButton"))==null||S.addEventListener("click",()=>Id());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",g=>{g.target===i&&(de=!1,l())})}async function Id(){const t=String(E.accountName||"").trim(),e=String(E.note||"").trim(),r=String(E.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",n=Number(String(E.goldValue||"").trim()||0),i=Number(String(E.tickets||"").trim()||0);if(K){G="Select a matching guild member or Anonymous from the list before saving.",l(),O("manualTicketAccountSearchInput");return}if(!t){G="Select a matching guild member or Anonymous from the list before saving.",l(),O("manualTicketAccountSearchInput");return}if(!Number.isFinite(n)||n<0){G="Gold value must be zero or greater.",l();return}if(!Number.isFinite(i)||i<0){G="Tickets must be zero or greater.",l();return}const s=t.toLowerCase()==="anonymous";if(s&&Math.floor(i)>0){G="Anonymous cannot be awarded tickets. Use 0 tickets and enter a gold value.",l();return}if(Math.floor(n)===0&&Math.floor(i)===0){G=s?"Enter a gold value for Anonymous when tickets are 0.":"Enter gold or tickets. Both cannot be zero.",l();return}Ar=!0,G="",l();try{const o=await A("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:r,gold_value:Math.floor(n),tickets:Math.floor(i)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Failed to add manual entry.");de=!1,E={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},At="",C=-1,K=!1,await re({silent:!0}),h("manual-ticket-added",o.message||"Manual entry added.",{ttlMs:p})}catch(o){G=k(o)}finally{Ar=!1,l()}}function No(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>Lt());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{at=!0,ce="",l()});const r=document.querySelector("#rosterMemberSearch");r&&(r.addEventListener("input",o=>{_r=o.target.value||"",vn=o.target.selectionStart,Sn=o.target.selectionEnd,M=-1,l({restoreRosterSearchFocus:!0})}),r.addEventListener("keydown",Od)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{pl(o.dataset.rosterSortColumn||"account_name")})});const n=document.querySelector("#rosterRankFilter");n&&n.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(qe.add(c),M=-1,l())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRosterRankFilter||"";qe.delete(c),M=-1,l()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(nt.add(c),M=-1,l())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRosterLinkStatusFilter||"";nt.delete(c),M=-1,l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>yo(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{_r="",qe.clear(),nt.clear(),oe="",x="",M=-1,l()}),xd()}function Od(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){M=-1;return}t.preventDefault(),t.key==="ArrowDown"?M=M<0?0:Math.min(M+1,e.length-1):t.key==="ArrowUp"&&(M=M<0?e.length-1:Math.max(M-1,0)),e.forEach((n,i)=>{n.classList.toggle("roster-search-active-row",i===M)});const r=e[M];r&&typeof r.scrollIntoView=="function"&&r.scrollIntoView({block:"nearest",inline:"nearest"})}function xd(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{at=!1,l()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",r=>{if(Ut=r.target.value||"",z=-1,!Ut.trim()){clearTimeout(an),ce="",V=[],Me="",_e=[],Ae=!1,l(),O("rosterHistorySearchInput");return}clearTimeout(an),an=setTimeout(()=>{Gd({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(V.length===0)return;r.preventDefault();const i=r.key==="ArrowDown"?1:-1;z=((z<0?0:z)+i+V.length)%V.length,l(),O("rosterHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=V[z>=0?z:0];n!=null&&n.account_name&&ts(n.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(r=>{r.addEventListener("click",()=>{ts(r.dataset.rosterHistoryAccount||"")})})}function Co(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{ct=!1,l()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",r=>{me=r.target.value||"",j=-1,Be+=1;const n=Be;if(clearTimeout(Vi),!me.trim()){le="",H=[],lt="",ze="",Le=[],Ee=!1,l(),O("discordHistorySearchInput");return}Vi=setTimeout(()=>{qd({auto:!0,keepFocus:!0,generation:n})},zc)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(H.length===0)return;r.preventDefault();const i=r.key==="ArrowDown"?1:-1;j=((j<0?0:j)+i+H.length)%H.length,l(),O("discordHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=H[j>=0?j:0];n!=null&&n.discord_id&&es(n.discord_id,An(n))})),document.querySelectorAll("[data-discord-history-id]").forEach(r=>{r.addEventListener("click",()=>{es(r.dataset.discordHistoryId||"",r.dataset.discordHistoryName||"")})})}async function qd(t={}){const e=Number.isInteger(t.generation)?t.generation:++Be,r=me.trim();if(e===Be){if(!r){le="",H=[],j=-1,lt="",ze="",Le=[],Ee=!1,l(),t.keepFocus&&O("discordHistorySearchInput");return}Ee=!0,le="",H=[],j=-1,lt="",ze="",Le=[],l(),t.keepFocus&&O("discordHistorySearchInput");try{const n=await A("guildsync:request-discord-member-history",{query:r},3e4);if(e!==Be||r!==me.trim())return;if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search Discord member history.");H=Fd(n.matches),j=H.length>0?0:-1}catch(n){if(e!==Be||r!==me.trim())return;le=k(n)}finally{if(e!==Be||r!==me.trim())return;Ee=!1,l(),t.keepFocus&&O("discordHistorySearchInput")}}}async function es(t,e="",r={}){const n=String(t||"").trim();if(!!n){lt=n,ze=String(e||n).trim(),me=ze,Le=[],Ee=!0,le="",l();try{const i=await A("guildsync:request-discord-member-history-events",{discord_id:n},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");Le=Pd(i.events)}catch(i){le=k(i)}finally{Ee=!1,r.keepLoading||l()}}}function Fd(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function Pd(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n,i,s,o,c,f,m,S,g,y;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((n=(r=e.old_value)!=null?r:e.oldValue)!=null?n:"").trim(),new_value:String((s=(i=e.new_value)!=null?i:e.newValue)!=null?s:"").trim(),event_timestamp:(f=(c=(o=e.event_timestamp)!=null?o:e.eventTimestamp)!=null?c:e.timestamp)!=null?f:"",event_datetime:(S=(m=e.event_datetime)!=null?m:e.eventDatetime)!=null?S:"",initiator:String((y=(g=e.initiator)!=null?g:e.initiatorName)!=null?y:"").trim(),source:String(e.source||"").trim()}}):[]}async function Gd(t={}){const e=Ut.trim();if(!e){ce="",V=[],z=-1,Me="",_e=[],Ae=!1,l(),t.keepFocus&&O("rosterHistorySearchInput");return}Ae=!0,ce="",V=[],z=-1,Me="",_e=[],l(),t.keepFocus&&O("rosterHistorySearchInput");try{const r=await A("guildsync:request-roster-rank-history",{query:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search roster rank history.");V=Ud(r.matches),z=V.length>0?0:-1}catch(r){ce=k(r)}finally{Ae=!1,l(),t.keepFocus&&O("rosterHistorySearchInput")}}async function ts(t,e={}){const r=String(t||"").trim();if(!!r){Me=r,Ut=r,_e=[],Ae=!0,ce="",l();try{const n=await A("guildsync:request-roster-stream-history",{account_name:r},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster stream history.");_e=Vd(n.events)}catch(n){ce=k(n)}finally{Ae=!1,e.keepLoading||l()}}}function Ud(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function Vd(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(n=(r=e.timestamp)!=null?r:e.timestampS)!=null?n:"",officer:String(e.officer||"").trim()}}):[]}function Bo(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(r=e.joined)!=null?r:""}}).sort((e,r)=>e.account_name.localeCompare(r.account_name)):[]}function Hd(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function Gr(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function Yn(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function Wd(t={}){Y=Bo(t.members),wr=t.last_refresh||new Date().toISOString(),R==="eso-members"&&l(),h("roster-data-updated",`Roster data updated. Loaded ${Y.length} member record${Y.length===1?"":"s"}.`,{ttlMs:p})}async function Lt(t={}){if(!!(d!=null&&d.connected)){$e=!0,l();try{const e=await A("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");Y=Bo(e.members),wr=e.last_refresh||wr,t.silent||h("roster-data-loaded",`Loaded ${Y.length} roster member${Y.length===1?"":"s"}.`,{ttlMs:p})}catch(e){h("roster-data-error",k(e),{ttlMs:p})}finally{$e=!1,l()}}}async function zd(t={}){var e;if(!!_()){if(!(d!=null&&d.connected)){h("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}$e=!0,l();try{const r=await Mc(t);if(!(r!=null&&r.ok)){h("roster-data-pending",(r==null?void 0:r.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:p});return}const n={local_upload_id:Io(),authenticated_username:J(),authenticated_discord_user_id:((e=b==null?void 0:b.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await xo(n)}catch(i){throw jd(n),i}await Lt({silent:!0})}catch(r){h("roster-data-error",k(r),{ttlMs:p})}finally{$e=!1,l()}}}function Io(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Jn(){try{const t=window.localStorage.getItem(Ts),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Oo(t){window.localStorage.setItem(Ts,JSON.stringify(Array.isArray(t)?t:[]))}function jd(t){const e=String((t==null?void 0:t.local_upload_id)||Io()),r=Jn().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Oo(r),h("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Kd(t){const e=Jn().filter(r=>(r==null?void 0:r.local_upload_id)!==t);Oo(e)}async function Yd(){if(rn||!(d!=null&&d.connected)||!_())return;const t=Jn();if(t.length!==0){rn=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!_())return;await xo(e),Kd(e.local_upload_id)}}catch(e){h("roster-data-pending-error",`Pending roster upload retry failed: ${k(e)}`,{ttlMs:p})}finally{rn=!1}}}async function xo(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await A("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const r=await Tc(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return h("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:p}),e}async function Jd(t={}){var e,r;if(!!_()){if(!(d!=null&&d.connected)){h("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}try{const n=await qc(t);if(!(n!=null&&n.ok)){h("applications-data-info",(n==null?void 0:n.message)||"No application records were found to process.",{ttlMs:p});return}if((Array.isArray((e=n==null?void 0:n.data)==null?void 0:e.records)?n.data.records:[]).length===0){h("applications-data-info",`No application records were found in ${n.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:p});return}const s={local_upload_id:qo(),authenticated_username:J(),authenticated_discord_user_id:((r=b==null?void 0:b.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await Po(s)}catch(o){throw Qd(s),o}}catch(n){h("applications-data-error",k(n),{ttlMs:p})}}}function qo(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Qn(){try{const t=window.localStorage.getItem(Ns),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Fo(t){window.localStorage.setItem(Ns,JSON.stringify(Array.isArray(t)?t:[]))}function Qd(t){const e=String((t==null?void 0:t.local_upload_id)||qo()),r=Qn().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Fo(r),h("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Xd(t){const e=Qn().filter(r=>(r==null?void 0:r.local_upload_id)!==t);Fo(e)}async function Zd(){if(nn||!(d!=null&&d.connected)||!_())return;const t=Qn();if(t.length!==0){nn=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!_())return;await Po(e),Xd(e.local_upload_id)}}catch(e){h("applications-data-pending-error",`Pending application upload retry failed: ${k(e)}`,{ttlMs:p})}finally{nn=!1}}}async function Po(t){var i;if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return h("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:p}),{ok:!0,sent_count:0,skipped_empty:!0};let r=0;for(const s of e){const o=await A("guildsync:eso-guild-application-message",{...t,record:s,recordKey:(s==null?void 0:s.recordKey)||"",message:eu(s)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Backend rejected the application data payload. Application data was not cleared.");r+=1}const n=await Fc(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return h("applications-data-sent",`Sent ${r} application record${r===1?"":"s"} to GuildSync backend.`,{ttlMs:p}),{ok:!0,sent_count:r}}function eu(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),r=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",n=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",s=String(t.applicationText||"_No application text captured._"),o=Object.entries(t).filter(([c])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(c)).map(([c,f])=>`**${c}:** ${tu(f)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${r}** ${n} an application from **${i}**.`,"","**Application text:**","```",s.slice(0,1500),"```",o.length>0?"":null,o.length>0?"**Full captured record fields:**":null,...o].filter(c=>c!==null).join(`
`)}function tu(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function ru(t={}){await Jd(t)}function nu(){const t=Tn($),e=_u(t,$),r=$!=="other";return`
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
          ${cu()}
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${a(oa(xs))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${Te||!_()?"disabled":""} ${_()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Te?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${dn("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${dn("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${dn("other","?","Other","All other deposits")}
        </div>

        ${au($)}

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
              ${t.length>0?t.map(n=>Lu(n,r)).join(""):Eu(r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${a(xt(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${$==="monthly"?`<div>Raffle Pot: <strong>${a(xt(Math.floor(e.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${$==="biweekly"?`<div>Raffle Pot: <strong>${a(xt(Ko(e.amount)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${$==="biweekly"?`<div>Draws: <strong>${a(String(Au(e.amount)))}</strong></div>`:""}
          ${r?`<div>Total Tickets Awarded: <strong>${a(Wr(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${Ve?iu(Tn(Ye)):""}
    </div>
  `}function iu(t){return`
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
              ${t.length>0?t.map(e=>su(e)).join(""):ou()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${a(Ho(t))}</textarea>
      </div>
    </div>
  `}function su(t){return`
    <tr>
      <td>${a(t.displayName||"")}</td>
      <td>${a(String(ti(t,Ye)))}</td>
      <td>${a(String(Number(t.ticketAmount)||0))}</td>
      <td>${a(t.note||"")}</td>
    </tr>
  `}function ou(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${a(Z(Ye))}.</td>
    </tr>
  `}function au(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=Wo(t),r=Mr(t),n=r<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${u(Z(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${a(Z(t))} Raffle Period ${r===0?"(Current)":`(${Math.abs(r)} period${Math.abs(r)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${a(yr(e.salesStart))} through ${a(yr(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${a(yr(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${n?"":"disabled"} aria-label="Next ${u(Z(t))} raffle period">\u203A</button>
    </div>
  `}function dn(t,e,r,n){const i=$===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${u(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${a(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${a(r)}</span>
        <span class="bank-section-subtitle">${a(n)}</span>
      </span>
    </button>
  `}function cu(){if(!_())return"";const t=Ur(),e=er(),r=Go(),n=t+e+r;if(n<=0)return"";const i=`Desktop Client Required${n>0?` (${n})`:""}`,s="Deposit mail checkout and ESO SavedVariables writing are disabled in the web client. Use the GuildSync desktop client for this mail workflow.";return`
    <button id="checkoutDepositMailButton" class="bank-export-button deposit-mail-button deposit-mail-status-only" type="button" data-deposit-mail-action="disabled" aria-disabled="true" title="${u(s)}" aria-label="${u(`${i}. ${s}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${a(i)}</span>
      <span class="deposit-mail-web-disabled" aria-hidden="true">Web Disabled</span>
    </button>
  `}function er(){return tr().reduce((t,e)=>t+Et(e.records).length,0)}function lu(){const t=(b==null?void 0:b.user)||{};return new Set([J(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function du(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?lu().has(e):!1}function Go(){return _()?P.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),r=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&r==="written_to_eso"&&du(t)}).length:0}function Ur(){return P.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),r=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&r==="unsent"}).length}function uu(t){const e=String(t||"").trim();return P.find(r=>String(r.eventId||"").trim()===e)||null}function Xn(t){const e=String(t||"other").toLowerCase(),r=["biweekly","monthly","other"],n=r.includes(e)?e:"other",i=r.filter(s=>s!==n);return[i[0]||"biweekly",n,i[1]||"other"]}function Zn(t={},e="other"){const r=String(e||"other").toLowerCase(),n=Number(t==null?void 0:t.amount)||0;return r===String((t==null?void 0:t.type)||"").toLowerCase()?Number(t==null?void 0:t.ticketAmount)||0:r==="biweekly"?Math.floor(n/500):r==="monthly"?Math.floor(n/2500):0}function Uo(t={},e="other",r=""){const n=String(t.type||"other").toLowerCase(),i=Z(n),s=Z(e),o=J()||"Unknown user",c=[`Moved from ${i} to ${s} by ${o}.`,`Ref ${t.eventId||""}`],f=String(r||"").trim();return f&&c.push(`Reason: ${f}`),c.join(`
`)}function fu(t){const e=uu(t);if(!e){h("banking-move-missing","Could not find the selected banking entry.",{ttlMs:p});return}const r=String(e.type||"other").toLowerCase();se=e,T={targetType:r,note:"",tickets:String(Zn(e,r))},ie="",ut=!1,_t=!0,l()}function $r(){_t=!1,ut=!1,ie="",se=null,T={targetType:"other",note:"",tickets:""},l()}function hu(){const t=se||{},e=String(t.type||"other").toLowerCase(),r=Z(e),n=Xn(e);let i=String(T.targetType||n[0]||"other").toLowerCase();n.includes(i)||(i=n[0]||"other",T.targetType=i);const s=Uo(t,i,T.note);return`
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
                    <span>${o===e?"Current / restore original values":`${a(String(Zn(t,o)))} tickets`}</span>
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
  `}function pu(){var r,n,i,s;if(!_t)return;(r=document.querySelector("#closeBankingMoveDialogButton"))==null||r.addEventListener("click",()=>$r());function t(o){const c=String(o||"other").toLowerCase(),f=String((se==null?void 0:se.type)||"other").toLowerCase(),m=Xn(f);T.targetType=m.includes(c)?c:f,T.tickets=String(Zn(se||{},T.targetType)),l()}document.querySelectorAll("[data-banking-move-target]").forEach(o=>{o.addEventListener("click",()=>t(o.dataset.bankingMoveTarget))}),(n=document.querySelector("#bankingMoveTicketsInput"))==null||n.addEventListener("input",o=>{const c=String(o.target.value||"").replace(/\D/g,"");o.target.value!==c&&(o.target.value=c),T.tickets=c}),(i=document.querySelector("#bankingMoveNoteInput"))==null||i.addEventListener("input",o=>{T.note=o.target.value||"";const c=document.querySelector(".banking-move-generated-note");c&&(c.innerText=Uo(se||{},T.targetType||"other",T.note))}),(s=document.querySelector("#saveBankingMoveButton"))==null||s.addEventListener("click",()=>mu());const e=document.querySelector(".roster-history-overlay");e&&e.addEventListener("click",o=>{o.target===e&&$r()})}async function mu(){const t=se;if(!(t!=null&&t.eventId)){ie="No banking entry is selected.",l();return}const e=String(t.type||"other").toLowerCase(),r=Xn(e),n=String(T.targetType||r[0]||"other").toLowerCase();if(!r.includes(n)||n===e){ie="Select one of the side destinations before moving this entry.",l();return}const i=n==="other"?0:Math.floor(Number(String(T.tickets||"").trim()||0));if(!Number.isFinite(i)||i<0){ie="Tickets must be zero or greater.",l();return}ut=!0,ie="",l();try{const s=await A("guildsync:move-banking-entry",{event_id:t.eventId,target_type:n,tickets:i,note:T.note||""},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to move banking entry.");$r(),await re({silent:!0}),h("banking-entry-moved",s.message||"Banking entry moved.",{ttlMs:p})}catch(s){ut=!1,ie=k(s),l()}}function Vo(){if(R!=="more")return;pu(),document.querySelectorAll("[data-bank-entry-move]").forEach(o=>{o.addEventListener("click",()=>fu(o.dataset.bankEntryMove||""))}),document.querySelectorAll("[data-bank-section]").forEach(o=>{o.addEventListener("click",()=>{$=o.dataset.bankSection||"biweekly",l()})}),document.querySelectorAll("[data-bank-export-section]").forEach(o=>{o.addEventListener("click",()=>{Ye=(o.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",Ve=!0,l()})}),document.querySelectorAll("[data-bank-period-move]").forEach(o=>{o.addEventListener("click",()=>{bu(o.dataset.bankPeriodMove||""),l()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{Ve=!1,l()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>gu());const r=document.querySelector(".bank-export-overlay");r&&r.addEventListener("click",o=>{o.target===r&&(Ve=!1,l())});const n=document.querySelector("#openManualBiweeklyTicketButton");n&&n.addEventListener("click",async()=>{if(!_()){h("manual-ticket-login-required","Login required to add manual entries.",{ttlMs:p});return}de=!0,G="",At=E.accountName||"",K=!1,C=-1,Y.length===0&&(d==null?void 0:d.connected)&&_()&&await Lt({silent:!0}),l()});const i=document.querySelector("#checkoutDepositMailButton");i&&i.addEventListener("click",()=>{i.dataset.depositMailAction==="checkout"&&i.getAttribute("aria-disabled")!=="true"&&Bu()});const s=document.querySelector("#refreshBankingDataButton");s&&s.addEventListener("click",()=>{if(!_()){h("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:p});return}Jo({key:"banking"})})}function Ho(t){const e=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const r of t)e.push([r.displayName||"",String(ti(r,Ye)),String(Number(r.ticketAmount)||0),r.note||""]);return e.map(r=>r.map(Vr).join("	")).join(`
`)}function Vr(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function Hr(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const r=document.createElement("textarea");r.value=e,r.setAttribute("readonly","readonly"),r.style.position="fixed",r.style.left="0",r.style.top="0",r.style.width="1px",r.style.height="1px",r.style.opacity="0",r.style.pointerEvents="none",r.style.zIndex="-1",document.body.appendChild(r),r.focus(),r.select(),r.setSelectionRange(0,r.value.length);let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r)}return n}async function gu(){const t=Tn(Ye),e=Ho(t);if(await Hr(e)){h("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#bankingExportTsv");n&&(n.focus(),n.select()),h("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:p})}function Tn(t){return P.filter(e=>e.type===t).filter(e=>yu(t,e)).sort((e,r)=>(Number(r.time)||0)-(Number(e.time)||0))}function yu(t,e){if(t==="other")return!0;const r=Number(e==null?void 0:e.time)||0;if(r<=0)return!1;const n=Wo(t);return r>=n.salesStart&&r<=n.salesEnd}function Mr(t){return Number(wn[t])||0}function bu(t){if($!=="biweekly"&&$!=="monthly")return;const e=Mr($);if(t==="previous"){wn[$]=e-1;return}t==="next"&&e<0&&(wn[$]=e+1)}function Wo(t){const e=Math.floor(Date.now()/1e3);if(t==="monthly"){const i=ku(e,Mr(t));return{salesStart:jo(i)+1,salesEnd:i,raffleTime:i+Lr}}const r=Ne;let n=zo(e);return n+=Mr(t)*r,{salesStart:n-r+1,salesEnd:n,raffleTime:n+Lr}}function zo(t){const e=Ne;let r=jc;for(;r-e>t;)r-=e;for(;r<t;)r+=e;return r}function ku(t,e=0){let r=vu(t),n=Number(e)||0;for(;n<0;)r=jo(r),n+=1;for(;n>0;)r=Su(r),n-=1;return r}function vu(t){let e=zo(t);for(;!ei(e);)e+=Ne;return e}function jo(t){let e=t-Ne;for(;!ei(e);)e-=Ne;return e}function Su(t){let e=t+Ne;for(;!ei(e);)e+=Ne;return e}function ei(t){const e=t+Lr,r=t+Ne+Lr;return rs(e)!==rs(r)}function rs(t){var s,o;const e=new Date(Number(t||0)*1e3);if(Number.isNaN(e.getTime()))return"";const r=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit"}).formatToParts(e),n=((s=r.find(c=>c.type==="year"))==null?void 0:s.value)||"",i=((o=r.find(c=>c.type==="month"))==null?void 0:o.value)||"";return`${n}-${i}`}function wu(t=$){const e=String(t||"").toLowerCase();return e!=="monthly"&&e!=="biweekly"?0:"auto"}function ti(t={},e=$){const r=Number(t.amount)||0;if(!wu(e))return r;const n=Math.abs(Math.trunc(r))%10,i=n===1||n===3?n:0;return i>0&&r>i?r-i:r}function _u(t,e=$){return t.reduce((r,n)=>(r.amount+=ti(n,e),r.tickets+=Number(n.ticketAmount)||0,r),{amount:0,tickets:0})}function Ko(t){const e=Math.ceil((Number(t)||0)/2);return e<=0?0:Math.ceil(e/2e5)*2e5}function Au(t){const e=Ko(t);return e>0?e/2e5:0}function Lu(t,e=!0){return`
    <tr>
      <td>${a(t.note||t.eventId||"")}</td>
      <td>${a(yr(t.time))}</td>
      <td>${a(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${a(xt(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td><strong class="bank-ticket-amount">${a(Wr(t.ticketAmount))}</strong></td>`:""}
      <td><button class="bank-entry-move-button" type="button" data-bank-entry-move="${u(t.eventId||"")}">Move</button></td>
    </tr>
  `}function Eu(t=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?"6":"5"}">No ${a(Z($))} deposits found for this ${$==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function Z(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function yr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function xt(t){return(Number(t)||0).toLocaleString()}function Wr(t){return(Number(t)||0).toLocaleString()}function Et(t){return Array.isArray(t)?t.map(e=>{var n,i,s,o,c,f,m,S,g,y,q,he,Rt,Je,li,di,ui,fi,hi,pi,mi,gi,yi,bi,ki,vi,Si,wi,_i,Ai,Li,Ei,Ri,Di,$i,Mi,Ti,Ni,Ci,Bi,Ii;const r=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:r==="monthly"||r==="biweekly"||r==="other"?r:"other",eventId:String((i=(n=e==null?void 0:e.eventId)!=null?n:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((o=(s=e==null?void 0:e.time)!=null?s:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((f=(c=e==null?void 0:e.displayName)!=null?c:e==null?void 0:e.display_name)!=null?f:"").trim(),amount:Number((m=e==null?void 0:e.amount)!=null?m:0)||0,ticketAmount:Number((g=(S=e==null?void 0:e.ticketAmount)!=null?S:e==null?void 0:e.ticket_amount)!=null?g:0)||0,note:String((y=e==null?void 0:e.note)!=null?y:"").trim(),dataSource:String((he=(q=e==null?void 0:e.dataSource)!=null?q:e==null?void 0:e.data_source)!=null?he:"").trim(),emailRequested:Boolean((Rt=e==null?void 0:e.emailRequested)!=null?Rt:e==null?void 0:e.email_requested),mailStatus:String((li=(Je=e==null?void 0:e.mailStatus)!=null?Je:e==null?void 0:e.mail_status)!=null?li:"").trim(),mailRequestId:String((ui=(di=e==null?void 0:e.mailRequestId)!=null?di:e==null?void 0:e.mail_request_id)!=null?ui:"").trim(),mailBatchId:String((hi=(fi=e==null?void 0:e.mailBatchId)!=null?fi:e==null?void 0:e.mail_batch_id)!=null?hi:"").trim(),checkedOutBy:String((mi=(pi=e==null?void 0:e.checkedOutBy)!=null?pi:e==null?void 0:e.checked_out_by)!=null?mi:"").trim(),checkedOutAt:String((yi=(gi=e==null?void 0:e.checkedOutAt)!=null?gi:e==null?void 0:e.checked_out_at)!=null?yi:"").trim(),checkoutExpiresAt:String((ki=(bi=e==null?void 0:e.checkoutExpiresAt)!=null?bi:e==null?void 0:e.checkout_expires_at)!=null?ki:"").trim(),writtenToEsoAt:String((Si=(vi=e==null?void 0:e.writtenToEsoAt)!=null?vi:e==null?void 0:e.written_to_eso_at)!=null?Si:"").trim(),sentAt:String((_i=(wi=e==null?void 0:e.sentAt)!=null?wi:e==null?void 0:e.sent_at)!=null?_i:"").trim(),failedReason:String((Li=(Ai=e==null?void 0:e.failedReason)!=null?Ai:e==null?void 0:e.failed_reason)!=null?Li:"").trim(),recipient:String(($i=(Di=(Ri=(Ei=e==null?void 0:e.recipient)!=null?Ei:e==null?void 0:e.account_name)!=null?Ri:e==null?void 0:e.displayName)!=null?Di:e==null?void 0:e.display_name)!=null?$i:"").trim(),subject:String((Ni=(Ti=(Mi=e==null?void 0:e.subject)!=null?Mi:e==null?void 0:e.mailSubject)!=null?Ti:e==null?void 0:e.mail_subject)!=null?Ni:"").trim(),body:String((Ii=(Bi=(Ci=e==null?void 0:e.body)!=null?Ci:e==null?void 0:e.mailBody)!=null?Bi:e==null?void 0:e.mail_body)!=null?Ii:"").trim()}}):[]}function Ru(t){const e=new Map;for(const r of P)r.eventId&&e.set(r.eventId,r);for(const r of t)!r.eventId||e.set(r.eventId,r);P=Array.from(e.values()).sort((r,n)=>(Number(n.time)||0)-(Number(r.time)||0))}function Yo(){xs=new Date().toISOString()}async function Du(t={}){!(t!=null&&t.ok)||(P=Et(t.entries),Yo(),R==="more"&&l(),h("banking-data-updated",`Banking data updated. Loaded ${P.length} deposit record${P.length===1?"":"s"}.`,{ttlMs:p}))}async function re(t={}){const e=Boolean(t.silent),r=Boolean(t.background);if(!(d!=null&&d.connected)){e||h("banking-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}r||(Te=!0,l());try{const n=await A("guildsync:request-banking-data",{},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve banking data.");P=Et(n.entries),Yo(),e||h("banking-data",`Loaded ${P.length} banking deposit record${P.length===1?"":"s"}.`,{ttlMs:p})}catch(n){e||h("banking-data-error",k(n),{ttlMs:p})}finally{r||(Te=!1),l()}}async function ns(){!(d!=null&&d.connected)||!_()||Te||(await re({silent:!0,background:!0}),Ur()<=0&&er()>0&&(ne.running?l():Iu("availability-refresh")))}function $u(){Ze&&clearInterval(Ze),ns(),Ze=window.setInterval(ns,Vc)}function Mu(){Ze&&(clearInterval(Ze),Ze=null)}async function Tu(t={}){if(!!_()){if(!(d!=null&&d.connected)){h("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:p});return}try{const e=await Ic(t);if(!(e!=null&&e.ok))return;const r=Array.isArray(e.ackEntries)?e.ackEntries:[];if(r.length===0)return;const n=await A("guildsync:mark-deposit-mail-sent",{mail_ack:r,mail_request_ids:r.map(o=>(o==null?void 0:o.mail_request_id)||(o==null?void 0:o.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(n.mail_request_ids)?n.mail_request_ids:Array.isArray(n.mailRequestIds)?n.mailRequestIds:[];if(i.length===0){h("deposit-mail-ack-none",n.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:p});return}const s=await Oc(i);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");h("deposit-mail-ack-sent",s.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:p}),await re({silent:!0})}catch(e){h("deposit-mail-ack-error",k(e),{ttlMs:p})}}}async function Nu(){if(!sn){sn=!0;try{const t=await xc();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&h("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:p})}catch(t){h("deposit-mail-ack-cleanup-error",k(t),{ttlMs:p})}finally{sn=!1}}}async function Jo(t={}){var e,r;if(!!_()){if(!(d!=null&&d.connected)){h("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}Te=!0,l();try{const n=await Dc(t);if(!(n!=null&&n.ok)){h("banking-data-pending",(n==null?void 0:n.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:p});return}const i=Et((e=n==null?void 0:n.data)==null?void 0:e.entries);Ru(i);const s=new Date().toISOString(),o={local_upload_id:Zo(),authenticated_username:J(),authenticated_discord_user_id:((r=b==null?void 0:b.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:s,data:n.data||{}};try{await ta(o)}catch(c){throw qu(o),c}await re({silent:!0})}catch(n){h("banking-data-error",k(n),{ttlMs:p})}finally{Te=!1,l()}}}function Qo(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function tr(){try{const t=window.localStorage.getItem(Ms),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Xo(t){window.localStorage.setItem(Ms,JSON.stringify(Array.isArray(t)?t:[]))}function Cu(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||Qo()),r=tr().filter(n=>String((n==null?void 0:n.mail_batch_id)||(n==null?void 0:n.mailBatchId)||(n==null?void 0:n.local_batch_id)||"")!==e);r.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),Xo(r)}function is(t){const e=String(t||"").trim();if(!e)return;const r=tr().filter(n=>String((n==null?void 0:n.mail_batch_id)||(n==null?void 0:n.mailBatchId)||(n==null?void 0:n.local_batch_id)||"")!==e);Xo(r)}async function Bu(){if(!_()){h("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:p});return}if(!(d!=null&&d.connected)){h("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:p});return}const t=tr(),e=Ur();if(t.length>0&&e<=0){await pt();return}l();try{const r=await A("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail checkout request.");const n=Et(r.records);if(n.length===0){h("deposit-mail-none",r.message||"No unsent deposit mail is available.",{ttlMs:p}),await re({silent:!0});return}const i={mail_batch_id:r.mail_batch_id||r.mailBatchId||Qo(),checked_out_by:r.checked_out_by||r.checkedOutBy||J(),checked_out_at:new Date().toISOString(),records:n};Cu(i),await pt()}catch(r){h("deposit-mail-error",k(r),{ttlMs:p})}finally{l()}}function Iu(t=""){et||mr||!_()||er()<=0||ne.running||(et=window.setTimeout(()=>{et=null,pt()},100))}async function pt(){if(et&&(window.clearTimeout(et),et=null),mr||!_())return;const t=tr();if(t.length!==0){if(await Nn({silent:!0}),ne.running){h("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:p}),l();return}mr=!0,l();try{for(const e of t){const r=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),n=Et(e==null?void 0:e.records);if(n.length===0){is(r);continue}const i=await Bc(n);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(d!=null&&d.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const s=await A("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:r,event_ids:i.eventIds||n.map(o=>o.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend did not confirm deposit mail was marked written_to_eso.");is(r),h("deposit-mail-written",i.message||`Wrote ${n.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:p})}await re({silent:!0})}catch(e){h("deposit-mail-write-error",k(e),{ttlMs:p})}finally{mr=!1,l()}}}async function Nn(t={}){try{const e=Boolean(ne.running),r=await Cc();ne={running:Boolean(r==null?void 0:r.running),message:String((r==null?void 0:r.message)||"")},ne.running||await Nu(),e&&!ne.running&&(h("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:p}),await pt()),e!==ne.running&&l()}catch(e){t.silent||h("eso-status-error",k(e),{ttlMs:p})}}function Ou(){Xe&&clearInterval(Xe),Nn({silent:!0}).then(()=>{!ne.running&&er()>0&&pt()}),Xe=window.setInterval(()=>Nn({silent:!0}),Uc)}function xu(){Xe&&(clearInterval(Xe),Xe=null)}function Zo(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function ri(){try{const t=window.localStorage.getItem($s),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function ea(t){window.localStorage.setItem($s,JSON.stringify(Array.isArray(t)?t:[]))}function qu(t){const e=String((t==null?void 0:t.local_upload_id)||Zo()),r=ri().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),ea(r),h("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Fu(t){const e=ri().filter(r=>(r==null?void 0:r.local_upload_id)!==t);ea(e)}async function Pu(){if(tn||!(d!=null&&d.connected)||!_())return;const t=ri();if(t.length!==0){tn=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!_())return;await ta(e),Fu(e.local_upload_id)}}catch(e){h("banking-data-pending-error",`Pending banking upload retry failed: ${k(e)}`,{ttlMs:p})}finally{tn=!1}}}async function ta(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await A("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const r=await $c(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return h("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:p}),e}function ra(){if(R!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>Gu());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{ct=!0,le="",l(),O("discordHistorySearchInput")});const r=document.querySelector("#discordMemberSearch");r&&r.addEventListener("input",o=>{Sr=o.target.value||"",bn=o.target.selectionStart,kn=o.target.selectionEnd,l({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{zu(o.dataset.discordSortColumn||"username")})});const n=document.querySelector("#discordRoleFilter");n&&n.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(tt.add(c),l())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRoleFilter||"";tt.delete(c),l()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(rt.add(c),l())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeDiscordLinkStatusFilter||"";rt.delete(c),l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>yo(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{Sr="",tt.clear(),rt.clear(),l()})}async function Gu(){var t,e;if(!(d!=null&&d.connected)){h("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:p});return}vr=!0,l(),h("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const r=await A("guildsync:request-discord-data-refresh",{requested_by:((t=b==null?void 0:b.user)==null?void 0:t.display_name)||((e=b==null?void 0:b.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to request Discord data refresh.");h("discord-refresh-requested",r.message||"Discord data refresh completed.",{ttlMs:p}),await ni({silent:!0})}catch(r){h("discord-refresh-error",k(r),{ttlMs:p})}finally{vr=!1,l()}}async function Uu(){if(!(d!=null&&d.connected))return;const t=await A("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(xr=t.value||null)}async function Vu(t={}){if(!!(t!=null&&t.ok)){F=ii(t.members),Or=si(t.roles),t.last_refresh&&(xr=t.last_refresh);try{await Uu()}catch{}R==="discord-members"&&l(),h("discord-data-updated",`Discord data updated. Loaded ${F.length} member record${F.length===1?"":"s"}.`,{ttlMs:p})}}async function ni(t={}){const e=Boolean(t.silent);if(!(d!=null&&d.connected)){h("discord-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}Pt=!0,l();try{const[r,n]=await Promise.all([A("guildsync:request-discord-data-date",{}),A("guildsync:request-discord-member-dataJSON",{})]);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord refresh date.");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord member data.");xr=r.value||null,F=ii(n.members),Or=si(n.roles),e||h("discord-data",`Loaded ${F.length} Discord member record${F.length===1?"":"s"}.`,{ttlMs:p})}catch(r){h("discord-data-error",k(r),{ttlMs:p})}finally{Pt=!1,l()}}function A(t,e={},r=3e4){return new Promise((n,i)=>{if(!(d!=null&&d.connected)){i(new Error("GuildSync websocket is not connected."));return}let s=!1;const o=window.setTimeout(()=>{s||(s=!0,i(new Error(`${t} timed out.`)))},r);d.emit(t,e,c=>{s||(s=!0,window.clearTimeout(o),n(c))})})}function ii(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(na).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,r)=>Ht(e).localeCompare(Ht(r),void 0,{sensitivity:"base"})):[]}function si(t){if(!Array.isArray(t))return[];const e=new Map;for(const r of t){const n=na(r);if(!n)continue;const i=n.role_id||qt(n.role_name);i&&!e.has(i)&&e.set(i,n)}return Array.from(e.values()).sort((r,n)=>String(r.role_name||"").localeCompare(String(n.role_name||""),void 0,{sensitivity:"base"}))}function na(t){var i,s;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),r=String(t.role_name||t.name||"Unnamed Role").trim(),n=(s=(i=t.role_color)!=null?i:t.color)!=null?s:null;return{role_id:e,role_name:r||"Unnamed Role",role_color:n}}function Hu(){const t=Sr.trim().toLowerCase(),e=Array.from(tt),r=F.filter(n=>{if(t&&![n.username,n.global_name,n.server_nickname,n.discord_id,...n.roles.map(s=>s.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(n.roles.map(s=>s.role_name));if(!e.every(s=>i.has(s)))return!1}return!!zs(rt,bl(n))});return Wu(r)}function Wu(t){const e=xe==="desc"?-1:1;return[...t].sort((r,n)=>{const i=ss(r,Gt),s=ss(n,Gt),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:Ht(r).localeCompare(Ht(n),void 0,{sensitivity:"base",numeric:!0})})}function ss(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(r=>r.role_name||"").filter(Boolean).sort((r,n)=>r.localeCompare(n,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function zu(t){const r=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";Gt===r?xe=xe==="asc"?"desc":"asc":(Gt=r,xe="asc"),l()}function cr(t,e){const r=Gt===t,n=xe==="asc"?"ascending":"descending",i=r?xe==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${r?n:"none"}">
      <button
        class="discord-sort-header${r?" active":""}"
        type="button"
        data-discord-sort-column="${u(t)}"
        title="Sort ${u(e)} ${r&&xe==="asc"?"descending":"ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function ju(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(bn)?bn:t.value.length,r=Number.isInteger(kn)?kn:e;t.setSelectionRange(e,r)}}function Ku(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(vn)?vn:t.value.length,r=Number.isInteger(Sn)?Sn:e;t.setSelectionRange(e,r)}}function Yu(){const t=new Set;for(const e of F)for(const r of e.roles)r.role_name&&t.add(r.role_name);return Array.from(t).sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function Ju(t){const e=tf(t),r=Ht(t),n=t.roles||[];return`
    <tr data-discord-user-id="${u(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${u(e)}" alt="${u(r)}" />`:`<span>${a(ma(r))}</span>`}
          </div>
          <span>${a(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${a(t.global_name||"")}</td>
      <td>${a(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${n.length>0?n.map(i=>Xu(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${mo({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function Qu(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${a(Pt?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function Xu(t){const e=zr(t.role_color),r=ai(e),n=oi(e,r);return`
    <span
      class="discord-role-badge"
      title="${u(t.role_name)}"
      style="${n}"
    >${a(t.role_name)}</span>
  `}function Zu(t){const e=sa(t),r=zr(e==null?void 0:e.role_color),n=ai(r),i=oi(r,n);return`
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
  `}function ia(t){const e=ef(t);for(const r of e){const n=sa(r);if(n)return n}return null}function ef(t){const e=String(t||"").trim();if(!e)return[];const r=qt(e),i={associate:["Associates","Associate"],associates:["Associates","Associate"],soldier:["Soldiers","Soldier"],soldiers:["Soldiers","Soldier"],capo:["Capo"],capos:["Capo","Capos"],caporegime:["CapoRegime","Capo Regime","Capo Regimes"],consiglieres:["Consigliere","Consiglieres"],consigliere:["Consigliere","Consiglieres"]}[r]||[e];return Array.from(new Set([e,...i].filter(Boolean)))}function qt(t){return String(t||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function sa(t){const e=qt(t);if(!e)return null;const r=Or.find(n=>qt(n.role_name)===e);if(r)return r;for(const n of F){const i=n.roles.find(s=>qt(s.role_name)===e);if(i)return i}return null}function zr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function oi(t,e){return[`--role-fill-top: ${os(t,"#ffffff",.16)}`,`--role-fill-bottom: ${os(t,"#000000",.1)}`,`--role-fill-glow: ${as(t,.28)}`,`--role-fill-edge: ${as(t,.46)}`,`color: ${e}`].join("; ")}function os(t,e,r){const n=lr(t)||lr("#64748b"),i=lr(e)||lr("#ffffff"),s=Math.max(0,Math.min(1,Number(r)||0)),o=Math.round(n.red+(i.red-n.red)*s),c=Math.round(n.green+(i.green-n.green)*s),f=Math.round(n.blue+(i.blue-n.blue)*s);return`#${un(o)}${un(c)}${un(f)}`}function lr(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function un(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function as(t,e){const r=String(t||"#64748b").replace("#",""),n=/^[0-9a-f]{6}$/i.test(r)?r:"64748b",i=parseInt(n.slice(0,2),16),s=parseInt(n.slice(2,4),16),o=parseInt(n.slice(4,6),16);return`rgba(${i}, ${s}, ${o}, ${e})`}function ai(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const r=parseInt(e.slice(0,2),16),n=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(r*299+n*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function tf(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!r)return"";const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function Ht(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function oa(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function br(){const t=document.querySelector("#discordArea");if(!!t){if(rr(!1),_()){const e=b.user||{},r=J(),n=vf(e),i=ma(r);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${n?`<img src="${u(n)}" alt="${u(r)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${a(i)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const s=document.querySelector("#discordAvatarButton");s.addEventListener("contextmenu",o=>{o.preventDefault(),cs()}),s.addEventListener("click",()=>{cs()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",af)}}function cs(){if(jt){rr();return}of()}function rf(t=we){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],r=String((t==null?void 0:t.directory)||"").trim(),n=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const s=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),o=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),c=String((i==null?void 0:i.filePath)||(r?`${r}\\${o}`:o)).trim(),f=(i==null?void 0:i.enabled)!==!1,m=n&&f,S=`profileFileWatchToggle-${sf(s||o)}`;return`
          <label class="profile-filewatch-item ${f?"enabled":"disabled"}" title="${u(c)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${a(o)}</span>
              <span class="profile-filewatch-state">${m?"Watching":f?"On":"Off"}</span>
            </span>
            <input
              id="${u(S)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${u(s)}"
              ${f?"checked":""}
              aria-label="Turn file watch ${f?"off":"on"} for ${u(o)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function ci(){var n,i,s;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=J(),r=((n=b.user)==null?void 0:n.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${a(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${a(Sf(r))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${a(Ir)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${we!=null&&we.watching?"Active":"Stopped"}</span>
        </div>
        ${rf()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(i=document.querySelector("#discordLogoutButton"))==null||i.addEventListener("click",cf),(s=document.querySelector("#associateTicketReportButton"))==null||s.addEventListener("click",()=>{rr(!1),Qs()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",nf)})}async function aa(){try{we=await Br(),jt&&ci()}catch(t){h("file-watcher-error",k(t),{ttlMs:p})}}async function nf(t){var n;const e=t.currentTarget,r=String(((n=e==null?void 0:e.dataset)==null?void 0:n.filewatchKey)||"").trim();if(!!r)try{e.disabled=!0,we=await Rc(r,e.checked),await ot({silent:!0}),jt&&ci()}catch(i){h("file-watcher-error",k(i),{ttlMs:p}),await aa()}}function sf(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function of(){const t=document.querySelector("#discordProfileMenu");!t||(ci(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),jt=!0,aa(),setTimeout(()=>{window.addEventListener("click",ca),window.addEventListener("keydown",la)},0))}function rr(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),jt=!1,t&&(window.removeEventListener("click",ca),window.removeEventListener("keydown",la))}function ca(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&rr()}function la(t){t.key==="Escape"&&rr()}async function af(){try{h("auth","Opening Discord login...",{ttlMs:p});const t=await wc();t!=null&&t.status_message&&h("auth",t.status_message,{ttlMs:p}),Re()}catch(t){h("auth-error",k(t),{ttlMs:p}),Re()}}async function cf(){try{b=await Ac(),h("auth",b.status_message||"Logged out.",{ttlMs:p}),qs(),Ft(),await ot()}catch(t){h("auth-error",k(t),{ttlMs:p}),Re()}}function Ft(){const t=b.socket_url||"https://guildsync.perdues.me";lf(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};b!=null&&b.token&&(e.auth={token:b.token}),d=hr(t,e),d.on("connect",()=>{Re(),da(),R==="discord-members"&&ni({silent:!0}),R==="eso-members"&&Lt({silent:!0}),R==="more"&&re({silent:!0}),Pu(),pt(),Ou(),$u(),Yd(),Zd(),df()}),d.on("connect_error",()=>{Re(),Tr()}),d.on("disconnect",()=>{Re(),Tr(),xu(),Mu()}),d.on("guildsync:version-status",r=>{uf(r)}),d.on("guildsync:discord-member-data-updated",r=>{Vu(r)}),d.on("guildsync:banking-data-updated",r=>{Du(r)}),d.on("guildsync:roster-data-updated",r=>{Wd(r)}),d.on("guildsync:member-links-updated",(r={})=>{Array.isArray(r.links)&&(L=r.links,(R==="discord-members"||R==="eso-members"||R==="settings"||Ce)&&l())}),d.on("guildsync:discord-refresh-status",(r={})=>{const n=String(r.message||"").trim();n&&h("discord-refresh-status",n,{ttlMs:p})})}function lf(t=!0){Tr(),d&&(d.disconnect(),d=null),t&&Re()}function da(){!(d!=null&&d.connected)||d.emit("guildsync:client-version",{version:Ir,platform:ua(),client_type:"wails"})}function df(){Tr(),pr=window.setInterval(()=>{da()},Gc)}function Tr(){pr&&(window.clearInterval(pr),pr=null)}function uf(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",r=t.download&&typeof t.download=="object"?t.download:{};pe={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||r.url||"").trim(),fileName:String(t.download_file_name||r.file_name||"").trim(),platformLabel:String(r.label||t.platform||ua()).trim()},h("version",`GuildSync is out of date. Current version: ${Ir}. Latest version: ${e}.`),ls();return}pe={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},ls(),jr("version")}}function ua(){const t=String(navigator.userAgent||"").toLowerCase(),r=`${String(navigator.platform||"").toLowerCase()} ${t}`;return r.includes("mac")?"macos":r.includes("linux")?"linux":"windows"}function ls(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!pe.updateRequired||!pe.downloadUrl){t.innerHTML="";return}const e=pe.platformLabel||"Desktop",r=pe.latestVersion||"latest",n=pe.fileName||"GuildSync client download";t.innerHTML=`
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
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{ff()})}function ff(){const t=String(pe.downloadUrl||"").trim();if(!t){h("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:p});return}Nc(t)}function h(t,e,r={}){const n=String(t||"").trim(),i=String(e||"").trim();if(!(!n||!i)){if(De.set(n,i),Ie.has(n)&&(window.clearTimeout(Ie.get(n)),Ie.delete(n)),r.ttlMs&&Number(r.ttlMs)>0){const s=window.setTimeout(()=>{jr(n)},Number(r.ttlMs));Ie.set(n,s)}mt()}}function jr(t){const e=String(t||"").trim();if(!!e){if(De.delete(e),Ie.has(e)&&(window.clearTimeout(Ie.get(e)),Ie.delete(e)),N===e){Jr(()=>{N="",mt()});return}mt()}}function mt(){const t=Kr();if(t.length===0){He?Jr(Wt):Wt();return}!He&&!We&&Yr(t[0])}function Kr(){return Array.from(De.keys())}function fa(){const t=Kr();if(t.length===0)return"";if(!N)return t[0];const e=t.indexOf(N);return e<0?t[0]:t[(e+1)%t.length]}function Yr(t){const e=document.querySelector("#statusMessageTrack");if(!e||!De.has(t)){Wt();return}Qr();const r=De.get(t);N=t,He=!0,We=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=r,e.style.setProperty("--message-fade-duration",`${Bs}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",We=!1,hf()},{once:!0})})}function hf(){const t=Kr();if(!N||!De.has(N)){mt();return}if(t.length<=1){ds(!1);return}ds(!0)}function ds(t){const e=document.querySelector("#statusMessageViewport"),r=document.querySelector("#statusMessageTrack");if(!e||!r)return;const n=Math.max(0,r.scrollWidth-e.clientWidth);if(n<=0){t&&zt(()=>{Jr(()=>{const i=fa();N="",i?Yr(i):Wt()})},Cs);return}zt(()=>{ha(n,t)},Is)}function ha(t,e){const r=document.querySelector("#statusMessageTrack");if(!r||!N||!De.has(N))return;const n=Math.max(4,Math.ceil(t/Wc));r.style.setProperty("--long-scroll-distance",`${t}px`),r.style.setProperty("--long-scroll-duration",`${n}s`),r.classList.add("long-scroll"),r.addEventListener("animationend",()=>{if(r.classList.remove("long-scroll"),r.style.transform=`translateX(-${t}px) translateY(-50%)`,e){zt(()=>{Jr(()=>{const i=fa();N="",i?Yr(i):Wt()})},Cs);return}zt(()=>{pf()},Hc)},{once:!0})}function pf(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!N||!De.has(N))return;if(Kr().length!==1){mt();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const n=Math.max(0,e.scrollWidth-t.clientWidth);n<=0||zt(()=>{ha(n,!1)},Is)}function Jr(t){const e=document.querySelector("#statusMessageTrack");if(Qr(),!e||!He){typeof t=="function"&&t();return}We=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${Bs}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",He=!1,We=!1,typeof t=="function"&&t()},{once:!0})}function Wt(){const t=document.querySelector("#statusMessageTrack");Qr(),N="",He=!1,We=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function zt(t,e){const r=window.setTimeout(()=>{It=It.filter(n=>n!==r),t()},e);It.push(r)}function Qr(){for(const t of It)window.clearTimeout(t);It=[]}function pa(){if(!He||We||!N)return;const t=N;Qr(),Yr(t)}function Re(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(d!=null&&d.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!_()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${J()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${J()}`)}}async function ot(t={}){try{if(_()){const e=await Lc();we=e,!t.silent&&(e==null?void 0:e.message)&&h(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:p});return}we=await Ec(),jr("file-watcher")}catch(e){h("file-watcher-error",k(e),{ttlMs:p})}}function Ct(t,e=null){const r="[GuildSync File Watcher]";if(e){console.log(`${r} ${t}`,e);return}console.log(`${r} ${t}`)}function mf(t={}){if(!_()){Ct("SavedVariables change ignored because the user is not authenticated.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",r=e.toLowerCase(),n=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=String(t.filePath||"").trim(),o=n?`${n} saved variables (${i})`:i;Ct(`SavedVariables change detected: ${i}${s?` (${s})`:""}. Key: ${r}.`,t),h(`saved-vars-file-updated-${e}`,`${o} has been updated.`,{ttlMs:p}),r==="banking"&&(Ct(`Processing banking SavedVariables update from ${i}.`),gf(t)),r==="roster"&&(Ct(`Processing roster SavedVariables update from ${i}.`),yf(t)),r==="applications"&&(Ct(`Processing applications SavedVariables update from ${i}.`),ru(t))}async function gf(t={}){await Tu(t),await Jo(t)}async function yf(t={}){await zd(t)}function bf(t){!_()||h("file-watcher-error",k(t),{ttlMs:p})}function kf(){$t("guildsync-savedvars-file-modified",mf),$t("guildsync-file-watcher-error",bf),$t("guildsync-login-complete",async t=>{b=t||{logged_in:!1,allowed:!1},br(),Ft(),await ot(),h("auth",b.status_message||`Logged in and authorized as ${J()}.`,{ttlMs:p})}),$t("guildsync-login-denied",async t=>{b={logged_in:!1,allowed:!1,status_message:""},br(),await ot(),h("auth",t||"Access denied.",{ttlMs:p}),Ft()}),$t("guildsync-login-failed",async t=>{b={logged_in:!1,allowed:!1,status_message:""},br(),await ot(),h("auth",t||"Login failed.",{ttlMs:p}),Ft()})}function _(){return Boolean((b==null?void 0:b.logged_in)&&(b==null?void 0:b.allowed)&&(b==null?void 0:b.token))}function J(){var t,e;return((t=b.user)==null?void 0:t.display_name)||((e=b.user)==null?void 0:e.username)||"Discord User"}function vf(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),r=String(t.discord_user_id||"").trim();if(!e||!r)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=128`}function ma(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function Sf(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function wf(){Mt&&(Mt.disconnect(),Mt=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),r=Math.round(t.getBoundingClientRect().height);Mt=new ResizeObserver(n=>{const i=n[0];if(!i)return;const s=Math.round(i.contentRect.width),o=Math.round(i.contentRect.height);s===e&&o===r||(e=s,r=o,ga(),pa())}),Mt.observe(t)}function ga(){clearTimeout(Pi),Pi=setTimeout(async()=>{try{await Rs()}catch{}},500)}function k(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function a(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function u(t){return a(t)}kf();Kc();Ml();
