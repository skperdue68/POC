(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const Ca="/assets/splash.ea386b6a.png",Ia="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",Oa="/assets/GuildSync-Graphic.9169020d.png",ae=Object.create(null);ae.open="0";ae.close="1";ae.ping="2";ae.pong="3";ae.message="4";ae.upgrade="5";ae.noop="6";const Er=Object.create(null);Object.keys(ae).forEach(t=>{Er[ae[t]]=t});const Dn={type:"error",data:"parser error"},Ms=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Ns=typeof ArrayBuffer=="function",Ts=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Jn=({type:t,data:e},r,n)=>Ms&&e instanceof Blob?r?n(e):es(e,n):Ns&&(e instanceof ArrayBuffer||Ts(e))?r?n(e):es(new Blob([e]),n):n(ae[t]+(e||"")),es=(t,e)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];e("b"+(n||""))},r.readAsDataURL(t)};function ts(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let pn;function xa(t,e){if(Ms&&t.data instanceof Blob)return t.data.arrayBuffer().then(ts).then(e);if(Ns&&(t.data instanceof ArrayBuffer||Ts(t.data)))return e(ts(t.data));Jn(t,!1,r=>{pn||(pn=new TextEncoder),e(pn.encode(r))})}const rs="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Jt=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<rs.length;t++)Jt[rs.charCodeAt(t)]=t;const qa=t=>{let e=t.length*.75,r=t.length,n,i=0,s,o,a,u;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const g=new ArrayBuffer(e),S=new Uint8Array(g);for(n=0;n<r;n+=4)s=Jt[t.charCodeAt(n)],o=Jt[t.charCodeAt(n+1)],a=Jt[t.charCodeAt(n+2)],u=Jt[t.charCodeAt(n+3)],S[i++]=s<<2|o>>4,S[i++]=(o&15)<<4|a>>2,S[i++]=(a&3)<<6|u&63;return g},Fa=typeof ArrayBuffer=="function",Qn=(t,e)=>{if(typeof t!="string")return{type:"message",data:Bs(t,e)};const r=t.charAt(0);return r==="b"?{type:"message",data:Pa(t.substring(1),e)}:Er[r]?t.length>1?{type:Er[r],data:t.substring(1)}:{type:Er[r]}:Dn},Pa=(t,e)=>{if(Fa){const r=qa(t);return Bs(r,e)}else return{base64:!0,data:t}},Bs=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},Cs=String.fromCharCode(30),Ga=(t,e)=>{const r=t.length,n=new Array(r);let i=0;t.forEach((s,o)=>{Jn(s,!1,a=>{n[o]=a,++i===r&&e(n.join(Cs))})})},Ua=(t,e)=>{const r=t.split(Cs),n=[];for(let i=0;i<r.length;i++){const s=Qn(r[i],e);if(n.push(s),s.type==="error")break}return n};function Va(){return new TransformStream({transform(t,e){xa(t,r=>{const n=r.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,n)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(n))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(r)})}})}let gn;function vr(t){return t.reduce((e,r)=>e+r.length,0)}function Sr(t,e){if(t[0].length===e)return t.shift();const r=new Uint8Array(e);let n=0;for(let i=0;i<e;i++)r[i]=t[0][n++],n===t[0].length&&(t.shift(),n=0);return t.length&&n<t[0].length&&(t[0]=t[0].slice(n)),r}function Ha(t,e){gn||(gn=new TextDecoder);const r=[];let n=0,i=-1,s=!1;return new TransformStream({transform(o,a){for(r.push(o);;){if(n===0){if(vr(r)<1)break;const u=Sr(r,1);s=(u[0]&128)===128,i=u[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(vr(r)<2)break;const u=Sr(r,2);i=new DataView(u.buffer,u.byteOffset,u.length).getUint16(0),n=3}else if(n===2){if(vr(r)<8)break;const u=Sr(r,8),g=new DataView(u.buffer,u.byteOffset,u.length),S=g.getUint32(0);if(S>Math.pow(2,53-32)-1){a.enqueue(Dn);break}i=S*Math.pow(2,32)+g.getUint32(4),n=3}else{if(vr(r)<i)break;const u=Sr(r,i);a.enqueue(Qn(s?u:gn.decode(u),e)),n=0}if(i===0||i>t){a.enqueue(Dn);break}}}})}const Is=4;function $(t){if(t)return Wa(t)}function Wa(t){for(var e in $.prototype)t[e]=$.prototype[e];return t}$.prototype.on=$.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};$.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this};$.prototype.off=$.prototype.removeListener=$.prototype.removeAllListeners=$.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var n,i=0;i<r.length;i++)if(n=r[i],n===e||n.fn===e){r.splice(i,1);break}return r.length===0&&delete this._callbacks["$"+t],this};$.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),r=this._callbacks["$"+t],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,i=r.length;n<i;++n)r[n].apply(this,e)}return this};$.prototype.emitReserved=$.prototype.emit;$.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};$.prototype.hasListeners=function(t){return!!this.listeners(t).length};const Kr=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,r)=>r(e,0))(),V=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),ja="arraybuffer";function Os(t,...e){return e.reduce((r,n)=>(t.hasOwnProperty(n)&&(r[n]=t[n]),r),{})}const za=V.setTimeout,Ya=V.clearTimeout;function Jr(t,e){e.useNativeTimers?(t.setTimeoutFn=za.bind(V),t.clearTimeoutFn=Ya.bind(V)):(t.setTimeoutFn=V.setTimeout.bind(V),t.clearTimeoutFn=V.clearTimeout.bind(V))}const Ka=1.33;function Ja(t){return typeof t=="string"?Qa(t):Math.ceil((t.byteLength||t.size)*Ka)}function Qa(t){let e=0,r=0;for(let n=0,i=t.length;n<i;n++)e=t.charCodeAt(n),e<128?r+=1:e<2048?r+=2:e<55296||e>=57344?r+=3:(n++,r+=4);return r}function xs(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Xa(t){let e="";for(let r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e}function Za(t){let e={},r=t.split("&");for(let n=0,i=r.length;n<i;n++){let s=r[n].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class ec extends Error{constructor(e,r,n){super(e),this.description=r,this.context=n,this.type="TransportError"}}class Xn extends ${constructor(e){super(),this.writable=!1,Jr(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,r,n){return super.emitReserved("error",new ec(e,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const r=Qn(e,this.socket.binaryType);this.onPacket(r)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,r={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const r=Xa(e);return r.length?"?"+r:""}}class tc extends Xn{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const r=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};Ua(e,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Ga(e,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=xs()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(e,r)}}let qs=!1;try{qs=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const rc=qs;function nc(){}class ic extends tc{constructor(e){if(super(e),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,r){const n=this.request({method:"POST",data:e});n.on("success",r),n.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=e}}class te extends ${constructor(e,r,n){super(),this.createRequest=e,Jr(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;const r=Os(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=te.requestsCount++,te.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=nc,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete te.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}te.requestsCount=0;te.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",ns);else if(typeof addEventListener=="function"){const t="onpagehide"in V?"pagehide":"unload";addEventListener(t,ns,!1)}}function ns(){for(let t in te.requests)te.requests.hasOwnProperty(t)&&te.requests[t].abort()}const sc=function(){const t=Fs({xdomain:!1});return t&&t.responseType!==null}();class oc extends ic{constructor(e){super(e);const r=e&&e.forceBase64;this.supportsBinary=sc&&!r}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new te(Fs,this.uri(),e)}}function Fs(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||rc))return new XMLHttpRequest}catch{}if(!e)try{return new V[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Ps=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class ac extends Xn{get name(){return"websocket"}doOpen(){const e=this.uri(),r=this.opts.protocols,n=Ps?{}:Os(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,r,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],i=r===e.length-1;Jn(n,this.supportsBinary,s=>{try{this.doWrite(n,s)}catch{}i&&Kr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=xs()),this.supportsBinary||(r.b64=1),this.createUri(e,r)}}const yn=V.WebSocket||V.MozWebSocket;class cc extends ac{createSocket(e,r,n){return Ps?new yn(e,r,n):r?new yn(e,r):new yn(e)}doWrite(e,r){this.ws.send(r)}}class lc extends Xn{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const r=Ha(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(r).getReader(),i=Va();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const s=()=>{n.read().then(({done:a,value:u})=>{a||(this.onPacket(u),s())}).catch(a=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],i=r===e.length-1;this._writer.write(n).then(()=>{i&&Kr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const dc={websocket:cc,webtransport:lc,polling:oc},uc=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,fc=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function $n(t){if(t.length>8e3)throw"URI too long";const e=t,r=t.indexOf("["),n=t.indexOf("]");r!=-1&&n!=-1&&(t=t.substring(0,r)+t.substring(r,n).replace(/:/g,";")+t.substring(n,t.length));let i=uc.exec(t||""),s={},o=14;for(;o--;)s[fc[o]]=i[o]||"";return r!=-1&&n!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=hc(s,s.path),s.queryKey=mc(s,s.query),s}function hc(t,e){const r=/\/{2,9}/g,n=e.replace(r,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function mc(t,e){const r={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,s){i&&(r[i]=s)}),r}const Mn=typeof addEventListener=="function"&&typeof removeEventListener=="function",Rr=[];Mn&&addEventListener("offline",()=>{Rr.forEach(t=>t())},!1);class Re extends ${constructor(e,r){if(super(),this.binaryType=ja,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(r=e,e=null),e){const n=$n(e);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=$n(r.host).host);Jr(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Za(this.opts.query)),Mn&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Rr.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const r=Object.assign({},this.opts.query);r.EIO=Is,r.transport=e,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Re.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(e);r.open(),this.setTransport(r)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",Re.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=e.data,this._onError(r);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(r+=Ja(i)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Kr(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,r,n){return this._sendPacket("message",e,r,n),this}send(e,r,n){return this._sendPacket("message",e,r,n),this}_sendPacket(e,r,n,i){if(typeof r=="function"&&(i=r,r=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const s={type:e,data:r,options:n};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),e()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(Re.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Mn&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=Rr.indexOf(this._offlineEventListener);n!==-1&&Rr.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,r),this.writeBuffer=[],this._prevBufferLen=0}}}Re.protocol=Is;class pc extends Re{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let r=this.createTransport(e),n=!1;Re.priorWebsocketSuccess=!1;const i=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",y=>{if(!n)if(y.type==="pong"&&y.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;Re.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(S(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const b=new Error("probe error");b.transport=r.name,this.emitReserved("upgradeError",b)}}))};function s(){n||(n=!0,S(),r.close(),r=null)}const o=y=>{const b=new Error("probe error: "+y);b.transport=r.name,s(),this.emitReserved("upgradeError",b)};function a(){o("transport closed")}function u(){o("socket closed")}function g(y){r&&y.name!==r.name&&s()}const S=()=>{r.removeListener("open",i),r.removeListener("error",o),r.removeListener("close",a),this.off("close",u),this.off("upgrading",g)};r.once("open",i),r.once("error",o),r.once("close",a),this.once("close",u),this.once("upgrading",g),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const r=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&r.push(e[n]);return r}}class gc extends pc{constructor(e,r={}){const n=typeof e=="object"?e:r;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(i=>dc[i]).filter(i=>!!i)),super(e,n)}}function yc(t,e="",r){let n=t;r=r||typeof location<"u"&&location,t==null&&(t=r.protocol+"//"+r.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=r.protocol+t:t=r.host+t),/^(https?|wss?):\/\//.test(t)||(typeof r<"u"?t=r.protocol+"//"+t:t="https://"+t),n=$n(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const s=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port+e,n.href=n.protocol+"://"+s+(r&&r.port===n.port?"":":"+n.port),n}const bc=typeof ArrayBuffer=="function",kc=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,Gs=Object.prototype.toString,vc=typeof Blob=="function"||typeof Blob<"u"&&Gs.call(Blob)==="[object BlobConstructor]",Sc=typeof File=="function"||typeof File<"u"&&Gs.call(File)==="[object FileConstructor]";function Zn(t){return bc&&(t instanceof ArrayBuffer||kc(t))||vc&&t instanceof Blob||Sc&&t instanceof File}function Dr(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let r=0,n=t.length;r<n;r++)if(Dr(t[r]))return!0;return!1}if(Zn(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return Dr(t.toJSON(),!0);for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&Dr(t[r]))return!0;return!1}function wc(t){const e=[],r=t.data,n=t;return n.data=Nn(r,e),n.attachments=e.length,{packet:n,buffers:e}}function Nn(t,e){if(!t)return t;if(Zn(t)){const r={_placeholder:!0,num:e.length};return e.push(t),r}else if(Array.isArray(t)){const r=new Array(t.length);for(let n=0;n<t.length;n++)r[n]=Nn(t[n],e);return r}else if(typeof t=="object"&&!(t instanceof Date)){const r={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=Nn(t[n],e));return r}return t}function _c(t,e){return t.data=Tn(t.data,e),delete t.attachments,t}function Tn(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let r=0;r<t.length;r++)t[r]=Tn(t[r],e);else if(typeof t=="object")for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(t[r]=Tn(t[r],e));return t}const Us=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Ac=5;var v;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(v||(v={}));class Lc{constructor(e){this.replacer=e}encode(e){return(e.type===v.EVENT||e.type===v.ACK)&&Dr(e)?this.encodeAsBinary({type:e.type===v.EVENT?v.BINARY_EVENT:v.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let r=""+e.type;return(e.type===v.BINARY_EVENT||e.type===v.BINARY_ACK)&&(r+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(r+=e.nsp+","),e.id!=null&&(r+=e.id),e.data!=null&&(r+=JSON.stringify(e.data,this.replacer)),r}encodeAsBinary(e){const r=wc(e),n=this.encodeAsString(r.packet),i=r.buffers;return i.unshift(n),i}}class ei extends ${constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let r;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(e);const n=r.type===v.BINARY_EVENT;n||r.type===v.BINARY_ACK?(r.type=n?v.EVENT:v.ACK,this.reconstructor=new Ec(r),r.attachments===0&&super.emitReserved("decoded",r)):super.emitReserved("decoded",r)}else if(Zn(e)||e.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(e),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let r=0;const n={type:Number(e.charAt(0))};if(v[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===v.BINARY_EVENT||n.type===v.BINARY_ACK){const s=r+1;for(;e.charAt(++r)!=="-"&&r!=e.length;);const o=e.substring(s,r);if(o!=Number(o)||e.charAt(r)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!Vs(a)||a<0)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=a}if(e.charAt(r+1)==="/"){const s=r+1;for(;++r&&!(e.charAt(r)===","||r===e.length););n.nsp=e.substring(s,r)}else n.nsp="/";const i=e.charAt(r+1);if(i!==""&&Number(i)==i){const s=r+1;for(;++r;){const o=e.charAt(r);if(o==null||Number(o)!=o){--r;break}if(r===e.length)break}n.id=Number(e.substring(s,r+1))}if(e.charAt(++r)){const s=this.tryParse(e.substr(r));if(ei.isPayloadValid(n.type,s))n.data=s;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,r){switch(e){case v.CONNECT:return Ir(r);case v.DISCONNECT:return r===void 0;case v.CONNECT_ERROR:return typeof r=="string"||Ir(r);case v.EVENT:case v.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&Us.indexOf(r[0])===-1);case v.ACK:case v.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Ec{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const r=_c(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Rc(t){return typeof t=="string"}const Vs=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function Dc(t){return t===void 0||Vs(t)}function Ir(t){return Object.prototype.toString.call(t)==="[object Object]"}function $c(t,e){switch(t){case v.CONNECT:return e===void 0||Ir(e);case v.DISCONNECT:return e===void 0;case v.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&Us.indexOf(e[0])===-1);case v.ACK:return Array.isArray(e);case v.CONNECT_ERROR:return typeof e=="string"||Ir(e);default:return!1}}function Mc(t){return Rc(t.nsp)&&Dc(t.id)&&$c(t.type,t.data)}const Nc=Object.freeze(Object.defineProperty({__proto__:null,protocol:Ac,get PacketType(){return v},Encoder:Lc,Decoder:ei,isPacketValid:Mc},Symbol.toStringTag,{value:"Module"}));function z(t,e,r){return t.on(e,r),function(){t.off(e,r)}}const Tc=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Hs extends ${constructor(e,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[z(e,"open",this.onopen.bind(this)),z(e,"packet",this.onpacket.bind(this)),z(e,"error",this.onerror.bind(this)),z(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...r){var n,i,s;if(Tc.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(r.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const o={type:v.EVENT,data:r};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const S=this.ids++,y=r.pop();this._registerAckCallback(S,y),o.id=S}const a=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,u=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!a||(u?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,r){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[e]=r;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);r.call(this,new Error("operation has timed out"))},i),o=(...a)=>{this.io.clearTimeoutFn(s),r.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...r){return new Promise((n,i)=>{const s=(o,a)=>o?i(o):n(a);s.withError=!0,r.push(s),this.emit(e,...r)})}_addToQueue(e){let r;typeof e[e.length-1]=="function"&&(r=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(i)):(this._queue.shift(),r&&r(null,...s)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!e||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:v.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){const n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case v.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case v.EVENT:case v.BINARY_EVENT:this.onevent(e);break;case v.ACK:case v.BINARY_ACK:this.onack(e);break;case v.DISCONNECT:this.ondisconnect();break;case v.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const r=e.data||[];e.id!=null&&r.push(this.ack(e.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const r=this;let n=!1;return function(...i){n||(n=!0,r.packet({type:v.ACK,id:e,data:i}))}}onack(e){const r=this.acks[e.id];typeof r=="function"&&(delete this.acks[e.id],r.withError&&e.data.unshift(null),r.apply(this,e.data))}onconnect(e,r){this.id=e,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:v.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,e.data)}}}function $t(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}$t.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-r:t+r}return Math.min(t,this.max)|0};$t.prototype.reset=function(){this.attempts=0};$t.prototype.setMin=function(t){this.ms=t};$t.prototype.setMax=function(t){this.max=t};$t.prototype.setJitter=function(t){this.jitter=t};class Bn extends ${constructor(e,r){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(r=e,e=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,Jr(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new $t({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=e;const i=r.parser||Nc;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var r;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(r=this.backoff)===null||r===void 0||r.setMin(e),this)}randomizationFactor(e){var r;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(r=this.backoff)===null||r===void 0||r.setJitter(e),this)}reconnectionDelayMax(e){var r;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(r=this.backoff)===null||r===void 0||r.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new gc(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=z(r,"open",function(){n.onopen(),e&&e()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=z(r,"error",s);if(this._timeout!==!1){const a=this._timeout,u=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),r.close()},a);this.opts.autoUnref&&u.unref(),this.subs.push(()=>{this.clearTimeoutFn(u)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(z(e,"ping",this.onping.bind(this)),z(e,"data",this.ondata.bind(this)),z(e,"error",this.onerror.bind(this)),z(e,"close",this.onclose.bind(this)),z(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(r){this.onclose("parse error",r)}}ondecoded(e){Kr(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,r){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new Hs(this,e,r),this.nsps[e]=n),n}_destroy(e){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(e){const r=this.encoder.encode(e);for(let n=0;n<r.length;n++)this.engine.write(r[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Vt={};function $r(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const r=yc(t,e.path||"/socket.io"),n=r.source,i=r.id,s=r.path,o=Vt[i]&&s in Vt[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let u;return a?u=new Bn(n,e):(Vt[i]||(Vt[i]=new Bn(n,e)),u=Vt[i]),r.query&&!e.query&&(e.query=r.queryKey),u.socket(r.path,e)}Object.assign($r,{Manager:Bn,Socket:Hs,io:$r,connect:$r});window.GUILDSYNC_WEB=!0;const ti="guildsync-web-session";function Bc(){try{return JSON.parse(localStorage.getItem(ti)||"{}")||{}}catch{return{}}}function Cc(t){localStorage.setItem(ti,JSON.stringify(t||{}))}function Ws(){localStorage.removeItem(ti)}async function Ic(){return!0}async function js(){return!0}async function Oc(){return!0}async function xc(){return!0}async function qc(){return!0}async function Fc(){return window.location.assign("/api/auth/discord/web-login"),!0}async function Pc(){var s,o,a,u,g,S,y,b;const e=Bc().token||localStorage.getItem("guildsync-web-token")||"";if(!e)return{logged_in:!1,allowed:!1,status_message:"Not logged in."};const r=await fetch("/api/auth/session",{headers:{Authorization:`Bearer ${e}`}}),n=await r.json().catch(()=>({}));if(!r.ok||n.ok===!1)return Ws(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:n.message||"Session expired. Please log in again."};const i={logged_in:!0,allowed:!0,token:e,user:n.user,discord_user_id:((s=n.user)==null?void 0:s.discord_user_id)||"",username:((o=n.user)==null?void 0:o.username)||"",global_name:((a=n.user)==null?void 0:a.global_name)||"",display_name:((u=n.user)==null?void 0:u.display_name)||((g=n.user)==null?void 0:g.global_name)||((S=n.user)==null?void 0:S.username)||"",avatar_url:((y=n.user)==null?void 0:y.avatar_url)||"",role:((b=n.user)==null?void 0:b.role)||"user",status_message:"Logged in."};return Cc(i),i}async function Gc(){return Ws(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:"Logged out."}}async function Uc(){return Qr()}async function Vc(){return Qr()}async function Qr(){return{watching:!1,directory:"Web upload mode",files:[{key:"banking",fileName:"GuildSyncBanking.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"},{key:"roster",fileName:"GuildSyncRoster.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"}]}}async function Hc(){return Qr()}async function Wc(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function jc(){return{ok:!0}}async function zc(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function Yc(){return{ok:!0}}async function Kc(t){return t&&window.open(t,"_blank","noopener,noreferrer"),!0}async function Jc(){return{running:!1,message:"ESO process detection is only available in the desktop client."}}async function Qc(){throw new Error("Deposit mail sending is disabled in the web client. Use the GuildSync desktop client for ESO mail queue writes.")}async function Xc(){return{ok:!0,acknowledgements:[],records:[]}}async function Zc(){return{ok:!0}}async function el(){return{ok:!0}}async function tl(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSyncApplications.lua onto the GuildSync web window.")}async function rl(){return{ok:!0}}const wr=new Map;function Ht(t,e){return wr.has(t)||wr.set(t,new Set),wr.get(t).add(e),()=>{var r;return(r=wr.get(t))==null?void 0:r.delete(e)}}const Xr="1.1.3",_r={windows:{label:"Windows detected",shortLabel:"Windows",fileName:"GuildSync-Setup-Windows.exe",href:"/downloads/GuildSync-Setup-Windows.exe"},macos:{label:"macOS detected",shortLabel:"macOS",fileName:"GuildSync-macos.zip",href:"/downloads/GuildSync-macos.zip"},linux:{label:"Linux detected",shortLabel:"Linux",fileName:"GuildSync-linux-amd64.zip",href:"/downloads/GuildSync-linux-amd64.zip"}},zs="guildsync-web-savedvars-upload-banner-dismissed",nl=new Map([["GuildSyncBanking.lua","banking"],["GuildSyncRoster.lua","roster"],["GuildSyncApplications.lua","applications"]]),il=30*60*1e3,Ys="guildsync-pending-banking-uploads",Ks="guildsync-pending-deposit-mail",sl=5e3,ol=30*1e3,Js="guildsync-pending-roster-uploads",Qs="guildsync-pending-applications-uploads",m=60*1e3,Xs=7e3,Zs=1400,eo=2400,al=4e3,cl=38,to=document.querySelector("#app");let is=null,Wt=null,ss=!1,lr=!1,Mr=null,bn=!1,kn=!1,vn=!1,De=null,de={running:!1,message:""},ct=null,lt=null,Nr=!1,dt=null,Sn=!1,at=0,wn=!1,Oe=new Map,Ve=new Map,B="",Ze=!1,et=!1,Qt=[],p={logged_in:!1,allowed:!1,status_message:""},ve={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},d=null,P=[],Zr=[],en=null,tr=!1,Or=!1,xr="",ut=new Set,ft=new Set,rr="username",We="asc",Cn=null,In=null,j=[],qr=null,xe=!1,os=!1,Fr="",On=null,xn=null,je=new Set,ht=new Set,he="",q="",N=-1,kt=!1,nr="",H=[],qe="",$e=[],Me=!1,pe="",_n=null,Y=-1,Mt=!1,ir="",Ne=[],Pr=!1,ze=!1,Te="",vt="",St=!1,Se="",W=[],wt="",tt="",Be=[],Ce=!1,ge="",as=null,Ue=0;const ll=650;let K=-1,Nt=!1,Tt=[],we=!1,Ye="",Bt=!1,sr=[],_e=!1,Ke="",Ct=!1,ri=[],Ae=!1,Je="",It="",Le="",mt="",Ee="",L=[],O=!1,x="",it=!1,tn="",He="",dr="",ur="",me=-1,Ge=!1,A=null,Qe=[],_t=!1,be="",fr="",ee=-1,Ot=!1,ni=null,Xt=null;const ii=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let G=[],M="biweekly",ro=null,Fe=!1,Xe=!1,st="biweekly",xt=!1,At=!1,ue="",fe=null,T={targetType:"other",note:"",tickets:""},qt=!1,rt="",I=[],re=[],ne="",ie=!1,se="",pt=null,J=-1,ye=!1,Gr=!1,U="",E={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},Ft="",C=-1,Q=!1,qn={biweekly:0,monthly:0};const dl=1780786800,Pe=14*24*60*60,Ur=60*60,Vr=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let R=Vr[0].id;function ul(){to.innerHTML=`
    <main class="splash-screen">
      <img src="${Ca}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await Ic(),await fl(),no(),er(),await bt()},5e3)}async function fl(){try{p=await Pc()}catch(t){p={logged_in:!1,allowed:!1,status_message:""},h("session-error",k(t),{ttlMs:m})}}function no(){to.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${Ia}" alt="" class="title-icon" />
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
            <img src="${Oa}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${c(Xr)}</div>
            </div>
          </div>
          <div class="compact-header-actions">
            ${ml()}
            <div id="discordArea" class="discord-area"></div>
          </div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${io()}
        </nav>

        <div id="webSavedVarsUploadBannerHost">
          ${Yl()}
        </div>

        <section id="guildSyncTabContent" class="guildsync-tab-content${ho()?" web-upload-banner-dismissed":""}" aria-live="polite">
          ${oo()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await xc()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await js(),await qc()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await Oc()}),Cr(),Kl(),ao(),Sa(),Qo(),ca(),mo(),Jo(),Po(),Go(),Uo(),Vo(),Do(),Xo(),Sl(),Ie(),Dt(),ss||(window.addEventListener("resize",()=>{Ba(),Na()}),ah(),ss=!0)}function io(){return Vr.map(t=>{const e=t.id===R,r=pl(t.id,e),n=r?so():0,i=r?`Deposit mail needs attention: ${n} item${n===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${r?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${f(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${f(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${gl(t.icon)}</span>
          <span class="guildsync-tab-label">${c(t.label)}</span>
          ${r?`<span class="guildsync-tab-mail-badge" aria-label="${f(i)}">${n>99?"99+":c(String(n))}</span>`:""}
        </button>
      `}).join("")}function hl(){var r;const e=`${((r=navigator.userAgentData)==null?void 0:r.platform)||""} ${navigator.platform||""} ${navigator.userAgent||""}`.toLowerCase();return e.includes("win")?_r.windows:e.includes("mac")||e.includes("darwin")?_r.macos:e.includes("linux")||e.includes("x11")?_r.linux:{..._r.windows,label:"Desktop client",shortLabel:"Windows"}}function ml(){const t=hl();return`
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
        <span class="desktop-client-download-subtitle">${c(t.label)} \xB7 ZIP</span>
      </span>
      <span class="desktop-client-download-caret" aria-hidden="true">\u25BE</span>
    </a>
  `}function so(){return _()?on()+gr()+oa():0}function pl(t,e){return t!=="more"||e?!1:so()>0}function gl(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function oo(){const t=Vr.find(r=>r.id===R)||Vr[0];let e="";return t.id==="discord-members"?e=_l():t.id==="eso-members"?e=Al():t.id==="more"?e=Du():t.id==="settings"?e=Jl():e=`
      <div class="guildsync-tab-panel" data-active-tab="${f(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${c(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${ye?ru():""}
    ${xt?Gu():""}
    ${qt?$u():""}
    ${Ge?zd():""}
    ${Nt?td():""}
    ${Bt?ad():""}
    ${Ct?ud():""}
    ${it?_d():""}
    ${Ot?vl():""}
  `}function yl(){return Ot||kt||St||ye||xt||qt||Ge||Mt||Nt||Bt||Ct||it||Xe}function bl(){return Ot?!1:it?(Hn(),!0):Ct?(Vn(),!0):Bt?(Un(),!0):Nt?(Gn(),!0):Ge?(Et(),!0):Mt?(zn(),!0):xt?(jr(),!0):qt?(Wu(),l(),!0):ye?(ye=!1,l(),!0):kt?(kt=!1,l(),!0):St?(St=!1,l(),!0):Xe?(Xe=!1,l(),!0):!1}function kl(t){t.key==="Escape"&&bl()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",kl,!0),window.guildSyncGlobalModalEscapeAttached=!0);function si(t={}){return new Promise(e=>{Xt&&Xt(!1),Ot=!0,ni={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},Xt=e,l()})}function Hr(t=!1){const e=Xt;Xt=null,Ot=!1,ni=null,e&&e(t===!0),l()}function vl(){const t=ni||{};return`
    <div class="roster-history-overlay guildsync-confirm-overlay" role="dialog" aria-modal="true" aria-labelledby="guildSyncConfirmTitle">
      <div class="roster-history-dialog guildsync-confirm-dialog">
        <div class="roster-history-header guildsync-confirm-header">
          <div>
            <h3 id="guildSyncConfirmTitle">${c(t.title||"Confirm Action")}</h3>
            ${t.detail?`<p>${c(t.detail)}</p>`:""}
          </div>
        </div>
        <div class="guildsync-confirm-body">
          ${c(t.message||"Are you sure?")}
        </div>
        <div class="guildsync-confirm-actions">
          <button id="cancelGuildSyncConfirmButton" class="guildsync-confirm-button guildsync-confirm-cancel" type="button">${c(t.cancelLabel||"Cancel")}</button>
          <button id="acceptGuildSyncConfirmButton" class="guildsync-confirm-button guildsync-confirm-accept ${f(t.confirmClass||"danger")}" type="button">${c(t.confirmLabel||"Confirm")}</button>
        </div>
      </div>
    </div>
  `}function cs(t){var n,i,s,o;const e=(i=(n=t.target).closest)==null?void 0:i.call(n,"#cancelGuildSyncConfirmButton"),r=(o=(s=t.target).closest)==null?void 0:o.call(s,"#acceptGuildSyncConfirmButton");if(!(!e&&!r)){if(t.preventDefault(),t.stopPropagation(),e){Hr(!1);return}r&&Hr(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",cs,!0),document.addEventListener("pointerup",cs,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function Sl(){if(!Ot)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=n=>{n.preventDefault(),n.stopPropagation(),Hr(!1)}),e&&(e.onclick=n=>{n.preventDefault(),n.stopPropagation(),Hr(!0)});const r=document.querySelector(".guildsync-confirm-overlay");r&&(r.onclick=n=>{n.target===r&&(n.preventDefault(),n.stopPropagation())})}function ao(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(yl())return;const e=t.dataset.tabId;!e||e===R||(R=e,l())})})}function wl(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function l(t={}){it&&wl();const e=document.querySelector(".guildsync-tabs"),r=document.querySelector("#guildSyncTabContent");e&&(e.innerHTML=io()),r&&(r.innerHTML=oo()),ao(),Sa(),Qo(),ca(),mo(),Jo(),Po(),Go(),Uo(),Vo(),Do(),Xo(),t.restoreDiscordSearchFocus&&Tf(),t.restoreRosterSearchFocus&&Bf(),R==="discord-members"&&(d==null?void 0:d.connected)&&P.length===0&&!tr&&vi({silent:!0}),R==="eso-members"&&(d==null?void 0:d.connected)&&j.length===0&&!xe&&!os&&(os=!0,Pt({silent:!0})),R==="more"&&(d==null?void 0:d.connected)&&G.length===0&&!Fe&&le({silent:!0}),(R==="discord-members"||R==="eso-members"||R==="settings")&&(d==null?void 0:d.connected)&&L.length===0&&!O&&pr({silent:!0})}function _l(){const t=$f(),e=Cf(),r=Array.from(ut),n=Array.from(ft);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${c(_a(en))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${tr||Or?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Or?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${f(xr)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!ut.has(i)).map(i=>`<option value="${f(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All roles</span>':r.map(i=>qf(i)).join("")}
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
              ${ii.filter(i=>!ft.has(i.id)).map(i=>`<option value="${f(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(i=>co("discord",i)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${Ar("username","Username")}
                ${Ar("global_name","Global Name")}
                ${Ar("server_nickname","Server Nickname")}
                ${Ar("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>If(i)).join(""):Of()}
            </tbody>
          </table>
        </div>
      </div>
      ${St?Gl():""}
    </div>
  `}function Al(){const t=Cl(),e=xl(),r=Array.from(je),n=Array.from(ht);return`
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
          <span class="discord-last-refresh">Last Refresh: ${c(pu(qr))}</span>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${xe?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${xe?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${f(Fr)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!je.has(i)).map(i=>`<option value="${f(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All ranks</span>':r.map(i=>ql(i)).join("")}
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
              ${ii.filter(i=>!ht.has(i.id)).map(i=>`<option value="${f(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(i=>co("roster",i)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${jt("account_name","Account Name")}
                ${jt("rank","Rank")}
                ${jt("joined","Joined")}
                ${jt("notes","Notes","roster-notes-header")}
                ${jt("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map((i,s)=>Ll(i,s)).join(""):Nl()}
            </tbody>
          </table>
        </div>
      </div>
      ${kt?Wl():""}
      ${Mt?Rl():""}
    </div>
  `}function Ll(t,e=-1){const r=Tl(t.rank||""),n=r?` style="color: ${r};"`:"";return`
    <tr class="eso-roster-row${e===N?" roster-search-active-row":""}"${n} data-roster-row-index="${f(String(e))}" data-eso-account-name="${f(t.account_name||"")}">
      <td>${c(t.account_name||"")}</td>
      <td>${oi(t.rank||"")}</td>
      <td>${c(sn(t.joined))}</td>
      <td class="roster-notes-cell">${El(t)}</td>
      <td class="member-link-action-cell">${Co({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function El(t){const e=String((t==null?void 0:t.account_name)||"").trim(),r=Number((t==null?void 0:t.note_count)||0),n=r>0,i=n?`${r} roster note${r===1?"":"s"} for ${e}`:`No roster notes for ${e}`;return`
    <button
      class="roster-notes-button${n?" has-notes":""}"
      type="button"
      data-open-roster-notes="${f(e)}"
      title="${f(i)}"
      aria-label="${f(i)}"
    >
      <svg class="roster-notes-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4.5 5.25c0-.69.56-1.25 1.25-1.25h5.1c.89 0 1.72.34 2.35.95A3.28 3.28 0 0 1 15.55 4h2.7c.69 0 1.25.56 1.25 1.25v13.5c0 .69-.56 1.25-1.25 1.25h-4.6c-.75 0-1.45.29-1.98.82a.95.95 0 0 1-1.34 0A2.8 2.8 0 0 0 8.35 20h-2.6c-.69 0-1.25-.56-1.25-1.25V5.25Zm7.25 1.6A1.28 1.28 0 0 0 10.85 6H6.5v12h1.85c1.14 0 2.24.35 3.15 1V7.1c0-.09.01-.17.25-.25Zm1.75 12.15a6.32 6.32 0 0 1 3.15-1h.85V6h-1.95c-.73 0-1.4.29-1.9.8l-.15.15V19Z"/></svg>
      ${n?`<span class="roster-notes-count" aria-hidden="true">${r}</span>`:""}
    </button>
  `}function Rl(){const t=ir||"",e=Boolean((p==null?void 0:p.logged_in)&&(p==null?void 0:p.allowed));return`
    <div class="roster-history-overlay roster-notes-overlay" role="dialog" aria-modal="true" aria-labelledby="rosterNotesTitle">
      <div class="roster-history-dialog roster-notes-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="rosterNotesTitle">Roster Notes</h3>
            <p>${c(t)}</p>
          </div>
          <button id="closeRosterNotesButton" class="roster-history-close" type="button" aria-label="Close roster notes">\xD7</button>
        </div>
        <div class="roster-notes-body">
          ${Te?`<div class="discord-data-error">${c(Te)}</div>`:""}
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
                ${Dl()}
              </tbody>
            </table>
          </div>
          ${e?$l():'<div class="roster-history-muted">Log in to add a new note.</div>'}
        </div>
      </div>
    </div>
  `}function Dl(){return Pr?'<tr><td class="bank-empty-row" colspan="3">Loading notes...</td></tr>':!Array.isArray(Ne)||Ne.length===0?'<tr><td class="bank-empty-row" colspan="3">No notes recorded for this member.</td></tr>':Ne.map(t=>`
      <tr>
        <td class="roster-notes-when-cell">${c(Ml(t.timestamp))}</td>
        <td class="roster-notes-officer-cell">${c(t.officer||"")}</td>
        <td class="roster-notes-note-cell">${c(t.note||"")}</td>
      </tr>
    `).join("")}function $l(){return`
    <div class="roster-notes-form">
      <label for="rosterNotesNewNote">Add Note</label>
      <textarea
        id="rosterNotesNewNote"
        class="roster-notes-textarea"
        rows="4"
        placeholder="Enter a new roster note..."
        ${ze?"disabled":""}
      >${c(vt)}</textarea>
      <button id="saveRosterNoteButton" class="refresh-discord-button" type="button" ${ze?"disabled":""}>
        ${ze?"Saving...":"Save Note"}
      </button>
    </div>
  `}function Ml(t){const e=Number(t||0);return!Number.isFinite(e)||e<=0?"":new Date(e*1e3).toLocaleString()}function Nl(){return`
    <tr>
      <td class="bank-empty-row" colspan="5">${c(xe?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function Tl(t){String(t||"").trim();const e=Ff(t);return ln(e==null?void 0:e.role_color)}function oi(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${c(e)}</span>`}function Bl(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":oi(e)}function Cl(){const t=Fr.trim().toLowerCase(),e=j.filter(r=>{const n=String(r.rank||"").trim();if(je.size>0&&!je.has(n)||!fo(ht,Fn(r)))return!1;if(!t)return!0;const i=sn(r.joined),s=fi(r.joined),o=Fn(r),a=uo(r.account_name||"");return[r.account_name,n,i,s,r.joined,o,a].map(g=>String(g||"").toLowerCase()).join(" ").includes(t)});return Il(e)}function Il(t){if(!he||!q)return t;const e=q==="desc"?-1:1;return[...t].sort((r,n)=>{const i=ls(r,he),s=ls(n,he),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:String(r.account_name||"").localeCompare(String(n.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function ls(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const r=Number(t.joined||0);return Number.isFinite(r)&&r>0?String(r).padStart(16,"0"):""}if(e==="notes")return String(Number(t.note_count||0)).padStart(8,"0");if(e==="linked"){const r=Fn(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[r]||"9"} ${r} ${uo(t.account_name||"")}`}return String(t.account_name||"")}function Ol(t){const r=new Set(["account_name","rank","joined","notes","linked"]).has(t)?t:"account_name";he!==r?(he=r,q="asc"):q==="asc"?q="desc":q==="desc"?(he="",q=""):(he=r,q="asc"),N=-1,l()}function jt(t,e,r=""){const n=he===t&&Boolean(q),i=n?q==="asc"?"ascending":"descending":"none",s=n?q==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${f(r)}" aria-sort="${f(i)}">
      <button
        class="discord-sort-header roster-sort-header${n?" active":""}"
        type="button"
        data-roster-sort-column="${f(t)}"
        title="Sort ${f(e)}${n&&q==="asc"?" descending":n&&q==="desc"?" not sorted":" ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function xl(){return Array.from(new Set(j.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function ql(t){const e=_i(t),r=ln(e==null?void 0:e.role_color),n=Li(r),i=Ai(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-roster-rank-filter="${f(t)}"
      style="${i}"
      title="Remove ${f(t)} filter"
    >
      <span>${c(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Fl(t){const e=ii.find(r=>r.id===t);return e?e.label:t}function co(t,e){const r=t==="roster"?"roster":"discord",n=Fl(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${r}-link-status-filter="${f(e)}"
      title="Remove ${f(n)} link filter"
    >
      <span>${c(n)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function lo(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked"&&String(r.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function Pl(t){return lo(nn(t==null?void 0:t.discord_id))}function Fn(t){return lo(rn(t==null?void 0:t.account_name))}function uo(t){const e=rn(t),r=Bo({mode:"eso-to-discord",esoAccountName:t}),n=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean),i=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="candidate").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean);return[r.label,r.title,n.join(" "),i.join(" ")].filter(Boolean).join(" ")}function fo(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function Gl(){return`
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
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${f(Se)}" />
        </div>

        ${ge?`<div class="discord-data-error">${c(ge)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Ul()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${tt?`: ${c(tt)}`:""}</div>
            ${Vl()}
          </div>
        </div>
      </div>
    </div>
  `}function Ul(){return Ce&&W.length===0?'<div class="roster-history-muted">Searching...</div>':W.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${W.map((t,e)=>`
        <button class="roster-history-match${e===K||t.discord_id===wt?" is-selected":""}" type="button" data-discord-history-id="${f(t.discord_id)}" data-discord-history-name="${f(Pn(t))}">
          <span>${c(Pn(t))}</span>
          <strong>${c(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===K?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Vl(){return wt?Ce&&Be.length===0?'<div class="roster-history-muted">Loading history...</div>':Be.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${Be.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(fi(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${c(Hl(t.event_type))}</td>
              <td>${c(t.old_value||"")}</td>
              <td>${c(t.new_value||"")}</td>
              <td>${c(t.initiator||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function Pn(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function Hl(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Wl(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(nr)}" />
        </div>

        ${pe?`<div class="discord-data-error">${c(pe)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${jl()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${qe?`: ${c(qe)}`:""}</div>
            ${zl()}
          </div>
        </div>
      </div>
    </div>
  `}function jl(){return Me&&H.length===0?'<div class="roster-history-muted">Searching...</div>':H.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${H.map((t,e)=>`
        <button class="roster-history-match${e===Y||t.account_name===qe?" is-selected":""}" type="button" data-roster-history-account="${f(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <strong>${c(t.rank||"")}</strong>
          ${e===Y?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function zl(){return qe?Me&&$e.length===0?'<div class="roster-history-muted">Loading history...</div>':$e.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${$e.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(fi(t.timestamp))}</td>
              <td>${c(t.event_type||"")}</td>
              <td>${Bl(t.rank)}</td>
              <td>${c(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function hr(){return typeof window<"u"&&window.GUILDSYNC_WEB===!0}function ho(){if(!hr())return!0;try{return localStorage.getItem(zs)==="1"}catch{return!1}}function Yl(){return!hr()||ho()?"":`
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
  `}function Kl(){const t=document.querySelector("#webSavedVarsUploadBannerDismissButton");!t||t.addEventListener("click",()=>{var e,r;try{localStorage.setItem(zs,"1")}catch{}(e=document.querySelector("#webSavedVarsUploadBannerHost"))==null||e.remove(),(r=document.querySelector(".guildsync-tab-content"))==null||r.classList.add("web-upload-banner-dismissed")})}function Jl(){return`
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
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${we?"disabled":""}>
              ${we?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${_e?"disabled":""}>
              ${_e?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${Ae?"disabled":""}>
              ${Ae?"Loading...":"Run"}
            </button>
          </article>
        </section>

        <article class="report-option-card">
          <div class="report-option-copy">
            <h3>ESO / Discord Member Links</h3>
            <p>Review automatic ESO-to-Discord links, accept candidate matches, unlink blocked matches, or run the matcher again after roster or Discord refreshes.</p>
          </div>
          <button id="runMemberLinksReportButton" class="refresh-discord-button report-run-button" type="button" ${O?"disabled":""}>
            ${O?"Loading...":"Run"}
          </button>
        </article>
      </div>
    </div>
  `}function mo(){var t,e,r,n;R==="settings"&&((t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>yo()),(e=document.querySelector("#runDiscordRankAuditReportButton"))==null||e.addEventListener("click",()=>od()),(r=document.querySelector("#runDiscordLastSeenReportButton"))==null||r.addEventListener("click",()=>dd()),(n=document.querySelector("#runMemberLinksReportButton"))==null||n.addEventListener("click",()=>vd()))}function Tr(){return hr()&&_()&&(d==null?void 0:d.connected)===!0}function po(){if(!hr())return null;let t=document.querySelector("#webSavedVarsFullScreenDropOverlay");return t||(t=document.createElement("div"),t.id="webSavedVarsFullScreenDropOverlay",t.className="web-savedvars-fullscreen-drop-overlay",t.setAttribute("aria-hidden","true"),t.innerHTML=`
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
  `,document.body.appendChild(t),t)}function ds(){const t=po();!t||(t.classList.add("is-visible"),t.setAttribute("aria-hidden","false"))}function An(){const t=document.querySelector("#webSavedVarsFullScreenDropOverlay");!t||(t.classList.remove("is-visible"),t.setAttribute("aria-hidden","true"))}function zt(t){var r;return Array.from(((r=t==null?void 0:t.dataTransfer)==null?void 0:r.types)||[]).includes("Files")}function Ql(t){!(t!=null&&t.dataTransfer)||(t.dataTransfer.dropEffect=Tr()?"copy":"none")}function go(t){const e=String(t||"").split(/[\\/]/).pop();return nl.get(e)||""}function Xl(){if(!hr())return;po();const t=e=>{!zt(e)||(e.preventDefault(),e.stopPropagation(),Ql(e))};document.addEventListener("dragenter",e=>{!zt(e)||(t(e),at+=1,Tr()&&ds())},!0),document.addEventListener("dragover",e=>{t(e),zt(e)&&Tr()&&ds()},!0),document.addEventListener("dragleave",e=>{!zt(e)||(e.preventDefault(),e.stopPropagation(),at=Math.max(0,at-1),at===0&&An())},!0),document.addEventListener("drop",async e=>{var n;if(!zt(e))return;if(t(e),at=0,An(),!Tr()){h("web-savedvars-drop-not-ready","SavedVariables drag/drop is only available while logged in and connected to the GuildSync server.",{ttlMs:m});return}const r=Array.from(((n=e.dataTransfer)==null?void 0:n.files)||[]);await Zl(r)},!0),window.addEventListener("blur",()=>{at=0,An()})}async function Zl(t=[]){if(wn){h("web-savedvars-drop-busy","A SavedVariables upload is already processing. Please wait for it to finish.",{ttlMs:m});return}const e=Array.from(t||[]).filter(Boolean);if(!e.length){h("web-savedvars-drop-empty","No file was dropped.",{ttlMs:m});return}const r=e.find(n=>!go(n.name));if(r){h("web-savedvars-drop-invalid",`Unsupported file: ${r.name}. Drop only GuildSyncBanking.lua, GuildSyncRoster.lua, or GuildSyncApplications.lua.`,{ttlMs:m});return}wn=!0;try{for(const n of e)await ed(n)}finally{wn=!1}}async function ed(t){const e=go(t.name);if(!e)throw new Error(`Unsupported file: ${t.name}`);const r=`web-savedvars-upload-${e}`,n=await t.text();if(!String(n||"").trim())throw new Error(`${t.name} is empty.`);h(r,`Uploading ${t.name}...`);try{const i=await w("guildsync:upload-savedvars-raw",{file_name:t.name,raw_lua_text:n,source:"web-drag-drop"},12e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||`${t.name} upload was rejected.`);e==="banking"?await le({silent:!0}):e==="roster"&&(await Pt({silent:!0}),await pr({silent:!0})),h(r,i.message||`${t.name} uploaded and processed.`,{ttlMs:m})}catch(i){throw h(r,k(i),{ttlMs:m}),i}dn("version")}function yo(){Nt=!0,Ye="",l(),jo()}function Gn(){Nt=!1,Ye="",l()}function td(){const t=rd(),e=nd(),r=Tt.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${we?"disabled":""}>${we?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(r))} total row${r===1?"":"s"}</span>
        </div>

        ${Ye?`<div class="discord-data-error">${c(Ye)}</div>`:""}

        <div class="report-results-content">
          ${we&&r===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!we&&r===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${r>0?us("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${r>0?us("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${c(vo())}</textarea>
      </div>
    </div>
  `}function rd(){return Tt.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function nd(){return Tt.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function us(t,e,r,n){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${c(t)}</h4>
          <p>${c(e)}</p>
        </div>
        <span>${c(String(r.length))} row${r.length===1?"":"s"}</span>
      </div>
      ${r.length>0?id(r):`<div class="roster-history-muted report-section-empty">${c(n)}</div>`}
    </section>
  `}function id(t=Tt){return`
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
              <td>${c(e.account_name||"")}</td>
              <td>${oi(e.rank||"")}</td>
              <td>${c(sn(e.joined))}</td>
              <td>${c(yr(e.purchased_tickets||0))}</td>
              <td class="associate-earliest-deposit-cell">${c(bo(e))}</td>
              <td>${c(ko(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function bo(t){const e=String((t==null?void 0:t.earliest_deposit_summary)||"").trim();if(e)return e;const r=String((t==null?void 0:t.earliest_deposit_date)||"").trim(),n=String((t==null?void 0:t.earliest_deposit_raffle_period)||"").trim();return[r,n].filter(Boolean).join(" | ")}function ko(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function vo(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Earliest Deposit / Raffle","Discord Link"]];for(const e of Tt){const r=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([r,e.account_name||"",e.rank||"",sn(e.joined),yr(e.purchased_tickets||0),bo(e),ko(e)])}return t.map(e=>e.map(an).join("	")).join(`
`)}async function sd(){const t=vo();if(await cn(t)){h("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:m});return}const r=document.querySelector("#associateTicketReportTsv");r&&(r.focus(),r.select()),h("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function od(){Bt=!0,Ke="",l(),Wo()}function Un(){Bt=!1,Ke="",l()}function ad(){const t=sr.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${_e?"disabled":""}>${_e?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${Ke?`<div class="discord-data-error">${c(Ke)}</div>`:""}

        <div class="report-results-content">
          ${_e&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!_e&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?cd(sr):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${c(_o())}</textarea>
      </div>
    </div>
  `}function cd(t=sr){return`
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
              <td data-label="Discord Member" class="discord-rank-audit-member-cell">${c(So(e))}</td>
              <td data-label="Discord Rank Role" class="discord-rank-audit-discord-cell">${c(e.discord_rank||"No matching rank role")}</td>
              <td data-label="Linked ESO Account(s)" class="discord-rank-audit-eso-account-cell">${c(e.eso_accounts||"No linked ESO account")}</td>
              <td data-label="ESO Rank" class="discord-rank-audit-eso-rank-cell">${c(e.eso_rank||"None")}</td>
              <td data-label="Issue" class="discord-rank-audit-issue-cell">${c(wo(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function So(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function wo(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function _o(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of sr)t.push([So(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",wo(e)]);return t.map(e=>e.map(an).join("	")).join(`
`)}async function ld(){const t=_o();if(await cn(t)){h("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:m});return}const r=document.querySelector("#discordRankAuditReportTsv");r&&(r.focus(),r.select()),h("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function dd(){Ct=!0,Je="",It="",l(),Ho(),L.length===0&&!O&&pr({silent:!0})}function Vn(){Ct=!1,Je="",It="",Le="",mt="",Ee="",l()}function ud(){const t=ai(),e=ri.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${Ae?"disabled":""}>${Ae?"Loading...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(e))} Discord member${e===1?"":"s"}</span>
        </div>

        <div class="discord-last-seen-filter-row">
          <input
            id="discordLastSeenReportSearchInput"
            class="member-links-report-search-input discord-last-seen-search-input"
            type="search"
            autocomplete="off"
            spellcheck="false"
            placeholder="Search Discord member, username, last seen action, or date..."
            value="${f(It)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${Le===""?"selected":""}>All link statuses</option>
            <option value="linked" ${Le==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${Le==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${Le==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${Je?`<div class="discord-data-error discord-last-seen-report-error">${c(Je)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${Ae&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!Ae&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?fd(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${c(Lo(t))}</textarea>
      </div>
    </div>
  `}function fd(t=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${Yt("name","Discord Member")}</th>
            <th>${Yt("eso","Linked ESO Account")}</th>
            <th>${Yt("date","Last Seen")}</th>
            <th>${Yt("days","Days Since")}</th>
            <th>${Yt("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr class="discord-last-seen-row ${f(bd(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${f(nt(e).status)}" data-discord-last-seen-search="${f(Ao(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${yd(e)}
                  <span>${c(Lt(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${md(e)}</td>
              <td>${c(ci(e.last_seen))}</td>
              <td>${c(li(e.last_seen))}</td>
              <td>${c(Wr(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function Yt(t,e){const r=mt===t,n=r?Ee==="asc"?"\u25B2":"\u25BC":"\u2195",i=r?`${e}: ${Ee==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${r?" active":""}" type="button" data-discord-last-seen-sort="${f(t)}" title="${f(i)}">
      <span>${c(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${c(n)}</span>
    </button>
  `}function ai(){const t=[...ri],e=mt,r=Ee;if(!e||!r)return t;const n=r==="desc"?-1:1;return t.sort((i,s)=>{var o,a;if(e==="date"){const u=Number(i.last_seen||0)||0,g=Number(s.last_seen||0)||0;return(u-g)*n}if(e==="days")return(fs(i.last_seen)-fs(s.last_seen))*n;if(e==="action")return Wr(i.last_seen_action).localeCompare(Wr(s.last_seen_action),void 0,{sensitivity:"base"})*n;if(e==="eso"){const u=nt(i),g=nt(s),S={linked:0,candidate:1,unlinked:2},y=((o=S[u.status])!=null?o:9)-((a=S[g.status])!=null?a:9);return y!==0?y*n:u.esoAccountName.localeCompare(g.esoAccountName,void 0,{sensitivity:"base"})*n}return Lt(i).localeCompare(Lt(s),void 0,{sensitivity:"base"})*n})}function hd(t){mt!==t?(mt=t,Ee="asc"):Ee==="asc"?Ee="desc":(mt="",Ee=""),l()}function Lt(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function Ao(t){return[Lt(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,pd(t),ci(t==null?void 0:t.last_seen),li(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function nt(t){const e=Id(t==null?void 0:t.discord_id),r=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),n=String((e==null?void 0:e.eso_account_name)||"").trim();return r==="linked"&&n?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:n,title:`Linked ESO account: ${n}`}:(r==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&n?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:n,title:`Fuzzy ESO account candidate: ${n}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function md(t){const e=nt(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${f(e.className)}"
      title="${f(e.title)}"
      aria-label="${f(e.label)}"
      role="img"
    ></span>
  `}function pd(t){const e=nt(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function gd(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!r)return"";if(/^https?:\/\//i.test(e))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function yd(t){const e=Lt(t),r=e?e.slice(0,2).toUpperCase():"?",n=gd(t);return n?`<span class="discord-member-avatar"><img src="${f(n)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${c(r)}</span>`}function ci(t){const e=Number(t);if(!e)return"Never";const r=new Date(e*1e3);if(Number.isNaN(r.getTime()))return String(t||"");const n=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(r).reduce((i,s)=>(i[s.type]=s.value,i),{});return`${n.month}/${n.day}/${n.year} ${n.hour}:${n.minute} ${n.dayPeriod}`}function bd(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const r=(Date.now()-e*1e3)/864e5;return r>30?"discord-last-seen-red":r>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function li(t){const e=Number(t);if(!e)return"Never";const r=Date.now()-e*1e3;if(!Number.isFinite(r))return"";if(r<0)return"0 days";const n=Math.floor(r/864e5);return`${n} day${n===1?"":"s"}`}function fs(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const r=Date.now()-e*1e3;return Number.isFinite(r)?r<0?0:Math.floor(r/864e5):Number.POSITIVE_INFINITY}function Wr(t){return String(t||"").trim()||"None tracked"}function Lo(t=ai()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const r of t){const n=nt(r);e.push([Lt(r),n.label||"",n.esoAccountName||"",ci(r==null?void 0:r.last_seen),li(r==null?void 0:r.last_seen),Wr(r==null?void 0:r.last_seen_action),(r==null?void 0:r.username)||"",(r==null?void 0:r.discord_id)||""])}return e.map(r=>r.map(an).join("	")).join(`
`)}async function kd(){const t=ai().filter(i=>{const s=ce(It),o=String(Le||"").trim().toLowerCase(),a=!s||ce(Ao(i)).includes(s),u=!o||nt(i).status===o;return a&&u}),e=Lo(t);if(await cn(e)){h("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:m});return}const n=document.querySelector("#discordLastSeenReportTsv");n&&(n.focus(),n.select()),h("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function vd(){it=!0,x="",l(),L.length===0&&!O&&pr({silent:!0})}function Hn(){it=!1,tn="",He="",dr="",ur="",me=-1,l()}function Eo(t){return[...new Set((Array.isArray(L)?L:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function Ro(t,e){return t.map(r=>`<option value="${f(r)}" ${e===r?"selected":""}>${c(r)}</option>`).join("")}function Sd(){return Ro(Eo("link_status"),dr)}function wd(){return Ro(Eo("link_method"),ur)}function _d(){return`
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
          <button id="refreshMemberLinksButton" class="clear-discord-filters-button" type="button" ${O?"disabled":""}>Refresh Links</button>
          <button id="runMemberAutoLinkButton" class="refresh-discord-button" type="button" ${O?"disabled":""}>${O?"Running...":"Run Auto-Linking"}</button>
          <span class="roster-history-muted">${c(String(L.length))} link/candidate row${L.length===1?"":"s"}</span>
        </div>

        <div class="member-links-report-filter-row">
          <input
            id="memberLinksReportSearchInput"
            class="member-links-report-search-input"
            type="search"
            autocomplete="off"
            spellcheck="false"
            placeholder="Search Discord account or ESO member..."
            value="${f(tn)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${dr===""?"selected":""}>All statuses</option>
            ${Sd()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${ur===""?"selected":""}>All methods</option>
            ${wd()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${He===""?"selected":""}>All actions</option>
            <option value="needs-link" ${He==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${He==="can-unlink"?"selected":""}>Unlink Available</option>
            <option value="can-unblock" ${He==="can-unblock"?"selected":""}>Unblock Available</option>
          </select>
        </div>

        ${x?`<div class="discord-data-error member-links-report-error">${c(x)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${Rd()}
        </div>
      </div>
    </div>
  `}function Do(){var r,n,i,s,o,a;if(!it)return;(r=document.querySelector("#closeMemberLinksReportButton"))==null||r.addEventListener("click",Hn),(n=document.querySelector("#refreshMemberLinksButton"))==null||n.addEventListener("click",()=>pr()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>Bd());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",Dd),t.addEventListener("keydown",Td)),(s=document.querySelector("#memberLinksReportActionFilter"))==null||s.addEventListener("change",$d),(o=document.querySelector("#memberLinksReportStatusFilter"))==null||o.addEventListener("change",Md),(a=document.querySelector("#memberLinksReportMethodFilter"))==null||a.addEventListener("change",Nd),mr(),document.querySelectorAll("[data-accept-member-candidate]").forEach(u=>{u.addEventListener("click",()=>Mo(u.dataset.acceptMemberCandidate||"",u.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(u=>{u.addEventListener("click",()=>Cd(u.dataset.unlinkMemberLink||"",u.dataset.unlinkMemberLinkDiscordId||""))}),document.querySelectorAll("[data-unblock-member-auto-link]").forEach(u=>{u.addEventListener("click",()=>No(u.dataset.unblockMemberAutoLink||"",u.dataset.unblockMemberAutoLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",u=>{u.target===e&&Hn()})}function hs(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function ms(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Ad(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Ld(t){return[...Array.isArray(t)?t:[]].sort((e,r)=>{const n=hs(e)-hs(r);if(n!==0)return n;const i=ms(e).localeCompare(ms(r),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((r==null?void 0:r.discord_user_id)||""),void 0,{sensitivity:"base"})})}function Ed(t){const e=Wn(t);let r="";e==="Username"?r=(t==null?void 0:t.discord_username)||"":e==="Global Name"?r=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(r=(t==null?void 0:t.discord_server_nickname)||""),r||(r=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const n=e?` <span class="member-link-report-match-field">(${c(e)})</span>`:"";return`<span class="member-link-report-discord-name">${c(r)}</span>${n}`}function Rd(){return O&&L.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(L)||L.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${Ld(L).map(e=>{var s;const r=String(e.link_status||"").trim().toLowerCase(),n=String(e.link_method||"").trim().toLowerCase(),i=Ed(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${f(Ad(e))}"
                data-member-links-report-status="${f(r)}"
                data-member-links-report-method="${f(n)}"
                data-member-links-report-action="${f(Number(e.locked||0)===1||r==="blocked"?"can-unblock":r==="linked"?"can-unlink":r==="candidate"?"needs-link":"")}"
              >
                <td>${c(e.eso_account_name||"")}</td>
                <td>${i}</td>
                <td class="member-links-status-col">${c(Number(e.locked||0)===1||r==="blocked"?"blocked":r||"")}</td>
                <td class="member-links-method-col">${c(n||"")}${Number(e.locked||0)===1?" \u{1F512}":""}</td>
                <td class="member-links-action-col">
                  <div class="member-link-actions">
                    ${r==="candidate"?`<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${f(e.eso_account_name||"")}" data-accept-member-candidate-discord-id="${f(e.discord_user_id||"")}" aria-label="Accept candidate link" title="Accept candidate link">\u2713</button>`:""}
                    ${r==="linked"?`<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${f(e.eso_account_name||"")}" data-unlink-member-link-discord-id="${f(e.discord_user_id||"")}" aria-label="Unlink this ESO/Discord pair" title="Unlink this ESO/Discord pair">\u{1F5D1}</button>`:""}
                    ${Number(e.locked||0)===1||r==="blocked"?`<button class="member-link-report-action member-link-report-unblock" type="button" data-unblock-member-auto-link="${f(e.eso_account_name||"")}" data-unblock-member-auto-link-discord-id="${f(e.discord_user_id||"")}" aria-label="Remove auto-link block" title="Remove auto-link block">\u21BA</button>`:""}
                  </div>
                </td>
                <td class="member-links-confidence-col">${c(String((s=e.match_confidence)!=null?s:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function $o(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function ps(t){const e=$o();if(e.forEach(n=>n.classList.remove("member-links-report-row-active")),e.length===0){me=-1;return}me=Math.max(0,Math.min(t,e.length-1));const r=e[me];r.classList.add("member-links-report-row-active"),r.scrollIntoView({block:"nearest"})}function mr(){const t=ce(tn),e=String(He||"").trim().toLowerCase(),r=String(dr||"").trim().toLowerCase(),n=String(ur||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let s=0;i.forEach(a=>{const u=ce(a.dataset.memberLinksReportSearch||""),g=String(a.dataset.memberLinksReportAction||"").trim().toLowerCase(),S=String(a.dataset.memberLinksReportStatus||"").trim().toLowerCase(),y=String(a.dataset.memberLinksReportMethod||"").trim().toLowerCase(),ot=(!t||u.includes(t))&&(!e||g===e)&&(!r||S===r)&&(!n||y===n);a.hidden=!ot,a.classList.remove("member-links-report-row-active"),ot&&(s+=1)});const o=document.querySelector("#memberLinksReportSearchEmpty");o&&(o.hidden=s!==0),me=-1}function Dd(t){tn=t.target.value||"",mr()}function $d(t){He=t.target.value||"",mr()}function Md(t){dr=t.target.value||"",mr()}function Nd(t){ur=t.target.value||"",mr()}function Td(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=$o();if(e.length===0)return;if(t.key==="ArrowDown"){const n=me<0?0:me+1;ps(n>=e.length?e.length-1:n);return}const r=me<0?e.length-1:me-1;ps(r<0?0:r)}async function pr(t={}){if(!(d!=null&&d.connected)){x="You must be connected to load member links.",l();return}O=!0,x="",t.silent||l();try{const e=await w("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");L=Array.isArray(e.links)?e.links:[]}catch(e){x=k(e)}finally{O=!1,l()}}async function Bd(){if(!(d!=null&&d.connected)||!p.logged_in){x="You must be logged in and connected to run auto-linking.",l();return}O=!0,x="",l();try{const t=await w("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");L=Array.isArray(t.links)?t.links:[],h("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:m})}catch(t){x=k(t)}finally{O=!1,l()}}async function Mo(t,e=""){try{const r=await w("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to accept candidate.");L=Array.isArray(r.links)?r.links:L,h("member-link-accepted",r.message||"Candidate accepted as a link.",{ttlMs:m})}catch(r){x=k(r),h("member-link-accept-error",x,{ttlMs:m})}}async function No(t,e=""){if(!await si({title:"Remove Auto-Link Block?",message:`Remove the blocked auto-match record between ${t} and this Discord account? Auto-linking will run immediately and this screen will refresh to show whether the pair linked again.`,confirmLabel:"Unblock",cancelLabel:"Cancel",confirmClass:"danger"}))return!1;O=!0,x="",l();try{const n=await w("guildsync:unblock-member-auto-link",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to remove auto-link block.");L=Array.isArray(n.links)?n.links:L;const i=X(t),s=String(e||"").trim(),o=n.refreshedPair||L.find(g=>X(g.eso_account_name)===i&&String(g.discord_user_id||"").trim()===s),a=String((o==null?void 0:o.link_status)||"").trim().toLowerCase(),u=a==="linked"?" It linked again automatically.":a==="candidate"?" It is now showing as a candidate.":" No automatic link was recreated.";return h("member-link-unblocked",`${n.message||"Auto-link block removed."}${u}`,{ttlMs:m}),!0}catch(n){return x=k(n),h("member-link-unblock-error",x,{ttlMs:m}),!1}finally{O=!1,l()}}async function Cd(t,e=""){if(!!await si({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const n=await w("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to unlink member.");L=Array.isArray(n.links)?n.links:L,h("member-link-unlinked",n.message||"Member link removed.",{ttlMs:m})}catch(n){x=k(n)}l()}}function X(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function rn(t){const e=X(t);return e?L.filter(r=>X(r.eso_account_name)===e):[]}function nn(t){const e=String(t||"").trim();return e?L.filter(r=>String(r.discord_user_id||"").trim()===e):[]}function To(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const r=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(r.length>0){const i=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const s=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return s||r[0]}const n=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return n||e[0]}function Id(t){return To(nn(t))}function Od(t){return`${X(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function di(){return A?A.mode==="discord-to-eso"?nn(A.discordUserId):rn(A.esoAccountName):[]}function xd(t){const e=String(t||"").trim(),r=P.find(n=>String(n.discord_id||"").trim()===e);return r&&(r.server_nickname||r.global_name||r.username||r.discord_id)||e}function Bo(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?nn(t.discordUserId):rn(t.esoAccountName),n=To(r),i=String((n==null?void 0:n.link_status)||"").trim().toLowerCase(),s=r.filter(a=>String(a.link_status||"").trim().toLowerCase()==="linked").length,o=r.filter(a=>String(a.link_status||"").trim().toLowerCase()==="candidate").length;return s>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?s===1?n.eso_account_name:`${s} ESO accounts`:s===1?n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member":`${s} Discord accounts`}`}:i==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?n.eso_account_name:n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member"}`}:i==="blocked"||Number((n==null?void 0:n.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function Co(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,n=Bo(t);return`
    <button
      class="member-link-status-dot member-link-status-${f(n.className)}"
      type="button"
      title="${f(n.title)}"
      aria-label="${f(n.label)}"
      data-open-member-link-dialog="${f(e)}"
      data-member-link-value="${f(r||"")}"
    ></button>
  `}function qd(){return A?A.mode==="discord-to-eso"?xd(A.discordUserId):A.esoAccountName||"":""}function Io(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function Wn(t){const e=Io((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const r=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(r.includes("discord_username")||r.includes("username"))return"Username";if(r.includes("discord_display_name")||r.includes("global")||r.includes("display"))return"Global Name";if(r.includes("discord_server_nickname")||r.includes("server")||r.includes("nickname"))return"Server Nickname";const n=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(n==="exact"||n==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",s=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const a of s){const u=Fd(i,a.value);(!o||u>o.score)&&(o={...a,score:u})}if(o&&o.score>0)return o.field}return""}function ce(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function Fd(t,e){const r=ce(t),n=ce(e);if(!r||!n)return 0;if(r===n)return 100;if((r.includes(n)||n.includes(r))&&Math.min(r.length,n.length)>=4)return 88;const i=Math.abs(r.length-n.length),s=[...r].findIndex((a,u)=>a!==n[u]),o=s===-1?Math.min(r.length,n.length):s;return Math.max(0,Math.min(75,Math.round(o*10-i*3)))}function Pd(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function Gd(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function Ud(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),r=Pd(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${c(r)}</span>`}function Vd(t){var a;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",r=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",n=String(t.link_status||"").trim().toLowerCase(),o=n==="linked"?`<button
        class="member-link-trash-button"
        type="button"
        aria-label="Unlink this ESO/Discord pair"
        title="Unlink this ESO/Discord pair"
        data-unlink-dialog-member-link
        data-unlink-eso-account="${f(t.eso_account_name||"")}"
        data-unlink-discord-user-id="${f(t.discord_user_id||"")}"
      >\u{1F5D1}</button>`:n==="candidate"?`<button
          class="member-link-approve-button"
          type="button"
          aria-label="Approve suggested link"
          title="Approve suggested link"
          data-accept-dialog-member-candidate="${f(t.eso_account_name||"")}"
          data-accept-dialog-discord-user-id="${f(t.discord_user_id||"")}"
        >\u2713</button>`:Number(t.locked||0)===1||n==="blocked"?`<button
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
        <div><span>ESO:</span> ${c(t.eso_account_name||"")}</div>
        <div><span>Discord:</span> ${c(e)}</div>
        <div><span>Status:</span> ${Ud(t)} \xB7 ${c(Gd(t.link_method))} \xB7 ${c(String((a=t.match_confidence)!=null?a:""))}% \xB7 ${c(r)}</div>
        ${Wn(t)?`<div><span>Matched:</span> Matched on ${c(Wn(t))}</div>`:""}
      </div>
      ${o}
    </div>
  `}function Hd(){const t=di();return t.length?[...t].sort((r,n)=>{var u,g;const i=String(r.link_status||"").trim().toLowerCase(),s=String(n.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},a=((u=o[i])!=null?u:9)-((g=o[s])!=null?g:9);return a!==0?a:Number(n.match_confidence||0)-Number(r.match_confidence||0)}).map(r=>Vd(r)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function Wd(){if(_t)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(be)return`<div class="discord-data-error">${c(be)}</div>`;if(!Array.isArray(Qe)||Qe.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(di().map(r=>Od(r))),e=[...Qe].filter(r=>{const n=(A==null?void 0:A.mode)==="discord-to-eso"?`${X(r.account_name)}::${String(A.discordUserId||"").trim()}`:`${X(A==null?void 0:A.esoAccountName)}::${String(r.discord_id||"").trim()}`;return!t.has(n)}).sort((r,n)=>{const i=Number(n.confidence||0)-Number(r.confidence||0);return i!==0?i:gs(r).localeCompare(gs(n),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(r=>jd(r)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function gs(t){return((A==null?void 0:A.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function jd(t,e={}){var y,b,F;const r=(A==null?void 0:A.mode)||"",n=r==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=Io(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),s=r==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[s,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),a=r==="discord-to-eso"?t.account_name:t.discord_id,u=e.disabled===!0,g=[n,s,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),S=[n,o,`${(y=t.confidence)!=null?y:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${f(a||"")}" data-member-link-option-search="${f(g)}" title="${f(S)}" ${u?"disabled":""}>
      <span class="member-link-option-name" title="${f(n||"")}">${c(n||"")}</span>
      <span class="member-link-option-subtitle" title="${f(o||"")}">${c(o||"")}</span>
      <span class="member-link-option-confidence" title="${f(String((b=t.confidence)!=null?b:0))}%">${c(String((F=t.confidence)!=null?F:0))}%</span>
    </button>
  `}function zd(){const t=(A==null?void 0:A.mode)||"",e=qd(),r=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
    <div class="roster-history-overlay member-link-dialog-overlay" role="dialog" aria-modal="true" aria-labelledby="memberLinkDialogTitle">
      <div class="roster-history-dialog member-link-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="memberLinkDialogTitle">Member Link</h3>
            <p>${c(e)} \u2192 choose ${c(r)}.</p>
          </div>
          <button id="closeMemberLinkDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close member link window" title="Close">\xD7</button>
        </div>

        <div class="member-link-dialog-body">
          <section class="member-link-dialog-section member-link-current-section">
            ${Hd()}
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
              value="${f(fr)}"
            />
            ${Wd()}
          </section>
        </div>

      </div>
    </div>
  `}async function Oo(t,e){if(!(d!=null&&d.connected)||!_()){h("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:m});return}Ge=!0,A=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},Qe=[],_t=!0,be="",fr="",ee=-1,l();try{if(!Array.isArray(L)||L.length===0){const i=await w("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(L=Array.isArray(i.links)?i.links:[])}const n=await w("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load link suggestions.");Qe=Array.isArray(n.options)?n.options:[]}catch(r){be=k(r)}finally{_t=!1,l()}}function Et(){document.removeEventListener("keydown",jn),Ge=!1,A=null,Qe=[],_t=!1,be="",fr="",ee=-1,l()}function xo(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function ys(t){const e=xo();if(e.forEach(n=>n.classList.remove("member-link-option-row-active")),e.length===0){ee=-1;return}ee=Math.max(0,Math.min(t,e.length-1));const r=e[ee];r.classList.add("member-link-option-row-active"),r.scrollIntoView({block:"nearest"})}function qo(){const t=ce(fr),e=[...document.querySelectorAll(".member-link-option-row")];let r=0;e.forEach(i=>{const s=ce(i.dataset.memberLinkOptionSearch||i.textContent||""),o=!t||s.includes(t);i.hidden=!o,i.classList.remove("member-link-option-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinkSuggestionSearchEmpty");n&&(n.hidden=r!==0),ee=-1}function Yd(t){fr=t.target.value||"",qo()}function Kd(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=xo();if(e.length===0)return;if(t.key==="ArrowDown"){const n=ee<0?0:ee+1;ys(n>=e.length?e.length-1:n);return}const r=ee<0?e.length-1:ee-1;ys(r<0?0:r)}function jn(t){!Ge||t.key==="Escape"&&(t.preventDefault(),Et())}async function Jd(t){if(!(!A||!t))try{const e=A.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:A.discordUserId}:{esoAccountName:A.esoAccountName,discordUserId:t},r=await w("guildsync:manual-link-member",e,3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to link members.");L=Array.isArray(r.links)?r.links:L,h("member-link-saved",r.message||"Member link saved.",{ttlMs:m}),Et()}catch(e){be=k(e),l()}}async function Qd(t,e=""){await Mo(t,e),Et()}async function Fo(){if(!!A){_t=!0,be="",l();try{const t=A.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:A.discordUserId}:{mode:"eso-to-discord",accountName:A.esoAccountName},e=await w("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");Qe=Array.isArray(e.options)?e.options:[]}catch(t){be=k(t)}finally{_t=!1,l()}}}async function Xd(t="",e=""){const r=di().find(i=>X(i.eso_account_name)===X(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!r||!await si({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await w("guildsync:manual-unlink-member",{esoAccountName:r.eso_account_name,discordUserId:r.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");L=Array.isArray(i.links)?i.links:L,h("member-link-unlinked",i.message||"Member link removed.",{ttlMs:m}),await Fo()}catch(i){be=k(i),l()}}async function Zd(t="",e=""){await No(t,e)&&await Fo()}function Po(){var r;if(!Ge)return;document.removeEventListener("keydown",jn),document.addEventListener("keydown",jn),(r=document.querySelector("#closeMemberLinkDialogButton"))==null||r.addEventListener("click",Et);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",Yd),t.addEventListener("keydown",Kd),qo()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(n=>{n.addEventListener("click",()=>Xd(n.dataset.unlinkEsoAccount||"",n.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-unblock-dialog-member-auto-link]").forEach(n=>{n.addEventListener("click",()=>Zd(n.dataset.unblockEsoAccount||"",n.dataset.unblockDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(n=>{n.addEventListener("click",()=>Jd(n.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(n=>{n.addEventListener("click",()=>Qd(n.dataset.acceptDialogMemberCandidate||"",n.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",n=>{n.target===e&&Et()})}function Go(){var e,r,n;if(!Nt)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",Gn),(r=document.querySelector("#rerunAssociateTicketReportButton"))==null||r.addEventListener("click",()=>jo()),(n=document.querySelector("#copyAssociateTicketReportGridButton"))==null||n.addEventListener("click",()=>sd());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Gn()})}function Uo(){var e,r,n;if(!Bt)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",Un),(r=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||r.addEventListener("click",()=>Wo()),(n=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||n.addEventListener("click",()=>ld());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Un()})}function Vo(){var n,i,s;if(!Ct)return;(n=document.querySelector("#closeDiscordLastSeenReportButton"))==null||n.addEventListener("click",Vn),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>Ho()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>kd()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(o=>{o.addEventListener("click",()=>hd(o.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",eu);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",tu),ui();const r=document.querySelector(".discord-last-seen-report-overlay");r&&r.addEventListener("click",o=>{o.target===r&&Vn()})}function eu(t){It=t.target.value||"",ui()}function tu(t){Le=t.target.value||"",ui()}function ui(){const t=ce(It),e=String(Le||"").trim().toLowerCase(),r=[...document.querySelectorAll("[data-discord-last-seen-row]")];let n=0;r.forEach(s=>{const o=ce(s.dataset.discordLastSeenSearch||s.textContent||""),a=String(s.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),S=(!t||o.includes(t))&&(!e||a===e);s.hidden=!S,S&&(n+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=n!==0)}async function Ho(){if(!(d!=null&&d.connected)||!_()){Je="You must be logged in and connected to run this report.",l();return}Ae=!0,Je="",l();try{const t=await w("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");P=Si(t.members),Zr=wi(t.roles),ri=[...P]}catch(t){Je=k(t)}finally{Ae=!1,l(),D("discordLastSeenReportSearchInput")}}async function Wo(){if(!(d!=null&&d.connected)||!_()){Ke="You must be logged in and connected to run this report.",l();return}_e=!0,Ke="",l();try{const t=await w("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");sr=Array.isArray(t.rows)?t.rows:[]}catch(t){Ke=k(t)}finally{_e=!1,l()}}async function jo(){if(!(d!=null&&d.connected)||!_()){Ye="You must be logged in and connected to run this report.",l();return}we=!0,Ye="",l();try{const t=await w("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Tt=Array.isArray(t.rows)?t.rows:[]}catch(t){Ye=k(t)}finally{we=!1,l()}}function gt(){const t=String(Ft||"").trim().toLowerCase(),e={account_name:"Anonymous",rank:"Manual Entry"},r=new Set(["anonymous"]),n=j.filter(i=>String(i.account_name||"").trim()).filter(i=>{const o=String(i.account_name||"").trim().toLowerCase();return!o||r.has(o)||t&&!o.includes(t)?!1:(r.add(o),!0)}).slice().sort((i,s)=>{const o=String(i.account_name||"").toLowerCase(),a=String(s.account_name||"").toLowerCase(),u=t&&o.startsWith(t)?0:1,g=t&&a.startsWith(t)?0:1;return u!==g?u-g:o.localeCompare(a)}).slice(0,19);return[e,...n]}function zo(t=gt()){const e=String(E.accountName||"").trim();return t.length===0?'<div class="roster-history-muted manual-ticket-no-matches">No matching guild members found.</div>':t.map((r,n)=>`
        <button class="roster-history-match${n===C||r.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${f(r.account_name)}" role="option" aria-selected="${n===C||r.account_name===e?"true":"false"}">
          <span>${c(r.account_name)}</span>
          <strong>${c(r.rank||"")}</strong>
          ${n===C?"<small>Enter</small>":""}
        </button>
      `).join("")}function Yo(){document.querySelectorAll("[data-manual-ticket-account]").forEach(t=>{t.addEventListener("mousedown",e=>{e.preventDefault()}),t.addEventListener("click",()=>{Ko(t.dataset.manualTicketAccount||"")})})}function Ln(){const t=document.querySelector("#manualTicketMatchList");if(!t)return;const e=gt();C>=e.length&&(C=e.length>0?e.length-1:-1),t.innerHTML=zo(e),Yo()}function Ko(t){const e=String(t||"").trim();E.accountName=e,Ft=e,Q=!1,C=-1,U="",l()}function D(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const r=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(r,r)},0)}function ru(){const t=Q?gt():[],e=String(E.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Entry</h3>
            <p>Add a manual banking or raffle entry such as FFTG, officer corrections, or anonymous gold.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${U?`<div class="discord-data-error">${c(U)}</div>`:""}

        <div class="manual-ticket-form">
          <div class="manual-ticket-member-picker">
            <label class="manual-ticket-member-field" for="manualTicketAccountSearchInput">
              <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(Ft)}" autocomplete="off" />
            </label>

            ${Q?`
              <div id="manualTicketMatchList" class="roster-history-match-list manual-ticket-match-list" role="listbox" aria-label="Matching guild members">
                ${zo(t)}
              </div>
            `:""}
          </div>

          ${e?`<div class="roster-history-muted manual-ticket-selected-member">Selected: ${c(e)}</div>`:""}

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
              <textarea id="manualTicketNoteInput" class="discord-search-input manual-ticket-note-input" rows="4" placeholder="Enter a reason such as FFTG">${c(E.note)}</textarea>
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
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${Gr?"disabled":""}>${Gr?"Saving...":"Add Manual Entry"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Jo(){var s,o,a,u,g,S;if(!ye)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{ye=!1,l()});const t=document.querySelector("#manualTicketAccountSearchInput");if(t){const y=({rerender:b=!1}={})=>{if(Q=!0,C=gt().length>0?0:-1,b){l(),D("manualTicketAccountSearchInput");return}Ln()};t.addEventListener("focus",()=>{Q||y({rerender:!0})}),t.addEventListener("click",()=>{Q||y({rerender:!0})}),t.addEventListener("input",b=>{Ft=b.target.value||"",E.accountName="",Q=!0,C=gt().length>0?0:-1,Ln()}),t.addEventListener("keydown",b=>{if(b.key==="Escape")return;if(!Q){(b.key==="ArrowDown"||b.key==="ArrowUp")&&(b.preventDefault(),y({rerender:!0}));return}const F=gt();if(b.key==="ArrowDown"||b.key==="ArrowUp"){if(F.length===0)return;b.preventDefault();const Ut=b.key==="ArrowDown"?1:-1;C=((C<0?0:C)+Ut+F.length)%F.length,Ln();return}if(b.key!=="Enter")return;b.preventDefault();const ke=F[C>=0?C:0];ke!=null&&ke.account_name&&Ko(ke.account_name)})}Yo(),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",y=>{E.note=y.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(y=>{y.addEventListener("click",()=>{const b=String(y.dataset.manualTicketType||"").trim().toLowerCase();E.ticketType=b==="monthly"?"monthly":"biweekly",l()})}),(a=document.querySelector("[data-manual-ticket-toggle]"))==null||a.addEventListener("click",()=>{E.ticketType=E.ticketType==="monthly"?"biweekly":"monthly",l()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",y=>{const b=String(y.target.value||"").replace(/\D/g,"");y.target.value!==b&&(y.target.value=b),E.goldValue=b});const r=document.querySelector("#manualTicketCountInput");r==null||r.addEventListener("input",y=>{const b=String(y.target.value||"").replace(/\D/g,"");y.target.value!==b&&(y.target.value=b),E.tickets=b});const n=y=>{const b=Number(E.tickets)||0,F=Math.max(0,b+y);E.tickets=String(F),r&&(r.value=E.tickets,r.focus())};(u=document.querySelector("#manualTicketCountUpButton"))==null||u.addEventListener("click",()=>n(1)),(g=document.querySelector("#manualTicketCountDownButton"))==null||g.addEventListener("click",()=>n(-1)),(S=document.querySelector("#saveManualBiweeklyTicketButton"))==null||S.addEventListener("click",()=>nu());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",y=>{y.target===i&&(ye=!1,l())})}async function nu(){const t=String(E.accountName||"").trim(),e=String(E.note||"").trim(),r=String(E.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",n=Number(String(E.goldValue||"").trim()||0),i=Number(String(E.tickets||"").trim()||0);if(Q){U="Select a matching guild member or Anonymous from the list before saving.",l(),D("manualTicketAccountSearchInput");return}if(!t){U="Select a matching guild member or Anonymous from the list before saving.",l(),D("manualTicketAccountSearchInput");return}if(!Number.isFinite(n)||n<0){U="Gold value must be zero or greater.",l();return}if(!Number.isFinite(i)||i<0){U="Tickets must be zero or greater.",l();return}const s=t.toLowerCase()==="anonymous";if(s&&Math.floor(i)>0){U="Anonymous cannot be awarded tickets. Use 0 tickets and enter a gold value.",l();return}if(Math.floor(n)===0&&Math.floor(i)===0){U=s?"Enter a gold value for Anonymous when tickets are 0.":"Enter gold or tickets. Both cannot be zero.",l();return}Gr=!0,U="",l();try{const o=await w("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:r,gold_value:Math.floor(n),tickets:Math.floor(i)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Failed to add manual entry.");ye=!1,E={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},Ft="",C=-1,Q=!1,await le({silent:!0}),h("manual-ticket-added",o.message||"Manual entry added.",{ttlMs:m})}catch(o){U=k(o)}finally{Gr=!1,l()}}async function iu(t=""){const e=String(t||"").trim();if(!!e){Mt=!0,ir=e,Ne=[],Pr=!0,ze=!1,Te="",vt="",l();try{const r=await w("guildsync:request-roster-member-notes",{account_name:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load roster notes.");Ne=Array.isArray(r.notes)?r.notes:[]}catch(r){Te=k(r)}finally{Pr=!1,l()}}}function zn(){Mt=!1,ir="",Ne=[],Pr=!1,ze=!1,Te="",vt="",l()}function su(){var r,n;if(!Mt)return;(r=document.querySelector("#closeRosterNotesButton"))==null||r.addEventListener("click",zn);const t=document.querySelector("#rosterNotesNewNote");t&&t.addEventListener("input",i=>{vt=i.target.value||""}),(n=document.querySelector("#saveRosterNoteButton"))==null||n.addEventListener("click",()=>ou());const e=document.querySelector(".roster-notes-overlay");e&&e.addEventListener("click",i=>{i.target===e&&zn()})}async function ou(){const t=String(vt||"").trim();if(!t){Te="Enter a note before saving.",l();return}ze=!0,Te="",l();try{const e=await w("guildsync:add-roster-member-note",{account_name:ir,note:t},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to save roster note.");e.note&&(Ne=[...Ne,e.note]),vt="";const r=j.find(n=>X(n.account_name)===X(ir));r&&(r.note_count=Number(r.note_count||0)+1)}catch(e){Te=k(e)}finally{ze=!1,l()}}function Qo(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>Pt());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{kt=!0,pe="",l()});const r=document.querySelector("#rosterMemberSearch");r&&(r.addEventListener("input",o=>{Fr=o.target.value||"",On=o.target.selectionStart,xn=o.target.selectionEnd,N=-1,l({restoreRosterSearchFocus:!0})}),r.addEventListener("keydown",au)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Ol(o.dataset.rosterSortColumn||"account_name")})});const n=document.querySelector("#rosterRankFilter");n&&n.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(je.add(a),N=-1,l())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRosterRankFilter||"";je.delete(a),N=-1,l()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(ht.add(a),N=-1,l())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRosterLinkStatusFilter||"";ht.delete(a),N=-1,l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>Oo(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))}),document.querySelectorAll("[data-open-roster-notes]").forEach(o=>{o.addEventListener("click",()=>iu(o.dataset.openRosterNotes||""))}),su();const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{Fr="",je.clear(),ht.clear(),he="",q="",N=-1,l()}),cu()}function au(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){N=-1;return}t.preventDefault(),t.key==="ArrowDown"?N=N<0?0:Math.min(N+1,e.length-1):t.key==="ArrowUp"&&(N=N<0?e.length-1:Math.max(N-1,0)),e.forEach((n,i)=>{n.classList.toggle("roster-search-active-row",i===N)});const r=e[N];r&&typeof r.scrollIntoView=="function"&&r.scrollIntoView({block:"nearest",inline:"nearest"})}function cu(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{kt=!1,l()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",r=>{if(nr=r.target.value||"",Y=-1,!nr.trim()){clearTimeout(_n),pe="",H=[],qe="",$e=[],Me=!1,l(),D("rosterHistorySearchInput");return}clearTimeout(_n),_n=setTimeout(()=>{fu({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(H.length===0)return;r.preventDefault();const i=r.key==="ArrowDown"?1:-1;Y=((Y<0?0:Y)+i+H.length)%H.length,l(),D("rosterHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=H[Y>=0?Y:0];n!=null&&n.account_name&&ks(n.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(r=>{r.addEventListener("click",()=>{ks(r.dataset.rosterHistoryAccount||"")})})}function Xo(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{St=!1,l()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",r=>{Se=r.target.value||"",K=-1,Ue+=1;const n=Ue;if(clearTimeout(as),!Se.trim()){ge="",W=[],wt="",tt="",Be=[],Ce=!1,l(),D("discordHistorySearchInput");return}as=setTimeout(()=>{lu({auto:!0,keepFocus:!0,generation:n})},ll)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(W.length===0)return;r.preventDefault();const i=r.key==="ArrowDown"?1:-1;K=((K<0?0:K)+i+W.length)%W.length,l(),D("discordHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=W[K>=0?K:0];n!=null&&n.discord_id&&bs(n.discord_id,Pn(n))})),document.querySelectorAll("[data-discord-history-id]").forEach(r=>{r.addEventListener("click",()=>{bs(r.dataset.discordHistoryId||"",r.dataset.discordHistoryName||"")})})}async function lu(t={}){const e=Number.isInteger(t.generation)?t.generation:++Ue,r=Se.trim();if(e===Ue){if(!r){ge="",W=[],K=-1,wt="",tt="",Be=[],Ce=!1,l(),t.keepFocus&&D("discordHistorySearchInput");return}Ce=!0,ge="",W=[],K=-1,wt="",tt="",Be=[],l(),t.keepFocus&&D("discordHistorySearchInput");try{const n=await w("guildsync:request-discord-member-history",{query:r},3e4);if(e!==Ue||r!==Se.trim())return;if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search Discord member history.");W=du(n.matches),K=W.length>0?0:-1}catch(n){if(e!==Ue||r!==Se.trim())return;ge=k(n)}finally{if(e!==Ue||r!==Se.trim())return;Ce=!1,l(),t.keepFocus&&D("discordHistorySearchInput")}}}async function bs(t,e="",r={}){const n=String(t||"").trim();if(!!n){wt=n,tt=String(e||n).trim(),Se=tt,Be=[],Ce=!0,ge="",l();try{const i=await w("guildsync:request-discord-member-history-events",{discord_id:n},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");Be=uu(i.events)}catch(i){ge=k(i)}finally{Ce=!1,r.keepLoading||l()}}}function du(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function uu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n,i,s,o,a,u,g,S,y,b;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((n=(r=e.old_value)!=null?r:e.oldValue)!=null?n:"").trim(),new_value:String((s=(i=e.new_value)!=null?i:e.newValue)!=null?s:"").trim(),event_timestamp:(u=(a=(o=e.event_timestamp)!=null?o:e.eventTimestamp)!=null?a:e.timestamp)!=null?u:"",event_datetime:(S=(g=e.event_datetime)!=null?g:e.eventDatetime)!=null?S:"",initiator:String((b=(y=e.initiator)!=null?y:e.initiatorName)!=null?b:"").trim(),source:String(e.source||"").trim()}}):[]}async function fu(t={}){const e=nr.trim();if(!e){pe="",H=[],Y=-1,qe="",$e=[],Me=!1,l(),t.keepFocus&&D("rosterHistorySearchInput");return}Me=!0,pe="",H=[],Y=-1,qe="",$e=[],l(),t.keepFocus&&D("rosterHistorySearchInput");try{const r=await w("guildsync:request-roster-rank-history",{query:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search roster rank history.");H=hu(r.matches),Y=H.length>0?0:-1}catch(r){pe=k(r)}finally{Me=!1,l(),t.keepFocus&&D("rosterHistorySearchInput")}}async function ks(t,e={}){const r=String(t||"").trim();if(!!r){qe=r,nr=r,$e=[],Me=!0,pe="",l();try{const n=await w("guildsync:request-roster-stream-history",{account_name:r},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster stream history.");$e=mu(n.events)}catch(n){pe=k(n)}finally{Me=!1,e.keepLoading||l()}}}function hu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function mu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(n=(r=e.timestamp)!=null?r:e.timestampS)!=null?n:"",officer:String(e.officer||"").trim()}}):[]}function Zo(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n,i;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(r=e.joined)!=null?r:"",note_count:Number((i=(n=e.note_count)!=null?n:e.noteCount)!=null?i:0)||0}}).sort((e,r)=>e.account_name.localeCompare(r.account_name)):[]}function pu(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function sn(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function fi(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function gu(t={}){j=Zo(t.members),qr=t.last_refresh||new Date().toISOString(),R==="eso-members"&&l(),h("roster-data-updated",`Roster data updated. Loaded ${j.length} member record${j.length===1?"":"s"}.`,{ttlMs:m})}async function Pt(t={}){if(!!(d!=null&&d.connected)){xe=!0,l();try{const e=await w("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");j=Zo(e.members),qr=e.last_refresh||qr,t.silent||h("roster-data-loaded",`Loaded ${j.length} roster member${j.length===1?"":"s"}.`,{ttlMs:m})}catch(e){h("roster-data-error",k(e),{ttlMs:m})}finally{xe=!1,l()}}}async function yu(t={}){var e;if(!!_()){if(!(d!=null&&d.connected)){h("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}xe=!0,l();try{const r=await zc(t);if(!(r!=null&&r.ok)){h("roster-data-pending",(r==null?void 0:r.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:m});return}const n={local_upload_id:ea(),authenticated_username:Z(),authenticated_discord_user_id:((e=p==null?void 0:p.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await ra(n)}catch(i){throw bu(n),i}await Pt({silent:!0})}catch(r){h("roster-data-error",k(r),{ttlMs:m})}finally{xe=!1,l()}}}function ea(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function hi(){try{const t=window.localStorage.getItem(Js),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function ta(t){window.localStorage.setItem(Js,JSON.stringify(Array.isArray(t)?t:[]))}function bu(t){const e=String((t==null?void 0:t.local_upload_id)||ea()),r=hi().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),ta(r),h("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function ku(t){const e=hi().filter(r=>(r==null?void 0:r.local_upload_id)!==t);ta(e)}async function vu(){if(kn||!(d!=null&&d.connected)||!_())return;const t=hi();if(t.length!==0){kn=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!_())return;await ra(e),ku(e.local_upload_id)}}catch(e){h("roster-data-pending-error",`Pending roster upload retry failed: ${k(e)}`,{ttlMs:m})}finally{kn=!1}}}async function ra(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await w("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const r=await Yc(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return h("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:m}),e}async function Su(t={}){var e,r;if(!!_()){if(!(d!=null&&d.connected)){h("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}try{const n=await tl(t);if(!(n!=null&&n.ok)){h("applications-data-info",(n==null?void 0:n.message)||"No application records were found to process.",{ttlMs:m});return}if((Array.isArray((e=n==null?void 0:n.data)==null?void 0:e.records)?n.data.records:[]).length===0){h("applications-data-info",`No application records were found in ${n.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:m});return}const s={local_upload_id:na(),authenticated_username:Z(),authenticated_discord_user_id:((r=p==null?void 0:p.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await sa(s)}catch(o){throw wu(s),o}}catch(n){h("applications-data-error",k(n),{ttlMs:m})}}}function na(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function mi(){try{const t=window.localStorage.getItem(Qs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function ia(t){window.localStorage.setItem(Qs,JSON.stringify(Array.isArray(t)?t:[]))}function wu(t){const e=String((t==null?void 0:t.local_upload_id)||na()),r=mi().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),ia(r),h("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function _u(t){const e=mi().filter(r=>(r==null?void 0:r.local_upload_id)!==t);ia(e)}async function Au(){if(vn||!(d!=null&&d.connected)||!_())return;const t=mi();if(t.length!==0){vn=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!_())return;await sa(e),_u(e.local_upload_id)}}catch(e){h("applications-data-pending-error",`Pending application upload retry failed: ${k(e)}`,{ttlMs:m})}finally{vn=!1}}}async function sa(t){var i;if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return h("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:m}),{ok:!0,sent_count:0,skipped_empty:!0};let r=0;for(const s of e){const o=await w("guildsync:eso-guild-application-message",{...t,record:s,recordKey:(s==null?void 0:s.recordKey)||"",message:Lu(s)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Backend rejected the application data payload. Application data was not cleared.");r+=1}const n=await rl(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return h("applications-data-sent",`Sent ${r} application record${r===1?"":"s"} to GuildSync backend.`,{ttlMs:m}),{ok:!0,sent_count:r}}function Lu(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),r=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",n=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",s=String(t.applicationText||"_No application text captured._"),o=Object.entries(t).filter(([a])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(a)).map(([a,u])=>`**${a}:** ${Eu(u)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${r}** ${n} an application from **${i}**.`,"","**Application text:**","```",s.slice(0,1500),"```",o.length>0?"":null,o.length>0?"**Full captured record fields:**":null,...o].filter(a=>a!==null).join(`
`)}function Eu(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function Ru(t={}){await Su(t)}function Du(){const t=Yn(M),e=cf(t,M),r=M!=="other";return`
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
          ${Ou()}
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${c(_a(ro))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${Fe||!_()?"disabled":""} ${_()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Fe?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${En("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${En("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${En("other","?","Other","All other deposits")}
        </div>

        ${Iu(M)}

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
              ${t.length>0?t.map(n=>df(n,r)).join(""):uf(r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${c(yt(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${M==="monthly"?`<div>Raffle Pot: <strong>${c(yt(Math.floor(e.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${M==="biweekly"?`<div>Raffle Pot: <strong>${c(yt(ha(e.amount)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${M==="biweekly"?`<div>Draws: <strong>${c(String(lf(e.amount)))}</strong></div>`:""}
          ${r?`<div>Total Tickets Awarded: <strong>${c(yr(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${Xe?Tu(Yn(st)):""}
    </div>
  `}function $u(){return`
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
            <input id="bankingHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" autocomplete="off" placeholder="Start typing part of an account name..." value="${f(rt)}" />
          </label>
          ${Mu()}
        </div>

        ${se?`<div class="discord-data-error">${c(se)}</div>`:""}

        <div class="banking-history-results">
          <div class="roster-history-section-title">Banking History${ne?`: ${c(ne)}`:""}${ne?`<span class="banking-history-count">${c(String(re.length))} record${re.length===1?"":"s"} found</span>`:""}</div>
          ${Nu()}
        </div>
      </div>
    </div>
  `}function Mu(){return rt.trim()?ie&&I.length===0&&!ne?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">Searching...</div></div>':I.length===0&&!ne?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">No matching banking names found.</div></div>':I.length===0?"":`
    <div class="banking-history-autocomplete" role="listbox" aria-label="Banking history matches">
      ${I.map((t,e)=>`
        <button class="banking-history-autocomplete-option${e===J?" is-selected":""}" type="button" data-banking-history-account="${f(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <small>${c(String(Number(t.record_count||t.recordCount||0)||0))} record${Number(t.record_count||t.recordCount||0)===1?"":"s"}</small>
        </button>
      `).join("")}
    </div>
  `:""}function Nu(){return ne?ie&&re.length===0?'<div class="roster-history-muted">Loading banking history...</div>':re.length===0?'<div class="roster-history-muted">No banking history found for this account.</div>':`
    <div class="roster-history-event-table-shell banking-history-table-shell">
      <table class="discord-member-table roster-history-event-table banking-history-table">
        <thead>
          <tr>
            <th class="banking-history-date-column">Date / Time (Local)</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Tickets</th>
            <th class="banking-history-notes-column">Notes</th>
          </tr>
        </thead>
        <tbody>
          ${re.map(t=>{var e,r,n,i,s,o,a;return`
            <tr>
              <td>${c(Ju((n=(r=(e=t.event_timestamp)!=null?e:t.eventTimestamp)!=null?r:t.time)!=null?n:""))}</td>
              <td>${c(Qu(t.transaction_type||t.type||""))}</td>
              <td>${c(Xu((s=(i=t.deposit_amount)!=null?i:t.depositAmount)!=null?s:t.amount))}</td>
              <td>${c(Zu((a=(o=t.ticket_quantity)!=null?o:t.ticketQuantity)!=null?a:t.ticketAmount))}</td>
              <td class="banking-history-note-cell">${c(t.note||"")}</td>
            </tr>
          `}).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see banking history.</div>'}function Tu(t){return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${c(oe(st))} Deposits</h3>
            <p class="bank-export-subtitle">Copy this grid and paste it directly into Google Sheets.</p>
          </div>
          <button id="closeBankingExportGridButton" class="roster-history-close modal-close-button bank-export-close-button" type="button" aria-label="Close export grid">\xD7</button>
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
                <th>Number of Tickets</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(e=>Bu(e)).join(""):Cu()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${c(la(t))}</textarea>
      </div>
    </div>
  `}function Bu(t){return`
    <tr>
      <td>${c(t.displayName||"")}</td>
      <td>${c(String(bi(t,st)))}</td>
      <td>${c(String(Number(t.ticketAmount)||0))}</td>
      <td>${c(t.note||"")}</td>
    </tr>
  `}function Cu(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${c(oe(st))}.</td>
    </tr>
  `}function Iu(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=da(t),r=zr(t),n=r<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${f(oe(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${c(oe(t))} Raffle Period ${r===0?"(Current)":`(${Math.abs(r)} period${Math.abs(r)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${c(Br(e.salesStart))} through ${c(Br(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${c(Br(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${n?"":"disabled"} aria-label="Next ${f(oe(t))} raffle period">\u203A</button>
    </div>
  `}function En(t,e,r,n){const i=M===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${f(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${c(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${c(r)}</span>
        <span class="bank-section-subtitle">${c(n)}</span>
      </span>
    </button>
  `}function Ou(){if(!_())return"";const t=on(),e=gr(),r=oa(),n=t+e+r;if(n<=0)return"";const i=`Desktop Client Required${n>0?` (${n})`:""}`,s="Deposit mail checkout and ESO SavedVariables writing are disabled in the web client. Use the GuildSync desktop client for this mail workflow.";return`
    <button id="checkoutDepositMailButton" class="bank-export-button deposit-mail-button deposit-mail-status-only" type="button" data-deposit-mail-action="disabled" aria-disabled="true" title="${f(s)}" aria-label="${f(`${i}. ${s}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${c(i)}</span>
      <span class="deposit-mail-web-disabled" aria-hidden="true">Web Disabled</span>
    </button>
  `}function gr(){return br().reduce((t,e)=>t+Gt(e.records).length,0)}function xu(){const t=(p==null?void 0:p.user)||{};return new Set([Z(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function qu(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?xu().has(e):!1}function oa(){return _()?G.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),r=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&r==="written_to_eso"&&qu(t)}).length:0}function on(){return G.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),r=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&r==="unsent"}).length}function Fu(t){const e=String(t||"").trim();return G.find(r=>String(r.eventId||"").trim()===e)||null}function pi(t){const e=String(t||"other").toLowerCase(),r=["biweekly","monthly","other"],n=r.includes(e)?e:"other",i=r.filter(s=>s!==n);return[i[0]||"biweekly",n,i[1]||"other"]}function gi(t={},e="other"){const r=String(e||"other").toLowerCase(),n=Number(t==null?void 0:t.amount)||0;return r===String((t==null?void 0:t.type)||"").toLowerCase()?Number(t==null?void 0:t.ticketAmount)||0:r==="biweekly"?Math.floor(n/500):r==="monthly"?Math.floor(n/2500):0}function aa(t={},e="other",r=""){const n=String(t.type||"other").toLowerCase(),i=oe(n),s=oe(e),o=Z()||"Unknown user",a=[`Moved from ${i} to ${s} by ${o}.`,`Ref ${t.eventId||""}`],u=String(r||"").trim();return u&&a.push(`Reason: ${u}`),a.join(`
`)}function Pu(t){const e=Fu(t);if(!e){h("banking-move-missing","Could not find the selected banking entry.",{ttlMs:m});return}const r=String(e.type||"other").toLowerCase();fe=e,T={targetType:r,note:"",tickets:String(gi(e,r))},ue="",At=!1,xt=!0,l()}function jr(){xt=!1,At=!1,ue="",fe=null,T={targetType:"other",note:"",tickets:""},l()}function Gu(){const t=fe||{},e=String(t.type||"other").toLowerCase(),r=oe(e),n=pi(e);let i=String(T.targetType||n[0]||"other").toLowerCase();n.includes(i)||(i=n[0]||"other",T.targetType=i);const s=aa(t,i,T.note);return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="bankingMoveDialogTitle">
      <div class="roster-history-dialog manual-ticket-dialog banking-move-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="bankingMoveDialogTitle">Move Banking Entry</h3>
            <p>Move this deposit to a different banking section while preserving a reference to the original event.</p>
          </div>
          <button id="closeBankingMoveDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${ue?`<div class="discord-data-error">${c(ue)}</div>`:""}

        <div class="manual-ticket-form banking-move-form">
          <div class="banking-move-current-entry">
            <div><strong>Current Type:</strong> ${c(r)}</div>
            <div><strong>Event ID:</strong> ${c(t.eventId||"")}</div>
            <div><strong>Depositor:</strong> ${c(t.displayName||"")}</div>
            <div><strong>Amount:</strong> ${c(yt(t.amount))} \u{1FA99}</div>
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
                    data-banking-move-target="${f(o)}"
                  >
                    <strong>${c(oe(o))}</strong>
                    <span>${o===e?"Current / restore original values":`${c(String(gi(t,o)))} tickets`}</span>
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
              <textarea id="bankingMoveNoteInput" class="discord-search-input manual-ticket-note-input banking-move-note-input" rows="1" placeholder="Optional reason for this move">${c(T.note)}</textarea>
            </label>
          </div>

          <div class="roster-history-muted banking-move-generated-note">${c(s).replace(/\n/g,"<br>")}</div>

          <div class="manual-ticket-actions banking-move-actions">
            <button id="saveBankingMoveButton" class="refresh-discord-button banking-move-submit-button" type="button" ${At||i===e?"disabled":""}>${At?"MOVING...":i===e?"SELECT A SIDE TO MOVE":"MOVE"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Uu(){var r,n,i,s;if(!xt)return;(r=document.querySelector("#closeBankingMoveDialogButton"))==null||r.addEventListener("click",()=>jr());function t(o){const a=String(o||"other").toLowerCase(),u=String((fe==null?void 0:fe.type)||"other").toLowerCase(),g=pi(u);T.targetType=g.includes(a)?a:u,T.tickets=String(gi(fe||{},T.targetType)),l()}document.querySelectorAll("[data-banking-move-target]").forEach(o=>{o.addEventListener("click",()=>t(o.dataset.bankingMoveTarget))}),(n=document.querySelector("#bankingMoveTicketsInput"))==null||n.addEventListener("input",o=>{const a=String(o.target.value||"").replace(/\D/g,"");o.target.value!==a&&(o.target.value=a),T.tickets=a}),(i=document.querySelector("#bankingMoveNoteInput"))==null||i.addEventListener("input",o=>{T.note=o.target.value||"";const a=document.querySelector(".banking-move-generated-note");a&&(a.innerText=aa(fe||{},T.targetType||"other",T.note))}),(s=document.querySelector("#saveBankingMoveButton"))==null||s.addEventListener("click",()=>Vu());const e=document.querySelector(".roster-history-overlay");e&&e.addEventListener("click",o=>{o.target===e&&jr()})}async function Vu(){const t=fe;if(!(t!=null&&t.eventId)){ue="No banking entry is selected.",l();return}const e=String(t.type||"other").toLowerCase(),r=pi(e),n=String(T.targetType||r[0]||"other").toLowerCase();if(!r.includes(n)||n===e){ue="Select one of the side destinations before moving this entry.",l();return}const i=n==="other"?0:Math.floor(Number(String(T.tickets||"").trim()||0));if(!Number.isFinite(i)||i<0){ue="Tickets must be zero or greater.",l();return}At=!0,ue="",l();try{const s=await w("guildsync:move-banking-entry",{event_id:t.eventId,target_type:n,tickets:i,note:T.note||""},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to move banking entry.");jr(),await le({silent:!0}),h("banking-entry-moved",s.message||"Banking entry moved.",{ttlMs:m})}catch(s){At=!1,ue=k(s),l()}}function Hu(){if(!_()){h("banking-history-login-required","Login required to lookup banking history.",{ttlMs:m});return}qt=!0,rt="",I=[],re=[],ne="",ie=!1,se="",J=-1,clearTimeout(pt),l(),D("bankingHistorySearchInput")}function Wu(){qt=!1,ie=!1,se="",clearTimeout(pt)}function ju(){if(!qt)return;const t=document.querySelector("#bankingHistorySearchInput");t&&(t.addEventListener("input",e=>{if(rt=e.target.value||"",J=-1,ne="",re=[],!rt.trim()){clearTimeout(pt),se="",I=[],ie=!1,l(),D("bankingHistorySearchInput");return}clearTimeout(pt),pt=setTimeout(()=>{zu({keepFocus:!0})},250)}),t.addEventListener("keydown",e=>{if(e.key==="ArrowDown"||e.key==="ArrowUp"){if(I.length===0)return;e.preventDefault();const n=e.key==="ArrowDown"?1:-1;J=((J<0?0:J)+n+I.length)%I.length,l(),D("bankingHistorySearchInput");return}if(e.key!=="Enter")return;e.preventDefault();const r=I[J>=0?J:0];r!=null&&r.account_name&&vs(r.account_name)})),document.querySelectorAll("[data-banking-history-account]").forEach(e=>{e.addEventListener("click",()=>{vs(e.dataset.bankingHistoryAccount||"")})})}async function zu(t={}){const e=rt.trim();if(!e){se="",I=[],J=-1,ne="",re=[],ie=!1,l(),t.keepFocus&&D("bankingHistorySearchInput");return}ie=!0,se="",I=[],J=-1,l(),t.keepFocus&&D("bankingHistorySearchInput");try{const r=await w("guildsync:request-banking-history-matches",{query:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search banking history.");I=Yu(r.matches),J=I.length>0?0:-1}catch(r){se=k(r)}finally{ie=!1,l(),t.keepFocus&&D("bankingHistorySearchInput")}}async function vs(t){const e=String(t||"").trim();if(!!e){clearTimeout(pt),ne=e,rt=e,I=[],re=[],ie=!0,se="",l();try{const r=await w("guildsync:request-banking-history-records",{account_name:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load banking history.");re=Ku(r.records)}catch(r){se=k(r)}finally{ie=!1,l()}}}function Yu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n,i,s;return{account_name:String(e.account_name||e.accountName||"").trim(),record_count:Number((n=(r=e.record_count)!=null?r:e.recordCount)!=null?n:0)||0,last_event_timestamp:(s=(i=e.last_event_timestamp)!=null?i:e.lastEventTimestamp)!=null?s:""}}).filter(e=>e.account_name):[]}function Ku(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n,i,s,o,a,u,g,S;return{event_id:String(e.event_id||e.eventId||"").trim(),transaction_type:String(e.transaction_type||e.transactionType||e.type||"").trim(),event_timestamp:(i=(n=(r=e.event_timestamp)!=null?r:e.eventTimestamp)!=null?n:e.time)!=null?i:"",deposit_amount:(a=(o=(s=e.deposit_amount)!=null?s:e.depositAmount)!=null?o:e.amount)!=null?a:"",ticket_quantity:(S=(g=(u=e.ticket_quantity)!=null?u:e.ticketQuantity)!=null?g:e.ticketAmount)!=null?S:"",note:String(e.note||"").trim()}}).sort((e,r)=>{const n=Number(e.event_timestamp)||0,i=Number(r.event_timestamp)||0;return n!==i?n-i:String(e.event_id).localeCompare(String(r.event_id),void 0,{numeric:!0})}):[]}function Ju(t){const e=Number(t);if(!e)return"";const r=new Date(e*1e3);if(Number.isNaN(r.getTime()))return String(t);const n=String(r.getMonth()+1).padStart(2,"0"),i=String(r.getDate()).padStart(2,"0"),s=String(r.getFullYear()),o=String(r.getHours()).padStart(2,"0"),a=String(r.getMinutes()).padStart(2,"0"),u=String(r.getSeconds()).padStart(2,"0");return`${n}/${i}/${s} ${o}:${a}:${u}`}function Qu(t){const e=String(t||"").trim().toLowerCase();return e==="monthly"?"50/50":e==="biweekly"?"Bi-Weekly":e==="other"?"Other":e?e.replace(/\b\w/g,r=>r.toUpperCase()):""}function Xu(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":yt(e)}function Zu(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":yr(e)}function ca(){if(R!=="more")return;Uu(),ju(),document.querySelectorAll("[data-bank-entry-move]").forEach(a=>{a.addEventListener("click",()=>Pu(a.dataset.bankEntryMove||""))}),document.querySelectorAll("[data-bank-section]").forEach(a=>{a.addEventListener("click",()=>{M=a.dataset.bankSection||"biweekly",l()})}),document.querySelectorAll("[data-bank-export-section]").forEach(a=>{a.addEventListener("click",()=>{st=(a.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",Xe=!0,l()})}),document.querySelectorAll("[data-bank-period-move]").forEach(a=>{a.addEventListener("click",()=>{rf(a.dataset.bankPeriodMove||""),l()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{Xe=!1,l()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>ef());const r=document.querySelector(".bank-export-overlay");r&&r.addEventListener("click",a=>{a.target===r&&(Xe=!1,l())});const n=document.querySelector("#openBankingHistoryButton");n&&n.addEventListener("click",()=>Hu());const i=document.querySelector("#openManualBiweeklyTicketButton");i&&i.addEventListener("click",async()=>{if(!_()){h("manual-ticket-login-required","Login required to add manual entries.",{ttlMs:m});return}ye=!0,U="",Ft=E.accountName||"",Q=!1,C=-1,j.length===0&&(d==null?void 0:d.connected)&&_()&&await Pt({silent:!0}),l()});const s=document.querySelector("#checkoutDepositMailButton");s&&s.addEventListener("click",()=>{s.dataset.depositMailAction==="checkout"&&s.getAttribute("aria-disabled")!=="true"&&kf()});const o=document.querySelector("#refreshBankingDataButton");o&&o.addEventListener("click",()=>{if(!_()){h("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:m});return}pa({key:"banking"})})}function la(t){const e=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const r of t)e.push([r.displayName||"",String(bi(r,st)),String(Number(r.ticketAmount)||0),r.note||""]);return e.map(r=>r.map(an).join("	")).join(`
`)}function an(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function cn(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const r=document.createElement("textarea");r.value=e,r.setAttribute("readonly","readonly"),r.style.position="fixed",r.style.left="0",r.style.top="0",r.style.width="1px",r.style.height="1px",r.style.opacity="0",r.style.pointerEvents="none",r.style.zIndex="-1",document.body.appendChild(r),r.focus(),r.select(),r.setSelectionRange(0,r.value.length);let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r)}return n}async function ef(){const t=Yn(st),e=la(t);if(await cn(e)){h("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:m});return}const n=document.querySelector("#bankingExportTsv");n&&(n.focus(),n.select()),h("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:m})}function Yn(t){return G.filter(e=>e.type===t).filter(e=>tf(t,e)).sort((e,r)=>(Number(r.time)||0)-(Number(e.time)||0))}function tf(t,e){if(t==="other")return!0;const r=Number(e==null?void 0:e.time)||0;if(r<=0)return!1;const n=da(t);return r>=n.salesStart&&r<=n.salesEnd}function zr(t){return Number(qn[t])||0}function rf(t){if(M!=="biweekly"&&M!=="monthly")return;const e=zr(M);if(t==="previous"){qn[M]=e-1;return}t==="next"&&e<0&&(qn[M]=e+1)}function da(t){const e=Math.floor(Date.now()/1e3);if(t==="monthly"){const i=nf(e,zr(t));return{salesStart:fa(i)+1,salesEnd:i,raffleTime:i+Ur}}const r=Pe;let n=ua(e);return n+=zr(t)*r,{salesStart:n-r+1,salesEnd:n,raffleTime:n+Ur}}function ua(t){const e=Pe;let r=dl;for(;r-e>t;)r-=e;for(;r<t;)r+=e;return r}function nf(t,e=0){let r=sf(t),n=Number(e)||0;for(;n<0;)r=fa(r),n+=1;for(;n>0;)r=of(r),n-=1;return r}function sf(t){let e=ua(t);for(;!yi(e);)e+=Pe;return e}function fa(t){let e=t-Pe;for(;!yi(e);)e-=Pe;return e}function of(t){let e=t+Pe;for(;!yi(e);)e+=Pe;return e}function yi(t){const e=t+Ur,r=t+Pe+Ur;return Ss(e)!==Ss(r)}function Ss(t){var s,o;const e=new Date(Number(t||0)*1e3);if(Number.isNaN(e.getTime()))return"";const r=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit"}).formatToParts(e),n=((s=r.find(a=>a.type==="year"))==null?void 0:s.value)||"",i=((o=r.find(a=>a.type==="month"))==null?void 0:o.value)||"";return`${n}-${i}`}function af(t=M){const e=String(t||"").toLowerCase();return e!=="monthly"&&e!=="biweekly"?0:"auto"}function bi(t={},e=M){const r=Number(t.amount)||0;if(!af(e))return r;const n=Math.abs(Math.trunc(r))%10,i=n===1||n===3?n:0;return i>0&&r>i?r-i:r}function cf(t,e=M){return t.reduce((r,n)=>(r.amount+=bi(n,e),r.tickets+=Number(n.ticketAmount)||0,r),{amount:0,tickets:0})}function ha(t){const e=Math.ceil((Number(t)||0)/2);return e<=0?0:Math.ceil(e/2e5)*2e5}function lf(t){const e=ha(t);return e>0?e/2e5:0}function df(t,e=!0){return`
    <tr>
      <td>${c(t.note||t.eventId||"")}</td>
      <td>${c(Br(t.time))}</td>
      <td>${c(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${c(yt(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td><strong class="bank-ticket-amount">${c(yr(t.ticketAmount))}</strong></td>`:""}
      <td><button class="bank-entry-move-button" type="button" data-bank-entry-move="${f(t.eventId||"")}">Move</button></td>
    </tr>
  `}function uf(t=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?"6":"5"}">No ${c(oe(M))} deposits found for this ${M==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function oe(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function Br(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function yt(t){return(Number(t)||0).toLocaleString()}function yr(t){return(Number(t)||0).toLocaleString()}function Gt(t){return Array.isArray(t)?t.map(e=>{var n,i,s,o,a,u,g,S,y,b,F,ke,Ut,ot,Ri,Di,$i,Mi,Ni,Ti,Bi,Ci,Ii,Oi,xi,qi,Fi,Pi,Gi,Ui,Vi,Hi,Wi,ji,zi,Yi,Ki,Ji,Qi,Xi,Zi;const r=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:r==="monthly"||r==="biweekly"||r==="other"?r:"other",eventId:String((i=(n=e==null?void 0:e.eventId)!=null?n:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((o=(s=e==null?void 0:e.time)!=null?s:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((u=(a=e==null?void 0:e.displayName)!=null?a:e==null?void 0:e.display_name)!=null?u:"").trim(),amount:Number((g=e==null?void 0:e.amount)!=null?g:0)||0,ticketAmount:Number((y=(S=e==null?void 0:e.ticketAmount)!=null?S:e==null?void 0:e.ticket_amount)!=null?y:0)||0,note:String((b=e==null?void 0:e.note)!=null?b:"").trim(),dataSource:String((ke=(F=e==null?void 0:e.dataSource)!=null?F:e==null?void 0:e.data_source)!=null?ke:"").trim(),emailRequested:Boolean((Ut=e==null?void 0:e.emailRequested)!=null?Ut:e==null?void 0:e.email_requested),mailStatus:String((Ri=(ot=e==null?void 0:e.mailStatus)!=null?ot:e==null?void 0:e.mail_status)!=null?Ri:"").trim(),mailRequestId:String(($i=(Di=e==null?void 0:e.mailRequestId)!=null?Di:e==null?void 0:e.mail_request_id)!=null?$i:"").trim(),mailBatchId:String((Ni=(Mi=e==null?void 0:e.mailBatchId)!=null?Mi:e==null?void 0:e.mail_batch_id)!=null?Ni:"").trim(),checkedOutBy:String((Bi=(Ti=e==null?void 0:e.checkedOutBy)!=null?Ti:e==null?void 0:e.checked_out_by)!=null?Bi:"").trim(),checkedOutAt:String((Ii=(Ci=e==null?void 0:e.checkedOutAt)!=null?Ci:e==null?void 0:e.checked_out_at)!=null?Ii:"").trim(),checkoutExpiresAt:String((xi=(Oi=e==null?void 0:e.checkoutExpiresAt)!=null?Oi:e==null?void 0:e.checkout_expires_at)!=null?xi:"").trim(),writtenToEsoAt:String((Fi=(qi=e==null?void 0:e.writtenToEsoAt)!=null?qi:e==null?void 0:e.written_to_eso_at)!=null?Fi:"").trim(),sentAt:String((Gi=(Pi=e==null?void 0:e.sentAt)!=null?Pi:e==null?void 0:e.sent_at)!=null?Gi:"").trim(),failedReason:String((Vi=(Ui=e==null?void 0:e.failedReason)!=null?Ui:e==null?void 0:e.failed_reason)!=null?Vi:"").trim(),recipient:String((zi=(ji=(Wi=(Hi=e==null?void 0:e.recipient)!=null?Hi:e==null?void 0:e.account_name)!=null?Wi:e==null?void 0:e.displayName)!=null?ji:e==null?void 0:e.display_name)!=null?zi:"").trim(),subject:String((Ji=(Ki=(Yi=e==null?void 0:e.subject)!=null?Yi:e==null?void 0:e.mailSubject)!=null?Ki:e==null?void 0:e.mail_subject)!=null?Ji:"").trim(),body:String((Zi=(Xi=(Qi=e==null?void 0:e.body)!=null?Qi:e==null?void 0:e.mailBody)!=null?Xi:e==null?void 0:e.mail_body)!=null?Zi:"").trim()}}):[]}function ff(t){const e=new Map;for(const r of G)r.eventId&&e.set(r.eventId,r);for(const r of t)!r.eventId||e.set(r.eventId,r);G=Array.from(e.values()).sort((r,n)=>(Number(n.time)||0)-(Number(r.time)||0))}function ma(){ro=new Date().toISOString()}async function hf(t={}){!(t!=null&&t.ok)||(G=Gt(t.entries),ma(),R==="more"&&l(),h("banking-data-updated",`Banking data updated. Loaded ${G.length} deposit record${G.length===1?"":"s"}.`,{ttlMs:m}))}async function le(t={}){const e=Boolean(t.silent),r=Boolean(t.background);if(!(d!=null&&d.connected)){e||h("banking-data-error","GuildSync websocket is not connected.",{ttlMs:m});return}r||(Fe=!0,l());try{const n=await w("guildsync:request-banking-data",{},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve banking data.");G=Gt(n.entries),ma(),e||h("banking-data",`Loaded ${G.length} banking deposit record${G.length===1?"":"s"}.`,{ttlMs:m})}catch(n){e||h("banking-data-error",k(n),{ttlMs:m})}finally{r||(Fe=!1),l()}}async function ws(){!(d!=null&&d.connected)||!_()||Fe||(await le({silent:!0,background:!0}),on()<=0&&gr()>0&&(de.running?l():vf("availability-refresh")))}function mf(){lt&&clearInterval(lt),ws(),lt=window.setInterval(ws,ol)}function pf(){lt&&(clearInterval(lt),lt=null)}async function gf(t={}){if(!!_()){if(!(d!=null&&d.connected)){h("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:m});return}try{const e=await Xc(t);if(!(e!=null&&e.ok))return;const r=Array.isArray(e.ackEntries)?e.ackEntries:[];if(r.length===0)return;const n=await w("guildsync:mark-deposit-mail-sent",{mail_ack:r,mail_request_ids:r.map(o=>(o==null?void 0:o.mail_request_id)||(o==null?void 0:o.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(n.mail_request_ids)?n.mail_request_ids:Array.isArray(n.mailRequestIds)?n.mailRequestIds:[];if(i.length===0){h("deposit-mail-ack-none",n.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:m});return}const s=await Zc(i);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");h("deposit-mail-ack-sent",s.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:m}),await le({silent:!0})}catch(e){h("deposit-mail-ack-error",k(e),{ttlMs:m})}}}async function yf(){if(!Sn){Sn=!0;try{const t=await el();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&h("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:m})}catch(t){h("deposit-mail-ack-cleanup-error",k(t),{ttlMs:m})}finally{Sn=!1}}}async function pa(t={}){var e,r;if(!!_()){if(!(d!=null&&d.connected)){h("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}Fe=!0,l();try{const n=await Wc(t);if(!(n!=null&&n.ok)){h("banking-data-pending",(n==null?void 0:n.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:m});return}const i=Gt((e=n==null?void 0:n.data)==null?void 0:e.entries);ff(i);const s=new Date().toISOString(),o={local_upload_id:ba(),authenticated_username:Z(),authenticated_discord_user_id:((r=p==null?void 0:p.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:s,data:n.data||{}};try{await va(o)}catch(a){throw _f(o),a}await le({silent:!0})}catch(n){h("banking-data-error",k(n),{ttlMs:m})}finally{Fe=!1,l()}}}function ga(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function br(){try{const t=window.localStorage.getItem(Ks),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function ya(t){window.localStorage.setItem(Ks,JSON.stringify(Array.isArray(t)?t:[]))}function bf(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||ga()),r=br().filter(n=>String((n==null?void 0:n.mail_batch_id)||(n==null?void 0:n.mailBatchId)||(n==null?void 0:n.local_batch_id)||"")!==e);r.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),ya(r)}function _s(t){const e=String(t||"").trim();if(!e)return;const r=br().filter(n=>String((n==null?void 0:n.mail_batch_id)||(n==null?void 0:n.mailBatchId)||(n==null?void 0:n.local_batch_id)||"")!==e);ya(r)}async function kf(){if(!_()){h("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:m});return}if(!(d!=null&&d.connected)){h("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:m});return}const t=br(),e=on();if(t.length>0&&e<=0){await Rt();return}l();try{const r=await w("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail checkout request.");const n=Gt(r.records);if(n.length===0){h("deposit-mail-none",r.message||"No unsent deposit mail is available.",{ttlMs:m}),await le({silent:!0});return}const i={mail_batch_id:r.mail_batch_id||r.mailBatchId||ga(),checked_out_by:r.checked_out_by||r.checkedOutBy||Z(),checked_out_at:new Date().toISOString(),records:n};bf(i),await Rt()}catch(r){h("deposit-mail-error",k(r),{ttlMs:m})}finally{l()}}function vf(t=""){dt||Nr||!_()||gr()<=0||de.running||(dt=window.setTimeout(()=>{dt=null,Rt()},100))}async function Rt(){if(dt&&(window.clearTimeout(dt),dt=null),Nr||!_())return;const t=br();if(t.length!==0){if(await Kn({silent:!0}),de.running){h("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:m}),l();return}Nr=!0,l();try{for(const e of t){const r=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),n=Gt(e==null?void 0:e.records);if(n.length===0){_s(r);continue}const i=await Qc(n);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(d!=null&&d.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const s=await w("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:r,event_ids:i.eventIds||n.map(o=>o.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend did not confirm deposit mail was marked written_to_eso.");_s(r),h("deposit-mail-written",i.message||`Wrote ${n.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:m})}await le({silent:!0})}catch(e){h("deposit-mail-write-error",k(e),{ttlMs:m})}finally{Nr=!1,l()}}}async function Kn(t={}){try{const e=Boolean(de.running),r=await Jc();de={running:Boolean(r==null?void 0:r.running),message:String((r==null?void 0:r.message)||"")},de.running||await yf(),e&&!de.running&&(h("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:m}),await Rt()),e!==de.running&&l()}catch(e){t.silent||h("eso-status-error",k(e),{ttlMs:m})}}function Sf(){ct&&clearInterval(ct),Kn({silent:!0}).then(()=>{!de.running&&gr()>0&&Rt()}),ct=window.setInterval(()=>Kn({silent:!0}),sl)}function wf(){ct&&(clearInterval(ct),ct=null)}function ba(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function ki(){try{const t=window.localStorage.getItem(Ys),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function ka(t){window.localStorage.setItem(Ys,JSON.stringify(Array.isArray(t)?t:[]))}function _f(t){const e=String((t==null?void 0:t.local_upload_id)||ba()),r=ki().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),ka(r),h("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function Af(t){const e=ki().filter(r=>(r==null?void 0:r.local_upload_id)!==t);ka(e)}async function Lf(){if(bn||!(d!=null&&d.connected)||!_())return;const t=ki();if(t.length!==0){bn=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!_())return;await va(e),Af(e.local_upload_id)}}catch(e){h("banking-data-pending-error",`Pending banking upload retry failed: ${k(e)}`,{ttlMs:m})}finally{bn=!1}}}async function va(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await w("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const r=await jc(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return h("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:m}),e}function Sa(){if(R!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>Ef());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{St=!0,ge="",l(),D("discordHistorySearchInput")});const r=document.querySelector("#discordMemberSearch");r&&r.addEventListener("input",o=>{xr=o.target.value||"",Cn=o.target.selectionStart,In=o.target.selectionEnd,l({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Nf(o.dataset.discordSortColumn||"username")})});const n=document.querySelector("#discordRoleFilter");n&&n.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(ut.add(a),l())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeRoleFilter||"";ut.delete(a),l()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",o=>{const a=String(o.target.value||"").trim();a&&(ft.add(a),l())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.removeDiscordLinkStatusFilter||"";ft.delete(a),l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>Oo(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{xr="",ut.clear(),ft.clear(),l()})}async function Ef(){var t,e;if(!(d!=null&&d.connected)){h("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:m});return}Or=!0,l(),h("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const r=await w("guildsync:request-discord-data-refresh",{requested_by:((t=p==null?void 0:p.user)==null?void 0:t.display_name)||((e=p==null?void 0:p.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to request Discord data refresh.");h("discord-refresh-requested",r.message||"Discord data refresh completed.",{ttlMs:m}),await vi({silent:!0})}catch(r){h("discord-refresh-error",k(r),{ttlMs:m})}finally{Or=!1,l()}}async function Rf(){if(!(d!=null&&d.connected))return;const t=await w("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(en=t.value||null)}async function Df(t={}){if(!!(t!=null&&t.ok)){P=Si(t.members),Zr=wi(t.roles),t.last_refresh&&(en=t.last_refresh);try{await Rf()}catch{}R==="discord-members"&&l(),h("discord-data-updated",`Discord data updated. Loaded ${P.length} member record${P.length===1?"":"s"}.`,{ttlMs:m})}}async function vi(t={}){const e=Boolean(t.silent);if(!(d!=null&&d.connected)){h("discord-data-error","GuildSync websocket is not connected.",{ttlMs:m});return}tr=!0,l();try{const[r,n]=await Promise.all([w("guildsync:request-discord-data-date",{}),w("guildsync:request-discord-member-dataJSON",{})]);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord refresh date.");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord member data.");en=r.value||null,P=Si(n.members),Zr=wi(n.roles),e||h("discord-data",`Loaded ${P.length} Discord member record${P.length===1?"":"s"}.`,{ttlMs:m})}catch(r){h("discord-data-error",k(r),{ttlMs:m})}finally{tr=!1,l()}}function w(t,e={},r=3e4){return new Promise((n,i)=>{if(!(d!=null&&d.connected)){i(new Error("GuildSync websocket is not connected."));return}let s=!1;const o=window.setTimeout(()=>{s||(s=!0,i(new Error(`${t} timed out.`)))},r);d.emit(t,e,a=>{s||(s=!0,window.clearTimeout(o),n(a))})})}function Si(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(wa).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,r)=>or(e).localeCompare(or(r),void 0,{sensitivity:"base"})):[]}function wi(t){if(!Array.isArray(t))return[];const e=new Map;for(const r of t){const n=wa(r);if(!n)continue;const i=n.role_id||Zt(n.role_name);i&&!e.has(i)&&e.set(i,n)}return Array.from(e.values()).sort((r,n)=>String(r.role_name||"").localeCompare(String(n.role_name||""),void 0,{sensitivity:"base"}))}function wa(t){var i,s;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),r=String(t.role_name||t.name||"Unnamed Role").trim(),n=(s=(i=t.role_color)!=null?i:t.color)!=null?s:null;return{role_id:e,role_name:r||"Unnamed Role",role_color:n}}function $f(){const t=xr.trim().toLowerCase(),e=Array.from(ut),r=P.filter(n=>{if(t&&![n.username,n.global_name,n.server_nickname,n.discord_id,...n.roles.map(s=>s.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(n.roles.map(s=>s.role_name));if(!e.every(s=>i.has(s)))return!1}return!!fo(ft,Pl(n))});return Mf(r)}function Mf(t){const e=We==="desc"?-1:1;return[...t].sort((r,n)=>{const i=As(r,rr),s=As(n,rr),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:or(r).localeCompare(or(n),void 0,{sensitivity:"base",numeric:!0})})}function As(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(r=>r.role_name||"").filter(Boolean).sort((r,n)=>r.localeCompare(n,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function Nf(t){const r=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";rr===r?We=We==="asc"?"desc":"asc":(rr=r,We="asc"),l()}function Ar(t,e){const r=rr===t,n=We==="asc"?"ascending":"descending",i=r?We==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${r?n:"none"}">
      <button
        class="discord-sort-header${r?" active":""}"
        type="button"
        data-discord-sort-column="${f(t)}"
        title="Sort ${f(e)} ${r&&We==="asc"?"descending":"ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function Tf(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(Cn)?Cn:t.value.length,r=Number.isInteger(In)?In:e;t.setSelectionRange(e,r)}}function Bf(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(On)?On:t.value.length,r=Number.isInteger(xn)?xn:e;t.setSelectionRange(e,r)}}function Cf(){const t=new Set;for(const e of P)for(const r of e.roles)r.role_name&&t.add(r.role_name);return Array.from(t).sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function If(t){const e=Gf(t),r=or(t),n=t.roles||[];return`
    <tr data-discord-user-id="${f(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${f(e)}" alt="${f(r)}" />`:`<span>${c(Ta(r))}</span>`}
          </div>
          <span>${c(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${c(t.global_name||"")}</td>
      <td>${c(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${n.length>0?n.map(i=>xf(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${Co({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function Of(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${c(tr?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function xf(t){const e=ln(t.role_color),r=Li(e),n=Ai(e,r);return`
    <span
      class="discord-role-badge"
      title="${f(t.role_name)}"
      style="${n}"
    >${c(t.role_name)}</span>
  `}function qf(t){const e=_i(t),r=ln(e==null?void 0:e.role_color),n=Li(r),i=Ai(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-role-filter="${f(t)}"
      style="${i}"
      title="Remove ${f(t)} filter"
    >
      <span>${c(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Ff(t){const e=Pf(t);for(const r of e){const n=_i(r);if(n)return n}return null}function Pf(t){const e=String(t||"").trim();if(!e)return[];const r=Zt(e),i={associate:["Associates","Associate"],associates:["Associates","Associate"],soldier:["Soldiers","Soldier"],soldiers:["Soldiers","Soldier"],capo:["Capo"],capos:["Capo","Capos"],caporegime:["CapoRegime","Capo Regime","Capo Regimes"],consiglieres:["Consigliere","Consiglieres"],consigliere:["Consigliere","Consiglieres"]}[r]||[e];return Array.from(new Set([e,...i].filter(Boolean)))}function Zt(t){return String(t||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function _i(t){const e=Zt(t);if(!e)return null;const r=Zr.find(n=>Zt(n.role_name)===e);if(r)return r;for(const n of P){const i=n.roles.find(s=>Zt(s.role_name)===e);if(i)return i}return null}function ln(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function Ai(t,e){return[`--role-fill-top: ${Ls(t,"#ffffff",.16)}`,`--role-fill-bottom: ${Ls(t,"#000000",.1)}`,`--role-fill-glow: ${Es(t,.28)}`,`--role-fill-edge: ${Es(t,.46)}`,`color: ${e}`].join("; ")}function Ls(t,e,r){const n=Lr(t)||Lr("#64748b"),i=Lr(e)||Lr("#ffffff"),s=Math.max(0,Math.min(1,Number(r)||0)),o=Math.round(n.red+(i.red-n.red)*s),a=Math.round(n.green+(i.green-n.green)*s),u=Math.round(n.blue+(i.blue-n.blue)*s);return`#${Rn(o)}${Rn(a)}${Rn(u)}`}function Lr(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function Rn(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function Es(t,e){const r=String(t||"#64748b").replace("#",""),n=/^[0-9a-f]{6}$/i.test(r)?r:"64748b",i=parseInt(n.slice(0,2),16),s=parseInt(n.slice(2,4),16),o=parseInt(n.slice(4,6),16);return`rgba(${i}, ${s}, ${o}, ${e})`}function Li(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const r=parseInt(e.slice(0,2),16),n=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(r*299+n*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function Gf(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!r)return"";const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function or(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function _a(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Cr(){const t=document.querySelector("#discordArea");if(!!t){if(kr(!1),_()){const e=p.user||{},r=Z(),n=sh(e),i=Ta(r);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${n?`<img src="${f(n)}" alt="${f(r)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${c(i)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const s=document.querySelector("#discordAvatarButton");s.addEventListener("contextmenu",o=>{o.preventDefault(),Rs()}),s.addEventListener("click",()=>{Rs()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",jf)}}function Rs(){if(lr){kr();return}Wf()}function Uf(t=De){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],r=String((t==null?void 0:t.directory)||"").trim(),n=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const s=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),o=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),a=String((i==null?void 0:i.filePath)||(r?`${r}\\${o}`:o)).trim(),u=(i==null?void 0:i.enabled)!==!1,g=n&&u,S=`profileFileWatchToggle-${Hf(s||o)}`;return`
          <label class="profile-filewatch-item ${u?"enabled":"disabled"}" title="${f(a)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${c(o)}</span>
              <span class="profile-filewatch-state">${g?"Watching":u?"On":"Off"}</span>
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
  `}function Ei(){var n,i,s;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=Z(),r=((n=p.user)==null?void 0:n.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${c(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${c(oh(r))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${c(Xr)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${De!=null&&De.watching?"Active":"Stopped"}</span>
        </div>
        ${Uf()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(i=document.querySelector("#discordLogoutButton"))==null||i.addEventListener("click",zf),(s=document.querySelector("#associateTicketReportButton"))==null||s.addEventListener("click",()=>{kr(!1),yo()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",Vf)})}async function Aa(){try{De=await Qr(),lr&&Ei()}catch(t){h("file-watcher-error",k(t),{ttlMs:m})}}async function Vf(t){var n;const e=t.currentTarget,r=String(((n=e==null?void 0:e.dataset)==null?void 0:n.filewatchKey)||"").trim();if(!!r)try{e.disabled=!0,De=await Hc(r,e.checked),await bt({silent:!0}),lr&&Ei()}catch(i){h("file-watcher-error",k(i),{ttlMs:m}),await Aa()}}function Hf(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function Wf(){const t=document.querySelector("#discordProfileMenu");!t||(Ei(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),lr=!0,Aa(),setTimeout(()=>{window.addEventListener("click",La),window.addEventListener("keydown",Ea)},0))}function kr(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),lr=!1,t&&(window.removeEventListener("click",La),window.removeEventListener("keydown",Ea))}function La(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&kr()}function Ea(t){t.key==="Escape"&&kr()}async function jf(){try{h("auth","Opening Discord login...",{ttlMs:m});const t=await Fc();t!=null&&t.status_message&&h("auth",t.status_message,{ttlMs:m}),Ie()}catch(t){h("auth-error",k(t),{ttlMs:m}),Ie()}}async function zf(){try{p=await Gc(),h("auth",p.status_message||"Logged out.",{ttlMs:m}),no(),er(),await bt()}catch(t){h("auth-error",k(t),{ttlMs:m}),Ie()}}function er(){const t=p.socket_url||"https://guildsync.perdues.me";Yf(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};p!=null&&p.token&&(e.auth={token:p.token}),d=$r(t,e),d.on("connect",()=>{Ie(),Ra(),R==="discord-members"&&vi({silent:!0}),R==="eso-members"&&Pt({silent:!0}),R==="more"&&le({silent:!0}),Lf(),Rt(),Sf(),mf(),vu(),Au(),Kf()}),d.on("connect_error",()=>{Ie(),Yr()}),d.on("disconnect",()=>{Ie(),Yr(),wf(),pf()}),d.on("guildsync:version-status",r=>{Jf(r)}),d.on("guildsync:discord-member-data-updated",r=>{Df(r)}),d.on("guildsync:banking-data-updated",r=>{hf(r)}),d.on("guildsync:roster-data-updated",r=>{gu(r)}),d.on("guildsync:member-links-updated",(r={})=>{Array.isArray(r.links)&&(L=r.links,(R==="discord-members"||R==="eso-members"||R==="settings"||Ge)&&l())}),d.on("guildsync:discord-refresh-status",(r={})=>{const n=String(r.message||"").trim();n&&h("discord-refresh-status",n,{ttlMs:m})})}function Yf(t=!0){Yr(),d&&(d.disconnect(),d=null),t&&Ie()}function Ra(){!(d!=null&&d.connected)||d.emit("guildsync:client-version",{version:Xr,platform:Da(),client_type:"wails"})}function Kf(){Yr(),Mr=window.setInterval(()=>{Ra()},il)}function Yr(){Mr&&(window.clearInterval(Mr),Mr=null)}function Jf(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",r=t.download&&typeof t.download=="object"?t.download:{};ve={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||r.url||"").trim(),fileName:String(t.download_file_name||r.file_name||"").trim(),platformLabel:String(r.label||t.platform||Da()).trim()},h("version",`GuildSync is out of date. Current version: ${Xr}. Latest version: ${e}.`),Ds();return}ve={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},Ds(),dn("version")}}function Da(){const t=String(navigator.userAgent||"").toLowerCase(),r=`${String(navigator.platform||"").toLowerCase()} ${t}`;return r.includes("mac")?"macos":r.includes("linux")?"linux":"windows"}function Ds(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!ve.updateRequired||!ve.downloadUrl){t.innerHTML="";return}const e=ve.platformLabel||"Desktop",r=ve.latestVersion||"latest",n=ve.fileName||"GuildSync client download";t.innerHTML=`
    <button
      id="desktopUpdateDownloadButton"
      class="desktop-update-download-button"
      type="button"
      title="Download ${f(n)}"
      aria-label="Download GuildSync ${f(r)} for ${f(e)}"
    >
      <span class="desktop-update-download-icon" aria-hidden="true">\u2B07</span>
      <span class="desktop-update-download-copy">
        <span class="desktop-update-download-title">Update Available</span>
        <span class="desktop-update-download-subtitle">${c(e)} \xB7 ${c(r)}</span>
      </span>
    </button>
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{Qf()})}function Qf(){const t=String(ve.downloadUrl||"").trim();if(!t){h("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:m});return}Kc(t)}function h(t,e,r={}){const n=String(t||"").trim(),i=String(e||"").trim();if(!(!n||!i)){if(Oe.set(n,i),Ve.has(n)&&(window.clearTimeout(Ve.get(n)),Ve.delete(n)),r.ttlMs&&Number(r.ttlMs)>0){const s=window.setTimeout(()=>{dn(n)},Number(r.ttlMs));Ve.set(n,s)}Dt()}}function dn(t){const e=String(t||"").trim();if(!!e){if(Oe.delete(e),Ve.has(e)&&(window.clearTimeout(Ve.get(e)),Ve.delete(e)),B===e){hn(()=>{B="",Dt()});return}Dt()}}function Dt(){const t=un();if(t.length===0){Ze?hn(ar):ar();return}!Ze&&!et&&fn(t[0])}function un(){return Array.from(Oe.keys())}function $a(){const t=un();if(t.length===0)return"";if(!B)return t[0];const e=t.indexOf(B);return e<0?t[0]:t[(e+1)%t.length]}function fn(t){const e=document.querySelector("#statusMessageTrack");if(!e||!Oe.has(t)){ar();return}mn();const r=Oe.get(t);B=t,Ze=!0,et=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=r,e.style.setProperty("--message-fade-duration",`${Zs}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",et=!1,Xf()},{once:!0})})}function Xf(){const t=un();if(!B||!Oe.has(B)){Dt();return}if(t.length<=1){$s(!1);return}$s(!0)}function $s(t){const e=document.querySelector("#statusMessageViewport"),r=document.querySelector("#statusMessageTrack");if(!e||!r)return;const n=Math.max(0,r.scrollWidth-e.clientWidth);if(n<=0){t&&cr(()=>{hn(()=>{const i=$a();B="",i?fn(i):ar()})},Xs);return}cr(()=>{Ma(n,t)},eo)}function Ma(t,e){const r=document.querySelector("#statusMessageTrack");if(!r||!B||!Oe.has(B))return;const n=Math.max(4,Math.ceil(t/cl));r.style.setProperty("--long-scroll-distance",`${t}px`),r.style.setProperty("--long-scroll-duration",`${n}s`),r.classList.add("long-scroll"),r.addEventListener("animationend",()=>{if(r.classList.remove("long-scroll"),r.style.transform=`translateX(-${t}px) translateY(-50%)`,e){cr(()=>{hn(()=>{const i=$a();B="",i?fn(i):ar()})},Xs);return}cr(()=>{Zf()},al)},{once:!0})}function Zf(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!B||!Oe.has(B))return;if(un().length!==1){Dt();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const n=Math.max(0,e.scrollWidth-t.clientWidth);n<=0||cr(()=>{Ma(n,!1)},eo)}function hn(t){const e=document.querySelector("#statusMessageTrack");if(mn(),!e||!Ze){typeof t=="function"&&t();return}et=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${Zs}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",Ze=!1,et=!1,typeof t=="function"&&t()},{once:!0})}function ar(){const t=document.querySelector("#statusMessageTrack");mn(),B="",Ze=!1,et=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function cr(t,e){const r=window.setTimeout(()=>{Qt=Qt.filter(n=>n!==r),t()},e);Qt.push(r)}function mn(){for(const t of Qt)window.clearTimeout(t);Qt=[]}function Na(){if(!Ze||et||!B)return;const t=B;mn(),fn(t)}function Ie(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(d!=null&&d.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!_()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${Z()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${Z()}`)}}async function bt(t={}){try{if(_()){const e=await Uc();De=e,!t.silent&&(e==null?void 0:e.message)&&h(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:m});return}De=await Vc(),dn("file-watcher")}catch(e){h("file-watcher-error",k(e),{ttlMs:m})}}function Kt(t,e=null){const r="[GuildSync File Watcher]";if(e){console.log(`${r} ${t}`,e);return}console.log(`${r} ${t}`)}function eh(t={}){if(!_()){Kt("SavedVariables change ignored because the user is not authenticated.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",r=e.toLowerCase(),n=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=String(t.filePath||"").trim(),o=n?`${n} saved variables (${i})`:i;Kt(`SavedVariables change detected: ${i}${s?` (${s})`:""}. Key: ${r}.`,t),h(`saved-vars-file-updated-${e}`,`${o} has been updated.`,{ttlMs:m}),r==="banking"&&(Kt(`Processing banking SavedVariables update from ${i}.`),th(t)),r==="roster"&&(Kt(`Processing roster SavedVariables update from ${i}.`),rh(t)),r==="applications"&&(Kt(`Processing applications SavedVariables update from ${i}.`),Ru(t))}async function th(t={}){await gf(t),await pa(t)}async function rh(t={}){await yu(t)}function nh(t){!_()||h("file-watcher-error",k(t),{ttlMs:m})}function ih(){Ht("guildsync-savedvars-file-modified",eh),Ht("guildsync-file-watcher-error",nh),Ht("guildsync-login-complete",async t=>{p=t||{logged_in:!1,allowed:!1},Cr(),er(),await bt(),h("auth",p.status_message||`Logged in and authorized as ${Z()}.`,{ttlMs:m})}),Ht("guildsync-login-denied",async t=>{p={logged_in:!1,allowed:!1,status_message:""},Cr(),await bt(),h("auth",t||"Access denied.",{ttlMs:m}),er()}),Ht("guildsync-login-failed",async t=>{p={logged_in:!1,allowed:!1,status_message:""},Cr(),await bt(),h("auth",t||"Login failed.",{ttlMs:m}),er()})}function _(){return Boolean((p==null?void 0:p.logged_in)&&(p==null?void 0:p.allowed)&&(p==null?void 0:p.token))}function Z(){var t,e;return((t=p.user)==null?void 0:t.display_name)||((e=p.user)==null?void 0:e.username)||"Discord User"}function sh(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),r=String(t.discord_user_id||"").trim();if(!e||!r)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=128`}function Ta(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function oh(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function ah(){Wt&&(Wt.disconnect(),Wt=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),r=Math.round(t.getBoundingClientRect().height);Wt=new ResizeObserver(n=>{const i=n[0];if(!i)return;const s=Math.round(i.contentRect.width),o=Math.round(i.contentRect.height);s===e&&o===r||(e=s,r=o,Ba(),Na())}),Wt.observe(t)}function Ba(){clearTimeout(is),is=setTimeout(async()=>{try{await js()}catch{}},500)}function k(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function c(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function f(t){return c(t)}ih();ul();Xl();
