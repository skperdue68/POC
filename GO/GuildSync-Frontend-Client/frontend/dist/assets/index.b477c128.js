(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Ko="/assets/splash.ea386b6a.png",Yo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",Jo="/assets/GuildSync-Graphic.9169020d.png",te=Object.create(null);te.open="0";te.close="1";te.ping="2";te.pong="3";te.message="4";te.upgrade="5";te.noop="6";const sn=Object.create(null);Object.keys(te).forEach(t=>{sn[te[t]]=t});const er={type:"error",data:"parser error"},Qi=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Xi=typeof ArrayBuffer=="function",Zi=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,_r=({type:t,data:e},n,r)=>Qi&&e instanceof Blob?n?r(e):Ai(e,r):Xi&&(e instanceof ArrayBuffer||Zi(e))?n?r(e):Ai(new Blob([e]),r):r(te[t]+(e||"")),Ai=(t,e)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];e("b"+(r||""))},n.readAsDataURL(t)};function Li(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let Vn;function Qo(t,e){if(Qi&&t.data instanceof Blob)return t.data.arrayBuffer().then(Li).then(e);if(Xi&&(t.data instanceof ArrayBuffer||Zi(t.data)))return e(Li(t.data));_r(t,!1,n=>{Vn||(Vn=new TextEncoder),e(Vn.encode(n))})}const Ei="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Tt=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<Ei.length;t++)Tt[Ei.charCodeAt(t)]=t;const Xo=t=>{let e=t.length*.75,n=t.length,r,i=0,s,o,c,u;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const b=new ArrayBuffer(e),S=new Uint8Array(b);for(r=0;r<n;r+=4)s=Tt[t.charCodeAt(r)],o=Tt[t.charCodeAt(r+1)],c=Tt[t.charCodeAt(r+2)],u=Tt[t.charCodeAt(r+3)],S[i++]=s<<2|o>>4,S[i++]=(o&15)<<4|c>>2,S[i++]=(c&3)<<6|u&63;return b},Zo=typeof ArrayBuffer=="function",Ar=(t,e)=>{if(typeof t!="string")return{type:"message",data:es(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:ea(t.substring(1),e)}:sn[n]?t.length>1?{type:sn[n],data:t.substring(1)}:{type:sn[n]}:er},ea=(t,e)=>{if(Zo){const n=Xo(t);return es(n,e)}else return{base64:!0,data:t}},es=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},ts=String.fromCharCode(30),ta=(t,e)=>{const n=t.length,r=new Array(n);let i=0;t.forEach((s,o)=>{_r(s,!1,c=>{r[o]=c,++i===n&&e(r.join(ts))})})},na=(t,e)=>{const n=t.split(ts),r=[];for(let i=0;i<n.length;i++){const s=Ar(n[i],e);if(r.push(s),s.type==="error")break}return r};function ra(){return new TransformStream({transform(t,e){Qo(t,n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,r)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(r))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(n)})}})}let Hn;function Zt(t){return t.reduce((e,n)=>e+n.length,0)}function en(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let r=0;for(let i=0;i<e;i++)n[i]=t[0][r++],r===t[0].length&&(t.shift(),r=0);return t.length&&r<t[0].length&&(t[0]=t[0].slice(r)),n}function ia(t,e){Hn||(Hn=new TextDecoder);const n=[];let r=0,i=-1,s=!1;return new TransformStream({transform(o,c){for(n.push(o);;){if(r===0){if(Zt(n)<1)break;const u=en(n,1);s=(u[0]&128)===128,i=u[0]&127,i<126?r=3:i===126?r=1:r=2}else if(r===1){if(Zt(n)<2)break;const u=en(n,2);i=new DataView(u.buffer,u.byteOffset,u.length).getUint16(0),r=3}else if(r===2){if(Zt(n)<8)break;const u=en(n,8),b=new DataView(u.buffer,u.byteOffset,u.length),S=b.getUint32(0);if(S>Math.pow(2,53-32)-1){c.enqueue(er);break}i=S*Math.pow(2,32)+b.getUint32(4),r=3}else{if(Zt(n)<i)break;const u=en(n,i);c.enqueue(Ar(s?u:Hn.decode(u),e)),r=0}if(i===0||i>t){c.enqueue(er);break}}}})}const ns=4;function M(t){if(t)return sa(t)}function sa(t){for(var e in M.prototype)t[e]=M.prototype[e];return t}M.prototype.on=M.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};M.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};M.prototype.off=M.prototype.removeListener=M.prototype.removeAllListeners=M.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===e||r.fn===e){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+t],this};M.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,e)}return this};M.prototype.emitReserved=M.prototype.emit;M.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};M.prototype.hasListeners=function(t){return!!this.listeners(t).length};const Ln=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0))(),U=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),oa="arraybuffer";function rs(t,...e){return e.reduce((n,r)=>(t.hasOwnProperty(r)&&(n[r]=t[r]),n),{})}const aa=U.setTimeout,ca=U.clearTimeout;function En(t,e){e.useNativeTimers?(t.setTimeoutFn=aa.bind(U),t.clearTimeoutFn=ca.bind(U)):(t.setTimeoutFn=U.setTimeout.bind(U),t.clearTimeoutFn=U.clearTimeout.bind(U))}const la=1.33;function da(t){return typeof t=="string"?ua(t):Math.ceil((t.byteLength||t.size)*la)}function ua(t){let e=0,n=0;for(let r=0,i=t.length;r<i;r++)e=t.charCodeAt(r),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(r++,n+=4);return n}function is(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function fa(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function ha(t){let e={},n=t.split("&");for(let r=0,i=n.length;r<i;r++){let s=n[r].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class pa extends Error{constructor(e,n,r){super(e),this.description=n,this.context=r,this.type="TransportError"}}class Lr extends M{constructor(e){super(),this.writable=!1,En(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,r){return super.emitReserved("error",new pa(e,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=Ar(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=fa(e);return n.length?"?"+n:""}}class ma extends Lr{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};na(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,ta(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=is()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let ss=!1;try{ss=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const ga=ss;function ya(){}class ba extends ma{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let r=location.port;r||(r=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,n){const r=this.request({method:"POST",data:e});r.on("success",n),r.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=e}}class Z extends M{constructor(e,n,r){super(),this.createRequest=e,En(this,r),this._opts=r,this._method=r.method||"GET",this._uri=n,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const n=rs(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(n);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var i;r.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=Z.requestsCount++,Z.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=ya,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Z.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Z.requestsCount=0;Z.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Ri);else if(typeof addEventListener=="function"){const t="onpagehide"in U?"pagehide":"unload";addEventListener(t,Ri,!1)}}function Ri(){for(let t in Z.requests)Z.requests.hasOwnProperty(t)&&Z.requests[t].abort()}const ka=function(){const t=os({xdomain:!1});return t&&t.responseType!==null}();class va extends ba{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=ka&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Z(os,this.uri(),e)}}function os(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||ga))return new XMLHttpRequest}catch{}if(!e)try{return new U[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const as=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Sa extends Lr{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,r=as?{}:rs(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;_r(r,this.supportsBinary,s=>{try{this.doWrite(r,s)}catch{}i&&Ln(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=is()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const Wn=U.WebSocket||U.MozWebSocket;class wa extends Sa{createSocket(e,n,r){return as?new Wn(e,n,r):n?new Wn(e,n):new Wn(e)}doWrite(e,n){this.ws.send(n)}}class _a extends Lr{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=ia(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(n).getReader(),i=ra();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const s=()=>{r.read().then(({done:c,value:u})=>{c||(this.onPacket(u),s())}).catch(c=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;this._writer.write(r).then(()=>{i&&Ln(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Aa={websocket:wa,webtransport:_a,polling:va},La=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Ea=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function tr(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),r=t.indexOf("]");n!=-1&&r!=-1&&(t=t.substring(0,n)+t.substring(n,r).replace(/:/g,";")+t.substring(r,t.length));let i=La.exec(t||""),s={},o=14;for(;o--;)s[Ea[o]]=i[o]||"";return n!=-1&&r!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=Ra(s,s.path),s.queryKey=Ma(s,s.query),s}function Ra(t,e){const n=/\/{2,9}/g,r=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function Ma(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,s){i&&(n[i]=s)}),n}const nr=typeof addEventListener=="function"&&typeof removeEventListener=="function",on=[];nr&&addEventListener("offline",()=>{on.forEach(t=>t())},!1);class ve extends M{constructor(e,n){if(super(),this.binaryType=oa,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const r=tr(e);n.hostname=r.host,n.secure=r.protocol==="https"||r.protocol==="wss",n.port=r.port,r.query&&(n.query=r.query)}else n.host&&(n.hostname=tr(n.host).host);En(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(r=>{const i=r.prototype.name;this.transports.push(i),this._transportsByName[i]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=ha(this.opts.query)),nr&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},on.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=ns,n.transport=e,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&ve.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",ve.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(n+=da(i)),r>0&&n>this._maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Ln(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,r){return this._sendPacket("message",e,n,r),this}send(e,n,r){return this._sendPacket("message",e,n,r),this}_sendPacket(e,n,r,i){if(typeof n=="function"&&(i=n,n=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const s={type:e,data:n,options:r};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(ve.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),nr&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=on.indexOf(this._offlineEventListener);r!==-1&&on.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}}ve.protocol=ns;class $a extends ve{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let n=this.createTransport(e),r=!1;ve.priorWebsocketSuccess=!1;const i=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",m=>{if(!r)if(m.type==="pong"&&m.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;ve.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(S(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const y=new Error("probe error");y.transport=n.name,this.emitReserved("upgradeError",y)}}))};function s(){r||(r=!0,S(),n.close(),n=null)}const o=m=>{const y=new Error("probe error: "+m);y.transport=n.name,s(),this.emitReserved("upgradeError",y)};function c(){o("transport closed")}function u(){o("socket closed")}function b(m){n&&m.name!==n.name&&s()}const S=()=>{n.removeListener("open",i),n.removeListener("error",o),n.removeListener("close",c),this.off("close",u),this.off("upgrading",b)};n.once("open",i),n.once("error",o),n.once("close",c),this.once("close",u),this.once("upgrading",b),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const n=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&n.push(e[r]);return n}}class Da extends $a{constructor(e,n={}){const r=typeof e=="object"?e:n;(!r.transports||r.transports&&typeof r.transports[0]=="string")&&(r.transports=(r.transports||["polling","websocket","webtransport"]).map(i=>Aa[i]).filter(i=>!!i)),super(e,r)}}function Ta(t,e="",n){let r=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),r=tr(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const s=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+s+":"+r.port+e,r.href=r.protocol+"://"+s+(n&&n.port===r.port?"":":"+r.port),r}const Ca=typeof ArrayBuffer=="function",Na=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,cs=Object.prototype.toString,Ba=typeof Blob=="function"||typeof Blob<"u"&&cs.call(Blob)==="[object BlobConstructor]",Oa=typeof File=="function"||typeof File<"u"&&cs.call(File)==="[object FileConstructor]";function Er(t){return Ca&&(t instanceof ArrayBuffer||Na(t))||Ba&&t instanceof Blob||Oa&&t instanceof File}function an(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,r=t.length;n<r;n++)if(an(t[n]))return!0;return!1}if(Er(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return an(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&an(t[n]))return!0;return!1}function Ia(t){const e=[],n=t.data,r=t;return r.data=rr(n,e),r.attachments=e.length,{packet:r,buffers:e}}function rr(t,e){if(!t)return t;if(Er(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let r=0;r<t.length;r++)n[r]=rr(t[r],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=rr(t[r],e));return n}return t}function xa(t,e){return t.data=ir(t.data,e),delete t.attachments,t}function ir(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=ir(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=ir(t[n],e));return t}const ls=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],qa=5;var k;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(k||(k={}));class Pa{constructor(e){this.replacer=e}encode(e){return(e.type===k.EVENT||e.type===k.ACK)&&an(e)?this.encodeAsBinary({type:e.type===k.EVENT?k.BINARY_EVENT:k.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===k.BINARY_EVENT||e.type===k.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=Ia(e),r=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(r),i}}class Rr extends M{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const r=n.type===k.BINARY_EVENT;r||n.type===k.BINARY_ACK?(n.type=r?k.EVENT:k.ACK,this.reconstructor=new Fa(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(Er(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const r={type:Number(e.charAt(0))};if(k[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===k.BINARY_EVENT||r.type===k.BINARY_ACK){const s=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(s,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");const c=Number(o);if(!ds(c)||c<0)throw new Error("Illegal attachments");if(c>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=c}if(e.charAt(n+1)==="/"){const s=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););r.nsp=e.substring(s,n)}else r.nsp="/";const i=e.charAt(n+1);if(i!==""&&Number(i)==i){const s=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}r.id=Number(e.substring(s,n+1))}if(e.charAt(++n)){const s=this.tryParse(e.substr(n));if(Rr.isPayloadValid(r.type,s))r.data=s;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case k.CONNECT:return fn(n);case k.DISCONNECT:return n===void 0;case k.CONNECT_ERROR:return typeof n=="string"||fn(n);case k.EVENT:case k.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&ls.indexOf(n[0])===-1);case k.ACK:case k.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Fa{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=xa(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Ga(t){return typeof t=="string"}const ds=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function Ua(t){return t===void 0||ds(t)}function fn(t){return Object.prototype.toString.call(t)==="[object Object]"}function Va(t,e){switch(t){case k.CONNECT:return e===void 0||fn(e);case k.DISCONNECT:return e===void 0;case k.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&ls.indexOf(e[0])===-1);case k.ACK:return Array.isArray(e);case k.CONNECT_ERROR:return typeof e=="string"||fn(e);default:return!1}}function Ha(t){return Ga(t.nsp)&&Ua(t.id)&&Va(t.type,t.data)}const Wa=Object.freeze(Object.defineProperty({__proto__:null,protocol:qa,get PacketType(){return k},Encoder:Pa,Decoder:Rr,isPacketValid:Ha},Symbol.toStringTag,{value:"Module"}));function j(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const ja=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class us extends M{constructor(e,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[j(e,"open",this.onopen.bind(this)),j(e,"packet",this.onpacket.bind(this)),j(e,"error",this.onerror.bind(this)),j(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var r,i,s;if(ja.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const o={type:k.EVENT,data:n};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const S=this.ids++,m=n.pop();this._registerAckCallback(S,m),o.id=S}const c=(i=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||i===void 0?void 0:i.writable,u=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!c||(u?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,n){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[e]=n;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let c=0;c<this.sendBuffer.length;c++)this.sendBuffer[c].id===e&&this.sendBuffer.splice(c,1);n.call(this,new Error("operation has timed out"))},i),o=(...c)=>{this.io.clearTimeoutFn(s),n.apply(this,c)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...n){return new Promise((r,i)=>{const s=(o,c)=>o?i(o):r(c);s.withError=!0,n.push(s),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>(this._queue[0],i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(i)):(this._queue.shift(),n&&n(null,...s)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:k.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case k.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case k.EVENT:case k.BINARY_EVENT:this.onevent(e);break;case k.ACK:case k.BINARY_ACK:this.onack(e);break;case k.DISCONNECT:this.ondisconnect();break;case k.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let r=!1;return function(...i){r||(r=!0,n.packet({type:k.ACK,id:e,data:i}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:k.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,e.data)}}}function mt(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}mt.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-n:t+n}return Math.min(t,this.max)|0};mt.prototype.reset=function(){this.attempts=0};mt.prototype.setMin=function(t){this.ms=t};mt.prototype.setMax=function(t){this.max=t};mt.prototype.setJitter=function(t){this.jitter=t};class sr extends M{constructor(e,n){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,En(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new mt({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const i=n.parser||Wa;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Da(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=j(n,"open",function(){r.onopen(),e&&e()}),s=c=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",c),e?e(c):this.maybeReconnectOnOpen()},o=j(n,"error",s);if(this._timeout!==!1){const c=this._timeout,u=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),n.close()},c);this.opts.autoUnref&&u.unref(),this.subs.push(()=>{this.clearTimeoutFn(u)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(j(e,"ping",this.onping.bind(this)),j(e,"data",this.ondata.bind(this)),j(e,"error",this.onerror.bind(this)),j(e,"close",this.onclose.bind(this)),j(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){Ln(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new us(this,e,n),this.nsps[e]=r),r}_destroy(e){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let r=0;r<n.length;r++)this.engine.write(n[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Et={};function cn(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=Ta(t,e.path||"/socket.io"),r=n.source,i=n.id,s=n.path,o=Et[i]&&s in Et[i].nsps,c=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let u;return c?u=new sr(r,e):(Et[i]||(Et[i]=new sr(r,e)),u=Et[i]),n.query&&!e.query&&(e.query=n.queryKey),u.socket(n.path,e)}Object.assign(cn,{Manager:sr,Socket:us,io:cn,connect:cn});function za(t){return window.go.main.App.CleanupDepositMailAckFromGuildSyncBanking(t)}function Ka(){return window.go.main.App.CloseWindow()}function Ya(t){return window.go.main.App.CollectDepositMailAckFromGuildSyncBanking(t)}function Ja(t){return window.go.main.App.CollectGuildSyncApplicationsData(t)}function Qa(t){return window.go.main.App.CollectGuildSyncBankingData(t)}function Xa(t){return window.go.main.App.CollectGuildSyncRosterData(t)}function Za(t,e){return window.go.main.App.CommitGuildSyncApplicationsData(t,e)}function ec(t,e){return window.go.main.App.CommitGuildSyncBankingData(t,e)}function tc(t,e){return window.go.main.App.CommitGuildSyncRosterData(t,e)}function nc(){return window.go.main.App.FlushPendingDepositMailAckCleanup()}function rc(){return window.go.main.App.GetESORunningStatus()}function ic(){return window.go.main.App.GetGuildSyncFileWatcherStatus()}function sc(){return window.go.main.App.GetGuildSyncSession()}function oc(){return window.go.main.App.LogoutGuildSync()}function ac(){return window.go.main.App.MaximizeWindow()}function cc(){return window.go.main.App.MinimizeWindow()}function fs(){return window.go.main.App.SaveWindowState()}function lc(t,e){return window.go.main.App.SetGuildSyncSavedVarsWatchFileEnabled(t,e)}function dc(){return window.go.main.App.ShowMainWindow()}function uc(){return window.go.main.App.StartDiscordLogin()}function fc(){return window.go.main.App.StartGuildSyncFileWatcher()}function hc(){return window.go.main.App.StopGuildSyncFileWatcher()}function pc(t){return window.go.main.App.WriteDepositMailToGuildSyncBanking(t)}function mc(t,e,n){return window.runtime.EventsOnMultiple(t,e,n)}function Rt(t,e){return mc(t,e,-1)}function gc(t){window.runtime.BrowserOpenURL(t)}const Rn="1.1.2",yc=30*60*1e3,hs="guildsync-pending-banking-uploads",ps="guildsync-pending-deposit-mail",bc=5e3,kc=30*1e3,ms="guildsync-pending-roster-uploads",gs="guildsync-pending-applications-uploads",p=60*1e3,ys=7e3,bs=1400,ks=2400,vc=4e3,Sc=38,vs=document.querySelector("#app");let Mi=null,Mt=null,$i=!1,Vt=!1,ln=null,jn=!1,zn=!1,Kn=!1,Se=null,x={running:!1,message:""},Ye=null,Je=null,or=!1,Qe=!1,Xe=null,Yn=!1,Re=new Map,Be=new Map,C="",Ue=!1,Ve=!1,Ct=[],g={logged_in:!1,allowed:!1,status_message:""},he={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},d=null,q=[],Mn=null,It=!1,hn=!1,pn="",Ze=new Set,et=new Set,xt="username",Oe="asc",ar=null,cr=null,J=[],mn=null,Me=!1,Di=!1,gn="",lr=null,dr=null,Ie=new Set,tt=new Set,se="",I="",D=-1,ot=!1,qt="",V=[],$e="",we=[],_e=!1,ae="",Jn=null,z=-1,at=!1,pe="",H=[],ct="",He="",Ae=[],Le=!1,ce="",Ti=null,Ne=0;const wc=650;let K=-1,gt=!1,yt=[],me=!1,xe="",bt=!1,Pt=[],ge=!1,qe="",kt=!1,Mr=[],ye=!1,Pe="",vt="",be="",nt="",ke="",E=[],P=!1,W="",ze=!1,$n="",rt="",Ht="",Wt="",oe=-1,Ce=!1,w=null,Fe=[],lt=!1,de="",jt="",X=-1,St=!1,$r=null,Nt=null;const Dr=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let F=[],$="biweekly",Ss=null,De=!1,Ge=!1,zt="biweekly",wt=!1,dt=!1,re="",ie=null,T={targetType:"other",note:"",tickets:""},le=!1,yn=!1,G="",L={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},_t="",N=-1,Y=!1,ur={biweekly:0,monthly:0};const _c=1780786800,Te=14*24*60*60,bn=60*60,kn=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let R=kn[0].id;function Ac(){vs.innerHTML=`
    <main class="splash-screen">
      <img src="${Ko}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await dc(),await Lc(),ws(),Ot(),await st()},5e3)}async function Lc(){try{g=await sc()}catch(t){g={logged_in:!1,allowed:!1,status_message:""},h("session-error",v(t),{ttlMs:p})}}function ws(){vs.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${Yo}" alt="" class="title-icon" />
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
            <img src="${Jo}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${a(Rn)}</div>
            </div>
          </div>
          <div id="desktopUpdateArea" class="desktop-update-area"></div>
          <div id="discordArea" class="discord-area"></div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${_s()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content" aria-live="polite">
          ${Ls()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await cc()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await fs(),await Ka()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await ac()}),un(),wr(),Rs(),Io(),uo(),wo(),Cs(),lo(),Zs(),eo(),to(),no(),Vs(),fo(),Cc(),Ee(),pt(),$i||(window.addEventListener("resize",()=>{zo(),Wo()}),Vu(),$i=!0)}function _s(){return kn.map(t=>{const e=t.id===R,n=Ec(t.id,e),r=n?As():0,i=n?`Deposit mail needs attention: ${r} item${r===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${n?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${f(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${f(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${Rc(t.icon)}</span>
          <span class="guildsync-tab-label">${a(t.label)}</span>
          ${n?`<span class="guildsync-tab-mail-badge" aria-label="${f(i)}">${r>99?"99+":a(String(r))}</span>`:""}
        </button>
      `}).join("")}function As(){return _()?Bn()+Jt()+vo():0}function Ec(t,e){return t!=="more"||e?!1:As()>0}function Rc(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function Ls(){const t=kn.find(n=>n.id===R)||kn[0];let e="";return t.id==="discord-members"?e=Bc():t.id==="eso-members"?e=Oc():t.id==="more"?e=Ld():t.id==="settings"?e=el():e=`
      <div class="guildsync-tab-panel" data-active-tab="${f(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${a(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${le?nd():""}
    ${wt?Od():""}
    ${Ce?zl():""}
    ${gt?tl():""}
    ${bt?al():""}
    ${kt?ul():""}
    ${ze?_l():""}
    ${St?Tc():""}
  `}function Mc(){return St||ot||at||le||wt||Ce||gt||bt||kt||ze||Ge}function $c(){return St?!1:ze?(yr(),!0):kt?(gr(),!0):bt?(mr(),!0):gt?(pr(),!0):Ce?(ft(),!0):wt?(wn(),!0):le?(le=!1,l(),!0):ot?(ot=!1,l(),!0):at?(at=!1,l(),!0):Ge?(Ge=!1,l(),!0):!1}function Dc(t){t.key==="Escape"&&$c()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",Dc,!0),window.guildSyncGlobalModalEscapeAttached=!0);function Es(t={}){return new Promise(e=>{Nt&&Nt(!1),St=!0,$r={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},Nt=e,l()})}function vn(t=!1){const e=Nt;Nt=null,St=!1,$r=null,e&&e(t===!0),l()}function Tc(){const t=$r||{};return`
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
  `}function Ci(t){var r,i,s,o;const e=(i=(r=t.target).closest)==null?void 0:i.call(r,"#cancelGuildSyncConfirmButton"),n=(o=(s=t.target).closest)==null?void 0:o.call(s,"#acceptGuildSyncConfirmButton");if(!(!e&&!n)){if(t.preventDefault(),t.stopPropagation(),e){vn(!1);return}n&&vn(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",Ci,!0),document.addEventListener("pointerup",Ci,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function Cc(){if(!St)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=r=>{r.preventDefault(),r.stopPropagation(),vn(!1)}),e&&(e.onclick=r=>{r.preventDefault(),r.stopPropagation(),vn(!0)});const n=document.querySelector(".guildsync-confirm-overlay");n&&(n.onclick=r=>{r.target===n&&(r.preventDefault(),r.stopPropagation())})}function Rs(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(Mc())return;const e=t.dataset.tabId;!e||e===R||(R=e,l())})})}function Nc(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function l(t={}){ze&&Nc();const e=document.querySelector(".guildsync-tabs"),n=document.querySelector("#guildSyncTabContent");e&&(e.innerHTML=_s()),n&&(n.innerHTML=Ls()),Rs(),Io(),uo(),wo(),Cs(),lo(),Zs(),eo(),to(),no(),Vs(),fo(),t.restoreDiscordSearchFocus&&gu(),t.restoreRosterSearchFocus&&yu(),R==="discord-members"&&(d==null?void 0:d.connected)&&q.length===0&&!It&&Hr({silent:!0}),R==="eso-members"&&(d==null?void 0:d.connected)&&J.length===0&&!Me&&!Di&&(Di=!0,Yt({silent:!0})),R==="more"&&(d==null?void 0:d.connected)&&F.length===0&&!De&&ue({silent:!0}),(R==="discord-members"||R==="eso-members"||R==="settings")&&(d==null?void 0:d.connected)&&E.length===0&&!P&&Dn({silent:!0})}function Bc(){const t=hu(),e=bu(),n=Array.from(Ze),r=Array.from(et);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${a(xo(Mn))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${It||hn?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${hn?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${f(pn)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!Ze.has(i)).map(i=>`<option value="${f(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All roles</span>':n.map(i=>wu(i)).join("")}
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
              ${Dr.filter(i=>!et.has(i.id)).map(i=>`<option value="${f(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>Ms("discord",i)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${nn("username","Username")}
                ${nn("global_name","Global Name")}
                ${nn("server_nickname","Server Nickname")}
                ${nn("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>ku(i)).join(""):vu()}
            </tbody>
          </table>
        </div>
      </div>
      ${at?zc():""}
    </div>
  `}function Oc(){const t=Fc(),e=Vc(),n=Array.from(Ie),r=Array.from(tt);return`
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
          <span class="discord-last-refresh">Last Refresh: ${a(fd(mn))}</span>
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
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${f(gn)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!Ie.has(i)).map(i=>`<option value="${f(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All ranks</span>':n.map(i=>Hc(i)).join("")}
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
              ${Dr.filter(i=>!tt.has(i.id)).map(i=>`<option value="${f(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>Ms("roster",i)).join("")}
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
                ${tn("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map((i,s)=>Ic(i,s)).join(""):xc()}
            </tbody>
          </table>
        </div>
      </div>
      ${ot?Qc():""}
    </div>
  `}function Ic(t,e=-1){const n=qc(t.rank||""),r=n?` style="color: ${n};"`:"";return`
    <tr class="eso-roster-row${e===D?" roster-search-active-row":""}"${r} data-roster-row-index="${f(String(e))}" data-eso-account-name="${f(t.account_name||"")}">
      <td>${a(t.account_name||"")}</td>
      <td>${Tr(t.rank||"")}</td>
      <td>${a(Nn(t.joined))}</td>
      <td class="member-link-action-cell">${Ks({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function xc(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">${a(Me?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function qc(t){const e=String(t||"").trim(),n=jr(e);return qn(n==null?void 0:n.role_color)}function Tr(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${a(e)}</span>`}function Pc(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":Tr(e)}function Fc(){const t=gn.trim().toLowerCase(),e=J.filter(n=>{const r=String(n.rank||"").trim();if(Ie.size>0&&!Ie.has(r)||!Ts(tt,fr(n)))return!1;if(!t)return!0;const i=Nn(n.joined),s=xr(n.joined),o=fr(n),c=Ds(n.account_name||"");return[n.account_name,r,i,s,n.joined,o,c].map(b=>String(b||"").toLowerCase()).join(" ").includes(t)});return Gc(e)}function Gc(t){if(!se||!I)return t;const e=I==="desc"?-1:1;return[...t].sort((n,r)=>{const i=Ni(n,se),s=Ni(r,se),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:String(n.account_name||"").localeCompare(String(r.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function Ni(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const n=Number(t.joined||0);return Number.isFinite(n)&&n>0?String(n).padStart(16,"0"):""}if(e==="linked"){const n=fr(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[n]||"9"} ${n} ${Ds(t.account_name||"")}`}return String(t.account_name||"")}function Uc(t){const n=new Set(["account_name","rank","joined","linked"]).has(t)?t:"account_name";se!==n?(se=n,I="asc"):I==="asc"?I="desc":I==="desc"?(se="",I=""):(se=n,I="asc"),D=-1,l()}function tn(t,e,n=""){const r=se===t&&Boolean(I),i=r?I==="asc"?"ascending":"descending":"none",s=r?I==="asc"?"\u25B2":"\u25BC":"\u2195";return`
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
  `}function Vc(){return Array.from(new Set(J.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function Hc(t){const e=jr(t),n=qn(e==null?void 0:e.role_color),r=Kr(n),i=zr(n,r);return`
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
  `}function Wc(t){const e=Dr.find(n=>n.id===t);return e?e.label:t}function Ms(t,e){const n=t==="roster"?"roster":"discord",r=Wc(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${n}-link-status-filter="${f(e)}"
      title="Remove ${f(r)} link filter"
    >
      <span>${a(r)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function $s(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked"&&String(n.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function jc(t){return $s(Cn(t==null?void 0:t.discord_id))}function fr(t){return $s(Tn(t==null?void 0:t.account_name))}function Ds(t){const e=Tn(t),n=zs({mode:"eso-to-discord",esoAccountName:t}),r=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean),i=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="candidate").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean);return[n.label,n.title,r.join(" "),i.join(" ")].filter(Boolean).join(" ")}function Ts(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function zc(){return`
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
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${f(pe)}" />
        </div>

        ${ce?`<div class="discord-data-error">${a(ce)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Kc()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${He?`: ${a(He)}`:""}</div>
            ${Yc()}
          </div>
        </div>
      </div>
    </div>
  `}function Kc(){return Le&&H.length===0?'<div class="roster-history-muted">Searching...</div>':H.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${H.map((t,e)=>`
        <button class="roster-history-match${e===K||t.discord_id===ct?" is-selected":""}" type="button" data-discord-history-id="${f(t.discord_id)}" data-discord-history-name="${f(hr(t))}">
          <span>${a(hr(t))}</span>
          <strong>${a(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===K?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Yc(){return ct?Le&&Ae.length===0?'<div class="roster-history-muted">Loading history...</div>':Ae.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${Ae.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${a(xr(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${a(Jc(t.event_type))}</td>
              <td>${a(t.old_value||"")}</td>
              <td>${a(t.new_value||"")}</td>
              <td>${a(t.initiator||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function hr(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function Jc(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Qc(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(qt)}" />
        </div>

        ${ae?`<div class="discord-data-error">${a(ae)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Xc()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${$e?`: ${a($e)}`:""}</div>
            ${Zc()}
          </div>
        </div>
      </div>
    </div>
  `}function Xc(){return _e&&V.length===0?'<div class="roster-history-muted">Searching...</div>':V.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${V.map((t,e)=>`
        <button class="roster-history-match${e===z||t.account_name===$e?" is-selected":""}" type="button" data-roster-history-account="${f(t.account_name)}">
          <span>${a(t.account_name)}</span>
          <strong>${a(t.rank||"")}</strong>
          ${e===z?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Zc(){return $e?_e&&we.length===0?'<div class="roster-history-muted">Loading history...</div>':we.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
              <td class="roster-history-when-cell">${a(xr(t.timestamp))}</td>
              <td>${a(t.event_type||"")}</td>
              <td>${Pc(t.rank)}</td>
              <td>${a(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function el(){return`
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
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${me?"disabled":""}>
              ${me?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${ge?"disabled":""}>
              ${ge?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${ye?"disabled":""}>
              ${ye?"Loading...":"Run"}
            </button>
          </article>
        </section>

        <article class="report-option-card">
          <div class="report-option-copy">
            <h3>ESO / Discord Member Links</h3>
            <p>Review automatic ESO-to-Discord links, accept candidate matches, unlink blocked matches, or run the matcher again after roster or Discord refreshes.</p>
          </div>
          <button id="runMemberLinksReportButton" class="refresh-discord-button report-run-button" type="button" ${P?"disabled":""}>
            ${P?"Loading...":"Run"}
          </button>
        </article>
      </div>
    </div>
  `}function Cs(){var t,e,n,r;R==="settings"&&((t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>Ns()),(e=document.querySelector("#runDiscordRankAuditReportButton"))==null||e.addEventListener("click",()=>ol()),(n=document.querySelector("#runDiscordLastSeenReportButton"))==null||n.addEventListener("click",()=>dl()),(r=document.querySelector("#runMemberLinksReportButton"))==null||r.addEventListener("click",()=>vl()))}function Ns(){gt=!0,xe="",l(),so()}function pr(){gt=!1,xe="",l()}function tl(){const t=nl(),e=rl(),n=yt.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${me?"disabled":""}>${me?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(n))} total row${n===1?"":"s"}</span>
        </div>

        ${xe?`<div class="discord-data-error">${a(xe)}</div>`:""}

        <div class="report-results-content">
          ${me&&n===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!me&&n===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${n>0?Bi("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${n>0?Bi("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${a(Os())}</textarea>
      </div>
    </div>
  `}function nl(){return yt.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function rl(){return yt.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function Bi(t,e,n,r){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${a(t)}</h4>
          <p>${a(e)}</p>
        </div>
        <span>${a(String(n.length))} row${n.length===1?"":"s"}</span>
      </div>
      ${n.length>0?il(n):`<div class="roster-history-muted report-section-empty">${a(r)}</div>`}
    </section>
  `}function il(t=yt){return`
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
              <td>${Tr(e.rank||"")}</td>
              <td>${a(Nn(e.joined))}</td>
              <td>${a(xn(e.purchased_tickets||0))}</td>
              <td>${a(Bs(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Bs(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function Os(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Discord Link"]];for(const e of yt){const n=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([n,e.account_name||"",e.rank||"",Nn(e.joined),xn(e.purchased_tickets||0),Bs(e)])}return t.map(e=>e.map(On).join("	")).join(`
`)}async function sl(){const t=Os();if(await In(t)){h("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#associateTicketReportTsv");n&&(n.focus(),n.select()),h("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function ol(){bt=!0,qe="",l(),io()}function mr(){bt=!1,qe="",l()}function al(){const t=Pt.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${ge?"disabled":""}>${ge?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${qe?`<div class="discord-data-error">${a(qe)}</div>`:""}

        <div class="report-results-content">
          ${ge&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!ge&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?cl(Pt):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${a(qs())}</textarea>
      </div>
    </div>
  `}function cl(t=Pt){return`
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
              <td>${a(Is(e))}</td>
              <td>${a(e.discord_rank||"No matching rank role")}</td>
              <td>${a(e.eso_accounts||"No linked ESO account")}</td>
              <td>${a(e.eso_rank||"None")}</td>
              <td>${a(xs(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Is(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function xs(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function qs(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of Pt)t.push([Is(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",xs(e)]);return t.map(e=>e.map(On).join("	")).join(`
`)}async function ll(){const t=qs();if(await In(t)){h("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#discordRankAuditReportTsv");n&&(n.focus(),n.select()),h("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function dl(){kt=!0,Pe="",vt="",l(),ro(),E.length===0&&!P&&Dn({silent:!0})}function gr(){kt=!1,Pe="",vt="",be="",nt="",ke="",l()}function ul(){const t=Cr(),e=Mr.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${ye?"disabled":""}>${ye?"Loading...":"Run Again"}</button>
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
            value="${f(vt)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${be===""?"selected":""}>All link statuses</option>
            <option value="linked" ${be==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${be==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${be==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${Pe?`<div class="discord-data-error discord-last-seen-report-error">${a(Pe)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${ye&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!ye&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?fl(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${a(Fs(t))}</textarea>
      </div>
    </div>
  `}function fl(t=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${$t("name","Discord Member")}</th>
            <th>${$t("eso","Linked ESO Account")}</th>
            <th>${$t("date","Last Seen")}</th>
            <th>${$t("days","Days Since")}</th>
            <th>${$t("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr class="discord-last-seen-row ${f(bl(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${f(We(e).status)}" data-discord-last-seen-search="${f(Ps(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${yl(e)}
                  <span>${a(ut(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${pl(e)}</td>
              <td>${a(Nr(e.last_seen))}</td>
              <td>${a(Br(e.last_seen))}</td>
              <td>${a(Sn(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function $t(t,e){const n=nt===t,r=n?ke==="asc"?"\u25B2":"\u25BC":"\u2195",i=n?`${e}: ${ke==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${n?" active":""}" type="button" data-discord-last-seen-sort="${f(t)}" title="${f(i)}">
      <span>${a(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${a(r)}</span>
    </button>
  `}function Cr(){const t=[...Mr],e=nt,n=ke;if(!e||!n)return t;const r=n==="desc"?-1:1;return t.sort((i,s)=>{var o,c;if(e==="date"){const u=Number(i.last_seen||0)||0,b=Number(s.last_seen||0)||0;return(u-b)*r}if(e==="days")return(Oi(i.last_seen)-Oi(s.last_seen))*r;if(e==="action")return Sn(i.last_seen_action).localeCompare(Sn(s.last_seen_action),void 0,{sensitivity:"base"})*r;if(e==="eso"){const u=We(i),b=We(s),S={linked:0,candidate:1,unlinked:2},m=((o=S[u.status])!=null?o:9)-((c=S[b.status])!=null?c:9);return m!==0?m*r:u.esoAccountName.localeCompare(b.esoAccountName,void 0,{sensitivity:"base"})*r}return ut(i).localeCompare(ut(s),void 0,{sensitivity:"base"})*r})}function hl(t){nt!==t?(nt=t,ke="asc"):ke==="asc"?ke="desc":(nt="",ke=""),l()}function ut(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function Ps(t){return[ut(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,ml(t),Nr(t==null?void 0:t.last_seen),Br(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function We(t){const e=Ol(t==null?void 0:t.discord_id),n=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),r=String((e==null?void 0:e.eso_account_name)||"").trim();return n==="linked"&&r?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:r,title:`Linked ESO account: ${r}`}:(n==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&r?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:r,title:`Fuzzy ESO account candidate: ${r}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function pl(t){const e=We(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${f(e.className)}"
      title="${f(e.title)}"
      aria-label="${f(e.label)}"
      role="img"
    ></span>
  `}function ml(t){const e=We(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function gl(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!n)return"";if(/^https?:\/\//i.test(e))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function yl(t){const e=ut(t),n=e?e.slice(0,2).toUpperCase():"?",r=gl(t);return r?`<span class="discord-member-avatar"><img src="${f(r)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${a(n)}</span>`}function Nr(t){const e=Number(t);if(!e)return"Never";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t||"");const r=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(n).reduce((i,s)=>(i[s.type]=s.value,i),{});return`${r.month}/${r.day}/${r.year} ${r.hour}:${r.minute} ${r.dayPeriod}`}function bl(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const n=(Date.now()-e*1e3)/864e5;return n>30?"discord-last-seen-red":n>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function Br(t){const e=Number(t);if(!e)return"Never";const n=Date.now()-e*1e3;if(!Number.isFinite(n))return"";if(n<0)return"0 days";const r=Math.floor(n/864e5);return`${r} day${r===1?"":"s"}`}function Oi(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const n=Date.now()-e*1e3;return Number.isFinite(n)?n<0?0:Math.floor(n/864e5):Number.POSITIVE_INFINITY}function Sn(t){return String(t||"").trim()||"None tracked"}function Fs(t=Cr()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const n of t){const r=We(n);e.push([ut(n),r.label||"",r.esoAccountName||"",Nr(n==null?void 0:n.last_seen),Br(n==null?void 0:n.last_seen),Sn(n==null?void 0:n.last_seen_action),(n==null?void 0:n.username)||"",(n==null?void 0:n.discord_id)||""])}return e.map(n=>n.map(On).join("	")).join(`
`)}async function kl(){const t=Cr().filter(i=>{const s=ne(vt),o=String(be||"").trim().toLowerCase(),c=!s||ne(Ps(i)).includes(s),u=!o||We(i).status===o;return c&&u}),e=Fs(t);if(await In(e)){h("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#discordLastSeenReportTsv");r&&(r.focus(),r.select()),h("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function vl(){ze=!0,W="",l(),E.length===0&&!P&&Dn({silent:!0})}function yr(){ze=!1,$n="",rt="",Ht="",Wt="",oe=-1,l()}function Gs(t){return[...new Set((Array.isArray(E)?E:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function Us(t,e){return t.map(n=>`<option value="${f(n)}" ${e===n?"selected":""}>${a(n)}</option>`).join("")}function Sl(){return Us(Gs("link_status"),Ht)}function wl(){return Us(Gs("link_method"),Wt)}function _l(){return`
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
          <button id="refreshMemberLinksButton" class="clear-discord-filters-button" type="button" ${P?"disabled":""}>Refresh Links</button>
          <button id="runMemberAutoLinkButton" class="refresh-discord-button" type="button" ${P?"disabled":""}>${P?"Running...":"Run Auto-Linking"}</button>
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
            value="${f($n)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${Ht===""?"selected":""}>All statuses</option>
            ${Sl()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${Wt===""?"selected":""}>All methods</option>
            ${wl()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${rt===""?"selected":""}>All actions</option>
            <option value="needs-link" ${rt==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${rt==="can-unlink"?"selected":""}>Unlink Available</option>
          </select>
        </div>

        ${W?`<div class="discord-data-error member-links-report-error">${a(W)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${Rl()}
        </div>
      </div>
    </div>
  `}function Vs(){var n,r,i,s,o,c;if(!ze)return;(n=document.querySelector("#closeMemberLinksReportButton"))==null||n.addEventListener("click",yr),(r=document.querySelector("#refreshMemberLinksButton"))==null||r.addEventListener("click",()=>Dn()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>Nl());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",Ml),t.addEventListener("keydown",Cl)),(s=document.querySelector("#memberLinksReportActionFilter"))==null||s.addEventListener("change",$l),(o=document.querySelector("#memberLinksReportStatusFilter"))==null||o.addEventListener("change",Dl),(c=document.querySelector("#memberLinksReportMethodFilter"))==null||c.addEventListener("change",Tl),Kt(),document.querySelectorAll("[data-accept-member-candidate]").forEach(u=>{u.addEventListener("click",()=>Ws(u.dataset.acceptMemberCandidate||"",u.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(u=>{u.addEventListener("click",()=>Bl(u.dataset.unlinkMemberLink||"",u.dataset.unlinkMemberLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",u=>{u.target===e&&yr()})}function Ii(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function xi(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Al(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Ll(t){return[...Array.isArray(t)?t:[]].sort((e,n)=>{const r=Ii(e)-Ii(n);if(r!==0)return r;const i=xi(e).localeCompare(xi(n),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((n==null?void 0:n.discord_user_id)||""),void 0,{sensitivity:"base"})})}function El(t){const e=br(t);let n="";e==="Username"?n=(t==null?void 0:t.discord_username)||"":e==="Global Name"?n=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(n=(t==null?void 0:t.discord_server_nickname)||""),n||(n=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const r=e?` <span class="member-link-report-match-field">(${a(e)})</span>`:"";return`<span class="member-link-report-discord-name">${a(n)}</span>${r}`}function Rl(){return P&&E.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(E)||E.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${Ll(E).map(e=>{var s;const n=String(e.link_status||"").trim().toLowerCase(),r=String(e.link_method||"").trim().toLowerCase(),i=El(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${f(Al(e))}"
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
  `}function Hs(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function qi(t){const e=Hs();if(e.forEach(r=>r.classList.remove("member-links-report-row-active")),e.length===0){oe=-1;return}oe=Math.max(0,Math.min(t,e.length-1));const n=e[oe];n.classList.add("member-links-report-row-active"),n.scrollIntoView({block:"nearest"})}function Kt(){const t=ne($n),e=String(rt||"").trim().toLowerCase(),n=String(Ht||"").trim().toLowerCase(),r=String(Wt||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let s=0;i.forEach(c=>{const u=ne(c.dataset.memberLinksReportSearch||""),b=String(c.dataset.memberLinksReportAction||"").trim().toLowerCase(),S=String(c.dataset.memberLinksReportStatus||"").trim().toLowerCase(),m=String(c.dataset.memberLinksReportMethod||"").trim().toLowerCase(),Ke=(!t||u.includes(t))&&(!e||b===e)&&(!n||S===n)&&(!r||m===r);c.hidden=!Ke,c.classList.remove("member-links-report-row-active"),Ke&&(s+=1)});const o=document.querySelector("#memberLinksReportSearchEmpty");o&&(o.hidden=s!==0),oe=-1}function Ml(t){$n=t.target.value||"",Kt()}function $l(t){rt=t.target.value||"",Kt()}function Dl(t){Ht=t.target.value||"",Kt()}function Tl(t){Wt=t.target.value||"",Kt()}function Cl(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Hs();if(e.length===0)return;if(t.key==="ArrowDown"){const r=oe<0?0:oe+1;qi(r>=e.length?e.length-1:r);return}const n=oe<0?e.length-1:oe-1;qi(n<0?0:n)}async function Dn(t={}){if(!(d!=null&&d.connected)){W="You must be connected to load member links.",l();return}P=!0,W="",t.silent||l();try{const e=await A("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");E=Array.isArray(e.links)?e.links:[]}catch(e){W=v(e)}finally{P=!1,l()}}async function Nl(){if(!(d!=null&&d.connected)||!g.logged_in){W="You must be logged in and connected to run auto-linking.",l();return}P=!0,W="",l();try{const t=await A("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");E=Array.isArray(t.links)?t.links:[],h("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:p})}catch(t){W=v(t)}finally{P=!1,l()}}async function Ws(t,e=""){try{const n=await A("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to accept candidate.");E=Array.isArray(n.links)?n.links:E,h("member-link-accepted",n.message||"Candidate accepted as a link.",{ttlMs:p})}catch(n){W=v(n),h("member-link-accept-error",W,{ttlMs:p})}}async function Bl(t,e=""){if(!!await Es({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const r=await A("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to unlink member.");E=Array.isArray(r.links)?r.links:E,h("member-link-unlinked",r.message||"Member link removed.",{ttlMs:p})}catch(r){W=v(r)}l()}}function je(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function Tn(t){const e=je(t);return e?E.filter(n=>je(n.eso_account_name)===e):[]}function Cn(t){const e=String(t||"").trim();return e?E.filter(n=>String(n.discord_user_id||"").trim()===e):[]}function js(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const n=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(n.length>0){const i=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const s=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return s||n[0]}const r=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return r||e[0]}function Ol(t){return js(Cn(t))}function Il(t){return`${je(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function Or(){return w?w.mode==="discord-to-eso"?Cn(w.discordUserId):Tn(w.esoAccountName):[]}function xl(t){const e=String(t||"").trim(),n=q.find(r=>String(r.discord_id||"").trim()===e);return n&&(n.server_nickname||n.global_name||n.username||n.discord_id)||e}function zs(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?Cn(t.discordUserId):Tn(t.esoAccountName),r=js(n),i=String((r==null?void 0:r.link_status)||"").trim().toLowerCase(),s=n.filter(c=>String(c.link_status||"").trim().toLowerCase()==="linked").length,o=n.filter(c=>String(c.link_status||"").trim().toLowerCase()==="candidate").length;return s>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?s===1?r.eso_account_name:`${s} ESO accounts`:s===1?r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member":`${s} Discord accounts`}`}:i==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?r.eso_account_name:r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member"}`}:i==="blocked"||Number((r==null?void 0:r.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function Ks(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,r=zs(t);return`
    <button
      class="member-link-status-dot member-link-status-${f(r.className)}"
      type="button"
      title="${f(r.title)}"
      aria-label="${f(r.label)}"
      data-open-member-link-dialog="${f(e)}"
      data-member-link-value="${f(n||"")}"
    ></button>
  `}function ql(){return w?w.mode==="discord-to-eso"?xl(w.discordUserId):w.esoAccountName||"":""}function Ys(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function br(t){const e=Ys((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const n=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(n.includes("discord_username")||n.includes("username"))return"Username";if(n.includes("discord_display_name")||n.includes("global")||n.includes("display"))return"Global Name";if(n.includes("discord_server_nickname")||n.includes("server")||n.includes("nickname"))return"Server Nickname";const r=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(r==="exact"||r==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",s=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const c of s){const u=Pl(i,c.value);(!o||u>o.score)&&(o={...c,score:u})}if(o&&o.score>0)return o.field}return""}function ne(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function Pl(t,e){const n=ne(t),r=ne(e);if(!n||!r)return 0;if(n===r)return 100;if((n.includes(r)||r.includes(n))&&Math.min(n.length,r.length)>=4)return 88;const i=Math.abs(n.length-r.length),s=[...n].findIndex((c,u)=>c!==r[u]),o=s===-1?Math.min(n.length,r.length):s;return Math.max(0,Math.min(75,Math.round(o*10-i*3)))}function Fl(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function Gl(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function Ul(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),n=Fl(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${a(n)}</span>`}function Vl(t){var c;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",n=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",r=String(t.link_status||"").trim().toLowerCase(),o=r==="linked"?`<button
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
        <div><span>Status:</span> ${Ul(t)} \xB7 ${a(Gl(t.link_method))} \xB7 ${a(String((c=t.match_confidence)!=null?c:""))}% \xB7 ${a(n)}</div>
        ${br(t)?`<div><span>Matched:</span> Matched on ${a(br(t))}</div>`:""}
      </div>
      ${o}
    </div>
  `}function Hl(){const t=Or();return t.length?[...t].sort((n,r)=>{var u,b;const i=String(n.link_status||"").trim().toLowerCase(),s=String(r.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},c=((u=o[i])!=null?u:9)-((b=o[s])!=null?b:9);return c!==0?c:Number(r.match_confidence||0)-Number(n.match_confidence||0)}).map(n=>Vl(n)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function Wl(){if(lt)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(de)return`<div class="discord-data-error">${a(de)}</div>`;if(!Array.isArray(Fe)||Fe.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(Or().map(n=>Il(n))),e=[...Fe].filter(n=>{const r=(w==null?void 0:w.mode)==="discord-to-eso"?`${je(n.account_name)}::${String(w.discordUserId||"").trim()}`:`${je(w==null?void 0:w.esoAccountName)}::${String(n.discord_id||"").trim()}`;return!t.has(r)}).sort((n,r)=>{const i=Number(r.confidence||0)-Number(n.confidence||0);return i!==0?i:Pi(n).localeCompare(Pi(r),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(n=>jl(n)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function Pi(t){return((w==null?void 0:w.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function jl(t,e={}){var m,y,O;const n=(w==null?void 0:w.mode)||"",r=n==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=Ys(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),s=n==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[s,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),c=n==="discord-to-eso"?t.account_name:t.discord_id,u=e.disabled===!0,b=[r,s,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),S=[r,o,`${(m=t.confidence)!=null?m:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${f(c||"")}" data-member-link-option-search="${f(b)}" title="${f(S)}" ${u?"disabled":""}>
      <span class="member-link-option-name" title="${f(r||"")}">${a(r||"")}</span>
      <span class="member-link-option-subtitle" title="${f(o||"")}">${a(o||"")}</span>
      <span class="member-link-option-confidence" title="${f(String((y=t.confidence)!=null?y:0))}%">${a(String((O=t.confidence)!=null?O:0))}%</span>
    </button>
  `}function zl(){const t=(w==null?void 0:w.mode)||"",e=ql(),n=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
            ${Hl()}
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
              value="${f(jt)}"
            />
            ${Wl()}
          </section>
        </div>

      </div>
    </div>
  `}async function Js(t,e){if(!(d!=null&&d.connected)||!_()){h("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:p});return}Ce=!0,w=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},Fe=[],lt=!0,de="",jt="",X=-1,l();try{if(!Array.isArray(E)||E.length===0){const i=await A("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(E=Array.isArray(i.links)?i.links:[])}const r=await A("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load link suggestions.");Fe=Array.isArray(r.options)?r.options:[]}catch(n){de=v(n)}finally{lt=!1,l()}}function ft(){document.removeEventListener("keydown",kr),Ce=!1,w=null,Fe=[],lt=!1,de="",jt="",X=-1,l()}function Qs(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function Fi(t){const e=Qs();if(e.forEach(r=>r.classList.remove("member-link-option-row-active")),e.length===0){X=-1;return}X=Math.max(0,Math.min(t,e.length-1));const n=e[X];n.classList.add("member-link-option-row-active"),n.scrollIntoView({block:"nearest"})}function Xs(){const t=ne(jt),e=[...document.querySelectorAll(".member-link-option-row")];let n=0;e.forEach(i=>{const s=ne(i.dataset.memberLinkOptionSearch||i.textContent||""),o=!t||s.includes(t);i.hidden=!o,i.classList.remove("member-link-option-row-active"),o&&(n+=1)});const r=document.querySelector("#memberLinkSuggestionSearchEmpty");r&&(r.hidden=n!==0),X=-1}function Kl(t){jt=t.target.value||"",Xs()}function Yl(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Qs();if(e.length===0)return;if(t.key==="ArrowDown"){const r=X<0?0:X+1;Fi(r>=e.length?e.length-1:r);return}const n=X<0?e.length-1:X-1;Fi(n<0?0:n)}function kr(t){!Ce||t.key==="Escape"&&(t.preventDefault(),ft())}async function Jl(t){if(!(!w||!t))try{const e=w.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:w.discordUserId}:{esoAccountName:w.esoAccountName,discordUserId:t},n=await A("guildsync:manual-link-member",e,3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to link members.");E=Array.isArray(n.links)?n.links:E,h("member-link-saved",n.message||"Member link saved.",{ttlMs:p}),ft()}catch(e){de=v(e),l()}}async function Ql(t,e=""){await Ws(t,e),ft()}async function Xl(){if(!!w){lt=!0,de="",l();try{const t=w.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:w.discordUserId}:{mode:"eso-to-discord",accountName:w.esoAccountName},e=await A("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");Fe=Array.isArray(e.options)?e.options:[]}catch(t){de=v(t)}finally{lt=!1,l()}}}async function Zl(t="",e=""){const n=Or().find(i=>je(i.eso_account_name)===je(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!n||!await Es({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await A("guildsync:manual-unlink-member",{esoAccountName:n.eso_account_name,discordUserId:n.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");E=Array.isArray(i.links)?i.links:E,h("member-link-unlinked",i.message||"Member link removed.",{ttlMs:p}),await Xl()}catch(i){de=v(i),l()}}function Zs(){var n;if(!Ce)return;document.removeEventListener("keydown",kr),document.addEventListener("keydown",kr),(n=document.querySelector("#closeMemberLinkDialogButton"))==null||n.addEventListener("click",ft);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",Kl),t.addEventListener("keydown",Yl),Xs()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(r=>{r.addEventListener("click",()=>Zl(r.dataset.unlinkEsoAccount||"",r.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(r=>{r.addEventListener("click",()=>Jl(r.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(r=>{r.addEventListener("click",()=>Ql(r.dataset.acceptDialogMemberCandidate||"",r.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",r=>{r.target===e&&ft()})}function eo(){var e,n,r;if(!gt)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",pr),(n=document.querySelector("#rerunAssociateTicketReportButton"))==null||n.addEventListener("click",()=>so()),(r=document.querySelector("#copyAssociateTicketReportGridButton"))==null||r.addEventListener("click",()=>sl());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&pr()})}function to(){var e,n,r;if(!bt)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",mr),(n=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||n.addEventListener("click",()=>io()),(r=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||r.addEventListener("click",()=>ll());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&mr()})}function no(){var r,i,s;if(!kt)return;(r=document.querySelector("#closeDiscordLastSeenReportButton"))==null||r.addEventListener("click",gr),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>ro()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>kl()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(o=>{o.addEventListener("click",()=>hl(o.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",ed);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",td),Ir();const n=document.querySelector(".discord-last-seen-report-overlay");n&&n.addEventListener("click",o=>{o.target===n&&gr()})}function ed(t){vt=t.target.value||"",Ir()}function td(t){be=t.target.value||"",Ir()}function Ir(){const t=ne(vt),e=String(be||"").trim().toLowerCase(),n=[...document.querySelectorAll("[data-discord-last-seen-row]")];let r=0;n.forEach(s=>{const o=ne(s.dataset.discordLastSeenSearch||s.textContent||""),c=String(s.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),S=(!t||o.includes(t))&&(!e||c===e);s.hidden=!S,S&&(r+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=r!==0)}async function ro(){if(!(d!=null&&d.connected)||!_()){Pe="You must be logged in and connected to run this report.",l();return}ye=!0,Pe="",l();try{const t=await A("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");q=Wr(t.members),Mr=[...q]}catch(t){Pe=v(t)}finally{ye=!1,l(),B("discordLastSeenReportSearchInput")}}async function io(){if(!(d!=null&&d.connected)||!_()){qe="You must be logged in and connected to run this report.",l();return}ge=!0,qe="",l();try{const t=await A("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Pt=Array.isArray(t.rows)?t.rows:[]}catch(t){qe=v(t)}finally{ge=!1,l()}}async function so(){if(!(d!=null&&d.connected)||!_()){xe="You must be logged in and connected to run this report.",l();return}me=!0,xe="",l();try{const t=await A("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");yt=Array.isArray(t.rows)?t.rows:[]}catch(t){xe=v(t)}finally{me=!1,l()}}function it(){const t=String(_t||"").trim().toLowerCase(),e={account_name:"Anonymous",rank:"Manual Entry"},n=new Set(["anonymous"]),r=J.filter(i=>String(i.account_name||"").trim()).filter(i=>{const o=String(i.account_name||"").trim().toLowerCase();return!o||n.has(o)||t&&!o.includes(t)?!1:(n.add(o),!0)}).slice().sort((i,s)=>{const o=String(i.account_name||"").toLowerCase(),c=String(s.account_name||"").toLowerCase(),u=t&&o.startsWith(t)?0:1,b=t&&c.startsWith(t)?0:1;return u!==b?u-b:o.localeCompare(c)}).slice(0,19);return[e,...r]}function oo(t=it()){const e=String(L.accountName||"").trim();return t.length===0?'<div class="roster-history-muted manual-ticket-no-matches">No matching guild members found.</div>':t.map((n,r)=>`
        <button class="roster-history-match${r===N||n.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${f(n.account_name)}" role="option" aria-selected="${r===N||n.account_name===e?"true":"false"}">
          <span>${a(n.account_name)}</span>
          <strong>${a(n.rank||"")}</strong>
          ${r===N?"<small>Enter</small>":""}
        </button>
      `).join("")}function ao(){document.querySelectorAll("[data-manual-ticket-account]").forEach(t=>{t.addEventListener("mousedown",e=>{e.preventDefault()}),t.addEventListener("click",()=>{co(t.dataset.manualTicketAccount||"")})})}function Qn(){const t=document.querySelector("#manualTicketMatchList");if(!t)return;const e=it();N>=e.length&&(N=e.length>0?e.length-1:-1),t.innerHTML=oo(e),ao()}function co(t){const e=String(t||"").trim();L.accountName=e,_t=e,Y=!1,N=-1,G="",l()}function B(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const n=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(n,n)},0)}function nd(){const t=Y?it():[],e=String(L.accountName||"").trim();return`
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
              <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(_t)}" autocomplete="off" />
            </label>

            ${Y?`
              <div id="manualTicketMatchList" class="roster-history-match-list manual-ticket-match-list" role="listbox" aria-label="Matching guild members">
                ${oo(t)}
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
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${yn?"disabled":""}>${yn?"Saving...":"Add Manual Entry"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function lo(){var s,o,c,u,b,S;if(!le)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{le=!1,l()});const t=document.querySelector("#manualTicketAccountSearchInput");if(t){const m=({rerender:y=!1}={})=>{if(Y=!0,N=it().length>0?0:-1,y){l(),B("manualTicketAccountSearchInput");return}Qn()};t.addEventListener("focus",()=>{Y||m({rerender:!0})}),t.addEventListener("click",()=>{Y||m({rerender:!0})}),t.addEventListener("input",y=>{_t=y.target.value||"",L.accountName="",Y=!0,N=it().length>0?0:-1,Qn()}),t.addEventListener("keydown",y=>{if(y.key==="Escape")return;if(!Y){(y.key==="ArrowDown"||y.key==="ArrowUp")&&(y.preventDefault(),m({rerender:!0}));return}const O=it();if(y.key==="ArrowDown"||y.key==="ArrowUp"){if(O.length===0)return;y.preventDefault();const Lt=y.key==="ArrowDown"?1:-1;N=((N<0?0:N)+Lt+O.length)%O.length,Qn();return}if(y.key!=="Enter")return;y.preventDefault();const fe=O[N>=0?N:0];fe!=null&&fe.account_name&&co(fe.account_name)})}ao(),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",m=>{L.note=m.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(m=>{m.addEventListener("click",()=>{const y=String(m.dataset.manualTicketType||"").trim().toLowerCase();L.ticketType=y==="monthly"?"monthly":"biweekly",l()})}),(c=document.querySelector("[data-manual-ticket-toggle]"))==null||c.addEventListener("click",()=>{L.ticketType=L.ticketType==="monthly"?"biweekly":"monthly",l()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",m=>{const y=String(m.target.value||"").replace(/\D/g,"");m.target.value!==y&&(m.target.value=y),L.goldValue=y});const n=document.querySelector("#manualTicketCountInput");n==null||n.addEventListener("input",m=>{const y=String(m.target.value||"").replace(/\D/g,"");m.target.value!==y&&(m.target.value=y),L.tickets=y});const r=m=>{const y=Number(L.tickets)||0,O=Math.max(0,y+m);L.tickets=String(O),n&&(n.value=L.tickets,n.focus())};(u=document.querySelector("#manualTicketCountUpButton"))==null||u.addEventListener("click",()=>r(1)),(b=document.querySelector("#manualTicketCountDownButton"))==null||b.addEventListener("click",()=>r(-1)),(S=document.querySelector("#saveManualBiweeklyTicketButton"))==null||S.addEventListener("click",()=>rd());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",m=>{m.target===i&&(le=!1,l())})}async function rd(){const t=String(L.accountName||"").trim(),e=String(L.note||"").trim(),n=String(L.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",r=Number(String(L.goldValue||"").trim()||0),i=Number(String(L.tickets||"").trim()||0);if(Y){G="Select a matching guild member or Anonymous from the list before saving.",l(),B("manualTicketAccountSearchInput");return}if(!t){G="Select a matching guild member or Anonymous from the list before saving.",l(),B("manualTicketAccountSearchInput");return}if(!Number.isFinite(r)||r<0){G="Gold value must be zero or greater.",l();return}if(!Number.isFinite(i)||i<0){G="Tickets must be zero or greater.",l();return}const s=t.toLowerCase()==="anonymous";if(s&&Math.floor(i)>0){G="Anonymous cannot be awarded tickets. Use 0 tickets and enter a gold value.",l();return}if(Math.floor(r)===0&&Math.floor(i)===0){G=s?"Enter a gold value for Anonymous when tickets are 0.":"Enter gold or tickets. Both cannot be zero.",l();return}yn=!0,G="",l();try{const o=await A("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:n,gold_value:Math.floor(r),tickets:Math.floor(i)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Failed to add manual entry.");le=!1,L={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},_t="",N=-1,Y=!1,await ue({silent:!0}),h("manual-ticket-added",o.message||"Manual entry added.",{ttlMs:p})}catch(o){G=v(o)}finally{yn=!1,l()}}function uo(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>Yt());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{ot=!0,ae="",l()});const n=document.querySelector("#rosterMemberSearch");n&&(n.addEventListener("input",o=>{gn=o.target.value||"",lr=o.target.selectionStart,dr=o.target.selectionEnd,D=-1,l({restoreRosterSearchFocus:!0})}),n.addEventListener("keydown",id)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Uc(o.dataset.rosterSortColumn||"account_name")})});const r=document.querySelector("#rosterRankFilter");r&&r.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(Ie.add(c),D=-1,l())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRosterRankFilter||"";Ie.delete(c),D=-1,l()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(tt.add(c),D=-1,l())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRosterLinkStatusFilter||"";tt.delete(c),D=-1,l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>Js(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{gn="",Ie.clear(),tt.clear(),se="",I="",D=-1,l()}),sd()}function id(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){D=-1;return}t.preventDefault(),t.key==="ArrowDown"?D=D<0?0:Math.min(D+1,e.length-1):t.key==="ArrowUp"&&(D=D<0?e.length-1:Math.max(D-1,0)),e.forEach((r,i)=>{r.classList.toggle("roster-search-active-row",i===D)});const n=e[D];n&&typeof n.scrollIntoView=="function"&&n.scrollIntoView({block:"nearest",inline:"nearest"})}function sd(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{ot=!1,l()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",n=>{if(qt=n.target.value||"",z=-1,!qt.trim()){clearTimeout(Jn),ae="",V=[],$e="",we=[],_e=!1,l(),B("rosterHistorySearchInput");return}clearTimeout(Jn),Jn=setTimeout(()=>{ld({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(V.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;z=((z<0?0:z)+i+V.length)%V.length,l(),B("rosterHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=V[z>=0?z:0];r!=null&&r.account_name&&Ui(r.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(n=>{n.addEventListener("click",()=>{Ui(n.dataset.rosterHistoryAccount||"")})})}function fo(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{at=!1,l()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",n=>{pe=n.target.value||"",K=-1,Ne+=1;const r=Ne;if(clearTimeout(Ti),!pe.trim()){ce="",H=[],ct="",He="",Ae=[],Le=!1,l(),B("discordHistorySearchInput");return}Ti=setTimeout(()=>{od({auto:!0,keepFocus:!0,generation:r})},wc)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(H.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;K=((K<0?0:K)+i+H.length)%H.length,l(),B("discordHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=H[K>=0?K:0];r!=null&&r.discord_id&&Gi(r.discord_id,hr(r))})),document.querySelectorAll("[data-discord-history-id]").forEach(n=>{n.addEventListener("click",()=>{Gi(n.dataset.discordHistoryId||"",n.dataset.discordHistoryName||"")})})}async function od(t={}){const e=Number.isInteger(t.generation)?t.generation:++Ne,n=pe.trim();if(e===Ne){if(!n){ce="",H=[],K=-1,ct="",He="",Ae=[],Le=!1,l(),t.keepFocus&&B("discordHistorySearchInput");return}Le=!0,ce="",H=[],K=-1,ct="",He="",Ae=[],l(),t.keepFocus&&B("discordHistorySearchInput");try{const r=await A("guildsync:request-discord-member-history",{query:n},3e4);if(e!==Ne||n!==pe.trim())return;if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search Discord member history.");H=ad(r.matches),K=H.length>0?0:-1}catch(r){if(e!==Ne||n!==pe.trim())return;ce=v(r)}finally{if(e!==Ne||n!==pe.trim())return;Le=!1,l(),t.keepFocus&&B("discordHistorySearchInput")}}}async function Gi(t,e="",n={}){const r=String(t||"").trim();if(!!r){ct=r,He=String(e||r).trim(),pe=He,Ae=[],Le=!0,ce="",l();try{const i=await A("guildsync:request-discord-member-history-events",{discord_id:r},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");Ae=cd(i.events)}catch(i){ce=v(i)}finally{Le=!1,n.keepLoading||l()}}}function ad(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function cd(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s,o,c,u,b,S,m,y;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((r=(n=e.old_value)!=null?n:e.oldValue)!=null?r:"").trim(),new_value:String((s=(i=e.new_value)!=null?i:e.newValue)!=null?s:"").trim(),event_timestamp:(u=(c=(o=e.event_timestamp)!=null?o:e.eventTimestamp)!=null?c:e.timestamp)!=null?u:"",event_datetime:(S=(b=e.event_datetime)!=null?b:e.eventDatetime)!=null?S:"",initiator:String((y=(m=e.initiator)!=null?m:e.initiatorName)!=null?y:"").trim(),source:String(e.source||"").trim()}}):[]}async function ld(t={}){const e=qt.trim();if(!e){ae="",V=[],z=-1,$e="",we=[],_e=!1,l(),t.keepFocus&&B("rosterHistorySearchInput");return}_e=!0,ae="",V=[],z=-1,$e="",we=[],l(),t.keepFocus&&B("rosterHistorySearchInput");try{const n=await A("guildsync:request-roster-rank-history",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search roster rank history.");V=dd(n.matches),z=V.length>0?0:-1}catch(n){ae=v(n)}finally{_e=!1,l(),t.keepFocus&&B("rosterHistorySearchInput")}}async function Ui(t,e={}){const n=String(t||"").trim();if(!!n){$e=n,qt=n,we=[],_e=!0,ae="",l();try{const r=await A("guildsync:request-roster-stream-history",{account_name:n},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load roster stream history.");we=ud(r.events)}catch(r){ae=v(r)}finally{_e=!1,e.keepLoading||l()}}}function dd(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function ud(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(r=(n=e.timestamp)!=null?n:e.timestampS)!=null?r:"",officer:String(e.officer||"").trim()}}):[]}function ho(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(n=e.joined)!=null?n:""}}).sort((e,n)=>e.account_name.localeCompare(n.account_name)):[]}function fd(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function Nn(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function xr(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function hd(t={}){J=ho(t.members),mn=t.last_refresh||new Date().toISOString(),R==="eso-members"&&l(),h("roster-data-updated",`Roster data updated. Loaded ${J.length} member record${J.length===1?"":"s"}.`,{ttlMs:p})}async function Yt(t={}){if(!!(d!=null&&d.connected)){Me=!0,l();try{const e=await A("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");J=ho(e.members),mn=e.last_refresh||mn,t.silent||h("roster-data-loaded",`Loaded ${J.length} roster member${J.length===1?"":"s"}.`,{ttlMs:p})}catch(e){h("roster-data-error",v(e),{ttlMs:p})}finally{Me=!1,l()}}}async function pd(t={}){var e;if(!!_()){if(!(d!=null&&d.connected)){h("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}Me=!0,l();try{const n=await Xa(t);if(!(n!=null&&n.ok)){h("roster-data-pending",(n==null?void 0:n.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:p});return}const r={local_upload_id:po(),authenticated_username:Q(),authenticated_discord_user_id:((e=g==null?void 0:g.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await go(r)}catch(i){throw md(r),i}await Yt({silent:!0})}catch(n){h("roster-data-error",v(n),{ttlMs:p})}finally{Me=!1,l()}}}function po(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function qr(){try{const t=window.localStorage.getItem(ms),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function mo(t){window.localStorage.setItem(ms,JSON.stringify(Array.isArray(t)?t:[]))}function md(t){const e=String((t==null?void 0:t.local_upload_id)||po()),n=qr().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),mo(n),h("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function gd(t){const e=qr().filter(n=>(n==null?void 0:n.local_upload_id)!==t);mo(e)}async function yd(){if(zn||!(d!=null&&d.connected)||!_())return;const t=qr();if(t.length!==0){zn=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!_())return;await go(e),gd(e.local_upload_id)}}catch(e){h("roster-data-pending-error",`Pending roster upload retry failed: ${v(e)}`,{ttlMs:p})}finally{zn=!1}}}async function go(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await A("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const n=await tc(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return h("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:p}),e}async function bd(t={}){var e,n;if(!!_()){if(!(d!=null&&d.connected)){h("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}try{const r=await Ja(t);if(!(r!=null&&r.ok)){h("applications-data-info",(r==null?void 0:r.message)||"No application records were found to process.",{ttlMs:p});return}if((Array.isArray((e=r==null?void 0:r.data)==null?void 0:e.records)?r.data.records:[]).length===0){h("applications-data-info",`No application records were found in ${r.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:p});return}const s={local_upload_id:yo(),authenticated_username:Q(),authenticated_discord_user_id:((n=g==null?void 0:g.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await ko(s)}catch(o){throw kd(s),o}}catch(r){h("applications-data-error",v(r),{ttlMs:p})}}}function yo(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Pr(){try{const t=window.localStorage.getItem(gs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function bo(t){window.localStorage.setItem(gs,JSON.stringify(Array.isArray(t)?t:[]))}function kd(t){const e=String((t==null?void 0:t.local_upload_id)||yo()),n=Pr().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),bo(n),h("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function vd(t){const e=Pr().filter(n=>(n==null?void 0:n.local_upload_id)!==t);bo(e)}async function Sd(){if(Kn||!(d!=null&&d.connected)||!_())return;const t=Pr();if(t.length!==0){Kn=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!_())return;await ko(e),vd(e.local_upload_id)}}catch(e){h("applications-data-pending-error",`Pending application upload retry failed: ${v(e)}`,{ttlMs:p})}finally{Kn=!1}}}async function ko(t){var i;if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return h("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:p}),{ok:!0,sent_count:0,skipped_empty:!0};let n=0;for(const s of e){const o=await A("guildsync:eso-guild-application-message",{...t,record:s,recordKey:(s==null?void 0:s.recordKey)||"",message:wd(s)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Backend rejected the application data payload. Application data was not cleared.");n+=1}const r=await Za(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return h("applications-data-sent",`Sent ${n} application record${n===1?"":"s"} to GuildSync backend.`,{ttlMs:p}),{ok:!0,sent_count:n}}function wd(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),n=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",r=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",s=String(t.applicationText||"_No application text captured._"),o=Object.entries(t).filter(([c])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(c)).map(([c,u])=>`**${c}:** ${_d(u)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${n}** ${r} an application from **${i}**.`,"","**Application text:**","```",s.slice(0,1500),"```",o.length>0?"":null,o.length>0?"**Full captured record fields:**":null,...o].filter(c=>c!==null).join(`
`)}function _d(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function Ad(t={}){await bd(t)}function Ld(){const t=vr($),e=jd(t,$),n=$!=="other";return`
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
          ${Dd()}
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${a(xo(Ss))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${De||!_()?"disabled":""} ${_()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${De?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${Xn("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${Xn("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${Xn("other","?","Other","All other deposits")}
        </div>

        ${$d($)}

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
              ${t.length>0?t.map(r=>Kd(r,n)).join(""):Yd(n)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${a(Bt(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${$==="monthly"?`<div>Raffle Pot: <strong>${a(Bt(Math.floor(e.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${$==="biweekly"?`<div>Raffle Pot: <strong>${a(Bt(Ro(e.amount)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${$==="biweekly"?`<div>Draws: <strong>${a(String(zd(e.amount)))}</strong></div>`:""}
          ${n?`<div>Total Tickets Awarded: <strong>${a(xn(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${Ge?Ed(vr(zt)):""}
    </div>
  `}function Ed(t){return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${a(ee(zt))} Deposits</h3>
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
              ${t.length>0?t.map(e=>Rd(e)).join(""):Md()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${a(_o(t))}</textarea>
      </div>
    </div>
  `}function Rd(t){return`
    <tr>
      <td>${a(t.displayName||"")}</td>
      <td>${a(String(Number(t.amount)||0))}</td>
      <td>${a(String(Number(t.ticketAmount)||0))}</td>
      <td>${a(t.note||"")}</td>
    </tr>
  `}function Md(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${a(ee(zt))}.</td>
    </tr>
  `}function $d(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=Ao(t),n=_n(t),r=n<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${f(ee(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${a(ee(t))} Raffle Period ${n===0?"(Current)":`(${Math.abs(n)} period${Math.abs(n)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${a(dn(e.salesStart))} through ${a(dn(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${a(dn(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${r?"":"disabled"} aria-label="Next ${f(ee(t))} raffle period">\u203A</button>
    </div>
  `}function Xn(t,e,n,r){const i=$===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${f(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${a(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${a(n)}</span>
        <span class="bank-section-subtitle">${a(r)}</span>
      </span>
    </button>
  `}function Dd(){if(!_())return"";const t=Bn(),e=Jt(),n=vo(),r=t>0,i=e>0,s=n>0;if(!r&&!i&&!s)return"";let o="",c="",u=!1;r?(o=`Check Out ${t} Deposit Mail`,c="checkout"):i?(u=!0,Qe?o=`Writing ${e} Pending Mail`:x.running?o=`${e} Mail Waiting for ESO Closure`:(Co("render-pending-mail-button"),o=`${e} Mail Writing to Disk`)):(u=!0,o=`${n} Mail Ready to Send`);const b=r?"Check out new deposit mail. GuildSync will immediately try to write it, or hold it until ESO closes.":i?"Deposit mail is already checked out and will be written automatically after ESO closes.":"Deposit mail has been written to ESO SavedVariables and is ready for ESO to send it and write acknowledgements.",S=or||Qe,m=x.running?"ESO Running":"ESO Not Running",y=x.running?"eso-running":"eso-not-running";return`
    <button id="checkoutDepositMailButton" class="${`bank-export-button deposit-mail-button${u?" deposit-mail-status-only":""}`}" type="button" data-deposit-mail-action="${f(c)}" ${u||S?'aria-disabled="true"':""} title="${f(x.message||b)}" aria-label="${f(`${o}. ${b}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${a(o)}</span>
      <span aria-hidden="true">(</span><span class="deposit-mail-eso-status ${y}" aria-hidden="true">${a(m)}</span><span aria-hidden="true">)</span>
    </button>
  `}function Jt(){return Qt().reduce((t,e)=>t+At(e.records).length,0)}function Td(){const t=(g==null?void 0:g.user)||{};return new Set([Q(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function Cd(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?Td().has(e):!1}function vo(){return _()?F.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="written_to_eso"&&Cd(t)}).length:0}function Bn(){return F.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="unsent"}).length}function Nd(t){const e=String(t||"").trim();return F.find(n=>String(n.eventId||"").trim()===e)||null}function Fr(t){const e=String(t||"other").toLowerCase(),n=["biweekly","monthly","other"],r=n.includes(e)?e:"other",i=n.filter(s=>s!==r);return[i[0]||"biweekly",r,i[1]||"other"]}function Gr(t={},e="other"){const n=String(e||"other").toLowerCase(),r=Number(t==null?void 0:t.amount)||0;return n===String((t==null?void 0:t.type)||"").toLowerCase()?Number(t==null?void 0:t.ticketAmount)||0:n==="biweekly"?Math.floor(r/500):n==="monthly"?Math.floor(r/2500):0}function So(t={},e="other",n=""){const r=String(t.type||"other").toLowerCase(),i=ee(r),s=ee(e),o=Q()||"Unknown user",c=[`Moved from ${i} to ${s} by ${o}.`,`Ref ${t.eventId||""}`],u=String(n||"").trim();return u&&c.push(`Reason: ${u}`),c.join(`
`)}function Bd(t){const e=Nd(t);if(!e){h("banking-move-missing","Could not find the selected banking entry.",{ttlMs:p});return}const n=String(e.type||"other").toLowerCase();ie=e,T={targetType:n,note:"",tickets:String(Gr(e,n))},re="",dt=!1,wt=!0,l()}function wn(){wt=!1,dt=!1,re="",ie=null,T={targetType:"other",note:"",tickets:""},l()}function Od(){const t=ie||{},e=String(t.type||"other").toLowerCase(),n=ee(e),r=Fr(e);let i=String(T.targetType||r[0]||"other").toLowerCase();r.includes(i)||(i=r[0]||"other",T.targetType=i);const s=So(t,i,T.note);return`
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
            <div><strong>Amount:</strong> ${a(Bt(t.amount))} \u{1FA99}</div>
          </div>

          <div class="banking-move-target-row banking-move-slider-row">
            <span>Move To</span>
            <div class="banking-move-slider-control" role="radiogroup" aria-label="Move banking entry destination">
              <div class="banking-move-slider-labels">
                ${r.map(o=>`
                  <button
                    class="banking-move-slider-label ${i===o?"selected":""} ${o===e?"current":""}"
                    type="button"
                    role="radio"
                    aria-checked="${i===o?"true":"false"}"
                    data-banking-move-target="${f(o)}"
                  >
                    <strong>${a(ee(o))}</strong>
                    <span>${o===e?"Current / restore original values":`${a(String(Gr(t,o)))} tickets`}</span>
                  </button>
                `).join("")}
              </div>
            </div>
          </div>

          <div class="banking-move-compact-row">
            <label class="manual-ticket-count-field banking-move-ticket-field">
              <span>Tickets Awarded</span>
              <input id="bankingMoveTicketsInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${f(T.tickets)}" ${i==="other"?"disabled":""} />
            </label>

            <label class="manual-ticket-note-field banking-move-note-field">
              <span>Move Note</span>
              <textarea id="bankingMoveNoteInput" class="discord-search-input manual-ticket-note-input banking-move-note-input" rows="1" placeholder="Optional reason for this move">${a(T.note)}</textarea>
            </label>
          </div>

          <div class="roster-history-muted banking-move-generated-note">${a(s).replace(/\n/g,"<br>")}</div>

          <div class="manual-ticket-actions banking-move-actions">
            <button id="saveBankingMoveButton" class="refresh-discord-button banking-move-submit-button" type="button" ${dt||i===e?"disabled":""}>${dt?"MOVING...":i===e?"SELECT A SIDE TO MOVE":"MOVE"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Id(){var n,r,i,s;if(!wt)return;(n=document.querySelector("#closeBankingMoveDialogButton"))==null||n.addEventListener("click",()=>wn());function t(o){const c=String(o||"other").toLowerCase(),u=String((ie==null?void 0:ie.type)||"other").toLowerCase(),b=Fr(u);T.targetType=b.includes(c)?c:u,T.tickets=String(Gr(ie||{},T.targetType)),l()}document.querySelectorAll("[data-banking-move-target]").forEach(o=>{o.addEventListener("click",()=>t(o.dataset.bankingMoveTarget))}),(r=document.querySelector("#bankingMoveTicketsInput"))==null||r.addEventListener("input",o=>{const c=String(o.target.value||"").replace(/\D/g,"");o.target.value!==c&&(o.target.value=c),T.tickets=c}),(i=document.querySelector("#bankingMoveNoteInput"))==null||i.addEventListener("input",o=>{T.note=o.target.value||"";const c=document.querySelector(".banking-move-generated-note");c&&(c.innerText=So(ie||{},T.targetType||"other",T.note))}),(s=document.querySelector("#saveBankingMoveButton"))==null||s.addEventListener("click",()=>xd());const e=document.querySelector(".roster-history-overlay");e&&e.addEventListener("click",o=>{o.target===e&&wn()})}async function xd(){const t=ie;if(!(t!=null&&t.eventId)){re="No banking entry is selected.",l();return}const e=String(t.type||"other").toLowerCase(),n=Fr(e),r=String(T.targetType||n[0]||"other").toLowerCase();if(!n.includes(r)||r===e){re="Select one of the side destinations before moving this entry.",l();return}const i=r==="other"?0:Math.floor(Number(String(T.tickets||"").trim()||0));if(!Number.isFinite(i)||i<0){re="Tickets must be zero or greater.",l();return}dt=!0,re="",l();try{const s=await A("guildsync:move-banking-entry",{event_id:t.eventId,target_type:r,tickets:i,note:T.note||""},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to move banking entry.");wn(),await ue({silent:!0}),h("banking-entry-moved",s.message||"Banking entry moved.",{ttlMs:p})}catch(s){dt=!1,re=v(s),l()}}function wo(){if(R!=="more")return;Id(),document.querySelectorAll("[data-bank-entry-move]").forEach(o=>{o.addEventListener("click",()=>Bd(o.dataset.bankEntryMove||""))}),document.querySelectorAll("[data-bank-section]").forEach(o=>{o.addEventListener("click",()=>{$=o.dataset.bankSection||"biweekly",l()})}),document.querySelectorAll("[data-bank-export-section]").forEach(o=>{o.addEventListener("click",()=>{zt=(o.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",Ge=!0,l()})}),document.querySelectorAll("[data-bank-period-move]").forEach(o=>{o.addEventListener("click",()=>{Fd(o.dataset.bankPeriodMove||""),l()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{Ge=!1,l()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>qd());const n=document.querySelector(".bank-export-overlay");n&&n.addEventListener("click",o=>{o.target===n&&(Ge=!1,l())});const r=document.querySelector("#openManualBiweeklyTicketButton");r&&r.addEventListener("click",async()=>{if(!_()){h("manual-ticket-login-required","Login required to add manual entries.",{ttlMs:p});return}le=!0,G="",_t=L.accountName||"",Y=!1,N=-1,J.length===0&&(d==null?void 0:d.connected)&&_()&&await Yt({silent:!0}),l()});const i=document.querySelector("#checkoutDepositMailButton");i&&i.addEventListener("click",()=>{i.dataset.depositMailAction==="checkout"&&i.getAttribute("aria-disabled")!=="true"&&ru()});const s=document.querySelector("#refreshBankingDataButton");s&&s.addEventListener("click",()=>{if(!_()){h("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:p});return}$o({key:"banking"})})}function _o(t){const e=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const n of t)e.push([n.displayName||"",String(Number(n.amount)||0),String(Number(n.ticketAmount)||0),n.note||""]);return e.map(n=>n.map(On).join("	")).join(`
`)}function On(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function In(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly","readonly"),n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.width="1px",n.style.height="1px",n.style.opacity="0",n.style.pointerEvents="none",n.style.zIndex="-1",document.body.appendChild(n),n.focus(),n.select(),n.setSelectionRange(0,n.value.length);let r=!1;try{r=document.execCommand("copy")}finally{document.body.removeChild(n)}return r}async function qd(){const t=vr(zt),e=_o(t);if(await In(e)){h("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#bankingExportTsv");r&&(r.focus(),r.select()),h("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:p})}function vr(t){return F.filter(e=>e.type===t).filter(e=>Pd(t,e)).sort((e,n)=>(Number(n.time)||0)-(Number(e.time)||0))}function Pd(t,e){if(t==="other")return!0;const n=Number(e==null?void 0:e.time)||0;if(n<=0)return!1;const r=Ao(t);return n>=r.salesStart&&n<=r.salesEnd}function _n(t){return Number(ur[t])||0}function Fd(t){if($!=="biweekly"&&$!=="monthly")return;const e=_n($);if(t==="previous"){ur[$]=e-1;return}t==="next"&&e<0&&(ur[$]=e+1)}function Ao(t){const e=Math.floor(Date.now()/1e3);if(t==="monthly"){const i=Gd(e,_n(t));return{salesStart:Eo(i)+1,salesEnd:i,raffleTime:i+bn}}const n=Te;let r=Lo(e);return r+=_n(t)*n,{salesStart:r-n+1,salesEnd:r,raffleTime:r+bn}}function Lo(t){const e=Te;let n=_c;for(;n-e>t;)n-=e;for(;n<t;)n+=e;return n}function Gd(t,e=0){let n=Ud(t),r=Number(e)||0;for(;r<0;)n=Eo(n),r+=1;for(;r>0;)n=Vd(n),r-=1;return n}function Ud(t){let e=Lo(t);for(;!Ur(e);)e+=Te;return e}function Eo(t){let e=t-Te;for(;!Ur(e);)e-=Te;return e}function Vd(t){let e=t+Te;for(;!Ur(e);)e+=Te;return e}function Ur(t){const e=t+bn,n=t+Te+bn;return Vi(e)!==Vi(n)}function Vi(t){var s,o;const e=new Date(Number(t||0)*1e3);if(Number.isNaN(e.getTime()))return"";const n=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit"}).formatToParts(e),r=((s=n.find(c=>c.type==="year"))==null?void 0:s.value)||"",i=((o=n.find(c=>c.type==="month"))==null?void 0:o.value)||"";return`${r}-${i}`}function Hd(t=$){const e=String(t||"").toLowerCase();return e!=="monthly"&&e!=="biweekly"?0:"auto"}function Wd(t={},e=$){const n=Number(t.amount)||0;if(!Hd(e))return n;const r=Math.abs(Math.trunc(n))%10,i=r===1||r===3?r:0;return i>0&&n>i?n-i:n}function jd(t,e=$){return t.reduce((n,r)=>(n.amount+=Wd(r,e),n.tickets+=Number(r.ticketAmount)||0,n),{amount:0,tickets:0})}function Ro(t){const e=Math.ceil((Number(t)||0)/2);return e<=0?0:Math.ceil(e/2e5)*2e5}function zd(t){const e=Ro(t);return e>0?e/2e5:0}function Kd(t,e=!0){return`
    <tr>
      <td>${a(t.note||t.eventId||"")}</td>
      <td>${a(dn(t.time))}</td>
      <td>${a(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${a(Bt(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td><strong class="bank-ticket-amount">${a(xn(t.ticketAmount))}</strong></td>`:""}
      <td><button class="bank-entry-move-button" type="button" data-bank-entry-move="${f(t.eventId||"")}">Move</button></td>
    </tr>
  `}function Yd(t=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?"6":"5"}">No ${a(ee($))} deposits found for this ${$==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function ee(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function dn(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Bt(t){return(Number(t)||0).toLocaleString()}function xn(t){return(Number(t)||0).toLocaleString()}function At(t){return Array.isArray(t)?t.map(e=>{var r,i,s,o,c,u,b,S,m,y,O,fe,Lt,Ke,Qr,Xr,Zr,ei,ti,ni,ri,ii,si,oi,ai,ci,li,di,ui,fi,hi,pi,mi,gi,yi,bi,ki,vi,Si,wi,_i;const n=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:n==="monthly"||n==="biweekly"||n==="other"?n:"other",eventId:String((i=(r=e==null?void 0:e.eventId)!=null?r:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((o=(s=e==null?void 0:e.time)!=null?s:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((u=(c=e==null?void 0:e.displayName)!=null?c:e==null?void 0:e.display_name)!=null?u:"").trim(),amount:Number((b=e==null?void 0:e.amount)!=null?b:0)||0,ticketAmount:Number((m=(S=e==null?void 0:e.ticketAmount)!=null?S:e==null?void 0:e.ticket_amount)!=null?m:0)||0,note:String((y=e==null?void 0:e.note)!=null?y:"").trim(),dataSource:String((fe=(O=e==null?void 0:e.dataSource)!=null?O:e==null?void 0:e.data_source)!=null?fe:"").trim(),emailRequested:Boolean((Lt=e==null?void 0:e.emailRequested)!=null?Lt:e==null?void 0:e.email_requested),mailStatus:String((Qr=(Ke=e==null?void 0:e.mailStatus)!=null?Ke:e==null?void 0:e.mail_status)!=null?Qr:"").trim(),mailRequestId:String((Zr=(Xr=e==null?void 0:e.mailRequestId)!=null?Xr:e==null?void 0:e.mail_request_id)!=null?Zr:"").trim(),mailBatchId:String((ti=(ei=e==null?void 0:e.mailBatchId)!=null?ei:e==null?void 0:e.mail_batch_id)!=null?ti:"").trim(),checkedOutBy:String((ri=(ni=e==null?void 0:e.checkedOutBy)!=null?ni:e==null?void 0:e.checked_out_by)!=null?ri:"").trim(),checkedOutAt:String((si=(ii=e==null?void 0:e.checkedOutAt)!=null?ii:e==null?void 0:e.checked_out_at)!=null?si:"").trim(),checkoutExpiresAt:String((ai=(oi=e==null?void 0:e.checkoutExpiresAt)!=null?oi:e==null?void 0:e.checkout_expires_at)!=null?ai:"").trim(),writtenToEsoAt:String((li=(ci=e==null?void 0:e.writtenToEsoAt)!=null?ci:e==null?void 0:e.written_to_eso_at)!=null?li:"").trim(),sentAt:String((ui=(di=e==null?void 0:e.sentAt)!=null?di:e==null?void 0:e.sent_at)!=null?ui:"").trim(),failedReason:String((hi=(fi=e==null?void 0:e.failedReason)!=null?fi:e==null?void 0:e.failed_reason)!=null?hi:"").trim(),recipient:String((yi=(gi=(mi=(pi=e==null?void 0:e.recipient)!=null?pi:e==null?void 0:e.account_name)!=null?mi:e==null?void 0:e.displayName)!=null?gi:e==null?void 0:e.display_name)!=null?yi:"").trim(),subject:String((vi=(ki=(bi=e==null?void 0:e.subject)!=null?bi:e==null?void 0:e.mailSubject)!=null?ki:e==null?void 0:e.mail_subject)!=null?vi:"").trim(),body:String((_i=(wi=(Si=e==null?void 0:e.body)!=null?Si:e==null?void 0:e.mailBody)!=null?wi:e==null?void 0:e.mail_body)!=null?_i:"").trim()}}):[]}function Jd(t){const e=new Map;for(const n of F)n.eventId&&e.set(n.eventId,n);for(const n of t)!n.eventId||e.set(n.eventId,n);F=Array.from(e.values()).sort((n,r)=>(Number(r.time)||0)-(Number(n.time)||0))}function Mo(){Ss=new Date().toISOString()}async function Qd(t={}){!(t!=null&&t.ok)||(F=At(t.entries),Mo(),R==="more"&&l(),h("banking-data-updated",`Banking data updated. Loaded ${F.length} deposit record${F.length===1?"":"s"}.`,{ttlMs:p}))}async function ue(t={}){const e=Boolean(t.silent),n=Boolean(t.background);if(!(d!=null&&d.connected)){e||h("banking-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}n||(De=!0,l());try{const r=await A("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");F=At(r.entries),Mo(),e||h("banking-data",`Loaded ${F.length} banking deposit record${F.length===1?"":"s"}.`,{ttlMs:p})}catch(r){e||h("banking-data-error",v(r),{ttlMs:p})}finally{n||(De=!1),l()}}async function Hi(){!(d!=null&&d.connected)||!_()||De||(await ue({silent:!0,background:!0}),Bn()<=0&&Jt()>0&&(x.running?l():Co("availability-refresh")))}function Xd(){Je&&clearInterval(Je),Hi(),Je=window.setInterval(Hi,kc)}function Zd(){Je&&(clearInterval(Je),Je=null)}async function eu(t={}){if(!!_()){if(!(d!=null&&d.connected)){h("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:p});return}try{const e=await Ya(t);if(!(e!=null&&e.ok))return;const n=Array.isArray(e.ackEntries)?e.ackEntries:[];if(n.length===0)return;const r=await A("guildsync:mark-deposit-mail-sent",{mail_ack:n,mail_request_ids:n.map(o=>(o==null?void 0:o.mail_request_id)||(o==null?void 0:o.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(r.mail_request_ids)?r.mail_request_ids:Array.isArray(r.mailRequestIds)?r.mailRequestIds:[];if(i.length===0){h("deposit-mail-ack-none",r.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:p});return}const s=await za(i);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");h("deposit-mail-ack-sent",s.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:p}),await ue({silent:!0})}catch(e){h("deposit-mail-ack-error",v(e),{ttlMs:p})}}}async function tu(){if(!Yn){Yn=!0;try{const t=await nc();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&h("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:p})}catch(t){h("deposit-mail-ack-cleanup-error",v(t),{ttlMs:p})}finally{Yn=!1}}}async function $o(t={}){var e,n;if(!!_()){if(!(d!=null&&d.connected)){h("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}De=!0,l();try{const r=await Qa(t);if(!(r!=null&&r.ok)){h("banking-data-pending",(r==null?void 0:r.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:p});return}const i=At((e=r==null?void 0:r.data)==null?void 0:e.entries);Jd(i);const s=new Date().toISOString(),o={local_upload_id:No(),authenticated_username:Q(),authenticated_discord_user_id:((n=g==null?void 0:g.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:s,data:r.data||{}};try{await Oo(o)}catch(c){throw ou(o),c}await ue({silent:!0})}catch(r){h("banking-data-error",v(r),{ttlMs:p})}finally{De=!1,l()}}}function Do(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Qt(){try{const t=window.localStorage.getItem(ps),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function To(t){window.localStorage.setItem(ps,JSON.stringify(Array.isArray(t)?t:[]))}function nu(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||Do()),n=Qt().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);n.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),To(n)}function Wi(t){const e=String(t||"").trim();if(!e)return;const n=Qt().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);To(n)}async function ru(){if(!_()){h("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:p});return}if(!(d!=null&&d.connected)){h("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:p});return}const t=Qt(),e=Bn();if(t.length>0&&e<=0){await ht();return}or=!0,l();try{const n=await A("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail checkout request.");const r=At(n.records);if(r.length===0){h("deposit-mail-none",n.message||"No unsent deposit mail is available.",{ttlMs:p}),await ue({silent:!0});return}const i={mail_batch_id:n.mail_batch_id||n.mailBatchId||Do(),checked_out_by:n.checked_out_by||n.checkedOutBy||Q(),checked_out_at:new Date().toISOString(),records:r};nu(i),await ht()}catch(n){h("deposit-mail-error",v(n),{ttlMs:p})}finally{or=!1,l()}}function Co(t=""){Xe||Qe||!_()||Jt()<=0||x.running||(Xe=window.setTimeout(()=>{Xe=null,ht()},100))}async function ht(){if(Xe&&(window.clearTimeout(Xe),Xe=null),Qe||!_())return;const t=Qt();if(t.length!==0){if(await Sr({silent:!0}),x.running){h("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:p}),l();return}Qe=!0,l();try{for(const e of t){const n=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),r=At(e==null?void 0:e.records);if(r.length===0){Wi(n);continue}const i=await pc(r);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(d!=null&&d.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const s=await A("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:n,event_ids:i.eventIds||r.map(o=>o.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend did not confirm deposit mail was marked written_to_eso.");Wi(n),h("deposit-mail-written",i.message||`Wrote ${r.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:p})}await ue({silent:!0})}catch(e){h("deposit-mail-write-error",v(e),{ttlMs:p})}finally{Qe=!1,l()}}}async function Sr(t={}){try{const e=Boolean(x.running),n=await rc();x={running:Boolean(n==null?void 0:n.running),message:String((n==null?void 0:n.message)||"")},x.running||await tu(),e&&!x.running&&(h("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:p}),await ht()),e!==x.running&&l()}catch(e){t.silent||h("eso-status-error",v(e),{ttlMs:p})}}function iu(){Ye&&clearInterval(Ye),Sr({silent:!0}).then(()=>{!x.running&&Jt()>0&&ht()}),Ye=window.setInterval(()=>Sr({silent:!0}),bc)}function su(){Ye&&(clearInterval(Ye),Ye=null)}function No(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Vr(){try{const t=window.localStorage.getItem(hs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Bo(t){window.localStorage.setItem(hs,JSON.stringify(Array.isArray(t)?t:[]))}function ou(t){const e=String((t==null?void 0:t.local_upload_id)||No()),n=Vr().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Bo(n),h("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function au(t){const e=Vr().filter(n=>(n==null?void 0:n.local_upload_id)!==t);Bo(e)}async function cu(){if(jn||!(d!=null&&d.connected)||!_())return;const t=Vr();if(t.length!==0){jn=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!_())return;await Oo(e),au(e.local_upload_id)}}catch(e){h("banking-data-pending-error",`Pending banking upload retry failed: ${v(e)}`,{ttlMs:p})}finally{jn=!1}}}async function Oo(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await A("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const n=await ec(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return h("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:p}),e}function Io(){if(R!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>lu());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{at=!0,ce="",l(),B("discordHistorySearchInput")});const n=document.querySelector("#discordMemberSearch");n&&n.addEventListener("input",o=>{pn=o.target.value||"",ar=o.target.selectionStart,cr=o.target.selectionEnd,l({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{mu(o.dataset.discordSortColumn||"username")})});const r=document.querySelector("#discordRoleFilter");r&&r.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(Ze.add(c),l())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRoleFilter||"";Ze.delete(c),l()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(et.add(c),l())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeDiscordLinkStatusFilter||"";et.delete(c),l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>Js(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{pn="",Ze.clear(),et.clear(),l()})}async function lu(){var t,e;if(!(d!=null&&d.connected)){h("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:p});return}hn=!0,l(),h("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const n=await A("guildsync:request-discord-data-refresh",{requested_by:((t=g==null?void 0:g.user)==null?void 0:t.display_name)||((e=g==null?void 0:g.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to request Discord data refresh.");h("discord-refresh-requested",n.message||"Discord data refresh completed.",{ttlMs:p}),await Hr({silent:!0})}catch(n){h("discord-refresh-error",v(n),{ttlMs:p})}finally{hn=!1,l()}}async function du(){if(!(d!=null&&d.connected))return;const t=await A("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(Mn=t.value||null)}async function uu(t={}){if(!!(t!=null&&t.ok)){q=Wr(t.members),t.last_refresh&&(Mn=t.last_refresh);try{await du()}catch{}R==="discord-members"&&l(),h("discord-data-updated",`Discord data updated. Loaded ${q.length} member record${q.length===1?"":"s"}.`,{ttlMs:p})}}async function Hr(t={}){const e=Boolean(t.silent);if(!(d!=null&&d.connected)){h("discord-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}It=!0,l();try{const[n,r]=await Promise.all([A("guildsync:request-discord-data-date",{}),A("guildsync:request-discord-member-dataJSON",{})]);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord refresh date.");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord member data.");Mn=n.value||null,q=Wr(r.members),e||h("discord-data",`Loaded ${q.length} Discord member record${q.length===1?"":"s"}.`,{ttlMs:p})}catch(n){h("discord-data-error",v(n),{ttlMs:p})}finally{It=!1,l()}}function A(t,e={},n=3e4){return new Promise((r,i)=>{if(!(d!=null&&d.connected)){i(new Error("GuildSync websocket is not connected."));return}let s=!1;const o=window.setTimeout(()=>{s||(s=!0,i(new Error(`${t} timed out.`)))},n);d.emit(t,e,c=>{s||(s=!0,window.clearTimeout(o),r(c))})})}function Wr(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(fu).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,n)=>Ft(e).localeCompare(Ft(n),void 0,{sensitivity:"base"})):[]}function fu(t){var i,s;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),n=String(t.role_name||t.name||"Unnamed Role").trim(),r=(s=(i=t.role_color)!=null?i:t.color)!=null?s:null;return{role_id:e,role_name:n||"Unnamed Role",role_color:r}}function hu(){const t=pn.trim().toLowerCase(),e=Array.from(Ze),n=q.filter(r=>{if(t&&![r.username,r.global_name,r.server_nickname,r.discord_id,...r.roles.map(s=>s.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(r.roles.map(s=>s.role_name));if(!e.every(s=>i.has(s)))return!1}return!!Ts(et,jc(r))});return pu(n)}function pu(t){const e=Oe==="desc"?-1:1;return[...t].sort((n,r)=>{const i=ji(n,xt),s=ji(r,xt),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:Ft(n).localeCompare(Ft(r),void 0,{sensitivity:"base",numeric:!0})})}function ji(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(n=>n.role_name||"").filter(Boolean).sort((n,r)=>n.localeCompare(r,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function mu(t){const n=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";xt===n?Oe=Oe==="asc"?"desc":"asc":(xt=n,Oe="asc"),l()}function nn(t,e){const n=xt===t,r=Oe==="asc"?"ascending":"descending",i=n?Oe==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${n?r:"none"}">
      <button
        class="discord-sort-header${n?" active":""}"
        type="button"
        data-discord-sort-column="${f(t)}"
        title="Sort ${f(e)} ${n&&Oe==="asc"?"descending":"ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function gu(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(ar)?ar:t.value.length,n=Number.isInteger(cr)?cr:e;t.setSelectionRange(e,n)}}function yu(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(lr)?lr:t.value.length,n=Number.isInteger(dr)?dr:e;t.setSelectionRange(e,n)}}function bu(){const t=new Set;for(const e of q)for(const n of e.roles)n.role_name&&t.add(n.role_name);return Array.from(t).sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function ku(t){const e=_u(t),n=Ft(t),r=t.roles||[];return`
    <tr data-discord-user-id="${f(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${f(e)}" alt="${f(n)}" />`:`<span>${a(jo(n))}</span>`}
          </div>
          <span>${a(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${a(t.global_name||"")}</td>
      <td>${a(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${r.length>0?r.map(i=>Su(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${Ks({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function vu(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${a(It?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function Su(t){const e=qn(t.role_color),n=Kr(e),r=zr(e,n);return`
    <span
      class="discord-role-badge"
      title="${f(t.role_name)}"
      style="${r}"
    >${a(t.role_name)}</span>
  `}function wu(t){const e=jr(t),n=qn(e==null?void 0:e.role_color),r=Kr(n),i=zr(n,r);return`
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
  `}function jr(t){for(const e of q){const n=e.roles.find(r=>r.role_name===t);if(n)return n}return null}function qn(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function zr(t,e){return[`--role-fill-top: ${zi(t,"#ffffff",.16)}`,`--role-fill-bottom: ${zi(t,"#000000",.1)}`,`--role-fill-glow: ${Ki(t,.28)}`,`--role-fill-edge: ${Ki(t,.46)}`,`color: ${e}`].join("; ")}function zi(t,e,n){const r=rn(t)||rn("#64748b"),i=rn(e)||rn("#ffffff"),s=Math.max(0,Math.min(1,Number(n)||0)),o=Math.round(r.red+(i.red-r.red)*s),c=Math.round(r.green+(i.green-r.green)*s),u=Math.round(r.blue+(i.blue-r.blue)*s);return`#${Zn(o)}${Zn(c)}${Zn(u)}`}function rn(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function Zn(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function Ki(t,e){const n=String(t||"#64748b").replace("#",""),r=/^[0-9a-f]{6}$/i.test(n)?n:"64748b",i=parseInt(r.slice(0,2),16),s=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`rgba(${i}, ${s}, ${o}, ${e})`}function Kr(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const n=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(n*299+r*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function _u(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!n)return"";const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function Ft(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function xo(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function un(){const t=document.querySelector("#discordArea");if(!!t){if(Xt(!1),_()){const e=g.user||{},n=Q(),r=Gu(e),i=jo(n);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${r?`<img src="${f(r)}" alt="${f(n)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${a(i)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const s=document.querySelector("#discordAvatarButton");s.addEventListener("contextmenu",o=>{o.preventDefault(),Yi()}),s.addEventListener("click",()=>{Yi()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",Mu)}}function Yi(){if(Vt){Xt();return}Ru()}function Au(t=Se){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],n=String((t==null?void 0:t.directory)||"").trim(),r=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const s=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),o=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),c=String((i==null?void 0:i.filePath)||(n?`${n}\\${o}`:o)).trim(),u=(i==null?void 0:i.enabled)!==!1,b=r&&u,S=`profileFileWatchToggle-${Eu(s||o)}`;return`
          <label class="profile-filewatch-item ${u?"enabled":"disabled"}" title="${f(c)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${a(o)}</span>
              <span class="profile-filewatch-state">${b?"Watching":u?"On":"Off"}</span>
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
  `}function Yr(){var r,i,s;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=Q(),n=((r=g.user)==null?void 0:r.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${a(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${a(Uu(n))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${a(Rn)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${Se!=null&&Se.watching?"Active":"Stopped"}</span>
        </div>
        ${Au()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(i=document.querySelector("#discordLogoutButton"))==null||i.addEventListener("click",$u),(s=document.querySelector("#associateTicketReportButton"))==null||s.addEventListener("click",()=>{Xt(!1),Ns()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",Lu)})}async function qo(){try{Se=await ic(),Vt&&Yr()}catch(t){h("file-watcher-error",v(t),{ttlMs:p})}}async function Lu(t){var r;const e=t.currentTarget,n=String(((r=e==null?void 0:e.dataset)==null?void 0:r.filewatchKey)||"").trim();if(!!n)try{e.disabled=!0,Se=await lc(n,e.checked),await st({silent:!0}),Vt&&Yr()}catch(i){h("file-watcher-error",v(i),{ttlMs:p}),await qo()}}function Eu(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function Ru(){const t=document.querySelector("#discordProfileMenu");!t||(Yr(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),Vt=!0,qo(),setTimeout(()=>{window.addEventListener("click",Po),window.addEventListener("keydown",Fo)},0))}function Xt(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),Vt=!1,t&&(window.removeEventListener("click",Po),window.removeEventListener("keydown",Fo))}function Po(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&Xt()}function Fo(t){t.key==="Escape"&&Xt()}async function Mu(){try{h("auth","Opening Discord login...",{ttlMs:p});const t=await uc();t!=null&&t.status_message&&h("auth",t.status_message,{ttlMs:p}),Ee()}catch(t){h("auth-error",v(t),{ttlMs:p}),Ee()}}async function $u(){try{g=await oc(),h("auth",g.status_message||"Logged out.",{ttlMs:p}),ws(),Ot(),await st()}catch(t){h("auth-error",v(t),{ttlMs:p}),Ee()}}function Ot(){const t=g.socket_url||"https://guildsync.perdues.me";Du(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};g!=null&&g.token&&(e.auth={token:g.token}),d=cn(t,e),d.on("connect",()=>{Ee(),Go(),R==="discord-members"&&Hr({silent:!0}),R==="eso-members"&&Yt({silent:!0}),R==="more"&&ue({silent:!0}),cu(),ht(),iu(),Xd(),yd(),Sd(),Tu()}),d.on("connect_error",()=>{Ee(),An()}),d.on("disconnect",()=>{Ee(),An(),su(),Zd()}),d.on("guildsync:version-status",n=>{Cu(n)}),d.on("guildsync:discord-member-data-updated",n=>{uu(n)}),d.on("guildsync:banking-data-updated",n=>{Qd(n)}),d.on("guildsync:roster-data-updated",n=>{hd(n)}),d.on("guildsync:member-links-updated",(n={})=>{Array.isArray(n.links)&&(E=n.links,(R==="discord-members"||R==="eso-members"||R==="settings"||Ce)&&l())}),d.on("guildsync:discord-refresh-status",(n={})=>{const r=String(n.message||"").trim();r&&h("discord-refresh-status",r,{ttlMs:p})})}function Du(t=!0){An(),d&&(d.disconnect(),d=null),t&&Ee()}function Go(){!(d!=null&&d.connected)||d.emit("guildsync:client-version",{version:Rn,platform:Uo(),client_type:"wails"})}function Tu(){An(),ln=window.setInterval(()=>{Go()},yc)}function An(){ln&&(window.clearInterval(ln),ln=null)}function Cu(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",n=t.download&&typeof t.download=="object"?t.download:{};he={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||n.url||"").trim(),fileName:String(t.download_file_name||n.file_name||"").trim(),platformLabel:String(n.label||t.platform||Uo()).trim()},h("version",`GuildSync is out of date. Current version: ${Rn}. Latest version: ${e}.`),wr();return}he={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},wr(),Jr("version")}}function Uo(){const t=String(navigator.userAgent||"").toLowerCase(),n=`${String(navigator.platform||"").toLowerCase()} ${t}`;return n.includes("mac")?"macos":n.includes("linux")?"linux":"windows"}function wr(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!he.updateRequired||!he.downloadUrl){t.innerHTML="";return}const e=he.platformLabel||"Desktop",n=he.latestVersion||"latest",r=he.fileName||"GuildSync client download";t.innerHTML=`
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
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{Nu()})}function Nu(){const t=String(he.downloadUrl||"").trim();if(!t){h("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:p});return}gc(t)}function h(t,e,n={}){const r=String(t||"").trim(),i=String(e||"").trim();if(!(!r||!i)){if(Re.set(r,i),Be.has(r)&&(window.clearTimeout(Be.get(r)),Be.delete(r)),n.ttlMs&&Number(n.ttlMs)>0){const s=window.setTimeout(()=>{Jr(r)},Number(n.ttlMs));Be.set(r,s)}pt()}}function Jr(t){const e=String(t||"").trim();if(!!e){if(Re.delete(e),Be.has(e)&&(window.clearTimeout(Be.get(e)),Be.delete(e)),C===e){Gn(()=>{C="",pt()});return}pt()}}function pt(){const t=Pn();if(t.length===0){Ue?Gn(Gt):Gt();return}!Ue&&!Ve&&Fn(t[0])}function Pn(){return Array.from(Re.keys())}function Vo(){const t=Pn();if(t.length===0)return"";if(!C)return t[0];const e=t.indexOf(C);return e<0?t[0]:t[(e+1)%t.length]}function Fn(t){const e=document.querySelector("#statusMessageTrack");if(!e||!Re.has(t)){Gt();return}Un();const n=Re.get(t);C=t,Ue=!0,Ve=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=n,e.style.setProperty("--message-fade-duration",`${bs}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",Ve=!1,Bu()},{once:!0})})}function Bu(){const t=Pn();if(!C||!Re.has(C)){pt();return}if(t.length<=1){Ji(!1);return}Ji(!0)}function Ji(t){const e=document.querySelector("#statusMessageViewport"),n=document.querySelector("#statusMessageTrack");if(!e||!n)return;const r=Math.max(0,n.scrollWidth-e.clientWidth);if(r<=0){t&&Ut(()=>{Gn(()=>{const i=Vo();C="",i?Fn(i):Gt()})},ys);return}Ut(()=>{Ho(r,t)},ks)}function Ho(t,e){const n=document.querySelector("#statusMessageTrack");if(!n||!C||!Re.has(C))return;const r=Math.max(4,Math.ceil(t/Sc));n.style.setProperty("--long-scroll-distance",`${t}px`),n.style.setProperty("--long-scroll-duration",`${r}s`),n.classList.add("long-scroll"),n.addEventListener("animationend",()=>{if(n.classList.remove("long-scroll"),n.style.transform=`translateX(-${t}px) translateY(-50%)`,e){Ut(()=>{Gn(()=>{const i=Vo();C="",i?Fn(i):Gt()})},ys);return}Ut(()=>{Ou()},vc)},{once:!0})}function Ou(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!C||!Re.has(C))return;if(Pn().length!==1){pt();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const r=Math.max(0,e.scrollWidth-t.clientWidth);r<=0||Ut(()=>{Ho(r,!1)},ks)}function Gn(t){const e=document.querySelector("#statusMessageTrack");if(Un(),!e||!Ue){typeof t=="function"&&t();return}Ve=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${bs}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",Ue=!1,Ve=!1,typeof t=="function"&&t()},{once:!0})}function Gt(){const t=document.querySelector("#statusMessageTrack");Un(),C="",Ue=!1,Ve=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function Ut(t,e){const n=window.setTimeout(()=>{Ct=Ct.filter(r=>r!==n),t()},e);Ct.push(n)}function Un(){for(const t of Ct)window.clearTimeout(t);Ct=[]}function Wo(){if(!Ue||Ve||!C)return;const t=C;Un(),Fn(t)}function Ee(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(d!=null&&d.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!_()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${Q()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${Q()}`)}}async function st(t={}){try{if(_()){const e=await fc();Se=e,!t.silent&&(e==null?void 0:e.message)&&h(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:p});return}Se=await hc(),Jr("file-watcher")}catch(e){h("file-watcher-error",v(e),{ttlMs:p})}}function Dt(t,e=null){const n="[GuildSync File Watcher]";if(e){console.log(`${n} ${t}`,e);return}console.log(`${n} ${t}`)}function Iu(t={}){if(!_()){Dt("SavedVariables change ignored because the user is not authenticated.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",n=e.toLowerCase(),r=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=String(t.filePath||"").trim(),o=r?`${r} saved variables (${i})`:i;Dt(`SavedVariables change detected: ${i}${s?` (${s})`:""}. Key: ${n}.`,t),h(`saved-vars-file-updated-${e}`,`${o} has been updated.`,{ttlMs:p}),n==="banking"&&(Dt(`Processing banking SavedVariables update from ${i}.`),xu(t)),n==="roster"&&(Dt(`Processing roster SavedVariables update from ${i}.`),qu(t)),n==="applications"&&(Dt(`Processing applications SavedVariables update from ${i}.`),Ad(t))}async function xu(t={}){await eu(t),await $o(t)}async function qu(t={}){await pd(t)}function Pu(t){!_()||h("file-watcher-error",v(t),{ttlMs:p})}function Fu(){Rt("guildsync-savedvars-file-modified",Iu),Rt("guildsync-file-watcher-error",Pu),Rt("guildsync-login-complete",async t=>{g=t||{logged_in:!1,allowed:!1},un(),Ot(),await st(),h("auth",g.status_message||`Logged in and authorized as ${Q()}.`,{ttlMs:p})}),Rt("guildsync-login-denied",async t=>{g={logged_in:!1,allowed:!1,status_message:""},un(),await st(),h("auth",t||"Access denied.",{ttlMs:p}),Ot()}),Rt("guildsync-login-failed",async t=>{g={logged_in:!1,allowed:!1,status_message:""},un(),await st(),h("auth",t||"Login failed.",{ttlMs:p}),Ot()})}function _(){return Boolean((g==null?void 0:g.logged_in)&&(g==null?void 0:g.allowed)&&(g==null?void 0:g.token))}function Q(){var t,e;return((t=g.user)==null?void 0:t.display_name)||((e=g.user)==null?void 0:e.username)||"Discord User"}function Gu(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),n=String(t.discord_user_id||"").trim();if(!e||!n)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=128`}function jo(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function Uu(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Vu(){Mt&&(Mt.disconnect(),Mt=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),n=Math.round(t.getBoundingClientRect().height);Mt=new ResizeObserver(r=>{const i=r[0];if(!i)return;const s=Math.round(i.contentRect.width),o=Math.round(i.contentRect.height);s===e&&o===n||(e=s,n=o,zo(),Wo())}),Mt.observe(t)}function zo(){clearTimeout(Mi),Mi=setTimeout(async()=>{try{await fs()}catch{}},500)}function v(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function a(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function f(t){return a(t)}Fu();Ac();
