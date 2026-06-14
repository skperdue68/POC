(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const ai="/assets/splash.ea386b6a.png",ci="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",di="/assets/GuildSync-Graphic.9169020d.png",W=Object.create(null);W.open="0";W.close="1";W.ping="2";W.pong="3";W.message="4";W.upgrade="5";W.noop="6";const vt=Object.create(null);Object.keys(W).forEach(e=>{vt[W[e]]=e});const ur={type:"error",data:"parser error"},Rn=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Dn=typeof ArrayBuffer=="function",$n=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,Mr=({type:e,data:t},r,n)=>Rn&&t instanceof Blob?r?n(t):rn(t,n):Dn&&(t instanceof ArrayBuffer||$n(t))?r?n(t):rn(new Blob([t]),n):n(W[e]+(t||"")),rn=(e,t)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];t("b"+(n||""))},r.readAsDataURL(e)};function nn(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let nr;function li(e,t){if(Rn&&e.data instanceof Blob)return e.data.arrayBuffer().then(nn).then(t);if(Dn&&(e.data instanceof ArrayBuffer||$n(e.data)))return t(nn(e.data));Mr(e,!1,r=>{nr||(nr=new TextEncoder),t(nr.encode(r))})}const sn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Je=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<sn.length;e++)Je[sn.charCodeAt(e)]=e;const ui=e=>{let t=e.length*.75,r=e.length,n,s=0,i,o,d,f;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const m=new ArrayBuffer(t),b=new Uint8Array(m);for(n=0;n<r;n+=4)i=Je[e.charCodeAt(n)],o=Je[e.charCodeAt(n+1)],d=Je[e.charCodeAt(n+2)],f=Je[e.charCodeAt(n+3)],b[s++]=i<<2|o>>4,b[s++]=(o&15)<<4|d>>2,b[s++]=(d&3)<<6|f&63;return m},fi=typeof ArrayBuffer=="function",Nr=(e,t)=>{if(typeof e!="string")return{type:"message",data:Mn(e,t)};const r=e.charAt(0);return r==="b"?{type:"message",data:hi(e.substring(1),t)}:vt[r]?e.length>1?{type:vt[r],data:e.substring(1)}:{type:vt[r]}:ur},hi=(e,t)=>{if(fi){const r=ui(e);return Mn(r,t)}else return{base64:!0,data:e}},Mn=(e,t)=>{switch(t){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},Nn=String.fromCharCode(30),pi=(e,t)=>{const r=e.length,n=new Array(r);let s=0;e.forEach((i,o)=>{Mr(i,!1,d=>{n[o]=d,++s===r&&t(n.join(Nn))})})},mi=(e,t)=>{const r=e.split(Nn),n=[];for(let s=0;s<r.length;s++){const i=Nr(r[s],t);if(n.push(i),i.type==="error")break}return n};function gi(){return new TransformStream({transform(e,t){li(e,r=>{const n=r.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const i=new DataView(s.buffer);i.setUint8(0,126),i.setUint16(1,n)}else{s=new Uint8Array(9);const i=new DataView(s.buffer);i.setUint8(0,127),i.setBigUint64(1,BigInt(n))}e.data&&typeof e.data!="string"&&(s[0]|=128),t.enqueue(s),t.enqueue(r)})}})}let sr;function ht(e){return e.reduce((t,r)=>t+r.length,0)}function pt(e,t){if(e[0].length===t)return e.shift();const r=new Uint8Array(t);let n=0;for(let s=0;s<t;s++)r[s]=e[0][n++],n===e[0].length&&(e.shift(),n=0);return e.length&&n<e[0].length&&(e[0]=e[0].slice(n)),r}function yi(e,t){sr||(sr=new TextDecoder);const r=[];let n=0,s=-1,i=!1;return new TransformStream({transform(o,d){for(r.push(o);;){if(n===0){if(ht(r)<1)break;const f=pt(r,1);i=(f[0]&128)===128,s=f[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(ht(r)<2)break;const f=pt(r,2);s=new DataView(f.buffer,f.byteOffset,f.length).getUint16(0),n=3}else if(n===2){if(ht(r)<8)break;const f=pt(r,8),m=new DataView(f.buffer,f.byteOffset,f.length),b=m.getUint32(0);if(b>Math.pow(2,53-32)-1){d.enqueue(ur);break}s=b*Math.pow(2,32)+m.getUint32(4),n=3}else{if(ht(r)<s)break;const f=pt(r,s);d.enqueue(Nr(i?f:sr.decode(f),t)),n=0}if(s===0||s>e){d.enqueue(ur);break}}}})}const Tn=4;function L(e){if(e)return bi(e)}function bi(e){for(var t in L.prototype)e[t]=L.prototype[t];return e}L.prototype.on=L.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};L.prototype.once=function(e,t){function r(){this.off(e,r),t.apply(this,arguments)}return r.fn=t,this.on(e,r),this};L.prototype.off=L.prototype.removeListener=L.prototype.removeAllListeners=L.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+e];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var n,s=0;s<r.length;s++)if(n=r[s],n===t||n.fn===t){r.splice(s,1);break}return r.length===0&&delete this._callbacks["$"+e],this};L.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),r=this._callbacks["$"+e],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,s=r.length;n<s;++n)r[n].apply(this,t)}return this};L.prototype.emitReserved=L.prototype.emit;L.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};L.prototype.hasListeners=function(e){return!!this.listeners(e).length};const It=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,r)=>r(t,0))(),B=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),vi="arraybuffer";function Cn(e,...t){return t.reduce((r,n)=>(e.hasOwnProperty(n)&&(r[n]=e[n]),r),{})}const ki=B.setTimeout,Si=B.clearTimeout;function qt(e,t){t.useNativeTimers?(e.setTimeoutFn=ki.bind(B),e.clearTimeoutFn=Si.bind(B)):(e.setTimeoutFn=B.setTimeout.bind(B),e.clearTimeoutFn=B.clearTimeout.bind(B))}const wi=1.33;function _i(e){return typeof e=="string"?Ai(e):Math.ceil((e.byteLength||e.size)*wi)}function Ai(e){let t=0,r=0;for(let n=0,s=e.length;n<s;n++)t=e.charCodeAt(n),t<128?r+=1:t<2048?r+=2:t<55296||t>=57344?r+=3:(n++,r+=4);return r}function Bn(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Li(e){let t="";for(let r in e)e.hasOwnProperty(r)&&(t.length&&(t+="&"),t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t}function Ei(e){let t={},r=e.split("&");for(let n=0,s=r.length;n<s;n++){let i=r[n].split("=");t[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return t}class Ri extends Error{constructor(t,r,n){super(t),this.description=r,this.context=n,this.type="TransportError"}}class Tr extends L{constructor(t){super(),this.writable=!1,qt(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,r,n){return super.emitReserved("error",new Ri(t,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const r=Nr(t,this.socket.binaryType);this.onPacket(r)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,r={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const r=Li(t);return r.length?"?"+r:""}}class Di extends Tr{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const r=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};mi(t,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,pi(t,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=Bn()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(t,r)}}let xn=!1;try{xn=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const $i=xn;function Mi(){}class Ni extends Di{constructor(t){if(super(t),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,r){const n=this.request({method:"POST",data:t});n.on("success",r),n.on("error",(s,i)=>{this.onError("xhr post error",s,i)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=t}}class G extends L{constructor(t,r,n){super(),this.createRequest=t,qt(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const r=Cn(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=G.requestsCount++,G.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Mi,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete G.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}G.requestsCount=0;G.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",on);else if(typeof addEventListener=="function"){const e="onpagehide"in B?"pagehide":"unload";addEventListener(e,on,!1)}}function on(){for(let e in G.requests)G.requests.hasOwnProperty(e)&&G.requests[e].abort()}const Ti=function(){const e=On({xdomain:!1});return e&&e.responseType!==null}();class Ci extends Ni{constructor(t){super(t);const r=t&&t.forceBase64;this.supportsBinary=Ti&&!r}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new G(On,this.uri(),t)}}function On(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||$i))return new XMLHttpRequest}catch{}if(!t)try{return new B[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const In=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Bi extends Tr{get name(){return"websocket"}doOpen(){const t=this.uri(),r=this.opts.protocols,n=In?{}:Cn(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,r,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],s=r===t.length-1;Mr(n,this.supportsBinary,i=>{try{this.doWrite(n,i)}catch{}s&&It(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=Bn()),this.supportsBinary||(r.b64=1),this.createUri(t,r)}}const ir=B.WebSocket||B.MozWebSocket;class xi extends Bi{createSocket(t,r,n){return In?new ir(t,r,n):r?new ir(t,r):new ir(t)}doWrite(t,r){this.ws.send(r)}}class Oi extends Tr{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const r=yi(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(r).getReader(),s=gi();s.readable.pipeTo(t.writable),this._writer=s.writable.getWriter();const i=()=>{n.read().then(({done:d,value:f})=>{d||(this.onPacket(f),i())}).catch(d=>{})};i();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],s=r===t.length-1;this._writer.write(n).then(()=>{s&&It(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const Ii={websocket:xi,webtransport:Oi,polling:Ci},qi=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Pi=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function fr(e){if(e.length>8e3)throw"URI too long";const t=e,r=e.indexOf("["),n=e.indexOf("]");r!=-1&&n!=-1&&(e=e.substring(0,r)+e.substring(r,n).replace(/:/g,";")+e.substring(n,e.length));let s=qi.exec(e||""),i={},o=14;for(;o--;)i[Pi[o]]=s[o]||"";return r!=-1&&n!=-1&&(i.source=t,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=Fi(i,i.path),i.queryKey=Ui(i,i.query),i}function Fi(e,t){const r=/\/{2,9}/g,n=t.replace(r,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Ui(e,t){const r={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,i){s&&(r[s]=i)}),r}const hr=typeof addEventListener=="function"&&typeof removeEventListener=="function",kt=[];hr&&addEventListener("offline",()=>{kt.forEach(e=>e())},!1);class se extends L{constructor(t,r){if(super(),this.binaryType=vi,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(r=t,t=null),t){const n=fr(t);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=fr(r.host).host);qt(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const s=n.prototype.name;this.transports.push(s),this._transportsByName[s]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Ei(this.opts.query)),hr&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},kt.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const r=Object.assign({},this.opts.query);r.EIO=Tn,r.transport=t,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&se.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(t);r.open(),this.setTransport(r)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",se.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=t.data,this._onError(r);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(r+=_i(s)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,It(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,r,n){return this._sendPacket("message",t,r,n),this}send(t,r,n){return this._sendPacket("message",t,r,n),this}_sendPacket(t,r,n,s){if(typeof r=="function"&&(s=r,r=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const i={type:t,data:r,options:n};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),s&&this.once("flush",s),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),t()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(se.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),hr&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=kt.indexOf(this._offlineEventListener);n!==-1&&kt.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,r),this.writeBuffer=[],this._prevBufferLen=0}}}se.protocol=Tn;class Gi extends se{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let r=this.createTransport(t),n=!1;se.priorWebsocketSuccess=!1;const s=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",w=>{if(!n)if(w.type==="pong"&&w.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;se.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(b(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const N=new Error("probe error");N.transport=r.name,this.emitReserved("upgradeError",N)}}))};function i(){n||(n=!0,b(),r.close(),r=null)}const o=w=>{const N=new Error("probe error: "+w);N.transport=r.name,i(),this.emitReserved("upgradeError",N)};function d(){o("transport closed")}function f(){o("socket closed")}function m(w){r&&w.name!==r.name&&i()}const b=()=>{r.removeListener("open",s),r.removeListener("error",o),r.removeListener("close",d),this.off("close",f),this.off("upgrading",m)};r.once("open",s),r.once("error",o),r.once("close",d),this.once("close",f),this.once("upgrading",m),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const r=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&r.push(t[n]);return r}}class Vi extends Gi{constructor(t,r={}){const n=typeof t=="object"?t:r;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(s=>Ii[s]).filter(s=>!!s)),super(t,n)}}function Wi(e,t="",r){let n=e;r=r||typeof location<"u"&&location,e==null&&(e=r.protocol+"//"+r.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=r.protocol+e:e=r.host+e),/^(https?|wss?):\/\//.test(e)||(typeof r<"u"?e=r.protocol+"//"+e:e="https://"+e),n=fr(e)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const i=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+i+":"+n.port+t,n.href=n.protocol+"://"+i+(r&&r.port===n.port?"":":"+n.port),n}const Hi=typeof ArrayBuffer=="function",zi=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,qn=Object.prototype.toString,ji=typeof Blob=="function"||typeof Blob<"u"&&qn.call(Blob)==="[object BlobConstructor]",Yi=typeof File=="function"||typeof File<"u"&&qn.call(File)==="[object FileConstructor]";function Cr(e){return Hi&&(e instanceof ArrayBuffer||zi(e))||ji&&e instanceof Blob||Yi&&e instanceof File}function St(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let r=0,n=e.length;r<n;r++)if(St(e[r]))return!0;return!1}if(Cr(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return St(e.toJSON(),!0);for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&St(e[r]))return!0;return!1}function Ki(e){const t=[],r=e.data,n=e;return n.data=pr(r,t),n.attachments=t.length,{packet:n,buffers:t}}function pr(e,t){if(!e)return e;if(Cr(e)){const r={_placeholder:!0,num:t.length};return t.push(e),r}else if(Array.isArray(e)){const r=new Array(e.length);for(let n=0;n<e.length;n++)r[n]=pr(e[n],t);return r}else if(typeof e=="object"&&!(e instanceof Date)){const r={};for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=pr(e[n],t));return r}return e}function Ji(e,t){return e.data=mr(e.data,t),delete e.attachments,e}function mr(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let r=0;r<e.length;r++)e[r]=mr(e[r],t);else if(typeof e=="object")for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(e[r]=mr(e[r],t));return e}const Pn=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Qi=5;var y;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(y||(y={}));class Xi{constructor(t){this.replacer=t}encode(t){return(t.type===y.EVENT||t.type===y.ACK)&&St(t)?this.encodeAsBinary({type:t.type===y.EVENT?y.BINARY_EVENT:y.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let r=""+t.type;return(t.type===y.BINARY_EVENT||t.type===y.BINARY_ACK)&&(r+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(r+=t.nsp+","),t.id!=null&&(r+=t.id),t.data!=null&&(r+=JSON.stringify(t.data,this.replacer)),r}encodeAsBinary(t){const r=Ki(t),n=this.encodeAsString(r.packet),s=r.buffers;return s.unshift(n),s}}class Br extends L{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let r;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(t);const n=r.type===y.BINARY_EVENT;n||r.type===y.BINARY_ACK?(r.type=n?y.EVENT:y.ACK,this.reconstructor=new Zi(r),r.attachments===0&&super.emitReserved("decoded",r)):super.emitReserved("decoded",r)}else if(Cr(t)||t.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let r=0;const n={type:Number(t.charAt(0))};if(y[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===y.BINARY_EVENT||n.type===y.BINARY_ACK){const i=r+1;for(;t.charAt(++r)!=="-"&&r!=t.length;);const o=t.substring(i,r);if(o!=Number(o)||t.charAt(r)!=="-")throw new Error("Illegal attachments");const d=Number(o);if(!Fn(d)||d<0)throw new Error("Illegal attachments");if(d>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=d}if(t.charAt(r+1)==="/"){const i=r+1;for(;++r&&!(t.charAt(r)===","||r===t.length););n.nsp=t.substring(i,r)}else n.nsp="/";const s=t.charAt(r+1);if(s!==""&&Number(s)==s){const i=r+1;for(;++r;){const o=t.charAt(r);if(o==null||Number(o)!=o){--r;break}if(r===t.length)break}n.id=Number(t.substring(i,r+1))}if(t.charAt(++r)){const i=this.tryParse(t.substr(r));if(Br.isPayloadValid(n.type,i))n.data=i;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,r){switch(t){case y.CONNECT:return Et(r);case y.DISCONNECT:return r===void 0;case y.CONNECT_ERROR:return typeof r=="string"||Et(r);case y.EVENT:case y.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&Pn.indexOf(r[0])===-1);case y.ACK:case y.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Zi{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const r=Ji(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function eo(e){return typeof e=="string"}const Fn=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e};function to(e){return e===void 0||Fn(e)}function Et(e){return Object.prototype.toString.call(e)==="[object Object]"}function ro(e,t){switch(e){case y.CONNECT:return t===void 0||Et(t);case y.DISCONNECT:return t===void 0;case y.EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&Pn.indexOf(t[0])===-1);case y.ACK:return Array.isArray(t);case y.CONNECT_ERROR:return typeof t=="string"||Et(t);default:return!1}}function no(e){return eo(e.nsp)&&to(e.id)&&ro(e.type,e.data)}const so=Object.freeze(Object.defineProperty({__proto__:null,protocol:Qi,get PacketType(){return y},Encoder:Xi,Decoder:Br,isPacketValid:no},Symbol.toStringTag,{value:"Module"}));function q(e,t,r){return e.on(t,r),function(){e.off(t,r)}}const io=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Un extends L{constructor(t,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[q(t,"open",this.onopen.bind(this)),q(t,"packet",this.onpacket.bind(this)),q(t,"error",this.onerror.bind(this)),q(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...r){var n,s,i;if(io.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(r.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const o={type:y.EVENT,data:r};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const b=this.ids++,w=r.pop();this._registerAckCallback(b,w),o.id=b}const d=(s=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||s===void 0?void 0:s.writable,f=this.connected&&!(!((i=this.io.engine)===null||i===void 0)&&i._hasPingExpired());return this.flags.volatile&&!d||(f?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(t,r){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[t]=r;return}const i=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let d=0;d<this.sendBuffer.length;d++)this.sendBuffer[d].id===t&&this.sendBuffer.splice(d,1);r.call(this,new Error("operation has timed out"))},s),o=(...d)=>{this.io.clearTimeoutFn(i),r.apply(this,d)};o.withError=!0,this.acks[t]=o}emitWithAck(t,...r){return new Promise((n,s)=>{const i=(o,d)=>o?s(o):n(d);i.withError=!0,r.push(i),this.emit(t,...r)})}_addToQueue(t){let r;typeof t[t.length-1]=="function"&&(r=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((s,...i)=>(this._queue[0],s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(s)):(this._queue.shift(),r&&r(null,...i)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!t||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:y.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case y.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case y.EVENT:case y.BINARY_EVENT:this.onevent(t);break;case y.ACK:case y.BINARY_ACK:this.onack(t);break;case y.DISCONNECT:this.ondisconnect();break;case y.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const r=t.data||[];t.id!=null&&r.push(this.ack(t.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const r=this;let n=!1;return function(...s){n||(n=!0,r.packet({type:y.ACK,id:t,data:s}))}}onack(t){const r=this.acks[t.id];typeof r=="function"&&(delete this.acks[t.id],r.withError&&t.data.unshift(null),r.apply(this,t.data))}onconnect(t,r){this.id=t,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:y.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,t.data)}}}function Oe(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Oe.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),r=Math.floor(t*this.jitter*e);e=(Math.floor(t*10)&1)==0?e-r:e+r}return Math.min(e,this.max)|0};Oe.prototype.reset=function(){this.attempts=0};Oe.prototype.setMin=function(e){this.ms=e};Oe.prototype.setMax=function(e){this.max=e};Oe.prototype.setJitter=function(e){this.jitter=e};class gr extends L{constructor(t,r){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(r=t,t=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,qt(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Oe({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=t;const s=r.parser||so;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var r;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(r=this.backoff)===null||r===void 0||r.setMin(t),this)}randomizationFactor(t){var r;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(r=this.backoff)===null||r===void 0||r.setJitter(t),this)}reconnectionDelayMax(t){var r;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(r=this.backoff)===null||r===void 0||r.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new Vi(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=q(r,"open",function(){n.onopen(),t&&t()}),i=d=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",d),t?t(d):this.maybeReconnectOnOpen()},o=q(r,"error",i);if(this._timeout!==!1){const d=this._timeout,f=this.setTimeoutFn(()=>{s(),i(new Error("timeout")),r.close()},d);this.opts.autoUnref&&f.unref(),this.subs.push(()=>{this.clearTimeoutFn(f)})}return this.subs.push(s),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(q(t,"ping",this.onping.bind(this)),q(t,"data",this.ondata.bind(this)),q(t,"error",this.onerror.bind(this)),q(t,"close",this.onclose.bind(this)),q(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(r){this.onclose("parse error",r)}}ondecoded(t){It(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,r){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new Un(this,t,r),this.nsps[t]=n),n}_destroy(t){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(t){const r=this.encoder.encode(t);for(let n=0;n<r.length;n++)this.engine.write(r[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(s=>{s?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",s)):t.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const ze={};function wt(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const r=Wi(e,t.path||"/socket.io"),n=r.source,s=r.id,i=r.path,o=ze[s]&&i in ze[s].nsps,d=t.forceNew||t["force new connection"]||t.multiplex===!1||o;let f;return d?f=new gr(n,t):(ze[s]||(ze[s]=new gr(n,t)),f=ze[s]),r.query&&!t.query&&(t.query=r.queryKey),f.socket(r.path,t)}Object.assign(wt,{Manager:gr,Socket:Un,io:wt,connect:wt});window.GUILDSYNC_WEB=!0;const xr="guildsync-web-session";function oo(){try{return JSON.parse(localStorage.getItem(xr)||"{}")||{}}catch{return{}}}function ao(e){localStorage.setItem(xr,JSON.stringify(e||{}))}function Gn(){localStorage.removeItem(xr)}async function co(){return!0}async function Vn(){return!0}async function lo(){return!0}async function uo(){return!0}async function fo(){return!0}async function ho(){return window.location.assign("/api/auth/discord/web-login"),!0}async function po(){var i,o,d,f,m,b,w,N;const t=oo().token||localStorage.getItem("guildsync-web-token")||"";if(!t)return{logged_in:!1,allowed:!1,status_message:"Not logged in."};const r=await fetch("/api/auth/session",{headers:{Authorization:`Bearer ${t}`}}),n=await r.json().catch(()=>({}));if(!r.ok||n.ok===!1)return Gn(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:n.message||"Session expired. Please log in again."};const s={logged_in:!0,allowed:!0,token:t,user:n.user,discord_user_id:((i=n.user)==null?void 0:i.discord_user_id)||"",username:((o=n.user)==null?void 0:o.username)||"",global_name:((d=n.user)==null?void 0:d.global_name)||"",display_name:((f=n.user)==null?void 0:f.display_name)||((m=n.user)==null?void 0:m.global_name)||((b=n.user)==null?void 0:b.username)||"",avatar_url:((w=n.user)==null?void 0:w.avatar_url)||"",role:((N=n.user)==null?void 0:N.role)||"user",status_message:"Logged in."};return ao(s),s}async function mo(){return Gn(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:"Logged out."}}async function go(){return Pt()}async function yo(){return Pt()}async function Pt(){return{watching:!1,directory:"Web upload mode",files:[{key:"banking",fileName:"GuildSyncBanking.lua",enabled:!0,filePath:"Upload through Reports & Admin"},{key:"roster",fileName:"GuildSyncRoster.lua",enabled:!0,filePath:"Upload through Reports & Admin"}]}}async function bo(){return Pt()}async function vo(){throw new Error("File watching is not available in the web interface. Use Reports & Admin \u2192 Upload ESO SavedVariables.")}async function ko(){return{ok:!0}}async function So(){throw new Error("File watching is not available in the web interface. Use Reports & Admin \u2192 Upload ESO SavedVariables.")}async function wo(){return{ok:!0}}const mt=new Map;function je(e,t){return mt.has(e)||mt.set(e,new Set),mt.get(e).add(t),()=>{var r;return(r=mt.get(e))==null?void 0:r.delete(t)}}const Ft="1.0.3",_o=30*60*1e3,Wn="guildsync-pending-banking-uploads",Hn="guildsync-pending-roster-uploads",p=60*1e3,zn=7e3,jn=1400,Yn=2400,Ao=4e3,Lo=38,Kn=document.querySelector("#app");let an=null,Ye=null,cn=!1,ct=!1,_t=null,or=!1,ar=!1,ie=null,de=new Map,he=new Map,D="",Se=!1,we=!1,Qe=[],g={logged_in:!1,allowed:!1,status_message:""},c=null,T=[],Ut=null,et=!1,Rt=!1,Dt="",Le=new Set,Ee=new Set,tt="username",pe="asc",yr=null,br=null,F=[],$t=null,le=!1,dn=!1,Mt="",vr=null,kr=null,me=new Set,Re=new Set,Y="",M="",R=-1,Ne=!1,rt="",x=[],ue="",oe=[],ae=!1,J="",cr=null,P=-1,Ie=!1,qe=[],ee=!1,ge="",Pe=!1,nt=[],te=!1,ye="",Fe=!1,Or=[],re=!1,be="",Ue="",De="",ne="",S=[],C=!1,I="",Ge=!1,Gt="",K=-1,fe=!1,v=null,ve=[],Te=!1,Z="",dt="",U=-1,Ve=!1,Ir=null,Xe=null;const qr=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let V=[],O="biweekly",Jn=null,_e=!1,ke=!1,lt="biweekly",Q=!1,Nt=!1,j="",$={accountName:"",note:"",tickets:""},We="",z=-1,Sr={biweekly:0,monthly:0};const Eo=1780786800,Ro=1781996400,Do=14*24*60*60,$o=28*24*60*60,Mo=60*60,Tt=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let A=Tt[0].id;function No(){Kn.innerHTML=`
    <main class="splash-screen">
      <img src="${ai}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await co(),await To(),Qn(),Ze(),await Me()},5e3)}async function To(){try{g=await po()}catch(e){g={logged_in:!1,allowed:!1,status_message:""},h("session-error",k(e),{ttlMs:p})}}function Qn(){Kn.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${ci}" alt="" class="title-icon" />
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
            <img src="${di}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${a(Ft)}</div>
            </div>
          </div>
          <div id="discordArea" class="discord-area"></div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${Xn()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content" aria-live="polite">
          ${Zn()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await uo()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await Vn(),await fo()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await lo()}),Lt(),ts(),Js(),xs(),Us(),os(),Bs(),Es(),Rs(),Ds(),$s(),ms(),qo(),ce(),xe(),cn||(window.addEventListener("resize",()=>{oi(),si()}),od(),cn=!0)}function Xn(){return Tt.map(e=>{const t=e.id===A;return`
        <button
          class="guildsync-tab${t?" active":""}"
          type="button"
          data-tab-id="${u(e.id)}"
          aria-selected="${t?"true":"false"}"
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${Co(e.icon)}</span>
          <span class="guildsync-tab-label">${a(e.label)}</span>
        </button>
      `}).join("")}function Co(e){return e==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:e==="swords"?"\u2694":e==="gear"?"\u2699":e==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function Zn(){const e=Tt.find(r=>r.id===A)||Tt[0];let t="";return e.id==="discord-members"?t=Po():e.id==="eso-members"?t=Fo():e.id==="more"?t=uc():e.id==="settings"?t=na():t=`
      <div class="guildsync-tab-panel" data-active-tab="${u(e.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${a(e.label)} content will appear here.
        </div>
      </div>
    `,`
    ${t}
    ${Q?Xa():""}
    ${fe?Wa():""}
    ${Ie?sa():""}
    ${Pe?la():""}
    ${Fe?pa():""}
    ${Ge?Aa():""}
    ${Ve?Io():""}
  `}function Bo(){return Ve||Ne||Q||fe||Ie||Pe||Fe||Ge||ke}function xo(){return Ve?!1:Ge?(Er(),!0):Fe?(Lr(),!0):Pe?(Ar(),!0):Ie?(_r(),!0):fe?(Be(),!0):Q?(Q=!1,l(),!0):Ne?(Ne=!1,l(),!0):ke?(ke=!1,l(),!0):!1}function Oo(e){e.key==="Escape"&&xo()&&(e.preventDefault(),e.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",Oo,!0),window.guildSyncGlobalModalEscapeAttached=!0);function es(e={}){return new Promise(t=>{Xe&&Xe(!1),Ve=!0,Ir={title:e.title||"Confirm Action",message:e.message||"Are you sure?",detail:e.detail||"",confirmLabel:e.confirmLabel||"Confirm",cancelLabel:e.cancelLabel||"Cancel",confirmClass:e.confirmClass||"danger"},Xe=t,l()})}function Ct(e=!1){const t=Xe;Xe=null,Ve=!1,Ir=null,t&&t(e===!0),l()}function Io(){const e=Ir||{};return`
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
  `}function ln(e){var n,s,i,o;const t=(s=(n=e.target).closest)==null?void 0:s.call(n,"#cancelGuildSyncConfirmButton"),r=(o=(i=e.target).closest)==null?void 0:o.call(i,"#acceptGuildSyncConfirmButton");if(!(!t&&!r)){if(e.preventDefault(),e.stopPropagation(),t){Ct(!1);return}r&&Ct(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",ln,!0),document.addEventListener("pointerup",ln,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function qo(){if(!Ve)return;const e=document.querySelector("#cancelGuildSyncConfirmButton"),t=document.querySelector("#acceptGuildSyncConfirmButton");e&&(e.onclick=n=>{n.preventDefault(),n.stopPropagation(),Ct(!1)}),t&&(t.onclick=n=>{n.preventDefault(),n.stopPropagation(),Ct(!0)});const r=document.querySelector(".guildsync-confirm-overlay");r&&(r.onclick=n=>{n.target===r&&(n.preventDefault(),n.stopPropagation())})}function ts(){document.querySelectorAll(".guildsync-tab").forEach(e=>{e.addEventListener("click",()=>{if(Bo())return;const t=e.dataset.tabId;!t||t===A||(A=t,l())})})}function l(e={}){const t=document.querySelector(".guildsync-tabs"),r=document.querySelector("#guildSyncTabContent");t&&(t.innerHTML=Xn()),r&&(r.innerHTML=Zn()),ts(),Js(),xs(),Us(),os(),Bs(),Es(),Rs(),Ds(),$s(),ms(),e.restoreDiscordSearchFocus&&Bc(),e.restoreRosterSearchFocus&&xc(),A==="discord-members"&&(c==null?void 0:c.connected)&&T.length===0&&!et&&Yr({silent:!0}),A==="eso-members"&&(c==null?void 0:c.connected)&&F.length===0&&!le&&!dn&&(dn=!0,ut({silent:!0})),A==="more"&&(c==null?void 0:c.connected)&&V.length===0&&!_e&&Jt({silent:!0}),(A==="discord-members"||A==="eso-members"||A==="settings")&&(c==null?void 0:c.connected)&&E()&&S.length===0&&!C&&Vt({silent:!0})}function Po(){const e=Nc(),t=Oc(),r=Array.from(Le),n=Array.from(Ee);return`
    <div class="guildsync-tab-panel discord-member-panel" data-active-tab="discord-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Discord Member Data</h2>
          <p class="discord-data-subtitle">Manage and view Discord member information.</p>
        </div>
        <div class="discord-data-actions">
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${a(Qs(Ut))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${et||Rt?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Rt?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${u(Dt)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${t.filter(s=>!Le.has(s)).map(s=>`<option value="${u(s)}">${a(s)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All roles</span>':r.map(s=>Fc(s)).join("")}
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
              ${qr.filter(s=>!Ee.has(s.id)).map(s=>`<option value="${u(s.id)}">${a(s.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(s=>rs("discord",s)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${yt("username","Username")}
                ${yt("global_name","Global Name")}
                ${yt("server_nickname","Server Nickname")}
                ${yt("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${e.length>0?e.map(s=>Ic(s)).join(""):qc()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `}function Fo(){const e=Ho(),t=Yo(),r=Array.from(me),n=Array.from(Re);return`
    <div class="guildsync-tab-panel eso-roster-panel" data-active-tab="eso-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Guild Roster</h2>
          <p class="discord-data-subtitle">Current ESO roster imported from GuildSyncRoster.</p>
        </div>
        <div class="discord-data-actions">
          <span class="discord-last-refresh">Last Refresh: ${a(ic($t))}</span>
          <button id="openRosterHistoryButton" class="clear-discord-filters-button" type="button">Lookup Rank Historical Data</button>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${le?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${le?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${u(Mt)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${t.filter(s=>!me.has(s)).map(s=>`<option value="${u(s)}">${a(s)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All ranks</span>':r.map(s=>Ko(s)).join("")}
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
              ${qr.filter(s=>!Re.has(s.id)).map(s=>`<option value="${u(s.id)}">${a(s.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(s=>rs("roster",s)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${gt("account_name","Account Name")}
                ${gt("rank","Rank")}
                ${gt("joined","Joined")}
                ${gt("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${e.length>0?e.map((s,i)=>Uo(s,i)).join(""):Go()}
            </tbody>
          </table>
        </div>
      </div>
      ${Ne?Xo():""}
    </div>
  `}function Uo(e,t=-1){const r=Vo(e.rank||""),n=r?` style="color: ${r};"`:"";return`
    <tr class="eso-roster-row${t===R?" roster-search-active-row":""}"${n} data-roster-row-index="${u(String(t))}" data-eso-account-name="${u(e.account_name||"")}">
      <td>${a(e.account_name||"")}</td>
      <td>${Pr(e.rank||"")}</td>
      <td>${a(zt(e.joined))}</td>
      <td class="member-link-action-cell">${Ss({mode:"eso-to-discord",esoAccountName:e.account_name})}</td>
    </tr>
  `}function Go(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">${a(le?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function Vo(e){const t=String(e||"").trim(),r=Jr(t);return Qt(r==null?void 0:r.role_color)}function Pr(e){const t=String(e||"").trim();return`<span class="eso-roster-rank-text">${a(t)}</span>`}function Wo(e){const t=String(e||"").trim();return!t||t.toLowerCase()==="unknown"?"":Pr(t)}function Ho(){const e=Mt.trim().toLowerCase(),t=F.filter(r=>{const n=String(r.rank||"").trim();if(me.size>0&&!me.has(n)||!is(Re,wr(r)))return!1;if(!e)return!0;const s=zt(r.joined),i=Is(r.joined),o=wr(r),d=ss(r.account_name||"");return[r.account_name,n,s,i,r.joined,o,d].map(m=>String(m||"").toLowerCase()).join(" ").includes(e)});return zo(t)}function zo(e){if(!Y||!M)return e;const t=M==="desc"?-1:1;return[...e].sort((r,n)=>{const s=un(r,Y),i=un(n,Y),o=s.localeCompare(i,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*t:String(r.account_name||"").localeCompare(String(n.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function un(e,t){if(t==="rank")return String(e.rank||"");if(t==="joined"){const r=Number(e.joined||0);return Number.isFinite(r)&&r>0?String(r).padStart(16,"0"):""}if(t==="linked"){const r=wr(e);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[r]||"9"} ${r} ${ss(e.account_name||"")}`}return String(e.account_name||"")}function jo(e){const r=new Set(["account_name","rank","joined","linked"]).has(e)?e:"account_name";Y!==r?(Y=r,M="asc"):M==="asc"?M="desc":M==="desc"?(Y="",M=""):(Y=r,M="asc"),R=-1,l()}function gt(e,t,r=""){const n=Y===e&&Boolean(M),s=n?M==="asc"?"ascending":"descending":"none",i=n?M==="asc"?"\u25B2":"\u25BC":"\u2195";return`
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
  `}function Yo(){return Array.from(new Set(F.map(e=>String(e.rank||"").trim()).filter(Boolean))).sort((e,t)=>e.localeCompare(t))}function Ko(e){const t=Jr(e),r=Qt(t==null?void 0:t.role_color),n=Xr(r),s=Qr(r,n);return`
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
  `}function Jo(e){const t=qr.find(r=>r.id===e);return t?t.label:e}function rs(e,t){const r=e==="roster"?"roster":"discord",n=Jo(t);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${r}-link-status-filter="${u(t)}"
      title="Remove ${u(n)} link filter"
    >
      <span>${a(n)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function ns(e){const t=Array.isArray(e)?e.filter(Boolean):e?[e]:[];return t.length===0?"unlinked":t.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked"&&String(r.link_method||"").trim().toLowerCase()==="manual")?"manual":t.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked")?"linked":t.some(r=>String(r.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function Qo(e){return ns(Ht(e==null?void 0:e.discord_id))}function wr(e){return ns(Wt(e==null?void 0:e.account_name))}function ss(e){const t=Wt(e),r=ks({mode:"eso-to-discord",esoAccountName:e}),n=t.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked").map(i=>i.discord_server_nickname||i.discord_display_name||i.discord_username||i.discord_user_id||"").filter(Boolean),s=t.filter(i=>String(i.link_status||"").trim().toLowerCase()==="candidate").map(i=>i.discord_server_nickname||i.discord_display_name||i.discord_username||i.discord_user_id||"").filter(Boolean);return[r.label,r.title,n.join(" "),s.join(" ")].filter(Boolean).join(" ")}function is(e,t){return!e||e.size===0||e.has(t)?!0:t==="manual"&&e.has("linked")}function Xo(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(rt)}" />
        </div>

        ${J?`<div class="discord-data-error">${a(J)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Zo()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${ue?`: ${a(ue)}`:""}</div>
            ${ea()}
          </div>
        </div>
      </div>
    </div>
  `}function Zo(){return ae&&x.length===0?'<div class="roster-history-muted">Searching...</div>':x.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${x.map((e,t)=>`
        <button class="roster-history-match${t===P||e.account_name===ue?" is-selected":""}" type="button" data-roster-history-account="${u(e.account_name)}">
          <span>${a(e.account_name)}</span>
          <strong>${a(e.rank||"")}</strong>
          ${t===P?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function ea(){return ue?ae&&oe.length===0?'<div class="roster-history-muted">Loading history...</div>':oe.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${oe.map(e=>`
            <tr>
              <td class="roster-history-when-cell">${a(Is(e.timestamp))}</td>
              <td>${a(e.event_type||"")}</td>
              <td>${Wo(e.rank)}</td>
              <td>${a(e.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function ta(){return typeof window<"u"&&window.GUILDSYNC_WEB===!0}function ra(){return ta()?`
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
  `:""}function na(){return`
    <div class="guildsync-tab-panel reports-panel" data-active-tab="settings">
      <div class="discord-data-header reports-header">
        <div>
          <h2 class="discord-data-title">Reports & Admin</h2>
          <p class="discord-data-subtitle">Run GuildSync reports and administrative review tools. More options can be added here later.</p>
        </div>
      </div>

      <div class="reports-scroll-area">
        ${ra()}
        <section class="reports-list" aria-label="Available reports">
          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Associates Promotion Eligible</h3>
              <p>Shows Associates who have been in the guild at least two weeks, have purchased at least one raffle ticket, and are linked to Discord. Also shows otherwise eligible Associates who still need a Discord link reviewed.</p>
            </div>
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${ee?"disabled":""}>
              ${ee?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${te?"disabled":""}>
              ${te?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, last server-specific activity time, days since last activity, and the activity that updated the timestamp.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${re?"disabled":""}>
              ${re?"Loading...":"Run"}
            </button>
          </article>
        </section>

        <article class="report-option-card">
          <div class="report-option-copy">
            <h3>ESO / Discord Member Links</h3>
            <p>Review automatic ESO-to-Discord links, accept candidate matches, unlink blocked matches, or run the matcher again after roster or Discord refreshes.</p>
          </div>
          <button id="runMemberLinksReportButton" class="refresh-discord-button report-run-button" type="button" ${C?"disabled":""}>
            ${C?"Loading...":"Run"}
          </button>
        </article>
      </div>
    </div>
  `}function os(){var e,t,r,n,s,i;A==="settings"&&((e=document.querySelector("#runAssociateTicketReportButton"))==null||e.addEventListener("click",()=>as()),(t=document.querySelector("#runDiscordRankAuditReportButton"))==null||t.addEventListener("click",()=>da()),(r=document.querySelector("#runDiscordLastSeenReportButton"))==null||r.addEventListener("click",()=>ha()),(n=document.querySelector("#runMemberLinksReportButton"))==null||n.addEventListener("click",()=>_a()),(s=document.querySelector("#webBankingSavedVarsUpload"))==null||s.addEventListener("change",o=>fn(o,"banking")),(i=document.querySelector("#webRosterSavedVarsUpload"))==null||i.addEventListener("change",o=>fn(o,"roster")))}async function fn(e,t){var s;const r=e.currentTarget,n=((s=r==null?void 0:r.files)==null?void 0:s[0])||null;if(!!n)try{const i=await n.text(),o=await fetch(`/api/guildsync/upload-savedvars/${encodeURIComponent(t)}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${(g==null?void 0:g.token)||""}`},body:JSON.stringify({file_name:n.name,raw_lua_text:i})}),d=await o.json().catch(()=>({}));if(!o.ok||d.ok===!1)throw new Error(d.error||d.message||`Upload failed with HTTP ${o.status}.`);h(`web-upload-${t}-success`,d.message||`${n.name} uploaded and processed.`,{ttlMs:p}),t==="banking"?await requestBankingData():t==="roster"&&(await requestRosterData(),await refreshMemberLinksData({silent:!0}))}catch(i){h(`web-upload-${t}-error`,k(i),{ttlMs:p})}finally{r&&(r.value="")}}function as(){Ie=!0,ge="",l(),Cs()}function _r(){Ie=!1,ge="",l()}function sa(){const e=ia(),t=oa(),r=qe.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${ee?"disabled":""}>${ee?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(r))} total row${r===1?"":"s"}</span>
        </div>

        ${ge?`<div class="discord-data-error">${a(ge)}</div>`:""}

        <div class="report-results-content">
          ${ee&&r===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!ee&&r===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${r>0?hn("Eligible","Linked to Discord and eligible for promotion review.",e,"No linked eligible Associates found."):""}
          ${r>0?hn("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",t,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${a(ds())}</textarea>
      </div>
    </div>
  `}function ia(){return qe.filter(e=>String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible")}function oa(){return qe.filter(e=>String(e.report_group||e.eligibility_group||"").toLowerCase()!=="eligible")}function hn(e,t,r,n){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${a(e)}</h4>
          <p>${a(t)}</p>
        </div>
        <span>${a(String(r.length))} row${r.length===1?"":"s"}</span>
      </div>
      ${r.length>0?aa(r):`<div class="roster-history-muted report-section-empty">${a(n)}</div>`}
    </section>
  `}function aa(e=qe){return`
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
              <td>${Pr(t.rank||"")}</td>
              <td>${a(zt(t.joined))}</td>
              <td>${a(Kt(t.purchased_tickets||0))}</td>
              <td>${a(cs(t))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function cs(e){return String(e.link_status||"").toLowerCase()==="linked"?e.discord_server_nickname||e.discord_display_name||e.discord_username||e.discord_user_id||"Linked":"Needs Link Review"}function ds(){const e=[["Section","Account Name","Rank","Joined","Purchased Tickets","Discord Link"]];for(const t of qe){const r=String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";e.push([r,t.account_name||"",t.rank||"",zt(t.joined),Kt(t.purchased_tickets||0),cs(t)])}return e.map(t=>t.map(jt).join("	")).join(`
`)}async function ca(){const e=ds();if(await Yt(e)){h("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#associateTicketReportTsv");r&&(r.focus(),r.select()),h("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function da(){Pe=!0,ye="",l(),Ts()}function Ar(){Pe=!1,ye="",l()}function la(){const e=nt.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${te?"disabled":""}>${te?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(e))} total row${e===1?"":"s"}</span>
        </div>

        ${ye?`<div class="discord-data-error">${a(ye)}</div>`:""}

        <div class="report-results-content">
          ${te&&e===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!te&&e===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${e>0?ua(nt):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${a(fs())}</textarea>
      </div>
    </div>
  `}function ua(e=nt){return`
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
              <td>${a(ls(t))}</td>
              <td>${a(t.discord_rank||"No matching rank role")}</td>
              <td>${a(t.eso_accounts||"No linked ESO account")}</td>
              <td>${a(t.eso_rank||"None")}</td>
              <td>${a(us(t))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function ls(e){return e.server_nickname||e.global_name||e.username||e.discord_id||""}function us(e){const t=String(e.issue_type||"").toLowerCase();return t==="no_linked_eso_account"?"No linked ESO account":t==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":t==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":t==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":t||"Review needed"}function fs(){const e=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const t of nt)e.push([ls(t),t.username||"",t.discord_rank||"No matching rank role",t.discord_rank_roles||"",t.eso_accounts||"No linked ESO account",t.eso_rank||"None",us(t)]);return e.map(t=>t.map(jt).join("	")).join(`
`)}async function fa(){const e=fs();if(await Yt(e)){h("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#discordRankAuditReportTsv");r&&(r.focus(),r.select()),h("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function ha(){Fe=!0,be="",Ue="",l(),Ns(),S.length===0&&!C&&Vt({silent:!0})}function Lr(){Fe=!1,be="",Ue="",De="",ne="",l()}function pa(){const e=Fr(),t=Or.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${re?"disabled":""}>${re?"Loading...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(t))} Discord member${t===1?"":"s"}</span>
        </div>

        <input
          id="discordLastSeenReportSearchInput"
          class="member-links-report-search-input discord-last-seen-search-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="Search Discord member, username, last seen action, or date..."
          value="${u(Ue)}"
        />

        ${be?`<div class="discord-data-error discord-last-seen-report-error">${a(be)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${re&&t===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!re&&t===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${t>0?ma(e):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${a(ps(e))}</textarea>
      </div>
    </div>
  `}function ma(e=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${Ke("name","Discord Member")}</th>
            <th>${Ke("eso","ESO")}</th>
            <th>${Ke("date","Last Seen")}</th>
            <th>${Ke("days","Days Since")}</th>
            <th>${Ke("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${e.map(t=>`
            <tr class="discord-last-seen-row ${u(Sa(t.last_seen))}" data-discord-last-seen-row data-discord-last-seen-search="${u(hs(t))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${ka(t)}
                  <span>${a(Ce(t))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${ya(t)}</td>
              <td>${a(Ur(t.last_seen))}</td>
              <td>${a(Gr(t.last_seen))}</td>
              <td>${a(Bt(t.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function Ke(e,t){const r=De===e,n=r?ne==="asc"?"\u25B2":"\u25BC":"\u2195",s=r?`${t}: ${ne==="asc"?"ascending":"descending"}`:`${t}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${r?" active":""}" type="button" data-discord-last-seen-sort="${u(e)}" title="${u(s)}">
      <span>${a(t)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${a(n)}</span>
    </button>
  `}function Fr(){const e=[...Or],t=De,r=ne;if(!t||!r)return e;const n=r==="desc"?-1:1;return e.sort((s,i)=>{var o,d;if(t==="date"){const f=Number(s.last_seen||0)||0,m=Number(i.last_seen||0)||0;return(f-m)*n}if(t==="days")return(pn(s.last_seen)-pn(i.last_seen))*n;if(t==="action")return Bt(s.last_seen_action).localeCompare(Bt(i.last_seen_action),void 0,{sensitivity:"base"})*n;if(t==="eso"){const f=st(s),m=st(i),b={linked:0,candidate:1,unlinked:2},w=((o=b[f.status])!=null?o:9)-((d=b[m.status])!=null?d:9);return w!==0?w*n:f.esoAccountName.localeCompare(m.esoAccountName,void 0,{sensitivity:"base"})*n}return Ce(s).localeCompare(Ce(i),void 0,{sensitivity:"base"})*n})}function ga(e){De!==e?(De=e,ne="asc"):ne==="asc"?ne="desc":(De="",ne=""),l()}function Ce(e){return(e==null?void 0:e.server_nickname)||(e==null?void 0:e.global_name)||(e==null?void 0:e.username)||(e==null?void 0:e.discord_id)||""}function hs(e){return[Ce(e),e==null?void 0:e.server_nickname,e==null?void 0:e.global_name,e==null?void 0:e.username,e==null?void 0:e.discord_id,e==null?void 0:e.last_seen_action,ba(e),Ur(e==null?void 0:e.last_seen),Gr(e==null?void 0:e.last_seen)].filter(Boolean).join(" ")}function st(e){const t=Ca(e==null?void 0:e.discord_id),r=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),n=String((t==null?void 0:t.eso_account_name)||"").trim();return r==="linked"&&n?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:n,title:`Linked ESO account: ${n}`}:(r==="candidate"||String((t==null?void 0:t.link_method)||"").trim().toLowerCase()==="fuzzy")&&n?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:n,title:`Fuzzy ESO account candidate: ${n}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function ya(e){const t=st(e);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${u(t.className)}"
      title="${u(t.title)}"
      aria-label="${u(t.label)}"
      role="img"
    ></span>
  `}function ba(e){const t=st(e);return[t.status,t.label,t.esoAccountName].filter(Boolean).join(" ")}function va(e){const t=String((e==null?void 0:e.avatar)||"").trim(),r=String((e==null?void 0:e.discord_id)||"").trim();if(!t||!r)return"";if(/^https?:\/\//i.test(t))return t;const n=t.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(t)}.${n}?size=64`}function ka(e){const t=Ce(e),r=t?t.slice(0,2).toUpperCase():"?",n=va(e);return n?`<span class="discord-member-avatar"><img src="${u(n)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${a(r)}</span>`}function Ur(e){const t=Number(e);if(!t)return"Never";const r=new Date(t*1e3);if(Number.isNaN(r.getTime()))return String(e||"");const n=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(r).reduce((s,i)=>(s[i.type]=i.value,s),{});return`${n.month}/${n.day}/${n.year} ${n.hour}:${n.minute} ${n.dayPeriod}`}function Sa(e){const t=Number(e);if(!t)return"discord-last-seen-unknown";const r=(Date.now()-t*1e3)/864e5;return r>30?"discord-last-seen-red":r>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function Gr(e){const t=Number(e);if(!t)return"Never";const r=Date.now()-t*1e3;if(!Number.isFinite(r))return"";if(r<0)return"0 days";const n=Math.floor(r/864e5);return`${n} day${n===1?"":"s"}`}function pn(e){const t=Number(e);if(!t)return Number.POSITIVE_INFINITY;const r=Date.now()-t*1e3;return Number.isFinite(r)?r<0?0:Math.floor(r/864e5):Number.POSITIVE_INFINITY}function Bt(e){return String(e||"").trim()||"None tracked"}function ps(e=Fr()){const t=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const r of e){const n=st(r);t.push([Ce(r),n.label||"",n.esoAccountName||"",Ur(r==null?void 0:r.last_seen),Gr(r==null?void 0:r.last_seen),Bt(r==null?void 0:r.last_seen_action),(r==null?void 0:r.username)||"",(r==null?void 0:r.discord_id)||""])}return t.map(r=>r.map(jt).join("	")).join(`
`)}async function wa(){const e=Fr().filter(s=>{const i=H(Ue);return i?H(hs(s)).includes(i):!0}),t=ps(e);if(await Yt(t)){h("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#discordLastSeenReportTsv");n&&(n.focus(),n.select()),h("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function _a(){Ge=!0,I="",l(),S.length===0&&!C&&Vt({silent:!0})}function Er(){Ge=!1,Gt="",K=-1,l()}function Aa(){return`
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
          <button id="refreshMemberLinksButton" class="clear-discord-filters-button" type="button" ${C?"disabled":""}>Refresh Links</button>
          <button id="runMemberAutoLinkButton" class="refresh-discord-button" type="button" ${C?"disabled":""}>${C?"Running...":"Run Auto-Linking"}</button>
          <span class="roster-history-muted">${a(String(S.length))} link/candidate row${S.length===1?"":"s"}</span>
        </div>

        <input
          id="memberLinksReportSearchInput"
          class="member-links-report-search-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="Search ESO or Discord member links..."
          value="${u(Gt)}"
        />

        ${I?`<div class="discord-data-error member-links-report-error">${a(I)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${Da()}
        </div>
      </div>
    </div>
  `}function ms(){var r,n,s;if(!Ge)return;(r=document.querySelector("#closeMemberLinksReportButton"))==null||r.addEventListener("click",Er),(n=document.querySelector("#refreshMemberLinksButton"))==null||n.addEventListener("click",()=>Vt()),(s=document.querySelector("#runMemberAutoLinkButton"))==null||s.addEventListener("click",()=>Na());const e=document.querySelector("#memberLinksReportSearchInput");e&&(e.addEventListener("input",$a),e.addEventListener("keydown",Ma),ys()),document.querySelectorAll("[data-accept-member-candidate]").forEach(i=>{i.addEventListener("click",()=>bs(i.dataset.acceptMemberCandidate||"",i.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(i=>{i.addEventListener("click",()=>Ta(i.dataset.unlinkMemberLink||"",i.dataset.unlinkMemberLinkDiscordId||""))});const t=document.querySelector(".member-links-report-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Er()})}function mn(e){const t=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),r=String((e==null?void 0:e.link_method)||"").trim().toLowerCase();return t==="candidate"||r==="fuzzy"?0:t==="linked"?2:1}function gn(e){return[e==null?void 0:e.eso_account_name,e==null?void 0:e.discord_server_nickname,e==null?void 0:e.discord_display_name,e==null?void 0:e.discord_username,e==null?void 0:e.discord_user_id].filter(Boolean).join(" ")}function La(e){return[e==null?void 0:e.eso_account_name,e==null?void 0:e.discord_username,e==null?void 0:e.discord_display_name,e==null?void 0:e.discord_server_nickname,e==null?void 0:e.discord_user_id,e==null?void 0:e.link_status,e==null?void 0:e.link_method,e==null?void 0:e.match_reason,e==null?void 0:e.match_field,xt(e)].filter(Boolean).join(" ")}function Ea(e){return[...Array.isArray(e)?e:[]].sort((t,r)=>{const n=mn(t)-mn(r);if(n!==0)return n;const s=gn(t).localeCompare(gn(r),void 0,{sensitivity:"base"});return s!==0?s:String((t==null?void 0:t.discord_user_id)||"").localeCompare(String((r==null?void 0:r.discord_user_id)||""),void 0,{sensitivity:"base"})})}function Ra(e){const t=xt(e);let r="";t==="Username"?r=(e==null?void 0:e.discord_username)||"":t==="Global Name"?r=(e==null?void 0:e.discord_display_name)||"":t==="Server Nickname"&&(r=(e==null?void 0:e.discord_server_nickname)||""),r||(r=(e==null?void 0:e.discord_server_nickname)||(e==null?void 0:e.discord_display_name)||(e==null?void 0:e.discord_username)||(e==null?void 0:e.discord_user_id)||"");const n=t?` <span class="member-link-report-match-field">(${a(t)})</span>`:"";return`<span class="member-link-report-discord-name">${a(r)}</span>${n}`}function Da(){return C&&S.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(S)||S.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${Ea(S).map(t=>{var i;const r=String(t.link_status||"").trim().toLowerCase(),n=String(t.link_method||"").trim().toLowerCase(),s=Ra(t);return`
              <tr data-member-links-report-row data-member-links-report-search="${u(La(t))}">
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
  `}function gs(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(e=>e.offsetParent!==null)}function yn(e){const t=gs();if(t.forEach(n=>n.classList.remove("member-links-report-row-active")),t.length===0){K=-1;return}K=Math.max(0,Math.min(e,t.length-1));const r=t[K];r.classList.add("member-links-report-row-active"),r.scrollIntoView({block:"nearest"})}function ys(){const e=H(Gt),t=[...document.querySelectorAll("[data-member-links-report-row]")];let r=0;t.forEach(s=>{const i=H(s.dataset.memberLinksReportSearch||s.textContent||""),o=!e||i.includes(e);s.hidden=!o,s.classList.remove("member-links-report-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinksReportSearchEmpty");n&&(n.hidden=r!==0),K=-1}function $a(e){Gt=e.target.value||"",ys()}function Ma(e){if(e.key==="Enter"){e.preventDefault();return}if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;e.preventDefault();const t=gs();if(t.length===0)return;if(e.key==="ArrowDown"){const n=K<0?0:K+1;yn(n>=t.length?t.length-1:n);return}const r=K<0?t.length-1:K-1;yn(r<0?0:r)}async function Vt(e={}){if(!(c!=null&&c.connected)||!g.logged_in){I="You must be logged in and connected to load member links.",l();return}C=!0,I="",e.silent||l();try{const t=await _("guildsync:request-member-links",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load member links.");S=Array.isArray(t.links)?t.links:[]}catch(t){I=k(t)}finally{C=!1,l()}}async function Na(){if(!(c!=null&&c.connected)||!g.logged_in){I="You must be logged in and connected to run auto-linking.",l();return}C=!0,I="",l();try{const e=await _("guildsync:run-member-auto-linking",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to run auto-linking.");S=Array.isArray(e.links)?e.links:[],h("member-auto-link",e.message||"Member auto-linking complete.",{ttlMs:p})}catch(e){I=k(e)}finally{C=!1,l()}}async function bs(e,t=""){try{const r=await _("guildsync:accept-member-link-candidate",{esoAccountName:e,discordUserId:t},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to accept candidate.");S=Array.isArray(r.links)?r.links:S,h("member-link-accepted",r.message||"Candidate accepted as a link.",{ttlMs:p})}catch(r){I=k(r),h("member-link-accept-error",I,{ttlMs:p})}}async function Ta(e,t=""){if(!!await es({title:"Unlink Member?",message:`Remove the link between ${e} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const n=await _("guildsync:manual-unlink-member",{esoAccountName:e,discordUserId:t},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to unlink member.");S=Array.isArray(n.links)?n.links:S,h("member-link-unlinked",n.message||"Member link removed.",{ttlMs:p})}catch(n){I=k(n)}l()}}function Ae(e){return String(e||"").trim().replace(/^@+/,"").toLowerCase()}function Wt(e){const t=Ae(e);return t?S.filter(r=>Ae(r.eso_account_name)===t):[]}function Ht(e){const t=String(e||"").trim();return t?S.filter(r=>String(r.discord_user_id||"").trim()===t):[]}function vs(e=[]){const t=Array.isArray(e)?e.filter(Boolean):[];if(t.length===0)return null;const r=t.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked");if(r.length>0){const s=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(s)return s;const i=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return i||r[0]}const n=t.find(s=>String(s.link_status||"").trim().toLowerCase()==="candidate");return n||t[0]}function Ca(e){return vs(Ht(e))}function Ba(e){return`${Ae(e==null?void 0:e.eso_account_name)}::${String((e==null?void 0:e.discord_user_id)||"").trim()}`}function Vr(){return v?v.mode==="discord-to-eso"?Ht(v.discordUserId):Wt(v.esoAccountName):[]}function xa(e){const t=String(e||"").trim(),r=T.find(n=>String(n.discord_id||"").trim()===t);return r&&(r.server_nickname||r.global_name||r.username||r.discord_id)||t}function ks(e){const t=(e==null?void 0:e.mode)||"",r=t==="discord-to-eso"?Ht(e.discordUserId):Wt(e.esoAccountName),n=vs(r),s=String((n==null?void 0:n.link_status)||"").trim().toLowerCase(),i=r.filter(d=>String(d.link_status||"").trim().toLowerCase()==="linked").length,o=r.filter(d=>String(d.link_status||"").trim().toLowerCase()==="candidate").length;return i>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${t==="discord-to-eso"?i===1?n.eso_account_name:`${i} ESO accounts`:i===1?n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member":`${i} Discord accounts`}`}:s==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${t==="discord-to-eso"?n.eso_account_name:n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member"}`}:s==="blocked"||Number((n==null?void 0:n.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function Ss(e){const t=(e==null?void 0:e.mode)||"",r=t==="discord-to-eso"?e.discordUserId:e.esoAccountName,n=ks(e);return`
    <button
      class="member-link-status-dot member-link-status-${u(n.className)}"
      type="button"
      title="${u(n.title)}"
      aria-label="${u(n.label)}"
      data-open-member-link-dialog="${u(t)}"
      data-member-link-value="${u(r||"")}"
    ></button>
  `}function Oa(){return v?v.mode==="discord-to-eso"?xa(v.discordUserId):v.esoAccountName||"":""}function ws(e){const t=String(e||"").trim().toLowerCase();return t==="discord_username"||t==="username"?"Username":t==="discord_display_name"||t==="global_name"||t==="display_name"?"Global Name":t==="discord_server_nickname"||t==="server_nickname"||t==="nickname"?"Server Nickname":""}function xt(e){const t=ws((e==null?void 0:e.match_field)||(e==null?void 0:e.matched_field)||(e==null?void 0:e.discord_match_field));if(t)return t;const r=String((e==null?void 0:e.match_reason)||"").toLowerCase();if(r.includes("discord_username")||r.includes("username"))return"Username";if(r.includes("discord_display_name")||r.includes("global")||r.includes("display"))return"Global Name";if(r.includes("discord_server_nickname")||r.includes("server")||r.includes("nickname"))return"Server Nickname";const n=String((e==null?void 0:e.link_method)||"").trim().toLowerCase();if(n==="exact"||n==="fuzzy"){const s=(e==null?void 0:e.eso_account_name)||"",i=[{field:"Username",value:e==null?void 0:e.discord_username},{field:"Global Name",value:e==null?void 0:e.discord_display_name},{field:"Server Nickname",value:e==null?void 0:e.discord_server_nickname}];let o=null;for(const d of i){const f=Ia(s,d.value);(!o||f>o.score)&&(o={...d,score:f})}if(o&&o.score>0)return o.field}return""}function H(e){return String(e||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function Ia(e,t){const r=H(e),n=H(t);if(!r||!n)return 0;if(r===n)return 100;if((r.includes(n)||n.includes(r))&&Math.min(r.length,n.length)>=4)return 88;const s=Math.abs(r.length-n.length),i=[...r].findIndex((d,f)=>d!==n[f]),o=i===-1?Math.min(r.length,n.length):i;return Math.max(0,Math.min(75,Math.round(o*10-s*3)))}function qa(e){const t=String(e||"").trim().toLowerCase();return t==="blocked"||t==="unlinked"?"unlinked":t||"unlinked"}function Pa(e){const t=String(e||"").trim().toLowerCase();return t==="manual_unlink"?"auto-link disabled":t||"none"}function Fa(e){var f;const t=e.discord_server_nickname||e.discord_display_name||e.discord_username||e.discord_user_id||"",r=Number(e.locked||0)===1?"Auto-link blocked":"Auto-managed",n=String(e.link_status||"").trim().toLowerCase(),s=n==="linked",i=n==="candidate",o=s?"Current Link":i?"Suggested Link":"Blocked Link",d=s?`<button
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
        <div><span>Status:</span> ${a(qa(e.link_status))} \xB7 ${a(Pa(e.link_method))} \xB7 ${a(String((f=e.match_confidence)!=null?f:""))}% \xB7 ${a(r)}</div>
        ${xt(e)?`<div><span>Matched:</span> Matched on ${a(xt(e))}</div>`:""}
      </div>
      ${d}
    </div>
  `}function Ua(){const e=Vr();return e.length?[...e].sort((r,n)=>{var f,m;const s=String(r.link_status||"").trim().toLowerCase(),i=String(n.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},d=((f=o[s])!=null?f:9)-((m=o[i])!=null?m:9);return d!==0?d:Number(n.match_confidence||0)-Number(r.match_confidence||0)}).map(r=>Fa(r)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function Ga(){if(Te)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(Z)return`<div class="discord-data-error">${a(Z)}</div>`;if(!Array.isArray(ve)||ve.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const e=new Set(Vr().map(r=>Ba(r))),t=[...ve].filter(r=>{const n=(v==null?void 0:v.mode)==="discord-to-eso"?`${Ae(r.account_name)}::${String(v.discordUserId||"").trim()}`:`${Ae(v==null?void 0:v.esoAccountName)}::${String(r.discord_id||"").trim()}`;return!e.has(n)}).sort((r,n)=>{const s=Number(n.confidence||0)-Number(r.confidence||0);return s!==0?s:bn(r).localeCompare(bn(n),void 0,{sensitivity:"base"})});return t.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${t.map(r=>Va(r)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function bn(e){return((v==null?void 0:v.mode)||"")==="discord-to-eso"?String(e.account_name||""):String(e.server_nickname||e.global_name||e.username||e.discord_id||"")}function Va(e,t={}){var b;const r=(v==null?void 0:v.mode)||"",n=r==="discord-to-eso"?e.account_name:e.server_nickname||e.global_name||e.username||e.discord_id||"Discord member",s=ws(e.matchField||e.match_field||e.discordMatchField||e.discord_match_field),i=r==="discord-to-eso"?`Rank: ${e.rank||""}`:[e.username,e.global_name,e.server_nickname].filter(Boolean).join(" \xB7 "),o=[i,s?`Matched on ${s}`:""].filter(Boolean).join(" \u2022 "),d=r==="discord-to-eso"?e.account_name:e.discord_id,f=t.disabled===!0,m=[n,i,o,e.account_name,e.username,e.global_name,e.server_nickname,e.discord_id].filter(Boolean).join(" ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${u(d||"")}" data-member-link-option-search="${u(m)}" ${f?"disabled":""}>
      <span class="member-link-option-name">${a(n||"")}</span>
      <span class="member-link-option-subtitle">${a(o||"")}</span>
      <span class="member-link-option-confidence">${a(String((b=e.confidence)!=null?b:0))}%</span>
    </button>
  `}function Wa(){const e=(v==null?void 0:v.mode)||"",t=Oa(),r=e==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
            ${Ua()}
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
              value="${u(dt)}"
            />
            ${Ga()}
          </section>
        </div>

      </div>
    </div>
  `}async function _s(e,t){if(!(c!=null&&c.connected)||!E()){h("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:p});return}fe=!0,v=e==="discord-to-eso"?{mode:e,discordUserId:t}:{mode:"eso-to-discord",esoAccountName:t},ve=[],Te=!0,Z="",dt="",U=-1,l();try{if(!Array.isArray(S)||S.length===0){const s=await _("guildsync:request-member-links",{},3e4);s!=null&&s.ok&&(S=Array.isArray(s.links)?s.links:[])}const n=await _("guildsync:request-member-link-options",e==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:t}:{mode:"eso-to-discord",accountName:t},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load link suggestions.");ve=Array.isArray(n.options)?n.options:[]}catch(r){Z=k(r)}finally{Te=!1,l()}}function Be(){document.removeEventListener("keydown",Rr),fe=!1,v=null,ve=[],Te=!1,Z="",dt="",U=-1,l()}function As(){return[...document.querySelectorAll(".member-link-option-row")].filter(e=>e.offsetParent!==null&&!e.disabled)}function vn(e){const t=As();if(t.forEach(n=>n.classList.remove("member-link-option-row-active")),t.length===0){U=-1;return}U=Math.max(0,Math.min(e,t.length-1));const r=t[U];r.classList.add("member-link-option-row-active"),r.scrollIntoView({block:"nearest"})}function Ls(){const e=H(dt),t=[...document.querySelectorAll(".member-link-option-row")];let r=0;t.forEach(s=>{const i=H(s.dataset.memberLinkOptionSearch||s.textContent||""),o=!e||i.includes(e);s.hidden=!o,s.classList.remove("member-link-option-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinkSuggestionSearchEmpty");n&&(n.hidden=r!==0),U=-1}function Ha(e){dt=e.target.value||"",Ls()}function za(e){if(e.key==="Enter"){e.preventDefault();return}if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;e.preventDefault();const t=As();if(t.length===0)return;if(e.key==="ArrowDown"){const n=U<0?0:U+1;vn(n>=t.length?t.length-1:n);return}const r=U<0?t.length-1:U-1;vn(r<0?0:r)}function Rr(e){!fe||e.key==="Escape"&&(e.preventDefault(),Be())}async function ja(e){if(!(!v||!e))try{const t=v.mode==="discord-to-eso"?{esoAccountName:e,discordUserId:v.discordUserId}:{esoAccountName:v.esoAccountName,discordUserId:e},r=await _("guildsync:manual-link-member",t,3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to link members.");S=Array.isArray(r.links)?r.links:S,h("member-link-saved",r.message||"Member link saved.",{ttlMs:p}),Be()}catch(t){Z=k(t),l()}}async function Ya(e,t=""){await bs(e,t),Be()}async function Ka(){if(!!v){Te=!0,Z="",l();try{const e=v.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:v.discordUserId}:{mode:"eso-to-discord",accountName:v.esoAccountName},t=await _("guildsync:request-member-link-options",e,3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load link suggestions.");ve=Array.isArray(t.options)?t.options:[]}catch(e){Z=k(e)}finally{Te=!1,l()}}}async function Ja(e="",t=""){const r=Vr().find(s=>Ae(s.eso_account_name)===Ae(e)&&String(s.discord_user_id||"").trim()===String(t||"").trim());if(!(!r||!await es({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const s=await _("guildsync:manual-unlink-member",{esoAccountName:r.eso_account_name,discordUserId:r.discord_user_id},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to unlink member.");S=Array.isArray(s.links)?s.links:S,h("member-link-unlinked",s.message||"Member link removed.",{ttlMs:p}),await Ka()}catch(s){Z=k(s),l()}}function Es(){var r;if(!fe)return;document.removeEventListener("keydown",Rr),document.addEventListener("keydown",Rr),(r=document.querySelector("#closeMemberLinkDialogButton"))==null||r.addEventListener("click",Be);const e=document.querySelector("#memberLinkSuggestionSearchInput");e&&(e.addEventListener("input",Ha),e.addEventListener("keydown",za),Ls()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(n=>{n.addEventListener("click",()=>Ja(n.dataset.unlinkEsoAccount||"",n.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(n=>{n.addEventListener("click",()=>ja(n.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(n=>{n.addEventListener("click",()=>Ya(n.dataset.acceptDialogMemberCandidate||"",n.dataset.acceptDialogDiscordUserId||""))});const t=document.querySelector(".member-link-dialog-overlay");t&&t.addEventListener("click",n=>{n.target===t&&Be()})}function Rs(){var t,r,n;if(!Ie)return;(t=document.querySelector("#closeAssociateTicketReportButton"))==null||t.addEventListener("click",_r),(r=document.querySelector("#rerunAssociateTicketReportButton"))==null||r.addEventListener("click",()=>Cs()),(n=document.querySelector("#copyAssociateTicketReportGridButton"))==null||n.addEventListener("click",()=>ca());const e=document.querySelector(".report-results-overlay");e&&e.addEventListener("click",s=>{s.target===e&&_r()})}function Ds(){var t,r,n;if(!Pe)return;(t=document.querySelector("#closeDiscordRankAuditReportButton"))==null||t.addEventListener("click",Ar),(r=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||r.addEventListener("click",()=>Ts()),(n=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||n.addEventListener("click",()=>fa());const e=document.querySelector(".report-results-overlay");e&&e.addEventListener("click",s=>{s.target===e&&Ar()})}function $s(){var r,n,s;if(!Fe)return;(r=document.querySelector("#closeDiscordLastSeenReportButton"))==null||r.addEventListener("click",Lr),(n=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||n.addEventListener("click",()=>Ns()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>wa()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(i=>{i.addEventListener("click",()=>ga(i.dataset.discordLastSeenSort||""))});const e=document.querySelector("#discordLastSeenReportSearchInput");e&&(e.addEventListener("input",Qa),Ms());const t=document.querySelector(".discord-last-seen-report-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Lr()})}function Qa(e){Ue=e.target.value||"",Ms()}function Ms(){const e=H(Ue),t=[...document.querySelectorAll("[data-discord-last-seen-row]")];let r=0;t.forEach(s=>{const i=H(s.dataset.discordLastSeenSearch||s.textContent||""),o=!e||i.includes(e);s.hidden=!o,o&&(r+=1)});const n=document.querySelector("#discordLastSeenReportSearchEmpty");n&&(n.hidden=r!==0)}async function Ns(){if(!(c!=null&&c.connected)||!E()){be="You must be logged in and connected to run this report.",l();return}re=!0,be="",l();try{const e=await _("guildsync:request-discord-member-dataJSON",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load Discord roster data.");T=Kr(e.members),Or=[...T]}catch(e){be=k(e)}finally{re=!1,l(),X("discordLastSeenReportSearchInput")}}async function Ts(){if(!(c!=null&&c.connected)||!E()){ye="You must be logged in and connected to run this report.",l();return}te=!0,ye="",l();try{const e=await _("guildsync:request-discord-rank-audit-report",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to run report.");nt=Array.isArray(e.rows)?e.rows:[]}catch(e){ye=k(e)}finally{te=!1,l()}}async function Cs(){if(!(c!=null&&c.connected)||!E()){ge="You must be logged in and connected to run this report.",l();return}ee=!0,ge="",l();try{const e=await _("guildsync:request-associate-ticket-report",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to run report.");qe=Array.isArray(e.rows)?e.rows:[]}catch(e){ge=k(e)}finally{ee=!1,l()}}function Dr(){const e=String(We||"").trim().toLowerCase();return e?F.filter(t=>String(t.account_name||"").trim()).filter(t=>String(t.account_name||"").toLowerCase().includes(e)).slice().sort((t,r)=>{const n=String(t.account_name||"").toLowerCase(),s=String(r.account_name||"").toLowerCase(),i=n.startsWith(e)?0:1,o=s.startsWith(e)?0:1;return i!==o?i-o:n.localeCompare(s)}).slice(0,20):[]}function kn(e){const t=String(e||"").trim();$.accountName=t,We=t,j="",l(),X("manualTicketAccountSearchInput")}function X(e){window.setTimeout(()=>{const t=document.querySelector(`#${e}`);if(!t)return;t.focus();const r=String(t.value||"").length;typeof t.setSelectionRange=="function"&&t.setSelectionRange(r,r)},0)}function Xa(){const e=Dr(),t=String($.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Bi-Weekly Tickets</h3>
            <p>Add free/manual raffle tickets such as FFTG. These do not count as purchased tickets.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${j?`<div class="discord-data-error">${a(j)}</div>`:""}

        <div class="manual-ticket-form">
          <label class="manual-ticket-member-field">
            <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(We)}" autocomplete="off" />
          </label>

          ${t?`<div class="roster-history-muted">Selected: ${a(t)}</div>`:""}

          <div class="roster-history-match-list manual-ticket-match-list">
            ${e.length===0?'<div class="roster-history-muted">No matching names</div>':e.map((r,n)=>`
                <button class="roster-history-match${n===z||r.account_name===t?" is-selected":""}" type="button" data-manual-ticket-account="${u(r.account_name)}">
                  <span>${a(r.account_name)}</span>
                  <strong>${a(r.rank||"")}</strong>
                  ${n===z?"<small>Enter</small>":""}
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
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${Nt?"disabled":""}>${Nt?"Saving...":"Add Manual Tickets"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Bs(){var s,i,o,d,f;if(!Q)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{Q=!1,l()});const e=document.querySelector("#manualTicketAccountSearchInput");e&&(e.addEventListener("input",m=>{We=m.target.value||"",$.accountName="",z=Dr().length>0?0:-1,l(),X("manualTicketAccountSearchInput")}),e.addEventListener("keydown",m=>{const b=Dr();if(m.key==="ArrowDown"||m.key==="ArrowUp"){if(b.length===0)return;m.preventDefault();const N=m.key==="ArrowDown"?1:-1;z=((z<0?0:z)+N+b.length)%b.length,l(),X("manualTicketAccountSearchInput");return}if(m.key!=="Enter")return;m.preventDefault();const w=b[z>=0?z:0];w!=null&&w.account_name&&kn(w.account_name)})),document.querySelectorAll("[data-manual-ticket-account]").forEach(m=>{m.addEventListener("click",()=>{kn(m.dataset.manualTicketAccount||"")})}),(i=document.querySelector("#manualTicketNoteInput"))==null||i.addEventListener("input",m=>{$.note=m.target.value||""});const t=document.querySelector("#manualTicketCountInput");t==null||t.addEventListener("input",m=>{const b=String(m.target.value||"").replace(/\D/g,"");m.target.value!==b&&(m.target.value=b),$.tickets=b});const r=m=>{const b=Number($.tickets)||0,w=Math.max(1,b+m);$.tickets=String(w),t&&(t.value=$.tickets,t.focus())};(o=document.querySelector("#manualTicketCountUpButton"))==null||o.addEventListener("click",()=>r(1)),(d=document.querySelector("#manualTicketCountDownButton"))==null||d.addEventListener("click",()=>r(-1)),(f=document.querySelector("#saveManualBiweeklyTicketButton"))==null||f.addEventListener("click",()=>Za());const n=document.querySelector(".roster-history-overlay");n&&n.addEventListener("click",m=>{m.target===n&&(Q=!1,l())})}async function Za(){const e=String($.accountName||"").trim(),t=String($.note||"").trim(),r=Number($.tickets);if(!e){j="Choose a guild member.",l();return}if(!t){j="Enter a reason or note.",l();return}if(!Number.isFinite(r)||r<=0){j="Enter the number of tickets to add.",l();return}Nt=!0,j="",l();try{const n=await _("guildsync:add-manual-biweekly-ticket-entry",{account_name:e,note:t,tickets:Math.floor(r)},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to add manual ticket entry.");Q=!1,$={accountName:"",note:"",tickets:""},We="",z=-1,await Jt({silent:!0}),h("manual-ticket-added",n.message||"Manual ticket entry added.",{ttlMs:p})}catch(n){j=k(n)}finally{Nt=!1,l()}}function xs(){const e=document.querySelector("#refreshRosterDataButton");e&&e.addEventListener("click",()=>ut());const t=document.querySelector("#openRosterHistoryButton");t&&t.addEventListener("click",()=>{Ne=!0,J="",l()});const r=document.querySelector("#rosterMemberSearch");r&&(r.addEventListener("input",o=>{Mt=o.target.value||"",vr=o.target.selectionStart,kr=o.target.selectionEnd,R=-1,l({restoreRosterSearchFocus:!0})}),r.addEventListener("keydown",ec)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{jo(o.dataset.rosterSortColumn||"account_name")})});const n=document.querySelector("#rosterRankFilter");n&&n.addEventListener("change",o=>{const d=String(o.target.value||"").trim();d&&(me.add(d),R=-1,l())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const d=o.dataset.removeRosterRankFilter||"";me.delete(d),R=-1,l()})});const s=document.querySelector("#rosterLinkStatusFilter");s&&s.addEventListener("change",o=>{const d=String(o.target.value||"").trim();d&&(Re.add(d),R=-1,l())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const d=o.dataset.removeRosterLinkStatusFilter||"";Re.delete(d),R=-1,l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>_s(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const i=document.querySelector("#clearRosterFiltersButton");i&&i.addEventListener("click",()=>{Mt="",me.clear(),Re.clear(),Y="",M="",R=-1,l()}),tc()}function ec(e){if(e.key!=="ArrowDown"&&e.key!=="ArrowUp"&&e.key!=="Enter")return;if(e.key==="Enter"){e.preventDefault();return}const t=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(t.length===0){R=-1;return}e.preventDefault(),e.key==="ArrowDown"?R=R<0?0:Math.min(R+1,t.length-1):e.key==="ArrowUp"&&(R=R<0?t.length-1:Math.max(R-1,0)),t.forEach((n,s)=>{n.classList.toggle("roster-search-active-row",s===R)});const r=t[R];r&&typeof r.scrollIntoView=="function"&&r.scrollIntoView({block:"nearest",inline:"nearest"})}function tc(){const e=document.querySelector("#closeRosterHistoryButton");e&&e.addEventListener("click",()=>{Ne=!1,l()});const t=document.querySelector("#rosterHistorySearchInput");t&&(t.addEventListener("input",r=>{if(rt=r.target.value||"",P=-1,!rt.trim()){clearTimeout(cr),J="",x=[],ue="",oe=[],ae=!1,l(),X("rosterHistorySearchInput");return}clearTimeout(cr),cr=setTimeout(()=>{rc({auto:!0,keepFocus:!0})},250)}),t.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(x.length===0)return;r.preventDefault();const s=r.key==="ArrowDown"?1:-1;P=((P<0?0:P)+s+x.length)%x.length,l(),X("rosterHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=x[P>=0?P:0];n!=null&&n.account_name&&Sn(n.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(r=>{r.addEventListener("click",()=>{Sn(r.dataset.rosterHistoryAccount||"")})})}async function rc(e={}){const t=rt.trim();if(!t){J="",x=[],P=-1,ue="",oe=[],ae=!1,l(),e.keepFocus&&X("rosterHistorySearchInput");return}ae=!0,J="",x=[],P=-1,ue="",oe=[],l(),e.keepFocus&&X("rosterHistorySearchInput");try{const r=await _("guildsync:request-roster-rank-history",{query:t},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search roster rank history.");x=nc(r.matches),P=x.length>0?0:-1}catch(r){J=k(r)}finally{ae=!1,l(),e.keepFocus&&X("rosterHistorySearchInput")}}async function Sn(e,t={}){const r=String(e||"").trim();if(!!r){ue=r,rt=r,oe=[],ae=!0,J="",l();try{const n=await _("guildsync:request-roster-stream-history",{account_name:r},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster stream history.");oe=sc(n.events)}catch(n){J=k(n)}finally{ae=!1,t.keepLoading||l()}}}function nc(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>({account_name:String(t.account_name||t.accountName||"").trim(),rank:String(t.rank||t.rankName||"").trim()})):[]}function sc(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>{var r,n;return{event_type:String(t.event_type||t.eventType||"").trim(),rank:String(t.rank||t.rankName||"").trim(),timestamp:(n=(r=t.timestamp)!=null?r:t.timestampS)!=null?n:"",officer:String(t.officer||"").trim()}}):[]}function Os(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>{var r;return{account_name:String(t.account_name||t.accountName||"").trim(),rank:String(t.rank||t.rankName||"").trim(),joined:(r=t.joined)!=null?r:""}}).sort((t,r)=>t.account_name.localeCompare(r.account_name)):[]}function ic(e){if(!e)return"Never";const t=new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleString()}function zt(e){const t=Number(e);return t?new Date(t*1e3).toLocaleDateString():""}function Is(e){const t=Number(e);return t?new Date(t*1e3).toLocaleString():""}async function oc(e={}){F=Os(e.members),$t=e.last_refresh||new Date().toISOString(),A==="eso-members"&&l(),h("roster-data-updated",`Roster data updated. Loaded ${F.length} member record${F.length===1?"":"s"}.`,{ttlMs:p})}async function ut(e={}){if(!!(c!=null&&c.connected)){le=!0,l();try{const t=await _("guildsync:request-roster-data",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to retrieve roster data.");F=Os(t.members),$t=t.last_refresh||$t,e.silent||h("roster-data-loaded",`Loaded ${F.length} roster member${F.length===1?"":"s"}.`,{ttlMs:p})}catch(t){h("roster-data-error",k(t),{ttlMs:p})}finally{le=!1,l()}}}async function ac(e={}){var t;if(!!E()){if(!(c!=null&&c.connected)){h("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}le=!0,l();try{const r=await So(e);if(!(r!=null&&r.ok)){h("roster-data-pending",(r==null?void 0:r.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:p});return}const n={local_upload_id:qs(),authenticated_username:He(),authenticated_discord_user_id:((t=g==null?void 0:g.user)==null?void 0:t.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||e.fileName||"",file_path:r.filePath||e.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await Fs(n)}catch(s){throw cc(n),s}await ut({silent:!0})}catch(r){h("roster-data-error",k(r),{ttlMs:p})}finally{le=!1,l()}}}function qs(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Wr(){try{const e=window.localStorage.getItem(Hn),t=e?JSON.parse(e):[];return Array.isArray(t)?t.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Ps(e){window.localStorage.setItem(Hn,JSON.stringify(Array.isArray(e)?e:[]))}function cc(e){const t=String((e==null?void 0:e.local_upload_id)||qs()),r=Wr().filter(n=>(n==null?void 0:n.local_upload_id)!==t);r.push({...e,local_upload_id:t,pending_saved_at:new Date().toISOString()}),Ps(r),h("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function dc(e){const t=Wr().filter(r=>(r==null?void 0:r.local_upload_id)!==e);Ps(t)}async function lc(){if(ar||!(c!=null&&c.connected)||!E())return;const e=Wr();if(e.length!==0){ar=!0;try{for(const t of e){if(!(c!=null&&c.connected)||!E())return;await Fs(t),dc(t.local_upload_id)}}catch(t){h("roster-data-pending-error",`Pending roster upload retry failed: ${k(t)}`,{ttlMs:p})}finally{ar=!1}}}async function Fs(e){if(!(c!=null&&c.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const t=await _("guildsync:sending-roster-data",e,3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const r=await wo(e.file_path||"",e.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return h("roster-data-sent",t.message||"Roster data sent to GuildSync backend.",{ttlMs:p}),t}function uc(){const e=$r(O),t=vc(e),r=O!=="other";return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <span class="discord-last-refresh">Last Refresh: ${a(Qs(Jn))}</span>
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
          ${dr("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${dr("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${dr("other","?","Other","All other deposits")}
        </div>

        ${mc(O)}

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
              ${e.length>0?e.map(n=>kc(n,r)).join(""):Sc(r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${a(Ws(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${r?`<div>Total Tickets Awarded: <strong>${a(Kt(t.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${ke?fc($r(lt)):""}
    </div>
  `}function fc(e){return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${a($e(lt))} Deposits</h3>
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
              ${e.length>0?e.map(t=>hc(t)).join(""):pc()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${a(Gs(e))}</textarea>
      </div>
    </div>
  `}function hc(e){return`
    <tr>
      <td>${a(e.displayName||"")}</td>
      <td>${a(String(Number(e.amount)||0))}</td>
      <td>${a(String(Number(e.ticketAmount)||0))}</td>
      <td>${a(e.note||"")}</td>
    </tr>
  `}function pc(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${a($e(lt))}.</td>
    </tr>
  `}function mc(e){if(e==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const t=Vs(e),r=Hr(e),n=r<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${u($e(e))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${a($e(e))} Raffle Period ${r===0?"(Current)":`(${Math.abs(r)} period${Math.abs(r)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${a(At(t.salesStart))} through ${a(At(t.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${a(At(t.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${n?"":"disabled"} aria-label="Next ${u($e(e))} raffle period">\u203A</button>
    </div>
  `}function dr(e,t,r,n){const s=O===e;return`
    <button class="bank-section-card${s?" active":""}" type="button" data-bank-section="${u(e)}" aria-selected="${s?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${a(t)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${a(r)}</span>
        <span class="bank-section-subtitle">${a(n)}</span>
      </span>
    </button>
  `}function Us(){if(A!=="more")return;document.querySelectorAll("[data-bank-section]").forEach(i=>{i.addEventListener("click",()=>{O=i.dataset.bankSection||"biweekly",l()})}),document.querySelectorAll("[data-bank-export-section]").forEach(i=>{i.addEventListener("click",()=>{lt=(i.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",ke=!0,l()})}),document.querySelectorAll("[data-bank-period-move]").forEach(i=>{i.addEventListener("click",()=>{bc(i.dataset.bankPeriodMove||""),l()})});const e=document.querySelector("#closeBankingExportGridButton");e&&e.addEventListener("click",()=>{ke=!1,l()});const t=document.querySelector("#copyBankingExportGridButton");t&&t.addEventListener("click",()=>gc());const r=document.querySelector(".bank-export-overlay");r&&r.addEventListener("click",i=>{i.target===r&&(ke=!1,l())});const n=document.querySelector("#openManualBiweeklyTicketButton");n&&n.addEventListener("click",async()=>{Q=!0,j="",We=$.accountName||"",F.length===0&&(c==null?void 0:c.connected)&&E()&&await ut({silent:!0}),l()});const s=document.querySelector("#refreshBankingDataButton");s&&s.addEventListener("click",()=>zs({key:"banking"}))}function Gs(e){const t=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const r of e)t.push([r.displayName||"",String(Number(r.amount)||0),String(Number(r.ticketAmount)||0),r.note||""]);return t.map(r=>r.map(jt).join("	")).join(`
`)}function jt(e){return String(e!=null?e:"").replace(/[\t\r\n]+/g," ").trim()}async function Yt(e){var s;const t=String(e!=null?e:"");if((s=navigator.clipboard)!=null&&s.writeText)try{return await navigator.clipboard.writeText(t),!0}catch{}const r=document.createElement("textarea");r.value=t,r.setAttribute("readonly","readonly"),r.style.position="fixed",r.style.left="0",r.style.top="0",r.style.width="1px",r.style.height="1px",r.style.opacity="0",r.style.pointerEvents="none",r.style.zIndex="-1",document.body.appendChild(r),r.focus(),r.select(),r.setSelectionRange(0,r.value.length);let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r)}return n}async function gc(){const e=$r(lt),t=Gs(e);if(await Yt(t)){h("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#bankingExportTsv");n&&(n.focus(),n.select()),h("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:p})}function $r(e){return V.filter(t=>t.type===e).filter(t=>yc(e,t)).sort((t,r)=>(Number(r.time)||0)-(Number(t.time)||0))}function yc(e,t){if(e==="other")return!0;const r=Number(t==null?void 0:t.time)||0;if(r<=0)return!1;const n=Vs(e);return r>=n.salesStart&&r<=n.salesEnd}function Hr(e){return Number(Sr[e])||0}function bc(e){if(O!=="biweekly"&&O!=="monthly")return;const t=Hr(O);if(e==="previous"){Sr[O]=t-1;return}e==="next"&&t<0&&(Sr[O]=t+1)}function Vs(e){const t=Math.floor(Date.now()/1e3),r=e==="monthly",n=r?$o:Do;let s=r?Ro:Eo;for(;s-n>t;)s-=n;for(;s<t;)s+=n;return s+=Hr(e)*n,{salesStart:s-n+1,salesEnd:s,raffleTime:s+Mo}}function vc(e){return e.reduce((t,r)=>(t.amount+=Number(r.amount)||0,t.tickets+=Number(r.ticketAmount)||0,t),{amount:0,tickets:0})}function kc(e,t=!0){return`
    <tr>
      <td>${a(e.note||e.eventId||"")}</td>
      <td>${a(At(e.time))}</td>
      <td>${a(e.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${a(Ws(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${t?`<td><strong class="bank-ticket-amount">${a(Kt(e.ticketAmount))}</strong></td>`:""}
    </tr>
  `}function Sc(e=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${e?"5":"4"}">No ${a($e(O))} deposits found for this ${O==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function $e(e){return e==="biweekly"?"Bi-Weekly":e==="monthly"?"50/50":"Other"}function At(e){const t=Number(e);return!Number.isFinite(t)||t<=0?"Unknown":new Date(t*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Ws(e){return(Number(e)||0).toLocaleString()}function Kt(e){return(Number(e)||0).toLocaleString()}function zr(e){return Array.isArray(e)?e.map(t=>{var n,s,i,o,d,f,m,b,w,N,rr,tn;const r=String((t==null?void 0:t.type)||"other").trim().toLowerCase();return{type:r==="monthly"||r==="biweekly"||r==="other"?r:"other",eventId:String((s=(n=t==null?void 0:t.eventId)!=null?n:t==null?void 0:t.event_id)!=null?s:"").trim(),time:Number((o=(i=t==null?void 0:t.time)!=null?i:t==null?void 0:t.timestamp)!=null?o:0)||0,displayName:String((f=(d=t==null?void 0:t.displayName)!=null?d:t==null?void 0:t.display_name)!=null?f:"").trim(),amount:Number((m=t==null?void 0:t.amount)!=null?m:0)||0,ticketAmount:Number((w=(b=t==null?void 0:t.ticketAmount)!=null?b:t==null?void 0:t.ticket_amount)!=null?w:0)||0,note:String((N=t==null?void 0:t.note)!=null?N:"").trim(),dataSource:String((tn=(rr=t==null?void 0:t.dataSource)!=null?rr:t==null?void 0:t.data_source)!=null?tn:"").trim()}}):[]}function wc(e){const t=new Map;for(const r of V)r.eventId&&t.set(r.eventId,r);for(const r of e)!r.eventId||t.set(r.eventId,r);V=Array.from(t.values()).sort((r,n)=>(Number(n.time)||0)-(Number(r.time)||0))}function Hs(){Jn=new Date().toISOString()}async function _c(e={}){!(e!=null&&e.ok)||(V=zr(e.entries),Hs(),A==="more"&&l(),h("banking-data-updated",`Banking data updated. Loaded ${V.length} deposit record${V.length===1?"":"s"}.`,{ttlMs:p}))}async function Jt(e={}){const t=Boolean(e.silent);if(!(c!=null&&c.connected)){t||h("banking-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}if(!!E()){_e=!0,l();try{const r=await _("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");V=zr(r.entries),Hs(),t||h("banking-data",`Loaded ${V.length} banking deposit record${V.length===1?"":"s"}.`,{ttlMs:p})}catch(r){t||h("banking-data-error",k(r),{ttlMs:p})}finally{_e=!1,l()}}}async function zs(e={}){var t,r;if(!!E()){if(!(c!=null&&c.connected)){h("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}_e=!0,l();try{const n=await vo(e);if(!(n!=null&&n.ok)){h("banking-data-pending",(n==null?void 0:n.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:p});return}const s=zr((t=n==null?void 0:n.data)==null?void 0:t.entries);wc(s);const i=new Date().toISOString(),o={local_upload_id:js(),authenticated_username:He(),authenticated_discord_user_id:((r=g==null?void 0:g.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||e.fileName||"",file_path:n.filePath||e.filePath||"",collected_at:i,data:n.data||{}};try{await Ks(o)}catch(d){throw Ac(o),d}await Jt({silent:!0})}catch(n){h("banking-data-error",k(n),{ttlMs:p})}finally{_e=!1,l()}}}function js(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function jr(){try{const e=window.localStorage.getItem(Wn),t=e?JSON.parse(e):[];return Array.isArray(t)?t.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Ys(e){window.localStorage.setItem(Wn,JSON.stringify(Array.isArray(e)?e:[]))}function Ac(e){const t=String((e==null?void 0:e.local_upload_id)||js()),r=jr().filter(n=>(n==null?void 0:n.local_upload_id)!==t);r.push({...e,local_upload_id:t,pending_saved_at:new Date().toISOString()}),Ys(r),h("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Lc(e){const t=jr().filter(r=>(r==null?void 0:r.local_upload_id)!==e);Ys(t)}async function Ec(){if(or||!(c!=null&&c.connected)||!E())return;const e=jr();if(e.length!==0){or=!0;try{for(const t of e){if(!(c!=null&&c.connected)||!E())return;await Ks(t),Lc(t.local_upload_id)}}catch(t){h("banking-data-pending-error",`Pending banking upload retry failed: ${k(t)}`,{ttlMs:p})}finally{or=!1}}}async function Ks(e){if(!(c!=null&&c.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const t=await _("guildsync:sending-banking-data",e,3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const r=await ko(e.file_path||"",e.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return h("banking-data-sent",t.message||"Banking data sent to GuildSync backend.",{ttlMs:p}),t}function Js(){if(A!=="discord-members")return;const e=document.querySelector("#refreshDiscordDataButton");e&&e.addEventListener("click",()=>Rc());const t=document.querySelector("#discordMemberSearch");t&&t.addEventListener("input",i=>{Dt=i.target.value||"",yr=i.target.selectionStart,br=i.target.selectionEnd,l({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(i=>{i.addEventListener("click",()=>{Cc(i.dataset.discordSortColumn||"username")})});const r=document.querySelector("#discordRoleFilter");r&&r.addEventListener("change",i=>{const o=String(i.target.value||"").trim();o&&(Le.add(o),l())}),document.querySelectorAll("[data-remove-role-filter]").forEach(i=>{i.addEventListener("click",()=>{const o=i.dataset.removeRoleFilter||"";Le.delete(o),l()})});const n=document.querySelector("#discordLinkStatusFilter");n&&n.addEventListener("change",i=>{const o=String(i.target.value||"").trim();o&&(Ee.add(o),l())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(i=>{i.addEventListener("click",()=>{const o=i.dataset.removeDiscordLinkStatusFilter||"";Ee.delete(o),l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(i=>{i.addEventListener("click",()=>_s(i.dataset.openMemberLinkDialog||"",i.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{Dt="",Le.clear(),Ee.clear(),l()})}async function Rc(){var e,t;if(!(c!=null&&c.connected)){h("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:p});return}Rt=!0,l(),h("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const r=await _("guildsync:request-discord-data-refresh",{requested_by:((e=g==null?void 0:g.user)==null?void 0:e.display_name)||((t=g==null?void 0:g.user)==null?void 0:t.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to request Discord data refresh.");h("discord-refresh-requested",r.message||"Discord data refresh completed.",{ttlMs:p}),await Yr({silent:!0})}catch(r){h("discord-refresh-error",k(r),{ttlMs:p})}finally{Rt=!1,l()}}async function Dc(){if(!(c!=null&&c.connected))return;const e=await _("guildsync:request-discord-data-date",{});e!=null&&e.ok&&(Ut=e.value||null)}async function $c(e={}){if(!!(e!=null&&e.ok)){T=Kr(e.members),e.last_refresh&&(Ut=e.last_refresh);try{await Dc()}catch{}A==="discord-members"&&l(),h("discord-data-updated",`Discord data updated. Loaded ${T.length} member record${T.length===1?"":"s"}.`,{ttlMs:p})}}async function Yr(e={}){const t=Boolean(e.silent);if(!(c!=null&&c.connected)){h("discord-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}et=!0,l();try{const[r,n]=await Promise.all([_("guildsync:request-discord-data-date",{}),_("guildsync:request-discord-member-dataJSON",{})]);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord refresh date.");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord member data.");Ut=r.value||null,T=Kr(n.members),t||h("discord-data",`Loaded ${T.length} Discord member record${T.length===1?"":"s"}.`,{ttlMs:p})}catch(r){h("discord-data-error",k(r),{ttlMs:p})}finally{et=!1,l()}}function _(e,t={},r=3e4){return new Promise((n,s)=>{if(!(c!=null&&c.connected)){s(new Error("GuildSync websocket is not connected."));return}let i=!1;const o=window.setTimeout(()=>{i||(i=!0,s(new Error(`${e} timed out.`)))},r);c.emit(e,t,d=>{i||(i=!0,window.clearTimeout(o),n(d))})})}function Kr(e){return Array.isArray(e)?e.map(t=>({discord_id:String((t==null?void 0:t.discord_id)||(t==null?void 0:t.id)||"").trim(),username:String((t==null?void 0:t.username)||"").trim(),global_name:String((t==null?void 0:t.global_name)||"").trim(),server_nickname:String((t==null?void 0:t.server_nickname)||"").trim(),last_seen:String((t==null?void 0:t.last_seen)||(t==null?void 0:t.lastSeen)||"").trim(),last_seen_action:String((t==null?void 0:t.last_seen_action)||(t==null?void 0:t.lastSeenAction)||"").trim(),avatar:String((t==null?void 0:t.avatar)||"").trim(),roles:Array.isArray(t==null?void 0:t.roles)?t.roles.map(Mc).filter(Boolean):[]})).filter(t=>t.discord_id||t.username||t.global_name||t.server_nickname).sort((t,r)=>it(t).localeCompare(it(r),void 0,{sensitivity:"base"})):[]}function Mc(e){var s,i;if(!e||typeof e!="object")return null;const t=String(e.role_id||e.id||"").trim(),r=String(e.role_name||e.name||"Unnamed Role").trim(),n=(i=(s=e.role_color)!=null?s:e.color)!=null?i:null;return{role_id:t,role_name:r||"Unnamed Role",role_color:n}}function Nc(){const e=Dt.trim().toLowerCase(),t=Array.from(Le),r=T.filter(n=>{if(e&&![n.username,n.global_name,n.server_nickname,n.discord_id,...n.roles.map(i=>i.role_name)].join(" ").toLowerCase().includes(e))return!1;if(t.length>0){const s=new Set(n.roles.map(i=>i.role_name));if(!t.every(i=>s.has(i)))return!1}return!!is(Ee,Qo(n))});return Tc(r)}function Tc(e){const t=pe==="desc"?-1:1;return[...e].sort((r,n)=>{const s=wn(r,tt),i=wn(n,tt),o=s.localeCompare(i,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*t:it(r).localeCompare(it(n),void 0,{sensitivity:"base",numeric:!0})})}function wn(e,t){return t==="global_name"?e.global_name||"":t==="server_nickname"?e.server_nickname||"":t==="roles"?(e.roles||[]).map(r=>r.role_name||"").filter(Boolean).sort((r,n)=>r.localeCompare(n,void 0,{sensitivity:"base"})).join(" "):e.username||e.discord_id||""}function Cc(e){const r=new Set(["username","global_name","server_nickname","roles"]).has(e)?e:"username";tt===r?pe=pe==="asc"?"desc":"asc":(tt=r,pe="asc"),l()}function yt(e,t){const r=tt===e,n=pe==="asc"?"ascending":"descending",s=r?pe==="asc"?"\u25B2":"\u25BC":"\u2195";return`
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
  `}function Bc(){const e=document.querySelector("#discordMemberSearch");if(!!e&&(e.focus({preventScroll:!0}),typeof e.setSelectionRange=="function")){const t=Number.isInteger(yr)?yr:e.value.length,r=Number.isInteger(br)?br:t;e.setSelectionRange(t,r)}}function xc(){const e=document.querySelector("#rosterMemberSearch");if(!!e&&(e.focus({preventScroll:!0}),typeof e.setSelectionRange=="function")){const t=Number.isInteger(vr)?vr:e.value.length,r=Number.isInteger(kr)?kr:t;e.setSelectionRange(t,r)}}function Oc(){const e=new Set;for(const t of T)for(const r of t.roles)r.role_name&&e.add(r.role_name);return Array.from(e).sort((t,r)=>t.localeCompare(r,void 0,{sensitivity:"base"}))}function Ic(e){const t=Uc(e),r=it(e),n=e.roles||[];return`
    <tr data-discord-user-id="${u(e.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${t?`<img src="${u(t)}" alt="${u(r)}" />`:`<span>${a(ii(r))}</span>`}
          </div>
          <span>${a(e.username||e.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${a(e.global_name||"")}</td>
      <td>${a(e.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${n.length>0?n.map(s=>Pc(s)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${Ss({mode:"discord-to-eso",discordUserId:e.discord_id})}</td>
    </tr>
  `}function qc(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${a(et?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function Pc(e){const t=Qt(e.role_color),r=Xr(t),n=Qr(t,r);return`
    <span
      class="discord-role-badge"
      title="${u(e.role_name)}"
      style="${n}"
    >${a(e.role_name)}</span>
  `}function Fc(e){const t=Jr(e),r=Qt(t==null?void 0:t.role_color),n=Xr(r),s=Qr(r,n);return`
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
  `}function Jr(e){for(const t of T){const r=t.roles.find(n=>n.role_name===e);if(r)return r}return null}function Qt(e){const t=Number(e);return!Number.isFinite(t)||t<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(t))).toString(16).padStart(6,"0")}`}function Qr(e,t){return[`--role-fill-top: ${_n(e,"#ffffff",.16)}`,`--role-fill-bottom: ${_n(e,"#000000",.1)}`,`--role-fill-glow: ${An(e,.28)}`,`--role-fill-edge: ${An(e,.46)}`,`color: ${t}`].join("; ")}function _n(e,t,r){const n=bt(e)||bt("#64748b"),s=bt(t)||bt("#ffffff"),i=Math.max(0,Math.min(1,Number(r)||0)),o=Math.round(n.red+(s.red-n.red)*i),d=Math.round(n.green+(s.green-n.green)*i),f=Math.round(n.blue+(s.blue-n.blue)*i);return`#${lr(o)}${lr(d)}${lr(f)}`}function bt(e){const t=String(e||"").replace("#","");return/^[0-9a-f]{6}$/i.test(t)?{red:parseInt(t.slice(0,2),16),green:parseInt(t.slice(2,4),16),blue:parseInt(t.slice(4,6),16)}:null}function lr(e){return Math.max(0,Math.min(255,e)).toString(16).padStart(2,"0")}function An(e,t){const r=String(e||"#64748b").replace("#",""),n=/^[0-9a-f]{6}$/i.test(r)?r:"64748b",s=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),o=parseInt(n.slice(4,6),16);return`rgba(${s}, ${i}, ${o}, ${t})`}function Xr(e){const t=String(e||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(t))return"#E5E7EB";const r=parseInt(t.slice(0,2),16),n=parseInt(t.slice(2,4),16),s=parseInt(t.slice(4,6),16);return(r*299+n*587+s*114)/1e3>150?"#0F172A":"#F8FAFC"}function Uc(e){const t=String((e==null?void 0:e.avatar)||"").trim(),r=String((e==null?void 0:e.discord_id)||"").trim();if(!t)return"";if(t.startsWith("http://")||t.startsWith("https://"))return t;if(!r)return"";const n=t.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(t)}.${n}?size=64`}function it(e){return e.server_nickname||e.global_name||e.username||e.discord_id||"Unknown"}function Qs(e){const t=String(e||"").trim();if(!t)return"Not refreshed yet";const r=new Date(t);return Number.isNaN(r.getTime())?t:r.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Lt(){const e=document.querySelector("#discordArea");if(!!e){if(ft(!1),E()){const t=g.user||{},r=He(),n=sd(t),s=ii(r);e.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${n?`<img src="${u(n)}" alt="${u(r)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${a(s)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const i=document.querySelector("#discordAvatarButton");i.addEventListener("contextmenu",o=>{o.preventDefault(),Ln()}),i.addEventListener("click",()=>{Ln()});return}e.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",zc)}}function Ln(){if(ct){ft();return}Hc()}function Gc(e=ie){const t=Array.isArray(e==null?void 0:e.files)?e.files:[],r=String((e==null?void 0:e.directory)||"").trim(),n=Boolean(e==null?void 0:e.watching);return t.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${t.map(s=>{const i=String((s==null?void 0:s.key)||(s==null?void 0:s.fileName)||"").trim(),o=String((s==null?void 0:s.fileName)||"SavedVariables file").trim(),d=String((s==null?void 0:s.filePath)||(r?`${r}\\${o}`:o)).trim(),f=(s==null?void 0:s.enabled)!==!1,m=n&&f,b=`profileFileWatchToggle-${Wc(i||o)}`;return`
          <label class="profile-filewatch-item ${f?"enabled":"disabled"}" title="${u(d)}">
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
  `}function Zr(){var n,s,i;const e=document.querySelector("#discordProfileMenu");if(!e)return;const t=He(),r=((n=g.user)==null?void 0:n.role)||"member";e.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${a(t)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${a(id(r))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${a(Ft)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${ie!=null&&ie.watching?"Active":"Stopped"}</span>
        </div>
        ${Gc()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(s=document.querySelector("#discordLogoutButton"))==null||s.addEventListener("click",jc),(i=document.querySelector("#associateTicketReportButton"))==null||i.addEventListener("click",()=>{ft(!1),as()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",Vc)})}async function Xs(){try{ie=await Pt(),ct&&Zr()}catch(e){h("file-watcher-error",k(e),{ttlMs:p})}}async function Vc(e){var n;const t=e.currentTarget,r=String(((n=t==null?void 0:t.dataset)==null?void 0:n.filewatchKey)||"").trim();if(!!r)try{t.disabled=!0,ie=await bo(r,t.checked),await Me({silent:!0}),ct&&Zr()}catch(s){h("file-watcher-error",k(s),{ttlMs:p}),await Xs()}}function Wc(e){return String(e||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function Hc(){const e=document.querySelector("#discordProfileMenu");!e||(Zr(),e.classList.add("open"),e.setAttribute("aria-hidden","false"),ct=!0,Xs(),setTimeout(()=>{window.addEventListener("click",Zs),window.addEventListener("keydown",ei)},0))}function ft(e=!0){const t=document.querySelector("#discordProfileMenu");t&&(t.classList.remove("open"),t.setAttribute("aria-hidden","true")),ct=!1,e&&(window.removeEventListener("click",Zs),window.removeEventListener("keydown",ei))}function Zs(e){const t=document.querySelector(".discord-profile-wrap");t&&!t.contains(e.target)&&ft()}function ei(e){e.key==="Escape"&&ft()}async function zc(){try{h("auth","Opening Discord login...",{ttlMs:p});const e=await ho();e!=null&&e.status_message&&h("auth",e.status_message,{ttlMs:p}),ce()}catch(e){h("auth-error",k(e),{ttlMs:p}),ce()}}async function jc(){try{g=await mo(),h("auth",g.status_message||"Logged out.",{ttlMs:p}),Qn(),Ze(),await Me()}catch(e){h("auth-error",k(e),{ttlMs:p}),ce()}}function Ze(){const e=g.socket_url||"https://guildsync.perdues.me";Yc(!1);const t={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};g!=null&&g.token&&(t.auth={token:g.token}),c=wt(e,t),c.on("connect",()=>{ce(),ti(),A==="discord-members"&&Yr({silent:!0}),A==="eso-members"&&ut({silent:!0}),A==="more"&&Jt({silent:!0}),Ec(),lc(),Kc()}),c.on("connect_error",()=>{ce(),Ot()}),c.on("disconnect",()=>{ce(),Ot()}),c.on("guildsync:version-status",r=>{Jc(r)}),c.on("guildsync:discord-member-data-updated",r=>{$c(r)}),c.on("guildsync:banking-data-updated",r=>{_c(r)}),c.on("guildsync:roster-data-updated",r=>{oc(r)}),c.on("guildsync:member-links-updated",(r={})=>{Array.isArray(r.links)&&(S=r.links,(A==="discord-members"||A==="eso-members"||A==="settings"||fe)&&l())}),c.on("guildsync:discord-refresh-status",(r={})=>{const n=String(r.message||"").trim();n&&h("discord-refresh-status",n,{ttlMs:p})})}function Yc(e=!0){Ot(),c&&(c.disconnect(),c=null),e&&ce()}function ti(){!(c!=null&&c.connected)||c.emit("guildsync:client-version",{version:Ft})}function Kc(){Ot(),_t=window.setInterval(()=>{ti()},_o)}function Ot(){_t&&(window.clearInterval(_t),_t=null)}function Jc(e){if(!(!e||typeof e!="object")){if(e.update_required){const t=e.latest_version||"unknown";h("version",`GuildSync is out of date. Current version: ${Ft}. Latest version: ${t}.`);return}en("version")}}function h(e,t,r={}){const n=String(e||"").trim(),s=String(t||"").trim();if(!(!n||!s)){if(de.set(n,s),he.has(n)&&(window.clearTimeout(he.get(n)),he.delete(n)),r.ttlMs&&Number(r.ttlMs)>0){const i=window.setTimeout(()=>{en(n)},Number(r.ttlMs));he.set(n,i)}xe()}}function en(e){const t=String(e||"").trim();if(!!t){if(de.delete(t),he.has(t)&&(window.clearTimeout(he.get(t)),he.delete(t)),D===t){er(()=>{D="",xe()});return}xe()}}function xe(){const e=Xt();if(e.length===0){Se?er(ot):ot();return}!Se&&!we&&Zt(e[0])}function Xt(){return Array.from(de.keys())}function ri(){const e=Xt();if(e.length===0)return"";if(!D)return e[0];const t=e.indexOf(D);return t<0?e[0]:e[(t+1)%e.length]}function Zt(e){const t=document.querySelector("#statusMessageTrack");if(!t||!de.has(e)){ot();return}tr();const r=de.get(e);D=e,Se=!0,we=!0,t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent=r,t.style.setProperty("--message-fade-duration",`${jn}ms`),requestAnimationFrame(()=>{t.classList.add("fade-in"),t.addEventListener("animationend",()=>{t.classList.remove("fade-in"),t.style.opacity="1",t.style.transform="translateX(0) translateY(-50%)",we=!1,Qc()},{once:!0})})}function Qc(){const e=Xt();if(!D||!de.has(D)){xe();return}if(e.length<=1){En(!1);return}En(!0)}function En(e){const t=document.querySelector("#statusMessageViewport"),r=document.querySelector("#statusMessageTrack");if(!t||!r)return;const n=Math.max(0,r.scrollWidth-t.clientWidth);if(n<=0){e&&at(()=>{er(()=>{const s=ri();D="",s?Zt(s):ot()})},zn);return}at(()=>{ni(n,e)},Yn)}function ni(e,t){const r=document.querySelector("#statusMessageTrack");if(!r||!D||!de.has(D))return;const n=Math.max(4,Math.ceil(e/Lo));r.style.setProperty("--long-scroll-distance",`${e}px`),r.style.setProperty("--long-scroll-duration",`${n}s`),r.classList.add("long-scroll"),r.addEventListener("animationend",()=>{if(r.classList.remove("long-scroll"),r.style.transform=`translateX(-${e}px) translateY(-50%)`,t){at(()=>{er(()=>{const s=ri();D="",s?Zt(s):ot()})},zn);return}at(()=>{Xc()},Ao)},{once:!0})}function Xc(){const e=document.querySelector("#statusMessageViewport"),t=document.querySelector("#statusMessageTrack");if(!e||!t||!D||!de.has(D))return;if(Xt().length!==1){xe();return}t.classList.remove("long-scroll"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.transform="translateX(0) translateY(-50%)";const n=Math.max(0,t.scrollWidth-e.clientWidth);n<=0||at(()=>{ni(n,!1)},Yn)}function er(e){const t=document.querySelector("#statusMessageTrack");if(tr(),!t||!Se){typeof e=="function"&&e();return}we=!0,t.classList.remove("fade-in","long-scroll"),t.style.setProperty("--message-fade-duration",`${jn}ms`),t.classList.add("fade-out"),t.addEventListener("animationend",()=>{t.classList.remove("fade-out"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",Se=!1,we=!1,typeof e=="function"&&e()},{once:!0})}function ot(){const e=document.querySelector("#statusMessageTrack");tr(),D="",Se=!1,we=!1,e&&(e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent="")}function at(e,t){const r=window.setTimeout(()=>{Qe=Qe.filter(n=>n!==r),e()},t);Qe.push(r)}function tr(){for(const e of Qe)window.clearTimeout(e);Qe=[]}function si(){if(!Se||we||!D)return;const e=D;tr(),Zt(e)}function ce(){const e=document.querySelector("#statusDot");if(!!e){if(e.classList.remove("status-red","status-yellow","status-green"),!(c!=null&&c.connected)){e.classList.add("status-red"),e.title="Websocket not connected";return}if(!E()){e.classList.add("status-yellow"),e.title="Websocket connected. User is not authenticated.";return}e.classList.add("status-green"),e.title=`Websocket connected. Authenticated as ${He()}.`}}async function Me(e={}){try{if(E()){const t=await go();ie=t,!e.silent&&(t==null?void 0:t.message)&&h(t.watching?"file-watcher":"file-watcher-error",t.message,{ttlMs:p});return}ie=await yo(),en("file-watcher")}catch(t){h("file-watcher-error",k(t),{ttlMs:p})}}function Zc(e={}){if(!E())return;const t=String(e.key||e.fileName||"saved-vars-file").trim()||"saved-vars-file",r=String(e.label||"").trim(),n=String(e.fileName||"SavedVariables file").trim()||"SavedVariables file",s=r?`${r} saved variables (${n})`:n;h(`saved-vars-file-updated-${t}`,`${s} has been updated.`,{ttlMs:p}),t.toLowerCase()==="banking"&&ed(e),t.toLowerCase()==="roster"&&td(e)}async function ed(e={}){await zs(e)}async function td(e={}){await ac(e)}function rd(e){!E()||h("file-watcher-error",k(e),{ttlMs:p})}function nd(){je("guildsync-savedvars-file-modified",Zc),je("guildsync-file-watcher-error",rd),je("guildsync-login-complete",async e=>{g=e||{logged_in:!1,allowed:!1},Lt(),Ze(),await Me(),h("auth",g.status_message||`Logged in and authorized as ${He()}.`,{ttlMs:p})}),je("guildsync-login-denied",async e=>{g={logged_in:!1,allowed:!1,status_message:""},Lt(),await Me(),h("auth",e||"Access denied.",{ttlMs:p}),Ze()}),je("guildsync-login-failed",async e=>{g={logged_in:!1,allowed:!1,status_message:""},Lt(),await Me(),h("auth",e||"Login failed.",{ttlMs:p}),Ze()})}function E(){return Boolean((g==null?void 0:g.logged_in)&&(g==null?void 0:g.allowed)&&(g==null?void 0:g.token))}function He(){var e,t;return((e=g.user)==null?void 0:e.display_name)||((t=g.user)==null?void 0:t.username)||"Discord User"}function sd(e){if(!e)return"";if(e.avatar_url)return e.avatar_url;const t=String(e.avatar||"").trim(),r=String(e.discord_user_id||"").trim();if(!t||!r)return"";if(t.startsWith("http://")||t.startsWith("https://"))return t;const n=t.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(t)}.${n}?size=128`}function ii(e){const t=String(e||"").trim().split(/\s+/).filter(Boolean);return t.length===0?"GS":t.length===1?t[0].slice(0,2).toUpperCase():`${t[0][0]}${t[t.length-1][0]}`.toUpperCase()}function id(e){return String(e||"member").replaceAll("_"," ").replace(/\b\w/g,t=>t.toUpperCase())}function od(){Ye&&(Ye.disconnect(),Ye=null);const e=document.querySelector(".main-window")||document.querySelector("#app");if(!e||typeof ResizeObserver>"u")return;let t=Math.round(e.getBoundingClientRect().width),r=Math.round(e.getBoundingClientRect().height);Ye=new ResizeObserver(n=>{const s=n[0];if(!s)return;const i=Math.round(s.contentRect.width),o=Math.round(s.contentRect.height);i===t&&o===r||(t=i,r=o,oi(),si())}),Ye.observe(e)}function oi(){clearTimeout(an),an=setTimeout(async()=>{try{await Vn()}catch{}},500)}function k(e){return e?typeof e=="string"?e:e.message||String(e):"Unknown error."}function a(e){return String(e!=null?e:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function u(e){return a(e)}nd();No();
