(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const Di="/assets/splash.ea386b6a.png",$i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",Mi="/assets/GuildSync-Graphic.9169020d.png",Y=Object.create(null);Y.open="0";Y.close="1";Y.ping="2";Y.pong="3";Y.message="4";Y.upgrade="5";Y.noop="6";const Bt=Object.create(null);Object.keys(Y).forEach(e=>{Bt[Y[e]]=e});const Er={type:"error",data:"parser error"},zn=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",jn=typeof ArrayBuffer=="function",Yn=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,zr=({type:e,data:t},r,n)=>zn&&t instanceof Blob?r?n(t):vn(t,n):jn&&(t instanceof ArrayBuffer||Yn(t))?r?n(t):vn(new Blob([t]),n):n(Y[e]+(t||"")),vn=(e,t)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];t("b"+(n||""))},r.readAsDataURL(e)};function kn(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let gr;function Ti(e,t){if(zn&&e.data instanceof Blob)return e.data.arrayBuffer().then(kn).then(t);if(jn&&(e.data instanceof ArrayBuffer||Yn(e.data)))return t(kn(e.data));zr(e,!1,r=>{gr||(gr=new TextEncoder),t(gr.encode(r))})}const Sn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ct=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<Sn.length;e++)ct[Sn.charCodeAt(e)]=e;const Ni=e=>{let t=e.length*.75,r=e.length,n,s=0,i,o,d,p;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const v=new ArrayBuffer(t),w=new Uint8Array(v);for(n=0;n<r;n+=4)i=ct[e.charCodeAt(n)],o=ct[e.charCodeAt(n+1)],d=ct[e.charCodeAt(n+2)],p=ct[e.charCodeAt(n+3)],w[s++]=i<<2|o>>4,w[s++]=(o&15)<<4|d>>2,w[s++]=(d&3)<<6|p&63;return v},Ci=typeof ArrayBuffer=="function",jr=(e,t)=>{if(typeof e!="string")return{type:"message",data:Kn(e,t)};const r=e.charAt(0);return r==="b"?{type:"message",data:Bi(e.substring(1),t)}:Bt[r]?e.length>1?{type:Bt[r],data:e.substring(1)}:{type:Bt[r]}:Er},Bi=(e,t)=>{if(Ci){const r=Ni(e);return Kn(r,t)}else return{base64:!0,data:e}},Kn=(e,t)=>{switch(t){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},Jn=String.fromCharCode(30),xi=(e,t)=>{const r=e.length,n=new Array(r);let s=0;e.forEach((i,o)=>{zr(i,!1,d=>{n[o]=d,++s===r&&t(n.join(Jn))})})},Oi=(e,t)=>{const r=e.split(Jn),n=[];for(let s=0;s<r.length;s++){const i=jr(r[s],t);if(n.push(i),i.type==="error")break}return n};function Ii(){return new TransformStream({transform(e,t){Ti(e,r=>{const n=r.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const i=new DataView(s.buffer);i.setUint8(0,126),i.setUint16(1,n)}else{s=new Uint8Array(9);const i=new DataView(s.buffer);i.setUint8(0,127),i.setBigUint64(1,BigInt(n))}e.data&&typeof e.data!="string"&&(s[0]|=128),t.enqueue(s),t.enqueue(r)})}})}let yr;function Rt(e){return e.reduce((t,r)=>t+r.length,0)}function Dt(e,t){if(e[0].length===t)return e.shift();const r=new Uint8Array(t);let n=0;for(let s=0;s<t;s++)r[s]=e[0][n++],n===e[0].length&&(e.shift(),n=0);return e.length&&n<e[0].length&&(e[0]=e[0].slice(n)),r}function qi(e,t){yr||(yr=new TextDecoder);const r=[];let n=0,s=-1,i=!1;return new TransformStream({transform(o,d){for(r.push(o);;){if(n===0){if(Rt(r)<1)break;const p=Dt(r,1);i=(p[0]&128)===128,s=p[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(Rt(r)<2)break;const p=Dt(r,2);s=new DataView(p.buffer,p.byteOffset,p.length).getUint16(0),n=3}else if(n===2){if(Rt(r)<8)break;const p=Dt(r,8),v=new DataView(p.buffer,p.byteOffset,p.length),w=v.getUint32(0);if(w>Math.pow(2,53-32)-1){d.enqueue(Er);break}s=w*Math.pow(2,32)+v.getUint32(4),n=3}else{if(Rt(r)<s)break;const p=Dt(r,s);d.enqueue(jr(i?p:yr.decode(p),t)),n=0}if(s===0||s>e){d.enqueue(Er);break}}}})}const Qn=4;function D(e){if(e)return Fi(e)}function Fi(e){for(var t in D.prototype)e[t]=D.prototype[t];return e}D.prototype.on=D.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};D.prototype.once=function(e,t){function r(){this.off(e,r),t.apply(this,arguments)}return r.fn=t,this.on(e,r),this};D.prototype.off=D.prototype.removeListener=D.prototype.removeAllListeners=D.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+e];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var n,s=0;s<r.length;s++)if(n=r[s],n===t||n.fn===t){r.splice(s,1);break}return r.length===0&&delete this._callbacks["$"+e],this};D.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),r=this._callbacks["$"+e],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,s=r.length;n<s;++n)r[n].apply(this,t)}return this};D.prototype.emitReserved=D.prototype.emit;D.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};D.prototype.hasListeners=function(e){return!!this.listeners(e).length};const Zt=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,r)=>r(t,0))(),O=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),Pi="arraybuffer";function Xn(e,...t){return t.reduce((r,n)=>(e.hasOwnProperty(n)&&(r[n]=e[n]),r),{})}const Gi=O.setTimeout,Ui=O.clearTimeout;function er(e,t){t.useNativeTimers?(e.setTimeoutFn=Gi.bind(O),e.clearTimeoutFn=Ui.bind(O)):(e.setTimeoutFn=O.setTimeout.bind(O),e.clearTimeoutFn=O.clearTimeout.bind(O))}const Vi=1.33;function Hi(e){return typeof e=="string"?Wi(e):Math.ceil((e.byteLength||e.size)*Vi)}function Wi(e){let t=0,r=0;for(let n=0,s=e.length;n<s;n++)t=e.charCodeAt(n),t<128?r+=1:t<2048?r+=2:t<55296||t>=57344?r+=3:(n++,r+=4);return r}function Zn(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function zi(e){let t="";for(let r in e)e.hasOwnProperty(r)&&(t.length&&(t+="&"),t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t}function ji(e){let t={},r=e.split("&");for(let n=0,s=r.length;n<s;n++){let i=r[n].split("=");t[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return t}class Yi extends Error{constructor(t,r,n){super(t),this.description=r,this.context=n,this.type="TransportError"}}class Yr extends D{constructor(t){super(),this.writable=!1,er(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,r,n){return super.emitReserved("error",new Yi(t,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const r=jr(t,this.socket.binaryType);this.onPacket(r)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,r={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const r=zi(t);return r.length?"?"+r:""}}class Ki extends Yr{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const r=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};Oi(t,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,xi(t,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=Zn()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(t,r)}}let es=!1;try{es=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Ji=es;function Qi(){}class Xi extends Ki{constructor(t){if(super(t),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,r){const n=this.request({method:"POST",data:t});n.on("success",r),n.on("error",(s,i)=>{this.onError("xhr post error",s,i)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=t}}class z extends D{constructor(t,r,n){super(),this.createRequest=t,er(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const r=Xn(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=z.requestsCount++,z.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Qi,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete z.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}z.requestsCount=0;z.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",wn);else if(typeof addEventListener=="function"){const e="onpagehide"in O?"pagehide":"unload";addEventListener(e,wn,!1)}}function wn(){for(let e in z.requests)z.requests.hasOwnProperty(e)&&z.requests[e].abort()}const Zi=function(){const e=ts({xdomain:!1});return e&&e.responseType!==null}();class eo extends Xi{constructor(t){super(t);const r=t&&t.forceBase64;this.supportsBinary=Zi&&!r}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new z(ts,this.uri(),t)}}function ts(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||Ji))return new XMLHttpRequest}catch{}if(!t)try{return new O[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const rs=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class to extends Yr{get name(){return"websocket"}doOpen(){const t=this.uri(),r=this.opts.protocols,n=rs?{}:Xn(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,r,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],s=r===t.length-1;zr(n,this.supportsBinary,i=>{try{this.doWrite(n,i)}catch{}s&&Zt(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=Zn()),this.supportsBinary||(r.b64=1),this.createUri(t,r)}}const br=O.WebSocket||O.MozWebSocket;class ro extends to{createSocket(t,r,n){return rs?new br(t,r,n):r?new br(t,r):new br(t)}doWrite(t,r){this.ws.send(r)}}class no extends Yr{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const r=qi(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(r).getReader(),s=Ii();s.readable.pipeTo(t.writable),this._writer=s.writable.getWriter();const i=()=>{n.read().then(({done:d,value:p})=>{d||(this.onPacket(p),i())}).catch(d=>{})};i();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],s=r===t.length-1;this._writer.write(n).then(()=>{s&&Zt(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const so={websocket:ro,webtransport:no,polling:eo},io=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,oo=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Rr(e){if(e.length>8e3)throw"URI too long";const t=e,r=e.indexOf("["),n=e.indexOf("]");r!=-1&&n!=-1&&(e=e.substring(0,r)+e.substring(r,n).replace(/:/g,";")+e.substring(n,e.length));let s=io.exec(e||""),i={},o=14;for(;o--;)i[oo[o]]=s[o]||"";return r!=-1&&n!=-1&&(i.source=t,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=ao(i,i.path),i.queryKey=co(i,i.query),i}function ao(e,t){const r=/\/{2,9}/g,n=t.replace(r,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function co(e,t){const r={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,i){s&&(r[s]=i)}),r}const Dr=typeof addEventListener=="function"&&typeof removeEventListener=="function",xt=[];Dr&&addEventListener("offline",()=>{xt.forEach(e=>e())},!1);class de extends D{constructor(t,r){if(super(),this.binaryType=Pi,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(r=t,t=null),t){const n=Rr(t);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=Rr(r.host).host);er(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const s=n.prototype.name;this.transports.push(s),this._transportsByName[s]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=ji(this.opts.query)),Dr&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},xt.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const r=Object.assign({},this.opts.query);r.EIO=Qn,r.transport=t,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&de.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(t);r.open(),this.setTransport(r)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",de.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=t.data,this._onError(r);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(r+=Hi(s)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,Zt(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,r,n){return this._sendPacket("message",t,r,n),this}send(t,r,n){return this._sendPacket("message",t,r,n),this}_sendPacket(t,r,n,s){if(typeof r=="function"&&(s=r,r=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const i={type:t,data:r,options:n};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),s&&this.once("flush",s),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),t()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(de.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Dr&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=xt.indexOf(this._offlineEventListener);n!==-1&&xt.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,r),this.writeBuffer=[],this._prevBufferLen=0}}}de.protocol=Qn;class lo extends de{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let r=this.createTransport(t),n=!1;de.priorWebsocketSuccess=!1;const s=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",m=>{if(!n)if(m.type==="pong"&&m.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;de.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(w(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const k=new Error("probe error");k.transport=r.name,this.emitReserved("upgradeError",k)}}))};function i(){n||(n=!0,w(),r.close(),r=null)}const o=m=>{const k=new Error("probe error: "+m);k.transport=r.name,i(),this.emitReserved("upgradeError",k)};function d(){o("transport closed")}function p(){o("socket closed")}function v(m){r&&m.name!==r.name&&i()}const w=()=>{r.removeListener("open",s),r.removeListener("error",o),r.removeListener("close",d),this.off("close",p),this.off("upgrading",v)};r.once("open",s),r.once("error",o),r.once("close",d),this.once("close",p),this.once("upgrading",v),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const r=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&r.push(t[n]);return r}}class uo extends lo{constructor(t,r={}){const n=typeof t=="object"?t:r;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(s=>so[s]).filter(s=>!!s)),super(t,n)}}function fo(e,t="",r){let n=e;r=r||typeof location<"u"&&location,e==null&&(e=r.protocol+"//"+r.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=r.protocol+e:e=r.host+e),/^(https?|wss?):\/\//.test(e)||(typeof r<"u"?e=r.protocol+"//"+e:e="https://"+e),n=Rr(e)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const i=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+i+":"+n.port+t,n.href=n.protocol+"://"+i+(r&&r.port===n.port?"":":"+n.port),n}const ho=typeof ArrayBuffer=="function",po=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,ns=Object.prototype.toString,mo=typeof Blob=="function"||typeof Blob<"u"&&ns.call(Blob)==="[object BlobConstructor]",go=typeof File=="function"||typeof File<"u"&&ns.call(File)==="[object FileConstructor]";function Kr(e){return ho&&(e instanceof ArrayBuffer||po(e))||mo&&e instanceof Blob||go&&e instanceof File}function Ot(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let r=0,n=e.length;r<n;r++)if(Ot(e[r]))return!0;return!1}if(Kr(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return Ot(e.toJSON(),!0);for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&Ot(e[r]))return!0;return!1}function yo(e){const t=[],r=e.data,n=e;return n.data=$r(r,t),n.attachments=t.length,{packet:n,buffers:t}}function $r(e,t){if(!e)return e;if(Kr(e)){const r={_placeholder:!0,num:t.length};return t.push(e),r}else if(Array.isArray(e)){const r=new Array(e.length);for(let n=0;n<e.length;n++)r[n]=$r(e[n],t);return r}else if(typeof e=="object"&&!(e instanceof Date)){const r={};for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=$r(e[n],t));return r}return e}function bo(e,t){return e.data=Mr(e.data,t),delete e.attachments,e}function Mr(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let r=0;r<e.length;r++)e[r]=Mr(e[r],t);else if(typeof e=="object")for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(e[r]=Mr(e[r],t));return e}const ss=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],vo=5;var g;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(g||(g={}));class ko{constructor(t){this.replacer=t}encode(t){return(t.type===g.EVENT||t.type===g.ACK)&&Ot(t)?this.encodeAsBinary({type:t.type===g.EVENT?g.BINARY_EVENT:g.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let r=""+t.type;return(t.type===g.BINARY_EVENT||t.type===g.BINARY_ACK)&&(r+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(r+=t.nsp+","),t.id!=null&&(r+=t.id),t.data!=null&&(r+=JSON.stringify(t.data,this.replacer)),r}encodeAsBinary(t){const r=yo(t),n=this.encodeAsString(r.packet),s=r.buffers;return s.unshift(n),s}}class Jr extends D{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let r;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(t);const n=r.type===g.BINARY_EVENT;n||r.type===g.BINARY_ACK?(r.type=n?g.EVENT:g.ACK,this.reconstructor=new So(r),r.attachments===0&&super.emitReserved("decoded",r)):super.emitReserved("decoded",r)}else if(Kr(t)||t.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let r=0;const n={type:Number(t.charAt(0))};if(g[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===g.BINARY_EVENT||n.type===g.BINARY_ACK){const i=r+1;for(;t.charAt(++r)!=="-"&&r!=t.length;);const o=t.substring(i,r);if(o!=Number(o)||t.charAt(r)!=="-")throw new Error("Illegal attachments");const d=Number(o);if(!is(d)||d<0)throw new Error("Illegal attachments");if(d>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=d}if(t.charAt(r+1)==="/"){const i=r+1;for(;++r&&!(t.charAt(r)===","||r===t.length););n.nsp=t.substring(i,r)}else n.nsp="/";const s=t.charAt(r+1);if(s!==""&&Number(s)==s){const i=r+1;for(;++r;){const o=t.charAt(r);if(o==null||Number(o)!=o){--r;break}if(r===t.length)break}n.id=Number(t.substring(i,r+1))}if(t.charAt(++r)){const i=this.tryParse(t.substr(r));if(Jr.isPayloadValid(n.type,i))n.data=i;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,r){switch(t){case g.CONNECT:return Ut(r);case g.DISCONNECT:return r===void 0;case g.CONNECT_ERROR:return typeof r=="string"||Ut(r);case g.EVENT:case g.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&ss.indexOf(r[0])===-1);case g.ACK:case g.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class So{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const r=bo(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function wo(e){return typeof e=="string"}const is=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e};function _o(e){return e===void 0||is(e)}function Ut(e){return Object.prototype.toString.call(e)==="[object Object]"}function Lo(e,t){switch(e){case g.CONNECT:return t===void 0||Ut(t);case g.DISCONNECT:return t===void 0;case g.EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&ss.indexOf(t[0])===-1);case g.ACK:return Array.isArray(t);case g.CONNECT_ERROR:return typeof t=="string"||Ut(t);default:return!1}}function Ao(e){return wo(e.nsp)&&_o(e.id)&&Lo(e.type,e.data)}const Eo=Object.freeze(Object.defineProperty({__proto__:null,protocol:vo,get PacketType(){return g},Encoder:ko,Decoder:Jr,isPacketValid:Ao},Symbol.toStringTag,{value:"Module"}));function G(e,t,r){return e.on(t,r),function(){e.off(t,r)}}const Ro=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class os extends D{constructor(t,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[G(t,"open",this.onopen.bind(this)),G(t,"packet",this.onpacket.bind(this)),G(t,"error",this.onerror.bind(this)),G(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...r){var n,s,i;if(Ro.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(r.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const o={type:g.EVENT,data:r};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const w=this.ids++,m=r.pop();this._registerAckCallback(w,m),o.id=w}const d=(s=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||s===void 0?void 0:s.writable,p=this.connected&&!(!((i=this.io.engine)===null||i===void 0)&&i._hasPingExpired());return this.flags.volatile&&!d||(p?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(t,r){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[t]=r;return}const i=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let d=0;d<this.sendBuffer.length;d++)this.sendBuffer[d].id===t&&this.sendBuffer.splice(d,1);r.call(this,new Error("operation has timed out"))},s),o=(...d)=>{this.io.clearTimeoutFn(i),r.apply(this,d)};o.withError=!0,this.acks[t]=o}emitWithAck(t,...r){return new Promise((n,s)=>{const i=(o,d)=>o?s(o):n(d);i.withError=!0,r.push(i),this.emit(t,...r)})}_addToQueue(t){let r;typeof t[t.length-1]=="function"&&(r=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((s,...i)=>(this._queue[0],s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(s)):(this._queue.shift(),r&&r(null,...i)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!t||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:g.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case g.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case g.EVENT:case g.BINARY_EVENT:this.onevent(t);break;case g.ACK:case g.BINARY_ACK:this.onack(t);break;case g.DISCONNECT:this.ondisconnect();break;case g.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const r=t.data||[];t.id!=null&&r.push(this.ack(t.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const r=this;let n=!1;return function(...s){n||(n=!0,r.packet({type:g.ACK,id:t,data:s}))}}onack(t){const r=this.acks[t.id];typeof r=="function"&&(delete this.acks[t.id],r.withError&&t.data.unshift(null),r.apply(this,t.data))}onconnect(t,r){this.id=t,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:g.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,t.data)}}}function Ye(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Ye.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),r=Math.floor(t*this.jitter*e);e=(Math.floor(t*10)&1)==0?e-r:e+r}return Math.min(e,this.max)|0};Ye.prototype.reset=function(){this.attempts=0};Ye.prototype.setMin=function(e){this.ms=e};Ye.prototype.setMax=function(e){this.max=e};Ye.prototype.setJitter=function(e){this.jitter=e};class Tr extends D{constructor(t,r){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(r=t,t=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,er(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Ye({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=t;const s=r.parser||Eo;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var r;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(r=this.backoff)===null||r===void 0||r.setMin(t),this)}randomizationFactor(t){var r;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(r=this.backoff)===null||r===void 0||r.setJitter(t),this)}reconnectionDelayMax(t){var r;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(r=this.backoff)===null||r===void 0||r.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new uo(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=G(r,"open",function(){n.onopen(),t&&t()}),i=d=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",d),t?t(d):this.maybeReconnectOnOpen()},o=G(r,"error",i);if(this._timeout!==!1){const d=this._timeout,p=this.setTimeoutFn(()=>{s(),i(new Error("timeout")),r.close()},d);this.opts.autoUnref&&p.unref(),this.subs.push(()=>{this.clearTimeoutFn(p)})}return this.subs.push(s),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(G(t,"ping",this.onping.bind(this)),G(t,"data",this.ondata.bind(this)),G(t,"error",this.onerror.bind(this)),G(t,"close",this.onclose.bind(this)),G(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(r){this.onclose("parse error",r)}}ondecoded(t){Zt(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,r){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new os(this,t,r),this.nsps[t]=n),n}_destroy(t){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(t){const r=this.encoder.encode(t);for(let n=0;n<r.length;n++)this.engine.write(r[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(s=>{s?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",s)):t.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const nt={};function It(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const r=fo(e,t.path||"/socket.io"),n=r.source,s=r.id,i=r.path,o=nt[s]&&i in nt[s].nsps,d=t.forceNew||t["force new connection"]||t.multiplex===!1||o;let p;return d?p=new Tr(n,t):(nt[s]||(nt[s]=new Tr(n,t)),p=nt[s]),r.query&&!t.query&&(t.query=r.queryKey),p.socket(r.path,t)}Object.assign(It,{Manager:Tr,Socket:os,io:It,connect:It});window.GUILDSYNC_WEB=!0;const Qr="guildsync-web-session";function Do(){try{return JSON.parse(localStorage.getItem(Qr)||"{}")||{}}catch{return{}}}function $o(e){localStorage.setItem(Qr,JSON.stringify(e||{}))}function as(){localStorage.removeItem(Qr)}async function Mo(){return!0}async function cs(){return!0}async function To(){return!0}async function No(){return!0}async function Co(){return!0}async function Bo(){return window.location.assign("/api/auth/discord/web-login"),!0}async function xo(){var i,o,d,p,v,w,m,k;const t=Do().token||localStorage.getItem("guildsync-web-token")||"";if(!t)return{logged_in:!1,allowed:!1,status_message:"Not logged in."};const r=await fetch("/api/auth/session",{headers:{Authorization:`Bearer ${t}`}}),n=await r.json().catch(()=>({}));if(!r.ok||n.ok===!1)return as(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:n.message||"Session expired. Please log in again."};const s={logged_in:!0,allowed:!0,token:t,user:n.user,discord_user_id:((i=n.user)==null?void 0:i.discord_user_id)||"",username:((o=n.user)==null?void 0:o.username)||"",global_name:((d=n.user)==null?void 0:d.global_name)||"",display_name:((p=n.user)==null?void 0:p.display_name)||((v=n.user)==null?void 0:v.global_name)||((w=n.user)==null?void 0:w.username)||"",avatar_url:((m=n.user)==null?void 0:m.avatar_url)||"",role:((k=n.user)==null?void 0:k.role)||"user",status_message:"Logged in."};return $o(s),s}async function Oo(){return as(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:"Logged out."}}async function Io(){return ds()}async function qo(){return ds()}async function ds(){return{watching:!1,directory:"Web upload mode",files:[{key:"banking",fileName:"GuildSyncBanking.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"},{key:"roster",fileName:"GuildSyncRoster.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"}]}}async function Fo(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function Po(){return{ok:!0}}async function Go(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function Uo(){return{ok:!0}}const $t=new Map;function st(e,t){return $t.has(e)||$t.set(e,new Set),$t.get(e).add(t),()=>{var r;return(r=$t.get(e))==null?void 0:r.delete(t)}}const tr="1.0.3",Mt={windows:{label:"Windows detected",shortLabel:"Windows",fileName:"GuildSync-windows-amd64.zip",href:"/downloads/GuildSync-windows-amd64.zip"},macos:{label:"macOS detected",shortLabel:"macOS",fileName:"GuildSync-macos.zip",href:"/downloads/GuildSync-macos.zip"},linux:{label:"Linux detected",shortLabel:"Linux",fileName:"GuildSync-linux-amd64.zip",href:"/downloads/GuildSync-linux-amd64.zip"}},Vo=30*60*1e3,ls="guildsync-pending-banking-uploads",us="guildsync-pending-roster-uploads",Ho=new Map([["GuildSyncBanking.lua","banking"],["GuildSyncRoster.lua","roster"],["GuildSyncApplications.lua","applications"]]),h=60*1e3,fs=7e3,hs=1400,ps=2400,Wo=4e3,zo=38,ms=document.querySelector("#app");let _n=null,it=null,Ln=!1,Xr=!1,qt=null,vr=!1,kr=!1,An=null,xe=0,Sr=!1,me=new Map,ke=new Map,M="",De=!1,$e=!1,dt=[],y={logged_in:!1,allowed:!1,status_message:""},l=null,C=[],rr=null,ht=!1,Vt=!1,Ht="",Oe=new Set,Ie=new Set,pt="username",Se="asc",Nr=null,Cr=null,H=[],Wt=null,ge=!1,En=!1,zt="",Br=null,xr=null,we=new Set,qe=new Set,X="",N="",$=-1,Ge=!1,mt="",I=[],ye="",le=[],ue=!1,ee="",wr=null,U=-1,Ue=!1,se="",q=[],Ve="",Me="",fe=[],he=!1,te="",Rn=null,ve=0;const jo=650;let V=-1,Ke=!1,Je=[],ie=!1,_e="",Qe=!1,gt=[],oe=!1,Le="",Xe=!1,Zr=[],ae=!1,Ae="",Ze="",Fe="",ce="",A=[],B=!1,P="",Be=!1,nr="",Z=-1,be=!1,b=null,Ee=[],He=!1,ne="",St="",W=-1,et=!1,en=null,lt=null;const tn=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let j=[],F="biweekly",gs=null,Te=!1,Re=!1,wt="biweekly",re=!1,jt=!1,Q="",_={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},tt="",J=-1,Or={biweekly:0,monthly:0};const Yo=1780786800,Ko=1781996400,Jo=14*24*60*60,Qo=28*24*60*60,Xo=60*60,Yt=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let E=Yt[0].id;function Zo(){ms.innerHTML=`
    <main class="splash-screen">
      <img src="${Di}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await Mo(),await ea(),ys(),ut(),await ft()},5e3)}async function ea(){try{y=await xo()}catch(e){y={logged_in:!1,allowed:!1,status_message:""},f("session-error",S(e),{ttlMs:h})}}function ys(){ms.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${$i}" alt="" class="title-icon" />
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
            <img src="${Mi}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${a(tr)}</div>
            </div>
          </div>
          <div class="compact-header-actions">
            ${ra()}
            <div id="discordArea" class="discord-area"></div>
          </div>
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await No()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await cs(),await Co()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await To()}),Gt(),Ss(),bi(),ni(),di(),Es(),ri(),Ys(),Ks(),Js(),Qs(),Is(),si(),ca(),pe(),je(),Ln||(window.addEventListener("resize",()=>{Ri(),Ai()}),Fd(),Ln=!0)}function ta(){var r;const t=`${((r=navigator.userAgentData)==null?void 0:r.platform)||""} ${navigator.platform||""} ${navigator.userAgent||""}`.toLowerCase();return t.includes("win")?Mt.windows:t.includes("mac")||t.includes("darwin")?Mt.macos:t.includes("linux")||t.includes("x11")?Mt.linux:{...Mt.windows,label:"Desktop client",shortLabel:"Windows"}}function ra(){const e=ta();return`
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
  `}function bs(){return Yt.map(e=>{const t=e.id===E;return`
        <button
          class="guildsync-tab${t?" active":""}"
          type="button"
          data-tab-id="${u(e.id)}"
          aria-selected="${t?"true":"false"}"
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${na(e.icon)}</span>
          <span class="guildsync-tab-label">${a(e.label)}</span>
        </button>
      `}).join("")}function na(e){return e==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:e==="swords"?"\u2694":e==="gear"?"\u2699":e==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function vs(){const e=Yt.find(r=>r.id===E)||Yt[0];let t="";return e.id==="discord-members"?t=la():e.id==="eso-members"?t=ua():e.id==="more"?t=zc():e.id==="settings"?t=Ma():t=`
      <div class="guildsync-tab-panel" data-active-tab="${u(e.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${a(e.label)} content will appear here.
        </div>
      </div>
    `,`
    ${t}
    ${re?Mc():""}
    ${be?wc():""}
    ${Ke?xa():""}
    ${Qe?Ga():""}
    ${Xe?Wa():""}
    ${Be?tc():""}
    ${et?aa():""}
  `}function sa(){return et||Ge||Ue||re||be||Ke||Qe||Xe||Be||Re}function ia(){return et?!1:Be?(Ur(),!0):Xe?(Gr(),!0):Qe?(Pr(),!0):Ke?(Fr(),!0):be?(ze(),!0):re?(re=!1,c(),!0):Ge?(Ge=!1,c(),!0):Ue?(Ue=!1,c(),!0):Re?(Re=!1,c(),!0):!1}function oa(e){e.key==="Escape"&&ia()&&(e.preventDefault(),e.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",oa,!0),window.guildSyncGlobalModalEscapeAttached=!0);function ks(e={}){return new Promise(t=>{lt&&lt(!1),et=!0,en={title:e.title||"Confirm Action",message:e.message||"Are you sure?",detail:e.detail||"",confirmLabel:e.confirmLabel||"Confirm",cancelLabel:e.cancelLabel||"Cancel",confirmClass:e.confirmClass||"danger"},lt=t,c()})}function Kt(e=!1){const t=lt;lt=null,et=!1,en=null,t&&t(e===!0),c()}function aa(){const e=en||{};return`
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
  `}function Dn(e){var n,s,i,o;const t=(s=(n=e.target).closest)==null?void 0:s.call(n,"#cancelGuildSyncConfirmButton"),r=(o=(i=e.target).closest)==null?void 0:o.call(i,"#acceptGuildSyncConfirmButton");if(!(!t&&!r)){if(e.preventDefault(),e.stopPropagation(),t){Kt(!1);return}r&&Kt(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",Dn,!0),document.addEventListener("pointerup",Dn,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function ca(){if(!et)return;const e=document.querySelector("#cancelGuildSyncConfirmButton"),t=document.querySelector("#acceptGuildSyncConfirmButton");e&&(e.onclick=n=>{n.preventDefault(),n.stopPropagation(),Kt(!1)}),t&&(t.onclick=n=>{n.preventDefault(),n.stopPropagation(),Kt(!0)});const r=document.querySelector(".guildsync-confirm-overlay");r&&(r.onclick=n=>{n.target===r&&(n.preventDefault(),n.stopPropagation())})}function Ss(){document.querySelectorAll(".guildsync-tab").forEach(e=>{e.addEventListener("click",()=>{if(sa())return;const t=e.dataset.tabId;!t||t===E||(E=t,c())})})}function da(){const e=document.querySelector(".member-links-table-shell");e&&e.scrollTop}function c(e={}){Be&&da();const t=document.querySelector(".guildsync-tabs"),r=document.querySelector("#guildSyncTabContent");t&&(t.innerHTML=bs()),r&&(r.innerHTML=vs()),Ss(),bi(),ni(),di(),Es(),ri(),Ys(),Ks(),Js(),Qs(),Is(),si(),e.restoreDiscordSearchFocus&&md(),e.restoreRosterSearchFocus&&gd(),E==="discord-members"&&(l==null?void 0:l.connected)&&C.length===0&&!ht&&pn({silent:!0}),E==="eso-members"&&(l==null?void 0:l.connected)&&H.length===0&&!ge&&!En&&(En=!0,rt({silent:!0})),E==="more"&&(l==null?void 0:l.connected)&&j.length===0&&!Te&&Lt({silent:!0}),(E==="discord-members"||E==="eso-members"||E==="settings")&&(l==null?void 0:l.connected)&&A.length===0&&!B&&_t({silent:!0})}function la(){const e=fd(),t=yd(),r=Array.from(Oe),n=Array.from(Ie);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${a(vi(rr))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${ht||Vt?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Vt?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${u(Ht)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${t.filter(s=>!Oe.has(s)).map(s=>`<option value="${u(s)}">${a(s)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All roles</span>':r.map(s=>Sd(s)).join("")}
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
              ${tn.filter(s=>!Ie.has(s.id)).map(s=>`<option value="${u(s.id)}">${a(s.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(s=>ws("discord",s)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${Nt("username","Username")}
                ${Nt("global_name","Global Name")}
                ${Nt("server_nickname","Server Nickname")}
                ${Nt("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${e.length>0?e.map(s=>bd(s)).join(""):vd()}
            </tbody>
          </table>
        </div>
      </div>
      ${Ue?_a():""}
    </div>
  `}function ua(){const e=ga(),t=va(),r=Array.from(we),n=Array.from(qe);return`
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
          <span class="discord-last-refresh">Last Refresh: ${a(Pc(Wt))}</span>
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
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${u(zt)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${t.filter(s=>!we.has(s)).map(s=>`<option value="${u(s)}">${a(s)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All ranks</span>':r.map(s=>ka(s)).join("")}
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
              ${tn.filter(s=>!qe.has(s.id)).map(s=>`<option value="${u(s.id)}">${a(s.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(s=>ws("roster",s)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${Tt("account_name","Account Name")}
                ${Tt("rank","Rank")}
                ${Tt("joined","Joined")}
                ${Tt("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${e.length>0?e.map((s,i)=>fa(s,i)).join(""):ha()}
            </tbody>
          </table>
        </div>
      </div>
      ${Ge?Ra():""}
    </div>
  `}function fa(e,t=-1){const r=pa(e.rank||""),n=r?` style="color: ${r};"`:"";return`
    <tr class="eso-roster-row${t===$?" roster-search-active-row":""}"${n} data-roster-row-index="${u(String(t))}" data-eso-account-name="${u(e.account_name||"")}">
      <td>${a(e.account_name||"")}</td>
      <td>${rn(e.rank||"")}</td>
      <td>${a(or(e.joined))}</td>
      <td class="member-link-action-cell">${Vs({mode:"eso-to-discord",esoAccountName:e.account_name})}</td>
    </tr>
  `}function ha(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">${a(ge?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function pa(e){const t=String(e||"").trim(),r=gn(t);return lr(r==null?void 0:r.role_color)}function rn(e){const t=String(e||"").trim();return`<span class="eso-roster-rank-text">${a(t)}</span>`}function ma(e){const t=String(e||"").trim();return!t||t.toLowerCase()==="unknown"?"":rn(t)}function ga(){const e=zt.trim().toLowerCase(),t=H.filter(r=>{const n=String(r.rank||"").trim();if(we.size>0&&!we.has(n)||!As(qe,Ir(r)))return!1;if(!e)return!0;const s=or(r.joined),i=dn(r.joined),o=Ir(r),d=Ls(r.account_name||"");return[r.account_name,n,s,i,r.joined,o,d].map(v=>String(v||"").toLowerCase()).join(" ").includes(e)});return ya(t)}function ya(e){if(!X||!N)return e;const t=N==="desc"?-1:1;return[...e].sort((r,n)=>{const s=$n(r,X),i=$n(n,X),o=s.localeCompare(i,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*t:String(r.account_name||"").localeCompare(String(n.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function $n(e,t){if(t==="rank")return String(e.rank||"");if(t==="joined"){const r=Number(e.joined||0);return Number.isFinite(r)&&r>0?String(r).padStart(16,"0"):""}if(t==="linked"){const r=Ir(e);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[r]||"9"} ${r} ${Ls(e.account_name||"")}`}return String(e.account_name||"")}function ba(e){const r=new Set(["account_name","rank","joined","linked"]).has(e)?e:"account_name";X!==r?(X=r,N="asc"):N==="asc"?N="desc":N==="desc"?(X="",N=""):(X=r,N="asc"),$=-1,c()}function Tt(e,t,r=""){const n=X===e&&Boolean(N),s=n?N==="asc"?"ascending":"descending":"none",i=n?N==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${u(r)}" aria-sort="${u(s)}">
      <button
        class="discord-sort-header roster-sort-header${n?" active":""}"
        type="button"
        data-roster-sort-column="${u(e)}"
        title="Sort ${u(t)}${n&&N==="asc"?" descending":n&&N==="desc"?" not sorted":" ascending"}"
      >
        <span>${a(t)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function va(){return Array.from(new Set(H.map(e=>String(e.rank||"").trim()).filter(Boolean))).sort((e,t)=>e.localeCompare(t))}function ka(e){const t=gn(e),r=lr(t==null?void 0:t.role_color),n=bn(r),s=yn(r,n);return`
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
  `}function Sa(e){const t=tn.find(r=>r.id===e);return t?t.label:e}function ws(e,t){const r=e==="roster"?"roster":"discord",n=Sa(t);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${r}-link-status-filter="${u(t)}"
      title="Remove ${u(n)} link filter"
    >
      <span>${a(n)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function _s(e){const t=Array.isArray(e)?e.filter(Boolean):e?[e]:[];return t.length===0?"unlinked":t.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked"&&String(r.link_method||"").trim().toLowerCase()==="manual")?"manual":t.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked")?"linked":t.some(r=>String(r.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function wa(e){return _s(ir(e==null?void 0:e.discord_id))}function Ir(e){return _s(sr(e==null?void 0:e.account_name))}function Ls(e){const t=sr(e),r=Us({mode:"eso-to-discord",esoAccountName:e}),n=t.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked").map(i=>i.discord_server_nickname||i.discord_display_name||i.discord_username||i.discord_user_id||"").filter(Boolean),s=t.filter(i=>String(i.link_status||"").trim().toLowerCase()==="candidate").map(i=>i.discord_server_nickname||i.discord_display_name||i.discord_username||i.discord_user_id||"").filter(Boolean);return[r.label,r.title,n.join(" "),s.join(" ")].filter(Boolean).join(" ")}function As(e,t){return!e||e.size===0||e.has(t)?!0:t==="manual"&&e.has("linked")}function _a(){return`
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
            ${La()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${Me?`: ${a(Me)}`:""}</div>
            ${Aa()}
          </div>
        </div>
      </div>
    </div>
  `}function La(){return he&&q.length===0?'<div class="roster-history-muted">Searching...</div>':q.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${q.map((e,t)=>`
        <button class="roster-history-match${t===V||e.discord_id===Ve?" is-selected":""}" type="button" data-discord-history-id="${u(e.discord_id)}" data-discord-history-name="${u(qr(e))}">
          <span>${a(qr(e))}</span>
          <strong>${a(String(e.event_count||0))} event${Number(e.event_count||0)===1?"":"s"}</strong>
          ${t===V?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Aa(){return Ve?he&&fe.length===0?'<div class="roster-history-muted">Loading history...</div>':fe.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${fe.map(e=>`
            <tr>
              <td class="roster-history-when-cell">${a(dn(e.event_timestamp||e.event_datetime||e.timestamp))}</td>
              <td>${a(Ea(e.event_type))}</td>
              <td>${a(e.old_value||"")}</td>
              <td>${a(e.new_value||"")}</td>
              <td>${a(e.source||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function qr(e={}){return String(e.server_nickname||e.global_name||e.username||e.discord_id||"").trim()}function Ea(e){return String(e||"").replaceAll("_"," ").replace(/\b\w/g,t=>t.toUpperCase())}function Ra(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(mt)}" />
        </div>

        ${ee?`<div class="discord-data-error">${a(ee)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Da()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${ye?`: ${a(ye)}`:""}</div>
            ${$a()}
          </div>
        </div>
      </div>
    </div>
  `}function Da(){return ue&&I.length===0?'<div class="roster-history-muted">Searching...</div>':I.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${I.map((e,t)=>`
        <button class="roster-history-match${t===U||e.account_name===ye?" is-selected":""}" type="button" data-roster-history-account="${u(e.account_name)}">
          <span>${a(e.account_name)}</span>
          <strong>${a(e.rank||"")}</strong>
          ${t===U?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function $a(){return ye?ue&&le.length===0?'<div class="roster-history-muted">Loading history...</div>':le.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${le.map(e=>`
            <tr>
              <td class="roster-history-when-cell">${a(dn(e.timestamp))}</td>
              <td>${a(e.event_type||"")}</td>
              <td>${ma(e.rank)}</td>
              <td>${a(e.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function nn(){return typeof window<"u"&&window.GUILDSYNC_WEB===!0}function Ma(){return`
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
  `}function Es(){var e,t,r,n;E==="settings"&&((e=document.querySelector("#runAssociateTicketReportButton"))==null||e.addEventListener("click",()=>$s()),(t=document.querySelector("#runDiscordRankAuditReportButton"))==null||t.addEventListener("click",()=>Pa()),(r=document.querySelector("#runDiscordLastSeenReportButton"))==null||r.addEventListener("click",()=>Ha()),(n=document.querySelector("#runMemberLinksReportButton"))==null||n.addEventListener("click",()=>ec()))}function Ft(){return nn()&&R()&&(l==null?void 0:l.connected)===!0}function Rs(){if(!nn())return null;let e=document.querySelector("#webSavedVarsFullScreenDropOverlay");return e||(e=document.createElement("div"),e.id="webSavedVarsFullScreenDropOverlay",e.className="web-savedvars-fullscreen-drop-overlay",e.setAttribute("aria-hidden","true"),e.innerHTML=`
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
  `,document.body.appendChild(e),e)}function Mn(){const e=Rs();!e||(e.classList.add("is-visible"),e.setAttribute("aria-hidden","false"))}function _r(){const e=document.querySelector("#webSavedVarsFullScreenDropOverlay");!e||(e.classList.remove("is-visible"),e.setAttribute("aria-hidden","true"))}function ot(e){var r;return Array.from(((r=e==null?void 0:e.dataTransfer)==null?void 0:r.types)||[]).includes("Files")}function Ta(e){!(e!=null&&e.dataTransfer)||(e.dataTransfer.dropEffect=Ft()?"copy":"none")}function Ds(e){const t=String(e||"").split(/[\\/]/).pop();return Ho.get(t)||""}function Na(){if(!nn())return;Rs();const e=t=>{!ot(t)||(t.preventDefault(),t.stopPropagation(),Ta(t))};document.addEventListener("dragenter",t=>{!ot(t)||(e(t),xe+=1,Ft()&&Mn())},!0),document.addEventListener("dragover",t=>{e(t),ot(t)&&Ft()&&Mn()},!0),document.addEventListener("dragleave",t=>{!ot(t)||(t.preventDefault(),t.stopPropagation(),xe=Math.max(0,xe-1),xe===0&&_r())},!0),document.addEventListener("drop",async t=>{var n;if(!ot(t))return;if(e(t),xe=0,_r(),!Ft()){f("web-savedvars-drop-not-ready","SavedVariables drag/drop is only available while logged in and connected to the GuildSync server.",{ttlMs:h});return}const r=Array.from(((n=t.dataTransfer)==null?void 0:n.files)||[]);await Ca(r)},!0),window.addEventListener("blur",()=>{xe=0,_r()})}async function Ca(e=[]){if(Sr){f("web-savedvars-drop-busy","A SavedVariables upload is already processing. Please wait for it to finish.",{ttlMs:h});return}const t=Array.from(e||[]).filter(Boolean);if(!t.length){f("web-savedvars-drop-empty","No file was dropped.",{ttlMs:h});return}const r=t.find(n=>!Ds(n.name));if(r){f("web-savedvars-drop-invalid",`Unsupported file: ${r.name}. Drop only GuildSyncBanking.lua, GuildSyncRoster.lua, or GuildSyncApplications.lua.`,{ttlMs:h});return}Sr=!0;try{for(const n of t)await Ba(n)}finally{Sr=!1}}async function Ba(e){const t=Ds(e.name);if(!t)throw new Error(`Unsupported file: ${e.name}`);const r=`web-savedvars-upload-${t}`,n=await e.text();if(!String(n||"").trim())throw new Error(`${e.name} is empty.`);f(r,`Uploading ${e.name}...`);try{const s=await L("guildsync:upload-savedvars-raw",{file_name:e.name,raw_lua_text:n,source:"web-drag-drop"},12e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||`${e.name} upload was rejected.`);t==="banking"?await Lt({silent:!0}):t==="roster"&&(await rt({silent:!0}),await _t({silent:!0})),f(r,s.message||`${e.name} uploaded and processed.`,{ttlMs:h})}catch(s){throw f(r,S(s),{ttlMs:h}),s}ur("version")}function $s(){Ke=!0,_e="",c(),ti()}function Fr(){Ke=!1,_e="",c()}function xa(){const e=Oa(),t=Ia(),r=Je.length;return`
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
          ${r>0?Tn("Eligible","Linked to Discord and eligible for promotion review.",e,"No linked eligible Associates found."):""}
          ${r>0?Tn("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",t,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${a(Ts())}</textarea>
      </div>
    </div>
  `}function Oa(){return Je.filter(e=>String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible")}function Ia(){return Je.filter(e=>String(e.report_group||e.eligibility_group||"").toLowerCase()!=="eligible")}function Tn(e,t,r,n){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${a(e)}</h4>
          <p>${a(t)}</p>
        </div>
        <span>${a(String(r.length))} row${r.length===1?"":"s"}</span>
      </div>
      ${r.length>0?qa(r):`<div class="roster-history-muted report-section-empty">${a(n)}</div>`}
    </section>
  `}function qa(e=Je){return`
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
              <td>${rn(t.rank||"")}</td>
              <td>${a(or(t.joined))}</td>
              <td>${a(dr(t.purchased_tickets||0))}</td>
              <td>${a(Ms(t))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Ms(e){return String(e.link_status||"").toLowerCase()==="linked"?e.discord_server_nickname||e.discord_display_name||e.discord_username||e.discord_user_id||"Linked":"Needs Link Review"}function Ts(){const e=[["Section","Account Name","Rank","Joined","Purchased Tickets","Discord Link"]];for(const t of Je){const r=String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";e.push([r,t.account_name||"",t.rank||"",or(t.joined),dr(t.purchased_tickets||0),Ms(t)])}return e.map(t=>t.map(ar).join("	")).join(`
`)}async function Fa(){const e=Ts();if(await cr(e)){f("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:h});return}const r=document.querySelector("#associateTicketReportTsv");r&&(r.focus(),r.select()),f("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:h})}function Pa(){Qe=!0,Le="",c(),ei()}function Pr(){Qe=!1,Le="",c()}function Ga(){const e=gt.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${oe?"disabled":""}>${oe?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(e))} total row${e===1?"":"s"}</span>
        </div>

        ${Le?`<div class="discord-data-error">${a(Le)}</div>`:""}

        <div class="report-results-content">
          ${oe&&e===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!oe&&e===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${e>0?Ua(gt):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${a(Bs())}</textarea>
      </div>
    </div>
  `}function Ua(e=gt){return`
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
              <td>${a(Ns(t))}</td>
              <td>${a(t.discord_rank||"No matching rank role")}</td>
              <td>${a(t.eso_accounts||"No linked ESO account")}</td>
              <td>${a(t.eso_rank||"None")}</td>
              <td>${a(Cs(t))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Ns(e){return e.server_nickname||e.global_name||e.username||e.discord_id||""}function Cs(e){const t=String(e.issue_type||"").toLowerCase();return t==="no_linked_eso_account"?"No linked ESO account":t==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":t==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":t==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":t||"Review needed"}function Bs(){const e=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const t of gt)e.push([Ns(t),t.username||"",t.discord_rank||"No matching rank role",t.discord_rank_roles||"",t.eso_accounts||"No linked ESO account",t.eso_rank||"None",Cs(t)]);return e.map(t=>t.map(ar).join("	")).join(`
`)}async function Va(){const e=Bs();if(await cr(e)){f("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:h});return}const r=document.querySelector("#discordRankAuditReportTsv");r&&(r.focus(),r.select()),f("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:h})}function Ha(){Xe=!0,Ae="",Ze="",c(),Zs(),A.length===0&&!B&&_t({silent:!0})}function Gr(){Xe=!1,Ae="",Ze="",Fe="",ce="",c()}function Wa(){const e=sn(),t=Zr.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${ae?"disabled":""}>${ae?"Loading...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(t))} Discord member${t===1?"":"s"}</span>
        </div>

        <input
          id="discordLastSeenReportSearchInput"
          class="member-links-report-search-input discord-last-seen-search-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="Search Discord member, username, last seen action, or date..."
          value="${u(Ze)}"
        />

        ${Ae?`<div class="discord-data-error discord-last-seen-report-error">${a(Ae)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${ae&&t===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!ae&&t===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${t>0?za(e):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${a(Os(e))}</textarea>
      </div>
    </div>
  `}function za(e=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${at("name","Discord Member")}</th>
            <th>${at("eso","ESO")}</th>
            <th>${at("date","Last Seen")}</th>
            <th>${at("days","Days Since")}</th>
            <th>${at("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${e.map(t=>`
            <tr class="discord-last-seen-row ${u(Xa(t.last_seen))}" data-discord-last-seen-row data-discord-last-seen-search="${u(xs(t))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${Qa(t)}
                  <span>${a(We(t))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${Ya(t)}</td>
              <td>${a(on(t.last_seen))}</td>
              <td>${a(an(t.last_seen))}</td>
              <td>${a(Jt(t.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function at(e,t){const r=Fe===e,n=r?ce==="asc"?"\u25B2":"\u25BC":"\u2195",s=r?`${t}: ${ce==="asc"?"ascending":"descending"}`:`${t}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${r?" active":""}" type="button" data-discord-last-seen-sort="${u(e)}" title="${u(s)}">
      <span>${a(t)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${a(n)}</span>
    </button>
  `}function sn(){const e=[...Zr],t=Fe,r=ce;if(!t||!r)return e;const n=r==="desc"?-1:1;return e.sort((s,i)=>{var o,d;if(t==="date"){const p=Number(s.last_seen||0)||0,v=Number(i.last_seen||0)||0;return(p-v)*n}if(t==="days")return(Nn(s.last_seen)-Nn(i.last_seen))*n;if(t==="action")return Jt(s.last_seen_action).localeCompare(Jt(i.last_seen_action),void 0,{sensitivity:"base"})*n;if(t==="eso"){const p=yt(s),v=yt(i),w={linked:0,candidate:1,unlinked:2},m=((o=w[p.status])!=null?o:9)-((d=w[v.status])!=null?d:9);return m!==0?m*n:p.esoAccountName.localeCompare(v.esoAccountName,void 0,{sensitivity:"base"})*n}return We(s).localeCompare(We(i),void 0,{sensitivity:"base"})*n})}function ja(e){Fe!==e?(Fe=e,ce="asc"):ce==="asc"?ce="desc":(Fe="",ce=""),c()}function We(e){return(e==null?void 0:e.server_nickname)||(e==null?void 0:e.global_name)||(e==null?void 0:e.username)||(e==null?void 0:e.discord_id)||""}function xs(e){return[We(e),e==null?void 0:e.server_nickname,e==null?void 0:e.global_name,e==null?void 0:e.username,e==null?void 0:e.discord_id,e==null?void 0:e.last_seen_action,Ka(e),on(e==null?void 0:e.last_seen),an(e==null?void 0:e.last_seen)].filter(Boolean).join(" ")}function yt(e){const t=lc(e==null?void 0:e.discord_id),r=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),n=String((t==null?void 0:t.eso_account_name)||"").trim();return r==="linked"&&n?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:n,title:`Linked ESO account: ${n}`}:(r==="candidate"||String((t==null?void 0:t.link_method)||"").trim().toLowerCase()==="fuzzy")&&n?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:n,title:`Fuzzy ESO account candidate: ${n}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function Ya(e){const t=yt(e);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${u(t.className)}"
      title="${u(t.title)}"
      aria-label="${u(t.label)}"
      role="img"
    ></span>
  `}function Ka(e){const t=yt(e);return[t.status,t.label,t.esoAccountName].filter(Boolean).join(" ")}function Ja(e){const t=String((e==null?void 0:e.avatar)||"").trim(),r=String((e==null?void 0:e.discord_id)||"").trim();if(!t||!r)return"";if(/^https?:\/\//i.test(t))return t;const n=t.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(t)}.${n}?size=64`}function Qa(e){const t=We(e),r=t?t.slice(0,2).toUpperCase():"?",n=Ja(e);return n?`<span class="discord-member-avatar"><img src="${u(n)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${a(r)}</span>`}function on(e){const t=Number(e);if(!t)return"Never";const r=new Date(t*1e3);if(Number.isNaN(r.getTime()))return String(e||"");const n=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(r).reduce((s,i)=>(s[i.type]=i.value,s),{});return`${n.month}/${n.day}/${n.year} ${n.hour}:${n.minute} ${n.dayPeriod}`}function Xa(e){const t=Number(e);if(!t)return"discord-last-seen-unknown";const r=(Date.now()-t*1e3)/864e5;return r>30?"discord-last-seen-red":r>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function an(e){const t=Number(e);if(!t)return"Never";const r=Date.now()-t*1e3;if(!Number.isFinite(r))return"";if(r<0)return"0 days";const n=Math.floor(r/864e5);return`${n} day${n===1?"":"s"}`}function Nn(e){const t=Number(e);if(!t)return Number.POSITIVE_INFINITY;const r=Date.now()-t*1e3;return Number.isFinite(r)?r<0?0:Math.floor(r/864e5):Number.POSITIVE_INFINITY}function Jt(e){return String(e||"").trim()||"None tracked"}function Os(e=sn()){const t=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const r of e){const n=yt(r);t.push([We(r),n.label||"",n.esoAccountName||"",on(r==null?void 0:r.last_seen),an(r==null?void 0:r.last_seen),Jt(r==null?void 0:r.last_seen_action),(r==null?void 0:r.username)||"",(r==null?void 0:r.discord_id)||""])}return t.map(r=>r.map(ar).join("	")).join(`
`)}async function Za(){const e=sn().filter(s=>{const i=K(Ze);return i?K(xs(s)).includes(i):!0}),t=Os(e);if(await cr(t)){f("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:h});return}const n=document.querySelector("#discordLastSeenReportTsv");n&&(n.focus(),n.select()),f("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:h})}function ec(){Be=!0,P="",c(),A.length===0&&!B&&_t({silent:!0})}function Ur(){Be=!1,nr="",Z=-1,c()}function tc(){return`
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
          <span class="roster-history-muted">${a(String(A.length))} link/candidate row${A.length===1?"":"s"}</span>
        </div>

        <input
          id="memberLinksReportSearchInput"
          class="member-links-report-search-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="Search ESO or Discord member links..."
          value="${u(nr)}"
        />

        ${P?`<div class="discord-data-error member-links-report-error">${a(P)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${ic()}
        </div>
      </div>
    </div>
  `}function Is(){var r,n,s;if(!Be)return;(r=document.querySelector("#closeMemberLinksReportButton"))==null||r.addEventListener("click",Ur),(n=document.querySelector("#refreshMemberLinksButton"))==null||n.addEventListener("click",()=>_t()),(s=document.querySelector("#runMemberAutoLinkButton"))==null||s.addEventListener("click",()=>cc());const e=document.querySelector("#memberLinksReportSearchInput");e&&(e.addEventListener("input",oc),e.addEventListener("keydown",ac),Fs()),document.querySelectorAll("[data-accept-member-candidate]").forEach(i=>{i.addEventListener("click",()=>Ps(i.dataset.acceptMemberCandidate||"",i.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(i=>{i.addEventListener("click",()=>dc(i.dataset.unlinkMemberLink||"",i.dataset.unlinkMemberLinkDiscordId||""))});const t=document.querySelector(".member-links-report-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Ur()})}function Cn(e){const t=String((e==null?void 0:e.link_status)||"").trim().toLowerCase();return t==="candidate"?0:t==="linked"?2:1}function Bn(e){return[e==null?void 0:e.eso_account_name,e==null?void 0:e.discord_server_nickname,e==null?void 0:e.discord_display_name,e==null?void 0:e.discord_username,e==null?void 0:e.discord_user_id].filter(Boolean).join(" ")}function rc(e){return[e==null?void 0:e.eso_account_name,e==null?void 0:e.discord_username,e==null?void 0:e.discord_display_name,e==null?void 0:e.discord_server_nickname,e==null?void 0:e.discord_user_id,e==null?void 0:e.link_status,e==null?void 0:e.link_method,e==null?void 0:e.match_reason,e==null?void 0:e.match_field,Qt(e)].filter(Boolean).join(" ")}function nc(e){return[...Array.isArray(e)?e:[]].sort((t,r)=>{const n=Cn(t)-Cn(r);if(n!==0)return n;const s=Bn(t).localeCompare(Bn(r),void 0,{sensitivity:"base"});return s!==0?s:String((t==null?void 0:t.discord_user_id)||"").localeCompare(String((r==null?void 0:r.discord_user_id)||""),void 0,{sensitivity:"base"})})}function sc(e){const t=Qt(e);let r="";t==="Username"?r=(e==null?void 0:e.discord_username)||"":t==="Global Name"?r=(e==null?void 0:e.discord_display_name)||"":t==="Server Nickname"&&(r=(e==null?void 0:e.discord_server_nickname)||""),r||(r=(e==null?void 0:e.discord_server_nickname)||(e==null?void 0:e.discord_display_name)||(e==null?void 0:e.discord_username)||(e==null?void 0:e.discord_user_id)||"");const n=t?` <span class="member-link-report-match-field">(${a(t)})</span>`:"";return`<span class="member-link-report-discord-name">${a(r)}</span>${n}`}function ic(){return B&&A.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(A)||A.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${nc(A).map(t=>{var i;const r=String(t.link_status||"").trim().toLowerCase(),n=String(t.link_method||"").trim().toLowerCase(),s=sc(t);return`
              <tr data-member-links-report-row data-member-links-report-search="${u(rc(t))}">
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
  `}function qs(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(e=>e.offsetParent!==null)}function xn(e){const t=qs();if(t.forEach(n=>n.classList.remove("member-links-report-row-active")),t.length===0){Z=-1;return}Z=Math.max(0,Math.min(e,t.length-1));const r=t[Z];r.classList.add("member-links-report-row-active"),r.scrollIntoView({block:"nearest"})}function Fs(){const e=K(nr),t=[...document.querySelectorAll("[data-member-links-report-row]")];let r=0;t.forEach(s=>{const i=K(s.dataset.memberLinksReportSearch||s.textContent||""),o=!e||i.includes(e);s.hidden=!o,s.classList.remove("member-links-report-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinksReportSearchEmpty");n&&(n.hidden=r!==0),Z=-1}function oc(e){nr=e.target.value||"",Fs()}function ac(e){if(e.key==="Enter"){e.preventDefault();return}if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;e.preventDefault();const t=qs();if(t.length===0)return;if(e.key==="ArrowDown"){const n=Z<0?0:Z+1;xn(n>=t.length?t.length-1:n);return}const r=Z<0?t.length-1:Z-1;xn(r<0?0:r)}async function _t(e={}){if(!(l!=null&&l.connected)){P="You must be connected to load member links.",c();return}B=!0,P="",e.silent||c();try{const t=await L("guildsync:request-member-links",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load member links.");A=Array.isArray(t.links)?t.links:[]}catch(t){P=S(t)}finally{B=!1,c()}}async function cc(){if(!(l!=null&&l.connected)||!y.logged_in){P="You must be logged in and connected to run auto-linking.",c();return}B=!0,P="",c();try{const e=await L("guildsync:run-member-auto-linking",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to run auto-linking.");A=Array.isArray(e.links)?e.links:[],f("member-auto-link",e.message||"Member auto-linking complete.",{ttlMs:h})}catch(e){P=S(e)}finally{B=!1,c()}}async function Ps(e,t=""){try{const r=await L("guildsync:accept-member-link-candidate",{esoAccountName:e,discordUserId:t},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to accept candidate.");A=Array.isArray(r.links)?r.links:A,f("member-link-accepted",r.message||"Candidate accepted as a link.",{ttlMs:h})}catch(r){P=S(r),f("member-link-accept-error",P,{ttlMs:h})}}async function dc(e,t=""){if(!!await ks({title:"Unlink Member?",message:`Remove the link between ${e} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const n=await L("guildsync:manual-unlink-member",{esoAccountName:e,discordUserId:t},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to unlink member.");A=Array.isArray(n.links)?n.links:A,f("member-link-unlinked",n.message||"Member link removed.",{ttlMs:h})}catch(n){P=S(n)}c()}}function Ne(e){return String(e||"").trim().replace(/^@+/,"").toLowerCase()}function sr(e){const t=Ne(e);return t?A.filter(r=>Ne(r.eso_account_name)===t):[]}function ir(e){const t=String(e||"").trim();return t?A.filter(r=>String(r.discord_user_id||"").trim()===t):[]}function Gs(e=[]){const t=Array.isArray(e)?e.filter(Boolean):[];if(t.length===0)return null;const r=t.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked");if(r.length>0){const s=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(s)return s;const i=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return i||r[0]}const n=t.find(s=>String(s.link_status||"").trim().toLowerCase()==="candidate");return n||t[0]}function lc(e){return Gs(ir(e))}function uc(e){return`${Ne(e==null?void 0:e.eso_account_name)}::${String((e==null?void 0:e.discord_user_id)||"").trim()}`}function cn(){return b?b.mode==="discord-to-eso"?ir(b.discordUserId):sr(b.esoAccountName):[]}function fc(e){const t=String(e||"").trim(),r=C.find(n=>String(n.discord_id||"").trim()===t);return r&&(r.server_nickname||r.global_name||r.username||r.discord_id)||t}function Us(e){const t=(e==null?void 0:e.mode)||"",r=t==="discord-to-eso"?ir(e.discordUserId):sr(e.esoAccountName),n=Gs(r),s=String((n==null?void 0:n.link_status)||"").trim().toLowerCase(),i=r.filter(d=>String(d.link_status||"").trim().toLowerCase()==="linked").length,o=r.filter(d=>String(d.link_status||"").trim().toLowerCase()==="candidate").length;return i>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${t==="discord-to-eso"?i===1?n.eso_account_name:`${i} ESO accounts`:i===1?n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member":`${i} Discord accounts`}`}:s==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${t==="discord-to-eso"?n.eso_account_name:n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member"}`}:s==="blocked"||Number((n==null?void 0:n.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function Vs(e){const t=(e==null?void 0:e.mode)||"",r=t==="discord-to-eso"?e.discordUserId:e.esoAccountName,n=Us(e);return`
    <button
      class="member-link-status-dot member-link-status-${u(n.className)}"
      type="button"
      title="${u(n.title)}"
      aria-label="${u(n.label)}"
      data-open-member-link-dialog="${u(t)}"
      data-member-link-value="${u(r||"")}"
    ></button>
  `}function hc(){return b?b.mode==="discord-to-eso"?fc(b.discordUserId):b.esoAccountName||"":""}function Hs(e){const t=String(e||"").trim().toLowerCase();return t==="discord_username"||t==="username"?"Username":t==="discord_display_name"||t==="global_name"||t==="display_name"?"Global Name":t==="discord_server_nickname"||t==="server_nickname"||t==="nickname"?"Server Nickname":""}function Qt(e){const t=Hs((e==null?void 0:e.match_field)||(e==null?void 0:e.matched_field)||(e==null?void 0:e.discord_match_field));if(t)return t;const r=String((e==null?void 0:e.match_reason)||"").toLowerCase();if(r.includes("discord_username")||r.includes("username"))return"Username";if(r.includes("discord_display_name")||r.includes("global")||r.includes("display"))return"Global Name";if(r.includes("discord_server_nickname")||r.includes("server")||r.includes("nickname"))return"Server Nickname";const n=String((e==null?void 0:e.link_method)||"").trim().toLowerCase();if(n==="exact"||n==="fuzzy"){const s=(e==null?void 0:e.eso_account_name)||"",i=[{field:"Username",value:e==null?void 0:e.discord_username},{field:"Global Name",value:e==null?void 0:e.discord_display_name},{field:"Server Nickname",value:e==null?void 0:e.discord_server_nickname}];let o=null;for(const d of i){const p=pc(s,d.value);(!o||p>o.score)&&(o={...d,score:p})}if(o&&o.score>0)return o.field}return""}function K(e){return String(e||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function pc(e,t){const r=K(e),n=K(t);if(!r||!n)return 0;if(r===n)return 100;if((r.includes(n)||n.includes(r))&&Math.min(r.length,n.length)>=4)return 88;const s=Math.abs(r.length-n.length),i=[...r].findIndex((d,p)=>d!==n[p]),o=i===-1?Math.min(r.length,n.length):i;return Math.max(0,Math.min(75,Math.round(o*10-s*3)))}function mc(e){const t=String(e||"").trim().toLowerCase();return t==="blocked"||t==="unlinked"?"unlinked":t||"unlinked"}function gc(e){const t=String(e||"").trim().toLowerCase();return t==="manual_unlink"?"auto-link disabled":t||"none"}function yc(e){const t=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),r=mc(e==null?void 0:e.link_status);return`<span class="${t==="linked"?"member-link-status-word member-link-status-word-linked":t==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${a(r)}</span>`}function bc(e){var d;const t=e.discord_server_nickname||e.discord_display_name||e.discord_username||e.discord_user_id||"",r=Number(e.locked||0)===1?"Auto-link blocked":"Auto-managed",n=String(e.link_status||"").trim().toLowerCase(),o=n==="linked"?`<button
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
        <div><span>Status:</span> ${yc(e)} \xB7 ${a(gc(e.link_method))} \xB7 ${a(String((d=e.match_confidence)!=null?d:""))}% \xB7 ${a(r)}</div>
        ${Qt(e)?`<div><span>Matched:</span> Matched on ${a(Qt(e))}</div>`:""}
      </div>
      ${o}
    </div>
  `}function vc(){const e=cn();return e.length?[...e].sort((r,n)=>{var p,v;const s=String(r.link_status||"").trim().toLowerCase(),i=String(n.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},d=((p=o[s])!=null?p:9)-((v=o[i])!=null?v:9);return d!==0?d:Number(n.match_confidence||0)-Number(r.match_confidence||0)}).map(r=>bc(r)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function kc(){if(He)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(ne)return`<div class="discord-data-error">${a(ne)}</div>`;if(!Array.isArray(Ee)||Ee.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const e=new Set(cn().map(r=>uc(r))),t=[...Ee].filter(r=>{const n=(b==null?void 0:b.mode)==="discord-to-eso"?`${Ne(r.account_name)}::${String(b.discordUserId||"").trim()}`:`${Ne(b==null?void 0:b.esoAccountName)}::${String(r.discord_id||"").trim()}`;return!e.has(n)}).sort((r,n)=>{const s=Number(n.confidence||0)-Number(r.confidence||0);return s!==0?s:On(r).localeCompare(On(n),void 0,{sensitivity:"base"})});return t.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${t.map(r=>Sc(r)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function On(e){return((b==null?void 0:b.mode)||"")==="discord-to-eso"?String(e.account_name||""):String(e.server_nickname||e.global_name||e.username||e.discord_id||"")}function Sc(e,t={}){var m,k,x;const r=(b==null?void 0:b.mode)||"",n=r==="discord-to-eso"?e.account_name:e.server_nickname||e.global_name||e.username||e.discord_id||"Discord member",s=Hs(e.matchField||e.match_field||e.discordMatchField||e.discord_match_field),i=r==="discord-to-eso"?`Rank: ${e.rank||""}`:[e.username,e.global_name,e.server_nickname].filter(Boolean).join(" \xB7 "),o=[i,s?`Matched on ${s}`:""].filter(Boolean).join(" \u2022 "),d=r==="discord-to-eso"?e.account_name:e.discord_id,p=t.disabled===!0,v=[n,i,o,e.account_name,e.username,e.global_name,e.server_nickname,e.discord_id].filter(Boolean).join(" "),w=[n,o,`${(m=e.confidence)!=null?m:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${u(d||"")}" data-member-link-option-search="${u(v)}" title="${u(w)}" ${p?"disabled":""}>
      <span class="member-link-option-name" title="${u(n||"")}">${a(n||"")}</span>
      <span class="member-link-option-subtitle" title="${u(o||"")}">${a(o||"")}</span>
      <span class="member-link-option-confidence" title="${u(String((k=e.confidence)!=null?k:0))}%">${a(String((x=e.confidence)!=null?x:0))}%</span>
    </button>
  `}function wc(){const e=(b==null?void 0:b.mode)||"",t=hc(),r=e==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
            ${vc()}
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
              value="${u(St)}"
            />
            ${kc()}
          </section>
        </div>

      </div>
    </div>
  `}async function Ws(e,t){if(!(l!=null&&l.connected)||!R()){f("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:h});return}be=!0,b=e==="discord-to-eso"?{mode:e,discordUserId:t}:{mode:"eso-to-discord",esoAccountName:t},Ee=[],He=!0,ne="",St="",W=-1,c();try{if(!Array.isArray(A)||A.length===0){const s=await L("guildsync:request-member-links",{},3e4);s!=null&&s.ok&&(A=Array.isArray(s.links)?s.links:[])}const n=await L("guildsync:request-member-link-options",e==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:t}:{mode:"eso-to-discord",accountName:t},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load link suggestions.");Ee=Array.isArray(n.options)?n.options:[]}catch(r){ne=S(r)}finally{He=!1,c()}}function ze(){document.removeEventListener("keydown",Vr),be=!1,b=null,Ee=[],He=!1,ne="",St="",W=-1,c()}function zs(){return[...document.querySelectorAll(".member-link-option-row")].filter(e=>e.offsetParent!==null&&!e.disabled)}function In(e){const t=zs();if(t.forEach(n=>n.classList.remove("member-link-option-row-active")),t.length===0){W=-1;return}W=Math.max(0,Math.min(e,t.length-1));const r=t[W];r.classList.add("member-link-option-row-active"),r.scrollIntoView({block:"nearest"})}function js(){const e=K(St),t=[...document.querySelectorAll(".member-link-option-row")];let r=0;t.forEach(s=>{const i=K(s.dataset.memberLinkOptionSearch||s.textContent||""),o=!e||i.includes(e);s.hidden=!o,s.classList.remove("member-link-option-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinkSuggestionSearchEmpty");n&&(n.hidden=r!==0),W=-1}function _c(e){St=e.target.value||"",js()}function Lc(e){if(e.key==="Enter"){e.preventDefault();return}if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;e.preventDefault();const t=zs();if(t.length===0)return;if(e.key==="ArrowDown"){const n=W<0?0:W+1;In(n>=t.length?t.length-1:n);return}const r=W<0?t.length-1:W-1;In(r<0?0:r)}function Vr(e){!be||e.key==="Escape"&&(e.preventDefault(),ze())}async function Ac(e){if(!(!b||!e))try{const t=b.mode==="discord-to-eso"?{esoAccountName:e,discordUserId:b.discordUserId}:{esoAccountName:b.esoAccountName,discordUserId:e},r=await L("guildsync:manual-link-member",t,3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to link members.");A=Array.isArray(r.links)?r.links:A,f("member-link-saved",r.message||"Member link saved.",{ttlMs:h}),ze()}catch(t){ne=S(t),c()}}async function Ec(e,t=""){await Ps(e,t),ze()}async function Rc(){if(!!b){He=!0,ne="",c();try{const e=b.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:b.discordUserId}:{mode:"eso-to-discord",accountName:b.esoAccountName},t=await L("guildsync:request-member-link-options",e,3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load link suggestions.");Ee=Array.isArray(t.options)?t.options:[]}catch(e){ne=S(e)}finally{He=!1,c()}}}async function Dc(e="",t=""){const r=cn().find(s=>Ne(s.eso_account_name)===Ne(e)&&String(s.discord_user_id||"").trim()===String(t||"").trim());if(!(!r||!await ks({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const s=await L("guildsync:manual-unlink-member",{esoAccountName:r.eso_account_name,discordUserId:r.discord_user_id},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to unlink member.");A=Array.isArray(s.links)?s.links:A,f("member-link-unlinked",s.message||"Member link removed.",{ttlMs:h}),await Rc()}catch(s){ne=S(s),c()}}function Ys(){var r;if(!be)return;document.removeEventListener("keydown",Vr),document.addEventListener("keydown",Vr),(r=document.querySelector("#closeMemberLinkDialogButton"))==null||r.addEventListener("click",ze);const e=document.querySelector("#memberLinkSuggestionSearchInput");e&&(e.addEventListener("input",_c),e.addEventListener("keydown",Lc),js()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(n=>{n.addEventListener("click",()=>Dc(n.dataset.unlinkEsoAccount||"",n.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(n=>{n.addEventListener("click",()=>Ac(n.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(n=>{n.addEventListener("click",()=>Ec(n.dataset.acceptDialogMemberCandidate||"",n.dataset.acceptDialogDiscordUserId||""))});const t=document.querySelector(".member-link-dialog-overlay");t&&t.addEventListener("click",n=>{n.target===t&&ze()})}function Ks(){var t,r,n;if(!Ke)return;(t=document.querySelector("#closeAssociateTicketReportButton"))==null||t.addEventListener("click",Fr),(r=document.querySelector("#rerunAssociateTicketReportButton"))==null||r.addEventListener("click",()=>ti()),(n=document.querySelector("#copyAssociateTicketReportGridButton"))==null||n.addEventListener("click",()=>Fa());const e=document.querySelector(".report-results-overlay");e&&e.addEventListener("click",s=>{s.target===e&&Fr()})}function Js(){var t,r,n;if(!Qe)return;(t=document.querySelector("#closeDiscordRankAuditReportButton"))==null||t.addEventListener("click",Pr),(r=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||r.addEventListener("click",()=>ei()),(n=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||n.addEventListener("click",()=>Va());const e=document.querySelector(".report-results-overlay");e&&e.addEventListener("click",s=>{s.target===e&&Pr()})}function Qs(){var r,n,s;if(!Xe)return;(r=document.querySelector("#closeDiscordLastSeenReportButton"))==null||r.addEventListener("click",Gr),(n=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||n.addEventListener("click",()=>Zs()),(s=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||s.addEventListener("click",()=>Za()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(i=>{i.addEventListener("click",()=>ja(i.dataset.discordLastSeenSort||""))});const e=document.querySelector("#discordLastSeenReportSearchInput");e&&(e.addEventListener("input",$c),Xs());const t=document.querySelector(".discord-last-seen-report-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Gr()})}function $c(e){Ze=e.target.value||"",Xs()}function Xs(){const e=K(Ze),t=[...document.querySelectorAll("[data-discord-last-seen-row]")];let r=0;t.forEach(s=>{const i=K(s.dataset.discordLastSeenSearch||s.textContent||""),o=!e||i.includes(e);s.hidden=!o,o&&(r+=1)});const n=document.querySelector("#discordLastSeenReportSearchEmpty");n&&(n.hidden=r!==0)}async function Zs(){if(!(l!=null&&l.connected)||!R()){Ae="You must be logged in and connected to run this report.",c();return}ae=!0,Ae="",c();try{const e=await L("guildsync:request-discord-member-dataJSON",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load Discord roster data.");C=mn(e.members),Zr=[...C]}catch(e){Ae=S(e)}finally{ae=!1,c(),T("discordLastSeenReportSearchInput")}}async function ei(){if(!(l!=null&&l.connected)||!R()){Le="You must be logged in and connected to run this report.",c();return}oe=!0,Le="",c();try{const e=await L("guildsync:request-discord-rank-audit-report",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to run report.");gt=Array.isArray(e.rows)?e.rows:[]}catch(e){Le=S(e)}finally{oe=!1,c()}}async function ti(){if(!(l!=null&&l.connected)||!R()){_e="You must be logged in and connected to run this report.",c();return}ie=!0,_e="",c();try{const e=await L("guildsync:request-associate-ticket-report",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to run report.");Je=Array.isArray(e.rows)?e.rows:[]}catch(e){_e=S(e)}finally{ie=!1,c()}}function Hr(){const e=String(tt||"").trim().toLowerCase();return e?H.filter(t=>String(t.account_name||"").trim()).filter(t=>String(t.account_name||"").toLowerCase().includes(e)).slice().sort((t,r)=>{const n=String(t.account_name||"").toLowerCase(),s=String(r.account_name||"").toLowerCase(),i=n.startsWith(e)?0:1,o=s.startsWith(e)?0:1;return i!==o?i-o:n.localeCompare(s)}).slice(0,20):[]}function qn(e){const t=String(e||"").trim();_.accountName=t,tt=t,Q="",c(),T("manualTicketAccountSearchInput")}function T(e){window.setTimeout(()=>{const t=document.querySelector(`#${e}`);if(!t)return;t.focus();const r=String(t.value||"").length;typeof t.setSelectionRange=="function"&&t.setSelectionRange(r,r)},0)}function Mc(){const e=Hr(),t=String(_.accountName||"").trim();return`
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
            <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(tt)}" autocomplete="off" />
          </label>

          ${t?`<div class="roster-history-muted">Selected: ${a(t)}</div>`:""}

          <div class="roster-history-match-list manual-ticket-match-list">
            ${e.length===0?'<div class="roster-history-muted">No matching names</div>':e.map((r,n)=>`
                <button class="roster-history-match${n===J||r.account_name===t?" is-selected":""}" type="button" data-manual-ticket-account="${u(r.account_name)}">
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
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${jt?"disabled":""}>${jt?"Saving...":"Add Manual Tickets"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function ri(){var i,o,d,p,v,w;if(!re)return;(i=document.querySelector("#closeManualBiweeklyTicketButton"))==null||i.addEventListener("click",()=>{re=!1,c()});const e=document.querySelector("#manualTicketAccountSearchInput");e&&(e.addEventListener("input",m=>{tt=m.target.value||"",_.accountName="",J=Hr().length>0?0:-1,c(),T("manualTicketAccountSearchInput")}),e.addEventListener("keydown",m=>{const k=Hr();if(m.key==="ArrowDown"||m.key==="ArrowUp"){if(k.length===0)return;m.preventDefault();const Et=m.key==="ArrowDown"?1:-1;J=((J<0?0:J)+Et+k.length)%k.length,c(),T("manualTicketAccountSearchInput");return}if(m.key!=="Enter")return;m.preventDefault();const x=k[J>=0?J:0];x!=null&&x.account_name&&qn(x.account_name)})),document.querySelectorAll("[data-manual-ticket-account]").forEach(m=>{m.addEventListener("click",()=>{qn(m.dataset.manualTicketAccount||"")})}),(o=document.querySelector("#manualTicketNoteInput"))==null||o.addEventListener("input",m=>{_.note=m.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(m=>{m.addEventListener("click",()=>{const k=String(m.dataset.manualTicketType||"").trim().toLowerCase();_.ticketType=k==="monthly"?"monthly":"biweekly",c()})}),(d=document.querySelector("[data-manual-ticket-toggle]"))==null||d.addEventListener("click",()=>{_.ticketType=_.ticketType==="monthly"?"biweekly":"monthly",c()});const t=document.querySelector("#manualTicketGoldInput");t==null||t.addEventListener("input",m=>{const k=String(m.target.value||"").replace(/\D/g,"");m.target.value!==k&&(m.target.value=k),_.goldValue=k});const r=document.querySelector("#manualTicketCountInput");r==null||r.addEventListener("input",m=>{const k=String(m.target.value||"").replace(/\D/g,"");m.target.value!==k&&(m.target.value=k),_.tickets=k});const n=m=>{const k=Number(_.tickets)||0,x=Math.max(1,k+m);_.tickets=String(x),r&&(r.value=_.tickets,r.focus())};(p=document.querySelector("#manualTicketCountUpButton"))==null||p.addEventListener("click",()=>n(1)),(v=document.querySelector("#manualTicketCountDownButton"))==null||v.addEventListener("click",()=>n(-1)),(w=document.querySelector("#saveManualBiweeklyTicketButton"))==null||w.addEventListener("click",()=>Tc());const s=document.querySelector(".roster-history-overlay");s&&s.addEventListener("click",m=>{m.target===s&&(re=!1,c())})}async function Tc(){const e=String(_.accountName||"").trim(),t=String(_.note||"").trim(),r=String(_.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",n=Number(String(_.goldValue||"").trim()||0),s=Number(_.tickets);if(!e){Q="Choose a guild member.",c();return}if(!Number.isFinite(n)||n<0){Q="Gold value must be zero or greater.",c();return}if(!Number.isFinite(s)||s<=0){Q="Enter the number of tickets to add.",c();return}jt=!0,Q="",c();try{const i=await L("guildsync:add-manual-biweekly-ticket-entry",{account_name:e,note:t,ticket_type:r,gold_value:Math.floor(n),tickets:Math.floor(s)},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to add manual ticket entry.");re=!1,_={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},tt="",J=-1,await Lt({silent:!0}),f("manual-ticket-added",i.message||"Manual ticket entry added.",{ttlMs:h})}catch(i){Q=S(i)}finally{jt=!1,c()}}function ni(){const e=document.querySelector("#refreshRosterDataButton");e&&e.addEventListener("click",()=>rt());const t=document.querySelector("#openRosterHistoryButton");t&&t.addEventListener("click",()=>{Ge=!0,ee="",c()});const r=document.querySelector("#rosterMemberSearch");r&&(r.addEventListener("input",o=>{zt=o.target.value||"",Br=o.target.selectionStart,xr=o.target.selectionEnd,$=-1,c({restoreRosterSearchFocus:!0})}),r.addEventListener("keydown",Nc)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{ba(o.dataset.rosterSortColumn||"account_name")})});const n=document.querySelector("#rosterRankFilter");n&&n.addEventListener("change",o=>{const d=String(o.target.value||"").trim();d&&(we.add(d),$=-1,c())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const d=o.dataset.removeRosterRankFilter||"";we.delete(d),$=-1,c()})});const s=document.querySelector("#rosterLinkStatusFilter");s&&s.addEventListener("change",o=>{const d=String(o.target.value||"").trim();d&&(qe.add(d),$=-1,c())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const d=o.dataset.removeRosterLinkStatusFilter||"";qe.delete(d),$=-1,c()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>Ws(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const i=document.querySelector("#clearRosterFiltersButton");i&&i.addEventListener("click",()=>{zt="",we.clear(),qe.clear(),X="",N="",$=-1,c()}),Cc()}function Nc(e){if(e.key!=="ArrowDown"&&e.key!=="ArrowUp"&&e.key!=="Enter")return;if(e.key==="Enter"){e.preventDefault();return}const t=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(t.length===0){$=-1;return}e.preventDefault(),e.key==="ArrowDown"?$=$<0?0:Math.min($+1,t.length-1):e.key==="ArrowUp"&&($=$<0?t.length-1:Math.max($-1,0)),t.forEach((n,s)=>{n.classList.toggle("roster-search-active-row",s===$)});const r=t[$];r&&typeof r.scrollIntoView=="function"&&r.scrollIntoView({block:"nearest",inline:"nearest"})}function Cc(){const e=document.querySelector("#closeRosterHistoryButton");e&&e.addEventListener("click",()=>{Ge=!1,c()});const t=document.querySelector("#rosterHistorySearchInput");t&&(t.addEventListener("input",r=>{if(mt=r.target.value||"",U=-1,!mt.trim()){clearTimeout(wr),ee="",I=[],ye="",le=[],ue=!1,c(),T("rosterHistorySearchInput");return}clearTimeout(wr),wr=setTimeout(()=>{Ic({auto:!0,keepFocus:!0})},250)}),t.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(I.length===0)return;r.preventDefault();const s=r.key==="ArrowDown"?1:-1;U=((U<0?0:U)+s+I.length)%I.length,c(),T("rosterHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=I[U>=0?U:0];n!=null&&n.account_name&&Pn(n.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(r=>{r.addEventListener("click",()=>{Pn(r.dataset.rosterHistoryAccount||"")})})}function si(){const e=document.querySelector("#closeDiscordHistoryButton");e&&e.addEventListener("click",()=>{Ue=!1,c()});const t=document.querySelector("#discordHistorySearchInput");t&&(t.addEventListener("input",r=>{se=r.target.value||"",V=-1,ve+=1;const n=ve;if(clearTimeout(Rn),!se.trim()){te="",q=[],Ve="",Me="",fe=[],he=!1,c(),T("discordHistorySearchInput");return}Rn=setTimeout(()=>{Bc({auto:!0,keepFocus:!0,generation:n})},jo)}),t.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(q.length===0)return;r.preventDefault();const s=r.key==="ArrowDown"?1:-1;V=((V<0?0:V)+s+q.length)%q.length,c(),T("discordHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=q[V>=0?V:0];n!=null&&n.discord_id&&Fn(n.discord_id,qr(n))})),document.querySelectorAll("[data-discord-history-id]").forEach(r=>{r.addEventListener("click",()=>{Fn(r.dataset.discordHistoryId||"",r.dataset.discordHistoryName||"")})})}async function Bc(e={}){const t=Number.isInteger(e.generation)?e.generation:++ve,r=se.trim();if(t===ve){if(!r){te="",q=[],V=-1,Ve="",Me="",fe=[],he=!1,c(),e.keepFocus&&T("discordHistorySearchInput");return}he=!0,te="",q=[],V=-1,Ve="",Me="",fe=[],c(),e.keepFocus&&T("discordHistorySearchInput");try{const n=await L("guildsync:request-discord-member-history",{query:r},3e4);if(t!==ve||r!==se.trim())return;if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search Discord member history.");q=xc(n.matches),V=q.length>0?0:-1}catch(n){if(t!==ve||r!==se.trim())return;te=S(n)}finally{if(t!==ve||r!==se.trim())return;he=!1,c(),e.keepFocus&&T("discordHistorySearchInput")}}}async function Fn(e,t="",r={}){const n=String(e||"").trim();if(!!n){Ve=n,Me=String(t||n).trim(),se=Me,fe=[],he=!0,te="",c();try{const s=await L("guildsync:request-discord-member-history-events",{discord_id:n},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to load Discord member history.");fe=Oc(s.events)}catch(s){te=S(s)}finally{he=!1,r.keepLoading||c()}}}function xc(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>({discord_id:String(t.discord_id||t.discordID||"").trim(),username:String(t.username||"").trim(),global_name:String(t.global_name||t.globalName||"").trim(),server_nickname:String(t.server_nickname||t.serverNickname||"").trim(),event_count:Number(t.event_count||t.eventCount||0)})).filter(t=>t.discord_id):[]}function Oc(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>{var r,n,s,i,o,d,p,v,w;return{event_type:String(t.event_type||t.eventType||"").trim(),field_name:String(t.field_name||t.fieldName||"").trim(),old_value:String((n=(r=t.old_value)!=null?r:t.oldValue)!=null?n:"").trim(),new_value:String((i=(s=t.new_value)!=null?s:t.newValue)!=null?i:"").trim(),event_timestamp:(p=(d=(o=t.event_timestamp)!=null?o:t.eventTimestamp)!=null?d:t.timestamp)!=null?p:"",event_datetime:(w=(v=t.event_datetime)!=null?v:t.eventDatetime)!=null?w:"",source:String(t.source||"").trim()}}):[]}async function Ic(e={}){const t=mt.trim();if(!t){ee="",I=[],U=-1,ye="",le=[],ue=!1,c(),e.keepFocus&&T("rosterHistorySearchInput");return}ue=!0,ee="",I=[],U=-1,ye="",le=[],c(),e.keepFocus&&T("rosterHistorySearchInput");try{const r=await L("guildsync:request-roster-rank-history",{query:t},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search roster rank history.");I=qc(r.matches),U=I.length>0?0:-1}catch(r){ee=S(r)}finally{ue=!1,c(),e.keepFocus&&T("rosterHistorySearchInput")}}async function Pn(e,t={}){const r=String(e||"").trim();if(!!r){ye=r,mt=r,le=[],ue=!0,ee="",c();try{const n=await L("guildsync:request-roster-stream-history",{account_name:r},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster stream history.");le=Fc(n.events)}catch(n){ee=S(n)}finally{ue=!1,t.keepLoading||c()}}}function qc(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>({account_name:String(t.account_name||t.accountName||"").trim(),rank:String(t.rank||t.rankName||"").trim()})):[]}function Fc(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>{var r,n;return{event_type:String(t.event_type||t.eventType||"").trim(),rank:String(t.rank||t.rankName||"").trim(),timestamp:(n=(r=t.timestamp)!=null?r:t.timestampS)!=null?n:"",officer:String(t.officer||"").trim()}}):[]}function ii(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>{var r;return{account_name:String(t.account_name||t.accountName||"").trim(),rank:String(t.rank||t.rankName||"").trim(),joined:(r=t.joined)!=null?r:""}}).sort((t,r)=>t.account_name.localeCompare(r.account_name)):[]}function Pc(e){if(!e)return"Never";const t=new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleString()}function or(e){const t=Number(e);return t?new Date(t*1e3).toLocaleDateString():""}function dn(e){const t=Number(e);return t?new Date(t*1e3).toLocaleString():""}async function Gc(e={}){H=ii(e.members),Wt=e.last_refresh||new Date().toISOString(),E==="eso-members"&&c(),f("roster-data-updated",`Roster data updated. Loaded ${H.length} member record${H.length===1?"":"s"}.`,{ttlMs:h})}async function rt(e={}){if(!!(l!=null&&l.connected)){ge=!0,c();try{const t=await L("guildsync:request-roster-data",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to retrieve roster data.");H=ii(t.members),Wt=t.last_refresh||Wt,e.silent||f("roster-data-loaded",`Loaded ${H.length} roster member${H.length===1?"":"s"}.`,{ttlMs:h})}catch(t){f("roster-data-error",S(t),{ttlMs:h})}finally{ge=!1,c()}}}async function Uc(e={}){var t;if(!!R()){if(!(l!=null&&l.connected)){f("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:h});return}ge=!0,c();try{const r=await Go(e);if(!(r!=null&&r.ok)){f("roster-data-pending",(r==null?void 0:r.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:h});return}const n={local_upload_id:oi(),authenticated_username:Ce(),authenticated_discord_user_id:((t=y==null?void 0:y.user)==null?void 0:t.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||e.fileName||"",file_path:r.filePath||e.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await ci(n)}catch(s){throw Vc(n),s}await rt({silent:!0})}catch(r){f("roster-data-error",S(r),{ttlMs:h})}finally{ge=!1,c()}}}function oi(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function ln(){try{const e=window.localStorage.getItem(us),t=e?JSON.parse(e):[];return Array.isArray(t)?t.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function ai(e){window.localStorage.setItem(us,JSON.stringify(Array.isArray(e)?e:[]))}function Vc(e){const t=String((e==null?void 0:e.local_upload_id)||oi()),r=ln().filter(n=>(n==null?void 0:n.local_upload_id)!==t);r.push({...e,local_upload_id:t,pending_saved_at:new Date().toISOString()}),ai(r),f("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:h})}function Hc(e){const t=ln().filter(r=>(r==null?void 0:r.local_upload_id)!==e);ai(t)}async function Wc(){if(kr||!(l!=null&&l.connected)||!R())return;const e=ln();if(e.length!==0){kr=!0;try{for(const t of e){if(!(l!=null&&l.connected)||!R())return;await ci(t),Hc(t.local_upload_id)}}catch(t){f("roster-data-pending-error",`Pending roster upload retry failed: ${S(t)}`,{ttlMs:h})}finally{kr=!1}}}async function ci(e){if(!(l!=null&&l.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const t=await L("guildsync:sending-roster-data",e,3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const r=await Uo(e.file_path||"",e.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return f("roster-data-sent",t.message||"Roster data sent to GuildSync backend.",{ttlMs:h}),t}function zc(){const e=Wr(F),t=ed(e),r=F!=="other";return`
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
          <span class="discord-last-refresh">Last Refresh: ${a(vi(gs))}</span>
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

        ${Jc(F)}

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
              ${e.length>0?e.map(n=>td(n,r)).join(""):rd(r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${a(fi(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${r?`<div>Total Tickets Awarded: <strong>${a(dr(t.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${Re?jc(Wr(wt)):""}
    </div>
  `}function jc(e){return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${a(Pe(wt))} Deposits</h3>
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
              ${e.length>0?e.map(t=>Yc(t)).join(""):Kc()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${a(li(e))}</textarea>
      </div>
    </div>
  `}function Yc(e){return`
    <tr>
      <td>${a(e.displayName||"")}</td>
      <td>${a(String(Number(e.amount)||0))}</td>
      <td>${a(String(Number(e.ticketAmount)||0))}</td>
      <td>${a(e.note||"")}</td>
    </tr>
  `}function Kc(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${a(Pe(wt))}.</td>
    </tr>
  `}function Jc(e){if(e==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const t=ui(e),r=un(e),n=r<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${u(Pe(e))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${a(Pe(e))} Raffle Period ${r===0?"(Current)":`(${Math.abs(r)} period${Math.abs(r)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${a(Pt(t.salesStart))} through ${a(Pt(t.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${a(Pt(t.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${n?"":"disabled"} aria-label="Next ${u(Pe(e))} raffle period">\u203A</button>
    </div>
  `}function Lr(e,t,r,n){const s=F===e;return`
    <button class="bank-section-card${s?" active":""}" type="button" data-bank-section="${u(e)}" aria-selected="${s?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${a(t)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${a(r)}</span>
        <span class="bank-section-subtitle">${a(n)}</span>
      </span>
    </button>
  `}function di(){if(E!=="more")return;document.querySelectorAll("[data-bank-section]").forEach(i=>{i.addEventListener("click",()=>{F=i.dataset.bankSection||"biweekly",c()})}),document.querySelectorAll("[data-bank-export-section]").forEach(i=>{i.addEventListener("click",()=>{wt=(i.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",Re=!0,c()})}),document.querySelectorAll("[data-bank-period-move]").forEach(i=>{i.addEventListener("click",()=>{Zc(i.dataset.bankPeriodMove||""),c()})});const e=document.querySelector("#closeBankingExportGridButton");e&&e.addEventListener("click",()=>{Re=!1,c()});const t=document.querySelector("#copyBankingExportGridButton");t&&t.addEventListener("click",()=>Qc());const r=document.querySelector(".bank-export-overlay");r&&r.addEventListener("click",i=>{i.target===r&&(Re=!1,c())});const n=document.querySelector("#openManualBiweeklyTicketButton");n&&n.addEventListener("click",async()=>{if(!R()){f("manual-ticket-login-required","Login required to add manual tickets.",{ttlMs:h});return}re=!0,Q="",tt=_.accountName||"",H.length===0&&(l==null?void 0:l.connected)&&R()&&await rt({silent:!0}),c()});const s=document.querySelector("#refreshBankingDataButton");s&&s.addEventListener("click",()=>{if(!R()){f("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:h});return}pi({key:"banking"})})}function li(e){const t=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const r of e)t.push([r.displayName||"",String(Number(r.amount)||0),String(Number(r.ticketAmount)||0),r.note||""]);return t.map(r=>r.map(ar).join("	")).join(`
`)}function ar(e){return String(e!=null?e:"").replace(/[\t\r\n]+/g," ").trim()}async function cr(e){var s;const t=String(e!=null?e:"");if((s=navigator.clipboard)!=null&&s.writeText)try{return await navigator.clipboard.writeText(t),!0}catch{}const r=document.createElement("textarea");r.value=t,r.setAttribute("readonly","readonly"),r.style.position="fixed",r.style.left="0",r.style.top="0",r.style.width="1px",r.style.height="1px",r.style.opacity="0",r.style.pointerEvents="none",r.style.zIndex="-1",document.body.appendChild(r),r.focus(),r.select(),r.setSelectionRange(0,r.value.length);let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r)}return n}async function Qc(){const e=Wr(wt),t=li(e);if(await cr(t)){f("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:h});return}const n=document.querySelector("#bankingExportTsv");n&&(n.focus(),n.select()),f("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:h})}function Wr(e){return j.filter(t=>t.type===e).filter(t=>Xc(e,t)).sort((t,r)=>(Number(r.time)||0)-(Number(t.time)||0))}function Xc(e,t){if(e==="other")return!0;const r=Number(t==null?void 0:t.time)||0;if(r<=0)return!1;const n=ui(e);return r>=n.salesStart&&r<=n.salesEnd}function un(e){return Number(Or[e])||0}function Zc(e){if(F!=="biweekly"&&F!=="monthly")return;const t=un(F);if(e==="previous"){Or[F]=t-1;return}e==="next"&&t<0&&(Or[F]=t+1)}function ui(e){const t=Math.floor(Date.now()/1e3),r=e==="monthly",n=r?Qo:Jo;let s=r?Ko:Yo;for(;s-n>t;)s-=n;for(;s<t;)s+=n;return s+=un(e)*n,{salesStart:s-n+1,salesEnd:s,raffleTime:s+Xo}}function ed(e){return e.reduce((t,r)=>(t.amount+=Number(r.amount)||0,t.tickets+=Number(r.ticketAmount)||0,t),{amount:0,tickets:0})}function td(e,t=!0){return`
    <tr>
      <td>${a(e.note||e.eventId||"")}</td>
      <td>${a(Pt(e.time))}</td>
      <td>${a(e.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${a(fi(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${t?`<td><strong class="bank-ticket-amount">${a(dr(e.ticketAmount))}</strong></td>`:""}
    </tr>
  `}function rd(e=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${e?"5":"4"}">No ${a(Pe(F))} deposits found for this ${F==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function Pe(e){return e==="biweekly"?"Bi-Weekly":e==="monthly"?"50/50":"Other"}function Pt(e){const t=Number(e);return!Number.isFinite(t)||t<=0?"Unknown":new Date(t*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function fi(e){return(Number(e)||0).toLocaleString()}function dr(e){return(Number(e)||0).toLocaleString()}function fn(e){return Array.isArray(e)?e.map(t=>{var n,s,i,o,d,p,v,w,m,k,x,Et;const r=String((t==null?void 0:t.type)||"other").trim().toLowerCase();return{type:r==="monthly"||r==="biweekly"||r==="other"?r:"other",eventId:String((s=(n=t==null?void 0:t.eventId)!=null?n:t==null?void 0:t.event_id)!=null?s:"").trim(),time:Number((o=(i=t==null?void 0:t.time)!=null?i:t==null?void 0:t.timestamp)!=null?o:0)||0,displayName:String((p=(d=t==null?void 0:t.displayName)!=null?d:t==null?void 0:t.display_name)!=null?p:"").trim(),amount:Number((v=t==null?void 0:t.amount)!=null?v:0)||0,ticketAmount:Number((m=(w=t==null?void 0:t.ticketAmount)!=null?w:t==null?void 0:t.ticket_amount)!=null?m:0)||0,note:String((k=t==null?void 0:t.note)!=null?k:"").trim(),dataSource:String((Et=(x=t==null?void 0:t.dataSource)!=null?x:t==null?void 0:t.data_source)!=null?Et:"").trim()}}):[]}function nd(e){const t=new Map;for(const r of j)r.eventId&&t.set(r.eventId,r);for(const r of e)!r.eventId||t.set(r.eventId,r);j=Array.from(t.values()).sort((r,n)=>(Number(n.time)||0)-(Number(r.time)||0))}function hi(){gs=new Date().toISOString()}async function sd(e={}){!(e!=null&&e.ok)||(j=fn(e.entries),hi(),E==="more"&&c(),f("banking-data-updated",`Banking data updated. Loaded ${j.length} deposit record${j.length===1?"":"s"}.`,{ttlMs:h}))}async function Lt(e={}){const t=Boolean(e.silent);if(!(l!=null&&l.connected)){t||f("banking-data-error","GuildSync websocket is not connected.",{ttlMs:h});return}Te=!0,c();try{const r=await L("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");j=fn(r.entries),hi(),t||f("banking-data",`Loaded ${j.length} banking deposit record${j.length===1?"":"s"}.`,{ttlMs:h})}catch(r){t||f("banking-data-error",S(r),{ttlMs:h})}finally{Te=!1,c()}}async function pi(e={}){var t,r;if(!!R()){if(!(l!=null&&l.connected)){f("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:h});return}Te=!0,c();try{const n=await Fo(e);if(!(n!=null&&n.ok)){f("banking-data-pending",(n==null?void 0:n.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:h});return}const s=fn((t=n==null?void 0:n.data)==null?void 0:t.entries);nd(s);const i=new Date().toISOString(),o={local_upload_id:mi(),authenticated_username:Ce(),authenticated_discord_user_id:((r=y==null?void 0:y.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||e.fileName||"",file_path:n.filePath||e.filePath||"",collected_at:i,data:n.data||{}};try{await yi(o)}catch(d){throw id(o),d}await Lt({silent:!0})}catch(n){f("banking-data-error",S(n),{ttlMs:h})}finally{Te=!1,c()}}}function mi(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function hn(){try{const e=window.localStorage.getItem(ls),t=e?JSON.parse(e):[];return Array.isArray(t)?t.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function gi(e){window.localStorage.setItem(ls,JSON.stringify(Array.isArray(e)?e:[]))}function id(e){const t=String((e==null?void 0:e.local_upload_id)||mi()),r=hn().filter(n=>(n==null?void 0:n.local_upload_id)!==t);r.push({...e,local_upload_id:t,pending_saved_at:new Date().toISOString()}),gi(r),f("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:h})}function od(e){const t=hn().filter(r=>(r==null?void 0:r.local_upload_id)!==e);gi(t)}async function ad(){if(vr||!(l!=null&&l.connected)||!R())return;const e=hn();if(e.length!==0){vr=!0;try{for(const t of e){if(!(l!=null&&l.connected)||!R())return;await yi(t),od(t.local_upload_id)}}catch(t){f("banking-data-pending-error",`Pending banking upload retry failed: ${S(t)}`,{ttlMs:h})}finally{vr=!1}}}async function yi(e){if(!(l!=null&&l.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const t=await L("guildsync:sending-banking-data",e,3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const r=await Po(e.file_path||"",e.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return f("banking-data-sent",t.message||"Banking data sent to GuildSync backend.",{ttlMs:h}),t}function bi(){if(E!=="discord-members")return;const e=document.querySelector("#refreshDiscordDataButton");e&&e.addEventListener("click",()=>cd());const t=document.querySelector("#openDiscordHistoryButton");t&&t.addEventListener("click",()=>{Ue=!0,te="",c(),T("discordHistorySearchInput")});const r=document.querySelector("#discordMemberSearch");r&&r.addEventListener("input",o=>{Ht=o.target.value||"",Nr=o.target.selectionStart,Cr=o.target.selectionEnd,c({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(o=>{o.addEventListener("click",()=>{pd(o.dataset.discordSortColumn||"username")})});const n=document.querySelector("#discordRoleFilter");n&&n.addEventListener("change",o=>{const d=String(o.target.value||"").trim();d&&(Oe.add(d),c())}),document.querySelectorAll("[data-remove-role-filter]").forEach(o=>{o.addEventListener("click",()=>{const d=o.dataset.removeRoleFilter||"";Oe.delete(d),c()})});const s=document.querySelector("#discordLinkStatusFilter");s&&s.addEventListener("change",o=>{const d=String(o.target.value||"").trim();d&&(Ie.add(d),c())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const d=o.dataset.removeDiscordLinkStatusFilter||"";Ie.delete(d),c()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>Ws(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const i=document.querySelector("#clearDiscordFiltersButton");i&&i.addEventListener("click",()=>{Ht="",Oe.clear(),Ie.clear(),c()})}async function cd(){var e,t;if(!(l!=null&&l.connected)){f("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:h});return}Vt=!0,c(),f("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const r=await L("guildsync:request-discord-data-refresh",{requested_by:((e=y==null?void 0:y.user)==null?void 0:e.display_name)||((t=y==null?void 0:y.user)==null?void 0:t.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to request Discord data refresh.");f("discord-refresh-requested",r.message||"Discord data refresh completed.",{ttlMs:h}),await pn({silent:!0})}catch(r){f("discord-refresh-error",S(r),{ttlMs:h})}finally{Vt=!1,c()}}async function dd(){if(!(l!=null&&l.connected))return;const e=await L("guildsync:request-discord-data-date",{});e!=null&&e.ok&&(rr=e.value||null)}async function ld(e={}){if(!!(e!=null&&e.ok)){C=mn(e.members),e.last_refresh&&(rr=e.last_refresh);try{await dd()}catch{}E==="discord-members"&&c(),f("discord-data-updated",`Discord data updated. Loaded ${C.length} member record${C.length===1?"":"s"}.`,{ttlMs:h})}}async function pn(e={}){const t=Boolean(e.silent);if(!(l!=null&&l.connected)){f("discord-data-error","GuildSync websocket is not connected.",{ttlMs:h});return}ht=!0,c();try{const[r,n]=await Promise.all([L("guildsync:request-discord-data-date",{}),L("guildsync:request-discord-member-dataJSON",{})]);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord refresh date.");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord member data.");rr=r.value||null,C=mn(n.members),t||f("discord-data",`Loaded ${C.length} Discord member record${C.length===1?"":"s"}.`,{ttlMs:h})}catch(r){f("discord-data-error",S(r),{ttlMs:h})}finally{ht=!1,c()}}function L(e,t={},r=3e4){return new Promise((n,s)=>{if(!(l!=null&&l.connected)){s(new Error("GuildSync websocket is not connected."));return}let i=!1;const o=window.setTimeout(()=>{i||(i=!0,s(new Error(`${e} timed out.`)))},r);l.emit(e,t,d=>{i||(i=!0,window.clearTimeout(o),n(d))})})}function mn(e){return Array.isArray(e)?e.map(t=>({discord_id:String((t==null?void 0:t.discord_id)||(t==null?void 0:t.id)||"").trim(),username:String((t==null?void 0:t.username)||"").trim(),global_name:String((t==null?void 0:t.global_name)||"").trim(),server_nickname:String((t==null?void 0:t.server_nickname)||"").trim(),last_seen:String((t==null?void 0:t.last_seen)||(t==null?void 0:t.lastSeen)||"").trim(),last_seen_action:String((t==null?void 0:t.last_seen_action)||(t==null?void 0:t.lastSeenAction)||"").trim(),avatar:String((t==null?void 0:t.avatar)||"").trim(),roles:Array.isArray(t==null?void 0:t.roles)?t.roles.map(ud).filter(Boolean):[]})).filter(t=>t.discord_id||t.username||t.global_name||t.server_nickname).sort((t,r)=>bt(t).localeCompare(bt(r),void 0,{sensitivity:"base"})):[]}function ud(e){var s,i;if(!e||typeof e!="object")return null;const t=String(e.role_id||e.id||"").trim(),r=String(e.role_name||e.name||"Unnamed Role").trim(),n=(i=(s=e.role_color)!=null?s:e.color)!=null?i:null;return{role_id:t,role_name:r||"Unnamed Role",role_color:n}}function fd(){const e=Ht.trim().toLowerCase(),t=Array.from(Oe),r=C.filter(n=>{if(e&&![n.username,n.global_name,n.server_nickname,n.discord_id,...n.roles.map(i=>i.role_name)].join(" ").toLowerCase().includes(e))return!1;if(t.length>0){const s=new Set(n.roles.map(i=>i.role_name));if(!t.every(i=>s.has(i)))return!1}return!!As(Ie,wa(n))});return hd(r)}function hd(e){const t=Se==="desc"?-1:1;return[...e].sort((r,n)=>{const s=Gn(r,pt),i=Gn(n,pt),o=s.localeCompare(i,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*t:bt(r).localeCompare(bt(n),void 0,{sensitivity:"base",numeric:!0})})}function Gn(e,t){return t==="global_name"?e.global_name||"":t==="server_nickname"?e.server_nickname||"":t==="roles"?(e.roles||[]).map(r=>r.role_name||"").filter(Boolean).sort((r,n)=>r.localeCompare(n,void 0,{sensitivity:"base"})).join(" "):e.username||e.discord_id||""}function pd(e){const r=new Set(["username","global_name","server_nickname","roles"]).has(e)?e:"username";pt===r?Se=Se==="asc"?"desc":"asc":(pt=r,Se="asc"),c()}function Nt(e,t){const r=pt===e,n=Se==="asc"?"ascending":"descending",s=r?Se==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${r?n:"none"}">
      <button
        class="discord-sort-header${r?" active":""}"
        type="button"
        data-discord-sort-column="${u(e)}"
        title="Sort ${u(t)} ${r&&Se==="asc"?"descending":"ascending"}"
      >
        <span>${a(t)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function md(){const e=document.querySelector("#discordMemberSearch");if(!!e&&(e.focus({preventScroll:!0}),typeof e.setSelectionRange=="function")){const t=Number.isInteger(Nr)?Nr:e.value.length,r=Number.isInteger(Cr)?Cr:t;e.setSelectionRange(t,r)}}function gd(){const e=document.querySelector("#rosterMemberSearch");if(!!e&&(e.focus({preventScroll:!0}),typeof e.setSelectionRange=="function")){const t=Number.isInteger(Br)?Br:e.value.length,r=Number.isInteger(xr)?xr:t;e.setSelectionRange(t,r)}}function yd(){const e=new Set;for(const t of C)for(const r of t.roles)r.role_name&&e.add(r.role_name);return Array.from(e).sort((t,r)=>t.localeCompare(r,void 0,{sensitivity:"base"}))}function bd(e){const t=wd(e),r=bt(e),n=e.roles||[];return`
    <tr data-discord-user-id="${u(e.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${t?`<img src="${u(t)}" alt="${u(r)}" />`:`<span>${a(Ei(r))}</span>`}
          </div>
          <span>${a(e.username||e.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${a(e.global_name||"")}</td>
      <td>${a(e.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${n.length>0?n.map(s=>kd(s)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${Vs({mode:"discord-to-eso",discordUserId:e.discord_id})}</td>
    </tr>
  `}function vd(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${a(ht?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function kd(e){const t=lr(e.role_color),r=bn(t),n=yn(t,r);return`
    <span
      class="discord-role-badge"
      title="${u(e.role_name)}"
      style="${n}"
    >${a(e.role_name)}</span>
  `}function Sd(e){const t=gn(e),r=lr(t==null?void 0:t.role_color),n=bn(r),s=yn(r,n);return`
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
  `}function gn(e){for(const t of C){const r=t.roles.find(n=>n.role_name===e);if(r)return r}return null}function lr(e){const t=Number(e);return!Number.isFinite(t)||t<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(t))).toString(16).padStart(6,"0")}`}function yn(e,t){return[`--role-fill-top: ${Un(e,"#ffffff",.16)}`,`--role-fill-bottom: ${Un(e,"#000000",.1)}`,`--role-fill-glow: ${Vn(e,.28)}`,`--role-fill-edge: ${Vn(e,.46)}`,`color: ${t}`].join("; ")}function Un(e,t,r){const n=Ct(e)||Ct("#64748b"),s=Ct(t)||Ct("#ffffff"),i=Math.max(0,Math.min(1,Number(r)||0)),o=Math.round(n.red+(s.red-n.red)*i),d=Math.round(n.green+(s.green-n.green)*i),p=Math.round(n.blue+(s.blue-n.blue)*i);return`#${Ar(o)}${Ar(d)}${Ar(p)}`}function Ct(e){const t=String(e||"").replace("#","");return/^[0-9a-f]{6}$/i.test(t)?{red:parseInt(t.slice(0,2),16),green:parseInt(t.slice(2,4),16),blue:parseInt(t.slice(4,6),16)}:null}function Ar(e){return Math.max(0,Math.min(255,e)).toString(16).padStart(2,"0")}function Vn(e,t){const r=String(e||"#64748b").replace("#",""),n=/^[0-9a-f]{6}$/i.test(r)?r:"64748b",s=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),o=parseInt(n.slice(4,6),16);return`rgba(${s}, ${i}, ${o}, ${t})`}function bn(e){const t=String(e||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(t))return"#E5E7EB";const r=parseInt(t.slice(0,2),16),n=parseInt(t.slice(2,4),16),s=parseInt(t.slice(4,6),16);return(r*299+n*587+s*114)/1e3>150?"#0F172A":"#F8FAFC"}function wd(e){const t=String((e==null?void 0:e.avatar)||"").trim(),r=String((e==null?void 0:e.discord_id)||"").trim();if(!t)return"";if(t.startsWith("http://")||t.startsWith("https://"))return t;if(!r)return"";const n=t.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(t)}.${n}?size=64`}function bt(e){return e.server_nickname||e.global_name||e.username||e.discord_id||"Unknown"}function vi(e){const t=String(e||"").trim();if(!t)return"Not refreshed yet";const r=new Date(t);return Number.isNaN(r.getTime())?t:r.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Gt(){const e=document.querySelector("#discordArea");if(!!e){if(At(!1),R()){const t=y.user||{},r=Ce(),n=Id(t),s=Ei(r);e.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${n?`<img src="${u(n)}" alt="${u(r)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${a(s)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const i=document.querySelector("#discordAvatarButton");i.addEventListener("contextmenu",o=>{o.preventDefault(),Hn()}),i.addEventListener("click",()=>{Hn()});return}e.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",Ad)}}function Hn(){if(Xr){At();return}Ld()}function _d(){var n,s,i;const e=document.querySelector("#discordProfileMenu");if(!e)return;const t=Ce(),r=((n=y.user)==null?void 0:n.role)||"member";e.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${a(t)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${a(qd(r))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${a(tr)}</span>
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(s=document.querySelector("#discordLogoutButton"))==null||s.addEventListener("click",Ed),(i=document.querySelector("#associateTicketReportButton"))==null||i.addEventListener("click",()=>{At(!1),$s()})}function Ld(){const e=document.querySelector("#discordProfileMenu");!e||(_d(),e.classList.add("open"),e.setAttribute("aria-hidden","false"),Xr=!0,setTimeout(()=>{window.addEventListener("click",ki),window.addEventListener("keydown",Si)},0))}function At(e=!0){const t=document.querySelector("#discordProfileMenu");t&&(t.classList.remove("open"),t.setAttribute("aria-hidden","true")),Xr=!1,e&&(window.removeEventListener("click",ki),window.removeEventListener("keydown",Si))}function ki(e){const t=document.querySelector(".discord-profile-wrap");t&&!t.contains(e.target)&&At()}function Si(e){e.key==="Escape"&&At()}async function Ad(){try{f("auth","Opening Discord login...",{ttlMs:h});const e=await Bo();e!=null&&e.status_message&&f("auth",e.status_message,{ttlMs:h}),pe()}catch(e){f("auth-error",S(e),{ttlMs:h}),pe()}}async function Ed(){try{y=await Oo(),f("auth",y.status_message||"Logged out.",{ttlMs:h}),ys(),ut(),await ft()}catch(e){f("auth-error",S(e),{ttlMs:h}),pe()}}function ut(){const e=y.socket_url||"https://guildsync.perdues.me";Rd(!1);const t={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};y!=null&&y.token&&(t.auth={token:y.token}),l=It(e,t),l.on("connect",()=>{pe(),wi(),E==="discord-members"&&pn({silent:!0}),E==="eso-members"&&rt({silent:!0}),E==="more"&&Lt({silent:!0}),ad(),Wc(),Dd()}),l.on("connect_error",()=>{pe(),Xt()}),l.on("disconnect",()=>{pe(),Xt()}),l.on("guildsync:version-status",r=>{$d(r)}),l.on("guildsync:discord-member-data-updated",r=>{ld(r)}),l.on("guildsync:banking-data-updated",r=>{sd(r)}),l.on("guildsync:roster-data-updated",r=>{Gc(r)}),l.on("guildsync:member-links-updated",(r={})=>{Array.isArray(r.links)&&(A=r.links,(E==="discord-members"||E==="eso-members"||E==="settings"||be)&&c())}),l.on("guildsync:discord-refresh-status",(r={})=>{const n=String(r.message||"").trim();n&&f("discord-refresh-status",n,{ttlMs:h})})}function Rd(e=!0){Xt(),l&&(l.disconnect(),l=null),e&&pe()}function wi(){!(l!=null&&l.connected)||l.emit("guildsync:client-version",{version:tr})}function Dd(){Xt(),qt=window.setInterval(()=>{wi()},Vo)}function Xt(){qt&&(window.clearInterval(qt),qt=null)}function $d(e){if(!(!e||typeof e!="object")){if(e.update_required){const t=e.latest_version||"unknown";f("version",`GuildSync is out of date. Current version: ${tr}. Latest version: ${t}.`);return}ur("version")}}function f(e,t,r={}){const n=String(e||"").trim(),s=String(t||"").trim();if(!(!n||!s)){if(me.set(n,s),M===n){const i=document.querySelector("#statusMessageTrack");i&&(i.textContent=s)}if(ke.has(n)&&(window.clearTimeout(ke.get(n)),ke.delete(n)),r.ttlMs&&Number(r.ttlMs)>0){const i=window.setTimeout(()=>{ur(n)},Number(r.ttlMs));ke.set(n,i)}je()}}function ur(e){const t=String(e||"").trim();if(!!t){if(me.delete(t),ke.has(t)&&(window.clearTimeout(ke.get(t)),ke.delete(t)),M===t){pr(()=>{M="",je()});return}je()}}function je(){const e=fr();if(e.length===0){De?pr(vt):vt();return}!De&&!$e&&hr(e[0])}function fr(){return Array.from(me.keys())}function _i(){const e=fr();if(e.length===0)return"";if(!M)return e[0];const t=e.indexOf(M);return t<0?e[0]:e[(t+1)%e.length]}function hr(e){const t=document.querySelector("#statusMessageTrack");if(!t||!me.has(e)){vt();return}mr();const r=me.get(e);M=e,De=!0,$e=!0,t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent=r,t.style.setProperty("--message-fade-duration",`${hs}ms`),requestAnimationFrame(()=>{t.classList.add("fade-in"),t.addEventListener("animationend",()=>{t.classList.remove("fade-in"),t.style.opacity="1",t.style.transform="translateX(0) translateY(-50%)",$e=!1,Md()},{once:!0})})}function Md(){const e=fr();if(!M||!me.has(M)){je();return}if(e.length<=1){Wn(!1);return}Wn(!0)}function Wn(e){const t=document.querySelector("#statusMessageViewport"),r=document.querySelector("#statusMessageTrack");if(!t||!r)return;const n=Math.max(0,r.scrollWidth-t.clientWidth);if(n<=0){e&&kt(()=>{pr(()=>{const s=_i();M="",s?hr(s):vt()})},fs);return}kt(()=>{Li(n,e)},ps)}function Li(e,t){const r=document.querySelector("#statusMessageTrack");if(!r||!M||!me.has(M))return;const n=Math.max(4,Math.ceil(e/zo));r.style.setProperty("--long-scroll-distance",`${e}px`),r.style.setProperty("--long-scroll-duration",`${n}s`),r.classList.add("long-scroll"),r.addEventListener("animationend",()=>{if(r.classList.remove("long-scroll"),r.style.transform=`translateX(-${e}px) translateY(-50%)`,t){kt(()=>{pr(()=>{const s=_i();M="",s?hr(s):vt()})},fs);return}kt(()=>{Td()},Wo)},{once:!0})}function Td(){const e=document.querySelector("#statusMessageViewport"),t=document.querySelector("#statusMessageTrack");if(!e||!t||!M||!me.has(M))return;if(fr().length!==1){je();return}t.classList.remove("long-scroll"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.transform="translateX(0) translateY(-50%)";const n=Math.max(0,t.scrollWidth-e.clientWidth);n<=0||kt(()=>{Li(n,!1)},ps)}function pr(e){const t=document.querySelector("#statusMessageTrack");if(mr(),!t||!De){typeof e=="function"&&e();return}$e=!0,t.classList.remove("fade-in","long-scroll"),t.style.setProperty("--message-fade-duration",`${hs}ms`),t.classList.add("fade-out"),t.addEventListener("animationend",()=>{t.classList.remove("fade-out"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",De=!1,$e=!1,typeof e=="function"&&e()},{once:!0})}function vt(){const e=document.querySelector("#statusMessageTrack");mr(),M="",De=!1,$e=!1,e&&(e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent="")}function kt(e,t){const r=window.setTimeout(()=>{dt=dt.filter(n=>n!==r),e()},t);dt.push(r)}function mr(){for(const e of dt)window.clearTimeout(e);dt=[]}function Ai(){if(!De||$e||!M)return;const e=M;mr(),hr(e)}function pe(){const e=document.querySelector("#statusDot"),t=document.querySelector("#statusConnectionLabel");if(!!e){if(e.classList.remove("status-red","status-yellow","status-green"),!(l!=null&&l.connected)){e.classList.add("status-red"),e.title="Server Unavailable. Websocket is not connected.",t&&(t.textContent="Server Unavailable",t.title="Server Unavailable");return}if(!R()){e.classList.add("status-yellow"),e.title="Login Required. Websocket is connected but user is not authenticated.",t&&(t.textContent="Login Required",t.title="Login Required");return}e.classList.add("status-green"),e.title=`Server Ready. Authenticated as ${Ce()}.`,t&&(t.textContent="Server Ready",t.title=`Server Ready - ${Ce()}`)}}async function ft(e={}){try{if(R()){const t=await Io();An=t,!e.silent&&(t==null?void 0:t.message)&&f(t.watching?"file-watcher":"file-watcher-error",t.message,{ttlMs:h});return}An=await qo(),ur("file-watcher")}catch(t){f("file-watcher-error",S(t),{ttlMs:h})}}function Nd(e={}){if(!R())return;const t=String(e.key||e.fileName||"saved-vars-file").trim()||"saved-vars-file",r=String(e.label||"").trim(),n=String(e.fileName||"SavedVariables file").trim()||"SavedVariables file",s=r?`${r} saved variables (${n})`:n;f(`saved-vars-file-updated-${t}`,`${s} has been updated.`,{ttlMs:h}),t.toLowerCase()==="banking"&&Cd(e),t.toLowerCase()==="roster"&&Bd(e)}async function Cd(e={}){await pi(e)}async function Bd(e={}){await Uc(e)}function xd(e){!R()||f("file-watcher-error",S(e),{ttlMs:h})}function Od(){st("guildsync-savedvars-file-modified",Nd),st("guildsync-file-watcher-error",xd),st("guildsync-login-complete",async e=>{y=e||{logged_in:!1,allowed:!1},Gt(),ut(),await ft(),f("auth",y.status_message||`Logged in and authorized as ${Ce()}.`,{ttlMs:h})}),st("guildsync-login-denied",async e=>{y={logged_in:!1,allowed:!1,status_message:""},Gt(),await ft(),f("auth",e||"Access denied.",{ttlMs:h}),ut()}),st("guildsync-login-failed",async e=>{y={logged_in:!1,allowed:!1,status_message:""},Gt(),await ft(),f("auth",e||"Login failed.",{ttlMs:h}),ut()})}function R(){return Boolean((y==null?void 0:y.logged_in)&&(y==null?void 0:y.allowed)&&(y==null?void 0:y.token))}function Ce(){var e,t;return((e=y.user)==null?void 0:e.display_name)||((t=y.user)==null?void 0:t.username)||"Discord User"}function Id(e){if(!e)return"";if(e.avatar_url)return e.avatar_url;const t=String(e.avatar||"").trim(),r=String(e.discord_user_id||"").trim();if(!t||!r)return"";if(t.startsWith("http://")||t.startsWith("https://"))return t;const n=t.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(t)}.${n}?size=128`}function Ei(e){const t=String(e||"").trim().split(/\s+/).filter(Boolean);return t.length===0?"GS":t.length===1?t[0].slice(0,2).toUpperCase():`${t[0][0]}${t[t.length-1][0]}`.toUpperCase()}function qd(e){return String(e||"member").replaceAll("_"," ").replace(/\b\w/g,t=>t.toUpperCase())}function Fd(){it&&(it.disconnect(),it=null);const e=document.querySelector(".main-window")||document.querySelector("#app");if(!e||typeof ResizeObserver>"u")return;let t=Math.round(e.getBoundingClientRect().width),r=Math.round(e.getBoundingClientRect().height);it=new ResizeObserver(n=>{const s=n[0];if(!s)return;const i=Math.round(s.contentRect.width),o=Math.round(s.contentRect.height);i===t&&o===r||(t=i,r=o,Ri(),Ai())}),it.observe(e)}function Ri(){clearTimeout(_n),_n=setTimeout(async()=>{try{await cs()}catch{}},500)}function S(e){return e?typeof e=="string"?e:e.message||String(e):"Unknown error."}function a(e){return String(e!=null?e:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function u(e){return a(e)}Od();Na();Zo();
