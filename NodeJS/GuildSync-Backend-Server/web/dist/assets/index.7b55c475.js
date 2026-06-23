(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const va="/assets/splash.ea386b6a.png",Sa="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",wa="/assets/GuildSync-Graphic.9169020d.png",te=Object.create(null);te.open="0";te.close="1";te.ping="2";te.pong="3";te.message="4";te.upgrade="5";te.noop="6";const mr=Object.create(null);Object.keys(te).forEach(t=>{mr[te[t]]=t});const yn={type:"error",data:"parser error"},ys=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",bs=typeof ArrayBuffer=="function",ks=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Fn=({type:t,data:e},r,n)=>ys&&e instanceof Blob?r?n(e):Ui(e,n):bs&&(e instanceof ArrayBuffer||ks(e))?r?n(e):Ui(new Blob([e]),n):n(te[t]+(e||"")),Ui=(t,e)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];e("b"+(n||""))},r.readAsDataURL(t)};function Vi(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let nn;function _a(t,e){if(ys&&t.data instanceof Blob)return t.data.arrayBuffer().then(Vi).then(e);if(bs&&(t.data instanceof ArrayBuffer||ks(t.data)))return e(Vi(t.data));Fn(t,!1,r=>{nn||(nn=new TextEncoder),e(nn.encode(r))})}const Hi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Pt=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<Hi.length;t++)Pt[Hi.charCodeAt(t)]=t;const Aa=t=>{let e=t.length*.75,r=t.length,n,i=0,s,o,c,f;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const g=new ArrayBuffer(e),S=new Uint8Array(g);for(n=0;n<r;n+=4)s=Pt[t.charCodeAt(n)],o=Pt[t.charCodeAt(n+1)],c=Pt[t.charCodeAt(n+2)],f=Pt[t.charCodeAt(n+3)],S[i++]=s<<2|o>>4,S[i++]=(o&15)<<4|c>>2,S[i++]=(c&3)<<6|f&63;return g},La=typeof ArrayBuffer=="function",Pn=(t,e)=>{if(typeof t!="string")return{type:"message",data:vs(t,e)};const r=t.charAt(0);return r==="b"?{type:"message",data:Ea(t.substring(1),e)}:mr[r]?t.length>1?{type:mr[r],data:t.substring(1)}:{type:mr[r]}:yn},Ea=(t,e)=>{if(La){const r=Aa(t);return vs(r,e)}else return{base64:!0,data:t}},vs=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},Ss=String.fromCharCode(30),Ra=(t,e)=>{const r=t.length,n=new Array(r);let i=0;t.forEach((s,o)=>{Fn(s,!1,c=>{n[o]=c,++i===r&&e(n.join(Ss))})})},Da=(t,e)=>{const r=t.split(Ss),n=[];for(let i=0;i<r.length;i++){const s=Pn(r[i],e);if(n.push(s),s.type==="error")break}return n};function $a(){return new TransformStream({transform(t,e){_a(t,r=>{const n=r.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,n)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(n))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(r)})}})}let sn;function lr(t){return t.reduce((e,r)=>e+r.length,0)}function dr(t,e){if(t[0].length===e)return t.shift();const r=new Uint8Array(e);let n=0;for(let i=0;i<e;i++)r[i]=t[0][n++],n===t[0].length&&(t.shift(),n=0);return t.length&&n<t[0].length&&(t[0]=t[0].slice(n)),r}function Ma(t,e){sn||(sn=new TextDecoder);const r=[];let n=0,i=-1,s=!1;return new TransformStream({transform(o,c){for(r.push(o);;){if(n===0){if(lr(r)<1)break;const f=dr(r,1);s=(f[0]&128)===128,i=f[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(lr(r)<2)break;const f=dr(r,2);i=new DataView(f.buffer,f.byteOffset,f.length).getUint16(0),n=3}else if(n===2){if(lr(r)<8)break;const f=dr(r,8),g=new DataView(f.buffer,f.byteOffset,f.length),S=g.getUint32(0);if(S>Math.pow(2,53-32)-1){c.enqueue(yn);break}i=S*Math.pow(2,32)+g.getUint32(4),n=3}else{if(lr(r)<i)break;const f=dr(r,i);c.enqueue(Pn(s?f:sn.decode(f),e)),n=0}if(i===0||i>t){c.enqueue(yn);break}}}})}const ws=4;function D(t){if(t)return Na(t)}function Na(t){for(var e in D.prototype)t[e]=D.prototype[e];return t}D.prototype.on=D.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};D.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this};D.prototype.off=D.prototype.removeListener=D.prototype.removeAllListeners=D.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var n,i=0;i<r.length;i++)if(n=r[i],n===e||n.fn===e){r.splice(i,1);break}return r.length===0&&delete this._callbacks["$"+t],this};D.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),r=this._callbacks["$"+t],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,i=r.length;n<i;++n)r[n].apply(this,e)}return this};D.prototype.emitReserved=D.prototype.emit;D.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};D.prototype.hasListeners=function(t){return!!this.listeners(t).length};const qr=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,r)=>r(e,0))(),U=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),Ta="arraybuffer";function _s(t,...e){return e.reduce((r,n)=>(t.hasOwnProperty(n)&&(r[n]=t[n]),r),{})}const Ba=U.setTimeout,Ca=U.clearTimeout;function Fr(t,e){e.useNativeTimers?(t.setTimeoutFn=Ba.bind(U),t.clearTimeoutFn=Ca.bind(U)):(t.setTimeoutFn=U.setTimeout.bind(U),t.clearTimeoutFn=U.clearTimeout.bind(U))}const Ia=1.33;function Oa(t){return typeof t=="string"?xa(t):Math.ceil((t.byteLength||t.size)*Ia)}function xa(t){let e=0,r=0;for(let n=0,i=t.length;n<i;n++)e=t.charCodeAt(n),e<128?r+=1:e<2048?r+=2:e<55296||e>=57344?r+=3:(n++,r+=4);return r}function As(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function qa(t){let e="";for(let r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e}function Fa(t){let e={},r=t.split("&");for(let n=0,i=r.length;n<i;n++){let s=r[n].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class Pa extends Error{constructor(e,r,n){super(e),this.description=r,this.context=n,this.type="TransportError"}}class Gn extends D{constructor(e){super(),this.writable=!1,Fr(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,r,n){return super.emitReserved("error",new Pa(e,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const r=Pn(e,this.socket.binaryType);this.onPacket(r)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,r={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const r=qa(e);return r.length?"?"+r:""}}class Ga extends Gn{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const r=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};Da(e,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Ra(e,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=As()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(e,r)}}let Ls=!1;try{Ls=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Ua=Ls;function Va(){}class Ha extends Ga{constructor(e){if(super(e),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,r){const n=this.request({method:"POST",data:e});n.on("success",r),n.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=e}}class Z extends D{constructor(e,r,n){super(),this.createRequest=e,Fr(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;const r=_s(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=Z.requestsCount++,Z.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Va,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Z.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Z.requestsCount=0;Z.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Wi);else if(typeof addEventListener=="function"){const t="onpagehide"in U?"pagehide":"unload";addEventListener(t,Wi,!1)}}function Wi(){for(let t in Z.requests)Z.requests.hasOwnProperty(t)&&Z.requests[t].abort()}const Wa=function(){const t=Es({xdomain:!1});return t&&t.responseType!==null}();class ja extends Ha{constructor(e){super(e);const r=e&&e.forceBase64;this.supportsBinary=Wa&&!r}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Z(Es,this.uri(),e)}}function Es(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Ua))return new XMLHttpRequest}catch{}if(!e)try{return new U[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Rs=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class za extends Gn{get name(){return"websocket"}doOpen(){const e=this.uri(),r=this.opts.protocols,n=Rs?{}:_s(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,r,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],i=r===e.length-1;Fn(n,this.supportsBinary,s=>{try{this.doWrite(n,s)}catch{}i&&qr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=As()),this.supportsBinary||(r.b64=1),this.createUri(e,r)}}const on=U.WebSocket||U.MozWebSocket;class Ya extends za{createSocket(e,r,n){return Rs?new on(e,r,n):r?new on(e,r):new on(e)}doWrite(e,r){this.ws.send(r)}}class Ka extends Gn{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const r=Ma(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(r).getReader(),i=$a();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const s=()=>{n.read().then(({done:c,value:f})=>{c||(this.onPacket(f),s())}).catch(c=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],i=r===e.length-1;this._writer.write(n).then(()=>{i&&qr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Ja={websocket:Ya,webtransport:Ka,polling:ja},Qa=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Xa=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function bn(t){if(t.length>8e3)throw"URI too long";const e=t,r=t.indexOf("["),n=t.indexOf("]");r!=-1&&n!=-1&&(t=t.substring(0,r)+t.substring(r,n).replace(/:/g,";")+t.substring(n,t.length));let i=Qa.exec(t||""),s={},o=14;for(;o--;)s[Xa[o]]=i[o]||"";return r!=-1&&n!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=Za(s,s.path),s.queryKey=ec(s,s.query),s}function Za(t,e){const r=/\/{2,9}/g,n=e.replace(r,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function ec(t,e){const r={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,s){i&&(r[i]=s)}),r}const kn=typeof addEventListener=="function"&&typeof removeEventListener=="function",gr=[];kn&&addEventListener("offline",()=>{gr.forEach(t=>t())},!1);class Se extends D{constructor(e,r){if(super(),this.binaryType=Ta,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(r=e,e=null),e){const n=bn(e);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=bn(r.host).host);Fr(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Fa(this.opts.query)),kn&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},gr.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const r=Object.assign({},this.opts.query);r.EIO=ws,r.transport=e,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Se.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(e);r.open(),this.setTransport(r)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",Se.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=e.data,this._onError(r);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(r+=Oa(i)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,qr(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,r,n){return this._sendPacket("message",e,r,n),this}send(e,r,n){return this._sendPacket("message",e,r,n),this}_sendPacket(e,r,n,i){if(typeof r=="function"&&(i=r,r=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const s={type:e,data:r,options:n};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),e()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(Se.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),kn&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=gr.indexOf(this._offlineEventListener);n!==-1&&gr.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,r),this.writeBuffer=[],this._prevBufferLen=0}}}Se.protocol=ws;class tc extends Se{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let r=this.createTransport(e),n=!1;Se.priorWebsocketSuccess=!1;const i=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",y=>{if(!n)if(y.type==="pong"&&y.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;Se.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(S(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const b=new Error("probe error");b.transport=r.name,this.emitReserved("upgradeError",b)}}))};function s(){n||(n=!0,S(),r.close(),r=null)}const o=y=>{const b=new Error("probe error: "+y);b.transport=r.name,s(),this.emitReserved("upgradeError",b)};function c(){o("transport closed")}function f(){o("socket closed")}function g(y){r&&y.name!==r.name&&s()}const S=()=>{r.removeListener("open",i),r.removeListener("error",o),r.removeListener("close",c),this.off("close",f),this.off("upgrading",g)};r.once("open",i),r.once("error",o),r.once("close",c),this.once("close",f),this.once("upgrading",g),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const r=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&r.push(e[n]);return r}}class rc extends tc{constructor(e,r={}){const n=typeof e=="object"?e:r;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(i=>Ja[i]).filter(i=>!!i)),super(e,n)}}function nc(t,e="",r){let n=t;r=r||typeof location<"u"&&location,t==null&&(t=r.protocol+"//"+r.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=r.protocol+t:t=r.host+t),/^(https?|wss?):\/\//.test(t)||(typeof r<"u"?t=r.protocol+"//"+t:t="https://"+t),n=bn(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const s=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port+e,n.href=n.protocol+"://"+s+(r&&r.port===n.port?"":":"+n.port),n}const ic=typeof ArrayBuffer=="function",sc=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,Ds=Object.prototype.toString,oc=typeof Blob=="function"||typeof Blob<"u"&&Ds.call(Blob)==="[object BlobConstructor]",ac=typeof File=="function"||typeof File<"u"&&Ds.call(File)==="[object FileConstructor]";function Un(t){return ic&&(t instanceof ArrayBuffer||sc(t))||oc&&t instanceof Blob||ac&&t instanceof File}function yr(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let r=0,n=t.length;r<n;r++)if(yr(t[r]))return!0;return!1}if(Un(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return yr(t.toJSON(),!0);for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&yr(t[r]))return!0;return!1}function cc(t){const e=[],r=t.data,n=t;return n.data=vn(r,e),n.attachments=e.length,{packet:n,buffers:e}}function vn(t,e){if(!t)return t;if(Un(t)){const r={_placeholder:!0,num:e.length};return e.push(t),r}else if(Array.isArray(t)){const r=new Array(t.length);for(let n=0;n<t.length;n++)r[n]=vn(t[n],e);return r}else if(typeof t=="object"&&!(t instanceof Date)){const r={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=vn(t[n],e));return r}return t}function lc(t,e){return t.data=Sn(t.data,e),delete t.attachments,t}function Sn(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let r=0;r<t.length;r++)t[r]=Sn(t[r],e);else if(typeof t=="object")for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(t[r]=Sn(t[r],e));return t}const $s=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],dc=5;var v;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(v||(v={}));class uc{constructor(e){this.replacer=e}encode(e){return(e.type===v.EVENT||e.type===v.ACK)&&yr(e)?this.encodeAsBinary({type:e.type===v.EVENT?v.BINARY_EVENT:v.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let r=""+e.type;return(e.type===v.BINARY_EVENT||e.type===v.BINARY_ACK)&&(r+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(r+=e.nsp+","),e.id!=null&&(r+=e.id),e.data!=null&&(r+=JSON.stringify(e.data,this.replacer)),r}encodeAsBinary(e){const r=cc(e),n=this.encodeAsString(r.packet),i=r.buffers;return i.unshift(n),i}}class Vn extends D{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let r;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(e);const n=r.type===v.BINARY_EVENT;n||r.type===v.BINARY_ACK?(r.type=n?v.EVENT:v.ACK,this.reconstructor=new fc(r),r.attachments===0&&super.emitReserved("decoded",r)):super.emitReserved("decoded",r)}else if(Un(e)||e.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(e),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let r=0;const n={type:Number(e.charAt(0))};if(v[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===v.BINARY_EVENT||n.type===v.BINARY_ACK){const s=r+1;for(;e.charAt(++r)!=="-"&&r!=e.length;);const o=e.substring(s,r);if(o!=Number(o)||e.charAt(r)!=="-")throw new Error("Illegal attachments");const c=Number(o);if(!Ms(c)||c<0)throw new Error("Illegal attachments");if(c>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=c}if(e.charAt(r+1)==="/"){const s=r+1;for(;++r&&!(e.charAt(r)===","||r===e.length););n.nsp=e.substring(s,r)}else n.nsp="/";const i=e.charAt(r+1);if(i!==""&&Number(i)==i){const s=r+1;for(;++r;){const o=e.charAt(r);if(o==null||Number(o)!=o){--r;break}if(r===e.length)break}n.id=Number(e.substring(s,r+1))}if(e.charAt(++r)){const s=this.tryParse(e.substr(r));if(Vn.isPayloadValid(n.type,s))n.data=s;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,r){switch(e){case v.CONNECT:return Ar(r);case v.DISCONNECT:return r===void 0;case v.CONNECT_ERROR:return typeof r=="string"||Ar(r);case v.EVENT:case v.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&$s.indexOf(r[0])===-1);case v.ACK:case v.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class fc{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const r=lc(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function hc(t){return typeof t=="string"}const Ms=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function pc(t){return t===void 0||Ms(t)}function Ar(t){return Object.prototype.toString.call(t)==="[object Object]"}function mc(t,e){switch(t){case v.CONNECT:return e===void 0||Ar(e);case v.DISCONNECT:return e===void 0;case v.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&$s.indexOf(e[0])===-1);case v.ACK:return Array.isArray(e);case v.CONNECT_ERROR:return typeof e=="string"||Ar(e);default:return!1}}function gc(t){return hc(t.nsp)&&pc(t.id)&&mc(t.type,t.data)}const yc=Object.freeze(Object.defineProperty({__proto__:null,protocol:dc,get PacketType(){return v},Encoder:uc,Decoder:Vn,isPacketValid:gc},Symbol.toStringTag,{value:"Module"}));function j(t,e,r){return t.on(e,r),function(){t.off(e,r)}}const bc=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Ns extends D{constructor(e,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[j(e,"open",this.onopen.bind(this)),j(e,"packet",this.onpacket.bind(this)),j(e,"error",this.onerror.bind(this)),j(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...r){var n,i,s;if(bc.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(r.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const o={type:v.EVENT,data:r};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const S=this.ids++,y=r.pop();this._registerAckCallback(S,y),o.id=S}const c=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,f=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!c||(f?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,r){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[e]=r;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let c=0;c<this.sendBuffer.length;c++)this.sendBuffer[c].id===e&&this.sendBuffer.splice(c,1);r.call(this,new Error("operation has timed out"))},i),o=(...c)=>{this.io.clearTimeoutFn(s),r.apply(this,c)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...r){return new Promise((n,i)=>{const s=(o,c)=>o?i(o):n(c);s.withError=!0,r.push(s),this.emit(e,...r)})}_addToQueue(e){let r;typeof e[e.length-1]=="function"&&(r=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(i)):(this._queue.shift(),r&&r(null,...s)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!e||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:v.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){const n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case v.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case v.EVENT:case v.BINARY_EVENT:this.onevent(e);break;case v.ACK:case v.BINARY_ACK:this.onack(e);break;case v.DISCONNECT:this.ondisconnect();break;case v.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const r=e.data||[];e.id!=null&&r.push(this.ack(e.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const r=this;let n=!1;return function(...i){n||(n=!0,r.packet({type:v.ACK,id:e,data:i}))}}onack(e){const r=this.acks[e.id];typeof r=="function"&&(delete this.acks[e.id],r.withError&&e.data.unshift(null),r.apply(this,e.data))}onconnect(e,r){this.id=e,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:v.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,e.data)}}}function vt(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}vt.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-r:t+r}return Math.min(t,this.max)|0};vt.prototype.reset=function(){this.attempts=0};vt.prototype.setMin=function(t){this.ms=t};vt.prototype.setMax=function(t){this.max=t};vt.prototype.setJitter=function(t){this.jitter=t};class wn extends D{constructor(e,r){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(r=e,e=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,Fr(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new vt({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=e;const i=r.parser||yc;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var r;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(r=this.backoff)===null||r===void 0||r.setMin(e),this)}randomizationFactor(e){var r;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(r=this.backoff)===null||r===void 0||r.setJitter(e),this)}reconnectionDelayMax(e){var r;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(r=this.backoff)===null||r===void 0||r.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new rc(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=j(r,"open",function(){n.onopen(),e&&e()}),s=c=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",c),e?e(c):this.maybeReconnectOnOpen()},o=j(r,"error",s);if(this._timeout!==!1){const c=this._timeout,f=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),r.close()},c);this.opts.autoUnref&&f.unref(),this.subs.push(()=>{this.clearTimeoutFn(f)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(j(e,"ping",this.onping.bind(this)),j(e,"data",this.ondata.bind(this)),j(e,"error",this.onerror.bind(this)),j(e,"close",this.onclose.bind(this)),j(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(r){this.onclose("parse error",r)}}ondecoded(e){qr(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,r){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new Ns(this,e,r),this.nsps[e]=n),n}_destroy(e){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(e){const r=this.encoder.encode(e);for(let n=0;n<r.length;n++)this.engine.write(r[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Bt={};function br(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const r=nc(t,e.path||"/socket.io"),n=r.source,i=r.id,s=r.path,o=Bt[i]&&s in Bt[i].nsps,c=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let f;return c?f=new wn(n,e):(Bt[i]||(Bt[i]=new wn(n,e)),f=Bt[i]),r.query&&!e.query&&(e.query=r.queryKey),f.socket(r.path,e)}Object.assign(br,{Manager:wn,Socket:Ns,io:br,connect:br});window.GUILDSYNC_WEB=!0;const Hn="guildsync-web-session";function kc(){try{return JSON.parse(localStorage.getItem(Hn)||"{}")||{}}catch{return{}}}function vc(t){localStorage.setItem(Hn,JSON.stringify(t||{}))}function Ts(){localStorage.removeItem(Hn)}async function Sc(){return!0}async function Bs(){return!0}async function wc(){return!0}async function _c(){return!0}async function Ac(){return!0}async function Lc(){return window.location.assign("/api/auth/discord/web-login"),!0}async function Ec(){var s,o,c,f,g,S,y,b;const e=kc().token||localStorage.getItem("guildsync-web-token")||"";if(!e)return{logged_in:!1,allowed:!1,status_message:"Not logged in."};const r=await fetch("/api/auth/session",{headers:{Authorization:`Bearer ${e}`}}),n=await r.json().catch(()=>({}));if(!r.ok||n.ok===!1)return Ts(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:n.message||"Session expired. Please log in again."};const i={logged_in:!0,allowed:!0,token:e,user:n.user,discord_user_id:((s=n.user)==null?void 0:s.discord_user_id)||"",username:((o=n.user)==null?void 0:o.username)||"",global_name:((c=n.user)==null?void 0:c.global_name)||"",display_name:((f=n.user)==null?void 0:f.display_name)||((g=n.user)==null?void 0:g.global_name)||((S=n.user)==null?void 0:S.username)||"",avatar_url:((y=n.user)==null?void 0:y.avatar_url)||"",role:((b=n.user)==null?void 0:b.role)||"user",status_message:"Logged in."};return vc(i),i}async function Rc(){return Ts(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:"Logged out."}}async function Dc(){return Pr()}async function $c(){return Pr()}async function Pr(){return{watching:!1,directory:"Web upload mode",files:[{key:"banking",fileName:"GuildSyncBanking.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"},{key:"roster",fileName:"GuildSyncRoster.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"}]}}async function Mc(){return Pr()}async function Nc(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function Tc(){return{ok:!0}}async function Bc(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function Cc(){return{ok:!0}}async function Ic(t){return t&&window.open(t,"_blank","noopener,noreferrer"),!0}async function Oc(){return{running:!1,message:"ESO process detection is only available in the desktop client."}}async function xc(){throw new Error("Deposit mail sending is disabled in the web client. Use the GuildSync desktop client for ESO mail queue writes.")}async function qc(){return{ok:!0,acknowledgements:[],records:[]}}async function Fc(){return{ok:!0}}async function Pc(){return{ok:!0}}async function Gc(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSyncApplications.lua onto the GuildSync web window.")}async function Uc(){return{ok:!0}}const ur=new Map;function Ct(t,e){return ur.has(t)||ur.set(t,new Set),ur.get(t).add(e),()=>{var r;return(r=ur.get(t))==null?void 0:r.delete(e)}}const Gr="1.1.2",fr={windows:{label:"Windows detected",shortLabel:"Windows",fileName:"GuildSync-windows-amd64.zip",href:"/downloads/GuildSync-windows-amd64.zip"},macos:{label:"macOS detected",shortLabel:"macOS",fileName:"GuildSync-macos.zip",href:"/downloads/GuildSync-macos.zip"},linux:{label:"Linux detected",shortLabel:"Linux",fileName:"GuildSync-linux-amd64.zip",href:"/downloads/GuildSync-linux-amd64.zip"}},Cs="guildsync-web-savedvars-upload-banner-dismissed",Vc=new Map([["GuildSyncBanking.lua","banking"],["GuildSyncRoster.lua","roster"],["GuildSyncApplications.lua","applications"]]),Hc=30*60*1e3,Is="guildsync-pending-banking-uploads",Os="guildsync-pending-deposit-mail",Wc=5e3,jc=30*1e3,xs="guildsync-pending-roster-uploads",qs="guildsync-pending-applications-uploads",p=60*1e3,Fs=7e3,Ps=1400,Gs=2400,zc=4e3,Yc=38,Us=document.querySelector("#app");let ji=null,It=null,zi=!1,Zt=!1,kr=null,an=!1,cn=!1,ln=!1,we=null,ie={running:!1,message:""},tt=null,rt=null,vr=!1,nt=null,dn=!1,et=0,un=!1,Me=new Map,xe=new Map,T="",ze=!1,Ye=!1,Gt=[],m={logged_in:!1,allowed:!1,status_message:""},pe={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},d=null,F=[],Ur=null,Wt=!1,Lr=!1,Er="",it=new Set,st=new Set,jt="username",Fe="asc",_n=null,An=null,W=[],Rr=null,Ne=!1,Yi=!1,Dr="",Ln=null,En=null,Pe=new Set,ot=new Set,ae="",x="",M=-1,dt=!1,zt="",V=[],Te="",_e=[],Ae=!1,le="",fn=null,z=-1,St=!1,Yt="",Le=[],$r=!1,Ge=!1,Ee="",ut="",ft=!1,me="",H=[],ht="",Ke="",Re=[],De=!1,de="",Ki=null,Oe=0;const Kc=650;let Y=-1,wt=!1,_t=[],ge=!1,Ue="",At=!1,Kt=[],ye=!1,Ve="",Lt=!1,Wn=[],be=!1,He="",Et="",ke="",at="",ve="",L=[],C=!1,I="",Qe=!1,Vr="",qe="",er="",tr="",ce=-1,Ie=!1,w=null,We=[],pt=!1,fe="",rr="",X=-1,Rt=!1,jn=null,Ut=null;const zn=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let P=[],$="biweekly",Vs=null,Be=!1,je=!1,Xe="biweekly",Dt=!1,mt=!1,se="",oe=null,N={targetType:"other",note:"",tickets:""},ue=!1,Mr=!1,G="",E={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},$t="",B=-1,K=!1,Rn={biweekly:0,monthly:0};const Jc=1780786800,Ce=14*24*60*60,Nr=60*60,Tr=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let R=Tr[0].id;function Qc(){Us.innerHTML=`
    <main class="splash-screen">
      <img src="${va}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await Sc(),await Xc(),Hs(),Ht(),await lt()},5e3)}async function Xc(){try{m=await Ec()}catch(t){m={logged_in:!1,allowed:!1,status_message:""},h("session-error",k(t),{ttlMs:p})}}function Hs(){Us.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${Sa}" alt="" class="title-icon" />
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
            <img src="${wa}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${a(Gr)}</div>
            </div>
          </div>
          <div class="compact-header-actions">
            ${el()}
            <div id="discordArea" class="discord-area"></div>
          </div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${Ws()}
        </nav>

        <div id="webSavedVarsUploadBannerHost">
          ${Cl()}
        </div>

        <section id="guildSyncTabContent" class="guildsync-tab-content${Zs()?" web-upload-banner-dismissed":""}" aria-live="polite">
          ${zs()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await _c()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await Bs(),await Ac()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await wc()}),_r(),Il(),Ys(),ca(),qo(),Ko(),eo(),xo(),Ro(),Do(),$o(),Mo(),mo(),Fo(),al(),$e(),kt(),zi||(window.addEventListener("resize",()=>{ka(),ya()}),Bf(),zi=!0)}function Ws(){return Tr.map(t=>{const e=t.id===R,r=tl(t.id,e),n=r?js():0,i=r?`Deposit mail needs attention: ${n} item${n===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${r?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${u(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${u(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${rl(t.icon)}</span>
          <span class="guildsync-tab-label">${a(t.label)}</span>
          ${r?`<span class="guildsync-tab-mail-badge" aria-label="${u(i)}">${n>99?"99+":a(String(n))}</span>`:""}
        </button>
      `}).join("")}function Zc(){var r;const e=`${((r=navigator.userAgentData)==null?void 0:r.platform)||""} ${navigator.platform||""} ${navigator.userAgent||""}`.toLowerCase();return e.includes("win")?fr.windows:e.includes("mac")||e.includes("darwin")?fr.macos:e.includes("linux")||e.includes("x11")?fr.linux:{...fr.windows,label:"Desktop client",shortLabel:"Windows"}}function el(){const t=Zc();return`
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
  `}function js(){return A()?zr()+or()+zo():0}function tl(t,e){return t!=="more"||e?!1:js()>0}function rl(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function zs(){const t=Tr.find(r=>r.id===R)||Tr[0];let e="";return t.id==="discord-members"?e=ll():t.id==="eso-members"?e=dl():t.id==="more"?e=pu():t.id==="settings"?e=Ol():e=`
      <div class="guildsync-tab-panel" data-active-tab="${u(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${a(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${ue?Ud():""}
    ${Dt?Au():""}
    ${Ie?Bd():""}
    ${wt?Gl():""}
    ${At?zl():""}
    ${Lt?Ql():""}
    ${Qe?ld():""}
    ${Rt?ol():""}
  `}function nl(){return Rt||dt||ft||ue||Dt||Ie||St||wt||At||Lt||Qe||je}function il(){return Rt?!1:Qe?(Bn(),!0):Lt?(Tn(),!0):At?(Nn(),!0):wt?(Mn(),!0):Ie?(yt(),!0):St?(On(),!0):Dt?(Ir(),!0):ue?(ue=!1,l(),!0):dt?(dt=!1,l(),!0):ft?(ft=!1,l(),!0):je?(je=!1,l(),!0):!1}function sl(t){t.key==="Escape"&&il()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",sl,!0),window.guildSyncGlobalModalEscapeAttached=!0);function Yn(t={}){return new Promise(e=>{Ut&&Ut(!1),Rt=!0,jn={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},Ut=e,l()})}function Br(t=!1){const e=Ut;Ut=null,Rt=!1,jn=null,e&&e(t===!0),l()}function ol(){const t=jn||{};return`
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
  `}function Ji(t){var n,i,s,o;const e=(i=(n=t.target).closest)==null?void 0:i.call(n,"#cancelGuildSyncConfirmButton"),r=(o=(s=t.target).closest)==null?void 0:o.call(s,"#acceptGuildSyncConfirmButton");if(!(!e&&!r)){if(t.preventDefault(),t.stopPropagation(),e){Br(!1);return}r&&Br(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",Ji,!0),document.addEventListener("pointerup",Ji,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function al(){if(!Rt)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=n=>{n.preventDefault(),n.stopPropagation(),Br(!1)}),e&&(e.onclick=n=>{n.preventDefault(),n.stopPropagation(),Br(!0)});const r=document.querySelector(".guildsync-confirm-overlay");r&&(r.onclick=n=>{n.target===r&&(n.preventDefault(),n.stopPropagation())})}function Ys(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(nl())return;const e=t.dataset.tabId;!e||e===R||(R=e,l())})})}function cl(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function l(t={}){Qe&&cl();const e=document.querySelector(".guildsync-tabs"),r=document.querySelector("#guildSyncTabContent");e&&(e.innerHTML=Ws()),r&&(r.innerHTML=zs()),Ys(),ca(),qo(),Ko(),eo(),xo(),Ro(),Do(),$o(),Mo(),mo(),Fo(),t.restoreDiscordSearchFocus&&of(),t.restoreRosterSearchFocus&&af(),R==="discord-members"&&(d==null?void 0:d.connected)&&F.length===0&&!Wt&&li({silent:!0}),R==="eso-members"&&(d==null?void 0:d.connected)&&W.length===0&&!Ne&&!Yi&&(Yi=!0,Mt({silent:!0})),R==="more"&&(d==null?void 0:d.connected)&&P.length===0&&!Be&&ne({silent:!0}),(R==="discord-members"||R==="eso-members"||R==="settings")&&(d==null?void 0:d.connected)&&L.length===0&&!C&&sr({silent:!0})}function ll(){const t=rf(),e=cf(),r=Array.from(it),n=Array.from(st);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${a(la(Ur))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${Wt||Lr?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Lr?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${u(Er)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!it.has(i)).map(i=>`<option value="${u(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All roles</span>':r.map(i=>ff(i)).join("")}
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
              ${zn.filter(i=>!st.has(i.id)).map(i=>`<option value="${u(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(i=>Ks("discord",i)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${hr("username","Username")}
                ${hr("global_name","Global Name")}
                ${hr("server_nickname","Server Nickname")}
                ${hr("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>lf(i)).join(""):df()}
            </tbody>
          </table>
        </div>
      </div>
      ${ft?Rl():""}
    </div>
  `}function dl(){const t=vl(),e=_l(),r=Array.from(Pe),n=Array.from(ot);return`
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
          <span class="discord-last-refresh">Last Refresh: ${a(tu(Rr))}</span>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${Ne?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Ne?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${u(Dr)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!Pe.has(i)).map(i=>`<option value="${u(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All ranks</span>':r.map(i=>Al(i)).join("")}
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
              ${zn.filter(i=>!ot.has(i.id)).map(i=>`<option value="${u(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(i=>Ks("roster",i)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${Ot("account_name","Account Name")}
                ${Ot("rank","Rank")}
                ${Ot("joined","Joined")}
                ${Ot("notes","Notes","roster-notes-header")}
                ${Ot("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map((i,s)=>ul(i,s)).join(""):yl()}
            </tbody>
          </table>
        </div>
      </div>
      ${dt?Nl():""}
      ${St?hl():""}
    </div>
  `}function ul(t,e=-1){const r=bl(t.rank||""),n=r?` style="color: ${r};"`:"";return`
    <tr class="eso-roster-row${e===M?" roster-search-active-row":""}"${n} data-roster-row-index="${u(String(e))}" data-eso-account-name="${u(t.account_name||"")}">
      <td>${a(t.account_name||"")}</td>
      <td>${Kn(t.rank||"")}</td>
      <td>${a(jr(t.joined))}</td>
      <td class="roster-notes-cell">${fl(t)}</td>
      <td class="member-link-action-cell">${So({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function fl(t){const e=String((t==null?void 0:t.account_name)||"").trim(),r=Number((t==null?void 0:t.note_count)||0),n=r>0,i=n?`${r} roster note${r===1?"":"s"} for ${e}`:`No roster notes for ${e}`;return`
    <button
      class="roster-notes-button${n?" has-notes":""}"
      type="button"
      data-open-roster-notes="${u(e)}"
      title="${u(i)}"
      aria-label="${u(i)}"
    >
      <svg class="roster-notes-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4.5 5.25c0-.69.56-1.25 1.25-1.25h5.1c.89 0 1.72.34 2.35.95A3.28 3.28 0 0 1 15.55 4h2.7c.69 0 1.25.56 1.25 1.25v13.5c0 .69-.56 1.25-1.25 1.25h-4.6c-.75 0-1.45.29-1.98.82a.95.95 0 0 1-1.34 0A2.8 2.8 0 0 0 8.35 20h-2.6c-.69 0-1.25-.56-1.25-1.25V5.25Zm7.25 1.6A1.28 1.28 0 0 0 10.85 6H6.5v12h1.85c1.14 0 2.24.35 3.15 1V7.1c0-.09.01-.17.25-.25Zm1.75 12.15a6.32 6.32 0 0 1 3.15-1h.85V6h-1.95c-.73 0-1.4.29-1.9.8l-.15.15V19Z"/></svg>
      ${n?`<span class="roster-notes-count" aria-hidden="true">${r}</span>`:""}
    </button>
  `}function hl(){const t=Yt||"",e=Boolean((m==null?void 0:m.logged_in)&&(m==null?void 0:m.allowed));return`
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
          ${Ee?`<div class="discord-data-error">${a(Ee)}</div>`:""}
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
                ${pl()}
              </tbody>
            </table>
          </div>
          ${e?ml():'<div class="roster-history-muted">Log in to add a new note.</div>'}
        </div>
      </div>
    </div>
  `}function pl(){return $r?'<tr><td class="bank-empty-row" colspan="3">Loading notes...</td></tr>':!Array.isArray(Le)||Le.length===0?'<tr><td class="bank-empty-row" colspan="3">No notes recorded for this member.</td></tr>':Le.map(t=>`
      <tr>
        <td class="roster-notes-when-cell">${a(gl(t.timestamp))}</td>
        <td class="roster-notes-officer-cell">${a(t.officer||"")}</td>
        <td class="roster-notes-note-cell">${a(t.note||"")}</td>
      </tr>
    `).join("")}function ml(){return`
    <div class="roster-notes-form">
      <label for="rosterNotesNewNote">Add Note</label>
      <textarea
        id="rosterNotesNewNote"
        class="roster-notes-textarea"
        rows="4"
        placeholder="Enter a new roster note..."
        ${Ge?"disabled":""}
      >${a(ut)}</textarea>
      <button id="saveRosterNoteButton" class="refresh-discord-button" type="button" ${Ge?"disabled":""}>
        ${Ge?"Saving...":"Save Note"}
      </button>
    </div>
  `}function gl(t){const e=Number(t||0);return!Number.isFinite(e)||e<=0?"":new Date(e*1e3).toLocaleString()}function yl(){return`
    <tr>
      <td class="bank-empty-row" colspan="5">${a(Ne?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function bl(t){const e=String(t||"").trim(),r=ui(e);return Qr(r==null?void 0:r.role_color)}function Kn(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${a(e)}</span>`}function kl(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":Kn(e)}function vl(){const t=Dr.trim().toLowerCase(),e=W.filter(r=>{const n=String(r.rank||"").trim();if(Pe.size>0&&!Pe.has(n)||!Xs(ot,Dn(r)))return!1;if(!t)return!0;const i=jr(r.joined),s=ti(r.joined),o=Dn(r),c=Qs(r.account_name||"");return[r.account_name,n,i,s,r.joined,o,c].map(g=>String(g||"").toLowerCase()).join(" ").includes(t)});return Sl(e)}function Sl(t){if(!ae||!x)return t;const e=x==="desc"?-1:1;return[...t].sort((r,n)=>{const i=Qi(r,ae),s=Qi(n,ae),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:String(r.account_name||"").localeCompare(String(n.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function Qi(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const r=Number(t.joined||0);return Number.isFinite(r)&&r>0?String(r).padStart(16,"0"):""}if(e==="notes")return String(Number(t.note_count||0)).padStart(8,"0");if(e==="linked"){const r=Dn(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[r]||"9"} ${r} ${Qs(t.account_name||"")}`}return String(t.account_name||"")}function wl(t){const r=new Set(["account_name","rank","joined","notes","linked"]).has(t)?t:"account_name";ae!==r?(ae=r,x="asc"):x==="asc"?x="desc":x==="desc"?(ae="",x=""):(ae=r,x="asc"),M=-1,l()}function Ot(t,e,r=""){const n=ae===t&&Boolean(x),i=n?x==="asc"?"ascending":"descending":"none",s=n?x==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${u(r)}" aria-sort="${u(i)}">
      <button
        class="discord-sort-header roster-sort-header${n?" active":""}"
        type="button"
        data-roster-sort-column="${u(t)}"
        title="Sort ${u(e)}${n&&x==="asc"?" descending":n&&x==="desc"?" not sorted":" ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function _l(){return Array.from(new Set(W.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function Al(t){const e=ui(t),r=Qr(e==null?void 0:e.role_color),n=hi(r),i=fi(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-roster-rank-filter="${u(t)}"
      style="${i}"
      title="Remove ${u(t)} filter"
    >
      <span>${a(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Ll(t){const e=zn.find(r=>r.id===t);return e?e.label:t}function Ks(t,e){const r=t==="roster"?"roster":"discord",n=Ll(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${r}-link-status-filter="${u(e)}"
      title="Remove ${u(n)} link filter"
    >
      <span>${a(n)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Js(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked"&&String(r.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function El(t){return Js(Wr(t==null?void 0:t.discord_id))}function Dn(t){return Js(Hr(t==null?void 0:t.account_name))}function Qs(t){const e=Hr(t),r=vo({mode:"eso-to-discord",esoAccountName:t}),n=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean),i=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="candidate").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean);return[r.label,r.title,n.join(" "),i.join(" ")].filter(Boolean).join(" ")}function Xs(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function Rl(){return`
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
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${u(me)}" />
        </div>

        ${de?`<div class="discord-data-error">${a(de)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Dl()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${Ke?`: ${a(Ke)}`:""}</div>
            ${$l()}
          </div>
        </div>
      </div>
    </div>
  `}function Dl(){return De&&H.length===0?'<div class="roster-history-muted">Searching...</div>':H.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${H.map((t,e)=>`
        <button class="roster-history-match${e===Y||t.discord_id===ht?" is-selected":""}" type="button" data-discord-history-id="${u(t.discord_id)}" data-discord-history-name="${u($n(t))}">
          <span>${a($n(t))}</span>
          <strong>${a(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===Y?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function $l(){return ht?De&&Re.length===0?'<div class="roster-history-muted">Loading history...</div>':Re.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${Re.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${a(ti(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${a(Ml(t.event_type))}</td>
              <td>${a(t.old_value||"")}</td>
              <td>${a(t.new_value||"")}</td>
              <td>${a(t.initiator||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function $n(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function Ml(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Nl(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(zt)}" />
        </div>

        ${le?`<div class="discord-data-error">${a(le)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Tl()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${Te?`: ${a(Te)}`:""}</div>
            ${Bl()}
          </div>
        </div>
      </div>
    </div>
  `}function Tl(){return Ae&&V.length===0?'<div class="roster-history-muted">Searching...</div>':V.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${V.map((t,e)=>`
        <button class="roster-history-match${e===z||t.account_name===Te?" is-selected":""}" type="button" data-roster-history-account="${u(t.account_name)}">
          <span>${a(t.account_name)}</span>
          <strong>${a(t.rank||"")}</strong>
          ${e===z?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Bl(){return Te?Ae&&_e.length===0?'<div class="roster-history-muted">Loading history...</div>':_e.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${_e.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${a(ti(t.timestamp))}</td>
              <td>${a(t.event_type||"")}</td>
              <td>${kl(t.rank)}</td>
              <td>${a(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function nr(){return typeof window<"u"&&window.GUILDSYNC_WEB===!0}function Zs(){if(!nr())return!0;try{return localStorage.getItem(Cs)==="1"}catch{return!1}}function Cl(){return!nr()||Zs()?"":`
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
  `}function Il(){const t=document.querySelector("#webSavedVarsUploadBannerDismissButton");!t||t.addEventListener("click",()=>{var e,r;try{localStorage.setItem(Cs,"1")}catch{}(e=document.querySelector("#webSavedVarsUploadBannerHost"))==null||e.remove(),(r=document.querySelector(".guildsync-tab-content"))==null||r.classList.add("web-upload-banner-dismissed")})}function Ol(){return`
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
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${ge?"disabled":""}>
              ${ge?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${ye?"disabled":""}>
              ${ye?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${be?"disabled":""}>
              ${be?"Loading...":"Run"}
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
  `}function eo(){var t,e,r,n;R==="settings"&&((t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>no()),(e=document.querySelector("#runDiscordRankAuditReportButton"))==null||e.addEventListener("click",()=>jl()),(r=document.querySelector("#runDiscordLastSeenReportButton"))==null||r.addEventListener("click",()=>Jl()),(n=document.querySelector("#runMemberLinksReportButton"))==null||n.addEventListener("click",()=>od()))}function Sr(){return nr()&&A()&&(d==null?void 0:d.connected)===!0}function to(){if(!nr())return null;let t=document.querySelector("#webSavedVarsFullScreenDropOverlay");return t||(t=document.createElement("div"),t.id="webSavedVarsFullScreenDropOverlay",t.className="web-savedvars-fullscreen-drop-overlay",t.setAttribute("aria-hidden","true"),t.innerHTML=`
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
  `,document.body.appendChild(t),t)}function Xi(){const t=to();!t||(t.classList.add("is-visible"),t.setAttribute("aria-hidden","false"))}function hn(){const t=document.querySelector("#webSavedVarsFullScreenDropOverlay");!t||(t.classList.remove("is-visible"),t.setAttribute("aria-hidden","true"))}function xt(t){var r;return Array.from(((r=t==null?void 0:t.dataTransfer)==null?void 0:r.types)||[]).includes("Files")}function xl(t){!(t!=null&&t.dataTransfer)||(t.dataTransfer.dropEffect=Sr()?"copy":"none")}function ro(t){const e=String(t||"").split(/[\\/]/).pop();return Vc.get(e)||""}function ql(){if(!nr())return;to();const t=e=>{!xt(e)||(e.preventDefault(),e.stopPropagation(),xl(e))};document.addEventListener("dragenter",e=>{!xt(e)||(t(e),et+=1,Sr()&&Xi())},!0),document.addEventListener("dragover",e=>{t(e),xt(e)&&Sr()&&Xi()},!0),document.addEventListener("dragleave",e=>{!xt(e)||(e.preventDefault(),e.stopPropagation(),et=Math.max(0,et-1),et===0&&hn())},!0),document.addEventListener("drop",async e=>{var n;if(!xt(e))return;if(t(e),et=0,hn(),!Sr()){h("web-savedvars-drop-not-ready","SavedVariables drag/drop is only available while logged in and connected to the GuildSync server.",{ttlMs:p});return}const r=Array.from(((n=e.dataTransfer)==null?void 0:n.files)||[]);await Fl(r)},!0),window.addEventListener("blur",()=>{et=0,hn()})}async function Fl(t=[]){if(un){h("web-savedvars-drop-busy","A SavedVariables upload is already processing. Please wait for it to finish.",{ttlMs:p});return}const e=Array.from(t||[]).filter(Boolean);if(!e.length){h("web-savedvars-drop-empty","No file was dropped.",{ttlMs:p});return}const r=e.find(n=>!ro(n.name));if(r){h("web-savedvars-drop-invalid",`Unsupported file: ${r.name}. Drop only GuildSyncBanking.lua, GuildSyncRoster.lua, or GuildSyncApplications.lua.`,{ttlMs:p});return}un=!0;try{for(const n of e)await Pl(n)}finally{un=!1}}async function Pl(t){const e=ro(t.name);if(!e)throw new Error(`Unsupported file: ${t.name}`);const r=`web-savedvars-upload-${e}`,n=await t.text();if(!String(n||"").trim())throw new Error(`${t.name} is empty.`);h(r,`Uploading ${t.name}...`);try{const i=await _("guildsync:upload-savedvars-raw",{file_name:t.name,raw_lua_text:n,source:"web-drag-drop"},12e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||`${t.name} upload was rejected.`);e==="banking"?await ne({silent:!0}):e==="roster"&&(await Mt({silent:!0}),await sr({silent:!0})),h(r,i.message||`${t.name} uploaded and processed.`,{ttlMs:p})}catch(i){throw h(r,k(i),{ttlMs:p}),i}Xr("version")}function no(){wt=!0,Ue="",l(),Bo()}function Mn(){wt=!1,Ue="",l()}function Gl(){const t=Ul(),e=Vl(),r=_t.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${ge?"disabled":""}>${ge?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(r))} total row${r===1?"":"s"}</span>
        </div>

        ${Ue?`<div class="discord-data-error">${a(Ue)}</div>`:""}

        <div class="report-results-content">
          ${ge&&r===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!ge&&r===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${r>0?Zi("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${r>0?Zi("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${a(oo())}</textarea>
      </div>
    </div>
  `}function Ul(){return _t.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function Vl(){return _t.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function Zi(t,e,r,n){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${a(t)}</h4>
          <p>${a(e)}</p>
        </div>
        <span>${a(String(r.length))} row${r.length===1?"":"s"}</span>
      </div>
      ${r.length>0?Hl(r):`<div class="roster-history-muted report-section-empty">${a(n)}</div>`}
    </section>
  `}function Hl(t=_t){return`
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
              <td>${Kn(e.rank||"")}</td>
              <td>${a(jr(e.joined))}</td>
              <td>${a(Jr(e.purchased_tickets||0))}</td>
              <td class="associate-earliest-deposit-cell">${a(io(e))}</td>
              <td>${a(so(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function io(t){const e=String((t==null?void 0:t.earliest_deposit_summary)||"").trim();if(e)return e;const r=String((t==null?void 0:t.earliest_deposit_date)||"").trim(),n=String((t==null?void 0:t.earliest_deposit_raffle_period)||"").trim();return[r,n].filter(Boolean).join(" | ")}function so(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function oo(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Earliest Deposit / Raffle","Discord Link"]];for(const e of _t){const r=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([r,e.account_name||"",e.rank||"",jr(e.joined),Jr(e.purchased_tickets||0),io(e),so(e)])}return t.map(e=>e.map(Yr).join("	")).join(`
`)}async function Wl(){const t=oo();if(await Kr(t)){h("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#associateTicketReportTsv");r&&(r.focus(),r.select()),h("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function jl(){At=!0,Ve="",l(),To()}function Nn(){At=!1,Ve="",l()}function zl(){const t=Kt.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${ye?"disabled":""}>${ye?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${Ve?`<div class="discord-data-error">${a(Ve)}</div>`:""}

        <div class="report-results-content">
          ${ye&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!ye&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?Yl(Kt):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${a(lo())}</textarea>
      </div>
    </div>
  `}function Yl(t=Kt){return`
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
              <td data-label="Discord Member" class="discord-rank-audit-member-cell">${a(ao(e))}</td>
              <td data-label="Discord Rank Role" class="discord-rank-audit-discord-cell">${a(e.discord_rank||"No matching rank role")}</td>
              <td data-label="Linked ESO Account(s)" class="discord-rank-audit-eso-account-cell">${a(e.eso_accounts||"No linked ESO account")}</td>
              <td data-label="ESO Rank" class="discord-rank-audit-eso-rank-cell">${a(e.eso_rank||"None")}</td>
              <td data-label="Issue" class="discord-rank-audit-issue-cell">${a(co(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function ao(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function co(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function lo(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of Kt)t.push([ao(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",co(e)]);return t.map(e=>e.map(Yr).join("	")).join(`
`)}async function Kl(){const t=lo();if(await Kr(t)){h("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#discordRankAuditReportTsv");r&&(r.focus(),r.select()),h("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function Jl(){Lt=!0,He="",Et="",l(),No(),L.length===0&&!C&&sr({silent:!0})}function Tn(){Lt=!1,He="",Et="",ke="",at="",ve="",l()}function Ql(){const t=Jn(),e=Wn.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${be?"disabled":""}>${be?"Loading...":"Run Again"}</button>
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
            value="${u(Et)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${ke===""?"selected":""}>All link statuses</option>
            <option value="linked" ${ke==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${ke==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${ke==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${He?`<div class="discord-data-error discord-last-seen-report-error">${a(He)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${be&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!be&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?Xl(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${a(fo(t))}</textarea>
      </div>
    </div>
  `}function Xl(t=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${qt("name","Discord Member")}</th>
            <th>${qt("eso","Linked ESO Account")}</th>
            <th>${qt("date","Last Seen")}</th>
            <th>${qt("days","Days Since")}</th>
            <th>${qt("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr class="discord-last-seen-row ${u(id(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${u(Je(e).status)}" data-discord-last-seen-search="${u(uo(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${nd(e)}
                  <span>${a(gt(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${ed(e)}</td>
              <td>${a(Qn(e.last_seen))}</td>
              <td>${a(Xn(e.last_seen))}</td>
              <td>${a(Cr(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function qt(t,e){const r=at===t,n=r?ve==="asc"?"\u25B2":"\u25BC":"\u2195",i=r?`${e}: ${ve==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${r?" active":""}" type="button" data-discord-last-seen-sort="${u(t)}" title="${u(i)}">
      <span>${a(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${a(n)}</span>
    </button>
  `}function Jn(){const t=[...Wn],e=at,r=ve;if(!e||!r)return t;const n=r==="desc"?-1:1;return t.sort((i,s)=>{var o,c;if(e==="date"){const f=Number(i.last_seen||0)||0,g=Number(s.last_seen||0)||0;return(f-g)*n}if(e==="days")return(es(i.last_seen)-es(s.last_seen))*n;if(e==="action")return Cr(i.last_seen_action).localeCompare(Cr(s.last_seen_action),void 0,{sensitivity:"base"})*n;if(e==="eso"){const f=Je(i),g=Je(s),S={linked:0,candidate:1,unlinked:2},y=((o=S[f.status])!=null?o:9)-((c=S[g.status])!=null?c:9);return y!==0?y*n:f.esoAccountName.localeCompare(g.esoAccountName,void 0,{sensitivity:"base"})*n}return gt(i).localeCompare(gt(s),void 0,{sensitivity:"base"})*n})}function Zl(t){at!==t?(at=t,ve="asc"):ve==="asc"?ve="desc":(at="",ve=""),l()}function gt(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function uo(t){return[gt(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,td(t),Qn(t==null?void 0:t.last_seen),Xn(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function Je(t){const e=Sd(t==null?void 0:t.discord_id),r=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),n=String((e==null?void 0:e.eso_account_name)||"").trim();return r==="linked"&&n?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:n,title:`Linked ESO account: ${n}`}:(r==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&n?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:n,title:`Fuzzy ESO account candidate: ${n}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function ed(t){const e=Je(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${u(e.className)}"
      title="${u(e.title)}"
      aria-label="${u(e.label)}"
      role="img"
    ></span>
  `}function td(t){const e=Je(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function rd(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!r)return"";if(/^https?:\/\//i.test(e))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function nd(t){const e=gt(t),r=e?e.slice(0,2).toUpperCase():"?",n=rd(t);return n?`<span class="discord-member-avatar"><img src="${u(n)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${a(r)}</span>`}function Qn(t){const e=Number(t);if(!e)return"Never";const r=new Date(e*1e3);if(Number.isNaN(r.getTime()))return String(t||"");const n=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(r).reduce((i,s)=>(i[s.type]=s.value,i),{});return`${n.month}/${n.day}/${n.year} ${n.hour}:${n.minute} ${n.dayPeriod}`}function id(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const r=(Date.now()-e*1e3)/864e5;return r>30?"discord-last-seen-red":r>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function Xn(t){const e=Number(t);if(!e)return"Never";const r=Date.now()-e*1e3;if(!Number.isFinite(r))return"";if(r<0)return"0 days";const n=Math.floor(r/864e5);return`${n} day${n===1?"":"s"}`}function es(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const r=Date.now()-e*1e3;return Number.isFinite(r)?r<0?0:Math.floor(r/864e5):Number.POSITIVE_INFINITY}function Cr(t){return String(t||"").trim()||"None tracked"}function fo(t=Jn()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const r of t){const n=Je(r);e.push([gt(r),n.label||"",n.esoAccountName||"",Qn(r==null?void 0:r.last_seen),Xn(r==null?void 0:r.last_seen),Cr(r==null?void 0:r.last_seen_action),(r==null?void 0:r.username)||"",(r==null?void 0:r.discord_id)||""])}return e.map(r=>r.map(Yr).join("	")).join(`
`)}async function sd(){const t=Jn().filter(i=>{const s=re(Et),o=String(ke||"").trim().toLowerCase(),c=!s||re(uo(i)).includes(s),f=!o||Je(i).status===o;return c&&f}),e=fo(t);if(await Kr(e)){h("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#discordLastSeenReportTsv");n&&(n.focus(),n.select()),h("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function od(){Qe=!0,I="",l(),L.length===0&&!C&&sr({silent:!0})}function Bn(){Qe=!1,Vr="",qe="",er="",tr="",ce=-1,l()}function ho(t){return[...new Set((Array.isArray(L)?L:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function po(t,e){return t.map(r=>`<option value="${u(r)}" ${e===r?"selected":""}>${a(r)}</option>`).join("")}function ad(){return po(ho("link_status"),er)}function cd(){return po(ho("link_method"),tr)}function ld(){return`
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
            value="${u(Vr)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${er===""?"selected":""}>All statuses</option>
            ${ad()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${tr===""?"selected":""}>All methods</option>
            ${cd()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${qe===""?"selected":""}>All actions</option>
            <option value="needs-link" ${qe==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${qe==="can-unlink"?"selected":""}>Unlink Available</option>
            <option value="can-unblock" ${qe==="can-unblock"?"selected":""}>Unblock Available</option>
          </select>
        </div>

        ${I?`<div class="discord-data-error member-links-report-error">${a(I)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${hd()}
        </div>
      </div>
    </div>
  `}function mo(){var r,n,i,s,o,c;if(!Qe)return;(r=document.querySelector("#closeMemberLinksReportButton"))==null||r.addEventListener("click",Bn),(n=document.querySelector("#refreshMemberLinksButton"))==null||n.addEventListener("click",()=>sr()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>kd());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",pd),t.addEventListener("keydown",bd)),(s=document.querySelector("#memberLinksReportActionFilter"))==null||s.addEventListener("change",md),(o=document.querySelector("#memberLinksReportStatusFilter"))==null||o.addEventListener("change",gd),(c=document.querySelector("#memberLinksReportMethodFilter"))==null||c.addEventListener("change",yd),ir(),document.querySelectorAll("[data-accept-member-candidate]").forEach(f=>{f.addEventListener("click",()=>yo(f.dataset.acceptMemberCandidate||"",f.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(f=>{f.addEventListener("click",()=>vd(f.dataset.unlinkMemberLink||"",f.dataset.unlinkMemberLinkDiscordId||""))}),document.querySelectorAll("[data-unblock-member-auto-link]").forEach(f=>{f.addEventListener("click",()=>bo(f.dataset.unblockMemberAutoLink||"",f.dataset.unblockMemberAutoLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",f=>{f.target===e&&Bn()})}function ts(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function rs(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function dd(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function ud(t){return[...Array.isArray(t)?t:[]].sort((e,r)=>{const n=ts(e)-ts(r);if(n!==0)return n;const i=rs(e).localeCompare(rs(r),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((r==null?void 0:r.discord_user_id)||""),void 0,{sensitivity:"base"})})}function fd(t){const e=Cn(t);let r="";e==="Username"?r=(t==null?void 0:t.discord_username)||"":e==="Global Name"?r=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(r=(t==null?void 0:t.discord_server_nickname)||""),r||(r=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const n=e?` <span class="member-link-report-match-field">(${a(e)})</span>`:"";return`<span class="member-link-report-discord-name">${a(r)}</span>${n}`}function hd(){return C&&L.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(L)||L.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${ud(L).map(e=>{var s;const r=String(e.link_status||"").trim().toLowerCase(),n=String(e.link_method||"").trim().toLowerCase(),i=fd(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${u(dd(e))}"
                data-member-links-report-status="${u(r)}"
                data-member-links-report-method="${u(n)}"
                data-member-links-report-action="${u(Number(e.locked||0)===1||r==="blocked"?"can-unblock":r==="linked"?"can-unlink":r==="candidate"?"needs-link":"")}"
              >
                <td>${a(e.eso_account_name||"")}</td>
                <td>${i}</td>
                <td class="member-links-status-col">${a(Number(e.locked||0)===1||r==="blocked"?"blocked":r||"")}</td>
                <td class="member-links-method-col">${a(n||"")}${Number(e.locked||0)===1?" \u{1F512}":""}</td>
                <td class="member-links-action-col">
                  <div class="member-link-actions">
                    ${r==="candidate"?`<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${u(e.eso_account_name||"")}" data-accept-member-candidate-discord-id="${u(e.discord_user_id||"")}" aria-label="Accept candidate link" title="Accept candidate link">\u2713</button>`:""}
                    ${r==="linked"?`<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${u(e.eso_account_name||"")}" data-unlink-member-link-discord-id="${u(e.discord_user_id||"")}" aria-label="Unlink this ESO/Discord pair" title="Unlink this ESO/Discord pair">\u{1F5D1}</button>`:""}
                    ${Number(e.locked||0)===1||r==="blocked"?`<button class="member-link-report-action member-link-report-unblock" type="button" data-unblock-member-auto-link="${u(e.eso_account_name||"")}" data-unblock-member-auto-link-discord-id="${u(e.discord_user_id||"")}" aria-label="Remove auto-link block" title="Remove auto-link block">\u21BA</button>`:""}
                  </div>
                </td>
                <td class="member-links-confidence-col">${a(String((s=e.match_confidence)!=null?s:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function go(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function ns(t){const e=go();if(e.forEach(n=>n.classList.remove("member-links-report-row-active")),e.length===0){ce=-1;return}ce=Math.max(0,Math.min(t,e.length-1));const r=e[ce];r.classList.add("member-links-report-row-active"),r.scrollIntoView({block:"nearest"})}function ir(){const t=re(Vr),e=String(qe||"").trim().toLowerCase(),r=String(er||"").trim().toLowerCase(),n=String(tr||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let s=0;i.forEach(c=>{const f=re(c.dataset.memberLinksReportSearch||""),g=String(c.dataset.memberLinksReportAction||"").trim().toLowerCase(),S=String(c.dataset.memberLinksReportStatus||"").trim().toLowerCase(),y=String(c.dataset.memberLinksReportMethod||"").trim().toLowerCase(),Ze=(!t||f.includes(t))&&(!e||g===e)&&(!r||S===r)&&(!n||y===n);c.hidden=!Ze,c.classList.remove("member-links-report-row-active"),Ze&&(s+=1)});const o=document.querySelector("#memberLinksReportSearchEmpty");o&&(o.hidden=s!==0),ce=-1}function pd(t){Vr=t.target.value||"",ir()}function md(t){qe=t.target.value||"",ir()}function gd(t){er=t.target.value||"",ir()}function yd(t){tr=t.target.value||"",ir()}function bd(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=go();if(e.length===0)return;if(t.key==="ArrowDown"){const n=ce<0?0:ce+1;ns(n>=e.length?e.length-1:n);return}const r=ce<0?e.length-1:ce-1;ns(r<0?0:r)}async function sr(t={}){if(!(d!=null&&d.connected)){I="You must be connected to load member links.",l();return}C=!0,I="",t.silent||l();try{const e=await _("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");L=Array.isArray(e.links)?e.links:[]}catch(e){I=k(e)}finally{C=!1,l()}}async function kd(){if(!(d!=null&&d.connected)||!m.logged_in){I="You must be logged in and connected to run auto-linking.",l();return}C=!0,I="",l();try{const t=await _("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");L=Array.isArray(t.links)?t.links:[],h("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:p})}catch(t){I=k(t)}finally{C=!1,l()}}async function yo(t,e=""){try{const r=await _("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to accept candidate.");L=Array.isArray(r.links)?r.links:L,h("member-link-accepted",r.message||"Candidate accepted as a link.",{ttlMs:p})}catch(r){I=k(r),h("member-link-accept-error",I,{ttlMs:p})}}async function bo(t,e=""){if(!await Yn({title:"Remove Auto-Link Block?",message:`Remove the blocked auto-match record between ${t} and this Discord account? Auto-linking will run immediately and this screen will refresh to show whether the pair linked again.`,confirmLabel:"Unblock",cancelLabel:"Cancel",confirmClass:"danger"}))return!1;C=!0,I="",l();try{const n=await _("guildsync:unblock-member-auto-link",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to remove auto-link block.");L=Array.isArray(n.links)?n.links:L;const i=J(t),s=String(e||"").trim(),o=n.refreshedPair||L.find(g=>J(g.eso_account_name)===i&&String(g.discord_user_id||"").trim()===s),c=String((o==null?void 0:o.link_status)||"").trim().toLowerCase(),f=c==="linked"?" It linked again automatically.":c==="candidate"?" It is now showing as a candidate.":" No automatic link was recreated.";return h("member-link-unblocked",`${n.message||"Auto-link block removed."}${f}`,{ttlMs:p}),!0}catch(n){return I=k(n),h("member-link-unblock-error",I,{ttlMs:p}),!1}finally{C=!1,l()}}async function vd(t,e=""){if(!!await Yn({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const n=await _("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to unlink member.");L=Array.isArray(n.links)?n.links:L,h("member-link-unlinked",n.message||"Member link removed.",{ttlMs:p})}catch(n){I=k(n)}l()}}function J(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function Hr(t){const e=J(t);return e?L.filter(r=>J(r.eso_account_name)===e):[]}function Wr(t){const e=String(t||"").trim();return e?L.filter(r=>String(r.discord_user_id||"").trim()===e):[]}function ko(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const r=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(r.length>0){const i=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const s=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return s||r[0]}const n=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return n||e[0]}function Sd(t){return ko(Wr(t))}function wd(t){return`${J(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function Zn(){return w?w.mode==="discord-to-eso"?Wr(w.discordUserId):Hr(w.esoAccountName):[]}function _d(t){const e=String(t||"").trim(),r=F.find(n=>String(n.discord_id||"").trim()===e);return r&&(r.server_nickname||r.global_name||r.username||r.discord_id)||e}function vo(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?Wr(t.discordUserId):Hr(t.esoAccountName),n=ko(r),i=String((n==null?void 0:n.link_status)||"").trim().toLowerCase(),s=r.filter(c=>String(c.link_status||"").trim().toLowerCase()==="linked").length,o=r.filter(c=>String(c.link_status||"").trim().toLowerCase()==="candidate").length;return s>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?s===1?n.eso_account_name:`${s} ESO accounts`:s===1?n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member":`${s} Discord accounts`}`}:i==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?n.eso_account_name:n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member"}`}:i==="blocked"||Number((n==null?void 0:n.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function So(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,n=vo(t);return`
    <button
      class="member-link-status-dot member-link-status-${u(n.className)}"
      type="button"
      title="${u(n.title)}"
      aria-label="${u(n.label)}"
      data-open-member-link-dialog="${u(e)}"
      data-member-link-value="${u(r||"")}"
    ></button>
  `}function Ad(){return w?w.mode==="discord-to-eso"?_d(w.discordUserId):w.esoAccountName||"":""}function wo(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function Cn(t){const e=wo((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const r=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(r.includes("discord_username")||r.includes("username"))return"Username";if(r.includes("discord_display_name")||r.includes("global")||r.includes("display"))return"Global Name";if(r.includes("discord_server_nickname")||r.includes("server")||r.includes("nickname"))return"Server Nickname";const n=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(n==="exact"||n==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",s=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const c of s){const f=Ld(i,c.value);(!o||f>o.score)&&(o={...c,score:f})}if(o&&o.score>0)return o.field}return""}function re(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function Ld(t,e){const r=re(t),n=re(e);if(!r||!n)return 0;if(r===n)return 100;if((r.includes(n)||n.includes(r))&&Math.min(r.length,n.length)>=4)return 88;const i=Math.abs(r.length-n.length),s=[...r].findIndex((c,f)=>c!==n[f]),o=s===-1?Math.min(r.length,n.length):s;return Math.max(0,Math.min(75,Math.round(o*10-i*3)))}function Ed(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function Rd(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function Dd(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),r=Ed(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${a(r)}</span>`}function $d(t){var c;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",r=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",n=String(t.link_status||"").trim().toLowerCase(),o=n==="linked"?`<button
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
        >\u2713</button>`:Number(t.locked||0)===1||n==="blocked"?`<button
            class="member-link-approve-button member-link-unblock-button"
            type="button"
            aria-label="Remove auto-link block"
            title="Remove auto-link block"
            data-unblock-dialog-member-auto-link
            data-unblock-eso-account="${u(t.eso_account_name||"")}"
            data-unblock-discord-user-id="${u(t.discord_user_id||"")}"
          >\u21BA</button>`:"";return`
    <div class="member-link-current-card">
      <div class="member-link-current-details">
        <div><span>ESO:</span> ${a(t.eso_account_name||"")}</div>
        <div><span>Discord:</span> ${a(e)}</div>
        <div><span>Status:</span> ${Dd(t)} \xB7 ${a(Rd(t.link_method))} \xB7 ${a(String((c=t.match_confidence)!=null?c:""))}% \xB7 ${a(r)}</div>
        ${Cn(t)?`<div><span>Matched:</span> Matched on ${a(Cn(t))}</div>`:""}
      </div>
      ${o}
    </div>
  `}function Md(){const t=Zn();return t.length?[...t].sort((r,n)=>{var f,g;const i=String(r.link_status||"").trim().toLowerCase(),s=String(n.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},c=((f=o[i])!=null?f:9)-((g=o[s])!=null?g:9);return c!==0?c:Number(n.match_confidence||0)-Number(r.match_confidence||0)}).map(r=>$d(r)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function Nd(){if(pt)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(fe)return`<div class="discord-data-error">${a(fe)}</div>`;if(!Array.isArray(We)||We.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(Zn().map(r=>wd(r))),e=[...We].filter(r=>{const n=(w==null?void 0:w.mode)==="discord-to-eso"?`${J(r.account_name)}::${String(w.discordUserId||"").trim()}`:`${J(w==null?void 0:w.esoAccountName)}::${String(r.discord_id||"").trim()}`;return!t.has(n)}).sort((r,n)=>{const i=Number(n.confidence||0)-Number(r.confidence||0);return i!==0?i:is(r).localeCompare(is(n),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(r=>Td(r)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function is(t){return((w==null?void 0:w.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function Td(t,e={}){var y,b,q;const r=(w==null?void 0:w.mode)||"",n=r==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=wo(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),s=r==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[s,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),c=r==="discord-to-eso"?t.account_name:t.discord_id,f=e.disabled===!0,g=[n,s,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),S=[n,o,`${(y=t.confidence)!=null?y:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${u(c||"")}" data-member-link-option-search="${u(g)}" title="${u(S)}" ${f?"disabled":""}>
      <span class="member-link-option-name" title="${u(n||"")}">${a(n||"")}</span>
      <span class="member-link-option-subtitle" title="${u(o||"")}">${a(o||"")}</span>
      <span class="member-link-option-confidence" title="${u(String((b=t.confidence)!=null?b:0))}%">${a(String((q=t.confidence)!=null?q:0))}%</span>
    </button>
  `}function Bd(){const t=(w==null?void 0:w.mode)||"",e=Ad(),r=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
            ${Md()}
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
              value="${u(rr)}"
            />
            ${Nd()}
          </section>
        </div>

      </div>
    </div>
  `}async function _o(t,e){if(!(d!=null&&d.connected)||!A()){h("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:p});return}Ie=!0,w=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},We=[],pt=!0,fe="",rr="",X=-1,l();try{if(!Array.isArray(L)||L.length===0){const i=await _("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(L=Array.isArray(i.links)?i.links:[])}const n=await _("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load link suggestions.");We=Array.isArray(n.options)?n.options:[]}catch(r){fe=k(r)}finally{pt=!1,l()}}function yt(){document.removeEventListener("keydown",In),Ie=!1,w=null,We=[],pt=!1,fe="",rr="",X=-1,l()}function Ao(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function ss(t){const e=Ao();if(e.forEach(n=>n.classList.remove("member-link-option-row-active")),e.length===0){X=-1;return}X=Math.max(0,Math.min(t,e.length-1));const r=e[X];r.classList.add("member-link-option-row-active"),r.scrollIntoView({block:"nearest"})}function Lo(){const t=re(rr),e=[...document.querySelectorAll(".member-link-option-row")];let r=0;e.forEach(i=>{const s=re(i.dataset.memberLinkOptionSearch||i.textContent||""),o=!t||s.includes(t);i.hidden=!o,i.classList.remove("member-link-option-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinkSuggestionSearchEmpty");n&&(n.hidden=r!==0),X=-1}function Cd(t){rr=t.target.value||"",Lo()}function Id(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Ao();if(e.length===0)return;if(t.key==="ArrowDown"){const n=X<0?0:X+1;ss(n>=e.length?e.length-1:n);return}const r=X<0?e.length-1:X-1;ss(r<0?0:r)}function In(t){!Ie||t.key==="Escape"&&(t.preventDefault(),yt())}async function Od(t){if(!(!w||!t))try{const e=w.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:w.discordUserId}:{esoAccountName:w.esoAccountName,discordUserId:t},r=await _("guildsync:manual-link-member",e,3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to link members.");L=Array.isArray(r.links)?r.links:L,h("member-link-saved",r.message||"Member link saved.",{ttlMs:p}),yt()}catch(e){fe=k(e),l()}}async function xd(t,e=""){await yo(t,e),yt()}async function Eo(){if(!!w){pt=!0,fe="",l();try{const t=w.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:w.discordUserId}:{mode:"eso-to-discord",accountName:w.esoAccountName},e=await _("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");We=Array.isArray(e.options)?e.options:[]}catch(t){fe=k(t)}finally{pt=!1,l()}}}async function qd(t="",e=""){const r=Zn().find(i=>J(i.eso_account_name)===J(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!r||!await Yn({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await _("guildsync:manual-unlink-member",{esoAccountName:r.eso_account_name,discordUserId:r.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");L=Array.isArray(i.links)?i.links:L,h("member-link-unlinked",i.message||"Member link removed.",{ttlMs:p}),await Eo()}catch(i){fe=k(i),l()}}async function Fd(t="",e=""){await bo(t,e)&&await Eo()}function Ro(){var r;if(!Ie)return;document.removeEventListener("keydown",In),document.addEventListener("keydown",In),(r=document.querySelector("#closeMemberLinkDialogButton"))==null||r.addEventListener("click",yt);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",Cd),t.addEventListener("keydown",Id),Lo()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(n=>{n.addEventListener("click",()=>qd(n.dataset.unlinkEsoAccount||"",n.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-unblock-dialog-member-auto-link]").forEach(n=>{n.addEventListener("click",()=>Fd(n.dataset.unblockEsoAccount||"",n.dataset.unblockDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(n=>{n.addEventListener("click",()=>Od(n.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(n=>{n.addEventListener("click",()=>xd(n.dataset.acceptDialogMemberCandidate||"",n.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",n=>{n.target===e&&yt()})}function Do(){var e,r,n;if(!wt)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",Mn),(r=document.querySelector("#rerunAssociateTicketReportButton"))==null||r.addEventListener("click",()=>Bo()),(n=document.querySelector("#copyAssociateTicketReportGridButton"))==null||n.addEventListener("click",()=>Wl());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Mn()})}function $o(){var e,r,n;if(!At)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",Nn),(r=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||r.addEventListener("click",()=>To()),(n=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||n.addEventListener("click",()=>Kl());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Nn()})}function Mo(){var n,i,s;if(!Lt)return;(n=document.querySelector("#closeDiscordLastSeenReportButton"))==null||n.addEventListener("click",Tn),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>No()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>sd()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(o=>{o.addEventListener("click",()=>Zl(o.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",Pd);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",Gd),ei();const r=document.querySelector(".discord-last-seen-report-overlay");r&&r.addEventListener("click",o=>{o.target===r&&Tn()})}function Pd(t){Et=t.target.value||"",ei()}function Gd(t){ke=t.target.value||"",ei()}function ei(){const t=re(Et),e=String(ke||"").trim().toLowerCase(),r=[...document.querySelectorAll("[data-discord-last-seen-row]")];let n=0;r.forEach(s=>{const o=re(s.dataset.discordLastSeenSearch||s.textContent||""),c=String(s.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),S=(!t||o.includes(t))&&(!e||c===e);s.hidden=!S,S&&(n+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=n!==0)}async function No(){if(!(d!=null&&d.connected)||!A()){He="You must be logged in and connected to run this report.",l();return}be=!0,He="",l();try{const t=await _("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");F=di(t.members),Wn=[...F]}catch(t){He=k(t)}finally{be=!1,l(),O("discordLastSeenReportSearchInput")}}async function To(){if(!(d!=null&&d.connected)||!A()){Ve="You must be logged in and connected to run this report.",l();return}ye=!0,Ve="",l();try{const t=await _("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Kt=Array.isArray(t.rows)?t.rows:[]}catch(t){Ve=k(t)}finally{ye=!1,l()}}async function Bo(){if(!(d!=null&&d.connected)||!A()){Ue="You must be logged in and connected to run this report.",l();return}ge=!0,Ue="",l();try{const t=await _("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");_t=Array.isArray(t.rows)?t.rows:[]}catch(t){Ue=k(t)}finally{ge=!1,l()}}function ct(){const t=String($t||"").trim().toLowerCase(),e={account_name:"Anonymous",rank:"Manual Entry"},r=new Set(["anonymous"]),n=W.filter(i=>String(i.account_name||"").trim()).filter(i=>{const o=String(i.account_name||"").trim().toLowerCase();return!o||r.has(o)||t&&!o.includes(t)?!1:(r.add(o),!0)}).slice().sort((i,s)=>{const o=String(i.account_name||"").toLowerCase(),c=String(s.account_name||"").toLowerCase(),f=t&&o.startsWith(t)?0:1,g=t&&c.startsWith(t)?0:1;return f!==g?f-g:o.localeCompare(c)}).slice(0,19);return[e,...n]}function Co(t=ct()){const e=String(E.accountName||"").trim();return t.length===0?'<div class="roster-history-muted manual-ticket-no-matches">No matching guild members found.</div>':t.map((r,n)=>`
        <button class="roster-history-match${n===B||r.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${u(r.account_name)}" role="option" aria-selected="${n===B||r.account_name===e?"true":"false"}">
          <span>${a(r.account_name)}</span>
          <strong>${a(r.rank||"")}</strong>
          ${n===B?"<small>Enter</small>":""}
        </button>
      `).join("")}function Io(){document.querySelectorAll("[data-manual-ticket-account]").forEach(t=>{t.addEventListener("mousedown",e=>{e.preventDefault()}),t.addEventListener("click",()=>{Oo(t.dataset.manualTicketAccount||"")})})}function pn(){const t=document.querySelector("#manualTicketMatchList");if(!t)return;const e=ct();B>=e.length&&(B=e.length>0?e.length-1:-1),t.innerHTML=Co(e),Io()}function Oo(t){const e=String(t||"").trim();E.accountName=e,$t=e,K=!1,B=-1,G="",l()}function O(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const r=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(r,r)},0)}function Ud(){const t=K?ct():[],e=String(E.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Entry</h3>
            <p>Add a manual banking or raffle entry such as FFTG, officer corrections, or anonymous gold.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${G?`<div class="discord-data-error">${a(G)}</div>`:""}

        <div class="manual-ticket-form">
          <div class="manual-ticket-member-picker">
            <label class="manual-ticket-member-field" for="manualTicketAccountSearchInput">
              <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${u($t)}" autocomplete="off" />
            </label>

            ${K?`
              <div id="manualTicketMatchList" class="roster-history-match-list manual-ticket-match-list" role="listbox" aria-label="Matching guild members">
                ${Co(t)}
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
                <input id="manualTicketGoldInput" class="discord-search-input manual-ticket-gold-input" type="number" min="0" step="1" inputmode="numeric" placeholder="Gold Value" value="${u(E.goldValue)}" />
                <span class="manual-ticket-gold-coin" aria-hidden="true"></span>
              </label>
              <label class="manual-ticket-count-field">
                <div class="manual-ticket-number-wrap">
                  <input id="manualTicketCountInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${u(E.tickets)}" />
                  <div class="manual-ticket-number-buttons" aria-hidden="true">
                    <button id="manualTicketCountUpButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2303</button>
                    <button id="manualTicketCountDownButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2304</button>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div class="manual-ticket-actions">
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${Mr?"disabled":""}>${Mr?"Saving...":"Add Manual Entry"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function xo(){var s,o,c,f,g,S;if(!ue)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{ue=!1,l()});const t=document.querySelector("#manualTicketAccountSearchInput");if(t){const y=({rerender:b=!1}={})=>{if(K=!0,B=ct().length>0?0:-1,b){l(),O("manualTicketAccountSearchInput");return}pn()};t.addEventListener("focus",()=>{K||y({rerender:!0})}),t.addEventListener("click",()=>{K||y({rerender:!0})}),t.addEventListener("input",b=>{$t=b.target.value||"",E.accountName="",K=!0,B=ct().length>0?0:-1,pn()}),t.addEventListener("keydown",b=>{if(b.key==="Escape")return;if(!K){(b.key==="ArrowDown"||b.key==="ArrowUp")&&(b.preventDefault(),y({rerender:!0}));return}const q=ct();if(b.key==="ArrowDown"||b.key==="ArrowUp"){if(q.length===0)return;b.preventDefault();const Tt=b.key==="ArrowDown"?1:-1;B=((B<0?0:B)+Tt+q.length)%q.length,pn();return}if(b.key!=="Enter")return;b.preventDefault();const he=q[B>=0?B:0];he!=null&&he.account_name&&Oo(he.account_name)})}Io(),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",y=>{E.note=y.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(y=>{y.addEventListener("click",()=>{const b=String(y.dataset.manualTicketType||"").trim().toLowerCase();E.ticketType=b==="monthly"?"monthly":"biweekly",l()})}),(c=document.querySelector("[data-manual-ticket-toggle]"))==null||c.addEventListener("click",()=>{E.ticketType=E.ticketType==="monthly"?"biweekly":"monthly",l()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",y=>{const b=String(y.target.value||"").replace(/\D/g,"");y.target.value!==b&&(y.target.value=b),E.goldValue=b});const r=document.querySelector("#manualTicketCountInput");r==null||r.addEventListener("input",y=>{const b=String(y.target.value||"").replace(/\D/g,"");y.target.value!==b&&(y.target.value=b),E.tickets=b});const n=y=>{const b=Number(E.tickets)||0,q=Math.max(0,b+y);E.tickets=String(q),r&&(r.value=E.tickets,r.focus())};(f=document.querySelector("#manualTicketCountUpButton"))==null||f.addEventListener("click",()=>n(1)),(g=document.querySelector("#manualTicketCountDownButton"))==null||g.addEventListener("click",()=>n(-1)),(S=document.querySelector("#saveManualBiweeklyTicketButton"))==null||S.addEventListener("click",()=>Vd());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",y=>{y.target===i&&(ue=!1,l())})}async function Vd(){const t=String(E.accountName||"").trim(),e=String(E.note||"").trim(),r=String(E.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",n=Number(String(E.goldValue||"").trim()||0),i=Number(String(E.tickets||"").trim()||0);if(K){G="Select a matching guild member or Anonymous from the list before saving.",l(),O("manualTicketAccountSearchInput");return}if(!t){G="Select a matching guild member or Anonymous from the list before saving.",l(),O("manualTicketAccountSearchInput");return}if(!Number.isFinite(n)||n<0){G="Gold value must be zero or greater.",l();return}if(!Number.isFinite(i)||i<0){G="Tickets must be zero or greater.",l();return}const s=t.toLowerCase()==="anonymous";if(s&&Math.floor(i)>0){G="Anonymous cannot be awarded tickets. Use 0 tickets and enter a gold value.",l();return}if(Math.floor(n)===0&&Math.floor(i)===0){G=s?"Enter a gold value for Anonymous when tickets are 0.":"Enter gold or tickets. Both cannot be zero.",l();return}Mr=!0,G="",l();try{const o=await _("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:r,gold_value:Math.floor(n),tickets:Math.floor(i)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Failed to add manual entry.");ue=!1,E={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},$t="",B=-1,K=!1,await ne({silent:!0}),h("manual-ticket-added",o.message||"Manual entry added.",{ttlMs:p})}catch(o){G=k(o)}finally{Mr=!1,l()}}async function Hd(t=""){const e=String(t||"").trim();if(!!e){St=!0,Yt=e,Le=[],$r=!0,Ge=!1,Ee="",ut="",l();try{const r=await _("guildsync:request-roster-member-notes",{account_name:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load roster notes.");Le=Array.isArray(r.notes)?r.notes:[]}catch(r){Ee=k(r)}finally{$r=!1,l()}}}function On(){St=!1,Yt="",Le=[],$r=!1,Ge=!1,Ee="",ut="",l()}function Wd(){var r,n;if(!St)return;(r=document.querySelector("#closeRosterNotesButton"))==null||r.addEventListener("click",On);const t=document.querySelector("#rosterNotesNewNote");t&&t.addEventListener("input",i=>{ut=i.target.value||""}),(n=document.querySelector("#saveRosterNoteButton"))==null||n.addEventListener("click",()=>jd());const e=document.querySelector(".roster-notes-overlay");e&&e.addEventListener("click",i=>{i.target===e&&On()})}async function jd(){const t=String(ut||"").trim();if(!t){Ee="Enter a note before saving.",l();return}Ge=!0,Ee="",l();try{const e=await _("guildsync:add-roster-member-note",{account_name:Yt,note:t},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to save roster note.");e.note&&(Le=[...Le,e.note]),ut="";const r=W.find(n=>J(n.account_name)===J(Yt));r&&(r.note_count=Number(r.note_count||0)+1)}catch(e){Ee=k(e)}finally{Ge=!1,l()}}function qo(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>Mt());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{dt=!0,le="",l()});const r=document.querySelector("#rosterMemberSearch");r&&(r.addEventListener("input",o=>{Dr=o.target.value||"",Ln=o.target.selectionStart,En=o.target.selectionEnd,M=-1,l({restoreRosterSearchFocus:!0})}),r.addEventListener("keydown",zd)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{wl(o.dataset.rosterSortColumn||"account_name")})});const n=document.querySelector("#rosterRankFilter");n&&n.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(Pe.add(c),M=-1,l())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRosterRankFilter||"";Pe.delete(c),M=-1,l()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(ot.add(c),M=-1,l())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRosterLinkStatusFilter||"";ot.delete(c),M=-1,l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>_o(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))}),document.querySelectorAll("[data-open-roster-notes]").forEach(o=>{o.addEventListener("click",()=>Hd(o.dataset.openRosterNotes||""))}),Wd();const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{Dr="",Pe.clear(),ot.clear(),ae="",x="",M=-1,l()}),Yd()}function zd(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){M=-1;return}t.preventDefault(),t.key==="ArrowDown"?M=M<0?0:Math.min(M+1,e.length-1):t.key==="ArrowUp"&&(M=M<0?e.length-1:Math.max(M-1,0)),e.forEach((n,i)=>{n.classList.toggle("roster-search-active-row",i===M)});const r=e[M];r&&typeof r.scrollIntoView=="function"&&r.scrollIntoView({block:"nearest",inline:"nearest"})}function Yd(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{dt=!1,l()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",r=>{if(zt=r.target.value||"",z=-1,!zt.trim()){clearTimeout(fn),le="",V=[],Te="",_e=[],Ae=!1,l(),O("rosterHistorySearchInput");return}clearTimeout(fn),fn=setTimeout(()=>{Xd({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(V.length===0)return;r.preventDefault();const i=r.key==="ArrowDown"?1:-1;z=((z<0?0:z)+i+V.length)%V.length,l(),O("rosterHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=V[z>=0?z:0];n!=null&&n.account_name&&as(n.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(r=>{r.addEventListener("click",()=>{as(r.dataset.rosterHistoryAccount||"")})})}function Fo(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{ft=!1,l()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",r=>{me=r.target.value||"",Y=-1,Oe+=1;const n=Oe;if(clearTimeout(Ki),!me.trim()){de="",H=[],ht="",Ke="",Re=[],De=!1,l(),O("discordHistorySearchInput");return}Ki=setTimeout(()=>{Kd({auto:!0,keepFocus:!0,generation:n})},Kc)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(H.length===0)return;r.preventDefault();const i=r.key==="ArrowDown"?1:-1;Y=((Y<0?0:Y)+i+H.length)%H.length,l(),O("discordHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=H[Y>=0?Y:0];n!=null&&n.discord_id&&os(n.discord_id,$n(n))})),document.querySelectorAll("[data-discord-history-id]").forEach(r=>{r.addEventListener("click",()=>{os(r.dataset.discordHistoryId||"",r.dataset.discordHistoryName||"")})})}async function Kd(t={}){const e=Number.isInteger(t.generation)?t.generation:++Oe,r=me.trim();if(e===Oe){if(!r){de="",H=[],Y=-1,ht="",Ke="",Re=[],De=!1,l(),t.keepFocus&&O("discordHistorySearchInput");return}De=!0,de="",H=[],Y=-1,ht="",Ke="",Re=[],l(),t.keepFocus&&O("discordHistorySearchInput");try{const n=await _("guildsync:request-discord-member-history",{query:r},3e4);if(e!==Oe||r!==me.trim())return;if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search Discord member history.");H=Jd(n.matches),Y=H.length>0?0:-1}catch(n){if(e!==Oe||r!==me.trim())return;de=k(n)}finally{if(e!==Oe||r!==me.trim())return;De=!1,l(),t.keepFocus&&O("discordHistorySearchInput")}}}async function os(t,e="",r={}){const n=String(t||"").trim();if(!!n){ht=n,Ke=String(e||n).trim(),me=Ke,Re=[],De=!0,de="",l();try{const i=await _("guildsync:request-discord-member-history-events",{discord_id:n},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");Re=Qd(i.events)}catch(i){de=k(i)}finally{De=!1,r.keepLoading||l()}}}function Jd(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function Qd(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n,i,s,o,c,f,g,S,y,b;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((n=(r=e.old_value)!=null?r:e.oldValue)!=null?n:"").trim(),new_value:String((s=(i=e.new_value)!=null?i:e.newValue)!=null?s:"").trim(),event_timestamp:(f=(c=(o=e.event_timestamp)!=null?o:e.eventTimestamp)!=null?c:e.timestamp)!=null?f:"",event_datetime:(S=(g=e.event_datetime)!=null?g:e.eventDatetime)!=null?S:"",initiator:String((b=(y=e.initiator)!=null?y:e.initiatorName)!=null?b:"").trim(),source:String(e.source||"").trim()}}):[]}async function Xd(t={}){const e=zt.trim();if(!e){le="",V=[],z=-1,Te="",_e=[],Ae=!1,l(),t.keepFocus&&O("rosterHistorySearchInput");return}Ae=!0,le="",V=[],z=-1,Te="",_e=[],l(),t.keepFocus&&O("rosterHistorySearchInput");try{const r=await _("guildsync:request-roster-rank-history",{query:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search roster rank history.");V=Zd(r.matches),z=V.length>0?0:-1}catch(r){le=k(r)}finally{Ae=!1,l(),t.keepFocus&&O("rosterHistorySearchInput")}}async function as(t,e={}){const r=String(t||"").trim();if(!!r){Te=r,zt=r,_e=[],Ae=!0,le="",l();try{const n=await _("guildsync:request-roster-stream-history",{account_name:r},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster stream history.");_e=eu(n.events)}catch(n){le=k(n)}finally{Ae=!1,e.keepLoading||l()}}}function Zd(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function eu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(n=(r=e.timestamp)!=null?r:e.timestampS)!=null?n:"",officer:String(e.officer||"").trim()}}):[]}function Po(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n,i;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(r=e.joined)!=null?r:"",note_count:Number((i=(n=e.note_count)!=null?n:e.noteCount)!=null?i:0)||0}}).sort((e,r)=>e.account_name.localeCompare(r.account_name)):[]}function tu(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function jr(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function ti(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function ru(t={}){W=Po(t.members),Rr=t.last_refresh||new Date().toISOString(),R==="eso-members"&&l(),h("roster-data-updated",`Roster data updated. Loaded ${W.length} member record${W.length===1?"":"s"}.`,{ttlMs:p})}async function Mt(t={}){if(!!(d!=null&&d.connected)){Ne=!0,l();try{const e=await _("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");W=Po(e.members),Rr=e.last_refresh||Rr,t.silent||h("roster-data-loaded",`Loaded ${W.length} roster member${W.length===1?"":"s"}.`,{ttlMs:p})}catch(e){h("roster-data-error",k(e),{ttlMs:p})}finally{Ne=!1,l()}}}async function nu(t={}){var e;if(!!A()){if(!(d!=null&&d.connected)){h("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}Ne=!0,l();try{const r=await Bc(t);if(!(r!=null&&r.ok)){h("roster-data-pending",(r==null?void 0:r.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:p});return}const n={local_upload_id:Go(),authenticated_username:Q(),authenticated_discord_user_id:((e=m==null?void 0:m.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await Vo(n)}catch(i){throw iu(n),i}await Mt({silent:!0})}catch(r){h("roster-data-error",k(r),{ttlMs:p})}finally{Ne=!1,l()}}}function Go(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function ri(){try{const t=window.localStorage.getItem(xs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Uo(t){window.localStorage.setItem(xs,JSON.stringify(Array.isArray(t)?t:[]))}function iu(t){const e=String((t==null?void 0:t.local_upload_id)||Go()),r=ri().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Uo(r),h("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function su(t){const e=ri().filter(r=>(r==null?void 0:r.local_upload_id)!==t);Uo(e)}async function ou(){if(cn||!(d!=null&&d.connected)||!A())return;const t=ri();if(t.length!==0){cn=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!A())return;await Vo(e),su(e.local_upload_id)}}catch(e){h("roster-data-pending-error",`Pending roster upload retry failed: ${k(e)}`,{ttlMs:p})}finally{cn=!1}}}async function Vo(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await _("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const r=await Cc(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return h("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:p}),e}async function au(t={}){var e,r;if(!!A()){if(!(d!=null&&d.connected)){h("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}try{const n=await Gc(t);if(!(n!=null&&n.ok)){h("applications-data-info",(n==null?void 0:n.message)||"No application records were found to process.",{ttlMs:p});return}if((Array.isArray((e=n==null?void 0:n.data)==null?void 0:e.records)?n.data.records:[]).length===0){h("applications-data-info",`No application records were found in ${n.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:p});return}const s={local_upload_id:Ho(),authenticated_username:Q(),authenticated_discord_user_id:((r=m==null?void 0:m.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await jo(s)}catch(o){throw cu(s),o}}catch(n){h("applications-data-error",k(n),{ttlMs:p})}}}function Ho(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function ni(){try{const t=window.localStorage.getItem(qs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Wo(t){window.localStorage.setItem(qs,JSON.stringify(Array.isArray(t)?t:[]))}function cu(t){const e=String((t==null?void 0:t.local_upload_id)||Ho()),r=ni().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Wo(r),h("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function lu(t){const e=ni().filter(r=>(r==null?void 0:r.local_upload_id)!==t);Wo(e)}async function du(){if(ln||!(d!=null&&d.connected)||!A())return;const t=ni();if(t.length!==0){ln=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!A())return;await jo(e),lu(e.local_upload_id)}}catch(e){h("applications-data-pending-error",`Pending application upload retry failed: ${k(e)}`,{ttlMs:p})}finally{ln=!1}}}async function jo(t){var i;if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return h("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:p}),{ok:!0,sent_count:0,skipped_empty:!0};let r=0;for(const s of e){const o=await _("guildsync:eso-guild-application-message",{...t,record:s,recordKey:(s==null?void 0:s.recordKey)||"",message:uu(s)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Backend rejected the application data payload. Application data was not cleared.");r+=1}const n=await Uc(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return h("applications-data-sent",`Sent ${r} application record${r===1?"":"s"} to GuildSync backend.`,{ttlMs:p}),{ok:!0,sent_count:r}}function uu(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),r=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",n=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",s=String(t.applicationText||"_No application text captured._"),o=Object.entries(t).filter(([c])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(c)).map(([c,f])=>`**${c}:** ${fu(f)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${r}** ${n} an application from **${i}**.`,"","**Application text:**","```",s.slice(0,1500),"```",o.length>0?"":null,o.length>0?"**Full captured record fields:**":null,...o].filter(c=>c!==null).join(`
`)}function fu(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function hu(t={}){await au(t)}function pu(){const t=xn($),e=Cu(t,$),r=$!=="other";return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <button id="openManualBiweeklyTicketButton" class="bank-export-button" type="button" ${A()?"":'disabled title="Login required to add manual entries."'}>
            <span aria-hidden="true">\uFF0B</span>
            <span>Add Manual Entry</span>
          </button>
          ${ku()}
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${a(la(Vs))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${Be||!A()?"disabled":""} ${A()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Be?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${mn("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${mn("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${mn("other","?","Other","All other deposits")}
        </div>

        ${bu($)}

        <div class="bank-deposit-table-shell">
          <table class="bank-deposit-table${r?"":" bank-deposit-table-no-tickets"}">
            <thead>
              <tr>
                <th>Event ID</th>
                <th>Date / Time (Local)</th>
                <th>Depositor</th>
                <th>Amount Deposited</th>
                ${r?"<th>Tickets Awarded</th>":""}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(n=>Ou(n,r)).join(""):xu(r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${a(Vt(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${$==="monthly"?`<div>Raffle Pot: <strong>${a(Vt(Math.floor(e.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${$==="biweekly"?`<div>Raffle Pot: <strong>${a(Vt(ea(e.amount)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${$==="biweekly"?`<div>Draws: <strong>${a(String(Iu(e.amount)))}</strong></div>`:""}
          ${r?`<div>Total Tickets Awarded: <strong>${a(Jr(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${je?mu(xn(Xe)):""}
    </div>
  `}function mu(t){return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${a(ee(Xe))} Deposits</h3>
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
              ${t.length>0?t.map(e=>gu(e)).join(""):yu()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${a(Jo(t))}</textarea>
      </div>
    </div>
  `}function gu(t){return`
    <tr>
      <td>${a(t.displayName||"")}</td>
      <td>${a(String(ai(t,Xe)))}</td>
      <td>${a(String(Number(t.ticketAmount)||0))}</td>
      <td>${a(t.note||"")}</td>
    </tr>
  `}function yu(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${a(ee(Xe))}.</td>
    </tr>
  `}function bu(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=Qo(t),r=Or(t),n=r<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${u(ee(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${a(ee(t))} Raffle Period ${r===0?"(Current)":`(${Math.abs(r)} period${Math.abs(r)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${a(wr(e.salesStart))} through ${a(wr(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${a(wr(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${n?"":"disabled"} aria-label="Next ${u(ee(t))} raffle period">\u203A</button>
    </div>
  `}function mn(t,e,r,n){const i=$===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${u(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${a(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${a(r)}</span>
        <span class="bank-section-subtitle">${a(n)}</span>
      </span>
    </button>
  `}function ku(){if(!A())return"";const t=zr(),e=or(),r=zo(),n=t+e+r;if(n<=0)return"";const i=`Desktop Client Required${n>0?` (${n})`:""}`,s="Deposit mail checkout and ESO SavedVariables writing are disabled in the web client. Use the GuildSync desktop client for this mail workflow.";return`
    <button id="checkoutDepositMailButton" class="bank-export-button deposit-mail-button deposit-mail-status-only" type="button" data-deposit-mail-action="disabled" aria-disabled="true" title="${u(s)}" aria-label="${u(`${i}. ${s}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${a(i)}</span>
      <span class="deposit-mail-web-disabled" aria-hidden="true">Web Disabled</span>
    </button>
  `}function or(){return ar().reduce((t,e)=>t+Nt(e.records).length,0)}function vu(){const t=(m==null?void 0:m.user)||{};return new Set([Q(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function Su(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?vu().has(e):!1}function zo(){return A()?P.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),r=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&r==="written_to_eso"&&Su(t)}).length:0}function zr(){return P.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),r=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&r==="unsent"}).length}function wu(t){const e=String(t||"").trim();return P.find(r=>String(r.eventId||"").trim()===e)||null}function ii(t){const e=String(t||"other").toLowerCase(),r=["biweekly","monthly","other"],n=r.includes(e)?e:"other",i=r.filter(s=>s!==n);return[i[0]||"biweekly",n,i[1]||"other"]}function si(t={},e="other"){const r=String(e||"other").toLowerCase(),n=Number(t==null?void 0:t.amount)||0;return r===String((t==null?void 0:t.type)||"").toLowerCase()?Number(t==null?void 0:t.ticketAmount)||0:r==="biweekly"?Math.floor(n/500):r==="monthly"?Math.floor(n/2500):0}function Yo(t={},e="other",r=""){const n=String(t.type||"other").toLowerCase(),i=ee(n),s=ee(e),o=Q()||"Unknown user",c=[`Moved from ${i} to ${s} by ${o}.`,`Ref ${t.eventId||""}`],f=String(r||"").trim();return f&&c.push(`Reason: ${f}`),c.join(`
`)}function _u(t){const e=wu(t);if(!e){h("banking-move-missing","Could not find the selected banking entry.",{ttlMs:p});return}const r=String(e.type||"other").toLowerCase();oe=e,N={targetType:r,note:"",tickets:String(si(e,r))},se="",mt=!1,Dt=!0,l()}function Ir(){Dt=!1,mt=!1,se="",oe=null,N={targetType:"other",note:"",tickets:""},l()}function Au(){const t=oe||{},e=String(t.type||"other").toLowerCase(),r=ee(e),n=ii(e);let i=String(N.targetType||n[0]||"other").toLowerCase();n.includes(i)||(i=n[0]||"other",N.targetType=i);const s=Yo(t,i,N.note);return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="bankingMoveDialogTitle">
      <div class="roster-history-dialog manual-ticket-dialog banking-move-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="bankingMoveDialogTitle">Move Banking Entry</h3>
            <p>Move this deposit to a different banking section while preserving a reference to the original event.</p>
          </div>
          <button id="closeBankingMoveDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${se?`<div class="discord-data-error">${a(se)}</div>`:""}

        <div class="manual-ticket-form banking-move-form">
          <div class="banking-move-current-entry">
            <div><strong>Current Type:</strong> ${a(r)}</div>
            <div><strong>Event ID:</strong> ${a(t.eventId||"")}</div>
            <div><strong>Depositor:</strong> ${a(t.displayName||"")}</div>
            <div><strong>Amount:</strong> ${a(Vt(t.amount))} \u{1FA99}</div>
          </div>

          <div class="banking-move-target-row banking-move-slider-row">
            <span>Move To</span>
            <div class="banking-move-slider-control" role="radiogroup" aria-label="Move banking entry destination">
              <div class="banking-move-slider-labels">
                ${n.map(o=>`
                  <button
                    class="banking-move-slider-label ${i===o?"selected":""} ${o===e?"current":""}"
                    type="button"
                    role="radio"
                    aria-checked="${i===o?"true":"false"}"
                    data-banking-move-target="${u(o)}"
                  >
                    <strong>${a(ee(o))}</strong>
                    <span>${o===e?"Current / restore original values":`${a(String(si(t,o)))} tickets`}</span>
                  </button>
                `).join("")}
              </div>
            </div>
          </div>

          <div class="banking-move-compact-row">
            <label class="manual-ticket-count-field banking-move-ticket-field">
              <span>Tickets Awarded</span>
              <input id="bankingMoveTicketsInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${u(N.tickets)}" ${i==="other"?"disabled":""} />
            </label>

            <label class="manual-ticket-note-field banking-move-note-field">
              <span>Move Note</span>
              <textarea id="bankingMoveNoteInput" class="discord-search-input manual-ticket-note-input banking-move-note-input" rows="1" placeholder="Optional reason for this move">${a(N.note)}</textarea>
            </label>
          </div>

          <div class="roster-history-muted banking-move-generated-note">${a(s).replace(/\n/g,"<br>")}</div>

          <div class="manual-ticket-actions banking-move-actions">
            <button id="saveBankingMoveButton" class="refresh-discord-button banking-move-submit-button" type="button" ${mt||i===e?"disabled":""}>${mt?"MOVING...":i===e?"SELECT A SIDE TO MOVE":"MOVE"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Lu(){var r,n,i,s;if(!Dt)return;(r=document.querySelector("#closeBankingMoveDialogButton"))==null||r.addEventListener("click",()=>Ir());function t(o){const c=String(o||"other").toLowerCase(),f=String((oe==null?void 0:oe.type)||"other").toLowerCase(),g=ii(f);N.targetType=g.includes(c)?c:f,N.tickets=String(si(oe||{},N.targetType)),l()}document.querySelectorAll("[data-banking-move-target]").forEach(o=>{o.addEventListener("click",()=>t(o.dataset.bankingMoveTarget))}),(n=document.querySelector("#bankingMoveTicketsInput"))==null||n.addEventListener("input",o=>{const c=String(o.target.value||"").replace(/\D/g,"");o.target.value!==c&&(o.target.value=c),N.tickets=c}),(i=document.querySelector("#bankingMoveNoteInput"))==null||i.addEventListener("input",o=>{N.note=o.target.value||"";const c=document.querySelector(".banking-move-generated-note");c&&(c.innerText=Yo(oe||{},N.targetType||"other",N.note))}),(s=document.querySelector("#saveBankingMoveButton"))==null||s.addEventListener("click",()=>Eu());const e=document.querySelector(".roster-history-overlay");e&&e.addEventListener("click",o=>{o.target===e&&Ir()})}async function Eu(){const t=oe;if(!(t!=null&&t.eventId)){se="No banking entry is selected.",l();return}const e=String(t.type||"other").toLowerCase(),r=ii(e),n=String(N.targetType||r[0]||"other").toLowerCase();if(!r.includes(n)||n===e){se="Select one of the side destinations before moving this entry.",l();return}const i=n==="other"?0:Math.floor(Number(String(N.tickets||"").trim()||0));if(!Number.isFinite(i)||i<0){se="Tickets must be zero or greater.",l();return}mt=!0,se="",l();try{const s=await _("guildsync:move-banking-entry",{event_id:t.eventId,target_type:n,tickets:i,note:N.note||""},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to move banking entry.");Ir(),await ne({silent:!0}),h("banking-entry-moved",s.message||"Banking entry moved.",{ttlMs:p})}catch(s){mt=!1,se=k(s),l()}}function Ko(){if(R!=="more")return;Lu(),document.querySelectorAll("[data-bank-entry-move]").forEach(o=>{o.addEventListener("click",()=>_u(o.dataset.bankEntryMove||""))}),document.querySelectorAll("[data-bank-section]").forEach(o=>{o.addEventListener("click",()=>{$=o.dataset.bankSection||"biweekly",l()})}),document.querySelectorAll("[data-bank-export-section]").forEach(o=>{o.addEventListener("click",()=>{Xe=(o.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",je=!0,l()})}),document.querySelectorAll("[data-bank-period-move]").forEach(o=>{o.addEventListener("click",()=>{$u(o.dataset.bankPeriodMove||""),l()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{je=!1,l()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>Ru());const r=document.querySelector(".bank-export-overlay");r&&r.addEventListener("click",o=>{o.target===r&&(je=!1,l())});const n=document.querySelector("#openManualBiweeklyTicketButton");n&&n.addEventListener("click",async()=>{if(!A()){h("manual-ticket-login-required","Login required to add manual entries.",{ttlMs:p});return}ue=!0,G="",$t=E.accountName||"",K=!1,B=-1,W.length===0&&(d==null?void 0:d.connected)&&A()&&await Mt({silent:!0}),l()});const i=document.querySelector("#checkoutDepositMailButton");i&&i.addEventListener("click",()=>{i.dataset.depositMailAction==="checkout"&&i.getAttribute("aria-disabled")!=="true"&&Wu()});const s=document.querySelector("#refreshBankingDataButton");s&&s.addEventListener("click",()=>{if(!A()){h("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:p});return}ra({key:"banking"})})}function Jo(t){const e=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const r of t)e.push([r.displayName||"",String(ai(r,Xe)),String(Number(r.ticketAmount)||0),r.note||""]);return e.map(r=>r.map(Yr).join("	")).join(`
`)}function Yr(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function Kr(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const r=document.createElement("textarea");r.value=e,r.setAttribute("readonly","readonly"),r.style.position="fixed",r.style.left="0",r.style.top="0",r.style.width="1px",r.style.height="1px",r.style.opacity="0",r.style.pointerEvents="none",r.style.zIndex="-1",document.body.appendChild(r),r.focus(),r.select(),r.setSelectionRange(0,r.value.length);let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r)}return n}async function Ru(){const t=xn(Xe),e=Jo(t);if(await Kr(e)){h("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#bankingExportTsv");n&&(n.focus(),n.select()),h("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:p})}function xn(t){return P.filter(e=>e.type===t).filter(e=>Du(t,e)).sort((e,r)=>(Number(r.time)||0)-(Number(e.time)||0))}function Du(t,e){if(t==="other")return!0;const r=Number(e==null?void 0:e.time)||0;if(r<=0)return!1;const n=Qo(t);return r>=n.salesStart&&r<=n.salesEnd}function Or(t){return Number(Rn[t])||0}function $u(t){if($!=="biweekly"&&$!=="monthly")return;const e=Or($);if(t==="previous"){Rn[$]=e-1;return}t==="next"&&e<0&&(Rn[$]=e+1)}function Qo(t){const e=Math.floor(Date.now()/1e3);if(t==="monthly"){const i=Mu(e,Or(t));return{salesStart:Zo(i)+1,salesEnd:i,raffleTime:i+Nr}}const r=Ce;let n=Xo(e);return n+=Or(t)*r,{salesStart:n-r+1,salesEnd:n,raffleTime:n+Nr}}function Xo(t){const e=Ce;let r=Jc;for(;r-e>t;)r-=e;for(;r<t;)r+=e;return r}function Mu(t,e=0){let r=Nu(t),n=Number(e)||0;for(;n<0;)r=Zo(r),n+=1;for(;n>0;)r=Tu(r),n-=1;return r}function Nu(t){let e=Xo(t);for(;!oi(e);)e+=Ce;return e}function Zo(t){let e=t-Ce;for(;!oi(e);)e-=Ce;return e}function Tu(t){let e=t+Ce;for(;!oi(e);)e+=Ce;return e}function oi(t){const e=t+Nr,r=t+Ce+Nr;return cs(e)!==cs(r)}function cs(t){var s,o;const e=new Date(Number(t||0)*1e3);if(Number.isNaN(e.getTime()))return"";const r=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit"}).formatToParts(e),n=((s=r.find(c=>c.type==="year"))==null?void 0:s.value)||"",i=((o=r.find(c=>c.type==="month"))==null?void 0:o.value)||"";return`${n}-${i}`}function Bu(t=$){const e=String(t||"").toLowerCase();return e!=="monthly"&&e!=="biweekly"?0:"auto"}function ai(t={},e=$){const r=Number(t.amount)||0;if(!Bu(e))return r;const n=Math.abs(Math.trunc(r))%10,i=n===1||n===3?n:0;return i>0&&r>i?r-i:r}function Cu(t,e=$){return t.reduce((r,n)=>(r.amount+=ai(n,e),r.tickets+=Number(n.ticketAmount)||0,r),{amount:0,tickets:0})}function ea(t){const e=Math.ceil((Number(t)||0)/2);return e<=0?0:Math.ceil(e/2e5)*2e5}function Iu(t){const e=ea(t);return e>0?e/2e5:0}function Ou(t,e=!0){return`
    <tr>
      <td>${a(t.note||t.eventId||"")}</td>
      <td>${a(wr(t.time))}</td>
      <td>${a(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${a(Vt(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td><strong class="bank-ticket-amount">${a(Jr(t.ticketAmount))}</strong></td>`:""}
      <td><button class="bank-entry-move-button" type="button" data-bank-entry-move="${u(t.eventId||"")}">Move</button></td>
    </tr>
  `}function xu(t=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?"6":"5"}">No ${a(ee($))} deposits found for this ${$==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function ee(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function wr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Vt(t){return(Number(t)||0).toLocaleString()}function Jr(t){return(Number(t)||0).toLocaleString()}function Nt(t){return Array.isArray(t)?t.map(e=>{var n,i,s,o,c,f,g,S,y,b,q,he,Tt,Ze,mi,gi,yi,bi,ki,vi,Si,wi,_i,Ai,Li,Ei,Ri,Di,$i,Mi,Ni,Ti,Bi,Ci,Ii,Oi,xi,qi,Fi,Pi,Gi;const r=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:r==="monthly"||r==="biweekly"||r==="other"?r:"other",eventId:String((i=(n=e==null?void 0:e.eventId)!=null?n:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((o=(s=e==null?void 0:e.time)!=null?s:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((f=(c=e==null?void 0:e.displayName)!=null?c:e==null?void 0:e.display_name)!=null?f:"").trim(),amount:Number((g=e==null?void 0:e.amount)!=null?g:0)||0,ticketAmount:Number((y=(S=e==null?void 0:e.ticketAmount)!=null?S:e==null?void 0:e.ticket_amount)!=null?y:0)||0,note:String((b=e==null?void 0:e.note)!=null?b:"").trim(),dataSource:String((he=(q=e==null?void 0:e.dataSource)!=null?q:e==null?void 0:e.data_source)!=null?he:"").trim(),emailRequested:Boolean((Tt=e==null?void 0:e.emailRequested)!=null?Tt:e==null?void 0:e.email_requested),mailStatus:String((mi=(Ze=e==null?void 0:e.mailStatus)!=null?Ze:e==null?void 0:e.mail_status)!=null?mi:"").trim(),mailRequestId:String((yi=(gi=e==null?void 0:e.mailRequestId)!=null?gi:e==null?void 0:e.mail_request_id)!=null?yi:"").trim(),mailBatchId:String((ki=(bi=e==null?void 0:e.mailBatchId)!=null?bi:e==null?void 0:e.mail_batch_id)!=null?ki:"").trim(),checkedOutBy:String((Si=(vi=e==null?void 0:e.checkedOutBy)!=null?vi:e==null?void 0:e.checked_out_by)!=null?Si:"").trim(),checkedOutAt:String((_i=(wi=e==null?void 0:e.checkedOutAt)!=null?wi:e==null?void 0:e.checked_out_at)!=null?_i:"").trim(),checkoutExpiresAt:String((Li=(Ai=e==null?void 0:e.checkoutExpiresAt)!=null?Ai:e==null?void 0:e.checkout_expires_at)!=null?Li:"").trim(),writtenToEsoAt:String((Ri=(Ei=e==null?void 0:e.writtenToEsoAt)!=null?Ei:e==null?void 0:e.written_to_eso_at)!=null?Ri:"").trim(),sentAt:String(($i=(Di=e==null?void 0:e.sentAt)!=null?Di:e==null?void 0:e.sent_at)!=null?$i:"").trim(),failedReason:String((Ni=(Mi=e==null?void 0:e.failedReason)!=null?Mi:e==null?void 0:e.failed_reason)!=null?Ni:"").trim(),recipient:String((Ii=(Ci=(Bi=(Ti=e==null?void 0:e.recipient)!=null?Ti:e==null?void 0:e.account_name)!=null?Bi:e==null?void 0:e.displayName)!=null?Ci:e==null?void 0:e.display_name)!=null?Ii:"").trim(),subject:String((qi=(xi=(Oi=e==null?void 0:e.subject)!=null?Oi:e==null?void 0:e.mailSubject)!=null?xi:e==null?void 0:e.mail_subject)!=null?qi:"").trim(),body:String((Gi=(Pi=(Fi=e==null?void 0:e.body)!=null?Fi:e==null?void 0:e.mailBody)!=null?Pi:e==null?void 0:e.mail_body)!=null?Gi:"").trim()}}):[]}function qu(t){const e=new Map;for(const r of P)r.eventId&&e.set(r.eventId,r);for(const r of t)!r.eventId||e.set(r.eventId,r);P=Array.from(e.values()).sort((r,n)=>(Number(n.time)||0)-(Number(r.time)||0))}function ta(){Vs=new Date().toISOString()}async function Fu(t={}){!(t!=null&&t.ok)||(P=Nt(t.entries),ta(),R==="more"&&l(),h("banking-data-updated",`Banking data updated. Loaded ${P.length} deposit record${P.length===1?"":"s"}.`,{ttlMs:p}))}async function ne(t={}){const e=Boolean(t.silent),r=Boolean(t.background);if(!(d!=null&&d.connected)){e||h("banking-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}r||(Be=!0,l());try{const n=await _("guildsync:request-banking-data",{},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve banking data.");P=Nt(n.entries),ta(),e||h("banking-data",`Loaded ${P.length} banking deposit record${P.length===1?"":"s"}.`,{ttlMs:p})}catch(n){e||h("banking-data-error",k(n),{ttlMs:p})}finally{r||(Be=!1),l()}}async function ls(){!(d!=null&&d.connected)||!A()||Be||(await ne({silent:!0,background:!0}),zr()<=0&&or()>0&&(ie.running?l():ju("availability-refresh")))}function Pu(){rt&&clearInterval(rt),ls(),rt=window.setInterval(ls,jc)}function Gu(){rt&&(clearInterval(rt),rt=null)}async function Uu(t={}){if(!!A()){if(!(d!=null&&d.connected)){h("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:p});return}try{const e=await qc(t);if(!(e!=null&&e.ok))return;const r=Array.isArray(e.ackEntries)?e.ackEntries:[];if(r.length===0)return;const n=await _("guildsync:mark-deposit-mail-sent",{mail_ack:r,mail_request_ids:r.map(o=>(o==null?void 0:o.mail_request_id)||(o==null?void 0:o.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(n.mail_request_ids)?n.mail_request_ids:Array.isArray(n.mailRequestIds)?n.mailRequestIds:[];if(i.length===0){h("deposit-mail-ack-none",n.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:p});return}const s=await Fc(i);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");h("deposit-mail-ack-sent",s.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:p}),await ne({silent:!0})}catch(e){h("deposit-mail-ack-error",k(e),{ttlMs:p})}}}async function Vu(){if(!dn){dn=!0;try{const t=await Pc();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&h("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:p})}catch(t){h("deposit-mail-ack-cleanup-error",k(t),{ttlMs:p})}finally{dn=!1}}}async function ra(t={}){var e,r;if(!!A()){if(!(d!=null&&d.connected)){h("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}Be=!0,l();try{const n=await Nc(t);if(!(n!=null&&n.ok)){h("banking-data-pending",(n==null?void 0:n.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:p});return}const i=Nt((e=n==null?void 0:n.data)==null?void 0:e.entries);qu(i);const s=new Date().toISOString(),o={local_upload_id:sa(),authenticated_username:Q(),authenticated_discord_user_id:((r=m==null?void 0:m.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:s,data:n.data||{}};try{await aa(o)}catch(c){throw Ku(o),c}await ne({silent:!0})}catch(n){h("banking-data-error",k(n),{ttlMs:p})}finally{Be=!1,l()}}}function na(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function ar(){try{const t=window.localStorage.getItem(Os),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function ia(t){window.localStorage.setItem(Os,JSON.stringify(Array.isArray(t)?t:[]))}function Hu(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||na()),r=ar().filter(n=>String((n==null?void 0:n.mail_batch_id)||(n==null?void 0:n.mailBatchId)||(n==null?void 0:n.local_batch_id)||"")!==e);r.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),ia(r)}function ds(t){const e=String(t||"").trim();if(!e)return;const r=ar().filter(n=>String((n==null?void 0:n.mail_batch_id)||(n==null?void 0:n.mailBatchId)||(n==null?void 0:n.local_batch_id)||"")!==e);ia(r)}async function Wu(){if(!A()){h("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:p});return}if(!(d!=null&&d.connected)){h("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:p});return}const t=ar(),e=zr();if(t.length>0&&e<=0){await bt();return}l();try{const r=await _("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail checkout request.");const n=Nt(r.records);if(n.length===0){h("deposit-mail-none",r.message||"No unsent deposit mail is available.",{ttlMs:p}),await ne({silent:!0});return}const i={mail_batch_id:r.mail_batch_id||r.mailBatchId||na(),checked_out_by:r.checked_out_by||r.checkedOutBy||Q(),checked_out_at:new Date().toISOString(),records:n};Hu(i),await bt()}catch(r){h("deposit-mail-error",k(r),{ttlMs:p})}finally{l()}}function ju(t=""){nt||vr||!A()||or()<=0||ie.running||(nt=window.setTimeout(()=>{nt=null,bt()},100))}async function bt(){if(nt&&(window.clearTimeout(nt),nt=null),vr||!A())return;const t=ar();if(t.length!==0){if(await qn({silent:!0}),ie.running){h("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:p}),l();return}vr=!0,l();try{for(const e of t){const r=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),n=Nt(e==null?void 0:e.records);if(n.length===0){ds(r);continue}const i=await xc(n);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(d!=null&&d.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const s=await _("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:r,event_ids:i.eventIds||n.map(o=>o.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend did not confirm deposit mail was marked written_to_eso.");ds(r),h("deposit-mail-written",i.message||`Wrote ${n.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:p})}await ne({silent:!0})}catch(e){h("deposit-mail-write-error",k(e),{ttlMs:p})}finally{vr=!1,l()}}}async function qn(t={}){try{const e=Boolean(ie.running),r=await Oc();ie={running:Boolean(r==null?void 0:r.running),message:String((r==null?void 0:r.message)||"")},ie.running||await Vu(),e&&!ie.running&&(h("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:p}),await bt()),e!==ie.running&&l()}catch(e){t.silent||h("eso-status-error",k(e),{ttlMs:p})}}function zu(){tt&&clearInterval(tt),qn({silent:!0}).then(()=>{!ie.running&&or()>0&&bt()}),tt=window.setInterval(()=>qn({silent:!0}),Wc)}function Yu(){tt&&(clearInterval(tt),tt=null)}function sa(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function ci(){try{const t=window.localStorage.getItem(Is),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function oa(t){window.localStorage.setItem(Is,JSON.stringify(Array.isArray(t)?t:[]))}function Ku(t){const e=String((t==null?void 0:t.local_upload_id)||sa()),r=ci().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),oa(r),h("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Ju(t){const e=ci().filter(r=>(r==null?void 0:r.local_upload_id)!==t);oa(e)}async function Qu(){if(an||!(d!=null&&d.connected)||!A())return;const t=ci();if(t.length!==0){an=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!A())return;await aa(e),Ju(e.local_upload_id)}}catch(e){h("banking-data-pending-error",`Pending banking upload retry failed: ${k(e)}`,{ttlMs:p})}finally{an=!1}}}async function aa(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await _("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const r=await Tc(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return h("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:p}),e}function ca(){if(R!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>Xu());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{ft=!0,de="",l(),O("discordHistorySearchInput")});const r=document.querySelector("#discordMemberSearch");r&&r.addEventListener("input",o=>{Er=o.target.value||"",_n=o.target.selectionStart,An=o.target.selectionEnd,l({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{sf(o.dataset.discordSortColumn||"username")})});const n=document.querySelector("#discordRoleFilter");n&&n.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(it.add(c),l())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRoleFilter||"";it.delete(c),l()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(st.add(c),l())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeDiscordLinkStatusFilter||"";st.delete(c),l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>_o(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{Er="",it.clear(),st.clear(),l()})}async function Xu(){var t,e;if(!(d!=null&&d.connected)){h("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:p});return}Lr=!0,l(),h("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const r=await _("guildsync:request-discord-data-refresh",{requested_by:((t=m==null?void 0:m.user)==null?void 0:t.display_name)||((e=m==null?void 0:m.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to request Discord data refresh.");h("discord-refresh-requested",r.message||"Discord data refresh completed.",{ttlMs:p}),await li({silent:!0})}catch(r){h("discord-refresh-error",k(r),{ttlMs:p})}finally{Lr=!1,l()}}async function Zu(){if(!(d!=null&&d.connected))return;const t=await _("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(Ur=t.value||null)}async function ef(t={}){if(!!(t!=null&&t.ok)){F=di(t.members),t.last_refresh&&(Ur=t.last_refresh);try{await Zu()}catch{}R==="discord-members"&&l(),h("discord-data-updated",`Discord data updated. Loaded ${F.length} member record${F.length===1?"":"s"}.`,{ttlMs:p})}}async function li(t={}){const e=Boolean(t.silent);if(!(d!=null&&d.connected)){h("discord-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}Wt=!0,l();try{const[r,n]=await Promise.all([_("guildsync:request-discord-data-date",{}),_("guildsync:request-discord-member-dataJSON",{})]);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord refresh date.");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord member data.");Ur=r.value||null,F=di(n.members),e||h("discord-data",`Loaded ${F.length} Discord member record${F.length===1?"":"s"}.`,{ttlMs:p})}catch(r){h("discord-data-error",k(r),{ttlMs:p})}finally{Wt=!1,l()}}function _(t,e={},r=3e4){return new Promise((n,i)=>{if(!(d!=null&&d.connected)){i(new Error("GuildSync websocket is not connected."));return}let s=!1;const o=window.setTimeout(()=>{s||(s=!0,i(new Error(`${t} timed out.`)))},r);d.emit(t,e,c=>{s||(s=!0,window.clearTimeout(o),n(c))})})}function di(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(tf).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,r)=>Jt(e).localeCompare(Jt(r),void 0,{sensitivity:"base"})):[]}function tf(t){var i,s;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),r=String(t.role_name||t.name||"Unnamed Role").trim(),n=(s=(i=t.role_color)!=null?i:t.color)!=null?s:null;return{role_id:e,role_name:r||"Unnamed Role",role_color:n}}function rf(){const t=Er.trim().toLowerCase(),e=Array.from(it),r=F.filter(n=>{if(t&&![n.username,n.global_name,n.server_nickname,n.discord_id,...n.roles.map(s=>s.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(n.roles.map(s=>s.role_name));if(!e.every(s=>i.has(s)))return!1}return!!Xs(st,El(n))});return nf(r)}function nf(t){const e=Fe==="desc"?-1:1;return[...t].sort((r,n)=>{const i=us(r,jt),s=us(n,jt),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:Jt(r).localeCompare(Jt(n),void 0,{sensitivity:"base",numeric:!0})})}function us(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(r=>r.role_name||"").filter(Boolean).sort((r,n)=>r.localeCompare(n,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function sf(t){const r=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";jt===r?Fe=Fe==="asc"?"desc":"asc":(jt=r,Fe="asc"),l()}function hr(t,e){const r=jt===t,n=Fe==="asc"?"ascending":"descending",i=r?Fe==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${r?n:"none"}">
      <button
        class="discord-sort-header${r?" active":""}"
        type="button"
        data-discord-sort-column="${u(t)}"
        title="Sort ${u(e)} ${r&&Fe==="asc"?"descending":"ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function of(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(_n)?_n:t.value.length,r=Number.isInteger(An)?An:e;t.setSelectionRange(e,r)}}function af(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(Ln)?Ln:t.value.length,r=Number.isInteger(En)?En:e;t.setSelectionRange(e,r)}}function cf(){const t=new Set;for(const e of F)for(const r of e.roles)r.role_name&&t.add(r.role_name);return Array.from(t).sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function lf(t){const e=hf(t),r=Jt(t),n=t.roles||[];return`
    <tr data-discord-user-id="${u(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${u(e)}" alt="${u(r)}" />`:`<span>${a(ba(r))}</span>`}
          </div>
          <span>${a(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${a(t.global_name||"")}</td>
      <td>${a(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${n.length>0?n.map(i=>uf(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${So({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function df(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${a(Wt?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function uf(t){const e=Qr(t.role_color),r=hi(e),n=fi(e,r);return`
    <span
      class="discord-role-badge"
      title="${u(t.role_name)}"
      style="${n}"
    >${a(t.role_name)}</span>
  `}function ff(t){const e=ui(t),r=Qr(e==null?void 0:e.role_color),n=hi(r),i=fi(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-role-filter="${u(t)}"
      style="${i}"
      title="Remove ${u(t)} filter"
    >
      <span>${a(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function ui(t){for(const e of F){const r=e.roles.find(n=>n.role_name===t);if(r)return r}return null}function Qr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function fi(t,e){return[`--role-fill-top: ${fs(t,"#ffffff",.16)}`,`--role-fill-bottom: ${fs(t,"#000000",.1)}`,`--role-fill-glow: ${hs(t,.28)}`,`--role-fill-edge: ${hs(t,.46)}`,`color: ${e}`].join("; ")}function fs(t,e,r){const n=pr(t)||pr("#64748b"),i=pr(e)||pr("#ffffff"),s=Math.max(0,Math.min(1,Number(r)||0)),o=Math.round(n.red+(i.red-n.red)*s),c=Math.round(n.green+(i.green-n.green)*s),f=Math.round(n.blue+(i.blue-n.blue)*s);return`#${gn(o)}${gn(c)}${gn(f)}`}function pr(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function gn(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function hs(t,e){const r=String(t||"#64748b").replace("#",""),n=/^[0-9a-f]{6}$/i.test(r)?r:"64748b",i=parseInt(n.slice(0,2),16),s=parseInt(n.slice(2,4),16),o=parseInt(n.slice(4,6),16);return`rgba(${i}, ${s}, ${o}, ${e})`}function hi(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const r=parseInt(e.slice(0,2),16),n=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(r*299+n*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function hf(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!r)return"";const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function Jt(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function la(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function _r(){const t=document.querySelector("#discordArea");if(!!t){if(cr(!1),A()){const e=m.user||{},r=Q(),n=Nf(e),i=ba(r);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${n?`<img src="${u(n)}" alt="${u(r)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${a(i)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const s=document.querySelector("#discordAvatarButton");s.addEventListener("contextmenu",o=>{o.preventDefault(),ps()}),s.addEventListener("click",()=>{ps()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",bf)}}function ps(){if(Zt){cr();return}yf()}function pf(t=we){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],r=String((t==null?void 0:t.directory)||"").trim(),n=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const s=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),o=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),c=String((i==null?void 0:i.filePath)||(r?`${r}\\${o}`:o)).trim(),f=(i==null?void 0:i.enabled)!==!1,g=n&&f,S=`profileFileWatchToggle-${gf(s||o)}`;return`
          <label class="profile-filewatch-item ${f?"enabled":"disabled"}" title="${u(c)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${a(o)}</span>
              <span class="profile-filewatch-state">${g?"Watching":f?"On":"Off"}</span>
            </span>
            <input
              id="${u(S)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${u(s)}"
              ${f?"checked":""}
              aria-label="Turn file watch ${f?"off":"on"} for ${u(o)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function pi(){var n,i,s;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=Q(),r=((n=m.user)==null?void 0:n.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${a(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${a(Tf(r))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${a(Gr)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${we!=null&&we.watching?"Active":"Stopped"}</span>
        </div>
        ${pf()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(i=document.querySelector("#discordLogoutButton"))==null||i.addEventListener("click",kf),(s=document.querySelector("#associateTicketReportButton"))==null||s.addEventListener("click",()=>{cr(!1),no()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",mf)})}async function da(){try{we=await Pr(),Zt&&pi()}catch(t){h("file-watcher-error",k(t),{ttlMs:p})}}async function mf(t){var n;const e=t.currentTarget,r=String(((n=e==null?void 0:e.dataset)==null?void 0:n.filewatchKey)||"").trim();if(!!r)try{e.disabled=!0,we=await Mc(r,e.checked),await lt({silent:!0}),Zt&&pi()}catch(i){h("file-watcher-error",k(i),{ttlMs:p}),await da()}}function gf(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function yf(){const t=document.querySelector("#discordProfileMenu");!t||(pi(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),Zt=!0,da(),setTimeout(()=>{window.addEventListener("click",ua),window.addEventListener("keydown",fa)},0))}function cr(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),Zt=!1,t&&(window.removeEventListener("click",ua),window.removeEventListener("keydown",fa))}function ua(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&cr()}function fa(t){t.key==="Escape"&&cr()}async function bf(){try{h("auth","Opening Discord login...",{ttlMs:p});const t=await Lc();t!=null&&t.status_message&&h("auth",t.status_message,{ttlMs:p}),$e()}catch(t){h("auth-error",k(t),{ttlMs:p}),$e()}}async function kf(){try{m=await Rc(),h("auth",m.status_message||"Logged out.",{ttlMs:p}),Hs(),Ht(),await lt()}catch(t){h("auth-error",k(t),{ttlMs:p}),$e()}}function Ht(){const t=m.socket_url||"https://guildsync.perdues.me";vf(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};m!=null&&m.token&&(e.auth={token:m.token}),d=br(t,e),d.on("connect",()=>{$e(),ha(),R==="discord-members"&&li({silent:!0}),R==="eso-members"&&Mt({silent:!0}),R==="more"&&ne({silent:!0}),Qu(),bt(),zu(),Pu(),ou(),du(),Sf()}),d.on("connect_error",()=>{$e(),xr()}),d.on("disconnect",()=>{$e(),xr(),Yu(),Gu()}),d.on("guildsync:version-status",r=>{wf(r)}),d.on("guildsync:discord-member-data-updated",r=>{ef(r)}),d.on("guildsync:banking-data-updated",r=>{Fu(r)}),d.on("guildsync:roster-data-updated",r=>{ru(r)}),d.on("guildsync:member-links-updated",(r={})=>{Array.isArray(r.links)&&(L=r.links,(R==="discord-members"||R==="eso-members"||R==="settings"||Ie)&&l())}),d.on("guildsync:discord-refresh-status",(r={})=>{const n=String(r.message||"").trim();n&&h("discord-refresh-status",n,{ttlMs:p})})}function vf(t=!0){xr(),d&&(d.disconnect(),d=null),t&&$e()}function ha(){!(d!=null&&d.connected)||d.emit("guildsync:client-version",{version:Gr,platform:pa(),client_type:"wails"})}function Sf(){xr(),kr=window.setInterval(()=>{ha()},Hc)}function xr(){kr&&(window.clearInterval(kr),kr=null)}function wf(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",r=t.download&&typeof t.download=="object"?t.download:{};pe={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||r.url||"").trim(),fileName:String(t.download_file_name||r.file_name||"").trim(),platformLabel:String(r.label||t.platform||pa()).trim()},h("version",`GuildSync is out of date. Current version: ${Gr}. Latest version: ${e}.`),ms();return}pe={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},ms(),Xr("version")}}function pa(){const t=String(navigator.userAgent||"").toLowerCase(),r=`${String(navigator.platform||"").toLowerCase()} ${t}`;return r.includes("mac")?"macos":r.includes("linux")?"linux":"windows"}function ms(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!pe.updateRequired||!pe.downloadUrl){t.innerHTML="";return}const e=pe.platformLabel||"Desktop",r=pe.latestVersion||"latest",n=pe.fileName||"GuildSync client download";t.innerHTML=`
    <button
      id="desktopUpdateDownloadButton"
      class="desktop-update-download-button"
      type="button"
      title="Download ${u(n)}"
      aria-label="Download GuildSync ${u(r)} for ${u(e)}"
    >
      <span class="desktop-update-download-icon" aria-hidden="true">\u2B07</span>
      <span class="desktop-update-download-copy">
        <span class="desktop-update-download-title">Update Available</span>
        <span class="desktop-update-download-subtitle">${a(e)} \xB7 ${a(r)}</span>
      </span>
    </button>
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{_f()})}function _f(){const t=String(pe.downloadUrl||"").trim();if(!t){h("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:p});return}Ic(t)}function h(t,e,r={}){const n=String(t||"").trim(),i=String(e||"").trim();if(!(!n||!i)){if(Me.set(n,i),xe.has(n)&&(window.clearTimeout(xe.get(n)),xe.delete(n)),r.ttlMs&&Number(r.ttlMs)>0){const s=window.setTimeout(()=>{Xr(n)},Number(r.ttlMs));xe.set(n,s)}kt()}}function Xr(t){const e=String(t||"").trim();if(!!e){if(Me.delete(e),xe.has(e)&&(window.clearTimeout(xe.get(e)),xe.delete(e)),T===e){tn(()=>{T="",kt()});return}kt()}}function kt(){const t=Zr();if(t.length===0){ze?tn(Qt):Qt();return}!ze&&!Ye&&en(t[0])}function Zr(){return Array.from(Me.keys())}function ma(){const t=Zr();if(t.length===0)return"";if(!T)return t[0];const e=t.indexOf(T);return e<0?t[0]:t[(e+1)%t.length]}function en(t){const e=document.querySelector("#statusMessageTrack");if(!e||!Me.has(t)){Qt();return}rn();const r=Me.get(t);T=t,ze=!0,Ye=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=r,e.style.setProperty("--message-fade-duration",`${Ps}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",Ye=!1,Af()},{once:!0})})}function Af(){const t=Zr();if(!T||!Me.has(T)){kt();return}if(t.length<=1){gs(!1);return}gs(!0)}function gs(t){const e=document.querySelector("#statusMessageViewport"),r=document.querySelector("#statusMessageTrack");if(!e||!r)return;const n=Math.max(0,r.scrollWidth-e.clientWidth);if(n<=0){t&&Xt(()=>{tn(()=>{const i=ma();T="",i?en(i):Qt()})},Fs);return}Xt(()=>{ga(n,t)},Gs)}function ga(t,e){const r=document.querySelector("#statusMessageTrack");if(!r||!T||!Me.has(T))return;const n=Math.max(4,Math.ceil(t/Yc));r.style.setProperty("--long-scroll-distance",`${t}px`),r.style.setProperty("--long-scroll-duration",`${n}s`),r.classList.add("long-scroll"),r.addEventListener("animationend",()=>{if(r.classList.remove("long-scroll"),r.style.transform=`translateX(-${t}px) translateY(-50%)`,e){Xt(()=>{tn(()=>{const i=ma();T="",i?en(i):Qt()})},Fs);return}Xt(()=>{Lf()},zc)},{once:!0})}function Lf(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!T||!Me.has(T))return;if(Zr().length!==1){kt();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const n=Math.max(0,e.scrollWidth-t.clientWidth);n<=0||Xt(()=>{ga(n,!1)},Gs)}function tn(t){const e=document.querySelector("#statusMessageTrack");if(rn(),!e||!ze){typeof t=="function"&&t();return}Ye=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${Ps}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",ze=!1,Ye=!1,typeof t=="function"&&t()},{once:!0})}function Qt(){const t=document.querySelector("#statusMessageTrack");rn(),T="",ze=!1,Ye=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function Xt(t,e){const r=window.setTimeout(()=>{Gt=Gt.filter(n=>n!==r),t()},e);Gt.push(r)}function rn(){for(const t of Gt)window.clearTimeout(t);Gt=[]}function ya(){if(!ze||Ye||!T)return;const t=T;rn(),en(t)}function $e(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(d!=null&&d.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!A()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${Q()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${Q()}`)}}async function lt(t={}){try{if(A()){const e=await Dc();we=e,!t.silent&&(e==null?void 0:e.message)&&h(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:p});return}we=await $c(),Xr("file-watcher")}catch(e){h("file-watcher-error",k(e),{ttlMs:p})}}function Ft(t,e=null){const r="[GuildSync File Watcher]";if(e){console.log(`${r} ${t}`,e);return}console.log(`${r} ${t}`)}function Ef(t={}){if(!A()){Ft("SavedVariables change ignored because the user is not authenticated.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",r=e.toLowerCase(),n=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=String(t.filePath||"").trim(),o=n?`${n} saved variables (${i})`:i;Ft(`SavedVariables change detected: ${i}${s?` (${s})`:""}. Key: ${r}.`,t),h(`saved-vars-file-updated-${e}`,`${o} has been updated.`,{ttlMs:p}),r==="banking"&&(Ft(`Processing banking SavedVariables update from ${i}.`),Rf(t)),r==="roster"&&(Ft(`Processing roster SavedVariables update from ${i}.`),Df(t)),r==="applications"&&(Ft(`Processing applications SavedVariables update from ${i}.`),hu(t))}async function Rf(t={}){await Uu(t),await ra(t)}async function Df(t={}){await nu(t)}function $f(t){!A()||h("file-watcher-error",k(t),{ttlMs:p})}function Mf(){Ct("guildsync-savedvars-file-modified",Ef),Ct("guildsync-file-watcher-error",$f),Ct("guildsync-login-complete",async t=>{m=t||{logged_in:!1,allowed:!1},_r(),Ht(),await lt(),h("auth",m.status_message||`Logged in and authorized as ${Q()}.`,{ttlMs:p})}),Ct("guildsync-login-denied",async t=>{m={logged_in:!1,allowed:!1,status_message:""},_r(),await lt(),h("auth",t||"Access denied.",{ttlMs:p}),Ht()}),Ct("guildsync-login-failed",async t=>{m={logged_in:!1,allowed:!1,status_message:""},_r(),await lt(),h("auth",t||"Login failed.",{ttlMs:p}),Ht()})}function A(){return Boolean((m==null?void 0:m.logged_in)&&(m==null?void 0:m.allowed)&&(m==null?void 0:m.token))}function Q(){var t,e;return((t=m.user)==null?void 0:t.display_name)||((e=m.user)==null?void 0:e.username)||"Discord User"}function Nf(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),r=String(t.discord_user_id||"").trim();if(!e||!r)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=128`}function ba(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function Tf(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Bf(){It&&(It.disconnect(),It=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),r=Math.round(t.getBoundingClientRect().height);It=new ResizeObserver(n=>{const i=n[0];if(!i)return;const s=Math.round(i.contentRect.width),o=Math.round(i.contentRect.height);s===e&&o===r||(e=s,r=o,ka(),ya())}),It.observe(t)}function ka(){clearTimeout(ji),ji=setTimeout(async()=>{try{await Bs()}catch{}},500)}function k(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function a(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function u(t){return a(t)}Mf();Qc();ql();
