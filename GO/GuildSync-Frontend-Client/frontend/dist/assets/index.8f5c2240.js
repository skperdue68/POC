(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const fs="/assets/splash.ea386b6a.png",hs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAACm5JREFUWEedV3lUU2cW/72sZIOQsKlA2ASEisWFjttg1bp1sdqpjm2nndZWp61Oa4+tXWamjradThftdKoUKq2tW7UoBVxAYVRA2XcERCKQhOwhe0IISfrCOfEQwNoz7593vu/d7/5+997vLo/A//F8/tk+7mOPP7bJYjavIQjiPpVKldDf1wsGkznEYnNueNyuSqVScer119+4fi/1xL0Exn8vKSnZkpCQ8DGNRgtWq9Xo6GjHiNMJk8kIFouNgAAmrBYT+IE8iMW3ysJDQ7Zt3f5W13g9vjX1bh8m25dKJR+wWKxPLl4sYV26eAEGoxGkB6BRKxHAZGJgQAqbzQr9oAYtzU0QRUXGCflBm2Onhqiu17c0TqbzNxPo7+9/h81m/7OoIB8ymRTBwQJw2CzEx8UhMioaNBoVNosZTucwQkNDoSfJNTQ0QKFQ0MMjwh9bNHcWrby68fJ4Er+JQE+P+DWPx/NpUVEhHA4vQAji4mJHScikUtTWVKG3T0J+GwIzgAU6lYBAEAKLSQ+NVo1BvRFLFi/4fVLsFF1FTXPtWBL3JKDRaN8nrfu4rKwMWq0Wkt5byMh4gHSzAW/v3OG61XO7dMg+dLS8tOC4m2C09966aW+orRaFhIRSMual41ZXJ7SDgxhxAxTCs2bBwiXHr1fXDPpI/Ool7BGL32EymR/l5Z0ejbfZoMXy5Q+hvrYKly8V12auWPvs7t3v3xzv1qef2hQm6encGRLMeSMzM5Pad7t7NDRCoQC1LeJPissqdt2TwM8Fha+FhYV9can0EulaBxw2MxIT4jBMmnLwi08raTT6qrbufut48LHrbZufXh1MteTNzlzNLr10AUFcFpq7pC3nS6/d75OjTKag7H+XX+YF8r5oam4Gi80DjUIgeooQAzIZjh7+tnr2/KWr7wXu1ftV7rELFpN9VXtlqSU2LhkzUtNAZ7BnjsWcQKC9vX2zSBR9sKmxCUPDTrhGhhEdFQkPhYEj3+dWDBqty44dO2rxKWltbl2oVqpP6qSWVnG1vePk5+q60iz5R9fO1EV5Zfb/eLFC42StVPV2W6OiY2DXD/hh+t2B4uKSpJTUFNLwFlY9SSAqKgqcADr6em+Tlude0+rNK9Ranc0HLq7o30KnhWc3t1BRfdkDk8MDVpgH0SFOTOe4bFqV6tVnvkw67JX/4xNr0wIIx2V2UIjgYO7RO7h+bKZMidhOp9NZPeLbYNCp0GmUuNnZhiO5WRWOEY8/eKN4C9wR2ecOU9BMZrd9iIBtGGTeu3CxUocj5U42nRf13cWd4q1eAj+eLmiNSZ33oCgiWO4zwPv2S8M58zK+tlitQXQGHUaDATEiEXJzvm7SaDRLpQrNHcs76zq2smmi7LyvqFBqPYiIcYDgtYMnHCArIg1OOxdWNw0GBxVcPvFIAmOFoqrvSMOVq+WqTc+9lFdYWGT0kfAjEBYRsU8gCIZaox2tcre7O2HQKF9svdnX4TvQUNq8heFKyC76hoZhO5CQakJZ97u2JnFRrtHRX1RRWx6YcV/0VJM9BIN2N1QGKqYHMx7dkLZeVdj2ff1YcK9OvxC4XS6TTCaH1WwavfFcFg2BXIbWB97S2LwlLCwpu+AQFXLS1ZHTTbjc/bV5hOJcWVFZ9HJB4YE9mUuYiy+3nL86P60ffF4ADHYP2oaFYHJDsz5//PiLY90/gYBcLm8gqxU0GhVZuTwQhE2Dw83Y5DtUW+5+5sZVN8h7iRkpJpR0fmZy0pQraDSTZOO6NcVv79oVfSj3P/a6xrNrPjq0pyIsqAUWtxV95OWoc/GhYTCzX9r45YyxJPw8wGazTquUCrhJ8AGpBDc6u7Fq5YrX97697XnvIaVJvDHn3FmJMFGNkpv/VhNcw2IG2zIwc1ba1cTkGSstOln5O3/dSqZfo23PnrWPl7ef6EiYMgSPi0CPxA03NZSis7u335XAsgeXHqqsvNbK57Hg9njIVuvGgEoDCoOZ8/xT69f+/R9PKhTGpswjV861Tp3Oe0gmbTPGxsRWtre1xVwqLQOfzxExaM5TXoBXXnl2UBie+paJ3g/biA1m+zAGhzgQSzvmjyUwoRcsW7YsWq83lC/JXCRSyGUQCIUQCvgYtpkdww7nhn0HDhV6FZw48m2S2WotuVZVI+pob0FEiAA2q91GsISryLJbMUoiqzaDsCXXdJabYB8hEMWzo19+tKemfPd0H4kJlZDsepIBhSrzelWtZHpiMgZ1g+jrlyJiyhRmIIty5uQPWWcqy8ty+cFBdY2NzSJxdxdmp6djWlS8MyU9c6MP3AuQGB+5LSGFAYvHRdYIC4hgMzSqDv1YD/il4dkfut4MYLurKq+XGQJYgfk6nX5dRsZcvpnMCqPRhBEPKFxu4Ay90ZJeWFjI1JCFKi6GDDmVaZcMqB85duxwsU95dZ9+L40WtP34MSUkCvJSO61gudsRxDLk9d6uuyPnF4LDWTKPXObJn5lxc+Oja5c7k2YujhbwiIoF81KjXS4nlGot1CrVaFv1jmICPg8UCsNxvaH7kebGqlIf+DWx5oMeHfe900eVaOs0wUN20AXJTDRU7sWsJHbqqbzcO3XFLwRX6xulohjBuo7GtLy8n4pYN9sqJPPnz18o7lOUazU6MGkE5qSnkWlIVjty9pMM6G1iqW79WPAzrYoPB4d47x05pEJXkwIcsxXJfDrEN3IQGc79eCy4l7CfB9Lm7G7MSN2aHh8TDKtdf6XxxmsPnz9/arQEP/C7hbMJSsAGq9UaqtUZRpIT41uZdPrJ4pKf7xSqo7XKfW6aYMc3WQqoWmXAiBWRIdPIPnESenVddlfnhb+Mjf8EAkuW7Tw1NWzTkx23KFi+KBbT6IMVkpH6Nfv3b7jTfscr8K2bZKoPmxX8d7P/K4aYvGZseR9EQi70unOkt1pzSPDRpjT+8QsBP4hdo1Z2gc0JQlm1Bp2DlsWN7Z6aP2zK9xsixis5cEWyDx7Bu4e+JzNGoQdV1YOUKCFGHCUw6rvuCu7V4xeCJ9Ztj5QrWVIOfwPEcgmpYBDzUuIQyotDTBj3lClS/F1KpLnqT08sN57ML+BSY1MWaVwhu2Qa9pLaAjluSA2gknPj1CACJtkZ0Ah1Tltz3qSW+4yYUIjmzHvhgMslesVCJMBqNQEuO1Jj4zErMRGhs2LgjiNgttmQEE5Hr5GOZA6Bv+Xb4OiWg9D1Y25SMPSyn+AwiHNqawp+FXyCB7wbW7fuYNbVteW7PfetHgqYC5PBAjo9kKzjNHg4gXCExiCAfA+RgyrDw4SH7gY9iIrhAQUShSYMKfLBJ/QHS4p/eHV8qCZbT/gvaGiodu3/dO+J+qZyrk4zsEAUF092xlAMO11wkf+A3gHf7R3yHSMg3EMYITujKJCKUL4Jzv5jEAmoewt+znlzMrDJ9iaEYKzQi5t3LK5vkv7L5gxcGMi/H4yQcBCMaZAYSCm2ECmRDpiHlbANXMFQb11/fGziq+fOZp2bDOhue79KwHfouT+/kVpVK1vv8lCWBnIc6R09mqDAQD6EwQFiDofTzqDYT7y0+eHTLzz/3MjdgO62/wuVt+/nmPRFhQAAAABJRU5ErkJggg==",ps="/assets/GuildSync-Graphic.9169020d.png",W=Object.create(null);W.open="0";W.close="1";W.ping="2";W.pong="3";W.message="4";W.upgrade="5";W.noop="6";const St=Object.create(null);Object.keys(W).forEach(e=>{St[W[e]]=e});const fr={type:"error",data:"parser error"},Dn=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",$n=typeof ArrayBuffer=="function",Mn=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,Nr=({type:e,data:t},r,n)=>Dn&&t instanceof Blob?r?n(t):nn(t,n):$n&&(t instanceof ArrayBuffer||Mn(t))?r?n(t):nn(new Blob([t]),n):n(W[e]+(t||"")),nn=(e,t)=>{const r=new FileReader;return r.onload=function(){const n=r.result.split(",")[1];t("b"+(n||""))},r.readAsDataURL(e)};function sn(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let nr;function ms(e,t){if(Dn&&e.data instanceof Blob)return e.data.arrayBuffer().then(sn).then(t);if($n&&(e.data instanceof ArrayBuffer||Mn(e.data)))return t(sn(e.data));Nr(e,!1,r=>{nr||(nr=new TextEncoder),t(nr.encode(r))})}const on="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Xe=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<on.length;e++)Xe[on.charCodeAt(e)]=e;const gs=e=>{let t=e.length*.75,r=e.length,n,i=0,s,o,l,p;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const m=new ArrayBuffer(t),v=new Uint8Array(m);for(n=0;n<r;n+=4)s=Xe[e.charCodeAt(n)],o=Xe[e.charCodeAt(n+1)],l=Xe[e.charCodeAt(n+2)],p=Xe[e.charCodeAt(n+3)],v[i++]=s<<2|o>>4,v[i++]=(o&15)<<4|l>>2,v[i++]=(l&3)<<6|p&63;return m},ys=typeof ArrayBuffer=="function",Tr=(e,t)=>{if(typeof e!="string")return{type:"message",data:Nn(e,t)};const r=e.charAt(0);return r==="b"?{type:"message",data:bs(e.substring(1),t)}:St[r]?e.length>1?{type:St[r],data:e.substring(1)}:{type:St[r]}:fr},bs=(e,t)=>{if(ys){const r=gs(e);return Nn(r,t)}else return{base64:!0,data:e}},Nn=(e,t)=>{switch(t){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},Tn=String.fromCharCode(30),vs=(e,t)=>{const r=e.length,n=new Array(r);let i=0;e.forEach((s,o)=>{Nr(s,!1,l=>{n[o]=l,++i===r&&t(n.join(Tn))})})},ks=(e,t)=>{const r=e.split(Tn),n=[];for(let i=0;i<r.length;i++){const s=Tr(r[i],t);if(n.push(s),s.type==="error")break}return n};function Ss(){return new TransformStream({transform(e,t){ms(e,r=>{const n=r.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,n)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(n))}e.data&&typeof e.data!="string"&&(i[0]|=128),t.enqueue(i),t.enqueue(r)})}})}let ir;function gt(e){return e.reduce((t,r)=>t+r.length,0)}function yt(e,t){if(e[0].length===t)return e.shift();const r=new Uint8Array(t);let n=0;for(let i=0;i<t;i++)r[i]=e[0][n++],n===e[0].length&&(e.shift(),n=0);return e.length&&n<e[0].length&&(e[0]=e[0].slice(n)),r}function ws(e,t){ir||(ir=new TextDecoder);const r=[];let n=0,i=-1,s=!1;return new TransformStream({transform(o,l){for(r.push(o);;){if(n===0){if(gt(r)<1)break;const p=yt(r,1);s=(p[0]&128)===128,i=p[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(gt(r)<2)break;const p=yt(r,2);i=new DataView(p.buffer,p.byteOffset,p.length).getUint16(0),n=3}else if(n===2){if(gt(r)<8)break;const p=yt(r,8),m=new DataView(p.buffer,p.byteOffset,p.length),v=m.getUint32(0);if(v>Math.pow(2,53-32)-1){l.enqueue(fr);break}i=v*Math.pow(2,32)+m.getUint32(4),n=3}else{if(gt(r)<i)break;const p=yt(r,i);l.enqueue(Tr(s?p:ir.decode(p),t)),n=0}if(i===0||i>e){l.enqueue(fr);break}}}})}const Cn=4;function E(e){if(e)return _s(e)}function _s(e){for(var t in E.prototype)e[t]=E.prototype[t];return e}E.prototype.on=E.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};E.prototype.once=function(e,t){function r(){this.off(e,r),t.apply(this,arguments)}return r.fn=t,this.on(e,r),this};E.prototype.off=E.prototype.removeListener=E.prototype.removeAllListeners=E.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+e];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var n,i=0;i<r.length;i++)if(n=r[i],n===t||n.fn===t){r.splice(i,1);break}return r.length===0&&delete this._callbacks["$"+e],this};E.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),r=this._callbacks["$"+e],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,i=r.length;n<i;++n)r[n].apply(this,t)}return this};E.prototype.emitReserved=E.prototype.emit;E.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};E.prototype.hasListeners=function(e){return!!this.listeners(e).length};const Pt=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,r)=>r(t,0))(),B=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())(),As="arraybuffer";function Bn(e,...t){return t.reduce((r,n)=>(e.hasOwnProperty(n)&&(r[n]=e[n]),r),{})}const Ls=B.setTimeout,Es=B.clearTimeout;function Gt(e,t){t.useNativeTimers?(e.setTimeoutFn=Ls.bind(B),e.clearTimeoutFn=Es.bind(B)):(e.setTimeoutFn=B.setTimeout.bind(B),e.clearTimeoutFn=B.clearTimeout.bind(B))}const Rs=1.33;function Ds(e){return typeof e=="string"?$s(e):Math.ceil((e.byteLength||e.size)*Rs)}function $s(e){let t=0,r=0;for(let n=0,i=e.length;n<i;n++)t=e.charCodeAt(n),t<128?r+=1:t<2048?r+=2:t<55296||t>=57344?r+=3:(n++,r+=4);return r}function xn(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Ms(e){let t="";for(let r in e)e.hasOwnProperty(r)&&(t.length&&(t+="&"),t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t}function Ns(e){let t={},r=e.split("&");for(let n=0,i=r.length;n<i;n++){let s=r[n].split("=");t[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return t}class Ts extends Error{constructor(t,r,n){super(t),this.description=r,this.context=n,this.type="TransportError"}}class Cr extends E{constructor(t){super(),this.writable=!1,Gt(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,r,n){return super.emitReserved("error",new Ts(t,r,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const r=Tr(t,this.socket.binaryType);this.onPacket(r)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,r={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const r=Ms(t);return r.length?"?"+r:""}}class Cs extends Cr{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const r=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||r()})),this.writable||(n++,this.once("drain",function(){--n||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const r=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};ks(t,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,vs(t,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=xn()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(t,r)}}let On=!1;try{On=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Bs=On;function xs(){}class Os extends Cs{constructor(t){if(super(t),typeof location<"u"){const r=location.protocol==="https:";let n=location.port;n||(n=r?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,r){const n=this.request({method:"POST",data:t});n.on("success",r),n.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(r,n)=>{this.onError("xhr poll error",r,n)}),this.pollXhr=t}}class F extends E{constructor(t,r,n){super(),this.createRequest=t,Gt(this,n),this._opts=n,this._method=n.method||"GET",this._uri=r,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const r=Bn(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=F.requestsCount++,F.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=xs,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete F.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}F.requestsCount=0;F.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",an);else if(typeof addEventListener=="function"){const e="onpagehide"in B?"pagehide":"unload";addEventListener(e,an,!1)}}function an(){for(let e in F.requests)F.requests.hasOwnProperty(e)&&F.requests[e].abort()}const qs=function(){const e=qn({xdomain:!1});return e&&e.responseType!==null}();class Is extends Os{constructor(t){super(t);const r=t&&t.forceBase64;this.supportsBinary=qs&&!r}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new F(qn,this.uri(),t)}}function qn(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||Bs))return new XMLHttpRequest}catch{}if(!t)try{return new B[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const In=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Ps extends Cr{get name(){return"websocket"}doOpen(){const t=this.uri(),r=this.opts.protocols,n=In?{}:Bn(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,r,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],i=r===t.length-1;Nr(n,this.supportsBinary,s=>{try{this.doWrite(n,s)}catch{}i&&Pt(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=xn()),this.supportsBinary||(r.b64=1),this.createUri(t,r)}}const sr=B.WebSocket||B.MozWebSocket;class Gs extends Ps{createSocket(t,r,n){return In?new sr(t,r,n):r?new sr(t,r):new sr(t)}doWrite(t,r){this.ws.send(r)}}class Us extends Cr{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const r=ws(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(r).getReader(),i=Ss();i.readable.pipeTo(t.writable),this._writer=i.writable.getWriter();const s=()=>{n.read().then(({done:l,value:p})=>{l||(this.onPacket(p),s())}).catch(l=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],i=r===t.length-1;this._writer.write(n).then(()=>{i&&Pt(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const Fs={websocket:Gs,webtransport:Us,polling:Is},Vs=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Ws=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function hr(e){if(e.length>8e3)throw"URI too long";const t=e,r=e.indexOf("["),n=e.indexOf("]");r!=-1&&n!=-1&&(e=e.substring(0,r)+e.substring(r,n).replace(/:/g,";")+e.substring(n,e.length));let i=Vs.exec(e||""),s={},o=14;for(;o--;)s[Ws[o]]=i[o]||"";return r!=-1&&n!=-1&&(s.source=t,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=Hs(s,s.path),s.queryKey=zs(s,s.query),s}function Hs(e,t){const r=/\/{2,9}/g,n=t.replace(r,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function zs(e,t){const r={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,s){i&&(r[i]=s)}),r}const pr=typeof addEventListener=="function"&&typeof removeEventListener=="function",wt=[];pr&&addEventListener("offline",()=>{wt.forEach(e=>e())},!1);class se extends E{constructor(t,r){if(super(),this.binaryType=As,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(r=t,t=null),t){const n=hr(t);r.hostname=n.host,r.secure=n.protocol==="https"||n.protocol==="wss",r.port=n.port,n.query&&(r.query=n.query)}else r.host&&(r.hostname=hr(r.host).host);Gt(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Ns(this.opts.query)),pr&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},wt.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const r=Object.assign({},this.opts.query);r.EIO=Cn,r.transport=t,this.id&&(r.sid=this.id);const n=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&se.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(t);r.open(),this.setTransport(r)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",se.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=t.data,this._onError(r);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(r+=Ds(i)),n>0&&r>this._maxPayload)return this.writeBuffer.slice(0,n);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,Pt(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,r,n){return this._sendPacket("message",t,r,n),this}send(t,r,n){return this._sendPacket("message",t,r,n),this}_sendPacket(t,r,n,i){if(typeof r=="function"&&(i=r,r=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const s={type:t,data:r,options:n};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),t()},n=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(se.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),pr&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=wt.indexOf(this._offlineEventListener);n!==-1&&wt.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,r),this.writeBuffer=[],this._prevBufferLen=0}}}se.protocol=Cn;class js extends se{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let r=this.createTransport(t),n=!1;se.priorWebsocketSuccess=!1;const i=()=>{n||(r.send([{type:"ping",data:"probe"}]),r.once("packet",w=>{if(!n)if(w.type==="pong"&&w.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;se.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(v(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const N=new Error("probe error");N.transport=r.name,this.emitReserved("upgradeError",N)}}))};function s(){n||(n=!0,v(),r.close(),r=null)}const o=w=>{const N=new Error("probe error: "+w);N.transport=r.name,s(),this.emitReserved("upgradeError",N)};function l(){o("transport closed")}function p(){o("socket closed")}function m(w){r&&w.name!==r.name&&s()}const v=()=>{r.removeListener("open",i),r.removeListener("error",o),r.removeListener("close",l),this.off("close",p),this.off("upgrading",m)};r.once("open",i),r.once("error",o),r.once("close",l),this.once("close",p),this.once("upgrading",m),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||r.open()},200):r.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const r=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&r.push(t[n]);return r}}class Ks extends js{constructor(t,r={}){const n=typeof t=="object"?t:r;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(i=>Fs[i]).filter(i=>!!i)),super(t,n)}}function Ys(e,t="",r){let n=e;r=r||typeof location<"u"&&location,e==null&&(e=r.protocol+"//"+r.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=r.protocol+e:e=r.host+e),/^(https?|wss?):\/\//.test(e)||(typeof r<"u"?e=r.protocol+"//"+e:e="https://"+e),n=hr(e)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const s=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port+t,n.href=n.protocol+"://"+s+(r&&r.port===n.port?"":":"+n.port),n}const Js=typeof ArrayBuffer=="function",Qs=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,Pn=Object.prototype.toString,Xs=typeof Blob=="function"||typeof Blob<"u"&&Pn.call(Blob)==="[object BlobConstructor]",Zs=typeof File=="function"||typeof File<"u"&&Pn.call(File)==="[object FileConstructor]";function Br(e){return Js&&(e instanceof ArrayBuffer||Qs(e))||Xs&&e instanceof Blob||Zs&&e instanceof File}function _t(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let r=0,n=e.length;r<n;r++)if(_t(e[r]))return!0;return!1}if(Br(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return _t(e.toJSON(),!0);for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&_t(e[r]))return!0;return!1}function eo(e){const t=[],r=e.data,n=e;return n.data=mr(r,t),n.attachments=t.length,{packet:n,buffers:t}}function mr(e,t){if(!e)return e;if(Br(e)){const r={_placeholder:!0,num:t.length};return t.push(e),r}else if(Array.isArray(e)){const r=new Array(e.length);for(let n=0;n<e.length;n++)r[n]=mr(e[n],t);return r}else if(typeof e=="object"&&!(e instanceof Date)){const r={};for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=mr(e[n],t));return r}return e}function to(e,t){return e.data=gr(e.data,t),delete e.attachments,e}function gr(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let r=0;r<e.length;r++)e[r]=gr(e[r],t);else if(typeof e=="object")for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(e[r]=gr(e[r],t));return e}const Gn=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],ro=5;var y;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(y||(y={}));class no{constructor(t){this.replacer=t}encode(t){return(t.type===y.EVENT||t.type===y.ACK)&&_t(t)?this.encodeAsBinary({type:t.type===y.EVENT?y.BINARY_EVENT:y.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let r=""+t.type;return(t.type===y.BINARY_EVENT||t.type===y.BINARY_ACK)&&(r+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(r+=t.nsp+","),t.id!=null&&(r+=t.id),t.data!=null&&(r+=JSON.stringify(t.data,this.replacer)),r}encodeAsBinary(t){const r=eo(t),n=this.encodeAsString(r.packet),i=r.buffers;return i.unshift(n),i}}class xr extends E{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let r;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(t);const n=r.type===y.BINARY_EVENT;n||r.type===y.BINARY_ACK?(r.type=n?y.EVENT:y.ACK,this.reconstructor=new io(r),r.attachments===0&&super.emitReserved("decoded",r)):super.emitReserved("decoded",r)}else if(Br(t)||t.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let r=0;const n={type:Number(t.charAt(0))};if(y[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===y.BINARY_EVENT||n.type===y.BINARY_ACK){const s=r+1;for(;t.charAt(++r)!=="-"&&r!=t.length;);const o=t.substring(s,r);if(o!=Number(o)||t.charAt(r)!=="-")throw new Error("Illegal attachments");const l=Number(o);if(!Un(l)||l<0)throw new Error("Illegal attachments");if(l>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=l}if(t.charAt(r+1)==="/"){const s=r+1;for(;++r&&!(t.charAt(r)===","||r===t.length););n.nsp=t.substring(s,r)}else n.nsp="/";const i=t.charAt(r+1);if(i!==""&&Number(i)==i){const s=r+1;for(;++r;){const o=t.charAt(r);if(o==null||Number(o)!=o){--r;break}if(r===t.length)break}n.id=Number(t.substring(s,r+1))}if(t.charAt(++r)){const s=this.tryParse(t.substr(r));if(xr.isPayloadValid(n.type,s))n.data=s;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,r){switch(t){case y.CONNECT:return Dt(r);case y.DISCONNECT:return r===void 0;case y.CONNECT_ERROR:return typeof r=="string"||Dt(r);case y.EVENT:case y.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&Gn.indexOf(r[0])===-1);case y.ACK:case y.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class io{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const r=to(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function so(e){return typeof e=="string"}const Un=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e};function oo(e){return e===void 0||Un(e)}function Dt(e){return Object.prototype.toString.call(e)==="[object Object]"}function ao(e,t){switch(e){case y.CONNECT:return t===void 0||Dt(t);case y.DISCONNECT:return t===void 0;case y.EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&Gn.indexOf(t[0])===-1);case y.ACK:return Array.isArray(t);case y.CONNECT_ERROR:return typeof t=="string"||Dt(t);default:return!1}}function co(e){return so(e.nsp)&&oo(e.id)&&ao(e.type,e.data)}const lo=Object.freeze(Object.defineProperty({__proto__:null,protocol:ro,get PacketType(){return y},Encoder:no,Decoder:xr,isPacketValid:co},Symbol.toStringTag,{value:"Module"}));function I(e,t,r){return e.on(t,r),function(){e.off(t,r)}}const uo=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Fn extends E{constructor(t,r,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=r,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[I(t,"open",this.onopen.bind(this)),I(t,"packet",this.onpacket.bind(this)),I(t,"error",this.onerror.bind(this)),I(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...r){var n,i,s;if(uo.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(r.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const o={type:y.EVENT,data:r};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const v=this.ids++,w=r.pop();this._registerAckCallback(v,w),o.id=v}const l=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,p=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!l||(p?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(t,r){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[t]=r;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let l=0;l<this.sendBuffer.length;l++)this.sendBuffer[l].id===t&&this.sendBuffer.splice(l,1);r.call(this,new Error("operation has timed out"))},i),o=(...l)=>{this.io.clearTimeoutFn(s),r.apply(this,l)};o.withError=!0,this.acks[t]=o}emitWithAck(t,...r){return new Promise((n,i)=>{const s=(o,l)=>o?i(o):n(l);s.withError=!0,r.push(s),this.emit(t,...r)})}_addToQueue(t){let r;typeof t[t.length-1]=="function"&&(r=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((i,...s)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(i)):(this._queue.shift(),r&&r(null,...s)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!t||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:y.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case y.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case y.EVENT:case y.BINARY_EVENT:this.onevent(t);break;case y.ACK:case y.BINARY_ACK:this.onack(t);break;case y.DISCONNECT:this.ondisconnect();break;case y.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const r=t.data||[];t.id!=null&&r.push(this.ack(t.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const n of r)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const r=this;let n=!1;return function(...i){n||(n=!0,r.packet({type:y.ACK,id:t,data:i}))}}onack(t){const r=this.acks[t.id];typeof r=="function"&&(delete this.acks[t.id],r.withError&&t.data.unshift(null),r.apply(this,t.data))}onconnect(t,r){this.id=t,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:y.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const r=this._anyListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const r=this._anyOutgoingListeners;for(let n=0;n<r.length;n++)if(t===r[n])return r.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const n of r)n.apply(this,t.data)}}}function Pe(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Pe.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),r=Math.floor(t*this.jitter*e);e=(Math.floor(t*10)&1)==0?e-r:e+r}return Math.min(e,this.max)|0};Pe.prototype.reset=function(){this.attempts=0};Pe.prototype.setMin=function(e){this.ms=e};Pe.prototype.setMax=function(e){this.max=e};Pe.prototype.setJitter=function(e){this.jitter=e};class yr extends E{constructor(t,r){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(r=t,t=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,Gt(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((n=r.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Pe({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=t;const i=r.parser||lo;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var r;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(r=this.backoff)===null||r===void 0||r.setMin(t),this)}randomizationFactor(t){var r;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(r=this.backoff)===null||r===void 0||r.setJitter(t),this)}reconnectionDelayMax(t){var r;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(r=this.backoff)===null||r===void 0||r.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new Ks(this.uri,this.opts);const r=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=I(r,"open",function(){n.onopen(),t&&t()}),s=l=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",l),t?t(l):this.maybeReconnectOnOpen()},o=I(r,"error",s);if(this._timeout!==!1){const l=this._timeout,p=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),r.close()},l);this.opts.autoUnref&&p.unref(),this.subs.push(()=>{this.clearTimeoutFn(p)})}return this.subs.push(i),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(I(t,"ping",this.onping.bind(this)),I(t,"data",this.ondata.bind(this)),I(t,"error",this.onerror.bind(this)),I(t,"close",this.onclose.bind(this)),I(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(r){this.onclose("parse error",r)}}ondecoded(t){Pt(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,r){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new Fn(this,t,r),this.nsps[t]=n),n}_destroy(t){const r=Object.keys(this.nsps);for(const n of r)if(this.nsps[n].active)return;this._close()}_packet(t){const r=this.encoder.encode(t);for(let n=0;n<r.length;n++)this.engine.write(r[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,r){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(i=>{i?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",i)):t.onreconnect()}))},r);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const je={};function At(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const r=Ys(e,t.path||"/socket.io"),n=r.source,i=r.id,s=r.path,o=je[i]&&s in je[i].nsps,l=t.forceNew||t["force new connection"]||t.multiplex===!1||o;let p;return l?p=new yr(n,t):(je[i]||(je[i]=new yr(n,t)),p=je[i]),r.query&&!t.query&&(t.query=r.queryKey),p.socket(r.path,t)}Object.assign(At,{Manager:yr,Socket:Fn,io:At,connect:At});function fo(){return window.go.main.App.CloseWindow()}function ho(e){return window.go.main.App.CollectGuildSyncApplicationsData(e)}function po(e){return window.go.main.App.CollectGuildSyncBankingData(e)}function mo(e){return window.go.main.App.CollectGuildSyncRosterData(e)}function go(e,t){return window.go.main.App.CommitGuildSyncApplicationsData(e,t)}function yo(e,t){return window.go.main.App.CommitGuildSyncBankingData(e,t)}function bo(e,t){return window.go.main.App.CommitGuildSyncRosterData(e,t)}function vo(){return window.go.main.App.GetGuildSyncFileWatcherStatus()}function ko(){return window.go.main.App.GetGuildSyncSession()}function So(){return window.go.main.App.LogoutGuildSync()}function wo(){return window.go.main.App.MaximizeWindow()}function _o(){return window.go.main.App.MinimizeWindow()}function Vn(){return window.go.main.App.SaveWindowState()}function Ao(e,t){return window.go.main.App.SetGuildSyncSavedVarsWatchFileEnabled(e,t)}function Lo(){return window.go.main.App.ShowMainWindow()}function Eo(){return window.go.main.App.StartDiscordLogin()}function Ro(){return window.go.main.App.StartGuildSyncFileWatcher()}function Do(){return window.go.main.App.StopGuildSyncFileWatcher()}function $o(e,t,r){return window.runtime.EventsOnMultiple(e,t,r)}function Ke(e,t){return $o(e,t,-1)}function Mo(e){window.runtime.BrowserOpenURL(e)}const Ut="1.0.3",No=30*60*1e3,Wn="guildsync-pending-banking-uploads",Hn="guildsync-pending-roster-uploads",zn="guildsync-pending-applications-uploads",h=60*1e3,jn=7e3,Kn=1400,Yn=2400,To=4e3,Co=38,Jn=document.querySelector("#app");let cn=null,Ye=null,dn=!1,lt=!1,Lt=null,or=!1,ar=!1,cr=!1,oe=null,le=new Map,me=new Map,D="",_e=!1,Ae=!1,Ze=[],g={logged_in:!1,allowed:!1,status_message:""},ee={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},c=null,T=[],Ft=null,rt=!1,$t=!1,Mt="",De=new Set,$e=new Set,nt="username",ge="asc",br=null,vr=null,G=[],Nt=null,ue=!1,ln=!1,Tt="",kr=null,Sr=null,ye=new Set,Me=new Set,K="",M="",R=-1,Be=!1,it="",x=[],fe="",ae=[],ce=!1,J="",dr=null,P=-1,Ge=!1,Ue=[],te=!1,be="",Fe=!1,st=[],re=!1,ve="",ut=!1,Or=[],ne=!1,ke="",Ve="",Ne="",ie="",S=[],C=!1,q="",We=!1,Vt="",Y=-1,pe=!1,b=null,Se=[],xe=!1,Z="",ft="",U=-1,He=!1,qr=null,et=null;const Ir=[{id:"linked",label:"Linked"},{id:"fuzzy",label:"Fuzzy / Candidate"},{id:"manual",label:"Manual"},{id:"unlinked",label:"Unlinked"}];let V=[],O="biweekly",Qn=null,Le=!1,we=!1,ht="biweekly",Q=!1,Ct=!1,j="",$={accountName:"",note:"",tickets:""},ze="",z=-1,wr={biweekly:0,monthly:0};const Bo=1780786800,xo=1781996400,Oo=14*24*60*60,qo=28*24*60*60,Io=60*60,Bt=[{id:"discord-members",label:"Discord Member Data",icon:"discord"},{id:"eso-members",label:"Guild Roster",icon:"swords"},{id:"more",label:"Bank Deposits / Raffle Tickets",icon:"bank"},{id:"settings",label:"Reports & Admin",icon:"gear"}];let L=Bt[0].id;function Po(){Jn.innerHTML=`
    <main class="splash-screen">
      <img src="${fs}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `,setTimeout(async()=>{await Lo(),await Go(),Xn(),tt(),await Ce()},5e3)}async function Go(){try{g=await ko()}catch(e){g={logged_in:!1,allowed:!1,status_message:""},f("session-error",k(e),{ttlMs:h})}}function Xn(){Jn.innerHTML=`
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${hs}" alt="" class="title-icon" />
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
            <img src="${ps}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${a(Ut)}</div>
            </div>
          </div>
          <div id="desktopUpdateArea" class="desktop-update-area"></div>
          <div id="discordArea" class="discord-area"></div>
        </div>

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${Zn()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content" aria-live="polite">
          ${ei()}
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
  `,document.querySelector("#minimizeButton").addEventListener("click",async()=>{await _o()}),document.querySelector("#closeButton").addEventListener("click",async()=>{await Vn(),await fo()}),document.querySelector("#maximizeButton").addEventListener("click",async()=>{await wo()}),Rt(),Mr(),ri(),es(),Oi(),Hi(),ai(),xi(),Ri(),Di(),$i(),Mi(),gi(),zo(),de(),Ie(),dn||(window.addEventListener("resize",()=>{us(),ds()}),kd(),dn=!0)}function Zn(){return Bt.map(e=>{const t=e.id===L;return`
        <button
          class="guildsync-tab${t?" active":""}"
          type="button"
          data-tab-id="${u(e.id)}"
          aria-selected="${t?"true":"false"}"
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${Uo(e.icon)}</span>
          <span class="guildsync-tab-label">${a(e.label)}</span>
        </button>
      `}).join("")}function Uo(e){return e==="discord"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `:e==="swords"?"\u2694":e==="gear"?"\u2699":e==="bank"?`
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `:"\u2026"}function ei(){const e=Bt.find(r=>r.id===L)||Bt[0];let t="";return e.id==="discord-members"?t=jo():e.id==="eso-members"?t=Ko():e.id==="more"?t=Ac():e.id==="settings"?t=da():t=`
      <div class="guildsync-tab-panel" data-active-tab="${u(e.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${a(e.label)} content will appear here.
        </div>
      </div>
    `,`
    ${t}
    ${Q?ic():""}
    ${pe?Ja():""}
    ${Ge?la():""}
    ${Fe?ga():""}
    ${ut?ka():""}
    ${We?Ma():""}
    ${He?Ho():""}
  `}function Fo(){return He||Be||Q||pe||Ge||Fe||ut||We||we}function Vo(){return He?!1:We?(Er(),!0):Fe?(Lr(),!0):Ge?(Ar(),!0):pe?(qe(),!0):Q?(Q=!1,d(),!0):Be?(Be=!1,d(),!0):we?(we=!1,d(),!0):!1}function Wo(e){e.key==="Escape"&&Vo()&&(e.preventDefault(),e.stopPropagation())}window.guildSyncGlobalModalEscapeAttached||(window.addEventListener("keydown",Wo,!0),window.guildSyncGlobalModalEscapeAttached=!0);function ti(e={}){return new Promise(t=>{et&&et(!1),He=!0,qr={title:e.title||"Confirm Action",message:e.message||"Are you sure?",detail:e.detail||"",confirmLabel:e.confirmLabel||"Confirm",cancelLabel:e.cancelLabel||"Cancel",confirmClass:e.confirmClass||"danger"},et=t,d()})}function xt(e=!1){const t=et;et=null,He=!1,qr=null,t&&t(e===!0),d()}function Ho(){const e=qr||{};return`
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
  `}function un(e){var n,i,s,o;const t=(i=(n=e.target).closest)==null?void 0:i.call(n,"#cancelGuildSyncConfirmButton"),r=(o=(s=e.target).closest)==null?void 0:o.call(s,"#acceptGuildSyncConfirmButton");if(!(!t&&!r)){if(e.preventDefault(),e.stopPropagation(),t){xt(!1);return}r&&xt(!0)}}window.guildSyncConfirmDelegatedHandlersAttached||(document.addEventListener("click",un,!0),document.addEventListener("pointerup",un,!0),window.guildSyncConfirmDelegatedHandlersAttached=!0);function zo(){if(!He)return;const e=document.querySelector("#cancelGuildSyncConfirmButton"),t=document.querySelector("#acceptGuildSyncConfirmButton");e&&(e.onclick=n=>{n.preventDefault(),n.stopPropagation(),xt(!1)}),t&&(t.onclick=n=>{n.preventDefault(),n.stopPropagation(),xt(!0)});const r=document.querySelector(".guildsync-confirm-overlay");r&&(r.onclick=n=>{n.target===r&&(n.preventDefault(),n.stopPropagation())})}function ri(){document.querySelectorAll(".guildsync-tab").forEach(e=>{e.addEventListener("click",()=>{if(Fo())return;const t=e.dataset.tabId;!t||t===L||(L=t,d())})})}function d(e={}){const t=document.querySelector(".guildsync-tabs"),r=document.querySelector("#guildSyncTabContent");t&&(t.innerHTML=Zn()),r&&(r.innerHTML=ei()),ri(),es(),Oi(),Hi(),ai(),xi(),Ri(),Di(),$i(),Mi(),gi(),e.restoreDiscordSearchFocus&&jc(),e.restoreRosterSearchFocus&&Kc(),L==="discord-members"&&(c==null?void 0:c.connected)&&T.length===0&&!rt&&Yr({silent:!0}),L==="eso-members"&&(c==null?void 0:c.connected)&&G.length===0&&!ue&&!ln&&(ln=!0,pt({silent:!0})),L==="more"&&(c==null?void 0:c.connected)&&V.length===0&&!Le&&Qt({silent:!0}),(L==="discord-members"||L==="eso-members"||L==="settings")&&(c==null?void 0:c.connected)&&S.length===0&&!C&&Wt({silent:!0})}function jo(){const e=Wc(),t=Yc(),r=Array.from(De),n=Array.from($e);return`
    <div class="guildsync-tab-panel discord-member-panel" data-active-tab="discord-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Discord Member Data</h2>
          <p class="discord-data-subtitle">Manage and view Discord member information.</p>
        </div>
        <div class="discord-data-actions">
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${a(ts(Ft))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${rt||$t?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${$t?"Refreshing...":"Refresh Discord Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${u(Mt)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${t.filter(i=>!De.has(i)).map(i=>`<option value="${u(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All roles</span>':r.map(i=>Zc(i)).join("")}
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
              ${Ir.filter(i=>!$e.has(i.id)).map(i=>`<option value="${u(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(i=>ni("discord",i)).join("")}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${vt("username","Username")}
                ${vt("global_name","Global Name")}
                ${vt("server_nickname","Server Nickname")}
                ${vt("roles","Roles")}
                <th class="member-link-action-header">Linked</th>
              </tr>
            </thead>
            <tbody>
              ${e.length>0?e.map(i=>Jc(i)).join(""):Qc()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `}function Ko(){const e=Zo(),t=ra(),r=Array.from(ye),n=Array.from(Me);return`
    <div class="guildsync-tab-panel eso-roster-panel" data-active-tab="eso-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Guild Roster</h2>
          <p class="discord-data-subtitle">Current ESO roster imported from GuildSyncRoster.</p>
        </div>
        <div class="discord-data-actions">
          <span class="discord-last-refresh">Last Refresh: ${a(uc(Nt))}</span>
          <button id="openRosterHistoryButton" class="clear-discord-filters-button" type="button">Lookup Rank Historical Data</button>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${ue?"disabled":""}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${ue?"Refreshing...":"Refresh Roster Data"}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">\u2315</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${u(Tt)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${t.filter(i=>!ye.has(i)).map(i=>`<option value="${u(i)}">${a(i)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${r.length===0?'<span class="discord-no-role-filter">All ranks</span>':r.map(i=>na(i)).join("")}
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
              ${Ir.filter(i=>!Me.has(i.id)).map(i=>`<option value="${u(i.id)}">${a(i.label)}</option>`).join("")}
            </select>
            <div class="discord-selected-roles">
              ${n.length===0?'<span class="discord-no-role-filter">All link statuses</span>':n.map(i=>ni("roster",i)).join("")}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${bt("account_name","Account Name")}
                ${bt("rank","Rank")}
                ${bt("joined","Joined")}
                ${bt("linked","Discord Account Linked","member-link-action-header")}
              </tr>
            </thead>
            <tbody>
              ${e.length>0?e.map((i,s)=>Yo(i,s)).join(""):Jo()}
            </tbody>
          </table>
        </div>
      </div>
      ${Be?oa():""}
    </div>
  `}function Yo(e,t=-1){const r=Qo(e.rank||""),n=r?` style="color: ${r};"`:"";return`
    <tr class="eso-roster-row${t===R?" roster-search-active-row":""}"${n} data-roster-row-index="${u(String(t))}" data-eso-account-name="${u(e.account_name||"")}">
      <td>${a(e.account_name||"")}</td>
      <td>${Pr(e.rank||"")}</td>
      <td>${a(jt(e.joined))}</td>
      <td class="member-link-action-cell">${wi({mode:"eso-to-discord",esoAccountName:e.account_name})}</td>
    </tr>
  `}function Jo(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">${a(ue?"Loading Guild Roster data...":"No Guild Roster members found.")}</td>
    </tr>
  `}function Qo(e){const t=String(e||"").trim(),r=Qr(t);return Xt(r==null?void 0:r.role_color)}function Pr(e){const t=String(e||"").trim();return`<span class="eso-roster-rank-text">${a(t)}</span>`}function Xo(e){const t=String(e||"").trim();return!t||t.toLowerCase()==="unknown"?"":Pr(t)}function Zo(){const e=Tt.trim().toLowerCase(),t=G.filter(r=>{const n=String(r.rank||"").trim();if(ye.size>0&&!ye.has(n)||!oi(Me,_r(r)))return!1;if(!e)return!0;const i=jt(r.joined),s=Ii(r.joined),o=_r(r),l=si(r.account_name||"");return[r.account_name,n,i,s,r.joined,o,l].map(m=>String(m||"").toLowerCase()).join(" ").includes(e)});return ea(t)}function ea(e){if(!K||!M)return e;const t=M==="desc"?-1:1;return[...e].sort((r,n)=>{const i=fn(r,K),s=fn(n,K),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*t:String(r.account_name||"").localeCompare(String(n.account_name||""),void 0,{sensitivity:"base",numeric:!0})})}function fn(e,t){if(t==="rank")return String(e.rank||"");if(t==="joined"){const r=Number(e.joined||0);return Number.isFinite(r)&&r>0?String(r).padStart(16,"0"):""}if(t==="linked"){const r=_r(e);return`${{linked:"1",manual:"1",fuzzy:"2",unlinked:"3",blocked:"4"}[r]||"9"} ${r} ${si(e.account_name||"")}`}return String(e.account_name||"")}function ta(e){const r=new Set(["account_name","rank","joined","linked"]).has(e)?e:"account_name";K!==r?(K=r,M="asc"):M==="asc"?M="desc":M==="desc"?(K="",M=""):(K=r,M="asc"),R=-1,d()}function bt(e,t,r=""){const n=K===e&&Boolean(M),i=n?M==="asc"?"ascending":"descending":"none",s=n?M==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th class="${u(r)}" aria-sort="${u(i)}">
      <button
        class="discord-sort-header roster-sort-header${n?" active":""}"
        type="button"
        data-roster-sort-column="${u(e)}"
        title="Sort ${u(t)}${n&&M==="asc"?" descending":n&&M==="desc"?" not sorted":" ascending"}"
      >
        <span>${a(t)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${s}</span>
      </button>
    </th>
  `}function ra(){return Array.from(new Set(G.map(e=>String(e.rank||"").trim()).filter(Boolean))).sort((e,t)=>e.localeCompare(t))}function na(e){const t=Qr(e),r=Xt(t==null?void 0:t.role_color),n=Zr(r),i=Xr(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-roster-rank-filter="${u(e)}"
      style="${i}"
      title="Remove ${u(e)} filter"
    >
      <span>${a(e)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function ia(e){const t=Ir.find(r=>r.id===e);return t?t.label:e}function ni(e,t){const r=e==="roster"?"roster":"discord",n=ia(t);return`
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${r}-link-status-filter="${u(t)}"
      title="Remove ${u(n)} link filter"
    >
      <span>${a(n)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function ii(e){const t=Array.isArray(e)?e.filter(Boolean):e?[e]:[];return t.length===0?"unlinked":t.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked"&&String(r.link_method||"").trim().toLowerCase()==="manual")?"manual":t.some(r=>String(r.link_status||"").trim().toLowerCase()==="linked")?"linked":t.some(r=>String(r.link_status||"").trim().toLowerCase()==="candidate")?"fuzzy":"unlinked"}function sa(e){return ii(zt(e==null?void 0:e.discord_id))}function _r(e){return ii(Ht(e==null?void 0:e.account_name))}function si(e){const t=Ht(e),r=Si({mode:"eso-to-discord",esoAccountName:e}),n=t.filter(s=>String(s.link_status||"").trim().toLowerCase()==="linked").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean),i=t.filter(s=>String(s.link_status||"").trim().toLowerCase()==="candidate").map(s=>s.discord_server_nickname||s.discord_display_name||s.discord_username||s.discord_user_id||"").filter(Boolean);return[r.label,r.title,n.join(" "),i.join(" ")].filter(Boolean).join(" ")}function oi(e,t){return!e||e.size===0||e.has(t)?!0:t==="manual"&&e.has("linked")}function oa(){return`
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
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(it)}" />
        </div>

        ${J?`<div class="discord-data-error">${a(J)}</div>`:""}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${aa()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${fe?`: ${a(fe)}`:""}</div>
            ${ca()}
          </div>
        </div>
      </div>
    </div>
  `}function aa(){return ce&&x.length===0?'<div class="roster-history-muted">Searching...</div>':x.length===0?'<div class="roster-history-muted">No matches yet.</div>':`
    <div class="roster-history-match-list">
      ${x.map((e,t)=>`
        <button class="roster-history-match${t===P||e.account_name===fe?" is-selected":""}" type="button" data-roster-history-account="${u(e.account_name)}">
          <span>${a(e.account_name)}</span>
          <strong>${a(e.rank||"")}</strong>
          ${t===P?"<small>Enter</small>":""}
        </button>
      `).join("")}
    </div>
  `}function ca(){return fe?ce&&ae.length===0?'<div class="roster-history-muted">Loading history...</div>':ae.length===0?'<div class="roster-history-muted">No Guild Roster History found for this account.</div>':`
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
          ${ae.map(e=>`
            <tr>
              <td class="roster-history-when-cell">${a(Ii(e.timestamp))}</td>
              <td>${a(e.event_type||"")}</td>
              <td>${Xo(e.rank)}</td>
              <td>${a(e.officer||"")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>'}function da(){return`
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
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${te?"disabled":""}>
              ${te?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${re?"disabled":""}>
              ${re?"Running...":"Run"}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, and the most recent server activity time tracked by GuildSync.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${ne?"disabled":""}>
              ${ne?"Loading...":"Run"}
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
  `}function ai(){var e,t,r,n;L==="settings"&&((e=document.querySelector("#runAssociateTicketReportButton"))==null||e.addEventListener("click",()=>ci()),(t=document.querySelector("#runDiscordRankAuditReportButton"))==null||t.addEventListener("click",()=>ma()),(r=document.querySelector("#runDiscordLastSeenReportButton"))==null||r.addEventListener("click",()=>va()),(n=document.querySelector("#runMemberLinksReportButton"))==null||n.addEventListener("click",()=>$a()))}function ci(){Ge=!0,be="",d(),Bi()}function Ar(){Ge=!1,be="",d()}function la(){const e=ua(),t=fa(),r=Ue.length;return`
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
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${te?"disabled":""}>${te?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(r))} total row${r===1?"":"s"}</span>
        </div>

        ${be?`<div class="discord-data-error">${a(be)}</div>`:""}

        <div class="report-results-content">
          ${te&&r===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!te&&r===0?'<div class="roster-history-muted">No matching Associates found.</div>':""}
          ${r>0?hn("Eligible","Linked to Discord and eligible for promotion review.",e,"No linked eligible Associates found."):""}
          ${r>0?hn("Eligible if Linked","These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.",t,"No otherwise eligible Associates are missing Discord links."):""}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${a(li())}</textarea>
      </div>
    </div>
  `}function ua(){return Ue.filter(e=>String(e.report_group||e.eligibility_group||"").toLowerCase()==="eligible")}function fa(){return Ue.filter(e=>String(e.report_group||e.eligibility_group||"").toLowerCase()!=="eligible")}function hn(e,t,r,n){return`
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${a(e)}</h4>
          <p>${a(t)}</p>
        </div>
        <span>${a(String(r.length))} row${r.length===1?"":"s"}</span>
      </div>
      ${r.length>0?ha(r):`<div class="roster-history-muted report-section-empty">${a(n)}</div>`}
    </section>
  `}function ha(e=Ue){return`
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
              <td>${Pr(t.rank||"")}</td>
              <td>${a(jt(t.joined))}</td>
              <td>${a(Jt(t.purchased_tickets||0))}</td>
              <td>${a(di(t))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function di(e){return String(e.link_status||"").toLowerCase()==="linked"?e.discord_server_nickname||e.discord_display_name||e.discord_username||e.discord_user_id||"Linked":"Needs Link Review"}function li(){const e=[["Section","Account Name","Rank","Joined","Purchased Tickets","Discord Link"]];for(const t of Ue){const r=String(t.report_group||t.eligibility_group||"").toLowerCase()==="eligible"?"Eligible":"Eligible if Linked";e.push([r,t.account_name||"",t.rank||"",jt(t.joined),Jt(t.purchased_tickets||0),di(t)])}return e.map(t=>t.map(Kt).join("	")).join(`
`)}async function pa(){const e=li();if(await Yt(e)){f("associate-report-copied","Associates Promotion Eligible report copied to clipboard.",{ttlMs:h});return}const r=document.querySelector("#associateTicketReportTsv");r&&(r.focus(),r.select()),f("associate-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:h})}function ma(){Fe=!0,ve="",d(),Ci()}function Lr(){Fe=!1,ve="",d()}function ga(){const e=st.length;return`
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
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${re?"disabled":""}>${re?"Running...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(e))} total row${e===1?"":"s"}</span>
        </div>

        ${ve?`<div class="discord-data-error">${a(ve)}</div>`:""}

        <div class="report-results-content">
          ${re&&e===0?'<div class="roster-history-muted">Running report...</div>':""}
          ${!re&&e===0?'<div class="roster-history-muted">No Discord rank issues found.</div>':""}
          ${e>0?ya(st):""}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${a(hi())}</textarea>
      </div>
    </div>
  `}function ya(e=st){return`
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
              <td>${a(ui(t))}</td>
              <td>${a(t.discord_rank||"No matching rank role")}</td>
              <td>${a(t.eso_accounts||"No linked ESO account")}</td>
              <td>${a(t.eso_rank||"None")}</td>
              <td>${a(fi(t))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function ui(e){return e.server_nickname||e.global_name||e.username||e.discord_id||""}function fi(e){const t=String(e.issue_type||"").toLowerCase();return t==="no_linked_eso_account"?"No linked ESO account":t==="linked_eso_not_on_roster"?"Linked ESO account is not currently on the roster":t==="discord_role_above_roster_rank"?"Discord rank role is above linked ESO roster rank":t==="discord_role_below_roster_rank"?"Discord rank role is below linked ESO roster rank":t||"Review needed"}function hi(){const e=[["Discord Member","Username","Discord Rank Role","Discord Rank Roles Found","Linked ESO Account(s)","ESO Rank","Issue"]];for(const t of st)e.push([ui(t),t.username||"",t.discord_rank||"No matching rank role",t.discord_rank_roles||"",t.eso_accounts||"No linked ESO account",t.eso_rank||"None",fi(t)]);return e.map(t=>t.map(Kt).join("	")).join(`
`)}async function ba(){const e=hi();if(await Yt(e)){f("discord-rank-audit-report-copied","Discord Rank Audit report copied to clipboard.",{ttlMs:h});return}const r=document.querySelector("#discordRankAuditReportTsv");r&&(r.focus(),r.select()),f("discord-rank-audit-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:h})}function va(){ut=!0,ke="",Ve="",d(),Ti(),S.length===0&&!C&&Wt({silent:!0})}function pn(){ut=!1,ke="",Ve="",Ne="",ie="",d()}function ka(){const e=Gr(),t=Or.length;return`
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
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${ne?"disabled":""}>${ne?"Loading...":"Run Again"}</button>
          <span class="roster-history-muted">${a(String(t))} Discord member${t===1?"":"s"}</span>
        </div>

        <input
          id="discordLastSeenReportSearchInput"
          class="member-links-report-search-input discord-last-seen-search-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="Search Discord member, username, last seen action, or date..."
          value="${u(Ve)}"
        />

        ${ke?`<div class="discord-data-error discord-last-seen-report-error">${a(ke)}</div>`:""}

        <div class="report-results-content discord-last-seen-report-content">
          ${ne&&t===0?'<div class="roster-history-muted">Loading Discord roster last seen data...</div>':""}
          ${!ne&&t===0?'<div class="roster-history-muted">No Discord members found.</div>':""}
          ${t>0?Sa(e):""}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${a(mi(e))}</textarea>
      </div>
    </div>
  `}function Sa(e=[]){return`
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${Je("name","Discord Member")}</th>
            <th>${Je("eso","ESO")}</th>
            <th>${Je("date","Last Seen")}</th>
            <th>${Je("days","Days Since")}</th>
            <th>${Je("action","Action")}</th>
          </tr>
        </thead>
        <tbody>
          ${e.map(t=>`
            <tr class="discord-last-seen-row ${u(Ra(t.last_seen))}" data-discord-last-seen-row data-discord-last-seen-search="${u(pi(t))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${Ea(t)}
                  <span>${a(Oe(t))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${_a(t)}</td>
              <td>${a(Ur(t.last_seen))}</td>
              <td>${a(Fr(t.last_seen))}</td>
              <td>${a(Ot(t.last_seen_action))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `}function Je(e,t){const r=Ne===e,n=r?ie==="asc"?"\u25B2":"\u25BC":"\u2195",i=r?`${t}: ${ie==="asc"?"ascending":"descending"}`:`${t}: unsorted`;return`
    <button class="discord-sort-header discord-last-seen-sort-header${r?" active":""}" type="button" data-discord-last-seen-sort="${u(e)}" title="${u(i)}">
      <span>${a(t)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${a(n)}</span>
    </button>
  `}function Gr(){const e=[...Or],t=Ne,r=ie;if(!t||!r)return e;const n=r==="desc"?-1:1;return e.sort((i,s)=>{var o,l;if(t==="date"){const p=Number(i.last_seen||0)||0,m=Number(s.last_seen||0)||0;return(p-m)*n}if(t==="days")return(mn(i.last_seen)-mn(s.last_seen))*n;if(t==="action")return Ot(i.last_seen_action).localeCompare(Ot(s.last_seen_action),void 0,{sensitivity:"base"})*n;if(t==="eso"){const p=ot(i),m=ot(s),v={linked:0,candidate:1,unlinked:2},w=((o=v[p.status])!=null?o:9)-((l=v[m.status])!=null?l:9);return w!==0?w*n:p.esoAccountName.localeCompare(m.esoAccountName,void 0,{sensitivity:"base"})*n}return Oe(i).localeCompare(Oe(s),void 0,{sensitivity:"base"})*n})}function wa(e){Ne!==e?(Ne=e,ie="asc"):ie==="asc"?ie="desc":(Ne="",ie=""),d()}function Oe(e){return(e==null?void 0:e.server_nickname)||(e==null?void 0:e.global_name)||(e==null?void 0:e.username)||(e==null?void 0:e.discord_id)||""}function pi(e){return[Oe(e),e==null?void 0:e.server_nickname,e==null?void 0:e.global_name,e==null?void 0:e.username,e==null?void 0:e.discord_id,e==null?void 0:e.last_seen_action,Aa(e),Ur(e==null?void 0:e.last_seen),Fr(e==null?void 0:e.last_seen)].filter(Boolean).join(" ")}function ot(e){const t=Pa(e==null?void 0:e.discord_id),r=String((t==null?void 0:t.link_status)||"").trim().toLowerCase(),n=String((t==null?void 0:t.eso_account_name)||"").trim();return r==="linked"&&n?{status:"linked",className:"linked",label:"Linked ESO account",esoAccountName:n,title:`Linked ESO account: ${n}`}:(r==="candidate"||String((t==null?void 0:t.link_method)||"").trim().toLowerCase()==="fuzzy")&&n?{status:"candidate",className:"candidate",label:"Fuzzy ESO account candidate",esoAccountName:n,title:`Fuzzy ESO account candidate: ${n}`}:{status:"unlinked",className:"unlinked",label:"No linked ESO account",esoAccountName:"",title:"No linked ESO account"}}function _a(e){const t=ot(e);return`
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${u(t.className)}"
      title="${u(t.title)}"
      aria-label="${u(t.label)}"
      role="img"
    ></span>
  `}function Aa(e){const t=ot(e);return[t.status,t.label,t.esoAccountName].filter(Boolean).join(" ")}function La(e){const t=String((e==null?void 0:e.avatar)||"").trim(),r=String((e==null?void 0:e.discord_id)||"").trim();if(!t||!r)return"";if(/^https?:\/\//i.test(t))return t;const n=t.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(t)}.${n}?size=64`}function Ea(e){const t=Oe(e),r=t?t.slice(0,2).toUpperCase():"?",n=La(e);return n?`<span class="discord-member-avatar"><img src="${u(n)}" alt="" loading="lazy" /></span>`:`<span class="discord-member-avatar discord-last-seen-avatar-fallback">${a(r)}</span>`}function Ur(e){const t=Number(e);if(!t)return"Never";const r=new Date(t*1e3);if(Number.isNaN(r.getTime()))return String(e||"");const n=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(r).reduce((i,s)=>(i[s.type]=s.value,i),{});return`${n.month}/${n.day}/${n.year} ${n.hour}:${n.minute} ${n.dayPeriod}`}function Ra(e){const t=Number(e);if(!t)return"discord-last-seen-unknown";const r=(Date.now()-t*1e3)/864e5;return r>30?"discord-last-seen-red":r>=15?"discord-last-seen-yellow":"discord-last-seen-green"}function Fr(e){const t=Number(e);if(!t)return"Never";const r=Date.now()-t*1e3;if(!Number.isFinite(r))return"";if(r<0)return"0 days";const n=Math.floor(r/864e5);return`${n} day${n===1?"":"s"}`}function mn(e){const t=Number(e);if(!t)return Number.POSITIVE_INFINITY;const r=Date.now()-t*1e3;return Number.isFinite(r)?r<0?0:Math.floor(r/864e5):Number.POSITIVE_INFINITY}function Ot(e){return String(e||"").trim()||"None tracked"}function mi(e=Gr()){const t=[["Discord Member","ESO Link Status","ESO Account","Last Seen","Days Since","Action","Discord Username","Discord ID"]];for(const r of e){const n=ot(r);t.push([Oe(r),n.label||"",n.esoAccountName||"",Ur(r==null?void 0:r.last_seen),Fr(r==null?void 0:r.last_seen),Ot(r==null?void 0:r.last_seen_action),(r==null?void 0:r.username)||"",(r==null?void 0:r.discord_id)||""])}return t.map(r=>r.map(Kt).join("	")).join(`
`)}async function Da(){const e=Gr().filter(i=>{const s=H(Ve);return s?H(pi(i)).includes(s):!0}),t=mi(e);if(await Yt(t)){f("discord-last-seen-report-copied","Discord Last Seen report copied to clipboard.",{ttlMs:h});return}const n=document.querySelector("#discordLastSeenReportTsv");n&&(n.focus(),n.select()),f("discord-last-seen-report-copy-failed","Could not copy automatically. The grid text is selected for manual copy.",{ttlMs:h})}function $a(){We=!0,q="",d(),S.length===0&&!C&&Wt({silent:!0})}function Er(){We=!1,Vt="",Y=-1,d()}function Ma(){return`
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
          <span class="roster-history-muted">${a(String(S.length))} link/candidate row${S.length===1?"":"s"}</span>
        </div>

        <input
          id="memberLinksReportSearchInput"
          class="member-links-report-search-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="Search ESO or Discord member links..."
          value="${u(Vt)}"
        />

        ${q?`<div class="discord-data-error member-links-report-error">${a(q)}</div>`:""}

        <div class="report-results-content member-links-report-content">
          ${Ba()}
        </div>
      </div>
    </div>
  `}function gi(){var r,n,i;if(!We)return;(r=document.querySelector("#closeMemberLinksReportButton"))==null||r.addEventListener("click",Er),(n=document.querySelector("#refreshMemberLinksButton"))==null||n.addEventListener("click",()=>Wt()),(i=document.querySelector("#runMemberAutoLinkButton"))==null||i.addEventListener("click",()=>qa());const e=document.querySelector("#memberLinksReportSearchInput");e&&(e.addEventListener("input",xa),e.addEventListener("keydown",Oa),bi()),document.querySelectorAll("[data-accept-member-candidate]").forEach(s=>{s.addEventListener("click",()=>vi(s.dataset.acceptMemberCandidate||"",s.dataset.acceptMemberCandidateDiscordId||""))}),document.querySelectorAll("[data-unlink-member-link]").forEach(s=>{s.addEventListener("click",()=>Ia(s.dataset.unlinkMemberLink||"",s.dataset.unlinkMemberLinkDiscordId||""))});const t=document.querySelector(".member-links-report-overlay");t&&t.addEventListener("click",s=>{s.target===t&&Er()})}function gn(e){const t=String((e==null?void 0:e.link_status)||"").trim().toLowerCase(),r=String((e==null?void 0:e.link_method)||"").trim().toLowerCase();return t==="candidate"||r==="fuzzy"?0:t==="linked"?2:1}function yn(e){return[e==null?void 0:e.eso_account_name,e==null?void 0:e.discord_server_nickname,e==null?void 0:e.discord_display_name,e==null?void 0:e.discord_username,e==null?void 0:e.discord_user_id].filter(Boolean).join(" ")}function Na(e){return[e==null?void 0:e.eso_account_name,e==null?void 0:e.discord_username,e==null?void 0:e.discord_display_name,e==null?void 0:e.discord_server_nickname,e==null?void 0:e.discord_user_id,e==null?void 0:e.link_status,e==null?void 0:e.link_method,e==null?void 0:e.match_reason,e==null?void 0:e.match_field,qt(e)].filter(Boolean).join(" ")}function Ta(e){return[...Array.isArray(e)?e:[]].sort((t,r)=>{const n=gn(t)-gn(r);if(n!==0)return n;const i=yn(t).localeCompare(yn(r),void 0,{sensitivity:"base"});return i!==0?i:String((t==null?void 0:t.discord_user_id)||"").localeCompare(String((r==null?void 0:r.discord_user_id)||""),void 0,{sensitivity:"base"})})}function Ca(e){const t=qt(e);let r="";t==="Username"?r=(e==null?void 0:e.discord_username)||"":t==="Global Name"?r=(e==null?void 0:e.discord_display_name)||"":t==="Server Nickname"&&(r=(e==null?void 0:e.discord_server_nickname)||""),r||(r=(e==null?void 0:e.discord_server_nickname)||(e==null?void 0:e.discord_display_name)||(e==null?void 0:e.discord_username)||(e==null?void 0:e.discord_user_id)||"");const n=t?` <span class="member-link-report-match-field">(${a(t)})</span>`:"";return`<span class="member-link-report-discord-name">${a(r)}</span>${n}`}function Ba(){return C&&S.length===0?'<div class="roster-history-muted">Loading member links...</div>':!Array.isArray(S)||S.length===0?'<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>':`
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
          ${Ta(S).map(t=>{var s;const r=String(t.link_status||"").trim().toLowerCase(),n=String(t.link_method||"").trim().toLowerCase(),i=Ca(t);return`
              <tr data-member-links-report-row data-member-links-report-search="${u(Na(t))}">
                <td>${a(t.eso_account_name||"")}</td>
                <td>${i}</td>
                <td class="member-links-status-col">${a(r||"")}</td>
                <td class="member-links-method-col">${a(n||"")}${Number(t.locked||0)===1?" \u{1F512}":""}</td>
                <td class="member-links-action-col">
                  <div class="member-link-actions">
                    ${r==="candidate"?`<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${u(t.eso_account_name||"")}" data-accept-member-candidate-discord-id="${u(t.discord_user_id||"")}" aria-label="Accept candidate link" title="Accept candidate link">\u2713</button>`:""}
                    ${r==="linked"?`<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${u(t.eso_account_name||"")}" data-unlink-member-link-discord-id="${u(t.discord_user_id||"")}" aria-label="Unlink this ESO/Discord pair" title="Unlink this ESO/Discord pair">\u{1F5D1}</button>`:""}
                  </div>
                </td>
                <td class="member-links-confidence-col">${a(String((s=t.match_confidence)!=null?s:""))}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `}function yi(){return[...document.querySelectorAll("[data-member-links-report-row]")].filter(e=>e.offsetParent!==null)}function bn(e){const t=yi();if(t.forEach(n=>n.classList.remove("member-links-report-row-active")),t.length===0){Y=-1;return}Y=Math.max(0,Math.min(e,t.length-1));const r=t[Y];r.classList.add("member-links-report-row-active"),r.scrollIntoView({block:"nearest"})}function bi(){const e=H(Vt),t=[...document.querySelectorAll("[data-member-links-report-row]")];let r=0;t.forEach(i=>{const s=H(i.dataset.memberLinksReportSearch||i.textContent||""),o=!e||s.includes(e);i.hidden=!o,i.classList.remove("member-links-report-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinksReportSearchEmpty");n&&(n.hidden=r!==0),Y=-1}function xa(e){Vt=e.target.value||"",bi()}function Oa(e){if(e.key==="Enter"){e.preventDefault();return}if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;e.preventDefault();const t=yi();if(t.length===0)return;if(e.key==="ArrowDown"){const n=Y<0?0:Y+1;bn(n>=t.length?t.length-1:n);return}const r=Y<0?t.length-1:Y-1;bn(r<0?0:r)}async function Wt(e={}){if(!(c!=null&&c.connected)){q="You must be connected to load member links.",d();return}C=!0,q="",e.silent||d();try{const t=await A("guildsync:request-member-links",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load member links.");S=Array.isArray(t.links)?t.links:[]}catch(t){q=k(t)}finally{C=!1,d()}}async function qa(){if(!(c!=null&&c.connected)||!g.logged_in){q="You must be logged in and connected to run auto-linking.",d();return}C=!0,q="",d();try{const e=await A("guildsync:run-member-auto-linking",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to run auto-linking.");S=Array.isArray(e.links)?e.links:[],f("member-auto-link",e.message||"Member auto-linking complete.",{ttlMs:h})}catch(e){q=k(e)}finally{C=!1,d()}}async function vi(e,t=""){try{const r=await A("guildsync:accept-member-link-candidate",{esoAccountName:e,discordUserId:t},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to accept candidate.");S=Array.isArray(r.links)?r.links:S,f("member-link-accepted",r.message||"Candidate accepted as a link.",{ttlMs:h})}catch(r){q=k(r),f("member-link-accept-error",q,{ttlMs:h})}}async function Ia(e,t=""){if(!!await ti({title:"Unlink Member?",message:`Remove the link between ${e} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})){try{const n=await A("guildsync:manual-unlink-member",{esoAccountName:e,discordUserId:t},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to unlink member.");S=Array.isArray(n.links)?n.links:S,f("member-link-unlinked",n.message||"Member link removed.",{ttlMs:h})}catch(n){q=k(n)}d()}}function Ee(e){return String(e||"").trim().replace(/^@+/,"").toLowerCase()}function Ht(e){const t=Ee(e);return t?S.filter(r=>Ee(r.eso_account_name)===t):[]}function zt(e){const t=String(e||"").trim();return t?S.filter(r=>String(r.discord_user_id||"").trim()===t):[]}function ki(e=[]){const t=Array.isArray(e)?e.filter(Boolean):[];if(t.length===0)return null;const r=t.filter(i=>String(i.link_status||"").trim().toLowerCase()==="linked");if(r.length>0){const i=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="manual");if(i)return i;const s=r.find(o=>String(o.link_method||"").trim().toLowerCase()==="exact");return s||r[0]}const n=t.find(i=>String(i.link_status||"").trim().toLowerCase()==="candidate");return n||t[0]}function Pa(e){return ki(zt(e))}function Ga(e){return`${Ee(e==null?void 0:e.eso_account_name)}::${String((e==null?void 0:e.discord_user_id)||"").trim()}`}function Vr(){return b?b.mode==="discord-to-eso"?zt(b.discordUserId):Ht(b.esoAccountName):[]}function Ua(e){const t=String(e||"").trim(),r=T.find(n=>String(n.discord_id||"").trim()===t);return r&&(r.server_nickname||r.global_name||r.username||r.discord_id)||t}function Si(e){const t=(e==null?void 0:e.mode)||"",r=t==="discord-to-eso"?zt(e.discordUserId):Ht(e.esoAccountName),n=ki(r),i=String((n==null?void 0:n.link_status)||"").trim().toLowerCase(),s=r.filter(l=>String(l.link_status||"").trim().toLowerCase()==="linked").length,o=r.filter(l=>String(l.link_status||"").trim().toLowerCase()==="candidate").length;return s>0?{color:"green",label:"Linked",className:"linked",title:`Linked to ${t==="discord-to-eso"?s===1?n.eso_account_name:`${s} ESO accounts`:s===1?n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member":`${s} Discord accounts`}`}:i==="candidate"||o>0?{color:"yellow",label:"Candidate",className:"candidate",title:`Candidate link: ${t==="discord-to-eso"?n.eso_account_name:n.discord_server_nickname||n.discord_display_name||n.discord_username||n.discord_user_id||"Discord member"}`}:i==="blocked"||Number((n==null?void 0:n.locked)||0)===1?{color:"gray",label:"Unlinked",className:"blocked",title:"Unlinked. One or more automatic pairings are blocked, but manual linking is available."}:{color:"red",label:"Not linked",className:"unlinked",title:"Not linked"}}function wi(e){const t=(e==null?void 0:e.mode)||"",r=t==="discord-to-eso"?e.discordUserId:e.esoAccountName,n=Si(e);return`
    <button
      class="member-link-status-dot member-link-status-${u(n.className)}"
      type="button"
      title="${u(n.title)}"
      aria-label="${u(n.label)}"
      data-open-member-link-dialog="${u(t)}"
      data-member-link-value="${u(r||"")}"
    ></button>
  `}function Fa(){return b?b.mode==="discord-to-eso"?Ua(b.discordUserId):b.esoAccountName||"":""}function _i(e){const t=String(e||"").trim().toLowerCase();return t==="discord_username"||t==="username"?"Username":t==="discord_display_name"||t==="global_name"||t==="display_name"?"Global Name":t==="discord_server_nickname"||t==="server_nickname"||t==="nickname"?"Server Nickname":""}function qt(e){const t=_i((e==null?void 0:e.match_field)||(e==null?void 0:e.matched_field)||(e==null?void 0:e.discord_match_field));if(t)return t;const r=String((e==null?void 0:e.match_reason)||"").toLowerCase();if(r.includes("discord_username")||r.includes("username"))return"Username";if(r.includes("discord_display_name")||r.includes("global")||r.includes("display"))return"Global Name";if(r.includes("discord_server_nickname")||r.includes("server")||r.includes("nickname"))return"Server Nickname";const n=String((e==null?void 0:e.link_method)||"").trim().toLowerCase();if(n==="exact"||n==="fuzzy"){const i=(e==null?void 0:e.eso_account_name)||"",s=[{field:"Username",value:e==null?void 0:e.discord_username},{field:"Global Name",value:e==null?void 0:e.discord_display_name},{field:"Server Nickname",value:e==null?void 0:e.discord_server_nickname}];let o=null;for(const l of s){const p=Va(i,l.value);(!o||p>o.score)&&(o={...l,score:p})}if(o&&o.score>0)return o.field}return""}function H(e){return String(e||"").toLowerCase().replace(/^@+/,"").replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").replace(/[^a-z0-9]/g,"")}function Va(e,t){const r=H(e),n=H(t);if(!r||!n)return 0;if(r===n)return 100;if((r.includes(n)||n.includes(r))&&Math.min(r.length,n.length)>=4)return 88;const i=Math.abs(r.length-n.length),s=[...r].findIndex((l,p)=>l!==n[p]),o=s===-1?Math.min(r.length,n.length):s;return Math.max(0,Math.min(75,Math.round(o*10-i*3)))}function Wa(e){const t=String(e||"").trim().toLowerCase();return t==="blocked"||t==="unlinked"?"unlinked":t||"unlinked"}function Ha(e){const t=String(e||"").trim().toLowerCase();return t==="manual_unlink"?"auto-link disabled":t||"none"}function za(e){var p;const t=e.discord_server_nickname||e.discord_display_name||e.discord_username||e.discord_user_id||"",r=Number(e.locked||0)===1?"Auto-link blocked":"Auto-managed",n=String(e.link_status||"").trim().toLowerCase(),i=n==="linked",s=n==="candidate",o=i?"Current Link":s?"Suggested Link":"Blocked Link",l=i?`<button
        class="member-link-trash-button"
        type="button"
        aria-label="Unlink this ESO/Discord pair"
        title="Unlink this ESO/Discord pair"
        data-unlink-dialog-member-link
        data-unlink-eso-account="${u(e.eso_account_name||"")}"
        data-unlink-discord-user-id="${u(e.discord_user_id||"")}"
      >\u{1F5D1}</button>`:s?`<button
          class="member-link-approve-button"
          type="button"
          aria-label="Approve suggested link"
          title="Approve suggested link"
          data-accept-dialog-member-candidate="${u(e.eso_account_name||"")}"
          data-accept-dialog-discord-user-id="${u(e.discord_user_id||"")}"
        >\u2713</button>`:"";return`
    <div class="member-link-current-card">
      <div class="member-link-current-details">
        <div class="member-link-current-kind">${a(o)}</div>
        <div><span>ESO:</span> ${a(e.eso_account_name||"")}</div>
        <div><span>Discord:</span> ${a(t)}</div>
        <div><span>Status:</span> ${a(Wa(e.link_status))} \xB7 ${a(Ha(e.link_method))} \xB7 ${a(String((p=e.match_confidence)!=null?p:""))}% \xB7 ${a(r)}</div>
        ${qt(e)?`<div><span>Matched:</span> Matched on ${a(qt(e))}</div>`:""}
      </div>
      ${l}
    </div>
  `}function ja(){const e=Vr();return e.length?[...e].sort((r,n)=>{var p,m;const i=String(r.link_status||"").trim().toLowerCase(),s=String(n.link_status||"").trim().toLowerCase(),o={linked:0,candidate:1,blocked:2,unlinked:3},l=((p=o[i])!=null?p:9)-((m=o[s])!=null?m:9);return l!==0?l:Number(n.match_confidence||0)-Number(r.match_confidence||0)}).map(r=>za(r)).join(""):'<div class="member-link-current-empty">No current link.</div>'}function Ka(){if(xe)return'<div class="member-link-options-muted">Loading suggested matches...</div>';if(Z)return`<div class="discord-data-error">${a(Z)}</div>`;if(!Array.isArray(Se)||Se.length===0)return'<div class="member-link-options-muted">No additional suggested matches found.</div>';const e=new Set(Vr().map(r=>Ga(r))),t=[...Se].filter(r=>{const n=(b==null?void 0:b.mode)==="discord-to-eso"?`${Ee(r.account_name)}::${String(b.discordUserId||"").trim()}`:`${Ee(b==null?void 0:b.esoAccountName)}::${String(r.discord_id||"").trim()}`;return!e.has(n)}).sort((r,n)=>{const i=Number(n.confidence||0)-Number(r.confidence||0);return i!==0?i:vn(r).localeCompare(vn(n),void 0,{sensitivity:"base"})});return t.length===0?'<div class="member-link-options-muted">No additional suggested matches found.</div>':`
    <div class="member-link-option-list">
      ${t.map(r=>Ya(r)).join("")}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `}function vn(e){return((b==null?void 0:b.mode)||"")==="discord-to-eso"?String(e.account_name||""):String(e.server_nickname||e.global_name||e.username||e.discord_id||"")}function Ya(e,t={}){var w,N,Re;const r=(b==null?void 0:b.mode)||"",n=r==="discord-to-eso"?e.account_name:e.server_nickname||e.global_name||e.username||e.discord_id||"Discord member",i=_i(e.matchField||e.match_field||e.discordMatchField||e.discord_match_field),s=r==="discord-to-eso"?`Rank: ${e.rank||""}`:[e.username,e.global_name,e.server_nickname].filter(Boolean).join(" \xB7 "),o=[s,i?`Matched on ${i}`:""].filter(Boolean).join(" \u2022 "),l=r==="discord-to-eso"?e.account_name:e.discord_id,p=t.disabled===!0,m=[n,s,o,e.account_name,e.username,e.global_name,e.server_nickname,e.discord_id].filter(Boolean).join(" "),v=[n,o,`${(w=e.confidence)!=null?w:0}%`].filter(Boolean).join(" \u2022 ");return`
    <button class="member-link-option-row" type="button" data-member-link-option-value="${u(l||"")}" data-member-link-option-search="${u(m)}" title="${u(v)}" ${p?"disabled":""}>
      <span class="member-link-option-name" title="${u(n||"")}">${a(n||"")}</span>
      <span class="member-link-option-subtitle" title="${u(o||"")}">${a(o||"")}</span>
      <span class="member-link-option-confidence" title="${u(String((N=e.confidence)!=null?N:0))}%">${a(String((Re=e.confidence)!=null?Re:0))}%</span>
    </button>
  `}function Ja(){const e=(b==null?void 0:b.mode)||"",t=Fa(),r=e==="discord-to-eso"?"ESO Account":"Discord Member";return`
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
          <section class="member-link-dialog-section">
            <h4>Current Link</h4>
            ${ja()}
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
              value="${u(ft)}"
            />
            ${Ka()}
          </section>
        </div>

      </div>
    </div>
  `}async function Ai(e,t){if(!(c!=null&&c.connected)||!_()){f("member-link-not-connected","You must be logged in and connected to manage member links.",{ttlMs:h});return}pe=!0,b=e==="discord-to-eso"?{mode:e,discordUserId:t}:{mode:"eso-to-discord",esoAccountName:t},Se=[],xe=!0,Z="",ft="",U=-1,d();try{if(!Array.isArray(S)||S.length===0){const i=await A("guildsync:request-member-links",{},3e4);i!=null&&i.ok&&(S=Array.isArray(i.links)?i.links:[])}const n=await A("guildsync:request-member-link-options",e==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:t}:{mode:"eso-to-discord",accountName:t},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load link suggestions.");Se=Array.isArray(n.options)?n.options:[]}catch(r){Z=k(r)}finally{xe=!1,d()}}function qe(){document.removeEventListener("keydown",Rr),pe=!1,b=null,Se=[],xe=!1,Z="",ft="",U=-1,d()}function Li(){return[...document.querySelectorAll(".member-link-option-row")].filter(e=>e.offsetParent!==null&&!e.disabled)}function kn(e){const t=Li();if(t.forEach(n=>n.classList.remove("member-link-option-row-active")),t.length===0){U=-1;return}U=Math.max(0,Math.min(e,t.length-1));const r=t[U];r.classList.add("member-link-option-row-active"),r.scrollIntoView({block:"nearest"})}function Ei(){const e=H(ft),t=[...document.querySelectorAll(".member-link-option-row")];let r=0;t.forEach(i=>{const s=H(i.dataset.memberLinkOptionSearch||i.textContent||""),o=!e||s.includes(e);i.hidden=!o,i.classList.remove("member-link-option-row-active"),o&&(r+=1)});const n=document.querySelector("#memberLinkSuggestionSearchEmpty");n&&(n.hidden=r!==0),U=-1}function Qa(e){ft=e.target.value||"",Ei()}function Xa(e){if(e.key==="Enter"){e.preventDefault();return}if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;e.preventDefault();const t=Li();if(t.length===0)return;if(e.key==="ArrowDown"){const n=U<0?0:U+1;kn(n>=t.length?t.length-1:n);return}const r=U<0?t.length-1:U-1;kn(r<0?0:r)}function Rr(e){!pe||e.key==="Escape"&&(e.preventDefault(),qe())}async function Za(e){if(!(!b||!e))try{const t=b.mode==="discord-to-eso"?{esoAccountName:e,discordUserId:b.discordUserId}:{esoAccountName:b.esoAccountName,discordUserId:e},r=await A("guildsync:manual-link-member",t,3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to link members.");S=Array.isArray(r.links)?r.links:S,f("member-link-saved",r.message||"Member link saved.",{ttlMs:h}),qe()}catch(t){Z=k(t),d()}}async function ec(e,t=""){await vi(e,t),qe()}async function tc(){if(!!b){xe=!0,Z="",d();try{const e=b.mode==="discord-to-eso"?{mode:"discord-to-eso",discordUserId:b.discordUserId}:{mode:"eso-to-discord",accountName:b.esoAccountName},t=await A("guildsync:request-member-link-options",e,3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to load link suggestions.");Se=Array.isArray(t.options)?t.options:[]}catch(e){Z=k(e)}finally{xe=!1,d()}}}async function rc(e="",t=""){const r=Vr().find(i=>Ee(i.eso_account_name)===Ee(e)&&String(i.discord_user_id||"").trim()===String(t||"").trim());if(!(!r||!await ti({title:"Unlink Member?",message:"Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.",confirmLabel:"Unlink",cancelLabel:"Cancel",confirmClass:"danger"})))try{const i=await A("guildsync:manual-unlink-member",{esoAccountName:r.eso_account_name,discordUserId:r.discord_user_id},3e4);if(!(i!=null&&i.ok))throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Failed to unlink member.");S=Array.isArray(i.links)?i.links:S,f("member-link-unlinked",i.message||"Member link removed.",{ttlMs:h}),await tc()}catch(i){Z=k(i),d()}}function Ri(){var r;if(!pe)return;document.removeEventListener("keydown",Rr),document.addEventListener("keydown",Rr),(r=document.querySelector("#closeMemberLinkDialogButton"))==null||r.addEventListener("click",qe);const e=document.querySelector("#memberLinkSuggestionSearchInput");e&&(e.addEventListener("input",Qa),e.addEventListener("keydown",Xa),Ei()),document.querySelectorAll("[data-unlink-dialog-member-link]").forEach(n=>{n.addEventListener("click",()=>rc(n.dataset.unlinkEsoAccount||"",n.dataset.unlinkDiscordUserId||""))}),document.querySelectorAll("[data-member-link-option-value]").forEach(n=>{n.addEventListener("click",()=>Za(n.dataset.memberLinkOptionValue||""))}),document.querySelectorAll("[data-accept-dialog-member-candidate]").forEach(n=>{n.addEventListener("click",()=>ec(n.dataset.acceptDialogMemberCandidate||"",n.dataset.acceptDialogDiscordUserId||""))});const t=document.querySelector(".member-link-dialog-overlay");t&&t.addEventListener("click",n=>{n.target===t&&qe()})}function Di(){var t,r,n;if(!Ge)return;(t=document.querySelector("#closeAssociateTicketReportButton"))==null||t.addEventListener("click",Ar),(r=document.querySelector("#rerunAssociateTicketReportButton"))==null||r.addEventListener("click",()=>Bi()),(n=document.querySelector("#copyAssociateTicketReportGridButton"))==null||n.addEventListener("click",()=>pa());const e=document.querySelector(".report-results-overlay");e&&e.addEventListener("click",i=>{i.target===e&&Ar()})}function $i(){var t,r,n;if(!Fe)return;(t=document.querySelector("#closeDiscordRankAuditReportButton"))==null||t.addEventListener("click",Lr),(r=document.querySelector("#rerunDiscordRankAuditReportButton"))==null||r.addEventListener("click",()=>Ci()),(n=document.querySelector("#copyDiscordRankAuditReportGridButton"))==null||n.addEventListener("click",()=>ba());const e=document.querySelector(".report-results-overlay");e&&e.addEventListener("click",i=>{i.target===e&&Lr()})}function Mi(){var r,n,i;if(!ut)return;(r=document.querySelector("#closeDiscordLastSeenReportButton"))==null||r.addEventListener("click",pn),(n=document.querySelector("#rerunDiscordLastSeenReportButton"))==null||n.addEventListener("click",()=>Ti()),(i=document.querySelector("#copyDiscordLastSeenReportGridButton"))==null||i.addEventListener("click",()=>Da()),document.querySelectorAll("[data-discord-last-seen-sort]").forEach(s=>{s.addEventListener("click",()=>wa(s.dataset.discordLastSeenSort||""))});const e=document.querySelector("#discordLastSeenReportSearchInput");e&&(e.addEventListener("input",nc),Ni());const t=document.querySelector(".discord-last-seen-report-overlay");t&&t.addEventListener("click",s=>{s.target===t&&pn()})}function nc(e){Ve=e.target.value||"",Ni()}function Ni(){const e=H(Ve),t=[...document.querySelectorAll("[data-discord-last-seen-row]")];let r=0;t.forEach(i=>{const s=H(i.dataset.discordLastSeenSearch||i.textContent||""),o=!e||s.includes(e);i.hidden=!o,o&&(r+=1)});const n=document.querySelector("#discordLastSeenReportSearchEmpty");n&&(n.hidden=r!==0)}async function Ti(){if(!(c!=null&&c.connected)||!_()){ke="You must be logged in and connected to run this report.",d();return}ne=!0,ke="",d();try{const e=await A("guildsync:request-discord-member-dataJSON",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to load Discord roster data.");T=Jr(e.members),Or=[...T]}catch(e){ke=k(e)}finally{ne=!1,d(),X("discordLastSeenReportSearchInput")}}async function Ci(){if(!(c!=null&&c.connected)||!_()){ve="You must be logged in and connected to run this report.",d();return}re=!0,ve="",d();try{const e=await A("guildsync:request-discord-rank-audit-report",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to run report.");st=Array.isArray(e.rows)?e.rows:[]}catch(e){ve=k(e)}finally{re=!1,d()}}async function Bi(){if(!(c!=null&&c.connected)||!_()){be="You must be logged in and connected to run this report.",d();return}te=!0,be="",d();try{const e=await A("guildsync:request-associate-ticket-report",{},3e4);if(!(e!=null&&e.ok))throw new Error((e==null?void 0:e.message)||(e==null?void 0:e.error)||"Failed to run report.");Ue=Array.isArray(e.rows)?e.rows:[]}catch(e){be=k(e)}finally{te=!1,d()}}function Dr(){const e=String(ze||"").trim().toLowerCase();return e?G.filter(t=>String(t.account_name||"").trim()).filter(t=>String(t.account_name||"").toLowerCase().includes(e)).slice().sort((t,r)=>{const n=String(t.account_name||"").toLowerCase(),i=String(r.account_name||"").toLowerCase(),s=n.startsWith(e)?0:1,o=i.startsWith(e)?0:1;return s!==o?s-o:n.localeCompare(i)}).slice(0,20):[]}function Sn(e){const t=String(e||"").trim();$.accountName=t,ze=t,j="",d(),X("manualTicketAccountSearchInput")}function X(e){window.setTimeout(()=>{const t=document.querySelector(`#${e}`);if(!t)return;t.focus();const r=String(t.value||"").length;typeof t.setSelectionRange=="function"&&t.setSelectionRange(r,r)},0)}function ic(){const e=Dr(),t=String($.accountName||"").trim();return`
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Bi-Weekly Tickets</h3>
            <p>Add free/manual raffle tickets such as FFTG. These do not count as purchased tickets.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">\xD7</button>
        </div>

        ${j?`<div class="discord-data-error">${a(j)}</div>`:""}

        <div class="manual-ticket-form">
          <label class="manual-ticket-member-field">
            <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${u(ze)}" autocomplete="off" />
          </label>

          ${t?`<div class="roster-history-muted">Selected: ${a(t)}</div>`:""}

          <div class="roster-history-match-list manual-ticket-match-list">
            ${e.length===0?'<div class="roster-history-muted">No matching names</div>':e.map((r,n)=>`
                <button class="roster-history-match${n===z||r.account_name===t?" is-selected":""}" type="button" data-manual-ticket-account="${u(r.account_name)}">
                  <span>${a(r.account_name)}</span>
                  <strong>${a(r.rank||"")}</strong>
                  ${n===z?"<small>Enter</small>":""}
                </button>
              `).join("")}
          </div>

          <div class="manual-ticket-entry-row">
            <label class="manual-ticket-note-field">
              <textarea id="manualTicketNoteInput" class="discord-search-input manual-ticket-note-input" rows="4" placeholder="Enter a reason such as FFTG">${a($.note)}</textarea>
            </label>
            <label class="manual-ticket-count-field">
              <div class="manual-ticket-number-wrap">
                <input id="manualTicketCountInput" class="discord-search-input manual-ticket-count-input" type="number" min="1" step="1" inputmode="numeric" placeholder="# Tickets" value="${u($.tickets)}" />
                <div class="manual-ticket-number-buttons" aria-hidden="true">
                  <button id="manualTicketCountUpButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2303</button>
                  <button id="manualTicketCountDownButton" class="manual-ticket-number-button" type="button" tabindex="-1">\u2304</button>
                </div>
              </div>
            </label>
          </div>
          <div class="manual-ticket-actions">
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${Ct?"disabled":""}>${Ct?"Saving...":"Add Manual Tickets"}</button>
          </div>
        </div>
      </div>
    </div>
  `}function xi(){var i,s,o,l,p;if(!Q)return;(i=document.querySelector("#closeManualBiweeklyTicketButton"))==null||i.addEventListener("click",()=>{Q=!1,d()});const e=document.querySelector("#manualTicketAccountSearchInput");e&&(e.addEventListener("input",m=>{ze=m.target.value||"",$.accountName="",z=Dr().length>0?0:-1,d(),X("manualTicketAccountSearchInput")}),e.addEventListener("keydown",m=>{const v=Dr();if(m.key==="ArrowDown"||m.key==="ArrowUp"){if(v.length===0)return;m.preventDefault();const N=m.key==="ArrowDown"?1:-1;z=((z<0?0:z)+N+v.length)%v.length,d(),X("manualTicketAccountSearchInput");return}if(m.key!=="Enter")return;m.preventDefault();const w=v[z>=0?z:0];w!=null&&w.account_name&&Sn(w.account_name)})),document.querySelectorAll("[data-manual-ticket-account]").forEach(m=>{m.addEventListener("click",()=>{Sn(m.dataset.manualTicketAccount||"")})}),(s=document.querySelector("#manualTicketNoteInput"))==null||s.addEventListener("input",m=>{$.note=m.target.value||""});const t=document.querySelector("#manualTicketCountInput");t==null||t.addEventListener("input",m=>{const v=String(m.target.value||"").replace(/\D/g,"");m.target.value!==v&&(m.target.value=v),$.tickets=v});const r=m=>{const v=Number($.tickets)||0,w=Math.max(1,v+m);$.tickets=String(w),t&&(t.value=$.tickets,t.focus())};(o=document.querySelector("#manualTicketCountUpButton"))==null||o.addEventListener("click",()=>r(1)),(l=document.querySelector("#manualTicketCountDownButton"))==null||l.addEventListener("click",()=>r(-1)),(p=document.querySelector("#saveManualBiweeklyTicketButton"))==null||p.addEventListener("click",()=>sc());const n=document.querySelector(".roster-history-overlay");n&&n.addEventListener("click",m=>{m.target===n&&(Q=!1,d())})}async function sc(){const e=String($.accountName||"").trim(),t=String($.note||"").trim(),r=Number($.tickets);if(!e){j="Choose a guild member.",d();return}if(!t){j="Enter a reason or note.",d();return}if(!Number.isFinite(r)||r<=0){j="Enter the number of tickets to add.",d();return}Ct=!0,j="",d();try{const n=await A("guildsync:add-manual-biweekly-ticket-entry",{account_name:e,note:t,tickets:Math.floor(r)},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to add manual ticket entry.");Q=!1,$={accountName:"",note:"",tickets:""},ze="",z=-1,await Qt({silent:!0}),f("manual-ticket-added",n.message||"Manual ticket entry added.",{ttlMs:h})}catch(n){j=k(n)}finally{Ct=!1,d()}}function Oi(){const e=document.querySelector("#refreshRosterDataButton");e&&e.addEventListener("click",()=>pt());const t=document.querySelector("#openRosterHistoryButton");t&&t.addEventListener("click",()=>{Be=!0,J="",d()});const r=document.querySelector("#rosterMemberSearch");r&&(r.addEventListener("input",o=>{Tt=o.target.value||"",kr=o.target.selectionStart,Sr=o.target.selectionEnd,R=-1,d({restoreRosterSearchFocus:!0})}),r.addEventListener("keydown",oc)),document.querySelectorAll("[data-roster-sort-column]").forEach(o=>{o.addEventListener("click",()=>{ta(o.dataset.rosterSortColumn||"account_name")})});const n=document.querySelector("#rosterRankFilter");n&&n.addEventListener("change",o=>{const l=String(o.target.value||"").trim();l&&(ye.add(l),R=-1,d())}),document.querySelectorAll("[data-remove-roster-rank-filter]").forEach(o=>{o.addEventListener("click",()=>{const l=o.dataset.removeRosterRankFilter||"";ye.delete(l),R=-1,d()})});const i=document.querySelector("#rosterLinkStatusFilter");i&&i.addEventListener("change",o=>{const l=String(o.target.value||"").trim();l&&(Me.add(l),R=-1,d())}),document.querySelectorAll("[data-remove-roster-link-status-filter]").forEach(o=>{o.addEventListener("click",()=>{const l=o.dataset.removeRosterLinkStatusFilter||"";Me.delete(l),R=-1,d()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(o=>{o.addEventListener("click",()=>Ai(o.dataset.openMemberLinkDialog||"",o.dataset.memberLinkValue||""))});const s=document.querySelector("#clearRosterFiltersButton");s&&s.addEventListener("click",()=>{Tt="",ye.clear(),Me.clear(),K="",M="",R=-1,d()}),ac()}function oc(e){if(e.key!=="ArrowDown"&&e.key!=="ArrowUp"&&e.key!=="Enter")return;if(e.key==="Enter"){e.preventDefault();return}const t=Array.from(document.querySelectorAll(".eso-roster-row[data-roster-row-index]"));if(t.length===0){R=-1;return}e.preventDefault(),e.key==="ArrowDown"?R=R<0?0:Math.min(R+1,t.length-1):e.key==="ArrowUp"&&(R=R<0?t.length-1:Math.max(R-1,0)),t.forEach((n,i)=>{n.classList.toggle("roster-search-active-row",i===R)});const r=t[R];r&&typeof r.scrollIntoView=="function"&&r.scrollIntoView({block:"nearest",inline:"nearest"})}function ac(){const e=document.querySelector("#closeRosterHistoryButton");e&&e.addEventListener("click",()=>{Be=!1,d()});const t=document.querySelector("#rosterHistorySearchInput");t&&(t.addEventListener("input",r=>{if(it=r.target.value||"",P=-1,!it.trim()){clearTimeout(dr),J="",x=[],fe="",ae=[],ce=!1,d(),X("rosterHistorySearchInput");return}clearTimeout(dr),dr=setTimeout(()=>{cc({auto:!0,keepFocus:!0})},250)}),t.addEventListener("keydown",r=>{if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(x.length===0)return;r.preventDefault();const i=r.key==="ArrowDown"?1:-1;P=((P<0?0:P)+i+x.length)%x.length,d(),X("rosterHistorySearchInput");return}if(r.key!=="Enter")return;r.preventDefault();const n=x[P>=0?P:0];n!=null&&n.account_name&&wn(n.account_name)})),document.querySelectorAll("[data-roster-history-account]").forEach(r=>{r.addEventListener("click",()=>{wn(r.dataset.rosterHistoryAccount||"")})})}async function cc(e={}){const t=it.trim();if(!t){J="",x=[],P=-1,fe="",ae=[],ce=!1,d(),e.keepFocus&&X("rosterHistorySearchInput");return}ce=!0,J="",x=[],P=-1,fe="",ae=[],d(),e.keepFocus&&X("rosterHistorySearchInput");try{const r=await A("guildsync:request-roster-rank-history",{query:t},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||(r==null?void 0:r.error)||"Failed to search roster rank history.");x=dc(r.matches),P=x.length>0?0:-1}catch(r){J=k(r)}finally{ce=!1,d(),e.keepFocus&&X("rosterHistorySearchInput")}}async function wn(e,t={}){const r=String(e||"").trim();if(!!r){fe=r,it=r,ae=[],ce=!0,J="",d();try{const n=await A("guildsync:request-roster-stream-history",{account_name:r},3e4);if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||(n==null?void 0:n.error)||"Failed to load roster stream history.");ae=lc(n.events)}catch(n){J=k(n)}finally{ce=!1,t.keepLoading||d()}}}function dc(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>({account_name:String(t.account_name||t.accountName||"").trim(),rank:String(t.rank||t.rankName||"").trim()})):[]}function lc(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>{var r,n;return{event_type:String(t.event_type||t.eventType||"").trim(),rank:String(t.rank||t.rankName||"").trim(),timestamp:(n=(r=t.timestamp)!=null?r:t.timestampS)!=null?n:"",officer:String(t.officer||"").trim()}}):[]}function qi(e){return Array.isArray(e)?e.filter(t=>t&&typeof t=="object").map(t=>{var r;return{account_name:String(t.account_name||t.accountName||"").trim(),rank:String(t.rank||t.rankName||"").trim(),joined:(r=t.joined)!=null?r:""}}).sort((t,r)=>t.account_name.localeCompare(r.account_name)):[]}function uc(e){if(!e)return"Never";const t=new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleString()}function jt(e){const t=Number(e);return t?new Date(t*1e3).toLocaleDateString():""}function Ii(e){const t=Number(e);return t?new Date(t*1e3).toLocaleString():""}async function fc(e={}){G=qi(e.members),Nt=e.last_refresh||new Date().toISOString(),L==="eso-members"&&d(),f("roster-data-updated",`Roster data updated. Loaded ${G.length} member record${G.length===1?"":"s"}.`,{ttlMs:h})}async function pt(e={}){if(!!(c!=null&&c.connected)){ue=!0,d();try{const t=await A("guildsync:request-roster-data",{},3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Failed to retrieve roster data.");G=qi(t.members),Nt=t.last_refresh||Nt,e.silent||f("roster-data-loaded",`Loaded ${G.length} roster member${G.length===1?"":"s"}.`,{ttlMs:h})}catch(t){f("roster-data-error",k(t),{ttlMs:h})}finally{ue=!1,d()}}}async function hc(e={}){var t;if(!!_()){if(!(c!=null&&c.connected)){f("roster-data-pending","Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:h});return}ue=!0,d();try{const r=await mo(e);if(!(r!=null&&r.ok)){f("roster-data-pending",(r==null?void 0:r.message)||"Roster SavedVariables changed, but no roster data was sent yet.",{ttlMs:h});return}const n={local_upload_id:Pi(),authenticated_username:he(),authenticated_discord_user_id:((t=g==null?void 0:g.user)==null?void 0:t.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||e.fileName||"",file_path:r.filePath||e.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await Ui(n)}catch(i){throw pc(n),i}await pt({silent:!0})}catch(r){f("roster-data-error",k(r),{ttlMs:h})}finally{ue=!1,d()}}}function Pi(){return`roster-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Wr(){try{const e=window.localStorage.getItem(Hn),t=e?JSON.parse(e):[];return Array.isArray(t)?t.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Gi(e){window.localStorage.setItem(Hn,JSON.stringify(Array.isArray(e)?e:[]))}function pc(e){const t=String((e==null?void 0:e.local_upload_id)||Pi()),r=Wr().filter(n=>(n==null?void 0:n.local_upload_id)!==t);r.push({...e,local_upload_id:t,pending_saved_at:new Date().toISOString()}),Gi(r),f("roster-data-pending","Roster data is queued and will retry after GuildSync reconnects.",{ttlMs:h})}function mc(e){const t=Wr().filter(r=>(r==null?void 0:r.local_upload_id)!==e);Gi(t)}async function gc(){if(ar||!(c!=null&&c.connected)||!_())return;const e=Wr();if(e.length!==0){ar=!0;try{for(const t of e){if(!(c!=null&&c.connected)||!_())return;await Ui(t),mc(t.local_upload_id)}}catch(t){f("roster-data-pending-error",`Pending roster upload retry failed: ${k(t)}`,{ttlMs:h})}finally{ar=!1}}}async function Ui(e){if(!(c!=null&&c.connected))throw new Error("GuildSync websocket is not connected. Roster data was not cleared.");const t=await A("guildsync:sending-roster-data",e,3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Backend rejected the roster data payload. Roster data was not cleared.");const r=await bo(e.file_path||"",e.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed roster data, but the SavedVariables file could not be cleared.");return f("roster-data-sent",t.message||"Roster data sent to GuildSync backend.",{ttlMs:h}),t}async function yc(e={}){var t;if(!!_()){if(!(c!=null&&c.connected)){f("applications-data-pending","Applications SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:h});return}try{const r=await ho(e);if(!(r!=null&&r.ok)){f("applications-data-pending",(r==null?void 0:r.message)||"Applications SavedVariables changed, but no application data was sent yet.",{ttlMs:h});return}const n={local_upload_id:Fi(),authenticated_username:he(),authenticated_discord_user_id:((t=g==null?void 0:g.user)==null?void 0:t.discord_user_id)||"",source:"guildsync-frontend-client",file_name:r.fileName||e.fileName||"",file_path:r.filePath||e.filePath||"",collected_at:new Date().toISOString(),data:r.data||{}};try{await Wi(n)}catch(i){throw bc(n),i}}catch(r){f("applications-data-error",k(r),{ttlMs:h})}}}function Fi(){return`applications-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Hr(){try{const e=window.localStorage.getItem(zn),t=e?JSON.parse(e):[];return Array.isArray(t)?t.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Vi(e){window.localStorage.setItem(zn,JSON.stringify(Array.isArray(e)?e:[]))}function bc(e){const t=String((e==null?void 0:e.local_upload_id)||Fi()),r=Hr().filter(n=>(n==null?void 0:n.local_upload_id)!==t);r.push({...e,local_upload_id:t,pending_saved_at:new Date().toISOString()}),Vi(r),f("applications-data-pending","Application data is queued and will retry after GuildSync reconnects.",{ttlMs:h})}function vc(e){const t=Hr().filter(r=>(r==null?void 0:r.local_upload_id)!==e);Vi(t)}async function kc(){if(cr||!(c!=null&&c.connected)||!_())return;const e=Hr();if(e.length!==0){cr=!0;try{for(const t of e){if(!(c!=null&&c.connected)||!_())return;await Wi(t),vc(t.local_upload_id)}}catch(t){f("applications-data-pending-error",`Pending application upload retry failed: ${k(t)}`,{ttlMs:h})}finally{cr=!1}}}async function Wi(e){var i;if(!(c!=null&&c.connected))throw new Error("GuildSync websocket is not connected. Application data was not cleared.");const t=Array.isArray((i=e==null?void 0:e.data)==null?void 0:i.records)?e.data.records:[];if(t.length===0)throw new Error("No application records were available to send. Application data was not cleared.");let r=0;for(const s of t){const o=await A("guildsync:eso-guild-application-message",{...e,record:s,recordKey:(s==null?void 0:s.recordKey)||"",message:Sc(s)},3e4);if(!(o!=null&&o.ok))throw new Error((o==null?void 0:o.message)||(o==null?void 0:o.error)||"Backend rejected the application data payload. Application data was not cleared.");r+=1}const n=await go(e.file_path||"",e.file_name||"");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Backend confirmed application data, but the SavedVariables file could not be cleared.");return f("applications-data-sent",`Sent ${r} application record${r===1?"":"s"} to GuildSync backend.`,{ttlMs:h}),{ok:!0,sent_count:r}}function Sc(e={}){const t=Number(e.capturedAt||Math.floor(Date.now()/1e3)),r=String(e.officerAccount||"Unknown officer").trim()||"Unknown officer",n=String(e.action||"processed").trim()||"processed",i=String(e.applicantAccount||e.recordKey||"Unknown applicant").trim()||"Unknown applicant",s=String(e.applicationText||"_No application text captured._"),o=Object.entries(e).filter(([l])=>!["recordKey","capturedAt","officerAccount","applicantAccount","action","applicationText"].includes(l)).map(([l,p])=>`**${l}:** ${wc(p)}`);return[`\u{1F4DD} <t:${t}:F>`,`**${r}** ${n} an application from **${i}**.`,"","**Application text:**","```",s.slice(0,1500),"```",o.length>0?"":null,o.length>0?"**Full captured record fields:**":null,...o].filter(l=>l!==null).join(`
`)}function wc(e){if(e==null)return"";if(typeof e=="object")try{return`\`${JSON.stringify(e).slice(0,900)}\``}catch{return String(e)}return String(e).slice(0,900)}async function _c(e={}){await yc(e)}function Ac(){const e=$r(O),t=Tc(e),r=O!=="other";return`
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <span class="discord-last-refresh">Last Refresh: ${a(ts(Qn))}</span>
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button id="openManualBiweeklyTicketButton" class="bank-export-button" type="button" ${_()?"":'disabled title="Login required to add manual tickets."'}>
            <span aria-hidden="true">\uFF0B</span>
            <span>Add Manual Tickets</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">\u25A6</span>
            <span>Export 50/50</span>
          </button>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${Le||!_()?"disabled":""} ${_()?"":'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
            <span class="refresh-discord-icon" aria-hidden="true">\u21BB</span>
            <span>${Le?"Refreshing...":"Refresh Deposits"}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${lr("biweekly","\u25A3","Bi-Weekly","Two-week raffle ticket deposits")}
          ${lr("monthly","\u{1F39F}","50/50","Four-week 50/50 ticket deposits")}
          ${lr("other","?","Other","All other deposits")}
        </div>

        ${Dc(O)}

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
              ${e.length>0?e.map(n=>Cc(n,r)).join(""):Bc(r)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${a(Ki(t.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></div>
          ${r?`<div>Total Tickets Awarded: <strong>${a(Jt(t.tickets))}</strong> <span aria-hidden="true">\u{1F39F}</span></div>`:""}
        </div>
      </div>
      ${we?Lc($r(ht)):""}
    </div>
  `}function Lc(e){return`
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${a(Te(ht))} Deposits</h3>
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
              ${e.length>0?e.map(t=>Ec(t)).join(""):Rc()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${a(zi(e))}</textarea>
      </div>
    </div>
  `}function Ec(e){return`
    <tr>
      <td>${a(e.displayName||"")}</td>
      <td>${a(String(Number(e.amount)||0))}</td>
      <td>${a(String(Number(e.ticketAmount)||0))}</td>
      <td>${a(e.note||"")}</td>
    </tr>
  `}function Rc(){return`
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${a(Te(ht))}.</td>
    </tr>
  `}function Dc(e){if(e==="other")return`
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;const t=ji(e),r=zr(e),n=r<0;return`
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${u(Te(e))} raffle period">\u2039</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${a(Te(e))} Raffle Period ${r===0?"(Current)":`(${Math.abs(r)} period${Math.abs(r)===1?"":"s"} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${a(Et(t.salesStart))} through ${a(Et(t.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${a(Et(t.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${n?"":"disabled"} aria-label="Next ${u(Te(e))} raffle period">\u203A</button>
    </div>
  `}function lr(e,t,r,n){const i=O===e;return`
    <button class="bank-section-card${i?" active":""}" type="button" data-bank-section="${u(e)}" aria-selected="${i?"true":"false"}">
      <span class="bank-section-icon" aria-hidden="true">${a(t)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${a(r)}</span>
        <span class="bank-section-subtitle">${a(n)}</span>
      </span>
    </button>
  `}function Hi(){if(L!=="more")return;document.querySelectorAll("[data-bank-section]").forEach(s=>{s.addEventListener("click",()=>{O=s.dataset.bankSection||"biweekly",d()})}),document.querySelectorAll("[data-bank-export-section]").forEach(s=>{s.addEventListener("click",()=>{ht=(s.dataset.bankExportSection||"biweekly")==="monthly"?"monthly":"biweekly",we=!0,d()})}),document.querySelectorAll("[data-bank-period-move]").forEach(s=>{s.addEventListener("click",()=>{Nc(s.dataset.bankPeriodMove||""),d()})});const e=document.querySelector("#closeBankingExportGridButton");e&&e.addEventListener("click",()=>{we=!1,d()});const t=document.querySelector("#copyBankingExportGridButton");t&&t.addEventListener("click",()=>$c());const r=document.querySelector(".bank-export-overlay");r&&r.addEventListener("click",s=>{s.target===r&&(we=!1,d())});const n=document.querySelector("#openManualBiweeklyTicketButton");n&&n.addEventListener("click",async()=>{if(!_()){f("manual-ticket-login-required","Login required to add manual tickets.",{ttlMs:h});return}Q=!0,j="",ze=$.accountName||"",G.length===0&&(c==null?void 0:c.connected)&&_()&&await pt({silent:!0}),d()});const i=document.querySelector("#refreshBankingDataButton");i&&i.addEventListener("click",()=>{if(!_()){f("banking-login-required","Login required to send banking file updates. Existing banking data still loads automatically.",{ttlMs:h});return}Ji({key:"banking"})})}function zi(e){const t=[["Guildie Name","Deposit Amount","Tickets","Note"]];for(const r of e)t.push([r.displayName||"",String(Number(r.amount)||0),String(Number(r.ticketAmount)||0),r.note||""]);return t.map(r=>r.map(Kt).join("	")).join(`
`)}function Kt(e){return String(e!=null?e:"").replace(/[\t\r\n]+/g," ").trim()}async function Yt(e){var i;const t=String(e!=null?e:"");if((i=navigator.clipboard)!=null&&i.writeText)try{return await navigator.clipboard.writeText(t),!0}catch{}const r=document.createElement("textarea");r.value=t,r.setAttribute("readonly","readonly"),r.style.position="fixed",r.style.left="0",r.style.top="0",r.style.width="1px",r.style.height="1px",r.style.opacity="0",r.style.pointerEvents="none",r.style.zIndex="-1",document.body.appendChild(r),r.focus(),r.select(),r.setSelectionRange(0,r.value.length);let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r)}return n}async function $c(){const e=$r(ht),t=zi(e);if(await Yt(t)){f("banking-export-copied","Bank deposit export grid copied to clipboard.",{ttlMs:h});return}const n=document.querySelector("#bankingExportTsv");n&&(n.focus(),n.select()),f("banking-export-copy-error","Could not copy automatically. The export text is selected so you can press Ctrl+C.",{ttlMs:h})}function $r(e){return V.filter(t=>t.type===e).filter(t=>Mc(e,t)).sort((t,r)=>(Number(r.time)||0)-(Number(t.time)||0))}function Mc(e,t){if(e==="other")return!0;const r=Number(t==null?void 0:t.time)||0;if(r<=0)return!1;const n=ji(e);return r>=n.salesStart&&r<=n.salesEnd}function zr(e){return Number(wr[e])||0}function Nc(e){if(O!=="biweekly"&&O!=="monthly")return;const t=zr(O);if(e==="previous"){wr[O]=t-1;return}e==="next"&&t<0&&(wr[O]=t+1)}function ji(e){const t=Math.floor(Date.now()/1e3),r=e==="monthly",n=r?qo:Oo;let i=r?xo:Bo;for(;i-n>t;)i-=n;for(;i<t;)i+=n;return i+=zr(e)*n,{salesStart:i-n+1,salesEnd:i,raffleTime:i+Io}}function Tc(e){return e.reduce((t,r)=>(t.amount+=Number(r.amount)||0,t.tickets+=Number(r.ticketAmount)||0,t),{amount:0,tickets:0})}function Cc(e,t=!0){return`
    <tr>
      <td>${a(e.note||e.eventId||"")}</td>
      <td>${a(Et(e.time))}</td>
      <td>${a(e.displayName||"")}</td>
      <td><strong class="bank-gold-amount">${a(Ki(e.amount))}</strong> <span aria-hidden="true">\u{1FA99}</span></td>
      ${t?`<td><strong class="bank-ticket-amount">${a(Jt(e.ticketAmount))}</strong></td>`:""}
    </tr>
  `}function Bc(e=!0){return`
    <tr>
      <td class="bank-empty-row" colspan="${e?"5":"4"}">No ${a(Te(O))} deposits found for this ${O==="other"?"section":"raffle period"}.</td>
    </tr>
  `}function Te(e){return e==="biweekly"?"Bi-Weekly":e==="monthly"?"50/50":"Other"}function Et(e){const t=Number(e);return!Number.isFinite(t)||t<=0?"Unknown":new Date(t*1e3).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Ki(e){return(Number(e)||0).toLocaleString()}function Jt(e){return(Number(e)||0).toLocaleString()}function jr(e){return Array.isArray(e)?e.map(t=>{var n,i,s,o,l,p,m,v,w,N,Re,rn;const r=String((t==null?void 0:t.type)||"other").trim().toLowerCase();return{type:r==="monthly"||r==="biweekly"||r==="other"?r:"other",eventId:String((i=(n=t==null?void 0:t.eventId)!=null?n:t==null?void 0:t.event_id)!=null?i:"").trim(),time:Number((o=(s=t==null?void 0:t.time)!=null?s:t==null?void 0:t.timestamp)!=null?o:0)||0,displayName:String((p=(l=t==null?void 0:t.displayName)!=null?l:t==null?void 0:t.display_name)!=null?p:"").trim(),amount:Number((m=t==null?void 0:t.amount)!=null?m:0)||0,ticketAmount:Number((w=(v=t==null?void 0:t.ticketAmount)!=null?v:t==null?void 0:t.ticket_amount)!=null?w:0)||0,note:String((N=t==null?void 0:t.note)!=null?N:"").trim(),dataSource:String((rn=(Re=t==null?void 0:t.dataSource)!=null?Re:t==null?void 0:t.data_source)!=null?rn:"").trim()}}):[]}function xc(e){const t=new Map;for(const r of V)r.eventId&&t.set(r.eventId,r);for(const r of e)!r.eventId||t.set(r.eventId,r);V=Array.from(t.values()).sort((r,n)=>(Number(n.time)||0)-(Number(r.time)||0))}function Yi(){Qn=new Date().toISOString()}async function Oc(e={}){!(e!=null&&e.ok)||(V=jr(e.entries),Yi(),L==="more"&&d(),f("banking-data-updated",`Banking data updated. Loaded ${V.length} deposit record${V.length===1?"":"s"}.`,{ttlMs:h}))}async function Qt(e={}){const t=Boolean(e.silent);if(!(c!=null&&c.connected)){t||f("banking-data-error","GuildSync websocket is not connected.",{ttlMs:h});return}Le=!0,d();try{const r=await A("guildsync:request-banking-data",{},3e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve banking data.");V=jr(r.entries),Yi(),t||f("banking-data",`Loaded ${V.length} banking deposit record${V.length===1?"":"s"}.`,{ttlMs:h})}catch(r){t||f("banking-data-error",k(r),{ttlMs:h})}finally{Le=!1,d()}}async function Ji(e={}){var t,r;if(!!_()){if(!(c!=null&&c.connected)){f("banking-data-pending","Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.",{ttlMs:h});return}Le=!0,d();try{const n=await po(e);if(!(n!=null&&n.ok)){f("banking-data-pending",(n==null?void 0:n.message)||"Banking SavedVariables changed, but no banking data was sent yet.",{ttlMs:h});return}const i=jr((t=n==null?void 0:n.data)==null?void 0:t.entries);xc(i);const s=new Date().toISOString(),o={local_upload_id:Qi(),authenticated_username:he(),authenticated_discord_user_id:((r=g==null?void 0:g.user)==null?void 0:r.discord_user_id)||"",source:"guildsync-frontend-client",file_name:n.fileName||e.fileName||"",file_path:n.filePath||e.filePath||"",collected_at:s,data:n.data||{}};try{await Zi(o)}catch(l){throw qc(o),l}await Qt({silent:!0})}catch(n){f("banking-data-error",k(n),{ttlMs:h})}finally{Le=!1,d()}}}function Qi(){return`banking-${Date.now()}-${Math.random().toString(16).slice(2)}`}function Kr(){try{const e=window.localStorage.getItem(Wn),t=e?JSON.parse(e):[];return Array.isArray(t)?t.filter(r=>r&&typeof r=="object"):[]}catch{return[]}}function Xi(e){window.localStorage.setItem(Wn,JSON.stringify(Array.isArray(e)?e:[]))}function qc(e){const t=String((e==null?void 0:e.local_upload_id)||Qi()),r=Kr().filter(n=>(n==null?void 0:n.local_upload_id)!==t);r.push({...e,local_upload_id:t,pending_saved_at:new Date().toISOString()}),Xi(r),f("banking-data-pending","Banking data is queued and will retry after GuildSync reconnects.",{ttlMs:h})}function Ic(e){const t=Kr().filter(r=>(r==null?void 0:r.local_upload_id)!==e);Xi(t)}async function Pc(){if(or||!(c!=null&&c.connected)||!_())return;const e=Kr();if(e.length!==0){or=!0;try{for(const t of e){if(!(c!=null&&c.connected)||!_())return;await Zi(t),Ic(t.local_upload_id)}}catch(t){f("banking-data-pending-error",`Pending banking upload retry failed: ${k(t)}`,{ttlMs:h})}finally{or=!1}}}async function Zi(e){if(!(c!=null&&c.connected))throw new Error("GuildSync websocket is not connected. Banking data was not cleared.");const t=await A("guildsync:sending-banking-data",e,3e4);if(!(t!=null&&t.ok))throw new Error((t==null?void 0:t.message)||(t==null?void 0:t.error)||"Backend rejected the banking data payload. Banking data was not cleared.");const r=await yo(e.file_path||"",e.file_name||"");if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Backend confirmed banking data, but the SavedVariables file could not be cleared.");return f("banking-data-sent",t.message||"Banking data sent to GuildSync backend.",{ttlMs:h}),t}function es(){if(L!=="discord-members")return;const e=document.querySelector("#refreshDiscordDataButton");e&&e.addEventListener("click",()=>Gc());const t=document.querySelector("#discordMemberSearch");t&&t.addEventListener("input",s=>{Mt=s.target.value||"",br=s.target.selectionStart,vr=s.target.selectionEnd,d({restoreDiscordSearchFocus:!0})}),document.querySelectorAll("[data-discord-sort-column]").forEach(s=>{s.addEventListener("click",()=>{zc(s.dataset.discordSortColumn||"username")})});const r=document.querySelector("#discordRoleFilter");r&&r.addEventListener("change",s=>{const o=String(s.target.value||"").trim();o&&(De.add(o),d())}),document.querySelectorAll("[data-remove-role-filter]").forEach(s=>{s.addEventListener("click",()=>{const o=s.dataset.removeRoleFilter||"";De.delete(o),d()})});const n=document.querySelector("#discordLinkStatusFilter");n&&n.addEventListener("change",s=>{const o=String(s.target.value||"").trim();o&&($e.add(o),d())}),document.querySelectorAll("[data-remove-discord-link-status-filter]").forEach(s=>{s.addEventListener("click",()=>{const o=s.dataset.removeDiscordLinkStatusFilter||"";$e.delete(o),d()})}),document.querySelectorAll("[data-open-member-link-dialog]").forEach(s=>{s.addEventListener("click",()=>Ai(s.dataset.openMemberLinkDialog||"",s.dataset.memberLinkValue||""))});const i=document.querySelector("#clearDiscordFiltersButton");i&&i.addEventListener("click",()=>{Mt="",De.clear(),$e.clear(),d()})}async function Gc(){var e,t;if(!(c!=null&&c.connected)){f("discord-refresh-error","GuildSync websocket is not connected.",{ttlMs:h});return}$t=!0,d(),f("discord-refresh-requested","Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...",{ttlMs:18e4});try{const r=await A("guildsync:request-discord-data-refresh",{requested_by:((e=g==null?void 0:g.user)==null?void 0:e.display_name)||((t=g==null?void 0:g.user)==null?void 0:t.username)||"GuildSync Client",requested_at:new Date().toISOString()},18e4);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to request Discord data refresh.");f("discord-refresh-requested",r.message||"Discord data refresh completed.",{ttlMs:h}),await Yr({silent:!0})}catch(r){f("discord-refresh-error",k(r),{ttlMs:h})}finally{$t=!1,d()}}async function Uc(){if(!(c!=null&&c.connected))return;const e=await A("guildsync:request-discord-data-date",{});e!=null&&e.ok&&(Ft=e.value||null)}async function Fc(e={}){if(!!(e!=null&&e.ok)){T=Jr(e.members),e.last_refresh&&(Ft=e.last_refresh);try{await Uc()}catch{}L==="discord-members"&&d(),f("discord-data-updated",`Discord data updated. Loaded ${T.length} member record${T.length===1?"":"s"}.`,{ttlMs:h})}}async function Yr(e={}){const t=Boolean(e.silent);if(!(c!=null&&c.connected)){f("discord-data-error","GuildSync websocket is not connected.",{ttlMs:h});return}rt=!0,d();try{const[r,n]=await Promise.all([A("guildsync:request-discord-data-date",{}),A("guildsync:request-discord-member-dataJSON",{})]);if(!(r!=null&&r.ok))throw new Error((r==null?void 0:r.message)||"Unable to retrieve Discord refresh date.");if(!(n!=null&&n.ok))throw new Error((n==null?void 0:n.message)||"Unable to retrieve Discord member data.");Ft=r.value||null,T=Jr(n.members),t||f("discord-data",`Loaded ${T.length} Discord member record${T.length===1?"":"s"}.`,{ttlMs:h})}catch(r){f("discord-data-error",k(r),{ttlMs:h})}finally{rt=!1,d()}}function A(e,t={},r=3e4){return new Promise((n,i)=>{if(!(c!=null&&c.connected)){i(new Error("GuildSync websocket is not connected."));return}let s=!1;const o=window.setTimeout(()=>{s||(s=!0,i(new Error(`${e} timed out.`)))},r);c.emit(e,t,l=>{s||(s=!0,window.clearTimeout(o),n(l))})})}function Jr(e){return Array.isArray(e)?e.map(t=>({discord_id:String((t==null?void 0:t.discord_id)||(t==null?void 0:t.id)||"").trim(),username:String((t==null?void 0:t.username)||"").trim(),global_name:String((t==null?void 0:t.global_name)||"").trim(),server_nickname:String((t==null?void 0:t.server_nickname)||"").trim(),last_seen:String((t==null?void 0:t.last_seen)||(t==null?void 0:t.lastSeen)||"").trim(),last_seen_action:String((t==null?void 0:t.last_seen_action)||(t==null?void 0:t.lastSeenAction)||"").trim(),avatar:String((t==null?void 0:t.avatar)||"").trim(),roles:Array.isArray(t==null?void 0:t.roles)?t.roles.map(Vc).filter(Boolean):[]})).filter(t=>t.discord_id||t.username||t.global_name||t.server_nickname).sort((t,r)=>at(t).localeCompare(at(r),void 0,{sensitivity:"base"})):[]}function Vc(e){var i,s;if(!e||typeof e!="object")return null;const t=String(e.role_id||e.id||"").trim(),r=String(e.role_name||e.name||"Unnamed Role").trim(),n=(s=(i=e.role_color)!=null?i:e.color)!=null?s:null;return{role_id:t,role_name:r||"Unnamed Role",role_color:n}}function Wc(){const e=Mt.trim().toLowerCase(),t=Array.from(De),r=T.filter(n=>{if(e&&![n.username,n.global_name,n.server_nickname,n.discord_id,...n.roles.map(s=>s.role_name)].join(" ").toLowerCase().includes(e))return!1;if(t.length>0){const i=new Set(n.roles.map(s=>s.role_name));if(!t.every(s=>i.has(s)))return!1}return!!oi($e,sa(n))});return Hc(r)}function Hc(e){const t=ge==="desc"?-1:1;return[...e].sort((r,n)=>{const i=_n(r,nt),s=_n(n,nt),o=i.localeCompare(s,void 0,{sensitivity:"base",numeric:!0});return o!==0?o*t:at(r).localeCompare(at(n),void 0,{sensitivity:"base",numeric:!0})})}function _n(e,t){return t==="global_name"?e.global_name||"":t==="server_nickname"?e.server_nickname||"":t==="roles"?(e.roles||[]).map(r=>r.role_name||"").filter(Boolean).sort((r,n)=>r.localeCompare(n,void 0,{sensitivity:"base"})).join(" "):e.username||e.discord_id||""}function zc(e){const r=new Set(["username","global_name","server_nickname","roles"]).has(e)?e:"username";nt===r?ge=ge==="asc"?"desc":"asc":(nt=r,ge="asc"),d()}function vt(e,t){const r=nt===e,n=ge==="asc"?"ascending":"descending",i=r?ge==="asc"?"\u25B2":"\u25BC":"\u2195";return`
    <th aria-sort="${r?n:"none"}">
      <button
        class="discord-sort-header${r?" active":""}"
        type="button"
        data-discord-sort-column="${u(e)}"
        title="Sort ${u(t)} ${r&&ge==="asc"?"descending":"ascending"}"
      >
        <span>${a(t)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${i}</span>
      </button>
    </th>
  `}function jc(){const e=document.querySelector("#discordMemberSearch");if(!!e&&(e.focus({preventScroll:!0}),typeof e.setSelectionRange=="function")){const t=Number.isInteger(br)?br:e.value.length,r=Number.isInteger(vr)?vr:t;e.setSelectionRange(t,r)}}function Kc(){const e=document.querySelector("#rosterMemberSearch");if(!!e&&(e.focus({preventScroll:!0}),typeof e.setSelectionRange=="function")){const t=Number.isInteger(kr)?kr:e.value.length,r=Number.isInteger(Sr)?Sr:t;e.setSelectionRange(t,r)}}function Yc(){const e=new Set;for(const t of T)for(const r of t.roles)r.role_name&&e.add(r.role_name);return Array.from(e).sort((t,r)=>t.localeCompare(r,void 0,{sensitivity:"base"}))}function Jc(e){const t=ed(e),r=at(e),n=e.roles||[];return`
    <tr data-discord-user-id="${u(e.discord_id||"")}">
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${t?`<img src="${u(t)}" alt="${u(r)}" />`:`<span>${a(ls(r))}</span>`}
          </div>
          <span>${a(e.username||e.discord_id||"Unknown")}</span>
        </div>
      </td>
      <td>${a(e.global_name||"")}</td>
      <td>${a(e.server_nickname||"")}</td>
      <td>
        <div class="discord-member-roles">
          ${n.length>0?n.map(i=>Xc(i)).join(""):'<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
      <td class="member-link-action-cell">${wi({mode:"discord-to-eso",discordUserId:e.discord_id})}</td>
    </tr>
  `}function Qc(){return`
    <tr>
      <td colspan="5" class="discord-empty-row">${a(rt?"Loading Discord member data...":"No Discord members found.")}</td>
    </tr>
  `}function Xc(e){const t=Xt(e.role_color),r=Zr(t),n=Xr(t,r);return`
    <span
      class="discord-role-badge"
      title="${u(e.role_name)}"
      style="${n}"
    >${a(e.role_name)}</span>
  `}function Zc(e){const t=Qr(e),r=Xt(t==null?void 0:t.role_color),n=Zr(r),i=Xr(r,n);return`
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-role-filter="${u(e)}"
      style="${i}"
      title="Remove ${u(e)} filter"
    >
      <span>${a(e)}</span>
      <span aria-hidden="true">\xD7</span>
    </button>
  `}function Qr(e){for(const t of T){const r=t.roles.find(n=>n.role_name===e);if(r)return r}return null}function Xt(e){const t=Number(e);return!Number.isFinite(t)||t<=0?"#64748b":`#${Math.max(0,Math.min(16777215,Math.trunc(t))).toString(16).padStart(6,"0")}`}function Xr(e,t){return[`--role-fill-top: ${An(e,"#ffffff",.16)}`,`--role-fill-bottom: ${An(e,"#000000",.1)}`,`--role-fill-glow: ${Ln(e,.28)}`,`--role-fill-edge: ${Ln(e,.46)}`,`color: ${t}`].join("; ")}function An(e,t,r){const n=kt(e)||kt("#64748b"),i=kt(t)||kt("#ffffff"),s=Math.max(0,Math.min(1,Number(r)||0)),o=Math.round(n.red+(i.red-n.red)*s),l=Math.round(n.green+(i.green-n.green)*s),p=Math.round(n.blue+(i.blue-n.blue)*s);return`#${ur(o)}${ur(l)}${ur(p)}`}function kt(e){const t=String(e||"").replace("#","");return/^[0-9a-f]{6}$/i.test(t)?{red:parseInt(t.slice(0,2),16),green:parseInt(t.slice(2,4),16),blue:parseInt(t.slice(4,6),16)}:null}function ur(e){return Math.max(0,Math.min(255,e)).toString(16).padStart(2,"0")}function Ln(e,t){const r=String(e||"#64748b").replace("#",""),n=/^[0-9a-f]{6}$/i.test(r)?r:"64748b",i=parseInt(n.slice(0,2),16),s=parseInt(n.slice(2,4),16),o=parseInt(n.slice(4,6),16);return`rgba(${i}, ${s}, ${o}, ${t})`}function Zr(e){const t=String(e||"#64748b").replace("#","");if(!/^[0-9a-f]{6}$/i.test(t))return"#E5E7EB";const r=parseInt(t.slice(0,2),16),n=parseInt(t.slice(2,4),16),i=parseInt(t.slice(4,6),16);return(r*299+n*587+i*114)/1e3>150?"#0F172A":"#F8FAFC"}function ed(e){const t=String((e==null?void 0:e.avatar)||"").trim(),r=String((e==null?void 0:e.discord_id)||"").trim();if(!t)return"";if(t.startsWith("http://")||t.startsWith("https://"))return t;if(!r)return"";const n=t.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(t)}.${n}?size=64`}function at(e){return e.server_nickname||e.global_name||e.username||e.discord_id||"Unknown"}function ts(e){const t=String(e||"").trim();if(!t)return"Not refreshed yet";const r=new Date(t);return Number.isNaN(r.getTime())?t:r.toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function Rt(){const e=document.querySelector("#discordArea");if(!!e){if(mt(!1),_()){const t=g.user||{},r=he(),n=bd(t),i=ls(r);e.innerHTML=`
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${n?`<img src="${u(n)}" alt="${u(r)}" class="discord-avatar-image" />`:`<span class="discord-avatar-fallback">${a(i)}</span>`}
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;const s=document.querySelector("#discordAvatarButton");s.addEventListener("contextmenu",o=>{o.preventDefault(),En()}),s.addEventListener("click",()=>{En()});return}e.innerHTML=`
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `,document.querySelector("#discordLoginButton").addEventListener("click",sd)}}function En(){if(lt){mt();return}id()}function td(e=oe){const t=Array.isArray(e==null?void 0:e.files)?e.files:[],r=String((e==null?void 0:e.directory)||"").trim(),n=Boolean(e==null?void 0:e.watching);return t.length===0?`
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `:`
    <div class="profile-filewatch-list">
      ${t.map(i=>{const s=String((i==null?void 0:i.key)||(i==null?void 0:i.fileName)||"").trim(),o=String((i==null?void 0:i.fileName)||"SavedVariables file").trim(),l=String((i==null?void 0:i.filePath)||(r?`${r}\\${o}`:o)).trim(),p=(i==null?void 0:i.enabled)!==!1,m=n&&p,v=`profileFileWatchToggle-${nd(s||o)}`;return`
          <label class="profile-filewatch-item ${p?"enabled":"disabled"}" title="${u(l)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${a(o)}</span>
              <span class="profile-filewatch-state">${m?"Watching":p?"On":"Off"}</span>
            </span>
            <input
              id="${u(v)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${u(s)}"
              ${p?"checked":""}
              aria-label="Turn file watch ${p?"off":"on"} for ${u(o)}"
            />
          </label>
        `}).join("")}
    </div>
  `}function en(){var n,i,s;const e=document.querySelector("#discordProfileMenu");if(!e)return;const t=he(),r=((n=g.user)==null?void 0:n.role)||"member";e.innerHTML=`
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${a(t)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${a(vd(r))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${a(Ut)}</span>
      </div>
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${oe!=null&&oe.watching?"Active":"Stopped"}</span>
        </div>
        ${td()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `,(i=document.querySelector("#discordLogoutButton"))==null||i.addEventListener("click",od),(s=document.querySelector("#associateTicketReportButton"))==null||s.addEventListener("click",()=>{mt(!1),ci()}),document.querySelectorAll(".profile-filewatch-toggle").forEach(o=>{o.addEventListener("change",rd)})}async function rs(){try{oe=await vo(),lt&&en()}catch(e){f("file-watcher-error",k(e),{ttlMs:h})}}async function rd(e){var n;const t=e.currentTarget,r=String(((n=t==null?void 0:t.dataset)==null?void 0:n.filewatchKey)||"").trim();if(!!r)try{t.disabled=!0,oe=await Ao(r,t.checked),await Ce({silent:!0}),lt&&en()}catch(i){f("file-watcher-error",k(i),{ttlMs:h}),await rs()}}function nd(e){return String(e||"").trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||"file"}function id(){const e=document.querySelector("#discordProfileMenu");!e||(en(),e.classList.add("open"),e.setAttribute("aria-hidden","false"),lt=!0,rs(),setTimeout(()=>{window.addEventListener("click",ns),window.addEventListener("keydown",is)},0))}function mt(e=!0){const t=document.querySelector("#discordProfileMenu");t&&(t.classList.remove("open"),t.setAttribute("aria-hidden","true")),lt=!1,e&&(window.removeEventListener("click",ns),window.removeEventListener("keydown",is))}function ns(e){const t=document.querySelector(".discord-profile-wrap");t&&!t.contains(e.target)&&mt()}function is(e){e.key==="Escape"&&mt()}async function sd(){try{f("auth","Opening Discord login...",{ttlMs:h});const e=await Eo();e!=null&&e.status_message&&f("auth",e.status_message,{ttlMs:h}),de()}catch(e){f("auth-error",k(e),{ttlMs:h}),de()}}async function od(){try{g=await So(),f("auth",g.status_message||"Logged out.",{ttlMs:h}),Xn(),tt(),await Ce()}catch(e){f("auth-error",k(e),{ttlMs:h}),de()}}function tt(){const e=g.socket_url||"https://guildsync.perdues.me";ad(!1);const t={transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:1/0,reconnectionDelay:1e3,reconnectionDelayMax:5e3};g!=null&&g.token&&(t.auth={token:g.token}),c=At(e,t),c.on("connect",()=>{de(),ss(),L==="discord-members"&&Yr({silent:!0}),L==="eso-members"&&pt({silent:!0}),L==="more"&&Qt({silent:!0}),Pc(),gc(),kc(),cd()}),c.on("connect_error",()=>{de(),It()}),c.on("disconnect",()=>{de(),It()}),c.on("guildsync:version-status",r=>{dd(r)}),c.on("guildsync:discord-member-data-updated",r=>{Fc(r)}),c.on("guildsync:banking-data-updated",r=>{Oc(r)}),c.on("guildsync:roster-data-updated",r=>{fc(r)}),c.on("guildsync:member-links-updated",(r={})=>{Array.isArray(r.links)&&(S=r.links,(L==="discord-members"||L==="eso-members"||L==="settings"||pe)&&d())}),c.on("guildsync:discord-refresh-status",(r={})=>{const n=String(r.message||"").trim();n&&f("discord-refresh-status",n,{ttlMs:h})})}function ad(e=!0){It(),c&&(c.disconnect(),c=null),e&&de()}function ss(){!(c!=null&&c.connected)||c.emit("guildsync:client-version",{version:Ut,platform:os(),client_type:"wails"})}function cd(){It(),Lt=window.setInterval(()=>{ss()},No)}function It(){Lt&&(window.clearInterval(Lt),Lt=null)}function dd(e){if(!(!e||typeof e!="object")){if(e.update_required){const t=e.latest_version||"unknown",r=e.download&&typeof e.download=="object"?e.download:{};ee={updateRequired:!0,latestVersion:t,downloadUrl:String(e.download_url||r.url||"").trim(),fileName:String(e.download_file_name||r.file_name||"").trim(),platformLabel:String(r.label||e.platform||os()).trim()},f("version",`GuildSync is out of date. Current version: ${Ut}. Latest version: ${t}.`),Mr();return}ee={updateRequired:!1,latestVersion:"",downloadUrl:"",fileName:"",platformLabel:""},Mr(),tn("version")}}function os(){const e=String(navigator.userAgent||"").toLowerCase(),r=`${String(navigator.platform||"").toLowerCase()} ${e}`;return r.includes("mac")?"macos":r.includes("linux")?"linux":"windows"}function Mr(){const e=document.querySelector("#desktopUpdateArea");if(!e)return;if(!ee.updateRequired||!ee.downloadUrl){e.innerHTML="";return}const t=ee.platformLabel||"Desktop",r=ee.latestVersion||"latest",n=ee.fileName||"GuildSync client download";e.innerHTML=`
    <button
      id="desktopUpdateDownloadButton"
      class="desktop-update-download-button"
      type="button"
      title="Download ${u(n)}"
      aria-label="Download GuildSync ${u(r)} for ${u(t)}"
    >
      <span class="desktop-update-download-icon" aria-hidden="true">\u2B07</span>
      <span class="desktop-update-download-copy">
        <span class="desktop-update-download-title">Update Available</span>
        <span class="desktop-update-download-subtitle">${a(t)} \xB7 ${a(r)}</span>
      </span>
    </button>
  `;const i=e.querySelector("#desktopUpdateDownloadButton");i&&i.addEventListener("click",()=>{ld()})}function ld(){const e=String(ee.downloadUrl||"").trim();if(!e){f("version-download-error","No GuildSync update download URL was provided by the server.",{ttlMs:h});return}Mo(e)}function f(e,t,r={}){const n=String(e||"").trim(),i=String(t||"").trim();if(!(!n||!i)){if(le.set(n,i),me.has(n)&&(window.clearTimeout(me.get(n)),me.delete(n)),r.ttlMs&&Number(r.ttlMs)>0){const s=window.setTimeout(()=>{tn(n)},Number(r.ttlMs));me.set(n,s)}Ie()}}function tn(e){const t=String(e||"").trim();if(!!t){if(le.delete(t),me.has(t)&&(window.clearTimeout(me.get(t)),me.delete(t)),D===t){tr(()=>{D="",Ie()});return}Ie()}}function Ie(){const e=Zt();if(e.length===0){_e?tr(ct):ct();return}!_e&&!Ae&&er(e[0])}function Zt(){return Array.from(le.keys())}function as(){const e=Zt();if(e.length===0)return"";if(!D)return e[0];const t=e.indexOf(D);return t<0?e[0]:e[(t+1)%e.length]}function er(e){const t=document.querySelector("#statusMessageTrack");if(!t||!le.has(e)){ct();return}rr();const r=le.get(e);D=e,_e=!0,Ae=!0,t.classList.remove("fade-in","fade-out","long-scroll"),t.style.removeProperty("--message-fade-duration"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",t.textContent=r,t.style.setProperty("--message-fade-duration",`${Kn}ms`),requestAnimationFrame(()=>{t.classList.add("fade-in"),t.addEventListener("animationend",()=>{t.classList.remove("fade-in"),t.style.opacity="1",t.style.transform="translateX(0) translateY(-50%)",Ae=!1,ud()},{once:!0})})}function ud(){const e=Zt();if(!D||!le.has(D)){Ie();return}if(e.length<=1){Rn(!1);return}Rn(!0)}function Rn(e){const t=document.querySelector("#statusMessageViewport"),r=document.querySelector("#statusMessageTrack");if(!t||!r)return;const n=Math.max(0,r.scrollWidth-t.clientWidth);if(n<=0){e&&dt(()=>{tr(()=>{const i=as();D="",i?er(i):ct()})},jn);return}dt(()=>{cs(n,e)},Yn)}function cs(e,t){const r=document.querySelector("#statusMessageTrack");if(!r||!D||!le.has(D))return;const n=Math.max(4,Math.ceil(e/Co));r.style.setProperty("--long-scroll-distance",`${e}px`),r.style.setProperty("--long-scroll-duration",`${n}s`),r.classList.add("long-scroll"),r.addEventListener("animationend",()=>{if(r.classList.remove("long-scroll"),r.style.transform=`translateX(-${e}px) translateY(-50%)`,t){dt(()=>{tr(()=>{const i=as();D="",i?er(i):ct()})},jn);return}dt(()=>{fd()},To)},{once:!0})}function fd(){const e=document.querySelector("#statusMessageViewport"),t=document.querySelector("#statusMessageTrack");if(!e||!t||!D||!le.has(D))return;if(Zt().length!==1){Ie();return}t.classList.remove("long-scroll"),t.style.removeProperty("--long-scroll-distance"),t.style.removeProperty("--long-scroll-duration"),t.style.transform="translateX(0) translateY(-50%)";const n=Math.max(0,t.scrollWidth-e.clientWidth);n<=0||dt(()=>{cs(n,!1)},Yn)}function tr(e){const t=document.querySelector("#statusMessageTrack");if(rr(),!t||!_e){typeof e=="function"&&e();return}Ae=!0,t.classList.remove("fade-in","long-scroll"),t.style.setProperty("--message-fade-duration",`${Kn}ms`),t.classList.add("fade-out"),t.addEventListener("animationend",()=>{t.classList.remove("fade-out"),t.style.opacity="0",t.style.transform="translateX(0) translateY(-50%)",_e=!1,Ae=!1,typeof e=="function"&&e()},{once:!0})}function ct(){const e=document.querySelector("#statusMessageTrack");rr(),D="",_e=!1,Ae=!1,e&&(e.classList.remove("fade-in","fade-out","long-scroll"),e.style.removeProperty("--message-fade-duration"),e.style.removeProperty("--long-scroll-distance"),e.style.removeProperty("--long-scroll-duration"),e.style.opacity="0",e.style.transform="translateX(0) translateY(-50%)",e.textContent="")}function dt(e,t){const r=window.setTimeout(()=>{Ze=Ze.filter(n=>n!==r),e()},t);Ze.push(r)}function rr(){for(const e of Ze)window.clearTimeout(e);Ze=[]}function ds(){if(!_e||Ae||!D)return;const e=D;rr(),er(e)}function de(){const e=document.querySelector("#statusDot"),t=document.querySelector("#statusConnectionLabel");if(!!e){if(e.classList.remove("status-red","status-yellow","status-green"),!(c!=null&&c.connected)){e.classList.add("status-red"),e.title="Server Unavailable. Websocket is not connected.",t&&(t.textContent="Server Unavailable",t.title="Server Unavailable");return}if(!_()){e.classList.add("status-yellow"),e.title="Login Required. Websocket is connected but user is not authenticated.",t&&(t.textContent="Login Required",t.title="Login Required");return}e.classList.add("status-green"),e.title=`Server Ready. Authenticated as ${he()}.`,t&&(t.textContent="Server Ready",t.title=`Server Ready - ${he()}`)}}async function Ce(e={}){try{if(_()){const t=await Ro();oe=t,!e.silent&&(t==null?void 0:t.message)&&f(t.watching?"file-watcher":"file-watcher-error",t.message,{ttlMs:h});return}oe=await Do(),tn("file-watcher")}catch(t){f("file-watcher-error",k(t),{ttlMs:h})}}function Qe(e,t=null){const r="[GuildSync File Watcher]";if(t){console.log(`${r} ${e}`,t);return}console.log(`${r} ${e}`)}function hd(e={}){if(!_()){Qe("SavedVariables change ignored because the user is not authenticated.",e);return}const t=String(e.key||e.fileName||"saved-vars-file").trim()||"saved-vars-file",r=t.toLowerCase(),n=String(e.label||"").trim(),i=String(e.fileName||"SavedVariables file").trim()||"SavedVariables file",s=String(e.filePath||"").trim(),o=n?`${n} saved variables (${i})`:i;Qe(`SavedVariables change detected: ${i}${s?` (${s})`:""}. Key: ${r}.`,e),f(`saved-vars-file-updated-${t}`,`${o} has been updated.`,{ttlMs:h}),r==="banking"&&(Qe(`Processing banking SavedVariables update from ${i}.`),pd(e)),r==="roster"&&(Qe(`Processing roster SavedVariables update from ${i}.`),md(e)),r==="applications"&&(Qe(`Processing applications SavedVariables update from ${i}.`),_c(e))}async function pd(e={}){await Ji(e)}async function md(e={}){await hc(e)}function gd(e){!_()||f("file-watcher-error",k(e),{ttlMs:h})}function yd(){Ke("guildsync-savedvars-file-modified",hd),Ke("guildsync-file-watcher-error",gd),Ke("guildsync-login-complete",async e=>{g=e||{logged_in:!1,allowed:!1},Rt(),tt(),await Ce(),f("auth",g.status_message||`Logged in and authorized as ${he()}.`,{ttlMs:h})}),Ke("guildsync-login-denied",async e=>{g={logged_in:!1,allowed:!1,status_message:""},Rt(),await Ce(),f("auth",e||"Access denied.",{ttlMs:h}),tt()}),Ke("guildsync-login-failed",async e=>{g={logged_in:!1,allowed:!1,status_message:""},Rt(),await Ce(),f("auth",e||"Login failed.",{ttlMs:h}),tt()})}function _(){return Boolean((g==null?void 0:g.logged_in)&&(g==null?void 0:g.allowed)&&(g==null?void 0:g.token))}function he(){var e,t;return((e=g.user)==null?void 0:e.display_name)||((t=g.user)==null?void 0:t.username)||"Discord User"}function bd(e){if(!e)return"";if(e.avatar_url)return e.avatar_url;const t=String(e.avatar||"").trim(),r=String(e.discord_user_id||"").trim();if(!t||!r)return"";if(t.startsWith("http://")||t.startsWith("https://"))return t;const n=t.startsWith("a_")?"gif":"png";return`https://cdn.discordapp.com/avatars/${encodeURIComponent(r)}/${encodeURIComponent(t)}.${n}?size=128`}function ls(e){const t=String(e||"").trim().split(/\s+/).filter(Boolean);return t.length===0?"GS":t.length===1?t[0].slice(0,2).toUpperCase():`${t[0][0]}${t[t.length-1][0]}`.toUpperCase()}function vd(e){return String(e||"member").replaceAll("_"," ").replace(/\b\w/g,t=>t.toUpperCase())}function kd(){Ye&&(Ye.disconnect(),Ye=null);const e=document.querySelector(".main-window")||document.querySelector("#app");if(!e||typeof ResizeObserver>"u")return;let t=Math.round(e.getBoundingClientRect().width),r=Math.round(e.getBoundingClientRect().height);Ye=new ResizeObserver(n=>{const i=n[0];if(!i)return;const s=Math.round(i.contentRect.width),o=Math.round(i.contentRect.height);s===t&&o===r||(t=s,r=o,us(),ds())}),Ye.observe(e)}function us(){clearTimeout(cn),cn=setTimeout(async()=>{try{await Vn()}catch{}},500)}function k(e){return e?typeof e=="string"?e:e.message||String(e):"Unknown error."}function a(e){return String(e!=null?e:"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function u(e){return a(e)}yd();Po();
