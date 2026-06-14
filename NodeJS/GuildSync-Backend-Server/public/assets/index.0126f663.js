(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const ei="/assets/splash.ea386b6a.png",ti="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",ri="/assets/GuildSync-Graphic.9169020d.png",W=Object.create(null);W.open="0";W.close="1";W.ping="2";W.pong="3";W.message="4";W.upgrade="5";W.noop="6";const bt=Object.create(null);Object.keys(W).forEach(e=>{bt[W[e]]=e});const sr={type:"error",data:"parser error"},_n=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",An=typeof ArrayBuffer=="function",Ln=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,Ar=({type:e,data:t},r,n)=>_n&&t instanceof Blob?r?n(t):Xr(t,n):An&&(t instanceof ArrayBuffer||Ln(t))?r?n(t):Xr(new Blob([t]),n):n(W[e]+(t||"")),Xr=(e,t)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];t("b"+(n||""))},r.readAsDataURL(e)};function Zr(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let Jt;function ni(e,t){if(_n&&e.data instanceof Blob)return e.data.arrayBuffer().then(Zr).then(t);if(An&&(e.data instanceof ArrayBuffer||Ln(e.data)))return t(Zr(e.data));Ar(e,!1,r=>{Jt||(Jt=new TextEncoder),t(Jt.encode(r))})}const en="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",je=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<en.length;e++)je[en.charCodeAt(e)]=e;const si=e=>{let t=e.length*.75,r=e.length,n,s=0,i,o,l,f;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const m=new ArrayBuffer(t),b=new Uint8Array(m);for(n=0;n<r;n+=4)i=je[e.charCodeAt(n)],o=je[e.charCodeAt(n+1)],l=je[e.charCodeAt(n+2)],f=je[e.charCodeAt(n+3)],b[s++]=i<<2|o>>4,b[s++]=(o&15)<<4|l>>2,b[s++]=(l&3)<<6|f&63;return m},ii=typeof ArrayBuffer=="function",Lr=(e,t)=>{if(typeof e!="string")return{type:"message",data:Rn(e,t)};const r=e.charAt(0);return r==="b"?{type:"message",data:oi(e.substring(1),t)}:bt[r]?e.length>1?{type:bt[r],data:e.substring(1)}:{type:bt[r]}:sr},oi=(e,t)=>{if(ii){const r=si(e);return Rn(r,t)}else return{base64:!0,data:e}},Rn=(e,t)=>{switch(t){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},En=String.fromCharCode(30),ai=(e,t)=>{const r=e.length,n=new Array(r);let s=0;e.forEach((i,o)=>{Ar(i,!1,l=>{n[o]=l,++s===r&&t(n.join(En))})})},ci=(e,t)=>{const r=e.split(En),n=[];for(let s=0;s<r.length;s++){const i=Lr(r[s],t);if(n.push(i),i.type==="error")break}return n};function di(){return new TransformStream({transform(e,t){ni(e,r=>{const n=r.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const i=new DataView(s.buffer);i.setUint8(0,126),i.setUint16(1,n)}else{s=new Uint8Array(9);const i=new DataView(s.buffer);i.setUint8(0,127),i.setBigUint64(1,BigInt(n))}e.data&&typeof e.data!="string"&&(s[0]|=128),t.enqueue(s),t.enqueue(r)})}})}let Qt;function ut(e){return e.reduce((t,r)=>t+r.length,0)}function ft(e,t){if(e[0].length===t)return e.shift();const r=new Uint8Array(t);let n=0;for(let s=0;s<t;s++)r[s]=e[0][n++],n===e[0].length&&(e.shift(),n=0);return e.length&&n<e[0].length&&(e[0]=e[0].slice(n)),r}function li(e,t){Qt||(Qt=new TextDecoder);const r=[];let n=0,s=-1,i=!1;return new TransformStream({transform(o,l){for(r.push(o);;){if(n===0){if(ut(r)<1)break;const f=ft(r,1);i=(f[0]&128)===128,s=f[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(ut(r)<2)break;const f=ft(r,2);s=new DataView(f.buffer,f.byteOffset,f.length).getUint16(0),n=3}else if(n===2){if(ut(r)<8)break;const f=ft(r,8),m=new DataView(f.buffer,f.byteOffset,f.length),b=m.getUint32(0);if(b>Math.pow(2,53-32)-1){l.enqueue(sr);break}s=b*Math.pow(2,32)+m.getUint32(4),n=3}else{if(ut(r)<s)break;const f=ft(r,s);l.enqueue(Lr(i?f:Qt.decode(f),t)),n=0}if(s===0||s>e){l.enqueue(sr);break}}}})}const Dn=4;function L(e){if(e)return ui(e)}function ui(e){for(var t in L.prototype)e[t]=L.prototype[t];return e}L.prototype.on=L.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};L.prototype.once=function(e,t){function r(){this.off(e,r),t.apply(this,arguments)}return r.fn=t,this.on(e,r),this};L.prototype.off=L.prototype.removeListener=L.prototype.removeAllListeners=L.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+e];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var n,s=0;s<r.length;s++)if(n=r[s],n===t||n.fn===t){r.splice(s,1);break}return r.length===0&&delete this._callbacks["$"+e],this};L.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),r=this._callbacks["$"+e],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,s=r.length;n<s;++n)r[n].apply(this,t)}return this};L.prototype.emitReserved=L.prototype.emit;L.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};L.prototype.hasListeners=function(e){return!!this.listeners(e).length};const xt=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,r)=>r(t,0))(),C=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),fi="arraybuffer";function $n(e,...t){return t.reduce((r,n)=>(e.hasOwnProperty(n)&&(r[n]=e[n]),r),{})}const hi=C.setTimeout,pi=C.clearTimeout;function Ot(e,t){t.useNativeTimers?(e.setTimeoutFn=hi.bind(C),e.clearTimeoutFn=pi.bind(C)):(e.setTimeoutFn=C.setTimeout.bind(C),e.clearTimeoutFn=C.clearTimeout.bind(C))}const mi=1.33;function gi(e){return typeof e=="string"?yi(e):Math.ceil((e.byteLength||e.size)*mi)}function yi(e){let t=0,r=0;for(let n=0,s=e.length;n<s;n++)t=e.charCodeAt(n),t<128?r+=1:t<2048?r+=2:t<55296||t>=57344?r+=3:(n++,r+=4);return r}function Mn(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function bi(e){let t="";for(let r in e)e.hasOwnProperty(r)&&(t.length&&(t+="&"),t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t}function vi(e){let t={},r=e.split("&");for(let n=0,s=r.length;n<s;n++){let i=r[n].split("=");t[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return t}class ki extends Error{constructor(t,r,n){super(t),this.description=r,this.context=n,this.type="TransportError"}}class Rr extends L{constructor(t){super(),this.writable=!1,Ot(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,r,n){return super.emitReserved("error",new ki(t,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const r=Lr(t,this.socket.binaryType);this.onPacket(r)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,r={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const r=bi(t);return r.length?"?"+r:""}}class Si extends Rr{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const r=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};ci(t,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,ai(t,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=Mn()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(t,r)}}let Tn=!1;try{Tn=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const wi=Tn;function _i(){}class Ai extends Si{constructor(t){if(super(t),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,r){const n=this.request({method:"POST",data:t});n.on("success",r),n.on("error",(s,i)=>{this.onError("xhr post error",s,i)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=t}}class G extends L{constructor(t,r,n){super(),this.createRequest=t,Ot(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const r=$n(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=G.requestsCount++,G.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=_i,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete G.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}G.requestsCount=0;G.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",tn);else if(typeof addEventListener=="function"){const e="onpagehide"in C?"pagehide":"unload";addEventListener(e,tn,!1)}}function tn(){for(let e in G.requests)G.requests.hasOwnProperty(e)&&G.requests[e].abort()}const Li=function(){const e=Nn({xdomain:!1});return e&&e.responseType!==null}();class Ri extends Ai{constructor(t){super(t);const r=t&&t.forceBase64;this.supportsBinary=Li&&!r}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new G(Nn,this.uri(),t)}}function Nn(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||wi))return new XMLHttpRequest}catch{}if(!t)try{return new C[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Cn=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Ei extends Rr{get name(){return"websocket"}doOpen(){const t=this.uri(),r=this.opts.protocols,n=Cn?{}:$n(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,r,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],s=r===t.length-1;Ar(n,this.supportsBinary,i=>{try{this.doWrite(n,i)}catch{}s&&xt(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=Mn()),this.supportsBinary||(r.b64=1),this.createUri(t,r)}}const Xt=C.WebSocket||C.MozWebSocket;class Di extends Ei{createSocket(t,r,n){return Cn?new Xt(t,r,n):r?new Xt(t,r):new Xt(t)}doWrite(t,r){this.ws.send(r)}}class $i extends Rr{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const r=li(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(r).getReader(),s=di();s.readable.pipeTo(t.writable),this._writer=s.writable.getWriter();const i=()=>{n.read().then(({done:l,value:f})=>{l||(this.onPacket(f),i())}).catch(l=>{})};i();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],s=r===t.length-1;this._writer.write(n).then(()=>{s&&xt(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const Mi={websocket:Di,webtransport:$i,polling:Ri},Ti=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Ni=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function ir(e){if(e.length>8e3)throw"URI too long";const t=e,r=e.indexOf("["),n=e.indexOf("]");r!=-1&&n!=-1&&(e=e.substring(0,r)+e.substring(r,n).replace(/:/g,";")+e.substring(n,e.length));let s=Ti.exec(e||""),i={},o=14;for(;o--;)i[Ni[o]]=s[o]||"";return r!=-1&&n!=-1&&(i.source=t,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=Ci(i,i.path),i.queryKey=Bi(i,i.query),i}function Ci(e,t){const r=/\/{2,9}/g,n=t.replace(r,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Bi(e,t){const r={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,i){s&&(r[s]=i)}),r}const or=typeof addEventListener=="function"&&typeof removeEventListener=="function",vt=[];or&&addEventListener("offline",()=>{vt.forEach(e=>e())},!1);class ne extends L{constructor(t,r){if(super(),this.binaryType=fi,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(r=t,t=null),t){const n=ir(t);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=ir(r.host).host);Ot(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const s=n.prototype.name;this.transports.push(s),this._transportsByName[s]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=vi(this.opts.query)),or&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},vt.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const r=Object.assign({},this.opts.query);r.EIO=Dn,r.transport=t,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&ne.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(t);r.open(),this.setTransport(r)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",ne.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=t.data,this._onError(r);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(r+=gi(s)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,xt(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,r,n){return this._sendPacket("message",t,r,n),this}send(t,r,n){return this._sendPacket("message",t,r,n),this}_sendPacket(t,r,n,s){if(typeof r=="function"&&(s=r,r=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const i={type:t,data:r,options:n};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),s&&this.once("flush",s),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),t()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(ne.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),or&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=vt.indexOf(this._offlineEventListener);n!==-1&&vt.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,r),this.writeBuffer=[],this._prevBufferLen=0}}}ne.protocol=Dn;class xi extends ne{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let r=this.createTransport(t),n=!1;ne.priorWebsocketSuccess=!1;const s=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",A=>{if(!n)if(A.type==="pong"&&A.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;ne.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(b(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const T=new Error("probe error");T.transport=r.name,this.emitReserved("upgradeError",T)}}))};function i(){n||(n=!0,b(),r.close(),r=null)}const o=A=>{const T=new Error("probe error: "+A);T.transport=r.name,i(),this.emitReserved("upgradeError",T)};function l(){o("transport closed")}function f(){o("socket closed")}function m(A){r&&A.name!==r.name&&i()}const b=()=>{r.removeListener("open",s),r.removeListener("error",o),r.removeListener("close",l),this.off("close",f),this.off("upgrading",m)};r.once("open",s),r.once("error",o),r.once("close",l),this.once("close",f),this.once("upgrading",m),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const r=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&r.push(t[n]);return r}}class Oi extends xi{constructor(t,r={}){const n=typeof t=="object"?t:r;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(s=>Mi[s]).filter(s=>!!s)),super(t,n)}}function Ii(e,t="",r){let n=e;r=r||typeof location<"u"&&location,e==null&&(e=r.protocol+"//"+r.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=r.protocol+e:e=r.host+e),/^(https?|wss?):\/\//.test(e)||(typeof r<"u"?e=r.protocol+"//"+e:e="https://"+e),n=ir(e)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const i=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+i+":"+n.port+t,n.href=n.protocol+"://"+i+(r&&r.port===n.port?"":":"+n.port),n}const qi=typeof ArrayBuffer=="function",Pi=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,Bn=Object.prototype.toString,Fi=typeof Blob=="function"||typeof Blob<"u"&&Bn.call(Blob)==="[object BlobConstructor]",Ui=typeof File=="function"||typeof File<"u"&&Bn.call(File)==="[object FileConstructor]";function Er(e){return qi&&(e instanceof ArrayBuffer||Pi(e))||Fi&&e instanceof Blob||Ui&&e instanceof File}function kt(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let r=0,n=e.length;r<n;r++)if(kt(e[r]))return!0;return!1}if(Er(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return kt(e.toJSON(),!0);for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&kt(e[r]))return!0;return!1}function Gi(e){const t=[],r=e.data,n=e;return n.data=ar(r,t),n.attachments=t.length,{packet:n,buffers:t}}function ar(e,t){if(!e)return e;if(Er(e)){const r={_placeholder:!0,num:t.length};return t.push(e),r}else if(Array.isArray(e)){const r=new Array(e.length);for(let n=0;n<e.length;n++)r[n]=ar(e[n],t);return r}else if(typeof e=="object"&&!(e instanceof Date)){const r={};for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=ar(e[n],t));return r}return e}function Vi(e,t){return e.data=cr(e.data,t),delete e.attachments,e}function cr(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let r=0;r<e.length;r++)e[r]=cr(e[r],t);else if(typeof e=="object")for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(e[r]=cr(e[r],t));return e}const xn=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Wi=5;var y;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(y||(y={}));class Hi{constructor(t){this.replacer=t}encode(t){return(t.type===y.EVENT||t.type===y.ACK)&&kt(t)?this.encodeAsBinary({type:t.type===y.EVENT?y.BINARY_EVENT:y.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let r=""+t.type;return(t.type===y.BINARY_EVENT||t.type===y.BINARY_ACK)&&(r+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(r+=t.nsp+","),t.id!=null&&(r+=t.id),t.data!=null&&(r+=JSON.stringify(t.data,this.replacer)),r}encodeAsBinary(t){const r=Gi(t),n=this.encodeAsString(r.packet),s=r.buffers;return s.unshift(n),s}}class Dr extends L{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let r;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(t);const n=r.type===y.BINARY_EVENT;n||r.type===y.BINARY_ACK?(r.type=n?y.EVENT:y.ACK,this.reconstructor=new zi(r),r.attachments===0&&super.emitReserved("decoded",r)):super.emitReserved("decoded",r)}else if(Er(t)||t.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let r=0;const n={type:Number(t.charAt(0))};if(y[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===y.BINARY_EVENT||n.type===y.BINARY_ACK){const i=r+1;for(;t.charAt(++r)!=="-"&&r!=t.length;);const o=t.substring(i,r);if(o!=Number(o)||t.charAt(r)!=="-")throw new Error("Illegal attachments");const l=Number(o);if(!On(l)||l<0)throw new Error("Illegal attachments");if(l>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=l}if(t.charAt(r+1)==="/"){const i=r+1;for(;++r&&!(t.charAt(r)===","||r===t.length););n.nsp=t.substring(i,r)}else n.nsp="/";const s=t.charAt(r+1);if(s!==""&&Number(s)==s){const i=r+1;for(;++r;){const o=t.charAt(r);if(o==null||Number(o)!=o){--r;break}if(r===t.length)break}n.id=Number(t.substring(i,r+1))}if(t.charAt(++r)){const i=this.tryParse(t.substr(r));if(Dr.isPayloadValid(n.type,i))n.data=i;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,r){switch(t){case y.CONNECT:return Lt(r);case y.DISCONNECT:return r===void 0;case y.CONNECT_ERROR:return typeof r=="string"||Lt(r);case y.EVENT:case y.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&xn.indexOf(r[0])===-1);case y.ACK:case y.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class zi{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const r=Vi(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function ji(e){return typeof e=="string"}const On=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e};function Yi(e){return e===void 0||On(e)}function Lt(e){return Object.prototype.toString.call(e)==="[object Object]"}function Ki(e,t){switch(e){case y.CONNECT:return t===void 0||Lt(t);case y.DISCONNECT:return t===void 0;case y.EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&xn.indexOf(t[0])===-1);case y.ACK:return Array.isArray(t);case y.CONNECT_ERROR:return typeof t=="string"||Lt(t);default:return!1}}function Ji(e){return ji(e.nsp)&&Yi(e.id)&&Ki(e.type,e.data)}const Qi=Object.freeze(Object.defineProperty({__proto__:null,protocol:Wi,get PacketType(){return y},Encoder:Hi,Decoder:Dr,isPacketValid:Ji},Symbol.toStringTag,{value:"Module"}));function q(e,t,r){return e.on(t,r),function(){e.off(t,r)}}const Xi=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class In extends L{constructor(t,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[q(t,"open",this.onopen.bind(this)),q(t,"packet",this.onpacket.bind(this)),q(t,"error",this.onerror.bind(this)),q(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...r){var n,s,i;if(Xi.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(r.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const o={type:y.EVENT,data:r};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const b=this.ids++,A=r.pop();this._registerAckCallback(b,A),o.id=b}const l=(s=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||s===void 0?void 0:s.writable,f=this.connected&&!(!((i=this.io.engine)===null||i===void 0)&&i._hasPingExpired());return this.flags.volatile&&!l||(f?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(t,r){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[t]=r;return}const i=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let l=0;l<this.sendBuffer.length;l++)this.sendBuffer[l].id===t&&this.sendBuffer.splice(l,1);r.call(this,new Error("operation has timed out"))},s),o=(...l)=>{this.io.clearTimeoutFn(i),r.apply(this,l)};o.withError=!0,this.acks[t]=o}emitWithAck(t,...r){return new Promise((n,s)=>{const i=(o,l)=>o?s(o):n(l);i.withError=!0,r.push(i),this.emit(t,...r)})}_addToQueue(t){let r;typeof t[t.length-1]=="function"&&(r=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((s,...i)=>(this._queue[0],s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(s)):(this._queue.shift(),r&&r(null,...i)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!t||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:y.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case y.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case y.EVENT:case y.BINARY_EVENT:this.onevent(t);break;case y.ACK:case y.BINARY_ACK:this.onack(t);break;case y.DISCONNECT:this.ondisconnect();break;case y.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const r=t.data||[];t.id!=null&&r.push(this.ack(t.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const r=this;let n=!1;return function(...s){n||(n=!0,r.packet({type:y.ACK,id:t,data:s}))}}onack(t){const r=this.acks[t.id];typeof r=="function"&&(delete this.acks[t.id],r.withError&&t.data.unshift(null),r.apply(this,t.data))}onconnect(t,r){this.id=t,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:y.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,t.data)}}}function xe(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}xe.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),r=Math.floor(t*this.jitter*e);e=(Math.floor(t*10)&1)==0?e-r:e+r}return Math.min(e,this.max)|0};xe.prototype.reset=function(){this.attempts=0};xe.prototype.setMin=function(e){this.ms=e};xe.prototype.setMax=function(e){this.max=e};xe.prototype.setJitter=function(e){this.jitter=e};class dr extends L{constructor(t,r){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(r=t,t=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,Ot(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new xe({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=t;const s=r.parser||Qi;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var r;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(r=this.backoff)===null||r===void 0||r.setMin(t),this)}randomizationFactor(t){var r;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(r=this.backoff)===null||r===void 0||r.setJitter(t),this)}reconnectionDelayMax(t){var r;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(r=this.backoff)===null||r===void 0||r.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new Oi(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=q(r,"open",function(){n.onopen(),t&&t()}),i=l=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",l),t?t(l):this.maybeReconnectOnOpen()},o=q(r,"error",i);if(this._timeout!==!1){const l=this._timeout,f=this.setTimeoutFn(()=>{s(),i(new Error("timeout")),r.close()},l);this.opts.autoUnref&&f.unref(),this.subs.push(()=>{this.clearTimeoutFn(f)})}return this.subs.push(s),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(q(t,"ping",this.onping.bind(this)),q(t,"data",this.ondata.bind(this)),q(t,"error",this.onerror.bind(this)),q(t,"close",this.onclose.bind(this)),q(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(r){this.onclose("parse error",r)}}ondecoded(t){xt(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,r){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new In(this,t,r),this.nsps[t]=n),n}_destroy(t){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(t){const r=this.encoder.encode(t);for(let n=0;n<r.length;n++)this.engine.write(r[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(s=>{s?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",s)):t.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const We={};function St(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const r=Ii(e,t.path||"/socket.io"),n=r.source,s=r.id,i=r.path,o=We[s]&&i in We[s].nsps,l=t.forceNew||t["force new connection"]||t.multiplex===!1||o;let f;return l?f=new dr(n,t):(We[s]||(We[s]=new dr(n,t)),f=We[s]),r.query&&!t.query&&(t.query=r.queryKey),f.socket(r.path,t)}Object.assign(St,{Manager:dr,Socket:In,io:St,connect:St});window.GUILDSYNC_WEB=!0;const $r="guildsync-web-session";function Zi(){try{return JSON.parse(localStorage.getItem($r)||"{}")||{}}catch{return{}}}function eo(e){localStorage.setItem($r,JSON.stringify(e||{}))}function qn(){localStorage.removeItem($r)}async function to(){return!0}async function Pn(){return!0}async function ro(){return!0}async function no(){return!0}async function so(){return!0}async function io(){return window.location.assign("/api/auth/discord/web-login"),!0}async function oo(){var i,o,l,f,m,b,A,T;const t=Zi().token||localStorage.getItem("guildsync-web-token")||"";if(!t)return{logged_in:!1,allowed:!1,status_message:"Not logged in."};const r=await fetch("/api/auth/session",{headers:{Authorization:`Bearer ${t}`}}),n=await r.json().catch(()=>({}));if(!r.ok||n.ok===!1)return qn(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:n.message||"Session expired. Please log in again."};const s={logged_in:!0,allowed:!0,token:t,user:n.user,discord_user_id:((i=n.user)==null?void 0:i.discord_user_id)||"",username:((o=n.user)==null?void 0:o.username)||"",global_name:((l=n.user)==null?void 0:l.global_name)||"",display_name:((f=n.user)==null?void 0:f.display_name)||((m=n.user)==null?void 0:m.global_name)||((b=n.user)==null?void 0:b.username)||"",avatar_url:((A=n.user)==null?void 0:A.avatar_url)||"",role:((T=n.user)==null?void 0:T.role)||"user",status_message:"Logged in."};return eo(s),s}async function ao(){return qn(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:"Logged out."}}async function co(){return It()}async function lo(){return It()}async function It(){return{watching:!1,directory:"Web upload mode",files:[{key:"banking",fileName:"GuildSyncBanking.lua",enabled:!0,filePath:"Upload through Reports & Admin"},{key:"roster",fileName:"GuildSyncRoster.lua",enabled:!0,filePath:"Upload through Reports & Admin"}]}}async function uo(){return It()}async function fo(){throw new Error("File watching is not available in the web interface. Use Reports & Admin \u2192 Upload ESO SavedVariables.")}async function ho(){return{ok:!0}}async function po(){throw new Error("File watching is not available in the web interface. Use Reports & Admin \u2192 Upload ESO SavedVariables.")}async function mo(){return{ok:!0}}const ht=new Map;function He(e,t){return ht.has(e)||ht.set(e,new Set),ht.get(e).add(t),()=>{var r;return(r=ht.get(e))==null?void 0:r.delete(t)}}const qt="1.0.3",go=30*60*1e3,Fn="guildsync-pending-banking-uploads",Un="guildsync-pending-roster-uploads",p=60*1e3,Gn=7e3,Vn=1400,Wn=2400,yo=4e3,bo=38,Hn=document.querySelector("#app");let rn=null,ze=null,nn=!1,it=!1,wt=null,Zt=!1,er=!1,se=null,ce=new Map,he=new Map,D="",Se=!1,we=!1,Ye=[],g={logged_in:!1,allowed:!1,status_message:""},c=null,N=[],Pt=null,Qe=!1,Rt=!1,Et="",Le=new Set,Re=new Set,Xe="username",pe="asc",lr=null,ur=null,F=[],Dt=null,de=!1,sn=!1,$t="",fr=null,hr=null,me=new Set,Ee=new Set,j="",M="",E=-1,Te=!1,Ze="",B=[],le="",ie=[],oe=!1,K="",tr=null,P=-1,Oe=!1,Ie=[],Z=!1,ge="",qe=!1,et=[],ee=!1,ye="",Pe=!1,Mr=[],te=!1,be="",ot="",De="",re="",S=[],O=!1,I="",Fe=!1,Ft="",Y=-1,fe=!1,v=null,ve=[],Ne=!1,X="",at="",U=-1,Ue=!1,Tr=null,Ke=null;const Nr=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let V=[],x="biweekly",zn=null,_e=!1,ke=!1,ct="biweekly",J=!1,Mt=!1,z="",$={accountName:"",note:"",tickets:""},Ge="",H=-1,pr={biweekly:0,monthly:0};const vo=1780786800,ko=1781996400,So=14*24*60*60,wo=28*24*60*60,_o=60*60,Tt=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let _=Tt[0].id;function Ao(){Hn.innerHTML=`
    <main class="splash-screen">
      <img src="${ei}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await to(),await Lo(),jn(),Je(),await Me()},5e3)}async function Lo(){try{g=await oo()}catch(e){g={logged_in:!1,allowed:!1,status_message:""},h("session-error",k(e),{ttlMs:p})}}function jn(){Hn.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${ti}" alt="" class="title-icon" />
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
            <img src="${ri}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${a(qt)}</div>
            </div>
          </div>
          <div id="discordArea" class="discord-area"></div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${Yn()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content" aria-live="polite">
          ${Kn()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await no()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await Pn(),await so()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await ro()}),At(),Qn(),Vs(),Ds(),Bs(),ts(),Es(),vs(),ks(),Ss(),ws(),ls(),To(),ae(),Be(),nn||(window.addEventListener("resize",()=>{Zs(),Qs()}),Zc(),nn=!0)}function Yn(){return Tt.map(e=>{const t=e.id===_;return`
        <button
          class="guildsync-tab${t?" active":""}"
          type="button"
          data-tab-id="${u(e.id)}"
          aria-selected="${t?"true":"false"}"
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${Ro(e.icon)}</span>
          <span class="guildsync-tab-label">${a(e.label)}</span>
        </button>
      `}).join("")}function Ro(e){return e==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:e==="swords"?"\u2694":e==="gear"?"\u2699":e==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function Kn(){const e=Tt.find(r=>r.id===_)||Tt[0];let t="";return e.id==="discord-members"?t=No():e.id==="eso-members"?t=Co():e.id==="more"?t=sc():e.id==="settings"?t=Jo():t=`
      <div class="guildsync-tab-panel" data-active-tab="${u(e.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${a(e.label)} content will appear here.
        </div>
      </div>
    `,`
    ${t}
    ${J?Ha():""}
    ${fe?Ia():""}
    ${Oe?Qo():""}
    ${qe?na():""}
    ${Pe?aa():""}
    ${Fe?ga():""}
    ${Ue?Mo():""}
  `}function Eo(){return Ue||Te||J||fe||Oe||qe||Pe||Fe||ke}function Do(){return Ue?!1:Fe?(kr(),!0):Pe?(br(),!0):qe?(yr(),!0):Oe?(gr(),!0):fe?(Ce(),!0):J?(J=!1,d(),!0):Te?(Te=!1,d(),!0):ke?(ke=!1,d(),!0):!1}function $o(e){e.key==="Escape"&&Do()&&(e.preventDefault(),e.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",$o,!0),window.guildSyncGlobalModalEscapeAttached=!0);function Jn(e={}){return new Promise(t=>{Ke&&Ke(!1),Ue=!0,Tr={title:e.title||"Confirm Action",message:e.message||"Are you sure?",detail:e.detail||"",confirmLabel:e.confirmLabel||"Confirm",cancelLabel:e.cancelLabel||"Cancel",confirmClass:e.confirmClass||"danger"},Ke=t,d()})}function Nt(e=!1){const t=Ke;Ke=null,Ue=!1,Tr=null,t&&t(e===!0),d()}function Mo(){const e=Tr||{};return`
    <div class="roster-history-overlay guildsync-confirm-overlay" role="dialog" aria-modal="true" aria-labelledby="guildSyncConfirmTitle">
      <div class="roster-history-dialog guildsync-confirm-dialog">
        <div class="roster-history-header guildsync-confirm-header">
          <div>
            <h3 id="guildSyncConfirmTitle">${a(e.title||"Confirm Action")}</h3>
            ${e.detail?`<p>${a(e.detail)}</p>`:""}
          </div>
        </div>
        <div class="guildsync-confirm-body">
          ${a(e.message||"Are you sure?")}
        </div>
        <div class="guildsync-confirm-actions">
          <button id="cancelGuildSyncConfirmButton" class="guildsync-confirm-button guildsync-confirm-cancel" type="button">${a(e.cancelLabel||"Cancel")}</button>
          <button id="acceptGuildSyncConfirmButton" class="guildsync-confirm-button guildsync-confirm-accept ${u(e.confirmClass||"danger")}" type="button">${a(e.confirmLabel||"Confirm")}</button>
        </div>
      </div>
    </div>
  `}function on(e){var n,s,i,o;const t=(s=(n=e.target).closest)==null?void 0:s.call(n,"#cancelGuildSyncConfirmButton"),r=(o=(i=e.target).closest)==null?void 0:o.call(i,"#acceptGuildSyncConfirmButton");if(!(!t&&!r)){if(e.preventDefault(),e.stopPropagation(),t){Nt(!1);return}r&&Nt(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",on,!0),document.addEventListener("pointerup",on,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function To(){if(!Ue)return;const e=document.querySelector("#cancelGuildSyncConfirmButton"),t=document.querySelector("#acceptGuildSyncConfirmButton");e&&(e.onclick=n=>{n.preventDefault(),n.stopPropagation(),Nt(!1)}),t&&(t.onclick=n=>{n.preventDefault(),n.stopPropagation(),Nt(!0)});const r=document.querySelector(".guildsync-confirm-overlay");r&&(r.onclick=n=>{n.target===r&&(n.preventDefault(),n.stopPropagation())})}function Qn(){document.querySelectorAll(".guildsync-tab").forEach(e=>{e.addEventListener("click",()=>{if(Eo())return;const t=e.dataset.tabId;!t||t===_||(_=t,d())})})}function d(e={}){const t=document.querySelector(".guildsync-tabs"),r=document.querySelector("#guildSyncTabContent");t&&(t.innerHTML=Yn()),r&&(r.innerHTML=Kn()),Qn(),Vs(),Ds(),Bs(),ts(),Es(),vs(),ks(),Ss(),ws(),ls(),e.restoreDiscordSearchFocus&&Ec(),e.restoreRosterSearchFocus&&Dc(),_==="discord-members"&&(c==null?void 0:c.connected)&&N.length===0&&!Qe&&Wr({silent:!0}),_==="eso-members"&&(c==null?void 0:c.connected)&&F.length===0&&!de&&!sn&&(sn=!0,dt({silent:!0})),_==="more"&&(c==null?void 0:c.connected)&&V.length===0&&!_e&&Vt({silent:!0}),(_==="discord-members"||_==="eso-members"||_==="settings")&&(c==null?void 0:c.connected)&&R()&&S.length===0&&!O&&Br({silent:!0})}function No(){const e=Ac(),t=$c(),r=Array.from(Le),n=Array.from(Re);return`
    <div class="guildsync-tab-panel discord-member-panel" data-active-tab="discord-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Discord Member Data</h2>
          <p class="discord-data-subtitle">Manage and view Discord member information.</p>
        </div>
        <div class="discord-data-actions">
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${a(Ws(Pt))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${Qe||Rt?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Rt?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${u(Et)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${t.filter(s=>!Le.has(s)).map(s=>`<option value="${u(s)}">${a(s)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All roles</span>':r.map(s=>Cc(s)).join("")}
            </div>
          </div>

          <button id="clearDiscordFiltersButton" class="clear-discord-filters-button" type="button">Clear Filters</button>
          <div class="discord-results-count">${e.length} result${e.length===1?"":"s"}</div>
        </div>

        <div class="discord-filter-row discord-link-filter-row">
          <div class="discord-role-filter-wrap member-link-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordLinkStatusFilter">Link Status</label>
            <select id="discordLinkStatusFilter" class="discord-role-select">
              <option value="">Add link status...</option>
              ${Nr.filter(s=>!Re.has(s.id)).map(s=>`<option value="${u(s.id)}">${a(s.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(s=>Xn("discord",s)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${gt("username","Username")}
                ${gt("global_name","Global Name")}
                ${gt("server_nickname","Server Nickname")}
                ${gt("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${e.length>0?e.map(s=>Mc(s)).join(""):Tc()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `}function Co(){const e=qo(),t=Uo(),r=Array.from(me),n=Array.from(Ee);return`
    <div class="guildsync-tab-panel eso-roster-panel" data-active-tab="eso-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Guild Roster</h2>
          <p class="discord-data-subtitle">Current ESO roster imported from GuildSyncRoster.</p>
        </div>
        <div class="discord-data-actions">
          <span class="discord-last-refresh">Last Refresh: ${a(Xa(Dt))}</span>
          <button id="openRosterHistoryButton" class="clear-discord-filters-button" type="button">Lookup Rank Historical Data</button>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${de?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${de?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${u($t)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${t.filter(s=>!me.has(s)).map(s=>`<option value="${u(s)}">${a(s)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All ranks</span>':r.map(s=>Go(s)).join("")}
            </div>
          </div>

          <button id="clearRosterFiltersButton" class="clear-discord-filters-button" type="button">Clear Filters</button>
          <div class="discord-results-count">${e.length} result${e.length===1?"":"s"}</div>
        </div>

        <div class="discord-filter-row discord-link-filter-row">
          <div class="discord-role-filter-wrap member-link-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterLinkStatusFilter">Link Status</label>
            <select id="rosterLinkStatusFilter" class="discord-role-select">
              <option value="">Add link status...</option>
              ${Nr.filter(s=>!Ee.has(s.id)).map(s=>`<option value="${u(s.id)}">${a(s.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(s=>Xn("roster",s)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${pt("account_name","Account Name")}
                ${pt("rank","Rank")}
                ${pt("joined","Joined")}
                ${pt("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${e.length>0?e.map((s,i)=>Bo(s,i)).join(""):xo()}
            </tbody>
          </table>
        </div>
      </div>
      ${Te?Ho():""}
    </div>
  `}function Bo(e,t=-1){const r=Oo(e.rank||""),n=r?` style="color: ${r};"`:"";return`
    <tr class="eso-roster-row${t===E?" roster-search-active-row":""}"${n} data-roster-row-index="${u(String(t))}" data-eso-account-name="${u(e.account_name||"")}">
      <td>${a(e.account_name||"")}</td>
      <td>${Cr(e.rank||"")}</td>
      <td>${a(Ut(e.joined))}</td>
      <td class="member-link-action-cell">${ps({mode:"eso-to-discord",esoAccountName:e.account_name})}</td>
    </tr>
  `}function xo(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">${a(de?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function Oo(e){const t=String(e||"").trim(),r=zr(t);return Wt(r==null?void 0:r.role_color)}function Cr(e){const t=String(e||"").trim();return`<span class="eso-roster-rank-text">${a(t)}</span>`}function Io(e){const t=String(e||"").trim();return!t||t.toLowerCase()==="unknown"?"":Cr(t)}function qo(){const e=$t.trim().toLowerCase(),t=F.filter(r=>{const n=String(r.rank||"").trim();if(me.size>0&&!me.has(n)||!es(Ee,mr(r)))return!1;if(!e)return!0;const s=Ut(r.joined),i=Ms(r.joined),o=mr(r),l=getRosterMemberLinkTooltip(r.account_name||"");return[r.account_name,n,s,i,r.joined,o,l].map(m=>String(m||"").toLowerCase()).join(" ").includes(e)});return Po(t)}function Po(e){if(!j||!M)return e;const t=M==="desc"?-1:1;return[...e].sort((r,n)=>{const s=an(r,j),i=an(n,j),o=s.localeCompare(i,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*t:String(r.account_name||"").localeCompare(String(n.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function an(e,t){if(t==="rank")return String(e.rank||"");if(t==="joined"){const r=Number(e.joined||0);return Number.isFinite(r)&&r>0?String(r).padStart(16,"0"):""}if(t==="linked"){const r=mr(e);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[r]||"9"} ${r} ${getRosterMemberLinkTooltip(e.account_name||"")}`}return String(e.account_name||"")}function Fo(e){const r=new Set(["account_name","rank","joined","linked"]).has(e)?e:"account_name";j!==r?(j=r,M="asc"):M==="asc"?M="desc":M==="desc"?(j="",M=""):(j=r,M="asc"),E=-1,d()}function pt(e,t,r=""){const n=j===e&&Boolean(M),s=n?M==="asc"?"ascending":"descending":"none",i=n?M==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${u(r)}" aria-sort="${u(s)}">
      <button
        class="discord-sort-header roster-sort-header${n?" active":""}"
        type="button"
        data-roster-sort-column="${u(e)}"
        title="Sort ${u(t)}${n&&M==="asc"?" descending":n&&M==="desc"?" not sorted":" ascending"}"
      >
        <span>${a(t)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function Uo(){return Array.from(new Set(F.map(e=>String(e.rank||"").trim()).filter(Boolean))).sort((e,t)=>e.localeCompare(t))}function Go(e){const t=zr(e),r=Wt(t==null?void 0:t.role_color),n=Yr(r),s=jr(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-roster-rank-filter="${u(e)}"
      style="${s}"
      title="Remove ${u(e)} filter"
    >
      <span>${a(e)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Vo(e){const t=Nr.find(r=>r.id===e);return t?t.label:e}function Xn(e,t){const r=e==="roster"?"roster":"discord",n=Vo(t);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${r}-link-status-filter="${u(t)}"
      title="Remove ${u(n)} link filter"
    >
      <span>${a(n)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Zn(e){const t=Array.isArray(e)?e.filter(Boolean):e?[e]:[];return t.length===0?"unlinked":t.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked"&&String(r.link_method||"").trim().toLowerCase()==="manual")?"manual":t.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked")?"linked":t.some(r=>String(r.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function Wo(e){return Zn(Or(e==null?void 0:e.discord_id))}function mr(e){return Zn(xr(e==null?void 0:e.account_name))}function es(e,t){return!e||e.size===0||e.has(t)?!0:t==="manual"&&e.has("linked")}function Ho(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(Ze)}" />
        </div>

        ${K?`<div class="discord-data-error">${a(K)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${zo()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${le?`: ${a(le)}`:""}</div>
            ${jo()}
          </div>
        </div>
      </div>
    </div>
  `}function zo(){return oe&&B.length===0?'<div class="roster-history-muted">Searching...</div>':B.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${B.map((e,t)=>`
        <button class="roster-history-match${t===P||e.account_name===le?" is-selected":""}" type="button" data-roster-history-account="${u(e.account_name)}">
          <span>${a(e.account_name)}</span>
          <strong>${a(e.rank||"")}</strong>
          ${t===P?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function jo(){return le?oe&&ie.length===0?'<div class="roster-history-muted">Loading history...</div>':ie.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${ie.map(e=>`
            <tr>
              <td class="roster-history-when-cell">${a(Ms(e.timestamp))}</td>
              <td>${a(e.event_type||"")}</td>
              <td>${Io(e.rank)}</td>
              <td>${a(e.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function Yo(){return typeof window<"u"&&window.GUILDSYNC_WEB===!0}function Ko(){return Yo()?`
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
  `:""}function Jo(){return`
    <div class="guildsync-tab-panel reports-panel" data-active-tab="settings">
      <div class="discord-data-header reports-header">
        <div>
          <h2 class="discord-data-title">Reports & Admin</h2>
          <p class="discord-data-subtitle">Run GuildSync reports and administrative review tools. More options can be added here later.</p>
        </div>
      </div>

      <div class="reports-scroll-area">
        ${Ko()}
        <section class="reports-list" aria-label="Available reports">
          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Associates Promotion Eligible</h3>
              <p>Shows Associates who have been in the guild at least two weeks, have purchased at least one raffle ticket, and are linked to Discord. Also shows otherwise eligible Associates who still need a Discord link reviewed.</p>
            </div>
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${Z?"disabled":""}>
              ${Z?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${ee?"disabled":""}>
              ${ee?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, last server-specific activity time, days since last activity, and the activity that updated the timestamp.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${te?"disabled":""}>
              ${te?"Loading...":"Run"}
            </button>
          </article>
        </section>

        <article class="report-option-card">
          <div class="report-option-copy">
            <h3>ESO / Discord Member Links</h3>
            <p>Review automatic ESO-to-Discord links, accept candidate matches, unlink blocked matches, or run the matcher again after roster or Discord refreshes.</p>
          </div>
          <button id="runMemberLinksReportButton" class="refresh-discord-button report-run-button" type="button" ${O?"disabled":""}>
            ${O?"Loading...":"Run"}
          </button>
        </article>
      </div>
    </div>
  `}function ts(){var e,t,r,n,s,i;_==="settings"&&((e=document.querySelector("#runAssociateTicketReportButton"))==null||e.addEventListener("click",()=>rs()),(t=document.querySelector("#runDiscordRankAuditReportButton"))==null||t.addEventListener("click",()=>ra()),(r=document.querySelector("#runDiscordLastSeenReportButton"))==null||r.addEventListener("click",()=>oa()),(n=document.querySelector("#runMemberLinksReportButton"))==null||n.addEventListener("click",()=>ma()),(s=document.querySelector("#webBankingSavedVarsUpload"))==null||s.addEventListener("change",o=>cn(o,"banking")),(i=document.querySelector("#webRosterSavedVarsUpload"))==null||i.addEventListener("change",o=>cn(o,"roster")))}async function cn(e,t){var s;const r=e.currentTarget,n=((s=r==null?void 0:r.files)==null?void 0:s[0])||null;if(!!n)try{const i=await n.text(),o=await fetch(`/api/guildsync/upload-savedvars/${encodeURIComponent(t)}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${(g==null?void 0:g.token)||""}`},body:JSON.stringify({file_name:n.name,raw_lua_text:i})}),l=await o.json().catch(()=>({}));if(!o.ok||l.ok===!1)throw new Error(l.error||l.message||`Upload failed with HTTP ${o.status}.`);h(`web-upload-${t}-success`,l.message||`${n.name} uploaded and processed.`,{ttlMs:p}),t==="banking"?await requestBankingData():t==="roster"&&(await requestRosterData(),await refreshMemberLinksData({silent:!0}))}catch(i){h(`web-upload-${t}-error`,k(i),{ttlMs:p})}finally{r&&(r.value="")}}function rs(){Oe=!0,ge="",d(),Rs()}function gr(){Oe=!1,ge="",d()}function Qo(){const e=Xo(),t=Zo(),r=Ie.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${Z?"disabled":""}>${Z?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(r))} total row${r===1?"":"s"}</span>
        </div>

        ${ge?`<div class="discord-data-error">${a(ge)}</div>`:""}

        <div class="report-results-content">
          ${Z&&r===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!Z&&r===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${r>0?dn("Eligible","Linked to Discord and eligible for promotion review.",e,"No linked eligible Associates found."):""}
          ${r>0?dn("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",t,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${a(ss())}</textarea>
      </div>
    </div>
  `}function Xo(){return Ie.filter(e=>String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible")}function Zo(){return Ie.filter(e=>String(e.report_group||e.eligibility_group||"").toLowerCase()!=="eligible")}function dn(e,t,r,n){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${a(e)}</h4>
          <p>${a(t)}</p>
        </div>
        <span>${a(String(r.length))} row${r.length===1?"":"s"}</span>
      </div>
      ${r.length>0?ea(r):`<div class="roster-history-muted report-section-empty">${a(n)}</div>`}
    </section>
  `}function ea(e=Ie){return`
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
          ${e.map(t=>`
            <tr>
              <td>${a(t.account_name||"")}</td>
              <td>${Cr(t.rank||"")}</td>
              <td>${a(Ut(t.joined))}</td>
              <td>${a(Gt(t.purchased_tickets||0))}</td>
              <td>${a(ns(t))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function ns(e){return String(e.link_status||"").toLowerCase()==="linked"?e.discord_server_nickname||e.discord_display_name||e.discord_username||e.discord_user_id||"Linked":"Needs Link Review"}function ss(){const e=[["Section","Account Name","Rank","Joined","Purchased Tickets","Discord Link"]];for(const t of Ie){const r=String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";e.push([r,t.account_name||"",t.rank||"",Ut(t.joined),Gt(t.purchased_tickets||0),ns(t)])}return e.map(t=>t.map(Pr).join("	")).join(`
`)}async function ta(){const e=ss();if(await Fr(e)){h("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#associateTicketReportTsv");r&&(r.focus(),r.select()),h("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function ra(){qe=!0,ye="",d(),Ls()}function yr(){qe=!1,ye="",d()}function na(){const e=et.length;return`
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
          <button id="copyDiscordRankAuditReportGridButton" class="bank-export-copy-button" type="button" ${e===0?"disabled":""}>Copy Grid</button>
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${ee?"disabled":""}>${ee?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(e))} total row${e===1?"":"s"}</span>
        </div>

        ${ye?`<div class="discord-data-error">${a(ye)}</div>`:""}

        <div class="report-results-content">
          ${ee&&e===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!ee&&e===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${e>0?sa(et):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${a(as())}</textarea>
      </div>
    </div>
  `}function sa(e=et){return`
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
          ${e.map(t=>`
            <tr>
              <td>${a(is(t))}</td>
              <td>${a(t.discord_rank||"No matching rank role")}</td>
              <td>${a(t.eso_accounts||"No linked ESO account")}</td>
              <td>${a(t.eso_rank||"None")}</td>
              <td>${a(os(t))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function is(e){return e.server_nickname||e.global_name||e.username||e.discord_id||""}function os(e){const t=String(e.issue_type||"").toLowerCase();return t==="no_linked_eso_account"?"No linked ESO account":t==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":t==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":t==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":t||"Review needed"}function as(){const e=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const t of et)e.push([is(t),t.username||"",t.discord_rank||"No matching rank role",t.discord_rank_roles||"",t.eso_accounts||"No linked ESO account",t.eso_rank||"None",os(t)]);return e.map(t=>t.map(Pr).join("	")).join(`
`)}async function ia(){const e=as();if(await Fr(e)){h("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#discordRankAuditReportTsv");r&&(r.focus(),r.select()),h("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function oa(){Pe=!0,be="",ot="",d(),As(),S.length===0&&!O&&Br({silent:!0})}function br(){Pe=!1,be="",ot="",De="",re="",d()}function aa(){const e=da(),t=Mr.length;return`
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
          <button id="copyDiscordLastSeenReportGridButton" class="bank-export-copy-button" type="button" ${t===0?"disabled":""}>Copy Grid</button>
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${te?"disabled":""}>${te?"Loading...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(t))} Discord member${t===1?"":"s"}</span>
        </div>

        <input
          id="discordLastSeenReportSearchInput"
          class="member-links-report-search-input discord-last-seen-search-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="Search Discord member, username, last seen action, or date..."
          value="${u(ot)}"
        />

        ${be?`<div class="discord-data-error discord-last-seen-report-error">${a(be)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${te&&t===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!te&&t===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${t>0?ca(e):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${a(guildsyncLastSeenReportTsv(e))}</textarea>
      </div>
    </div>
  `}function ca(e=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${mt("name","Discord Member")}</th>
            <th>${mt("eso","ESO")}</th>
            <th>${mt("date","Last Seen")}</th>
            <th>${mt("days","Days Since")}</th>
            <th>${mt("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${e.map(t=>`
            <tr class="discord-last-seen-row ${u(pa(t.last_seen))}" data-discord-last-seen-row data-discord-last-seen-search="${u(ua(t))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${ha(t)}
                  <span>${a(tt(t))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${guildsyncRenderLastSeenEso(t)}</td>
              <td>${a(cs(t.last_seen))}</td>
              <td>${a(ds(t.last_seen))}</td>
              <td>${a(vr(t.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function mt(e,t){const r=De===e,n=r?re==="asc"?"\u25B2":"\u25BC":"\u2195",s=r?`${t}: ${re==="asc"?"ascending":"descending"}`:`${t}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${r?" active":""}" type="button" data-discord-last-seen-sort="${u(e)}" title="${u(s)}">
      <span>${a(t)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${a(n)}</span>
    </button>
  `}function da(){const e=[...Mr],t=De,r=re;if(!t||!r)return e;const n=r==="desc"?-1:1;return e.sort((s,i)=>{if(t==="date"){const o=Number(s.last_seen||0)||0,l=Number(i.last_seen||0)||0;return(o-l)*n}if(t==="days")return(ln(s.last_seen)-ln(i.last_seen))*n;if(t==="action")return vr(s.last_seen_action).localeCompare(vr(i.last_seen_action),void 0,{sensitivity:"base"})*n;if(t==="eso"){const o=guildsyncLastSeenEsoData(s),l=guildsyncLastSeenEsoData(i),m={linked:0,candidate:1,unlinked:2},f=((m[o.status]??9)-(m[l.status]??9));return f!==0?f*n:o.esoAccountName.localeCompare(l.esoAccountName,void 0,{sensitivity:"base"})*n}return tt(s).localeCompare(tt(i),void 0,{sensitivity:"base"})*n})}function la(e){De!==e?(De=e,re="asc"):re==="asc"?re="desc":(De="",re=""),d()}function tt(e){return(e==null?void 0:e.server_nickname)||(e==null?void 0:e.global_name)||(e==null?void 0:e.username)||(e==null?void 0:e.discord_id)||""}function ua(e){return[tt(e),e==null?void 0:e.server_nickname,e==null?void 0:e.global_name,e==null?void 0:e.username,e==null?void 0:e.discord_id,e==null?void 0:e.last_seen_action,guildsyncLastSeenEsoSearch(e),cs(e==null?void 0:e.last_seen),ds(e==null?void 0:e.last_seen)].filter(Boolean).join(" ")}function guildsyncLastSeenEsoData(e){const t=La(Or(e==null?void 0:e.discord_id)),r=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),n=String((t==null?void 0:t.eso_account_name)||"").trim();return r==="linked"&&n?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:n,title:`Linked ESO account: ${n}`}:(r==="candidate"||String((t==null?void 0:t.link_method)||"").trim().toLowerCase()==="fuzzy")&&n?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:n,title:`Fuzzy ESO account candidate: ${n}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function guildsyncRenderLastSeenEso(e){const t=guildsyncLastSeenEsoData(e);return`<span class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${u(t.className)}" title="${u(t.title)}" aria-label="${u(t.label)}" role="img"></span>`}function guildsyncLastSeenEsoSearch(e){const t=guildsyncLastSeenEsoData(e);return[t.status,t.label,t.esoAccountName].filter(Boolean).join(" ")}function fa(e){const t=String((e==null?void 0:e.avatar)||"").trim(),r=String((e==null?void 0:e.discord_id)||"").trim();if(!t||!r)return"";if(/^https?:\/\//i.test(t))return t;const n=t.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(t)}.${n}?size=64`}function ha(e){const t=tt(e),r=t?t.slice(0,2).toUpperCase():"?",n=fa(e);return n?`<span class="discord-member-avatar"><img src="${u(n)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${a(r)}</span>`}function cs(e){const t=Number(e);if(!t)return"Never";const r=new Date(t*1e3);if(Number.isNaN(r.getTime()))return String(e||"");const n=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(r).reduce((s,i)=>(s[i.type]=i.value,s),{});return`${n.month}/${n.day}/${n.year} ${n.hour}:${n.minute} ${n.dayPeriod}`}function pa(e){const t=Number(e);if(!t)return"discord-last-seen-unknown";const r=(Date.now()-t*1e3)/864e5;return r>30?"discord-last-seen-red":r>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function ds(e){const t=Number(e);if(!t)return"Never";const r=Date.now()-t*1e3;if(!Number.isFinite(r))return"";if(r<0)return"0 days";const n=Math.floor(r/864e5);return`${n} day${n===1?"":"s"}`}function ln(e){const t=Number(e);if(!t)return Number.POSITIVE_INFINITY;const r=Date.now()-t*1e3;return Number.isFinite(r)?r<0?0:Math.floor(r/864e5):Number.POSITIVE_INFINITY}function vr(e){return String(e||"").trim()||"None tracked"}function guildsyncLastSeenReportTsv(e=da()){const t=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const r of e){const n=guildsyncLastSeenEsoData(r);t.push([tt(r),n.label||"",n.esoAccountName||"",cs(r==null?void 0:r.last_seen),ds(r==null?void 0:r.last_seen),vr(r==null?void 0:r.last_seen_action),(r==null?void 0:r.username)||"",(r==null?void 0:r.discord_id)||""])}return t.map(r=>r.map(Pr).join("\t")).join(`\n`)}async function guildsyncCopyLastSeenReportGrid(){const e=ue(ot),t=da().filter(r=>!e||ue(ua(r)).includes(e)),n=guildsyncLastSeenReportTsv(t);if(await Fr(n)){h("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:p});return}const s=document.querySelector("#discordLastSeenReportTsv");s&&(s.focus(),s.select()),h("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function ma(){Fe=!0,I="",d(),S.length===0&&!O&&Br({silent:!0})}function kr(){Fe=!1,Ft="",Y=-1,d()}function ga(){return`
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
          <button id="refreshMemberLinksButton" class="clear-discord-filters-button" type="button" ${O?"disabled":""}>Refresh Links</button>
          <button id="runMemberAutoLinkButton" class="refresh-discord-button" type="button" ${O?"disabled":""}>${O?"Running...":"Run Auto-Linking"}</button>
          <span class="roster-history-muted">${a(String(S.length))} link/candidate row${S.length===1?"":"s"}</span>
        </div>

        <input
          id="memberLinksReportSearchInput"
          class="member-links-report-search-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="Search ESO or Discord member links..."
          value="${u(Ft)}"
        />

        ${I?`<div class="discord-data-error member-links-report-error">${a(I)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${ka()}
        </div>
      </div>
    </div>
  `}function ls(){var r,n,s;if(!Fe)return;(r=document.querySelector("#closeMemberLinksReportButton"))==null||r.addEventListener("click",kr),(n=document.querySelector("#refreshMemberLinksButton"))==null||n.addEventListener("click",()=>Br()),(s=document.querySelector("#runMemberAutoLinkButton"))==null||s.addEventListener("click",()=>_a());const e=document.querySelector("#memberLinksReportSearchInput");e&&(e.addEventListener("input",Sa),e.addEventListener("keydown",wa),fs()),document.querySelectorAll("[data-accept-member-candidate]").forEach(i=>{i.addEventListener("click",()=>hs(i.dataset.acceptMemberCandidate||"",i.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(i=>{i.addEventListener("click",()=>Aa(i.dataset.unlinkMemberLink||"",i.dataset.unlinkMemberLinkDiscordId||""))});const t=document.querySelector(".member-links-report-overlay");t&&t.addEventListener("click",i=>{i.target===t&&kr()})}function un(e){const t=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),r=String((e==null?void 0:e.link_method)||"").trim().toLowerCase();return t==="candidate"||r==="fuzzy"?0:t==="linked"?2:1}function fn(e){return[e==null?void 0:e.eso_account_name,e==null?void 0:e.discord_server_nickname,e==null?void 0:e.discord_display_name,e==null?void 0:e.discord_username,e==null?void 0:e.discord_user_id].filter(Boolean).join(" ")}function ya(e){return[e==null?void 0:e.eso_account_name,e==null?void 0:e.discord_username,e==null?void 0:e.discord_display_name,e==null?void 0:e.discord_server_nickname,e==null?void 0:e.discord_user_id,e==null?void 0:e.link_status,e==null?void 0:e.link_method,e==null?void 0:e.match_reason,e==null?void 0:e.match_field,Ct(e)].filter(Boolean).join(" ")}function ba(e){return[...Array.isArray(e)?e:[]].sort((t,r)=>{const n=un(t)-un(r);if(n!==0)return n;const s=fn(t).localeCompare(fn(r),void 0,{sensitivity:"base"});return s!==0?s:String((t==null?void 0:t.discord_user_id)||"").localeCompare(String((r==null?void 0:r.discord_user_id)||""),void 0,{sensitivity:"base"})})}function va(e){const t=Ct(e);let r="";t==="Username"?r=(e==null?void 0:e.discord_username)||"":t==="Global Name"?r=(e==null?void 0:e.discord_display_name)||"":t==="Server Nickname"&&(r=(e==null?void 0:e.discord_server_nickname)||""),r||(r=(e==null?void 0:e.discord_server_nickname)||(e==null?void 0:e.discord_display_name)||(e==null?void 0:e.discord_username)||(e==null?void 0:e.discord_user_id)||"");const n=t?` <span class="member-link-report-match-field">(${a(t)})</span>`:"";return`<span class="member-link-report-discord-name">${a(r)}</span>${n}`}function ka(){return O&&S.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(S)||S.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${ba(S).map(t=>{var i;const r=String(t.link_status||"").trim().toLowerCase(),n=String(t.link_method||"").trim().toLowerCase(),s=va(t);return`
              <tr data-member-links-report-row data-member-links-report-search="${u(ya(t))}">
                <td>${a(t.eso_account_name||"")}</td>
                <td>${s}</td>
                <td class="member-links-status-col">${a(r||"")}</td>
                <td class="member-links-method-col">${a(n||"")}${Number(t.locked||0)===1?" \u{1F512}":""}</td>
                <td class="member-links-action-col">
                  <div class="member-link-actions">
                    ${r==="candidate"?`<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${u(t.eso_account_name||"")}" data-accept-member-candidate-discord-id="${u(t.discord_user_id||"")}" aria-label="Accept candidate link" title="Accept candidate link">\u2713</button>`:""}
                    ${r==="linked"?`<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${u(t.eso_account_name||"")}" data-unlink-member-link-discord-id="${u(t.discord_user_id||"")}" aria-label="Unlink this ESO/Discord pair" title="Unlink this ESO/Discord pair">\u{1F5D1}</button>`:""}
                  </div>
                </td>
                <td class="member-links-confidence-col">${a(String((i=t.match_confidence)!=null?i:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function us(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(e=>e.offsetParent!==null)}function hn(e){const t=us();if(t.forEach(n=>n.classList.remove("member-links-report-row-active")),t.length===0){Y=-1;return}Y=Math.max(0,Math.min(e,t.length-1));const r=t[Y];r.classList.add("member-links-report-row-active"),r.scrollIntoView({block:"nearest"})}function fs(){const e=ue(Ft),t=[...document.querySelectorAll("[data-member-links-report-row]")];let r=0;t.forEach(s=>{const i=ue(s.dataset.memberLinksReportSearch||s.textContent||""),o=!e||i.includes(e);s.hidden=!o,s.classList.remove("member-links-report-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinksReportSearchEmpty");n&&(n.hidden=r!==0),Y=-1}function Sa(e){Ft=e.target.value||"",fs()}function wa(e){if(e.key==="Enter"){e.preventDefault();return}if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;e.preventDefault();const t=us();if(t.length===0)return;if(e.key==="ArrowDown"){const n=Y<0?0:Y+1;hn(n>=t.length?t.length-1:n);return}const r=Y<0?t.length-1:Y-1;hn(r<0?0:r)}async function Br(e={}){if(!(c!=null&&c.connected)||!g.logged_in){I="You must be logged in and connected to load member links.",d();return}O=!0,I="",e.silent||d();try{const t=await w("guildsync:request-member-links",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load member links.");S=Array.isArray(t.links)?t.links:[]}catch(t){I=k(t)}finally{O=!1,d()}}async function _a(){if(!(c!=null&&c.connected)||!g.logged_in){I="You must be logged in and connected to run auto-linking.",d();return}O=!0,I="",d();try{const e=await w("guildsync:run-member-auto-linking",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to run auto-linking.");S=Array.isArray(e.links)?e.links:[],h("member-auto-link",e.message||"Member auto-linking complete.",{ttlMs:p})}catch(e){I=k(e)}finally{O=!1,d()}}async function hs(e,t=""){try{const r=await w("guildsync:accept-member-link-candidate",{esoAccountName:e,discordUserId:t},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to accept candidate.");S=Array.isArray(r.links)?r.links:S,h("member-link-accepted",r.message||"Candidate accepted as a link.",{ttlMs:p})}catch(r){I=k(r),h("member-link-accept-error",I,{ttlMs:p})}}async function Aa(e,t=""){if(!!await Jn({title:"Unlink Member?",message:`Remove the link between ${e} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const n=await w("guildsync:manual-unlink-member",{esoAccountName:e,discordUserId:t},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to unlink member.");S=Array.isArray(n.links)?n.links:S,h("member-link-unlinked",n.message||"Member link removed.",{ttlMs:p})}catch(n){I=k(n)}d()}}function Ae(e){return String(e||"").trim().replace(/^@+/,"").toLowerCase()}function xr(e){const t=Ae(e);return t?S.filter(r=>Ae(r.eso_account_name)===t):[]}function Or(e){const t=String(e||"").trim();return t?S.filter(r=>String(r.discord_user_id||"").trim()===t):[]}function La(e=[]){const t=Array.isArray(e)?e.filter(Boolean):[];if(t.length===0)return null;const r=t.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked");if(r.length>0){const s=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(s)return s;const i=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return i||r[0]}const n=t.find(s=>String(s.link_status||"").trim().toLowerCase()==="candidate");return n||t[0]}function Ra(e){return`${Ae(e==null?void 0:e.eso_account_name)}::${String((e==null?void 0:e.discord_user_id)||"").trim()}`}function Ir(){return v?v.mode==="discord-to-eso"?Or(v.discordUserId):xr(v.esoAccountName):[]}function Ea(e){const t=String(e||"").trim(),r=N.find(n=>String(n.discord_id||"").trim()===t);return r&&(r.server_nickname||r.global_name||r.username||r.discord_id)||t}function Da(e){const t=(e==null?void 0:e.mode)||"",r=t==="discord-to-eso"?Or(e.discordUserId):xr(e.esoAccountName),n=La(r),s=String((n==null?void 0:n.link_status)||"").trim().toLowerCase(),i=r.filter(l=>String(l.link_status||"").trim().toLowerCase()==="linked").length,o=r.filter(l=>String(l.link_status||"").trim().toLowerCase()==="candidate").length;return i>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${t==="discord-to-eso"?i===1?n.eso_account_name:`${i} ESO accounts`:i===1?n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member":`${i} Discord accounts`}`}:s==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${t==="discord-to-eso"?n.eso_account_name:n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member"}`}:s==="blocked"||Number((n==null?void 0:n.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function ps(e){const t=(e==null?void 0:e.mode)||"",r=t==="discord-to-eso"?e.discordUserId:e.esoAccountName,n=Da(e);return`
    <button
      class="member-link-status-dot member-link-status-${u(n.className)}"
      type="button"
      title="${u(n.title)}"
      aria-label="${u(n.label)}"
      data-open-member-link-dialog="${u(t)}"
      data-member-link-value="${u(r||"")}"
    ></button>
  `}function $a(){return v?v.mode==="discord-to-eso"?Ea(v.discordUserId):v.esoAccountName||"":""}function ms(e){const t=String(e||"").trim().toLowerCase();return t==="discord_username"||t==="username"?"Username":t==="discord_display_name"||t==="global_name"||t==="display_name"?"Global Name":t==="discord_server_nickname"||t==="server_nickname"||t==="nickname"?"Server Nickname":""}function Ct(e){const t=ms((e==null?void 0:e.match_field)||(e==null?void 0:e.matched_field)||(e==null?void 0:e.discord_match_field));if(t)return t;const r=String((e==null?void 0:e.match_reason)||"").toLowerCase();if(r.includes("discord_username")||r.includes("username"))return"Username";if(r.includes("discord_display_name")||r.includes("global")||r.includes("display"))return"Global Name";if(r.includes("discord_server_nickname")||r.includes("server")||r.includes("nickname"))return"Server Nickname";const n=String((e==null?void 0:e.link_method)||"").trim().toLowerCase();if(n==="exact"||n==="fuzzy"){const s=(e==null?void 0:e.eso_account_name)||"",i=[{field:"Username",value:e==null?void 0:e.discord_username},{field:"Global Name",value:e==null?void 0:e.discord_display_name},{field:"Server Nickname",value:e==null?void 0:e.discord_server_nickname}];let o=null;for(const l of i){const f=Ma(s,l.value);(!o||f>o.score)&&(o={...l,score:f})}if(o&&o.score>0)return o.field}return""}function ue(e){return String(e||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function Ma(e,t){const r=ue(e),n=ue(t);if(!r||!n)return 0;if(r===n)return 100;if((r.includes(n)||n.includes(r))&&Math.min(r.length,n.length)>=4)return 88;const s=Math.abs(r.length-n.length),i=[...r].findIndex((l,f)=>l!==n[f]),o=i===-1?Math.min(r.length,n.length):i;return Math.max(0,Math.min(75,Math.round(o*10-s*3)))}function Ta(e){const t=String(e||"").trim().toLowerCase();return t==="blocked"||t==="unlinked"?"unlinked":t||"unlinked"}function Na(e){const t=String(e||"").trim().toLowerCase();return t==="manual_unlink"?"auto-link disabled":t||"none"}function Ca(e){var f;const t=e.discord_server_nickname||e.discord_display_name||e.discord_username||e.discord_user_id||"",r=Number(e.locked||0)===1?"Auto-link blocked":"Auto-managed",n=String(e.link_status||"").trim().toLowerCase(),s=n==="linked",i=n==="candidate",o=s?"Current Link":i?"Suggested Link":"Blocked Link",l=s?`<button
        class="member-link-trash-button"
        type="button"
        aria-label="Unlink this ESO/Discord pair"
        title="Unlink this ESO/Discord pair"
        data-unlink-dialog-member-link
        data-unlink-eso-account="${u(e.eso_account_name||"")}"
        data-unlink-discord-user-id="${u(e.discord_user_id||"")}"
      >\u{1F5D1}</button>`:i?`<button
          class="member-link-approve-button"
          type="button"
          aria-label="Approve suggested link"
          title="Approve suggested link"
          data-accept-dialog-member-candidate="${u(e.eso_account_name||"")}"
          data-accept-dialog-discord-user-id="${u(e.discord_user_id||"")}"
        >\u2713</button>`:"";return`
    <div class="member-link-current-card">
      <div class="member-link-current-details">
        <div class="member-link-current-kind">${a(o)}</div>
        <div><span>ESO:</span> ${a(e.eso_account_name||"")}</div>
        <div><span>Discord:</span> ${a(t)}</div>
        <div><span>Status:</span> ${a(Ta(e.link_status))} \xB7 ${a(Na(e.link_method))} \xB7 ${a(String((f=e.match_confidence)!=null?f:""))}% \xB7 ${a(r)}</div>
        ${Ct(e)?`<div><span>Matched:</span> Matched on ${a(Ct(e))}</div>`:""}
      </div>
      ${l}
    </div>
  `}function Ba(){const e=Ir();return e.length?[...e].sort((r,n)=>{var f,m;const s=String(r.link_status||"").trim().toLowerCase(),i=String(n.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},l=((f=o[s])!=null?f:9)-((m=o[i])!=null?m:9);return l!==0?l:Number(n.match_confidence||0)-Number(r.match_confidence||0)}).map(r=>Ca(r)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function xa(){if(Ne)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(X)return`<div class="discord-data-error">${a(X)}</div>`;if(!Array.isArray(ve)||ve.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const e=new Set(Ir().map(r=>Ra(r))),t=[...ve].filter(r=>{const n=(v==null?void 0:v.mode)==="discord-to-eso"?`${Ae(r.account_name)}::${String(v.discordUserId||"").trim()}`:`${Ae(v==null?void 0:v.esoAccountName)}::${String(r.discord_id||"").trim()}`;return!e.has(n)}).sort((r,n)=>{const s=Number(n.confidence||0)-Number(r.confidence||0);return s!==0?s:pn(r).localeCompare(pn(n),void 0,{sensitivity:"base"})});return t.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${t.map(r=>Oa(r)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function pn(e){return((v==null?void 0:v.mode)||"")==="discord-to-eso"?String(e.account_name||""):String(e.server_nickname||e.global_name||e.username||e.discord_id||"")}function Oa(e,t={}){var b;const r=(v==null?void 0:v.mode)||"",n=r==="discord-to-eso"?e.account_name:e.server_nickname||e.global_name||e.username||e.discord_id||"Discord member",s=ms(e.matchField||e.match_field||e.discordMatchField||e.discord_match_field),i=r==="discord-to-eso"?`Rank: ${e.rank||""}`:[e.username,e.global_name,e.server_nickname].filter(Boolean).join(" \xB7 "),o=[i,s?`Matched on ${s}`:""].filter(Boolean).join(" \u2022 "),l=r==="discord-to-eso"?e.account_name:e.discord_id,f=t.disabled===!0,m=[n,i,o,e.account_name,e.username,e.global_name,e.server_nickname,e.discord_id].filter(Boolean).join(" ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${u(l||"")}" data-member-link-option-search="${u(m)}" ${f?"disabled":""}>
      <span class="member-link-option-name">${a(n||"")}</span>
      <span class="member-link-option-subtitle">${a(o||"")}</span>
      <span class="member-link-option-confidence">${a(String((b=e.confidence)!=null?b:0))}%</span>
    </button>
  `}function Ia(){const e=(v==null?void 0:v.mode)||"",t=$a(),r=e==="discord-to-eso"?"ESO Account":"Discord Member";return`
    <div class="roster-history-overlay member-link-dialog-overlay" role="dialog" aria-modal="true" aria-labelledby="memberLinkDialogTitle">
      <div class="roster-history-dialog member-link-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="memberLinkDialogTitle">Member Link</h3>
            <p>${a(t)} \u2192 choose ${a(r)}.</p>
          </div>
          <button id="closeMemberLinkDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close member link window" title="Close">\xD7</button>
        </div>

        <div class="member-link-dialog-body">
          <section class="member-link-dialog-section">
            <h4>Current Link</h4>
            ${Ba()}
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
              value="${u(at)}"
            />
            ${xa()}
          </section>
        </div>

      </div>
    </div>
  `}async function gs(e,t){if(!(c!=null&&c.connected)||!R()){h("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:p});return}fe=!0,v=e==="discord-to-eso"?{mode:e,discordUserId:t}:{mode:"eso-to-discord",esoAccountName:t},ve=[],Ne=!0,X="",at="",U=-1,d();try{if(!Array.isArray(S)||S.length===0){const s=await w("guildsync:request-member-links",{},3e4);s!=null&&s.ok&&(S=Array.isArray(s.links)?s.links:[])}const n=await w("guildsync:request-member-link-options",e==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:t}:{mode:"eso-to-discord",accountName:t},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load link suggestions.");ve=Array.isArray(n.options)?n.options:[]}catch(r){X=k(r)}finally{Ne=!1,d()}}function Ce(){document.removeEventListener("keydown",Sr),fe=!1,v=null,ve=[],Ne=!1,X="",at="",U=-1,d()}function ys(){return[...document.querySelectorAll(".member-link-option-row")].filter(e=>e.offsetParent!==null&&!e.disabled)}function mn(e){const t=ys();if(t.forEach(n=>n.classList.remove("member-link-option-row-active")),t.length===0){U=-1;return}U=Math.max(0,Math.min(e,t.length-1));const r=t[U];r.classList.add("member-link-option-row-active"),r.scrollIntoView({block:"nearest"})}function bs(){const e=ue(at),t=[...document.querySelectorAll(".member-link-option-row")];let r=0;t.forEach(s=>{const i=ue(s.dataset.memberLinkOptionSearch||s.textContent||""),o=!e||i.includes(e);s.hidden=!o,s.classList.remove("member-link-option-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinkSuggestionSearchEmpty");n&&(n.hidden=r!==0),U=-1}function qa(e){at=e.target.value||"",bs()}function Pa(e){if(e.key==="Enter"){e.preventDefault();return}if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;e.preventDefault();const t=ys();if(t.length===0)return;if(e.key==="ArrowDown"){const n=U<0?0:U+1;mn(n>=t.length?t.length-1:n);return}const r=U<0?t.length-1:U-1;mn(r<0?0:r)}function Sr(e){!fe||e.key==="Escape"&&(e.preventDefault(),Ce())}async function Fa(e){if(!(!v||!e))try{const t=v.mode==="discord-to-eso"?{esoAccountName:e,discordUserId:v.discordUserId}:{esoAccountName:v.esoAccountName,discordUserId:e},r=await w("guildsync:manual-link-member",t,3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to link members.");S=Array.isArray(r.links)?r.links:S,h("member-link-saved",r.message||"Member link saved.",{ttlMs:p}),Ce()}catch(t){X=k(t),d()}}async function Ua(e,t=""){await hs(e,t),Ce()}async function Ga(){if(!!v){Ne=!0,X="",d();try{const e=v.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:v.discordUserId}:{mode:"eso-to-discord",accountName:v.esoAccountName},t=await w("guildsync:request-member-link-options",e,3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load link suggestions.");ve=Array.isArray(t.options)?t.options:[]}catch(e){X=k(e)}finally{Ne=!1,d()}}}async function Va(e="",t=""){const r=Ir().find(s=>Ae(s.eso_account_name)===Ae(e)&&String(s.discord_user_id||"").trim()===String(t||"").trim());if(!(!r||!await Jn({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const s=await w("guildsync:manual-unlink-member",{esoAccountName:r.eso_account_name,discordUserId:r.discord_user_id},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to unlink member.");S=Array.isArray(s.links)?s.links:S,h("member-link-unlinked",s.message||"Member link removed.",{ttlMs:p}),await Ga()}catch(s){X=k(s),d()}}function vs(){var r;if(!fe)return;document.removeEventListener("keydown",Sr),document.addEventListener("keydown",Sr),(r=document.querySelector("#closeMemberLinkDialogButton"))==null||r.addEventListener("click",Ce);const e=document.querySelector("#memberLinkSuggestionSearchInput");e&&(e.addEventListener("input",qa),e.addEventListener("keydown",Pa),bs()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(n=>{n.addEventListener("click",()=>Va(n.dataset.unlinkEsoAccount||"",n.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(n=>{n.addEventListener("click",()=>Fa(n.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(n=>{n.addEventListener("click",()=>Ua(n.dataset.acceptDialogMemberCandidate||"",n.dataset.acceptDialogDiscordUserId||""))});const t=document.querySelector(".member-link-dialog-overlay");t&&t.addEventListener("click",n=>{n.target===t&&Ce()})}function ks(){var t,r,n;if(!Oe)return;(t=document.querySelector("#closeAssociateTicketReportButton"))==null||t.addEventListener("click",gr),(r=document.querySelector("#rerunAssociateTicketReportButton"))==null||r.addEventListener("click",()=>Rs()),(n=document.querySelector("#copyAssociateTicketReportGridButton"))==null||n.addEventListener("click",()=>ta());const e=document.querySelector(".report-results-overlay");e&&e.addEventListener("click",s=>{s.target===e&&gr()})}function Ss(){var t,r,n;if(!qe)return;(t=document.querySelector("#closeDiscordRankAuditReportButton"))==null||t.addEventListener("click",yr),(r=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||r.addEventListener("click",()=>Ls()),(n=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||n.addEventListener("click",()=>ia());const e=document.querySelector(".report-results-overlay");e&&e.addEventListener("click",s=>{s.target===e&&yr()})}function ws(){var r,n,s;if(!Pe)return;(r=document.querySelector("#closeDiscordLastSeenReportButton"))==null||r.addEventListener("click",br),(n=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||n.addEventListener("click",()=>As()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>guildsyncCopyLastSeenReportGrid()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(i=>{i.addEventListener("click",()=>la(i.dataset.discordLastSeenSort||""))});const e=document.querySelector("#discordLastSeenReportSearchInput");e&&(e.addEventListener("input",Wa),_s());const t=document.querySelector(".discord-last-seen-report-overlay");t&&t.addEventListener("click",s=>{s.target===t&&br()})}function Wa(e){ot=e.target.value||"",_s()}function _s(){const e=ue(ot),t=[...document.querySelectorAll("[data-discord-last-seen-row]")];let r=0;t.forEach(s=>{const i=ue(s.dataset.discordLastSeenSearch||s.textContent||""),o=!e||i.includes(e);s.hidden=!o,o&&(r+=1)});const n=document.querySelector("#discordLastSeenReportSearchEmpty");n&&(n.hidden=r!==0)}async function As(){if(!(c!=null&&c.connected)||!R()){be="You must be logged in and connected to run this report.",d();return}te=!0,be="",d();try{const e=await w("guildsync:request-discord-member-dataJSON",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load Discord roster data.");N=Hr(e.members),Mr=[...N]}catch(e){be=k(e)}finally{te=!1,d(),Q("discordLastSeenReportSearchInput")}}async function Ls(){if(!(c!=null&&c.connected)||!R()){ye="You must be logged in and connected to run this report.",d();return}ee=!0,ye="",d();try{const e=await w("guildsync:request-discord-rank-audit-report",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to run report.");et=Array.isArray(e.rows)?e.rows:[]}catch(e){ye=k(e)}finally{ee=!1,d()}}async function Rs(){if(!(c!=null&&c.connected)||!R()){ge="You must be logged in and connected to run this report.",d();return}Z=!0,ge="",d();try{const e=await w("guildsync:request-associate-ticket-report",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to run report.");Ie=Array.isArray(e.rows)?e.rows:[]}catch(e){ge=k(e)}finally{Z=!1,d()}}function wr(){const e=String(Ge||"").trim().toLowerCase();return e?F.filter(t=>String(t.account_name||"").trim()).filter(t=>String(t.account_name||"").toLowerCase().includes(e)).slice().sort((t,r)=>{const n=String(t.account_name||"").toLowerCase(),s=String(r.account_name||"").toLowerCase(),i=n.startsWith(e)?0:1,o=s.startsWith(e)?0:1;return i!==o?i-o:n.localeCompare(s)}).slice(0,20):[]}function gn(e){const t=String(e||"").trim();$.accountName=t,Ge=t,z="",d(),Q("manualTicketAccountSearchInput")}function Q(e){window.setTimeout(()=>{const t=document.querySelector(`#${e}`);if(!t)return;t.focus();const r=String(t.value||"").length;typeof t.setSelectionRange=="function"&&t.setSelectionRange(r,r)},0)}function Ha(){const e=wr(),t=String($.accountName||"").trim();return`
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
            <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(Ge)}" autocomplete="off" />
          </label>

          ${t?`<div class="roster-history-muted">Selected: ${a(t)}</div>`:""}

          <div class="roster-history-match-list manual-ticket-match-list">
            ${e.length===0?'<div class="roster-history-muted">No matching names</div>':e.map((r,n)=>`
                <button class="roster-history-match${n===H||r.account_name===t?" is-selected":""}" type="button" data-manual-ticket-account="${u(r.account_name)}">
                  <span>${a(r.account_name)}</span>
                  <strong>${a(r.rank||"")}</strong>
                  ${n===H?"<small>Enter</small>":""}
                </button>
              `).join("")}
          </div>

          <div class="manual-ticket-entry-row">
            <label class="manual-ticket-note-field">
              <textarea id="manualTicketNoteInput" class="discord-search-input manual-ticket-note-input" rows="4" placeholder="Enter a reason such as FFTG">${a($.note)}</textarea>
            </label>
            <label class="manual-ticket-count-field">
              <div class="manual-ticket-number-wrap">
                <input id="manualTicketCountInput" class="discord-search-input manual-ticket-count-input" type="number" min="1" step="1" inputmode="numeric" placeholder="# Tickets" value="${u($.tickets)}" />
                <div class="manual-ticket-number-buttons" aria-hidden="true">
                  <button id="manualTicketCountUpButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2303</button>
                  <button id="manualTicketCountDownButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2304</button>
                </div>
              </div>
            </label>
          </div>
          <div class="manual-ticket-actions">
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${Mt?"disabled":""}>${Mt?"Saving...":"Add Manual Tickets"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Es(){var s,i,o,l,f;if(!J)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{J=!1,d()});const e=document.querySelector("#manualTicketAccountSearchInput");e&&(e.addEventListener("input",m=>{Ge=m.target.value||"",$.accountName="",H=wr().length>0?0:-1,d(),Q("manualTicketAccountSearchInput")}),e.addEventListener("keydown",m=>{const b=wr();if(m.key==="ArrowDown"||m.key==="ArrowUp"){if(b.length===0)return;m.preventDefault();const T=m.key==="ArrowDown"?1:-1;H=((H<0?0:H)+T+b.length)%b.length,d(),Q("manualTicketAccountSearchInput");return}if(m.key!=="Enter")return;m.preventDefault();const A=b[H>=0?H:0];A!=null&&A.account_name&&gn(A.account_name)})),document.querySelectorAll("[data-manual-ticket-account]").forEach(m=>{m.addEventListener("click",()=>{gn(m.dataset.manualTicketAccount||"")})}),(i=document.querySelector("#manualTicketNoteInput"))==null||i.addEventListener("input",m=>{$.note=m.target.value||""});const t=document.querySelector("#manualTicketCountInput");t==null||t.addEventListener("input",m=>{const b=String(m.target.value||"").replace(/\D/g,"");m.target.value!==b&&(m.target.value=b),$.tickets=b});const r=m=>{const b=Number($.tickets)||0,A=Math.max(1,b+m);$.tickets=String(A),t&&(t.value=$.tickets,t.focus())};(o=document.querySelector("#manualTicketCountUpButton"))==null||o.addEventListener("click",()=>r(1)),(l=document.querySelector("#manualTicketCountDownButton"))==null||l.addEventListener("click",()=>r(-1)),(f=document.querySelector("#saveManualBiweeklyTicketButton"))==null||f.addEventListener("click",()=>za());const n=document.querySelector(".roster-history-overlay");n&&n.addEventListener("click",m=>{m.target===n&&(J=!1,d())})}async function za(){const e=String($.accountName||"").trim(),t=String($.note||"").trim(),r=Number($.tickets);if(!e){z="Choose a guild member.",d();return}if(!t){z="Enter a reason or note.",d();return}if(!Number.isFinite(r)||r<=0){z="Enter the number of tickets to add.",d();return}Mt=!0,z="",d();try{const n=await w("guildsync:add-manual-biweekly-ticket-entry",{account_name:e,note:t,tickets:Math.floor(r)},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to add manual ticket entry.");J=!1,$={accountName:"",note:"",tickets:""},Ge="",H=-1,await Vt({silent:!0}),h("manual-ticket-added",n.message||"Manual ticket entry added.",{ttlMs:p})}catch(n){z=k(n)}finally{Mt=!1,d()}}function Ds(){const e=document.querySelector("#refreshRosterDataButton");e&&e.addEventListener("click",()=>dt());const t=document.querySelector("#openRosterHistoryButton");t&&t.addEventListener("click",()=>{Te=!0,K="",d()});const r=document.querySelector("#rosterMemberSearch");r&&(r.addEventListener("input",o=>{$t=o.target.value||"",fr=o.target.selectionStart,hr=o.target.selectionEnd,E=-1,d({restoreRosterSearchFocus:!0})}),r.addEventListener("keydown",ja)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Fo(o.dataset.rosterSortColumn||"account_name")})});const n=document.querySelector("#rosterRankFilter");n&&n.addEventListener("change",o=>{const l=String(o.target.value||"").trim();l&&(me.add(l),E=-1,d())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const l=o.dataset.removeRosterRankFilter||"";me.delete(l),E=-1,d()})});const s=document.querySelector("#rosterLinkStatusFilter");s&&s.addEventListener("change",o=>{const l=String(o.target.value||"").trim();l&&(Ee.add(l),E=-1,d())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const l=o.dataset.removeRosterLinkStatusFilter||"";Ee.delete(l),E=-1,d()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>gs(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const i=document.querySelector("#clearRosterFiltersButton");i&&i.addEventListener("click",()=>{$t="",me.clear(),Ee.clear(),j="",M="",E=-1,d()}),Ya()}function ja(e){if(e.key!=="ArrowDown"&&e.key!=="ArrowUp"&&e.key!=="Enter")return;if(e.key==="Enter"){e.preventDefault();return}const t=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(t.length===0){E=-1;return}e.preventDefault(),e.key==="ArrowDown"?E=E<0?0:Math.min(E+1,t.length-1):e.key==="ArrowUp"&&(E=E<0?t.length-1:Math.max(E-1,0)),t.forEach((n,s)=>{n.classList.toggle("roster-search-active-row",s===E)});const r=t[E];r&&typeof r.scrollIntoView=="function"&&r.scrollIntoView({block:"nearest",inline:"nearest"})}function Ya(){const e=document.querySelector("#closeRosterHistoryButton");e&&e.addEventListener("click",()=>{Te=!1,d()});const t=document.querySelector("#rosterHistorySearchInput");t&&(t.addEventListener("input",r=>{if(Ze=r.target.value||"",P=-1,!Ze.trim()){clearTimeout(tr),K="",B=[],le="",ie=[],oe=!1,d(),Q("rosterHistorySearchInput");return}clearTimeout(tr),tr=setTimeout(()=>{Ka({auto:!0,keepFocus:!0})},250)}),t.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(B.length===0)return;r.preventDefault();const s=r.key==="ArrowDown"?1:-1;P=((P<0?0:P)+s+B.length)%B.length,d(),Q("rosterHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=B[P>=0?P:0];n!=null&&n.account_name&&yn(n.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(r=>{r.addEventListener("click",()=>{yn(r.dataset.rosterHistoryAccount||"")})})}async function Ka(e={}){const t=Ze.trim();if(!t){K="",B=[],P=-1,le="",ie=[],oe=!1,d(),e.keepFocus&&Q("rosterHistorySearchInput");return}oe=!0,K="",B=[],P=-1,le="",ie=[],d(),e.keepFocus&&Q("rosterHistorySearchInput");try{const r=await w("guildsync:request-roster-rank-history",{query:t},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search roster rank history.");B=Ja(r.matches),P=B.length>0?0:-1}catch(r){K=k(r)}finally{oe=!1,d(),e.keepFocus&&Q("rosterHistorySearchInput")}}async function yn(e,t={}){const r=String(e||"").trim();if(!!r){le=r,Ze=r,ie=[],oe=!0,K="",d();try{const n=await w("guildsync:request-roster-stream-history",{account_name:r},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster stream history.");ie=Qa(n.events)}catch(n){K=k(n)}finally{oe=!1,t.keepLoading||d()}}}function Ja(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>({account_name:String(t.account_name||t.accountName||"").trim(),rank:String(t.rank||t.rankName||"").trim()})):[]}function Qa(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>{var r,n;return{event_type:String(t.event_type||t.eventType||"").trim(),rank:String(t.rank||t.rankName||"").trim(),timestamp:(n=(r=t.timestamp)!=null?r:t.timestampS)!=null?n:"",officer:String(t.officer||"").trim()}}):[]}function $s(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>{var r;return{account_name:String(t.account_name||t.accountName||"").trim(),rank:String(t.rank||t.rankName||"").trim(),joined:(r=t.joined)!=null?r:""}}).sort((t,r)=>t.account_name.localeCompare(r.account_name)):[]}function Xa(e){if(!e)return"Never";const t=new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleString()}function Ut(e){const t=Number(e);return t?new Date(t*1e3).toLocaleDateString():""}function Ms(e){const t=Number(e);return t?new Date(t*1e3).toLocaleString():""}async function Za(e={}){F=$s(e.members),Dt=e.last_refresh||new Date().toISOString(),_==="eso-members"&&d(),h("roster-data-updated",`Roster data updated. Loaded ${F.length} member record${F.length===1?"":"s"}.`,{ttlMs:p})}async function dt(e={}){if(!!(c!=null&&c.connected)){de=!0,d();try{const t=await w("guildsync:request-roster-data",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to retrieve roster data.");F=$s(t.members),Dt=t.last_refresh||Dt,e.silent||h("roster-data-loaded",`Loaded ${F.length} roster member${F.length===1?"":"s"}.`,{ttlMs:p})}catch(t){h("roster-data-error",k(t),{ttlMs:p})}finally{de=!1,d()}}}async function ec(e={}){var t;if(!!R()){if(!(c!=null&&c.connected)){h("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}de=!0,d();try{const r=await po(e);if(!(r!=null&&r.ok)){h("roster-data-pending",(r==null?void 0:r.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:p});return}const n={local_upload_id:Ts(),authenticated_username:Ve(),authenticated_discord_user_id:((t=g==null?void 0:g.user)==null?void 0:t.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||e.fileName||"",file_path:r.filePath||e.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await Cs(n)}catch(s){throw tc(n),s}await dt({silent:!0})}catch(r){h("roster-data-error",k(r),{ttlMs:p})}finally{de=!1,d()}}}function Ts(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function qr(){try{const e=window.localStorage.getItem(Un),t=e?JSON.parse(e):[];return Array.isArray(t)?t.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Ns(e){window.localStorage.setItem(Un,JSON.stringify(Array.isArray(e)?e:[]))}function tc(e){const t=String((e==null?void 0:e.local_upload_id)||Ts()),r=qr().filter(n=>(n==null?void 0:n.local_upload_id)!==t);r.push({...e,local_upload_id:t,pending_saved_at:new Date().toISOString()}),Ns(r),h("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function rc(e){const t=qr().filter(r=>(r==null?void 0:r.local_upload_id)!==e);Ns(t)}async function nc(){if(er||!(c!=null&&c.connected)||!R())return;const e=qr();if(e.length!==0){er=!0;try{for(const t of e){if(!(c!=null&&c.connected)||!R())return;await Cs(t),rc(t.local_upload_id)}}catch(t){h("roster-data-pending-error",`Pending roster upload retry failed: ${k(t)}`,{ttlMs:p})}finally{er=!1}}}async function Cs(e){if(!(c!=null&&c.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const t=await w("guildsync:sending-roster-data",e,3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const r=await mo(e.file_path||"",e.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return h("roster-data-sent",t.message||"Roster data sent to GuildSync backend.",{ttlMs:p}),t}function sc(){const e=_r(x),t=fc(e),r=x!=="other";return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <span class="discord-last-refresh">Last Refresh: ${a(Ws(zn))}</span>
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
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${_e?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${_e?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${rr("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${rr("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${rr("other","?","Other","All other deposits")}
        </div>

        ${cc(x)}

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
              ${e.length>0?e.map(n=>hc(n,r)).join(""):pc(r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${a(Is(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${r?`<div>Total Tickets Awarded: <strong>${a(Gt(t.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${ke?ic(_r(ct)):""}
    </div>
  `}function ic(e){return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${a($e(ct))} Deposits</h3>
            <p class="bank-export-subtitle">Copy this grid and paste it directly into Google Sheets.</p>
          </div>
          <button id="closeBankingExportGridButton" class="roster-history-close modal-close-button bank-export-close-button" type="button" aria-label="Close export grid">\xD7</button>
        </div>

        <div class="bank-export-toolbar">
          <button id="copyBankingExportGridButton" class="bank-export-copy-button" type="button" ${e.length===0?"disabled":""}>Copy Grid</button>
          <span class="bank-export-count">${a(String(e.length))} row${e.length===1?"":"s"}</span>
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
              ${e.length>0?e.map(t=>oc(t)).join(""):ac()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${a(xs(e))}</textarea>
      </div>
    </div>
  `}function oc(e){return`
    <tr>
      <td>${a(e.displayName||"")}</td>
      <td>${a(String(Number(e.amount)||0))}</td>
      <td>${a(String(Number(e.ticketAmount)||0))}</td>
      <td>${a(e.note||"")}</td>
    </tr>
  `}function ac(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${a($e(ct))}.</td>
    </tr>
  `}function cc(e){if(e==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const t=Os(e),r=Ur(e),n=r<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${u($e(e))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${a($e(e))} Raffle Period ${r===0?"(Current)":`(${Math.abs(r)} period${Math.abs(r)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${a(_t(t.salesStart))} through ${a(_t(t.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${a(_t(t.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${n?"":"disabled"} aria-label="Next ${u($e(e))} raffle period">\u203A</button>
    </div>
  `}function rr(e,t,r,n){const s=x===e;return`
    <button class="bank-section-card${s?" active":""}" type="button" data-bank-section="${u(e)}" aria-selected="${s?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${a(t)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${a(r)}</span>
        <span class="bank-section-subtitle">${a(n)}</span>
      </span>
    </button>
  `}function Bs(){if(_!=="more")return;document.querySelectorAll("[data-bank-section]").forEach(i=>{i.addEventListener("click",()=>{x=i.dataset.bankSection||"biweekly",d()})}),document.querySelectorAll("[data-bank-export-section]").forEach(i=>{i.addEventListener("click",()=>{ct=(i.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",ke=!0,d()})}),document.querySelectorAll("[data-bank-period-move]").forEach(i=>{i.addEventListener("click",()=>{uc(i.dataset.bankPeriodMove||""),d()})});const e=document.querySelector("#closeBankingExportGridButton");e&&e.addEventListener("click",()=>{ke=!1,d()});const t=document.querySelector("#copyBankingExportGridButton");t&&t.addEventListener("click",()=>dc());const r=document.querySelector(".bank-export-overlay");r&&r.addEventListener("click",i=>{i.target===r&&(ke=!1,d())});const n=document.querySelector("#openManualBiweeklyTicketButton");n&&n.addEventListener("click",async()=>{J=!0,z="",Ge=$.accountName||"",F.length===0&&(c==null?void 0:c.connected)&&R()&&await dt({silent:!0}),d()});const s=document.querySelector("#refreshBankingDataButton");s&&s.addEventListener("click",()=>Ps({key:"banking"}))}function xs(e){const t=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const r of e)t.push([r.displayName||"",String(Number(r.amount)||0),String(Number(r.ticketAmount)||0),r.note||""]);return t.map(r=>r.map(Pr).join("	")).join(`
`)}function Pr(e){return String(e!=null?e:"").replace(/[\t\r\n]+/g," ").trim()}async function Fr(e){var s;const t=String(e!=null?e:"");if((s=navigator.clipboard)!=null&&s.writeText)try{return await navigator.clipboard.writeText(t),!0}catch{}const r=document.createElement("textarea");r.value=t,r.setAttribute("readonly","readonly"),r.style.position="fixed",r.style.left="0",r.style.top="0",r.style.width="1px",r.style.height="1px",r.style.opacity="0",r.style.pointerEvents="none",r.style.zIndex="-1",document.body.appendChild(r),r.focus(),r.select(),r.setSelectionRange(0,r.value.length);let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r)}return n}async function dc(){const e=_r(ct),t=xs(e);if(await Fr(t)){h("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#bankingExportTsv");n&&(n.focus(),n.select()),h("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:p})}function _r(e){return V.filter(t=>t.type===e).filter(t=>lc(e,t)).sort((t,r)=>(Number(r.time)||0)-(Number(t.time)||0))}function lc(e,t){if(e==="other")return!0;const r=Number(t==null?void 0:t.time)||0;if(r<=0)return!1;const n=Os(e);return r>=n.salesStart&&r<=n.salesEnd}function Ur(e){return Number(pr[e])||0}function uc(e){if(x!=="biweekly"&&x!=="monthly")return;const t=Ur(x);if(e==="previous"){pr[x]=t-1;return}e==="next"&&t<0&&(pr[x]=t+1)}function Os(e){const t=Math.floor(Date.now()/1e3),r=e==="monthly",n=r?wo:So;let s=r?ko:vo;for(;s-n>t;)s-=n;for(;s<t;)s+=n;return s+=Ur(e)*n,{salesStart:s-n+1,salesEnd:s,raffleTime:s+_o}}function fc(e){return e.reduce((t,r)=>(t.amount+=Number(r.amount)||0,t.tickets+=Number(r.ticketAmount)||0,t),{amount:0,tickets:0})}function hc(e,t=!0){return`
    <tr>
      <td>${a(e.note||e.eventId||"")}</td>
      <td>${a(_t(e.time))}</td>
      <td>${a(e.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${a(Is(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${t?`<td><strong class="bank-ticket-amount">${a(Gt(e.ticketAmount))}</strong></td>`:""}
    </tr>
  `}function pc(e=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${e?"5":"4"}">No ${a($e(x))} deposits found for this ${x==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function $e(e){return e==="biweekly"?"Bi-Weekly":e==="monthly"?"50/50":"Other"}function _t(e){const t=Number(e);return!Number.isFinite(t)||t<=0?"Unknown":new Date(t*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Is(e){return(Number(e)||0).toLocaleString()}function Gt(e){return(Number(e)||0).toLocaleString()}function Gr(e){return Array.isArray(e)?e.map(t=>{var n,s,i,o,l,f,m,b,A,T,Kt,Qr;const r=String((t==null?void 0:t.type)||"other").trim().toLowerCase();return{type:r==="monthly"||r==="biweekly"||r==="other"?r:"other",eventId:String((s=(n=t==null?void 0:t.eventId)!=null?n:t==null?void 0:t.event_id)!=null?s:"").trim(),time:Number((o=(i=t==null?void 0:t.time)!=null?i:t==null?void 0:t.timestamp)!=null?o:0)||0,displayName:String((f=(l=t==null?void 0:t.displayName)!=null?l:t==null?void 0:t.display_name)!=null?f:"").trim(),amount:Number((m=t==null?void 0:t.amount)!=null?m:0)||0,ticketAmount:Number((A=(b=t==null?void 0:t.ticketAmount)!=null?b:t==null?void 0:t.ticket_amount)!=null?A:0)||0,note:String((T=t==null?void 0:t.note)!=null?T:"").trim(),dataSource:String((Qr=(Kt=t==null?void 0:t.dataSource)!=null?Kt:t==null?void 0:t.data_source)!=null?Qr:"").trim()}}):[]}function mc(e){const t=new Map;for(const r of V)r.eventId&&t.set(r.eventId,r);for(const r of e)!r.eventId||t.set(r.eventId,r);V=Array.from(t.values()).sort((r,n)=>(Number(n.time)||0)-(Number(r.time)||0))}function qs(){zn=new Date().toISOString()}async function gc(e={}){!(e!=null&&e.ok)||(V=Gr(e.entries),qs(),_==="more"&&d(),h("banking-data-updated",`Banking data updated. Loaded ${V.length} deposit record${V.length===1?"":"s"}.`,{ttlMs:p}))}async function Vt(e={}){const t=Boolean(e.silent);if(!(c!=null&&c.connected)){t||h("banking-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}if(!!R()){_e=!0,d();try{const r=await w("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");V=Gr(r.entries),qs(),t||h("banking-data",`Loaded ${V.length} banking deposit record${V.length===1?"":"s"}.`,{ttlMs:p})}catch(r){t||h("banking-data-error",k(r),{ttlMs:p})}finally{_e=!1,d()}}}async function Ps(e={}){var t,r;if(!!R()){if(!(c!=null&&c.connected)){h("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}_e=!0,d();try{const n=await fo(e);if(!(n!=null&&n.ok)){h("banking-data-pending",(n==null?void 0:n.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:p});return}const s=Gr((t=n==null?void 0:n.data)==null?void 0:t.entries);mc(s);const i=new Date().toISOString(),o={local_upload_id:Fs(),authenticated_username:Ve(),authenticated_discord_user_id:((r=g==null?void 0:g.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||e.fileName||"",file_path:n.filePath||e.filePath||"",collected_at:i,data:n.data||{}};try{await Gs(o)}catch(l){throw yc(o),l}await Vt({silent:!0})}catch(n){h("banking-data-error",k(n),{ttlMs:p})}finally{_e=!1,d()}}}function Fs(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Vr(){try{const e=window.localStorage.getItem(Fn),t=e?JSON.parse(e):[];return Array.isArray(t)?t.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Us(e){window.localStorage.setItem(Fn,JSON.stringify(Array.isArray(e)?e:[]))}function yc(e){const t=String((e==null?void 0:e.local_upload_id)||Fs()),r=Vr().filter(n=>(n==null?void 0:n.local_upload_id)!==t);r.push({...e,local_upload_id:t,pending_saved_at:new Date().toISOString()}),Us(r),h("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function bc(e){const t=Vr().filter(r=>(r==null?void 0:r.local_upload_id)!==e);Us(t)}async function vc(){if(Zt||!(c!=null&&c.connected)||!R())return;const e=Vr();if(e.length!==0){Zt=!0;try{for(const t of e){if(!(c!=null&&c.connected)||!R())return;await Gs(t),bc(t.local_upload_id)}}catch(t){h("banking-data-pending-error",`Pending banking upload retry failed: ${k(t)}`,{ttlMs:p})}finally{Zt=!1}}}async function Gs(e){if(!(c!=null&&c.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const t=await w("guildsync:sending-banking-data",e,3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const r=await ho(e.file_path||"",e.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return h("banking-data-sent",t.message||"Banking data sent to GuildSync backend.",{ttlMs:p}),t}function Vs(){if(_!=="discord-members")return;const e=document.querySelector("#refreshDiscordDataButton");e&&e.addEventListener("click",()=>kc());const t=document.querySelector("#discordMemberSearch");t&&t.addEventListener("input",i=>{Et=i.target.value||"",lr=i.target.selectionStart,ur=i.target.selectionEnd,d({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(i=>{i.addEventListener("click",()=>{Rc(i.dataset.discordSortColumn||"username")})});const r=document.querySelector("#discordRoleFilter");r&&r.addEventListener("change",i=>{const o=String(i.target.value||"").trim();o&&(Le.add(o),d())}),document.querySelectorAll("[data-remove-role-filter]").forEach(i=>{i.addEventListener("click",()=>{const o=i.dataset.removeRoleFilter||"";Le.delete(o),d()})});const n=document.querySelector("#discordLinkStatusFilter");n&&n.addEventListener("change",i=>{const o=String(i.target.value||"").trim();o&&(Re.add(o),d())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(i=>{i.addEventListener("click",()=>{const o=i.dataset.removeDiscordLinkStatusFilter||"";Re.delete(o),d()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(i=>{i.addEventListener("click",()=>gs(i.dataset.openMemberLinkDialog||"",i.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{Et="",Le.clear(),Re.clear(),d()})}async function kc(){var e,t;if(!(c!=null&&c.connected)){h("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:p});return}Rt=!0,d(),h("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const r=await w("guildsync:request-discord-data-refresh",{requested_by:((e=g==null?void 0:g.user)==null?void 0:e.display_name)||((t=g==null?void 0:g.user)==null?void 0:t.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to request Discord data refresh.");h("discord-refresh-requested",r.message||"Discord data refresh completed.",{ttlMs:p}),await Wr({silent:!0})}catch(r){h("discord-refresh-error",k(r),{ttlMs:p})}finally{Rt=!1,d()}}async function Sc(){if(!(c!=null&&c.connected))return;const e=await w("guildsync:request-discord-data-date",{});e!=null&&e.ok&&(Pt=e.value||null)}async function wc(e={}){if(!!(e!=null&&e.ok)){N=Hr(e.members),e.last_refresh&&(Pt=e.last_refresh);try{await Sc()}catch{}_==="discord-members"&&d(),h("discord-data-updated",`Discord data updated. Loaded ${N.length} member record${N.length===1?"":"s"}.`,{ttlMs:p})}}async function Wr(e={}){const t=Boolean(e.silent);if(!(c!=null&&c.connected)){h("discord-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}Qe=!0,d();try{const[r,n]=await Promise.all([w("guildsync:request-discord-data-date",{}),w("guildsync:request-discord-member-dataJSON",{})]);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord refresh date.");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord member data.");Pt=r.value||null,N=Hr(n.members),t||h("discord-data",`Loaded ${N.length} Discord member record${N.length===1?"":"s"}.`,{ttlMs:p})}catch(r){h("discord-data-error",k(r),{ttlMs:p})}finally{Qe=!1,d()}}function w(e,t={},r=3e4){return new Promise((n,s)=>{if(!(c!=null&&c.connected)){s(new Error("GuildSync websocket is not connected."));return}let i=!1;const o=window.setTimeout(()=>{i||(i=!0,s(new Error(`${e} timed out.`)))},r);c.emit(e,t,l=>{i||(i=!0,window.clearTimeout(o),n(l))})})}function Hr(e){return Array.isArray(e)?e.map(t=>({discord_id:String((t==null?void 0:t.discord_id)||(t==null?void 0:t.id)||"").trim(),username:String((t==null?void 0:t.username)||"").trim(),global_name:String((t==null?void 0:t.global_name)||"").trim(),server_nickname:String((t==null?void 0:t.server_nickname)||"").trim(),last_seen:String((t==null?void 0:t.last_seen)||(t==null?void 0:t.lastSeen)||"").trim(),last_seen_action:String((t==null?void 0:t.last_seen_action)||(t==null?void 0:t.lastSeenAction)||"").trim(),avatar:String((t==null?void 0:t.avatar)||"").trim(),roles:Array.isArray(t==null?void 0:t.roles)?t.roles.map(_c).filter(Boolean):[]})).filter(t=>t.discord_id||t.username||t.global_name||t.server_nickname).sort((t,r)=>rt(t).localeCompare(rt(r),void 0,{sensitivity:"base"})):[]}function _c(e){var s,i;if(!e||typeof e!="object")return null;const t=String(e.role_id||e.id||"").trim(),r=String(e.role_name||e.name||"Unnamed Role").trim(),n=(i=(s=e.role_color)!=null?s:e.color)!=null?i:null;return{role_id:t,role_name:r||"Unnamed Role",role_color:n}}function Ac(){const e=Et.trim().toLowerCase(),t=Array.from(Le),r=N.filter(n=>{if(e&&![n.username,n.global_name,n.server_nickname,n.discord_id,...n.roles.map(i=>i.role_name)].join(" ").toLowerCase().includes(e))return!1;if(t.length>0){const s=new Set(n.roles.map(i=>i.role_name));if(!t.every(i=>s.has(i)))return!1}return!!es(Re,Wo(n))});return Lc(r)}function Lc(e){const t=pe==="desc"?-1:1;return[...e].sort((r,n)=>{const s=bn(r,Xe),i=bn(n,Xe),o=s.localeCompare(i,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*t:rt(r).localeCompare(rt(n),void 0,{sensitivity:"base",numeric:!0})})}function bn(e,t){return t==="global_name"?e.global_name||"":t==="server_nickname"?e.server_nickname||"":t==="roles"?(e.roles||[]).map(r=>r.role_name||"").filter(Boolean).sort((r,n)=>r.localeCompare(n,void 0,{sensitivity:"base"})).join(" "):e.username||e.discord_id||""}function Rc(e){const r=new Set(["username","global_name","server_nickname","roles"]).has(e)?e:"username";Xe===r?pe=pe==="asc"?"desc":"asc":(Xe=r,pe="asc"),d()}function gt(e,t){const r=Xe===e,n=pe==="asc"?"ascending":"descending",s=r?pe==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${r?n:"none"}">
      <button
        class="discord-sort-header${r?" active":""}"
        type="button"
        data-discord-sort-column="${u(e)}"
        title="Sort ${u(t)} ${r&&pe==="asc"?"descending":"ascending"}"
      >
        <span>${a(t)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function Ec(){const e=document.querySelector("#discordMemberSearch");if(!!e&&(e.focus({preventScroll:!0}),typeof e.setSelectionRange=="function")){const t=Number.isInteger(lr)?lr:e.value.length,r=Number.isInteger(ur)?ur:t;e.setSelectionRange(t,r)}}function Dc(){const e=document.querySelector("#rosterMemberSearch");if(!!e&&(e.focus({preventScroll:!0}),typeof e.setSelectionRange=="function")){const t=Number.isInteger(fr)?fr:e.value.length,r=Number.isInteger(hr)?hr:t;e.setSelectionRange(t,r)}}function $c(){const e=new Set;for(const t of N)for(const r of t.roles)r.role_name&&e.add(r.role_name);return Array.from(e).sort((t,r)=>t.localeCompare(r,void 0,{sensitivity:"base"}))}function Mc(e){const t=Bc(e),r=rt(e),n=e.roles||[];return`
    <tr data-discord-user-id="${u(e.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${t?`<img src="${u(t)}" alt="${u(r)}" />`:`<span>${a(Xs(r))}</span>`}
          </div>
          <span>${a(e.username||e.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${a(e.global_name||"")}</td>
      <td>${a(e.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${n.length>0?n.map(s=>Nc(s)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${ps({mode:"discord-to-eso",discordUserId:e.discord_id})}</td>
    </tr>
  `}function Tc(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${a(Qe?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function Nc(e){const t=Wt(e.role_color),r=Yr(t),n=jr(t,r);return`
    <span
      class="discord-role-badge"
      title="${u(e.role_name)}"
      style="${n}"
    >${a(e.role_name)}</span>
  `}function Cc(e){const t=zr(e),r=Wt(t==null?void 0:t.role_color),n=Yr(r),s=jr(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-role-filter="${u(e)}"
      style="${s}"
      title="Remove ${u(e)} filter"
    >
      <span>${a(e)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function zr(e){for(const t of N){const r=t.roles.find(n=>n.role_name===e);if(r)return r}return null}function Wt(e){const t=Number(e);return!Number.isFinite(t)||t<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(t))).toString(16).padStart(6,"0")}`}function jr(e,t){return[`--role-fill-top: ${vn(e,"#ffffff",.16)}`,`--role-fill-bottom: ${vn(e,"#000000",.1)}`,`--role-fill-glow: ${kn(e,.28)}`,`--role-fill-edge: ${kn(e,.46)}`,`color: ${t}`].join("; ")}function vn(e,t,r){const n=yt(e)||yt("#64748b"),s=yt(t)||yt("#ffffff"),i=Math.max(0,Math.min(1,Number(r)||0)),o=Math.round(n.red+(s.red-n.red)*i),l=Math.round(n.green+(s.green-n.green)*i),f=Math.round(n.blue+(s.blue-n.blue)*i);return`#${nr(o)}${nr(l)}${nr(f)}`}function yt(e){const t=String(e||"").replace("#","");return/^[0-9a-f]{6}$/i.test(t)?{red:parseInt(t.slice(0,2),16),green:parseInt(t.slice(2,4),16),blue:parseInt(t.slice(4,6),16)}:null}function nr(e){return Math.max(0,Math.min(255,e)).toString(16).padStart(2,"0")}function kn(e,t){const r=String(e||"#64748b").replace("#",""),n=/^[0-9a-f]{6}$/i.test(r)?r:"64748b",s=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),o=parseInt(n.slice(4,6),16);return`rgba(${s}, ${i}, ${o}, ${t})`}function Yr(e){const t=String(e||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(t))return"#E5E7EB";const r=parseInt(t.slice(0,2),16),n=parseInt(t.slice(2,4),16),s=parseInt(t.slice(4,6),16);return(r*299+n*587+s*114)/1e3>150?"#0F172A":"#F8FAFC"}function Bc(e){const t=String((e==null?void 0:e.avatar)||"").trim(),r=String((e==null?void 0:e.discord_id)||"").trim();if(!t)return"";if(t.startsWith("http://")||t.startsWith("https://"))return t;if(!r)return"";const n=t.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(t)}.${n}?size=64`}function rt(e){return e.server_nickname||e.global_name||e.username||e.discord_id||"Unknown"}function Ws(e){const t=String(e||"").trim();if(!t)return"Not refreshed yet";const r=new Date(t);return Number.isNaN(r.getTime())?t:r.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function At(){const e=document.querySelector("#discordArea");if(!!e){if(lt(!1),R()){const t=g.user||{},r=Ve(),n=Qc(t),s=Xs(r);e.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${n?`<img src="${u(n)}" alt="${u(r)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${a(s)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const i=document.querySelector("#discordAvatarButton");i.addEventListener("contextmenu",o=>{o.preventDefault(),Sn()}),i.addEventListener("click",()=>{Sn()});return}e.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",Pc)}}function Sn(){if(it){lt();return}qc()}function xc(e=se){const t=Array.isArray(e==null?void 0:e.files)?e.files:[],r=String((e==null?void 0:e.directory)||"").trim(),n=Boolean(e==null?void 0:e.watching);return t.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${t.map(s=>{const i=String((s==null?void 0:s.key)||(s==null?void 0:s.fileName)||"").trim(),o=String((s==null?void 0:s.fileName)||"SavedVariables file").trim(),l=String((s==null?void 0:s.filePath)||(r?`${r}\\${o}`:o)).trim(),f=(s==null?void 0:s.enabled)!==!1,m=n&&f,b=`profileFileWatchToggle-${Ic(i||o)}`;return`
          <label class="profile-filewatch-item ${f?"enabled":"disabled"}" title="${u(l)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${a(o)}</span>
              <span class="profile-filewatch-state">${m?"Watching":f?"On":"Off"}</span>
            </span>
            <input
              id="${u(b)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${u(i)}"
              ${f?"checked":""}
              aria-label="Turn file watch ${f?"off":"on"} for ${u(o)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function Kr(){var n,s,i;const e=document.querySelector("#discordProfileMenu");if(!e)return;const t=Ve(),r=((n=g.user)==null?void 0:n.role)||"member";e.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${a(t)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${a(Xc(r))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${a(qt)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${se!=null&&se.watching?"Active":"Stopped"}</span>
        </div>
        ${xc()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(s=document.querySelector("#discordLogoutButton"))==null||s.addEventListener("click",Fc),(i=document.querySelector("#associateTicketReportButton"))==null||i.addEventListener("click",()=>{lt(!1),rs()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",Oc)})}async function Hs(){try{se=await It(),it&&Kr()}catch(e){h("file-watcher-error",k(e),{ttlMs:p})}}async function Oc(e){var n;const t=e.currentTarget,r=String(((n=t==null?void 0:t.dataset)==null?void 0:n.filewatchKey)||"").trim();if(!!r)try{t.disabled=!0,se=await uo(r,t.checked),await Me({silent:!0}),it&&Kr()}catch(s){h("file-watcher-error",k(s),{ttlMs:p}),await Hs()}}function Ic(e){return String(e||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function qc(){const e=document.querySelector("#discordProfileMenu");!e||(Kr(),e.classList.add("open"),e.setAttribute("aria-hidden","false"),it=!0,Hs(),setTimeout(()=>{window.addEventListener("click",zs),window.addEventListener("keydown",js)},0))}function lt(e=!0){const t=document.querySelector("#discordProfileMenu");t&&(t.classList.remove("open"),t.setAttribute("aria-hidden","true")),it=!1,e&&(window.removeEventListener("click",zs),window.removeEventListener("keydown",js))}function zs(e){const t=document.querySelector(".discord-profile-wrap");t&&!t.contains(e.target)&&lt()}function js(e){e.key==="Escape"&&lt()}async function Pc(){try{h("auth","Opening Discord login...",{ttlMs:p});const e=await io();e!=null&&e.status_message&&h("auth",e.status_message,{ttlMs:p}),ae()}catch(e){h("auth-error",k(e),{ttlMs:p}),ae()}}async function Fc(){try{g=await ao(),h("auth",g.status_message||"Logged out.",{ttlMs:p}),jn(),Je(),await Me()}catch(e){h("auth-error",k(e),{ttlMs:p}),ae()}}function Je(){const e=g.socket_url||"https://guildsync.perdues.me";Uc(!1);const t={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};g!=null&&g.token&&(t.auth={token:g.token}),c=St(e,t),c.on("connect",()=>{ae(),Ys(),_==="discord-members"&&Wr({silent:!0}),_==="eso-members"&&dt({silent:!0}),_==="more"&&Vt({silent:!0}),vc(),nc(),Gc()}),c.on("connect_error",()=>{ae(),Bt()}),c.on("disconnect",()=>{ae(),Bt()}),c.on("guildsync:version-status",r=>{Vc(r)}),c.on("guildsync:discord-member-data-updated",r=>{wc(r)}),c.on("guildsync:banking-data-updated",r=>{gc(r)}),c.on("guildsync:roster-data-updated",r=>{Za(r)}),c.on("guildsync:member-links-updated",(r={})=>{Array.isArray(r.links)&&(S=r.links,(_==="discord-members"||_==="eso-members"||_==="settings"||fe)&&d())}),c.on("guildsync:discord-refresh-status",(r={})=>{const n=String(r.message||"").trim();n&&h("discord-refresh-status",n,{ttlMs:p})})}function Uc(e=!0){Bt(),c&&(c.disconnect(),c=null),e&&ae()}function Ys(){!(c!=null&&c.connected)||c.emit("guildsync:client-version",{version:qt})}function Gc(){Bt(),wt=window.setInterval(()=>{Ys()},go)}function Bt(){wt&&(window.clearInterval(wt),wt=null)}function Vc(e){if(!(!e||typeof e!="object")){if(e.update_required){const t=e.latest_version||"unknown";h("version",`GuildSync is out of date. Current version: ${qt}. Latest version: ${t}.`);return}Jr("version")}}function h(e,t,r={}){const n=String(e||"").trim(),s=String(t||"").trim();if(!(!n||!s)){if(ce.set(n,s),he.has(n)&&(window.clearTimeout(he.get(n)),he.delete(n)),r.ttlMs&&Number(r.ttlMs)>0){const i=window.setTimeout(()=>{Jr(n)},Number(r.ttlMs));he.set(n,i)}Be()}}function Jr(e){const t=String(e||"").trim();if(!!t){if(ce.delete(t),he.has(t)&&(window.clearTimeout(he.get(t)),he.delete(t)),D===t){jt(()=>{D="",Be()});return}Be()}}function Be(){const e=Ht();if(e.length===0){Se?jt(nt):nt();return}!Se&&!we&&zt(e[0])}function Ht(){return Array.from(ce.keys())}function Ks(){const e=Ht();if(e.length===0)return"";if(!D)return e[0];const t=e.indexOf(D);return t<0?e[0]:e[(t+1)%e.length]}function zt(e){const t=document.querySelector("#statusMessageTrack");if(!t||!ce.has(e)){nt();return}Yt();const r=ce.get(e);D=e,Se=!0,we=!0,t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent=r,t.style.setProperty("--message-fade-duration",`${Vn}ms`),requestAnimationFrame(()=>{t.classList.add("fade-in"),t.addEventListener("animationend",()=>{t.classList.remove("fade-in"),t.style.opacity="1",t.style.transform="translateX(0) translateY(-50%)",we=!1,Wc()},{once:!0})})}function Wc(){const e=Ht();if(!D||!ce.has(D)){Be();return}if(e.length<=1){wn(!1);return}wn(!0)}function wn(e){const t=document.querySelector("#statusMessageViewport"),r=document.querySelector("#statusMessageTrack");if(!t||!r)return;const n=Math.max(0,r.scrollWidth-t.clientWidth);if(n<=0){e&&st(()=>{jt(()=>{const s=Ks();D="",s?zt(s):nt()})},Gn);return}st(()=>{Js(n,e)},Wn)}function Js(e,t){const r=document.querySelector("#statusMessageTrack");if(!r||!D||!ce.has(D))return;const n=Math.max(4,Math.ceil(e/bo));r.style.setProperty("--long-scroll-distance",`${e}px`),r.style.setProperty("--long-scroll-duration",`${n}s`),r.classList.add("long-scroll"),r.addEventListener("animationend",()=>{if(r.classList.remove("long-scroll"),r.style.transform=`translateX(-${e}px) translateY(-50%)`,t){st(()=>{jt(()=>{const s=Ks();D="",s?zt(s):nt()})},Gn);return}st(()=>{Hc()},yo)},{once:!0})}function Hc(){const e=document.querySelector("#statusMessageViewport"),t=document.querySelector("#statusMessageTrack");if(!e||!t||!D||!ce.has(D))return;if(Ht().length!==1){Be();return}t.classList.remove("long-scroll"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.transform="translateX(0) translateY(-50%)";const n=Math.max(0,t.scrollWidth-e.clientWidth);n<=0||st(()=>{Js(n,!1)},Wn)}function jt(e){const t=document.querySelector("#statusMessageTrack");if(Yt(),!t||!Se){typeof e=="function"&&e();return}we=!0,t.classList.remove("fade-in","long-scroll"),t.style.setProperty("--message-fade-duration",`${Vn}ms`),t.classList.add("fade-out"),t.addEventListener("animationend",()=>{t.classList.remove("fade-out"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",Se=!1,we=!1,typeof e=="function"&&e()},{once:!0})}function nt(){const e=document.querySelector("#statusMessageTrack");Yt(),D="",Se=!1,we=!1,e&&(e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent="")}function st(e,t){const r=window.setTimeout(()=>{Ye=Ye.filter(n=>n!==r),e()},t);Ye.push(r)}function Yt(){for(const e of Ye)window.clearTimeout(e);Ye=[]}function Qs(){if(!Se||we||!D)return;const e=D;Yt(),zt(e)}function ae(){const e=document.querySelector("#statusDot");if(!!e){if(e.classList.remove("status-red","status-yellow","status-green"),!(c!=null&&c.connected)){e.classList.add("status-red"),e.title="Websocket not connected";return}if(!R()){e.classList.add("status-yellow"),e.title="Websocket connected. User is not authenticated.";return}e.classList.add("status-green"),e.title=`Websocket connected. Authenticated as ${Ve()}.`}}async function Me(e={}){try{if(R()){const t=await co();se=t,!e.silent&&(t==null?void 0:t.message)&&h(t.watching?"file-watcher":"file-watcher-error",t.message,{ttlMs:p});return}se=await lo(),Jr("file-watcher")}catch(t){h("file-watcher-error",k(t),{ttlMs:p})}}function zc(e={}){if(!R())return;const t=String(e.key||e.fileName||"saved-vars-file").trim()||"saved-vars-file",r=String(e.label||"").trim(),n=String(e.fileName||"SavedVariables file").trim()||"SavedVariables file",s=r?`${r} saved variables (${n})`:n;h(`saved-vars-file-updated-${t}`,`${s} has been updated.`,{ttlMs:p}),t.toLowerCase()==="banking"&&jc(e),t.toLowerCase()==="roster"&&Yc(e)}async function jc(e={}){await Ps(e)}async function Yc(e={}){await ec(e)}function Kc(e){!R()||h("file-watcher-error",k(e),{ttlMs:p})}function Jc(){He("guildsync-savedvars-file-modified",zc),He("guildsync-file-watcher-error",Kc),He("guildsync-login-complete",async e=>{g=e||{logged_in:!1,allowed:!1},At(),Je(),await Me(),h("auth",g.status_message||`Logged in and authorized as ${Ve()}.`,{ttlMs:p})}),He("guildsync-login-denied",async e=>{g={logged_in:!1,allowed:!1,status_message:""},At(),await Me(),h("auth",e||"Access denied.",{ttlMs:p}),Je()}),He("guildsync-login-failed",async e=>{g={logged_in:!1,allowed:!1,status_message:""},At(),await Me(),h("auth",e||"Login failed.",{ttlMs:p}),Je()})}function R(){return Boolean((g==null?void 0:g.logged_in)&&(g==null?void 0:g.allowed)&&(g==null?void 0:g.token))}function Ve(){var e,t;return((e=g.user)==null?void 0:e.display_name)||((t=g.user)==null?void 0:t.username)||"Discord User"}function Qc(e){if(!e)return"";if(e.avatar_url)return e.avatar_url;const t=String(e.avatar||"").trim(),r=String(e.discord_user_id||"").trim();if(!t||!r)return"";if(t.startsWith("http://")||t.startsWith("https://"))return t;const n=t.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(t)}.${n}?size=128`}function Xs(e){const t=String(e||"").trim().split(/\s+/).filter(Boolean);return t.length===0?"GS":t.length===1?t[0].slice(0,2).toUpperCase():`${t[0][0]}${t[t.length-1][0]}`.toUpperCase()}function Xc(e){return String(e||"member").replaceAll("_"," ").replace(/\b\w/g,t=>t.toUpperCase())}function Zc(){ze&&(ze.disconnect(),ze=null);const e=document.querySelector(".main-window")||document.querySelector("#app");if(!e||typeof ResizeObserver>"u")return;let t=Math.round(e.getBoundingClientRect().width),r=Math.round(e.getBoundingClientRect().height);ze=new ResizeObserver(n=>{const s=n[0];if(!s)return;const i=Math.round(s.contentRect.width),o=Math.round(s.contentRect.height);i===t&&o===r||(t=i,r=o,Zs(),Qs())}),ze.observe(e)}function Zs(){clearTimeout(rn),rn=setTimeout(async()=>{try{await Pn()}catch{}},500)}function k(e){return e?typeof e=="string"?e:e.message||String(e):"Unknown error."}function a(e){return String(e!=null?e:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function u(e){return a(e)}Jc();Ao();
