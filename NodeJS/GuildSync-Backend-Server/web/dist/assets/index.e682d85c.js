(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Xa="/assets/splash.ea386b6a.png",Za="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",ec="/assets/GuildSync-Graphic.9169020d.png",fe=Object.create(null);fe.open="0";fe.close="1";fe.ping="2";fe.pong="3";fe.message="4";fe.upgrade="5";fe.noop="6";const On=Object.create(null);Object.keys(fe).forEach(t=>{On[fe[t]]=t});const Fr={type:"error",data:"parser error"},Ks=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Js=typeof ArrayBuffer=="function",Qs=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,ci=({type:t,data:e},n,r)=>Ks&&e instanceof Blob?n?r(e):bs(e,r):Js&&(e instanceof ArrayBuffer||Qs(e))?n?r(e):bs(new Blob([e]),r):r(fe[t]+(e||"")),bs=(t,e)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];e("b"+(r||""))},n.readAsDataURL(t)};function ys(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let Lr;function tc(t,e){if(Ks&&t.data instanceof Blob)return t.data.arrayBuffer().then(ys).then(e);if(Js&&(t.data instanceof ArrayBuffer||Qs(t.data)))return e(ys(t.data));ci(t,!1,n=>{Lr||(Lr=new TextEncoder),e(Lr.encode(n))})}const ks="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",cn=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<ks.length;t++)cn[ks.charCodeAt(t)]=t;const nc=t=>{let e=t.length*.75,n=t.length,r,i=0,s,o,c,u;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const b=new ArrayBuffer(e),v=new Uint8Array(b);for(r=0;r<n;r+=4)s=cn[t.charCodeAt(r)],o=cn[t.charCodeAt(r+1)],c=cn[t.charCodeAt(r+2)],u=cn[t.charCodeAt(r+3)],v[i++]=s<<2|o>>4,v[i++]=(o&15)<<4|c>>2,v[i++]=(c&3)<<6|u&63;return b},rc=typeof ArrayBuffer=="function",li=(t,e)=>{if(typeof t!="string")return{type:"message",data:Xs(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:ic(t.substring(1),e)}:On[n]?t.length>1?{type:On[n],data:t.substring(1)}:{type:On[n]}:Fr},ic=(t,e)=>{if(rc){const n=nc(t);return Xs(n,e)}else return{base64:!0,data:t}},Xs=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},Zs=String.fromCharCode(30),sc=(t,e)=>{const n=t.length,r=new Array(n);let i=0;t.forEach((s,o)=>{ci(s,!1,c=>{r[o]=c,++i===n&&e(r.join(Zs))})})},oc=(t,e)=>{const n=t.split(Zs),r=[];for(let i=0;i<n.length;i++){const s=li(n[i],e);if(r.push(s),s.type==="error")break}return r};function ac(){return new TransformStream({transform(t,e){tc(t,n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,r)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(r))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(n)})}})}let Er;function Tn(t){return t.reduce((e,n)=>e+n.length,0)}function Nn(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let r=0;for(let i=0;i<e;i++)n[i]=t[0][r++],r===t[0].length&&(t.shift(),r=0);return t.length&&r<t[0].length&&(t[0]=t[0].slice(r)),n}function cc(t,e){Er||(Er=new TextDecoder);const n=[];let r=0,i=-1,s=!1;return new TransformStream({transform(o,c){for(n.push(o);;){if(r===0){if(Tn(n)<1)break;const u=Nn(n,1);s=(u[0]&128)===128,i=u[0]&127,i<126?r=3:i===126?r=1:r=2}else if(r===1){if(Tn(n)<2)break;const u=Nn(n,2);i=new DataView(u.buffer,u.byteOffset,u.length).getUint16(0),r=3}else if(r===2){if(Tn(n)<8)break;const u=Nn(n,8),b=new DataView(u.buffer,u.byteOffset,u.length),v=b.getUint32(0);if(v>Math.pow(2,53-32)-1){c.enqueue(Fr);break}i=v*Math.pow(2,32)+b.getUint32(4),r=3}else{if(Tn(n)<i)break;const u=Nn(n,i);c.enqueue(li(s?u:Er.decode(u),e)),r=0}if(i===0||i>t){c.enqueue(Fr);break}}}})}const eo=4;function T(t){if(t)return lc(t)}function lc(t){for(var e in T.prototype)t[e]=T.prototype[e];return t}T.prototype.on=T.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};T.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};T.prototype.off=T.prototype.removeListener=T.prototype.removeAllListeners=T.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===e||r.fn===e){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+t],this};T.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,e)}return this};T.prototype.emitReserved=T.prototype.emit;T.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};T.prototype.hasListeners=function(t){return!!this.listeners(t).length};const sr=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0))(),V=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),dc="arraybuffer";function to(t,...e){return e.reduce((n,r)=>(t.hasOwnProperty(r)&&(n[r]=t[r]),n),{})}const uc=V.setTimeout,fc=V.clearTimeout;function or(t,e){e.useNativeTimers?(t.setTimeoutFn=uc.bind(V),t.clearTimeoutFn=fc.bind(V)):(t.setTimeoutFn=V.setTimeout.bind(V),t.clearTimeoutFn=V.clearTimeout.bind(V))}const hc=1.33;function pc(t){return typeof t=="string"?mc(t):Math.ceil((t.byteLength||t.size)*hc)}function mc(t){let e=0,n=0;for(let r=0,i=t.length;r<i;r++)e=t.charCodeAt(r),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(r++,n+=4);return n}function no(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function gc(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function bc(t){let e={},n=t.split("&");for(let r=0,i=n.length;r<i;r++){let s=n[r].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class yc extends Error{constructor(e,n,r){super(e),this.description=n,this.context=r,this.type="TransportError"}}class di extends T{constructor(e){super(),this.writable=!1,or(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,r){return super.emitReserved("error",new yc(e,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=li(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=gc(e);return n.length?"?"+n:""}}class kc extends di{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};oc(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,sc(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=no()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let ro=!1;try{ro=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const vc=ro;function Sc(){}class wc extends kc{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let r=location.port;r||(r=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,n){const r=this.request({method:"POST",data:e});r.on("success",n),r.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=e}}class ae extends T{constructor(e,n,r){super(),this.createRequest=e,or(this,r),this._opts=r,this._method=r.method||"GET",this._uri=n,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const n=to(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(n);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var i;r.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=ae.requestsCount++,ae.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Sc,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete ae.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}ae.requestsCount=0;ae.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",vs);else if(typeof addEventListener=="function"){const t="onpagehide"in V?"pagehide":"unload";addEventListener(t,vs,!1)}}function vs(){for(let t in ae.requests)ae.requests.hasOwnProperty(t)&&ae.requests[t].abort()}const _c=function(){const t=io({xdomain:!1});return t&&t.responseType!==null}();class Ac extends wc{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=_c&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new ae(io,this.uri(),e)}}function io(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||vc))return new XMLHttpRequest}catch{}if(!e)try{return new V[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const so=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Lc extends di{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,r=so?{}:to(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;ci(r,this.supportsBinary,s=>{try{this.doWrite(r,s)}catch{}i&&sr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=no()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const $r=V.WebSocket||V.MozWebSocket;class Ec extends Lc{createSocket(e,n,r){return so?new $r(e,n,r):n?new $r(e,n):new $r(e)}doWrite(e,n){this.ws.send(n)}}class $c extends di{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=cc(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(n).getReader(),i=ac();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const s=()=>{r.read().then(({done:c,value:u})=>{c||(this.onPacket(u),s())}).catch(c=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;this._writer.write(r).then(()=>{i&&sr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Rc={websocket:Ec,webtransport:$c,polling:Ac},Dc=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Mc=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Pr(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),r=t.indexOf("]");n!=-1&&r!=-1&&(t=t.substring(0,n)+t.substring(n,r).replace(/:/g,";")+t.substring(r,t.length));let i=Dc.exec(t||""),s={},o=14;for(;o--;)s[Mc[o]]=i[o]||"";return n!=-1&&r!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=Tc(s,s.path),s.queryKey=Nc(s,s.query),s}function Tc(t,e){const n=/\/{2,9}/g,r=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function Nc(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,s){i&&(n[i]=s)}),n}const Gr=typeof addEventListener=="function"&&typeof removeEventListener=="function",qn=[];Gr&&addEventListener("offline",()=>{qn.forEach(t=>t())},!1);class Be extends T{constructor(e,n){if(super(),this.binaryType=dc,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const r=Pr(e);n.hostname=r.host,n.secure=r.protocol==="https"||r.protocol==="wss",n.port=r.port,r.query&&(n.query=r.query)}else n.host&&(n.hostname=Pr(n.host).host);or(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(r=>{const i=r.prototype.name;this.transports.push(i),this._transportsByName[i]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=bc(this.opts.query)),Gr&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},qn.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=eo,n.transport=e,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Be.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",Be.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(n+=pc(i)),r>0&&n>this._maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,sr(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,r){return this._sendPacket("message",e,n,r),this}send(e,n,r){return this._sendPacket("message",e,n,r),this}_sendPacket(e,n,r,i){if(typeof n=="function"&&(i=n,n=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const s={type:e,data:n,options:r};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(Be.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Gr&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=qn.indexOf(this._offlineEventListener);r!==-1&&qn.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}}Be.protocol=eo;class Bc extends Be{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let n=this.createTransport(e),r=!1;Be.priorWebsocketSuccess=!1;const i=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",m=>{if(!r)if(m.type==="pong"&&m.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;Be.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(v(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const y=new Error("probe error");y.transport=n.name,this.emitReserved("upgradeError",y)}}))};function s(){r||(r=!0,v(),n.close(),n=null)}const o=m=>{const y=new Error("probe error: "+m);y.transport=n.name,s(),this.emitReserved("upgradeError",y)};function c(){o("transport closed")}function u(){o("socket closed")}function b(m){n&&m.name!==n.name&&s()}const v=()=>{n.removeListener("open",i),n.removeListener("error",o),n.removeListener("close",c),this.off("close",u),this.off("upgrading",b)};n.once("open",i),n.once("error",o),n.once("close",c),this.once("close",u),this.once("upgrading",b),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const n=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&n.push(e[r]);return n}}class Cc extends Bc{constructor(e,n={}){const r=typeof e=="object"?e:n;(!r.transports||r.transports&&typeof r.transports[0]=="string")&&(r.transports=(r.transports||["polling","websocket","webtransport"]).map(i=>Rc[i]).filter(i=>!!i)),super(e,r)}}function Ic(t,e="",n){let r=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),r=Pr(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const s=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+s+":"+r.port+e,r.href=r.protocol+"://"+s+(n&&n.port===r.port?"":":"+r.port),r}const Oc=typeof ArrayBuffer=="function",qc=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,oo=Object.prototype.toString,xc=typeof Blob=="function"||typeof Blob<"u"&&oo.call(Blob)==="[object BlobConstructor]",Fc=typeof File=="function"||typeof File<"u"&&oo.call(File)==="[object FileConstructor]";function ui(t){return Oc&&(t instanceof ArrayBuffer||qc(t))||xc&&t instanceof Blob||Fc&&t instanceof File}function xn(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,r=t.length;n<r;n++)if(xn(t[n]))return!0;return!1}if(ui(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return xn(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&xn(t[n]))return!0;return!1}function Pc(t){const e=[],n=t.data,r=t;return r.data=Ur(n,e),r.attachments=e.length,{packet:r,buffers:e}}function Ur(t,e){if(!t)return t;if(ui(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let r=0;r<t.length;r++)n[r]=Ur(t[r],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=Ur(t[r],e));return n}return t}function Gc(t,e){return t.data=Vr(t.data,e),delete t.attachments,t}function Vr(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=Vr(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=Vr(t[n],e));return t}const ao=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Uc=5;var S;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(S||(S={}));class Vc{constructor(e){this.replacer=e}encode(e){return(e.type===S.EVENT||e.type===S.ACK)&&xn(e)?this.encodeAsBinary({type:e.type===S.EVENT?S.BINARY_EVENT:S.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===S.BINARY_EVENT||e.type===S.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=Pc(e),r=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(r),i}}class fi extends T{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const r=n.type===S.BINARY_EVENT;r||n.type===S.BINARY_ACK?(n.type=r?S.EVENT:S.ACK,this.reconstructor=new Hc(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(ui(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const r={type:Number(e.charAt(0))};if(S[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===S.BINARY_EVENT||r.type===S.BINARY_ACK){const s=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(s,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");const c=Number(o);if(!co(c)||c<0)throw new Error("Illegal attachments");if(c>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=c}if(e.charAt(n+1)==="/"){const s=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););r.nsp=e.substring(s,n)}else r.nsp="/";const i=e.charAt(n+1);if(i!==""&&Number(i)==i){const s=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}r.id=Number(e.substring(s,n+1))}if(e.charAt(++n)){const s=this.tryParse(e.substr(n));if(fi.isPayloadValid(r.type,s))r.data=s;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case S.CONNECT:return Wn(n);case S.DISCONNECT:return n===void 0;case S.CONNECT_ERROR:return typeof n=="string"||Wn(n);case S.EVENT:case S.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&ao.indexOf(n[0])===-1);case S.ACK:case S.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Hc{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=Gc(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Wc(t){return typeof t=="string"}const co=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function jc(t){return t===void 0||co(t)}function Wn(t){return Object.prototype.toString.call(t)==="[object Object]"}function zc(t,e){switch(t){case S.CONNECT:return e===void 0||Wn(e);case S.DISCONNECT:return e===void 0;case S.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&ao.indexOf(e[0])===-1);case S.ACK:return Array.isArray(e);case S.CONNECT_ERROR:return typeof e=="string"||Wn(e);default:return!1}}function Yc(t){return Wc(t.nsp)&&jc(t.id)&&zc(t.type,t.data)}const Kc=Object.freeze(Object.defineProperty({__proto__:null,protocol:Uc,get PacketType(){return S},Encoder:Vc,Decoder:fi,isPacketValid:Yc},Symbol.toStringTag,{value:"Module"}));function Y(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const Jc=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class lo extends T{constructor(e,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Y(e,"open",this.onopen.bind(this)),Y(e,"packet",this.onpacket.bind(this)),Y(e,"error",this.onerror.bind(this)),Y(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var r,i,s;if(Jc.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const o={type:S.EVENT,data:n};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const v=this.ids++,m=n.pop();this._registerAckCallback(v,m),o.id=v}const c=(i=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||i===void 0?void 0:i.writable,u=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!c||(u?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,n){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[e]=n;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let c=0;c<this.sendBuffer.length;c++)this.sendBuffer[c].id===e&&this.sendBuffer.splice(c,1);n.call(this,new Error("operation has timed out"))},i),o=(...c)=>{this.io.clearTimeoutFn(s),n.apply(this,c)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...n){return new Promise((r,i)=>{const s=(o,c)=>o?i(o):r(c);s.withError=!0,n.push(s),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>(this._queue[0],i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(i)):(this._queue.shift(),n&&n(null,...s)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:S.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case S.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case S.EVENT:case S.BINARY_EVENT:this.onevent(e);break;case S.ACK:case S.BINARY_ACK:this.onack(e);break;case S.DISCONNECT:this.ondisconnect();break;case S.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let r=!1;return function(...i){r||(r=!0,n.packet({type:S.ACK,id:e,data:i}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:S.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,e.data)}}}function Ot(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}Ot.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-n:t+n}return Math.min(t,this.max)|0};Ot.prototype.reset=function(){this.attempts=0};Ot.prototype.setMin=function(t){this.ms=t};Ot.prototype.setMax=function(t){this.max=t};Ot.prototype.setJitter=function(t){this.jitter=t};class Hr extends T{constructor(e,n){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,or(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new Ot({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const i=n.parser||Kc;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Cc(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=Y(n,"open",function(){r.onopen(),e&&e()}),s=c=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",c),e?e(c):this.maybeReconnectOnOpen()},o=Y(n,"error",s);if(this._timeout!==!1){const c=this._timeout,u=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),n.close()},c);this.opts.autoUnref&&u.unref(),this.subs.push(()=>{this.clearTimeoutFn(u)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Y(e,"ping",this.onping.bind(this)),Y(e,"data",this.ondata.bind(this)),Y(e,"error",this.onerror.bind(this)),Y(e,"close",this.onclose.bind(this)),Y(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){sr(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new lo(this,e,n),this.nsps[e]=r),r}_destroy(e){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let r=0;r<n.length;r++)this.engine.write(n[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const en={};function Fn(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=Ic(t,e.path||"/socket.io"),r=n.source,i=n.id,s=n.path,o=en[i]&&s in en[i].nsps,c=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let u;return c?u=new Hr(r,e):(en[i]||(en[i]=new Hr(r,e)),u=en[i]),n.query&&!e.query&&(e.query=n.queryKey),u.socket(n.path,e)}Object.assign(Fn,{Manager:Hr,Socket:lo,io:Fn,connect:Fn});window.GUILDSYNC_WEB=!0;const hi="guildsync-web-session";function uo(){try{return JSON.parse(localStorage.getItem(hi)||"{}")||{}}catch{return{}}}function Qc(t){localStorage.setItem(hi,JSON.stringify(t||{}))}function pi(){localStorage.removeItem(hi)}function Ss(t,e){let n=0,r=!1;try{const i=JSON.parse(atob(t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/")));n=Number(i.exp)*1e3,r=Boolean(i.jti&&i.sub&&!i.exp)}catch{}return n>Date.now()||r?{...e,token:t,logged_in:!0,allowed:!0,status_message:"Reconnecting to GuildSync. Your login is saved."}:(pi(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:"Session expired. Please log in again."})}async function Xc(){return!0}async function fo(){return!0}async function Zc(){return!0}async function el(){return!0}async function tl(){return!0}async function nl(){return window.location.assign("/api/auth/discord/web-login"),!0}async function rl(){var s,o,c,u,b,v,m,y;const t=uo(),e=t.token||localStorage.getItem("guildsync-web-token")||"";if(!e)return{logged_in:!1,allowed:!1,status_message:"Not logged in."};let n;try{n=await fetch("/api/auth/session",{headers:{Authorization:`Bearer ${e}`}})}catch{return Ss(e,t)}if(n.status>=500)return Ss(e,t);const r=await n.json().catch(()=>({}));if(!n.ok||r.ok===!1)return pi(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:r.message||"Session expired. Please log in again."};const i={logged_in:!0,allowed:!0,token:e,user:r.user,discord_user_id:((s=r.user)==null?void 0:s.discord_user_id)||"",username:((o=r.user)==null?void 0:o.username)||"",global_name:((c=r.user)==null?void 0:c.global_name)||"",display_name:((u=r.user)==null?void 0:u.display_name)||((b=r.user)==null?void 0:b.global_name)||((v=r.user)==null?void 0:v.username)||"",avatar_url:((m=r.user)==null?void 0:m.avatar_url)||"",role:((y=r.user)==null?void 0:y.role)||"user",status_message:"Logged in."};return Qc(i),i}async function il(){const t=uo().token||localStorage.getItem("guildsync-web-token");if(t){const e=await fetch("/api/auth/logout",{method:"POST",headers:{Authorization:`Bearer ${t}`}});if(!e.ok&&e.status!==401)throw new Error("Could not log out on the server. Please try again.")}return pi(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:"Logged out."}}async function sl(){return ar()}async function ol(){return ar()}async function ar(){return{watching:!1,directory:"Web upload mode",files:[{key:"banking",fileName:"GuildSyncBanking.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"},{key:"roster",fileName:"GuildSyncRoster.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"}]}}async function al(){return ar()}async function cl(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function ll(){return{ok:!0}}async function dl(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function ul(){return{ok:!0}}async function fl(t){return t&&window.open(t,"_blank","noopener,noreferrer"),!0}async function hl(){return{running:!1,message:"ESO process detection is only available in the desktop client."}}async function pl(){throw new Error("Deposit mail sending is disabled in the web client. Use the GuildSync desktop client for ESO mail queue writes.")}async function ml(){return{ok:!0,acknowledgements:[],records:[]}}async function gl(){return{ok:!0}}async function bl(){return{ok:!0}}async function yl(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSyncApplications.lua onto the GuildSync web window.")}async function kl(){return{ok:!0}}const Bn=new Map;function tn(t,e){return Bn.has(t)||Bn.set(t,new Set),Bn.get(t).add(e),()=>{var n;return(n=Bn.get(t))==null?void 0:n.delete(e)}}const cr="1.2.7",ho={windows:{label:"Windows detected",shortLabel:"Windows"},macos:{label:"macOS detected",shortLabel:"macOS"},linux:{label:"Linux detected",shortLabel:"Linux"}},po="guildsync-web-savedvars-upload-banner-dismissed",vl=new Map([["GuildSyncBanking.lua","banking"],["GuildSyncRoster.lua","roster"],["GuildSyncApplications.lua","applications"]]),Sl=30*60*1e3,mo="guildsync-pending-banking-uploads",go="guildsync-pending-deposit-mail",wl=5e3,_l=30*1e3,bo="guildsync-pending-roster-uploads",yo="guildsync-pending-applications-uploads",p=60*1e3,mi=7e3,ko=1400,vo=2400,Al=4e3,Ll=38,So=document.querySelector("#app");let ws=null,nn=null,_s=!1,Sn=!1,Pn=null,Rr=!1,Dr=!1,Mr=!1,Ce=null,ge={running:!1,message:""},ht=null,pt=null,Gn=!1,mt=null,Tr=!1,ft=0,Nr=!1,Ue=new Map,Ke=new Map,C="",ot=!1,at=!1,ln=[],g={logged_in:!1,allowed:!1,status_message:""},Ee={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},me=null,Wr="",d=null,P=[],lr=[],dr=null,hn=!1,jn=!1,zn="",gt=new Set,bt=new Set,pn="username",Xe="asc",jr=null,zr=null,j=[],Yn=null,Ve=!1,As=!1,Kn="",Yr=null,Kr=null,Ze=new Set,yt=new Set,ke="",F="",N=-1,Lt=!1,mn="",H=[],He="",Ie=[],Oe=!1,Se="",Br=null,K=-1,qt=!1,gn="",qe=[],Jn=!1,et=!1,xe="",Et="",$t=!1,$e="",W=[],Rt="",ct="",Fe=[],Pe=!1,we="",Ls=null,Ye=0;const El=650;let J=-1,xt=!1,Ft=[],Re=!1,tt="",Pt=!1,bn=[],De=!1,nt="",Gt=!1,gi=[],Me=!1,rt="",Ut="",Te="",kt="",Ne="",L=[],q=!1,x="",ut=!1,ur="",Je="",wn="",_n="",ve=-1,ze=!1,A=null,it=[],Dt=!1,Ae="",An="",oe=-1,Vt=!1,bi=null,dn=null;const yi=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let G=[],X=null,Qe=null,Mt=[],vt="",Es=!1,R="biweekly",wo=null,We=!1,st=!1,ne="biweekly",Ht=!1,Tt=!1,be="",ye=null,B={targetType:"other",note:"",tickets:""},Wt=!1,lt="",O=[],ee=[],ce="",le=!1,de="",St=null,Q=-1,_e=!1,Qn=!1,U="",E={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},jt="",I=-1,Z=!1,Jr={biweekly:0,monthly:0};const $l=1780786800,je=14*24*60*60,Xn=60*60,Zn=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let $=Zn[0].id;function Rl(){So.innerHTML=`
    <main class="splash-screen">
      <img src="${Xa}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await Xc(),await Dl(),_o(),Tl(),fn(),await At()},5e3)}async function Dl(){try{g=await rl()}catch(t){g={logged_in:!1,allowed:!1,status_message:""},h("session-error",k(t),{ttlMs:p})}}function _o(){So.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${Za}" alt="" class="title-icon" />
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
            <img src="${ec}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${a(cr)}</div>
            </div>
          </div>
          <div class="compact-header-actions">
            ${Lo()}
            <div id="discordArea" class="discord-area"></div>
          </div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${Ao()}
        </nav>

        <div id="webSavedVarsUploadBannerHost">
          ${fd()}
        </div>

        <section id="guildSyncTabContent" class="guildsync-tab-content${Bo()?" web-upload-banner-dismissed":""}" aria-live="polite">
          ${$o()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await el()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await fo(),await tl()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await Zc()}),Hn(),hd(),Ro(),Pa(),ba(),Ra(),Co(),ga(),oa(),aa(),ca(),la(),Yo(),ya(),Fl(),Ge(),It(),_s||(window.addEventListener("resize",()=>{Qa(),Ka()}),Eh(),_s=!0)}function Ao(){return Zn.map(t=>{const e=t.id===$,n=Bl(t.id,e),r=n?Eo():0,i=n?`Deposit mail needs attention: ${r} item${r===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${n?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${f(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${f(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${Cl(t.icon)}</span>
          <span class="guildsync-tab-label">${a(t.label)}</span>
          ${n?`<span class="guildsync-tab-mail-badge" aria-label="${f(i)}">${r>99?"99+":a(String(r))}</span>`:""}
        </button>
      `}).join("")}function Ml(){const t=kr(),e=ho[t]||{label:"Desktop client",shortLabel:"Desktop"};return me&&me.platform===t?{available:!0,label:`${me.label||e.shortLabel} detected`,shortLabel:me.label||e.shortLabel,version:me.version,fileName:me.fileName,href:me.url}:{available:!1,label:e.label,shortLabel:e.shortLabel,fileName:"",href:"",error:Wr}}async function Tl(){const t=kr();Wr="";try{const e=await fetch(`/api/client-download?platform=${encodeURIComponent(t)}`,{headers:{Accept:"application/json"}});let n=null;try{n=await e.json()}catch{n=null}if(!e.ok)throw new Error((n==null?void 0:n.error)||`Download lookup failed with HTTP ${e.status}.`);const r=n.download&&typeof n.download=="object"?n.download:{},i=String(n.download_file_name||r.file_name||"").trim(),s=String(n.download_url||r.url||"").trim();if(!n.ok||!i||!s)throw new Error(n.error||"Download lookup did not return a usable file.");me={platform:String(r.platform||n.platform||t).trim(),label:String(r.label||"").trim(),version:String(r.version||"").trim(),fileName:i,url:s}}catch(e){me=null,Wr=(e==null?void 0:e.message)||"No GuildSync desktop client download is currently available.";const n=(ho[t]||{}).shortLabel||"Desktop";h("desktop-client-download-unavailable",`No ${n} client is currently available for download.`,{tone:"warning",ttl:mi}),console.warn("GuildSync desktop client download lookup failed.",e)}Nl()}function Nl(){const t=document.querySelector(".compact-header-actions .desktop-client-download-button");!t||(t.outerHTML=Lo())}function Lo(){const t=Ml();if(!t.available){const e=t.error||"Looking for latest download...";return`
      <button
        class="desktop-client-download-button"
        type="button"
        disabled
        title="${f(e)}"
        aria-label="${f(e)}"
      >
        <span class="desktop-client-download-icon" aria-hidden="true">\u2B07</span>
        <span class="desktop-client-download-copy">
          <span class="desktop-client-download-title">Download Desktop Client</span>
          <span class="desktop-client-download-subtitle">${a(t.label)} \xB7 ${a(e)}</span>
        </span>
        <span class="desktop-client-download-caret" aria-hidden="true">\u25BE</span>
      </button>
    `}return`
    <a
      class="desktop-client-download-button"
      href="${f(t.href)}"
      download="${f(t.fileName)}"
      title="Download ${f(t.fileName)}"
      aria-label="Download GuildSync desktop client for ${f(t.shortLabel)}"
    >
      <span class="desktop-client-download-icon" aria-hidden="true">\u2B07</span>
      <span class="desktop-client-download-copy">
        <span class="desktop-client-download-title">Download Desktop Client</span>
        <span class="desktop-client-download-subtitle">${a(t.label)} \xB7 ${a(t.version)} \xB7 ZIP</span>
      </span>
      <span class="desktop-client-download-caret" aria-hidden="true">\u25BE</span>
    </a>
  `}function Eo(){return _()?mr()+Rn()+Ea():0}function Bl(t,e){return t!=="more"||e?!1:Eo()>0}function Cl(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function $o(){const t=Zn.find(n=>n.id===$)||Zn[0];let e="";return t.id==="discord-members"?e=Gl():t.id==="eso-members"?e=Ul():t.id==="more"?e=Yu():t.id==="settings"?e=pd():e=`
      <div class="guildsync-tab-panel" data-active-tab="${f(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${a(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${_e?wu():""}
    ${Ht?cf():""}
    ${Wt?Ku():""}
    ${ze?hu():""}
    ${xt?Sd():""}
    ${Pt?$d():""}
    ${Gt?Td():""}
    ${ut?Vd():""}
    ${Vt?xl():""}
  `}function Il(){return Vt||Lt||$t||_e||Ht||Wt||ze||qt||xt||Pt||Gt||ut||st}function Ol(){return Vt?!1:ut?(ni(),!0):Gt?(ti(),!0):Pt?(ei(),!0):xt?(Zr(),!0):ze?(Bt(),!0):qt?(si(),!0):Ht?(nr(),!0):Wt?(ff(),l(),!0):_e?(_e=!1,l(),!0):Lt?(Lt=!1,l(),!0):$t?($t=!1,l(),!0):st?(st=!1,l(),!0):!1}function ql(t){t.key==="Escape"&&Ol()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",ql,!0),window.guildSyncGlobalModalEscapeAttached=!0);function ki(t={}){return new Promise(e=>{dn&&dn(!1),Vt=!0,bi={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},dn=e,l()})}function er(t=!1){const e=dn;dn=null,Vt=!1,bi=null,e&&e(t===!0),l()}function xl(){const t=bi||{};return`
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
  `}function $s(t){var r,i,s,o;const e=(i=(r=t.target).closest)==null?void 0:i.call(r,"#cancelGuildSyncConfirmButton"),n=(o=(s=t.target).closest)==null?void 0:o.call(s,"#acceptGuildSyncConfirmButton");if(!(!e&&!n)){if(t.preventDefault(),t.stopPropagation(),e){er(!1);return}n&&er(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",$s,!0),document.addEventListener("pointerup",$s,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function Fl(){if(!Vt)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=r=>{r.preventDefault(),r.stopPropagation(),er(!1)}),e&&(e.onclick=r=>{r.preventDefault(),r.stopPropagation(),er(!0)});const n=document.querySelector(".guildsync-confirm-overlay");n&&(n.onclick=r=>{r.target===n&&(r.preventDefault(),r.stopPropagation())})}function Ro(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(Il())return;const e=t.dataset.tabId;!e||e===$||($=e,l())})})}function Pl(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function l(t={}){ut&&Pl();const e=document.querySelector(".guildsync-tabs"),n=document.querySelector("#guildSyncTabContent"),r=n?Array.from(n.querySelectorAll("*")).map((s,o)=>({index:o,top:s.scrollTop,left:s.scrollLeft})).filter(({top:s,left:o})=>s||o):[],i={x:window.scrollX,y:window.scrollY};if(e&&(e.innerHTML=Ao()),n){n.innerHTML=$o();const s=n.querySelectorAll("*");for(const{index:o,top:c,left:u}of r)s[o]&&(s[o].scrollTop=c,s[o].scrollLeft=u);window.scrollTo(i.x,i.y)}Ro(),Pa(),ba(),Ra(),Co(),ga(),oa(),aa(),ca(),la(),Yo(),ya(),t.restoreDiscordSearchFocus&&Qf(),t.restoreRosterSearchFocus&&Xf(),$==="discord-members"&&(d==null?void 0:d.connected)&&P.length===0&&!hn&&Ii({silent:!0}),$==="eso-members"&&(d==null?void 0:d.connected)&&j.length===0&&!Ve&&!As&&(As=!0,zt({silent:!0})),($==="more"&&G.length===0||$==="settings"&&!X&&!Es)&&(d==null?void 0:d.connected)&&!We&&(Es=!0,se({silent:!0})),($==="discord-members"||$==="eso-members"||$==="settings")&&(d==null?void 0:d.connected)&&L.length===0&&!q&&$n({silent:!0})}function Gl(){const t=Yf(),e=Zf(),n=Array.from(gt),r=Array.from(bt);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${a(Ua(dr))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${hn||jn?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${jn?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${f(zn)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!gt.has(i)).map(i=>`<option value="${f(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All roles</span>':n.map(i=>rh(i)).join("")}
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
              ${yi.filter(i=>!bt.has(i.id)).map(i=>`<option value="${f(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>Do("discord",i)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${Cn("username","Username")}
                ${Cn("global_name","Global Name")}
                ${Cn("server_nickname","Server Nickname")}
                ${Cn("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>eh(i)).join(""):th()}
            </tbody>
          </table>
        </div>
      </div>
      ${$t?sd():""}
    </div>
  `}function Ul(){const t=Xl(),e=td(),n=Array.from(Ze),r=Array.from(yt);return`
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
          <span class="discord-last-refresh">Last Refresh: ${a(Iu(Yn))}</span>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${Ve?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Ve?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${f(Kn)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!Ze.has(i)).map(i=>`<option value="${f(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All ranks</span>':n.map(i=>nd(i)).join("")}
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
              ${yi.filter(i=>!yt.has(i.id)).map(i=>`<option value="${f(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>Do("roster",i)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${rn("account_name","Account Name")}
                ${rn("rank","Rank")}
                ${rn("joined","Joined")}
                ${rn("notes","Notes","roster-notes-header")}
                ${rn("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map((i,s)=>Vl(i,s)).join(""):Kl()}
            </tbody>
          </table>
        </div>
      </div>
      ${Lt?ld():""}
      ${qt?Wl():""}
    </div>
  `}function Vl(t,e=-1){const n=Jl(t.rank||""),r=n?` style="color: ${n};"`:"";return`
    <tr class="eso-roster-row${e===N?" roster-search-active-row":""}"${r} data-roster-row-index="${f(String(e))}" data-eso-account-name="${f(t.account_name||"")}">
      <td>${a(t.account_name||"")}</td>
      <td>${vi(t.rank||"")}</td>
      <td>${a(pr(t.joined))}</td>
      <td class="roster-notes-cell">${Hl(t)}</td>
      <td class="member-link-action-cell">${ea({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function Hl(t){const e=String((t==null?void 0:t.account_name)||"").trim(),n=Number((t==null?void 0:t.note_count)||0),r=n>0,i=r?`${n} roster note${n===1?"":"s"} for ${e}`:`No roster notes for ${e}`;return`
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
  `}function Wl(){const t=gn||"",e=Boolean((g==null?void 0:g.logged_in)&&(g==null?void 0:g.allowed));return`
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
          ${xe?`<div class="discord-data-error">${a(xe)}</div>`:""}
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
                ${jl()}
              </tbody>
            </table>
          </div>
          ${e?zl():'<div class="roster-history-muted">Log in to add a new note.</div>'}
        </div>
      </div>
    </div>
  `}function jl(){return Jn?'<tr><td class="bank-empty-row" colspan="3">Loading notes...</td></tr>':!Array.isArray(qe)||qe.length===0?'<tr><td class="bank-empty-row" colspan="3">No notes recorded for this member.</td></tr>':qe.map(t=>`
      <tr>
        <td class="roster-notes-when-cell">${a(Yl(t.timestamp))}</td>
        <td class="roster-notes-officer-cell">${a(t.officer||"")}</td>
        <td class="roster-notes-note-cell">${a(t.note||"")}</td>
      </tr>
    `).join("")}function zl(){return`
    <div class="roster-notes-form">
      <label for="rosterNotesNewNote">Add Note</label>
      <textarea
        id="rosterNotesNewNote"
        class="roster-notes-textarea"
        rows="4"
        placeholder="Enter a new roster note..."
        ${et?"disabled":""}
      >${a(Et)}</textarea>
      <button id="saveRosterNoteButton" class="refresh-discord-button" type="button" ${et?"disabled":""}>
        ${et?"Saving...":"Save Note"}
      </button>
    </div>
  `}function Yl(t){const e=Number(t||0);return!Number.isFinite(e)||e<=0?"":new Date(e*1e3).toLocaleString()}function Kl(){return`
    <tr>
      <td class="bank-empty-row" colspan="5">${a(Ve?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function Jl(t){String(t||"").trim();const e=ih(t);return yr(e==null?void 0:e.role_color)}function vi(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${a(e)}</span>`}function Ql(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":vi(e)}function Xl(){const t=Kn.trim().toLowerCase(),e=j.filter(n=>{const r=String(n.rank||"").trim();if(Ze.size>0&&!Ze.has(r)||!No(yt,Qr(n)))return!1;if(!t)return!0;const i=pr(n.joined),s=Ei(n.joined),o=Qr(n),c=To(n.account_name||"");return[n.account_name,r,i,s,n.joined,o,c].map(b=>String(b||"").toLowerCase()).join(" ").includes(t)});return Zl(e)}function Zl(t){if(!ke||!F)return t;const e=F==="desc"?-1:1;return[...t].sort((n,r)=>{const i=Rs(n,ke),s=Rs(r,ke),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:String(n.account_name||"").localeCompare(String(r.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function Rs(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const n=Number(t.joined||0);return Number.isFinite(n)&&n>0?String(n).padStart(16,"0"):""}if(e==="notes")return String(Number(t.note_count||0)).padStart(8,"0");if(e==="linked"){const n=Qr(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[n]||"9"} ${n} ${To(t.account_name||"")}`}return String(t.account_name||"")}function ed(t){const n=new Set(["account_name","rank","joined","notes","linked"]).has(t)?t:"account_name";ke!==n?(ke=n,F="asc"):F==="asc"?F="desc":F==="desc"?(ke="",F=""):(ke=n,F="asc"),N=-1,l()}function rn(t,e,n=""){const r=ke===t&&Boolean(F),i=r?F==="asc"?"ascending":"descending":"none",s=r?F==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${f(n)}" aria-sort="${f(i)}">
      <button
        class="discord-sort-header roster-sort-header${r?" active":""}"
        type="button"
        data-roster-sort-column="${f(t)}"
        title="Sort ${f(e)}${r&&F==="asc"?" descending":r&&F==="desc"?" not sorted":" ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function td(){return Array.from(new Set(j.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function nd(t){const e=xi(t),n=yr(e==null?void 0:e.role_color),r=Pi(n),i=Fi(n,r);return`
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
  `}function rd(t){const e=yi.find(n=>n.id===t);return e?e.label:t}function Do(t,e){const n=t==="roster"?"roster":"discord",r=rd(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${n}-link-status-filter="${f(e)}"
      title="Remove ${f(r)} link filter"
    >
      <span>${a(r)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Mo(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked"&&String(n.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function id(t){return Mo(hr(t==null?void 0:t.discord_id))}function Qr(t){return Mo(fr(t==null?void 0:t.account_name))}function To(t){const e=fr(t),n=Zo({mode:"eso-to-discord",esoAccountName:t}),r=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean),i=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="candidate").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean);return[n.label,n.title,r.join(" "),i.join(" ")].filter(Boolean).join(" ")}function No(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function sd(){return`
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
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${f($e)}" />
        </div>

        ${we?`<div class="discord-data-error">${a(we)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${od()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${ct?`: ${a(ct)}`:""}</div>
            ${ad()}
          </div>
        </div>
      </div>
    </div>
  `}function od(){return Pe&&W.length===0?'<div class="roster-history-muted">Searching...</div>':W.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${W.map((t,e)=>`
        <button class="roster-history-match${e===J||t.discord_id===Rt?" is-selected":""}" type="button" data-discord-history-id="${f(t.discord_id)}" data-discord-history-name="${f(Xr(t))}">
          <span>${a(Xr(t))}</span>
          <strong>${a(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===J?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function ad(){return Rt?Pe&&Fe.length===0?'<div class="roster-history-muted">Loading history...</div>':Fe.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${Fe.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${a(Ei(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${a(cd(t.event_type))}</td>
              <td>${a(t.old_value||"")}</td>
              <td>${a(t.new_value||"")}</td>
              <td>${a(t.initiator||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function Xr(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function cd(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function ld(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(mn)}" />
        </div>

        ${Se?`<div class="discord-data-error">${a(Se)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${dd()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${He?`: ${a(He)}`:""}</div>
            ${ud()}
          </div>
        </div>
      </div>
    </div>
  `}function dd(){return Oe&&H.length===0?'<div class="roster-history-muted">Searching...</div>':H.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${H.map((t,e)=>`
        <button class="roster-history-match${e===K||t.account_name===He?" is-selected":""}" type="button" data-roster-history-account="${f(t.account_name)}">
          <span>${a(t.account_name)}</span>
          <strong>${a(t.rank||"")}</strong>
          ${e===K?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function ud(){return He?Oe&&Ie.length===0?'<div class="roster-history-muted">Loading history...</div>':Ie.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${Ie.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${a(Ei(t.timestamp))}</td>
              <td>${a(t.event_type||"")}</td>
              <td>${Ql(t.rank)}</td>
              <td>${a(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function Ln(){return typeof window<"u"&&window.GUILDSYNC_WEB===!0}function Bo(){if(!Ln())return!0;try{return localStorage.getItem(po)==="1"}catch{return!1}}function fd(){return!Ln()||Bo()?"":`
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
  `}function hd(){const t=document.querySelector("#webSavedVarsUploadBannerDismissButton");!t||t.addEventListener("click",()=>{var e,n;try{localStorage.setItem(po,"1")}catch{}(e=document.querySelector("#webSavedVarsUploadBannerHost"))==null||e.remove(),(n=document.querySelector(".guildsync-tab-content"))==null||n.classList.add("web-upload-banner-dismissed")})}function pd(){return`
    <div class="guildsync-tab-panel reports-panel" data-active-tab="settings">
      <div class="discord-data-header reports-header">
        <div>
          <h2 class="discord-data-title">Reports & Admin</h2>
          <p class="discord-data-subtitle">Run GuildSync reports and administrative review tools. More options can be added here later.</p>
        </div>
      </div>

      <div class="reports-scroll-area">
        ${md()}
        <section class="reports-list" aria-label="Available reports">
          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Associates Promotion Eligible</h3>
              <p>Shows Associates who have been in the guild at least two weeks, have purchased at least one raffle ticket, and are linked to Discord. Also shows otherwise eligible Associates who still need a Discord link reviewed.</p>
            </div>
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${Re?"disabled":""}>
              ${Re?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${De?"disabled":""}>
              ${De?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${Me?"disabled":""}>
              ${Me?"Loading...":"Run"}
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
  `}function Co(){var t,e,n,r,i,s,o;$==="settings"&&((t=document.querySelector("#raffleBonusSettingsForm"))==null||t.addEventListener("submit",gd),(e=document.querySelector("#raffleBonusSettingsForm"))==null||e.addEventListener("input",c=>{Qe={raffle:vt,values:new Map(new FormData(c.currentTarget))}}),(n=document.querySelector("#bonusRafflePicker"))==null||n.addEventListener("change",c=>{vt=c.currentTarget.value,Qe=null,l()}),(r=document.querySelector("#runAssociateTicketReportButton"))==null||r.addEventListener("click",()=>qo()),(i=document.querySelector("#runDiscordRankAuditReportButton"))==null||i.addEventListener("click",()=>Ed()),(s=document.querySelector("#runDiscordLastSeenReportButton"))==null||s.addEventListener("click",()=>Md()),(o=document.querySelector("#runMemberLinksReportButton"))==null||o.addEventListener("click",()=>Pd()))}function md(){var s;if(!X)return"<p>Loading raffle bonus settings...</p>";const t=(Qe==null?void 0:Qe.raffle)===vt?Qe.values:null,e=Mt.find(o=>`${o.type}:${o.salesEnd}`===vt),n=e?{enabledByType:{...X.enabledByType,[e.type]:e.enabled},biweekly:e.type==="biweekly"?e.tiers:X.biweekly,monthly:e.type==="monthly"?e.tiers:X.monthly}:X,r=((s=g==null?void 0:g.user)==null?void 0:s.role)==="admin",i=(o,c)=>{var u,b;return`
    <fieldset class="raffle-bonus-tiers" ${r?"":"disabled"}>
      <legend>${c}</legend>
      <label><input name="${o}-enabled" type="checkbox" ${(t?t.has(`${o}-enabled`):(b=(u=n.enabledByType)==null?void 0:u[o])!=null?b:n.enabled)?"checked":""}> Enable bonus tickets</label>
      ${n[o].map((v,m)=>{var y,M;return`
        <div class="raffle-bonus-tier">
          <span>Period ${m+1}${m===n[o].length-1?" (final)":""}</span>
          <label>Hours <input name="${o}-${m}-hours" type="number" min="1" step="1" required value="${f(String(t&&(y=t.get(`${o}-${m}-hours`))!=null?y:v.hours))}"></label>
          <label>Bonus % <input name="${o}-${m}-percent" type="number" min="0" max="100" step="0.1" required value="${f(String(t&&(M=t.get(`${o}-${m}-percent`))!=null?M:v.percent))}"></label>
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
            ${Mt.map(o=>`<option value="${f(`${o.type}:${o.salesEnd}`)}" ${vt===`${o.type}:${o.salesEnd}`?"selected":""}>${a(o.label)}${o.enabled?" (Bonuses)":""}</option>`).join("")}
          </select>
        </label>
        <form id="raffleBonusSettingsForm">
          ${e?i(e.type,e.label):i("biweekly","Bi-Weekly Raffle")+i("monthly","50/50 Raffle")}
          ${r?'<button class="refresh-discord-button report-run-button" type="submit">Save Bonus Settings</button>':"<p>Admin access is required to change these settings.</p>"}
        </form>
      </div>
    </article>`}async function gd(t){t.preventDefault();const e=t.currentTarget,n=new FormData(e),r=Mt.find(o=>`${o.type}:${o.salesEnd}`===vt),i=o=>((r==null?void 0:r.type)===o?r.tiers:X[o]).map((c,u)=>({hours:Number(n.get(`${o}-${u}-hours`)),percent:Number(n.get(`${o}-${u}-percent`))})),s=r?{raffleType:r.type,salesEnd:r.salesEnd,enabled:n.has(`${r.type}-enabled`),tiers:i(r.type)}:{enabledByType:{biweekly:n.has("biweekly-enabled"),monthly:n.has("monthly-enabled")},biweekly:i("biweekly"),monthly:i("monthly")};try{const o=await w("guildsync:save-raffle-bonus-settings",s,3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||"Could not save raffle bonus settings.");X=o.bonusSettings,Qe=null,await se({silent:!0}),h("bonus-settings","Raffle bonus settings saved.",{ttlMs:p}),l()}catch(o){h("bonus-settings-error",k(o),{ttlMs:p})}}function Un(){return Ln()&&_()&&(d==null?void 0:d.connected)===!0}function Io(){if(!Ln())return null;let t=document.querySelector("#webSavedVarsFullScreenDropOverlay");return t||(t=document.createElement("div"),t.id="webSavedVarsFullScreenDropOverlay",t.className="web-savedvars-fullscreen-drop-overlay",t.setAttribute("aria-hidden","true"),t.innerHTML=`
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
  `,document.body.appendChild(t),t)}function Ds(){const t=Io();!t||(t.classList.add("is-visible"),t.setAttribute("aria-hidden","false"))}function Cr(){const t=document.querySelector("#webSavedVarsFullScreenDropOverlay");!t||(t.classList.remove("is-visible"),t.setAttribute("aria-hidden","true"))}function sn(t){var n;return Array.from(((n=t==null?void 0:t.dataTransfer)==null?void 0:n.types)||[]).includes("Files")}function bd(t){!(t!=null&&t.dataTransfer)||(t.dataTransfer.dropEffect=Un()?"copy":"none")}function Oo(t){const e=String(t||"").split(/[\\/]/).pop();return vl.get(e)||""}function yd(){if(!Ln())return;Io();const t=e=>{!sn(e)||(e.preventDefault(),e.stopPropagation(),bd(e))};document.addEventListener("dragenter",e=>{!sn(e)||(t(e),ft+=1,Un()&&Ds())},!0),document.addEventListener("dragover",e=>{t(e),sn(e)&&Un()&&Ds()},!0),document.addEventListener("dragleave",e=>{!sn(e)||(e.preventDefault(),e.stopPropagation(),ft=Math.max(0,ft-1),ft===0&&Cr())},!0),document.addEventListener("drop",async e=>{var r;if(!sn(e))return;if(t(e),ft=0,Cr(),!Un()){h("web-savedvars-drop-not-ready","SavedVariables drag/drop is only available while logged in and connected to the GuildSync server.",{ttlMs:p});return}const n=Array.from(((r=e.dataTransfer)==null?void 0:r.files)||[]);await kd(n)},!0),window.addEventListener("blur",()=>{ft=0,Cr()})}async function kd(t=[]){if(Nr){h("web-savedvars-drop-busy","A SavedVariables upload is already processing. Please wait for it to finish.",{ttlMs:p});return}const e=Array.from(t||[]).filter(Boolean);if(!e.length){h("web-savedvars-drop-empty","No file was dropped.",{ttlMs:p});return}const n=e.find(r=>!Oo(r.name));if(n){h("web-savedvars-drop-invalid",`Unsupported file: ${n.name}. Drop only GuildSyncBanking.lua, GuildSyncRoster.lua, or GuildSyncApplications.lua.`,{ttlMs:p});return}Nr=!0;try{for(const r of e)await vd(r)}finally{Nr=!1}}async function vd(t){const e=Oo(t.name);if(!e)throw new Error(`Unsupported file: ${t.name}`);const n=`web-savedvars-upload-${e}`,r=await t.text();if(!String(r||"").trim())throw new Error(`${t.name} is empty.`);h(n,`Uploading ${t.name}...`);try{const i=await w("guildsync:upload-savedvars-raw",{file_name:t.name,raw_lua_text:r,source:"web-drag-drop"},12e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||`${t.name} upload was rejected.`);e==="banking"?await se({silent:!0}):e==="roster"&&(await zt({silent:!0}),await $n({silent:!0})),h(n,i.message||`${t.name} uploaded and processed.`,{ttlMs:p})}catch(i){throw h(n,k(i),{ttlMs:p}),i}vr("version")}function qo(){xt=!0,tt="",l(),fa()}function Zr(){xt=!1,tt="",l()}function Sd(){const t=wd(),e=_d(),n=Ft.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${Re?"disabled":""}>${Re?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(n))} total row${n===1?"":"s"}</span>
        </div>

        ${tt?`<div class="discord-data-error">${a(tt)}</div>`:""}

        <div class="report-results-content">
          ${Re&&n===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!Re&&n===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${n>0?Ms("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${n>0?Ms("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${a(Po())}</textarea>
      </div>
    </div>
  `}function wd(){return Ft.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function _d(){return Ft.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function Ms(t,e,n,r){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${a(t)}</h4>
          <p>${a(e)}</p>
        </div>
        <span>${a(String(n.length))} row${n.length===1?"":"s"}</span>
      </div>
      ${n.length>0?Ad(n):`<div class="roster-history-muted report-section-empty">${a(r)}</div>`}
    </section>
  `}function Ad(t=Ft){return`
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
              <td>${vi(e.rank||"")}</td>
              <td>${a(pr(e.joined))}</td>
              <td>${a(te(e.purchased_tickets||0))}</td>
              <td class="associate-earliest-deposit-cell">${a(xo(e))}</td>
              <td>${a(Fo(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function xo(t){const e=String((t==null?void 0:t.earliest_deposit_summary)||"").trim();if(e)return e;const n=String((t==null?void 0:t.earliest_deposit_date)||"").trim(),r=String((t==null?void 0:t.earliest_deposit_raffle_period)||"").trim();return[n,r].filter(Boolean).join(" | ")}function Fo(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function Po(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Earliest Deposit / Raffle","Discord Link"]];for(const e of Ft){const n=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([n,e.account_name||"",e.rank||"",pr(e.joined),te(e.purchased_tickets||0),xo(e),Fo(e)])}return t.map(e=>e.map(gr).join("	")).join(`
`)}async function Ld(){const t=Po();if(await br(t)){h("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#associateTicketReportTsv");n&&(n.focus(),n.select()),h("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function Ed(){Pt=!0,nt="",l(),ua()}function ei(){Pt=!1,nt="",l()}function $d(){const t=bn.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${De?"disabled":""}>${De?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${nt?`<div class="discord-data-error">${a(nt)}</div>`:""}

        <div class="report-results-content">
          ${De&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!De&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?Rd(bn):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${a(Vo())}</textarea>
      </div>
    </div>
  `}function Rd(t=bn){return`
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
              <td data-label="Discord Member" class="discord-rank-audit-member-cell">${a(Go(e))}</td>
              <td data-label="Discord Rank Role" class="discord-rank-audit-discord-cell">${a(e.discord_rank||"No matching rank role")}</td>
              <td data-label="Linked ESO Account(s)" class="discord-rank-audit-eso-account-cell">${a(e.eso_accounts||"No linked ESO account")}</td>
              <td data-label="ESO Rank" class="discord-rank-audit-eso-rank-cell">${a(e.eso_rank||"None")}</td>
              <td data-label="Issue" class="discord-rank-audit-issue-cell">${a(Uo(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Go(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function Uo(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function Vo(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of bn)t.push([Go(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",Uo(e)]);return t.map(e=>e.map(gr).join("	")).join(`
`)}async function Dd(){const t=Vo();if(await br(t)){h("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#discordRankAuditReportTsv");n&&(n.focus(),n.select()),h("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function Md(){Gt=!0,rt="",Ut="",l(),da(),L.length===0&&!q&&$n({silent:!0})}function ti(){Gt=!1,rt="",Ut="",Te="",kt="",Ne="",l()}function Td(){const t=Si(),e=gi.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${Me?"disabled":""}>${Me?"Loading...":"Run Again"}</button>
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
            value="${f(Ut)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${Te===""?"selected":""}>All link statuses</option>
            <option value="linked" ${Te==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${Te==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${Te==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${rt?`<div class="discord-data-error discord-last-seen-report-error">${a(rt)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${Me&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!Me&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?Nd(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${a(Wo(t))}</textarea>
      </div>
    </div>
  `}function Nd(t=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${on("name","Discord Member")}</th>
            <th>${on("eso","Linked ESO Account")}</th>
            <th>${on("date","Last Seen")}</th>
            <th>${on("days","Days Since")}</th>
            <th>${on("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr class="discord-last-seen-row ${f(xd(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${f(dt(e).status)}" data-discord-last-seen-search="${f(Ho(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${qd(e)}
                  <span>${a(Nt(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${Cd(e)}</td>
              <td>${a(wi(e.last_seen))}</td>
              <td>${a(_i(e.last_seen))}</td>
              <td>${a(tr(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function on(t,e){const n=kt===t,r=n?Ne==="asc"?"\u25B2":"\u25BC":"\u2195",i=n?`${e}: ${Ne==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${n?" active":""}" type="button" data-discord-last-seen-sort="${f(t)}" title="${f(i)}">
      <span>${a(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${a(r)}</span>
    </button>
  `}function Si(){const t=[...gi],e=kt,n=Ne;if(!e||!n)return t;const r=n==="desc"?-1:1;return t.sort((i,s)=>{var o,c;if(e==="date"){const u=Number(i.last_seen||0)||0,b=Number(s.last_seen||0)||0;return(u-b)*r}if(e==="days")return(Ts(i.last_seen)-Ts(s.last_seen))*r;if(e==="action")return tr(i.last_seen_action).localeCompare(tr(s.last_seen_action),void 0,{sensitivity:"base"})*r;if(e==="eso"){const u=dt(i),b=dt(s),v={linked:0,candidate:1,unlinked:2},m=((o=v[u.status])!=null?o:9)-((c=v[b.status])!=null?c:9);return m!==0?m*r:u.esoAccountName.localeCompare(b.esoAccountName,void 0,{sensitivity:"base"})*r}return Nt(i).localeCompare(Nt(s),void 0,{sensitivity:"base"})*r})}function Bd(t){kt!==t?(kt=t,Ne="asc"):Ne==="asc"?Ne="desc":(kt="",Ne=""),l()}function Nt(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function Ho(t){return[Nt(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,Id(t),wi(t==null?void 0:t.last_seen),_i(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function dt(t){const e=tu(t==null?void 0:t.discord_id),n=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),r=String((e==null?void 0:e.eso_account_name)||"").trim();return n==="linked"&&r?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:r,title:`Linked ESO account: ${r}`}:(n==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&r?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:r,title:`Fuzzy ESO account candidate: ${r}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function Cd(t){const e=dt(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${f(e.className)}"
      title="${f(e.title)}"
      aria-label="${f(e.label)}"
      role="img"
    ></span>
  `}function Id(t){const e=dt(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function Od(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!n)return"";if(/^https?:\/\//i.test(e))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function qd(t){const e=Nt(t),n=e?e.slice(0,2).toUpperCase():"?",r=Od(t);return r?`<span class="discord-member-avatar"><img src="${f(r)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${a(n)}</span>`}function wi(t){const e=Number(t);if(!e)return"Never";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t||"");const r=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(n).reduce((i,s)=>(i[s.type]=s.value,i),{});return`${r.month}/${r.day}/${r.year} ${r.hour}:${r.minute} ${r.dayPeriod}`}function xd(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const n=(Date.now()-e*1e3)/864e5;return n>30?"discord-last-seen-red":n>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function _i(t){const e=Number(t);if(!e)return"Never";const n=Date.now()-e*1e3;if(!Number.isFinite(n))return"";if(n<0)return"0 days";const r=Math.floor(n/864e5);return`${r} day${r===1?"":"s"}`}function Ts(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const n=Date.now()-e*1e3;return Number.isFinite(n)?n<0?0:Math.floor(n/864e5):Number.POSITIVE_INFINITY}function tr(t){return String(t||"").trim()||"None tracked"}function Wo(t=Si()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const n of t){const r=dt(n);e.push([Nt(n),r.label||"",r.esoAccountName||"",wi(n==null?void 0:n.last_seen),_i(n==null?void 0:n.last_seen),tr(n==null?void 0:n.last_seen_action),(n==null?void 0:n.username)||"",(n==null?void 0:n.discord_id)||""])}return e.map(n=>n.map(gr).join("	")).join(`
`)}async function Fd(){const t=Si().filter(i=>{const s=he(Ut),o=String(Te||"").trim().toLowerCase(),c=!s||he(Ho(i)).includes(s),u=!o||dt(i).status===o;return c&&u}),e=Wo(t);if(await br(e)){h("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#discordLastSeenReportTsv");r&&(r.focus(),r.select()),h("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function Pd(){ut=!0,x="",l(),L.length===0&&!q&&$n({silent:!0})}function ni(){ut=!1,ur="",Je="",wn="",_n="",ve=-1,l()}function jo(t){return[...new Set((Array.isArray(L)?L:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function zo(t,e){return t.map(n=>`<option value="${f(n)}" ${e===n?"selected":""}>${a(n)}</option>`).join("")}function Gd(){return zo(jo("link_status"),wn)}function Ud(){return zo(jo("link_method"),_n)}function Vd(){return`
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
            value="${f(ur)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${wn===""?"selected":""}>All statuses</option>
            ${Gd()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${_n===""?"selected":""}>All methods</option>
            ${Ud()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${Je===""?"selected":""}>All actions</option>
            <option value="needs-link" ${Je==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${Je==="can-unlink"?"selected":""}>Unlink Available</option>
            <option value="can-unblock" ${Je==="can-unblock"?"selected":""}>Unblock Available</option>
          </select>
        </div>

        ${x?`<div class="discord-data-error member-links-report-error">${a(x)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${zd()}
        </div>
      </div>
    </div>
  `}function Yo(){var n,r,i,s,o,c;if(!ut)return;(n=document.querySelector("#closeMemberLinksReportButton"))==null||n.addEventListener("click",ni),(r=document.querySelector("#refreshMemberLinksButton"))==null||r.addEventListener("click",()=>$n()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>Zd());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",Yd),t.addEventListener("keydown",Xd)),(s=document.querySelector("#memberLinksReportActionFilter"))==null||s.addEventListener("change",Kd),(o=document.querySelector("#memberLinksReportStatusFilter"))==null||o.addEventListener("change",Jd),(c=document.querySelector("#memberLinksReportMethodFilter"))==null||c.addEventListener("change",Qd),En(),document.querySelectorAll("[data-accept-member-candidate]").forEach(u=>{u.addEventListener("click",()=>Jo(u.dataset.acceptMemberCandidate||"",u.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(u=>{u.addEventListener("click",()=>eu(u.dataset.unlinkMemberLink||"",u.dataset.unlinkMemberLinkDiscordId||""))}),document.querySelectorAll("[data-unblock-member-auto-link]").forEach(u=>{u.addEventListener("click",()=>Qo(u.dataset.unblockMemberAutoLink||"",u.dataset.unblockMemberAutoLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",u=>{u.target===e&&ni()})}function Ns(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function Bs(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Hd(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Wd(t){return[...Array.isArray(t)?t:[]].sort((e,n)=>{const r=Ns(e)-Ns(n);if(r!==0)return r;const i=Bs(e).localeCompare(Bs(n),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((n==null?void 0:n.discord_user_id)||""),void 0,{sensitivity:"base"})})}function jd(t){const e=ri(t);let n="";e==="Username"?n=(t==null?void 0:t.discord_username)||"":e==="Global Name"?n=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(n=(t==null?void 0:t.discord_server_nickname)||""),n||(n=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const r=e?` <span class="member-link-report-match-field">(${a(e)})</span>`:"";return`<span class="member-link-report-discord-name">${a(n)}</span>${r}`}function zd(){return q&&L.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(L)||L.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${Wd(L).map(e=>{var s;const n=String(e.link_status||"").trim().toLowerCase(),r=String(e.link_method||"").trim().toLowerCase(),i=jd(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${f(Hd(e))}"
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
                <td class="member-links-confidence-col">${a(String((s=e.match_confidence)!=null?s:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function Ko(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function Cs(t){const e=Ko();if(e.forEach(r=>r.classList.remove("member-links-report-row-active")),e.length===0){ve=-1;return}ve=Math.max(0,Math.min(t,e.length-1));const n=e[ve];n.classList.add("member-links-report-row-active"),n.scrollIntoView({block:"nearest"})}function En(){const t=he(ur),e=String(Je||"").trim().toLowerCase(),n=String(wn||"").trim().toLowerCase(),r=String(_n||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let s=0;i.forEach(c=>{const u=he(c.dataset.memberLinksReportSearch||""),b=String(c.dataset.memberLinksReportAction||"").trim().toLowerCase(),v=String(c.dataset.memberLinksReportStatus||"").trim().toLowerCase(),m=String(c.dataset.memberLinksReportMethod||"").trim().toLowerCase(),pe=(!t||u.includes(t))&&(!e||b===e)&&(!n||v===n)&&(!r||m===r);c.hidden=!pe,c.classList.remove("member-links-report-row-active"),pe&&(s+=1)});const o=document.querySelector("#memberLinksReportSearchEmpty");o&&(o.hidden=s!==0),ve=-1}function Yd(t){ur=t.target.value||"",En()}function Kd(t){Je=t.target.value||"",En()}function Jd(t){wn=t.target.value||"",En()}function Qd(t){_n=t.target.value||"",En()}function Xd(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Ko();if(e.length===0)return;if(t.key==="ArrowDown"){const r=ve<0?0:ve+1;Cs(r>=e.length?e.length-1:r);return}const n=ve<0?e.length-1:ve-1;Cs(n<0?0:n)}async function $n(t={}){if(!(d!=null&&d.connected)){x="You must be connected to load member links.",l();return}q=!0,x="",t.silent||l();try{const e=await w("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");L=Array.isArray(e.links)?e.links:[]}catch(e){x=k(e)}finally{q=!1,l()}}async function Zd(){if(!(d!=null&&d.connected)||!g.logged_in){x="You must be logged in and connected to run auto-linking.",l();return}q=!0,x="",l();try{const t=await w("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");L=Array.isArray(t.links)?t.links:[],h("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:p})}catch(t){x=k(t)}finally{q=!1,l()}}async function Jo(t,e=""){try{const n=await w("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to accept candidate.");L=Array.isArray(n.links)?n.links:L,h("member-link-accepted",n.message||"Candidate accepted as a link.",{ttlMs:p})}catch(n){x=k(n),h("member-link-accept-error",x,{ttlMs:p})}}async function Qo(t,e=""){if(!await ki({title:"Remove Auto-Link Block?",message:`Remove the blocked auto-match record between ${t} and this Discord account? Auto-linking will run immediately and this screen will refresh to show whether the pair linked again.`,confirmLabel:"Unblock",cancelLabel:"Cancel",confirmClass:"danger"}))return!1;q=!0,x="",l();try{const r=await w("guildsync:unblock-member-auto-link",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to remove auto-link block.");L=Array.isArray(r.links)?r.links:L;const i=re(t),s=String(e||"").trim(),o=r.refreshedPair||L.find(b=>re(b.eso_account_name)===i&&String(b.discord_user_id||"").trim()===s),c=String((o==null?void 0:o.link_status)||"").trim().toLowerCase(),u=c==="linked"?" It linked again automatically.":c==="candidate"?" It is now showing as a candidate.":" No automatic link was recreated.";return h("member-link-unblocked",`${r.message||"Auto-link block removed."}${u}`,{ttlMs:p}),!0}catch(r){return x=k(r),h("member-link-unblock-error",x,{ttlMs:p}),!1}finally{q=!1,l()}}async function eu(t,e=""){if(!!await ki({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const r=await w("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to unlink member.");L=Array.isArray(r.links)?r.links:L,h("member-link-unlinked",r.message||"Member link removed.",{ttlMs:p})}catch(r){x=k(r)}l()}}function re(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function fr(t){const e=re(t);return e?L.filter(n=>re(n.eso_account_name)===e):[]}function hr(t){const e=String(t||"").trim();return e?L.filter(n=>String(n.discord_user_id||"").trim()===e):[]}function Xo(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const n=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(n.length>0){const i=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const s=n.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return s||n[0]}const r=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return r||e[0]}function tu(t){return Xo(hr(t))}function nu(t){return`${re(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function Ai(){return A?A.mode==="discord-to-eso"?hr(A.discordUserId):fr(A.esoAccountName):[]}function ru(t){const e=String(t||"").trim(),n=P.find(r=>String(r.discord_id||"").trim()===e);return n&&(n.server_nickname||n.global_name||n.username||n.discord_id)||e}function Zo(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?hr(t.discordUserId):fr(t.esoAccountName),r=Xo(n),i=String((r==null?void 0:r.link_status)||"").trim().toLowerCase(),s=n.filter(c=>String(c.link_status||"").trim().toLowerCase()==="linked").length,o=n.filter(c=>String(c.link_status||"").trim().toLowerCase()==="candidate").length;return s>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?s===1?r.eso_account_name:`${s} ESO accounts`:s===1?r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member":`${s} Discord accounts`}`}:i==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?r.eso_account_name:r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member"}`}:i==="blocked"||Number((r==null?void 0:r.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function ea(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,r=Zo(t);return`
    <button
      class="member-link-status-dot member-link-status-${f(r.className)}"
      type="button"
      title="${f(r.title)}"
      aria-label="${f(r.label)}"
      data-open-member-link-dialog="${f(e)}"
      data-member-link-value="${f(n||"")}"
    ></button>
  `}function iu(){return A?A.mode==="discord-to-eso"?ru(A.discordUserId):A.esoAccountName||"":""}function ta(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function ri(t){const e=ta((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const n=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(n.includes("discord_username")||n.includes("username"))return"Username";if(n.includes("discord_display_name")||n.includes("global")||n.includes("display"))return"Global Name";if(n.includes("discord_server_nickname")||n.includes("server")||n.includes("nickname"))return"Server Nickname";const r=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(r==="exact"||r==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",s=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const c of s){const u=su(i,c.value);(!o||u>o.score)&&(o={...c,score:u})}if(o&&o.score>0)return o.field}return""}function he(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function su(t,e){const n=he(t),r=he(e);if(!n||!r)return 0;if(n===r)return 100;if((n.includes(r)||r.includes(n))&&Math.min(n.length,r.length)>=4)return 88;const i=Math.abs(n.length-r.length),s=[...n].findIndex((c,u)=>c!==r[u]),o=s===-1?Math.min(n.length,r.length):s;return Math.max(0,Math.min(75,Math.round(o*10-i*3)))}function ou(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function au(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function cu(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),n=ou(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${a(n)}</span>`}function lu(t){var c;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",n=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",r=String(t.link_status||"").trim().toLowerCase(),o=r==="linked"?`<button
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
        <div><span>Status:</span> ${cu(t)} \xB7 ${a(au(t.link_method))} \xB7 ${a(String((c=t.match_confidence)!=null?c:""))}% \xB7 ${a(n)}</div>
        ${ri(t)?`<div><span>Matched:</span> Matched on ${a(ri(t))}</div>`:""}
      </div>
      ${o}
    </div>
  `}function du(){const t=Ai();return t.length?[...t].sort((n,r)=>{var u,b;const i=String(n.link_status||"").trim().toLowerCase(),s=String(r.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},c=((u=o[i])!=null?u:9)-((b=o[s])!=null?b:9);return c!==0?c:Number(r.match_confidence||0)-Number(n.match_confidence||0)}).map(n=>lu(n)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function uu(){if(Dt)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(Ae)return`<div class="discord-data-error">${a(Ae)}</div>`;if(!Array.isArray(it)||it.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(Ai().map(n=>nu(n))),e=[...it].filter(n=>{const r=(A==null?void 0:A.mode)==="discord-to-eso"?`${re(n.account_name)}::${String(A.discordUserId||"").trim()}`:`${re(A==null?void 0:A.esoAccountName)}::${String(n.discord_id||"").trim()}`;return!t.has(r)}).sort((n,r)=>{const i=Number(r.confidence||0)-Number(n.confidence||0);return i!==0?i:Is(n).localeCompare(Is(r),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(n=>fu(n)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function Is(t){return((A==null?void 0:A.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function fu(t,e={}){var m,y,M;const n=(A==null?void 0:A.mode)||"",r=n==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=ta(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),s=n==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[s,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),c=n==="discord-to-eso"?t.account_name:t.discord_id,u=e.disabled===!0,b=[r,s,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),v=[r,o,`${(m=t.confidence)!=null?m:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${f(c||"")}" data-member-link-option-search="${f(b)}" title="${f(v)}" ${u?"disabled":""}>
      <span class="member-link-option-name" title="${f(r||"")}">${a(r||"")}</span>
      <span class="member-link-option-subtitle" title="${f(o||"")}">${a(o||"")}</span>
      <span class="member-link-option-confidence" title="${f(String((y=t.confidence)!=null?y:0))}%">${a(String((M=t.confidence)!=null?M:0))}%</span>
    </button>
  `}function hu(){const t=(A==null?void 0:A.mode)||"",e=iu(),n=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
            ${du()}
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
              value="${f(An)}"
            />
            ${uu()}
          </section>
        </div>

      </div>
    </div>
  `}async function na(t,e){if(!(d!=null&&d.connected)||!_()){h("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:p});return}ze=!0,A=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},it=[],Dt=!0,Ae="",An="",oe=-1,l();try{if(!Array.isArray(L)||L.length===0){const i=await w("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(L=Array.isArray(i.links)?i.links:[])}const r=await w("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load link suggestions.");it=Array.isArray(r.options)?r.options:[]}catch(n){Ae=k(n)}finally{Dt=!1,l()}}function Bt(){document.removeEventListener("keydown",ii),ze=!1,A=null,it=[],Dt=!1,Ae="",An="",oe=-1,l()}function ra(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function Os(t){const e=ra();if(e.forEach(r=>r.classList.remove("member-link-option-row-active")),e.length===0){oe=-1;return}oe=Math.max(0,Math.min(t,e.length-1));const n=e[oe];n.classList.add("member-link-option-row-active"),n.scrollIntoView({block:"nearest"})}function ia(){const t=he(An),e=[...document.querySelectorAll(".member-link-option-row")];let n=0;e.forEach(i=>{const s=he(i.dataset.memberLinkOptionSearch||i.textContent||""),o=!t||s.includes(t);i.hidden=!o,i.classList.remove("member-link-option-row-active"),o&&(n+=1)});const r=document.querySelector("#memberLinkSuggestionSearchEmpty");r&&(r.hidden=n!==0),oe=-1}function pu(t){An=t.target.value||"",ia()}function mu(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=ra();if(e.length===0)return;if(t.key==="ArrowDown"){const r=oe<0?0:oe+1;Os(r>=e.length?e.length-1:r);return}const n=oe<0?e.length-1:oe-1;Os(n<0?0:n)}function ii(t){!ze||t.key==="Escape"&&(t.preventDefault(),Bt())}async function gu(t){if(!(!A||!t))try{const e=A.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:A.discordUserId}:{esoAccountName:A.esoAccountName,discordUserId:t},n=await w("guildsync:manual-link-member",e,3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to link members.");L=Array.isArray(n.links)?n.links:L,h("member-link-saved",n.message||"Member link saved.",{ttlMs:p}),Bt()}catch(e){Ae=k(e),l()}}async function bu(t,e=""){await Jo(t,e),Bt()}async function sa(){if(!!A){Dt=!0,Ae="",l();try{const t=A.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:A.discordUserId}:{mode:"eso-to-discord",accountName:A.esoAccountName},e=await w("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");it=Array.isArray(e.options)?e.options:[]}catch(t){Ae=k(t)}finally{Dt=!1,l()}}}async function yu(t="",e=""){const n=Ai().find(i=>re(i.eso_account_name)===re(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!n||!await ki({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await w("guildsync:manual-unlink-member",{esoAccountName:n.eso_account_name,discordUserId:n.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");L=Array.isArray(i.links)?i.links:L,h("member-link-unlinked",i.message||"Member link removed.",{ttlMs:p}),await sa()}catch(i){Ae=k(i),l()}}async function ku(t="",e=""){await Qo(t,e)&&await sa()}function oa(){var n;if(!ze)return;document.removeEventListener("keydown",ii),document.addEventListener("keydown",ii),(n=document.querySelector("#closeMemberLinkDialogButton"))==null||n.addEventListener("click",Bt);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",pu),t.addEventListener("keydown",mu),ia()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(r=>{r.addEventListener("click",()=>yu(r.dataset.unlinkEsoAccount||"",r.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-unblock-dialog-member-auto-link]").forEach(r=>{r.addEventListener("click",()=>ku(r.dataset.unblockEsoAccount||"",r.dataset.unblockDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(r=>{r.addEventListener("click",()=>gu(r.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(r=>{r.addEventListener("click",()=>bu(r.dataset.acceptDialogMemberCandidate||"",r.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",r=>{r.target===e&&Bt()})}function aa(){var e,n,r;if(!xt)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",Zr),(n=document.querySelector("#rerunAssociateTicketReportButton"))==null||n.addEventListener("click",()=>fa()),(r=document.querySelector("#copyAssociateTicketReportGridButton"))==null||r.addEventListener("click",()=>Ld());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Zr()})}function ca(){var e,n,r;if(!Pt)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",ei),(n=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||n.addEventListener("click",()=>ua()),(r=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||r.addEventListener("click",()=>Dd());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&ei()})}function la(){var r,i,s;if(!Gt)return;(r=document.querySelector("#closeDiscordLastSeenReportButton"))==null||r.addEventListener("click",ti),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>da()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>Fd()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(o=>{o.addEventListener("click",()=>Bd(o.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",vu);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",Su),Li();const n=document.querySelector(".discord-last-seen-report-overlay");n&&n.addEventListener("click",o=>{o.target===n&&ti()})}function vu(t){Ut=t.target.value||"",Li()}function Su(t){Te=t.target.value||"",Li()}function Li(){const t=he(Ut),e=String(Te||"").trim().toLowerCase(),n=[...document.querySelectorAll("[data-discord-last-seen-row]")];let r=0;n.forEach(s=>{const o=he(s.dataset.discordLastSeenSearch||s.textContent||""),c=String(s.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),v=(!t||o.includes(t))&&(!e||c===e);s.hidden=!v,v&&(r+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=r!==0)}async function da(){if(!(d!=null&&d.connected)||!_()){rt="You must be logged in and connected to run this report.",l();return}Me=!0,rt="",l();try{const t=await w("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");P=Oi(t.members),lr=qi(t.roles),gi=[...P]}catch(t){rt=k(t)}finally{Me=!1,l(),D("discordLastSeenReportSearchInput")}}async function ua(){if(!(d!=null&&d.connected)||!_()){nt="You must be logged in and connected to run this report.",l();return}De=!0,nt="",l();try{const t=await w("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");bn=Array.isArray(t.rows)?t.rows:[]}catch(t){nt=k(t)}finally{De=!1,l()}}async function fa(){if(!(d!=null&&d.connected)||!_()){tt="You must be logged in and connected to run this report.",l();return}Re=!0,tt="",l();try{const t=await w("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Ft=Array.isArray(t.rows)?t.rows:[]}catch(t){tt=k(t)}finally{Re=!1,l()}}function wt(){const t=String(jt||"").trim().toLowerCase(),e={account_name:"Anonymous",rank:"Manual Entry"},n=new Set(["anonymous"]),r=j.filter(i=>String(i.account_name||"").trim()).filter(i=>{const o=String(i.account_name||"").trim().toLowerCase();return!o||n.has(o)||t&&!o.includes(t)?!1:(n.add(o),!0)}).slice().sort((i,s)=>{const o=String(i.account_name||"").toLowerCase(),c=String(s.account_name||"").toLowerCase(),u=t&&o.startsWith(t)?0:1,b=t&&c.startsWith(t)?0:1;return u!==b?u-b:o.localeCompare(c)}).slice(0,19);return[e,...r]}function ha(t=wt()){const e=String(E.accountName||"").trim();return t.length===0?'<div class="roster-history-muted manual-ticket-no-matches">No matching guild members found.</div>':t.map((n,r)=>`
        <button class="roster-history-match${r===I||n.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${f(n.account_name)}" role="option" aria-selected="${r===I||n.account_name===e?"true":"false"}">
          <span>${a(n.account_name)}</span>
          <strong>${a(n.rank||"")}</strong>
          ${r===I?"<small>Enter</small>":""}
        </button>
      `).join("")}function pa(){document.querySelectorAll("[data-manual-ticket-account]").forEach(t=>{t.addEventListener("mousedown",e=>{e.preventDefault()}),t.addEventListener("click",()=>{ma(t.dataset.manualTicketAccount||"")})})}function Ir(){const t=document.querySelector("#manualTicketMatchList");if(!t)return;const e=wt();I>=e.length&&(I=e.length>0?e.length-1:-1),t.innerHTML=ha(e),pa()}function ma(t){const e=String(t||"").trim();E.accountName=e,jt=e,Z=!1,I=-1,U="",l()}function D(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const n=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(n,n)},0)}function wu(){const t=Z?wt():[],e=String(E.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Entry</h3>
            <p>Add a manual banking or raffle entry such as FFTG, officer corrections, or anonymous gold.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${U?`<div class="discord-data-error">${a(U)}</div>`:""}

        <div class="manual-ticket-form">
          <div class="manual-ticket-member-picker">
            <label class="manual-ticket-member-field" for="manualTicketAccountSearchInput">
              <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(jt)}" autocomplete="off" />
            </label>

            ${Z?`
              <div id="manualTicketMatchList" class="roster-history-match-list manual-ticket-match-list" role="listbox" aria-label="Matching guild members">
                ${ha(t)}
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
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${Qn?"disabled":""}>${Qn?"Saving...":"Add Manual Entry"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function ga(){var s,o,c,u,b,v;if(!_e)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{_e=!1,l()});const t=document.querySelector("#manualTicketAccountSearchInput");if(t){const m=({rerender:y=!1}={})=>{if(Z=!0,I=wt().length>0?0:-1,y){l(),D("manualTicketAccountSearchInput");return}Ir()};t.addEventListener("focus",()=>{Z||m({rerender:!0})}),t.addEventListener("click",()=>{Z||m({rerender:!0})}),t.addEventListener("input",y=>{jt=y.target.value||"",E.accountName="",Z=!0,I=wt().length>0?0:-1,Ir()}),t.addEventListener("keydown",y=>{if(y.key==="Escape")return;if(!Z){(y.key==="ArrowDown"||y.key==="ArrowUp")&&(y.preventDefault(),m({rerender:!0}));return}const M=wt();if(y.key==="ArrowDown"||y.key==="ArrowUp"){if(M.length===0)return;y.preventDefault();const Le=y.key==="ArrowDown"?1:-1;I=((I<0?0:I)+Le+M.length)%M.length,Ir();return}if(y.key!=="Enter")return;y.preventDefault();const z=M[I>=0?I:0];z!=null&&z.account_name&&ma(z.account_name)})}pa(),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",m=>{E.note=m.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(m=>{m.addEventListener("click",()=>{const y=String(m.dataset.manualTicketType||"").trim().toLowerCase();E.ticketType=y==="monthly"?"monthly":"biweekly",l()})}),(c=document.querySelector("[data-manual-ticket-toggle]"))==null||c.addEventListener("click",()=>{E.ticketType=E.ticketType==="monthly"?"biweekly":"monthly",l()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",m=>{const y=String(m.target.value||"").replace(/\D/g,"");m.target.value!==y&&(m.target.value=y),E.goldValue=y});const n=document.querySelector("#manualTicketCountInput");n==null||n.addEventListener("input",m=>{const y=String(m.target.value||"").replace(/\D/g,"");m.target.value!==y&&(m.target.value=y),E.tickets=y});const r=m=>{const y=Number(E.tickets)||0,M=Math.max(0,y+m);E.tickets=String(M),n&&(n.value=E.tickets,n.focus())};(u=document.querySelector("#manualTicketCountUpButton"))==null||u.addEventListener("click",()=>r(1)),(b=document.querySelector("#manualTicketCountDownButton"))==null||b.addEventListener("click",()=>r(-1)),(v=document.querySelector("#saveManualBiweeklyTicketButton"))==null||v.addEventListener("click",()=>_u());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",m=>{m.target===i&&(_e=!1,l())})}async function _u(){const t=String(E.accountName||"").trim(),e=String(E.note||"").trim(),n=String(E.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",r=Number(String(E.goldValue||"").trim()||0),i=Number(String(E.tickets||"").trim()||0);if(Z){U="Select a matching guild member or Anonymous from the list before saving.",l(),D("manualTicketAccountSearchInput");return}if(!t){U="Select a matching guild member or Anonymous from the list before saving.",l(),D("manualTicketAccountSearchInput");return}if(!Number.isFinite(r)||r<0){U="Gold value must be zero or greater.",l();return}if(!Number.isFinite(i)||i<0){U="Tickets must be zero or greater.",l();return}const s=t.toLowerCase()==="anonymous";if(s&&Math.floor(i)>0){U="Anonymous cannot be awarded tickets. Use 0 tickets and enter a gold value.",l();return}if(Math.floor(r)===0&&Math.floor(i)===0){U=s?"Enter a gold value for Anonymous when tickets are 0.":"Enter gold or tickets. Both cannot be zero.",l();return}Qn=!0,U="",l();try{const o=await w("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:n,gold_value:Math.floor(r),tickets:Math.floor(i)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Failed to add manual entry.");_e=!1,E={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},jt="",I=-1,Z=!1,await se({silent:!0}),h("manual-ticket-added",o.message||"Manual entry added.",{ttlMs:p})}catch(o){U=k(o)}finally{Qn=!1,l()}}async function Au(t=""){const e=String(t||"").trim();if(!!e){qt=!0,gn=e,qe=[],Jn=!0,et=!1,xe="",Et="",l();try{const n=await w("guildsync:request-roster-member-notes",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster notes.");qe=Array.isArray(n.notes)?n.notes:[]}catch(n){xe=k(n)}finally{Jn=!1,l()}}}function si(){qt=!1,gn="",qe=[],Jn=!1,et=!1,xe="",Et="",l()}function Lu(){var n,r;if(!qt)return;(n=document.querySelector("#closeRosterNotesButton"))==null||n.addEventListener("click",si);const t=document.querySelector("#rosterNotesNewNote");t&&t.addEventListener("input",i=>{Et=i.target.value||""}),(r=document.querySelector("#saveRosterNoteButton"))==null||r.addEventListener("click",()=>Eu());const e=document.querySelector(".roster-notes-overlay");e&&e.addEventListener("click",i=>{i.target===e&&si()})}async function Eu(){const t=String(Et||"").trim();if(!t){xe="Enter a note before saving.",l();return}et=!0,xe="",l();try{const e=await w("guildsync:add-roster-member-note",{account_name:gn,note:t},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to save roster note.");e.note&&(qe=[...qe,e.note]),Et="";const n=j.find(r=>re(r.account_name)===re(gn));n&&(n.note_count=Number(n.note_count||0)+1)}catch(e){xe=k(e)}finally{et=!1,l()}}function ba(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>zt());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{Lt=!0,Se="",l()});const n=document.querySelector("#rosterMemberSearch");n&&(n.addEventListener("input",o=>{Kn=o.target.value||"",Yr=o.target.selectionStart,Kr=o.target.selectionEnd,N=-1,l({restoreRosterSearchFocus:!0})}),n.addEventListener("keydown",$u)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{ed(o.dataset.rosterSortColumn||"account_name")})});const r=document.querySelector("#rosterRankFilter");r&&r.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(Ze.add(c),N=-1,l())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRosterRankFilter||"";Ze.delete(c),N=-1,l()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(yt.add(c),N=-1,l())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRosterLinkStatusFilter||"";yt.delete(c),N=-1,l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>na(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))}),document.querySelectorAll("[data-open-roster-notes]").forEach(o=>{o.addEventListener("click",()=>Au(o.dataset.openRosterNotes||""))}),Lu();const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{Kn="",Ze.clear(),yt.clear(),ke="",F="",N=-1,l()}),Ru()}function $u(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){N=-1;return}t.preventDefault(),t.key==="ArrowDown"?N=N<0?0:Math.min(N+1,e.length-1):t.key==="ArrowUp"&&(N=N<0?e.length-1:Math.max(N-1,0)),e.forEach((r,i)=>{r.classList.toggle("roster-search-active-row",i===N)});const n=e[N];n&&typeof n.scrollIntoView=="function"&&n.scrollIntoView({block:"nearest",inline:"nearest"})}function Ru(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{Lt=!1,l()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",n=>{if(mn=n.target.value||"",K=-1,!mn.trim()){clearTimeout(Br),Se="",H=[],He="",Ie=[],Oe=!1,l(),D("rosterHistorySearchInput");return}clearTimeout(Br),Br=setTimeout(()=>{Nu({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(H.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;K=((K<0?0:K)+i+H.length)%H.length,l(),D("rosterHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=H[K>=0?K:0];r!=null&&r.account_name&&xs(r.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(n=>{n.addEventListener("click",()=>{xs(n.dataset.rosterHistoryAccount||"")})})}function ya(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{$t=!1,l()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",n=>{$e=n.target.value||"",J=-1,Ye+=1;const r=Ye;if(clearTimeout(Ls),!$e.trim()){we="",W=[],Rt="",ct="",Fe=[],Pe=!1,l(),D("discordHistorySearchInput");return}Ls=setTimeout(()=>{Du({auto:!0,keepFocus:!0,generation:r})},El)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(W.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;J=((J<0?0:J)+i+W.length)%W.length,l(),D("discordHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=W[J>=0?J:0];r!=null&&r.discord_id&&qs(r.discord_id,Xr(r))})),document.querySelectorAll("[data-discord-history-id]").forEach(n=>{n.addEventListener("click",()=>{qs(n.dataset.discordHistoryId||"",n.dataset.discordHistoryName||"")})})}async function Du(t={}){const e=Number.isInteger(t.generation)?t.generation:++Ye,n=$e.trim();if(e===Ye){if(!n){we="",W=[],J=-1,Rt="",ct="",Fe=[],Pe=!1,l(),t.keepFocus&&D("discordHistorySearchInput");return}Pe=!0,we="",W=[],J=-1,Rt="",ct="",Fe=[],l(),t.keepFocus&&D("discordHistorySearchInput");try{const r=await w("guildsync:request-discord-member-history",{query:n},3e4);if(e!==Ye||n!==$e.trim())return;if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search Discord member history.");W=Mu(r.matches),J=W.length>0?0:-1}catch(r){if(e!==Ye||n!==$e.trim())return;we=k(r)}finally{if(e!==Ye||n!==$e.trim())return;Pe=!1,l(),t.keepFocus&&D("discordHistorySearchInput")}}}async function qs(t,e="",n={}){const r=String(t||"").trim();if(!!r){Rt=r,ct=String(e||r).trim(),$e=ct,Fe=[],Pe=!0,we="",l();try{const i=await w("guildsync:request-discord-member-history-events",{discord_id:r},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");Fe=Tu(i.events)}catch(i){we=k(i)}finally{Pe=!1,n.keepLoading||l()}}}function Mu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function Tu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s,o,c,u,b,v,m,y;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((r=(n=e.old_value)!=null?n:e.oldValue)!=null?r:"").trim(),new_value:String((s=(i=e.new_value)!=null?i:e.newValue)!=null?s:"").trim(),event_timestamp:(u=(c=(o=e.event_timestamp)!=null?o:e.eventTimestamp)!=null?c:e.timestamp)!=null?u:"",event_datetime:(v=(b=e.event_datetime)!=null?b:e.eventDatetime)!=null?v:"",initiator:String((y=(m=e.initiator)!=null?m:e.initiatorName)!=null?y:"").trim(),source:String(e.source||"").trim()}}):[]}async function Nu(t={}){const e=mn.trim();if(!e){Se="",H=[],K=-1,He="",Ie=[],Oe=!1,l(),t.keepFocus&&D("rosterHistorySearchInput");return}Oe=!0,Se="",H=[],K=-1,He="",Ie=[],l(),t.keepFocus&&D("rosterHistorySearchInput");try{const n=await w("guildsync:request-roster-rank-history",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search roster rank history.");H=Bu(n.matches),K=H.length>0?0:-1}catch(n){Se=k(n)}finally{Oe=!1,l(),t.keepFocus&&D("rosterHistorySearchInput")}}async function xs(t,e={}){const n=String(t||"").trim();if(!!n){He=n,mn=n,Ie=[],Oe=!0,Se="",l();try{const r=await w("guildsync:request-roster-stream-history",{account_name:n},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load roster stream history.");Ie=Cu(r.events)}catch(r){Se=k(r)}finally{Oe=!1,e.keepLoading||l()}}}function Bu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function Cu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(r=(n=e.timestamp)!=null?n:e.timestampS)!=null?r:"",officer:String(e.officer||"").trim()}}):[]}function ka(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(n=e.joined)!=null?n:"",note_count:Number((i=(r=e.note_count)!=null?r:e.noteCount)!=null?i:0)||0}}).sort((e,n)=>e.account_name.localeCompare(n.account_name)):[]}function Iu(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function pr(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function Ei(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function Ou(t={}){j=ka(t.members),Yn=t.last_refresh||new Date().toISOString(),$==="eso-members"&&l(),h("roster-data-updated",`Roster data updated. Loaded ${j.length} member record${j.length===1?"":"s"}.`,{ttlMs:p})}async function zt(t={}){if(!!(d!=null&&d.connected)){Ve=!0,l();try{const e=await w("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");j=ka(e.members),Yn=e.last_refresh||Yn,t.silent||h("roster-data-loaded",`Loaded ${j.length} roster member${j.length===1?"":"s"}.`,{ttlMs:p})}catch(e){h("roster-data-error",k(e),{ttlMs:p})}finally{Ve=!1,l()}}}async function qu(t={}){var e;if(!!_()){if(!(d!=null&&d.connected)){h("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}Ve=!0,l();try{const n=await dl(t);if(!(n!=null&&n.ok)){h("roster-data-pending",(n==null?void 0:n.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:p});return}const r={local_upload_id:va(),authenticated_username:ie(),authenticated_discord_user_id:((e=g==null?void 0:g.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await wa(r)}catch(i){throw xu(r),i}await zt({silent:!0})}catch(n){h("roster-data-error",k(n),{ttlMs:p})}finally{Ve=!1,l()}}}function va(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function $i(){try{const t=window.localStorage.getItem(bo),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Sa(t){window.localStorage.setItem(bo,JSON.stringify(Array.isArray(t)?t:[]))}function xu(t){const e=String((t==null?void 0:t.local_upload_id)||va()),n=$i().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Sa(n),h("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Fu(t){const e=$i().filter(n=>(n==null?void 0:n.local_upload_id)!==t);Sa(e)}async function Pu(){if(Dr||!(d!=null&&d.connected)||!_())return;const t=$i();if(t.length!==0){Dr=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!_())return;await wa(e),Fu(e.local_upload_id)}}catch(e){h("roster-data-pending-error",`Pending roster upload retry failed: ${k(e)}`,{ttlMs:p})}finally{Dr=!1}}}async function wa(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await w("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const n=await ul(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return h("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:p}),e}async function Gu(t={}){var e,n;if(!!_()){if(!(d!=null&&d.connected)){h("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}try{const r=await yl(t);if(!(r!=null&&r.ok)){h("applications-data-info",(r==null?void 0:r.message)||"No application records were found to process.",{ttlMs:p});return}if((Array.isArray((e=r==null?void 0:r.data)==null?void 0:e.records)?r.data.records:[]).length===0){h("applications-data-info",`No application records were found in ${r.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:p});return}const s={local_upload_id:_a(),authenticated_username:ie(),authenticated_discord_user_id:((n=g==null?void 0:g.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await La(s)}catch(o){throw Uu(s),o}}catch(r){h("applications-data-error",k(r),{ttlMs:p})}}}function _a(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Ri(){try{const t=window.localStorage.getItem(yo),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Aa(t){window.localStorage.setItem(yo,JSON.stringify(Array.isArray(t)?t:[]))}function Uu(t){const e=String((t==null?void 0:t.local_upload_id)||_a()),n=Ri().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Aa(n),h("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Vu(t){const e=Ri().filter(n=>(n==null?void 0:n.local_upload_id)!==t);Aa(e)}async function Hu(){if(Mr||!(d!=null&&d.connected)||!_())return;const t=Ri();if(t.length!==0){Mr=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!_())return;await La(e),Vu(e.local_upload_id)}}catch(e){h("applications-data-pending-error",`Pending application upload retry failed: ${k(e)}`,{ttlMs:p})}finally{Mr=!1}}}async function La(t){var i;if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return h("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:p}),{ok:!0,sent_count:0,skipped_empty:!0};let n=0;for(const s of e){const o=await w("guildsync:eso-guild-application-message",{...t,record:s,recordKey:(s==null?void 0:s.recordKey)||"",message:Wu(s)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Backend rejected the application data payload. Application data was not cleared.");n+=1}const r=await kl(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return h("applications-data-sent",`Sent ${n} application record${n===1?"":"s"} to GuildSync backend.`,{ttlMs:p}),{ok:!0,sent_count:n}}function Wu(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),n=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",r=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",s=String(t.applicationText||"_No application text captured._"),o=Object.entries(t).filter(([c])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(c)).map(([c,u])=>`**${c}:** ${ju(u)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${n}** ${r} an application from **${i}**.`,"","**Application text:**","```",s.slice(0,1500),"```",o.length>0?"":null,o.length>0?"**Full captured record fields:**":null,...o].filter(c=>c!==null).join(`
`)}function ju(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function zu(t={}){await Gu(t)}function Yu(){const t=oi(R),e=$f(t,R),n=R!=="other",r=n&&Yt(R);return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <button id="openBankingHistoryButton" class="refresh-discord-button banking-history-button" type="button" ${_()?"":'disabled title="Login required to lookup banking history."'}>
            <span aria-hidden="true">\u2315</span>
            <span>Lookup Banking History</span>
          </button>
          <button id="openManualBiweeklyTicketButton" class="bank-export-button" type="button" ${_()?"":'disabled title="Login required to add manual entries."'}>
            <span aria-hidden="true">\uFF0B</span>
            <span>Add Manual Entry</span>
          </button>
          ${nf()}
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${a(Ua(wo))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${We||!_()?"disabled":""} ${_()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${We?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${Or("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${Or("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${Or("other","?","Other","All other deposits")}
        </div>

        ${tf(R)}

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
              ${t.length>0?t.map(i=>Df(i,n,r)).join(""):Mf(n,r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${a(_t(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${R==="monthly"?`<div>Raffle Pot: <strong>${a(_t(Math.floor(e.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${R==="biweekly"?`<div>Raffle Pot: <strong>${a(_t(Na(e.amount)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${R==="biweekly"?`<div>Draws: <strong>${a(String(Rf(e.amount)))}</strong></div>`:""}
          ${n?`<div>Purchased: <strong>${a(te(e.purchased))}</strong></div>${r?`<div>Bonus: <strong>${a(te(e.bonus))}</strong></div>`:""}<div>Total Tickets: <strong>${a(te(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${st?Xu(oi(ne)):""}
    </div>
  `}function Ku(){return`
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
            <input id="bankingHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" autocomplete="off" placeholder="Start typing part of an account name..." value="${f(lt)}" />
          </label>
          ${Ju()}
        </div>

        ${de?`<div class="discord-data-error">${a(de)}</div>`:""}

        <div class="banking-history-results">
          <div class="roster-history-section-title">Banking History${ce?`: ${a(ce)}`:""}${ce?`<span class="banking-history-count">${a(String(ee.length))} record${ee.length===1?"":"s"} found</span>`:""}</div>
          ${Qu()}
        </div>
      </div>
    </div>
  `}function Ju(){return lt.trim()?le&&O.length===0&&!ce?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">Searching...</div></div>':O.length===0&&!ce?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">No matching banking names found.</div></div>':O.length===0?"":`
    <div class="banking-history-autocomplete" role="listbox" aria-label="Banking history matches">
      ${O.map((t,e)=>`
        <button class="banking-history-autocomplete-option${e===Q?" is-selected":""}" type="button" data-banking-history-account="${f(t.account_name)}">
          <span>${a(t.account_name)}</span>
          <small>${a(String(Number(t.record_count||t.recordCount||0)||0))} record${Number(t.record_count||t.recordCount||0)===1?"":"s"}</small>
        </button>
      `).join("")}
    </div>
  `:""}function Qu(){const t=ee.some(e=>e.bonus_enabled);return ce?le&&ee.length===0?'<div class="roster-history-muted">Loading banking history...</div>':ee.length===0?'<div class="roster-history-muted">No banking history found for this account.</div>':`
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
          ${ee.map(e=>{var n,r,i,s,o;return`
            <tr>
              <td>${a(bf((i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:""))}</td>
              <td>${a(yf(e.transaction_type||e.type||""))}</td>
              <td style="text-align:right;">${a(kf((o=(s=e.deposit_amount)!=null?s:e.depositAmount)!=null?o:e.amount))} \u{1FA99}</td>
              <td style="text-align:right;">${a(qr(e.purchased_tickets))}</td>
              ${t?`<td style="text-align:right;">${e.bonus_enabled?`${a(te(e.bonus_percent))}%`:""}</td><td style="text-align:right;">${e.bonus_enabled?a(qr(e.bonus_tickets)):""}</td>`:""}
              <td style="text-align:right;">${a(qr(e.total_tickets))}</td>
              <td class="banking-history-note-cell">${a(e.note||"")}</td>
            </tr>
          `}).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see banking history.</div>'}function Xu(t){const e=Yt(ne);return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${a(ue(ne))} Deposits</h3>
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
              ${t.length>0?t.map(n=>Zu(n)).join(""):ef()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${a(Da(t))}</textarea>
      </div>
    </div>
  `}function Zu(t){const e=Yt(ne);return`
    <tr>
      <td>${a(t.displayName||"")}</td>
      <td>${a(String(Bi(t,ne)))}</td>
      <td>${a(String(t.purchasedTickets))}</td>
      ${e?`<td>${a(String(t.bonusPercent))}%</td><td>${a(String(t.bonusTickets))}</td>`:""}
      <td>${a(String(t.totalTickets))}</td>
      <td>${a(t.note||"")}</td>
    </tr>
  `}function ef(){return`
    <tr>
      <td class="bank-empty-row" colspan="${Yt(ne)?7:5}">No deposits to export for ${a(ue(ne))}.</td>
    </tr>
  `}function tf(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=Ti(t),n=rr(t),r=n<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${f(ue(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${a(ue(t))} Raffle Period ${n===0?"(Current)":`(${Math.abs(n)} period${Math.abs(n)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${a(Vn(e.salesStart))} through ${a(Vn(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${a(Vn(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${r?"":"disabled"} aria-label="Next ${f(ue(t))} raffle period">\u203A</button>
    </div>
  `}function Or(t,e,n,r){const i=R===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${f(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${a(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${a(n)}</span>
        <span class="bank-section-subtitle">${a(r)}</span>
      </span>
    </button>
  `}function nf(){if(!_())return"";const t=mr(),e=Rn(),n=Ea(),r=t+e+n;if(r<=0)return"";const i=`Desktop Client Required${r>0?` (${r})`:""}`,s="Deposit mail checkout and ESO SavedVariables writing are disabled in the web client. Use the GuildSync desktop client for this mail workflow.";return`
    <button id="checkoutDepositMailButton" class="bank-export-button deposit-mail-button deposit-mail-status-only" type="button" data-deposit-mail-action="disabled" aria-disabled="true" title="${f(s)}" aria-label="${f(`${i}. ${s}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${a(i)}</span>
      <span class="deposit-mail-web-disabled" aria-hidden="true">Web Disabled</span>
    </button>
  `}function Rn(){return Dn().reduce((t,e)=>t+Kt(e.records).length,0)}function rf(){const t=(g==null?void 0:g.user)||{};return new Set([ie(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function sf(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?rf().has(e):!1}function Ea(){return _()?G.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="written_to_eso"&&sf(t)}).length:0}function mr(){return G.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="unsent"}).length}function of(t){const e=String(t||"").trim();return G.find(n=>String(n.eventId||"").trim()===e)||null}function Di(t){const e=String(t||"other").toLowerCase(),n=["biweekly","monthly","other"],r=n.includes(e)?e:"other",i=n.filter(s=>s!==r);return[i[0]||"biweekly",r,i[1]||"other"]}function Mi(t={},e="other"){const n=String(e||"other").toLowerCase(),r=Number(t==null?void 0:t.amount)||0;return n===String((t==null?void 0:t.type)||"").toLowerCase()?Number(t==null?void 0:t.ticketAmount)||0:n==="biweekly"?Math.floor(r/500):n==="monthly"?Math.floor(r/2500):0}function $a(t={},e="other",n=""){const r=String(t.type||"other").toLowerCase(),i=ue(r),s=ue(e),o=ie()||"Unknown user",c=[`Moved from ${i} to ${s} by ${o}.`,`Ref ${t.eventId||""}`],u=String(n||"").trim();return u&&c.push(`Reason: ${u}`),c.join(`
`)}function af(t){const e=of(t);if(!e){h("banking-move-missing","Could not find the selected banking entry.",{ttlMs:p});return}const n=String(e.type||"other").toLowerCase();ye=e,B={targetType:n,note:"",tickets:String(Mi(e,n))},be="",Tt=!1,Ht=!0,l()}function nr(){Ht=!1,Tt=!1,be="",ye=null,B={targetType:"other",note:"",tickets:""},l()}function cf(){const t=ye||{},e=String(t.type||"other").toLowerCase(),n=ue(e),r=Di(e);let i=String(B.targetType||r[0]||"other").toLowerCase();r.includes(i)||(i=r[0]||"other",B.targetType=i);const s=$a(t,i,B.note);return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="bankingMoveDialogTitle">
      <div class="roster-history-dialog manual-ticket-dialog banking-move-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="bankingMoveDialogTitle">Move Banking Entry</h3>
            <p>Move this deposit to a different banking section while preserving a reference to the original event.</p>
          </div>
          <button id="closeBankingMoveDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${be?`<div class="discord-data-error">${a(be)}</div>`:""}

        <div class="manual-ticket-form banking-move-form">
          <div class="banking-move-current-entry">
            <div><strong>Current Type:</strong> ${a(n)}</div>
            <div><strong>Event ID:</strong> ${a(t.eventId||"")}</div>
            <div><strong>Depositor:</strong> ${a(t.displayName||"")}</div>
            <div><strong>Amount:</strong> ${a(_t(t.amount))} \u{1FA99}</div>
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
                    <strong>${a(ue(o))}</strong>
                    <span>${o===e?"Current / restore original values":`${a(String(Mi(t,o)))} tickets`}</span>
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

          <div class="roster-history-muted banking-move-generated-note">${a(s).replace(/\n/g,"<br>")}</div>

          <div class="manual-ticket-actions banking-move-actions">
            <button id="saveBankingMoveButton" class="refresh-discord-button banking-move-submit-button" type="button" ${Tt||i===e?"disabled":""}>${Tt?"MOVING...":i===e?"SELECT A SIDE TO MOVE":"MOVE"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function lf(){var n,r,i,s;if(!Ht)return;(n=document.querySelector("#closeBankingMoveDialogButton"))==null||n.addEventListener("click",()=>nr());function t(o){const c=String(o||"other").toLowerCase(),u=String((ye==null?void 0:ye.type)||"other").toLowerCase(),b=Di(u);B.targetType=b.includes(c)?c:u,B.tickets=String(Mi(ye||{},B.targetType)),l()}document.querySelectorAll("[data-banking-move-target]").forEach(o=>{o.addEventListener("click",()=>t(o.dataset.bankingMoveTarget))}),(r=document.querySelector("#bankingMoveTicketsInput"))==null||r.addEventListener("input",o=>{const c=String(o.target.value||"").replace(/\D/g,"");o.target.value!==c&&(o.target.value=c),B.tickets=c}),(i=document.querySelector("#bankingMoveNoteInput"))==null||i.addEventListener("input",o=>{B.note=o.target.value||"";const c=document.querySelector(".banking-move-generated-note");c&&(c.innerText=$a(ye||{},B.targetType||"other",B.note))}),(s=document.querySelector("#saveBankingMoveButton"))==null||s.addEventListener("click",()=>df());const e=document.querySelector(".roster-history-overlay");e&&e.addEventListener("click",o=>{o.target===e&&nr()})}async function df(){const t=ye;if(!(t!=null&&t.eventId)){be="No banking entry is selected.",l();return}const e=String(t.type||"other").toLowerCase(),n=Di(e),r=String(B.targetType||n[0]||"other").toLowerCase();if(!n.includes(r)||r===e){be="Select one of the side destinations before moving this entry.",l();return}const i=r==="other"?0:Math.floor(Number(String(B.tickets||"").trim()||0));if(!Number.isFinite(i)||i<0){be="Tickets must be zero or greater.",l();return}Tt=!0,be="",l();try{const s=await w("guildsync:move-banking-entry",{event_id:t.eventId,target_type:r,tickets:i,note:B.note||""},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to move banking entry.");nr(),await se({silent:!0}),h("banking-entry-moved",s.message||"Banking entry moved.",{ttlMs:p})}catch(s){Tt=!1,be=k(s),l()}}function uf(){if(!_()){h("banking-history-login-required","Login required to lookup banking history.",{ttlMs:p});return}Wt=!0,lt="",O=[],ee=[],ce="",le=!1,de="",Q=-1,clearTimeout(St),l(),D("bankingHistorySearchInput")}function ff(){Wt=!1,le=!1,de="",clearTimeout(St)}function hf(){if(!Wt)return;const t=document.querySelector("#bankingHistorySearchInput");t&&(t.addEventListener("input",e=>{if(lt=e.target.value||"",Q=-1,ce="",ee=[],!lt.trim()){clearTimeout(St),de="",O=[],le=!1,l(),D("bankingHistorySearchInput");return}clearTimeout(St),St=setTimeout(()=>{pf({keepFocus:!0})},250)}),t.addEventListener("keydown",e=>{if(e.key==="ArrowDown"||e.key==="ArrowUp"){if(O.length===0)return;e.preventDefault();const r=e.key==="ArrowDown"?1:-1;Q=((Q<0?0:Q)+r+O.length)%O.length,l(),D("bankingHistorySearchInput");return}if(e.key!=="Enter")return;e.preventDefault();const n=O[Q>=0?Q:0];n!=null&&n.account_name&&Fs(n.account_name)})),document.querySelectorAll("[data-banking-history-account]").forEach(e=>{e.addEventListener("click",()=>{Fs(e.dataset.bankingHistoryAccount||"")})})}async function pf(t={}){const e=lt.trim();if(!e){de="",O=[],Q=-1,ce="",ee=[],le=!1,l(),t.keepFocus&&D("bankingHistorySearchInput");return}le=!0,de="",O=[],Q=-1,l(),t.keepFocus&&D("bankingHistorySearchInput");try{const n=await w("guildsync:request-banking-history-matches",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search banking history.");O=mf(n.matches),Q=O.length>0?0:-1}catch(n){de=k(n)}finally{le=!1,l(),t.keepFocus&&D("bankingHistorySearchInput")}}async function Fs(t){const e=String(t||"").trim();if(!!e){clearTimeout(St),ce=e,lt=e,O=[],ee=[],le=!0,de="",l();try{const n=await w("guildsync:request-banking-history-records",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load banking history.");ee=gf(n.records)}catch(n){de=k(n)}finally{le=!1,l()}}}function mf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s;return{account_name:String(e.account_name||e.accountName||"").trim(),record_count:Number((r=(n=e.record_count)!=null?n:e.recordCount)!=null?r:0)||0,last_event_timestamp:(s=(i=e.last_event_timestamp)!=null?i:e.lastEventTimestamp)!=null?s:""}}).filter(e=>e.account_name):[]}function gf(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,s,o,c,u,b,v,m,y,M,z,Le,pe,Jt,Qt,Xt,Zt;return{event_id:String(e.event_id||e.eventId||"").trim(),transaction_type:String(e.transaction_type||e.transactionType||e.type||"").trim(),event_timestamp:(i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:"",deposit_amount:(c=(o=(s=e.deposit_amount)!=null?s:e.depositAmount)!=null?o:e.amount)!=null?c:"",ticket_quantity:(v=(b=(u=e.ticket_quantity)!=null?u:e.ticketQuantity)!=null?b:e.ticketAmount)!=null?v:"",purchased_tickets:(z=(M=(y=(m=e.purchasedTickets)!=null?m:e.ticket_quantity)!=null?y:e.ticketQuantity)!=null?M:e.ticketAmount)!=null?z:0,bonus_tickets:(Le=e.bonusTickets)!=null?Le:0,bonus_percent:(pe=e.bonusPercent)!=null?pe:0,bonus_enabled:e.bonusEnabled===!0,total_tickets:(Zt=(Xt=(Qt=(Jt=e.totalTickets)!=null?Jt:e.ticket_quantity)!=null?Qt:e.ticketQuantity)!=null?Xt:e.ticketAmount)!=null?Zt:0,note:String(e.note||"").trim()}}).sort((e,n)=>{const r=Number(e.event_timestamp)||0,i=Number(n.event_timestamp)||0;return r!==i?r-i:String(e.event_id).localeCompare(String(n.event_id),void 0,{numeric:!0})}):[]}function bf(t){const e=Number(t);if(!e)return"";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t);const r=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0"),s=String(n.getFullYear()),o=String(n.getHours()).padStart(2,"0"),c=String(n.getMinutes()).padStart(2,"0"),u=String(n.getSeconds()).padStart(2,"0");return`${r}/${i}/${s} ${o}:${c}:${u}`}function yf(t){const e=String(t||"").trim().toLowerCase();return e==="monthly"?"50/50":e==="biweekly"?"Bi-Weekly":e==="other"?"Other":e?e.replace(/\b\w/g,n=>n.toUpperCase()):""}function kf(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":_t(e)}function qr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":te(e)}function Ra(){if($!=="more")return;lf(),hf(),document.querySelectorAll("[data-bank-entry-move]").forEach(c=>{c.addEventListener("click",()=>af(c.dataset.bankEntryMove||""))}),document.querySelectorAll("[data-bank-section]").forEach(c=>{c.addEventListener("click",()=>{R=c.dataset.bankSection||"biweekly",l()})}),document.querySelectorAll("[data-bank-export-section]").forEach(c=>{c.addEventListener("click",()=>{ne=(c.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",st=!0,l()})}),document.querySelectorAll("[data-bank-period-move]").forEach(c=>{c.addEventListener("click",()=>{wf(c.dataset.bankPeriodMove||""),l()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{st=!1,l()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>vf());const n=document.querySelector(".bank-export-overlay");n&&n.addEventListener("click",c=>{c.target===n&&(st=!1,l())});const r=document.querySelector("#openBankingHistoryButton");r&&r.addEventListener("click",()=>uf());const i=document.querySelector("#openManualBiweeklyTicketButton");i&&i.addEventListener("click",async()=>{if(!_()){h("manual-ticket-login-required","Login required to add manual entries.",{ttlMs:p});return}_e=!0,U="",jt=E.accountName||"",Z=!1,I=-1,j.length===0&&(d==null?void 0:d.connected)&&_()&&await zt({silent:!0}),l()});const s=document.querySelector("#checkoutDepositMailButton");s&&s.addEventListener("click",()=>{s.dataset.depositMailAction==="checkout"&&s.getAttribute("aria-disabled")!=="true"&&xf()});const o=document.querySelector("#refreshBankingDataButton");o&&o.addEventListener("click",()=>{if(!_()){h("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:p});return}Ca({key:"banking"})})}function Da(t){const e=Yt(ne),n=[["Guildie Name","Deposit Amount","Purchased Tickets",...e?["Bonus %","Bonus Tickets"]:[],"Total Tickets","Note"]];for(const r of t)n.push([r.displayName||"",String(Bi(r,ne)),String(r.purchasedTickets),...e?[`${r.bonusPercent}%`,String(r.bonusTickets)]:[],String(r.totalTickets),r.note||""]);return n.map(r=>r.map(gr).join("	")).join(`
`)}function gr(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function br(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly","readonly"),n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.width="1px",n.style.height="1px",n.style.opacity="0",n.style.pointerEvents="none",n.style.zIndex="-1",document.body.appendChild(n),n.focus(),n.select(),n.setSelectionRange(0,n.value.length);let r=!1;try{r=document.execCommand("copy")}finally{document.body.removeChild(n)}return r}async function vf(){const t=oi(ne),e=Da(t);if(await br(e)){h("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#bankingExportTsv");r&&(r.focus(),r.select()),h("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:p})}function oi(t){return G.filter(e=>e.type===t).filter(e=>Sf(t,e)).sort((e,n)=>(Number(e.time)||0)-(Number(n.time)||0))}function Sf(t,e){if(t==="other")return!0;const n=Number(e==null?void 0:e.time)||0;if(n<=0)return!1;const r=Ti(t);return n>=r.salesStart&&n<=r.salesEnd}function rr(t){return Number(Jr[t])||0}function wf(t){if(R!=="biweekly"&&R!=="monthly")return;const e=rr(R);if(t==="previous"){Jr[R]=e-1;return}t==="next"&&e<0&&(Jr[R]=e+1)}function Ti(t){const e=Math.floor(Date.now()/1e3);if(t==="monthly"){const i=_f(e,rr(t));return{salesStart:Ta(i)+1,salesEnd:i,raffleTime:i+Xn}}const n=je;let r=Ma(e);return r+=rr(t)*n,{salesStart:r-n+1,salesEnd:r,raffleTime:r+Xn}}function Ma(t){const e=je;let n=$l;for(;n-e>t;)n-=e;for(;n<t;)n+=e;return n}function _f(t,e=0){let n=Af(t),r=Number(e)||0;for(;r<0;)n=Ta(n),r+=1;for(;r>0;)n=Lf(n),r-=1;return n}function Af(t){let e=Ma(t);for(;!Ni(e);)e+=je;return e}function Ta(t){let e=t-je;for(;!Ni(e);)e-=je;return e}function Lf(t){let e=t+je;for(;!Ni(e);)e+=je;return e}function Ni(t){const e=t+Xn,n=t+je+Xn;return Ps(e)!==Ps(n)}function Ps(t){var s,o;const e=new Date(Number(t||0)*1e3);if(Number.isNaN(e.getTime()))return"";const n=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit"}).formatToParts(e),r=((s=n.find(c=>c.type==="year"))==null?void 0:s.value)||"",i=((o=n.find(c=>c.type==="month"))==null?void 0:o.value)||"";return`${r}-${i}`}function Ef(t=R){const e=String(t||"").toLowerCase();return e!=="monthly"&&e!=="biweekly"?0:"auto"}function Bi(t={},e=R){const n=Number(t.amount)||0;if(!Ef(e))return n;const r=Math.abs(Math.trunc(n))%10,i=r===1||r===3?r:0;return i>0&&n>i?n-i:n}function $f(t,e=R){return t.reduce((n,r)=>(n.amount+=Bi(r,e),n.purchased+=Number(r.purchasedTickets)||0,n.bonus+=Number(r.bonusTickets)||0,n.tickets+=Number(r.totalTickets)||0,n),{amount:0,purchased:0,bonus:0,tickets:0})}function Na(t){const e=Math.ceil((Number(t)||0)/2);return e<=0?0:Math.ceil(e/2e5)*2e5}function Rf(t){const e=Na(t);return e>0?e/2e5:0}function Yt(t){var n;if(t!=="biweekly"&&t!=="monthly")return!1;const{salesEnd:e}=Ti(t);return((n=Mt.find(r=>r.type===t&&r.salesEnd===e))==null?void 0:n.enabled)===!0}function Df(t,e=!0,n=Yt(R)){return`
    <tr>
      <td>${a(t.note||t.eventId||"")}</td>
      <td>${a(Vn(t.time))}</td>
      <td>${a(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${a(_t(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td>${a(te(t.purchasedTickets))}</td>${n?`<td>${a(te(t.bonusPercent))}%</td><td>${a(te(t.bonusTickets))}</td>`:""}<td><strong class="bank-ticket-amount">${a(te(t.totalTickets))}</strong></td>`:""}
      <td><button class="bank-entry-move-button" type="button" data-bank-entry-move="${f(t.eventId||"")}">Move</button></td>
    </tr>
  `}function Mf(t=!0,e=!1){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?e?"9":"7":"5"}">No ${a(ue(R))} deposits found for this ${R==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function ue(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function Vn(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function _t(t){return(Number(t)||0).toLocaleString()}function te(t){return(Number(t)||0).toLocaleString()}function Kt(t){return Array.isArray(t)?t.map(e=>{var r,i,s,o,c,u,b,v,m,y,M,z,Le,pe,Jt,Qt,Xt,Zt,Ui,Vi,Hi,Wi,ji,zi,Yi,Ki,Ji,Qi,Xi,Zi,es,ts,ns,rs,is,ss,os,as,cs,ls,ds,us,fs,hs,ps,ms,gs;const n=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:n==="monthly"||n==="biweekly"||n==="other"?n:"other",eventId:String((i=(r=e==null?void 0:e.eventId)!=null?r:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((o=(s=e==null?void 0:e.time)!=null?s:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((u=(c=e==null?void 0:e.displayName)!=null?c:e==null?void 0:e.display_name)!=null?u:"").trim(),amount:Number((b=e==null?void 0:e.amount)!=null?b:0)||0,ticketAmount:Number((m=(v=e==null?void 0:e.ticketAmount)!=null?v:e==null?void 0:e.ticket_amount)!=null?m:0)||0,purchasedTickets:Number((M=(y=e==null?void 0:e.purchasedTickets)!=null?y:e==null?void 0:e.ticketAmount)!=null?M:0)||0,bonusTickets:Number((z=e==null?void 0:e.bonusTickets)!=null?z:0)||0,bonusPercent:Number((Le=e==null?void 0:e.bonusPercent)!=null?Le:0)||0,bonusEnabled:(e==null?void 0:e.bonusEnabled)===!0,totalTickets:Number((Jt=(pe=e==null?void 0:e.totalTickets)!=null?pe:e==null?void 0:e.ticketAmount)!=null?Jt:0)||0,note:String((Qt=e==null?void 0:e.note)!=null?Qt:"").trim(),dataSource:String((Zt=(Xt=e==null?void 0:e.dataSource)!=null?Xt:e==null?void 0:e.data_source)!=null?Zt:"").trim(),emailRequested:Boolean((Ui=e==null?void 0:e.emailRequested)!=null?Ui:e==null?void 0:e.email_requested),mailStatus:String((Hi=(Vi=e==null?void 0:e.mailStatus)!=null?Vi:e==null?void 0:e.mail_status)!=null?Hi:"").trim(),mailRequestId:String((ji=(Wi=e==null?void 0:e.mailRequestId)!=null?Wi:e==null?void 0:e.mail_request_id)!=null?ji:"").trim(),mailBatchId:String((Yi=(zi=e==null?void 0:e.mailBatchId)!=null?zi:e==null?void 0:e.mail_batch_id)!=null?Yi:"").trim(),checkedOutBy:String((Ji=(Ki=e==null?void 0:e.checkedOutBy)!=null?Ki:e==null?void 0:e.checked_out_by)!=null?Ji:"").trim(),checkedOutAt:String((Xi=(Qi=e==null?void 0:e.checkedOutAt)!=null?Qi:e==null?void 0:e.checked_out_at)!=null?Xi:"").trim(),checkoutExpiresAt:String((es=(Zi=e==null?void 0:e.checkoutExpiresAt)!=null?Zi:e==null?void 0:e.checkout_expires_at)!=null?es:"").trim(),writtenToEsoAt:String((ns=(ts=e==null?void 0:e.writtenToEsoAt)!=null?ts:e==null?void 0:e.written_to_eso_at)!=null?ns:"").trim(),sentAt:String((is=(rs=e==null?void 0:e.sentAt)!=null?rs:e==null?void 0:e.sent_at)!=null?is:"").trim(),failedReason:String((os=(ss=e==null?void 0:e.failedReason)!=null?ss:e==null?void 0:e.failed_reason)!=null?os:"").trim(),recipient:String((ds=(ls=(cs=(as=e==null?void 0:e.recipient)!=null?as:e==null?void 0:e.account_name)!=null?cs:e==null?void 0:e.displayName)!=null?ls:e==null?void 0:e.display_name)!=null?ds:"").trim(),subject:String((hs=(fs=(us=e==null?void 0:e.subject)!=null?us:e==null?void 0:e.mailSubject)!=null?fs:e==null?void 0:e.mail_subject)!=null?hs:"").trim(),body:String((gs=(ms=(ps=e==null?void 0:e.body)!=null?ps:e==null?void 0:e.mailBody)!=null?ms:e==null?void 0:e.mail_body)!=null?gs:"").trim()}}):[]}function Tf(t){const e=new Map;for(const n of G)n.eventId&&e.set(n.eventId,n);for(const n of t)!n.eventId||e.set(n.eventId,n);G=Array.from(e.values()).sort((n,r)=>(Number(r.time)||0)-(Number(n.time)||0))}function Ba(){wo=new Date().toISOString()}async function Nf(t={}){!(t!=null&&t.ok)||(G=Kt(t.entries),t.bonusSettings&&(X=t.bonusSettings),Array.isArray(t.bonusRaffles)&&(Mt=t.bonusRaffles),Ba(),$==="more"&&l(),h("banking-data-updated",`Banking data updated. Loaded ${G.length} deposit record${G.length===1?"":"s"}.`,{ttlMs:p}))}async function se(t={}){const e=Boolean(t.silent),n=Boolean(t.background);if(!(d!=null&&d.connected)){e||h("banking-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}n||(We=!0,l());try{const r=await w("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");G=Kt(r.entries),r.bonusSettings&&(X=r.bonusSettings),Array.isArray(r.bonusRaffles)&&(Mt=r.bonusRaffles),Ba(),e||h("banking-data",`Loaded ${G.length} banking deposit record${G.length===1?"":"s"}.`,{ttlMs:p})}catch(r){e||h("banking-data-error",k(r),{ttlMs:p})}finally{n||(We=!1),l()}}async function Gs(){!(d!=null&&d.connected)||!_()||We||(await se({silent:!0,background:!0}),mr()<=0&&Rn()>0&&(ge.running?l():Ff("availability-refresh")))}function Bf(){pt&&clearInterval(pt),Gs(),pt=window.setInterval(Gs,_l)}function Cf(){pt&&(clearInterval(pt),pt=null)}async function If(t={}){if(!!_()){if(!(d!=null&&d.connected)){h("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:p});return}try{const e=await ml(t);if(!(e!=null&&e.ok))return;const n=Array.isArray(e.ackEntries)?e.ackEntries:[];if(n.length===0)return;const r=await w("guildsync:mark-deposit-mail-sent",{mail_ack:n,mail_request_ids:n.map(o=>(o==null?void 0:o.mail_request_id)||(o==null?void 0:o.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(r.mail_request_ids)?r.mail_request_ids:Array.isArray(r.mailRequestIds)?r.mailRequestIds:[];if(i.length===0){h("deposit-mail-ack-none",r.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:p});return}const s=await gl(i);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");h("deposit-mail-ack-sent",s.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:p}),await se({silent:!0})}catch(e){h("deposit-mail-ack-error",k(e),{ttlMs:p})}}}async function Of(){if(!Tr){Tr=!0;try{const t=await bl();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&h("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:p})}catch(t){h("deposit-mail-ack-cleanup-error",k(t),{ttlMs:p})}finally{Tr=!1}}}async function Ca(t={}){var e,n;if(!!_()){if(!(d!=null&&d.connected)){h("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}We=!0,l();try{const r=await cl(t);if(!(r!=null&&r.ok)){h("banking-data-pending",(r==null?void 0:r.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:p});return}const i=Kt((e=r==null?void 0:r.data)==null?void 0:e.entries);Tf(i);const s=new Date().toISOString(),o={local_upload_id:qa(),authenticated_username:ie(),authenticated_discord_user_id:((n=g==null?void 0:g.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:s,data:r.data||{}};try{await Fa(o)}catch(c){throw Uf(o),c}await se({silent:!0})}catch(r){h("banking-data-error",k(r),{ttlMs:p})}finally{We=!1,l()}}}function Ia(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Dn(){try{const t=window.localStorage.getItem(go),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Oa(t){window.localStorage.setItem(go,JSON.stringify(Array.isArray(t)?t:[]))}function qf(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||Ia()),n=Dn().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);n.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),Oa(n)}function Us(t){const e=String(t||"").trim();if(!e)return;const n=Dn().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);Oa(n)}async function xf(){if(!_()){h("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:p});return}if(!(d!=null&&d.connected)){h("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:p});return}const t=Dn(),e=mr();if(t.length>0&&e<=0){await Ct();return}l();try{const n=await w("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail checkout request.");const r=Kt(n.records);if(r.length===0){h("deposit-mail-none",n.message||"No unsent deposit mail is available.",{ttlMs:p}),await se({silent:!0});return}const i={mail_batch_id:n.mail_batch_id||n.mailBatchId||Ia(),checked_out_by:n.checked_out_by||n.checkedOutBy||ie(),checked_out_at:new Date().toISOString(),records:r};qf(i),await Ct()}catch(n){h("deposit-mail-error",k(n),{ttlMs:p})}finally{l()}}function Ff(t=""){mt||Gn||!_()||Rn()<=0||ge.running||(mt=window.setTimeout(()=>{mt=null,Ct()},100))}async function Ct(){if(mt&&(window.clearTimeout(mt),mt=null),Gn||!_())return;const t=Dn();if(t.length!==0){if(await ai({silent:!0}),ge.running){h("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:p}),l();return}Gn=!0,l();try{for(const e of t){const n=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),r=Kt(e==null?void 0:e.records);if(r.length===0){Us(n);continue}const i=await pl(r);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(d!=null&&d.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const s=await w("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:n,event_ids:i.eventIds||r.map(o=>o.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend did not confirm deposit mail was marked written_to_eso.");Us(n),h("deposit-mail-written",i.message||`Wrote ${r.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:p})}await se({silent:!0})}catch(e){h("deposit-mail-write-error",k(e),{ttlMs:p})}finally{Gn=!1,l()}}}async function ai(t={}){try{const e=Boolean(ge.running),n=await hl();ge={running:Boolean(n==null?void 0:n.running),message:String((n==null?void 0:n.message)||"")},ge.running||await Of(),e&&!ge.running&&(h("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:p}),await Ct()),e!==ge.running&&l()}catch(e){t.silent||h("eso-status-error",k(e),{ttlMs:p})}}function Pf(){ht&&clearInterval(ht),ai({silent:!0}).then(()=>{!ge.running&&Rn()>0&&Ct()}),ht=window.setInterval(()=>ai({silent:!0}),wl)}function Gf(){ht&&(clearInterval(ht),ht=null)}function qa(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Ci(){try{const t=window.localStorage.getItem(mo),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function xa(t){window.localStorage.setItem(mo,JSON.stringify(Array.isArray(t)?t:[]))}function Uf(t){const e=String((t==null?void 0:t.local_upload_id)||qa()),n=Ci().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),xa(n),h("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Vf(t){const e=Ci().filter(n=>(n==null?void 0:n.local_upload_id)!==t);xa(e)}async function Hf(){if(Rr||!(d!=null&&d.connected)||!_())return;const t=Ci();if(t.length!==0){Rr=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!_())return;await Fa(e),Vf(e.local_upload_id)}}catch(e){h("banking-data-pending-error",`Pending banking upload retry failed: ${k(e)}`,{ttlMs:p})}finally{Rr=!1}}}async function Fa(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await w("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const n=await ll(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return h("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:p}),e}function Pa(){if($!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>Wf());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{$t=!0,we="",l(),D("discordHistorySearchInput")});const n=document.querySelector("#discordMemberSearch");n&&n.addEventListener("input",o=>{zn=o.target.value||"",jr=o.target.selectionStart,zr=o.target.selectionEnd,l({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Jf(o.dataset.discordSortColumn||"username")})});const r=document.querySelector("#discordRoleFilter");r&&r.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(gt.add(c),l())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRoleFilter||"";gt.delete(c),l()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(bt.add(c),l())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeDiscordLinkStatusFilter||"";bt.delete(c),l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>na(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{zn="",gt.clear(),bt.clear(),l()})}async function Wf(){var t,e;if(!(d!=null&&d.connected)){h("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:p});return}jn=!0,l(),h("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const n=await w("guildsync:request-discord-data-refresh",{requested_by:((t=g==null?void 0:g.user)==null?void 0:t.display_name)||((e=g==null?void 0:g.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to request Discord data refresh.");h("discord-refresh-requested",n.message||"Discord data refresh completed.",{ttlMs:p}),await Ii({silent:!0})}catch(n){h("discord-refresh-error",k(n),{ttlMs:p})}finally{jn=!1,l()}}async function jf(){if(!(d!=null&&d.connected))return;const t=await w("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(dr=t.value||null)}async function zf(t={}){if(!!(t!=null&&t.ok)){P=Oi(t.members),lr=qi(t.roles),t.last_refresh&&(dr=t.last_refresh);try{await jf()}catch{}$==="discord-members"&&l(),h("discord-data-updated",`Discord data updated. Loaded ${P.length} member record${P.length===1?"":"s"}.`,{ttlMs:p})}}async function Ii(t={}){const e=Boolean(t.silent);if(!(d!=null&&d.connected)){h("discord-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}hn=!0,l();try{const[n,r]=await Promise.all([w("guildsync:request-discord-data-date",{}),w("guildsync:request-discord-member-dataJSON",{})]);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord refresh date.");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord member data.");dr=n.value||null,P=Oi(r.members),lr=qi(r.roles),e||h("discord-data",`Loaded ${P.length} Discord member record${P.length===1?"":"s"}.`,{ttlMs:p})}catch(n){h("discord-data-error",k(n),{ttlMs:p})}finally{hn=!1,l()}}function w(t,e={},n=3e4){return new Promise((r,i)=>{if(!(d!=null&&d.connected)){i(new Error("GuildSync websocket is not connected."));return}let s=!1;const o=window.setTimeout(()=>{s||(s=!0,i(new Error(`${t} timed out.`)))},n);d.emit(t,e,c=>{s||(s=!0,window.clearTimeout(o),r(c))})})}function Oi(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(Ga).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,n)=>yn(e).localeCompare(yn(n),void 0,{sensitivity:"base"})):[]}function qi(t){if(!Array.isArray(t))return[];const e=new Map;for(const n of t){const r=Ga(n);if(!r)continue;const i=r.role_id||un(r.role_name);i&&!e.has(i)&&e.set(i,r)}return Array.from(e.values()).sort((n,r)=>String(n.role_name||"").localeCompare(String(r.role_name||""),void 0,{sensitivity:"base"}))}function Ga(t){var i,s;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),n=String(t.role_name||t.name||"Unnamed Role").trim(),r=(s=(i=t.role_color)!=null?i:t.color)!=null?s:null;return{role_id:e,role_name:n||"Unnamed Role",role_color:r}}function Yf(){const t=zn.trim().toLowerCase(),e=Array.from(gt),n=P.filter(r=>{if(t&&![r.username,r.global_name,r.server_nickname,r.discord_id,...r.roles.map(s=>s.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(r.roles.map(s=>s.role_name));if(!e.every(s=>i.has(s)))return!1}return!!No(bt,id(r))});return Kf(n)}function Kf(t){const e=Xe==="desc"?-1:1;return[...t].sort((n,r)=>{const i=Vs(n,pn),s=Vs(r,pn),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:yn(n).localeCompare(yn(r),void 0,{sensitivity:"base",numeric:!0})})}function Vs(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(n=>n.role_name||"").filter(Boolean).sort((n,r)=>n.localeCompare(r,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function Jf(t){const n=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";pn===n?Xe=Xe==="asc"?"desc":"asc":(pn=n,Xe="asc"),l()}function Cn(t,e){const n=pn===t,r=Xe==="asc"?"ascending":"descending",i=n?Xe==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${n?r:"none"}">
      <button
        class="discord-sort-header${n?" active":""}"
        type="button"
        data-discord-sort-column="${f(t)}"
        title="Sort ${f(e)} ${n&&Xe==="asc"?"descending":"ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function Qf(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(jr)?jr:t.value.length,n=Number.isInteger(zr)?zr:e;t.setSelectionRange(e,n)}}function Xf(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(Yr)?Yr:t.value.length,n=Number.isInteger(Kr)?Kr:e;t.setSelectionRange(e,n)}}function Zf(){const t=new Set;for(const e of P)for(const n of e.roles)n.role_name&&t.add(n.role_name);return Array.from(t).sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function eh(t){const e=oh(t),n=yn(t),r=t.roles||[];return`
    <tr data-discord-user-id="${f(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${f(e)}" alt="${f(n)}" />`:`<span>${a(Ja(n))}</span>`}
          </div>
          <span>${a(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${a(t.global_name||"")}</td>
      <td>${a(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${r.length>0?r.map(i=>nh(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${ea({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function th(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${a(hn?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function nh(t){const e=yr(t.role_color),n=Pi(e),r=Fi(e,n);return`
    <span
      class="discord-role-badge"
      title="${f(t.role_name)}"
      style="${r}"
    >${a(t.role_name)}</span>
  `}function rh(t){const e=xi(t),n=yr(e==null?void 0:e.role_color),r=Pi(n),i=Fi(n,r);return`
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
  `}function ih(t){const e=sh(t);for(const n of e){const r=xi(n);if(r)return r}return null}function sh(t){const e=String(t||"").trim();if(!e)return[];const n=un(e),i={associate:["Associates","Associate"],associates:["Associates","Associate"],soldier:["Soldiers","Soldier"],soldiers:["Soldiers","Soldier"],capo:["Capo"],capos:["Capo","Capos"],caporegime:["CapoRegime","Capo Regime","Capo Regimes"],consiglieres:["Consigliere","Consiglieres"],consigliere:["Consigliere","Consiglieres"]}[n]||[e];return Array.from(new Set([e,...i].filter(Boolean)))}function un(t){return String(t||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function xi(t){const e=un(t);if(!e)return null;const n=lr.find(r=>un(r.role_name)===e);if(n)return n;for(const r of P){const i=r.roles.find(s=>un(s.role_name)===e);if(i)return i}return null}function yr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function Fi(t,e){return[`--role-fill-top: ${Hs(t,"#ffffff",.16)}`,`--role-fill-bottom: ${Hs(t,"#000000",.1)}`,`--role-fill-glow: ${Ws(t,.28)}`,`--role-fill-edge: ${Ws(t,.46)}`,`color: ${e}`].join("; ")}function Hs(t,e,n){const r=In(t)||In("#64748b"),i=In(e)||In("#ffffff"),s=Math.max(0,Math.min(1,Number(n)||0)),o=Math.round(r.red+(i.red-r.red)*s),c=Math.round(r.green+(i.green-r.green)*s),u=Math.round(r.blue+(i.blue-r.blue)*s);return`#${xr(o)}${xr(c)}${xr(u)}`}function In(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function xr(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function Ws(t,e){const n=String(t||"#64748b").replace("#",""),r=/^[0-9a-f]{6}$/i.test(n)?n:"64748b",i=parseInt(r.slice(0,2),16),s=parseInt(r.slice(2,4),16),o=parseInt(r.slice(4,6),16);return`rgba(${i}, ${s}, ${o}, ${e})`}function Pi(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const n=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(n*299+r*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function oh(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!n)return"";const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function yn(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function Ua(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Hn(){const t=document.querySelector("#discordArea");if(!!t){if(Mn(!1),_()){const e=g.user||{},n=ie(),r=Ah(e),i=Ja(n);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${r?`<img src="${f(r)}" alt="${f(n)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${a(i)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const s=document.querySelector("#discordAvatarButton");s.addEventListener("contextmenu",o=>{o.preventDefault(),js()}),s.addEventListener("click",()=>{js()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",uh)}}function js(){if(Sn){Mn();return}dh()}function ah(t=Ce){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],n=String((t==null?void 0:t.directory)||"").trim(),r=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const s=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),o=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),c=String((i==null?void 0:i.filePath)||(n?`${n}\\${o}`:o)).trim(),u=(i==null?void 0:i.enabled)!==!1,b=r&&u,v=`profileFileWatchToggle-${lh(s||o)}`;return`
          <label class="profile-filewatch-item ${u?"enabled":"disabled"}" title="${f(c)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${a(o)}</span>
              <span class="profile-filewatch-state">${b?"Watching":u?"On":"Off"}</span>
            </span>
            <input
              id="${f(v)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${f(s)}"
              ${u?"checked":""}
              aria-label="Turn file watch ${u?"off":"on"} for ${f(o)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function Gi(){var r,i,s;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=ie(),n=((r=g.user)==null?void 0:r.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${a(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${a(Lh(n))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${a(cr)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${Ce!=null&&Ce.watching?"Active":"Stopped"}</span>
        </div>
        ${ah()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(i=document.querySelector("#discordLogoutButton"))==null||i.addEventListener("click",fh),(s=document.querySelector("#associateTicketReportButton"))==null||s.addEventListener("click",()=>{Mn(!1),qo()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",ch)})}async function Va(){try{Ce=await ar(),Sn&&Gi()}catch(t){h("file-watcher-error",k(t),{ttlMs:p})}}async function ch(t){var r;const e=t.currentTarget,n=String(((r=e==null?void 0:e.dataset)==null?void 0:r.filewatchKey)||"").trim();if(!!n)try{e.disabled=!0,Ce=await al(n,e.checked),await At({silent:!0}),Sn&&Gi()}catch(i){h("file-watcher-error",k(i),{ttlMs:p}),await Va()}}function lh(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function dh(){const t=document.querySelector("#discordProfileMenu");!t||(Gi(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),Sn=!0,Va(),setTimeout(()=>{window.addEventListener("click",Ha),window.addEventListener("keydown",Wa)},0))}function Mn(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),Sn=!1,t&&(window.removeEventListener("click",Ha),window.removeEventListener("keydown",Wa))}function Ha(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&Mn()}function Wa(t){t.key==="Escape"&&Mn()}async function uh(){try{h("auth","Opening Discord login...",{ttlMs:p});const t=await nl();t!=null&&t.status_message&&h("auth",t.status_message,{ttlMs:p}),Ge()}catch(t){h("auth-error",k(t),{ttlMs:p}),Ge()}}async function fh(){try{g=await il(),h("auth",g.status_message||"Logged out.",{ttlMs:p}),_o(),fn(),await At()}catch(t){h("auth-error",k(t),{ttlMs:p}),Ge()}}function fn(){const t=g.socket_url||"https://guildsync.perdues.me";hh(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};g!=null&&g.token&&(e.auth={token:g.token}),d=Fn(t,e),d.on("connect",()=>{Ge(),ja(),$==="discord-members"&&Ii({silent:!0}),$==="eso-members"&&zt({silent:!0}),($==="more"||$==="settings"&&!X)&&se({silent:!0}),Hf(),Ct(),Pf(),Bf(),Pu(),Hu(),ph()}),d.on("connect_error",()=>{Ge(),ir()}),d.on("disconnect",()=>{Ge(),ir(),Gf(),Cf()}),d.on("guildsync:version-status",n=>{mh(n)}),d.on("guildsync:discord-member-data-updated",n=>{zf(n)}),d.on("guildsync:banking-data-updated",n=>{Nf(n)}),d.on("guildsync:roster-data-updated",n=>{Ou(n)}),d.on("guildsync:member-links-updated",(n={})=>{Array.isArray(n.links)&&(L=n.links,($==="discord-members"||$==="eso-members"||$==="settings"||ze)&&l())}),d.on("guildsync:discord-refresh-status",(n={})=>{const r=String(n.message||"").trim();r&&h("discord-refresh-status",r,{ttlMs:p})})}function hh(t=!0){ir(),d&&(d.disconnect(),d=null),t&&Ge()}function ja(){!(d!=null&&d.connected)||d.emit("guildsync:client-version",{version:cr,platform:kr(),client_type:"web"})}function ph(){ir(),Pn=window.setInterval(()=>{ja()},Sl)}function ir(){Pn&&(window.clearInterval(Pn),Pn=null)}function mh(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",n=t.download&&typeof t.download=="object"?t.download:{};Ee={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||n.url||"").trim(),fileName:String(t.download_file_name||n.file_name||"").trim(),platformLabel:String(n.label||t.platform||kr()).trim()},h("version",`GuildSync is out of date. Current version: ${cr}. Latest version: ${e}.`),zs();return}Ee={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},zs(),vr("version")}}function kr(){const t=String(navigator.userAgent||"").toLowerCase(),n=`${String(navigator.platform||"").toLowerCase()} ${t}`;return n.includes("mac")?"macos":n.includes("linux")?"linux":"windows"}function zs(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!Ee.updateRequired||!Ee.downloadUrl){t.innerHTML="";return}const e=Ee.platformLabel||"Desktop",n=Ee.latestVersion||"latest",r=Ee.fileName||"GuildSync client download";t.innerHTML=`
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
      <span class="desktop-client-download-caret" aria-hidden="true">\u25BC</span>
    </button>
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{gh()})}function gh(){const t=String(Ee.downloadUrl||"").trim();if(!t){h("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:p});return}fl(t)}function h(t,e,n={}){const r=String(t||"").trim(),i=String(e||"").trim();if(!(!r||!i)){if(Ue.set(r,i),Ke.has(r)&&(window.clearTimeout(Ke.get(r)),Ke.delete(r)),n.ttlMs&&Number(n.ttlMs)>0){const s=window.setTimeout(()=>{vr(r)},Number(n.ttlMs));Ke.set(r,s)}It()}}function vr(t){const e=String(t||"").trim();if(!!e){if(Ue.delete(e),Ke.has(e)&&(window.clearTimeout(Ke.get(e)),Ke.delete(e)),C===e){_r(()=>{C="",It()});return}It()}}function It(){const t=Sr();if(t.length===0){ot?_r(kn):kn();return}!ot&&!at&&wr(t[0])}function Sr(){return Array.from(Ue.keys())}function za(){const t=Sr();if(t.length===0)return"";if(!C)return t[0];const e=t.indexOf(C);return e<0?t[0]:t[(e+1)%t.length]}function wr(t){const e=document.querySelector("#statusMessageTrack");if(!e||!Ue.has(t)){kn();return}Ar();const n=Ue.get(t);C=t,ot=!0,at=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=n,e.style.setProperty("--message-fade-duration",`${ko}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",at=!1,bh()},{once:!0})})}function bh(){const t=Sr();if(!C||!Ue.has(C)){It();return}if(t.length<=1){Ys(!1);return}Ys(!0)}function Ys(t){const e=document.querySelector("#statusMessageViewport"),n=document.querySelector("#statusMessageTrack");if(!e||!n)return;const r=Math.max(0,n.scrollWidth-e.clientWidth);if(r<=0){t&&vn(()=>{_r(()=>{const i=za();C="",i?wr(i):kn()})},mi);return}vn(()=>{Ya(r,t)},vo)}function Ya(t,e){const n=document.querySelector("#statusMessageTrack");if(!n||!C||!Ue.has(C))return;const r=Math.max(4,Math.ceil(t/Ll));n.style.setProperty("--long-scroll-distance",`${t}px`),n.style.setProperty("--long-scroll-duration",`${r}s`),n.classList.add("long-scroll"),n.addEventListener("animationend",()=>{if(n.classList.remove("long-scroll"),n.style.transform=`translateX(-${t}px) translateY(-50%)`,e){vn(()=>{_r(()=>{const i=za();C="",i?wr(i):kn()})},mi);return}vn(()=>{yh()},Al)},{once:!0})}function yh(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!C||!Ue.has(C))return;if(Sr().length!==1){It();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const r=Math.max(0,e.scrollWidth-t.clientWidth);r<=0||vn(()=>{Ya(r,!1)},vo)}function _r(t){const e=document.querySelector("#statusMessageTrack");if(Ar(),!e||!ot){typeof t=="function"&&t();return}at=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${ko}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",ot=!1,at=!1,typeof t=="function"&&t()},{once:!0})}function kn(){const t=document.querySelector("#statusMessageTrack");Ar(),C="",ot=!1,at=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function vn(t,e){const n=window.setTimeout(()=>{ln=ln.filter(r=>r!==n),t()},e);ln.push(n)}function Ar(){for(const t of ln)window.clearTimeout(t);ln=[]}function Ka(){if(!ot||at||!C)return;const t=C;Ar(),wr(t)}function Ge(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(d!=null&&d.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!_()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${ie()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${ie()}`)}}async function At(t={}){try{if(_()){const e=await sl();Ce=e,!t.silent&&(e==null?void 0:e.message)&&h(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:p});return}Ce=await ol(),vr("file-watcher")}catch(e){h("file-watcher-error",k(e),{ttlMs:p})}}function an(t,e=null){const n="[GuildSync File Watcher]";if(e){console.log(`${n} ${t}`,e);return}console.log(`${n} ${t}`)}function kh(t={}){if(!_()){an("SavedVariables change ignored because the user is not authenticated.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",n=e.toLowerCase(),r=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=String(t.filePath||"").trim(),o=r?`${r} saved variables (${i})`:i;an(`SavedVariables change detected: ${i}${s?` (${s})`:""}. Key: ${n}.`,t),h(`saved-vars-file-updated-${e}`,`${o} has been updated.`,{ttlMs:p}),n==="banking"&&(an(`Processing banking SavedVariables update from ${i}.`),vh(t)),n==="roster"&&(an(`Processing roster SavedVariables update from ${i}.`),Sh(t)),n==="applications"&&(an(`Processing applications SavedVariables update from ${i}.`),zu(t))}async function vh(t={}){await If(t),await Ca(t)}async function Sh(t={}){await qu(t)}function wh(t){!_()||h("file-watcher-error",k(t),{ttlMs:p})}function _h(){tn("guildsync-savedvars-file-modified",kh),tn("guildsync-file-watcher-error",wh),tn("guildsync-login-complete",async t=>{g=t||{logged_in:!1,allowed:!1},Hn(),fn(),await At(),h("auth",g.status_message||`Logged in and authorized as ${ie()}.`,{ttlMs:p})}),tn("guildsync-login-denied",async t=>{g={logged_in:!1,allowed:!1,status_message:""},Hn(),await At(),h("auth",t||"Access denied.",{ttlMs:p}),fn()}),tn("guildsync-login-failed",async t=>{g={logged_in:!1,allowed:!1,status_message:""},Hn(),await At(),h("auth",t||"Login failed.",{ttlMs:p}),fn()})}function _(){return Boolean((g==null?void 0:g.logged_in)&&(g==null?void 0:g.allowed)&&(g==null?void 0:g.token))}function ie(){var t,e;return((t=g.user)==null?void 0:t.display_name)||((e=g.user)==null?void 0:e.username)||"Discord User"}function Ah(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),n=String(t.discord_user_id||"").trim();if(!e||!n)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=128`}function Ja(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function Lh(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Eh(){nn&&(nn.disconnect(),nn=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),n=Math.round(t.getBoundingClientRect().height);nn=new ResizeObserver(r=>{const i=r[0];if(!i)return;const s=Math.round(i.contentRect.width),o=Math.round(i.contentRect.height);s===e&&o===n||(e=s,n=o,Qa(),Ka())}),nn.observe(t)}function Qa(){clearTimeout(ws),ws=setTimeout(async()=>{try{await fo()}catch{}},500)}function k(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function a(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function f(t){return a(t)}_h();Rl();yd();
