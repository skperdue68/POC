(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const Ba="/assets/splash.ea386b6a.png",Ca="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",Ia="/assets/GuildSync-Graphic.9169020d.png",fe=Object.create(null);fe.open="0";fe.close="1";fe.ping="2";fe.pong="3";fe.message="4";fe.upgrade="5";fe.noop="6";const Tn=Object.create(null);Object.keys(fe).forEach(t=>{Tn[fe[t]]=t});const Rr={type:"error",data:"parser error"},Cs=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Is=typeof ArrayBuffer=="function",Os=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Xr=({type:t,data:e},n,r)=>Cs&&e instanceof Blob?n?r(e):ss(e,r):Is&&(e instanceof ArrayBuffer||Os(e))?n?r(e):ss(new Blob([e]),r):r(fe[t]+(e||"")),ss=(t,e)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];e("b"+(r||""))},n.readAsDataURL(t)};function os(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let gr;function Oa(t,e){if(Cs&&t.data instanceof Blob)return t.data.arrayBuffer().then(os).then(e);if(Is&&(t.data instanceof ArrayBuffer||Os(t.data)))return e(os(t.data));Xr(t,!1,n=>{gr||(gr=new TextEncoder),e(gr.encode(n))})}const as="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",sn=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<as.length;t++)sn[as.charCodeAt(t)]=t;const qa=t=>{let e=t.length*.75,n=t.length,r,i=0,o,s,c,u;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const b=new ArrayBuffer(e),v=new Uint8Array(b);for(r=0;r<n;r+=4)o=sn[t.charCodeAt(r)],s=sn[t.charCodeAt(r+1)],c=sn[t.charCodeAt(r+2)],u=sn[t.charCodeAt(r+3)],v[i++]=o<<2|s>>4,v[i++]=(s&15)<<4|c>>2,v[i++]=(c&3)<<6|u&63;return b},xa=typeof ArrayBuffer=="function",Zr=(t,e)=>{if(typeof t!="string")return{type:"message",data:qs(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:Fa(t.substring(1),e)}:Tn[n]?t.length>1?{type:Tn[n],data:t.substring(1)}:{type:Tn[n]}:Rr},Fa=(t,e)=>{if(xa){const n=qa(t);return qs(n,e)}else return{base64:!0,data:t}},qs=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},xs=String.fromCharCode(30),Pa=(t,e)=>{const n=t.length,r=new Array(n);let i=0;t.forEach((o,s)=>{Xr(o,!1,c=>{r[s]=c,++i===n&&e(r.join(xs))})})},Ga=(t,e)=>{const n=t.split(xs),r=[];for(let i=0;i<n.length;i++){const o=Zr(n[i],e);if(r.push(o),o.type==="error")break}return r};function Ua(){return new TransformStream({transform(t,e){Oa(t,n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const o=new DataView(i.buffer);o.setUint8(0,126),o.setUint16(1,r)}else{i=new Uint8Array(9);const o=new DataView(i.buffer);o.setUint8(0,127),o.setBigUint64(1,BigInt(r))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(n)})}})}let br;function $n(t){return t.reduce((e,n)=>e+n.length,0)}function Rn(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let r=0;for(let i=0;i<e;i++)n[i]=t[0][r++],r===t[0].length&&(t.shift(),r=0);return t.length&&r<t[0].length&&(t[0]=t[0].slice(r)),n}function Ha(t,e){br||(br=new TextDecoder);const n=[];let r=0,i=-1,o=!1;return new TransformStream({transform(s,c){for(n.push(s);;){if(r===0){if($n(n)<1)break;const u=Rn(n,1);o=(u[0]&128)===128,i=u[0]&127,i<126?r=3:i===126?r=1:r=2}else if(r===1){if($n(n)<2)break;const u=Rn(n,2);i=new DataView(u.buffer,u.byteOffset,u.length).getUint16(0),r=3}else if(r===2){if($n(n)<8)break;const u=Rn(n,8),b=new DataView(u.buffer,u.byteOffset,u.length),v=b.getUint32(0);if(v>Math.pow(2,53-32)-1){c.enqueue(Rr);break}i=v*Math.pow(2,32)+b.getUint32(4),r=3}else{if($n(n)<i)break;const u=Rn(n,i);c.enqueue(Zr(o?u:br.decode(u),e)),r=0}if(i===0||i>t){c.enqueue(Rr);break}}}})}const Fs=4;function T(t){if(t)return Va(t)}function Va(t){for(var e in T.prototype)t[e]=T.prototype[e];return t}T.prototype.on=T.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};T.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};T.prototype.off=T.prototype.removeListener=T.prototype.removeAllListeners=T.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===e||r.fn===e){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+t],this};T.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,e)}return this};T.prototype.emitReserved=T.prototype.emit;T.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};T.prototype.hasListeners=function(t){return!!this.listeners(t).length};const Xn=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0))(),V=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),Wa="arraybuffer";function Ps(t,...e){return e.reduce((n,r)=>(t.hasOwnProperty(r)&&(n[r]=t[r]),n),{})}const ja=V.setTimeout,za=V.clearTimeout;function Zn(t,e){e.useNativeTimers?(t.setTimeoutFn=ja.bind(V),t.clearTimeoutFn=za.bind(V)):(t.setTimeoutFn=V.setTimeout.bind(V),t.clearTimeoutFn=V.clearTimeout.bind(V))}const Ya=1.33;function Ka(t){return typeof t=="string"?Ja(t):Math.ceil((t.byteLength||t.size)*Ya)}function Ja(t){let e=0,n=0;for(let r=0,i=t.length;r<i;r++)e=t.charCodeAt(r),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(r++,n+=4);return n}function Gs(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Qa(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function Xa(t){let e={},n=t.split("&");for(let r=0,i=n.length;r<i;r++){let o=n[r].split("=");e[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return e}class Za extends Error{constructor(e,n,r){super(e),this.description=n,this.context=r,this.type="TransportError"}}class ei extends T{constructor(e){super(),this.writable=!1,Zn(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,r){return super.emitReserved("error",new Za(e,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=Zr(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=Qa(e);return n.length?"?"+n:""}}class ec extends ei{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};Ga(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Pa(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=Gs()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let Us=!1;try{Us=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const tc=Us;function nc(){}class rc extends ec{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let r=location.port;r||(r=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,n){const r=this.request({method:"POST",data:e});r.on("success",n),r.on("error",(i,o)=>{this.onError("xhr post error",i,o)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=e}}class ae extends T{constructor(e,n,r){super(),this.createRequest=e,Zn(this,r),this._opts=r,this._method=r.method||"GET",this._uri=n,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const n=Ps(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(n);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var i;r.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=ae.requestsCount++,ae.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=nc,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete ae.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}ae.requestsCount=0;ae.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",cs);else if(typeof addEventListener=="function"){const t="onpagehide"in V?"pagehide":"unload";addEventListener(t,cs,!1)}}function cs(){for(let t in ae.requests)ae.requests.hasOwnProperty(t)&&ae.requests[t].abort()}const ic=function(){const t=Hs({xdomain:!1});return t&&t.responseType!==null}();class sc extends rc{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=ic&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new ae(Hs,this.uri(),e)}}function Hs(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||tc))return new XMLHttpRequest}catch{}if(!e)try{return new V[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Vs=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class oc extends ei{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,r=Vs?{}:Ps(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;Xr(r,this.supportsBinary,o=>{try{this.doWrite(r,o)}catch{}i&&Xn(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=Gs()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const yr=V.WebSocket||V.MozWebSocket;class ac extends oc{createSocket(e,n,r){return Vs?new yr(e,n,r):n?new yr(e,n):new yr(e)}doWrite(e,n){this.ws.send(n)}}class cc extends ei{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=Ha(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(n).getReader(),i=Ua();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const o=()=>{r.read().then(({done:c,value:u})=>{c||(this.onPacket(u),o())}).catch(c=>{})};o();const s={type:"open"};this.query.sid&&(s.data=`{"sid":"${this.query.sid}"}`),this._writer.write(s).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;this._writer.write(r).then(()=>{i&&Xn(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const lc={websocket:ac,webtransport:cc,polling:sc},dc=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,uc=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Dr(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),r=t.indexOf("]");n!=-1&&r!=-1&&(t=t.substring(0,n)+t.substring(n,r).replace(/:/g,";")+t.substring(r,t.length));let i=dc.exec(t||""),o={},s=14;for(;s--;)o[uc[s]]=i[s]||"";return n!=-1&&r!=-1&&(o.source=e,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=fc(o,o.path),o.queryKey=hc(o,o.query),o}function fc(t,e){const n=/\/{2,9}/g,r=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function hc(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,o){i&&(n[i]=o)}),n}const Mr=typeof addEventListener=="function"&&typeof removeEventListener=="function",Nn=[];Mr&&addEventListener("offline",()=>{Nn.forEach(t=>t())},!1);class Ne extends T{constructor(e,n){if(super(),this.binaryType=Wa,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const r=Dr(e);n.hostname=r.host,n.secure=r.protocol==="https"||r.protocol==="wss",n.port=r.port,r.query&&(n.query=r.query)}else n.host&&(n.hostname=Dr(n.host).host);Zn(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(r=>{const i=r.prototype.name;this.transports.push(i),this._transportsByName[i]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Xa(this.opts.query)),Mr&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Nn.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=Fs,n.transport=e,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Ne.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",Ne.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(n+=Ka(i)),r>0&&n>this._maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Xn(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,r){return this._sendPacket("message",e,n,r),this}send(e,n,r){return this._sendPacket("message",e,n,r),this}_sendPacket(e,n,r,i){if(typeof n=="function"&&(i=n,n=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const o={type:e,data:n,options:r};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(Ne.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Mr&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=Nn.indexOf(this._offlineEventListener);r!==-1&&Nn.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}}Ne.protocol=Fs;class mc extends Ne{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let n=this.createTransport(e),r=!1;Ne.priorWebsocketSuccess=!1;const i=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",p=>{if(!r)if(p.type==="pong"&&p.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;Ne.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(v(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const y=new Error("probe error");y.transport=n.name,this.emitReserved("upgradeError",y)}}))};function o(){r||(r=!0,v(),n.close(),n=null)}const s=p=>{const y=new Error("probe error: "+p);y.transport=n.name,o(),this.emitReserved("upgradeError",y)};function c(){s("transport closed")}function u(){s("socket closed")}function b(p){n&&p.name!==n.name&&o()}const v=()=>{n.removeListener("open",i),n.removeListener("error",s),n.removeListener("close",c),this.off("close",u),this.off("upgrading",b)};n.once("open",i),n.once("error",s),n.once("close",c),this.once("close",u),this.once("upgrading",b),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const n=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&n.push(e[r]);return n}}class pc extends mc{constructor(e,n={}){const r=typeof e=="object"?e:n;(!r.transports||r.transports&&typeof r.transports[0]=="string")&&(r.transports=(r.transports||["polling","websocket","webtransport"]).map(i=>lc[i]).filter(i=>!!i)),super(e,r)}}function gc(t,e="",n){let r=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),r=Dr(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const o=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+o+":"+r.port+e,r.href=r.protocol+"://"+o+(n&&n.port===r.port?"":":"+r.port),r}const bc=typeof ArrayBuffer=="function",yc=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,Ws=Object.prototype.toString,kc=typeof Blob=="function"||typeof Blob<"u"&&Ws.call(Blob)==="[object BlobConstructor]",vc=typeof File=="function"||typeof File<"u"&&Ws.call(File)==="[object FileConstructor]";function ti(t){return bc&&(t instanceof ArrayBuffer||yc(t))||kc&&t instanceof Blob||vc&&t instanceof File}function Bn(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,r=t.length;n<r;n++)if(Bn(t[n]))return!0;return!1}if(ti(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return Bn(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&Bn(t[n]))return!0;return!1}function Sc(t){const e=[],n=t.data,r=t;return r.data=Tr(n,e),r.attachments=e.length,{packet:r,buffers:e}}function Tr(t,e){if(!t)return t;if(ti(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let r=0;r<t.length;r++)n[r]=Tr(t[r],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=Tr(t[r],e));return n}return t}function wc(t,e){return t.data=Nr(t.data,e),delete t.attachments,t}function Nr(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=Nr(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=Nr(t[n],e));return t}const js=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],_c=5;var S;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(S||(S={}));class Ac{constructor(e){this.replacer=e}encode(e){return(e.type===S.EVENT||e.type===S.ACK)&&Bn(e)?this.encodeAsBinary({type:e.type===S.EVENT?S.BINARY_EVENT:S.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===S.BINARY_EVENT||e.type===S.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=Sc(e),r=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(r),i}}class ni extends T{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const r=n.type===S.BINARY_EVENT;r||n.type===S.BINARY_ACK?(n.type=r?S.EVENT:S.ACK,this.reconstructor=new Lc(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(ti(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const r={type:Number(e.charAt(0))};if(S[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===S.BINARY_EVENT||r.type===S.BINARY_ACK){const o=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const s=e.substring(o,n);if(s!=Number(s)||e.charAt(n)!=="-")throw new Error("Illegal attachments");const c=Number(s);if(!zs(c)||c<0)throw new Error("Illegal attachments");if(c>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=c}if(e.charAt(n+1)==="/"){const o=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););r.nsp=e.substring(o,n)}else r.nsp="/";const i=e.charAt(n+1);if(i!==""&&Number(i)==i){const o=n+1;for(;++n;){const s=e.charAt(n);if(s==null||Number(s)!=s){--n;break}if(n===e.length)break}r.id=Number(e.substring(o,n+1))}if(e.charAt(++n)){const o=this.tryParse(e.substr(n));if(ni.isPayloadValid(r.type,o))r.data=o;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case S.CONNECT:return xn(n);case S.DISCONNECT:return n===void 0;case S.CONNECT_ERROR:return typeof n=="string"||xn(n);case S.EVENT:case S.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&js.indexOf(n[0])===-1);case S.ACK:case S.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Lc{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=wc(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Ec(t){return typeof t=="string"}const zs=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function $c(t){return t===void 0||zs(t)}function xn(t){return Object.prototype.toString.call(t)==="[object Object]"}function Rc(t,e){switch(t){case S.CONNECT:return e===void 0||xn(e);case S.DISCONNECT:return e===void 0;case S.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&js.indexOf(e[0])===-1);case S.ACK:return Array.isArray(e);case S.CONNECT_ERROR:return typeof e=="string"||xn(e);default:return!1}}function Dc(t){return Ec(t.nsp)&&$c(t.id)&&Rc(t.type,t.data)}const Mc=Object.freeze(Object.defineProperty({__proto__:null,protocol:_c,get PacketType(){return S},Encoder:Ac,Decoder:ni,isPacketValid:Dc},Symbol.toStringTag,{value:"Module"}));function K(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const Tc=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Ys extends T{constructor(e,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[K(e,"open",this.onopen.bind(this)),K(e,"packet",this.onpacket.bind(this)),K(e,"error",this.onerror.bind(this)),K(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var r,i,o;if(Tc.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const s={type:S.EVENT,data:n};if(s.options={},s.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const v=this.ids++,p=n.pop();this._registerAckCallback(v,p),s.id=v}const c=(i=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||i===void 0?void 0:i.writable,u=this.connected&&!(!((o=this.io.engine)===null||o===void 0)&&o._hasPingExpired());return this.flags.volatile&&!c||(u?(this.notifyOutgoingListeners(s),this.packet(s)):this.sendBuffer.push(s)),this.flags={},this}_registerAckCallback(e,n){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[e]=n;return}const o=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let c=0;c<this.sendBuffer.length;c++)this.sendBuffer[c].id===e&&this.sendBuffer.splice(c,1);n.call(this,new Error("operation has timed out"))},i),s=(...c)=>{this.io.clearTimeoutFn(o),n.apply(this,c)};s.withError=!0,this.acks[e]=s}emitWithAck(e,...n){return new Promise((r,i)=>{const o=(s,c)=>s?i(s):r(c);o.withError=!0,n.push(o),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...o)=>(this._queue[0],i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(i)):(this._queue.shift(),n&&n(null,...o)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:S.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case S.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case S.EVENT:case S.BINARY_EVENT:this.onevent(e);break;case S.ACK:case S.BINARY_ACK:this.onack(e);break;case S.DISCONNECT:this.ondisconnect();break;case S.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let r=!1;return function(...i){r||(r=!0,n.packet({type:S.ACK,id:e,data:i}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:S.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,e.data)}}}function It(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}It.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-n:t+n}return Math.min(t,this.max)|0};It.prototype.reset=function(){this.attempts=0};It.prototype.setMin=function(t){this.ms=t};It.prototype.setMax=function(t){this.max=t};It.prototype.setJitter=function(t){this.jitter=t};class Br extends T{constructor(e,n){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,Zn(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new It({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const i=n.parser||Mc;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new pc(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=K(n,"open",function(){r.onopen(),e&&e()}),o=c=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",c),e?e(c):this.maybeReconnectOnOpen()},s=K(n,"error",o);if(this._timeout!==!1){const c=this._timeout,u=this.setTimeoutFn(()=>{i(),o(new Error("timeout")),n.close()},c);this.opts.autoUnref&&u.unref(),this.subs.push(()=>{this.clearTimeoutFn(u)})}return this.subs.push(i),this.subs.push(s),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(K(e,"ping",this.onping.bind(this)),K(e,"data",this.ondata.bind(this)),K(e,"error",this.onerror.bind(this)),K(e,"close",this.onclose.bind(this)),K(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){Xn(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new Ys(this,e,n),this.nsps[e]=r),r}_destroy(e){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let r=0;r<n.length;r++)this.engine.write(n[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Xt={};function Cn(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=gc(t,e.path||"/socket.io"),r=n.source,i=n.id,o=n.path,s=Xt[i]&&o in Xt[i].nsps,c=e.forceNew||e["force new connection"]||e.multiplex===!1||s;let u;return c?u=new Br(r,e):(Xt[i]||(Xt[i]=new Br(r,e)),u=Xt[i]),n.query&&!e.query&&(e.query=n.queryKey),u.socket(n.path,e)}Object.assign(Cn,{Manager:Br,Socket:Ys,io:Cn,connect:Cn});function Nc(t){return window.go.main.App.CleanupDepositMailAckFromGuildSyncBanking(t)}function Bc(){return window.go.main.App.CloseWindow()}function Cc(t){return window.go.main.App.CollectDepositMailAckFromGuildSyncBanking(t)}function Ic(t){return window.go.main.App.CollectGuildSyncApplicationsData(t)}function Oc(t){return window.go.main.App.CollectGuildSyncBankingData(t)}function qc(t){return window.go.main.App.CollectGuildSyncRosterData(t)}function xc(t,e){return window.go.main.App.CommitGuildSyncApplicationsData(t,e)}function Fc(t,e){return window.go.main.App.CommitGuildSyncBankingData(t,e)}function Pc(t,e){return window.go.main.App.CommitGuildSyncRosterData(t,e)}function Gc(){return window.go.main.App.FlushPendingDepositMailAckCleanup()}function Uc(){return window.go.main.App.GetESORunningStatus()}function Hc(){return window.go.main.App.GetGuildSyncFileWatcherStatus()}function Vc(){return window.go.main.App.GetGuildSyncSession()}function Wc(){return window.go.main.App.LogoutGuildSync()}function jc(){return window.go.main.App.MaximizeWindow()}function zc(){return window.go.main.App.MinimizeWindow()}function Ks(){return window.go.main.App.SaveWindowState()}function Yc(t,e){return window.go.main.App.SetGuildSyncSavedVarsWatchFileEnabled(t,e)}function Kc(){return window.go.main.App.ShowMainWindow()}function Jc(){return window.go.main.App.StartDiscordLogin()}function Qc(){return window.go.main.App.StartGuildSyncFileWatcher()}function Xc(){return window.go.main.App.StopGuildSyncFileWatcher()}function Zc(t){return window.go.main.App.WriteDepositMailToGuildSyncBanking(t)}function el(t,e,n){return window.runtime.EventsOnMultiple(t,e,n)}function Zt(t,e){return el(t,e,-1)}function tl(t){window.runtime.BrowserOpenURL(t)}const er="1.2.7",nl=30*60*1e3,Js="guildsync-pending-banking-uploads",Qs="guildsync-pending-deposit-mail",rl=5e3,il=30*1e3,Xs="guildsync-pending-roster-uploads",Zs="guildsync-pending-applications-uploads",m=60*1e3,eo=7e3,to=1400,no=2400,sl=4e3,ol=38,ro=document.querySelector("#app");let ls=null,en=null,ds=!1,yn=!1,In=null,kr=!1,vr=!1,Sr=!1,Be=null,P={running:!1,message:""},ut=null,ft=null,Cr=!1,ht=!1,mt=null,wr=!1,Ge=new Map,Ye=new Map,C="",st=!1,ot=!1,on=[],g={logged_in:!1,allowed:!1,status_message:""},Le={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},d=null,G=[],tr=[],nr=null,dn=!1,Fn=!1,Pn="",pt=new Set,gt=new Set,un="username",Qe="asc",Ir=null,Or=null,z=[],Gn=null,Ue=!1,us=!1,Un="",qr=null,xr=null,Xe=new Set,bt=new Set,ye="",F="",N=-1,At=!1,fn="",W=[],He="",Ce=[],Ie=!1,ve="",_r=null,J=-1,Ot=!1,hn="",Oe=[],Hn=!1,Ze=!1,qe="",Lt="",Et=!1,Ee="",j=[],$t="",at="",xe=[],Fe=!1,Se="",fs=null,ze=0;const al=650;let Q=-1,qt=!1,xt=[],$e=!1,et="",Ft=!1,mn=[],Re=!1,tt="",Pt=!1,ri=[],De=!1,nt="",Gt="",Me="",yt="",Te="",L=[],q=!1,x="",dt=!1,rr="",Ke="",kn="",vn="",ke=-1,je=!1,_=null,rt=[],Rt=!1,_e="",Sn="",oe=-1,Ut=!1,ii=null,an=null;const si=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let U=[],Z=null,Je=null,Dt=[],kt="",hs=!1,R="biweekly",io=null,Ve=!1,it=!1,re="biweekly",Ht=!1,Mt=!1,ge="",be=null,B={targetType:"other",note:"",tickets:""},Vt=!1,ct="",O=[],te=[],ce="",le=!1,de="",vt=null,X=-1,we=!1,Vn=!1,H="",E={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},Wt="",I=-1,ee=!1,Fr={biweekly:0,monthly:0};const cl=1780786800,We=14*24*60*60,Wn=60*60,jn=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let $=jn[0].id;function ll(){ro.innerHTML=`
    <main class="splash-screen">
      <img src="${Ba}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await Kc(),await dl(),so(),ln(),await _t()},5e3)}async function dl(){try{g=await Vc()}catch(t){g={logged_in:!1,allowed:!1,status_message:""},h("session-error",k(t),{ttlMs:m})}}function so(){ro.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${Ca}" alt="" class="title-icon" />
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
            <img src="${Ia}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${a(er)}</div>
            </div>
          </div>
          <div class="compact-header-actions">
            <div id="desktopUpdateArea" class="desktop-update-area"></div>
            <div id="discordArea" class="discord-area"></div>
          </div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${oo()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content web-upload-banner-dismissed" aria-live="polite">
          ${co()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await zc()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await Ks(),await Bc()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await jc()}),qn(),Qr(),lo(),va(),Jo(),aa(),po(),Ko(),Fo(),Po(),Go(),Uo(),$o(),Qo(),bl(),Pe(),Ct(),ds||(window.addEventListener("resize",()=>{Na(),Ma()}),Qf(),ds=!0)}function oo(){return jn.map(t=>{const e=t.id===$,n=ul(t.id,e),r=n?ao():0,i=n?`Deposit mail needs attention: ${r} item${r===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${n?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${f(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${f(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${fl(t.icon)}</span>
          <span class="guildsync-tab-label">${a(t.label)}</span>
          ${n?`<span class="guildsync-tab-mail-badge" aria-label="${f(i)}">${r>99?"99+":a(String(r))}</span>`:""}
        </button>
      `}).join("")}function ao(){return A()?cr()+An()+sa():0}function ul(t,e){return t!=="more"||e?!1:ao()>0}function fl(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function co(){const t=jn.find(n=>n.id===$)||jn[0];let e="";return t.id==="discord-members"?e=kl():t.id==="eso-members"?e=vl():t.id==="more"?e=vu():t.id==="settings"?e=Vl():e=`
      <div class="guildsync-tab-panel" data-active-tab="${f(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${a(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${we?Yd():""}
    ${Ht?Bu():""}
    ${Vt?Su():""}
    ${je?Fd():""}
    ${qt?zl():""}
    ${Ft?Zl():""}
    ${Pt?rd():""}
    ${dt?pd():""}
    ${Ut?gl():""}
  `}function hl(){return Ut||At||Et||we||Ht||Vt||je||Ot||qt||Ft||Pt||dt||it}function ml(){return Ut?!1:dt?(Wr(),!0):Pt?(Vr(),!0):Ft?(Hr(),!0):qt?(Ur(),!0):je?(Nt(),!0):Ot?(Yr(),!0):Ht?(Kn(),!0):Vt?(qu(),l(),!0):we?(we=!1,l(),!0):At?(At=!1,l(),!0):Et?(Et=!1,l(),!0):it?(it=!1,l(),!0):!1}function pl(t){t.key==="Escape"&&ml()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",pl,!0),window.guildSyncGlobalModalEscapeAttached=!0);function oi(t={}){return new Promise(e=>{an&&an(!1),Ut=!0,ii={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},an=e,l()})}function zn(t=!1){const e=an;an=null,Ut=!1,ii=null,e&&e(t===!0),l()}function gl(){const t=ii||{};return`
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
          <button id="acceptGuildSyncConfirmButton" class="guildsync-confirm-button guildsync-confirm-accept ${f(t.confirmClass||"danger")}" type="button">${a(t.confirmLabel||"Confirm")}</button>
        </div>
      </div>
    </div>
  `}function ms(t){var r,i,o,s;const e=(i=(r=t.target).closest)==null?void 0:i.call(r,"#cancelGuildSyncConfirmButton"),n=(s=(o=t.target).closest)==null?void 0:s.call(o,"#acceptGuildSyncConfirmButton");if(!(!e&&!n)){if(t.preventDefault(),t.stopPropagation(),e){zn(!1);return}n&&zn(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",ms,!0),document.addEventListener("pointerup",ms,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function bl(){if(!Ut)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=r=>{r.preventDefault(),r.stopPropagation(),zn(!1)}),e&&(e.onclick=r=>{r.preventDefault(),r.stopPropagation(),zn(!0)});const n=document.querySelector(".guildsync-confirm-overlay");n&&(n.onclick=r=>{r.target===n&&(r.preventDefault(),r.stopPropagation())})}function lo(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(hl())return;const e=t.dataset.tabId;!e||e===$||($=e,l())})})}function yl(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function l(t={}){dt&&yl();const e=document.querySelector(".guildsync-tabs"),n=document.querySelector("#guildSyncTabContent"),r=n?Array.from(n.querySelectorAll("*")).map((o,s)=>({index:s,top:o.scrollTop,left:o.scrollLeft})).filter(({top:o,left:s})=>o||s):[],i={x:window.scrollX,y:window.scrollY};if(e&&(e.innerHTML=oo()),n){n.innerHTML=co();const o=n.querySelectorAll("*");for(const{index:s,top:c,left:u}of r)o[s]&&(o[s].scrollTop=c,o[s].scrollLeft=u);window.scrollTo(i.x,i.y)}lo(),va(),Jo(),aa(),po(),Ko(),Fo(),Po(),Go(),Uo(),$o(),Qo(),t.restoreDiscordSearchFocus&&wf(),t.restoreRosterSearchFocus&&_f(),$==="discord-members"&&(d==null?void 0:d.connected)&&G.length===0&&!dn&&wi({silent:!0}),$==="eso-members"&&(d==null?void 0:d.connected)&&z.length===0&&!Ue&&!us&&(us=!0,_n({silent:!0})),($==="more"&&U.length===0||$==="settings"&&!Z&&!hs)&&(d==null?void 0:d.connected)&&!Ve&&(hs=!0,me({silent:!0})),($==="discord-members"||$==="eso-members"||$==="settings")&&(d==null?void 0:d.connected)&&L.length===0&&!q&&ir({silent:!0})}function kl(){const t=kf(),e=Af(),n=Array.from(pt),r=Array.from(gt);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${a(wa(nr))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${dn||Fn?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Fn?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${f(Pn)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!pt.has(i)).map(i=>`<option value="${f(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All roles</span>':n.map(i=>Rf(i)).join("")}
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
              ${si.filter(i=>!gt.has(i.id)).map(i=>`<option value="${f(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>uo("discord",i)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${Dn("username","Username")}
                ${Dn("global_name","Global Name")}
                ${Dn("server_nickname","Server Nickname")}
                ${Dn("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>Lf(i)).join(""):Ef()}
            </tbody>
          </table>
        </div>
      </div>
      ${Et?ql():""}
    </div>
  `}function vl(){const t=Ml(),e=Bl(),n=Array.from(Xe),r=Array.from(bt);return`
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
          <span class="discord-last-refresh">Last Refresh: ${a(au(Gn))}</span>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${Ue?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Ue?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${f(Un)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!Xe.has(i)).map(i=>`<option value="${f(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All ranks</span>':n.map(i=>Cl(i)).join("")}
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
              ${si.filter(i=>!bt.has(i.id)).map(i=>`<option value="${f(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>uo("roster",i)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${tn("account_name","Account Name")}
                ${tn("rank","Rank")}
                ${tn("joined","Joined")}
                ${tn("notes","Notes","roster-notes-header")}
                ${tn("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map((i,o)=>Sl(i,o)).join(""):$l()}
            </tbody>
          </table>
        </div>
      </div>
      ${At?Gl():""}
      ${Ot?_l():""}
    </div>
  `}function Sl(t,e=-1){const n=Rl(t.rank||""),r=n?` style="color: ${n};"`:"";return`
    <tr class="eso-roster-row${e===N?" roster-search-active-row":""}"${r} data-roster-row-index="${f(String(e))}" data-eso-account-name="${f(t.account_name||"")}">
      <td>${a(t.account_name||"")}</td>
      <td>${ai(t.rank||"")}</td>
      <td>${a(ar(t.joined))}</td>
      <td class="roster-notes-cell">${wl(t)}</td>
      <td class="member-link-action-cell">${Bo({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function wl(t){const e=String((t==null?void 0:t.account_name)||"").trim(),n=Number((t==null?void 0:t.note_count)||0),r=n>0,i=r?`${n} roster note${n===1?"":"s"} for ${e}`:`No roster notes for ${e}`;return`
    <button
      class="roster-notes-button${r?" has-notes":""}"
      type="button"
      data-open-roster-notes="${f(e)}"
      title="${f(i)}"
      aria-label="${f(i)}"
    >
      <svg class="roster-notes-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4.5 5.25c0-.69.56-1.25 1.25-1.25h5.1c.89 0 1.72.34 2.35.95A3.28 3.28 0 0 1 15.55 4h2.7c.69 0 1.25.56 1.25 1.25v13.5c0 .69-.56 1.25-1.25 1.25h-4.6c-.75 0-1.45.29-1.98.82a.95.95 0 0 1-1.34 0A2.8 2.8 0 0 0 8.35 20h-2.6c-.69 0-1.25-.56-1.25-1.25V5.25Zm7.25 1.6A1.28 1.28 0 0 0 10.85 6H6.5v12h1.85c1.14 0 2.24.35 3.15 1V7.1c0-.09.01-.17.25-.25Zm1.75 12.15a6.32 6.32 0 0 1 3.15-1h.85V6h-1.95c-.73 0-1.4.29-1.9.8l-.15.15V19Z"/></svg>
      ${r?`<span class="roster-notes-count" aria-hidden="true">${n}</span>`:""}
    </button>
  `}function _l(){const t=hn||"",e=Boolean((g==null?void 0:g.logged_in)&&(g==null?void 0:g.allowed));return`
    <div class="roster-history-overlay roster-notes-overlay" role="dialog" aria-modal="true" aria-labelledby="rosterNotesTitle">
      <div class="roster-history-dialog roster-notes-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="rosterNotesTitle">Roster Notes</h3>
            <p>${a(t)}</p>
          </div>
          <button id="closeRosterNotesButton" class="roster-history-close" type="button" aria-label="Close roster notes">\xD7</button>
        </div>
        <div class="roster-notes-body">
          ${qe?`<div class="discord-data-error">${a(qe)}</div>`:""}
          <div class="roster-notes-table-shell">
            <table class="discord-member-table roster-notes-table">
              <thead>
                <tr>
                  <th>Date/Time</th>
                  <th>Officer</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                ${Al()}
              </tbody>
            </table>
          </div>
          ${e?Ll():'<div class="roster-history-muted">Log in to add a new note.</div>'}
        </div>
      </div>
    </div>
  `}function Al(){return Hn?'<tr><td class="bank-empty-row" colspan="3">Loading notes...</td></tr>':!Array.isArray(Oe)||Oe.length===0?'<tr><td class="bank-empty-row" colspan="3">No notes recorded for this member.</td></tr>':Oe.map(t=>`
      <tr>
        <td class="roster-notes-when-cell">${a(El(t.timestamp))}</td>
        <td class="roster-notes-officer-cell">${a(t.officer||"")}</td>
        <td class="roster-notes-note-cell">${a(t.note||"")}</td>
      </tr>
    `).join("")}function Ll(){return`
    <div class="roster-notes-form">
      <label for="rosterNotesNewNote">Add Note</label>
      <textarea
        id="rosterNotesNewNote"
        class="roster-notes-textarea"
        rows="4"
        placeholder="Enter a new roster note..."
        ${Ze?"disabled":""}
      >${a(Lt)}</textarea>
      <button id="saveRosterNoteButton" class="refresh-discord-button" type="button" ${Ze?"disabled":""}>
        ${Ze?"Saving...":"Save Note"}
      </button>
    </div>
  `}function El(t){const e=Number(t||0);return!Number.isFinite(e)||e<=0?"":new Date(e*1e3).toLocaleString()}function $l(){return`
    <tr>
      <td class="bank-empty-row" colspan="5">${a(Ue?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function Rl(t){String(t||"").trim();const e=Df(t);return ur(e==null?void 0:e.role_color)}function ai(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${a(e)}</span>`}function Dl(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":ai(e)}function Ml(){const t=Un.trim().toLowerCase(),e=z.filter(n=>{const r=String(n.rank||"").trim();if(Xe.size>0&&!Xe.has(r)||!mo(bt,Pr(n)))return!1;if(!t)return!0;const i=ar(n.joined),o=hi(n.joined),s=Pr(n),c=ho(n.account_name||"");return[n.account_name,r,i,o,n.joined,s,c].map(b=>String(b||"").toLowerCase()).join(" ").includes(t)});return Tl(e)}function Tl(t){if(!ye||!F)return t;const e=F==="desc"?-1:1;return[...t].sort((n,r)=>{const i=ps(n,ye),o=ps(r,ye),s=i.localeCompare(o,void 0,{sensitivity:"base",numeric:!0});return s!==0?s*e:String(n.account_name||"").localeCompare(String(r.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function ps(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const n=Number(t.joined||0);return Number.isFinite(n)&&n>0?String(n).padStart(16,"0"):""}if(e==="notes")return String(Number(t.note_count||0)).padStart(8,"0");if(e==="linked"){const n=Pr(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[n]||"9"} ${n} ${ho(t.account_name||"")}`}return String(t.account_name||"")}function Nl(t){const n=new Set(["account_name","rank","joined","notes","linked"]).has(t)?t:"account_name";ye!==n?(ye=n,F="asc"):F==="asc"?F="desc":F==="desc"?(ye="",F=""):(ye=n,F="asc"),N=-1,l()}function tn(t,e,n=""){const r=ye===t&&Boolean(F),i=r?F==="asc"?"ascending":"descending":"none",o=r?F==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${f(n)}" aria-sort="${f(i)}">
      <button
        class="discord-sort-header roster-sort-header${r?" active":""}"
        type="button"
        data-roster-sort-column="${f(t)}"
        title="Sort ${f(e)}${r&&F==="asc"?" descending":r&&F==="desc"?" not sorted":" ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${o}</span>
      </button>
    </th>
  `}function Bl(){return Array.from(new Set(z.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function Cl(t){const e=Li(t),n=ur(e==null?void 0:e.role_color),r=$i(n),i=Ei(n,r);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-roster-rank-filter="${f(t)}"
      style="${i}"
      title="Remove ${f(t)} filter"
    >
      <span>${a(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Il(t){const e=si.find(n=>n.id===t);return e?e.label:t}function uo(t,e){const n=t==="roster"?"roster":"discord",r=Il(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${n}-link-status-filter="${f(e)}"
      title="Remove ${f(r)} link filter"
    >
      <span>${a(r)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function fo(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked"&&String(n.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function Ol(t){return fo(or(t==null?void 0:t.discord_id))}function Pr(t){return fo(sr(t==null?void 0:t.account_name))}function ho(t){const e=sr(t),n=No({mode:"eso-to-discord",esoAccountName:t}),r=e.filter(o=>String(o.link_status||"").trim().toLowerCase()==="linked").map(o=>o.discord_server_nickname||o.discord_display_name||o.discord_username||o.discord_user_id||"").filter(Boolean),i=e.filter(o=>String(o.link_status||"").trim().toLowerCase()==="candidate").map(o=>o.discord_server_nickname||o.discord_display_name||o.discord_username||o.discord_user_id||"").filter(Boolean);return[n.label,n.title,r.join(" "),i.join(" ")].filter(Boolean).join(" ")}function mo(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function ql(){return`
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
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${f(Ee)}" />
        </div>

        ${Se?`<div class="discord-data-error">${a(Se)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${xl()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${at?`: ${a(at)}`:""}</div>
            ${Fl()}
          </div>
        </div>
      </div>
    </div>
  `}function xl(){return Fe&&j.length===0?'<div class="roster-history-muted">Searching...</div>':j.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${j.map((t,e)=>`
        <button class="roster-history-match${e===Q||t.discord_id===$t?" is-selected":""}" type="button" data-discord-history-id="${f(t.discord_id)}" data-discord-history-name="${f(Gr(t))}">
          <span>${a(Gr(t))}</span>
          <strong>${a(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===Q?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Fl(){return $t?Fe&&xe.length===0?'<div class="roster-history-muted">Loading history...</div>':xe.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${xe.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${a(hi(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${a(Pl(t.event_type))}</td>
              <td>${a(t.old_value||"")}</td>
              <td>${a(t.new_value||"")}</td>
              <td>${a(t.initiator||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function Gr(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function Pl(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Gl(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(fn)}" />
        </div>

        ${ve?`<div class="discord-data-error">${a(ve)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Ul()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${He?`: ${a(He)}`:""}</div>
            ${Hl()}
          </div>
        </div>
      </div>
    </div>
  `}function Ul(){return Ie&&W.length===0?'<div class="roster-history-muted">Searching...</div>':W.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${W.map((t,e)=>`
        <button class="roster-history-match${e===J||t.account_name===He?" is-selected":""}" type="button" data-roster-history-account="${f(t.account_name)}">
          <span>${a(t.account_name)}</span>
          <strong>${a(t.rank||"")}</strong>
          ${e===J?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Hl(){return He?Ie&&Ce.length===0?'<div class="roster-history-muted">Loading history...</div>':Ce.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${Ce.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${a(hi(t.timestamp))}</td>
              <td>${a(t.event_type||"")}</td>
              <td>${Dl(t.rank)}</td>
              <td>${a(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function Vl(){return`
    <div class="guildsync-tab-panel reports-panel" data-active-tab="settings">
      <div class="discord-data-header reports-header">
        <div>
          <h2 class="discord-data-title">Reports & Admin</h2>
          <p class="discord-data-subtitle">Run GuildSync reports and administrative review tools. More options can be added here later.</p>
        </div>
      </div>

      <div class="reports-scroll-area">
        ${Wl()}
        <section class="reports-list" aria-label="Available reports">
          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Associates Promotion Eligible</h3>
              <p>Shows Associates who have been in the guild at least two weeks, have purchased at least one raffle ticket, and are linked to Discord. Also shows otherwise eligible Associates who still need a Discord link reviewed.</p>
            </div>
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${$e?"disabled":""}>
              ${$e?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${Re?"disabled":""}>
              ${Re?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${De?"disabled":""}>
              ${De?"Loading...":"Run"}
            </button>
          </article>
        </section>

        <article class="report-option-card">
          <div class="report-option-copy">
            <h3>ESO / Discord Member Links</h3>
            <p>Review automatic ESO-to-Discord links, accept candidate matches, unlink blocked matches, or run the matcher again after roster or Discord refreshes.</p>
          </div>
          <button id="runMemberLinksReportButton" class="refresh-discord-button report-run-button" type="button" ${q?"disabled":""}>
            ${q?"Loading...":"Run"}
          </button>
        </article>
      </div>
    </div>
  `}function po(){var t,e,n,r,i,o,s;$==="settings"&&((t=document.querySelector("#raffleBonusSettingsForm"))==null||t.addEventListener("submit",jl),(e=document.querySelector("#raffleBonusSettingsForm"))==null||e.addEventListener("input",c=>{Je={raffle:kt,values:new Map(new FormData(c.currentTarget))}}),(n=document.querySelector("#bonusRafflePicker"))==null||n.addEventListener("change",c=>{kt=c.currentTarget.value,Je=null,l()}),(r=document.querySelector("#runAssociateTicketReportButton"))==null||r.addEventListener("click",()=>go()),(i=document.querySelector("#runDiscordRankAuditReportButton"))==null||i.addEventListener("click",()=>Xl()),(o=document.querySelector("#runDiscordLastSeenReportButton"))==null||o.addEventListener("click",()=>nd()),(s=document.querySelector("#runMemberLinksReportButton"))==null||s.addEventListener("click",()=>fd()))}function Wl(){var o;if(!Z)return"<p>Loading raffle bonus settings...</p>";const t=(Je==null?void 0:Je.raffle)===kt?Je.values:null,e=Dt.find(s=>`${s.type}:${s.salesEnd}`===kt),n=e?{enabledByType:{...Z.enabledByType,[e.type]:e.enabled},biweekly:e.type==="biweekly"?e.tiers:Z.biweekly,monthly:e.type==="monthly"?e.tiers:Z.monthly}:Z,r=((o=g==null?void 0:g.user)==null?void 0:o.role)==="admin",i=(s,c)=>{var u,b;return`
    <fieldset class="raffle-bonus-tiers" ${r?"":"disabled"}>
      <legend>${c}</legend>
      <label><input name="${s}-enabled" type="checkbox" ${(t?t.has(`${s}-enabled`):(b=(u=n.enabledByType)==null?void 0:u[s])!=null?b:n.enabled)?"checked":""}> Enable bonus tickets</label>
      ${n[s].map((v,p)=>{var y,M;return`
        <div class="raffle-bonus-tier">
          <span>Period ${p+1}${p===n[s].length-1?" (final)":""}</span>
          <label>Hours <input name="${s}-${p}-hours" type="number" min="1" step="1" required value="${f(String(t&&(y=t.get(`${s}-${p}-hours`))!=null?y:v.hours))}"></label>
          <label>Bonus % <input name="${s}-${p}-percent" type="number" min="0" max="100" step="0.1" required value="${f(String(t&&(M=t.get(`${s}-${p}-percent`))!=null?M:v.percent))}"></label>
        </div>
      `}).join("")}
    </fieldset>`};return`
    <article class="report-option-card raffle-bonus-card">
      <div class="report-option-copy">
        <h3>Raffle Bonus Tickets</h3>
        <p>Default settings carry forward. Select a raffle to edit only that raffle, including past raffles. Purchase time determines its hour period. Bonuses round down; the final tier must be 0%. Manual entries never receive additional bonuses. Changes apply only when you save.</p>
        <label>Bonus rules for
          <select id="bonusRafflePicker" ${r?"":"disabled"}>
            <option value="">Default rules for upcoming raffles</option>
            ${Dt.map(s=>`<option value="${f(`${s.type}:${s.salesEnd}`)}" ${kt===`${s.type}:${s.salesEnd}`?"selected":""}>${a(s.label)}${s.enabled?" (Bonuses)":""}</option>`).join("")}
          </select>
        </label>
        <form id="raffleBonusSettingsForm">
          ${e?i(e.type,e.label):i("biweekly","Bi-Weekly Raffle")+i("monthly","50/50 Raffle")}
          ${r?'<button class="refresh-discord-button report-run-button" type="submit">Save Bonus Settings</button>':"<p>Admin access is required to change these settings.</p>"}
        </form>
      </div>
    </article>`}async function jl(t){t.preventDefault();const e=t.currentTarget,n=new FormData(e),r=Dt.find(s=>`${s.type}:${s.salesEnd}`===kt),i=s=>((r==null?void 0:r.type)===s?r.tiers:Z[s]).map((c,u)=>({hours:Number(n.get(`${s}-${u}-hours`)),percent:Number(n.get(`${s}-${u}-percent`))})),o=r?{raffleType:r.type,salesEnd:r.salesEnd,enabled:n.has(`${r.type}-enabled`),tiers:i(r.type)}:{enabledByType:{biweekly:n.has("biweekly-enabled"),monthly:n.has("monthly-enabled")},biweekly:i("biweekly"),monthly:i("monthly")};try{const s=await w("guildsync:save-raffle-bonus-settings",o,3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Could not save raffle bonus settings.");Z=s.bonusSettings,Je=null,await me({silent:!0}),h("bonus-settings","Raffle bonus settings saved.",{ttlMs:m}),l()}catch(s){h("bonus-settings-error",k(s),{ttlMs:m})}}function go(){qt=!0,et="",l(),Wo()}function Ur(){qt=!1,et="",l()}function zl(){const t=Yl(),e=Kl(),n=xt.length;return`
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
          <button id="copyAssociateTicketReportGridButton" class="bank-export-copy-button" type="button" ${n===0?"disabled":""}>Copy Grid</button>
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${$e?"disabled":""}>${$e?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(n))} total row${n===1?"":"s"}</span>
        </div>

        ${et?`<div class="discord-data-error">${a(et)}</div>`:""}

        <div class="report-results-content">
          ${$e&&n===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!$e&&n===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${n>0?gs("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${n>0?gs("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${a(ko())}</textarea>
      </div>
    </div>
  `}function Yl(){return xt.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function Kl(){return xt.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function gs(t,e,n,r){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${a(t)}</h4>
          <p>${a(e)}</p>
        </div>
        <span>${a(String(n.length))} row${n.length===1?"":"s"}</span>
      </div>
      ${n.length>0?Jl(n):`<div class="roster-history-muted report-section-empty">${a(r)}</div>`}
    </section>
  `}function Jl(t=xt){return`
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
              <td>${ai(e.rank||"")}</td>
              <td>${a(ar(e.joined))}</td>
              <td>${a(ne(e.purchased_tickets||0))}</td>
              <td class="associate-earliest-deposit-cell">${a(bo(e))}</td>
              <td>${a(yo(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function bo(t){const e=String((t==null?void 0:t.earliest_deposit_summary)||"").trim();if(e)return e;const n=String((t==null?void 0:t.earliest_deposit_date)||"").trim(),r=String((t==null?void 0:t.earliest_deposit_raffle_period)||"").trim();return[n,r].filter(Boolean).join(" | ")}function yo(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function ko(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Earliest Deposit / Raffle","Discord Link"]];for(const e of xt){const n=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([n,e.account_name||"",e.rank||"",ar(e.joined),ne(e.purchased_tickets||0),bo(e),yo(e)])}return t.map(e=>e.map(lr).join("	")).join(`
`)}async function Ql(){const t=ko();if(await dr(t)){h("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:m});return}const n=document.querySelector("#associateTicketReportTsv");n&&(n.focus(),n.select()),h("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function Xl(){Ft=!0,tt="",l(),Vo()}function Hr(){Ft=!1,tt="",l()}function Zl(){const t=mn.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${Re?"disabled":""}>${Re?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${tt?`<div class="discord-data-error">${a(tt)}</div>`:""}

        <div class="report-results-content">
          ${Re&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!Re&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?ed(mn):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${a(wo())}</textarea>
      </div>
    </div>
  `}function ed(t=mn){return`
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
              <td data-label="Discord Member" class="discord-rank-audit-member-cell">${a(vo(e))}</td>
              <td data-label="Discord Rank Role" class="discord-rank-audit-discord-cell">${a(e.discord_rank||"No matching rank role")}</td>
              <td data-label="Linked ESO Account(s)" class="discord-rank-audit-eso-account-cell">${a(e.eso_accounts||"No linked ESO account")}</td>
              <td data-label="ESO Rank" class="discord-rank-audit-eso-rank-cell">${a(e.eso_rank||"None")}</td>
              <td data-label="Issue" class="discord-rank-audit-issue-cell">${a(So(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function vo(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function So(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function wo(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of mn)t.push([vo(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",So(e)]);return t.map(e=>e.map(lr).join("	")).join(`
`)}async function td(){const t=wo();if(await dr(t)){h("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:m});return}const n=document.querySelector("#discordRankAuditReportTsv");n&&(n.focus(),n.select()),h("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function nd(){Pt=!0,nt="",Gt="",l(),Ho(),L.length===0&&!q&&ir({silent:!0})}function Vr(){Pt=!1,nt="",Gt="",Me="",yt="",Te="",l()}function rd(){const t=ci(),e=ri.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${De?"disabled":""}>${De?"Loading...":"Run Again"}</button>
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
            value="${f(Gt)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${Me===""?"selected":""}>All link statuses</option>
            <option value="linked" ${Me==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${Me==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${Me==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${nt?`<div class="discord-data-error discord-last-seen-report-error">${a(nt)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${De&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!De&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?id(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${a(Ao(t))}</textarea>
      </div>
    </div>
  `}function id(t=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${nn("name","Discord Member")}</th>
            <th>${nn("eso","Linked ESO Account")}</th>
            <th>${nn("date","Last Seen")}</th>
            <th>${nn("days","Days Since")}</th>
            <th>${nn("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr class="discord-last-seen-row ${f(dd(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${f(lt(e).status)}" data-discord-last-seen-search="${f(_o(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${ld(e)}
                  <span>${a(Tt(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${od(e)}</td>
              <td>${a(li(e.last_seen))}</td>
              <td>${a(di(e.last_seen))}</td>
              <td>${a(Yn(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function nn(t,e){const n=yt===t,r=n?Te==="asc"?"\u25B2":"\u25BC":"\u2195",i=n?`${e}: ${Te==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${n?" active":""}" type="button" data-discord-last-seen-sort="${f(t)}" title="${f(i)}">
      <span>${a(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${a(r)}</span>
    </button>
  `}function ci(){const t=[...ri],e=yt,n=Te;if(!e||!n)return t;const r=n==="desc"?-1:1;return t.sort((i,o)=>{var s,c;if(e==="date"){const u=Number(i.last_seen||0)||0,b=Number(o.last_seen||0)||0;return(u-b)*r}if(e==="days")return(bs(i.last_seen)-bs(o.last_seen))*r;if(e==="action")return Yn(i.last_seen_action).localeCompare(Yn(o.last_seen_action),void 0,{sensitivity:"base"})*r;if(e==="eso"){const u=lt(i),b=lt(o),v={linked:0,candidate:1,unlinked:2},p=((s=v[u.status])!=null?s:9)-((c=v[b.status])!=null?c:9);return p!==0?p*r:u.esoAccountName.localeCompare(b.esoAccountName,void 0,{sensitivity:"base"})*r}return Tt(i).localeCompare(Tt(o),void 0,{sensitivity:"base"})*r})}function sd(t){yt!==t?(yt=t,Te="asc"):Te==="asc"?Te="desc":(yt="",Te=""),l()}function Tt(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function _o(t){return[Tt(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,ad(t),li(t==null?void 0:t.last_seen),di(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function lt(t){const e=$d(t==null?void 0:t.discord_id),n=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),r=String((e==null?void 0:e.eso_account_name)||"").trim();return n==="linked"&&r?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:r,title:`Linked ESO account: ${r}`}:(n==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&r?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:r,title:`Fuzzy ESO account candidate: ${r}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function od(t){const e=lt(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${f(e.className)}"
      title="${f(e.title)}"
      aria-label="${f(e.label)}"
      role="img"
    ></span>
  `}function ad(t){const e=lt(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function cd(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!n)return"";if(/^https?:\/\//i.test(e))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function ld(t){const e=Tt(t),n=e?e.slice(0,2).toUpperCase():"?",r=cd(t);return r?`<span class="discord-member-avatar"><img src="${f(r)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${a(n)}</span>`}function li(t){const e=Number(t);if(!e)return"Never";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t||"");const r=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(n).reduce((i,o)=>(i[o.type]=o.value,i),{});return`${r.month}/${r.day}/${r.year} ${r.hour}:${r.minute} ${r.dayPeriod}`}function dd(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const n=(Date.now()-e*1e3)/864e5;return n>30?"discord-last-seen-red":n>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function di(t){const e=Number(t);if(!e)return"Never";const n=Date.now()-e*1e3;if(!Number.isFinite(n))return"";if(n<0)return"0 days";const r=Math.floor(n/864e5);return`${r} day${r===1?"":"s"}`}function bs(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const n=Date.now()-e*1e3;return Number.isFinite(n)?n<0?0:Math.floor(n/864e5):Number.POSITIVE_INFINITY}function Yn(t){return String(t||"").trim()||"None tracked"}function Ao(t=ci()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const n of t){const r=lt(n);e.push([Tt(n),r.label||"",r.esoAccountName||"",li(n==null?void 0:n.last_seen),di(n==null?void 0:n.last_seen),Yn(n==null?void 0:n.last_seen_action),(n==null?void 0:n.username)||"",(n==null?void 0:n.discord_id)||""])}return e.map(n=>n.map(lr).join("	")).join(`
`)}async function ud(){const t=ci().filter(i=>{const o=he(Gt),s=String(Me||"").trim().toLowerCase(),c=!o||he(_o(i)).includes(o),u=!s||lt(i).status===s;return c&&u}),e=Ao(t);if(await dr(e)){h("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:m});return}const r=document.querySelector("#discordLastSeenReportTsv");r&&(r.focus(),r.select()),h("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function fd(){dt=!0,x="",l(),L.length===0&&!q&&ir({silent:!0})}function Wr(){dt=!1,rr="",Ke="",kn="",vn="",ke=-1,l()}function Lo(t){return[...new Set((Array.isArray(L)?L:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function Eo(t,e){return t.map(n=>`<option value="${f(n)}" ${e===n?"selected":""}>${a(n)}</option>`).join("")}function hd(){return Eo(Lo("link_status"),kn)}function md(){return Eo(Lo("link_method"),vn)}function pd(){return`
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
          <button id="refreshMemberLinksButton" class="clear-discord-filters-button" type="button" ${q?"disabled":""}>Refresh Links</button>
          <button id="runMemberAutoLinkButton" class="refresh-discord-button" type="button" ${q?"disabled":""}>${q?"Running...":"Run Auto-Linking"}</button>
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
            value="${f(rr)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${kn===""?"selected":""}>All statuses</option>
            ${hd()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${vn===""?"selected":""}>All methods</option>
            ${md()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${Ke===""?"selected":""}>All actions</option>
            <option value="needs-link" ${Ke==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${Ke==="can-unlink"?"selected":""}>Unlink Available</option>
            <option value="can-unblock" ${Ke==="can-unblock"?"selected":""}>Unblock Available</option>
          </select>
        </div>

        ${x?`<div class="discord-data-error member-links-report-error">${a(x)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${kd()}
        </div>
      </div>
    </div>
  `}function $o(){var n,r,i,o,s,c;if(!dt)return;(n=document.querySelector("#closeMemberLinksReportButton"))==null||n.addEventListener("click",Wr),(r=document.querySelector("#refreshMemberLinksButton"))==null||r.addEventListener("click",()=>ir()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>Ld());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",vd),t.addEventListener("keydown",Ad)),(o=document.querySelector("#memberLinksReportActionFilter"))==null||o.addEventListener("change",Sd),(s=document.querySelector("#memberLinksReportStatusFilter"))==null||s.addEventListener("change",wd),(c=document.querySelector("#memberLinksReportMethodFilter"))==null||c.addEventListener("change",_d),wn(),document.querySelectorAll("[data-accept-member-candidate]").forEach(u=>{u.addEventListener("click",()=>Do(u.dataset.acceptMemberCandidate||"",u.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(u=>{u.addEventListener("click",()=>Ed(u.dataset.unlinkMemberLink||"",u.dataset.unlinkMemberLinkDiscordId||""))}),document.querySelectorAll("[data-unblock-member-auto-link]").forEach(u=>{u.addEventListener("click",()=>Mo(u.dataset.unblockMemberAutoLink||"",u.dataset.unblockMemberAutoLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",u=>{u.target===e&&Wr()})}function ys(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function ks(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function gd(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function bd(t){return[...Array.isArray(t)?t:[]].sort((e,n)=>{const r=ys(e)-ys(n);if(r!==0)return r;const i=ks(e).localeCompare(ks(n),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((n==null?void 0:n.discord_user_id)||""),void 0,{sensitivity:"base"})})}function yd(t){const e=jr(t);let n="";e==="Username"?n=(t==null?void 0:t.discord_username)||"":e==="Global Name"?n=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(n=(t==null?void 0:t.discord_server_nickname)||""),n||(n=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const r=e?` <span class="member-link-report-match-field">(${a(e)})</span>`:"";return`<span class="member-link-report-discord-name">${a(n)}</span>${r}`}function kd(){return q&&L.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(L)||L.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${bd(L).map(e=>{var o;const n=String(e.link_status||"").trim().toLowerCase(),r=String(e.link_method||"").trim().toLowerCase(),i=yd(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${f(gd(e))}"
                data-member-links-report-status="${f(n)}"
                data-member-links-report-method="${f(r)}"
                data-member-links-report-action="${f(Number(e.locked||0)===1||n==="blocked"?"can-unblock":n==="linked"?"can-unlink":n==="candidate"?"needs-link":"")}"
              >
                <td>${a(e.eso_account_name||"")}</td>
                <td>${i}</td>
                <td class="member-links-status-col">${a(Number(e.locked||0)===1||n==="blocked"?"blocked":n||"")}</td>
                <td class="member-links-method-col">${a(r||"")}${Number(e.locked||0)===1?" \u{1F512}":""}</td>
                <td class="member-links-action-col">
                  <div class="member-link-actions">
                    ${n==="candidate"?`<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${f(e.eso_account_name||"")}" data-accept-member-candidate-discord-id="${f(e.discord_user_id||"")}" aria-label="Accept candidate link" title="Accept candidate link">\u2713</button>`:""}
                    ${n==="linked"?`<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${f(e.eso_account_name||"")}" data-unlink-member-link-discord-id="${f(e.discord_user_id||"")}" aria-label="Unlink this ESO/Discord pair" title="Unlink this ESO/Discord pair">\u{1F5D1}</button>`:""}
                    ${Number(e.locked||0)===1||n==="blocked"?`<button class="member-link-report-action member-link-report-unblock" type="button" data-unblock-member-auto-link="${f(e.eso_account_name||"")}" data-unblock-member-auto-link-discord-id="${f(e.discord_user_id||"")}" aria-label="Remove auto-link block" title="Remove auto-link block">\u21BA</button>`:""}
                  </div>
                </td>
                <td class="member-links-confidence-col">${a(String((o=e.match_confidence)!=null?o:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function Ro(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function vs(t){const e=Ro();if(e.forEach(r=>r.classList.remove("member-links-report-row-active")),e.length===0){ke=-1;return}ke=Math.max(0,Math.min(t,e.length-1));const n=e[ke];n.classList.add("member-links-report-row-active"),n.scrollIntoView({block:"nearest"})}function wn(){const t=he(rr),e=String(Ke||"").trim().toLowerCase(),n=String(kn||"").trim().toLowerCase(),r=String(vn||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let o=0;i.forEach(c=>{const u=he(c.dataset.memberLinksReportSearch||""),b=String(c.dataset.memberLinksReportAction||"").trim().toLowerCase(),v=String(c.dataset.memberLinksReportStatus||"").trim().toLowerCase(),p=String(c.dataset.memberLinksReportMethod||"").trim().toLowerCase(),pe=(!t||u.includes(t))&&(!e||b===e)&&(!n||v===n)&&(!r||p===r);c.hidden=!pe,c.classList.remove("member-links-report-row-active"),pe&&(o+=1)});const s=document.querySelector("#memberLinksReportSearchEmpty");s&&(s.hidden=o!==0),ke=-1}function vd(t){rr=t.target.value||"",wn()}function Sd(t){Ke=t.target.value||"",wn()}function wd(t){kn=t.target.value||"",wn()}function _d(t){vn=t.target.value||"",wn()}function Ad(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Ro();if(e.length===0)return;if(t.key==="ArrowDown"){const r=ke<0?0:ke+1;vs(r>=e.length?e.length-1:r);return}const n=ke<0?e.length-1:ke-1;vs(n<0?0:n)}async function ir(t={}){if(!(d!=null&&d.connected)){x="You must be connected to load member links.",l();return}q=!0,x="",t.silent||l();try{const e=await w("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");L=Array.isArray(e.links)?e.links:[]}catch(e){x=k(e)}finally{q=!1,l()}}async function Ld(){if(!(d!=null&&d.connected)||!g.logged_in){x="You must be logged in and connected to run auto-linking.",l();return}q=!0,x="",l();try{const t=await w("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");L=Array.isArray(t.links)?t.links:[],h("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:m})}catch(t){x=k(t)}finally{q=!1,l()}}async function Do(t,e=""){try{const n=await w("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to accept candidate.");L=Array.isArray(n.links)?n.links:L,h("member-link-accepted",n.message||"Candidate accepted as a link.",{ttlMs:m})}catch(n){x=k(n),h("member-link-accept-error",x,{ttlMs:m})}}async function Mo(t,e=""){if(!await oi({title:"Remove Auto-Link Block?",message:`Remove the blocked auto-match record between ${t} and this Discord account? Auto-linking will run immediately and this screen will refresh to show whether the pair linked again.`,confirmLabel:"Unblock",cancelLabel:"Cancel",confirmClass:"danger"}))return!1;q=!0,x="",l();try{const r=await w("guildsync:unblock-member-auto-link",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to remove auto-link block.");L=Array.isArray(r.links)?r.links:L;const i=ie(t),o=String(e||"").trim(),s=r.refreshedPair||L.find(b=>ie(b.eso_account_name)===i&&String(b.discord_user_id||"").trim()===o),c=String((s==null?void 0:s.link_status)||"").trim().toLowerCase(),u=c==="linked"?" It linked again automatically.":c==="candidate"?" It is now showing as a candidate.":" No automatic link was recreated.";return h("member-link-unblocked",`${r.message||"Auto-link block removed."}${u}`,{ttlMs:m}),!0}catch(r){return x=k(r),h("member-link-unblock-error",x,{ttlMs:m}),!1}finally{q=!1,l()}}async function Ed(t,e=""){if(!!await oi({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const r=await w("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to unlink member.");L=Array.isArray(r.links)?r.links:L,h("member-link-unlinked",r.message||"Member link removed.",{ttlMs:m})}catch(r){x=k(r)}l()}}function ie(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function sr(t){const e=ie(t);return e?L.filter(n=>ie(n.eso_account_name)===e):[]}function or(t){const e=String(t||"").trim();return e?L.filter(n=>String(n.discord_user_id||"").trim()===e):[]}function To(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const n=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(n.length>0){const i=n.find(s=>String(s.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const o=n.find(s=>String(s.link_method||"").trim().toLowerCase()==="exact");return o||n[0]}const r=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return r||e[0]}function $d(t){return To(or(t))}function Rd(t){return`${ie(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function ui(){return _?_.mode==="discord-to-eso"?or(_.discordUserId):sr(_.esoAccountName):[]}function Dd(t){const e=String(t||"").trim(),n=G.find(r=>String(r.discord_id||"").trim()===e);return n&&(n.server_nickname||n.global_name||n.username||n.discord_id)||e}function No(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?or(t.discordUserId):sr(t.esoAccountName),r=To(n),i=String((r==null?void 0:r.link_status)||"").trim().toLowerCase(),o=n.filter(c=>String(c.link_status||"").trim().toLowerCase()==="linked").length,s=n.filter(c=>String(c.link_status||"").trim().toLowerCase()==="candidate").length;return o>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?o===1?r.eso_account_name:`${o} ESO accounts`:o===1?r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member":`${o} Discord accounts`}`}:i==="candidate"||s>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?r.eso_account_name:r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member"}`}:i==="blocked"||Number((r==null?void 0:r.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function Bo(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,r=No(t);return`
    <button
      class="member-link-status-dot member-link-status-${f(r.className)}"
      type="button"
      title="${f(r.title)}"
      aria-label="${f(r.label)}"
      data-open-member-link-dialog="${f(e)}"
      data-member-link-value="${f(n||"")}"
    ></button>
  `}function Md(){return _?_.mode==="discord-to-eso"?Dd(_.discordUserId):_.esoAccountName||"":""}function Co(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function jr(t){const e=Co((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const n=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(n.includes("discord_username")||n.includes("username"))return"Username";if(n.includes("discord_display_name")||n.includes("global")||n.includes("display"))return"Global Name";if(n.includes("discord_server_nickname")||n.includes("server")||n.includes("nickname"))return"Server Nickname";const r=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(r==="exact"||r==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",o=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let s=null;for(const c of o){const u=Td(i,c.value);(!s||u>s.score)&&(s={...c,score:u})}if(s&&s.score>0)return s.field}return""}function he(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function Td(t,e){const n=he(t),r=he(e);if(!n||!r)return 0;if(n===r)return 100;if((n.includes(r)||r.includes(n))&&Math.min(n.length,r.length)>=4)return 88;const i=Math.abs(n.length-r.length),o=[...n].findIndex((c,u)=>c!==r[u]),s=o===-1?Math.min(n.length,r.length):o;return Math.max(0,Math.min(75,Math.round(s*10-i*3)))}function Nd(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function Bd(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function Cd(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),n=Nd(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${a(n)}</span>`}function Id(t){var c;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",n=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",r=String(t.link_status||"").trim().toLowerCase(),s=r==="linked"?`<button
        class="member-link-trash-button"
        type="button"
        aria-label="Unlink this ESO/Discord pair"
        title="Unlink this ESO/Discord pair"
        data-unlink-dialog-member-link
        data-unlink-eso-account="${f(t.eso_account_name||"")}"
        data-unlink-discord-user-id="${f(t.discord_user_id||"")}"
      >\u{1F5D1}</button>`:r==="candidate"?`<button
          class="member-link-approve-button"
          type="button"
          aria-label="Approve suggested link"
          title="Approve suggested link"
          data-accept-dialog-member-candidate="${f(t.eso_account_name||"")}"
          data-accept-dialog-discord-user-id="${f(t.discord_user_id||"")}"
        >\u2713</button>`:Number(t.locked||0)===1||r==="blocked"?`<button
            class="member-link-approve-button member-link-unblock-button"
            type="button"
            aria-label="Remove auto-link block"
            title="Remove auto-link block"
            data-unblock-dialog-member-auto-link
            data-unblock-eso-account="${f(t.eso_account_name||"")}"
            data-unblock-discord-user-id="${f(t.discord_user_id||"")}"
          >\u21BA</button>`:"";return`
    <div class="member-link-current-card">
      <div class="member-link-current-details">
        <div><span>ESO:</span> ${a(t.eso_account_name||"")}</div>
        <div><span>Discord:</span> ${a(e)}</div>
        <div><span>Status:</span> ${Cd(t)} \xB7 ${a(Bd(t.link_method))} \xB7 ${a(String((c=t.match_confidence)!=null?c:""))}% \xB7 ${a(n)}</div>
        ${jr(t)?`<div><span>Matched:</span> Matched on ${a(jr(t))}</div>`:""}
      </div>
      ${s}
    </div>
  `}function Od(){const t=ui();return t.length?[...t].sort((n,r)=>{var u,b;const i=String(n.link_status||"").trim().toLowerCase(),o=String(r.link_status||"").trim().toLowerCase(),s={linked:0,candidate:1,blocked:2,unlinked:3},c=((u=s[i])!=null?u:9)-((b=s[o])!=null?b:9);return c!==0?c:Number(r.match_confidence||0)-Number(n.match_confidence||0)}).map(n=>Id(n)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function qd(){if(Rt)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(_e)return`<div class="discord-data-error">${a(_e)}</div>`;if(!Array.isArray(rt)||rt.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(ui().map(n=>Rd(n))),e=[...rt].filter(n=>{const r=(_==null?void 0:_.mode)==="discord-to-eso"?`${ie(n.account_name)}::${String(_.discordUserId||"").trim()}`:`${ie(_==null?void 0:_.esoAccountName)}::${String(n.discord_id||"").trim()}`;return!t.has(r)}).sort((n,r)=>{const i=Number(r.confidence||0)-Number(n.confidence||0);return i!==0?i:Ss(n).localeCompare(Ss(r),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(n=>xd(n)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function Ss(t){return((_==null?void 0:_.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function xd(t,e={}){var p,y,M;const n=(_==null?void 0:_.mode)||"",r=n==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=Co(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),o=n==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),s=[o,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),c=n==="discord-to-eso"?t.account_name:t.discord_id,u=e.disabled===!0,b=[r,o,s,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),v=[r,s,`${(p=t.confidence)!=null?p:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${f(c||"")}" data-member-link-option-search="${f(b)}" title="${f(v)}" ${u?"disabled":""}>
      <span class="member-link-option-name" title="${f(r||"")}">${a(r||"")}</span>
      <span class="member-link-option-subtitle" title="${f(s||"")}">${a(s||"")}</span>
      <span class="member-link-option-confidence" title="${f(String((y=t.confidence)!=null?y:0))}%">${a(String((M=t.confidence)!=null?M:0))}%</span>
    </button>
  `}function Fd(){const t=(_==null?void 0:_.mode)||"",e=Md(),n=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
    <div class="roster-history-overlay member-link-dialog-overlay" role="dialog" aria-modal="true" aria-labelledby="memberLinkDialogTitle">
      <div class="roster-history-dialog member-link-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="memberLinkDialogTitle">Member Link</h3>
            <p>${a(e)} \u2192 choose ${a(n)}.</p>
          </div>
          <button id="closeMemberLinkDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close member link window" title="Close">\xD7</button>
        </div>

        <div class="member-link-dialog-body">
          <section class="member-link-dialog-section member-link-current-section">
            ${Od()}
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
              value="${f(Sn)}"
            />
            ${qd()}
          </section>
        </div>

      </div>
    </div>
  `}async function Io(t,e){if(!(d!=null&&d.connected)||!A()){h("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:m});return}je=!0,_=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},rt=[],Rt=!0,_e="",Sn="",oe=-1,l();try{if(!Array.isArray(L)||L.length===0){const i=await w("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(L=Array.isArray(i.links)?i.links:[])}const r=await w("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load link suggestions.");rt=Array.isArray(r.options)?r.options:[]}catch(n){_e=k(n)}finally{Rt=!1,l()}}function Nt(){document.removeEventListener("keydown",zr),je=!1,_=null,rt=[],Rt=!1,_e="",Sn="",oe=-1,l()}function Oo(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function ws(t){const e=Oo();if(e.forEach(r=>r.classList.remove("member-link-option-row-active")),e.length===0){oe=-1;return}oe=Math.max(0,Math.min(t,e.length-1));const n=e[oe];n.classList.add("member-link-option-row-active"),n.scrollIntoView({block:"nearest"})}function qo(){const t=he(Sn),e=[...document.querySelectorAll(".member-link-option-row")];let n=0;e.forEach(i=>{const o=he(i.dataset.memberLinkOptionSearch||i.textContent||""),s=!t||o.includes(t);i.hidden=!s,i.classList.remove("member-link-option-row-active"),s&&(n+=1)});const r=document.querySelector("#memberLinkSuggestionSearchEmpty");r&&(r.hidden=n!==0),oe=-1}function Pd(t){Sn=t.target.value||"",qo()}function Gd(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Oo();if(e.length===0)return;if(t.key==="ArrowDown"){const r=oe<0?0:oe+1;ws(r>=e.length?e.length-1:r);return}const n=oe<0?e.length-1:oe-1;ws(n<0?0:n)}function zr(t){!je||t.key==="Escape"&&(t.preventDefault(),Nt())}async function Ud(t){if(!(!_||!t))try{const e=_.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:_.discordUserId}:{esoAccountName:_.esoAccountName,discordUserId:t},n=await w("guildsync:manual-link-member",e,3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to link members.");L=Array.isArray(n.links)?n.links:L,h("member-link-saved",n.message||"Member link saved.",{ttlMs:m}),Nt()}catch(e){_e=k(e),l()}}async function Hd(t,e=""){await Do(t,e),Nt()}async function xo(){if(!!_){Rt=!0,_e="",l();try{const t=_.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:_.discordUserId}:{mode:"eso-to-discord",accountName:_.esoAccountName},e=await w("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");rt=Array.isArray(e.options)?e.options:[]}catch(t){_e=k(t)}finally{Rt=!1,l()}}}async function Vd(t="",e=""){const n=ui().find(i=>ie(i.eso_account_name)===ie(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!n||!await oi({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await w("guildsync:manual-unlink-member",{esoAccountName:n.eso_account_name,discordUserId:n.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");L=Array.isArray(i.links)?i.links:L,h("member-link-unlinked",i.message||"Member link removed.",{ttlMs:m}),await xo()}catch(i){_e=k(i),l()}}async function Wd(t="",e=""){await Mo(t,e)&&await xo()}function Fo(){var n;if(!je)return;document.removeEventListener("keydown",zr),document.addEventListener("keydown",zr),(n=document.querySelector("#closeMemberLinkDialogButton"))==null||n.addEventListener("click",Nt);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",Pd),t.addEventListener("keydown",Gd),qo()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(r=>{r.addEventListener("click",()=>Vd(r.dataset.unlinkEsoAccount||"",r.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-unblock-dialog-member-auto-link]").forEach(r=>{r.addEventListener("click",()=>Wd(r.dataset.unblockEsoAccount||"",r.dataset.unblockDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(r=>{r.addEventListener("click",()=>Ud(r.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(r=>{r.addEventListener("click",()=>Hd(r.dataset.acceptDialogMemberCandidate||"",r.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",r=>{r.target===e&&Nt()})}function Po(){var e,n,r;if(!qt)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",Ur),(n=document.querySelector("#rerunAssociateTicketReportButton"))==null||n.addEventListener("click",()=>Wo()),(r=document.querySelector("#copyAssociateTicketReportGridButton"))==null||r.addEventListener("click",()=>Ql());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Ur()})}function Go(){var e,n,r;if(!Ft)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",Hr),(n=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||n.addEventListener("click",()=>Vo()),(r=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||r.addEventListener("click",()=>td());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Hr()})}function Uo(){var r,i,o;if(!Pt)return;(r=document.querySelector("#closeDiscordLastSeenReportButton"))==null||r.addEventListener("click",Vr),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>Ho()),(o=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||o.addEventListener("click",()=>ud()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(s=>{s.addEventListener("click",()=>sd(s.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",jd);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",zd),fi();const n=document.querySelector(".discord-last-seen-report-overlay");n&&n.addEventListener("click",s=>{s.target===n&&Vr()})}function jd(t){Gt=t.target.value||"",fi()}function zd(t){Me=t.target.value||"",fi()}function fi(){const t=he(Gt),e=String(Me||"").trim().toLowerCase(),n=[...document.querySelectorAll("[data-discord-last-seen-row]")];let r=0;n.forEach(o=>{const s=he(o.dataset.discordLastSeenSearch||o.textContent||""),c=String(o.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),v=(!t||s.includes(t))&&(!e||c===e);o.hidden=!v,v&&(r+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=r!==0)}async function Ho(){if(!(d!=null&&d.connected)||!A()){nt="You must be logged in and connected to run this report.",l();return}De=!0,nt="",l();try{const t=await w("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");G=_i(t.members),tr=Ai(t.roles),ri=[...G]}catch(t){nt=k(t)}finally{De=!1,l(),D("discordLastSeenReportSearchInput")}}async function Vo(){if(!(d!=null&&d.connected)||!A()){tt="You must be logged in and connected to run this report.",l();return}Re=!0,tt="",l();try{const t=await w("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");mn=Array.isArray(t.rows)?t.rows:[]}catch(t){tt=k(t)}finally{Re=!1,l()}}async function Wo(){if(!(d!=null&&d.connected)||!A()){et="You must be logged in and connected to run this report.",l();return}$e=!0,et="",l();try{const t=await w("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");xt=Array.isArray(t.rows)?t.rows:[]}catch(t){et=k(t)}finally{$e=!1,l()}}function St(){const t=String(Wt||"").trim().toLowerCase(),e={account_name:"Anonymous",rank:"Manual Entry"},n=new Set(["anonymous"]),r=z.filter(i=>String(i.account_name||"").trim()).filter(i=>{const s=String(i.account_name||"").trim().toLowerCase();return!s||n.has(s)||t&&!s.includes(t)?!1:(n.add(s),!0)}).slice().sort((i,o)=>{const s=String(i.account_name||"").toLowerCase(),c=String(o.account_name||"").toLowerCase(),u=t&&s.startsWith(t)?0:1,b=t&&c.startsWith(t)?0:1;return u!==b?u-b:s.localeCompare(c)}).slice(0,19);return[e,...r]}function jo(t=St()){const e=String(E.accountName||"").trim();return t.length===0?'<div class="roster-history-muted manual-ticket-no-matches">No matching guild members found.</div>':t.map((n,r)=>`
        <button class="roster-history-match${r===I||n.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${f(n.account_name)}" role="option" aria-selected="${r===I||n.account_name===e?"true":"false"}">
          <span>${a(n.account_name)}</span>
          <strong>${a(n.rank||"")}</strong>
          ${r===I?"<small>Enter</small>":""}
        </button>
      `).join("")}function zo(){document.querySelectorAll("[data-manual-ticket-account]").forEach(t=>{t.addEventListener("mousedown",e=>{e.preventDefault()}),t.addEventListener("click",()=>{Yo(t.dataset.manualTicketAccount||"")})})}function Ar(){const t=document.querySelector("#manualTicketMatchList");if(!t)return;const e=St();I>=e.length&&(I=e.length>0?e.length-1:-1),t.innerHTML=jo(e),zo()}function Yo(t){const e=String(t||"").trim();E.accountName=e,Wt=e,ee=!1,I=-1,H="",l()}function D(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const n=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(n,n)},0)}function Yd(){const t=ee?St():[],e=String(E.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Entry</h3>
            <p>Add a manual banking or raffle entry such as FFTG, officer corrections, or anonymous gold.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${H?`<div class="discord-data-error">${a(H)}</div>`:""}

        <div class="manual-ticket-form">
          <div class="manual-ticket-member-picker">
            <label class="manual-ticket-member-field" for="manualTicketAccountSearchInput">
              <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(Wt)}" autocomplete="off" />
            </label>

            ${ee?`
              <div id="manualTicketMatchList" class="roster-history-match-list manual-ticket-match-list" role="listbox" aria-label="Matching guild members">
                ${jo(t)}
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
                <input id="manualTicketGoldInput" class="discord-search-input manual-ticket-gold-input" type="number" min="0" step="1" inputmode="numeric" placeholder="Gold Value" value="${f(E.goldValue)}" />
                <span class="manual-ticket-gold-coin" aria-hidden="true"></span>
              </label>
              <label class="manual-ticket-count-field">
                <div class="manual-ticket-number-wrap">
                  <input id="manualTicketCountInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${f(E.tickets)}" />
                  <div class="manual-ticket-number-buttons" aria-hidden="true">
                    <button id="manualTicketCountUpButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2303</button>
                    <button id="manualTicketCountDownButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2304</button>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div class="manual-ticket-actions">
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${Vn?"disabled":""}>${Vn?"Saving...":"Add Manual Entry"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Ko(){var o,s,c,u,b,v;if(!we)return;(o=document.querySelector("#closeManualBiweeklyTicketButton"))==null||o.addEventListener("click",()=>{we=!1,l()});const t=document.querySelector("#manualTicketAccountSearchInput");if(t){const p=({rerender:y=!1}={})=>{if(ee=!0,I=St().length>0?0:-1,y){l(),D("manualTicketAccountSearchInput");return}Ar()};t.addEventListener("focus",()=>{ee||p({rerender:!0})}),t.addEventListener("click",()=>{ee||p({rerender:!0})}),t.addEventListener("input",y=>{Wt=y.target.value||"",E.accountName="",ee=!0,I=St().length>0?0:-1,Ar()}),t.addEventListener("keydown",y=>{if(y.key==="Escape")return;if(!ee){(y.key==="ArrowDown"||y.key==="ArrowUp")&&(y.preventDefault(),p({rerender:!0}));return}const M=St();if(y.key==="ArrowDown"||y.key==="ArrowUp"){if(M.length===0)return;y.preventDefault();const Ae=y.key==="ArrowDown"?1:-1;I=((I<0?0:I)+Ae+M.length)%M.length,Ar();return}if(y.key!=="Enter")return;y.preventDefault();const Y=M[I>=0?I:0];Y!=null&&Y.account_name&&Yo(Y.account_name)})}zo(),(s=document.querySelector("#manualTicketNoteInput"))==null||s.addEventListener("input",p=>{E.note=p.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(p=>{p.addEventListener("click",()=>{const y=String(p.dataset.manualTicketType||"").trim().toLowerCase();E.ticketType=y==="monthly"?"monthly":"biweekly",l()})}),(c=document.querySelector("[data-manual-ticket-toggle]"))==null||c.addEventListener("click",()=>{E.ticketType=E.ticketType==="monthly"?"biweekly":"monthly",l()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",p=>{const y=String(p.target.value||"").replace(/\D/g,"");p.target.value!==y&&(p.target.value=y),E.goldValue=y});const n=document.querySelector("#manualTicketCountInput");n==null||n.addEventListener("input",p=>{const y=String(p.target.value||"").replace(/\D/g,"");p.target.value!==y&&(p.target.value=y),E.tickets=y});const r=p=>{const y=Number(E.tickets)||0,M=Math.max(0,y+p);E.tickets=String(M),n&&(n.value=E.tickets,n.focus())};(u=document.querySelector("#manualTicketCountUpButton"))==null||u.addEventListener("click",()=>r(1)),(b=document.querySelector("#manualTicketCountDownButton"))==null||b.addEventListener("click",()=>r(-1)),(v=document.querySelector("#saveManualBiweeklyTicketButton"))==null||v.addEventListener("click",()=>Kd());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",p=>{p.target===i&&(we=!1,l())})}async function Kd(){const t=String(E.accountName||"").trim(),e=String(E.note||"").trim(),n=String(E.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",r=Number(String(E.goldValue||"").trim()||0),i=Number(String(E.tickets||"").trim()||0);if(ee){H="Select a matching guild member or Anonymous from the list before saving.",l(),D("manualTicketAccountSearchInput");return}if(!t){H="Select a matching guild member or Anonymous from the list before saving.",l(),D("manualTicketAccountSearchInput");return}if(!Number.isFinite(r)||r<0){H="Gold value must be zero or greater.",l();return}if(!Number.isFinite(i)||i<0){H="Tickets must be zero or greater.",l();return}const o=t.toLowerCase()==="anonymous";if(o&&Math.floor(i)>0){H="Anonymous cannot be awarded tickets. Use 0 tickets and enter a gold value.",l();return}if(Math.floor(r)===0&&Math.floor(i)===0){H=o?"Enter a gold value for Anonymous when tickets are 0.":"Enter gold or tickets. Both cannot be zero.",l();return}Vn=!0,H="",l();try{const s=await w("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:n,gold_value:Math.floor(r),tickets:Math.floor(i)},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to add manual entry.");we=!1,E={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},Wt="",I=-1,ee=!1,await me({silent:!0}),h("manual-ticket-added",s.message||"Manual entry added.",{ttlMs:m})}catch(s){H=k(s)}finally{Vn=!1,l()}}async function Jd(t=""){const e=String(t||"").trim();if(!!e){Ot=!0,hn=e,Oe=[],Hn=!0,Ze=!1,qe="",Lt="",l();try{const n=await w("guildsync:request-roster-member-notes",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster notes.");Oe=Array.isArray(n.notes)?n.notes:[]}catch(n){qe=k(n)}finally{Hn=!1,l()}}}function Yr(){Ot=!1,hn="",Oe=[],Hn=!1,Ze=!1,qe="",Lt="",l()}function Qd(){var n,r;if(!Ot)return;(n=document.querySelector("#closeRosterNotesButton"))==null||n.addEventListener("click",Yr);const t=document.querySelector("#rosterNotesNewNote");t&&t.addEventListener("input",i=>{Lt=i.target.value||""}),(r=document.querySelector("#saveRosterNoteButton"))==null||r.addEventListener("click",()=>Xd());const e=document.querySelector(".roster-notes-overlay");e&&e.addEventListener("click",i=>{i.target===e&&Yr()})}async function Xd(){const t=String(Lt||"").trim();if(!t){qe="Enter a note before saving.",l();return}Ze=!0,qe="",l();try{const e=await w("guildsync:add-roster-member-note",{account_name:hn,note:t},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to save roster note.");e.note&&(Oe=[...Oe,e.note]),Lt="";const n=z.find(r=>ie(r.account_name)===ie(hn));n&&(n.note_count=Number(n.note_count||0)+1)}catch(e){qe=k(e)}finally{Ze=!1,l()}}function Jo(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>_n());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{At=!0,ve="",l()});const n=document.querySelector("#rosterMemberSearch");n&&(n.addEventListener("input",s=>{Un=s.target.value||"",qr=s.target.selectionStart,xr=s.target.selectionEnd,N=-1,l({restoreRosterSearchFocus:!0})}),n.addEventListener("keydown",Zd)),document.querySelectorAll("[data-roster-sort-column]").forEach(s=>{s.addEventListener("click",()=>{Nl(s.dataset.rosterSortColumn||"account_name")})});const r=document.querySelector("#rosterRankFilter");r&&r.addEventListener("change",s=>{const c=String(s.target.value||"").trim();c&&(Xe.add(c),N=-1,l())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(s=>{s.addEventListener("click",()=>{const c=s.dataset.removeRosterRankFilter||"";Xe.delete(c),N=-1,l()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",s=>{const c=String(s.target.value||"").trim();c&&(bt.add(c),N=-1,l())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(s=>{s.addEventListener("click",()=>{const c=s.dataset.removeRosterLinkStatusFilter||"";bt.delete(c),N=-1,l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(s=>{s.addEventListener("click",()=>Io(s.dataset.openMemberLinkDialog||"",s.dataset.memberLinkValue||""))}),document.querySelectorAll("[data-open-roster-notes]").forEach(s=>{s.addEventListener("click",()=>Jd(s.dataset.openRosterNotes||""))}),Qd();const o=document.querySelector("#clearRosterFiltersButton");o&&o.addEventListener("click",()=>{Un="",Xe.clear(),bt.clear(),ye="",F="",N=-1,l()}),eu()}function Zd(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){N=-1;return}t.preventDefault(),t.key==="ArrowDown"?N=N<0?0:Math.min(N+1,e.length-1):t.key==="ArrowUp"&&(N=N<0?e.length-1:Math.max(N-1,0)),e.forEach((r,i)=>{r.classList.toggle("roster-search-active-row",i===N)});const n=e[N];n&&typeof n.scrollIntoView=="function"&&n.scrollIntoView({block:"nearest",inline:"nearest"})}function eu(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{At=!1,l()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",n=>{if(fn=n.target.value||"",J=-1,!fn.trim()){clearTimeout(_r),ve="",W=[],He="",Ce=[],Ie=!1,l(),D("rosterHistorySearchInput");return}clearTimeout(_r),_r=setTimeout(()=>{iu({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(W.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;J=((J<0?0:J)+i+W.length)%W.length,l(),D("rosterHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=W[J>=0?J:0];r!=null&&r.account_name&&As(r.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(n=>{n.addEventListener("click",()=>{As(n.dataset.rosterHistoryAccount||"")})})}function Qo(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{Et=!1,l()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",n=>{Ee=n.target.value||"",Q=-1,ze+=1;const r=ze;if(clearTimeout(fs),!Ee.trim()){Se="",j=[],$t="",at="",xe=[],Fe=!1,l(),D("discordHistorySearchInput");return}fs=setTimeout(()=>{tu({auto:!0,keepFocus:!0,generation:r})},al)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(j.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;Q=((Q<0?0:Q)+i+j.length)%j.length,l(),D("discordHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=j[Q>=0?Q:0];r!=null&&r.discord_id&&_s(r.discord_id,Gr(r))})),document.querySelectorAll("[data-discord-history-id]").forEach(n=>{n.addEventListener("click",()=>{_s(n.dataset.discordHistoryId||"",n.dataset.discordHistoryName||"")})})}async function tu(t={}){const e=Number.isInteger(t.generation)?t.generation:++ze,n=Ee.trim();if(e===ze){if(!n){Se="",j=[],Q=-1,$t="",at="",xe=[],Fe=!1,l(),t.keepFocus&&D("discordHistorySearchInput");return}Fe=!0,Se="",j=[],Q=-1,$t="",at="",xe=[],l(),t.keepFocus&&D("discordHistorySearchInput");try{const r=await w("guildsync:request-discord-member-history",{query:n},3e4);if(e!==ze||n!==Ee.trim())return;if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search Discord member history.");j=nu(r.matches),Q=j.length>0?0:-1}catch(r){if(e!==ze||n!==Ee.trim())return;Se=k(r)}finally{if(e!==ze||n!==Ee.trim())return;Fe=!1,l(),t.keepFocus&&D("discordHistorySearchInput")}}}async function _s(t,e="",n={}){const r=String(t||"").trim();if(!!r){$t=r,at=String(e||r).trim(),Ee=at,xe=[],Fe=!0,Se="",l();try{const i=await w("guildsync:request-discord-member-history-events",{discord_id:r},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");xe=ru(i.events)}catch(i){Se=k(i)}finally{Fe=!1,n.keepLoading||l()}}}function nu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function ru(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,o,s,c,u,b,v,p,y;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((r=(n=e.old_value)!=null?n:e.oldValue)!=null?r:"").trim(),new_value:String((o=(i=e.new_value)!=null?i:e.newValue)!=null?o:"").trim(),event_timestamp:(u=(c=(s=e.event_timestamp)!=null?s:e.eventTimestamp)!=null?c:e.timestamp)!=null?u:"",event_datetime:(v=(b=e.event_datetime)!=null?b:e.eventDatetime)!=null?v:"",initiator:String((y=(p=e.initiator)!=null?p:e.initiatorName)!=null?y:"").trim(),source:String(e.source||"").trim()}}):[]}async function iu(t={}){const e=fn.trim();if(!e){ve="",W=[],J=-1,He="",Ce=[],Ie=!1,l(),t.keepFocus&&D("rosterHistorySearchInput");return}Ie=!0,ve="",W=[],J=-1,He="",Ce=[],l(),t.keepFocus&&D("rosterHistorySearchInput");try{const n=await w("guildsync:request-roster-rank-history",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search roster rank history.");W=su(n.matches),J=W.length>0?0:-1}catch(n){ve=k(n)}finally{Ie=!1,l(),t.keepFocus&&D("rosterHistorySearchInput")}}async function As(t,e={}){const n=String(t||"").trim();if(!!n){He=n,fn=n,Ce=[],Ie=!0,ve="",l();try{const r=await w("guildsync:request-roster-stream-history",{account_name:n},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load roster stream history.");Ce=ou(r.events)}catch(r){ve=k(r)}finally{Ie=!1,e.keepLoading||l()}}}function su(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function ou(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(r=(n=e.timestamp)!=null?n:e.timestampS)!=null?r:"",officer:String(e.officer||"").trim()}}):[]}function Xo(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(n=e.joined)!=null?n:"",note_count:Number((i=(r=e.note_count)!=null?r:e.noteCount)!=null?i:0)||0}}).sort((e,n)=>e.account_name.localeCompare(n.account_name)):[]}function au(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function ar(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function hi(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function cu(t={}){z=Xo(t.members),Gn=t.last_refresh||new Date().toISOString(),$==="eso-members"&&l(),h("roster-data-updated",`Roster data updated. Loaded ${z.length} member record${z.length===1?"":"s"}.`,{ttlMs:m})}async function _n(t={}){if(!!(d!=null&&d.connected)){Ue=!0,l();try{const e=await w("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");z=Xo(e.members),Gn=e.last_refresh||Gn,t.silent||h("roster-data-loaded",`Loaded ${z.length} roster member${z.length===1?"":"s"}.`,{ttlMs:m})}catch(e){h("roster-data-error",k(e),{ttlMs:m})}finally{Ue=!1,l()}}}async function lu(t={}){var e;if(!!A()){if(!(d!=null&&d.connected)){h("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}Ue=!0,l();try{const n=await qc(t);if(!(n!=null&&n.ok)){h("roster-data-pending",(n==null?void 0:n.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:m});return}const r={local_upload_id:Zo(),authenticated_username:se(),authenticated_discord_user_id:((e=g==null?void 0:g.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await ta(r)}catch(i){throw du(r),i}await _n({silent:!0})}catch(n){h("roster-data-error",k(n),{ttlMs:m})}finally{Ue=!1,l()}}}function Zo(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function mi(){try{const t=window.localStorage.getItem(Xs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function ea(t){window.localStorage.setItem(Xs,JSON.stringify(Array.isArray(t)?t:[]))}function du(t){const e=String((t==null?void 0:t.local_upload_id)||Zo()),n=mi().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),ea(n),h("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function uu(t){const e=mi().filter(n=>(n==null?void 0:n.local_upload_id)!==t);ea(e)}async function fu(){if(vr||!(d!=null&&d.connected)||!A())return;const t=mi();if(t.length!==0){vr=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!A())return;await ta(e),uu(e.local_upload_id)}}catch(e){h("roster-data-pending-error",`Pending roster upload retry failed: ${k(e)}`,{ttlMs:m})}finally{vr=!1}}}async function ta(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await w("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const n=await Pc(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return h("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:m}),e}async function hu(t={}){var e,n;if(!!A()){if(!(d!=null&&d.connected)){h("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}try{const r=await Ic(t);if(!(r!=null&&r.ok)){h("applications-data-info",(r==null?void 0:r.message)||"No application records were found to process.",{ttlMs:m});return}if((Array.isArray((e=r==null?void 0:r.data)==null?void 0:e.records)?r.data.records:[]).length===0){h("applications-data-info",`No application records were found in ${r.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:m});return}const o={local_upload_id:na(),authenticated_username:se(),authenticated_discord_user_id:((n=g==null?void 0:g.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await ia(o)}catch(s){throw mu(o),s}}catch(r){h("applications-data-error",k(r),{ttlMs:m})}}}function na(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function pi(){try{const t=window.localStorage.getItem(Zs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function ra(t){window.localStorage.setItem(Zs,JSON.stringify(Array.isArray(t)?t:[]))}function mu(t){const e=String((t==null?void 0:t.local_upload_id)||na()),n=pi().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),ra(n),h("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function pu(t){const e=pi().filter(n=>(n==null?void 0:n.local_upload_id)!==t);ra(e)}async function gu(){if(Sr||!(d!=null&&d.connected)||!A())return;const t=pi();if(t.length!==0){Sr=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!A())return;await ia(e),pu(e.local_upload_id)}}catch(e){h("applications-data-pending-error",`Pending application upload retry failed: ${k(e)}`,{ttlMs:m})}finally{Sr=!1}}}async function ia(t){var i;if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return h("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:m}),{ok:!0,sent_count:0,skipped_empty:!0};let n=0;for(const o of e){const s=await w("guildsync:eso-guild-application-message",{...t,record:o,recordKey:(o==null?void 0:o.recordKey)||"",message:bu(o)},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Backend rejected the application data payload. Application data was not cleared.");n+=1}const r=await xc(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return h("applications-data-sent",`Sent ${n} application record${n===1?"":"s"} to GuildSync backend.`,{ttlMs:m}),{ok:!0,sent_count:n}}function bu(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),n=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",r=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",o=String(t.applicationText||"_No application text captured._"),s=Object.entries(t).filter(([c])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(c)).map(([c,u])=>`**${c}:** ${yu(u)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${n}** ${r} an application from **${i}**.`,"","**Application text:**","```",o.slice(0,1500),"```",s.length>0?"":null,s.length>0?"**Full captured record fields:**":null,...s].filter(c=>c!==null).join(`
`)}function yu(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function ku(t={}){await hu(t)}function vu(){const t=Kr(R),e=Xu(t,R),n=R!=="other",r=n&&jt(R);return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <button id="openBankingHistoryButton" class="refresh-discord-button banking-history-button" type="button" ${A()?"":'disabled title="Login required to lookup banking history."'}>
            <span aria-hidden="true">\u2315</span>
            <span>Lookup Banking History</span>
          </button>
          <button id="openManualBiweeklyTicketButton" class="bank-export-button" type="button" ${A()?"":'disabled title="Login required to add manual entries."'}>
            <span aria-hidden="true">\uFF0B</span>
            <span>Add Manual Entry</span>
          </button>
          ${Ru()}
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${a(wa(io))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${Ve||!A()?"disabled":""} ${A()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Ve?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${Lr("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${Lr("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${Lr("other","?","Other","All other deposits")}
        </div>

        ${$u(R)}

        <div class="bank-deposit-table-shell">
          <table class="bank-deposit-table${n?"":" bank-deposit-table-no-tickets"}">
            <thead>
              <tr>
                <th>Event ID</th>
                <th>Date / Time (Local)</th>
                <th>Depositor</th>
                <th>Amount Deposited</th>
                ${n?`<th>Purchased</th>${r?"<th>Bonus %</th><th>Bonus Tickets</th>":""}<th>Total Tickets</th>`:""}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>ef(i,n,r)).join(""):tf(n,r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${a(wt(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${R==="monthly"?`<div>Raffle Pot: <strong>${a(wt(Math.floor(e.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${R==="biweekly"?`<div>Raffle Pot: <strong>${a(wt(ua(e.amount)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${R==="biweekly"?`<div>Draws: <strong>${a(String(Zu(e.amount)))}</strong></div>`:""}
          ${n?`<div>Purchased: <strong>${a(ne(e.purchased))}</strong></div>${r?`<div>Bonus: <strong>${a(ne(e.bonus))}</strong></div>`:""}<div>Total Tickets: <strong>${a(ne(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${it?Au(Kr(re)):""}
    </div>
  `}function Su(){return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="bankingHistoryTitle">
      <div class="roster-history-dialog banking-history-dialog">
        <div class="roster-history-header banking-history-header">
          <div>
            <h3 id="bankingHistoryTitle">Banking History Lookup</h3>
            <p>Search prior banking records for a guild member.</p>
          </div>
        </div>

        <div class="banking-history-search-block">
          <label class="manual-ticket-field banking-history-search-field">
            <span>Search Member</span>
            <input id="bankingHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" autocomplete="off" placeholder="Start typing part of an account name..." value="${f(ct)}" />
          </label>
          ${wu()}
        </div>

        ${de?`<div class="discord-data-error">${a(de)}</div>`:""}

        <div class="banking-history-results">
          <div class="roster-history-section-title">Banking History${ce?`: ${a(ce)}`:""}${ce?`<span class="banking-history-count">${a(String(te.length))} record${te.length===1?"":"s"} found</span>`:""}</div>
          ${_u()}
        </div>
      </div>
    </div>
  `}function wu(){return ct.trim()?le&&O.length===0&&!ce?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">Searching...</div></div>':O.length===0&&!ce?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">No matching banking names found.</div></div>':O.length===0?"":`
    <div class="banking-history-autocomplete" role="listbox" aria-label="Banking history matches">
      ${O.map((t,e)=>`
        <button class="banking-history-autocomplete-option${e===X?" is-selected":""}" type="button" data-banking-history-account="${f(t.account_name)}">
          <span>${a(t.account_name)}</span>
          <small>${a(String(Number(t.record_count||t.recordCount||0)||0))} record${Number(t.record_count||t.recordCount||0)===1?"":"s"}</small>
        </button>
      `).join("")}
    </div>
  `:""}function _u(){const t=te.some(e=>e.bonus_enabled);return ce?le&&te.length===0?'<div class="roster-history-muted">Loading banking history...</div>':te.length===0?'<div class="roster-history-muted">No banking history found for this account.</div>':`
    <div class="roster-history-event-table-shell banking-history-table-shell">
      <table class="discord-member-table roster-history-event-table banking-history-table">
        <thead>
          <tr>
            <th class="banking-history-date-column">Date / Time (Local)</th>
            <th>Type</th>
            <th style="text-align:right;">Amount</th>
            <th style="text-align:right;">Purchased</th>
            ${t?'<th style="text-align:right;">Bonus %</th><th style="text-align:right;">Bonus Tickets</th>':""}
            <th style="text-align:right;">Total Tickets</th>
            <th class="banking-history-notes-column">Notes</th>
          </tr>
        </thead>
        <tbody>
          ${te.map(e=>{var n,r,i,o,s;return`
            <tr>
              <td>${a(Uu((i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:""))}</td>
              <td>${a(Hu(e.transaction_type||e.type||""))}</td>
              <td style="text-align:right;">${a(Vu((s=(o=e.deposit_amount)!=null?o:e.depositAmount)!=null?s:e.amount))} \u{1FA99}</td>
              <td style="text-align:right;">${a(Er(e.purchased_tickets))}</td>
              ${t?`<td style="text-align:right;">${e.bonus_enabled?`${a(ne(e.bonus_percent))}%`:""}</td><td style="text-align:right;">${e.bonus_enabled?a(Er(e.bonus_tickets)):""}</td>`:""}
              <td style="text-align:right;">${a(Er(e.total_tickets))}</td>
              <td class="banking-history-note-cell">${a(e.note||"")}</td>
            </tr>
          `}).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see banking history.</div>'}function Au(t){const e=jt(re);return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${a(ue(re))} Deposits</h3>
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
                <th>Purchased Tickets</th>
                ${e?"<th>Bonus %</th><th>Bonus Tickets</th>":""}
                <th>Total Tickets</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(n=>Lu(n)).join(""):Eu()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${a(ca(t))}</textarea>
      </div>
    </div>
  `}function Lu(t){const e=jt(re);return`
    <tr>
      <td>${a(t.displayName||"")}</td>
      <td>${a(String(vi(t,re)))}</td>
      <td>${a(String(t.purchasedTickets))}</td>
      ${e?`<td>${a(String(t.bonusPercent))}%</td><td>${a(String(t.bonusTickets))}</td>`:""}
      <td>${a(String(t.totalTickets))}</td>
      <td>${a(t.note||"")}</td>
    </tr>
  `}function Eu(){return`
    <tr>
      <td class="bank-empty-row" colspan="${jt(re)?7:5}">No deposits to export for ${a(ue(re))}.</td>
    </tr>
  `}function $u(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=yi(t),n=Jn(t),r=n<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${f(ue(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${a(ue(t))} Raffle Period ${n===0?"(Current)":`(${Math.abs(n)} period${Math.abs(n)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${a(On(e.salesStart))} through ${a(On(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${a(On(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${r?"":"disabled"} aria-label="Next ${f(ue(t))} raffle period">\u203A</button>
    </div>
  `}function Lr(t,e,n,r){const i=R===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${f(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${a(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${a(n)}</span>
        <span class="bank-section-subtitle">${a(r)}</span>
      </span>
    </button>
  `}function Ru(){if(!A())return"";const t=cr(),e=An(),n=sa(),r=t>0,i=e>0,o=n>0;if(!r&&!i&&!o)return"";let s="",c="",u=!1;r?(s=`Check Out ${t} Deposit Mail`,c="checkout"):i?(u=!0,ht?s=`Writing ${e} Pending Mail`:P.running?s=`${e} Mail Waiting for ESO Closure`:(ga("render-pending-mail-button"),s=`${e} Mail Writing to Disk`)):(u=!0,s=`${n} Mail Ready to Send`);const b=r?"Check out new deposit mail. GuildSync will immediately try to write it, or hold it until ESO closes.":i?"Deposit mail is already checked out and will be written automatically after ESO closes.":"Deposit mail has been written to ESO SavedVariables and is ready for ESO to send it and write acknowledgements.",v=Cr||ht,p=P.running?"ESO Running":"ESO Not Running",y=P.running?"eso-running":"eso-not-running";return`
    <button id="checkoutDepositMailButton" class="${`bank-export-button deposit-mail-button${u?" deposit-mail-status-only":""}`}" type="button" data-deposit-mail-action="${f(c)}" ${u||v?'aria-disabled="true"':""} title="${f(P.message||b)}" aria-label="${f(`${s}. ${b}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${a(s)}</span>
      <span aria-hidden="true">(</span><span class="deposit-mail-eso-status ${y}" aria-hidden="true">${a(p)}</span><span aria-hidden="true">)</span>
    </button>
  `}function An(){return Ln().reduce((t,e)=>t+zt(e.records).length,0)}function Du(){const t=(g==null?void 0:g.user)||{};return new Set([se(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function Mu(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?Du().has(e):!1}function sa(){return A()?U.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="written_to_eso"&&Mu(t)}).length:0}function cr(){return U.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="unsent"}).length}function Tu(t){const e=String(t||"").trim();return U.find(n=>String(n.eventId||"").trim()===e)||null}function gi(t){const e=String(t||"other").toLowerCase(),n=["biweekly","monthly","other"],r=n.includes(e)?e:"other",i=n.filter(o=>o!==r);return[i[0]||"biweekly",r,i[1]||"other"]}function bi(t={},e="other"){const n=String(e||"other").toLowerCase(),r=Number(t==null?void 0:t.amount)||0;return n===String((t==null?void 0:t.type)||"").toLowerCase()?Number(t==null?void 0:t.ticketAmount)||0:n==="biweekly"?Math.floor(r/500):n==="monthly"?Math.floor(r/2500):0}function oa(t={},e="other",n=""){const r=String(t.type||"other").toLowerCase(),i=ue(r),o=ue(e),s=se()||"Unknown user",c=[`Moved from ${i} to ${o} by ${s}.`,`Ref ${t.eventId||""}`],u=String(n||"").trim();return u&&c.push(`Reason: ${u}`),c.join(`
`)}function Nu(t){const e=Tu(t);if(!e){h("banking-move-missing","Could not find the selected banking entry.",{ttlMs:m});return}const n=String(e.type||"other").toLowerCase();be=e,B={targetType:n,note:"",tickets:String(bi(e,n))},ge="",Mt=!1,Ht=!0,l()}function Kn(){Ht=!1,Mt=!1,ge="",be=null,B={targetType:"other",note:"",tickets:""},l()}function Bu(){const t=be||{},e=String(t.type||"other").toLowerCase(),n=ue(e),r=gi(e);let i=String(B.targetType||r[0]||"other").toLowerCase();r.includes(i)||(i=r[0]||"other",B.targetType=i);const o=oa(t,i,B.note);return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="bankingMoveDialogTitle">
      <div class="roster-history-dialog manual-ticket-dialog banking-move-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="bankingMoveDialogTitle">Move Banking Entry</h3>
            <p>Move this deposit to a different banking section while preserving a reference to the original event.</p>
          </div>
          <button id="closeBankingMoveDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${ge?`<div class="discord-data-error">${a(ge)}</div>`:""}

        <div class="manual-ticket-form banking-move-form">
          <div class="banking-move-current-entry">
            <div><strong>Current Type:</strong> ${a(n)}</div>
            <div><strong>Event ID:</strong> ${a(t.eventId||"")}</div>
            <div><strong>Depositor:</strong> ${a(t.displayName||"")}</div>
            <div><strong>Amount:</strong> ${a(wt(t.amount))} \u{1FA99}</div>
          </div>

          <div class="banking-move-target-row banking-move-slider-row">
            <span>Move To</span>
            <div class="banking-move-slider-control" role="radiogroup" aria-label="Move banking entry destination">
              <div class="banking-move-slider-labels">
                ${r.map(s=>`
                  <button
                    class="banking-move-slider-label ${i===s?"selected":""} ${s===e?"current":""}"
                    type="button"
                    role="radio"
                    aria-checked="${i===s?"true":"false"}"
                    data-banking-move-target="${f(s)}"
                  >
                    <strong>${a(ue(s))}</strong>
                    <span>${s===e?"Current / restore original values":`${a(String(bi(t,s)))} tickets`}</span>
                  </button>
                `).join("")}
              </div>
            </div>
          </div>

          <div class="banking-move-compact-row">
            <label class="manual-ticket-count-field banking-move-ticket-field">
              <span>Tickets Awarded</span>
              <input id="bankingMoveTicketsInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${f(B.tickets)}" ${i==="other"?"disabled":""} />
            </label>

            <label class="manual-ticket-note-field banking-move-note-field">
              <span>Move Note</span>
              <textarea id="bankingMoveNoteInput" class="discord-search-input manual-ticket-note-input banking-move-note-input" rows="1" placeholder="Optional reason for this move">${a(B.note)}</textarea>
            </label>
          </div>

          <div class="roster-history-muted banking-move-generated-note">${a(o).replace(/\n/g,"<br>")}</div>

          <div class="manual-ticket-actions banking-move-actions">
            <button id="saveBankingMoveButton" class="refresh-discord-button banking-move-submit-button" type="button" ${Mt||i===e?"disabled":""}>${Mt?"MOVING...":i===e?"SELECT A SIDE TO MOVE":"MOVE"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Cu(){var n,r,i,o;if(!Ht)return;(n=document.querySelector("#closeBankingMoveDialogButton"))==null||n.addEventListener("click",()=>Kn());function t(s){const c=String(s||"other").toLowerCase(),u=String((be==null?void 0:be.type)||"other").toLowerCase(),b=gi(u);B.targetType=b.includes(c)?c:u,B.tickets=String(bi(be||{},B.targetType)),l()}document.querySelectorAll("[data-banking-move-target]").forEach(s=>{s.addEventListener("click",()=>t(s.dataset.bankingMoveTarget))}),(r=document.querySelector("#bankingMoveTicketsInput"))==null||r.addEventListener("input",s=>{const c=String(s.target.value||"").replace(/\D/g,"");s.target.value!==c&&(s.target.value=c),B.tickets=c}),(i=document.querySelector("#bankingMoveNoteInput"))==null||i.addEventListener("input",s=>{B.note=s.target.value||"";const c=document.querySelector(".banking-move-generated-note");c&&(c.innerText=oa(be||{},B.targetType||"other",B.note))}),(o=document.querySelector("#saveBankingMoveButton"))==null||o.addEventListener("click",()=>Iu());const e=document.querySelector(".roster-history-overlay");e&&e.addEventListener("click",s=>{s.target===e&&Kn()})}async function Iu(){const t=be;if(!(t!=null&&t.eventId)){ge="No banking entry is selected.",l();return}const e=String(t.type||"other").toLowerCase(),n=gi(e),r=String(B.targetType||n[0]||"other").toLowerCase();if(!n.includes(r)||r===e){ge="Select one of the side destinations before moving this entry.",l();return}const i=r==="other"?0:Math.floor(Number(String(B.tickets||"").trim()||0));if(!Number.isFinite(i)||i<0){ge="Tickets must be zero or greater.",l();return}Mt=!0,ge="",l();try{const o=await w("guildsync:move-banking-entry",{event_id:t.eventId,target_type:r,tickets:i,note:B.note||""},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Failed to move banking entry.");Kn(),await me({silent:!0}),h("banking-entry-moved",o.message||"Banking entry moved.",{ttlMs:m})}catch(o){Mt=!1,ge=k(o),l()}}function Ou(){if(!A()){h("banking-history-login-required","Login required to lookup banking history.",{ttlMs:m});return}Vt=!0,ct="",O=[],te=[],ce="",le=!1,de="",X=-1,clearTimeout(vt),l(),D("bankingHistorySearchInput")}function qu(){Vt=!1,le=!1,de="",clearTimeout(vt)}function xu(){if(!Vt)return;const t=document.querySelector("#bankingHistorySearchInput");t&&(t.addEventListener("input",e=>{if(ct=e.target.value||"",X=-1,ce="",te=[],!ct.trim()){clearTimeout(vt),de="",O=[],le=!1,l(),D("bankingHistorySearchInput");return}clearTimeout(vt),vt=setTimeout(()=>{Fu({keepFocus:!0})},250)}),t.addEventListener("keydown",e=>{if(e.key==="ArrowDown"||e.key==="ArrowUp"){if(O.length===0)return;e.preventDefault();const r=e.key==="ArrowDown"?1:-1;X=((X<0?0:X)+r+O.length)%O.length,l(),D("bankingHistorySearchInput");return}if(e.key!=="Enter")return;e.preventDefault();const n=O[X>=0?X:0];n!=null&&n.account_name&&Ls(n.account_name)})),document.querySelectorAll("[data-banking-history-account]").forEach(e=>{e.addEventListener("click",()=>{Ls(e.dataset.bankingHistoryAccount||"")})})}async function Fu(t={}){const e=ct.trim();if(!e){de="",O=[],X=-1,ce="",te=[],le=!1,l(),t.keepFocus&&D("bankingHistorySearchInput");return}le=!0,de="",O=[],X=-1,l(),t.keepFocus&&D("bankingHistorySearchInput");try{const n=await w("guildsync:request-banking-history-matches",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search banking history.");O=Pu(n.matches),X=O.length>0?0:-1}catch(n){de=k(n)}finally{le=!1,l(),t.keepFocus&&D("bankingHistorySearchInput")}}async function Ls(t){const e=String(t||"").trim();if(!!e){clearTimeout(vt),ce=e,ct=e,O=[],te=[],le=!0,de="",l();try{const n=await w("guildsync:request-banking-history-records",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load banking history.");te=Gu(n.records)}catch(n){de=k(n)}finally{le=!1,l()}}}function Pu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,o;return{account_name:String(e.account_name||e.accountName||"").trim(),record_count:Number((r=(n=e.record_count)!=null?n:e.recordCount)!=null?r:0)||0,last_event_timestamp:(o=(i=e.last_event_timestamp)!=null?i:e.lastEventTimestamp)!=null?o:""}}).filter(e=>e.account_name):[]}function Gu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,o,s,c,u,b,v,p,y,M,Y,Ae,pe,Yt,Kt,Jt,Qt;return{event_id:String(e.event_id||e.eventId||"").trim(),transaction_type:String(e.transaction_type||e.transactionType||e.type||"").trim(),event_timestamp:(i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:"",deposit_amount:(c=(s=(o=e.deposit_amount)!=null?o:e.depositAmount)!=null?s:e.amount)!=null?c:"",ticket_quantity:(v=(b=(u=e.ticket_quantity)!=null?u:e.ticketQuantity)!=null?b:e.ticketAmount)!=null?v:"",purchased_tickets:(Y=(M=(y=(p=e.purchasedTickets)!=null?p:e.ticket_quantity)!=null?y:e.ticketQuantity)!=null?M:e.ticketAmount)!=null?Y:0,bonus_tickets:(Ae=e.bonusTickets)!=null?Ae:0,bonus_percent:(pe=e.bonusPercent)!=null?pe:0,bonus_enabled:e.bonusEnabled===!0,total_tickets:(Qt=(Jt=(Kt=(Yt=e.totalTickets)!=null?Yt:e.ticket_quantity)!=null?Kt:e.ticketQuantity)!=null?Jt:e.ticketAmount)!=null?Qt:0,note:String(e.note||"").trim()}}).sort((e,n)=>{const r=Number(e.event_timestamp)||0,i=Number(n.event_timestamp)||0;return r!==i?r-i:String(e.event_id).localeCompare(String(n.event_id),void 0,{numeric:!0})}):[]}function Uu(t){const e=Number(t);if(!e)return"";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t);const r=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0"),o=String(n.getFullYear()),s=String(n.getHours()).padStart(2,"0"),c=String(n.getMinutes()).padStart(2,"0"),u=String(n.getSeconds()).padStart(2,"0");return`${r}/${i}/${o} ${s}:${c}:${u}`}function Hu(t){const e=String(t||"").trim().toLowerCase();return e==="monthly"?"50/50":e==="biweekly"?"Bi-Weekly":e==="other"?"Other":e?e.replace(/\b\w/g,n=>n.toUpperCase()):""}function Vu(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":wt(e)}function Er(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":ne(e)}function aa(){if($!=="more")return;Cu(),xu(),document.querySelectorAll("[data-bank-entry-move]").forEach(c=>{c.addEventListener("click",()=>Nu(c.dataset.bankEntryMove||""))}),document.querySelectorAll("[data-bank-section]").forEach(c=>{c.addEventListener("click",()=>{R=c.dataset.bankSection||"biweekly",l()})}),document.querySelectorAll("[data-bank-export-section]").forEach(c=>{c.addEventListener("click",()=>{re=(c.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",it=!0,l()})}),document.querySelectorAll("[data-bank-period-move]").forEach(c=>{c.addEventListener("click",()=>{zu(c.dataset.bankPeriodMove||""),l()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{it=!1,l()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>Wu());const n=document.querySelector(".bank-export-overlay");n&&n.addEventListener("click",c=>{c.target===n&&(it=!1,l())});const r=document.querySelector("#openBankingHistoryButton");r&&r.addEventListener("click",()=>Ou());const i=document.querySelector("#openManualBiweeklyTicketButton");i&&i.addEventListener("click",async()=>{if(!A()){h("manual-ticket-login-required","Login required to add manual entries.",{ttlMs:m});return}we=!0,H="",Wt=E.accountName||"",ee=!1,I=-1,z.length===0&&(d==null?void 0:d.connected)&&A()&&await _n({silent:!0}),l()});const o=document.querySelector("#checkoutDepositMailButton");o&&o.addEventListener("click",()=>{o.dataset.depositMailAction==="checkout"&&o.getAttribute("aria-disabled")!=="true"&&df()});const s=document.querySelector("#refreshBankingDataButton");s&&s.addEventListener("click",()=>{if(!A()){h("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:m});return}ha({key:"banking"})})}function ca(t){const e=jt(re),n=[["Guildie Name","Deposit Amount","Purchased Tickets",...e?["Bonus %","Bonus Tickets"]:[],"Total Tickets","Note"]];for(const r of t)n.push([r.displayName||"",String(vi(r,re)),String(r.purchasedTickets),...e?[`${r.bonusPercent}%`,String(r.bonusTickets)]:[],String(r.totalTickets),r.note||""]);return n.map(r=>r.map(lr).join("	")).join(`
`)}function lr(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function dr(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly","readonly"),n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.width="1px",n.style.height="1px",n.style.opacity="0",n.style.pointerEvents="none",n.style.zIndex="-1",document.body.appendChild(n),n.focus(),n.select(),n.setSelectionRange(0,n.value.length);let r=!1;try{r=document.execCommand("copy")}finally{document.body.removeChild(n)}return r}async function Wu(){const t=Kr(re),e=ca(t);if(await dr(e)){h("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:m});return}const r=document.querySelector("#bankingExportTsv");r&&(r.focus(),r.select()),h("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:m})}function Kr(t){return U.filter(e=>e.type===t).filter(e=>ju(t,e)).sort((e,n)=>(Number(e.time)||0)-(Number(n.time)||0))}function ju(t,e){if(t==="other")return!0;const n=Number(e==null?void 0:e.time)||0;if(n<=0)return!1;const r=yi(t);return n>=r.salesStart&&n<=r.salesEnd}function Jn(t){return Number(Fr[t])||0}function zu(t){if(R!=="biweekly"&&R!=="monthly")return;const e=Jn(R);if(t==="previous"){Fr[R]=e-1;return}t==="next"&&e<0&&(Fr[R]=e+1)}function yi(t){const e=Math.floor(Date.now()/1e3);if(t==="monthly"){const i=Yu(e,Jn(t));return{salesStart:da(i)+1,salesEnd:i,raffleTime:i+Wn}}const n=We;let r=la(e);return r+=Jn(t)*n,{salesStart:r-n+1,salesEnd:r,raffleTime:r+Wn}}function la(t){const e=We;let n=cl;for(;n-e>t;)n-=e;for(;n<t;)n+=e;return n}function Yu(t,e=0){let n=Ku(t),r=Number(e)||0;for(;r<0;)n=da(n),r+=1;for(;r>0;)n=Ju(n),r-=1;return n}function Ku(t){let e=la(t);for(;!ki(e);)e+=We;return e}function da(t){let e=t-We;for(;!ki(e);)e-=We;return e}function Ju(t){let e=t+We;for(;!ki(e);)e+=We;return e}function ki(t){const e=t+Wn,n=t+We+Wn;return Es(e)!==Es(n)}function Es(t){var o,s;const e=new Date(Number(t||0)*1e3);if(Number.isNaN(e.getTime()))return"";const n=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit"}).formatToParts(e),r=((o=n.find(c=>c.type==="year"))==null?void 0:o.value)||"",i=((s=n.find(c=>c.type==="month"))==null?void 0:s.value)||"";return`${r}-${i}`}function Qu(t=R){const e=String(t||"").toLowerCase();return e!=="monthly"&&e!=="biweekly"?0:"auto"}function vi(t={},e=R){const n=Number(t.amount)||0;if(!Qu(e))return n;const r=Math.abs(Math.trunc(n))%10,i=r===1||r===3?r:0;return i>0&&n>i?n-i:n}function Xu(t,e=R){return t.reduce((n,r)=>(n.amount+=vi(r,e),n.purchased+=Number(r.purchasedTickets)||0,n.bonus+=Number(r.bonusTickets)||0,n.tickets+=Number(r.totalTickets)||0,n),{amount:0,purchased:0,bonus:0,tickets:0})}function ua(t){const e=Math.ceil((Number(t)||0)/2);return e<=0?0:Math.ceil(e/2e5)*2e5}function Zu(t){const e=ua(t);return e>0?e/2e5:0}function jt(t){var n;if(t!=="biweekly"&&t!=="monthly")return!1;const{salesEnd:e}=yi(t);return((n=Dt.find(r=>r.type===t&&r.salesEnd===e))==null?void 0:n.enabled)===!0}function ef(t,e=!0,n=jt(R)){return`
    <tr>
      <td>${a(t.note||t.eventId||"")}</td>
      <td>${a(On(t.time))}</td>
      <td>${a(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${a(wt(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td>${a(ne(t.purchasedTickets))}</td>${n?`<td>${a(ne(t.bonusPercent))}%</td><td>${a(ne(t.bonusTickets))}</td>`:""}<td><strong class="bank-ticket-amount">${a(ne(t.totalTickets))}</strong></td>`:""}
      <td><button class="bank-entry-move-button" type="button" data-bank-entry-move="${f(t.eventId||"")}">Move</button></td>
    </tr>
  `}function tf(t=!0,e=!1){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?e?"9":"7":"5"}">No ${a(ue(R))} deposits found for this ${R==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function ue(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function On(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function wt(t){return(Number(t)||0).toLocaleString()}function ne(t){return(Number(t)||0).toLocaleString()}function zt(t){return Array.isArray(t)?t.map(e=>{var r,i,o,s,c,u,b,v,p,y,M,Y,Ae,pe,Yt,Kt,Jt,Qt,Mi,Ti,Ni,Bi,Ci,Ii,Oi,qi,xi,Fi,Pi,Gi,Ui,Hi,Vi,Wi,ji,zi,Yi,Ki,Ji,Qi,Xi,Zi,es,ts,ns,rs,is;const n=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:n==="monthly"||n==="biweekly"||n==="other"?n:"other",eventId:String((i=(r=e==null?void 0:e.eventId)!=null?r:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((s=(o=e==null?void 0:e.time)!=null?o:e==null?void 0:e.timestamp)!=null?s:0)||0,displayName:String((u=(c=e==null?void 0:e.displayName)!=null?c:e==null?void 0:e.display_name)!=null?u:"").trim(),amount:Number((b=e==null?void 0:e.amount)!=null?b:0)||0,ticketAmount:Number((p=(v=e==null?void 0:e.ticketAmount)!=null?v:e==null?void 0:e.ticket_amount)!=null?p:0)||0,purchasedTickets:Number((M=(y=e==null?void 0:e.purchasedTickets)!=null?y:e==null?void 0:e.ticketAmount)!=null?M:0)||0,bonusTickets:Number((Y=e==null?void 0:e.bonusTickets)!=null?Y:0)||0,bonusPercent:Number((Ae=e==null?void 0:e.bonusPercent)!=null?Ae:0)||0,bonusEnabled:(e==null?void 0:e.bonusEnabled)===!0,totalTickets:Number((Yt=(pe=e==null?void 0:e.totalTickets)!=null?pe:e==null?void 0:e.ticketAmount)!=null?Yt:0)||0,note:String((Kt=e==null?void 0:e.note)!=null?Kt:"").trim(),dataSource:String((Qt=(Jt=e==null?void 0:e.dataSource)!=null?Jt:e==null?void 0:e.data_source)!=null?Qt:"").trim(),emailRequested:Boolean((Mi=e==null?void 0:e.emailRequested)!=null?Mi:e==null?void 0:e.email_requested),mailStatus:String((Ni=(Ti=e==null?void 0:e.mailStatus)!=null?Ti:e==null?void 0:e.mail_status)!=null?Ni:"").trim(),mailRequestId:String((Ci=(Bi=e==null?void 0:e.mailRequestId)!=null?Bi:e==null?void 0:e.mail_request_id)!=null?Ci:"").trim(),mailBatchId:String((Oi=(Ii=e==null?void 0:e.mailBatchId)!=null?Ii:e==null?void 0:e.mail_batch_id)!=null?Oi:"").trim(),checkedOutBy:String((xi=(qi=e==null?void 0:e.checkedOutBy)!=null?qi:e==null?void 0:e.checked_out_by)!=null?xi:"").trim(),checkedOutAt:String((Pi=(Fi=e==null?void 0:e.checkedOutAt)!=null?Fi:e==null?void 0:e.checked_out_at)!=null?Pi:"").trim(),checkoutExpiresAt:String((Ui=(Gi=e==null?void 0:e.checkoutExpiresAt)!=null?Gi:e==null?void 0:e.checkout_expires_at)!=null?Ui:"").trim(),writtenToEsoAt:String((Vi=(Hi=e==null?void 0:e.writtenToEsoAt)!=null?Hi:e==null?void 0:e.written_to_eso_at)!=null?Vi:"").trim(),sentAt:String((ji=(Wi=e==null?void 0:e.sentAt)!=null?Wi:e==null?void 0:e.sent_at)!=null?ji:"").trim(),failedReason:String((Yi=(zi=e==null?void 0:e.failedReason)!=null?zi:e==null?void 0:e.failed_reason)!=null?Yi:"").trim(),recipient:String((Xi=(Qi=(Ji=(Ki=e==null?void 0:e.recipient)!=null?Ki:e==null?void 0:e.account_name)!=null?Ji:e==null?void 0:e.displayName)!=null?Qi:e==null?void 0:e.display_name)!=null?Xi:"").trim(),subject:String((ts=(es=(Zi=e==null?void 0:e.subject)!=null?Zi:e==null?void 0:e.mailSubject)!=null?es:e==null?void 0:e.mail_subject)!=null?ts:"").trim(),body:String((is=(rs=(ns=e==null?void 0:e.body)!=null?ns:e==null?void 0:e.mailBody)!=null?rs:e==null?void 0:e.mail_body)!=null?is:"").trim()}}):[]}function nf(t){const e=new Map;for(const n of U)n.eventId&&e.set(n.eventId,n);for(const n of t)!n.eventId||e.set(n.eventId,n);U=Array.from(e.values()).sort((n,r)=>(Number(r.time)||0)-(Number(n.time)||0))}function fa(){io=new Date().toISOString()}async function rf(t={}){!(t!=null&&t.ok)||(U=zt(t.entries),t.bonusSettings&&(Z=t.bonusSettings),Array.isArray(t.bonusRaffles)&&(Dt=t.bonusRaffles),fa(),$==="more"&&l(),h("banking-data-updated",`Banking data updated. Loaded ${U.length} deposit record${U.length===1?"":"s"}.`,{ttlMs:m}))}async function me(t={}){const e=Boolean(t.silent),n=Boolean(t.background);if(!(d!=null&&d.connected)){e||h("banking-data-error","GuildSync websocket is not connected.",{ttlMs:m});return}n||(Ve=!0,l());try{const r=await w("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");U=zt(r.entries),r.bonusSettings&&(Z=r.bonusSettings),Array.isArray(r.bonusRaffles)&&(Dt=r.bonusRaffles),fa(),e||h("banking-data",`Loaded ${U.length} banking deposit record${U.length===1?"":"s"}.`,{ttlMs:m})}catch(r){e||h("banking-data-error",k(r),{ttlMs:m})}finally{n||(Ve=!1),l()}}async function $s(){!(d!=null&&d.connected)||!A()||Ve||(await me({silent:!0,background:!0}),cr()<=0&&An()>0&&(P.running?l():ga("availability-refresh")))}function sf(){ft&&clearInterval(ft),$s(),ft=window.setInterval($s,il)}function of(){ft&&(clearInterval(ft),ft=null)}async function af(t={}){if(!!A()){if(!(d!=null&&d.connected)){h("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:m});return}try{const e=await Cc(t);if(!(e!=null&&e.ok))return;const n=Array.isArray(e.ackEntries)?e.ackEntries:[];if(n.length===0)return;const r=await w("guildsync:mark-deposit-mail-sent",{mail_ack:n,mail_request_ids:n.map(s=>(s==null?void 0:s.mail_request_id)||(s==null?void 0:s.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(r.mail_request_ids)?r.mail_request_ids:Array.isArray(r.mailRequestIds)?r.mailRequestIds:[];if(i.length===0){h("deposit-mail-ack-none",r.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:m});return}const o=await Nc(i);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");h("deposit-mail-ack-sent",o.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:m}),await me({silent:!0})}catch(e){h("deposit-mail-ack-error",k(e),{ttlMs:m})}}}async function cf(){if(!wr){wr=!0;try{const t=await Gc();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&h("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:m})}catch(t){h("deposit-mail-ack-cleanup-error",k(t),{ttlMs:m})}finally{wr=!1}}}async function ha(t={}){var e,n;if(!!A()){if(!(d!=null&&d.connected)){h("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}Ve=!0,l();try{const r=await Oc(t);if(!(r!=null&&r.ok)){h("banking-data-pending",(r==null?void 0:r.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:m});return}const i=zt((e=r==null?void 0:r.data)==null?void 0:e.entries);nf(i);const o=new Date().toISOString(),s={local_upload_id:ba(),authenticated_username:se(),authenticated_discord_user_id:((n=g==null?void 0:g.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:o,data:r.data||{}};try{await ka(s)}catch(c){throw hf(s),c}await me({silent:!0})}catch(r){h("banking-data-error",k(r),{ttlMs:m})}finally{Ve=!1,l()}}}function ma(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Ln(){try{const t=window.localStorage.getItem(Qs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function pa(t){window.localStorage.setItem(Qs,JSON.stringify(Array.isArray(t)?t:[]))}function lf(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||ma()),n=Ln().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);n.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),pa(n)}function Rs(t){const e=String(t||"").trim();if(!e)return;const n=Ln().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);pa(n)}async function df(){if(!A()){h("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:m});return}if(!(d!=null&&d.connected)){h("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:m});return}const t=Ln(),e=cr();if(t.length>0&&e<=0){await Bt();return}Cr=!0,l();try{const n=await w("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail checkout request.");const r=zt(n.records);if(r.length===0){h("deposit-mail-none",n.message||"No unsent deposit mail is available.",{ttlMs:m}),await me({silent:!0});return}const i={mail_batch_id:n.mail_batch_id||n.mailBatchId||ma(),checked_out_by:n.checked_out_by||n.checkedOutBy||se(),checked_out_at:new Date().toISOString(),records:r};lf(i),await Bt()}catch(n){h("deposit-mail-error",k(n),{ttlMs:m})}finally{Cr=!1,l()}}function ga(t=""){mt||ht||!A()||An()<=0||P.running||(mt=window.setTimeout(()=>{mt=null,Bt()},100))}async function Bt(){if(mt&&(window.clearTimeout(mt),mt=null),ht||!A())return;const t=Ln();if(t.length!==0){if(await Jr({silent:!0}),P.running){h("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:m}),l();return}ht=!0,l();try{for(const e of t){const n=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),r=zt(e==null?void 0:e.records);if(r.length===0){Rs(n);continue}const i=await Zc(r);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(d!=null&&d.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const o=await w("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:n,event_ids:i.eventIds||r.map(s=>s.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||"Backend did not confirm deposit mail was marked written_to_eso.");Rs(n),h("deposit-mail-written",i.message||`Wrote ${r.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:m})}await me({silent:!0})}catch(e){h("deposit-mail-write-error",k(e),{ttlMs:m})}finally{ht=!1,l()}}}async function Jr(t={}){try{const e=Boolean(P.running),n=await Uc();P={running:Boolean(n==null?void 0:n.running),message:String((n==null?void 0:n.message)||"")},P.running||await cf(),e&&!P.running&&(h("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:m}),await Bt()),e!==P.running&&l()}catch(e){t.silent||h("eso-status-error",k(e),{ttlMs:m})}}function uf(){ut&&clearInterval(ut),Jr({silent:!0}).then(()=>{!P.running&&An()>0&&Bt()}),ut=window.setInterval(()=>Jr({silent:!0}),rl)}function ff(){ut&&(clearInterval(ut),ut=null)}function ba(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Si(){try{const t=window.localStorage.getItem(Js),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function ya(t){window.localStorage.setItem(Js,JSON.stringify(Array.isArray(t)?t:[]))}function hf(t){const e=String((t==null?void 0:t.local_upload_id)||ba()),n=Si().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),ya(n),h("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function mf(t){const e=Si().filter(n=>(n==null?void 0:n.local_upload_id)!==t);ya(e)}async function pf(){if(kr||!(d!=null&&d.connected)||!A())return;const t=Si();if(t.length!==0){kr=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!A())return;await ka(e),mf(e.local_upload_id)}}catch(e){h("banking-data-pending-error",`Pending banking upload retry failed: ${k(e)}`,{ttlMs:m})}finally{kr=!1}}}async function ka(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await w("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const n=await Fc(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return h("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:m}),e}function va(){if($!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>gf());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{Et=!0,Se="",l(),D("discordHistorySearchInput")});const n=document.querySelector("#discordMemberSearch");n&&n.addEventListener("input",s=>{Pn=s.target.value||"",Ir=s.target.selectionStart,Or=s.target.selectionEnd,l({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(s=>{s.addEventListener("click",()=>{Sf(s.dataset.discordSortColumn||"username")})});const r=document.querySelector("#discordRoleFilter");r&&r.addEventListener("change",s=>{const c=String(s.target.value||"").trim();c&&(pt.add(c),l())}),document.querySelectorAll("[data-remove-role-filter]").forEach(s=>{s.addEventListener("click",()=>{const c=s.dataset.removeRoleFilter||"";pt.delete(c),l()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",s=>{const c=String(s.target.value||"").trim();c&&(gt.add(c),l())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(s=>{s.addEventListener("click",()=>{const c=s.dataset.removeDiscordLinkStatusFilter||"";gt.delete(c),l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(s=>{s.addEventListener("click",()=>Io(s.dataset.openMemberLinkDialog||"",s.dataset.memberLinkValue||""))});const o=document.querySelector("#clearDiscordFiltersButton");o&&o.addEventListener("click",()=>{Pn="",pt.clear(),gt.clear(),l()})}async function gf(){var t,e;if(!(d!=null&&d.connected)){h("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:m});return}Fn=!0,l(),h("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const n=await w("guildsync:request-discord-data-refresh",{requested_by:((t=g==null?void 0:g.user)==null?void 0:t.display_name)||((e=g==null?void 0:g.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to request Discord data refresh.");h("discord-refresh-requested",n.message||"Discord data refresh completed.",{ttlMs:m}),await wi({silent:!0})}catch(n){h("discord-refresh-error",k(n),{ttlMs:m})}finally{Fn=!1,l()}}async function bf(){if(!(d!=null&&d.connected))return;const t=await w("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(nr=t.value||null)}async function yf(t={}){if(!!(t!=null&&t.ok)){G=_i(t.members),tr=Ai(t.roles),t.last_refresh&&(nr=t.last_refresh);try{await bf()}catch{}$==="discord-members"&&l(),h("discord-data-updated",`Discord data updated. Loaded ${G.length} member record${G.length===1?"":"s"}.`,{ttlMs:m})}}async function wi(t={}){const e=Boolean(t.silent);if(!(d!=null&&d.connected)){h("discord-data-error","GuildSync websocket is not connected.",{ttlMs:m});return}dn=!0,l();try{const[n,r]=await Promise.all([w("guildsync:request-discord-data-date",{}),w("guildsync:request-discord-member-dataJSON",{})]);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord refresh date.");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord member data.");nr=n.value||null,G=_i(r.members),tr=Ai(r.roles),e||h("discord-data",`Loaded ${G.length} Discord member record${G.length===1?"":"s"}.`,{ttlMs:m})}catch(n){h("discord-data-error",k(n),{ttlMs:m})}finally{dn=!1,l()}}function w(t,e={},n=3e4){return new Promise((r,i)=>{if(!(d!=null&&d.connected)){i(new Error("GuildSync websocket is not connected."));return}let o=!1;const s=window.setTimeout(()=>{o||(o=!0,i(new Error(`${t} timed out.`)))},n);d.emit(t,e,c=>{o||(o=!0,window.clearTimeout(s),r(c))})})}function _i(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(Sa).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,n)=>pn(e).localeCompare(pn(n),void 0,{sensitivity:"base"})):[]}function Ai(t){if(!Array.isArray(t))return[];const e=new Map;for(const n of t){const r=Sa(n);if(!r)continue;const i=r.role_id||cn(r.role_name);i&&!e.has(i)&&e.set(i,r)}return Array.from(e.values()).sort((n,r)=>String(n.role_name||"").localeCompare(String(r.role_name||""),void 0,{sensitivity:"base"}))}function Sa(t){var i,o;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),n=String(t.role_name||t.name||"Unnamed Role").trim(),r=(o=(i=t.role_color)!=null?i:t.color)!=null?o:null;return{role_id:e,role_name:n||"Unnamed Role",role_color:r}}function kf(){const t=Pn.trim().toLowerCase(),e=Array.from(pt),n=G.filter(r=>{if(t&&![r.username,r.global_name,r.server_nickname,r.discord_id,...r.roles.map(o=>o.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(r.roles.map(o=>o.role_name));if(!e.every(o=>i.has(o)))return!1}return!!mo(gt,Ol(r))});return vf(n)}function vf(t){const e=Qe==="desc"?-1:1;return[...t].sort((n,r)=>{const i=Ds(n,un),o=Ds(r,un),s=i.localeCompare(o,void 0,{sensitivity:"base",numeric:!0});return s!==0?s*e:pn(n).localeCompare(pn(r),void 0,{sensitivity:"base",numeric:!0})})}function Ds(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(n=>n.role_name||"").filter(Boolean).sort((n,r)=>n.localeCompare(r,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function Sf(t){const n=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";un===n?Qe=Qe==="asc"?"desc":"asc":(un=n,Qe="asc"),l()}function Dn(t,e){const n=un===t,r=Qe==="asc"?"ascending":"descending",i=n?Qe==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${n?r:"none"}">
      <button
        class="discord-sort-header${n?" active":""}"
        type="button"
        data-discord-sort-column="${f(t)}"
        title="Sort ${f(e)} ${n&&Qe==="asc"?"descending":"ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function wf(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(Ir)?Ir:t.value.length,n=Number.isInteger(Or)?Or:e;t.setSelectionRange(e,n)}}function _f(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(qr)?qr:t.value.length,n=Number.isInteger(xr)?xr:e;t.setSelectionRange(e,n)}}function Af(){const t=new Set;for(const e of G)for(const n of e.roles)n.role_name&&t.add(n.role_name);return Array.from(t).sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function Lf(t){const e=Tf(t),n=pn(t),r=t.roles||[];return`
    <tr data-discord-user-id="${f(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${f(e)}" alt="${f(n)}" />`:`<span>${a(Ta(n))}</span>`}
          </div>
          <span>${a(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${a(t.global_name||"")}</td>
      <td>${a(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${r.length>0?r.map(i=>$f(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${Bo({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function Ef(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${a(dn?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function $f(t){const e=ur(t.role_color),n=$i(e),r=Ei(e,n);return`
    <span
      class="discord-role-badge"
      title="${f(t.role_name)}"
      style="${r}"
    >${a(t.role_name)}</span>
  `}function Rf(t){const e=Li(t),n=ur(e==null?void 0:e.role_color),r=$i(n),i=Ei(n,r);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-role-filter="${f(t)}"
      style="${i}"
      title="Remove ${f(t)} filter"
    >
      <span>${a(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Df(t){const e=Mf(t);for(const n of e){const r=Li(n);if(r)return r}return null}function Mf(t){const e=String(t||"").trim();if(!e)return[];const n=cn(e),i={associate:["Associates","Associate"],associates:["Associates","Associate"],soldier:["Soldiers","Soldier"],soldiers:["Soldiers","Soldier"],capo:["Capo"],capos:["Capo","Capos"],caporegime:["CapoRegime","Capo Regime","Capo Regimes"],consiglieres:["Consigliere","Consiglieres"],consigliere:["Consigliere","Consiglieres"]}[n]||[e];return Array.from(new Set([e,...i].filter(Boolean)))}function cn(t){return String(t||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function Li(t){const e=cn(t);if(!e)return null;const n=tr.find(r=>cn(r.role_name)===e);if(n)return n;for(const r of G){const i=r.roles.find(o=>cn(o.role_name)===e);if(i)return i}return null}function ur(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function Ei(t,e){return[`--role-fill-top: ${Ms(t,"#ffffff",.16)}`,`--role-fill-bottom: ${Ms(t,"#000000",.1)}`,`--role-fill-glow: ${Ts(t,.28)}`,`--role-fill-edge: ${Ts(t,.46)}`,`color: ${e}`].join("; ")}function Ms(t,e,n){const r=Mn(t)||Mn("#64748b"),i=Mn(e)||Mn("#ffffff"),o=Math.max(0,Math.min(1,Number(n)||0)),s=Math.round(r.red+(i.red-r.red)*o),c=Math.round(r.green+(i.green-r.green)*o),u=Math.round(r.blue+(i.blue-r.blue)*o);return`#${$r(s)}${$r(c)}${$r(u)}`}function Mn(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function $r(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function Ts(t,e){const n=String(t||"#64748b").replace("#",""),r=/^[0-9a-f]{6}$/i.test(n)?n:"64748b",i=parseInt(r.slice(0,2),16),o=parseInt(r.slice(2,4),16),s=parseInt(r.slice(4,6),16);return`rgba(${i}, ${o}, ${s}, ${e})`}function $i(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const n=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(n*299+r*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function Tf(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!n)return"";const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function pn(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function wa(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function qn(){const t=document.querySelector("#discordArea");if(!!t){if(En(!1),A()){const e=g.user||{},n=se(),r=Kf(e),i=Ta(n);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${r?`<img src="${f(r)}" alt="${f(n)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${a(i)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const o=document.querySelector("#discordAvatarButton");o.addEventListener("contextmenu",s=>{s.preventDefault(),Ns()}),o.addEventListener("click",()=>{Ns()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",Of)}}function Ns(){if(yn){En();return}If()}function Nf(t=Be){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],n=String((t==null?void 0:t.directory)||"").trim(),r=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const o=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),s=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),c=String((i==null?void 0:i.filePath)||(n?`${n}\\${s}`:s)).trim(),u=(i==null?void 0:i.enabled)!==!1,b=r&&u,v=`profileFileWatchToggle-${Cf(o||s)}`;return`
          <label class="profile-filewatch-item ${u?"enabled":"disabled"}" title="${f(c)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${a(s)}</span>
              <span class="profile-filewatch-state">${b?"Watching":u?"On":"Off"}</span>
            </span>
            <input
              id="${f(v)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${f(o)}"
              ${u?"checked":""}
              aria-label="Turn file watch ${u?"off":"on"} for ${f(s)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function Ri(){var r,i,o;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=se(),n=((r=g.user)==null?void 0:r.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${a(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${a(Jf(n))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${a(er)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${Be!=null&&Be.watching?"Active":"Stopped"}</span>
        </div>
        ${Nf()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(i=document.querySelector("#discordLogoutButton"))==null||i.addEventListener("click",qf),(o=document.querySelector("#associateTicketReportButton"))==null||o.addEventListener("click",()=>{En(!1),go()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(s=>{s.addEventListener("change",Bf)})}async function _a(){try{Be=await Hc(),yn&&Ri()}catch(t){h("file-watcher-error",k(t),{ttlMs:m})}}async function Bf(t){var r;const e=t.currentTarget,n=String(((r=e==null?void 0:e.dataset)==null?void 0:r.filewatchKey)||"").trim();if(!!n)try{e.disabled=!0,Be=await Yc(n,e.checked),await _t({silent:!0}),yn&&Ri()}catch(i){h("file-watcher-error",k(i),{ttlMs:m}),await _a()}}function Cf(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function If(){const t=document.querySelector("#discordProfileMenu");!t||(Ri(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),yn=!0,_a(),setTimeout(()=>{window.addEventListener("click",Aa),window.addEventListener("keydown",La)},0))}function En(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),yn=!1,t&&(window.removeEventListener("click",Aa),window.removeEventListener("keydown",La))}function Aa(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&En()}function La(t){t.key==="Escape"&&En()}async function Of(){try{h("auth","Opening Discord login...",{ttlMs:m});const t=await Jc();t!=null&&t.status_message&&h("auth",t.status_message,{ttlMs:m}),Pe()}catch(t){h("auth-error",k(t),{ttlMs:m}),Pe()}}async function qf(){try{g=await Wc(),h("auth",g.status_message||"Logged out.",{ttlMs:m}),so(),ln(),await _t()}catch(t){h("auth-error",k(t),{ttlMs:m}),Pe()}}function ln(){const t=g.socket_url||"https://guildsync.perdues.me";xf(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};g!=null&&g.token&&(e.auth={token:g.token}),d=Cn(t,e),d.on("connect",()=>{Pe(),Ea(),$==="discord-members"&&wi({silent:!0}),$==="eso-members"&&_n({silent:!0}),($==="more"||$==="settings"&&!Z)&&me({silent:!0}),pf(),Bt(),uf(),sf(),fu(),gu(),Ff()}),d.on("connect_error",()=>{Pe(),Qn()}),d.on("disconnect",()=>{Pe(),Qn(),ff(),of()}),d.on("guildsync:version-status",n=>{Pf(n)}),d.on("guildsync:discord-member-data-updated",n=>{yf(n)}),d.on("guildsync:banking-data-updated",n=>{rf(n)}),d.on("guildsync:roster-data-updated",n=>{cu(n)}),d.on("guildsync:member-links-updated",(n={})=>{Array.isArray(n.links)&&(L=n.links,($==="discord-members"||$==="eso-members"||$==="settings"||je)&&l())}),d.on("guildsync:discord-refresh-status",(n={})=>{const r=String(n.message||"").trim();r&&h("discord-refresh-status",r,{ttlMs:m})})}function xf(t=!0){Qn(),d&&(d.disconnect(),d=null),t&&Pe()}function Ea(){!(d!=null&&d.connected)||d.emit("guildsync:client-version",{version:er,platform:$a(),client_type:"wails"})}function Ff(){Qn(),In=window.setInterval(()=>{Ea()},nl)}function Qn(){In&&(window.clearInterval(In),In=null)}function Pf(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",n=t.download&&typeof t.download=="object"?t.download:{};Le={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||n.url||"").trim(),fileName:String(t.download_file_name||n.file_name||"").trim(),platformLabel:String(n.label||t.platform||$a()).trim()},h("version",`GuildSync is out of date. Current version: ${er}. Latest version: ${e}.`),Qr();return}Le={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},Qr(),Di("version")}}function $a(){const t=String(navigator.userAgent||"").toLowerCase(),n=`${String(navigator.platform||"").toLowerCase()} ${t}`;return n.includes("mac")?"macos":n.includes("linux")?"linux":"windows"}function Qr(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!Le.updateRequired||!Le.downloadUrl){t.innerHTML="";return}const e=Le.platformLabel||"Desktop",n=Le.latestVersion||"latest",r=Le.fileName||"GuildSync client download";t.innerHTML=`
    <button
      id="desktopUpdateDownloadButton"
      class="desktop-client-download-button"
      type="button"
      title="Download ${f(r)}"
      aria-label="Download GuildSync ${f(n)} for ${f(e)}"
    >
      <span class="desktop-client-download-icon" aria-hidden="true">\u2B07</span>
      <span class="desktop-client-download-copy">
        <span class="desktop-client-download-title">Download Update</span>
        <span class="desktop-client-download-subtitle">${a(e)} detected \xB7 ${a(n)}</span>
      </span>
      <span class="desktop-client-download-caret" aria-hidden="true">\u25BE</span>
    </button>
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{Gf()})}function Gf(){const t=String(Le.downloadUrl||"").trim();if(!t){h("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:m});return}tl(t)}function h(t,e,n={}){const r=String(t||"").trim(),i=String(e||"").trim();if(!(!r||!i)){if(Ge.set(r,i),Ye.has(r)&&(window.clearTimeout(Ye.get(r)),Ye.delete(r)),n.ttlMs&&Number(n.ttlMs)>0){const o=window.setTimeout(()=>{Di(r)},Number(n.ttlMs));Ye.set(r,o)}Ct()}}function Di(t){const e=String(t||"").trim();if(!!e){if(Ge.delete(e),Ye.has(e)&&(window.clearTimeout(Ye.get(e)),Ye.delete(e)),C===e){mr(()=>{C="",Ct()});return}Ct()}}function Ct(){const t=fr();if(t.length===0){st?mr(gn):gn();return}!st&&!ot&&hr(t[0])}function fr(){return Array.from(Ge.keys())}function Ra(){const t=fr();if(t.length===0)return"";if(!C)return t[0];const e=t.indexOf(C);return e<0?t[0]:t[(e+1)%t.length]}function hr(t){const e=document.querySelector("#statusMessageTrack");if(!e||!Ge.has(t)){gn();return}pr();const n=Ge.get(t);C=t,st=!0,ot=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=n,e.style.setProperty("--message-fade-duration",`${to}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",ot=!1,Uf()},{once:!0})})}function Uf(){const t=fr();if(!C||!Ge.has(C)){Ct();return}if(t.length<=1){Bs(!1);return}Bs(!0)}function Bs(t){const e=document.querySelector("#statusMessageViewport"),n=document.querySelector("#statusMessageTrack");if(!e||!n)return;const r=Math.max(0,n.scrollWidth-e.clientWidth);if(r<=0){t&&bn(()=>{mr(()=>{const i=Ra();C="",i?hr(i):gn()})},eo);return}bn(()=>{Da(r,t)},no)}function Da(t,e){const n=document.querySelector("#statusMessageTrack");if(!n||!C||!Ge.has(C))return;const r=Math.max(4,Math.ceil(t/ol));n.style.setProperty("--long-scroll-distance",`${t}px`),n.style.setProperty("--long-scroll-duration",`${r}s`),n.classList.add("long-scroll"),n.addEventListener("animationend",()=>{if(n.classList.remove("long-scroll"),n.style.transform=`translateX(-${t}px) translateY(-50%)`,e){bn(()=>{mr(()=>{const i=Ra();C="",i?hr(i):gn()})},eo);return}bn(()=>{Hf()},sl)},{once:!0})}function Hf(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!C||!Ge.has(C))return;if(fr().length!==1){Ct();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const r=Math.max(0,e.scrollWidth-t.clientWidth);r<=0||bn(()=>{Da(r,!1)},no)}function mr(t){const e=document.querySelector("#statusMessageTrack");if(pr(),!e||!st){typeof t=="function"&&t();return}ot=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${to}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",st=!1,ot=!1,typeof t=="function"&&t()},{once:!0})}function gn(){const t=document.querySelector("#statusMessageTrack");pr(),C="",st=!1,ot=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function bn(t,e){const n=window.setTimeout(()=>{on=on.filter(r=>r!==n),t()},e);on.push(n)}function pr(){for(const t of on)window.clearTimeout(t);on=[]}function Ma(){if(!st||ot||!C)return;const t=C;pr(),hr(t)}function Pe(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(d!=null&&d.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!A()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${se()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${se()}`)}}async function _t(t={}){try{if(A()){const e=await Qc();Be=e,!t.silent&&(e==null?void 0:e.message)&&h(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:m});return}Be=await Xc(),Di("file-watcher")}catch(e){h("file-watcher-error",k(e),{ttlMs:m})}}function rn(t,e=null){const n="[GuildSync File Watcher]";if(e){console.log(`${n} ${t}`,e);return}console.log(`${n} ${t}`)}function Vf(t={}){if(!A()){rn("SavedVariables change ignored because the user is not authenticated.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",n=e.toLowerCase(),r=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",o=String(t.filePath||"").trim(),s=r?`${r} saved variables (${i})`:i;rn(`SavedVariables change detected: ${i}${o?` (${o})`:""}. Key: ${n}.`,t),h(`saved-vars-file-updated-${e}`,`${s} has been updated.`,{ttlMs:m}),n==="banking"&&(rn(`Processing banking SavedVariables update from ${i}.`),Wf(t)),n==="roster"&&(rn(`Processing roster SavedVariables update from ${i}.`),jf(t)),n==="applications"&&(rn(`Processing applications SavedVariables update from ${i}.`),ku(t))}async function Wf(t={}){await af(t),await ha(t)}async function jf(t={}){await lu(t)}function zf(t){!A()||h("file-watcher-error",k(t),{ttlMs:m})}function Yf(){Zt("guildsync-savedvars-file-modified",Vf),Zt("guildsync-file-watcher-error",zf),Zt("guildsync-login-complete",async t=>{g=t||{logged_in:!1,allowed:!1},qn(),ln(),await _t(),h("auth",g.status_message||`Logged in and authorized as ${se()}.`,{ttlMs:m})}),Zt("guildsync-login-denied",async t=>{g={logged_in:!1,allowed:!1,status_message:""},qn(),await _t(),h("auth",t||"Access denied.",{ttlMs:m}),ln()}),Zt("guildsync-login-failed",async t=>{g={logged_in:!1,allowed:!1,status_message:""},qn(),await _t(),h("auth",t||"Login failed.",{ttlMs:m}),ln()})}function A(){return Boolean((g==null?void 0:g.logged_in)&&(g==null?void 0:g.allowed)&&(g==null?void 0:g.token))}function se(){var t,e;return((t=g.user)==null?void 0:t.display_name)||((e=g.user)==null?void 0:e.username)||"Discord User"}function Kf(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),n=String(t.discord_user_id||"").trim();if(!e||!n)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=128`}function Ta(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function Jf(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Qf(){en&&(en.disconnect(),en=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),n=Math.round(t.getBoundingClientRect().height);en=new ResizeObserver(r=>{const i=r[0];if(!i)return;const o=Math.round(i.contentRect.width),s=Math.round(i.contentRect.height);o===e&&s===n||(e=o,n=s,Na(),Ma())}),en.observe(t)}function Na(){clearTimeout(ls),ls=setTimeout(async()=>{try{await Ks()}catch{}},500)}function k(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function a(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function f(t){return a(t)}Yf();ll();
