(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const va="/assets/splash.ea386b6a.png",Sa="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",wa="/assets/GuildSync-Graphic.9169020d.png",ce=Object.create(null);ce.open="0";ce.close="1";ce.ping="2";ce.pong="3";ce.message="4";ce.upgrade="5";ce.noop="6";const wn=Object.create(null);Object.keys(ce).forEach(t=>{wn[ce[t]]=t});const br={type:"error",data:"parser error"},So=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",wo=typeof ArrayBuffer=="function",_o=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Ur=({type:t,data:e},n,r)=>So&&e instanceof Blob?n?r(e):ji(e,r):wo&&(e instanceof ArrayBuffer||_o(e))?n?r(e):ji(new Blob([e]),r):r(ce[t]+(e||"")),ji=(t,e)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];e("b"+(r||""))},n.readAsDataURL(t)};function zi(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let ar;function _a(t,e){if(So&&t.data instanceof Blob)return t.data.arrayBuffer().then(zi).then(e);if(wo&&(t.data instanceof ArrayBuffer||_o(t.data)))return e(zi(t.data));Ur(t,!1,n=>{ar||(ar=new TextEncoder),e(ar.encode(n))})}const Ki="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Kt=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<Ki.length;t++)Kt[Ki.charCodeAt(t)]=t;const Aa=t=>{let e=t.length*.75,n=t.length,r,i=0,o,s,a,u;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const g=new ArrayBuffer(e),S=new Uint8Array(g);for(r=0;r<n;r+=4)o=Kt[t.charCodeAt(r)],s=Kt[t.charCodeAt(r+1)],a=Kt[t.charCodeAt(r+2)],u=Kt[t.charCodeAt(r+3)],S[i++]=o<<2|s>>4,S[i++]=(s&15)<<4|a>>2,S[i++]=(a&3)<<6|u&63;return g},La=typeof ArrayBuffer=="function",Hr=(t,e)=>{if(typeof t!="string")return{type:"message",data:Ao(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:Ea(t.substring(1),e)}:wn[n]?t.length>1?{type:wn[n],data:t.substring(1)}:{type:wn[n]}:br},Ea=(t,e)=>{if(La){const n=Aa(t);return Ao(n,e)}else return{base64:!0,data:t}},Ao=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},Lo=String.fromCharCode(30),Ra=(t,e)=>{const n=t.length,r=new Array(n);let i=0;t.forEach((o,s)=>{Ur(o,!1,a=>{r[s]=a,++i===n&&e(r.join(Lo))})})},$a=(t,e)=>{const n=t.split(Lo),r=[];for(let i=0;i<n.length;i++){const o=Hr(n[i],e);if(r.push(o),o.type==="error")break}return r};function Da(){return new TransformStream({transform(t,e){_a(t,n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const o=new DataView(i.buffer);o.setUint8(0,126),o.setUint16(1,r)}else{i=new Uint8Array(9);const o=new DataView(i.buffer);o.setUint8(0,127),o.setBigUint64(1,BigInt(r))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(n)})}})}let cr;function bn(t){return t.reduce((e,n)=>e+n.length,0)}function kn(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let r=0;for(let i=0;i<e;i++)n[i]=t[0][r++],r===t[0].length&&(t.shift(),r=0);return t.length&&r<t[0].length&&(t[0]=t[0].slice(r)),n}function Ma(t,e){cr||(cr=new TextDecoder);const n=[];let r=0,i=-1,o=!1;return new TransformStream({transform(s,a){for(n.push(s);;){if(r===0){if(bn(n)<1)break;const u=kn(n,1);o=(u[0]&128)===128,i=u[0]&127,i<126?r=3:i===126?r=1:r=2}else if(r===1){if(bn(n)<2)break;const u=kn(n,2);i=new DataView(u.buffer,u.byteOffset,u.length).getUint16(0),r=3}else if(r===2){if(bn(n)<8)break;const u=kn(n,8),g=new DataView(u.buffer,u.byteOffset,u.length),S=g.getUint32(0);if(S>Math.pow(2,53-32)-1){a.enqueue(br);break}i=S*Math.pow(2,32)+g.getUint32(4),r=3}else{if(bn(n)<i)break;const u=kn(n,i);a.enqueue(Hr(o?u:cr.decode(u),e)),r=0}if(i===0||i>t){a.enqueue(br);break}}}})}const Eo=4;function D(t){if(t)return Na(t)}function Na(t){for(var e in D.prototype)t[e]=D.prototype[e];return t}D.prototype.on=D.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};D.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};D.prototype.off=D.prototype.removeListener=D.prototype.removeAllListeners=D.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===e||r.fn===e){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+t],this};D.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,e)}return this};D.prototype.emitReserved=D.prototype.emit;D.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};D.prototype.hasListeners=function(t){return!!this.listeners(t).length};const Hn=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0))(),V=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),Ta="arraybuffer";function Ro(t,...e){return e.reduce((n,r)=>(t.hasOwnProperty(r)&&(n[r]=t[r]),n),{})}const Ca=V.setTimeout,Ba=V.clearTimeout;function Vn(t,e){e.useNativeTimers?(t.setTimeoutFn=Ca.bind(V),t.clearTimeoutFn=Ba.bind(V)):(t.setTimeoutFn=V.setTimeout.bind(V),t.clearTimeoutFn=V.clearTimeout.bind(V))}const Ia=1.33;function Oa(t){return typeof t=="string"?qa(t):Math.ceil((t.byteLength||t.size)*Ia)}function qa(t){let e=0,n=0;for(let r=0,i=t.length;r<i;r++)e=t.charCodeAt(r),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(r++,n+=4);return n}function $o(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function xa(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function Fa(t){let e={},n=t.split("&");for(let r=0,i=n.length;r<i;r++){let o=n[r].split("=");e[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return e}class Pa extends Error{constructor(e,n,r){super(e),this.description=n,this.context=r,this.type="TransportError"}}class Vr extends D{constructor(e){super(),this.writable=!1,Vn(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,r){return super.emitReserved("error",new Pa(e,n,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=Hr(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=xa(e);return n.length?"?"+n:""}}class Ga extends Vr{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};$a(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Ra(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=$o()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let Do=!1;try{Do=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Ua=Do;function Ha(){}class Va extends Ga{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let r=location.port;r||(r=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,n){const r=this.request({method:"POST",data:e});r.on("success",n),r.on("error",(i,o)=>{this.onError("xhr post error",i,o)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=e}}class ne extends D{constructor(e,n,r){super(),this.createRequest=e,Vn(this,r),this._opts=r,this._method=r.method||"GET",this._uri=n,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const n=Ro(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(n);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var i;r.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=ne.requestsCount++,ne.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Ha,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete ne.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}ne.requestsCount=0;ne.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Yi);else if(typeof addEventListener=="function"){const t="onpagehide"in V?"pagehide":"unload";addEventListener(t,Yi,!1)}}function Yi(){for(let t in ne.requests)ne.requests.hasOwnProperty(t)&&ne.requests[t].abort()}const Wa=function(){const t=Mo({xdomain:!1});return t&&t.responseType!==null}();class ja extends Va{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=Wa&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new ne(Mo,this.uri(),e)}}function Mo(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Ua))return new XMLHttpRequest}catch{}if(!e)try{return new V[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const No=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class za extends Vr{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,r=No?{}:Ro(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;Ur(r,this.supportsBinary,o=>{try{this.doWrite(r,o)}catch{}i&&Hn(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=$o()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const lr=V.WebSocket||V.MozWebSocket;class Ka extends za{createSocket(e,n,r){return No?new lr(e,n,r):n?new lr(e,n):new lr(e)}doWrite(e,n){this.ws.send(n)}}class Ya extends Vr{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=Ma(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(n).getReader(),i=Da();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const o=()=>{r.read().then(({done:a,value:u})=>{a||(this.onPacket(u),o())}).catch(a=>{})};o();const s={type:"open"};this.query.sid&&(s.data=`{"sid":"${this.query.sid}"}`),this._writer.write(s).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;this._writer.write(r).then(()=>{i&&Hn(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Ja={websocket:Ka,webtransport:Ya,polling:ja},Qa=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Xa=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function kr(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),r=t.indexOf("]");n!=-1&&r!=-1&&(t=t.substring(0,n)+t.substring(n,r).replace(/:/g,";")+t.substring(r,t.length));let i=Qa.exec(t||""),o={},s=14;for(;s--;)o[Xa[s]]=i[s]||"";return n!=-1&&r!=-1&&(o.source=e,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=Za(o,o.path),o.queryKey=ec(o,o.query),o}function Za(t,e){const n=/\/{2,9}/g,r=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function ec(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,o){i&&(n[i]=o)}),n}const vr=typeof addEventListener=="function"&&typeof removeEventListener=="function",_n=[];vr&&addEventListener("offline",()=>{_n.forEach(t=>t())},!1);class Re extends D{constructor(e,n){if(super(),this.binaryType=Ta,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const r=kr(e);n.hostname=r.host,n.secure=r.protocol==="https"||r.protocol==="wss",n.port=r.port,r.query&&(n.query=r.query)}else n.host&&(n.hostname=kr(n.host).host);Vn(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(r=>{const i=r.prototype.name;this.transports.push(i),this._transportsByName[i]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Fa(this.opts.query)),vr&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},_n.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=Eo,n.transport=e,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Re.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",Re.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(n+=Oa(i)),r>0&&n>this._maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Hn(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,r){return this._sendPacket("message",e,n,r),this}send(e,n,r){return this._sendPacket("message",e,n,r),this}_sendPacket(e,n,r,i){if(typeof n=="function"&&(i=n,n=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const o={type:e,data:n,options:r};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(Re.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),vr&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=_n.indexOf(this._offlineEventListener);r!==-1&&_n.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}}Re.protocol=Eo;class tc extends Re{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let n=this.createTransport(e),r=!1;Re.priorWebsocketSuccess=!1;const i=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",y=>{if(!r)if(y.type==="pong"&&y.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;Re.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(S(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const b=new Error("probe error");b.transport=n.name,this.emitReserved("upgradeError",b)}}))};function o(){r||(r=!0,S(),n.close(),n=null)}const s=y=>{const b=new Error("probe error: "+y);b.transport=n.name,o(),this.emitReserved("upgradeError",b)};function a(){s("transport closed")}function u(){s("socket closed")}function g(y){n&&y.name!==n.name&&o()}const S=()=>{n.removeListener("open",i),n.removeListener("error",s),n.removeListener("close",a),this.off("close",u),this.off("upgrading",g)};n.once("open",i),n.once("error",s),n.once("close",a),this.once("close",u),this.once("upgrading",g),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||n.open()},200):n.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const n=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&n.push(e[r]);return n}}class nc extends tc{constructor(e,n={}){const r=typeof e=="object"?e:n;(!r.transports||r.transports&&typeof r.transports[0]=="string")&&(r.transports=(r.transports||["polling","websocket","webtransport"]).map(i=>Ja[i]).filter(i=>!!i)),super(e,r)}}function rc(t,e="",n){let r=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),r=kr(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const o=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+o+":"+r.port+e,r.href=r.protocol+"://"+o+(n&&n.port===r.port?"":":"+r.port),r}const ic=typeof ArrayBuffer=="function",oc=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,To=Object.prototype.toString,sc=typeof Blob=="function"||typeof Blob<"u"&&To.call(Blob)==="[object BlobConstructor]",ac=typeof File=="function"||typeof File<"u"&&To.call(File)==="[object FileConstructor]";function Wr(t){return ic&&(t instanceof ArrayBuffer||oc(t))||sc&&t instanceof Blob||ac&&t instanceof File}function An(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,r=t.length;n<r;n++)if(An(t[n]))return!0;return!1}if(Wr(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return An(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&An(t[n]))return!0;return!1}function cc(t){const e=[],n=t.data,r=t;return r.data=Sr(n,e),r.attachments=e.length,{packet:r,buffers:e}}function Sr(t,e){if(!t)return t;if(Wr(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let r=0;r<t.length;r++)n[r]=Sr(t[r],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=Sr(t[r],e));return n}return t}function lc(t,e){return t.data=wr(t.data,e),delete t.attachments,t}function wr(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=wr(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=wr(t[n],e));return t}const Co=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],dc=5;var v;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(v||(v={}));class uc{constructor(e){this.replacer=e}encode(e){return(e.type===v.EVENT||e.type===v.ACK)&&An(e)?this.encodeAsBinary({type:e.type===v.EVENT?v.BINARY_EVENT:v.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===v.BINARY_EVENT||e.type===v.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=cc(e),r=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(r),i}}class jr extends D{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const r=n.type===v.BINARY_EVENT;r||n.type===v.BINARY_ACK?(n.type=r?v.EVENT:v.ACK,this.reconstructor=new fc(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(Wr(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const r={type:Number(e.charAt(0))};if(v[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===v.BINARY_EVENT||r.type===v.BINARY_ACK){const o=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const s=e.substring(o,n);if(s!=Number(s)||e.charAt(n)!=="-")throw new Error("Illegal attachments");const a=Number(s);if(!Bo(a)||a<0)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=a}if(e.charAt(n+1)==="/"){const o=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););r.nsp=e.substring(o,n)}else r.nsp="/";const i=e.charAt(n+1);if(i!==""&&Number(i)==i){const o=n+1;for(;++n;){const s=e.charAt(n);if(s==null||Number(s)!=s){--n;break}if(n===e.length)break}r.id=Number(e.substring(o,n+1))}if(e.charAt(++n)){const o=this.tryParse(e.substr(n));if(jr.isPayloadValid(r.type,o))r.data=o;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case v.CONNECT:return Dn(n);case v.DISCONNECT:return n===void 0;case v.CONNECT_ERROR:return typeof n=="string"||Dn(n);case v.EVENT:case v.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&Co.indexOf(n[0])===-1);case v.ACK:case v.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class fc{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=lc(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function hc(t){return typeof t=="string"}const Bo=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function mc(t){return t===void 0||Bo(t)}function Dn(t){return Object.prototype.toString.call(t)==="[object Object]"}function pc(t,e){switch(t){case v.CONNECT:return e===void 0||Dn(e);case v.DISCONNECT:return e===void 0;case v.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&Co.indexOf(e[0])===-1);case v.ACK:return Array.isArray(e);case v.CONNECT_ERROR:return typeof e=="string"||Dn(e);default:return!1}}function gc(t){return hc(t.nsp)&&mc(t.id)&&pc(t.type,t.data)}const yc=Object.freeze(Object.defineProperty({__proto__:null,protocol:dc,get PacketType(){return v},Encoder:uc,Decoder:jr,isPacketValid:gc},Symbol.toStringTag,{value:"Module"}));function K(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const bc=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Io extends D{constructor(e,n,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[K(e,"open",this.onopen.bind(this)),K(e,"packet",this.onpacket.bind(this)),K(e,"error",this.onerror.bind(this)),K(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var r,i,o;if(bc.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const s={type:v.EVENT,data:n};if(s.options={},s.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const S=this.ids++,y=n.pop();this._registerAckCallback(S,y),s.id=S}const a=(i=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||i===void 0?void 0:i.writable,u=this.connected&&!(!((o=this.io.engine)===null||o===void 0)&&o._hasPingExpired());return this.flags.volatile&&!a||(u?(this.notifyOutgoingListeners(s),this.packet(s)):this.sendBuffer.push(s)),this.flags={},this}_registerAckCallback(e,n){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[e]=n;return}const o=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);n.call(this,new Error("operation has timed out"))},i),s=(...a)=>{this.io.clearTimeoutFn(o),n.apply(this,a)};s.withError=!0,this.acks[e]=s}emitWithAck(e,...n){return new Promise((r,i)=>{const o=(s,a)=>s?i(s):r(a);o.withError=!0,n.push(o),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...o)=>(this._queue[0],i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(i)):(this._queue.shift(),n&&n(null,...o)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:v.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case v.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case v.EVENT:case v.BINARY_EVENT:this.onevent(e);break;case v.ACK:case v.BINARY_ACK:this.onack(e);break;case v.DISCONNECT:this.ondisconnect();break;case v.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let r=!1;return function(...i){r||(r=!0,n.packet({type:v.ACK,id:e,data:i}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:v.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,e.data)}}}function Dt(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}Dt.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-n:t+n}return Math.min(t,this.max)|0};Dt.prototype.reset=function(){this.attempts=0};Dt.prototype.setMin=function(t){this.ms=t};Dt.prototype.setMax=function(t){this.max=t};Dt.prototype.setJitter=function(t){this.jitter=t};class _r extends D{constructor(e,n){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,Vn(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new Dt({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const i=n.parser||yc;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new nc(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=K(n,"open",function(){r.onopen(),e&&e()}),o=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},s=K(n,"error",o);if(this._timeout!==!1){const a=this._timeout,u=this.setTimeoutFn(()=>{i(),o(new Error("timeout")),n.close()},a);this.opts.autoUnref&&u.unref(),this.subs.push(()=>{this.clearTimeoutFn(u)})}return this.subs.push(i),this.subs.push(s),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(K(e,"ping",this.onping.bind(this)),K(e,"data",this.ondata.bind(this)),K(e,"error",this.onerror.bind(this)),K(e,"close",this.onclose.bind(this)),K(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){Hn(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new Io(this,e,n),this.nsps[e]=r),r}_destroy(e){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let r=0;r<n.length;r++)this.engine.write(n[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Ut={};function Ln(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=rc(t,e.path||"/socket.io"),r=n.source,i=n.id,o=n.path,s=Ut[i]&&o in Ut[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||s;let u;return a?u=new _r(r,e):(Ut[i]||(Ut[i]=new _r(r,e)),u=Ut[i]),n.query&&!e.query&&(e.query=n.queryKey),u.socket(n.path,e)}Object.assign(Ln,{Manager:_r,Socket:Io,io:Ln,connect:Ln});function kc(t){return window.go.main.App.CleanupDepositMailAckFromGuildSyncBanking(t)}function vc(){return window.go.main.App.CloseWindow()}function Sc(t){return window.go.main.App.CollectDepositMailAckFromGuildSyncBanking(t)}function wc(t){return window.go.main.App.CollectGuildSyncApplicationsData(t)}function _c(t){return window.go.main.App.CollectGuildSyncBankingData(t)}function Ac(t){return window.go.main.App.CollectGuildSyncRosterData(t)}function Lc(t,e){return window.go.main.App.CommitGuildSyncApplicationsData(t,e)}function Ec(t,e){return window.go.main.App.CommitGuildSyncBankingData(t,e)}function Rc(t,e){return window.go.main.App.CommitGuildSyncRosterData(t,e)}function $c(){return window.go.main.App.FlushPendingDepositMailAckCleanup()}function Dc(){return window.go.main.App.GetESORunningStatus()}function Mc(){return window.go.main.App.GetGuildSyncFileWatcherStatus()}function Nc(){return window.go.main.App.GetGuildSyncSession()}function Tc(){return window.go.main.App.LogoutGuildSync()}function Cc(){return window.go.main.App.MaximizeWindow()}function Bc(){return window.go.main.App.MinimizeWindow()}function Oo(){return window.go.main.App.SaveWindowState()}function Ic(t,e){return window.go.main.App.SetGuildSyncSavedVarsWatchFileEnabled(t,e)}function Oc(){return window.go.main.App.ShowMainWindow()}function qc(){return window.go.main.App.StartDiscordLogin()}function xc(){return window.go.main.App.StartGuildSyncFileWatcher()}function Fc(){return window.go.main.App.StopGuildSyncFileWatcher()}function Pc(t){return window.go.main.App.WriteDepositMailToGuildSyncBanking(t)}function Gc(t,e,n){return window.runtime.EventsOnMultiple(t,e,n)}function Ht(t,e){return Gc(t,e,-1)}function Uc(t){window.runtime.BrowserOpenURL(t)}const Wn="1.1.2",Hc=30*60*1e3,qo="guildsync-pending-banking-uploads",xo="guildsync-pending-deposit-mail",Vc=5e3,Wc=30*1e3,Fo="guildsync-pending-roster-uploads",Po="guildsync-pending-applications-uploads",m=60*1e3,Go=7e3,Uo=1400,Ho=2400,jc=4e3,zc=38,Vo=document.querySelector("#app");let Ji=null,Vt=null,Qi=!1,cn=!1,En=null,dr=!1,ur=!1,fr=!1,$e=null,P={running:!1,message:""},at=null,ct=null,Ar=!1,lt=!1,dt=null,hr=!1,Oe=new Map,He=new Map,C="",Ze=!1,et=!1,Yt=[],p={logged_in:!1,allowed:!1,status_message:""},ve={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},d=null,G=[],jn=[],zn=null,Zt=!1,Mn=!1,Nn="",ut=new Set,ft=new Set,en="username",We="asc",Lr=null,Er=null,z=[],Tn=null,qe=!1,Xi=!1,Cn="",Rr=null,$r=null,je=new Set,ht=new Set,fe="",F="",N=-1,kt=!1,tn="",W=[],xe="",De=[],Me=!1,me="",mr=null,Y=-1,Mt=!1,nn="",Ne=[],Bn=!1,ze=!1,Te="",vt="",St=!1,Se="",j=[],wt="",tt="",Ce=[],Be=!1,pe="",Zi=null,Ue=0;const Kc=650;let J=-1,Nt=!1,Tt=[],we=!1,Ke="",Ct=!1,rn=[],_e=!1,Ye="",Bt=!1,zr=[],Ae=!1,Je="",It="",Le="",mt="",Ee="",L=[],O=!1,q="",it=!1,Kn="",Ve="",ln="",dn="",he=-1,Ge=!1,_=null,Qe=[],_t=!1,ye="",un="",te=-1,Ot=!1,Kr=null,Jt=null;const Yr=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let U=[],M="biweekly",Wo=null,Fe=!1,Xe=!1,ot="biweekly",qt=!1,At=!1,de="",ue=null,T={targetType:"other",note:"",tickets:""},xt=!1,nt="",I=[],re=[],ie="",oe=!1,se="",pt=null,Q=-1,ge=!1,In=!1,H="",E={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},Ft="",B=-1,X=!1,Dr={biweekly:0,monthly:0};const Yc=1780786800,Pe=14*24*60*60,On=60*60,qn=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let R=qn[0].id;function Jc(){Vo.innerHTML=`
    <main class="splash-screen">
      <img src="${va}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await Oc(),await Qc(),jo(),Xt(),await bt()},5e3)}async function Qc(){try{p=await Nc()}catch(t){p={logged_in:!1,allowed:!1,status_message:""},h("session-error",k(t),{ttlMs:m})}}function jo(){Vo.innerHTML=`
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
              <div class="compact-brand-version">Version ${c(Wn)}</div>
            </div>
          </div>
          <div id="desktopUpdateArea" class="desktop-update-area"></div>
          <div id="discordArea" class="discord-area"></div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${zo()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content" aria-live="polite">
          ${Yo()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await Bc()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await Oo(),await vc()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await Cc()}),$n(),Gr(),Jo(),aa(),Os(),zs(),ts(),Is(),Ls(),Es(),Rs(),$s(),hs(),qs(),il(),Ie(),$t(),Qi||(window.addEventListener("resize",()=>{ka(),ya()}),qf(),Qi=!0)}function zo(){return qn.map(t=>{const e=t.id===R,n=Xc(t.id,e),r=n?Ko():0,i=n?`Deposit mail needs attention: ${r} item${r===1?"":"s"} ready to check out or write.`:"";return`
        <button
          class="guildsync-tab${e?" active":""}${n?" banking-mail-attention":""}"
          type="button"
          data-tab-id="${f(t.id)}"
          aria-selected="${e?"true":"false"}"
          ${i?`title="${f(i)}"`:""}
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${Zc(t.icon)}</span>
          <span class="guildsync-tab-label">${c(t.label)}</span>
          ${n?`<span class="guildsync-tab-mail-badge" aria-label="${f(i)}">${r>99?"99+":c(String(r))}</span>`:""}
        </button>
      `}).join("")}function Ko(){return A()?Zn()+mn()+Ws():0}function Xc(t,e){return t!=="more"||e?!1:Ko()>0}function Zc(t){return t==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:t==="swords"?"\u2694":t==="gear"?"\u2699":t==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function Yo(){const t=qn.find(n=>n.id===R)||qn[0];let e="";return t.id==="discord-members"?e=sl():t.id==="eso-members"?e=al():t.id==="more"?e=ou():t.id==="settings"?e=Nl():e=`
      <div class="guildsync-tab-panel" data-active-tab="${f(t.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${c(t.label)} content will appear here.
        </div>
      </div>
    `,`
    ${e}
    ${ge?Cd():""}
    ${qt?bu():""}
    ${xt?su():""}
    ${Ge?Ad():""}
    ${Nt?Tl():""}
    ${Ct?xl():""}
    ${Bt?Ul():""}
    ${it?ed():""}
    ${Ot?rl():""}
  `}function el(){return Ot||kt||St||ge||qt||xt||Ge||Mt||Nt||Ct||Bt||it||Xe}function tl(){return Ot?!1:it?(Ir(),!0):Bt?(Br(),!0):Ct?(Cr(),!0):Nt?(Tr(),!0):Ge?(Et(),!0):Mt?(xr(),!0):qt?(Pn(),!0):xt?(wu(),l(),!0):ge?(ge=!1,l(),!0):kt?(kt=!1,l(),!0):St?(St=!1,l(),!0):Xe?(Xe=!1,l(),!0):!1}function nl(t){t.key==="Escape"&&tl()&&(t.preventDefault(),t.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",nl,!0),window.guildSyncGlobalModalEscapeAttached=!0);function Jr(t={}){return new Promise(e=>{Jt&&Jt(!1),Ot=!0,Kr={title:t.title||"Confirm Action",message:t.message||"Are you sure?",detail:t.detail||"",confirmLabel:t.confirmLabel||"Confirm",cancelLabel:t.cancelLabel||"Cancel",confirmClass:t.confirmClass||"danger"},Jt=e,l()})}function xn(t=!1){const e=Jt;Jt=null,Ot=!1,Kr=null,e&&e(t===!0),l()}function rl(){const t=Kr||{};return`
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
  `}function eo(t){var r,i,o,s;const e=(i=(r=t.target).closest)==null?void 0:i.call(r,"#cancelGuildSyncConfirmButton"),n=(s=(o=t.target).closest)==null?void 0:s.call(o,"#acceptGuildSyncConfirmButton");if(!(!e&&!n)){if(t.preventDefault(),t.stopPropagation(),e){xn(!1);return}n&&xn(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",eo,!0),document.addEventListener("pointerup",eo,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function il(){if(!Ot)return;const t=document.querySelector("#cancelGuildSyncConfirmButton"),e=document.querySelector("#acceptGuildSyncConfirmButton");t&&(t.onclick=r=>{r.preventDefault(),r.stopPropagation(),xn(!1)}),e&&(e.onclick=r=>{r.preventDefault(),r.stopPropagation(),xn(!0)});const n=document.querySelector(".guildsync-confirm-overlay");n&&(n.onclick=r=>{r.target===n&&(r.preventDefault(),r.stopPropagation())})}function Jo(){document.querySelectorAll(".guildsync-tab").forEach(t=>{t.addEventListener("click",()=>{if(el())return;const e=t.dataset.tabId;!e||e===R||(R=e,l())})})}function ol(){const t=document.querySelector(".member-links-table-shell");t&&t.scrollTop}function l(t={}){it&&ol();const e=document.querySelector(".guildsync-tabs"),n=document.querySelector("#guildSyncTabContent");e&&(e.innerHTML=zo()),n&&(n.innerHTML=Yo()),Jo(),aa(),Os(),zs(),ts(),Is(),Ls(),Es(),Rs(),$s(),hs(),qs(),t.restoreDiscordSearchFocus&&cf(),t.restoreRosterSearchFocus&&lf(),R==="discord-members"&&(d==null?void 0:d.connected)&&G.length===0&&!Zt&&ui({silent:!0}),R==="eso-members"&&(d==null?void 0:d.connected)&&z.length===0&&!qe&&!Xi&&(Xi=!0,hn({silent:!0})),R==="more"&&(d==null?void 0:d.connected)&&U.length===0&&!Fe&&be({silent:!0}),(R==="discord-members"||R==="eso-members"||R==="settings")&&(d==null?void 0:d.connected)&&L.length===0&&!O&&Yn({silent:!0})}function sl(){const t=of(),e=df(),n=Array.from(ut),r=Array.from(ft);return`
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
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${c(la(zn))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${Zt||Mn?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Mn?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${f(Nn)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${e.filter(i=>!ut.has(i)).map(i=>`<option value="${f(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All roles</span>':n.map(i=>mf(i)).join("")}
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
              ${Yr.filter(i=>!ft.has(i.id)).map(i=>`<option value="${f(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>Qo("discord",i)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${vn("username","Username")}
                ${vn("global_name","Global Name")}
                ${vn("server_nickname","Server Nickname")}
                ${vn("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map(i=>uf(i)).join(""):ff()}
            </tbody>
          </table>
        </div>
      </div>
      ${St?Al():""}
    </div>
  `}function al(){const t=yl(),e=vl(),n=Array.from(je),r=Array.from(ht);return`
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
          <span class="discord-last-refresh">Last Refresh: ${c(jd(Tn))}</span>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${qe?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${qe?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${f(Cn)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${e.filter(i=>!je.has(i)).map(i=>`<option value="${f(i)}">${c(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All ranks</span>':n.map(i=>Sl(i)).join("")}
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
              ${Yr.filter(i=>!ht.has(i.id)).map(i=>`<option value="${f(i.id)}">${c(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All link statuses</span>':r.map(i=>Qo("roster",i)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${Wt("account_name","Account Name")}
                ${Wt("rank","Rank")}
                ${Wt("joined","Joined")}
                ${Wt("notes","Notes","roster-notes-header")}
                ${Wt("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${t.length>0?t.map((i,o)=>cl(i,o)).join(""):ml()}
            </tbody>
          </table>
        </div>
      </div>
      ${kt?$l():""}
      ${Mt?dl():""}
    </div>
  `}function cl(t,e=-1){const n=pl(t.rank||""),r=n?` style="color: ${n};"`:"";return`
    <tr class="eso-roster-row${e===N?" roster-search-active-row":""}"${r} data-roster-row-index="${f(String(e))}" data-eso-account-name="${f(t.account_name||"")}">
      <td>${c(t.account_name||"")}</td>
      <td>${Qr(t.rank||"")}</td>
      <td>${c(Xn(t.joined))}</td>
      <td class="roster-notes-cell">${ll(t)}</td>
      <td class="member-link-action-cell">${ks({mode:"eso-to-discord",esoAccountName:t.account_name})}</td>
    </tr>
  `}function ll(t){const e=String((t==null?void 0:t.account_name)||"").trim(),n=Number((t==null?void 0:t.note_count)||0),r=n>0,i=r?`${n} roster note${n===1?"":"s"} for ${e}`:`No roster notes for ${e}`;return`
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
  `}function dl(){const t=nn||"",e=Boolean((p==null?void 0:p.logged_in)&&(p==null?void 0:p.allowed));return`
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
                ${ul()}
              </tbody>
            </table>
          </div>
          ${e?fl():'<div class="roster-history-muted">Log in to add a new note.</div>'}
        </div>
      </div>
    </div>
  `}function ul(){return Bn?'<tr><td class="bank-empty-row" colspan="3">Loading notes...</td></tr>':!Array.isArray(Ne)||Ne.length===0?'<tr><td class="bank-empty-row" colspan="3">No notes recorded for this member.</td></tr>':Ne.map(t=>`
      <tr>
        <td class="roster-notes-when-cell">${c(hl(t.timestamp))}</td>
        <td class="roster-notes-officer-cell">${c(t.officer||"")}</td>
        <td class="roster-notes-note-cell">${c(t.note||"")}</td>
      </tr>
    `).join("")}function fl(){return`
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
  `}function hl(t){const e=Number(t||0);return!Number.isFinite(e)||e<=0?"":new Date(e*1e3).toLocaleString()}function ml(){return`
    <tr>
      <td class="bank-empty-row" colspan="5">${c(qe?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function pl(t){String(t||"").trim();const e=pf(t);return nr(e==null?void 0:e.role_color)}function Qr(t){const e=String(t||"").trim();return`<span class="eso-roster-rank-text">${c(e)}</span>`}function gl(t){const e=String(t||"").trim();return!e||e.toLowerCase()==="unknown"?"":Qr(e)}function yl(){const t=Cn.trim().toLowerCase(),e=z.filter(n=>{const r=String(n.rank||"").trim();if(je.size>0&&!je.has(r)||!es(ht,Mr(n)))return!1;if(!t)return!0;const i=Xn(n.joined),o=ri(n.joined),s=Mr(n),a=Zo(n.account_name||"");return[n.account_name,r,i,o,n.joined,s,a].map(g=>String(g||"").toLowerCase()).join(" ").includes(t)});return bl(e)}function bl(t){if(!fe||!F)return t;const e=F==="desc"?-1:1;return[...t].sort((n,r)=>{const i=to(n,fe),o=to(r,fe),s=i.localeCompare(o,void 0,{sensitivity:"base",numeric:!0});return s!==0?s*e:String(n.account_name||"").localeCompare(String(r.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function to(t,e){if(e==="rank")return String(t.rank||"");if(e==="joined"){const n=Number(t.joined||0);return Number.isFinite(n)&&n>0?String(n).padStart(16,"0"):""}if(e==="notes")return String(Number(t.note_count||0)).padStart(8,"0");if(e==="linked"){const n=Mr(t);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[n]||"9"} ${n} ${Zo(t.account_name||"")}`}return String(t.account_name||"")}function kl(t){const n=new Set(["account_name","rank","joined","notes","linked"]).has(t)?t:"account_name";fe!==n?(fe=n,F="asc"):F==="asc"?F="desc":F==="desc"?(fe="",F=""):(fe=n,F="asc"),N=-1,l()}function Wt(t,e,n=""){const r=fe===t&&Boolean(F),i=r?F==="asc"?"ascending":"descending":"none",o=r?F==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${f(n)}" aria-sort="${f(i)}">
      <button
        class="discord-sort-header roster-sort-header${r?" active":""}"
        type="button"
        data-roster-sort-column="${f(t)}"
        title="Sort ${f(e)}${r&&F==="asc"?" descending":r&&F==="desc"?" not sorted":" ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${o}</span>
      </button>
    </th>
  `}function vl(){return Array.from(new Set(z.map(t=>String(t.rank||"").trim()).filter(Boolean))).sort((t,e)=>t.localeCompare(e))}function Sl(t){const e=mi(t),n=nr(e==null?void 0:e.role_color),r=gi(n),i=pi(n,r);return`
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
  `}function wl(t){const e=Yr.find(n=>n.id===t);return e?e.label:t}function Qo(t,e){const n=t==="roster"?"roster":"discord",r=wl(e);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${n}-link-status-filter="${f(e)}"
      title="Remove ${f(r)} link filter"
    >
      <span>${c(r)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Xo(t){const e=Array.isArray(t)?t.filter(Boolean):t?[t]:[];return e.length===0?"unlinked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked"&&String(n.link_method||"").trim().toLowerCase()==="manual")?"manual":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="linked")?"linked":e.some(n=>String(n.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function _l(t){return Xo(Qn(t==null?void 0:t.discord_id))}function Mr(t){return Xo(Jn(t==null?void 0:t.account_name))}function Zo(t){const e=Jn(t),n=bs({mode:"eso-to-discord",esoAccountName:t}),r=e.filter(o=>String(o.link_status||"").trim().toLowerCase()==="linked").map(o=>o.discord_server_nickname||o.discord_display_name||o.discord_username||o.discord_user_id||"").filter(Boolean),i=e.filter(o=>String(o.link_status||"").trim().toLowerCase()==="candidate").map(o=>o.discord_server_nickname||o.discord_display_name||o.discord_username||o.discord_user_id||"").filter(Boolean);return[n.label,n.title,r.join(" "),i.join(" ")].filter(Boolean).join(" ")}function es(t,e){return!t||t.size===0||t.has(e)?!0:e==="manual"&&t.has("linked")}function Al(){return`
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

        ${pe?`<div class="discord-data-error">${c(pe)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Ll()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${tt?`: ${c(tt)}`:""}</div>
            ${El()}
          </div>
        </div>
      </div>
    </div>
  `}function Ll(){return Be&&j.length===0?'<div class="roster-history-muted">Searching...</div>':j.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${j.map((t,e)=>`
        <button class="roster-history-match${e===J||t.discord_id===wt?" is-selected":""}" type="button" data-discord-history-id="${f(t.discord_id)}" data-discord-history-name="${f(Nr(t))}">
          <span>${c(Nr(t))}</span>
          <strong>${c(String(t.event_count||0))} event${Number(t.event_count||0)===1?"":"s"}</strong>
          ${e===J?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function El(){return wt?Be&&Ce.length===0?'<div class="roster-history-muted">Loading history...</div>':Ce.length===0?'<div class="roster-history-muted">No Discord member history found for this member.</div>':`
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
              <td class="roster-history-when-cell">${c(ri(t.event_timestamp||t.event_datetime||t.timestamp))}</td>
              <td>${c(Rl(t.event_type))}</td>
              <td>${c(t.old_value||"")}</td>
              <td>${c(t.new_value||"")}</td>
              <td>${c(t.initiator||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching Discord member to see history.</div>'}function Nr(t={}){return String(t.server_nickname||t.global_name||t.username||t.discord_id||"").trim()}function Rl(t){return String(t||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function $l(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(tn)}" />
        </div>

        ${me?`<div class="discord-data-error">${c(me)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${Dl()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${xe?`: ${c(xe)}`:""}</div>
            ${Ml()}
          </div>
        </div>
      </div>
    </div>
  `}function Dl(){return Me&&W.length===0?'<div class="roster-history-muted">Searching...</div>':W.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${W.map((t,e)=>`
        <button class="roster-history-match${e===Y||t.account_name===xe?" is-selected":""}" type="button" data-roster-history-account="${f(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <strong>${c(t.rank||"")}</strong>
          ${e===Y?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function Ml(){return xe?Me&&De.length===0?'<div class="roster-history-muted">Loading history...</div>':De.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${De.map(t=>`
            <tr>
              <td class="roster-history-when-cell">${c(ri(t.timestamp))}</td>
              <td>${c(t.event_type||"")}</td>
              <td>${gl(t.rank)}</td>
              <td>${c(t.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function Nl(){return`
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
  `}function ts(){var t,e,n,r;R==="settings"&&((t=document.querySelector("#runAssociateTicketReportButton"))==null||t.addEventListener("click",()=>ns()),(e=document.querySelector("#runDiscordRankAuditReportButton"))==null||e.addEventListener("click",()=>ql()),(n=document.querySelector("#runDiscordLastSeenReportButton"))==null||n.addEventListener("click",()=>Gl()),(r=document.querySelector("#runMemberLinksReportButton"))==null||r.addEventListener("click",()=>Ql()))}function ns(){Nt=!0,Ke="",l(),Ns()}function Tr(){Nt=!1,Ke="",l()}function Tl(){const t=Cl(),e=Bl(),n=Tt.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${we?"disabled":""}>${we?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${c(String(n))} total row${n===1?"":"s"}</span>
        </div>

        ${Ke?`<div class="discord-data-error">${c(Ke)}</div>`:""}

        <div class="report-results-content">
          ${we&&n===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!we&&n===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${n>0?no("Eligible","Linked to Discord and eligible for promotion review.",t,"No linked eligible Associates found."):""}
          ${n>0?no("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",e,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${c(os())}</textarea>
      </div>
    </div>
  `}function Cl(){return Tt.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible")}function Bl(){return Tt.filter(t=>String(t.report_group||t.eligibility_group||"").toLowerCase()!=="eligible")}function no(t,e,n,r){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${c(t)}</h4>
          <p>${c(e)}</p>
        </div>
        <span>${c(String(n.length))} row${n.length===1?"":"s"}</span>
      </div>
      ${n.length>0?Il(n):`<div class="roster-history-muted report-section-empty">${c(r)}</div>`}
    </section>
  `}function Il(t=Tt){return`
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
              <td>${Qr(e.rank||"")}</td>
              <td>${c(Xn(e.joined))}</td>
              <td>${c(pn(e.purchased_tickets||0))}</td>
              <td class="associate-earliest-deposit-cell">${c(rs(e))}</td>
              <td>${c(is(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function rs(t){const e=String((t==null?void 0:t.earliest_deposit_summary)||"").trim();if(e)return e;const n=String((t==null?void 0:t.earliest_deposit_date)||"").trim(),r=String((t==null?void 0:t.earliest_deposit_raffle_period)||"").trim();return[n,r].filter(Boolean).join(" | ")}function is(t){return String(t.link_status||"").toLowerCase()==="linked"?t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"Linked":"Needs Link Review"}function os(){const t=[["Section","Account Name","Rank","Joined","Purchased Tickets","Earliest Deposit / Raffle","Discord Link"]];for(const e of Tt){const n=String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";t.push([n,e.account_name||"",e.rank||"",Xn(e.joined),pn(e.purchased_tickets||0),rs(e),is(e)])}return t.map(e=>e.map(er).join("	")).join(`
`)}async function Ol(){const t=os();if(await tr(t)){h("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:m});return}const n=document.querySelector("#associateTicketReportTsv");n&&(n.focus(),n.select()),h("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function ql(){Ct=!0,Ye="",l(),Ms()}function Cr(){Ct=!1,Ye="",l()}function xl(){const t=rn.length;return`
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

        ${Ye?`<div class="discord-data-error">${c(Ye)}</div>`:""}

        <div class="report-results-content">
          ${_e&&t===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!_e&&t===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${t>0?Fl(rn):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${c(cs())}</textarea>
      </div>
    </div>
  `}function Fl(t=rn){return`
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
              <td data-label="Discord Member" class="discord-rank-audit-member-cell">${c(ss(e))}</td>
              <td data-label="Discord Rank Role" class="discord-rank-audit-discord-cell">${c(e.discord_rank||"No matching rank role")}</td>
              <td data-label="Linked ESO Account(s)" class="discord-rank-audit-eso-account-cell">${c(e.eso_accounts||"No linked ESO account")}</td>
              <td data-label="ESO Rank" class="discord-rank-audit-eso-rank-cell">${c(e.eso_rank||"None")}</td>
              <td data-label="Issue" class="discord-rank-audit-issue-cell">${c(as(e))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function ss(t){return t.server_nickname||t.global_name||t.username||t.discord_id||""}function as(t){const e=String(t.issue_type||"").toLowerCase();return e==="no_linked_eso_account"?"No linked ESO account":e==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":e==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":e==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":e||"Review needed"}function cs(){const t=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const e of rn)t.push([ss(e),e.username||"",e.discord_rank||"No matching rank role",e.discord_rank_roles||"",e.eso_accounts||"No linked ESO account",e.eso_rank||"None",as(e)]);return t.map(e=>e.map(er).join("	")).join(`
`)}async function Pl(){const t=cs();if(await tr(t)){h("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:m});return}const n=document.querySelector("#discordRankAuditReportTsv");n&&(n.focus(),n.select()),h("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function Gl(){Bt=!0,Je="",It="",l(),Ds(),L.length===0&&!O&&Yn({silent:!0})}function Br(){Bt=!1,Je="",It="",Le="",mt="",Ee="",l()}function Ul(){const t=Xr(),e=zr.length;return`
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
          ${e>0?Hl(t):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${c(ds(t))}</textarea>
      </div>
    </div>
  `}function Hl(t=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${jt("name","Discord Member")}</th>
            <th>${jt("eso","Linked ESO Account")}</th>
            <th>${jt("date","Last Seen")}</th>
            <th>${jt("days","Days Since")}</th>
            <th>${jt("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>`
            <tr class="discord-last-seen-row ${f(Yl(e.last_seen))}" data-discord-last-seen-row data-discord-last-seen-link-status="${f(rt(e).status)}" data-discord-last-seen-search="${f(ls(e))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${Kl(e)}
                  <span>${c(Lt(e))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${Wl(e)}</td>
              <td>${c(Zr(e.last_seen))}</td>
              <td>${c(ei(e.last_seen))}</td>
              <td>${c(Fn(e.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function jt(t,e){const n=mt===t,r=n?Ee==="asc"?"\u25B2":"\u25BC":"\u2195",i=n?`${e}: ${Ee==="asc"?"ascending":"descending"}`:`${e}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${n?" active":""}" type="button" data-discord-last-seen-sort="${f(t)}" title="${f(i)}">
      <span>${c(e)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${c(r)}</span>
    </button>
  `}function Xr(){const t=[...zr],e=mt,n=Ee;if(!e||!n)return t;const r=n==="desc"?-1:1;return t.sort((i,o)=>{var s,a;if(e==="date"){const u=Number(i.last_seen||0)||0,g=Number(o.last_seen||0)||0;return(u-g)*r}if(e==="days")return(ro(i.last_seen)-ro(o.last_seen))*r;if(e==="action")return Fn(i.last_seen_action).localeCompare(Fn(o.last_seen_action),void 0,{sensitivity:"base"})*r;if(e==="eso"){const u=rt(i),g=rt(o),S={linked:0,candidate:1,unlinked:2},y=((s=S[u.status])!=null?s:9)-((a=S[g.status])!=null?a:9);return y!==0?y*r:u.esoAccountName.localeCompare(g.esoAccountName,void 0,{sensitivity:"base"})*r}return Lt(i).localeCompare(Lt(o),void 0,{sensitivity:"base"})*r})}function Vl(t){mt!==t?(mt=t,Ee="asc"):Ee==="asc"?Ee="desc":(mt="",Ee=""),l()}function Lt(t){return(t==null?void 0:t.server_nickname)||(t==null?void 0:t.global_name)||(t==null?void 0:t.username)||(t==null?void 0:t.discord_id)||""}function ls(t){return[Lt(t),t==null?void 0:t.server_nickname,t==null?void 0:t.global_name,t==null?void 0:t.username,t==null?void 0:t.discord_id,t==null?void 0:t.last_seen_action,jl(t),Zr(t==null?void 0:t.last_seen),ei(t==null?void 0:t.last_seen)].filter(Boolean).join(" ")}function rt(t){const e=fd(t==null?void 0:t.discord_id),n=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),r=String((e==null?void 0:e.eso_account_name)||"").trim();return n==="linked"&&r?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:r,title:`Linked ESO account: ${r}`}:(n==="candidate"||String((e==null?void 0:e.link_method)||"").trim().toLowerCase()==="fuzzy")&&r?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:r,title:`Fuzzy ESO account candidate: ${r}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function Wl(t){const e=rt(t);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${f(e.className)}"
      title="${f(e.title)}"
      aria-label="${f(e.label)}"
      role="img"
    ></span>
  `}function jl(t){const e=rt(t);return[e.status,e.label,e.esoAccountName].filter(Boolean).join(" ")}function zl(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e||!n)return"";if(/^https?:\/\//i.test(e))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function Kl(t){const e=Lt(t),n=e?e.slice(0,2).toUpperCase():"?",r=zl(t);return r?`<span class="discord-member-avatar"><img src="${f(r)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${c(n)}</span>`}function Zr(t){const e=Number(t);if(!e)return"Never";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t||"");const r=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(n).reduce((i,o)=>(i[o.type]=o.value,i),{});return`${r.month}/${r.day}/${r.year} ${r.hour}:${r.minute} ${r.dayPeriod}`}function Yl(t){const e=Number(t);if(!e)return"discord-last-seen-unknown";const n=(Date.now()-e*1e3)/864e5;return n>30?"discord-last-seen-red":n>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function ei(t){const e=Number(t);if(!e)return"Never";const n=Date.now()-e*1e3;if(!Number.isFinite(n))return"";if(n<0)return"0 days";const r=Math.floor(n/864e5);return`${r} day${r===1?"":"s"}`}function ro(t){const e=Number(t);if(!e)return Number.POSITIVE_INFINITY;const n=Date.now()-e*1e3;return Number.isFinite(n)?n<0?0:Math.floor(n/864e5):Number.POSITIVE_INFINITY}function Fn(t){return String(t||"").trim()||"None tracked"}function ds(t=Xr()){const e=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const n of t){const r=rt(n);e.push([Lt(n),r.label||"",r.esoAccountName||"",Zr(n==null?void 0:n.last_seen),ei(n==null?void 0:n.last_seen),Fn(n==null?void 0:n.last_seen_action),(n==null?void 0:n.username)||"",(n==null?void 0:n.discord_id)||""])}return e.map(n=>n.map(er).join("	")).join(`
`)}async function Jl(){const t=Xr().filter(i=>{const o=le(It),s=String(Le||"").trim().toLowerCase(),a=!o||le(ls(i)).includes(o),u=!s||rt(i).status===s;return a&&u}),e=ds(t);if(await tr(e)){h("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:m});return}const r=document.querySelector("#discordLastSeenReportTsv");r&&(r.focus(),r.select()),h("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:m})}function Ql(){it=!0,q="",l(),L.length===0&&!O&&Yn({silent:!0})}function Ir(){it=!1,Kn="",Ve="",ln="",dn="",he=-1,l()}function us(t){return[...new Set((Array.isArray(L)?L:[]).map(e=>String((e==null?void 0:e[t])||"").trim().toLowerCase()).filter(Boolean))].sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function fs(t,e){return t.map(n=>`<option value="${f(n)}" ${e===n?"selected":""}>${c(n)}</option>`).join("")}function Xl(){return fs(us("link_status"),ln)}function Zl(){return fs(us("link_method"),dn)}function ed(){return`
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
            value="${f(Kn)}"
          />
          <label class="member-links-report-filter-label" for="memberLinksReportStatusFilter">Status</label>
          <select id="memberLinksReportStatusFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by status">
            <option value="" ${ln===""?"selected":""}>All statuses</option>
            ${Xl()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportMethodFilter">Method</label>
          <select id="memberLinksReportMethodFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by method">
            <option value="" ${dn===""?"selected":""}>All methods</option>
            ${Zl()}
          </select>
          <label class="member-links-report-filter-label" for="memberLinksReportActionFilter">Action</label>
          <select id="memberLinksReportActionFilter" class="member-links-report-filter-select" aria-label="Filter ESO / Discord Member Links by action">
            <option value="" ${Ve===""?"selected":""}>All actions</option>
            <option value="needs-link" ${Ve==="needs-link"?"selected":""}>Link Available</option>
            <option value="can-unlink" ${Ve==="can-unlink"?"selected":""}>Unlink Available</option>
            <option value="can-unblock" ${Ve==="can-unblock"?"selected":""}>Unblock Available</option>
          </select>
        </div>

        ${q?`<div class="discord-data-error member-links-report-error">${c(q)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${id()}
        </div>
      </div>
    </div>
  `}function hs(){var n,r,i,o,s,a;if(!it)return;(n=document.querySelector("#closeMemberLinksReportButton"))==null||n.addEventListener("click",Ir),(r=document.querySelector("#refreshMemberLinksButton"))==null||r.addEventListener("click",()=>Yn()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>dd());const t=document.querySelector("#memberLinksReportSearchInput");t&&(t.addEventListener("input",od),t.addEventListener("keydown",ld)),(o=document.querySelector("#memberLinksReportActionFilter"))==null||o.addEventListener("change",sd),(s=document.querySelector("#memberLinksReportStatusFilter"))==null||s.addEventListener("change",ad),(a=document.querySelector("#memberLinksReportMethodFilter"))==null||a.addEventListener("change",cd),fn(),document.querySelectorAll("[data-accept-member-candidate]").forEach(u=>{u.addEventListener("click",()=>ps(u.dataset.acceptMemberCandidate||"",u.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(u=>{u.addEventListener("click",()=>ud(u.dataset.unlinkMemberLink||"",u.dataset.unlinkMemberLinkDiscordId||""))}),document.querySelectorAll("[data-unblock-member-auto-link]").forEach(u=>{u.addEventListener("click",()=>gs(u.dataset.unblockMemberAutoLink||"",u.dataset.unblockMemberAutoLinkDiscordId||""))});const e=document.querySelector(".member-links-report-overlay");e&&e.addEventListener("click",u=>{u.target===e&&Ir()})}function io(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase();return e==="candidate"?0:e==="linked"?2:1}function oo(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function td(t){return[t==null?void 0:t.eso_account_name,t==null?void 0:t.discord_username,t==null?void 0:t.discord_display_name,t==null?void 0:t.discord_server_nickname,t==null?void 0:t.discord_user_id].filter(Boolean).join(" ")}function nd(t){return[...Array.isArray(t)?t:[]].sort((e,n)=>{const r=io(e)-io(n);if(r!==0)return r;const i=oo(e).localeCompare(oo(n),void 0,{sensitivity:"base"});return i!==0?i:String((e==null?void 0:e.discord_user_id)||"").localeCompare(String((n==null?void 0:n.discord_user_id)||""),void 0,{sensitivity:"base"})})}function rd(t){const e=Or(t);let n="";e==="Username"?n=(t==null?void 0:t.discord_username)||"":e==="Global Name"?n=(t==null?void 0:t.discord_display_name)||"":e==="Server Nickname"&&(n=(t==null?void 0:t.discord_server_nickname)||""),n||(n=(t==null?void 0:t.discord_server_nickname)||(t==null?void 0:t.discord_display_name)||(t==null?void 0:t.discord_username)||(t==null?void 0:t.discord_user_id)||"");const r=e?` <span class="member-link-report-match-field">(${c(e)})</span>`:"";return`<span class="member-link-report-discord-name">${c(n)}</span>${r}`}function id(){return O&&L.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(L)||L.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${nd(L).map(e=>{var o;const n=String(e.link_status||"").trim().toLowerCase(),r=String(e.link_method||"").trim().toLowerCase(),i=rd(e);return`
              <tr
                data-member-links-report-row
                data-member-links-report-search="${f(td(e))}"
                data-member-links-report-status="${f(n)}"
                data-member-links-report-method="${f(r)}"
                data-member-links-report-action="${f(Number(e.locked||0)===1||n==="blocked"?"can-unblock":n==="linked"?"can-unlink":n==="candidate"?"needs-link":"")}"
              >
                <td>${c(e.eso_account_name||"")}</td>
                <td>${i}</td>
                <td class="member-links-status-col">${c(Number(e.locked||0)===1||n==="blocked"?"blocked":n||"")}</td>
                <td class="member-links-method-col">${c(r||"")}${Number(e.locked||0)===1?" \u{1F512}":""}</td>
                <td class="member-links-action-col">
                  <div class="member-link-actions">
                    ${n==="candidate"?`<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${f(e.eso_account_name||"")}" data-accept-member-candidate-discord-id="${f(e.discord_user_id||"")}" aria-label="Accept candidate link" title="Accept candidate link">\u2713</button>`:""}
                    ${n==="linked"?`<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${f(e.eso_account_name||"")}" data-unlink-member-link-discord-id="${f(e.discord_user_id||"")}" aria-label="Unlink this ESO/Discord pair" title="Unlink this ESO/Discord pair">\u{1F5D1}</button>`:""}
                    ${Number(e.locked||0)===1||n==="blocked"?`<button class="member-link-report-action member-link-report-unblock" type="button" data-unblock-member-auto-link="${f(e.eso_account_name||"")}" data-unblock-member-auto-link-discord-id="${f(e.discord_user_id||"")}" aria-label="Remove auto-link block" title="Remove auto-link block">\u21BA</button>`:""}
                  </div>
                </td>
                <td class="member-links-confidence-col">${c(String((o=e.match_confidence)!=null?o:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function ms(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(t=>t.offsetParent!==null)}function so(t){const e=ms();if(e.forEach(r=>r.classList.remove("member-links-report-row-active")),e.length===0){he=-1;return}he=Math.max(0,Math.min(t,e.length-1));const n=e[he];n.classList.add("member-links-report-row-active"),n.scrollIntoView({block:"nearest"})}function fn(){const t=le(Kn),e=String(Ve||"").trim().toLowerCase(),n=String(ln||"").trim().toLowerCase(),r=String(dn||"").trim().toLowerCase(),i=[...document.querySelectorAll("[data-member-links-report-row]")];let o=0;i.forEach(a=>{const u=le(a.dataset.memberLinksReportSearch||""),g=String(a.dataset.memberLinksReportAction||"").trim().toLowerCase(),S=String(a.dataset.memberLinksReportStatus||"").trim().toLowerCase(),y=String(a.dataset.memberLinksReportMethod||"").trim().toLowerCase(),st=(!t||u.includes(t))&&(!e||g===e)&&(!n||S===n)&&(!r||y===r);a.hidden=!st,a.classList.remove("member-links-report-row-active"),st&&(o+=1)});const s=document.querySelector("#memberLinksReportSearchEmpty");s&&(s.hidden=o!==0),he=-1}function od(t){Kn=t.target.value||"",fn()}function sd(t){Ve=t.target.value||"",fn()}function ad(t){ln=t.target.value||"",fn()}function cd(t){dn=t.target.value||"",fn()}function ld(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=ms();if(e.length===0)return;if(t.key==="ArrowDown"){const r=he<0?0:he+1;so(r>=e.length?e.length-1:r);return}const n=he<0?e.length-1:he-1;so(n<0?0:n)}async function Yn(t={}){if(!(d!=null&&d.connected)){q="You must be connected to load member links.",l();return}O=!0,q="",t.silent||l();try{const e=await w("guildsync:request-member-links",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load member links.");L=Array.isArray(e.links)?e.links:[]}catch(e){q=k(e)}finally{O=!1,l()}}async function dd(){if(!(d!=null&&d.connected)||!p.logged_in){q="You must be logged in and connected to run auto-linking.",l();return}O=!0,q="",l();try{const t=await w("guildsync:run-member-auto-linking",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run auto-linking.");L=Array.isArray(t.links)?t.links:[],h("member-auto-link",t.message||"Member auto-linking complete.",{ttlMs:m})}catch(t){q=k(t)}finally{O=!1,l()}}async function ps(t,e=""){try{const n=await w("guildsync:accept-member-link-candidate",{esoAccountName:t,discordUserId:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to accept candidate.");L=Array.isArray(n.links)?n.links:L,h("member-link-accepted",n.message||"Candidate accepted as a link.",{ttlMs:m})}catch(n){q=k(n),h("member-link-accept-error",q,{ttlMs:m})}}async function gs(t,e=""){if(!await Jr({title:"Remove Auto-Link Block?",message:`Remove the blocked auto-match record between ${t} and this Discord account? Auto-linking will run immediately and this screen will refresh to show whether the pair linked again.`,confirmLabel:"Unblock",cancelLabel:"Cancel",confirmClass:"danger"}))return!1;O=!0,q="",l();try{const r=await w("guildsync:unblock-member-auto-link",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to remove auto-link block.");L=Array.isArray(r.links)?r.links:L;const i=Z(t),o=String(e||"").trim(),s=r.refreshedPair||L.find(g=>Z(g.eso_account_name)===i&&String(g.discord_user_id||"").trim()===o),a=String((s==null?void 0:s.link_status)||"").trim().toLowerCase(),u=a==="linked"?" It linked again automatically.":a==="candidate"?" It is now showing as a candidate.":" No automatic link was recreated.";return h("member-link-unblocked",`${r.message||"Auto-link block removed."}${u}`,{ttlMs:m}),!0}catch(r){return q=k(r),h("member-link-unblock-error",q,{ttlMs:m}),!1}finally{O=!1,l()}}async function ud(t,e=""){if(!!await Jr({title:"Unlink Member?",message:`Remove the link between ${t} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const r=await w("guildsync:manual-unlink-member",{esoAccountName:t,discordUserId:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to unlink member.");L=Array.isArray(r.links)?r.links:L,h("member-link-unlinked",r.message||"Member link removed.",{ttlMs:m})}catch(r){q=k(r)}l()}}function Z(t){return String(t||"").trim().replace(/^@+/,"").toLowerCase()}function Jn(t){const e=Z(t);return e?L.filter(n=>Z(n.eso_account_name)===e):[]}function Qn(t){const e=String(t||"").trim();return e?L.filter(n=>String(n.discord_user_id||"").trim()===e):[]}function ys(t=[]){const e=Array.isArray(t)?t.filter(Boolean):[];if(e.length===0)return null;const n=e.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(n.length>0){const i=n.find(s=>String(s.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const o=n.find(s=>String(s.link_method||"").trim().toLowerCase()==="exact");return o||n[0]}const r=e.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return r||e[0]}function fd(t){return ys(Qn(t))}function hd(t){return`${Z(t==null?void 0:t.eso_account_name)}::${String((t==null?void 0:t.discord_user_id)||"").trim()}`}function ti(){return _?_.mode==="discord-to-eso"?Qn(_.discordUserId):Jn(_.esoAccountName):[]}function md(t){const e=String(t||"").trim(),n=G.find(r=>String(r.discord_id||"").trim()===e);return n&&(n.server_nickname||n.global_name||n.username||n.discord_id)||e}function bs(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?Qn(t.discordUserId):Jn(t.esoAccountName),r=ys(n),i=String((r==null?void 0:r.link_status)||"").trim().toLowerCase(),o=n.filter(a=>String(a.link_status||"").trim().toLowerCase()==="linked").length,s=n.filter(a=>String(a.link_status||"").trim().toLowerCase()==="candidate").length;return o>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${e==="discord-to-eso"?o===1?r.eso_account_name:`${o} ESO accounts`:o===1?r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member":`${o} Discord accounts`}`}:i==="candidate"||s>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${e==="discord-to-eso"?r.eso_account_name:r.discord_server_nickname||r.discord_display_name||r.discord_username||r.discord_user_id||"Discord member"}`}:i==="blocked"||Number((r==null?void 0:r.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function ks(t){const e=(t==null?void 0:t.mode)||"",n=e==="discord-to-eso"?t.discordUserId:t.esoAccountName,r=bs(t);return`
    <button
      class="member-link-status-dot member-link-status-${f(r.className)}"
      type="button"
      title="${f(r.title)}"
      aria-label="${f(r.label)}"
      data-open-member-link-dialog="${f(e)}"
      data-member-link-value="${f(n||"")}"
    ></button>
  `}function pd(){return _?_.mode==="discord-to-eso"?md(_.discordUserId):_.esoAccountName||"":""}function vs(t){const e=String(t||"").trim().toLowerCase();return e==="discord_username"||e==="username"?"Username":e==="discord_display_name"||e==="global_name"||e==="display_name"?"Global Name":e==="discord_server_nickname"||e==="server_nickname"||e==="nickname"?"Server Nickname":""}function Or(t){const e=vs((t==null?void 0:t.match_field)||(t==null?void 0:t.matched_field)||(t==null?void 0:t.discord_match_field));if(e)return e;const n=String((t==null?void 0:t.match_reason)||"").toLowerCase();if(n.includes("discord_username")||n.includes("username"))return"Username";if(n.includes("discord_display_name")||n.includes("global")||n.includes("display"))return"Global Name";if(n.includes("discord_server_nickname")||n.includes("server")||n.includes("nickname"))return"Server Nickname";const r=String((t==null?void 0:t.link_method)||"").trim().toLowerCase();if(r==="exact"||r==="fuzzy"){const i=(t==null?void 0:t.eso_account_name)||"",o=[{field:"Username",value:t==null?void 0:t.discord_username},{field:"Global Name",value:t==null?void 0:t.discord_display_name},{field:"Server Nickname",value:t==null?void 0:t.discord_server_nickname}];let s=null;for(const a of o){const u=gd(i,a.value);(!s||u>s.score)&&(s={...a,score:u})}if(s&&s.score>0)return s.field}return""}function le(t){return String(t||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function gd(t,e){const n=le(t),r=le(e);if(!n||!r)return 0;if(n===r)return 100;if((n.includes(r)||r.includes(n))&&Math.min(n.length,r.length)>=4)return 88;const i=Math.abs(n.length-r.length),o=[...n].findIndex((a,u)=>a!==r[u]),s=o===-1?Math.min(n.length,r.length):o;return Math.max(0,Math.min(75,Math.round(s*10-i*3)))}function yd(t){const e=String(t||"").trim().toLowerCase();return e==="blocked"||e==="unlinked"?"unlinked":e||"unlinked"}function bd(t){const e=String(t||"").trim().toLowerCase();return e==="manual_unlink"?"auto-link disabled":e||"none"}function kd(t){const e=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),n=yd(t==null?void 0:t.link_status);return`<span class="${e==="linked"?"member-link-status-word member-link-status-word-linked":e==="candidate"?"member-link-status-word member-link-status-word-candidate":"member-link-status-word"}">${c(n)}</span>`}function vd(t){var a;const e=t.discord_server_nickname||t.discord_display_name||t.discord_username||t.discord_user_id||"",n=Number(t.locked||0)===1?"Auto-link blocked":"Auto-managed",r=String(t.link_status||"").trim().toLowerCase(),s=r==="linked"?`<button
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
        <div><span>ESO:</span> ${c(t.eso_account_name||"")}</div>
        <div><span>Discord:</span> ${c(e)}</div>
        <div><span>Status:</span> ${kd(t)} \xB7 ${c(bd(t.link_method))} \xB7 ${c(String((a=t.match_confidence)!=null?a:""))}% \xB7 ${c(n)}</div>
        ${Or(t)?`<div><span>Matched:</span> Matched on ${c(Or(t))}</div>`:""}
      </div>
      ${s}
    </div>
  `}function Sd(){const t=ti();return t.length?[...t].sort((n,r)=>{var u,g;const i=String(n.link_status||"").trim().toLowerCase(),o=String(r.link_status||"").trim().toLowerCase(),s={linked:0,candidate:1,blocked:2,unlinked:3},a=((u=s[i])!=null?u:9)-((g=s[o])!=null?g:9);return a!==0?a:Number(r.match_confidence||0)-Number(n.match_confidence||0)}).map(n=>vd(n)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function wd(){if(_t)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(ye)return`<div class="discord-data-error">${c(ye)}</div>`;if(!Array.isArray(Qe)||Qe.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const t=new Set(ti().map(n=>hd(n))),e=[...Qe].filter(n=>{const r=(_==null?void 0:_.mode)==="discord-to-eso"?`${Z(n.account_name)}::${String(_.discordUserId||"").trim()}`:`${Z(_==null?void 0:_.esoAccountName)}::${String(n.discord_id||"").trim()}`;return!t.has(r)}).sort((n,r)=>{const i=Number(r.confidence||0)-Number(n.confidence||0);return i!==0?i:ao(n).localeCompare(ao(r),void 0,{sensitivity:"base"})});return e.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${e.map(n=>_d(n)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function ao(t){return((_==null?void 0:_.mode)||"")==="discord-to-eso"?String(t.account_name||""):String(t.server_nickname||t.global_name||t.username||t.discord_id||"")}function _d(t,e={}){var y,b,x;const n=(_==null?void 0:_.mode)||"",r=n==="discord-to-eso"?t.account_name:t.server_nickname||t.global_name||t.username||t.discord_id||"Discord member",i=vs(t.matchField||t.match_field||t.discordMatchField||t.discord_match_field),o=n==="discord-to-eso"?`Rank: ${t.rank||""}`:[t.username,t.global_name,t.server_nickname].filter(Boolean).join(" \xB7 "),s=[o,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),a=n==="discord-to-eso"?t.account_name:t.discord_id,u=e.disabled===!0,g=[r,o,s,t.account_name,t.username,t.global_name,t.server_nickname,t.discord_id].filter(Boolean).join(" "),S=[r,s,`${(y=t.confidence)!=null?y:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${f(a||"")}" data-member-link-option-search="${f(g)}" title="${f(S)}" ${u?"disabled":""}>
      <span class="member-link-option-name" title="${f(r||"")}">${c(r||"")}</span>
      <span class="member-link-option-subtitle" title="${f(s||"")}">${c(s||"")}</span>
      <span class="member-link-option-confidence" title="${f(String((b=t.confidence)!=null?b:0))}%">${c(String((x=t.confidence)!=null?x:0))}%</span>
    </button>
  `}function Ad(){const t=(_==null?void 0:_.mode)||"",e=pd(),n=t==="discord-to-eso"?"ESO Account":"Discord Member";return`
    <div class="roster-history-overlay member-link-dialog-overlay" role="dialog" aria-modal="true" aria-labelledby="memberLinkDialogTitle">
      <div class="roster-history-dialog member-link-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="memberLinkDialogTitle">Member Link</h3>
            <p>${c(e)} \u2192 choose ${c(n)}.</p>
          </div>
          <button id="closeMemberLinkDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close member link window" title="Close">\xD7</button>
        </div>

        <div class="member-link-dialog-body">
          <section class="member-link-dialog-section member-link-current-section">
            ${Sd()}
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
              value="${f(un)}"
            />
            ${wd()}
          </section>
        </div>

      </div>
    </div>
  `}async function Ss(t,e){if(!(d!=null&&d.connected)||!A()){h("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:m});return}Ge=!0,_=t==="discord-to-eso"?{mode:t,discordUserId:e}:{mode:"eso-to-discord",esoAccountName:e},Qe=[],_t=!0,ye="",un="",te=-1,l();try{if(!Array.isArray(L)||L.length===0){const i=await w("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(L=Array.isArray(i.links)?i.links:[])}const r=await w("guildsync:request-member-link-options",t==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:e}:{mode:"eso-to-discord",accountName:e},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load link suggestions.");Qe=Array.isArray(r.options)?r.options:[]}catch(n){ye=k(n)}finally{_t=!1,l()}}function Et(){document.removeEventListener("keydown",qr),Ge=!1,_=null,Qe=[],_t=!1,ye="",un="",te=-1,l()}function ws(){return[...document.querySelectorAll(".member-link-option-row")].filter(t=>t.offsetParent!==null&&!t.disabled)}function co(t){const e=ws();if(e.forEach(r=>r.classList.remove("member-link-option-row-active")),e.length===0){te=-1;return}te=Math.max(0,Math.min(t,e.length-1));const n=e[te];n.classList.add("member-link-option-row-active"),n.scrollIntoView({block:"nearest"})}function _s(){const t=le(un),e=[...document.querySelectorAll(".member-link-option-row")];let n=0;e.forEach(i=>{const o=le(i.dataset.memberLinkOptionSearch||i.textContent||""),s=!t||o.includes(t);i.hidden=!s,i.classList.remove("member-link-option-row-active"),s&&(n+=1)});const r=document.querySelector("#memberLinkSuggestionSearchEmpty");r&&(r.hidden=n!==0),te=-1}function Ld(t){un=t.target.value||"",_s()}function Ed(t){if(t.key==="Enter"){t.preventDefault();return}if(t.key!=="ArrowDown"&&t.key!=="ArrowUp")return;t.preventDefault();const e=ws();if(e.length===0)return;if(t.key==="ArrowDown"){const r=te<0?0:te+1;co(r>=e.length?e.length-1:r);return}const n=te<0?e.length-1:te-1;co(n<0?0:n)}function qr(t){!Ge||t.key==="Escape"&&(t.preventDefault(),Et())}async function Rd(t){if(!(!_||!t))try{const e=_.mode==="discord-to-eso"?{esoAccountName:t,discordUserId:_.discordUserId}:{esoAccountName:_.esoAccountName,discordUserId:t},n=await w("guildsync:manual-link-member",e,3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to link members.");L=Array.isArray(n.links)?n.links:L,h("member-link-saved",n.message||"Member link saved.",{ttlMs:m}),Et()}catch(e){ye=k(e),l()}}async function $d(t,e=""){await ps(t,e),Et()}async function As(){if(!!_){_t=!0,ye="",l();try{const t=_.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:_.discordUserId}:{mode:"eso-to-discord",accountName:_.esoAccountName},e=await w("guildsync:request-member-link-options",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load link suggestions.");Qe=Array.isArray(e.options)?e.options:[]}catch(t){ye=k(t)}finally{_t=!1,l()}}}async function Dd(t="",e=""){const n=ti().find(i=>Z(i.eso_account_name)===Z(t)&&String(i.discord_user_id||"").trim()===String(e||"").trim());if(!(!n||!await Jr({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await w("guildsync:manual-unlink-member",{esoAccountName:n.eso_account_name,discordUserId:n.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");L=Array.isArray(i.links)?i.links:L,h("member-link-unlinked",i.message||"Member link removed.",{ttlMs:m}),await As()}catch(i){ye=k(i),l()}}async function Md(t="",e=""){await gs(t,e)&&await As()}function Ls(){var n;if(!Ge)return;document.removeEventListener("keydown",qr),document.addEventListener("keydown",qr),(n=document.querySelector("#closeMemberLinkDialogButton"))==null||n.addEventListener("click",Et);const t=document.querySelector("#memberLinkSuggestionSearchInput");t&&(t.addEventListener("input",Ld),t.addEventListener("keydown",Ed),_s()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(r=>{r.addEventListener("click",()=>Dd(r.dataset.unlinkEsoAccount||"",r.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-unblock-dialog-member-auto-link]").forEach(r=>{r.addEventListener("click",()=>Md(r.dataset.unblockEsoAccount||"",r.dataset.unblockDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(r=>{r.addEventListener("click",()=>Rd(r.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(r=>{r.addEventListener("click",()=>$d(r.dataset.acceptDialogMemberCandidate||"",r.dataset.acceptDialogDiscordUserId||""))});const e=document.querySelector(".member-link-dialog-overlay");e&&e.addEventListener("click",r=>{r.target===e&&Et()})}function Es(){var e,n,r;if(!Nt)return;(e=document.querySelector("#closeAssociateTicketReportButton"))==null||e.addEventListener("click",Tr),(n=document.querySelector("#rerunAssociateTicketReportButton"))==null||n.addEventListener("click",()=>Ns()),(r=document.querySelector("#copyAssociateTicketReportGridButton"))==null||r.addEventListener("click",()=>Ol());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Tr()})}function Rs(){var e,n,r;if(!Ct)return;(e=document.querySelector("#closeDiscordRankAuditReportButton"))==null||e.addEventListener("click",Cr),(n=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||n.addEventListener("click",()=>Ms()),(r=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||r.addEventListener("click",()=>Pl());const t=document.querySelector(".report-results-overlay");t&&t.addEventListener("click",i=>{i.target===t&&Cr()})}function $s(){var r,i,o;if(!Bt)return;(r=document.querySelector("#closeDiscordLastSeenReportButton"))==null||r.addEventListener("click",Br),(i=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||i.addEventListener("click",()=>Ds()),(o=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||o.addEventListener("click",()=>Jl()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(s=>{s.addEventListener("click",()=>Vl(s.dataset.discordLastSeenSort||""))});const t=document.querySelector("#discordLastSeenReportSearchInput");t&&t.addEventListener("input",Nd);const e=document.querySelector("#discordLastSeenLinkStatusFilter");e&&e.addEventListener("change",Td),ni();const n=document.querySelector(".discord-last-seen-report-overlay");n&&n.addEventListener("click",s=>{s.target===n&&Br()})}function Nd(t){It=t.target.value||"",ni()}function Td(t){Le=t.target.value||"",ni()}function ni(){const t=le(It),e=String(Le||"").trim().toLowerCase(),n=[...document.querySelectorAll("[data-discord-last-seen-row]")];let r=0;n.forEach(o=>{const s=le(o.dataset.discordLastSeenSearch||o.textContent||""),a=String(o.dataset.discordLastSeenLinkStatus||"").trim().toLowerCase(),S=(!t||s.includes(t))&&(!e||a===e);o.hidden=!S,S&&(r+=1)});const i=document.querySelector("#discordLastSeenReportSearchEmpty");i&&(i.hidden=r!==0)}async function Ds(){if(!(d!=null&&d.connected)||!A()){Je="You must be logged in and connected to run this report.",l();return}Ae=!0,Je="",l();try{const t=await w("guildsync:request-discord-member-dataJSON",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load Discord roster data.");G=fi(t.members),jn=hi(t.roles),zr=[...G]}catch(t){Je=k(t)}finally{Ae=!1,l(),$("discordLastSeenReportSearchInput")}}async function Ms(){if(!(d!=null&&d.connected)||!A()){Ye="You must be logged in and connected to run this report.",l();return}_e=!0,Ye="",l();try{const t=await w("guildsync:request-discord-rank-audit-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");rn=Array.isArray(t.rows)?t.rows:[]}catch(t){Ye=k(t)}finally{_e=!1,l()}}async function Ns(){if(!(d!=null&&d.connected)||!A()){Ke="You must be logged in and connected to run this report.",l();return}we=!0,Ke="",l();try{const t=await w("guildsync:request-associate-ticket-report",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to run report.");Tt=Array.isArray(t.rows)?t.rows:[]}catch(t){Ke=k(t)}finally{we=!1,l()}}function gt(){const t=String(Ft||"").trim().toLowerCase(),e={account_name:"Anonymous",rank:"Manual Entry"},n=new Set(["anonymous"]),r=z.filter(i=>String(i.account_name||"").trim()).filter(i=>{const s=String(i.account_name||"").trim().toLowerCase();return!s||n.has(s)||t&&!s.includes(t)?!1:(n.add(s),!0)}).slice().sort((i,o)=>{const s=String(i.account_name||"").toLowerCase(),a=String(o.account_name||"").toLowerCase(),u=t&&s.startsWith(t)?0:1,g=t&&a.startsWith(t)?0:1;return u!==g?u-g:s.localeCompare(a)}).slice(0,19);return[e,...r]}function Ts(t=gt()){const e=String(E.accountName||"").trim();return t.length===0?'<div class="roster-history-muted manual-ticket-no-matches">No matching guild members found.</div>':t.map((n,r)=>`
        <button class="roster-history-match${r===B||n.account_name===e?" is-selected":""}" type="button" data-manual-ticket-account="${f(n.account_name)}" role="option" aria-selected="${r===B||n.account_name===e?"true":"false"}">
          <span>${c(n.account_name)}</span>
          <strong>${c(n.rank||"")}</strong>
          ${r===B?"<small>Enter</small>":""}
        </button>
      `).join("")}function Cs(){document.querySelectorAll("[data-manual-ticket-account]").forEach(t=>{t.addEventListener("mousedown",e=>{e.preventDefault()}),t.addEventListener("click",()=>{Bs(t.dataset.manualTicketAccount||"")})})}function pr(){const t=document.querySelector("#manualTicketMatchList");if(!t)return;const e=gt();B>=e.length&&(B=e.length>0?e.length-1:-1),t.innerHTML=Ts(e),Cs()}function Bs(t){const e=String(t||"").trim();E.accountName=e,Ft=e,X=!1,B=-1,H="",l()}function $(t){window.setTimeout(()=>{const e=document.querySelector(`#${t}`);if(!e)return;e.focus();const n=String(e.value||"").length;typeof e.setSelectionRange=="function"&&e.setSelectionRange(n,n)},0)}function Cd(){const t=X?gt():[],e=String(E.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Entry</h3>
            <p>Add a manual banking or raffle entry such as FFTG, officer corrections, or anonymous gold.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${H?`<div class="discord-data-error">${c(H)}</div>`:""}

        <div class="manual-ticket-form">
          <div class="manual-ticket-member-picker">
            <label class="manual-ticket-member-field" for="manualTicketAccountSearchInput">
              <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${f(Ft)}" autocomplete="off" />
            </label>

            ${X?`
              <div id="manualTicketMatchList" class="roster-history-match-list manual-ticket-match-list" role="listbox" aria-label="Matching guild members">
                ${Ts(t)}
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
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${In?"disabled":""}>${In?"Saving...":"Add Manual Entry"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function Is(){var o,s,a,u,g,S;if(!ge)return;(o=document.querySelector("#closeManualBiweeklyTicketButton"))==null||o.addEventListener("click",()=>{ge=!1,l()});const t=document.querySelector("#manualTicketAccountSearchInput");if(t){const y=({rerender:b=!1}={})=>{if(X=!0,B=gt().length>0?0:-1,b){l(),$("manualTicketAccountSearchInput");return}pr()};t.addEventListener("focus",()=>{X||y({rerender:!0})}),t.addEventListener("click",()=>{X||y({rerender:!0})}),t.addEventListener("input",b=>{Ft=b.target.value||"",E.accountName="",X=!0,B=gt().length>0?0:-1,pr()}),t.addEventListener("keydown",b=>{if(b.key==="Escape")return;if(!X){(b.key==="ArrowDown"||b.key==="ArrowUp")&&(b.preventDefault(),y({rerender:!0}));return}const x=gt();if(b.key==="ArrowDown"||b.key==="ArrowUp"){if(x.length===0)return;b.preventDefault();const Gt=b.key==="ArrowDown"?1:-1;B=((B<0?0:B)+Gt+x.length)%x.length,pr();return}if(b.key!=="Enter")return;b.preventDefault();const ke=x[B>=0?B:0];ke!=null&&ke.account_name&&Bs(ke.account_name)})}Cs(),(s=document.querySelector("#manualTicketNoteInput"))==null||s.addEventListener("input",y=>{E.note=y.target.value||""}),document.querySelectorAll("[data-manual-ticket-type]").forEach(y=>{y.addEventListener("click",()=>{const b=String(y.dataset.manualTicketType||"").trim().toLowerCase();E.ticketType=b==="monthly"?"monthly":"biweekly",l()})}),(a=document.querySelector("[data-manual-ticket-toggle]"))==null||a.addEventListener("click",()=>{E.ticketType=E.ticketType==="monthly"?"biweekly":"monthly",l()});const e=document.querySelector("#manualTicketGoldInput");e==null||e.addEventListener("input",y=>{const b=String(y.target.value||"").replace(/\D/g,"");y.target.value!==b&&(y.target.value=b),E.goldValue=b});const n=document.querySelector("#manualTicketCountInput");n==null||n.addEventListener("input",y=>{const b=String(y.target.value||"").replace(/\D/g,"");y.target.value!==b&&(y.target.value=b),E.tickets=b});const r=y=>{const b=Number(E.tickets)||0,x=Math.max(0,b+y);E.tickets=String(x),n&&(n.value=E.tickets,n.focus())};(u=document.querySelector("#manualTicketCountUpButton"))==null||u.addEventListener("click",()=>r(1)),(g=document.querySelector("#manualTicketCountDownButton"))==null||g.addEventListener("click",()=>r(-1)),(S=document.querySelector("#saveManualBiweeklyTicketButton"))==null||S.addEventListener("click",()=>Bd());const i=document.querySelector(".roster-history-overlay");i&&i.addEventListener("click",y=>{y.target===i&&(ge=!1,l())})}async function Bd(){const t=String(E.accountName||"").trim(),e=String(E.note||"").trim(),n=String(E.ticketType||"biweekly").trim().toLowerCase()==="monthly"?"monthly":"biweekly",r=Number(String(E.goldValue||"").trim()||0),i=Number(String(E.tickets||"").trim()||0);if(X){H="Select a matching guild member or Anonymous from the list before saving.",l(),$("manualTicketAccountSearchInput");return}if(!t){H="Select a matching guild member or Anonymous from the list before saving.",l(),$("manualTicketAccountSearchInput");return}if(!Number.isFinite(r)||r<0){H="Gold value must be zero or greater.",l();return}if(!Number.isFinite(i)||i<0){H="Tickets must be zero or greater.",l();return}const o=t.toLowerCase()==="anonymous";if(o&&Math.floor(i)>0){H="Anonymous cannot be awarded tickets. Use 0 tickets and enter a gold value.",l();return}if(Math.floor(r)===0&&Math.floor(i)===0){H=o?"Enter a gold value for Anonymous when tickets are 0.":"Enter gold or tickets. Both cannot be zero.",l();return}In=!0,H="",l();try{const s=await w("guildsync:add-manual-biweekly-ticket-entry",{account_name:t,note:e,ticket_type:n,gold_value:Math.floor(r),tickets:Math.floor(i)},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Failed to add manual entry.");ge=!1,E={accountName:"",note:"",ticketType:"biweekly",goldValue:"",tickets:""},Ft="",B=-1,X=!1,await be({silent:!0}),h("manual-ticket-added",s.message||"Manual entry added.",{ttlMs:m})}catch(s){H=k(s)}finally{In=!1,l()}}async function Id(t=""){const e=String(t||"").trim();if(!!e){Mt=!0,nn=e,Ne=[],Bn=!0,ze=!1,Te="",vt="",l();try{const n=await w("guildsync:request-roster-member-notes",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster notes.");Ne=Array.isArray(n.notes)?n.notes:[]}catch(n){Te=k(n)}finally{Bn=!1,l()}}}function xr(){Mt=!1,nn="",Ne=[],Bn=!1,ze=!1,Te="",vt="",l()}function Od(){var n,r;if(!Mt)return;(n=document.querySelector("#closeRosterNotesButton"))==null||n.addEventListener("click",xr);const t=document.querySelector("#rosterNotesNewNote");t&&t.addEventListener("input",i=>{vt=i.target.value||""}),(r=document.querySelector("#saveRosterNoteButton"))==null||r.addEventListener("click",()=>qd());const e=document.querySelector(".roster-notes-overlay");e&&e.addEventListener("click",i=>{i.target===e&&xr()})}async function qd(){const t=String(vt||"").trim();if(!t){Te="Enter a note before saving.",l();return}ze=!0,Te="",l();try{const e=await w("guildsync:add-roster-member-note",{account_name:nn,note:t},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to save roster note.");e.note&&(Ne=[...Ne,e.note]),vt="";const n=z.find(r=>Z(r.account_name)===Z(nn));n&&(n.note_count=Number(n.note_count||0)+1)}catch(e){Te=k(e)}finally{ze=!1,l()}}function Os(){const t=document.querySelector("#refreshRosterDataButton");t&&t.addEventListener("click",()=>hn());const e=document.querySelector("#openRosterHistoryButton");e&&e.addEventListener("click",()=>{kt=!0,me="",l()});const n=document.querySelector("#rosterMemberSearch");n&&(n.addEventListener("input",s=>{Cn=s.target.value||"",Rr=s.target.selectionStart,$r=s.target.selectionEnd,N=-1,l({restoreRosterSearchFocus:!0})}),n.addEventListener("keydown",xd)),document.querySelectorAll("[data-roster-sort-column]").forEach(s=>{s.addEventListener("click",()=>{kl(s.dataset.rosterSortColumn||"account_name")})});const r=document.querySelector("#rosterRankFilter");r&&r.addEventListener("change",s=>{const a=String(s.target.value||"").trim();a&&(je.add(a),N=-1,l())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(s=>{s.addEventListener("click",()=>{const a=s.dataset.removeRosterRankFilter||"";je.delete(a),N=-1,l()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",s=>{const a=String(s.target.value||"").trim();a&&(ht.add(a),N=-1,l())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(s=>{s.addEventListener("click",()=>{const a=s.dataset.removeRosterLinkStatusFilter||"";ht.delete(a),N=-1,l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(s=>{s.addEventListener("click",()=>Ss(s.dataset.openMemberLinkDialog||"",s.dataset.memberLinkValue||""))}),document.querySelectorAll("[data-open-roster-notes]").forEach(s=>{s.addEventListener("click",()=>Id(s.dataset.openRosterNotes||""))}),Od();const o=document.querySelector("#clearRosterFiltersButton");o&&o.addEventListener("click",()=>{Cn="",je.clear(),ht.clear(),fe="",F="",N=-1,l()}),Fd()}function xd(t){if(t.key!=="ArrowDown"&&t.key!=="ArrowUp"&&t.key!=="Enter")return;if(t.key==="Enter"){t.preventDefault();return}const e=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(e.length===0){N=-1;return}t.preventDefault(),t.key==="ArrowDown"?N=N<0?0:Math.min(N+1,e.length-1):t.key==="ArrowUp"&&(N=N<0?e.length-1:Math.max(N-1,0)),e.forEach((r,i)=>{r.classList.toggle("roster-search-active-row",i===N)});const n=e[N];n&&typeof n.scrollIntoView=="function"&&n.scrollIntoView({block:"nearest",inline:"nearest"})}function Fd(){const t=document.querySelector("#closeRosterHistoryButton");t&&t.addEventListener("click",()=>{kt=!1,l()});const e=document.querySelector("#rosterHistorySearchInput");e&&(e.addEventListener("input",n=>{if(tn=n.target.value||"",Y=-1,!tn.trim()){clearTimeout(mr),me="",W=[],xe="",De=[],Me=!1,l(),$("rosterHistorySearchInput");return}clearTimeout(mr),mr=setTimeout(()=>{Hd({auto:!0,keepFocus:!0})},250)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(W.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;Y=((Y<0?0:Y)+i+W.length)%W.length,l(),$("rosterHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=W[Y>=0?Y:0];r!=null&&r.account_name&&uo(r.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(n=>{n.addEventListener("click",()=>{uo(n.dataset.rosterHistoryAccount||"")})})}function qs(){const t=document.querySelector("#closeDiscordHistoryButton");t&&t.addEventListener("click",()=>{St=!1,l()});const e=document.querySelector("#discordHistorySearchInput");e&&(e.addEventListener("input",n=>{Se=n.target.value||"",J=-1,Ue+=1;const r=Ue;if(clearTimeout(Zi),!Se.trim()){pe="",j=[],wt="",tt="",Ce=[],Be=!1,l(),$("discordHistorySearchInput");return}Zi=setTimeout(()=>{Pd({auto:!0,keepFocus:!0,generation:r})},Kc)}),e.addEventListener("keydown",n=>{if(n.key==="ArrowDown"||n.key==="ArrowUp"){if(j.length===0)return;n.preventDefault();const i=n.key==="ArrowDown"?1:-1;J=((J<0?0:J)+i+j.length)%j.length,l(),$("discordHistorySearchInput");return}if(n.key!=="Enter")return;n.preventDefault();const r=j[J>=0?J:0];r!=null&&r.discord_id&&lo(r.discord_id,Nr(r))})),document.querySelectorAll("[data-discord-history-id]").forEach(n=>{n.addEventListener("click",()=>{lo(n.dataset.discordHistoryId||"",n.dataset.discordHistoryName||"")})})}async function Pd(t={}){const e=Number.isInteger(t.generation)?t.generation:++Ue,n=Se.trim();if(e===Ue){if(!n){pe="",j=[],J=-1,wt="",tt="",Ce=[],Be=!1,l(),t.keepFocus&&$("discordHistorySearchInput");return}Be=!0,pe="",j=[],J=-1,wt="",tt="",Ce=[],l(),t.keepFocus&&$("discordHistorySearchInput");try{const r=await w("guildsync:request-discord-member-history",{query:n},3e4);if(e!==Ue||n!==Se.trim())return;if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search Discord member history.");j=Gd(r.matches),J=j.length>0?0:-1}catch(r){if(e!==Ue||n!==Se.trim())return;pe=k(r)}finally{if(e!==Ue||n!==Se.trim())return;Be=!1,l(),t.keepFocus&&$("discordHistorySearchInput")}}}async function lo(t,e="",n={}){const r=String(t||"").trim();if(!!r){wt=r,tt=String(e||r).trim(),Se=tt,Ce=[],Be=!0,pe="",l();try{const i=await w("guildsync:request-discord-member-history-events",{discord_id:r},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to load Discord member history.");Ce=Ud(i.events)}catch(i){pe=k(i)}finally{Be=!1,n.keepLoading||l()}}}function Gd(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({discord_id:String(e.discord_id||e.discordID||"").trim(),username:String(e.username||"").trim(),global_name:String(e.global_name||e.globalName||"").trim(),server_nickname:String(e.server_nickname||e.serverNickname||"").trim(),event_count:Number(e.event_count||e.eventCount||0)})).filter(e=>e.discord_id):[]}function Ud(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,o,s,a,u,g,S,y,b;return{event_type:String(e.event_type||e.eventType||"").trim(),field_name:String(e.field_name||e.fieldName||"").trim(),old_value:String((r=(n=e.old_value)!=null?n:e.oldValue)!=null?r:"").trim(),new_value:String((o=(i=e.new_value)!=null?i:e.newValue)!=null?o:"").trim(),event_timestamp:(u=(a=(s=e.event_timestamp)!=null?s:e.eventTimestamp)!=null?a:e.timestamp)!=null?u:"",event_datetime:(S=(g=e.event_datetime)!=null?g:e.eventDatetime)!=null?S:"",initiator:String((b=(y=e.initiator)!=null?y:e.initiatorName)!=null?b:"").trim(),source:String(e.source||"").trim()}}):[]}async function Hd(t={}){const e=tn.trim();if(!e){me="",W=[],Y=-1,xe="",De=[],Me=!1,l(),t.keepFocus&&$("rosterHistorySearchInput");return}Me=!0,me="",W=[],Y=-1,xe="",De=[],l(),t.keepFocus&&$("rosterHistorySearchInput");try{const n=await w("guildsync:request-roster-rank-history",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search roster rank history.");W=Vd(n.matches),Y=W.length>0?0:-1}catch(n){me=k(n)}finally{Me=!1,l(),t.keepFocus&&$("rosterHistorySearchInput")}}async function uo(t,e={}){const n=String(t||"").trim();if(!!n){xe=n,tn=n,De=[],Me=!0,me="",l();try{const r=await w("guildsync:request-roster-stream-history",{account_name:n},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to load roster stream history.");De=Wd(r.events)}catch(r){me=k(r)}finally{Me=!1,e.keepLoading||l()}}}function Vd(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>({account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim()})):[]}function Wd(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r;return{event_type:String(e.event_type||e.eventType||"").trim(),rank:String(e.rank||e.rankName||"").trim(),timestamp:(r=(n=e.timestamp)!=null?n:e.timestampS)!=null?r:"",officer:String(e.officer||"").trim()}}):[]}function xs(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i;return{account_name:String(e.account_name||e.accountName||"").trim(),rank:String(e.rank||e.rankName||"").trim(),joined:(n=e.joined)!=null?n:"",note_count:Number((i=(r=e.note_count)!=null?r:e.noteCount)!=null?i:0)||0}}).sort((e,n)=>e.account_name.localeCompare(n.account_name)):[]}function jd(t){if(!t)return"Never";const e=new Date(t);return Number.isNaN(e.getTime())?String(t):e.toLocaleString()}function Xn(t){const e=Number(t);return e?new Date(e*1e3).toLocaleDateString():""}function ri(t){const e=Number(t);return e?new Date(e*1e3).toLocaleString():""}async function zd(t={}){z=xs(t.members),Tn=t.last_refresh||new Date().toISOString(),R==="eso-members"&&l(),h("roster-data-updated",`Roster data updated. Loaded ${z.length} member record${z.length===1?"":"s"}.`,{ttlMs:m})}async function hn(t={}){if(!!(d!=null&&d.connected)){qe=!0,l();try{const e=await w("guildsync:request-roster-data",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to retrieve roster data.");z=xs(e.members),Tn=e.last_refresh||Tn,t.silent||h("roster-data-loaded",`Loaded ${z.length} roster member${z.length===1?"":"s"}.`,{ttlMs:m})}catch(e){h("roster-data-error",k(e),{ttlMs:m})}finally{qe=!1,l()}}}async function Kd(t={}){var e;if(!!A()){if(!(d!=null&&d.connected)){h("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}qe=!0,l();try{const n=await Ac(t);if(!(n!=null&&n.ok)){h("roster-data-pending",(n==null?void 0:n.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:m});return}const r={local_upload_id:Fs(),authenticated_username:ee(),authenticated_discord_user_id:((e=p==null?void 0:p.user)==null?void 0:e.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||t.fileName||"",file_path:n.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:n.data||{}};try{await Gs(r)}catch(i){throw Yd(r),i}await hn({silent:!0})}catch(n){h("roster-data-error",k(n),{ttlMs:m})}finally{qe=!1,l()}}}function Fs(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function ii(){try{const t=window.localStorage.getItem(Fo),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Ps(t){window.localStorage.setItem(Fo,JSON.stringify(Array.isArray(t)?t:[]))}function Yd(t){const e=String((t==null?void 0:t.local_upload_id)||Fs()),n=ii().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Ps(n),h("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function Jd(t){const e=ii().filter(n=>(n==null?void 0:n.local_upload_id)!==t);Ps(e)}async function Qd(){if(ur||!(d!=null&&d.connected)||!A())return;const t=ii();if(t.length!==0){ur=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!A())return;await Gs(e),Jd(e.local_upload_id)}}catch(e){h("roster-data-pending-error",`Pending roster upload retry failed: ${k(e)}`,{ttlMs:m})}finally{ur=!1}}}async function Gs(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const e=await w("guildsync:sending-roster-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const n=await Rc(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return h("roster-data-sent",e.message||"Roster data sent to GuildSync backend.",{ttlMs:m}),e}async function Xd(t={}){var e,n;if(!!A()){if(!(d!=null&&d.connected)){h("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}try{const r=await wc(t);if(!(r!=null&&r.ok)){h("applications-data-info",(r==null?void 0:r.message)||"No application records were found to process.",{ttlMs:m});return}if((Array.isArray((e=r==null?void 0:r.data)==null?void 0:e.records)?r.data.records:[]).length===0){h("applications-data-info",`No application records were found in ${r.fileName||"GuildSyncApplications.lua"}. Nothing was uploaded.`,{ttlMs:m});return}const o={local_upload_id:Us(),authenticated_username:ee(),authenticated_discord_user_id:((n=p==null?void 0:p.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await Vs(o)}catch(s){throw Zd(o),s}}catch(r){h("applications-data-error",k(r),{ttlMs:m})}}}function Us(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function oi(){try{const t=window.localStorage.getItem(Po),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function Hs(t){window.localStorage.setItem(Po,JSON.stringify(Array.isArray(t)?t:[]))}function Zd(t){const e=String((t==null?void 0:t.local_upload_id)||Us()),n=oi().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),Hs(n),h("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function eu(t){const e=oi().filter(n=>(n==null?void 0:n.local_upload_id)!==t);Hs(e)}async function tu(){if(fr||!(d!=null&&d.connected)||!A())return;const t=oi();if(t.length!==0){fr=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!A())return;await Vs(e),eu(e.local_upload_id)}}catch(e){h("applications-data-pending-error",`Pending application upload retry failed: ${k(e)}`,{ttlMs:m})}finally{fr=!1}}}async function Vs(t){var i;if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const e=Array.isArray((i=t==null?void 0:t.data)==null?void 0:i.records)?t.data.records:[];if(e.length===0)return h("applications-data-info","No application records were found to process. Nothing was uploaded.",{ttlMs:m}),{ok:!0,sent_count:0,skipped_empty:!0};let n=0;for(const o of e){const s=await w("guildsync:eso-guild-application-message",{...t,record:o,recordKey:(o==null?void 0:o.recordKey)||"",message:nu(o)},3e4);if(!(s!=null&&s.ok))throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"Backend rejected the application data payload. Application data was not cleared.");n+=1}const r=await Lc(t.file_path||"",t.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return h("applications-data-sent",`Sent ${n} application record${n===1?"":"s"} to GuildSync backend.`,{ttlMs:m}),{ok:!0,sent_count:n}}function nu(t={}){const e=Number(t.capturedAt||Math.floor(Date.now()/1e3)),n=String(t.officerAccount||"Unknown officer").trim()||"Unknown officer",r=String(t.action||"processed").trim()||"processed",i=String(t.applicantAccount||t.recordKey||"Unknown applicant").trim()||"Unknown applicant",o=String(t.applicationText||"_No application text captured._"),s=Object.entries(t).filter(([a])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(a)).map(([a,u])=>`**${a}:** ${ru(u)}`);return[`\u{1F4DD} <t:${e}:F>`,`**${n}** ${r} an application from **${i}**.`,"","**Application text:**","```",o.slice(0,1500),"```",s.length>0?"":null,s.length>0?"**Full captured record fields:**":null,...s].filter(a=>a!==null).join(`
`)}function ru(t){if(t==null)return"";if(typeof t=="object")try{return`\`${JSON.stringify(t).slice(0,900)}\``}catch{return String(t)}return String(t).slice(0,900)}async function iu(t={}){await Xd(t)}function ou(){const t=Fr(M),e=xu(t,M),n=M!=="other";return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <button id="openBankingHistoryButton" class="refresh-discord-button banking-history-button" type="button" ${A()?"":'disabled title="Login required to lookup banking history."'}>
            <span aria-hidden="true">\u2315</span>
            <span>Lookup Banking History</span>
          </button>
          <button id="openManualBiweeklyTicketButton" class="bank-export-button" type="button" ${A()?"":'disabled title="Login required to add manual entries."'}>
            <span aria-hidden="true">\uFF0B</span>
            <span>Add Manual Entry</span>
          </button>
          ${hu()}
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${c(la(Wo))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${Fe||!A()?"disabled":""} ${A()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Fe?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${gr("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${gr("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${gr("other","?","Other","All other deposits")}
        </div>

        ${fu(M)}

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
              ${t.length>0?t.map(r=>Pu(r,n)).join(""):Gu(n)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${c(yt(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${M==="monthly"?`<div>Raffle Pot: <strong>${c(yt(Math.floor(e.amount/2)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${M==="biweekly"?`<div>Raffle Pot: <strong>${c(yt(Xs(e.amount)))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>`:""}
          ${M==="biweekly"?`<div>Draws: <strong>${c(String(Fu(e.amount)))}</strong></div>`:""}
          ${n?`<div>Total Tickets Awarded: <strong>${c(pn(e.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${Xe?lu(Fr(ot)):""}
    </div>
  `}function su(){return`
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
            <input id="bankingHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" autocomplete="off" placeholder="Start typing part of an account name..." value="${f(nt)}" />
          </label>
          ${au()}
        </div>

        ${se?`<div class="discord-data-error">${c(se)}</div>`:""}

        <div class="banking-history-results">
          <div class="roster-history-section-title">Banking History${ie?`: ${c(ie)}`:""}${ie?`<span class="banking-history-count">${c(String(re.length))} record${re.length===1?"":"s"} found</span>`:""}</div>
          ${cu()}
        </div>
      </div>
    </div>
  `}function au(){return nt.trim()?oe&&I.length===0&&!ie?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">Searching...</div></div>':I.length===0&&!ie?'<div class="banking-history-autocomplete"><div class="banking-history-autocomplete-empty">No matching banking names found.</div></div>':I.length===0?"":`
    <div class="banking-history-autocomplete" role="listbox" aria-label="Banking history matches">
      ${I.map((t,e)=>`
        <button class="banking-history-autocomplete-option${e===Q?" is-selected":""}" type="button" data-banking-history-account="${f(t.account_name)}">
          <span>${c(t.account_name)}</span>
          <small>${c(String(Number(t.record_count||t.recordCount||0)||0))} record${Number(t.record_count||t.recordCount||0)===1?"":"s"}</small>
        </button>
      `).join("")}
    </div>
  `:""}function cu(){return ie?oe&&re.length===0?'<div class="roster-history-muted">Loading banking history...</div>':re.length===0?'<div class="roster-history-muted">No banking history found for this account.</div>':`
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
          ${re.map(t=>{var e,n,r,i,o,s,a;return`
            <tr>
              <td>${c(Ru((r=(n=(e=t.event_timestamp)!=null?e:t.eventTimestamp)!=null?n:t.time)!=null?r:""))}</td>
              <td>${c($u(t.transaction_type||t.type||""))}</td>
              <td>${c(Du((o=(i=t.deposit_amount)!=null?i:t.depositAmount)!=null?o:t.amount))}</td>
              <td>${c(Mu((a=(s=t.ticket_quantity)!=null?s:t.ticketQuantity)!=null?a:t.ticketAmount))}</td>
              <td class="banking-history-note-cell">${c(t.note||"")}</td>
            </tr>
          `}).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see banking history.</div>'}function lu(t){return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${c(ae(ot))} Deposits</h3>
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
              ${t.length>0?t.map(e=>du(e)).join(""):uu()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${c(Ks(t))}</textarea>
      </div>
    </div>
  `}function du(t){return`
    <tr>
      <td>${c(t.displayName||"")}</td>
      <td>${c(String(li(t,ot)))}</td>
      <td>${c(String(Number(t.ticketAmount)||0))}</td>
      <td>${c(t.note||"")}</td>
    </tr>
  `}function uu(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${c(ae(ot))}.</td>
    </tr>
  `}function fu(t){if(t==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const e=Ys(t),n=Gn(t),r=n<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${f(ae(t))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${c(ae(t))} Raffle Period ${n===0?"(Current)":`(${Math.abs(n)} period${Math.abs(n)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${c(Rn(e.salesStart))} through ${c(Rn(e.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${c(Rn(e.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${r?"":"disabled"} aria-label="Next ${f(ae(t))} raffle period">\u203A</button>
    </div>
  `}function gr(t,e,n,r){const i=M===t;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${f(t)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${c(e)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${c(n)}</span>
        <span class="bank-section-subtitle">${c(r)}</span>
      </span>
    </button>
  `}function hu(){if(!A())return"";const t=Zn(),e=mn(),n=Ws(),r=t>0,i=e>0,o=n>0;if(!r&&!i&&!o)return"";let s="",a="",u=!1;r?(s=`Check Out ${t} Deposit Mail`,a="checkout"):i?(u=!0,lt?s=`Writing ${e} Pending Mail`:P.running?s=`${e} Mail Waiting for ESO Closure`:(ra("render-pending-mail-button"),s=`${e} Mail Writing to Disk`)):(u=!0,s=`${n} Mail Ready to Send`);const g=r?"Check out new deposit mail. GuildSync will immediately try to write it, or hold it until ESO closes.":i?"Deposit mail is already checked out and will be written automatically after ESO closes.":"Deposit mail has been written to ESO SavedVariables and is ready for ESO to send it and write acknowledgements.",S=Ar||lt,y=P.running?"ESO Running":"ESO Not Running",b=P.running?"eso-running":"eso-not-running";return`
    <button id="checkoutDepositMailButton" class="${`bank-export-button deposit-mail-button${u?" deposit-mail-status-only":""}`}" type="button" data-deposit-mail-action="${f(a)}" ${u||S?'aria-disabled="true"':""} title="${f(P.message||g)}" aria-label="${f(`${s}. ${g}`)}">
      <span aria-hidden="true">\u{1F4EC}</span>
      <span>${c(s)}</span>
      <span aria-hidden="true">(</span><span class="deposit-mail-eso-status ${b}" aria-hidden="true">${c(y)}</span><span aria-hidden="true">)</span>
    </button>
  `}function mn(){return gn().reduce((t,e)=>t+Pt(e.records).length,0)}function mu(){const t=(p==null?void 0:p.user)||{};return new Set([ee(),t.display_name,t.global_name,t.username,t.discord_user_id,t.id].map(e=>String(e||"").trim().toLowerCase()).filter(Boolean))}function pu(t){const e=String((t==null?void 0:t.checkedOutBy)||(t==null?void 0:t.checked_out_by)||"").trim().toLowerCase();return e?mu().has(e):!1}function Ws(){return A()?U.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="written_to_eso"&&pu(t)}).length:0}function Zn(){return U.filter(t=>{const e=String((t==null?void 0:t.type)||"").toLowerCase(),n=String((t==null?void 0:t.mailStatus)||"").toLowerCase();return(e==="biweekly"||e==="monthly")&&n==="unsent"}).length}function gu(t){const e=String(t||"").trim();return U.find(n=>String(n.eventId||"").trim()===e)||null}function si(t){const e=String(t||"other").toLowerCase(),n=["biweekly","monthly","other"],r=n.includes(e)?e:"other",i=n.filter(o=>o!==r);return[i[0]||"biweekly",r,i[1]||"other"]}function ai(t={},e="other"){const n=String(e||"other").toLowerCase(),r=Number(t==null?void 0:t.amount)||0;return n===String((t==null?void 0:t.type)||"").toLowerCase()?Number(t==null?void 0:t.ticketAmount)||0:n==="biweekly"?Math.floor(r/500):n==="monthly"?Math.floor(r/2500):0}function js(t={},e="other",n=""){const r=String(t.type||"other").toLowerCase(),i=ae(r),o=ae(e),s=ee()||"Unknown user",a=[`Moved from ${i} to ${o} by ${s}.`,`Ref ${t.eventId||""}`],u=String(n||"").trim();return u&&a.push(`Reason: ${u}`),a.join(`
`)}function yu(t){const e=gu(t);if(!e){h("banking-move-missing","Could not find the selected banking entry.",{ttlMs:m});return}const n=String(e.type||"other").toLowerCase();ue=e,T={targetType:n,note:"",tickets:String(ai(e,n))},de="",At=!1,qt=!0,l()}function Pn(){qt=!1,At=!1,de="",ue=null,T={targetType:"other",note:"",tickets:""},l()}function bu(){const t=ue||{},e=String(t.type||"other").toLowerCase(),n=ae(e),r=si(e);let i=String(T.targetType||r[0]||"other").toLowerCase();r.includes(i)||(i=r[0]||"other",T.targetType=i);const o=js(t,i,T.note);return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="bankingMoveDialogTitle">
      <div class="roster-history-dialog manual-ticket-dialog banking-move-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="bankingMoveDialogTitle">Move Banking Entry</h3>
            <p>Move this deposit to a different banking section while preserving a reference to the original event.</p>
          </div>
          <button id="closeBankingMoveDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${de?`<div class="discord-data-error">${c(de)}</div>`:""}

        <div class="manual-ticket-form banking-move-form">
          <div class="banking-move-current-entry">
            <div><strong>Current Type:</strong> ${c(n)}</div>
            <div><strong>Event ID:</strong> ${c(t.eventId||"")}</div>
            <div><strong>Depositor:</strong> ${c(t.displayName||"")}</div>
            <div><strong>Amount:</strong> ${c(yt(t.amount))} \u{1FA99}</div>
          </div>

          <div class="banking-move-target-row banking-move-slider-row">
            <span>Move To</span>
            <div class="banking-move-slider-control" role="radiogroup" aria-label="Move banking entry destination">
              <div class="banking-move-slider-labels">
                ${r.map(s=>`
                  <button
                    class="banking-move-slider-label ${i===s?"selected":""} ${s===e?"current":""}"
                    type="button"
                    role="radio"
                    aria-checked="${i===s?"true":"false"}"
                    data-banking-move-target="${f(s)}"
                  >
                    <strong>${c(ae(s))}</strong>
                    <span>${s===e?"Current / restore original values":`${c(String(ai(t,s)))} tickets`}</span>
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

          <div class="roster-history-muted banking-move-generated-note">${c(o).replace(/\n/g,"<br>")}</div>

          <div class="manual-ticket-actions banking-move-actions">
            <button id="saveBankingMoveButton" class="refresh-discord-button banking-move-submit-button" type="button" ${At||i===e?"disabled":""}>${At?"MOVING...":i===e?"SELECT A SIDE TO MOVE":"MOVE"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function ku(){var n,r,i,o;if(!qt)return;(n=document.querySelector("#closeBankingMoveDialogButton"))==null||n.addEventListener("click",()=>Pn());function t(s){const a=String(s||"other").toLowerCase(),u=String((ue==null?void 0:ue.type)||"other").toLowerCase(),g=si(u);T.targetType=g.includes(a)?a:u,T.tickets=String(ai(ue||{},T.targetType)),l()}document.querySelectorAll("[data-banking-move-target]").forEach(s=>{s.addEventListener("click",()=>t(s.dataset.bankingMoveTarget))}),(r=document.querySelector("#bankingMoveTicketsInput"))==null||r.addEventListener("input",s=>{const a=String(s.target.value||"").replace(/\D/g,"");s.target.value!==a&&(s.target.value=a),T.tickets=a}),(i=document.querySelector("#bankingMoveNoteInput"))==null||i.addEventListener("input",s=>{T.note=s.target.value||"";const a=document.querySelector(".banking-move-generated-note");a&&(a.innerText=js(ue||{},T.targetType||"other",T.note))}),(o=document.querySelector("#saveBankingMoveButton"))==null||o.addEventListener("click",()=>vu());const e=document.querySelector(".roster-history-overlay");e&&e.addEventListener("click",s=>{s.target===e&&Pn()})}async function vu(){const t=ue;if(!(t!=null&&t.eventId)){de="No banking entry is selected.",l();return}const e=String(t.type||"other").toLowerCase(),n=si(e),r=String(T.targetType||n[0]||"other").toLowerCase();if(!n.includes(r)||r===e){de="Select one of the side destinations before moving this entry.",l();return}const i=r==="other"?0:Math.floor(Number(String(T.tickets||"").trim()||0));if(!Number.isFinite(i)||i<0){de="Tickets must be zero or greater.",l();return}At=!0,de="",l();try{const o=await w("guildsync:move-banking-entry",{event_id:t.eventId,target_type:r,tickets:i,note:T.note||""},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Failed to move banking entry.");Pn(),await be({silent:!0}),h("banking-entry-moved",o.message||"Banking entry moved.",{ttlMs:m})}catch(o){At=!1,de=k(o),l()}}function Su(){if(!A()){h("banking-history-login-required","Login required to lookup banking history.",{ttlMs:m});return}xt=!0,nt="",I=[],re=[],ie="",oe=!1,se="",Q=-1,clearTimeout(pt),l(),$("bankingHistorySearchInput")}function wu(){xt=!1,oe=!1,se="",clearTimeout(pt)}function _u(){if(!xt)return;const t=document.querySelector("#bankingHistorySearchInput");t&&(t.addEventListener("input",e=>{if(nt=e.target.value||"",Q=-1,ie="",re=[],!nt.trim()){clearTimeout(pt),se="",I=[],oe=!1,l(),$("bankingHistorySearchInput");return}clearTimeout(pt),pt=setTimeout(()=>{Au({keepFocus:!0})},250)}),t.addEventListener("keydown",e=>{if(e.key==="ArrowDown"||e.key==="ArrowUp"){if(I.length===0)return;e.preventDefault();const r=e.key==="ArrowDown"?1:-1;Q=((Q<0?0:Q)+r+I.length)%I.length,l(),$("bankingHistorySearchInput");return}if(e.key!=="Enter")return;e.preventDefault();const n=I[Q>=0?Q:0];n!=null&&n.account_name&&fo(n.account_name)})),document.querySelectorAll("[data-banking-history-account]").forEach(e=>{e.addEventListener("click",()=>{fo(e.dataset.bankingHistoryAccount||"")})})}async function Au(t={}){const e=nt.trim();if(!e){se="",I=[],Q=-1,ie="",re=[],oe=!1,l(),t.keepFocus&&$("bankingHistorySearchInput");return}oe=!0,se="",I=[],Q=-1,l(),t.keepFocus&&$("bankingHistorySearchInput");try{const n=await w("guildsync:request-banking-history-matches",{query:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to search banking history.");I=Lu(n.matches),Q=I.length>0?0:-1}catch(n){se=k(n)}finally{oe=!1,l(),t.keepFocus&&$("bankingHistorySearchInput")}}async function fo(t){const e=String(t||"").trim();if(!!e){clearTimeout(pt),ie=e,nt=e,I=[],re=[],oe=!0,se="",l();try{const n=await w("guildsync:request-banking-history-records",{account_name:e},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load banking history.");re=Eu(n.records)}catch(n){se=k(n)}finally{oe=!1,l()}}}function Lu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,o;return{account_name:String(e.account_name||e.accountName||"").trim(),record_count:Number((r=(n=e.record_count)!=null?n:e.recordCount)!=null?r:0)||0,last_event_timestamp:(o=(i=e.last_event_timestamp)!=null?i:e.lastEventTimestamp)!=null?o:""}}).filter(e=>e.account_name):[]}function Eu(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map(e=>{var n,r,i,o,s,a,u,g,S;return{event_id:String(e.event_id||e.eventId||"").trim(),transaction_type:String(e.transaction_type||e.transactionType||e.type||"").trim(),event_timestamp:(i=(r=(n=e.event_timestamp)!=null?n:e.eventTimestamp)!=null?r:e.time)!=null?i:"",deposit_amount:(a=(s=(o=e.deposit_amount)!=null?o:e.depositAmount)!=null?s:e.amount)!=null?a:"",ticket_quantity:(S=(g=(u=e.ticket_quantity)!=null?u:e.ticketQuantity)!=null?g:e.ticketAmount)!=null?S:"",note:String(e.note||"").trim()}}).sort((e,n)=>{const r=Number(e.event_timestamp)||0,i=Number(n.event_timestamp)||0;return r!==i?r-i:String(e.event_id).localeCompare(String(n.event_id),void 0,{numeric:!0})}):[]}function Ru(t){const e=Number(t);if(!e)return"";const n=new Date(e*1e3);if(Number.isNaN(n.getTime()))return String(t);const r=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0"),o=String(n.getFullYear()),s=String(n.getHours()).padStart(2,"0"),a=String(n.getMinutes()).padStart(2,"0"),u=String(n.getSeconds()).padStart(2,"0");return`${r}/${i}/${o} ${s}:${a}:${u}`}function $u(t){const e=String(t||"").trim().toLowerCase();return e==="monthly"?"50/50":e==="biweekly"?"Bi-Weekly":e==="other"?"Other":e?e.replace(/\b\w/g,n=>n.toUpperCase()):""}function Du(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":yt(e)}function Mu(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"":pn(e)}function zs(){if(R!=="more")return;ku(),_u(),document.querySelectorAll("[data-bank-entry-move]").forEach(a=>{a.addEventListener("click",()=>yu(a.dataset.bankEntryMove||""))}),document.querySelectorAll("[data-bank-section]").forEach(a=>{a.addEventListener("click",()=>{M=a.dataset.bankSection||"biweekly",l()})}),document.querySelectorAll("[data-bank-export-section]").forEach(a=>{a.addEventListener("click",()=>{ot=(a.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",Xe=!0,l()})}),document.querySelectorAll("[data-bank-period-move]").forEach(a=>{a.addEventListener("click",()=>{Cu(a.dataset.bankPeriodMove||""),l()})});const t=document.querySelector("#closeBankingExportGridButton");t&&t.addEventListener("click",()=>{Xe=!1,l()});const e=document.querySelector("#copyBankingExportGridButton");e&&e.addEventListener("click",()=>Nu());const n=document.querySelector(".bank-export-overlay");n&&n.addEventListener("click",a=>{a.target===n&&(Xe=!1,l())});const r=document.querySelector("#openBankingHistoryButton");r&&r.addEventListener("click",()=>Su());const i=document.querySelector("#openManualBiweeklyTicketButton");i&&i.addEventListener("click",async()=>{if(!A()){h("manual-ticket-login-required","Login required to add manual entries.",{ttlMs:m});return}ge=!0,H="",Ft=E.accountName||"",X=!1,B=-1,z.length===0&&(d==null?void 0:d.connected)&&A()&&await hn({silent:!0}),l()});const o=document.querySelector("#checkoutDepositMailButton");o&&o.addEventListener("click",()=>{o.dataset.depositMailAction==="checkout"&&o.getAttribute("aria-disabled")!=="true"&&Yu()});const s=document.querySelector("#refreshBankingDataButton");s&&s.addEventListener("click",()=>{if(!A()){h("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:m});return}ea({key:"banking"})})}function Ks(t){const e=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const n of t)e.push([n.displayName||"",String(li(n,ot)),String(Number(n.ticketAmount)||0),n.note||""]);return e.map(n=>n.map(er).join("	")).join(`
`)}function er(t){return String(t!=null?t:"").replace(/[\t\r\n]+/g," ").trim()}async function tr(t){var i;const e=String(t!=null?t:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly","readonly"),n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.width="1px",n.style.height="1px",n.style.opacity="0",n.style.pointerEvents="none",n.style.zIndex="-1",document.body.appendChild(n),n.focus(),n.select(),n.setSelectionRange(0,n.value.length);let r=!1;try{r=document.execCommand("copy")}finally{document.body.removeChild(n)}return r}async function Nu(){const t=Fr(ot),e=Ks(t);if(await tr(e)){h("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:m});return}const r=document.querySelector("#bankingExportTsv");r&&(r.focus(),r.select()),h("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:m})}function Fr(t){return U.filter(e=>e.type===t).filter(e=>Tu(t,e)).sort((e,n)=>(Number(n.time)||0)-(Number(e.time)||0))}function Tu(t,e){if(t==="other")return!0;const n=Number(e==null?void 0:e.time)||0;if(n<=0)return!1;const r=Ys(t);return n>=r.salesStart&&n<=r.salesEnd}function Gn(t){return Number(Dr[t])||0}function Cu(t){if(M!=="biweekly"&&M!=="monthly")return;const e=Gn(M);if(t==="previous"){Dr[M]=e-1;return}t==="next"&&e<0&&(Dr[M]=e+1)}function Ys(t){const e=Math.floor(Date.now()/1e3);if(t==="monthly"){const i=Bu(e,Gn(t));return{salesStart:Qs(i)+1,salesEnd:i,raffleTime:i+On}}const n=Pe;let r=Js(e);return r+=Gn(t)*n,{salesStart:r-n+1,salesEnd:r,raffleTime:r+On}}function Js(t){const e=Pe;let n=Yc;for(;n-e>t;)n-=e;for(;n<t;)n+=e;return n}function Bu(t,e=0){let n=Iu(t),r=Number(e)||0;for(;r<0;)n=Qs(n),r+=1;for(;r>0;)n=Ou(n),r-=1;return n}function Iu(t){let e=Js(t);for(;!ci(e);)e+=Pe;return e}function Qs(t){let e=t-Pe;for(;!ci(e);)e-=Pe;return e}function Ou(t){let e=t+Pe;for(;!ci(e);)e+=Pe;return e}function ci(t){const e=t+On,n=t+Pe+On;return ho(e)!==ho(n)}function ho(t){var o,s;const e=new Date(Number(t||0)*1e3);if(Number.isNaN(e.getTime()))return"";const n=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit"}).formatToParts(e),r=((o=n.find(a=>a.type==="year"))==null?void 0:o.value)||"",i=((s=n.find(a=>a.type==="month"))==null?void 0:s.value)||"";return`${r}-${i}`}function qu(t=M){const e=String(t||"").toLowerCase();return e!=="monthly"&&e!=="biweekly"?0:"auto"}function li(t={},e=M){const n=Number(t.amount)||0;if(!qu(e))return n;const r=Math.abs(Math.trunc(n))%10,i=r===1||r===3?r:0;return i>0&&n>i?n-i:n}function xu(t,e=M){return t.reduce((n,r)=>(n.amount+=li(r,e),n.tickets+=Number(r.ticketAmount)||0,n),{amount:0,tickets:0})}function Xs(t){const e=Math.ceil((Number(t)||0)/2);return e<=0?0:Math.ceil(e/2e5)*2e5}function Fu(t){const e=Xs(t);return e>0?e/2e5:0}function Pu(t,e=!0){return`
    <tr>
      <td>${c(t.note||t.eventId||"")}</td>
      <td>${c(Rn(t.time))}</td>
      <td>${c(t.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${c(yt(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${e?`<td><strong class="bank-ticket-amount">${c(pn(t.ticketAmount))}</strong></td>`:""}
      <td><button class="bank-entry-move-button" type="button" data-bank-entry-move="${f(t.eventId||"")}">Move</button></td>
    </tr>
  `}function Gu(t=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${t?"6":"5"}">No ${c(ae(M))} deposits found for this ${M==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function ae(t){return t==="biweekly"?"Bi-Weekly":t==="monthly"?"50/50":"Other"}function Rn(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"Unknown":new Date(e*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function yt(t){return(Number(t)||0).toLocaleString()}function pn(t){return(Number(t)||0).toLocaleString()}function Pt(t){return Array.isArray(t)?t.map(e=>{var r,i,o,s,a,u,g,S,y,b,x,ke,Gt,st,ki,vi,Si,wi,_i,Ai,Li,Ei,Ri,$i,Di,Mi,Ni,Ti,Ci,Bi,Ii,Oi,qi,xi,Fi,Pi,Gi,Ui,Hi,Vi,Wi;const n=String((e==null?void 0:e.type)||"other").trim().toLowerCase();return{type:n==="monthly"||n==="biweekly"||n==="other"?n:"other",eventId:String((i=(r=e==null?void 0:e.eventId)!=null?r:e==null?void 0:e.event_id)!=null?i:"").trim(),time:Number((s=(o=e==null?void 0:e.time)!=null?o:e==null?void 0:e.timestamp)!=null?s:0)||0,displayName:String((u=(a=e==null?void 0:e.displayName)!=null?a:e==null?void 0:e.display_name)!=null?u:"").trim(),amount:Number((g=e==null?void 0:e.amount)!=null?g:0)||0,ticketAmount:Number((y=(S=e==null?void 0:e.ticketAmount)!=null?S:e==null?void 0:e.ticket_amount)!=null?y:0)||0,note:String((b=e==null?void 0:e.note)!=null?b:"").trim(),dataSource:String((ke=(x=e==null?void 0:e.dataSource)!=null?x:e==null?void 0:e.data_source)!=null?ke:"").trim(),emailRequested:Boolean((Gt=e==null?void 0:e.emailRequested)!=null?Gt:e==null?void 0:e.email_requested),mailStatus:String((ki=(st=e==null?void 0:e.mailStatus)!=null?st:e==null?void 0:e.mail_status)!=null?ki:"").trim(),mailRequestId:String((Si=(vi=e==null?void 0:e.mailRequestId)!=null?vi:e==null?void 0:e.mail_request_id)!=null?Si:"").trim(),mailBatchId:String((_i=(wi=e==null?void 0:e.mailBatchId)!=null?wi:e==null?void 0:e.mail_batch_id)!=null?_i:"").trim(),checkedOutBy:String((Li=(Ai=e==null?void 0:e.checkedOutBy)!=null?Ai:e==null?void 0:e.checked_out_by)!=null?Li:"").trim(),checkedOutAt:String((Ri=(Ei=e==null?void 0:e.checkedOutAt)!=null?Ei:e==null?void 0:e.checked_out_at)!=null?Ri:"").trim(),checkoutExpiresAt:String((Di=($i=e==null?void 0:e.checkoutExpiresAt)!=null?$i:e==null?void 0:e.checkout_expires_at)!=null?Di:"").trim(),writtenToEsoAt:String((Ni=(Mi=e==null?void 0:e.writtenToEsoAt)!=null?Mi:e==null?void 0:e.written_to_eso_at)!=null?Ni:"").trim(),sentAt:String((Ci=(Ti=e==null?void 0:e.sentAt)!=null?Ti:e==null?void 0:e.sent_at)!=null?Ci:"").trim(),failedReason:String((Ii=(Bi=e==null?void 0:e.failedReason)!=null?Bi:e==null?void 0:e.failed_reason)!=null?Ii:"").trim(),recipient:String((Fi=(xi=(qi=(Oi=e==null?void 0:e.recipient)!=null?Oi:e==null?void 0:e.account_name)!=null?qi:e==null?void 0:e.displayName)!=null?xi:e==null?void 0:e.display_name)!=null?Fi:"").trim(),subject:String((Ui=(Gi=(Pi=e==null?void 0:e.subject)!=null?Pi:e==null?void 0:e.mailSubject)!=null?Gi:e==null?void 0:e.mail_subject)!=null?Ui:"").trim(),body:String((Wi=(Vi=(Hi=e==null?void 0:e.body)!=null?Hi:e==null?void 0:e.mailBody)!=null?Vi:e==null?void 0:e.mail_body)!=null?Wi:"").trim()}}):[]}function Uu(t){const e=new Map;for(const n of U)n.eventId&&e.set(n.eventId,n);for(const n of t)!n.eventId||e.set(n.eventId,n);U=Array.from(e.values()).sort((n,r)=>(Number(r.time)||0)-(Number(n.time)||0))}function Zs(){Wo=new Date().toISOString()}async function Hu(t={}){!(t!=null&&t.ok)||(U=Pt(t.entries),Zs(),R==="more"&&l(),h("banking-data-updated",`Banking data updated. Loaded ${U.length} deposit record${U.length===1?"":"s"}.`,{ttlMs:m}))}async function be(t={}){const e=Boolean(t.silent),n=Boolean(t.background);if(!(d!=null&&d.connected)){e||h("banking-data-error","GuildSync websocket is not connected.",{ttlMs:m});return}n||(Fe=!0,l());try{const r=await w("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");U=Pt(r.entries),Zs(),e||h("banking-data",`Loaded ${U.length} banking deposit record${U.length===1?"":"s"}.`,{ttlMs:m})}catch(r){e||h("banking-data-error",k(r),{ttlMs:m})}finally{n||(Fe=!1),l()}}async function mo(){!(d!=null&&d.connected)||!A()||Fe||(await be({silent:!0,background:!0}),Zn()<=0&&mn()>0&&(P.running?l():ra("availability-refresh")))}function Vu(){ct&&clearInterval(ct),mo(),ct=window.setInterval(mo,Wc)}function Wu(){ct&&(clearInterval(ct),ct=null)}async function ju(t={}){if(!!A()){if(!(d!=null&&d.connected)){h("deposit-mail-ack-pending","Deposit mail acknowledgements were found, but GuildSync websocket is not connected yet.",{ttlMs:m});return}try{const e=await Sc(t);if(!(e!=null&&e.ok))return;const n=Array.isArray(e.ackEntries)?e.ackEntries:[];if(n.length===0)return;const r=await w("guildsync:mark-deposit-mail-sent",{mail_ack:n,mail_request_ids:n.map(s=>(s==null?void 0:s.mail_request_id)||(s==null?void 0:s.mailRequestId)).filter(Boolean),source:"guildsync-frontend-client",file_name:e.fileName||t.fileName||"",file_path:e.filePath||t.filePath||""},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend rejected the deposit mail acknowledgements.");const i=Array.isArray(r.mail_request_ids)?r.mail_request_ids:Array.isArray(r.mailRequestIds)?r.mailRequestIds:[];if(i.length===0){h("deposit-mail-ack-none",r.message||"No matching deposit mail acknowledgements were confirmed by the backend.",{ttlMs:m});return}const o=await kc(i);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||"Backend confirmed sent mail, but local mailAck cleanup failed.");h("deposit-mail-ack-sent",o.message||`Confirmed ${i.length} deposit mail acknowledgement(s).`,{ttlMs:m}),await be({silent:!0})}catch(e){h("deposit-mail-ack-error",k(e),{ttlMs:m})}}}async function zu(){if(!hr){hr=!0;try{const t=await $c();(t==null?void 0:t.ok)&&Number(t.removedCount||0)>0&&h("deposit-mail-ack-cleanup-flushed",t.message||"Cleaned up pending deposit mail acknowledgements.",{ttlMs:m})}catch(t){h("deposit-mail-ack-cleanup-error",k(t),{ttlMs:m})}finally{hr=!1}}}async function ea(t={}){var e,n;if(!!A()){if(!(d!=null&&d.connected)){h("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:m});return}Fe=!0,l();try{const r=await _c(t);if(!(r!=null&&r.ok)){h("banking-data-pending",(r==null?void 0:r.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:m});return}const i=Pt((e=r==null?void 0:r.data)==null?void 0:e.entries);Uu(i);const o=new Date().toISOString(),s={local_upload_id:ia(),authenticated_username:ee(),authenticated_discord_user_id:((n=p==null?void 0:p.user)==null?void 0:n.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||t.fileName||"",file_path:r.filePath||t.filePath||"",collected_at:o,data:r.data||{}};try{await sa(s)}catch(a){throw Xu(s),a}await be({silent:!0})}catch(r){h("banking-data-error",k(r),{ttlMs:m})}finally{Fe=!1,l()}}}function ta(){return`deposit-mail-${Date.now()}-${Math.random().toString(16).slice(2)}`}function gn(){try{const t=window.localStorage.getItem(xo),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function na(t){window.localStorage.setItem(xo,JSON.stringify(Array.isArray(t)?t:[]))}function Ku(t){const e=String((t==null?void 0:t.mail_batch_id)||(t==null?void 0:t.mailBatchId)||(t==null?void 0:t.local_batch_id)||ta()),n=gn().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);n.push({...t,local_batch_id:e,pending_saved_at:new Date().toISOString()}),na(n)}function po(t){const e=String(t||"").trim();if(!e)return;const n=gn().filter(r=>String((r==null?void 0:r.mail_batch_id)||(r==null?void 0:r.mailBatchId)||(r==null?void 0:r.local_batch_id)||"")!==e);na(n)}async function Yu(){if(!A()){h("deposit-mail-login-required","Login required to check out deposit mail.",{ttlMs:m});return}if(!(d!=null&&d.connected)){h("deposit-mail-socket-error","GuildSync websocket is not connected.",{ttlMs:m});return}const t=gn(),e=Zn();if(t.length>0&&e<=0){await Rt();return}Ar=!0,l();try{const n=await w("guildsync:checkout-deposit-mail",{source:"guildsync-frontend-client",max_records:100,checkout_minutes:60},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend rejected the deposit mail checkout request.");const r=Pt(n.records);if(r.length===0){h("deposit-mail-none",n.message||"No unsent deposit mail is available.",{ttlMs:m}),await be({silent:!0});return}const i={mail_batch_id:n.mail_batch_id||n.mailBatchId||ta(),checked_out_by:n.checked_out_by||n.checkedOutBy||ee(),checked_out_at:new Date().toISOString(),records:r};Ku(i),await Rt()}catch(n){h("deposit-mail-error",k(n),{ttlMs:m})}finally{Ar=!1,l()}}function ra(t=""){dt||lt||!A()||mn()<=0||P.running||(dt=window.setTimeout(()=>{dt=null,Rt()},100))}async function Rt(){if(dt&&(window.clearTimeout(dt),dt=null),lt||!A())return;const t=gn();if(t.length!==0){if(await Pr({silent:!0}),P.running){h("deposit-mail-waiting-eso",`${t.length} deposit mail batch${t.length===1?"":"es"} checked out. Close ESO to write them to SavedVariables.`,{ttlMs:m}),l();return}lt=!0,l();try{for(const e of t){const n=String((e==null?void 0:e.mail_batch_id)||(e==null?void 0:e.mailBatchId)||(e==null?void 0:e.local_batch_id)||"").trim(),r=Pt(e==null?void 0:e.records);if(r.length===0){po(n);continue}const i=await Pc(r);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||"Deposit mail could not be written to GuildSyncBanking.lua.");if(!(d!=null&&d.connected))throw new Error("Deposit mail was written locally, but GuildSync websocket is not connected to mark it written_to_eso.");const o=await w("guildsync:mark-deposit-mail-written-to-eso",{mail_batch_id:n,event_ids:i.eventIds||r.map(s=>s.eventId).filter(Boolean),source:"guildsync-frontend-client"},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||"Backend did not confirm deposit mail was marked written_to_eso.");po(n),h("deposit-mail-written",i.message||`Wrote ${r.length} deposit mail record(s) to GuildSyncBanking.lua.`,{ttlMs:m})}await be({silent:!0})}catch(e){h("deposit-mail-write-error",k(e),{ttlMs:m})}finally{lt=!1,l()}}}async function Pr(t={}){try{const e=Boolean(P.running),n=await Dc();P={running:Boolean(n==null?void 0:n.running),message:String((n==null?void 0:n.message)||"")},P.running||await zu(),e&&!P.running&&(h("eso-closed-deposit-mail-flush","ESO is no longer running. Processing pending deposit mail SavedVariables work now.",{ttlMs:m}),await Rt()),e!==P.running&&l()}catch(e){t.silent||h("eso-status-error",k(e),{ttlMs:m})}}function Ju(){at&&clearInterval(at),Pr({silent:!0}).then(()=>{!P.running&&mn()>0&&Rt()}),at=window.setInterval(()=>Pr({silent:!0}),Vc)}function Qu(){at&&(clearInterval(at),at=null)}function ia(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function di(){try{const t=window.localStorage.getItem(qo),e=t?JSON.parse(t):[];return Array.isArray(e)?e.filter(n=>n&&typeof n=="object"):[]}catch{return[]}}function oa(t){window.localStorage.setItem(qo,JSON.stringify(Array.isArray(t)?t:[]))}function Xu(t){const e=String((t==null?void 0:t.local_upload_id)||ia()),n=di().filter(r=>(r==null?void 0:r.local_upload_id)!==e);n.push({...t,local_upload_id:e,pending_saved_at:new Date().toISOString()}),oa(n),h("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:m})}function Zu(t){const e=di().filter(n=>(n==null?void 0:n.local_upload_id)!==t);oa(e)}async function ef(){if(dr||!(d!=null&&d.connected)||!A())return;const t=di();if(t.length!==0){dr=!0;try{for(const e of t){if(!(d!=null&&d.connected)||!A())return;await sa(e),Zu(e.local_upload_id)}}catch(e){h("banking-data-pending-error",`Pending banking upload retry failed: ${k(e)}`,{ttlMs:m})}finally{dr=!1}}}async function sa(t){if(!(d!=null&&d.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const e=await w("guildsync:sending-banking-data",t,3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const n=await Ec(t.file_path||"",t.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return h("banking-data-sent",e.message||"Banking data sent to GuildSync backend.",{ttlMs:m}),e}function aa(){if(R!=="discord-members")return;const t=document.querySelector("#refreshDiscordDataButton");t&&t.addEventListener("click",()=>tf());const e=document.querySelector("#openDiscordHistoryButton");e&&e.addEventListener("click",()=>{St=!0,pe="",l(),$("discordHistorySearchInput")});const n=document.querySelector("#discordMemberSearch");n&&n.addEventListener("input",s=>{Nn=s.target.value||"",Lr=s.target.selectionStart,Er=s.target.selectionEnd,l({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(s=>{s.addEventListener("click",()=>{af(s.dataset.discordSortColumn||"username")})});const r=document.querySelector("#discordRoleFilter");r&&r.addEventListener("change",s=>{const a=String(s.target.value||"").trim();a&&(ut.add(a),l())}),document.querySelectorAll("[data-remove-role-filter]").forEach(s=>{s.addEventListener("click",()=>{const a=s.dataset.removeRoleFilter||"";ut.delete(a),l()})});const i=document.querySelector("#discordLinkStatusFilter");i&&i.addEventListener("change",s=>{const a=String(s.target.value||"").trim();a&&(ft.add(a),l())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(s=>{s.addEventListener("click",()=>{const a=s.dataset.removeDiscordLinkStatusFilter||"";ft.delete(a),l()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(s=>{s.addEventListener("click",()=>Ss(s.dataset.openMemberLinkDialog||"",s.dataset.memberLinkValue||""))});const o=document.querySelector("#clearDiscordFiltersButton");o&&o.addEventListener("click",()=>{Nn="",ut.clear(),ft.clear(),l()})}async function tf(){var t,e;if(!(d!=null&&d.connected)){h("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:m});return}Mn=!0,l(),h("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const n=await w("guildsync:request-discord-data-refresh",{requested_by:((t=p==null?void 0:p.user)==null?void 0:t.display_name)||((e=p==null?void 0:p.user)==null?void 0:e.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to request Discord data refresh.");h("discord-refresh-requested",n.message||"Discord data refresh completed.",{ttlMs:m}),await ui({silent:!0})}catch(n){h("discord-refresh-error",k(n),{ttlMs:m})}finally{Mn=!1,l()}}async function nf(){if(!(d!=null&&d.connected))return;const t=await w("guildsync:request-discord-data-date",{});t!=null&&t.ok&&(zn=t.value||null)}async function rf(t={}){if(!!(t!=null&&t.ok)){G=fi(t.members),jn=hi(t.roles),t.last_refresh&&(zn=t.last_refresh);try{await nf()}catch{}R==="discord-members"&&l(),h("discord-data-updated",`Discord data updated. Loaded ${G.length} member record${G.length===1?"":"s"}.`,{ttlMs:m})}}async function ui(t={}){const e=Boolean(t.silent);if(!(d!=null&&d.connected)){h("discord-data-error","GuildSync websocket is not connected.",{ttlMs:m});return}Zt=!0,l();try{const[n,r]=await Promise.all([w("guildsync:request-discord-data-date",{}),w("guildsync:request-discord-member-dataJSON",{})]);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord refresh date.");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord member data.");zn=n.value||null,G=fi(r.members),jn=hi(r.roles),e||h("discord-data",`Loaded ${G.length} Discord member record${G.length===1?"":"s"}.`,{ttlMs:m})}catch(n){h("discord-data-error",k(n),{ttlMs:m})}finally{Zt=!1,l()}}function w(t,e={},n=3e4){return new Promise((r,i)=>{if(!(d!=null&&d.connected)){i(new Error("GuildSync websocket is not connected."));return}let o=!1;const s=window.setTimeout(()=>{o||(o=!0,i(new Error(`${t} timed out.`)))},n);d.emit(t,e,a=>{o||(o=!0,window.clearTimeout(s),r(a))})})}function fi(t){return Array.isArray(t)?t.map(e=>({discord_id:String((e==null?void 0:e.discord_id)||(e==null?void 0:e.id)||"").trim(),username:String((e==null?void 0:e.username)||"").trim(),global_name:String((e==null?void 0:e.global_name)||"").trim(),server_nickname:String((e==null?void 0:e.server_nickname)||"").trim(),last_seen:String((e==null?void 0:e.last_seen)||(e==null?void 0:e.lastSeen)||"").trim(),last_seen_action:String((e==null?void 0:e.last_seen_action)||(e==null?void 0:e.lastSeenAction)||"").trim(),avatar:String((e==null?void 0:e.avatar)||"").trim(),roles:Array.isArray(e==null?void 0:e.roles)?e.roles.map(ca).filter(Boolean):[]})).filter(e=>e.discord_id||e.username||e.global_name||e.server_nickname).sort((e,n)=>on(e).localeCompare(on(n),void 0,{sensitivity:"base"})):[]}function hi(t){if(!Array.isArray(t))return[];const e=new Map;for(const n of t){const r=ca(n);if(!r)continue;const i=r.role_id||Qt(r.role_name);i&&!e.has(i)&&e.set(i,r)}return Array.from(e.values()).sort((n,r)=>String(n.role_name||"").localeCompare(String(r.role_name||""),void 0,{sensitivity:"base"}))}function ca(t){var i,o;if(!t||typeof t!="object")return null;const e=String(t.role_id||t.id||"").trim(),n=String(t.role_name||t.name||"Unnamed Role").trim(),r=(o=(i=t.role_color)!=null?i:t.color)!=null?o:null;return{role_id:e,role_name:n||"Unnamed Role",role_color:r}}function of(){const t=Nn.trim().toLowerCase(),e=Array.from(ut),n=G.filter(r=>{if(t&&![r.username,r.global_name,r.server_nickname,r.discord_id,...r.roles.map(o=>o.role_name)].join(" ").toLowerCase().includes(t))return!1;if(e.length>0){const i=new Set(r.roles.map(o=>o.role_name));if(!e.every(o=>i.has(o)))return!1}return!!es(ft,_l(r))});return sf(n)}function sf(t){const e=We==="desc"?-1:1;return[...t].sort((n,r)=>{const i=go(n,en),o=go(r,en),s=i.localeCompare(o,void 0,{sensitivity:"base",numeric:!0});return s!==0?s*e:on(n).localeCompare(on(r),void 0,{sensitivity:"base",numeric:!0})})}function go(t,e){return e==="global_name"?t.global_name||"":e==="server_nickname"?t.server_nickname||"":e==="roles"?(t.roles||[]).map(n=>n.role_name||"").filter(Boolean).sort((n,r)=>n.localeCompare(r,void 0,{sensitivity:"base"})).join(" "):t.username||t.discord_id||""}function af(t){const n=new Set(["username","global_name","server_nickname","roles"]).has(t)?t:"username";en===n?We=We==="asc"?"desc":"asc":(en=n,We="asc"),l()}function vn(t,e){const n=en===t,r=We==="asc"?"ascending":"descending",i=n?We==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${n?r:"none"}">
      <button
        class="discord-sort-header${n?" active":""}"
        type="button"
        data-discord-sort-column="${f(t)}"
        title="Sort ${f(e)} ${n&&We==="asc"?"descending":"ascending"}"
      >
        <span>${c(e)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function cf(){const t=document.querySelector("#discordMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(Lr)?Lr:t.value.length,n=Number.isInteger(Er)?Er:e;t.setSelectionRange(e,n)}}function lf(){const t=document.querySelector("#rosterMemberSearch");if(!!t&&(t.focus({preventScroll:!0}),typeof t.setSelectionRange=="function")){const e=Number.isInteger(Rr)?Rr:t.value.length,n=Number.isInteger($r)?$r:e;t.setSelectionRange(e,n)}}function df(){const t=new Set;for(const e of G)for(const n of e.roles)n.role_name&&t.add(n.role_name);return Array.from(t).sort((e,n)=>e.localeCompare(n,void 0,{sensitivity:"base"}))}function uf(t){const e=yf(t),n=on(t),r=t.roles||[];return`
    <tr data-discord-user-id="${f(t.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${e?`<img src="${f(e)}" alt="${f(n)}" />`:`<span>${c(ba(n))}</span>`}
          </div>
          <span>${c(t.username||t.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${c(t.global_name||"")}</td>
      <td>${c(t.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${r.length>0?r.map(i=>hf(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${ks({mode:"discord-to-eso",discordUserId:t.discord_id})}</td>
    </tr>
  `}function ff(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${c(Zt?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function hf(t){const e=nr(t.role_color),n=gi(e),r=pi(e,n);return`
    <span
      class="discord-role-badge"
      title="${f(t.role_name)}"
      style="${r}"
    >${c(t.role_name)}</span>
  `}function mf(t){const e=mi(t),n=nr(e==null?void 0:e.role_color),r=gi(n),i=pi(n,r);return`
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
  `}function pf(t){const e=gf(t);for(const n of e){const r=mi(n);if(r)return r}return null}function gf(t){const e=String(t||"").trim();if(!e)return[];const n=Qt(e),i={associate:["Associates","Associate"],associates:["Associates","Associate"],soldier:["Soldiers","Soldier"],soldiers:["Soldiers","Soldier"],capo:["Capo"],capos:["Capo","Capos"],caporegime:["CapoRegime","Capo Regime","Capo Regimes"],consiglieres:["Consigliere","Consiglieres"],consigliere:["Consigliere","Consiglieres"]}[n]||[e];return Array.from(new Set([e,...i].filter(Boolean)))}function Qt(t){return String(t||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function mi(t){const e=Qt(t);if(!e)return null;const n=jn.find(r=>Qt(r.role_name)===e);if(n)return n;for(const r of G){const i=r.roles.find(o=>Qt(o.role_name)===e);if(i)return i}return null}function nr(t){const e=Number(t);return!Number.isFinite(e)||e<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(e))).toString(16).padStart(6,"0")}`}function pi(t,e){return[`--role-fill-top: ${yo(t,"#ffffff",.16)}`,`--role-fill-bottom: ${yo(t,"#000000",.1)}`,`--role-fill-glow: ${bo(t,.28)}`,`--role-fill-edge: ${bo(t,.46)}`,`color: ${e}`].join("; ")}function yo(t,e,n){const r=Sn(t)||Sn("#64748b"),i=Sn(e)||Sn("#ffffff"),o=Math.max(0,Math.min(1,Number(n)||0)),s=Math.round(r.red+(i.red-r.red)*o),a=Math.round(r.green+(i.green-r.green)*o),u=Math.round(r.blue+(i.blue-r.blue)*o);return`#${yr(s)}${yr(a)}${yr(u)}`}function Sn(t){const e=String(t||"").replace("#","");return/^[0-9a-f]{6}$/i.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:null}function yr(t){return Math.max(0,Math.min(255,t)).toString(16).padStart(2,"0")}function bo(t,e){const n=String(t||"#64748b").replace("#",""),r=/^[0-9a-f]{6}$/i.test(n)?n:"64748b",i=parseInt(r.slice(0,2),16),o=parseInt(r.slice(2,4),16),s=parseInt(r.slice(4,6),16);return`rgba(${i}, ${o}, ${s}, ${e})`}function gi(t){const e=String(t||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(e))return"#E5E7EB";const n=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16);return(n*299+r*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function yf(t){const e=String((t==null?void 0:t.avatar)||"").trim(),n=String((t==null?void 0:t.discord_id)||"").trim();if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;if(!n)return"";const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=64`}function on(t){return t.server_nickname||t.global_name||t.username||t.discord_id||"Unknown"}function la(t){const e=String(t||"").trim();if(!e)return"Not refreshed yet";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function $n(){const t=document.querySelector("#discordArea");if(!!t){if(yn(!1),A()){const e=p.user||{},n=ee(),r=If(e),i=ba(n);t.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${r?`<img src="${f(r)}" alt="${f(n)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${c(i)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const o=document.querySelector("#discordAvatarButton");o.addEventListener("contextmenu",s=>{s.preventDefault(),ko()}),o.addEventListener("click",()=>{ko()});return}t.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",wf)}}function ko(){if(cn){yn();return}Sf()}function bf(t=$e){const e=Array.isArray(t==null?void 0:t.files)?t.files:[],n=String((t==null?void 0:t.directory)||"").trim(),r=Boolean(t==null?void 0:t.watching);return e.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${e.map(i=>{const o=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),s=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),a=String((i==null?void 0:i.filePath)||(n?`${n}\\${s}`:s)).trim(),u=(i==null?void 0:i.enabled)!==!1,g=r&&u,S=`profileFileWatchToggle-${vf(o||s)}`;return`
          <label class="profile-filewatch-item ${u?"enabled":"disabled"}" title="${f(a)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${c(s)}</span>
              <span class="profile-filewatch-state">${g?"Watching":u?"On":"Off"}</span>
            </span>
            <input
              id="${f(S)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${f(o)}"
              ${u?"checked":""}
              aria-label="Turn file watch ${u?"off":"on"} for ${f(s)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function yi(){var r,i,o;const t=document.querySelector("#discordProfileMenu");if(!t)return;const e=ee(),n=((r=p.user)==null?void 0:r.role)||"member";t.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${c(e)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${c(Of(n))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${c(Wn)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${$e!=null&&$e.watching?"Active":"Stopped"}</span>
        </div>
        ${bf()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(i=document.querySelector("#discordLogoutButton"))==null||i.addEventListener("click",_f),(o=document.querySelector("#associateTicketReportButton"))==null||o.addEventListener("click",()=>{yn(!1),ns()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(s=>{s.addEventListener("change",kf)})}async function da(){try{$e=await Mc(),cn&&yi()}catch(t){h("file-watcher-error",k(t),{ttlMs:m})}}async function kf(t){var r;const e=t.currentTarget,n=String(((r=e==null?void 0:e.dataset)==null?void 0:r.filewatchKey)||"").trim();if(!!n)try{e.disabled=!0,$e=await Ic(n,e.checked),await bt({silent:!0}),cn&&yi()}catch(i){h("file-watcher-error",k(i),{ttlMs:m}),await da()}}function vf(t){return String(t||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function Sf(){const t=document.querySelector("#discordProfileMenu");!t||(yi(),t.classList.add("open"),t.setAttribute("aria-hidden","false"),cn=!0,da(),setTimeout(()=>{window.addEventListener("click",ua),window.addEventListener("keydown",fa)},0))}function yn(t=!0){const e=document.querySelector("#discordProfileMenu");e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true")),cn=!1,t&&(window.removeEventListener("click",ua),window.removeEventListener("keydown",fa))}function ua(t){const e=document.querySelector(".discord-profile-wrap");e&&!e.contains(t.target)&&yn()}function fa(t){t.key==="Escape"&&yn()}async function wf(){try{h("auth","Opening Discord login...",{ttlMs:m});const t=await qc();t!=null&&t.status_message&&h("auth",t.status_message,{ttlMs:m}),Ie()}catch(t){h("auth-error",k(t),{ttlMs:m}),Ie()}}async function _f(){try{p=await Tc(),h("auth",p.status_message||"Logged out.",{ttlMs:m}),jo(),Xt(),await bt()}catch(t){h("auth-error",k(t),{ttlMs:m}),Ie()}}function Xt(){const t=p.socket_url||"https://guildsync.perdues.me";Af(!1);const e={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};p!=null&&p.token&&(e.auth={token:p.token}),d=Ln(t,e),d.on("connect",()=>{Ie(),ha(),R==="discord-members"&&ui({silent:!0}),R==="eso-members"&&hn({silent:!0}),R==="more"&&be({silent:!0}),ef(),Rt(),Ju(),Vu(),Qd(),tu(),Lf()}),d.on("connect_error",()=>{Ie(),Un()}),d.on("disconnect",()=>{Ie(),Un(),Qu(),Wu()}),d.on("guildsync:version-status",n=>{Ef(n)}),d.on("guildsync:discord-member-data-updated",n=>{rf(n)}),d.on("guildsync:banking-data-updated",n=>{Hu(n)}),d.on("guildsync:roster-data-updated",n=>{zd(n)}),d.on("guildsync:member-links-updated",(n={})=>{Array.isArray(n.links)&&(L=n.links,(R==="discord-members"||R==="eso-members"||R==="settings"||Ge)&&l())}),d.on("guildsync:discord-refresh-status",(n={})=>{const r=String(n.message||"").trim();r&&h("discord-refresh-status",r,{ttlMs:m})})}function Af(t=!0){Un(),d&&(d.disconnect(),d=null),t&&Ie()}function ha(){!(d!=null&&d.connected)||d.emit("guildsync:client-version",{version:Wn,platform:ma(),client_type:"wails"})}function Lf(){Un(),En=window.setInterval(()=>{ha()},Hc)}function Un(){En&&(window.clearInterval(En),En=null)}function Ef(t){if(!(!t||typeof t!="object")){if(t.update_required){const e=t.latest_version||"unknown",n=t.download&&typeof t.download=="object"?t.download:{};ve={updateRequired:!0,latestVersion:e,downloadUrl:String(t.download_url||n.url||"").trim(),fileName:String(t.download_file_name||n.file_name||"").trim(),platformLabel:String(n.label||t.platform||ma()).trim()},h("version",`GuildSync is out of date. Current version: ${Wn}. Latest version: ${e}.`),Gr();return}ve={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},Gr(),bi("version")}}function ma(){const t=String(navigator.userAgent||"").toLowerCase(),n=`${String(navigator.platform||"").toLowerCase()} ${t}`;return n.includes("mac")?"macos":n.includes("linux")?"linux":"windows"}function Gr(){const t=document.querySelector("#desktopUpdateArea");if(!t)return;if(!ve.updateRequired||!ve.downloadUrl){t.innerHTML="";return}const e=ve.platformLabel||"Desktop",n=ve.latestVersion||"latest",r=ve.fileName||"GuildSync client download";t.innerHTML=`
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
        <span class="desktop-update-download-subtitle">${c(e)} \xB7 ${c(n)}</span>
      </span>
    </button>
  `;const i=t.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{Rf()})}function Rf(){const t=String(ve.downloadUrl||"").trim();if(!t){h("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:m});return}Uc(t)}function h(t,e,n={}){const r=String(t||"").trim(),i=String(e||"").trim();if(!(!r||!i)){if(Oe.set(r,i),He.has(r)&&(window.clearTimeout(He.get(r)),He.delete(r)),n.ttlMs&&Number(n.ttlMs)>0){const o=window.setTimeout(()=>{bi(r)},Number(n.ttlMs));He.set(r,o)}$t()}}function bi(t){const e=String(t||"").trim();if(!!e){if(Oe.delete(e),He.has(e)&&(window.clearTimeout(He.get(e)),He.delete(e)),C===e){or(()=>{C="",$t()});return}$t()}}function $t(){const t=rr();if(t.length===0){Ze?or(sn):sn();return}!Ze&&!et&&ir(t[0])}function rr(){return Array.from(Oe.keys())}function pa(){const t=rr();if(t.length===0)return"";if(!C)return t[0];const e=t.indexOf(C);return e<0?t[0]:t[(e+1)%t.length]}function ir(t){const e=document.querySelector("#statusMessageTrack");if(!e||!Oe.has(t)){sn();return}sr();const n=Oe.get(t);C=t,Ze=!0,et=!0,e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent=n,e.style.setProperty("--message-fade-duration",`${Uo}ms`),requestAnimationFrame(()=>{e.classList.add("fade-in"),e.addEventListener("animationend",()=>{e.classList.remove("fade-in"),e.style.opacity="1",e.style.transform="translateX(0) translateY(-50%)",et=!1,$f()},{once:!0})})}function $f(){const t=rr();if(!C||!Oe.has(C)){$t();return}if(t.length<=1){vo(!1);return}vo(!0)}function vo(t){const e=document.querySelector("#statusMessageViewport"),n=document.querySelector("#statusMessageTrack");if(!e||!n)return;const r=Math.max(0,n.scrollWidth-e.clientWidth);if(r<=0){t&&an(()=>{or(()=>{const i=pa();C="",i?ir(i):sn()})},Go);return}an(()=>{ga(r,t)},Ho)}function ga(t,e){const n=document.querySelector("#statusMessageTrack");if(!n||!C||!Oe.has(C))return;const r=Math.max(4,Math.ceil(t/zc));n.style.setProperty("--long-scroll-distance",`${t}px`),n.style.setProperty("--long-scroll-duration",`${r}s`),n.classList.add("long-scroll"),n.addEventListener("animationend",()=>{if(n.classList.remove("long-scroll"),n.style.transform=`translateX(-${t}px) translateY(-50%)`,e){an(()=>{or(()=>{const i=pa();C="",i?ir(i):sn()})},Go);return}an(()=>{Df()},jc)},{once:!0})}function Df(){const t=document.querySelector("#statusMessageViewport"),e=document.querySelector("#statusMessageTrack");if(!t||!e||!C||!Oe.has(C))return;if(rr().length!==1){$t();return}e.classList.remove("long-scroll"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.transform="translateX(0) translateY(-50%)";const r=Math.max(0,e.scrollWidth-t.clientWidth);r<=0||an(()=>{ga(r,!1)},Ho)}function or(t){const e=document.querySelector("#statusMessageTrack");if(sr(),!e||!Ze){typeof t=="function"&&t();return}et=!0,e.classList.remove("fade-in","long-scroll"),e.style.setProperty("--message-fade-duration",`${Uo}ms`),e.classList.add("fade-out"),e.addEventListener("animationend",()=>{e.classList.remove("fade-out"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",Ze=!1,et=!1,typeof t=="function"&&t()},{once:!0})}function sn(){const t=document.querySelector("#statusMessageTrack");sr(),C="",Ze=!1,et=!1,t&&(t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent="")}function an(t,e){const n=window.setTimeout(()=>{Yt=Yt.filter(r=>r!==n),t()},e);Yt.push(n)}function sr(){for(const t of Yt)window.clearTimeout(t);Yt=[]}function ya(){if(!Ze||et||!C)return;const t=C;sr(),ir(t)}function Ie(){const t=document.querySelector("#statusDot"),e=document.querySelector("#statusConnectionLabel");if(!!t){if(t.classList.remove("status-red","status-yellow","status-green"),!(d!=null&&d.connected)){t.classList.add("status-red"),t.title="Server Unavailable. Websocket is not connected.",e&&(e.textContent="Server Unavailable",e.title="Server Unavailable");return}if(!A()){t.classList.add("status-yellow"),t.title="Login Required. Websocket is connected but user is not authenticated.",e&&(e.textContent="Login Required",e.title="Login Required");return}t.classList.add("status-green"),t.title=`Server Ready. Authenticated as ${ee()}.`,e&&(e.textContent="Server Ready",e.title=`Server Ready - ${ee()}`)}}async function bt(t={}){try{if(A()){const e=await xc();$e=e,!t.silent&&(e==null?void 0:e.message)&&h(e.watching?"file-watcher":"file-watcher-error",e.message,{ttlMs:m});return}$e=await Fc(),bi("file-watcher")}catch(e){h("file-watcher-error",k(e),{ttlMs:m})}}function zt(t,e=null){const n="[GuildSync File Watcher]";if(e){console.log(`${n} ${t}`,e);return}console.log(`${n} ${t}`)}function Mf(t={}){if(!A()){zt("SavedVariables change ignored because the user is not authenticated.",t);return}const e=String(t.key||t.fileName||"saved-vars-file").trim()||"saved-vars-file",n=e.toLowerCase(),r=String(t.label||"").trim(),i=String(t.fileName||"SavedVariables file").trim()||"SavedVariables file",o=String(t.filePath||"").trim(),s=r?`${r} saved variables (${i})`:i;zt(`SavedVariables change detected: ${i}${o?` (${o})`:""}. Key: ${n}.`,t),h(`saved-vars-file-updated-${e}`,`${s} has been updated.`,{ttlMs:m}),n==="banking"&&(zt(`Processing banking SavedVariables update from ${i}.`),Nf(t)),n==="roster"&&(zt(`Processing roster SavedVariables update from ${i}.`),Tf(t)),n==="applications"&&(zt(`Processing applications SavedVariables update from ${i}.`),iu(t))}async function Nf(t={}){await ju(t),await ea(t)}async function Tf(t={}){await Kd(t)}function Cf(t){!A()||h("file-watcher-error",k(t),{ttlMs:m})}function Bf(){Ht("guildsync-savedvars-file-modified",Mf),Ht("guildsync-file-watcher-error",Cf),Ht("guildsync-login-complete",async t=>{p=t||{logged_in:!1,allowed:!1},$n(),Xt(),await bt(),h("auth",p.status_message||`Logged in and authorized as ${ee()}.`,{ttlMs:m})}),Ht("guildsync-login-denied",async t=>{p={logged_in:!1,allowed:!1,status_message:""},$n(),await bt(),h("auth",t||"Access denied.",{ttlMs:m}),Xt()}),Ht("guildsync-login-failed",async t=>{p={logged_in:!1,allowed:!1,status_message:""},$n(),await bt(),h("auth",t||"Login failed.",{ttlMs:m}),Xt()})}function A(){return Boolean((p==null?void 0:p.logged_in)&&(p==null?void 0:p.allowed)&&(p==null?void 0:p.token))}function ee(){var t,e;return((t=p.user)==null?void 0:t.display_name)||((e=p.user)==null?void 0:e.username)||"Discord User"}function If(t){if(!t)return"";if(t.avatar_url)return t.avatar_url;const e=String(t.avatar||"").trim(),n=String(t.discord_user_id||"").trim();if(!e||!n)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const r=e.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(n)}/${encodeURIComponent(e)}.${r}?size=128`}function ba(t){const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length===0?"GS":e.length===1?e[0].slice(0,2).toUpperCase():`${e[0][0]}${e[e.length-1][0]}`.toUpperCase()}function Of(t){return String(t||"member").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function qf(){Vt&&(Vt.disconnect(),Vt=null);const t=document.querySelector(".main-window")||document.querySelector("#app");if(!t||typeof ResizeObserver>"u")return;let e=Math.round(t.getBoundingClientRect().width),n=Math.round(t.getBoundingClientRect().height);Vt=new ResizeObserver(r=>{const i=r[0];if(!i)return;const o=Math.round(i.contentRect.width),s=Math.round(i.contentRect.height);o===e&&s===n||(e=o,n=s,ka(),ya())}),Vt.observe(t)}function ka(){clearTimeout(Ji),Ji=setTimeout(async()=>{try{await Oo()}catch{}},500)}function k(t){return t?typeof t=="string"?t:t.message||String(t):"Unknown error."}function c(t){return String(t!=null?t:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function f(t){return c(t)}Bf();Jc();
