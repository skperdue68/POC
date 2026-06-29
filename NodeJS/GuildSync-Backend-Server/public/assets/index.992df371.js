(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();const qa="/assets/splash.ea386b6a.png",xa="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",Fa="/assets/GuildSync-Graphic.9169020d.png",ae=Object.create(null);ae.open="0";ae.close="1";ae.ping="2";ae.pong="3";ae.message="4";ae.upgrade="5";ae.noop="6";const Er=Object.create(null);Object.keys(ae).forEach(t=>{Er[ae[t]]=t});const $n={type:"error",data:"parser error"},Co=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Io=typeof ArrayBuffer=="function",Oo=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Xn=({type:t,data:e},r,n)=>Co&&e instanceof Blob?r?n(e):no(e,n):Io&&(e instanceof ArrayBuffer||Oo(e))?r?n(e):no(new Blob([e]),n):n(ae[t]+(e||"")),no=(t,e)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];e("b"+(n||""))},r.readAsDataURL(t)};function io(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let gn;function Pa(t,e){if(Co&&t.data instanceof Blob)return t.data.arrayBuffer().then(io).then(e);if(Io&&(t.data instanceof ArrayBuffer||Oo(t.data)))return e(io(t.data));Xn(t,!1,r=>{gn||(gn=new TextEncoder),e(gn.encode(r))})}const oo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Qt=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<oo.length;t++)Qt[oo.charCodeAt(t)]=t;const Ga=t=>{let e=t.length*.75,r=t.length,n,i=0,o,s,a,f;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const g=new ArrayBuffer(e),S=new Uint8Array(g);for(n=0;n<r;n+=4)o=Qt[t.charCodeAt(n)],s=Qt[t.charCodeAt(n+1)],a=Qt[t.charCodeAt(n+2)],f=Qt[t.charCodeAt(n+3)],S[i++]=o<<2|s>>4,S[i++]=(s&15)<<4|a>>2,S[i++]=(a&3)<<6|f&63;return g},Ua=typeof ArrayBuffer=="function",Zn=(t,e)=>{if(typeof t!="string")return{type:"message",data:qo(t,e)};const r=t.charAt(0);return r==="b"?{type:"message",data:Va(t.substring(1),e)}:Er[r]?t.length>1?{type:Er[r],data:t.substring(1)}:{type:Er[r]}:$n},Va=(t,e)=>{if(Ua){const r=Ga(t);return qo(r,e)}else return{base64:!0,data:t}},qo=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},xo=String.fromCharCode(30),Ha=(t,e)=>{const r=t.length,n=new Array(r);let i=0;t.forEach((o,s)=>{Xn(o,!1,a=>{n[s]=a,++i===r&&e(n.join(xo))})})},Wa=(t,e)=>{const r=t.split(xo),n=[];for(let i=0;i<r.length;i++){const o=Zn(r[i],e);if(n.push(o),o.type==="error")break}return n};function ja(){return new TransformStream({transform(t,e){Pa(t,r=>{const n=r.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const o=new DataView(i.buffer);o.setUint8(0,126),o.setUint16(1,n)}else{i=new Uint8Array(9);const o=new DataView(i.buffer);o.setUint8(0,127),o.setBigUint64(1,BigInt(n))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(r)})}})}let yn;function Sr(t){return t.reduce((e,r)=>e+r.length,0)}function wr(t,e){if(t[0].length===e)return t.shift();const r=new Uint8Array(e);let n=0;for(let i=0;i<e;i++)r[i]=t[0][n++],n===t[0].length&&(t.shift(),n=0);return t.length&&n<t[0].length&&(t[0]=t[0].slice(n)),r}function za(t,e){yn||(yn=new TextDecoder);const r=[];let n=0,i=-1,o=!1;return new TransformStream({transform(s,a){for(r.push(s);;){if(n===0){if(Sr(r)<1)break;const f=wr(r,1);o=(f[0]&128)===128,i=f[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(Sr(r)<2)break;const f=wr(r,2);i=new DataView(f.buffer,f.byteOffset,f.length).getUint16(0),n=3}else if(n===2){if(Sr(r)<8)break;const f=wr(r,8),g=new DataView(f.buffer,f.byteOffset,f.length),S=g.getUint32(0);if(S>Math.pow(2,53-32)-1){a.enqueue($n);break}i=S*Math.pow(2,32)+g.getUint32(4),n=3}else{if(Sr(r)<i)break;const f=wr(r,i);a.enqueue(Zn(o?f:yn.decode(f),e)),n=0}if(i===0||i>t){a.enqueue($n);break}}}})}const Fo=4;function $(t){if(t)return Ya(t)}function Ya(t){for(var e in $.prototype)t[e]=$.prototype[e];return t}$.prototype.on=$.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};$.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this};$.prototype.off=$.prototype.removeListener=$.prototype.removeAllListeners=$.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var n,i=0;i<r.length;i++)if(n=r[i],n===e||n.fn===e){r.splice(i,1);break}return r.length===0&&delete this._callbacks["$"+t],this};$.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),r=this._callbacks["$"+t],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,i=r.length;n<i;++n)r[n].apply(this,e)}return this};$.prototype.emitReserved=$.prototype.emit;$.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};$.prototype.hasListeners=function(t){return!!this.listeners(t).length};const Kr=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,r)=>r(e,0))(),V=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),Ka="arraybuffer";function Po(t,...e){return e.reduce((r,n)=>(t.hasOwnProperty(n)&&(r[n]=t[n]),r),{})}const Ja=V.setTimeout,Qa=V.clearTimeout;function Jr(t,e){e.useNativeTimers?(t.setTimeoutFn=Ja.bind(V),t.clearTimeoutFn=Qa.bind(V)):(t.setTimeoutFn=V.setTimeout.bind(V),t.clearTimeoutFn=V.clearTimeout.bind(V))}const Xa=1.33;function Za(t){return typeof t=="string"?ec(t):Math.ceil((t.byteLength||t.size)*Xa)}function ec(t){let e=0,r=0;for(let n=0,i=t.length;n<i;n++)e=t.charCodeAt(n),e<128?r+=1:e<2048?r+=2:e<55296||e>=57344?r+=3:(n++,r+=4);return r}function Go(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function tc(t){let e="";for(let r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e}function rc(t){let e={},r=t.split("&");for(let n=0,i=r.length;n<i;n++){let o=r[n].split("=");e[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return e}class nc extends Error{constructor(e,r,n){super(e),this.description=r,this.context=n,this.type="TransportError"}}class ei extends ${constructor(e){super(),this.writable=!1,Jr(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,r,n){return super.emitReserved("error",new nc(e,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const r=Zn(e,this.socket.binaryType);this.onPacket(r)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,r={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const r=tc(e);return r.length?"?"+r:""}}class ic extends ei{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const r=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};Wa(e,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Ha(e,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=Go()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(e,r)}}let Uo=!1;try{Uo=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const oc=Uo;function sc(){}class ac extends ic{constructor(e){if(super(e),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,r){const n=this.request({method:"POST",data:e});n.on("success",r),n.on("error",(i,o)=>{this.onError("xhr post error",i,o)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=e}}class te extends ${constructor(e,r,n){super(),this.createRequest=e,Jr(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;const r=Po(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=te.requestsCount++,te.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=sc,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete te.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}te.requestsCount=0;te.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",so);else if(typeof addEventListener=="function"){const t="onpagehide"in V?"pagehide":"unload";addEventListener(t,so,!1)}}function so(){for(let t in te.requests)te.requests.hasOwnProperty(t)&&te.requests[t].abort()}const cc=function(){const t=Vo({xdomain:!1});return t&&t.responseType!==null}();class lc extends ac{constructor(e){super(e);const r=e&&e.forceBase64;this.supportsBinary=cc&&!r}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new te(Vo,this.uri(),e)}}function Vo(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||oc))return new XMLHttpRequest}catch{}if(!e)try{return new V[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Ho=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class dc extends ei{get name(){return"websocket"}doOpen(){const e=this.uri(),r=this.opts.protocols,n=Ho?{}:Po(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,r,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],i=r===e.length-1;Xn(n,this.supportsBinary,o=>{try{this.doWrite(n,o)}catch{}i&&Kr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=Go()),this.supportsBinary||(r.b64=1),this.createUri(e,r)}}const bn=V.WebSocket||V.MozWebSocket;class uc extends dc{createSocket(e,r,n){return Ho?new bn(e,r,n):r?new bn(e,r):new bn(e)}doWrite(e,r){this.ws.send(r)}}class fc extends ei{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const r=za(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(r).getReader(),i=ja();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const o=()=>{n.read().then(({done:a,value:f})=>{a||(this.onPacket(f),o())}).catch(a=>{})};o();const s={type:"open"};this.query.sid&&(s.data=`{"sid":"${this.query.sid}"}`),this._writer.write(s).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let r=0;r<e.length;r++){const n=e[r],i=r===e.length-1;this._writer.write(n).then(()=>{i&&Kr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const hc={websocket:uc,webtransport:fc,polling:lc},pc=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,mc=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Mn(t){if(t.length>8e3)throw"URI too long";const e=t,r=t.indexOf("["),n=t.indexOf("]");r!=-1&&n!=-1&&(t=t.substring(0,r)+t.substring(r,n).replace(/:/g,";")+t.substring(n,t.length));let i=pc.exec(t||""),o={},s=14;for(;s--;)o[mc[s]]=i[s]||"";return r!=-1&&n!=-1&&(o.source=e,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=gc(o,o.path),o.queryKey=yc(o,o.query),o}function gc(t,e){const r=/\/{2,9}/g,n=e.replace(r,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function yc(t,e){const r={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,o){i&&(r[i]=o)}),r}const Nn=typeof addEventListener=="function"&&typeof removeEventListener=="function",Dr=[];Nn&&addEventListener("offline",()=>{Dr.forEach(t=>t())},!1);class Re extends ${constructor(e,r){if(super(),this.binaryType=Ka,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(r=e,e=null),e){const n=Mn(e);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=Mn(r.host).host);Jr(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=rc(this.opts.query)),Nn&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Dr.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const r=Object.assign({},this.opts.query);r.EIO=Fo,r.transport=e,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Re.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(e);r.open(),this.setTransport(r)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",Re.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=e.data,this._onError(r);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(r+=Za(i)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Kr(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,r,n){return this._sendPacket("message",e,r,n),this}send(e,r,n){return this._sendPacket("message",e,r,n),this}_sendPacket(e,r,n,i){if(typeof r=="function"&&(i=r,r=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const o={type:e,data:r,options:n};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),e()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(Re.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Nn&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=Dr.indexOf(this._offlineEventListener);n!==-1&&Dr.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,r),this.writeBuffer=[],this._prevBufferLen=0}}}Re.protocol=Fo;class bc extends Re{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let r=this.createTransport(e),n=!1;Re.priorWebsocketSuccess=!1;const i=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",y=>{if(!n)if(y.type==="pong"&&y.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;Re.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(S(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const b=new Error("probe error");b.transport=r.name,this.emitReserved("upgradeError",b)}}))};function o(){n||(n=!0,S(),r.close(),r=null)}const s=y=>{const b=new Error("probe error: "+y);b.transport=r.name,o(),this.emitReserved("upgradeError",b)};function a(){s("transport closed")}function f(){s("socket closed")}function g(y){r&&y.name!==r.name&&o()}const S=()=>{r.removeListener("open",i),r.removeListener("error",s),r.removeListener("close",a),this.off("close",f),this.off("upgrading",g)};r.once("open",i),r.once("error",s),r.once("close",a),this.once("close",f),this.once("upgrading",g),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const r=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&r.push(e[n]);return r}}class kc extends bc{constructor(e,r={}){const n=typeof e=="object"?e:r;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(i=>hc[i]).filter(i=>!!i)),super(e,n)}}function vc(t,e="",r){let n=t;r=r||typeof location<"u"&&location,t==null&&(t=r.protocol+"//"+r.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=r.protocol+t:t=r.host+t),/^(https?|wss?):\/\//.test(t)||(typeof r<"u"?t=r.protocol+"//"+t:t="https://"+t),n=Mn(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const o=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+o+":"+n.port+e,n.href=n.protocol+"://"+o+(r&&r.port===n.port?"":":"+n.port),n}const Sc=typeof ArrayBuffer=="function",wc=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,Wo=Object.prototype.toString,_c=typeof Blob=="function"||typeof Blob<"u"&&Wo.call(Blob)==="[object BlobConstructor]",Ac=typeof File=="function"||typeof File<"u"&&Wo.call(File)==="[object FileConstructor]";function ti(t){return Sc&&(t instanceof ArrayBuffer||wc(t))||_c&&t instanceof Blob||Ac&&t instanceof File}function Rr(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let r=0,n=t.length;r<n;r++)if(Rr(t[r]))return!0;return!1}if(ti(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return Rr(t.toJSON(),!0);for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&Rr(t[r]))return!0;return!1}function Lc(t){const e=[],r=t.data,n=t;return n.data=Tn(r,e),n.attachments=e.length,{packet:n,buffers:e}}function Tn(t,e){if(!t)return t;if(ti(t)){const r={_placeholder:!0,num:e.length};return e.push(t),r}else if(Array.isArray(t)){const r=new Array(t.length);for(let n=0;n<t.length;n++)r[n]=Tn(t[n],e);return r}else if(typeof t=="object"&&!(t instanceof Date)){const r={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=Tn(t[n],e));return r}return t}function Ec(t,e){return t.data=Bn(t.data,e),delete t.attachments,t}function Bn(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let r=0;r<t.length;r++)t[r]=Bn(t[r],e);else if(typeof t=="object")for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(t[r]=Bn(t[r],e));return t}const jo=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Dc=5;var v;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(v||(v={}));class Rc{constructor(e){this.replacer=e}encode(e){return(e.type===v.EVENT||e.type===v.ACK)&&Rr(e)?this.encodeAsBinary({type:e.type===v.EVENT?v.BINARY_EVENT:v.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let r=""+e.type;return(e.type===v.BINARY_EVENT||e.type===v.BINARY_ACK)&&(r+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(r+=e.nsp+","),e.id!=null&&(r+=e.id),e.data!=null&&(r+=JSON.stringify(e.data,this.replacer)),r}encodeAsBinary(e){const r=Lc(e),n=this.encodeAsString(r.packet),i=r.buffers;return i.unshift(n),i}}class ri extends ${constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let r;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(e);const n=r.type===v.BINARY_EVENT;n||r.type===v.BINARY_ACK?(r.type=n?v.EVENT:v.ACK,this.reconstructor=new $c(r),r.attachments===0&&super.emitReserved("decoded",r)):super.emitReserved("decoded",r)}else if(ti(e)||e.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(e),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let r=0;const n={type:Number(e.charAt(0))};if(v[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===v.BINARY_EVENT||n.type===v.BINARY_ACK){const o=r+1;for(;e.charAt(++r)!=="-"&&r!=e.length;);const s=e.substring(o,r);if(s!=Number(s)||e.charAt(r)!=="-")throw new Error("Illegal attachments");const a=Number(s);if(!zo(a)||a<0)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=a}if(e.charAt(r+1)==="/"){const o=r+1;for(;++r&&!(e.charAt(r)===","||r===e.length););n.nsp=e.substring(o,r)}else n.nsp="/";const i=e.charAt(r+1);if(i!==""&&Number(i)==i){const o=r+1;for(;++r;){const s=e.charAt(r);if(s==null||Number(s)!=s){--r;break}if(r===e.length)break}n.id=Number(e.substring(o,r+1))}if(e.charAt(++r)){const o=this.tryParse(e.substr(r));if(ri.isPayloadValid(n.type,o))n.data=o;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,r){switch(e){case v.CONNECT:return Ir(r);case v.DISCONNECT:return r===void 0;case v.CONNECT_ERROR:return typeof r=="string"||Ir(r);case v.EVENT:case v.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&jo.indexOf(r[0])===-1);case v.ACK:case v.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class $c{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const r=Ec(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Mc(t){return typeof t=="string"}const zo=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function Nc(t){return t===void 0||zo(t)}function Ir(t){return Object.prototype.toString.call(t)==="[object Object]"}function Tc(t,e){switch(t){case v.CONNECT:return e===void 0||Ir(e);case v.DISCONNECT:return e===void 0;case v.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&jo.indexOf(e[0])===-1);case v.ACK:return Array.isArray(e);case v.CONNECT_ERROR:return typeof e=="string"||Ir(e);default:return!1}}function Bc(t){return Mc(t.nsp)&&Nc(t.id)&&Tc(t.type,t.data)}const Cc=Object.freeze(Object.defineProperty({__proto__:null,protocol:Dc,get PacketType(){return v},Encoder:Rc,Decoder:ri,isPacketValid:Bc},Symbol.toStringTag,{value:"Module"}));function z(t,e,r){return t.on(e,r),function(){t.off(e,r)}}const Ic=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Yo extends ${constructor(e,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[z(e,"open",this.onopen.bind(this)),z(e,"packet",this.onpacket.bind(this)),z(e,"error",this.onerror.bind(this)),z(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...r){var n,i,o;if(Ic.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(r.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const s={type:v.EVENT,data:r};if(s.options={},s.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const S=this.ids++,y=r.pop();this._registerAckCallback(S,y),s.id=S}const a=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,f=this.connected&&!(!((o=this.io.engine)===null||o===void 0)&&o._hasPingExpired());return this.flags.volatile&&!a||(f?(this.notifyOutgoingListeners(s),this.packet(s)):this.sendBuffer.push(s)),this.flags={},this}_registerAckCallback(e,r){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[e]=r;return}const o=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);r.call(this,new Error("operation has timed out"))},i),s=(...a)=>{this.io.clearTimeoutFn(o),r.apply(this,a)};s.withError=!0,this.acks[e]=s}emitWithAck(e,...r){return new Promise((n,i)=>{const o=(s,a)=>s?i(s):n(a);o.withError=!0,r.push(o),this.emit(e,...r)})}_addToQueue(e){let r;typeof e[e.length-1]=="function"&&(r=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...o)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(i)):(this._queue.shift(),r&&r(null,...o)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!e||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:v.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){const n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case v.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case v.EVENT:case v.BINARY_EVENT:this.onevent(e);break;case v.ACK:case v.BINARY_ACK:this.onack(e);break;case v.DISCONNECT:this.ondisconnect();break;case v.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const r=e.data||[];e.id!=null&&r.push(this.ack(e.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const r=this;let n=!1;return function(...i){n||(n=!0,r.packet({type:v.ACK,id:e,data:i}))}}onack(e){const r=this.acks[e.id];typeof r=="function"&&(delete this.acks[e.id],r.withError&&e.data.unshift(null),r.apply(this,e.data))}onconnect(e,r){this.id=e,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:v.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(e===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,e.data)}}}function Mt(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}Mt.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-r:t+r}return Math.min(t,this.max)|0};Mt.prototype.reset=function(){this.attempts=0};Mt.prototype.setMin=function(t){this.ms=t};Mt.prototype.setMax=function(t){this.max=t};Mt.prototype.setJitter=function(t){this.jitter=t};class Cn extends ${constructor(e,r){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(r=e,e=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,Jr(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Mt({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=e;const i=r.parser||Cc;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var r;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(r=this.backoff)===null||r===void 0||r.setMin(e),this)}randomizationFactor(e){var r;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(r=this.backoff)===null||r===void 0||r.setJitter(e),this)}reconnectionDelayMax(e){var r;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(r=this.backoff)===null||r===void 0||r.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new kc(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=z(r,"open",function(){n.onopen(),e&&e()}),o=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},s=z(r,"error",o);if(this._timeout!==!1){const a=this._timeout,f=this.setTimeoutFn(()=>{i(),o(new Error("timeout")),r.close()},a);this.opts.autoUnref&&f.unref(),this.subs.push(()=>{this.clearTimeoutFn(f)})}return this.subs.push(i),this.subs.push(s),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(z(e,"ping",this.onping.bind(this)),z(e,"data",this.ondata.bind(this)),z(e,"error",this.onerror.bind(this)),z(e,"close",this.onclose.bind(this)),z(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(r){this.onclose("parse error",r)}}ondecoded(e){Kr(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,r){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new Yo(this,e,r),this.nsps[e]=n),n}_destroy(e){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(e){const r=this.encoder.encode(e);for(let n=0;n<r.length;n++)this.engine.write(r[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Ht={};function $r(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const r=vc(t,e.path||"/socket.io"),n=r.source,i=r.id,o=r.path,s=Ht[i]&&o in Ht[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||s;let f;return a?f=new Cn(n,e):(Ht[i]||(Ht[i]=new Cn(n,e)),f=Ht[i]),r.query&&!e.query&&(e.query=r.queryKey),f.socket(r.path,e)}Object.assign($r,{Manager:Cn,Socket:Yo,io:$r,connect:$r});window.GUILDSYNC_WEB=!0;const ni="guildsync-web-session";function Oc(){try{return JSON.parse(localStorage.getItem(ni)||"{}")||{}}catch{return{}}}function qc(t){localStorage.setItem(ni,JSON.stringify(t||{}))}function Ko(){localStorage.removeItem(ni)}async function xc(){return!0}async function Jo(){return!0}async function Fc(){return!0}async function Pc(){return!0}async function Gc(){return!0}async function Uc(){return window.location.assign("/api/auth/discord/web-login"),!0}async function Vc(){var o,s,a,f,g,S,y,b;const e=Oc().token||localStorage.getItem("guildsync-web-token")||"";if(!e)return{logged_in:!1,allowed:!1,status_message:"Not logged in."};const r=await fetch("/api/auth/session",{headers:{Authorization:`Bearer ${e}`}}),n=await r.json().catch(()=>({}));if(!r.ok||n.ok===!1)return Ko(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:n.message||"Session expired. Please log in again."};const i={logged_in:!0,allowed:!0,token:e,user:n.user,discord_user_id:((o=n.user)==null?void 0:o.discord_user_id)||"",username:((s=n.user)==null?void 0:s.username)||"",global_name:((a=n.user)==null?void 0:a.global_name)||"",display_name:((f=n.user)==null?void 0:f.display_name)||((g=n.user)==null?void 0:g.global_name)||((S=n.user)==null?void 0:S.username)||"",avatar_url:((y=n.user)==null?void 0:y.avatar_url)||"",role:((b=n.user)==null?void 0:b.role)||"user",status_message:"Logged in."};return qc(i),i}async function Hc(){return Ko(),localStorage.removeItem("guildsync-web-token"),{logged_in:!1,allowed:!1,status_message:"Logged out."}}async function Wc(){return Qr()}async function jc(){return Qr()}async function Qr(){return{watching:!1,directory:"Web upload mode",files:[{key:"banking",fileName:"GuildSyncBanking.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"},{key:"roster",fileName:"GuildSyncRoster.lua",enabled:!0,filePath:"Drag/drop onto the GuildSync web window"}]}}async function zc(){return Qr()}async function Yc(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function Kc(){return{ok:!0}}async function Jc(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.")}async function Qc(){return{ok:!0}}async function Xc(t){return t&&window.open(t,"_blank","noopener,noreferrer"),!0}async function Zc(){return{running:!1,message:"ESO process detection is only available in the desktop client."}}async function el(){throw new Error("Deposit mail sending is disabled in the web client. Use the GuildSync desktop client for ESO mail queue writes.")}async function tl(){return{ok:!0,acknowledgements:[],records:[]}}async function rl(){return{ok:!0}}async function nl(){return{ok:!0}}async function il(){throw new Error("File watching is not available in the web interface. Drag and drop GuildSyncApplications.lua onto the GuildSync web window.")}async function ol(){return{ok:!0}}const _r=new Map;function Wt(t,e){return _r.has(t)||_r.set(t,new Set),_r.get(t).add(e),()=>{var r;return(r=_r.get(t))==null?void 0:r.delete(e)}}const Xr="1.1.4",Qo={windows:{label:"Windows detected",shortLabel:"Windows"},macos:{label:"macOS detected",shortLabel:"macOS"},linux:{label:"Linux detected",shortLabel:"Linux"}},Xo="guildsync-web-savedvars-upload-banner-dismissed",sl=new Map([["GuildSyncBanking.lua","banking"],["GuildSyncRoster.lua","roster"],["GuildSyncApplications.lua","applications"]]),al=30*60*1e3,Zo="guildsync-pending-banking-uploads",es="guildsync-pending-deposit-mail",cl=5e3,ll=30*1e3,ts="guildsync-pending-roster-uploads",rs="guildsync-pending-applications-uploads",p=60*1e3,ii=7e3,ns=1400,is=2400,dl=4e3,ul=38,os=document.querySelector("#app");let ao=null,jt=null,co=!1,dr=!1,Mr=null,kn=!1,vn=!1,Sn=!1,$e=null,de={running:!1,message:""},lt=null,dt=null,Nr=!1,ut=null,wn=!1,ct=0,_n=!1,qe=new Map,He=new Map,B="",et=!1,tt=!1,Xt=[],m={logged_in:!1,allowed:!1,status_message:""},Se={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},ve=null,In="",d=null,P=[],Zr=[],en=null,rr=!1,Or=!1,qr="",ft=new Set,ht=new Set,nr="username",je="asc",On=null,qn=null,j=[],xr=null,xe=!1,lo=!1,Fr="",xn=null,Fn=null,ze=new Set,pt=new Set,he="",x="",N=-1,vt=!1,ir="",H=[],Fe="",Me=[],Ne=!1,me="",An=null,Y=-1,Nt=!1,or="",Te=[],Pr=!1,Ye=!1,Be="",St="",wt=!1,we="",W=[],_t="",rt="",Ce=[],Ie=!1,ge="",uo=null,Ve=0;const fl=650;let K=-1,Tt=!1,Bt=[],_e=!1,Ke="",Ct=!1,sr=[],Ae=!1,Je="",It=!1,oi=[],Le=!1,Qe="",Ot="",Ee="",mt="",De="",L=[],O=!1,q="",ot=!1,tn="",We="",ur="",fr="",pe=-1,Ue=!1,A=null,Xe=[],At=!1,be="",hr="",ee=-1,qt=!1,si=null,Zt=null;const ai=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let G=[],M="biweekly",ss=null,Pe=!1,Ze=!1,st="biweekly",xt=!1,Lt=!1,ue="",fe=null,T={targetType:"other",note:"",tickets:""},Ft=!1,nt="",I=[],re=[],ne="",ie=!1,oe="",gt=null,J=-1,ye=!1,Gr=!1,U="",E={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},Pt="",C=-1,Q=!1,Pn={biweekly:0,monthly:0};const hl=1780786800,Ge=14*24*60*60,Ur=60*60,Vr=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let D=Vr[0].id;function pl(){os.innerHTML=`
    <main class="splash-screen">
      <img src="${qa}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await xc(),await ml(),as(),yl(),tr(),await kt()},5e3)}async function ml(){try{m=await Vc()}catch(t){m={logged_in:!1,allowed:!1,status_message:""},h("session-error",k(t),{ttlMs:p})}}function as(){os.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${xa}" alt="" class="title-icon" />
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
            <img src="${Fa}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${c(Xr)}</div>
            </div>
          </div>
          <div class="compact-header-actions">
            ${ls()}
            <div id="discordArea" class="discord-area"></div>
          </div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${cs()}
        </nav>

        <div id="webSavedVarsUploadBannerHost">
          ${Xl()}
        </div>

        <section id="guildSyncTabContent" class="guildsync-tab-content${ys()?" web-upload-banner-dismissed":""}" aria-live="polite">
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await Pc()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await Jo(),await Gc()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await Fc()}),Cr(),Zl(),fs(),La(),ta(),fa(),bs(),ea(),Hs(),Ws(),js(),zs(),Ts(),ra(),Ll(),Oe(),$t(),co||(window.addEventListener("resize",()=>{Oa(),Ca()}),uh(),co=!0)}function cs(){return Vr.map(t=>{const e=t.id===D,r=kl(t.id,e),n=r?ds():0,i=r?`Deposit mail needs attention: ${n} item${n===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${r?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${u(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${u(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${vl(t.icon)}</span>
          <span class="guildsync-tab-label">${c(t.label)}</span>
          ${r?`<span class="guildsync-tab-mail-badge" aria-label="${u(i)}">${n>99?"99+":c(String(n))}</span>`:""}
        </button>
      `}).join("")}function gl(){const t=dn(),e=Qo[t]||{label:"Desktop client",shortLabel:"Desktop"};return ve&&ve.platform===t?{available:!0,label:`${ve.label||e.shortLabel} detected`,shortLabel:ve.label||e.shortLabel,fileName:ve.fileName,href:ve.url}:{available:!1,label:e.label,shortLabel:e.shortLabel,fileName:"",href:"",error:In}}async function yl(){const t=dn();In="";try{const e=await fetch(`/api/client-download?platform=${encodeURIComponent(t)}`,{headers:{Accept:"application/json"}});let r=null;try{r=await e.json()}catch{r=null}if(!e.ok)throw new Error((r==null?void 0:r.error)||`Download lookup failed with HTTP ${e.status}.`);const n=r.download&&typeof r.download=="object"?r.download:{},i=String(r.download_file_name||n.file_name||"").trim(),o=String(r.download_url||n.url||"").trim();if(!r.ok||!i||!o)throw new Error(r.error||"Download lookup did not return a usable file.");ve={platform:String(n.platform||r.platform||t).trim(),label:String(n.label||"").trim(),fileName:i,url:o}}catch(e){ve=null,In=(e==null?void 0:e.message)||"No GuildSync desktop client download is currently available.";const r=(Qo[t]||{}).shortLabel||"Desktop";h("desktop-client-download-unavailable",`No ${r} client is currently available for download.`,{tone:"warning",ttl:ii}),console.warn("GuildSync desktop client download lookup failed.",e)}bl()}function bl(){const t=document.querySelector(".compact-header-actions .desktop-client-download-button");!t||(t.outerHTML=ls())}function ls(){const t=gl();if(!t.available){const e=t.error||"Looking for latest download...";return`
      <button
        class="desktop-client-download-button"
        type="button"
        disabled
        title="${u(e)}"
        aria-label="${u(e)}"
      >
        <span class="desktop-client-download-icon" aria-hidden="true">\u2B07</span>
        <span class="desktop-client-download-copy">
          <span class="desktop-client-download-title">Download Desktop Client</span>
          <span class="desktop-client-download-subtitle">${c(t.label)} \xB7 ${c(e)}</span>
        </span>
        <span class="desktop-client-download-caret" aria-hidden="true">\u25BE</span>
      </button>
    `}return`
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
        <span class="desktop-client-download-subtitle">${c(t.label)} \xB7 ZIP</span>
      </span>
      <span class="desktop-client-download-caret" aria-hidden="true">\u25BE</span>
    </a>
  `}function ds(){return _()?sn()+yr()+da():0}function kl(t,e){return t!=="more"||e?!1:ds()>0}function vl(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function us(){const t=Vr.find(r=>r.id===D)||Vr[0];let e="";return t.id==="discord-members"?e=Dl():t.id==="eso-members"?e=Rl():t.id==="more"?e=Tu():t.id==="settings"?e=ed():e=`
      <div class="guildsync-tab-panel" data-active-tab="${u(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${c(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${ye?su():""}
    ${xt?Wu():""}
    ${Ft?Bu():""}
    ${Ue?Qd():""}
    ${Tt?od():""}
    ${Ct?ud():""}
    ${It?md():""}
    ${ot?Dd():""}
    ${qt?Al():""}
  `}function Sl(){return qt||vt||wt||ye||xt||Ft||Ue||Nt||Tt||Ct||It||ot||Ze}function wl(){return qt?!1:ot?(jn(),!0):It?(Wn(),!0):Ct?(Hn(),!0):Tt?(Vn(),!0):Ue?(Dt(),!0):Nt?(Kn(),!0):xt?(jr(),!0):Ft?(Ku(),l(),!0):ye?(ye=!1,l(),!0):vt?(vt=!1,l(),!0):wt?(wt=!1,l(),!0):Ze?(Ze=!1,l(),!0):!1}function _l(t){t.key==="Escape"&&wl()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",_l,!0),window.guildSyncGlobalModalEscapeAttached=!0);function ci(t={}){return new Promise(e=>{Zt&&Zt(!1),qt=!0,si={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},Zt=e,l()})}function Hr(t=!1){const e=Zt;Zt=null,qt=!1,si=null,e&&e(t===!0),l()}function Al(){const t=si||{};return`
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
          <button id="acceptGuildSyncConfirmButton" class="guildsync-confirm-button guildsync-confirm-accept ${u(t.confirmClass||"danger")}" type="button">${c(t.confirmLabel||"Confirm")}</button>
        </div>
      </div>
    </div>
  `}function fo(t){var n,i,o,s;const e=(i=(n=t.target).closest)==null?void 0:i.call(n,"#cancelGuildSyncConfirmButton"),r=(s=(o=t.target).closest)==null?void 0:s.call(o,"#acceptGuildSyncConfirmButton");if(!(!e&&!r)){if(t.preventDefault(),t.stopPropagation(),e){Hr(!1);return}r&&Hr(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",fo,!0),document.addEventListener("pointerup",fo,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function Ll(){if(!qt)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=n=>{n.preventDefault(),n.stopPropagation(),Hr(!1)}),e&&(e.onclick=n=>{n.preventDefault(),n.stopPropagation(),Hr(!0)});const r=document.querySelector(".guildsync-confirm-overlay");r&&(r.onclick=n=>{n.target===r&&(n.preventDefault(),n.stopPropagation())})}function fs(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(Sl())return;const e=t.dataset.tabId;!e||e===D||(D=e,l())})})}function El(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function l(t={}){ot&&El();const e=document.querySelector(".guildsync-tabs"),r=document.querySelector("#guildSyncTabContent");e&&(e.innerHTML=cs()),r&&(r.innerHTML=us()),fs(),La(),ta(),fa(),bs(),ea(),Hs(),Ws(),js(),zs(),Ts(),ra(),t.restoreDiscordSearchFocus&&Of(),t.restoreRosterSearchFocus&&qf(),D==="discord-members"&&(d==null?void 0:d.connected)&&P.length===0&&!rr&&_i({silent:!0}),D==="eso-members"&&(d==null?void 0:d.connected)&&j.length===0&&!xe&&!lo&&(lo=!0,Gt({silent:!0})),D==="more"&&(d==null?void 0:d.connected)&&G.length===0&&!Pe&&le({silent:!0}),(D==="discord-members"||D==="eso-members"||D==="settings")&&(d==null?void 0:d.connected)&&L.length===0&&!O&&gr({silent:!0})}function Dl(){const t=Bf(),e=xf(),r=Array.from(ft),n=Array.from(ht);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${c(Da(en))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${rr||Or?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Or?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${u(qr)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!ft.has(i)).map(i=>`<option value="${u(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All roles</span>':r.map(i=>Uf(i)).join("")}
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
              ${ai.filter(i=>!ht.has(i.id)).map(i=>`<option value="${u(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(i=>hs("discord",i)).join("")}
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
              ${t.length>0?t.map(i=>Ff(i)).join(""):Pf()}
            </tbody>
          </table>
        </div>
      </div>
      ${wt?Wl():""}
    </div>
  `}function Rl(){const t=xl(),e=Gl(),r=Array.from(ze),n=Array.from(pt);return`
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
          <span class="discord-last-refresh">Last Refresh: ${c(ku(xr))}</span>
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
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${u(Fr)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!ze.has(i)).map(i=>`<option value="${u(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All ranks</span>':r.map(i=>Ul(i)).join("")}
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
              ${ai.filter(i=>!pt.has(i.id)).map(i=>`<option value="${u(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(i=>hs("roster",i)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${zt("account_name","Account Name")}
                ${zt("rank","Rank")}
                ${zt("joined","Joined")}
                ${zt("notes","Notes","roster-notes-header")}
                ${zt("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map((i,o)=>$l(i,o)).join(""):Il()}
            </tbody>
          </table>
        </div>
      </div>
      ${vt?Kl():""}
      ${Nt?Nl():""}
    </div>
  `}function $l(t,e=-1){const r=Ol(t.rank||""),n=r?` style="color: ${r};"`:"";return`
    <tr class="eso-roster-row${e===N?" roster-search-active-row":""}"${n} data-roster-row-index="${u(String(e))}" data-eso-account-name="${u(t.account_name||"")}">
      <td>${c(t.account_name||"")}</td>
      <td>${li(t.rank||"")}</td>
      <td>${c(on(t.joined))}</td>
      <td class="roster-notes-cell">${Ml(t)}</td>
      <td class="member-link-action-cell">${xs({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function Ml(t){const e=String((t==null?void 0:t.account_name)||"").trim(),r=Number((t==null?void 0:t.note_count)||0),n=r>0,i=n?`${r} roster note${r===1?"":"s"} for ${e}`:`No roster notes for ${e}`;return`
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
  `}function Nl(){const t=or||"",e=Boolean((m==null?void 0:m.logged_in)&&(m==null?void 0:m.allowed));return`
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
          ${Be?`<div class="discord-data-error">${c(Be)}</div>`:""}
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
                ${Tl()}
              </tbody>
            </table>
          </div>
          ${e?Bl():'<div class="roster-history-muted">Log in to add a new note.</div>'}
        </div>
      </div>
    </div>
  `}function Tl(){return Pr?'<tr><td class="bank-empty-row" colspan="3">Loading notes...</td></tr>':!Array.isArray(Te)||Te.length===0?'<tr><td class="bank-empty-row" colspan="3">No notes recorded for this member.</td></tr>':Te.map(t=>`
      <tr>
        <td class="roster-notes-when-cell">${c(Cl(t.timestamp))}</td>
        <td class="roster-notes-officer-cell">${c(t.officer||"")}</td>
        <td class="roster-notes-note-cell">${c(t.note||"")}</td>
      </tr>
    `).join("")}function Bl(){return`
    <div class="roster-notes-form">
      <label for="rosterNotesNewNote">Add Note</label>
      <textarea
        id="rosterNotesNewNote"
        class="roster-notes-textarea"
        rows="4"
        placeholder="Enter a new roster note..."
        ${Ye?"disabled":""}
      >${c(St)}</textarea>
      <button id="saveRosterNoteButton" class="refresh-discord-button" type="button" ${Ye?"disabled":""}>
        ${Ye?"Saving...":"Save Note"}
      </button>
    </div>
  `}function Cl(t){const e=Number(t||0);return!Number.isFinite(e)||e<=0?"":new Date(e*1e3).toLocaleString()}function Il(){return`
    <tr>
      <td class="bank-empty-row" colspan="5">${c(xe?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function Ol(t){String(t||"").trim();const e=Vf(t);return ln(e==null?void 0:e.role_color)}function li(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${c(e)}</span>`}function ql(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":li(e)}function xl(){const t=Fr.trim().toLowerCase(),e=j.filter(r=>{const n=String(r.rank||"").trim();if(ze.size>0&&!ze.has(n)||!gs(pt,Gn(r)))return!1;if(!t)return!0;const i=on(r.joined),o=mi(r.joined),s=Gn(r),a=ms(r.account_name||"");return[r.account_name,n,i,o,r.joined,s,a].map(g=>String(g||"").toLowerCase()).join(" ").includes(t)});return Fl(e)}function Fl(t){if(!he||!x)return t;const e=x==="desc"?-1:1;return[...t].sort((r,n)=>{const i=ho(r,he),o=ho(n,he),s=i.localeCompare(o,void 0,{sensitivity:"base",numeric:!0});return s!==0?s*e:String(r.account_name||"").localeCompare(String(n.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function ho(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const r=Number(t.joined||0);return Number.isFinite(r)&&r>0?String(r).padStart(16,"0"):""}if(e==="notes")return String(Number(t.note_count||0)).padStart(8,"0");if(e==="linked"){const r=Gn(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[r]||"9"} ${r} ${ms(t.account_name||"")}`}return String(t.account_name||"")}function Pl(t){const r=new Set(["account_name","rank","joined","notes","linked"]).has(t)?t:"account_name";he!==r?(he=r,x="asc"):x==="asc"?x="desc":x==="desc"?(he="",x=""):(he=r,x="asc"),N=-1,l()}function zt(t,e,r=""){const n=he===t&&Boolean(x),i=n?x==="asc"?"ascending":"descending":"none",o=n?x==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${u(r)}" aria-sort="${u(i)}">
      <button
        class="discord-sort-header roster-sort-header${n?" active":""}"
        type="button"
        data-roster-sort-column="${u(t)}"
        title="Sort ${u(e)}${n&&x==="asc"?" descending":n&&x==="desc"?" not sorted":" ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${o}</span>
      </button>
    </th>
  `}function Gl(){return Array.from(new Set(j.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function Ul(t){const e=Ei(t),r=ln(e==null?void 0:e.role_color),n=Ri(r),i=Di(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-roster-rank-filter="${u(t)}"
      style="${i}"
      title="Remove ${u(t)} filter"
    >
      <span>${c(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Vl(t){const e=ai.find(r=>r.id===t);return e?e.label:t}function hs(t,e){const r=t==="roster"?"roster":"discord",n=Vl(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${r}-link-status-filter="${u(e)}"
      title="Remove ${u(n)} link filter"
    >
      <span>${c(n)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function ps(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked"&&String(r.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(r=>String(r.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function Hl(t){return ps(nn(t==null?void 0:t.discord_id))}function Gn(t){return ps(rn(t==null?void 0:t.account_name))}function ms(t){const e=rn(t),r=qs({mode:"eso-to-discord",esoAccountName:t}),n=e.filter(o=>String(o.link_status||"").trim().toLowerCase()==="linked").map(o=>o.discord_server_nickname||o.discord_display_name||o.discord_username||o.discord_user_id||"").filter(Boolean),i=e.filter(o=>String(o.link_status||"").trim().toLowerCase()==="candidate").map(o=>o.discord_server_nickname||o.discord_display_name||o.discord_username||o.discord_user_id||"").filter(Boolean);return[r.label,r.title,n.join(" "),i.join(" ")].filter(Boolean).join(" ")}function gs(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function Wl(){return`
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
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${u(we)}" />
        </div>

        ${ge?`<div class="discord-data-error">${c(ge)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${jl()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${rt?`: ${c(rt)}`:""}</div>
            ${zl()}
          </div>
        </div>
      </div>
    </div>
  `}function jl(){return Ie&&W.length===0?'<div class="roster-history-muted">Searching...</div>':W.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${W.map((t,e)=>`
        <button class="roster-history-match${e===K||t.discord_id===_t?" is-selected":""}" type="button" data-discord-history-id="${u(t.discord_id)}" data-discord-history-name="${u(Un(t))}">
          <span>${c(Un(t))}</span>
          <strong>${c(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===K?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function zl(){return _t?Ie&&Ce.length===0?'<div class="roster-history-muted">Loading history...</div>':Ce.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
          ${Ce.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(mi(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${c(Yl(t.event_type))}</td>
              <td>${c(t.old_value||"")}</td>
              <td>${c(t.new_value||"")}</td>
              <td>${c(t.initiator||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function Un(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function Yl(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function Kl(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(ir)}" />
        </div>

        ${me?`<div class="discord-data-error">${c(me)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Jl()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${Fe?`: ${c(Fe)}`:""}</div>
            ${Ql()}
          </div>
        </div>
      </div>
    </div>
  `}function Jl(){return Ne&&H.length===0?'<div class="roster-history-muted">Searching...</div>':H.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${H.map((t,e)=>`
        <button class="roster-history-match${e===Y||t.account_name===Fe?" is-selected":""}" type="button" data-roster-history-account="${u(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <strong>${c(t.rank||"")}</strong>
          ${e===Y?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Ql(){return Fe?Ne&&Me.length===0?'<div class="roster-history-muted">Loading history...</div>':Me.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${Me.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(mi(t.timestamp))}</td>
              <td>${c(t.event_type||"")}</td>
              <td>${ql(t.rank)}</td>
              <td>${c(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function pr(){return typeof window<"u"&&window.GUILDSYNC_WEB===!0}function ys(){if(!pr())return!0;try{return localStorage.getItem(Xo)==="1"}catch{return!1}}function Xl(){return!pr()||ys()?"":`
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
  `}function Zl(){const t=document.querySelector("#webSavedVarsUploadBannerDismissButton");!t||t.addEventListener("click",()=>{var e,r;try{localStorage.setItem(Xo,"1")}catch{}(e=document.querySelector("#webSavedVarsUploadBannerHost"))==null||e.remove(),(r=document.querySelector(".guildsync-tab-content"))==null||r.classList.add("web-upload-banner-dismissed")})}function ed(){return`
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
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${_e?"disabled":""}>
              ${_e?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${Ae?"disabled":""}>
              ${Ae?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${Le?"disabled":""}>
              ${Le?"Loading...":"Run"}
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
  `}function bs(){var t,e,r,n;D==="settings"&&((t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>Ss()),(e=document.querySelector("#runDiscordRankAuditReportButton"))==null||e.addEventListener("click",()=>dd()),(r=document.querySelector("#runDiscordLastSeenReportButton"))==null||r.addEventListener("click",()=>pd()),(n=document.querySelector("#runMemberLinksReportButton"))==null||n.addEventListener("click",()=>Ad()))}function Tr(){return pr()&&_()&&(d==null?void 0:d.connected)===!0}function ks(){if(!pr())return null;let t=document.querySelector("#webSavedVarsFullScreenDropOverlay");return t||(t=document.createElement("div"),t.id="webSavedVarsFullScreenDropOverlay",t.className="web-savedvars-fullscreen-drop-overlay",t.setAttribute("aria-hidden","true"),t.innerHTML=`
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
  `,document.body.appendChild(t),t)}function po(){const t=ks();!t||(t.classList.add("is-visible"),t.setAttribute("aria-hidden","false"))}function Ln(){const t=document.querySelector("#webSavedVarsFullScreenDropOverlay");!t||(t.classList.remove("is-visible"),t.setAttribute("aria-hidden","true"))}function Yt(t){var r;return Array.from(((r=t==null?void 0:t.dataTransfer)==null?void 0:r.types)||[]).includes("Files")}function td(t){!(t!=null&&t.dataTransfer)||(t.dataTransfer.dropEffect=Tr()?"copy":"none")}function vs(t){const e=String(t||"").split(/[\\/]/).pop();return sl.get(e)||""}function rd(){if(!pr())return;ks();const t=e=>{!Yt(e)||(e.preventDefault(),e.stopPropagation(),td(e))};document.addEventListener("dragenter",e=>{!Yt(e)||(t(e),ct+=1,Tr()&&po())},!0),document.addEventListener("dragover",e=>{t(e),Yt(e)&&Tr()&&po()},!0),document.addEventListener("dragleave",e=>{!Yt(e)||(e.preventDefault(),e.stopPropagation(),ct=Math.max(0,ct-1),ct===0&&Ln())},!0),document.addEventListener("drop",async e=>{var n;if(!Yt(e))return;if(t(e),ct=0,Ln(),!Tr()){h("web-savedvars-drop-not-ready","SavedVariables drag/drop is only available while logged in and connected to the GuildSync server.",{ttlMs:p});return}const r=Array.from(((n=e.dataTransfer)==null?void 0:n.files)||[]);await nd(r)},!0),window.addEventListener("blur",()=>{ct=0,Ln()})}async function nd(t=[]){if(_n){h("web-savedvars-drop-busy","A SavedVariables upload is already processing. Please wait for it to finish.",{ttlMs:p});return}const e=Array.from(t||[]).filter(Boolean);if(!e.length){h("web-savedvars-drop-empty","No file was dropped.",{ttlMs:p});return}const r=e.find(n=>!vs(n.name));if(r){h("web-savedvars-drop-invalid",`Unsupported file: ${r.name}. Drop only GuildSyncBanking.lua, GuildSyncRoster.lua, or GuildSyncApplications.lua.`,{ttlMs:p});return}_n=!0;try{for(const n of e)await id(n)}finally{_n=!1}}async function id(t){const e=vs(t.name);if(!e)throw new Error(`Unsupported file: ${t.name}`);const r=`web-savedvars-upload-${e}`,n=await t.text();if(!String(n||"").trim())throw new Error(`${t.name} is empty.`);h(r,`Uploading ${t.name}...`);try{const i=await w("guildsync:upload-savedvars-raw",{file_name:t.name,raw_lua_text:n,source:"web-drag-drop"},12e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||`${t.name} upload was rejected.`);e==="banking"?await le({silent:!0}):e==="roster"&&(await Gt({silent:!0}),await gr({silent:!0})),h(r,i.message||`${t.name} uploaded and processed.`,{ttlMs:p})}catch(i){throw h(r,k(i),{ttlMs:p}),i}un("version")}function Ss(){Tt=!0,Ke="",l(),Js()}function Vn(){Tt=!1,Ke="",l()}function od(){const t=sd(),e=ad(),r=Bt.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${_e?"disabled":""}>${_e?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(r))} total row${r===1?"":"s"}</span>
        </div>

        ${Ke?`<div class="discord-data-error">${c(Ke)}</div>`:""}

        <div class="report-results-content">
          ${_e&&r===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!_e&&r===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${r>0?mo("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${r>0?mo("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${c(As())}</textarea>
      </div>
    </div>
  `}function sd(){return Bt.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function ad(){return Bt.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function mo(t,e,r,n){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${c(t)}</h4>
          <p>${c(e)}</p>
        </div>
        <span>${c(String(r.length))} row${r.length===1?"":"s"}</span>
      </div>
      ${r.length>0?cd(r):`<div class="roster-history-muted report-section-empty">${c(n)}</div>`}
    </section>
  `}function cd(t=Bt){return`
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
              <td>${li(e.rank||"")}</td>
              <td>${c(on(e.joined))}</td>
              <td>${c(br(e.purchased_tickets||0))}</td>
              <td class="associate-earliest-deposit-cell">${c(ws(e))}</td>
              <td>${c(_s(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function ws(t){const e=String((t==null?void 0:t.earliest_deposit_summary)||"").trim();if(e)return e;const r=String((t==null?void 0:t.earliest_deposit_date)||"").trim(),n=String((t==null?void 0:t.earliest_deposit_raffle_period)||"").trim();return[r,n].filter(Boolean).join(" | ")}function _s(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function As(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Earliest Deposit / Raffle","Discord Link"]];for(const e of Bt){const r=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([r,e.account_name||"",e.rank||"",on(e.joined),br(e.purchased_tickets||0),ws(e),_s(e)])}return t.map(e=>e.map(an).join("	")).join(`
`)}async function ld(){const t=As();if(await cn(t)){h("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#associateTicketReportTsv");r&&(r.focus(),r.select()),h("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function dd(){Ct=!0,Je="",l(),Ks()}function Hn(){Ct=!1,Je="",l()}function ud(){const t=sr.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${Ae?"disabled":""}>${Ae?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(t))} total row${t===1?"":"s"}</span>
        </div>

        ${Je?`<div class="discord-data-error">${c(Je)}</div>`:""}

        <div class="report-results-content">
          ${Ae&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!Ae&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?fd(sr):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${c(Ds())}</textarea>
      </div>
    </div>
  `}function fd(t=sr){return`
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
              <td data-label="Discord Member" class="discord-rank-audit-member-cell">${c(Ls(e))}</td>
              <td data-label="Discord Rank Role" class="discord-rank-audit-discord-cell">${c(e.discord_rank||"No matching rank role")}</td>
              <td data-label="Linked ESO Account(s)" class="discord-rank-audit-eso-account-cell">${c(e.eso_accounts||"No linked ESO account")}</td>
              <td data-label="ESO Rank" class="discord-rank-audit-eso-rank-cell">${c(e.eso_rank||"None")}</td>
              <td data-label="Issue" class="discord-rank-audit-issue-cell">${c(Es(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Ls(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function Es(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function Ds(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of sr)t.push([Ls(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",Es(e)]);return t.map(e=>e.map(an).join("	")).join(`
`)}async function hd(){const t=Ds();if(await cn(t)){h("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:p});return}const r=document.querySelector("#discordRankAuditReportTsv");r&&(r.focus(),r.select()),h("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function pd(){It=!0,Qe="",Ot="",l(),Ys(),L.length===0&&!O&&gr({silent:!0})}function Wn(){It=!1,Qe="",Ot="",Ee="",mt="",De="",l()}function md(){const t=di(),e=oi.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${Le?"disabled":""}>${Le?"Loading...":"Run Again"}</button>
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
            value="${u(Ot)}"
          />
          <label class="discord-last-seen-link-filter-label" for="discordLastSeenLinkStatusFilter">Link Status</label>
          <select id="discordLastSeenLinkStatusFilter" class="discord-last-seen-link-status-filter" aria-label="Filter Discord Last Seen by linked ESO account status">
            <option value="" ${Ee===""?"selected":""}>All link statuses</option>
            <option value="linked" ${Ee==="linked"?"selected":""}>Linked</option>
            <option value="candidate" ${Ee==="candidate"?"selected":""}>Fuzzy / Candidate</option>
            <option value="unlinked" ${Ee==="unlinked"?"selected":""}>Unlinked</option>
          </select>
        </div>

        ${Qe?`<div class="discord-data-error discord-last-seen-report-error">${c(Qe)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${Le&&e===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!Le&&e===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${e>0?gd(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${c($s(t))}</textarea>
      </div>
    </div>
  `}function gd(t=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${Kt("name","Discord Member")}</th>
            <th>${Kt("eso","Linked ESO Account")}</th>
            <th>${Kt("date","Last Seen")}</th>
            <th>${Kt("days","Days Since")}</th>
            <th>${Kt("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr class="discord-last-seen-row ${u(wd(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${u(it(e).status)}" data-discord-last-seen-search="${u(Rs(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${Sd(e)}
                  <span>${c(Et(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${bd(e)}</td>
              <td>${c(ui(e.last_seen))}</td>
              <td>${c(fi(e.last_seen))}</td>
              <td>${c(Wr(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function Kt(t,e){const r=mt===t,n=r?De==="asc"?"\u25B2":"\u25BC":"\u2195",i=r?`${e}: ${De==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${r?" active":""}" type="button" data-discord-last-seen-sort="${u(t)}" title="${u(i)}">
      <span>${c(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${c(n)}</span>
    </button>
  `}function di(){const t=[...oi],e=mt,r=De;if(!e||!r)return t;const n=r==="desc"?-1:1;return t.sort((i,o)=>{var s,a;if(e==="date"){const f=Number(i.last_seen||0)||0,g=Number(o.last_seen||0)||0;return(f-g)*n}if(e==="days")return(go(i.last_seen)-go(o.last_seen))*n;if(e==="action")return Wr(i.last_seen_action).localeCompare(Wr(o.last_seen_action),void 0,{sensitivity:"base"})*n;if(e==="eso"){const f=it(i),g=it(o),S={linked:0,candidate:1,unlinked:2},y=((s=S[f.status])!=null?s:9)-((a=S[g.status])!=null?a:9);return y!==0?y*n:f.esoAccountName.localeCompare(g.esoAccountName,void 0,{sensitivity:"base"})*n}return Et(i).localeCompare(Et(o),void 0,{sensitivity:"base"})*n})}function yd(t){mt!==t?(mt=t,De="asc"):De==="asc"?De="desc":(mt="",De=""),l()}function Et(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function Rs(t){return[Et(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,kd(t),ui(t==null?void 0:t.last_seen),fi(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function it(t){const e=Fd(t==null?void 0:t.discord_id),r=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),n=String((e==null?void 0:e.eso_account_name)||"").trim();return r==="linked"&&n?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:n,title:`Linked ESO account: ${n}`}:(r==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&n?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:n,title:`Fuzzy ESO account candidate: ${n}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function bd(t){const e=it(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${u(e.className)}"
      title="${u(e.title)}"
      aria-label="${u(e.label)}"
      role="img"
    ></span>
  `}function kd(t){const e=it(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function vd(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!r)return"";if(/^https?:\/\//i.test(e))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function Sd(t){const e=Et(t),r=e?e.slice(0,2).toUpperCase():"?",n=vd(t);return n?`<span class="discord-member-avatar"><img src="${u(n)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${c(r)}</span>`}function ui(t){const e=Number(t);if(!e)return"Never";const r=new Date(e*1e3);if(Number.isNaN(r.getTime()))return String(t||"");const n=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(r).reduce((i,o)=>(i[o.type]=o.value,i),{});return`${n.month}/${n.day}/${n.year} ${n.hour}:${n.minute} ${n.dayPeriod}`}function wd(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const r=(Date.now()-e*1e3)/864e5;return r>30?"discord-last-seen-red":r>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function fi(t){const e=Number(t);if(!e)return"Never";const r=Date.now()-e*1e3;if(!Number.isFinite(r))return"";if(r<0)return"0 days";const n=Math.floor(r/864e5);return`${n} day${n===1?"":"s"}`}function go(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const r=Date.now()-e*1e3;return Number.isFinite(r)?r<0?0:Math.floor(r/864e5):Number.POSITIVE_INFINITY}function Wr(t){return String(t||"").trim()||"None tracked"}function $s(t=di()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const r of t){const n=it(r);e.push([Et(r),n.label||"",n.esoAccountName||"",ui(r==null?void 0:r.last_seen),fi(r==null?void 0:r.last_seen),Wr(r==null?void 0:r.last_seen_action),(r==null?void 0:r.username)||"",(r==null?void 0:r.discord_id)||""])}return e.map(r=>r.map(an).join("	")).join(`
`)}async function _d(){const t=di().filter(i=>{const o=ce(Ot),s=String(Ee||"").trim().toLowerCase(),a=!o||ce(Rs(i)).includes(o),f=!s||it(i).status===s;return a&&f}),e=$s(t);if(await cn(e)){h("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#discordLastSeenReportTsv");n&&(n.focus(),n.select()),h("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:p})}function Ad(){ot=!0,q="",l(),L.length===0&&!O&&gr({silent:!0})}function jn(){ot=!1,tn="",We="",ur="",fr="",pe=-1,l()}function Ms(t){return[...new Set((Array.isArray(L)?L:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function Ns(t,e){return t.map(r=>`<option value="${u(r)}" ${e===r?"selected":""}>${c(r)}</option>`).join("")}function Ld(){return Ns(Ms("link_status"),ur)}function Ed(){return Ns(Ms("link_method"),fr)}function Dd(){return`
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
            value="${u(tn)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${ur===""?"selected":""}>All statuses</option>
            ${Ld()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${fr===""?"selected":""}>All methods</option>
            ${Ed()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${We===""?"selected":""}>All actions</option>
            <option value="needs-link" ${We==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${We==="can-unlink"?"selected":""}>Unlink Available</option>
            <option value="can-unblock" ${We==="can-unblock"?"selected":""}>Unblock Available</option>
          </select>
        </div>

        ${q?`<div class="discord-data-error member-links-report-error">${c(q)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${Nd()}
        </div>
      </div>
    </div>
  `}function Ts(){var r,n,i,o,s,a;if(!ot)return;(r=document.querySelector("#closeMemberLinksReportButton"))==null||r.addEventListener("click",jn),(n=document.querySelector("#refreshMemberLinksButton"))==null||n.addEventListener("click",()=>gr()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>qd());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",Td),t.addEventListener("keydown",Od)),(o=document.querySelector("#memberLinksReportActionFilter"))==null||o.addEventListener("change",Bd),(s=document.querySelector("#memberLinksReportStatusFilter"))==null||s.addEventListener("change",Cd),(a=document.querySelector("#memberLinksReportMethodFilter"))==null||a.addEventListener("change",Id),mr(),document.querySelectorAll("[data-accept-member-candidate]").forEach(f=>{f.addEventListener("click",()=>Cs(f.dataset.acceptMemberCandidate||"",f.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(f=>{f.addEventListener("click",()=>xd(f.dataset.unlinkMemberLink||"",f.dataset.unlinkMemberLinkDiscordId||""))}),document.querySelectorAll("[data-unblock-member-auto-link]").forEach(f=>{f.addEventListener("click",()=>Is(f.dataset.unblockMemberAutoLink||"",f.dataset.unblockMemberAutoLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",f=>{f.target===e&&jn()})}function yo(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function bo(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function Rd(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function $d(t){return[...Array.isArray(t)?t:[]].sort((e,r)=>{const n=yo(e)-yo(r);if(n!==0)return n;const i=bo(e).localeCompare(bo(r),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((r==null?void 0:r.discord_user_id)||""),void 0,{sensitivity:"base"})})}function Md(t){const e=zn(t);let r="";e==="Username"?r=(t==null?void 0:t.discord_username)||"":e==="Global Name"?r=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(r=(t==null?void 0:t.discord_server_nickname)||""),r||(r=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const n=e?` <span class="member-link-report-match-field">(${c(e)})</span>`:"";return`<span class="member-link-report-discord-name">${c(r)}</span>${n}`}function Nd(){return O&&L.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(L)||L.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${$d(L).map(e=>{var o;const r=String(e.link_status||"").trim().toLowerCase(),n=String(e.link_method||"").trim().toLowerCase(),i=Md(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${u(Rd(e))}"
                data-member-links-report-status="${u(r)}"
                data-member-links-report-method="${u(n)}"
                data-member-links-report-action="${u(Number(e.locked||0)===1||r==="blocked"?"can-unblock":r==="linked"?"can-unlink":r==="candidate"?"needs-link":"")}"
              >
                <td>${c(e.eso_account_name||"")}</td>
                <td>${i}</td>
                <td class="member-links-status-col">${c(Number(e.locked||0)===1||r==="blocked"?"blocked":r||"")}</td>
                <td class="member-links-method-col">${c(n||"")}${Number(e.locked||0)===1?" \u{1F512}":""}</td>
                <td class="member-links-action-col">
                  <div class="member-link-actions">
                    ${r==="candidate"?`<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${u(e.eso_account_name||"")}" data-accept-member-candidate-discord-id="${u(e.discord_user_id||"")}" aria-label="Accept candidate link" title="Accept candidate link">\u2713</button>`:""}
                    ${r==="linked"?`<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${u(e.eso_account_name||"")}" data-unlink-member-link-discord-id="${u(e.discord_user_id||"")}" aria-label="Unlink this ESO/Discord pair" title="Unlink this ESO/Discord pair">\u{1F5D1}</button>`:""}
                    ${Number(e.locked||0)===1||r==="blocked"?`<button class="member-link-report-action member-link-report-unblock" type="button" data-unblock-member-auto-link="${u(e.eso_account_name||"")}" data-unblock-member-auto-link-discord-id="${u(e.discord_user_id||"")}" aria-label="Remove auto-link block" title="Remove auto-link block">\u21BA</button>`:""}
                  </div>
                </td>
                <td class="member-links-confidence-col">${c(String((o=e.match_confidence)!=null?o:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function Bs(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function ko(t){const e=Bs();if(e.forEach(n=>n.classList.remove("member-links-report-row-active")),e.length===0){pe=-1;return}pe=Math.max(0,Math.min(t,e.length-1));const r=e[pe];r.classList.add("member-links-report-row-active"),r.scrollIntoView({block:"nearest"})}function mr(){const t=ce(tn),e=String(We||"").trim().toLowerCase(),r=String(ur||"").trim().toLowerCase(),n=String(fr||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let o=0;i.forEach(a=>{const f=ce(a.dataset.memberLinksReportSearch||""),g=String(a.dataset.memberLinksReportAction||"").trim().toLowerCase(),S=String(a.dataset.memberLinksReportStatus||"").trim().toLowerCase(),y=String(a.dataset.memberLinksReportMethod||"").trim().toLowerCase(),at=(!t||f.includes(t))&&(!e||g===e)&&(!r||S===r)&&(!n||y===n);a.hidden=!at,a.classList.remove("member-links-report-row-active"),at&&(o+=1)});const s=document.querySelector("#memberLinksReportSearchEmpty");s&&(s.hidden=o!==0),pe=-1}function Td(t){tn=t.target.value||"",mr()}function Bd(t){We=t.target.value||"",mr()}function Cd(t){ur=t.target.value||"",mr()}function Id(t){fr=t.target.value||"",mr()}function Od(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Bs();if(e.length===0)return;if(t.key==="ArrowDown"){const n=pe<0?0:pe+1;ko(n>=e.length?e.length-1:n);return}const r=pe<0?e.length-1:pe-1;ko(r<0?0:r)}async function gr(t={}){if(!(d!=null&&d.connected)){q="You must be connected to load member links.",l();return}O=!0,q="",t.silent||l();try{const e=await w("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");L=Array.isArray(e.links)?e.links:[]}catch(e){q=k(e)}finally{O=!1,l()}}async function qd(){if(!(d!=null&&d.connected)||!m.logged_in){q="You must be logged in and connected to run auto-linking.",l();return}O=!0,q="",l();try{const t=await w("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");L=Array.isArray(t.links)?t.links:[],h("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:p})}catch(t){q=k(t)}finally{O=!1,l()}}async function Cs(t,e=""){try{const r=await w("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to accept candidate.");L=Array.isArray(r.links)?r.links:L,h("member-link-accepted",r.message||"Candidate accepted as a link.",{ttlMs:p})}catch(r){q=k(r),h("member-link-accept-error",q,{ttlMs:p})}}async function Is(t,e=""){if(!await ci({title:"Remove Auto-Link Block?",message:`Remove the blocked auto-match record between ${t} and this Discord account? Auto-linking will run immediately and this screen will refresh to show whether the pair linked again.`,confirmLabel:"Unblock",cancelLabel:"Cancel",confirmClass:"danger"}))return!1;O=!0,q="",l();try{const n=await w("guildsync:unblock-member-auto-link",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to remove auto-link block.");L=Array.isArray(n.links)?n.links:L;const i=X(t),o=String(e||"").trim(),s=n.refreshedPair||L.find(g=>X(g.eso_account_name)===i&&String(g.discord_user_id||"").trim()===o),a=String((s==null?void 0:s.link_status)||"").trim().toLowerCase(),f=a==="linked"?" It linked again automatically.":a==="candidate"?" It is now showing as a candidate.":" No automatic link was recreated.";return h("member-link-unblocked",`${n.message||"Auto-link block removed."}${f}`,{ttlMs:p}),!0}catch(n){return q=k(n),h("member-link-unblock-error",q,{ttlMs:p}),!1}finally{O=!1,l()}}async function xd(t,e=""){if(!!await ci({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const n=await w("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to unlink member.");L=Array.isArray(n.links)?n.links:L,h("member-link-unlinked",n.message||"Member link removed.",{ttlMs:p})}catch(n){q=k(n)}l()}}function X(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function rn(t){const e=X(t);return e?L.filter(r=>X(r.eso_account_name)===e):[]}function nn(t){const e=String(t||"").trim();return e?L.filter(r=>String(r.discord_user_id||"").trim()===e):[]}function Os(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const r=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(r.length>0){const i=r.find(s=>String(s.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const o=r.find(s=>String(s.link_method||"").trim().toLowerCase()==="exact");return o||r[0]}const n=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return n||e[0]}function Fd(t){return Os(nn(t))}function Pd(t){return`${X(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function hi(){return A?A.mode==="discord-to-eso"?nn(A.discordUserId):rn(A.esoAccountName):[]}function Gd(t){const e=String(t||"").trim(),r=P.find(n=>String(n.discord_id||"").trim()===e);return r&&(r.server_nickname||r.global_name||r.username||r.discord_id)||e}function qs(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?nn(t.discordUserId):rn(t.esoAccountName),n=Os(r),i=String((n==null?void 0:n.link_status)||"").trim().toLowerCase(),o=r.filter(a=>String(a.link_status||"").trim().toLowerCase()==="linked").length,s=r.filter(a=>String(a.link_status||"").trim().toLowerCase()==="candidate").length;return o>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?o===1?n.eso_account_name:`${o} ESO accounts`:o===1?n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member":`${o} Discord accounts`}`}:i==="candidate"||s>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?n.eso_account_name:n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member"}`}:i==="blocked"||Number((n==null?void 0:n.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function xs(t){const e=(t==null?void 0:t.mode)||"",r=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,n=qs(t);return`
    <button
      class="member-link-status-dot member-link-status-${u(n.className)}"
      type="button"
      title="${u(n.title)}"
      aria-label="${u(n.label)}"
      data-open-member-link-dialog="${u(e)}"
      data-member-link-value="${u(r||"")}"
    ></button>
  `}function Ud(){return A?A.mode==="discord-to-eso"?Gd(A.discordUserId):A.esoAccountName||"":""}function Fs(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function zn(t){const e=Fs((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const r=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(r.includes("discord_username")||r.includes("username"))return"Username";if(r.includes("discord_display_name")||r.includes("global")||r.includes("display"))return"Global Name";if(r.includes("discord_server_nickname")||r.includes("server")||r.includes("nickname"))return"Server Nickname";const n=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(n==="exact"||n==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",o=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let s=null;for(const a of o){const f=Vd(i,a.value);(!s||f>s.score)&&(s={...a,score:f})}if(s&&s.score>0)return s.field}return""}function ce(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function Vd(t,e){const r=ce(t),n=ce(e);if(!r||!n)return 0;if(r===n)return 100;if((r.includes(n)||n.includes(r))&&Math.min(r.length,n.length)>=4)return 88;const i=Math.abs(r.length-n.length),o=[...r].findIndex((a,f)=>a!==n[f]),s=o===-1?Math.min(r.length,n.length):o;return Math.max(0,Math.min(75,Math.round(s*10-i*3)))}function Hd(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function Wd(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function jd(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),r=Hd(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${c(r)}</span>`}function zd(t){var a;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",r=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",n=String(t.link_status||"").trim().toLowerCase(),s=n==="linked"?`<button
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
        <div><span>ESO:</span> ${c(t.eso_account_name||"")}</div>
        <div><span>Discord:</span> ${c(e)}</div>
        <div><span>Status:</span> ${jd(t)} \xB7 ${c(Wd(t.link_method))} \xB7 ${c(String((a=t.match_confidence)!=null?a:""))}% \xB7 ${c(r)}</div>
        ${zn(t)?`<div><span>Matched:</span> Matched on ${c(zn(t))}</div>`:""}
      </div>
      ${s}
    </div>
  `}function Yd(){const t=hi();return t.length?[...t].sort((r,n)=>{var f,g;const i=String(r.link_status||"").trim().toLowerCase(),o=String(n.link_status||"").trim().toLowerCase(),s={linked:0,candidate:1,blocked:2,unlinked:3},a=((f=s[i])!=null?f:9)-((g=s[o])!=null?g:9);return a!==0?a:Number(n.match_confidence||0)-Number(r.match_confidence||0)}).map(r=>zd(r)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function Kd(){if(At)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(be)return`<div class="discord-data-error">${c(be)}</div>`;if(!Array.isArray(Xe)||Xe.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(hi().map(r=>Pd(r))),e=[...Xe].filter(r=>{const n=(A==null?void 0:A.mode)==="discord-to-eso"?`${X(r.account_name)}::${String(A.discordUserId||"").trim()}`:`${X(A==null?void 0:A.esoAccountName)}::${String(r.discord_id||"").trim()}`;return!t.has(n)}).sort((r,n)=>{const i=Number(n.confidence||0)-Number(r.confidence||0);return i!==0?i:vo(r).localeCompare(vo(n),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(r=>Jd(r)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function vo(t){return((A==null?void 0:A.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function Jd(t,e={}){var y,b,F;const r=(A==null?void 0:A.mode)||"",n=r==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=Fs(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),o=r==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),s=[o,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),a=r==="discord-to-eso"?t.account_name:t.discord_id,f=e.disabled===!0,g=[n,o,s,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),S=[n,s,`${(y=t.confidence)!=null?y:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${u(a||"")}" data-member-link-option-search="${u(g)}" title="${u(S)}" ${f?"disabled":""}>
      <span class="member-link-option-name" title="${u(n||"")}">${c(n||"")}</span>
      <span class="member-link-option-subtitle" title="${u(s||"")}">${c(s||"")}</span>
      <span class="member-link-option-confidence" title="${u(String((b=t.confidence)!=null?b:0))}%">${c(String((F=t.confidence)!=null?F:0))}%</span>
    </button>
  `}function Qd(){const t=(A==null?void 0:A.mode)||"",e=Ud(),r=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
            ${Yd()}
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
              value="${u(hr)}"
            />
            ${Kd()}
          </section>
        </div>

      </div>
    </div>
  `}async function Ps(t,e){if(!(d!=null&&d.connected)||!_()){h("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:p});return}Ue=!0,A=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},Xe=[],At=!0,be="",hr="",ee=-1,l();try{if(!Array.isArray(L)||L.length===0){const i=await w("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(L=Array.isArray(i.links)?i.links:[])}const n=await w("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load link suggestions.");Xe=Array.isArray(n.options)?n.options:[]}catch(r){be=k(r)}finally{At=!1,l()}}function Dt(){document.removeEventListener("keydown",Yn),Ue=!1,A=null,Xe=[],At=!1,be="",hr="",ee=-1,l()}function Gs(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function So(t){const e=Gs();if(e.forEach(n=>n.classList.remove("member-link-option-row-active")),e.length===0){ee=-1;return}ee=Math.max(0,Math.min(t,e.length-1));const r=e[ee];r.classList.add("member-link-option-row-active"),r.scrollIntoView({block:"nearest"})}function Us(){const t=ce(hr),e=[...document.querySelectorAll(".member-link-option-row")];let r=0;e.forEach(i=>{const o=ce(i.dataset.memberLinkOptionSearch||i.textContent||""),s=!t||o.includes(t);i.hidden=!s,i.classList.remove("member-link-option-row-active"),s&&(r+=1)});const n=document.querySelector("#memberLinkSuggestionSearchEmpty");n&&(n.hidden=r!==0),ee=-1}function Xd(t){hr=t.target.value||"",Us()}function Zd(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=Gs();if(e.length===0)return;if(t.key==="ArrowDown"){const n=ee<0?0:ee+1;So(n>=e.length?e.length-1:n);return}const r=ee<0?e.length-1:ee-1;So(r<0?0:r)}function Yn(t){!Ue||t.key==="Escape"&&(t.preventDefault(),Dt())}async function eu(t){if(!(!A||!t))try{const e=A.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:A.discordUserId}:{esoAccountName:A.esoAccountName,discordUserId:t},r=await w("guildsync:manual-link-member",e,3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to link members.");L=Array.isArray(r.links)?r.links:L,h("member-link-saved",r.message||"Member link saved.",{ttlMs:p}),Dt()}catch(e){be=k(e),l()}}async function tu(t,e=""){await Cs(t,e),Dt()}async function Vs(){if(!!A){At=!0,be="",l();try{const t=A.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:A.discordUserId}:{mode:"eso-to-discord",accountName:A.esoAccountName},e=await w("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");Xe=Array.isArray(e.options)?e.options:[]}catch(t){be=k(t)}finally{At=!1,l()}}}async function ru(t="",e=""){const r=hi().find(i=>X(i.eso_account_name)===X(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!r||!await ci({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await w("guildsync:manual-unlink-member",{esoAccountName:r.eso_account_name,discordUserId:r.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");L=Array.isArray(i.links)?i.links:L,h("member-link-unlinked",i.message||"Member link removed.",{ttlMs:p}),await Vs()}catch(i){be=k(i),l()}}async function nu(t="",e=""){await Is(t,e)&&await Vs()}function Hs(){var r;if(!Ue)return;document.removeEventListener("keydown",Yn),document.addEventListener("keydown",Yn),(r=document.querySelector("#closeMemberLinkDialogButton"))==null||r.addEventListener("click",Dt);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",Xd),t.addEventListener("keydown",Zd),Us()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(n=>{n.addEventListener("click",()=>ru(n.dataset.unlinkEsoAccount||"",n.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-unblock-dialog-member-auto-link]").forEach(n=>{n.addEventListener("click",()=>nu(n.dataset.unblockEsoAccount||"",n.dataset.unblockDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(n=>{n.addEventListener("click",()=>eu(n.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(n=>{n.addEventListener("click",()=>tu(n.dataset.acceptDialogMemberCandidate||"",n.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",n=>{n.target===e&&Dt()})}function Ws(){var e,r,n;if(!Tt)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",Vn),(r=document.querySelector("#rerunAssociateTicketReportButton"))==null||r.addEventListener("click",()=>Js()),(n=document.querySelector("#copyAssociateTicketReportGridButton"))==null||n.addEventListener("click",()=>ld());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Vn()})}function js(){var e,r,n;if(!Ct)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",Hn),(r=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||r.addEventListener("click",()=>Ks()),(n=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||n.addEventListener("click",()=>hd());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Hn()})}function zs(){var n,i,o;if(!It)return;(n=document.querySelector("#closeDiscordLastSeenReportButton"))==null||n.addEventListener("click",Wn),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>Ys()),(o=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||o.addEventListener("click",()=>_d()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(s=>{s.addEventListener("click",()=>yd(s.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",iu);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",ou),pi();const r=document.querySelector(".discord-last-seen-report-overlay");r&&r.addEventListener("click",s=>{s.target===r&&Wn()})}function iu(t){Ot=t.target.value||"",pi()}function ou(t){Ee=t.target.value||"",pi()}function pi(){const t=ce(Ot),e=String(Ee||"").trim().toLowerCase(),r=[...document.querySelectorAll("[data-discord-last-seen-row]")];let n=0;r.forEach(o=>{const s=ce(o.dataset.discordLastSeenSearch||o.textContent||""),a=String(o.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),S=(!t||s.includes(t))&&(!e||a===e);o.hidden=!S,S&&(n+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=n!==0)}async function Ys(){if(!(d!=null&&d.connected)||!_()){Qe="You must be logged in and connected to run this report.",l();return}Le=!0,Qe="",l();try{const t=await w("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");P=Ai(t.members),Zr=Li(t.roles),oi=[...P]}catch(t){Qe=k(t)}finally{Le=!1,l(),R("discordLastSeenReportSearchInput")}}async function Ks(){if(!(d!=null&&d.connected)||!_()){Je="You must be logged in and connected to run this report.",l();return}Ae=!0,Je="",l();try{const t=await w("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");sr=Array.isArray(t.rows)?t.rows:[]}catch(t){Je=k(t)}finally{Ae=!1,l()}}async function Js(){if(!(d!=null&&d.connected)||!_()){Ke="You must be logged in and connected to run this report.",l();return}_e=!0,Ke="",l();try{const t=await w("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Bt=Array.isArray(t.rows)?t.rows:[]}catch(t){Ke=k(t)}finally{_e=!1,l()}}function yt(){const t=String(Pt||"").trim().toLowerCase(),e={account_name:"Anonymous",rank:"Manual Entry"},r=new Set(["anonymous"]),n=j.filter(i=>String(i.account_name||"").trim()).filter(i=>{const s=String(i.account_name||"").trim().toLowerCase();return!s||r.has(s)||t&&!s.includes(t)?!1:(r.add(s),!0)}).slice().sort((i,o)=>{const s=String(i.account_name||"").toLowerCase(),a=String(o.account_name||"").toLowerCase(),f=t&&s.startsWith(t)?0:1,g=t&&a.startsWith(t)?0:1;return f!==g?f-g:s.localeCompare(a)}).slice(0,19);return[e,...n]}function Qs(t=yt()){const e=String(E.accountName||"").trim();return t.length===0?'<div class="roster-history-muted manual-ticket-no-matches">No matching guild members found.</div>':t.map((r,n)=>`
        <button class="roster-history-match${n===C||r.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${u(r.account_name)}" role="option" aria-selected="${n===C||r.account_name===e?"true":"false"}">
          <span>${c(r.account_name)}</span>
          <strong>${c(r.rank||"")}</strong>
          ${n===C?"<small>Enter</small>":""}
        </button>
      `).join("")}function Xs(){document.querySelectorAll("[data-manual-ticket-account]").forEach(t=>{t.addEventListener("mousedown",e=>{e.preventDefault()}),t.addEventListener("click",()=>{Zs(t.dataset.manualTicketAccount||"")})})}function En(){const t=document.querySelector("#manualTicketMatchList");if(!t)return;const e=yt();C>=e.length&&(C=e.length>0?e.length-1:-1),t.innerHTML=Qs(e),Xs()}function Zs(t){const e=String(t||"").trim();E.accountName=e,Pt=e,Q=!1,C=-1,U="",l()}function R(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const r=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(r,r)},0)}function su(){const t=Q?yt():[],e=String(E.accountName||"").trim();return`
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
              <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(Pt)}" autocomplete="off" />
            </label>

            ${Q?`
              <div id="manualTicketMatchList" class="roster-history-match-list manual-ticket-match-list" role="listbox" aria-label="Matching guild members">
                ${Qs(t)}
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
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${Gr?"disabled":""}>${Gr?"Saving...":"Add Manual Entry"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function ea(){var o,s,a,f,g,S;if(!ye)return;(o=document.querySelector("#closeManualBiweeklyTicketButton"))==null||o.addEventListener("click",()=>{ye=!1,l()});const t=document.querySelector("#manualTicketAccountSearchInput");if(t){const y=({rerender:b=!1}={})=>{if(Q=!0,C=yt().length>0?0:-1,b){l(),R("manualTicketAccountSearchInput");return}En()};t.addEventListener("focus",()=>{Q||y({rerender:!0})}),t.addEventListener("click",()=>{Q||y({rerender:!0})}),t.addEventListener("input",b=>{Pt=b.target.value||"",E.accountName="",Q=!0,C=yt().length>0?0:-1,En()}),t.addEventListener("keydown",b=>{if(b.key==="Escape")return;if(!Q){(b.key==="ArrowDown"||b.key==="ArrowUp")&&(b.preventDefault(),y({rerender:!0}));return}const F=yt();if(b.key==="ArrowDown"||b.key==="ArrowUp"){if(F.length===0)return;b.preventDefault();const Vt=b.key==="ArrowDown"?1:-1;C=((C<0?0:C)+Vt+F.length)%F.length,En();return}if(b.key!=="Enter")return;b.preventDefault();const ke=F[C>=0?C:0];ke!=null&&ke.account_name&&Zs(ke.account_name)})}Xs(),(s=document.querySelector("#manualTicketNoteInput"))==null||s.addEventListener("input",y=>{E.note=y.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(y=>{y.addEventListener("click",()=>{const b=String(y.dataset.manualTicketType||"").trim().toLowerCase();E.ticketType=b==="monthly"?"monthly":"biweekly",l()})}),(a=document.querySelector("[data-manual-ticket-toggle]"))==null||a.addEventListener("click",()=>{E.ticketType=E.ticketType==="monthly"?"biweekly":"monthly",l()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",y=>{const b=String(y.target.value||"").replace(/\D/g,"");y.target.value!==b&&(y.target.value=b),E.goldValue=b});const r=document.querySelector("#manualTicketCountInput");r==null||r.addEventListener("input",y=>{const b=String(y.target.value||"").replace(/\D/g,"");y.target.value!==b&&(y.target.value=b),E.tickets=b});const n=y=>{const b=Number(E.tickets)||0,F=Math.max(0,b+y);E.tickets=String(F),r&&(r.value=E.tickets,r.focus())};(f=document.querySelector("#manualTicketCountUpButton"))==null||f.addEventListener("click",()=>n(1)),(g=document.querySelector("#manualTicketCountDownButton"))==null||g.addEventListener("click",()=>n(-1)),(S=document.querySelector("#saveManualBiweeklyTicketButton"))==null||S.addEventListener("click",()=>au());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",y=>{y.target===i&&(ye=!1,l())})}async function au(){const t=String(E.accountName||"").trim(),e=String(E.note||"").trim(),r=String(E.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",n=Number(String(E.goldValue||"").trim()||0),i=Number(String(E.tickets||"").trim()||0);if(Q){U="Select a matching guild member or Anonymous from the list before saving.",l(),R("manualTicketAccountSearchInput");return}if(!t){U="Select a matching guild member or Anonymous from the list before saving.",l(),R("manualTicketAccountSearchInput");return}if(!Number.isFinite(n)||n<0){U="Gold value must be zero or greater.",l();return}if(!Number.isFinite(i)||i<0){U="Tickets must be zero or greater.",l();return}const o=t.toLowerCase()==="anonymous";if(o&&Math.floor(i)>0){U="Anonymous cannot be awarded tickets. Use 0 tickets and enter a gold value.",l();return}if(Math.floor(n)===0&&Math.floor(i)===0){U=o?"Enter a gold value for Anonymous when tickets are 0.":"Enter gold or tickets. Both cannot be zero.",l();return}Gr=!0,U="",l();try{const s=await w("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:r,gold_value:Math.floor(n),tickets:Math.floor(i)},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to add manual entry.");ye=!1,E={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},Pt="",C=-1,Q=!1,await le({silent:!0}),h("manual-ticket-added",s.message||"Manual entry added.",{ttlMs:p})}catch(s){U=k(s)}finally{Gr=!1,l()}}async function cu(t=""){const e=String(t||"").trim();if(!!e){Nt=!0,or=e,Te=[],Pr=!0,Ye=!1,Be="",St="",l();try{const r=await w("guildsync:request-roster-member-notes",{account_name:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load roster notes.");Te=Array.isArray(r.notes)?r.notes:[]}catch(r){Be=k(r)}finally{Pr=!1,l()}}}function Kn(){Nt=!1,or="",Te=[],Pr=!1,Ye=!1,Be="",St="",l()}function lu(){var r,n;if(!Nt)return;(r=document.querySelector("#closeRosterNotesButton"))==null||r.addEventListener("click",Kn);const t=document.querySelector("#rosterNotesNewNote");t&&t.addEventListener("input",i=>{St=i.target.value||""}),(n=document.querySelector("#saveRosterNoteButton"))==null||n.addEventListener("click",()=>du());const e=document.querySelector(".roster-notes-overlay");e&&e.addEventListener("click",i=>{i.target===e&&Kn()})}async function du(){const t=String(St||"").trim();if(!t){Be="Enter a note before saving.",l();return}Ye=!0,Be="",l();try{const e=await w("guildsync:add-roster-member-note",{account_name:or,note:t},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to save roster note.");e.note&&(Te=[...Te,e.note]),St="";const r=j.find(n=>X(n.account_name)===X(or));r&&(r.note_count=Number(r.note_count||0)+1)}catch(e){Be=k(e)}finally{Ye=!1,l()}}function ta(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>Gt());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{vt=!0,me="",l()});const r=document.querySelector("#rosterMemberSearch");r&&(r.addEventListener("input",s=>{Fr=s.target.value||"",xn=s.target.selectionStart,Fn=s.target.selectionEnd,N=-1,l({restoreRosterSearchFocus:!0})}),r.addEventListener("keydown",uu)),document.querySelectorAll("[data-roster-sort-column]").forEach(s=>{s.addEventListener("click",()=>{Pl(s.dataset.rosterSortColumn||"account_name")})});const n=document.querySelector("#rosterRankFilter");n&&n.addEventListener("change",s=>{const a=String(s.target.value||"").trim();a&&(ze.add(a),N=-1,l())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(s=>{s.addEventListener("click",()=>{const a=s.dataset.removeRosterRankFilter||"";ze.delete(a),N=-1,l()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",s=>{const a=String(s.target.value||"").trim();a&&(pt.add(a),N=-1,l())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(s=>{s.addEventListener("click",()=>{const a=s.dataset.removeRosterLinkStatusFilter||"";pt.delete(a),N=-1,l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(s=>{s.addEventListener("click",()=>Ps(s.dataset.openMemberLinkDialog||"",s.dataset.memberLinkValue||""))}),document.querySelectorAll("[data-open-roster-notes]").forEach(s=>{s.addEventListener("click",()=>cu(s.dataset.openRosterNotes||""))}),lu();const o=document.querySelector("#clearRosterFiltersButton");o&&o.addEventListener("click",()=>{Fr="",ze.clear(),pt.clear(),he="",x="",N=-1,l()}),fu()}function uu(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){N=-1;return}t.preventDefault(),t.key==="ArrowDown"?N=N<0?0:Math.min(N+1,e.length-1):t.key==="ArrowUp"&&(N=N<0?e.length-1:Math.max(N-1,0)),e.forEach((n,i)=>{n.classList.toggle("roster-search-active-row",i===N)});const r=e[N];r&&typeof r.scrollIntoView=="function"&&r.scrollIntoView({block:"nearest",inline:"nearest"})}function fu(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{vt=!1,l()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",r=>{if(ir=r.target.value||"",Y=-1,!ir.trim()){clearTimeout(An),me="",H=[],Fe="",Me=[],Ne=!1,l(),R("rosterHistorySearchInput");return}clearTimeout(An),An=setTimeout(()=>{gu({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(H.length===0)return;r.preventDefault();const i=r.key==="ArrowDown"?1:-1;Y=((Y<0?0:Y)+i+H.length)%H.length,l(),R("rosterHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=H[Y>=0?Y:0];n!=null&&n.account_name&&_o(n.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(r=>{r.addEventListener("click",()=>{_o(r.dataset.rosterHistoryAccount||"")})})}function ra(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{wt=!1,l()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",r=>{we=r.target.value||"",K=-1,Ve+=1;const n=Ve;if(clearTimeout(uo),!we.trim()){ge="",W=[],_t="",rt="",Ce=[],Ie=!1,l(),R("discordHistorySearchInput");return}uo=setTimeout(()=>{hu({auto:!0,keepFocus:!0,generation:n})},fl)}),e.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(W.length===0)return;r.preventDefault();const i=r.key==="ArrowDown"?1:-1;K=((K<0?0:K)+i+W.length)%W.length,l(),R("discordHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=W[K>=0?K:0];n!=null&&n.discord_id&&wo(n.discord_id,Un(n))})),document.querySelectorAll("[data-discord-history-id]").forEach(r=>{r.addEventListener("click",()=>{wo(r.dataset.discordHistoryId||"",r.dataset.discordHistoryName||"")})})}async function hu(t={}){const e=Number.isInteger(t.generation)?t.generation:++Ve,r=we.trim();if(e===Ve){if(!r){ge="",W=[],K=-1,_t="",rt="",Ce=[],Ie=!1,l(),t.keepFocus&&R("discordHistorySearchInput");return}Ie=!0,ge="",W=[],K=-1,_t="",rt="",Ce=[],l(),t.keepFocus&&R("discordHistorySearchInput");try{const n=await w("guildsync:request-discord-member-history",{query:r},3e4);if(e!==Ve||r!==we.trim())return;if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search Discord member history.");W=pu(n.matches),K=W.length>0?0:-1}catch(n){if(e!==Ve||r!==we.trim())return;ge=k(n)}finally{if(e!==Ve||r!==we.trim())return;Ie=!1,l(),t.keepFocus&&R("discordHistorySearchInput")}}}async function wo(t,e="",r={}){const n=String(t||"").trim();if(!!n){_t=n,rt=String(e||n).trim(),we=rt,Ce=[],Ie=!0,ge="",l();try{const i=await w("guildsync:request-discord-member-history-events",{discord_id:n},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");Ce=mu(i.events)}catch(i){ge=k(i)}finally{Ie=!1,r.keepLoading||l()}}}function pu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function mu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n,i,o,s,a,f,g,S,y,b;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((n=(r=e.old_value)!=null?r:e.oldValue)!=null?n:"").trim(),new_value:String((o=(i=e.new_value)!=null?i:e.newValue)!=null?o:"").trim(),event_timestamp:(f=(a=(s=e.event_timestamp)!=null?s:e.eventTimestamp)!=null?a:e.timestamp)!=null?f:"",event_datetime:(S=(g=e.event_datetime)!=null?g:e.eventDatetime)!=null?S:"",initiator:String((b=(y=e.initiator)!=null?y:e.initiatorName)!=null?b:"").trim(),source:String(e.source||"").trim()}}):[]}async function gu(t={}){const e=ir.trim();if(!e){me="",H=[],Y=-1,Fe="",Me=[],Ne=!1,l(),t.keepFocus&&R("rosterHistorySearchInput");return}Ne=!0,me="",H=[],Y=-1,Fe="",Me=[],l(),t.keepFocus&&R("rosterHistorySearchInput");try{const r=await w("guildsync:request-roster-rank-history",{query:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search roster rank history.");H=yu(r.matches),Y=H.length>0?0:-1}catch(r){me=k(r)}finally{Ne=!1,l(),t.keepFocus&&R("rosterHistorySearchInput")}}async function _o(t,e={}){const r=String(t||"").trim();if(!!r){Fe=r,ir=r,Me=[],Ne=!0,me="",l();try{const n=await w("guildsync:request-roster-stream-history",{account_name:r},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster stream history.");Me=bu(n.events)}catch(n){me=k(n)}finally{Ne=!1,e.keepLoading||l()}}}function yu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function bu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(n=(r=e.timestamp)!=null?r:e.timestampS)!=null?n:"",officer:String(e.officer||"").trim()}}):[]}function na(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n,i;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(r=e.joined)!=null?r:"",note_count:Number((i=(n=e.note_count)!=null?n:e.noteCount)!=null?i:0)||0}}).sort((e,r)=>e.account_name.localeCompare(r.account_name)):[]}function ku(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function on(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function mi(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function vu(t={}){j=na(t.members),xr=t.last_refresh||new Date().toISOString(),D==="eso-members"&&l(),h("roster-data-updated",`Roster data updated. Loaded ${j.length} member record${j.length===1?"":"s"}.`,{ttlMs:p})}async function Gt(t={}){if(!!(d!=null&&d.connected)){xe=!0,l();try{const e=await w("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");j=na(e.members),xr=e.last_refresh||xr,t.silent||h("roster-data-loaded",`Loaded ${j.length} roster member${j.length===1?"":"s"}.`,{ttlMs:p})}catch(e){h("roster-data-error",k(e),{ttlMs:p})}finally{xe=!1,l()}}}async function Su(t={}){var e;if(!!_()){if(!(d!=null&&d.connected)){h("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}xe=!0,l();try{const r=await Jc(t);if(!(r!=null&&r.ok)){h("roster-data-pending",(r==null?void 0:r.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:p});return}const n={local_upload_id:ia(),authenticated_username:Z(),authenticated_discord_user_id:((e=m==null?void 0:m.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await sa(n)}catch(i){throw wu(n),i}await Gt({silent:!0})}catch(r){h("roster-data-error",k(r),{ttlMs:p})}finally{xe=!1,l()}}}function ia(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function gi(){try{const t=window.localStorage.getItem(ts),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function oa(t){window.localStorage.setItem(ts,JSON.stringify(Array.isArray(t)?t:[]))}function wu(t){const e=String((t==null?void 0:t.local_upload_id)||ia()),r=gi().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),oa(r),h("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function _u(t){const e=gi().filter(r=>(r==null?void 0:r.local_upload_id)!==t);oa(e)}async function Au(){if(vn||!(d!=null&&d.connected)||!_())return;const t=gi();if(t.length!==0){vn=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!_())return;await sa(e),_u(e.local_upload_id)}}catch(e){h("roster-data-pending-error",`Pending roster upload retry failed: ${k(e)}`,{ttlMs:p})}finally{vn=!1}}}async function sa(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await w("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const r=await Qc(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return h("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:p}),e}async function Lu(t={}){var e,r;if(!!_()){if(!(d!=null&&d.connected)){h("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}try{const n=await il(t);if(!(n!=null&&n.ok)){h("applications-data-info",(n==null?void 0:n.message)||"No application records were found to process.",{ttlMs:p});return}if((Array.isArray((e=n==null?void 0:n.data)==null?void 0:e.records)?n.data.records:[]).length===0){h("applications-data-info",`No application records were found in ${n.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:p});return}const o={local_upload_id:aa(),authenticated_username:Z(),authenticated_discord_user_id:((r=m==null?void 0:m.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await la(o)}catch(s){throw Eu(o),s}}catch(n){h("applications-data-error",k(n),{ttlMs:p})}}}function aa(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function yi(){try{const t=window.localStorage.getItem(rs),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function ca(t){window.localStorage.setItem(rs,JSON.stringify(Array.isArray(t)?t:[]))}function Eu(t){const e=String((t==null?void 0:t.local_upload_id)||aa()),r=yi().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),ca(r),h("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Du(t){const e=yi().filter(r=>(r==null?void 0:r.local_upload_id)!==t);ca(e)}async function Ru(){if(Sn||!(d!=null&&d.connected)||!_())return;const t=yi();if(t.length!==0){Sn=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!_())return;await la(e),Du(e.local_upload_id)}}catch(e){h("applications-data-pending-error",`Pending application upload retry failed: ${k(e)}`,{ttlMs:p})}finally{Sn=!1}}}async function la(t){var i;if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return h("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:p}),{ok:!0,sent_count:0,skipped_empty:!0};let r=0;for(const o of e){const s=await w("guildsync:eso-guild-application-message",{...t,record:o,recordKey:(o==null?void 0:o.recordKey)||"",message:$u(o)},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Backend rejected the application data payload. Application data was not cleared.");r+=1}const n=await ol(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return h("applications-data-sent",`Sent ${r} application record${r===1?"":"s"} to GuildSync backend.`,{ttlMs:p}),{ok:!0,sent_count:r}}function $u(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),r=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",n=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",o=String(t.applicationText||"_No application text captured._"),s=Object.entries(t).filter(([a])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(a)).map(([a,f])=>`**${a}:** ${Mu(f)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${r}** ${n} an application from **${i}**.`,"","**Application text:**","```",o.slice(0,1500),"```",s.length>0?"":null,s.length>0?"**Full captured record fields:**":null,...s].filter(a=>a!==null).join(`
`)}function Mu(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function Nu(t={}){await Lu(t)}function Tu(){const t=Jn(M),e=ff(t,M),r=M!=="other";return`
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
          ${Pu()}
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${c(Da(ss))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${Pe||!_()?"disabled":""} ${_()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Pe?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${Dn("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${Dn("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${Dn("other","?","Other","All other deposits")}
        </div>

        ${Fu(M)}

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
              ${t.length>0?t.map(n=>pf(n,r)).join(""):mf(r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${c(bt(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${M==="monthly"?`<div>Raffle Pot: <strong>${c(bt(Math.floor(e.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${M==="biweekly"?`<div>Raffle Pot: <strong>${c(bt(ya(e.amount)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${M==="biweekly"?`<div>Draws: <strong>${c(String(hf(e.amount)))}</strong></div>`:""}
          ${r?`<div>Total Tickets Awarded: <strong>${c(br(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${Ze?Ou(Jn(st)):""}
    </div>
  `}function Bu(){return`
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
            <input id="bankingHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" autocomplete="off" placeholder="Start typing part of an account name..." value="${u(nt)}" />
          </label>
          ${Cu()}
        </div>

        ${oe?`<div class="discord-data-error">${c(oe)}</div>`:""}

        <div class="banking-history-results">
          <div class="roster-history-section-title">Banking History${ne?`: ${c(ne)}`:""}${ne?`<span class="banking-history-count">${c(String(re.length))} record${re.length===1?"":"s"} found</span>`:""}</div>
          ${Iu()}
        </div>
      </div>
    </div>
  `}function Cu(){return nt.trim()?ie&&I.length===0&&!ne?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">Searching...</div></div>':I.length===0&&!ne?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">No matching banking names found.</div></div>':I.length===0?"":`
    <div class="banking-history-autocomplete" role="listbox" aria-label="Banking history matches">
      ${I.map((t,e)=>`
        <button class="banking-history-autocomplete-option${e===J?" is-selected":""}" type="button" data-banking-history-account="${u(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <small>${c(String(Number(t.record_count||t.recordCount||0)||0))} record${Number(t.record_count||t.recordCount||0)===1?"":"s"}</small>
        </button>
      `).join("")}
    </div>
  `:""}function Iu(){return ne?ie&&re.length===0?'<div class="roster-history-muted">Loading banking history...</div>':re.length===0?'<div class="roster-history-muted">No banking history found for this account.</div>':`
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
          ${re.map(t=>{var e,r,n,i,o,s,a;return`
            <tr>
              <td>${c(ef((n=(r=(e=t.event_timestamp)!=null?e:t.eventTimestamp)!=null?r:t.time)!=null?n:""))}</td>
              <td>${c(tf(t.transaction_type||t.type||""))}</td>
              <td>${c(rf((o=(i=t.deposit_amount)!=null?i:t.depositAmount)!=null?o:t.amount))}</td>
              <td>${c(nf((a=(s=t.ticket_quantity)!=null?s:t.ticketQuantity)!=null?a:t.ticketAmount))}</td>
              <td class="banking-history-note-cell">${c(t.note||"")}</td>
            </tr>
          `}).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see banking history.</div>'}function Ou(t){return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${c(se(st))} Deposits</h3>
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
              ${t.length>0?t.map(e=>qu(e)).join(""):xu()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${c(ha(t))}</textarea>
      </div>
    </div>
  `}function qu(t){return`
    <tr>
      <td>${c(t.displayName||"")}</td>
      <td>${c(String(Si(t,st)))}</td>
      <td>${c(String(Number(t.ticketAmount)||0))}</td>
      <td>${c(t.note||"")}</td>
    </tr>
  `}function xu(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${c(se(st))}.</td>
    </tr>
  `}function Fu(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=pa(t),r=zr(t),n=r<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${u(se(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${c(se(t))} Raffle Period ${r===0?"(Current)":`(${Math.abs(r)} period${Math.abs(r)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${c(Br(e.salesStart))} through ${c(Br(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${c(Br(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${n?"":"disabled"} aria-label="Next ${u(se(t))} raffle period">\u203A</button>
    </div>
  `}function Dn(t,e,r,n){const i=M===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${u(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${c(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${c(r)}</span>
        <span class="bank-section-subtitle">${c(n)}</span>
      </span>
    </button>
  `}function Pu(){if(!_())return"";const t=sn(),e=yr(),r=da(),n=t+e+r;if(n<=0)return"";const i=`Desktop Client Required${n>0?` (${n})`:""}`,o="Deposit mail checkout and ESO SavedVariables writing are disabled in the web client. Use the GuildSync desktop client for this mail workflow.";return`
    <button id="checkoutDepositMailButton" class="bank-export-button deposit-mail-button deposit-mail-status-only" type="button" data-deposit-mail-action="disabled" aria-disabled="true" title="${u(o)}" aria-label="${u(`${i}. ${o}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${c(i)}</span>
      <span class="deposit-mail-web-disabled" aria-hidden="true">Web Disabled</span>
    </button>
  `}function yr(){return kr().reduce((t,e)=>t+Ut(e.records).length,0)}function Gu(){const t=(m==null?void 0:m.user)||{};return new Set([Z(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function Uu(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?Gu().has(e):!1}function da(){return _()?G.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),r=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&r==="written_to_eso"&&Uu(t)}).length:0}function sn(){return G.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),r=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&r==="unsent"}).length}function Vu(t){const e=String(t||"").trim();return G.find(r=>String(r.eventId||"").trim()===e)||null}function bi(t){const e=String(t||"other").toLowerCase(),r=["biweekly","monthly","other"],n=r.includes(e)?e:"other",i=r.filter(o=>o!==n);return[i[0]||"biweekly",n,i[1]||"other"]}function ki(t={},e="other"){const r=String(e||"other").toLowerCase(),n=Number(t==null?void 0:t.amount)||0;return r===String((t==null?void 0:t.type)||"").toLowerCase()?Number(t==null?void 0:t.ticketAmount)||0:r==="biweekly"?Math.floor(n/500):r==="monthly"?Math.floor(n/2500):0}function ua(t={},e="other",r=""){const n=String(t.type||"other").toLowerCase(),i=se(n),o=se(e),s=Z()||"Unknown user",a=[`Moved from ${i} to ${o} by ${s}.`,`Ref ${t.eventId||""}`],f=String(r||"").trim();return f&&a.push(`Reason: ${f}`),a.join(`
`)}function Hu(t){const e=Vu(t);if(!e){h("banking-move-missing","Could not find the selected banking entry.",{ttlMs:p});return}const r=String(e.type||"other").toLowerCase();fe=e,T={targetType:r,note:"",tickets:String(ki(e,r))},ue="",Lt=!1,xt=!0,l()}function jr(){xt=!1,Lt=!1,ue="",fe=null,T={targetType:"other",note:"",tickets:""},l()}function Wu(){const t=fe||{},e=String(t.type||"other").toLowerCase(),r=se(e),n=bi(e);let i=String(T.targetType||n[0]||"other").toLowerCase();n.includes(i)||(i=n[0]||"other",T.targetType=i);const o=ua(t,i,T.note);return`
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
            <div><strong>Amount:</strong> ${c(bt(t.amount))} \u{1FA99}</div>
          </div>

          <div class="banking-move-target-row banking-move-slider-row">
            <span>Move To</span>
            <div class="banking-move-slider-control" role="radiogroup" aria-label="Move banking entry destination">
              <div class="banking-move-slider-labels">
                ${n.map(s=>`
                  <button
                    class="banking-move-slider-label ${i===s?"selected":""} ${s===e?"current":""}"
                    type="button"
                    role="radio"
                    aria-checked="${i===s?"true":"false"}"
                    data-banking-move-target="${u(s)}"
                  >
                    <strong>${c(se(s))}</strong>
                    <span>${s===e?"Current / restore original values":`${c(String(ki(t,s)))} tickets`}</span>
                  </button>
                `).join("")}
              </div>
            </div>
          </div>

          <div class="banking-move-compact-row">
            <label class="manual-ticket-count-field banking-move-ticket-field">
              <span>Tickets Awarded</span>
              <input id="bankingMoveTicketsInput" class="discord-search-input manual-ticket-count-input" type="number" min="0" step="1" inputmode="numeric" placeholder="# Tickets" value="${u(T.tickets)}" ${i==="other"?"disabled":""} />
            </label>

            <label class="manual-ticket-note-field banking-move-note-field">
              <span>Move Note</span>
              <textarea id="bankingMoveNoteInput" class="discord-search-input manual-ticket-note-input banking-move-note-input" rows="1" placeholder="Optional reason for this move">${c(T.note)}</textarea>
            </label>
          </div>

          <div class="roster-history-muted banking-move-generated-note">${c(o).replace(/\n/g,"<br>")}</div>

          <div class="manual-ticket-actions banking-move-actions">
            <button id="saveBankingMoveButton" class="refresh-discord-button banking-move-submit-button" type="button" ${Lt||i===e?"disabled":""}>${Lt?"MOVING...":i===e?"SELECT A SIDE TO MOVE":"MOVE"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function ju(){var r,n,i,o;if(!xt)return;(r=document.querySelector("#closeBankingMoveDialogButton"))==null||r.addEventListener("click",()=>jr());function t(s){const a=String(s||"other").toLowerCase(),f=String((fe==null?void 0:fe.type)||"other").toLowerCase(),g=bi(f);T.targetType=g.includes(a)?a:f,T.tickets=String(ki(fe||{},T.targetType)),l()}document.querySelectorAll("[data-banking-move-target]").forEach(s=>{s.addEventListener("click",()=>t(s.dataset.bankingMoveTarget))}),(n=document.querySelector("#bankingMoveTicketsInput"))==null||n.addEventListener("input",s=>{const a=String(s.target.value||"").replace(/\D/g,"");s.target.value!==a&&(s.target.value=a),T.tickets=a}),(i=document.querySelector("#bankingMoveNoteInput"))==null||i.addEventListener("input",s=>{T.note=s.target.value||"";const a=document.querySelector(".banking-move-generated-note");a&&(a.innerText=ua(fe||{},T.targetType||"other",T.note))}),(o=document.querySelector("#saveBankingMoveButton"))==null||o.addEventListener("click",()=>zu());const e=document.querySelector(".roster-history-overlay");e&&e.addEventListener("click",s=>{s.target===e&&jr()})}async function zu(){const t=fe;if(!(t!=null&&t.eventId)){ue="No banking entry is selected.",l();return}const e=String(t.type||"other").toLowerCase(),r=bi(e),n=String(T.targetType||r[0]||"other").toLowerCase();if(!r.includes(n)||n===e){ue="Select one of the side destinations before moving this entry.",l();return}const i=n==="other"?0:Math.floor(Number(String(T.tickets||"").trim()||0));if(!Number.isFinite(i)||i<0){ue="Tickets must be zero or greater.",l();return}Lt=!0,ue="",l();try{const o=await w("guildsync:move-banking-entry",{event_id:t.eventId,target_type:n,tickets:i,note:T.note||""},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Failed to move banking entry.");jr(),await le({silent:!0}),h("banking-entry-moved",o.message||"Banking entry moved.",{ttlMs:p})}catch(o){Lt=!1,ue=k(o),l()}}function Yu(){if(!_()){h("banking-history-login-required","Login required to lookup banking history.",{ttlMs:p});return}Ft=!0,nt="",I=[],re=[],ne="",ie=!1,oe="",J=-1,clearTimeout(gt),l(),R("bankingHistorySearchInput")}function Ku(){Ft=!1,ie=!1,oe="",clearTimeout(gt)}function Ju(){if(!Ft)return;const t=document.querySelector("#bankingHistorySearchInput");t&&(t.addEventListener("input",e=>{if(nt=e.target.value||"",J=-1,ne="",re=[],!nt.trim()){clearTimeout(gt),oe="",I=[],ie=!1,l(),R("bankingHistorySearchInput");return}clearTimeout(gt),gt=setTimeout(()=>{Qu({keepFocus:!0})},250)}),t.addEventListener("keydown",e=>{if(e.key==="ArrowDown"||e.key==="ArrowUp"){if(I.length===0)return;e.preventDefault();const n=e.key==="ArrowDown"?1:-1;J=((J<0?0:J)+n+I.length)%I.length,l(),R("bankingHistorySearchInput");return}if(e.key!=="Enter")return;e.preventDefault();const r=I[J>=0?J:0];r!=null&&r.account_name&&Ao(r.account_name)})),document.querySelectorAll("[data-banking-history-account]").forEach(e=>{e.addEventListener("click",()=>{Ao(e.dataset.bankingHistoryAccount||"")})})}async function Qu(t={}){const e=nt.trim();if(!e){oe="",I=[],J=-1,ne="",re=[],ie=!1,l(),t.keepFocus&&R("bankingHistorySearchInput");return}ie=!0,oe="",I=[],J=-1,l(),t.keepFocus&&R("bankingHistorySearchInput");try{const r=await w("guildsync:request-banking-history-matches",{query:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search banking history.");I=Xu(r.matches),J=I.length>0?0:-1}catch(r){oe=k(r)}finally{ie=!1,l(),t.keepFocus&&R("bankingHistorySearchInput")}}async function Ao(t){const e=String(t||"").trim();if(!!e){clearTimeout(gt),ne=e,nt=e,I=[],re=[],ie=!0,oe="",l();try{const r=await w("guildsync:request-banking-history-records",{account_name:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load banking history.");re=Zu(r.records)}catch(r){oe=k(r)}finally{ie=!1,l()}}}function Xu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n,i,o;return{account_name:String(e.account_name||e.accountName||"").trim(),record_count:Number((n=(r=e.record_count)!=null?r:e.recordCount)!=null?n:0)||0,last_event_timestamp:(o=(i=e.last_event_timestamp)!=null?i:e.lastEventTimestamp)!=null?o:""}}).filter(e=>e.account_name):[]}function Zu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var r,n,i,o,s,a,f,g,S;return{event_id:String(e.event_id||e.eventId||"").trim(),transaction_type:String(e.transaction_type||e.transactionType||e.type||"").trim(),event_timestamp:(i=(n=(r=e.event_timestamp)!=null?r:e.eventTimestamp)!=null?n:e.time)!=null?i:"",deposit_amount:(a=(s=(o=e.deposit_amount)!=null?o:e.depositAmount)!=null?s:e.amount)!=null?a:"",ticket_quantity:(S=(g=(f=e.ticket_quantity)!=null?f:e.ticketQuantity)!=null?g:e.ticketAmount)!=null?S:"",note:String(e.note||"").trim()}}).sort((e,r)=>{const n=Number(e.event_timestamp)||0,i=Number(r.event_timestamp)||0;return n!==i?n-i:String(e.event_id).localeCompare(String(r.event_id),void 0,{numeric:!0})}):[]}function ef(t){const e=Number(t);if(!e)return"";const r=new Date(e*1e3);if(Number.isNaN(r.getTime()))return String(t);const n=String(r.getMonth()+1).padStart(2,"0"),i=String(r.getDate()).padStart(2,"0"),o=String(r.getFullYear()),s=String(r.getHours()).padStart(2,"0"),a=String(r.getMinutes()).padStart(2,"0"),f=String(r.getSeconds()).padStart(2,"0");return`${n}/${i}/${o} ${s}:${a}:${f}`}function tf(t){const e=String(t||"").trim().toLowerCase();return e==="monthly"?"50/50":e==="biweekly"?"Bi-Weekly":e==="other"?"Other":e?e.replace(/\b\w/g,r=>r.toUpperCase()):""}function rf(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":bt(e)}function nf(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":br(e)}function fa(){if(D!=="more")return;ju(),Ju(),document.querySelectorAll("[data-bank-entry-move]").forEach(a=>{a.addEventListener("click",()=>Hu(a.dataset.bankEntryMove||""))}),document.querySelectorAll("[data-bank-section]").forEach(a=>{a.addEventListener("click",()=>{M=a.dataset.bankSection||"biweekly",l()})}),document.querySelectorAll("[data-bank-export-section]").forEach(a=>{a.addEventListener("click",()=>{st=(a.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",Ze=!0,l()})}),document.querySelectorAll("[data-bank-period-move]").forEach(a=>{a.addEventListener("click",()=>{af(a.dataset.bankPeriodMove||""),l()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{Ze=!1,l()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>of());const r=document.querySelector(".bank-export-overlay");r&&r.addEventListener("click",a=>{a.target===r&&(Ze=!1,l())});const n=document.querySelector("#openBankingHistoryButton");n&&n.addEventListener("click",()=>Yu());const i=document.querySelector("#openManualBiweeklyTicketButton");i&&i.addEventListener("click",async()=>{if(!_()){h("manual-ticket-login-required","Login required to add manual entries.",{ttlMs:p});return}ye=!0,U="",Pt=E.accountName||"",Q=!1,C=-1,j.length===0&&(d==null?void 0:d.connected)&&_()&&await Gt({silent:!0}),l()});const o=document.querySelector("#checkoutDepositMailButton");o&&o.addEventListener("click",()=>{o.dataset.depositMailAction==="checkout"&&o.getAttribute("aria-disabled")!=="true"&&_f()});const s=document.querySelector("#refreshBankingDataButton");s&&s.addEventListener("click",()=>{if(!_()){h("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:p});return}ka({key:"banking"})})}function ha(t){const e=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const r of t)e.push([r.displayName||"",String(Si(r,st)),String(Number(r.ticketAmount)||0),r.note||""]);return e.map(r=>r.map(an).join("	")).join(`
`)}function an(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function cn(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const r=document.createElement("textarea");r.value=e,r.setAttribute("readonly","readonly"),r.style.position="fixed",r.style.left="0",r.style.top="0",r.style.width="1px",r.style.height="1px",r.style.opacity="0",r.style.pointerEvents="none",r.style.zIndex="-1",document.body.appendChild(r),r.focus(),r.select(),r.setSelectionRange(0,r.value.length);let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r)}return n}async function of(){const t=Jn(st),e=ha(t);if(await cn(e)){h("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:p});return}const n=document.querySelector("#bankingExportTsv");n&&(n.focus(),n.select()),h("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:p})}function Jn(t){return G.filter(e=>e.type===t).filter(e=>sf(t,e)).sort((e,r)=>(Number(r.time)||0)-(Number(e.time)||0))}function sf(t,e){if(t==="other")return!0;const r=Number(e==null?void 0:e.time)||0;if(r<=0)return!1;const n=pa(t);return r>=n.salesStart&&r<=n.salesEnd}function zr(t){return Number(Pn[t])||0}function af(t){if(M!=="biweekly"&&M!=="monthly")return;const e=zr(M);if(t==="previous"){Pn[M]=e-1;return}t==="next"&&e<0&&(Pn[M]=e+1)}function pa(t){const e=Math.floor(Date.now()/1e3);if(t==="monthly"){const i=cf(e,zr(t));return{salesStart:ga(i)+1,salesEnd:i,raffleTime:i+Ur}}const r=Ge;let n=ma(e);return n+=zr(t)*r,{salesStart:n-r+1,salesEnd:n,raffleTime:n+Ur}}function ma(t){const e=Ge;let r=hl;for(;r-e>t;)r-=e;for(;r<t;)r+=e;return r}function cf(t,e=0){let r=lf(t),n=Number(e)||0;for(;n<0;)r=ga(r),n+=1;for(;n>0;)r=df(r),n-=1;return r}function lf(t){let e=ma(t);for(;!vi(e);)e+=Ge;return e}function ga(t){let e=t-Ge;for(;!vi(e);)e-=Ge;return e}function df(t){let e=t+Ge;for(;!vi(e);)e+=Ge;return e}function vi(t){const e=t+Ur,r=t+Ge+Ur;return Lo(e)!==Lo(r)}function Lo(t){var o,s;const e=new Date(Number(t||0)*1e3);if(Number.isNaN(e.getTime()))return"";const r=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit"}).formatToParts(e),n=((o=r.find(a=>a.type==="year"))==null?void 0:o.value)||"",i=((s=r.find(a=>a.type==="month"))==null?void 0:s.value)||"";return`${n}-${i}`}function uf(t=M){const e=String(t||"").toLowerCase();return e!=="monthly"&&e!=="biweekly"?0:"auto"}function Si(t={},e=M){const r=Number(t.amount)||0;if(!uf(e))return r;const n=Math.abs(Math.trunc(r))%10,i=n===1||n===3?n:0;return i>0&&r>i?r-i:r}function ff(t,e=M){return t.reduce((r,n)=>(r.amount+=Si(n,e),r.tickets+=Number(n.ticketAmount)||0,r),{amount:0,tickets:0})}function ya(t){const e=Math.ceil((Number(t)||0)/2);return e<=0?0:Math.ceil(e/2e5)*2e5}function hf(t){const e=ya(t);return e>0?e/2e5:0}function pf(t,e=!0){return`
    <tr>
      <td>${c(t.note||t.eventId||"")}</td>
      <td>${c(Br(t.time))}</td>
      <td>${c(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${c(bt(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td><strong class="bank-ticket-amount">${c(br(t.ticketAmount))}</strong></td>`:""}
      <td><button class="bank-entry-move-button" type="button" data-bank-entry-move="${u(t.eventId||"")}">Move</button></td>
    </tr>
  `}function mf(t=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?"6":"5"}">No ${c(se(M))} deposits found for this ${M==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function se(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function Br(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function bt(t){return(Number(t)||0).toLocaleString()}function br(t){return(Number(t)||0).toLocaleString()}function Ut(t){return Array.isArray(t)?t.map(e=>{var n,i,o,s,a,f,g,S,y,b,F,ke,Vt,at,Mi,Ni,Ti,Bi,Ci,Ii,Oi,qi,xi,Fi,Pi,Gi,Ui,Vi,Hi,Wi,ji,zi,Yi,Ki,Ji,Qi,Xi,Zi,eo,to,ro;const r=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:r==="monthly"||r==="biweekly"||r==="other"?r:"other",eventId:String((i=(n=e==null?void 0:e.eventId)!=null?n:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((s=(o=e==null?void 0:e.time)!=null?o:e==null?void 0:e.timestamp)!=null?s:0)||0,displayName:String((f=(a=e==null?void 0:e.displayName)!=null?a:e==null?void 0:e.display_name)!=null?f:"").trim(),amount:Number((g=e==null?void 0:e.amount)!=null?g:0)||0,ticketAmount:Number((y=(S=e==null?void 0:e.ticketAmount)!=null?S:e==null?void 0:e.ticket_amount)!=null?y:0)||0,note:String((b=e==null?void 0:e.note)!=null?b:"").trim(),dataSource:String((ke=(F=e==null?void 0:e.dataSource)!=null?F:e==null?void 0:e.data_source)!=null?ke:"").trim(),emailRequested:Boolean((Vt=e==null?void 0:e.emailRequested)!=null?Vt:e==null?void 0:e.email_requested),mailStatus:String((Mi=(at=e==null?void 0:e.mailStatus)!=null?at:e==null?void 0:e.mail_status)!=null?Mi:"").trim(),mailRequestId:String((Ti=(Ni=e==null?void 0:e.mailRequestId)!=null?Ni:e==null?void 0:e.mail_request_id)!=null?Ti:"").trim(),mailBatchId:String((Ci=(Bi=e==null?void 0:e.mailBatchId)!=null?Bi:e==null?void 0:e.mail_batch_id)!=null?Ci:"").trim(),checkedOutBy:String((Oi=(Ii=e==null?void 0:e.checkedOutBy)!=null?Ii:e==null?void 0:e.checked_out_by)!=null?Oi:"").trim(),checkedOutAt:String((xi=(qi=e==null?void 0:e.checkedOutAt)!=null?qi:e==null?void 0:e.checked_out_at)!=null?xi:"").trim(),checkoutExpiresAt:String((Pi=(Fi=e==null?void 0:e.checkoutExpiresAt)!=null?Fi:e==null?void 0:e.checkout_expires_at)!=null?Pi:"").trim(),writtenToEsoAt:String((Ui=(Gi=e==null?void 0:e.writtenToEsoAt)!=null?Gi:e==null?void 0:e.written_to_eso_at)!=null?Ui:"").trim(),sentAt:String((Hi=(Vi=e==null?void 0:e.sentAt)!=null?Vi:e==null?void 0:e.sent_at)!=null?Hi:"").trim(),failedReason:String((ji=(Wi=e==null?void 0:e.failedReason)!=null?Wi:e==null?void 0:e.failed_reason)!=null?ji:"").trim(),recipient:String((Ji=(Ki=(Yi=(zi=e==null?void 0:e.recipient)!=null?zi:e==null?void 0:e.account_name)!=null?Yi:e==null?void 0:e.displayName)!=null?Ki:e==null?void 0:e.display_name)!=null?Ji:"").trim(),subject:String((Zi=(Xi=(Qi=e==null?void 0:e.subject)!=null?Qi:e==null?void 0:e.mailSubject)!=null?Xi:e==null?void 0:e.mail_subject)!=null?Zi:"").trim(),body:String((ro=(to=(eo=e==null?void 0:e.body)!=null?eo:e==null?void 0:e.mailBody)!=null?to:e==null?void 0:e.mail_body)!=null?ro:"").trim()}}):[]}function gf(t){const e=new Map;for(const r of G)r.eventId&&e.set(r.eventId,r);for(const r of t)!r.eventId||e.set(r.eventId,r);G=Array.from(e.values()).sort((r,n)=>(Number(n.time)||0)-(Number(r.time)||0))}function ba(){ss=new Date().toISOString()}async function yf(t={}){!(t!=null&&t.ok)||(G=Ut(t.entries),ba(),D==="more"&&l(),h("banking-data-updated",`Banking data updated. Loaded ${G.length} deposit record${G.length===1?"":"s"}.`,{ttlMs:p}))}async function le(t={}){const e=Boolean(t.silent),r=Boolean(t.background);if(!(d!=null&&d.connected)){e||h("banking-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}r||(Pe=!0,l());try{const n=await w("guildsync:request-banking-data",{},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve banking data.");G=Ut(n.entries),ba(),e||h("banking-data",`Loaded ${G.length} banking deposit record${G.length===1?"":"s"}.`,{ttlMs:p})}catch(n){e||h("banking-data-error",k(n),{ttlMs:p})}finally{r||(Pe=!1),l()}}async function Eo(){!(d!=null&&d.connected)||!_()||Pe||(await le({silent:!0,background:!0}),sn()<=0&&yr()>0&&(de.running?l():Af("availability-refresh")))}function bf(){dt&&clearInterval(dt),Eo(),dt=window.setInterval(Eo,ll)}function kf(){dt&&(clearInterval(dt),dt=null)}async function vf(t={}){if(!!_()){if(!(d!=null&&d.connected)){h("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:p});return}try{const e=await tl(t);if(!(e!=null&&e.ok))return;const r=Array.isArray(e.ackEntries)?e.ackEntries:[];if(r.length===0)return;const n=await w("guildsync:mark-deposit-mail-sent",{mail_ack:r,mail_request_ids:r.map(s=>(s==null?void 0:s.mail_request_id)||(s==null?void 0:s.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(n.mail_request_ids)?n.mail_request_ids:Array.isArray(n.mailRequestIds)?n.mailRequestIds:[];if(i.length===0){h("deposit-mail-ack-none",n.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:p});return}const o=await rl(i);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");h("deposit-mail-ack-sent",o.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:p}),await le({silent:!0})}catch(e){h("deposit-mail-ack-error",k(e),{ttlMs:p})}}}async function Sf(){if(!wn){wn=!0;try{const t=await nl();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&h("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:p})}catch(t){h("deposit-mail-ack-cleanup-error",k(t),{ttlMs:p})}finally{wn=!1}}}async function ka(t={}){var e,r;if(!!_()){if(!(d!=null&&d.connected)){h("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:p});return}Pe=!0,l();try{const n=await Yc(t);if(!(n!=null&&n.ok)){h("banking-data-pending",(n==null?void 0:n.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:p});return}const i=Ut((e=n==null?void 0:n.data)==null?void 0:e.entries);gf(i);const o=new Date().toISOString(),s={local_upload_id:wa(),authenticated_username:Z(),authenticated_discord_user_id:((r=m==null?void 0:m.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:o,data:n.data||{}};try{await Aa(s)}catch(a){throw Df(s),a}await le({silent:!0})}catch(n){h("banking-data-error",k(n),{ttlMs:p})}finally{Pe=!1,l()}}}function va(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function kr(){try{const t=window.localStorage.getItem(es),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Sa(t){window.localStorage.setItem(es,JSON.stringify(Array.isArray(t)?t:[]))}function wf(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||va()),r=kr().filter(n=>String((n==null?void 0:n.mail_batch_id)||(n==null?void 0:n.mailBatchId)||(n==null?void 0:n.local_batch_id)||"")!==e);r.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),Sa(r)}function Do(t){const e=String(t||"").trim();if(!e)return;const r=kr().filter(n=>String((n==null?void 0:n.mail_batch_id)||(n==null?void 0:n.mailBatchId)||(n==null?void 0:n.local_batch_id)||"")!==e);Sa(r)}async function _f(){if(!_()){h("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:p});return}if(!(d!=null&&d.connected)){h("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:p});return}const t=kr(),e=sn();if(t.length>0&&e<=0){await Rt();return}l();try{const r=await w("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail checkout request.");const n=Ut(r.records);if(n.length===0){h("deposit-mail-none",r.message||"No unsent deposit mail is available.",{ttlMs:p}),await le({silent:!0});return}const i={mail_batch_id:r.mail_batch_id||r.mailBatchId||va(),checked_out_by:r.checked_out_by||r.checkedOutBy||Z(),checked_out_at:new Date().toISOString(),records:n};wf(i),await Rt()}catch(r){h("deposit-mail-error",k(r),{ttlMs:p})}finally{l()}}function Af(t=""){ut||Nr||!_()||yr()<=0||de.running||(ut=window.setTimeout(()=>{ut=null,Rt()},100))}async function Rt(){if(ut&&(window.clearTimeout(ut),ut=null),Nr||!_())return;const t=kr();if(t.length!==0){if(await Qn({silent:!0}),de.running){h("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:p}),l();return}Nr=!0,l();try{for(const e of t){const r=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),n=Ut(e==null?void 0:e.records);if(n.length===0){Do(r);continue}const i=await el(n);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(d!=null&&d.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const o=await w("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:r,event_ids:i.eventIds||n.map(s=>s.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||"Backend did not confirm deposit mail was marked written_to_eso.");Do(r),h("deposit-mail-written",i.message||`Wrote ${n.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:p})}await le({silent:!0})}catch(e){h("deposit-mail-write-error",k(e),{ttlMs:p})}finally{Nr=!1,l()}}}async function Qn(t={}){try{const e=Boolean(de.running),r=await Zc();de={running:Boolean(r==null?void 0:r.running),message:String((r==null?void 0:r.message)||"")},de.running||await Sf(),e&&!de.running&&(h("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:p}),await Rt()),e!==de.running&&l()}catch(e){t.silent||h("eso-status-error",k(e),{ttlMs:p})}}function Lf(){lt&&clearInterval(lt),Qn({silent:!0}).then(()=>{!de.running&&yr()>0&&Rt()}),lt=window.setInterval(()=>Qn({silent:!0}),cl)}function Ef(){lt&&(clearInterval(lt),lt=null)}function wa(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function wi(){try{const t=window.localStorage.getItem(Zo),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function _a(t){window.localStorage.setItem(Zo,JSON.stringify(Array.isArray(t)?t:[]))}function Df(t){const e=String((t==null?void 0:t.local_upload_id)||wa()),r=wi().filter(n=>(n==null?void 0:n.local_upload_id)!==e);r.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),_a(r),h("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:p})}function Rf(t){const e=wi().filter(r=>(r==null?void 0:r.local_upload_id)!==t);_a(e)}async function $f(){if(kn||!(d!=null&&d.connected)||!_())return;const t=wi();if(t.length!==0){kn=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!_())return;await Aa(e),Rf(e.local_upload_id)}}catch(e){h("banking-data-pending-error",`Pending banking upload retry failed: ${k(e)}`,{ttlMs:p})}finally{kn=!1}}}async function Aa(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await w("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const r=await Kc(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return h("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:p}),e}function La(){if(D!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>Mf());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{wt=!0,ge="",l(),R("discordHistorySearchInput")});const r=document.querySelector("#discordMemberSearch");r&&r.addEventListener("input",s=>{qr=s.target.value||"",On=s.target.selectionStart,qn=s.target.selectionEnd,l({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(s=>{s.addEventListener("click",()=>{If(s.dataset.discordSortColumn||"username")})});const n=document.querySelector("#discordRoleFilter");n&&n.addEventListener("change",s=>{const a=String(s.target.value||"").trim();a&&(ft.add(a),l())}),document.querySelectorAll("[data-remove-role-filter]").forEach(s=>{s.addEventListener("click",()=>{const a=s.dataset.removeRoleFilter||"";ft.delete(a),l()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",s=>{const a=String(s.target.value||"").trim();a&&(ht.add(a),l())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(s=>{s.addEventListener("click",()=>{const a=s.dataset.removeDiscordLinkStatusFilter||"";ht.delete(a),l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(s=>{s.addEventListener("click",()=>Ps(s.dataset.openMemberLinkDialog||"",s.dataset.memberLinkValue||""))});const o=document.querySelector("#clearDiscordFiltersButton");o&&o.addEventListener("click",()=>{qr="",ft.clear(),ht.clear(),l()})}async function Mf(){var t,e;if(!(d!=null&&d.connected)){h("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:p});return}Or=!0,l(),h("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const r=await w("guildsync:request-discord-data-refresh",{requested_by:((t=m==null?void 0:m.user)==null?void 0:t.display_name)||((e=m==null?void 0:m.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to request Discord data refresh.");h("discord-refresh-requested",r.message||"Discord data refresh completed.",{ttlMs:p}),await _i({silent:!0})}catch(r){h("discord-refresh-error",k(r),{ttlMs:p})}finally{Or=!1,l()}}async function Nf(){if(!(d!=null&&d.connected))return;const t=await w("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(en=t.value||null)}async function Tf(t={}){if(!!(t!=null&&t.ok)){P=Ai(t.members),Zr=Li(t.roles),t.last_refresh&&(en=t.last_refresh);try{await Nf()}catch{}D==="discord-members"&&l(),h("discord-data-updated",`Discord data updated. Loaded ${P.length} member record${P.length===1?"":"s"}.`,{ttlMs:p})}}async function _i(t={}){const e=Boolean(t.silent);if(!(d!=null&&d.connected)){h("discord-data-error","GuildSync websocket is not connected.",{ttlMs:p});return}rr=!0,l();try{const[r,n]=await Promise.all([w("guildsync:request-discord-data-date",{}),w("guildsync:request-discord-member-dataJSON",{})]);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord refresh date.");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord member data.");en=r.value||null,P=Ai(n.members),Zr=Li(n.roles),e||h("discord-data",`Loaded ${P.length} Discord member record${P.length===1?"":"s"}.`,{ttlMs:p})}catch(r){h("discord-data-error",k(r),{ttlMs:p})}finally{rr=!1,l()}}function w(t,e={},r=3e4){return new Promise((n,i)=>{if(!(d!=null&&d.connected)){i(new Error("GuildSync websocket is not connected."));return}let o=!1;const s=window.setTimeout(()=>{o||(o=!0,i(new Error(`${t} timed out.`)))},r);d.emit(t,e,a=>{o||(o=!0,window.clearTimeout(s),n(a))})})}function Ai(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(Ea).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,r)=>ar(e).localeCompare(ar(r),void 0,{sensitivity:"base"})):[]}function Li(t){if(!Array.isArray(t))return[];const e=new Map;for(const r of t){const n=Ea(r);if(!n)continue;const i=n.role_id||er(n.role_name);i&&!e.has(i)&&e.set(i,n)}return Array.from(e.values()).sort((r,n)=>String(r.role_name||"").localeCompare(String(n.role_name||""),void 0,{sensitivity:"base"}))}function Ea(t){var i,o;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),r=String(t.role_name||t.name||"Unnamed Role").trim(),n=(o=(i=t.role_color)!=null?i:t.color)!=null?o:null;return{role_id:e,role_name:r||"Unnamed Role",role_color:n}}function Bf(){const t=qr.trim().toLowerCase(),e=Array.from(ft),r=P.filter(n=>{if(t&&![n.username,n.global_name,n.server_nickname,n.discord_id,...n.roles.map(o=>o.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(n.roles.map(o=>o.role_name));if(!e.every(o=>i.has(o)))return!1}return!!gs(ht,Hl(n))});return Cf(r)}function Cf(t){const e=je==="desc"?-1:1;return[...t].sort((r,n)=>{const i=Ro(r,nr),o=Ro(n,nr),s=i.localeCompare(o,void 0,{sensitivity:"base",numeric:!0});return s!==0?s*e:ar(r).localeCompare(ar(n),void 0,{sensitivity:"base",numeric:!0})})}function Ro(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(r=>r.role_name||"").filter(Boolean).sort((r,n)=>r.localeCompare(n,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function If(t){const r=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";nr===r?je=je==="asc"?"desc":"asc":(nr=r,je="asc"),l()}function Ar(t,e){const r=nr===t,n=je==="asc"?"ascending":"descending",i=r?je==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${r?n:"none"}">
      <button
        class="discord-sort-header${r?" active":""}"
        type="button"
        data-discord-sort-column="${u(t)}"
        title="Sort ${u(e)} ${r&&je==="asc"?"descending":"ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function Of(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(On)?On:t.value.length,r=Number.isInteger(qn)?qn:e;t.setSelectionRange(e,r)}}function qf(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(xn)?xn:t.value.length,r=Number.isInteger(Fn)?Fn:e;t.setSelectionRange(e,r)}}function xf(){const t=new Set;for(const e of P)for(const r of e.roles)r.role_name&&t.add(r.role_name);return Array.from(t).sort((e,r)=>e.localeCompare(r,void 0,{sensitivity:"base"}))}function Ff(t){const e=Wf(t),r=ar(t),n=t.roles||[];return`
    <tr data-discord-user-id="${u(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${u(e)}" alt="${u(r)}" />`:`<span>${c(Ia(r))}</span>`}
          </div>
          <span>${c(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${c(t.global_name||"")}</td>
      <td>${c(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${n.length>0?n.map(i=>Gf(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${xs({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function Pf(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${c(rr?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function Gf(t){const e=ln(t.role_color),r=Ri(e),n=Di(e,r);return`
    <span
      class="discord-role-badge"
      title="${u(t.role_name)}"
      style="${n}"
    >${c(t.role_name)}</span>
  `}function Uf(t){const e=Ei(t),r=ln(e==null?void 0:e.role_color),n=Ri(r),i=Di(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-role-filter="${u(t)}"
      style="${i}"
      title="Remove ${u(t)} filter"
    >
      <span>${c(t)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Vf(t){const e=Hf(t);for(const r of e){const n=Ei(r);if(n)return n}return null}function Hf(t){const e=String(t||"").trim();if(!e)return[];const r=er(e),i={associate:["Associates","Associate"],associates:["Associates","Associate"],soldier:["Soldiers","Soldier"],soldiers:["Soldiers","Soldier"],capo:["Capo"],capos:["Capo","Capos"],caporegime:["CapoRegime","Capo Regime","Capo Regimes"],consiglieres:["Consigliere","Consiglieres"],consigliere:["Consigliere","Consiglieres"]}[r]||[e];return Array.from(new Set([e,...i].filter(Boolean)))}function er(t){return String(t||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function Ei(t){const e=er(t);if(!e)return null;const r=Zr.find(n=>er(n.role_name)===e);if(r)return r;for(const n of P){const i=n.roles.find(o=>er(o.role_name)===e);if(i)return i}return null}function ln(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function Di(t,e){return[`--role-fill-top: ${$o(t,"#ffffff",.16)}`,`--role-fill-bottom: ${$o(t,"#000000",.1)}`,`--role-fill-glow: ${Mo(t,.28)}`,`--role-fill-edge: ${Mo(t,.46)}`,`color: ${e}`].join("; ")}function $o(t,e,r){const n=Lr(t)||Lr("#64748b"),i=Lr(e)||Lr("#ffffff"),o=Math.max(0,Math.min(1,Number(r)||0)),s=Math.round(n.red+(i.red-n.red)*o),a=Math.round(n.green+(i.green-n.green)*o),f=Math.round(n.blue+(i.blue-n.blue)*o);return`#${Rn(s)}${Rn(a)}${Rn(f)}`}function Lr(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function Rn(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function Mo(t,e){const r=String(t||"#64748b").replace("#",""),n=/^[0-9a-f]{6}$/i.test(r)?r:"64748b",i=parseInt(n.slice(0,2),16),o=parseInt(n.slice(2,4),16),s=parseInt(n.slice(4,6),16);return`rgba(${i}, ${o}, ${s}, ${e})`}function Ri(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const r=parseInt(e.slice(0,2),16),n=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(r*299+n*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function Wf(t){const e=String((t==null?void 0:t.avatar)||"").trim(),r=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!r)return"";const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=64`}function ar(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function Da(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Cr(){const t=document.querySelector("#discordArea");if(!!t){if(vr(!1),_()){const e=m.user||{},r=Z(),n=lh(e),i=Ia(r);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${n?`<img src="${u(n)}" alt="${u(r)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${c(i)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const o=document.querySelector("#discordAvatarButton");o.addEventListener("contextmenu",s=>{s.preventDefault(),No()}),o.addEventListener("click",()=>{No()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",Jf)}}function No(){if(dr){vr();return}Kf()}function jf(t=$e){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],r=String((t==null?void 0:t.directory)||"").trim(),n=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const o=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),s=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),a=String((i==null?void 0:i.filePath)||(r?`${r}\\${s}`:s)).trim(),f=(i==null?void 0:i.enabled)!==!1,g=n&&f,S=`profileFileWatchToggle-${Yf(o||s)}`;return`
          <label class="profile-filewatch-item ${f?"enabled":"disabled"}" title="${u(a)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${c(s)}</span>
              <span class="profile-filewatch-state">${g?"Watching":f?"On":"Off"}</span>
            </span>
            <input
              id="${u(S)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${u(o)}"
              ${f?"checked":""}
              aria-label="Turn file watch ${f?"off":"on"} for ${u(s)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function $i(){var n,i,o;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=Z(),r=((n=m.user)==null?void 0:n.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${c(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${c(dh(r))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${c(Xr)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${$e!=null&&$e.watching?"Active":"Stopped"}</span>
        </div>
        ${jf()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(i=document.querySelector("#discordLogoutButton"))==null||i.addEventListener("click",Qf),(o=document.querySelector("#associateTicketReportButton"))==null||o.addEventListener("click",()=>{vr(!1),Ss()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(s=>{s.addEventListener("change",zf)})}async function Ra(){try{$e=await Qr(),dr&&$i()}catch(t){h("file-watcher-error",k(t),{ttlMs:p})}}async function zf(t){var n;const e=t.currentTarget,r=String(((n=e==null?void 0:e.dataset)==null?void 0:n.filewatchKey)||"").trim();if(!!r)try{e.disabled=!0,$e=await zc(r,e.checked),await kt({silent:!0}),dr&&$i()}catch(i){h("file-watcher-error",k(i),{ttlMs:p}),await Ra()}}function Yf(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function Kf(){const t=document.querySelector("#discordProfileMenu");!t||($i(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),dr=!0,Ra(),setTimeout(()=>{window.addEventListener("click",$a),window.addEventListener("keydown",Ma)},0))}function vr(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),dr=!1,t&&(window.removeEventListener("click",$a),window.removeEventListener("keydown",Ma))}function $a(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&vr()}function Ma(t){t.key==="Escape"&&vr()}async function Jf(){try{h("auth","Opening Discord login...",{ttlMs:p});const t=await Uc();t!=null&&t.status_message&&h("auth",t.status_message,{ttlMs:p}),Oe()}catch(t){h("auth-error",k(t),{ttlMs:p}),Oe()}}async function Qf(){try{m=await Hc(),h("auth",m.status_message||"Logged out.",{ttlMs:p}),as(),tr(),await kt()}catch(t){h("auth-error",k(t),{ttlMs:p}),Oe()}}function tr(){const t=m.socket_url||"https://guildsync.perdues.me";Xf(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};m!=null&&m.token&&(e.auth={token:m.token}),d=$r(t,e),d.on("connect",()=>{Oe(),Na(),D==="discord-members"&&_i({silent:!0}),D==="eso-members"&&Gt({silent:!0}),D==="more"&&le({silent:!0}),$f(),Rt(),Lf(),bf(),Au(),Ru(),Zf()}),d.on("connect_error",()=>{Oe(),Yr()}),d.on("disconnect",()=>{Oe(),Yr(),Ef(),kf()}),d.on("guildsync:version-status",r=>{eh(r)}),d.on("guildsync:discord-member-data-updated",r=>{Tf(r)}),d.on("guildsync:banking-data-updated",r=>{yf(r)}),d.on("guildsync:roster-data-updated",r=>{vu(r)}),d.on("guildsync:member-links-updated",(r={})=>{Array.isArray(r.links)&&(L=r.links,(D==="discord-members"||D==="eso-members"||D==="settings"||Ue)&&l())}),d.on("guildsync:discord-refresh-status",(r={})=>{const n=String(r.message||"").trim();n&&h("discord-refresh-status",n,{ttlMs:p})})}function Xf(t=!0){Yr(),d&&(d.disconnect(),d=null),t&&Oe()}function Na(){!(d!=null&&d.connected)||d.emit("guildsync:client-version",{version:Xr,platform:dn(),client_type:"wails"})}function Zf(){Yr(),Mr=window.setInterval(()=>{Na()},al)}function Yr(){Mr&&(window.clearInterval(Mr),Mr=null)}function eh(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",r=t.download&&typeof t.download=="object"?t.download:{};Se={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||r.url||"").trim(),fileName:String(t.download_file_name||r.file_name||"").trim(),platformLabel:String(r.label||t.platform||dn()).trim()},h("version",`GuildSync is out of date. Current version: ${Xr}. Latest version: ${e}.`),To();return}Se={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},To(),un("version")}}function dn(){const t=String(navigator.userAgent||"").toLowerCase(),r=`${String(navigator.platform||"").toLowerCase()} ${t}`;return r.includes("mac")?"macos":r.includes("linux")?"linux":"windows"}function To(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!Se.updateRequired||!Se.downloadUrl){t.innerHTML="";return}const e=Se.platformLabel||"Desktop",r=Se.latestVersion||"latest",n=Se.fileName||"GuildSync client download";t.innerHTML=`
    <button
      id="desktopUpdateDownloadButton"
      class="desktop-client-download-button"
      type="button"
      title="Download ${u(n)}"
      aria-label="Download GuildSync ${u(r)} for ${u(e)}"
    >
      <span class="desktop-client-download-icon" aria-hidden="true">\u2B07</span>
      <span class="desktop-client-download-copy">
        <span class="desktop-client-download-title">Download Update</span>
        <span class="desktop-client-download-subtitle">${c(e)} detected \xB7 ${c(r)}</span>
      </span>
      <span class="desktop-client-download-caret" aria-hidden="true">\u25BC</span>
    </button>
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{th()})}function th(){const t=String(Se.downloadUrl||"").trim();if(!t){h("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:p});return}Xc(t)}function h(t,e,r={}){const n=String(t||"").trim(),i=String(e||"").trim();if(!(!n||!i)){if(qe.set(n,i),He.has(n)&&(window.clearTimeout(He.get(n)),He.delete(n)),r.ttlMs&&Number(r.ttlMs)>0){const o=window.setTimeout(()=>{un(n)},Number(r.ttlMs));He.set(n,o)}$t()}}function un(t){const e=String(t||"").trim();if(!!e){if(qe.delete(e),He.has(e)&&(window.clearTimeout(He.get(e)),He.delete(e)),B===e){pn(()=>{B="",$t()});return}$t()}}function $t(){const t=fn();if(t.length===0){et?pn(cr):cr();return}!et&&!tt&&hn(t[0])}function fn(){return Array.from(qe.keys())}function Ta(){const t=fn();if(t.length===0)return"";if(!B)return t[0];const e=t.indexOf(B);return e<0?t[0]:t[(e+1)%t.length]}function hn(t){const e=document.querySelector("#statusMessageTrack");if(!e||!qe.has(t)){cr();return}mn();const r=qe.get(t);B=t,et=!0,tt=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=r,e.style.setProperty("--message-fade-duration",`${ns}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",tt=!1,rh()},{once:!0})})}function rh(){const t=fn();if(!B||!qe.has(B)){$t();return}if(t.length<=1){Bo(!1);return}Bo(!0)}function Bo(t){const e=document.querySelector("#statusMessageViewport"),r=document.querySelector("#statusMessageTrack");if(!e||!r)return;const n=Math.max(0,r.scrollWidth-e.clientWidth);if(n<=0){t&&lr(()=>{pn(()=>{const i=Ta();B="",i?hn(i):cr()})},ii);return}lr(()=>{Ba(n,t)},is)}function Ba(t,e){const r=document.querySelector("#statusMessageTrack");if(!r||!B||!qe.has(B))return;const n=Math.max(4,Math.ceil(t/ul));r.style.setProperty("--long-scroll-distance",`${t}px`),r.style.setProperty("--long-scroll-duration",`${n}s`),r.classList.add("long-scroll"),r.addEventListener("animationend",()=>{if(r.classList.remove("long-scroll"),r.style.transform=`translateX(-${t}px) translateY(-50%)`,e){lr(()=>{pn(()=>{const i=Ta();B="",i?hn(i):cr()})},ii);return}lr(()=>{nh()},dl)},{once:!0})}function nh(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!B||!qe.has(B))return;if(fn().length!==1){$t();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const n=Math.max(0,e.scrollWidth-t.clientWidth);n<=0||lr(()=>{Ba(n,!1)},is)}function pn(t){const e=document.querySelector("#statusMessageTrack");if(mn(),!e||!et){typeof t=="function"&&t();return}tt=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${ns}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",et=!1,tt=!1,typeof t=="function"&&t()},{once:!0})}function cr(){const t=document.querySelector("#statusMessageTrack");mn(),B="",et=!1,tt=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function lr(t,e){const r=window.setTimeout(()=>{Xt=Xt.filter(n=>n!==r),t()},e);Xt.push(r)}function mn(){for(const t of Xt)window.clearTimeout(t);Xt=[]}function Ca(){if(!et||tt||!B)return;const t=B;mn(),hn(t)}function Oe(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(d!=null&&d.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!_()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${Z()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${Z()}`)}}async function kt(t={}){try{if(_()){const e=await Wc();$e=e,!t.silent&&(e==null?void 0:e.message)&&h(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:p});return}$e=await jc(),un("file-watcher")}catch(e){h("file-watcher-error",k(e),{ttlMs:p})}}function Jt(t,e=null){const r="[GuildSync File Watcher]";if(e){console.log(`${r} ${t}`,e);return}console.log(`${r} ${t}`)}function ih(t={}){if(!_()){Jt("SavedVariables change ignored because the user is not authenticated.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",r=e.toLowerCase(),n=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",o=String(t.filePath||"").trim(),s=n?`${n} saved variables (${i})`:i;Jt(`SavedVariables change detected: ${i}${o?` (${o})`:""}. Key: ${r}.`,t),h(`saved-vars-file-updated-${e}`,`${s} has been updated.`,{ttlMs:p}),r==="banking"&&(Jt(`Processing banking SavedVariables update from ${i}.`),oh(t)),r==="roster"&&(Jt(`Processing roster SavedVariables update from ${i}.`),sh(t)),r==="applications"&&(Jt(`Processing applications SavedVariables update from ${i}.`),Nu(t))}async function oh(t={}){await vf(t),await ka(t)}async function sh(t={}){await Su(t)}function ah(t){!_()||h("file-watcher-error",k(t),{ttlMs:p})}function ch(){Wt("guildsync-savedvars-file-modified",ih),Wt("guildsync-file-watcher-error",ah),Wt("guildsync-login-complete",async t=>{m=t||{logged_in:!1,allowed:!1},Cr(),tr(),await kt(),h("auth",m.status_message||`Logged in and authorized as ${Z()}.`,{ttlMs:p})}),Wt("guildsync-login-denied",async t=>{m={logged_in:!1,allowed:!1,status_message:""},Cr(),await kt(),h("auth",t||"Access denied.",{ttlMs:p}),tr()}),Wt("guildsync-login-failed",async t=>{m={logged_in:!1,allowed:!1,status_message:""},Cr(),await kt(),h("auth",t||"Login failed.",{ttlMs:p}),tr()})}function _(){return Boolean((m==null?void 0:m.logged_in)&&(m==null?void 0:m.allowed)&&(m==null?void 0:m.token))}function Z(){var t,e;return((t=m.user)==null?void 0:t.display_name)||((e=m.user)==null?void 0:e.username)||"Discord User"}function lh(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),r=String(t.discord_user_id||"").trim();if(!e||!r)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const n=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(e)}.${n}?size=128`}function Ia(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function dh(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function uh(){jt&&(jt.disconnect(),jt=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),r=Math.round(t.getBoundingClientRect().height);jt=new ResizeObserver(n=>{const i=n[0];if(!i)return;const o=Math.round(i.contentRect.width),s=Math.round(i.contentRect.height);o===e&&s===r||(e=o,r=s,Oa(),Ca())}),jt.observe(t)}function Oa(){clearTimeout(ao),ao=setTimeout(async()=>{try{await Jo()}catch{}},500)}function k(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function c(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function u(t){return c(t)}ch();pl();rd();
