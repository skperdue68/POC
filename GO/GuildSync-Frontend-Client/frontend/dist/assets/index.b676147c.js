(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const ii="/assets/splash.ea386b6a.png",oi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",ai="/assets/GuildSync-Graphic.9169020d.png",W=Object.create(null);W.open="0";W.close="1";W.ping="2";W.pong="3";W.message="4";W.upgrade="5";W.noop="6";const kt=Object.create(null);Object.keys(W).forEach(e=>{kt[W[e]]=e});const lr={type:"error",data:"parser error"},Ln=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Rn=typeof ArrayBuffer=="function",En=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,$r=({type:e,data:t},r,n)=>Ln&&t instanceof Blob?r?n(t):en(t,n):Rn&&(t instanceof ArrayBuffer||En(t))?r?n(t):en(new Blob([t]),n):n(W[e]+(t||"")),en=(e,t)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];t("b"+(n||""))},r.readAsDataURL(e)};function tn(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let rr;function ci(e,t){if(Ln&&e.data instanceof Blob)return e.data.arrayBuffer().then(tn).then(t);if(Rn&&(e.data instanceof ArrayBuffer||En(e.data)))return t(tn(e.data));$r(e,!1,r=>{rr||(rr=new TextEncoder),t(rr.encode(r))})}const rn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Qe=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<rn.length;e++)Qe[rn.charCodeAt(e)]=e;const di=e=>{let t=e.length*.75,r=e.length,n,s=0,i,o,l,f;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const m=new ArrayBuffer(t),v=new Uint8Array(m);for(n=0;n<r;n+=4)i=Qe[e.charCodeAt(n)],o=Qe[e.charCodeAt(n+1)],l=Qe[e.charCodeAt(n+2)],f=Qe[e.charCodeAt(n+3)],v[s++]=i<<2|o>>4,v[s++]=(o&15)<<4|l>>2,v[s++]=(l&3)<<6|f&63;return m},li=typeof ArrayBuffer=="function",Mr=(e,t)=>{if(typeof e!="string")return{type:"message",data:Dn(e,t)};const r=e.charAt(0);return r==="b"?{type:"message",data:ui(e.substring(1),t)}:kt[r]?e.length>1?{type:kt[r],data:e.substring(1)}:{type:kt[r]}:lr},ui=(e,t)=>{if(li){const r=di(e);return Dn(r,t)}else return{base64:!0,data:e}},Dn=(e,t)=>{switch(t){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},$n=String.fromCharCode(30),fi=(e,t)=>{const r=e.length,n=new Array(r);let s=0;e.forEach((i,o)=>{$r(i,!1,l=>{n[o]=l,++s===r&&t(n.join($n))})})},hi=(e,t)=>{const r=e.split($n),n=[];for(let s=0;s<r.length;s++){const i=Mr(r[s],t);if(n.push(i),i.type==="error")break}return n};function pi(){return new TransformStream({transform(e,t){ci(e,r=>{const n=r.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const i=new DataView(s.buffer);i.setUint8(0,126),i.setUint16(1,n)}else{s=new Uint8Array(9);const i=new DataView(s.buffer);i.setUint8(0,127),i.setBigUint64(1,BigInt(n))}e.data&&typeof e.data!="string"&&(s[0]|=128),t.enqueue(s),t.enqueue(r)})}})}let nr;function mt(e){return e.reduce((t,r)=>t+r.length,0)}function gt(e,t){if(e[0].length===t)return e.shift();const r=new Uint8Array(t);let n=0;for(let s=0;s<t;s++)r[s]=e[0][n++],n===e[0].length&&(e.shift(),n=0);return e.length&&n<e[0].length&&(e[0]=e[0].slice(n)),r}function mi(e,t){nr||(nr=new TextDecoder);const r=[];let n=0,s=-1,i=!1;return new TransformStream({transform(o,l){for(r.push(o);;){if(n===0){if(mt(r)<1)break;const f=gt(r,1);i=(f[0]&128)===128,s=f[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(mt(r)<2)break;const f=gt(r,2);s=new DataView(f.buffer,f.byteOffset,f.length).getUint16(0),n=3}else if(n===2){if(mt(r)<8)break;const f=gt(r,8),m=new DataView(f.buffer,f.byteOffset,f.length),v=m.getUint32(0);if(v>Math.pow(2,53-32)-1){l.enqueue(lr);break}s=v*Math.pow(2,32)+m.getUint32(4),n=3}else{if(mt(r)<s)break;const f=gt(r,s);l.enqueue(Mr(i?f:nr.decode(f),t)),n=0}if(s===0||s>e){l.enqueue(lr);break}}}})}const Mn=4;function R(e){if(e)return gi(e)}function gi(e){for(var t in R.prototype)e[t]=R.prototype[t];return e}R.prototype.on=R.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};R.prototype.once=function(e,t){function r(){this.off(e,r),t.apply(this,arguments)}return r.fn=t,this.on(e,r),this};R.prototype.off=R.prototype.removeListener=R.prototype.removeAllListeners=R.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+e];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var n,s=0;s<r.length;s++)if(n=r[s],n===t||n.fn===t){r.splice(s,1);break}return r.length===0&&delete this._callbacks["$"+e],this};R.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),r=this._callbacks["$"+e],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,s=r.length;n<s;++n)r[n].apply(this,t)}return this};R.prototype.emitReserved=R.prototype.emit;R.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};R.prototype.hasListeners=function(e){return!!this.listeners(e).length};const It=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,r)=>r(t,0))(),B=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),yi="arraybuffer";function Nn(e,...t){return t.reduce((r,n)=>(e.hasOwnProperty(n)&&(r[n]=e[n]),r),{})}const bi=B.setTimeout,vi=B.clearTimeout;function Pt(e,t){t.useNativeTimers?(e.setTimeoutFn=bi.bind(B),e.clearTimeoutFn=vi.bind(B)):(e.setTimeoutFn=B.setTimeout.bind(B),e.clearTimeoutFn=B.clearTimeout.bind(B))}const ki=1.33;function Si(e){return typeof e=="string"?wi(e):Math.ceil((e.byteLength||e.size)*ki)}function wi(e){let t=0,r=0;for(let n=0,s=e.length;n<s;n++)t=e.charCodeAt(n),t<128?r+=1:t<2048?r+=2:t<55296||t>=57344?r+=3:(n++,r+=4);return r}function Tn(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function _i(e){let t="";for(let r in e)e.hasOwnProperty(r)&&(t.length&&(t+="&"),t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t}function Ai(e){let t={},r=e.split("&");for(let n=0,s=r.length;n<s;n++){let i=r[n].split("=");t[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return t}class Li extends Error{constructor(t,r,n){super(t),this.description=r,this.context=n,this.type="TransportError"}}class Nr extends R{constructor(t){super(),this.writable=!1,Pt(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,r,n){return super.emitReserved("error",new Li(t,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const r=Mr(t,this.socket.binaryType);this.onPacket(r)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,r={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const r=_i(t);return r.length?"?"+r:""}}class Ri extends Nr{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const r=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};hi(t,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,fi(t,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=Tn()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(t,r)}}let Cn=!1;try{Cn=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Ei=Cn;function Di(){}class $i extends Ri{constructor(t){if(super(t),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,r){const n=this.request({method:"POST",data:t});n.on("success",r),n.on("error",(s,i)=>{this.onError("xhr post error",s,i)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=t}}class G extends R{constructor(t,r,n){super(),this.createRequest=t,Pt(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const r=Nn(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=G.requestsCount++,G.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Di,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete G.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}G.requestsCount=0;G.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",nn);else if(typeof addEventListener=="function"){const e="onpagehide"in B?"pagehide":"unload";addEventListener(e,nn,!1)}}function nn(){for(let e in G.requests)G.requests.hasOwnProperty(e)&&G.requests[e].abort()}const Mi=function(){const e=Bn({xdomain:!1});return e&&e.responseType!==null}();class Ni extends $i{constructor(t){super(t);const r=t&&t.forceBase64;this.supportsBinary=Mi&&!r}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new G(Bn,this.uri(),t)}}function Bn(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||Ei))return new XMLHttpRequest}catch{}if(!t)try{return new B[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const xn=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Ti extends Nr{get name(){return"websocket"}doOpen(){const t=this.uri(),r=this.opts.protocols,n=xn?{}:Nn(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,r,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],s=r===t.length-1;$r(n,this.supportsBinary,i=>{try{this.doWrite(n,i)}catch{}s&&It(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=Tn()),this.supportsBinary||(r.b64=1),this.createUri(t,r)}}const sr=B.WebSocket||B.MozWebSocket;class Ci extends Ti{createSocket(t,r,n){return xn?new sr(t,r,n):r?new sr(t,r):new sr(t)}doWrite(t,r){this.ws.send(r)}}class Bi extends Nr{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const r=mi(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(r).getReader(),s=pi();s.readable.pipeTo(t.writable),this._writer=s.writable.getWriter();const i=()=>{n.read().then(({done:l,value:f})=>{l||(this.onPacket(f),i())}).catch(l=>{})};i();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],s=r===t.length-1;this._writer.write(n).then(()=>{s&&It(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const xi={websocket:Ci,webtransport:Bi,polling:Ni},Oi=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,qi=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function ur(e){if(e.length>8e3)throw"URI too long";const t=e,r=e.indexOf("["),n=e.indexOf("]");r!=-1&&n!=-1&&(e=e.substring(0,r)+e.substring(r,n).replace(/:/g,";")+e.substring(n,e.length));let s=Oi.exec(e||""),i={},o=14;for(;o--;)i[qi[o]]=s[o]||"";return r!=-1&&n!=-1&&(i.source=t,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=Ii(i,i.path),i.queryKey=Pi(i,i.query),i}function Ii(e,t){const r=/\/{2,9}/g,n=t.replace(r,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Pi(e,t){const r={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,i){s&&(r[s]=i)}),r}const fr=typeof addEventListener=="function"&&typeof removeEventListener=="function",St=[];fr&&addEventListener("offline",()=>{St.forEach(e=>e())},!1);class ie extends R{constructor(t,r){if(super(),this.binaryType=yi,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(r=t,t=null),t){const n=ur(t);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=ur(r.host).host);Pt(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const s=n.prototype.name;this.transports.push(s),this._transportsByName[s]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Ai(this.opts.query)),fr&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},St.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const r=Object.assign({},this.opts.query);r.EIO=Mn,r.transport=t,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&ie.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(t);r.open(),this.setTransport(r)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",ie.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=t.data,this._onError(r);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(r+=Si(s)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,It(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,r,n){return this._sendPacket("message",t,r,n),this}send(t,r,n){return this._sendPacket("message",t,r,n),this}_sendPacket(t,r,n,s){if(typeof r=="function"&&(s=r,r=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const i={type:t,data:r,options:n};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),s&&this.once("flush",s),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),t()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(ie.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),fr&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=St.indexOf(this._offlineEventListener);n!==-1&&St.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,r),this.writeBuffer=[],this._prevBufferLen=0}}}ie.protocol=Mn;class Fi extends ie{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let r=this.createTransport(t),n=!1;ie.priorWebsocketSuccess=!1;const s=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",w=>{if(!n)if(w.type==="pong"&&w.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;ie.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(v(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const N=new Error("probe error");N.transport=r.name,this.emitReserved("upgradeError",N)}}))};function i(){n||(n=!0,v(),r.close(),r=null)}const o=w=>{const N=new Error("probe error: "+w);N.transport=r.name,i(),this.emitReserved("upgradeError",N)};function l(){o("transport closed")}function f(){o("socket closed")}function m(w){r&&w.name!==r.name&&i()}const v=()=>{r.removeListener("open",s),r.removeListener("error",o),r.removeListener("close",l),this.off("close",f),this.off("upgrading",m)};r.once("open",s),r.once("error",o),r.once("close",l),this.once("close",f),this.once("upgrading",m),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const r=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&r.push(t[n]);return r}}class Ui extends Fi{constructor(t,r={}){const n=typeof t=="object"?t:r;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(s=>xi[s]).filter(s=>!!s)),super(t,n)}}function Gi(e,t="",r){let n=e;r=r||typeof location<"u"&&location,e==null&&(e=r.protocol+"//"+r.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=r.protocol+e:e=r.host+e),/^(https?|wss?):\/\//.test(e)||(typeof r<"u"?e=r.protocol+"//"+e:e="https://"+e),n=ur(e)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const i=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+i+":"+n.port+t,n.href=n.protocol+"://"+i+(r&&r.port===n.port?"":":"+n.port),n}const Vi=typeof ArrayBuffer=="function",Wi=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,On=Object.prototype.toString,Hi=typeof Blob=="function"||typeof Blob<"u"&&On.call(Blob)==="[object BlobConstructor]",zi=typeof File=="function"||typeof File<"u"&&On.call(File)==="[object FileConstructor]";function Tr(e){return Vi&&(e instanceof ArrayBuffer||Wi(e))||Hi&&e instanceof Blob||zi&&e instanceof File}function wt(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let r=0,n=e.length;r<n;r++)if(wt(e[r]))return!0;return!1}if(Tr(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return wt(e.toJSON(),!0);for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&wt(e[r]))return!0;return!1}function ji(e){const t=[],r=e.data,n=e;return n.data=hr(r,t),n.attachments=t.length,{packet:n,buffers:t}}function hr(e,t){if(!e)return e;if(Tr(e)){const r={_placeholder:!0,num:t.length};return t.push(e),r}else if(Array.isArray(e)){const r=new Array(e.length);for(let n=0;n<e.length;n++)r[n]=hr(e[n],t);return r}else if(typeof e=="object"&&!(e instanceof Date)){const r={};for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=hr(e[n],t));return r}return e}function Yi(e,t){return e.data=pr(e.data,t),delete e.attachments,e}function pr(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let r=0;r<e.length;r++)e[r]=pr(e[r],t);else if(typeof e=="object")for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(e[r]=pr(e[r],t));return e}const qn=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Ki=5;var g;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(g||(g={}));class Ji{constructor(t){this.replacer=t}encode(t){return(t.type===g.EVENT||t.type===g.ACK)&&wt(t)?this.encodeAsBinary({type:t.type===g.EVENT?g.BINARY_EVENT:g.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let r=""+t.type;return(t.type===g.BINARY_EVENT||t.type===g.BINARY_ACK)&&(r+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(r+=t.nsp+","),t.id!=null&&(r+=t.id),t.data!=null&&(r+=JSON.stringify(t.data,this.replacer)),r}encodeAsBinary(t){const r=ji(t),n=this.encodeAsString(r.packet),s=r.buffers;return s.unshift(n),s}}class Cr extends R{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let r;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(t);const n=r.type===g.BINARY_EVENT;n||r.type===g.BINARY_ACK?(r.type=n?g.EVENT:g.ACK,this.reconstructor=new Qi(r),r.attachments===0&&super.emitReserved("decoded",r)):super.emitReserved("decoded",r)}else if(Tr(t)||t.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let r=0;const n={type:Number(t.charAt(0))};if(g[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===g.BINARY_EVENT||n.type===g.BINARY_ACK){const i=r+1;for(;t.charAt(++r)!=="-"&&r!=t.length;);const o=t.substring(i,r);if(o!=Number(o)||t.charAt(r)!=="-")throw new Error("Illegal attachments");const l=Number(o);if(!In(l)||l<0)throw new Error("Illegal attachments");if(l>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=l}if(t.charAt(r+1)==="/"){const i=r+1;for(;++r&&!(t.charAt(r)===","||r===t.length););n.nsp=t.substring(i,r)}else n.nsp="/";const s=t.charAt(r+1);if(s!==""&&Number(s)==s){const i=r+1;for(;++r;){const o=t.charAt(r);if(o==null||Number(o)!=o){--r;break}if(r===t.length)break}n.id=Number(t.substring(i,r+1))}if(t.charAt(++r)){const i=this.tryParse(t.substr(r));if(Cr.isPayloadValid(n.type,i))n.data=i;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,r){switch(t){case g.CONNECT:return Et(r);case g.DISCONNECT:return r===void 0;case g.CONNECT_ERROR:return typeof r=="string"||Et(r);case g.EVENT:case g.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&qn.indexOf(r[0])===-1);case g.ACK:case g.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Qi{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const r=Yi(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Xi(e){return typeof e=="string"}const In=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e};function Zi(e){return e===void 0||In(e)}function Et(e){return Object.prototype.toString.call(e)==="[object Object]"}function eo(e,t){switch(e){case g.CONNECT:return t===void 0||Et(t);case g.DISCONNECT:return t===void 0;case g.EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&qn.indexOf(t[0])===-1);case g.ACK:return Array.isArray(t);case g.CONNECT_ERROR:return typeof t=="string"||Et(t);default:return!1}}function to(e){return Xi(e.nsp)&&Zi(e.id)&&eo(e.type,e.data)}const ro=Object.freeze(Object.defineProperty({__proto__:null,protocol:Ki,get PacketType(){return g},Encoder:Ji,Decoder:Cr,isPacketValid:to},Symbol.toStringTag,{value:"Module"}));function I(e,t,r){return e.on(t,r),function(){e.off(t,r)}}const no=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Pn extends R{constructor(t,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[I(t,"open",this.onopen.bind(this)),I(t,"packet",this.onpacket.bind(this)),I(t,"error",this.onerror.bind(this)),I(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...r){var n,s,i;if(no.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(r.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const o={type:g.EVENT,data:r};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const v=this.ids++,w=r.pop();this._registerAckCallback(v,w),o.id=v}const l=(s=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||s===void 0?void 0:s.writable,f=this.connected&&!(!((i=this.io.engine)===null||i===void 0)&&i._hasPingExpired());return this.flags.volatile&&!l||(f?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(t,r){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[t]=r;return}const i=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let l=0;l<this.sendBuffer.length;l++)this.sendBuffer[l].id===t&&this.sendBuffer.splice(l,1);r.call(this,new Error("operation has timed out"))},s),o=(...l)=>{this.io.clearTimeoutFn(i),r.apply(this,l)};o.withError=!0,this.acks[t]=o}emitWithAck(t,...r){return new Promise((n,s)=>{const i=(o,l)=>o?s(o):n(l);i.withError=!0,r.push(i),this.emit(t,...r)})}_addToQueue(t){let r;typeof t[t.length-1]=="function"&&(r=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((s,...i)=>(this._queue[0],s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(s)):(this._queue.shift(),r&&r(null,...i)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!t||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:g.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case g.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case g.EVENT:case g.BINARY_EVENT:this.onevent(t);break;case g.ACK:case g.BINARY_ACK:this.onack(t);break;case g.DISCONNECT:this.ondisconnect();break;case g.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const r=t.data||[];t.id!=null&&r.push(this.ack(t.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const r=this;let n=!1;return function(...s){n||(n=!0,r.packet({type:g.ACK,id:t,data:s}))}}onack(t){const r=this.acks[t.id];typeof r=="function"&&(delete this.acks[t.id],r.withError&&t.data.unshift(null),r.apply(this,t.data))}onconnect(t,r){this.id=t,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:g.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,t.data)}}}function Pe(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Pe.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),r=Math.floor(t*this.jitter*e);e=(Math.floor(t*10)&1)==0?e-r:e+r}return Math.min(e,this.max)|0};Pe.prototype.reset=function(){this.attempts=0};Pe.prototype.setMin=function(e){this.ms=e};Pe.prototype.setMax=function(e){this.max=e};Pe.prototype.setJitter=function(e){this.jitter=e};class mr extends R{constructor(t,r){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(r=t,t=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,Pt(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Pe({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=t;const s=r.parser||ro;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var r;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(r=this.backoff)===null||r===void 0||r.setMin(t),this)}randomizationFactor(t){var r;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(r=this.backoff)===null||r===void 0||r.setJitter(t),this)}reconnectionDelayMax(t){var r;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(r=this.backoff)===null||r===void 0||r.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new Ui(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=I(r,"open",function(){n.onopen(),t&&t()}),i=l=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",l),t?t(l):this.maybeReconnectOnOpen()},o=I(r,"error",i);if(this._timeout!==!1){const l=this._timeout,f=this.setTimeoutFn(()=>{s(),i(new Error("timeout")),r.close()},l);this.opts.autoUnref&&f.unref(),this.subs.push(()=>{this.clearTimeoutFn(f)})}return this.subs.push(s),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(I(t,"ping",this.onping.bind(this)),I(t,"data",this.ondata.bind(this)),I(t,"error",this.onerror.bind(this)),I(t,"close",this.onclose.bind(this)),I(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(r){this.onclose("parse error",r)}}ondecoded(t){It(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,r){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new Pn(this,t,r),this.nsps[t]=n),n}_destroy(t){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(t){const r=this.encoder.encode(t);for(let n=0;n<r.length;n++)this.engine.write(r[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(s=>{s?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",s)):t.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const je={};function _t(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const r=Gi(e,t.path||"/socket.io"),n=r.source,s=r.id,i=r.path,o=je[s]&&i in je[s].nsps,l=t.forceNew||t["force new connection"]||t.multiplex===!1||o;let f;return l?f=new mr(n,t):(je[s]||(je[s]=new mr(n,t)),f=je[s]),r.query&&!t.query&&(t.query=r.queryKey),f.socket(r.path,t)}Object.assign(_t,{Manager:mr,Socket:Pn,io:_t,connect:_t});function so(){return window.go.main.App.CloseWindow()}function io(e){return window.go.main.App.CollectGuildSyncBankingData(e)}function oo(e){return window.go.main.App.CollectGuildSyncRosterData(e)}function ao(e,t){return window.go.main.App.CommitGuildSyncBankingData(e,t)}function co(e,t){return window.go.main.App.CommitGuildSyncRosterData(e,t)}function lo(){return window.go.main.App.GetGuildSyncFileWatcherStatus()}function uo(){return window.go.main.App.GetGuildSyncSession()}function fo(){return window.go.main.App.LogoutGuildSync()}function ho(){return window.go.main.App.MaximizeWindow()}function po(){return window.go.main.App.MinimizeWindow()}function Fn(){return window.go.main.App.SaveWindowState()}function mo(e,t){return window.go.main.App.SetGuildSyncSavedVarsWatchFileEnabled(e,t)}function go(){return window.go.main.App.ShowMainWindow()}function yo(){return window.go.main.App.StartDiscordLogin()}function bo(){return window.go.main.App.StartGuildSyncFileWatcher()}function vo(){return window.go.main.App.StopGuildSyncFileWatcher()}function ko(e,t,r){return window.runtime.EventsOnMultiple(e,t,r)}function Ye(e,t){return ko(e,t,-1)}function So(e){window.runtime.BrowserOpenURL(e)}const Ft="1.0.3",wo=30*60*1e3,Un="guildsync-pending-banking-uploads",Gn="guildsync-pending-roster-uploads",p=60*1e3,Vn=7e3,Wn=1400,Hn=2400,_o=4e3,Ao=38,zn=document.querySelector("#app");let sn=null,Ke=null,on=!1,dt=!1,At=null,ir=!1,or=!1,oe=null,le=new Map,pe=new Map,D="",we=!1,_e=!1,Xe=[],y={logged_in:!1,allowed:!1,status_message:""},ee={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},c=null,T=[],Ut=null,tt=!1,Dt=!1,$t="",De=new Set,$e=new Set,rt="username",me="asc",gr=null,yr=null,F=[],Mt=null,ue=!1,an=!1,Nt="",br=null,vr=null,ge=new Set,Me=new Set,Y="",M="",E=-1,Be=!1,nt="",x=[],fe="",ae=[],ce=!1,J="",ar=null,P=-1,Fe=!1,Ue=[],te=!1,ye="",Ge=!1,st=[],re=!1,be="",lt=!1,Br=[],ne=!1,ve="",Ve="",Ne="",se="",S=[],C=!1,q="",We=!1,Gt="",K=-1,he=!1,b=null,ke=[],xe=!1,Z="",ut="",U=-1,He=!1,xr=null,Ze=null;const Or=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let V=[],O="biweekly",jn=null,Ae=!1,Se=!1,ft="biweekly",Q=!1,Tt=!1,j="",$={accountName:"",note:"",tickets:""},ze="",z=-1,kr={biweekly:0,monthly:0};const Lo=1780786800,Ro=1781996400,Eo=14*24*60*60,Do=28*24*60*60,$o=60*60,Ct=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let A=Ct[0].id;function Mo(){zn.innerHTML=`
    <main class="splash-screen">
      <img src="${ii}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await go(),await No(),Yn(),et(),await Ce()},5e3)}async function No(){try{y=await uo()}catch(e){y={logged_in:!1,allowed:!1,status_message:""},h("session-error",k(e),{ttlMs:p})}}function Yn(){zn.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${oi}" alt="" class="title-icon" />
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
            <img src="${ai}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${a(Ft)}</div>
            </div>
          </div>
          <div id="desktopUpdateArea" class="desktop-update-area"></div>
          <div id="discordArea" class="discord-area"></div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${Kn()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content" aria-live="polite">
          ${Jn()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await po()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await Fn(),await so()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await ho()}),Rt(),Dr(),Xn(),js(),Ts(),Is(),ns(),Ns(),_s(),As(),Ls(),Rs(),fs(),qo(),de(),Ie(),on||(window.addEventListener("resize",()=>{si(),ri()}),sd(),on=!0)}function Kn(){return Ct.map(e=>{const t=e.id===A;return`
        <button
          class="guildsync-tab${t?" active":""}"
          type="button"
          data-tab-id="${u(e.id)}"
          aria-selected="${t?"true":"false"}"
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${To(e.icon)}</span>
          <span class="guildsync-tab-label">${a(e.label)}</span>
        </button>
      `}).join("")}function To(e){return e==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:e==="swords"?"\u2694":e==="gear"?"\u2699":e==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function Jn(){const e=Ct.find(r=>r.id===A)||Ct[0];let t="";return e.id==="discord-members"?t=Io():e.id==="eso-members"?t=Po():e.id==="more"?t=cc():e.id==="settings"?t=ea():t=`
      <div class="guildsync-tab-panel" data-active-tab="${u(e.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${a(e.label)} content will appear here.
        </div>
      </div>
    `,`
    ${t}
    ${Q?Ka():""}
    ${he?Ua():""}
    ${Fe?ta():""}
    ${Ge?aa():""}
    ${lt?ua():""}
    ${We?Sa():""}
    ${He?Oo():""}
  `}function Co(){return He||Be||Q||he||Fe||Ge||lt||We||Se}function Bo(){return He?!1:We?(Ar(),!0):Ge?(_r(),!0):Fe?(wr(),!0):he?(qe(),!0):Q?(Q=!1,d(),!0):Be?(Be=!1,d(),!0):Se?(Se=!1,d(),!0):!1}function xo(e){e.key==="Escape"&&Bo()&&(e.preventDefault(),e.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",xo,!0),window.guildSyncGlobalModalEscapeAttached=!0);function Qn(e={}){return new Promise(t=>{Ze&&Ze(!1),He=!0,xr={title:e.title||"Confirm Action",message:e.message||"Are you sure?",detail:e.detail||"",confirmLabel:e.confirmLabel||"Confirm",cancelLabel:e.cancelLabel||"Cancel",confirmClass:e.confirmClass||"danger"},Ze=t,d()})}function Bt(e=!1){const t=Ze;Ze=null,He=!1,xr=null,t&&t(e===!0),d()}function Oo(){const e=xr||{};return`
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
  `}function cn(e){var n,s,i,o;const t=(s=(n=e.target).closest)==null?void 0:s.call(n,"#cancelGuildSyncConfirmButton"),r=(o=(i=e.target).closest)==null?void 0:o.call(i,"#acceptGuildSyncConfirmButton");if(!(!t&&!r)){if(e.preventDefault(),e.stopPropagation(),t){Bt(!1);return}r&&Bt(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",cn,!0),document.addEventListener("pointerup",cn,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function qo(){if(!He)return;const e=document.querySelector("#cancelGuildSyncConfirmButton"),t=document.querySelector("#acceptGuildSyncConfirmButton");e&&(e.onclick=n=>{n.preventDefault(),n.stopPropagation(),Bt(!1)}),t&&(t.onclick=n=>{n.preventDefault(),n.stopPropagation(),Bt(!0)});const r=document.querySelector(".guildsync-confirm-overlay");r&&(r.onclick=n=>{n.target===r&&(n.preventDefault(),n.stopPropagation())})}function Xn(){document.querySelectorAll(".guildsync-tab").forEach(e=>{e.addEventListener("click",()=>{if(Co())return;const t=e.dataset.tabId;!t||t===A||(A=t,d())})})}function d(e={}){const t=document.querySelector(".guildsync-tabs"),r=document.querySelector("#guildSyncTabContent");t&&(t.innerHTML=Kn()),r&&(r.innerHTML=Jn()),Xn(),js(),Ts(),Is(),ns(),Ns(),_s(),As(),Ls(),Rs(),fs(),e.restoreDiscordSearchFocus&&Nc(),e.restoreRosterSearchFocus&&Tc(),A==="discord-members"&&(c==null?void 0:c.connected)&&T.length===0&&!tt&&zr({silent:!0}),A==="eso-members"&&(c==null?void 0:c.connected)&&F.length===0&&!ue&&!an&&(an=!0,ht({silent:!0})),A==="more"&&(c==null?void 0:c.connected)&&V.length===0&&!Ae&&Jt({silent:!0}),(A==="discord-members"||A==="eso-members"||A==="settings")&&(c==null?void 0:c.connected)&&S.length===0&&!C&&Vt({silent:!0})}function Io(){const e=Dc(),t=Cc(),r=Array.from(De),n=Array.from($e);return`
    <div class="guildsync-tab-panel discord-member-panel" data-active-tab="discord-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Discord Member Data</h2>
          <p class="discord-data-subtitle">Manage and view Discord member information.</p>
        </div>
        <div class="discord-data-actions">
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${a(Ys(Ut))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${tt||Dt?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Dt?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${u($t)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${t.filter(s=>!De.has(s)).map(s=>`<option value="${u(s)}">${a(s)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All roles</span>':r.map(s=>qc(s)).join("")}
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
              ${Or.filter(s=>!$e.has(s.id)).map(s=>`<option value="${u(s.id)}">${a(s.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(s=>Zn("discord",s)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${bt("username","Username")}
                ${bt("global_name","Global Name")}
                ${bt("server_nickname","Server Nickname")}
                ${bt("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${e.length>0?e.map(s=>Bc(s)).join(""):xc()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `}function Po(){const e=Wo(),t=jo(),r=Array.from(ge),n=Array.from(Me);return`
    <div class="guildsync-tab-panel eso-roster-panel" data-active-tab="eso-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Guild Roster</h2>
          <p class="discord-data-subtitle">Current ESO roster imported from GuildSyncRoster.</p>
        </div>
        <div class="discord-data-actions">
          <span class="discord-last-refresh">Last Refresh: ${a(rc(Mt))}</span>
          <button id="openRosterHistoryButton" class="clear-discord-filters-button" type="button">Lookup Rank Historical Data</button>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${ue?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${ue?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${u(Nt)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${t.filter(s=>!ge.has(s)).map(s=>`<option value="${u(s)}">${a(s)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All ranks</span>':r.map(s=>Yo(s)).join("")}
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
              ${Or.filter(s=>!Me.has(s.id)).map(s=>`<option value="${u(s.id)}">${a(s.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(s=>Zn("roster",s)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${yt("account_name","Account Name")}
                ${yt("rank","Rank")}
                ${yt("joined","Joined")}
                ${yt("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${e.length>0?e.map((s,i)=>Fo(s,i)).join(""):Uo()}
            </tbody>
          </table>
        </div>
      </div>
      ${Be?Qo():""}
    </div>
  `}function Fo(e,t=-1){const r=Go(e.rank||""),n=r?` style="color: ${r};"`:"";return`
    <tr class="eso-roster-row${t===E?" roster-search-active-row":""}"${n} data-roster-row-index="${u(String(t))}" data-eso-account-name="${u(e.account_name||"")}">
      <td>${a(e.account_name||"")}</td>
      <td>${qr(e.rank||"")}</td>
      <td>${a(zt(e.joined))}</td>
      <td class="member-link-action-cell">${bs({mode:"eso-to-discord",esoAccountName:e.account_name})}</td>
    </tr>
  `}function Uo(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">${a(ue?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function Go(e){const t=String(e||"").trim(),r=Yr(t);return Qt(r==null?void 0:r.role_color)}function qr(e){const t=String(e||"").trim();return`<span class="eso-roster-rank-text">${a(t)}</span>`}function Vo(e){const t=String(e||"").trim();return!t||t.toLowerCase()==="unknown"?"":qr(t)}function Wo(){const e=Nt.trim().toLowerCase(),t=F.filter(r=>{const n=String(r.rank||"").trim();if(ge.size>0&&!ge.has(n)||!rs(Me,Sr(r)))return!1;if(!e)return!0;const s=zt(r.joined),i=Bs(r.joined),o=Sr(r),l=ts(r.account_name||"");return[r.account_name,n,s,i,r.joined,o,l].map(m=>String(m||"").toLowerCase()).join(" ").includes(e)});return Ho(t)}function Ho(e){if(!Y||!M)return e;const t=M==="desc"?-1:1;return[...e].sort((r,n)=>{const s=dn(r,Y),i=dn(n,Y),o=s.localeCompare(i,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*t:String(r.account_name||"").localeCompare(String(n.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function dn(e,t){if(t==="rank")return String(e.rank||"");if(t==="joined"){const r=Number(e.joined||0);return Number.isFinite(r)&&r>0?String(r).padStart(16,"0"):""}if(t==="linked"){const r=Sr(e);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[r]||"9"} ${r} ${ts(e.account_name||"")}`}return String(e.account_name||"")}function zo(e){const r=new Set(["account_name","rank","joined","linked"]).has(e)?e:"account_name";Y!==r?(Y=r,M="asc"):M==="asc"?M="desc":M==="desc"?(Y="",M=""):(Y=r,M="asc"),E=-1,d()}function yt(e,t,r=""){const n=Y===e&&Boolean(M),s=n?M==="asc"?"ascending":"descending":"none",i=n?M==="asc"?"\u25B2":"\u25BC":"\u2195";return`
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
  `}function jo(){return Array.from(new Set(F.map(e=>String(e.rank||"").trim()).filter(Boolean))).sort((e,t)=>e.localeCompare(t))}function Yo(e){const t=Yr(e),r=Qt(t==null?void 0:t.role_color),n=Jr(r),s=Kr(r,n);return`
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
  `}function Ko(e){const t=Or.find(r=>r.id===e);return t?t.label:e}function Zn(e,t){const r=e==="roster"?"roster":"discord",n=Ko(t);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${r}-link-status-filter="${u(t)}"
      title="Remove ${u(n)} link filter"
    >
      <span>${a(n)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function es(e){const t=Array.isArray(e)?e.filter(Boolean):e?[e]:[];return t.length===0?"unlinked":t.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked"&&String(r.link_method||"").trim().toLowerCase()==="manual")?"manual":t.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked")?"linked":t.some(r=>String(r.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function Jo(e){return es(Ht(e==null?void 0:e.discord_id))}function Sr(e){return es(Wt(e==null?void 0:e.account_name))}function ts(e){const t=Wt(e),r=ys({mode:"eso-to-discord",esoAccountName:e}),n=t.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked").map(i=>i.discord_server_nickname||i.discord_display_name||i.discord_username||i.discord_user_id||"").filter(Boolean),s=t.filter(i=>String(i.link_status||"").trim().toLowerCase()==="candidate").map(i=>i.discord_server_nickname||i.discord_display_name||i.discord_username||i.discord_user_id||"").filter(Boolean);return[r.label,r.title,n.join(" "),s.join(" ")].filter(Boolean).join(" ")}function rs(e,t){return!e||e.size===0||e.has(t)?!0:t==="manual"&&e.has("linked")}function Qo(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(nt)}" />
        </div>

        ${J?`<div class="discord-data-error">${a(J)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Xo()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${fe?`: ${a(fe)}`:""}</div>
            ${Zo()}
          </div>
        </div>
      </div>
    </div>
  `}function Xo(){return ce&&x.length===0?'<div class="roster-history-muted">Searching...</div>':x.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${x.map((e,t)=>`
        <button class="roster-history-match${t===P||e.account_name===fe?" is-selected":""}" type="button" data-roster-history-account="${u(e.account_name)}">
          <span>${a(e.account_name)}</span>
          <strong>${a(e.rank||"")}</strong>
          ${t===P?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Zo(){return fe?ce&&ae.length===0?'<div class="roster-history-muted">Loading history...</div>':ae.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${ae.map(e=>`
            <tr>
              <td class="roster-history-when-cell">${a(Bs(e.timestamp))}</td>
              <td>${a(e.event_type||"")}</td>
              <td>${Vo(e.rank)}</td>
              <td>${a(e.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function ea(){return`
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
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${te?"disabled":""}>
              ${te?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${re?"disabled":""}>
              ${re?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${ne?"disabled":""}>
              ${ne?"Loading...":"Run"}
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
  `}function ns(){var e,t,r,n;A==="settings"&&((e=document.querySelector("#runAssociateTicketReportButton"))==null||e.addEventListener("click",()=>ss()),(t=document.querySelector("#runDiscordRankAuditReportButton"))==null||t.addEventListener("click",()=>oa()),(r=document.querySelector("#runDiscordLastSeenReportButton"))==null||r.addEventListener("click",()=>la()),(n=document.querySelector("#runMemberLinksReportButton"))==null||n.addEventListener("click",()=>ka()))}function ss(){Fe=!0,ye="",d(),Ms()}function wr(){Fe=!1,ye="",d()}function ta(){const e=ra(),t=na(),r=Ue.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${te?"disabled":""}>${te?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(r))} total row${r===1?"":"s"}</span>
        </div>

        ${ye?`<div class="discord-data-error">${a(ye)}</div>`:""}

        <div class="report-results-content">
          ${te&&r===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!te&&r===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${r>0?ln("Eligible","Linked to Discord and eligible for promotion review.",e,"No linked eligible Associates found."):""}
          ${r>0?ln("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",t,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${a(os())}</textarea>
      </div>
    </div>
  `}function ra(){return Ue.filter(e=>String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible")}function na(){return Ue.filter(e=>String(e.report_group||e.eligibility_group||"").toLowerCase()!=="eligible")}function ln(e,t,r,n){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${a(e)}</h4>
          <p>${a(t)}</p>
        </div>
        <span>${a(String(r.length))} row${r.length===1?"":"s"}</span>
      </div>
      ${r.length>0?sa(r):`<div class="roster-history-muted report-section-empty">${a(n)}</div>`}
    </section>
  `}function sa(e=Ue){return`
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
              <td>${qr(t.rank||"")}</td>
              <td>${a(zt(t.joined))}</td>
              <td>${a(Kt(t.purchased_tickets||0))}</td>
              <td>${a(is(t))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function is(e){return String(e.link_status||"").toLowerCase()==="linked"?e.discord_server_nickname||e.discord_display_name||e.discord_username||e.discord_user_id||"Linked":"Needs Link Review"}function os(){const e=[["Section","Account Name","Rank","Joined","Purchased Tickets","Discord Link"]];for(const t of Ue){const r=String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";e.push([r,t.account_name||"",t.rank||"",zt(t.joined),Kt(t.purchased_tickets||0),is(t)])}return e.map(t=>t.map(jt).join("	")).join(`
`)}async function ia(){const e=os();if(await Yt(e)){h("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#associateTicketReportTsv");r&&(r.focus(),r.select()),h("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function oa(){Ge=!0,be="",d(),$s()}function _r(){Ge=!1,be="",d()}function aa(){const e=st.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${re?"disabled":""}>${re?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(e))} total row${e===1?"":"s"}</span>
        </div>

        ${be?`<div class="discord-data-error">${a(be)}</div>`:""}

        <div class="report-results-content">
          ${re&&e===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!re&&e===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${e>0?ca(st):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${a(ds())}</textarea>
      </div>
    </div>
  `}function ca(e=st){return`
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
              <td>${a(as(t))}</td>
              <td>${a(t.discord_rank||"No matching rank role")}</td>
              <td>${a(t.eso_accounts||"No linked ESO account")}</td>
              <td>${a(t.eso_rank||"None")}</td>
              <td>${a(cs(t))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function as(e){return e.server_nickname||e.global_name||e.username||e.discord_id||""}function cs(e){const t=String(e.issue_type||"").toLowerCase();return t==="no_linked_eso_account"?"No linked ESO account":t==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":t==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":t==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":t||"Review needed"}function ds(){const e=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const t of st)e.push([as(t),t.username||"",t.discord_rank||"No matching rank role",t.discord_rank_roles||"",t.eso_accounts||"No linked ESO account",t.eso_rank||"None",cs(t)]);return e.map(t=>t.map(jt).join("	")).join(`
`)}async function da(){const e=ds();if(await Yt(e)){h("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#discordRankAuditReportTsv");r&&(r.focus(),r.select()),h("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function la(){lt=!0,ve="",Ve="",d(),Ds(),S.length===0&&!C&&Vt({silent:!0})}function un(){lt=!1,ve="",Ve="",Ne="",se="",d()}function ua(){const e=Ir(),t=Br.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${ne?"disabled":""}>${ne?"Loading...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(t))} Discord member${t===1?"":"s"}</span>
        </div>

        <input
          id="discordLastSeenReportSearchInput"
          class="member-links-report-search-input discord-last-seen-search-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="Search Discord member, username, last seen action, or date..."
          value="${u(Ve)}"
        />

        ${ve?`<div class="discord-data-error discord-last-seen-report-error">${a(ve)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${ne&&t===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!ne&&t===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${t>0?fa(e):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${a(us(e))}</textarea>
      </div>
    </div>
  `}function fa(e=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${Je("name","Discord Member")}</th>
            <th>${Je("eso","ESO")}</th>
            <th>${Je("date","Last Seen")}</th>
            <th>${Je("days","Days Since")}</th>
            <th>${Je("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${e.map(t=>`
            <tr class="discord-last-seen-row ${u(ba(t.last_seen))}" data-discord-last-seen-row data-discord-last-seen-search="${u(ls(t))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${ya(t)}
                  <span>${a(Oe(t))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${pa(t)}</td>
              <td>${a(Pr(t.last_seen))}</td>
              <td>${a(Fr(t.last_seen))}</td>
              <td>${a(xt(t.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function Je(e,t){const r=Ne===e,n=r?se==="asc"?"\u25B2":"\u25BC":"\u2195",s=r?`${t}: ${se==="asc"?"ascending":"descending"}`:`${t}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${r?" active":""}" type="button" data-discord-last-seen-sort="${u(e)}" title="${u(s)}">
      <span>${a(t)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${a(n)}</span>
    </button>
  `}function Ir(){const e=[...Br],t=Ne,r=se;if(!t||!r)return e;const n=r==="desc"?-1:1;return e.sort((s,i)=>{var o,l;if(t==="date"){const f=Number(s.last_seen||0)||0,m=Number(i.last_seen||0)||0;return(f-m)*n}if(t==="days")return(fn(s.last_seen)-fn(i.last_seen))*n;if(t==="action")return xt(s.last_seen_action).localeCompare(xt(i.last_seen_action),void 0,{sensitivity:"base"})*n;if(t==="eso"){const f=it(s),m=it(i),v={linked:0,candidate:1,unlinked:2},w=((o=v[f.status])!=null?o:9)-((l=v[m.status])!=null?l:9);return w!==0?w*n:f.esoAccountName.localeCompare(m.esoAccountName,void 0,{sensitivity:"base"})*n}return Oe(s).localeCompare(Oe(i),void 0,{sensitivity:"base"})*n})}function ha(e){Ne!==e?(Ne=e,se="asc"):se==="asc"?se="desc":(Ne="",se=""),d()}function Oe(e){return(e==null?void 0:e.server_nickname)||(e==null?void 0:e.global_name)||(e==null?void 0:e.username)||(e==null?void 0:e.discord_id)||""}function ls(e){return[Oe(e),e==null?void 0:e.server_nickname,e==null?void 0:e.global_name,e==null?void 0:e.username,e==null?void 0:e.discord_id,e==null?void 0:e.last_seen_action,ma(e),Pr(e==null?void 0:e.last_seen),Fr(e==null?void 0:e.last_seen)].filter(Boolean).join(" ")}function it(e){const t=Ma(e==null?void 0:e.discord_id),r=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),n=String((t==null?void 0:t.eso_account_name)||"").trim();return r==="linked"&&n?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:n,title:`Linked ESO account: ${n}`}:(r==="candidate"||String((t==null?void 0:t.link_method)||"").trim().toLowerCase()==="fuzzy")&&n?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:n,title:`Fuzzy ESO account candidate: ${n}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function pa(e){const t=it(e);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${u(t.className)}"
      title="${u(t.title)}"
      aria-label="${u(t.label)}"
      role="img"
    ></span>
  `}function ma(e){const t=it(e);return[t.status,t.label,t.esoAccountName].filter(Boolean).join(" ")}function ga(e){const t=String((e==null?void 0:e.avatar)||"").trim(),r=String((e==null?void 0:e.discord_id)||"").trim();if(!t||!r)return"";if(/^https?:\/\//i.test(t))return t;const n=t.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(t)}.${n}?size=64`}function ya(e){const t=Oe(e),r=t?t.slice(0,2).toUpperCase():"?",n=ga(e);return n?`<span class="discord-member-avatar"><img src="${u(n)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${a(r)}</span>`}function Pr(e){const t=Number(e);if(!t)return"Never";const r=new Date(t*1e3);if(Number.isNaN(r.getTime()))return String(e||"");const n=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(r).reduce((s,i)=>(s[i.type]=i.value,s),{});return`${n.month}/${n.day}/${n.year} ${n.hour}:${n.minute} ${n.dayPeriod}`}function ba(e){const t=Number(e);if(!t)return"discord-last-seen-unknown";const r=(Date.now()-t*1e3)/864e5;return r>30?"discord-last-seen-red":r>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function Fr(e){const t=Number(e);if(!t)return"Never";const r=Date.now()-t*1e3;if(!Number.isFinite(r))return"";if(r<0)return"0 days";const n=Math.floor(r/864e5);return`${n} day${n===1?"":"s"}`}function fn(e){const t=Number(e);if(!t)return Number.POSITIVE_INFINITY;const r=Date.now()-t*1e3;return Number.isFinite(r)?r<0?0:Math.floor(r/864e5):Number.POSITIVE_INFINITY}function xt(e){return String(e||"").trim()||"None tracked"}function us(e=Ir()){const t=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const r of e){const n=it(r);t.push([Oe(r),n.label||"",n.esoAccountName||"",Pr(r==null?void 0:r.last_seen),Fr(r==null?void 0:r.last_seen),xt(r==null?void 0:r.last_seen_action),(r==null?void 0:r.username)||"",(r==null?void 0:r.discord_id)||""])}return t.map(r=>r.map(jt).join("	")).join(`
`)}async function va(){const e=Ir().filter(s=>{const i=H(Ve);return i?H(ls(s)).includes(i):!0}),t=us(e);if(await Yt(t)){h("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#discordLastSeenReportTsv");n&&(n.focus(),n.select()),h("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function ka(){We=!0,q="",d(),S.length===0&&!C&&Vt({silent:!0})}function Ar(){We=!1,Gt="",K=-1,d()}function Sa(){return`
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

        ${q?`<div class="discord-data-error member-links-report-error">${a(q)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${La()}
        </div>
      </div>
    </div>
  `}function fs(){var r,n,s;if(!We)return;(r=document.querySelector("#closeMemberLinksReportButton"))==null||r.addEventListener("click",Ar),(n=document.querySelector("#refreshMemberLinksButton"))==null||n.addEventListener("click",()=>Vt()),(s=document.querySelector("#runMemberAutoLinkButton"))==null||s.addEventListener("click",()=>Da());const e=document.querySelector("#memberLinksReportSearchInput");e&&(e.addEventListener("input",Ra),e.addEventListener("keydown",Ea),ps()),document.querySelectorAll("[data-accept-member-candidate]").forEach(i=>{i.addEventListener("click",()=>ms(i.dataset.acceptMemberCandidate||"",i.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(i=>{i.addEventListener("click",()=>$a(i.dataset.unlinkMemberLink||"",i.dataset.unlinkMemberLinkDiscordId||""))});const t=document.querySelector(".member-links-report-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Ar()})}function hn(e){const t=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),r=String((e==null?void 0:e.link_method)||"").trim().toLowerCase();return t==="candidate"||r==="fuzzy"?0:t==="linked"?2:1}function pn(e){return[e==null?void 0:e.eso_account_name,e==null?void 0:e.discord_server_nickname,e==null?void 0:e.discord_display_name,e==null?void 0:e.discord_username,e==null?void 0:e.discord_user_id].filter(Boolean).join(" ")}function wa(e){return[e==null?void 0:e.eso_account_name,e==null?void 0:e.discord_username,e==null?void 0:e.discord_display_name,e==null?void 0:e.discord_server_nickname,e==null?void 0:e.discord_user_id,e==null?void 0:e.link_status,e==null?void 0:e.link_method,e==null?void 0:e.match_reason,e==null?void 0:e.match_field,Ot(e)].filter(Boolean).join(" ")}function _a(e){return[...Array.isArray(e)?e:[]].sort((t,r)=>{const n=hn(t)-hn(r);if(n!==0)return n;const s=pn(t).localeCompare(pn(r),void 0,{sensitivity:"base"});return s!==0?s:String((t==null?void 0:t.discord_user_id)||"").localeCompare(String((r==null?void 0:r.discord_user_id)||""),void 0,{sensitivity:"base"})})}function Aa(e){const t=Ot(e);let r="";t==="Username"?r=(e==null?void 0:e.discord_username)||"":t==="Global Name"?r=(e==null?void 0:e.discord_display_name)||"":t==="Server Nickname"&&(r=(e==null?void 0:e.discord_server_nickname)||""),r||(r=(e==null?void 0:e.discord_server_nickname)||(e==null?void 0:e.discord_display_name)||(e==null?void 0:e.discord_username)||(e==null?void 0:e.discord_user_id)||"");const n=t?` <span class="member-link-report-match-field">(${a(t)})</span>`:"";return`<span class="member-link-report-discord-name">${a(r)}</span>${n}`}function La(){return C&&S.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(S)||S.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${_a(S).map(t=>{var i;const r=String(t.link_status||"").trim().toLowerCase(),n=String(t.link_method||"").trim().toLowerCase(),s=Aa(t);return`
              <tr data-member-links-report-row data-member-links-report-search="${u(wa(t))}">
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
  `}function hs(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(e=>e.offsetParent!==null)}function mn(e){const t=hs();if(t.forEach(n=>n.classList.remove("member-links-report-row-active")),t.length===0){K=-1;return}K=Math.max(0,Math.min(e,t.length-1));const r=t[K];r.classList.add("member-links-report-row-active"),r.scrollIntoView({block:"nearest"})}function ps(){const e=H(Gt),t=[...document.querySelectorAll("[data-member-links-report-row]")];let r=0;t.forEach(s=>{const i=H(s.dataset.memberLinksReportSearch||s.textContent||""),o=!e||i.includes(e);s.hidden=!o,s.classList.remove("member-links-report-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinksReportSearchEmpty");n&&(n.hidden=r!==0),K=-1}function Ra(e){Gt=e.target.value||"",ps()}function Ea(e){if(e.key==="Enter"){e.preventDefault();return}if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;e.preventDefault();const t=hs();if(t.length===0)return;if(e.key==="ArrowDown"){const n=K<0?0:K+1;mn(n>=t.length?t.length-1:n);return}const r=K<0?t.length-1:K-1;mn(r<0?0:r)}async function Vt(e={}){if(!(c!=null&&c.connected)){q="You must be connected to load member links.",d();return}C=!0,q="",e.silent||d();try{const t=await _("guildsync:request-member-links",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load member links.");S=Array.isArray(t.links)?t.links:[]}catch(t){q=k(t)}finally{C=!1,d()}}async function Da(){if(!(c!=null&&c.connected)||!y.logged_in){q="You must be logged in and connected to run auto-linking.",d();return}C=!0,q="",d();try{const e=await _("guildsync:run-member-auto-linking",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to run auto-linking.");S=Array.isArray(e.links)?e.links:[],h("member-auto-link",e.message||"Member auto-linking complete.",{ttlMs:p})}catch(e){q=k(e)}finally{C=!1,d()}}async function ms(e,t=""){try{const r=await _("guildsync:accept-member-link-candidate",{esoAccountName:e,discordUserId:t},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to accept candidate.");S=Array.isArray(r.links)?r.links:S,h("member-link-accepted",r.message||"Candidate accepted as a link.",{ttlMs:p})}catch(r){q=k(r),h("member-link-accept-error",q,{ttlMs:p})}}async function $a(e,t=""){if(!!await Qn({title:"Unlink Member?",message:`Remove the link between ${e} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const n=await _("guildsync:manual-unlink-member",{esoAccountName:e,discordUserId:t},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to unlink member.");S=Array.isArray(n.links)?n.links:S,h("member-link-unlinked",n.message||"Member link removed.",{ttlMs:p})}catch(n){q=k(n)}d()}}function Le(e){return String(e||"").trim().replace(/^@+/,"").toLowerCase()}function Wt(e){const t=Le(e);return t?S.filter(r=>Le(r.eso_account_name)===t):[]}function Ht(e){const t=String(e||"").trim();return t?S.filter(r=>String(r.discord_user_id||"").trim()===t):[]}function gs(e=[]){const t=Array.isArray(e)?e.filter(Boolean):[];if(t.length===0)return null;const r=t.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked");if(r.length>0){const s=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(s)return s;const i=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return i||r[0]}const n=t.find(s=>String(s.link_status||"").trim().toLowerCase()==="candidate");return n||t[0]}function Ma(e){return gs(Ht(e))}function Na(e){return`${Le(e==null?void 0:e.eso_account_name)}::${String((e==null?void 0:e.discord_user_id)||"").trim()}`}function Ur(){return b?b.mode==="discord-to-eso"?Ht(b.discordUserId):Wt(b.esoAccountName):[]}function Ta(e){const t=String(e||"").trim(),r=T.find(n=>String(n.discord_id||"").trim()===t);return r&&(r.server_nickname||r.global_name||r.username||r.discord_id)||t}function ys(e){const t=(e==null?void 0:e.mode)||"",r=t==="discord-to-eso"?Ht(e.discordUserId):Wt(e.esoAccountName),n=gs(r),s=String((n==null?void 0:n.link_status)||"").trim().toLowerCase(),i=r.filter(l=>String(l.link_status||"").trim().toLowerCase()==="linked").length,o=r.filter(l=>String(l.link_status||"").trim().toLowerCase()==="candidate").length;return i>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${t==="discord-to-eso"?i===1?n.eso_account_name:`${i} ESO accounts`:i===1?n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member":`${i} Discord accounts`}`}:s==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${t==="discord-to-eso"?n.eso_account_name:n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member"}`}:s==="blocked"||Number((n==null?void 0:n.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function bs(e){const t=(e==null?void 0:e.mode)||"",r=t==="discord-to-eso"?e.discordUserId:e.esoAccountName,n=ys(e);return`
    <button
      class="member-link-status-dot member-link-status-${u(n.className)}"
      type="button"
      title="${u(n.title)}"
      aria-label="${u(n.label)}"
      data-open-member-link-dialog="${u(t)}"
      data-member-link-value="${u(r||"")}"
    ></button>
  `}function Ca(){return b?b.mode==="discord-to-eso"?Ta(b.discordUserId):b.esoAccountName||"":""}function vs(e){const t=String(e||"").trim().toLowerCase();return t==="discord_username"||t==="username"?"Username":t==="discord_display_name"||t==="global_name"||t==="display_name"?"Global Name":t==="discord_server_nickname"||t==="server_nickname"||t==="nickname"?"Server Nickname":""}function Ot(e){const t=vs((e==null?void 0:e.match_field)||(e==null?void 0:e.matched_field)||(e==null?void 0:e.discord_match_field));if(t)return t;const r=String((e==null?void 0:e.match_reason)||"").toLowerCase();if(r.includes("discord_username")||r.includes("username"))return"Username";if(r.includes("discord_display_name")||r.includes("global")||r.includes("display"))return"Global Name";if(r.includes("discord_server_nickname")||r.includes("server")||r.includes("nickname"))return"Server Nickname";const n=String((e==null?void 0:e.link_method)||"").trim().toLowerCase();if(n==="exact"||n==="fuzzy"){const s=(e==null?void 0:e.eso_account_name)||"",i=[{field:"Username",value:e==null?void 0:e.discord_username},{field:"Global Name",value:e==null?void 0:e.discord_display_name},{field:"Server Nickname",value:e==null?void 0:e.discord_server_nickname}];let o=null;for(const l of i){const f=Ba(s,l.value);(!o||f>o.score)&&(o={...l,score:f})}if(o&&o.score>0)return o.field}return""}function H(e){return String(e||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function Ba(e,t){const r=H(e),n=H(t);if(!r||!n)return 0;if(r===n)return 100;if((r.includes(n)||n.includes(r))&&Math.min(r.length,n.length)>=4)return 88;const s=Math.abs(r.length-n.length),i=[...r].findIndex((l,f)=>l!==n[f]),o=i===-1?Math.min(r.length,n.length):i;return Math.max(0,Math.min(75,Math.round(o*10-s*3)))}function xa(e){const t=String(e||"").trim().toLowerCase();return t==="blocked"||t==="unlinked"?"unlinked":t||"unlinked"}function Oa(e){const t=String(e||"").trim().toLowerCase();return t==="manual_unlink"?"auto-link disabled":t||"none"}function qa(e){var f;const t=e.discord_server_nickname||e.discord_display_name||e.discord_username||e.discord_user_id||"",r=Number(e.locked||0)===1?"Auto-link blocked":"Auto-managed",n=String(e.link_status||"").trim().toLowerCase(),s=n==="linked",i=n==="candidate",o=s?"Current Link":i?"Suggested Link":"Blocked Link",l=s?`<button
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
        <div><span>Status:</span> ${a(xa(e.link_status))} \xB7 ${a(Oa(e.link_method))} \xB7 ${a(String((f=e.match_confidence)!=null?f:""))}% \xB7 ${a(r)}</div>
        ${Ot(e)?`<div><span>Matched:</span> Matched on ${a(Ot(e))}</div>`:""}
      </div>
      ${l}
    </div>
  `}function Ia(){const e=Ur();return e.length?[...e].sort((r,n)=>{var f,m;const s=String(r.link_status||"").trim().toLowerCase(),i=String(n.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},l=((f=o[s])!=null?f:9)-((m=o[i])!=null?m:9);return l!==0?l:Number(n.match_confidence||0)-Number(r.match_confidence||0)}).map(r=>qa(r)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function Pa(){if(xe)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(Z)return`<div class="discord-data-error">${a(Z)}</div>`;if(!Array.isArray(ke)||ke.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const e=new Set(Ur().map(r=>Na(r))),t=[...ke].filter(r=>{const n=(b==null?void 0:b.mode)==="discord-to-eso"?`${Le(r.account_name)}::${String(b.discordUserId||"").trim()}`:`${Le(b==null?void 0:b.esoAccountName)}::${String(r.discord_id||"").trim()}`;return!e.has(n)}).sort((r,n)=>{const s=Number(n.confidence||0)-Number(r.confidence||0);return s!==0?s:gn(r).localeCompare(gn(n),void 0,{sensitivity:"base"})});return t.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${t.map(r=>Fa(r)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function gn(e){return((b==null?void 0:b.mode)||"")==="discord-to-eso"?String(e.account_name||""):String(e.server_nickname||e.global_name||e.username||e.discord_id||"")}function Fa(e,t={}){var w,N,Ee;const r=(b==null?void 0:b.mode)||"",n=r==="discord-to-eso"?e.account_name:e.server_nickname||e.global_name||e.username||e.discord_id||"Discord member",s=vs(e.matchField||e.match_field||e.discordMatchField||e.discord_match_field),i=r==="discord-to-eso"?`Rank: ${e.rank||""}`:[e.username,e.global_name,e.server_nickname].filter(Boolean).join(" \xB7 "),o=[i,s?`Matched on ${s}`:""].filter(Boolean).join(" \u2022 "),l=r==="discord-to-eso"?e.account_name:e.discord_id,f=t.disabled===!0,m=[n,i,o,e.account_name,e.username,e.global_name,e.server_nickname,e.discord_id].filter(Boolean).join(" "),v=[n,o,`${(w=e.confidence)!=null?w:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${u(l||"")}" data-member-link-option-search="${u(m)}" title="${u(v)}" ${f?"disabled":""}>
      <span class="member-link-option-name" title="${u(n||"")}">${a(n||"")}</span>
      <span class="member-link-option-subtitle" title="${u(o||"")}">${a(o||"")}</span>
      <span class="member-link-option-confidence" title="${u(String((N=e.confidence)!=null?N:0))}%">${a(String((Ee=e.confidence)!=null?Ee:0))}%</span>
    </button>
  `}function Ua(){const e=(b==null?void 0:b.mode)||"",t=Ca(),r=e==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
            ${Ia()}
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
              value="${u(ut)}"
            />
            ${Pa()}
          </section>
        </div>

      </div>
    </div>
  `}async function ks(e,t){if(!(c!=null&&c.connected)||!L()){h("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:p});return}he=!0,b=e==="discord-to-eso"?{mode:e,discordUserId:t}:{mode:"eso-to-discord",esoAccountName:t},ke=[],xe=!0,Z="",ut="",U=-1,d();try{if(!Array.isArray(S)||S.length===0){const s=await _("guildsync:request-member-links",{},3e4);s!=null&&s.ok&&(S=Array.isArray(s.links)?s.links:[])}const n=await _("guildsync:request-member-link-options",e==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:t}:{mode:"eso-to-discord",accountName:t},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load link suggestions.");ke=Array.isArray(n.options)?n.options:[]}catch(r){Z=k(r)}finally{xe=!1,d()}}function qe(){document.removeEventListener("keydown",Lr),he=!1,b=null,ke=[],xe=!1,Z="",ut="",U=-1,d()}function Ss(){return[...document.querySelectorAll(".member-link-option-row")].filter(e=>e.offsetParent!==null&&!e.disabled)}function yn(e){const t=Ss();if(t.forEach(n=>n.classList.remove("member-link-option-row-active")),t.length===0){U=-1;return}U=Math.max(0,Math.min(e,t.length-1));const r=t[U];r.classList.add("member-link-option-row-active"),r.scrollIntoView({block:"nearest"})}function ws(){const e=H(ut),t=[...document.querySelectorAll(".member-link-option-row")];let r=0;t.forEach(s=>{const i=H(s.dataset.memberLinkOptionSearch||s.textContent||""),o=!e||i.includes(e);s.hidden=!o,s.classList.remove("member-link-option-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinkSuggestionSearchEmpty");n&&(n.hidden=r!==0),U=-1}function Ga(e){ut=e.target.value||"",ws()}function Va(e){if(e.key==="Enter"){e.preventDefault();return}if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;e.preventDefault();const t=Ss();if(t.length===0)return;if(e.key==="ArrowDown"){const n=U<0?0:U+1;yn(n>=t.length?t.length-1:n);return}const r=U<0?t.length-1:U-1;yn(r<0?0:r)}function Lr(e){!he||e.key==="Escape"&&(e.preventDefault(),qe())}async function Wa(e){if(!(!b||!e))try{const t=b.mode==="discord-to-eso"?{esoAccountName:e,discordUserId:b.discordUserId}:{esoAccountName:b.esoAccountName,discordUserId:e},r=await _("guildsync:manual-link-member",t,3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to link members.");S=Array.isArray(r.links)?r.links:S,h("member-link-saved",r.message||"Member link saved.",{ttlMs:p}),qe()}catch(t){Z=k(t),d()}}async function Ha(e,t=""){await ms(e,t),qe()}async function za(){if(!!b){xe=!0,Z="",d();try{const e=b.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:b.discordUserId}:{mode:"eso-to-discord",accountName:b.esoAccountName},t=await _("guildsync:request-member-link-options",e,3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load link suggestions.");ke=Array.isArray(t.options)?t.options:[]}catch(e){Z=k(e)}finally{xe=!1,d()}}}async function ja(e="",t=""){const r=Ur().find(s=>Le(s.eso_account_name)===Le(e)&&String(s.discord_user_id||"").trim()===String(t||"").trim());if(!(!r||!await Qn({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const s=await _("guildsync:manual-unlink-member",{esoAccountName:r.eso_account_name,discordUserId:r.discord_user_id},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to unlink member.");S=Array.isArray(s.links)?s.links:S,h("member-link-unlinked",s.message||"Member link removed.",{ttlMs:p}),await za()}catch(s){Z=k(s),d()}}function _s(){var r;if(!he)return;document.removeEventListener("keydown",Lr),document.addEventListener("keydown",Lr),(r=document.querySelector("#closeMemberLinkDialogButton"))==null||r.addEventListener("click",qe);const e=document.querySelector("#memberLinkSuggestionSearchInput");e&&(e.addEventListener("input",Ga),e.addEventListener("keydown",Va),ws()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(n=>{n.addEventListener("click",()=>ja(n.dataset.unlinkEsoAccount||"",n.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(n=>{n.addEventListener("click",()=>Wa(n.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(n=>{n.addEventListener("click",()=>Ha(n.dataset.acceptDialogMemberCandidate||"",n.dataset.acceptDialogDiscordUserId||""))});const t=document.querySelector(".member-link-dialog-overlay");t&&t.addEventListener("click",n=>{n.target===t&&qe()})}function As(){var t,r,n;if(!Fe)return;(t=document.querySelector("#closeAssociateTicketReportButton"))==null||t.addEventListener("click",wr),(r=document.querySelector("#rerunAssociateTicketReportButton"))==null||r.addEventListener("click",()=>Ms()),(n=document.querySelector("#copyAssociateTicketReportGridButton"))==null||n.addEventListener("click",()=>ia());const e=document.querySelector(".report-results-overlay");e&&e.addEventListener("click",s=>{s.target===e&&wr()})}function Ls(){var t,r,n;if(!Ge)return;(t=document.querySelector("#closeDiscordRankAuditReportButton"))==null||t.addEventListener("click",_r),(r=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||r.addEventListener("click",()=>$s()),(n=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||n.addEventListener("click",()=>da());const e=document.querySelector(".report-results-overlay");e&&e.addEventListener("click",s=>{s.target===e&&_r()})}function Rs(){var r,n,s;if(!lt)return;(r=document.querySelector("#closeDiscordLastSeenReportButton"))==null||r.addEventListener("click",un),(n=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||n.addEventListener("click",()=>Ds()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>va()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(i=>{i.addEventListener("click",()=>ha(i.dataset.discordLastSeenSort||""))});const e=document.querySelector("#discordLastSeenReportSearchInput");e&&(e.addEventListener("input",Ya),Es());const t=document.querySelector(".discord-last-seen-report-overlay");t&&t.addEventListener("click",i=>{i.target===t&&un()})}function Ya(e){Ve=e.target.value||"",Es()}function Es(){const e=H(Ve),t=[...document.querySelectorAll("[data-discord-last-seen-row]")];let r=0;t.forEach(s=>{const i=H(s.dataset.discordLastSeenSearch||s.textContent||""),o=!e||i.includes(e);s.hidden=!o,o&&(r+=1)});const n=document.querySelector("#discordLastSeenReportSearchEmpty");n&&(n.hidden=r!==0)}async function Ds(){if(!(c!=null&&c.connected)||!L()){ve="You must be logged in and connected to run this report.",d();return}ne=!0,ve="",d();try{const e=await _("guildsync:request-discord-member-dataJSON",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load Discord roster data.");T=jr(e.members),Br=[...T]}catch(e){ve=k(e)}finally{ne=!1,d(),X("discordLastSeenReportSearchInput")}}async function $s(){if(!(c!=null&&c.connected)||!L()){be="You must be logged in and connected to run this report.",d();return}re=!0,be="",d();try{const e=await _("guildsync:request-discord-rank-audit-report",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to run report.");st=Array.isArray(e.rows)?e.rows:[]}catch(e){be=k(e)}finally{re=!1,d()}}async function Ms(){if(!(c!=null&&c.connected)||!L()){ye="You must be logged in and connected to run this report.",d();return}te=!0,ye="",d();try{const e=await _("guildsync:request-associate-ticket-report",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to run report.");Ue=Array.isArray(e.rows)?e.rows:[]}catch(e){ye=k(e)}finally{te=!1,d()}}function Rr(){const e=String(ze||"").trim().toLowerCase();return e?F.filter(t=>String(t.account_name||"").trim()).filter(t=>String(t.account_name||"").toLowerCase().includes(e)).slice().sort((t,r)=>{const n=String(t.account_name||"").toLowerCase(),s=String(r.account_name||"").toLowerCase(),i=n.startsWith(e)?0:1,o=s.startsWith(e)?0:1;return i!==o?i-o:n.localeCompare(s)}).slice(0,20):[]}function bn(e){const t=String(e||"").trim();$.accountName=t,ze=t,j="",d(),X("manualTicketAccountSearchInput")}function X(e){window.setTimeout(()=>{const t=document.querySelector(`#${e}`);if(!t)return;t.focus();const r=String(t.value||"").length;typeof t.setSelectionRange=="function"&&t.setSelectionRange(r,r)},0)}function Ka(){const e=Rr(),t=String($.accountName||"").trim();return`
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
            <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(ze)}" autocomplete="off" />
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
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${Tt?"disabled":""}>${Tt?"Saving...":"Add Manual Tickets"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Ns(){var s,i,o,l,f;if(!Q)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{Q=!1,d()});const e=document.querySelector("#manualTicketAccountSearchInput");e&&(e.addEventListener("input",m=>{ze=m.target.value||"",$.accountName="",z=Rr().length>0?0:-1,d(),X("manualTicketAccountSearchInput")}),e.addEventListener("keydown",m=>{const v=Rr();if(m.key==="ArrowDown"||m.key==="ArrowUp"){if(v.length===0)return;m.preventDefault();const N=m.key==="ArrowDown"?1:-1;z=((z<0?0:z)+N+v.length)%v.length,d(),X("manualTicketAccountSearchInput");return}if(m.key!=="Enter")return;m.preventDefault();const w=v[z>=0?z:0];w!=null&&w.account_name&&bn(w.account_name)})),document.querySelectorAll("[data-manual-ticket-account]").forEach(m=>{m.addEventListener("click",()=>{bn(m.dataset.manualTicketAccount||"")})}),(i=document.querySelector("#manualTicketNoteInput"))==null||i.addEventListener("input",m=>{$.note=m.target.value||""});const t=document.querySelector("#manualTicketCountInput");t==null||t.addEventListener("input",m=>{const v=String(m.target.value||"").replace(/\D/g,"");m.target.value!==v&&(m.target.value=v),$.tickets=v});const r=m=>{const v=Number($.tickets)||0,w=Math.max(1,v+m);$.tickets=String(w),t&&(t.value=$.tickets,t.focus())};(o=document.querySelector("#manualTicketCountUpButton"))==null||o.addEventListener("click",()=>r(1)),(l=document.querySelector("#manualTicketCountDownButton"))==null||l.addEventListener("click",()=>r(-1)),(f=document.querySelector("#saveManualBiweeklyTicketButton"))==null||f.addEventListener("click",()=>Ja());const n=document.querySelector(".roster-history-overlay");n&&n.addEventListener("click",m=>{m.target===n&&(Q=!1,d())})}async function Ja(){const e=String($.accountName||"").trim(),t=String($.note||"").trim(),r=Number($.tickets);if(!e){j="Choose a guild member.",d();return}if(!t){j="Enter a reason or note.",d();return}if(!Number.isFinite(r)||r<=0){j="Enter the number of tickets to add.",d();return}Tt=!0,j="",d();try{const n=await _("guildsync:add-manual-biweekly-ticket-entry",{account_name:e,note:t,tickets:Math.floor(r)},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to add manual ticket entry.");Q=!1,$={accountName:"",note:"",tickets:""},ze="",z=-1,await Jt({silent:!0}),h("manual-ticket-added",n.message||"Manual ticket entry added.",{ttlMs:p})}catch(n){j=k(n)}finally{Tt=!1,d()}}function Ts(){const e=document.querySelector("#refreshRosterDataButton");e&&e.addEventListener("click",()=>ht());const t=document.querySelector("#openRosterHistoryButton");t&&t.addEventListener("click",()=>{Be=!0,J="",d()});const r=document.querySelector("#rosterMemberSearch");r&&(r.addEventListener("input",o=>{Nt=o.target.value||"",br=o.target.selectionStart,vr=o.target.selectionEnd,E=-1,d({restoreRosterSearchFocus:!0})}),r.addEventListener("keydown",Qa)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{zo(o.dataset.rosterSortColumn||"account_name")})});const n=document.querySelector("#rosterRankFilter");n&&n.addEventListener("change",o=>{const l=String(o.target.value||"").trim();l&&(ge.add(l),E=-1,d())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const l=o.dataset.removeRosterRankFilter||"";ge.delete(l),E=-1,d()})});const s=document.querySelector("#rosterLinkStatusFilter");s&&s.addEventListener("change",o=>{const l=String(o.target.value||"").trim();l&&(Me.add(l),E=-1,d())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const l=o.dataset.removeRosterLinkStatusFilter||"";Me.delete(l),E=-1,d()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>ks(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const i=document.querySelector("#clearRosterFiltersButton");i&&i.addEventListener("click",()=>{Nt="",ge.clear(),Me.clear(),Y="",M="",E=-1,d()}),Xa()}function Qa(e){if(e.key!=="ArrowDown"&&e.key!=="ArrowUp"&&e.key!=="Enter")return;if(e.key==="Enter"){e.preventDefault();return}const t=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(t.length===0){E=-1;return}e.preventDefault(),e.key==="ArrowDown"?E=E<0?0:Math.min(E+1,t.length-1):e.key==="ArrowUp"&&(E=E<0?t.length-1:Math.max(E-1,0)),t.forEach((n,s)=>{n.classList.toggle("roster-search-active-row",s===E)});const r=t[E];r&&typeof r.scrollIntoView=="function"&&r.scrollIntoView({block:"nearest",inline:"nearest"})}function Xa(){const e=document.querySelector("#closeRosterHistoryButton");e&&e.addEventListener("click",()=>{Be=!1,d()});const t=document.querySelector("#rosterHistorySearchInput");t&&(t.addEventListener("input",r=>{if(nt=r.target.value||"",P=-1,!nt.trim()){clearTimeout(ar),J="",x=[],fe="",ae=[],ce=!1,d(),X("rosterHistorySearchInput");return}clearTimeout(ar),ar=setTimeout(()=>{Za({auto:!0,keepFocus:!0})},250)}),t.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(x.length===0)return;r.preventDefault();const s=r.key==="ArrowDown"?1:-1;P=((P<0?0:P)+s+x.length)%x.length,d(),X("rosterHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=x[P>=0?P:0];n!=null&&n.account_name&&vn(n.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(r=>{r.addEventListener("click",()=>{vn(r.dataset.rosterHistoryAccount||"")})})}async function Za(e={}){const t=nt.trim();if(!t){J="",x=[],P=-1,fe="",ae=[],ce=!1,d(),e.keepFocus&&X("rosterHistorySearchInput");return}ce=!0,J="",x=[],P=-1,fe="",ae=[],d(),e.keepFocus&&X("rosterHistorySearchInput");try{const r=await _("guildsync:request-roster-rank-history",{query:t},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search roster rank history.");x=ec(r.matches),P=x.length>0?0:-1}catch(r){J=k(r)}finally{ce=!1,d(),e.keepFocus&&X("rosterHistorySearchInput")}}async function vn(e,t={}){const r=String(e||"").trim();if(!!r){fe=r,nt=r,ae=[],ce=!0,J="",d();try{const n=await _("guildsync:request-roster-stream-history",{account_name:r},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster stream history.");ae=tc(n.events)}catch(n){J=k(n)}finally{ce=!1,t.keepLoading||d()}}}function ec(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>({account_name:String(t.account_name||t.accountName||"").trim(),rank:String(t.rank||t.rankName||"").trim()})):[]}function tc(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>{var r,n;return{event_type:String(t.event_type||t.eventType||"").trim(),rank:String(t.rank||t.rankName||"").trim(),timestamp:(n=(r=t.timestamp)!=null?r:t.timestampS)!=null?n:"",officer:String(t.officer||"").trim()}}):[]}function Cs(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>{var r;return{account_name:String(t.account_name||t.accountName||"").trim(),rank:String(t.rank||t.rankName||"").trim(),joined:(r=t.joined)!=null?r:""}}).sort((t,r)=>t.account_name.localeCompare(r.account_name)):[]}function rc(e){if(!e)return"Never";const t=new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleString()}function zt(e){const t=Number(e);return t?new Date(t*1e3).toLocaleDateString():""}function Bs(e){const t=Number(e);return t?new Date(t*1e3).toLocaleString():""}async function nc(e={}){F=Cs(e.members),Mt=e.last_refresh||new Date().toISOString(),A==="eso-members"&&d(),h("roster-data-updated",`Roster data updated. Loaded ${F.length} member record${F.length===1?"":"s"}.`,{ttlMs:p})}async function ht(e={}){if(!!(c!=null&&c.connected)){ue=!0,d();try{const t=await _("guildsync:request-roster-data",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to retrieve roster data.");F=Cs(t.members),Mt=t.last_refresh||Mt,e.silent||h("roster-data-loaded",`Loaded ${F.length} roster member${F.length===1?"":"s"}.`,{ttlMs:p})}catch(t){h("roster-data-error",k(t),{ttlMs:p})}finally{ue=!1,d()}}}async function sc(e={}){var t;if(!!L()){if(!(c!=null&&c.connected)){h("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}ue=!0,d();try{const r=await oo(e);if(!(r!=null&&r.ok)){h("roster-data-pending",(r==null?void 0:r.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:p});return}const n={local_upload_id:xs(),authenticated_username:Re(),authenticated_discord_user_id:((t=y==null?void 0:y.user)==null?void 0:t.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||e.fileName||"",file_path:r.filePath||e.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await qs(n)}catch(s){throw ic(n),s}await ht({silent:!0})}catch(r){h("roster-data-error",k(r),{ttlMs:p})}finally{ue=!1,d()}}}function xs(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Gr(){try{const e=window.localStorage.getItem(Gn),t=e?JSON.parse(e):[];return Array.isArray(t)?t.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Os(e){window.localStorage.setItem(Gn,JSON.stringify(Array.isArray(e)?e:[]))}function ic(e){const t=String((e==null?void 0:e.local_upload_id)||xs()),r=Gr().filter(n=>(n==null?void 0:n.local_upload_id)!==t);r.push({...e,local_upload_id:t,pending_saved_at:new Date().toISOString()}),Os(r),h("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function oc(e){const t=Gr().filter(r=>(r==null?void 0:r.local_upload_id)!==e);Os(t)}async function ac(){if(or||!(c!=null&&c.connected)||!L())return;const e=Gr();if(e.length!==0){or=!0;try{for(const t of e){if(!(c!=null&&c.connected)||!L())return;await qs(t),oc(t.local_upload_id)}}catch(t){h("roster-data-pending-error",`Pending roster upload retry failed: ${k(t)}`,{ttlMs:p})}finally{or=!1}}}async function qs(e){if(!(c!=null&&c.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const t=await _("guildsync:sending-roster-data",e,3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const r=await co(e.file_path||"",e.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return h("roster-data-sent",t.message||"Roster data sent to GuildSync backend.",{ttlMs:p}),t}function cc(){const e=Er(O),t=gc(e),r=O!=="other";return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <span class="discord-last-refresh">Last Refresh: ${a(Ys(jn))}</span>
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button id="openManualBiweeklyTicketButton" class="bank-export-button" type="button" ${L()?"":'disabled title="Login required to add manual tickets."'}>
            <span aria-hidden="true">\uFF0B</span>
            <span>Add Manual Tickets</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${Ae||!L()?"disabled":""} ${L()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Ae?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${cr("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${cr("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${cr("other","?","Other","All other deposits")}
        </div>

        ${fc(O)}

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
              ${e.length>0?e.map(n=>yc(n,r)).join(""):bc(r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${a(Us(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${r?`<div>Total Tickets Awarded: <strong>${a(Kt(t.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${Se?dc(Er(ft)):""}
    </div>
  `}function dc(e){return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${a(Te(ft))} Deposits</h3>
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
              ${e.length>0?e.map(t=>lc(t)).join(""):uc()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${a(Ps(e))}</textarea>
      </div>
    </div>
  `}function lc(e){return`
    <tr>
      <td>${a(e.displayName||"")}</td>
      <td>${a(String(Number(e.amount)||0))}</td>
      <td>${a(String(Number(e.ticketAmount)||0))}</td>
      <td>${a(e.note||"")}</td>
    </tr>
  `}function uc(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${a(Te(ft))}.</td>
    </tr>
  `}function fc(e){if(e==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const t=Fs(e),r=Vr(e),n=r<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${u(Te(e))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${a(Te(e))} Raffle Period ${r===0?"(Current)":`(${Math.abs(r)} period${Math.abs(r)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${a(Lt(t.salesStart))} through ${a(Lt(t.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${a(Lt(t.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${n?"":"disabled"} aria-label="Next ${u(Te(e))} raffle period">\u203A</button>
    </div>
  `}function cr(e,t,r,n){const s=O===e;return`
    <button class="bank-section-card${s?" active":""}" type="button" data-bank-section="${u(e)}" aria-selected="${s?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${a(t)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${a(r)}</span>
        <span class="bank-section-subtitle">${a(n)}</span>
      </span>
    </button>
  `}function Is(){if(A!=="more")return;document.querySelectorAll("[data-bank-section]").forEach(i=>{i.addEventListener("click",()=>{O=i.dataset.bankSection||"biweekly",d()})}),document.querySelectorAll("[data-bank-export-section]").forEach(i=>{i.addEventListener("click",()=>{ft=(i.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",Se=!0,d()})}),document.querySelectorAll("[data-bank-period-move]").forEach(i=>{i.addEventListener("click",()=>{mc(i.dataset.bankPeriodMove||""),d()})});const e=document.querySelector("#closeBankingExportGridButton");e&&e.addEventListener("click",()=>{Se=!1,d()});const t=document.querySelector("#copyBankingExportGridButton");t&&t.addEventListener("click",()=>hc());const r=document.querySelector(".bank-export-overlay");r&&r.addEventListener("click",i=>{i.target===r&&(Se=!1,d())});const n=document.querySelector("#openManualBiweeklyTicketButton");n&&n.addEventListener("click",async()=>{if(!L()){h("manual-ticket-login-required","Login required to add manual tickets.",{ttlMs:p});return}Q=!0,j="",ze=$.accountName||"",F.length===0&&(c==null?void 0:c.connected)&&L()&&await ht({silent:!0}),d()});const s=document.querySelector("#refreshBankingDataButton");s&&s.addEventListener("click",()=>{if(!L()){h("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:p});return}Vs({key:"banking"})})}function Ps(e){const t=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const r of e)t.push([r.displayName||"",String(Number(r.amount)||0),String(Number(r.ticketAmount)||0),r.note||""]);return t.map(r=>r.map(jt).join("	")).join(`
`)}function jt(e){return String(e!=null?e:"").replace(/[\t\r\n]+/g," ").trim()}async function Yt(e){var s;const t=String(e!=null?e:"");if((s=navigator.clipboard)!=null&&s.writeText)try{return await navigator.clipboard.writeText(t),!0}catch{}const r=document.createElement("textarea");r.value=t,r.setAttribute("readonly","readonly"),r.style.position="fixed",r.style.left="0",r.style.top="0",r.style.width="1px",r.style.height="1px",r.style.opacity="0",r.style.pointerEvents="none",r.style.zIndex="-1",document.body.appendChild(r),r.focus(),r.select(),r.setSelectionRange(0,r.value.length);let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r)}return n}async function hc(){const e=Er(ft),t=Ps(e);if(await Yt(t)){h("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#bankingExportTsv");n&&(n.focus(),n.select()),h("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:p})}function Er(e){return V.filter(t=>t.type===e).filter(t=>pc(e,t)).sort((t,r)=>(Number(r.time)||0)-(Number(t.time)||0))}function pc(e,t){if(e==="other")return!0;const r=Number(t==null?void 0:t.time)||0;if(r<=0)return!1;const n=Fs(e);return r>=n.salesStart&&r<=n.salesEnd}function Vr(e){return Number(kr[e])||0}function mc(e){if(O!=="biweekly"&&O!=="monthly")return;const t=Vr(O);if(e==="previous"){kr[O]=t-1;return}e==="next"&&t<0&&(kr[O]=t+1)}function Fs(e){const t=Math.floor(Date.now()/1e3),r=e==="monthly",n=r?Do:Eo;let s=r?Ro:Lo;for(;s-n>t;)s-=n;for(;s<t;)s+=n;return s+=Vr(e)*n,{salesStart:s-n+1,salesEnd:s,raffleTime:s+$o}}function gc(e){return e.reduce((t,r)=>(t.amount+=Number(r.amount)||0,t.tickets+=Number(r.ticketAmount)||0,t),{amount:0,tickets:0})}function yc(e,t=!0){return`
    <tr>
      <td>${a(e.note||e.eventId||"")}</td>
      <td>${a(Lt(e.time))}</td>
      <td>${a(e.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${a(Us(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${t?`<td><strong class="bank-ticket-amount">${a(Kt(e.ticketAmount))}</strong></td>`:""}
    </tr>
  `}function bc(e=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${e?"5":"4"}">No ${a(Te(O))} deposits found for this ${O==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function Te(e){return e==="biweekly"?"Bi-Weekly":e==="monthly"?"50/50":"Other"}function Lt(e){const t=Number(e);return!Number.isFinite(t)||t<=0?"Unknown":new Date(t*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Us(e){return(Number(e)||0).toLocaleString()}function Kt(e){return(Number(e)||0).toLocaleString()}function Wr(e){return Array.isArray(e)?e.map(t=>{var n,s,i,o,l,f,m,v,w,N,Ee,Zr;const r=String((t==null?void 0:t.type)||"other").trim().toLowerCase();return{type:r==="monthly"||r==="biweekly"||r==="other"?r:"other",eventId:String((s=(n=t==null?void 0:t.eventId)!=null?n:t==null?void 0:t.event_id)!=null?s:"").trim(),time:Number((o=(i=t==null?void 0:t.time)!=null?i:t==null?void 0:t.timestamp)!=null?o:0)||0,displayName:String((f=(l=t==null?void 0:t.displayName)!=null?l:t==null?void 0:t.display_name)!=null?f:"").trim(),amount:Number((m=t==null?void 0:t.amount)!=null?m:0)||0,ticketAmount:Number((w=(v=t==null?void 0:t.ticketAmount)!=null?v:t==null?void 0:t.ticket_amount)!=null?w:0)||0,note:String((N=t==null?void 0:t.note)!=null?N:"").trim(),dataSource:String((Zr=(Ee=t==null?void 0:t.dataSource)!=null?Ee:t==null?void 0:t.data_source)!=null?Zr:"").trim()}}):[]}function vc(e){const t=new Map;for(const r of V)r.eventId&&t.set(r.eventId,r);for(const r of e)!r.eventId||t.set(r.eventId,r);V=Array.from(t.values()).sort((r,n)=>(Number(n.time)||0)-(Number(r.time)||0))}function Gs(){jn=new Date().toISOString()}async function kc(e={}){!(e!=null&&e.ok)||(V=Wr(e.entries),Gs(),A==="more"&&d(),h("banking-data-updated",`Banking data updated. Loaded ${V.length} deposit record${V.length===1?"":"s"}.`,{ttlMs:p}))}async function Jt(e={}){const t=Boolean(e.silent);if(!(c!=null&&c.connected)){t||h("banking-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}Ae=!0,d();try{const r=await _("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");V=Wr(r.entries),Gs(),t||h("banking-data",`Loaded ${V.length} banking deposit record${V.length===1?"":"s"}.`,{ttlMs:p})}catch(r){t||h("banking-data-error",k(r),{ttlMs:p})}finally{Ae=!1,d()}}async function Vs(e={}){var t,r;if(!!L()){if(!(c!=null&&c.connected)){h("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}Ae=!0,d();try{const n=await io(e);if(!(n!=null&&n.ok)){h("banking-data-pending",(n==null?void 0:n.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:p});return}const s=Wr((t=n==null?void 0:n.data)==null?void 0:t.entries);vc(s);const i=new Date().toISOString(),o={local_upload_id:Ws(),authenticated_username:Re(),authenticated_discord_user_id:((r=y==null?void 0:y.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||e.fileName||"",file_path:n.filePath||e.filePath||"",collected_at:i,data:n.data||{}};try{await zs(o)}catch(l){throw Sc(o),l}await Jt({silent:!0})}catch(n){h("banking-data-error",k(n),{ttlMs:p})}finally{Ae=!1,d()}}}function Ws(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Hr(){try{const e=window.localStorage.getItem(Un),t=e?JSON.parse(e):[];return Array.isArray(t)?t.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Hs(e){window.localStorage.setItem(Un,JSON.stringify(Array.isArray(e)?e:[]))}function Sc(e){const t=String((e==null?void 0:e.local_upload_id)||Ws()),r=Hr().filter(n=>(n==null?void 0:n.local_upload_id)!==t);r.push({...e,local_upload_id:t,pending_saved_at:new Date().toISOString()}),Hs(r),h("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function wc(e){const t=Hr().filter(r=>(r==null?void 0:r.local_upload_id)!==e);Hs(t)}async function _c(){if(ir||!(c!=null&&c.connected)||!L())return;const e=Hr();if(e.length!==0){ir=!0;try{for(const t of e){if(!(c!=null&&c.connected)||!L())return;await zs(t),wc(t.local_upload_id)}}catch(t){h("banking-data-pending-error",`Pending banking upload retry failed: ${k(t)}`,{ttlMs:p})}finally{ir=!1}}}async function zs(e){if(!(c!=null&&c.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const t=await _("guildsync:sending-banking-data",e,3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const r=await ao(e.file_path||"",e.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return h("banking-data-sent",t.message||"Banking data sent to GuildSync backend.",{ttlMs:p}),t}function js(){if(A!=="discord-members")return;const e=document.querySelector("#refreshDiscordDataButton");e&&e.addEventListener("click",()=>Ac());const t=document.querySelector("#discordMemberSearch");t&&t.addEventListener("input",i=>{$t=i.target.value||"",gr=i.target.selectionStart,yr=i.target.selectionEnd,d({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(i=>{i.addEventListener("click",()=>{Mc(i.dataset.discordSortColumn||"username")})});const r=document.querySelector("#discordRoleFilter");r&&r.addEventListener("change",i=>{const o=String(i.target.value||"").trim();o&&(De.add(o),d())}),document.querySelectorAll("[data-remove-role-filter]").forEach(i=>{i.addEventListener("click",()=>{const o=i.dataset.removeRoleFilter||"";De.delete(o),d()})});const n=document.querySelector("#discordLinkStatusFilter");n&&n.addEventListener("change",i=>{const o=String(i.target.value||"").trim();o&&($e.add(o),d())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(i=>{i.addEventListener("click",()=>{const o=i.dataset.removeDiscordLinkStatusFilter||"";$e.delete(o),d()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(i=>{i.addEventListener("click",()=>ks(i.dataset.openMemberLinkDialog||"",i.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{$t="",De.clear(),$e.clear(),d()})}async function Ac(){var e,t;if(!(c!=null&&c.connected)){h("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:p});return}Dt=!0,d(),h("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const r=await _("guildsync:request-discord-data-refresh",{requested_by:((e=y==null?void 0:y.user)==null?void 0:e.display_name)||((t=y==null?void 0:y.user)==null?void 0:t.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to request Discord data refresh.");h("discord-refresh-requested",r.message||"Discord data refresh completed.",{ttlMs:p}),await zr({silent:!0})}catch(r){h("discord-refresh-error",k(r),{ttlMs:p})}finally{Dt=!1,d()}}async function Lc(){if(!(c!=null&&c.connected))return;const e=await _("guildsync:request-discord-data-date",{});e!=null&&e.ok&&(Ut=e.value||null)}async function Rc(e={}){if(!!(e!=null&&e.ok)){T=jr(e.members),e.last_refresh&&(Ut=e.last_refresh);try{await Lc()}catch{}A==="discord-members"&&d(),h("discord-data-updated",`Discord data updated. Loaded ${T.length} member record${T.length===1?"":"s"}.`,{ttlMs:p})}}async function zr(e={}){const t=Boolean(e.silent);if(!(c!=null&&c.connected)){h("discord-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}tt=!0,d();try{const[r,n]=await Promise.all([_("guildsync:request-discord-data-date",{}),_("guildsync:request-discord-member-dataJSON",{})]);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord refresh date.");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord member data.");Ut=r.value||null,T=jr(n.members),t||h("discord-data",`Loaded ${T.length} Discord member record${T.length===1?"":"s"}.`,{ttlMs:p})}catch(r){h("discord-data-error",k(r),{ttlMs:p})}finally{tt=!1,d()}}function _(e,t={},r=3e4){return new Promise((n,s)=>{if(!(c!=null&&c.connected)){s(new Error("GuildSync websocket is not connected."));return}let i=!1;const o=window.setTimeout(()=>{i||(i=!0,s(new Error(`${e} timed out.`)))},r);c.emit(e,t,l=>{i||(i=!0,window.clearTimeout(o),n(l))})})}function jr(e){return Array.isArray(e)?e.map(t=>({discord_id:String((t==null?void 0:t.discord_id)||(t==null?void 0:t.id)||"").trim(),username:String((t==null?void 0:t.username)||"").trim(),global_name:String((t==null?void 0:t.global_name)||"").trim(),server_nickname:String((t==null?void 0:t.server_nickname)||"").trim(),last_seen:String((t==null?void 0:t.last_seen)||(t==null?void 0:t.lastSeen)||"").trim(),last_seen_action:String((t==null?void 0:t.last_seen_action)||(t==null?void 0:t.lastSeenAction)||"").trim(),avatar:String((t==null?void 0:t.avatar)||"").trim(),roles:Array.isArray(t==null?void 0:t.roles)?t.roles.map(Ec).filter(Boolean):[]})).filter(t=>t.discord_id||t.username||t.global_name||t.server_nickname).sort((t,r)=>ot(t).localeCompare(ot(r),void 0,{sensitivity:"base"})):[]}function Ec(e){var s,i;if(!e||typeof e!="object")return null;const t=String(e.role_id||e.id||"").trim(),r=String(e.role_name||e.name||"Unnamed Role").trim(),n=(i=(s=e.role_color)!=null?s:e.color)!=null?i:null;return{role_id:t,role_name:r||"Unnamed Role",role_color:n}}function Dc(){const e=$t.trim().toLowerCase(),t=Array.from(De),r=T.filter(n=>{if(e&&![n.username,n.global_name,n.server_nickname,n.discord_id,...n.roles.map(i=>i.role_name)].join(" ").toLowerCase().includes(e))return!1;if(t.length>0){const s=new Set(n.roles.map(i=>i.role_name));if(!t.every(i=>s.has(i)))return!1}return!!rs($e,Jo(n))});return $c(r)}function $c(e){const t=me==="desc"?-1:1;return[...e].sort((r,n)=>{const s=kn(r,rt),i=kn(n,rt),o=s.localeCompare(i,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*t:ot(r).localeCompare(ot(n),void 0,{sensitivity:"base",numeric:!0})})}function kn(e,t){return t==="global_name"?e.global_name||"":t==="server_nickname"?e.server_nickname||"":t==="roles"?(e.roles||[]).map(r=>r.role_name||"").filter(Boolean).sort((r,n)=>r.localeCompare(n,void 0,{sensitivity:"base"})).join(" "):e.username||e.discord_id||""}function Mc(e){const r=new Set(["username","global_name","server_nickname","roles"]).has(e)?e:"username";rt===r?me=me==="asc"?"desc":"asc":(rt=r,me="asc"),d()}function bt(e,t){const r=rt===e,n=me==="asc"?"ascending":"descending",s=r?me==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${r?n:"none"}">
      <button
        class="discord-sort-header${r?" active":""}"
        type="button"
        data-discord-sort-column="${u(e)}"
        title="Sort ${u(t)} ${r&&me==="asc"?"descending":"ascending"}"
      >
        <span>${a(t)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function Nc(){const e=document.querySelector("#discordMemberSearch");if(!!e&&(e.focus({preventScroll:!0}),typeof e.setSelectionRange=="function")){const t=Number.isInteger(gr)?gr:e.value.length,r=Number.isInteger(yr)?yr:t;e.setSelectionRange(t,r)}}function Tc(){const e=document.querySelector("#rosterMemberSearch");if(!!e&&(e.focus({preventScroll:!0}),typeof e.setSelectionRange=="function")){const t=Number.isInteger(br)?br:e.value.length,r=Number.isInteger(vr)?vr:t;e.setSelectionRange(t,r)}}function Cc(){const e=new Set;for(const t of T)for(const r of t.roles)r.role_name&&e.add(r.role_name);return Array.from(e).sort((t,r)=>t.localeCompare(r,void 0,{sensitivity:"base"}))}function Bc(e){const t=Ic(e),r=ot(e),n=e.roles||[];return`
    <tr data-discord-user-id="${u(e.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${t?`<img src="${u(t)}" alt="${u(r)}" />`:`<span>${a(ni(r))}</span>`}
          </div>
          <span>${a(e.username||e.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${a(e.global_name||"")}</td>
      <td>${a(e.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${n.length>0?n.map(s=>Oc(s)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${bs({mode:"discord-to-eso",discordUserId:e.discord_id})}</td>
    </tr>
  `}function xc(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${a(tt?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function Oc(e){const t=Qt(e.role_color),r=Jr(t),n=Kr(t,r);return`
    <span
      class="discord-role-badge"
      title="${u(e.role_name)}"
      style="${n}"
    >${a(e.role_name)}</span>
  `}function qc(e){const t=Yr(e),r=Qt(t==null?void 0:t.role_color),n=Jr(r),s=Kr(r,n);return`
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
  `}function Yr(e){for(const t of T){const r=t.roles.find(n=>n.role_name===e);if(r)return r}return null}function Qt(e){const t=Number(e);return!Number.isFinite(t)||t<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(t))).toString(16).padStart(6,"0")}`}function Kr(e,t){return[`--role-fill-top: ${Sn(e,"#ffffff",.16)}`,`--role-fill-bottom: ${Sn(e,"#000000",.1)}`,`--role-fill-glow: ${wn(e,.28)}`,`--role-fill-edge: ${wn(e,.46)}`,`color: ${t}`].join("; ")}function Sn(e,t,r){const n=vt(e)||vt("#64748b"),s=vt(t)||vt("#ffffff"),i=Math.max(0,Math.min(1,Number(r)||0)),o=Math.round(n.red+(s.red-n.red)*i),l=Math.round(n.green+(s.green-n.green)*i),f=Math.round(n.blue+(s.blue-n.blue)*i);return`#${dr(o)}${dr(l)}${dr(f)}`}function vt(e){const t=String(e||"").replace("#","");return/^[0-9a-f]{6}$/i.test(t)?{red:parseInt(t.slice(0,2),16),green:parseInt(t.slice(2,4),16),blue:parseInt(t.slice(4,6),16)}:null}function dr(e){return Math.max(0,Math.min(255,e)).toString(16).padStart(2,"0")}function wn(e,t){const r=String(e||"#64748b").replace("#",""),n=/^[0-9a-f]{6}$/i.test(r)?r:"64748b",s=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),o=parseInt(n.slice(4,6),16);return`rgba(${s}, ${i}, ${o}, ${t})`}function Jr(e){const t=String(e||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(t))return"#E5E7EB";const r=parseInt(t.slice(0,2),16),n=parseInt(t.slice(2,4),16),s=parseInt(t.slice(4,6),16);return(r*299+n*587+s*114)/1e3>150?"#0F172A":"#F8FAFC"}function Ic(e){const t=String((e==null?void 0:e.avatar)||"").trim(),r=String((e==null?void 0:e.discord_id)||"").trim();if(!t)return"";if(t.startsWith("http://")||t.startsWith("https://"))return t;if(!r)return"";const n=t.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(t)}.${n}?size=64`}function ot(e){return e.server_nickname||e.global_name||e.username||e.discord_id||"Unknown"}function Ys(e){const t=String(e||"").trim();if(!t)return"Not refreshed yet";const r=new Date(t);return Number.isNaN(r.getTime())?t:r.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Rt(){const e=document.querySelector("#discordArea");if(!!e){if(pt(!1),L()){const t=y.user||{},r=Re(),n=rd(t),s=ni(r);e.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${n?`<img src="${u(n)}" alt="${u(r)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${a(s)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const i=document.querySelector("#discordAvatarButton");i.addEventListener("contextmenu",o=>{o.preventDefault(),_n()}),i.addEventListener("click",()=>{_n()});return}e.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",Vc)}}function _n(){if(dt){pt();return}Gc()}function Pc(e=oe){const t=Array.isArray(e==null?void 0:e.files)?e.files:[],r=String((e==null?void 0:e.directory)||"").trim(),n=Boolean(e==null?void 0:e.watching);return t.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${t.map(s=>{const i=String((s==null?void 0:s.key)||(s==null?void 0:s.fileName)||"").trim(),o=String((s==null?void 0:s.fileName)||"SavedVariables file").trim(),l=String((s==null?void 0:s.filePath)||(r?`${r}\\${o}`:o)).trim(),f=(s==null?void 0:s.enabled)!==!1,m=n&&f,v=`profileFileWatchToggle-${Uc(i||o)}`;return`
          <label class="profile-filewatch-item ${f?"enabled":"disabled"}" title="${u(l)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${a(o)}</span>
              <span class="profile-filewatch-state">${m?"Watching":f?"On":"Off"}</span>
            </span>
            <input
              id="${u(v)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${u(i)}"
              ${f?"checked":""}
              aria-label="Turn file watch ${f?"off":"on"} for ${u(o)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function Qr(){var n,s,i;const e=document.querySelector("#discordProfileMenu");if(!e)return;const t=Re(),r=((n=y.user)==null?void 0:n.role)||"member";e.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${a(t)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${a(nd(r))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${a(Ft)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${oe!=null&&oe.watching?"Active":"Stopped"}</span>
        </div>
        ${Pc()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(s=document.querySelector("#discordLogoutButton"))==null||s.addEventListener("click",Wc),(i=document.querySelector("#associateTicketReportButton"))==null||i.addEventListener("click",()=>{pt(!1),ss()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",Fc)})}async function Ks(){try{oe=await lo(),dt&&Qr()}catch(e){h("file-watcher-error",k(e),{ttlMs:p})}}async function Fc(e){var n;const t=e.currentTarget,r=String(((n=t==null?void 0:t.dataset)==null?void 0:n.filewatchKey)||"").trim();if(!!r)try{t.disabled=!0,oe=await mo(r,t.checked),await Ce({silent:!0}),dt&&Qr()}catch(s){h("file-watcher-error",k(s),{ttlMs:p}),await Ks()}}function Uc(e){return String(e||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function Gc(){const e=document.querySelector("#discordProfileMenu");!e||(Qr(),e.classList.add("open"),e.setAttribute("aria-hidden","false"),dt=!0,Ks(),setTimeout(()=>{window.addEventListener("click",Js),window.addEventListener("keydown",Qs)},0))}function pt(e=!0){const t=document.querySelector("#discordProfileMenu");t&&(t.classList.remove("open"),t.setAttribute("aria-hidden","true")),dt=!1,e&&(window.removeEventListener("click",Js),window.removeEventListener("keydown",Qs))}function Js(e){const t=document.querySelector(".discord-profile-wrap");t&&!t.contains(e.target)&&pt()}function Qs(e){e.key==="Escape"&&pt()}async function Vc(){try{h("auth","Opening Discord login...",{ttlMs:p});const e=await yo();e!=null&&e.status_message&&h("auth",e.status_message,{ttlMs:p}),de()}catch(e){h("auth-error",k(e),{ttlMs:p}),de()}}async function Wc(){try{y=await fo(),h("auth",y.status_message||"Logged out.",{ttlMs:p}),Yn(),et(),await Ce()}catch(e){h("auth-error",k(e),{ttlMs:p}),de()}}function et(){const e=y.socket_url||"https://guildsync.perdues.me";Hc(!1);const t={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};y!=null&&y.token&&(t.auth={token:y.token}),c=_t(e,t),c.on("connect",()=>{de(),Xs(),A==="discord-members"&&zr({silent:!0}),A==="eso-members"&&ht({silent:!0}),A==="more"&&Jt({silent:!0}),_c(),ac(),zc()}),c.on("connect_error",()=>{de(),qt()}),c.on("disconnect",()=>{de(),qt()}),c.on("guildsync:version-status",r=>{jc(r)}),c.on("guildsync:discord-member-data-updated",r=>{Rc(r)}),c.on("guildsync:banking-data-updated",r=>{kc(r)}),c.on("guildsync:roster-data-updated",r=>{nc(r)}),c.on("guildsync:member-links-updated",(r={})=>{Array.isArray(r.links)&&(S=r.links,(A==="discord-members"||A==="eso-members"||A==="settings"||he)&&d())}),c.on("guildsync:discord-refresh-status",(r={})=>{const n=String(r.message||"").trim();n&&h("discord-refresh-status",n,{ttlMs:p})})}function Hc(e=!0){qt(),c&&(c.disconnect(),c=null),e&&de()}function Xs(){!(c!=null&&c.connected)||c.emit("guildsync:client-version",{version:Ft,platform:Zs(),client_type:"wails"})}function zc(){qt(),At=window.setInterval(()=>{Xs()},wo)}function qt(){At&&(window.clearInterval(At),At=null)}function jc(e){if(!(!e||typeof e!="object")){if(e.update_required){const t=e.latest_version||"unknown",r=e.download&&typeof e.download=="object"?e.download:{};ee={updateRequired:!0,latestVersion:t,downloadUrl:String(e.download_url||r.url||"").trim(),fileName:String(e.download_file_name||r.file_name||"").trim(),platformLabel:String(r.label||e.platform||Zs()).trim()},h("version",`GuildSync is out of date. Current version: ${Ft}. Latest version: ${t}.`),Dr();return}ee={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},Dr(),Xr("version")}}function Zs(){const e=String(navigator.userAgent||"").toLowerCase(),r=`${String(navigator.platform||"").toLowerCase()} ${e}`;return r.includes("mac")?"macos":r.includes("linux")?"linux":"windows"}function Dr(){const e=document.querySelector("#desktopUpdateArea");if(!e)return;if(!ee.updateRequired||!ee.downloadUrl){e.innerHTML="";return}const t=ee.platformLabel||"Desktop",r=ee.latestVersion||"latest",n=ee.fileName||"GuildSync client download";e.innerHTML=`
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
  `;const s=e.querySelector("#desktopUpdateDownloadButton");s&&s.addEventListener("click",()=>{Yc()})}function Yc(){const e=String(ee.downloadUrl||"").trim();if(!e){h("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:p});return}So(e)}function h(e,t,r={}){const n=String(e||"").trim(),s=String(t||"").trim();if(!(!n||!s)){if(le.set(n,s),pe.has(n)&&(window.clearTimeout(pe.get(n)),pe.delete(n)),r.ttlMs&&Number(r.ttlMs)>0){const i=window.setTimeout(()=>{Xr(n)},Number(r.ttlMs));pe.set(n,i)}Ie()}}function Xr(e){const t=String(e||"").trim();if(!!t){if(le.delete(t),pe.has(t)&&(window.clearTimeout(pe.get(t)),pe.delete(t)),D===t){er(()=>{D="",Ie()});return}Ie()}}function Ie(){const e=Xt();if(e.length===0){we?er(at):at();return}!we&&!_e&&Zt(e[0])}function Xt(){return Array.from(le.keys())}function ei(){const e=Xt();if(e.length===0)return"";if(!D)return e[0];const t=e.indexOf(D);return t<0?e[0]:e[(t+1)%e.length]}function Zt(e){const t=document.querySelector("#statusMessageTrack");if(!t||!le.has(e)){at();return}tr();const r=le.get(e);D=e,we=!0,_e=!0,t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent=r,t.style.setProperty("--message-fade-duration",`${Wn}ms`),requestAnimationFrame(()=>{t.classList.add("fade-in"),t.addEventListener("animationend",()=>{t.classList.remove("fade-in"),t.style.opacity="1",t.style.transform="translateX(0) translateY(-50%)",_e=!1,Kc()},{once:!0})})}function Kc(){const e=Xt();if(!D||!le.has(D)){Ie();return}if(e.length<=1){An(!1);return}An(!0)}function An(e){const t=document.querySelector("#statusMessageViewport"),r=document.querySelector("#statusMessageTrack");if(!t||!r)return;const n=Math.max(0,r.scrollWidth-t.clientWidth);if(n<=0){e&&ct(()=>{er(()=>{const s=ei();D="",s?Zt(s):at()})},Vn);return}ct(()=>{ti(n,e)},Hn)}function ti(e,t){const r=document.querySelector("#statusMessageTrack");if(!r||!D||!le.has(D))return;const n=Math.max(4,Math.ceil(e/Ao));r.style.setProperty("--long-scroll-distance",`${e}px`),r.style.setProperty("--long-scroll-duration",`${n}s`),r.classList.add("long-scroll"),r.addEventListener("animationend",()=>{if(r.classList.remove("long-scroll"),r.style.transform=`translateX(-${e}px) translateY(-50%)`,t){ct(()=>{er(()=>{const s=ei();D="",s?Zt(s):at()})},Vn);return}ct(()=>{Jc()},_o)},{once:!0})}function Jc(){const e=document.querySelector("#statusMessageViewport"),t=document.querySelector("#statusMessageTrack");if(!e||!t||!D||!le.has(D))return;if(Xt().length!==1){Ie();return}t.classList.remove("long-scroll"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.transform="translateX(0) translateY(-50%)";const n=Math.max(0,t.scrollWidth-e.clientWidth);n<=0||ct(()=>{ti(n,!1)},Hn)}function er(e){const t=document.querySelector("#statusMessageTrack");if(tr(),!t||!we){typeof e=="function"&&e();return}_e=!0,t.classList.remove("fade-in","long-scroll"),t.style.setProperty("--message-fade-duration",`${Wn}ms`),t.classList.add("fade-out"),t.addEventListener("animationend",()=>{t.classList.remove("fade-out"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",we=!1,_e=!1,typeof e=="function"&&e()},{once:!0})}function at(){const e=document.querySelector("#statusMessageTrack");tr(),D="",we=!1,_e=!1,e&&(e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent="")}function ct(e,t){const r=window.setTimeout(()=>{Xe=Xe.filter(n=>n!==r),e()},t);Xe.push(r)}function tr(){for(const e of Xe)window.clearTimeout(e);Xe=[]}function ri(){if(!we||_e||!D)return;const e=D;tr(),Zt(e)}function de(){const e=document.querySelector("#statusDot"),t=document.querySelector("#statusConnectionLabel");if(!!e){if(e.classList.remove("status-red","status-yellow","status-green"),!(c!=null&&c.connected)){e.classList.add("status-red"),e.title="Server Unavailable. Websocket is not connected.",t&&(t.textContent="Server Unavailable",t.title="Server Unavailable");return}if(!L()){e.classList.add("status-yellow"),e.title="Login Required. Websocket is connected but user is not authenticated.",t&&(t.textContent="Login Required",t.title="Login Required");return}e.classList.add("status-green"),e.title=`Server Ready. Authenticated as ${Re()}.`,t&&(t.textContent="Server Ready",t.title=`Server Ready - ${Re()}`)}}async function Ce(e={}){try{if(L()){const t=await bo();oe=t,!e.silent&&(t==null?void 0:t.message)&&h(t.watching?"file-watcher":"file-watcher-error",t.message,{ttlMs:p});return}oe=await vo(),Xr("file-watcher")}catch(t){h("file-watcher-error",k(t),{ttlMs:p})}}function Qc(e={}){if(!L())return;const t=String(e.key||e.fileName||"saved-vars-file").trim()||"saved-vars-file",r=String(e.label||"").trim(),n=String(e.fileName||"SavedVariables file").trim()||"SavedVariables file",s=r?`${r} saved variables (${n})`:n;h(`saved-vars-file-updated-${t}`,`${s} has been updated.`,{ttlMs:p}),t.toLowerCase()==="banking"&&Xc(e),t.toLowerCase()==="roster"&&Zc(e)}async function Xc(e={}){await Vs(e)}async function Zc(e={}){await sc(e)}function ed(e){!L()||h("file-watcher-error",k(e),{ttlMs:p})}function td(){Ye("guildsync-savedvars-file-modified",Qc),Ye("guildsync-file-watcher-error",ed),Ye("guildsync-login-complete",async e=>{y=e||{logged_in:!1,allowed:!1},Rt(),et(),await Ce(),h("auth",y.status_message||`Logged in and authorized as ${Re()}.`,{ttlMs:p})}),Ye("guildsync-login-denied",async e=>{y={logged_in:!1,allowed:!1,status_message:""},Rt(),await Ce(),h("auth",e||"Access denied.",{ttlMs:p}),et()}),Ye("guildsync-login-failed",async e=>{y={logged_in:!1,allowed:!1,status_message:""},Rt(),await Ce(),h("auth",e||"Login failed.",{ttlMs:p}),et()})}function L(){return Boolean((y==null?void 0:y.logged_in)&&(y==null?void 0:y.allowed)&&(y==null?void 0:y.token))}function Re(){var e,t;return((e=y.user)==null?void 0:e.display_name)||((t=y.user)==null?void 0:t.username)||"Discord User"}function rd(e){if(!e)return"";if(e.avatar_url)return e.avatar_url;const t=String(e.avatar||"").trim(),r=String(e.discord_user_id||"").trim();if(!t||!r)return"";if(t.startsWith("http://")||t.startsWith("https://"))return t;const n=t.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(t)}.${n}?size=128`}function ni(e){const t=String(e||"").trim().split(/\s+/).filter(Boolean);return t.length===0?"GS":t.length===1?t[0].slice(0,2).toUpperCase():`${t[0][0]}${t[t.length-1][0]}`.toUpperCase()}function nd(e){return String(e||"member").replaceAll("_"," ").replace(/\b\w/g,t=>t.toUpperCase())}function sd(){Ke&&(Ke.disconnect(),Ke=null);const e=document.querySelector(".main-window")||document.querySelector("#app");if(!e||typeof ResizeObserver>"u")return;let t=Math.round(e.getBoundingClientRect().width),r=Math.round(e.getBoundingClientRect().height);Ke=new ResizeObserver(n=>{const s=n[0];if(!s)return;const i=Math.round(s.contentRect.width),o=Math.round(s.contentRect.height);i===t&&o===r||(t=i,r=o,si(),ri())}),Ke.observe(e)}function si(){clearTimeout(sn),sn=setTimeout(async()=>{try{await Fn()}catch{}},500)}function k(e){return e?typeof e=="string"?e:e.message||String(e):"Unknown error."}function a(e){return String(e!=null?e:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function u(e){return a(e)}td();Mo();
