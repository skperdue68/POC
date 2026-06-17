(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const Bs="/assets/splash.ea386b6a.png",xs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",Os="/assets/GuildSync-Graphic.9169020d.png",K=Object.create(null);K.open="0";K.close="1";K.ping="2";K.pong="3";K.message="4";K.upgrade="5";K.noop="6";const qt=Object.create(null);Object.keys(K).forEach(e=>{qt[K[e]]=e});const Rr={type:"error",data:"parser error"},Yn=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Jn=typeof ArrayBuffer=="function",Qn=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,Yr=({type:e,data:t},r,n)=>Yn&&t instanceof Blob?r?n(t):An(t,n):Jn&&(t instanceof ArrayBuffer||Qn(t))?r?n(t):An(new Blob([t]),n):n(K[e]+(t||"")),An=(e,t)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];t("b"+(n||""))},r.readAsDataURL(e)};function Ln(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let br;function qs(e,t){if(Yn&&e.data instanceof Blob)return e.data.arrayBuffer().then(Ln).then(t);if(Jn&&(e.data instanceof ArrayBuffer||Qn(e.data)))return t(Ln(e.data));Yr(e,!1,r=>{br||(br=new TextEncoder),t(br.encode(r))})}const En="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ht=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<En.length;e++)ht[En.charCodeAt(e)]=e;const Is=e=>{let t=e.length*.75,r=e.length,n,i=0,s,o,c,f;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const b=new ArrayBuffer(t),v=new Uint8Array(b);for(n=0;n<r;n+=4)s=ht[e.charCodeAt(n)],o=ht[e.charCodeAt(n+1)],c=ht[e.charCodeAt(n+2)],f=ht[e.charCodeAt(n+3)],v[i++]=s<<2|o>>4,v[i++]=(o&15)<<4|c>>2,v[i++]=(c&3)<<6|f&63;return b},Fs=typeof ArrayBuffer=="function",Jr=(e,t)=>{if(typeof e!="string")return{type:"message",data:Xn(e,t)};const r=e.charAt(0);return r==="b"?{type:"message",data:Ps(e.substring(1),t)}:qt[r]?e.length>1?{type:qt[r],data:e.substring(1)}:{type:qt[r]}:Rr},Ps=(e,t)=>{if(Fs){const r=Is(e);return Xn(r,t)}else return{base64:!0,data:e}},Xn=(e,t)=>{switch(t){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},Zn=String.fromCharCode(30),Gs=(e,t)=>{const r=e.length,n=new Array(r);let i=0;e.forEach((s,o)=>{Yr(s,!1,c=>{n[o]=c,++i===r&&t(n.join(Zn))})})},Us=(e,t)=>{const r=e.split(Zn),n=[];for(let i=0;i<r.length;i++){const s=Jr(r[i],t);if(n.push(s),s.type==="error")break}return n};function Vs(){return new TransformStream({transform(e,t){qs(e,r=>{const n=r.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,n)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(n))}e.data&&typeof e.data!="string"&&(i[0]|=128),t.enqueue(i),t.enqueue(r)})}})}let kr;function Tt(e){return e.reduce((t,r)=>t+r.length,0)}function Ct(e,t){if(e[0].length===t)return e.shift();const r=new Uint8Array(t);let n=0;for(let i=0;i<t;i++)r[i]=e[0][n++],n===e[0].length&&(e.shift(),n=0);return e.length&&n<e[0].length&&(e[0]=e[0].slice(n)),r}function Hs(e,t){kr||(kr=new TextDecoder);const r=[];let n=0,i=-1,s=!1;return new TransformStream({transform(o,c){for(r.push(o);;){if(n===0){if(Tt(r)<1)break;const f=Ct(r,1);s=(f[0]&128)===128,i=f[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(Tt(r)<2)break;const f=Ct(r,2);i=new DataView(f.buffer,f.byteOffset,f.length).getUint16(0),n=3}else if(n===2){if(Tt(r)<8)break;const f=Ct(r,8),b=new DataView(f.buffer,f.byteOffset,f.length),v=b.getUint32(0);if(v>Math.pow(2,53-32)-1){c.enqueue(Rr);break}i=v*Math.pow(2,32)+b.getUint32(4),n=3}else{if(Tt(r)<i)break;const f=Ct(r,i);c.enqueue(Jr(s?f:kr.decode(f),t)),n=0}if(i===0||i>e){c.enqueue(Rr);break}}}})}const ei=4;function $(e){if(e)return Ws(e)}function Ws(e){for(var t in $.prototype)e[t]=$.prototype[t];return e}$.prototype.on=$.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};$.prototype.once=function(e,t){function r(){this.off(e,r),t.apply(this,arguments)}return r.fn=t,this.on(e,r),this};$.prototype.off=$.prototype.removeListener=$.prototype.removeAllListeners=$.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+e];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var n,i=0;i<r.length;i++)if(n=r[i],n===t||n.fn===t){r.splice(i,1);break}return r.length===0&&delete this._callbacks["$"+e],this};$.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),r=this._callbacks["$"+e],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,i=r.length;n<i;++n)r[n].apply(this,t)}return this};$.prototype.emitReserved=$.prototype.emit;$.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};$.prototype.hasListeners=function(e){return!!this.listeners(e).length};const er=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,r)=>r(t,0))(),O=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),js="arraybuffer";function ti(e,...t){return t.reduce((r,n)=>(e.hasOwnProperty(n)&&(r[n]=e[n]),r),{})}const zs=O.setTimeout,Ks=O.clearTimeout;function tr(e,t){t.useNativeTimers?(e.setTimeoutFn=zs.bind(O),e.clearTimeoutFn=Ks.bind(O)):(e.setTimeoutFn=O.setTimeout.bind(O),e.clearTimeoutFn=O.clearTimeout.bind(O))}const Ys=1.33;function Js(e){return typeof e=="string"?Qs(e):Math.ceil((e.byteLength||e.size)*Ys)}function Qs(e){let t=0,r=0;for(let n=0,i=e.length;n<i;n++)t=e.charCodeAt(n),t<128?r+=1:t<2048?r+=2:t<55296||t>=57344?r+=3:(n++,r+=4);return r}function ri(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Xs(e){let t="";for(let r in e)e.hasOwnProperty(r)&&(t.length&&(t+="&"),t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t}function Zs(e){let t={},r=e.split("&");for(let n=0,i=r.length;n<i;n++){let s=r[n].split("=");t[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return t}class eo extends Error{constructor(t,r,n){super(t),this.description=r,this.context=n,this.type="TransportError"}}class Qr extends ${constructor(t){super(),this.writable=!1,tr(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,r,n){return super.emitReserved("error",new eo(t,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const r=Jr(t,this.socket.binaryType);this.onPacket(r)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,r={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const r=Xs(t);return r.length?"?"+r:""}}class to extends Qr{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const r=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};Us(t,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,Gs(t,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=ri()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(t,r)}}let ni=!1;try{ni=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const ro=ni;function no(){}class io extends to{constructor(t){if(super(t),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,r){const n=this.request({method:"POST",data:t});n.on("success",r),n.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=t}}class j extends ${constructor(t,r,n){super(),this.createRequest=t,tr(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const r=ti(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=j.requestsCount++,j.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=no,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete j.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}j.requestsCount=0;j.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Rn);else if(typeof addEventListener=="function"){const e="onpagehide"in O?"pagehide":"unload";addEventListener(e,Rn,!1)}}function Rn(){for(let e in j.requests)j.requests.hasOwnProperty(e)&&j.requests[e].abort()}const so=function(){const e=ii({xdomain:!1});return e&&e.responseType!==null}();class oo extends io{constructor(t){super(t);const r=t&&t.forceBase64;this.supportsBinary=so&&!r}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new j(ii,this.uri(),t)}}function ii(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||ro))return new XMLHttpRequest}catch{}if(!t)try{return new O[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const si=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class ao extends Qr{get name(){return"websocket"}doOpen(){const t=this.uri(),r=this.opts.protocols,n=si?{}:ti(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,r,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],i=r===t.length-1;Yr(n,this.supportsBinary,s=>{try{this.doWrite(n,s)}catch{}i&&er(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=ri()),this.supportsBinary||(r.b64=1),this.createUri(t,r)}}const vr=O.WebSocket||O.MozWebSocket;class co extends ao{createSocket(t,r,n){return si?new vr(t,r,n):r?new vr(t,r):new vr(t)}doWrite(t,r){this.ws.send(r)}}class lo extends Qr{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const r=Hs(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(r).getReader(),i=Vs();i.readable.pipeTo(t.writable),this._writer=i.writable.getWriter();const s=()=>{n.read().then(({done:c,value:f})=>{c||(this.onPacket(f),s())}).catch(c=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],i=r===t.length-1;this._writer.write(n).then(()=>{i&&er(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const uo={websocket:co,webtransport:lo,polling:oo},fo=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,ho=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function $r(e){if(e.length>8e3)throw"URI too long";const t=e,r=e.indexOf("["),n=e.indexOf("]");r!=-1&&n!=-1&&(e=e.substring(0,r)+e.substring(r,n).replace(/:/g,";")+e.substring(n,e.length));let i=fo.exec(e||""),s={},o=14;for(;o--;)s[ho[o]]=i[o]||"";return r!=-1&&n!=-1&&(s.source=t,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=po(s,s.path),s.queryKey=mo(s,s.query),s}function po(e,t){const r=/\/{2,9}/g,n=t.replace(r,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function mo(e,t){const r={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,s){i&&(r[i]=s)}),r}const Dr=typeof addEventListener=="function"&&typeof removeEventListener=="function",It=[];Dr&&addEventListener("offline",()=>{It.forEach(e=>e())},!1);class ue extends ${constructor(t,r){if(super(),this.binaryType=js,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(r=t,t=null),t){const n=$r(t);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=$r(r.host).host);tr(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Zs(this.opts.query)),Dr&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},It.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const r=Object.assign({},this.opts.query);r.EIO=ei,r.transport=t,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&ue.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(t);r.open(),this.setTransport(r)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",ue.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=t.data,this._onError(r);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(r+=Js(i)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,er(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,r,n){return this._sendPacket("message",t,r,n),this}send(t,r,n){return this._sendPacket("message",t,r,n),this}_sendPacket(t,r,n,i){if(typeof r=="function"&&(i=r,r=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const s={type:t,data:r,options:n};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),t()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(ue.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Dr&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=It.indexOf(this._offlineEventListener);n!==-1&&It.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,r),this.writeBuffer=[],this._prevBufferLen=0}}}ue.protocol=ei;class go extends ue{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let r=this.createTransport(t),n=!1;ue.priorWebsocketSuccess=!1;const i=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",m=>{if(!n)if(m.type==="pong"&&m.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;ue.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(v(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const w=new Error("probe error");w.transport=r.name,this.emitReserved("upgradeError",w)}}))};function s(){n||(n=!0,v(),r.close(),r=null)}const o=m=>{const w=new Error("probe error: "+m);w.transport=r.name,s(),this.emitReserved("upgradeError",w)};function c(){o("transport closed")}function f(){o("socket closed")}function b(m){r&&m.name!==r.name&&s()}const v=()=>{r.removeListener("open",i),r.removeListener("error",o),r.removeListener("close",c),this.off("close",f),this.off("upgrading",b)};r.once("open",i),r.once("error",o),r.once("close",c),this.once("close",f),this.once("upgrading",b),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const r=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&r.push(t[n]);return r}}class yo extends go{constructor(t,r={}){const n=typeof t=="object"?t:r;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(i=>uo[i]).filter(i=>!!i)),super(t,n)}}function bo(e,t="",r){let n=e;r=r||typeof location<"u"&&location,e==null&&(e=r.protocol+"//"+r.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=r.protocol+e:e=r.host+e),/^(https?|wss?):\/\//.test(e)||(typeof r<"u"?e=r.protocol+"//"+e:e="https://"+e),n=$r(e)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const s=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port+t,n.href=n.protocol+"://"+s+(r&&r.port===n.port?"":":"+n.port),n}const ko=typeof ArrayBuffer=="function",vo=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,oi=Object.prototype.toString,So=typeof Blob=="function"||typeof Blob<"u"&&oi.call(Blob)==="[object BlobConstructor]",wo=typeof File=="function"||typeof File<"u"&&oi.call(File)==="[object FileConstructor]";function Xr(e){return ko&&(e instanceof ArrayBuffer||vo(e))||So&&e instanceof Blob||wo&&e instanceof File}function Ft(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let r=0,n=e.length;r<n;r++)if(Ft(e[r]))return!0;return!1}if(Xr(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return Ft(e.toJSON(),!0);for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&Ft(e[r]))return!0;return!1}function _o(e){const t=[],r=e.data,n=e;return n.data=Mr(r,t),n.attachments=t.length,{packet:n,buffers:t}}function Mr(e,t){if(!e)return e;if(Xr(e)){const r={_placeholder:!0,num:t.length};return t.push(e),r}else if(Array.isArray(e)){const r=new Array(e.length);for(let n=0;n<e.length;n++)r[n]=Mr(e[n],t);return r}else if(typeof e=="object"&&!(e instanceof Date)){const r={};for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=Mr(e[n],t));return r}return e}function Ao(e,t){return e.data=Nr(e.data,t),delete e.attachments,e}function Nr(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let r=0;r<e.length;r++)e[r]=Nr(e[r],t);else if(typeof e=="object")for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(e[r]=Nr(e[r],t));return e}const ai=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Lo=5;var y;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(y||(y={}));class Eo{constructor(t){this.replacer=t}encode(t){return(t.type===y.EVENT||t.type===y.ACK)&&Ft(t)?this.encodeAsBinary({type:t.type===y.EVENT?y.BINARY_EVENT:y.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let r=""+t.type;return(t.type===y.BINARY_EVENT||t.type===y.BINARY_ACK)&&(r+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(r+=t.nsp+","),t.id!=null&&(r+=t.id),t.data!=null&&(r+=JSON.stringify(t.data,this.replacer)),r}encodeAsBinary(t){const r=_o(t),n=this.encodeAsString(r.packet),i=r.buffers;return i.unshift(n),i}}class Zr extends ${constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let r;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(t);const n=r.type===y.BINARY_EVENT;n||r.type===y.BINARY_ACK?(r.type=n?y.EVENT:y.ACK,this.reconstructor=new Ro(r),r.attachments===0&&super.emitReserved("decoded",r)):super.emitReserved("decoded",r)}else if(Xr(t)||t.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let r=0;const n={type:Number(t.charAt(0))};if(y[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===y.BINARY_EVENT||n.type===y.BINARY_ACK){const s=r+1;for(;t.charAt(++r)!=="-"&&r!=t.length;);const o=t.substring(s,r);if(o!=Number(o)||t.charAt(r)!=="-")throw new Error("Illegal attachments");const c=Number(o);if(!ci(c)||c<0)throw new Error("Illegal attachments");if(c>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=c}if(t.charAt(r+1)==="/"){const s=r+1;for(;++r&&!(t.charAt(r)===","||r===t.length););n.nsp=t.substring(s,r)}else n.nsp="/";const i=t.charAt(r+1);if(i!==""&&Number(i)==i){const s=r+1;for(;++r;){const o=t.charAt(r);if(o==null||Number(o)!=o){--r;break}if(r===t.length)break}n.id=Number(t.substring(s,r+1))}if(t.charAt(++r)){const s=this.tryParse(t.substr(r));if(Zr.isPayloadValid(n.type,s))n.data=s;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,r){switch(t){case y.CONNECT:return Ht(r);case y.DISCONNECT:return r===void 0;case y.CONNECT_ERROR:return typeof r=="string"||Ht(r);case y.EVENT:case y.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&ai.indexOf(r[0])===-1);case y.ACK:case y.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Ro{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const r=Ao(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function $o(e){return typeof e=="string"}const ci=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e};function Do(e){return e===void 0||ci(e)}function Ht(e){return Object.prototype.toString.call(e)==="[object Object]"}function Mo(e,t){switch(e){case y.CONNECT:return t===void 0||Ht(t);case y.DISCONNECT:return t===void 0;case y.EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&ai.indexOf(t[0])===-1);case y.ACK:return Array.isArray(t);case y.CONNECT_ERROR:return typeof t=="string"||Ht(t);default:return!1}}function No(e){return $o(e.nsp)&&Do(e.id)&&Mo(e.type,e.data)}const To=Object.freeze(Object.defineProperty({__proto__:null,protocol:Lo,get PacketType(){return y},Encoder:Eo,Decoder:Zr,isPacketValid:No},Symbol.toStringTag,{value:"Module"}));function G(e,t,r){return e.on(t,r),function(){e.off(t,r)}}const Co=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class di extends ${constructor(t,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[G(t,"open",this.onopen.bind(this)),G(t,"packet",this.onpacket.bind(this)),G(t,"error",this.onerror.bind(this)),G(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...r){var n,i,s;if(Co.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(r.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const o={type:y.EVENT,data:r};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const v=this.ids++,m=r.pop();this._registerAckCallback(v,m),o.id=v}const c=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,f=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!c||(f?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(t,r){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[t]=r;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let c=0;c<this.sendBuffer.length;c++)this.sendBuffer[c].id===t&&this.sendBuffer.splice(c,1);r.call(this,new Error("operation has timed out"))},i),o=(...c)=>{this.io.clearTimeoutFn(s),r.apply(this,c)};o.withError=!0,this.acks[t]=o}emitWithAck(t,...r){return new Promise((n,i)=>{const s=(o,c)=>o?i(o):n(c);s.withError=!0,r.push(s),this.emit(t,...r)})}_addToQueue(t){let r;typeof t[t.length-1]=="function"&&(r=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((i,...s)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(i)):(this._queue.shift(),r&&r(null,...s)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!t||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:y.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case y.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case y.EVENT:case y.BINARY_EVENT:this.onevent(t);break;case y.ACK:case y.BINARY_ACK:this.onack(t);break;case y.DISCONNECT:this.ondisconnect();break;case y.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const r=t.data||[];t.id!=null&&r.push(this.ack(t.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const r=this;let n=!1;return function(...i){n||(n=!0,r.packet({type:y.ACK,id:t,data:i}))}}onack(t){const r=this.acks[t.id];typeof r=="function"&&(delete this.acks[t.id],r.withError&&t.data.unshift(null),r.apply(this,t.data))}onconnect(t,r){this.id=t,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:y.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,t.data)}}}function Ze(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Ze.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),r=Math.floor(t*this.jitter*e);e=(Math.floor(t*10)&1)==0?e-r:e+r}return Math.min(e,this.max)|0};Ze.prototype.reset=function(){this.attempts=0};Ze.prototype.setMin=function(e){this.ms=e};Ze.prototype.setMax=function(e){this.max=e};Ze.prototype.setJitter=function(e){this.jitter=e};class Tr extends ${constructor(t,r){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(r=t,t=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,tr(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Ze({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=t;const i=r.parser||To;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var r;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(r=this.backoff)===null||r===void 0||r.setMin(t),this)}randomizationFactor(t){var r;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(r=this.backoff)===null||r===void 0||r.setJitter(t),this)}reconnectionDelayMax(t){var r;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(r=this.backoff)===null||r===void 0||r.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new yo(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=G(r,"open",function(){n.onopen(),t&&t()}),s=c=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",c),t?t(c):this.maybeReconnectOnOpen()},o=G(r,"error",s);if(this._timeout!==!1){const c=this._timeout,f=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),r.close()},c);this.opts.autoUnref&&f.unref(),this.subs.push(()=>{this.clearTimeoutFn(f)})}return this.subs.push(i),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(G(t,"ping",this.onping.bind(this)),G(t,"data",this.ondata.bind(this)),G(t,"error",this.onerror.bind(this)),G(t,"close",this.onclose.bind(this)),G(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(r){this.onclose("parse error",r)}}ondecoded(t){er(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,r){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new di(this,t,r),this.nsps[t]=n),n}_destroy(t){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(t){const r=this.encoder.encode(t);for(let n=0;n<r.length;n++)this.engine.write(r[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(i=>{i?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",i)):t.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const ct={};function Pt(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const r=bo(e,t.path||"/socket.io"),n=r.source,i=r.id,s=r.path,o=ct[i]&&s in ct[i].nsps,c=t.forceNew||t["force new connection"]||t.multiplex===!1||o;let f;return c?f=new Tr(n,t):(ct[i]||(ct[i]=new Tr(n,t)),f=ct[i]),r.query&&!t.query&&(t.query=r.queryKey),f.socket(r.path,t)}Object.assign(Pt,{Manager:Tr,Socket:di,io:Pt,connect:Pt});function Bo(){return window.go.main.App.CloseWindow()}function xo(e){return window.go.main.App.CollectGuildSyncApplicationsData(e)}function Oo(e){return window.go.main.App.CollectGuildSyncBankingData(e)}function qo(e){return window.go.main.App.CollectGuildSyncRosterData(e)}function Io(e,t){return window.go.main.App.CommitGuildSyncApplicationsData(e,t)}function Fo(e,t){return window.go.main.App.CommitGuildSyncBankingData(e,t)}function Po(e,t){return window.go.main.App.CommitGuildSyncRosterData(e,t)}function Go(){return window.go.main.App.GetGuildSyncFileWatcherStatus()}function Uo(){return window.go.main.App.GetGuildSyncSession()}function Vo(){return window.go.main.App.LogoutGuildSync()}function Ho(){return window.go.main.App.MaximizeWindow()}function Wo(){return window.go.main.App.MinimizeWindow()}function li(){return window.go.main.App.SaveWindowState()}function jo(e,t){return window.go.main.App.SetGuildSyncSavedVarsWatchFileEnabled(e,t)}function zo(){return window.go.main.App.ShowMainWindow()}function Ko(){return window.go.main.App.StartDiscordLogin()}function Yo(){return window.go.main.App.StartGuildSyncFileWatcher()}function Jo(){return window.go.main.App.StopGuildSyncFileWatcher()}function Qo(e,t,r){return window.runtime.EventsOnMultiple(e,t,r)}function dt(e,t){return Qo(e,t,-1)}function Xo(e){window.runtime.BrowserOpenURL(e)}const rr="1.0.3",Zo=30*60*1e3,ui="guildsync-pending-banking-uploads",fi="guildsync-pending-roster-uploads",hi="guildsync-pending-applications-uploads",p=60*1e3,pi=7e3,mi=1400,gi=2400,ea=4e3,ta=38,yi=document.querySelector("#app");let $n=null,lt=null,Dn=!1,At=!1,Gt=null,Sr=!1,wr=!1,_r=!1,fe=null,be=new Map,Ae=new Map,M="",Te=!1,Ce=!1,pt=[],g={logged_in:!1,allowed:!1,status_message:""},ie={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},d=null,B=[],nr=null,yt=!1,Wt=!1,jt="",Fe=new Set,Pe=new Set,bt="username",Le="asc",Cr=null,Br=null,H=[],zt=null,ke=!1,Mn=!1,Kt="",xr=null,Or=null,Ee=new Set,Ge=new Set,X="",T="",D=-1,je=!1,kt="",q=[],ve="",he=[],pe=!1,ee="",Ar=null,U=-1,ze=!1,se="",I=[],Ke="",Be="",me=[],ge=!1,te="",Nn=null,_e=0;const ra=650;let V=-1,et=!1,tt=[],oe=!1,Re="",rt=!1,vt=[],ae=!1,$e="",nt=!1,en=[],ce=!1,De="",it="",de="",Ue="",le="",A=[],x=!1,P="",Ie=!1,ir="",Ve="",Lt="",Et="",Z=-1,we=!1,k=null,Me=[],Ye=!1,ne="",Rt="",W=-1,st=!1,tn=null,mt=null;const rn=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let z=[],F="biweekly",bi=null,xe=!1,Ne=!1,$t="biweekly",re=!1,Yt=!1,Q="",_={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},ot="",J=-1,qr={biweekly:0,monthly:0};const na=1780786800,ia=1781996400,sa=14*24*60*60,oa=28*24*60*60,aa=60*60,Jt=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let R=Jt[0].id;function ca(){yi.innerHTML=`
    <main class="splash-screen">
      <img src="${Bs}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await zo(),await da(),ki(),gt(),await We()},5e3)}async function da(){try{g=await Uo()}catch(e){g={logged_in:!1,allowed:!1,status_message:""},h("session-error",S(e),{ttlMs:p})}}function ki(){yi.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${xs}" alt="" class="title-icon" />
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
            <img src="${Os}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${a(rr)}</div>
            </div>
          </div>
          <div id="desktopUpdateArea" class="desktop-update-area"></div>
          <div id="discordArea" class="discord-area"></div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${vi()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content" aria-live="polite">
          ${Si()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await Wo()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await li(),await Bo()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await Ho()}),Vt(),Kr(),_i(),Ss(),ns(),fs(),$i(),rs(),Yi(),Ji(),Qi(),Xi(),Fi(),is(),ma(),ye(),Xe(),Dn||(window.addEventListener("resize",()=>{Ts(),Ms()}),il(),Dn=!0)}function vi(){return Jt.map(e=>{const t=e.id===R;return`
        <button
          class="guildsync-tab${t?" active":""}"
          type="button"
          data-tab-id="${u(e.id)}"
          aria-selected="${t?"true":"false"}"
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${la(e.icon)}</span>
          <span class="guildsync-tab-label">${a(e.label)}</span>
        </button>
      `}).join("")}function la(e){return e==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:e==="swords"?"\u2694":e==="gear"?"\u2699":e==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function Si(){const e=Jt.find(r=>r.id===R)||Jt[0];let t="";return e.id==="discord-members"?t=ya():e.id==="eso-members"?t=ba():e.id==="more"?t=cd():e.id==="settings"?t=qa():t=`
      <div class="guildsync-tab-panel" data-active-tab="${u(e.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${a(e.label)} content will appear here.
        </div>
      </div>
    `,`
    ${t}
    ${re?Fc():""}
    ${we?Mc():""}
    ${et?Ia():""}
    ${rt?Ha():""}
    ${nt?Ka():""}
    ${Ie?oc():""}
    ${st?pa():""}
  `}function ua(){return st||je||ze||re||we||et||rt||nt||Ie||Ne}function fa(){return st?!1:Ie?(Vr(),!0):nt?(Ur(),!0):rt?(Gr(),!0):et?(Pr(),!0):we?(Qe(),!0):re?(re=!1,l(),!0):je?(je=!1,l(),!0):ze?(ze=!1,l(),!0):Ne?(Ne=!1,l(),!0):!1}function ha(e){e.key==="Escape"&&fa()&&(e.preventDefault(),e.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",ha,!0),window.guildSyncGlobalModalEscapeAttached=!0);function wi(e={}){return new Promise(t=>{mt&&mt(!1),st=!0,tn={title:e.title||"Confirm Action",message:e.message||"Are you sure?",detail:e.detail||"",confirmLabel:e.confirmLabel||"Confirm",cancelLabel:e.cancelLabel||"Cancel",confirmClass:e.confirmClass||"danger"},mt=t,l()})}function Qt(e=!1){const t=mt;mt=null,st=!1,tn=null,t&&t(e===!0),l()}function pa(){const e=tn||{};return`
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
  `}function Tn(e){var n,i,s,o;const t=(i=(n=e.target).closest)==null?void 0:i.call(n,"#cancelGuildSyncConfirmButton"),r=(o=(s=e.target).closest)==null?void 0:o.call(s,"#acceptGuildSyncConfirmButton");if(!(!t&&!r)){if(e.preventDefault(),e.stopPropagation(),t){Qt(!1);return}r&&Qt(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",Tn,!0),document.addEventListener("pointerup",Tn,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function ma(){if(!st)return;const e=document.querySelector("#cancelGuildSyncConfirmButton"),t=document.querySelector("#acceptGuildSyncConfirmButton");e&&(e.onclick=n=>{n.preventDefault(),n.stopPropagation(),Qt(!1)}),t&&(t.onclick=n=>{n.preventDefault(),n.stopPropagation(),Qt(!0)});const r=document.querySelector(".guildsync-confirm-overlay");r&&(r.onclick=n=>{n.target===r&&(n.preventDefault(),n.stopPropagation())})}function _i(){document.querySelectorAll(".guildsync-tab").forEach(e=>{e.addEventListener("click",()=>{if(ua())return;const t=e.dataset.tabId;!t||t===R||(R=t,l())})})}function ga(){const e=document.querySelector(".member-links-table-shell");e&&e.scrollTop}function l(e={}){Ie&&ga();const t=document.querySelector(".guildsync-tabs"),r=document.querySelector("#guildSyncTabContent");t&&(t.innerHTML=vi()),r&&(r.innerHTML=Si()),_i(),Ss(),ns(),fs(),$i(),rs(),Yi(),Ji(),Qi(),Xi(),Fi(),is(),e.restoreDiscordSearchFocus&&Nd(),e.restoreRosterSearchFocus&&Td(),R==="discord-members"&&(d==null?void 0:d.connected)&&B.length===0&&!yt&&gn({silent:!0}),R==="eso-members"&&(d==null?void 0:d.connected)&&H.length===0&&!ke&&!Mn&&(Mn=!0,Mt({silent:!0})),R==="more"&&(d==null?void 0:d.connected)&&z.length===0&&!xe&&fr({silent:!0}),(R==="discord-members"||R==="eso-members"||R==="settings")&&(d==null?void 0:d.connected)&&A.length===0&&!x&&sr({silent:!0})}function ya(){const e=$d(),t=Cd(),r=Array.from(Fe),n=Array.from(Pe);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${a(ws(nr))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${yt||Wt?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Wt?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${u(jt)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${t.filter(i=>!Fe.has(i)).map(i=>`<option value="${u(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All roles</span>':r.map(i=>qd(i)).join("")}
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
              ${rn.filter(i=>!Pe.has(i.id)).map(i=>`<option value="${u(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(i=>Ai("discord",i)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${xt("username","Username")}
                ${xt("global_name","Global Name")}
                ${xt("server_nickname","Server Nickname")}
                ${xt("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${e.length>0?e.map(i=>Bd(i)).join(""):xd()}
            </tbody>
          </table>
        </div>
      </div>
      ${ze?Ma():""}
    </div>
  `}function ba(){const e=_a(),t=Ea(),r=Array.from(Ee),n=Array.from(Ge);return`
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
          <span class="discord-last-refresh">Last Refresh: ${a(Yc(zt))}</span>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${ke?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${ke?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${u(Kt)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${t.filter(i=>!Ee.has(i)).map(i=>`<option value="${u(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All ranks</span>':r.map(i=>Ra(i)).join("")}
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
              ${rn.filter(i=>!Ge.has(i.id)).map(i=>`<option value="${u(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(i=>Ai("roster",i)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${Bt("account_name","Account Name")}
                ${Bt("rank","Rank")}
                ${Bt("joined","Joined")}
                ${Bt("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${e.length>0?e.map((i,s)=>ka(i,s)).join(""):va()}
            </tbody>
          </table>
        </div>
      </div>
      ${je?Ba():""}
    </div>
  `}function ka(e,t=-1){const r=Sa(e.rank||""),n=r?` style="color: ${r};"`:"";return`
    <tr class="eso-roster-row${t===D?" roster-search-active-row":""}"${n} data-roster-row-index="${u(String(t))}" data-eso-account-name="${u(e.account_name||"")}">
      <td>${a(e.account_name||"")}</td>
      <td>${nn(e.rank||"")}</td>
      <td>${a(cr(e.joined))}</td>
      <td class="member-link-action-cell">${Hi({mode:"eso-to-discord",esoAccountName:e.account_name})}</td>
    </tr>
  `}function va(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">${a(ke?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function Sa(e){const t=String(e||"").trim(),r=bn(t);return hr(r==null?void 0:r.role_color)}function nn(e){const t=String(e||"").trim();return`<span class="eso-roster-rank-text">${a(t)}</span>`}function wa(e){const t=String(e||"").trim();return!t||t.toLowerCase()==="unknown"?"":nn(t)}function _a(){const e=Kt.trim().toLowerCase(),t=H.filter(r=>{const n=String(r.rank||"").trim();if(Ee.size>0&&!Ee.has(n)||!Ri(Ge,Ir(r)))return!1;if(!e)return!0;const i=cr(r.joined),s=ln(r.joined),o=Ir(r),c=Ei(r.account_name||"");return[r.account_name,n,i,s,r.joined,o,c].map(b=>String(b||"").toLowerCase()).join(" ").includes(e)});return Aa(t)}function Aa(e){if(!X||!T)return e;const t=T==="desc"?-1:1;return[...e].sort((r,n)=>{const i=Cn(r,X),s=Cn(n,X),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*t:String(r.account_name||"").localeCompare(String(n.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function Cn(e,t){if(t==="rank")return String(e.rank||"");if(t==="joined"){const r=Number(e.joined||0);return Number.isFinite(r)&&r>0?String(r).padStart(16,"0"):""}if(t==="linked"){const r=Ir(e);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[r]||"9"} ${r} ${Ei(e.account_name||"")}`}return String(e.account_name||"")}function La(e){const r=new Set(["account_name","rank","joined","linked"]).has(e)?e:"account_name";X!==r?(X=r,T="asc"):T==="asc"?T="desc":T==="desc"?(X="",T=""):(X=r,T="asc"),D=-1,l()}function Bt(e,t,r=""){const n=X===e&&Boolean(T),i=n?T==="asc"?"ascending":"descending":"none",s=n?T==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${u(r)}" aria-sort="${u(i)}">
      <button
        class="discord-sort-header roster-sort-header${n?" active":""}"
        type="button"
        data-roster-sort-column="${u(e)}"
        title="Sort ${u(t)}${n&&T==="asc"?" descending":n&&T==="desc"?" not sorted":" ascending"}"
      >
        <span>${a(t)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function Ea(){return Array.from(new Set(H.map(e=>String(e.rank||"").trim()).filter(Boolean))).sort((e,t)=>e.localeCompare(t))}function Ra(e){const t=bn(e),r=hr(t==null?void 0:t.role_color),n=vn(r),i=kn(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-roster-rank-filter="${u(e)}"
      style="${i}"
      title="Remove ${u(e)} filter"
    >
      <span>${a(e)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function $a(e){const t=rn.find(r=>r.id===e);return t?t.label:e}function Ai(e,t){const r=e==="roster"?"roster":"discord",n=$a(t);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${r}-link-status-filter="${u(t)}"
      title="Remove ${u(n)} link filter"
    >
      <span>${a(n)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Li(e){const t=Array.isArray(e)?e.filter(Boolean):e?[e]:[];return t.length===0?"unlinked":t.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked"&&String(r.link_method||"").trim().toLowerCase()==="manual")?"manual":t.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked")?"linked":t.some(r=>String(r.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function Da(e){return Li(ar(e==null?void 0:e.discord_id))}function Ir(e){return Li(or(e==null?void 0:e.account_name))}function Ei(e){const t=or(e),r=Vi({mode:"eso-to-discord",esoAccountName:e}),n=t.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean),i=t.filter(s=>String(s.link_status||"").trim().toLowerCase()==="candidate").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean);return[r.label,r.title,n.join(" "),i.join(" ")].filter(Boolean).join(" ")}function Ri(e,t){return!e||e.size===0||e.has(t)?!0:t==="manual"&&e.has("linked")}function Ma(){return`
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
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${u(se)}" />
        </div>

        ${te?`<div class="discord-data-error">${a(te)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Na()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${Be?`: ${a(Be)}`:""}</div>
            ${Ta()}
          </div>
        </div>
      </div>
    </div>
  `}function Na(){return ge&&I.length===0?'<div class="roster-history-muted">Searching...</div>':I.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${I.map((e,t)=>`
        <button class="roster-history-match${t===V||e.discord_id===Ke?" is-selected":""}" type="button" data-discord-history-id="${u(e.discord_id)}" data-discord-history-name="${u(Fr(e))}">
          <span>${a(Fr(e))}</span>
          <strong>${a(String(e.event_count||0))} event${Number(e.event_count||0)===1?"":"s"}</strong>
          ${t===V?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Ta(){return Ke?ge&&me.length===0?'<div class="roster-history-muted">Loading history...</div>':me.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
    <div class="roster-history-event-table-shell">
      <table class="discord-member-table roster-history-event-table roster-rank-history-event-table discord-member-history-event-table">
        <thead>
          <tr>
            <th class="roster-history-when-column">When</th>
            <th>Event</th>
            <th>Old</th>
            <th>New</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          ${me.map(e=>`
            <tr>
              <td class="roster-history-when-cell">${a(ln(e.event_timestamp||e.event_datetime||e.timestamp))}</td>
              <td>${a(Ca(e.event_type))}</td>
              <td>${a(e.old_value||"")}</td>
              <td>${a(e.new_value||"")}</td>
              <td>${a(e.source||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function Fr(e={}){return String(e.server_nickname||e.global_name||e.username||e.discord_id||"").trim()}function Ca(e){return String(e||"").replaceAll("_"," ").replace(/\b\w/g,t=>t.toUpperCase())}function Ba(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(kt)}" />
        </div>

        ${ee?`<div class="discord-data-error">${a(ee)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${xa()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${ve?`: ${a(ve)}`:""}</div>
            ${Oa()}
          </div>
        </div>
      </div>
    </div>
  `}function xa(){return pe&&q.length===0?'<div class="roster-history-muted">Searching...</div>':q.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${q.map((e,t)=>`
        <button class="roster-history-match${t===U||e.account_name===ve?" is-selected":""}" type="button" data-roster-history-account="${u(e.account_name)}">
          <span>${a(e.account_name)}</span>
          <strong>${a(e.rank||"")}</strong>
          ${t===U?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Oa(){return ve?pe&&he.length===0?'<div class="roster-history-muted">Loading history...</div>':he.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${he.map(e=>`
            <tr>
              <td class="roster-history-when-cell">${a(ln(e.timestamp))}</td>
              <td>${a(e.event_type||"")}</td>
              <td>${wa(e.rank)}</td>
              <td>${a(e.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function qa(){return`
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
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${oe?"disabled":""}>
              ${oe?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${ae?"disabled":""}>
              ${ae?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${ce?"disabled":""}>
              ${ce?"Loading...":"Run"}
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
  `}function $i(){var e,t,r,n;R==="settings"&&((e=document.querySelector("#runAssociateTicketReportButton"))==null||e.addEventListener("click",()=>Di()),(t=document.querySelector("#runDiscordRankAuditReportButton"))==null||t.addEventListener("click",()=>Va()),(r=document.querySelector("#runDiscordLastSeenReportButton"))==null||r.addEventListener("click",()=>za()),(n=document.querySelector("#runMemberLinksReportButton"))==null||n.addEventListener("click",()=>nc()))}function Di(){et=!0,Re="",l(),ts()}function Pr(){et=!1,Re="",l()}function Ia(){const e=Fa(),t=Pa(),r=tt.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${oe?"disabled":""}>${oe?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(r))} total row${r===1?"":"s"}</span>
        </div>

        ${Re?`<div class="discord-data-error">${a(Re)}</div>`:""}

        <div class="report-results-content">
          ${oe&&r===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!oe&&r===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${r>0?Bn("Eligible","Linked to Discord and eligible for promotion review.",e,"No linked eligible Associates found."):""}
          ${r>0?Bn("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",t,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${a(Ni())}</textarea>
      </div>
    </div>
  `}function Fa(){return tt.filter(e=>String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible")}function Pa(){return tt.filter(e=>String(e.report_group||e.eligibility_group||"").toLowerCase()!=="eligible")}function Bn(e,t,r,n){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${a(e)}</h4>
          <p>${a(t)}</p>
        </div>
        <span>${a(String(r.length))} row${r.length===1?"":"s"}</span>
      </div>
      ${r.length>0?Ga(r):`<div class="roster-history-muted report-section-empty">${a(n)}</div>`}
    </section>
  `}function Ga(e=tt){return`
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
              <td>${nn(t.rank||"")}</td>
              <td>${a(cr(t.joined))}</td>
              <td>${a(ur(t.purchased_tickets||0))}</td>
              <td>${a(Mi(t))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Mi(e){return String(e.link_status||"").toLowerCase()==="linked"?e.discord_server_nickname||e.discord_display_name||e.discord_username||e.discord_user_id||"Linked":"Needs Link Review"}function Ni(){const e=[["Section","Account Name","Rank","Joined","Purchased Tickets","Discord Link"]];for(const t of tt){const r=String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";e.push([r,t.account_name||"",t.rank||"",cr(t.joined),ur(t.purchased_tickets||0),Mi(t)])}return e.map(t=>t.map(dr).join("	")).join(`
`)}async function Ua(){const e=Ni();if(await lr(e)){h("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#associateTicketReportTsv");r&&(r.focus(),r.select()),h("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function Va(){rt=!0,$e="",l(),es()}function Gr(){rt=!1,$e="",l()}function Ha(){const e=vt.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${ae?"disabled":""}>${ae?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(e))} total row${e===1?"":"s"}</span>
        </div>

        ${$e?`<div class="discord-data-error">${a($e)}</div>`:""}

        <div class="report-results-content">
          ${ae&&e===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!ae&&e===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${e>0?Wa(vt):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${a(Bi())}</textarea>
      </div>
    </div>
  `}function Wa(e=vt){return`
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
              <td>${a(Ti(t))}</td>
              <td>${a(t.discord_rank||"No matching rank role")}</td>
              <td>${a(t.eso_accounts||"No linked ESO account")}</td>
              <td>${a(t.eso_rank||"None")}</td>
              <td>${a(Ci(t))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Ti(e){return e.server_nickname||e.global_name||e.username||e.discord_id||""}function Ci(e){const t=String(e.issue_type||"").toLowerCase();return t==="no_linked_eso_account"?"No linked ESO account":t==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":t==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":t==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":t||"Review needed"}function Bi(){const e=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const t of vt)e.push([Ti(t),t.username||"",t.discord_rank||"No matching rank role",t.discord_rank_roles||"",t.eso_accounts||"No linked ESO account",t.eso_rank||"None",Ci(t)]);return e.map(t=>t.map(dr).join("	")).join(`
`)}async function ja(){const e=Bi();if(await lr(e)){h("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#discordRankAuditReportTsv");r&&(r.focus(),r.select()),h("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function za(){nt=!0,De="",it="",l(),Zi(),A.length===0&&!x&&sr({silent:!0})}function Ur(){nt=!1,De="",it="",de="",Ue="",le="",l()}function Ka(){const e=sn(),t=en.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${ce?"disabled":""}>${ce?"Loading...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(t))} Discord member${t===1?"":"s"}</span>
        </div>

        <div class="discord-last-seen-filter-row">
          <input
            id="discordLastSeenReportSearchInput"
            class="member-links-report-search-input discord-last-seen-search-input"
            type="search"
            autocomplete="off"
            spellcheck="false"
            placeholder="Search Discord member, username, last seen action, or date..."
            value="${u(it)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${de===""?"selected":""}>All link statuses</option>
            <option value="linked" ${de==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${de==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${de==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${De?`<div class="discord-data-error discord-last-seen-report-error">${a(De)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${ce&&t===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!ce&&t===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${t>0?Ya(e):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${a(Oi(e))}</textarea>
      </div>
    </div>
  `}function Ya(e=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${ut("name","Discord Member")}</th>
            <th>${ut("eso","Linked ESO Account")}</th>
            <th>${ut("date","Last Seen")}</th>
            <th>${ut("days","Days Since")}</th>
            <th>${ut("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${e.map(t=>`
            <tr class="discord-last-seen-row ${u(tc(t.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${u(Oe(t).status)}" data-discord-last-seen-search="${u(xi(t))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${ec(t)}
                  <span>${a(Je(t))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${Qa(t)}</td>
              <td>${a(on(t.last_seen))}</td>
              <td>${a(an(t.last_seen))}</td>
              <td>${a(Xt(t.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function ut(e,t){const r=Ue===e,n=r?le==="asc"?"\u25B2":"\u25BC":"\u2195",i=r?`${t}: ${le==="asc"?"ascending":"descending"}`:`${t}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${r?" active":""}" type="button" data-discord-last-seen-sort="${u(e)}" title="${u(i)}">
      <span>${a(t)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${a(n)}</span>
    </button>
  `}function sn(){const e=[...en],t=Ue,r=le;if(!t||!r)return e;const n=r==="desc"?-1:1;return e.sort((i,s)=>{var o,c;if(t==="date"){const f=Number(i.last_seen||0)||0,b=Number(s.last_seen||0)||0;return(f-b)*n}if(t==="days")return(xn(i.last_seen)-xn(s.last_seen))*n;if(t==="action")return Xt(i.last_seen_action).localeCompare(Xt(s.last_seen_action),void 0,{sensitivity:"base"})*n;if(t==="eso"){const f=Oe(i),b=Oe(s),v={linked:0,candidate:1,unlinked:2},m=((o=v[f.status])!=null?o:9)-((c=v[b.status])!=null?c:9);return m!==0?m*n:f.esoAccountName.localeCompare(b.esoAccountName,void 0,{sensitivity:"base"})*n}return Je(i).localeCompare(Je(s),void 0,{sensitivity:"base"})*n})}function Ja(e){Ue!==e?(Ue=e,le="asc"):le==="asc"?le="desc":(Ue="",le=""),l()}function Je(e){return(e==null?void 0:e.server_nickname)||(e==null?void 0:e.global_name)||(e==null?void 0:e.username)||(e==null?void 0:e.discord_id)||""}function xi(e){return[Je(e),e==null?void 0:e.server_nickname,e==null?void 0:e.global_name,e==null?void 0:e.username,e==null?void 0:e.discord_id,e==null?void 0:e.last_seen_action,Xa(e),on(e==null?void 0:e.last_seen),an(e==null?void 0:e.last_seen)].filter(Boolean).join(" ")}function Oe(e){const t=bc(e==null?void 0:e.discord_id),r=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),n=String((t==null?void 0:t.eso_account_name)||"").trim();return r==="linked"&&n?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:n,title:`Linked ESO account: ${n}`}:(r==="candidate"||String((t==null?void 0:t.link_method)||"").trim().toLowerCase()==="fuzzy")&&n?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:n,title:`Fuzzy ESO account candidate: ${n}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function Qa(e){const t=Oe(e);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${u(t.className)}"
      title="${u(t.title)}"
      aria-label="${u(t.label)}"
      role="img"
    ></span>
  `}function Xa(e){const t=Oe(e);return[t.status,t.label,t.esoAccountName].filter(Boolean).join(" ")}function Za(e){const t=String((e==null?void 0:e.avatar)||"").trim(),r=String((e==null?void 0:e.discord_id)||"").trim();if(!t||!r)return"";if(/^https?:\/\//i.test(t))return t;const n=t.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(t)}.${n}?size=64`}function ec(e){const t=Je(e),r=t?t.slice(0,2).toUpperCase():"?",n=Za(e);return n?`<span class="discord-member-avatar"><img src="${u(n)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${a(r)}</span>`}function on(e){const t=Number(e);if(!t)return"Never";const r=new Date(t*1e3);if(Number.isNaN(r.getTime()))return String(e||"");const n=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(r).reduce((i,s)=>(i[s.type]=s.value,i),{});return`${n.month}/${n.day}/${n.year} ${n.hour}:${n.minute} ${n.dayPeriod}`}function tc(e){const t=Number(e);if(!t)return"discord-last-seen-unknown";const r=(Date.now()-t*1e3)/864e5;return r>30?"discord-last-seen-red":r>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function an(e){const t=Number(e);if(!t)return"Never";const r=Date.now()-t*1e3;if(!Number.isFinite(r))return"";if(r<0)return"0 days";const n=Math.floor(r/864e5);return`${n} day${n===1?"":"s"}`}function xn(e){const t=Number(e);if(!t)return Number.POSITIVE_INFINITY;const r=Date.now()-t*1e3;return Number.isFinite(r)?r<0?0:Math.floor(r/864e5):Number.POSITIVE_INFINITY}function Xt(e){return String(e||"").trim()||"None tracked"}function Oi(e=sn()){const t=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const r of e){const n=Oe(r);t.push([Je(r),n.label||"",n.esoAccountName||"",on(r==null?void 0:r.last_seen),an(r==null?void 0:r.last_seen),Xt(r==null?void 0:r.last_seen_action),(r==null?void 0:r.username)||"",(r==null?void 0:r.discord_id)||""])}return t.map(r=>r.map(dr).join("	")).join(`
`)}async function rc(){const e=sn().filter(i=>{const s=Y(it),o=String(de||"").trim().toLowerCase(),c=!s||Y(xi(i)).includes(s),f=!o||Oe(i).status===o;return c&&f}),t=Oi(e);if(await lr(t)){h("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#discordLastSeenReportTsv");n&&(n.focus(),n.select()),h("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function nc(){Ie=!0,P="",l(),A.length===0&&!x&&sr({silent:!0})}function Vr(){Ie=!1,ir="",Ve="",Lt="",Et="",Z=-1,l()}function qi(e){return[...new Set((Array.isArray(A)?A:[]).map(t=>String((t==null?void 0:t[e])||"").trim().toLowerCase()).filter(Boolean))].sort((t,r)=>t.localeCompare(r,void 0,{sensitivity:"base"}))}function Ii(e,t){return e.map(r=>`<option value="${u(r)}" ${t===r?"selected":""}>${a(r)}</option>`).join("")}function ic(){return Ii(qi("link_status"),Lt)}function sc(){return Ii(qi("link_method"),Et)}function oc(){return`
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
          <span class="roster-history-muted">${a(String(A.length))} link/candidate row${A.length===1?"":"s"}</span>
        </div>

        <div class="member-links-report-filter-row">
          <input
            id="memberLinksReportSearchInput"
            class="member-links-report-search-input"
            type="search"
            autocomplete="off"
            spellcheck="false"
            placeholder="Search Discord account or ESO member..."
            value="${u(ir)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${Lt===""?"selected":""}>All statuses</option>
            ${ic()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${Et===""?"selected":""}>All methods</option>
            ${sc()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${Ve===""?"selected":""}>All actions</option>
            <option value="needs-link" ${Ve==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${Ve==="can-unlink"?"selected":""}>Unlink Available</option>
          </select>
        </div>

        ${P?`<div class="discord-data-error member-links-report-error">${a(P)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${lc()}
        </div>
      </div>
    </div>
  `}function Fi(){var r,n,i,s,o,c;if(!Ie)return;(r=document.querySelector("#closeMemberLinksReportButton"))==null||r.addEventListener("click",Vr),(n=document.querySelector("#refreshMemberLinksButton"))==null||n.addEventListener("click",()=>sr()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>gc());const e=document.querySelector("#memberLinksReportSearchInput");e&&(e.addEventListener("input",uc),e.addEventListener("keydown",mc)),(s=document.querySelector("#memberLinksReportActionFilter"))==null||s.addEventListener("change",fc),(o=document.querySelector("#memberLinksReportStatusFilter"))==null||o.addEventListener("change",hc),(c=document.querySelector("#memberLinksReportMethodFilter"))==null||c.addEventListener("change",pc),Dt(),document.querySelectorAll("[data-accept-member-candidate]").forEach(f=>{f.addEventListener("click",()=>Gi(f.dataset.acceptMemberCandidate||"",f.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(f=>{f.addEventListener("click",()=>yc(f.dataset.unlinkMemberLink||"",f.dataset.unlinkMemberLinkDiscordId||""))});const t=document.querySelector(".member-links-report-overlay");t&&t.addEventListener("click",f=>{f.target===t&&Vr()})}function On(e){const t=String((e==null?void 0:e.link_status)||"").trim().toLowerCase();return t==="candidate"?0:t==="linked"?2:1}function qn(e){return[e==null?void 0:e.eso_account_name,e==null?void 0:e.discord_server_nickname,e==null?void 0:e.discord_display_name,e==null?void 0:e.discord_username,e==null?void 0:e.discord_user_id].filter(Boolean).join(" ")}function ac(e){return[e==null?void 0:e.eso_account_name,e==null?void 0:e.discord_username,e==null?void 0:e.discord_display_name,e==null?void 0:e.discord_server_nickname,e==null?void 0:e.discord_user_id].filter(Boolean).join(" ")}function cc(e){return[...Array.isArray(e)?e:[]].sort((t,r)=>{const n=On(t)-On(r);if(n!==0)return n;const i=qn(t).localeCompare(qn(r),void 0,{sensitivity:"base"});return i!==0?i:String((t==null?void 0:t.discord_user_id)||"").localeCompare(String((r==null?void 0:r.discord_user_id)||""),void 0,{sensitivity:"base"})})}function dc(e){const t=Hr(e);let r="";t==="Username"?r=(e==null?void 0:e.discord_username)||"":t==="Global Name"?r=(e==null?void 0:e.discord_display_name)||"":t==="Server Nickname"&&(r=(e==null?void 0:e.discord_server_nickname)||""),r||(r=(e==null?void 0:e.discord_server_nickname)||(e==null?void 0:e.discord_display_name)||(e==null?void 0:e.discord_username)||(e==null?void 0:e.discord_user_id)||"");const n=t?` <span class="member-link-report-match-field">(${a(t)})</span>`:"";return`<span class="member-link-report-discord-name">${a(r)}</span>${n}`}function lc(){return x&&A.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(A)||A.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${cc(A).map(t=>{var s;const r=String(t.link_status||"").trim().toLowerCase(),n=String(t.link_method||"").trim().toLowerCase(),i=dc(t);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${u(ac(t))}"
                data-member-links-report-status="${u(r)}"
                data-member-links-report-method="${u(n)}"
                data-member-links-report-action="${u(r==="linked"?"can-unlink":r==="candidate"?"needs-link":"")}"
              >
                <td>${a(t.eso_account_name||"")}</td>
                <td>${i}</td>
                <td class="member-links-status-col">${a(r||"")}</td>
                <td class="member-links-method-col">${a(n||"")}${Number(t.locked||0)===1?" \u{1F512}":""}</td>
                <td class="member-links-action-col">
                  <div class="member-link-actions">
                    ${r==="candidate"?`<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${u(t.eso_account_name||"")}" data-accept-member-candidate-discord-id="${u(t.discord_user_id||"")}" aria-label="Accept candidate link" title="Accept candidate link">\u2713</button>`:""}
                    ${r==="linked"?`<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${u(t.eso_account_name||"")}" data-unlink-member-link-discord-id="${u(t.discord_user_id||"")}" aria-label="Unlink this ESO/Discord pair" title="Unlink this ESO/Discord pair">\u{1F5D1}</button>`:""}
                  </div>
                </td>
                <td class="member-links-confidence-col">${a(String((s=t.match_confidence)!=null?s:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function Pi(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(e=>e.offsetParent!==null)}function In(e){const t=Pi();if(t.forEach(n=>n.classList.remove("member-links-report-row-active")),t.length===0){Z=-1;return}Z=Math.max(0,Math.min(e,t.length-1));const r=t[Z];r.classList.add("member-links-report-row-active"),r.scrollIntoView({block:"nearest"})}function Dt(){const e=Y(ir),t=String(Ve||"").trim().toLowerCase(),r=String(Lt||"").trim().toLowerCase(),n=String(Et||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let s=0;i.forEach(c=>{const f=Y(c.dataset.memberLinksReportSearch||""),b=String(c.dataset.memberLinksReportAction||"").trim().toLowerCase(),v=String(c.dataset.memberLinksReportStatus||"").trim().toLowerCase(),m=String(c.dataset.memberLinksReportMethod||"").trim().toLowerCase(),_n=(!e||f.includes(e))&&(!t||b===t)&&(!r||v===r)&&(!n||m===n);c.hidden=!_n,c.classList.remove("member-links-report-row-active"),_n&&(s+=1)});const o=document.querySelector("#memberLinksReportSearchEmpty");o&&(o.hidden=s!==0),Z=-1}function uc(e){ir=e.target.value||"",Dt()}function fc(e){Ve=e.target.value||"",Dt()}function hc(e){Lt=e.target.value||"",Dt()}function pc(e){Et=e.target.value||"",Dt()}function mc(e){if(e.key==="Enter"){e.preventDefault();return}if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;e.preventDefault();const t=Pi();if(t.length===0)return;if(e.key==="ArrowDown"){const n=Z<0?0:Z+1;In(n>=t.length?t.length-1:n);return}const r=Z<0?t.length-1:Z-1;In(r<0?0:r)}async function sr(e={}){if(!(d!=null&&d.connected)){P="You must be connected to load member links.",l();return}x=!0,P="",e.silent||l();try{const t=await L("guildsync:request-member-links",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load member links.");A=Array.isArray(t.links)?t.links:[]}catch(t){P=S(t)}finally{x=!1,l()}}async function gc(){if(!(d!=null&&d.connected)||!g.logged_in){P="You must be logged in and connected to run auto-linking.",l();return}x=!0,P="",l();try{const e=await L("guildsync:run-member-auto-linking",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to run auto-linking.");A=Array.isArray(e.links)?e.links:[],h("member-auto-link",e.message||"Member auto-linking complete.",{ttlMs:p})}catch(e){P=S(e)}finally{x=!1,l()}}async function Gi(e,t=""){try{const r=await L("guildsync:accept-member-link-candidate",{esoAccountName:e,discordUserId:t},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to accept candidate.");A=Array.isArray(r.links)?r.links:A,h("member-link-accepted",r.message||"Candidate accepted as a link.",{ttlMs:p})}catch(r){P=S(r),h("member-link-accept-error",P,{ttlMs:p})}}async function yc(e,t=""){if(!!await wi({title:"Unlink Member?",message:`Remove the link between ${e} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const n=await L("guildsync:manual-unlink-member",{esoAccountName:e,discordUserId:t},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to unlink member.");A=Array.isArray(n.links)?n.links:A,h("member-link-unlinked",n.message||"Member link removed.",{ttlMs:p})}catch(n){P=S(n)}l()}}function qe(e){return String(e||"").trim().replace(/^@+/,"").toLowerCase()}function or(e){const t=qe(e);return t?A.filter(r=>qe(r.eso_account_name)===t):[]}function ar(e){const t=String(e||"").trim();return t?A.filter(r=>String(r.discord_user_id||"").trim()===t):[]}function Ui(e=[]){const t=Array.isArray(e)?e.filter(Boolean):[];if(t.length===0)return null;const r=t.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(r.length>0){const i=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const s=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return s||r[0]}const n=t.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return n||t[0]}function bc(e){return Ui(ar(e))}function kc(e){return`${qe(e==null?void 0:e.eso_account_name)}::${String((e==null?void 0:e.discord_user_id)||"").trim()}`}function cn(){return k?k.mode==="discord-to-eso"?ar(k.discordUserId):or(k.esoAccountName):[]}function vc(e){const t=String(e||"").trim(),r=B.find(n=>String(n.discord_id||"").trim()===t);return r&&(r.server_nickname||r.global_name||r.username||r.discord_id)||t}function Vi(e){const t=(e==null?void 0:e.mode)||"",r=t==="discord-to-eso"?ar(e.discordUserId):or(e.esoAccountName),n=Ui(r),i=String((n==null?void 0:n.link_status)||"").trim().toLowerCase(),s=r.filter(c=>String(c.link_status||"").trim().toLowerCase()==="linked").length,o=r.filter(c=>String(c.link_status||"").trim().toLowerCase()==="candidate").length;return s>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${t==="discord-to-eso"?s===1?n.eso_account_name:`${s} ESO accounts`:s===1?n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member":`${s} Discord accounts`}`}:i==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${t==="discord-to-eso"?n.eso_account_name:n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member"}`}:i==="blocked"||Number((n==null?void 0:n.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function Hi(e){const t=(e==null?void 0:e.mode)||"",r=t==="discord-to-eso"?e.discordUserId:e.esoAccountName,n=Vi(e);return`
    <button
      class="member-link-status-dot member-link-status-${u(n.className)}"
      type="button"
      title="${u(n.title)}"
      aria-label="${u(n.label)}"
      data-open-member-link-dialog="${u(t)}"
      data-member-link-value="${u(r||"")}"
    ></button>
  `}function Sc(){return k?k.mode==="discord-to-eso"?vc(k.discordUserId):k.esoAccountName||"":""}function Wi(e){const t=String(e||"").trim().toLowerCase();return t==="discord_username"||t==="username"?"Username":t==="discord_display_name"||t==="global_name"||t==="display_name"?"Global Name":t==="discord_server_nickname"||t==="server_nickname"||t==="nickname"?"Server Nickname":""}function Hr(e){const t=Wi((e==null?void 0:e.match_field)||(e==null?void 0:e.matched_field)||(e==null?void 0:e.discord_match_field));if(t)return t;const r=String((e==null?void 0:e.match_reason)||"").toLowerCase();if(r.includes("discord_username")||r.includes("username"))return"Username";if(r.includes("discord_display_name")||r.includes("global")||r.includes("display"))return"Global Name";if(r.includes("discord_server_nickname")||r.includes("server")||r.includes("nickname"))return"Server Nickname";const n=String((e==null?void 0:e.link_method)||"").trim().toLowerCase();if(n==="exact"||n==="fuzzy"){const i=(e==null?void 0:e.eso_account_name)||"",s=[{field:"Username",value:e==null?void 0:e.discord_username},{field:"Global Name",value:e==null?void 0:e.discord_display_name},{field:"Server Nickname",value:e==null?void 0:e.discord_server_nickname}];let o=null;for(const c of s){const f=wc(i,c.value);(!o||f>o.score)&&(o={...c,score:f})}if(o&&o.score>0)return o.field}return""}function Y(e){return String(e||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function wc(e,t){const r=Y(e),n=Y(t);if(!r||!n)return 0;if(r===n)return 100;if((r.includes(n)||n.includes(r))&&Math.min(r.length,n.length)>=4)return 88;const i=Math.abs(r.length-n.length),s=[...r].findIndex((c,f)=>c!==n[f]),o=s===-1?Math.min(r.length,n.length):s;return Math.max(0,Math.min(75,Math.round(o*10-i*3)))}function _c(e){const t=String(e||"").trim().toLowerCase();return t==="blocked"||t==="unlinked"?"unlinked":t||"unlinked"}function Ac(e){const t=String(e||"").trim().toLowerCase();return t==="manual_unlink"?"auto-link disabled":t||"none"}function Lc(e){const t=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),r=_c(e==null?void 0:e.link_status);return`<span class="${t==="linked"?"member-link-status-word member-link-status-word-linked":t==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${a(r)}</span>`}function Ec(e){var c;const t=e.discord_server_nickname||e.discord_display_name||e.discord_username||e.discord_user_id||"",r=Number(e.locked||0)===1?"Auto-link blocked":"Auto-managed",n=String(e.link_status||"").trim().toLowerCase(),o=n==="linked"?`<button
        class="member-link-trash-button"
        type="button"
        aria-label="Unlink this ESO/Discord pair"
        title="Unlink this ESO/Discord pair"
        data-unlink-dialog-member-link
        data-unlink-eso-account="${u(e.eso_account_name||"")}"
        data-unlink-discord-user-id="${u(e.discord_user_id||"")}"
      >\u{1F5D1}</button>`:n==="candidate"?`<button
          class="member-link-approve-button"
          type="button"
          aria-label="Approve suggested link"
          title="Approve suggested link"
          data-accept-dialog-member-candidate="${u(e.eso_account_name||"")}"
          data-accept-dialog-discord-user-id="${u(e.discord_user_id||"")}"
        >\u2713</button>`:"";return`
    <div class="member-link-current-card">
      <div class="member-link-current-details">
        <div><span>ESO:</span> ${a(e.eso_account_name||"")}</div>
        <div><span>Discord:</span> ${a(t)}</div>
        <div><span>Status:</span> ${Lc(e)} \xB7 ${a(Ac(e.link_method))} \xB7 ${a(String((c=e.match_confidence)!=null?c:""))}% \xB7 ${a(r)}</div>
        ${Hr(e)?`<div><span>Matched:</span> Matched on ${a(Hr(e))}</div>`:""}
      </div>
      ${o}
    </div>
  `}function Rc(){const e=cn();return e.length?[...e].sort((r,n)=>{var f,b;const i=String(r.link_status||"").trim().toLowerCase(),s=String(n.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},c=((f=o[i])!=null?f:9)-((b=o[s])!=null?b:9);return c!==0?c:Number(n.match_confidence||0)-Number(r.match_confidence||0)}).map(r=>Ec(r)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function $c(){if(Ye)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(ne)return`<div class="discord-data-error">${a(ne)}</div>`;if(!Array.isArray(Me)||Me.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const e=new Set(cn().map(r=>kc(r))),t=[...Me].filter(r=>{const n=(k==null?void 0:k.mode)==="discord-to-eso"?`${qe(r.account_name)}::${String(k.discordUserId||"").trim()}`:`${qe(k==null?void 0:k.esoAccountName)}::${String(r.discord_id||"").trim()}`;return!e.has(n)}).sort((r,n)=>{const i=Number(n.confidence||0)-Number(r.confidence||0);return i!==0?i:Fn(r).localeCompare(Fn(n),void 0,{sensitivity:"base"})});return t.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${t.map(r=>Dc(r)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function Fn(e){return((k==null?void 0:k.mode)||"")==="discord-to-eso"?String(e.account_name||""):String(e.server_nickname||e.global_name||e.username||e.discord_id||"")}function Dc(e,t={}){var m,w,C;const r=(k==null?void 0:k.mode)||"",n=r==="discord-to-eso"?e.account_name:e.server_nickname||e.global_name||e.username||e.discord_id||"Discord member",i=Wi(e.matchField||e.match_field||e.discordMatchField||e.discord_match_field),s=r==="discord-to-eso"?`Rank: ${e.rank||""}`:[e.username,e.global_name,e.server_nickname].filter(Boolean).join(" \xB7 "),o=[s,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),c=r==="discord-to-eso"?e.account_name:e.discord_id,f=t.disabled===!0,b=[n,s,o,e.account_name,e.username,e.global_name,e.server_nickname,e.discord_id].filter(Boolean).join(" "),v=[n,o,`${(m=e.confidence)!=null?m:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${u(c||"")}" data-member-link-option-search="${u(b)}" title="${u(v)}" ${f?"disabled":""}>
      <span class="member-link-option-name" title="${u(n||"")}">${a(n||"")}</span>
      <span class="member-link-option-subtitle" title="${u(o||"")}">${a(o||"")}</span>
      <span class="member-link-option-confidence" title="${u(String((w=e.confidence)!=null?w:0))}%">${a(String((C=e.confidence)!=null?C:0))}%</span>
    </button>
  `}function Mc(){const e=(k==null?void 0:k.mode)||"",t=Sc(),r=e==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
          <section class="member-link-dialog-section member-link-current-section">
            ${Rc()}
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
              value="${u(Rt)}"
            />
            ${$c()}
          </section>
        </div>

      </div>
    </div>
  `}async function ji(e,t){if(!(d!=null&&d.connected)||!E()){h("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:p});return}we=!0,k=e==="discord-to-eso"?{mode:e,discordUserId:t}:{mode:"eso-to-discord",esoAccountName:t},Me=[],Ye=!0,ne="",Rt="",W=-1,l();try{if(!Array.isArray(A)||A.length===0){const i=await L("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(A=Array.isArray(i.links)?i.links:[])}const n=await L("guildsync:request-member-link-options",e==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:t}:{mode:"eso-to-discord",accountName:t},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load link suggestions.");Me=Array.isArray(n.options)?n.options:[]}catch(r){ne=S(r)}finally{Ye=!1,l()}}function Qe(){document.removeEventListener("keydown",Wr),we=!1,k=null,Me=[],Ye=!1,ne="",Rt="",W=-1,l()}function zi(){return[...document.querySelectorAll(".member-link-option-row")].filter(e=>e.offsetParent!==null&&!e.disabled)}function Pn(e){const t=zi();if(t.forEach(n=>n.classList.remove("member-link-option-row-active")),t.length===0){W=-1;return}W=Math.max(0,Math.min(e,t.length-1));const r=t[W];r.classList.add("member-link-option-row-active"),r.scrollIntoView({block:"nearest"})}function Ki(){const e=Y(Rt),t=[...document.querySelectorAll(".member-link-option-row")];let r=0;t.forEach(i=>{const s=Y(i.dataset.memberLinkOptionSearch||i.textContent||""),o=!e||s.includes(e);i.hidden=!o,i.classList.remove("member-link-option-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinkSuggestionSearchEmpty");n&&(n.hidden=r!==0),W=-1}function Nc(e){Rt=e.target.value||"",Ki()}function Tc(e){if(e.key==="Enter"){e.preventDefault();return}if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;e.preventDefault();const t=zi();if(t.length===0)return;if(e.key==="ArrowDown"){const n=W<0?0:W+1;Pn(n>=t.length?t.length-1:n);return}const r=W<0?t.length-1:W-1;Pn(r<0?0:r)}function Wr(e){!we||e.key==="Escape"&&(e.preventDefault(),Qe())}async function Cc(e){if(!(!k||!e))try{const t=k.mode==="discord-to-eso"?{esoAccountName:e,discordUserId:k.discordUserId}:{esoAccountName:k.esoAccountName,discordUserId:e},r=await L("guildsync:manual-link-member",t,3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to link members.");A=Array.isArray(r.links)?r.links:A,h("member-link-saved",r.message||"Member link saved.",{ttlMs:p}),Qe()}catch(t){ne=S(t),l()}}async function Bc(e,t=""){await Gi(e,t),Qe()}async function xc(){if(!!k){Ye=!0,ne="",l();try{const e=k.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:k.discordUserId}:{mode:"eso-to-discord",accountName:k.esoAccountName},t=await L("guildsync:request-member-link-options",e,3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load link suggestions.");Me=Array.isArray(t.options)?t.options:[]}catch(e){ne=S(e)}finally{Ye=!1,l()}}}async function Oc(e="",t=""){const r=cn().find(i=>qe(i.eso_account_name)===qe(e)&&String(i.discord_user_id||"").trim()===String(t||"").trim());if(!(!r||!await wi({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await L("guildsync:manual-unlink-member",{esoAccountName:r.eso_account_name,discordUserId:r.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");A=Array.isArray(i.links)?i.links:A,h("member-link-unlinked",i.message||"Member link removed.",{ttlMs:p}),await xc()}catch(i){ne=S(i),l()}}function Yi(){var r;if(!we)return;document.removeEventListener("keydown",Wr),document.addEventListener("keydown",Wr),(r=document.querySelector("#closeMemberLinkDialogButton"))==null||r.addEventListener("click",Qe);const e=document.querySelector("#memberLinkSuggestionSearchInput");e&&(e.addEventListener("input",Nc),e.addEventListener("keydown",Tc),Ki()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(n=>{n.addEventListener("click",()=>Oc(n.dataset.unlinkEsoAccount||"",n.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(n=>{n.addEventListener("click",()=>Cc(n.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(n=>{n.addEventListener("click",()=>Bc(n.dataset.acceptDialogMemberCandidate||"",n.dataset.acceptDialogDiscordUserId||""))});const t=document.querySelector(".member-link-dialog-overlay");t&&t.addEventListener("click",n=>{n.target===t&&Qe()})}function Ji(){var t,r,n;if(!et)return;(t=document.querySelector("#closeAssociateTicketReportButton"))==null||t.addEventListener("click",Pr),(r=document.querySelector("#rerunAssociateTicketReportButton"))==null||r.addEventListener("click",()=>ts()),(n=document.querySelector("#copyAssociateTicketReportGridButton"))==null||n.addEventListener("click",()=>Ua());const e=document.querySelector(".report-results-overlay");e&&e.addEventListener("click",i=>{i.target===e&&Pr()})}function Qi(){var t,r,n;if(!rt)return;(t=document.querySelector("#closeDiscordRankAuditReportButton"))==null||t.addEventListener("click",Gr),(r=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||r.addEventListener("click",()=>es()),(n=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||n.addEventListener("click",()=>ja());const e=document.querySelector(".report-results-overlay");e&&e.addEventListener("click",i=>{i.target===e&&Gr()})}function Xi(){var n,i,s;if(!nt)return;(n=document.querySelector("#closeDiscordLastSeenReportButton"))==null||n.addEventListener("click",Ur),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>Zi()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>rc()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(o=>{o.addEventListener("click",()=>Ja(o.dataset.discordLastSeenSort||""))});const e=document.querySelector("#discordLastSeenReportSearchInput");e&&e.addEventListener("input",qc);const t=document.querySelector("#discordLastSeenLinkStatusFilter");t&&t.addEventListener("change",Ic),dn();const r=document.querySelector(".discord-last-seen-report-overlay");r&&r.addEventListener("click",o=>{o.target===r&&Ur()})}function qc(e){it=e.target.value||"",dn()}function Ic(e){de=e.target.value||"",dn()}function dn(){const e=Y(it),t=String(de||"").trim().toLowerCase(),r=[...document.querySelectorAll("[data-discord-last-seen-row]")];let n=0;r.forEach(s=>{const o=Y(s.dataset.discordLastSeenSearch||s.textContent||""),c=String(s.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),v=(!e||o.includes(e))&&(!t||c===t);s.hidden=!v,v&&(n+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=n!==0)}async function Zi(){if(!(d!=null&&d.connected)||!E()){De="You must be logged in and connected to run this report.",l();return}ce=!0,De="",l();try{const e=await L("guildsync:request-discord-member-dataJSON",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load Discord roster data.");B=yn(e.members),en=[...B]}catch(e){De=S(e)}finally{ce=!1,l(),N("discordLastSeenReportSearchInput")}}async function es(){if(!(d!=null&&d.connected)||!E()){$e="You must be logged in and connected to run this report.",l();return}ae=!0,$e="",l();try{const e=await L("guildsync:request-discord-rank-audit-report",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to run report.");vt=Array.isArray(e.rows)?e.rows:[]}catch(e){$e=S(e)}finally{ae=!1,l()}}async function ts(){if(!(d!=null&&d.connected)||!E()){Re="You must be logged in and connected to run this report.",l();return}oe=!0,Re="",l();try{const e=await L("guildsync:request-associate-ticket-report",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to run report.");tt=Array.isArray(e.rows)?e.rows:[]}catch(e){Re=S(e)}finally{oe=!1,l()}}function jr(){const e=String(ot||"").trim().toLowerCase();return e?H.filter(t=>String(t.account_name||"").trim()).filter(t=>String(t.account_name||"").toLowerCase().includes(e)).slice().sort((t,r)=>{const n=String(t.account_name||"").toLowerCase(),i=String(r.account_name||"").toLowerCase(),s=n.startsWith(e)?0:1,o=i.startsWith(e)?0:1;return s!==o?s-o:n.localeCompare(i)}).slice(0,20):[]}function Gn(e){const t=String(e||"").trim();_.accountName=t,ot=t,Q="",l(),N("manualTicketAccountSearchInput")}function N(e){window.setTimeout(()=>{const t=document.querySelector(`#${e}`);if(!t)return;t.focus();const r=String(t.value||"").length;typeof t.setSelectionRange=="function"&&t.setSelectionRange(r,r)},0)}function Fc(){const e=jr(),t=String(_.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Tickets</h3>
            <p>Add free/manual raffle tickets such as FFTG. These do not count as purchased tickets.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${Q?`<div class="discord-data-error">${a(Q)}</div>`:""}

        <div class="manual-ticket-form">
          <label class="manual-ticket-member-field">
            <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(ot)}" autocomplete="off" />
          </label>

          ${t?`<div class="roster-history-muted">Selected: ${a(t)}</div>`:""}

          <div class="roster-history-match-list manual-ticket-match-list">
            ${e.length===0?'<div class="roster-history-muted">No matching names</div>':e.map((r,n)=>`
                <button class="roster-history-match${n===J||r.account_name===t?" is-selected":""}" type="button" data-manual-ticket-account="${u(r.account_name)}">
                  <span>${a(r.account_name)}</span>
                  <strong>${a(r.rank||"")}</strong>
                  ${n===J?"<small>Enter</small>":""}
                </button>
              `).join("")}
          </div>

          <div class="manual-ticket-entry-row">
            <div class="manual-ticket-type-field" role="group" aria-label="Ticket type">
              <button class="manual-ticket-type-label${_.ticketType!=="monthly"?" is-selected":""}" type="button" data-manual-ticket-type="biweekly" aria-pressed="${_.ticketType!=="monthly"?"true":"false"}">Bi-Weekly</button>
              <button class="manual-ticket-type-switch" type="button" data-manual-ticket-toggle="true" data-selected-type="${_.ticketType==="monthly"?"monthly":"biweekly"}" aria-label="Toggle ticket type. Current selection is ${_.ticketType==="monthly"?"50/50":"Bi-Weekly"}">
                <span class="manual-ticket-type-track" aria-hidden="true"></span>
                <span class="manual-ticket-type-thumb" aria-hidden="true"></span>
              </button>
              <button class="manual-ticket-type-label${_.ticketType==="monthly"?" is-selected":""}" type="button" data-manual-ticket-type="monthly" aria-pressed="${_.ticketType==="monthly"?"true":"false"}">50/50</button>
            </div>
            <label class="manual-ticket-note-field">
              <textarea id="manualTicketNoteInput" class="discord-search-input manual-ticket-note-input" rows="4" placeholder="Enter a reason such as FFTG">${a(_.note)}</textarea>
            </label>
            <div class="manual-ticket-side-fields">
              <label class="manual-ticket-gold-field">
                <input id="manualTicketGoldInput" class="discord-search-input manual-ticket-gold-input" type="number" min="0" step="1" inputmode="numeric" placeholder="Gold Value" value="${u(_.goldValue)}" />
                <span class="manual-ticket-gold-coin" aria-hidden="true"></span>
              </label>
              <label class="manual-ticket-count-field">
                <div class="manual-ticket-number-wrap">
                  <input id="manualTicketCountInput" class="discord-search-input manual-ticket-count-input" type="number" min="1" step="1" inputmode="numeric" placeholder="# Tickets" value="${u(_.tickets)}" />
                  <div class="manual-ticket-number-buttons" aria-hidden="true">
                    <button id="manualTicketCountUpButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2303</button>
                    <button id="manualTicketCountDownButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2304</button>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div class="manual-ticket-actions">
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${Yt?"disabled":""}>${Yt?"Saving...":"Add Manual Tickets"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function rs(){var s,o,c,f,b,v;if(!re)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{re=!1,l()});const e=document.querySelector("#manualTicketAccountSearchInput");e&&(e.addEventListener("input",m=>{ot=m.target.value||"",_.accountName="",J=jr().length>0?0:-1,l(),N("manualTicketAccountSearchInput")}),e.addEventListener("keydown",m=>{const w=jr();if(m.key==="ArrowDown"||m.key==="ArrowUp"){if(w.length===0)return;m.preventDefault();const at=m.key==="ArrowDown"?1:-1;J=((J<0?0:J)+at+w.length)%w.length,l(),N("manualTicketAccountSearchInput");return}if(m.key!=="Enter")return;m.preventDefault();const C=w[J>=0?J:0];C!=null&&C.account_name&&Gn(C.account_name)})),document.querySelectorAll("[data-manual-ticket-account]").forEach(m=>{m.addEventListener("click",()=>{Gn(m.dataset.manualTicketAccount||"")})}),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",m=>{_.note=m.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(m=>{m.addEventListener("click",()=>{const w=String(m.dataset.manualTicketType||"").trim().toLowerCase();_.ticketType=w==="monthly"?"monthly":"biweekly",l()})}),(c=document.querySelector("[data-manual-ticket-toggle]"))==null||c.addEventListener("click",()=>{_.ticketType=_.ticketType==="monthly"?"biweekly":"monthly",l()});const t=document.querySelector("#manualTicketGoldInput");t==null||t.addEventListener("input",m=>{const w=String(m.target.value||"").replace(/\D/g,"");m.target.value!==w&&(m.target.value=w),_.goldValue=w});const r=document.querySelector("#manualTicketCountInput");r==null||r.addEventListener("input",m=>{const w=String(m.target.value||"").replace(/\D/g,"");m.target.value!==w&&(m.target.value=w),_.tickets=w});const n=m=>{const w=Number(_.tickets)||0,C=Math.max(1,w+m);_.tickets=String(C),r&&(r.value=_.tickets,r.focus())};(f=document.querySelector("#manualTicketCountUpButton"))==null||f.addEventListener("click",()=>n(1)),(b=document.querySelector("#manualTicketCountDownButton"))==null||b.addEventListener("click",()=>n(-1)),(v=document.querySelector("#saveManualBiweeklyTicketButton"))==null||v.addEventListener("click",()=>Pc());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",m=>{m.target===i&&(re=!1,l())})}async function Pc(){const e=String(_.accountName||"").trim(),t=String(_.note||"").trim(),r=String(_.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",n=Number(String(_.goldValue||"").trim()||0),i=Number(_.tickets);if(!e){Q="Choose a guild member.",l();return}if(!Number.isFinite(n)||n<0){Q="Gold value must be zero or greater.",l();return}if(!Number.isFinite(i)||i<=0){Q="Enter the number of tickets to add.",l();return}Yt=!0,Q="",l();try{const s=await L("guildsync:add-manual-biweekly-ticket-entry",{account_name:e,note:t,ticket_type:r,gold_value:Math.floor(n),tickets:Math.floor(i)},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to add manual ticket entry.");re=!1,_={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},ot="",J=-1,await fr({silent:!0}),h("manual-ticket-added",s.message||"Manual ticket entry added.",{ttlMs:p})}catch(s){Q=S(s)}finally{Yt=!1,l()}}function ns(){const e=document.querySelector("#refreshRosterDataButton");e&&e.addEventListener("click",()=>Mt());const t=document.querySelector("#openRosterHistoryButton");t&&t.addEventListener("click",()=>{je=!0,ee="",l()});const r=document.querySelector("#rosterMemberSearch");r&&(r.addEventListener("input",o=>{Kt=o.target.value||"",xr=o.target.selectionStart,Or=o.target.selectionEnd,D=-1,l({restoreRosterSearchFocus:!0})}),r.addEventListener("keydown",Gc)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{La(o.dataset.rosterSortColumn||"account_name")})});const n=document.querySelector("#rosterRankFilter");n&&n.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(Ee.add(c),D=-1,l())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRosterRankFilter||"";Ee.delete(c),D=-1,l()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(Ge.add(c),D=-1,l())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRosterLinkStatusFilter||"";Ge.delete(c),D=-1,l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>ji(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{Kt="",Ee.clear(),Ge.clear(),X="",T="",D=-1,l()}),Uc()}function Gc(e){if(e.key!=="ArrowDown"&&e.key!=="ArrowUp"&&e.key!=="Enter")return;if(e.key==="Enter"){e.preventDefault();return}const t=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(t.length===0){D=-1;return}e.preventDefault(),e.key==="ArrowDown"?D=D<0?0:Math.min(D+1,t.length-1):e.key==="ArrowUp"&&(D=D<0?t.length-1:Math.max(D-1,0)),t.forEach((n,i)=>{n.classList.toggle("roster-search-active-row",i===D)});const r=t[D];r&&typeof r.scrollIntoView=="function"&&r.scrollIntoView({block:"nearest",inline:"nearest"})}function Uc(){const e=document.querySelector("#closeRosterHistoryButton");e&&e.addEventListener("click",()=>{je=!1,l()});const t=document.querySelector("#rosterHistorySearchInput");t&&(t.addEventListener("input",r=>{if(kt=r.target.value||"",U=-1,!kt.trim()){clearTimeout(Ar),ee="",q=[],ve="",he=[],pe=!1,l(),N("rosterHistorySearchInput");return}clearTimeout(Ar),Ar=setTimeout(()=>{jc({auto:!0,keepFocus:!0})},250)}),t.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(q.length===0)return;r.preventDefault();const i=r.key==="ArrowDown"?1:-1;U=((U<0?0:U)+i+q.length)%q.length,l(),N("rosterHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=q[U>=0?U:0];n!=null&&n.account_name&&Vn(n.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(r=>{r.addEventListener("click",()=>{Vn(r.dataset.rosterHistoryAccount||"")})})}function is(){const e=document.querySelector("#closeDiscordHistoryButton");e&&e.addEventListener("click",()=>{ze=!1,l()});const t=document.querySelector("#discordHistorySearchInput");t&&(t.addEventListener("input",r=>{se=r.target.value||"",V=-1,_e+=1;const n=_e;if(clearTimeout(Nn),!se.trim()){te="",I=[],Ke="",Be="",me=[],ge=!1,l(),N("discordHistorySearchInput");return}Nn=setTimeout(()=>{Vc({auto:!0,keepFocus:!0,generation:n})},ra)}),t.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(I.length===0)return;r.preventDefault();const i=r.key==="ArrowDown"?1:-1;V=((V<0?0:V)+i+I.length)%I.length,l(),N("discordHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=I[V>=0?V:0];n!=null&&n.discord_id&&Un(n.discord_id,Fr(n))})),document.querySelectorAll("[data-discord-history-id]").forEach(r=>{r.addEventListener("click",()=>{Un(r.dataset.discordHistoryId||"",r.dataset.discordHistoryName||"")})})}async function Vc(e={}){const t=Number.isInteger(e.generation)?e.generation:++_e,r=se.trim();if(t===_e){if(!r){te="",I=[],V=-1,Ke="",Be="",me=[],ge=!1,l(),e.keepFocus&&N("discordHistorySearchInput");return}ge=!0,te="",I=[],V=-1,Ke="",Be="",me=[],l(),e.keepFocus&&N("discordHistorySearchInput");try{const n=await L("guildsync:request-discord-member-history",{query:r},3e4);if(t!==_e||r!==se.trim())return;if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search Discord member history.");I=Hc(n.matches),V=I.length>0?0:-1}catch(n){if(t!==_e||r!==se.trim())return;te=S(n)}finally{if(t!==_e||r!==se.trim())return;ge=!1,l(),e.keepFocus&&N("discordHistorySearchInput")}}}async function Un(e,t="",r={}){const n=String(e||"").trim();if(!!n){Ke=n,Be=String(t||n).trim(),se=Be,me=[],ge=!0,te="",l();try{const i=await L("guildsync:request-discord-member-history-events",{discord_id:n},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");me=Wc(i.events)}catch(i){te=S(i)}finally{ge=!1,r.keepLoading||l()}}}function Hc(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>({discord_id:String(t.discord_id||t.discordID||"").trim(),username:String(t.username||"").trim(),global_name:String(t.global_name||t.globalName||"").trim(),server_nickname:String(t.server_nickname||t.serverNickname||"").trim(),event_count:Number(t.event_count||t.eventCount||0)})).filter(t=>t.discord_id):[]}function Wc(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>{var r,n,i,s,o,c,f,b,v;return{event_type:String(t.event_type||t.eventType||"").trim(),field_name:String(t.field_name||t.fieldName||"").trim(),old_value:String((n=(r=t.old_value)!=null?r:t.oldValue)!=null?n:"").trim(),new_value:String((s=(i=t.new_value)!=null?i:t.newValue)!=null?s:"").trim(),event_timestamp:(f=(c=(o=t.event_timestamp)!=null?o:t.eventTimestamp)!=null?c:t.timestamp)!=null?f:"",event_datetime:(v=(b=t.event_datetime)!=null?b:t.eventDatetime)!=null?v:"",source:String(t.source||"").trim()}}):[]}async function jc(e={}){const t=kt.trim();if(!t){ee="",q=[],U=-1,ve="",he=[],pe=!1,l(),e.keepFocus&&N("rosterHistorySearchInput");return}pe=!0,ee="",q=[],U=-1,ve="",he=[],l(),e.keepFocus&&N("rosterHistorySearchInput");try{const r=await L("guildsync:request-roster-rank-history",{query:t},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search roster rank history.");q=zc(r.matches),U=q.length>0?0:-1}catch(r){ee=S(r)}finally{pe=!1,l(),e.keepFocus&&N("rosterHistorySearchInput")}}async function Vn(e,t={}){const r=String(e||"").trim();if(!!r){ve=r,kt=r,he=[],pe=!0,ee="",l();try{const n=await L("guildsync:request-roster-stream-history",{account_name:r},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster stream history.");he=Kc(n.events)}catch(n){ee=S(n)}finally{pe=!1,t.keepLoading||l()}}}function zc(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>({account_name:String(t.account_name||t.accountName||"").trim(),rank:String(t.rank||t.rankName||"").trim()})):[]}function Kc(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>{var r,n;return{event_type:String(t.event_type||t.eventType||"").trim(),rank:String(t.rank||t.rankName||"").trim(),timestamp:(n=(r=t.timestamp)!=null?r:t.timestampS)!=null?n:"",officer:String(t.officer||"").trim()}}):[]}function ss(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>{var r;return{account_name:String(t.account_name||t.accountName||"").trim(),rank:String(t.rank||t.rankName||"").trim(),joined:(r=t.joined)!=null?r:""}}).sort((t,r)=>t.account_name.localeCompare(r.account_name)):[]}function Yc(e){if(!e)return"Never";const t=new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleString()}function cr(e){const t=Number(e);return t?new Date(t*1e3).toLocaleDateString():""}function ln(e){const t=Number(e);return t?new Date(t*1e3).toLocaleString():""}async function Jc(e={}){H=ss(e.members),zt=e.last_refresh||new Date().toISOString(),R==="eso-members"&&l(),h("roster-data-updated",`Roster data updated. Loaded ${H.length} member record${H.length===1?"":"s"}.`,{ttlMs:p})}async function Mt(e={}){if(!!(d!=null&&d.connected)){ke=!0,l();try{const t=await L("guildsync:request-roster-data",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to retrieve roster data.");H=ss(t.members),zt=t.last_refresh||zt,e.silent||h("roster-data-loaded",`Loaded ${H.length} roster member${H.length===1?"":"s"}.`,{ttlMs:p})}catch(t){h("roster-data-error",S(t),{ttlMs:p})}finally{ke=!1,l()}}}async function Qc(e={}){var t;if(!!E()){if(!(d!=null&&d.connected)){h("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}ke=!0,l();try{const r=await qo(e);if(!(r!=null&&r.ok)){h("roster-data-pending",(r==null?void 0:r.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:p});return}const n={local_upload_id:os(),authenticated_username:Se(),authenticated_discord_user_id:((t=g==null?void 0:g.user)==null?void 0:t.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||e.fileName||"",file_path:r.filePath||e.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await cs(n)}catch(i){throw Xc(n),i}await Mt({silent:!0})}catch(r){h("roster-data-error",S(r),{ttlMs:p})}finally{ke=!1,l()}}}function os(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function un(){try{const e=window.localStorage.getItem(fi),t=e?JSON.parse(e):[];return Array.isArray(t)?t.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function as(e){window.localStorage.setItem(fi,JSON.stringify(Array.isArray(e)?e:[]))}function Xc(e){const t=String((e==null?void 0:e.local_upload_id)||os()),r=un().filter(n=>(n==null?void 0:n.local_upload_id)!==t);r.push({...e,local_upload_id:t,pending_saved_at:new Date().toISOString()}),as(r),h("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Zc(e){const t=un().filter(r=>(r==null?void 0:r.local_upload_id)!==e);as(t)}async function ed(){if(wr||!(d!=null&&d.connected)||!E())return;const e=un();if(e.length!==0){wr=!0;try{for(const t of e){if(!(d!=null&&d.connected)||!E())return;await cs(t),Zc(t.local_upload_id)}}catch(t){h("roster-data-pending-error",`Pending roster upload retry failed: ${S(t)}`,{ttlMs:p})}finally{wr=!1}}}async function cs(e){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const t=await L("guildsync:sending-roster-data",e,3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const r=await Po(e.file_path||"",e.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return h("roster-data-sent",t.message||"Roster data sent to GuildSync backend.",{ttlMs:p}),t}async function td(e={}){var t,r;if(!!E()){if(!(d!=null&&d.connected)){h("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}try{const n=await xo(e);if(!(n!=null&&n.ok)){h("applications-data-info",(n==null?void 0:n.message)||"No application records were found to process.",{ttlMs:p});return}if((Array.isArray((t=n==null?void 0:n.data)==null?void 0:t.records)?n.data.records:[]).length===0){h("applications-data-info",`No application records were found in ${n.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:p});return}const s={local_upload_id:ds(),authenticated_username:Se(),authenticated_discord_user_id:((r=g==null?void 0:g.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||e.fileName||"",file_path:n.filePath||e.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await us(s)}catch(o){throw rd(s),o}}catch(n){h("applications-data-error",S(n),{ttlMs:p})}}}function ds(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function fn(){try{const e=window.localStorage.getItem(hi),t=e?JSON.parse(e):[];return Array.isArray(t)?t.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function ls(e){window.localStorage.setItem(hi,JSON.stringify(Array.isArray(e)?e:[]))}function rd(e){const t=String((e==null?void 0:e.local_upload_id)||ds()),r=fn().filter(n=>(n==null?void 0:n.local_upload_id)!==t);r.push({...e,local_upload_id:t,pending_saved_at:new Date().toISOString()}),ls(r),h("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function nd(e){const t=fn().filter(r=>(r==null?void 0:r.local_upload_id)!==e);ls(t)}async function id(){if(_r||!(d!=null&&d.connected)||!E())return;const e=fn();if(e.length!==0){_r=!0;try{for(const t of e){if(!(d!=null&&d.connected)||!E())return;await us(t),nd(t.local_upload_id)}}catch(t){h("applications-data-pending-error",`Pending application upload retry failed: ${S(t)}`,{ttlMs:p})}finally{_r=!1}}}async function us(e){var i;if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const t=Array.isArray((i=e==null?void 0:e.data)==null?void 0:i.records)?e.data.records:[];if(t.length===0)return h("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:p}),{ok:!0,sent_count:0,skipped_empty:!0};let r=0;for(const s of t){const o=await L("guildsync:eso-guild-application-message",{...e,record:s,recordKey:(s==null?void 0:s.recordKey)||"",message:sd(s)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Backend rejected the application data payload. Application data was not cleared.");r+=1}const n=await Io(e.file_path||"",e.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return h("applications-data-sent",`Sent ${r} application record${r===1?"":"s"} to GuildSync backend.`,{ttlMs:p}),{ok:!0,sent_count:r}}function sd(e={}){const t=Number(e.capturedAt||Math.floor(Date.now()/1e3)),r=String(e.officerAccount||"Unknown officer").trim()||"Unknown officer",n=String(e.action||"processed").trim()||"processed",i=String(e.applicantAccount||e.recordKey||"Unknown applicant").trim()||"Unknown applicant",s=String(e.applicationText||"_No application text captured._"),o=Object.entries(e).filter(([c])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(c)).map(([c,f])=>`**${c}:** ${od(f)}`);return[`\u{1F4DD} <t:${t}:F>`,`**${r}** ${n} an application from **${i}**.`,"","**Application text:**","```",s.slice(0,1500),"```",o.length>0?"":null,o.length>0?"**Full captured record fields:**":null,...o].filter(c=>c!==null).join(`
`)}function od(e){if(e==null)return"";if(typeof e=="object")try{return`\`${JSON.stringify(e).slice(0,900)}\``}catch{return String(e)}return String(e).slice(0,900)}async function ad(e={}){await td(e)}function cd(){const e=zr(F),t=gd(e),r=F!=="other";return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <button id="openManualBiweeklyTicketButton" class="bank-export-button" type="button" ${E()?"":'disabled title="Login required to add manual tickets."'}>
            <span aria-hidden="true">\uFF0B</span>
            <span>Add Manual Tickets</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${a(ws(bi))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${xe||!E()?"disabled":""} ${E()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${xe?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${Lr("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${Lr("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${Lr("other","?","Other","All other deposits")}
        </div>

        ${fd(F)}

        <div class="bank-deposit-table-shell">
          <table class="bank-deposit-table${r?"":" bank-deposit-table-no-tickets"}">
            <thead>
              <tr>
                <th>Event ID</th>
                <th>Date / Time (Local)</th>
                <th>Depositor</th>
                <th>Amount Deposited</th>
                ${r?"<th>Tickets Awarded</th>":""}
              </tr>
            </thead>
            <tbody>
              ${e.length>0?e.map(n=>yd(n,r)).join(""):bd(r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${a(ms(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${r?`<div>Total Tickets Awarded: <strong>${a(ur(t.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${Ne?dd(zr($t)):""}
    </div>
  `}function dd(e){return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${a(He($t))} Deposits</h3>
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
              ${e.length>0?e.map(t=>ld(t)).join(""):ud()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${a(hs(e))}</textarea>
      </div>
    </div>
  `}function ld(e){return`
    <tr>
      <td>${a(e.displayName||"")}</td>
      <td>${a(String(Number(e.amount)||0))}</td>
      <td>${a(String(Number(e.ticketAmount)||0))}</td>
      <td>${a(e.note||"")}</td>
    </tr>
  `}function ud(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${a(He($t))}.</td>
    </tr>
  `}function fd(e){if(e==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const t=ps(e),r=hn(e),n=r<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${u(He(e))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${a(He(e))} Raffle Period ${r===0?"(Current)":`(${Math.abs(r)} period${Math.abs(r)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${a(Ut(t.salesStart))} through ${a(Ut(t.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${a(Ut(t.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${n?"":"disabled"} aria-label="Next ${u(He(e))} raffle period">\u203A</button>
    </div>
  `}function Lr(e,t,r,n){const i=F===e;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${u(e)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${a(t)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${a(r)}</span>
        <span class="bank-section-subtitle">${a(n)}</span>
      </span>
    </button>
  `}function fs(){if(R!=="more")return;document.querySelectorAll("[data-bank-section]").forEach(s=>{s.addEventListener("click",()=>{F=s.dataset.bankSection||"biweekly",l()})}),document.querySelectorAll("[data-bank-export-section]").forEach(s=>{s.addEventListener("click",()=>{$t=(s.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",Ne=!0,l()})}),document.querySelectorAll("[data-bank-period-move]").forEach(s=>{s.addEventListener("click",()=>{md(s.dataset.bankPeriodMove||""),l()})});const e=document.querySelector("#closeBankingExportGridButton");e&&e.addEventListener("click",()=>{Ne=!1,l()});const t=document.querySelector("#copyBankingExportGridButton");t&&t.addEventListener("click",()=>hd());const r=document.querySelector(".bank-export-overlay");r&&r.addEventListener("click",s=>{s.target===r&&(Ne=!1,l())});const n=document.querySelector("#openManualBiweeklyTicketButton");n&&n.addEventListener("click",async()=>{if(!E()){h("manual-ticket-login-required","Login required to add manual tickets.",{ttlMs:p});return}re=!0,Q="",ot=_.accountName||"",H.length===0&&(d==null?void 0:d.connected)&&E()&&await Mt({silent:!0}),l()});const i=document.querySelector("#refreshBankingDataButton");i&&i.addEventListener("click",()=>{if(!E()){h("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:p});return}ys({key:"banking"})})}function hs(e){const t=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const r of e)t.push([r.displayName||"",String(Number(r.amount)||0),String(Number(r.ticketAmount)||0),r.note||""]);return t.map(r=>r.map(dr).join("	")).join(`
`)}function dr(e){return String(e!=null?e:"").replace(/[\t\r\n]+/g," ").trim()}async function lr(e){var i;const t=String(e!=null?e:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(t),!0}catch{}const r=document.createElement("textarea");r.value=t,r.setAttribute("readonly","readonly"),r.style.position="fixed",r.style.left="0",r.style.top="0",r.style.width="1px",r.style.height="1px",r.style.opacity="0",r.style.pointerEvents="none",r.style.zIndex="-1",document.body.appendChild(r),r.focus(),r.select(),r.setSelectionRange(0,r.value.length);let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r)}return n}async function hd(){const e=zr($t),t=hs(e);if(await lr(t)){h("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#bankingExportTsv");n&&(n.focus(),n.select()),h("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:p})}function zr(e){return z.filter(t=>t.type===e).filter(t=>pd(e,t)).sort((t,r)=>(Number(r.time)||0)-(Number(t.time)||0))}function pd(e,t){if(e==="other")return!0;const r=Number(t==null?void 0:t.time)||0;if(r<=0)return!1;const n=ps(e);return r>=n.salesStart&&r<=n.salesEnd}function hn(e){return Number(qr[e])||0}function md(e){if(F!=="biweekly"&&F!=="monthly")return;const t=hn(F);if(e==="previous"){qr[F]=t-1;return}e==="next"&&t<0&&(qr[F]=t+1)}function ps(e){const t=Math.floor(Date.now()/1e3),r=e==="monthly",n=r?oa:sa;let i=r?ia:na;for(;i-n>t;)i-=n;for(;i<t;)i+=n;return i+=hn(e)*n,{salesStart:i-n+1,salesEnd:i,raffleTime:i+aa}}function gd(e){return e.reduce((t,r)=>(t.amount+=Number(r.amount)||0,t.tickets+=Number(r.ticketAmount)||0,t),{amount:0,tickets:0})}function yd(e,t=!0){return`
    <tr>
      <td>${a(e.note||e.eventId||"")}</td>
      <td>${a(Ut(e.time))}</td>
      <td>${a(e.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${a(ms(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${t?`<td><strong class="bank-ticket-amount">${a(ur(e.ticketAmount))}</strong></td>`:""}
    </tr>
  `}function bd(e=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${e?"5":"4"}">No ${a(He(F))} deposits found for this ${F==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function He(e){return e==="biweekly"?"Bi-Weekly":e==="monthly"?"50/50":"Other"}function Ut(e){const t=Number(e);return!Number.isFinite(t)||t<=0?"Unknown":new Date(t*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function ms(e){return(Number(e)||0).toLocaleString()}function ur(e){return(Number(e)||0).toLocaleString()}function pn(e){return Array.isArray(e)?e.map(t=>{var n,i,s,o,c,f,b,v,m,w,C,at;const r=String((t==null?void 0:t.type)||"other").trim().toLowerCase();return{type:r==="monthly"||r==="biweekly"||r==="other"?r:"other",eventId:String((i=(n=t==null?void 0:t.eventId)!=null?n:t==null?void 0:t.event_id)!=null?i:"").trim(),time:Number((o=(s=t==null?void 0:t.time)!=null?s:t==null?void 0:t.timestamp)!=null?o:0)||0,displayName:String((f=(c=t==null?void 0:t.displayName)!=null?c:t==null?void 0:t.display_name)!=null?f:"").trim(),amount:Number((b=t==null?void 0:t.amount)!=null?b:0)||0,ticketAmount:Number((m=(v=t==null?void 0:t.ticketAmount)!=null?v:t==null?void 0:t.ticket_amount)!=null?m:0)||0,note:String((w=t==null?void 0:t.note)!=null?w:"").trim(),dataSource:String((at=(C=t==null?void 0:t.dataSource)!=null?C:t==null?void 0:t.data_source)!=null?at:"").trim()}}):[]}function kd(e){const t=new Map;for(const r of z)r.eventId&&t.set(r.eventId,r);for(const r of e)!r.eventId||t.set(r.eventId,r);z=Array.from(t.values()).sort((r,n)=>(Number(n.time)||0)-(Number(r.time)||0))}function gs(){bi=new Date().toISOString()}async function vd(e={}){!(e!=null&&e.ok)||(z=pn(e.entries),gs(),R==="more"&&l(),h("banking-data-updated",`Banking data updated. Loaded ${z.length} deposit record${z.length===1?"":"s"}.`,{ttlMs:p}))}async function fr(e={}){const t=Boolean(e.silent);if(!(d!=null&&d.connected)){t||h("banking-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}xe=!0,l();try{const r=await L("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");z=pn(r.entries),gs(),t||h("banking-data",`Loaded ${z.length} banking deposit record${z.length===1?"":"s"}.`,{ttlMs:p})}catch(r){t||h("banking-data-error",S(r),{ttlMs:p})}finally{xe=!1,l()}}async function ys(e={}){var t,r;if(!!E()){if(!(d!=null&&d.connected)){h("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}xe=!0,l();try{const n=await Oo(e);if(!(n!=null&&n.ok)){h("banking-data-pending",(n==null?void 0:n.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:p});return}const i=pn((t=n==null?void 0:n.data)==null?void 0:t.entries);kd(i);const s=new Date().toISOString(),o={local_upload_id:bs(),authenticated_username:Se(),authenticated_discord_user_id:((r=g==null?void 0:g.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||e.fileName||"",file_path:n.filePath||e.filePath||"",collected_at:s,data:n.data||{}};try{await vs(o)}catch(c){throw Sd(o),c}await fr({silent:!0})}catch(n){h("banking-data-error",S(n),{ttlMs:p})}finally{xe=!1,l()}}}function bs(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function mn(){try{const e=window.localStorage.getItem(ui),t=e?JSON.parse(e):[];return Array.isArray(t)?t.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function ks(e){window.localStorage.setItem(ui,JSON.stringify(Array.isArray(e)?e:[]))}function Sd(e){const t=String((e==null?void 0:e.local_upload_id)||bs()),r=mn().filter(n=>(n==null?void 0:n.local_upload_id)!==t);r.push({...e,local_upload_id:t,pending_saved_at:new Date().toISOString()}),ks(r),h("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function wd(e){const t=mn().filter(r=>(r==null?void 0:r.local_upload_id)!==e);ks(t)}async function _d(){if(Sr||!(d!=null&&d.connected)||!E())return;const e=mn();if(e.length!==0){Sr=!0;try{for(const t of e){if(!(d!=null&&d.connected)||!E())return;await vs(t),wd(t.local_upload_id)}}catch(t){h("banking-data-pending-error",`Pending banking upload retry failed: ${S(t)}`,{ttlMs:p})}finally{Sr=!1}}}async function vs(e){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const t=await L("guildsync:sending-banking-data",e,3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const r=await Fo(e.file_path||"",e.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return h("banking-data-sent",t.message||"Banking data sent to GuildSync backend.",{ttlMs:p}),t}function Ss(){if(R!=="discord-members")return;const e=document.querySelector("#refreshDiscordDataButton");e&&e.addEventListener("click",()=>Ad());const t=document.querySelector("#openDiscordHistoryButton");t&&t.addEventListener("click",()=>{ze=!0,te="",l(),N("discordHistorySearchInput")});const r=document.querySelector("#discordMemberSearch");r&&r.addEventListener("input",o=>{jt=o.target.value||"",Cr=o.target.selectionStart,Br=o.target.selectionEnd,l({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Md(o.dataset.discordSortColumn||"username")})});const n=document.querySelector("#discordRoleFilter");n&&n.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(Fe.add(c),l())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRoleFilter||"";Fe.delete(c),l()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(Pe.add(c),l())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeDiscordLinkStatusFilter||"";Pe.delete(c),l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>ji(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{jt="",Fe.clear(),Pe.clear(),l()})}async function Ad(){var e,t;if(!(d!=null&&d.connected)){h("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:p});return}Wt=!0,l(),h("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const r=await L("guildsync:request-discord-data-refresh",{requested_by:((e=g==null?void 0:g.user)==null?void 0:e.display_name)||((t=g==null?void 0:g.user)==null?void 0:t.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to request Discord data refresh.");h("discord-refresh-requested",r.message||"Discord data refresh completed.",{ttlMs:p}),await gn({silent:!0})}catch(r){h("discord-refresh-error",S(r),{ttlMs:p})}finally{Wt=!1,l()}}async function Ld(){if(!(d!=null&&d.connected))return;const e=await L("guildsync:request-discord-data-date",{});e!=null&&e.ok&&(nr=e.value||null)}async function Ed(e={}){if(!!(e!=null&&e.ok)){B=yn(e.members),e.last_refresh&&(nr=e.last_refresh);try{await Ld()}catch{}R==="discord-members"&&l(),h("discord-data-updated",`Discord data updated. Loaded ${B.length} member record${B.length===1?"":"s"}.`,{ttlMs:p})}}async function gn(e={}){const t=Boolean(e.silent);if(!(d!=null&&d.connected)){h("discord-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}yt=!0,l();try{const[r,n]=await Promise.all([L("guildsync:request-discord-data-date",{}),L("guildsync:request-discord-member-dataJSON",{})]);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord refresh date.");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord member data.");nr=r.value||null,B=yn(n.members),t||h("discord-data",`Loaded ${B.length} Discord member record${B.length===1?"":"s"}.`,{ttlMs:p})}catch(r){h("discord-data-error",S(r),{ttlMs:p})}finally{yt=!1,l()}}function L(e,t={},r=3e4){return new Promise((n,i)=>{if(!(d!=null&&d.connected)){i(new Error("GuildSync websocket is not connected."));return}let s=!1;const o=window.setTimeout(()=>{s||(s=!0,i(new Error(`${e} timed out.`)))},r);d.emit(e,t,c=>{s||(s=!0,window.clearTimeout(o),n(c))})})}function yn(e){return Array.isArray(e)?e.map(t=>({discord_id:String((t==null?void 0:t.discord_id)||(t==null?void 0:t.id)||"").trim(),username:String((t==null?void 0:t.username)||"").trim(),global_name:String((t==null?void 0:t.global_name)||"").trim(),server_nickname:String((t==null?void 0:t.server_nickname)||"").trim(),last_seen:String((t==null?void 0:t.last_seen)||(t==null?void 0:t.lastSeen)||"").trim(),last_seen_action:String((t==null?void 0:t.last_seen_action)||(t==null?void 0:t.lastSeenAction)||"").trim(),avatar:String((t==null?void 0:t.avatar)||"").trim(),roles:Array.isArray(t==null?void 0:t.roles)?t.roles.map(Rd).filter(Boolean):[]})).filter(t=>t.discord_id||t.username||t.global_name||t.server_nickname).sort((t,r)=>St(t).localeCompare(St(r),void 0,{sensitivity:"base"})):[]}function Rd(e){var i,s;if(!e||typeof e!="object")return null;const t=String(e.role_id||e.id||"").trim(),r=String(e.role_name||e.name||"Unnamed Role").trim(),n=(s=(i=e.role_color)!=null?i:e.color)!=null?s:null;return{role_id:t,role_name:r||"Unnamed Role",role_color:n}}function $d(){const e=jt.trim().toLowerCase(),t=Array.from(Fe),r=B.filter(n=>{if(e&&![n.username,n.global_name,n.server_nickname,n.discord_id,...n.roles.map(s=>s.role_name)].join(" ").toLowerCase().includes(e))return!1;if(t.length>0){const i=new Set(n.roles.map(s=>s.role_name));if(!t.every(s=>i.has(s)))return!1}return!!Ri(Pe,Da(n))});return Dd(r)}function Dd(e){const t=Le==="desc"?-1:1;return[...e].sort((r,n)=>{const i=Hn(r,bt),s=Hn(n,bt),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*t:St(r).localeCompare(St(n),void 0,{sensitivity:"base",numeric:!0})})}function Hn(e,t){return t==="global_name"?e.global_name||"":t==="server_nickname"?e.server_nickname||"":t==="roles"?(e.roles||[]).map(r=>r.role_name||"").filter(Boolean).sort((r,n)=>r.localeCompare(n,void 0,{sensitivity:"base"})).join(" "):e.username||e.discord_id||""}function Md(e){const r=new Set(["username","global_name","server_nickname","roles"]).has(e)?e:"username";bt===r?Le=Le==="asc"?"desc":"asc":(bt=r,Le="asc"),l()}function xt(e,t){const r=bt===e,n=Le==="asc"?"ascending":"descending",i=r?Le==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${r?n:"none"}">
      <button
        class="discord-sort-header${r?" active":""}"
        type="button"
        data-discord-sort-column="${u(e)}"
        title="Sort ${u(t)} ${r&&Le==="asc"?"descending":"ascending"}"
      >
        <span>${a(t)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function Nd(){const e=document.querySelector("#discordMemberSearch");if(!!e&&(e.focus({preventScroll:!0}),typeof e.setSelectionRange=="function")){const t=Number.isInteger(Cr)?Cr:e.value.length,r=Number.isInteger(Br)?Br:t;e.setSelectionRange(t,r)}}function Td(){const e=document.querySelector("#rosterMemberSearch");if(!!e&&(e.focus({preventScroll:!0}),typeof e.setSelectionRange=="function")){const t=Number.isInteger(xr)?xr:e.value.length,r=Number.isInteger(Or)?Or:t;e.setSelectionRange(t,r)}}function Cd(){const e=new Set;for(const t of B)for(const r of t.roles)r.role_name&&e.add(r.role_name);return Array.from(e).sort((t,r)=>t.localeCompare(r,void 0,{sensitivity:"base"}))}function Bd(e){const t=Id(e),r=St(e),n=e.roles||[];return`
    <tr data-discord-user-id="${u(e.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${t?`<img src="${u(t)}" alt="${u(r)}" />`:`<span>${a(Ns(r))}</span>`}
          </div>
          <span>${a(e.username||e.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${a(e.global_name||"")}</td>
      <td>${a(e.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${n.length>0?n.map(i=>Od(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${Hi({mode:"discord-to-eso",discordUserId:e.discord_id})}</td>
    </tr>
  `}function xd(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${a(yt?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function Od(e){const t=hr(e.role_color),r=vn(t),n=kn(t,r);return`
    <span
      class="discord-role-badge"
      title="${u(e.role_name)}"
      style="${n}"
    >${a(e.role_name)}</span>
  `}function qd(e){const t=bn(e),r=hr(t==null?void 0:t.role_color),n=vn(r),i=kn(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-role-filter="${u(e)}"
      style="${i}"
      title="Remove ${u(e)} filter"
    >
      <span>${a(e)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function bn(e){for(const t of B){const r=t.roles.find(n=>n.role_name===e);if(r)return r}return null}function hr(e){const t=Number(e);return!Number.isFinite(t)||t<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(t))).toString(16).padStart(6,"0")}`}function kn(e,t){return[`--role-fill-top: ${Wn(e,"#ffffff",.16)}`,`--role-fill-bottom: ${Wn(e,"#000000",.1)}`,`--role-fill-glow: ${jn(e,.28)}`,`--role-fill-edge: ${jn(e,.46)}`,`color: ${t}`].join("; ")}function Wn(e,t,r){const n=Ot(e)||Ot("#64748b"),i=Ot(t)||Ot("#ffffff"),s=Math.max(0,Math.min(1,Number(r)||0)),o=Math.round(n.red+(i.red-n.red)*s),c=Math.round(n.green+(i.green-n.green)*s),f=Math.round(n.blue+(i.blue-n.blue)*s);return`#${Er(o)}${Er(c)}${Er(f)}`}function Ot(e){const t=String(e||"").replace("#","");return/^[0-9a-f]{6}$/i.test(t)?{red:parseInt(t.slice(0,2),16),green:parseInt(t.slice(2,4),16),blue:parseInt(t.slice(4,6),16)}:null}function Er(e){return Math.max(0,Math.min(255,e)).toString(16).padStart(2,"0")}function jn(e,t){const r=String(e||"#64748b").replace("#",""),n=/^[0-9a-f]{6}$/i.test(r)?r:"64748b",i=parseInt(n.slice(0,2),16),s=parseInt(n.slice(2,4),16),o=parseInt(n.slice(4,6),16);return`rgba(${i}, ${s}, ${o}, ${t})`}function vn(e){const t=String(e||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(t))return"#E5E7EB";const r=parseInt(t.slice(0,2),16),n=parseInt(t.slice(2,4),16),i=parseInt(t.slice(4,6),16);return(r*299+n*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function Id(e){const t=String((e==null?void 0:e.avatar)||"").trim(),r=String((e==null?void 0:e.discord_id)||"").trim();if(!t)return"";if(t.startsWith("http://")||t.startsWith("https://"))return t;if(!r)return"";const n=t.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(t)}.${n}?size=64`}function St(e){return e.server_nickname||e.global_name||e.username||e.discord_id||"Unknown"}function ws(e){const t=String(e||"").trim();if(!t)return"Not refreshed yet";const r=new Date(t);return Number.isNaN(r.getTime())?t:r.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Vt(){const e=document.querySelector("#discordArea");if(!!e){if(Nt(!1),E()){const t=g.user||{},r=Se(),n=rl(t),i=Ns(r);e.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${n?`<img src="${u(n)}" alt="${u(r)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${a(i)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const s=document.querySelector("#discordAvatarButton");s.addEventListener("contextmenu",o=>{o.preventDefault(),zn()}),s.addEventListener("click",()=>{zn()});return}e.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",Vd)}}function zn(){if(At){Nt();return}Ud()}function Fd(e=fe){const t=Array.isArray(e==null?void 0:e.files)?e.files:[],r=String((e==null?void 0:e.directory)||"").trim(),n=Boolean(e==null?void 0:e.watching);return t.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${t.map(i=>{const s=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),o=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),c=String((i==null?void 0:i.filePath)||(r?`${r}\\${o}`:o)).trim(),f=(i==null?void 0:i.enabled)!==!1,b=n&&f,v=`profileFileWatchToggle-${Gd(s||o)}`;return`
          <label class="profile-filewatch-item ${f?"enabled":"disabled"}" title="${u(c)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${a(o)}</span>
              <span class="profile-filewatch-state">${b?"Watching":f?"On":"Off"}</span>
            </span>
            <input
              id="${u(v)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${u(s)}"
              ${f?"checked":""}
              aria-label="Turn file watch ${f?"off":"on"} for ${u(o)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function Sn(){var n,i,s;const e=document.querySelector("#discordProfileMenu");if(!e)return;const t=Se(),r=((n=g.user)==null?void 0:n.role)||"member";e.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${a(t)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${a(nl(r))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${a(rr)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${fe!=null&&fe.watching?"Active":"Stopped"}</span>
        </div>
        ${Fd()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(i=document.querySelector("#discordLogoutButton"))==null||i.addEventListener("click",Hd),(s=document.querySelector("#associateTicketReportButton"))==null||s.addEventListener("click",()=>{Nt(!1),Di()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",Pd)})}async function _s(){try{fe=await Go(),At&&Sn()}catch(e){h("file-watcher-error",S(e),{ttlMs:p})}}async function Pd(e){var n;const t=e.currentTarget,r=String(((n=t==null?void 0:t.dataset)==null?void 0:n.filewatchKey)||"").trim();if(!!r)try{t.disabled=!0,fe=await jo(r,t.checked),await We({silent:!0}),At&&Sn()}catch(i){h("file-watcher-error",S(i),{ttlMs:p}),await _s()}}function Gd(e){return String(e||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function Ud(){const e=document.querySelector("#discordProfileMenu");!e||(Sn(),e.classList.add("open"),e.setAttribute("aria-hidden","false"),At=!0,_s(),setTimeout(()=>{window.addEventListener("click",As),window.addEventListener("keydown",Ls)},0))}function Nt(e=!0){const t=document.querySelector("#discordProfileMenu");t&&(t.classList.remove("open"),t.setAttribute("aria-hidden","true")),At=!1,e&&(window.removeEventListener("click",As),window.removeEventListener("keydown",Ls))}function As(e){const t=document.querySelector(".discord-profile-wrap");t&&!t.contains(e.target)&&Nt()}function Ls(e){e.key==="Escape"&&Nt()}async function Vd(){try{h("auth","Opening Discord login...",{ttlMs:p});const e=await Ko();e!=null&&e.status_message&&h("auth",e.status_message,{ttlMs:p}),ye()}catch(e){h("auth-error",S(e),{ttlMs:p}),ye()}}async function Hd(){try{g=await Vo(),h("auth",g.status_message||"Logged out.",{ttlMs:p}),ki(),gt(),await We()}catch(e){h("auth-error",S(e),{ttlMs:p}),ye()}}function gt(){const e=g.socket_url||"https://guildsync.perdues.me";Wd(!1);const t={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};g!=null&&g.token&&(t.auth={token:g.token}),d=Pt(e,t),d.on("connect",()=>{ye(),Es(),R==="discord-members"&&gn({silent:!0}),R==="eso-members"&&Mt({silent:!0}),R==="more"&&fr({silent:!0}),_d(),ed(),id(),jd()}),d.on("connect_error",()=>{ye(),Zt()}),d.on("disconnect",()=>{ye(),Zt()}),d.on("guildsync:version-status",r=>{zd(r)}),d.on("guildsync:discord-member-data-updated",r=>{Ed(r)}),d.on("guildsync:banking-data-updated",r=>{vd(r)}),d.on("guildsync:roster-data-updated",r=>{Jc(r)}),d.on("guildsync:member-links-updated",(r={})=>{Array.isArray(r.links)&&(A=r.links,(R==="discord-members"||R==="eso-members"||R==="settings"||we)&&l())}),d.on("guildsync:discord-refresh-status",(r={})=>{const n=String(r.message||"").trim();n&&h("discord-refresh-status",n,{ttlMs:p})})}function Wd(e=!0){Zt(),d&&(d.disconnect(),d=null),e&&ye()}function Es(){!(d!=null&&d.connected)||d.emit("guildsync:client-version",{version:rr,platform:Rs(),client_type:"wails"})}function jd(){Zt(),Gt=window.setInterval(()=>{Es()},Zo)}function Zt(){Gt&&(window.clearInterval(Gt),Gt=null)}function zd(e){if(!(!e||typeof e!="object")){if(e.update_required){const t=e.latest_version||"unknown",r=e.download&&typeof e.download=="object"?e.download:{};ie={updateRequired:!0,latestVersion:t,downloadUrl:String(e.download_url||r.url||"").trim(),fileName:String(e.download_file_name||r.file_name||"").trim(),platformLabel:String(r.label||e.platform||Rs()).trim()},h("version",`GuildSync is out of date. Current version: ${rr}. Latest version: ${t}.`),Kr();return}ie={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},Kr(),wn("version")}}function Rs(){const e=String(navigator.userAgent||"").toLowerCase(),r=`${String(navigator.platform||"").toLowerCase()} ${e}`;return r.includes("mac")?"macos":r.includes("linux")?"linux":"windows"}function Kr(){const e=document.querySelector("#desktopUpdateArea");if(!e)return;if(!ie.updateRequired||!ie.downloadUrl){e.innerHTML="";return}const t=ie.platformLabel||"Desktop",r=ie.latestVersion||"latest",n=ie.fileName||"GuildSync client download";e.innerHTML=`
    <button
      id="desktopUpdateDownloadButton"
      class="desktop-update-download-button"
      type="button"
      title="Download ${u(n)}"
      aria-label="Download GuildSync ${u(r)} for ${u(t)}"
    >
      <span class="desktop-update-download-icon" aria-hidden="true">\u2B07</span>
      <span class="desktop-update-download-copy">
        <span class="desktop-update-download-title">Update Available</span>
        <span class="desktop-update-download-subtitle">${a(t)} \xB7 ${a(r)}</span>
      </span>
    </button>
  `;const i=e.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{Kd()})}function Kd(){const e=String(ie.downloadUrl||"").trim();if(!e){h("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:p});return}Xo(e)}function h(e,t,r={}){const n=String(e||"").trim(),i=String(t||"").trim();if(!(!n||!i)){if(be.set(n,i),Ae.has(n)&&(window.clearTimeout(Ae.get(n)),Ae.delete(n)),r.ttlMs&&Number(r.ttlMs)>0){const s=window.setTimeout(()=>{wn(n)},Number(r.ttlMs));Ae.set(n,s)}Xe()}}function wn(e){const t=String(e||"").trim();if(!!t){if(be.delete(t),Ae.has(t)&&(window.clearTimeout(Ae.get(t)),Ae.delete(t)),M===t){gr(()=>{M="",Xe()});return}Xe()}}function Xe(){const e=pr();if(e.length===0){Te?gr(wt):wt();return}!Te&&!Ce&&mr(e[0])}function pr(){return Array.from(be.keys())}function $s(){const e=pr();if(e.length===0)return"";if(!M)return e[0];const t=e.indexOf(M);return t<0?e[0]:e[(t+1)%e.length]}function mr(e){const t=document.querySelector("#statusMessageTrack");if(!t||!be.has(e)){wt();return}yr();const r=be.get(e);M=e,Te=!0,Ce=!0,t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent=r,t.style.setProperty("--message-fade-duration",`${mi}ms`),requestAnimationFrame(()=>{t.classList.add("fade-in"),t.addEventListener("animationend",()=>{t.classList.remove("fade-in"),t.style.opacity="1",t.style.transform="translateX(0) translateY(-50%)",Ce=!1,Yd()},{once:!0})})}function Yd(){const e=pr();if(!M||!be.has(M)){Xe();return}if(e.length<=1){Kn(!1);return}Kn(!0)}function Kn(e){const t=document.querySelector("#statusMessageViewport"),r=document.querySelector("#statusMessageTrack");if(!t||!r)return;const n=Math.max(0,r.scrollWidth-t.clientWidth);if(n<=0){e&&_t(()=>{gr(()=>{const i=$s();M="",i?mr(i):wt()})},pi);return}_t(()=>{Ds(n,e)},gi)}function Ds(e,t){const r=document.querySelector("#statusMessageTrack");if(!r||!M||!be.has(M))return;const n=Math.max(4,Math.ceil(e/ta));r.style.setProperty("--long-scroll-distance",`${e}px`),r.style.setProperty("--long-scroll-duration",`${n}s`),r.classList.add("long-scroll"),r.addEventListener("animationend",()=>{if(r.classList.remove("long-scroll"),r.style.transform=`translateX(-${e}px) translateY(-50%)`,t){_t(()=>{gr(()=>{const i=$s();M="",i?mr(i):wt()})},pi);return}_t(()=>{Jd()},ea)},{once:!0})}function Jd(){const e=document.querySelector("#statusMessageViewport"),t=document.querySelector("#statusMessageTrack");if(!e||!t||!M||!be.has(M))return;if(pr().length!==1){Xe();return}t.classList.remove("long-scroll"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.transform="translateX(0) translateY(-50%)";const n=Math.max(0,t.scrollWidth-e.clientWidth);n<=0||_t(()=>{Ds(n,!1)},gi)}function gr(e){const t=document.querySelector("#statusMessageTrack");if(yr(),!t||!Te){typeof e=="function"&&e();return}Ce=!0,t.classList.remove("fade-in","long-scroll"),t.style.setProperty("--message-fade-duration",`${mi}ms`),t.classList.add("fade-out"),t.addEventListener("animationend",()=>{t.classList.remove("fade-out"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",Te=!1,Ce=!1,typeof e=="function"&&e()},{once:!0})}function wt(){const e=document.querySelector("#statusMessageTrack");yr(),M="",Te=!1,Ce=!1,e&&(e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent="")}function _t(e,t){const r=window.setTimeout(()=>{pt=pt.filter(n=>n!==r),e()},t);pt.push(r)}function yr(){for(const e of pt)window.clearTimeout(e);pt=[]}function Ms(){if(!Te||Ce||!M)return;const e=M;yr(),mr(e)}function ye(){const e=document.querySelector("#statusDot"),t=document.querySelector("#statusConnectionLabel");if(!!e){if(e.classList.remove("status-red","status-yellow","status-green"),!(d!=null&&d.connected)){e.classList.add("status-red"),e.title="Server Unavailable. Websocket is not connected.",t&&(t.textContent="Server Unavailable",t.title="Server Unavailable");return}if(!E()){e.classList.add("status-yellow"),e.title="Login Required. Websocket is connected but user is not authenticated.",t&&(t.textContent="Login Required",t.title="Login Required");return}e.classList.add("status-green"),e.title=`Server Ready. Authenticated as ${Se()}.`,t&&(t.textContent="Server Ready",t.title=`Server Ready - ${Se()}`)}}async function We(e={}){try{if(E()){const t=await Yo();fe=t,!e.silent&&(t==null?void 0:t.message)&&h(t.watching?"file-watcher":"file-watcher-error",t.message,{ttlMs:p});return}fe=await Jo(),wn("file-watcher")}catch(t){h("file-watcher-error",S(t),{ttlMs:p})}}function ft(e,t=null){const r="[GuildSync File Watcher]";if(t){console.log(`${r} ${e}`,t);return}console.log(`${r} ${e}`)}function Qd(e={}){if(!E()){ft("SavedVariables change ignored because the user is not authenticated.",e);return}const t=String(e.key||e.fileName||"saved-vars-file").trim()||"saved-vars-file",r=t.toLowerCase(),n=String(e.label||"").trim(),i=String(e.fileName||"SavedVariables file").trim()||"SavedVariables file",s=String(e.filePath||"").trim(),o=n?`${n} saved variables (${i})`:i;ft(`SavedVariables change detected: ${i}${s?` (${s})`:""}. Key: ${r}.`,e),h(`saved-vars-file-updated-${t}`,`${o} has been updated.`,{ttlMs:p}),r==="banking"&&(ft(`Processing banking SavedVariables update from ${i}.`),Xd(e)),r==="roster"&&(ft(`Processing roster SavedVariables update from ${i}.`),Zd(e)),r==="applications"&&(ft(`Processing applications SavedVariables update from ${i}.`),ad(e))}async function Xd(e={}){await ys(e)}async function Zd(e={}){await Qc(e)}function el(e){!E()||h("file-watcher-error",S(e),{ttlMs:p})}function tl(){dt("guildsync-savedvars-file-modified",Qd),dt("guildsync-file-watcher-error",el),dt("guildsync-login-complete",async e=>{g=e||{logged_in:!1,allowed:!1},Vt(),gt(),await We(),h("auth",g.status_message||`Logged in and authorized as ${Se()}.`,{ttlMs:p})}),dt("guildsync-login-denied",async e=>{g={logged_in:!1,allowed:!1,status_message:""},Vt(),await We(),h("auth",e||"Access denied.",{ttlMs:p}),gt()}),dt("guildsync-login-failed",async e=>{g={logged_in:!1,allowed:!1,status_message:""},Vt(),await We(),h("auth",e||"Login failed.",{ttlMs:p}),gt()})}function E(){return Boolean((g==null?void 0:g.logged_in)&&(g==null?void 0:g.allowed)&&(g==null?void 0:g.token))}function Se(){var e,t;return((e=g.user)==null?void 0:e.display_name)||((t=g.user)==null?void 0:t.username)||"Discord User"}function rl(e){if(!e)return"";if(e.avatar_url)return e.avatar_url;const t=String(e.avatar||"").trim(),r=String(e.discord_user_id||"").trim();if(!t||!r)return"";if(t.startsWith("http://")||t.startsWith("https://"))return t;const n=t.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(t)}.${n}?size=128`}function Ns(e){const t=String(e||"").trim().split(/\s+/).filter(Boolean);return t.length===0?"GS":t.length===1?t[0].slice(0,2).toUpperCase():`${t[0][0]}${t[t.length-1][0]}`.toUpperCase()}function nl(e){return String(e||"member").replaceAll("_"," ").replace(/\b\w/g,t=>t.toUpperCase())}function il(){lt&&(lt.disconnect(),lt=null);const e=document.querySelector(".main-window")||document.querySelector("#app");if(!e||typeof ResizeObserver>"u")return;let t=Math.round(e.getBoundingClientRect().width),r=Math.round(e.getBoundingClientRect().height);lt=new ResizeObserver(n=>{const i=n[0];if(!i)return;const s=Math.round(i.contentRect.width),o=Math.round(i.contentRect.height);s===t&&o===r||(t=s,r=o,Ts(),Ms())}),lt.observe(e)}function Ts(){clearTimeout($n),$n=setTimeout(async()=>{try{await li()}catch{}},500)}function S(e){return e?typeof e=="string"?e:e.message||String(e):"Unknown error."}function a(e){return String(e!=null?e:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function u(e){return a(e)}tl();ca();
