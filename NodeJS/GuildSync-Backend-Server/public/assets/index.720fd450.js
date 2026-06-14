(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const qs="/assets/splash.ea386b6a.png",Is="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",Ps="/assets/GuildSync-Graphic.9169020d.png",W=Object.create(null);W.open="0";W.close="1";W.ping="2";W.pong="3";W.message="4";W.upgrade="5";W.noop="6";const dt=Object.create(null);Object.keys(W).forEach(t=>{dt[W[t]]=t});const Jt={type:"error",data:"parser error"},dn=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",un=typeof ArrayBuffer=="function",fn=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,mr=({type:t,data:e},r,n)=>dn&&e instanceof Blob?r?n(e):Fr(e,n):un&&(e instanceof ArrayBuffer||fn(e))?r?n(e):Fr(new Blob([e]),n):n(W[t]+(e||"")),Fr=(t,e)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];e("b"+(n||""))},r.readAsDataURL(t)};function Ur(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let Gt;function Fs(t,e){if(dn&&t.data instanceof Blob)return t.data.arrayBuffer().then(Ur).then(e);if(un&&(t.data instanceof ArrayBuffer||fn(t.data)))return e(Ur(t.data));mr(t,!1,r=>{Gt||(Gt=new TextEncoder),e(Gt.encode(r))})}const Gr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ge=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<Gr.length;t++)Ge[Gr.charCodeAt(t)]=t;const Us=t=>{let e=t.length*.75,r=t.length,n,s=0,i,o,l,u;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const p=new ArrayBuffer(e),b=new Uint8Array(p);for(n=0;n<r;n+=4)i=Ge[t.charCodeAt(n)],o=Ge[t.charCodeAt(n+1)],l=Ge[t.charCodeAt(n+2)],u=Ge[t.charCodeAt(n+3)],b[s++]=i<<2|o>>4,b[s++]=(o&15)<<4|l>>2,b[s++]=(l&3)<<6|u&63;return p},Gs=typeof ArrayBuffer=="function",pr=(t,e)=>{if(typeof t!="string")return{type:"message",data:hn(t,e)};const r=t.charAt(0);return r==="b"?{type:"message",data:Vs(t.substring(1),e)}:dt[r]?t.length>1?{type:dt[r],data:t.substring(1)}:{type:dt[r]}:Jt},Vs=(t,e)=>{if(Gs){const r=Us(t);return hn(r,e)}else return{base64:!0,data:t}},hn=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},mn=String.fromCharCode(30),Ws=(t,e)=>{const r=t.length,n=new Array(r);let s=0;t.forEach((i,o)=>{mr(i,!1,l=>{n[o]=l,++s===r&&e(n.join(mn))})})},Hs=(t,e)=>{const r=t.split(mn),n=[];for(let s=0;s<r.length;s++){const i=pr(r[s],e);if(n.push(i),i.type==="error")break}return n};function zs(){return new TransformStream({transform(t,e){Fs(t,r=>{const n=r.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const i=new DataView(s.buffer);i.setUint8(0,126),i.setUint16(1,n)}else{s=new Uint8Array(9);const i=new DataView(s.buffer);i.setUint8(0,127),i.setBigUint64(1,BigInt(n))}t.data&&typeof t.data!="string"&&(s[0]|=128),e.enqueue(s),e.enqueue(r)})}})}let Vt;function st(t){return t.reduce((e,r)=>e+r.length,0)}function it(t,e){if(t[0].length===e)return t.shift();const r=new Uint8Array(e);let n=0;for(let s=0;s<e;s++)r[s]=t[0][n++],n===t[0].length&&(t.shift(),n=0);return t.length&&n<t[0].length&&(t[0]=t[0].slice(n)),r}function js(t,e){Vt||(Vt=new TextDecoder);const r=[];let n=0,s=-1,i=!1;return new TransformStream({transform(o,l){for(r.push(o);;){if(n===0){if(st(r)<1)break;const u=it(r,1);i=(u[0]&128)===128,s=u[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(st(r)<2)break;const u=it(r,2);s=new DataView(u.buffer,u.byteOffset,u.length).getUint16(0),n=3}else if(n===2){if(st(r)<8)break;const u=it(r,8),p=new DataView(u.buffer,u.byteOffset,u.length),b=p.getUint32(0);if(b>Math.pow(2,53-32)-1){l.enqueue(Jt);break}s=b*Math.pow(2,32)+p.getUint32(4),n=3}else{if(st(r)<s)break;const u=it(r,s);l.enqueue(pr(i?u:Vt.decode(u),e)),n=0}if(s===0||s>t){l.enqueue(Jt);break}}}})}const pn=4;function E(t){if(t)return Ys(t)}function Ys(t){for(var e in E.prototype)t[e]=E.prototype[e];return t}E.prototype.on=E.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};E.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this};E.prototype.off=E.prototype.removeListener=E.prototype.removeAllListeners=E.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var n,s=0;s<r.length;s++)if(n=r[s],n===e||n.fn===e){r.splice(s,1);break}return r.length===0&&delete this._callbacks["$"+t],this};E.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),r=this._callbacks["$"+t],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,s=r.length;n<s;++n)r[n].apply(this,e)}return this};E.prototype.emitReserved=E.prototype.emit;E.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};E.prototype.hasListeners=function(t){return!!this.listeners(t).length};const Rt=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,r)=>r(e,0))(),N=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),Ks="arraybuffer";function gn(t,...e){return e.reduce((r,n)=>(t.hasOwnProperty(n)&&(r[n]=t[n]),r),{})}const Js=N.setTimeout,Qs=N.clearTimeout;function Mt(t,e){e.useNativeTimers?(t.setTimeoutFn=Js.bind(N),t.clearTimeoutFn=Qs.bind(N)):(t.setTimeoutFn=N.setTimeout.bind(N),t.clearTimeoutFn=N.clearTimeout.bind(N))}const Xs=1.33;function Zs(t){return typeof t=="string"?ei(t):Math.ceil((t.byteLength||t.size)*Xs)}function ei(t){let e=0,r=0;for(let n=0,s=t.length;n<s;n++)e=t.charCodeAt(n),e<128?r+=1:e<2048?r+=2:e<55296||e>=57344?r+=3:(n++,r+=4);return r}function yn(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function ti(t){let e="";for(let r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e}function ri(t){let e={},r=t.split("&");for(let n=0,s=r.length;n<s;n++){let i=r[n].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}class ni extends Error{constructor(e,r,n){super(e),this.description=r,this.context=n,this.type="TransportError"}}class gr extends E{constructor(e){super(),this.writable=!1,Mt(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,r,n){return super.emitReserved("error",new ni(e,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const r=pr(e,this.socket.binaryType);this.onPacket(r)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,r={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const r=ti(e);return r.length?"?"+r:""}}class si extends gr{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const r=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};Hs(e,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Ws(e,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=yn()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(e,r)}}let bn=!1;try{bn=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const ii=bn;function oi(){}class ai extends si{constructor(e){if(super(e),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,r){const n=this.request({method:"POST",data:e});n.on("success",r),n.on("error",(s,i)=>{this.onError("xhr post error",s,i)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=e}}class G extends E{constructor(e,r,n){super(),this.createRequest=e,Mt(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;const r=gn(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=G.requestsCount++,G.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=oi,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete G.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}G.requestsCount=0;G.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Vr);else if(typeof addEventListener=="function"){const t="onpagehide"in N?"pagehide":"unload";addEventListener(t,Vr,!1)}}function Vr(){for(let t in G.requests)G.requests.hasOwnProperty(t)&&G.requests[t].abort()}const ci=function(){const t=kn({xdomain:!1});return t&&t.responseType!==null}();class li extends ai{constructor(e){super(e);const r=e&&e.forceBase64;this.supportsBinary=ci&&!r}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new G(kn,this.uri(),e)}}function kn(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||ii))return new XMLHttpRequest}catch{}if(!e)try{return new N[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const vn=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class di extends gr{get name(){return"websocket"}doOpen(){const e=this.uri(),r=this.opts.protocols,n=vn?{}:gn(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,r,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],s=r===e.length-1;mr(n,this.supportsBinary,i=>{try{this.doWrite(n,i)}catch{}s&&Rt(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=yn()),this.supportsBinary||(r.b64=1),this.createUri(e,r)}}const Wt=N.WebSocket||N.MozWebSocket;class ui extends di{createSocket(e,r,n){return vn?new Wt(e,r,n):r?new Wt(e,r):new Wt(e)}doWrite(e,r){this.ws.send(r)}}class fi extends gr{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const r=js(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(r).getReader(),s=zs();s.readable.pipeTo(e.writable),this._writer=s.writable.getWriter();const i=()=>{n.read().then(({done:l,value:u})=>{l||(this.onPacket(u),i())}).catch(l=>{})};i();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],s=r===e.length-1;this._writer.write(n).then(()=>{s&&Rt(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const hi={websocket:ui,webtransport:fi,polling:li},mi=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,pi=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Qt(t){if(t.length>8e3)throw"URI too long";const e=t,r=t.indexOf("["),n=t.indexOf("]");r!=-1&&n!=-1&&(t=t.substring(0,r)+t.substring(r,n).replace(/:/g,";")+t.substring(n,t.length));let s=mi.exec(t||""),i={},o=14;for(;o--;)i[pi[o]]=s[o]||"";return r!=-1&&n!=-1&&(i.source=e,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=gi(i,i.path),i.queryKey=yi(i,i.query),i}function gi(t,e){const r=/\/{2,9}/g,n=e.replace(r,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function yi(t,e){const r={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,i){s&&(r[s]=i)}),r}const Xt=typeof addEventListener=="function"&&typeof removeEventListener=="function",ut=[];Xt&&addEventListener("offline",()=>{ut.forEach(t=>t())},!1);class ee extends E{constructor(e,r){if(super(),this.binaryType=Ks,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(r=e,e=null),e){const n=Qt(e);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=Qt(r.host).host);Mt(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const s=n.prototype.name;this.transports.push(s),this._transportsByName[s]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=ri(this.opts.query)),Xt&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},ut.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const r=Object.assign({},this.opts.query);r.EIO=pn,r.transport=e,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&ee.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(e);r.open(),this.setTransport(r)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",ee.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=e.data,this._onError(r);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(r+=Zs(s)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Rt(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,r,n){return this._sendPacket("message",e,r,n),this}send(e,r,n){return this._sendPacket("message",e,r,n),this}_sendPacket(e,r,n,s){if(typeof r=="function"&&(s=r,r=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const i={type:e,data:r,options:n};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),s&&this.once("flush",s),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),e()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(ee.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Xt&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=ut.indexOf(this._offlineEventListener);n!==-1&&ut.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,r),this.writeBuffer=[],this._prevBufferLen=0}}}ee.protocol=pn;class bi extends ee{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let r=this.createTransport(e),n=!1;ee.priorWebsocketSuccess=!1;const s=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",A=>{if(!n)if(A.type==="pong"&&A.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;ee.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(b(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const D=new Error("probe error");D.transport=r.name,this.emitReserved("upgradeError",D)}}))};function i(){n||(n=!0,b(),r.close(),r=null)}const o=A=>{const D=new Error("probe error: "+A);D.transport=r.name,i(),this.emitReserved("upgradeError",D)};function l(){o("transport closed")}function u(){o("socket closed")}function p(A){r&&A.name!==r.name&&i()}const b=()=>{r.removeListener("open",s),r.removeListener("error",o),r.removeListener("close",l),this.off("close",u),this.off("upgrading",p)};r.once("open",s),r.once("error",o),r.once("close",l),this.once("close",u),this.once("upgrading",p),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const r=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&r.push(e[n]);return r}}class ki extends bi{constructor(e,r={}){const n=typeof e=="object"?e:r;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(s=>hi[s]).filter(s=>!!s)),super(e,n)}}function vi(t,e="",r){let n=t;r=r||typeof location<"u"&&location,t==null&&(t=r.protocol+"//"+r.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=r.protocol+t:t=r.host+t),/^(https?|wss?):\/\//.test(t)||(typeof r<"u"?t=r.protocol+"//"+t:t="https://"+t),n=Qt(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const i=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+i+":"+n.port+e,n.href=n.protocol+"://"+i+(r&&r.port===n.port?"":":"+n.port),n}const wi=typeof ArrayBuffer=="function",Si=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,wn=Object.prototype.toString,_i=typeof Blob=="function"||typeof Blob<"u"&&wn.call(Blob)==="[object BlobConstructor]",Ai=typeof File=="function"||typeof File<"u"&&wn.call(File)==="[object FileConstructor]";function yr(t){return wi&&(t instanceof ArrayBuffer||Si(t))||_i&&t instanceof Blob||Ai&&t instanceof File}function ft(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let r=0,n=t.length;r<n;r++)if(ft(t[r]))return!0;return!1}if(yr(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return ft(t.toJSON(),!0);for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&ft(t[r]))return!0;return!1}function Ei(t){const e=[],r=t.data,n=t;return n.data=Zt(r,e),n.attachments=e.length,{packet:n,buffers:e}}function Zt(t,e){if(!t)return t;if(yr(t)){const r={_placeholder:!0,num:e.length};return e.push(t),r}else if(Array.isArray(t)){const r=new Array(t.length);for(let n=0;n<t.length;n++)r[n]=Zt(t[n],e);return r}else if(typeof t=="object"&&!(t instanceof Date)){const r={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=Zt(t[n],e));return r}return t}function Li(t,e){return t.data=er(t.data,e),delete t.attachments,t}function er(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let r=0;r<t.length;r++)t[r]=er(t[r],e);else if(typeof t=="object")for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(t[r]=er(t[r],e));return t}const Sn=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Ri=5;var y;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(y||(y={}));class Mi{constructor(e){this.replacer=e}encode(e){return(e.type===y.EVENT||e.type===y.ACK)&&ft(e)?this.encodeAsBinary({type:e.type===y.EVENT?y.BINARY_EVENT:y.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let r=""+e.type;return(e.type===y.BINARY_EVENT||e.type===y.BINARY_ACK)&&(r+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(r+=e.nsp+","),e.id!=null&&(r+=e.id),e.data!=null&&(r+=JSON.stringify(e.data,this.replacer)),r}encodeAsBinary(e){const r=Ei(e),n=this.encodeAsString(r.packet),s=r.buffers;return s.unshift(n),s}}class br extends E{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let r;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(e);const n=r.type===y.BINARY_EVENT;n||r.type===y.BINARY_ACK?(r.type=n?y.EVENT:y.ACK,this.reconstructor=new Ti(r),r.attachments===0&&super.emitReserved("decoded",r)):super.emitReserved("decoded",r)}else if(yr(e)||e.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(e),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let r=0;const n={type:Number(e.charAt(0))};if(y[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===y.BINARY_EVENT||n.type===y.BINARY_ACK){const i=r+1;for(;e.charAt(++r)!=="-"&&r!=e.length;);const o=e.substring(i,r);if(o!=Number(o)||e.charAt(r)!=="-")throw new Error("Illegal attachments");const l=Number(o);if(!_n(l)||l<0)throw new Error("Illegal attachments");if(l>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=l}if(e.charAt(r+1)==="/"){const i=r+1;for(;++r&&!(e.charAt(r)===","||r===e.length););n.nsp=e.substring(i,r)}else n.nsp="/";const s=e.charAt(r+1);if(s!==""&&Number(s)==s){const i=r+1;for(;++r;){const o=e.charAt(r);if(o==null||Number(o)!=o){--r;break}if(r===e.length)break}n.id=Number(e.substring(i,r+1))}if(e.charAt(++r)){const i=this.tryParse(e.substr(r));if(br.isPayloadValid(n.type,i))n.data=i;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,r){switch(e){case y.CONNECT:return yt(r);case y.DISCONNECT:return r===void 0;case y.CONNECT_ERROR:return typeof r=="string"||yt(r);case y.EVENT:case y.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&Sn.indexOf(r[0])===-1);case y.ACK:case y.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Ti{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const r=Li(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function $i(t){return typeof t=="string"}const _n=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function Di(t){return t===void 0||_n(t)}function yt(t){return Object.prototype.toString.call(t)==="[object Object]"}function Ni(t,e){switch(t){case y.CONNECT:return e===void 0||yt(e);case y.DISCONNECT:return e===void 0;case y.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&Sn.indexOf(e[0])===-1);case y.ACK:return Array.isArray(e);case y.CONNECT_ERROR:return typeof e=="string"||yt(e);default:return!1}}function Ci(t){return $i(t.nsp)&&Di(t.id)&&Ni(t.type,t.data)}const Bi=Object.freeze(Object.defineProperty({__proto__:null,protocol:Ri,get PacketType(){return y},Encoder:Mi,Decoder:br,isPacketValid:Ci},Symbol.toStringTag,{value:"Module"}));function q(t,e,r){return t.on(e,r),function(){t.off(e,r)}}const xi=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class An extends E{constructor(e,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[q(e,"open",this.onopen.bind(this)),q(e,"packet",this.onpacket.bind(this)),q(e,"error",this.onerror.bind(this)),q(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...r){var n,s,i;if(xi.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(r.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const o={type:y.EVENT,data:r};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const b=this.ids++,A=r.pop();this._registerAckCallback(b,A),o.id=b}const l=(s=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||s===void 0?void 0:s.writable,u=this.connected&&!(!((i=this.io.engine)===null||i===void 0)&&i._hasPingExpired());return this.flags.volatile&&!l||(u?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,r){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[e]=r;return}const i=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let l=0;l<this.sendBuffer.length;l++)this.sendBuffer[l].id===e&&this.sendBuffer.splice(l,1);r.call(this,new Error("operation has timed out"))},s),o=(...l)=>{this.io.clearTimeoutFn(i),r.apply(this,l)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...r){return new Promise((n,s)=>{const i=(o,l)=>o?s(o):n(l);i.withError=!0,r.push(i),this.emit(e,...r)})}_addToQueue(e){let r;typeof e[e.length-1]=="function"&&(r=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((s,...i)=>(this._queue[0],s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(s)):(this._queue.shift(),r&&r(null,...i)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!e||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:y.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){const n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case y.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case y.EVENT:case y.BINARY_EVENT:this.onevent(e);break;case y.ACK:case y.BINARY_ACK:this.onack(e);break;case y.DISCONNECT:this.ondisconnect();break;case y.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const r=e.data||[];e.id!=null&&r.push(this.ack(e.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const r=this;let n=!1;return function(...s){n||(n=!0,r.packet({type:y.ACK,id:e,data:s}))}}onack(e){const r=this.acks[e.id];typeof r=="function"&&(delete this.acks[e.id],r.withError&&e.data.unshift(null),r.apply(this,e.data))}onconnect(e,r){this.id=e,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:y.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,e.data)}}}function De(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}De.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-r:t+r}return Math.min(t,this.max)|0};De.prototype.reset=function(){this.attempts=0};De.prototype.setMin=function(t){this.ms=t};De.prototype.setMax=function(t){this.max=t};De.prototype.setJitter=function(t){this.jitter=t};class tr extends E{constructor(e,r){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(r=e,e=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,Mt(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new De({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=e;const s=r.parser||Bi;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var r;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(r=this.backoff)===null||r===void 0||r.setMin(e),this)}randomizationFactor(e){var r;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(r=this.backoff)===null||r===void 0||r.setJitter(e),this)}reconnectionDelayMax(e){var r;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(r=this.backoff)===null||r===void 0||r.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new ki(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=q(r,"open",function(){n.onopen(),e&&e()}),i=l=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",l),e?e(l):this.maybeReconnectOnOpen()},o=q(r,"error",i);if(this._timeout!==!1){const l=this._timeout,u=this.setTimeoutFn(()=>{s(),i(new Error("timeout")),r.close()},l);this.opts.autoUnref&&u.unref(),this.subs.push(()=>{this.clearTimeoutFn(u)})}return this.subs.push(s),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(q(e,"ping",this.onping.bind(this)),q(e,"data",this.ondata.bind(this)),q(e,"error",this.onerror.bind(this)),q(e,"close",this.onclose.bind(this)),q(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(r){this.onclose("parse error",r)}}ondecoded(e){Rt(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,r){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new An(this,e,r),this.nsps[e]=n),n}_destroy(e){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(e){const r=this.encoder.encode(e);for(let n=0;n<r.length;n++)this.engine.write(r[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(s=>{s?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",s)):e.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Pe={};function ht(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const r=vi(t,e.path||"/socket.io"),n=r.source,s=r.id,i=r.path,o=Pe[s]&&i in Pe[s].nsps,l=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let u;return l?u=new tr(n,e):(Pe[s]||(Pe[s]=new tr(n,e)),u=Pe[s]),r.query&&!e.query&&(e.query=r.queryKey),u.socket(r.path,e)}Object.assign(ht,{Manager:tr,Socket:An,io:ht,connect:ht});window.GUILDSYNC_WEB=!0;const kr="guildsync-web-session";function Oi(){try{return JSON.parse(localStorage.getItem(kr)||"{}")||{}}catch{return{}}}function qi(t){localStorage.setItem(kr,JSON.stringify(t||{}))}function En(){localStorage.removeItem(kr)}async function Ii(){return!0}async function Ln(){return!0}async function Pi(){return!0}async function Fi(){return!0}async function Ui(){return!0}async function Gi(){return window.location.assign("/api/auth/discord/web-login"),!0}async function Vi(){var i,o,l,u,p,b,A,D;const e=Oi().token||localStorage.getItem("guildsync-web-token")||"";if(!e)return{logged_in:!1,allowed:!1,status_message:"Not logged in."};const r=await fetch("/api/auth/session",{headers:{Authorization:`Bearer ${e}`}}),n=await r.json().catch(()=>({}));if(!r.ok||n.ok===!1)return En(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:n.message||"Session expired. Please log in again."};const s={logged_in:!0,allowed:!0,token:e,user:n.user,discord_user_id:((i=n.user)==null?void 0:i.discord_user_id)||"",username:((o=n.user)==null?void 0:o.username)||"",global_name:((l=n.user)==null?void 0:l.global_name)||"",display_name:((u=n.user)==null?void 0:u.display_name)||((p=n.user)==null?void 0:p.global_name)||((b=n.user)==null?void 0:b.username)||"",avatar_url:((A=n.user)==null?void 0:A.avatar_url)||"",role:((D=n.user)==null?void 0:D.role)||"user",status_message:"Logged in."};return qi(s),s}async function Wi(){return En(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:"Logged out."}}async function Hi(){return Tt()}async function zi(){return Tt()}async function Tt(){return{watching:!1,directory:"Web upload mode",files:[{key:"banking",fileName:"GuildSyncBanking.lua",enabled:!0,filePath:"Upload through Reports & Admin"},{key:"roster",fileName:"GuildSyncRoster.lua",enabled:!0,filePath:"Upload through Reports & Admin"}]}}async function ji(){return Tt()}async function Yi(){throw new Error("File watching is not available in the web interface. Use Reports & Admin \u2192 Upload ESO SavedVariables.")}async function Ki(){return{ok:!0}}async function Ji(){throw new Error("File watching is not available in the web interface. Use Reports & Admin \u2192 Upload ESO SavedVariables.")}async function Qi(){return{ok:!0}}const ot=new Map;function Fe(t,e){return ot.has(t)||ot.set(t,new Set),ot.get(t).add(e),()=>{var r;return(r=ot.get(t))==null?void 0:r.delete(e)}}const $t="1.0.3",Xi=30*60*1e3,Rn="guildsync-pending-banking-uploads",Mn="guildsync-pending-roster-uploads",m=60*1e3,Tn=7e3,$n=1400,Dn=2400,Zi=4e3,eo=38,Nn=document.querySelector("#app");let Wr=null,Ue=null,Hr=!1,Ze=!1,mt=null,Ht=!1,zt=!1,te=null,oe=new Map,de=new Map,M="",ye=!1,be=!1,Ve=[],g={logged_in:!1,allowed:!1,status_message:""},c=null,P=[],Dt=null,ze=!1,bt=!1,kt="",we=new Set,Se=new Set,je="username",ue="asc",rr=null,nr=null,F=[],vt=null,ae=!1,zr=!1,wt="",sr=null,ir=null,fe=new Set,_e=new Set,j="",$="",L=-1,Le=!1,Ye="",C=[],ce="",re=[],ne=!1,K="",jt=null,I=-1,Ne=!1,Ce=[],X=!1,he="",Be=!1,Ke=[],Z=!1,me="",w=[],x=!1,O="",xe=!1,Nt="",Y=-1,le=!1,k=null,pe=[],Re=!1,Q="",et="",U=-1,Oe=!1,vr=null,We=null;const wr=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let V=[],B="biweekly",Cn=null,ke=!1,ge=!1,tt="biweekly",J=!1,St=!1,z="",T={accountName:"",note:"",tickets:""},qe="",H=-1,or={biweekly:0,monthly:0};const to=1780786800,ro=1781996400,no=14*24*60*60,so=28*24*60*60,io=60*60,_t=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let S=_t[0].id;function oo(){Nn.innerHTML=`
    <main class="splash-screen">
      <img src="${qs}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await Ii(),await ao(),Bn(),He(),await Ee()},5e3)}async function ao(){try{g=await Vi()}catch(t){g={logged_in:!1,allowed:!1,status_message:""},f("session-error",v(t),{ttlMs:m})}}function Bn(){Nn.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${Is}" alt="" class="title-icon" />
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
            <img src="${Ps}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${a($t)}</div>
            </div>
          </div>
          <div id="discordArea" class="discord-area"></div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${xn()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content" aria-live="polite">
          ${On()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await Fi()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await Ln(),await Ui()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await Pi()}),gt(),In(),Es(),ds(),gs(),Gn(),ls(),ss(),is(),os(),Kn(),mo(),ie(),$e(),Hr||(window.addEventListener("resize",()=>{Os(),Bs()}),Lc(),Hr=!0)}function xn(){return _t.map(t=>{const e=t.id===S;return`
        <button
          class="guildsync-tab${e?" active":""}"
          type="button"
          data-tab-id="${h(t.id)}"
          aria-selected="${e?"true":"false"}"
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${co(t.icon)}</span>
          <span class="guildsync-tab-label">${a(t.label)}</span>
        </button>
      `}).join("")}function co(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function On(){const t=_t.find(r=>r.id===S)||_t[0];let e="";return t.id==="discord-members"?e=po():t.id==="eso-members"?e=go():t.id==="more"?e=Da():t.id==="settings"?e=Co():e=`
      <div class="guildsync-tab-panel" data-active-tab="${h(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${a(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${J?ba():""}
    ${le?ua():""}
    ${Ne?Bo():""}
    ${Be?Fo():""}
    ${xe?Wo():""}
    ${Oe?ho():""}
  `}function lo(){return Oe||Le||J||le||Ne||Be||xe||ge}function uo(){return Oe?!1:xe?(dr(),!0):Be?(lr(),!0):Ne?(cr(),!0):le?(Te(),!0):J?(J=!1,d(),!0):Le?(Le=!1,d(),!0):ge?(ge=!1,d(),!0):!1}function fo(t){t.key==="Escape"&&uo()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",fo,!0),window.guildSyncGlobalModalEscapeAttached=!0);function qn(t={}){return new Promise(e=>{We&&We(!1),Oe=!0,vr={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},We=e,d()})}function At(t=!1){const e=We;We=null,Oe=!1,vr=null,e&&e(t===!0),d()}function ho(){const t=vr||{};return`
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
          <button id="acceptGuildSyncConfirmButton" class="guildsync-confirm-button guildsync-confirm-accept ${h(t.confirmClass||"danger")}" type="button">${a(t.confirmLabel||"Confirm")}</button>
        </div>
      </div>
    </div>
  `}function jr(t){var n,s,i,o;const e=(s=(n=t.target).closest)==null?void 0:s.call(n,"#cancelGuildSyncConfirmButton"),r=(o=(i=t.target).closest)==null?void 0:o.call(i,"#acceptGuildSyncConfirmButton");if(!(!e&&!r)){if(t.preventDefault(),t.stopPropagation(),e){At(!1);return}r&&At(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",jr,!0),document.addEventListener("pointerup",jr,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function mo(){if(!Oe)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=n=>{n.preventDefault(),n.stopPropagation(),At(!1)}),e&&(e.onclick=n=>{n.preventDefault(),n.stopPropagation(),At(!0)});const r=document.querySelector(".guildsync-confirm-overlay");r&&(r.onclick=n=>{n.target===r&&(n.preventDefault(),n.stopPropagation())})}function In(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(lo())return;const e=t.dataset.tabId;!e||e===S||(S=e,d())})})}function d(t={}){const e=document.querySelector(".guildsync-tabs"),r=document.querySelector("#guildSyncTabContent");e&&(e.innerHTML=xn()),r&&(r.innerHTML=On()),In(),Es(),ds(),gs(),Gn(),ls(),ss(),is(),os(),Kn(),t.restoreDiscordSearchFocus&&ec(),t.restoreRosterSearchFocus&&tc(),S==="discord-members"&&(c==null?void 0:c.connected)&&P.length===0&&!ze&&Cr({silent:!0}),S==="eso-members"&&(c==null?void 0:c.connected)&&F.length===0&&!ae&&!zr&&(zr=!0,rt({silent:!0})),S==="more"&&(c==null?void 0:c.connected)&&V.length===0&&!ke&&xt({silent:!0}),(S==="discord-members"||S==="eso-members"||S==="settings")&&(c==null?void 0:c.connected)&&R()&&w.length===0&&!x&&_r({silent:!0})}function po(){const t=Qa(),e=rc(),r=Array.from(we),n=Array.from(Se);return`
    <div class="guildsync-tab-panel discord-member-panel" data-active-tab="discord-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Discord Member Data</h2>
          <p class="discord-data-subtitle">Manage and view Discord member information.</p>
        </div>
        <div class="discord-data-actions">
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${a(Rs(Dt))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${ze||bt?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${bt?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${h(kt)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(s=>!we.has(s)).map(s=>`<option value="${h(s)}">${a(s)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All roles</span>':r.map(s=>oc(s)).join("")}
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
              ${wr.filter(s=>!Se.has(s.id)).map(s=>`<option value="${h(s.id)}">${a(s.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(s=>Pn("discord",s)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${ct("username","Username")}
                ${ct("global_name","Global Name")}
                ${ct("server_nickname","Server Nickname")}
                ${ct("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(s=>nc(s)).join(""):sc()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `}function go(){const t=wo(),e=Ao(),r=Array.from(fe),n=Array.from(_e);return`
    <div class="guildsync-tab-panel eso-roster-panel" data-active-tab="eso-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Guild Roster</h2>
          <p class="discord-data-subtitle">Current ESO roster imported from GuildSyncRoster.</p>
        </div>
        <div class="discord-data-actions">
          <span class="discord-last-refresh">Last Refresh: ${a(Ea(vt))}</span>
          <button id="openRosterHistoryButton" class="clear-discord-filters-button" type="button">Lookup Rank Historical Data</button>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${ae?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${ae?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${h(wt)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(s=>!fe.has(s)).map(s=>`<option value="${h(s)}">${a(s)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All ranks</span>':r.map(s=>Eo(s)).join("")}
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
              ${wr.filter(s=>!_e.has(s.id)).map(s=>`<option value="${h(s.id)}">${a(s.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(s=>Pn("roster",s)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${at("account_name","Account Name")}
                ${at("rank","Rank")}
                ${at("joined","Joined")}
                ${at("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map((s,i)=>yo(s,i)).join(""):bo()}
            </tbody>
          </table>
        </div>
      </div>
      ${Le?Mo():""}
    </div>
  `}function yo(t,e=-1){const r=ko(t.rank||""),n=r?` style="color: ${r};"`:"";return`
    <tr class="eso-roster-row${e===L?" roster-search-active-row":""}"${n} data-roster-row-index="${h(String(e))}" data-eso-account-name="${h(t.account_name||"")}">
      <td>${a(t.account_name||"")}</td>
      <td>${Sr(t.rank||"")}</td>
      <td>${a(Ct(t.joined))}</td>
      <td class="member-link-action-cell">${Zn({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function bo(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">${a(ae?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function ko(t){const e=String(t||"").trim(),r=Br(e);return Ot(r==null?void 0:r.role_color)}function Sr(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${a(e)}</span>`}function vo(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":Sr(e)}function wo(){const t=wt.trim().toLowerCase(),e=F.filter(r=>{const n=String(r.rank||"").trim();if(fe.size>0&&!fe.has(n)||!Un(_e,ar(r)))return!1;if(!t)return!0;const s=Ct(r.joined),i=fs(r.joined),o=ar(r),l=getRosterMemberLinkTooltip(r.account_name||"");return[r.account_name,n,s,i,r.joined,o,l].map(p=>String(p||"").toLowerCase()).join(" ").includes(t)});return So(e)}function So(t){if(!j||!$)return t;const e=$==="desc"?-1:1;return[...t].sort((r,n)=>{const s=Yr(r,j),i=Yr(n,j),o=s.localeCompare(i,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:String(r.account_name||"").localeCompare(String(n.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function Yr(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const r=Number(t.joined||0);return Number.isFinite(r)&&r>0?String(r).padStart(16,"0"):""}if(e==="linked"){const r=ar(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[r]||"9"} ${r} ${getRosterMemberLinkTooltip(t.account_name||"")}`}return String(t.account_name||"")}function _o(t){const r=new Set(["account_name","rank","joined","linked"]).has(t)?t:"account_name";j!==r?(j=r,$="asc"):$==="asc"?$="desc":$==="desc"?(j="",$=""):(j=r,$="asc"),L=-1,d()}function at(t,e,r=""){const n=j===t&&Boolean($),s=n?$==="asc"?"ascending":"descending":"none",i=n?$==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${h(r)}" aria-sort="${h(s)}">
      <button
        class="discord-sort-header roster-sort-header${n?" active":""}"
        type="button"
        data-roster-sort-column="${h(t)}"
        title="Sort ${h(e)}${n&&$==="asc"?" descending":n&&$==="desc"?" not sorted":" ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function Ao(){return Array.from(new Set(F.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function Eo(t){const e=Br(t),r=Ot(e==null?void 0:e.role_color),n=Or(r),s=xr(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-roster-rank-filter="${h(t)}"
      style="${s}"
      title="Remove ${h(t)} filter"
    >
      <span>${a(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Lo(t){const e=wr.find(r=>r.id===t);return e?e.label:t}function Pn(t,e){const r=t==="roster"?"roster":"discord",n=Lo(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${r}-link-status-filter="${h(e)}"
      title="Remove ${h(n)} link filter"
    >
      <span>${a(n)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Fn(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked"&&String(r.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function Ro(t){return Fn(Er(t==null?void 0:t.discord_id))}function ar(t){return Fn(Ar(t==null?void 0:t.account_name))}function Un(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function Mo(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${h(Ye)}" />
        </div>

        ${K?`<div class="discord-data-error">${a(K)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${To()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${ce?`: ${a(ce)}`:""}</div>
            ${$o()}
          </div>
        </div>
      </div>
    </div>
  `}function To(){return ne&&C.length===0?'<div class="roster-history-muted">Searching...</div>':C.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${C.map((t,e)=>`
        <button class="roster-history-match${e===I||t.account_name===ce?" is-selected":""}" type="button" data-roster-history-account="${h(t.account_name)}">
          <span>${a(t.account_name)}</span>
          <strong>${a(t.rank||"")}</strong>
          ${e===I?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function $o(){return ce?ne&&re.length===0?'<div class="roster-history-muted">Loading history...</div>':re.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${re.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${a(fs(t.timestamp))}</td>
              <td>${a(t.event_type||"")}</td>
              <td>${vo(t.rank)}</td>
              <td>${a(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function Do(){return typeof window<"u"&&window.GUILDSYNC_WEB===!0}function No(){return Do()?`
    <article class="report-option-card web-upload-card">
      <div class="report-option-copy">
        <h3>Upload ESO SavedVariables</h3>
        <p>Web users can upload GuildSyncBanking.lua or GuildSyncRoster.lua directly. Files are parsed by the backend and processed only for authenticated GuildSync users.</p>
        <div class="web-upload-controls">
          <label class="web-upload-field">
            <span>GuildSyncBanking.lua</span>
            <input id="webBankingSavedVarsUpload" type="file" accept=".lua,text/plain" />
          </label>
          <label class="web-upload-field">
            <span>GuildSyncRoster.lua</span>
            <input id="webRosterSavedVarsUpload" type="file" accept=".lua,text/plain" />
          </label>
        </div>
      </div>
    </article>
  `:""}function Co(){return`
    <div class="guildsync-tab-panel reports-panel" data-active-tab="settings">
      <div class="discord-data-header reports-header">
        <div>
          <h2 class="discord-data-title">Reports & Admin</h2>
          <p class="discord-data-subtitle">Run GuildSync reports and administrative review tools. More options can be added here later.</p>
        </div>
      </div>

      <div class="reports-scroll-area">
        ${No()}
        <section class="reports-list" aria-label="Available reports">
          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Associates Promotion Eligible</h3>
              <p>Shows Associates who have been in the guild at least two weeks, have purchased at least one raffle ticket, and are linked to Discord. Also shows otherwise eligible Associates who still need a Discord link reviewed.</p>
            </div>
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${X?"disabled":""}>
              ${X?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${Z?"disabled":""}>
              ${Z?"Running...":"Run"}
            </button>
          </article>
        </section>

        <article class="report-option-card">
          <div class="report-option-copy">
            <h3>ESO / Discord Member Links</h3>
            <p>Review automatic ESO-to-Discord links, accept candidate matches, unlink blocked matches, or run the matcher again after roster or Discord refreshes.</p>
          </div>
          <button id="runMemberLinksReportButton" class="refresh-discord-button report-run-button" type="button" ${x?"disabled":""}>
            ${x?"Loading...":"Run"}
          </button>
        </article>
      </div>
    </div>
  `}function Gn(){var t,e,r,n,s;S==="settings"&&((t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>Vn()),(e=document.querySelector("#runDiscordRankAuditReportButton"))==null||e.addEventListener("click",()=>Po()),(r=document.querySelector("#runMemberLinksReportButton"))==null||r.addEventListener("click",()=>Vo()),(n=document.querySelector("#webBankingSavedVarsUpload"))==null||n.addEventListener("change",i=>Kr(i,"banking")),(s=document.querySelector("#webRosterSavedVarsUpload"))==null||s.addEventListener("change",i=>Kr(i,"roster")))}async function Kr(t,e){var s;const r=t.currentTarget,n=((s=r==null?void 0:r.files)==null?void 0:s[0])||null;if(!!n)try{const i=await n.text(),o=await fetch(`/api/guildsync/upload-savedvars/${encodeURIComponent(e)}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${(g==null?void 0:g.token)||""}`},body:JSON.stringify({file_name:n.name,raw_lua_text:i})}),l=await o.json().catch(()=>({}));if(!o.ok||l.ok===!1)throw new Error(l.error||l.message||`Upload failed with HTTP ${o.status}.`);f(`web-upload-${e}-success`,l.message||`${n.name} uploaded and processed.`,{ttlMs:m}),e==="banking"?await requestBankingData():e==="roster"&&(await requestRosterData(),await refreshMemberLinksData({silent:!0}))}catch(i){f(`web-upload-${e}-error`,v(i),{ttlMs:m})}finally{r&&(r.value="")}}function Vn(){Ne=!0,he="",d(),cs()}function cr(){Ne=!1,he="",d()}function Bo(){const t=xo(),e=Oo(),r=Ce.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${X?"disabled":""}>${X?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(r))} total row${r===1?"":"s"}</span>
        </div>

        ${he?`<div class="discord-data-error">${a(he)}</div>`:""}

        <div class="report-results-content">
          ${X&&r===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!X&&r===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${r>0?Jr("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${r>0?Jr("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${a(Hn())}</textarea>
      </div>
    </div>
  `}function xo(){return Ce.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function Oo(){return Ce.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function Jr(t,e,r,n){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${a(t)}</h4>
          <p>${a(e)}</p>
        </div>
        <span>${a(String(r.length))} row${r.length===1?"":"s"}</span>
      </div>
      ${r.length>0?qo(r):`<div class="roster-history-muted report-section-empty">${a(n)}</div>`}
    </section>
  `}function qo(t=Ce){return`
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
              <td>${Sr(e.rank||"")}</td>
              <td>${a(Ct(e.joined))}</td>
              <td>${a(Bt(e.purchased_tickets||0))}</td>
              <td>${a(Wn(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Wn(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function Hn(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Discord Link"]];for(const e of Ce){const r=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([r,e.account_name||"",e.rank||"",Ct(e.joined),Bt(e.purchased_tickets||0),Wn(e)])}return t.map(e=>e.map(Mr).join("	")).join(`
`)}async function Io(){const t=Hn();if(await Tr(t)){f("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:m});return}const r=document.querySelector("#associateTicketReportTsv");r&&(r.focus(),r.select()),f("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function Po(){Be=!0,me="",d(),as()}function lr(){Be=!1,me="",d()}function Fo(){const t=Ke.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${Z?"disabled":""}>${Z?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${me?`<div class="discord-data-error">${a(me)}</div>`:""}

        <div class="report-results-content">
          ${Z&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!Z&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?Uo(Ke):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${a(Yn())}</textarea>
      </div>
    </div>
  `}function Uo(t=Ke){return`
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
              <td>${a(zn(e))}</td>
              <td>${a(e.discord_rank||"No matching rank role")}</td>
              <td>${a(e.eso_accounts||"No linked ESO account")}</td>
              <td>${a(e.eso_rank||"None")}</td>
              <td>${a(jn(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function zn(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function jn(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function Yn(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of Ke)t.push([zn(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",jn(e)]);return t.map(e=>e.map(Mr).join("	")).join(`
`)}async function Go(){const t=Yn();if(await Tr(t)){f("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:m});return}const r=document.querySelector("#discordRankAuditReportTsv");r&&(r.focus(),r.select()),f("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function Vo(){xe=!0,O="",d(),w.length===0&&!x&&_r({silent:!0})}function dr(){xe=!1,Nt="",Y=-1,d()}function Wo(){return`
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
          <button id="refreshMemberLinksButton" class="clear-discord-filters-button" type="button" ${x?"disabled":""}>Refresh Links</button>
          <button id="runMemberAutoLinkButton" class="refresh-discord-button" type="button" ${x?"disabled":""}>${x?"Running...":"Run Auto-Linking"}</button>
          <span class="roster-history-muted">${a(String(w.length))} link/candidate row${w.length===1?"":"s"}</span>
        </div>

        <input
          id="memberLinksReportSearchInput"
          class="member-links-report-search-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="Search ESO or Discord member links..."
          value="${h(Nt)}"
        />

        ${O?`<div class="discord-data-error member-links-report-error">${a(O)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${Yo()}
        </div>
      </div>
    </div>
  `}function Kn(){var r,n,s;if(!xe)return;(r=document.querySelector("#closeMemberLinksReportButton"))==null||r.addEventListener("click",dr),(n=document.querySelector("#refreshMemberLinksButton"))==null||n.addEventListener("click",()=>_r()),(s=document.querySelector("#runMemberAutoLinkButton"))==null||s.addEventListener("click",()=>Qo());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",Ko),t.addEventListener("keydown",Jo),Qn()),document.querySelectorAll("[data-accept-member-candidate]").forEach(i=>{i.addEventListener("click",()=>Xn(i.dataset.acceptMemberCandidate||"",i.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(i=>{i.addEventListener("click",()=>Xo(i.dataset.unlinkMemberLink||"",i.dataset.unlinkMemberLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",i=>{i.target===e&&dr()})}function Qr(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),r=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();return e==="candidate"||r==="fuzzy"?0:e==="linked"?2:1}function Xr(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Ho(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id,t==null?void 0:t.link_status,t==null?void 0:t.link_method,t==null?void 0:t.match_reason,t==null?void 0:t.match_field,Et(t)].filter(Boolean).join(" ")}function zo(t){return[...Array.isArray(t)?t:[]].sort((e,r)=>{const n=Qr(e)-Qr(r);if(n!==0)return n;const s=Xr(e).localeCompare(Xr(r),void 0,{sensitivity:"base"});return s!==0?s:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((r==null?void 0:r.discord_user_id)||""),void 0,{sensitivity:"base"})})}function jo(t){const e=Et(t);let r="";e==="Username"?r=(t==null?void 0:t.discord_username)||"":e==="Global Name"?r=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(r=(t==null?void 0:t.discord_server_nickname)||""),r||(r=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const n=e?` <span class="member-link-report-match-field">(${a(e)})</span>`:"";return`<span class="member-link-report-discord-name">${a(r)}</span>${n}`}function Yo(){return x&&w.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(w)||w.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${zo(w).map(e=>{var i;const r=String(e.link_status||"").trim().toLowerCase(),n=String(e.link_method||"").trim().toLowerCase(),s=jo(e);return`
              <tr data-member-links-report-row data-member-links-report-search="${h(Ho(e))}">
                <td>${a(e.eso_account_name||"")}</td>
                <td>${s}</td>
                <td class="member-links-status-col">${a(r||"")}</td>
                <td class="member-links-method-col">${a(n||"")}${Number(e.locked||0)===1?" \u{1F512}":""}</td>
                <td class="member-links-action-col">
                  <div class="member-link-actions">
                    ${r==="candidate"?`<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${h(e.eso_account_name||"")}" data-accept-member-candidate-discord-id="${h(e.discord_user_id||"")}" aria-label="Accept candidate link" title="Accept candidate link">\u2713</button>`:""}
                    ${r==="linked"?`<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${h(e.eso_account_name||"")}" data-unlink-member-link-discord-id="${h(e.discord_user_id||"")}" aria-label="Unlink this ESO/Discord pair" title="Unlink this ESO/Discord pair">\u{1F5D1}</button>`:""}
                  </div>
                </td>
                <td class="member-links-confidence-col">${a(String((i=e.match_confidence)!=null?i:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function Jn(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function Zr(t){const e=Jn();if(e.forEach(n=>n.classList.remove("member-links-report-row-active")),e.length===0){Y=-1;return}Y=Math.max(0,Math.min(t,e.length-1));const r=e[Y];r.classList.add("member-links-report-row-active"),r.scrollIntoView({block:"nearest"})}function Qn(){const t=Me(Nt),e=[...document.querySelectorAll("[data-member-links-report-row]")];let r=0;e.forEach(s=>{const i=Me(s.dataset.memberLinksReportSearch||s.textContent||""),o=!t||i.includes(t);s.hidden=!o,s.classList.remove("member-links-report-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinksReportSearchEmpty");n&&(n.hidden=r!==0),Y=-1}function Ko(t){Nt=t.target.value||"",Qn()}function Jo(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Jn();if(e.length===0)return;if(t.key==="ArrowDown"){const n=Y<0?0:Y+1;Zr(n>=e.length?e.length-1:n);return}const r=Y<0?e.length-1:Y-1;Zr(r<0?0:r)}async function _r(t={}){if(!(c!=null&&c.connected)||!g.logged_in){O="You must be logged in and connected to load member links.",d();return}x=!0,O="",t.silent||d();try{const e=await _("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");w=Array.isArray(e.links)?e.links:[]}catch(e){O=v(e)}finally{x=!1,d()}}async function Qo(){if(!(c!=null&&c.connected)||!g.logged_in){O="You must be logged in and connected to run auto-linking.",d();return}x=!0,O="",d();try{const t=await _("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");w=Array.isArray(t.links)?t.links:[],f("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:m})}catch(t){O=v(t)}finally{x=!1,d()}}async function Xn(t,e=""){try{const r=await _("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to accept candidate.");w=Array.isArray(r.links)?r.links:w,f("member-link-accepted",r.message||"Candidate accepted as a link.",{ttlMs:m})}catch(r){O=v(r),f("member-link-accept-error",O,{ttlMs:m})}}async function Xo(t,e=""){if(!!await qn({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const n=await _("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to unlink member.");w=Array.isArray(n.links)?n.links:w,f("member-link-unlinked",n.message||"Member link removed.",{ttlMs:m})}catch(n){O=v(n)}d()}}function ve(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function Ar(t){const e=ve(t);return e?w.filter(r=>ve(r.eso_account_name)===e):[]}function Er(t){const e=String(t||"").trim();return e?w.filter(r=>String(r.discord_user_id||"").trim()===e):[]}function Zo(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const r=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked");if(r.length>0){const s=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(s)return s;const i=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return i||r[0]}const n=e.find(s=>String(s.link_status||"").trim().toLowerCase()==="candidate");return n||e[0]}function ea(t){return`${ve(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function Lr(){return k?k.mode==="discord-to-eso"?Er(k.discordUserId):Ar(k.esoAccountName):[]}function ta(t){const e=String(t||"").trim(),r=P.find(n=>String(n.discord_id||"").trim()===e);return r&&(r.server_nickname||r.global_name||r.username||r.discord_id)||e}function ra(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?Er(t.discordUserId):Ar(t.esoAccountName),n=Zo(r),s=String((n==null?void 0:n.link_status)||"").trim().toLowerCase(),i=r.filter(l=>String(l.link_status||"").trim().toLowerCase()==="linked").length,o=r.filter(l=>String(l.link_status||"").trim().toLowerCase()==="candidate").length;return i>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?i===1?n.eso_account_name:`${i} ESO accounts`:i===1?n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member":`${i} Discord accounts`}`}:s==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?n.eso_account_name:n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member"}`}:s==="blocked"||Number((n==null?void 0:n.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function Zn(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,n=ra(t);return`
    <button
      class="member-link-status-dot member-link-status-${h(n.className)}"
      type="button"
      title="${h(n.title)}"
      aria-label="${h(n.label)}"
      data-open-member-link-dialog="${h(e)}"
      data-member-link-value="${h(r||"")}"
    ></button>
  `}function na(){return k?k.mode==="discord-to-eso"?ta(k.discordUserId):k.esoAccountName||"":""}function es(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function Et(t){const e=es((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const r=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(r.includes("discord_username")||r.includes("username"))return"Username";if(r.includes("discord_display_name")||r.includes("global")||r.includes("display"))return"Global Name";if(r.includes("discord_server_nickname")||r.includes("server")||r.includes("nickname"))return"Server Nickname";const n=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(n==="exact"||n==="fuzzy"){const s=(t==null?void 0:t.eso_account_name)||"",i=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const l of i){const u=sa(s,l.value);(!o||u>o.score)&&(o={...l,score:u})}if(o&&o.score>0)return o.field}return""}function Me(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function sa(t,e){const r=Me(t),n=Me(e);if(!r||!n)return 0;if(r===n)return 100;if((r.includes(n)||n.includes(r))&&Math.min(r.length,n.length)>=4)return 88;const s=Math.abs(r.length-n.length),i=[...r].findIndex((l,u)=>l!==n[u]),o=i===-1?Math.min(r.length,n.length):i;return Math.max(0,Math.min(75,Math.round(o*10-s*3)))}function ia(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function oa(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function aa(t){var u;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",r=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",n=String(t.link_status||"").trim().toLowerCase(),s=n==="linked",i=n==="candidate",o=s?"Current Link":i?"Suggested Link":"Blocked Link",l=s?`<button
        class="member-link-trash-button"
        type="button"
        aria-label="Unlink this ESO/Discord pair"
        title="Unlink this ESO/Discord pair"
        data-unlink-dialog-member-link
        data-unlink-eso-account="${h(t.eso_account_name||"")}"
        data-unlink-discord-user-id="${h(t.discord_user_id||"")}"
      >\u{1F5D1}</button>`:i?`<button
          class="member-link-approve-button"
          type="button"
          aria-label="Approve suggested link"
          title="Approve suggested link"
          data-accept-dialog-member-candidate="${h(t.eso_account_name||"")}"
          data-accept-dialog-discord-user-id="${h(t.discord_user_id||"")}"
        >\u2713</button>`:"";return`
    <div class="member-link-current-card">
      <div class="member-link-current-details">
        <div class="member-link-current-kind">${a(o)}</div>
        <div><span>ESO:</span> ${a(t.eso_account_name||"")}</div>
        <div><span>Discord:</span> ${a(e)}</div>
        <div><span>Status:</span> ${a(ia(t.link_status))} \xB7 ${a(oa(t.link_method))} \xB7 ${a(String((u=t.match_confidence)!=null?u:""))}% \xB7 ${a(r)}</div>
        ${Et(t)?`<div><span>Matched:</span> Matched on ${a(Et(t))}</div>`:""}
      </div>
      ${l}
    </div>
  `}function ca(){const t=Lr();return t.length?[...t].sort((r,n)=>{var u,p;const s=String(r.link_status||"").trim().toLowerCase(),i=String(n.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},l=((u=o[s])!=null?u:9)-((p=o[i])!=null?p:9);return l!==0?l:Number(n.match_confidence||0)-Number(r.match_confidence||0)}).map(r=>aa(r)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function la(){if(Re)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(Q)return`<div class="discord-data-error">${a(Q)}</div>`;if(!Array.isArray(pe)||pe.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(Lr().map(r=>ea(r))),e=[...pe].filter(r=>{const n=(k==null?void 0:k.mode)==="discord-to-eso"?`${ve(r.account_name)}::${String(k.discordUserId||"").trim()}`:`${ve(k==null?void 0:k.esoAccountName)}::${String(r.discord_id||"").trim()}`;return!t.has(n)}).sort((r,n)=>{const s=Number(n.confidence||0)-Number(r.confidence||0);return s!==0?s:en(r).localeCompare(en(n),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(r=>da(r)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function en(t){return((k==null?void 0:k.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function da(t,e={}){var b;const r=(k==null?void 0:k.mode)||"",n=r==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",s=es(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),i=r==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[i,s?`Matched on ${s}`:""].filter(Boolean).join(" \u2022 "),l=r==="discord-to-eso"?t.account_name:t.discord_id,u=e.disabled===!0,p=[n,i,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${h(l||"")}" data-member-link-option-search="${h(p)}" ${u?"disabled":""}>
      <span class="member-link-option-name">${a(n||"")}</span>
      <span class="member-link-option-subtitle">${a(o||"")}</span>
      <span class="member-link-option-confidence">${a(String((b=t.confidence)!=null?b:0))}%</span>
    </button>
  `}function ua(){const t=(k==null?void 0:k.mode)||"",e=na(),r=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
            ${ca()}
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
              value="${h(et)}"
            />
            ${la()}
          </section>
        </div>

      </div>
    </div>
  `}async function ts(t,e){if(!(c!=null&&c.connected)||!R()){f("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:m});return}le=!0,k=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},pe=[],Re=!0,Q="",et="",U=-1,d();try{if(!Array.isArray(w)||w.length===0){const s=await _("guildsync:request-member-links",{},3e4);s!=null&&s.ok&&(w=Array.isArray(s.links)?s.links:[])}const n=await _("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load link suggestions.");pe=Array.isArray(n.options)?n.options:[]}catch(r){Q=v(r)}finally{Re=!1,d()}}function Te(){document.removeEventListener("keydown",ur),le=!1,k=null,pe=[],Re=!1,Q="",et="",U=-1,d()}function rs(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function tn(t){const e=rs();if(e.forEach(n=>n.classList.remove("member-link-option-row-active")),e.length===0){U=-1;return}U=Math.max(0,Math.min(t,e.length-1));const r=e[U];r.classList.add("member-link-option-row-active"),r.scrollIntoView({block:"nearest"})}function ns(){const t=Me(et),e=[...document.querySelectorAll(".member-link-option-row")];let r=0;e.forEach(s=>{const i=Me(s.dataset.memberLinkOptionSearch||s.textContent||""),o=!t||i.includes(t);s.hidden=!o,s.classList.remove("member-link-option-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinkSuggestionSearchEmpty");n&&(n.hidden=r!==0),U=-1}function fa(t){et=t.target.value||"",ns()}function ha(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=rs();if(e.length===0)return;if(t.key==="ArrowDown"){const n=U<0?0:U+1;tn(n>=e.length?e.length-1:n);return}const r=U<0?e.length-1:U-1;tn(r<0?0:r)}function ur(t){!le||t.key==="Escape"&&(t.preventDefault(),Te())}async function ma(t){if(!(!k||!t))try{const e=k.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:k.discordUserId}:{esoAccountName:k.esoAccountName,discordUserId:t},r=await _("guildsync:manual-link-member",e,3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to link members.");w=Array.isArray(r.links)?r.links:w,f("member-link-saved",r.message||"Member link saved.",{ttlMs:m}),Te()}catch(e){Q=v(e),d()}}async function pa(t,e=""){await Xn(t,e),Te()}async function ga(){if(!!k){Re=!0,Q="",d();try{const t=k.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:k.discordUserId}:{mode:"eso-to-discord",accountName:k.esoAccountName},e=await _("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");pe=Array.isArray(e.options)?e.options:[]}catch(t){Q=v(t)}finally{Re=!1,d()}}}async function ya(t="",e=""){const r=Lr().find(s=>ve(s.eso_account_name)===ve(t)&&String(s.discord_user_id||"").trim()===String(e||"").trim());if(!(!r||!await qn({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const s=await _("guildsync:manual-unlink-member",{esoAccountName:r.eso_account_name,discordUserId:r.discord_user_id},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to unlink member.");w=Array.isArray(s.links)?s.links:w,f("member-link-unlinked",s.message||"Member link removed.",{ttlMs:m}),await ga()}catch(s){Q=v(s),d()}}function ss(){var r;if(!le)return;document.removeEventListener("keydown",ur),document.addEventListener("keydown",ur),(r=document.querySelector("#closeMemberLinkDialogButton"))==null||r.addEventListener("click",Te);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",fa),t.addEventListener("keydown",ha),ns()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(n=>{n.addEventListener("click",()=>ya(n.dataset.unlinkEsoAccount||"",n.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(n=>{n.addEventListener("click",()=>ma(n.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(n=>{n.addEventListener("click",()=>pa(n.dataset.acceptDialogMemberCandidate||"",n.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",n=>{n.target===e&&Te()})}function is(){var e,r,n;if(!Ne)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",cr),(r=document.querySelector("#rerunAssociateTicketReportButton"))==null||r.addEventListener("click",()=>cs()),(n=document.querySelector("#copyAssociateTicketReportGridButton"))==null||n.addEventListener("click",()=>Io());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",s=>{s.target===t&&cr()})}function os(){var e,r,n;if(!Be)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",lr),(r=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||r.addEventListener("click",()=>as()),(n=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||n.addEventListener("click",()=>Go());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",s=>{s.target===t&&lr()})}async function as(){if(!(c!=null&&c.connected)||!R()){me="You must be logged in and connected to run this report.",d();return}Z=!0,me="",d();try{const t=await _("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Ke=Array.isArray(t.rows)?t.rows:[]}catch(t){me=v(t)}finally{Z=!1,d()}}async function cs(){if(!(c!=null&&c.connected)||!R()){he="You must be logged in and connected to run this report.",d();return}X=!0,he="",d();try{const t=await _("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Ce=Array.isArray(t.rows)?t.rows:[]}catch(t){he=v(t)}finally{X=!1,d()}}function fr(){const t=String(qe||"").trim().toLowerCase();return t?F.filter(e=>String(e.account_name||"").trim()).filter(e=>String(e.account_name||"").toLowerCase().includes(t)).slice().sort((e,r)=>{const n=String(e.account_name||"").toLowerCase(),s=String(r.account_name||"").toLowerCase(),i=n.startsWith(t)?0:1,o=s.startsWith(t)?0:1;return i!==o?i-o:n.localeCompare(s)}).slice(0,20):[]}function rn(t){const e=String(t||"").trim();T.accountName=e,qe=e,z="",d(),se("manualTicketAccountSearchInput")}function se(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const r=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(r,r)},0)}function ba(){const t=fr(),e=String(T.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Bi-Weekly Tickets</h3>
            <p>Add free/manual raffle tickets such as FFTG. These do not count as purchased tickets.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${z?`<div class="discord-data-error">${a(z)}</div>`:""}

        <div class="manual-ticket-form">
          <label class="manual-ticket-member-field">
            <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${h(qe)}" autocomplete="off" />
          </label>

          ${e?`<div class="roster-history-muted">Selected: ${a(e)}</div>`:""}

          <div class="roster-history-match-list manual-ticket-match-list">
            ${t.length===0?'<div class="roster-history-muted">No matching names</div>':t.map((r,n)=>`
                <button class="roster-history-match${n===H||r.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${h(r.account_name)}">
                  <span>${a(r.account_name)}</span>
                  <strong>${a(r.rank||"")}</strong>
                  ${n===H?"<small>Enter</small>":""}
                </button>
              `).join("")}
          </div>

          <div class="manual-ticket-entry-row">
            <label class="manual-ticket-note-field">
              <textarea id="manualTicketNoteInput" class="discord-search-input manual-ticket-note-input" rows="4" placeholder="Enter a reason such as FFTG">${a(T.note)}</textarea>
            </label>
            <label class="manual-ticket-count-field">
              <div class="manual-ticket-number-wrap">
                <input id="manualTicketCountInput" class="discord-search-input manual-ticket-count-input" type="number" min="1" step="1" inputmode="numeric" placeholder="# Tickets" value="${h(T.tickets)}" />
                <div class="manual-ticket-number-buttons" aria-hidden="true">
                  <button id="manualTicketCountUpButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2303</button>
                  <button id="manualTicketCountDownButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2304</button>
                </div>
              </div>
            </label>
          </div>
          <div class="manual-ticket-actions">
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${St?"disabled":""}>${St?"Saving...":"Add Manual Tickets"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function ls(){var s,i,o,l,u;if(!J)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{J=!1,d()});const t=document.querySelector("#manualTicketAccountSearchInput");t&&(t.addEventListener("input",p=>{qe=p.target.value||"",T.accountName="",H=fr().length>0?0:-1,d(),se("manualTicketAccountSearchInput")}),t.addEventListener("keydown",p=>{const b=fr();if(p.key==="ArrowDown"||p.key==="ArrowUp"){if(b.length===0)return;p.preventDefault();const D=p.key==="ArrowDown"?1:-1;H=((H<0?0:H)+D+b.length)%b.length,d(),se("manualTicketAccountSearchInput");return}if(p.key!=="Enter")return;p.preventDefault();const A=b[H>=0?H:0];A!=null&&A.account_name&&rn(A.account_name)})),document.querySelectorAll("[data-manual-ticket-account]").forEach(p=>{p.addEventListener("click",()=>{rn(p.dataset.manualTicketAccount||"")})}),(i=document.querySelector("#manualTicketNoteInput"))==null||i.addEventListener("input",p=>{T.note=p.target.value||""});const e=document.querySelector("#manualTicketCountInput");e==null||e.addEventListener("input",p=>{const b=String(p.target.value||"").replace(/\D/g,"");p.target.value!==b&&(p.target.value=b),T.tickets=b});const r=p=>{const b=Number(T.tickets)||0,A=Math.max(1,b+p);T.tickets=String(A),e&&(e.value=T.tickets,e.focus())};(o=document.querySelector("#manualTicketCountUpButton"))==null||o.addEventListener("click",()=>r(1)),(l=document.querySelector("#manualTicketCountDownButton"))==null||l.addEventListener("click",()=>r(-1)),(u=document.querySelector("#saveManualBiweeklyTicketButton"))==null||u.addEventListener("click",()=>ka());const n=document.querySelector(".roster-history-overlay");n&&n.addEventListener("click",p=>{p.target===n&&(J=!1,d())})}async function ka(){const t=String(T.accountName||"").trim(),e=String(T.note||"").trim(),r=Number(T.tickets);if(!t){z="Choose a guild member.",d();return}if(!e){z="Enter a reason or note.",d();return}if(!Number.isFinite(r)||r<=0){z="Enter the number of tickets to add.",d();return}St=!0,z="",d();try{const n=await _("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,tickets:Math.floor(r)},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to add manual ticket entry.");J=!1,T={accountName:"",note:"",tickets:""},qe="",H=-1,await xt({silent:!0}),f("manual-ticket-added",n.message||"Manual ticket entry added.",{ttlMs:m})}catch(n){z=v(n)}finally{St=!1,d()}}function ds(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>rt());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{Le=!0,K="",d()});const r=document.querySelector("#rosterMemberSearch");r&&(r.addEventListener("input",o=>{wt=o.target.value||"",sr=o.target.selectionStart,ir=o.target.selectionEnd,L=-1,d({restoreRosterSearchFocus:!0})}),r.addEventListener("keydown",va)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{_o(o.dataset.rosterSortColumn||"account_name")})});const n=document.querySelector("#rosterRankFilter");n&&n.addEventListener("change",o=>{const l=String(o.target.value||"").trim();l&&(fe.add(l),L=-1,d())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const l=o.dataset.removeRosterRankFilter||"";fe.delete(l),L=-1,d()})});const s=document.querySelector("#rosterLinkStatusFilter");s&&s.addEventListener("change",o=>{const l=String(o.target.value||"").trim();l&&(_e.add(l),L=-1,d())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const l=o.dataset.removeRosterLinkStatusFilter||"";_e.delete(l),L=-1,d()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>ts(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const i=document.querySelector("#clearRosterFiltersButton");i&&i.addEventListener("click",()=>{wt="",fe.clear(),_e.clear(),j="",$="",L=-1,d()}),wa()}function va(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){L=-1;return}t.preventDefault(),t.key==="ArrowDown"?L=L<0?0:Math.min(L+1,e.length-1):t.key==="ArrowUp"&&(L=L<0?e.length-1:Math.max(L-1,0)),e.forEach((n,s)=>{n.classList.toggle("roster-search-active-row",s===L)});const r=e[L];r&&typeof r.scrollIntoView=="function"&&r.scrollIntoView({block:"nearest",inline:"nearest"})}function wa(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{Le=!1,d()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",r=>{if(Ye=r.target.value||"",I=-1,!Ye.trim()){clearTimeout(jt),K="",C=[],ce="",re=[],ne=!1,d(),se("rosterHistorySearchInput");return}clearTimeout(jt),jt=setTimeout(()=>{Sa({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(C.length===0)return;r.preventDefault();const s=r.key==="ArrowDown"?1:-1;I=((I<0?0:I)+s+C.length)%C.length,d(),se("rosterHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=C[I>=0?I:0];n!=null&&n.account_name&&nn(n.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(r=>{r.addEventListener("click",()=>{nn(r.dataset.rosterHistoryAccount||"")})})}async function Sa(t={}){const e=Ye.trim();if(!e){K="",C=[],I=-1,ce="",re=[],ne=!1,d(),t.keepFocus&&se("rosterHistorySearchInput");return}ne=!0,K="",C=[],I=-1,ce="",re=[],d(),t.keepFocus&&se("rosterHistorySearchInput");try{const r=await _("guildsync:request-roster-rank-history",{query:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search roster rank history.");C=_a(r.matches),I=C.length>0?0:-1}catch(r){K=v(r)}finally{ne=!1,d(),t.keepFocus&&se("rosterHistorySearchInput")}}async function nn(t,e={}){const r=String(t||"").trim();if(!!r){ce=r,Ye=r,re=[],ne=!0,K="",d();try{const n=await _("guildsync:request-roster-stream-history",{account_name:r},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster stream history.");re=Aa(n.events)}catch(n){K=v(n)}finally{ne=!1,e.keepLoading||d()}}}function _a(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function Aa(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(n=(r=e.timestamp)!=null?r:e.timestampS)!=null?n:"",officer:String(e.officer||"").trim()}}):[]}function us(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(r=e.joined)!=null?r:""}}).sort((e,r)=>e.account_name.localeCompare(r.account_name)):[]}function Ea(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function Ct(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function fs(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function La(t={}){F=us(t.members),vt=t.last_refresh||new Date().toISOString(),S==="eso-members"&&d(),f("roster-data-updated",`Roster data updated. Loaded ${F.length} member record${F.length===1?"":"s"}.`,{ttlMs:m})}async function rt(t={}){if(!!(c!=null&&c.connected)){ae=!0,d();try{const e=await _("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");F=us(e.members),vt=e.last_refresh||vt,t.silent||f("roster-data-loaded",`Loaded ${F.length} roster member${F.length===1?"":"s"}.`,{ttlMs:m})}catch(e){f("roster-data-error",v(e),{ttlMs:m})}finally{ae=!1,d()}}}async function Ra(t={}){var e;if(!!R()){if(!(c!=null&&c.connected)){f("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}ae=!0,d();try{const r=await Ji(t);if(!(r!=null&&r.ok)){f("roster-data-pending",(r==null?void 0:r.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:m});return}const n={local_upload_id:hs(),authenticated_username:Ie(),authenticated_discord_user_id:((e=g==null?void 0:g.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await ps(n)}catch(s){throw Ma(n),s}await rt({silent:!0})}catch(r){f("roster-data-error",v(r),{ttlMs:m})}finally{ae=!1,d()}}}function hs(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Rr(){try{const t=window.localStorage.getItem(Mn),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function ms(t){window.localStorage.setItem(Mn,JSON.stringify(Array.isArray(t)?t:[]))}function Ma(t){const e=String((t==null?void 0:t.local_upload_id)||hs()),r=Rr().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),ms(r),f("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function Ta(t){const e=Rr().filter(r=>(r==null?void 0:r.local_upload_id)!==t);ms(e)}async function $a(){if(zt||!(c!=null&&c.connected)||!R())return;const t=Rr();if(t.length!==0){zt=!0;try{for(const e of t){if(!(c!=null&&c.connected)||!R())return;await ps(e),Ta(e.local_upload_id)}}catch(e){f("roster-data-pending-error",`Pending roster upload retry failed: ${v(e)}`,{ttlMs:m})}finally{zt=!1}}}async function ps(t){if(!(c!=null&&c.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await _("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const r=await Qi(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return f("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:m}),e}function Da(){const t=hr(B),e=Pa(t),r=B!=="other";return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <span class="discord-last-refresh">Last Refresh: ${a(Rs(Cn))}</span>
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
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${ke?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${ke?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${Yt("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${Yt("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${Yt("other","?","Other","All other deposits")}
        </div>

        ${xa(B)}

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
              ${t.length>0?t.map(n=>Fa(n,r)).join(""):Ua(r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${a(ks(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${r?`<div>Total Tickets Awarded: <strong>${a(Bt(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${ge?Na(hr(tt)):""}
    </div>
  `}function Na(t){return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${a(Ae(tt))} Deposits</h3>
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
              ${t.length>0?t.map(e=>Ca(e)).join(""):Ba()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${a(ys(t))}</textarea>
      </div>
    </div>
  `}function Ca(t){return`
    <tr>
      <td>${a(t.displayName||"")}</td>
      <td>${a(String(Number(t.amount)||0))}</td>
      <td>${a(String(Number(t.ticketAmount)||0))}</td>
      <td>${a(t.note||"")}</td>
    </tr>
  `}function Ba(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${a(Ae(tt))}.</td>
    </tr>
  `}function xa(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=bs(t),r=$r(t),n=r<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${h(Ae(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${a(Ae(t))} Raffle Period ${r===0?"(Current)":`(${Math.abs(r)} period${Math.abs(r)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${a(pt(e.salesStart))} through ${a(pt(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${a(pt(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${n?"":"disabled"} aria-label="Next ${h(Ae(t))} raffle period">\u203A</button>
    </div>
  `}function Yt(t,e,r,n){const s=B===t;return`
    <button class="bank-section-card${s?" active":""}" type="button" data-bank-section="${h(t)}" aria-selected="${s?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${a(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${a(r)}</span>
        <span class="bank-section-subtitle">${a(n)}</span>
      </span>
    </button>
  `}function gs(){if(S!=="more")return;document.querySelectorAll("[data-bank-section]").forEach(i=>{i.addEventListener("click",()=>{B=i.dataset.bankSection||"biweekly",d()})}),document.querySelectorAll("[data-bank-export-section]").forEach(i=>{i.addEventListener("click",()=>{tt=(i.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",ge=!0,d()})}),document.querySelectorAll("[data-bank-period-move]").forEach(i=>{i.addEventListener("click",()=>{Ia(i.dataset.bankPeriodMove||""),d()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{ge=!1,d()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>Oa());const r=document.querySelector(".bank-export-overlay");r&&r.addEventListener("click",i=>{i.target===r&&(ge=!1,d())});const n=document.querySelector("#openManualBiweeklyTicketButton");n&&n.addEventListener("click",async()=>{J=!0,z="",qe=T.accountName||"",F.length===0&&(c==null?void 0:c.connected)&&R()&&await rt({silent:!0}),d()});const s=document.querySelector("#refreshBankingDataButton");s&&s.addEventListener("click",()=>ws({key:"banking"}))}function ys(t){const e=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const r of t)e.push([r.displayName||"",String(Number(r.amount)||0),String(Number(r.ticketAmount)||0),r.note||""]);return e.map(r=>r.map(Mr).join("	")).join(`
`)}function Mr(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function Tr(t){var s;const e=String(t!=null?t:"");if((s=navigator.clipboard)!=null&&s.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const r=document.createElement("textarea");r.value=e,r.setAttribute("readonly","readonly"),r.style.position="fixed",r.style.left="0",r.style.top="0",r.style.width="1px",r.style.height="1px",r.style.opacity="0",r.style.pointerEvents="none",r.style.zIndex="-1",document.body.appendChild(r),r.focus(),r.select(),r.setSelectionRange(0,r.value.length);let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r)}return n}async function Oa(){const t=hr(tt),e=ys(t);if(await Tr(e)){f("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:m});return}const n=document.querySelector("#bankingExportTsv");n&&(n.focus(),n.select()),f("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:m})}function hr(t){return V.filter(e=>e.type===t).filter(e=>qa(t,e)).sort((e,r)=>(Number(r.time)||0)-(Number(e.time)||0))}function qa(t,e){if(t==="other")return!0;const r=Number(e==null?void 0:e.time)||0;if(r<=0)return!1;const n=bs(t);return r>=n.salesStart&&r<=n.salesEnd}function $r(t){return Number(or[t])||0}function Ia(t){if(B!=="biweekly"&&B!=="monthly")return;const e=$r(B);if(t==="previous"){or[B]=e-1;return}t==="next"&&e<0&&(or[B]=e+1)}function bs(t){const e=Math.floor(Date.now()/1e3),r=t==="monthly",n=r?so:no;let s=r?ro:to;for(;s-n>e;)s-=n;for(;s<e;)s+=n;return s+=$r(t)*n,{salesStart:s-n+1,salesEnd:s,raffleTime:s+io}}function Pa(t){return t.reduce((e,r)=>(e.amount+=Number(r.amount)||0,e.tickets+=Number(r.ticketAmount)||0,e),{amount:0,tickets:0})}function Fa(t,e=!0){return`
    <tr>
      <td>${a(t.note||t.eventId||"")}</td>
      <td>${a(pt(t.time))}</td>
      <td>${a(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${a(ks(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td><strong class="bank-ticket-amount">${a(Bt(t.ticketAmount))}</strong></td>`:""}
    </tr>
  `}function Ua(t=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?"5":"4"}">No ${a(Ae(B))} deposits found for this ${B==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function Ae(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function pt(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function ks(t){return(Number(t)||0).toLocaleString()}function Bt(t){return(Number(t)||0).toLocaleString()}function Dr(t){return Array.isArray(t)?t.map(e=>{var n,s,i,o,l,u,p,b,A,D,Ut,Pr;const r=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:r==="monthly"||r==="biweekly"||r==="other"?r:"other",eventId:String((s=(n=e==null?void 0:e.eventId)!=null?n:e==null?void 0:e.event_id)!=null?s:"").trim(),time:Number((o=(i=e==null?void 0:e.time)!=null?i:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((u=(l=e==null?void 0:e.displayName)!=null?l:e==null?void 0:e.display_name)!=null?u:"").trim(),amount:Number((p=e==null?void 0:e.amount)!=null?p:0)||0,ticketAmount:Number((A=(b=e==null?void 0:e.ticketAmount)!=null?b:e==null?void 0:e.ticket_amount)!=null?A:0)||0,note:String((D=e==null?void 0:e.note)!=null?D:"").trim(),dataSource:String((Pr=(Ut=e==null?void 0:e.dataSource)!=null?Ut:e==null?void 0:e.data_source)!=null?Pr:"").trim()}}):[]}function Ga(t){const e=new Map;for(const r of V)r.eventId&&e.set(r.eventId,r);for(const r of t)!r.eventId||e.set(r.eventId,r);V=Array.from(e.values()).sort((r,n)=>(Number(n.time)||0)-(Number(r.time)||0))}function vs(){Cn=new Date().toISOString()}async function Va(t={}){!(t!=null&&t.ok)||(V=Dr(t.entries),vs(),S==="more"&&d(),f("banking-data-updated",`Banking data updated. Loaded ${V.length} deposit record${V.length===1?"":"s"}.`,{ttlMs:m}))}async function xt(t={}){const e=Boolean(t.silent);if(!(c!=null&&c.connected)){e||f("banking-data-error","GuildSync websocket is not connected.",{ttlMs:m});return}if(!!R()){ke=!0,d();try{const r=await _("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");V=Dr(r.entries),vs(),e||f("banking-data",`Loaded ${V.length} banking deposit record${V.length===1?"":"s"}.`,{ttlMs:m})}catch(r){e||f("banking-data-error",v(r),{ttlMs:m})}finally{ke=!1,d()}}}async function ws(t={}){var e,r;if(!!R()){if(!(c!=null&&c.connected)){f("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}ke=!0,d();try{const n=await Yi(t);if(!(n!=null&&n.ok)){f("banking-data-pending",(n==null?void 0:n.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:m});return}const s=Dr((e=n==null?void 0:n.data)==null?void 0:e.entries);Ga(s);const i=new Date().toISOString(),o={local_upload_id:Ss(),authenticated_username:Ie(),authenticated_discord_user_id:((r=g==null?void 0:g.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:i,data:n.data||{}};try{await As(o)}catch(l){throw Wa(o),l}await xt({silent:!0})}catch(n){f("banking-data-error",v(n),{ttlMs:m})}finally{ke=!1,d()}}}function Ss(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Nr(){try{const t=window.localStorage.getItem(Rn),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function _s(t){window.localStorage.setItem(Rn,JSON.stringify(Array.isArray(t)?t:[]))}function Wa(t){const e=String((t==null?void 0:t.local_upload_id)||Ss()),r=Nr().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),_s(r),f("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function Ha(t){const e=Nr().filter(r=>(r==null?void 0:r.local_upload_id)!==t);_s(e)}async function za(){if(Ht||!(c!=null&&c.connected)||!R())return;const t=Nr();if(t.length!==0){Ht=!0;try{for(const e of t){if(!(c!=null&&c.connected)||!R())return;await As(e),Ha(e.local_upload_id)}}catch(e){f("banking-data-pending-error",`Pending banking upload retry failed: ${v(e)}`,{ttlMs:m})}finally{Ht=!1}}}async function As(t){if(!(c!=null&&c.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await _("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const r=await Ki(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return f("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:m}),e}function Es(){if(S!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>ja());const e=document.querySelector("#discordMemberSearch");e&&e.addEventListener("input",i=>{kt=i.target.value||"",rr=i.target.selectionStart,nr=i.target.selectionEnd,d({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(i=>{i.addEventListener("click",()=>{Za(i.dataset.discordSortColumn||"username")})});const r=document.querySelector("#discordRoleFilter");r&&r.addEventListener("change",i=>{const o=String(i.target.value||"").trim();o&&(we.add(o),d())}),document.querySelectorAll("[data-remove-role-filter]").forEach(i=>{i.addEventListener("click",()=>{const o=i.dataset.removeRoleFilter||"";we.delete(o),d()})});const n=document.querySelector("#discordLinkStatusFilter");n&&n.addEventListener("change",i=>{const o=String(i.target.value||"").trim();o&&(Se.add(o),d())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(i=>{i.addEventListener("click",()=>{const o=i.dataset.removeDiscordLinkStatusFilter||"";Se.delete(o),d()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(i=>{i.addEventListener("click",()=>ts(i.dataset.openMemberLinkDialog||"",i.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{kt="",we.clear(),Se.clear(),d()})}async function ja(){var t,e;if(!(c!=null&&c.connected)){f("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:m});return}bt=!0,d(),f("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const r=await _("guildsync:request-discord-data-refresh",{requested_by:((t=g==null?void 0:g.user)==null?void 0:t.display_name)||((e=g==null?void 0:g.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to request Discord data refresh.");f("discord-refresh-requested",r.message||"Discord data refresh completed.",{ttlMs:m}),await Cr({silent:!0})}catch(r){f("discord-refresh-error",v(r),{ttlMs:m})}finally{bt=!1,d()}}async function Ya(){if(!(c!=null&&c.connected))return;const t=await _("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(Dt=t.value||null)}async function Ka(t={}){if(!!(t!=null&&t.ok)){P=Ls(t.members),t.last_refresh&&(Dt=t.last_refresh);try{await Ya()}catch{}S==="discord-members"&&d(),f("discord-data-updated",`Discord data updated. Loaded ${P.length} member record${P.length===1?"":"s"}.`,{ttlMs:m})}}async function Cr(t={}){const e=Boolean(t.silent);if(!(c!=null&&c.connected)){f("discord-data-error","GuildSync websocket is not connected.",{ttlMs:m});return}ze=!0,d();try{const[r,n]=await Promise.all([_("guildsync:request-discord-data-date",{}),_("guildsync:request-discord-member-dataJSON",{})]);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord refresh date.");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord member data.");Dt=r.value||null,P=Ls(n.members),e||f("discord-data",`Loaded ${P.length} Discord member record${P.length===1?"":"s"}.`,{ttlMs:m})}catch(r){f("discord-data-error",v(r),{ttlMs:m})}finally{ze=!1,d()}}function _(t,e={},r=3e4){return new Promise((n,s)=>{if(!(c!=null&&c.connected)){s(new Error("GuildSync websocket is not connected."));return}let i=!1;const o=window.setTimeout(()=>{i||(i=!0,s(new Error(`${t} timed out.`)))},r);c.emit(t,e,l=>{i||(i=!0,window.clearTimeout(o),n(l))})})}function Ls(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(Ja).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,r)=>Je(e).localeCompare(Je(r),void 0,{sensitivity:"base"})):[]}function Ja(t){var s,i;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),r=String(t.role_name||t.name||"Unnamed Role").trim(),n=(i=(s=t.role_color)!=null?s:t.color)!=null?i:null;return{role_id:e,role_name:r||"Unnamed Role",role_color:n}}function Qa(){const t=kt.trim().toLowerCase(),e=Array.from(we),r=P.filter(n=>{if(t&&![n.username,n.global_name,n.server_nickname,n.discord_id,...n.roles.map(i=>i.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const s=new Set(n.roles.map(i=>i.role_name));if(!e.every(i=>s.has(i)))return!1}return!!Un(Se,Ro(n))});return Xa(r)}function Xa(t){const e=ue==="desc"?-1:1;return[...t].sort((r,n)=>{const s=sn(r,je),i=sn(n,je),o=s.localeCompare(i,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:Je(r).localeCompare(Je(n),void 0,{sensitivity:"base",numeric:!0})})}function sn(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(r=>r.role_name||"").filter(Boolean).sort((r,n)=>r.localeCompare(n,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function Za(t){const r=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";je===r?ue=ue==="asc"?"desc":"asc":(je=r,ue="asc"),d()}function ct(t,e){const r=je===t,n=ue==="asc"?"ascending":"descending",s=r?ue==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${r?n:"none"}">
      <button
        class="discord-sort-header${r?" active":""}"
        type="button"
        data-discord-sort-column="${h(t)}"
        title="Sort ${h(e)} ${r&&ue==="asc"?"descending":"ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function ec(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(rr)?rr:t.value.length,r=Number.isInteger(nr)?nr:e;t.setSelectionRange(e,r)}}function tc(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(sr)?sr:t.value.length,r=Number.isInteger(ir)?ir:e;t.setSelectionRange(e,r)}}function rc(){const t=new Set;for(const e of P)for(const r of e.roles)r.role_name&&t.add(r.role_name);return Array.from(t).sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function nc(t){const e=ac(t),r=Je(t),n=t.roles||[];return`
    <tr data-discord-user-id="${h(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${h(e)}" alt="${h(r)}" />`:`<span>${a(xs(r))}</span>`}
          </div>
          <span>${a(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${a(t.global_name||"")}</td>
      <td>${a(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${n.length>0?n.map(s=>ic(s)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${Zn({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function sc(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${a(ze?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function ic(t){const e=Ot(t.role_color),r=Or(e),n=xr(e,r);return`
    <span
      class="discord-role-badge"
      title="${h(t.role_name)}"
      style="${n}"
    >${a(t.role_name)}</span>
  `}function oc(t){const e=Br(t),r=Ot(e==null?void 0:e.role_color),n=Or(r),s=xr(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-role-filter="${h(t)}"
      style="${s}"
      title="Remove ${h(t)} filter"
    >
      <span>${a(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Br(t){for(const e of P){const r=e.roles.find(n=>n.role_name===t);if(r)return r}return null}function Ot(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function xr(t,e){return[`--role-fill-top: ${on(t,"#ffffff",.16)}`,`--role-fill-bottom: ${on(t,"#000000",.1)}`,`--role-fill-glow: ${an(t,.28)}`,`--role-fill-edge: ${an(t,.46)}`,`color: ${e}`].join("; ")}function on(t,e,r){const n=lt(t)||lt("#64748b"),s=lt(e)||lt("#ffffff"),i=Math.max(0,Math.min(1,Number(r)||0)),o=Math.round(n.red+(s.red-n.red)*i),l=Math.round(n.green+(s.green-n.green)*i),u=Math.round(n.blue+(s.blue-n.blue)*i);return`#${Kt(o)}${Kt(l)}${Kt(u)}`}function lt(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function Kt(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function an(t,e){const r=String(t||"#64748b").replace("#",""),n=/^[0-9a-f]{6}$/i.test(r)?r:"64748b",s=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),o=parseInt(n.slice(4,6),16);return`rgba(${s}, ${i}, ${o}, ${e})`}function Or(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const r=parseInt(e.slice(0,2),16),n=parseInt(e.slice(2,4),16),s=parseInt(e.slice(4,6),16);return(r*299+n*587+s*114)/1e3>150?"#0F172A":"#F8FAFC"}function ac(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!r)return"";const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function Je(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function Rs(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function gt(){const t=document.querySelector("#discordArea");if(!!t){if(nt(!1),R()){const e=g.user||{},r=Ie(),n=Ac(e),s=xs(r);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${n?`<img src="${h(n)}" alt="${h(r)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${a(s)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const i=document.querySelector("#discordAvatarButton");i.addEventListener("contextmenu",o=>{o.preventDefault(),cn()}),i.addEventListener("click",()=>{cn()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",fc)}}function cn(){if(Ze){nt();return}uc()}function cc(t=te){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],r=String((t==null?void 0:t.directory)||"").trim(),n=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(s=>{const i=String((s==null?void 0:s.key)||(s==null?void 0:s.fileName)||"").trim(),o=String((s==null?void 0:s.fileName)||"SavedVariables file").trim(),l=String((s==null?void 0:s.filePath)||(r?`${r}\\${o}`:o)).trim(),u=(s==null?void 0:s.enabled)!==!1,p=n&&u,b=`profileFileWatchToggle-${dc(i||o)}`;return`
          <label class="profile-filewatch-item ${u?"enabled":"disabled"}" title="${h(l)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${a(o)}</span>
              <span class="profile-filewatch-state">${p?"Watching":u?"On":"Off"}</span>
            </span>
            <input
              id="${h(b)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${h(i)}"
              ${u?"checked":""}
              aria-label="Turn file watch ${u?"off":"on"} for ${h(o)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function qr(){var n,s,i;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=Ie(),r=((n=g.user)==null?void 0:n.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${a(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${a(Ec(r))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${a($t)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${te!=null&&te.watching?"Active":"Stopped"}</span>
        </div>
        ${cc()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(s=document.querySelector("#discordLogoutButton"))==null||s.addEventListener("click",hc),(i=document.querySelector("#associateTicketReportButton"))==null||i.addEventListener("click",()=>{nt(!1),Vn()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",lc)})}async function Ms(){try{te=await Tt(),Ze&&qr()}catch(t){f("file-watcher-error",v(t),{ttlMs:m})}}async function lc(t){var n;const e=t.currentTarget,r=String(((n=e==null?void 0:e.dataset)==null?void 0:n.filewatchKey)||"").trim();if(!!r)try{e.disabled=!0,te=await ji(r,e.checked),await Ee({silent:!0}),Ze&&qr()}catch(s){f("file-watcher-error",v(s),{ttlMs:m}),await Ms()}}function dc(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function uc(){const t=document.querySelector("#discordProfileMenu");!t||(qr(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),Ze=!0,Ms(),setTimeout(()=>{window.addEventListener("click",Ts),window.addEventListener("keydown",$s)},0))}function nt(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),Ze=!1,t&&(window.removeEventListener("click",Ts),window.removeEventListener("keydown",$s))}function Ts(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&nt()}function $s(t){t.key==="Escape"&&nt()}async function fc(){try{f("auth","Opening Discord login...",{ttlMs:m});const t=await Gi();t!=null&&t.status_message&&f("auth",t.status_message,{ttlMs:m}),ie()}catch(t){f("auth-error",v(t),{ttlMs:m}),ie()}}async function hc(){try{g=await Wi(),f("auth",g.status_message||"Logged out.",{ttlMs:m}),Bn(),He(),await Ee()}catch(t){f("auth-error",v(t),{ttlMs:m}),ie()}}function He(){const t=g.socket_url||"https://guildsync.perdues.me";mc(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};g!=null&&g.token&&(e.auth={token:g.token}),c=ht(t,e),c.on("connect",()=>{ie(),Ds(),S==="discord-members"&&Cr({silent:!0}),S==="eso-members"&&rt({silent:!0}),S==="more"&&xt({silent:!0}),za(),$a(),pc()}),c.on("connect_error",()=>{ie(),Lt()}),c.on("disconnect",()=>{ie(),Lt()}),c.on("guildsync:version-status",r=>{gc(r)}),c.on("guildsync:discord-member-data-updated",r=>{Ka(r)}),c.on("guildsync:banking-data-updated",r=>{Va(r)}),c.on("guildsync:roster-data-updated",r=>{La(r)}),c.on("guildsync:member-links-updated",(r={})=>{Array.isArray(r.links)&&(w=r.links,(S==="discord-members"||S==="eso-members"||S==="settings"||le)&&d())}),c.on("guildsync:discord-refresh-status",(r={})=>{const n=String(r.message||"").trim();n&&f("discord-refresh-status",n,{ttlMs:m})})}function mc(t=!0){Lt(),c&&(c.disconnect(),c=null),t&&ie()}function Ds(){!(c!=null&&c.connected)||c.emit("guildsync:client-version",{version:$t})}function pc(){Lt(),mt=window.setInterval(()=>{Ds()},Xi)}function Lt(){mt&&(window.clearInterval(mt),mt=null)}function gc(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown";f("version",`GuildSync is out of date. Current version: ${$t}. Latest version: ${e}.`);return}Ir("version")}}function f(t,e,r={}){const n=String(t||"").trim(),s=String(e||"").trim();if(!(!n||!s)){if(oe.set(n,s),de.has(n)&&(window.clearTimeout(de.get(n)),de.delete(n)),r.ttlMs&&Number(r.ttlMs)>0){const i=window.setTimeout(()=>{Ir(n)},Number(r.ttlMs));de.set(n,i)}$e()}}function Ir(t){const e=String(t||"").trim();if(!!e){if(oe.delete(e),de.has(e)&&(window.clearTimeout(de.get(e)),de.delete(e)),M===e){Pt(()=>{M="",$e()});return}$e()}}function $e(){const t=qt();if(t.length===0){ye?Pt(Qe):Qe();return}!ye&&!be&&It(t[0])}function qt(){return Array.from(oe.keys())}function Ns(){const t=qt();if(t.length===0)return"";if(!M)return t[0];const e=t.indexOf(M);return e<0?t[0]:t[(e+1)%t.length]}function It(t){const e=document.querySelector("#statusMessageTrack");if(!e||!oe.has(t)){Qe();return}Ft();const r=oe.get(t);M=t,ye=!0,be=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=r,e.style.setProperty("--message-fade-duration",`${$n}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",be=!1,yc()},{once:!0})})}function yc(){const t=qt();if(!M||!oe.has(M)){$e();return}if(t.length<=1){ln(!1);return}ln(!0)}function ln(t){const e=document.querySelector("#statusMessageViewport"),r=document.querySelector("#statusMessageTrack");if(!e||!r)return;const n=Math.max(0,r.scrollWidth-e.clientWidth);if(n<=0){t&&Xe(()=>{Pt(()=>{const s=Ns();M="",s?It(s):Qe()})},Tn);return}Xe(()=>{Cs(n,t)},Dn)}function Cs(t,e){const r=document.querySelector("#statusMessageTrack");if(!r||!M||!oe.has(M))return;const n=Math.max(4,Math.ceil(t/eo));r.style.setProperty("--long-scroll-distance",`${t}px`),r.style.setProperty("--long-scroll-duration",`${n}s`),r.classList.add("long-scroll"),r.addEventListener("animationend",()=>{if(r.classList.remove("long-scroll"),r.style.transform=`translateX(-${t}px) translateY(-50%)`,e){Xe(()=>{Pt(()=>{const s=Ns();M="",s?It(s):Qe()})},Tn);return}Xe(()=>{bc()},Zi)},{once:!0})}function bc(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!M||!oe.has(M))return;if(qt().length!==1){$e();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const n=Math.max(0,e.scrollWidth-t.clientWidth);n<=0||Xe(()=>{Cs(n,!1)},Dn)}function Pt(t){const e=document.querySelector("#statusMessageTrack");if(Ft(),!e||!ye){typeof t=="function"&&t();return}be=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${$n}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",ye=!1,be=!1,typeof t=="function"&&t()},{once:!0})}function Qe(){const t=document.querySelector("#statusMessageTrack");Ft(),M="",ye=!1,be=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function Xe(t,e){const r=window.setTimeout(()=>{Ve=Ve.filter(n=>n!==r),t()},e);Ve.push(r)}function Ft(){for(const t of Ve)window.clearTimeout(t);Ve=[]}function Bs(){if(!ye||be||!M)return;const t=M;Ft(),It(t)}function ie(){const t=document.querySelector("#statusDot");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(c!=null&&c.connected)){t.classList.add("status-red"),t.title="Websocket not connected";return}if(!R()){t.classList.add("status-yellow"),t.title="Websocket connected. User is not authenticated.";return}t.classList.add("status-green"),t.title=`Websocket connected. Authenticated as ${Ie()}.`}}async function Ee(t={}){try{if(R()){const e=await Hi();te=e,!t.silent&&(e==null?void 0:e.message)&&f(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:m});return}te=await zi(),Ir("file-watcher")}catch(e){f("file-watcher-error",v(e),{ttlMs:m})}}function kc(t={}){if(!R())return;const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",r=String(t.label||"").trim(),n=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=r?`${r} saved variables (${n})`:n;f(`saved-vars-file-updated-${e}`,`${s} has been updated.`,{ttlMs:m}),e.toLowerCase()==="banking"&&vc(t),e.toLowerCase()==="roster"&&wc(t)}async function vc(t={}){await ws(t)}async function wc(t={}){await Ra(t)}function Sc(t){!R()||f("file-watcher-error",v(t),{ttlMs:m})}function _c(){Fe("guildsync-savedvars-file-modified",kc),Fe("guildsync-file-watcher-error",Sc),Fe("guildsync-login-complete",async t=>{g=t||{logged_in:!1,allowed:!1},gt(),He(),await Ee(),f("auth",g.status_message||`Logged in and authorized as ${Ie()}.`,{ttlMs:m})}),Fe("guildsync-login-denied",async t=>{g={logged_in:!1,allowed:!1,status_message:""},gt(),await Ee(),f("auth",t||"Access denied.",{ttlMs:m}),He()}),Fe("guildsync-login-failed",async t=>{g={logged_in:!1,allowed:!1,status_message:""},gt(),await Ee(),f("auth",t||"Login failed.",{ttlMs:m}),He()})}function R(){return Boolean((g==null?void 0:g.logged_in)&&(g==null?void 0:g.allowed)&&(g==null?void 0:g.token))}function Ie(){var t,e;return((t=g.user)==null?void 0:t.display_name)||((e=g.user)==null?void 0:e.username)||"Discord User"}function Ac(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),r=String(t.discord_user_id||"").trim();if(!e||!r)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=128`}function xs(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function Ec(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Lc(){Ue&&(Ue.disconnect(),Ue=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),r=Math.round(t.getBoundingClientRect().height);Ue=new ResizeObserver(n=>{const s=n[0];if(!s)return;const i=Math.round(s.contentRect.width),o=Math.round(s.contentRect.height);i===e&&o===r||(e=i,r=o,Os(),Bs())}),Ue.observe(t)}function Os(){clearTimeout(Wr),Wr=setTimeout(async()=>{try{await Ln()}catch{}},500)}function v(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function a(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function h(t){return a(t)}_c();oo();
