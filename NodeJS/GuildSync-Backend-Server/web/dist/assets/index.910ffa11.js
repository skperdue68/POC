(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const Gi="/assets/splash.ea386b6a.png",Pi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",Ui="/assets/GuildSync-Graphic.9169020d.png",J=Object.create(null);J.open="0";J.close="1";J.ping="2";J.pong="3";J.message="4";J.upgrade="5";J.noop="6";const Ut=Object.create(null);Object.keys(J).forEach(e=>{Ut[J[e]]=e});const Tr={type:"error",data:"parser error"},ss=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",is=typeof ArrayBuffer=="function",os=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,tn=({type:e,data:t},r,n)=>ss&&t instanceof Blob?r?n(t):Cn(t,n):is&&(t instanceof ArrayBuffer||os(t))?r?n(t):Cn(new Blob([t]),n):n(J[e]+(t||"")),Cn=(e,t)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];t("b"+(n||""))},r.readAsDataURL(e)};function Nn(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let _r;function Vi(e,t){if(ss&&e.data instanceof Blob)return e.data.arrayBuffer().then(Nn).then(t);if(is&&(e.data instanceof ArrayBuffer||os(e.data)))return t(Nn(e.data));tn(e,!1,r=>{_r||(_r=new TextEncoder),t(_r.encode(r))})}const Tn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",gt=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<Tn.length;e++)gt[Tn.charCodeAt(e)]=e;const Hi=e=>{let t=e.length*.75,r=e.length,n,s=0,i,o,c,f;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const y=new ArrayBuffer(t),k=new Uint8Array(y);for(n=0;n<r;n+=4)i=gt[e.charCodeAt(n)],o=gt[e.charCodeAt(n+1)],c=gt[e.charCodeAt(n+2)],f=gt[e.charCodeAt(n+3)],k[s++]=i<<2|o>>4,k[s++]=(o&15)<<4|c>>2,k[s++]=(c&3)<<6|f&63;return y},Wi=typeof ArrayBuffer=="function",rn=(e,t)=>{if(typeof e!="string")return{type:"message",data:as(e,t)};const r=e.charAt(0);return r==="b"?{type:"message",data:zi(e.substring(1),t)}:Ut[r]?e.length>1?{type:Ut[r],data:e.substring(1)}:{type:Ut[r]}:Tr},zi=(e,t)=>{if(Wi){const r=Hi(e);return as(r,t)}else return{base64:!0,data:e}},as=(e,t)=>{switch(t){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},cs=String.fromCharCode(30),ji=(e,t)=>{const r=e.length,n=new Array(r);let s=0;e.forEach((i,o)=>{tn(i,!1,c=>{n[o]=c,++s===r&&t(n.join(cs))})})},Yi=(e,t)=>{const r=e.split(cs),n=[];for(let s=0;s<r.length;s++){const i=rn(r[s],t);if(n.push(i),i.type==="error")break}return n};function Ki(){return new TransformStream({transform(e,t){Vi(e,r=>{const n=r.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const i=new DataView(s.buffer);i.setUint8(0,126),i.setUint16(1,n)}else{s=new Uint8Array(9);const i=new DataView(s.buffer);i.setUint8(0,127),i.setBigUint64(1,BigInt(n))}e.data&&typeof e.data!="string"&&(s[0]|=128),t.enqueue(s),t.enqueue(r)})}})}let Lr;function xt(e){return e.reduce((t,r)=>t+r.length,0)}function Ot(e,t){if(e[0].length===t)return e.shift();const r=new Uint8Array(t);let n=0;for(let s=0;s<t;s++)r[s]=e[0][n++],n===e[0].length&&(e.shift(),n=0);return e.length&&n<e[0].length&&(e[0]=e[0].slice(n)),r}function Ji(e,t){Lr||(Lr=new TextDecoder);const r=[];let n=0,s=-1,i=!1;return new TransformStream({transform(o,c){for(r.push(o);;){if(n===0){if(xt(r)<1)break;const f=Ot(r,1);i=(f[0]&128)===128,s=f[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(xt(r)<2)break;const f=Ot(r,2);s=new DataView(f.buffer,f.byteOffset,f.length).getUint16(0),n=3}else if(n===2){if(xt(r)<8)break;const f=Ot(r,8),y=new DataView(f.buffer,f.byteOffset,f.length),k=y.getUint32(0);if(k>Math.pow(2,53-32)-1){c.enqueue(Tr);break}s=k*Math.pow(2,32)+y.getUint32(4),n=3}else{if(xt(r)<s)break;const f=Ot(r,s);c.enqueue(rn(i?f:Lr.decode(f),t)),n=0}if(s===0||s>e){c.enqueue(Tr);break}}}})}const ds=4;function D(e){if(e)return Qi(e)}function Qi(e){for(var t in D.prototype)e[t]=D.prototype[t];return e}D.prototype.on=D.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};D.prototype.once=function(e,t){function r(){this.off(e,r),t.apply(this,arguments)}return r.fn=t,this.on(e,r),this};D.prototype.off=D.prototype.removeListener=D.prototype.removeAllListeners=D.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+e];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var n,s=0;s<r.length;s++)if(n=r[s],n===t||n.fn===t){r.splice(s,1);break}return r.length===0&&delete this._callbacks["$"+e],this};D.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),r=this._callbacks["$"+e],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,s=r.length;n<s;++n)r[n].apply(this,t)}return this};D.prototype.emitReserved=D.prototype.emit;D.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};D.prototype.hasListeners=function(e){return!!this.listeners(e).length};const ar=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,r)=>r(t,0))(),I=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),Xi="arraybuffer";function ls(e,...t){return t.reduce((r,n)=>(e.hasOwnProperty(n)&&(r[n]=e[n]),r),{})}const Zi=I.setTimeout,eo=I.clearTimeout;function cr(e,t){t.useNativeTimers?(e.setTimeoutFn=Zi.bind(I),e.clearTimeoutFn=eo.bind(I)):(e.setTimeoutFn=I.setTimeout.bind(I),e.clearTimeoutFn=I.clearTimeout.bind(I))}const to=1.33;function ro(e){return typeof e=="string"?no(e):Math.ceil((e.byteLength||e.size)*to)}function no(e){let t=0,r=0;for(let n=0,s=e.length;n<s;n++)t=e.charCodeAt(n),t<128?r+=1:t<2048?r+=2:t<55296||t>=57344?r+=3:(n++,r+=4);return r}function us(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function so(e){let t="";for(let r in e)e.hasOwnProperty(r)&&(t.length&&(t+="&"),t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t}function io(e){let t={},r=e.split("&");for(let n=0,s=r.length;n<s;n++){let i=r[n].split("=");t[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return t}class oo extends Error{constructor(t,r,n){super(t),this.description=r,this.context=n,this.type="TransportError"}}class nn extends D{constructor(t){super(),this.writable=!1,cr(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,r,n){return super.emitReserved("error",new oo(t,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const r=rn(t,this.socket.binaryType);this.onPacket(r)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,r={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const r=so(t);return r.length?"?"+r:""}}class ao extends nn{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const r=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};Yi(t,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,ji(t,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=us()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(t,r)}}let fs=!1;try{fs=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const co=fs;function lo(){}class uo extends ao{constructor(t){if(super(t),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,r){const n=this.request({method:"POST",data:t});n.on("success",r),n.on("error",(s,i)=>{this.onError("xhr post error",s,i)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=t}}class Y extends D{constructor(t,r,n){super(),this.createRequest=t,cr(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const r=ls(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=Y.requestsCount++,Y.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=lo,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Y.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Y.requestsCount=0;Y.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Bn);else if(typeof addEventListener=="function"){const e="onpagehide"in I?"pagehide":"unload";addEventListener(e,Bn,!1)}}function Bn(){for(let e in Y.requests)Y.requests.hasOwnProperty(e)&&Y.requests[e].abort()}const fo=function(){const e=hs({xdomain:!1});return e&&e.responseType!==null}();class ho extends uo{constructor(t){super(t);const r=t&&t.forceBase64;this.supportsBinary=fo&&!r}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new Y(hs,this.uri(),t)}}function hs(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||co))return new XMLHttpRequest}catch{}if(!t)try{return new I[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const ms=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class mo extends nn{get name(){return"websocket"}doOpen(){const t=this.uri(),r=this.opts.protocols,n=ms?{}:ls(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,r,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],s=r===t.length-1;tn(n,this.supportsBinary,i=>{try{this.doWrite(n,i)}catch{}s&&ar(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=us()),this.supportsBinary||(r.b64=1),this.createUri(t,r)}}const Ar=I.WebSocket||I.MozWebSocket;class po extends mo{createSocket(t,r,n){return ms?new Ar(t,r,n):r?new Ar(t,r):new Ar(t)}doWrite(t,r){this.ws.send(r)}}class go extends nn{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const r=Ji(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(r).getReader(),s=Ki();s.readable.pipeTo(t.writable),this._writer=s.writable.getWriter();const i=()=>{n.read().then(({done:c,value:f})=>{c||(this.onPacket(f),i())}).catch(c=>{})};i();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],s=r===t.length-1;this._writer.write(n).then(()=>{s&&ar(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const yo={websocket:po,webtransport:go,polling:ho},bo=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,vo=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Br(e){if(e.length>8e3)throw"URI too long";const t=e,r=e.indexOf("["),n=e.indexOf("]");r!=-1&&n!=-1&&(e=e.substring(0,r)+e.substring(r,n).replace(/:/g,";")+e.substring(n,e.length));let s=bo.exec(e||""),i={},o=14;for(;o--;)i[vo[o]]=s[o]||"";return r!=-1&&n!=-1&&(i.source=t,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=ko(i,i.path),i.queryKey=So(i,i.query),i}function ko(e,t){const r=/\/{2,9}/g,n=t.replace(r,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function So(e,t){const r={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,i){s&&(r[s]=i)}),r}const xr=typeof addEventListener=="function"&&typeof removeEventListener=="function",Vt=[];xr&&addEventListener("offline",()=>{Vt.forEach(e=>e())},!1);class ue extends D{constructor(t,r){if(super(),this.binaryType=Xi,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(r=t,t=null),t){const n=Br(t);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=Br(r.host).host);cr(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const s=n.prototype.name;this.transports.push(s),this._transportsByName[s]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=io(this.opts.query)),xr&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Vt.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const r=Object.assign({},this.opts.query);r.EIO=ds,r.transport=t,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&ue.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(t);r.open(),this.setTransport(r)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",ue.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=t.data,this._onError(r);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(r+=ro(s)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,ar(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,r,n){return this._sendPacket("message",t,r,n),this}send(t,r,n){return this._sendPacket("message",t,r,n),this}_sendPacket(t,r,n,s){if(typeof r=="function"&&(s=r,r=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const i={type:t,data:r,options:n};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),s&&this.once("flush",s),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),t()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(ue.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),xr&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=Vt.indexOf(this._offlineEventListener);n!==-1&&Vt.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,r),this.writeBuffer=[],this._prevBufferLen=0}}}ue.protocol=ds;class wo extends ue{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let r=this.createTransport(t),n=!1;ue.priorWebsocketSuccess=!1;const s=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",p=>{if(!n)if(p.type==="pong"&&p.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;ue.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(k(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const g=new Error("probe error");g.transport=r.name,this.emitReserved("upgradeError",g)}}))};function i(){n||(n=!0,k(),r.close(),r=null)}const o=p=>{const g=new Error("probe error: "+p);g.transport=r.name,i(),this.emitReserved("upgradeError",g)};function c(){o("transport closed")}function f(){o("socket closed")}function y(p){r&&p.name!==r.name&&i()}const k=()=>{r.removeListener("open",s),r.removeListener("error",o),r.removeListener("close",c),this.off("close",f),this.off("upgrading",y)};r.once("open",s),r.once("error",o),r.once("close",c),this.once("close",f),this.once("upgrading",y),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const r=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&r.push(t[n]);return r}}class _o extends wo{constructor(t,r={}){const n=typeof t=="object"?t:r;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(s=>yo[s]).filter(s=>!!s)),super(t,n)}}function Lo(e,t="",r){let n=e;r=r||typeof location<"u"&&location,e==null&&(e=r.protocol+"//"+r.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=r.protocol+e:e=r.host+e),/^(https?|wss?):\/\//.test(e)||(typeof r<"u"?e=r.protocol+"//"+e:e="https://"+e),n=Br(e)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const i=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+i+":"+n.port+t,n.href=n.protocol+"://"+i+(r&&r.port===n.port?"":":"+n.port),n}const Ao=typeof ArrayBuffer=="function",Eo=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,ps=Object.prototype.toString,Ro=typeof Blob=="function"||typeof Blob<"u"&&ps.call(Blob)==="[object BlobConstructor]",Do=typeof File=="function"||typeof File<"u"&&ps.call(File)==="[object FileConstructor]";function sn(e){return Ao&&(e instanceof ArrayBuffer||Eo(e))||Ro&&e instanceof Blob||Do&&e instanceof File}function Ht(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let r=0,n=e.length;r<n;r++)if(Ht(e[r]))return!0;return!1}if(sn(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return Ht(e.toJSON(),!0);for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&Ht(e[r]))return!0;return!1}function $o(e){const t=[],r=e.data,n=e;return n.data=Or(r,t),n.attachments=t.length,{packet:n,buffers:t}}function Or(e,t){if(!e)return e;if(sn(e)){const r={_placeholder:!0,num:t.length};return t.push(e),r}else if(Array.isArray(e)){const r=new Array(e.length);for(let n=0;n<e.length;n++)r[n]=Or(e[n],t);return r}else if(typeof e=="object"&&!(e instanceof Date)){const r={};for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=Or(e[n],t));return r}return e}function Mo(e,t){return e.data=Ir(e.data,t),delete e.attachments,e}function Ir(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let r=0;r<e.length;r++)e[r]=Ir(e[r],t);else if(typeof e=="object")for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(e[r]=Ir(e[r],t));return e}const gs=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Co=5;var b;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(b||(b={}));class No{constructor(t){this.replacer=t}encode(t){return(t.type===b.EVENT||t.type===b.ACK)&&Ht(t)?this.encodeAsBinary({type:t.type===b.EVENT?b.BINARY_EVENT:b.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let r=""+t.type;return(t.type===b.BINARY_EVENT||t.type===b.BINARY_ACK)&&(r+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(r+=t.nsp+","),t.id!=null&&(r+=t.id),t.data!=null&&(r+=JSON.stringify(t.data,this.replacer)),r}encodeAsBinary(t){const r=$o(t),n=this.encodeAsString(r.packet),s=r.buffers;return s.unshift(n),s}}class on extends D{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let r;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(t);const n=r.type===b.BINARY_EVENT;n||r.type===b.BINARY_ACK?(r.type=n?b.EVENT:b.ACK,this.reconstructor=new To(r),r.attachments===0&&super.emitReserved("decoded",r)):super.emitReserved("decoded",r)}else if(sn(t)||t.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let r=0;const n={type:Number(t.charAt(0))};if(b[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===b.BINARY_EVENT||n.type===b.BINARY_ACK){const i=r+1;for(;t.charAt(++r)!=="-"&&r!=t.length;);const o=t.substring(i,r);if(o!=Number(o)||t.charAt(r)!=="-")throw new Error("Illegal attachments");const c=Number(o);if(!ys(c)||c<0)throw new Error("Illegal attachments");if(c>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=c}if(t.charAt(r+1)==="/"){const i=r+1;for(;++r&&!(t.charAt(r)===","||r===t.length););n.nsp=t.substring(i,r)}else n.nsp="/";const s=t.charAt(r+1);if(s!==""&&Number(s)==s){const i=r+1;for(;++r;){const o=t.charAt(r);if(o==null||Number(o)!=o){--r;break}if(r===t.length)break}n.id=Number(t.substring(i,r+1))}if(t.charAt(++r)){const i=this.tryParse(t.substr(r));if(on.isPayloadValid(n.type,i))n.data=i;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,r){switch(t){case b.CONNECT:return Jt(r);case b.DISCONNECT:return r===void 0;case b.CONNECT_ERROR:return typeof r=="string"||Jt(r);case b.EVENT:case b.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&gs.indexOf(r[0])===-1);case b.ACK:case b.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class To{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const r=Mo(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Bo(e){return typeof e=="string"}const ys=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e};function xo(e){return e===void 0||ys(e)}function Jt(e){return Object.prototype.toString.call(e)==="[object Object]"}function Oo(e,t){switch(e){case b.CONNECT:return t===void 0||Jt(t);case b.DISCONNECT:return t===void 0;case b.EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&gs.indexOf(t[0])===-1);case b.ACK:return Array.isArray(t);case b.CONNECT_ERROR:return typeof t=="string"||Jt(t);default:return!1}}function Io(e){return Bo(e.nsp)&&xo(e.id)&&Oo(e.type,e.data)}const qo=Object.freeze(Object.defineProperty({__proto__:null,protocol:Co,get PacketType(){return b},Encoder:No,Decoder:on,isPacketValid:Io},Symbol.toStringTag,{value:"Module"}));function U(e,t,r){return e.on(t,r),function(){e.off(t,r)}}const Fo=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class bs extends D{constructor(t,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[U(t,"open",this.onopen.bind(this)),U(t,"packet",this.onpacket.bind(this)),U(t,"error",this.onerror.bind(this)),U(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...r){var n,s,i;if(Fo.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(r.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const o={type:b.EVENT,data:r};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const k=this.ids++,p=r.pop();this._registerAckCallback(k,p),o.id=k}const c=(s=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||s===void 0?void 0:s.writable,f=this.connected&&!(!((i=this.io.engine)===null||i===void 0)&&i._hasPingExpired());return this.flags.volatile&&!c||(f?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(t,r){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[t]=r;return}const i=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let c=0;c<this.sendBuffer.length;c++)this.sendBuffer[c].id===t&&this.sendBuffer.splice(c,1);r.call(this,new Error("operation has timed out"))},s),o=(...c)=>{this.io.clearTimeoutFn(i),r.apply(this,c)};o.withError=!0,this.acks[t]=o}emitWithAck(t,...r){return new Promise((n,s)=>{const i=(o,c)=>o?s(o):n(c);i.withError=!0,r.push(i),this.emit(t,...r)})}_addToQueue(t){let r;typeof t[t.length-1]=="function"&&(r=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((s,...i)=>(this._queue[0],s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(s)):(this._queue.shift(),r&&r(null,...i)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!t||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:b.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case b.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case b.EVENT:case b.BINARY_EVENT:this.onevent(t);break;case b.ACK:case b.BINARY_ACK:this.onack(t);break;case b.DISCONNECT:this.ondisconnect();break;case b.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const r=t.data||[];t.id!=null&&r.push(this.ack(t.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const r=this;let n=!1;return function(...s){n||(n=!0,r.packet({type:b.ACK,id:t,data:s}))}}onack(t){const r=this.acks[t.id];typeof r=="function"&&(delete this.acks[t.id],r.withError&&t.data.unshift(null),r.apply(this,t.data))}onconnect(t,r){this.id=t,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:b.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,t.data)}}}function et(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}et.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),r=Math.floor(t*this.jitter*e);e=(Math.floor(t*10)&1)==0?e-r:e+r}return Math.min(e,this.max)|0};et.prototype.reset=function(){this.attempts=0};et.prototype.setMin=function(e){this.ms=e};et.prototype.setMax=function(e){this.max=e};et.prototype.setJitter=function(e){this.jitter=e};class qr extends D{constructor(t,r){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(r=t,t=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,cr(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new et({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=t;const s=r.parser||qo;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var r;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(r=this.backoff)===null||r===void 0||r.setMin(t),this)}randomizationFactor(t){var r;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(r=this.backoff)===null||r===void 0||r.setJitter(t),this)}reconnectionDelayMax(t){var r;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(r=this.backoff)===null||r===void 0||r.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new _o(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=U(r,"open",function(){n.onopen(),t&&t()}),i=c=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",c),t?t(c):this.maybeReconnectOnOpen()},o=U(r,"error",i);if(this._timeout!==!1){const c=this._timeout,f=this.setTimeoutFn(()=>{s(),i(new Error("timeout")),r.close()},c);this.opts.autoUnref&&f.unref(),this.subs.push(()=>{this.clearTimeoutFn(f)})}return this.subs.push(s),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(U(t,"ping",this.onping.bind(this)),U(t,"data",this.ondata.bind(this)),U(t,"error",this.onerror.bind(this)),U(t,"close",this.onclose.bind(this)),U(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(r){this.onclose("parse error",r)}}ondecoded(t){ar(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,r){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new bs(this,t,r),this.nsps[t]=n),n}_destroy(t){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(t){const r=this.encoder.encode(t);for(let n=0;n<r.length;n++)this.engine.write(r[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(s=>{s?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",s)):t.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const ut={};function Wt(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const r=Lo(e,t.path||"/socket.io"),n=r.source,s=r.id,i=r.path,o=ut[s]&&i in ut[s].nsps,c=t.forceNew||t["force new connection"]||t.multiplex===!1||o;let f;return c?f=new qr(n,t):(ut[s]||(ut[s]=new qr(n,t)),f=ut[s]),r.query&&!t.query&&(t.query=r.queryKey),f.socket(r.path,t)}Object.assign(Wt,{Manager:qr,Socket:bs,io:Wt,connect:Wt});window.GUILDSYNC_WEB=!0;const an="guildsync-web-session";function Go(){try{return JSON.parse(localStorage.getItem(an)||"{}")||{}}catch{return{}}}function Po(e){localStorage.setItem(an,JSON.stringify(e||{}))}function vs(){localStorage.removeItem(an)}async function Uo(){return!0}async function ks(){return!0}async function Vo(){return!0}async function Ho(){return!0}async function Wo(){return!0}async function zo(){return window.location.assign("/api/auth/discord/web-login"),!0}async function jo(){var i,o,c,f,y,k,p,g;const t=Go().token||localStorage.getItem("guildsync-web-token")||"";if(!t)return{logged_in:!1,allowed:!1,status_message:"Not logged in."};const r=await fetch("/api/auth/session",{headers:{Authorization:`Bearer ${t}`}}),n=await r.json().catch(()=>({}));if(!r.ok||n.ok===!1)return vs(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:n.message||"Session expired. Please log in again."};const s={logged_in:!0,allowed:!0,token:t,user:n.user,discord_user_id:((i=n.user)==null?void 0:i.discord_user_id)||"",username:((o=n.user)==null?void 0:o.username)||"",global_name:((c=n.user)==null?void 0:c.global_name)||"",display_name:((f=n.user)==null?void 0:f.display_name)||((y=n.user)==null?void 0:y.global_name)||((k=n.user)==null?void 0:k.username)||"",avatar_url:((p=n.user)==null?void 0:p.avatar_url)||"",role:((g=n.user)==null?void 0:g.role)||"user",status_message:"Logged in."};return Po(s),s}async function Yo(){return vs(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:"Logged out."}}async function Ko(){return Ss()}async function Jo(){return Ss()}async function Ss(){return{watching:!1,directory:"Web upload mode",files:[{key:"banking",fileName:"GuildSyncBanking.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"},{key:"roster",fileName:"GuildSyncRoster.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"}]}}async function Qo(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function Xo(){return{ok:!0}}async function Zo(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function ea(){return{ok:!0}}const It=new Map;function ft(e,t){return It.has(e)||It.set(e,new Set),It.get(e).add(t),()=>{var r;return(r=It.get(e))==null?void 0:r.delete(t)}}const cn="1.0.3",qt={windows:{label:"Windows detected",shortLabel:"Windows",fileName:"GuildSync-windows-amd64.zip",href:"/downloads/GuildSync-windows-amd64.zip"},macos:{label:"macOS detected",shortLabel:"macOS",fileName:"GuildSync-macos.zip",href:"/downloads/GuildSync-macos.zip"},linux:{label:"Linux detected",shortLabel:"Linux",fileName:"GuildSync-linux-amd64.zip",href:"/downloads/GuildSync-linux-amd64.zip"}},ta=30*60*1e3,ws="guildsync-pending-banking-uploads",_s="guildsync-pending-roster-uploads",Ls="guildsync-web-savedvars-upload-banner-dismissed",ra=new Map([["GuildSyncBanking.lua","banking"],["GuildSyncRoster.lua","roster"],["GuildSyncApplications.lua","applications"]]),m=60*1e3,As=7e3,Es=1400,Rs=2400,na=4e3,sa=38,Ds=document.querySelector("#app");let xn=null,ht=null,On=!1,dn=!1,zt=null,Er=!1,Rr=!1,In=null,qe=0,Dr=!1,ye=new Map,we=new Map,M="",Me=!1,Ce=!1,yt=[],v={logged_in:!1,allowed:!1,status_message:""},l=null,B=[],dr=null,We=!1,Qt=!1,Xt="",Fe=new Set,Ge=new Set,St="username",_e="asc",Fr=null,Gr=null,G=[],Zt=null,be=!1,qn=!1,er="",Pr=null,Ur=null,Le=new Set,Pe=new Set,X="",T="",$=-1,ze=!1,wt="",q=[],ve="",fe=[],he=!1,ee="",$r=null,V=-1,je=!1,ie="",F=[],Ye="",Ne="",me=[],pe=!1,te="",Fn=null,Se=0;const ia=650;let H=-1,tt=!1,rt=[],oe=!1,Ae="",nt=!1,_t=[],ae=!1,Ee="",Te=!1,ln=[],ce=!1,Re="",st="",de="",Ue="",le="",L=[],O=!1,P="",Ie=!1,lr="",Ve="",Et="",Rt="",Z=-1,ke=!1,S=null,De=[],Ke=!1,ne="",Dt="",j=-1,it=!1,un=null,bt=null;const fn=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let K=[],C="biweekly",$s=null,Be=!1,$e=!1,$t="biweekly",re=!1,tr=!1,W="",_={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},ot="",z=-1,Vr={biweekly:0,monthly:0};const oa=1780786800,aa=1781996400,ca=14*24*60*60,da=28*24*60*60,la=60*60,rr=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let E=rr[0].id;function ua(){Ds.innerHTML=`
    <main class="splash-screen">
      <img src="${Gi}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await Uo(),await fa(),Ms(),vt(),await kt()},5e3)}async function fa(){try{v=await jo()}catch(e){v={logged_in:!1,allowed:!1,status_message:""},h("session-error",w(e),{ttlMs:m})}}function Ms(){Ds.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${Pi}" alt="" class="title-icon" />
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
            <img src="${Ui}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Mobile Companion</div>
            </div>
          </div>
          <div class="compact-header-actions">
            ${ma()}
            <div id="discordArea" class="discord-area"></div>
          </div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${Cs()}
        </nav>

        <div id="webSavedVarsUploadBannerHost">
          ${Ha()}
        </div>

        <section id="guildSyncTabContent" class="guildsync-tab-content${Fs()?" web-upload-banner-dismissed":""}" aria-live="polite">
          ${Ns()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await Ho()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await ks(),await Wo()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await Vo()}),Kt(),Wa(),Bs(),$i(),pi(),Si(),Gs(),mi(),ai(),ci(),di(),li(),Zs(),gi(),wa(),ge(),Ze(),On||(window.addEventListener("resize",()=>{qi(),Ii()}),hl(),On=!0)}function ha(){var r;const t=`${((r=navigator.userAgentData)==null?void 0:r.platform)||""} ${navigator.platform||""} ${navigator.userAgent||""}`.toLowerCase();return t.includes("win")?qt.windows:t.includes("mac")||t.includes("darwin")?qt.macos:t.includes("linux")||t.includes("x11")?qt.linux:{...qt.windows,label:"Desktop client",shortLabel:"Windows"}}function ma(){const e=ha();return`
    <a
      class="desktop-client-download-button"
      href="${u(e.href)}"
      download="${u(e.fileName)}"
      title="Download ${u(e.fileName)}"
      aria-label="Download GuildSync desktop client for ${u(e.shortLabel)}"
    >
      <span class="desktop-client-download-icon" aria-hidden="true">\u2B07</span>
      <span class="desktop-client-download-copy">
        <span class="desktop-client-download-title">Download Desktop Client</span>
        <span class="desktop-client-download-subtitle">${a(e.label)} \xB7 ZIP</span>
      </span>
      <span class="desktop-client-download-caret" aria-hidden="true">\u25BE</span>
    </a>
  `}function Cs(){return rr.map(e=>{const t=e.id===E;return`
        <button
          class="guildsync-tab${t?" active":""}"
          type="button"
          data-tab-id="${u(e.id)}"
          aria-selected="${t?"true":"false"}"
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${ya(e.icon)}</span>
          <span class="guildsync-tab-mobile-icon" aria-hidden="true">${ga(e.id)}</span>
          <span class="guildsync-tab-label">${a(e.label)}</span>
          <span class="guildsync-tab-mobile-label">${a(pa(e.id))}</span>
        </button>
      `}).join("")}function pa(e){return e==="discord-members"?"Discord":e==="more"?"Bank":e==="eso-members"?"Roster":(e==="settings","More")}function ga(e){return e==="discord-members"?`
      <svg class="guildsync-tab-mobile-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:e==="eso-members"?`
      <svg class="guildsync-tab-mobile-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" d="M16 20v-1.8c0-2.05-1.75-3.7-3.9-3.7H7.9c-2.15 0-3.9 1.65-3.9 3.7V20"/>
        <path fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" d="M10 10.8a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8Z"/>
        <path fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" d="M20 20v-1.6c0-1.75-1.12-3.05-2.85-3.48"/>
        <path fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" d="M15.2 4.25a3.1 3.1 0 0 1 0 6.05"/>
      </svg>
    `:e==="more"?`
      <svg class="guildsync-tab-mobile-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" d="M3 21h18M5 21V10.25M9.7 21V10.25M14.3 21V10.25M19 21V10.25M3.5 8.25 12 3l8.5 5.25H3.5Z"/>
      </svg>
    `:`
    <svg class="guildsync-tab-mobile-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M5 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
    </svg>
  `}function ya(e){return e==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:e==="swords"?"\u2694":e==="gear"?"\u2699":e==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function Ns(){const e=rr.find(r=>r.id===E)||rr[0];let t="";return e.id==="discord-members"?t=La():e.id==="eso-members"?t=Aa():e.id==="more"?t=md():e.id==="settings"?t=za():t=`
      <div class="guildsync-tab-panel" data-active-tab="${u(e.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${a(e.label)} content will appear here.
        </div>
      </div>
    `,`
    ${t}
    ${re?Xc():""}
    ${ke?Vc():""}
    ${tt?Qa():""}
    ${nt?nc():""}
    ${Te?ac():""}
    ${Ie?vc():""}
    ${it?Sa():""}
  `}function ba(){return it||ze||je||re||ke||tt||nt||Te||Ie||$e}function va(){return it?!1:Ie?(Yr(),!0):Te||Te?(sr(),!0):nt?(jr(),!0):tt?(zr(),!0):ke?(Qe(),!0):re?(re=!1,d(),!0):ze?(ze=!1,d(),!0):je?(je=!1,d(),!0):$e?($e=!1,d(),!0):!1}function ka(e){e.key==="Escape"&&va()&&(e.preventDefault(),e.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",ka,!0),window.guildSyncGlobalModalEscapeAttached=!0);function Ts(e={}){return new Promise(t=>{bt&&bt(!1),it=!0,un={title:e.title||"Confirm Action",message:e.message||"Are you sure?",detail:e.detail||"",confirmLabel:e.confirmLabel||"Confirm",cancelLabel:e.cancelLabel||"Cancel",confirmClass:e.confirmClass||"danger"},bt=t,d()})}function nr(e=!1){const t=bt;bt=null,it=!1,un=null,t&&t(e===!0),d()}function Sa(){const e=un||{};return`
    <div class="roster-history-overlay guildsync-confirm-overlay" role="dialog" aria-modal="true" aria-labelledby="guildSyncConfirmTitle">
      <div class="roster-history-dialog guildsync-confirm-dialog">
        <div class="roster-history-header guildsync-confirm-header">
          <div>
            <h3 id="guildSyncConfirmTitle">${a(e.title||"Confirm Action")}</h3>
            ${e.detail?`<p>${a(e.detail)}</p>`:""}
          </div>
        </div>
        <div class="guildsync-confirm-body">
          ${a(e.message||"Are you sure?")}
        </div>
        <div class="guildsync-confirm-actions">
          <button id="cancelGuildSyncConfirmButton" class="guildsync-confirm-button guildsync-confirm-cancel" type="button">${a(e.cancelLabel||"Cancel")}</button>
          <button id="acceptGuildSyncConfirmButton" class="guildsync-confirm-button guildsync-confirm-accept ${u(e.confirmClass||"danger")}" type="button">${a(e.confirmLabel||"Confirm")}</button>
        </div>
      </div>
    </div>
  `}function Gn(e){var n,s,i,o;const t=(s=(n=e.target).closest)==null?void 0:s.call(n,"#cancelGuildSyncConfirmButton"),r=(o=(i=e.target).closest)==null?void 0:o.call(i,"#acceptGuildSyncConfirmButton");if(!(!t&&!r)){if(e.preventDefault(),e.stopPropagation(),t){nr(!1);return}r&&nr(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",Gn,!0),document.addEventListener("pointerup",Gn,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function wa(){if(!it)return;const e=document.querySelector("#cancelGuildSyncConfirmButton"),t=document.querySelector("#acceptGuildSyncConfirmButton");e&&(e.onclick=n=>{n.preventDefault(),n.stopPropagation(),nr(!1)}),t&&(t.onclick=n=>{n.preventDefault(),n.stopPropagation(),nr(!0)});const r=document.querySelector(".guildsync-confirm-overlay");r&&(r.onclick=n=>{n.target===r&&(n.preventDefault(),n.stopPropagation())})}function Bs(){document.querySelectorAll(".guildsync-tab").forEach(e=>{e.addEventListener("click",()=>{if(ba())return;const t=e.dataset.tabId;!t||t===E||(E=t,d())})})}function _a(){const e=document.querySelector(".member-links-table-shell");e&&e.scrollTop}function d(e={}){Ie&&_a();const t=document.querySelector(".guildsync-tabs"),r=document.querySelector("#guildSyncTabContent");t&&(t.innerHTML=Cs()),r&&(r.innerHTML=Ns()),Bs(),$i(),pi(),Si(),Gs(),mi(),ai(),ci(),di(),li(),Zs(),gi(),e.restoreDiscordSearchFocus&&Id(),e.restoreRosterSearchFocus&&qd(),E==="discord-members"&&(l==null?void 0:l.connected)&&B.length===0&&!We&&En({silent:!0}),E==="eso-members"&&(l==null?void 0:l.connected)&&G.length===0&&!be&&!qn&&(qn=!0,ct({silent:!0})),E==="more"&&(l==null?void 0:l.connected)&&K.length===0&&!Be&&Tt({silent:!0}),(E==="discord-members"||E==="eso-members"||E==="settings")&&(l==null?void 0:l.connected)&&L.length===0&&!O&&Nt({silent:!0})}function La(){const e=Bd(),t=Fd(),r=Array.from(Fe),n=Array.from(Ge);return`
    <div class="guildsync-tab-panel discord-member-panel" data-active-tab="discord-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Discord Members</h2>
          <p class="discord-data-subtitle"><span class="discord-member-total-count">${e.length} of ${B.length} members</span></p>
        </div>
        <div class="discord-history-header-action" style="flex: 1; display: flex; justify-content: center; align-items: center;">
          <button id="openDiscordHistoryButton" class="refresh-discord-button" type="button">Lookup Member History</button>
        </div>
        <div class="discord-data-actions">
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${a(Ci(dr))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${We||Qt?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Qt?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${u(Xt)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${t.filter(s=>!Fe.has(s)).map(s=>`<option value="${u(s)}">${a(s)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All roles</span>':r.map(s=>Jd(s)).join("")}
            </div>
          </div>

          <button id="clearDiscordFiltersButton" class="clear-discord-filters-button" type="button">Clear Filters</button>
          <div class="discord-results-count">${e.length} result${e.length===1?"":"s"}</div>
        </div>

        <div class="discord-filter-row discord-link-filter-row">
          <div class="discord-role-filter-wrap member-link-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordLinkStatusFilter">Link Status</label>
            <select id="discordLinkStatusFilter" class="discord-role-select">
              <option value="">Add link status...</option>
              ${fn.filter(s=>!Ge.has(s.id)).map(s=>`<option value="${u(s.id)}">${a(s.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(s=>xs("discord",s)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-mobile-member-list" aria-label="Discord members">
          ${e.length>0?e.map(s=>Ud(s)).join(""):Vd()}
        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${Gt("username","Username")}
                ${Gt("global_name","Global Name")}
                ${Gt("server_nickname","Server Nickname")}
                ${Gt("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${e.length>0?e.map(s=>Gd(s)).join(""):Pd()}
            </tbody>
          </table>
        </div>
      </div>
      ${je?Ia():""}
    </div>
  `}function Aa(){const e=Ma(),t=Ta(),r=Array.from(Le),n=Array.from(Pe);return`
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
          <span class="discord-last-refresh">Last Refresh: ${a(cd(Zt))}</span>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${be?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${be?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${u(er)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${t.filter(s=>!Le.has(s)).map(s=>`<option value="${u(s)}">${a(s)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All ranks</span>':r.map(s=>Ba(s)).join("")}
            </div>
          </div>

          <button id="clearRosterFiltersButton" class="clear-discord-filters-button" type="button">Clear Filters</button>
          <div class="discord-results-count">${e.length} result${e.length===1?"":"s"}</div>
        </div>

        <div class="discord-filter-row discord-link-filter-row">
          <div class="discord-role-filter-wrap member-link-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterLinkStatusFilter">Link Status</label>
            <select id="rosterLinkStatusFilter" class="discord-role-select">
              <option value="">Add link status...</option>
              ${fn.filter(s=>!Pe.has(s.id)).map(s=>`<option value="${u(s.id)}">${a(s.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(s=>xs("roster",s)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${Ft("account_name","Account Name")}
                ${Ft("rank","Rank")}
                ${Ft("joined","Joined")}
                ${Ft("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${e.length>0?e.map((s,i)=>Ea(s,i)).join(""):Ra()}
            </tbody>
          </table>
        </div>
      </div>
      ${ze?Pa():""}
    </div>
  `}function Ea(e,t=-1){const r=Da(e.rank||""),n=r?` style="color: ${r};"`:"";return`
    <tr class="eso-roster-row${t===$?" roster-search-active-row":""}"${n} data-roster-row-index="${u(String(t))}" data-eso-account-name="${u(e.account_name||"")}">
      <td>${a(e.account_name||"")}</td>
      <td>${hn(e.rank||"")}</td>
      <td>${a(fr(e.joined))}</td>
      <td class="member-link-action-cell">${ri({mode:"eso-to-discord",esoAccountName:e.account_name})}</td>
    </tr>
  `}function Ra(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">${a(be?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function Da(e){const t=String(e||"").trim(),r=Dn(t);return dt(r==null?void 0:r.role_color)}function hn(e){const t=String(e||"").trim();return`<span class="eso-roster-rank-text">${a(t)}</span>`}function $a(e){const t=String(e||"").trim();return!t||t.toLowerCase()==="unknown"?"":hn(t)}function Ma(){const e=er.trim().toLowerCase(),t=G.filter(r=>{const n=String(r.rank||"").trim();if(Le.size>0&&!Le.has(n)||!qs(Pe,Hr(r)))return!1;if(!e)return!0;const s=fr(r.joined),i=Sn(r.joined),o=Hr(r),c=Is(r.account_name||"");return[r.account_name,n,s,i,r.joined,o,c].map(y=>String(y||"").toLowerCase()).join(" ").includes(e)});return Ca(t)}function Ca(e){if(!X||!T)return e;const t=T==="desc"?-1:1;return[...e].sort((r,n)=>{const s=Pn(r,X),i=Pn(n,X),o=s.localeCompare(i,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*t:String(r.account_name||"").localeCompare(String(n.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function Pn(e,t){if(t==="rank")return String(e.rank||"");if(t==="joined"){const r=Number(e.joined||0);return Number.isFinite(r)&&r>0?String(r).padStart(16,"0"):""}if(t==="linked"){const r=Hr(e);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[r]||"9"} ${r} ${Is(e.account_name||"")}`}return String(e.account_name||"")}function Na(e){const r=new Set(["account_name","rank","joined","linked"]).has(e)?e:"account_name";X!==r?(X=r,T="asc"):T==="asc"?T="desc":T==="desc"?(X="",T=""):(X=r,T="asc"),$=-1,d()}function Ft(e,t,r=""){const n=X===e&&Boolean(T),s=n?T==="asc"?"ascending":"descending":"none",i=n?T==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${u(r)}" aria-sort="${u(s)}">
      <button
        class="discord-sort-header roster-sort-header${n?" active":""}"
        type="button"
        data-roster-sort-column="${u(e)}"
        title="Sort ${u(t)}${n&&T==="asc"?" descending":n&&T==="desc"?" not sorted":" ascending"}"
      >
        <span>${a(t)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function Ta(){return Array.from(new Set(G.map(e=>String(e.rank||"").trim()).filter(Boolean))).sort((e,t)=>e.localeCompare(t))}function Ba(e){const t=Dn(e),r=dt(t==null?void 0:t.role_color),n=yr(r),s=gr(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-roster-rank-filter="${u(e)}"
      style="${s}"
      title="Remove ${u(e)} filter"
    >
      <span>${a(e)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function xa(e){const t=fn.find(r=>r.id===e);return t?t.label:e}function xs(e,t){const r=e==="roster"?"roster":"discord",n=xa(t);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${r}-link-status-filter="${u(t)}"
      title="Remove ${u(n)} link filter"
    >
      <span>${a(n)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Os(e){const t=Array.isArray(e)?e.filter(Boolean):e?[e]:[];return t.length===0?"unlinked":t.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked"&&String(r.link_method||"").trim().toLowerCase()==="manual")?"manual":t.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked")?"linked":t.some(r=>String(r.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function Oa(e){return Os(at(e==null?void 0:e.discord_id))}function Hr(e){return Os(ur(e==null?void 0:e.account_name))}function Is(e){const t=ur(e),r=vn({mode:"eso-to-discord",esoAccountName:e}),n=t.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked").map(i=>i.discord_server_nickname||i.discord_display_name||i.discord_username||i.discord_user_id||"").filter(Boolean),s=t.filter(i=>String(i.link_status||"").trim().toLowerCase()==="candidate").map(i=>i.discord_server_nickname||i.discord_display_name||i.discord_username||i.discord_user_id||"").filter(Boolean);return[r.label,r.title,n.join(" "),s.join(" ")].filter(Boolean).join(" ")}function qs(e,t){return!e||e.size===0||e.has(t)?!0:t==="manual"&&e.has("linked")}function Ia(){return`
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
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${u(ie)}" />
        </div>

        ${te?`<div class="discord-data-error">${a(te)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${qa()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${Ne?`: ${a(Ne)}`:""}</div>
            ${Fa()}
          </div>
        </div>
      </div>
    </div>
  `}function qa(){return pe&&F.length===0?'<div class="roster-history-muted">Searching...</div>':F.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${F.map((e,t)=>`
        <button class="roster-history-match${t===H||e.discord_id===Ye?" is-selected":""}" type="button" data-discord-history-id="${u(e.discord_id)}" data-discord-history-name="${u(Wr(e))}">
          <span>${a(Wr(e))}</span>
          <strong>${a(String(e.event_count||0))} event${Number(e.event_count||0)===1?"":"s"}</strong>
          ${t===H?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Fa(){return Ye?pe&&me.length===0?'<div class="roster-history-muted">Loading history...</div>':me.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${me.map(e=>`
            <tr>
              <td class="roster-history-when-cell">${a(Sn(e.event_timestamp||e.event_datetime||e.timestamp))}</td>
              <td>${a(Ga(e.event_type))}</td>
              <td>${a(e.old_value||"")}</td>
              <td>${a(e.new_value||"")}</td>
              <td>${a(e.source||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function Wr(e={}){return String(e.server_nickname||e.global_name||e.username||e.discord_id||"").trim()}function Ga(e){return String(e||"").replaceAll("_"," ").replace(/\b\w/g,t=>t.toUpperCase())}function Pa(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(wt)}" />
        </div>

        ${ee?`<div class="discord-data-error">${a(ee)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Ua()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${ve?`: ${a(ve)}`:""}</div>
            ${Va()}
          </div>
        </div>
      </div>
    </div>
  `}function Ua(){return he&&q.length===0?'<div class="roster-history-muted">Searching...</div>':q.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${q.map((e,t)=>`
        <button class="roster-history-match${t===V||e.account_name===ve?" is-selected":""}" type="button" data-roster-history-account="${u(e.account_name)}">
          <span>${a(e.account_name)}</span>
          <strong>${a(e.rank||"")}</strong>
          ${t===V?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Va(){return ve?he&&fe.length===0?'<div class="roster-history-muted">Loading history...</div>':fe.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${fe.map(e=>`
            <tr>
              <td class="roster-history-when-cell">${a(Sn(e.timestamp))}</td>
              <td>${a(e.event_type||"")}</td>
              <td>${$a(e.rank)}</td>
              <td>${a(e.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function Mt(){return typeof window<"u"&&window.GUILDSYNC_WEB===!0}function Fs(){if(!Mt())return!0;try{return localStorage.getItem(Ls)==="1"}catch{return!1}}function Ha(){return!Mt()||Fs()?"":`
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
  `}function Wa(){const e=document.querySelector("#webSavedVarsUploadBannerDismissButton");!e||e.addEventListener("click",()=>{var t,r;try{localStorage.setItem(Ls,"1")}catch{}(t=document.querySelector("#webSavedVarsUploadBannerHost"))==null||t.remove(),(r=document.querySelector(".guildsync-tab-content"))==null||r.classList.add("web-upload-banner-dismissed")})}function za(){return`
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
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${oe?"disabled":""}>
              ${oe?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${ae?"disabled":""}>
              ${ae?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, last server-specific activity time, days since last activity, and the activity that updated the timestamp.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${ce?"disabled":""}>
              ${ce?"Loading...":"Run"}
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
  `}function Gs(){var e,t,r,n;E==="settings"&&((e=document.querySelector("#runAssociateTicketReportButton"))==null||e.addEventListener("click",()=>Vs()),(t=document.querySelector("#runDiscordRankAuditReportButton"))==null||t.addEventListener("click",()=>rc()),(r=document.querySelector("#runDiscordLastSeenReportButton"))==null||r.addEventListener("click",()=>oc()),(n=document.querySelector("#runMemberLinksReportButton"))==null||n.addEventListener("click",()=>gc()))}function jt(){return Mt()&&R()&&(l==null?void 0:l.connected)===!0}function Ps(){if(!Mt())return null;let e=document.querySelector("#webSavedVarsFullScreenDropOverlay");return e||(e=document.createElement("div"),e.id="webSavedVarsFullScreenDropOverlay",e.className="web-savedvars-fullscreen-drop-overlay",e.setAttribute("aria-hidden","true"),e.innerHTML=`
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
  `,document.body.appendChild(e),e)}function Un(){const e=Ps();!e||(e.classList.add("is-visible"),e.setAttribute("aria-hidden","false"))}function Mr(){const e=document.querySelector("#webSavedVarsFullScreenDropOverlay");!e||(e.classList.remove("is-visible"),e.setAttribute("aria-hidden","true"))}function mt(e){var r;return Array.from(((r=e==null?void 0:e.dataTransfer)==null?void 0:r.types)||[]).includes("Files")}function ja(e){!(e!=null&&e.dataTransfer)||(e.dataTransfer.dropEffect=jt()?"copy":"none")}function Us(e){const t=String(e||"").split(/[\\/]/).pop();return ra.get(t)||""}function Ya(){if(!Mt())return;Ps();const e=t=>{!mt(t)||(t.preventDefault(),t.stopPropagation(),ja(t))};document.addEventListener("dragenter",t=>{!mt(t)||(e(t),qe+=1,jt()&&Un())},!0),document.addEventListener("dragover",t=>{e(t),mt(t)&&jt()&&Un()},!0),document.addEventListener("dragleave",t=>{!mt(t)||(t.preventDefault(),t.stopPropagation(),qe=Math.max(0,qe-1),qe===0&&Mr())},!0),document.addEventListener("drop",async t=>{var n;if(!mt(t))return;if(e(t),qe=0,Mr(),!jt()){h("web-savedvars-drop-not-ready","SavedVariables drag/drop is only available while logged in and connected to the GuildSync server.",{ttlMs:m});return}const r=Array.from(((n=t.dataTransfer)==null?void 0:n.files)||[]);await Ka(r)},!0),window.addEventListener("blur",()=>{qe=0,Mr()})}async function Ka(e=[]){if(Dr){h("web-savedvars-drop-busy","A SavedVariables upload is already processing. Please wait for it to finish.",{ttlMs:m});return}const t=Array.from(e||[]).filter(Boolean);if(!t.length){h("web-savedvars-drop-empty","No file was dropped.",{ttlMs:m});return}const r=t.find(n=>!Us(n.name));if(r){h("web-savedvars-drop-invalid",`Unsupported file: ${r.name}. Drop only GuildSyncBanking.lua, GuildSyncRoster.lua, or GuildSyncApplications.lua.`,{ttlMs:m});return}Dr=!0;try{for(const n of t)await Ja(n)}finally{Dr=!1}}async function Ja(e){const t=Us(e.name);if(!t)throw new Error(`Unsupported file: ${e.name}`);const r=`web-savedvars-upload-${t}`,n=await e.text();if(!String(n||"").trim())throw new Error(`${e.name} is empty.`);h(r,`Uploading ${e.name}...`);try{const s=await A("guildsync:upload-savedvars-raw",{file_name:e.name,raw_lua_text:n,source:"web-drag-drop"},12e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||`${e.name} upload was rejected.`);t==="banking"?await Tt({silent:!0}):t==="roster"&&(await ct({silent:!0}),await Nt({silent:!0})),h(r,s.message||`${e.name} uploaded and processed.`,{ttlMs:m})}catch(s){throw h(r,w(s),{ttlMs:m}),s}br("version")}function Vs(){tt=!0,Ae="",d(),hi()}function zr(){tt=!1,Ae="",d()}function Qa(){const e=Xa(),t=Za(),r=rt.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${oe?"disabled":""}>${oe?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(r))} total row${r===1?"":"s"}</span>
        </div>

        ${Ae?`<div class="discord-data-error">${a(Ae)}</div>`:""}

        <div class="report-results-content">
          ${oe&&r===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!oe&&r===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${r>0?Vn("Eligible","Linked to Discord and eligible for promotion review.",e,"No linked eligible Associates found."):""}
          ${r>0?Vn("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",t,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${a(Ws())}</textarea>
      </div>
    </div>
  `}function Xa(){return rt.filter(e=>String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible")}function Za(){return rt.filter(e=>String(e.report_group||e.eligibility_group||"").toLowerCase()!=="eligible")}function Vn(e,t,r,n){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${a(e)}</h4>
          <p>${a(t)}</p>
        </div>
        <span>${a(String(r.length))} row${r.length===1?"":"s"}</span>
      </div>
      ${r.length>0?ec(r):`<div class="roster-history-muted report-section-empty">${a(n)}</div>`}
    </section>
  `}function ec(e=rt){return`
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
          ${e.map(t=>`
            <tr>
              <td>${a(t.account_name||"")}</td>
              <td>${hn(t.rank||"")}</td>
              <td>${a(fr(t.joined))}</td>
              <td>${a(pr(t.purchased_tickets||0))}</td>
              <td>${a(Hs(t))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Hs(e){return String(e.link_status||"").toLowerCase()==="linked"?e.discord_server_nickname||e.discord_display_name||e.discord_username||e.discord_user_id||"Linked":"Needs Link Review"}function Ws(){const e=[["Section","Account Name","Rank","Joined","Purchased Tickets","Discord Link"]];for(const t of rt){const r=String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";e.push([r,t.account_name||"",t.rank||"",fr(t.joined),pr(t.purchased_tickets||0),Hs(t)])}return e.map(t=>t.map(hr).join("	")).join(`
`)}async function tc(){const e=Ws();if(await mr(e)){h("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:m});return}const r=document.querySelector("#associateTicketReportTsv");r&&(r.focus(),r.select()),h("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function rc(){nt=!0,Ee="",d(),fi()}function jr(){nt=!1,Ee="",d()}function nc(){const e=_t.length;return`
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
          <button id="copyDiscordRankAuditReportGridButton" class="bank-export-copy-button" type="button" ${e===0?"disabled":""}>Copy Grid</button>
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${ae?"disabled":""}>${ae?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(e))} total row${e===1?"":"s"}</span>
        </div>

        ${Ee?`<div class="discord-data-error">${a(Ee)}</div>`:""}

        <div class="report-results-content">
          ${ae&&e===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!ae&&e===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${e>0?sc(_t):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${a(Ys())}</textarea>
      </div>
    </div>
  `}function sc(e=_t){return`
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
          ${e.map(t=>`
            <tr>
              <td>${a(zs(t))}</td>
              <td>${a(t.discord_rank||"No matching rank role")}</td>
              <td>${a(t.eso_accounts||"No linked ESO account")}</td>
              <td>${a(t.eso_rank||"None")}</td>
              <td>${a(js(t))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function zs(e){return e.server_nickname||e.global_name||e.username||e.discord_id||""}function js(e){const t=String(e.issue_type||"").toLowerCase();return t==="no_linked_eso_account"?"No linked ESO account":t==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":t==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":t==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":t||"Review needed"}function Ys(){const e=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const t of _t)e.push([zs(t),t.username||"",t.discord_rank||"No matching rank role",t.discord_rank_roles||"",t.eso_accounts||"No linked ESO account",t.eso_rank||"None",js(t)]);return e.map(t=>t.map(hr).join("	")).join(`
`)}async function ic(){const e=Ys();if(await mr(e)){h("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:m});return}const r=document.querySelector("#discordRankAuditReportTsv");r&&(r.focus(),r.select()),h("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function oc(){Te=!0,Re="",st="",d(),ui(),L.length===0&&!O&&Nt({silent:!0})}function sr(){Te=!1,Re="",st="",de="",Ue="",le="",d()}function ac(){const e=mn(),t=ln.length;return`
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
          <button id="copyDiscordLastSeenReportGridButton" class="bank-export-copy-button" type="button" ${t===0?"disabled":""}>Copy Grid</button>
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${ce?"disabled":""}>${ce?"Loading...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(t))} Discord member${t===1?"":"s"}</span>
        </div>

        <div class="discord-last-seen-filter-row">
          <input
            id="discordLastSeenReportSearchInput"
            class="member-links-report-search-input discord-last-seen-search-input"
            type="search"
            autocomplete="off"
            spellcheck="false"
            placeholder="Search Discord member, username, last seen action, or date..."
            value="${u(st)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${de===""?"selected":""}>All link statuses</option>
            <option value="linked" ${de==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${de==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${de==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${Re?`<div class="discord-data-error discord-last-seen-report-error">${a(Re)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${ce&&t===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!ce&&t===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${t>0?cc(e):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${a(Js(e))}</textarea>
      </div>
    </div>
  `}function cc(e=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${pt("name","Discord Member")}</th>
            <th>${pt("eso","Linked ESO Account")}</th>
            <th>${pt("date","Last Seen")}</th>
            <th>${pt("days","Days Since")}</th>
            <th>${pt("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${e.map(t=>`
            <tr class="discord-last-seen-row ${u(mc(t.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${u(xe(t).status)}" data-discord-last-seen-search="${u(Ks(t))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${hc(t)}
                  <span>${a(Je(t))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${lc(t)}</td>
              <td>${a(pn(t.last_seen))}</td>
              <td>${a(gn(t.last_seen))}</td>
              <td>${a(ir(t.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function pt(e,t){const r=Ue===e,n=r?le==="asc"?"\u25B2":"\u25BC":"\u2195",s=r?`${t}: ${le==="asc"?"ascending":"descending"}`:`${t}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${r?" active":""}" type="button" data-discord-last-seen-sort="${u(e)}" title="${u(s)}">
      <span>${a(t)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${a(n)}</span>
    </button>
  `}function mn(){const e=[...ln],t=Ue,r=le;if(!t||!r)return e;const n=r==="desc"?-1:1;return e.sort((s,i)=>{var o,c;if(t==="date"){const f=Number(s.last_seen||0)||0,y=Number(i.last_seen||0)||0;return(f-y)*n}if(t==="days")return(Hn(s.last_seen)-Hn(i.last_seen))*n;if(t==="action")return ir(s.last_seen_action).localeCompare(ir(i.last_seen_action),void 0,{sensitivity:"base"})*n;if(t==="eso"){const f=xe(s),y=xe(i),k={linked:0,candidate:1,unlinked:2},p=((o=k[f.status])!=null?o:9)-((c=k[y.status])!=null?c:9);return p!==0?p*n:f.esoAccountName.localeCompare(y.esoAccountName,void 0,{sensitivity:"base"})*n}return Je(s).localeCompare(Je(i),void 0,{sensitivity:"base"})*n})}function dc(e){Ue!==e?(Ue=e,le="asc"):le==="asc"?le="desc":(Ue="",le=""),d()}function Je(e){return(e==null?void 0:e.server_nickname)||(e==null?void 0:e.global_name)||(e==null?void 0:e.username)||(e==null?void 0:e.discord_id)||""}function Ks(e){return[Je(e),e==null?void 0:e.server_nickname,e==null?void 0:e.global_name,e==null?void 0:e.username,e==null?void 0:e.discord_id,e==null?void 0:e.last_seen_action,uc(e),pn(e==null?void 0:e.last_seen),gn(e==null?void 0:e.last_seen)].filter(Boolean).join(" ")}function xe(e){const t=Cc(e==null?void 0:e.discord_id),r=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),n=String((t==null?void 0:t.eso_account_name)||"").trim();return r==="linked"&&n?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:n,title:`Linked ESO account: ${n}`}:(r==="candidate"||String((t==null?void 0:t.link_method)||"").trim().toLowerCase()==="fuzzy")&&n?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:n,title:`Fuzzy ESO account candidate: ${n}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function lc(e){const t=xe(e);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${u(t.className)}"
      title="${u(t.title)}"
      aria-label="${u(t.label)}"
      role="img"
    ></span>
  `}function uc(e){const t=xe(e);return[t.status,t.label,t.esoAccountName].filter(Boolean).join(" ")}function fc(e){const t=String((e==null?void 0:e.avatar)||"").trim(),r=String((e==null?void 0:e.discord_id)||"").trim();if(!t||!r)return"";if(/^https?:\/\//i.test(t))return t;const n=t.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(t)}.${n}?size=64`}function hc(e){const t=Je(e),r=t?t.slice(0,2).toUpperCase():"?",n=fc(e);return n?`<span class="discord-member-avatar"><img src="${u(n)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${a(r)}</span>`}function pn(e){const t=Number(e);if(!t)return"Never";const r=new Date(t*1e3);if(Number.isNaN(r.getTime()))return String(e||"");const n=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(r).reduce((s,i)=>(s[i.type]=i.value,s),{});return`${n.month}/${n.day}/${n.year} ${n.hour}:${n.minute} ${n.dayPeriod}`}function mc(e){const t=Number(e);if(!t)return"discord-last-seen-unknown";const r=(Date.now()-t*1e3)/864e5;return r>30?"discord-last-seen-red":r>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function gn(e){const t=Number(e);if(!t)return"Never";const r=Date.now()-t*1e3;if(!Number.isFinite(r))return"";if(r<0)return"0 days";const n=Math.floor(r/864e5);return`${n} day${n===1?"":"s"}`}function Hn(e){const t=Number(e);if(!t)return Number.POSITIVE_INFINITY;const r=Date.now()-t*1e3;return Number.isFinite(r)?r<0?0:Math.floor(r/864e5):Number.POSITIVE_INFINITY}function ir(e){return String(e||"").trim()||"None tracked"}function Js(e=mn()){const t=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const r of e){const n=xe(r);t.push([Je(r),n.label||"",n.esoAccountName||"",pn(r==null?void 0:r.last_seen),gn(r==null?void 0:r.last_seen),ir(r==null?void 0:r.last_seen_action),(r==null?void 0:r.username)||"",(r==null?void 0:r.discord_id)||""])}return t.map(r=>r.map(hr).join("	")).join(`
`)}async function pc(){const e=mn().filter(s=>{const i=Q(st),o=String(de||"").trim().toLowerCase(),c=!i||Q(Ks(s)).includes(i),f=!o||xe(s).status===o;return c&&f}),t=Js(e);if(await mr(t)){h("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:m});return}const n=document.querySelector("#discordLastSeenReportTsv");n&&(n.focus(),n.select()),h("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function gc(){Ie=!0,P="",d(),L.length===0&&!O&&Nt({silent:!0})}function Yr(){Ie=!1,lr="",Ve="",Et="",Rt="",Z=-1,d()}function Qs(e){return[...new Set((Array.isArray(L)?L:[]).map(t=>String((t==null?void 0:t[e])||"").trim().toLowerCase()).filter(Boolean))].sort((t,r)=>t.localeCompare(r,void 0,{sensitivity:"base"}))}function Xs(e,t){return e.map(r=>`<option value="${u(r)}" ${t===r?"selected":""}>${a(r)}</option>`).join("")}function yc(){return Xs(Qs("link_status"),Et)}function bc(){return Xs(Qs("link_method"),Rt)}function vc(){return`
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
            value="${u(lr)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${Et===""?"selected":""}>All statuses</option>
            ${yc()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${Rt===""?"selected":""}>All methods</option>
            ${bc()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${Ve===""?"selected":""}>All actions</option>
            <option value="needs-link" ${Ve==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${Ve==="can-unlink"?"selected":""}>Unlink Available</option>
          </select>
        </div>

        ${P?`<div class="discord-data-error member-links-report-error">${a(P)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${_c()}
        </div>
      </div>
    </div>
  `}function Zs(){var r,n,s,i,o,c;if(!Ie)return;(r=document.querySelector("#closeMemberLinksReportButton"))==null||r.addEventListener("click",Yr),(n=document.querySelector("#refreshMemberLinksButton"))==null||n.addEventListener("click",()=>Nt()),(s=document.querySelector("#runMemberAutoLinkButton"))==null||s.addEventListener("click",()=>$c());const e=document.querySelector("#memberLinksReportSearchInput");e&&(e.addEventListener("input",Lc),e.addEventListener("keydown",Dc)),(i=document.querySelector("#memberLinksReportActionFilter"))==null||i.addEventListener("change",Ac),(o=document.querySelector("#memberLinksReportStatusFilter"))==null||o.addEventListener("change",Ec),(c=document.querySelector("#memberLinksReportMethodFilter"))==null||c.addEventListener("change",Rc),Ct(),document.querySelectorAll("[data-accept-member-candidate]").forEach(f=>{f.addEventListener("click",()=>ti(f.dataset.acceptMemberCandidate||"",f.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(f=>{f.addEventListener("click",()=>Mc(f.dataset.unlinkMemberLink||"",f.dataset.unlinkMemberLinkDiscordId||""))});const t=document.querySelector(".member-links-report-overlay");t&&t.addEventListener("click",f=>{f.target===t&&Yr()})}function Wn(e){const t=String((e==null?void 0:e.link_status)||"").trim().toLowerCase();return t==="candidate"?0:t==="linked"?2:1}function zn(e){return[e==null?void 0:e.eso_account_name,e==null?void 0:e.discord_server_nickname,e==null?void 0:e.discord_display_name,e==null?void 0:e.discord_username,e==null?void 0:e.discord_user_id].filter(Boolean).join(" ")}function kc(e){return[e==null?void 0:e.eso_account_name,e==null?void 0:e.discord_username,e==null?void 0:e.discord_display_name,e==null?void 0:e.discord_server_nickname,e==null?void 0:e.discord_user_id].filter(Boolean).join(" ")}function Sc(e){return[...Array.isArray(e)?e:[]].sort((t,r)=>{const n=Wn(t)-Wn(r);if(n!==0)return n;const s=zn(t).localeCompare(zn(r),void 0,{sensitivity:"base"});return s!==0?s:String((t==null?void 0:t.discord_user_id)||"").localeCompare(String((r==null?void 0:r.discord_user_id)||""),void 0,{sensitivity:"base"})})}function wc(e){const t=Kr(e);let r="";t==="Username"?r=(e==null?void 0:e.discord_username)||"":t==="Global Name"?r=(e==null?void 0:e.discord_display_name)||"":t==="Server Nickname"&&(r=(e==null?void 0:e.discord_server_nickname)||""),r||(r=(e==null?void 0:e.discord_server_nickname)||(e==null?void 0:e.discord_display_name)||(e==null?void 0:e.discord_username)||(e==null?void 0:e.discord_user_id)||"");const n=t?` <span class="member-link-report-match-field">(${a(t)})</span>`:"";return`<span class="member-link-report-discord-name">${a(r)}</span>${n}`}function _c(){return O&&L.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(L)||L.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${Sc(L).map(t=>{var i;const r=String(t.link_status||"").trim().toLowerCase(),n=String(t.link_method||"").trim().toLowerCase(),s=wc(t);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${u(kc(t))}"
                data-member-links-report-status="${u(r)}"
                data-member-links-report-method="${u(n)}"
                data-member-links-report-action="${u(r==="linked"?"can-unlink":r==="candidate"?"needs-link":"")}"
              >
                <td>${a(t.eso_account_name||"")}</td>
                <td>${s}</td>
                <td class="member-links-status-col">${a(r||"")}</td>
                <td class="member-links-method-col">${a(n||"")}${Number(t.locked||0)===1?" \u{1F512}":""}</td>
                <td class="member-links-action-col">
                  <div class="member-link-actions">
                    ${r==="candidate"?`<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${u(t.eso_account_name||"")}" data-accept-member-candidate-discord-id="${u(t.discord_user_id||"")}" aria-label="Accept candidate link" title="Accept candidate link">\u2713</button>`:""}
                    ${r==="linked"?`<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${u(t.eso_account_name||"")}" data-unlink-member-link-discord-id="${u(t.discord_user_id||"")}" aria-label="Unlink this ESO/Discord pair" title="Unlink this ESO/Discord pair">\u{1F5D1}</button>`:""}
                  </div>
                </td>
                <td class="member-links-confidence-col">${a(String((i=t.match_confidence)!=null?i:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function ei(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(e=>e.offsetParent!==null)}function jn(e){const t=ei();if(t.forEach(n=>n.classList.remove("member-links-report-row-active")),t.length===0){Z=-1;return}Z=Math.max(0,Math.min(e,t.length-1));const r=t[Z];r.classList.add("member-links-report-row-active"),r.scrollIntoView({block:"nearest"})}function Ct(){const e=Q(lr),t=String(Ve||"").trim().toLowerCase(),r=String(Et||"").trim().toLowerCase(),n=String(Rt||"").trim().toLowerCase(),s=[...document.querySelectorAll("[data-member-links-report-row]")];let i=0;s.forEach(c=>{const f=Q(c.dataset.memberLinksReportSearch||""),y=String(c.dataset.memberLinksReportAction||"").trim().toLowerCase(),k=String(c.dataset.memberLinksReportStatus||"").trim().toLowerCase(),p=String(c.dataset.memberLinksReportMethod||"").trim().toLowerCase(),Mn=(!e||f.includes(e))&&(!t||y===t)&&(!r||k===r)&&(!n||p===n);c.hidden=!Mn,c.classList.remove("member-links-report-row-active"),Mn&&(i+=1)});const o=document.querySelector("#memberLinksReportSearchEmpty");o&&(o.hidden=i!==0),Z=-1}function Lc(e){lr=e.target.value||"",Ct()}function Ac(e){Ve=e.target.value||"",Ct()}function Ec(e){Et=e.target.value||"",Ct()}function Rc(e){Rt=e.target.value||"",Ct()}function Dc(e){if(e.key==="Enter"){e.preventDefault();return}if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;e.preventDefault();const t=ei();if(t.length===0)return;if(e.key==="ArrowDown"){const n=Z<0?0:Z+1;jn(n>=t.length?t.length-1:n);return}const r=Z<0?t.length-1:Z-1;jn(r<0?0:r)}async function Nt(e={}){if(!(l!=null&&l.connected)){P="You must be connected to load member links.",d();return}O=!0,P="",e.silent||d();try{const t=await A("guildsync:request-member-links",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load member links.");L=Array.isArray(t.links)?t.links:[]}catch(t){P=w(t)}finally{O=!1,d()}}async function $c(){if(!(l!=null&&l.connected)||!v.logged_in){P="You must be logged in and connected to run auto-linking.",d();return}O=!0,P="",d();try{const e=await A("guildsync:run-member-auto-linking",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to run auto-linking.");L=Array.isArray(e.links)?e.links:[],h("member-auto-link",e.message||"Member auto-linking complete.",{ttlMs:m})}catch(e){P=w(e)}finally{O=!1,d()}}async function ti(e,t=""){try{const r=await A("guildsync:accept-member-link-candidate",{esoAccountName:e,discordUserId:t},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to accept candidate.");L=Array.isArray(r.links)?r.links:L,h("member-link-accepted",r.message||"Candidate accepted as a link.",{ttlMs:m})}catch(r){P=w(r),h("member-link-accept-error",P,{ttlMs:m})}}async function Mc(e,t=""){if(!!await Ts({title:"Unlink Member?",message:`Remove the link between ${e} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const n=await A("guildsync:manual-unlink-member",{esoAccountName:e,discordUserId:t},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to unlink member.");L=Array.isArray(n.links)?n.links:L,h("member-link-unlinked",n.message||"Member link removed.",{ttlMs:m})}catch(n){P=w(n)}d()}}function se(e){return String(e||"").trim().replace(/^@+/,"").toLowerCase()}function ur(e){const t=se(e);return t?L.filter(r=>se(r.eso_account_name)===t):[]}function at(e){const t=String(e||"").trim();return t?L.filter(r=>String(r.discord_user_id||"").trim()===t):[]}function yn(e=[]){const t=Array.isArray(e)?e.filter(Boolean):[];if(t.length===0)return null;const r=t.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked");if(r.length>0){const s=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(s)return s;const i=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return i||r[0]}const n=t.find(s=>String(s.link_status||"").trim().toLowerCase()==="candidate");return n||t[0]}function Cc(e){return yn(at(e))}function Nc(e){return`${se(e==null?void 0:e.eso_account_name)}::${String((e==null?void 0:e.discord_user_id)||"").trim()}`}function bn(){return S?S.mode==="discord-to-eso"?at(S.discordUserId):ur(S.esoAccountName):[]}function Tc(e){const t=String(e||"").trim(),r=B.find(n=>String(n.discord_id||"").trim()===t);return r&&(r.server_nickname||r.global_name||r.username||r.discord_id)||t}function vn(e){const t=(e==null?void 0:e.mode)||"",r=t==="discord-to-eso"?at(e.discordUserId):ur(e.esoAccountName),n=yn(r),s=String((n==null?void 0:n.link_status)||"").trim().toLowerCase(),i=r.filter(c=>String(c.link_status||"").trim().toLowerCase()==="linked").length,o=r.filter(c=>String(c.link_status||"").trim().toLowerCase()==="candidate").length;return i>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${t==="discord-to-eso"?i===1?n.eso_account_name:`${i} ESO accounts`:i===1?n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member":`${i} Discord accounts`}`}:s==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${t==="discord-to-eso"?n.eso_account_name:n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member"}`}:s==="blocked"||Number((n==null?void 0:n.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function ri(e){const t=(e==null?void 0:e.mode)||"",r=t==="discord-to-eso"?e.discordUserId:e.esoAccountName,n=vn(e);return`
    <button
      class="member-link-status-dot member-link-status-${u(n.className)}"
      type="button"
      title="${u(n.title)}"
      aria-label="${u(n.label)}"
      data-open-member-link-dialog="${u(t)}"
      data-member-link-value="${u(r||"")}"
    ></button>
  `}function Bc(){return S?S.mode==="discord-to-eso"?Tc(S.discordUserId):S.esoAccountName||"":""}function ni(e){const t=String(e||"").trim().toLowerCase();return t==="discord_username"||t==="username"?"Username":t==="discord_display_name"||t==="global_name"||t==="display_name"?"Global Name":t==="discord_server_nickname"||t==="server_nickname"||t==="nickname"?"Server Nickname":""}function Kr(e){const t=ni((e==null?void 0:e.match_field)||(e==null?void 0:e.matched_field)||(e==null?void 0:e.discord_match_field));if(t)return t;const r=String((e==null?void 0:e.match_reason)||"").toLowerCase();if(r.includes("discord_username")||r.includes("username"))return"Username";if(r.includes("discord_display_name")||r.includes("global")||r.includes("display"))return"Global Name";if(r.includes("discord_server_nickname")||r.includes("server")||r.includes("nickname"))return"Server Nickname";const n=String((e==null?void 0:e.link_method)||"").trim().toLowerCase();if(n==="exact"||n==="fuzzy"){const s=(e==null?void 0:e.eso_account_name)||"",i=[{field:"Username",value:e==null?void 0:e.discord_username},{field:"Global Name",value:e==null?void 0:e.discord_display_name},{field:"Server Nickname",value:e==null?void 0:e.discord_server_nickname}];let o=null;for(const c of i){const f=xc(s,c.value);(!o||f>o.score)&&(o={...c,score:f})}if(o&&o.score>0)return o.field}return""}function Q(e){return String(e||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function xc(e,t){const r=Q(e),n=Q(t);if(!r||!n)return 0;if(r===n)return 100;if((r.includes(n)||n.includes(r))&&Math.min(r.length,n.length)>=4)return 88;const s=Math.abs(r.length-n.length),i=[...r].findIndex((c,f)=>c!==n[f]),o=i===-1?Math.min(r.length,n.length):i;return Math.max(0,Math.min(75,Math.round(o*10-s*3)))}function Oc(e){const t=String(e||"").trim().toLowerCase();return t==="blocked"||t==="unlinked"?"unlinked":t||"unlinked"}function Ic(e){const t=String(e||"").trim().toLowerCase();return t==="manual_unlink"?"auto-link disabled":t||"none"}function qc(e){const t=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),r=Oc(e==null?void 0:e.link_status);return`<span class="${t==="linked"?"member-link-status-word member-link-status-word-linked":t==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${a(r)}</span>`}function Fc(e){var c;const t=e.discord_server_nickname||e.discord_display_name||e.discord_username||e.discord_user_id||"",r=Number(e.locked||0)===1?"Auto-link blocked":"Auto-managed",n=String(e.link_status||"").trim().toLowerCase(),o=n==="linked"?`<button
        class="member-link-trash-button"
        type="button"
        aria-label="Unlink this ESO/Discord pair"
        title="Unlink this ESO/Discord pair"
        data-unlink-dialog-member-link
        data-unlink-eso-account="${u(e.eso_account_name||"")}"
        data-unlink-discord-user-id="${u(e.discord_user_id||"")}"
      >\u{1F5D1}</button>`:n==="candidate"?`<button
          class="member-link-approve-button"
          type="button"
          aria-label="Approve suggested link"
          title="Approve suggested link"
          data-accept-dialog-member-candidate="${u(e.eso_account_name||"")}"
          data-accept-dialog-discord-user-id="${u(e.discord_user_id||"")}"
        >\u2713</button>`:"";return`
    <div class="member-link-current-card">
      <div class="member-link-current-details">
        <div><span>ESO:</span> ${a(e.eso_account_name||"")}</div>
        <div><span>Discord:</span> ${a(t)}</div>
        <div><span>Status:</span> ${qc(e)} \xB7 ${a(Ic(e.link_method))} \xB7 ${a(String((c=e.match_confidence)!=null?c:""))}% \xB7 ${a(r)}</div>
        ${Kr(e)?`<div><span>Matched:</span> Matched on ${a(Kr(e))}</div>`:""}
      </div>
      ${o}
    </div>
  `}function Gc(){const e=bn();return e.length?[...e].sort((r,n)=>{var f,y;const s=String(r.link_status||"").trim().toLowerCase(),i=String(n.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},c=((f=o[s])!=null?f:9)-((y=o[i])!=null?y:9);return c!==0?c:Number(n.match_confidence||0)-Number(r.match_confidence||0)}).map(r=>Fc(r)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function Pc(){if(Ke)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(ne)return`<div class="discord-data-error">${a(ne)}</div>`;if(!Array.isArray(De)||De.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const e=new Set(bn().map(r=>Nc(r))),t=[...De].filter(r=>{const n=(S==null?void 0:S.mode)==="discord-to-eso"?`${se(r.account_name)}::${String(S.discordUserId||"").trim()}`:`${se(S==null?void 0:S.esoAccountName)}::${String(r.discord_id||"").trim()}`;return!e.has(n)}).sort((r,n)=>{const s=Number(n.confidence||0)-Number(r.confidence||0);return s!==0?s:Yn(r).localeCompare(Yn(n),void 0,{sensitivity:"base"})});return t.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${t.map(r=>Uc(r)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function Yn(e){return((S==null?void 0:S.mode)||"")==="discord-to-eso"?String(e.account_name||""):String(e.server_nickname||e.global_name||e.username||e.discord_id||"")}function Uc(e,t={}){var p,g,x;const r=(S==null?void 0:S.mode)||"",n=r==="discord-to-eso"?e.account_name:e.server_nickname||e.global_name||e.username||e.discord_id||"Discord member",s=ni(e.matchField||e.match_field||e.discordMatchField||e.discord_match_field),i=r==="discord-to-eso"?`Rank: ${e.rank||""}`:[e.username,e.global_name,e.server_nickname].filter(Boolean).join(" \xB7 "),o=[i,s?`Matched on ${s}`:""].filter(Boolean).join(" \u2022 "),c=r==="discord-to-eso"?e.account_name:e.discord_id,f=t.disabled===!0,y=[n,i,o,e.account_name,e.username,e.global_name,e.server_nickname,e.discord_id].filter(Boolean).join(" "),k=[n,o,`${(p=e.confidence)!=null?p:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${u(c||"")}" data-member-link-option-search="${u(y)}" title="${u(k)}" ${f?"disabled":""}>
      <span class="member-link-option-name" title="${u(n||"")}">${a(n||"")}</span>
      <span class="member-link-option-subtitle" title="${u(o||"")}">${a(o||"")}</span>
      <span class="member-link-option-confidence" title="${u(String((g=e.confidence)!=null?g:0))}%">${a(String((x=e.confidence)!=null?x:0))}%</span>
    </button>
  `}function Vc(){const e=(S==null?void 0:S.mode)||"",t=Bc(),r=e==="discord-to-eso"?"ESO Account":"Discord Member";return`
    <div class="roster-history-overlay member-link-dialog-overlay" role="dialog" aria-modal="true" aria-labelledby="memberLinkDialogTitle">
      <div class="roster-history-dialog member-link-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="memberLinkDialogTitle">Member Link</h3>
            <p>${a(t)} \u2192 choose ${a(r)}.</p>
          </div>
          <button id="closeMemberLinkDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close member link window" title="Close">\xD7</button>
        </div>

        <div class="member-link-dialog-body">
          <section class="member-link-dialog-section member-link-current-section">
            ${Gc()}
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
              value="${u(Dt)}"
            />
            ${Pc()}
          </section>
        </div>

      </div>
    </div>
  `}async function si(e,t){if(!(l!=null&&l.connected)||!R()){h("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:m});return}ke=!0,S=e==="discord-to-eso"?{mode:e,discordUserId:t}:{mode:"eso-to-discord",esoAccountName:t},De=[],Ke=!0,ne="",Dt="",j=-1,d();try{if(!Array.isArray(L)||L.length===0){const s=await A("guildsync:request-member-links",{},3e4);s!=null&&s.ok&&(L=Array.isArray(s.links)?s.links:[])}const n=await A("guildsync:request-member-link-options",e==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:t}:{mode:"eso-to-discord",accountName:t},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load link suggestions.");De=Array.isArray(n.options)?n.options:[]}catch(r){ne=w(r)}finally{Ke=!1,d()}}function Qe(){document.removeEventListener("keydown",Jr),ke=!1,S=null,De=[],Ke=!1,ne="",Dt="",j=-1,d()}function ii(){return[...document.querySelectorAll(".member-link-option-row")].filter(e=>e.offsetParent!==null&&!e.disabled)}function Kn(e){const t=ii();if(t.forEach(n=>n.classList.remove("member-link-option-row-active")),t.length===0){j=-1;return}j=Math.max(0,Math.min(e,t.length-1));const r=t[j];r.classList.add("member-link-option-row-active"),r.scrollIntoView({block:"nearest"})}function oi(){const e=Q(Dt),t=[...document.querySelectorAll(".member-link-option-row")];let r=0;t.forEach(s=>{const i=Q(s.dataset.memberLinkOptionSearch||s.textContent||""),o=!e||i.includes(e);s.hidden=!o,s.classList.remove("member-link-option-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinkSuggestionSearchEmpty");n&&(n.hidden=r!==0),j=-1}function Hc(e){Dt=e.target.value||"",oi()}function Wc(e){if(e.key==="Enter"){e.preventDefault();return}if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;e.preventDefault();const t=ii();if(t.length===0)return;if(e.key==="ArrowDown"){const n=j<0?0:j+1;Kn(n>=t.length?t.length-1:n);return}const r=j<0?t.length-1:j-1;Kn(r<0?0:r)}function Jr(e){!ke||e.key==="Escape"&&(e.preventDefault(),Qe())}async function zc(e){if(!(!S||!e))try{const t=S.mode==="discord-to-eso"?{esoAccountName:e,discordUserId:S.discordUserId}:{esoAccountName:S.esoAccountName,discordUserId:e},r=await A("guildsync:manual-link-member",t,3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to link members.");L=Array.isArray(r.links)?r.links:L,h("member-link-saved",r.message||"Member link saved.",{ttlMs:m}),Qe()}catch(t){ne=w(t),d()}}async function jc(e,t=""){await ti(e,t),Qe()}async function Yc(){if(!!S){Ke=!0,ne="",d();try{const e=S.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:S.discordUserId}:{mode:"eso-to-discord",accountName:S.esoAccountName},t=await A("guildsync:request-member-link-options",e,3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load link suggestions.");De=Array.isArray(t.options)?t.options:[]}catch(e){ne=w(e)}finally{Ke=!1,d()}}}async function Kc(e="",t=""){const r=bn().find(s=>se(s.eso_account_name)===se(e)&&String(s.discord_user_id||"").trim()===String(t||"").trim());if(!(!r||!await Ts({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const s=await A("guildsync:manual-unlink-member",{esoAccountName:r.eso_account_name,discordUserId:r.discord_user_id},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to unlink member.");L=Array.isArray(s.links)?s.links:L,h("member-link-unlinked",s.message||"Member link removed.",{ttlMs:m}),await Yc()}catch(s){ne=w(s),d()}}function ai(){var r;if(!ke)return;document.removeEventListener("keydown",Jr),document.addEventListener("keydown",Jr),(r=document.querySelector("#closeMemberLinkDialogButton"))==null||r.addEventListener("click",Qe);const e=document.querySelector("#memberLinkSuggestionSearchInput");e&&(e.addEventListener("input",Hc),e.addEventListener("keydown",Wc),oi()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(n=>{n.addEventListener("click",()=>Kc(n.dataset.unlinkEsoAccount||"",n.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(n=>{n.addEventListener("click",()=>zc(n.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(n=>{n.addEventListener("click",()=>jc(n.dataset.acceptDialogMemberCandidate||"",n.dataset.acceptDialogDiscordUserId||""))});const t=document.querySelector(".member-link-dialog-overlay");t&&t.addEventListener("click",n=>{n.target===t&&Qe()})}function ci(){var t,r,n;if(!tt)return;(t=document.querySelector("#closeAssociateTicketReportButton"))==null||t.addEventListener("click",zr),(r=document.querySelector("#rerunAssociateTicketReportButton"))==null||r.addEventListener("click",()=>hi()),(n=document.querySelector("#copyAssociateTicketReportGridButton"))==null||n.addEventListener("click",()=>tc());const e=document.querySelector(".report-results-overlay");e&&e.addEventListener("click",s=>{s.target===e&&zr()})}function di(){var t,r,n;if(!nt)return;(t=document.querySelector("#closeDiscordRankAuditReportButton"))==null||t.addEventListener("click",jr),(r=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||r.addEventListener("click",()=>fi()),(n=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||n.addEventListener("click",()=>ic());const e=document.querySelector(".report-results-overlay");e&&e.addEventListener("click",s=>{s.target===e&&jr()})}function li(){var n,s,i;if(!Te)return;(n=document.querySelector("#closeDiscordLastSeenReportButton"))==null||n.addEventListener("click",sr),(s=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||s.addEventListener("click",()=>ui()),(i=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||i.addEventListener("click",()=>pc()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(o=>{o.addEventListener("click",()=>dc(o.dataset.discordLastSeenSort||""))});const e=document.querySelector("#discordLastSeenReportSearchInput");e&&e.addEventListener("input",Jc);const t=document.querySelector("#discordLastSeenLinkStatusFilter");t&&t.addEventListener("change",Qc),kn();const r=document.querySelector(".discord-last-seen-report-overlay");r&&r.addEventListener("click",o=>{o.target===r&&sr()})}function Jc(e){st=e.target.value||"",kn()}function Qc(e){de=e.target.value||"",kn()}function kn(){const e=Q(st),t=String(de||"").trim().toLowerCase(),r=[...document.querySelectorAll("[data-discord-last-seen-row]")];let n=0;r.forEach(i=>{const o=Q(i.dataset.discordLastSeenSearch||i.textContent||""),c=String(i.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),k=(!e||o.includes(e))&&(!t||c===t);i.hidden=!k,k&&(n+=1)});const s=document.querySelector("#discordLastSeenReportSearchEmpty");s&&(s.hidden=n!==0)}async function ui(){if(!(l!=null&&l.connected)||!R()){Re="You must be logged in and connected to run this report.",d();return}ce=!0,Re="",d();try{const e=await A("guildsync:request-discord-member-dataJSON",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load Discord roster data.");B=Rn(e.members),ln=[...B]}catch(e){Re=w(e)}finally{ce=!1,d(),N("discordLastSeenReportSearchInput")}}async function fi(){if(!(l!=null&&l.connected)||!R()){Ee="You must be logged in and connected to run this report.",d();return}ae=!0,Ee="",d();try{const e=await A("guildsync:request-discord-rank-audit-report",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to run report.");_t=Array.isArray(e.rows)?e.rows:[]}catch(e){Ee=w(e)}finally{ae=!1,d()}}async function hi(){if(!(l!=null&&l.connected)||!R()){Ae="You must be logged in and connected to run this report.",d();return}oe=!0,Ae="",d();try{const e=await A("guildsync:request-associate-ticket-report",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to run report.");rt=Array.isArray(e.rows)?e.rows:[]}catch(e){Ae=w(e)}finally{oe=!1,d()}}function Qr(){const e=String(ot||"").trim().toLowerCase(),t={account_name:"Anonymous",rank:"Manual Entry"},r=new Set(["anonymous"]),n=G.filter(s=>String(s.account_name||"").trim()).filter(s=>{const o=String(s.account_name||"").trim().toLowerCase();return!o||r.has(o)||e&&!o.includes(e)?!1:(r.add(o),!0)}).slice().sort((s,i)=>{const o=String(s.account_name||"").toLowerCase(),c=String(i.account_name||"").toLowerCase(),f=e&&o.startsWith(e)?0:1,y=e&&c.startsWith(e)?0:1;return f!==y?f-y:o.localeCompare(c)}).slice(0,19);return[t,...n]}function Jn(e){const t=String(e||"").trim();_.accountName=t,ot=t,W="",d(),N("manualTicketAccountSearchInput")}function N(e){window.setTimeout(()=>{const t=document.querySelector(`#${e}`);if(!t)return;t.focus();const r=String(t.value||"").length;typeof t.setSelectionRange=="function"&&t.setSelectionRange(r,r)},0)}function Xc(){const e=Qr(),t=String(_.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Tickets</h3>
            <p>Add free/manual raffle tickets such as FFTG. These do not count as purchased tickets.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${W?`<div class="discord-data-error">${a(W)}</div>`:""}

        <div class="manual-ticket-form">
          <div class="manual-ticket-member-picker">
            <label class="manual-ticket-member-field" for="manualTicketAccountSearchInput">
              <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(ot)}" autocomplete="off" />
            </label>

            <div class="roster-history-match-list manual-ticket-match-list" role="listbox" aria-label="Matching guild members">
              ${e.length===0?'<div class="roster-history-muted">No matching guild members found.</div>':e.map((r,n)=>`
                  <button class="roster-history-match${n===z||r.account_name===t?" is-selected":""}" type="button" data-manual-ticket-account="${u(r.account_name)}" role="option" aria-selected="${n===z||r.account_name===t?"true":"false"}">
                    <span>${a(r.account_name)}</span>
                    <strong>${a(r.rank||"")}</strong>
                    ${n===z?"<small>Enter</small>":""}
                  </button>
                `).join("")}
            </div>
          </div>

          ${t?`<div class="roster-history-muted manual-ticket-selected-member">Selected: ${a(t)}</div>`:""}

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
                  <input id="manualTicketCountInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${u(_.tickets)}" />
                  <div class="manual-ticket-number-buttons" aria-hidden="true">
                    <button id="manualTicketCountUpButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2303</button>
                    <button id="manualTicketCountDownButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2304</button>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div class="manual-ticket-actions">
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${tr?"disabled":""}>${tr?"Saving...":"Add Manual Tickets"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function mi(){var i,o,c,f,y,k;if(!re)return;(i=document.querySelector("#closeManualBiweeklyTicketButton"))==null||i.addEventListener("click",()=>{re=!1,d()});const e=document.querySelector("#manualTicketAccountSearchInput");e&&(e.addEventListener("input",p=>{ot=p.target.value||"",_.accountName="",z=Qr().length>0?0:-1,d(),N("manualTicketAccountSearchInput")}),e.addEventListener("keydown",p=>{const g=Qr();if(p.key==="ArrowDown"||p.key==="ArrowUp"){if(g.length===0)return;p.preventDefault();const lt=p.key==="ArrowDown"?1:-1;z=((z<0?0:z)+lt+g.length)%g.length,d(),N("manualTicketAccountSearchInput");return}if(p.key!=="Enter")return;p.preventDefault();const x=g[z>=0?z:0];x!=null&&x.account_name&&Jn(x.account_name)})),document.querySelectorAll("[data-manual-ticket-account]").forEach(p=>{p.addEventListener("click",()=>{Jn(p.dataset.manualTicketAccount||"")})}),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",p=>{_.note=p.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(p=>{p.addEventListener("click",()=>{const g=String(p.dataset.manualTicketType||"").trim().toLowerCase();_.ticketType=g==="monthly"?"monthly":"biweekly",d()})}),(c=document.querySelector("[data-manual-ticket-toggle]"))==null||c.addEventListener("click",()=>{_.ticketType=_.ticketType==="monthly"?"biweekly":"monthly",d()});const t=document.querySelector("#manualTicketGoldInput");t==null||t.addEventListener("input",p=>{const g=String(p.target.value||"").replace(/\D/g,"");p.target.value!==g&&(p.target.value=g),_.goldValue=g});const r=document.querySelector("#manualTicketCountInput");r==null||r.addEventListener("input",p=>{const g=String(p.target.value||"").replace(/\D/g,"");p.target.value!==g&&(p.target.value=g),_.tickets=g});const n=p=>{const g=Number(_.tickets)||0,x=Math.max(0,g+p);_.tickets=String(x),r&&(r.value=_.tickets,r.focus())};(f=document.querySelector("#manualTicketCountUpButton"))==null||f.addEventListener("click",()=>n(1)),(y=document.querySelector("#manualTicketCountDownButton"))==null||y.addEventListener("click",()=>n(-1)),(k=document.querySelector("#saveManualBiweeklyTicketButton"))==null||k.addEventListener("click",()=>Zc());const s=document.querySelector(".roster-history-overlay");s&&s.addEventListener("click",p=>{p.target===s&&(re=!1,d())})}async function Zc(){const e=String(_.accountName||"").trim(),t=String(_.note||"").trim(),r=String(_.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",n=Number(String(_.goldValue||"").trim()||0),s=Number(String(_.tickets||"").trim()||0);if(!e){W="Choose a guild member.",d();return}if(!Number.isFinite(n)||n<0){W="Gold value must be zero or greater.",d();return}if(!Number.isFinite(s)||s<0){W="Tickets must be zero or greater.",d();return}if(Math.floor(n)===0&&Math.floor(s)===0){W="Enter gold or tickets. Both cannot be zero.",d();return}tr=!0,W="",d();try{const i=await A("guildsync:add-manual-biweekly-ticket-entry",{account_name:e,note:t,ticket_type:r,gold_value:Math.floor(n),tickets:Math.floor(s)},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to add manual ticket entry.");re=!1,_={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},ot="",z=-1,await Tt({silent:!0}),h("manual-ticket-added",i.message||"Manual ticket entry added.",{ttlMs:m})}catch(i){W=w(i)}finally{tr=!1,d()}}function pi(){const e=document.querySelector("#refreshRosterDataButton");e&&e.addEventListener("click",()=>ct());const t=document.querySelector("#openRosterHistoryButton");t&&t.addEventListener("click",()=>{ze=!0,ee="",d()});const r=document.querySelector("#rosterMemberSearch");r&&(r.addEventListener("input",o=>{er=o.target.value||"",Pr=o.target.selectionStart,Ur=o.target.selectionEnd,$=-1,d({restoreRosterSearchFocus:!0})}),r.addEventListener("keydown",ed)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Na(o.dataset.rosterSortColumn||"account_name")})});const n=document.querySelector("#rosterRankFilter");n&&n.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(Le.add(c),$=-1,d())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRosterRankFilter||"";Le.delete(c),$=-1,d()})});const s=document.querySelector("#rosterLinkStatusFilter");s&&s.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(Pe.add(c),$=-1,d())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRosterLinkStatusFilter||"";Pe.delete(c),$=-1,d()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>si(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const i=document.querySelector("#clearRosterFiltersButton");i&&i.addEventListener("click",()=>{er="",Le.clear(),Pe.clear(),X="",T="",$=-1,d()}),td()}function ed(e){if(e.key!=="ArrowDown"&&e.key!=="ArrowUp"&&e.key!=="Enter")return;if(e.key==="Enter"){e.preventDefault();return}const t=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(t.length===0){$=-1;return}e.preventDefault(),e.key==="ArrowDown"?$=$<0?0:Math.min($+1,t.length-1):e.key==="ArrowUp"&&($=$<0?t.length-1:Math.max($-1,0)),t.forEach((n,s)=>{n.classList.toggle("roster-search-active-row",s===$)});const r=t[$];r&&typeof r.scrollIntoView=="function"&&r.scrollIntoView({block:"nearest",inline:"nearest"})}function td(){const e=document.querySelector("#closeRosterHistoryButton");e&&e.addEventListener("click",()=>{ze=!1,d()});const t=document.querySelector("#rosterHistorySearchInput");t&&(t.addEventListener("input",r=>{if(wt=r.target.value||"",V=-1,!wt.trim()){clearTimeout($r),ee="",q=[],ve="",fe=[],he=!1,d(),N("rosterHistorySearchInput");return}clearTimeout($r),$r=setTimeout(()=>{id({auto:!0,keepFocus:!0})},250)}),t.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(q.length===0)return;r.preventDefault();const s=r.key==="ArrowDown"?1:-1;V=((V<0?0:V)+s+q.length)%q.length,d(),N("rosterHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=q[V>=0?V:0];n!=null&&n.account_name&&Xn(n.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(r=>{r.addEventListener("click",()=>{Xn(r.dataset.rosterHistoryAccount||"")})})}function gi(){const e=document.querySelector("#closeDiscordHistoryButton");e&&e.addEventListener("click",()=>{je=!1,d()});const t=document.querySelector("#discordHistorySearchInput");t&&(t.addEventListener("input",r=>{ie=r.target.value||"",H=-1,Se+=1;const n=Se;if(clearTimeout(Fn),!ie.trim()){te="",F=[],Ye="",Ne="",me=[],pe=!1,d(),N("discordHistorySearchInput");return}Fn=setTimeout(()=>{rd({auto:!0,keepFocus:!0,generation:n})},ia)}),t.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(F.length===0)return;r.preventDefault();const s=r.key==="ArrowDown"?1:-1;H=((H<0?0:H)+s+F.length)%F.length,d(),N("discordHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=F[H>=0?H:0];n!=null&&n.discord_id&&Qn(n.discord_id,Wr(n))})),document.querySelectorAll("[data-discord-history-id]").forEach(r=>{r.addEventListener("click",()=>{Qn(r.dataset.discordHistoryId||"",r.dataset.discordHistoryName||"")})})}async function rd(e={}){const t=Number.isInteger(e.generation)?e.generation:++Se,r=ie.trim();if(t===Se){if(!r){te="",F=[],H=-1,Ye="",Ne="",me=[],pe=!1,d(),e.keepFocus&&N("discordHistorySearchInput");return}pe=!0,te="",F=[],H=-1,Ye="",Ne="",me=[],d(),e.keepFocus&&N("discordHistorySearchInput");try{const n=await A("guildsync:request-discord-member-history",{query:r},3e4);if(t!==Se||r!==ie.trim())return;if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search Discord member history.");F=nd(n.matches),H=F.length>0?0:-1}catch(n){if(t!==Se||r!==ie.trim())return;te=w(n)}finally{if(t!==Se||r!==ie.trim())return;pe=!1,d(),e.keepFocus&&N("discordHistorySearchInput")}}}async function Qn(e,t="",r={}){const n=String(e||"").trim();if(!!n){Ye=n,Ne=String(t||n).trim(),ie=Ne,me=[],pe=!0,te="",d();try{const s=await A("guildsync:request-discord-member-history-events",{discord_id:n},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to load Discord member history.");me=sd(s.events)}catch(s){te=w(s)}finally{pe=!1,r.keepLoading||d()}}}function nd(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>({discord_id:String(t.discord_id||t.discordID||"").trim(),username:String(t.username||"").trim(),global_name:String(t.global_name||t.globalName||"").trim(),server_nickname:String(t.server_nickname||t.serverNickname||"").trim(),event_count:Number(t.event_count||t.eventCount||0)})).filter(t=>t.discord_id):[]}function sd(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>{var r,n,s,i,o,c,f,y,k;return{event_type:String(t.event_type||t.eventType||"").trim(),field_name:String(t.field_name||t.fieldName||"").trim(),old_value:String((n=(r=t.old_value)!=null?r:t.oldValue)!=null?n:"").trim(),new_value:String((i=(s=t.new_value)!=null?s:t.newValue)!=null?i:"").trim(),event_timestamp:(f=(c=(o=t.event_timestamp)!=null?o:t.eventTimestamp)!=null?c:t.timestamp)!=null?f:"",event_datetime:(k=(y=t.event_datetime)!=null?y:t.eventDatetime)!=null?k:"",source:String(t.source||"").trim()}}):[]}async function id(e={}){const t=wt.trim();if(!t){ee="",q=[],V=-1,ve="",fe=[],he=!1,d(),e.keepFocus&&N("rosterHistorySearchInput");return}he=!0,ee="",q=[],V=-1,ve="",fe=[],d(),e.keepFocus&&N("rosterHistorySearchInput");try{const r=await A("guildsync:request-roster-rank-history",{query:t},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search roster rank history.");q=od(r.matches),V=q.length>0?0:-1}catch(r){ee=w(r)}finally{he=!1,d(),e.keepFocus&&N("rosterHistorySearchInput")}}async function Xn(e,t={}){const r=String(e||"").trim();if(!!r){ve=r,wt=r,fe=[],he=!0,ee="",d();try{const n=await A("guildsync:request-roster-stream-history",{account_name:r},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster stream history.");fe=ad(n.events)}catch(n){ee=w(n)}finally{he=!1,t.keepLoading||d()}}}function od(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>({account_name:String(t.account_name||t.accountName||"").trim(),rank:String(t.rank||t.rankName||"").trim()})):[]}function ad(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>{var r,n;return{event_type:String(t.event_type||t.eventType||"").trim(),rank:String(t.rank||t.rankName||"").trim(),timestamp:(n=(r=t.timestamp)!=null?r:t.timestampS)!=null?n:"",officer:String(t.officer||"").trim()}}):[]}function yi(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>{var r;return{account_name:String(t.account_name||t.accountName||"").trim(),rank:String(t.rank||t.rankName||"").trim(),joined:(r=t.joined)!=null?r:""}}).sort((t,r)=>t.account_name.localeCompare(r.account_name)):[]}function cd(e){if(!e)return"Never";const t=new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleString()}function fr(e){const t=Number(e);return t?new Date(t*1e3).toLocaleDateString():""}function Sn(e){const t=Number(e);return t?new Date(t*1e3).toLocaleString():""}async function dd(e={}){G=yi(e.members),Zt=e.last_refresh||new Date().toISOString(),E==="eso-members"&&d(),h("roster-data-updated",`Roster data updated. Loaded ${G.length} member record${G.length===1?"":"s"}.`,{ttlMs:m})}async function ct(e={}){if(!!(l!=null&&l.connected)){be=!0,d();try{const t=await A("guildsync:request-roster-data",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to retrieve roster data.");G=yi(t.members),Zt=t.last_refresh||Zt,e.silent||h("roster-data-loaded",`Loaded ${G.length} roster member${G.length===1?"":"s"}.`,{ttlMs:m})}catch(t){h("roster-data-error",w(t),{ttlMs:m})}finally{be=!1,d()}}}async function ld(e={}){var t;if(!!R()){if(!(l!=null&&l.connected)){h("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}be=!0,d();try{const r=await Zo(e);if(!(r!=null&&r.ok)){h("roster-data-pending",(r==null?void 0:r.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:m});return}const n={local_upload_id:bi(),authenticated_username:Oe(),authenticated_discord_user_id:((t=v==null?void 0:v.user)==null?void 0:t.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||e.fileName||"",file_path:r.filePath||e.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await ki(n)}catch(s){throw ud(n),s}await ct({silent:!0})}catch(r){h("roster-data-error",w(r),{ttlMs:m})}finally{be=!1,d()}}}function bi(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function wn(){try{const e=window.localStorage.getItem(_s),t=e?JSON.parse(e):[];return Array.isArray(t)?t.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function vi(e){window.localStorage.setItem(_s,JSON.stringify(Array.isArray(e)?e:[]))}function ud(e){const t=String((e==null?void 0:e.local_upload_id)||bi()),r=wn().filter(n=>(n==null?void 0:n.local_upload_id)!==t);r.push({...e,local_upload_id:t,pending_saved_at:new Date().toISOString()}),vi(r),h("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function fd(e){const t=wn().filter(r=>(r==null?void 0:r.local_upload_id)!==e);vi(t)}async function hd(){if(Rr||!(l!=null&&l.connected)||!R())return;const e=wn();if(e.length!==0){Rr=!0;try{for(const t of e){if(!(l!=null&&l.connected)||!R())return;await ki(t),fd(t.local_upload_id)}}catch(t){h("roster-data-pending-error",`Pending roster upload retry failed: ${w(t)}`,{ttlMs:m})}finally{Rr=!1}}}async function ki(e){if(!(l!=null&&l.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const t=await A("guildsync:sending-roster-data",e,3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const r=await ea(e.file_path||"",e.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return h("roster-data-sent",t.message||"Roster data sent to GuildSync backend.",{ttlMs:m}),t}function md(){const e=Xr(C),t=wd(e,C),r=C!=="other";return`
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
          <span class="discord-last-refresh">Last Refresh: ${a(Ci($s))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${Be||!R()?"disabled":""} ${R()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Be?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${Cr("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${Cr("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${Cr("other","?","Other","All other deposits")}
        </div>

        ${bd(C)}

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
              ${e.length>0?e.map(n=>_d(n,r)).join(""):Ld(r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${a(Zr(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${C==="monthly"?`<div>Raffle Pot: <strong>${a(Zr(Math.floor(t.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${C==="biweekly"?`<div>Raffle Pot: <strong>${a(Zr(GUILD_getRoundedBiweeklyRafflePot(t.amount)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${C==="biweekly"?`<div>Draws: <strong>${a(String(GUILD_getBiweeklyDrawCount(t.amount)))}</strong></div>`:""}
          ${r?`<div>Total Tickets Awarded: <strong>${a(pr(t.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${$e?pd(Xr($t)):""}
    </div>
  `}function pd(e){return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${a(He($t))} Deposits</h3>
            <p class="bank-export-subtitle">Copy this grid and paste it directly into Google Sheets.</p>
          </div>
          <button id="closeBankingExportGridButton" class="roster-history-close modal-close-button bank-export-close-button" type="button" aria-label="Close export grid">\xD7</button>
        </div>

        <div class="bank-export-toolbar">
          <button id="copyBankingExportGridButton" class="bank-export-copy-button" type="button" ${e.length===0?"disabled":""}>Copy Grid</button>
          <span class="bank-export-count">${a(String(e.length))} row${e.length===1?"":"s"}</span>
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
              ${e.length>0?e.map(t=>gd(t)).join(""):yd()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${a(wi(e))}</textarea>
      </div>
    </div>
  `}function gd(e){return`
    <tr>
      <td>${a(e.displayName||"")}</td>
      <td>${a(String(Number(e.amount)||0))}</td>
      <td>${a(String(Number(e.ticketAmount)||0))}</td>
      <td>${a(e.note||"")}</td>
    </tr>
  `}function yd(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${a(He($t))}.</td>
    </tr>
  `}function bd(e){if(e==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const t=_i(e),r=_n(e),n=r<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${u(He(e))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${a(He(e))} Raffle Period ${r===0?"(Current)":`(${Math.abs(r)} period${Math.abs(r)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${a(Yt(t.salesStart))} through ${a(Yt(t.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${a(Yt(t.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${n?"":"disabled"} aria-label="Next ${u(He(e))} raffle period">\u203A</button>
    </div>
  `}function Cr(e,t,r,n){const s=C===e;return`
    <button class="bank-section-card${s?" active":""}" type="button" data-bank-section="${u(e)}" aria-selected="${s?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${a(t)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${a(r)}</span>
        <span class="bank-section-subtitle">${a(n)}</span>
      </span>
    </button>
  `}function Si(){if(E!=="more")return;document.querySelectorAll("[data-bank-section]").forEach(i=>{i.addEventListener("click",()=>{C=i.dataset.bankSection||"biweekly",d()})}),document.querySelectorAll("[data-bank-export-section]").forEach(i=>{i.addEventListener("click",()=>{$t=(i.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",$e=!0,d()})}),document.querySelectorAll("[data-bank-period-move]").forEach(i=>{i.addEventListener("click",()=>{Sd(i.dataset.bankPeriodMove||""),d()})});const e=document.querySelector("#closeBankingExportGridButton");e&&e.addEventListener("click",()=>{$e=!1,d()});const t=document.querySelector("#copyBankingExportGridButton");t&&t.addEventListener("click",()=>vd());const r=document.querySelector(".bank-export-overlay");r&&r.addEventListener("click",i=>{i.target===r&&($e=!1,d())});const n=document.querySelector("#openManualBiweeklyTicketButton");n&&n.addEventListener("click",async()=>{if(!R()){h("manual-ticket-login-required","Login required to add manual tickets.",{ttlMs:m});return}re=!0,W="",ot=_.accountName||"",G.length===0&&(l==null?void 0:l.connected)&&R()&&await ct({silent:!0}),d()});const s=document.querySelector("#refreshBankingDataButton");s&&s.addEventListener("click",()=>{if(!R()){h("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:m});return}Ai({key:"banking"})})}function wi(e){const t=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const r of e)t.push([r.displayName||"",String(Number(r.amount)||0),String(Number(r.ticketAmount)||0),r.note||""]);return t.map(r=>r.map(hr).join("	")).join(`
`)}function hr(e){return String(e!=null?e:"").replace(/[\t\r\n]+/g," ").trim()}async function mr(e){var s;const t=String(e!=null?e:"");if((s=navigator.clipboard)!=null&&s.writeText)try{return await navigator.clipboard.writeText(t),!0}catch{}const r=document.createElement("textarea");r.value=t,r.setAttribute("readonly","readonly"),r.style.position="fixed",r.style.left="0",r.style.top="0",r.style.width="1px",r.style.height="1px",r.style.opacity="0",r.style.pointerEvents="none",r.style.zIndex="-1",document.body.appendChild(r),r.focus(),r.select(),r.setSelectionRange(0,r.value.length);let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r)}return n}async function vd(){const e=Xr($t),t=wi(e);if(await mr(t)){h("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:m});return}const n=document.querySelector("#bankingExportTsv");n&&(n.focus(),n.select()),h("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:m})}function Xr(e){return K.filter(t=>t.type===e).filter(t=>kd(e,t)).sort((t,r)=>(Number(r.time)||0)-(Number(t.time)||0))}function kd(e,t){if(e==="other")return!0;const r=Number(t==null?void 0:t.time)||0;if(r<=0)return!1;const n=_i(e);return r>=n.salesStart&&r<=n.salesEnd}function _n(e){return Number(Vr[e])||0}function Sd(e){if(C!=="biweekly"&&C!=="monthly")return;const t=_n(C);if(e==="previous"){Vr[C]=t-1;return}e==="next"&&t<0&&(Vr[C]=t+1)}function _i(e){const t=Math.floor(Date.now()/1e3);if(e==="monthly"){const r=GUILD_getBankingMonthlySalesEndForOffset(t,_n(e)),n=GUILD_getBankingPreviousMonthlySalesEnd(r);return{salesStart:n+1,salesEnd:r,raffleTime:r+la}}const r=ca;let n=GUILD_getBankingBiweeklySalesEndAtOrAfter(t);return n+=_n(e)*r,{salesStart:n-r+1,salesEnd:n,raffleTime:n+la}}function GUILD_getBankingBiweeklySalesEndAtOrAfter(e){let t=oa;for(;t-ca>e;)t-=ca;for(;t<e;)t+=ca;return t}function GUILD_getBankingMonthlySalesEndForOffset(e,t=0){let r=GUILD_getBankingMonthlySalesEndAtOrAfter(e),n=Number(t)||0;for(;n<0;)r=GUILD_getBankingPreviousMonthlySalesEnd(r),n+=1;for(;n>0;)r=GUILD_getBankingNextMonthlySalesEnd(r),n-=1;return r}function GUILD_getBankingMonthlySalesEndAtOrAfter(e){let t=GUILD_getBankingBiweeklySalesEndAtOrAfter(e);for(;!GUILD_isBankingLastRaffleSalesEndInEasternMonth(t);)t+=ca;return t}function GUILD_getBankingPreviousMonthlySalesEnd(e){let t=e-ca;for(;!GUILD_isBankingLastRaffleSalesEndInEasternMonth(t);)t-=ca;return t}function GUILD_getBankingNextMonthlySalesEnd(e){let t=e+ca;for(;!GUILD_isBankingLastRaffleSalesEndInEasternMonth(t);)t+=ca;return t}function GUILD_isBankingLastRaffleSalesEndInEasternMonth(e){const t=e+la,r=e+ca+la;return GUILD_getBankingEasternMonthKey(t)!==GUILD_getBankingEasternMonthKey(r)}function GUILD_getBankingEasternMonthKey(e){const t=new Date(Number(e||0)*1e3);if(Number.isNaN(t.getTime()))return"";const r=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit"}).formatToParts(t),n=r.find(s=>s.type==="year")?.value||"",i=r.find(s=>s.type==="month")?.value||"";return`${n}-${i}`} function wd(e,t=C){const r=String(t||"").toLowerCase(),n=r==="monthly"||r==="biweekly";return e.reduce((s,i)=>{const o=Number(i.amount)||0,a=Math.abs(Math.trunc(o))%10,c=n&&(a===1||a===3)&&o>a?o-a:o;return s.amount+=c,s.tickets+=Number(i.ticketAmount)||0,s},{amount:0,tickets:0})}function _d(e,t=!0){return`
    <tr>
      <td>${a(e.note||e.eventId||"")}</td>
      <td>${a(Yt(e.time))}</td>
      <td>${a(e.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${a(Zr(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${t?`<td><strong class="bank-ticket-amount">${a(pr(e.ticketAmount))}</strong></td>`:""}
    </tr>
  `}function Ld(e=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${e?"5":"4"}">No ${a(He(C))} deposits found for this ${C==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function He(e){return e==="biweekly"?"Bi-Weekly":e==="monthly"?"50/50":"Other"}function Yt(e){const t=Number(e);return!Number.isFinite(t)||t<=0?"Unknown":new Date(t*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Zr(e){return(Number(e)||0).toLocaleString()}function pr(e){return(Number(e)||0).toLocaleString()}function Ln(e){return Array.isArray(e)?e.map(t=>{var n,s,i,o,c,f,y,k,p,g,x,lt;const r=String((t==null?void 0:t.type)||"other").trim().toLowerCase();return{type:r==="monthly"||r==="biweekly"||r==="other"?r:"other",eventId:String((s=(n=t==null?void 0:t.eventId)!=null?n:t==null?void 0:t.event_id)!=null?s:"").trim(),time:Number((o=(i=t==null?void 0:t.time)!=null?i:t==null?void 0:t.timestamp)!=null?o:0)||0,displayName:String((f=(c=t==null?void 0:t.displayName)!=null?c:t==null?void 0:t.display_name)!=null?f:"").trim(),amount:Number((y=t==null?void 0:t.amount)!=null?y:0)||0,ticketAmount:Number((p=(k=t==null?void 0:t.ticketAmount)!=null?k:t==null?void 0:t.ticket_amount)!=null?p:0)||0,note:String((g=t==null?void 0:t.note)!=null?g:"").trim(),dataSource:String((lt=(x=t==null?void 0:t.dataSource)!=null?x:t==null?void 0:t.data_source)!=null?lt:"").trim()}}):[]}function Ad(e){const t=new Map;for(const r of K)r.eventId&&t.set(r.eventId,r);for(const r of e)!r.eventId||t.set(r.eventId,r);K=Array.from(t.values()).sort((r,n)=>(Number(n.time)||0)-(Number(r.time)||0))}function Li(){$s=new Date().toISOString()}async function Ed(e={}){!(e!=null&&e.ok)||(K=Ln(e.entries),Li(),E==="more"&&d(),h("banking-data-updated",`Banking data updated. Loaded ${K.length} deposit record${K.length===1?"":"s"}.`,{ttlMs:m}))}async function Tt(e={}){const t=Boolean(e.silent);if(!(l!=null&&l.connected)){t||h("banking-data-error","GuildSync websocket is not connected.",{ttlMs:m});return}Be=!0,d();try{const r=await A("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");K=Ln(r.entries),Li(),t||h("banking-data",`Loaded ${K.length} banking deposit record${K.length===1?"":"s"}.`,{ttlMs:m})}catch(r){t||h("banking-data-error",w(r),{ttlMs:m})}finally{Be=!1,d()}}async function Ai(e={}){var t,r;if(!!R()){if(!(l!=null&&l.connected)){h("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}Be=!0,d();try{const n=await Qo(e);if(!(n!=null&&n.ok)){h("banking-data-pending",(n==null?void 0:n.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:m});return}const s=Ln((t=n==null?void 0:n.data)==null?void 0:t.entries);Ad(s);const i=new Date().toISOString(),o={local_upload_id:Ei(),authenticated_username:Oe(),authenticated_discord_user_id:((r=v==null?void 0:v.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||e.fileName||"",file_path:n.filePath||e.filePath||"",collected_at:i,data:n.data||{}};try{await Di(o)}catch(c){throw Rd(o),c}await Tt({silent:!0})}catch(n){h("banking-data-error",w(n),{ttlMs:m})}finally{Be=!1,d()}}}function Ei(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function An(){try{const e=window.localStorage.getItem(ws),t=e?JSON.parse(e):[];return Array.isArray(t)?t.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Ri(e){window.localStorage.setItem(ws,JSON.stringify(Array.isArray(e)?e:[]))}function Rd(e){const t=String((e==null?void 0:e.local_upload_id)||Ei()),r=An().filter(n=>(n==null?void 0:n.local_upload_id)!==t);r.push({...e,local_upload_id:t,pending_saved_at:new Date().toISOString()}),Ri(r),h("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function Dd(e){const t=An().filter(r=>(r==null?void 0:r.local_upload_id)!==e);Ri(t)}async function $d(){if(Er||!(l!=null&&l.connected)||!R())return;const e=An();if(e.length!==0){Er=!0;try{for(const t of e){if(!(l!=null&&l.connected)||!R())return;await Di(t),Dd(t.local_upload_id)}}catch(t){h("banking-data-pending-error",`Pending banking upload retry failed: ${w(t)}`,{ttlMs:m})}finally{Er=!1}}}async function Di(e){if(!(l!=null&&l.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const t=await A("guildsync:sending-banking-data",e,3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const r=await Xo(e.file_path||"",e.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return h("banking-data-sent",t.message||"Banking data sent to GuildSync backend.",{ttlMs:m}),t}function $i(){if(E!=="discord-members")return;const e=document.querySelector("#refreshDiscordDataButton");e&&e.addEventListener("click",()=>Md());const t=document.querySelector("#openDiscordHistoryButton");t&&t.addEventListener("click",()=>{je=!0,te="",d(),N("discordHistorySearchInput")});const r=document.querySelector("#discordMemberSearch");r&&r.addEventListener("input",o=>{Xt=o.target.value||"",Fr=o.target.selectionStart,Gr=o.target.selectionEnd,d({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{Od(o.dataset.discordSortColumn||"username")})});const n=document.querySelector("#discordRoleFilter");n&&n.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(Fe.add(c),d())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeRoleFilter||"";Fe.delete(c),d()})});const s=document.querySelector("#discordLinkStatusFilter");s&&s.addEventListener("change",o=>{const c=String(o.target.value||"").trim();c&&(Ge.add(c),d())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.removeDiscordLinkStatusFilter||"";Ge.delete(c),d()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>si(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const i=document.querySelector("#clearDiscordFiltersButton");i&&i.addEventListener("click",()=>{Xt="",Fe.clear(),Ge.clear(),d()})}async function Md(){var e,t;if(!(l!=null&&l.connected)){h("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:m});return}Qt=!0,d(),h("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const r=await A("guildsync:request-discord-data-refresh",{requested_by:((e=v==null?void 0:v.user)==null?void 0:e.display_name)||((t=v==null?void 0:v.user)==null?void 0:t.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to request Discord data refresh.");h("discord-refresh-requested",r.message||"Discord data refresh completed.",{ttlMs:m}),await En({silent:!0})}catch(r){h("discord-refresh-error",w(r),{ttlMs:m})}finally{Qt=!1,d()}}async function Cd(){if(!(l!=null&&l.connected))return;const e=await A("guildsync:request-discord-data-date",{});e!=null&&e.ok&&(dr=e.value||null)}async function Nd(e={}){if(!!(e!=null&&e.ok)){B=Rn(e.members),e.last_refresh&&(dr=e.last_refresh);try{await Cd()}catch{}E==="discord-members"&&d(),h("discord-data-updated",`Discord data updated. Loaded ${B.length} member record${B.length===1?"":"s"}.`,{ttlMs:m})}}async function En(e={}){const t=Boolean(e.silent);if(!(l!=null&&l.connected)){h("discord-data-error","GuildSync websocket is not connected.",{ttlMs:m});return}We=!0,d();try{const[r,n]=await Promise.all([A("guildsync:request-discord-data-date",{}),A("guildsync:request-discord-member-dataJSON",{})]);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord refresh date.");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord member data.");dr=r.value||null,B=Rn(n.members),t||h("discord-data",`Loaded ${B.length} Discord member record${B.length===1?"":"s"}.`,{ttlMs:m})}catch(r){h("discord-data-error",w(r),{ttlMs:m})}finally{We=!1,d()}}function A(e,t={},r=3e4){return new Promise((n,s)=>{if(!(l!=null&&l.connected)){s(new Error("GuildSync websocket is not connected."));return}let i=!1;const o=window.setTimeout(()=>{i||(i=!0,s(new Error(`${e} timed out.`)))},r);l.emit(e,t,c=>{i||(i=!0,window.clearTimeout(o),n(c))})})}function Rn(e){return Array.isArray(e)?e.map(t=>({discord_id:String((t==null?void 0:t.discord_id)||(t==null?void 0:t.id)||"").trim(),username:String((t==null?void 0:t.username)||"").trim(),global_name:String((t==null?void 0:t.global_name)||"").trim(),server_nickname:String((t==null?void 0:t.server_nickname)||"").trim(),last_seen:String((t==null?void 0:t.last_seen)||(t==null?void 0:t.lastSeen)||"").trim(),last_seen_action:String((t==null?void 0:t.last_seen_action)||(t==null?void 0:t.lastSeenAction)||"").trim(),avatar:String((t==null?void 0:t.avatar)||"").trim(),roles:Array.isArray(t==null?void 0:t.roles)?t.roles.map(Td).filter(Boolean):[]})).filter(t=>t.discord_id||t.username||t.global_name||t.server_nickname).sort((t,r)=>Xe(t).localeCompare(Xe(r),void 0,{sensitivity:"base"})):[]}function Td(e){var s,i;if(!e||typeof e!="object")return null;const t=String(e.role_id||e.id||"").trim(),r=String(e.role_name||e.name||"Unnamed Role").trim(),n=(i=(s=e.role_color)!=null?s:e.color)!=null?i:null;return{role_id:t,role_name:r||"Unnamed Role",role_color:n}}function Bd(){const e=Xt.trim().toLowerCase(),t=Array.from(Fe),r=B.filter(n=>{if(e&&![n.username,n.global_name,n.server_nickname,n.discord_id,...n.roles.map(i=>i.role_name)].join(" ").toLowerCase().includes(e))return!1;if(t.length>0){const s=new Set(n.roles.map(i=>i.role_name));if(!t.every(i=>s.has(i)))return!1}return!!qs(Ge,Oa(n))});return xd(r)}function xd(e){const t=_e==="desc"?-1:1;return[...e].sort((r,n)=>{const s=Zn(r,St),i=Zn(n,St),o=s.localeCompare(i,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*t:Xe(r).localeCompare(Xe(n),void 0,{sensitivity:"base",numeric:!0})})}function Zn(e,t){return t==="global_name"?e.global_name||"":t==="server_nickname"?e.server_nickname||"":t==="roles"?(e.roles||[]).map(r=>r.role_name||"").filter(Boolean).sort((r,n)=>r.localeCompare(n,void 0,{sensitivity:"base"})).join(" "):e.username||e.discord_id||""}function Od(e){const r=new Set(["username","global_name","server_nickname","roles"]).has(e)?e:"username";St===r?_e=_e==="asc"?"desc":"asc":(St=r,_e="asc"),d()}function Gt(e,t){const r=St===e,n=_e==="asc"?"ascending":"descending",s=r?_e==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${r?n:"none"}">
      <button
        class="discord-sort-header${r?" active":""}"
        type="button"
        data-discord-sort-column="${u(e)}"
        title="Sort ${u(t)} ${r&&_e==="asc"?"descending":"ascending"}"
      >
        <span>${a(t)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function Id(){const e=document.querySelector("#discordMemberSearch");if(!!e&&(e.focus({preventScroll:!0}),typeof e.setSelectionRange=="function")){const t=Number.isInteger(Fr)?Fr:e.value.length,r=Number.isInteger(Gr)?Gr:t;e.setSelectionRange(t,r)}}function qd(){const e=document.querySelector("#rosterMemberSearch");if(!!e&&(e.focus({preventScroll:!0}),typeof e.setSelectionRange=="function")){const t=Number.isInteger(Pr)?Pr:e.value.length,r=Number.isInteger(Ur)?Ur:t;e.setSelectionRange(t,r)}}function Fd(){const e=new Set;for(const t of B)for(const r of t.roles)r.role_name&&e.add(r.role_name);return Array.from(e).sort((t,r)=>t.localeCompare(r,void 0,{sensitivity:"base"}))}function Gd(e){const t=Mi(e),r=Xe(e),n=e.roles||[];return`
    <tr data-discord-user-id="${u(e.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${t?`<img src="${u(t)}" alt="${u(r)}" />`:`<span>${a($n(r))}</span>`}
          </div>
          <span>${a(e.username||e.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${a(e.global_name||"")}</td>
      <td>${a(e.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${n.length>0?n.map(s=>Kd(s)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${ri({mode:"discord-to-eso",discordUserId:e.discord_id})}</td>
    </tr>
  `}function Pd(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${a(We?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function Ud(e){const t=Mi(e),r=Xe(e),n=Array.isArray(e.roles)?e.roles:[],s=Wd(e),i=Hd(e,s),o=zd(i),c=vn({mode:"discord-to-eso",discordUserId:e.discord_id}),f=at(e.discord_id),y=f.filter(g=>String(g.link_status||"").trim().toLowerCase()==="linked").map(g=>g.eso_account_name).filter(Boolean),k=f.filter(g=>String(g.link_status||"").trim().toLowerCase()==="candidate").map(g=>g.eso_account_name).filter(Boolean);return`
    <details class="discord-mobile-member-card" style="${`--discord-card-role-color:${u(o)};`}" data-discord-user-id="${u(e.discord_id||"")}">
      <summary class="discord-mobile-member-summary">
        <div class="discord-mobile-avatar-wrap">
          <div class="discord-mobile-avatar">
            ${t?`<img src="${u(t)}" alt="${u(r)}" />`:`<span>${a($n(r))}</span>`}
          </div>
          <span class="discord-mobile-online-dot" aria-hidden="true"></span>
        </div>

        <div class="discord-mobile-member-copy">
          <div class="discord-mobile-member-name-row">
            <strong>${a(r||e.username||"Unknown Member")}</strong>
          </div>
          <div class="discord-mobile-name-line">${a(e.username||"\u2014")}</div>
          <div class="discord-mobile-name-line">${a(e.global_name||"\u2014")}</div>
          <div class="discord-mobile-name-line">${a(e.server_nickname||"\u2014")}</div>
        </div>

        <div class="discord-mobile-role-side">
          <div class="discord-mobile-role-shield" aria-hidden="true">\u265C</div>
          <span>${a((i==null?void 0:i.role_name)||"Member")}</span>
          <i class="discord-mobile-card-caret" aria-hidden="true">\u203A</i>
        </div>
      </summary>

      <div class="discord-mobile-member-details">
        <div class="discord-mobile-detail-section">
          <div class="discord-mobile-detail-title">Linked Accounts</div>
          <div class="discord-mobile-link-status member-link-status-${u(c.className)}">${a(c.label)}</div>
          <div class="discord-mobile-detail-grid">
            <span>ESO Account</span>
            <strong>${a(y.join(", ")||k.join(", ")||"Not linked")}</strong>
            <span>ESO Role</span>
            <strong>${a(s||"\u2014")}</strong>
          </div>
          <button
            class="discord-mobile-link-action"
            type="button"
            data-open-member-link-dialog="discord-to-eso"
            data-member-link-value="${u(e.discord_id||"")}"
          >Manage Link</button>
        </div>

        <div class="discord-mobile-detail-section">
          <div class="discord-mobile-detail-title">Roles (${n.length})</div>
          <div class="discord-mobile-role-grid">
            ${n.length>0?n.map(g=>Yd(g)).join(""):'<span class="discord-mobile-empty-note">No roles</span>'}
          </div>
        </div>

        <div class="discord-mobile-detail-section">
          <div class="discord-mobile-detail-title">Member Info</div>
          <div class="discord-mobile-detail-grid">
            <span>Username</span>
            <strong>${a(e.username||"\u2014")}</strong>
            <span>Global Name</span>
            <strong>${a(e.global_name||"\u2014")}</strong>
            <span>Server Nickname</span>
            <strong>${a(e.server_nickname||"\u2014")}</strong>
            <span>Last Seen</span>
            <strong>${a(jd(e.last_seen))}</strong>
          </div>
        </div>
      </div>
    </details>
  `}function Vd(){return`
    <div class="discord-mobile-empty-card">
      ${a(We?"Loading Discord member data...":"No Discord members found.")}
    </div>
  `}function Hd(e,t=""){const r=Array.isArray(e==null?void 0:e.roles)?e.roles.filter(s=>s==null?void 0:s.role_name):[],n=["Associates","Soldiers","Capo","CapoRegime","Consigliere"];for(const s of n){const i=r.find(o=>String(o.role_name||"").trim().toLowerCase()===s.toLowerCase());if(i)return i}if(t)return{role_name:t,role_color:en(t)};for(const s of n){const i=r.find(o=>String(o.role_name||"").trim().toLowerCase().includes(s.toLowerCase()));if(i)return{...i,role_name:s}}return r[0]||{role_name:"Associates",role_color:en("Associates")}}function Wd(e){const t=at(e==null?void 0:e.discord_id),r=yn(t),n=(r==null?void 0:r.eso_account_name)||"";if(!n)return"";const s=se(n),i=G.find(o=>se(o.account_name)===s);return(i==null?void 0:i.rank)||""}function en(e){const t=String(e||"").trim().toLowerCase();return t==="consigliere"?"#a855f7":t==="caporegime"?"#06b6d4":t==="capo"?"#3b82f6":t==="soldiers"?"#22c55e":t==="associates"?"#f59e0b":"#8b5cf6"}function zd(e){const t=dt(e==null?void 0:e.role_color);return t&&t!=="#99aab5"?t:en(e==null?void 0:e.role_name)}function jd(e){if(!e)return"\u2014";const t=Number(e),r=t?new Date(t>9999999999?t:t*1e3):new Date(e);return Number.isNaN(r.getTime())?String(e):r.toLocaleString()}function Yd(e){const t=dt(e.role_color),r=yr(t);return`
    <span class="discord-mobile-role-pill" style="${gr(t,r)}">${a(e.role_name||"Role")}</span>
  `}function Kd(e){const t=dt(e.role_color),r=yr(t),n=gr(t,r);return`
    <span
      class="discord-role-badge"
      title="${u(e.role_name)}"
      style="${n}"
    >${a(e.role_name)}</span>
  `}function Jd(e){const t=Dn(e),r=dt(t==null?void 0:t.role_color),n=yr(r),s=gr(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-role-filter="${u(e)}"
      style="${s}"
      title="Remove ${u(e)} filter"
    >
      <span>${a(e)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Dn(e){for(const t of B){const r=t.roles.find(n=>n.role_name===e);if(r)return r}return null}function dt(e){const t=Number(e);return!Number.isFinite(t)||t<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(t))).toString(16).padStart(6,"0")}`}function gr(e,t){return[`--role-fill-top: ${es(e,"#ffffff",.16)}`,`--role-fill-bottom: ${es(e,"#000000",.1)}`,`--role-fill-glow: ${ts(e,.28)}`,`--role-fill-edge: ${ts(e,.46)}`,`color: ${t}`].join("; ")}function es(e,t,r){const n=Pt(e)||Pt("#64748b"),s=Pt(t)||Pt("#ffffff"),i=Math.max(0,Math.min(1,Number(r)||0)),o=Math.round(n.red+(s.red-n.red)*i),c=Math.round(n.green+(s.green-n.green)*i),f=Math.round(n.blue+(s.blue-n.blue)*i);return`#${Nr(o)}${Nr(c)}${Nr(f)}`}function Pt(e){const t=String(e||"").replace("#","");return/^[0-9a-f]{6}$/i.test(t)?{red:parseInt(t.slice(0,2),16),green:parseInt(t.slice(2,4),16),blue:parseInt(t.slice(4,6),16)}:null}function Nr(e){return Math.max(0,Math.min(255,e)).toString(16).padStart(2,"0")}function ts(e,t){const r=String(e||"#64748b").replace("#",""),n=/^[0-9a-f]{6}$/i.test(r)?r:"64748b",s=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),o=parseInt(n.slice(4,6),16);return`rgba(${s}, ${i}, ${o}, ${t})`}function yr(e){const t=String(e||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(t))return"#E5E7EB";const r=parseInt(t.slice(0,2),16),n=parseInt(t.slice(2,4),16),s=parseInt(t.slice(4,6),16);return(r*299+n*587+s*114)/1e3>150?"#0F172A":"#F8FAFC"}function Mi(e){const t=String((e==null?void 0:e.avatar)||"").trim(),r=String((e==null?void 0:e.discord_id)||"").trim();if(!t)return"";if(t.startsWith("http://")||t.startsWith("https://"))return t;if(!r)return"";const n=t.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(t)}.${n}?size=64`}function Xe(e){return e.server_nickname||e.global_name||e.username||e.discord_id||"Unknown"}function Ci(e){const t=String(e||"").trim();if(!t)return"Not refreshed yet";const r=new Date(t);return Number.isNaN(r.getTime())?t:r.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Kt(){const e=document.querySelector("#discordArea");if(!!e){if(Bt(!1),R()){const t=v.user||{},r=Oe(),n=ul(t),s=$n(r);e.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${n?`<img src="${u(n)}" alt="${u(r)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${a(s)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const i=document.querySelector("#discordAvatarButton");i.addEventListener("contextmenu",o=>{o.preventDefault(),rs()}),i.addEventListener("click",()=>{rs()});return}e.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",Zd)}}function rs(){if(dn){Bt();return}Xd()}function Qd(){var n,s,i;const e=document.querySelector("#discordProfileMenu");if(!e)return;const t=Oe(),r=((n=v.user)==null?void 0:n.role)||"member";e.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${a(t)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${a(fl(r))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${a(cn)}</span>
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(s=document.querySelector("#discordLogoutButton"))==null||s.addEventListener("click",el),(i=document.querySelector("#associateTicketReportButton"))==null||i.addEventListener("click",()=>{Bt(!1),Vs()})}function Xd(){const e=document.querySelector("#discordProfileMenu");!e||(Qd(),e.classList.add("open"),e.setAttribute("aria-hidden","false"),dn=!0,setTimeout(()=>{window.addEventListener("click",Ni),window.addEventListener("keydown",Ti)},0))}function Bt(e=!0){const t=document.querySelector("#discordProfileMenu");t&&(t.classList.remove("open"),t.setAttribute("aria-hidden","true")),dn=!1,e&&(window.removeEventListener("click",Ni),window.removeEventListener("keydown",Ti))}function Ni(e){const t=document.querySelector(".discord-profile-wrap");t&&!t.contains(e.target)&&Bt()}function Ti(e){e.key==="Escape"&&Bt()}async function Zd(){try{h("auth","Opening Discord login...",{ttlMs:m});const e=await zo();e!=null&&e.status_message&&h("auth",e.status_message,{ttlMs:m}),ge()}catch(e){h("auth-error",w(e),{ttlMs:m}),ge()}}async function el(){try{v=await Yo(),h("auth",v.status_message||"Logged out.",{ttlMs:m}),Ms(),vt(),await kt()}catch(e){h("auth-error",w(e),{ttlMs:m}),ge()}}function vt(){const e=v.socket_url||"https://guildsync.perdues.me";tl(!1);const t={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};v!=null&&v.token&&(t.auth={token:v.token}),l=Wt(e,t),l.on("connect",()=>{ge(),Bi(),E==="discord-members"&&En({silent:!0}),E==="eso-members"&&ct({silent:!0}),E==="more"&&Tt({silent:!0}),$d(),hd(),rl()}),l.on("connect_error",()=>{ge(),or()}),l.on("disconnect",()=>{ge(),or()}),l.on("guildsync:version-status",r=>{nl(r)}),l.on("guildsync:discord-member-data-updated",r=>{Nd(r)}),l.on("guildsync:banking-data-updated",r=>{Ed(r)}),l.on("guildsync:roster-data-updated",r=>{dd(r)}),l.on("guildsync:member-links-updated",(r={})=>{Array.isArray(r.links)&&(L=r.links,(E==="discord-members"||E==="eso-members"||E==="settings"||ke)&&d())}),l.on("guildsync:discord-refresh-status",(r={})=>{const n=String(r.message||"").trim();n&&h("discord-refresh-status",n,{ttlMs:m})})}function tl(e=!0){or(),l&&(l.disconnect(),l=null),e&&ge()}function Bi(){!(l!=null&&l.connected)||l.emit("guildsync:client-version",{version:cn})}function rl(){or(),zt=window.setInterval(()=>{Bi()},ta)}function or(){zt&&(window.clearInterval(zt),zt=null)}function nl(e){if(!(!e||typeof e!="object")){if(e.update_required){const t=e.latest_version||"unknown";h("version",`GuildSync is out of date. Current version: ${cn}. Latest version: ${t}.`);return}br("version")}}function h(e,t,r={}){const n=String(e||"").trim(),s=String(t||"").trim();if(!(!n||!s)){if(ye.set(n,s),M===n){const i=document.querySelector("#statusMessageTrack");i&&(i.textContent=s)}if(we.has(n)&&(window.clearTimeout(we.get(n)),we.delete(n)),r.ttlMs&&Number(r.ttlMs)>0){const i=window.setTimeout(()=>{br(n)},Number(r.ttlMs));we.set(n,i)}Ze()}}function br(e){const t=String(e||"").trim();if(!!t){if(ye.delete(t),we.has(t)&&(window.clearTimeout(we.get(t)),we.delete(t)),M===t){Sr(()=>{M="",Ze()});return}Ze()}}function Ze(){const e=vr();if(e.length===0){Me?Sr(Lt):Lt();return}!Me&&!Ce&&kr(e[0])}function vr(){return Array.from(ye.keys())}function xi(){const e=vr();if(e.length===0)return"";if(!M)return e[0];const t=e.indexOf(M);return t<0?e[0]:e[(t+1)%e.length]}function kr(e){const t=document.querySelector("#statusMessageTrack");if(!t||!ye.has(e)){Lt();return}wr();const r=ye.get(e);M=e,Me=!0,Ce=!0,t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent=r,t.style.setProperty("--message-fade-duration",`${Es}ms`),requestAnimationFrame(()=>{t.classList.add("fade-in"),t.addEventListener("animationend",()=>{t.classList.remove("fade-in"),t.style.opacity="1",t.style.transform="translateX(0) translateY(-50%)",Ce=!1,sl()},{once:!0})})}function sl(){const e=vr();if(!M||!ye.has(M)){Ze();return}if(e.length<=1){ns(!1);return}ns(!0)}function ns(e){const t=document.querySelector("#statusMessageViewport"),r=document.querySelector("#statusMessageTrack");if(!t||!r)return;const n=Math.max(0,r.scrollWidth-t.clientWidth);if(n<=0){e&&At(()=>{Sr(()=>{const s=xi();M="",s?kr(s):Lt()})},As);return}At(()=>{Oi(n,e)},Rs)}function Oi(e,t){const r=document.querySelector("#statusMessageTrack");if(!r||!M||!ye.has(M))return;const n=Math.max(4,Math.ceil(e/sa));r.style.setProperty("--long-scroll-distance",`${e}px`),r.style.setProperty("--long-scroll-duration",`${n}s`),r.classList.add("long-scroll"),r.addEventListener("animationend",()=>{if(r.classList.remove("long-scroll"),r.style.transform=`translateX(-${e}px) translateY(-50%)`,t){At(()=>{Sr(()=>{const s=xi();M="",s?kr(s):Lt()})},As);return}At(()=>{il()},na)},{once:!0})}function il(){const e=document.querySelector("#statusMessageViewport"),t=document.querySelector("#statusMessageTrack");if(!e||!t||!M||!ye.has(M))return;if(vr().length!==1){Ze();return}t.classList.remove("long-scroll"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.transform="translateX(0) translateY(-50%)";const n=Math.max(0,t.scrollWidth-e.clientWidth);n<=0||At(()=>{Oi(n,!1)},Rs)}function Sr(e){const t=document.querySelector("#statusMessageTrack");if(wr(),!t||!Me){typeof e=="function"&&e();return}Ce=!0,t.classList.remove("fade-in","long-scroll"),t.style.setProperty("--message-fade-duration",`${Es}ms`),t.classList.add("fade-out"),t.addEventListener("animationend",()=>{t.classList.remove("fade-out"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",Me=!1,Ce=!1,typeof e=="function"&&e()},{once:!0})}function Lt(){const e=document.querySelector("#statusMessageTrack");wr(),M="",Me=!1,Ce=!1,e&&(e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent="")}function At(e,t){const r=window.setTimeout(()=>{yt=yt.filter(n=>n!==r),e()},t);yt.push(r)}function wr(){for(const e of yt)window.clearTimeout(e);yt=[]}function Ii(){if(!Me||Ce||!M)return;const e=M;wr(),kr(e)}function ge(){const e=document.querySelector("#statusDot"),t=document.querySelector("#statusConnectionLabel");if(!!e){if(e.classList.remove("status-red","status-yellow","status-green"),!(l!=null&&l.connected)){e.classList.add("status-red"),e.title="Server Unavailable. Websocket is not connected.",t&&(t.textContent="Server Unavailable",t.title="Server Unavailable");return}if(!R()){e.classList.add("status-yellow"),e.title="Login Required. Websocket is connected but user is not authenticated.",t&&(t.textContent="Login Required",t.title="Login Required");return}e.classList.add("status-green"),e.title=`Server Ready. Authenticated as ${Oe()}.`,t&&(t.textContent="Server Ready",t.title=`Server Ready - ${Oe()}`)}}async function kt(e={}){try{if(R()){const t=await Ko();In=t,!e.silent&&(t==null?void 0:t.message)&&h(t.watching?"file-watcher":"file-watcher-error",t.message,{ttlMs:m});return}In=await Jo(),br("file-watcher")}catch(t){h("file-watcher-error",w(t),{ttlMs:m})}}function ol(e={}){if(!R())return;const t=String(e.key||e.fileName||"saved-vars-file").trim()||"saved-vars-file",r=String(e.label||"").trim(),n=String(e.fileName||"SavedVariables file").trim()||"SavedVariables file",s=r?`${r} saved variables (${n})`:n;h(`saved-vars-file-updated-${t}`,`${s} has been updated.`,{ttlMs:m}),t.toLowerCase()==="banking"&&al(e),t.toLowerCase()==="roster"&&cl(e)}async function al(e={}){await Ai(e)}async function cl(e={}){await ld(e)}function dl(e){!R()||h("file-watcher-error",w(e),{ttlMs:m})}function ll(){ft("guildsync-savedvars-file-modified",ol),ft("guildsync-file-watcher-error",dl),ft("guildsync-login-complete",async e=>{v=e||{logged_in:!1,allowed:!1},Kt(),vt(),await kt(),h("auth",v.status_message||`Logged in and authorized as ${Oe()}.`,{ttlMs:m})}),ft("guildsync-login-denied",async e=>{v={logged_in:!1,allowed:!1,status_message:""},Kt(),await kt(),h("auth",e||"Access denied.",{ttlMs:m}),vt()}),ft("guildsync-login-failed",async e=>{v={logged_in:!1,allowed:!1,status_message:""},Kt(),await kt(),h("auth",e||"Login failed.",{ttlMs:m}),vt()})}function R(){return Boolean((v==null?void 0:v.logged_in)&&(v==null?void 0:v.allowed)&&(v==null?void 0:v.token))}function Oe(){var e,t;return((e=v.user)==null?void 0:e.display_name)||((t=v.user)==null?void 0:t.username)||"Discord User"}function ul(e){if(!e)return"";if(e.avatar_url)return e.avatar_url;const t=String(e.avatar||"").trim(),r=String(e.discord_user_id||"").trim();if(!t||!r)return"";if(t.startsWith("http://")||t.startsWith("https://"))return t;const n=t.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(t)}.${n}?size=128`}function $n(e){const t=String(e||"").trim().split(/\s+/).filter(Boolean);return t.length===0?"GS":t.length===1?t[0].slice(0,2).toUpperCase():`${t[0][0]}${t[t.length-1][0]}`.toUpperCase()}function fl(e){return String(e||"member").replaceAll("_"," ").replace(/\b\w/g,t=>t.toUpperCase())}function hl(){ht&&(ht.disconnect(),ht=null);const e=document.querySelector(".main-window")||document.querySelector("#app");if(!e||typeof ResizeObserver>"u")return;let t=Math.round(e.getBoundingClientRect().width),r=Math.round(e.getBoundingClientRect().height);ht=new ResizeObserver(n=>{const s=n[0];if(!s)return;const i=Math.round(s.contentRect.width),o=Math.round(s.contentRect.height);i===t&&o===r||(t=i,r=o,qi(),Ii())}),ht.observe(e)}function qi(){clearTimeout(xn),xn=setTimeout(async()=>{try{await ks()}catch{}},500)}function w(e){return e?typeof e=="string"?e:e.message||String(e):"Unknown error."}function a(e){return String(e!=null?e:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function u(e){return a(e)}ll();Ya();ua();
