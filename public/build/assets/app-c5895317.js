function Ge(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ne={exports:{}},Be=function(r,n){return function(){for(var t=new Array(arguments.length),s=0;s<t.length;s++)t[s]=arguments[s];return r.apply(n,t)}},Ye=Be,b=Object.prototype.toString;function ie(e){return Array.isArray(e)}function re(e){return typeof e>"u"}function Qe(e){return e!==null&&!re(e)&&e.constructor!==null&&!re(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function je(e){return b.call(e)==="[object ArrayBuffer]"}function Ze(e){return b.call(e)==="[object FormData]"}function er(e){var r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&je(e.buffer),r}function rr(e){return typeof e=="string"}function tr(e){return typeof e=="number"}function De(e){return e!==null&&typeof e=="object"}function L(e){if(b.call(e)!=="[object Object]")return!1;var r=Object.getPrototypeOf(e);return r===null||r===Object.prototype}function nr(e){return b.call(e)==="[object Date]"}function ir(e){return b.call(e)==="[object File]"}function sr(e){return b.call(e)==="[object Blob]"}function Ie(e){return b.call(e)==="[object Function]"}function ar(e){return De(e)&&Ie(e.pipe)}function or(e){return b.call(e)==="[object URLSearchParams]"}function ur(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function fr(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function se(e,r){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),ie(e))for(var n=0,i=e.length;n<i;n++)r.call(null,e[n],n,e);else for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.call(null,e[t],t,e)}function te(){var e={};function r(t,s){L(e[s])&&L(t)?e[s]=te(e[s],t):L(t)?e[s]=te({},t):ie(t)?e[s]=t.slice():e[s]=t}for(var n=0,i=arguments.length;n<i;n++)se(arguments[n],r);return e}function lr(e,r,n){return se(r,function(t,s){n&&typeof t=="function"?e[s]=Ye(t,n):e[s]=t}),e}function cr(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}var p={isArray:ie,isArrayBuffer:je,isBuffer:Qe,isFormData:Ze,isArrayBufferView:er,isString:rr,isNumber:tr,isObject:De,isPlainObject:L,isUndefined:re,isDate:nr,isFile:ir,isBlob:sr,isFunction:Ie,isStream:ar,isURLSearchParams:or,isStandardBrowserEnv:fr,forEach:se,merge:te,extend:lr,trim:ur,stripBOM:cr},C=p;function ce(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var _e=function(r,n,i){if(!n)return r;var t;if(i)t=i(n);else if(C.isURLSearchParams(n))t=n.toString();else{var s=[];C.forEach(n,function(l,f){l===null||typeof l>"u"||(C.isArray(l)?f=f+"[]":l=[l],C.forEach(l,function(a){C.isDate(a)?a=a.toISOString():C.isObject(a)&&(a=JSON.stringify(a)),s.push(ce(f)+"="+ce(a))}))}),t=s.join("&")}if(t){var u=r.indexOf("#");u!==-1&&(r=r.slice(0,u)),r+=(r.indexOf("?")===-1?"?":"&")+t}return r},dr=p;function N(){this.handlers=[]}N.prototype.use=function(r,n,i){return this.handlers.push({fulfilled:r,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};N.prototype.eject=function(r){this.handlers[r]&&(this.handlers[r]=null)};N.prototype.forEach=function(r){dr.forEach(this.handlers,function(i){i!==null&&r(i)})};var hr=N,pr=p,mr=function(r,n){pr.forEach(r,function(t,s){s!==n&&s.toUpperCase()===n.toUpperCase()&&(r[n]=t,delete r[s])})},$e=function(r,n,i,t,s){return r.config=n,i&&(r.code=i),r.request=t,r.response=s,r.isAxiosError=!0,r.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},r},I,de;function ke(){if(de)return I;de=1;var e=$e;return I=function(n,i,t,s,u){var o=new Error(n);return e(o,i,t,s,u)},I}var _,he;function vr(){if(he)return _;he=1;var e=ke();return _=function(n,i,t){var s=t.config.validateStatus;!t.status||!s||s(t.status)?n(t):i(e("Request failed with status code "+t.status,t.config,null,t.request,t))},_}var $,pe;function yr(){if(pe)return $;pe=1;var e=p;return $=e.isStandardBrowserEnv()?function(){return{write:function(i,t,s,u,o,l){var f=[];f.push(i+"="+encodeURIComponent(t)),e.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),e.isString(u)&&f.push("path="+u),e.isString(o)&&f.push("domain="+o),l===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(i){var t=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(i){this.write(i,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),$}var k,me;function wr(){return me||(me=1,k=function(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}),k}var F,ve;function Er(){return ve||(ve=1,F=function(r,n){return n?r.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):r}),F}var H,ye;function br(){if(ye)return H;ye=1;var e=wr(),r=Er();return H=function(i,t){return i&&!e(t)?r(i,t):t},H}var M,we;function Rr(){if(we)return M;we=1;var e=p,r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return M=function(i){var t={},s,u,o;return i&&e.forEach(i.split(`
`),function(f){if(o=f.indexOf(":"),s=e.trim(f.substr(0,o)).toLowerCase(),u=e.trim(f.substr(o+1)),s){if(t[s]&&r.indexOf(s)>=0)return;s==="set-cookie"?t[s]=(t[s]?t[s]:[]).concat([u]):t[s]=t[s]?t[s]+", "+u:u}}),t},M}var J,Ee;function gr(){if(Ee)return J;Ee=1;var e=p;return J=e.isStandardBrowserEnv()?function(){var n=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a"),t;function s(u){var o=u;return n&&(i.setAttribute("href",o),o=i.href),i.setAttribute("href",o),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return t=s(window.location.href),function(o){var l=e.isString(o)?s(o):o;return l.protocol===t.protocol&&l.host===t.host}}():function(){return function(){return!0}}(),J}var V,be;function T(){if(be)return V;be=1;function e(r){this.message=r}return e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,V=e,V}var z,Re;function ge(){if(Re)return z;Re=1;var e=p,r=vr(),n=yr(),i=_e,t=br(),s=Rr(),u=gr(),o=ke(),l=B(),f=T();return z=function(a){return new Promise(function(h,E){var A=a.data,O=a.headers,x=a.responseType,g;function oe(){a.cancelToken&&a.cancelToken.unsubscribe(g),a.signal&&a.signal.removeEventListener("abort",g)}e.isFormData(A)&&delete O["Content-Type"];var d=new XMLHttpRequest;if(a.auth){var Xe=a.auth.username||"",We=a.auth.password?unescape(encodeURIComponent(a.auth.password)):"";O.Authorization="Basic "+btoa(Xe+":"+We)}var ue=t(a.baseURL,a.url);d.open(a.method.toUpperCase(),i(ue,a.params,a.paramsSerializer),!0),d.timeout=a.timeout;function fe(){if(d){var y="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,S=!x||x==="text"||x==="json"?d.responseText:d.response,R={data:S,status:d.status,statusText:d.statusText,headers:y,config:a,request:d};r(function(D){h(D),oe()},function(D){E(D),oe()},R),d=null}}if("onloadend"in d?d.onloadend=fe:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(fe)},d.onabort=function(){d&&(E(o("Request aborted",a,"ECONNABORTED",d)),d=null)},d.onerror=function(){E(o("Network Error",a,null,d)),d=null},d.ontimeout=function(){var S=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded",R=a.transitional||l.transitional;a.timeoutErrorMessage&&(S=a.timeoutErrorMessage),E(o(S,a,R.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",d)),d=null},e.isStandardBrowserEnv()){var le=(a.withCredentials||u(ue))&&a.xsrfCookieName?n.read(a.xsrfCookieName):void 0;le&&(O[a.xsrfHeaderName]=le)}"setRequestHeader"in d&&e.forEach(O,function(S,R){typeof A>"u"&&R.toLowerCase()==="content-type"?delete O[R]:d.setRequestHeader(R,S)}),e.isUndefined(a.withCredentials)||(d.withCredentials=!!a.withCredentials),x&&x!=="json"&&(d.responseType=a.responseType),typeof a.onDownloadProgress=="function"&&d.addEventListener("progress",a.onDownloadProgress),typeof a.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",a.onUploadProgress),(a.cancelToken||a.signal)&&(g=function(y){d&&(E(!y||y&&y.type?new f("canceled"):y),d.abort(),d=null)},a.cancelToken&&a.cancelToken.subscribe(g),a.signal&&(a.signal.aborted?g():a.signal.addEventListener("abort",g))),A||(A=null),d.send(A)})},z}var X,Se;function B(){if(Se)return X;Se=1;var e=p,r=mr,n=$e,i={"Content-Type":"application/x-www-form-urlencoded"};function t(l,f){!e.isUndefined(l)&&e.isUndefined(l["Content-Type"])&&(l["Content-Type"]=f)}function s(){var l;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(l=ge()),l}function u(l,f,c){if(e.isString(l))try{return(f||JSON.parse)(l),e.trim(l)}catch(a){if(a.name!=="SyntaxError")throw a}return(c||JSON.stringify)(l)}var o={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:s(),transformRequest:[function(f,c){return r(c,"Accept"),r(c,"Content-Type"),e.isFormData(f)||e.isArrayBuffer(f)||e.isBuffer(f)||e.isStream(f)||e.isFile(f)||e.isBlob(f)?f:e.isArrayBufferView(f)?f.buffer:e.isURLSearchParams(f)?(t(c,"application/x-www-form-urlencoded;charset=utf-8"),f.toString()):e.isObject(f)||c&&c["Content-Type"]==="application/json"?(t(c,"application/json"),u(f)):f}],transformResponse:[function(f){var c=this.transitional||o.transitional,a=c&&c.silentJSONParsing,v=c&&c.forcedJSONParsing,h=!a&&this.responseType==="json";if(h||v&&e.isString(f)&&f.length)try{return JSON.parse(f)}catch(E){if(h)throw E.name==="SyntaxError"?n(E,this,"E_JSON_PARSE"):E}return f}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(f){return f>=200&&f<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};return e.forEach(["delete","get","head"],function(f){o.headers[f]={}}),e.forEach(["post","put","patch"],function(f){o.headers[f]=e.merge(i)}),X=o,X}var Sr=p,Cr=B(),qr=function(r,n,i){var t=this||Cr;return Sr.forEach(i,function(u){r=u.call(t,r,n)}),r},W,Ce;function Fe(){return Ce||(Ce=1,W=function(r){return!!(r&&r.__CANCEL__)}),W}var qe=p,K=qr,Ar=Fe(),Or=B(),xr=T();function G(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new xr("canceled")}var Ur=function(r){G(r),r.headers=r.headers||{},r.data=K.call(r,r.data,r.headers,r.transformRequest),r.headers=qe.merge(r.headers.common||{},r.headers[r.method]||{},r.headers),qe.forEach(["delete","get","head","post","put","patch","common"],function(t){delete r.headers[t]});var n=r.adapter||Or.adapter;return n(r).then(function(t){return G(r),t.data=K.call(r,t.data,t.headers,r.transformResponse),t},function(t){return Ar(t)||(G(r),t&&t.response&&(t.response.data=K.call(r,t.response.data,t.response.headers,r.transformResponse))),Promise.reject(t)})},m=p,He=function(r,n){n=n||{};var i={};function t(c,a){return m.isPlainObject(c)&&m.isPlainObject(a)?m.merge(c,a):m.isPlainObject(a)?m.merge({},a):m.isArray(a)?a.slice():a}function s(c){if(m.isUndefined(n[c])){if(!m.isUndefined(r[c]))return t(void 0,r[c])}else return t(r[c],n[c])}function u(c){if(!m.isUndefined(n[c]))return t(void 0,n[c])}function o(c){if(m.isUndefined(n[c])){if(!m.isUndefined(r[c]))return t(void 0,r[c])}else return t(void 0,n[c])}function l(c){if(c in n)return t(r[c],n[c]);if(c in r)return t(void 0,r[c])}var f={url:u,method:u,data:u,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l};return m.forEach(Object.keys(r).concat(Object.keys(n)),function(a){var v=f[a]||s,h=v(a);m.isUndefined(h)&&v!==l||(i[a]=h)}),i},Y,Ae;function Me(){return Ae||(Ae=1,Y={version:"0.25.0"}),Y}var Lr=Me().version,ae={};["object","boolean","number","function","string","symbol"].forEach(function(e,r){ae[e]=function(i){return typeof i===e||"a"+(r<1?"n ":" ")+e}});var Oe={};ae.transitional=function(r,n,i){function t(s,u){return"[Axios v"+Lr+"] Transitional option '"+s+"'"+u+(i?". "+i:"")}return function(s,u,o){if(r===!1)throw new Error(t(u," has been removed"+(n?" in "+n:"")));return n&&!Oe[u]&&(Oe[u]=!0,console.warn(t(u," has been deprecated since v"+n+" and will be removed in the near future"))),r?r(s,u,o):!0}};function Pr(e,r,n){if(typeof e!="object")throw new TypeError("options must be an object");for(var i=Object.keys(e),t=i.length;t-- >0;){var s=i[t],u=r[s];if(u){var o=e[s],l=o===void 0||u(o,s,e);if(l!==!0)throw new TypeError("option "+s+" must be "+l);continue}if(n!==!0)throw Error("Unknown option "+s)}}var Nr={assertOptions:Pr,validators:ae},Je=p,Tr=_e,xe=hr,Ue=Ur,j=He,Ve=Nr,q=Ve.validators;function U(e){this.defaults=e,this.interceptors={request:new xe,response:new xe}}U.prototype.request=function(r,n){if(typeof r=="string"?(n=n||{},n.url=r):n=r||{},!n.url)throw new Error("Provided config url is not valid");n=j(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var i=n.transitional;i!==void 0&&Ve.assertOptions(i,{silentJSONParsing:q.transitional(q.boolean),forcedJSONParsing:q.transitional(q.boolean),clarifyTimeoutError:q.transitional(q.boolean)},!1);var t=[],s=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(s=s&&h.synchronous,t.unshift(h.fulfilled,h.rejected))});var u=[];this.interceptors.response.forEach(function(h){u.push(h.fulfilled,h.rejected)});var o;if(!s){var l=[Ue,void 0];for(Array.prototype.unshift.apply(l,t),l=l.concat(u),o=Promise.resolve(n);l.length;)o=o.then(l.shift(),l.shift());return o}for(var f=n;t.length;){var c=t.shift(),a=t.shift();try{f=c(f)}catch(v){a(v);break}}try{o=Ue(f)}catch(v){return Promise.reject(v)}for(;u.length;)o=o.then(u.shift(),u.shift());return o};U.prototype.getUri=function(r){if(!r.url)throw new Error("Provided config url is not valid");return r=j(this.defaults,r),Tr(r.url,r.params,r.paramsSerializer).replace(/^\?/,"")};Je.forEach(["delete","get","head","options"],function(r){U.prototype[r]=function(n,i){return this.request(j(i||{},{method:r,url:n,data:(i||{}).data}))}});Je.forEach(["post","put","patch"],function(r){U.prototype[r]=function(n,i,t){return this.request(j(t||{},{method:r,url:n,data:i}))}});var Br=U,Q,Le;function jr(){if(Le)return Q;Le=1;var e=T();function r(n){if(typeof n!="function")throw new TypeError("executor must be a function.");var i;this.promise=new Promise(function(u){i=u});var t=this;this.promise.then(function(s){if(t._listeners){var u,o=t._listeners.length;for(u=0;u<o;u++)t._listeners[u](s);t._listeners=null}}),this.promise.then=function(s){var u,o=new Promise(function(l){t.subscribe(l),u=l}).then(s);return o.cancel=function(){t.unsubscribe(u)},o},n(function(u){t.reason||(t.reason=new e(u),i(t.reason))})}return r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]},r.prototype.unsubscribe=function(i){if(this._listeners){var t=this._listeners.indexOf(i);t!==-1&&this._listeners.splice(t,1)}},r.source=function(){var i,t=new r(function(u){i=u});return{token:t,cancel:i}},Q=r,Q}var Z,Pe;function Dr(){return Pe||(Pe=1,Z=function(r){return function(i){return r.apply(null,i)}}),Z}var ee,Ne;function Ir(){if(Ne)return ee;Ne=1;var e=p;return ee=function(n){return e.isObject(n)&&n.isAxiosError===!0},ee}var Te=p,_r=Be,P=Br,$r=He,kr=B();function ze(e){var r=new P(e),n=_r(P.prototype.request,r);return Te.extend(n,P.prototype,r),Te.extend(n,r),n.create=function(t){return ze($r(e,t))},n}var w=ze(kr);w.Axios=P;w.Cancel=T();w.CancelToken=jr();w.isCancel=Fe();w.VERSION=Me().version;w.all=function(r){return Promise.all(r)};w.spread=Dr();w.isAxiosError=Ir();ne.exports=w;ne.exports.default=w;var Fr=ne.exports,Hr=Fr;const Mr=Ge(Hr);window.axios=Mr;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";let Jr=document.querySelector(".passwordLoginUserViewU");Jr.addEventListener("click",e=>{let r=document.getElementById("passwordLoginUserU"),n=document.getElementById("imgPassLoginUserU");r.type=="password"?(r.type="text",n.src="/storage/img/icons/eye-fill.svg"):(r.type="password",n.src="/storage/img/icons/eye-slash-fill.svg")});let Vr=document.querySelector(".passwordLoginUserViewA");Vr.addEventListener("click",e=>{let r=document.getElementById("passwordLoginAdmin"),n=document.getElementById("imgPassLoginAdmin");r.type=="password"?(r.type="text",n.src="/storage/img/icons/eye-fill.svg"):(r.type="password",n.src="/storage/img/icons/eye-slash-fill.svg")});