(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const qi="/assets/splash.ea386b6a.png",Fi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",Gi="/assets/GuildSync-Graphic.9169020d.png",Y=Object.create(null);Y.open="0";Y.close="1";Y.ping="2";Y.pong="3";Y.message="4";Y.upgrade="5";Y.noop="6";const Gt=Object.create(null);Object.keys(Y).forEach(t=>{Gt[Y[t]]=t});const Nr={type:"error",data:"parser error"},Zn=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",es=typeof ArrayBuffer=="function",ts=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Xr=({type:t,data:e},r,n)=>Zn&&e instanceof Blob?r?n(e):En(e,n):es&&(e instanceof ArrayBuffer||ts(e))?r?n(e):En(new Blob([e]),n):n(Y[t]+(e||"")),En=(t,e)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];e("b"+(n||""))},r.readAsDataURL(t)};function Rn(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let wr;function Pi(t,e){if(Zn&&t.data instanceof Blob)return t.data.arrayBuffer().then(Rn).then(e);if(es&&(t.data instanceof ArrayBuffer||ts(t.data)))return e(Rn(t.data));Xr(t,!1,r=>{wr||(wr=new TextEncoder),e(wr.encode(r))})}const Dn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ft=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<Dn.length;t++)ft[Dn.charCodeAt(t)]=t;const Ui=t=>{let e=t.length*.75,r=t.length,n,s=0,i,o,c,f;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const b=new ArrayBuffer(e),v=new Uint8Array(b);for(n=0;n<r;n+=4)i=ft[t.charCodeAt(n)],o=ft[t.charCodeAt(n+1)],c=ft[t.charCodeAt(n+2)],f=ft[t.charCodeAt(n+3)],v[s++]=i<<2|o>>4,v[s++]=(o&15)<<4|c>>2,v[s++]=(c&3)<<6|f&63;return b},Vi=typeof ArrayBuffer=="function",Zr=(t,e)=>{if(typeof t!="string")return{type:"message",data:rs(t,e)};const r=t.charAt(0);return r==="b"?{type:"message",data:Hi(t.substring(1),e)}:Gt[r]?t.length>1?{type:Gt[r],data:t.substring(1)}:{type:Gt[r]}:Nr},Hi=(t,e)=>{if(Vi){const r=Ui(t);return rs(r,e)}else return{base64:!0,data:t}},rs=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},ns=String.fromCharCode(30),Wi=(t,e)=>{const r=t.length,n=new Array(r);let s=0;t.forEach((i,o)=>{Xr(i,!1,c=>{n[o]=c,++s===r&&e(n.join(ns))})})},zi=(t,e)=>{const r=t.split(ns),n=[];for(let s=0;s<r.length;s++){const i=Zr(r[s],e);if(n.push(i),i.type==="error")break}return n};function ji(){return new TransformStream({transform(t,e){Pi(t,r=>{const n=r.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const i=new DataView(s.buffer);i.setUint8(0,126),i.setUint16(1,n)}else{s=new Uint8Array(9);const i=new DataView(s.buffer);i.setUint8(0,127),i.setBigUint64(1,BigInt(n))}t.data&&typeof t.data!="string"&&(s[0]|=128),e.enqueue(s),e.enqueue(r)})}})}let _r;function Ct(t){return t.reduce((e,r)=>e+r.length,0)}function Bt(t,e){if(t[0].length===e)return t.shift();const r=new Uint8Array(e);let n=0;for(let s=0;s<e;s++)r[s]=t[0][n++],n===t[0].length&&(t.shift(),n=0);return t.length&&n<t[0].length&&(t[0]=t[0].slice(n)),r}function Yi(t,e){_r||(_r=new TextDecoder);const r=[];let n=0,s=-1,i=!1;return new TransformStream({transform(o,c){for(r.push(o);;){if(n===0){if(Ct(r)<1)break;const f=Bt(r,1);i=(f[0]&128)===128,s=f[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(Ct(r)<2)break;const f=Bt(r,2);s=new DataView(f.buffer,f.byteOffset,f.length).getUint16(0),n=3}else if(n===2){if(Ct(r)<8)break;const f=Bt(r,8),b=new DataView(f.buffer,f.byteOffset,f.length),v=b.getUint32(0);if(v>Math.pow(2,53-32)-1){c.enqueue(Nr);break}s=v*Math.pow(2,32)+b.getUint32(4),n=3}else{if(Ct(r)<s)break;const f=Bt(r,s);c.enqueue(Zr(i?f:_r.decode(f),e)),n=0}if(s===0||s>t){c.enqueue(Nr);break}}}})}const ss=4;function D(t){if(t)return Ki(t)}function Ki(t){for(var e in D.prototype)t[e]=D.prototype[e];return t}D.prototype.on=D.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};D.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this};D.prototype.off=D.prototype.removeListener=D.prototype.removeAllListeners=D.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var n,s=0;s<r.length;s++)if(n=r[s],n===e||n.fn===e){r.splice(s,1);break}return r.length===0&&delete this._callbacks["$"+t],this};D.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),r=this._callbacks["$"+t],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,s=r.length;n<s;++n)r[n].apply(this,e)}return this};D.prototype.emitReserved=D.prototype.emit;D.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};D.prototype.hasListeners=function(t){return!!this.listeners(t).length};const ir=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,r)=>r(e,0))(),O=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),Ji="arraybuffer";function is(t,...e){return e.reduce((r,n)=>(t.hasOwnProperty(n)&&(r[n]=t[n]),r),{})}const Qi=O.setTimeout,Xi=O.clearTimeout;function or(t,e){e.useNativeTimers?(t.setTimeoutFn=Qi.bind(O),t.clearTimeoutFn=Xi.bind(O)):(t.setTimeoutFn=O.setTimeout.bind(O),t.clearTimeoutFn=O.clearTimeout.bind(O))}const Zi=1.33;function eo(t){return typeof t=="string"?to(t):Math.ceil((t.byteLength||t.size)*Zi)}function to(t){let e=0,r=0;for(let n=0,s=t.length;n<s;n++)e=t.charCodeAt(n),e<128?r+=1:e<2048?r+=2:e<55296||e>=57344?r+=3:(n++,r+=4);return r}function os(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function ro(t){let e="";for(let r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e}function no(t){let e={},r=t.split("&");for(let n=0,s=r.length;n<s;n++){let i=r[n].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}class so extends Error{constructor(e,r,n){super(e),this.description=r,this.context=n,this.type="TransportError"}}class en extends D{constructor(e){super(),this.writable=!1,or(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,r,n){return super.emitReserved("error",new so(e,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const r=Zr(e,this.socket.binaryType);this.onPacket(r)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,r={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const r=ro(e);return r.length?"?"+r:""}}class io extends en{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const r=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};zi(e,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Wi(e,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=os()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(e,r)}}let as=!1;try{as=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const oo=as;function ao(){}class co extends io{constructor(e){if(super(e),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,r){const n=this.request({method:"POST",data:e});n.on("success",r),n.on("error",(s,i)=>{this.onError("xhr post error",s,i)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=e}}class z extends D{constructor(e,r,n){super(),this.createRequest=e,or(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;const r=is(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=z.requestsCount++,z.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=ao,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete z.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}z.requestsCount=0;z.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",$n);else if(typeof addEventListener=="function"){const t="onpagehide"in O?"pagehide":"unload";addEventListener(t,$n,!1)}}function $n(){for(let t in z.requests)z.requests.hasOwnProperty(t)&&z.requests[t].abort()}const lo=function(){const t=cs({xdomain:!1});return t&&t.responseType!==null}();class uo extends co{constructor(e){super(e);const r=e&&e.forceBase64;this.supportsBinary=lo&&!r}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new z(cs,this.uri(),e)}}function cs(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||oo))return new XMLHttpRequest}catch{}if(!e)try{return new O[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const ds=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class fo extends en{get name(){return"websocket"}doOpen(){const e=this.uri(),r=this.opts.protocols,n=ds?{}:is(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,r,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],s=r===e.length-1;Xr(n,this.supportsBinary,i=>{try{this.doWrite(n,i)}catch{}s&&ir(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=os()),this.supportsBinary||(r.b64=1),this.createUri(e,r)}}const Lr=O.WebSocket||O.MozWebSocket;class ho extends fo{createSocket(e,r,n){return ds?new Lr(e,r,n):r?new Lr(e,r):new Lr(e)}doWrite(e,r){this.ws.send(r)}}class po extends en{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const r=Yi(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(r).getReader(),s=ji();s.readable.pipeTo(e.writable),this._writer=s.writable.getWriter();const i=()=>{n.read().then(({done:c,value:f})=>{c||(this.onPacket(f),i())}).catch(c=>{})};i();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],s=r===e.length-1;this._writer.write(n).then(()=>{s&&ir(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const mo={websocket:ho,webtransport:po,polling:uo},go=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,yo=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Cr(t){if(t.length>8e3)throw"URI too long";const e=t,r=t.indexOf("["),n=t.indexOf("]");r!=-1&&n!=-1&&(t=t.substring(0,r)+t.substring(r,n).replace(/:/g,";")+t.substring(n,t.length));let s=go.exec(t||""),i={},o=14;for(;o--;)i[yo[o]]=s[o]||"";return r!=-1&&n!=-1&&(i.source=e,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=bo(i,i.path),i.queryKey=vo(i,i.query),i}function bo(t,e){const r=/\/{2,9}/g,n=e.replace(r,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function vo(t,e){const r={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,i){s&&(r[s]=i)}),r}const Br=typeof addEventListener=="function"&&typeof removeEventListener=="function",Pt=[];Br&&addEventListener("offline",()=>{Pt.forEach(t=>t())},!1);class le extends D{constructor(e,r){if(super(),this.binaryType=Ji,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(r=e,e=null),e){const n=Cr(e);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=Cr(r.host).host);or(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const s=n.prototype.name;this.transports.push(s),this._transportsByName[s]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=no(this.opts.query)),Br&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Pt.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const r=Object.assign({},this.opts.query);r.EIO=ss,r.transport=e,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&le.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(e);r.open(),this.setTransport(r)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",le.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=e.data,this._onError(r);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(r+=eo(s)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,ir(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,r,n){return this._sendPacket("message",e,r,n),this}send(e,r,n){return this._sendPacket("message",e,r,n),this}_sendPacket(e,r,n,s){if(typeof r=="function"&&(s=r,r=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const i={type:e,data:r,options:n};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),s&&this.once("flush",s),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),e()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(le.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Br&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=Pt.indexOf(this._offlineEventListener);n!==-1&&Pt.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,r),this.writeBuffer=[],this._prevBufferLen=0}}}le.protocol=ss;class ko extends le{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let r=this.createTransport(e),n=!1;le.priorWebsocketSuccess=!1;const s=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",m=>{if(!n)if(m.type==="pong"&&m.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;le.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(v(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const S=new Error("probe error");S.transport=r.name,this.emitReserved("upgradeError",S)}}))};function i(){n||(n=!0,v(),r.close(),r=null)}const o=m=>{const S=new Error("probe error: "+m);S.transport=r.name,i(),this.emitReserved("upgradeError",S)};function c(){o("transport closed")}function f(){o("socket closed")}function b(m){r&&m.name!==r.name&&i()}const v=()=>{r.removeListener("open",s),r.removeListener("error",o),r.removeListener("close",c),this.off("close",f),this.off("upgrading",b)};r.once("open",s),r.once("error",o),r.once("close",c),this.once("close",f),this.once("upgrading",b),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const r=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&r.push(e[n]);return r}}class So extends ko{constructor(e,r={}){const n=typeof e=="object"?e:r;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(s=>mo[s]).filter(s=>!!s)),super(e,n)}}function wo(t,e="",r){let n=t;r=r||typeof location<"u"&&location,t==null&&(t=r.protocol+"//"+r.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=r.protocol+t:t=r.host+t),/^(https?|wss?):\/\//.test(t)||(typeof r<"u"?t=r.protocol+"//"+t:t="https://"+t),n=Cr(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const i=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+i+":"+n.port+e,n.href=n.protocol+"://"+i+(r&&r.port===n.port?"":":"+n.port),n}const _o=typeof ArrayBuffer=="function",Lo=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,ls=Object.prototype.toString,Ao=typeof Blob=="function"||typeof Blob<"u"&&ls.call(Blob)==="[object BlobConstructor]",Eo=typeof File=="function"||typeof File<"u"&&ls.call(File)==="[object FileConstructor]";function tn(t){return _o&&(t instanceof ArrayBuffer||Lo(t))||Ao&&t instanceof Blob||Eo&&t instanceof File}function Ut(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let r=0,n=t.length;r<n;r++)if(Ut(t[r]))return!0;return!1}if(tn(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return Ut(t.toJSON(),!0);for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&Ut(t[r]))return!0;return!1}function Ro(t){const e=[],r=t.data,n=t;return n.data=xr(r,e),n.attachments=e.length,{packet:n,buffers:e}}function xr(t,e){if(!t)return t;if(tn(t)){const r={_placeholder:!0,num:e.length};return e.push(t),r}else if(Array.isArray(t)){const r=new Array(t.length);for(let n=0;n<t.length;n++)r[n]=xr(t[n],e);return r}else if(typeof t=="object"&&!(t instanceof Date)){const r={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=xr(t[n],e));return r}return t}function Do(t,e){return t.data=Or(t.data,e),delete t.attachments,t}function Or(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let r=0;r<t.length;r++)t[r]=Or(t[r],e);else if(typeof t=="object")for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(t[r]=Or(t[r],e));return t}const us=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],$o=5;var g;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(g||(g={}));class Mo{constructor(e){this.replacer=e}encode(e){return(e.type===g.EVENT||e.type===g.ACK)&&Ut(e)?this.encodeAsBinary({type:e.type===g.EVENT?g.BINARY_EVENT:g.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let r=""+e.type;return(e.type===g.BINARY_EVENT||e.type===g.BINARY_ACK)&&(r+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(r+=e.nsp+","),e.id!=null&&(r+=e.id),e.data!=null&&(r+=JSON.stringify(e.data,this.replacer)),r}encodeAsBinary(e){const r=Ro(e),n=this.encodeAsString(r.packet),s=r.buffers;return s.unshift(n),s}}class rn extends D{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let r;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(e);const n=r.type===g.BINARY_EVENT;n||r.type===g.BINARY_ACK?(r.type=n?g.EVENT:g.ACK,this.reconstructor=new To(r),r.attachments===0&&super.emitReserved("decoded",r)):super.emitReserved("decoded",r)}else if(tn(e)||e.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(e),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let r=0;const n={type:Number(e.charAt(0))};if(g[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===g.BINARY_EVENT||n.type===g.BINARY_ACK){const i=r+1;for(;e.charAt(++r)!=="-"&&r!=e.length;);const o=e.substring(i,r);if(o!=Number(o)||e.charAt(r)!=="-")throw new Error("Illegal attachments");const c=Number(o);if(!fs(c)||c<0)throw new Error("Illegal attachments");if(c>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=c}if(e.charAt(r+1)==="/"){const i=r+1;for(;++r&&!(e.charAt(r)===","||r===e.length););n.nsp=e.substring(i,r)}else n.nsp="/";const s=e.charAt(r+1);if(s!==""&&Number(s)==s){const i=r+1;for(;++r;){const o=e.charAt(r);if(o==null||Number(o)!=o){--r;break}if(r===e.length)break}n.id=Number(e.substring(i,r+1))}if(e.charAt(++r)){const i=this.tryParse(e.substr(r));if(rn.isPayloadValid(n.type,i))n.data=i;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,r){switch(e){case g.CONNECT:return Yt(r);case g.DISCONNECT:return r===void 0;case g.CONNECT_ERROR:return typeof r=="string"||Yt(r);case g.EVENT:case g.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&us.indexOf(r[0])===-1);case g.ACK:case g.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class To{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const r=Do(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function No(t){return typeof t=="string"}const fs=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function Co(t){return t===void 0||fs(t)}function Yt(t){return Object.prototype.toString.call(t)==="[object Object]"}function Bo(t,e){switch(t){case g.CONNECT:return e===void 0||Yt(e);case g.DISCONNECT:return e===void 0;case g.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&us.indexOf(e[0])===-1);case g.ACK:return Array.isArray(e);case g.CONNECT_ERROR:return typeof e=="string"||Yt(e);default:return!1}}function xo(t){return No(t.nsp)&&Co(t.id)&&Bo(t.type,t.data)}const Oo=Object.freeze(Object.defineProperty({__proto__:null,protocol:$o,get PacketType(){return g},Encoder:Mo,Decoder:rn,isPacketValid:xo},Symbol.toStringTag,{value:"Module"}));function P(t,e,r){return t.on(e,r),function(){t.off(e,r)}}const Io=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class hs extends D{constructor(e,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[P(e,"open",this.onopen.bind(this)),P(e,"packet",this.onpacket.bind(this)),P(e,"error",this.onerror.bind(this)),P(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...r){var n,s,i;if(Io.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(r.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const o={type:g.EVENT,data:r};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const v=this.ids++,m=r.pop();this._registerAckCallback(v,m),o.id=v}const c=(s=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||s===void 0?void 0:s.writable,f=this.connected&&!(!((i=this.io.engine)===null||i===void 0)&&i._hasPingExpired());return this.flags.volatile&&!c||(f?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,r){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[e]=r;return}const i=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let c=0;c<this.sendBuffer.length;c++)this.sendBuffer[c].id===e&&this.sendBuffer.splice(c,1);r.call(this,new Error("operation has timed out"))},s),o=(...c)=>{this.io.clearTimeoutFn(i),r.apply(this,c)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...r){return new Promise((n,s)=>{const i=(o,c)=>o?s(o):n(c);i.withError=!0,r.push(i),this.emit(e,...r)})}_addToQueue(e){let r;typeof e[e.length-1]=="function"&&(r=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((s,...i)=>(this._queue[0],s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(s)):(this._queue.shift(),r&&r(null,...i)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!e||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:g.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){const n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case g.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case g.EVENT:case g.BINARY_EVENT:this.onevent(e);break;case g.ACK:case g.BINARY_ACK:this.onack(e);break;case g.DISCONNECT:this.ondisconnect();break;case g.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const r=e.data||[];e.id!=null&&r.push(this.ack(e.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const r=this;let n=!1;return function(...s){n||(n=!0,r.packet({type:g.ACK,id:e,data:s}))}}onack(e){const r=this.acks[e.id];typeof r=="function"&&(delete this.acks[e.id],r.withError&&e.data.unshift(null),r.apply(this,e.data))}onconnect(e,r){this.id=e,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:g.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,e.data)}}}function Xe(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}Xe.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-r:t+r}return Math.min(t,this.max)|0};Xe.prototype.reset=function(){this.attempts=0};Xe.prototype.setMin=function(t){this.ms=t};Xe.prototype.setMax=function(t){this.max=t};Xe.prototype.setJitter=function(t){this.jitter=t};class Ir extends D{constructor(e,r){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(r=e,e=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,or(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Xe({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=e;const s=r.parser||Oo;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var r;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(r=this.backoff)===null||r===void 0||r.setMin(e),this)}randomizationFactor(e){var r;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(r=this.backoff)===null||r===void 0||r.setJitter(e),this)}reconnectionDelayMax(e){var r;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(r=this.backoff)===null||r===void 0||r.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new So(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=P(r,"open",function(){n.onopen(),e&&e()}),i=c=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",c),e?e(c):this.maybeReconnectOnOpen()},o=P(r,"error",i);if(this._timeout!==!1){const c=this._timeout,f=this.setTimeoutFn(()=>{s(),i(new Error("timeout")),r.close()},c);this.opts.autoUnref&&f.unref(),this.subs.push(()=>{this.clearTimeoutFn(f)})}return this.subs.push(s),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(P(e,"ping",this.onping.bind(this)),P(e,"data",this.ondata.bind(this)),P(e,"error",this.onerror.bind(this)),P(e,"close",this.onclose.bind(this)),P(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(r){this.onclose("parse error",r)}}ondecoded(e){ir(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,r){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new hs(this,e,r),this.nsps[e]=n),n}_destroy(e){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(e){const r=this.encoder.encode(e);for(let n=0;n<r.length;n++)this.engine.write(r[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(s=>{s?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",s)):e.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const at={};function Vt(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const r=wo(t,e.path||"/socket.io"),n=r.source,s=r.id,i=r.path,o=at[s]&&i in at[s].nsps,c=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let f;return c?f=new Ir(n,e):(at[s]||(at[s]=new Ir(n,e)),f=at[s]),r.query&&!e.query&&(e.query=r.queryKey),f.socket(r.path,e)}Object.assign(Vt,{Manager:Ir,Socket:hs,io:Vt,connect:Vt});window.GUILDSYNC_WEB=!0;const nn="guildsync-web-session";function qo(){try{return JSON.parse(localStorage.getItem(nn)||"{}")||{}}catch{return{}}}function Fo(t){localStorage.setItem(nn,JSON.stringify(t||{}))}function ps(){localStorage.removeItem(nn)}async function Go(){return!0}async function ms(){return!0}async function Po(){return!0}async function Uo(){return!0}async function Vo(){return!0}async function Ho(){return window.location.assign("/api/auth/discord/web-login"),!0}async function Wo(){var i,o,c,f,b,v,m,S;const e=qo().token||localStorage.getItem("guildsync-web-token")||"";if(!e)return{logged_in:!1,allowed:!1,status_message:"Not logged in."};const r=await fetch("/api/auth/session",{headers:{Authorization:`Bearer ${e}`}}),n=await r.json().catch(()=>({}));if(!r.ok||n.ok===!1)return ps(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:n.message||"Session expired. Please log in again."};const s={logged_in:!0,allowed:!0,token:e,user:n.user,discord_user_id:((i=n.user)==null?void 0:i.discord_user_id)||"",username:((o=n.user)==null?void 0:o.username)||"",global_name:((c=n.user)==null?void 0:c.global_name)||"",display_name:((f=n.user)==null?void 0:f.display_name)||((b=n.user)==null?void 0:b.global_name)||((v=n.user)==null?void 0:v.username)||"",avatar_url:((m=n.user)==null?void 0:m.avatar_url)||"",role:((S=n.user)==null?void 0:S.role)||"user",status_message:"Logged in."};return Fo(s),s}async function zo(){return ps(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:"Logged out."}}async function jo(){return gs()}async function Yo(){return gs()}async function gs(){return{watching:!1,directory:"Web upload mode",files:[{key:"banking",fileName:"GuildSyncBanking.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"},{key:"roster",fileName:"GuildSyncRoster.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"}]}}async function Ko(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function Jo(){return{ok:!0}}async function Qo(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function Xo(){return{ok:!0}}const xt=new Map;function ct(t,e){return xt.has(t)||xt.set(t,new Set),xt.get(t).add(e),()=>{var r;return(r=xt.get(t))==null?void 0:r.delete(e)}}const ar="1.0.3",Ot={windows:{label:"Windows detected",shortLabel:"Windows",fileName:"GuildSync-windows-amd64.zip",href:"/downloads/GuildSync-windows-amd64.zip"},macos:{label:"macOS detected",shortLabel:"macOS",fileName:"GuildSync-macos.zip",href:"/downloads/GuildSync-macos.zip"},linux:{label:"Linux detected",shortLabel:"Linux",fileName:"GuildSync-linux-amd64.zip",href:"/downloads/GuildSync-linux-amd64.zip"}},Zo=30*60*1e3,ys="guildsync-pending-banking-uploads",bs="guildsync-pending-roster-uploads",vs="guildsync-web-savedvars-upload-banner-dismissed",ea=new Map([["GuildSyncBanking.lua","banking"],["GuildSyncRoster.lua","roster"],["GuildSyncApplications.lua","applications"]]),p=60*1e3,ks=7e3,Ss=1400,ws=2400,ta=4e3,ra=38,_s=document.querySelector("#app");let Mn=null,dt=null,Tn=!1,sn=!1,Ht=null,Ar=!1,Er=!1,Nn=null,qe=0,Rr=!1,ge=new Map,Se=new Map,M="",$e=!1,Me=!1,ht=[],y={logged_in:!1,allowed:!1,status_message:""},l=null,B=[],cr=null,yt=!1,Kt=!1,Jt="",Fe=new Set,Ge=new Set,bt="username",we="asc",qr=null,Fr=null,H=[],Qt=null,ye=!1,Cn=!1,Xt="",Gr=null,Pr=null,_e=new Set,Pe=new Set,X="",N="",$=-1,We=!1,vt="",I=[],be="",ue=[],fe=!1,ee="",Dr=null,U=-1,ze=!1,se="",q=[],je="",Te="",he=[],pe=!1,te="",Bn=null,ke=0;const na=650;let V=-1,Ze=!1,et=[],ie=!1,Le="",tt=!1,kt=[],oe=!1,Ae="",Ne=!1,on=[],ae=!1,Ee="",rt="",ce="",Ue="",de="",L=[],x=!1,G="",Ie=!1,dr="",Ve="",Lt="",At="",Z=-1,ve=!1,k=null,Re=[],Ye=!1,ne="",Et="",W=-1,nt=!1,an=null,pt=null;const cn=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let j=[],F="biweekly",Ls=null,Ce=!1,De=!1,Rt="biweekly",re=!1,Zt=!1,Q="",_={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},st="",J=-1,Ur={biweekly:0,monthly:0};const sa=1780786800,ia=1781996400,oa=14*24*60*60,aa=28*24*60*60,ca=60*60,er=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let E=er[0].id;function da(){_s.innerHTML=`
    <main class="splash-screen">
      <img src="${qi}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await Go(),await la(),As(),mt(),await gt()},5e3)}async function la(){try{y=await Wo()}catch(t){y={logged_in:!1,allowed:!1,status_message:""},h("session-error",w(t),{ttlMs:p})}}function As(){_s.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${Fi}" alt="" class="title-icon" />
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
            <img src="${Gi}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${a(ar)}</div>
            </div>
          </div>
          <div class="compact-header-actions">
            ${fa()}
            <div id="discordArea" class="discord-area"></div>
          </div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${Es()}
        </nav>

        <div id="webSavedVarsUploadBannerHost">
          ${Ga()}
        </div>

        <section id="guildSyncTabContent" class="guildsync-tab-content${Bs()?" web-upload-banner-dismissed":""}" aria-live="polite">
          ${Rs()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await Uo()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await ms(),await Vo()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await Po()}),jt(),Pa(),$s(),Ri(),fi(),bi(),xs(),ui(),si(),ii(),oi(),ai(),Ys(),hi(),ba(),me(),Qe(),Tn||(window.addEventListener("resize",()=>{Oi(),Bi()}),nl(),Tn=!0)}function ua(){var r;const e=`${((r=navigator.userAgentData)==null?void 0:r.platform)||""} ${navigator.platform||""} ${navigator.userAgent||""}`.toLowerCase();return e.includes("win")?Ot.windows:e.includes("mac")||e.includes("darwin")?Ot.macos:e.includes("linux")||e.includes("x11")?Ot.linux:{...Ot.windows,label:"Desktop client",shortLabel:"Windows"}}function fa(){const t=ua();return`
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
  `}function Es(){return er.map(t=>{const e=t.id===E;return`
        <button
          class="guildsync-tab${e?" active":""}"
          type="button"
          data-tab-id="${u(t.id)}"
          aria-selected="${e?"true":"false"}"
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${ha(t.icon)}</span>
          <span class="guildsync-tab-label">${a(t.label)}</span>
        </button>
      `}).join("")}function ha(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function Rs(){const t=er.find(r=>r.id===E)||er[0];let e="";return t.id==="discord-members"?e=ka():t.id==="eso-members"?e=Sa():t.id==="more"?e=ld():t.id==="settings"?e=Ua():e=`
      <div class="guildsync-tab-panel" data-active-tab="${u(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${a(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${re?Yc():""}
    ${ve?Fc():""}
    ${Ze?ja():""}
    ${tt?Za():""}
    ${Ne?nc():""}
    ${Ie?mc():""}
    ${nt?ya():""}
  `}function pa(){return nt||We||ze||re||ve||Ze||tt||Ne||Ie||De}function ma(){return nt?!1:Ie?(jr(),!0):Ne||Ne?(rr(),!0):tt?(zr(),!0):Ze?(Wr(),!0):ve?(Je(),!0):re?(re=!1,d(),!0):We?(We=!1,d(),!0):ze?(ze=!1,d(),!0):De?(De=!1,d(),!0):!1}function ga(t){t.key==="Escape"&&ma()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",ga,!0),window.guildSyncGlobalModalEscapeAttached=!0);function Ds(t={}){return new Promise(e=>{pt&&pt(!1),nt=!0,an={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},pt=e,d()})}function tr(t=!1){const e=pt;pt=null,nt=!1,an=null,e&&e(t===!0),d()}function ya(){const t=an||{};return`
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
  `}function xn(t){var n,s,i,o;const e=(s=(n=t.target).closest)==null?void 0:s.call(n,"#cancelGuildSyncConfirmButton"),r=(o=(i=t.target).closest)==null?void 0:o.call(i,"#acceptGuildSyncConfirmButton");if(!(!e&&!r)){if(t.preventDefault(),t.stopPropagation(),e){tr(!1);return}r&&tr(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",xn,!0),document.addEventListener("pointerup",xn,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function ba(){if(!nt)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=n=>{n.preventDefault(),n.stopPropagation(),tr(!1)}),e&&(e.onclick=n=>{n.preventDefault(),n.stopPropagation(),tr(!0)});const r=document.querySelector(".guildsync-confirm-overlay");r&&(r.onclick=n=>{n.target===r&&(n.preventDefault(),n.stopPropagation())})}function $s(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(pa())return;const e=t.dataset.tabId;!e||e===E||(E=e,d())})})}function va(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function d(t={}){Ie&&va();const e=document.querySelector(".guildsync-tabs"),r=document.querySelector("#guildSyncTabContent");e&&(e.innerHTML=Es()),r&&(r.innerHTML=Rs()),$s(),Ri(),fi(),bi(),xs(),ui(),si(),ii(),oi(),ai(),Ys(),hi(),t.restoreDiscordSearchFocus&&Cd(),t.restoreRosterSearchFocus&&Bd(),E==="discord-members"&&(l==null?void 0:l.connected)&&B.length===0&&!yt&&kn({silent:!0}),E==="eso-members"&&(l==null?void 0:l.connected)&&H.length===0&&!ye&&!Cn&&(Cn=!0,it({silent:!0})),E==="more"&&(l==null?void 0:l.connected)&&j.length===0&&!Ce&&Tt({silent:!0}),(E==="discord-members"||E==="eso-members"||E==="settings")&&(l==null?void 0:l.connected)&&L.length===0&&!x&&Mt({silent:!0})}function ka(){const t=Md(),e=xd(),r=Array.from(Fe),n=Array.from(Ge);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${a(Di(cr))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${yt||Kt?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Kt?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${u(Jt)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(s=>!Fe.has(s)).map(s=>`<option value="${u(s)}">${a(s)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All roles</span>':r.map(s=>Fd(s)).join("")}
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
              ${cn.filter(s=>!Ge.has(s.id)).map(s=>`<option value="${u(s.id)}">${a(s.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(s=>Ms("discord",s)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${qt("username","Username")}
                ${qt("global_name","Global Name")}
                ${qt("server_nickname","Server Nickname")}
                ${qt("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(s=>Od(s)).join(""):Id()}
            </tbody>
          </table>
        </div>
      </div>
      ${ze?Ca():""}
    </div>
  `}function Sa(){const t=Ea(),e=$a(),r=Array.from(_e),n=Array.from(Pe);return`
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
          <span class="discord-last-refresh">Last Refresh: ${a(sd(Qt))}</span>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${ye?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${ye?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${u(Xt)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(s=>!_e.has(s)).map(s=>`<option value="${u(s)}">${a(s)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All ranks</span>':r.map(s=>Ma(s)).join("")}
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
              ${cn.filter(s=>!Pe.has(s.id)).map(s=>`<option value="${u(s.id)}">${a(s.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(s=>Ms("roster",s)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${It("account_name","Account Name")}
                ${It("rank","Rank")}
                ${It("joined","Joined")}
                ${It("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map((s,i)=>wa(s,i)).join(""):_a()}
            </tbody>
          </table>
        </div>
      </div>
      ${We?Ia():""}
    </div>
  `}function wa(t,e=-1){const r=La(t.rank||""),n=r?` style="color: ${r};"`:"";return`
    <tr class="eso-roster-row${e===$?" roster-search-active-row":""}"${n} data-roster-row-index="${u(String(e))}" data-eso-account-name="${u(t.account_name||"")}">
      <td>${a(t.account_name||"")}</td>
      <td>${dn(t.rank||"")}</td>
      <td>${a(fr(t.joined))}</td>
      <td class="member-link-action-cell">${Zs({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function _a(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">${a(ye?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function La(t){const e=String(t||"").trim(),r=wn(e);return gr(r==null?void 0:r.role_color)}function dn(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${a(e)}</span>`}function Aa(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":dn(e)}function Ea(){const t=Xt.trim().toLowerCase(),e=H.filter(r=>{const n=String(r.rank||"").trim();if(_e.size>0&&!_e.has(n)||!Cs(Pe,Vr(r)))return!1;if(!t)return!0;const s=fr(r.joined),i=mn(r.joined),o=Vr(r),c=Ns(r.account_name||"");return[r.account_name,n,s,i,r.joined,o,c].map(b=>String(b||"").toLowerCase()).join(" ").includes(t)});return Ra(e)}function Ra(t){if(!X||!N)return t;const e=N==="desc"?-1:1;return[...t].sort((r,n)=>{const s=On(r,X),i=On(n,X),o=s.localeCompare(i,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:String(r.account_name||"").localeCompare(String(n.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function On(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const r=Number(t.joined||0);return Number.isFinite(r)&&r>0?String(r).padStart(16,"0"):""}if(e==="linked"){const r=Vr(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[r]||"9"} ${r} ${Ns(t.account_name||"")}`}return String(t.account_name||"")}function Da(t){const r=new Set(["account_name","rank","joined","linked"]).has(t)?t:"account_name";X!==r?(X=r,N="asc"):N==="asc"?N="desc":N==="desc"?(X="",N=""):(X=r,N="asc"),$=-1,d()}function It(t,e,r=""){const n=X===t&&Boolean(N),s=n?N==="asc"?"ascending":"descending":"none",i=n?N==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${u(r)}" aria-sort="${u(s)}">
      <button
        class="discord-sort-header roster-sort-header${n?" active":""}"
        type="button"
        data-roster-sort-column="${u(t)}"
        title="Sort ${u(e)}${n&&N==="asc"?" descending":n&&N==="desc"?" not sorted":" ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function $a(){return Array.from(new Set(H.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function Ma(t){const e=wn(t),r=gr(e==null?void 0:e.role_color),n=Ln(r),s=_n(r,n);return`
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
  `}function Ta(t){const e=cn.find(r=>r.id===t);return e?e.label:t}function Ms(t,e){const r=t==="roster"?"roster":"discord",n=Ta(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${r}-link-status-filter="${u(e)}"
      title="Remove ${u(n)} link filter"
    >
      <span>${a(n)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Ts(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked"&&String(r.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function Na(t){return Ts(ur(t==null?void 0:t.discord_id))}function Vr(t){return Ts(lr(t==null?void 0:t.account_name))}function Ns(t){const e=lr(t),r=Xs({mode:"eso-to-discord",esoAccountName:t}),n=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked").map(i=>i.discord_server_nickname||i.discord_display_name||i.discord_username||i.discord_user_id||"").filter(Boolean),s=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="candidate").map(i=>i.discord_server_nickname||i.discord_display_name||i.discord_username||i.discord_user_id||"").filter(Boolean);return[r.label,r.title,n.join(" "),s.join(" ")].filter(Boolean).join(" ")}function Cs(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function Ca(){return`
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
            ${Ba()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${Te?`: ${a(Te)}`:""}</div>
            ${xa()}
          </div>
        </div>
      </div>
    </div>
  `}function Ba(){return pe&&q.length===0?'<div class="roster-history-muted">Searching...</div>':q.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${q.map((t,e)=>`
        <button class="roster-history-match${e===V||t.discord_id===je?" is-selected":""}" type="button" data-discord-history-id="${u(t.discord_id)}" data-discord-history-name="${u(Hr(t))}">
          <span>${a(Hr(t))}</span>
          <strong>${a(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===V?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function xa(){return je?pe&&he.length===0?'<div class="roster-history-muted">Loading history...</div>':he.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${he.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${a(mn(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${a(Oa(t.event_type))}</td>
              <td>${a(t.old_value||"")}</td>
              <td>${a(t.new_value||"")}</td>
              <td>${a(t.source||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function Hr(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function Oa(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Ia(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(vt)}" />
        </div>

        ${ee?`<div class="discord-data-error">${a(ee)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${qa()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${be?`: ${a(be)}`:""}</div>
            ${Fa()}
          </div>
        </div>
      </div>
    </div>
  `}function qa(){return fe&&I.length===0?'<div class="roster-history-muted">Searching...</div>':I.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${I.map((t,e)=>`
        <button class="roster-history-match${e===U||t.account_name===be?" is-selected":""}" type="button" data-roster-history-account="${u(t.account_name)}">
          <span>${a(t.account_name)}</span>
          <strong>${a(t.rank||"")}</strong>
          ${e===U?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Fa(){return be?fe&&ue.length===0?'<div class="roster-history-muted">Loading history...</div>':ue.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${ue.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${a(mn(t.timestamp))}</td>
              <td>${a(t.event_type||"")}</td>
              <td>${Aa(t.rank)}</td>
              <td>${a(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function Dt(){return typeof window<"u"&&window.GUILDSYNC_WEB===!0}function Bs(){if(!Dt())return!0;try{return localStorage.getItem(vs)==="1"}catch{return!1}}function Ga(){return!Dt()||Bs()?"":`
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
  `}function Pa(){const t=document.querySelector("#webSavedVarsUploadBannerDismissButton");!t||t.addEventListener("click",()=>{var e,r;try{localStorage.setItem(vs,"1")}catch{}(e=document.querySelector("#webSavedVarsUploadBannerHost"))==null||e.remove(),(r=document.querySelector(".guildsync-tab-content"))==null||r.classList.add("web-upload-banner-dismissed")})}function Ua(){return`
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
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${ie?"disabled":""}>
              ${ie?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${oe?"disabled":""}>
              ${oe?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, last server-specific activity time, days since last activity, and the activity that updated the timestamp.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${ae?"disabled":""}>
              ${ae?"Loading...":"Run"}
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
  `}function xs(){var t,e,r,n;E==="settings"&&((t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>qs()),(e=document.querySelector("#runDiscordRankAuditReportButton"))==null||e.addEventListener("click",()=>Xa()),(r=document.querySelector("#runDiscordLastSeenReportButton"))==null||r.addEventListener("click",()=>rc()),(n=document.querySelector("#runMemberLinksReportButton"))==null||n.addEventListener("click",()=>fc()))}function Wt(){return Dt()&&R()&&(l==null?void 0:l.connected)===!0}function Os(){if(!Dt())return null;let t=document.querySelector("#webSavedVarsFullScreenDropOverlay");return t||(t=document.createElement("div"),t.id="webSavedVarsFullScreenDropOverlay",t.className="web-savedvars-fullscreen-drop-overlay",t.setAttribute("aria-hidden","true"),t.innerHTML=`
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
  `,document.body.appendChild(t),t)}function In(){const t=Os();!t||(t.classList.add("is-visible"),t.setAttribute("aria-hidden","false"))}function $r(){const t=document.querySelector("#webSavedVarsFullScreenDropOverlay");!t||(t.classList.remove("is-visible"),t.setAttribute("aria-hidden","true"))}function lt(t){var r;return Array.from(((r=t==null?void 0:t.dataTransfer)==null?void 0:r.types)||[]).includes("Files")}function Va(t){!(t!=null&&t.dataTransfer)||(t.dataTransfer.dropEffect=Wt()?"copy":"none")}function Is(t){const e=String(t||"").split(/[\\/]/).pop();return ea.get(e)||""}function Ha(){if(!Dt())return;Os();const t=e=>{!lt(e)||(e.preventDefault(),e.stopPropagation(),Va(e))};document.addEventListener("dragenter",e=>{!lt(e)||(t(e),qe+=1,Wt()&&In())},!0),document.addEventListener("dragover",e=>{t(e),lt(e)&&Wt()&&In()},!0),document.addEventListener("dragleave",e=>{!lt(e)||(e.preventDefault(),e.stopPropagation(),qe=Math.max(0,qe-1),qe===0&&$r())},!0),document.addEventListener("drop",async e=>{var n;if(!lt(e))return;if(t(e),qe=0,$r(),!Wt()){h("web-savedvars-drop-not-ready","SavedVariables drag/drop is only available while logged in and connected to the GuildSync server.",{ttlMs:p});return}const r=Array.from(((n=e.dataTransfer)==null?void 0:n.files)||[]);await Wa(r)},!0),window.addEventListener("blur",()=>{qe=0,$r()})}async function Wa(t=[]){if(Rr){h("web-savedvars-drop-busy","A SavedVariables upload is already processing. Please wait for it to finish.",{ttlMs:p});return}const e=Array.from(t||[]).filter(Boolean);if(!e.length){h("web-savedvars-drop-empty","No file was dropped.",{ttlMs:p});return}const r=e.find(n=>!Is(n.name));if(r){h("web-savedvars-drop-invalid",`Unsupported file: ${r.name}. Drop only GuildSyncBanking.lua, GuildSyncRoster.lua, or GuildSyncApplications.lua.`,{ttlMs:p});return}Rr=!0;try{for(const n of e)await za(n)}finally{Rr=!1}}async function za(t){const e=Is(t.name);if(!e)throw new Error(`Unsupported file: ${t.name}`);const r=`web-savedvars-upload-${e}`,n=await t.text();if(!String(n||"").trim())throw new Error(`${t.name} is empty.`);h(r,`Uploading ${t.name}...`);try{const s=await A("guildsync:upload-savedvars-raw",{file_name:t.name,raw_lua_text:n,source:"web-drag-drop"},12e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||`${t.name} upload was rejected.`);e==="banking"?await Tt({silent:!0}):e==="roster"&&(await it({silent:!0}),await Mt({silent:!0})),h(r,s.message||`${t.name} uploaded and processed.`,{ttlMs:p})}catch(s){throw h(r,w(s),{ttlMs:p}),s}yr("version")}function qs(){Ze=!0,Le="",d(),li()}function Wr(){Ze=!1,Le="",d()}function ja(){const t=Ya(),e=Ka(),r=et.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${ie?"disabled":""}>${ie?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(r))} total row${r===1?"":"s"}</span>
        </div>

        ${Le?`<div class="discord-data-error">${a(Le)}</div>`:""}

        <div class="report-results-content">
          ${ie&&r===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!ie&&r===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${r>0?qn("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${r>0?qn("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${a(Gs())}</textarea>
      </div>
    </div>
  `}function Ya(){return et.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function Ka(){return et.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function qn(t,e,r,n){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${a(t)}</h4>
          <p>${a(e)}</p>
        </div>
        <span>${a(String(r.length))} row${r.length===1?"":"s"}</span>
      </div>
      ${r.length>0?Ja(r):`<div class="roster-history-muted report-section-empty">${a(n)}</div>`}
    </section>
  `}function Ja(t=et){return`
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
              <td>${dn(e.rank||"")}</td>
              <td>${a(fr(e.joined))}</td>
              <td>${a(mr(e.purchased_tickets||0))}</td>
              <td>${a(Fs(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Fs(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function Gs(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Discord Link"]];for(const e of et){const r=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([r,e.account_name||"",e.rank||"",fr(e.joined),mr(e.purchased_tickets||0),Fs(e)])}return t.map(e=>e.map(hr).join("	")).join(`
`)}async function Qa(){const t=Gs();if(await pr(t)){h("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#associateTicketReportTsv");r&&(r.focus(),r.select()),h("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function Xa(){tt=!0,Ae="",d(),di()}function zr(){tt=!1,Ae="",d()}function Za(){const t=kt.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${oe?"disabled":""}>${oe?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${Ae?`<div class="discord-data-error">${a(Ae)}</div>`:""}

        <div class="report-results-content">
          ${oe&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!oe&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?ec(kt):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${a(Vs())}</textarea>
      </div>
    </div>
  `}function ec(t=kt){return`
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
              <td>${a(Ps(e))}</td>
              <td>${a(e.discord_rank||"No matching rank role")}</td>
              <td>${a(e.eso_accounts||"No linked ESO account")}</td>
              <td>${a(e.eso_rank||"None")}</td>
              <td>${a(Us(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Ps(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function Us(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function Vs(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of kt)t.push([Ps(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",Us(e)]);return t.map(e=>e.map(hr).join("	")).join(`
`)}async function tc(){const t=Vs();if(await pr(t)){h("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#discordRankAuditReportTsv");r&&(r.focus(),r.select()),h("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function rc(){Ne=!0,Ee="",rt="",d(),ci(),L.length===0&&!x&&Mt({silent:!0})}function rr(){Ne=!1,Ee="",rt="",ce="",Ue="",de="",d()}function nc(){const t=ln(),e=on.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${ae?"disabled":""}>${ae?"Loading...":"Run Again"}</button>
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
            value="${u(rt)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${ce===""?"selected":""}>All link statuses</option>
            <option value="linked" ${ce==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${ce==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${ce==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${Ee?`<div class="discord-data-error discord-last-seen-report-error">${a(Ee)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${ae&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!ae&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?sc(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${a(Ws(t))}</textarea>
      </div>
    </div>
  `}function sc(t=[]){return`
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
          ${t.map(e=>`
            <tr class="discord-last-seen-row ${u(lc(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${u(Be(e).status)}" data-discord-last-seen-search="${u(Hs(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${dc(e)}
                  <span>${a(Ke(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${oc(e)}</td>
              <td>${a(un(e.last_seen))}</td>
              <td>${a(fn(e.last_seen))}</td>
              <td>${a(nr(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function ut(t,e){const r=Ue===t,n=r?de==="asc"?"\u25B2":"\u25BC":"\u2195",s=r?`${e}: ${de==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${r?" active":""}" type="button" data-discord-last-seen-sort="${u(t)}" title="${u(s)}">
      <span>${a(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${a(n)}</span>
    </button>
  `}function ln(){const t=[...on],e=Ue,r=de;if(!e||!r)return t;const n=r==="desc"?-1:1;return t.sort((s,i)=>{var o,c;if(e==="date"){const f=Number(s.last_seen||0)||0,b=Number(i.last_seen||0)||0;return(f-b)*n}if(e==="days")return(Fn(s.last_seen)-Fn(i.last_seen))*n;if(e==="action")return nr(s.last_seen_action).localeCompare(nr(i.last_seen_action),void 0,{sensitivity:"base"})*n;if(e==="eso"){const f=Be(s),b=Be(i),v={linked:0,candidate:1,unlinked:2},m=((o=v[f.status])!=null?o:9)-((c=v[b.status])!=null?c:9);return m!==0?m*n:f.esoAccountName.localeCompare(b.esoAccountName,void 0,{sensitivity:"base"})*n}return Ke(s).localeCompare(Ke(i),void 0,{sensitivity:"base"})*n})}function ic(t){Ue!==t?(Ue=t,de="asc"):de==="asc"?de="desc":(Ue="",de=""),d()}function Ke(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function Hs(t){return[Ke(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,ac(t),un(t==null?void 0:t.last_seen),fn(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function Be(t){const e=Rc(t==null?void 0:t.discord_id),r=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),n=String((e==null?void 0:e.eso_account_name)||"").trim();return r==="linked"&&n?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:n,title:`Linked ESO account: ${n}`}:(r==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&n?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:n,title:`Fuzzy ESO account candidate: ${n}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function oc(t){const e=Be(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${u(e.className)}"
      title="${u(e.title)}"
      aria-label="${u(e.label)}"
      role="img"
    ></span>
  `}function ac(t){const e=Be(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function cc(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!r)return"";if(/^https?:\/\//i.test(e))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function dc(t){const e=Ke(t),r=e?e.slice(0,2).toUpperCase():"?",n=cc(t);return n?`<span class="discord-member-avatar"><img src="${u(n)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${a(r)}</span>`}function un(t){const e=Number(t);if(!e)return"Never";const r=new Date(e*1e3);if(Number.isNaN(r.getTime()))return String(t||"");const n=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(r).reduce((s,i)=>(s[i.type]=i.value,s),{});return`${n.month}/${n.day}/${n.year} ${n.hour}:${n.minute} ${n.dayPeriod}`}function lc(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const r=(Date.now()-e*1e3)/864e5;return r>30?"discord-last-seen-red":r>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function fn(t){const e=Number(t);if(!e)return"Never";const r=Date.now()-e*1e3;if(!Number.isFinite(r))return"";if(r<0)return"0 days";const n=Math.floor(r/864e5);return`${n} day${n===1?"":"s"}`}function Fn(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const r=Date.now()-e*1e3;return Number.isFinite(r)?r<0?0:Math.floor(r/864e5):Number.POSITIVE_INFINITY}function nr(t){return String(t||"").trim()||"None tracked"}function Ws(t=ln()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const r of t){const n=Be(r);e.push([Ke(r),n.label||"",n.esoAccountName||"",un(r==null?void 0:r.last_seen),fn(r==null?void 0:r.last_seen),nr(r==null?void 0:r.last_seen_action),(r==null?void 0:r.username)||"",(r==null?void 0:r.discord_id)||""])}return e.map(r=>r.map(hr).join("	")).join(`
`)}async function uc(){const t=ln().filter(s=>{const i=K(rt),o=String(ce||"").trim().toLowerCase(),c=!i||K(Hs(s)).includes(i),f=!o||Be(s).status===o;return c&&f}),e=Ws(t);if(await pr(e)){h("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#discordLastSeenReportTsv");n&&(n.focus(),n.select()),h("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function fc(){Ie=!0,G="",d(),L.length===0&&!x&&Mt({silent:!0})}function jr(){Ie=!1,dr="",Ve="",Lt="",At="",Z=-1,d()}function zs(t){return[...new Set((Array.isArray(L)?L:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function js(t,e){return t.map(r=>`<option value="${u(r)}" ${e===r?"selected":""}>${a(r)}</option>`).join("")}function hc(){return js(zs("link_status"),Lt)}function pc(){return js(zs("link_method"),At)}function mc(){return`
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
            value="${u(dr)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${Lt===""?"selected":""}>All statuses</option>
            ${hc()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${At===""?"selected":""}>All methods</option>
            ${pc()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${Ve===""?"selected":""}>All actions</option>
            <option value="needs-link" ${Ve==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${Ve==="can-unlink"?"selected":""}>Unlink Available</option>
          </select>
        </div>

        ${G?`<div class="discord-data-error member-links-report-error">${a(G)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${vc()}
        </div>
      </div>
    </div>
  `}function Ys(){var r,n,s,i,o,c;if(!Ie)return;(r=document.querySelector("#closeMemberLinksReportButton"))==null||r.addEventListener("click",jr),(n=document.querySelector("#refreshMemberLinksButton"))==null||n.addEventListener("click",()=>Mt()),(s=document.querySelector("#runMemberAutoLinkButton"))==null||s.addEventListener("click",()=>Ac());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",kc),t.addEventListener("keydown",Lc)),(i=document.querySelector("#memberLinksReportActionFilter"))==null||i.addEventListener("change",Sc),(o=document.querySelector("#memberLinksReportStatusFilter"))==null||o.addEventListener("change",wc),(c=document.querySelector("#memberLinksReportMethodFilter"))==null||c.addEventListener("change",_c),$t(),document.querySelectorAll("[data-accept-member-candidate]").forEach(f=>{f.addEventListener("click",()=>Js(f.dataset.acceptMemberCandidate||"",f.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(f=>{f.addEventListener("click",()=>Ec(f.dataset.unlinkMemberLink||"",f.dataset.unlinkMemberLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",f=>{f.target===e&&jr()})}function Gn(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function Pn(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function gc(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function yc(t){return[...Array.isArray(t)?t:[]].sort((e,r)=>{const n=Gn(e)-Gn(r);if(n!==0)return n;const s=Pn(e).localeCompare(Pn(r),void 0,{sensitivity:"base"});return s!==0?s:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((r==null?void 0:r.discord_user_id)||""),void 0,{sensitivity:"base"})})}function bc(t){const e=Yr(t);let r="";e==="Username"?r=(t==null?void 0:t.discord_username)||"":e==="Global Name"?r=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(r=(t==null?void 0:t.discord_server_nickname)||""),r||(r=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const n=e?` <span class="member-link-report-match-field">(${a(e)})</span>`:"";return`<span class="member-link-report-discord-name">${a(r)}</span>${n}`}function vc(){return x&&L.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(L)||L.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${yc(L).map(e=>{var i;const r=String(e.link_status||"").trim().toLowerCase(),n=String(e.link_method||"").trim().toLowerCase(),s=bc(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${u(gc(e))}"
                data-member-links-report-status="${u(r)}"
                data-member-links-report-method="${u(n)}"
                data-member-links-report-action="${u(r==="linked"?"can-unlink":r==="candidate"?"needs-link":"")}"
              >
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
  `}function Ks(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function Un(t){const e=Ks();if(e.forEach(n=>n.classList.remove("member-links-report-row-active")),e.length===0){Z=-1;return}Z=Math.max(0,Math.min(t,e.length-1));const r=e[Z];r.classList.add("member-links-report-row-active"),r.scrollIntoView({block:"nearest"})}function $t(){const t=K(dr),e=String(Ve||"").trim().toLowerCase(),r=String(Lt||"").trim().toLowerCase(),n=String(At||"").trim().toLowerCase(),s=[...document.querySelectorAll("[data-member-links-report-row]")];let i=0;s.forEach(c=>{const f=K(c.dataset.memberLinksReportSearch||""),b=String(c.dataset.memberLinksReportAction||"").trim().toLowerCase(),v=String(c.dataset.memberLinksReportStatus||"").trim().toLowerCase(),m=String(c.dataset.memberLinksReportMethod||"").trim().toLowerCase(),An=(!t||f.includes(t))&&(!e||b===e)&&(!r||v===r)&&(!n||m===n);c.hidden=!An,c.classList.remove("member-links-report-row-active"),An&&(i+=1)});const o=document.querySelector("#memberLinksReportSearchEmpty");o&&(o.hidden=i!==0),Z=-1}function kc(t){dr=t.target.value||"",$t()}function Sc(t){Ve=t.target.value||"",$t()}function wc(t){Lt=t.target.value||"",$t()}function _c(t){At=t.target.value||"",$t()}function Lc(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Ks();if(e.length===0)return;if(t.key==="ArrowDown"){const n=Z<0?0:Z+1;Un(n>=e.length?e.length-1:n);return}const r=Z<0?e.length-1:Z-1;Un(r<0?0:r)}async function Mt(t={}){if(!(l!=null&&l.connected)){G="You must be connected to load member links.",d();return}x=!0,G="",t.silent||d();try{const e=await A("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");L=Array.isArray(e.links)?e.links:[]}catch(e){G=w(e)}finally{x=!1,d()}}async function Ac(){if(!(l!=null&&l.connected)||!y.logged_in){G="You must be logged in and connected to run auto-linking.",d();return}x=!0,G="",d();try{const t=await A("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");L=Array.isArray(t.links)?t.links:[],h("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:p})}catch(t){G=w(t)}finally{x=!1,d()}}async function Js(t,e=""){try{const r=await A("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to accept candidate.");L=Array.isArray(r.links)?r.links:L,h("member-link-accepted",r.message||"Candidate accepted as a link.",{ttlMs:p})}catch(r){G=w(r),h("member-link-accept-error",G,{ttlMs:p})}}async function Ec(t,e=""){if(!!await Ds({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const n=await A("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to unlink member.");L=Array.isArray(n.links)?n.links:L,h("member-link-unlinked",n.message||"Member link removed.",{ttlMs:p})}catch(n){G=w(n)}d()}}function xe(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function lr(t){const e=xe(t);return e?L.filter(r=>xe(r.eso_account_name)===e):[]}function ur(t){const e=String(t||"").trim();return e?L.filter(r=>String(r.discord_user_id||"").trim()===e):[]}function Qs(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const r=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked");if(r.length>0){const s=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(s)return s;const i=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return i||r[0]}const n=e.find(s=>String(s.link_status||"").trim().toLowerCase()==="candidate");return n||e[0]}function Rc(t){return Qs(ur(t))}function Dc(t){return`${xe(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function hn(){return k?k.mode==="discord-to-eso"?ur(k.discordUserId):lr(k.esoAccountName):[]}function $c(t){const e=String(t||"").trim(),r=B.find(n=>String(n.discord_id||"").trim()===e);return r&&(r.server_nickname||r.global_name||r.username||r.discord_id)||e}function Xs(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?ur(t.discordUserId):lr(t.esoAccountName),n=Qs(r),s=String((n==null?void 0:n.link_status)||"").trim().toLowerCase(),i=r.filter(c=>String(c.link_status||"").trim().toLowerCase()==="linked").length,o=r.filter(c=>String(c.link_status||"").trim().toLowerCase()==="candidate").length;return i>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?i===1?n.eso_account_name:`${i} ESO accounts`:i===1?n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member":`${i} Discord accounts`}`}:s==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?n.eso_account_name:n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member"}`}:s==="blocked"||Number((n==null?void 0:n.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function Zs(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,n=Xs(t);return`
    <button
      class="member-link-status-dot member-link-status-${u(n.className)}"
      type="button"
      title="${u(n.title)}"
      aria-label="${u(n.label)}"
      data-open-member-link-dialog="${u(e)}"
      data-member-link-value="${u(r||"")}"
    ></button>
  `}function Mc(){return k?k.mode==="discord-to-eso"?$c(k.discordUserId):k.esoAccountName||"":""}function ei(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function Yr(t){const e=ei((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const r=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(r.includes("discord_username")||r.includes("username"))return"Username";if(r.includes("discord_display_name")||r.includes("global")||r.includes("display"))return"Global Name";if(r.includes("discord_server_nickname")||r.includes("server")||r.includes("nickname"))return"Server Nickname";const n=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(n==="exact"||n==="fuzzy"){const s=(t==null?void 0:t.eso_account_name)||"",i=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const c of i){const f=Tc(s,c.value);(!o||f>o.score)&&(o={...c,score:f})}if(o&&o.score>0)return o.field}return""}function K(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function Tc(t,e){const r=K(t),n=K(e);if(!r||!n)return 0;if(r===n)return 100;if((r.includes(n)||n.includes(r))&&Math.min(r.length,n.length)>=4)return 88;const s=Math.abs(r.length-n.length),i=[...r].findIndex((c,f)=>c!==n[f]),o=i===-1?Math.min(r.length,n.length):i;return Math.max(0,Math.min(75,Math.round(o*10-s*3)))}function Nc(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function Cc(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function Bc(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),r=Nc(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${a(r)}</span>`}function xc(t){var c;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",r=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",n=String(t.link_status||"").trim().toLowerCase(),o=n==="linked"?`<button
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
        <div><span>Status:</span> ${Bc(t)} \xB7 ${a(Cc(t.link_method))} \xB7 ${a(String((c=t.match_confidence)!=null?c:""))}% \xB7 ${a(r)}</div>
        ${Yr(t)?`<div><span>Matched:</span> Matched on ${a(Yr(t))}</div>`:""}
      </div>
      ${o}
    </div>
  `}function Oc(){const t=hn();return t.length?[...t].sort((r,n)=>{var f,b;const s=String(r.link_status||"").trim().toLowerCase(),i=String(n.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},c=((f=o[s])!=null?f:9)-((b=o[i])!=null?b:9);return c!==0?c:Number(n.match_confidence||0)-Number(r.match_confidence||0)}).map(r=>xc(r)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function Ic(){if(Ye)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(ne)return`<div class="discord-data-error">${a(ne)}</div>`;if(!Array.isArray(Re)||Re.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(hn().map(r=>Dc(r))),e=[...Re].filter(r=>{const n=(k==null?void 0:k.mode)==="discord-to-eso"?`${xe(r.account_name)}::${String(k.discordUserId||"").trim()}`:`${xe(k==null?void 0:k.esoAccountName)}::${String(r.discord_id||"").trim()}`;return!t.has(n)}).sort((r,n)=>{const s=Number(n.confidence||0)-Number(r.confidence||0);return s!==0?s:Vn(r).localeCompare(Vn(n),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(r=>qc(r)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function Vn(t){return((k==null?void 0:k.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function qc(t,e={}){var m,S,C;const r=(k==null?void 0:k.mode)||"",n=r==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",s=ei(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),i=r==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[i,s?`Matched on ${s}`:""].filter(Boolean).join(" \u2022 "),c=r==="discord-to-eso"?t.account_name:t.discord_id,f=e.disabled===!0,b=[n,i,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),v=[n,o,`${(m=t.confidence)!=null?m:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${u(c||"")}" data-member-link-option-search="${u(b)}" title="${u(v)}" ${f?"disabled":""}>
      <span class="member-link-option-name" title="${u(n||"")}">${a(n||"")}</span>
      <span class="member-link-option-subtitle" title="${u(o||"")}">${a(o||"")}</span>
      <span class="member-link-option-confidence" title="${u(String((S=t.confidence)!=null?S:0))}%">${a(String((C=t.confidence)!=null?C:0))}%</span>
    </button>
  `}function Fc(){const t=(k==null?void 0:k.mode)||"",e=Mc(),r=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
            ${Oc()}
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
              value="${u(Et)}"
            />
            ${Ic()}
          </section>
        </div>

      </div>
    </div>
  `}async function ti(t,e){if(!(l!=null&&l.connected)||!R()){h("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:p});return}ve=!0,k=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},Re=[],Ye=!0,ne="",Et="",W=-1,d();try{if(!Array.isArray(L)||L.length===0){const s=await A("guildsync:request-member-links",{},3e4);s!=null&&s.ok&&(L=Array.isArray(s.links)?s.links:[])}const n=await A("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load link suggestions.");Re=Array.isArray(n.options)?n.options:[]}catch(r){ne=w(r)}finally{Ye=!1,d()}}function Je(){document.removeEventListener("keydown",Kr),ve=!1,k=null,Re=[],Ye=!1,ne="",Et="",W=-1,d()}function ri(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function Hn(t){const e=ri();if(e.forEach(n=>n.classList.remove("member-link-option-row-active")),e.length===0){W=-1;return}W=Math.max(0,Math.min(t,e.length-1));const r=e[W];r.classList.add("member-link-option-row-active"),r.scrollIntoView({block:"nearest"})}function ni(){const t=K(Et),e=[...document.querySelectorAll(".member-link-option-row")];let r=0;e.forEach(s=>{const i=K(s.dataset.memberLinkOptionSearch||s.textContent||""),o=!t||i.includes(t);s.hidden=!o,s.classList.remove("member-link-option-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinkSuggestionSearchEmpty");n&&(n.hidden=r!==0),W=-1}function Gc(t){Et=t.target.value||"",ni()}function Pc(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=ri();if(e.length===0)return;if(t.key==="ArrowDown"){const n=W<0?0:W+1;Hn(n>=e.length?e.length-1:n);return}const r=W<0?e.length-1:W-1;Hn(r<0?0:r)}function Kr(t){!ve||t.key==="Escape"&&(t.preventDefault(),Je())}async function Uc(t){if(!(!k||!t))try{const e=k.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:k.discordUserId}:{esoAccountName:k.esoAccountName,discordUserId:t},r=await A("guildsync:manual-link-member",e,3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to link members.");L=Array.isArray(r.links)?r.links:L,h("member-link-saved",r.message||"Member link saved.",{ttlMs:p}),Je()}catch(e){ne=w(e),d()}}async function Vc(t,e=""){await Js(t,e),Je()}async function Hc(){if(!!k){Ye=!0,ne="",d();try{const t=k.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:k.discordUserId}:{mode:"eso-to-discord",accountName:k.esoAccountName},e=await A("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");Re=Array.isArray(e.options)?e.options:[]}catch(t){ne=w(t)}finally{Ye=!1,d()}}}async function Wc(t="",e=""){const r=hn().find(s=>xe(s.eso_account_name)===xe(t)&&String(s.discord_user_id||"").trim()===String(e||"").trim());if(!(!r||!await Ds({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const s=await A("guildsync:manual-unlink-member",{esoAccountName:r.eso_account_name,discordUserId:r.discord_user_id},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to unlink member.");L=Array.isArray(s.links)?s.links:L,h("member-link-unlinked",s.message||"Member link removed.",{ttlMs:p}),await Hc()}catch(s){ne=w(s),d()}}function si(){var r;if(!ve)return;document.removeEventListener("keydown",Kr),document.addEventListener("keydown",Kr),(r=document.querySelector("#closeMemberLinkDialogButton"))==null||r.addEventListener("click",Je);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",Gc),t.addEventListener("keydown",Pc),ni()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(n=>{n.addEventListener("click",()=>Wc(n.dataset.unlinkEsoAccount||"",n.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(n=>{n.addEventListener("click",()=>Uc(n.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(n=>{n.addEventListener("click",()=>Vc(n.dataset.acceptDialogMemberCandidate||"",n.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",n=>{n.target===e&&Je()})}function ii(){var e,r,n;if(!Ze)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",Wr),(r=document.querySelector("#rerunAssociateTicketReportButton"))==null||r.addEventListener("click",()=>li()),(n=document.querySelector("#copyAssociateTicketReportGridButton"))==null||n.addEventListener("click",()=>Qa());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",s=>{s.target===t&&Wr()})}function oi(){var e,r,n;if(!tt)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",zr),(r=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||r.addEventListener("click",()=>di()),(n=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||n.addEventListener("click",()=>tc());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",s=>{s.target===t&&zr()})}function ai(){var n,s,i;if(!Ne)return;(n=document.querySelector("#closeDiscordLastSeenReportButton"))==null||n.addEventListener("click",rr),(s=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||s.addEventListener("click",()=>ci()),(i=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||i.addEventListener("click",()=>uc()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(o=>{o.addEventListener("click",()=>ic(o.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",zc);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",jc),pn();const r=document.querySelector(".discord-last-seen-report-overlay");r&&r.addEventListener("click",o=>{o.target===r&&rr()})}function zc(t){rt=t.target.value||"",pn()}function jc(t){ce=t.target.value||"",pn()}function pn(){const t=K(rt),e=String(ce||"").trim().toLowerCase(),r=[...document.querySelectorAll("[data-discord-last-seen-row]")];let n=0;r.forEach(i=>{const o=K(i.dataset.discordLastSeenSearch||i.textContent||""),c=String(i.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),v=(!t||o.includes(t))&&(!e||c===e);i.hidden=!v,v&&(n+=1)});const s=document.querySelector("#discordLastSeenReportSearchEmpty");s&&(s.hidden=n!==0)}async function ci(){if(!(l!=null&&l.connected)||!R()){Ee="You must be logged in and connected to run this report.",d();return}ae=!0,Ee="",d();try{const t=await A("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");B=Sn(t.members),on=[...B]}catch(t){Ee=w(t)}finally{ae=!1,d(),T("discordLastSeenReportSearchInput")}}async function di(){if(!(l!=null&&l.connected)||!R()){Ae="You must be logged in and connected to run this report.",d();return}oe=!0,Ae="",d();try{const t=await A("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");kt=Array.isArray(t.rows)?t.rows:[]}catch(t){Ae=w(t)}finally{oe=!1,d()}}async function li(){if(!(l!=null&&l.connected)||!R()){Le="You must be logged in and connected to run this report.",d();return}ie=!0,Le="",d();try{const t=await A("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");et=Array.isArray(t.rows)?t.rows:[]}catch(t){Le=w(t)}finally{ie=!1,d()}}function Jr(){const t=String(st||"").trim().toLowerCase();return t?H.filter(e=>String(e.account_name||"").trim()).filter(e=>String(e.account_name||"").toLowerCase().includes(t)).slice().sort((e,r)=>{const n=String(e.account_name||"").toLowerCase(),s=String(r.account_name||"").toLowerCase(),i=n.startsWith(t)?0:1,o=s.startsWith(t)?0:1;return i!==o?i-o:n.localeCompare(s)}).slice(0,20):[]}function Wn(t){const e=String(t||"").trim();_.accountName=e,st=e,Q="",d(),T("manualTicketAccountSearchInput")}function T(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const r=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(r,r)},0)}function Yc(){const t=Jr(),e=String(_.accountName||"").trim();return`
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
            <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(st)}" autocomplete="off" />
          </label>

          ${e?`<div class="roster-history-muted">Selected: ${a(e)}</div>`:""}

          <div class="roster-history-match-list manual-ticket-match-list">
            ${t.length===0?'<div class="roster-history-muted">No matching names</div>':t.map((r,n)=>`
                <button class="roster-history-match${n===J||r.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${u(r.account_name)}">
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
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${Zt?"disabled":""}>${Zt?"Saving...":"Add Manual Tickets"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function ui(){var i,o,c,f,b,v;if(!re)return;(i=document.querySelector("#closeManualBiweeklyTicketButton"))==null||i.addEventListener("click",()=>{re=!1,d()});const t=document.querySelector("#manualTicketAccountSearchInput");t&&(t.addEventListener("input",m=>{st=m.target.value||"",_.accountName="",J=Jr().length>0?0:-1,d(),T("manualTicketAccountSearchInput")}),t.addEventListener("keydown",m=>{const S=Jr();if(m.key==="ArrowDown"||m.key==="ArrowUp"){if(S.length===0)return;m.preventDefault();const ot=m.key==="ArrowDown"?1:-1;J=((J<0?0:J)+ot+S.length)%S.length,d(),T("manualTicketAccountSearchInput");return}if(m.key!=="Enter")return;m.preventDefault();const C=S[J>=0?J:0];C!=null&&C.account_name&&Wn(C.account_name)})),document.querySelectorAll("[data-manual-ticket-account]").forEach(m=>{m.addEventListener("click",()=>{Wn(m.dataset.manualTicketAccount||"")})}),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",m=>{_.note=m.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(m=>{m.addEventListener("click",()=>{const S=String(m.dataset.manualTicketType||"").trim().toLowerCase();_.ticketType=S==="monthly"?"monthly":"biweekly",d()})}),(c=document.querySelector("[data-manual-ticket-toggle]"))==null||c.addEventListener("click",()=>{_.ticketType=_.ticketType==="monthly"?"biweekly":"monthly",d()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",m=>{const S=String(m.target.value||"").replace(/\D/g,"");m.target.value!==S&&(m.target.value=S),_.goldValue=S});const r=document.querySelector("#manualTicketCountInput");r==null||r.addEventListener("input",m=>{const S=String(m.target.value||"").replace(/\D/g,"");m.target.value!==S&&(m.target.value=S),_.tickets=S});const n=m=>{const S=Number(_.tickets)||0,C=Math.max(1,S+m);_.tickets=String(C),r&&(r.value=_.tickets,r.focus())};(f=document.querySelector("#manualTicketCountUpButton"))==null||f.addEventListener("click",()=>n(1)),(b=document.querySelector("#manualTicketCountDownButton"))==null||b.addEventListener("click",()=>n(-1)),(v=document.querySelector("#saveManualBiweeklyTicketButton"))==null||v.addEventListener("click",()=>Kc());const s=document.querySelector(".roster-history-overlay");s&&s.addEventListener("click",m=>{m.target===s&&(re=!1,d())})}async function Kc(){const t=String(_.accountName||"").trim(),e=String(_.note||"").trim(),r=String(_.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",n=Number(String(_.goldValue||"").trim()||0),s=Number(_.tickets);if(!t){Q="Choose a guild member.",d();return}if(!Number.isFinite(n)||n<0){Q="Gold value must be zero or greater.",d();return}if(!Number.isFinite(s)||s<=0){Q="Enter the number of tickets to add.",d();return}Zt=!0,Q="",d();try{const i=await A("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:r,gold_value:Math.floor(n),tickets:Math.floor(s)},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to add manual ticket entry.");re=!1,_={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},st="",J=-1,await Tt({silent:!0}),h("manual-ticket-added",i.message||"Manual ticket entry added.",{ttlMs:p})}catch(i){Q=w(i)}finally{Zt=!1,d()}}function fi(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>it());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{We=!0,ee="",d()});const r=document.querySelector("#rosterMemberSearch");r&&(r.addEventListener("input",o=>{Xt=o.target.value||"",Gr=o.target.selectionStart,Pr=o.target.selectionEnd,$=-1,d({restoreRosterSearchFocus:!0})}),r.addEventListener("keydown",Jc)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Da(o.dataset.rosterSortColumn||"account_name")})});const n=document.querySelector("#rosterRankFilter");n&&n.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(_e.add(c),$=-1,d())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRosterRankFilter||"";_e.delete(c),$=-1,d()})});const s=document.querySelector("#rosterLinkStatusFilter");s&&s.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(Pe.add(c),$=-1,d())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRosterLinkStatusFilter||"";Pe.delete(c),$=-1,d()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>ti(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const i=document.querySelector("#clearRosterFiltersButton");i&&i.addEventListener("click",()=>{Xt="",_e.clear(),Pe.clear(),X="",N="",$=-1,d()}),Qc()}function Jc(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){$=-1;return}t.preventDefault(),t.key==="ArrowDown"?$=$<0?0:Math.min($+1,e.length-1):t.key==="ArrowUp"&&($=$<0?e.length-1:Math.max($-1,0)),e.forEach((n,s)=>{n.classList.toggle("roster-search-active-row",s===$)});const r=e[$];r&&typeof r.scrollIntoView=="function"&&r.scrollIntoView({block:"nearest",inline:"nearest"})}function Qc(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{We=!1,d()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",r=>{if(vt=r.target.value||"",U=-1,!vt.trim()){clearTimeout(Dr),ee="",I=[],be="",ue=[],fe=!1,d(),T("rosterHistorySearchInput");return}clearTimeout(Dr),Dr=setTimeout(()=>{td({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(I.length===0)return;r.preventDefault();const s=r.key==="ArrowDown"?1:-1;U=((U<0?0:U)+s+I.length)%I.length,d(),T("rosterHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=I[U>=0?U:0];n!=null&&n.account_name&&jn(n.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(r=>{r.addEventListener("click",()=>{jn(r.dataset.rosterHistoryAccount||"")})})}function hi(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{ze=!1,d()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",r=>{se=r.target.value||"",V=-1,ke+=1;const n=ke;if(clearTimeout(Bn),!se.trim()){te="",q=[],je="",Te="",he=[],pe=!1,d(),T("discordHistorySearchInput");return}Bn=setTimeout(()=>{Xc({auto:!0,keepFocus:!0,generation:n})},na)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(q.length===0)return;r.preventDefault();const s=r.key==="ArrowDown"?1:-1;V=((V<0?0:V)+s+q.length)%q.length,d(),T("discordHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=q[V>=0?V:0];n!=null&&n.discord_id&&zn(n.discord_id,Hr(n))})),document.querySelectorAll("[data-discord-history-id]").forEach(r=>{r.addEventListener("click",()=>{zn(r.dataset.discordHistoryId||"",r.dataset.discordHistoryName||"")})})}async function Xc(t={}){const e=Number.isInteger(t.generation)?t.generation:++ke,r=se.trim();if(e===ke){if(!r){te="",q=[],V=-1,je="",Te="",he=[],pe=!1,d(),t.keepFocus&&T("discordHistorySearchInput");return}pe=!0,te="",q=[],V=-1,je="",Te="",he=[],d(),t.keepFocus&&T("discordHistorySearchInput");try{const n=await A("guildsync:request-discord-member-history",{query:r},3e4);if(e!==ke||r!==se.trim())return;if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search Discord member history.");q=Zc(n.matches),V=q.length>0?0:-1}catch(n){if(e!==ke||r!==se.trim())return;te=w(n)}finally{if(e!==ke||r!==se.trim())return;pe=!1,d(),t.keepFocus&&T("discordHistorySearchInput")}}}async function zn(t,e="",r={}){const n=String(t||"").trim();if(!!n){je=n,Te=String(e||n).trim(),se=Te,he=[],pe=!0,te="",d();try{const s=await A("guildsync:request-discord-member-history-events",{discord_id:n},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to load Discord member history.");he=ed(s.events)}catch(s){te=w(s)}finally{pe=!1,r.keepLoading||d()}}}function Zc(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function ed(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n,s,i,o,c,f,b,v;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((n=(r=e.old_value)!=null?r:e.oldValue)!=null?n:"").trim(),new_value:String((i=(s=e.new_value)!=null?s:e.newValue)!=null?i:"").trim(),event_timestamp:(f=(c=(o=e.event_timestamp)!=null?o:e.eventTimestamp)!=null?c:e.timestamp)!=null?f:"",event_datetime:(v=(b=e.event_datetime)!=null?b:e.eventDatetime)!=null?v:"",source:String(e.source||"").trim()}}):[]}async function td(t={}){const e=vt.trim();if(!e){ee="",I=[],U=-1,be="",ue=[],fe=!1,d(),t.keepFocus&&T("rosterHistorySearchInput");return}fe=!0,ee="",I=[],U=-1,be="",ue=[],d(),t.keepFocus&&T("rosterHistorySearchInput");try{const r=await A("guildsync:request-roster-rank-history",{query:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search roster rank history.");I=rd(r.matches),U=I.length>0?0:-1}catch(r){ee=w(r)}finally{fe=!1,d(),t.keepFocus&&T("rosterHistorySearchInput")}}async function jn(t,e={}){const r=String(t||"").trim();if(!!r){be=r,vt=r,ue=[],fe=!0,ee="",d();try{const n=await A("guildsync:request-roster-stream-history",{account_name:r},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster stream history.");ue=nd(n.events)}catch(n){ee=w(n)}finally{fe=!1,e.keepLoading||d()}}}function rd(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function nd(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(n=(r=e.timestamp)!=null?r:e.timestampS)!=null?n:"",officer:String(e.officer||"").trim()}}):[]}function pi(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(r=e.joined)!=null?r:""}}).sort((e,r)=>e.account_name.localeCompare(r.account_name)):[]}function sd(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function fr(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function mn(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function id(t={}){H=pi(t.members),Qt=t.last_refresh||new Date().toISOString(),E==="eso-members"&&d(),h("roster-data-updated",`Roster data updated. Loaded ${H.length} member record${H.length===1?"":"s"}.`,{ttlMs:p})}async function it(t={}){if(!!(l!=null&&l.connected)){ye=!0,d();try{const e=await A("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");H=pi(e.members),Qt=e.last_refresh||Qt,t.silent||h("roster-data-loaded",`Loaded ${H.length} roster member${H.length===1?"":"s"}.`,{ttlMs:p})}catch(e){h("roster-data-error",w(e),{ttlMs:p})}finally{ye=!1,d()}}}async function od(t={}){var e;if(!!R()){if(!(l!=null&&l.connected)){h("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}ye=!0,d();try{const r=await Qo(t);if(!(r!=null&&r.ok)){h("roster-data-pending",(r==null?void 0:r.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:p});return}const n={local_upload_id:mi(),authenticated_username:Oe(),authenticated_discord_user_id:((e=y==null?void 0:y.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await yi(n)}catch(s){throw ad(n),s}await it({silent:!0})}catch(r){h("roster-data-error",w(r),{ttlMs:p})}finally{ye=!1,d()}}}function mi(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function gn(){try{const t=window.localStorage.getItem(bs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function gi(t){window.localStorage.setItem(bs,JSON.stringify(Array.isArray(t)?t:[]))}function ad(t){const e=String((t==null?void 0:t.local_upload_id)||mi()),r=gn().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),gi(r),h("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function cd(t){const e=gn().filter(r=>(r==null?void 0:r.local_upload_id)!==t);gi(e)}async function dd(){if(Er||!(l!=null&&l.connected)||!R())return;const t=gn();if(t.length!==0){Er=!0;try{for(const e of t){if(!(l!=null&&l.connected)||!R())return;await yi(e),cd(e.local_upload_id)}}catch(e){h("roster-data-pending-error",`Pending roster upload retry failed: ${w(e)}`,{ttlMs:p})}finally{Er=!1}}}async function yi(t){if(!(l!=null&&l.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await A("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const r=await Xo(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return h("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:p}),e}function ld(){const t=Qr(F),e=bd(t),r=F!=="other";return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <button id="openManualBiweeklyTicketButton" class="bank-export-button" type="button" ${R()?"":'disabled title="Login required to add manual tickets."'}>
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
          <span class="discord-last-refresh">Last Refresh: ${a(Di(Ls))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${Ce||!R()?"disabled":""} ${R()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Ce?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${Mr("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${Mr("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${Mr("other","?","Other","All other deposits")}
        </div>

        ${pd(F)}

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
              ${t.length>0?t.map(n=>vd(n,r)).join(""):kd(r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${a(Si(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${r?`<div>Total Tickets Awarded: <strong>${a(mr(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${De?ud(Qr(Rt)):""}
    </div>
  `}function ud(t){return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${a(He(Rt))} Deposits</h3>
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
              ${t.length>0?t.map(e=>fd(e)).join(""):hd()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${a(vi(t))}</textarea>
      </div>
    </div>
  `}function fd(t){return`
    <tr>
      <td>${a(t.displayName||"")}</td>
      <td>${a(String(Number(t.amount)||0))}</td>
      <td>${a(String(Number(t.ticketAmount)||0))}</td>
      <td>${a(t.note||"")}</td>
    </tr>
  `}function hd(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${a(He(Rt))}.</td>
    </tr>
  `}function pd(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=ki(t),r=yn(t),n=r<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${u(He(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${a(He(t))} Raffle Period ${r===0?"(Current)":`(${Math.abs(r)} period${Math.abs(r)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${a(zt(e.salesStart))} through ${a(zt(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${a(zt(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${n?"":"disabled"} aria-label="Next ${u(He(t))} raffle period">\u203A</button>
    </div>
  `}function Mr(t,e,r,n){const s=F===t;return`
    <button class="bank-section-card${s?" active":""}" type="button" data-bank-section="${u(t)}" aria-selected="${s?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${a(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${a(r)}</span>
        <span class="bank-section-subtitle">${a(n)}</span>
      </span>
    </button>
  `}function bi(){if(E!=="more")return;document.querySelectorAll("[data-bank-section]").forEach(i=>{i.addEventListener("click",()=>{F=i.dataset.bankSection||"biweekly",d()})}),document.querySelectorAll("[data-bank-export-section]").forEach(i=>{i.addEventListener("click",()=>{Rt=(i.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",De=!0,d()})}),document.querySelectorAll("[data-bank-period-move]").forEach(i=>{i.addEventListener("click",()=>{yd(i.dataset.bankPeriodMove||""),d()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{De=!1,d()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>md());const r=document.querySelector(".bank-export-overlay");r&&r.addEventListener("click",i=>{i.target===r&&(De=!1,d())});const n=document.querySelector("#openManualBiweeklyTicketButton");n&&n.addEventListener("click",async()=>{if(!R()){h("manual-ticket-login-required","Login required to add manual tickets.",{ttlMs:p});return}re=!0,Q="",st=_.accountName||"",H.length===0&&(l==null?void 0:l.connected)&&R()&&await it({silent:!0}),d()});const s=document.querySelector("#refreshBankingDataButton");s&&s.addEventListener("click",()=>{if(!R()){h("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:p});return}_i({key:"banking"})})}function vi(t){const e=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const r of t)e.push([r.displayName||"",String(Number(r.amount)||0),String(Number(r.ticketAmount)||0),r.note||""]);return e.map(r=>r.map(hr).join("	")).join(`
`)}function hr(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function pr(t){var s;const e=String(t!=null?t:"");if((s=navigator.clipboard)!=null&&s.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const r=document.createElement("textarea");r.value=e,r.setAttribute("readonly","readonly"),r.style.position="fixed",r.style.left="0",r.style.top="0",r.style.width="1px",r.style.height="1px",r.style.opacity="0",r.style.pointerEvents="none",r.style.zIndex="-1",document.body.appendChild(r),r.focus(),r.select(),r.setSelectionRange(0,r.value.length);let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r)}return n}async function md(){const t=Qr(Rt),e=vi(t);if(await pr(e)){h("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#bankingExportTsv");n&&(n.focus(),n.select()),h("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:p})}function Qr(t){return j.filter(e=>e.type===t).filter(e=>gd(t,e)).sort((e,r)=>(Number(r.time)||0)-(Number(e.time)||0))}function gd(t,e){if(t==="other")return!0;const r=Number(e==null?void 0:e.time)||0;if(r<=0)return!1;const n=ki(t);return r>=n.salesStart&&r<=n.salesEnd}function yn(t){return Number(Ur[t])||0}function yd(t){if(F!=="biweekly"&&F!=="monthly")return;const e=yn(F);if(t==="previous"){Ur[F]=e-1;return}t==="next"&&e<0&&(Ur[F]=e+1)}function ki(t){const e=Math.floor(Date.now()/1e3),r=t==="monthly",n=r?aa:oa;let s=r?ia:sa;for(;s-n>e;)s-=n;for(;s<e;)s+=n;return s+=yn(t)*n,{salesStart:s-n+1,salesEnd:s,raffleTime:s+ca}}function bd(t){return t.reduce((e,r)=>(e.amount+=Number(r.amount)||0,e.tickets+=Number(r.ticketAmount)||0,e),{amount:0,tickets:0})}function vd(t,e=!0){return`
    <tr>
      <td>${a(t.note||t.eventId||"")}</td>
      <td>${a(zt(t.time))}</td>
      <td>${a(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${a(Si(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td><strong class="bank-ticket-amount">${a(mr(t.ticketAmount))}</strong></td>`:""}
    </tr>
  `}function kd(t=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?"5":"4"}">No ${a(He(F))} deposits found for this ${F==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function He(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function zt(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Si(t){return(Number(t)||0).toLocaleString()}function mr(t){return(Number(t)||0).toLocaleString()}function bn(t){return Array.isArray(t)?t.map(e=>{var n,s,i,o,c,f,b,v,m,S,C,ot;const r=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:r==="monthly"||r==="biweekly"||r==="other"?r:"other",eventId:String((s=(n=e==null?void 0:e.eventId)!=null?n:e==null?void 0:e.event_id)!=null?s:"").trim(),time:Number((o=(i=e==null?void 0:e.time)!=null?i:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((f=(c=e==null?void 0:e.displayName)!=null?c:e==null?void 0:e.display_name)!=null?f:"").trim(),amount:Number((b=e==null?void 0:e.amount)!=null?b:0)||0,ticketAmount:Number((m=(v=e==null?void 0:e.ticketAmount)!=null?v:e==null?void 0:e.ticket_amount)!=null?m:0)||0,note:String((S=e==null?void 0:e.note)!=null?S:"").trim(),dataSource:String((ot=(C=e==null?void 0:e.dataSource)!=null?C:e==null?void 0:e.data_source)!=null?ot:"").trim()}}):[]}function Sd(t){const e=new Map;for(const r of j)r.eventId&&e.set(r.eventId,r);for(const r of t)!r.eventId||e.set(r.eventId,r);j=Array.from(e.values()).sort((r,n)=>(Number(n.time)||0)-(Number(r.time)||0))}function wi(){Ls=new Date().toISOString()}async function wd(t={}){!(t!=null&&t.ok)||(j=bn(t.entries),wi(),E==="more"&&d(),h("banking-data-updated",`Banking data updated. Loaded ${j.length} deposit record${j.length===1?"":"s"}.`,{ttlMs:p}))}async function Tt(t={}){const e=Boolean(t.silent);if(!(l!=null&&l.connected)){e||h("banking-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}Ce=!0,d();try{const r=await A("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");j=bn(r.entries),wi(),e||h("banking-data",`Loaded ${j.length} banking deposit record${j.length===1?"":"s"}.`,{ttlMs:p})}catch(r){e||h("banking-data-error",w(r),{ttlMs:p})}finally{Ce=!1,d()}}async function _i(t={}){var e,r;if(!!R()){if(!(l!=null&&l.connected)){h("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}Ce=!0,d();try{const n=await Ko(t);if(!(n!=null&&n.ok)){h("banking-data-pending",(n==null?void 0:n.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:p});return}const s=bn((e=n==null?void 0:n.data)==null?void 0:e.entries);Sd(s);const i=new Date().toISOString(),o={local_upload_id:Li(),authenticated_username:Oe(),authenticated_discord_user_id:((r=y==null?void 0:y.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:i,data:n.data||{}};try{await Ei(o)}catch(c){throw _d(o),c}await Tt({silent:!0})}catch(n){h("banking-data-error",w(n),{ttlMs:p})}finally{Ce=!1,d()}}}function Li(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function vn(){try{const t=window.localStorage.getItem(ys),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Ai(t){window.localStorage.setItem(ys,JSON.stringify(Array.isArray(t)?t:[]))}function _d(t){const e=String((t==null?void 0:t.local_upload_id)||Li()),r=vn().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Ai(r),h("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Ld(t){const e=vn().filter(r=>(r==null?void 0:r.local_upload_id)!==t);Ai(e)}async function Ad(){if(Ar||!(l!=null&&l.connected)||!R())return;const t=vn();if(t.length!==0){Ar=!0;try{for(const e of t){if(!(l!=null&&l.connected)||!R())return;await Ei(e),Ld(e.local_upload_id)}}catch(e){h("banking-data-pending-error",`Pending banking upload retry failed: ${w(e)}`,{ttlMs:p})}finally{Ar=!1}}}async function Ei(t){if(!(l!=null&&l.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await A("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const r=await Jo(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return h("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:p}),e}function Ri(){if(E!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>Ed());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{ze=!0,te="",d(),T("discordHistorySearchInput")});const r=document.querySelector("#discordMemberSearch");r&&r.addEventListener("input",o=>{Jt=o.target.value||"",qr=o.target.selectionStart,Fr=o.target.selectionEnd,d({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Nd(o.dataset.discordSortColumn||"username")})});const n=document.querySelector("#discordRoleFilter");n&&n.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(Fe.add(c),d())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRoleFilter||"";Fe.delete(c),d()})});const s=document.querySelector("#discordLinkStatusFilter");s&&s.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(Ge.add(c),d())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeDiscordLinkStatusFilter||"";Ge.delete(c),d()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>ti(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const i=document.querySelector("#clearDiscordFiltersButton");i&&i.addEventListener("click",()=>{Jt="",Fe.clear(),Ge.clear(),d()})}async function Ed(){var t,e;if(!(l!=null&&l.connected)){h("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:p});return}Kt=!0,d(),h("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const r=await A("guildsync:request-discord-data-refresh",{requested_by:((t=y==null?void 0:y.user)==null?void 0:t.display_name)||((e=y==null?void 0:y.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to request Discord data refresh.");h("discord-refresh-requested",r.message||"Discord data refresh completed.",{ttlMs:p}),await kn({silent:!0})}catch(r){h("discord-refresh-error",w(r),{ttlMs:p})}finally{Kt=!1,d()}}async function Rd(){if(!(l!=null&&l.connected))return;const t=await A("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(cr=t.value||null)}async function Dd(t={}){if(!!(t!=null&&t.ok)){B=Sn(t.members),t.last_refresh&&(cr=t.last_refresh);try{await Rd()}catch{}E==="discord-members"&&d(),h("discord-data-updated",`Discord data updated. Loaded ${B.length} member record${B.length===1?"":"s"}.`,{ttlMs:p})}}async function kn(t={}){const e=Boolean(t.silent);if(!(l!=null&&l.connected)){h("discord-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}yt=!0,d();try{const[r,n]=await Promise.all([A("guildsync:request-discord-data-date",{}),A("guildsync:request-discord-member-dataJSON",{})]);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord refresh date.");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord member data.");cr=r.value||null,B=Sn(n.members),e||h("discord-data",`Loaded ${B.length} Discord member record${B.length===1?"":"s"}.`,{ttlMs:p})}catch(r){h("discord-data-error",w(r),{ttlMs:p})}finally{yt=!1,d()}}function A(t,e={},r=3e4){return new Promise((n,s)=>{if(!(l!=null&&l.connected)){s(new Error("GuildSync websocket is not connected."));return}let i=!1;const o=window.setTimeout(()=>{i||(i=!0,s(new Error(`${t} timed out.`)))},r);l.emit(t,e,c=>{i||(i=!0,window.clearTimeout(o),n(c))})})}function Sn(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map($d).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,r)=>St(e).localeCompare(St(r),void 0,{sensitivity:"base"})):[]}function $d(t){var s,i;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),r=String(t.role_name||t.name||"Unnamed Role").trim(),n=(i=(s=t.role_color)!=null?s:t.color)!=null?i:null;return{role_id:e,role_name:r||"Unnamed Role",role_color:n}}function Md(){const t=Jt.trim().toLowerCase(),e=Array.from(Fe),r=B.filter(n=>{if(t&&![n.username,n.global_name,n.server_nickname,n.discord_id,...n.roles.map(i=>i.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const s=new Set(n.roles.map(i=>i.role_name));if(!e.every(i=>s.has(i)))return!1}return!!Cs(Ge,Na(n))});return Td(r)}function Td(t){const e=we==="desc"?-1:1;return[...t].sort((r,n)=>{const s=Yn(r,bt),i=Yn(n,bt),o=s.localeCompare(i,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:St(r).localeCompare(St(n),void 0,{sensitivity:"base",numeric:!0})})}function Yn(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(r=>r.role_name||"").filter(Boolean).sort((r,n)=>r.localeCompare(n,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function Nd(t){const r=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";bt===r?we=we==="asc"?"desc":"asc":(bt=r,we="asc"),d()}function qt(t,e){const r=bt===t,n=we==="asc"?"ascending":"descending",s=r?we==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${r?n:"none"}">
      <button
        class="discord-sort-header${r?" active":""}"
        type="button"
        data-discord-sort-column="${u(t)}"
        title="Sort ${u(e)} ${r&&we==="asc"?"descending":"ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function Cd(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(qr)?qr:t.value.length,r=Number.isInteger(Fr)?Fr:e;t.setSelectionRange(e,r)}}function Bd(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(Gr)?Gr:t.value.length,r=Number.isInteger(Pr)?Pr:e;t.setSelectionRange(e,r)}}function xd(){const t=new Set;for(const e of B)for(const r of e.roles)r.role_name&&t.add(r.role_name);return Array.from(t).sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function Od(t){const e=Gd(t),r=St(t),n=t.roles||[];return`
    <tr data-discord-user-id="${u(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${u(e)}" alt="${u(r)}" />`:`<span>${a(xi(r))}</span>`}
          </div>
          <span>${a(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${a(t.global_name||"")}</td>
      <td>${a(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${n.length>0?n.map(s=>qd(s)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${Zs({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function Id(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${a(yt?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function qd(t){const e=gr(t.role_color),r=Ln(e),n=_n(e,r);return`
    <span
      class="discord-role-badge"
      title="${u(t.role_name)}"
      style="${n}"
    >${a(t.role_name)}</span>
  `}function Fd(t){const e=wn(t),r=gr(e==null?void 0:e.role_color),n=Ln(r),s=_n(r,n);return`
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
  `}function wn(t){for(const e of B){const r=e.roles.find(n=>n.role_name===t);if(r)return r}return null}function gr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function _n(t,e){return[`--role-fill-top: ${Kn(t,"#ffffff",.16)}`,`--role-fill-bottom: ${Kn(t,"#000000",.1)}`,`--role-fill-glow: ${Jn(t,.28)}`,`--role-fill-edge: ${Jn(t,.46)}`,`color: ${e}`].join("; ")}function Kn(t,e,r){const n=Ft(t)||Ft("#64748b"),s=Ft(e)||Ft("#ffffff"),i=Math.max(0,Math.min(1,Number(r)||0)),o=Math.round(n.red+(s.red-n.red)*i),c=Math.round(n.green+(s.green-n.green)*i),f=Math.round(n.blue+(s.blue-n.blue)*i);return`#${Tr(o)}${Tr(c)}${Tr(f)}`}function Ft(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function Tr(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function Jn(t,e){const r=String(t||"#64748b").replace("#",""),n=/^[0-9a-f]{6}$/i.test(r)?r:"64748b",s=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),o=parseInt(n.slice(4,6),16);return`rgba(${s}, ${i}, ${o}, ${e})`}function Ln(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const r=parseInt(e.slice(0,2),16),n=parseInt(e.slice(2,4),16),s=parseInt(e.slice(4,6),16);return(r*299+n*587+s*114)/1e3>150?"#0F172A":"#F8FAFC"}function Gd(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!r)return"";const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function St(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function Di(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function jt(){const t=document.querySelector("#discordArea");if(!!t){if(Nt(!1),R()){const e=y.user||{},r=Oe(),n=tl(e),s=xi(r);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${n?`<img src="${u(n)}" alt="${u(r)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${a(s)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const i=document.querySelector("#discordAvatarButton");i.addEventListener("contextmenu",o=>{o.preventDefault(),Qn()}),i.addEventListener("click",()=>{Qn()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",Vd)}}function Qn(){if(sn){Nt();return}Ud()}function Pd(){var n,s,i;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=Oe(),r=((n=y.user)==null?void 0:n.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${a(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${a(rl(r))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${a(ar)}</span>
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(s=document.querySelector("#discordLogoutButton"))==null||s.addEventListener("click",Hd),(i=document.querySelector("#associateTicketReportButton"))==null||i.addEventListener("click",()=>{Nt(!1),qs()})}function Ud(){const t=document.querySelector("#discordProfileMenu");!t||(Pd(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),sn=!0,setTimeout(()=>{window.addEventListener("click",$i),window.addEventListener("keydown",Mi)},0))}function Nt(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),sn=!1,t&&(window.removeEventListener("click",$i),window.removeEventListener("keydown",Mi))}function $i(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&Nt()}function Mi(t){t.key==="Escape"&&Nt()}async function Vd(){try{h("auth","Opening Discord login...",{ttlMs:p});const t=await Ho();t!=null&&t.status_message&&h("auth",t.status_message,{ttlMs:p}),me()}catch(t){h("auth-error",w(t),{ttlMs:p}),me()}}async function Hd(){try{y=await zo(),h("auth",y.status_message||"Logged out.",{ttlMs:p}),As(),mt(),await gt()}catch(t){h("auth-error",w(t),{ttlMs:p}),me()}}function mt(){const t=y.socket_url||"https://guildsync.perdues.me";Wd(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};y!=null&&y.token&&(e.auth={token:y.token}),l=Vt(t,e),l.on("connect",()=>{me(),Ti(),E==="discord-members"&&kn({silent:!0}),E==="eso-members"&&it({silent:!0}),E==="more"&&Tt({silent:!0}),Ad(),dd(),zd()}),l.on("connect_error",()=>{me(),sr()}),l.on("disconnect",()=>{me(),sr()}),l.on("guildsync:version-status",r=>{jd(r)}),l.on("guildsync:discord-member-data-updated",r=>{Dd(r)}),l.on("guildsync:banking-data-updated",r=>{wd(r)}),l.on("guildsync:roster-data-updated",r=>{id(r)}),l.on("guildsync:member-links-updated",(r={})=>{Array.isArray(r.links)&&(L=r.links,(E==="discord-members"||E==="eso-members"||E==="settings"||ve)&&d())}),l.on("guildsync:discord-refresh-status",(r={})=>{const n=String(r.message||"").trim();n&&h("discord-refresh-status",n,{ttlMs:p})})}function Wd(t=!0){sr(),l&&(l.disconnect(),l=null),t&&me()}function Ti(){!(l!=null&&l.connected)||l.emit("guildsync:client-version",{version:ar})}function zd(){sr(),Ht=window.setInterval(()=>{Ti()},Zo)}function sr(){Ht&&(window.clearInterval(Ht),Ht=null)}function jd(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown";h("version",`GuildSync is out of date. Current version: ${ar}. Latest version: ${e}.`);return}yr("version")}}function h(t,e,r={}){const n=String(t||"").trim(),s=String(e||"").trim();if(!(!n||!s)){if(ge.set(n,s),M===n){const i=document.querySelector("#statusMessageTrack");i&&(i.textContent=s)}if(Se.has(n)&&(window.clearTimeout(Se.get(n)),Se.delete(n)),r.ttlMs&&Number(r.ttlMs)>0){const i=window.setTimeout(()=>{yr(n)},Number(r.ttlMs));Se.set(n,i)}Qe()}}function yr(t){const e=String(t||"").trim();if(!!e){if(ge.delete(e),Se.has(e)&&(window.clearTimeout(Se.get(e)),Se.delete(e)),M===e){kr(()=>{M="",Qe()});return}Qe()}}function Qe(){const t=br();if(t.length===0){$e?kr(wt):wt();return}!$e&&!Me&&vr(t[0])}function br(){return Array.from(ge.keys())}function Ni(){const t=br();if(t.length===0)return"";if(!M)return t[0];const e=t.indexOf(M);return e<0?t[0]:t[(e+1)%t.length]}function vr(t){const e=document.querySelector("#statusMessageTrack");if(!e||!ge.has(t)){wt();return}Sr();const r=ge.get(t);M=t,$e=!0,Me=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=r,e.style.setProperty("--message-fade-duration",`${Ss}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",Me=!1,Yd()},{once:!0})})}function Yd(){const t=br();if(!M||!ge.has(M)){Qe();return}if(t.length<=1){Xn(!1);return}Xn(!0)}function Xn(t){const e=document.querySelector("#statusMessageViewport"),r=document.querySelector("#statusMessageTrack");if(!e||!r)return;const n=Math.max(0,r.scrollWidth-e.clientWidth);if(n<=0){t&&_t(()=>{kr(()=>{const s=Ni();M="",s?vr(s):wt()})},ks);return}_t(()=>{Ci(n,t)},ws)}function Ci(t,e){const r=document.querySelector("#statusMessageTrack");if(!r||!M||!ge.has(M))return;const n=Math.max(4,Math.ceil(t/ra));r.style.setProperty("--long-scroll-distance",`${t}px`),r.style.setProperty("--long-scroll-duration",`${n}s`),r.classList.add("long-scroll"),r.addEventListener("animationend",()=>{if(r.classList.remove("long-scroll"),r.style.transform=`translateX(-${t}px) translateY(-50%)`,e){_t(()=>{kr(()=>{const s=Ni();M="",s?vr(s):wt()})},ks);return}_t(()=>{Kd()},ta)},{once:!0})}function Kd(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!M||!ge.has(M))return;if(br().length!==1){Qe();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const n=Math.max(0,e.scrollWidth-t.clientWidth);n<=0||_t(()=>{Ci(n,!1)},ws)}function kr(t){const e=document.querySelector("#statusMessageTrack");if(Sr(),!e||!$e){typeof t=="function"&&t();return}Me=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${Ss}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",$e=!1,Me=!1,typeof t=="function"&&t()},{once:!0})}function wt(){const t=document.querySelector("#statusMessageTrack");Sr(),M="",$e=!1,Me=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function _t(t,e){const r=window.setTimeout(()=>{ht=ht.filter(n=>n!==r),t()},e);ht.push(r)}function Sr(){for(const t of ht)window.clearTimeout(t);ht=[]}function Bi(){if(!$e||Me||!M)return;const t=M;Sr(),vr(t)}function me(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(l!=null&&l.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!R()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${Oe()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${Oe()}`)}}async function gt(t={}){try{if(R()){const e=await jo();Nn=e,!t.silent&&(e==null?void 0:e.message)&&h(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:p});return}Nn=await Yo(),yr("file-watcher")}catch(e){h("file-watcher-error",w(e),{ttlMs:p})}}function Jd(t={}){if(!R())return;const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",r=String(t.label||"").trim(),n=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=r?`${r} saved variables (${n})`:n;h(`saved-vars-file-updated-${e}`,`${s} has been updated.`,{ttlMs:p}),e.toLowerCase()==="banking"&&Qd(t),e.toLowerCase()==="roster"&&Xd(t)}async function Qd(t={}){await _i(t)}async function Xd(t={}){await od(t)}function Zd(t){!R()||h("file-watcher-error",w(t),{ttlMs:p})}function el(){ct("guildsync-savedvars-file-modified",Jd),ct("guildsync-file-watcher-error",Zd),ct("guildsync-login-complete",async t=>{y=t||{logged_in:!1,allowed:!1},jt(),mt(),await gt(),h("auth",y.status_message||`Logged in and authorized as ${Oe()}.`,{ttlMs:p})}),ct("guildsync-login-denied",async t=>{y={logged_in:!1,allowed:!1,status_message:""},jt(),await gt(),h("auth",t||"Access denied.",{ttlMs:p}),mt()}),ct("guildsync-login-failed",async t=>{y={logged_in:!1,allowed:!1,status_message:""},jt(),await gt(),h("auth",t||"Login failed.",{ttlMs:p}),mt()})}function R(){return Boolean((y==null?void 0:y.logged_in)&&(y==null?void 0:y.allowed)&&(y==null?void 0:y.token))}function Oe(){var t,e;return((t=y.user)==null?void 0:t.display_name)||((e=y.user)==null?void 0:e.username)||"Discord User"}function tl(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),r=String(t.discord_user_id||"").trim();if(!e||!r)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=128`}function xi(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function rl(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function nl(){dt&&(dt.disconnect(),dt=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),r=Math.round(t.getBoundingClientRect().height);dt=new ResizeObserver(n=>{const s=n[0];if(!s)return;const i=Math.round(s.contentRect.width),o=Math.round(s.contentRect.height);i===e&&o===r||(e=i,r=o,Oi(),Bi())}),dt.observe(t)}function Oi(){clearTimeout(Mn),Mn=setTimeout(async()=>{try{await ms()}catch{}},500)}function w(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function a(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function u(t){return a(t)}el();Ha();da();
