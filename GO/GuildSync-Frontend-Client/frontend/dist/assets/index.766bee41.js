(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Po="/assets/splash.ea386b6a.png",Go="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",Uo="/assets/GuildSync-Graphic.9169020d.png",te=Object.create(null);te.open="0";te.close="1";te.ping="2";te.pong="3";te.message="4";te.upgrade="5";te.noop="6";const nn=Object.create(null);Object.keys(te).forEach(t=>{nn[te[t]]=t});const Xn={type:"error",data:"parser error"},ji=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",zi=typeof ArrayBuffer=="function",Ki=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Sr=({type:t,data:e},n,r)=>ji&&e instanceof Blob?n?r(e):vi(e,r):zi&&(e instanceof ArrayBuffer||Ki(e))?n?r(e):vi(new Blob([e]),r):r(te[t]+(e||"")),vi=(t,e)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];e("b"+(r||""))},n.readAsDataURL(t)};function Si(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let Gn;function Vo(t,e){if(ji&&t.data instanceof Blob)return t.data.arrayBuffer().then(Si).then(e);if(zi&&(t.data instanceof ArrayBuffer||Ki(t.data)))return e(Si(t.data));Sr(t,!1,n=>{Gn||(Gn=new TextEncoder),e(Gn.encode(n))})}const wi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Dt=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<wi.length;t++)Dt[wi.charCodeAt(t)]=t;const Ho=t=>{let e=t.length*.75,n=t.length,r,i=0,s,o,c,u;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const y=new ArrayBuffer(e),S=new Uint8Array(y);for(r=0;r<n;r+=4)s=Dt[t.charCodeAt(r)],o=Dt[t.charCodeAt(r+1)],c=Dt[t.charCodeAt(r+2)],u=Dt[t.charCodeAt(r+3)],S[i++]=s<<2|o>>4,S[i++]=(o&15)<<4|c>>2,S[i++]=(c&3)<<6|u&63;return y},Wo=typeof ArrayBuffer=="function",wr=(t,e)=>{if(typeof t!="string")return{type:"message",data:Yi(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:jo(t.substring(1),e)}:nn[n]?t.length>1?{type:nn[n],data:t.substring(1)}:{type:nn[n]}:Xn},jo=(t,e)=>{if(Wo){const n=Ho(t);return Yi(n,e)}else return{base64:!0,data:t}},Yi=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},Ji=String.fromCharCode(30),zo=(t,e)=>{const n=t.length,r=new Array(n);let i=0;t.forEach((s,o)=>{Sr(s,!1,c=>{r[o]=c,++i===n&&e(r.join(Ji))})})},Ko=(t,e)=>{const n=t.split(Ji),r=[];for(let i=0;i<n.length;i++){const s=wr(n[i],e);if(r.push(s),s.type==="error")break}return r};function Yo(){return new TransformStream({transform(t,e){Vo(t,n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,r)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(r))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(n)})}})}let Un;function Qt(t){return t.reduce((e,n)=>e+n.length,0)}function Xt(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let r=0;for(let i=0;i<e;i++)n[i]=t[0][r++],r===t[0].length&&(t.shift(),r=0);return t.length&&r<t[0].length&&(t[0]=t[0].slice(r)),n}function Jo(t,e){Un||(Un=new TextDecoder);const n=[];let r=0,i=-1,s=!1;return new TransformStream({transform(o,c){for(n.push(o);;){if(r===0){if(Qt(n)<1)break;const u=Xt(n,1);s=(u[0]&128)===128,i=u[0]&127,i<126?r=3:i===126?r=1:r=2}else if(r===1){if(Qt(n)<2)break;const u=Xt(n,2);i=new DataView(u.buffer,u.byteOffset,u.length).getUint16(0),r=3}else if(r===2){if(Qt(n)<8)break;const u=Xt(n,8),y=new DataView(u.buffer,u.byteOffset,u.length),S=y.getUint32(0);if(S>Math.pow(2,53-32)-1){c.enqueue(Xn);break}i=S*Math.pow(2,32)+y.getUint32(4),r=3}else{if(Qt(n)<i)break;const u=Xt(n,i);c.enqueue(wr(s?u:Un.decode(u),e)),r=0}if(i===0||i>t){c.enqueue(Xn);break}}}})}const Qi=4;function M(t){if(t)return Qo(t)}function Qo(t){for(var e in M.prototype)t[e]=M.prototype[e];return t}M.prototype.on=M.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};M.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};M.prototype.off=M.prototype.removeListener=M.prototype.removeAllListeners=M.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===e||r.fn===e){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+t],this};M.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,e)}return this};M.prototype.emitReserved=M.prototype.emit;M.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};M.prototype.hasListeners=function(t){return!!this.listeners(t).length};const wn=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0))(),U=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),Xo="arraybuffer";function Xi(t,...e){return e.reduce((n,r)=>(t.hasOwnProperty(r)&&(n[r]=t[r]),n),{})}const Zo=U.setTimeout,ea=U.clearTimeout;function _n(t,e){e.useNativeTimers?(t.setTimeoutFn=Zo.bind(U),t.clearTimeoutFn=ea.bind(U)):(t.setTimeoutFn=U.setTimeout.bind(U),t.clearTimeoutFn=U.clearTimeout.bind(U))}const ta=1.33;function na(t){return typeof t=="string"?ra(t):Math.ceil((t.byteLength||t.size)*ta)}function ra(t){let e=0,n=0;for(let r=0,i=t.length;r<i;r++)e=t.charCodeAt(r),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(r++,n+=4);return n}function Zi(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function ia(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function sa(t){let e={},n=t.split("&");for(let r=0,i=n.length;r<i;r++){let s=n[r].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class oa extends Error{constructor(e,n,r){super(e),this.description=n,this.context=r,this.type="TransportError"}}class _r extends M{constructor(e){super(),this.writable=!1,_n(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,r){return super.emitReserved("error",new oa(e,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=wr(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=ia(e);return n.length?"?"+n:""}}class aa extends _r{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};Ko(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,zo(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=Zi()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let es=!1;try{es=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const ca=es;function la(){}class da extends aa{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let r=location.port;r||(r=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,n){const r=this.request({method:"POST",data:e});r.on("success",n),r.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=e}}class Z extends M{constructor(e,n,r){super(),this.createRequest=e,_n(this,r),this._opts=r,this._method=r.method||"GET",this._uri=n,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const n=Xi(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(n);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var i;r.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=Z.requestsCount++,Z.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=la,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Z.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Z.requestsCount=0;Z.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",_i);else if(typeof addEventListener=="function"){const t="onpagehide"in U?"pagehide":"unload";addEventListener(t,_i,!1)}}function _i(){for(let t in Z.requests)Z.requests.hasOwnProperty(t)&&Z.requests[t].abort()}const ua=function(){const t=ts({xdomain:!1});return t&&t.responseType!==null}();class fa extends da{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=ua&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Z(ts,this.uri(),e)}}function ts(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||ca))return new XMLHttpRequest}catch{}if(!e)try{return new U[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const ns=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class ha extends _r{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,r=ns?{}:Xi(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;Sr(r,this.supportsBinary,s=>{try{this.doWrite(r,s)}catch{}i&&wn(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=Zi()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const Vn=U.WebSocket||U.MozWebSocket;class pa extends ha{createSocket(e,n,r){return ns?new Vn(e,n,r):n?new Vn(e,n):new Vn(e)}doWrite(e,n){this.ws.send(n)}}class ma extends _r{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=Jo(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(n).getReader(),i=Yo();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const s=()=>{r.read().then(({done:c,value:u})=>{c||(this.onPacket(u),s())}).catch(c=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;this._writer.write(r).then(()=>{i&&wn(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const ga={websocket:pa,webtransport:ma,polling:fa},ya=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,ba=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Zn(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),r=t.indexOf("]");n!=-1&&r!=-1&&(t=t.substring(0,n)+t.substring(n,r).replace(/:/g,";")+t.substring(r,t.length));let i=ya.exec(t||""),s={},o=14;for(;o--;)s[ba[o]]=i[o]||"";return n!=-1&&r!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=ka(s,s.path),s.queryKey=va(s,s.query),s}function ka(t,e){const n=/\/{2,9}/g,r=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function va(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,s){i&&(n[i]=s)}),n}const er=typeof addEventListener=="function"&&typeof removeEventListener=="function",rn=[];er&&addEventListener("offline",()=>{rn.forEach(t=>t())},!1);class ve extends M{constructor(e,n){if(super(),this.binaryType=Xo,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const r=Zn(e);n.hostname=r.host,n.secure=r.protocol==="https"||r.protocol==="wss",n.port=r.port,r.query&&(n.query=r.query)}else n.host&&(n.hostname=Zn(n.host).host);_n(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(r=>{const i=r.prototype.name;this.transports.push(i),this._transportsByName[i]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=sa(this.opts.query)),er&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},rn.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=Qi,n.transport=e,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&ve.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",ve.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(n+=na(i)),r>0&&n>this._maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,wn(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,r){return this._sendPacket("message",e,n,r),this}send(e,n,r){return this._sendPacket("message",e,n,r),this}_sendPacket(e,n,r,i){if(typeof n=="function"&&(i=n,n=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const s={type:e,data:n,options:r};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(ve.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),er&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=rn.indexOf(this._offlineEventListener);r!==-1&&rn.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}}ve.protocol=Qi;class Sa extends ve{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let n=this.createTransport(e),r=!1;ve.priorWebsocketSuccess=!1;const i=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",g=>{if(!r)if(g.type==="pong"&&g.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;ve.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(S(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const b=new Error("probe error");b.transport=n.name,this.emitReserved("upgradeError",b)}}))};function s(){r||(r=!0,S(),n.close(),n=null)}const o=g=>{const b=new Error("probe error: "+g);b.transport=n.name,s(),this.emitReserved("upgradeError",b)};function c(){o("transport closed")}function u(){o("socket closed")}function y(g){n&&g.name!==n.name&&s()}const S=()=>{n.removeListener("open",i),n.removeListener("error",o),n.removeListener("close",c),this.off("close",u),this.off("upgrading",y)};n.once("open",i),n.once("error",o),n.once("close",c),this.once("close",u),this.once("upgrading",y),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const n=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&n.push(e[r]);return n}}class wa extends Sa{constructor(e,n={}){const r=typeof e=="object"?e:n;(!r.transports||r.transports&&typeof r.transports[0]=="string")&&(r.transports=(r.transports||["polling","websocket","webtransport"]).map(i=>ga[i]).filter(i=>!!i)),super(e,r)}}function _a(t,e="",n){let r=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),r=Zn(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const s=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+s+":"+r.port+e,r.href=r.protocol+"://"+s+(n&&n.port===r.port?"":":"+r.port),r}const Aa=typeof ArrayBuffer=="function",La=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,rs=Object.prototype.toString,Ea=typeof Blob=="function"||typeof Blob<"u"&&rs.call(Blob)==="[object BlobConstructor]",Ra=typeof File=="function"||typeof File<"u"&&rs.call(File)==="[object FileConstructor]";function Ar(t){return Aa&&(t instanceof ArrayBuffer||La(t))||Ea&&t instanceof Blob||Ra&&t instanceof File}function sn(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,r=t.length;n<r;n++)if(sn(t[n]))return!0;return!1}if(Ar(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return sn(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&sn(t[n]))return!0;return!1}function Ma(t){const e=[],n=t.data,r=t;return r.data=tr(n,e),r.attachments=e.length,{packet:r,buffers:e}}function tr(t,e){if(!t)return t;if(Ar(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let r=0;r<t.length;r++)n[r]=tr(t[r],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=tr(t[r],e));return n}return t}function $a(t,e){return t.data=nr(t.data,e),delete t.attachments,t}function nr(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=nr(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=nr(t[n],e));return t}const is=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Da=5;var k;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(k||(k={}));class Ta{constructor(e){this.replacer=e}encode(e){return(e.type===k.EVENT||e.type===k.ACK)&&sn(e)?this.encodeAsBinary({type:e.type===k.EVENT?k.BINARY_EVENT:k.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===k.BINARY_EVENT||e.type===k.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=Ma(e),r=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(r),i}}class Lr extends M{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const r=n.type===k.BINARY_EVENT;r||n.type===k.BINARY_ACK?(n.type=r?k.EVENT:k.ACK,this.reconstructor=new Ca(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(Ar(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const r={type:Number(e.charAt(0))};if(k[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===k.BINARY_EVENT||r.type===k.BINARY_ACK){const s=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(s,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");const c=Number(o);if(!ss(c)||c<0)throw new Error("Illegal attachments");if(c>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=c}if(e.charAt(n+1)==="/"){const s=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););r.nsp=e.substring(s,n)}else r.nsp="/";const i=e.charAt(n+1);if(i!==""&&Number(i)==i){const s=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}r.id=Number(e.substring(s,n+1))}if(e.charAt(++n)){const s=this.tryParse(e.substr(n));if(Lr.isPayloadValid(r.type,s))r.data=s;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case k.CONNECT:return dn(n);case k.DISCONNECT:return n===void 0;case k.CONNECT_ERROR:return typeof n=="string"||dn(n);case k.EVENT:case k.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&is.indexOf(n[0])===-1);case k.ACK:case k.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Ca{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=$a(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Na(t){return typeof t=="string"}const ss=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function Ba(t){return t===void 0||ss(t)}function dn(t){return Object.prototype.toString.call(t)==="[object Object]"}function Oa(t,e){switch(t){case k.CONNECT:return e===void 0||dn(e);case k.DISCONNECT:return e===void 0;case k.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&is.indexOf(e[0])===-1);case k.ACK:return Array.isArray(e);case k.CONNECT_ERROR:return typeof e=="string"||dn(e);default:return!1}}function Ia(t){return Na(t.nsp)&&Ba(t.id)&&Oa(t.type,t.data)}const xa=Object.freeze(Object.defineProperty({__proto__:null,protocol:Da,get PacketType(){return k},Encoder:Ta,Decoder:Lr,isPacketValid:Ia},Symbol.toStringTag,{value:"Module"}));function j(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const qa=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class os extends M{constructor(e,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[j(e,"open",this.onopen.bind(this)),j(e,"packet",this.onpacket.bind(this)),j(e,"error",this.onerror.bind(this)),j(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var r,i,s;if(qa.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const o={type:k.EVENT,data:n};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const S=this.ids++,g=n.pop();this._registerAckCallback(S,g),o.id=S}const c=(i=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||i===void 0?void 0:i.writable,u=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!c||(u?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,n){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[e]=n;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let c=0;c<this.sendBuffer.length;c++)this.sendBuffer[c].id===e&&this.sendBuffer.splice(c,1);n.call(this,new Error("operation has timed out"))},i),o=(...c)=>{this.io.clearTimeoutFn(s),n.apply(this,c)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...n){return new Promise((r,i)=>{const s=(o,c)=>o?i(o):r(c);s.withError=!0,n.push(s),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>(this._queue[0],i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(i)):(this._queue.shift(),n&&n(null,...s)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:k.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case k.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case k.EVENT:case k.BINARY_EVENT:this.onevent(e);break;case k.ACK:case k.BINARY_ACK:this.onack(e);break;case k.DISCONNECT:this.ondisconnect();break;case k.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let r=!1;return function(...i){r||(r=!0,n.packet({type:k.ACK,id:e,data:i}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:k.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,e.data)}}}function pt(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}pt.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-n:t+n}return Math.min(t,this.max)|0};pt.prototype.reset=function(){this.attempts=0};pt.prototype.setMin=function(t){this.ms=t};pt.prototype.setMax=function(t){this.max=t};pt.prototype.setJitter=function(t){this.jitter=t};class rr extends M{constructor(e,n){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,_n(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new pt({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const i=n.parser||xa;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new wa(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=j(n,"open",function(){r.onopen(),e&&e()}),s=c=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",c),e?e(c):this.maybeReconnectOnOpen()},o=j(n,"error",s);if(this._timeout!==!1){const c=this._timeout,u=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),n.close()},c);this.opts.autoUnref&&u.unref(),this.subs.push(()=>{this.clearTimeoutFn(u)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(j(e,"ping",this.onping.bind(this)),j(e,"data",this.ondata.bind(this)),j(e,"error",this.onerror.bind(this)),j(e,"close",this.onclose.bind(this)),j(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){wn(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new os(this,e,n),this.nsps[e]=r),r}_destroy(e){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let r=0;r<n.length;r++)this.engine.write(n[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Lt={};function on(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=_a(t,e.path||"/socket.io"),r=n.source,i=n.id,s=n.path,o=Lt[i]&&s in Lt[i].nsps,c=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let u;return c?u=new rr(r,e):(Lt[i]||(Lt[i]=new rr(r,e)),u=Lt[i]),n.query&&!e.query&&(e.query=n.queryKey),u.socket(n.path,e)}Object.assign(on,{Manager:rr,Socket:os,io:on,connect:on});function Fa(t){return window.go.main.App.CleanupDepositMailAckFromGuildSyncBanking(t)}function Pa(){return window.go.main.App.CloseWindow()}function Ga(t){return window.go.main.App.CollectDepositMailAckFromGuildSyncBanking(t)}function Ua(t){return window.go.main.App.CollectGuildSyncApplicationsData(t)}function Va(t){return window.go.main.App.CollectGuildSyncBankingData(t)}function Ha(t){return window.go.main.App.CollectGuildSyncRosterData(t)}function Wa(t,e){return window.go.main.App.CommitGuildSyncApplicationsData(t,e)}function ja(t,e){return window.go.main.App.CommitGuildSyncBankingData(t,e)}function za(t,e){return window.go.main.App.CommitGuildSyncRosterData(t,e)}function Ka(){return window.go.main.App.FlushPendingDepositMailAckCleanup()}function Ya(){return window.go.main.App.GetESORunningStatus()}function Ja(){return window.go.main.App.GetGuildSyncFileWatcherStatus()}function Qa(){return window.go.main.App.GetGuildSyncSession()}function Xa(){return window.go.main.App.LogoutGuildSync()}function Za(){return window.go.main.App.MaximizeWindow()}function ec(){return window.go.main.App.MinimizeWindow()}function as(){return window.go.main.App.SaveWindowState()}function tc(t,e){return window.go.main.App.SetGuildSyncSavedVarsWatchFileEnabled(t,e)}function nc(){return window.go.main.App.ShowMainWindow()}function rc(){return window.go.main.App.StartDiscordLogin()}function ic(){return window.go.main.App.StartGuildSyncFileWatcher()}function sc(){return window.go.main.App.StopGuildSyncFileWatcher()}function oc(t){return window.go.main.App.WriteDepositMailToGuildSyncBanking(t)}function ac(t,e,n){return window.runtime.EventsOnMultiple(t,e,n)}function Et(t,e){return ac(t,e,-1)}function cc(t){window.runtime.BrowserOpenURL(t)}const An="1.0.3",lc=30*60*1e3,cs="guildsync-pending-banking-uploads",ls="guildsync-pending-deposit-mail",dc=5e3,uc=30*1e3,ds="guildsync-pending-roster-uploads",us="guildsync-pending-applications-uploads",p=60*1e3,fs=7e3,hs=1400,ps=2400,fc=4e3,hc=38,ms=document.querySelector("#app");let Ai=null,Rt=null,Li=!1,Gt=!1,an=null,Hn=!1,Wn=!1,jn=!1,Se=null,x={running:!1,message:""},Ke=null,Ye=null,ir=!1,Je=!1,Qe=null,zn=!1,Re=new Map,Ne=new Map,C="",Ge=!1,Ue=!1,Tt=[],m={logged_in:!1,allowed:!1,status_message:""},fe={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},d=null,q=[],Ln=null,Bt=!1,un=!1,fn="",Xe=new Set,Ze=new Set,Ot="username",Be="asc",sr=null,or=null,J=[],hn=null,Me=!1,Ei=!1,pn="",ar=null,cr=null,Oe=new Set,et=new Set,ie="",I="",D=-1,st=!1,It="",V=[],$e="",we=[],_e=!1,oe="",Kn=null,z=-1,ot=!1,he="",H=[],at="",Ve="",Ae=[],Le=!1,ae="",Ri=null,Ce=0;const pc=650;let K=-1,mt=!1,gt=[],pe=!1,Ie="",yt=!1,xt=[],me=!1,xe="",bt=!1,Er=[],ge=!1,qe="",kt="",ye="",tt="",be="",E=[],F=!1,W="",je=!1,En="",nt="",Ut="",Vt="",se=-1,Te=!1,w=null,Fe=[],ct=!1,le="",Ht="",X=-1,vt=!1,Rr=null,Ct=null;const Mr=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let P=[],$="biweekly",gs=null,De=!1,Pe=!1,Wt="biweekly",St=!1,lt=!1,re="",ke=null,T={targetType:"other",note:"",tickets:""},ce=!1,mn=!1,G="",L={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},wt="",N=-1,Y=!1,lr={biweekly:0,monthly:0};const mc=1780786800,gc=1781996400,yc=14*24*60*60,bc=28*24*60*60,kc=60*60,gn=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let R=gn[0].id;function vc(){ms.innerHTML=`
    <main class="splash-screen">
      <img src="${Po}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await nc(),await Sc(),ys(),Nt(),await it()},5e3)}async function Sc(){try{m=await Qa()}catch(t){m={logged_in:!1,allowed:!1,status_message:""},h("session-error",v(t),{ttlMs:p})}}function ys(){ms.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${Go}" alt="" class="title-icon" />
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
            <img src="${Uo}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${a(An)}</div>
            </div>
          </div>
          <div id="desktopUpdateArea" class="desktop-update-area"></div>
          <div id="discordArea" class="discord-area"></div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${bs()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content" aria-live="polite">
          ${vs()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await ec()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await as(),await Pa()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await Za()}),ln(),vr(),ws(),Mo(),so(),yo(),Rs(),io(),Ks(),Ys(),Js(),Qs(),qs(),oo(),Mc(),Ee(),ht(),Li||(window.addEventListener("resize",()=>{Fo(),xo()}),Ou(),Li=!0)}function bs(){return gn.map(t=>{const e=t.id===R,n=wc(t.id,e),r=n?ks():0,i=n?`Deposit mail needs attention: ${r} item${r===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${n?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${f(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${f(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${_c(t.icon)}</span>
          <span class="guildsync-tab-label">${a(t.label)}</span>
          ${n?`<span class="guildsync-tab-mail-badge" aria-label="${f(i)}">${r>99?"99+":a(String(r))}</span>`:""}
        </button>
      `}).join("")}function ks(){return _()?Tn()+Kt()+mo():0}function wc(t,e){return t!=="more"||e?!1:ks()>0}function _c(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function vs(){const t=gn.find(n=>n.id===R)||gn[0];let e="";return t.id==="discord-members"?e=Dc():t.id==="eso-members"?e=Tc():t.id==="more"?e=Sd():t.id==="settings"?e=Jc():e=`
      <div class="guildsync-tab-panel" data-active-tab="${f(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${a(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${ce?Xl():""}
    ${St?Td():""}
    ${Te?Vl():""}
    ${mt?Qc():""}
    ${yt?rl():""}
    ${bt?al():""}
    ${je?kl():""}
    ${vt?Rc():""}
  `}function Ac(){return vt||st||ot||ce||St||Te||mt||yt||bt||je||Pe}function Lc(){return vt?!1:je?(mr(),!0):bt?(pr(),!0):yt?(hr(),!0):mt?(fr(),!0):Te?(ut(),!0):St?(kn(),!0):ce?(ce=!1,l(),!0):st?(st=!1,l(),!0):ot?(ot=!1,l(),!0):Pe?(Pe=!1,l(),!0):!1}function Ec(t){t.key==="Escape"&&Lc()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",Ec,!0),window.guildSyncGlobalModalEscapeAttached=!0);function Ss(t={}){return new Promise(e=>{Ct&&Ct(!1),vt=!0,Rr={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},Ct=e,l()})}function yn(t=!1){const e=Ct;Ct=null,vt=!1,Rr=null,e&&e(t===!0),l()}function Rc(){const t=Rr||{};return`
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
  `}function Mi(t){var r,i,s,o;const e=(i=(r=t.target).closest)==null?void 0:i.call(r,"#cancelGuildSyncConfirmButton"),n=(o=(s=t.target).closest)==null?void 0:o.call(s,"#acceptGuildSyncConfirmButton");if(!(!e&&!n)){if(t.preventDefault(),t.stopPropagation(),e){yn(!1);return}n&&yn(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",Mi,!0),document.addEventListener("pointerup",Mi,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function Mc(){if(!vt)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=r=>{r.preventDefault(),r.stopPropagation(),yn(!1)}),e&&(e.onclick=r=>{r.preventDefault(),r.stopPropagation(),yn(!0)});const n=document.querySelector(".guildsync-confirm-overlay");n&&(n.onclick=r=>{r.target===n&&(r.preventDefault(),r.stopPropagation())})}function ws(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(Ac())return;const e=t.dataset.tabId;!e||e===R||(R=e,l())})})}function $c(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function l(t={}){je&&$c();const e=document.querySelector(".guildsync-tabs"),n=document.querySelector("#guildSyncTabContent");e&&(e.innerHTML=bs()),n&&(n.innerHTML=vs()),ws(),Mo(),so(),yo(),Rs(),io(),Ks(),Ys(),Js(),Qs(),qs(),oo(),t.restoreDiscordSearchFocus&&cu(),t.restoreRosterSearchFocus&&lu(),R==="discord-members"&&(d==null?void 0:d.connected)&&q.length===0&&!Bt&&Pr({silent:!0}),R==="eso-members"&&(d==null?void 0:d.connected)&&J.length===0&&!Me&&!Ei&&(Ei=!0,zt({silent:!0})),R==="more"&&(d==null?void 0:d.connected)&&P.length===0&&!De&&de({silent:!0}),(R==="discord-members"||R==="eso-members"||R==="settings")&&(d==null?void 0:d.connected)&&E.length===0&&!F&&Rn({silent:!0})}function Dc(){const t=su(),e=du(),n=Array.from(Xe),r=Array.from(Ze);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${a($o(Ln))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${Bt||un?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${un?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${f(fn)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!Xe.has(i)).map(i=>`<option value="${f(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All roles</span>':n.map(i=>pu(i)).join("")}
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
              ${Mr.filter(i=>!Ze.has(i.id)).map(i=>`<option value="${f(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>_s("discord",i)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${en("username","Username")}
                ${en("global_name","Global Name")}
                ${en("server_nickname","Server Nickname")}
                ${en("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>uu(i)).join(""):fu()}
            </tbody>
          </table>
        </div>
      </div>
      ${ot?Vc():""}
    </div>
  `}function Tc(){const t=Ic(),e=Fc(),n=Array.from(Oe),r=Array.from(et);return`
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
          <span class="discord-last-refresh">Last Refresh: ${a(cd(hn))}</span>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${Me?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Me?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${f(pn)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!Oe.has(i)).map(i=>`<option value="${f(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All ranks</span>':n.map(i=>Pc(i)).join("")}
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
              ${Mr.filter(i=>!et.has(i.id)).map(i=>`<option value="${f(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>_s("roster",i)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${Zt("account_name","Account Name")}
                ${Zt("rank","Rank")}
                ${Zt("joined","Joined")}
                ${Zt("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map((i,s)=>Cc(i,s)).join(""):Nc()}
            </tbody>
          </table>
        </div>
      </div>
      ${st?zc():""}
    </div>
  `}function Cc(t,e=-1){const n=Bc(t.rank||""),r=n?` style="color: ${n};"`:"";return`
    <tr class="eso-roster-row${e===D?" roster-search-active-row":""}"${r} data-roster-row-index="${f(String(e))}" data-eso-account-name="${f(t.account_name||"")}">
      <td>${a(t.account_name||"")}</td>
      <td>${$r(t.rank||"")}</td>
      <td>${a(Dn(t.joined))}</td>
      <td class="member-link-action-cell">${Vs({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function Nc(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">${a(Me?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function Bc(t){const e=String(t||"").trim(),n=Ur(e);return In(n==null?void 0:n.role_color)}function $r(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${a(e)}</span>`}function Oc(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":$r(e)}function Ic(){const t=pn.trim().toLowerCase(),e=J.filter(n=>{const r=String(n.rank||"").trim();if(Oe.size>0&&!Oe.has(r)||!Es(et,dr(n)))return!1;if(!t)return!0;const i=Dn(n.joined),s=Or(n.joined),o=dr(n),c=Ls(n.account_name||"");return[n.account_name,r,i,s,n.joined,o,c].map(y=>String(y||"").toLowerCase()).join(" ").includes(t)});return xc(e)}function xc(t){if(!ie||!I)return t;const e=I==="desc"?-1:1;return[...t].sort((n,r)=>{const i=$i(n,ie),s=$i(r,ie),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:String(n.account_name||"").localeCompare(String(r.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function $i(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const n=Number(t.joined||0);return Number.isFinite(n)&&n>0?String(n).padStart(16,"0"):""}if(e==="linked"){const n=dr(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[n]||"9"} ${n} ${Ls(t.account_name||"")}`}return String(t.account_name||"")}function qc(t){const n=new Set(["account_name","rank","joined","linked"]).has(t)?t:"account_name";ie!==n?(ie=n,I="asc"):I==="asc"?I="desc":I==="desc"?(ie="",I=""):(ie=n,I="asc"),D=-1,l()}function Zt(t,e,n=""){const r=ie===t&&Boolean(I),i=r?I==="asc"?"ascending":"descending":"none",s=r?I==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${f(n)}" aria-sort="${f(i)}">
      <button
        class="discord-sort-header roster-sort-header${r?" active":""}"
        type="button"
        data-roster-sort-column="${f(t)}"
        title="Sort ${f(e)}${r&&I==="asc"?" descending":r&&I==="desc"?" not sorted":" ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function Fc(){return Array.from(new Set(J.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function Pc(t){const e=Ur(t),n=In(e==null?void 0:e.role_color),r=Hr(n),i=Vr(n,r);return`
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
  `}function Gc(t){const e=Mr.find(n=>n.id===t);return e?e.label:t}function _s(t,e){const n=t==="roster"?"roster":"discord",r=Gc(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${n}-link-status-filter="${f(e)}"
      title="Remove ${f(r)} link filter"
    >
      <span>${a(r)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function As(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked"&&String(n.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function Uc(t){return As($n(t==null?void 0:t.discord_id))}function dr(t){return As(Mn(t==null?void 0:t.account_name))}function Ls(t){const e=Mn(t),n=Us({mode:"eso-to-discord",esoAccountName:t}),r=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean),i=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="candidate").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean);return[n.label,n.title,r.join(" "),i.join(" ")].filter(Boolean).join(" ")}function Es(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function Vc(){return`
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
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${f(he)}" />
        </div>

        ${ae?`<div class="discord-data-error">${a(ae)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Hc()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${Ve?`: ${a(Ve)}`:""}</div>
            ${Wc()}
          </div>
        </div>
      </div>
    </div>
  `}function Hc(){return Le&&H.length===0?'<div class="roster-history-muted">Searching...</div>':H.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${H.map((t,e)=>`
        <button class="roster-history-match${e===K||t.discord_id===at?" is-selected":""}" type="button" data-discord-history-id="${f(t.discord_id)}" data-discord-history-name="${f(ur(t))}">
          <span>${a(ur(t))}</span>
          <strong>${a(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===K?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Wc(){return at?Le&&Ae.length===0?'<div class="roster-history-muted">Loading history...</div>':Ae.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${Ae.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${a(Or(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${a(jc(t.event_type))}</td>
              <td>${a(t.old_value||"")}</td>
              <td>${a(t.new_value||"")}</td>
              <td>${a(t.source||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function ur(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function jc(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function zc(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(It)}" />
        </div>

        ${oe?`<div class="discord-data-error">${a(oe)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Kc()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${$e?`: ${a($e)}`:""}</div>
            ${Yc()}
          </div>
        </div>
      </div>
    </div>
  `}function Kc(){return _e&&V.length===0?'<div class="roster-history-muted">Searching...</div>':V.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${V.map((t,e)=>`
        <button class="roster-history-match${e===z||t.account_name===$e?" is-selected":""}" type="button" data-roster-history-account="${f(t.account_name)}">
          <span>${a(t.account_name)}</span>
          <strong>${a(t.rank||"")}</strong>
          ${e===z?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Yc(){return $e?_e&&we.length===0?'<div class="roster-history-muted">Loading history...</div>':we.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${we.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${a(Or(t.timestamp))}</td>
              <td>${a(t.event_type||"")}</td>
              <td>${Oc(t.rank)}</td>
              <td>${a(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function Jc(){return`
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
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${pe?"disabled":""}>
              ${pe?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${me?"disabled":""}>
              ${me?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${ge?"disabled":""}>
              ${ge?"Loading...":"Run"}
            </button>
          </article>
        </section>

        <article class="report-option-card">
          <div class="report-option-copy">
            <h3>ESO / Discord Member Links</h3>
            <p>Review automatic ESO-to-Discord links, accept candidate matches, unlink blocked matches, or run the matcher again after roster or Discord refreshes.</p>
          </div>
          <button id="runMemberLinksReportButton" class="refresh-discord-button report-run-button" type="button" ${F?"disabled":""}>
            ${F?"Loading...":"Run"}
          </button>
        </article>
      </div>
    </div>
  `}function Rs(){var t,e,n,r;R==="settings"&&((t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>Ms()),(e=document.querySelector("#runDiscordRankAuditReportButton"))==null||e.addEventListener("click",()=>nl()),(n=document.querySelector("#runDiscordLastSeenReportButton"))==null||n.addEventListener("click",()=>ol()),(r=document.querySelector("#runMemberLinksReportButton"))==null||r.addEventListener("click",()=>gl()))}function Ms(){mt=!0,Ie="",l(),eo()}function fr(){mt=!1,Ie="",l()}function Qc(){const t=Xc(),e=Zc(),n=gt.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${pe?"disabled":""}>${pe?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(n))} total row${n===1?"":"s"}</span>
        </div>

        ${Ie?`<div class="discord-data-error">${a(Ie)}</div>`:""}

        <div class="report-results-content">
          ${pe&&n===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!pe&&n===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${n>0?Di("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${n>0?Di("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${a(Ds())}</textarea>
      </div>
    </div>
  `}function Xc(){return gt.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function Zc(){return gt.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function Di(t,e,n,r){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${a(t)}</h4>
          <p>${a(e)}</p>
        </div>
        <span>${a(String(n.length))} row${n.length===1?"":"s"}</span>
      </div>
      ${n.length>0?el(n):`<div class="roster-history-muted report-section-empty">${a(r)}</div>`}
    </section>
  `}function el(t=gt){return`
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
              <td>${$r(e.rank||"")}</td>
              <td>${a(Dn(e.joined))}</td>
              <td>${a(On(e.purchased_tickets||0))}</td>
              <td>${a($s(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function $s(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function Ds(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Discord Link"]];for(const e of gt){const n=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([n,e.account_name||"",e.rank||"",Dn(e.joined),On(e.purchased_tickets||0),$s(e)])}return t.map(e=>e.map(Nn).join("	")).join(`
`)}async function tl(){const t=Ds();if(await Bn(t)){h("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#associateTicketReportTsv");n&&(n.focus(),n.select()),h("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function nl(){yt=!0,xe="",l(),Zs()}function hr(){yt=!1,xe="",l()}function rl(){const t=xt.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${me?"disabled":""}>${me?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${xe?`<div class="discord-data-error">${a(xe)}</div>`:""}

        <div class="report-results-content">
          ${me&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!me&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?il(xt):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${a(Ns())}</textarea>
      </div>
    </div>
  `}function il(t=xt){return`
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
              <td>${a(Ts(e))}</td>
              <td>${a(e.discord_rank||"No matching rank role")}</td>
              <td>${a(e.eso_accounts||"No linked ESO account")}</td>
              <td>${a(e.eso_rank||"None")}</td>
              <td>${a(Cs(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Ts(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function Cs(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function Ns(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of xt)t.push([Ts(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",Cs(e)]);return t.map(e=>e.map(Nn).join("	")).join(`
`)}async function sl(){const t=Ns();if(await Bn(t)){h("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#discordRankAuditReportTsv");n&&(n.focus(),n.select()),h("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function ol(){bt=!0,qe="",kt="",l(),Xs(),E.length===0&&!F&&Rn({silent:!0})}function pr(){bt=!1,qe="",kt="",ye="",tt="",be="",l()}function al(){const t=Dr(),e=Er.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${ge?"disabled":""}>${ge?"Loading...":"Run Again"}</button>
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
            value="${f(kt)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${ye===""?"selected":""}>All link statuses</option>
            <option value="linked" ${ye==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${ye==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${ye==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${qe?`<div class="discord-data-error discord-last-seen-report-error">${a(qe)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${ge&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!ge&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?cl(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${a(Os(t))}</textarea>
      </div>
    </div>
  `}function cl(t=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${Mt("name","Discord Member")}</th>
            <th>${Mt("eso","Linked ESO Account")}</th>
            <th>${Mt("date","Last Seen")}</th>
            <th>${Mt("days","Days Since")}</th>
            <th>${Mt("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr class="discord-last-seen-row ${f(pl(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${f(He(e).status)}" data-discord-last-seen-search="${f(Bs(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${hl(e)}
                  <span>${a(dt(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${dl(e)}</td>
              <td>${a(Tr(e.last_seen))}</td>
              <td>${a(Cr(e.last_seen))}</td>
              <td>${a(bn(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function Mt(t,e){const n=tt===t,r=n?be==="asc"?"\u25B2":"\u25BC":"\u2195",i=n?`${e}: ${be==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${n?" active":""}" type="button" data-discord-last-seen-sort="${f(t)}" title="${f(i)}">
      <span>${a(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${a(r)}</span>
    </button>
  `}function Dr(){const t=[...Er],e=tt,n=be;if(!e||!n)return t;const r=n==="desc"?-1:1;return t.sort((i,s)=>{var o,c;if(e==="date"){const u=Number(i.last_seen||0)||0,y=Number(s.last_seen||0)||0;return(u-y)*r}if(e==="days")return(Ti(i.last_seen)-Ti(s.last_seen))*r;if(e==="action")return bn(i.last_seen_action).localeCompare(bn(s.last_seen_action),void 0,{sensitivity:"base"})*r;if(e==="eso"){const u=He(i),y=He(s),S={linked:0,candidate:1,unlinked:2},g=((o=S[u.status])!=null?o:9)-((c=S[y.status])!=null?c:9);return g!==0?g*r:u.esoAccountName.localeCompare(y.esoAccountName,void 0,{sensitivity:"base"})*r}return dt(i).localeCompare(dt(s),void 0,{sensitivity:"base"})*r})}function ll(t){tt!==t?(tt=t,be="asc"):be==="asc"?be="desc":(tt="",be=""),l()}function dt(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function Bs(t){return[dt(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,ul(t),Tr(t==null?void 0:t.last_seen),Cr(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function He(t){const e=Tl(t==null?void 0:t.discord_id),n=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),r=String((e==null?void 0:e.eso_account_name)||"").trim();return n==="linked"&&r?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:r,title:`Linked ESO account: ${r}`}:(n==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&r?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:r,title:`Fuzzy ESO account candidate: ${r}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function dl(t){const e=He(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${f(e.className)}"
      title="${f(e.title)}"
      aria-label="${f(e.label)}"
      role="img"
    ></span>
  `}function ul(t){const e=He(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function fl(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!n)return"";if(/^https?:\/\//i.test(e))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function hl(t){const e=dt(t),n=e?e.slice(0,2).toUpperCase():"?",r=fl(t);return r?`<span class="discord-member-avatar"><img src="${f(r)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${a(n)}</span>`}function Tr(t){const e=Number(t);if(!e)return"Never";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t||"");const r=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(n).reduce((i,s)=>(i[s.type]=s.value,i),{});return`${r.month}/${r.day}/${r.year} ${r.hour}:${r.minute} ${r.dayPeriod}`}function pl(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const n=(Date.now()-e*1e3)/864e5;return n>30?"discord-last-seen-red":n>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function Cr(t){const e=Number(t);if(!e)return"Never";const n=Date.now()-e*1e3;if(!Number.isFinite(n))return"";if(n<0)return"0 days";const r=Math.floor(n/864e5);return`${r} day${r===1?"":"s"}`}function Ti(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const n=Date.now()-e*1e3;return Number.isFinite(n)?n<0?0:Math.floor(n/864e5):Number.POSITIVE_INFINITY}function bn(t){return String(t||"").trim()||"None tracked"}function Os(t=Dr()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const n of t){const r=He(n);e.push([dt(n),r.label||"",r.esoAccountName||"",Tr(n==null?void 0:n.last_seen),Cr(n==null?void 0:n.last_seen),bn(n==null?void 0:n.last_seen_action),(n==null?void 0:n.username)||"",(n==null?void 0:n.discord_id)||""])}return e.map(n=>n.map(Nn).join("	")).join(`
`)}async function ml(){const t=Dr().filter(i=>{const s=ne(kt),o=String(ye||"").trim().toLowerCase(),c=!s||ne(Bs(i)).includes(s),u=!o||He(i).status===o;return c&&u}),e=Os(t);if(await Bn(e)){h("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#discordLastSeenReportTsv");r&&(r.focus(),r.select()),h("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function gl(){je=!0,W="",l(),E.length===0&&!F&&Rn({silent:!0})}function mr(){je=!1,En="",nt="",Ut="",Vt="",se=-1,l()}function Is(t){return[...new Set((Array.isArray(E)?E:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function xs(t,e){return t.map(n=>`<option value="${f(n)}" ${e===n?"selected":""}>${a(n)}</option>`).join("")}function yl(){return xs(Is("link_status"),Ut)}function bl(){return xs(Is("link_method"),Vt)}function kl(){return`
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
          <button id="refreshMemberLinksButton" class="clear-discord-filters-button" type="button" ${F?"disabled":""}>Refresh Links</button>
          <button id="runMemberAutoLinkButton" class="refresh-discord-button" type="button" ${F?"disabled":""}>${F?"Running...":"Run Auto-Linking"}</button>
          <span class="roster-history-muted">${a(String(E.length))} link/candidate row${E.length===1?"":"s"}</span>
        </div>

        <div class="member-links-report-filter-row">
          <input
            id="memberLinksReportSearchInput"
            class="member-links-report-search-input"
            type="search"
            autocomplete="off"
            spellcheck="false"
            placeholder="Search Discord account or ESO member..."
            value="${f(En)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${Ut===""?"selected":""}>All statuses</option>
            ${yl()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${Vt===""?"selected":""}>All methods</option>
            ${bl()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${nt===""?"selected":""}>All actions</option>
            <option value="needs-link" ${nt==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${nt==="can-unlink"?"selected":""}>Unlink Available</option>
          </select>
        </div>

        ${W?`<div class="discord-data-error member-links-report-error">${a(W)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${_l()}
        </div>
      </div>
    </div>
  `}function qs(){var n,r,i,s,o,c;if(!je)return;(n=document.querySelector("#closeMemberLinksReportButton"))==null||n.addEventListener("click",mr),(r=document.querySelector("#refreshMemberLinksButton"))==null||r.addEventListener("click",()=>Rn()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>$l());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",Al),t.addEventListener("keydown",Ml)),(s=document.querySelector("#memberLinksReportActionFilter"))==null||s.addEventListener("change",Ll),(o=document.querySelector("#memberLinksReportStatusFilter"))==null||o.addEventListener("change",El),(c=document.querySelector("#memberLinksReportMethodFilter"))==null||c.addEventListener("change",Rl),jt(),document.querySelectorAll("[data-accept-member-candidate]").forEach(u=>{u.addEventListener("click",()=>Ps(u.dataset.acceptMemberCandidate||"",u.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(u=>{u.addEventListener("click",()=>Dl(u.dataset.unlinkMemberLink||"",u.dataset.unlinkMemberLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",u=>{u.target===e&&mr()})}function Ci(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function Ni(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function vl(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Sl(t){return[...Array.isArray(t)?t:[]].sort((e,n)=>{const r=Ci(e)-Ci(n);if(r!==0)return r;const i=Ni(e).localeCompare(Ni(n),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((n==null?void 0:n.discord_user_id)||""),void 0,{sensitivity:"base"})})}function wl(t){const e=gr(t);let n="";e==="Username"?n=(t==null?void 0:t.discord_username)||"":e==="Global Name"?n=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(n=(t==null?void 0:t.discord_server_nickname)||""),n||(n=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const r=e?` <span class="member-link-report-match-field">(${a(e)})</span>`:"";return`<span class="member-link-report-discord-name">${a(n)}</span>${r}`}function _l(){return F&&E.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(E)||E.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${Sl(E).map(e=>{var s;const n=String(e.link_status||"").trim().toLowerCase(),r=String(e.link_method||"").trim().toLowerCase(),i=wl(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${f(vl(e))}"
                data-member-links-report-status="${f(n)}"
                data-member-links-report-method="${f(r)}"
                data-member-links-report-action="${f(n==="linked"?"can-unlink":n==="candidate"?"needs-link":"")}"
              >
                <td>${a(e.eso_account_name||"")}</td>
                <td>${i}</td>
                <td class="member-links-status-col">${a(n||"")}</td>
                <td class="member-links-method-col">${a(r||"")}${Number(e.locked||0)===1?" \u{1F512}":""}</td>
                <td class="member-links-action-col">
                  <div class="member-link-actions">
                    ${n==="candidate"?`<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${f(e.eso_account_name||"")}" data-accept-member-candidate-discord-id="${f(e.discord_user_id||"")}" aria-label="Accept candidate link" title="Accept candidate link">\u2713</button>`:""}
                    ${n==="linked"?`<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${f(e.eso_account_name||"")}" data-unlink-member-link-discord-id="${f(e.discord_user_id||"")}" aria-label="Unlink this ESO/Discord pair" title="Unlink this ESO/Discord pair">\u{1F5D1}</button>`:""}
                  </div>
                </td>
                <td class="member-links-confidence-col">${a(String((s=e.match_confidence)!=null?s:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function Fs(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function Bi(t){const e=Fs();if(e.forEach(r=>r.classList.remove("member-links-report-row-active")),e.length===0){se=-1;return}se=Math.max(0,Math.min(t,e.length-1));const n=e[se];n.classList.add("member-links-report-row-active"),n.scrollIntoView({block:"nearest"})}function jt(){const t=ne(En),e=String(nt||"").trim().toLowerCase(),n=String(Ut||"").trim().toLowerCase(),r=String(Vt||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let s=0;i.forEach(c=>{const u=ne(c.dataset.memberLinksReportSearch||""),y=String(c.dataset.memberLinksReportAction||"").trim().toLowerCase(),S=String(c.dataset.memberLinksReportStatus||"").trim().toLowerCase(),g=String(c.dataset.memberLinksReportMethod||"").trim().toLowerCase(),ze=(!t||u.includes(t))&&(!e||y===e)&&(!n||S===n)&&(!r||g===r);c.hidden=!ze,c.classList.remove("member-links-report-row-active"),ze&&(s+=1)});const o=document.querySelector("#memberLinksReportSearchEmpty");o&&(o.hidden=s!==0),se=-1}function Al(t){En=t.target.value||"",jt()}function Ll(t){nt=t.target.value||"",jt()}function El(t){Ut=t.target.value||"",jt()}function Rl(t){Vt=t.target.value||"",jt()}function Ml(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Fs();if(e.length===0)return;if(t.key==="ArrowDown"){const r=se<0?0:se+1;Bi(r>=e.length?e.length-1:r);return}const n=se<0?e.length-1:se-1;Bi(n<0?0:n)}async function Rn(t={}){if(!(d!=null&&d.connected)){W="You must be connected to load member links.",l();return}F=!0,W="",t.silent||l();try{const e=await A("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");E=Array.isArray(e.links)?e.links:[]}catch(e){W=v(e)}finally{F=!1,l()}}async function $l(){if(!(d!=null&&d.connected)||!m.logged_in){W="You must be logged in and connected to run auto-linking.",l();return}F=!0,W="",l();try{const t=await A("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");E=Array.isArray(t.links)?t.links:[],h("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:p})}catch(t){W=v(t)}finally{F=!1,l()}}async function Ps(t,e=""){try{const n=await A("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to accept candidate.");E=Array.isArray(n.links)?n.links:E,h("member-link-accepted",n.message||"Candidate accepted as a link.",{ttlMs:p})}catch(n){W=v(n),h("member-link-accept-error",W,{ttlMs:p})}}async function Dl(t,e=""){if(!!await Ss({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const r=await A("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to unlink member.");E=Array.isArray(r.links)?r.links:E,h("member-link-unlinked",r.message||"Member link removed.",{ttlMs:p})}catch(r){W=v(r)}l()}}function We(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function Mn(t){const e=We(t);return e?E.filter(n=>We(n.eso_account_name)===e):[]}function $n(t){const e=String(t||"").trim();return e?E.filter(n=>String(n.discord_user_id||"").trim()===e):[]}function Gs(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const n=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(n.length>0){const i=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const s=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return s||n[0]}const r=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return r||e[0]}function Tl(t){return Gs($n(t))}function Cl(t){return`${We(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function Nr(){return w?w.mode==="discord-to-eso"?$n(w.discordUserId):Mn(w.esoAccountName):[]}function Nl(t){const e=String(t||"").trim(),n=q.find(r=>String(r.discord_id||"").trim()===e);return n&&(n.server_nickname||n.global_name||n.username||n.discord_id)||e}function Us(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?$n(t.discordUserId):Mn(t.esoAccountName),r=Gs(n),i=String((r==null?void 0:r.link_status)||"").trim().toLowerCase(),s=n.filter(c=>String(c.link_status||"").trim().toLowerCase()==="linked").length,o=n.filter(c=>String(c.link_status||"").trim().toLowerCase()==="candidate").length;return s>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?s===1?r.eso_account_name:`${s} ESO accounts`:s===1?r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member":`${s} Discord accounts`}`}:i==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?r.eso_account_name:r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member"}`}:i==="blocked"||Number((r==null?void 0:r.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function Vs(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,r=Us(t);return`
    <button
      class="member-link-status-dot member-link-status-${f(r.className)}"
      type="button"
      title="${f(r.title)}"
      aria-label="${f(r.label)}"
      data-open-member-link-dialog="${f(e)}"
      data-member-link-value="${f(n||"")}"
    ></button>
  `}function Bl(){return w?w.mode==="discord-to-eso"?Nl(w.discordUserId):w.esoAccountName||"":""}function Hs(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function gr(t){const e=Hs((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const n=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(n.includes("discord_username")||n.includes("username"))return"Username";if(n.includes("discord_display_name")||n.includes("global")||n.includes("display"))return"Global Name";if(n.includes("discord_server_nickname")||n.includes("server")||n.includes("nickname"))return"Server Nickname";const r=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(r==="exact"||r==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",s=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const c of s){const u=Ol(i,c.value);(!o||u>o.score)&&(o={...c,score:u})}if(o&&o.score>0)return o.field}return""}function ne(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function Ol(t,e){const n=ne(t),r=ne(e);if(!n||!r)return 0;if(n===r)return 100;if((n.includes(r)||r.includes(n))&&Math.min(n.length,r.length)>=4)return 88;const i=Math.abs(n.length-r.length),s=[...n].findIndex((c,u)=>c!==r[u]),o=s===-1?Math.min(n.length,r.length):s;return Math.max(0,Math.min(75,Math.round(o*10-i*3)))}function Il(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function xl(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function ql(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),n=Il(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${a(n)}</span>`}function Fl(t){var c;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",n=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",r=String(t.link_status||"").trim().toLowerCase(),o=r==="linked"?`<button
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
        >\u2713</button>`:"";return`
    <div class="member-link-current-card">
      <div class="member-link-current-details">
        <div><span>ESO:</span> ${a(t.eso_account_name||"")}</div>
        <div><span>Discord:</span> ${a(e)}</div>
        <div><span>Status:</span> ${ql(t)} \xB7 ${a(xl(t.link_method))} \xB7 ${a(String((c=t.match_confidence)!=null?c:""))}% \xB7 ${a(n)}</div>
        ${gr(t)?`<div><span>Matched:</span> Matched on ${a(gr(t))}</div>`:""}
      </div>
      ${o}
    </div>
  `}function Pl(){const t=Nr();return t.length?[...t].sort((n,r)=>{var u,y;const i=String(n.link_status||"").trim().toLowerCase(),s=String(r.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},c=((u=o[i])!=null?u:9)-((y=o[s])!=null?y:9);return c!==0?c:Number(r.match_confidence||0)-Number(n.match_confidence||0)}).map(n=>Fl(n)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function Gl(){if(ct)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(le)return`<div class="discord-data-error">${a(le)}</div>`;if(!Array.isArray(Fe)||Fe.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(Nr().map(n=>Cl(n))),e=[...Fe].filter(n=>{const r=(w==null?void 0:w.mode)==="discord-to-eso"?`${We(n.account_name)}::${String(w.discordUserId||"").trim()}`:`${We(w==null?void 0:w.esoAccountName)}::${String(n.discord_id||"").trim()}`;return!t.has(r)}).sort((n,r)=>{const i=Number(r.confidence||0)-Number(n.confidence||0);return i!==0?i:Oi(n).localeCompare(Oi(r),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(n=>Ul(n)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function Oi(t){return((w==null?void 0:w.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function Ul(t,e={}){var g,b,O;const n=(w==null?void 0:w.mode)||"",r=n==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=Hs(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),s=n==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[s,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),c=n==="discord-to-eso"?t.account_name:t.discord_id,u=e.disabled===!0,y=[r,s,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),S=[r,o,`${(g=t.confidence)!=null?g:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${f(c||"")}" data-member-link-option-search="${f(y)}" title="${f(S)}" ${u?"disabled":""}>
      <span class="member-link-option-name" title="${f(r||"")}">${a(r||"")}</span>
      <span class="member-link-option-subtitle" title="${f(o||"")}">${a(o||"")}</span>
      <span class="member-link-option-confidence" title="${f(String((b=t.confidence)!=null?b:0))}%">${a(String((O=t.confidence)!=null?O:0))}%</span>
    </button>
  `}function Vl(){const t=(w==null?void 0:w.mode)||"",e=Bl(),n=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
            ${Pl()}
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
              value="${f(Ht)}"
            />
            ${Gl()}
          </section>
        </div>

      </div>
    </div>
  `}async function Ws(t,e){if(!(d!=null&&d.connected)||!_()){h("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:p});return}Te=!0,w=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},Fe=[],ct=!0,le="",Ht="",X=-1,l();try{if(!Array.isArray(E)||E.length===0){const i=await A("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(E=Array.isArray(i.links)?i.links:[])}const r=await A("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load link suggestions.");Fe=Array.isArray(r.options)?r.options:[]}catch(n){le=v(n)}finally{ct=!1,l()}}function ut(){document.removeEventListener("keydown",yr),Te=!1,w=null,Fe=[],ct=!1,le="",Ht="",X=-1,l()}function js(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function Ii(t){const e=js();if(e.forEach(r=>r.classList.remove("member-link-option-row-active")),e.length===0){X=-1;return}X=Math.max(0,Math.min(t,e.length-1));const n=e[X];n.classList.add("member-link-option-row-active"),n.scrollIntoView({block:"nearest"})}function zs(){const t=ne(Ht),e=[...document.querySelectorAll(".member-link-option-row")];let n=0;e.forEach(i=>{const s=ne(i.dataset.memberLinkOptionSearch||i.textContent||""),o=!t||s.includes(t);i.hidden=!o,i.classList.remove("member-link-option-row-active"),o&&(n+=1)});const r=document.querySelector("#memberLinkSuggestionSearchEmpty");r&&(r.hidden=n!==0),X=-1}function Hl(t){Ht=t.target.value||"",zs()}function Wl(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=js();if(e.length===0)return;if(t.key==="ArrowDown"){const r=X<0?0:X+1;Ii(r>=e.length?e.length-1:r);return}const n=X<0?e.length-1:X-1;Ii(n<0?0:n)}function yr(t){!Te||t.key==="Escape"&&(t.preventDefault(),ut())}async function jl(t){if(!(!w||!t))try{const e=w.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:w.discordUserId}:{esoAccountName:w.esoAccountName,discordUserId:t},n=await A("guildsync:manual-link-member",e,3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to link members.");E=Array.isArray(n.links)?n.links:E,h("member-link-saved",n.message||"Member link saved.",{ttlMs:p}),ut()}catch(e){le=v(e),l()}}async function zl(t,e=""){await Ps(t,e),ut()}async function Kl(){if(!!w){ct=!0,le="",l();try{const t=w.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:w.discordUserId}:{mode:"eso-to-discord",accountName:w.esoAccountName},e=await A("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");Fe=Array.isArray(e.options)?e.options:[]}catch(t){le=v(t)}finally{ct=!1,l()}}}async function Yl(t="",e=""){const n=Nr().find(i=>We(i.eso_account_name)===We(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!n||!await Ss({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await A("guildsync:manual-unlink-member",{esoAccountName:n.eso_account_name,discordUserId:n.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");E=Array.isArray(i.links)?i.links:E,h("member-link-unlinked",i.message||"Member link removed.",{ttlMs:p}),await Kl()}catch(i){le=v(i),l()}}function Ks(){var n;if(!Te)return;document.removeEventListener("keydown",yr),document.addEventListener("keydown",yr),(n=document.querySelector("#closeMemberLinkDialogButton"))==null||n.addEventListener("click",ut);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",Hl),t.addEventListener("keydown",Wl),zs()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(r=>{r.addEventListener("click",()=>Yl(r.dataset.unlinkEsoAccount||"",r.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(r=>{r.addEventListener("click",()=>jl(r.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(r=>{r.addEventListener("click",()=>zl(r.dataset.acceptDialogMemberCandidate||"",r.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",r=>{r.target===e&&ut()})}function Ys(){var e,n,r;if(!mt)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",fr),(n=document.querySelector("#rerunAssociateTicketReportButton"))==null||n.addEventListener("click",()=>eo()),(r=document.querySelector("#copyAssociateTicketReportGridButton"))==null||r.addEventListener("click",()=>tl());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&fr()})}function Js(){var e,n,r;if(!yt)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",hr),(n=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||n.addEventListener("click",()=>Zs()),(r=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||r.addEventListener("click",()=>sl());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&hr()})}function Qs(){var r,i,s;if(!bt)return;(r=document.querySelector("#closeDiscordLastSeenReportButton"))==null||r.addEventListener("click",pr),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>Xs()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>ml()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(o=>{o.addEventListener("click",()=>ll(o.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",Jl);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",Ql),Br();const n=document.querySelector(".discord-last-seen-report-overlay");n&&n.addEventListener("click",o=>{o.target===n&&pr()})}function Jl(t){kt=t.target.value||"",Br()}function Ql(t){ye=t.target.value||"",Br()}function Br(){const t=ne(kt),e=String(ye||"").trim().toLowerCase(),n=[...document.querySelectorAll("[data-discord-last-seen-row]")];let r=0;n.forEach(s=>{const o=ne(s.dataset.discordLastSeenSearch||s.textContent||""),c=String(s.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),S=(!t||o.includes(t))&&(!e||c===e);s.hidden=!S,S&&(r+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=r!==0)}async function Xs(){if(!(d!=null&&d.connected)||!_()){qe="You must be logged in and connected to run this report.",l();return}ge=!0,qe="",l();try{const t=await A("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");q=Gr(t.members),Er=[...q]}catch(t){qe=v(t)}finally{ge=!1,l(),B("discordLastSeenReportSearchInput")}}async function Zs(){if(!(d!=null&&d.connected)||!_()){xe="You must be logged in and connected to run this report.",l();return}me=!0,xe="",l();try{const t=await A("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");xt=Array.isArray(t.rows)?t.rows:[]}catch(t){xe=v(t)}finally{me=!1,l()}}async function eo(){if(!(d!=null&&d.connected)||!_()){Ie="You must be logged in and connected to run this report.",l();return}pe=!0,Ie="",l();try{const t=await A("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");gt=Array.isArray(t.rows)?t.rows:[]}catch(t){Ie=v(t)}finally{pe=!1,l()}}function rt(){const t=String(wt||"").trim().toLowerCase(),e={account_name:"Anonymous",rank:"Manual Entry"},n=new Set(["anonymous"]),r=J.filter(i=>String(i.account_name||"").trim()).filter(i=>{const o=String(i.account_name||"").trim().toLowerCase();return!o||n.has(o)||t&&!o.includes(t)?!1:(n.add(o),!0)}).slice().sort((i,s)=>{const o=String(i.account_name||"").toLowerCase(),c=String(s.account_name||"").toLowerCase(),u=t&&o.startsWith(t)?0:1,y=t&&c.startsWith(t)?0:1;return u!==y?u-y:o.localeCompare(c)}).slice(0,19);return[e,...r]}function to(t=rt()){const e=String(L.accountName||"").trim();return t.length===0?'<div class="roster-history-muted manual-ticket-no-matches">No matching guild members found.</div>':t.map((n,r)=>`
        <button class="roster-history-match${r===N||n.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${f(n.account_name)}" role="option" aria-selected="${r===N||n.account_name===e?"true":"false"}">
          <span>${a(n.account_name)}</span>
          <strong>${a(n.rank||"")}</strong>
          ${r===N?"<small>Enter</small>":""}
        </button>
      `).join("")}function no(){document.querySelectorAll("[data-manual-ticket-account]").forEach(t=>{t.addEventListener("mousedown",e=>{e.preventDefault()}),t.addEventListener("click",()=>{ro(t.dataset.manualTicketAccount||"")})})}function Yn(){const t=document.querySelector("#manualTicketMatchList");if(!t)return;const e=rt();N>=e.length&&(N=e.length>0?e.length-1:-1),t.innerHTML=to(e),no()}function ro(t){const e=String(t||"").trim();L.accountName=e,wt=e,Y=!1,N=-1,G="",l()}function B(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const n=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(n,n)},0)}function Xl(){const t=Y?rt():[],e=String(L.accountName||"").trim();return`
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
              <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(wt)}" autocomplete="off" />
            </label>

            ${Y?`
              <div id="manualTicketMatchList" class="roster-history-match-list manual-ticket-match-list" role="listbox" aria-label="Matching guild members">
                ${to(t)}
              </div>
            `:""}
          </div>

          ${e?`<div class="roster-history-muted manual-ticket-selected-member">Selected: ${a(e)}</div>`:""}

          <div class="manual-ticket-entry-row">
            <div class="manual-ticket-type-field" role="group" aria-label="Ticket type">
              <button class="manual-ticket-type-label${L.ticketType!=="monthly"?" is-selected":""}" type="button" data-manual-ticket-type="biweekly" aria-pressed="${L.ticketType!=="monthly"?"true":"false"}">Bi-Weekly</button>
              <button class="manual-ticket-type-switch" type="button" data-manual-ticket-toggle="true" data-selected-type="${L.ticketType==="monthly"?"monthly":"biweekly"}" aria-label="Toggle ticket type. Current selection is ${L.ticketType==="monthly"?"50/50":"Bi-Weekly"}">
                <span class="manual-ticket-type-track" aria-hidden="true"></span>
                <span class="manual-ticket-type-thumb" aria-hidden="true"></span>
              </button>
              <button class="manual-ticket-type-label${L.ticketType==="monthly"?" is-selected":""}" type="button" data-manual-ticket-type="monthly" aria-pressed="${L.ticketType==="monthly"?"true":"false"}">50/50</button>
            </div>
            <label class="manual-ticket-note-field">
              <textarea id="manualTicketNoteInput" class="discord-search-input manual-ticket-note-input" rows="4" placeholder="Enter a reason such as FFTG">${a(L.note)}</textarea>
            </label>
            <div class="manual-ticket-side-fields">
              <label class="manual-ticket-gold-field">
                <input id="manualTicketGoldInput" class="discord-search-input manual-ticket-gold-input" type="number" min="0" step="1" inputmode="numeric" placeholder="Gold Value" value="${f(L.goldValue)}" />
                <span class="manual-ticket-gold-coin" aria-hidden="true"></span>
              </label>
              <label class="manual-ticket-count-field">
                <div class="manual-ticket-number-wrap">
                  <input id="manualTicketCountInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${f(L.tickets)}" />
                  <div class="manual-ticket-number-buttons" aria-hidden="true">
                    <button id="manualTicketCountUpButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2303</button>
                    <button id="manualTicketCountDownButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2304</button>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div class="manual-ticket-actions">
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${mn?"disabled":""}>${mn?"Saving...":"Add Manual Entry"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function io(){var s,o,c,u,y,S;if(!ce)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{ce=!1,l()});const t=document.querySelector("#manualTicketAccountSearchInput");if(t){const g=({rerender:b=!1}={})=>{if(Y=!0,N=rt().length>0?0:-1,b){l(),B("manualTicketAccountSearchInput");return}Yn()};t.addEventListener("focus",()=>{Y||g({rerender:!0})}),t.addEventListener("click",()=>{Y||g({rerender:!0})}),t.addEventListener("input",b=>{wt=b.target.value||"",L.accountName="",Y=!0,N=rt().length>0?0:-1,Yn()}),t.addEventListener("keydown",b=>{if(b.key==="Escape")return;if(!Y){(b.key==="ArrowDown"||b.key==="ArrowUp")&&(b.preventDefault(),g({rerender:!0}));return}const O=rt();if(b.key==="ArrowDown"||b.key==="ArrowUp"){if(O.length===0)return;b.preventDefault();const At=b.key==="ArrowDown"?1:-1;N=((N<0?0:N)+At+O.length)%O.length,Yn();return}if(b.key!=="Enter")return;b.preventDefault();const ue=O[N>=0?N:0];ue!=null&&ue.account_name&&ro(ue.account_name)})}no(),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",g=>{L.note=g.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(g=>{g.addEventListener("click",()=>{const b=String(g.dataset.manualTicketType||"").trim().toLowerCase();L.ticketType=b==="monthly"?"monthly":"biweekly",l()})}),(c=document.querySelector("[data-manual-ticket-toggle]"))==null||c.addEventListener("click",()=>{L.ticketType=L.ticketType==="monthly"?"biweekly":"monthly",l()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",g=>{const b=String(g.target.value||"").replace(/\D/g,"");g.target.value!==b&&(g.target.value=b),L.goldValue=b});const n=document.querySelector("#manualTicketCountInput");n==null||n.addEventListener("input",g=>{const b=String(g.target.value||"").replace(/\D/g,"");g.target.value!==b&&(g.target.value=b),L.tickets=b});const r=g=>{const b=Number(L.tickets)||0,O=Math.max(0,b+g);L.tickets=String(O),n&&(n.value=L.tickets,n.focus())};(u=document.querySelector("#manualTicketCountUpButton"))==null||u.addEventListener("click",()=>r(1)),(y=document.querySelector("#manualTicketCountDownButton"))==null||y.addEventListener("click",()=>r(-1)),(S=document.querySelector("#saveManualBiweeklyTicketButton"))==null||S.addEventListener("click",()=>Zl());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",g=>{g.target===i&&(ce=!1,l())})}async function Zl(){const t=String(L.accountName||"").trim(),e=String(L.note||"").trim(),n=String(L.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",r=Number(String(L.goldValue||"").trim()||0),i=Number(String(L.tickets||"").trim()||0);if(Y){G="Select a matching guild member or Anonymous from the list before saving.",l(),B("manualTicketAccountSearchInput");return}if(!t){G="Select a matching guild member or Anonymous from the list before saving.",l(),B("manualTicketAccountSearchInput");return}if(!Number.isFinite(r)||r<0){G="Gold value must be zero or greater.",l();return}if(!Number.isFinite(i)||i<0){G="Tickets must be zero or greater.",l();return}const s=t.toLowerCase()==="anonymous";if(s&&Math.floor(i)>0){G="Anonymous cannot be awarded tickets. Use 0 tickets and enter a gold value.",l();return}if(Math.floor(r)===0&&Math.floor(i)===0){G=s?"Enter a gold value for Anonymous when tickets are 0.":"Enter gold or tickets. Both cannot be zero.",l();return}mn=!0,G="",l();try{const o=await A("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:n,gold_value:Math.floor(r),tickets:Math.floor(i)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Failed to add manual entry.");ce=!1,L={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},wt="",N=-1,Y=!1,await de({silent:!0}),h("manual-ticket-added",o.message||"Manual entry added.",{ttlMs:p})}catch(o){G=v(o)}finally{mn=!1,l()}}function so(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>zt());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{st=!0,oe="",l()});const n=document.querySelector("#rosterMemberSearch");n&&(n.addEventListener("input",o=>{pn=o.target.value||"",ar=o.target.selectionStart,cr=o.target.selectionEnd,D=-1,l({restoreRosterSearchFocus:!0})}),n.addEventListener("keydown",ed)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{qc(o.dataset.rosterSortColumn||"account_name")})});const r=document.querySelector("#rosterRankFilter");r&&r.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(Oe.add(c),D=-1,l())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRosterRankFilter||"";Oe.delete(c),D=-1,l()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(et.add(c),D=-1,l())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRosterLinkStatusFilter||"";et.delete(c),D=-1,l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>Ws(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{pn="",Oe.clear(),et.clear(),ie="",I="",D=-1,l()}),td()}function ed(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){D=-1;return}t.preventDefault(),t.key==="ArrowDown"?D=D<0?0:Math.min(D+1,e.length-1):t.key==="ArrowUp"&&(D=D<0?e.length-1:Math.max(D-1,0)),e.forEach((r,i)=>{r.classList.toggle("roster-search-active-row",i===D)});const n=e[D];n&&typeof n.scrollIntoView=="function"&&n.scrollIntoView({block:"nearest",inline:"nearest"})}function td(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{st=!1,l()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",n=>{if(It=n.target.value||"",z=-1,!It.trim()){clearTimeout(Kn),oe="",V=[],$e="",we=[],_e=!1,l(),B("rosterHistorySearchInput");return}clearTimeout(Kn),Kn=setTimeout(()=>{sd({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(V.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;z=((z<0?0:z)+i+V.length)%V.length,l(),B("rosterHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=V[z>=0?z:0];r!=null&&r.account_name&&qi(r.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(n=>{n.addEventListener("click",()=>{qi(n.dataset.rosterHistoryAccount||"")})})}function oo(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{ot=!1,l()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",n=>{he=n.target.value||"",K=-1,Ce+=1;const r=Ce;if(clearTimeout(Ri),!he.trim()){ae="",H=[],at="",Ve="",Ae=[],Le=!1,l(),B("discordHistorySearchInput");return}Ri=setTimeout(()=>{nd({auto:!0,keepFocus:!0,generation:r})},pc)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(H.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;K=((K<0?0:K)+i+H.length)%H.length,l(),B("discordHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=H[K>=0?K:0];r!=null&&r.discord_id&&xi(r.discord_id,ur(r))})),document.querySelectorAll("[data-discord-history-id]").forEach(n=>{n.addEventListener("click",()=>{xi(n.dataset.discordHistoryId||"",n.dataset.discordHistoryName||"")})})}async function nd(t={}){const e=Number.isInteger(t.generation)?t.generation:++Ce,n=he.trim();if(e===Ce){if(!n){ae="",H=[],K=-1,at="",Ve="",Ae=[],Le=!1,l(),t.keepFocus&&B("discordHistorySearchInput");return}Le=!0,ae="",H=[],K=-1,at="",Ve="",Ae=[],l(),t.keepFocus&&B("discordHistorySearchInput");try{const r=await A("guildsync:request-discord-member-history",{query:n},3e4);if(e!==Ce||n!==he.trim())return;if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search Discord member history.");H=rd(r.matches),K=H.length>0?0:-1}catch(r){if(e!==Ce||n!==he.trim())return;ae=v(r)}finally{if(e!==Ce||n!==he.trim())return;Le=!1,l(),t.keepFocus&&B("discordHistorySearchInput")}}}async function xi(t,e="",n={}){const r=String(t||"").trim();if(!!r){at=r,Ve=String(e||r).trim(),he=Ve,Ae=[],Le=!0,ae="",l();try{const i=await A("guildsync:request-discord-member-history-events",{discord_id:r},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");Ae=id(i.events)}catch(i){ae=v(i)}finally{Le=!1,n.keepLoading||l()}}}function rd(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function id(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s,o,c,u,y,S;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((r=(n=e.old_value)!=null?n:e.oldValue)!=null?r:"").trim(),new_value:String((s=(i=e.new_value)!=null?i:e.newValue)!=null?s:"").trim(),event_timestamp:(u=(c=(o=e.event_timestamp)!=null?o:e.eventTimestamp)!=null?c:e.timestamp)!=null?u:"",event_datetime:(S=(y=e.event_datetime)!=null?y:e.eventDatetime)!=null?S:"",source:String(e.source||"").trim()}}):[]}async function sd(t={}){const e=It.trim();if(!e){oe="",V=[],z=-1,$e="",we=[],_e=!1,l(),t.keepFocus&&B("rosterHistorySearchInput");return}_e=!0,oe="",V=[],z=-1,$e="",we=[],l(),t.keepFocus&&B("rosterHistorySearchInput");try{const n=await A("guildsync:request-roster-rank-history",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search roster rank history.");V=od(n.matches),z=V.length>0?0:-1}catch(n){oe=v(n)}finally{_e=!1,l(),t.keepFocus&&B("rosterHistorySearchInput")}}async function qi(t,e={}){const n=String(t||"").trim();if(!!n){$e=n,It=n,we=[],_e=!0,oe="",l();try{const r=await A("guildsync:request-roster-stream-history",{account_name:n},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load roster stream history.");we=ad(r.events)}catch(r){oe=v(r)}finally{_e=!1,e.keepLoading||l()}}}function od(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function ad(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(r=(n=e.timestamp)!=null?n:e.timestampS)!=null?r:"",officer:String(e.officer||"").trim()}}):[]}function ao(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(n=e.joined)!=null?n:""}}).sort((e,n)=>e.account_name.localeCompare(n.account_name)):[]}function cd(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function Dn(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function Or(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function ld(t={}){J=ao(t.members),hn=t.last_refresh||new Date().toISOString(),R==="eso-members"&&l(),h("roster-data-updated",`Roster data updated. Loaded ${J.length} member record${J.length===1?"":"s"}.`,{ttlMs:p})}async function zt(t={}){if(!!(d!=null&&d.connected)){Me=!0,l();try{const e=await A("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");J=ao(e.members),hn=e.last_refresh||hn,t.silent||h("roster-data-loaded",`Loaded ${J.length} roster member${J.length===1?"":"s"}.`,{ttlMs:p})}catch(e){h("roster-data-error",v(e),{ttlMs:p})}finally{Me=!1,l()}}}async function dd(t={}){var e;if(!!_()){if(!(d!=null&&d.connected)){h("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}Me=!0,l();try{const n=await Ha(t);if(!(n!=null&&n.ok)){h("roster-data-pending",(n==null?void 0:n.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:p});return}const r={local_upload_id:co(),authenticated_username:Q(),authenticated_discord_user_id:((e=m==null?void 0:m.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await uo(r)}catch(i){throw ud(r),i}await zt({silent:!0})}catch(n){h("roster-data-error",v(n),{ttlMs:p})}finally{Me=!1,l()}}}function co(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Ir(){try{const t=window.localStorage.getItem(ds),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function lo(t){window.localStorage.setItem(ds,JSON.stringify(Array.isArray(t)?t:[]))}function ud(t){const e=String((t==null?void 0:t.local_upload_id)||co()),n=Ir().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),lo(n),h("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function fd(t){const e=Ir().filter(n=>(n==null?void 0:n.local_upload_id)!==t);lo(e)}async function hd(){if(Wn||!(d!=null&&d.connected)||!_())return;const t=Ir();if(t.length!==0){Wn=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!_())return;await uo(e),fd(e.local_upload_id)}}catch(e){h("roster-data-pending-error",`Pending roster upload retry failed: ${v(e)}`,{ttlMs:p})}finally{Wn=!1}}}async function uo(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await A("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const n=await za(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return h("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:p}),e}async function pd(t={}){var e,n;if(!!_()){if(!(d!=null&&d.connected)){h("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}try{const r=await Ua(t);if(!(r!=null&&r.ok)){h("applications-data-info",(r==null?void 0:r.message)||"No application records were found to process.",{ttlMs:p});return}if((Array.isArray((e=r==null?void 0:r.data)==null?void 0:e.records)?r.data.records:[]).length===0){h("applications-data-info",`No application records were found in ${r.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:p});return}const s={local_upload_id:fo(),authenticated_username:Q(),authenticated_discord_user_id:((n=m==null?void 0:m.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await po(s)}catch(o){throw md(s),o}}catch(r){h("applications-data-error",v(r),{ttlMs:p})}}}function fo(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function xr(){try{const t=window.localStorage.getItem(us),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function ho(t){window.localStorage.setItem(us,JSON.stringify(Array.isArray(t)?t:[]))}function md(t){const e=String((t==null?void 0:t.local_upload_id)||fo()),n=xr().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),ho(n),h("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function gd(t){const e=xr().filter(n=>(n==null?void 0:n.local_upload_id)!==t);ho(e)}async function yd(){if(jn||!(d!=null&&d.connected)||!_())return;const t=xr();if(t.length!==0){jn=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!_())return;await po(e),gd(e.local_upload_id)}}catch(e){h("applications-data-pending-error",`Pending application upload retry failed: ${v(e)}`,{ttlMs:p})}finally{jn=!1}}}async function po(t){var i;if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return h("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:p}),{ok:!0,sent_count:0,skipped_empty:!0};let n=0;for(const s of e){const o=await A("guildsync:eso-guild-application-message",{...t,record:s,recordKey:(s==null?void 0:s.recordKey)||"",message:bd(s)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Backend rejected the application data payload. Application data was not cleared.");n+=1}const r=await Wa(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return h("applications-data-sent",`Sent ${n} application record${n===1?"":"s"} to GuildSync backend.`,{ttlMs:p}),{ok:!0,sent_count:n}}function bd(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),n=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",r=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",s=String(t.applicationText||"_No application text captured._"),o=Object.entries(t).filter(([c])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(c)).map(([c,u])=>`**${c}:** ${kd(u)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${n}** ${r} an application from **${i}**.`,"","**Application text:**","```",s.slice(0,1500),"```",o.length>0?"":null,o.length>0?"**Full captured record fields:**":null,...o].filter(c=>c!==null).join(`
`)}function kd(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function vd(t={}){await pd(t)}function Sd(){const t=br($),e=Fd(t,$),n=$!=="other";return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <button id="openManualBiweeklyTicketButton" class="bank-export-button" type="button" ${_()?"":'disabled title="Login required to add manual entries."'}>
            <span aria-hidden="true">\uFF0B</span>
            <span>Add Manual Entry</span>
          </button>
          ${Ed()}
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${a($o(gs))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${De||!_()?"disabled":""} ${_()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${De?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${Jn("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${Jn("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${Jn("other","?","Other","All other deposits")}
        </div>

        ${Ld($)}

        <div class="bank-deposit-table-shell">
          <table class="bank-deposit-table${n?"":" bank-deposit-table-no-tickets"}">
            <thead>
              <tr>
                <th>Event ID</th>
                <th>Date / Time (Local)</th>
                <th>Depositor</th>
                <th>Amount Deposited</th>
                ${n?"<th>Tickets Awarded</th>":""}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(r=>Pd(r,n)).join(""):Gd(n)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${a(vn(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${$==="monthly"?`<div>Raffle Pot: <strong>${a(vn(Math.floor(e.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${$==="biweekly"?`<div>Draws: <strong>${a(String(Math.ceil(e.amount/2e5)))}</strong></div>`:""}
          ${n?`<div>Total Tickets Awarded: <strong>${a(On(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${Pe?wd(br(Wt)):""}
    </div>
  `}function wd(t){return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${a(ee(Wt))} Deposits</h3>
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
              ${t.length>0?t.map(e=>_d(e)).join(""):Ad()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${a(bo(t))}</textarea>
      </div>
    </div>
  `}function _d(t){return`
    <tr>
      <td>${a(t.displayName||"")}</td>
      <td>${a(String(Number(t.amount)||0))}</td>
      <td>${a(String(Number(t.ticketAmount)||0))}</td>
      <td>${a(t.note||"")}</td>
    </tr>
  `}function Ad(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${a(ee(Wt))}.</td>
    </tr>
  `}function Ld(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=ko(t),n=qr(t),r=n<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${f(ee(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${a(ee(t))} Raffle Period ${n===0?"(Current)":`(${Math.abs(n)} period${Math.abs(n)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${a(cn(e.salesStart))} through ${a(cn(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${a(cn(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${r?"":"disabled"} aria-label="Next ${f(ee(t))} raffle period">\u203A</button>
    </div>
  `}function Jn(t,e,n,r){const i=$===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${f(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${a(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${a(n)}</span>
        <span class="bank-section-subtitle">${a(r)}</span>
      </span>
    </button>
  `}function Ed(){if(!_())return"";const t=Tn(),e=Kt(),n=mo(),r=t>0,i=e>0,s=n>0;if(!r&&!i&&!s)return"";let o="",c="",u=!1;r?(o=`Check Out ${t} Deposit Mail`,c="checkout"):i?(u=!0,Je?o=`Writing ${e} Pending Mail`:x.running?o=`${e} Mail Waiting for ESO Closure`:(Ao("render-pending-mail-button"),o=`${e} Mail Writing to Disk`)):(u=!0,o=`${n} Mail Ready to Send`);const y=r?"Check out new deposit mail. GuildSync will immediately try to write it, or hold it until ESO closes.":i?"Deposit mail is already checked out and will be written automatically after ESO closes.":"Deposit mail has been written to ESO SavedVariables and is ready for ESO to send it and write acknowledgements.",S=ir||Je,g=x.running?"ESO Running":"ESO Not Running",b=x.running?"eso-running":"eso-not-running";return`
    <button id="checkoutDepositMailButton" class="${`bank-export-button deposit-mail-button${u?" deposit-mail-status-only":""}`}" type="button" data-deposit-mail-action="${f(c)}" ${u||S?'aria-disabled="true"':""} title="${f(x.message||y)}" aria-label="${f(`${o}. ${y}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${a(o)}</span>
      <span aria-hidden="true">(</span><span class="deposit-mail-eso-status ${b}" aria-hidden="true">${a(g)}</span><span aria-hidden="true">)</span>
    </button>
  `}function Kt(){return Yt().reduce((t,e)=>t+_t(e.records).length,0)}function Rd(){const t=(m==null?void 0:m.user)||{};return new Set([Q(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function Md(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?Rd().has(e):!1}function mo(){return _()?P.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="written_to_eso"&&Md(t)}).length:0}function Tn(){return P.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="unsent"}).length}function $d(t){const e=String(t||"").trim();return P.find(n=>String(n.eventId||"").trim()===e)||null}function Cn(t){const e=String(t||"other").toLowerCase();return["biweekly","monthly","other"].filter(n=>n!==e)}function go(t={},e="other",n=""){const r=String(t.type||"other").toLowerCase(),i=ee(r),s=ee(e),o=Q()||"Unknown user",c=[`Moved from ${i} to ${s} by ${o}.`,`Ref ${t.eventId||""}`],u=String(n||"").trim();return u&&c.push(`Reason: ${u}`),c.join(`
`)}function Dd(t){const e=$d(t);if(!e){h("banking-move-missing","Could not find the selected banking entry.",{ttlMs:p});return}const n=String(e.type||"other").toLowerCase(),i=Cn(n)[0]||"other";ke=e,T={targetType:i,note:"",tickets:String(Number(e.ticketAmount)||0)},re="",lt=!1,St=!0,l()}function kn(){St=!1,lt=!1,re="",ke=null,T={targetType:"other",note:"",tickets:""},l()}function Td(){const t=ke||{},e=String(t.type||"other").toLowerCase(),n=ee(e),r=Cn(e);let i=String(T.targetType||r[0]||"other").toLowerCase();r.includes(i)||(i=r[0]||"other",T.targetType=i);const s=i!=="other",o=go(t,i,T.note);return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="bankingMoveDialogTitle">
      <div class="roster-history-dialog manual-ticket-dialog banking-move-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="bankingMoveDialogTitle">Move Banking Entry</h3>
            <p>Move this deposit to a different banking section while preserving a reference to the original event.</p>
          </div>
          <button id="closeBankingMoveDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${re?`<div class="discord-data-error">${a(re)}</div>`:""}

        <div class="manual-ticket-form banking-move-form">
          <div class="banking-move-current-entry">
            <div><strong>Current Type:</strong> ${a(n)}</div>
            <div><strong>Event ID:</strong> ${a(t.eventId||"")}</div>
            <div><strong>Depositor:</strong> ${a(t.displayName||"")}</div>
            <div><strong>Amount:</strong> ${a(vn(t.amount))} \u{1FA99}</div>
          </div>

          <div class="banking-move-target-row banking-move-switch-row">
            <span>Move To</span>
            <div class="banking-move-destination-switch" role="radiogroup" aria-label="Move banking entry destination">
              ${r.map((c,u)=>`
                <button
                  class="banking-move-destination-option ${i===c?"selected":""}"
                  type="button"
                  role="radio"
                  aria-checked="${i===c?"true":"false"}"
                  data-banking-move-target="${f(c)}"
                >${a(ee(c))}</button>
                ${u===0?'<div class="banking-move-switch-track" aria-hidden="true"><span></span></div>':""}
              `).join("")}
            </div>
          </div>

          ${s?`
            <label class="manual-ticket-count-field banking-move-ticket-field">
              <span>Tickets Awarded</span>
              <input id="bankingMoveTicketsInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${f(T.tickets)}" />
            </label>
          `:""}

          <label class="manual-ticket-note-field banking-move-note-field">
            <span>Move Note</span>
            <textarea id="bankingMoveNoteInput" class="discord-search-input manual-ticket-note-input banking-move-note-input" rows="2" placeholder="Optional reason for this move">${a(T.note)}</textarea>
          </label>

          <div class="roster-history-muted banking-move-generated-note">${a(o).replace(/\n/g,"<br>")}</div>

          <div class="manual-ticket-actions banking-move-actions">
            <button id="saveBankingMoveButton" class="refresh-discord-button banking-move-submit-button" type="button" ${lt?"disabled":""}>${lt?"MOVING...":"MOVE"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Cd(){var e,n,r,i;if(!St)return;(e=document.querySelector("#closeBankingMoveDialogButton"))==null||e.addEventListener("click",()=>kn()),document.querySelectorAll("[data-banking-move-target]").forEach(s=>{s.addEventListener("click",()=>{const o=String(s.dataset.bankingMoveTarget||"other").toLowerCase(),c=String((ke==null?void 0:ke.type)||"other").toLowerCase(),u=Cn(c);T.targetType=u.includes(o)?o:u[0]||"other",T.targetType==="other"&&(T.tickets="0"),l()})}),(n=document.querySelector("#bankingMoveTicketsInput"))==null||n.addEventListener("input",s=>{const o=String(s.target.value||"").replace(/\D/g,"");s.target.value!==o&&(s.target.value=o),T.tickets=o}),(r=document.querySelector("#bankingMoveNoteInput"))==null||r.addEventListener("input",s=>{T.note=s.target.value||"";const o=document.querySelector(".banking-move-generated-note");o&&(o.innerText=go(ke||{},T.targetType||"other",T.note))}),(i=document.querySelector("#saveBankingMoveButton"))==null||i.addEventListener("click",()=>Nd());const t=document.querySelector(".roster-history-overlay");t&&t.addEventListener("click",s=>{s.target===t&&kn()})}async function Nd(){const t=ke;if(!(t!=null&&t.eventId)){re="No banking entry is selected.",l();return}const e=String(t.type||"other").toLowerCase(),n=Cn(e),r=String(T.targetType||n[0]||"other").toLowerCase();if(!n.includes(r)){re="Select a valid destination section.",l();return}const i=r==="other"?0:Math.floor(Number(String(T.tickets||"").trim()||0));if(!Number.isFinite(i)||i<0){re="Tickets must be zero or greater.",l();return}lt=!0,re="",l();try{const s=await A("guildsync:move-banking-entry",{event_id:t.eventId,target_type:r,tickets:i,note:T.note||""},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to move banking entry.");kn(),await de({silent:!0}),h("banking-entry-moved",s.message||"Banking entry moved.",{ttlMs:p})}catch(s){lt=!1,re=v(s),l()}}function yo(){if(R!=="more")return;Cd(),document.querySelectorAll("[data-bank-entry-move]").forEach(o=>{o.addEventListener("click",()=>Dd(o.dataset.bankEntryMove||""))}),document.querySelectorAll("[data-bank-section]").forEach(o=>{o.addEventListener("click",()=>{$=o.dataset.bankSection||"biweekly",l()})}),document.querySelectorAll("[data-bank-export-section]").forEach(o=>{o.addEventListener("click",()=>{Wt=(o.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",Pe=!0,l()})}),document.querySelectorAll("[data-bank-period-move]").forEach(o=>{o.addEventListener("click",()=>{Id(o.dataset.bankPeriodMove||""),l()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{Pe=!1,l()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>Bd());const n=document.querySelector(".bank-export-overlay");n&&n.addEventListener("click",o=>{o.target===n&&(Pe=!1,l())});const r=document.querySelector("#openManualBiweeklyTicketButton");r&&r.addEventListener("click",async()=>{if(!_()){h("manual-ticket-login-required","Login required to add manual entries.",{ttlMs:p});return}ce=!0,G="",wt=L.accountName||"",Y=!1,N=-1,J.length===0&&(d==null?void 0:d.connected)&&_()&&await zt({silent:!0}),l()});const i=document.querySelector("#checkoutDepositMailButton");i&&i.addEventListener("click",()=>{i.dataset.depositMailAction==="checkout"&&i.getAttribute("aria-disabled")!=="true"&&Yd()});const s=document.querySelector("#refreshBankingDataButton");s&&s.addEventListener("click",()=>{if(!_()){h("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:p});return}So({key:"banking"})})}function bo(t){const e=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const n of t)e.push([n.displayName||"",String(Number(n.amount)||0),String(Number(n.ticketAmount)||0),n.note||""]);return e.map(n=>n.map(Nn).join("	")).join(`
`)}function Nn(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function Bn(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly","readonly"),n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.width="1px",n.style.height="1px",n.style.opacity="0",n.style.pointerEvents="none",n.style.zIndex="-1",document.body.appendChild(n),n.focus(),n.select(),n.setSelectionRange(0,n.value.length);let r=!1;try{r=document.execCommand("copy")}finally{document.body.removeChild(n)}return r}async function Bd(){const t=br(Wt),e=bo(t);if(await Bn(e)){h("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#bankingExportTsv");r&&(r.focus(),r.select()),h("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:p})}function br(t){return P.filter(e=>e.type===t).filter(e=>Od(t,e)).sort((e,n)=>(Number(n.time)||0)-(Number(e.time)||0))}function Od(t,e){if(t==="other")return!0;const n=Number(e==null?void 0:e.time)||0;if(n<=0)return!1;const r=ko(t);return n>=r.salesStart&&n<=r.salesEnd}function qr(t){return Number(lr[t])||0}function Id(t){if($!=="biweekly"&&$!=="monthly")return;const e=qr($);if(t==="previous"){lr[$]=e-1;return}t==="next"&&e<0&&(lr[$]=e+1)}function ko(t){const e=Math.floor(Date.now()/1e3),n=t==="monthly",r=n?bc:yc;let i=n?gc:mc;for(;i-r>e;)i-=r;for(;i<e;)i+=r;return i+=qr(t)*r,{salesStart:i-r+1,salesEnd:i,raffleTime:i+kc}}function xd(t=$){const e=String(t||"").toLowerCase();return e==="monthly"?3:e==="biweekly"?1:0}function qd(t={},e=$){const n=Number(t.amount)||0,r=xd(e);return r>0&&n>r&&Math.abs(n)%10===r?n-r:n}function Fd(t,e=$){return t.reduce((n,r)=>(n.amount+=qd(r,e),n.tickets+=Number(r.ticketAmount)||0,n),{amount:0,tickets:0})}function Pd(t,e=!0){return`
    <tr>
      <td>${a(t.note||t.eventId||"")}</td>
      <td>${a(cn(t.time))}</td>
      <td>${a(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${a(vn(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td><strong class="bank-ticket-amount">${a(On(t.ticketAmount))}</strong></td>`:""}
      <td><button class="bank-entry-move-button" type="button" data-bank-entry-move="${f(t.eventId||"")}">Move</button></td>
    </tr>
  `}function Gd(t=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?"6":"5"}">No ${a(ee($))} deposits found for this ${$==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function ee(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function cn(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function vn(t){return(Number(t)||0).toLocaleString()}function On(t){return(Number(t)||0).toLocaleString()}function _t(t){return Array.isArray(t)?t.map(e=>{var r,i,s,o,c,u,y,S,g,b,O,ue,At,ze,zr,Kr,Yr,Jr,Qr,Xr,Zr,ei,ti,ni,ri,ii,si,oi,ai,ci,li,di,ui,fi,hi,pi,mi,gi,yi,bi,ki;const n=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:n==="monthly"||n==="biweekly"||n==="other"?n:"other",eventId:String((i=(r=e==null?void 0:e.eventId)!=null?r:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((o=(s=e==null?void 0:e.time)!=null?s:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((u=(c=e==null?void 0:e.displayName)!=null?c:e==null?void 0:e.display_name)!=null?u:"").trim(),amount:Number((y=e==null?void 0:e.amount)!=null?y:0)||0,ticketAmount:Number((g=(S=e==null?void 0:e.ticketAmount)!=null?S:e==null?void 0:e.ticket_amount)!=null?g:0)||0,note:String((b=e==null?void 0:e.note)!=null?b:"").trim(),dataSource:String((ue=(O=e==null?void 0:e.dataSource)!=null?O:e==null?void 0:e.data_source)!=null?ue:"").trim(),emailRequested:Boolean((At=e==null?void 0:e.emailRequested)!=null?At:e==null?void 0:e.email_requested),mailStatus:String((zr=(ze=e==null?void 0:e.mailStatus)!=null?ze:e==null?void 0:e.mail_status)!=null?zr:"").trim(),mailRequestId:String((Yr=(Kr=e==null?void 0:e.mailRequestId)!=null?Kr:e==null?void 0:e.mail_request_id)!=null?Yr:"").trim(),mailBatchId:String((Qr=(Jr=e==null?void 0:e.mailBatchId)!=null?Jr:e==null?void 0:e.mail_batch_id)!=null?Qr:"").trim(),checkedOutBy:String((Zr=(Xr=e==null?void 0:e.checkedOutBy)!=null?Xr:e==null?void 0:e.checked_out_by)!=null?Zr:"").trim(),checkedOutAt:String((ti=(ei=e==null?void 0:e.checkedOutAt)!=null?ei:e==null?void 0:e.checked_out_at)!=null?ti:"").trim(),checkoutExpiresAt:String((ri=(ni=e==null?void 0:e.checkoutExpiresAt)!=null?ni:e==null?void 0:e.checkout_expires_at)!=null?ri:"").trim(),writtenToEsoAt:String((si=(ii=e==null?void 0:e.writtenToEsoAt)!=null?ii:e==null?void 0:e.written_to_eso_at)!=null?si:"").trim(),sentAt:String((ai=(oi=e==null?void 0:e.sentAt)!=null?oi:e==null?void 0:e.sent_at)!=null?ai:"").trim(),failedReason:String((li=(ci=e==null?void 0:e.failedReason)!=null?ci:e==null?void 0:e.failed_reason)!=null?li:"").trim(),recipient:String((hi=(fi=(ui=(di=e==null?void 0:e.recipient)!=null?di:e==null?void 0:e.account_name)!=null?ui:e==null?void 0:e.displayName)!=null?fi:e==null?void 0:e.display_name)!=null?hi:"").trim(),subject:String((gi=(mi=(pi=e==null?void 0:e.subject)!=null?pi:e==null?void 0:e.mailSubject)!=null?mi:e==null?void 0:e.mail_subject)!=null?gi:"").trim(),body:String((ki=(bi=(yi=e==null?void 0:e.body)!=null?yi:e==null?void 0:e.mailBody)!=null?bi:e==null?void 0:e.mail_body)!=null?ki:"").trim()}}):[]}function Ud(t){const e=new Map;for(const n of P)n.eventId&&e.set(n.eventId,n);for(const n of t)!n.eventId||e.set(n.eventId,n);P=Array.from(e.values()).sort((n,r)=>(Number(r.time)||0)-(Number(n.time)||0))}function vo(){gs=new Date().toISOString()}async function Vd(t={}){!(t!=null&&t.ok)||(P=_t(t.entries),vo(),R==="more"&&l(),h("banking-data-updated",`Banking data updated. Loaded ${P.length} deposit record${P.length===1?"":"s"}.`,{ttlMs:p}))}async function de(t={}){const e=Boolean(t.silent),n=Boolean(t.background);if(!(d!=null&&d.connected)){e||h("banking-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}n||(De=!0,l());try{const r=await A("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");P=_t(r.entries),vo(),e||h("banking-data",`Loaded ${P.length} banking deposit record${P.length===1?"":"s"}.`,{ttlMs:p})}catch(r){e||h("banking-data-error",v(r),{ttlMs:p})}finally{n||(De=!1),l()}}async function Fi(){!(d!=null&&d.connected)||!_()||De||(await de({silent:!0,background:!0}),Tn()<=0&&Kt()>0&&(x.running?l():Ao("availability-refresh")))}function Hd(){Ye&&clearInterval(Ye),Fi(),Ye=window.setInterval(Fi,uc)}function Wd(){Ye&&(clearInterval(Ye),Ye=null)}async function jd(t={}){if(!!_()){if(!(d!=null&&d.connected)){h("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:p});return}try{const e=await Ga(t);if(!(e!=null&&e.ok))return;const n=Array.isArray(e.ackEntries)?e.ackEntries:[];if(n.length===0)return;const r=await A("guildsync:mark-deposit-mail-sent",{mail_ack:n,mail_request_ids:n.map(o=>(o==null?void 0:o.mail_request_id)||(o==null?void 0:o.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(r.mail_request_ids)?r.mail_request_ids:Array.isArray(r.mailRequestIds)?r.mailRequestIds:[];if(i.length===0){h("deposit-mail-ack-none",r.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:p});return}const s=await Fa(i);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");h("deposit-mail-ack-sent",s.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:p}),await de({silent:!0})}catch(e){h("deposit-mail-ack-error",v(e),{ttlMs:p})}}}async function zd(){if(!zn){zn=!0;try{const t=await Ka();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&h("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:p})}catch(t){h("deposit-mail-ack-cleanup-error",v(t),{ttlMs:p})}finally{zn=!1}}}async function So(t={}){var e,n;if(!!_()){if(!(d!=null&&d.connected)){h("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}De=!0,l();try{const r=await Va(t);if(!(r!=null&&r.ok)){h("banking-data-pending",(r==null?void 0:r.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:p});return}const i=_t((e=r==null?void 0:r.data)==null?void 0:e.entries);Ud(i);const s=new Date().toISOString(),o={local_upload_id:Lo(),authenticated_username:Q(),authenticated_discord_user_id:((n=m==null?void 0:m.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:s,data:r.data||{}};try{await Ro(o)}catch(c){throw Xd(o),c}await de({silent:!0})}catch(r){h("banking-data-error",v(r),{ttlMs:p})}finally{De=!1,l()}}}function wo(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Yt(){try{const t=window.localStorage.getItem(ls),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function _o(t){window.localStorage.setItem(ls,JSON.stringify(Array.isArray(t)?t:[]))}function Kd(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||wo()),n=Yt().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);n.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),_o(n)}function Pi(t){const e=String(t||"").trim();if(!e)return;const n=Yt().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);_o(n)}async function Yd(){if(!_()){h("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:p});return}if(!(d!=null&&d.connected)){h("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:p});return}const t=Yt(),e=Tn();if(t.length>0&&e<=0){await ft();return}ir=!0,l();try{const n=await A("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail checkout request.");const r=_t(n.records);if(r.length===0){h("deposit-mail-none",n.message||"No unsent deposit mail is available.",{ttlMs:p}),await de({silent:!0});return}const i={mail_batch_id:n.mail_batch_id||n.mailBatchId||wo(),checked_out_by:n.checked_out_by||n.checkedOutBy||Q(),checked_out_at:new Date().toISOString(),records:r};Kd(i),await ft()}catch(n){h("deposit-mail-error",v(n),{ttlMs:p})}finally{ir=!1,l()}}function Ao(t=""){Qe||Je||!_()||Kt()<=0||x.running||(Qe=window.setTimeout(()=>{Qe=null,ft()},100))}async function ft(){if(Qe&&(window.clearTimeout(Qe),Qe=null),Je||!_())return;const t=Yt();if(t.length!==0){if(await kr({silent:!0}),x.running){h("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:p}),l();return}Je=!0,l();try{for(const e of t){const n=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),r=_t(e==null?void 0:e.records);if(r.length===0){Pi(n);continue}const i=await oc(r);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(d!=null&&d.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const s=await A("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:n,event_ids:i.eventIds||r.map(o=>o.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend did not confirm deposit mail was marked written_to_eso.");Pi(n),h("deposit-mail-written",i.message||`Wrote ${r.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:p})}await de({silent:!0})}catch(e){h("deposit-mail-write-error",v(e),{ttlMs:p})}finally{Je=!1,l()}}}async function kr(t={}){try{const e=Boolean(x.running),n=await Ya();x={running:Boolean(n==null?void 0:n.running),message:String((n==null?void 0:n.message)||"")},x.running||await zd(),e&&!x.running&&(h("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:p}),await ft()),e!==x.running&&l()}catch(e){t.silent||h("eso-status-error",v(e),{ttlMs:p})}}function Jd(){Ke&&clearInterval(Ke),kr({silent:!0}).then(()=>{!x.running&&Kt()>0&&ft()}),Ke=window.setInterval(()=>kr({silent:!0}),dc)}function Qd(){Ke&&(clearInterval(Ke),Ke=null)}function Lo(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Fr(){try{const t=window.localStorage.getItem(cs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Eo(t){window.localStorage.setItem(cs,JSON.stringify(Array.isArray(t)?t:[]))}function Xd(t){const e=String((t==null?void 0:t.local_upload_id)||Lo()),n=Fr().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Eo(n),h("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Zd(t){const e=Fr().filter(n=>(n==null?void 0:n.local_upload_id)!==t);Eo(e)}async function eu(){if(Hn||!(d!=null&&d.connected)||!_())return;const t=Fr();if(t.length!==0){Hn=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!_())return;await Ro(e),Zd(e.local_upload_id)}}catch(e){h("banking-data-pending-error",`Pending banking upload retry failed: ${v(e)}`,{ttlMs:p})}finally{Hn=!1}}}async function Ro(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await A("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const n=await ja(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return h("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:p}),e}function Mo(){if(R!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>tu());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{ot=!0,ae="",l(),B("discordHistorySearchInput")});const n=document.querySelector("#discordMemberSearch");n&&n.addEventListener("input",o=>{fn=o.target.value||"",sr=o.target.selectionStart,or=o.target.selectionEnd,l({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{au(o.dataset.discordSortColumn||"username")})});const r=document.querySelector("#discordRoleFilter");r&&r.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(Xe.add(c),l())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRoleFilter||"";Xe.delete(c),l()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(Ze.add(c),l())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeDiscordLinkStatusFilter||"";Ze.delete(c),l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>Ws(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{fn="",Xe.clear(),Ze.clear(),l()})}async function tu(){var t,e;if(!(d!=null&&d.connected)){h("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:p});return}un=!0,l(),h("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const n=await A("guildsync:request-discord-data-refresh",{requested_by:((t=m==null?void 0:m.user)==null?void 0:t.display_name)||((e=m==null?void 0:m.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to request Discord data refresh.");h("discord-refresh-requested",n.message||"Discord data refresh completed.",{ttlMs:p}),await Pr({silent:!0})}catch(n){h("discord-refresh-error",v(n),{ttlMs:p})}finally{un=!1,l()}}async function nu(){if(!(d!=null&&d.connected))return;const t=await A("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(Ln=t.value||null)}async function ru(t={}){if(!!(t!=null&&t.ok)){q=Gr(t.members),t.last_refresh&&(Ln=t.last_refresh);try{await nu()}catch{}R==="discord-members"&&l(),h("discord-data-updated",`Discord data updated. Loaded ${q.length} member record${q.length===1?"":"s"}.`,{ttlMs:p})}}async function Pr(t={}){const e=Boolean(t.silent);if(!(d!=null&&d.connected)){h("discord-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}Bt=!0,l();try{const[n,r]=await Promise.all([A("guildsync:request-discord-data-date",{}),A("guildsync:request-discord-member-dataJSON",{})]);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord refresh date.");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord member data.");Ln=n.value||null,q=Gr(r.members),e||h("discord-data",`Loaded ${q.length} Discord member record${q.length===1?"":"s"}.`,{ttlMs:p})}catch(n){h("discord-data-error",v(n),{ttlMs:p})}finally{Bt=!1,l()}}function A(t,e={},n=3e4){return new Promise((r,i)=>{if(!(d!=null&&d.connected)){i(new Error("GuildSync websocket is not connected."));return}let s=!1;const o=window.setTimeout(()=>{s||(s=!0,i(new Error(`${t} timed out.`)))},n);d.emit(t,e,c=>{s||(s=!0,window.clearTimeout(o),r(c))})})}function Gr(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(iu).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,n)=>qt(e).localeCompare(qt(n),void 0,{sensitivity:"base"})):[]}function iu(t){var i,s;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),n=String(t.role_name||t.name||"Unnamed Role").trim(),r=(s=(i=t.role_color)!=null?i:t.color)!=null?s:null;return{role_id:e,role_name:n||"Unnamed Role",role_color:r}}function su(){const t=fn.trim().toLowerCase(),e=Array.from(Xe),n=q.filter(r=>{if(t&&![r.username,r.global_name,r.server_nickname,r.discord_id,...r.roles.map(s=>s.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(r.roles.map(s=>s.role_name));if(!e.every(s=>i.has(s)))return!1}return!!Es(Ze,Uc(r))});return ou(n)}function ou(t){const e=Be==="desc"?-1:1;return[...t].sort((n,r)=>{const i=Gi(n,Ot),s=Gi(r,Ot),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:qt(n).localeCompare(qt(r),void 0,{sensitivity:"base",numeric:!0})})}function Gi(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(n=>n.role_name||"").filter(Boolean).sort((n,r)=>n.localeCompare(r,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function au(t){const n=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";Ot===n?Be=Be==="asc"?"desc":"asc":(Ot=n,Be="asc"),l()}function en(t,e){const n=Ot===t,r=Be==="asc"?"ascending":"descending",i=n?Be==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${n?r:"none"}">
      <button
        class="discord-sort-header${n?" active":""}"
        type="button"
        data-discord-sort-column="${f(t)}"
        title="Sort ${f(e)} ${n&&Be==="asc"?"descending":"ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function cu(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(sr)?sr:t.value.length,n=Number.isInteger(or)?or:e;t.setSelectionRange(e,n)}}function lu(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(ar)?ar:t.value.length,n=Number.isInteger(cr)?cr:e;t.setSelectionRange(e,n)}}function du(){const t=new Set;for(const e of q)for(const n of e.roles)n.role_name&&t.add(n.role_name);return Array.from(t).sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function uu(t){const e=mu(t),n=qt(t),r=t.roles||[];return`
    <tr data-discord-user-id="${f(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${f(e)}" alt="${f(n)}" />`:`<span>${a(qo(n))}</span>`}
          </div>
          <span>${a(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${a(t.global_name||"")}</td>
      <td>${a(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${r.length>0?r.map(i=>hu(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${Vs({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function fu(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${a(Bt?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function hu(t){const e=In(t.role_color),n=Hr(e),r=Vr(e,n);return`
    <span
      class="discord-role-badge"
      title="${f(t.role_name)}"
      style="${r}"
    >${a(t.role_name)}</span>
  `}function pu(t){const e=Ur(t),n=In(e==null?void 0:e.role_color),r=Hr(n),i=Vr(n,r);return`
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
  `}function Ur(t){for(const e of q){const n=e.roles.find(r=>r.role_name===t);if(n)return n}return null}function In(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function Vr(t,e){return[`--role-fill-top: ${Ui(t,"#ffffff",.16)}`,`--role-fill-bottom: ${Ui(t,"#000000",.1)}`,`--role-fill-glow: ${Vi(t,.28)}`,`--role-fill-edge: ${Vi(t,.46)}`,`color: ${e}`].join("; ")}function Ui(t,e,n){const r=tn(t)||tn("#64748b"),i=tn(e)||tn("#ffffff"),s=Math.max(0,Math.min(1,Number(n)||0)),o=Math.round(r.red+(i.red-r.red)*s),c=Math.round(r.green+(i.green-r.green)*s),u=Math.round(r.blue+(i.blue-r.blue)*s);return`#${Qn(o)}${Qn(c)}${Qn(u)}`}function tn(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function Qn(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function Vi(t,e){const n=String(t||"#64748b").replace("#",""),r=/^[0-9a-f]{6}$/i.test(n)?n:"64748b",i=parseInt(r.slice(0,2),16),s=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`rgba(${i}, ${s}, ${o}, ${e})`}function Hr(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const n=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(n*299+r*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function mu(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!n)return"";const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function qt(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function $o(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function ln(){const t=document.querySelector("#discordArea");if(!!t){if(Jt(!1),_()){const e=m.user||{},n=Q(),r=Nu(e),i=qo(n);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${r?`<img src="${f(r)}" alt="${f(n)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${a(i)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const s=document.querySelector("#discordAvatarButton");s.addEventListener("contextmenu",o=>{o.preventDefault(),Hi()}),s.addEventListener("click",()=>{Hi()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",vu)}}function Hi(){if(Gt){Jt();return}ku()}function gu(t=Se){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],n=String((t==null?void 0:t.directory)||"").trim(),r=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const s=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),o=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),c=String((i==null?void 0:i.filePath)||(n?`${n}\\${o}`:o)).trim(),u=(i==null?void 0:i.enabled)!==!1,y=r&&u,S=`profileFileWatchToggle-${bu(s||o)}`;return`
          <label class="profile-filewatch-item ${u?"enabled":"disabled"}" title="${f(c)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${a(o)}</span>
              <span class="profile-filewatch-state">${y?"Watching":u?"On":"Off"}</span>
            </span>
            <input
              id="${f(S)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${f(s)}"
              ${u?"checked":""}
              aria-label="Turn file watch ${u?"off":"on"} for ${f(o)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function Wr(){var r,i,s;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=Q(),n=((r=m.user)==null?void 0:r.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${a(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${a(Bu(n))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${a(An)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${Se!=null&&Se.watching?"Active":"Stopped"}</span>
        </div>
        ${gu()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(i=document.querySelector("#discordLogoutButton"))==null||i.addEventListener("click",Su),(s=document.querySelector("#associateTicketReportButton"))==null||s.addEventListener("click",()=>{Jt(!1),Ms()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",yu)})}async function Do(){try{Se=await Ja(),Gt&&Wr()}catch(t){h("file-watcher-error",v(t),{ttlMs:p})}}async function yu(t){var r;const e=t.currentTarget,n=String(((r=e==null?void 0:e.dataset)==null?void 0:r.filewatchKey)||"").trim();if(!!n)try{e.disabled=!0,Se=await tc(n,e.checked),await it({silent:!0}),Gt&&Wr()}catch(i){h("file-watcher-error",v(i),{ttlMs:p}),await Do()}}function bu(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function ku(){const t=document.querySelector("#discordProfileMenu");!t||(Wr(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),Gt=!0,Do(),setTimeout(()=>{window.addEventListener("click",To),window.addEventListener("keydown",Co)},0))}function Jt(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),Gt=!1,t&&(window.removeEventListener("click",To),window.removeEventListener("keydown",Co))}function To(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&Jt()}function Co(t){t.key==="Escape"&&Jt()}async function vu(){try{h("auth","Opening Discord login...",{ttlMs:p});const t=await rc();t!=null&&t.status_message&&h("auth",t.status_message,{ttlMs:p}),Ee()}catch(t){h("auth-error",v(t),{ttlMs:p}),Ee()}}async function Su(){try{m=await Xa(),h("auth",m.status_message||"Logged out.",{ttlMs:p}),ys(),Nt(),await it()}catch(t){h("auth-error",v(t),{ttlMs:p}),Ee()}}function Nt(){const t=m.socket_url||"https://guildsync.perdues.me";wu(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};m!=null&&m.token&&(e.auth={token:m.token}),d=on(t,e),d.on("connect",()=>{Ee(),No(),R==="discord-members"&&Pr({silent:!0}),R==="eso-members"&&zt({silent:!0}),R==="more"&&de({silent:!0}),eu(),ft(),Jd(),Hd(),hd(),yd(),_u()}),d.on("connect_error",()=>{Ee(),Sn()}),d.on("disconnect",()=>{Ee(),Sn(),Qd(),Wd()}),d.on("guildsync:version-status",n=>{Au(n)}),d.on("guildsync:discord-member-data-updated",n=>{ru(n)}),d.on("guildsync:banking-data-updated",n=>{Vd(n)}),d.on("guildsync:roster-data-updated",n=>{ld(n)}),d.on("guildsync:member-links-updated",(n={})=>{Array.isArray(n.links)&&(E=n.links,(R==="discord-members"||R==="eso-members"||R==="settings"||Te)&&l())}),d.on("guildsync:discord-refresh-status",(n={})=>{const r=String(n.message||"").trim();r&&h("discord-refresh-status",r,{ttlMs:p})})}function wu(t=!0){Sn(),d&&(d.disconnect(),d=null),t&&Ee()}function No(){!(d!=null&&d.connected)||d.emit("guildsync:client-version",{version:An,platform:Bo(),client_type:"wails"})}function _u(){Sn(),an=window.setInterval(()=>{No()},lc)}function Sn(){an&&(window.clearInterval(an),an=null)}function Au(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",n=t.download&&typeof t.download=="object"?t.download:{};fe={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||n.url||"").trim(),fileName:String(t.download_file_name||n.file_name||"").trim(),platformLabel:String(n.label||t.platform||Bo()).trim()},h("version",`GuildSync is out of date. Current version: ${An}. Latest version: ${e}.`),vr();return}fe={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},vr(),jr("version")}}function Bo(){const t=String(navigator.userAgent||"").toLowerCase(),n=`${String(navigator.platform||"").toLowerCase()} ${t}`;return n.includes("mac")?"macos":n.includes("linux")?"linux":"windows"}function vr(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!fe.updateRequired||!fe.downloadUrl){t.innerHTML="";return}const e=fe.platformLabel||"Desktop",n=fe.latestVersion||"latest",r=fe.fileName||"GuildSync client download";t.innerHTML=`
    <button
      id="desktopUpdateDownloadButton"
      class="desktop-update-download-button"
      type="button"
      title="Download ${f(r)}"
      aria-label="Download GuildSync ${f(n)} for ${f(e)}"
    >
      <span class="desktop-update-download-icon" aria-hidden="true">\u2B07</span>
      <span class="desktop-update-download-copy">
        <span class="desktop-update-download-title">Update Available</span>
        <span class="desktop-update-download-subtitle">${a(e)} \xB7 ${a(n)}</span>
      </span>
    </button>
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{Lu()})}function Lu(){const t=String(fe.downloadUrl||"").trim();if(!t){h("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:p});return}cc(t)}function h(t,e,n={}){const r=String(t||"").trim(),i=String(e||"").trim();if(!(!r||!i)){if(Re.set(r,i),Ne.has(r)&&(window.clearTimeout(Ne.get(r)),Ne.delete(r)),n.ttlMs&&Number(n.ttlMs)>0){const s=window.setTimeout(()=>{jr(r)},Number(n.ttlMs));Ne.set(r,s)}ht()}}function jr(t){const e=String(t||"").trim();if(!!e){if(Re.delete(e),Ne.has(e)&&(window.clearTimeout(Ne.get(e)),Ne.delete(e)),C===e){Fn(()=>{C="",ht()});return}ht()}}function ht(){const t=xn();if(t.length===0){Ge?Fn(Ft):Ft();return}!Ge&&!Ue&&qn(t[0])}function xn(){return Array.from(Re.keys())}function Oo(){const t=xn();if(t.length===0)return"";if(!C)return t[0];const e=t.indexOf(C);return e<0?t[0]:t[(e+1)%t.length]}function qn(t){const e=document.querySelector("#statusMessageTrack");if(!e||!Re.has(t)){Ft();return}Pn();const n=Re.get(t);C=t,Ge=!0,Ue=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=n,e.style.setProperty("--message-fade-duration",`${hs}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",Ue=!1,Eu()},{once:!0})})}function Eu(){const t=xn();if(!C||!Re.has(C)){ht();return}if(t.length<=1){Wi(!1);return}Wi(!0)}function Wi(t){const e=document.querySelector("#statusMessageViewport"),n=document.querySelector("#statusMessageTrack");if(!e||!n)return;const r=Math.max(0,n.scrollWidth-e.clientWidth);if(r<=0){t&&Pt(()=>{Fn(()=>{const i=Oo();C="",i?qn(i):Ft()})},fs);return}Pt(()=>{Io(r,t)},ps)}function Io(t,e){const n=document.querySelector("#statusMessageTrack");if(!n||!C||!Re.has(C))return;const r=Math.max(4,Math.ceil(t/hc));n.style.setProperty("--long-scroll-distance",`${t}px`),n.style.setProperty("--long-scroll-duration",`${r}s`),n.classList.add("long-scroll"),n.addEventListener("animationend",()=>{if(n.classList.remove("long-scroll"),n.style.transform=`translateX(-${t}px) translateY(-50%)`,e){Pt(()=>{Fn(()=>{const i=Oo();C="",i?qn(i):Ft()})},fs);return}Pt(()=>{Ru()},fc)},{once:!0})}function Ru(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!C||!Re.has(C))return;if(xn().length!==1){ht();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const r=Math.max(0,e.scrollWidth-t.clientWidth);r<=0||Pt(()=>{Io(r,!1)},ps)}function Fn(t){const e=document.querySelector("#statusMessageTrack");if(Pn(),!e||!Ge){typeof t=="function"&&t();return}Ue=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${hs}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",Ge=!1,Ue=!1,typeof t=="function"&&t()},{once:!0})}function Ft(){const t=document.querySelector("#statusMessageTrack");Pn(),C="",Ge=!1,Ue=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function Pt(t,e){const n=window.setTimeout(()=>{Tt=Tt.filter(r=>r!==n),t()},e);Tt.push(n)}function Pn(){for(const t of Tt)window.clearTimeout(t);Tt=[]}function xo(){if(!Ge||Ue||!C)return;const t=C;Pn(),qn(t)}function Ee(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(d!=null&&d.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!_()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${Q()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${Q()}`)}}async function it(t={}){try{if(_()){const e=await ic();Se=e,!t.silent&&(e==null?void 0:e.message)&&h(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:p});return}Se=await sc(),jr("file-watcher")}catch(e){h("file-watcher-error",v(e),{ttlMs:p})}}function $t(t,e=null){const n="[GuildSync File Watcher]";if(e){console.log(`${n} ${t}`,e);return}console.log(`${n} ${t}`)}function Mu(t={}){if(!_()){$t("SavedVariables change ignored because the user is not authenticated.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",n=e.toLowerCase(),r=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=String(t.filePath||"").trim(),o=r?`${r} saved variables (${i})`:i;$t(`SavedVariables change detected: ${i}${s?` (${s})`:""}. Key: ${n}.`,t),h(`saved-vars-file-updated-${e}`,`${o} has been updated.`,{ttlMs:p}),n==="banking"&&($t(`Processing banking SavedVariables update from ${i}.`),$u(t)),n==="roster"&&($t(`Processing roster SavedVariables update from ${i}.`),Du(t)),n==="applications"&&($t(`Processing applications SavedVariables update from ${i}.`),vd(t))}async function $u(t={}){await jd(t),await So(t)}async function Du(t={}){await dd(t)}function Tu(t){!_()||h("file-watcher-error",v(t),{ttlMs:p})}function Cu(){Et("guildsync-savedvars-file-modified",Mu),Et("guildsync-file-watcher-error",Tu),Et("guildsync-login-complete",async t=>{m=t||{logged_in:!1,allowed:!1},ln(),Nt(),await it(),h("auth",m.status_message||`Logged in and authorized as ${Q()}.`,{ttlMs:p})}),Et("guildsync-login-denied",async t=>{m={logged_in:!1,allowed:!1,status_message:""},ln(),await it(),h("auth",t||"Access denied.",{ttlMs:p}),Nt()}),Et("guildsync-login-failed",async t=>{m={logged_in:!1,allowed:!1,status_message:""},ln(),await it(),h("auth",t||"Login failed.",{ttlMs:p}),Nt()})}function _(){return Boolean((m==null?void 0:m.logged_in)&&(m==null?void 0:m.allowed)&&(m==null?void 0:m.token))}function Q(){var t,e;return((t=m.user)==null?void 0:t.display_name)||((e=m.user)==null?void 0:e.username)||"Discord User"}function Nu(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),n=String(t.discord_user_id||"").trim();if(!e||!n)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=128`}function qo(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function Bu(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Ou(){Rt&&(Rt.disconnect(),Rt=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),n=Math.round(t.getBoundingClientRect().height);Rt=new ResizeObserver(r=>{const i=r[0];if(!i)return;const s=Math.round(i.contentRect.width),o=Math.round(i.contentRect.height);s===e&&o===n||(e=s,n=o,Fo(),xo())}),Rt.observe(t)}function Fo(){clearTimeout(Ai),Ai=setTimeout(async()=>{try{await as()}catch{}},500)}function v(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function a(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function f(t){return a(t)}Cu();vc();
