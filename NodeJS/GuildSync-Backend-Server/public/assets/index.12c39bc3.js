(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const Ti="/assets/splash.ea386b6a.png",Ni="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",Ci="/assets/GuildSync-Graphic.9169020d.png",Y=Object.create(null);Y.open="0";Y.close="1";Y.ping="2";Y.pong="3";Y.message="4";Y.upgrade="5";Y.noop="6";const xt=Object.create(null);Object.keys(Y).forEach(t=>{xt[Y[t]]=t});const Rr={type:"error",data:"parser error"},jn=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Yn=typeof ArrayBuffer=="function",Kn=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,jr=({type:t,data:e},r,n)=>jn&&e instanceof Blob?r?n(e):vn(e,n):Yn&&(e instanceof ArrayBuffer||Kn(e))?r?n(e):vn(new Blob([e]),n):n(Y[t]+(e||"")),vn=(t,e)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];e("b"+(n||""))},r.readAsDataURL(t)};function kn(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let yr;function Bi(t,e){if(jn&&t.data instanceof Blob)return t.data.arrayBuffer().then(kn).then(e);if(Yn&&(t.data instanceof ArrayBuffer||Kn(t.data)))return e(kn(t.data));jr(t,!1,r=>{yr||(yr=new TextEncoder),e(yr.encode(r))})}const Sn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ut=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<Sn.length;t++)ut[Sn.charCodeAt(t)]=t;const xi=t=>{let e=t.length*.75,r=t.length,n,s=0,i,o,c,p;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const v=new ArrayBuffer(e),w=new Uint8Array(v);for(n=0;n<r;n+=4)i=ut[t.charCodeAt(n)],o=ut[t.charCodeAt(n+1)],c=ut[t.charCodeAt(n+2)],p=ut[t.charCodeAt(n+3)],w[s++]=i<<2|o>>4,w[s++]=(o&15)<<4|c>>2,w[s++]=(c&3)<<6|p&63;return v},Oi=typeof ArrayBuffer=="function",Yr=(t,e)=>{if(typeof t!="string")return{type:"message",data:Jn(t,e)};const r=t.charAt(0);return r==="b"?{type:"message",data:Ii(t.substring(1),e)}:xt[r]?t.length>1?{type:xt[r],data:t.substring(1)}:{type:xt[r]}:Rr},Ii=(t,e)=>{if(Oi){const r=xi(t);return Jn(r,e)}else return{base64:!0,data:t}},Jn=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},Qn=String.fromCharCode(30),qi=(t,e)=>{const r=t.length,n=new Array(r);let s=0;t.forEach((i,o)=>{jr(i,!1,c=>{n[o]=c,++s===r&&e(n.join(Qn))})})},Pi=(t,e)=>{const r=t.split(Qn),n=[];for(let s=0;s<r.length;s++){const i=Yr(r[s],e);if(n.push(i),i.type==="error")break}return n};function Fi(){return new TransformStream({transform(t,e){Bi(t,r=>{const n=r.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const i=new DataView(s.buffer);i.setUint8(0,126),i.setUint16(1,n)}else{s=new Uint8Array(9);const i=new DataView(s.buffer);i.setUint8(0,127),i.setBigUint64(1,BigInt(n))}t.data&&typeof t.data!="string"&&(s[0]|=128),e.enqueue(s),e.enqueue(r)})}})}let br;function Dt(t){return t.reduce((e,r)=>e+r.length,0)}function $t(t,e){if(t[0].length===e)return t.shift();const r=new Uint8Array(e);let n=0;for(let s=0;s<e;s++)r[s]=t[0][n++],n===t[0].length&&(t.shift(),n=0);return t.length&&n<t[0].length&&(t[0]=t[0].slice(n)),r}function Gi(t,e){br||(br=new TextDecoder);const r=[];let n=0,s=-1,i=!1;return new TransformStream({transform(o,c){for(r.push(o);;){if(n===0){if(Dt(r)<1)break;const p=$t(r,1);i=(p[0]&128)===128,s=p[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(Dt(r)<2)break;const p=$t(r,2);s=new DataView(p.buffer,p.byteOffset,p.length).getUint16(0),n=3}else if(n===2){if(Dt(r)<8)break;const p=$t(r,8),v=new DataView(p.buffer,p.byteOffset,p.length),w=v.getUint32(0);if(w>Math.pow(2,53-32)-1){c.enqueue(Rr);break}s=w*Math.pow(2,32)+v.getUint32(4),n=3}else{if(Dt(r)<s)break;const p=$t(r,s);c.enqueue(Yr(i?p:br.decode(p),e)),n=0}if(s===0||s>t){c.enqueue(Rr);break}}}})}const Xn=4;function D(t){if(t)return Ui(t)}function Ui(t){for(var e in D.prototype)t[e]=D.prototype[e];return t}D.prototype.on=D.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};D.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this};D.prototype.off=D.prototype.removeListener=D.prototype.removeAllListeners=D.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var n,s=0;s<r.length;s++)if(n=r[s],n===e||n.fn===e){r.splice(s,1);break}return r.length===0&&delete this._callbacks["$"+t],this};D.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),r=this._callbacks["$"+t],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,s=r.length;n<s;++n)r[n].apply(this,e)}return this};D.prototype.emitReserved=D.prototype.emit;D.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};D.prototype.hasListeners=function(t){return!!this.listeners(t).length};const er=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,r)=>r(e,0))(),O=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),Vi="arraybuffer";function Zn(t,...e){return e.reduce((r,n)=>(t.hasOwnProperty(n)&&(r[n]=t[n]),r),{})}const Hi=O.setTimeout,Wi=O.clearTimeout;function tr(t,e){e.useNativeTimers?(t.setTimeoutFn=Hi.bind(O),t.clearTimeoutFn=Wi.bind(O)):(t.setTimeoutFn=O.setTimeout.bind(O),t.clearTimeoutFn=O.clearTimeout.bind(O))}const zi=1.33;function ji(t){return typeof t=="string"?Yi(t):Math.ceil((t.byteLength||t.size)*zi)}function Yi(t){let e=0,r=0;for(let n=0,s=t.length;n<s;n++)e=t.charCodeAt(n),e<128?r+=1:e<2048?r+=2:e<55296||e>=57344?r+=3:(n++,r+=4);return r}function es(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Ki(t){let e="";for(let r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e}function Ji(t){let e={},r=t.split("&");for(let n=0,s=r.length;n<s;n++){let i=r[n].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}class Qi extends Error{constructor(e,r,n){super(e),this.description=r,this.context=n,this.type="TransportError"}}class Kr extends D{constructor(e){super(),this.writable=!1,tr(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,r,n){return super.emitReserved("error",new Qi(e,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const r=Yr(e,this.socket.binaryType);this.onPacket(r)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,r={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const r=Ki(e);return r.length?"?"+r:""}}class Xi extends Kr{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const r=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};Pi(e,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,qi(e,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=es()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(e,r)}}let ts=!1;try{ts=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Zi=ts;function eo(){}class to extends Xi{constructor(e){if(super(e),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,r){const n=this.request({method:"POST",data:e});n.on("success",r),n.on("error",(s,i)=>{this.onError("xhr post error",s,i)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=e}}class z extends D{constructor(e,r,n){super(),this.createRequest=e,tr(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;const r=Zn(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=z.requestsCount++,z.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=eo,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete z.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}z.requestsCount=0;z.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",wn);else if(typeof addEventListener=="function"){const t="onpagehide"in O?"pagehide":"unload";addEventListener(t,wn,!1)}}function wn(){for(let t in z.requests)z.requests.hasOwnProperty(t)&&z.requests[t].abort()}const ro=function(){const t=rs({xdomain:!1});return t&&t.responseType!==null}();class no extends to{constructor(e){super(e);const r=e&&e.forceBase64;this.supportsBinary=ro&&!r}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new z(rs,this.uri(),e)}}function rs(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Zi))return new XMLHttpRequest}catch{}if(!e)try{return new O[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const ns=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class so extends Kr{get name(){return"websocket"}doOpen(){const e=this.uri(),r=this.opts.protocols,n=ns?{}:Zn(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,r,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],s=r===e.length-1;jr(n,this.supportsBinary,i=>{try{this.doWrite(n,i)}catch{}s&&er(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=es()),this.supportsBinary||(r.b64=1),this.createUri(e,r)}}const vr=O.WebSocket||O.MozWebSocket;class io extends so{createSocket(e,r,n){return ns?new vr(e,r,n):r?new vr(e,r):new vr(e)}doWrite(e,r){this.ws.send(r)}}class oo extends Kr{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const r=Gi(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(r).getReader(),s=Fi();s.readable.pipeTo(e.writable),this._writer=s.writable.getWriter();const i=()=>{n.read().then(({done:c,value:p})=>{c||(this.onPacket(p),i())}).catch(c=>{})};i();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],s=r===e.length-1;this._writer.write(n).then(()=>{s&&er(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const ao={websocket:io,webtransport:oo,polling:no},co=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,lo=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Dr(t){if(t.length>8e3)throw"URI too long";const e=t,r=t.indexOf("["),n=t.indexOf("]");r!=-1&&n!=-1&&(t=t.substring(0,r)+t.substring(r,n).replace(/:/g,";")+t.substring(n,t.length));let s=co.exec(t||""),i={},o=14;for(;o--;)i[lo[o]]=s[o]||"";return r!=-1&&n!=-1&&(i.source=e,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=uo(i,i.path),i.queryKey=fo(i,i.query),i}function uo(t,e){const r=/\/{2,9}/g,n=e.replace(r,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function fo(t,e){const r={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,i){s&&(r[s]=i)}),r}const $r=typeof addEventListener=="function"&&typeof removeEventListener=="function",Ot=[];$r&&addEventListener("offline",()=>{Ot.forEach(t=>t())},!1);class de extends D{constructor(e,r){if(super(),this.binaryType=Vi,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(r=e,e=null),e){const n=Dr(e);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=Dr(r.host).host);tr(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const s=n.prototype.name;this.transports.push(s),this._transportsByName[s]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Ji(this.opts.query)),$r&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Ot.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const r=Object.assign({},this.opts.query);r.EIO=Xn,r.transport=e,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&de.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(e);r.open(),this.setTransport(r)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",de.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=e.data,this._onError(r);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(r+=ji(s)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,er(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,r,n){return this._sendPacket("message",e,r,n),this}send(e,r,n){return this._sendPacket("message",e,r,n),this}_sendPacket(e,r,n,s){if(typeof r=="function"&&(s=r,r=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const i={type:e,data:r,options:n};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),s&&this.once("flush",s),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),e()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(de.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),$r&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=Ot.indexOf(this._offlineEventListener);n!==-1&&Ot.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,r),this.writeBuffer=[],this._prevBufferLen=0}}}de.protocol=Xn;class ho extends de{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let r=this.createTransport(e),n=!1;de.priorWebsocketSuccess=!1;const s=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",m=>{if(!n)if(m.type==="pong"&&m.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;de.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(w(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const k=new Error("probe error");k.transport=r.name,this.emitReserved("upgradeError",k)}}))};function i(){n||(n=!0,w(),r.close(),r=null)}const o=m=>{const k=new Error("probe error: "+m);k.transport=r.name,i(),this.emitReserved("upgradeError",k)};function c(){o("transport closed")}function p(){o("socket closed")}function v(m){r&&m.name!==r.name&&i()}const w=()=>{r.removeListener("open",s),r.removeListener("error",o),r.removeListener("close",c),this.off("close",p),this.off("upgrading",v)};r.once("open",s),r.once("error",o),r.once("close",c),this.once("close",p),this.once("upgrading",v),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const r=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&r.push(e[n]);return r}}class po extends ho{constructor(e,r={}){const n=typeof e=="object"?e:r;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(s=>ao[s]).filter(s=>!!s)),super(e,n)}}function mo(t,e="",r){let n=t;r=r||typeof location<"u"&&location,t==null&&(t=r.protocol+"//"+r.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=r.protocol+t:t=r.host+t),/^(https?|wss?):\/\//.test(t)||(typeof r<"u"?t=r.protocol+"//"+t:t="https://"+t),n=Dr(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const i=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+i+":"+n.port+e,n.href=n.protocol+"://"+i+(r&&r.port===n.port?"":":"+n.port),n}const go=typeof ArrayBuffer=="function",yo=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,ss=Object.prototype.toString,bo=typeof Blob=="function"||typeof Blob<"u"&&ss.call(Blob)==="[object BlobConstructor]",vo=typeof File=="function"||typeof File<"u"&&ss.call(File)==="[object FileConstructor]";function Jr(t){return go&&(t instanceof ArrayBuffer||yo(t))||bo&&t instanceof Blob||vo&&t instanceof File}function It(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let r=0,n=t.length;r<n;r++)if(It(t[r]))return!0;return!1}if(Jr(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return It(t.toJSON(),!0);for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&It(t[r]))return!0;return!1}function ko(t){const e=[],r=t.data,n=t;return n.data=Mr(r,e),n.attachments=e.length,{packet:n,buffers:e}}function Mr(t,e){if(!t)return t;if(Jr(t)){const r={_placeholder:!0,num:e.length};return e.push(t),r}else if(Array.isArray(t)){const r=new Array(t.length);for(let n=0;n<t.length;n++)r[n]=Mr(t[n],e);return r}else if(typeof t=="object"&&!(t instanceof Date)){const r={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=Mr(t[n],e));return r}return t}function So(t,e){return t.data=Tr(t.data,e),delete t.attachments,t}function Tr(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let r=0;r<t.length;r++)t[r]=Tr(t[r],e);else if(typeof t=="object")for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(t[r]=Tr(t[r],e));return t}const is=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],wo=5;var y;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(y||(y={}));class _o{constructor(e){this.replacer=e}encode(e){return(e.type===y.EVENT||e.type===y.ACK)&&It(e)?this.encodeAsBinary({type:e.type===y.EVENT?y.BINARY_EVENT:y.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let r=""+e.type;return(e.type===y.BINARY_EVENT||e.type===y.BINARY_ACK)&&(r+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(r+=e.nsp+","),e.id!=null&&(r+=e.id),e.data!=null&&(r+=JSON.stringify(e.data,this.replacer)),r}encodeAsBinary(e){const r=ko(e),n=this.encodeAsString(r.packet),s=r.buffers;return s.unshift(n),s}}class Qr extends D{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let r;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(e);const n=r.type===y.BINARY_EVENT;n||r.type===y.BINARY_ACK?(r.type=n?y.EVENT:y.ACK,this.reconstructor=new Ao(r),r.attachments===0&&super.emitReserved("decoded",r)):super.emitReserved("decoded",r)}else if(Jr(e)||e.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(e),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let r=0;const n={type:Number(e.charAt(0))};if(y[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===y.BINARY_EVENT||n.type===y.BINARY_ACK){const i=r+1;for(;e.charAt(++r)!=="-"&&r!=e.length;);const o=e.substring(i,r);if(o!=Number(o)||e.charAt(r)!=="-")throw new Error("Illegal attachments");const c=Number(o);if(!os(c)||c<0)throw new Error("Illegal attachments");if(c>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=c}if(e.charAt(r+1)==="/"){const i=r+1;for(;++r&&!(e.charAt(r)===","||r===e.length););n.nsp=e.substring(i,r)}else n.nsp="/";const s=e.charAt(r+1);if(s!==""&&Number(s)==s){const i=r+1;for(;++r;){const o=e.charAt(r);if(o==null||Number(o)!=o){--r;break}if(r===e.length)break}n.id=Number(e.substring(i,r+1))}if(e.charAt(++r)){const i=this.tryParse(e.substr(r));if(Qr.isPayloadValid(n.type,i))n.data=i;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,r){switch(e){case y.CONNECT:return Vt(r);case y.DISCONNECT:return r===void 0;case y.CONNECT_ERROR:return typeof r=="string"||Vt(r);case y.EVENT:case y.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&is.indexOf(r[0])===-1);case y.ACK:case y.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Ao{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const r=So(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Lo(t){return typeof t=="string"}const os=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function Eo(t){return t===void 0||os(t)}function Vt(t){return Object.prototype.toString.call(t)==="[object Object]"}function Ro(t,e){switch(t){case y.CONNECT:return e===void 0||Vt(e);case y.DISCONNECT:return e===void 0;case y.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&is.indexOf(e[0])===-1);case y.ACK:return Array.isArray(e);case y.CONNECT_ERROR:return typeof e=="string"||Vt(e);default:return!1}}function Do(t){return Lo(t.nsp)&&Eo(t.id)&&Ro(t.type,t.data)}const $o=Object.freeze(Object.defineProperty({__proto__:null,protocol:wo,get PacketType(){return y},Encoder:_o,Decoder:Qr,isPacketValid:Do},Symbol.toStringTag,{value:"Module"}));function G(t,e,r){return t.on(e,r),function(){t.off(e,r)}}const Mo=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class as extends D{constructor(e,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[G(e,"open",this.onopen.bind(this)),G(e,"packet",this.onpacket.bind(this)),G(e,"error",this.onerror.bind(this)),G(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...r){var n,s,i;if(Mo.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(r.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const o={type:y.EVENT,data:r};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const w=this.ids++,m=r.pop();this._registerAckCallback(w,m),o.id=w}const c=(s=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||s===void 0?void 0:s.writable,p=this.connected&&!(!((i=this.io.engine)===null||i===void 0)&&i._hasPingExpired());return this.flags.volatile&&!c||(p?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,r){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[e]=r;return}const i=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let c=0;c<this.sendBuffer.length;c++)this.sendBuffer[c].id===e&&this.sendBuffer.splice(c,1);r.call(this,new Error("operation has timed out"))},s),o=(...c)=>{this.io.clearTimeoutFn(i),r.apply(this,c)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...r){return new Promise((n,s)=>{const i=(o,c)=>o?s(o):n(c);i.withError=!0,r.push(i),this.emit(e,...r)})}_addToQueue(e){let r;typeof e[e.length-1]=="function"&&(r=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((s,...i)=>(this._queue[0],s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(s)):(this._queue.shift(),r&&r(null,...i)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!e||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:y.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){const n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case y.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case y.EVENT:case y.BINARY_EVENT:this.onevent(e);break;case y.ACK:case y.BINARY_ACK:this.onack(e);break;case y.DISCONNECT:this.ondisconnect();break;case y.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const r=e.data||[];e.id!=null&&r.push(this.ack(e.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const r=this;let n=!1;return function(...s){n||(n=!0,r.packet({type:y.ACK,id:e,data:s}))}}onack(e){const r=this.acks[e.id];typeof r=="function"&&(delete this.acks[e.id],r.withError&&e.data.unshift(null),r.apply(this,e.data))}onconnect(e,r){this.id=e,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:y.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,e.data)}}}function Ke(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}Ke.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-r:t+r}return Math.min(t,this.max)|0};Ke.prototype.reset=function(){this.attempts=0};Ke.prototype.setMin=function(t){this.ms=t};Ke.prototype.setMax=function(t){this.max=t};Ke.prototype.setJitter=function(t){this.jitter=t};class Nr extends D{constructor(e,r){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(r=e,e=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,tr(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Ke({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=e;const s=r.parser||$o;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var r;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(r=this.backoff)===null||r===void 0||r.setMin(e),this)}randomizationFactor(e){var r;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(r=this.backoff)===null||r===void 0||r.setJitter(e),this)}reconnectionDelayMax(e){var r;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(r=this.backoff)===null||r===void 0||r.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new po(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=G(r,"open",function(){n.onopen(),e&&e()}),i=c=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",c),e?e(c):this.maybeReconnectOnOpen()},o=G(r,"error",i);if(this._timeout!==!1){const c=this._timeout,p=this.setTimeoutFn(()=>{s(),i(new Error("timeout")),r.close()},c);this.opts.autoUnref&&p.unref(),this.subs.push(()=>{this.clearTimeoutFn(p)})}return this.subs.push(s),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(G(e,"ping",this.onping.bind(this)),G(e,"data",this.ondata.bind(this)),G(e,"error",this.onerror.bind(this)),G(e,"close",this.onclose.bind(this)),G(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(r){this.onclose("parse error",r)}}ondecoded(e){er(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,r){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new as(this,e,r),this.nsps[e]=n),n}_destroy(e){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(e){const r=this.encoder.encode(e);for(let n=0;n<r.length;n++)this.engine.write(r[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(s=>{s?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",s)):e.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const ot={};function qt(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const r=mo(t,e.path||"/socket.io"),n=r.source,s=r.id,i=r.path,o=ot[s]&&i in ot[s].nsps,c=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let p;return c?p=new Nr(n,e):(ot[s]||(ot[s]=new Nr(n,e)),p=ot[s]),r.query&&!e.query&&(e.query=r.queryKey),p.socket(r.path,e)}Object.assign(qt,{Manager:Nr,Socket:as,io:qt,connect:qt});window.GUILDSYNC_WEB=!0;const Xr="guildsync-web-session";function To(){try{return JSON.parse(localStorage.getItem(Xr)||"{}")||{}}catch{return{}}}function No(t){localStorage.setItem(Xr,JSON.stringify(t||{}))}function cs(){localStorage.removeItem(Xr)}async function Co(){return!0}async function ds(){return!0}async function Bo(){return!0}async function xo(){return!0}async function Oo(){return!0}async function Io(){return window.location.assign("/api/auth/discord/web-login"),!0}async function qo(){var i,o,c,p,v,w,m,k;const e=To().token||localStorage.getItem("guildsync-web-token")||"";if(!e)return{logged_in:!1,allowed:!1,status_message:"Not logged in."};const r=await fetch("/api/auth/session",{headers:{Authorization:`Bearer ${e}`}}),n=await r.json().catch(()=>({}));if(!r.ok||n.ok===!1)return cs(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:n.message||"Session expired. Please log in again."};const s={logged_in:!0,allowed:!0,token:e,user:n.user,discord_user_id:((i=n.user)==null?void 0:i.discord_user_id)||"",username:((o=n.user)==null?void 0:o.username)||"",global_name:((c=n.user)==null?void 0:c.global_name)||"",display_name:((p=n.user)==null?void 0:p.display_name)||((v=n.user)==null?void 0:v.global_name)||((w=n.user)==null?void 0:w.username)||"",avatar_url:((m=n.user)==null?void 0:m.avatar_url)||"",role:((k=n.user)==null?void 0:k.role)||"user",status_message:"Logged in."};return No(s),s}async function Po(){return cs(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:"Logged out."}}async function Fo(){return ls()}async function Go(){return ls()}async function ls(){return{watching:!1,directory:"Web upload mode",files:[{key:"banking",fileName:"GuildSyncBanking.lua",enabled:!0,filePath:"Upload through Reports & Admin"},{key:"roster",fileName:"GuildSyncRoster.lua",enabled:!0,filePath:"Upload through Reports & Admin"}]}}async function Uo(){throw new Error("File watching is not available in the web interface. Use Reports & Admin \u2192 Upload ESO SavedVariables.")}async function Vo(){return{ok:!0}}async function Ho(){throw new Error("File watching is not available in the web interface. Use Reports & Admin \u2192 Upload ESO SavedVariables.")}async function Wo(){return{ok:!0}}const Mt=new Map;function at(t,e){return Mt.has(t)||Mt.set(t,new Set),Mt.get(t).add(e),()=>{var r;return(r=Mt.get(t))==null?void 0:r.delete(e)}}const rr="1.0.3",Tt={windows:{label:"Windows detected",shortLabel:"Windows",fileName:"GuildSync-windows-amd64.zip",href:"/downloads/GuildSync-windows-amd64.zip"},macos:{label:"macOS detected",shortLabel:"macOS",fileName:"GuildSync-macos.zip",href:"/downloads/GuildSync-macos.zip"},linux:{label:"Linux detected",shortLabel:"Linux",fileName:"GuildSync-linux-amd64.zip",href:"/downloads/GuildSync-linux-amd64.zip"}},zo=30*60*1e3,us="guildsync-pending-banking-uploads",fs="guildsync-pending-roster-uploads",hs="guildsync-web-savedvars-upload-banner-dismissed",jo=new Map([["GuildSyncBanking.lua","banking"],["GuildSyncRoster.lua","roster"],["GuildSyncApplications.lua","applications"]]),h=60*1e3,ps=7e3,ms=1400,gs=2400,Yo=4e3,Ko=38,ys=document.querySelector("#app");let _n=null,ct=null,An=!1,Zr=!1,Pt=null,kr=!1,Sr=!1,Ln=null,Oe=0,wr=!1,me=new Map,ke=new Map,M="",De=!1,$e=!1,ft=[],g={logged_in:!1,allowed:!1,status_message:""},l=null,C=[],nr=null,gt=!1,Ht=!1,Wt="",Ie=new Set,qe=new Set,yt="username",Se="asc",Cr=null,Br=null,H=[],zt=null,ge=!1,En=!1,jt="",xr=null,Or=null,we=new Set,Pe=new Set,X="",N="",$=-1,Ue=!1,bt="",I=[],ye="",le=[],ue=!1,ee="",_r=null,U=-1,Ve=!1,se="",q=[],He="",Me="",fe=[],he=!1,te="",Rn=null,ve=0;const Jo=650;let V=-1,Je=!1,Qe=[],ie=!1,_e="",Xe=!1,vt=[],oe=!1,Ae="",Ze=!1,en=[],ae=!1,Le="",et="",Fe="",ce="",L=[],B=!1,F="",Be=!1,sr="",Z=-1,be=!1,b=null,Ee=[],We=!1,ne="",At="",W=-1,tt=!1,tn=null,ht=null;const rn=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let j=[],P="biweekly",bs=null,Te=!1,Re=!1,Lt="biweekly",re=!1,Yt=!1,Q="",_={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},rt="",J=-1,Ir={biweekly:0,monthly:0};const Qo=1780786800,Xo=1781996400,Zo=14*24*60*60,ea=28*24*60*60,ta=60*60,Kt=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let E=Kt[0].id;function ra(){ys.innerHTML=`
    <main class="splash-screen">
      <img src="${Ti}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await Co(),await na(),vs(),pt(),await mt()},5e3)}async function na(){try{g=await qo()}catch(t){g={logged_in:!1,allowed:!1,status_message:""},f("session-error",S(t),{ttlMs:h})}}function vs(){ys.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${Ni}" alt="" class="title-icon" />
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
            <img src="${Ci}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${a(rr)}</div>
            </div>
          </div>
          <div class="compact-header-actions">
            ${ia()}
            <div id="discordArea" class="discord-area"></div>
          </div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${ks()}
        </nav>

        <div id="webSavedVarsUploadBannerHost">
          ${Ca()}
        </div>

        <section id="guildSyncTabContent" class="guildsync-tab-content${Ds()?" web-upload-banner-dismissed":""}" aria-live="polite">
          ${Ss()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await xo()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await ds(),await Oo()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await Bo()}),Ut(),Ba(),_s(),Si(),oi(),fi(),$s(),ii(),Qs(),Xs(),Zs(),ei(),Fs(),ai(),ua(),pe(),Ye(),An||(window.addEventListener("resize",()=>{Mi(),Di()}),Wd(),An=!0)}function sa(){var r;const e=`${((r=navigator.userAgentData)==null?void 0:r.platform)||""} ${navigator.platform||""} ${navigator.userAgent||""}`.toLowerCase();return e.includes("win")?Tt.windows:e.includes("mac")||e.includes("darwin")?Tt.macos:e.includes("linux")||e.includes("x11")?Tt.linux:{...Tt.windows,label:"Desktop client",shortLabel:"Windows"}}function ia(){const t=sa();return`
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
  `}function ks(){return Kt.map(t=>{const e=t.id===E;return`
        <button
          class="guildsync-tab${e?" active":""}"
          type="button"
          data-tab-id="${u(t.id)}"
          aria-selected="${e?"true":"false"}"
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${oa(t.icon)}</span>
          <span class="guildsync-tab-label">${a(t.label)}</span>
        </button>
      `}).join("")}function oa(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function Ss(){const t=Kt.find(r=>r.id===E)||Kt[0];let e="";return t.id==="discord-members"?e=ha():t.id==="eso-members"?e=pa():t.id==="more"?e=Xc():t.id==="settings"?e=Oa():e=`
      <div class="guildsync-tab-panel" data-active-tab="${u(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${a(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${re?Oc():""}
    ${be?Dc():""}
    ${Je?Ga():""}
    ${Xe?ja():""}
    ${Ze?Qa():""}
    ${Be?ac():""}
    ${tt?la():""}
  `}function aa(){return tt||Ue||Ve||re||be||Je||Xe||Ze||Be||Re}function ca(){return tt?!1:Be?(Vr(),!0):Ze?(Ur(),!0):Xe?(Gr(),!0):Je?(Fr(),!0):be?(je(),!0):re?(re=!1,d(),!0):Ue?(Ue=!1,d(),!0):Ve?(Ve=!1,d(),!0):Re?(Re=!1,d(),!0):!1}function da(t){t.key==="Escape"&&ca()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",da,!0),window.guildSyncGlobalModalEscapeAttached=!0);function ws(t={}){return new Promise(e=>{ht&&ht(!1),tt=!0,tn={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},ht=e,d()})}function Jt(t=!1){const e=ht;ht=null,tt=!1,tn=null,e&&e(t===!0),d()}function la(){const t=tn||{};return`
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
  `}function Dn(t){var n,s,i,o;const e=(s=(n=t.target).closest)==null?void 0:s.call(n,"#cancelGuildSyncConfirmButton"),r=(o=(i=t.target).closest)==null?void 0:o.call(i,"#acceptGuildSyncConfirmButton");if(!(!e&&!r)){if(t.preventDefault(),t.stopPropagation(),e){Jt(!1);return}r&&Jt(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",Dn,!0),document.addEventListener("pointerup",Dn,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function ua(){if(!tt)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=n=>{n.preventDefault(),n.stopPropagation(),Jt(!1)}),e&&(e.onclick=n=>{n.preventDefault(),n.stopPropagation(),Jt(!0)});const r=document.querySelector(".guildsync-confirm-overlay");r&&(r.onclick=n=>{n.target===r&&(n.preventDefault(),n.stopPropagation())})}function _s(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(aa())return;const e=t.dataset.tabId;!e||e===E||(E=e,d())})})}function fa(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function d(t={}){Be&&fa();const e=document.querySelector(".guildsync-tabs"),r=document.querySelector("#guildSyncTabContent");e&&(e.innerHTML=ks()),r&&(r.innerHTML=Ss()),_s(),Si(),oi(),fi(),$s(),ii(),Qs(),Xs(),Zs(),ei(),Fs(),ai(),t.restoreDiscordSearchFocus&&Sd(),t.restoreRosterSearchFocus&&wd(),E==="discord-members"&&(l==null?void 0:l.connected)&&C.length===0&&!gt&&pn({silent:!0}),E==="eso-members"&&(l==null?void 0:l.connected)&&H.length===0&&!ge&&!En&&(En=!0,xe({silent:!0})),E==="more"&&(l==null?void 0:l.connected)&&j.length===0&&!Te&&it({silent:!0}),(E==="discord-members"||E==="eso-members"||E==="settings")&&(l==null?void 0:l.connected)&&L.length===0&&!B&&st({silent:!0})}function ha(){const t=bd(),e=_d(),r=Array.from(Ie),n=Array.from(qe);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${a(wi(nr))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${gt||Ht?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Ht?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${u(Wt)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(s=>!Ie.has(s)).map(s=>`<option value="${u(s)}">${a(s)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All roles</span>':r.map(s=>Rd(s)).join("")}
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
              ${rn.filter(s=>!qe.has(s.id)).map(s=>`<option value="${u(s.id)}">${a(s.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(s=>As("discord",s)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${Ct("username","Username")}
                ${Ct("global_name","Global Name")}
                ${Ct("server_nickname","Server Nickname")}
                ${Ct("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(s=>Ad(s)).join(""):Ld()}
            </tbody>
          </table>
        </div>
      </div>
      ${Ve?Ea():""}
    </div>
  `}function pa(){const t=va(),e=wa(),r=Array.from(we),n=Array.from(Pe);return`
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
          <span class="discord-last-refresh">Last Refresh: ${a(zc(zt))}</span>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${ge?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${ge?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${u(jt)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(s=>!we.has(s)).map(s=>`<option value="${u(s)}">${a(s)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All ranks</span>':r.map(s=>_a(s)).join("")}
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
              ${rn.filter(s=>!Pe.has(s.id)).map(s=>`<option value="${u(s.id)}">${a(s.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(s=>As("roster",s)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${Nt("account_name","Account Name")}
                ${Nt("rank","Rank")}
                ${Nt("joined","Joined")}
                ${Nt("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map((s,i)=>ma(s,i)).join(""):ga()}
            </tbody>
          </table>
        </div>
      </div>
      ${Ue?Ma():""}
    </div>
  `}function ma(t,e=-1){const r=ya(t.rank||""),n=r?` style="color: ${r};"`:"";return`
    <tr class="eso-roster-row${e===$?" roster-search-active-row":""}"${n} data-roster-row-index="${u(String(e))}" data-eso-account-name="${u(t.account_name||"")}">
      <td>${a(t.account_name||"")}</td>
      <td>${nn(t.rank||"")}</td>
      <td>${a(ar(t.joined))}</td>
      <td class="member-link-action-cell">${zs({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function ga(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">${a(ge?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function ya(t){const e=String(t||"").trim(),r=gn(e);return ur(r==null?void 0:r.role_color)}function nn(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${a(e)}</span>`}function ba(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":nn(e)}function va(){const t=jt.trim().toLowerCase(),e=H.filter(r=>{const n=String(r.rank||"").trim();if(we.size>0&&!we.has(n)||!Rs(Pe,qr(r)))return!1;if(!t)return!0;const s=ar(r.joined),i=dn(r.joined),o=qr(r),c=Es(r.account_name||"");return[r.account_name,n,s,i,r.joined,o,c].map(v=>String(v||"").toLowerCase()).join(" ").includes(t)});return ka(e)}function ka(t){if(!X||!N)return t;const e=N==="desc"?-1:1;return[...t].sort((r,n)=>{const s=$n(r,X),i=$n(n,X),o=s.localeCompare(i,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:String(r.account_name||"").localeCompare(String(n.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function $n(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const r=Number(t.joined||0);return Number.isFinite(r)&&r>0?String(r).padStart(16,"0"):""}if(e==="linked"){const r=qr(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[r]||"9"} ${r} ${Es(t.account_name||"")}`}return String(t.account_name||"")}function Sa(t){const r=new Set(["account_name","rank","joined","linked"]).has(t)?t:"account_name";X!==r?(X=r,N="asc"):N==="asc"?N="desc":N==="desc"?(X="",N=""):(X=r,N="asc"),$=-1,d()}function Nt(t,e,r=""){const n=X===t&&Boolean(N),s=n?N==="asc"?"ascending":"descending":"none",i=n?N==="asc"?"\u25B2":"\u25BC":"\u2195";return`
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
  `}function wa(){return Array.from(new Set(H.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function _a(t){const e=gn(t),r=ur(e==null?void 0:e.role_color),n=bn(r),s=yn(r,n);return`
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
  `}function Aa(t){const e=rn.find(r=>r.id===t);return e?e.label:t}function As(t,e){const r=t==="roster"?"roster":"discord",n=Aa(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${r}-link-status-filter="${u(e)}"
      title="Remove ${u(n)} link filter"
    >
      <span>${a(n)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Ls(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked"&&String(r.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function La(t){return Ls(or(t==null?void 0:t.discord_id))}function qr(t){return Ls(ir(t==null?void 0:t.account_name))}function Es(t){const e=ir(t),r=Ws({mode:"eso-to-discord",esoAccountName:t}),n=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked").map(i=>i.discord_server_nickname||i.discord_display_name||i.discord_username||i.discord_user_id||"").filter(Boolean),s=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="candidate").map(i=>i.discord_server_nickname||i.discord_display_name||i.discord_username||i.discord_user_id||"").filter(Boolean);return[r.label,r.title,n.join(" "),s.join(" ")].filter(Boolean).join(" ")}function Rs(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function Ea(){return`
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
            ${Ra()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${Me?`: ${a(Me)}`:""}</div>
            ${Da()}
          </div>
        </div>
      </div>
    </div>
  `}function Ra(){return he&&q.length===0?'<div class="roster-history-muted">Searching...</div>':q.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${q.map((t,e)=>`
        <button class="roster-history-match${e===V||t.discord_id===He?" is-selected":""}" type="button" data-discord-history-id="${u(t.discord_id)}" data-discord-history-name="${u(Pr(t))}">
          <span>${a(Pr(t))}</span>
          <strong>${a(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===V?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Da(){return He?he&&fe.length===0?'<div class="roster-history-muted">Loading history...</div>':fe.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${fe.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${a(dn(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${a($a(t.event_type))}</td>
              <td>${a(t.old_value||"")}</td>
              <td>${a(t.new_value||"")}</td>
              <td>${a(t.source||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function Pr(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function $a(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Ma(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(bt)}" />
        </div>

        ${ee?`<div class="discord-data-error">${a(ee)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Ta()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${ye?`: ${a(ye)}`:""}</div>
            ${Na()}
          </div>
        </div>
      </div>
    </div>
  `}function Ta(){return ue&&I.length===0?'<div class="roster-history-muted">Searching...</div>':I.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${I.map((t,e)=>`
        <button class="roster-history-match${e===U||t.account_name===ye?" is-selected":""}" type="button" data-roster-history-account="${u(t.account_name)}">
          <span>${a(t.account_name)}</span>
          <strong>${a(t.rank||"")}</strong>
          ${e===U?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Na(){return ye?ue&&le.length===0?'<div class="roster-history-muted">Loading history...</div>':le.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${le.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${a(dn(t.timestamp))}</td>
              <td>${a(t.event_type||"")}</td>
              <td>${ba(t.rank)}</td>
              <td>${a(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function nt(){return typeof window<"u"&&window.GUILDSYNC_WEB===!0}function Ds(){if(!nt())return!0;try{return localStorage.getItem(hs)==="1"}catch{return!1}}function Ca(){return!nt()||Ds()?"":`
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
  `}function Ba(){const t=document.querySelector("#webSavedVarsUploadBannerDismissButton");!t||t.addEventListener("click",()=>{var e,r;try{localStorage.setItem(hs,"1")}catch{}(e=document.querySelector("#webSavedVarsUploadBannerHost"))==null||e.remove(),(r=document.querySelector(".guildsync-tab-content"))==null||r.classList.add("web-upload-banner-dismissed")})}function Oa(){return`
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
          <button id="runMemberLinksReportButton" class="refresh-discord-button report-run-button" type="button" ${B?"disabled":""}>
            ${B?"Loading...":"Run"}
          </button>
        </article>
      </div>
    </div>
  `}function $s(){var t,e,r,n;E==="settings"&&((t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>Ns()),(e=document.querySelector("#runDiscordRankAuditReportButton"))==null||e.addEventListener("click",()=>za()),(r=document.querySelector("#runDiscordLastSeenReportButton"))==null||r.addEventListener("click",()=>Ja()),(n=document.querySelector("#runMemberLinksReportButton"))==null||n.addEventListener("click",()=>oc()))}async function Mn(t,e){var s;const r=t.currentTarget,n=((s=r==null?void 0:r.files)==null?void 0:s[0])||null;if(!!n)try{const i=await n.text(),o=await fetch(`/api/guildsync/upload-savedvars/${encodeURIComponent(e)}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${(g==null?void 0:g.token)||""}`},body:JSON.stringify({file_name:n.name,raw_lua_text:i})}),c=await o.json().catch(()=>({}));if(!o.ok||c.ok===!1)throw new Error(c.error||c.message||`Upload failed with HTTP ${o.status}.`);f(`web-upload-${e}-success`,c.message||`${n.name} uploaded and processed.`,{ttlMs:h}),e==="banking"?await it({silent:!0}):e==="roster"&&(await xe({silent:!0}),await st({silent:!0}))}catch(i){f(`web-upload-${e}-error`,S(i),{ttlMs:h})}finally{r&&(r.value="")}}function Ft(){return nt()&&R()&&(l==null?void 0:l.connected)===!0}function Ms(){if(!nt())return null;let t=document.querySelector("#webSavedVarsFullScreenDropOverlay");return t||(t=document.createElement("div"),t.id="webSavedVarsFullScreenDropOverlay",t.className="web-savedvars-fullscreen-drop-overlay",t.setAttribute("aria-hidden","true"),t.innerHTML=`
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
  `,document.body.appendChild(t),t)}function Tn(){const t=Ms();!t||(t.classList.add("is-visible"),t.setAttribute("aria-hidden","false"))}function Ar(){const t=document.querySelector("#webSavedVarsFullScreenDropOverlay");!t||(t.classList.remove("is-visible"),t.setAttribute("aria-hidden","true"))}function dt(t){var r;return Array.from(((r=t==null?void 0:t.dataTransfer)==null?void 0:r.types)||[]).includes("Files")}function Ia(t){!(t!=null&&t.dataTransfer)||(t.dataTransfer.dropEffect=Ft()?"copy":"none")}function Ts(t){const e=String(t||"").split(/[\\/]/).pop();return jo.get(e)||""}function qa(){if(!nt())return;Ms();const t=e=>{!dt(e)||(e.preventDefault(),e.stopPropagation(),Ia(e))};document.addEventListener("dragenter",e=>{!dt(e)||(t(e),Oe+=1,Ft()&&Tn())},!0),document.addEventListener("dragover",e=>{t(e),dt(e)&&Ft()&&Tn()},!0),document.addEventListener("dragleave",e=>{!dt(e)||(e.preventDefault(),e.stopPropagation(),Oe=Math.max(0,Oe-1),Oe===0&&Ar())},!0),document.addEventListener("drop",async e=>{var n;if(!dt(e))return;if(t(e),Oe=0,Ar(),!Ft()){f("web-savedvars-drop-not-ready","SavedVariables drag/drop is only available while logged in and connected to the GuildSync server.",{ttlMs:h});return}const r=Array.from(((n=e.dataTransfer)==null?void 0:n.files)||[]);await Pa(r)},!0),window.addEventListener("blur",()=>{Oe=0,Ar()})}async function Pa(t=[]){if(wr){f("web-savedvars-drop-busy","A SavedVariables upload is already processing. Please wait for it to finish.",{ttlMs:h});return}const e=Array.from(t||[]).filter(Boolean);if(!e.length){f("web-savedvars-drop-empty","No file was dropped.",{ttlMs:h});return}const r=e.find(n=>!Ts(n.name));if(r){f("web-savedvars-drop-invalid",`Unsupported file: ${r.name}. Drop only GuildSyncBanking.lua, GuildSyncRoster.lua, or GuildSyncApplications.lua.`,{ttlMs:h});return}wr=!0;try{for(const n of e)await Fa(n)}finally{wr=!1}}async function Fa(t){const e=Ts(t.name);if(!e)throw new Error(`Unsupported file: ${t.name}`);const r=`web-savedvars-upload-${e}`,n=await t.text();if(!String(n||"").trim())throw new Error(`${t.name} is empty.`);f(r,`Uploading ${t.name}...`);try{const s=await A("guildsync:upload-savedvars-raw",{file_name:t.name,raw_lua_text:n,source:"web-drag-drop"},12e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||`${t.name} upload was rejected.`);e==="banking"?await it({silent:!0}):e==="roster"&&(await xe({silent:!0}),await st({silent:!0})),f(r,s.message||`${t.name} uploaded and processed.`,{ttlMs:h})}catch(s){throw f(r,S(s),{ttlMs:h}),s}fr("version")}function Ns(){Je=!0,_e="",d(),si()}function Fr(){Je=!1,_e="",d()}function Ga(){const t=Ua(),e=Va(),r=Qe.length;return`
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

        ${_e?`<div class="discord-data-error">${a(_e)}</div>`:""}

        <div class="report-results-content">
          ${ie&&r===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!ie&&r===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${r>0?Nn("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${r>0?Nn("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${a(Bs())}</textarea>
      </div>
    </div>
  `}function Ua(){return Qe.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function Va(){return Qe.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function Nn(t,e,r,n){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${a(t)}</h4>
          <p>${a(e)}</p>
        </div>
        <span>${a(String(r.length))} row${r.length===1?"":"s"}</span>
      </div>
      ${r.length>0?Ha(r):`<div class="roster-history-muted report-section-empty">${a(n)}</div>`}
    </section>
  `}function Ha(t=Qe){return`
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
              <td>${nn(e.rank||"")}</td>
              <td>${a(ar(e.joined))}</td>
              <td>${a(lr(e.purchased_tickets||0))}</td>
              <td>${a(Cs(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Cs(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function Bs(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Discord Link"]];for(const e of Qe){const r=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([r,e.account_name||"",e.rank||"",ar(e.joined),lr(e.purchased_tickets||0),Cs(e)])}return t.map(e=>e.map(cr).join("	")).join(`
`)}async function Wa(){const t=Bs();if(await dr(t)){f("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:h});return}const r=document.querySelector("#associateTicketReportTsv");r&&(r.focus(),r.select()),f("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:h})}function za(){Xe=!0,Ae="",d(),ni()}function Gr(){Xe=!1,Ae="",d()}function ja(){const t=vt.length;return`
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
          ${t>0?Ya(vt):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${a(Is())}</textarea>
      </div>
    </div>
  `}function Ya(t=vt){return`
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
              <td>${a(xs(e))}</td>
              <td>${a(e.discord_rank||"No matching rank role")}</td>
              <td>${a(e.eso_accounts||"No linked ESO account")}</td>
              <td>${a(e.eso_rank||"None")}</td>
              <td>${a(Os(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function xs(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function Os(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function Is(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of vt)t.push([xs(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",Os(e)]);return t.map(e=>e.map(cr).join("	")).join(`
`)}async function Ka(){const t=Is();if(await dr(t)){f("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:h});return}const r=document.querySelector("#discordRankAuditReportTsv");r&&(r.focus(),r.select()),f("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:h})}function Ja(){Ze=!0,Le="",et="",d(),ri(),L.length===0&&!B&&st({silent:!0})}function Ur(){Ze=!1,Le="",et="",Fe="",ce="",d()}function Qa(){const t=sn(),e=en.length;return`
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

        <input
          id="discordLastSeenReportSearchInput"
          class="member-links-report-search-input discord-last-seen-search-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="Search Discord member, username, last seen action, or date..."
          value="${u(et)}"
        />

        ${Le?`<div class="discord-data-error discord-last-seen-report-error">${a(Le)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${ae&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!ae&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?Xa(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${a(Ps(t))}</textarea>
      </div>
    </div>
  `}function Xa(t=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${lt("name","Discord Member")}</th>
            <th>${lt("eso","ESO")}</th>
            <th>${lt("date","Last Seen")}</th>
            <th>${lt("days","Days Since")}</th>
            <th>${lt("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr class="discord-last-seen-row ${u(sc(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-search="${u(qs(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${nc(e)}
                  <span>${a(ze(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${ec(e)}</td>
              <td>${a(on(e.last_seen))}</td>
              <td>${a(an(e.last_seen))}</td>
              <td>${a(Qt(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function lt(t,e){const r=Fe===t,n=r?ce==="asc"?"\u25B2":"\u25BC":"\u2195",s=r?`${e}: ${ce==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${r?" active":""}" type="button" data-discord-last-seen-sort="${u(t)}" title="${u(s)}">
      <span>${a(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${a(n)}</span>
    </button>
  `}function sn(){const t=[...en],e=Fe,r=ce;if(!e||!r)return t;const n=r==="desc"?-1:1;return t.sort((s,i)=>{var o,c;if(e==="date"){const p=Number(s.last_seen||0)||0,v=Number(i.last_seen||0)||0;return(p-v)*n}if(e==="days")return(Cn(s.last_seen)-Cn(i.last_seen))*n;if(e==="action")return Qt(s.last_seen_action).localeCompare(Qt(i.last_seen_action),void 0,{sensitivity:"base"})*n;if(e==="eso"){const p=kt(s),v=kt(i),w={linked:0,candidate:1,unlinked:2},m=((o=w[p.status])!=null?o:9)-((c=w[v.status])!=null?c:9);return m!==0?m*n:p.esoAccountName.localeCompare(v.esoAccountName,void 0,{sensitivity:"base"})*n}return ze(s).localeCompare(ze(i),void 0,{sensitivity:"base"})*n})}function Za(t){Fe!==t?(Fe=t,ce="asc"):ce==="asc"?ce="desc":(Fe="",ce=""),d()}function ze(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function qs(t){return[ze(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,tc(t),on(t==null?void 0:t.last_seen),an(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function kt(t){const e=gc(t==null?void 0:t.discord_id),r=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),n=String((e==null?void 0:e.eso_account_name)||"").trim();return r==="linked"&&n?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:n,title:`Linked ESO account: ${n}`}:(r==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&n?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:n,title:`Fuzzy ESO account candidate: ${n}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function ec(t){const e=kt(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${u(e.className)}"
      title="${u(e.title)}"
      aria-label="${u(e.label)}"
      role="img"
    ></span>
  `}function tc(t){const e=kt(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function rc(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!r)return"";if(/^https?:\/\//i.test(e))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function nc(t){const e=ze(t),r=e?e.slice(0,2).toUpperCase():"?",n=rc(t);return n?`<span class="discord-member-avatar"><img src="${u(n)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${a(r)}</span>`}function on(t){const e=Number(t);if(!e)return"Never";const r=new Date(e*1e3);if(Number.isNaN(r.getTime()))return String(t||"");const n=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(r).reduce((s,i)=>(s[i.type]=i.value,s),{});return`${n.month}/${n.day}/${n.year} ${n.hour}:${n.minute} ${n.dayPeriod}`}function sc(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const r=(Date.now()-e*1e3)/864e5;return r>30?"discord-last-seen-red":r>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function an(t){const e=Number(t);if(!e)return"Never";const r=Date.now()-e*1e3;if(!Number.isFinite(r))return"";if(r<0)return"0 days";const n=Math.floor(r/864e5);return`${n} day${n===1?"":"s"}`}function Cn(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const r=Date.now()-e*1e3;return Number.isFinite(r)?r<0?0:Math.floor(r/864e5):Number.POSITIVE_INFINITY}function Qt(t){return String(t||"").trim()||"None tracked"}function Ps(t=sn()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const r of t){const n=kt(r);e.push([ze(r),n.label||"",n.esoAccountName||"",on(r==null?void 0:r.last_seen),an(r==null?void 0:r.last_seen),Qt(r==null?void 0:r.last_seen_action),(r==null?void 0:r.username)||"",(r==null?void 0:r.discord_id)||""])}return e.map(r=>r.map(cr).join("	")).join(`
`)}async function ic(){const t=sn().filter(s=>{const i=K(et);return i?K(qs(s)).includes(i):!0}),e=Ps(t);if(await dr(e)){f("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:h});return}const n=document.querySelector("#discordLastSeenReportTsv");n&&(n.focus(),n.select()),f("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:h})}function oc(){Be=!0,F="",d(),L.length===0&&!B&&st({silent:!0})}function Vr(){Be=!1,sr="",Z=-1,d()}function ac(){return`
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
          <span class="roster-history-muted">${a(String(L.length))} link/candidate row${L.length===1?"":"s"}</span>
        </div>

        <input
          id="memberLinksReportSearchInput"
          class="member-links-report-search-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="Search ESO or Discord member links..."
          value="${u(sr)}"
        />

        ${F?`<div class="discord-data-error member-links-report-error">${a(F)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${uc()}
        </div>
      </div>
    </div>
  `}function Fs(){var r,n,s;if(!Be)return;(r=document.querySelector("#closeMemberLinksReportButton"))==null||r.addEventListener("click",Vr),(n=document.querySelector("#refreshMemberLinksButton"))==null||n.addEventListener("click",()=>st()),(s=document.querySelector("#runMemberAutoLinkButton"))==null||s.addEventListener("click",()=>pc());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",fc),t.addEventListener("keydown",hc),Us()),document.querySelectorAll("[data-accept-member-candidate]").forEach(i=>{i.addEventListener("click",()=>Vs(i.dataset.acceptMemberCandidate||"",i.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(i=>{i.addEventListener("click",()=>mc(i.dataset.unlinkMemberLink||"",i.dataset.unlinkMemberLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",i=>{i.target===e&&Vr()})}function Bn(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function xn(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function cc(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id,t==null?void 0:t.link_status,t==null?void 0:t.link_method,t==null?void 0:t.match_reason,t==null?void 0:t.match_field,Xt(t)].filter(Boolean).join(" ")}function dc(t){return[...Array.isArray(t)?t:[]].sort((e,r)=>{const n=Bn(e)-Bn(r);if(n!==0)return n;const s=xn(e).localeCompare(xn(r),void 0,{sensitivity:"base"});return s!==0?s:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((r==null?void 0:r.discord_user_id)||""),void 0,{sensitivity:"base"})})}function lc(t){const e=Xt(t);let r="";e==="Username"?r=(t==null?void 0:t.discord_username)||"":e==="Global Name"?r=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(r=(t==null?void 0:t.discord_server_nickname)||""),r||(r=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const n=e?` <span class="member-link-report-match-field">(${a(e)})</span>`:"";return`<span class="member-link-report-discord-name">${a(r)}</span>${n}`}function uc(){return B&&L.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(L)||L.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${dc(L).map(e=>{var i;const r=String(e.link_status||"").trim().toLowerCase(),n=String(e.link_method||"").trim().toLowerCase(),s=lc(e);return`
              <tr data-member-links-report-row data-member-links-report-search="${u(cc(e))}">
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
  `}function Gs(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function On(t){const e=Gs();if(e.forEach(n=>n.classList.remove("member-links-report-row-active")),e.length===0){Z=-1;return}Z=Math.max(0,Math.min(t,e.length-1));const r=e[Z];r.classList.add("member-links-report-row-active"),r.scrollIntoView({block:"nearest"})}function Us(){const t=K(sr),e=[...document.querySelectorAll("[data-member-links-report-row]")];let r=0;e.forEach(s=>{const i=K(s.dataset.memberLinksReportSearch||s.textContent||""),o=!t||i.includes(t);s.hidden=!o,s.classList.remove("member-links-report-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinksReportSearchEmpty");n&&(n.hidden=r!==0),Z=-1}function fc(t){sr=t.target.value||"",Us()}function hc(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Gs();if(e.length===0)return;if(t.key==="ArrowDown"){const n=Z<0?0:Z+1;On(n>=e.length?e.length-1:n);return}const r=Z<0?e.length-1:Z-1;On(r<0?0:r)}async function st(t={}){if(!(l!=null&&l.connected)){F="You must be connected to load member links.",d();return}B=!0,F="",t.silent||d();try{const e=await A("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");L=Array.isArray(e.links)?e.links:[]}catch(e){F=S(e)}finally{B=!1,d()}}async function pc(){if(!(l!=null&&l.connected)||!g.logged_in){F="You must be logged in and connected to run auto-linking.",d();return}B=!0,F="",d();try{const t=await A("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");L=Array.isArray(t.links)?t.links:[],f("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:h})}catch(t){F=S(t)}finally{B=!1,d()}}async function Vs(t,e=""){try{const r=await A("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to accept candidate.");L=Array.isArray(r.links)?r.links:L,f("member-link-accepted",r.message||"Candidate accepted as a link.",{ttlMs:h})}catch(r){F=S(r),f("member-link-accept-error",F,{ttlMs:h})}}async function mc(t,e=""){if(!!await ws({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const n=await A("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to unlink member.");L=Array.isArray(n.links)?n.links:L,f("member-link-unlinked",n.message||"Member link removed.",{ttlMs:h})}catch(n){F=S(n)}d()}}function Ne(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function ir(t){const e=Ne(t);return e?L.filter(r=>Ne(r.eso_account_name)===e):[]}function or(t){const e=String(t||"").trim();return e?L.filter(r=>String(r.discord_user_id||"").trim()===e):[]}function Hs(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const r=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked");if(r.length>0){const s=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(s)return s;const i=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return i||r[0]}const n=e.find(s=>String(s.link_status||"").trim().toLowerCase()==="candidate");return n||e[0]}function gc(t){return Hs(or(t))}function yc(t){return`${Ne(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function cn(){return b?b.mode==="discord-to-eso"?or(b.discordUserId):ir(b.esoAccountName):[]}function bc(t){const e=String(t||"").trim(),r=C.find(n=>String(n.discord_id||"").trim()===e);return r&&(r.server_nickname||r.global_name||r.username||r.discord_id)||e}function Ws(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?or(t.discordUserId):ir(t.esoAccountName),n=Hs(r),s=String((n==null?void 0:n.link_status)||"").trim().toLowerCase(),i=r.filter(c=>String(c.link_status||"").trim().toLowerCase()==="linked").length,o=r.filter(c=>String(c.link_status||"").trim().toLowerCase()==="candidate").length;return i>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?i===1?n.eso_account_name:`${i} ESO accounts`:i===1?n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member":`${i} Discord accounts`}`}:s==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?n.eso_account_name:n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member"}`}:s==="blocked"||Number((n==null?void 0:n.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function zs(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,n=Ws(t);return`
    <button
      class="member-link-status-dot member-link-status-${u(n.className)}"
      type="button"
      title="${u(n.title)}"
      aria-label="${u(n.label)}"
      data-open-member-link-dialog="${u(e)}"
      data-member-link-value="${u(r||"")}"
    ></button>
  `}function vc(){return b?b.mode==="discord-to-eso"?bc(b.discordUserId):b.esoAccountName||"":""}function js(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function Xt(t){const e=js((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const r=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(r.includes("discord_username")||r.includes("username"))return"Username";if(r.includes("discord_display_name")||r.includes("global")||r.includes("display"))return"Global Name";if(r.includes("discord_server_nickname")||r.includes("server")||r.includes("nickname"))return"Server Nickname";const n=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(n==="exact"||n==="fuzzy"){const s=(t==null?void 0:t.eso_account_name)||"",i=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const c of i){const p=kc(s,c.value);(!o||p>o.score)&&(o={...c,score:p})}if(o&&o.score>0)return o.field}return""}function K(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function kc(t,e){const r=K(t),n=K(e);if(!r||!n)return 0;if(r===n)return 100;if((r.includes(n)||n.includes(r))&&Math.min(r.length,n.length)>=4)return 88;const s=Math.abs(r.length-n.length),i=[...r].findIndex((c,p)=>c!==n[p]),o=i===-1?Math.min(r.length,n.length):i;return Math.max(0,Math.min(75,Math.round(o*10-s*3)))}function Sc(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function wc(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function _c(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),r=Sc(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${a(r)}</span>`}function Ac(t){var c;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",r=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",n=String(t.link_status||"").trim().toLowerCase(),o=n==="linked"?`<button
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
        <div><span>Status:</span> ${_c(t)} \xB7 ${a(wc(t.link_method))} \xB7 ${a(String((c=t.match_confidence)!=null?c:""))}% \xB7 ${a(r)}</div>
        ${Xt(t)?`<div><span>Matched:</span> Matched on ${a(Xt(t))}</div>`:""}
      </div>
      ${o}
    </div>
  `}function Lc(){const t=cn();return t.length?[...t].sort((r,n)=>{var p,v;const s=String(r.link_status||"").trim().toLowerCase(),i=String(n.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},c=((p=o[s])!=null?p:9)-((v=o[i])!=null?v:9);return c!==0?c:Number(n.match_confidence||0)-Number(r.match_confidence||0)}).map(r=>Ac(r)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function Ec(){if(We)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(ne)return`<div class="discord-data-error">${a(ne)}</div>`;if(!Array.isArray(Ee)||Ee.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(cn().map(r=>yc(r))),e=[...Ee].filter(r=>{const n=(b==null?void 0:b.mode)==="discord-to-eso"?`${Ne(r.account_name)}::${String(b.discordUserId||"").trim()}`:`${Ne(b==null?void 0:b.esoAccountName)}::${String(r.discord_id||"").trim()}`;return!t.has(n)}).sort((r,n)=>{const s=Number(n.confidence||0)-Number(r.confidence||0);return s!==0?s:In(r).localeCompare(In(n),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(r=>Rc(r)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function In(t){return((b==null?void 0:b.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function Rc(t,e={}){var m,k,x;const r=(b==null?void 0:b.mode)||"",n=r==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",s=js(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),i=r==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[i,s?`Matched on ${s}`:""].filter(Boolean).join(" \u2022 "),c=r==="discord-to-eso"?t.account_name:t.discord_id,p=e.disabled===!0,v=[n,i,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),w=[n,o,`${(m=t.confidence)!=null?m:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${u(c||"")}" data-member-link-option-search="${u(v)}" title="${u(w)}" ${p?"disabled":""}>
      <span class="member-link-option-name" title="${u(n||"")}">${a(n||"")}</span>
      <span class="member-link-option-subtitle" title="${u(o||"")}">${a(o||"")}</span>
      <span class="member-link-option-confidence" title="${u(String((k=t.confidence)!=null?k:0))}%">${a(String((x=t.confidence)!=null?x:0))}%</span>
    </button>
  `}function Dc(){const t=(b==null?void 0:b.mode)||"",e=vc(),r=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
            ${Lc()}
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
              value="${u(At)}"
            />
            ${Ec()}
          </section>
        </div>

      </div>
    </div>
  `}async function Ys(t,e){if(!(l!=null&&l.connected)||!R()){f("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:h});return}be=!0,b=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},Ee=[],We=!0,ne="",At="",W=-1,d();try{if(!Array.isArray(L)||L.length===0){const s=await A("guildsync:request-member-links",{},3e4);s!=null&&s.ok&&(L=Array.isArray(s.links)?s.links:[])}const n=await A("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load link suggestions.");Ee=Array.isArray(n.options)?n.options:[]}catch(r){ne=S(r)}finally{We=!1,d()}}function je(){document.removeEventListener("keydown",Hr),be=!1,b=null,Ee=[],We=!1,ne="",At="",W=-1,d()}function Ks(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function qn(t){const e=Ks();if(e.forEach(n=>n.classList.remove("member-link-option-row-active")),e.length===0){W=-1;return}W=Math.max(0,Math.min(t,e.length-1));const r=e[W];r.classList.add("member-link-option-row-active"),r.scrollIntoView({block:"nearest"})}function Js(){const t=K(At),e=[...document.querySelectorAll(".member-link-option-row")];let r=0;e.forEach(s=>{const i=K(s.dataset.memberLinkOptionSearch||s.textContent||""),o=!t||i.includes(t);s.hidden=!o,s.classList.remove("member-link-option-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinkSuggestionSearchEmpty");n&&(n.hidden=r!==0),W=-1}function $c(t){At=t.target.value||"",Js()}function Mc(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Ks();if(e.length===0)return;if(t.key==="ArrowDown"){const n=W<0?0:W+1;qn(n>=e.length?e.length-1:n);return}const r=W<0?e.length-1:W-1;qn(r<0?0:r)}function Hr(t){!be||t.key==="Escape"&&(t.preventDefault(),je())}async function Tc(t){if(!(!b||!t))try{const e=b.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:b.discordUserId}:{esoAccountName:b.esoAccountName,discordUserId:t},r=await A("guildsync:manual-link-member",e,3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to link members.");L=Array.isArray(r.links)?r.links:L,f("member-link-saved",r.message||"Member link saved.",{ttlMs:h}),je()}catch(e){ne=S(e),d()}}async function Nc(t,e=""){await Vs(t,e),je()}async function Cc(){if(!!b){We=!0,ne="",d();try{const t=b.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:b.discordUserId}:{mode:"eso-to-discord",accountName:b.esoAccountName},e=await A("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");Ee=Array.isArray(e.options)?e.options:[]}catch(t){ne=S(t)}finally{We=!1,d()}}}async function Bc(t="",e=""){const r=cn().find(s=>Ne(s.eso_account_name)===Ne(t)&&String(s.discord_user_id||"").trim()===String(e||"").trim());if(!(!r||!await ws({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const s=await A("guildsync:manual-unlink-member",{esoAccountName:r.eso_account_name,discordUserId:r.discord_user_id},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to unlink member.");L=Array.isArray(s.links)?s.links:L,f("member-link-unlinked",s.message||"Member link removed.",{ttlMs:h}),await Cc()}catch(s){ne=S(s),d()}}function Qs(){var r;if(!be)return;document.removeEventListener("keydown",Hr),document.addEventListener("keydown",Hr),(r=document.querySelector("#closeMemberLinkDialogButton"))==null||r.addEventListener("click",je);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",$c),t.addEventListener("keydown",Mc),Js()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(n=>{n.addEventListener("click",()=>Bc(n.dataset.unlinkEsoAccount||"",n.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(n=>{n.addEventListener("click",()=>Tc(n.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(n=>{n.addEventListener("click",()=>Nc(n.dataset.acceptDialogMemberCandidate||"",n.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",n=>{n.target===e&&je()})}function Xs(){var e,r,n;if(!Je)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",Fr),(r=document.querySelector("#rerunAssociateTicketReportButton"))==null||r.addEventListener("click",()=>si()),(n=document.querySelector("#copyAssociateTicketReportGridButton"))==null||n.addEventListener("click",()=>Wa());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",s=>{s.target===t&&Fr()})}function Zs(){var e,r,n;if(!Xe)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",Gr),(r=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||r.addEventListener("click",()=>ni()),(n=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||n.addEventListener("click",()=>Ka());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",s=>{s.target===t&&Gr()})}function ei(){var r,n,s;if(!Ze)return;(r=document.querySelector("#closeDiscordLastSeenReportButton"))==null||r.addEventListener("click",Ur),(n=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||n.addEventListener("click",()=>ri()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>ic()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(i=>{i.addEventListener("click",()=>Za(i.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&(t.addEventListener("input",xc),ti());const e=document.querySelector(".discord-last-seen-report-overlay");e&&e.addEventListener("click",i=>{i.target===e&&Ur()})}function xc(t){et=t.target.value||"",ti()}function ti(){const t=K(et),e=[...document.querySelectorAll("[data-discord-last-seen-row]")];let r=0;e.forEach(s=>{const i=K(s.dataset.discordLastSeenSearch||s.textContent||""),o=!t||i.includes(t);s.hidden=!o,o&&(r+=1)});const n=document.querySelector("#discordLastSeenReportSearchEmpty");n&&(n.hidden=r!==0)}async function ri(){if(!(l!=null&&l.connected)||!R()){Le="You must be logged in and connected to run this report.",d();return}ae=!0,Le="",d();try{const t=await A("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");C=mn(t.members),en=[...C]}catch(t){Le=S(t)}finally{ae=!1,d(),T("discordLastSeenReportSearchInput")}}async function ni(){if(!(l!=null&&l.connected)||!R()){Ae="You must be logged in and connected to run this report.",d();return}oe=!0,Ae="",d();try{const t=await A("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");vt=Array.isArray(t.rows)?t.rows:[]}catch(t){Ae=S(t)}finally{oe=!1,d()}}async function si(){if(!(l!=null&&l.connected)||!R()){_e="You must be logged in and connected to run this report.",d();return}ie=!0,_e="",d();try{const t=await A("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Qe=Array.isArray(t.rows)?t.rows:[]}catch(t){_e=S(t)}finally{ie=!1,d()}}function Wr(){const t=String(rt||"").trim().toLowerCase();return t?H.filter(e=>String(e.account_name||"").trim()).filter(e=>String(e.account_name||"").toLowerCase().includes(t)).slice().sort((e,r)=>{const n=String(e.account_name||"").toLowerCase(),s=String(r.account_name||"").toLowerCase(),i=n.startsWith(t)?0:1,o=s.startsWith(t)?0:1;return i!==o?i-o:n.localeCompare(s)}).slice(0,20):[]}function Pn(t){const e=String(t||"").trim();_.accountName=e,rt=e,Q="",d(),T("manualTicketAccountSearchInput")}function T(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const r=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(r,r)},0)}function Oc(){const t=Wr(),e=String(_.accountName||"").trim();return`
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
            <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(rt)}" autocomplete="off" />
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
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${Yt?"disabled":""}>${Yt?"Saving...":"Add Manual Tickets"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function ii(){var i,o,c,p,v,w;if(!re)return;(i=document.querySelector("#closeManualBiweeklyTicketButton"))==null||i.addEventListener("click",()=>{re=!1,d()});const t=document.querySelector("#manualTicketAccountSearchInput");t&&(t.addEventListener("input",m=>{rt=m.target.value||"",_.accountName="",J=Wr().length>0?0:-1,d(),T("manualTicketAccountSearchInput")}),t.addEventListener("keydown",m=>{const k=Wr();if(m.key==="ArrowDown"||m.key==="ArrowUp"){if(k.length===0)return;m.preventDefault();const Rt=m.key==="ArrowDown"?1:-1;J=((J<0?0:J)+Rt+k.length)%k.length,d(),T("manualTicketAccountSearchInput");return}if(m.key!=="Enter")return;m.preventDefault();const x=k[J>=0?J:0];x!=null&&x.account_name&&Pn(x.account_name)})),document.querySelectorAll("[data-manual-ticket-account]").forEach(m=>{m.addEventListener("click",()=>{Pn(m.dataset.manualTicketAccount||"")})}),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",m=>{_.note=m.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(m=>{m.addEventListener("click",()=>{const k=String(m.dataset.manualTicketType||"").trim().toLowerCase();_.ticketType=k==="monthly"?"monthly":"biweekly",d()})}),(c=document.querySelector("[data-manual-ticket-toggle]"))==null||c.addEventListener("click",()=>{_.ticketType=_.ticketType==="monthly"?"biweekly":"monthly",d()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",m=>{const k=String(m.target.value||"").replace(/\D/g,"");m.target.value!==k&&(m.target.value=k),_.goldValue=k});const r=document.querySelector("#manualTicketCountInput");r==null||r.addEventListener("input",m=>{const k=String(m.target.value||"").replace(/\D/g,"");m.target.value!==k&&(m.target.value=k),_.tickets=k});const n=m=>{const k=Number(_.tickets)||0,x=Math.max(1,k+m);_.tickets=String(x),r&&(r.value=_.tickets,r.focus())};(p=document.querySelector("#manualTicketCountUpButton"))==null||p.addEventListener("click",()=>n(1)),(v=document.querySelector("#manualTicketCountDownButton"))==null||v.addEventListener("click",()=>n(-1)),(w=document.querySelector("#saveManualBiweeklyTicketButton"))==null||w.addEventListener("click",()=>Ic());const s=document.querySelector(".roster-history-overlay");s&&s.addEventListener("click",m=>{m.target===s&&(re=!1,d())})}async function Ic(){const t=String(_.accountName||"").trim(),e=String(_.note||"").trim(),r=String(_.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",n=Number(String(_.goldValue||"").trim()||0),s=Number(_.tickets);if(!t){Q="Choose a guild member.",d();return}if(!Number.isFinite(n)||n<0){Q="Gold value must be zero or greater.",d();return}if(!Number.isFinite(s)||s<=0){Q="Enter the number of tickets to add.",d();return}Yt=!0,Q="",d();try{const i=await A("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:r,gold_value:Math.floor(n),tickets:Math.floor(s)},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to add manual ticket entry.");re=!1,_={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},rt="",J=-1,await it({silent:!0}),f("manual-ticket-added",i.message||"Manual ticket entry added.",{ttlMs:h})}catch(i){Q=S(i)}finally{Yt=!1,d()}}function oi(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>xe());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{Ue=!0,ee="",d()});const r=document.querySelector("#rosterMemberSearch");r&&(r.addEventListener("input",o=>{jt=o.target.value||"",xr=o.target.selectionStart,Or=o.target.selectionEnd,$=-1,d({restoreRosterSearchFocus:!0})}),r.addEventListener("keydown",qc)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Sa(o.dataset.rosterSortColumn||"account_name")})});const n=document.querySelector("#rosterRankFilter");n&&n.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(we.add(c),$=-1,d())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRosterRankFilter||"";we.delete(c),$=-1,d()})});const s=document.querySelector("#rosterLinkStatusFilter");s&&s.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(Pe.add(c),$=-1,d())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRosterLinkStatusFilter||"";Pe.delete(c),$=-1,d()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>Ys(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const i=document.querySelector("#clearRosterFiltersButton");i&&i.addEventListener("click",()=>{jt="",we.clear(),Pe.clear(),X="",N="",$=-1,d()}),Pc()}function qc(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){$=-1;return}t.preventDefault(),t.key==="ArrowDown"?$=$<0?0:Math.min($+1,e.length-1):t.key==="ArrowUp"&&($=$<0?e.length-1:Math.max($-1,0)),e.forEach((n,s)=>{n.classList.toggle("roster-search-active-row",s===$)});const r=e[$];r&&typeof r.scrollIntoView=="function"&&r.scrollIntoView({block:"nearest",inline:"nearest"})}function Pc(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{Ue=!1,d()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",r=>{if(bt=r.target.value||"",U=-1,!bt.trim()){clearTimeout(_r),ee="",I=[],ye="",le=[],ue=!1,d(),T("rosterHistorySearchInput");return}clearTimeout(_r),_r=setTimeout(()=>{Vc({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(I.length===0)return;r.preventDefault();const s=r.key==="ArrowDown"?1:-1;U=((U<0?0:U)+s+I.length)%I.length,d(),T("rosterHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=I[U>=0?U:0];n!=null&&n.account_name&&Gn(n.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(r=>{r.addEventListener("click",()=>{Gn(r.dataset.rosterHistoryAccount||"")})})}function ai(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{Ve=!1,d()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",r=>{se=r.target.value||"",V=-1,ve+=1;const n=ve;if(clearTimeout(Rn),!se.trim()){te="",q=[],He="",Me="",fe=[],he=!1,d(),T("discordHistorySearchInput");return}Rn=setTimeout(()=>{Fc({auto:!0,keepFocus:!0,generation:n})},Jo)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(q.length===0)return;r.preventDefault();const s=r.key==="ArrowDown"?1:-1;V=((V<0?0:V)+s+q.length)%q.length,d(),T("discordHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=q[V>=0?V:0];n!=null&&n.discord_id&&Fn(n.discord_id,Pr(n))})),document.querySelectorAll("[data-discord-history-id]").forEach(r=>{r.addEventListener("click",()=>{Fn(r.dataset.discordHistoryId||"",r.dataset.discordHistoryName||"")})})}async function Fc(t={}){const e=Number.isInteger(t.generation)?t.generation:++ve,r=se.trim();if(e===ve){if(!r){te="",q=[],V=-1,He="",Me="",fe=[],he=!1,d(),t.keepFocus&&T("discordHistorySearchInput");return}he=!0,te="",q=[],V=-1,He="",Me="",fe=[],d(),t.keepFocus&&T("discordHistorySearchInput");try{const n=await A("guildsync:request-discord-member-history",{query:r},3e4);if(e!==ve||r!==se.trim())return;if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search Discord member history.");q=Gc(n.matches),V=q.length>0?0:-1}catch(n){if(e!==ve||r!==se.trim())return;te=S(n)}finally{if(e!==ve||r!==se.trim())return;he=!1,d(),t.keepFocus&&T("discordHistorySearchInput")}}}async function Fn(t,e="",r={}){const n=String(t||"").trim();if(!!n){He=n,Me=String(e||n).trim(),se=Me,fe=[],he=!0,te="",d();try{const s=await A("guildsync:request-discord-member-history-events",{discord_id:n},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to load Discord member history.");fe=Uc(s.events)}catch(s){te=S(s)}finally{he=!1,r.keepLoading||d()}}}function Gc(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function Uc(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n,s,i,o,c,p,v,w;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((n=(r=e.old_value)!=null?r:e.oldValue)!=null?n:"").trim(),new_value:String((i=(s=e.new_value)!=null?s:e.newValue)!=null?i:"").trim(),event_timestamp:(p=(c=(o=e.event_timestamp)!=null?o:e.eventTimestamp)!=null?c:e.timestamp)!=null?p:"",event_datetime:(w=(v=e.event_datetime)!=null?v:e.eventDatetime)!=null?w:"",source:String(e.source||"").trim()}}):[]}async function Vc(t={}){const e=bt.trim();if(!e){ee="",I=[],U=-1,ye="",le=[],ue=!1,d(),t.keepFocus&&T("rosterHistorySearchInput");return}ue=!0,ee="",I=[],U=-1,ye="",le=[],d(),t.keepFocus&&T("rosterHistorySearchInput");try{const r=await A("guildsync:request-roster-rank-history",{query:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search roster rank history.");I=Hc(r.matches),U=I.length>0?0:-1}catch(r){ee=S(r)}finally{ue=!1,d(),t.keepFocus&&T("rosterHistorySearchInput")}}async function Gn(t,e={}){const r=String(t||"").trim();if(!!r){ye=r,bt=r,le=[],ue=!0,ee="",d();try{const n=await A("guildsync:request-roster-stream-history",{account_name:r},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster stream history.");le=Wc(n.events)}catch(n){ee=S(n)}finally{ue=!1,e.keepLoading||d()}}}function Hc(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function Wc(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(n=(r=e.timestamp)!=null?r:e.timestampS)!=null?n:"",officer:String(e.officer||"").trim()}}):[]}function ci(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(r=e.joined)!=null?r:""}}).sort((e,r)=>e.account_name.localeCompare(r.account_name)):[]}function zc(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function ar(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function dn(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function jc(t={}){H=ci(t.members),zt=t.last_refresh||new Date().toISOString(),E==="eso-members"&&d(),f("roster-data-updated",`Roster data updated. Loaded ${H.length} member record${H.length===1?"":"s"}.`,{ttlMs:h})}async function xe(t={}){if(!!(l!=null&&l.connected)){ge=!0,d();try{const e=await A("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");H=ci(e.members),zt=e.last_refresh||zt,t.silent||f("roster-data-loaded",`Loaded ${H.length} roster member${H.length===1?"":"s"}.`,{ttlMs:h})}catch(e){f("roster-data-error",S(e),{ttlMs:h})}finally{ge=!1,d()}}}async function Yc(t={}){var e;if(!!R()){if(!(l!=null&&l.connected)){f("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:h});return}ge=!0,d();try{const r=await Ho(t);if(!(r!=null&&r.ok)){f("roster-data-pending",(r==null?void 0:r.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:h});return}const n={local_upload_id:di(),authenticated_username:Ce(),authenticated_discord_user_id:((e=g==null?void 0:g.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await ui(n)}catch(s){throw Kc(n),s}await xe({silent:!0})}catch(r){f("roster-data-error",S(r),{ttlMs:h})}finally{ge=!1,d()}}}function di(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function ln(){try{const t=window.localStorage.getItem(fs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function li(t){window.localStorage.setItem(fs,JSON.stringify(Array.isArray(t)?t:[]))}function Kc(t){const e=String((t==null?void 0:t.local_upload_id)||di()),r=ln().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),li(r),f("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:h})}function Jc(t){const e=ln().filter(r=>(r==null?void 0:r.local_upload_id)!==t);li(e)}async function Qc(){if(Sr||!(l!=null&&l.connected)||!R())return;const t=ln();if(t.length!==0){Sr=!0;try{for(const e of t){if(!(l!=null&&l.connected)||!R())return;await ui(e),Jc(e.local_upload_id)}}catch(e){f("roster-data-pending-error",`Pending roster upload retry failed: ${S(e)}`,{ttlMs:h})}finally{Sr=!1}}}async function ui(t){if(!(l!=null&&l.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await A("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const r=await Wo(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return f("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:h}),e}function Xc(){const t=zr(P),e=od(t),r=P!=="other";return`
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
          <span class="discord-last-refresh">Last Refresh: ${a(wi(bs))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${Te||!R()?"disabled":""} ${R()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Te?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${Lr("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${Lr("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${Lr("other","?","Other","All other deposits")}
        </div>

        ${rd(P)}

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
              ${t.length>0?t.map(n=>ad(n,r)).join(""):cd(r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${a(mi(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${r?`<div>Total Tickets Awarded: <strong>${a(lr(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${Re?Zc(zr(Lt)):""}
    </div>
  `}function Zc(t){return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${a(Ge(Lt))} Deposits</h3>
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
              ${t.length>0?t.map(e=>ed(e)).join(""):td()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${a(hi(t))}</textarea>
      </div>
    </div>
  `}function ed(t){return`
    <tr>
      <td>${a(t.displayName||"")}</td>
      <td>${a(String(Number(t.amount)||0))}</td>
      <td>${a(String(Number(t.ticketAmount)||0))}</td>
      <td>${a(t.note||"")}</td>
    </tr>
  `}function td(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${a(Ge(Lt))}.</td>
    </tr>
  `}function rd(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=pi(t),r=un(t),n=r<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${u(Ge(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${a(Ge(t))} Raffle Period ${r===0?"(Current)":`(${Math.abs(r)} period${Math.abs(r)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${a(Gt(e.salesStart))} through ${a(Gt(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${a(Gt(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${n?"":"disabled"} aria-label="Next ${u(Ge(t))} raffle period">\u203A</button>
    </div>
  `}function Lr(t,e,r,n){const s=P===t;return`
    <button class="bank-section-card${s?" active":""}" type="button" data-bank-section="${u(t)}" aria-selected="${s?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${a(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${a(r)}</span>
        <span class="bank-section-subtitle">${a(n)}</span>
      </span>
    </button>
  `}function fi(){if(E!=="more")return;document.querySelectorAll("[data-bank-section]").forEach(i=>{i.addEventListener("click",()=>{P=i.dataset.bankSection||"biweekly",d()})}),document.querySelectorAll("[data-bank-export-section]").forEach(i=>{i.addEventListener("click",()=>{Lt=(i.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",Re=!0,d()})}),document.querySelectorAll("[data-bank-period-move]").forEach(i=>{i.addEventListener("click",()=>{id(i.dataset.bankPeriodMove||""),d()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{Re=!1,d()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>nd());const r=document.querySelector(".bank-export-overlay");r&&r.addEventListener("click",i=>{i.target===r&&(Re=!1,d())});const n=document.querySelector("#openManualBiweeklyTicketButton");n&&n.addEventListener("click",async()=>{if(!R()){f("manual-ticket-login-required","Login required to add manual tickets.",{ttlMs:h});return}re=!0,Q="",rt=_.accountName||"",H.length===0&&(l==null?void 0:l.connected)&&R()&&await xe({silent:!0}),d()});const s=document.querySelector("#refreshBankingDataButton");s&&s.addEventListener("click",()=>{if(!R()){f("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:h});return}yi({key:"banking"})})}function hi(t){const e=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const r of t)e.push([r.displayName||"",String(Number(r.amount)||0),String(Number(r.ticketAmount)||0),r.note||""]);return e.map(r=>r.map(cr).join("	")).join(`
`)}function cr(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function dr(t){var s;const e=String(t!=null?t:"");if((s=navigator.clipboard)!=null&&s.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const r=document.createElement("textarea");r.value=e,r.setAttribute("readonly","readonly"),r.style.position="fixed",r.style.left="0",r.style.top="0",r.style.width="1px",r.style.height="1px",r.style.opacity="0",r.style.pointerEvents="none",r.style.zIndex="-1",document.body.appendChild(r),r.focus(),r.select(),r.setSelectionRange(0,r.value.length);let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r)}return n}async function nd(){const t=zr(Lt),e=hi(t);if(await dr(e)){f("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:h});return}const n=document.querySelector("#bankingExportTsv");n&&(n.focus(),n.select()),f("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:h})}function zr(t){return j.filter(e=>e.type===t).filter(e=>sd(t,e)).sort((e,r)=>(Number(r.time)||0)-(Number(e.time)||0))}function sd(t,e){if(t==="other")return!0;const r=Number(e==null?void 0:e.time)||0;if(r<=0)return!1;const n=pi(t);return r>=n.salesStart&&r<=n.salesEnd}function un(t){return Number(Ir[t])||0}function id(t){if(P!=="biweekly"&&P!=="monthly")return;const e=un(P);if(t==="previous"){Ir[P]=e-1;return}t==="next"&&e<0&&(Ir[P]=e+1)}function pi(t){const e=Math.floor(Date.now()/1e3),r=t==="monthly",n=r?ea:Zo;let s=r?Xo:Qo;for(;s-n>e;)s-=n;for(;s<e;)s+=n;return s+=un(t)*n,{salesStart:s-n+1,salesEnd:s,raffleTime:s+ta}}function od(t){return t.reduce((e,r)=>(e.amount+=Number(r.amount)||0,e.tickets+=Number(r.ticketAmount)||0,e),{amount:0,tickets:0})}function ad(t,e=!0){return`
    <tr>
      <td>${a(t.note||t.eventId||"")}</td>
      <td>${a(Gt(t.time))}</td>
      <td>${a(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${a(mi(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td><strong class="bank-ticket-amount">${a(lr(t.ticketAmount))}</strong></td>`:""}
    </tr>
  `}function cd(t=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?"5":"4"}">No ${a(Ge(P))} deposits found for this ${P==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function Ge(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function Gt(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function mi(t){return(Number(t)||0).toLocaleString()}function lr(t){return(Number(t)||0).toLocaleString()}function fn(t){return Array.isArray(t)?t.map(e=>{var n,s,i,o,c,p,v,w,m,k,x,Rt;const r=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:r==="monthly"||r==="biweekly"||r==="other"?r:"other",eventId:String((s=(n=e==null?void 0:e.eventId)!=null?n:e==null?void 0:e.event_id)!=null?s:"").trim(),time:Number((o=(i=e==null?void 0:e.time)!=null?i:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((p=(c=e==null?void 0:e.displayName)!=null?c:e==null?void 0:e.display_name)!=null?p:"").trim(),amount:Number((v=e==null?void 0:e.amount)!=null?v:0)||0,ticketAmount:Number((m=(w=e==null?void 0:e.ticketAmount)!=null?w:e==null?void 0:e.ticket_amount)!=null?m:0)||0,note:String((k=e==null?void 0:e.note)!=null?k:"").trim(),dataSource:String((Rt=(x=e==null?void 0:e.dataSource)!=null?x:e==null?void 0:e.data_source)!=null?Rt:"").trim()}}):[]}function dd(t){const e=new Map;for(const r of j)r.eventId&&e.set(r.eventId,r);for(const r of t)!r.eventId||e.set(r.eventId,r);j=Array.from(e.values()).sort((r,n)=>(Number(n.time)||0)-(Number(r.time)||0))}function gi(){bs=new Date().toISOString()}async function ld(t={}){!(t!=null&&t.ok)||(j=fn(t.entries),gi(),E==="more"&&d(),f("banking-data-updated",`Banking data updated. Loaded ${j.length} deposit record${j.length===1?"":"s"}.`,{ttlMs:h}))}async function it(t={}){const e=Boolean(t.silent);if(!(l!=null&&l.connected)){e||f("banking-data-error","GuildSync websocket is not connected.",{ttlMs:h});return}Te=!0,d();try{const r=await A("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");j=fn(r.entries),gi(),e||f("banking-data",`Loaded ${j.length} banking deposit record${j.length===1?"":"s"}.`,{ttlMs:h})}catch(r){e||f("banking-data-error",S(r),{ttlMs:h})}finally{Te=!1,d()}}async function yi(t={}){var e,r;if(!!R()){if(!(l!=null&&l.connected)){f("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:h});return}Te=!0,d();try{const n=await Uo(t);if(!(n!=null&&n.ok)){f("banking-data-pending",(n==null?void 0:n.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:h});return}const s=fn((e=n==null?void 0:n.data)==null?void 0:e.entries);dd(s);const i=new Date().toISOString(),o={local_upload_id:bi(),authenticated_username:Ce(),authenticated_discord_user_id:((r=g==null?void 0:g.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:i,data:n.data||{}};try{await ki(o)}catch(c){throw ud(o),c}await it({silent:!0})}catch(n){f("banking-data-error",S(n),{ttlMs:h})}finally{Te=!1,d()}}}function bi(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function hn(){try{const t=window.localStorage.getItem(us),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function vi(t){window.localStorage.setItem(us,JSON.stringify(Array.isArray(t)?t:[]))}function ud(t){const e=String((t==null?void 0:t.local_upload_id)||bi()),r=hn().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),vi(r),f("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:h})}function fd(t){const e=hn().filter(r=>(r==null?void 0:r.local_upload_id)!==t);vi(e)}async function hd(){if(kr||!(l!=null&&l.connected)||!R())return;const t=hn();if(t.length!==0){kr=!0;try{for(const e of t){if(!(l!=null&&l.connected)||!R())return;await ki(e),fd(e.local_upload_id)}}catch(e){f("banking-data-pending-error",`Pending banking upload retry failed: ${S(e)}`,{ttlMs:h})}finally{kr=!1}}}async function ki(t){if(!(l!=null&&l.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await A("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const r=await Vo(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return f("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:h}),e}function Si(){if(E!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>pd());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{Ve=!0,te="",d(),T("discordHistorySearchInput")});const r=document.querySelector("#discordMemberSearch");r&&r.addEventListener("input",o=>{Wt=o.target.value||"",Cr=o.target.selectionStart,Br=o.target.selectionEnd,d({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{kd(o.dataset.discordSortColumn||"username")})});const n=document.querySelector("#discordRoleFilter");n&&n.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(Ie.add(c),d())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRoleFilter||"";Ie.delete(c),d()})});const s=document.querySelector("#discordLinkStatusFilter");s&&s.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(qe.add(c),d())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeDiscordLinkStatusFilter||"";qe.delete(c),d()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>Ys(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const i=document.querySelector("#clearDiscordFiltersButton");i&&i.addEventListener("click",()=>{Wt="",Ie.clear(),qe.clear(),d()})}async function pd(){var t,e;if(!(l!=null&&l.connected)){f("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:h});return}Ht=!0,d(),f("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const r=await A("guildsync:request-discord-data-refresh",{requested_by:((t=g==null?void 0:g.user)==null?void 0:t.display_name)||((e=g==null?void 0:g.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to request Discord data refresh.");f("discord-refresh-requested",r.message||"Discord data refresh completed.",{ttlMs:h}),await pn({silent:!0})}catch(r){f("discord-refresh-error",S(r),{ttlMs:h})}finally{Ht=!1,d()}}async function md(){if(!(l!=null&&l.connected))return;const t=await A("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(nr=t.value||null)}async function gd(t={}){if(!!(t!=null&&t.ok)){C=mn(t.members),t.last_refresh&&(nr=t.last_refresh);try{await md()}catch{}E==="discord-members"&&d(),f("discord-data-updated",`Discord data updated. Loaded ${C.length} member record${C.length===1?"":"s"}.`,{ttlMs:h})}}async function pn(t={}){const e=Boolean(t.silent);if(!(l!=null&&l.connected)){f("discord-data-error","GuildSync websocket is not connected.",{ttlMs:h});return}gt=!0,d();try{const[r,n]=await Promise.all([A("guildsync:request-discord-data-date",{}),A("guildsync:request-discord-member-dataJSON",{})]);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord refresh date.");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord member data.");nr=r.value||null,C=mn(n.members),e||f("discord-data",`Loaded ${C.length} Discord member record${C.length===1?"":"s"}.`,{ttlMs:h})}catch(r){f("discord-data-error",S(r),{ttlMs:h})}finally{gt=!1,d()}}function A(t,e={},r=3e4){return new Promise((n,s)=>{if(!(l!=null&&l.connected)){s(new Error("GuildSync websocket is not connected."));return}let i=!1;const o=window.setTimeout(()=>{i||(i=!0,s(new Error(`${t} timed out.`)))},r);l.emit(t,e,c=>{i||(i=!0,window.clearTimeout(o),n(c))})})}function mn(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(yd).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,r)=>St(e).localeCompare(St(r),void 0,{sensitivity:"base"})):[]}function yd(t){var s,i;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),r=String(t.role_name||t.name||"Unnamed Role").trim(),n=(i=(s=t.role_color)!=null?s:t.color)!=null?i:null;return{role_id:e,role_name:r||"Unnamed Role",role_color:n}}function bd(){const t=Wt.trim().toLowerCase(),e=Array.from(Ie),r=C.filter(n=>{if(t&&![n.username,n.global_name,n.server_nickname,n.discord_id,...n.roles.map(i=>i.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const s=new Set(n.roles.map(i=>i.role_name));if(!e.every(i=>s.has(i)))return!1}return!!Rs(qe,La(n))});return vd(r)}function vd(t){const e=Se==="desc"?-1:1;return[...t].sort((r,n)=>{const s=Un(r,yt),i=Un(n,yt),o=s.localeCompare(i,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:St(r).localeCompare(St(n),void 0,{sensitivity:"base",numeric:!0})})}function Un(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(r=>r.role_name||"").filter(Boolean).sort((r,n)=>r.localeCompare(n,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function kd(t){const r=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";yt===r?Se=Se==="asc"?"desc":"asc":(yt=r,Se="asc"),d()}function Ct(t,e){const r=yt===t,n=Se==="asc"?"ascending":"descending",s=r?Se==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${r?n:"none"}">
      <button
        class="discord-sort-header${r?" active":""}"
        type="button"
        data-discord-sort-column="${u(t)}"
        title="Sort ${u(e)} ${r&&Se==="asc"?"descending":"ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function Sd(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(Cr)?Cr:t.value.length,r=Number.isInteger(Br)?Br:e;t.setSelectionRange(e,r)}}function wd(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(xr)?xr:t.value.length,r=Number.isInteger(Or)?Or:e;t.setSelectionRange(e,r)}}function _d(){const t=new Set;for(const e of C)for(const r of e.roles)r.role_name&&t.add(r.role_name);return Array.from(t).sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function Ad(t){const e=Dd(t),r=St(t),n=t.roles||[];return`
    <tr data-discord-user-id="${u(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${u(e)}" alt="${u(r)}" />`:`<span>${a($i(r))}</span>`}
          </div>
          <span>${a(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${a(t.global_name||"")}</td>
      <td>${a(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${n.length>0?n.map(s=>Ed(s)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${zs({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function Ld(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${a(gt?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function Ed(t){const e=ur(t.role_color),r=bn(e),n=yn(e,r);return`
    <span
      class="discord-role-badge"
      title="${u(t.role_name)}"
      style="${n}"
    >${a(t.role_name)}</span>
  `}function Rd(t){const e=gn(t),r=ur(e==null?void 0:e.role_color),n=bn(r),s=yn(r,n);return`
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
  `}function gn(t){for(const e of C){const r=e.roles.find(n=>n.role_name===t);if(r)return r}return null}function ur(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function yn(t,e){return[`--role-fill-top: ${Vn(t,"#ffffff",.16)}`,`--role-fill-bottom: ${Vn(t,"#000000",.1)}`,`--role-fill-glow: ${Hn(t,.28)}`,`--role-fill-edge: ${Hn(t,.46)}`,`color: ${e}`].join("; ")}function Vn(t,e,r){const n=Bt(t)||Bt("#64748b"),s=Bt(e)||Bt("#ffffff"),i=Math.max(0,Math.min(1,Number(r)||0)),o=Math.round(n.red+(s.red-n.red)*i),c=Math.round(n.green+(s.green-n.green)*i),p=Math.round(n.blue+(s.blue-n.blue)*i);return`#${Er(o)}${Er(c)}${Er(p)}`}function Bt(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function Er(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function Hn(t,e){const r=String(t||"#64748b").replace("#",""),n=/^[0-9a-f]{6}$/i.test(r)?r:"64748b",s=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),o=parseInt(n.slice(4,6),16);return`rgba(${s}, ${i}, ${o}, ${e})`}function bn(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const r=parseInt(e.slice(0,2),16),n=parseInt(e.slice(2,4),16),s=parseInt(e.slice(4,6),16);return(r*299+n*587+s*114)/1e3>150?"#0F172A":"#F8FAFC"}function Dd(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!r)return"";const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function St(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function wi(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Ut(){const t=document.querySelector("#discordArea");if(!!t){if(Et(!1),R()){const e=g.user||{},r=Ce(),n=Vd(e),s=$i(r);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${n?`<img src="${u(n)}" alt="${u(r)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${a(s)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const i=document.querySelector("#discordAvatarButton");i.addEventListener("contextmenu",o=>{o.preventDefault(),Wn()}),i.addEventListener("click",()=>{Wn()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",Td)}}function Wn(){if(Zr){Et();return}Md()}function $d(){var n,s,i;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=Ce(),r=((n=g.user)==null?void 0:n.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${a(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${a(Hd(r))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${a(rr)}</span>
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(s=document.querySelector("#discordLogoutButton"))==null||s.addEventListener("click",Nd),(i=document.querySelector("#associateTicketReportButton"))==null||i.addEventListener("click",()=>{Et(!1),Ns()})}function Md(){const t=document.querySelector("#discordProfileMenu");!t||($d(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),Zr=!0,setTimeout(()=>{window.addEventListener("click",_i),window.addEventListener("keydown",Ai)},0))}function Et(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),Zr=!1,t&&(window.removeEventListener("click",_i),window.removeEventListener("keydown",Ai))}function _i(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&Et()}function Ai(t){t.key==="Escape"&&Et()}async function Td(){try{f("auth","Opening Discord login...",{ttlMs:h});const t=await Io();t!=null&&t.status_message&&f("auth",t.status_message,{ttlMs:h}),pe()}catch(t){f("auth-error",S(t),{ttlMs:h}),pe()}}async function Nd(){try{g=await Po(),f("auth",g.status_message||"Logged out.",{ttlMs:h}),vs(),pt(),await mt()}catch(t){f("auth-error",S(t),{ttlMs:h}),pe()}}function pt(){const t=g.socket_url||"https://guildsync.perdues.me";Cd(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};g!=null&&g.token&&(e.auth={token:g.token}),l=qt(t,e),l.on("connect",()=>{pe(),Li(),E==="discord-members"&&pn({silent:!0}),E==="eso-members"&&xe({silent:!0}),E==="more"&&it({silent:!0}),hd(),Qc(),Bd()}),l.on("connect_error",()=>{pe(),Zt()}),l.on("disconnect",()=>{pe(),Zt()}),l.on("guildsync:version-status",r=>{xd(r)}),l.on("guildsync:discord-member-data-updated",r=>{gd(r)}),l.on("guildsync:banking-data-updated",r=>{ld(r)}),l.on("guildsync:roster-data-updated",r=>{jc(r)}),l.on("guildsync:member-links-updated",(r={})=>{Array.isArray(r.links)&&(L=r.links,(E==="discord-members"||E==="eso-members"||E==="settings"||be)&&d())}),l.on("guildsync:discord-refresh-status",(r={})=>{const n=String(r.message||"").trim();n&&f("discord-refresh-status",n,{ttlMs:h})})}function Cd(t=!0){Zt(),l&&(l.disconnect(),l=null),t&&pe()}function Li(){!(l!=null&&l.connected)||l.emit("guildsync:client-version",{version:rr})}function Bd(){Zt(),Pt=window.setInterval(()=>{Li()},zo)}function Zt(){Pt&&(window.clearInterval(Pt),Pt=null)}function xd(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown";f("version",`GuildSync is out of date. Current version: ${rr}. Latest version: ${e}.`);return}fr("version")}}function f(t,e,r={}){const n=String(t||"").trim(),s=String(e||"").trim();if(!(!n||!s)){if(me.set(n,s),M===n){const i=document.querySelector("#statusMessageTrack");i&&(i.textContent=s)}if(ke.has(n)&&(window.clearTimeout(ke.get(n)),ke.delete(n)),r.ttlMs&&Number(r.ttlMs)>0){const i=window.setTimeout(()=>{fr(n)},Number(r.ttlMs));ke.set(n,i)}Ye()}}function fr(t){const e=String(t||"").trim();if(!!e){if(me.delete(e),ke.has(e)&&(window.clearTimeout(ke.get(e)),ke.delete(e)),M===e){mr(()=>{M="",Ye()});return}Ye()}}function Ye(){const t=hr();if(t.length===0){De?mr(wt):wt();return}!De&&!$e&&pr(t[0])}function hr(){return Array.from(me.keys())}function Ei(){const t=hr();if(t.length===0)return"";if(!M)return t[0];const e=t.indexOf(M);return e<0?t[0]:t[(e+1)%t.length]}function pr(t){const e=document.querySelector("#statusMessageTrack");if(!e||!me.has(t)){wt();return}gr();const r=me.get(t);M=t,De=!0,$e=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=r,e.style.setProperty("--message-fade-duration",`${ms}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",$e=!1,Od()},{once:!0})})}function Od(){const t=hr();if(!M||!me.has(M)){Ye();return}if(t.length<=1){zn(!1);return}zn(!0)}function zn(t){const e=document.querySelector("#statusMessageViewport"),r=document.querySelector("#statusMessageTrack");if(!e||!r)return;const n=Math.max(0,r.scrollWidth-e.clientWidth);if(n<=0){t&&_t(()=>{mr(()=>{const s=Ei();M="",s?pr(s):wt()})},ps);return}_t(()=>{Ri(n,t)},gs)}function Ri(t,e){const r=document.querySelector("#statusMessageTrack");if(!r||!M||!me.has(M))return;const n=Math.max(4,Math.ceil(t/Ko));r.style.setProperty("--long-scroll-distance",`${t}px`),r.style.setProperty("--long-scroll-duration",`${n}s`),r.classList.add("long-scroll"),r.addEventListener("animationend",()=>{if(r.classList.remove("long-scroll"),r.style.transform=`translateX(-${t}px) translateY(-50%)`,e){_t(()=>{mr(()=>{const s=Ei();M="",s?pr(s):wt()})},ps);return}_t(()=>{Id()},Yo)},{once:!0})}function Id(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!M||!me.has(M))return;if(hr().length!==1){Ye();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const n=Math.max(0,e.scrollWidth-t.clientWidth);n<=0||_t(()=>{Ri(n,!1)},gs)}function mr(t){const e=document.querySelector("#statusMessageTrack");if(gr(),!e||!De){typeof t=="function"&&t();return}$e=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${ms}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",De=!1,$e=!1,typeof t=="function"&&t()},{once:!0})}function wt(){const t=document.querySelector("#statusMessageTrack");gr(),M="",De=!1,$e=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function _t(t,e){const r=window.setTimeout(()=>{ft=ft.filter(n=>n!==r),t()},e);ft.push(r)}function gr(){for(const t of ft)window.clearTimeout(t);ft=[]}function Di(){if(!De||$e||!M)return;const t=M;gr(),pr(t)}function pe(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(l!=null&&l.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!R()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${Ce()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${Ce()}`)}}async function mt(t={}){try{if(R()){const e=await Fo();Ln=e,!t.silent&&(e==null?void 0:e.message)&&f(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:h});return}Ln=await Go(),fr("file-watcher")}catch(e){f("file-watcher-error",S(e),{ttlMs:h})}}function qd(t={}){if(!R())return;const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",r=String(t.label||"").trim(),n=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=r?`${r} saved variables (${n})`:n;f(`saved-vars-file-updated-${e}`,`${s} has been updated.`,{ttlMs:h}),e.toLowerCase()==="banking"&&Pd(t),e.toLowerCase()==="roster"&&Fd(t)}async function Pd(t={}){await yi(t)}async function Fd(t={}){await Yc(t)}function Gd(t){!R()||f("file-watcher-error",S(t),{ttlMs:h})}function Ud(){at("guildsync-savedvars-file-modified",qd),at("guildsync-file-watcher-error",Gd),at("guildsync-login-complete",async t=>{g=t||{logged_in:!1,allowed:!1},Ut(),pt(),await mt(),f("auth",g.status_message||`Logged in and authorized as ${Ce()}.`,{ttlMs:h})}),at("guildsync-login-denied",async t=>{g={logged_in:!1,allowed:!1,status_message:""},Ut(),await mt(),f("auth",t||"Access denied.",{ttlMs:h}),pt()}),at("guildsync-login-failed",async t=>{g={logged_in:!1,allowed:!1,status_message:""},Ut(),await mt(),f("auth",t||"Login failed.",{ttlMs:h}),pt()})}function R(){return Boolean((g==null?void 0:g.logged_in)&&(g==null?void 0:g.allowed)&&(g==null?void 0:g.token))}function Ce(){var t,e;return((t=g.user)==null?void 0:t.display_name)||((e=g.user)==null?void 0:e.username)||"Discord User"}function Vd(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),r=String(t.discord_user_id||"").trim();if(!e||!r)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=128`}function $i(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function Hd(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Wd(){ct&&(ct.disconnect(),ct=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),r=Math.round(t.getBoundingClientRect().height);ct=new ResizeObserver(n=>{const s=n[0];if(!s)return;const i=Math.round(s.contentRect.width),o=Math.round(s.contentRect.height);i===e&&o===r||(e=i,r=o,Mi(),Di())}),ct.observe(t)}function Mi(){clearTimeout(_n),_n=setTimeout(async()=>{try{await ds()}catch{}},500)}function S(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function a(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function u(t){return a(t)}Ud();qa();ra();
