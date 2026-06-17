(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const Do="/assets/splash.ea386b6a.png",$o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",Mo="/assets/GuildSync-Graphic.9169020d.png",Y=Object.create(null);Y.open="0";Y.close="1";Y.ping="2";Y.pong="3";Y.message="4";Y.upgrade="5";Y.noop="6";const Yt=Object.create(null);Object.keys(Y).forEach(t=>{Yt[Y[t]]=t});const Pr={type:"error",data:"parser error"},xi=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",qi=typeof ArrayBuffer=="function",Fi=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,un=({type:t,data:e},r,n)=>xi&&e instanceof Blob?r?n(e):di(e,n):qi&&(e instanceof ArrayBuffer||Fi(e))?r?n(e):di(new Blob([e]),n):n(Y[t]+(e||"")),di=(t,e)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];e("b"+(n||""))},r.readAsDataURL(t)};function ui(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let Mr;function Co(t,e){if(xi&&t.data instanceof Blob)return t.data.arrayBuffer().then(ui).then(e);if(qi&&(t.data instanceof ArrayBuffer||Fi(t.data)))return e(ui(t.data));un(t,!1,r=>{Mr||(Mr=new TextEncoder),e(Mr.encode(r))})}const fi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",wt=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<fi.length;t++)wt[fi.charCodeAt(t)]=t;const To=t=>{let e=t.length*.75,r=t.length,n,i=0,s,o,c,h;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const b=new ArrayBuffer(e),v=new Uint8Array(b);for(n=0;n<r;n+=4)s=wt[t.charCodeAt(n)],o=wt[t.charCodeAt(n+1)],c=wt[t.charCodeAt(n+2)],h=wt[t.charCodeAt(n+3)],v[i++]=s<<2|o>>4,v[i++]=(o&15)<<4|c>>2,v[i++]=(c&3)<<6|h&63;return b},No=typeof ArrayBuffer=="function",fn=(t,e)=>{if(typeof t!="string")return{type:"message",data:Pi(t,e)};const r=t.charAt(0);return r==="b"?{type:"message",data:Bo(t.substring(1),e)}:Yt[r]?t.length>1?{type:Yt[r],data:t.substring(1)}:{type:Yt[r]}:Pr},Bo=(t,e)=>{if(No){const r=To(t);return Pi(r,e)}else return{base64:!0,data:t}},Pi=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},Gi=String.fromCharCode(30),Oo=(t,e)=>{const r=t.length,n=new Array(r);let i=0;t.forEach((s,o)=>{un(s,!1,c=>{n[o]=c,++i===r&&e(n.join(Gi))})})},Io=(t,e)=>{const r=t.split(Gi),n=[];for(let i=0;i<r.length;i++){const s=fn(r[i],e);if(n.push(s),s.type==="error")break}return n};function xo(){return new TransformStream({transform(t,e){Co(t,r=>{const n=r.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,n)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(n))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(r)})}})}let Cr;function Ht(t){return t.reduce((e,r)=>e+r.length,0)}function Wt(t,e){if(t[0].length===e)return t.shift();const r=new Uint8Array(e);let n=0;for(let i=0;i<e;i++)r[i]=t[0][n++],n===t[0].length&&(t.shift(),n=0);return t.length&&n<t[0].length&&(t[0]=t[0].slice(n)),r}function qo(t,e){Cr||(Cr=new TextDecoder);const r=[];let n=0,i=-1,s=!1;return new TransformStream({transform(o,c){for(r.push(o);;){if(n===0){if(Ht(r)<1)break;const h=Wt(r,1);s=(h[0]&128)===128,i=h[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(Ht(r)<2)break;const h=Wt(r,2);i=new DataView(h.buffer,h.byteOffset,h.length).getUint16(0),n=3}else if(n===2){if(Ht(r)<8)break;const h=Wt(r,8),b=new DataView(h.buffer,h.byteOffset,h.length),v=b.getUint32(0);if(v>Math.pow(2,53-32)-1){c.enqueue(Pr);break}i=v*Math.pow(2,32)+b.getUint32(4),n=3}else{if(Ht(r)<i)break;const h=Wt(r,i);c.enqueue(fn(s?h:Cr.decode(h),e)),n=0}if(i===0||i>t){c.enqueue(Pr);break}}}})}const Ui=4;function D(t){if(t)return Fo(t)}function Fo(t){for(var e in D.prototype)t[e]=D.prototype[e];return t}D.prototype.on=D.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};D.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this};D.prototype.off=D.prototype.removeListener=D.prototype.removeAllListeners=D.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var n,i=0;i<r.length;i++)if(n=r[i],n===e||n.fn===e){r.splice(i,1);break}return r.length===0&&delete this._callbacks["$"+t],this};D.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),r=this._callbacks["$"+t],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,i=r.length;n<i;++n)r[n].apply(this,e)}return this};D.prototype.emitReserved=D.prototype.emit;D.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};D.prototype.hasListeners=function(t){return!!this.listeners(t).length};const fr=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,r)=>r(e,0))(),x=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),Po="arraybuffer";function Vi(t,...e){return e.reduce((r,n)=>(t.hasOwnProperty(n)&&(r[n]=t[n]),r),{})}const Go=x.setTimeout,Uo=x.clearTimeout;function hr(t,e){e.useNativeTimers?(t.setTimeoutFn=Go.bind(x),t.clearTimeoutFn=Uo.bind(x)):(t.setTimeoutFn=x.setTimeout.bind(x),t.clearTimeoutFn=x.clearTimeout.bind(x))}const Vo=1.33;function Ho(t){return typeof t=="string"?Wo(t):Math.ceil((t.byteLength||t.size)*Vo)}function Wo(t){let e=0,r=0;for(let n=0,i=t.length;n<i;n++)e=t.charCodeAt(n),e<128?r+=1:e<2048?r+=2:e<55296||e>=57344?r+=3:(n++,r+=4);return r}function Hi(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function jo(t){let e="";for(let r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e}function zo(t){let e={},r=t.split("&");for(let n=0,i=r.length;n<i;n++){let s=r[n].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class Ko extends Error{constructor(e,r,n){super(e),this.description=r,this.context=n,this.type="TransportError"}}class hn extends D{constructor(e){super(),this.writable=!1,hr(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,r,n){return super.emitReserved("error",new Ko(e,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const r=fn(e,this.socket.binaryType);this.onPacket(r)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,r={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const r=jo(e);return r.length?"?"+r:""}}class Yo extends hn{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const r=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};Io(e,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Oo(e,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=Hi()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(e,r)}}let Wi=!1;try{Wi=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Jo=Wi;function Qo(){}class Xo extends Yo{constructor(e){if(super(e),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,r){const n=this.request({method:"POST",data:e});n.on("success",r),n.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=e}}class K extends D{constructor(e,r,n){super(),this.createRequest=e,hr(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;const r=Vi(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=K.requestsCount++,K.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Qo,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete K.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}K.requestsCount=0;K.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",hi);else if(typeof addEventListener=="function"){const t="onpagehide"in x?"pagehide":"unload";addEventListener(t,hi,!1)}}function hi(){for(let t in K.requests)K.requests.hasOwnProperty(t)&&K.requests[t].abort()}const Zo=function(){const t=ji({xdomain:!1});return t&&t.responseType!==null}();class ea extends Xo{constructor(e){super(e);const r=e&&e.forceBase64;this.supportsBinary=Zo&&!r}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new K(ji,this.uri(),e)}}function ji(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Jo))return new XMLHttpRequest}catch{}if(!e)try{return new x[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const zi=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class ta extends hn{get name(){return"websocket"}doOpen(){const e=this.uri(),r=this.opts.protocols,n=zi?{}:Vi(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,r,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],i=r===e.length-1;un(n,this.supportsBinary,s=>{try{this.doWrite(n,s)}catch{}i&&fr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=Hi()),this.supportsBinary||(r.b64=1),this.createUri(e,r)}}const Tr=x.WebSocket||x.MozWebSocket;class ra extends ta{createSocket(e,r,n){return zi?new Tr(e,r,n):r?new Tr(e,r):new Tr(e)}doWrite(e,r){this.ws.send(r)}}class na extends hn{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const r=qo(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(r).getReader(),i=xo();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const s=()=>{n.read().then(({done:c,value:h})=>{c||(this.onPacket(h),s())}).catch(c=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],i=r===e.length-1;this._writer.write(n).then(()=>{i&&fr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const ia={websocket:ra,webtransport:na,polling:ea},sa=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,oa=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Gr(t){if(t.length>8e3)throw"URI too long";const e=t,r=t.indexOf("["),n=t.indexOf("]");r!=-1&&n!=-1&&(t=t.substring(0,r)+t.substring(r,n).replace(/:/g,";")+t.substring(n,t.length));let i=sa.exec(t||""),s={},o=14;for(;o--;)s[oa[o]]=i[o]||"";return r!=-1&&n!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=aa(s,s.path),s.queryKey=ca(s,s.query),s}function aa(t,e){const r=/\/{2,9}/g,n=e.replace(r,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function ca(t,e){const r={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,s){i&&(r[i]=s)}),r}const Ur=typeof addEventListener=="function"&&typeof removeEventListener=="function",Jt=[];Ur&&addEventListener("offline",()=>{Jt.forEach(t=>t())},!1);class he extends D{constructor(e,r){if(super(),this.binaryType=Po,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(r=e,e=null),e){const n=Gr(e);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=Gr(r.host).host);hr(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=zo(this.opts.query)),Ur&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Jt.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const r=Object.assign({},this.opts.query);r.EIO=Ui,r.transport=e,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&he.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(e);r.open(),this.setTransport(r)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",he.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=e.data,this._onError(r);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(r+=Ho(i)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,fr(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,r,n){return this._sendPacket("message",e,r,n),this}send(e,r,n){return this._sendPacket("message",e,r,n),this}_sendPacket(e,r,n,i){if(typeof r=="function"&&(i=r,r=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const s={type:e,data:r,options:n};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),e()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(he.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Ur&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=Jt.indexOf(this._offlineEventListener);n!==-1&&Jt.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,r),this.writeBuffer=[],this._prevBufferLen=0}}}he.protocol=Ui;class la extends he{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let r=this.createTransport(e),n=!1;he.priorWebsocketSuccess=!1;const i=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",m=>{if(!n)if(m.type==="pong"&&m.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;he.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(v(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const _=new Error("probe error");_.transport=r.name,this.emitReserved("upgradeError",_)}}))};function s(){n||(n=!0,v(),r.close(),r=null)}const o=m=>{const _=new Error("probe error: "+m);_.transport=r.name,s(),this.emitReserved("upgradeError",_)};function c(){o("transport closed")}function h(){o("socket closed")}function b(m){r&&m.name!==r.name&&s()}const v=()=>{r.removeListener("open",i),r.removeListener("error",o),r.removeListener("close",c),this.off("close",h),this.off("upgrading",b)};r.once("open",i),r.once("error",o),r.once("close",c),this.once("close",h),this.once("upgrading",b),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const r=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&r.push(e[n]);return r}}class da extends la{constructor(e,r={}){const n=typeof e=="object"?e:r;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(i=>ia[i]).filter(i=>!!i)),super(e,n)}}function ua(t,e="",r){let n=t;r=r||typeof location<"u"&&location,t==null&&(t=r.protocol+"//"+r.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=r.protocol+t:t=r.host+t),/^(https?|wss?):\/\//.test(t)||(typeof r<"u"?t=r.protocol+"//"+t:t="https://"+t),n=Gr(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const s=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port+e,n.href=n.protocol+"://"+s+(r&&r.port===n.port?"":":"+n.port),n}const fa=typeof ArrayBuffer=="function",ha=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,Ki=Object.prototype.toString,pa=typeof Blob=="function"||typeof Blob<"u"&&Ki.call(Blob)==="[object BlobConstructor]",ma=typeof File=="function"||typeof File<"u"&&Ki.call(File)==="[object FileConstructor]";function pn(t){return fa&&(t instanceof ArrayBuffer||ha(t))||pa&&t instanceof Blob||ma&&t instanceof File}function Qt(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let r=0,n=t.length;r<n;r++)if(Qt(t[r]))return!0;return!1}if(pn(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return Qt(t.toJSON(),!0);for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&Qt(t[r]))return!0;return!1}function ga(t){const e=[],r=t.data,n=t;return n.data=Vr(r,e),n.attachments=e.length,{packet:n,buffers:e}}function Vr(t,e){if(!t)return t;if(pn(t)){const r={_placeholder:!0,num:e.length};return e.push(t),r}else if(Array.isArray(t)){const r=new Array(t.length);for(let n=0;n<t.length;n++)r[n]=Vr(t[n],e);return r}else if(typeof t=="object"&&!(t instanceof Date)){const r={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=Vr(t[n],e));return r}return t}function ya(t,e){return t.data=Hr(t.data,e),delete t.attachments,t}function Hr(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let r=0;r<t.length;r++)t[r]=Hr(t[r],e);else if(typeof t=="object")for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(t[r]=Hr(t[r],e));return t}const Yi=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],ba=5;var y;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(y||(y={}));class ka{constructor(e){this.replacer=e}encode(e){return(e.type===y.EVENT||e.type===y.ACK)&&Qt(e)?this.encodeAsBinary({type:e.type===y.EVENT?y.BINARY_EVENT:y.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let r=""+e.type;return(e.type===y.BINARY_EVENT||e.type===y.BINARY_ACK)&&(r+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(r+=e.nsp+","),e.id!=null&&(r+=e.id),e.data!=null&&(r+=JSON.stringify(e.data,this.replacer)),r}encodeAsBinary(e){const r=ga(e),n=this.encodeAsString(r.packet),i=r.buffers;return i.unshift(n),i}}class mn extends D{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let r;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(e);const n=r.type===y.BINARY_EVENT;n||r.type===y.BINARY_ACK?(r.type=n?y.EVENT:y.ACK,this.reconstructor=new va(r),r.attachments===0&&super.emitReserved("decoded",r)):super.emitReserved("decoded",r)}else if(pn(e)||e.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(e),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let r=0;const n={type:Number(e.charAt(0))};if(y[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===y.BINARY_EVENT||n.type===y.BINARY_ACK){const s=r+1;for(;e.charAt(++r)!=="-"&&r!=e.length;);const o=e.substring(s,r);if(o!=Number(o)||e.charAt(r)!=="-")throw new Error("Illegal attachments");const c=Number(o);if(!Ji(c)||c<0)throw new Error("Illegal attachments");if(c>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=c}if(e.charAt(r+1)==="/"){const s=r+1;for(;++r&&!(e.charAt(r)===","||r===e.length););n.nsp=e.substring(s,r)}else n.nsp="/";const i=e.charAt(r+1);if(i!==""&&Number(i)==i){const s=r+1;for(;++r;){const o=e.charAt(r);if(o==null||Number(o)!=o){--r;break}if(r===e.length)break}n.id=Number(e.substring(s,r+1))}if(e.charAt(++r)){const s=this.tryParse(e.substr(r));if(mn.isPayloadValid(n.type,s))n.data=s;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,r){switch(e){case y.CONNECT:return rr(r);case y.DISCONNECT:return r===void 0;case y.CONNECT_ERROR:return typeof r=="string"||rr(r);case y.EVENT:case y.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&Yi.indexOf(r[0])===-1);case y.ACK:case y.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class va{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const r=ya(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Sa(t){return typeof t=="string"}const Ji=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function wa(t){return t===void 0||Ji(t)}function rr(t){return Object.prototype.toString.call(t)==="[object Object]"}function _a(t,e){switch(t){case y.CONNECT:return e===void 0||rr(e);case y.DISCONNECT:return e===void 0;case y.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&Yi.indexOf(e[0])===-1);case y.ACK:return Array.isArray(e);case y.CONNECT_ERROR:return typeof e=="string"||rr(e);default:return!1}}function Aa(t){return Sa(t.nsp)&&wa(t.id)&&_a(t.type,t.data)}const La=Object.freeze(Object.defineProperty({__proto__:null,protocol:ba,get PacketType(){return y},Encoder:ka,Decoder:mn,isPacketValid:Aa},Symbol.toStringTag,{value:"Module"}));function V(t,e,r){return t.on(e,r),function(){t.off(e,r)}}const Ea=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Qi extends D{constructor(e,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[V(e,"open",this.onopen.bind(this)),V(e,"packet",this.onpacket.bind(this)),V(e,"error",this.onerror.bind(this)),V(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...r){var n,i,s;if(Ea.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(r.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const o={type:y.EVENT,data:r};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const v=this.ids++,m=r.pop();this._registerAckCallback(v,m),o.id=v}const c=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,h=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!c||(h?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,r){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[e]=r;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let c=0;c<this.sendBuffer.length;c++)this.sendBuffer[c].id===e&&this.sendBuffer.splice(c,1);r.call(this,new Error("operation has timed out"))},i),o=(...c)=>{this.io.clearTimeoutFn(s),r.apply(this,c)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...r){return new Promise((n,i)=>{const s=(o,c)=>o?i(o):n(c);s.withError=!0,r.push(s),this.emit(e,...r)})}_addToQueue(e){let r;typeof e[e.length-1]=="function"&&(r=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(i)):(this._queue.shift(),r&&r(null,...s)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!e||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:y.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){const n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case y.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case y.EVENT:case y.BINARY_EVENT:this.onevent(e);break;case y.ACK:case y.BINARY_ACK:this.onack(e);break;case y.DISCONNECT:this.ondisconnect();break;case y.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const r=e.data||[];e.id!=null&&r.push(this.ack(e.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const r=this;let n=!1;return function(...i){n||(n=!0,r.packet({type:y.ACK,id:e,data:i}))}}onack(e){const r=this.acks[e.id];typeof r=="function"&&(delete this.acks[e.id],r.withError&&e.data.unshift(null),r.apply(this,e.data))}onconnect(e,r){this.id=e,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:y.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,e.data)}}}function ot(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}ot.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-r:t+r}return Math.min(t,this.max)|0};ot.prototype.reset=function(){this.attempts=0};ot.prototype.setMin=function(t){this.ms=t};ot.prototype.setMax=function(t){this.max=t};ot.prototype.setJitter=function(t){this.jitter=t};class Wr extends D{constructor(e,r){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(r=e,e=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,hr(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new ot({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=e;const i=r.parser||La;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var r;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(r=this.backoff)===null||r===void 0||r.setMin(e),this)}randomizationFactor(e){var r;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(r=this.backoff)===null||r===void 0||r.setJitter(e),this)}reconnectionDelayMax(e){var r;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(r=this.backoff)===null||r===void 0||r.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new da(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=V(r,"open",function(){n.onopen(),e&&e()}),s=c=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",c),e?e(c):this.maybeReconnectOnOpen()},o=V(r,"error",s);if(this._timeout!==!1){const c=this._timeout,h=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),r.close()},c);this.opts.autoUnref&&h.unref(),this.subs.push(()=>{this.clearTimeoutFn(h)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(V(e,"ping",this.onping.bind(this)),V(e,"data",this.ondata.bind(this)),V(e,"error",this.onerror.bind(this)),V(e,"close",this.onclose.bind(this)),V(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(r){this.onclose("parse error",r)}}ondecoded(e){fr(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,r){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new Qi(this,e,r),this.nsps[e]=n),n}_destroy(e){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(e){const r=this.encoder.encode(e);for(let n=0;n<r.length;n++)this.engine.write(r[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const yt={};function Xt(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const r=ua(t,e.path||"/socket.io"),n=r.source,i=r.id,s=r.path,o=yt[i]&&s in yt[i].nsps,c=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let h;return c?h=new Wr(n,e):(yt[i]||(yt[i]=new Wr(n,e)),h=yt[i]),r.query&&!e.query&&(e.query=r.queryKey),h.socket(r.path,e)}Object.assign(Xt,{Manager:Wr,Socket:Qi,io:Xt,connect:Xt});function Ra(t){return window.go.main.App.CleanupDepositMailAckFromGuildSyncBanking(t)}function Da(){return window.go.main.App.CloseWindow()}function $a(t){return window.go.main.App.CollectDepositMailAckFromGuildSyncBanking(t)}function Ma(t){return window.go.main.App.CollectGuildSyncApplicationsData(t)}function Ca(t){return window.go.main.App.CollectGuildSyncBankingData(t)}function Ta(t){return window.go.main.App.CollectGuildSyncRosterData(t)}function Na(t,e){return window.go.main.App.CommitGuildSyncApplicationsData(t,e)}function Ba(t,e){return window.go.main.App.CommitGuildSyncBankingData(t,e)}function Oa(t,e){return window.go.main.App.CommitGuildSyncRosterData(t,e)}function Ia(){return window.go.main.App.FlushPendingDepositMailAckCleanup()}function xa(){return window.go.main.App.GetESORunningStatus()}function qa(){return window.go.main.App.GetGuildSyncFileWatcherStatus()}function Fa(){return window.go.main.App.GetGuildSyncSession()}function Pa(){return window.go.main.App.LogoutGuildSync()}function Ga(){return window.go.main.App.MaximizeWindow()}function Ua(){return window.go.main.App.MinimizeWindow()}function Xi(){return window.go.main.App.SaveWindowState()}function Va(t,e){return window.go.main.App.SetGuildSyncSavedVarsWatchFileEnabled(t,e)}function Ha(){return window.go.main.App.ShowMainWindow()}function Wa(){return window.go.main.App.StartDiscordLogin()}function ja(){return window.go.main.App.StartGuildSyncFileWatcher()}function za(){return window.go.main.App.StopGuildSyncFileWatcher()}function Ka(t){return window.go.main.App.WriteDepositMailToGuildSyncBanking(t)}function Ya(t,e,r){return window.runtime.EventsOnMultiple(t,e,r)}function bt(t,e){return Ya(t,e,-1)}function Ja(t){window.runtime.BrowserOpenURL(t)}const pr="1.0.3",Qa=30*60*1e3,Zi="guildsync-pending-banking-uploads",es="guildsync-pending-deposit-mail",Xa=5e3,Za=30*1e3,ts="guildsync-pending-roster-uploads",rs="guildsync-pending-applications-uploads",p=60*1e3,ns=7e3,is=1400,ss=2400,ec=4e3,tc=38,os=document.querySelector("#app");let pi=null,kt=null,mi=!1,Nt=!1,Zt=null,Nr=!1,Br=!1,Or=!1,pe=null,B={running:!1,message:""},Ge=null,Ue=null,jr=!1,Ve=!1,He=null,Ir=!1,ve=new Map,Re=new Map,M="",Oe=!1,Ie=!1,_t=[],g={logged_in:!1,allowed:!1,status_message:""},oe={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},l=null,O=[],mr=null,Et=!1,nr=!1,ir="",We=new Set,je=new Set,Rt="username",De="asc",zr=null,Kr=null,j=[],sr=null,Se=!1,gi=!1,or="",Yr=null,Jr=null,$e=new Set,ze=new Set,ee="",N="",$=-1,Xe=!1,Dt="",q=[],we="",me=[],ge=!1,re="",xr=null,H=-1,Ze=!1,ae="",F=[],et="",xe="",ye=[],be=!1,ne="",yi=null,Ee=0;const rc=650;let W=-1,at=!1,ct=[],ce=!1,Me="",lt=!1,$t=[],le=!1,Ce="",dt=!1,gn=[],de=!1,Te="",ut="",ue="",Ke="",fe="",E=[],I=!1,G="",Pe=!1,gr="",Ye="",Bt="",Ot="",te=-1,Ae=!1,S=null,Ne=[],tt=!1,se="",It="",z=-1,ft=!1,yn=null,At=null;const bn=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let U=[],P="biweekly",as=null,_e=!1,Be=!1,xt="biweekly",ie=!1,ar=!1,Z="",L={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},ht="",X=-1,Qr={biweekly:0,monthly:0};const nc=1780786800,ic=1781996400,sc=14*24*60*60,oc=28*24*60*60,ac=60*60,cr=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let R=cr[0].id;function cc(){os.innerHTML=`
    <main class="splash-screen">
      <img src="${Do}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await Ha(),await lc(),cs(),Lt(),await Qe()},5e3)}async function lc(){try{g=await Fa()}catch(t){g={logged_in:!1,allowed:!1,status_message:""},f("session-error",k(t),{ttlMs:p})}}function cs(){os.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${$o}" alt="" class="title-icon" />
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
            <img src="${Mo}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${a(pr)}</div>
            </div>
          </div>
          <div id="desktopUpdateArea" class="desktop-update-area"></div>
          <div id="discordArea" class="discord-area"></div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${ls()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content" aria-live="polite">
          ${us()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await Ua()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await Xi(),await Da()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await Ga()}),tr(),dn(),hs(),go(),zs(),no(),bs(),js(),Fs(),Ps(),Gs(),Us(),$s(),Ks(),gc(),ke(),st(),mi||(window.addEventListener("resize",()=>{Ro(),Lo()}),gu(),mi=!0)}function ls(){return cr.map(t=>{const e=t.id===R,r=dc(t.id,e),n=r?ds():0,i=r?`Deposit mail needs attention: ${n} item${n===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${r?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${u(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${u(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${uc(t.icon)}</span>
          <span class="guildsync-tab-label">${a(t.label)}</span>
          ${r?`<span class="guildsync-tab-mail-badge" aria-label="${u(i)}">${n>99?"99+":a(String(n))}</span>`:""}
        </button>
      `}).join("")}function ds(){return w()?Sr()+Pt()+ro():0}function dc(t,e){return t!=="more"||e?!1:ds()>0}function uc(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function us(){const t=cr.find(r=>r.id===R)||cr[0];let e="";return t.id==="discord-members"?e=bc():t.id==="eso-members"?e=kc():t.id==="more"?e=ld():t.id==="settings"?e=qc():e=`
      <div class="guildsync-tab-panel" data-active-tab="${u(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${a(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${ie?Pl():""}
    ${Ae?Cl():""}
    ${at?Fc():""}
    ${lt?Wc():""}
    ${dt?Yc():""}
    ${Pe?al():""}
    ${ft?mc():""}
  `}function fc(){return ft||Xe||Ze||ie||Ae||at||lt||dt||Pe||Be}function hc(){return ft?!1:Pe?(nn(),!0):dt?(rn(),!0):lt?(tn(),!0):at?(en(),!0):Ae?(nt(),!0):ie?(ie=!1,d(),!0):Xe?(Xe=!1,d(),!0):Ze?(Ze=!1,d(),!0):Be?(Be=!1,d(),!0):!1}function pc(t){t.key==="Escape"&&hc()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",pc,!0),window.guildSyncGlobalModalEscapeAttached=!0);function fs(t={}){return new Promise(e=>{At&&At(!1),ft=!0,yn={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},At=e,d()})}function lr(t=!1){const e=At;At=null,ft=!1,yn=null,e&&e(t===!0),d()}function mc(){const t=yn||{};return`
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
  `}function bi(t){var n,i,s,o;const e=(i=(n=t.target).closest)==null?void 0:i.call(n,"#cancelGuildSyncConfirmButton"),r=(o=(s=t.target).closest)==null?void 0:o.call(s,"#acceptGuildSyncConfirmButton");if(!(!e&&!r)){if(t.preventDefault(),t.stopPropagation(),e){lr(!1);return}r&&lr(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",bi,!0),document.addEventListener("pointerup",bi,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function gc(){if(!ft)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=n=>{n.preventDefault(),n.stopPropagation(),lr(!1)}),e&&(e.onclick=n=>{n.preventDefault(),n.stopPropagation(),lr(!0)});const r=document.querySelector(".guildsync-confirm-overlay");r&&(r.onclick=n=>{n.target===r&&(n.preventDefault(),n.stopPropagation())})}function hs(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(fc())return;const e=t.dataset.tabId;!e||e===R||(R=e,d())})})}function yc(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function d(t={}){Pe&&yc();const e=document.querySelector(".guildsync-tabs"),r=document.querySelector("#guildSyncTabContent");e&&(e.innerHTML=ls()),r&&(r.innerHTML=us()),hs(),go(),zs(),no(),bs(),js(),Fs(),Ps(),Gs(),Us(),$s(),Ks(),t.restoreDiscordSearchFocus&&Vd(),t.restoreRosterSearchFocus&&Hd(),R==="discord-members"&&(l==null?void 0:l.connected)&&O.length===0&&!Et&&Mn({silent:!0}),R==="eso-members"&&(l==null?void 0:l.connected)&&j.length===0&&!Se&&!gi&&(gi=!0,Ft({silent:!0})),R==="more"&&(l==null?void 0:l.connected)&&U.length===0&&!_e&&Le({silent:!0}),(R==="discord-members"||R==="eso-members"||R==="settings")&&(l==null?void 0:l.connected)&&E.length===0&&!I&&yr({silent:!0})}function bc(){const t=Pd(),e=Wd(),r=Array.from(We),n=Array.from(je);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${a(yo(mr))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${Et||nr?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${nr?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${u(ir)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!We.has(i)).map(i=>`<option value="${u(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All roles</span>':r.map(i=>Yd(i)).join("")}
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
              ${bn.filter(i=>!je.has(i.id)).map(i=>`<option value="${u(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(i=>ps("discord",i)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${zt("username","Username")}
                ${zt("global_name","Global Name")}
                ${zt("server_nickname","Server Nickname")}
                ${zt("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>jd(i)).join(""):zd()}
            </tbody>
          </table>
        </div>
      </div>
      ${Ze?Cc():""}
    </div>
  `}function kc(){const t=Ac(),e=Rc(),r=Array.from($e),n=Array.from(ze);return`
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
          <span class="discord-last-refresh">Last Refresh: ${a(Jl(sr))}</span>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${Se?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Se?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${u(or)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!$e.has(i)).map(i=>`<option value="${u(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All ranks</span>':r.map(i=>Dc(i)).join("")}
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
              ${bn.filter(i=>!ze.has(i.id)).map(i=>`<option value="${u(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(i=>ps("roster",i)).join("")}
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
                ${jt("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map((i,s)=>vc(i,s)).join(""):Sc()}
            </tbody>
          </table>
        </div>
      </div>
      ${Xe?Oc():""}
    </div>
  `}function vc(t,e=-1){const r=wc(t.rank||""),n=r?` style="color: ${r};"`:"";return`
    <tr class="eso-roster-row${e===$?" roster-search-active-row":""}"${n} data-roster-row-index="${u(String(e))}" data-eso-account-name="${u(t.account_name||"")}">
      <td>${a(t.account_name||"")}</td>
      <td>${kn(t.rank||"")}</td>
      <td>${a(vr(t.joined))}</td>
      <td class="member-link-action-cell">${Bs({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function Sc(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">${a(Se?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function wc(t){const e=String(t||"").trim(),r=Tn(e);return Lr(r==null?void 0:r.role_color)}function kn(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${a(e)}</span>`}function _c(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":kn(e)}function Ac(){const t=or.trim().toLowerCase(),e=j.filter(r=>{const n=String(r.rank||"").trim();if($e.size>0&&!$e.has(n)||!ys(ze,Xr(r)))return!1;if(!t)return!0;const i=vr(r.joined),s=Ln(r.joined),o=Xr(r),c=gs(r.account_name||"");return[r.account_name,n,i,s,r.joined,o,c].map(b=>String(b||"").toLowerCase()).join(" ").includes(t)});return Lc(e)}function Lc(t){if(!ee||!N)return t;const e=N==="desc"?-1:1;return[...t].sort((r,n)=>{const i=ki(r,ee),s=ki(n,ee),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:String(r.account_name||"").localeCompare(String(n.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function ki(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const r=Number(t.joined||0);return Number.isFinite(r)&&r>0?String(r).padStart(16,"0"):""}if(e==="linked"){const r=Xr(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[r]||"9"} ${r} ${gs(t.account_name||"")}`}return String(t.account_name||"")}function Ec(t){const r=new Set(["account_name","rank","joined","linked"]).has(t)?t:"account_name";ee!==r?(ee=r,N="asc"):N==="asc"?N="desc":N==="desc"?(ee="",N=""):(ee=r,N="asc"),$=-1,d()}function jt(t,e,r=""){const n=ee===t&&Boolean(N),i=n?N==="asc"?"ascending":"descending":"none",s=n?N==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${u(r)}" aria-sort="${u(i)}">
      <button
        class="discord-sort-header roster-sort-header${n?" active":""}"
        type="button"
        data-roster-sort-column="${u(t)}"
        title="Sort ${u(e)}${n&&N==="asc"?" descending":n&&N==="desc"?" not sorted":" ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function Rc(){return Array.from(new Set(j.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function Dc(t){const e=Tn(t),r=Lr(e==null?void 0:e.role_color),n=Bn(r),i=Nn(r,n);return`
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
  `}function $c(t){const e=bn.find(r=>r.id===t);return e?e.label:t}function ps(t,e){const r=t==="roster"?"roster":"discord",n=$c(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${r}-link-status-filter="${u(e)}"
      title="Remove ${u(n)} link filter"
    >
      <span>${a(n)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function ms(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked"&&String(r.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function Mc(t){return ms(kr(t==null?void 0:t.discord_id))}function Xr(t){return ms(br(t==null?void 0:t.account_name))}function gs(t){const e=br(t),r=Ns({mode:"eso-to-discord",esoAccountName:t}),n=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean),i=e.filter(s=>String(s.link_status||"").trim().toLowerCase()==="candidate").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean);return[r.label,r.title,n.join(" "),i.join(" ")].filter(Boolean).join(" ")}function ys(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function Cc(){return`
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
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${u(ae)}" />
        </div>

        ${ne?`<div class="discord-data-error">${a(ne)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Tc()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${xe?`: ${a(xe)}`:""}</div>
            ${Nc()}
          </div>
        </div>
      </div>
    </div>
  `}function Tc(){return be&&F.length===0?'<div class="roster-history-muted">Searching...</div>':F.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${F.map((t,e)=>`
        <button class="roster-history-match${e===W||t.discord_id===et?" is-selected":""}" type="button" data-discord-history-id="${u(t.discord_id)}" data-discord-history-name="${u(Zr(t))}">
          <span>${a(Zr(t))}</span>
          <strong>${a(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===W?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Nc(){return et?be&&ye.length===0?'<div class="roster-history-muted">Loading history...</div>':ye.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${ye.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${a(Ln(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${a(Bc(t.event_type))}</td>
              <td>${a(t.old_value||"")}</td>
              <td>${a(t.new_value||"")}</td>
              <td>${a(t.source||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function Zr(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function Bc(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Oc(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(Dt)}" />
        </div>

        ${re?`<div class="discord-data-error">${a(re)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Ic()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${we?`: ${a(we)}`:""}</div>
            ${xc()}
          </div>
        </div>
      </div>
    </div>
  `}function Ic(){return ge&&q.length===0?'<div class="roster-history-muted">Searching...</div>':q.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${q.map((t,e)=>`
        <button class="roster-history-match${e===H||t.account_name===we?" is-selected":""}" type="button" data-roster-history-account="${u(t.account_name)}">
          <span>${a(t.account_name)}</span>
          <strong>${a(t.rank||"")}</strong>
          ${e===H?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function xc(){return we?ge&&me.length===0?'<div class="roster-history-muted">Loading history...</div>':me.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${me.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${a(Ln(t.timestamp))}</td>
              <td>${a(t.event_type||"")}</td>
              <td>${_c(t.rank)}</td>
              <td>${a(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function qc(){return`
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
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${ce?"disabled":""}>
              ${ce?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${le?"disabled":""}>
              ${le?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${de?"disabled":""}>
              ${de?"Loading...":"Run"}
            </button>
          </article>
        </section>

        <article class="report-option-card">
          <div class="report-option-copy">
            <h3>ESO / Discord Member Links</h3>
            <p>Review automatic ESO-to-Discord links, accept candidate matches, unlink blocked matches, or run the matcher again after roster or Discord refreshes.</p>
          </div>
          <button id="runMemberLinksReportButton" class="refresh-discord-button report-run-button" type="button" ${I?"disabled":""}>
            ${I?"Loading...":"Run"}
          </button>
        </article>
      </div>
    </div>
  `}function bs(){var t,e,r,n;R==="settings"&&((t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>ks()),(e=document.querySelector("#runDiscordRankAuditReportButton"))==null||e.addEventListener("click",()=>Hc()),(r=document.querySelector("#runDiscordLastSeenReportButton"))==null||r.addEventListener("click",()=>Kc()),(n=document.querySelector("#runMemberLinksReportButton"))==null||n.addEventListener("click",()=>il()))}function ks(){at=!0,Me="",d(),Ws()}function en(){at=!1,Me="",d()}function Fc(){const t=Pc(),e=Gc(),r=ct.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${ce?"disabled":""}>${ce?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(r))} total row${r===1?"":"s"}</span>
        </div>

        ${Me?`<div class="discord-data-error">${a(Me)}</div>`:""}

        <div class="report-results-content">
          ${ce&&r===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!ce&&r===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${r>0?vi("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${r>0?vi("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${a(Ss())}</textarea>
      </div>
    </div>
  `}function Pc(){return ct.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function Gc(){return ct.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function vi(t,e,r,n){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${a(t)}</h4>
          <p>${a(e)}</p>
        </div>
        <span>${a(String(r.length))} row${r.length===1?"":"s"}</span>
      </div>
      ${r.length>0?Uc(r):`<div class="roster-history-muted report-section-empty">${a(n)}</div>`}
    </section>
  `}function Uc(t=ct){return`
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
              <td>${kn(e.rank||"")}</td>
              <td>${a(vr(e.joined))}</td>
              <td>${a(Ar(e.purchased_tickets||0))}</td>
              <td>${a(vs(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function vs(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function Ss(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Discord Link"]];for(const e of ct){const r=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([r,e.account_name||"",e.rank||"",vr(e.joined),Ar(e.purchased_tickets||0),vs(e)])}return t.map(e=>e.map(wr).join("	")).join(`
`)}async function Vc(){const t=Ss();if(await _r(t)){f("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#associateTicketReportTsv");r&&(r.focus(),r.select()),f("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function Hc(){lt=!0,Ce="",d(),Hs()}function tn(){lt=!1,Ce="",d()}function Wc(){const t=$t.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${le?"disabled":""}>${le?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${Ce?`<div class="discord-data-error">${a(Ce)}</div>`:""}

        <div class="report-results-content">
          ${le&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!le&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?jc($t):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${a(As())}</textarea>
      </div>
    </div>
  `}function jc(t=$t){return`
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
              <td>${a(ws(e))}</td>
              <td>${a(e.discord_rank||"No matching rank role")}</td>
              <td>${a(e.eso_accounts||"No linked ESO account")}</td>
              <td>${a(e.eso_rank||"None")}</td>
              <td>${a(_s(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function ws(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function _s(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function As(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of $t)t.push([ws(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",_s(e)]);return t.map(e=>e.map(wr).join("	")).join(`
`)}async function zc(){const t=As();if(await _r(t)){f("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#discordRankAuditReportTsv");r&&(r.focus(),r.select()),f("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function Kc(){dt=!0,Te="",ut="",d(),Vs(),E.length===0&&!I&&yr({silent:!0})}function rn(){dt=!1,Te="",ut="",ue="",Ke="",fe="",d()}function Yc(){const t=vn(),e=gn.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${de?"disabled":""}>${de?"Loading...":"Run Again"}</button>
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
            value="${u(ut)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${ue===""?"selected":""}>All link statuses</option>
            <option value="linked" ${ue==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${ue==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${ue==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${Te?`<div class="discord-data-error discord-last-seen-report-error">${a(Te)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${de&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!de&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?Jc(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${a(Es(t))}</textarea>
      </div>
    </div>
  `}function Jc(t=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${vt("name","Discord Member")}</th>
            <th>${vt("eso","Linked ESO Account")}</th>
            <th>${vt("date","Last Seen")}</th>
            <th>${vt("days","Days Since")}</th>
            <th>${vt("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr class="discord-last-seen-row ${u(rl(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${u(qe(e).status)}" data-discord-last-seen-search="${u(Ls(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${tl(e)}
                  <span>${a(rt(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${Xc(e)}</td>
              <td>${a(Sn(e.last_seen))}</td>
              <td>${a(wn(e.last_seen))}</td>
              <td>${a(dr(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function vt(t,e){const r=Ke===t,n=r?fe==="asc"?"\u25B2":"\u25BC":"\u2195",i=r?`${e}: ${fe==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${r?" active":""}" type="button" data-discord-last-seen-sort="${u(t)}" title="${u(i)}">
      <span>${a(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${a(n)}</span>
    </button>
  `}function vn(){const t=[...gn],e=Ke,r=fe;if(!e||!r)return t;const n=r==="desc"?-1:1;return t.sort((i,s)=>{var o,c;if(e==="date"){const h=Number(i.last_seen||0)||0,b=Number(s.last_seen||0)||0;return(h-b)*n}if(e==="days")return(Si(i.last_seen)-Si(s.last_seen))*n;if(e==="action")return dr(i.last_seen_action).localeCompare(dr(s.last_seen_action),void 0,{sensitivity:"base"})*n;if(e==="eso"){const h=qe(i),b=qe(s),v={linked:0,candidate:1,unlinked:2},m=((o=v[h.status])!=null?o:9)-((c=v[b.status])!=null?c:9);return m!==0?m*n:h.esoAccountName.localeCompare(b.esoAccountName,void 0,{sensitivity:"base"})*n}return rt(i).localeCompare(rt(s),void 0,{sensitivity:"base"})*n})}function Qc(t){Ke!==t?(Ke=t,fe="asc"):fe==="asc"?fe="desc":(Ke="",fe=""),d()}function rt(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function Ls(t){return[rt(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,Zc(t),Sn(t==null?void 0:t.last_seen),wn(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function qe(t){const e=kl(t==null?void 0:t.discord_id),r=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),n=String((e==null?void 0:e.eso_account_name)||"").trim();return r==="linked"&&n?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:n,title:`Linked ESO account: ${n}`}:(r==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&n?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:n,title:`Fuzzy ESO account candidate: ${n}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function Xc(t){const e=qe(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${u(e.className)}"
      title="${u(e.title)}"
      aria-label="${u(e.label)}"
      role="img"
    ></span>
  `}function Zc(t){const e=qe(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function el(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!r)return"";if(/^https?:\/\//i.test(e))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function tl(t){const e=rt(t),r=e?e.slice(0,2).toUpperCase():"?",n=el(t);return n?`<span class="discord-member-avatar"><img src="${u(n)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${a(r)}</span>`}function Sn(t){const e=Number(t);if(!e)return"Never";const r=new Date(e*1e3);if(Number.isNaN(r.getTime()))return String(t||"");const n=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(r).reduce((i,s)=>(i[s.type]=s.value,i),{});return`${n.month}/${n.day}/${n.year} ${n.hour}:${n.minute} ${n.dayPeriod}`}function rl(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const r=(Date.now()-e*1e3)/864e5;return r>30?"discord-last-seen-red":r>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function wn(t){const e=Number(t);if(!e)return"Never";const r=Date.now()-e*1e3;if(!Number.isFinite(r))return"";if(r<0)return"0 days";const n=Math.floor(r/864e5);return`${n} day${n===1?"":"s"}`}function Si(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const r=Date.now()-e*1e3;return Number.isFinite(r)?r<0?0:Math.floor(r/864e5):Number.POSITIVE_INFINITY}function dr(t){return String(t||"").trim()||"None tracked"}function Es(t=vn()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const r of t){const n=qe(r);e.push([rt(r),n.label||"",n.esoAccountName||"",Sn(r==null?void 0:r.last_seen),wn(r==null?void 0:r.last_seen),dr(r==null?void 0:r.last_seen_action),(r==null?void 0:r.username)||"",(r==null?void 0:r.discord_id)||""])}return e.map(r=>r.map(wr).join("	")).join(`
`)}async function nl(){const t=vn().filter(i=>{const s=J(ut),o=String(ue||"").trim().toLowerCase(),c=!s||J(Ls(i)).includes(s),h=!o||qe(i).status===o;return c&&h}),e=Es(t);if(await _r(e)){f("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#discordLastSeenReportTsv");n&&(n.focus(),n.select()),f("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function il(){Pe=!0,G="",d(),E.length===0&&!I&&yr({silent:!0})}function nn(){Pe=!1,gr="",Ye="",Bt="",Ot="",te=-1,d()}function Rs(t){return[...new Set((Array.isArray(E)?E:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function Ds(t,e){return t.map(r=>`<option value="${u(r)}" ${e===r?"selected":""}>${a(r)}</option>`).join("")}function sl(){return Ds(Rs("link_status"),Bt)}function ol(){return Ds(Rs("link_method"),Ot)}function al(){return`
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
          <button id="refreshMemberLinksButton" class="clear-discord-filters-button" type="button" ${I?"disabled":""}>Refresh Links</button>
          <button id="runMemberAutoLinkButton" class="refresh-discord-button" type="button" ${I?"disabled":""}>${I?"Running...":"Run Auto-Linking"}</button>
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
            value="${u(gr)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${Bt===""?"selected":""}>All statuses</option>
            ${sl()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${Ot===""?"selected":""}>All methods</option>
            ${ol()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${Ye===""?"selected":""}>All actions</option>
            <option value="needs-link" ${Ye==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${Ye==="can-unlink"?"selected":""}>Unlink Available</option>
          </select>
        </div>

        ${G?`<div class="discord-data-error member-links-report-error">${a(G)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${ul()}
        </div>
      </div>
    </div>
  `}function $s(){var r,n,i,s,o,c;if(!Pe)return;(r=document.querySelector("#closeMemberLinksReportButton"))==null||r.addEventListener("click",nn),(n=document.querySelector("#refreshMemberLinksButton"))==null||n.addEventListener("click",()=>yr()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>yl());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",fl),t.addEventListener("keydown",gl)),(s=document.querySelector("#memberLinksReportActionFilter"))==null||s.addEventListener("change",hl),(o=document.querySelector("#memberLinksReportStatusFilter"))==null||o.addEventListener("change",pl),(c=document.querySelector("#memberLinksReportMethodFilter"))==null||c.addEventListener("change",ml),qt(),document.querySelectorAll("[data-accept-member-candidate]").forEach(h=>{h.addEventListener("click",()=>Cs(h.dataset.acceptMemberCandidate||"",h.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(h=>{h.addEventListener("click",()=>bl(h.dataset.unlinkMemberLink||"",h.dataset.unlinkMemberLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",h=>{h.target===e&&nn()})}function wi(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function _i(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function cl(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function ll(t){return[...Array.isArray(t)?t:[]].sort((e,r)=>{const n=wi(e)-wi(r);if(n!==0)return n;const i=_i(e).localeCompare(_i(r),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((r==null?void 0:r.discord_user_id)||""),void 0,{sensitivity:"base"})})}function dl(t){const e=sn(t);let r="";e==="Username"?r=(t==null?void 0:t.discord_username)||"":e==="Global Name"?r=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(r=(t==null?void 0:t.discord_server_nickname)||""),r||(r=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const n=e?` <span class="member-link-report-match-field">(${a(e)})</span>`:"";return`<span class="member-link-report-discord-name">${a(r)}</span>${n}`}function ul(){return I&&E.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(E)||E.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${ll(E).map(e=>{var s;const r=String(e.link_status||"").trim().toLowerCase(),n=String(e.link_method||"").trim().toLowerCase(),i=dl(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${u(cl(e))}"
                data-member-links-report-status="${u(r)}"
                data-member-links-report-method="${u(n)}"
                data-member-links-report-action="${u(r==="linked"?"can-unlink":r==="candidate"?"needs-link":"")}"
              >
                <td>${a(e.eso_account_name||"")}</td>
                <td>${i}</td>
                <td class="member-links-status-col">${a(r||"")}</td>
                <td class="member-links-method-col">${a(n||"")}${Number(e.locked||0)===1?" \u{1F512}":""}</td>
                <td class="member-links-action-col">
                  <div class="member-link-actions">
                    ${r==="candidate"?`<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${u(e.eso_account_name||"")}" data-accept-member-candidate-discord-id="${u(e.discord_user_id||"")}" aria-label="Accept candidate link" title="Accept candidate link">\u2713</button>`:""}
                    ${r==="linked"?`<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${u(e.eso_account_name||"")}" data-unlink-member-link-discord-id="${u(e.discord_user_id||"")}" aria-label="Unlink this ESO/Discord pair" title="Unlink this ESO/Discord pair">\u{1F5D1}</button>`:""}
                  </div>
                </td>
                <td class="member-links-confidence-col">${a(String((s=e.match_confidence)!=null?s:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function Ms(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function Ai(t){const e=Ms();if(e.forEach(n=>n.classList.remove("member-links-report-row-active")),e.length===0){te=-1;return}te=Math.max(0,Math.min(t,e.length-1));const r=e[te];r.classList.add("member-links-report-row-active"),r.scrollIntoView({block:"nearest"})}function qt(){const t=J(gr),e=String(Ye||"").trim().toLowerCase(),r=String(Bt||"").trim().toLowerCase(),n=String(Ot||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let s=0;i.forEach(c=>{const h=J(c.dataset.memberLinksReportSearch||""),b=String(c.dataset.memberLinksReportAction||"").trim().toLowerCase(),v=String(c.dataset.memberLinksReportStatus||"").trim().toLowerCase(),m=String(c.dataset.memberLinksReportMethod||"").trim().toLowerCase(),gt=(!t||h.includes(t))&&(!e||b===e)&&(!r||v===r)&&(!n||m===n);c.hidden=!gt,c.classList.remove("member-links-report-row-active"),gt&&(s+=1)});const o=document.querySelector("#memberLinksReportSearchEmpty");o&&(o.hidden=s!==0),te=-1}function fl(t){gr=t.target.value||"",qt()}function hl(t){Ye=t.target.value||"",qt()}function pl(t){Bt=t.target.value||"",qt()}function ml(t){Ot=t.target.value||"",qt()}function gl(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Ms();if(e.length===0)return;if(t.key==="ArrowDown"){const n=te<0?0:te+1;Ai(n>=e.length?e.length-1:n);return}const r=te<0?e.length-1:te-1;Ai(r<0?0:r)}async function yr(t={}){if(!(l!=null&&l.connected)){G="You must be connected to load member links.",d();return}I=!0,G="",t.silent||d();try{const e=await A("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");E=Array.isArray(e.links)?e.links:[]}catch(e){G=k(e)}finally{I=!1,d()}}async function yl(){if(!(l!=null&&l.connected)||!g.logged_in){G="You must be logged in and connected to run auto-linking.",d();return}I=!0,G="",d();try{const t=await A("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");E=Array.isArray(t.links)?t.links:[],f("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:p})}catch(t){G=k(t)}finally{I=!1,d()}}async function Cs(t,e=""){try{const r=await A("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to accept candidate.");E=Array.isArray(r.links)?r.links:E,f("member-link-accepted",r.message||"Candidate accepted as a link.",{ttlMs:p})}catch(r){G=k(r),f("member-link-accept-error",G,{ttlMs:p})}}async function bl(t,e=""){if(!!await fs({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const n=await A("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to unlink member.");E=Array.isArray(n.links)?n.links:E,f("member-link-unlinked",n.message||"Member link removed.",{ttlMs:p})}catch(n){G=k(n)}d()}}function Fe(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function br(t){const e=Fe(t);return e?E.filter(r=>Fe(r.eso_account_name)===e):[]}function kr(t){const e=String(t||"").trim();return e?E.filter(r=>String(r.discord_user_id||"").trim()===e):[]}function Ts(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const r=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(r.length>0){const i=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const s=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return s||r[0]}const n=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return n||e[0]}function kl(t){return Ts(kr(t))}function vl(t){return`${Fe(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function _n(){return S?S.mode==="discord-to-eso"?kr(S.discordUserId):br(S.esoAccountName):[]}function Sl(t){const e=String(t||"").trim(),r=O.find(n=>String(n.discord_id||"").trim()===e);return r&&(r.server_nickname||r.global_name||r.username||r.discord_id)||e}function Ns(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?kr(t.discordUserId):br(t.esoAccountName),n=Ts(r),i=String((n==null?void 0:n.link_status)||"").trim().toLowerCase(),s=r.filter(c=>String(c.link_status||"").trim().toLowerCase()==="linked").length,o=r.filter(c=>String(c.link_status||"").trim().toLowerCase()==="candidate").length;return s>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?s===1?n.eso_account_name:`${s} ESO accounts`:s===1?n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member":`${s} Discord accounts`}`}:i==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?n.eso_account_name:n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member"}`}:i==="blocked"||Number((n==null?void 0:n.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function Bs(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,n=Ns(t);return`
    <button
      class="member-link-status-dot member-link-status-${u(n.className)}"
      type="button"
      title="${u(n.title)}"
      aria-label="${u(n.label)}"
      data-open-member-link-dialog="${u(e)}"
      data-member-link-value="${u(r||"")}"
    ></button>
  `}function wl(){return S?S.mode==="discord-to-eso"?Sl(S.discordUserId):S.esoAccountName||"":""}function Os(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function sn(t){const e=Os((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const r=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(r.includes("discord_username")||r.includes("username"))return"Username";if(r.includes("discord_display_name")||r.includes("global")||r.includes("display"))return"Global Name";if(r.includes("discord_server_nickname")||r.includes("server")||r.includes("nickname"))return"Server Nickname";const n=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(n==="exact"||n==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",s=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let o=null;for(const c of s){const h=_l(i,c.value);(!o||h>o.score)&&(o={...c,score:h})}if(o&&o.score>0)return o.field}return""}function J(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function _l(t,e){const r=J(t),n=J(e);if(!r||!n)return 0;if(r===n)return 100;if((r.includes(n)||n.includes(r))&&Math.min(r.length,n.length)>=4)return 88;const i=Math.abs(r.length-n.length),s=[...r].findIndex((c,h)=>c!==n[h]),o=s===-1?Math.min(r.length,n.length):s;return Math.max(0,Math.min(75,Math.round(o*10-i*3)))}function Al(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function Ll(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function El(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),r=Al(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${a(r)}</span>`}function Rl(t){var c;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",r=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",n=String(t.link_status||"").trim().toLowerCase(),o=n==="linked"?`<button
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
        <div><span>Status:</span> ${El(t)} \xB7 ${a(Ll(t.link_method))} \xB7 ${a(String((c=t.match_confidence)!=null?c:""))}% \xB7 ${a(r)}</div>
        ${sn(t)?`<div><span>Matched:</span> Matched on ${a(sn(t))}</div>`:""}
      </div>
      ${o}
    </div>
  `}function Dl(){const t=_n();return t.length?[...t].sort((r,n)=>{var h,b;const i=String(r.link_status||"").trim().toLowerCase(),s=String(n.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},c=((h=o[i])!=null?h:9)-((b=o[s])!=null?b:9);return c!==0?c:Number(n.match_confidence||0)-Number(r.match_confidence||0)}).map(r=>Rl(r)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function $l(){if(tt)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(se)return`<div class="discord-data-error">${a(se)}</div>`;if(!Array.isArray(Ne)||Ne.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(_n().map(r=>vl(r))),e=[...Ne].filter(r=>{const n=(S==null?void 0:S.mode)==="discord-to-eso"?`${Fe(r.account_name)}::${String(S.discordUserId||"").trim()}`:`${Fe(S==null?void 0:S.esoAccountName)}::${String(r.discord_id||"").trim()}`;return!t.has(n)}).sort((r,n)=>{const i=Number(n.confidence||0)-Number(r.confidence||0);return i!==0?i:Li(r).localeCompare(Li(n),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(r=>Ml(r)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function Li(t){return((S==null?void 0:S.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function Ml(t,e={}){var m,_,T;const r=(S==null?void 0:S.mode)||"",n=r==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=Os(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),s=r==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),o=[s,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),c=r==="discord-to-eso"?t.account_name:t.discord_id,h=e.disabled===!0,b=[n,s,o,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),v=[n,o,`${(m=t.confidence)!=null?m:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${u(c||"")}" data-member-link-option-search="${u(b)}" title="${u(v)}" ${h?"disabled":""}>
      <span class="member-link-option-name" title="${u(n||"")}">${a(n||"")}</span>
      <span class="member-link-option-subtitle" title="${u(o||"")}">${a(o||"")}</span>
      <span class="member-link-option-confidence" title="${u(String((_=t.confidence)!=null?_:0))}%">${a(String((T=t.confidence)!=null?T:0))}%</span>
    </button>
  `}function Cl(){const t=(S==null?void 0:S.mode)||"",e=wl(),r=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
            ${Dl()}
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
              value="${u(It)}"
            />
            ${$l()}
          </section>
        </div>

      </div>
    </div>
  `}async function Is(t,e){if(!(l!=null&&l.connected)||!w()){f("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:p});return}Ae=!0,S=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},Ne=[],tt=!0,se="",It="",z=-1,d();try{if(!Array.isArray(E)||E.length===0){const i=await A("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(E=Array.isArray(i.links)?i.links:[])}const n=await A("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load link suggestions.");Ne=Array.isArray(n.options)?n.options:[]}catch(r){se=k(r)}finally{tt=!1,d()}}function nt(){document.removeEventListener("keydown",on),Ae=!1,S=null,Ne=[],tt=!1,se="",It="",z=-1,d()}function xs(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function Ei(t){const e=xs();if(e.forEach(n=>n.classList.remove("member-link-option-row-active")),e.length===0){z=-1;return}z=Math.max(0,Math.min(t,e.length-1));const r=e[z];r.classList.add("member-link-option-row-active"),r.scrollIntoView({block:"nearest"})}function qs(){const t=J(It),e=[...document.querySelectorAll(".member-link-option-row")];let r=0;e.forEach(i=>{const s=J(i.dataset.memberLinkOptionSearch||i.textContent||""),o=!t||s.includes(t);i.hidden=!o,i.classList.remove("member-link-option-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinkSuggestionSearchEmpty");n&&(n.hidden=r!==0),z=-1}function Tl(t){It=t.target.value||"",qs()}function Nl(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=xs();if(e.length===0)return;if(t.key==="ArrowDown"){const n=z<0?0:z+1;Ei(n>=e.length?e.length-1:n);return}const r=z<0?e.length-1:z-1;Ei(r<0?0:r)}function on(t){!Ae||t.key==="Escape"&&(t.preventDefault(),nt())}async function Bl(t){if(!(!S||!t))try{const e=S.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:S.discordUserId}:{esoAccountName:S.esoAccountName,discordUserId:t},r=await A("guildsync:manual-link-member",e,3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to link members.");E=Array.isArray(r.links)?r.links:E,f("member-link-saved",r.message||"Member link saved.",{ttlMs:p}),nt()}catch(e){se=k(e),d()}}async function Ol(t,e=""){await Cs(t,e),nt()}async function Il(){if(!!S){tt=!0,se="",d();try{const t=S.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:S.discordUserId}:{mode:"eso-to-discord",accountName:S.esoAccountName},e=await A("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");Ne=Array.isArray(e.options)?e.options:[]}catch(t){se=k(t)}finally{tt=!1,d()}}}async function xl(t="",e=""){const r=_n().find(i=>Fe(i.eso_account_name)===Fe(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!r||!await fs({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await A("guildsync:manual-unlink-member",{esoAccountName:r.eso_account_name,discordUserId:r.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");E=Array.isArray(i.links)?i.links:E,f("member-link-unlinked",i.message||"Member link removed.",{ttlMs:p}),await Il()}catch(i){se=k(i),d()}}function Fs(){var r;if(!Ae)return;document.removeEventListener("keydown",on),document.addEventListener("keydown",on),(r=document.querySelector("#closeMemberLinkDialogButton"))==null||r.addEventListener("click",nt);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",Tl),t.addEventListener("keydown",Nl),qs()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(n=>{n.addEventListener("click",()=>xl(n.dataset.unlinkEsoAccount||"",n.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(n=>{n.addEventListener("click",()=>Bl(n.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(n=>{n.addEventListener("click",()=>Ol(n.dataset.acceptDialogMemberCandidate||"",n.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",n=>{n.target===e&&nt()})}function Ps(){var e,r,n;if(!at)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",en),(r=document.querySelector("#rerunAssociateTicketReportButton"))==null||r.addEventListener("click",()=>Ws()),(n=document.querySelector("#copyAssociateTicketReportGridButton"))==null||n.addEventListener("click",()=>Vc());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&en()})}function Gs(){var e,r,n;if(!lt)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",tn),(r=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||r.addEventListener("click",()=>Hs()),(n=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||n.addEventListener("click",()=>zc());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&tn()})}function Us(){var n,i,s;if(!dt)return;(n=document.querySelector("#closeDiscordLastSeenReportButton"))==null||n.addEventListener("click",rn),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>Vs()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>nl()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(o=>{o.addEventListener("click",()=>Qc(o.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",ql);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",Fl),An();const r=document.querySelector(".discord-last-seen-report-overlay");r&&r.addEventListener("click",o=>{o.target===r&&rn()})}function ql(t){ut=t.target.value||"",An()}function Fl(t){ue=t.target.value||"",An()}function An(){const t=J(ut),e=String(ue||"").trim().toLowerCase(),r=[...document.querySelectorAll("[data-discord-last-seen-row]")];let n=0;r.forEach(s=>{const o=J(s.dataset.discordLastSeenSearch||s.textContent||""),c=String(s.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),v=(!t||o.includes(t))&&(!e||c===e);s.hidden=!v,v&&(n+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=n!==0)}async function Vs(){if(!(l!=null&&l.connected)||!w()){Te="You must be logged in and connected to run this report.",d();return}de=!0,Te="",d();try{const t=await A("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");O=Cn(t.members),gn=[...O]}catch(t){Te=k(t)}finally{de=!1,d(),C("discordLastSeenReportSearchInput")}}async function Hs(){if(!(l!=null&&l.connected)||!w()){Ce="You must be logged in and connected to run this report.",d();return}le=!0,Ce="",d();try{const t=await A("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");$t=Array.isArray(t.rows)?t.rows:[]}catch(t){Ce=k(t)}finally{le=!1,d()}}async function Ws(){if(!(l!=null&&l.connected)||!w()){Me="You must be logged in and connected to run this report.",d();return}ce=!0,Me="",d();try{const t=await A("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");ct=Array.isArray(t.rows)?t.rows:[]}catch(t){Me=k(t)}finally{ce=!1,d()}}function an(){const t=String(ht||"").trim().toLowerCase();return t?j.filter(e=>String(e.account_name||"").trim()).filter(e=>String(e.account_name||"").toLowerCase().includes(t)).slice().sort((e,r)=>{const n=String(e.account_name||"").toLowerCase(),i=String(r.account_name||"").toLowerCase(),s=n.startsWith(t)?0:1,o=i.startsWith(t)?0:1;return s!==o?s-o:n.localeCompare(i)}).slice(0,20):[]}function Ri(t){const e=String(t||"").trim();L.accountName=e,ht=e,Z="",d(),C("manualTicketAccountSearchInput")}function C(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const r=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(r,r)},0)}function Pl(){const t=an(),e=String(L.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Tickets</h3>
            <p>Add free/manual raffle tickets such as FFTG. These do not count as purchased tickets.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${Z?`<div class="discord-data-error">${a(Z)}</div>`:""}

        <div class="manual-ticket-form">
          <label class="manual-ticket-member-field">
            <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(ht)}" autocomplete="off" />
          </label>

          ${e?`<div class="roster-history-muted">Selected: ${a(e)}</div>`:""}

          <div class="roster-history-match-list manual-ticket-match-list">
            ${t.length===0?'<div class="roster-history-muted">No matching names</div>':t.map((r,n)=>`
                <button class="roster-history-match${n===X||r.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${u(r.account_name)}">
                  <span>${a(r.account_name)}</span>
                  <strong>${a(r.rank||"")}</strong>
                  ${n===X?"<small>Enter</small>":""}
                </button>
              `).join("")}
          </div>

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
                <input id="manualTicketGoldInput" class="discord-search-input manual-ticket-gold-input" type="number" min="0" step="1" inputmode="numeric" placeholder="Gold Value" value="${u(L.goldValue)}" />
                <span class="manual-ticket-gold-coin" aria-hidden="true"></span>
              </label>
              <label class="manual-ticket-count-field">
                <div class="manual-ticket-number-wrap">
                  <input id="manualTicketCountInput" class="discord-search-input manual-ticket-count-input" type="number" min="1" step="1" inputmode="numeric" placeholder="# Tickets" value="${u(L.tickets)}" />
                  <div class="manual-ticket-number-buttons" aria-hidden="true">
                    <button id="manualTicketCountUpButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2303</button>
                    <button id="manualTicketCountDownButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2304</button>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div class="manual-ticket-actions">
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${ar?"disabled":""}>${ar?"Saving...":"Add Manual Tickets"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function js(){var s,o,c,h,b,v;if(!ie)return;(s=document.querySelector("#closeManualBiweeklyTicketButton"))==null||s.addEventListener("click",()=>{ie=!1,d()});const t=document.querySelector("#manualTicketAccountSearchInput");t&&(t.addEventListener("input",m=>{ht=m.target.value||"",L.accountName="",X=an().length>0?0:-1,d(),C("manualTicketAccountSearchInput")}),t.addEventListener("keydown",m=>{const _=an();if(m.key==="ArrowDown"||m.key==="ArrowUp"){if(_.length===0)return;m.preventDefault();const mt=m.key==="ArrowDown"?1:-1;X=((X<0?0:X)+mt+_.length)%_.length,d(),C("manualTicketAccountSearchInput");return}if(m.key!=="Enter")return;m.preventDefault();const T=_[X>=0?X:0];T!=null&&T.account_name&&Ri(T.account_name)})),document.querySelectorAll("[data-manual-ticket-account]").forEach(m=>{m.addEventListener("click",()=>{Ri(m.dataset.manualTicketAccount||"")})}),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",m=>{L.note=m.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(m=>{m.addEventListener("click",()=>{const _=String(m.dataset.manualTicketType||"").trim().toLowerCase();L.ticketType=_==="monthly"?"monthly":"biweekly",d()})}),(c=document.querySelector("[data-manual-ticket-toggle]"))==null||c.addEventListener("click",()=>{L.ticketType=L.ticketType==="monthly"?"biweekly":"monthly",d()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",m=>{const _=String(m.target.value||"").replace(/\D/g,"");m.target.value!==_&&(m.target.value=_),L.goldValue=_});const r=document.querySelector("#manualTicketCountInput");r==null||r.addEventListener("input",m=>{const _=String(m.target.value||"").replace(/\D/g,"");m.target.value!==_&&(m.target.value=_),L.tickets=_});const n=m=>{const _=Number(L.tickets)||0,T=Math.max(1,_+m);L.tickets=String(T),r&&(r.value=L.tickets,r.focus())};(h=document.querySelector("#manualTicketCountUpButton"))==null||h.addEventListener("click",()=>n(1)),(b=document.querySelector("#manualTicketCountDownButton"))==null||b.addEventListener("click",()=>n(-1)),(v=document.querySelector("#saveManualBiweeklyTicketButton"))==null||v.addEventListener("click",()=>Gl());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",m=>{m.target===i&&(ie=!1,d())})}async function Gl(){const t=String(L.accountName||"").trim(),e=String(L.note||"").trim(),r=String(L.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",n=Number(String(L.goldValue||"").trim()||0),i=Number(L.tickets);if(!t){Z="Choose a guild member.",d();return}if(!Number.isFinite(n)||n<0){Z="Gold value must be zero or greater.",d();return}if(!Number.isFinite(i)||i<=0){Z="Enter the number of tickets to add.",d();return}ar=!0,Z="",d();try{const s=await A("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:r,gold_value:Math.floor(n),tickets:Math.floor(i)},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to add manual ticket entry.");ie=!1,L={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},ht="",X=-1,await Le({silent:!0}),f("manual-ticket-added",s.message||"Manual ticket entry added.",{ttlMs:p})}catch(s){Z=k(s)}finally{ar=!1,d()}}function zs(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>Ft());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{Xe=!0,re="",d()});const r=document.querySelector("#rosterMemberSearch");r&&(r.addEventListener("input",o=>{or=o.target.value||"",Yr=o.target.selectionStart,Jr=o.target.selectionEnd,$=-1,d({restoreRosterSearchFocus:!0})}),r.addEventListener("keydown",Ul)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Ec(o.dataset.rosterSortColumn||"account_name")})});const n=document.querySelector("#rosterRankFilter");n&&n.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&($e.add(c),$=-1,d())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRosterRankFilter||"";$e.delete(c),$=-1,d()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(ze.add(c),$=-1,d())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRosterLinkStatusFilter||"";ze.delete(c),$=-1,d()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>Is(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{or="",$e.clear(),ze.clear(),ee="",N="",$=-1,d()}),Vl()}function Ul(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){$=-1;return}t.preventDefault(),t.key==="ArrowDown"?$=$<0?0:Math.min($+1,e.length-1):t.key==="ArrowUp"&&($=$<0?e.length-1:Math.max($-1,0)),e.forEach((n,i)=>{n.classList.toggle("roster-search-active-row",i===$)});const r=e[$];r&&typeof r.scrollIntoView=="function"&&r.scrollIntoView({block:"nearest",inline:"nearest"})}function Vl(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{Xe=!1,d()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",r=>{if(Dt=r.target.value||"",H=-1,!Dt.trim()){clearTimeout(xr),re="",q=[],we="",me=[],ge=!1,d(),C("rosterHistorySearchInput");return}clearTimeout(xr),xr=setTimeout(()=>{zl({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(q.length===0)return;r.preventDefault();const i=r.key==="ArrowDown"?1:-1;H=((H<0?0:H)+i+q.length)%q.length,d(),C("rosterHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=q[H>=0?H:0];n!=null&&n.account_name&&$i(n.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(r=>{r.addEventListener("click",()=>{$i(r.dataset.rosterHistoryAccount||"")})})}function Ks(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{Ze=!1,d()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",r=>{ae=r.target.value||"",W=-1,Ee+=1;const n=Ee;if(clearTimeout(yi),!ae.trim()){ne="",F=[],et="",xe="",ye=[],be=!1,d(),C("discordHistorySearchInput");return}yi=setTimeout(()=>{Hl({auto:!0,keepFocus:!0,generation:n})},rc)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(F.length===0)return;r.preventDefault();const i=r.key==="ArrowDown"?1:-1;W=((W<0?0:W)+i+F.length)%F.length,d(),C("discordHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=F[W>=0?W:0];n!=null&&n.discord_id&&Di(n.discord_id,Zr(n))})),document.querySelectorAll("[data-discord-history-id]").forEach(r=>{r.addEventListener("click",()=>{Di(r.dataset.discordHistoryId||"",r.dataset.discordHistoryName||"")})})}async function Hl(t={}){const e=Number.isInteger(t.generation)?t.generation:++Ee,r=ae.trim();if(e===Ee){if(!r){ne="",F=[],W=-1,et="",xe="",ye=[],be=!1,d(),t.keepFocus&&C("discordHistorySearchInput");return}be=!0,ne="",F=[],W=-1,et="",xe="",ye=[],d(),t.keepFocus&&C("discordHistorySearchInput");try{const n=await A("guildsync:request-discord-member-history",{query:r},3e4);if(e!==Ee||r!==ae.trim())return;if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search Discord member history.");F=Wl(n.matches),W=F.length>0?0:-1}catch(n){if(e!==Ee||r!==ae.trim())return;ne=k(n)}finally{if(e!==Ee||r!==ae.trim())return;be=!1,d(),t.keepFocus&&C("discordHistorySearchInput")}}}async function Di(t,e="",r={}){const n=String(t||"").trim();if(!!n){et=n,xe=String(e||n).trim(),ae=xe,ye=[],be=!0,ne="",d();try{const i=await A("guildsync:request-discord-member-history-events",{discord_id:n},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");ye=jl(i.events)}catch(i){ne=k(i)}finally{be=!1,r.keepLoading||d()}}}function Wl(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function jl(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n,i,s,o,c,h,b,v;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((n=(r=e.old_value)!=null?r:e.oldValue)!=null?n:"").trim(),new_value:String((s=(i=e.new_value)!=null?i:e.newValue)!=null?s:"").trim(),event_timestamp:(h=(c=(o=e.event_timestamp)!=null?o:e.eventTimestamp)!=null?c:e.timestamp)!=null?h:"",event_datetime:(v=(b=e.event_datetime)!=null?b:e.eventDatetime)!=null?v:"",source:String(e.source||"").trim()}}):[]}async function zl(t={}){const e=Dt.trim();if(!e){re="",q=[],H=-1,we="",me=[],ge=!1,d(),t.keepFocus&&C("rosterHistorySearchInput");return}ge=!0,re="",q=[],H=-1,we="",me=[],d(),t.keepFocus&&C("rosterHistorySearchInput");try{const r=await A("guildsync:request-roster-rank-history",{query:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search roster rank history.");q=Kl(r.matches),H=q.length>0?0:-1}catch(r){re=k(r)}finally{ge=!1,d(),t.keepFocus&&C("rosterHistorySearchInput")}}async function $i(t,e={}){const r=String(t||"").trim();if(!!r){we=r,Dt=r,me=[],ge=!0,re="",d();try{const n=await A("guildsync:request-roster-stream-history",{account_name:r},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster stream history.");me=Yl(n.events)}catch(n){re=k(n)}finally{ge=!1,e.keepLoading||d()}}}function Kl(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function Yl(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(n=(r=e.timestamp)!=null?r:e.timestampS)!=null?n:"",officer:String(e.officer||"").trim()}}):[]}function Ys(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(r=e.joined)!=null?r:""}}).sort((e,r)=>e.account_name.localeCompare(r.account_name)):[]}function Jl(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function vr(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function Ln(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function Ql(t={}){j=Ys(t.members),sr=t.last_refresh||new Date().toISOString(),R==="eso-members"&&d(),f("roster-data-updated",`Roster data updated. Loaded ${j.length} member record${j.length===1?"":"s"}.`,{ttlMs:p})}async function Ft(t={}){if(!!(l!=null&&l.connected)){Se=!0,d();try{const e=await A("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");j=Ys(e.members),sr=e.last_refresh||sr,t.silent||f("roster-data-loaded",`Loaded ${j.length} roster member${j.length===1?"":"s"}.`,{ttlMs:p})}catch(e){f("roster-data-error",k(e),{ttlMs:p})}finally{Se=!1,d()}}}async function Xl(t={}){var e;if(!!w()){if(!(l!=null&&l.connected)){f("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}Se=!0,d();try{const r=await Ta(t);if(!(r!=null&&r.ok)){f("roster-data-pending",(r==null?void 0:r.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:p});return}const n={local_upload_id:Js(),authenticated_username:Q(),authenticated_discord_user_id:((e=g==null?void 0:g.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await Xs(n)}catch(i){throw Zl(n),i}await Ft({silent:!0})}catch(r){f("roster-data-error",k(r),{ttlMs:p})}finally{Se=!1,d()}}}function Js(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function En(){try{const t=window.localStorage.getItem(ts),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Qs(t){window.localStorage.setItem(ts,JSON.stringify(Array.isArray(t)?t:[]))}function Zl(t){const e=String((t==null?void 0:t.local_upload_id)||Js()),r=En().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Qs(r),f("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function ed(t){const e=En().filter(r=>(r==null?void 0:r.local_upload_id)!==t);Qs(e)}async function td(){if(Br||!(l!=null&&l.connected)||!w())return;const t=En();if(t.length!==0){Br=!0;try{for(const e of t){if(!(l!=null&&l.connected)||!w())return;await Xs(e),ed(e.local_upload_id)}}catch(e){f("roster-data-pending-error",`Pending roster upload retry failed: ${k(e)}`,{ttlMs:p})}finally{Br=!1}}}async function Xs(t){if(!(l!=null&&l.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await A("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const r=await Oa(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return f("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:p}),e}async function rd(t={}){var e,r;if(!!w()){if(!(l!=null&&l.connected)){f("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}try{const n=await Ma(t);if(!(n!=null&&n.ok)){f("applications-data-info",(n==null?void 0:n.message)||"No application records were found to process.",{ttlMs:p});return}if((Array.isArray((e=n==null?void 0:n.data)==null?void 0:e.records)?n.data.records:[]).length===0){f("applications-data-info",`No application records were found in ${n.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:p});return}const s={local_upload_id:Zs(),authenticated_username:Q(),authenticated_discord_user_id:((r=g==null?void 0:g.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await to(s)}catch(o){throw nd(s),o}}catch(n){f("applications-data-error",k(n),{ttlMs:p})}}}function Zs(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Rn(){try{const t=window.localStorage.getItem(rs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function eo(t){window.localStorage.setItem(rs,JSON.stringify(Array.isArray(t)?t:[]))}function nd(t){const e=String((t==null?void 0:t.local_upload_id)||Zs()),r=Rn().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),eo(r),f("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function id(t){const e=Rn().filter(r=>(r==null?void 0:r.local_upload_id)!==t);eo(e)}async function sd(){if(Or||!(l!=null&&l.connected)||!w())return;const t=Rn();if(t.length!==0){Or=!0;try{for(const e of t){if(!(l!=null&&l.connected)||!w())return;await to(e),id(e.local_upload_id)}}catch(e){f("applications-data-pending-error",`Pending application upload retry failed: ${k(e)}`,{ttlMs:p})}finally{Or=!1}}}async function to(t){var i;if(!(l!=null&&l.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return f("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:p}),{ok:!0,sent_count:0,skipped_empty:!0};let r=0;for(const s of e){const o=await A("guildsync:eso-guild-application-message",{...t,record:s,recordKey:(s==null?void 0:s.recordKey)||"",message:od(s)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Backend rejected the application data payload. Application data was not cleared.");r+=1}const n=await Na(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return f("applications-data-sent",`Sent ${r} application record${r===1?"":"s"} to GuildSync backend.`,{ttlMs:p}),{ok:!0,sent_count:r}}function od(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),r=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",n=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",s=String(t.applicationText||"_No application text captured._"),o=Object.entries(t).filter(([c])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(c)).map(([c,h])=>`**${c}:** ${ad(h)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${r}** ${n} an application from **${i}**.`,"","**Application text:**","```",s.slice(0,1500),"```",o.length>0?"":null,o.length>0?"**Full captured record fields:**":null,...o].filter(c=>c!==null).join(`
`)}function ad(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function cd(t={}){await rd(t)}function ld(){const t=cn(P),e=vd(t),r=P!=="other";return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <button id="openManualBiweeklyTicketButton" class="bank-export-button" type="button" ${w()?"":'disabled title="Login required to add manual tickets."'}>
            <span aria-hidden="true">\uFF0B</span>
            <span>Add Manual Tickets</span>
          </button>
          ${pd()}
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${a(yo(as))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${_e||!w()?"disabled":""} ${w()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${_e?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${qr("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${qr("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${qr("other","?","Other","All other deposits")}
        </div>

        ${hd(P)}

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
              ${t.length>0?t.map(n=>Sd(n,r)).join(""):wd(r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${a(oo(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${r?`<div>Total Tickets Awarded: <strong>${a(Ar(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${Be?dd(cn(xt)):""}
    </div>
  `}function dd(t){return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${a(Je(xt))} Deposits</h3>
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
              ${t.length>0?t.map(e=>ud(e)).join(""):fd()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${a(io(t))}</textarea>
      </div>
    </div>
  `}function ud(t){return`
    <tr>
      <td>${a(t.displayName||"")}</td>
      <td>${a(String(Number(t.amount)||0))}</td>
      <td>${a(String(Number(t.ticketAmount)||0))}</td>
      <td>${a(t.note||"")}</td>
    </tr>
  `}function fd(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${a(Je(xt))}.</td>
    </tr>
  `}function hd(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=so(t),r=Dn(t),n=r<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${u(Je(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${a(Je(t))} Raffle Period ${r===0?"(Current)":`(${Math.abs(r)} period${Math.abs(r)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${a(er(e.salesStart))} through ${a(er(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${a(er(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${n?"":"disabled"} aria-label="Next ${u(Je(t))} raffle period">\u203A</button>
    </div>
  `}function qr(t,e,r,n){const i=P===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${u(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${a(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${a(r)}</span>
        <span class="bank-section-subtitle">${a(n)}</span>
      </span>
    </button>
  `}function pd(){if(!w())return"";const t=Sr(),e=Pt(),r=ro(),n=t>0,i=e>0,s=r>0;if(!n&&!i&&!s)return"";let o="",c="",h=!1;n?(o=`Check Out ${t} Deposit Mail`,c="checkout"):i?(h=!0,Ve?o=`Writing ${e} Pending Mail`:B.running?o=`${e} Mail Waiting for ESO Closure`:(fo("render-pending-mail-button"),o=`${e} Mail Writing to Disk`)):(h=!0,o=`${r} Mail Ready to Send`);const b=n?"Check out new deposit mail. GuildSync will immediately try to write it, or hold it until ESO closes.":i?"Deposit mail is already checked out and will be written automatically after ESO closes.":"Deposit mail has been written to ESO SavedVariables and is ready for ESO to send it and write acknowledgements.",v=jr||Ve,m=B.running?"ESO Running":"ESO Not Running",_=B.running?"eso-running":"eso-not-running";return`
    <button id="checkoutDepositMailButton" class="${`bank-export-button deposit-mail-button${h?" deposit-mail-status-only":""}`}" type="button" data-deposit-mail-action="${u(c)}" ${h||v?'aria-disabled="true"':""} title="${u(B.message||b)}" aria-label="${u(`${o}. ${b}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${a(o)}</span>
      <span aria-hidden="true">(</span><span class="deposit-mail-eso-status ${_}" aria-hidden="true">${a(m)}</span><span aria-hidden="true">)</span>
    </button>
  `}function Pt(){return Gt().reduce((t,e)=>t+pt(e.records).length,0)}function md(){const t=(g==null?void 0:g.user)||{};return new Set([Q(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function gd(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?md().has(e):!1}function ro(){return w()?U.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),r=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&r==="written_to_eso"&&gd(t)}).length:0}function Sr(){return U.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),r=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&r==="unsent"}).length}function no(){if(R!=="more")return;document.querySelectorAll("[data-bank-section]").forEach(o=>{o.addEventListener("click",()=>{P=o.dataset.bankSection||"biweekly",d()})}),document.querySelectorAll("[data-bank-export-section]").forEach(o=>{o.addEventListener("click",()=>{xt=(o.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",Be=!0,d()})}),document.querySelectorAll("[data-bank-period-move]").forEach(o=>{o.addEventListener("click",()=>{kd(o.dataset.bankPeriodMove||""),d()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{Be=!1,d()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>yd());const r=document.querySelector(".bank-export-overlay");r&&r.addEventListener("click",o=>{o.target===r&&(Be=!1,d())});const n=document.querySelector("#openManualBiweeklyTicketButton");n&&n.addEventListener("click",async()=>{if(!w()){f("manual-ticket-login-required","Login required to add manual tickets.",{ttlMs:p});return}ie=!0,Z="",ht=L.accountName||"",j.length===0&&(l==null?void 0:l.connected)&&w()&&await Ft({silent:!0}),d()});const i=document.querySelector("#checkoutDepositMailButton");i&&i.addEventListener("click",()=>{i.dataset.depositMailAction==="checkout"&&i.getAttribute("aria-disabled")!=="true"&&Md()});const s=document.querySelector("#refreshBankingDataButton");s&&s.addEventListener("click",()=>{if(!w()){f("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:p});return}co({key:"banking"})})}function io(t){const e=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const r of t)e.push([r.displayName||"",String(Number(r.amount)||0),String(Number(r.ticketAmount)||0),r.note||""]);return e.map(r=>r.map(wr).join("	")).join(`
`)}function wr(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function _r(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const r=document.createElement("textarea");r.value=e,r.setAttribute("readonly","readonly"),r.style.position="fixed",r.style.left="0",r.style.top="0",r.style.width="1px",r.style.height="1px",r.style.opacity="0",r.style.pointerEvents="none",r.style.zIndex="-1",document.body.appendChild(r),r.focus(),r.select(),r.setSelectionRange(0,r.value.length);let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r)}return n}async function yd(){const t=cn(xt),e=io(t);if(await _r(e)){f("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#bankingExportTsv");n&&(n.focus(),n.select()),f("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:p})}function cn(t){return U.filter(e=>e.type===t).filter(e=>bd(t,e)).sort((e,r)=>(Number(r.time)||0)-(Number(e.time)||0))}function bd(t,e){if(t==="other")return!0;const r=Number(e==null?void 0:e.time)||0;if(r<=0)return!1;const n=so(t);return r>=n.salesStart&&r<=n.salesEnd}function Dn(t){return Number(Qr[t])||0}function kd(t){if(P!=="biweekly"&&P!=="monthly")return;const e=Dn(P);if(t==="previous"){Qr[P]=e-1;return}t==="next"&&e<0&&(Qr[P]=e+1)}function so(t){const e=Math.floor(Date.now()/1e3),r=t==="monthly",n=r?oc:sc;let i=r?ic:nc;for(;i-n>e;)i-=n;for(;i<e;)i+=n;return i+=Dn(t)*n,{salesStart:i-n+1,salesEnd:i,raffleTime:i+ac}}function vd(t){return t.reduce((e,r)=>(e.amount+=Number(r.amount)||0,e.tickets+=Number(r.ticketAmount)||0,e),{amount:0,tickets:0})}function Sd(t,e=!0){return`
    <tr>
      <td>${a(t.note||t.eventId||"")}</td>
      <td>${a(er(t.time))}</td>
      <td>${a(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${a(oo(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td><strong class="bank-ticket-amount">${a(Ar(t.ticketAmount))}</strong></td>`:""}
    </tr>
  `}function wd(t=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?"5":"4"}">No ${a(Je(P))} deposits found for this ${P==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function Je(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function er(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function oo(t){return(Number(t)||0).toLocaleString()}function Ar(t){return(Number(t)||0).toLocaleString()}function pt(t){return Array.isArray(t)?t.map(e=>{var n,i,s,o,c,h,b,v,m,_,T,mt,Vt,gt,xn,qn,Fn,Pn,Gn,Un,Vn,Hn,Wn,jn,zn,Kn,Yn,Jn,Qn,Xn,Zn,ei,ti,ri,ni,ii,si,oi,ai,ci,li;const r=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:r==="monthly"||r==="biweekly"||r==="other"?r:"other",eventId:String((i=(n=e==null?void 0:e.eventId)!=null?n:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((o=(s=e==null?void 0:e.time)!=null?s:e==null?void 0:e.timestamp)!=null?o:0)||0,displayName:String((h=(c=e==null?void 0:e.displayName)!=null?c:e==null?void 0:e.display_name)!=null?h:"").trim(),amount:Number((b=e==null?void 0:e.amount)!=null?b:0)||0,ticketAmount:Number((m=(v=e==null?void 0:e.ticketAmount)!=null?v:e==null?void 0:e.ticket_amount)!=null?m:0)||0,note:String((_=e==null?void 0:e.note)!=null?_:"").trim(),dataSource:String((mt=(T=e==null?void 0:e.dataSource)!=null?T:e==null?void 0:e.data_source)!=null?mt:"").trim(),emailRequested:Boolean((Vt=e==null?void 0:e.emailRequested)!=null?Vt:e==null?void 0:e.email_requested),mailStatus:String((xn=(gt=e==null?void 0:e.mailStatus)!=null?gt:e==null?void 0:e.mail_status)!=null?xn:"").trim(),mailRequestId:String((Fn=(qn=e==null?void 0:e.mailRequestId)!=null?qn:e==null?void 0:e.mail_request_id)!=null?Fn:"").trim(),mailBatchId:String((Gn=(Pn=e==null?void 0:e.mailBatchId)!=null?Pn:e==null?void 0:e.mail_batch_id)!=null?Gn:"").trim(),checkedOutBy:String((Vn=(Un=e==null?void 0:e.checkedOutBy)!=null?Un:e==null?void 0:e.checked_out_by)!=null?Vn:"").trim(),checkedOutAt:String((Wn=(Hn=e==null?void 0:e.checkedOutAt)!=null?Hn:e==null?void 0:e.checked_out_at)!=null?Wn:"").trim(),checkoutExpiresAt:String((zn=(jn=e==null?void 0:e.checkoutExpiresAt)!=null?jn:e==null?void 0:e.checkout_expires_at)!=null?zn:"").trim(),writtenToEsoAt:String((Yn=(Kn=e==null?void 0:e.writtenToEsoAt)!=null?Kn:e==null?void 0:e.written_to_eso_at)!=null?Yn:"").trim(),sentAt:String((Qn=(Jn=e==null?void 0:e.sentAt)!=null?Jn:e==null?void 0:e.sent_at)!=null?Qn:"").trim(),failedReason:String((Zn=(Xn=e==null?void 0:e.failedReason)!=null?Xn:e==null?void 0:e.failed_reason)!=null?Zn:"").trim(),recipient:String((ni=(ri=(ti=(ei=e==null?void 0:e.recipient)!=null?ei:e==null?void 0:e.account_name)!=null?ti:e==null?void 0:e.displayName)!=null?ri:e==null?void 0:e.display_name)!=null?ni:"").trim(),subject:String((oi=(si=(ii=e==null?void 0:e.subject)!=null?ii:e==null?void 0:e.mailSubject)!=null?si:e==null?void 0:e.mail_subject)!=null?oi:"").trim(),body:String((li=(ci=(ai=e==null?void 0:e.body)!=null?ai:e==null?void 0:e.mailBody)!=null?ci:e==null?void 0:e.mail_body)!=null?li:"").trim()}}):[]}function _d(t){const e=new Map;for(const r of U)r.eventId&&e.set(r.eventId,r);for(const r of t)!r.eventId||e.set(r.eventId,r);U=Array.from(e.values()).sort((r,n)=>(Number(n.time)||0)-(Number(r.time)||0))}function ao(){as=new Date().toISOString()}async function Ad(t={}){!(t!=null&&t.ok)||(U=pt(t.entries),ao(),R==="more"&&d(),f("banking-data-updated",`Banking data updated. Loaded ${U.length} deposit record${U.length===1?"":"s"}.`,{ttlMs:p}))}async function Le(t={}){const e=Boolean(t.silent),r=Boolean(t.background);if(!(l!=null&&l.connected)){e||f("banking-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}r||(_e=!0,d());try{const n=await A("guildsync:request-banking-data",{},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve banking data.");U=pt(n.entries),ao(),e||f("banking-data",`Loaded ${U.length} banking deposit record${U.length===1?"":"s"}.`,{ttlMs:p})}catch(n){e||f("banking-data-error",k(n),{ttlMs:p})}finally{r||(_e=!1),d()}}async function Mi(){!(l!=null&&l.connected)||!w()||_e||(await Le({silent:!0,background:!0}),Sr()<=0&&Pt()>0&&(B.running?d():fo("availability-refresh")))}function Ld(){Ue&&clearInterval(Ue),Mi(),Ue=window.setInterval(Mi,Za)}function Ed(){Ue&&(clearInterval(Ue),Ue=null)}async function Rd(t={}){if(!!w()){if(!(l!=null&&l.connected)){f("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:p});return}try{const e=await $a(t);if(!(e!=null&&e.ok))return;const r=Array.isArray(e.ackEntries)?e.ackEntries:[];if(r.length===0)return;const n=await A("guildsync:mark-deposit-mail-sent",{mail_ack:r,mail_request_ids:r.map(o=>(o==null?void 0:o.mail_request_id)||(o==null?void 0:o.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(n.mail_request_ids)?n.mail_request_ids:Array.isArray(n.mailRequestIds)?n.mailRequestIds:[];if(i.length===0){f("deposit-mail-ack-none",n.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:p});return}const s=await Ra(i);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");f("deposit-mail-ack-sent",s.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:p}),await Le({silent:!0})}catch(e){f("deposit-mail-ack-error",k(e),{ttlMs:p})}}}async function Dd(){if(!Ir){Ir=!0;try{const t=await Ia();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&f("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:p})}catch(t){f("deposit-mail-ack-cleanup-error",k(t),{ttlMs:p})}finally{Ir=!1}}}async function co(t={}){var e,r;if(!!w()){if(!(l!=null&&l.connected)){f("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}_e=!0,d();try{const n=await Ca(t);if(!(n!=null&&n.ok)){f("banking-data-pending",(n==null?void 0:n.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:p});return}const i=pt((e=n==null?void 0:n.data)==null?void 0:e.entries);_d(i);const s=new Date().toISOString(),o={local_upload_id:ho(),authenticated_username:Q(),authenticated_discord_user_id:((r=g==null?void 0:g.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:s,data:n.data||{}};try{await mo(o)}catch(c){throw Nd(o),c}await Le({silent:!0})}catch(n){f("banking-data-error",k(n),{ttlMs:p})}finally{_e=!1,d()}}}function lo(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Gt(){try{const t=window.localStorage.getItem(es),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function uo(t){window.localStorage.setItem(es,JSON.stringify(Array.isArray(t)?t:[]))}function $d(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||lo()),r=Gt().filter(n=>String((n==null?void 0:n.mail_batch_id)||(n==null?void 0:n.mailBatchId)||(n==null?void 0:n.local_batch_id)||"")!==e);r.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),uo(r)}function Ci(t){const e=String(t||"").trim();if(!e)return;const r=Gt().filter(n=>String((n==null?void 0:n.mail_batch_id)||(n==null?void 0:n.mailBatchId)||(n==null?void 0:n.local_batch_id)||"")!==e);uo(r)}async function Md(){if(!w()){f("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:p});return}if(!(l!=null&&l.connected)){f("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:p});return}const t=Gt(),e=Sr();if(t.length>0&&e<=0){await it();return}jr=!0,d();try{const r=await A("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail checkout request.");const n=pt(r.records);if(n.length===0){f("deposit-mail-none",r.message||"No unsent deposit mail is available.",{ttlMs:p}),await Le({silent:!0});return}const i={mail_batch_id:r.mail_batch_id||r.mailBatchId||lo(),checked_out_by:r.checked_out_by||r.checkedOutBy||Q(),checked_out_at:new Date().toISOString(),records:n};$d(i),await it()}catch(r){f("deposit-mail-error",k(r),{ttlMs:p})}finally{jr=!1,d()}}function fo(t=""){He||Ve||!w()||Pt()<=0||B.running||(He=window.setTimeout(()=>{He=null,it()},100))}async function it(){if(He&&(window.clearTimeout(He),He=null),Ve||!w())return;const t=Gt();if(t.length!==0){if(await ln({silent:!0}),B.running){f("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:p}),d();return}Ve=!0,d();try{for(const e of t){const r=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),n=pt(e==null?void 0:e.records);if(n.length===0){Ci(r);continue}const i=await Ka(n);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(l!=null&&l.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const s=await A("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:r,event_ids:i.eventIds||n.map(o=>o.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||"Backend did not confirm deposit mail was marked written_to_eso.");Ci(r),f("deposit-mail-written",i.message||`Wrote ${n.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:p})}await Le({silent:!0})}catch(e){f("deposit-mail-write-error",k(e),{ttlMs:p})}finally{Ve=!1,d()}}}async function ln(t={}){try{const e=Boolean(B.running),r=await xa();B={running:Boolean(r==null?void 0:r.running),message:String((r==null?void 0:r.message)||"")},B.running||await Dd(),e&&!B.running&&(f("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:p}),await it()),e!==B.running&&d()}catch(e){t.silent||f("eso-status-error",k(e),{ttlMs:p})}}function Cd(){Ge&&clearInterval(Ge),ln({silent:!0}).then(()=>{!B.running&&Pt()>0&&it()}),Ge=window.setInterval(()=>ln({silent:!0}),Xa)}function Td(){Ge&&(clearInterval(Ge),Ge=null)}function ho(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function $n(){try{const t=window.localStorage.getItem(Zi),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function po(t){window.localStorage.setItem(Zi,JSON.stringify(Array.isArray(t)?t:[]))}function Nd(t){const e=String((t==null?void 0:t.local_upload_id)||ho()),r=$n().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),po(r),f("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Bd(t){const e=$n().filter(r=>(r==null?void 0:r.local_upload_id)!==t);po(e)}async function Od(){if(Nr||!(l!=null&&l.connected)||!w())return;const t=$n();if(t.length!==0){Nr=!0;try{for(const e of t){if(!(l!=null&&l.connected)||!w())return;await mo(e),Bd(e.local_upload_id)}}catch(e){f("banking-data-pending-error",`Pending banking upload retry failed: ${k(e)}`,{ttlMs:p})}finally{Nr=!1}}}async function mo(t){if(!(l!=null&&l.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await A("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const r=await Ba(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return f("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:p}),e}function go(){if(R!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>Id());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{Ze=!0,ne="",d(),C("discordHistorySearchInput")});const r=document.querySelector("#discordMemberSearch");r&&r.addEventListener("input",o=>{ir=o.target.value||"",zr=o.target.selectionStart,Kr=o.target.selectionEnd,d({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Ud(o.dataset.discordSortColumn||"username")})});const n=document.querySelector("#discordRoleFilter");n&&n.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(We.add(c),d())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRoleFilter||"";We.delete(c),d()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(je.add(c),d())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeDiscordLinkStatusFilter||"";je.delete(c),d()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>Is(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearDiscordFiltersButton");s&&s.addEventListener("click",()=>{ir="",We.clear(),je.clear(),d()})}async function Id(){var t,e;if(!(l!=null&&l.connected)){f("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:p});return}nr=!0,d(),f("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const r=await A("guildsync:request-discord-data-refresh",{requested_by:((t=g==null?void 0:g.user)==null?void 0:t.display_name)||((e=g==null?void 0:g.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to request Discord data refresh.");f("discord-refresh-requested",r.message||"Discord data refresh completed.",{ttlMs:p}),await Mn({silent:!0})}catch(r){f("discord-refresh-error",k(r),{ttlMs:p})}finally{nr=!1,d()}}async function xd(){if(!(l!=null&&l.connected))return;const t=await A("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(mr=t.value||null)}async function qd(t={}){if(!!(t!=null&&t.ok)){O=Cn(t.members),t.last_refresh&&(mr=t.last_refresh);try{await xd()}catch{}R==="discord-members"&&d(),f("discord-data-updated",`Discord data updated. Loaded ${O.length} member record${O.length===1?"":"s"}.`,{ttlMs:p})}}async function Mn(t={}){const e=Boolean(t.silent);if(!(l!=null&&l.connected)){f("discord-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}Et=!0,d();try{const[r,n]=await Promise.all([A("guildsync:request-discord-data-date",{}),A("guildsync:request-discord-member-dataJSON",{})]);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord refresh date.");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord member data.");mr=r.value||null,O=Cn(n.members),e||f("discord-data",`Loaded ${O.length} Discord member record${O.length===1?"":"s"}.`,{ttlMs:p})}catch(r){f("discord-data-error",k(r),{ttlMs:p})}finally{Et=!1,d()}}function A(t,e={},r=3e4){return new Promise((n,i)=>{if(!(l!=null&&l.connected)){i(new Error("GuildSync websocket is not connected."));return}let s=!1;const o=window.setTimeout(()=>{s||(s=!0,i(new Error(`${t} timed out.`)))},r);l.emit(t,e,c=>{s||(s=!0,window.clearTimeout(o),n(c))})})}function Cn(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(Fd).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,r)=>Mt(e).localeCompare(Mt(r),void 0,{sensitivity:"base"})):[]}function Fd(t){var i,s;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),r=String(t.role_name||t.name||"Unnamed Role").trim(),n=(s=(i=t.role_color)!=null?i:t.color)!=null?s:null;return{role_id:e,role_name:r||"Unnamed Role",role_color:n}}function Pd(){const t=ir.trim().toLowerCase(),e=Array.from(We),r=O.filter(n=>{if(t&&![n.username,n.global_name,n.server_nickname,n.discord_id,...n.roles.map(s=>s.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(n.roles.map(s=>s.role_name));if(!e.every(s=>i.has(s)))return!1}return!!ys(je,Mc(n))});return Gd(r)}function Gd(t){const e=De==="desc"?-1:1;return[...t].sort((r,n)=>{const i=Ti(r,Rt),s=Ti(n,Rt),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*e:Mt(r).localeCompare(Mt(n),void 0,{sensitivity:"base",numeric:!0})})}function Ti(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(r=>r.role_name||"").filter(Boolean).sort((r,n)=>r.localeCompare(n,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function Ud(t){const r=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";Rt===r?De=De==="asc"?"desc":"asc":(Rt=r,De="asc"),d()}function zt(t,e){const r=Rt===t,n=De==="asc"?"ascending":"descending",i=r?De==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${r?n:"none"}">
      <button
        class="discord-sort-header${r?" active":""}"
        type="button"
        data-discord-sort-column="${u(t)}"
        title="Sort ${u(e)} ${r&&De==="asc"?"descending":"ascending"}"
      >
        <span>${a(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function Vd(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(zr)?zr:t.value.length,r=Number.isInteger(Kr)?Kr:e;t.setSelectionRange(e,r)}}function Hd(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(Yr)?Yr:t.value.length,r=Number.isInteger(Jr)?Jr:e;t.setSelectionRange(e,r)}}function Wd(){const t=new Set;for(const e of O)for(const r of e.roles)r.role_name&&t.add(r.role_name);return Array.from(t).sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function jd(t){const e=Jd(t),r=Mt(t),n=t.roles||[];return`
    <tr data-discord-user-id="${u(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${u(e)}" alt="${u(r)}" />`:`<span>${a(Eo(r))}</span>`}
          </div>
          <span>${a(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${a(t.global_name||"")}</td>
      <td>${a(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${n.length>0?n.map(i=>Kd(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${Bs({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function zd(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${a(Et?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function Kd(t){const e=Lr(t.role_color),r=Bn(e),n=Nn(e,r);return`
    <span
      class="discord-role-badge"
      title="${u(t.role_name)}"
      style="${n}"
    >${a(t.role_name)}</span>
  `}function Yd(t){const e=Tn(t),r=Lr(e==null?void 0:e.role_color),n=Bn(r),i=Nn(r,n);return`
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
  `}function Tn(t){for(const e of O){const r=e.roles.find(n=>n.role_name===t);if(r)return r}return null}function Lr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function Nn(t,e){return[`--role-fill-top: ${Ni(t,"#ffffff",.16)}`,`--role-fill-bottom: ${Ni(t,"#000000",.1)}`,`--role-fill-glow: ${Bi(t,.28)}`,`--role-fill-edge: ${Bi(t,.46)}`,`color: ${e}`].join("; ")}function Ni(t,e,r){const n=Kt(t)||Kt("#64748b"),i=Kt(e)||Kt("#ffffff"),s=Math.max(0,Math.min(1,Number(r)||0)),o=Math.round(n.red+(i.red-n.red)*s),c=Math.round(n.green+(i.green-n.green)*s),h=Math.round(n.blue+(i.blue-n.blue)*s);return`#${Fr(o)}${Fr(c)}${Fr(h)}`}function Kt(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function Fr(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function Bi(t,e){const r=String(t||"#64748b").replace("#",""),n=/^[0-9a-f]{6}$/i.test(r)?r:"64748b",i=parseInt(n.slice(0,2),16),s=parseInt(n.slice(2,4),16),o=parseInt(n.slice(4,6),16);return`rgba(${i}, ${s}, ${o}, ${e})`}function Bn(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const r=parseInt(e.slice(0,2),16),n=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(r*299+n*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function Jd(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!r)return"";const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function Mt(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function yo(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function tr(){const t=document.querySelector("#discordArea");if(!!t){if(Ut(!1),w()){const e=g.user||{},r=Q(),n=pu(e),i=Eo(r);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${n?`<img src="${u(n)}" alt="${u(r)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${a(i)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const s=document.querySelector("#discordAvatarButton");s.addEventListener("contextmenu",o=>{o.preventDefault(),Oi()}),s.addEventListener("click",()=>{Oi()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",tu)}}function Oi(){if(Nt){Ut();return}eu()}function Qd(t=pe){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],r=String((t==null?void 0:t.directory)||"").trim(),n=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const s=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),o=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),c=String((i==null?void 0:i.filePath)||(r?`${r}\\${o}`:o)).trim(),h=(i==null?void 0:i.enabled)!==!1,b=n&&h,v=`profileFileWatchToggle-${Zd(s||o)}`;return`
          <label class="profile-filewatch-item ${h?"enabled":"disabled"}" title="${u(c)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${a(o)}</span>
              <span class="profile-filewatch-state">${b?"Watching":h?"On":"Off"}</span>
            </span>
            <input
              id="${u(v)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${u(s)}"
              ${h?"checked":""}
              aria-label="Turn file watch ${h?"off":"on"} for ${u(o)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function On(){var n,i,s;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=Q(),r=((n=g.user)==null?void 0:n.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${a(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${a(mu(r))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${a(pr)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${pe!=null&&pe.watching?"Active":"Stopped"}</span>
        </div>
        ${Qd()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(i=document.querySelector("#discordLogoutButton"))==null||i.addEventListener("click",ru),(s=document.querySelector("#associateTicketReportButton"))==null||s.addEventListener("click",()=>{Ut(!1),ks()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",Xd)})}async function bo(){try{pe=await qa(),Nt&&On()}catch(t){f("file-watcher-error",k(t),{ttlMs:p})}}async function Xd(t){var n;const e=t.currentTarget,r=String(((n=e==null?void 0:e.dataset)==null?void 0:n.filewatchKey)||"").trim();if(!!r)try{e.disabled=!0,pe=await Va(r,e.checked),await Qe({silent:!0}),Nt&&On()}catch(i){f("file-watcher-error",k(i),{ttlMs:p}),await bo()}}function Zd(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function eu(){const t=document.querySelector("#discordProfileMenu");!t||(On(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),Nt=!0,bo(),setTimeout(()=>{window.addEventListener("click",ko),window.addEventListener("keydown",vo)},0))}function Ut(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),Nt=!1,t&&(window.removeEventListener("click",ko),window.removeEventListener("keydown",vo))}function ko(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&Ut()}function vo(t){t.key==="Escape"&&Ut()}async function tu(){try{f("auth","Opening Discord login...",{ttlMs:p});const t=await Wa();t!=null&&t.status_message&&f("auth",t.status_message,{ttlMs:p}),ke()}catch(t){f("auth-error",k(t),{ttlMs:p}),ke()}}async function ru(){try{g=await Pa(),f("auth",g.status_message||"Logged out.",{ttlMs:p}),cs(),Lt(),await Qe()}catch(t){f("auth-error",k(t),{ttlMs:p}),ke()}}function Lt(){const t=g.socket_url||"https://guildsync.perdues.me";nu(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};g!=null&&g.token&&(e.auth={token:g.token}),l=Xt(t,e),l.on("connect",()=>{ke(),So(),R==="discord-members"&&Mn({silent:!0}),R==="eso-members"&&Ft({silent:!0}),R==="more"&&Le({silent:!0}),Od(),it(),Cd(),Ld(),td(),sd(),iu()}),l.on("connect_error",()=>{ke(),ur()}),l.on("disconnect",()=>{ke(),ur(),Td(),Ed()}),l.on("guildsync:version-status",r=>{su(r)}),l.on("guildsync:discord-member-data-updated",r=>{qd(r)}),l.on("guildsync:banking-data-updated",r=>{Ad(r)}),l.on("guildsync:roster-data-updated",r=>{Ql(r)}),l.on("guildsync:member-links-updated",(r={})=>{Array.isArray(r.links)&&(E=r.links,(R==="discord-members"||R==="eso-members"||R==="settings"||Ae)&&d())}),l.on("guildsync:discord-refresh-status",(r={})=>{const n=String(r.message||"").trim();n&&f("discord-refresh-status",n,{ttlMs:p})})}function nu(t=!0){ur(),l&&(l.disconnect(),l=null),t&&ke()}function So(){!(l!=null&&l.connected)||l.emit("guildsync:client-version",{version:pr,platform:wo(),client_type:"wails"})}function iu(){ur(),Zt=window.setInterval(()=>{So()},Qa)}function ur(){Zt&&(window.clearInterval(Zt),Zt=null)}function su(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",r=t.download&&typeof t.download=="object"?t.download:{};oe={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||r.url||"").trim(),fileName:String(t.download_file_name||r.file_name||"").trim(),platformLabel:String(r.label||t.platform||wo()).trim()},f("version",`GuildSync is out of date. Current version: ${pr}. Latest version: ${e}.`),dn();return}oe={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},dn(),In("version")}}function wo(){const t=String(navigator.userAgent||"").toLowerCase(),r=`${String(navigator.platform||"").toLowerCase()} ${t}`;return r.includes("mac")?"macos":r.includes("linux")?"linux":"windows"}function dn(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!oe.updateRequired||!oe.downloadUrl){t.innerHTML="";return}const e=oe.platformLabel||"Desktop",r=oe.latestVersion||"latest",n=oe.fileName||"GuildSync client download";t.innerHTML=`
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
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{ou()})}function ou(){const t=String(oe.downloadUrl||"").trim();if(!t){f("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:p});return}Ja(t)}function f(t,e,r={}){const n=String(t||"").trim(),i=String(e||"").trim();if(!(!n||!i)){if(ve.set(n,i),Re.has(n)&&(window.clearTimeout(Re.get(n)),Re.delete(n)),r.ttlMs&&Number(r.ttlMs)>0){const s=window.setTimeout(()=>{In(n)},Number(r.ttlMs));Re.set(n,s)}st()}}function In(t){const e=String(t||"").trim();if(!!e){if(ve.delete(e),Re.has(e)&&(window.clearTimeout(Re.get(e)),Re.delete(e)),M===e){Dr(()=>{M="",st()});return}st()}}function st(){const t=Er();if(t.length===0){Oe?Dr(Ct):Ct();return}!Oe&&!Ie&&Rr(t[0])}function Er(){return Array.from(ve.keys())}function _o(){const t=Er();if(t.length===0)return"";if(!M)return t[0];const e=t.indexOf(M);return e<0?t[0]:t[(e+1)%t.length]}function Rr(t){const e=document.querySelector("#statusMessageTrack");if(!e||!ve.has(t)){Ct();return}$r();const r=ve.get(t);M=t,Oe=!0,Ie=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=r,e.style.setProperty("--message-fade-duration",`${is}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",Ie=!1,au()},{once:!0})})}function au(){const t=Er();if(!M||!ve.has(M)){st();return}if(t.length<=1){Ii(!1);return}Ii(!0)}function Ii(t){const e=document.querySelector("#statusMessageViewport"),r=document.querySelector("#statusMessageTrack");if(!e||!r)return;const n=Math.max(0,r.scrollWidth-e.clientWidth);if(n<=0){t&&Tt(()=>{Dr(()=>{const i=_o();M="",i?Rr(i):Ct()})},ns);return}Tt(()=>{Ao(n,t)},ss)}function Ao(t,e){const r=document.querySelector("#statusMessageTrack");if(!r||!M||!ve.has(M))return;const n=Math.max(4,Math.ceil(t/tc));r.style.setProperty("--long-scroll-distance",`${t}px`),r.style.setProperty("--long-scroll-duration",`${n}s`),r.classList.add("long-scroll"),r.addEventListener("animationend",()=>{if(r.classList.remove("long-scroll"),r.style.transform=`translateX(-${t}px) translateY(-50%)`,e){Tt(()=>{Dr(()=>{const i=_o();M="",i?Rr(i):Ct()})},ns);return}Tt(()=>{cu()},ec)},{once:!0})}function cu(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!M||!ve.has(M))return;if(Er().length!==1){st();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const n=Math.max(0,e.scrollWidth-t.clientWidth);n<=0||Tt(()=>{Ao(n,!1)},ss)}function Dr(t){const e=document.querySelector("#statusMessageTrack");if($r(),!e||!Oe){typeof t=="function"&&t();return}Ie=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${is}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",Oe=!1,Ie=!1,typeof t=="function"&&t()},{once:!0})}function Ct(){const t=document.querySelector("#statusMessageTrack");$r(),M="",Oe=!1,Ie=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function Tt(t,e){const r=window.setTimeout(()=>{_t=_t.filter(n=>n!==r),t()},e);_t.push(r)}function $r(){for(const t of _t)window.clearTimeout(t);_t=[]}function Lo(){if(!Oe||Ie||!M)return;const t=M;$r(),Rr(t)}function ke(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(l!=null&&l.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!w()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${Q()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${Q()}`)}}async function Qe(t={}){try{if(w()){const e=await ja();pe=e,!t.silent&&(e==null?void 0:e.message)&&f(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:p});return}pe=await za(),In("file-watcher")}catch(e){f("file-watcher-error",k(e),{ttlMs:p})}}function St(t,e=null){const r="[GuildSync File Watcher]";if(e){console.log(`${r} ${t}`,e);return}console.log(`${r} ${t}`)}function lu(t={}){if(!w()){St("SavedVariables change ignored because the user is not authenticated.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",r=e.toLowerCase(),n=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",s=String(t.filePath||"").trim(),o=n?`${n} saved variables (${i})`:i;St(`SavedVariables change detected: ${i}${s?` (${s})`:""}. Key: ${r}.`,t),f(`saved-vars-file-updated-${e}`,`${o} has been updated.`,{ttlMs:p}),r==="banking"&&(St(`Processing banking SavedVariables update from ${i}.`),du(t)),r==="roster"&&(St(`Processing roster SavedVariables update from ${i}.`),uu(t)),r==="applications"&&(St(`Processing applications SavedVariables update from ${i}.`),cd(t))}async function du(t={}){await Rd(t),await co(t)}async function uu(t={}){await Xl(t)}function fu(t){!w()||f("file-watcher-error",k(t),{ttlMs:p})}function hu(){bt("guildsync-savedvars-file-modified",lu),bt("guildsync-file-watcher-error",fu),bt("guildsync-login-complete",async t=>{g=t||{logged_in:!1,allowed:!1},tr(),Lt(),await Qe(),f("auth",g.status_message||`Logged in and authorized as ${Q()}.`,{ttlMs:p})}),bt("guildsync-login-denied",async t=>{g={logged_in:!1,allowed:!1,status_message:""},tr(),await Qe(),f("auth",t||"Access denied.",{ttlMs:p}),Lt()}),bt("guildsync-login-failed",async t=>{g={logged_in:!1,allowed:!1,status_message:""},tr(),await Qe(),f("auth",t||"Login failed.",{ttlMs:p}),Lt()})}function w(){return Boolean((g==null?void 0:g.logged_in)&&(g==null?void 0:g.allowed)&&(g==null?void 0:g.token))}function Q(){var t,e;return((t=g.user)==null?void 0:t.display_name)||((e=g.user)==null?void 0:e.username)||"Discord User"}function pu(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),r=String(t.discord_user_id||"").trim();if(!e||!r)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=128`}function Eo(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function mu(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function gu(){kt&&(kt.disconnect(),kt=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),r=Math.round(t.getBoundingClientRect().height);kt=new ResizeObserver(n=>{const i=n[0];if(!i)return;const s=Math.round(i.contentRect.width),o=Math.round(i.contentRect.height);s===e&&o===r||(e=s,r=o,Ro(),Lo())}),kt.observe(t)}function Ro(){clearTimeout(pi),pi=setTimeout(async()=>{try{await Xi()}catch{}},500)}function k(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function a(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function u(t){return a(t)}hu();cc();
