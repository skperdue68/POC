(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const ri="/assets/splash.ea386b6a.png",ni="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",si="/assets/GuildSync-Graphic.9169020d.png",W=Object.create(null);W.open="0";W.close="1";W.ping="2";W.pong="3";W.message="4";W.upgrade="5";W.noop="6";const vt=Object.create(null);Object.keys(W).forEach(t=>{vt[W[t]]=t});const dr={type:"error",data:"parser error"},_n=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",An=typeof ArrayBuffer=="function",Ln=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Rr=({type:t,data:e},r,n)=>_n&&e instanceof Blob?r?n(e):Xr(e,n):An&&(e instanceof ArrayBuffer||Ln(e))?r?n(e):Xr(new Blob([e]),n):n(W[t]+(e||"")),Xr=(t,e)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];e("b"+(n||""))},r.readAsDataURL(t)};function Zr(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let tr;function ii(t,e){if(_n&&t.data instanceof Blob)return t.data.arrayBuffer().then(Zr).then(e);if(An&&(t.data instanceof ArrayBuffer||Ln(t.data)))return e(Zr(t.data));Rr(t,!1,r=>{tr||(tr=new TextEncoder),e(tr.encode(r))})}const en="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Je=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<en.length;t++)Je[en.charCodeAt(t)]=t;const oi=t=>{let e=t.length*.75,r=t.length,n,s=0,i,o,l,f;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const m=new ArrayBuffer(e),v=new Uint8Array(m);for(n=0;n<r;n+=4)i=Je[t.charCodeAt(n)],o=Je[t.charCodeAt(n+1)],l=Je[t.charCodeAt(n+2)],f=Je[t.charCodeAt(n+3)],v[s++]=i<<2|o>>4,v[s++]=(o&15)<<4|l>>2,v[s++]=(l&3)<<6|f&63;return m},ai=typeof ArrayBuffer=="function",Dr=(t,e)=>{if(typeof t!="string")return{type:"message",data:En(t,e)};const r=t.charAt(0);return r==="b"?{type:"message",data:ci(t.substring(1),e)}:vt[r]?t.length>1?{type:vt[r],data:t.substring(1)}:{type:vt[r]}:dr},ci=(t,e)=>{if(ai){const r=oi(t);return En(r,e)}else return{base64:!0,data:t}},En=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},Rn=String.fromCharCode(30),di=(t,e)=>{const r=t.length,n=new Array(r);let s=0;t.forEach((i,o)=>{Rr(i,!1,l=>{n[o]=l,++s===r&&e(n.join(Rn))})})},li=(t,e)=>{const r=t.split(Rn),n=[];for(let s=0;s<r.length;s++){const i=Dr(r[s],e);if(n.push(i),i.type==="error")break}return n};function ui(){return new TransformStream({transform(t,e){ii(t,r=>{const n=r.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const i=new DataView(s.buffer);i.setUint8(0,126),i.setUint16(1,n)}else{s=new Uint8Array(9);const i=new DataView(s.buffer);i.setUint8(0,127),i.setBigUint64(1,BigInt(n))}t.data&&typeof t.data!="string"&&(s[0]|=128),e.enqueue(s),e.enqueue(r)})}})}let rr;function pt(t){return t.reduce((e,r)=>e+r.length,0)}function mt(t,e){if(t[0].length===e)return t.shift();const r=new Uint8Array(e);let n=0;for(let s=0;s<e;s++)r[s]=t[0][n++],n===t[0].length&&(t.shift(),n=0);return t.length&&n<t[0].length&&(t[0]=t[0].slice(n)),r}function fi(t,e){rr||(rr=new TextDecoder);const r=[];let n=0,s=-1,i=!1;return new TransformStream({transform(o,l){for(r.push(o);;){if(n===0){if(pt(r)<1)break;const f=mt(r,1);i=(f[0]&128)===128,s=f[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(pt(r)<2)break;const f=mt(r,2);s=new DataView(f.buffer,f.byteOffset,f.length).getUint16(0),n=3}else if(n===2){if(pt(r)<8)break;const f=mt(r,8),m=new DataView(f.buffer,f.byteOffset,f.length),v=m.getUint32(0);if(v>Math.pow(2,53-32)-1){l.enqueue(dr);break}s=v*Math.pow(2,32)+m.getUint32(4),n=3}else{if(pt(r)<s)break;const f=mt(r,s);l.enqueue(Dr(i?f:rr.decode(f),e)),n=0}if(s===0||s>t){l.enqueue(dr);break}}}})}const Dn=4;function E(t){if(t)return hi(t)}function hi(t){for(var e in E.prototype)t[e]=E.prototype[e];return t}E.prototype.on=E.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};E.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this};E.prototype.off=E.prototype.removeListener=E.prototype.removeAllListeners=E.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var n,s=0;s<r.length;s++)if(n=r[s],n===e||n.fn===e){r.splice(s,1);break}return r.length===0&&delete this._callbacks["$"+t],this};E.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),r=this._callbacks["$"+t],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,s=r.length;n<s;++n)r[n].apply(this,e)}return this};E.prototype.emitReserved=E.prototype.emit;E.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};E.prototype.hasListeners=function(t){return!!this.listeners(t).length};const qt=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,r)=>r(e,0))(),B=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),pi="arraybuffer";function $n(t,...e){return e.reduce((r,n)=>(t.hasOwnProperty(n)&&(r[n]=t[n]),r),{})}const mi=B.setTimeout,gi=B.clearTimeout;function It(t,e){e.useNativeTimers?(t.setTimeoutFn=mi.bind(B),t.clearTimeoutFn=gi.bind(B)):(t.setTimeoutFn=B.setTimeout.bind(B),t.clearTimeoutFn=B.clearTimeout.bind(B))}const yi=1.33;function bi(t){return typeof t=="string"?vi(t):Math.ceil((t.byteLength||t.size)*yi)}function vi(t){let e=0,r=0;for(let n=0,s=t.length;n<s;n++)e=t.charCodeAt(n),e<128?r+=1:e<2048?r+=2:e<55296||e>=57344?r+=3:(n++,r+=4);return r}function Mn(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function ki(t){let e="";for(let r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e}function Si(t){let e={},r=t.split("&");for(let n=0,s=r.length;n<s;n++){let i=r[n].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}class wi extends Error{constructor(e,r,n){super(e),this.description=r,this.context=n,this.type="TransportError"}}class $r extends E{constructor(e){super(),this.writable=!1,It(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,r,n){return super.emitReserved("error",new wi(e,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const r=Dr(e,this.socket.binaryType);this.onPacket(r)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,r={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const r=ki(e);return r.length?"?"+r:""}}class _i extends $r{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const r=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};li(e,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,di(e,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=Mn()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(e,r)}}let Nn=!1;try{Nn=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Ai=Nn;function Li(){}class Ei extends _i{constructor(e){if(super(e),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,r){const n=this.request({method:"POST",data:e});n.on("success",r),n.on("error",(s,i)=>{this.onError("xhr post error",s,i)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=e}}class U extends E{constructor(e,r,n){super(),this.createRequest=e,It(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;const r=$n(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=U.requestsCount++,U.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Li,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete U.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}U.requestsCount=0;U.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",tn);else if(typeof addEventListener=="function"){const t="onpagehide"in B?"pagehide":"unload";addEventListener(t,tn,!1)}}function tn(){for(let t in U.requests)U.requests.hasOwnProperty(t)&&U.requests[t].abort()}const Ri=function(){const t=Tn({xdomain:!1});return t&&t.responseType!==null}();class Di extends Ei{constructor(e){super(e);const r=e&&e.forceBase64;this.supportsBinary=Ri&&!r}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new U(Tn,this.uri(),e)}}function Tn(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Ai))return new XMLHttpRequest}catch{}if(!e)try{return new B[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Cn=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class $i extends $r{get name(){return"websocket"}doOpen(){const e=this.uri(),r=this.opts.protocols,n=Cn?{}:$n(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,r,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],s=r===e.length-1;Rr(n,this.supportsBinary,i=>{try{this.doWrite(n,i)}catch{}s&&qt(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=Mn()),this.supportsBinary||(r.b64=1),this.createUri(e,r)}}const nr=B.WebSocket||B.MozWebSocket;class Mi extends $i{createSocket(e,r,n){return Cn?new nr(e,r,n):r?new nr(e,r):new nr(e)}doWrite(e,r){this.ws.send(r)}}class Ni extends $r{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const r=fi(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(r).getReader(),s=ui();s.readable.pipeTo(e.writable),this._writer=s.writable.getWriter();const i=()=>{n.read().then(({done:l,value:f})=>{l||(this.onPacket(f),i())}).catch(l=>{})};i();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],s=r===e.length-1;this._writer.write(n).then(()=>{s&&qt(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Ti={websocket:Mi,webtransport:Ni,polling:Di},Ci=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Bi=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function lr(t){if(t.length>8e3)throw"URI too long";const e=t,r=t.indexOf("["),n=t.indexOf("]");r!=-1&&n!=-1&&(t=t.substring(0,r)+t.substring(r,n).replace(/:/g,";")+t.substring(n,t.length));let s=Ci.exec(t||""),i={},o=14;for(;o--;)i[Bi[o]]=s[o]||"";return r!=-1&&n!=-1&&(i.source=e,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=xi(i,i.path),i.queryKey=Oi(i,i.query),i}function xi(t,e){const r=/\/{2,9}/g,n=e.replace(r,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Oi(t,e){const r={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,i){s&&(r[s]=i)}),r}const ur=typeof addEventListener=="function"&&typeof removeEventListener=="function",kt=[];ur&&addEventListener("offline",()=>{kt.forEach(t=>t())},!1);class se extends E{constructor(e,r){if(super(),this.binaryType=pi,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(r=e,e=null),e){const n=lr(e);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=lr(r.host).host);It(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const s=n.prototype.name;this.transports.push(s),this._transportsByName[s]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Si(this.opts.query)),ur&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},kt.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const r=Object.assign({},this.opts.query);r.EIO=Dn,r.transport=e,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&se.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(e);r.open(),this.setTransport(r)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",se.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=e.data,this._onError(r);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(r+=bi(s)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,qt(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,r,n){return this._sendPacket("message",e,r,n),this}send(e,r,n){return this._sendPacket("message",e,r,n),this}_sendPacket(e,r,n,s){if(typeof r=="function"&&(s=r,r=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const i={type:e,data:r,options:n};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),s&&this.once("flush",s),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),e()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(se.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),ur&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=kt.indexOf(this._offlineEventListener);n!==-1&&kt.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,r),this.writeBuffer=[],this._prevBufferLen=0}}}se.protocol=Dn;class qi extends se{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let r=this.createTransport(e),n=!1;se.priorWebsocketSuccess=!1;const s=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",w=>{if(!n)if(w.type==="pong"&&w.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;se.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(v(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const N=new Error("probe error");N.transport=r.name,this.emitReserved("upgradeError",N)}}))};function i(){n||(n=!0,v(),r.close(),r=null)}const o=w=>{const N=new Error("probe error: "+w);N.transport=r.name,i(),this.emitReserved("upgradeError",N)};function l(){o("transport closed")}function f(){o("socket closed")}function m(w){r&&w.name!==r.name&&i()}const v=()=>{r.removeListener("open",s),r.removeListener("error",o),r.removeListener("close",l),this.off("close",f),this.off("upgrading",m)};r.once("open",s),r.once("error",o),r.once("close",l),this.once("close",f),this.once("upgrading",m),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const r=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&r.push(e[n]);return r}}class Ii extends qi{constructor(e,r={}){const n=typeof e=="object"?e:r;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(s=>Ti[s]).filter(s=>!!s)),super(e,n)}}function Pi(t,e="",r){let n=t;r=r||typeof location<"u"&&location,t==null&&(t=r.protocol+"//"+r.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=r.protocol+t:t=r.host+t),/^(https?|wss?):\/\//.test(t)||(typeof r<"u"?t=r.protocol+"//"+t:t="https://"+t),n=lr(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const i=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+i+":"+n.port+e,n.href=n.protocol+"://"+i+(r&&r.port===n.port?"":":"+n.port),n}const Fi=typeof ArrayBuffer=="function",Gi=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,Bn=Object.prototype.toString,Ui=typeof Blob=="function"||typeof Blob<"u"&&Bn.call(Blob)==="[object BlobConstructor]",Vi=typeof File=="function"||typeof File<"u"&&Bn.call(File)==="[object FileConstructor]";function Mr(t){return Fi&&(t instanceof ArrayBuffer||Gi(t))||Ui&&t instanceof Blob||Vi&&t instanceof File}function St(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let r=0,n=t.length;r<n;r++)if(St(t[r]))return!0;return!1}if(Mr(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return St(t.toJSON(),!0);for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&St(t[r]))return!0;return!1}function Wi(t){const e=[],r=t.data,n=t;return n.data=fr(r,e),n.attachments=e.length,{packet:n,buffers:e}}function fr(t,e){if(!t)return t;if(Mr(t)){const r={_placeholder:!0,num:e.length};return e.push(t),r}else if(Array.isArray(t)){const r=new Array(t.length);for(let n=0;n<t.length;n++)r[n]=fr(t[n],e);return r}else if(typeof t=="object"&&!(t instanceof Date)){const r={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=fr(t[n],e));return r}return t}function Hi(t,e){return t.data=hr(t.data,e),delete t.attachments,t}function hr(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let r=0;r<t.length;r++)t[r]=hr(t[r],e);else if(typeof t=="object")for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(t[r]=hr(t[r],e));return t}const xn=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],zi=5;var g;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(g||(g={}));class ji{constructor(e){this.replacer=e}encode(e){return(e.type===g.EVENT||e.type===g.ACK)&&St(e)?this.encodeAsBinary({type:e.type===g.EVENT?g.BINARY_EVENT:g.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let r=""+e.type;return(e.type===g.BINARY_EVENT||e.type===g.BINARY_ACK)&&(r+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(r+=e.nsp+","),e.id!=null&&(r+=e.id),e.data!=null&&(r+=JSON.stringify(e.data,this.replacer)),r}encodeAsBinary(e){const r=Wi(e),n=this.encodeAsString(r.packet),s=r.buffers;return s.unshift(n),s}}class Nr extends E{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let r;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(e);const n=r.type===g.BINARY_EVENT;n||r.type===g.BINARY_ACK?(r.type=n?g.EVENT:g.ACK,this.reconstructor=new Yi(r),r.attachments===0&&super.emitReserved("decoded",r)):super.emitReserved("decoded",r)}else if(Mr(e)||e.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(e),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let r=0;const n={type:Number(e.charAt(0))};if(g[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===g.BINARY_EVENT||n.type===g.BINARY_ACK){const i=r+1;for(;e.charAt(++r)!=="-"&&r!=e.length;);const o=e.substring(i,r);if(o!=Number(o)||e.charAt(r)!=="-")throw new Error("Illegal attachments");const l=Number(o);if(!On(l)||l<0)throw new Error("Illegal attachments");if(l>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=l}if(e.charAt(r+1)==="/"){const i=r+1;for(;++r&&!(e.charAt(r)===","||r===e.length););n.nsp=e.substring(i,r)}else n.nsp="/";const s=e.charAt(r+1);if(s!==""&&Number(s)==s){const i=r+1;for(;++r;){const o=e.charAt(r);if(o==null||Number(o)!=o){--r;break}if(r===e.length)break}n.id=Number(e.substring(i,r+1))}if(e.charAt(++r)){const i=this.tryParse(e.substr(r));if(Nr.isPayloadValid(n.type,i))n.data=i;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,r){switch(e){case g.CONNECT:return Et(r);case g.DISCONNECT:return r===void 0;case g.CONNECT_ERROR:return typeof r=="string"||Et(r);case g.EVENT:case g.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&xn.indexOf(r[0])===-1);case g.ACK:case g.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Yi{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const r=Hi(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Ki(t){return typeof t=="string"}const On=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function Ji(t){return t===void 0||On(t)}function Et(t){return Object.prototype.toString.call(t)==="[object Object]"}function Qi(t,e){switch(t){case g.CONNECT:return e===void 0||Et(e);case g.DISCONNECT:return e===void 0;case g.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&xn.indexOf(e[0])===-1);case g.ACK:return Array.isArray(e);case g.CONNECT_ERROR:return typeof e=="string"||Et(e);default:return!1}}function Xi(t){return Ki(t.nsp)&&Ji(t.id)&&Qi(t.type,t.data)}const Zi=Object.freeze(Object.defineProperty({__proto__:null,protocol:zi,get PacketType(){return g},Encoder:ji,Decoder:Nr,isPacketValid:Xi},Symbol.toStringTag,{value:"Module"}));function I(t,e,r){return t.on(e,r),function(){t.off(e,r)}}const eo=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class qn extends E{constructor(e,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[I(e,"open",this.onopen.bind(this)),I(e,"packet",this.onpacket.bind(this)),I(e,"error",this.onerror.bind(this)),I(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...r){var n,s,i;if(eo.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(r.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const o={type:g.EVENT,data:r};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const v=this.ids++,w=r.pop();this._registerAckCallback(v,w),o.id=v}const l=(s=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||s===void 0?void 0:s.writable,f=this.connected&&!(!((i=this.io.engine)===null||i===void 0)&&i._hasPingExpired());return this.flags.volatile&&!l||(f?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,r){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[e]=r;return}const i=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let l=0;l<this.sendBuffer.length;l++)this.sendBuffer[l].id===e&&this.sendBuffer.splice(l,1);r.call(this,new Error("operation has timed out"))},s),o=(...l)=>{this.io.clearTimeoutFn(i),r.apply(this,l)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...r){return new Promise((n,s)=>{const i=(o,l)=>o?s(o):n(l);i.withError=!0,r.push(i),this.emit(e,...r)})}_addToQueue(e){let r;typeof e[e.length-1]=="function"&&(r=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((s,...i)=>(this._queue[0],s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(s)):(this._queue.shift(),r&&r(null,...i)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!e||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:g.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){const n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case g.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case g.EVENT:case g.BINARY_EVENT:this.onevent(e);break;case g.ACK:case g.BINARY_ACK:this.onack(e);break;case g.DISCONNECT:this.ondisconnect();break;case g.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const r=e.data||[];e.id!=null&&r.push(this.ack(e.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const r=this;let n=!1;return function(...s){n||(n=!0,r.packet({type:g.ACK,id:e,data:s}))}}onack(e){const r=this.acks[e.id];typeof r=="function"&&(delete this.acks[e.id],r.withError&&e.data.unshift(null),r.apply(this,e.data))}onconnect(e,r){this.id=e,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:g.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,e.data)}}}function Ie(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}Ie.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-r:t+r}return Math.min(t,this.max)|0};Ie.prototype.reset=function(){this.attempts=0};Ie.prototype.setMin=function(t){this.ms=t};Ie.prototype.setMax=function(t){this.max=t};Ie.prototype.setJitter=function(t){this.jitter=t};class pr extends E{constructor(e,r){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(r=e,e=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,It(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Ie({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=e;const s=r.parser||Zi;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var r;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(r=this.backoff)===null||r===void 0||r.setMin(e),this)}randomizationFactor(e){var r;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(r=this.backoff)===null||r===void 0||r.setJitter(e),this)}reconnectionDelayMax(e){var r;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(r=this.backoff)===null||r===void 0||r.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Ii(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=I(r,"open",function(){n.onopen(),e&&e()}),i=l=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",l),e?e(l):this.maybeReconnectOnOpen()},o=I(r,"error",i);if(this._timeout!==!1){const l=this._timeout,f=this.setTimeoutFn(()=>{s(),i(new Error("timeout")),r.close()},l);this.opts.autoUnref&&f.unref(),this.subs.push(()=>{this.clearTimeoutFn(f)})}return this.subs.push(s),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(I(e,"ping",this.onping.bind(this)),I(e,"data",this.ondata.bind(this)),I(e,"error",this.onerror.bind(this)),I(e,"close",this.onclose.bind(this)),I(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(r){this.onclose("parse error",r)}}ondecoded(e){qt(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,r){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new qn(this,e,r),this.nsps[e]=n),n}_destroy(e){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(e){const r=this.encoder.encode(e);for(let n=0;n<r.length;n++)this.engine.write(r[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(s=>{s?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",s)):e.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const ze={};function wt(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const r=Pi(t,e.path||"/socket.io"),n=r.source,s=r.id,i=r.path,o=ze[s]&&i in ze[s].nsps,l=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let f;return l?f=new pr(n,e):(ze[s]||(ze[s]=new pr(n,e)),f=ze[s]),r.query&&!e.query&&(e.query=r.queryKey),f.socket(r.path,e)}Object.assign(wt,{Manager:pr,Socket:qn,io:wt,connect:wt});function to(){return window.go.main.App.CloseWindow()}function ro(t){return window.go.main.App.CollectGuildSyncBankingData(t)}function no(t){return window.go.main.App.CollectGuildSyncRosterData(t)}function so(t,e){return window.go.main.App.CommitGuildSyncBankingData(t,e)}function io(t,e){return window.go.main.App.CommitGuildSyncRosterData(t,e)}function oo(){return window.go.main.App.GetGuildSyncFileWatcherStatus()}function ao(){return window.go.main.App.GetGuildSyncSession()}function co(){return window.go.main.App.LogoutGuildSync()}function lo(){return window.go.main.App.MaximizeWindow()}function uo(){return window.go.main.App.MinimizeWindow()}function In(){return window.go.main.App.SaveWindowState()}function fo(t,e){return window.go.main.App.SetGuildSyncSavedVarsWatchFileEnabled(t,e)}function ho(){return window.go.main.App.ShowMainWindow()}function po(){return window.go.main.App.StartDiscordLogin()}function mo(){return window.go.main.App.StartGuildSyncFileWatcher()}function go(){return window.go.main.App.StopGuildSyncFileWatcher()}function yo(t,e,r){return window.runtime.EventsOnMultiple(t,e,r)}function je(t,e){return yo(t,e,-1)}const Pt="1.0.3",bo=30*60*1e3,Pn="guildsync-pending-banking-uploads",Fn="guildsync-pending-roster-uploads",p=60*1e3,Gn=7e3,Un=1400,Vn=2400,vo=4e3,ko=38,Wn=document.querySelector("#app");let rn=null,Ye=null,nn=!1,ct=!1,_t=null,sr=!1,ir=!1,ie=null,de=new Map,he=new Map,D="",Se=!1,we=!1,Qe=[],y={logged_in:!1,allowed:!1,status_message:""},c=null,T=[],Ft=null,et=!1,Rt=!1,Dt="",Re=new Set,De=new Set,tt="username",pe="asc",mr=null,gr=null,F=[],$t=null,le=!1,sn=!1,Mt="",yr=null,br=null,me=new Set,$e=new Set,Y="",M="",R=-1,Ce=!1,rt="",x=[],ue="",oe=[],ae=!1,J="",or=null,P=-1,Pe=!1,Fe=[],ee=!1,ge="",Ge=!1,nt=[],te=!1,ye="",dt=!1,Tr=[],re=!1,be="",Ue="",Me="",ne="",S=[],C=!1,q="",Ve=!1,Gt="",K=-1,fe=!1,b=null,ve=[],Be=!1,Z="",lt="",G=-1,We=!1,Cr=null,Xe=null;const Br=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let V=[],O="biweekly",Hn=null,_e=!1,ke=!1,ut="biweekly",Q=!1,Nt=!1,j="",$={accountName:"",note:"",tickets:""},He="",z=-1,vr={biweekly:0,monthly:0};const So=1780786800,wo=1781996400,_o=14*24*60*60,Ao=28*24*60*60,Lo=60*60,Tt=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let A=Tt[0].id;function Eo(){Wn.innerHTML=`
    <main class="splash-screen">
      <img src="${ri}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await ho(),await Ro(),zn(),Ze(),await Te()},5e3)}async function Ro(){try{y=await ao()}catch(t){y={logged_in:!1,allowed:!1,status_message:""},h("session-error",k(t),{ttlMs:p})}}function zn(){Wn.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${ni}" alt="" class="title-icon" />
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
            <img src="${si}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${a(Pt)}</div>
            </div>
          </div>
          <div id="discordArea" class="discord-area"></div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${jn()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content" aria-live="polite">
          ${Yn()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await uo()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await In(),await to()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await lo()}),Lt(),Jn(),Hs(),Ms(),Os(),ts(),$s(),Ss(),ws(),_s(),As(),ls(),Co(),ce(),qe(),nn||(window.addEventListener("resize",()=>{ti(),Zs()}),Zc(),nn=!0)}function jn(){return Tt.map(t=>{const e=t.id===A;return`
        <button
          class="guildsync-tab${e?" active":""}"
          type="button"
          data-tab-id="${u(t.id)}"
          aria-selected="${e?"true":"false"}"
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${Do(t.icon)}</span>
          <span class="guildsync-tab-label">${a(t.label)}</span>
        </button>
      `}).join("")}function Do(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function Yn(){const t=Tt.find(r=>r.id===A)||Tt[0];let e="";return t.id==="discord-members"?e=Bo():t.id==="eso-members"?e=xo():t.id==="more"?e=sc():t.id==="settings"?e=Jo():e=`
      <div class="guildsync-tab-panel" data-active-tab="${u(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${a(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${Q?Ha():""}
    ${fe?qa():""}
    ${Pe?Qo():""}
    ${Ge?na():""}
    ${dt?aa():""}
    ${Ve?ya():""}
    ${We?To():""}
  `}function $o(){return We||Ce||Q||fe||Pe||Ge||dt||Ve||ke}function Mo(){return We?!1:Ve?(_r(),!0):Ge?(wr(),!0):Pe?(Sr(),!0):fe?(Oe(),!0):Q?(Q=!1,d(),!0):Ce?(Ce=!1,d(),!0):ke?(ke=!1,d(),!0):!1}function No(t){t.key==="Escape"&&Mo()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",No,!0),window.guildSyncGlobalModalEscapeAttached=!0);function Kn(t={}){return new Promise(e=>{Xe&&Xe(!1),We=!0,Cr={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},Xe=e,d()})}function Ct(t=!1){const e=Xe;Xe=null,We=!1,Cr=null,e&&e(t===!0),d()}function To(){const t=Cr||{};return`
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
  `}function on(t){var n,s,i,o;const e=(s=(n=t.target).closest)==null?void 0:s.call(n,"#cancelGuildSyncConfirmButton"),r=(o=(i=t.target).closest)==null?void 0:o.call(i,"#acceptGuildSyncConfirmButton");if(!(!e&&!r)){if(t.preventDefault(),t.stopPropagation(),e){Ct(!1);return}r&&Ct(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",on,!0),document.addEventListener("pointerup",on,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function Co(){if(!We)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=n=>{n.preventDefault(),n.stopPropagation(),Ct(!1)}),e&&(e.onclick=n=>{n.preventDefault(),n.stopPropagation(),Ct(!0)});const r=document.querySelector(".guildsync-confirm-overlay");r&&(r.onclick=n=>{n.target===r&&(n.preventDefault(),n.stopPropagation())})}function Jn(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if($o())return;const e=t.dataset.tabId;!e||e===A||(A=e,d())})})}function d(t={}){const e=document.querySelector(".guildsync-tabs"),r=document.querySelector("#guildSyncTabContent");e&&(e.innerHTML=jn()),r&&(r.innerHTML=Yn()),Jn(),Hs(),Ms(),Os(),ts(),$s(),Ss(),ws(),_s(),As(),ls(),t.restoreDiscordSearchFocus&&Rc(),t.restoreRosterSearchFocus&&Dc(),A==="discord-members"&&(c==null?void 0:c.connected)&&T.length===0&&!et&&Wr({silent:!0}),A==="eso-members"&&(c==null?void 0:c.connected)&&F.length===0&&!le&&!sn&&(sn=!0,ft({silent:!0})),A==="more"&&(c==null?void 0:c.connected)&&V.length===0&&!_e&&Kt({silent:!0}),(A==="discord-members"||A==="eso-members"||A==="settings")&&(c==null?void 0:c.connected)&&S.length===0&&!C&&Ut({silent:!0})}function Bo(){const t=Ac(),e=$c(),r=Array.from(Re),n=Array.from(De);return`
    <div class="guildsync-tab-panel discord-member-panel" data-active-tab="discord-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Discord Member Data</h2>
          <p class="discord-data-subtitle">Manage and view Discord member information.</p>
        </div>
        <div class="discord-data-actions">
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${a(zs(Ft))}</span>
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
              ${e.filter(s=>!Re.has(s)).map(s=>`<option value="${u(s)}">${a(s)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All roles</span>':r.map(s=>Cc(s)).join("")}
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
              ${Br.filter(s=>!De.has(s.id)).map(s=>`<option value="${u(s.id)}">${a(s.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(s=>Qn("discord",s)).join("")}
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
              ${t.length>0?t.map(s=>Mc(s)).join(""):Nc()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `}function xo(){const t=Fo(),e=Vo(),r=Array.from(me),n=Array.from($e);return`
    <div class="guildsync-tab-panel eso-roster-panel" data-active-tab="eso-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Guild Roster</h2>
          <p class="discord-data-subtitle">Current ESO roster imported from GuildSyncRoster.</p>
        </div>
        <div class="discord-data-actions">
          <span class="discord-last-refresh">Last Refresh: ${a(Xa($t))}</span>
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
              ${e.filter(s=>!me.has(s)).map(s=>`<option value="${u(s)}">${a(s)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All ranks</span>':r.map(s=>Wo(s)).join("")}
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
              ${Br.filter(s=>!$e.has(s.id)).map(s=>`<option value="${u(s.id)}">${a(s.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(s=>Qn("roster",s)).join("")}
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
              ${t.length>0?t.map((s,i)=>Oo(s,i)).join(""):qo()}
            </tbody>
          </table>
        </div>
      </div>
      ${Ce?jo():""}
    </div>
  `}function Oo(t,e=-1){const r=Io(t.rank||""),n=r?` style="color: ${r};"`:"";return`
    <tr class="eso-roster-row${e===R?" roster-search-active-row":""}"${n} data-roster-row-index="${u(String(e))}" data-eso-account-name="${u(t.account_name||"")}">
      <td>${a(t.account_name||"")}</td>
      <td>${xr(t.rank||"")}</td>
      <td>${a(Ht(t.joined))}</td>
      <td class="member-link-action-cell">${gs({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function qo(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">${a(le?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function Io(t){const e=String(t||"").trim(),r=zr(e);return Jt(r==null?void 0:r.role_color)}function xr(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${a(e)}</span>`}function Po(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":xr(e)}function Fo(){const t=Mt.trim().toLowerCase(),e=F.filter(r=>{const n=String(r.rank||"").trim();if(me.size>0&&!me.has(n)||!es($e,kr(r)))return!1;if(!t)return!0;const s=Ht(r.joined),i=Ts(r.joined),o=kr(r),l=Zn(r.account_name||"");return[r.account_name,n,s,i,r.joined,o,l].map(m=>String(m||"").toLowerCase()).join(" ").includes(t)});return Go(e)}function Go(t){if(!Y||!M)return t;const e=M==="desc"?-1:1;return[...t].sort((r,n)=>{const s=an(r,Y),i=an(n,Y),o=s.localeCompare(i,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:String(r.account_name||"").localeCompare(String(n.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function an(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const r=Number(t.joined||0);return Number.isFinite(r)&&r>0?String(r).padStart(16,"0"):""}if(e==="linked"){const r=kr(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[r]||"9"} ${r} ${Zn(t.account_name||"")}`}return String(t.account_name||"")}function Uo(t){const r=new Set(["account_name","rank","joined","linked"]).has(t)?t:"account_name";Y!==r?(Y=r,M="asc"):M==="asc"?M="desc":M==="desc"?(Y="",M=""):(Y=r,M="asc"),R=-1,d()}function gt(t,e,r=""){const n=Y===t&&Boolean(M),s=n?M==="asc"?"ascending":"descending":"none",i=n?M==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${u(r)}" aria-sort="${u(s)}">
      <button
        class="discord-sort-header roster-sort-header${n?" active":""}"
        type="button"
        data-roster-sort-column="${u(t)}"
        title="Sort ${u(e)}${n&&M==="asc"?" descending":n&&M==="desc"?" not sorted":" ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function Vo(){return Array.from(new Set(F.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function Wo(t){const e=zr(t),r=Jt(e==null?void 0:e.role_color),n=Yr(r),s=jr(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-roster-rank-filter="${u(t)}"
      style="${s}"
      title="Remove ${u(t)} filter"
    >
      <span>${a(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Ho(t){const e=Br.find(r=>r.id===t);return e?e.label:t}function Qn(t,e){const r=t==="roster"?"roster":"discord",n=Ho(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${r}-link-status-filter="${u(e)}"
      title="Remove ${u(n)} link filter"
    >
      <span>${a(n)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Xn(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked"&&String(r.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function zo(t){return Xn(Wt(t==null?void 0:t.discord_id))}function kr(t){return Xn(Vt(t==null?void 0:t.account_name))}function Zn(t){const e=Vt(t),r=ms({mode:"eso-to-discord",esoAccountName:t}),n=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked").map(i=>i.discord_server_nickname||i.discord_display_name||i.discord_username||i.discord_user_id||"").filter(Boolean),s=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="candidate").map(i=>i.discord_server_nickname||i.discord_display_name||i.discord_username||i.discord_user_id||"").filter(Boolean);return[r.label,r.title,n.join(" "),s.join(" ")].filter(Boolean).join(" ")}function es(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function jo(){return`
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
            ${Yo()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${ue?`: ${a(ue)}`:""}</div>
            ${Ko()}
          </div>
        </div>
      </div>
    </div>
  `}function Yo(){return ae&&x.length===0?'<div class="roster-history-muted">Searching...</div>':x.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${x.map((t,e)=>`
        <button class="roster-history-match${e===P||t.account_name===ue?" is-selected":""}" type="button" data-roster-history-account="${u(t.account_name)}">
          <span>${a(t.account_name)}</span>
          <strong>${a(t.rank||"")}</strong>
          ${e===P?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Ko(){return ue?ae&&oe.length===0?'<div class="roster-history-muted">Loading history...</div>':oe.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${oe.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${a(Ts(t.timestamp))}</td>
              <td>${a(t.event_type||"")}</td>
              <td>${Po(t.rank)}</td>
              <td>${a(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function Jo(){return`
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
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
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
  `}function ts(){var t,e,r,n;A==="settings"&&((t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>rs()),(e=document.querySelector("#runDiscordRankAuditReportButton"))==null||e.addEventListener("click",()=>ra()),(r=document.querySelector("#runDiscordLastSeenReportButton"))==null||r.addEventListener("click",()=>oa()),(n=document.querySelector("#runMemberLinksReportButton"))==null||n.addEventListener("click",()=>ga()))}function rs(){Pe=!0,ge="",d(),Ds()}function Sr(){Pe=!1,ge="",d()}function Qo(){const t=Xo(),e=Zo(),r=Fe.length;return`
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
          ${r>0?cn("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${r>0?cn("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${a(ss())}</textarea>
      </div>
    </div>
  `}function Xo(){return Fe.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function Zo(){return Fe.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function cn(t,e,r,n){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${a(t)}</h4>
          <p>${a(e)}</p>
        </div>
        <span>${a(String(r.length))} row${r.length===1?"":"s"}</span>
      </div>
      ${r.length>0?ea(r):`<div class="roster-history-muted report-section-empty">${a(n)}</div>`}
    </section>
  `}function ea(t=Fe){return`
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
              <td>${xr(e.rank||"")}</td>
              <td>${a(Ht(e.joined))}</td>
              <td>${a(Yt(e.purchased_tickets||0))}</td>
              <td>${a(ns(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function ns(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function ss(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Discord Link"]];for(const e of Fe){const r=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([r,e.account_name||"",e.rank||"",Ht(e.joined),Yt(e.purchased_tickets||0),ns(e)])}return t.map(e=>e.map(zt).join("	")).join(`
`)}async function ta(){const t=ss();if(await jt(t)){h("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#associateTicketReportTsv");r&&(r.focus(),r.select()),h("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function ra(){Ge=!0,ye="",d(),Rs()}function wr(){Ge=!1,ye="",d()}function na(){const t=nt.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${te?"disabled":""}>${te?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${ye?`<div class="discord-data-error">${a(ye)}</div>`:""}

        <div class="report-results-content">
          ${te&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!te&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?sa(nt):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${a(as())}</textarea>
      </div>
    </div>
  `}function sa(t=nt){return`
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
              <td>${a(is(e))}</td>
              <td>${a(e.discord_rank||"No matching rank role")}</td>
              <td>${a(e.eso_accounts||"No linked ESO account")}</td>
              <td>${a(e.eso_rank||"None")}</td>
              <td>${a(os(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function is(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function os(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function as(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of nt)t.push([is(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",os(e)]);return t.map(e=>e.map(zt).join("	")).join(`
`)}async function ia(){const t=as();if(await jt(t)){h("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#discordRankAuditReportTsv");r&&(r.focus(),r.select()),h("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function oa(){dt=!0,be="",Ue="",d(),Es(),S.length===0&&!C&&Ut({silent:!0})}function dn(){dt=!1,be="",Ue="",Me="",ne="",d()}function aa(){const t=Or(),e=Tr.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${re?"disabled":""}>${re?"Loading...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(e))} Discord member${e===1?"":"s"}</span>
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
          ${re&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!re&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?ca(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${a(ds(t))}</textarea>
      </div>
    </div>
  `}function ca(t=[]){return`
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
          ${t.map(e=>`
            <tr class="discord-last-seen-row ${u(pa(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-search="${u(cs(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${ha(e)}
                  <span>${a(xe(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${la(e)}</td>
              <td>${a(qr(e.last_seen))}</td>
              <td>${a(Ir(e.last_seen))}</td>
              <td>${a(Bt(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function Ke(t,e){const r=Me===t,n=r?ne==="asc"?"\u25B2":"\u25BC":"\u2195",s=r?`${e}: ${ne==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${r?" active":""}" type="button" data-discord-last-seen-sort="${u(t)}" title="${u(s)}">
      <span>${a(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${a(n)}</span>
    </button>
  `}function Or(){const t=[...Tr],e=Me,r=ne;if(!e||!r)return t;const n=r==="desc"?-1:1;return t.sort((s,i)=>{var o,l;if(e==="date"){const f=Number(s.last_seen||0)||0,m=Number(i.last_seen||0)||0;return(f-m)*n}if(e==="days")return(ln(s.last_seen)-ln(i.last_seen))*n;if(e==="action")return Bt(s.last_seen_action).localeCompare(Bt(i.last_seen_action),void 0,{sensitivity:"base"})*n;if(e==="eso"){const f=st(s),m=st(i),v={linked:0,candidate:1,unlinked:2},w=((o=v[f.status])!=null?o:9)-((l=v[m.status])!=null?l:9);return w!==0?w*n:f.esoAccountName.localeCompare(m.esoAccountName,void 0,{sensitivity:"base"})*n}return xe(s).localeCompare(xe(i),void 0,{sensitivity:"base"})*n})}function da(t){Me!==t?(Me=t,ne="asc"):ne==="asc"?ne="desc":(Me="",ne=""),d()}function xe(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function cs(t){return[xe(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,ua(t),qr(t==null?void 0:t.last_seen),Ir(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function st(t){const e=Ea(t==null?void 0:t.discord_id),r=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),n=String((e==null?void 0:e.eso_account_name)||"").trim();return r==="linked"&&n?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:n,title:`Linked ESO account: ${n}`}:(r==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&n?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:n,title:`Fuzzy ESO account candidate: ${n}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function la(t){const e=st(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${u(e.className)}"
      title="${u(e.title)}"
      aria-label="${u(e.label)}"
      role="img"
    ></span>
  `}function ua(t){const e=st(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function fa(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!r)return"";if(/^https?:\/\//i.test(e))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function ha(t){const e=xe(t),r=e?e.slice(0,2).toUpperCase():"?",n=fa(t);return n?`<span class="discord-member-avatar"><img src="${u(n)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${a(r)}</span>`}function qr(t){const e=Number(t);if(!e)return"Never";const r=new Date(e*1e3);if(Number.isNaN(r.getTime()))return String(t||"");const n=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(r).reduce((s,i)=>(s[i.type]=i.value,s),{});return`${n.month}/${n.day}/${n.year} ${n.hour}:${n.minute} ${n.dayPeriod}`}function pa(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const r=(Date.now()-e*1e3)/864e5;return r>30?"discord-last-seen-red":r>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function Ir(t){const e=Number(t);if(!e)return"Never";const r=Date.now()-e*1e3;if(!Number.isFinite(r))return"";if(r<0)return"0 days";const n=Math.floor(r/864e5);return`${n} day${n===1?"":"s"}`}function ln(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const r=Date.now()-e*1e3;return Number.isFinite(r)?r<0?0:Math.floor(r/864e5):Number.POSITIVE_INFINITY}function Bt(t){return String(t||"").trim()||"None tracked"}function ds(t=Or()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const r of t){const n=st(r);e.push([xe(r),n.label||"",n.esoAccountName||"",qr(r==null?void 0:r.last_seen),Ir(r==null?void 0:r.last_seen),Bt(r==null?void 0:r.last_seen_action),(r==null?void 0:r.username)||"",(r==null?void 0:r.discord_id)||""])}return e.map(r=>r.map(zt).join("	")).join(`
`)}async function ma(){const t=Or().filter(s=>{const i=H(Ue);return i?H(cs(s)).includes(i):!0}),e=ds(t);if(await jt(e)){h("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#discordLastSeenReportTsv");n&&(n.focus(),n.select()),h("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function ga(){Ve=!0,q="",d(),S.length===0&&!C&&Ut({silent:!0})}function _r(){Ve=!1,Gt="",K=-1,d()}function ya(){return`
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
          ${Sa()}
        </div>
      </div>
    </div>
  `}function ls(){var r,n,s;if(!Ve)return;(r=document.querySelector("#closeMemberLinksReportButton"))==null||r.addEventListener("click",_r),(n=document.querySelector("#refreshMemberLinksButton"))==null||n.addEventListener("click",()=>Ut()),(s=document.querySelector("#runMemberAutoLinkButton"))==null||s.addEventListener("click",()=>Aa());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",wa),t.addEventListener("keydown",_a),fs()),document.querySelectorAll("[data-accept-member-candidate]").forEach(i=>{i.addEventListener("click",()=>hs(i.dataset.acceptMemberCandidate||"",i.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(i=>{i.addEventListener("click",()=>La(i.dataset.unlinkMemberLink||"",i.dataset.unlinkMemberLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",i=>{i.target===e&&_r()})}function un(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),r=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();return e==="candidate"||r==="fuzzy"?0:e==="linked"?2:1}function fn(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function ba(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id,t==null?void 0:t.link_status,t==null?void 0:t.link_method,t==null?void 0:t.match_reason,t==null?void 0:t.match_field,xt(t)].filter(Boolean).join(" ")}function va(t){return[...Array.isArray(t)?t:[]].sort((e,r)=>{const n=un(e)-un(r);if(n!==0)return n;const s=fn(e).localeCompare(fn(r),void 0,{sensitivity:"base"});return s!==0?s:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((r==null?void 0:r.discord_user_id)||""),void 0,{sensitivity:"base"})})}function ka(t){const e=xt(t);let r="";e==="Username"?r=(t==null?void 0:t.discord_username)||"":e==="Global Name"?r=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(r=(t==null?void 0:t.discord_server_nickname)||""),r||(r=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const n=e?` <span class="member-link-report-match-field">(${a(e)})</span>`:"";return`<span class="member-link-report-discord-name">${a(r)}</span>${n}`}function Sa(){return C&&S.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(S)||S.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${va(S).map(e=>{var i;const r=String(e.link_status||"").trim().toLowerCase(),n=String(e.link_method||"").trim().toLowerCase(),s=ka(e);return`
              <tr data-member-links-report-row data-member-links-report-search="${u(ba(e))}">
                <td>${a(e.eso_account_name||"")}</td>
                <td>${s}</td>
                <td class="member-links-status-col">${a(r||"")}</td>
                <td class="member-links-method-col">${a(n||"")}${Number(e.locked||0)===1?" \u{1F512}":""}</td>
                <td class="member-links-action-col">
                  <div class="member-link-actions">
                    ${r==="candidate"?`<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${u(e.eso_account_name||"")}" data-accept-member-candidate-discord-id="${u(e.discord_user_id||"")}" aria-label="Accept candidate link" title="Accept candidate link">\u2713</button>`:""}
                    ${r==="linked"?`<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${u(e.eso_account_name||"")}" data-unlink-member-link-discord-id="${u(e.discord_user_id||"")}" aria-label="Unlink this ESO/Discord pair" title="Unlink this ESO/Discord pair">\u{1F5D1}</button>`:""}
                  </div>
                </td>
                <td class="member-links-confidence-col">${a(String((i=e.match_confidence)!=null?i:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function us(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function hn(t){const e=us();if(e.forEach(n=>n.classList.remove("member-links-report-row-active")),e.length===0){K=-1;return}K=Math.max(0,Math.min(t,e.length-1));const r=e[K];r.classList.add("member-links-report-row-active"),r.scrollIntoView({block:"nearest"})}function fs(){const t=H(Gt),e=[...document.querySelectorAll("[data-member-links-report-row]")];let r=0;e.forEach(s=>{const i=H(s.dataset.memberLinksReportSearch||s.textContent||""),o=!t||i.includes(t);s.hidden=!o,s.classList.remove("member-links-report-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinksReportSearchEmpty");n&&(n.hidden=r!==0),K=-1}function wa(t){Gt=t.target.value||"",fs()}function _a(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=us();if(e.length===0)return;if(t.key==="ArrowDown"){const n=K<0?0:K+1;hn(n>=e.length?e.length-1:n);return}const r=K<0?e.length-1:K-1;hn(r<0?0:r)}async function Ut(t={}){if(!(c!=null&&c.connected)){q="You must be connected to load member links.",d();return}C=!0,q="",t.silent||d();try{const e=await _("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");S=Array.isArray(e.links)?e.links:[]}catch(e){q=k(e)}finally{C=!1,d()}}async function Aa(){if(!(c!=null&&c.connected)||!y.logged_in){q="You must be logged in and connected to run auto-linking.",d();return}C=!0,q="",d();try{const t=await _("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");S=Array.isArray(t.links)?t.links:[],h("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:p})}catch(t){q=k(t)}finally{C=!1,d()}}async function hs(t,e=""){try{const r=await _("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to accept candidate.");S=Array.isArray(r.links)?r.links:S,h("member-link-accepted",r.message||"Candidate accepted as a link.",{ttlMs:p})}catch(r){q=k(r),h("member-link-accept-error",q,{ttlMs:p})}}async function La(t,e=""){if(!!await Kn({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const n=await _("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to unlink member.");S=Array.isArray(n.links)?n.links:S,h("member-link-unlinked",n.message||"Member link removed.",{ttlMs:p})}catch(n){q=k(n)}d()}}function Ae(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function Vt(t){const e=Ae(t);return e?S.filter(r=>Ae(r.eso_account_name)===e):[]}function Wt(t){const e=String(t||"").trim();return e?S.filter(r=>String(r.discord_user_id||"").trim()===e):[]}function ps(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const r=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked");if(r.length>0){const s=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(s)return s;const i=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return i||r[0]}const n=e.find(s=>String(s.link_status||"").trim().toLowerCase()==="candidate");return n||e[0]}function Ea(t){return ps(Wt(t))}function Ra(t){return`${Ae(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function Pr(){return b?b.mode==="discord-to-eso"?Wt(b.discordUserId):Vt(b.esoAccountName):[]}function Da(t){const e=String(t||"").trim(),r=T.find(n=>String(n.discord_id||"").trim()===e);return r&&(r.server_nickname||r.global_name||r.username||r.discord_id)||e}function ms(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?Wt(t.discordUserId):Vt(t.esoAccountName),n=ps(r),s=String((n==null?void 0:n.link_status)||"").trim().toLowerCase(),i=r.filter(l=>String(l.link_status||"").trim().toLowerCase()==="linked").length,o=r.filter(l=>String(l.link_status||"").trim().toLowerCase()==="candidate").length;return i>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?i===1?n.eso_account_name:`${i} ESO accounts`:i===1?n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member":`${i} Discord accounts`}`}:s==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?n.eso_account_name:n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member"}`}:s==="blocked"||Number((n==null?void 0:n.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function gs(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,n=ms(t);return`
    <button
      class="member-link-status-dot member-link-status-${u(n.className)}"
      type="button"
      title="${u(n.title)}"
      aria-label="${u(n.label)}"
      data-open-member-link-dialog="${u(e)}"
      data-member-link-value="${u(r||"")}"
    ></button>
  `}function $a(){return b?b.mode==="discord-to-eso"?Da(b.discordUserId):b.esoAccountName||"":""}function ys(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function xt(t){const e=ys((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const r=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(r.includes("discord_username")||r.includes("username"))return"Username";if(r.includes("discord_display_name")||r.includes("global")||r.includes("display"))return"Global Name";if(r.includes("discord_server_nickname")||r.includes("server")||r.includes("nickname"))return"Server Nickname";const n=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(n==="exact"||n==="fuzzy"){const s=(t==null?void 0:t.eso_account_name)||"",i=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const l of i){const f=Ma(s,l.value);(!o||f>o.score)&&(o={...l,score:f})}if(o&&o.score>0)return o.field}return""}function H(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function Ma(t,e){const r=H(t),n=H(e);if(!r||!n)return 0;if(r===n)return 100;if((r.includes(n)||n.includes(r))&&Math.min(r.length,n.length)>=4)return 88;const s=Math.abs(r.length-n.length),i=[...r].findIndex((l,f)=>l!==n[f]),o=i===-1?Math.min(r.length,n.length):i;return Math.max(0,Math.min(75,Math.round(o*10-s*3)))}function Na(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function Ta(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function Ca(t){var f;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",r=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",n=String(t.link_status||"").trim().toLowerCase(),s=n==="linked",i=n==="candidate",o=s?"Current Link":i?"Suggested Link":"Blocked Link",l=s?`<button
        class="member-link-trash-button"
        type="button"
        aria-label="Unlink this ESO/Discord pair"
        title="Unlink this ESO/Discord pair"
        data-unlink-dialog-member-link
        data-unlink-eso-account="${u(t.eso_account_name||"")}"
        data-unlink-discord-user-id="${u(t.discord_user_id||"")}"
      >\u{1F5D1}</button>`:i?`<button
          class="member-link-approve-button"
          type="button"
          aria-label="Approve suggested link"
          title="Approve suggested link"
          data-accept-dialog-member-candidate="${u(t.eso_account_name||"")}"
          data-accept-dialog-discord-user-id="${u(t.discord_user_id||"")}"
        >\u2713</button>`:"";return`
    <div class="member-link-current-card">
      <div class="member-link-current-details">
        <div class="member-link-current-kind">${a(o)}</div>
        <div><span>ESO:</span> ${a(t.eso_account_name||"")}</div>
        <div><span>Discord:</span> ${a(e)}</div>
        <div><span>Status:</span> ${a(Na(t.link_status))} \xB7 ${a(Ta(t.link_method))} \xB7 ${a(String((f=t.match_confidence)!=null?f:""))}% \xB7 ${a(r)}</div>
        ${xt(t)?`<div><span>Matched:</span> Matched on ${a(xt(t))}</div>`:""}
      </div>
      ${l}
    </div>
  `}function Ba(){const t=Pr();return t.length?[...t].sort((r,n)=>{var f,m;const s=String(r.link_status||"").trim().toLowerCase(),i=String(n.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},l=((f=o[s])!=null?f:9)-((m=o[i])!=null?m:9);return l!==0?l:Number(n.match_confidence||0)-Number(r.match_confidence||0)}).map(r=>Ca(r)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function xa(){if(Be)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(Z)return`<div class="discord-data-error">${a(Z)}</div>`;if(!Array.isArray(ve)||ve.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(Pr().map(r=>Ra(r))),e=[...ve].filter(r=>{const n=(b==null?void 0:b.mode)==="discord-to-eso"?`${Ae(r.account_name)}::${String(b.discordUserId||"").trim()}`:`${Ae(b==null?void 0:b.esoAccountName)}::${String(r.discord_id||"").trim()}`;return!t.has(n)}).sort((r,n)=>{const s=Number(n.confidence||0)-Number(r.confidence||0);return s!==0?s:pn(r).localeCompare(pn(n),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(r=>Oa(r)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function pn(t){return((b==null?void 0:b.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function Oa(t,e={}){var w,N,Ee;const r=(b==null?void 0:b.mode)||"",n=r==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",s=ys(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),i=r==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[i,s?`Matched on ${s}`:""].filter(Boolean).join(" \u2022 "),l=r==="discord-to-eso"?t.account_name:t.discord_id,f=e.disabled===!0,m=[n,i,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),v=[n,o,`${(w=t.confidence)!=null?w:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${u(l||"")}" data-member-link-option-search="${u(m)}" title="${u(v)}" ${f?"disabled":""}>
      <span class="member-link-option-name" title="${u(n||"")}">${a(n||"")}</span>
      <span class="member-link-option-subtitle" title="${u(o||"")}">${a(o||"")}</span>
      <span class="member-link-option-confidence" title="${u(String((N=t.confidence)!=null?N:0))}%">${a(String((Ee=t.confidence)!=null?Ee:0))}%</span>
    </button>
  `}function qa(){const t=(b==null?void 0:b.mode)||"",e=$a(),r=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
              value="${u(lt)}"
            />
            ${xa()}
          </section>
        </div>

      </div>
    </div>
  `}async function bs(t,e){if(!(c!=null&&c.connected)||!L()){h("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:p});return}fe=!0,b=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},ve=[],Be=!0,Z="",lt="",G=-1,d();try{if(!Array.isArray(S)||S.length===0){const s=await _("guildsync:request-member-links",{},3e4);s!=null&&s.ok&&(S=Array.isArray(s.links)?s.links:[])}const n=await _("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load link suggestions.");ve=Array.isArray(n.options)?n.options:[]}catch(r){Z=k(r)}finally{Be=!1,d()}}function Oe(){document.removeEventListener("keydown",Ar),fe=!1,b=null,ve=[],Be=!1,Z="",lt="",G=-1,d()}function vs(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function mn(t){const e=vs();if(e.forEach(n=>n.classList.remove("member-link-option-row-active")),e.length===0){G=-1;return}G=Math.max(0,Math.min(t,e.length-1));const r=e[G];r.classList.add("member-link-option-row-active"),r.scrollIntoView({block:"nearest"})}function ks(){const t=H(lt),e=[...document.querySelectorAll(".member-link-option-row")];let r=0;e.forEach(s=>{const i=H(s.dataset.memberLinkOptionSearch||s.textContent||""),o=!t||i.includes(t);s.hidden=!o,s.classList.remove("member-link-option-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinkSuggestionSearchEmpty");n&&(n.hidden=r!==0),G=-1}function Ia(t){lt=t.target.value||"",ks()}function Pa(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=vs();if(e.length===0)return;if(t.key==="ArrowDown"){const n=G<0?0:G+1;mn(n>=e.length?e.length-1:n);return}const r=G<0?e.length-1:G-1;mn(r<0?0:r)}function Ar(t){!fe||t.key==="Escape"&&(t.preventDefault(),Oe())}async function Fa(t){if(!(!b||!t))try{const e=b.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:b.discordUserId}:{esoAccountName:b.esoAccountName,discordUserId:t},r=await _("guildsync:manual-link-member",e,3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to link members.");S=Array.isArray(r.links)?r.links:S,h("member-link-saved",r.message||"Member link saved.",{ttlMs:p}),Oe()}catch(e){Z=k(e),d()}}async function Ga(t,e=""){await hs(t,e),Oe()}async function Ua(){if(!!b){Be=!0,Z="",d();try{const t=b.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:b.discordUserId}:{mode:"eso-to-discord",accountName:b.esoAccountName},e=await _("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");ve=Array.isArray(e.options)?e.options:[]}catch(t){Z=k(t)}finally{Be=!1,d()}}}async function Va(t="",e=""){const r=Pr().find(s=>Ae(s.eso_account_name)===Ae(t)&&String(s.discord_user_id||"").trim()===String(e||"").trim());if(!(!r||!await Kn({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const s=await _("guildsync:manual-unlink-member",{esoAccountName:r.eso_account_name,discordUserId:r.discord_user_id},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to unlink member.");S=Array.isArray(s.links)?s.links:S,h("member-link-unlinked",s.message||"Member link removed.",{ttlMs:p}),await Ua()}catch(s){Z=k(s),d()}}function Ss(){var r;if(!fe)return;document.removeEventListener("keydown",Ar),document.addEventListener("keydown",Ar),(r=document.querySelector("#closeMemberLinkDialogButton"))==null||r.addEventListener("click",Oe);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",Ia),t.addEventListener("keydown",Pa),ks()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(n=>{n.addEventListener("click",()=>Va(n.dataset.unlinkEsoAccount||"",n.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(n=>{n.addEventListener("click",()=>Fa(n.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(n=>{n.addEventListener("click",()=>Ga(n.dataset.acceptDialogMemberCandidate||"",n.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",n=>{n.target===e&&Oe()})}function ws(){var e,r,n;if(!Pe)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",Sr),(r=document.querySelector("#rerunAssociateTicketReportButton"))==null||r.addEventListener("click",()=>Ds()),(n=document.querySelector("#copyAssociateTicketReportGridButton"))==null||n.addEventListener("click",()=>ta());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",s=>{s.target===t&&Sr()})}function _s(){var e,r,n;if(!Ge)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",wr),(r=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||r.addEventListener("click",()=>Rs()),(n=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||n.addEventListener("click",()=>ia());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",s=>{s.target===t&&wr()})}function As(){var r,n,s;if(!dt)return;(r=document.querySelector("#closeDiscordLastSeenReportButton"))==null||r.addEventListener("click",dn),(n=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||n.addEventListener("click",()=>Es()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>ma()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(i=>{i.addEventListener("click",()=>da(i.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&(t.addEventListener("input",Wa),Ls());const e=document.querySelector(".discord-last-seen-report-overlay");e&&e.addEventListener("click",i=>{i.target===e&&dn()})}function Wa(t){Ue=t.target.value||"",Ls()}function Ls(){const t=H(Ue),e=[...document.querySelectorAll("[data-discord-last-seen-row]")];let r=0;e.forEach(s=>{const i=H(s.dataset.discordLastSeenSearch||s.textContent||""),o=!t||i.includes(t);s.hidden=!o,o&&(r+=1)});const n=document.querySelector("#discordLastSeenReportSearchEmpty");n&&(n.hidden=r!==0)}async function Es(){if(!(c!=null&&c.connected)||!L()){be="You must be logged in and connected to run this report.",d();return}re=!0,be="",d();try{const t=await _("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");T=Hr(t.members),Tr=[...T]}catch(t){be=k(t)}finally{re=!1,d(),X("discordLastSeenReportSearchInput")}}async function Rs(){if(!(c!=null&&c.connected)||!L()){ye="You must be logged in and connected to run this report.",d();return}te=!0,ye="",d();try{const t=await _("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");nt=Array.isArray(t.rows)?t.rows:[]}catch(t){ye=k(t)}finally{te=!1,d()}}async function Ds(){if(!(c!=null&&c.connected)||!L()){ge="You must be logged in and connected to run this report.",d();return}ee=!0,ge="",d();try{const t=await _("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Fe=Array.isArray(t.rows)?t.rows:[]}catch(t){ge=k(t)}finally{ee=!1,d()}}function Lr(){const t=String(He||"").trim().toLowerCase();return t?F.filter(e=>String(e.account_name||"").trim()).filter(e=>String(e.account_name||"").toLowerCase().includes(t)).slice().sort((e,r)=>{const n=String(e.account_name||"").toLowerCase(),s=String(r.account_name||"").toLowerCase(),i=n.startsWith(t)?0:1,o=s.startsWith(t)?0:1;return i!==o?i-o:n.localeCompare(s)}).slice(0,20):[]}function gn(t){const e=String(t||"").trim();$.accountName=e,He=e,j="",d(),X("manualTicketAccountSearchInput")}function X(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const r=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(r,r)},0)}function Ha(){const t=Lr(),e=String($.accountName||"").trim();return`
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
            <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(He)}" autocomplete="off" />
          </label>

          ${e?`<div class="roster-history-muted">Selected: ${a(e)}</div>`:""}

          <div class="roster-history-match-list manual-ticket-match-list">
            ${t.length===0?'<div class="roster-history-muted">No matching names</div>':t.map((r,n)=>`
                <button class="roster-history-match${n===z||r.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${u(r.account_name)}">
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
  `}function $s(){var s,i,o,l,f;if(!Q)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{Q=!1,d()});const t=document.querySelector("#manualTicketAccountSearchInput");t&&(t.addEventListener("input",m=>{He=m.target.value||"",$.accountName="",z=Lr().length>0?0:-1,d(),X("manualTicketAccountSearchInput")}),t.addEventListener("keydown",m=>{const v=Lr();if(m.key==="ArrowDown"||m.key==="ArrowUp"){if(v.length===0)return;m.preventDefault();const N=m.key==="ArrowDown"?1:-1;z=((z<0?0:z)+N+v.length)%v.length,d(),X("manualTicketAccountSearchInput");return}if(m.key!=="Enter")return;m.preventDefault();const w=v[z>=0?z:0];w!=null&&w.account_name&&gn(w.account_name)})),document.querySelectorAll("[data-manual-ticket-account]").forEach(m=>{m.addEventListener("click",()=>{gn(m.dataset.manualTicketAccount||"")})}),(i=document.querySelector("#manualTicketNoteInput"))==null||i.addEventListener("input",m=>{$.note=m.target.value||""});const e=document.querySelector("#manualTicketCountInput");e==null||e.addEventListener("input",m=>{const v=String(m.target.value||"").replace(/\D/g,"");m.target.value!==v&&(m.target.value=v),$.tickets=v});const r=m=>{const v=Number($.tickets)||0,w=Math.max(1,v+m);$.tickets=String(w),e&&(e.value=$.tickets,e.focus())};(o=document.querySelector("#manualTicketCountUpButton"))==null||o.addEventListener("click",()=>r(1)),(l=document.querySelector("#manualTicketCountDownButton"))==null||l.addEventListener("click",()=>r(-1)),(f=document.querySelector("#saveManualBiweeklyTicketButton"))==null||f.addEventListener("click",()=>za());const n=document.querySelector(".roster-history-overlay");n&&n.addEventListener("click",m=>{m.target===n&&(Q=!1,d())})}async function za(){const t=String($.accountName||"").trim(),e=String($.note||"").trim(),r=Number($.tickets);if(!t){j="Choose a guild member.",d();return}if(!e){j="Enter a reason or note.",d();return}if(!Number.isFinite(r)||r<=0){j="Enter the number of tickets to add.",d();return}Nt=!0,j="",d();try{const n=await _("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,tickets:Math.floor(r)},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to add manual ticket entry.");Q=!1,$={accountName:"",note:"",tickets:""},He="",z=-1,await Kt({silent:!0}),h("manual-ticket-added",n.message||"Manual ticket entry added.",{ttlMs:p})}catch(n){j=k(n)}finally{Nt=!1,d()}}function Ms(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>ft());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{Ce=!0,J="",d()});const r=document.querySelector("#rosterMemberSearch");r&&(r.addEventListener("input",o=>{Mt=o.target.value||"",yr=o.target.selectionStart,br=o.target.selectionEnd,R=-1,d({restoreRosterSearchFocus:!0})}),r.addEventListener("keydown",ja)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Uo(o.dataset.rosterSortColumn||"account_name")})});const n=document.querySelector("#rosterRankFilter");n&&n.addEventListener("change",o=>{const l=String(o.target.value||"").trim();l&&(me.add(l),R=-1,d())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const l=o.dataset.removeRosterRankFilter||"";me.delete(l),R=-1,d()})});const s=document.querySelector("#rosterLinkStatusFilter");s&&s.addEventListener("change",o=>{const l=String(o.target.value||"").trim();l&&($e.add(l),R=-1,d())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const l=o.dataset.removeRosterLinkStatusFilter||"";$e.delete(l),R=-1,d()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>bs(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const i=document.querySelector("#clearRosterFiltersButton");i&&i.addEventListener("click",()=>{Mt="",me.clear(),$e.clear(),Y="",M="",R=-1,d()}),Ya()}function ja(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){R=-1;return}t.preventDefault(),t.key==="ArrowDown"?R=R<0?0:Math.min(R+1,e.length-1):t.key==="ArrowUp"&&(R=R<0?e.length-1:Math.max(R-1,0)),e.forEach((n,s)=>{n.classList.toggle("roster-search-active-row",s===R)});const r=e[R];r&&typeof r.scrollIntoView=="function"&&r.scrollIntoView({block:"nearest",inline:"nearest"})}function Ya(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{Ce=!1,d()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",r=>{if(rt=r.target.value||"",P=-1,!rt.trim()){clearTimeout(or),J="",x=[],ue="",oe=[],ae=!1,d(),X("rosterHistorySearchInput");return}clearTimeout(or),or=setTimeout(()=>{Ka({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(x.length===0)return;r.preventDefault();const s=r.key==="ArrowDown"?1:-1;P=((P<0?0:P)+s+x.length)%x.length,d(),X("rosterHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=x[P>=0?P:0];n!=null&&n.account_name&&yn(n.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(r=>{r.addEventListener("click",()=>{yn(r.dataset.rosterHistoryAccount||"")})})}async function Ka(t={}){const e=rt.trim();if(!e){J="",x=[],P=-1,ue="",oe=[],ae=!1,d(),t.keepFocus&&X("rosterHistorySearchInput");return}ae=!0,J="",x=[],P=-1,ue="",oe=[],d(),t.keepFocus&&X("rosterHistorySearchInput");try{const r=await _("guildsync:request-roster-rank-history",{query:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search roster rank history.");x=Ja(r.matches),P=x.length>0?0:-1}catch(r){J=k(r)}finally{ae=!1,d(),t.keepFocus&&X("rosterHistorySearchInput")}}async function yn(t,e={}){const r=String(t||"").trim();if(!!r){ue=r,rt=r,oe=[],ae=!0,J="",d();try{const n=await _("guildsync:request-roster-stream-history",{account_name:r},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster stream history.");oe=Qa(n.events)}catch(n){J=k(n)}finally{ae=!1,e.keepLoading||d()}}}function Ja(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function Qa(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(n=(r=e.timestamp)!=null?r:e.timestampS)!=null?n:"",officer:String(e.officer||"").trim()}}):[]}function Ns(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(r=e.joined)!=null?r:""}}).sort((e,r)=>e.account_name.localeCompare(r.account_name)):[]}function Xa(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function Ht(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function Ts(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function Za(t={}){F=Ns(t.members),$t=t.last_refresh||new Date().toISOString(),A==="eso-members"&&d(),h("roster-data-updated",`Roster data updated. Loaded ${F.length} member record${F.length===1?"":"s"}.`,{ttlMs:p})}async function ft(t={}){if(!!(c!=null&&c.connected)){le=!0,d();try{const e=await _("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");F=Ns(e.members),$t=e.last_refresh||$t,t.silent||h("roster-data-loaded",`Loaded ${F.length} roster member${F.length===1?"":"s"}.`,{ttlMs:p})}catch(e){h("roster-data-error",k(e),{ttlMs:p})}finally{le=!1,d()}}}async function ec(t={}){var e;if(!!L()){if(!(c!=null&&c.connected)){h("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}le=!0,d();try{const r=await no(t);if(!(r!=null&&r.ok)){h("roster-data-pending",(r==null?void 0:r.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:p});return}const n={local_upload_id:Cs(),authenticated_username:Le(),authenticated_discord_user_id:((e=y==null?void 0:y.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await xs(n)}catch(s){throw tc(n),s}await ft({silent:!0})}catch(r){h("roster-data-error",k(r),{ttlMs:p})}finally{le=!1,d()}}}function Cs(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Fr(){try{const t=window.localStorage.getItem(Fn),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Bs(t){window.localStorage.setItem(Fn,JSON.stringify(Array.isArray(t)?t:[]))}function tc(t){const e=String((t==null?void 0:t.local_upload_id)||Cs()),r=Fr().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Bs(r),h("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function rc(t){const e=Fr().filter(r=>(r==null?void 0:r.local_upload_id)!==t);Bs(e)}async function nc(){if(ir||!(c!=null&&c.connected)||!L())return;const t=Fr();if(t.length!==0){ir=!0;try{for(const e of t){if(!(c!=null&&c.connected)||!L())return;await xs(e),rc(e.local_upload_id)}}catch(e){h("roster-data-pending-error",`Pending roster upload retry failed: ${k(e)}`,{ttlMs:p})}finally{ir=!1}}}async function xs(t){if(!(c!=null&&c.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await _("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const r=await io(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return h("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:p}),e}function sc(){const t=Er(O),e=fc(t),r=O!=="other";return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <span class="discord-last-refresh">Last Refresh: ${a(zs(Hn))}</span>
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
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${_e||!L()?"disabled":""} ${L()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${_e?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${ar("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${ar("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${ar("other","?","Other","All other deposits")}
        </div>

        ${cc(O)}

        <div class="bank-deposit-table-shell">
          <table class="bank-deposit-table${r?"":" bank-deposit-table-no-tickets"}">
            <thead>
              <tr>
                <th>Event ID</th>
                <th>Date / Time (Local)</th>
                <th>Depositor</th>
                <th>Amount Deposited</th>
                ${r?'<th>Tickets Awarded</th>':""}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(n=>hc(n,r)).join(""):pc(r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${a(Ps(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${r?`<div>Total Tickets Awarded: <strong>${a(Yt(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${ke?ic(Er(ut)):""}
    </div>
  `}function ic(t){return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${a(Ne(ut))} Deposits</h3>
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
              ${t.length>0?t.map(e=>oc(e)).join(""):ac()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${a(qs(t))}</textarea>
      </div>
    </div>
  `}function oc(t){return`
    <tr>
      <td>${a(t.displayName||"")}</td>
      <td>${a(String(Number(t.amount)||0))}</td>
      <td>${a(String(Number(t.ticketAmount)||0))}</td>
      <td>${a(t.note||"")}</td>
    </tr>
  `}function ac(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${a(Ne(ut))}.</td>
    </tr>
  `}function cc(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=Is(t),r=Gr(t),n=r<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${u(Ne(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${a(Ne(t))} Raffle Period ${r===0?"(Current)":`(${Math.abs(r)} period${Math.abs(r)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${a(At(e.salesStart))} through ${a(At(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${a(At(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${n?"":"disabled"} aria-label="Next ${u(Ne(t))} raffle period">\u203A</button>
    </div>
  `}function ar(t,e,r,n){const s=O===t;return`
    <button class="bank-section-card${s?" active":""}" type="button" data-bank-section="${u(t)}" aria-selected="${s?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${a(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${a(r)}</span>
        <span class="bank-section-subtitle">${a(n)}</span>
      </span>
    </button>
  `}function Os(){if(A!=="more")return;document.querySelectorAll("[data-bank-section]").forEach(i=>{i.addEventListener("click",()=>{O=i.dataset.bankSection||"biweekly",d()})}),document.querySelectorAll("[data-bank-export-section]").forEach(i=>{i.addEventListener("click",()=>{ut=(i.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",ke=!0,d()})}),document.querySelectorAll("[data-bank-period-move]").forEach(i=>{i.addEventListener("click",()=>{uc(i.dataset.bankPeriodMove||""),d()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{ke=!1,d()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>dc());const r=document.querySelector(".bank-export-overlay");r&&r.addEventListener("click",i=>{i.target===r&&(ke=!1,d())});const n=document.querySelector("#openManualBiweeklyTicketButton");n&&n.addEventListener("click",async()=>{if(!L()){h("manual-ticket-login-required","Login required to add manual tickets.",{ttlMs:p});return}Q=!0,j="",He=$.accountName||"",F.length===0&&(c==null?void 0:c.connected)&&L()&&await ft({silent:!0}),d()});const s=document.querySelector("#refreshBankingDataButton");s&&s.addEventListener("click",()=>{if(!L()){h("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:p});return}Gs({key:"banking"})})}function qs(t){const e=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const r of t)e.push([r.displayName||"",String(Number(r.amount)||0),String(Number(r.ticketAmount)||0),r.note||""]);return e.map(r=>r.map(zt).join("	")).join(`
`)}function zt(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function jt(t){var s;const e=String(t!=null?t:"");if((s=navigator.clipboard)!=null&&s.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const r=document.createElement("textarea");r.value=e,r.setAttribute("readonly","readonly"),r.style.position="fixed",r.style.left="0",r.style.top="0",r.style.width="1px",r.style.height="1px",r.style.opacity="0",r.style.pointerEvents="none",r.style.zIndex="-1",document.body.appendChild(r),r.focus(),r.select(),r.setSelectionRange(0,r.value.length);let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r)}return n}async function dc(){const t=Er(ut),e=qs(t);if(await jt(e)){h("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#bankingExportTsv");n&&(n.focus(),n.select()),h("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:p})}function Er(t){return V.filter(e=>e.type===t).filter(e=>lc(t,e)).sort((e,r)=>(Number(r.time)||0)-(Number(e.time)||0))}function lc(t,e){if(t==="other")return!0;const r=Number(e==null?void 0:e.time)||0;if(r<=0)return!1;const n=Is(t);return r>=n.salesStart&&r<=n.salesEnd}function Gr(t){return Number(vr[t])||0}function uc(t){if(O!=="biweekly"&&O!=="monthly")return;const e=Gr(O);if(t==="previous"){vr[O]=e-1;return}t==="next"&&e<0&&(vr[O]=e+1)}function Is(t){const e=Math.floor(Date.now()/1e3),r=t==="monthly",n=r?Ao:_o;let s=r?wo:So;for(;s-n>e;)s-=n;for(;s<e;)s+=n;return s+=Gr(t)*n,{salesStart:s-n+1,salesEnd:s,raffleTime:s+Lo}}function fc(t){return t.reduce((e,r)=>(e.amount+=Number(r.amount)||0,e.tickets+=Number(r.ticketAmount)||0,e),{amount:0,tickets:0})}function hc(t,e=!0){return`
    <tr>
      <td>${a(t.note||t.eventId||"")}</td>
      <td>${a(At(t.time))}</td>
      <td>${a(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${a(Ps(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td><strong class="bank-ticket-amount">${a(Yt(t.ticketAmount))}</strong></td>`:""}
    </tr>
  `}function pc(t=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?"5":"4"}">No ${a(Ne(O))} deposits found for this ${O==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function Ne(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function At(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Ps(t){return(Number(t)||0).toLocaleString()}function Yt(t){return(Number(t)||0).toLocaleString()}function Ur(t){return Array.isArray(t)?t.map(e=>{var n,s,i,o,l,f,m,v,w,N,Ee,Qr;const r=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:r==="monthly"||r==="biweekly"||r==="other"?r:"other",eventId:String((s=(n=e==null?void 0:e.eventId)!=null?n:e==null?void 0:e.event_id)!=null?s:"").trim(),time:Number((o=(i=e==null?void 0:e.time)!=null?i:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((f=(l=e==null?void 0:e.displayName)!=null?l:e==null?void 0:e.display_name)!=null?f:"").trim(),amount:Number((m=e==null?void 0:e.amount)!=null?m:0)||0,ticketAmount:Number((w=(v=e==null?void 0:e.ticketAmount)!=null?v:e==null?void 0:e.ticket_amount)!=null?w:0)||0,note:String((N=e==null?void 0:e.note)!=null?N:"").trim(),dataSource:String((Qr=(Ee=e==null?void 0:e.dataSource)!=null?Ee:e==null?void 0:e.data_source)!=null?Qr:"").trim()}}):[]}function mc(t){const e=new Map;for(const r of V)r.eventId&&e.set(r.eventId,r);for(const r of t)!r.eventId||e.set(r.eventId,r);V=Array.from(e.values()).sort((r,n)=>(Number(n.time)||0)-(Number(r.time)||0))}function Fs(){Hn=new Date().toISOString()}async function gc(t={}){!(t!=null&&t.ok)||(V=Ur(t.entries),Fs(),A==="more"&&d(),h("banking-data-updated",`Banking data updated. Loaded ${V.length} deposit record${V.length===1?"":"s"}.`,{ttlMs:p}))}async function Kt(t={}){const e=Boolean(t.silent);if(!(c!=null&&c.connected)){e||h("banking-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}_e=!0,d();try{const r=await _("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");V=Ur(r.entries),Fs(),e||h("banking-data",`Loaded ${V.length} banking deposit record${V.length===1?"":"s"}.`,{ttlMs:p})}catch(r){e||h("banking-data-error",k(r),{ttlMs:p})}finally{_e=!1,d()}}async function Gs(t={}){var e,r;if(!!L()){if(!(c!=null&&c.connected)){h("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}_e=!0,d();try{const n=await ro(t);if(!(n!=null&&n.ok)){h("banking-data-pending",(n==null?void 0:n.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:p});return}const s=Ur((e=n==null?void 0:n.data)==null?void 0:e.entries);mc(s);const i=new Date().toISOString(),o={local_upload_id:Us(),authenticated_username:Le(),authenticated_discord_user_id:((r=y==null?void 0:y.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:i,data:n.data||{}};try{await Ws(o)}catch(l){throw yc(o),l}await Kt({silent:!0})}catch(n){h("banking-data-error",k(n),{ttlMs:p})}finally{_e=!1,d()}}}function Us(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Vr(){try{const t=window.localStorage.getItem(Pn),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Vs(t){window.localStorage.setItem(Pn,JSON.stringify(Array.isArray(t)?t:[]))}function yc(t){const e=String((t==null?void 0:t.local_upload_id)||Us()),r=Vr().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Vs(r),h("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function bc(t){const e=Vr().filter(r=>(r==null?void 0:r.local_upload_id)!==t);Vs(e)}async function vc(){if(sr||!(c!=null&&c.connected)||!L())return;const t=Vr();if(t.length!==0){sr=!0;try{for(const e of t){if(!(c!=null&&c.connected)||!L())return;await Ws(e),bc(e.local_upload_id)}}catch(e){h("banking-data-pending-error",`Pending banking upload retry failed: ${k(e)}`,{ttlMs:p})}finally{sr=!1}}}async function Ws(t){if(!(c!=null&&c.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await _("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const r=await so(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return h("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:p}),e}function Hs(){if(A!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>kc());const e=document.querySelector("#discordMemberSearch");e&&e.addEventListener("input",i=>{Dt=i.target.value||"",mr=i.target.selectionStart,gr=i.target.selectionEnd,d({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(i=>{i.addEventListener("click",()=>{Ec(i.dataset.discordSortColumn||"username")})});const r=document.querySelector("#discordRoleFilter");r&&r.addEventListener("change",i=>{const o=String(i.target.value||"").trim();o&&(Re.add(o),d())}),document.querySelectorAll("[data-remove-role-filter]").forEach(i=>{i.addEventListener("click",()=>{const o=i.dataset.removeRoleFilter||"";Re.delete(o),d()})});const n=document.querySelector("#discordLinkStatusFilter");n&&n.addEventListener("change",i=>{const o=String(i.target.value||"").trim();o&&(De.add(o),d())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(i=>{i.addEventListener("click",()=>{const o=i.dataset.removeDiscordLinkStatusFilter||"";De.delete(o),d()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(i=>{i.addEventListener("click",()=>bs(i.dataset.openMemberLinkDialog||"",i.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{Dt="",Re.clear(),De.clear(),d()})}async function kc(){var t,e;if(!(c!=null&&c.connected)){h("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:p});return}Rt=!0,d(),h("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const r=await _("guildsync:request-discord-data-refresh",{requested_by:((t=y==null?void 0:y.user)==null?void 0:t.display_name)||((e=y==null?void 0:y.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to request Discord data refresh.");h("discord-refresh-requested",r.message||"Discord data refresh completed.",{ttlMs:p}),await Wr({silent:!0})}catch(r){h("discord-refresh-error",k(r),{ttlMs:p})}finally{Rt=!1,d()}}async function Sc(){if(!(c!=null&&c.connected))return;const t=await _("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(Ft=t.value||null)}async function wc(t={}){if(!!(t!=null&&t.ok)){T=Hr(t.members),t.last_refresh&&(Ft=t.last_refresh);try{await Sc()}catch{}A==="discord-members"&&d(),h("discord-data-updated",`Discord data updated. Loaded ${T.length} member record${T.length===1?"":"s"}.`,{ttlMs:p})}}async function Wr(t={}){const e=Boolean(t.silent);if(!(c!=null&&c.connected)){h("discord-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}et=!0,d();try{const[r,n]=await Promise.all([_("guildsync:request-discord-data-date",{}),_("guildsync:request-discord-member-dataJSON",{})]);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord refresh date.");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord member data.");Ft=r.value||null,T=Hr(n.members),e||h("discord-data",`Loaded ${T.length} Discord member record${T.length===1?"":"s"}.`,{ttlMs:p})}catch(r){h("discord-data-error",k(r),{ttlMs:p})}finally{et=!1,d()}}function _(t,e={},r=3e4){return new Promise((n,s)=>{if(!(c!=null&&c.connected)){s(new Error("GuildSync websocket is not connected."));return}let i=!1;const o=window.setTimeout(()=>{i||(i=!0,s(new Error(`${t} timed out.`)))},r);c.emit(t,e,l=>{i||(i=!0,window.clearTimeout(o),n(l))})})}function Hr(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(_c).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,r)=>it(e).localeCompare(it(r),void 0,{sensitivity:"base"})):[]}function _c(t){var s,i;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),r=String(t.role_name||t.name||"Unnamed Role").trim(),n=(i=(s=t.role_color)!=null?s:t.color)!=null?i:null;return{role_id:e,role_name:r||"Unnamed Role",role_color:n}}function Ac(){const t=Dt.trim().toLowerCase(),e=Array.from(Re),r=T.filter(n=>{if(t&&![n.username,n.global_name,n.server_nickname,n.discord_id,...n.roles.map(i=>i.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const s=new Set(n.roles.map(i=>i.role_name));if(!e.every(i=>s.has(i)))return!1}return!!es(De,zo(n))});return Lc(r)}function Lc(t){const e=pe==="desc"?-1:1;return[...t].sort((r,n)=>{const s=bn(r,tt),i=bn(n,tt),o=s.localeCompare(i,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:it(r).localeCompare(it(n),void 0,{sensitivity:"base",numeric:!0})})}function bn(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(r=>r.role_name||"").filter(Boolean).sort((r,n)=>r.localeCompare(n,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function Ec(t){const r=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";tt===r?pe=pe==="asc"?"desc":"asc":(tt=r,pe="asc"),d()}function yt(t,e){const r=tt===t,n=pe==="asc"?"ascending":"descending",s=r?pe==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${r?n:"none"}">
      <button
        class="discord-sort-header${r?" active":""}"
        type="button"
        data-discord-sort-column="${u(t)}"
        title="Sort ${u(e)} ${r&&pe==="asc"?"descending":"ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function Rc(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(mr)?mr:t.value.length,r=Number.isInteger(gr)?gr:e;t.setSelectionRange(e,r)}}function Dc(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(yr)?yr:t.value.length,r=Number.isInteger(br)?br:e;t.setSelectionRange(e,r)}}function $c(){const t=new Set;for(const e of T)for(const r of e.roles)r.role_name&&t.add(r.role_name);return Array.from(t).sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function Mc(t){const e=Bc(t),r=it(t),n=t.roles||[];return`
    <tr data-discord-user-id="${u(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${u(e)}" alt="${u(r)}" />`:`<span>${a(ei(r))}</span>`}
          </div>
          <span>${a(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${a(t.global_name||"")}</td>
      <td>${a(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${n.length>0?n.map(s=>Tc(s)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${gs({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function Nc(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${a(et?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function Tc(t){const e=Jt(t.role_color),r=Yr(e),n=jr(e,r);return`
    <span
      class="discord-role-badge"
      title="${u(t.role_name)}"
      style="${n}"
    >${a(t.role_name)}</span>
  `}function Cc(t){const e=zr(t),r=Jt(e==null?void 0:e.role_color),n=Yr(r),s=jr(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-role-filter="${u(t)}"
      style="${s}"
      title="Remove ${u(t)} filter"
    >
      <span>${a(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function zr(t){for(const e of T){const r=e.roles.find(n=>n.role_name===t);if(r)return r}return null}function Jt(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function jr(t,e){return[`--role-fill-top: ${vn(t,"#ffffff",.16)}`,`--role-fill-bottom: ${vn(t,"#000000",.1)}`,`--role-fill-glow: ${kn(t,.28)}`,`--role-fill-edge: ${kn(t,.46)}`,`color: ${e}`].join("; ")}function vn(t,e,r){const n=bt(t)||bt("#64748b"),s=bt(e)||bt("#ffffff"),i=Math.max(0,Math.min(1,Number(r)||0)),o=Math.round(n.red+(s.red-n.red)*i),l=Math.round(n.green+(s.green-n.green)*i),f=Math.round(n.blue+(s.blue-n.blue)*i);return`#${cr(o)}${cr(l)}${cr(f)}`}function bt(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function cr(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function kn(t,e){const r=String(t||"#64748b").replace("#",""),n=/^[0-9a-f]{6}$/i.test(r)?r:"64748b",s=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),o=parseInt(n.slice(4,6),16);return`rgba(${s}, ${i}, ${o}, ${e})`}function Yr(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const r=parseInt(e.slice(0,2),16),n=parseInt(e.slice(2,4),16),s=parseInt(e.slice(4,6),16);return(r*299+n*587+s*114)/1e3>150?"#0F172A":"#F8FAFC"}function Bc(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!r)return"";const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function it(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function zs(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Lt(){const t=document.querySelector("#discordArea");if(!!t){if(ht(!1),L()){const e=y.user||{},r=Le(),n=Qc(e),s=ei(r);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${n?`<img src="${u(n)}" alt="${u(r)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${a(s)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const i=document.querySelector("#discordAvatarButton");i.addEventListener("contextmenu",o=>{o.preventDefault(),Sn()}),i.addEventListener("click",()=>{Sn()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",Pc)}}function Sn(){if(ct){ht();return}Ic()}function xc(t=ie){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],r=String((t==null?void 0:t.directory)||"").trim(),n=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(s=>{const i=String((s==null?void 0:s.key)||(s==null?void 0:s.fileName)||"").trim(),o=String((s==null?void 0:s.fileName)||"SavedVariables file").trim(),l=String((s==null?void 0:s.filePath)||(r?`${r}\\${o}`:o)).trim(),f=(s==null?void 0:s.enabled)!==!1,m=n&&f,v=`profileFileWatchToggle-${qc(i||o)}`;return`
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
  `}function Kr(){var n,s,i;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=Le(),r=((n=y.user)==null?void 0:n.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${a(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${a(Xc(r))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${a(Pt)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${ie!=null&&ie.watching?"Active":"Stopped"}</span>
        </div>
        ${xc()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(s=document.querySelector("#discordLogoutButton"))==null||s.addEventListener("click",Fc),(i=document.querySelector("#associateTicketReportButton"))==null||i.addEventListener("click",()=>{ht(!1),rs()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",Oc)})}async function js(){try{ie=await oo(),ct&&Kr()}catch(t){h("file-watcher-error",k(t),{ttlMs:p})}}async function Oc(t){var n;const e=t.currentTarget,r=String(((n=e==null?void 0:e.dataset)==null?void 0:n.filewatchKey)||"").trim();if(!!r)try{e.disabled=!0,ie=await fo(r,e.checked),await Te({silent:!0}),ct&&Kr()}catch(s){h("file-watcher-error",k(s),{ttlMs:p}),await js()}}function qc(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function Ic(){const t=document.querySelector("#discordProfileMenu");!t||(Kr(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),ct=!0,js(),setTimeout(()=>{window.addEventListener("click",Ys),window.addEventListener("keydown",Ks)},0))}function ht(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),ct=!1,t&&(window.removeEventListener("click",Ys),window.removeEventListener("keydown",Ks))}function Ys(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&ht()}function Ks(t){t.key==="Escape"&&ht()}async function Pc(){try{h("auth","Opening Discord login...",{ttlMs:p});const t=await po();t!=null&&t.status_message&&h("auth",t.status_message,{ttlMs:p}),ce()}catch(t){h("auth-error",k(t),{ttlMs:p}),ce()}}async function Fc(){try{y=await co(),h("auth",y.status_message||"Logged out.",{ttlMs:p}),zn(),Ze(),await Te()}catch(t){h("auth-error",k(t),{ttlMs:p}),ce()}}function Ze(){const t=y.socket_url||"https://guildsync.perdues.me";Gc(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};y!=null&&y.token&&(e.auth={token:y.token}),c=wt(t,e),c.on("connect",()=>{ce(),Js(),A==="discord-members"&&Wr({silent:!0}),A==="eso-members"&&ft({silent:!0}),A==="more"&&Kt({silent:!0}),vc(),nc(),Uc()}),c.on("connect_error",()=>{ce(),Ot()}),c.on("disconnect",()=>{ce(),Ot()}),c.on("guildsync:version-status",r=>{Vc(r)}),c.on("guildsync:discord-member-data-updated",r=>{wc(r)}),c.on("guildsync:banking-data-updated",r=>{gc(r)}),c.on("guildsync:roster-data-updated",r=>{Za(r)}),c.on("guildsync:member-links-updated",(r={})=>{Array.isArray(r.links)&&(S=r.links,(A==="discord-members"||A==="eso-members"||A==="settings"||fe)&&d())}),c.on("guildsync:discord-refresh-status",(r={})=>{const n=String(r.message||"").trim();n&&h("discord-refresh-status",n,{ttlMs:p})})}function Gc(t=!0){Ot(),c&&(c.disconnect(),c=null),t&&ce()}function Js(){!(c!=null&&c.connected)||c.emit("guildsync:client-version",{version:Pt})}function Uc(){Ot(),_t=window.setInterval(()=>{Js()},bo)}function Ot(){_t&&(window.clearInterval(_t),_t=null)}function Vc(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown";h("version",`GuildSync is out of date. Current version: ${Pt}. Latest version: ${e}.`);return}Jr("version")}}function h(t,e,r={}){const n=String(t||"").trim(),s=String(e||"").trim();if(!(!n||!s)){if(de.set(n,s),he.has(n)&&(window.clearTimeout(he.get(n)),he.delete(n)),r.ttlMs&&Number(r.ttlMs)>0){const i=window.setTimeout(()=>{Jr(n)},Number(r.ttlMs));he.set(n,i)}qe()}}function Jr(t){const e=String(t||"").trim();if(!!e){if(de.delete(e),he.has(e)&&(window.clearTimeout(he.get(e)),he.delete(e)),D===e){Zt(()=>{D="",qe()});return}qe()}}function qe(){const t=Qt();if(t.length===0){Se?Zt(ot):ot();return}!Se&&!we&&Xt(t[0])}function Qt(){return Array.from(de.keys())}function Qs(){const t=Qt();if(t.length===0)return"";if(!D)return t[0];const e=t.indexOf(D);return e<0?t[0]:t[(e+1)%t.length]}function Xt(t){const e=document.querySelector("#statusMessageTrack");if(!e||!de.has(t)){ot();return}er();const r=de.get(t);D=t,Se=!0,we=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=r,e.style.setProperty("--message-fade-duration",`${Un}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",we=!1,Wc()},{once:!0})})}function Wc(){const t=Qt();if(!D||!de.has(D)){qe();return}if(t.length<=1){wn(!1);return}wn(!0)}function wn(t){const e=document.querySelector("#statusMessageViewport"),r=document.querySelector("#statusMessageTrack");if(!e||!r)return;const n=Math.max(0,r.scrollWidth-e.clientWidth);if(n<=0){t&&at(()=>{Zt(()=>{const s=Qs();D="",s?Xt(s):ot()})},Gn);return}at(()=>{Xs(n,t)},Vn)}function Xs(t,e){const r=document.querySelector("#statusMessageTrack");if(!r||!D||!de.has(D))return;const n=Math.max(4,Math.ceil(t/ko));r.style.setProperty("--long-scroll-distance",`${t}px`),r.style.setProperty("--long-scroll-duration",`${n}s`),r.classList.add("long-scroll"),r.addEventListener("animationend",()=>{if(r.classList.remove("long-scroll"),r.style.transform=`translateX(-${t}px) translateY(-50%)`,e){at(()=>{Zt(()=>{const s=Qs();D="",s?Xt(s):ot()})},Gn);return}at(()=>{Hc()},vo)},{once:!0})}function Hc(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!D||!de.has(D))return;if(Qt().length!==1){qe();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const n=Math.max(0,e.scrollWidth-t.clientWidth);n<=0||at(()=>{Xs(n,!1)},Vn)}function Zt(t){const e=document.querySelector("#statusMessageTrack");if(er(),!e||!Se){typeof t=="function"&&t();return}we=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${Un}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",Se=!1,we=!1,typeof t=="function"&&t()},{once:!0})}function ot(){const t=document.querySelector("#statusMessageTrack");er(),D="",Se=!1,we=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function at(t,e){const r=window.setTimeout(()=>{Qe=Qe.filter(n=>n!==r),t()},e);Qe.push(r)}function er(){for(const t of Qe)window.clearTimeout(t);Qe=[]}function Zs(){if(!Se||we||!D)return;const t=D;er(),Xt(t)}function ce(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(c!=null&&c.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!L()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${Le()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${Le()}`)}}async function Te(t={}){try{if(L()){const e=await mo();ie=e,!t.silent&&(e==null?void 0:e.message)&&h(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:p});return}ie=await go(),Jr("file-watcher")}catch(e){h("file-watcher-error",k(e),{ttlMs:p})}}function zc(t={}){if(!L())return;const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",r=String(t.label||"").trim(),n=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=r?`${r} saved variables (${n})`:n;h(`saved-vars-file-updated-${e}`,`${s} has been updated.`,{ttlMs:p}),e.toLowerCase()==="banking"&&jc(t),e.toLowerCase()==="roster"&&Yc(t)}async function jc(t={}){await Gs(t)}async function Yc(t={}){await ec(t)}function Kc(t){!L()||h("file-watcher-error",k(t),{ttlMs:p})}function Jc(){je("guildsync-savedvars-file-modified",zc),je("guildsync-file-watcher-error",Kc),je("guildsync-login-complete",async t=>{y=t||{logged_in:!1,allowed:!1},Lt(),Ze(),await Te(),h("auth",y.status_message||`Logged in and authorized as ${Le()}.`,{ttlMs:p})}),je("guildsync-login-denied",async t=>{y={logged_in:!1,allowed:!1,status_message:""},Lt(),await Te(),h("auth",t||"Access denied.",{ttlMs:p}),Ze()}),je("guildsync-login-failed",async t=>{y={logged_in:!1,allowed:!1,status_message:""},Lt(),await Te(),h("auth",t||"Login failed.",{ttlMs:p}),Ze()})}function L(){return Boolean((y==null?void 0:y.logged_in)&&(y==null?void 0:y.allowed)&&(y==null?void 0:y.token))}function Le(){var t,e;return((t=y.user)==null?void 0:t.display_name)||((e=y.user)==null?void 0:e.username)||"Discord User"}function Qc(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),r=String(t.discord_user_id||"").trim();if(!e||!r)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=128`}function ei(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function Xc(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Zc(){Ye&&(Ye.disconnect(),Ye=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),r=Math.round(t.getBoundingClientRect().height);Ye=new ResizeObserver(n=>{const s=n[0];if(!s)return;const i=Math.round(s.contentRect.width),o=Math.round(s.contentRect.height);i===e&&o===r||(e=i,r=o,ti(),Zs())}),Ye.observe(t)}function ti(){clearTimeout(rn),rn=setTimeout(async()=>{try{await In()}catch{}},500)}function k(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function a(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function u(t){return a(t)}Jc();Eo();
