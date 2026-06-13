(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const lr="/assets/splash.ea386b6a.png",dr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",ur="/assets/GuildSync-Graphic.9169020d.png",q=Object.create(null);q.open="0";q.close="1";q.ping="2";q.pong="3";q.message="4";q.upgrade="5";q.noop="6";const De=Object.create(null);Object.keys(q).forEach(t=>{De[q[t]]=t});const mt={type:"error",data:"parser error"},on=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",an=typeof ArrayBuffer=="function",cn=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Rt=({type:t,data:e},n,r)=>on&&e instanceof Blob?n?r(e):Ht(e,r):an&&(e instanceof ArrayBuffer||cn(e))?n?r(e):Ht(new Blob([e]),r):r(q[t]+(e||"")),Ht=(t,e)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];e("b"+(r||""))},n.readAsDataURL(t)};function zt(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let at;function hr(t,e){if(on&&t.data instanceof Blob)return t.data.arrayBuffer().then(zt).then(e);if(an&&(t.data instanceof ArrayBuffer||cn(t.data)))return e(zt(t.data));Rt(t,!1,n=>{at||(at=new TextEncoder),e(at.encode(n))})}const Yt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",me=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<Yt.length;t++)me[Yt.charCodeAt(t)]=t;const fr=t=>{let e=t.length*.75,n=t.length,r,s=0,i,o,d,f;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const g=new ArrayBuffer(e),b=new Uint8Array(g);for(r=0;r<n;r+=4)i=me[t.charCodeAt(r)],o=me[t.charCodeAt(r+1)],d=me[t.charCodeAt(r+2)],f=me[t.charCodeAt(r+3)],b[s++]=i<<2|o>>4,b[s++]=(o&15)<<4|d>>2,b[s++]=(d&3)<<6|f&63;return g},pr=typeof ArrayBuffer=="function",Tt=(t,e)=>{if(typeof t!="string")return{type:"message",data:ln(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:mr(t.substring(1),e)}:De[n]?t.length>1?{type:De[n],data:t.substring(1)}:{type:De[n]}:mt},mr=(t,e)=>{if(pr){const n=fr(t);return ln(n,e)}else return{base64:!0,data:t}},ln=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},dn=String.fromCharCode(30),gr=(t,e)=>{const n=t.length,r=new Array(n);let s=0;t.forEach((i,o)=>{Rt(i,!1,d=>{r[o]=d,++s===n&&e(r.join(dn))})})},yr=(t,e)=>{const n=t.split(dn),r=[];for(let s=0;s<n.length;s++){const i=Tt(n[s],e);if(r.push(i),i.type==="error")break}return r};function br(){return new TransformStream({transform(t,e){hr(t,n=>{const r=n.length;let s;if(r<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,r);else if(r<65536){s=new Uint8Array(3);const i=new DataView(s.buffer);i.setUint8(0,126),i.setUint16(1,r)}else{s=new Uint8Array(9);const i=new DataView(s.buffer);i.setUint8(0,127),i.setBigUint64(1,BigInt(r))}t.data&&typeof t.data!="string"&&(s[0]|=128),e.enqueue(s),e.enqueue(n)})}})}let ct;function Le(t){return t.reduce((e,n)=>e+n.length,0)}function Ce(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let r=0;for(let s=0;s<e;s++)n[s]=t[0][r++],r===t[0].length&&(t.shift(),r=0);return t.length&&r<t[0].length&&(t[0]=t[0].slice(r)),n}function vr(t,e){ct||(ct=new TextDecoder);const n=[];let r=0,s=-1,i=!1;return new TransformStream({transform(o,d){for(n.push(o);;){if(r===0){if(Le(n)<1)break;const f=Ce(n,1);i=(f[0]&128)===128,s=f[0]&127,s<126?r=3:s===126?r=1:r=2}else if(r===1){if(Le(n)<2)break;const f=Ce(n,2);s=new DataView(f.buffer,f.byteOffset,f.length).getUint16(0),r=3}else if(r===2){if(Le(n)<8)break;const f=Ce(n,8),g=new DataView(f.buffer,f.byteOffset,f.length),b=g.getUint32(0);if(b>Math.pow(2,53-32)-1){d.enqueue(mt);break}s=b*Math.pow(2,32)+g.getUint32(4),r=3}else{if(Le(n)<s)break;const f=Ce(n,s);d.enqueue(Tt(i?f:ct.decode(f),e)),r=0}if(s===0||s>t){d.enqueue(mt);break}}}})}const un=4;function v(t){if(t)return wr(t)}function wr(t){for(var e in v.prototype)t[e]=v.prototype[e];return t}v.prototype.on=v.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};v.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};v.prototype.off=v.prototype.removeListener=v.prototype.removeAllListeners=v.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var r,s=0;s<n.length;s++)if(r=n[s],r===e||r.fn===e){n.splice(s,1);break}return n.length===0&&delete this._callbacks["$"+t],this};v.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,s=n.length;r<s;++r)n[r].apply(this,e)}return this};v.prototype.emitReserved=v.prototype.emit;v.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};v.prototype.hasListeners=function(t){return!!this.listeners(t).length};const Ke=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0))(),R=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),kr="arraybuffer";function hn(t,...e){return e.reduce((n,r)=>(t.hasOwnProperty(r)&&(n[r]=t[r]),n),{})}const Sr=R.setTimeout,_r=R.clearTimeout;function Je(t,e){e.useNativeTimers?(t.setTimeoutFn=Sr.bind(R),t.clearTimeoutFn=_r.bind(R)):(t.setTimeoutFn=R.setTimeout.bind(R),t.clearTimeoutFn=R.clearTimeout.bind(R))}const Ar=1.33;function Er(t){return typeof t=="string"?Rr(t):Math.ceil((t.byteLength||t.size)*Ar)}function Rr(t){let e=0,n=0;for(let r=0,s=t.length;r<s;r++)e=t.charCodeAt(r),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(r++,n+=4);return n}function fn(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Tr(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function Br(t){let e={},n=t.split("&");for(let r=0,s=n.length;r<s;r++){let i=n[r].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}class Nr extends Error{constructor(e,n,r){super(e),this.description=n,this.context=r,this.type="TransportError"}}class Bt extends v{constructor(e){super(),this.writable=!1,Je(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,r){return super.emitReserved("error",new Nr(e,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=Tt(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=Tr(e);return n.length?"?"+n:""}}class Lr extends Bt{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};yr(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,gr(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=fn()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let pn=!1;try{pn=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Cr=pn;function Mr(){}class xr extends Lr{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let r=location.port;r||(r=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,n){const r=this.request({method:"POST",data:e});r.on("success",n),r.on("error",(s,i)=>{this.onError("xhr post error",s,i)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=e}}class D extends v{constructor(e,n,r){super(),this.createRequest=e,Je(this,r),this._opts=r,this._method=r.method||"GET",this._uri=n,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const n=hn(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(n);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&r.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var s;r.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=D.requestsCount++,D.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Mr,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete D.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}D.requestsCount=0;D.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",jt);else if(typeof addEventListener=="function"){const t="onpagehide"in R?"pagehide":"unload";addEventListener(t,jt,!1)}}function jt(){for(let t in D.requests)D.requests.hasOwnProperty(t)&&D.requests[t].abort()}const Dr=function(){const t=mn({xdomain:!1});return t&&t.responseType!==null}();class $r extends xr{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=Dr&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new D(mn,this.uri(),e)}}function mn(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Cr))return new XMLHttpRequest}catch{}if(!e)try{return new R[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const gn=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Or extends Bt{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,r=gn?{}:hn(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,r)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],s=n===e.length-1;Rt(r,this.supportsBinary,i=>{try{this.doWrite(r,i)}catch{}s&&Ke(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=fn()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const lt=R.WebSocket||R.MozWebSocket;class qr extends Or{createSocket(e,n,r){return gn?new lt(e,n,r):n?new lt(e,n):new lt(e)}doWrite(e,n){this.ws.send(n)}}class Ir extends Bt{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=vr(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(n).getReader(),s=br();s.readable.pipeTo(e.writable),this._writer=s.writable.getWriter();const i=()=>{r.read().then(({done:d,value:f})=>{d||(this.onPacket(f),i())}).catch(d=>{})};i();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],s=n===e.length-1;this._writer.write(r).then(()=>{s&&Ke(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Pr={websocket:qr,webtransport:Ir,polling:$r},Gr=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Fr=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function gt(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),r=t.indexOf("]");n!=-1&&r!=-1&&(t=t.substring(0,n)+t.substring(n,r).replace(/:/g,";")+t.substring(r,t.length));let s=Gr.exec(t||""),i={},o=14;for(;o--;)i[Fr[o]]=s[o]||"";return n!=-1&&r!=-1&&(i.source=e,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=Ur(i,i.path),i.queryKey=Vr(i,i.query),i}function Ur(t,e){const n=/\/{2,9}/g,r=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function Vr(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,s,i){s&&(n[s]=i)}),n}const yt=typeof addEventListener=="function"&&typeof removeEventListener=="function",$e=[];yt&&addEventListener("offline",()=>{$e.forEach(t=>t())},!1);class F extends v{constructor(e,n){if(super(),this.binaryType=kr,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const r=gt(e);n.hostname=r.host,n.secure=r.protocol==="https"||r.protocol==="wss",n.port=r.port,r.query&&(n.query=r.query)}else n.host&&(n.hostname=gt(n.host).host);Je(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(r=>{const s=r.prototype.name;this.transports.push(s),this._transportsByName[s]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Br(this.opts.query)),yt&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},$e.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=un,n.transport=e,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&F.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",F.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const s=this.writeBuffer[r].data;if(s&&(n+=Er(s)),r>0&&n>this._maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Ke(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,r){return this._sendPacket("message",e,n,r),this}send(e,n,r){return this._sendPacket("message",e,n,r),this}_sendPacket(e,n,r,s){if(typeof n=="function"&&(s=n,n=void 0),typeof r=="function"&&(s=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const i={type:e,data:n,options:r};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),s&&this.once("flush",s),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(F.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),yt&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=$e.indexOf(this._offlineEventListener);r!==-1&&$e.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}}F.protocol=un;class Wr extends F{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let n=this.createTransport(e),r=!1;F.priorWebsocketSuccess=!1;const s=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",k=>{if(!r)if(k.type==="pong"&&k.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;F.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(b(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const x=new Error("probe error");x.transport=n.name,this.emitReserved("upgradeError",x)}}))};function i(){r||(r=!0,b(),n.close(),n=null)}const o=k=>{const x=new Error("probe error: "+k);x.transport=n.name,i(),this.emitReserved("upgradeError",x)};function d(){o("transport closed")}function f(){o("socket closed")}function g(k){n&&k.name!==n.name&&i()}const b=()=>{n.removeListener("open",s),n.removeListener("error",o),n.removeListener("close",d),this.off("close",f),this.off("upgrading",g)};n.once("open",s),n.once("error",o),n.once("close",d),this.once("close",f),this.once("upgrading",g),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const n=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&n.push(e[r]);return n}}class Hr extends Wr{constructor(e,n={}){const r=typeof e=="object"?e:n;(!r.transports||r.transports&&typeof r.transports[0]=="string")&&(r.transports=(r.transports||["polling","websocket","webtransport"]).map(s=>Pr[s]).filter(s=>!!s)),super(e,r)}}function zr(t,e="",n){let r=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),r=gt(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const i=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+i+":"+r.port+e,r.href=r.protocol+"://"+i+(n&&n.port===r.port?"":":"+r.port),r}const Yr=typeof ArrayBuffer=="function",jr=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,yn=Object.prototype.toString,Kr=typeof Blob=="function"||typeof Blob<"u"&&yn.call(Blob)==="[object BlobConstructor]",Jr=typeof File=="function"||typeof File<"u"&&yn.call(File)==="[object FileConstructor]";function Nt(t){return Yr&&(t instanceof ArrayBuffer||jr(t))||Kr&&t instanceof Blob||Jr&&t instanceof File}function Oe(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,r=t.length;n<r;n++)if(Oe(t[n]))return!0;return!1}if(Nt(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return Oe(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&Oe(t[n]))return!0;return!1}function Qr(t){const e=[],n=t.data,r=t;return r.data=bt(n,e),r.attachments=e.length,{packet:r,buffers:e}}function bt(t,e){if(!t)return t;if(Nt(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let r=0;r<t.length;r++)n[r]=bt(t[r],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=bt(t[r],e));return n}return t}function Xr(t,e){return t.data=vt(t.data,e),delete t.attachments,t}function vt(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=vt(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=vt(t[n],e));return t}const bn=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Zr=5;var p;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(p||(p={}));class es{constructor(e){this.replacer=e}encode(e){return(e.type===p.EVENT||e.type===p.ACK)&&Oe(e)?this.encodeAsBinary({type:e.type===p.EVENT?p.BINARY_EVENT:p.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===p.BINARY_EVENT||e.type===p.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=Qr(e),r=this.encodeAsString(n.packet),s=n.buffers;return s.unshift(r),s}}class Lt extends v{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const r=n.type===p.BINARY_EVENT;r||n.type===p.BINARY_ACK?(n.type=r?p.EVENT:p.ACK,this.reconstructor=new ts(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(Nt(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const r={type:Number(e.charAt(0))};if(p[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===p.BINARY_EVENT||r.type===p.BINARY_ACK){const i=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(i,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");const d=Number(o);if(!vn(d)||d<0)throw new Error("Illegal attachments");if(d>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=d}if(e.charAt(n+1)==="/"){const i=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););r.nsp=e.substring(i,n)}else r.nsp="/";const s=e.charAt(n+1);if(s!==""&&Number(s)==s){const i=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}r.id=Number(e.substring(i,n+1))}if(e.charAt(++n)){const i=this.tryParse(e.substr(n));if(Lt.isPayloadValid(r.type,i))r.data=i;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case p.CONNECT:return Fe(n);case p.DISCONNECT:return n===void 0;case p.CONNECT_ERROR:return typeof n=="string"||Fe(n);case p.EVENT:case p.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&bn.indexOf(n[0])===-1);case p.ACK:case p.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class ts{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=Xr(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function ns(t){return typeof t=="string"}const vn=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function rs(t){return t===void 0||vn(t)}function Fe(t){return Object.prototype.toString.call(t)==="[object Object]"}function ss(t,e){switch(t){case p.CONNECT:return e===void 0||Fe(e);case p.DISCONNECT:return e===void 0;case p.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&bn.indexOf(e[0])===-1);case p.ACK:return Array.isArray(e);case p.CONNECT_ERROR:return typeof e=="string"||Fe(e);default:return!1}}function is(t){return ns(t.nsp)&&rs(t.id)&&ss(t.type,t.data)}const os=Object.freeze(Object.defineProperty({__proto__:null,protocol:Zr,get PacketType(){return p},Encoder:es,Decoder:Lt,isPacketValid:is},Symbol.toStringTag,{value:"Module"}));function L(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const as=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class wn extends v{constructor(e,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[L(e,"open",this.onopen.bind(this)),L(e,"packet",this.onpacket.bind(this)),L(e,"error",this.onerror.bind(this)),L(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var r,s,i;if(as.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const o={type:p.EVENT,data:n};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const b=this.ids++,k=n.pop();this._registerAckCallback(b,k),o.id=b}const d=(s=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||s===void 0?void 0:s.writable,f=this.connected&&!(!((i=this.io.engine)===null||i===void 0)&&i._hasPingExpired());return this.flags.volatile&&!d||(f?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,n){var r;const s=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(s===void 0){this.acks[e]=n;return}const i=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let d=0;d<this.sendBuffer.length;d++)this.sendBuffer[d].id===e&&this.sendBuffer.splice(d,1);n.call(this,new Error("operation has timed out"))},s),o=(...d)=>{this.io.clearTimeoutFn(i),n.apply(this,d)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...n){return new Promise((r,s)=>{const i=(o,d)=>o?s(o):r(d);i.withError=!0,n.push(i),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((s,...i)=>(this._queue[0],s!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(s)):(this._queue.shift(),n&&n(null,...i)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:p.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case p.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case p.EVENT:case p.BINARY_EVENT:this.onevent(e);break;case p.ACK:case p.BINARY_ACK:this.onack(e);break;case p.DISCONNECT:this.ondisconnect();break;case p.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let r=!1;return function(...s){r||(r=!0,n.packet({type:p.ACK,id:e,data:s}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:p.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,e.data)}}}function le(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}le.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-n:t+n}return Math.min(t,this.max)|0};le.prototype.reset=function(){this.attempts=0};le.prototype.setMin=function(t){this.ms=t};le.prototype.setMax=function(t){this.max=t};le.prototype.setJitter=function(t){this.jitter=t};class wt extends v{constructor(e,n){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,Je(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new le({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const s=n.parser||os;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Hr(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const s=L(n,"open",function(){r.onopen(),e&&e()}),i=d=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",d),e?e(d):this.maybeReconnectOnOpen()},o=L(n,"error",i);if(this._timeout!==!1){const d=this._timeout,f=this.setTimeoutFn(()=>{s(),i(new Error("timeout")),n.close()},d);this.opts.autoUnref&&f.unref(),this.subs.push(()=>{this.clearTimeoutFn(f)})}return this.subs.push(s),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(L(e,"ping",this.onping.bind(this)),L(e,"data",this.ondata.bind(this)),L(e,"error",this.onerror.bind(this)),L(e,"close",this.onclose.bind(this)),L(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){Ke(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new wn(this,e,n),this.nsps[e]=r),r}_destroy(e){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let r=0;r<n.length;r++)this.engine.write(n[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(s=>{s?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",s)):e.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const he={};function qe(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=zr(t,e.path||"/socket.io"),r=n.source,s=n.id,i=n.path,o=he[s]&&i in he[s].nsps,d=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let f;return d?f=new wt(r,e):(he[s]||(he[s]=new wt(r,e)),f=he[s]),n.query&&!e.query&&(e.query=n.queryKey),f.socket(n.path,e)}Object.assign(qe,{Manager:wt,Socket:wn,io:qe,connect:qe});function cs(){return window.go.main.App.CloseWindow()}function ls(t){return window.go.main.App.CollectGuildSyncBankingData(t)}function ds(t){return window.go.main.App.CollectGuildSyncRosterData(t)}function us(t,e){return window.go.main.App.CommitGuildSyncBankingData(t,e)}function hs(t,e){return window.go.main.App.CommitGuildSyncRosterData(t,e)}function fs(){return window.go.main.App.GetGuildSyncFileWatcherStatus()}function ps(){return window.go.main.App.GetGuildSyncSession()}function ms(){return window.go.main.App.LogoutGuildSync()}function gs(){return window.go.main.App.MaximizeWindow()}function ys(){return window.go.main.App.MinimizeWindow()}function kn(){return window.go.main.App.SaveWindowState()}function bs(t,e){return window.go.main.App.SetGuildSyncSavedVarsWatchFileEnabled(t,e)}function vs(){return window.go.main.App.ShowMainWindow()}function ws(){return window.go.main.App.StartDiscordLogin()}function ks(){return window.go.main.App.StartGuildSyncFileWatcher()}function Ss(){return window.go.main.App.StopGuildSyncFileWatcher()}function _s(t,e,n){return window.runtime.EventsOnMultiple(t,e,n)}function fe(t,e){return _s(t,e,-1)}const Qe="1.0.3",As=30*60*1e3,Sn="guildsync-pending-banking-uploads",_n="guildsync-pending-roster-uploads",h=60*1e3,An=7e3,En=1400,Rn=2400,Es=4e3,Rs=38,Tn=document.querySelector("#app");let Kt=null,pe=null,Jt=!1,Re=!1,Ie=null,dt=!1,ut=!1,U=null,Y=new Map,J=new Map,S="",ee=!1,te=!1,ge=[],m={logged_in:!1,allowed:!1,status_message:""},a=null,$=[],Xe=null,ve=!1,Ue=!1,Ve="",re=new Set,we="username",Q="asc",kt=null,St=null,M=[],We=null,j=!1,Qt=!1,He="",X=new Set,Ze=!1,ke="",T=[],K="",V=[],W=!1,G="",ht=null,C=-1,se=[],Se=!1,ie="",O=[],B="biweekly",Bn=null,ne=!1,ye=!1,Te="biweekly",Z=!1,ze=!1,P="",A={accountName:"",note:"",tickets:""},de="",I=-1,_t={biweekly:0,monthly:0};const Ts=1780786800,Bs=1781996400,Ns=14*24*60*60,Ls=28*24*60*60,Cs=60*60,Ye=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports",icon:"gear"}];let _=Ye[0].id;function Ms(){Tn.innerHTML=`
    <main class="splash-screen">
      <img src="${lr}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await vs(),await xs(),Nn(),be(),await ae()},5e3)}async function xs(){try{m=await ps()}catch(t){m={logged_in:!1,allowed:!1,status_message:""},u("session-error",w(t),{ttlMs:h})}}function Nn(){Tn.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${dr}" alt="" class="title-icon" />
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
            <img src="${ur}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${c(Qe)}</div>
            </div>
          </div>
          <div id="discordArea" class="discord-area"></div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${Ln()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content" aria-live="polite">
          ${Cn()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await ys()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await kn(),await cs()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await gs()}),Ge(),Mn(),Qn(),On(),Un(),xn(),$n(),z(),ce(),Jt||(window.addEventListener("resize",()=>{cr(),or()}),ro(),Jt=!0)}function Ln(){return Ye.map(t=>{const e=t.id===_;return`
        <button
          class="guildsync-tab${e?" active":""}"
          type="button"
          data-tab-id="${y(t.id)}"
          aria-selected="${e?"true":"false"}"
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${Ds(t.icon)}</span>
          <span class="guildsync-tab-label">${c(t.label)}</span>
        </button>
      `}).join("")}function Ds(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function Cn(){const t=Ye.find(n=>n.id===_)||Ye[0];let e="";return t.id==="discord-members"?e=Os():t.id==="eso-members"?e=qs():t.id==="more"?e=ci():t.id==="settings"?e=js():e=`
      <div class="guildsync-tab-panel" data-active-tab="${y(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${c(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${Z?Js():""}
  `}function $s(){return Ze||Z||ye}function Mn(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if($s())return;const e=t.dataset.tabId;!e||e===_||(_=e,l())})})}function l(t={}){const e=document.querySelector(".guildsync-tabs"),n=document.querySelector("#guildSyncTabContent");e&&(e.innerHTML=Ln()),n&&(n.innerHTML=Cn()),Mn(),Qn(),On(),Un(),xn(),$n(),t.restoreDiscordSearchFocus&&Mi(),_==="discord-members"&&(a==null?void 0:a.connected)&&$.length===0&&!ve&&It({silent:!0}),_==="eso-members"&&(a==null?void 0:a.connected)&&M.length===0&&!j&&!Qt&&(Qt=!0,Be({silent:!0})),_==="more"&&(a==null?void 0:a.connected)&&O.length===0&&!ne&&et({silent:!0})}function Os(){const t=Ni(),e=xi(),n=Array.from(re);return`
    <div class="guildsync-tab-panel discord-member-panel" data-active-tab="discord-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Discord Member Data</h2>
          <p class="discord-data-subtitle">Manage and view Discord member information.</p>
        </div>
        <div class="discord-data-actions">
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${c(Zn(Xe))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${ve||Ue?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Ue?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${y(Ve)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(r=>!re.has(r)).map(r=>`<option value="${y(r)}">${c(r)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All roles</span>':n.map(r=>qi(r)).join("")}
            </div>
          </div>

          <button id="clearDiscordFiltersButton" class="clear-discord-filters-button" type="button">Clear Filters</button>
          <div class="discord-results-count">${t.length} result${t.length===1?"":"s"}</div>
        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${Me("username","Username")}
                ${Me("global_name","Global Name")}
                ${Me("server_nickname","Server Nickname")}
                ${Me("roles","Roles")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(r=>Di(r)).join(""):$i()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `}function qs(){const t=Us(),e=Vs(),n=Array.from(X);return`
    <div class="guildsync-tab-panel eso-roster-panel" data-active-tab="eso-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Guild Roster</h2>
          <p class="discord-data-subtitle">Current ESO roster imported from GuildSyncRoster.</p>
        </div>
        <div class="discord-data-actions">
          <span class="discord-last-refresh">Last Refresh: ${c(ni(We))}</span>
          <button id="openRosterHistoryButton" class="clear-discord-filters-button" type="button">Lookup Rank Historical Data</button>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${j?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${j?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${y(He)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(r=>!X.has(r)).map(r=>`<option value="${y(r)}">${c(r)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All ranks</span>':n.map(r=>Ws(r)).join("")}
            </div>
          </div>

          <button id="clearRosterFiltersButton" class="clear-discord-filters-button" type="button">Clear Filters</button>
          <div class="discord-results-count">${t.length} result${t.length===1?"":"s"}</div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                <th>Account Name</th>
                <th>Rank</th>
                <th>Joined</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(Is).join(""):Ps()}
            </tbody>
          </table>
        </div>
      </div>
      ${Ze?Hs():""}
    </div>
  `}function Is(t){const e=Gs(t.rank||"");return`
    <tr class="eso-roster-row"${e?` style="color: ${e};"`:""}>
      <td>${c(t.account_name||"")}</td>
      <td>${Ct(t.rank||"")}</td>
      <td>${c(Mt(t.joined))}</td>
    </tr>
  `}function Ps(){return`
    <tr>
      <td class="bank-empty-row" colspan="3">${c(j?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function Gs(t){const e=String(t||"").trim(),n=Pt(e);return tt(n==null?void 0:n.role_color)}function Ct(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${c(e)}</span>`}function Fs(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":Ct(e)}function Us(){const t=He.trim().toLowerCase();return M.filter(e=>{const n=String(e.rank||"").trim();if(X.size>0&&!X.has(n))return!1;if(!t)return!0;const r=Mt(e.joined),s=In(e.joined);return[e.account_name,n,r,s,e.joined].map(o=>String(o||"").toLowerCase()).join(" ").includes(t)})}function Vs(){return Array.from(new Set(M.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function Ws(t){const e=Pt(t),n=tt(e==null?void 0:e.role_color),r=Ft(n),s=Gt(n,r);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-roster-rank-filter="${y(t)}"
      style="${s}"
      title="Remove ${y(t)} filter"
    >
      <span>${c(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Hs(){return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="rosterHistoryTitle">
      <div class="roster-history-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="rosterHistoryTitle">Roster Rank Historical Data</h3>
            <p>Search prior rank records, including members no longer on the current roster.</p>
          </div>
          <button id="closeRosterHistoryButton" class="roster-history-close" type="button" aria-label="Close">\xD7</button>
        </div>

        <div class="roster-history-search-row">
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${y(ke)}" />
        </div>

        ${G?`<div class="discord-data-error">${c(G)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${zs()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${K?`: ${c(K)}`:""}</div>
            ${Ys()}
          </div>
        </div>
      </div>
    </div>
  `}function zs(){return W&&T.length===0?'<div class="roster-history-muted">Searching...</div>':T.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${T.map((t,e)=>`
        <button class="roster-history-match${e===C||t.account_name===K?" is-selected":""}" type="button" data-roster-history-account="${y(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <strong>${c(t.rank||"")}</strong>
          ${e===C?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Ys(){return K?W&&V.length===0?'<div class="roster-history-muted">Loading history...</div>':V.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
    <div class="roster-history-event-table-shell">
      <table class="discord-member-table roster-history-event-table">
        <thead>
          <tr>
            <th>When</th>
            <th>Event</th>
            <th>Rank</th>
            <th>Officer</th>
          </tr>
        </thead>
        <tbody>
          ${V.map(t=>`
            <tr>
              <td>${c(In(t.timestamp))}</td>
              <td>${c(t.event_type||"")}</td>
              <td>${Fs(t.rank)}</td>
              <td>${c(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function js(){return`
    <div class="guildsync-tab-panel reports-panel" data-active-tab="settings">
      <div class="discord-data-header reports-header">
        <div>
          <h2 class="discord-data-title">Reports</h2>
          <p class="discord-data-subtitle">Run GuildSync reports. More report options can be added here later.</p>
        </div>
      </div>

      <div class="reports-grid">
        <section class="reports-card reports-card-wide">
          <div class="reports-card-header">
            <div>
              <h3>Associate Ticket Eligibility</h3>
              <p>Shows Associates who have been in the guild at least two weeks and have purchased at least one raffle ticket.</p>
            </div>
            <button id="runAssociateTicketReportButton" class="refresh-discord-button" type="button" ${Se?"disabled":""}>
              ${Se?"Running...":"Run Associate Ticket Report"}
            </button>
          </div>

          ${ie?`<div class="discord-data-error">${c(ie)}</div>`:""}

          <div class="reports-result-header">
            <span>${c(String(se.length))} result${se.length===1?"":"s"}</span>
          </div>

          ${Ks()}
        </section>

        <section class="reports-card reports-card-placeholder">
          <div class="reports-card-header">
            <div>
              <h3>Future Report</h3>
              <p>This space is ready for the next GuildSync report.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  `}function xn(){var t;_==="settings"&&((t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>Dn()))}function Ks(){return Se&&se.length===0?'<div class="roster-history-muted">Running report...</div>':se.length===0?'<div class="roster-history-muted">Run this report to see matching associates.</div>':`
    <div class="roster-history-event-table-shell">
      <table class="discord-member-table roster-history-event-table">
        <thead>
          <tr>
            <th>Account Name</th>
            <th>Rank</th>
            <th>Joined</th>
            <th>Purchased Tickets</th>
          </tr>
        </thead>
        <tbody>
          ${se.map(t=>`
            <tr>
              <td>${c(t.account_name||"")}</td>
              <td>${Ct(t.rank||"")}</td>
              <td>${c(Mt(t.joined))}</td>
              <td>${c($t(t.purchased_tickets||0))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}async function Dn(){if(!(a!=null&&a.connected)||!E()){ie="You must be logged in and connected to run this report.",l();return}Se=!0,ie="",l();try{const t=await N("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");se=Array.isArray(t.rows)?t.rows:[]}catch(t){ie=w(t)}finally{Se=!1,l()}}function At(){const t=String(de||"").trim().toLowerCase();return t?M.filter(e=>String(e.account_name||"").trim()).filter(e=>String(e.account_name||"").toLowerCase().includes(t)).slice().sort((e,n)=>{const r=String(e.account_name||"").toLowerCase(),s=String(n.account_name||"").toLowerCase(),i=r.startsWith(t)?0:1,o=s.startsWith(t)?0:1;return i!==o?i-o:r.localeCompare(s)}).slice(0,20):[]}function Xt(t){const e=String(t||"").trim();A.accountName=e,de=e,P="",l(),H("manualTicketAccountSearchInput")}function H(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const n=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(n,n)},0)}function Js(){const t=At(),e=String(A.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Bi-Weekly Tickets</h3>
            <p>Add free/manual raffle tickets such as FFTG. These do not count as purchased tickets.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close" type="button" aria-label="Close">\xD7</button>
        </div>

        ${P?`<div class="discord-data-error">${c(P)}</div>`:""}

        <div class="manual-ticket-form">
          <label class="manual-ticket-member-field">
            <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${y(de)}" autocomplete="off" />
          </label>

          ${e?`<div class="roster-history-muted">Selected: ${c(e)}</div>`:""}

          <div class="roster-history-match-list manual-ticket-match-list">
            ${t.length===0?'<div class="roster-history-muted">No matching names</div>':t.map((n,r)=>`
                <button class="roster-history-match${r===I||n.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${y(n.account_name)}">
                  <span>${c(n.account_name)}</span>
                  <strong>${c(n.rank||"")}</strong>
                  ${r===I?"<small>Enter</small>":""}
                </button>
              `).join("")}
          </div>

          <div class="manual-ticket-entry-row">
            <label class="manual-ticket-note-field">
              <textarea id="manualTicketNoteInput" class="discord-search-input manual-ticket-note-input" rows="4" placeholder="Enter a reason such as FFTG">${c(A.note)}</textarea>
            </label>
            <label class="manual-ticket-count-field">
              <div class="manual-ticket-number-wrap">
                <input id="manualTicketCountInput" class="discord-search-input manual-ticket-count-input" type="number" min="1" step="1" inputmode="numeric" placeholder="# Tickets" value="${y(A.tickets)}" />
                <div class="manual-ticket-number-buttons" aria-hidden="true">
                  <button id="manualTicketCountUpButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2303</button>
                  <button id="manualTicketCountDownButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2304</button>
                </div>
              </div>
            </label>
          </div>
          <div class="manual-ticket-actions">
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${ze?"disabled":""}>${ze?"Saving...":"Add Manual Tickets"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function $n(){var s,i,o,d,f;if(!Z)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{Z=!1,l()});const t=document.querySelector("#manualTicketAccountSearchInput");t&&(t.addEventListener("input",g=>{de=g.target.value||"",A.accountName="",I=At().length>0?0:-1,l(),H("manualTicketAccountSearchInput")}),t.addEventListener("keydown",g=>{const b=At();if(g.key==="ArrowDown"||g.key==="ArrowUp"){if(b.length===0)return;g.preventDefault();const x=g.key==="ArrowDown"?1:-1;I=((I<0?0:I)+x+b.length)%b.length,l(),H("manualTicketAccountSearchInput");return}if(g.key!=="Enter")return;g.preventDefault();const k=b[I>=0?I:0];k!=null&&k.account_name&&Xt(k.account_name)})),document.querySelectorAll("[data-manual-ticket-account]").forEach(g=>{g.addEventListener("click",()=>{Xt(g.dataset.manualTicketAccount||"")})}),(i=document.querySelector("#manualTicketNoteInput"))==null||i.addEventListener("input",g=>{A.note=g.target.value||""});const e=document.querySelector("#manualTicketCountInput");e==null||e.addEventListener("input",g=>{const b=String(g.target.value||"").replace(/\D/g,"");g.target.value!==b&&(g.target.value=b),A.tickets=b});const n=g=>{const b=Number(A.tickets)||0,k=Math.max(1,b+g);A.tickets=String(k),e&&(e.value=A.tickets,e.focus())};(o=document.querySelector("#manualTicketCountUpButton"))==null||o.addEventListener("click",()=>n(1)),(d=document.querySelector("#manualTicketCountDownButton"))==null||d.addEventListener("click",()=>n(-1)),(f=document.querySelector("#saveManualBiweeklyTicketButton"))==null||f.addEventListener("click",()=>Qs());const r=document.querySelector(".roster-history-overlay");r&&r.addEventListener("click",g=>{g.target===r&&(Z=!1,l())})}async function Qs(){const t=String(A.accountName||"").trim(),e=String(A.note||"").trim(),n=Number(A.tickets);if(!t){P="Choose a guild member.",l();return}if(!e){P="Enter a reason or note.",l();return}if(!Number.isFinite(n)||n<=0){P="Enter the number of tickets to add.",l();return}ze=!0,P="",l();try{const r=await N("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,tickets:Math.floor(n)},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to add manual ticket entry.");Z=!1,A={accountName:"",note:"",tickets:""},de="",I=-1,await et({silent:!0}),u("manual-ticket-added",r.message||"Manual ticket entry added.",{ttlMs:h})}catch(r){P=w(r)}finally{ze=!1,l()}}function On(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>Be());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{Ze=!0,G="",l()});const n=document.querySelector("#rosterMemberSearch");n&&n.addEventListener("input",i=>{He=i.target.value||"",l()});const r=document.querySelector("#rosterRankFilter");r&&r.addEventListener("change",i=>{const o=String(i.target.value||"").trim();o&&(X.add(o),l())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(i=>{i.addEventListener("click",()=>{const o=i.dataset.removeRosterRankFilter||"";X.delete(o),l()})});const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{He="",X.clear(),l()}),Xs()}function Xs(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{Ze=!1,l()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",n=>{if(ke=n.target.value||"",C=-1,!ke.trim()){clearTimeout(ht),G="",T=[],K="",V=[],W=!1,l(),H("rosterHistorySearchInput");return}clearTimeout(ht),ht=setTimeout(()=>{Zs({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(T.length===0)return;n.preventDefault();const s=n.key==="ArrowDown"?1:-1;C=((C<0?0:C)+s+T.length)%T.length,l(),H("rosterHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=T[C>=0?C:0];r!=null&&r.account_name&&Zt(r.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(n=>{n.addEventListener("click",()=>{Zt(n.dataset.rosterHistoryAccount||"")})})}async function Zs(t={}){const e=ke.trim();if(!e){G="",T=[],C=-1,K="",V=[],W=!1,l(),t.keepFocus&&H("rosterHistorySearchInput");return}W=!0,G="",T=[],C=-1,K="",V=[],l(),t.keepFocus&&H("rosterHistorySearchInput");try{const n=await N("guildsync:request-roster-rank-history",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search roster rank history.");T=ei(n.matches),C=T.length>0?0:-1}catch(n){G=w(n)}finally{W=!1,l(),t.keepFocus&&H("rosterHistorySearchInput")}}async function Zt(t,e={}){const n=String(t||"").trim();if(!!n){K=n,ke=n,V=[],W=!0,G="",l();try{const r=await N("guildsync:request-roster-stream-history",{account_name:n},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load roster stream history.");V=ti(r.events)}catch(r){G=w(r)}finally{W=!1,e.keepLoading||l()}}}function ei(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function ti(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(r=(n=e.timestamp)!=null?n:e.timestampS)!=null?r:"",officer:String(e.officer||"").trim()}}):[]}function qn(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(n=e.joined)!=null?n:""}}).sort((e,n)=>e.account_name.localeCompare(n.account_name)):[]}function ni(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function Mt(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function In(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function ri(t={}){M=qn(t.members),We=t.last_refresh||new Date().toISOString(),_==="eso-members"&&l(),u("roster-data-updated",`Roster data updated. Loaded ${M.length} member record${M.length===1?"":"s"}.`,{ttlMs:h})}async function Be(t={}){if(!!(a!=null&&a.connected)){j=!0,l();try{const e=await N("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");M=qn(e.members),We=e.last_refresh||We,t.silent||u("roster-data-loaded",`Loaded ${M.length} roster member${M.length===1?"":"s"}.`,{ttlMs:h})}catch(e){u("roster-data-error",w(e),{ttlMs:h})}finally{j=!1,l()}}}async function si(t={}){var e;if(!!E()){if(!(a!=null&&a.connected)){u("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:h});return}j=!0,l();try{const n=await ds(t);if(!(n!=null&&n.ok)){u("roster-data-pending",(n==null?void 0:n.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:h});return}const r={local_upload_id:Pn(),authenticated_username:ue(),authenticated_discord_user_id:((e=m==null?void 0:m.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await Fn(r)}catch(s){throw ii(r),s}await Be({silent:!0})}catch(n){u("roster-data-error",w(n),{ttlMs:h})}finally{j=!1,l()}}}function Pn(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function xt(){try{const t=window.localStorage.getItem(_n),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Gn(t){window.localStorage.setItem(_n,JSON.stringify(Array.isArray(t)?t:[]))}function ii(t){const e=String((t==null?void 0:t.local_upload_id)||Pn()),n=xt().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Gn(n),u("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:h})}function oi(t){const e=xt().filter(n=>(n==null?void 0:n.local_upload_id)!==t);Gn(e)}async function ai(){if(ut||!(a!=null&&a.connected)||!E())return;const t=xt();if(t.length!==0){ut=!0;try{for(const e of t){if(!(a!=null&&a.connected)||!E())return;await Fn(e),oi(e.local_upload_id)}}catch(e){u("roster-data-pending-error",`Pending roster upload retry failed: ${w(e)}`,{ttlMs:h})}finally{ut=!1}}}async function Fn(t){if(!(a!=null&&a.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await N("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const n=await hs(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return u("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:h}),e}function ci(){const t=Et(B),e=yi(t),n=B!=="other";return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <span class="discord-last-refresh">Last Refresh: ${c(Zn(Bn))}</span>
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
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${ne?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${ne?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${ft("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${ft("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${ft("other","?","Other","All other deposits")}
        </div>

        ${hi(B)}

        <div class="bank-deposit-table-shell">
          <table class="bank-deposit-table${n?"":" bank-deposit-table-no-tickets"}">
            <thead>
              <tr>
                <th>Event ID <span class="bank-info-dot">i</span></th>
                <th>Date / Time (Local) <span class="bank-info-dot">i</span></th>
                <th>Depositor</th>
                <th>Amount Deposited <span class="bank-info-dot">i</span></th>
                ${n?'<th>Tickets Awarded <span class="bank-info-dot">i</span></th>':""}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(r=>bi(r,n)).join(""):vi(n)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${c(Hn(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${n?`<div>Total Tickets Awarded: <strong>${c($t(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${ye?li(Et(Te)):""}
    </div>
  `}function li(t){return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${c(oe(Te))} Deposits</h3>
            <p class="bank-export-subtitle">Copy this grid and paste it directly into Google Sheets.</p>
          </div>
          <button id="closeBankingExportGridButton" class="bank-export-close-button" type="button" aria-label="Close export grid">\xD7</button>
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
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(e=>di(e)).join(""):ui()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${c(Vn(t))}</textarea>
      </div>
    </div>
  `}function di(t){return`
    <tr>
      <td>${c(t.displayName||"")}</td>
      <td>${c(String(Number(t.amount)||0))}</td>
    </tr>
  `}function ui(){return`
    <tr>
      <td class="bank-empty-row" colspan="2">No deposits to export for ${c(oe(Te))}.</td>
    </tr>
  `}function hi(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=Wn(t),n=Dt(t),r=n<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${y(oe(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${c(oe(t))} Raffle Period ${n===0?"(Current)":`(${Math.abs(n)} period${Math.abs(n)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${c(Pe(e.salesStart))} through ${c(Pe(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${c(Pe(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${r?"":"disabled"} aria-label="Next ${y(oe(t))} raffle period">\u203A</button>
    </div>
  `}function ft(t,e,n,r){const s=B===t;return`
    <button class="bank-section-card${s?" active":""}" type="button" data-bank-section="${y(t)}" aria-selected="${s?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${c(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${c(n)}</span>
        <span class="bank-section-subtitle">${c(r)}</span>
      </span>
    </button>
  `}function Un(){if(_!=="more")return;document.querySelectorAll("[data-bank-section]").forEach(i=>{i.addEventListener("click",()=>{B=i.dataset.bankSection||"biweekly",l()})}),document.querySelectorAll("[data-bank-export-section]").forEach(i=>{i.addEventListener("click",()=>{Te=(i.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",ye=!0,l()})}),document.querySelectorAll("[data-bank-period-move]").forEach(i=>{i.addEventListener("click",()=>{gi(i.dataset.bankPeriodMove||""),l()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{ye=!1,l()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>pi());const n=document.querySelector(".bank-export-overlay");n&&n.addEventListener("click",i=>{i.target===n&&(ye=!1,l())});const r=document.querySelector("#openManualBiweeklyTicketButton");r&&r.addEventListener("click",async()=>{Z=!0,P="",de=A.accountName||"",M.length===0&&(a==null?void 0:a.connected)&&E()&&await Be({silent:!0}),l()});const s=document.querySelector("#refreshBankingDataButton");s&&s.addEventListener("click",()=>Yn({key:"banking"}))}function Vn(t){const e=[["Guildie Name","Deposit Amount"]];for(const n of t)e.push([n.displayName||"",String(Number(n.amount)||0)]);return e.map(n=>n.map(fi).join("	")).join(`
`)}function fi(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function pi(){var n;const t=Et(Te),e=Vn(t);try{if((n=navigator.clipboard)!=null&&n.writeText)await navigator.clipboard.writeText(e);else{const r=document.querySelector("#bankingExportTsv");r.focus(),r.select(),document.execCommand("copy")}u("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:h})}catch{const s=document.querySelector("#bankingExportTsv");s&&(s.focus(),s.select()),u("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:h})}}function Et(t){return O.filter(e=>e.type===t).filter(e=>mi(t,e)).sort((e,n)=>(Number(n.time)||0)-(Number(e.time)||0))}function mi(t,e){if(t==="other")return!0;const n=Number(e==null?void 0:e.time)||0;if(n<=0)return!1;const r=Wn(t);return n>=r.salesStart&&n<=r.salesEnd}function Dt(t){return Number(_t[t])||0}function gi(t){if(B!=="biweekly"&&B!=="monthly")return;const e=Dt(B);if(t==="previous"){_t[B]=e-1;return}t==="next"&&e<0&&(_t[B]=e+1)}function Wn(t){const e=Math.floor(Date.now()/1e3),n=t==="monthly",r=n?Ls:Ns;let s=n?Bs:Ts;for(;s-r>e;)s-=r;for(;s<e;)s+=r;return s+=Dt(t)*r,{salesStart:s-r+1,salesEnd:s,raffleTime:s+Cs}}function yi(t){return t.reduce((e,n)=>(e.amount+=Number(n.amount)||0,e.tickets+=Number(n.ticketAmount)||0,e),{amount:0,tickets:0})}function bi(t,e=!0){return`
    <tr>
      <td>${c(t.note||t.eventId||"")}</td>
      <td>${c(Pe(t.time))}</td>
      <td>${c(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${c(Hn(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td><strong class="bank-ticket-amount">${c($t(t.ticketAmount))}</strong></td>`:""}
    </tr>
  `}function vi(t=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?"5":"4"}">No ${c(oe(B))} deposits found for this ${B==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function oe(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function Pe(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Hn(t){return(Number(t)||0).toLocaleString()}function $t(t){return(Number(t)||0).toLocaleString()}function Ot(t){return Array.isArray(t)?t.map(e=>{var r,s,i,o,d,f,g,b,k,x,ot,Wt;const n=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:n==="monthly"||n==="biweekly"||n==="other"?n:"other",eventId:String((s=(r=e==null?void 0:e.eventId)!=null?r:e==null?void 0:e.event_id)!=null?s:"").trim(),time:Number((o=(i=e==null?void 0:e.time)!=null?i:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((f=(d=e==null?void 0:e.displayName)!=null?d:e==null?void 0:e.display_name)!=null?f:"").trim(),amount:Number((g=e==null?void 0:e.amount)!=null?g:0)||0,ticketAmount:Number((k=(b=e==null?void 0:e.ticketAmount)!=null?b:e==null?void 0:e.ticket_amount)!=null?k:0)||0,note:String((x=e==null?void 0:e.note)!=null?x:"").trim(),dataSource:String((Wt=(ot=e==null?void 0:e.dataSource)!=null?ot:e==null?void 0:e.data_source)!=null?Wt:"").trim()}}):[]}function wi(t){const e=new Map;for(const n of O)n.eventId&&e.set(n.eventId,n);for(const n of t)!n.eventId||e.set(n.eventId,n);O=Array.from(e.values()).sort((n,r)=>(Number(r.time)||0)-(Number(n.time)||0))}function zn(){Bn=new Date().toISOString()}async function ki(t={}){!(t!=null&&t.ok)||(O=Ot(t.entries),zn(),_==="more"&&l(),u("banking-data-updated",`Banking data updated. Loaded ${O.length} deposit record${O.length===1?"":"s"}.`,{ttlMs:h}))}async function et(t={}){const e=Boolean(t.silent);if(!(a!=null&&a.connected)){e||u("banking-data-error","GuildSync websocket is not connected.",{ttlMs:h});return}if(!!E()){ne=!0,l();try{const n=await N("guildsync:request-banking-data",{},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve banking data.");O=Ot(n.entries),zn(),e||u("banking-data",`Loaded ${O.length} banking deposit record${O.length===1?"":"s"}.`,{ttlMs:h})}catch(n){e||u("banking-data-error",w(n),{ttlMs:h})}finally{ne=!1,l()}}}async function Yn(t={}){var e,n;if(!!E()){if(!(a!=null&&a.connected)){u("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:h});return}ne=!0,l();try{const r=await ls(t);if(!(r!=null&&r.ok)){u("banking-data-pending",(r==null?void 0:r.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:h});return}const s=Ot((e=r==null?void 0:r.data)==null?void 0:e.entries);wi(s);const i=new Date().toISOString(),o={local_upload_id:jn(),authenticated_username:ue(),authenticated_discord_user_id:((n=m==null?void 0:m.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:i,data:r.data||{}};try{await Jn(o)}catch(d){throw Si(o),d}await et({silent:!0})}catch(r){u("banking-data-error",w(r),{ttlMs:h})}finally{ne=!1,l()}}}function jn(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function qt(){try{const t=window.localStorage.getItem(Sn),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Kn(t){window.localStorage.setItem(Sn,JSON.stringify(Array.isArray(t)?t:[]))}function Si(t){const e=String((t==null?void 0:t.local_upload_id)||jn()),n=qt().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Kn(n),u("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:h})}function _i(t){const e=qt().filter(n=>(n==null?void 0:n.local_upload_id)!==t);Kn(e)}async function Ai(){if(dt||!(a!=null&&a.connected)||!E())return;const t=qt();if(t.length!==0){dt=!0;try{for(const e of t){if(!(a!=null&&a.connected)||!E())return;await Jn(e),_i(e.local_upload_id)}}catch(e){u("banking-data-pending-error",`Pending banking upload retry failed: ${w(e)}`,{ttlMs:h})}finally{dt=!1}}}async function Jn(t){if(!(a!=null&&a.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await N("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const n=await us(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return u("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:h}),e}function Qn(){if(_!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>Ei());const e=document.querySelector("#discordMemberSearch");e&&e.addEventListener("input",s=>{Ve=s.target.value||"",kt=s.target.selectionStart,St=s.target.selectionEnd,l({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(s=>{s.addEventListener("click",()=>{Ci(s.dataset.discordSortColumn||"username")})});const n=document.querySelector("#discordRoleFilter");n&&n.addEventListener("change",s=>{const i=String(s.target.value||"").trim();i&&(re.add(i),l())}),document.querySelectorAll("[data-remove-role-filter]").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.removeRoleFilter||"";re.delete(i),l()})});const r=document.querySelector("#clearDiscordFiltersButton");r&&r.addEventListener("click",()=>{Ve="",re.clear(),l()})}async function Ei(){var t,e;if(!(a!=null&&a.connected)){u("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:h});return}Ue=!0,l(),u("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const n=await N("guildsync:request-discord-data-refresh",{requested_by:((t=m==null?void 0:m.user)==null?void 0:t.display_name)||((e=m==null?void 0:m.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to request Discord data refresh.");u("discord-refresh-requested",n.message||"Discord data refresh completed.",{ttlMs:h}),await It({silent:!0})}catch(n){u("discord-refresh-error",w(n),{ttlMs:h})}finally{Ue=!1,l()}}async function Ri(){if(!(a!=null&&a.connected))return;const t=await N("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(Xe=t.value||null)}async function Ti(t={}){if(!!(t!=null&&t.ok)){$=Xn(t.members),t.last_refresh&&(Xe=t.last_refresh);try{await Ri()}catch{}_==="discord-members"&&l(),u("discord-data-updated",`Discord data updated. Loaded ${$.length} member record${$.length===1?"":"s"}.`,{ttlMs:h})}}async function It(t={}){const e=Boolean(t.silent);if(!(a!=null&&a.connected)){u("discord-data-error","GuildSync websocket is not connected.",{ttlMs:h});return}ve=!0,l();try{const[n,r]=await Promise.all([N("guildsync:request-discord-data-date",{}),N("guildsync:request-discord-member-dataJSON",{})]);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord refresh date.");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord member data.");Xe=n.value||null,$=Xn(r.members),e||u("discord-data",`Loaded ${$.length} Discord member record${$.length===1?"":"s"}.`,{ttlMs:h})}catch(n){u("discord-data-error",w(n),{ttlMs:h})}finally{ve=!1,l()}}function N(t,e={},n=3e4){return new Promise((r,s)=>{if(!(a!=null&&a.connected)){s(new Error("GuildSync websocket is not connected."));return}let i=!1;const o=window.setTimeout(()=>{i||(i=!0,s(new Error(`${t} timed out.`)))},n);a.emit(t,e,d=>{i||(i=!0,window.clearTimeout(o),r(d))})})}function Xn(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(Bi).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,n)=>_e(e).localeCompare(_e(n),void 0,{sensitivity:"base"})):[]}function Bi(t){var s,i;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),n=String(t.role_name||t.name||"Unnamed Role").trim(),r=(i=(s=t.role_color)!=null?s:t.color)!=null?i:null;return{role_id:e,role_name:n||"Unnamed Role",role_color:r}}function Ni(){const t=Ve.trim().toLowerCase(),e=Array.from(re),n=$.filter(r=>{if(t&&![r.username,r.global_name,r.server_nickname,r.discord_id,...r.roles.map(i=>i.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const s=new Set(r.roles.map(i=>i.role_name));return e.every(i=>s.has(i))}return!0});return Li(n)}function Li(t){const e=Q==="desc"?-1:1;return[...t].sort((n,r)=>{const s=en(n,we),i=en(r,we),o=s.localeCompare(i,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:_e(n).localeCompare(_e(r),void 0,{sensitivity:"base",numeric:!0})})}function en(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(n=>n.role_name||"").filter(Boolean).sort((n,r)=>n.localeCompare(r,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function Ci(t){const n=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";we===n?Q=Q==="asc"?"desc":"asc":(we=n,Q="asc"),l()}function Me(t,e){const n=we===t,r=Q==="asc"?"ascending":"descending",s=n?Q==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${n?r:"none"}">
      <button
        class="discord-sort-header${n?" active":""}"
        type="button"
        data-discord-sort-column="${y(t)}"
        title="Sort ${y(e)} ${n&&Q==="asc"?"descending":"ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function Mi(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(kt)?kt:t.value.length,n=Number.isInteger(St)?St:e;t.setSelectionRange(e,n)}}function xi(){const t=new Set;for(const e of $)for(const n of e.roles)n.role_name&&t.add(n.role_name);return Array.from(t).sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function Di(t){const e=Ii(t),n=_e(t),r=t.roles||[];return`
    <tr>
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${y(e)}" alt="${y(n)}" />`:`<span>${c(ar(n))}</span>`}
          </div>
          <span>${c(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${c(t.global_name||"")}</td>
      <td>${c(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${r.length>0?r.map(s=>Oi(s)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
    </tr>
  `}function $i(){return`
    <tr>
      <td colspan="4" class="discord-empty-row">${c(ve?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function Oi(t){const e=tt(t.role_color),n=Ft(e),r=Gt(e,n);return`
    <span
      class="discord-role-badge"
      title="${y(t.role_name)}"
      style="${r}"
    >${c(t.role_name)}</span>
  `}function qi(t){const e=Pt(t),n=tt(e==null?void 0:e.role_color),r=Ft(n),s=Gt(n,r);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-role-filter="${y(t)}"
      style="${s}"
      title="Remove ${y(t)} filter"
    >
      <span>${c(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Pt(t){for(const e of $){const n=e.roles.find(r=>r.role_name===t);if(n)return n}return null}function tt(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function Gt(t,e){return[`--role-fill-top: ${tn(t,"#ffffff",.16)}`,`--role-fill-bottom: ${tn(t,"#000000",.1)}`,`--role-fill-glow: ${nn(t,.28)}`,`--role-fill-edge: ${nn(t,.46)}`,`color: ${e}`].join("; ")}function tn(t,e,n){const r=xe(t)||xe("#64748b"),s=xe(e)||xe("#ffffff"),i=Math.max(0,Math.min(1,Number(n)||0)),o=Math.round(r.red+(s.red-r.red)*i),d=Math.round(r.green+(s.green-r.green)*i),f=Math.round(r.blue+(s.blue-r.blue)*i);return`#${pt(o)}${pt(d)}${pt(f)}`}function xe(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function pt(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function nn(t,e){const n=String(t||"#64748b").replace("#",""),r=/^[0-9a-f]{6}$/i.test(n)?n:"64748b",s=parseInt(r.slice(0,2),16),i=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`rgba(${s}, ${i}, ${o}, ${e})`}function Ft(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const n=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),s=parseInt(e.slice(4,6),16);return(n*299+r*587+s*114)/1e3>150?"#0F172A":"#F8FAFC"}function Ii(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!n)return"";const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function _e(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function Zn(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Ge(){const t=document.querySelector("#discordArea");if(!!t){if(Ne(!1),E()){const e=m.user||{},n=ue(),r=to(e),s=ar(n);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${r?`<img src="${y(r)}" alt="${y(n)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${c(s)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const i=document.querySelector("#discordAvatarButton");i.addEventListener("contextmenu",o=>{o.preventDefault(),rn()}),i.addEventListener("click",()=>{rn()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",Vi)}}function rn(){if(Re){Ne();return}Ui()}function Pi(t=U){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],n=String((t==null?void 0:t.directory)||"").trim(),r=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(s=>{const i=String((s==null?void 0:s.key)||(s==null?void 0:s.fileName)||"").trim(),o=String((s==null?void 0:s.fileName)||"SavedVariables file").trim(),d=String((s==null?void 0:s.filePath)||(n?`${n}\\${o}`:o)).trim(),f=(s==null?void 0:s.enabled)!==!1,g=r&&f,b=`profileFileWatchToggle-${Fi(i||o)}`;return`
          <label class="profile-filewatch-item ${f?"enabled":"disabled"}" title="${y(d)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${c(o)}</span>
              <span class="profile-filewatch-state">${g?"Watching":f?"On":"Off"}</span>
            </span>
            <input
              id="${y(b)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${y(i)}"
              ${f?"checked":""}
              aria-label="Turn file watch ${f?"off":"on"} for ${y(o)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function Ut(){var r,s,i;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=ue(),n=((r=m.user)==null?void 0:r.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${c(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${c(no(n))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${c(Qe)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${U!=null&&U.watching?"Active":"Stopped"}</span>
        </div>
        ${Pi()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(s=document.querySelector("#discordLogoutButton"))==null||s.addEventListener("click",Wi),(i=document.querySelector("#associateTicketReportButton"))==null||i.addEventListener("click",()=>{Ne(!1),ie="",l(),Dn()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",Gi)})}async function er(){try{U=await fs(),Re&&Ut()}catch(t){u("file-watcher-error",w(t),{ttlMs:h})}}async function Gi(t){var r;const e=t.currentTarget,n=String(((r=e==null?void 0:e.dataset)==null?void 0:r.filewatchKey)||"").trim();if(!!n)try{e.disabled=!0,U=await bs(n,e.checked),await ae({silent:!0}),Re&&Ut()}catch(s){u("file-watcher-error",w(s),{ttlMs:h}),await er()}}function Fi(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function Ui(){const t=document.querySelector("#discordProfileMenu");!t||(Ut(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),Re=!0,er(),setTimeout(()=>{window.addEventListener("click",tr),window.addEventListener("keydown",nr)},0))}function Ne(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),Re=!1,t&&(window.removeEventListener("click",tr),window.removeEventListener("keydown",nr))}function tr(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&Ne()}function nr(t){t.key==="Escape"&&Ne()}async function Vi(){try{u("auth","Opening Discord login...",{ttlMs:h});const t=await ws();t!=null&&t.status_message&&u("auth",t.status_message,{ttlMs:h}),z()}catch(t){u("auth-error",w(t),{ttlMs:h}),z()}}async function Wi(){try{m=await ms(),u("auth",m.status_message||"Logged out.",{ttlMs:h}),Nn(),be(),await ae()}catch(t){u("auth-error",w(t),{ttlMs:h}),z()}}function be(){const t=m.socket_url||"http://127.0.0.1:3001";Hi(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};m!=null&&m.token&&(e.auth={token:m.token}),a=qe(t,e),a.on("connect",()=>{z(),rr(),_==="discord-members"&&It({silent:!0}),_==="eso-members"&&Be({silent:!0}),_==="more"&&et({silent:!0}),Ai(),ai(),zi()}),a.on("connect_error",()=>{z(),je()}),a.on("disconnect",()=>{z(),je()}),a.on("guildsync:version-status",n=>{Yi(n)}),a.on("guildsync:discord-member-data-updated",n=>{Ti(n)}),a.on("guildsync:banking-data-updated",n=>{ki(n)}),a.on("guildsync:roster-data-updated",n=>{ri(n)}),a.on("guildsync:discord-refresh-status",(n={})=>{const r=String(n.message||"").trim();r&&u("discord-refresh-status",r,{ttlMs:h})})}function Hi(t=!0){je(),a&&(a.disconnect(),a=null),t&&z()}function rr(){!(a!=null&&a.connected)||a.emit("guildsync:client-version",{version:Qe})}function zi(){je(),Ie=window.setInterval(()=>{rr()},As)}function je(){Ie&&(window.clearInterval(Ie),Ie=null)}function Yi(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown";u("version",`GuildSync is out of date. Current version: ${Qe}. Latest version: ${e}.`);return}Vt("version")}}function u(t,e,n={}){const r=String(t||"").trim(),s=String(e||"").trim();if(!(!r||!s)){if(Y.set(r,s),J.has(r)&&(window.clearTimeout(J.get(r)),J.delete(r)),n.ttlMs&&Number(n.ttlMs)>0){const i=window.setTimeout(()=>{Vt(r)},Number(n.ttlMs));J.set(r,i)}ce()}}function Vt(t){const e=String(t||"").trim();if(!!e){if(Y.delete(e),J.has(e)&&(window.clearTimeout(J.get(e)),J.delete(e)),S===e){st(()=>{S="",ce()});return}ce()}}function ce(){const t=nt();if(t.length===0){ee?st(Ae):Ae();return}!ee&&!te&&rt(t[0])}function nt(){return Array.from(Y.keys())}function sr(){const t=nt();if(t.length===0)return"";if(!S)return t[0];const e=t.indexOf(S);return e<0?t[0]:t[(e+1)%t.length]}function rt(t){const e=document.querySelector("#statusMessageTrack");if(!e||!Y.has(t)){Ae();return}it();const n=Y.get(t);S=t,ee=!0,te=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=n,e.style.setProperty("--message-fade-duration",`${En}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",te=!1,ji()},{once:!0})})}function ji(){const t=nt();if(!S||!Y.has(S)){ce();return}if(t.length<=1){sn(!1);return}sn(!0)}function sn(t){const e=document.querySelector("#statusMessageViewport"),n=document.querySelector("#statusMessageTrack");if(!e||!n)return;const r=Math.max(0,n.scrollWidth-e.clientWidth);if(r<=0){t&&Ee(()=>{st(()=>{const s=sr();S="",s?rt(s):Ae()})},An);return}Ee(()=>{ir(r,t)},Rn)}function ir(t,e){const n=document.querySelector("#statusMessageTrack");if(!n||!S||!Y.has(S))return;const r=Math.max(4,Math.ceil(t/Rs));n.style.setProperty("--long-scroll-distance",`${t}px`),n.style.setProperty("--long-scroll-duration",`${r}s`),n.classList.add("long-scroll"),n.addEventListener("animationend",()=>{if(n.classList.remove("long-scroll"),n.style.transform=`translateX(-${t}px) translateY(-50%)`,e){Ee(()=>{st(()=>{const s=sr();S="",s?rt(s):Ae()})},An);return}Ee(()=>{Ki()},Es)},{once:!0})}function Ki(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!S||!Y.has(S))return;if(nt().length!==1){ce();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const r=Math.max(0,e.scrollWidth-t.clientWidth);r<=0||Ee(()=>{ir(r,!1)},Rn)}function st(t){const e=document.querySelector("#statusMessageTrack");if(it(),!e||!ee){typeof t=="function"&&t();return}te=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${En}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",ee=!1,te=!1,typeof t=="function"&&t()},{once:!0})}function Ae(){const t=document.querySelector("#statusMessageTrack");it(),S="",ee=!1,te=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function Ee(t,e){const n=window.setTimeout(()=>{ge=ge.filter(r=>r!==n),t()},e);ge.push(n)}function it(){for(const t of ge)window.clearTimeout(t);ge=[]}function or(){if(!ee||te||!S)return;const t=S;it(),rt(t)}function z(){const t=document.querySelector("#statusDot");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(a!=null&&a.connected)){t.classList.add("status-red"),t.title="Websocket not connected";return}if(!E()){t.classList.add("status-yellow"),t.title="Websocket connected. User is not authenticated.";return}t.classList.add("status-green"),t.title=`Websocket connected. Authenticated as ${ue()}.`}}async function ae(t={}){try{if(E()){const e=await ks();U=e,!t.silent&&(e==null?void 0:e.message)&&u(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:h});return}U=await Ss(),Vt("file-watcher")}catch(e){u("file-watcher-error",w(e),{ttlMs:h})}}function Ji(t={}){if(!E())return;const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",n=String(t.label||"").trim(),r=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=n?`${n} saved variables (${r})`:r;u(`saved-vars-file-updated-${e}`,`${s} has been updated.`,{ttlMs:h}),e.toLowerCase()==="banking"&&Qi(t),e.toLowerCase()==="roster"&&Xi(t)}async function Qi(t={}){await Yn(t)}async function Xi(t={}){await si(t)}function Zi(t){!E()||u("file-watcher-error",w(t),{ttlMs:h})}function eo(){fe("guildsync-savedvars-file-modified",Ji),fe("guildsync-file-watcher-error",Zi),fe("guildsync-login-complete",async t=>{m=t||{logged_in:!1,allowed:!1},Ge(),be(),await ae(),u("auth",m.status_message||`Logged in and authorized as ${ue()}.`,{ttlMs:h})}),fe("guildsync-login-denied",async t=>{m={logged_in:!1,allowed:!1,status_message:""},Ge(),await ae(),u("auth",t||"Access denied.",{ttlMs:h}),be()}),fe("guildsync-login-failed",async t=>{m={logged_in:!1,allowed:!1,status_message:""},Ge(),await ae(),u("auth",t||"Login failed.",{ttlMs:h}),be()})}function E(){return Boolean((m==null?void 0:m.logged_in)&&(m==null?void 0:m.allowed)&&(m==null?void 0:m.token))}function ue(){var t,e;return((t=m.user)==null?void 0:t.display_name)||((e=m.user)==null?void 0:e.username)||"Discord User"}function to(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),n=String(t.discord_user_id||"").trim();if(!e||!n)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=128`}function ar(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function no(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function ro(){pe&&(pe.disconnect(),pe=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),n=Math.round(t.getBoundingClientRect().height);pe=new ResizeObserver(r=>{const s=r[0];if(!s)return;const i=Math.round(s.contentRect.width),o=Math.round(s.contentRect.height);i===e&&o===n||(e=i,n=o,cr(),or())}),pe.observe(t)}function cr(){clearTimeout(Kt),Kt=setTimeout(async()=>{try{await kn()}catch{}},500)}function w(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function c(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function y(t){return c(t)}eo();Ms();
