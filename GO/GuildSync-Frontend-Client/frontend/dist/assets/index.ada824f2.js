(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const si="/assets/splash.ea386b6a.png",oi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",ai="/assets/GuildSync-Graphic.9169020d.png",G=Object.create(null);G.open="0";G.close="1";G.ping="2";G.pong="3";G.message="4";G.upgrade="5";G.noop="6";const Je=Object.create(null);Object.keys(G).forEach(t=>{Je[G[t]]=t});const Dt={type:"error",data:"parser error"},Pr=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Fr=typeof ArrayBuffer=="function",Gr=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Qt=({type:t,data:e},r,n)=>Pr&&e instanceof Blob?r?n(e):kr(e,n):Fr&&(e instanceof ArrayBuffer||Gr(e))?r?n(e):kr(new Blob([e]),n):n(G[t]+(e||"")),kr=(t,e)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];e("b"+(n||""))},r.readAsDataURL(t)};function vr(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let Lt;function ci(t,e){if(Pr&&t.data instanceof Blob)return t.data.arrayBuffer().then(vr).then(e);if(Fr&&(t.data instanceof ArrayBuffer||Gr(t.data)))return e(vr(t.data));Qt(t,!1,r=>{Lt||(Lt=new TextEncoder),e(Lt.encode(r))})}const wr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Be=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<wr.length;t++)Be[wr.charCodeAt(t)]=t;const li=t=>{let e=t.length*.75,r=t.length,n,i=0,s,o,d,h;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const y=new ArrayBuffer(e),b=new Uint8Array(y);for(n=0;n<r;n+=4)s=Be[t.charCodeAt(n)],o=Be[t.charCodeAt(n+1)],d=Be[t.charCodeAt(n+2)],h=Be[t.charCodeAt(n+3)],b[i++]=s<<2|o>>4,b[i++]=(o&15)<<4|d>>2,b[i++]=(d&3)<<6|h&63;return y},di=typeof ArrayBuffer=="function",Xt=(t,e)=>{if(typeof t!="string")return{type:"message",data:Ur(t,e)};const r=t.charAt(0);return r==="b"?{type:"message",data:ui(t.substring(1),e)}:Je[r]?t.length>1?{type:Je[r],data:t.substring(1)}:{type:Je[r]}:Dt},ui=(t,e)=>{if(di){const r=li(t);return Ur(r,e)}else return{base64:!0,data:t}},Ur=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},Vr=String.fromCharCode(30),fi=(t,e)=>{const r=t.length,n=new Array(r);let i=0;t.forEach((s,o)=>{Qt(s,!1,d=>{n[o]=d,++i===r&&e(n.join(Vr))})})},hi=(t,e)=>{const r=t.split(Vr),n=[];for(let i=0;i<r.length;i++){const s=Xt(r[i],e);if(n.push(s),s.type==="error")break}return n};function mi(){return new TransformStream({transform(t,e){ci(t,r=>{const n=r.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,n)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(n))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(r)})}})}let Rt;function ze(t){return t.reduce((e,r)=>e+r.length,0)}function je(t,e){if(t[0].length===e)return t.shift();const r=new Uint8Array(e);let n=0;for(let i=0;i<e;i++)r[i]=t[0][n++],n===t[0].length&&(t.shift(),n=0);return t.length&&n<t[0].length&&(t[0]=t[0].slice(n)),r}function pi(t,e){Rt||(Rt=new TextDecoder);const r=[];let n=0,i=-1,s=!1;return new TransformStream({transform(o,d){for(r.push(o);;){if(n===0){if(ze(r)<1)break;const h=je(r,1);s=(h[0]&128)===128,i=h[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(ze(r)<2)break;const h=je(r,2);i=new DataView(h.buffer,h.byteOffset,h.length).getUint16(0),n=3}else if(n===2){if(ze(r)<8)break;const h=je(r,8),y=new DataView(h.buffer,h.byteOffset,h.length),b=y.getUint32(0);if(b>Math.pow(2,53-32)-1){d.enqueue(Dt);break}i=b*Math.pow(2,32)+y.getUint32(4),n=3}else{if(ze(r)<i)break;const h=je(r,i);d.enqueue(Xt(s?h:Rt.decode(h),e)),n=0}if(i===0||i>t){d.enqueue(Dt);break}}}})}const Wr=4;function A(t){if(t)return gi(t)}function gi(t){for(var e in A.prototype)t[e]=A.prototype[e];return t}A.prototype.on=A.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};A.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this};A.prototype.off=A.prototype.removeListener=A.prototype.removeAllListeners=A.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var n,i=0;i<r.length;i++)if(n=r[i],n===e||n.fn===e){r.splice(i,1);break}return r.length===0&&delete this._callbacks["$"+t],this};A.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),r=this._callbacks["$"+t],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,i=r.length;n<i;++n)r[n].apply(this,e)}return this};A.prototype.emitReserved=A.prototype.emit;A.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};A.prototype.hasListeners=function(t){return!!this.listeners(t).length};const ft=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,r)=>r(e,0))(),T=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),yi="arraybuffer";function Hr(t,...e){return e.reduce((r,n)=>(t.hasOwnProperty(n)&&(r[n]=t[n]),r),{})}const bi=T.setTimeout,ki=T.clearTimeout;function ht(t,e){e.useNativeTimers?(t.setTimeoutFn=bi.bind(T),t.clearTimeoutFn=ki.bind(T)):(t.setTimeoutFn=T.setTimeout.bind(T),t.clearTimeoutFn=T.clearTimeout.bind(T))}const vi=1.33;function wi(t){return typeof t=="string"?Si(t):Math.ceil((t.byteLength||t.size)*vi)}function Si(t){let e=0,r=0;for(let n=0,i=t.length;n<i;n++)e=t.charCodeAt(n),e<128?r+=1:e<2048?r+=2:e<55296||e>=57344?r+=3:(n++,r+=4);return r}function zr(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function _i(t){let e="";for(let r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e}function Ai(t){let e={},r=t.split("&");for(let n=0,i=r.length;n<i;n++){let s=r[n].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class Ei extends Error{constructor(e,r,n){super(e),this.description=r,this.context=n,this.type="TransportError"}}class Zt extends A{constructor(e){super(),this.writable=!1,ht(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,r,n){return super.emitReserved("error",new Ei(e,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const r=Xt(e,this.socket.binaryType);this.onPacket(r)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,r={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const r=_i(e);return r.length?"?"+r:""}}class Li extends Zt{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const r=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};hi(e,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,fi(e,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=zr()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(e,r)}}let jr=!1;try{jr=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Ri=jr;function Mi(){}class Ti extends Li{constructor(e){if(super(e),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,r){const n=this.request({method:"POST",data:e});n.on("success",r),n.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=e}}class P extends A{constructor(e,r,n){super(),this.createRequest=e,ht(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;const r=Hr(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=P.requestsCount++,P.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Mi,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete P.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}P.requestsCount=0;P.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Sr);else if(typeof addEventListener=="function"){const t="onpagehide"in T?"pagehide":"unload";addEventListener(t,Sr,!1)}}function Sr(){for(let t in P.requests)P.requests.hasOwnProperty(t)&&P.requests[t].abort()}const Ni=function(){const t=Yr({xdomain:!1});return t&&t.responseType!==null}();class Ci extends Ti{constructor(e){super(e);const r=e&&e.forceBase64;this.supportsBinary=Ni&&!r}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new P(Yr,this.uri(),e)}}function Yr(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Ri))return new XMLHttpRequest}catch{}if(!e)try{return new T[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Kr=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Bi extends Zt{get name(){return"websocket"}doOpen(){const e=this.uri(),r=this.opts.protocols,n=Kr?{}:Hr(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,r,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],i=r===e.length-1;Qt(n,this.supportsBinary,s=>{try{this.doWrite(n,s)}catch{}i&&ft(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=zr()),this.supportsBinary||(r.b64=1),this.createUri(e,r)}}const Mt=T.WebSocket||T.MozWebSocket;class $i extends Bi{createSocket(e,r,n){return Kr?new Mt(e,r,n):r?new Mt(e,r):new Mt(e)}doWrite(e,r){this.ws.send(r)}}class Di extends Zt{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const r=pi(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(r).getReader(),i=mi();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const s=()=>{n.read().then(({done:d,value:h})=>{d||(this.onPacket(h),s())}).catch(d=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],i=r===e.length-1;this._writer.write(n).then(()=>{i&&ft(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const xi={websocket:$i,webtransport:Di,polling:Ci},Oi=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,qi=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function xt(t){if(t.length>8e3)throw"URI too long";const e=t,r=t.indexOf("["),n=t.indexOf("]");r!=-1&&n!=-1&&(t=t.substring(0,r)+t.substring(r,n).replace(/:/g,";")+t.substring(n,t.length));let i=Oi.exec(t||""),s={},o=14;for(;o--;)s[qi[o]]=i[o]||"";return r!=-1&&n!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=Ii(s,s.path),s.queryKey=Pi(s,s.query),s}function Ii(t,e){const r=/\/{2,9}/g,n=e.replace(r,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Pi(t,e){const r={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,s){i&&(r[i]=s)}),r}const Ot=typeof addEventListener=="function"&&typeof removeEventListener=="function",Qe=[];Ot&&addEventListener("offline",()=>{Qe.forEach(t=>t())},!1);class Y extends A{constructor(e,r){if(super(),this.binaryType=yi,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(r=e,e=null),e){const n=xt(e);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=xt(r.host).host);ht(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Ai(this.opts.query)),Ot&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Qe.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const r=Object.assign({},this.opts.query);r.EIO=Wr,r.transport=e,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Y.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(e);r.open(),this.setTransport(r)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",Y.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=e.data,this._onError(r);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(r+=wi(i)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,ft(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,r,n){return this._sendPacket("message",e,r,n),this}send(e,r,n){return this._sendPacket("message",e,r,n),this}_sendPacket(e,r,n,i){if(typeof r=="function"&&(i=r,r=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const s={type:e,data:r,options:n};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),e()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(Y.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Ot&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=Qe.indexOf(this._offlineEventListener);n!==-1&&Qe.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,r),this.writeBuffer=[],this._prevBufferLen=0}}}Y.protocol=Wr;class Fi extends Y{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let r=this.createTransport(e),n=!1;Y.priorWebsocketSuccess=!1;const i=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",E=>{if(!n)if(E.type==="pong"&&E.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;Y.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(b(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const I=new Error("probe error");I.transport=r.name,this.emitReserved("upgradeError",I)}}))};function s(){n||(n=!0,b(),r.close(),r=null)}const o=E=>{const I=new Error("probe error: "+E);I.transport=r.name,s(),this.emitReserved("upgradeError",I)};function d(){o("transport closed")}function h(){o("socket closed")}function y(E){r&&E.name!==r.name&&s()}const b=()=>{r.removeListener("open",i),r.removeListener("error",o),r.removeListener("close",d),this.off("close",h),this.off("upgrading",y)};r.once("open",i),r.once("error",o),r.once("close",d),this.once("close",h),this.once("upgrading",y),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const r=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&r.push(e[n]);return r}}class Gi extends Fi{constructor(e,r={}){const n=typeof e=="object"?e:r;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(i=>xi[i]).filter(i=>!!i)),super(e,n)}}function Ui(t,e="",r){let n=t;r=r||typeof location<"u"&&location,t==null&&(t=r.protocol+"//"+r.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=r.protocol+t:t=r.host+t),/^(https?|wss?):\/\//.test(t)||(typeof r<"u"?t=r.protocol+"//"+t:t="https://"+t),n=xt(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const s=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port+e,n.href=n.protocol+"://"+s+(r&&r.port===n.port?"":":"+n.port),n}const Vi=typeof ArrayBuffer=="function",Wi=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,Jr=Object.prototype.toString,Hi=typeof Blob=="function"||typeof Blob<"u"&&Jr.call(Blob)==="[object BlobConstructor]",zi=typeof File=="function"||typeof File<"u"&&Jr.call(File)==="[object FileConstructor]";function er(t){return Vi&&(t instanceof ArrayBuffer||Wi(t))||Hi&&t instanceof Blob||zi&&t instanceof File}function Xe(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let r=0,n=t.length;r<n;r++)if(Xe(t[r]))return!0;return!1}if(er(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return Xe(t.toJSON(),!0);for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&Xe(t[r]))return!0;return!1}function ji(t){const e=[],r=t.data,n=t;return n.data=qt(r,e),n.attachments=e.length,{packet:n,buffers:e}}function qt(t,e){if(!t)return t;if(er(t)){const r={_placeholder:!0,num:e.length};return e.push(t),r}else if(Array.isArray(t)){const r=new Array(t.length);for(let n=0;n<t.length;n++)r[n]=qt(t[n],e);return r}else if(typeof t=="object"&&!(t instanceof Date)){const r={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=qt(t[n],e));return r}return t}function Yi(t,e){return t.data=It(t.data,e),delete t.attachments,t}function It(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let r=0;r<t.length;r++)t[r]=It(t[r],e);else if(typeof t=="object")for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(t[r]=It(t[r],e));return t}const Qr=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Ki=5;var p;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(p||(p={}));class Ji{constructor(e){this.replacer=e}encode(e){return(e.type===p.EVENT||e.type===p.ACK)&&Xe(e)?this.encodeAsBinary({type:e.type===p.EVENT?p.BINARY_EVENT:p.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let r=""+e.type;return(e.type===p.BINARY_EVENT||e.type===p.BINARY_ACK)&&(r+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(r+=e.nsp+","),e.id!=null&&(r+=e.id),e.data!=null&&(r+=JSON.stringify(e.data,this.replacer)),r}encodeAsBinary(e){const r=ji(e),n=this.encodeAsString(r.packet),i=r.buffers;return i.unshift(n),i}}class tr extends A{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let r;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(e);const n=r.type===p.BINARY_EVENT;n||r.type===p.BINARY_ACK?(r.type=n?p.EVENT:p.ACK,this.reconstructor=new Qi(r),r.attachments===0&&super.emitReserved("decoded",r)):super.emitReserved("decoded",r)}else if(er(e)||e.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(e),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let r=0;const n={type:Number(e.charAt(0))};if(p[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===p.BINARY_EVENT||n.type===p.BINARY_ACK){const s=r+1;for(;e.charAt(++r)!=="-"&&r!=e.length;);const o=e.substring(s,r);if(o!=Number(o)||e.charAt(r)!=="-")throw new Error("Illegal attachments");const d=Number(o);if(!Xr(d)||d<0)throw new Error("Illegal attachments");if(d>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=d}if(e.charAt(r+1)==="/"){const s=r+1;for(;++r&&!(e.charAt(r)===","||r===e.length););n.nsp=e.substring(s,r)}else n.nsp="/";const i=e.charAt(r+1);if(i!==""&&Number(i)==i){const s=r+1;for(;++r;){const o=e.charAt(r);if(o==null||Number(o)!=o){--r;break}if(r===e.length)break}n.id=Number(e.substring(s,r+1))}if(e.charAt(++r)){const s=this.tryParse(e.substr(r));if(tr.isPayloadValid(n.type,s))n.data=s;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,r){switch(e){case p.CONNECT:return nt(r);case p.DISCONNECT:return r===void 0;case p.CONNECT_ERROR:return typeof r=="string"||nt(r);case p.EVENT:case p.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&Qr.indexOf(r[0])===-1);case p.ACK:case p.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Qi{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const r=Yi(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Xi(t){return typeof t=="string"}const Xr=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function Zi(t){return t===void 0||Xr(t)}function nt(t){return Object.prototype.toString.call(t)==="[object Object]"}function es(t,e){switch(t){case p.CONNECT:return e===void 0||nt(e);case p.DISCONNECT:return e===void 0;case p.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&Qr.indexOf(e[0])===-1);case p.ACK:return Array.isArray(e);case p.CONNECT_ERROR:return typeof e=="string"||nt(e);default:return!1}}function ts(t){return Xi(t.nsp)&&Zi(t.id)&&es(t.type,t.data)}const rs=Object.freeze(Object.defineProperty({__proto__:null,protocol:Ki,get PacketType(){return p},Encoder:Ji,Decoder:tr,isPacketValid:ts},Symbol.toStringTag,{value:"Module"}));function $(t,e,r){return t.on(e,r),function(){t.off(e,r)}}const ns=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Zr extends A{constructor(e,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[$(e,"open",this.onopen.bind(this)),$(e,"packet",this.onpacket.bind(this)),$(e,"error",this.onerror.bind(this)),$(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...r){var n,i,s;if(ns.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(r.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const o={type:p.EVENT,data:r};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const b=this.ids++,E=r.pop();this._registerAckCallback(b,E),o.id=b}const d=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,h=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!d||(h?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,r){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[e]=r;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let d=0;d<this.sendBuffer.length;d++)this.sendBuffer[d].id===e&&this.sendBuffer.splice(d,1);r.call(this,new Error("operation has timed out"))},i),o=(...d)=>{this.io.clearTimeoutFn(s),r.apply(this,d)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...r){return new Promise((n,i)=>{const s=(o,d)=>o?i(o):n(d);s.withError=!0,r.push(s),this.emit(e,...r)})}_addToQueue(e){let r;typeof e[e.length-1]=="function"&&(r=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(i)):(this._queue.shift(),r&&r(null,...s)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!e||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:p.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){const n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case p.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case p.EVENT:case p.BINARY_EVENT:this.onevent(e);break;case p.ACK:case p.BINARY_ACK:this.onack(e);break;case p.DISCONNECT:this.ondisconnect();break;case p.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const r=e.data||[];e.id!=null&&r.push(this.ack(e.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const r=this;let n=!1;return function(...i){n||(n=!0,r.packet({type:p.ACK,id:e,data:i}))}}onack(e){const r=this.acks[e.id];typeof r=="function"&&(delete this.acks[e.id],r.withError&&e.data.unshift(null),r.apply(this,e.data))}onconnect(e,r){this.id=e,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:p.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,e.data)}}}function Se(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}Se.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-r:t+r}return Math.min(t,this.max)|0};Se.prototype.reset=function(){this.attempts=0};Se.prototype.setMin=function(t){this.ms=t};Se.prototype.setMax=function(t){this.max=t};Se.prototype.setJitter=function(t){this.jitter=t};class Pt extends A{constructor(e,r){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(r=e,e=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,ht(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Se({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=e;const i=r.parser||rs;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var r;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(r=this.backoff)===null||r===void 0||r.setMin(e),this)}randomizationFactor(e){var r;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(r=this.backoff)===null||r===void 0||r.setJitter(e),this)}reconnectionDelayMax(e){var r;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(r=this.backoff)===null||r===void 0||r.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Gi(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=$(r,"open",function(){n.onopen(),e&&e()}),s=d=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",d),e?e(d):this.maybeReconnectOnOpen()},o=$(r,"error",s);if(this._timeout!==!1){const d=this._timeout,h=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),r.close()},d);this.opts.autoUnref&&h.unref(),this.subs.push(()=>{this.clearTimeoutFn(h)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push($(e,"ping",this.onping.bind(this)),$(e,"data",this.ondata.bind(this)),$(e,"error",this.onerror.bind(this)),$(e,"close",this.onclose.bind(this)),$(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(r){this.onclose("parse error",r)}}ondecoded(e){ft(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,r){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new Zr(this,e,r),this.nsps[e]=n),n}_destroy(e){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(e){const r=this.encoder.encode(e);for(let n=0;n<r.length;n++)this.engine.write(r[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Te={};function Ze(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const r=Ui(t,e.path||"/socket.io"),n=r.source,i=r.id,s=r.path,o=Te[i]&&s in Te[i].nsps,d=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let h;return d?h=new Pt(n,e):(Te[i]||(Te[i]=new Pt(n,e)),h=Te[i]),r.query&&!e.query&&(e.query=r.queryKey),h.socket(r.path,e)}Object.assign(Ze,{Manager:Pt,Socket:Zr,io:Ze,connect:Ze});function is(){return window.go.main.App.CloseWindow()}function ss(t){return window.go.main.App.CollectGuildSyncBankingData(t)}function os(t){return window.go.main.App.CollectGuildSyncRosterData(t)}function as(t,e){return window.go.main.App.CommitGuildSyncBankingData(t,e)}function cs(t,e){return window.go.main.App.CommitGuildSyncRosterData(t,e)}function ls(){return window.go.main.App.GetGuildSyncFileWatcherStatus()}function ds(){return window.go.main.App.GetGuildSyncSession()}function us(){return window.go.main.App.LogoutGuildSync()}function fs(){return window.go.main.App.MaximizeWindow()}function hs(){return window.go.main.App.MinimizeWindow()}function en(){return window.go.main.App.SaveWindowState()}function ms(t,e){return window.go.main.App.SetGuildSyncSavedVarsWatchFileEnabled(t,e)}function ps(){return window.go.main.App.ShowMainWindow()}function gs(){return window.go.main.App.StartDiscordLogin()}function ys(){return window.go.main.App.StartGuildSyncFileWatcher()}function bs(){return window.go.main.App.StopGuildSyncFileWatcher()}function ks(t,e,r){return window.runtime.EventsOnMultiple(t,e,r)}function Ne(t,e){return ks(t,e,-1)}const mt="1.0.3",vs=30*60*1e3,tn="guildsync-pending-banking-uploads",rn="guildsync-pending-roster-uploads",f=60*1e3,nn=7e3,sn=1400,on=2400,ws=4e3,Ss=38,an=document.querySelector("#app");let _r=null,Ce=null,Ar=!1,Ue=!1,et=null,Tt=!1,Nt=!1,K=null,ee=new Map,ie=new Map,L="",fe=!1,he=!1,$e=[],g={logged_in:!1,allowed:!1,status_message:""},c=null,x=[],pt=null,Oe=!1,it=!1,st="",pe=new Set,se=new Set,qe="username",oe="asc",Ft=null,Gt=null,O=[],ot=null,te=!1,Er=!1,at="",Ut=null,Vt=null,ae=new Set,ce=new Set,be=!1,Ie="",N=[],re="",J=[],Q=!1,W="",Ct=null,D=-1,_e=!1,Ae=[],j=!1,le="",w=[],B=!1,q="",Ee=!1,ne=!1,k=null,de=[],ke=!1,z="",Le=!1,rr=null,De=null;const nr=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"unlinked",label:"Unlinked"}];let F=[],C="biweekly",cn=null,me=!1,ue=!1,Ve="biweekly",H=!1,ct=!1,V="",M={accountName:"",note:"",tickets:""},Re="",U=-1,Wt={biweekly:0,monthly:0};const _s=1780786800,As=1781996400,Es=14*24*60*60,Ls=28*24*60*60,Rs=60*60,lt=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let S=lt[0].id;function Ms(){an.innerHTML=`
    <main class="splash-screen">
      <img src="${si}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await ps(),await Ts(),ln(),xe(),await ye()},5e3)}async function Ts(){try{g=await ds()}catch(t){g={logged_in:!1,allowed:!1,status_message:""},u("session-error",v(t),{ttlMs:f})}}function ln(){an.innerHTML=`
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
              <div class="compact-brand-version">Version ${a(mt)}</div>
            </div>
          </div>
          <div id="discordArea" class="discord-area"></div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${dn()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content" aria-live="polite">
          ${un()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await hs()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await en(),await is()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await fs()}),rt(),hn(),jn(),Nn(),On(),gn(),Tn(),Ln(),Rn(),vn(),xs(),Z(),we(),Ar||(window.addEventListener("resize",()=>{ii(),ri()}),$a(),Ar=!0)}function dn(){return lt.map(t=>{const e=t.id===S;return`
        <button
          class="guildsync-tab${e?" active":""}"
          type="button"
          data-tab-id="${m(t.id)}"
          aria-selected="${e?"true":"false"}"
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${Ns(t.icon)}</span>
          <span class="guildsync-tab-label">${a(t.label)}</span>
        </button>
      `}).join("")}function Ns(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function un(){const t=lt.find(r=>r.id===S)||lt[0];let e="";return t.id==="discord-members"?e=Os():t.id==="eso-members"?e=qs():t.id==="more"?e=Io():t.id==="settings"?e=Qs():e=`
      <div class="guildsync-tab-panel" data-active-tab="${m(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${a(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${H?Lo():""}
    ${ne?wo():""}
    ${_e?Xs():""}
    ${Ee?io():""}
    ${Le?Ds():""}
  `}function Cs(){return Le||be||H||ne||_e||Ee||ue}function Bs(){return Le?!1:Ee?(zt(),!0):_e?(Ht(),!0):ne?(ve(),!0):H?(H=!1,l(),!0):be?(be=!1,l(),!0):ue?(ue=!1,l(),!0):!1}function $s(t){t.key==="Escape"&&Bs()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",$s,!0),window.guildSyncGlobalModalEscapeAttached=!0);function fn(t={}){return new Promise(e=>{De&&De(!1),Le=!0,rr={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},De=e,l()})}function dt(t=!1){const e=De;De=null,Le=!1,rr=null,e&&e(t===!0),l()}function Ds(){const t=rr||{};return`
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
          <button id="acceptGuildSyncConfirmButton" class="guildsync-confirm-button guildsync-confirm-accept ${m(t.confirmClass||"danger")}" type="button">${a(t.confirmLabel||"Confirm")}</button>
        </div>
      </div>
    </div>
  `}function Lr(t){var n,i,s,o;const e=(i=(n=t.target).closest)==null?void 0:i.call(n,"#cancelGuildSyncConfirmButton"),r=(o=(s=t.target).closest)==null?void 0:o.call(s,"#acceptGuildSyncConfirmButton");if(!(!e&&!r)){if(t.preventDefault(),t.stopPropagation(),e){dt(!1);return}r&&dt(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",Lr,!0),document.addEventListener("pointerup",Lr,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function xs(){if(!Le)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=n=>{n.preventDefault(),n.stopPropagation(),dt(!1)}),e&&(e.onclick=n=>{n.preventDefault(),n.stopPropagation(),dt(!0)});const r=document.querySelector(".guildsync-confirm-overlay");r&&(r.onclick=n=>{n.target===r&&(n.preventDefault(),n.stopPropagation())})}function hn(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(Cs())return;const e=t.dataset.tabId;!e||e===S||(S=e,l())})})}function l(t={}){const e=document.querySelector(".guildsync-tabs"),r=document.querySelector("#guildSyncTabContent");e&&(e.innerHTML=dn()),r&&(r.innerHTML=un()),hn(),jn(),Nn(),On(),gn(),Tn(),Ln(),Rn(),vn(),t.restoreDiscordSearchFocus&&aa(),t.restoreRosterSearchFocus&&ca(),S==="discord-members"&&(c==null?void 0:c.connected)&&x.length===0&&!Oe&&fr({silent:!0}),S==="eso-members"&&(c==null?void 0:c.connected)&&O.length===0&&!te&&!Er&&(Er=!0,We({silent:!0})),S==="more"&&(c==null?void 0:c.connected)&&F.length===0&&!me&&kt({silent:!0}),(S==="discord-members"||S==="eso-members"||S==="settings")&&(c==null?void 0:c.connected)&&R()&&w.length===0&&!B&&sr({silent:!0})}function Os(){const t=ia(),e=la(),r=Array.from(pe),n=Array.from(se);return`
    <div class="guildsync-tab-panel discord-member-panel" data-active-tab="discord-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Discord Member Data</h2>
          <p class="discord-data-subtitle">Manage and view Discord member information.</p>
        </div>
        <div class="discord-data-actions">
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${a(Kn(pt))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${Oe||it?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${it?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${m(st)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!pe.has(i)).map(i=>`<option value="${m(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All roles</span>':r.map(i=>ha(i)).join("")}
            </div>
          </div>

          <button id="clearDiscordFiltersButton" class="clear-discord-filters-button" type="button">Clear Filters</button>
          <div class="discord-results-count">${t.length} result${t.length===1?"":"s"}</div>
        </div>

        <div class="discord-filter-row discord-link-filter-row">
          <div class="discord-role-filter-wrap member-link-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordLinkStatusFilter">ESO Account Linked</label>
            <select id="discordLinkStatusFilter" class="discord-role-select">
              <option value="">Add ESO account linked filter...</option>
              ${nr.filter(i=>!se.has(i.id)).map(i=>`<option value="${m(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All ESO account link statuses</span>':n.map(i=>mn("discord",i)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${Ye("username","Username")}
                ${Ye("global_name","Global Name")}
                ${Ye("server_nickname","Server Nickname")}
                ${Ye("roles","Roles")}
                <th class="member-link-action-header">ESO Account Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>da(i)).join(""):ua()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `}function qs(){const t=Us(),e=Vs(),r=Array.from(ae),n=Array.from(ce);return`
    <div class="guildsync-tab-panel eso-roster-panel" data-active-tab="eso-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Guild Roster</h2>
          <p class="discord-data-subtitle">Current ESO roster imported from GuildSyncRoster.</p>
        </div>
        <div class="discord-data-actions">
          <span class="discord-last-refresh">Last Refresh: ${a(Bo(ot))}</span>
          <button id="openRosterHistoryButton" class="clear-discord-filters-button" type="button">Lookup Rank Historical Data</button>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${te?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${te?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${m(at)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!ae.has(i)).map(i=>`<option value="${m(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All ranks</span>':r.map(i=>Ws(i)).join("")}
            </div>
          </div>

          <button id="clearRosterFiltersButton" class="clear-discord-filters-button" type="button">Clear Filters</button>
          <div class="discord-results-count">${t.length} result${t.length===1?"":"s"}</div>
        </div>

        <div class="discord-filter-row discord-link-filter-row">
          <div class="discord-role-filter-wrap member-link-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterLinkStatusFilter">Discord Account Linked</label>
            <select id="rosterLinkStatusFilter" class="discord-role-select">
              <option value="">Add Discord account linked filter...</option>
              ${nr.filter(i=>!ce.has(i.id)).map(i=>`<option value="${m(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All Discord account link statuses</span>':n.map(i=>mn("roster",i)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                <th>Account Name</th>
                <th>Rank</th>
                <th>Joined</th>
                <th class="member-link-action-header">Discord Account Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(Is).join(""):Ps()}
            </tbody>
          </table>
        </div>
      </div>
      ${be?Ys():""}
    </div>
  `}function Is(t){const e=Fs(t.rank||"");return`
    <tr class="eso-roster-row"${e?` style="color: ${e};"`:""} data-eso-account-name="${m(t.account_name||"")}">
      <td>${a(t.account_name||"")}</td>
      <td>${ir(t.rank||"")}</td>
      <td>${a(yt(t.joined))}</td>
      <td class="member-link-action-cell">${Sn({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function Ps(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">${a(te?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function Fs(t){const e=String(t||"").trim(),r=hr(e);return vt(r==null?void 0:r.role_color)}function ir(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${a(e)}</span>`}function Gs(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":ir(e)}function Us(){const t=at.trim().toLowerCase();return O.filter(e=>{const r=String(e.rank||"").trim();if(ae.size>0&&!ae.has(r)||ce.size>0&&!ce.has(js(e)))return!1;if(!t)return!0;const n=yt(e.joined),i=Bn(e.joined);return[e.account_name,r,n,i,e.joined].map(o=>String(o||"").toLowerCase()).join(" ").includes(t)})}function Vs(){return Array.from(new Set(O.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function Ws(t){const e=hr(t),r=vt(e==null?void 0:e.role_color),n=pr(r),i=mr(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-roster-rank-filter="${m(t)}"
      style="${i}"
      title="Remove ${m(t)} filter"
    >
      <span>${a(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Hs(t){const e=nr.find(r=>r.id===t);return e?e.label:t}function mn(t,e){const r=t==="roster"?"roster":"discord",n=Hs(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${r}-link-status-filter="${m(e)}"
      title="Remove ${m(n)} link filter"
    >
      <span>${a(n)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function pn(t){if(!t)return"unlinked";const e=String(t.link_status||"").trim().toLowerCase(),r=String(t.link_method||"").trim().toLowerCase();return e==="candidate"||r==="fuzzy"?"fuzzy":e==="linked"?"linked":"unlinked"}function zs(t){return pn(ar(t==null?void 0:t.discord_id))}function js(t){return pn(or(t==null?void 0:t.account_name))}function Ys(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${m(Ie)}" />
        </div>

        ${W?`<div class="discord-data-error">${a(W)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Ks()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${re?`: ${a(re)}`:""}</div>
            ${Js()}
          </div>
        </div>
      </div>
    </div>
  `}function Ks(){return Q&&N.length===0?'<div class="roster-history-muted">Searching...</div>':N.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${N.map((t,e)=>`
        <button class="roster-history-match${e===D||t.account_name===re?" is-selected":""}" type="button" data-roster-history-account="${m(t.account_name)}">
          <span>${a(t.account_name)}</span>
          <strong>${a(t.rank||"")}</strong>
          ${e===D?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Js(){return re?Q&&J.length===0?'<div class="roster-history-muted">Loading history...</div>':J.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${J.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${a(Bn(t.timestamp))}</td>
              <td>${a(t.event_type||"")}</td>
              <td>${Gs(t.rank)}</td>
              <td>${a(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function Qs(){return`
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
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${j?"disabled":""}>
              ${j?"Running...":"Run"}
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
  `}function gn(){var t,e;S==="settings"&&((t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>yn()),(e=document.querySelector("#runMemberLinksReportButton"))==null||e.addEventListener("click",()=>no()))}function yn(){_e=!0,le="",l(),Mn()}function Ht(){_e=!1,le="",l()}function Xs(){const t=Zs(),e=eo(),r=Ae.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${j?"disabled":""}>${j?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(r))} total row${r===1?"":"s"}</span>
        </div>

        ${le?`<div class="discord-data-error">${a(le)}</div>`:""}

        <div class="report-results-content">
          ${j&&r===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!j&&r===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${r>0?Rr("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${r>0?Rr("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${a(kn())}</textarea>
      </div>
    </div>
  `}function Zs(){return Ae.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function eo(){return Ae.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function Rr(t,e,r,n){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${a(t)}</h4>
          <p>${a(e)}</p>
        </div>
        <span>${a(String(r.length))} row${r.length===1?"":"s"}</span>
      </div>
      ${r.length>0?to(r):`<div class="roster-history-muted report-section-empty">${a(n)}</div>`}
    </section>
  `}function to(t=Ae){return`
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
              <td>${ir(e.rank||"")}</td>
              <td>${a(yt(e.joined))}</td>
              <td>${a(bt(e.purchased_tickets||0))}</td>
              <td>${a(bn(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function bn(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function kn(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Discord Link"]];for(const e of Ae){const r=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([r,e.account_name||"",e.rank||"",yt(e.joined),bt(e.purchased_tickets||0),bn(e)])}return t.map(e=>e.map(In).join("	")).join(`
`)}async function ro(){const t=kn();if(await Pn(t)){u("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:f});return}const r=document.querySelector("#associateTicketReportTsv");r&&(r.focus(),r.select()),u("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:f})}function no(){Ee=!0,q="",l(),w.length===0&&!B&&sr({silent:!0})}function zt(){Ee=!1,l()}function io(){return`
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
          <span class="roster-history-muted">${a(String(w.length))} link/candidate row${w.length===1?"":"s"}</span>
        </div>

        ${q?`<div class="discord-data-error member-links-report-error">${a(q)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${ao()}
        </div>
      </div>
    </div>
  `}function vn(){var e,r,n;if(!Ee)return;(e=document.querySelector("#closeMemberLinksReportButton"))==null||e.addEventListener("click",zt),(r=document.querySelector("#refreshMemberLinksButton"))==null||r.addEventListener("click",()=>sr()),(n=document.querySelector("#runMemberAutoLinkButton"))==null||n.addEventListener("click",()=>co()),document.querySelectorAll("[data-accept-member-candidate]").forEach(i=>{i.addEventListener("click",()=>wn(i.dataset.acceptMemberCandidate||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(i=>{i.addEventListener("click",()=>lo(i.dataset.unlinkMemberLink||""))});const t=document.querySelector(".member-links-report-overlay");t&&t.addEventListener("click",i=>{i.target===t&&zt()})}function Mr(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),r=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();return e==="candidate"||r==="fuzzy"?0:e==="linked"?2:1}function so(t){return[...Array.isArray(t)?t:[]].sort((e,r)=>{const n=Mr(e)-Mr(r);if(n!==0)return n;const i=Number((r==null?void 0:r.match_confidence)||0)-Number((e==null?void 0:e.match_confidence)||0);return i!==0?i:String((e==null?void 0:e.eso_account_name)||"").localeCompare(String((r==null?void 0:r.eso_account_name)||""),void 0,{sensitivity:"base"})})}function oo(t){const e=jt(t);let r="";e==="Username"?r=(t==null?void 0:t.discord_username)||"":e==="Global Name"?r=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(r=(t==null?void 0:t.discord_server_nickname)||""),r||(r=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const n=e?` <span class="member-link-report-match-field">(${a(e)})</span>`:"";return`<span class="member-link-report-discord-name">${a(r)}</span>${n}`}function ao(){return B&&w.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(w)||w.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${so(w).map(e=>{var s;const r=String(e.link_status||"").trim().toLowerCase(),n=String(e.link_method||"").trim().toLowerCase(),i=oo(e);return`
              <tr>
                <td>${a(e.eso_account_name||"")}</td>
                <td>${i}</td>
                <td class="member-links-status-col">${a(r||"")}</td>
                <td class="member-links-method-col">${a(n||"")}${Number(e.locked||0)===1?" \u{1F512}":""}</td>
                <td class="member-links-action-col">
                  <div class="member-link-actions">
                    ${r==="candidate"?`<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${m(e.eso_account_name||"")}" aria-label="Accept candidate link" title="Accept candidate link">\u2713</button>`:""}
                    ${r==="linked"?`<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${m(e.eso_account_name||"")}" aria-label="Unlink member link" title="Unlink member link">\u{1F5D1}</button>`:""}
                  </div>
                </td>
                <td class="member-links-confidence-col">${a(String((s=e.match_confidence)!=null?s:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
    </div>
  `}async function sr(t={}){if(!(c!=null&&c.connected)||!g.logged_in){q="You must be logged in and connected to load member links.",l();return}B=!0,q="",t.silent||l();try{const e=await _("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");w=Array.isArray(e.links)?e.links:[]}catch(e){q=v(e)}finally{B=!1,l()}}async function co(){if(!(c!=null&&c.connected)||!g.logged_in){q="You must be logged in and connected to run auto-linking.",l();return}B=!0,q="",l();try{const t=await _("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");w=Array.isArray(t.links)?t.links:[],u("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:f})}catch(t){q=v(t)}finally{B=!1,l()}}async function wn(t){try{const e=await _("guildsync:accept-member-link-candidate",{esoAccountName:t},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to accept candidate.");w=Array.isArray(e.links)?e.links:w,u("member-link-accepted",e.message||"Candidate accepted.",{ttlMs:f})}catch(e){q=v(e)}l()}async function lo(t){if(!!await fn({title:"Unlink Member?",message:`Remove the link for ${t}? Exact auto-links will be blocked from relinking automatically; fuzzy/manual links will return to normal suggested matching.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const r=await _("guildsync:manual-unlink-member",{esoAccountName:t},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to unlink member.");w=Array.isArray(r.links)?r.links:w,u("member-link-unlinked",r.message||"Member link removed.",{ttlMs:f})}catch(r){q=v(r)}l()}}function Tr(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function or(t){const e=Tr(t);return e&&w.find(r=>Tr(r.eso_account_name)===e)||null}function ar(t){const e=String(t||"").trim();return e&&w.find(r=>String(r.discord_user_id||"").trim()===e)||null}function uo(t){const e=String(t||"").trim(),r=x.find(n=>String(n.discord_id||"").trim()===e);return r&&(r.server_nickname||r.global_name||r.username||r.discord_id)||e}function fo(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?ar(t.discordUserId):or(t.esoAccountName),n=String((r==null?void 0:r.link_status)||"").trim().toLowerCase(),i=Number((r==null?void 0:r.locked)||0)===1;return n==="linked"?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?r.eso_account_name:r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member"}${i?" (manual)":""}`}:n==="candidate"?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?r.eso_account_name:r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member"}`}:n==="blocked"||n==="unlinked"||i?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. Auto-linking is disabled, but manual relinking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function Sn(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,n=fo(t);return`
    <button
      class="member-link-status-dot member-link-status-${m(n.className)}"
      type="button"
      title="${m(n.title)}"
      aria-label="${m(n.label)}"
      data-open-member-link-dialog="${m(e)}"
      data-member-link-value="${m(r||"")}"
    ></button>
  `}function ho(){return k?k.mode==="discord-to-eso"?uo(k.discordUserId):k.esoAccountName||"":""}function gt(){return k?k.mode==="discord-to-eso"?ar(k.discordUserId):or(k.esoAccountName):null}function _n(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function jt(t){const e=_n((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const r=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(r.includes("discord_username")||r.includes("username"))return"Username";if(r.includes("discord_display_name")||r.includes("global")||r.includes("display"))return"Global Name";if(r.includes("discord_server_nickname")||r.includes("server")||r.includes("nickname"))return"Server Nickname";const n=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(n==="exact"||n==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",s=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const d of s){const h=mo(i,d.value);(!o||h>o.score)&&(o={...d,score:h})}if(o&&o.score>0)return o.field}return""}function Nr(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function mo(t,e){const r=Nr(t),n=Nr(e);if(!r||!n)return 0;if(r===n)return 100;if((r.includes(n)||n.includes(r))&&Math.min(r.length,n.length)>=4)return 88;const i=Math.abs(r.length-n.length),s=[...r].findIndex((d,h)=>d!==n[h]),o=s===-1?Math.min(r.length,n.length):s;return Math.max(0,Math.min(75,Math.round(o*10-i*3)))}function An(){const t=gt();return String((t==null?void 0:t.link_status)||"").trim().toLowerCase()==="linked"}function po(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),r=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();return e==="linked"&&r==="exact"}function go(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e==="candidate"?"suggested":e||"unlinked"}function yo(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function bo(){var d;const t=gt();if(!t)return'<div class="member-link-current-empty">No suggested link.</div>';const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",r=String(t.link_status||"").trim().toLowerCase(),n=r==="linked",i=r==="candidate",s=Number(t.locked||0)===1?"Manual / locked":"Auto-managed",o=n?`
      <button
        id="unlinkMemberLinkFromDialogButton"
        class="member-link-trash-button"
        type="button"
        aria-label="Unlink member link"
        title="Unlink member link"
      >\u{1F5D1}</button>
    `:i?`
        <button
          class="member-link-report-action member-link-report-accept"
          type="button"
          data-accept-dialog-member-candidate="${m(t.eso_account_name||"")}"
          aria-label="Accept suggested link"
          title="Accept suggested link"
        >\u2713</button>
      `:"";return`
    <div class="member-link-current-card">
      <div class="member-link-current-details">
        <div><span>ESO:</span> ${a(t.eso_account_name||"")}</div>
        <div><span>Discord:</span> ${a(e)}</div>
        <div><span>Status:</span> ${a(go(t.link_status))} \xB7 ${a(yo(t.link_method))} \xB7 ${a(String((d=t.match_confidence)!=null?d:""))}% \xB7 ${a(s)}</div>
        ${jt(t)?`<div><span>Matched:</span> Matched on ${a(jt(t))}</div>`:""}
      </div>
      ${o}
    </div>
  `}function ko(){if(ke)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(z)return`<div class="discord-data-error">${a(z)}</div>`;gt();const t=An(),e="",r=t?'<div class="member-link-options-muted">This member is already linked. Use the trash can to unlink before choosing a different match.</div>':"";if(!Array.isArray(de)||de.length===0)return`
      ${e}
      ${r}
      <div class="member-link-options-muted">No suggested matches found.</div>
    `;const n=[...de].sort((i,s)=>{const o=Number(s.confidence||0)-Number(i.confidence||0);return o!==0?o:Cr(i).localeCompare(Cr(s),void 0,{sensitivity:"base"})});return`
    ${e}
    ${r}
    <div class="member-link-option-list">
      ${n.map(i=>vo(i,{disabled:t})).join("")}
    </div>
  `}function Cr(t){return((k==null?void 0:k.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function vo(t,e={}){var y;const r=(k==null?void 0:k.mode)||"",n=r==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=_n(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),o=[r==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),d=r==="discord-to-eso"?t.account_name:t.discord_id,h=e.disabled===!0;return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${m(d||"")}" ${h?"disabled":""}>
      <span class="member-link-option-name">${a(n||"")}</span>
      <span class="member-link-option-subtitle">${a(o||"")}</span>
      <span class="member-link-option-confidence">${a(String((y=t.confidence)!=null?y:0))}%</span>
    </button>
  `}function wo(){const t=(k==null?void 0:k.mode)||"",e=ho(),r=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
            <h4>${An()?"Current Link":"Suggested Link"}</h4>
            ${bo()}
          </section>

          <section class="member-link-dialog-section">
            <h4>Suggested Matches</h4>
            ${ko()}
          </section>
        </div>

      </div>
    </div>
  `}async function En(t,e){if(!(c!=null&&c.connected)||!R()){u("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:f});return}ne=!0,k=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},de=[],ke=!0,z="",l();try{if(!Array.isArray(w)||w.length===0){const i=await _("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(w=Array.isArray(i.links)?i.links:[])}const n=await _("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load link suggestions.");de=Array.isArray(n.options)?n.options:[]}catch(r){z=v(r)}finally{ke=!1,l()}}function ve(){document.removeEventListener("keydown",Yt),ne=!1,k=null,de=[],ke=!1,z="",l()}function Yt(t){!ne||t.key==="Escape"&&(t.preventDefault(),ve())}async function So(t){if(!(!k||!t))try{const e=k.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:k.discordUserId}:{esoAccountName:k.esoAccountName,discordUserId:t},r=await _("guildsync:manual-link-member",e,3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to link members.");w=Array.isArray(r.links)?r.links:w,u("member-link-saved",r.message||"Member link saved.",{ttlMs:f}),ve()}catch(e){z=v(e),l()}}async function _o(t){await wn(t),ve()}async function Ao(){if(!!k){ke=!0,z="",l();try{const t=k.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:k.discordUserId}:{mode:"eso-to-discord",accountName:k.esoAccountName},e=await _("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");de=Array.isArray(e.options)?e.options:[]}catch(t){z=v(t)}finally{ke=!1,l()}}}async function Eo(){const t=gt(),e=k;if(!(!t&&!e||!await fn({title:"Unlink Member?",message:po(t)?"Remove this exact auto-link and block it from being automatically linked again? You can still manually relink later.":"Remove this link? Fuzzy and manual links will return to normal suggested matching and will not be blocked.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const n=(e==null?void 0:e.mode)==="discord-to-eso"?{discordUserId:e.discordUserId}:{esoAccountName:e.esoAccountName||(t==null?void 0:t.eso_account_name)},i=await _("guildsync:manual-unlink-member",n,3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");w=Array.isArray(i.links)?i.links:w,u("member-link-unlinked",i.message||"Member link removed.",{ttlMs:f}),await Ao()}catch(n){z=v(n),l()}}function Ln(){var e,r;if(!ne)return;document.removeEventListener("keydown",Yt),document.addEventListener("keydown",Yt),(e=document.querySelector("#closeMemberLinkDialogButton"))==null||e.addEventListener("click",ve),(r=document.querySelector("#unlinkMemberLinkFromDialogButton"))==null||r.addEventListener("click",Eo),document.querySelectorAll("[data-member-link-option-value]").forEach(n=>{n.addEventListener("click",()=>So(n.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(n=>{n.addEventListener("click",()=>_o(n.dataset.acceptDialogMemberCandidate||""))});const t=document.querySelector(".member-link-dialog-overlay");t&&t.addEventListener("click",n=>{n.target===t&&ve()})}function Rn(){var e,r,n;if(!_e)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",Ht),(r=document.querySelector("#rerunAssociateTicketReportButton"))==null||r.addEventListener("click",()=>Mn()),(n=document.querySelector("#copyAssociateTicketReportGridButton"))==null||n.addEventListener("click",()=>ro());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Ht()})}async function Mn(){if(!(c!=null&&c.connected)||!R()){le="You must be logged in and connected to run this report.",l();return}j=!0,le="",l();try{const t=await _("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Ae=Array.isArray(t.rows)?t.rows:[]}catch(t){le=v(t)}finally{j=!1,l()}}function Kt(){const t=String(Re||"").trim().toLowerCase();return t?O.filter(e=>String(e.account_name||"").trim()).filter(e=>String(e.account_name||"").toLowerCase().includes(t)).slice().sort((e,r)=>{const n=String(e.account_name||"").toLowerCase(),i=String(r.account_name||"").toLowerCase(),s=n.startsWith(t)?0:1,o=i.startsWith(t)?0:1;return s!==o?s-o:n.localeCompare(i)}).slice(0,20):[]}function Br(t){const e=String(t||"").trim();M.accountName=e,Re=e,V="",l(),X("manualTicketAccountSearchInput")}function X(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const r=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(r,r)},0)}function Lo(){const t=Kt(),e=String(M.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Bi-Weekly Tickets</h3>
            <p>Add free/manual raffle tickets such as FFTG. These do not count as purchased tickets.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${V?`<div class="discord-data-error">${a(V)}</div>`:""}

        <div class="manual-ticket-form">
          <label class="manual-ticket-member-field">
            <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${m(Re)}" autocomplete="off" />
          </label>

          ${e?`<div class="roster-history-muted">Selected: ${a(e)}</div>`:""}

          <div class="roster-history-match-list manual-ticket-match-list">
            ${t.length===0?'<div class="roster-history-muted">No matching names</div>':t.map((r,n)=>`
                <button class="roster-history-match${n===U||r.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${m(r.account_name)}">
                  <span>${a(r.account_name)}</span>
                  <strong>${a(r.rank||"")}</strong>
                  ${n===U?"<small>Enter</small>":""}
                </button>
              `).join("")}
          </div>

          <div class="manual-ticket-entry-row">
            <label class="manual-ticket-note-field">
              <textarea id="manualTicketNoteInput" class="discord-search-input manual-ticket-note-input" rows="4" placeholder="Enter a reason such as FFTG">${a(M.note)}</textarea>
            </label>
            <label class="manual-ticket-count-field">
              <div class="manual-ticket-number-wrap">
                <input id="manualTicketCountInput" class="discord-search-input manual-ticket-count-input" type="number" min="1" step="1" inputmode="numeric" placeholder="# Tickets" value="${m(M.tickets)}" />
                <div class="manual-ticket-number-buttons" aria-hidden="true">
                  <button id="manualTicketCountUpButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2303</button>
                  <button id="manualTicketCountDownButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2304</button>
                </div>
              </div>
            </label>
          </div>
          <div class="manual-ticket-actions">
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${ct?"disabled":""}>${ct?"Saving...":"Add Manual Tickets"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Tn(){var i,s,o,d,h;if(!H)return;(i=document.querySelector("#closeManualBiweeklyTicketButton"))==null||i.addEventListener("click",()=>{H=!1,l()});const t=document.querySelector("#manualTicketAccountSearchInput");t&&(t.addEventListener("input",y=>{Re=y.target.value||"",M.accountName="",U=Kt().length>0?0:-1,l(),X("manualTicketAccountSearchInput")}),t.addEventListener("keydown",y=>{const b=Kt();if(y.key==="ArrowDown"||y.key==="ArrowUp"){if(b.length===0)return;y.preventDefault();const I=y.key==="ArrowDown"?1:-1;U=((U<0?0:U)+I+b.length)%b.length,l(),X("manualTicketAccountSearchInput");return}if(y.key!=="Enter")return;y.preventDefault();const E=b[U>=0?U:0];E!=null&&E.account_name&&Br(E.account_name)})),document.querySelectorAll("[data-manual-ticket-account]").forEach(y=>{y.addEventListener("click",()=>{Br(y.dataset.manualTicketAccount||"")})}),(s=document.querySelector("#manualTicketNoteInput"))==null||s.addEventListener("input",y=>{M.note=y.target.value||""});const e=document.querySelector("#manualTicketCountInput");e==null||e.addEventListener("input",y=>{const b=String(y.target.value||"").replace(/\D/g,"");y.target.value!==b&&(y.target.value=b),M.tickets=b});const r=y=>{const b=Number(M.tickets)||0,E=Math.max(1,b+y);M.tickets=String(E),e&&(e.value=M.tickets,e.focus())};(o=document.querySelector("#manualTicketCountUpButton"))==null||o.addEventListener("click",()=>r(1)),(d=document.querySelector("#manualTicketCountDownButton"))==null||d.addEventListener("click",()=>r(-1)),(h=document.querySelector("#saveManualBiweeklyTicketButton"))==null||h.addEventListener("click",()=>Ro());const n=document.querySelector(".roster-history-overlay");n&&n.addEventListener("click",y=>{y.target===n&&(H=!1,l())})}async function Ro(){const t=String(M.accountName||"").trim(),e=String(M.note||"").trim(),r=Number(M.tickets);if(!t){V="Choose a guild member.",l();return}if(!e){V="Enter a reason or note.",l();return}if(!Number.isFinite(r)||r<=0){V="Enter the number of tickets to add.",l();return}ct=!0,V="",l();try{const n=await _("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,tickets:Math.floor(r)},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to add manual ticket entry.");H=!1,M={accountName:"",note:"",tickets:""},Re="",U=-1,await kt({silent:!0}),u("manual-ticket-added",n.message||"Manual ticket entry added.",{ttlMs:f})}catch(n){V=v(n)}finally{ct=!1,l()}}function Nn(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>We());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{be=!0,W="",l()});const r=document.querySelector("#rosterMemberSearch");r&&r.addEventListener("input",o=>{at=o.target.value||"",Ut=o.target.selectionStart,Vt=o.target.selectionEnd,l({restoreRosterSearchFocus:!0})});const n=document.querySelector("#rosterRankFilter");n&&n.addEventListener("change",o=>{const d=String(o.target.value||"").trim();d&&(ae.add(d),l())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const d=o.dataset.removeRosterRankFilter||"";ae.delete(d),l()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",o=>{const d=String(o.target.value||"").trim();d&&(ce.add(d),l())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const d=o.dataset.removeRosterLinkStatusFilter||"";ce.delete(d),l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>En(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{at="",ae.clear(),ce.clear(),l()}),Mo()}function Mo(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{be=!1,l()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",r=>{if(Ie=r.target.value||"",D=-1,!Ie.trim()){clearTimeout(Ct),W="",N=[],re="",J=[],Q=!1,l(),X("rosterHistorySearchInput");return}clearTimeout(Ct),Ct=setTimeout(()=>{To({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(N.length===0)return;r.preventDefault();const i=r.key==="ArrowDown"?1:-1;D=((D<0?0:D)+i+N.length)%N.length,l(),X("rosterHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=N[D>=0?D:0];n!=null&&n.account_name&&$r(n.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(r=>{r.addEventListener("click",()=>{$r(r.dataset.rosterHistoryAccount||"")})})}async function To(t={}){const e=Ie.trim();if(!e){W="",N=[],D=-1,re="",J=[],Q=!1,l(),t.keepFocus&&X("rosterHistorySearchInput");return}Q=!0,W="",N=[],D=-1,re="",J=[],l(),t.keepFocus&&X("rosterHistorySearchInput");try{const r=await _("guildsync:request-roster-rank-history",{query:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search roster rank history.");N=No(r.matches),D=N.length>0?0:-1}catch(r){W=v(r)}finally{Q=!1,l(),t.keepFocus&&X("rosterHistorySearchInput")}}async function $r(t,e={}){const r=String(t||"").trim();if(!!r){re=r,Ie=r,J=[],Q=!0,W="",l();try{const n=await _("guildsync:request-roster-stream-history",{account_name:r},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster stream history.");J=Co(n.events)}catch(n){W=v(n)}finally{Q=!1,e.keepLoading||l()}}}function No(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function Co(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(n=(r=e.timestamp)!=null?r:e.timestampS)!=null?n:"",officer:String(e.officer||"").trim()}}):[]}function Cn(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(r=e.joined)!=null?r:""}}).sort((e,r)=>e.account_name.localeCompare(r.account_name)):[]}function Bo(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function yt(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function Bn(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function $o(t={}){O=Cn(t.members),ot=t.last_refresh||new Date().toISOString(),S==="eso-members"&&l(),u("roster-data-updated",`Roster data updated. Loaded ${O.length} member record${O.length===1?"":"s"}.`,{ttlMs:f})}async function We(t={}){if(!!(c!=null&&c.connected)){te=!0,l();try{const e=await _("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");O=Cn(e.members),ot=e.last_refresh||ot,t.silent||u("roster-data-loaded",`Loaded ${O.length} roster member${O.length===1?"":"s"}.`,{ttlMs:f})}catch(e){u("roster-data-error",v(e),{ttlMs:f})}finally{te=!1,l()}}}async function Do(t={}){var e;if(!!R()){if(!(c!=null&&c.connected)){u("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:f});return}te=!0,l();try{const r=await os(t);if(!(r!=null&&r.ok)){u("roster-data-pending",(r==null?void 0:r.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:f});return}const n={local_upload_id:$n(),authenticated_username:Me(),authenticated_discord_user_id:((e=g==null?void 0:g.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await xn(n)}catch(i){throw xo(n),i}await We({silent:!0})}catch(r){u("roster-data-error",v(r),{ttlMs:f})}finally{te=!1,l()}}}function $n(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function cr(){try{const t=window.localStorage.getItem(rn),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Dn(t){window.localStorage.setItem(rn,JSON.stringify(Array.isArray(t)?t:[]))}function xo(t){const e=String((t==null?void 0:t.local_upload_id)||$n()),r=cr().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Dn(r),u("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:f})}function Oo(t){const e=cr().filter(r=>(r==null?void 0:r.local_upload_id)!==t);Dn(e)}async function qo(){if(Nt||!(c!=null&&c.connected)||!R())return;const t=cr();if(t.length!==0){Nt=!0;try{for(const e of t){if(!(c!=null&&c.connected)||!R())return;await xn(e),Oo(e.local_upload_id)}}catch(e){u("roster-data-pending-error",`Pending roster upload retry failed: ${v(e)}`,{ttlMs:f})}finally{Nt=!1}}}async function xn(t){if(!(c!=null&&c.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await _("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const r=await cs(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return u("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:f}),e}function Io(){const t=Jt(C),e=zo(t),r=C!=="other";return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <span class="discord-last-refresh">Last Refresh: ${a(Kn(cn))}</span>
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
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${me?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${me?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${Bt("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${Bt("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${Bt("other","?","Other","All other deposits")}
        </div>

        ${Uo(C)}

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
              ${t.length>0?t.map(n=>jo(n,r)).join(""):Yo(r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${a(Gn(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${r?`<div>Total Tickets Awarded: <strong>${a(bt(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${ue?Po(Jt(Ve)):""}
    </div>
  `}function Po(t){return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${a(ge(Ve))} Deposits</h3>
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
              ${t.length>0?t.map(e=>Fo(e)).join(""):Go()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${a(qn(t))}</textarea>
      </div>
    </div>
  `}function Fo(t){return`
    <tr>
      <td>${a(t.displayName||"")}</td>
      <td>${a(String(Number(t.amount)||0))}</td>
      <td>${a(String(Number(t.ticketAmount)||0))}</td>
      <td>${a(t.note||"")}</td>
    </tr>
  `}function Go(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${a(ge(Ve))}.</td>
    </tr>
  `}function Uo(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=Fn(t),r=lr(t),n=r<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${m(ge(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${a(ge(t))} Raffle Period ${r===0?"(Current)":`(${Math.abs(r)} period${Math.abs(r)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${a(tt(e.salesStart))} through ${a(tt(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${a(tt(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${n?"":"disabled"} aria-label="Next ${m(ge(t))} raffle period">\u203A</button>
    </div>
  `}function Bt(t,e,r,n){const i=C===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${m(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${a(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${a(r)}</span>
        <span class="bank-section-subtitle">${a(n)}</span>
      </span>
    </button>
  `}function On(){if(S!=="more")return;document.querySelectorAll("[data-bank-section]").forEach(s=>{s.addEventListener("click",()=>{C=s.dataset.bankSection||"biweekly",l()})}),document.querySelectorAll("[data-bank-export-section]").forEach(s=>{s.addEventListener("click",()=>{Ve=(s.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",ue=!0,l()})}),document.querySelectorAll("[data-bank-period-move]").forEach(s=>{s.addEventListener("click",()=>{Ho(s.dataset.bankPeriodMove||""),l()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{ue=!1,l()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>Vo());const r=document.querySelector(".bank-export-overlay");r&&r.addEventListener("click",s=>{s.target===r&&(ue=!1,l())});const n=document.querySelector("#openManualBiweeklyTicketButton");n&&n.addEventListener("click",async()=>{H=!0,V="",Re=M.accountName||"",O.length===0&&(c==null?void 0:c.connected)&&R()&&await We({silent:!0}),l()});const i=document.querySelector("#refreshBankingDataButton");i&&i.addEventListener("click",()=>Vn({key:"banking"}))}function qn(t){const e=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const r of t)e.push([r.displayName||"",String(Number(r.amount)||0),String(Number(r.ticketAmount)||0),r.note||""]);return e.map(r=>r.map(In).join("	")).join(`
`)}function In(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function Pn(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const r=document.createElement("textarea");r.value=e,r.setAttribute("readonly","readonly"),r.style.position="fixed",r.style.left="0",r.style.top="0",r.style.width="1px",r.style.height="1px",r.style.opacity="0",r.style.pointerEvents="none",r.style.zIndex="-1",document.body.appendChild(r),r.focus(),r.select(),r.setSelectionRange(0,r.value.length);let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r)}return n}async function Vo(){const t=Jt(Ve),e=qn(t);if(await Pn(e)){u("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:f});return}const n=document.querySelector("#bankingExportTsv");n&&(n.focus(),n.select()),u("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:f})}function Jt(t){return F.filter(e=>e.type===t).filter(e=>Wo(t,e)).sort((e,r)=>(Number(r.time)||0)-(Number(e.time)||0))}function Wo(t,e){if(t==="other")return!0;const r=Number(e==null?void 0:e.time)||0;if(r<=0)return!1;const n=Fn(t);return r>=n.salesStart&&r<=n.salesEnd}function lr(t){return Number(Wt[t])||0}function Ho(t){if(C!=="biweekly"&&C!=="monthly")return;const e=lr(C);if(t==="previous"){Wt[C]=e-1;return}t==="next"&&e<0&&(Wt[C]=e+1)}function Fn(t){const e=Math.floor(Date.now()/1e3),r=t==="monthly",n=r?Ls:Es;let i=r?As:_s;for(;i-n>e;)i-=n;for(;i<e;)i+=n;return i+=lr(t)*n,{salesStart:i-n+1,salesEnd:i,raffleTime:i+Rs}}function zo(t){return t.reduce((e,r)=>(e.amount+=Number(r.amount)||0,e.tickets+=Number(r.ticketAmount)||0,e),{amount:0,tickets:0})}function jo(t,e=!0){return`
    <tr>
      <td>${a(t.note||t.eventId||"")}</td>
      <td>${a(tt(t.time))}</td>
      <td>${a(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${a(Gn(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td><strong class="bank-ticket-amount">${a(bt(t.ticketAmount))}</strong></td>`:""}
    </tr>
  `}function Yo(t=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?"5":"4"}">No ${a(ge(C))} deposits found for this ${C==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function ge(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function tt(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Gn(t){return(Number(t)||0).toLocaleString()}function bt(t){return(Number(t)||0).toLocaleString()}function dr(t){return Array.isArray(t)?t.map(e=>{var n,i,s,o,d,h,y,b,E,I,Et,br;const r=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:r==="monthly"||r==="biweekly"||r==="other"?r:"other",eventId:String((i=(n=e==null?void 0:e.eventId)!=null?n:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((o=(s=e==null?void 0:e.time)!=null?s:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((h=(d=e==null?void 0:e.displayName)!=null?d:e==null?void 0:e.display_name)!=null?h:"").trim(),amount:Number((y=e==null?void 0:e.amount)!=null?y:0)||0,ticketAmount:Number((E=(b=e==null?void 0:e.ticketAmount)!=null?b:e==null?void 0:e.ticket_amount)!=null?E:0)||0,note:String((I=e==null?void 0:e.note)!=null?I:"").trim(),dataSource:String((br=(Et=e==null?void 0:e.dataSource)!=null?Et:e==null?void 0:e.data_source)!=null?br:"").trim()}}):[]}function Ko(t){const e=new Map;for(const r of F)r.eventId&&e.set(r.eventId,r);for(const r of t)!r.eventId||e.set(r.eventId,r);F=Array.from(e.values()).sort((r,n)=>(Number(n.time)||0)-(Number(r.time)||0))}function Un(){cn=new Date().toISOString()}async function Jo(t={}){!(t!=null&&t.ok)||(F=dr(t.entries),Un(),S==="more"&&l(),u("banking-data-updated",`Banking data updated. Loaded ${F.length} deposit record${F.length===1?"":"s"}.`,{ttlMs:f}))}async function kt(t={}){const e=Boolean(t.silent);if(!(c!=null&&c.connected)){e||u("banking-data-error","GuildSync websocket is not connected.",{ttlMs:f});return}if(!!R()){me=!0,l();try{const r=await _("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");F=dr(r.entries),Un(),e||u("banking-data",`Loaded ${F.length} banking deposit record${F.length===1?"":"s"}.`,{ttlMs:f})}catch(r){e||u("banking-data-error",v(r),{ttlMs:f})}finally{me=!1,l()}}}async function Vn(t={}){var e,r;if(!!R()){if(!(c!=null&&c.connected)){u("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:f});return}me=!0,l();try{const n=await ss(t);if(!(n!=null&&n.ok)){u("banking-data-pending",(n==null?void 0:n.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:f});return}const i=dr((e=n==null?void 0:n.data)==null?void 0:e.entries);Ko(i);const s=new Date().toISOString(),o={local_upload_id:Wn(),authenticated_username:Me(),authenticated_discord_user_id:((r=g==null?void 0:g.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:s,data:n.data||{}};try{await zn(o)}catch(d){throw Qo(o),d}await kt({silent:!0})}catch(n){u("banking-data-error",v(n),{ttlMs:f})}finally{me=!1,l()}}}function Wn(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function ur(){try{const t=window.localStorage.getItem(tn),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Hn(t){window.localStorage.setItem(tn,JSON.stringify(Array.isArray(t)?t:[]))}function Qo(t){const e=String((t==null?void 0:t.local_upload_id)||Wn()),r=ur().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Hn(r),u("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:f})}function Xo(t){const e=ur().filter(r=>(r==null?void 0:r.local_upload_id)!==t);Hn(e)}async function Zo(){if(Tt||!(c!=null&&c.connected)||!R())return;const t=ur();if(t.length!==0){Tt=!0;try{for(const e of t){if(!(c!=null&&c.connected)||!R())return;await zn(e),Xo(e.local_upload_id)}}catch(e){u("banking-data-pending-error",`Pending banking upload retry failed: ${v(e)}`,{ttlMs:f})}finally{Tt=!1}}}async function zn(t){if(!(c!=null&&c.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await _("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const r=await as(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return u("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:f}),e}function jn(){if(S!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>ea());const e=document.querySelector("#discordMemberSearch");e&&e.addEventListener("input",s=>{st=s.target.value||"",Ft=s.target.selectionStart,Gt=s.target.selectionEnd,l({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(s=>{s.addEventListener("click",()=>{oa(s.dataset.discordSortColumn||"username")})});const r=document.querySelector("#discordRoleFilter");r&&r.addEventListener("change",s=>{const o=String(s.target.value||"").trim();o&&(pe.add(o),l())}),document.querySelectorAll("[data-remove-role-filter]").forEach(s=>{s.addEventListener("click",()=>{const o=s.dataset.removeRoleFilter||"";pe.delete(o),l()})});const n=document.querySelector("#discordLinkStatusFilter");n&&n.addEventListener("change",s=>{const o=String(s.target.value||"").trim();o&&(se.add(o),l())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(s=>{s.addEventListener("click",()=>{const o=s.dataset.removeDiscordLinkStatusFilter||"";se.delete(o),l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(s=>{s.addEventListener("click",()=>En(s.dataset.openMemberLinkDialog||"",s.dataset.memberLinkValue||""))});const i=document.querySelector("#clearDiscordFiltersButton");i&&i.addEventListener("click",()=>{st="",pe.clear(),se.clear(),l()})}async function ea(){var t,e;if(!(c!=null&&c.connected)){u("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:f});return}it=!0,l(),u("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const r=await _("guildsync:request-discord-data-refresh",{requested_by:((t=g==null?void 0:g.user)==null?void 0:t.display_name)||((e=g==null?void 0:g.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to request Discord data refresh.");u("discord-refresh-requested",r.message||"Discord data refresh completed.",{ttlMs:f}),await fr({silent:!0})}catch(r){u("discord-refresh-error",v(r),{ttlMs:f})}finally{it=!1,l()}}async function ta(){if(!(c!=null&&c.connected))return;const t=await _("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(pt=t.value||null)}async function ra(t={}){if(!!(t!=null&&t.ok)){x=Yn(t.members),t.last_refresh&&(pt=t.last_refresh);try{await ta()}catch{}S==="discord-members"&&l(),u("discord-data-updated",`Discord data updated. Loaded ${x.length} member record${x.length===1?"":"s"}.`,{ttlMs:f})}}async function fr(t={}){const e=Boolean(t.silent);if(!(c!=null&&c.connected)){u("discord-data-error","GuildSync websocket is not connected.",{ttlMs:f});return}Oe=!0,l();try{const[r,n]=await Promise.all([_("guildsync:request-discord-data-date",{}),_("guildsync:request-discord-member-dataJSON",{})]);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord refresh date.");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord member data.");pt=r.value||null,x=Yn(n.members),e||u("discord-data",`Loaded ${x.length} Discord member record${x.length===1?"":"s"}.`,{ttlMs:f})}catch(r){u("discord-data-error",v(r),{ttlMs:f})}finally{Oe=!1,l()}}function _(t,e={},r=3e4){return new Promise((n,i)=>{if(!(c!=null&&c.connected)){i(new Error("GuildSync websocket is not connected."));return}let s=!1;const o=window.setTimeout(()=>{s||(s=!0,i(new Error(`${t} timed out.`)))},r);c.emit(t,e,d=>{s||(s=!0,window.clearTimeout(o),n(d))})})}function Yn(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(na).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,r)=>Pe(e).localeCompare(Pe(r),void 0,{sensitivity:"base"})):[]}function na(t){var i,s;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),r=String(t.role_name||t.name||"Unnamed Role").trim(),n=(s=(i=t.role_color)!=null?i:t.color)!=null?s:null;return{role_id:e,role_name:r||"Unnamed Role",role_color:n}}function ia(){const t=st.trim().toLowerCase(),e=Array.from(pe),r=x.filter(n=>{if(t&&![n.username,n.global_name,n.server_nickname,n.discord_id,...n.roles.map(s=>s.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(n.roles.map(s=>s.role_name));if(!e.every(s=>i.has(s)))return!1}return!(se.size>0&&!se.has(zs(n)))});return sa(r)}function sa(t){const e=oe==="desc"?-1:1;return[...t].sort((r,n)=>{const i=Dr(r,qe),s=Dr(n,qe),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:Pe(r).localeCompare(Pe(n),void 0,{sensitivity:"base",numeric:!0})})}function Dr(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(r=>r.role_name||"").filter(Boolean).sort((r,n)=>r.localeCompare(n,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function oa(t){const r=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";qe===r?oe=oe==="asc"?"desc":"asc":(qe=r,oe="asc"),l()}function Ye(t,e){const r=qe===t,n=oe==="asc"?"ascending":"descending",i=r?oe==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${r?n:"none"}">
      <button
        class="discord-sort-header${r?" active":""}"
        type="button"
        data-discord-sort-column="${m(t)}"
        title="Sort ${m(e)} ${r&&oe==="asc"?"descending":"ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function aa(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(Ft)?Ft:t.value.length,r=Number.isInteger(Gt)?Gt:e;t.setSelectionRange(e,r)}}function ca(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(Ut)?Ut:t.value.length,r=Number.isInteger(Vt)?Vt:e;t.setSelectionRange(e,r)}}function la(){const t=new Set;for(const e of x)for(const r of e.roles)r.role_name&&t.add(r.role_name);return Array.from(t).sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function da(t){const e=ma(t),r=Pe(t),n=t.roles||[];return`
    <tr data-discord-user-id="${m(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${m(e)}" alt="${m(r)}" />`:`<span>${a(ni(r))}</span>`}
          </div>
          <span>${a(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${a(t.global_name||"")}</td>
      <td>${a(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${n.length>0?n.map(i=>fa(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${Sn({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function ua(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${a(Oe?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function fa(t){const e=vt(t.role_color),r=pr(e),n=mr(e,r);return`
    <span
      class="discord-role-badge"
      title="${m(t.role_name)}"
      style="${n}"
    >${a(t.role_name)}</span>
  `}function ha(t){const e=hr(t),r=vt(e==null?void 0:e.role_color),n=pr(r),i=mr(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-role-filter="${m(t)}"
      style="${i}"
      title="Remove ${m(t)} filter"
    >
      <span>${a(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function hr(t){for(const e of x){const r=e.roles.find(n=>n.role_name===t);if(r)return r}return null}function vt(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function mr(t,e){return[`--role-fill-top: ${xr(t,"#ffffff",.16)}`,`--role-fill-bottom: ${xr(t,"#000000",.1)}`,`--role-fill-glow: ${Or(t,.28)}`,`--role-fill-edge: ${Or(t,.46)}`,`color: ${e}`].join("; ")}function xr(t,e,r){const n=Ke(t)||Ke("#64748b"),i=Ke(e)||Ke("#ffffff"),s=Math.max(0,Math.min(1,Number(r)||0)),o=Math.round(n.red+(i.red-n.red)*s),d=Math.round(n.green+(i.green-n.green)*s),h=Math.round(n.blue+(i.blue-n.blue)*s);return`#${$t(o)}${$t(d)}${$t(h)}`}function Ke(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function $t(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function Or(t,e){const r=String(t||"#64748b").replace("#",""),n=/^[0-9a-f]{6}$/i.test(r)?r:"64748b",i=parseInt(n.slice(0,2),16),s=parseInt(n.slice(2,4),16),o=parseInt(n.slice(4,6),16);return`rgba(${i}, ${s}, ${o}, ${e})`}function pr(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const r=parseInt(e.slice(0,2),16),n=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(r*299+n*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function ma(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!r)return"";const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function Pe(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function Kn(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function rt(){const t=document.querySelector("#discordArea");if(!!t){if(He(!1),R()){const e=g.user||{},r=Me(),n=Ca(e),i=ni(r);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${n?`<img src="${m(n)}" alt="${m(r)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${a(i)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const s=document.querySelector("#discordAvatarButton");s.addEventListener("contextmenu",o=>{o.preventDefault(),qr()}),s.addEventListener("click",()=>{qr()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",ka)}}function qr(){if(Ue){He();return}ba()}function pa(t=K){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],r=String((t==null?void 0:t.directory)||"").trim(),n=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const s=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),o=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),d=String((i==null?void 0:i.filePath)||(r?`${r}\\${o}`:o)).trim(),h=(i==null?void 0:i.enabled)!==!1,y=n&&h,b=`profileFileWatchToggle-${ya(s||o)}`;return`
          <label class="profile-filewatch-item ${h?"enabled":"disabled"}" title="${m(d)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${a(o)}</span>
              <span class="profile-filewatch-state">${y?"Watching":h?"On":"Off"}</span>
            </span>
            <input
              id="${m(b)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${m(s)}"
              ${h?"checked":""}
              aria-label="Turn file watch ${h?"off":"on"} for ${m(o)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function gr(){var n,i,s;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=Me(),r=((n=g.user)==null?void 0:n.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${a(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${a(Ba(r))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${a(mt)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${K!=null&&K.watching?"Active":"Stopped"}</span>
        </div>
        ${pa()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(i=document.querySelector("#discordLogoutButton"))==null||i.addEventListener("click",va),(s=document.querySelector("#associateTicketReportButton"))==null||s.addEventListener("click",()=>{He(!1),yn()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",ga)})}async function Jn(){try{K=await ls(),Ue&&gr()}catch(t){u("file-watcher-error",v(t),{ttlMs:f})}}async function ga(t){var n;const e=t.currentTarget,r=String(((n=e==null?void 0:e.dataset)==null?void 0:n.filewatchKey)||"").trim();if(!!r)try{e.disabled=!0,K=await ms(r,e.checked),await ye({silent:!0}),Ue&&gr()}catch(i){u("file-watcher-error",v(i),{ttlMs:f}),await Jn()}}function ya(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function ba(){const t=document.querySelector("#discordProfileMenu");!t||(gr(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),Ue=!0,Jn(),setTimeout(()=>{window.addEventListener("click",Qn),window.addEventListener("keydown",Xn)},0))}function He(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),Ue=!1,t&&(window.removeEventListener("click",Qn),window.removeEventListener("keydown",Xn))}function Qn(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&He()}function Xn(t){t.key==="Escape"&&He()}async function ka(){try{u("auth","Opening Discord login...",{ttlMs:f});const t=await gs();t!=null&&t.status_message&&u("auth",t.status_message,{ttlMs:f}),Z()}catch(t){u("auth-error",v(t),{ttlMs:f}),Z()}}async function va(){try{g=await us(),u("auth",g.status_message||"Logged out.",{ttlMs:f}),ln(),xe(),await ye()}catch(t){u("auth-error",v(t),{ttlMs:f}),Z()}}function xe(){const t=g.socket_url||"https://guildsync.perdues.me";wa(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};g!=null&&g.token&&(e.auth={token:g.token}),c=Ze(t,e),c.on("connect",()=>{Z(),Zn(),S==="discord-members"&&fr({silent:!0}),S==="eso-members"&&We({silent:!0}),S==="more"&&kt({silent:!0}),Zo(),qo(),Sa()}),c.on("connect_error",()=>{Z(),ut()}),c.on("disconnect",()=>{Z(),ut()}),c.on("guildsync:version-status",r=>{_a(r)}),c.on("guildsync:discord-member-data-updated",r=>{ra(r)}),c.on("guildsync:banking-data-updated",r=>{Jo(r)}),c.on("guildsync:roster-data-updated",r=>{$o(r)}),c.on("guildsync:member-links-updated",(r={})=>{Array.isArray(r.links)&&(w=r.links,(S==="discord-members"||S==="eso-members"||S==="settings"||ne)&&l())}),c.on("guildsync:discord-refresh-status",(r={})=>{const n=String(r.message||"").trim();n&&u("discord-refresh-status",n,{ttlMs:f})})}function wa(t=!0){ut(),c&&(c.disconnect(),c=null),t&&Z()}function Zn(){!(c!=null&&c.connected)||c.emit("guildsync:client-version",{version:mt})}function Sa(){ut(),et=window.setInterval(()=>{Zn()},vs)}function ut(){et&&(window.clearInterval(et),et=null)}function _a(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown";u("version",`GuildSync is out of date. Current version: ${mt}. Latest version: ${e}.`);return}yr("version")}}function u(t,e,r={}){const n=String(t||"").trim(),i=String(e||"").trim();if(!(!n||!i)){if(ee.set(n,i),ie.has(n)&&(window.clearTimeout(ie.get(n)),ie.delete(n)),r.ttlMs&&Number(r.ttlMs)>0){const s=window.setTimeout(()=>{yr(n)},Number(r.ttlMs));ie.set(n,s)}we()}}function yr(t){const e=String(t||"").trim();if(!!e){if(ee.delete(e),ie.has(e)&&(window.clearTimeout(ie.get(e)),ie.delete(e)),L===e){_t(()=>{L="",we()});return}we()}}function we(){const t=wt();if(t.length===0){fe?_t(Fe):Fe();return}!fe&&!he&&St(t[0])}function wt(){return Array.from(ee.keys())}function ei(){const t=wt();if(t.length===0)return"";if(!L)return t[0];const e=t.indexOf(L);return e<0?t[0]:t[(e+1)%t.length]}function St(t){const e=document.querySelector("#statusMessageTrack");if(!e||!ee.has(t)){Fe();return}At();const r=ee.get(t);L=t,fe=!0,he=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=r,e.style.setProperty("--message-fade-duration",`${sn}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",he=!1,Aa()},{once:!0})})}function Aa(){const t=wt();if(!L||!ee.has(L)){we();return}if(t.length<=1){Ir(!1);return}Ir(!0)}function Ir(t){const e=document.querySelector("#statusMessageViewport"),r=document.querySelector("#statusMessageTrack");if(!e||!r)return;const n=Math.max(0,r.scrollWidth-e.clientWidth);if(n<=0){t&&Ge(()=>{_t(()=>{const i=ei();L="",i?St(i):Fe()})},nn);return}Ge(()=>{ti(n,t)},on)}function ti(t,e){const r=document.querySelector("#statusMessageTrack");if(!r||!L||!ee.has(L))return;const n=Math.max(4,Math.ceil(t/Ss));r.style.setProperty("--long-scroll-distance",`${t}px`),r.style.setProperty("--long-scroll-duration",`${n}s`),r.classList.add("long-scroll"),r.addEventListener("animationend",()=>{if(r.classList.remove("long-scroll"),r.style.transform=`translateX(-${t}px) translateY(-50%)`,e){Ge(()=>{_t(()=>{const i=ei();L="",i?St(i):Fe()})},nn);return}Ge(()=>{Ea()},ws)},{once:!0})}function Ea(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!L||!ee.has(L))return;if(wt().length!==1){we();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const n=Math.max(0,e.scrollWidth-t.clientWidth);n<=0||Ge(()=>{ti(n,!1)},on)}function _t(t){const e=document.querySelector("#statusMessageTrack");if(At(),!e||!fe){typeof t=="function"&&t();return}he=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${sn}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",fe=!1,he=!1,typeof t=="function"&&t()},{once:!0})}function Fe(){const t=document.querySelector("#statusMessageTrack");At(),L="",fe=!1,he=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function Ge(t,e){const r=window.setTimeout(()=>{$e=$e.filter(n=>n!==r),t()},e);$e.push(r)}function At(){for(const t of $e)window.clearTimeout(t);$e=[]}function ri(){if(!fe||he||!L)return;const t=L;At(),St(t)}function Z(){const t=document.querySelector("#statusDot");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(c!=null&&c.connected)){t.classList.add("status-red"),t.title="Websocket not connected";return}if(!R()){t.classList.add("status-yellow"),t.title="Websocket connected. User is not authenticated.";return}t.classList.add("status-green"),t.title=`Websocket connected. Authenticated as ${Me()}.`}}async function ye(t={}){try{if(R()){const e=await ys();K=e,!t.silent&&(e==null?void 0:e.message)&&u(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:f});return}K=await bs(),yr("file-watcher")}catch(e){u("file-watcher-error",v(e),{ttlMs:f})}}function La(t={}){if(!R())return;const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",r=String(t.label||"").trim(),n=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",i=r?`${r} saved variables (${n})`:n;u(`saved-vars-file-updated-${e}`,`${i} has been updated.`,{ttlMs:f}),e.toLowerCase()==="banking"&&Ra(t),e.toLowerCase()==="roster"&&Ma(t)}async function Ra(t={}){await Vn(t)}async function Ma(t={}){await Do(t)}function Ta(t){!R()||u("file-watcher-error",v(t),{ttlMs:f})}function Na(){Ne("guildsync-savedvars-file-modified",La),Ne("guildsync-file-watcher-error",Ta),Ne("guildsync-login-complete",async t=>{g=t||{logged_in:!1,allowed:!1},rt(),xe(),await ye(),u("auth",g.status_message||`Logged in and authorized as ${Me()}.`,{ttlMs:f})}),Ne("guildsync-login-denied",async t=>{g={logged_in:!1,allowed:!1,status_message:""},rt(),await ye(),u("auth",t||"Access denied.",{ttlMs:f}),xe()}),Ne("guildsync-login-failed",async t=>{g={logged_in:!1,allowed:!1,status_message:""},rt(),await ye(),u("auth",t||"Login failed.",{ttlMs:f}),xe()})}function R(){return Boolean((g==null?void 0:g.logged_in)&&(g==null?void 0:g.allowed)&&(g==null?void 0:g.token))}function Me(){var t,e;return((t=g.user)==null?void 0:t.display_name)||((e=g.user)==null?void 0:e.username)||"Discord User"}function Ca(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),r=String(t.discord_user_id||"").trim();if(!e||!r)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=128`}function ni(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function Ba(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function $a(){Ce&&(Ce.disconnect(),Ce=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),r=Math.round(t.getBoundingClientRect().height);Ce=new ResizeObserver(n=>{const i=n[0];if(!i)return;const s=Math.round(i.contentRect.width),o=Math.round(i.contentRect.height);s===e&&o===r||(e=s,r=o,ii(),ri())}),Ce.observe(t)}function ii(){clearTimeout(_r),_r=setTimeout(async()=>{try{await en()}catch{}},500)}function v(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function a(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function m(t){return a(t)}Na();Ms();
