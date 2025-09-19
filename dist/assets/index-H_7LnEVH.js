function ig(t,r){for(var l=0;l<r.length;l++){const i=r[l];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in t)){const u=Object.getOwnPropertyDescriptor(i,s);u&&Object.defineProperty(t,s,u.get?u:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function l(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(s){if(s.ep)return;s.ep=!0;const u=l(s);fetch(s.href,u)}})();function Dm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var j0={exports:{}},go={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t3;function og(){if(t3)return go;t3=1;var t=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function l(i,s,u){var f=null;if(u!==void 0&&(f=""+u),s.key!==void 0&&(f=""+s.key),"key"in s){u={};for(var p in s)p!=="key"&&(u[p]=s[p])}else u=s;return s=u.ref,{$$typeof:t,type:i,key:f,ref:s!==void 0?s:null,props:u}}return go.Fragment=r,go.jsx=l,go.jsxs=l,go}var n3;function sg(){return n3||(n3=1,j0.exports=og()),j0.exports}var q=sg(),$0={exports:{}},ke={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r3;function ug(){if(r3)return ke;r3=1;var t=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),v=Symbol.iterator;function y(D){return D===null||typeof D!="object"?null:(D=v&&D[v]||D["@@iterator"],typeof D=="function"?D:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function M(D,X,se){this.props=D,this.context=X,this.refs=T,this.updater=se||x}M.prototype.isReactComponent={},M.prototype.setState=function(D,X){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,X,"setState")},M.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _(){}_.prototype=M.prototype;function L(D,X,se){this.props=D,this.context=X,this.refs=T,this.updater=se||x}var O=L.prototype=new _;O.constructor=L,E(O,M.prototype),O.isPureReactComponent=!0;var w=Array.isArray,A={H:null,A:null,T:null,S:null,V:null},B=Object.prototype.hasOwnProperty;function k(D,X,se,ae,ue,fe){return se=fe.ref,{$$typeof:t,type:D,key:X,ref:se!==void 0?se:null,props:fe}}function Z(D,X){return k(D.type,X,void 0,void 0,void 0,D.props)}function W(D){return typeof D=="object"&&D!==null&&D.$$typeof===t}function ee(D){var X={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(se){return X[se]})}var I=/\/+/g;function S(D,X){return typeof D=="object"&&D!==null&&D.key!=null?ee(""+D.key):X.toString(36)}function F(){}function P(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(F,F):(D.status="pending",D.then(function(X){D.status==="pending"&&(D.status="fulfilled",D.value=X)},function(X){D.status==="pending"&&(D.status="rejected",D.reason=X)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function j(D,X,se,ae,ue){var fe=typeof D;(fe==="undefined"||fe==="boolean")&&(D=null);var ce=!1;if(D===null)ce=!0;else switch(fe){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(D.$$typeof){case t:case r:ce=!0;break;case K:return ce=D._init,j(ce(D._payload),X,se,ae,ue)}}if(ce)return ue=ue(D),ce=ae===""?"."+S(D,0):ae,w(ue)?(se="",ce!=null&&(se=ce.replace(I,"$&/")+"/"),j(ue,X,se,"",function(Le){return Le})):ue!=null&&(W(ue)&&(ue=Z(ue,se+(ue.key==null||D&&D.key===ue.key?"":(""+ue.key).replace(I,"$&/")+"/")+ce)),X.push(ue)),1;ce=0;var ze=ae===""?".":ae+":";if(w(D))for(var be=0;be<D.length;be++)ae=D[be],fe=ze+S(ae,be),ce+=j(ae,X,se,fe,ue);else if(be=y(D),typeof be=="function")for(D=be.call(D),be=0;!(ae=D.next()).done;)ae=ae.value,fe=ze+S(ae,be++),ce+=j(ae,X,se,fe,ue);else if(fe==="object"){if(typeof D.then=="function")return j(P(D),X,se,ae,ue);throw X=String(D),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return ce}function C(D,X,se){if(D==null)return D;var ae=[],ue=0;return j(D,ae,"","",function(fe){return X.call(se,fe,ue++)}),ae}function V(D){if(D._status===-1){var X=D._result;X=X(),X.then(function(se){(D._status===0||D._status===-1)&&(D._status=1,D._result=se)},function(se){(D._status===0||D._status===-1)&&(D._status=2,D._result=se)}),D._status===-1&&(D._status=0,D._result=X)}if(D._status===1)return D._result.default;throw D._result}var oe=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function te(){}return ke.Children={map:C,forEach:function(D,X,se){C(D,function(){X.apply(this,arguments)},se)},count:function(D){var X=0;return C(D,function(){X++}),X},toArray:function(D){return C(D,function(X){return X})||[]},only:function(D){if(!W(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},ke.Component=M,ke.Fragment=l,ke.Profiler=s,ke.PureComponent=L,ke.StrictMode=i,ke.Suspense=m,ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=A,ke.__COMPILER_RUNTIME={__proto__:null,c:function(D){return A.H.useMemoCache(D)}},ke.cache=function(D){return function(){return D.apply(null,arguments)}},ke.cloneElement=function(D,X,se){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var ae=E({},D.props),ue=D.key,fe=void 0;if(X!=null)for(ce in X.ref!==void 0&&(fe=void 0),X.key!==void 0&&(ue=""+X.key),X)!B.call(X,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&X.ref===void 0||(ae[ce]=X[ce]);var ce=arguments.length-2;if(ce===1)ae.children=se;else if(1<ce){for(var ze=Array(ce),be=0;be<ce;be++)ze[be]=arguments[be+2];ae.children=ze}return k(D.type,ue,void 0,void 0,fe,ae)},ke.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},ke.createElement=function(D,X,se){var ae,ue={},fe=null;if(X!=null)for(ae in X.key!==void 0&&(fe=""+X.key),X)B.call(X,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(ue[ae]=X[ae]);var ce=arguments.length-2;if(ce===1)ue.children=se;else if(1<ce){for(var ze=Array(ce),be=0;be<ce;be++)ze[be]=arguments[be+2];ue.children=ze}if(D&&D.defaultProps)for(ae in ce=D.defaultProps,ce)ue[ae]===void 0&&(ue[ae]=ce[ae]);return k(D,fe,void 0,void 0,null,ue)},ke.createRef=function(){return{current:null}},ke.forwardRef=function(D){return{$$typeof:p,render:D}},ke.isValidElement=W,ke.lazy=function(D){return{$$typeof:K,_payload:{_status:-1,_result:D},_init:V}},ke.memo=function(D,X){return{$$typeof:h,type:D,compare:X===void 0?null:X}},ke.startTransition=function(D){var X=A.T,se={};A.T=se;try{var ae=D(),ue=A.S;ue!==null&&ue(se,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(te,oe)}catch(fe){oe(fe)}finally{A.T=X}},ke.unstable_useCacheRefresh=function(){return A.H.useCacheRefresh()},ke.use=function(D){return A.H.use(D)},ke.useActionState=function(D,X,se){return A.H.useActionState(D,X,se)},ke.useCallback=function(D,X){return A.H.useCallback(D,X)},ke.useContext=function(D){return A.H.useContext(D)},ke.useDebugValue=function(){},ke.useDeferredValue=function(D,X){return A.H.useDeferredValue(D,X)},ke.useEffect=function(D,X,se){var ae=A.H;if(typeof se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ae.useEffect(D,X)},ke.useId=function(){return A.H.useId()},ke.useImperativeHandle=function(D,X,se){return A.H.useImperativeHandle(D,X,se)},ke.useInsertionEffect=function(D,X){return A.H.useInsertionEffect(D,X)},ke.useLayoutEffect=function(D,X){return A.H.useLayoutEffect(D,X)},ke.useMemo=function(D,X){return A.H.useMemo(D,X)},ke.useOptimistic=function(D,X){return A.H.useOptimistic(D,X)},ke.useReducer=function(D,X,se){return A.H.useReducer(D,X,se)},ke.useRef=function(D){return A.H.useRef(D)},ke.useState=function(D){return A.H.useState(D)},ke.useSyncExternalStore=function(D,X,se){return A.H.useSyncExternalStore(D,X,se)},ke.useTransition=function(){return A.H.useTransition()},ke.version="19.1.1",ke}var a3;function zd(){return a3||(a3=1,$0.exports=ug()),$0.exports}var R=zd();const Tn=Dm(R),od=ig({__proto__:null,default:Tn},[R]);var P0={exports:{}},vo={},q0={exports:{}},Y0={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l3;function cg(){return l3||(l3=1,(function(t){function r(C,V){var oe=C.length;C.push(V);e:for(;0<oe;){var te=oe-1>>>1,D=C[te];if(0<s(D,V))C[te]=V,C[oe]=D,oe=te;else break e}}function l(C){return C.length===0?null:C[0]}function i(C){if(C.length===0)return null;var V=C[0],oe=C.pop();if(oe!==V){C[0]=oe;e:for(var te=0,D=C.length,X=D>>>1;te<X;){var se=2*(te+1)-1,ae=C[se],ue=se+1,fe=C[ue];if(0>s(ae,oe))ue<D&&0>s(fe,ae)?(C[te]=fe,C[ue]=oe,te=ue):(C[te]=ae,C[se]=oe,te=se);else if(ue<D&&0>s(fe,oe))C[te]=fe,C[ue]=oe,te=ue;else break e}}return V}function s(C,V){var oe=C.sortIndex-V.sortIndex;return oe!==0?oe:C.id-V.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();t.unstable_now=function(){return f.now()-p}}var m=[],h=[],K=1,v=null,y=3,x=!1,E=!1,T=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function w(C){for(var V=l(h);V!==null;){if(V.callback===null)i(h);else if(V.startTime<=C)i(h),V.sortIndex=V.expirationTime,r(m,V);else break;V=l(h)}}function A(C){if(T=!1,w(C),!E)if(l(m)!==null)E=!0,B||(B=!0,S());else{var V=l(h);V!==null&&j(A,V.startTime-C)}}var B=!1,k=-1,Z=5,W=-1;function ee(){return M?!0:!(t.unstable_now()-W<Z)}function I(){if(M=!1,B){var C=t.unstable_now();W=C;var V=!0;try{e:{E=!1,T&&(T=!1,L(k),k=-1),x=!0;var oe=y;try{t:{for(w(C),v=l(m);v!==null&&!(v.expirationTime>C&&ee());){var te=v.callback;if(typeof te=="function"){v.callback=null,y=v.priorityLevel;var D=te(v.expirationTime<=C);if(C=t.unstable_now(),typeof D=="function"){v.callback=D,w(C),V=!0;break t}v===l(m)&&i(m),w(C)}else i(m);v=l(m)}if(v!==null)V=!0;else{var X=l(h);X!==null&&j(A,X.startTime-C),V=!1}}break e}finally{v=null,y=oe,x=!1}V=void 0}}finally{V?S():B=!1}}}var S;if(typeof O=="function")S=function(){O(I)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,P=F.port2;F.port1.onmessage=I,S=function(){P.postMessage(null)}}else S=function(){_(I,0)};function j(C,V){k=_(function(){C(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_next=function(C){switch(y){case 1:case 2:case 3:var V=3;break;default:V=y}var oe=y;y=V;try{return C()}finally{y=oe}},t.unstable_requestPaint=function(){M=!0},t.unstable_runWithPriority=function(C,V){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var oe=y;y=C;try{return V()}finally{y=oe}},t.unstable_scheduleCallback=function(C,V,oe){var te=t.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?te+oe:te):oe=te,C){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=oe+D,C={id:K++,callback:V,priorityLevel:C,startTime:oe,expirationTime:D,sortIndex:-1},oe>te?(C.sortIndex=oe,r(h,C),l(m)===null&&C===l(h)&&(T?(L(k),k=-1):T=!0,j(A,oe-te))):(C.sortIndex=D,r(m,C),E||x||(E=!0,B||(B=!0,S()))),C},t.unstable_shouldYield=ee,t.unstable_wrapCallback=function(C){var V=y;return function(){var oe=y;y=V;try{return C.apply(this,arguments)}finally{y=oe}}}})(Y0)),Y0}var i3;function fg(){return i3||(i3=1,q0.exports=cg()),q0.exports}var V0={exports:{}},pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o3;function dg(){if(o3)return pn;o3=1;var t=zd();function r(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var K=2;K<arguments.length;K++)h+="&args[]="+encodeURIComponent(arguments[K])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var i={d:{f:l,r:function(){throw Error(r(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},s=Symbol.for("react.portal");function u(m,h,K){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:m,containerInfo:h,implementation:K}}var f=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,pn.createPortal=function(m,h){var K=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(r(299));return u(m,h,null,K)},pn.flushSync=function(m){var h=f.T,K=i.p;try{if(f.T=null,i.p=2,m)return m()}finally{f.T=h,i.p=K,i.d.f()}},pn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,i.d.C(m,h))},pn.prefetchDNS=function(m){typeof m=="string"&&i.d.D(m)},pn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var K=h.as,v=p(K,h.crossOrigin),y=typeof h.integrity=="string"?h.integrity:void 0,x=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;K==="style"?i.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:x}):K==="script"&&i.d.X(m,{crossOrigin:v,integrity:y,fetchPriority:x,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},pn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var K=p(h.as,h.crossOrigin);i.d.M(m,{crossOrigin:K,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&i.d.M(m)},pn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var K=h.as,v=p(K,h.crossOrigin);i.d.L(m,K,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},pn.preloadModule=function(m,h){if(typeof m=="string")if(h){var K=p(h.as,h.crossOrigin);i.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:K,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else i.d.m(m)},pn.requestFormReset=function(m){i.d.r(m)},pn.unstable_batchedUpdates=function(m,h){return m(h)},pn.useFormState=function(m,h,K){return f.H.useFormState(m,h,K)},pn.useFormStatus=function(){return f.H.useHostTransitionStatus()},pn.version="19.1.1",pn}var s3;function Nm(){if(s3)return V0.exports;s3=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),V0.exports=dg(),V0.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u3;function pg(){if(u3)return vo;u3=1;var t=fg(),r=zd(),l=Nm();function i(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(i(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(i(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===a)return p(c),e;if(d===o)return p(c),n;d=d.sibling}throw Error(i(188))}if(a.return!==o.return)a=c,o=d;else{for(var g=!1,b=c.child;b;){if(b===a){g=!0,a=c,o=d;break}if(b===o){g=!0,o=c,a=d;break}b=b.sibling}if(!g){for(b=d.child;b;){if(b===a){g=!0,a=d,o=c;break}if(b===o){g=!0,o=d,a=c;break}b=b.sibling}if(!g)throw Error(i(189))}}if(a.alternate!==o)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?e:n}function h(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=h(e),n!==null)return n;e=e.sibling}return null}var K=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),O=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),ee=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function S(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var F=Symbol.for("react.client.reference");function P(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===F?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case M:return"Profiler";case T:return"StrictMode";case A:return"Suspense";case B:return"SuspenseList";case W:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case O:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case k:return n=e.displayName||null,n!==null?n:P(e.type)||"Memo";case Z:n=e._payload,e=e._init;try{return P(e(n))}catch{}}return null}var j=Array.isArray,C=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},te=[],D=-1;function X(e){return{current:e}}function se(e){0>D||(e.current=te[D],te[D]=null,D--)}function ae(e,n){D++,te[D]=e.current,e.current=n}var ue=X(null),fe=X(null),ce=X(null),ze=X(null);function be(e,n){switch(ae(ce,n),ae(fe,e),ae(ue,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Oh(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Oh(n),e=Mh(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}se(ue),ae(ue,e)}function Le(){se(ue),se(fe),se(ce)}function Se(e){e.memoizedState!==null&&ae(ze,e);var n=ue.current,a=Mh(n,e.type);n!==a&&(ae(fe,e),ae(ue,a))}function Ne(e){fe.current===e&&(se(ue),se(fe)),ze.current===e&&(se(ze),fo._currentValue=oe)}var Re=Object.prototype.hasOwnProperty,lt=t.unstable_scheduleCallback,Ce=t.unstable_cancelCallback,Ve=t.unstable_shouldYield,Ct=t.unstable_requestPaint,_e=t.unstable_now,Ge=t.unstable_getCurrentPriorityLevel,St=t.unstable_ImmediatePriority,Xe=t.unstable_UserBlockingPriority,je=t.unstable_NormalPriority,me=t.unstable_LowPriority,$t=t.unstable_IdlePriority,it=t.log,Kn=t.unstable_setDisableYieldValue,Zt=null,ot=null;function At(e){if(typeof it=="function"&&Kn(e),ot&&typeof ot.setStrictMode=="function")try{ot.setStrictMode(Zt,e)}catch{}}var st=Math.clz32?Math.clz32:nn,tn=Math.log,Ue=Math.LN2;function nn(e){return e>>>=0,e===0?32:31-(tn(e)/Ue|0)|0}var Vt=256,cn=4194304;function he(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ye(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,d=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~d,o!==0?c=he(o):(g&=b,g!==0?c=he(g):a||(a=b&~e,a!==0&&(c=he(a))))):(b=o&~d,b!==0?c=he(b):g!==0?c=he(g):a||(a=o&~e,a!==0&&(c=he(a)))),c===0?0:n!==0&&n!==c&&(n&d)===0&&(d=c&-c,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:c}function pt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function fn(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qn(){var e=Vt;return Vt<<=1,(Vt&4194048)===0&&(Vt=256),e}function cl(){var e=cn;return cn<<=1,(cn&62914560)===0&&(cn=4194304),e}function _a(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function sr(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Si(e,n,a,o,c,d){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,N=e.expirationTimes,$=e.hiddenUpdates;for(a=g&~a;0<a;){var J=31-st(a),re=1<<J;b[J]=0,N[J]=-1;var Y=$[J];if(Y!==null)for($[J]=null,J=0;J<Y.length;J++){var G=Y[J];G!==null&&(G.lane&=-536870913)}a&=~re}o!==0&&fl(e,o,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(g&~n))}function fl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-st(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function dl(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-st(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function za(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Be(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function On(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:Zh(e.type))}function de(e,n){var a=V.p;try{return V.p=e,n()}finally{V.p=a}}var Ke=Math.random().toString(36).slice(2),Ae="__reactFiber$"+Ke,Oe="__reactProps$"+Ke,ht="__reactContainer$"+Ke,vn="__reactEvents$"+Ke,Ur="__reactListeners$"+Ke,La="__reactHandles$"+Ke,xi="__reactResources$"+Ke,kr="__reactMarker$"+Ke;function Nc(e){delete e[Ae],delete e[Oe],delete e[vn],delete e[Ur],delete e[La]}function pl(e){var n=e[Ae];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ht]||a[Ae]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=_h(e);e!==null;){if(a=e[Ae])return a;e=_h(e)}return n}e=a,a=e.parentNode}return null}function hl(e){if(e=e[Ae]||e[ht]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Ti(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(i(33))}function ml(e){var n=e[xi];return n||(n=e[xi]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Qt(e){e[kr]=!0}var v1=new Set,y1={};function Ua(e,n){Kl(e,n),Kl(e+"Capture",n)}function Kl(e,n){for(y1[e]=n,e=0;e<n.length;e++)v1.add(n[e])}var W4=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),b1={},S1={};function J4(e){return Re.call(S1,e)?!0:Re.call(b1,e)?!1:W4.test(e)?S1[e]=!0:(b1[e]=!0,!1)}function hs(e,n,a){if(J4(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ms(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Hr(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Bc,x1;function gl(e){if(Bc===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Bc=n&&n[1]||"",x1=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bc+e+x1}var _c=!1;function zc(e,n){if(!e||_c)return"";_c=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var re=function(){throw Error()};if(Object.defineProperty(re.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(re,[])}catch(G){var Y=G}Reflect.construct(e,[],re)}else{try{re.call()}catch(G){Y=G}e.call(re.prototype)}}else{try{throw Error()}catch(G){Y=G}(re=e())&&typeof re.catch=="function"&&re.catch(function(){})}}catch(G){if(G&&Y&&typeof G.stack=="string")return[G.stack,Y.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),g=d[0],b=d[1];if(g&&b){var N=g.split(`
`),$=b.split(`
`);for(c=o=0;o<N.length&&!N[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===N.length||c===$.length)for(o=N.length-1,c=$.length-1;1<=o&&0<=c&&N[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(N[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||N[o]!==$[c]){var J=`
`+N[o].replace(" at new "," at ");return e.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",e.displayName)),J}while(1<=o&&0<=c);break}}}finally{_c=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?gl(a):""}function e5(e){switch(e.tag){case 26:case 27:case 5:return gl(e.type);case 16:return gl("Lazy");case 13:return gl("Suspense");case 19:return gl("SuspenseList");case 0:case 15:return zc(e.type,!1);case 11:return zc(e.type.render,!1);case 1:return zc(e.type,!0);case 31:return gl("Activity");default:return""}}function T1(e){try{var n="";do n+=e5(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Yn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function E1(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function t5(e){var n=E1(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,d=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){o=""+g,d.call(this,g)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(g){o=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ks(e){e._valueTracker||(e._valueTracker=t5(e))}function C1(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=E1(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function gs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var n5=/[\n"\\]/g;function Vn(e){return e.replace(n5,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Lc(e,n,a,o,c,d,g,b){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Yn(n)):e.value!==""+Yn(n)&&(e.value=""+Yn(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?Uc(e,g,Yn(n)):a!=null?Uc(e,g,Yn(a)):o!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Yn(b):e.removeAttribute("name")}function w1(e,n,a,o,c,d,g,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+Yn(a):"",n=n!=null?""+Yn(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g)}function Uc(e,n,a){n==="number"&&gs(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function vl(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Yn(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function R1(e,n,a){if(n!=null&&(n=""+Yn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Yn(a):""}function A1(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(i(92));if(j(o)){if(1<o.length)throw Error(i(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Yn(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function yl(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var r5=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function O1(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||r5.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function M1(e,n,a){if(n!=null&&typeof n!="object")throw Error(i(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&O1(e,c,o)}else for(var d in n)n.hasOwnProperty(d)&&O1(e,d,n[d])}function kc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var a5=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),l5=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vs(e){return l5.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Hc=null;function jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bl=null,Sl=null;function D1(e){var n=hl(e);if(n&&(e=n.stateNode)){var a=e[Oe]||null;e:switch(e=n.stateNode,n.type){case"input":if(Lc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[Oe]||null;if(!c)throw Error(i(90));Lc(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&C1(o)}break e;case"textarea":R1(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&vl(e,!!a.multiple,n,!1)}}}var $c=!1;function N1(e,n,a){if($c)return e(n,a);$c=!0;try{var o=e(n);return o}finally{if($c=!1,(bl!==null||Sl!==null)&&(ru(),bl&&(n=bl,e=Sl,Sl=bl=null,D1(n),e)))for(n=0;n<e.length;n++)D1(e[n])}}function Ei(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Oe]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(i(231,n,typeof a));return a}var jr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pc=!1;if(jr)try{var Ci={};Object.defineProperty(Ci,"passive",{get:function(){Pc=!0}}),window.addEventListener("test",Ci,Ci),window.removeEventListener("test",Ci,Ci)}catch{Pc=!1}var la=null,qc=null,ys=null;function B1(){if(ys)return ys;var e,n=qc,a=n.length,o,c="value"in la?la.value:la.textContent,d=c.length;for(e=0;e<a&&n[e]===c[e];e++);var g=a-e;for(o=1;o<=g&&n[a-o]===c[d-o];o++);return ys=c.slice(e,1<o?1-o:void 0)}function bs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ss(){return!0}function _1(){return!1}function yn(e){function n(a,o,c,d,g){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=g,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ss:_1,this.isPropagationStopped=_1,this}return K(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ss)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ss)},persist:function(){},isPersistent:Ss}),n}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xs=yn(ka),wi=K({},ka,{view:0,detail:0}),i5=yn(wi),Yc,Vc,Ri,Ts=K({},wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ri&&(Ri&&e.type==="mousemove"?(Yc=e.screenX-Ri.screenX,Vc=e.screenY-Ri.screenY):Vc=Yc=0,Ri=e),Yc)},movementY:function(e){return"movementY"in e?e.movementY:Vc}}),z1=yn(Ts),o5=K({},Ts,{dataTransfer:0}),s5=yn(o5),u5=K({},wi,{relatedTarget:0}),Gc=yn(u5),c5=K({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),f5=yn(c5),d5=K({},ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),p5=yn(d5),h5=K({},ka,{data:0}),L1=yn(h5),m5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v5(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=g5[e])?!!n[e]:!1}function Fc(){return v5}var y5=K({},wi,{key:function(e){if(e.key){var n=m5[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=bs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?K5[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fc,charCode:function(e){return e.type==="keypress"?bs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),b5=yn(y5),S5=K({},Ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),U1=yn(S5),x5=K({},wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fc}),T5=yn(x5),E5=K({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),C5=yn(E5),w5=K({},Ts,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),R5=yn(w5),A5=K({},ka,{newState:0,oldState:0}),O5=yn(A5),M5=[9,13,27,32],Xc=jr&&"CompositionEvent"in window,Ai=null;jr&&"documentMode"in document&&(Ai=document.documentMode);var D5=jr&&"TextEvent"in window&&!Ai,k1=jr&&(!Xc||Ai&&8<Ai&&11>=Ai),H1=" ",j1=!1;function $1(e,n){switch(e){case"keyup":return M5.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function P1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xl=!1;function N5(e,n){switch(e){case"compositionend":return P1(n);case"keypress":return n.which!==32?null:(j1=!0,H1);case"textInput":return e=n.data,e===H1&&j1?null:e;default:return null}}function B5(e,n){if(xl)return e==="compositionend"||!Xc&&$1(e,n)?(e=B1(),ys=qc=la=null,xl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return k1&&n.locale!=="ko"?null:n.data;default:return null}}var _5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function q1(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!_5[e.type]:n==="textarea"}function Y1(e,n,a,o){bl?Sl?Sl.push(o):Sl=[o]:bl=o,n=uu(n,"onChange"),0<n.length&&(a=new xs("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Oi=null,Mi=null;function z5(e){Eh(e,0)}function Es(e){var n=Ti(e);if(C1(n))return e}function V1(e,n){if(e==="change")return n}var G1=!1;if(jr){var Zc;if(jr){var Qc="oninput"in document;if(!Qc){var F1=document.createElement("div");F1.setAttribute("oninput","return;"),Qc=typeof F1.oninput=="function"}Zc=Qc}else Zc=!1;G1=Zc&&(!document.documentMode||9<document.documentMode)}function X1(){Oi&&(Oi.detachEvent("onpropertychange",Z1),Mi=Oi=null)}function Z1(e){if(e.propertyName==="value"&&Es(Mi)){var n=[];Y1(n,Mi,e,jc(e)),N1(z5,n)}}function L5(e,n,a){e==="focusin"?(X1(),Oi=n,Mi=a,Oi.attachEvent("onpropertychange",Z1)):e==="focusout"&&X1()}function U5(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Es(Mi)}function k5(e,n){if(e==="click")return Es(n)}function H5(e,n){if(e==="input"||e==="change")return Es(n)}function j5(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Mn=typeof Object.is=="function"?Object.is:j5;function Di(e,n){if(Mn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Re.call(n,c)||!Mn(e[c],n[c]))return!1}return!0}function Q1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function I1(e,n){var a=Q1(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Q1(a)}}function W1(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?W1(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function J1(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gs(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=gs(e.document)}return n}function Ic(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var $5=jr&&"documentMode"in document&&11>=document.documentMode,Tl=null,Wc=null,Ni=null,Jc=!1;function ep(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Jc||Tl==null||Tl!==gs(o)||(o=Tl,"selectionStart"in o&&Ic(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ni&&Di(Ni,o)||(Ni=o,o=uu(Wc,"onSelect"),0<o.length&&(n=new xs("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Tl)))}function Ha(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var El={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionrun:Ha("Transition","TransitionRun"),transitionstart:Ha("Transition","TransitionStart"),transitioncancel:Ha("Transition","TransitionCancel"),transitionend:Ha("Transition","TransitionEnd")},ef={},tp={};jr&&(tp=document.createElement("div").style,"AnimationEvent"in window||(delete El.animationend.animation,delete El.animationiteration.animation,delete El.animationstart.animation),"TransitionEvent"in window||delete El.transitionend.transition);function ja(e){if(ef[e])return ef[e];if(!El[e])return e;var n=El[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in tp)return ef[e]=n[a];return e}var np=ja("animationend"),rp=ja("animationiteration"),ap=ja("animationstart"),P5=ja("transitionrun"),q5=ja("transitionstart"),Y5=ja("transitioncancel"),lp=ja("transitionend"),ip=new Map,tf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tf.push("scrollEnd");function ur(e,n){ip.set(e,n),Ua(n,[e])}var op=new WeakMap;function Gn(e,n){if(typeof e=="object"&&e!==null){var a=op.get(e);return a!==void 0?a:(n={value:e,source:n,stack:T1(n)},op.set(e,n),n)}return{value:e,source:n,stack:T1(n)}}var Fn=[],Cl=0,nf=0;function Cs(){for(var e=Cl,n=nf=Cl=0;n<e;){var a=Fn[n];Fn[n++]=null;var o=Fn[n];Fn[n++]=null;var c=Fn[n];Fn[n++]=null;var d=Fn[n];if(Fn[n++]=null,o!==null&&c!==null){var g=o.pending;g===null?c.next=c:(c.next=g.next,g.next=c),o.pending=c}d!==0&&sp(a,c,d)}}function ws(e,n,a,o){Fn[Cl++]=e,Fn[Cl++]=n,Fn[Cl++]=a,Fn[Cl++]=o,nf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function rf(e,n,a,o){return ws(e,n,a,o),Rs(e)}function wl(e,n){return ws(e,null,null,n),Rs(e)}function sp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,c&&n!==null&&(c=31-st(a),e=d.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),d):null}function Rs(e){if(50<ro)throw ro=0,c0=null,Error(i(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Rl={};function V5(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(e,n,a,o){return new V5(e,n,a,o)}function af(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $r(e,n){var a=e.alternate;return a===null?(a=Dn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function up(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function As(e,n,a,o,c,d){var g=0;if(o=e,typeof e=="function")af(e)&&(g=1);else if(typeof e=="string")g=FK(e,a,ue.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case W:return e=Dn(31,a,n,c),e.elementType=W,e.lanes=d,e;case E:return $a(a.children,c,d,n);case T:g=8,c|=24;break;case M:return e=Dn(12,a,n,c|2),e.elementType=M,e.lanes=d,e;case A:return e=Dn(13,a,n,c),e.elementType=A,e.lanes=d,e;case B:return e=Dn(19,a,n,c),e.elementType=B,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case O:g=10;break e;case L:g=9;break e;case w:g=11;break e;case k:g=14;break e;case Z:g=16,o=null;break e}g=29,a=Error(i(130,e===null?"null":typeof e,"")),o=null}return n=Dn(g,a,n,c),n.elementType=e,n.type=o,n.lanes=d,n}function $a(e,n,a,o){return e=Dn(7,e,o,n),e.lanes=a,e}function lf(e,n,a){return e=Dn(6,e,null,n),e.lanes=a,e}function of(e,n,a){return n=Dn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Al=[],Ol=0,Os=null,Ms=0,Xn=[],Zn=0,Pa=null,Pr=1,qr="";function qa(e,n){Al[Ol++]=Ms,Al[Ol++]=Os,Os=e,Ms=n}function cp(e,n,a){Xn[Zn++]=Pr,Xn[Zn++]=qr,Xn[Zn++]=Pa,Pa=e;var o=Pr;e=qr;var c=32-st(o)-1;o&=~(1<<c),a+=1;var d=32-st(n)+c;if(30<d){var g=c-c%5;d=(o&(1<<g)-1).toString(32),o>>=g,c-=g,Pr=1<<32-st(n)+c|a<<c|o,qr=d+e}else Pr=1<<d|a<<c|o,qr=e}function sf(e){e.return!==null&&(qa(e,1),cp(e,1,0))}function uf(e){for(;e===Os;)Os=Al[--Ol],Al[Ol]=null,Ms=Al[--Ol],Al[Ol]=null;for(;e===Pa;)Pa=Xn[--Zn],Xn[Zn]=null,qr=Xn[--Zn],Xn[Zn]=null,Pr=Xn[--Zn],Xn[Zn]=null}var gn=null,Bt=null,Qe=!1,Ya=null,Kr=!1,cf=Error(i(519));function Va(e){var n=Error(i(418,""));throw zi(Gn(n,e)),cf}function fp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Ae]=e,n[Oe]=o,a){case"dialog":qe("cancel",n),qe("close",n);break;case"iframe":case"object":case"embed":qe("load",n);break;case"video":case"audio":for(a=0;a<lo.length;a++)qe(lo[a],n);break;case"source":qe("error",n);break;case"img":case"image":case"link":qe("error",n),qe("load",n);break;case"details":qe("toggle",n);break;case"input":qe("invalid",n),w1(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ks(n);break;case"select":qe("invalid",n);break;case"textarea":qe("invalid",n),A1(n,o.value,o.defaultValue,o.children),Ks(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Ah(n.textContent,a)?(o.popover!=null&&(qe("beforetoggle",n),qe("toggle",n)),o.onScroll!=null&&qe("scroll",n),o.onScrollEnd!=null&&qe("scrollend",n),o.onClick!=null&&(n.onclick=cu),n=!0):n=!1,n||Va(e)}function dp(e){for(gn=e.return;gn;)switch(gn.tag){case 5:case 13:Kr=!1;return;case 27:case 3:Kr=!0;return;default:gn=gn.return}}function Bi(e){if(e!==gn)return!1;if(!Qe)return dp(e),Qe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||w0(e.type,e.memoizedProps)),a=!a),a&&Bt&&Va(e),dp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Bt=fr(e.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Bt=null}}else n===27?(n=Bt,Sa(e.type)?(e=M0,M0=null,Bt=e):Bt=n):Bt=gn?fr(e.stateNode.nextSibling):null;return!0}function _i(){Bt=gn=null,Qe=!1}function pp(){var e=Ya;return e!==null&&(xn===null?xn=e:xn.push.apply(xn,e),Ya=null),e}function zi(e){Ya===null?Ya=[e]:Ya.push(e)}var ff=X(null),Ga=null,Yr=null;function ia(e,n,a){ae(ff,n._currentValue),n._currentValue=a}function Vr(e){e._currentValue=ff.current,se(ff)}function df(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function pf(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var g=c.child;d=d.firstContext;e:for(;d!==null;){var b=d;d=c;for(var N=0;N<n.length;N++)if(b.context===n[N]){d.lanes|=a,b=d.alternate,b!==null&&(b.lanes|=a),df(d.return,a,e),o||(g=null);break e}d=b.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(i(341));g.lanes|=a,d=g.alternate,d!==null&&(d.lanes|=a),df(g,a,e),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===e){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Li(e,n,a,o){e=null;for(var c=n,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(i(387));if(g=g.memoizedProps,g!==null){var b=c.type;Mn(c.pendingProps.value,g.value)||(e!==null?e.push(b):e=[b])}}else if(c===ze.current){if(g=c.alternate,g===null)throw Error(i(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(fo):e=[fo])}c=c.return}e!==null&&pf(n,e,a,o),n.flags|=262144}function Ds(e){for(e=e.firstContext;e!==null;){if(!Mn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Fa(e){Ga=e,Yr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function dn(e){return hp(Ga,e)}function Ns(e,n){return Ga===null&&Fa(e),hp(e,n)}function hp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Yr===null){if(e===null)throw Error(i(308));Yr=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Yr=Yr.next=n;return a}var G5=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},F5=t.unstable_scheduleCallback,X5=t.unstable_NormalPriority,Gt={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hf(){return{controller:new G5,data:new Map,refCount:0}}function Ui(e){e.refCount--,e.refCount===0&&F5(X5,function(){e.controller.abort()})}var ki=null,mf=0,Ml=0,Dl=null;function Z5(e,n){if(ki===null){var a=ki=[];mf=0,Ml=g0(),Dl={status:"pending",value:void 0,then:function(o){a.push(o)}}}return mf++,n.then(mp,mp),n}function mp(){if(--mf===0&&ki!==null){Dl!==null&&(Dl.status="fulfilled");var e=ki;ki=null,Ml=0,Dl=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Q5(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Kp=C.S;C.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Z5(e,n),Kp!==null&&Kp(e,n)};var Xa=X(null);function Kf(){var e=Xa.current;return e!==null?e:xt.pooledCache}function Bs(e,n){n===null?ae(Xa,Xa.current):ae(Xa,n.pool)}function gp(){var e=Kf();return e===null?null:{parent:Gt._currentValue,pool:e}}var Hi=Error(i(460)),vp=Error(i(474)),_s=Error(i(542)),gf={then:function(){}};function yp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zs(){}function bp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(zs,zs),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,xp(e),e;default:if(typeof n.status=="string")n.then(zs,zs);else{if(e=xt,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,xp(e),e}throw ji=n,Hi}}var ji=null;function Sp(){if(ji===null)throw Error(i(459));var e=ji;return ji=null,e}function xp(e){if(e===Hi||e===_s)throw Error(i(483))}var oa=!1;function vf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ua(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(tt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=Rs(e),sp(e,null,a),n}return ws(e,o,n,a),Rs(e)}function $i(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,dl(e,a)}}function bf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?c=d=g:d=d.next=g,a=a.next}while(a!==null);d===null?c=d=n:d=d.next=n}else c=d=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Sf=!1;function Pi(){if(Sf){var e=Dl;if(e!==null)throw e}}function qi(e,n,a,o){Sf=!1;var c=e.updateQueue;oa=!1;var d=c.firstBaseUpdate,g=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var N=b,$=N.next;N.next=null,g===null?d=$:g.next=$,g=N;var J=e.alternate;J!==null&&(J=J.updateQueue,b=J.lastBaseUpdate,b!==g&&(b===null?J.firstBaseUpdate=$:b.next=$,J.lastBaseUpdate=N))}if(d!==null){var re=c.baseState;g=0,J=$=N=null,b=d;do{var Y=b.lane&-536870913,G=Y!==b.lane;if(G?(Fe&Y)===Y:(o&Y)===Y){Y!==0&&Y===Ml&&(Sf=!0),J!==null&&(J=J.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var we=e,xe=b;Y=n;var ft=a;switch(xe.tag){case 1:if(we=xe.payload,typeof we=="function"){re=we.call(ft,re,Y);break e}re=we;break e;case 3:we.flags=we.flags&-65537|128;case 0:if(we=xe.payload,Y=typeof we=="function"?we.call(ft,re,Y):we,Y==null)break e;re=K({},re,Y);break e;case 2:oa=!0}}Y=b.callback,Y!==null&&(e.flags|=64,G&&(e.flags|=8192),G=c.callbacks,G===null?c.callbacks=[Y]:G.push(Y))}else G={lane:Y,tag:b.tag,payload:b.payload,callback:b.callback,next:null},J===null?($=J=G,N=re):J=J.next=G,g|=Y;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;G=b,b=G.next,G.next=null,c.lastBaseUpdate=G,c.shared.pending=null}}while(!0);J===null&&(N=re),c.baseState=N,c.firstBaseUpdate=$,c.lastBaseUpdate=J,d===null&&(c.shared.lanes=0),ga|=g,e.lanes=g,e.memoizedState=re}}function Tp(e,n){if(typeof e!="function")throw Error(i(191,e));e.call(n)}function Ep(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Tp(a[e],n)}var Nl=X(null),Ls=X(0);function Cp(e,n){e=Wr,ae(Ls,e),ae(Nl,n),Wr=e|n.baseLanes}function xf(){ae(Ls,Wr),ae(Nl,Nl.current)}function Tf(){Wr=Ls.current,se(Nl),se(Ls)}var ca=0,He=null,ut=null,Pt=null,Us=!1,Bl=!1,Za=!1,ks=0,Yi=0,_l=null,I5=0;function kt(){throw Error(i(321))}function Ef(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Mn(e[a],n[a]))return!1;return!0}function Cf(e,n,a,o,c,d){return ca=d,He=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,C.H=e===null||e.memoizedState===null?s2:u2,Za=!1,d=a(o,c),Za=!1,Bl&&(d=Rp(n,a,o,c)),wp(e),d}function wp(e){C.H=Ys;var n=ut!==null&&ut.next!==null;if(ca=0,Pt=ut=He=null,Us=!1,Yi=0,_l=null,n)throw Error(i(300));e===null||It||(e=e.dependencies,e!==null&&Ds(e)&&(It=!0))}function Rp(e,n,a,o){He=e;var c=0;do{if(Bl&&(_l=null),Yi=0,Bl=!1,25<=c)throw Error(i(301));if(c+=1,Pt=ut=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}C.H=aK,d=n(a,o)}while(Bl);return d}function W5(){var e=C.H,n=e.useState()[0];return n=typeof n.then=="function"?Vi(n):n,e=e.useState()[0],(ut!==null?ut.memoizedState:null)!==e&&(He.flags|=1024),n}function wf(){var e=ks!==0;return ks=0,e}function Rf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Af(e){if(Us){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Us=!1}ca=0,Pt=ut=He=null,Bl=!1,Yi=ks=0,_l=null}function bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?He.memoizedState=Pt=e:Pt=Pt.next=e,Pt}function qt(){if(ut===null){var e=He.alternate;e=e!==null?e.memoizedState:null}else e=ut.next;var n=Pt===null?He.memoizedState:Pt.next;if(n!==null)Pt=n,ut=e;else{if(e===null)throw He.alternate===null?Error(i(467)):Error(i(310));ut=e,e={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},Pt===null?He.memoizedState=Pt=e:Pt=Pt.next=e}return Pt}function Of(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vi(e){var n=Yi;return Yi+=1,_l===null&&(_l=[]),e=bp(_l,e,n),n=He,(Pt===null?n.memoizedState:Pt.next)===null&&(n=n.alternate,C.H=n===null||n.memoizedState===null?s2:u2),e}function Hs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Vi(e);if(e.$$typeof===O)return dn(e)}throw Error(i(438,String(e)))}function Mf(e){var n=null,a=He.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=He.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Of(),He.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=ee;return n.index++,a}function Gr(e,n){return typeof n=="function"?n(e):n}function js(e){var n=qt();return Df(n,ut,e)}function Df(e,n,a){var o=e.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=a;var c=e.baseQueue,d=o.pending;if(d!==null){if(c!==null){var g=c.next;c.next=d.next,d.next=g}n.baseQueue=c=d,o.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{n=c.next;var b=g=null,N=null,$=n,J=!1;do{var re=$.lane&-536870913;if(re!==$.lane?(Fe&re)===re:(ca&re)===re){var Y=$.revertLane;if(Y===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),re===Ml&&(J=!0);else if((ca&Y)===Y){$=$.next,Y===Ml&&(J=!0);continue}else re={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},N===null?(b=N=re,g=d):N=N.next=re,He.lanes|=Y,ga|=Y;re=$.action,Za&&a(d,re),d=$.hasEagerState?$.eagerState:a(d,re)}else Y={lane:re,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},N===null?(b=N=Y,g=d):N=N.next=Y,He.lanes|=re,ga|=re;$=$.next}while($!==null&&$!==n);if(N===null?g=d:N.next=b,!Mn(d,e.memoizedState)&&(It=!0,J&&(a=Dl,a!==null)))throw a;e.memoizedState=d,e.baseState=g,e.baseQueue=N,o.lastRenderedState=d}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Nf(e){var n=qt(),a=n.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,d=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do d=e(d,g.action),g=g.next;while(g!==c);Mn(d,n.memoizedState)||(It=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Ap(e,n,a){var o=He,c=qt(),d=Qe;if(d){if(a===void 0)throw Error(i(407));a=a()}else a=n();var g=!Mn((ut||c).memoizedState,a);g&&(c.memoizedState=a,It=!0),c=c.queue;var b=Dp.bind(null,o,c,e);if(Gi(2048,8,b,[e]),c.getSnapshot!==n||g||Pt!==null&&Pt.memoizedState.tag&1){if(o.flags|=2048,zl(9,$s(),Mp.bind(null,o,c,a,n),null),xt===null)throw Error(i(349));d||(ca&124)!==0||Op(o,n,a)}return a}function Op(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=He.updateQueue,n===null?(n=Of(),He.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Mp(e,n,a,o){n.value=a,n.getSnapshot=o,Np(n)&&Bp(e)}function Dp(e,n,a){return a(function(){Np(n)&&Bp(e)})}function Np(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Mn(e,a)}catch{return!0}}function Bp(e){var n=wl(e,2);n!==null&&Ln(n,e,2)}function Bf(e){var n=bn();if(typeof e=="function"){var a=e;if(e=a(),Za){At(!0);try{a()}finally{At(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gr,lastRenderedState:e},n}function _p(e,n,a,o){return e.baseState=a,Df(e,ut,typeof o=="function"?o:Gr)}function J5(e,n,a,o,c){if(qs(e))throw Error(i(485));if(e=n.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){d.listeners.push(g)}};C.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,zp(n,d)):(d.next=a.next,n.pending=a.next=d)}}function zp(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var d=C.T,g={};C.T=g;try{var b=a(c,o),N=C.S;N!==null&&N(g,b),Lp(e,n,b)}catch($){_f(e,n,$)}finally{C.T=d}}else try{d=a(c,o),Lp(e,n,d)}catch($){_f(e,n,$)}}function Lp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Up(e,n,o)},function(o){return _f(e,n,o)}):Up(e,n,a)}function Up(e,n,a){n.status="fulfilled",n.value=a,kp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,zp(e,a)))}function _f(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,kp(n),n=n.next;while(n!==o)}e.action=null}function kp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Hp(e,n){return n}function jp(e,n){if(Qe){var a=xt.formState;if(a!==null){e:{var o=He;if(Qe){if(Bt){t:{for(var c=Bt,d=Kr;c.nodeType!==8;){if(!d){c=null;break t}if(c=fr(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Bt=fr(c.nextSibling),o=c.data==="F!";break e}}Va(o)}o=!1}o&&(n=a[0])}}return a=bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hp,lastRenderedState:n},a.queue=o,a=l2.bind(null,He,o),o.dispatch=a,o=Bf(!1),d=Hf.bind(null,He,!1,o.queue),o=bn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=J5.bind(null,He,c,d,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function $p(e){var n=qt();return Pp(n,ut,e)}function Pp(e,n,a){if(n=Df(e,n,Hp)[0],e=js(Gr)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Vi(n)}catch(g){throw g===Hi?_s:g}else o=n;n=qt();var c=n.queue,d=c.dispatch;return a!==n.memoizedState&&(He.flags|=2048,zl(9,$s(),eK.bind(null,c,a),null)),[o,d,e]}function eK(e,n){e.action=n}function qp(e){var n=qt(),a=ut;if(a!==null)return Pp(n,a,e);qt(),n=n.memoizedState,a=qt();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function zl(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=He.updateQueue,n===null&&(n=Of(),He.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function $s(){return{destroy:void 0,resource:void 0}}function Yp(){return qt().memoizedState}function Ps(e,n,a,o){var c=bn();o=o===void 0?null:o,He.flags|=e,c.memoizedState=zl(1|n,$s(),a,o)}function Gi(e,n,a,o){var c=qt();o=o===void 0?null:o;var d=c.memoizedState.inst;ut!==null&&o!==null&&Ef(o,ut.memoizedState.deps)?c.memoizedState=zl(n,d,a,o):(He.flags|=e,c.memoizedState=zl(1|n,d,a,o))}function Vp(e,n){Ps(8390656,8,e,n)}function Gp(e,n){Gi(2048,8,e,n)}function Fp(e,n){return Gi(4,2,e,n)}function Xp(e,n){return Gi(4,4,e,n)}function Zp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Qp(e,n,a){a=a!=null?a.concat([e]):null,Gi(4,4,Zp.bind(null,n,e),a)}function zf(){}function Ip(e,n){var a=qt();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ef(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Wp(e,n){var a=qt();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ef(n,o[1]))return o[0];if(o=e(),Za){At(!0);try{e()}finally{At(!1)}}return a.memoizedState=[o,n],o}function Lf(e,n,a){return a===void 0||(ca&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=th(),He.lanes|=e,ga|=e,a)}function Jp(e,n,a,o){return Mn(a,n)?a:Nl.current!==null?(e=Lf(e,a,o),Mn(e,n)||(It=!0),e):(ca&42)===0?(It=!0,e.memoizedState=a):(e=th(),He.lanes|=e,ga|=e,n)}function e2(e,n,a,o,c){var d=V.p;V.p=d!==0&&8>d?d:8;var g=C.T,b={};C.T=b,Hf(e,!1,n,a);try{var N=c(),$=C.S;if($!==null&&$(b,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var J=Q5(N,o);Fi(e,n,J,zn(e))}else Fi(e,n,o,zn(e))}catch(re){Fi(e,n,{then:function(){},status:"rejected",reason:re},zn())}finally{V.p=d,C.T=g}}function tK(){}function Uf(e,n,a,o){if(e.tag!==5)throw Error(i(476));var c=t2(e).queue;e2(e,c,n,oe,a===null?tK:function(){return n2(e),a(o)})}function t2(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gr,lastRenderedState:oe},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gr,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function n2(e){var n=t2(e).next.queue;Fi(e,n,{},zn())}function kf(){return dn(fo)}function r2(){return qt().memoizedState}function a2(){return qt().memoizedState}function nK(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=zn();e=sa(a);var o=ua(n,e,a);o!==null&&(Ln(o,n,a),$i(o,n,a)),n={cache:hf()},e.payload=n;return}n=n.return}}function rK(e,n,a){var o=zn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},qs(e)?i2(n,a):(a=rf(e,n,a,o),a!==null&&(Ln(a,e,o),o2(a,n,o)))}function l2(e,n,a){var o=zn();Fi(e,n,a,o)}function Fi(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(qs(e))i2(n,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var g=n.lastRenderedState,b=d(g,a);if(c.hasEagerState=!0,c.eagerState=b,Mn(b,g))return ws(e,n,c,0),xt===null&&Cs(),!1}catch{}finally{}if(a=rf(e,n,c,o),a!==null)return Ln(a,e,o),o2(a,n,o),!0}return!1}function Hf(e,n,a,o){if(o={lane:2,revertLane:g0(),action:o,hasEagerState:!1,eagerState:null,next:null},qs(e)){if(n)throw Error(i(479))}else n=rf(e,a,o,2),n!==null&&Ln(n,e,2)}function qs(e){var n=e.alternate;return e===He||n!==null&&n===He}function i2(e,n){Bl=Us=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function o2(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,dl(e,a)}}var Ys={readContext:dn,use:Hs,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt,useHostTransitionStatus:kt,useFormState:kt,useActionState:kt,useOptimistic:kt,useMemoCache:kt,useCacheRefresh:kt},s2={readContext:dn,use:Hs,useCallback:function(e,n){return bn().memoizedState=[e,n===void 0?null:n],e},useContext:dn,useEffect:Vp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ps(4194308,4,Zp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ps(4194308,4,e,n)},useInsertionEffect:function(e,n){Ps(4,2,e,n)},useMemo:function(e,n){var a=bn();n=n===void 0?null:n;var o=e();if(Za){At(!0);try{e()}finally{At(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=bn();if(a!==void 0){var c=a(n);if(Za){At(!0);try{a(n)}finally{At(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=rK.bind(null,He,e),[o.memoizedState,e]},useRef:function(e){var n=bn();return e={current:e},n.memoizedState=e},useState:function(e){e=Bf(e);var n=e.queue,a=l2.bind(null,He,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:zf,useDeferredValue:function(e,n){var a=bn();return Lf(a,e,n)},useTransition:function(){var e=Bf(!1);return e=e2.bind(null,He,e.queue,!0,!1),bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=He,c=bn();if(Qe){if(a===void 0)throw Error(i(407));a=a()}else{if(a=n(),xt===null)throw Error(i(349));(Fe&124)!==0||Op(o,n,a)}c.memoizedState=a;var d={value:a,getSnapshot:n};return c.queue=d,Vp(Dp.bind(null,o,d,e),[e]),o.flags|=2048,zl(9,$s(),Mp.bind(null,o,d,a,n),null),a},useId:function(){var e=bn(),n=xt.identifierPrefix;if(Qe){var a=qr,o=Pr;a=(o&~(1<<32-st(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=ks++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=I5++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:kf,useFormState:jp,useActionState:jp,useOptimistic:function(e){var n=bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Hf.bind(null,He,!0,a),a.dispatch=n,[e,n]},useMemoCache:Mf,useCacheRefresh:function(){return bn().memoizedState=nK.bind(null,He)}},u2={readContext:dn,use:Hs,useCallback:Ip,useContext:dn,useEffect:Gp,useImperativeHandle:Qp,useInsertionEffect:Fp,useLayoutEffect:Xp,useMemo:Wp,useReducer:js,useRef:Yp,useState:function(){return js(Gr)},useDebugValue:zf,useDeferredValue:function(e,n){var a=qt();return Jp(a,ut.memoizedState,e,n)},useTransition:function(){var e=js(Gr)[0],n=qt().memoizedState;return[typeof e=="boolean"?e:Vi(e),n]},useSyncExternalStore:Ap,useId:r2,useHostTransitionStatus:kf,useFormState:$p,useActionState:$p,useOptimistic:function(e,n){var a=qt();return _p(a,ut,e,n)},useMemoCache:Mf,useCacheRefresh:a2},aK={readContext:dn,use:Hs,useCallback:Ip,useContext:dn,useEffect:Gp,useImperativeHandle:Qp,useInsertionEffect:Fp,useLayoutEffect:Xp,useMemo:Wp,useReducer:Nf,useRef:Yp,useState:function(){return Nf(Gr)},useDebugValue:zf,useDeferredValue:function(e,n){var a=qt();return ut===null?Lf(a,e,n):Jp(a,ut.memoizedState,e,n)},useTransition:function(){var e=Nf(Gr)[0],n=qt().memoizedState;return[typeof e=="boolean"?e:Vi(e),n]},useSyncExternalStore:Ap,useId:r2,useHostTransitionStatus:kf,useFormState:qp,useActionState:qp,useOptimistic:function(e,n){var a=qt();return ut!==null?_p(a,ut,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Mf,useCacheRefresh:a2},Ll=null,Xi=0;function Vs(e){var n=Xi;return Xi+=1,Ll===null&&(Ll=[]),bp(Ll,e,n)}function Zi(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Gs(e,n){throw n.$$typeof===v?Error(i(525)):(e=Object.prototype.toString.call(n),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function c2(e){var n=e._init;return n(e._payload)}function f2(e){function n(U,z){if(e){var H=U.deletions;H===null?(U.deletions=[z],U.flags|=16):H.push(z)}}function a(U,z){if(!e)return null;for(;z!==null;)n(U,z),z=z.sibling;return null}function o(U){for(var z=new Map;U!==null;)U.key!==null?z.set(U.key,U):z.set(U.index,U),U=U.sibling;return z}function c(U,z){return U=$r(U,z),U.index=0,U.sibling=null,U}function d(U,z,H){return U.index=H,e?(H=U.alternate,H!==null?(H=H.index,H<z?(U.flags|=67108866,z):H):(U.flags|=67108866,z)):(U.flags|=1048576,z)}function g(U){return e&&U.alternate===null&&(U.flags|=67108866),U}function b(U,z,H,ne){return z===null||z.tag!==6?(z=lf(H,U.mode,ne),z.return=U,z):(z=c(z,H),z.return=U,z)}function N(U,z,H,ne){var pe=H.type;return pe===E?J(U,z,H.props.children,ne,H.key):z!==null&&(z.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===Z&&c2(pe)===z.type)?(z=c(z,H.props),Zi(z,H),z.return=U,z):(z=As(H.type,H.key,H.props,null,U.mode,ne),Zi(z,H),z.return=U,z)}function $(U,z,H,ne){return z===null||z.tag!==4||z.stateNode.containerInfo!==H.containerInfo||z.stateNode.implementation!==H.implementation?(z=of(H,U.mode,ne),z.return=U,z):(z=c(z,H.children||[]),z.return=U,z)}function J(U,z,H,ne,pe){return z===null||z.tag!==7?(z=$a(H,U.mode,ne,pe),z.return=U,z):(z=c(z,H),z.return=U,z)}function re(U,z,H){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=lf(""+z,U.mode,H),z.return=U,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case y:return H=As(z.type,z.key,z.props,null,U.mode,H),Zi(H,z),H.return=U,H;case x:return z=of(z,U.mode,H),z.return=U,z;case Z:var ne=z._init;return z=ne(z._payload),re(U,z,H)}if(j(z)||S(z))return z=$a(z,U.mode,H,null),z.return=U,z;if(typeof z.then=="function")return re(U,Vs(z),H);if(z.$$typeof===O)return re(U,Ns(U,z),H);Gs(U,z)}return null}function Y(U,z,H,ne){var pe=z!==null?z.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return pe!==null?null:b(U,z,""+H,ne);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case y:return H.key===pe?N(U,z,H,ne):null;case x:return H.key===pe?$(U,z,H,ne):null;case Z:return pe=H._init,H=pe(H._payload),Y(U,z,H,ne)}if(j(H)||S(H))return pe!==null?null:J(U,z,H,ne,null);if(typeof H.then=="function")return Y(U,z,Vs(H),ne);if(H.$$typeof===O)return Y(U,z,Ns(U,H),ne);Gs(U,H)}return null}function G(U,z,H,ne,pe){if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return U=U.get(H)||null,b(z,U,""+ne,pe);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case y:return U=U.get(ne.key===null?H:ne.key)||null,N(z,U,ne,pe);case x:return U=U.get(ne.key===null?H:ne.key)||null,$(z,U,ne,pe);case Z:var $e=ne._init;return ne=$e(ne._payload),G(U,z,H,ne,pe)}if(j(ne)||S(ne))return U=U.get(H)||null,J(z,U,ne,pe,null);if(typeof ne.then=="function")return G(U,z,H,Vs(ne),pe);if(ne.$$typeof===O)return G(U,z,H,Ns(z,ne),pe);Gs(z,ne)}return null}function we(U,z,H,ne){for(var pe=null,$e=null,ge=z,Ee=z=0,Jt=null;ge!==null&&Ee<H.length;Ee++){ge.index>Ee?(Jt=ge,ge=null):Jt=ge.sibling;var Ze=Y(U,ge,H[Ee],ne);if(Ze===null){ge===null&&(ge=Jt);break}e&&ge&&Ze.alternate===null&&n(U,ge),z=d(Ze,z,Ee),$e===null?pe=Ze:$e.sibling=Ze,$e=Ze,ge=Jt}if(Ee===H.length)return a(U,ge),Qe&&qa(U,Ee),pe;if(ge===null){for(;Ee<H.length;Ee++)ge=re(U,H[Ee],ne),ge!==null&&(z=d(ge,z,Ee),$e===null?pe=ge:$e.sibling=ge,$e=ge);return Qe&&qa(U,Ee),pe}for(ge=o(ge);Ee<H.length;Ee++)Jt=G(ge,U,Ee,H[Ee],ne),Jt!==null&&(e&&Jt.alternate!==null&&ge.delete(Jt.key===null?Ee:Jt.key),z=d(Jt,z,Ee),$e===null?pe=Jt:$e.sibling=Jt,$e=Jt);return e&&ge.forEach(function(wa){return n(U,wa)}),Qe&&qa(U,Ee),pe}function xe(U,z,H,ne){if(H==null)throw Error(i(151));for(var pe=null,$e=null,ge=z,Ee=z=0,Jt=null,Ze=H.next();ge!==null&&!Ze.done;Ee++,Ze=H.next()){ge.index>Ee?(Jt=ge,ge=null):Jt=ge.sibling;var wa=Y(U,ge,Ze.value,ne);if(wa===null){ge===null&&(ge=Jt);break}e&&ge&&wa.alternate===null&&n(U,ge),z=d(wa,z,Ee),$e===null?pe=wa:$e.sibling=wa,$e=wa,ge=Jt}if(Ze.done)return a(U,ge),Qe&&qa(U,Ee),pe;if(ge===null){for(;!Ze.done;Ee++,Ze=H.next())Ze=re(U,Ze.value,ne),Ze!==null&&(z=d(Ze,z,Ee),$e===null?pe=Ze:$e.sibling=Ze,$e=Ze);return Qe&&qa(U,Ee),pe}for(ge=o(ge);!Ze.done;Ee++,Ze=H.next())Ze=G(ge,U,Ee,Ze.value,ne),Ze!==null&&(e&&Ze.alternate!==null&&ge.delete(Ze.key===null?Ee:Ze.key),z=d(Ze,z,Ee),$e===null?pe=Ze:$e.sibling=Ze,$e=Ze);return e&&ge.forEach(function(lg){return n(U,lg)}),Qe&&qa(U,Ee),pe}function ft(U,z,H,ne){if(typeof H=="object"&&H!==null&&H.type===E&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case y:e:{for(var pe=H.key;z!==null;){if(z.key===pe){if(pe=H.type,pe===E){if(z.tag===7){a(U,z.sibling),ne=c(z,H.props.children),ne.return=U,U=ne;break e}}else if(z.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===Z&&c2(pe)===z.type){a(U,z.sibling),ne=c(z,H.props),Zi(ne,H),ne.return=U,U=ne;break e}a(U,z);break}else n(U,z);z=z.sibling}H.type===E?(ne=$a(H.props.children,U.mode,ne,H.key),ne.return=U,U=ne):(ne=As(H.type,H.key,H.props,null,U.mode,ne),Zi(ne,H),ne.return=U,U=ne)}return g(U);case x:e:{for(pe=H.key;z!==null;){if(z.key===pe)if(z.tag===4&&z.stateNode.containerInfo===H.containerInfo&&z.stateNode.implementation===H.implementation){a(U,z.sibling),ne=c(z,H.children||[]),ne.return=U,U=ne;break e}else{a(U,z);break}else n(U,z);z=z.sibling}ne=of(H,U.mode,ne),ne.return=U,U=ne}return g(U);case Z:return pe=H._init,H=pe(H._payload),ft(U,z,H,ne)}if(j(H))return we(U,z,H,ne);if(S(H)){if(pe=S(H),typeof pe!="function")throw Error(i(150));return H=pe.call(H),xe(U,z,H,ne)}if(typeof H.then=="function")return ft(U,z,Vs(H),ne);if(H.$$typeof===O)return ft(U,z,Ns(U,H),ne);Gs(U,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,z!==null&&z.tag===6?(a(U,z.sibling),ne=c(z,H),ne.return=U,U=ne):(a(U,z),ne=lf(H,U.mode,ne),ne.return=U,U=ne),g(U)):a(U,z)}return function(U,z,H,ne){try{Xi=0;var pe=ft(U,z,H,ne);return Ll=null,pe}catch(ge){if(ge===Hi||ge===_s)throw ge;var $e=Dn(29,ge,null,U.mode);return $e.lanes=ne,$e.return=U,$e}finally{}}}var Ul=f2(!0),d2=f2(!1),Qn=X(null),gr=null;function fa(e){var n=e.alternate;ae(Ft,Ft.current&1),ae(Qn,e),gr===null&&(n===null||Nl.current!==null||n.memoizedState!==null)&&(gr=e)}function p2(e){if(e.tag===22){if(ae(Ft,Ft.current),ae(Qn,e),gr===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(gr=e)}}else da()}function da(){ae(Ft,Ft.current),ae(Qn,Qn.current)}function Fr(e){se(Qn),gr===e&&(gr=null),se(Ft)}var Ft=X(0);function Fs(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||O0(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function jf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:K({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var $f={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=zn(),c=sa(o);c.payload=n,a!=null&&(c.callback=a),n=ua(e,c,o),n!==null&&(Ln(n,e,o),$i(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=zn(),c=sa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ua(e,c,o),n!==null&&(Ln(n,e,o),$i(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=zn(),o=sa(a);o.tag=2,n!=null&&(o.callback=n),n=ua(e,o,a),n!==null&&(Ln(n,e,a),$i(n,e,a))}};function h2(e,n,a,o,c,d,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,g):n.prototype&&n.prototype.isPureReactComponent?!Di(a,o)||!Di(c,d):!0}function m2(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&$f.enqueueReplaceState(n,n.state,null)}function Qa(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=K({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Xs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function K2(e){Xs(e)}function g2(e){console.error(e)}function v2(e){Xs(e)}function Zs(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function y2(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Pf(e,n,a){return a=sa(a),a.tag=3,a.payload={element:null},a.callback=function(){Zs(e,n)},a}function b2(e){return e=sa(e),e.tag=3,e}function S2(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;e.payload=function(){return c(d)},e.callback=function(){y2(n,a,o)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){y2(n,a,o),typeof c!="function"&&(va===null?va=new Set([this]):va.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function lK(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Li(n,a,c,!0),a=Qn.current,a!==null){switch(a.tag){case 13:return gr===null?d0():a.alternate===null&&_t===0&&(_t=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===gf?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),h0(e,o,c)),!1;case 22:return a.flags|=65536,o===gf?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),h0(e,o,c)),!1}throw Error(i(435,a.tag))}return h0(e,o,c),d0(),!1}if(Qe)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==cf&&(e=Error(i(422),{cause:o}),zi(Gn(e,a)))):(o!==cf&&(n=Error(i(423),{cause:o}),zi(Gn(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=Gn(o,a),c=Pf(e.stateNode,o,c),bf(e,c),_t!==4&&(_t=2)),!1;var d=Error(i(520),{cause:o});if(d=Gn(d,a),no===null?no=[d]:no.push(d),_t!==4&&(_t=2),n===null)return!0;o=Gn(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Pf(a.stateNode,o,e),bf(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(va===null||!va.has(d))))return a.flags|=65536,c&=-c,a.lanes|=c,c=b2(c),S2(c,e,a,o),bf(a,c),!1}a=a.return}while(a!==null);return!1}var x2=Error(i(461)),It=!1;function rn(e,n,a,o){n.child=e===null?d2(n,null,a,o):Ul(n,e.child,a,o)}function T2(e,n,a,o,c){a=a.render;var d=n.ref;if("ref"in o){var g={};for(var b in o)b!=="ref"&&(g[b]=o[b])}else g=o;return Fa(n),o=Cf(e,n,a,g,d,c),b=wf(),e!==null&&!It?(Rf(e,n,c),Xr(e,n,c)):(Qe&&b&&sf(n),n.flags|=1,rn(e,n,o,c),n.child)}function E2(e,n,a,o,c){if(e===null){var d=a.type;return typeof d=="function"&&!af(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,C2(e,n,d,o,c)):(e=As(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!Qf(e,c)){var g=d.memoizedProps;if(a=a.compare,a=a!==null?a:Di,a(g,o)&&e.ref===n.ref)return Xr(e,n,c)}return n.flags|=1,e=$r(d,o),e.ref=n.ref,e.return=n,n.child=e}function C2(e,n,a,o,c){if(e!==null){var d=e.memoizedProps;if(Di(d,o)&&e.ref===n.ref)if(It=!1,n.pendingProps=o=d,Qf(e,c))(e.flags&131072)!==0&&(It=!0);else return n.lanes=e.lanes,Xr(e,n,c)}return qf(e,n,a,o,c)}function w2(e,n,a){var o=n.pendingProps,c=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,e!==null){for(c=n.child=e.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return R2(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bs(n,d!==null?d.cachePool:null),d!==null?Cp(n,d):xf(),p2(n);else return n.lanes=n.childLanes=536870912,R2(e,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(Bs(n,d.cachePool),Cp(n,d),da(),n.memoizedState=null):(e!==null&&Bs(n,null),xf(),da());return rn(e,n,c,a),n.child}function R2(e,n,a,o){var c=Kf();return c=c===null?null:{parent:Gt._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&Bs(n,null),xf(),p2(n),e!==null&&Li(e,n,o,!0),null}function Qs(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(i(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function qf(e,n,a,o,c){return Fa(n),a=Cf(e,n,a,o,void 0,c),o=wf(),e!==null&&!It?(Rf(e,n,c),Xr(e,n,c)):(Qe&&o&&sf(n),n.flags|=1,rn(e,n,a,c),n.child)}function A2(e,n,a,o,c,d){return Fa(n),n.updateQueue=null,a=Rp(n,o,a,c),wp(e),o=wf(),e!==null&&!It?(Rf(e,n,d),Xr(e,n,d)):(Qe&&o&&sf(n),n.flags|=1,rn(e,n,a,d),n.child)}function O2(e,n,a,o,c){if(Fa(n),n.stateNode===null){var d=Rl,g=a.contextType;typeof g=="object"&&g!==null&&(d=dn(g)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=$f,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},vf(n),g=a.contextType,d.context=typeof g=="object"&&g!==null?dn(g):Rl,d.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(jf(n,a,g,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(g=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),g!==d.state&&$f.enqueueReplaceState(d,d.state,null),qi(n,o,d,c),Pi(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var b=n.memoizedProps,N=Qa(a,b);d.props=N;var $=d.context,J=a.contextType;g=Rl,typeof J=="object"&&J!==null&&(g=dn(J));var re=a.getDerivedStateFromProps;J=typeof re=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,J||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||$!==g)&&m2(n,d,o,g),oa=!1;var Y=n.memoizedState;d.state=Y,qi(n,o,d,c),Pi(),$=n.memoizedState,b||Y!==$||oa?(typeof re=="function"&&(jf(n,a,re,o),$=n.memoizedState),(N=oa||h2(n,a,N,o,Y,$,g))?(J||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),d.props=o,d.state=$,d.context=g,o=N):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,yf(e,n),g=n.memoizedProps,J=Qa(a,g),d.props=J,re=n.pendingProps,Y=d.context,$=a.contextType,N=Rl,typeof $=="object"&&$!==null&&(N=dn($)),b=a.getDerivedStateFromProps,($=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==re||Y!==N)&&m2(n,d,o,N),oa=!1,Y=n.memoizedState,d.state=Y,qi(n,o,d,c),Pi();var G=n.memoizedState;g!==re||Y!==G||oa||e!==null&&e.dependencies!==null&&Ds(e.dependencies)?(typeof b=="function"&&(jf(n,a,b,o),G=n.memoizedState),(J=oa||h2(n,a,J,o,Y,G,N)||e!==null&&e.dependencies!==null&&Ds(e.dependencies))?($||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,G,N),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,G,N)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&Y===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&Y===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=G),d.props=o,d.state=G,d.context=N,o=J):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&Y===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&Y===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Qs(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=Ul(n,e.child,null,c),n.child=Ul(n,null,a,c)):rn(e,n,a,c),n.memoizedState=d.state,e=n.child):e=Xr(e,n,c),e}function M2(e,n,a,o){return _i(),n.flags|=256,rn(e,n,a,o),n.child}var Yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vf(e){return{baseLanes:e,cachePool:gp()}}function Gf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=In),e}function D2(e,n,a){var o=n.pendingProps,c=!1,d=(n.flags&128)!==0,g;if((g=d)||(g=e!==null&&e.memoizedState===null?!1:(Ft.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(Qe){if(c?fa(n):da(),Qe){var b=Bt,N;if(N=b){e:{for(N=b,b=Kr;N.nodeType!==8;){if(!b){b=null;break e}if(N=fr(N.nextSibling),N===null){b=null;break e}}b=N}b!==null?(n.memoizedState={dehydrated:b,treeContext:Pa!==null?{id:Pr,overflow:qr}:null,retryLane:536870912,hydrationErrors:null},N=Dn(18,null,null,0),N.stateNode=b,N.return=n,n.child=N,gn=n,Bt=null,N=!0):N=!1}N||Va(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return O0(b)?n.lanes=32:n.lanes=536870912,null;Fr(n)}return b=o.children,o=o.fallback,c?(da(),c=n.mode,b=Is({mode:"hidden",children:b},c),o=$a(o,c,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,c=n.child,c.memoizedState=Vf(a),c.childLanes=Gf(e,g,a),n.memoizedState=Yf,o):(fa(n),Ff(n,b))}if(N=e.memoizedState,N!==null&&(b=N.dehydrated,b!==null)){if(d)n.flags&256?(fa(n),n.flags&=-257,n=Xf(e,n,a)):n.memoizedState!==null?(da(),n.child=e.child,n.flags|=128,n=null):(da(),c=o.fallback,b=n.mode,o=Is({mode:"visible",children:o.children},b),c=$a(c,b,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Ul(n,e.child,null,a),o=n.child,o.memoizedState=Vf(a),o.childLanes=Gf(e,g,a),n.memoizedState=Yf,n=c);else if(fa(n),O0(b)){if(g=b.nextSibling&&b.nextSibling.dataset,g)var $=g.dgst;g=$,o=Error(i(419)),o.stack="",o.digest=g,zi({value:o,source:null,stack:null}),n=Xf(e,n,a)}else if(It||Li(e,n,a,!1),g=(a&e.childLanes)!==0,It||g){if(g=xt,g!==null&&(o=a&-a,o=(o&42)!==0?1:za(o),o=(o&(g.suspendedLanes|a))!==0?0:o,o!==0&&o!==N.retryLane))throw N.retryLane=o,wl(e,o),Ln(g,e,o),x2;b.data==="$?"||d0(),n=Xf(e,n,a)}else b.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=N.treeContext,Bt=fr(b.nextSibling),gn=n,Qe=!0,Ya=null,Kr=!1,e!==null&&(Xn[Zn++]=Pr,Xn[Zn++]=qr,Xn[Zn++]=Pa,Pr=e.id,qr=e.overflow,Pa=n),n=Ff(n,o.children),n.flags|=4096);return n}return c?(da(),c=o.fallback,b=n.mode,N=e.child,$=N.sibling,o=$r(N,{mode:"hidden",children:o.children}),o.subtreeFlags=N.subtreeFlags&65011712,$!==null?c=$r($,c):(c=$a(c,b,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,b=e.child.memoizedState,b===null?b=Vf(a):(N=b.cachePool,N!==null?($=Gt._currentValue,N=N.parent!==$?{parent:$,pool:$}:N):N=gp(),b={baseLanes:b.baseLanes|a,cachePool:N}),c.memoizedState=b,c.childLanes=Gf(e,g,a),n.memoizedState=Yf,o):(fa(n),a=e.child,e=a.sibling,a=$r(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function Ff(e,n){return n=Is({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Is(e,n){return e=Dn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Xf(e,n,a){return Ul(n,e.child,null,a),e=Ff(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function N2(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),df(e.return,n,a)}function Zf(e,n,a,o,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=c)}function B2(e,n,a){var o=n.pendingProps,c=o.revealOrder,d=o.tail;if(rn(e,n,o.children,a),o=Ft.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&N2(e,a,n);else if(e.tag===19)N2(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(ae(Ft,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Fs(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Zf(n,!1,c,a,d);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Fs(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Zf(n,!0,a,null,d);break;case"together":Zf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Xr(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ga|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Li(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(i(153));if(n.child!==null){for(e=n.child,a=$r(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=$r(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Qf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ds(e)))}function iK(e,n,a){switch(n.tag){case 3:be(n,n.stateNode.containerInfo),ia(n,Gt,e.memoizedState.cache),_i();break;case 27:case 5:Se(n);break;case 4:be(n,n.stateNode.containerInfo);break;case 10:ia(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?D2(e,n,a):(fa(n),e=Xr(e,n,a),e!==null?e.sibling:null);fa(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Li(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return B2(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ae(Ft,Ft.current),o)break;return null;case 22:case 23:return n.lanes=0,w2(e,n,a);case 24:ia(n,Gt,e.memoizedState.cache)}return Xr(e,n,a)}function _2(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)It=!0;else{if(!Qf(e,a)&&(n.flags&128)===0)return It=!1,iK(e,n,a);It=(e.flags&131072)!==0}else It=!1,Qe&&(n.flags&1048576)!==0&&cp(n,Ms,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")af(o)?(e=Qa(o,e),n.tag=1,n=O2(null,n,o,e,a)):(n.tag=0,n=qf(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===w){n.tag=11,n=T2(null,n,o,e,a);break e}else if(c===k){n.tag=14,n=E2(null,n,o,e,a);break e}}throw n=P(o)||o,Error(i(306,n,""))}}return n;case 0:return qf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=Qa(o,n.pendingProps),O2(e,n,o,c,a);case 3:e:{if(be(n,n.stateNode.containerInfo),e===null)throw Error(i(387));o=n.pendingProps;var d=n.memoizedState;c=d.element,yf(e,n),qi(n,o,null,a);var g=n.memoizedState;if(o=g.cache,ia(n,Gt,o),o!==d.cache&&pf(n,[Gt],a,!0),Pi(),o=g.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=M2(e,n,o,a);break e}else if(o!==c){c=Gn(Error(i(424)),n),zi(c),n=M2(e,n,o,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Bt=fr(e.firstChild),gn=n,Qe=!0,Ya=null,Kr=!0,a=d2(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(_i(),o===c){n=Xr(e,n,a);break e}rn(e,n,o,a)}n=n.child}return n;case 26:return Qs(e,n),e===null?(a=kh(n.type,null,n.pendingProps,null))?n.memoizedState=a:Qe||(a=n.type,e=n.pendingProps,o=fu(ce.current).createElement(a),o[Ae]=n,o[Oe]=e,ln(o,a,e),Qt(o),n.stateNode=o):n.memoizedState=kh(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Se(n),e===null&&Qe&&(o=n.stateNode=zh(n.type,n.pendingProps,ce.current),gn=n,Kr=!0,c=Bt,Sa(n.type)?(M0=c,Bt=fr(o.firstChild)):Bt=c),rn(e,n,n.pendingProps.children,a),Qs(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Qe&&((c=o=Bt)&&(o=_K(o,n.type,n.pendingProps,Kr),o!==null?(n.stateNode=o,gn=n,Bt=fr(o.firstChild),Kr=!1,c=!0):c=!1),c||Va(n)),Se(n),c=n.type,d=n.pendingProps,g=e!==null?e.memoizedProps:null,o=d.children,w0(c,d)?o=null:g!==null&&w0(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Cf(e,n,W5,null,null,a),fo._currentValue=c),Qs(e,n),rn(e,n,o,a),n.child;case 6:return e===null&&Qe&&((e=a=Bt)&&(a=zK(a,n.pendingProps,Kr),a!==null?(n.stateNode=a,gn=n,Bt=null,e=!0):e=!1),e||Va(n)),null;case 13:return D2(e,n,a);case 4:return be(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ul(n,null,o,a):rn(e,n,o,a),n.child;case 11:return T2(e,n,n.type,n.pendingProps,a);case 7:return rn(e,n,n.pendingProps,a),n.child;case 8:return rn(e,n,n.pendingProps.children,a),n.child;case 12:return rn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ia(n,n.type,o.value),rn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,Fa(n),c=dn(c),o=o(c),n.flags|=1,rn(e,n,o,a),n.child;case 14:return E2(e,n,n.type,n.pendingProps,a);case 15:return C2(e,n,n.type,n.pendingProps,a);case 19:return B2(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Is(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=$r(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return w2(e,n,a);case 24:return Fa(n),o=dn(Gt),e===null?(c=Kf(),c===null&&(c=xt,d=hf(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=a),c=d),n.memoizedState={parent:o,cache:c},vf(n),ia(n,Gt,c)):((e.lanes&a)!==0&&(yf(e,n),qi(n,null,null,a),Pi()),c=e.memoizedState,d=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ia(n,Gt,o)):(o=d.cache,ia(n,Gt,o),o!==c.cache&&pf(n,[Gt],a,!0))),rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(i(156,n.tag))}function Zr(e){e.flags|=4}function z2(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!qh(n)){if(n=Qn.current,n!==null&&((Fe&4194048)===Fe?gr!==null:(Fe&62914560)!==Fe&&(Fe&536870912)===0||n!==gr))throw ji=gf,vp;e.flags|=8192}}function Ws(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?cl():536870912,e.lanes|=n,$l|=n)}function Qi(e,n){if(!Qe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ot(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function oK(e,n,a){var o=n.pendingProps;switch(uf(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(n),null;case 1:return Ot(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Vr(Gt),Le(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Bi(n)?Zr(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,pp())),Ot(n),null;case 26:return a=n.memoizedState,e===null?(Zr(n),a!==null?(Ot(n),z2(n,a)):(Ot(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Zr(n),Ot(n),z2(n,a)):(Ot(n),n.flags&=-16777217):(e.memoizedProps!==o&&Zr(n),Ot(n),n.flags&=-16777217),null;case 27:Ne(n),a=ce.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Zr(n);else{if(!o){if(n.stateNode===null)throw Error(i(166));return Ot(n),null}e=ue.current,Bi(n)?fp(n):(e=zh(c,o,a),n.stateNode=e,Zr(n))}return Ot(n),null;case 5:if(Ne(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Zr(n);else{if(!o){if(n.stateNode===null)throw Error(i(166));return Ot(n),null}if(e=ue.current,Bi(n))fp(n);else{switch(c=fu(ce.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[Ae]=n,e[Oe]=o;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;e:switch(ln(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Zr(n)}}return Ot(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Zr(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(i(166));if(e=ce.current,Bi(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=gn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[Ae]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Ah(e.nodeValue,a)),e||Va(n)}else e=fu(e).createTextNode(o),e[Ae]=n,n.stateNode=e}return Ot(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Bi(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(i(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(i(317));c[Ae]=n}else _i(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ot(n),c=!1}else c=pp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Fr(n),n):(Fr(n),null)}if(Fr(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ws(n,n.updateQueue),Ot(n),null;case 4:return Le(),e===null&&S0(n.stateNode.containerInfo),Ot(n),null;case 10:return Vr(n.type),Ot(n),null;case 19:if(se(Ft),c=n.memoizedState,c===null)return Ot(n),null;if(o=(n.flags&128)!==0,d=c.rendering,d===null)if(o)Qi(c,!1);else{if(_t!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Fs(e),d!==null){for(n.flags|=128,Qi(c,!1),e=d.updateQueue,n.updateQueue=e,Ws(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)up(a,e),a=a.sibling;return ae(Ft,Ft.current&1|2),n.child}e=e.sibling}c.tail!==null&&_e()>tu&&(n.flags|=128,o=!0,Qi(c,!1),n.lanes=4194304)}else{if(!o)if(e=Fs(d),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Ws(n,e),Qi(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!Qe)return Ot(n),null}else 2*_e()-c.renderingStartTime>tu&&a!==536870912&&(n.flags|=128,o=!0,Qi(c,!1),n.lanes=4194304);c.isBackwards?(d.sibling=n.child,n.child=d):(e=c.last,e!==null?e.sibling=d:n.child=d,c.last=d)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=_e(),n.sibling=null,e=Ft.current,ae(Ft,o?e&1|2:e&1),n):(Ot(n),null);case 22:case 23:return Fr(n),Tf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ot(n),n.subtreeFlags&6&&(n.flags|=8192)):Ot(n),a=n.updateQueue,a!==null&&Ws(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&se(Xa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vr(Gt),Ot(n),null;case 25:return null;case 30:return null}throw Error(i(156,n.tag))}function sK(e,n){switch(uf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vr(Gt),Le(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ne(n),null;case 13:if(Fr(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(i(340));_i()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return se(Ft),null;case 4:return Le(),null;case 10:return Vr(n.type),null;case 22:case 23:return Fr(n),Tf(),e!==null&&se(Xa),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Vr(Gt),null;case 25:return null;default:return null}}function L2(e,n){switch(uf(n),n.tag){case 3:Vr(Gt),Le();break;case 26:case 27:case 5:Ne(n);break;case 4:Le();break;case 13:Fr(n);break;case 19:se(Ft);break;case 10:Vr(n.type);break;case 22:case 23:Fr(n),Tf(),e!==null&&se(Xa);break;case 24:Vr(Gt)}}function Ii(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var d=a.create,g=a.inst;o=d(),g.destroy=o}a=a.next}while(a!==c)}}catch(b){mt(n,n.return,b)}}function pa(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&e)===e){var g=o.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,c=n;var N=a,$=b;try{$()}catch(J){mt(c,N,J)}}}o=o.next}while(o!==d)}}catch(J){mt(n,n.return,J)}}function U2(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Ep(n,a)}catch(o){mt(e,e.return,o)}}}function k2(e,n,a){a.props=Qa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){mt(e,n,o)}}function Wi(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){mt(e,n,c)}}function vr(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){mt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){mt(e,n,c)}else a.current=null}function H2(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){mt(e,e.return,c)}}function If(e,n,a){try{var o=e.stateNode;OK(o,e.type,a,n),o[Oe]=n}catch(c){mt(e,e.return,c)}}function j2(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sa(e.type)||e.tag===4}function Wf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||j2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=cu));else if(o!==4&&(o===27&&Sa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Jf(e,n,a),e=e.sibling;e!==null;)Jf(e,n,a),e=e.sibling}function Js(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Sa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Js(e,n,a),e=e.sibling;e!==null;)Js(e,n,a),e=e.sibling}function $2(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);ln(n,o,a),n[Ae]=e,n[Oe]=a}catch(d){mt(e,e.return,d)}}var Qr=!1,Ht=!1,e0=!1,P2=typeof WeakSet=="function"?WeakSet:Set,Wt=null;function uK(e,n){if(e=e.containerInfo,E0=gu,e=J1(e),Ic(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var g=0,b=-1,N=-1,$=0,J=0,re=e,Y=null;t:for(;;){for(var G;re!==a||c!==0&&re.nodeType!==3||(b=g+c),re!==d||o!==0&&re.nodeType!==3||(N=g+o),re.nodeType===3&&(g+=re.nodeValue.length),(G=re.firstChild)!==null;)Y=re,re=G;for(;;){if(re===e)break t;if(Y===a&&++$===c&&(b=g),Y===d&&++J===o&&(N=g),(G=re.nextSibling)!==null)break;re=Y,Y=re.parentNode}re=G}a=b===-1||N===-1?null:{start:b,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(C0={focusedElem:e,selectionRange:a},gu=!1,Wt=n;Wt!==null;)if(n=Wt,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Wt=e;else for(;Wt!==null;){switch(n=Wt,d=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,c=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var we=Qa(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(we,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(xe){mt(a,a.return,xe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)A0(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":A0(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(i(163))}if(e=n.sibling,e!==null){e.return=n.return,Wt=e;break}Wt=n.return}}function q2(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ha(e,a),o&4&&Ii(5,a);break;case 1:if(ha(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){mt(a,a.return,g)}else{var c=Qa(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){mt(a,a.return,g)}}o&64&&U2(a),o&512&&Wi(a,a.return);break;case 3:if(ha(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Ep(e,n)}catch(g){mt(a,a.return,g)}}break;case 27:n===null&&o&4&&$2(a);case 26:case 5:ha(e,a),n===null&&o&4&&H2(a),o&512&&Wi(a,a.return);break;case 12:ha(e,a);break;case 13:ha(e,a),o&4&&G2(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=vK.bind(null,a),LK(e,a))));break;case 22:if(o=a.memoizedState!==null||Qr,!o){n=n!==null&&n.memoizedState!==null||Ht,c=Qr;var d=Ht;Qr=o,(Ht=n)&&!d?ma(e,a,(a.subtreeFlags&8772)!==0):ha(e,a),Qr=c,Ht=d}break;case 30:break;default:ha(e,a)}}function Y2(e){var n=e.alternate;n!==null&&(e.alternate=null,Y2(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Nc(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var wt=null,Sn=!1;function Ir(e,n,a){for(a=a.child;a!==null;)V2(e,n,a),a=a.sibling}function V2(e,n,a){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Zt,a)}catch{}switch(a.tag){case 26:Ht||vr(a,n),Ir(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ht||vr(a,n);var o=wt,c=Sn;Sa(a.type)&&(wt=a.stateNode,Sn=!1),Ir(e,n,a),oo(a.stateNode),wt=o,Sn=c;break;case 5:Ht||vr(a,n);case 6:if(o=wt,c=Sn,wt=null,Ir(e,n,a),wt=o,Sn=c,wt!==null)if(Sn)try{(wt.nodeType===9?wt.body:wt.nodeName==="HTML"?wt.ownerDocument.body:wt).removeChild(a.stateNode)}catch(d){mt(a,n,d)}else try{wt.removeChild(a.stateNode)}catch(d){mt(a,n,d)}break;case 18:wt!==null&&(Sn?(e=wt,Bh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ko(e)):Bh(wt,a.stateNode));break;case 4:o=wt,c=Sn,wt=a.stateNode.containerInfo,Sn=!0,Ir(e,n,a),wt=o,Sn=c;break;case 0:case 11:case 14:case 15:Ht||pa(2,a,n),Ht||pa(4,a,n),Ir(e,n,a);break;case 1:Ht||(vr(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&k2(a,n,o)),Ir(e,n,a);break;case 21:Ir(e,n,a);break;case 22:Ht=(o=Ht)||a.memoizedState!==null,Ir(e,n,a),Ht=o;break;default:Ir(e,n,a)}}function G2(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ko(e)}catch(a){mt(n,n.return,a)}}function cK(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new P2),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new P2),n;default:throw Error(i(435,e.tag))}}function t0(e,n){var a=cK(e);n.forEach(function(o){var c=yK.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function Nn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],d=e,g=n,b=g;e:for(;b!==null;){switch(b.tag){case 27:if(Sa(b.type)){wt=b.stateNode,Sn=!1;break e}break;case 5:wt=b.stateNode,Sn=!1;break e;case 3:case 4:wt=b.stateNode.containerInfo,Sn=!0;break e}b=b.return}if(wt===null)throw Error(i(160));V2(d,g,c),wt=null,Sn=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)F2(n,e),n=n.sibling}var cr=null;function F2(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Nn(n,e),Bn(e),o&4&&(pa(3,e,e.return),Ii(3,e),pa(5,e,e.return));break;case 1:Nn(n,e),Bn(e),o&512&&(Ht||a===null||vr(a,a.return)),o&64&&Qr&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=cr;if(Nn(n,e),Bn(e),o&512&&(Ht||a===null||vr(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":d=c.getElementsByTagName("title")[0],(!d||d[kr]||d[Ae]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(o),c.head.insertBefore(d,c.querySelector("head > title"))),ln(d,o,a),d[Ae]=e,Qt(d),o=d;break e;case"link":var g=$h("link","href",c).get(o+(a.href||""));if(g){for(var b=0;b<g.length;b++)if(d=g[b],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(b,1);break t}}d=c.createElement(o),ln(d,o,a),c.head.appendChild(d);break;case"meta":if(g=$h("meta","content",c).get(o+(a.content||""))){for(b=0;b<g.length;b++)if(d=g[b],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(b,1);break t}}d=c.createElement(o),ln(d,o,a),c.head.appendChild(d);break;default:throw Error(i(468,o))}d[Ae]=e,Qt(d),o=d}e.stateNode=o}else Ph(c,e.type,e.stateNode);else e.stateNode=jh(c,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Ph(c,e.type,e.stateNode):jh(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&If(e,e.memoizedProps,a.memoizedProps)}break;case 27:Nn(n,e),Bn(e),o&512&&(Ht||a===null||vr(a,a.return)),a!==null&&o&4&&If(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Nn(n,e),Bn(e),o&512&&(Ht||a===null||vr(a,a.return)),e.flags&32){c=e.stateNode;try{yl(c,"")}catch(G){mt(e,e.return,G)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,If(e,c,a!==null?a.memoizedProps:c)),o&1024&&(e0=!0);break;case 6:if(Nn(n,e),Bn(e),o&4){if(e.stateNode===null)throw Error(i(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(G){mt(e,e.return,G)}}break;case 3:if(hu=null,c=cr,cr=du(n.containerInfo),Nn(n,e),cr=c,Bn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ko(n.containerInfo)}catch(G){mt(e,e.return,G)}e0&&(e0=!1,X2(e));break;case 4:o=cr,cr=du(e.stateNode.containerInfo),Nn(n,e),Bn(e),cr=o;break;case 12:Nn(n,e),Bn(e);break;case 13:Nn(n,e),Bn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(o0=_e()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,t0(e,o)));break;case 22:c=e.memoizedState!==null;var N=a!==null&&a.memoizedState!==null,$=Qr,J=Ht;if(Qr=$||c,Ht=J||N,Nn(n,e),Ht=J,Qr=$,Bn(e),o&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||N||Qr||Ht||Ia(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){N=a=n;try{if(d=N.stateNode,c)g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{b=N.stateNode;var re=N.memoizedProps.style,Y=re!=null&&re.hasOwnProperty("display")?re.display:null;b.style.display=Y==null||typeof Y=="boolean"?"":(""+Y).trim()}}catch(G){mt(N,N.return,G)}}}else if(n.tag===6){if(a===null){N=n;try{N.stateNode.nodeValue=c?"":N.memoizedProps}catch(G){mt(N,N.return,G)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,t0(e,a))));break;case 19:Nn(n,e),Bn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,t0(e,o)));break;case 30:break;case 21:break;default:Nn(n,e),Bn(e)}}function Bn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(j2(o)){a=o;break}o=o.return}if(a==null)throw Error(i(160));switch(a.tag){case 27:var c=a.stateNode,d=Wf(e);Js(e,d,c);break;case 5:var g=a.stateNode;a.flags&32&&(yl(g,""),a.flags&=-33);var b=Wf(e);Js(e,b,g);break;case 3:case 4:var N=a.stateNode.containerInfo,$=Wf(e);Jf(e,$,N);break;default:throw Error(i(161))}}catch(J){mt(e,e.return,J)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function X2(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;X2(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ha(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)q2(e,n.alternate,n),n=n.sibling}function Ia(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:pa(4,n,n.return),Ia(n);break;case 1:vr(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&k2(n,n.return,a),Ia(n);break;case 27:oo(n.stateNode);case 26:case 5:vr(n,n.return),Ia(n);break;case 22:n.memoizedState===null&&Ia(n);break;case 30:Ia(n);break;default:Ia(n)}e=e.sibling}}function ma(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,d=n,g=d.flags;switch(d.tag){case 0:case 11:case 15:ma(c,d,a),Ii(4,d);break;case 1:if(ma(c,d,a),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){mt(o,o.return,$)}if(o=d,c=o.updateQueue,c!==null){var b=o.stateNode;try{var N=c.shared.hiddenCallbacks;if(N!==null)for(c.shared.hiddenCallbacks=null,c=0;c<N.length;c++)Tp(N[c],b)}catch($){mt(o,o.return,$)}}a&&g&64&&U2(d),Wi(d,d.return);break;case 27:$2(d);case 26:case 5:ma(c,d,a),a&&o===null&&g&4&&H2(d),Wi(d,d.return);break;case 12:ma(c,d,a);break;case 13:ma(c,d,a),a&&g&4&&G2(c,d);break;case 22:d.memoizedState===null&&ma(c,d,a),Wi(d,d.return);break;case 30:break;default:ma(c,d,a)}n=n.sibling}}function n0(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ui(a))}function r0(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ui(e))}function yr(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Z2(e,n,a,o),n=n.sibling}function Z2(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:yr(e,n,a,o),c&2048&&Ii(9,n);break;case 1:yr(e,n,a,o);break;case 3:yr(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ui(e)));break;case 12:if(c&2048){yr(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,g=d.id,b=d.onPostCommit;typeof b=="function"&&b(g,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){mt(n,n.return,N)}}else yr(e,n,a,o);break;case 13:yr(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,g=n.alternate,n.memoizedState!==null?d._visibility&2?yr(e,n,a,o):Ji(e,n):d._visibility&2?yr(e,n,a,o):(d._visibility|=2,kl(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&n0(g,n);break;case 24:yr(e,n,a,o),c&2048&&r0(n.alternate,n);break;default:yr(e,n,a,o)}}function kl(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=e,g=n,b=a,N=o,$=g.flags;switch(g.tag){case 0:case 11:case 15:kl(d,g,b,N,c),Ii(8,g);break;case 23:break;case 22:var J=g.stateNode;g.memoizedState!==null?J._visibility&2?kl(d,g,b,N,c):Ji(d,g):(J._visibility|=2,kl(d,g,b,N,c)),c&&$&2048&&n0(g.alternate,g);break;case 24:kl(d,g,b,N,c),c&&$&2048&&r0(g.alternate,g);break;default:kl(d,g,b,N,c)}n=n.sibling}}function Ji(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:Ji(a,o),c&2048&&n0(o.alternate,o);break;case 24:Ji(a,o),c&2048&&r0(o.alternate,o);break;default:Ji(a,o)}n=n.sibling}}var eo=8192;function Hl(e){if(e.subtreeFlags&eo)for(e=e.child;e!==null;)Q2(e),e=e.sibling}function Q2(e){switch(e.tag){case 26:Hl(e),e.flags&eo&&e.memoizedState!==null&&ZK(cr,e.memoizedState,e.memoizedProps);break;case 5:Hl(e);break;case 3:case 4:var n=cr;cr=du(e.stateNode.containerInfo),Hl(e),cr=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=eo,eo=16777216,Hl(e),eo=n):Hl(e));break;default:Hl(e)}}function I2(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function to(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Wt=o,J2(o,e)}I2(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)W2(e),e=e.sibling}function W2(e){switch(e.tag){case 0:case 11:case 15:to(e),e.flags&2048&&pa(9,e,e.return);break;case 3:to(e);break;case 12:to(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,eu(e)):to(e);break;default:to(e)}}function eu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Wt=o,J2(o,e)}I2(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:pa(8,n,n.return),eu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,eu(n));break;default:eu(n)}e=e.sibling}}function J2(e,n){for(;Wt!==null;){var a=Wt;switch(a.tag){case 0:case 11:case 15:pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ui(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Wt=o;else e:for(a=e;Wt!==null;){o=Wt;var c=o.sibling,d=o.return;if(Y2(o),o===a){Wt=null;break e}if(c!==null){c.return=d,Wt=c;break e}Wt=d}}}var fK={getCacheForType:function(e){var n=dn(Gt),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},dK=typeof WeakMap=="function"?WeakMap:Map,tt=0,xt=null,Pe=null,Fe=0,nt=0,_n=null,Ka=!1,jl=!1,a0=!1,Wr=0,_t=0,ga=0,Wa=0,l0=0,In=0,$l=0,no=null,xn=null,i0=!1,o0=0,tu=1/0,nu=null,va=null,an=0,ya=null,Pl=null,ql=0,s0=0,u0=null,eh=null,ro=0,c0=null;function zn(){if((tt&2)!==0&&Fe!==0)return Fe&-Fe;if(C.T!==null){var e=Ml;return e!==0?e:g0()}return On()}function th(){In===0&&(In=(Fe&536870912)===0||Qe?qn():536870912);var e=Qn.current;return e!==null&&(e.flags|=32),In}function Ln(e,n,a){(e===xt&&(nt===2||nt===9)||e.cancelPendingCommit!==null)&&(Yl(e,0),ba(e,Fe,In,!1)),sr(e,a),((tt&2)===0||e!==xt)&&(e===xt&&((tt&2)===0&&(Wa|=a),_t===4&&ba(e,Fe,In,!1)),br(e))}function nh(e,n,a){if((tt&6)!==0)throw Error(i(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||pt(e,n),c=o?mK(e,n):p0(e,n,!0),d=o;do{if(c===0){jl&&!o&&ba(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!pK(a)){c=p0(e,n,!1),d=!1;continue}if(c===2){if(d=n,e.errorRecoveryDisabledLanes&d)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;e:{var b=e;c=no;var N=b.current.memoizedState.isDehydrated;if(N&&(Yl(b,g).flags|=256),g=p0(b,g,!1),g!==2){if(a0&&!N){b.errorRecoveryDisabledLanes|=d,Wa|=d,c=4;break e}d=xn,xn=c,d!==null&&(xn===null?xn=d:xn.push.apply(xn,d))}c=g}if(d=!1,c!==2)continue}}if(c===1){Yl(e,0),ba(e,n,0,!0);break}e:{switch(o=e,d=c,d){case 0:case 1:throw Error(i(345));case 4:if((n&4194048)!==n)break;case 6:ba(o,n,In,!Ka);break e;case 2:xn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((n&62914560)===n&&(c=o0+300-_e(),10<c)){if(ba(o,n,In,!Ka),Ye(o,0,!0)!==0)break e;o.timeoutHandle=Dh(rh.bind(null,o,a,xn,nu,i0,n,In,Wa,$l,Ka,d,2,-0,0),c);break e}rh(o,a,xn,nu,i0,n,In,Wa,$l,Ka,d,0,-0,0)}}break}while(!0);br(e)}function rh(e,n,a,o,c,d,g,b,N,$,J,re,Y,G){if(e.timeoutHandle=-1,re=n.subtreeFlags,(re&8192||(re&16785408)===16785408)&&(co={stylesheets:null,count:0,unsuspend:XK},Q2(n),re=QK(),re!==null)){e.cancelPendingCommit=re(ch.bind(null,e,n,d,a,o,c,g,b,N,J,1,Y,G)),ba(e,d,g,!$);return}ch(e,n,d,a,o,c,g,b,N)}function pK(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],d=c.getSnapshot;c=c.value;try{if(!Mn(d(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ba(e,n,a,o){n&=~l0,n&=~Wa,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var d=31-st(c),g=1<<d;o[d]=-1,c&=~g}a!==0&&fl(e,a,n)}function ru(){return(tt&6)===0?(ao(0),!1):!0}function f0(){if(Pe!==null){if(nt===0)var e=Pe.return;else e=Pe,Yr=Ga=null,Af(e),Ll=null,Xi=0,e=Pe;for(;e!==null;)L2(e.alternate,e),e=e.return;Pe=null}}function Yl(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,DK(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),f0(),xt=e,Pe=a=$r(e.current,null),Fe=n,nt=0,_n=null,Ka=!1,jl=pt(e,n),a0=!1,$l=In=l0=Wa=ga=_t=0,xn=no=null,i0=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-st(o),d=1<<c;n|=e[c],o&=~d}return Wr=n,Cs(),a}function ah(e,n){He=null,C.H=Ys,n===Hi||n===_s?(n=Sp(),nt=3):n===vp?(n=Sp(),nt=4):nt=n===x2?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,_n=n,Pe===null&&(_t=1,Zs(e,Gn(n,e.current)))}function lh(){var e=C.H;return C.H=Ys,e===null?Ys:e}function ih(){var e=C.A;return C.A=fK,e}function d0(){_t=4,Ka||(Fe&4194048)!==Fe&&Qn.current!==null||(jl=!0),(ga&134217727)===0&&(Wa&134217727)===0||xt===null||ba(xt,Fe,In,!1)}function p0(e,n,a){var o=tt;tt|=2;var c=lh(),d=ih();(xt!==e||Fe!==n)&&(nu=null,Yl(e,n)),n=!1;var g=_t;e:do try{if(nt!==0&&Pe!==null){var b=Pe,N=_n;switch(nt){case 8:f0(),g=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var $=nt;if(nt=0,_n=null,Vl(e,b,N,$),a&&jl){g=0;break e}break;default:$=nt,nt=0,_n=null,Vl(e,b,N,$)}}hK(),g=_t;break}catch(J){ah(e,J)}while(!0);return n&&e.shellSuspendCounter++,Yr=Ga=null,tt=o,C.H=c,C.A=d,Pe===null&&(xt=null,Fe=0,Cs()),g}function hK(){for(;Pe!==null;)oh(Pe)}function mK(e,n){var a=tt;tt|=2;var o=lh(),c=ih();xt!==e||Fe!==n?(nu=null,tu=_e()+500,Yl(e,n)):jl=pt(e,n);e:do try{if(nt!==0&&Pe!==null){n=Pe;var d=_n;t:switch(nt){case 1:nt=0,_n=null,Vl(e,n,d,1);break;case 2:case 9:if(yp(d)){nt=0,_n=null,sh(n);break}n=function(){nt!==2&&nt!==9||xt!==e||(nt=7),br(e)},d.then(n,n);break e;case 3:nt=7;break e;case 4:nt=5;break e;case 7:yp(d)?(nt=0,_n=null,sh(n)):(nt=0,_n=null,Vl(e,n,d,7));break;case 5:var g=null;switch(Pe.tag){case 26:g=Pe.memoizedState;case 5:case 27:var b=Pe;if(!g||qh(g)){nt=0,_n=null;var N=b.sibling;if(N!==null)Pe=N;else{var $=b.return;$!==null?(Pe=$,au($)):Pe=null}break t}}nt=0,_n=null,Vl(e,n,d,5);break;case 6:nt=0,_n=null,Vl(e,n,d,6);break;case 8:f0(),_t=6;break e;default:throw Error(i(462))}}KK();break}catch(J){ah(e,J)}while(!0);return Yr=Ga=null,C.H=o,C.A=c,tt=a,Pe!==null?0:(xt=null,Fe=0,Cs(),_t)}function KK(){for(;Pe!==null&&!Ve();)oh(Pe)}function oh(e){var n=_2(e.alternate,e,Wr);e.memoizedProps=e.pendingProps,n===null?au(e):Pe=n}function sh(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=A2(a,n,n.pendingProps,n.type,void 0,Fe);break;case 11:n=A2(a,n,n.pendingProps,n.type.render,n.ref,Fe);break;case 5:Af(n);default:L2(a,n),n=Pe=up(n,Wr),n=_2(a,n,Wr)}e.memoizedProps=e.pendingProps,n===null?au(e):Pe=n}function Vl(e,n,a,o){Yr=Ga=null,Af(n),Ll=null,Xi=0;var c=n.return;try{if(lK(e,c,n,a,Fe)){_t=1,Zs(e,Gn(a,e.current)),Pe=null;return}}catch(d){if(c!==null)throw Pe=c,d;_t=1,Zs(e,Gn(a,e.current)),Pe=null;return}n.flags&32768?(Qe||o===1?e=!0:jl||(Fe&536870912)!==0?e=!1:(Ka=e=!0,(o===2||o===9||o===3||o===6)&&(o=Qn.current,o!==null&&o.tag===13&&(o.flags|=16384))),uh(n,e)):au(n)}function au(e){var n=e;do{if((n.flags&32768)!==0){uh(n,Ka);return}e=n.return;var a=oK(n.alternate,n,Wr);if(a!==null){Pe=a;return}if(n=n.sibling,n!==null){Pe=n;return}Pe=n=e}while(n!==null);_t===0&&(_t=5)}function uh(e,n){do{var a=sK(e.alternate,e);if(a!==null){a.flags&=32767,Pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Pe=e;return}Pe=e=a}while(e!==null);_t=6,Pe=null}function ch(e,n,a,o,c,d,g,b,N){e.cancelPendingCommit=null;do lu();while(an!==0);if((tt&6)!==0)throw Error(i(327));if(n!==null){if(n===e.current)throw Error(i(177));if(d=n.lanes|n.childLanes,d|=nf,Si(e,a,d,g,b,N),e===xt&&(Pe=xt=null,Fe=0),Pl=n,ya=e,ql=a,s0=d,u0=c,eh=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,bK(je,function(){return mh(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=C.T,C.T=null,c=V.p,V.p=2,g=tt,tt|=4;try{uK(e,n,a)}finally{tt=g,V.p=c,C.T=o}}an=1,fh(),dh(),ph()}}function fh(){if(an===1){an=0;var e=ya,n=Pl,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=C.T,C.T=null;var o=V.p;V.p=2;var c=tt;tt|=4;try{F2(n,e);var d=C0,g=J1(e.containerInfo),b=d.focusedElem,N=d.selectionRange;if(g!==b&&b&&b.ownerDocument&&W1(b.ownerDocument.documentElement,b)){if(N!==null&&Ic(b)){var $=N.start,J=N.end;if(J===void 0&&(J=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(J,b.value.length);else{var re=b.ownerDocument||document,Y=re&&re.defaultView||window;if(Y.getSelection){var G=Y.getSelection(),we=b.textContent.length,xe=Math.min(N.start,we),ft=N.end===void 0?xe:Math.min(N.end,we);!G.extend&&xe>ft&&(g=ft,ft=xe,xe=g);var U=I1(b,xe),z=I1(b,ft);if(U&&z&&(G.rangeCount!==1||G.anchorNode!==U.node||G.anchorOffset!==U.offset||G.focusNode!==z.node||G.focusOffset!==z.offset)){var H=re.createRange();H.setStart(U.node,U.offset),G.removeAllRanges(),xe>ft?(G.addRange(H),G.extend(z.node,z.offset)):(H.setEnd(z.node,z.offset),G.addRange(H))}}}}for(re=[],G=b;G=G.parentNode;)G.nodeType===1&&re.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<re.length;b++){var ne=re[b];ne.element.scrollLeft=ne.left,ne.element.scrollTop=ne.top}}gu=!!E0,C0=E0=null}finally{tt=c,V.p=o,C.T=a}}e.current=n,an=2}}function dh(){if(an===2){an=0;var e=ya,n=Pl,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=C.T,C.T=null;var o=V.p;V.p=2;var c=tt;tt|=4;try{q2(e,n.alternate,n)}finally{tt=c,V.p=o,C.T=a}}an=3}}function ph(){if(an===4||an===3){an=0,Ct();var e=ya,n=Pl,a=ql,o=eh;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?an=5:(an=0,Pl=ya=null,hh(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(va=null),Be(a),n=n.stateNode,ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Zt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=C.T,c=V.p,V.p=2,C.T=null;try{for(var d=e.onRecoverableError,g=0;g<o.length;g++){var b=o[g];d(b.value,{componentStack:b.stack})}}finally{C.T=n,V.p=c}}(ql&3)!==0&&lu(),br(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===c0?ro++:(ro=0,c0=e):ro=0,ao(0)}}function hh(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ui(n)))}function lu(e){return fh(),dh(),ph(),mh()}function mh(){if(an!==5)return!1;var e=ya,n=s0;s0=0;var a=Be(ql),o=C.T,c=V.p;try{V.p=32>a?32:a,C.T=null,a=u0,u0=null;var d=ya,g=ql;if(an=0,Pl=ya=null,ql=0,(tt&6)!==0)throw Error(i(331));var b=tt;if(tt|=4,W2(d.current),Z2(d,d.current,g,a),tt=b,ao(0,!1),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Zt,d)}catch{}return!0}finally{V.p=c,C.T=o,hh(e,n)}}function Kh(e,n,a){n=Gn(a,n),n=Pf(e.stateNode,n,2),e=ua(e,n,2),e!==null&&(sr(e,2),br(e))}function mt(e,n,a){if(e.tag===3)Kh(e,e,a);else for(;n!==null;){if(n.tag===3){Kh(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(va===null||!va.has(o))){e=Gn(a,e),a=b2(2),o=ua(n,a,2),o!==null&&(S2(a,o,n,e),sr(o,2),br(o));break}}n=n.return}}function h0(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new dK;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(a0=!0,c.add(a),e=gK.bind(null,e,n,a),n.then(e,e))}function gK(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,xt===e&&(Fe&a)===a&&(_t===4||_t===3&&(Fe&62914560)===Fe&&300>_e()-o0?(tt&2)===0&&Yl(e,0):l0|=a,$l===Fe&&($l=0)),br(e)}function gh(e,n){n===0&&(n=cl()),e=wl(e,n),e!==null&&(sr(e,n),br(e))}function vK(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),gh(e,a)}function yK(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(i(314))}o!==null&&o.delete(n),gh(e,a)}function bK(e,n){return lt(e,n)}var iu=null,Gl=null,m0=!1,ou=!1,K0=!1,Ja=0;function br(e){e!==Gl&&e.next===null&&(Gl===null?iu=Gl=e:Gl=Gl.next=e),ou=!0,m0||(m0=!0,xK())}function ao(e,n){if(!K0&&ou){K0=!0;do for(var a=!1,o=iu;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var g=o.suspendedLanes,b=o.pingedLanes;d=(1<<31-st(42|e)+1)-1,d&=c&~(g&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Sh(o,d))}else d=Fe,d=Ye(o,o===xt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||pt(o,d)||(a=!0,Sh(o,d));o=o.next}while(a);K0=!1}}function SK(){vh()}function vh(){ou=m0=!1;var e=0;Ja!==0&&(MK()&&(e=Ja),Ja=0);for(var n=_e(),a=null,o=iu;o!==null;){var c=o.next,d=yh(o,n);d===0?(o.next=null,a===null?iu=c:a.next=c,c===null&&(Gl=a)):(a=o,(e!==0||(d&3)!==0)&&(ou=!0)),o=c}ao(e)}function yh(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var g=31-st(d),b=1<<g,N=c[g];N===-1?((b&a)===0||(b&o)!==0)&&(c[g]=fn(b,n)):N<=n&&(e.expiredLanes|=b),d&=~b}if(n=xt,a=Fe,a=Ye(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(nt===2||nt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ce(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||pt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ce(o),Be(a)){case 2:case 8:a=Xe;break;case 32:a=je;break;case 268435456:a=$t;break;default:a=je}return o=bh.bind(null,e),a=lt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ce(o),e.callbackPriority=2,e.callbackNode=null,2}function bh(e,n){if(an!==0&&an!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(lu()&&e.callbackNode!==a)return null;var o=Fe;return o=Ye(e,e===xt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(nh(e,o,n),yh(e,_e()),e.callbackNode!=null&&e.callbackNode===a?bh.bind(null,e):null)}function Sh(e,n){if(lu())return null;nh(e,n,!0)}function xK(){NK(function(){(tt&6)!==0?lt(St,SK):vh()})}function g0(){return Ja===0&&(Ja=qn()),Ja}function xh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vs(""+e)}function Th(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function TK(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var d=xh((c[Oe]||null).action),g=o.submitter;g&&(n=(n=g[Oe]||null)?xh(n.formAction):g.getAttribute("formAction"),n!==null&&(d=n,g=null));var b=new xs("action","action",null,o,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ja!==0){var N=g?Th(c,g):new FormData(c);Uf(a,{pending:!0,data:N,method:c.method,action:d},null,N)}}else typeof d=="function"&&(b.preventDefault(),N=g?Th(c,g):new FormData(c),Uf(a,{pending:!0,data:N,method:c.method,action:d},d,N))},currentTarget:c}]})}}for(var v0=0;v0<tf.length;v0++){var y0=tf[v0],EK=y0.toLowerCase(),CK=y0[0].toUpperCase()+y0.slice(1);ur(EK,"on"+CK)}ur(np,"onAnimationEnd"),ur(rp,"onAnimationIteration"),ur(ap,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(P5,"onTransitionRun"),ur(q5,"onTransitionStart"),ur(Y5,"onTransitionCancel"),ur(lp,"onTransitionEnd"),Kl("onMouseEnter",["mouseout","mouseover"]),Kl("onMouseLeave",["mouseout","mouseover"]),Kl("onPointerEnter",["pointerout","pointerover"]),Kl("onPointerLeave",["pointerout","pointerover"]),Ua("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ua("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ua("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ua("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ua("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ua("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wK=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lo));function Eh(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var g=o.length-1;0<=g;g--){var b=o[g],N=b.instance,$=b.currentTarget;if(b=b.listener,N!==d&&c.isPropagationStopped())break e;d=b,c.currentTarget=$;try{d(c)}catch(J){Xs(J)}c.currentTarget=null,d=N}else for(g=0;g<o.length;g++){if(b=o[g],N=b.instance,$=b.currentTarget,b=b.listener,N!==d&&c.isPropagationStopped())break e;d=b,c.currentTarget=$;try{d(c)}catch(J){Xs(J)}c.currentTarget=null,d=N}}}}function qe(e,n){var a=n[vn];a===void 0&&(a=n[vn]=new Set);var o=e+"__bubble";a.has(o)||(Ch(n,e,2,!1),a.add(o))}function b0(e,n,a){var o=0;n&&(o|=4),Ch(a,e,o,n)}var su="_reactListening"+Math.random().toString(36).slice(2);function S0(e){if(!e[su]){e[su]=!0,v1.forEach(function(a){a!=="selectionchange"&&(wK.has(a)||b0(a,!1,e),b0(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[su]||(n[su]=!0,b0("selectionchange",!1,n))}}function Ch(e,n,a,o){switch(Zh(n)){case 2:var c=JK;break;case 8:c=eg;break;default:c=z0}a=c.bind(null,n,a,e),c=void 0,!Pc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function x0(e,n,a,o,c){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var g=o.tag;if(g===3||g===4){var b=o.stateNode.containerInfo;if(b===c)break;if(g===4)for(g=o.return;g!==null;){var N=g.tag;if((N===3||N===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;b!==null;){if(g=pl(b),g===null)return;if(N=g.tag,N===5||N===6||N===26||N===27){o=d=g;continue e}b=b.parentNode}}o=o.return}N1(function(){var $=d,J=jc(a),re=[];e:{var Y=ip.get(e);if(Y!==void 0){var G=xs,we=e;switch(e){case"keypress":if(bs(a)===0)break e;case"keydown":case"keyup":G=b5;break;case"focusin":we="focus",G=Gc;break;case"focusout":we="blur",G=Gc;break;case"beforeblur":case"afterblur":G=Gc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=z1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=s5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=T5;break;case np:case rp:case ap:G=f5;break;case lp:G=C5;break;case"scroll":case"scrollend":G=i5;break;case"wheel":G=R5;break;case"copy":case"cut":case"paste":G=p5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=U1;break;case"toggle":case"beforetoggle":G=O5}var xe=(n&4)!==0,ft=!xe&&(e==="scroll"||e==="scrollend"),U=xe?Y!==null?Y+"Capture":null:Y;xe=[];for(var z=$,H;z!==null;){var ne=z;if(H=ne.stateNode,ne=ne.tag,ne!==5&&ne!==26&&ne!==27||H===null||U===null||(ne=Ei(z,U),ne!=null&&xe.push(io(z,ne,H))),ft)break;z=z.return}0<xe.length&&(Y=new G(Y,we,null,a,J),re.push({event:Y,listeners:xe}))}}if((n&7)===0){e:{if(Y=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",Y&&a!==Hc&&(we=a.relatedTarget||a.fromElement)&&(pl(we)||we[ht]))break e;if((G||Y)&&(Y=J.window===J?J:(Y=J.ownerDocument)?Y.defaultView||Y.parentWindow:window,G?(we=a.relatedTarget||a.toElement,G=$,we=we?pl(we):null,we!==null&&(ft=u(we),xe=we.tag,we!==ft||xe!==5&&xe!==27&&xe!==6)&&(we=null)):(G=null,we=$),G!==we)){if(xe=z1,ne="onMouseLeave",U="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(xe=U1,ne="onPointerLeave",U="onPointerEnter",z="pointer"),ft=G==null?Y:Ti(G),H=we==null?Y:Ti(we),Y=new xe(ne,z+"leave",G,a,J),Y.target=ft,Y.relatedTarget=H,ne=null,pl(J)===$&&(xe=new xe(U,z+"enter",we,a,J),xe.target=H,xe.relatedTarget=ft,ne=xe),ft=ne,G&&we)t:{for(xe=G,U=we,z=0,H=xe;H;H=Fl(H))z++;for(H=0,ne=U;ne;ne=Fl(ne))H++;for(;0<z-H;)xe=Fl(xe),z--;for(;0<H-z;)U=Fl(U),H--;for(;z--;){if(xe===U||U!==null&&xe===U.alternate)break t;xe=Fl(xe),U=Fl(U)}xe=null}else xe=null;G!==null&&wh(re,Y,G,xe,!1),we!==null&&ft!==null&&wh(re,ft,we,xe,!0)}}e:{if(Y=$?Ti($):window,G=Y.nodeName&&Y.nodeName.toLowerCase(),G==="select"||G==="input"&&Y.type==="file")var pe=V1;else if(q1(Y))if(G1)pe=H5;else{pe=U5;var $e=L5}else G=Y.nodeName,!G||G.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?$&&kc($.elementType)&&(pe=V1):pe=k5;if(pe&&(pe=pe(e,$))){Y1(re,pe,a,J);break e}$e&&$e(e,Y,$),e==="focusout"&&$&&Y.type==="number"&&$.memoizedProps.value!=null&&Uc(Y,"number",Y.value)}switch($e=$?Ti($):window,e){case"focusin":(q1($e)||$e.contentEditable==="true")&&(Tl=$e,Wc=$,Ni=null);break;case"focusout":Ni=Wc=Tl=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,ep(re,a,J);break;case"selectionchange":if($5)break;case"keydown":case"keyup":ep(re,a,J)}var ge;if(Xc)e:{switch(e){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else xl?$1(e,a)&&(Ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(k1&&a.locale!=="ko"&&(xl||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&xl&&(ge=B1()):(la=J,qc="value"in la?la.value:la.textContent,xl=!0)),$e=uu($,Ee),0<$e.length&&(Ee=new L1(Ee,e,null,a,J),re.push({event:Ee,listeners:$e}),ge?Ee.data=ge:(ge=P1(a),ge!==null&&(Ee.data=ge)))),(ge=D5?N5(e,a):B5(e,a))&&(Ee=uu($,"onBeforeInput"),0<Ee.length&&($e=new L1("onBeforeInput","beforeinput",null,a,J),re.push({event:$e,listeners:Ee}),$e.data=ge)),TK(re,e,$,a,J)}Eh(re,n)})}function io(e,n,a){return{instance:e,listener:n,currentTarget:a}}function uu(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Ei(e,a),c!=null&&o.unshift(io(e,c,d)),c=Ei(e,n),c!=null&&o.push(io(e,c,d))),e.tag===3)return o;e=e.return}return[]}function Fl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function wh(e,n,a,o,c){for(var d=n._reactName,g=[];a!==null&&a!==o;){var b=a,N=b.alternate,$=b.stateNode;if(b=b.tag,N!==null&&N===o)break;b!==5&&b!==26&&b!==27||$===null||(N=$,c?($=Ei(a,d),$!=null&&g.unshift(io(a,$,N))):c||($=Ei(a,d),$!=null&&g.push(io(a,$,N)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var RK=/\r\n?/g,AK=/\u0000|\uFFFD/g;function Rh(e){return(typeof e=="string"?e:""+e).replace(RK,`
`).replace(AK,"")}function Ah(e,n){return n=Rh(n),Rh(e)===n}function cu(){}function ct(e,n,a,o,c,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||yl(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&yl(e,""+o);break;case"className":ms(e,"class",o);break;case"tabIndex":ms(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ms(e,a,o);break;case"style":M1(e,o,d);break;case"data":if(n!=="object"){ms(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=vs(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&ct(e,n,"name",c.name,c,null),ct(e,n,"formEncType",c.formEncType,c,null),ct(e,n,"formMethod",c.formMethod,c,null),ct(e,n,"formTarget",c.formTarget,c,null)):(ct(e,n,"encType",c.encType,c,null),ct(e,n,"method",c.method,c,null),ct(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=vs(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=cu);break;case"onScroll":o!=null&&qe("scroll",e);break;case"onScrollEnd":o!=null&&qe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(i(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(i(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=vs(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":qe("beforetoggle",e),qe("toggle",e),hs(e,"popover",o);break;case"xlinkActuate":Hr(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Hr(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Hr(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Hr(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Hr(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Hr(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Hr(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Hr(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Hr(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":hs(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=a5.get(a)||a,hs(e,a,o))}}function T0(e,n,a,o,c,d){switch(a){case"style":M1(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(i(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(i(60));e.innerHTML=a}}break;case"children":typeof o=="string"?yl(e,o):(typeof o=="number"||typeof o=="bigint")&&yl(e,""+o);break;case"onScroll":o!=null&&qe("scroll",e);break;case"onScrollEnd":o!=null&&qe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=cu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!y1.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),d=e[Oe]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,c),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):hs(e,a,o)}}}function ln(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":qe("error",e),qe("load",e);var o=!1,c=!1,d;for(d in a)if(a.hasOwnProperty(d)){var g=a[d];if(g!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,n));default:ct(e,n,d,g,a,null)}}c&&ct(e,n,"srcSet",a.srcSet,a,null),o&&ct(e,n,"src",a.src,a,null);return;case"input":qe("invalid",e);var b=d=g=c=null,N=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var J=a[o];if(J!=null)switch(o){case"name":c=J;break;case"type":g=J;break;case"checked":N=J;break;case"defaultChecked":$=J;break;case"value":d=J;break;case"defaultValue":b=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(i(137,n));break;default:ct(e,n,o,J,a,null)}}w1(e,d,b,N,$,g,c,!1),Ks(e);return;case"select":qe("invalid",e),o=g=d=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":d=b;break;case"defaultValue":g=b;break;case"multiple":o=b;default:ct(e,n,c,b,a,null)}n=d,a=g,e.multiple=!!o,n!=null?vl(e,!!o,n,!1):a!=null&&vl(e,!!o,a,!0);return;case"textarea":qe("invalid",e),d=c=o=null;for(g in a)if(a.hasOwnProperty(g)&&(b=a[g],b!=null))switch(g){case"value":o=b;break;case"defaultValue":c=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(i(91));break;default:ct(e,n,g,b,a,null)}A1(e,o,c,d),Ks(e);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(o=a[N],o!=null))switch(N){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ct(e,n,N,o,a,null)}return;case"dialog":qe("beforetoggle",e),qe("toggle",e),qe("cancel",e),qe("close",e);break;case"iframe":case"object":qe("load",e);break;case"video":case"audio":for(o=0;o<lo.length;o++)qe(lo[o],e);break;case"image":qe("error",e),qe("load",e);break;case"details":qe("toggle",e);break;case"embed":case"source":case"link":qe("error",e),qe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,n));default:ct(e,n,$,o,a,null)}return;default:if(kc(n)){for(J in a)a.hasOwnProperty(J)&&(o=a[J],o!==void 0&&T0(e,n,J,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&ct(e,n,b,o,a,null))}function OK(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,g=null,b=null,N=null,$=null,J=null;for(G in a){var re=a[G];if(a.hasOwnProperty(G)&&re!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":N=re;default:o.hasOwnProperty(G)||ct(e,n,G,null,o,re)}}for(var Y in o){var G=o[Y];if(re=a[Y],o.hasOwnProperty(Y)&&(G!=null||re!=null))switch(Y){case"type":d=G;break;case"name":c=G;break;case"checked":$=G;break;case"defaultChecked":J=G;break;case"value":g=G;break;case"defaultValue":b=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(i(137,n));break;default:G!==re&&ct(e,n,Y,G,o,re)}}Lc(e,g,b,N,$,J,d,c);return;case"select":G=g=b=Y=null;for(d in a)if(N=a[d],a.hasOwnProperty(d)&&N!=null)switch(d){case"value":break;case"multiple":G=N;default:o.hasOwnProperty(d)||ct(e,n,d,null,o,N)}for(c in o)if(d=o[c],N=a[c],o.hasOwnProperty(c)&&(d!=null||N!=null))switch(c){case"value":Y=d;break;case"defaultValue":b=d;break;case"multiple":g=d;default:d!==N&&ct(e,n,c,d,o,N)}n=b,a=g,o=G,Y!=null?vl(e,!!a,Y,!1):!!o!=!!a&&(n!=null?vl(e,!!a,n,!0):vl(e,!!a,a?[]:"",!1));return;case"textarea":G=Y=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:ct(e,n,b,null,o,c)}for(g in o)if(c=o[g],d=a[g],o.hasOwnProperty(g)&&(c!=null||d!=null))switch(g){case"value":Y=c;break;case"defaultValue":G=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(i(91));break;default:c!==d&&ct(e,n,g,c,o,d)}R1(e,Y,G);return;case"option":for(var we in a)if(Y=a[we],a.hasOwnProperty(we)&&Y!=null&&!o.hasOwnProperty(we))switch(we){case"selected":e.selected=!1;break;default:ct(e,n,we,null,o,Y)}for(N in o)if(Y=o[N],G=a[N],o.hasOwnProperty(N)&&Y!==G&&(Y!=null||G!=null))switch(N){case"selected":e.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:ct(e,n,N,Y,o,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var xe in a)Y=a[xe],a.hasOwnProperty(xe)&&Y!=null&&!o.hasOwnProperty(xe)&&ct(e,n,xe,null,o,Y);for($ in o)if(Y=o[$],G=a[$],o.hasOwnProperty($)&&Y!==G&&(Y!=null||G!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(i(137,n));break;default:ct(e,n,$,Y,o,G)}return;default:if(kc(n)){for(var ft in a)Y=a[ft],a.hasOwnProperty(ft)&&Y!==void 0&&!o.hasOwnProperty(ft)&&T0(e,n,ft,void 0,o,Y);for(J in o)Y=o[J],G=a[J],!o.hasOwnProperty(J)||Y===G||Y===void 0&&G===void 0||T0(e,n,J,Y,o,G);return}}for(var U in a)Y=a[U],a.hasOwnProperty(U)&&Y!=null&&!o.hasOwnProperty(U)&&ct(e,n,U,null,o,Y);for(re in o)Y=o[re],G=a[re],!o.hasOwnProperty(re)||Y===G||Y==null&&G==null||ct(e,n,re,Y,o,G)}var E0=null,C0=null;function fu(e){return e.nodeType===9?e:e.ownerDocument}function Oh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Mh(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function w0(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var R0=null;function MK(){var e=window.event;return e&&e.type==="popstate"?e===R0?!1:(R0=e,!0):(R0=null,!1)}var Dh=typeof setTimeout=="function"?setTimeout:void 0,DK=typeof clearTimeout=="function"?clearTimeout:void 0,Nh=typeof Promise=="function"?Promise:void 0,NK=typeof queueMicrotask=="function"?queueMicrotask:typeof Nh<"u"?function(e){return Nh.resolve(null).then(e).catch(BK)}:Dh;function BK(e){setTimeout(function(){throw e})}function Sa(e){return e==="head"}function Bh(e,n){var a=n,o=0,c=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var g=e.ownerDocument;if(a&1&&oo(g.documentElement),a&2&&oo(g.body),a&4)for(a=g.head,oo(a),g=a.firstChild;g;){var b=g.nextSibling,N=g.nodeName;g[kr]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&g.rel.toLowerCase()==="stylesheet"||a.removeChild(g),g=b}}if(c===0){e.removeChild(d),Ko(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);Ko(n)}function A0(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":A0(a),Nc(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function _K(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[kr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=fr(e.nextSibling),e===null)break}return null}function zK(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=fr(e.nextSibling),e===null))return null;return e}function O0(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function LK(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function fr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var M0=null;function _h(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function zh(e,n,a){switch(n=fu(a),e){case"html":if(e=n.documentElement,!e)throw Error(i(452));return e;case"head":if(e=n.head,!e)throw Error(i(453));return e;case"body":if(e=n.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function oo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Nc(e)}var Wn=new Map,Lh=new Set;function du(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Jr=V.d;V.d={f:UK,r:kK,D:HK,C:jK,L:$K,m:PK,X:YK,S:qK,M:VK};function UK(){var e=Jr.f(),n=ru();return e||n}function kK(e){var n=hl(e);n!==null&&n.tag===5&&n.type==="form"?n2(n):Jr.r(e)}var Xl=typeof document>"u"?null:document;function Uh(e,n,a){var o=Xl;if(o&&typeof n=="string"&&n){var c=Vn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Lh.has(c)||(Lh.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),ln(n,"link",e),Qt(n),o.head.appendChild(n)))}}function HK(e){Jr.D(e),Uh("dns-prefetch",e,null)}function jK(e,n){Jr.C(e,n),Uh("preconnect",e,n)}function $K(e,n,a){Jr.L(e,n,a);var o=Xl;if(o&&e&&n){var c='link[rel="preload"][as="'+Vn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Vn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Vn(a.imageSizes)+'"]')):c+='[href="'+Vn(e)+'"]';var d=c;switch(n){case"style":d=Zl(e);break;case"script":d=Ql(e)}Wn.has(d)||(e=K({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Wn.set(d,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(so(d))||n==="script"&&o.querySelector(uo(d))||(n=o.createElement("link"),ln(n,"link",e),Qt(n),o.head.appendChild(n)))}}function PK(e,n){Jr.m(e,n);var a=Xl;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Vn(o)+'"][href="'+Vn(e)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ql(e)}if(!Wn.has(d)&&(e=K({rel:"modulepreload",href:e},n),Wn.set(d,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(uo(d)))return}o=a.createElement("link"),ln(o,"link",e),Qt(o),a.head.appendChild(o)}}}function qK(e,n,a){Jr.S(e,n,a);var o=Xl;if(o&&e){var c=ml(o).hoistableStyles,d=Zl(e);n=n||"default";var g=c.get(d);if(!g){var b={loading:0,preload:null};if(g=o.querySelector(so(d)))b.loading=5;else{e=K({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Wn.get(d))&&D0(e,a);var N=g=o.createElement("link");Qt(N),ln(N,"link",e),N._p=new Promise(function($,J){N.onload=$,N.onerror=J}),N.addEventListener("load",function(){b.loading|=1}),N.addEventListener("error",function(){b.loading|=2}),b.loading|=4,pu(g,n,o)}g={type:"stylesheet",instance:g,count:1,state:b},c.set(d,g)}}}function YK(e,n){Jr.X(e,n);var a=Xl;if(a&&e){var o=ml(a).hoistableScripts,c=Ql(e),d=o.get(c);d||(d=a.querySelector(uo(c)),d||(e=K({src:e,async:!0},n),(n=Wn.get(c))&&N0(e,n),d=a.createElement("script"),Qt(d),ln(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function VK(e,n){Jr.M(e,n);var a=Xl;if(a&&e){var o=ml(a).hoistableScripts,c=Ql(e),d=o.get(c);d||(d=a.querySelector(uo(c)),d||(e=K({src:e,async:!0,type:"module"},n),(n=Wn.get(c))&&N0(e,n),d=a.createElement("script"),Qt(d),ln(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function kh(e,n,a,o){var c=(c=ce.current)?du(c):null;if(!c)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Zl(a.href),a=ml(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Zl(a.href);var d=ml(c).hoistableStyles,g=d.get(e);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,g),(d=c.querySelector(so(e)))&&!d._p&&(g.instance=d,g.state.loading=5),Wn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Wn.set(e,a),d||GK(c,e,a,g.state))),n&&o===null)throw Error(i(528,""));return g}if(n&&o!==null)throw Error(i(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ql(a),a=ml(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Zl(e){return'href="'+Vn(e)+'"'}function so(e){return'link[rel="stylesheet"]['+e+"]"}function Hh(e){return K({},e,{"data-precedence":e.precedence,precedence:null})}function GK(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),ln(n,"link",a),Qt(n),e.head.appendChild(n))}function Ql(e){return'[src="'+Vn(e)+'"]'}function uo(e){return"script[async]"+e}function jh(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Vn(a.href)+'"]');if(o)return n.instance=o,Qt(o),o;var c=K({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Qt(o),ln(o,"style",c),pu(o,a.precedence,e),n.instance=o;case"stylesheet":c=Zl(a.href);var d=e.querySelector(so(c));if(d)return n.state.loading|=4,n.instance=d,Qt(d),d;o=Hh(a),(c=Wn.get(c))&&D0(o,c),d=(e.ownerDocument||e).createElement("link"),Qt(d);var g=d;return g._p=new Promise(function(b,N){g.onload=b,g.onerror=N}),ln(d,"link",o),n.state.loading|=4,pu(d,a.precedence,e),n.instance=d;case"script":return d=Ql(a.src),(c=e.querySelector(uo(d)))?(n.instance=c,Qt(c),c):(o=a,(c=Wn.get(d))&&(o=K({},a),N0(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),Qt(c),ln(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(i(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,pu(o,a.precedence,e));return n.instance}function pu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,g=0;g<o.length;g++){var b=o[g];if(b.dataset.precedence===n)d=b;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function D0(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function N0(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var hu=null;function $h(e,n,a){if(hu===null){var o=new Map,c=hu=new Map;c.set(a,o)}else c=hu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var d=a[c];if(!(d[kr]||d[Ae]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var g=d.getAttribute(n)||"";g=e+g;var b=o.get(g);b?b.push(d):o.set(g,[d])}}return o}function Ph(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function FK(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function qh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var co=null;function XK(){}function ZK(e,n,a){if(co===null)throw Error(i(475));var o=co;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Zl(a.href),d=e.querySelector(so(c));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=mu.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=d,Qt(d);return}d=e.ownerDocument||e,a=Hh(a),(c=Wn.get(c))&&D0(a,c),d=d.createElement("link"),Qt(d);var g=d;g._p=new Promise(function(b,N){g.onload=b,g.onerror=N}),ln(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=mu.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function QK(){if(co===null)throw Error(i(475));var e=co;return e.stylesheets&&e.count===0&&B0(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&B0(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function mu(){if(this.count--,this.count===0){if(this.stylesheets)B0(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ku=null;function B0(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ku=new Map,n.forEach(IK,e),Ku=null,mu.call(e))}function IK(e,n){if(!(n.state.loading&4)){var a=Ku.get(e);if(a)var o=a.get(null);else{a=new Map,Ku.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var g=c[d];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),o=g)}o&&a.set(null,o)}c=n.instance,g=c.getAttribute("data-precedence"),d=a.get(g)||o,d===o&&a.set(null,c),a.set(g,c),this.count++,o=mu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var fo={$$typeof:O,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function WK(e,n,a,o,c,d,g,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_a(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_a(0),this.hiddenUpdates=_a(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Yh(e,n,a,o,c,d,g,b,N,$,J,re){return e=new WK(e,n,a,g,b,N,$,re),n=1,d===!0&&(n|=24),d=Dn(3,null,null,n),e.current=d,d.stateNode=e,n=hf(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},vf(d),e}function Vh(e){return e?(e=Rl,e):Rl}function Gh(e,n,a,o,c,d){c=Vh(c),o.context===null?o.context=c:o.pendingContext=c,o=sa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=ua(e,o,n),a!==null&&(Ln(a,e,n),$i(a,e,n))}function Fh(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function _0(e,n){Fh(e,n),(e=e.alternate)&&Fh(e,n)}function Xh(e){if(e.tag===13){var n=wl(e,67108864);n!==null&&Ln(n,e,67108864),_0(e,67108864)}}var gu=!0;function JK(e,n,a,o){var c=C.T;C.T=null;var d=V.p;try{V.p=2,z0(e,n,a,o)}finally{V.p=d,C.T=c}}function eg(e,n,a,o){var c=C.T;C.T=null;var d=V.p;try{V.p=8,z0(e,n,a,o)}finally{V.p=d,C.T=c}}function z0(e,n,a,o){if(gu){var c=L0(o);if(c===null)x0(e,n,o,vu,a),Qh(e,o);else if(ng(c,e,n,a,o))o.stopPropagation();else if(Qh(e,o),n&4&&-1<tg.indexOf(e)){for(;c!==null;){var d=hl(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var g=he(d.pendingLanes);if(g!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var N=1<<31-st(g);b.entanglements[1]|=N,g&=~N}br(d),(tt&6)===0&&(tu=_e()+500,ao(0))}}break;case 13:b=wl(d,2),b!==null&&Ln(b,d,2),ru(),_0(d,2)}if(d=L0(o),d===null&&x0(e,n,o,vu,a),d===c)break;c=d}c!==null&&o.stopPropagation()}else x0(e,n,o,null,a)}}function L0(e){return e=jc(e),U0(e)}var vu=null;function U0(e){if(vu=null,e=pl(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return vu=e,null}function Zh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ge()){case St:return 2;case Xe:return 8;case je:case me:return 32;case $t:return 268435456;default:return 32}default:return 32}}var k0=!1,xa=null,Ta=null,Ea=null,po=new Map,ho=new Map,Ca=[],tg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qh(e,n){switch(e){case"focusin":case"focusout":xa=null;break;case"dragenter":case"dragleave":Ta=null;break;case"mouseover":case"mouseout":Ea=null;break;case"pointerover":case"pointerout":po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(n.pointerId)}}function mo(e,n,a,o,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},n!==null&&(n=hl(n),n!==null&&Xh(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function ng(e,n,a,o,c){switch(n){case"focusin":return xa=mo(xa,e,n,a,o,c),!0;case"dragenter":return Ta=mo(Ta,e,n,a,o,c),!0;case"mouseover":return Ea=mo(Ea,e,n,a,o,c),!0;case"pointerover":var d=c.pointerId;return po.set(d,mo(po.get(d)||null,e,n,a,o,c)),!0;case"gotpointercapture":return d=c.pointerId,ho.set(d,mo(ho.get(d)||null,e,n,a,o,c)),!0}return!1}function Ih(e){var n=pl(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,de(e.priority,function(){if(a.tag===13){var o=zn();o=za(o);var c=wl(a,o);c!==null&&Ln(c,a,o),_0(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=L0(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Hc=o,a.target.dispatchEvent(o),Hc=null}else return n=hl(a),n!==null&&Xh(n),e.blockedOn=a,!1;n.shift()}return!0}function Wh(e,n,a){yu(e)&&a.delete(n)}function rg(){k0=!1,xa!==null&&yu(xa)&&(xa=null),Ta!==null&&yu(Ta)&&(Ta=null),Ea!==null&&yu(Ea)&&(Ea=null),po.forEach(Wh),ho.forEach(Wh)}function bu(e,n){e.blockedOn===n&&(e.blockedOn=null,k0||(k0=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,rg)))}var Su=null;function Jh(e){Su!==e&&(Su=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Su===e&&(Su=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(U0(o||a)===null)continue;break}var d=hl(a);d!==null&&(e.splice(n,3),n-=3,Uf(d,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Ko(e){function n(N){return bu(N,e)}xa!==null&&bu(xa,e),Ta!==null&&bu(Ta,e),Ea!==null&&bu(Ea,e),po.forEach(n),ho.forEach(n);for(var a=0;a<Ca.length;a++){var o=Ca[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)Ih(a),a.blockedOn===null&&Ca.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],d=a[o+1],g=c[Oe]||null;if(typeof d=="function")g||Jh(a);else if(g){var b=null;if(d&&d.hasAttribute("formAction")){if(c=d,g=d[Oe]||null)b=g.formAction;else if(U0(c)!==null)continue}else b=g.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),Jh(a)}}}function H0(e){this._internalRoot=e}xu.prototype.render=H0.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(i(409));var a=n.current,o=zn();Gh(a,o,e,n,null,null)},xu.prototype.unmount=H0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Gh(e.current,2,null,e,null,null),ru(),n[ht]=null}};function xu(e){this._internalRoot=e}xu.prototype.unstable_scheduleHydration=function(e){if(e){var n=On();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ca.length&&n!==0&&n<Ca[a].priority;a++);Ca.splice(a,0,e),a===0&&Ih(e)}};var e3=r.version;if(e3!=="19.1.1")throw Error(i(527,e3,"19.1.1"));V.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=m(n),e=e!==null?h(e):null,e=e===null?null:e.stateNode,e};var ag={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tu.isDisabled&&Tu.supportsFiber)try{Zt=Tu.inject(ag),ot=Tu}catch{}}return vo.createRoot=function(e,n){if(!s(e))throw Error(i(299));var a=!1,o="",c=K2,d=g2,g=v2,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=Yh(e,1,!1,null,null,a,o,c,d,g,b,null),e[ht]=n.current,S0(e),new H0(n)},vo.hydrateRoot=function(e,n,a){if(!s(e))throw Error(i(299));var o=!1,c="",d=K2,g=g2,b=v2,N=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=Yh(e,1,!0,n,a??null,o,c,d,g,b,N,$),n.context=Vh(null),a=n.current,o=zn(),o=za(o),c=sa(o),c.callback=null,ua(a,c,o),a=o,n.current.lanes=a,sr(n,a),br(n),e[ht]=n.current,S0(e),new xu(n)},vo.version="19.1.1",vo}var c3;function hg(){if(c3)return P0.exports;c3=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),P0.exports=pg(),P0.exports}var mg=hg();const jo={black:"#000",white:"#fff"},Il={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},Wl={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},Jl={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},ei={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},ti={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"},yo={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},Kg={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function ra(t,...r){const l=new URL(`https://mui.com/production-error/?code=${t}`);return r.forEach(i=>l.searchParams.append("args[]",i)),`Minified MUI error #${t}; visit ${l} for the full message.`}const lc="$$material";function Pu(){return Pu=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var i in l)({}).hasOwnProperty.call(l,i)&&(t[i]=l[i])}return t},Pu.apply(null,arguments)}function gg(t){if(t.sheet)return t.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===t)return document.styleSheets[r]}function vg(t){var r=document.createElement("style");return r.setAttribute("data-emotion",t.key),t.nonce!==void 0&&r.setAttribute("nonce",t.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var yg=(function(){function t(l){var i=this;this._insertTag=function(s){var u;i.tags.length===0?i.insertionPoint?u=i.insertionPoint.nextSibling:i.prepend?u=i.container.firstChild:u=i.before:u=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(s,u),i.tags.push(s)},this.isSpeedy=l.speedy===void 0?!0:l.speedy,this.tags=[],this.ctr=0,this.nonce=l.nonce,this.key=l.key,this.container=l.container,this.prepend=l.prepend,this.insertionPoint=l.insertionPoint,this.before=null}var r=t.prototype;return r.hydrate=function(i){i.forEach(this._insertTag)},r.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(vg(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var u=gg(s);try{u.insertRule(i,u.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(i));this.ctr++},r.flush=function(){this.tags.forEach(function(i){var s;return(s=i.parentNode)==null?void 0:s.removeChild(i)}),this.tags=[],this.ctr=0},t})(),hn="-ms-",qu="-moz-",Ie="-webkit-",Bm="comm",Ld="rule",Ud="decl",bg="@import",_m="@keyframes",Sg="@layer",xg=Math.abs,ic=String.fromCharCode,Tg=Object.assign;function Eg(t,r){return on(t,0)^45?(((r<<2^on(t,0))<<2^on(t,1))<<2^on(t,2))<<2^on(t,3):0}function zm(t){return t.trim()}function Cg(t,r){return(t=r.exec(t))?t[0]:t}function We(t,r,l){return t.replace(r,l)}function sd(t,r){return t.indexOf(r)}function on(t,r){return t.charCodeAt(r)|0}function $o(t,r,l){return t.slice(r,l)}function wr(t){return t.length}function kd(t){return t.length}function Eu(t,r){return r.push(t),t}function wg(t,r){return t.map(r).join("")}var oc=1,ui=1,Lm=0,wn=0,Yt=0,gi="";function sc(t,r,l,i,s,u,f){return{value:t,root:r,parent:l,type:i,props:s,children:u,line:oc,column:ui,length:f,return:""}}function bo(t,r){return Tg(sc("",null,null,"",null,null,0),t,{length:-t.length},r)}function Rg(){return Yt}function Ag(){return Yt=wn>0?on(gi,--wn):0,ui--,Yt===10&&(ui=1,oc--),Yt}function jn(){return Yt=wn<Lm?on(gi,wn++):0,ui++,Yt===10&&(ui=1,oc++),Yt}function Mr(){return on(gi,wn)}function zu(){return wn}function ns(t,r){return $o(gi,t,r)}function Po(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Um(t){return oc=ui=1,Lm=wr(gi=t),wn=0,[]}function km(t){return gi="",t}function Lu(t){return zm(ns(wn-1,ud(t===91?t+2:t===40?t+1:t)))}function Og(t){for(;(Yt=Mr())&&Yt<33;)jn();return Po(t)>2||Po(Yt)>3?"":" "}function Mg(t,r){for(;--r&&jn()&&!(Yt<48||Yt>102||Yt>57&&Yt<65||Yt>70&&Yt<97););return ns(t,zu()+(r<6&&Mr()==32&&jn()==32))}function ud(t){for(;jn();)switch(Yt){case t:return wn;case 34:case 39:t!==34&&t!==39&&ud(Yt);break;case 40:t===41&&ud(t);break;case 92:jn();break}return wn}function Dg(t,r){for(;jn()&&t+Yt!==57;)if(t+Yt===84&&Mr()===47)break;return"/*"+ns(r,wn-1)+"*"+ic(t===47?t:jn())}function Ng(t){for(;!Po(Mr());)jn();return ns(t,wn)}function Bg(t){return km(Uu("",null,null,null,[""],t=Um(t),0,[0],t))}function Uu(t,r,l,i,s,u,f,p,m){for(var h=0,K=0,v=f,y=0,x=0,E=0,T=1,M=1,_=1,L=0,O="",w=s,A=u,B=i,k=O;M;)switch(E=L,L=jn()){case 40:if(E!=108&&on(k,v-1)==58){sd(k+=We(Lu(L),"&","&\f"),"&\f")!=-1&&(_=-1);break}case 34:case 39:case 91:k+=Lu(L);break;case 9:case 10:case 13:case 32:k+=Og(E);break;case 92:k+=Mg(zu()-1,7);continue;case 47:switch(Mr()){case 42:case 47:Eu(_g(Dg(jn(),zu()),r,l),m);break;default:k+="/"}break;case 123*T:p[h++]=wr(k)*_;case 125*T:case 59:case 0:switch(L){case 0:case 125:M=0;case 59+K:_==-1&&(k=We(k,/\f/g,"")),x>0&&wr(k)-v&&Eu(x>32?d3(k+";",i,l,v-1):d3(We(k," ","")+";",i,l,v-2),m);break;case 59:k+=";";default:if(Eu(B=f3(k,r,l,h,K,s,p,O,w=[],A=[],v),u),L===123)if(K===0)Uu(k,r,B,B,w,u,v,p,A);else switch(y===99&&on(k,3)===110?100:y){case 100:case 108:case 109:case 115:Uu(t,B,B,i&&Eu(f3(t,B,B,0,0,s,p,O,s,w=[],v),A),s,A,v,p,i?w:A);break;default:Uu(k,B,B,B,[""],A,0,p,A)}}h=K=x=0,T=_=1,O=k="",v=f;break;case 58:v=1+wr(k),x=E;default:if(T<1){if(L==123)--T;else if(L==125&&T++==0&&Ag()==125)continue}switch(k+=ic(L),L*T){case 38:_=K>0?1:(k+="\f",-1);break;case 44:p[h++]=(wr(k)-1)*_,_=1;break;case 64:Mr()===45&&(k+=Lu(jn())),y=Mr(),K=v=wr(O=k+=Ng(zu())),L++;break;case 45:E===45&&wr(k)==2&&(T=0)}}return u}function f3(t,r,l,i,s,u,f,p,m,h,K){for(var v=s-1,y=s===0?u:[""],x=kd(y),E=0,T=0,M=0;E<i;++E)for(var _=0,L=$o(t,v+1,v=xg(T=f[E])),O=t;_<x;++_)(O=zm(T>0?y[_]+" "+L:We(L,/&\f/g,y[_])))&&(m[M++]=O);return sc(t,r,l,s===0?Ld:p,m,h,K)}function _g(t,r,l){return sc(t,r,l,Bm,ic(Rg()),$o(t,2,-2),0)}function d3(t,r,l,i){return sc(t,r,l,Ud,$o(t,0,i),$o(t,i+1,-1),i)}function ii(t,r){for(var l="",i=kd(t),s=0;s<i;s++)l+=r(t[s],s,t,r)||"";return l}function zg(t,r,l,i){switch(t.type){case Sg:if(t.children.length)break;case bg:case Ud:return t.return=t.return||t.value;case Bm:return"";case _m:return t.return=t.value+"{"+ii(t.children,i)+"}";case Ld:t.value=t.props.join(",")}return wr(l=ii(t.children,i))?t.return=t.value+"{"+l+"}":""}function Lg(t){var r=kd(t);return function(l,i,s,u){for(var f="",p=0;p<r;p++)f+=t[p](l,i,s,u)||"";return f}}function Ug(t){return function(r){r.root||(r=r.return)&&t(r)}}function Hm(t){var r=Object.create(null);return function(l){return r[l]===void 0&&(r[l]=t(l)),r[l]}}var kg=function(r,l,i){for(var s=0,u=0;s=u,u=Mr(),s===38&&u===12&&(l[i]=1),!Po(u);)jn();return ns(r,wn)},Hg=function(r,l){var i=-1,s=44;do switch(Po(s)){case 0:s===38&&Mr()===12&&(l[i]=1),r[i]+=kg(wn-1,l,i);break;case 2:r[i]+=Lu(s);break;case 4:if(s===44){r[++i]=Mr()===58?"&\f":"",l[i]=r[i].length;break}default:r[i]+=ic(s)}while(s=jn());return r},jg=function(r,l){return km(Hg(Um(r),l))},p3=new WeakMap,$g=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var l=r.value,i=r.parent,s=r.column===i.column&&r.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(r.props.length===1&&l.charCodeAt(0)!==58&&!p3.get(i))&&!s){p3.set(r,!0);for(var u=[],f=jg(l,u),p=i.props,m=0,h=0;m<f.length;m++)for(var K=0;K<p.length;K++,h++)r.props[h]=u[m]?f[m].replace(/&\f/g,p[K]):p[K]+" "+f[m]}}},Pg=function(r){if(r.type==="decl"){var l=r.value;l.charCodeAt(0)===108&&l.charCodeAt(2)===98&&(r.return="",r.value="")}};function jm(t,r){switch(Eg(t,r)){case 5103:return Ie+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ie+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ie+t+qu+t+hn+t+t;case 6828:case 4268:return Ie+t+hn+t+t;case 6165:return Ie+t+hn+"flex-"+t+t;case 5187:return Ie+t+We(t,/(\w+).+(:[^]+)/,Ie+"box-$1$2"+hn+"flex-$1$2")+t;case 5443:return Ie+t+hn+"flex-item-"+We(t,/flex-|-self/,"")+t;case 4675:return Ie+t+hn+"flex-line-pack"+We(t,/align-content|flex-|-self/,"")+t;case 5548:return Ie+t+hn+We(t,"shrink","negative")+t;case 5292:return Ie+t+hn+We(t,"basis","preferred-size")+t;case 6060:return Ie+"box-"+We(t,"-grow","")+Ie+t+hn+We(t,"grow","positive")+t;case 4554:return Ie+We(t,/([^-])(transform)/g,"$1"+Ie+"$2")+t;case 6187:return We(We(We(t,/(zoom-|grab)/,Ie+"$1"),/(image-set)/,Ie+"$1"),t,"")+t;case 5495:case 3959:return We(t,/(image-set\([^]*)/,Ie+"$1$`$1");case 4968:return We(We(t,/(.+:)(flex-)?(.*)/,Ie+"box-pack:$3"+hn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ie+t+t;case 4095:case 3583:case 4068:case 2532:return We(t,/(.+)-inline(.+)/,Ie+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(wr(t)-1-r>6)switch(on(t,r+1)){case 109:if(on(t,r+4)!==45)break;case 102:return We(t,/(.+:)(.+)-([^]+)/,"$1"+Ie+"$2-$3$1"+qu+(on(t,r+3)==108?"$3":"$2-$3"))+t;case 115:return~sd(t,"stretch")?jm(We(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(on(t,r+1)!==115)break;case 6444:switch(on(t,wr(t)-3-(~sd(t,"!important")&&10))){case 107:return We(t,":",":"+Ie)+t;case 101:return We(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Ie+(on(t,14)===45?"inline-":"")+"box$3$1"+Ie+"$2$3$1"+hn+"$2box$3")+t}break;case 5936:switch(on(t,r+11)){case 114:return Ie+t+hn+We(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ie+t+hn+We(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ie+t+hn+We(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Ie+t+hn+t+t}return t}var qg=function(r,l,i,s){if(r.length>-1&&!r.return)switch(r.type){case Ud:r.return=jm(r.value,r.length);break;case _m:return ii([bo(r,{value:We(r.value,"@","@"+Ie)})],s);case Ld:if(r.length)return wg(r.props,function(u){switch(Cg(u,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ii([bo(r,{props:[We(u,/:(read-\w+)/,":"+qu+"$1")]})],s);case"::placeholder":return ii([bo(r,{props:[We(u,/:(plac\w+)/,":"+Ie+"input-$1")]}),bo(r,{props:[We(u,/:(plac\w+)/,":"+qu+"$1")]}),bo(r,{props:[We(u,/:(plac\w+)/,hn+"input-$1")]})],s)}return""})}},Yg=[qg],Vg=function(r){var l=r.key;if(l==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(T){var M=T.getAttribute("data-emotion");M.indexOf(" ")!==-1&&(document.head.appendChild(T),T.setAttribute("data-s",""))})}var s=r.stylisPlugins||Yg,u={},f,p=[];f=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+l+' "]'),function(T){for(var M=T.getAttribute("data-emotion").split(" "),_=1;_<M.length;_++)u[M[_]]=!0;p.push(T)});var m,h=[$g,Pg];{var K,v=[zg,Ug(function(T){K.insert(T)})],y=Lg(h.concat(s,v)),x=function(M){return ii(Bg(M),y)};m=function(M,_,L,O){K=L,x(M?M+"{"+_.styles+"}":_.styles),O&&(E.inserted[_.name]=!0)}}var E={key:l,sheet:new yg({key:l,container:f,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:u,registered:{},insert:m};return E.sheet.hydrate(p),E},G0={exports:{}},et={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h3;function Gg(){if(h3)return et;h3=1;var t=typeof Symbol=="function"&&Symbol.for,r=t?Symbol.for("react.element"):60103,l=t?Symbol.for("react.portal"):60106,i=t?Symbol.for("react.fragment"):60107,s=t?Symbol.for("react.strict_mode"):60108,u=t?Symbol.for("react.profiler"):60114,f=t?Symbol.for("react.provider"):60109,p=t?Symbol.for("react.context"):60110,m=t?Symbol.for("react.async_mode"):60111,h=t?Symbol.for("react.concurrent_mode"):60111,K=t?Symbol.for("react.forward_ref"):60112,v=t?Symbol.for("react.suspense"):60113,y=t?Symbol.for("react.suspense_list"):60120,x=t?Symbol.for("react.memo"):60115,E=t?Symbol.for("react.lazy"):60116,T=t?Symbol.for("react.block"):60121,M=t?Symbol.for("react.fundamental"):60117,_=t?Symbol.for("react.responder"):60118,L=t?Symbol.for("react.scope"):60119;function O(A){if(typeof A=="object"&&A!==null){var B=A.$$typeof;switch(B){case r:switch(A=A.type,A){case m:case h:case i:case u:case s:case v:return A;default:switch(A=A&&A.$$typeof,A){case p:case K:case E:case x:case f:return A;default:return B}}case l:return B}}}function w(A){return O(A)===h}return et.AsyncMode=m,et.ConcurrentMode=h,et.ContextConsumer=p,et.ContextProvider=f,et.Element=r,et.ForwardRef=K,et.Fragment=i,et.Lazy=E,et.Memo=x,et.Portal=l,et.Profiler=u,et.StrictMode=s,et.Suspense=v,et.isAsyncMode=function(A){return w(A)||O(A)===m},et.isConcurrentMode=w,et.isContextConsumer=function(A){return O(A)===p},et.isContextProvider=function(A){return O(A)===f},et.isElement=function(A){return typeof A=="object"&&A!==null&&A.$$typeof===r},et.isForwardRef=function(A){return O(A)===K},et.isFragment=function(A){return O(A)===i},et.isLazy=function(A){return O(A)===E},et.isMemo=function(A){return O(A)===x},et.isPortal=function(A){return O(A)===l},et.isProfiler=function(A){return O(A)===u},et.isStrictMode=function(A){return O(A)===s},et.isSuspense=function(A){return O(A)===v},et.isValidElementType=function(A){return typeof A=="string"||typeof A=="function"||A===i||A===h||A===u||A===s||A===v||A===y||typeof A=="object"&&A!==null&&(A.$$typeof===E||A.$$typeof===x||A.$$typeof===f||A.$$typeof===p||A.$$typeof===K||A.$$typeof===M||A.$$typeof===_||A.$$typeof===L||A.$$typeof===T)},et.typeOf=O,et}var m3;function Fg(){return m3||(m3=1,G0.exports=Gg()),G0.exports}var F0,K3;function Xg(){if(K3)return F0;K3=1;var t=Fg(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};u[t.ForwardRef]=i,u[t.Memo]=s;function f(E){return t.isMemo(E)?s:u[E.$$typeof]||r}var p=Object.defineProperty,m=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,K=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,y=Object.prototype;function x(E,T,M){if(typeof T!="string"){if(y){var _=v(T);_&&_!==y&&x(E,_,M)}var L=m(T);h&&(L=L.concat(h(T)));for(var O=f(E),w=f(T),A=0;A<L.length;++A){var B=L[A];if(!l[B]&&!(M&&M[B])&&!(w&&w[B])&&!(O&&O[B])){var k=K(T,B);try{p(E,B,k)}catch{}}}}return E}return F0=x,F0}Xg();var Zg=!0;function $m(t,r,l){var i="";return l.split(" ").forEach(function(s){t[s]!==void 0?r.push(t[s]+";"):s&&(i+=s+" ")}),i}var Hd=function(r,l,i){var s=r.key+"-"+l.name;(i===!1||Zg===!1)&&r.registered[s]===void 0&&(r.registered[s]=l.styles)},jd=function(r,l,i){Hd(r,l,i);var s=r.key+"-"+l.name;if(r.inserted[l.name]===void 0){var u=l;do r.insert(l===u?"."+s:"",u,r.sheet,!0),u=u.next;while(u!==void 0)}};function Qg(t){for(var r=0,l,i=0,s=t.length;s>=4;++i,s-=4)l=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,l=(l&65535)*1540483477+((l>>>16)*59797<<16),l^=l>>>24,r=(l&65535)*1540483477+((l>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(s){case 3:r^=(t.charCodeAt(i+2)&255)<<16;case 2:r^=(t.charCodeAt(i+1)&255)<<8;case 1:r^=t.charCodeAt(i)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var Ig={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Wg=/[A-Z]|^ms/g,Jg=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Pm=function(r){return r.charCodeAt(1)===45},g3=function(r){return r!=null&&typeof r!="boolean"},X0=Hm(function(t){return Pm(t)?t:t.replace(Wg,"-$&").toLowerCase()}),v3=function(r,l){switch(r){case"animation":case"animationName":if(typeof l=="string")return l.replace(Jg,function(i,s,u){return Rr={name:s,styles:u,next:Rr},s})}return Ig[r]!==1&&!Pm(r)&&typeof l=="number"&&l!==0?l+"px":l};function qo(t,r,l){if(l==null)return"";var i=l;if(i.__emotion_styles!==void 0)return i;switch(typeof l){case"boolean":return"";case"object":{var s=l;if(s.anim===1)return Rr={name:s.name,styles:s.styles,next:Rr},s.name;var u=l;if(u.styles!==void 0){var f=u.next;if(f!==void 0)for(;f!==void 0;)Rr={name:f.name,styles:f.styles,next:Rr},f=f.next;var p=u.styles+";";return p}return e6(t,r,l)}case"function":{if(t!==void 0){var m=Rr,h=l(t);return Rr=m,qo(t,r,h)}break}}var K=l;if(r==null)return K;var v=r[K];return v!==void 0?v:K}function e6(t,r,l){var i="";if(Array.isArray(l))for(var s=0;s<l.length;s++)i+=qo(t,r,l[s])+";";else for(var u in l){var f=l[u];if(typeof f!="object"){var p=f;r!=null&&r[p]!==void 0?i+=u+"{"+r[p]+"}":g3(p)&&(i+=X0(u)+":"+v3(u,p)+";")}else if(Array.isArray(f)&&typeof f[0]=="string"&&(r==null||r[f[0]]===void 0))for(var m=0;m<f.length;m++)g3(f[m])&&(i+=X0(u)+":"+v3(u,f[m])+";");else{var h=qo(t,r,f);switch(u){case"animation":case"animationName":{i+=X0(u)+":"+h+";";break}default:i+=u+"{"+h+"}"}}}return i}var y3=/label:\s*([^\s;{]+)\s*(;|$)/g,Rr;function rs(t,r,l){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,s="";Rr=void 0;var u=t[0];if(u==null||u.raw===void 0)i=!1,s+=qo(l,r,u);else{var f=u;s+=f[0]}for(var p=1;p<t.length;p++)if(s+=qo(l,r,t[p]),i){var m=u;s+=m[p]}y3.lastIndex=0;for(var h="",K;(K=y3.exec(s))!==null;)h+="-"+K[1];var v=Qg(s)+h;return{name:v,styles:s,next:Rr}}var t6=function(r){return r()},qm=od.useInsertionEffect?od.useInsertionEffect:!1,Ym=qm||t6,b3=qm||R.useLayoutEffect,Vm=R.createContext(typeof HTMLElement<"u"?Vg({key:"css"}):null);Vm.Provider;var $d=function(r){return R.forwardRef(function(l,i){var s=R.useContext(Vm);return r(l,s,i)})},uc=R.createContext({}),Pd={}.hasOwnProperty,cd="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",n6=function(r,l){var i={};for(var s in l)Pd.call(l,s)&&(i[s]=l[s]);return i[cd]=r,i},r6=function(r){var l=r.cache,i=r.serialized,s=r.isStringTag;return Hd(l,i,s),Ym(function(){return jd(l,i,s)}),null},a6=$d(function(t,r,l){var i=t.css;typeof i=="string"&&r.registered[i]!==void 0&&(i=r.registered[i]);var s=t[cd],u=[i],f="";typeof t.className=="string"?f=$m(r.registered,u,t.className):t.className!=null&&(f=t.className+" ");var p=rs(u,void 0,R.useContext(uc));f+=r.key+"-"+p.name;var m={};for(var h in t)Pd.call(t,h)&&h!=="css"&&h!==cd&&(m[h]=t[h]);return m.className=f,l&&(m.ref=l),R.createElement(R.Fragment,null,R.createElement(r6,{cache:r,serialized:p,isStringTag:typeof s=="string"}),R.createElement(s,m))}),l6=a6,S3=function(r,l){var i=arguments;if(l==null||!Pd.call(l,"css"))return R.createElement.apply(void 0,i);var s=i.length,u=new Array(s);u[0]=l6,u[1]=n6(r,l);for(var f=2;f<s;f++)u[f]=i[f];return R.createElement.apply(null,u)};(function(t){var r;r||(r=t.JSX||(t.JSX={}))})(S3||(S3={}));var i6=$d(function(t,r){var l=t.styles,i=rs([l],void 0,R.useContext(uc)),s=R.useRef();return b3(function(){var u=r.key+"-global",f=new r.sheet.constructor({key:u,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy}),p=!1,m=document.querySelector('style[data-emotion="'+u+" "+i.name+'"]');return r.sheet.tags.length&&(f.before=r.sheet.tags[0]),m!==null&&(p=!0,m.setAttribute("data-emotion",u),f.hydrate([m])),s.current=[f,p],function(){f.flush()}},[r]),b3(function(){var u=s.current,f=u[0],p=u[1];if(p){u[1]=!1;return}if(i.next!==void 0&&jd(r,i.next,!0),f.tags.length){var m=f.tags[f.tags.length-1].nextElementSibling;f.before=m,f.flush()}r.insert("",i,f,!1)},[r,i.name]),null});function o6(){for(var t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];return rs(r)}function qd(){var t=o6.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var s6=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,u6=Hm(function(t){return s6.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),c6=u6,f6=function(r){return r!=="theme"},x3=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?c6:f6},T3=function(r,l,i){var s;if(l){var u=l.shouldForwardProp;s=r.__emotion_forwardProp&&u?function(f){return r.__emotion_forwardProp(f)&&u(f)}:u}return typeof s!="function"&&i&&(s=r.__emotion_forwardProp),s},d6=function(r){var l=r.cache,i=r.serialized,s=r.isStringTag;return Hd(l,i,s),Ym(function(){return jd(l,i,s)}),null},p6=function t(r,l){var i=r.__emotion_real===r,s=i&&r.__emotion_base||r,u,f;l!==void 0&&(u=l.label,f=l.target);var p=T3(r,l,i),m=p||x3(s),h=!m("as");return function(){var K=arguments,v=i&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(u!==void 0&&v.push("label:"+u+";"),K[0]==null||K[0].raw===void 0)v.push.apply(v,K);else{var y=K[0];v.push(y[0]);for(var x=K.length,E=1;E<x;E++)v.push(K[E],y[E])}var T=$d(function(M,_,L){var O=h&&M.as||s,w="",A=[],B=M;if(M.theme==null){B={};for(var k in M)B[k]=M[k];B.theme=R.useContext(uc)}typeof M.className=="string"?w=$m(_.registered,A,M.className):M.className!=null&&(w=M.className+" ");var Z=rs(v.concat(A),_.registered,B);w+=_.key+"-"+Z.name,f!==void 0&&(w+=" "+f);var W=h&&p===void 0?x3(O):m,ee={};for(var I in M)h&&I==="as"||W(I)&&(ee[I]=M[I]);return ee.className=w,L&&(ee.ref=L),R.createElement(R.Fragment,null,R.createElement(d6,{cache:_,serialized:Z,isStringTag:typeof O=="string"}),R.createElement(O,ee))});return T.displayName=u!==void 0?u:"Styled("+(typeof s=="string"?s:s.displayName||s.name||"Component")+")",T.defaultProps=r.defaultProps,T.__emotion_real=T,T.__emotion_base=s,T.__emotion_styles=v,T.__emotion_forwardProp=p,Object.defineProperty(T,"toString",{value:function(){return"."+f}}),T.withComponent=function(M,_){var L=t(M,Pu({},l,_,{shouldForwardProp:T3(T,_,!0)}));return L.apply(void 0,v)},T}},h6=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],fd=p6.bind(null);h6.forEach(function(t){fd[t]=fd(t)});function m6(t){return t==null||Object.keys(t).length===0}function K6(t){const{styles:r,defaultTheme:l={}}=t,i=typeof r=="function"?s=>r(m6(s)?l:s):r;return q.jsx(i6,{styles:i})}function Gm(t,r){return fd(t,r)}function g6(t,r){Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=r(t.__emotion_styles))}const E3=[];function Oa(t){return E3[0]=t,rs(E3)}var Z0={exports:{}},dt={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C3;function v6(){if(C3)return dt;C3=1;var t=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.for("react.view_transition"),x=Symbol.for("react.client.reference");function E(T){if(typeof T=="object"&&T!==null){var M=T.$$typeof;switch(M){case t:switch(T=T.type,T){case l:case s:case i:case m:case h:case y:return T;default:switch(T=T&&T.$$typeof,T){case f:case p:case v:case K:return T;case u:return T;default:return M}}case r:return M}}}return dt.ContextConsumer=u,dt.ContextProvider=f,dt.Element=t,dt.ForwardRef=p,dt.Fragment=l,dt.Lazy=v,dt.Memo=K,dt.Portal=r,dt.Profiler=s,dt.StrictMode=i,dt.Suspense=m,dt.SuspenseList=h,dt.isContextConsumer=function(T){return E(T)===u},dt.isContextProvider=function(T){return E(T)===f},dt.isElement=function(T){return typeof T=="object"&&T!==null&&T.$$typeof===t},dt.isForwardRef=function(T){return E(T)===p},dt.isFragment=function(T){return E(T)===l},dt.isLazy=function(T){return E(T)===v},dt.isMemo=function(T){return E(T)===K},dt.isPortal=function(T){return E(T)===r},dt.isProfiler=function(T){return E(T)===s},dt.isStrictMode=function(T){return E(T)===i},dt.isSuspense=function(T){return E(T)===m},dt.isSuspenseList=function(T){return E(T)===h},dt.isValidElementType=function(T){return typeof T=="string"||typeof T=="function"||T===l||T===s||T===i||T===m||T===h||typeof T=="object"&&T!==null&&(T.$$typeof===v||T.$$typeof===K||T.$$typeof===f||T.$$typeof===u||T.$$typeof===p||T.$$typeof===x||T.getModuleId!==void 0)},dt.typeOf=E,dt}var w3;function y6(){return w3||(w3=1,Z0.exports=v6()),Z0.exports}var Fm=y6();function Ar(t){if(typeof t!="object"||t===null)return!1;const r=Object.getPrototypeOf(t);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function Xm(t){if(R.isValidElement(t)||Fm.isValidElementType(t)||!Ar(t))return t;const r={};return Object.keys(t).forEach(l=>{r[l]=Xm(t[l])}),r}function en(t,r,l={clone:!0}){const i=l.clone?{...t}:t;return Ar(t)&&Ar(r)&&Object.keys(r).forEach(s=>{R.isValidElement(r[s])||Fm.isValidElementType(r[s])?i[s]=r[s]:Ar(r[s])&&Object.prototype.hasOwnProperty.call(t,s)&&Ar(t[s])?i[s]=en(t[s],r[s],l):l.clone?i[s]=Ar(r[s])?Xm(r[s]):r[s]:i[s]=r[s]}),i}const b6=t=>{const r=Object.keys(t).map(l=>({key:l,val:t[l]}))||[];return r.sort((l,i)=>l.val-i.val),r.reduce((l,i)=>({...l,[i.key]:i.val}),{})};function S6(t){const{values:r={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:l="px",step:i=5,...s}=t,u=b6(r),f=Object.keys(u);function p(y){return`@media (min-width:${typeof r[y]=="number"?r[y]:y}${l})`}function m(y){return`@media (max-width:${(typeof r[y]=="number"?r[y]:y)-i/100}${l})`}function h(y,x){const E=f.indexOf(x);return`@media (min-width:${typeof r[y]=="number"?r[y]:y}${l}) and (max-width:${(E!==-1&&typeof r[f[E]]=="number"?r[f[E]]:x)-i/100}${l})`}function K(y){return f.indexOf(y)+1<f.length?h(y,f[f.indexOf(y)+1]):p(y)}function v(y){const x=f.indexOf(y);return x===0?p(f[1]):x===f.length-1?m(f[x]):h(y,f[f.indexOf(y)+1]).replace("@media","@media not all and")}return{keys:f,values:u,up:p,down:m,between:h,only:K,not:v,unit:l,...s}}function R3(t,r){if(!t.containerQueries)return r;const l=Object.keys(r).filter(i=>i.startsWith("@container")).sort((i,s)=>{const u=/min-width:\s*([0-9.]+)/;return+(i.match(u)?.[1]||0)-+(s.match(u)?.[1]||0)});return l.length?l.reduce((i,s)=>{const u=r[s];return delete i[s],i[s]=u,i},{...r}):r}function x6(t,r){return r==="@"||r.startsWith("@")&&(t.some(l=>r.startsWith(`@${l}`))||!!r.match(/^@\d/))}function T6(t,r){const l=r.match(/^@([^/]+)?\/?(.+)?$/);if(!l)return null;const[,i,s]=l,u=Number.isNaN(+i)?i||0:+i;return t.containerQueries(s).up(u)}function E6(t){const r=(u,f)=>u.replace("@media",f?`@container ${f}`:"@container");function l(u,f){u.up=(...p)=>r(t.breakpoints.up(...p),f),u.down=(...p)=>r(t.breakpoints.down(...p),f),u.between=(...p)=>r(t.breakpoints.between(...p),f),u.only=(...p)=>r(t.breakpoints.only(...p),f),u.not=(...p)=>{const m=r(t.breakpoints.not(...p),f);return m.includes("not all and")?m.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):m}}const i={},s=u=>(l(i,u),i);return l(s),{...t,containerQueries:s}}const C6={borderRadius:4};function Do(t,r){return r?en(t,r,{clone:!1}):t}const cc={xs:0,sm:600,md:900,lg:1200,xl:1536},A3={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${cc[t]}px)`},w6={containerQueries:t=>({up:r=>{let l=typeof r=="number"?r:cc[r]||r;return typeof l=="number"&&(l=`${l}px`),t?`@container ${t} (min-width:${l})`:`@container (min-width:${l})`}})};function hr(t,r,l){const i=t.theme||{};if(Array.isArray(r)){const u=i.breakpoints||A3;return r.reduce((f,p,m)=>(f[u.up(u.keys[m])]=l(r[m]),f),{})}if(typeof r=="object"){const u=i.breakpoints||A3;return Object.keys(r).reduce((f,p)=>{if(x6(u.keys,p)){const m=T6(i.containerQueries?i:w6,p);m&&(f[m]=l(r[p],p))}else if(Object.keys(u.values||cc).includes(p)){const m=u.up(p);f[m]=l(r[p],p)}else{const m=p;f[m]=r[m]}return f},{})}return l(r)}function Zm(t={}){return t.keys?.reduce((l,i)=>{const s=t.up(i);return l[s]={},l},{})||{}}function dd(t,r){return t.reduce((l,i)=>{const s=l[i];return(!s||Object.keys(s).length===0)&&delete l[i],l},r)}function R6(t,...r){const l=Zm(t),i=[l,...r].reduce((s,u)=>en(s,u),{});return dd(Object.keys(l),i)}function A6(t,r){if(typeof t!="object")return{};const l={},i=Object.keys(r);return Array.isArray(t)?i.forEach((s,u)=>{u<t.length&&(l[s]=!0)}):i.forEach(s=>{t[s]!=null&&(l[s]=!0)}),l}function Q0({values:t,breakpoints:r,base:l}){const i=l||A6(t,r),s=Object.keys(i);if(s.length===0)return t;let u;return s.reduce((f,p,m)=>(Array.isArray(t)?(f[p]=t[m]!=null?t[m]:t[u],u=m):typeof t=="object"?(f[p]=t[p]!=null?t[p]:t[u],u=p):f[p]=t,f),{})}function gt(t){if(typeof t!="string")throw new Error(ra(7));return t.charAt(0).toUpperCase()+t.slice(1)}function fc(t,r,l=!0){if(!r||typeof r!="string")return null;if(t&&t.vars&&l){const i=`vars.${r}`.split(".").reduce((s,u)=>s&&s[u]?s[u]:null,t);if(i!=null)return i}return r.split(".").reduce((i,s)=>i&&i[s]!=null?i[s]:null,t)}function Yu(t,r,l,i=l){let s;return typeof t=="function"?s=t(l):Array.isArray(t)?s=t[l]||i:s=fc(t,l)||i,r&&(s=r(s,i,t)),s}function jt(t){const{prop:r,cssProperty:l=t.prop,themeKey:i,transform:s}=t,u=f=>{if(f[r]==null)return null;const p=f[r],m=f.theme,h=fc(m,i)||{};return hr(f,p,v=>{let y=Yu(h,s,v);return v===y&&typeof v=="string"&&(y=Yu(h,s,`${r}${v==="default"?"":gt(v)}`,v)),l===!1?y:{[l]:y}})};return u.propTypes={},u.filterProps=[r],u}function O6(t){const r={};return l=>(r[l]===void 0&&(r[l]=t(l)),r[l])}const M6={m:"margin",p:"padding"},D6={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},O3={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},N6=O6(t=>{if(t.length>2)if(O3[t])t=O3[t];else return[t];const[r,l]=t.split(""),i=M6[r],s=D6[l]||"";return Array.isArray(s)?s.map(u=>i+u):[i+s]}),Yd=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Vd=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Yd,...Vd];function as(t,r,l,i){const s=fc(t,r,!0)??l;return typeof s=="number"||typeof s=="string"?u=>typeof u=="string"?u:typeof s=="string"?s.startsWith("var(")&&u===0?0:s.startsWith("var(")&&u===1?s:`calc(${u} * ${s})`:s*u:Array.isArray(s)?u=>{if(typeof u=="string")return u;const f=Math.abs(u),p=s[f];return u>=0?p:typeof p=="number"?-p:typeof p=="string"&&p.startsWith("var(")?`calc(-1 * ${p})`:`-${p}`}:typeof s=="function"?s:()=>{}}function dc(t){return as(t,"spacing",8)}function ol(t,r){return typeof r=="string"||r==null?r:t(r)}function B6(t,r){return l=>t.reduce((i,s)=>(i[s]=ol(r,l),i),{})}function _6(t,r,l,i){if(!r.includes(l))return null;const s=N6(l),u=B6(s,i),f=t[l];return hr(t,f,u)}function Qm(t,r){const l=dc(t.theme);return Object.keys(t).map(i=>_6(t,r,i,l)).reduce(Do,{})}function zt(t){return Qm(t,Yd)}zt.propTypes={};zt.filterProps=Yd;function Lt(t){return Qm(t,Vd)}Lt.propTypes={};Lt.filterProps=Vd;function Im(t=8,r=dc({spacing:t})){if(t.mui)return t;const l=(...i)=>(i.length===0?[1]:i).map(u=>{const f=r(u);return typeof f=="number"?`${f}px`:f}).join(" ");return l.mui=!0,l}function pc(...t){const r=t.reduce((i,s)=>(s.filterProps.forEach(u=>{i[u]=s}),i),{}),l=i=>Object.keys(i).reduce((s,u)=>r[u]?Do(s,r[u](i)):s,{});return l.propTypes={},l.filterProps=t.reduce((i,s)=>i.concat(s.filterProps),[]),l}function nr(t){return typeof t!="number"?t:`${t}px solid`}function or(t,r){return jt({prop:t,themeKey:"borders",transform:r})}const z6=or("border",nr),L6=or("borderTop",nr),U6=or("borderRight",nr),k6=or("borderBottom",nr),H6=or("borderLeft",nr),j6=or("borderColor"),$6=or("borderTopColor"),P6=or("borderRightColor"),q6=or("borderBottomColor"),Y6=or("borderLeftColor"),V6=or("outline",nr),G6=or("outlineColor"),hc=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const r=as(t.theme,"shape.borderRadius",4),l=i=>({borderRadius:ol(r,i)});return hr(t,t.borderRadius,l)}return null};hc.propTypes={};hc.filterProps=["borderRadius"];pc(z6,L6,U6,k6,H6,j6,$6,P6,q6,Y6,hc,V6,G6);const mc=t=>{if(t.gap!==void 0&&t.gap!==null){const r=as(t.theme,"spacing",8),l=i=>({gap:ol(r,i)});return hr(t,t.gap,l)}return null};mc.propTypes={};mc.filterProps=["gap"];const Kc=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const r=as(t.theme,"spacing",8),l=i=>({columnGap:ol(r,i)});return hr(t,t.columnGap,l)}return null};Kc.propTypes={};Kc.filterProps=["columnGap"];const gc=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const r=as(t.theme,"spacing",8),l=i=>({rowGap:ol(r,i)});return hr(t,t.rowGap,l)}return null};gc.propTypes={};gc.filterProps=["rowGap"];const F6=jt({prop:"gridColumn"}),X6=jt({prop:"gridRow"}),Z6=jt({prop:"gridAutoFlow"}),Q6=jt({prop:"gridAutoColumns"}),I6=jt({prop:"gridAutoRows"}),W6=jt({prop:"gridTemplateColumns"}),J6=jt({prop:"gridTemplateRows"}),ev=jt({prop:"gridTemplateAreas"}),tv=jt({prop:"gridArea"});pc(mc,Kc,gc,F6,X6,Z6,Q6,I6,W6,J6,ev,tv);function oi(t,r){return r==="grey"?r:t}const nv=jt({prop:"color",themeKey:"palette",transform:oi}),rv=jt({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:oi}),av=jt({prop:"backgroundColor",themeKey:"palette",transform:oi});pc(nv,rv,av);function Hn(t){return t<=1&&t!==0?`${t*100}%`:t}const lv=jt({prop:"width",transform:Hn}),Gd=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const r=l=>{const i=t.theme?.breakpoints?.values?.[l]||cc[l];return i?t.theme?.breakpoints?.unit!=="px"?{maxWidth:`${i}${t.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:Hn(l)}};return hr(t,t.maxWidth,r)}return null};Gd.filterProps=["maxWidth"];const iv=jt({prop:"minWidth",transform:Hn}),ov=jt({prop:"height",transform:Hn}),sv=jt({prop:"maxHeight",transform:Hn}),uv=jt({prop:"minHeight",transform:Hn});jt({prop:"size",cssProperty:"width",transform:Hn});jt({prop:"size",cssProperty:"height",transform:Hn});const cv=jt({prop:"boxSizing"});pc(lv,Gd,iv,ov,sv,uv,cv);const ls={border:{themeKey:"borders",transform:nr},borderTop:{themeKey:"borders",transform:nr},borderRight:{themeKey:"borders",transform:nr},borderBottom:{themeKey:"borders",transform:nr},borderLeft:{themeKey:"borders",transform:nr},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:nr},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:hc},color:{themeKey:"palette",transform:oi},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:oi},backgroundColor:{themeKey:"palette",transform:oi},p:{style:Lt},pt:{style:Lt},pr:{style:Lt},pb:{style:Lt},pl:{style:Lt},px:{style:Lt},py:{style:Lt},padding:{style:Lt},paddingTop:{style:Lt},paddingRight:{style:Lt},paddingBottom:{style:Lt},paddingLeft:{style:Lt},paddingX:{style:Lt},paddingY:{style:Lt},paddingInline:{style:Lt},paddingInlineStart:{style:Lt},paddingInlineEnd:{style:Lt},paddingBlock:{style:Lt},paddingBlockStart:{style:Lt},paddingBlockEnd:{style:Lt},m:{style:zt},mt:{style:zt},mr:{style:zt},mb:{style:zt},ml:{style:zt},mx:{style:zt},my:{style:zt},margin:{style:zt},marginTop:{style:zt},marginRight:{style:zt},marginBottom:{style:zt},marginLeft:{style:zt},marginX:{style:zt},marginY:{style:zt},marginInline:{style:zt},marginInlineStart:{style:zt},marginInlineEnd:{style:zt},marginBlock:{style:zt},marginBlockStart:{style:zt},marginBlockEnd:{style:zt},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:mc},rowGap:{style:gc},columnGap:{style:Kc},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Hn},maxWidth:{style:Gd},minWidth:{transform:Hn},height:{transform:Hn},maxHeight:{transform:Hn},minHeight:{transform:Hn},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function fv(...t){const r=t.reduce((i,s)=>i.concat(Object.keys(s)),[]),l=new Set(r);return t.every(i=>l.size===Object.keys(i).length)}function dv(t,r){return typeof t=="function"?t(r):t}function pv(){function t(l,i,s,u){const f={[l]:i,theme:s},p=u[l];if(!p)return{[l]:i};const{cssProperty:m=l,themeKey:h,transform:K,style:v}=p;if(i==null)return null;if(h==="typography"&&i==="inherit")return{[l]:i};const y=fc(s,h)||{};return v?v(f):hr(f,i,E=>{let T=Yu(y,K,E);return E===T&&typeof E=="string"&&(T=Yu(y,K,`${l}${E==="default"?"":gt(E)}`,E)),m===!1?T:{[m]:T}})}function r(l){const{sx:i,theme:s={},nested:u}=l||{};if(!i)return null;const f=s.unstable_sxConfig??ls;function p(m){let h=m;if(typeof m=="function")h=m(s);else if(typeof m!="object")return m;if(!h)return null;const K=Zm(s.breakpoints),v=Object.keys(K);let y=K;return Object.keys(h).forEach(x=>{const E=dv(h[x],s);if(E!=null)if(typeof E=="object")if(f[x])y=Do(y,t(x,E,s,f));else{const T=hr({theme:s},E,M=>({[x]:M}));fv(T,E)?y[x]=r({sx:E,theme:s,nested:!0}):y=Do(y,T)}else y=Do(y,t(x,E,s,f))}),!u&&s.modularCssLayers?{"@layer sx":R3(s,dd(v,y))}:R3(s,dd(v,y))}return Array.isArray(i)?i.map(p):p(i)}return r}const sl=pv();sl.filterProps=["sx"];function hv(t,r){const l=this;if(l.vars){if(!l.colorSchemes?.[t]||typeof l.getColorSchemeSelector!="function")return{};let i=l.getColorSchemeSelector(t);return i==="&"?r:((i.includes("data-")||i.includes("."))&&(i=`*:where(${i.replace(/\s*&$/,"")}) &`),{[i]:r})}return l.palette.mode===t?r:{}}function vc(t={},...r){const{breakpoints:l={},palette:i={},spacing:s,shape:u={},...f}=t,p=S6(l),m=Im(s);let h=en({breakpoints:p,direction:"ltr",components:{},palette:{mode:"light",...i},spacing:m,shape:{...C6,...u}},f);return h=E6(h),h.applyStyles=hv,h=r.reduce((K,v)=>en(K,v),h),h.unstable_sxConfig={...ls,...f?.unstable_sxConfig},h.unstable_sx=function(v){return sl({sx:v,theme:this})},h}function mv(t){return Object.keys(t).length===0}function Kv(t=null){const r=R.useContext(uc);return!r||mv(r)?t:r}const gv=vc();function yc(t=gv){return Kv(t)}function I0(t){const r=Oa(t);return t!==r&&r.styles?(r.styles.match(/^@layer\s+[^{]*$/)||(r.styles=`@layer global{${r.styles}}`),r):t}function vv({styles:t,themeId:r,defaultTheme:l={}}){const i=yc(l),s=r&&i[r]||i;let u=typeof t=="function"?t(s):t;return s.modularCssLayers&&(Array.isArray(u)?u=u.map(f=>I0(typeof f=="function"?f(s):f)):u=I0(u)),q.jsx(K6,{styles:u})}const yv=t=>{const r={systemProps:{},otherProps:{}},l=t?.theme?.unstable_sxConfig??ls;return Object.keys(t).forEach(i=>{l[i]?r.systemProps[i]=t[i]:r.otherProps[i]=t[i]}),r};function Fd(t){const{sx:r,...l}=t,{systemProps:i,otherProps:s}=yv(l);let u;return Array.isArray(r)?u=[i,...r]:typeof r=="function"?u=(...f)=>{const p=r(...f);return Ar(p)?{...i,...p}:i}:u={...i,...r},{...s,sx:u}}const M3=t=>t,bv=()=>{let t=M3;return{configure(r){t=r},generate(r){return t(r)},reset(){t=M3}}},Wm=bv();function Jm(t){var r,l,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(r=0;r<s;r++)t[r]&&(l=Jm(t[r]))&&(i&&(i+=" "),i+=l)}else for(l in t)t[l]&&(i&&(i+=" "),i+=l);return i}function Me(){for(var t,r,l=0,i="",s=arguments.length;l<s;l++)(t=arguments[l])&&(r=Jm(t))&&(i&&(i+=" "),i+=r);return i}function Sv(t={}){const{themeId:r,defaultTheme:l,defaultClassName:i="MuiBox-root",generateClassName:s}=t,u=Gm("div",{shouldForwardProp:p=>p!=="theme"&&p!=="sx"&&p!=="as"})(sl);return R.forwardRef(function(m,h){const K=yc(l),{className:v,component:y="div",...x}=Fd(m);return q.jsx(u,{as:y,ref:h,className:Me(v,s?s(i):i),theme:r&&K[r]||K,...x})})}const xv={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function vt(t,r,l="Mui"){const i=xv[r];return i?`${l}-${i}`:`${Wm.generate(t)}-${r}`}function yt(t,r,l="Mui"){const i={};return r.forEach(s=>{i[s]=vt(t,s,l)}),i}function e4(t){const{variants:r,...l}=t,i={variants:r,style:Oa(l),isProcessed:!0};return i.style===l||r&&r.forEach(s=>{typeof s.style!="function"&&(s.style=Oa(s.style))}),i}const Tv=vc();function W0(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}function al(t,r){return r&&t&&typeof t=="object"&&t.styles&&!t.styles.startsWith("@layer")&&(t.styles=`@layer ${r}{${String(t.styles)}}`),t}function Ev(t){return t?(r,l)=>l[t]:null}function Cv(t,r,l){t.theme=Rv(t.theme)?l:t.theme[r]||t.theme}function ku(t,r,l){const i=typeof r=="function"?r(t):r;if(Array.isArray(i))return i.flatMap(s=>ku(t,s,l));if(Array.isArray(i?.variants)){let s;if(i.isProcessed)s=l?al(i.style,l):i.style;else{const{variants:u,...f}=i;s=l?al(Oa(f),l):f}return t4(t,i.variants,[s],l)}return i?.isProcessed?l?al(Oa(i.style),l):i.style:l?al(Oa(i),l):i}function t4(t,r,l=[],i=void 0){let s;e:for(let u=0;u<r.length;u+=1){const f=r[u];if(typeof f.props=="function"){if(s??={...t,...t.ownerState,ownerState:t.ownerState},!f.props(s))continue}else for(const p in f.props)if(t[p]!==f.props[p]&&t.ownerState?.[p]!==f.props[p])continue e;typeof f.style=="function"?(s??={...t,...t.ownerState,ownerState:t.ownerState},l.push(i?al(Oa(f.style(s)),i):f.style(s))):l.push(i?al(Oa(f.style),i):f.style)}return l}function n4(t={}){const{themeId:r,defaultTheme:l=Tv,rootShouldForwardProp:i=W0,slotShouldForwardProp:s=W0}=t;function u(p){Cv(p,r,l)}return(p,m={})=>{g6(p,B=>B.filter(k=>k!==sl));const{name:h,slot:K,skipVariantsResolver:v,skipSx:y,overridesResolver:x=Ev(Ov(K)),...E}=m,T=h&&h.startsWith("Mui")||K?"components":"custom",M=v!==void 0?v:K&&K!=="Root"&&K!=="root"||!1,_=y||!1;let L=W0;K==="Root"||K==="root"?L=i:K?L=s:Av(p)&&(L=void 0);const O=Gm(p,{shouldForwardProp:L,label:wv(),...E}),w=B=>{if(B.__emotion_real===B)return B;if(typeof B=="function")return function(Z){return ku(Z,B,Z.theme.modularCssLayers?T:void 0)};if(Ar(B)){const k=e4(B);return function(W){return k.variants?ku(W,k,W.theme.modularCssLayers?T:void 0):W.theme.modularCssLayers?al(k.style,T):k.style}}return B},A=(...B)=>{const k=[],Z=B.map(w),W=[];if(k.push(u),h&&x&&W.push(function(F){const j=F.theme.components?.[h]?.styleOverrides;if(!j)return null;const C={};for(const V in j)C[V]=ku(F,j[V],F.theme.modularCssLayers?"theme":void 0);return x(F,C)}),h&&!M&&W.push(function(F){const j=F.theme?.components?.[h]?.variants;return j?t4(F,j,[],F.theme.modularCssLayers?"theme":void 0):null}),_||W.push(sl),Array.isArray(Z[0])){const S=Z.shift(),F=new Array(k.length).fill(""),P=new Array(W.length).fill("");let j;j=[...F,...S,...P],j.raw=[...F,...S.raw,...P],k.unshift(j)}const ee=[...k,...Z,...W],I=O(...ee);return p.muiName&&(I.muiName=p.muiName),I};return O.withConfig&&(A.withConfig=O.withConfig),A}}function wv(t,r){return void 0}function Rv(t){for(const r in t)return!1;return!0}function Av(t){return typeof t=="string"&&t.charCodeAt(0)>96}function Ov(t){return t&&t.charAt(0).toLowerCase()+t.slice(1)}const Mv=n4();function Vu(t,r,l=!1){const i={...r};for(const s in t)if(Object.prototype.hasOwnProperty.call(t,s)){const u=s;if(u==="components"||u==="slots")i[u]={...t[u],...i[u]};else if(u==="componentsProps"||u==="slotProps"){const f=t[u],p=r[u];if(!p)i[u]=f||{};else if(!f)i[u]=p;else{i[u]={...p};for(const m in f)if(Object.prototype.hasOwnProperty.call(f,m)){const h=m;i[u][h]=Vu(f[h],p[h],l)}}}else u==="className"&&l&&r.className?i.className=Me(t?.className,r?.className):u==="style"&&l&&r.style?i.style={...t?.style,...r?.style}:i[u]===void 0&&(i[u]=t[u])}return i}function Dv(t){const{theme:r,name:l,props:i}=t;return!r||!r.components||!r.components[l]||!r.components[l].defaultProps?i:Vu(r.components[l].defaultProps,i)}function Nv({props:t,name:r,defaultTheme:l,themeId:i}){let s=yc(l);return i&&(s=s[i]||s),Dv({theme:s,name:r,props:t})}const Nr=typeof window<"u"?R.useLayoutEffect:R.useEffect;function Bv(t,r=Number.MIN_SAFE_INTEGER,l=Number.MAX_SAFE_INTEGER){return Math.max(r,Math.min(t,l))}function Xd(t,r=0,l=1){return Bv(t,r,l)}function _v(t){t=t.slice(1);const r=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let l=t.match(r);return l&&l[0].length===1&&(l=l.map(i=>i+i)),l?`rgb${l.length===4?"a":""}(${l.map((i,s)=>s<3?parseInt(i,16):Math.round(parseInt(i,16)/255*1e3)/1e3).join(", ")})`:""}function Ma(t){if(t.type)return t;if(t.charAt(0)==="#")return Ma(_v(t));const r=t.indexOf("("),l=t.substring(0,r);if(!["rgb","rgba","hsl","hsla","color"].includes(l))throw new Error(ra(9,t));let i=t.substring(r+1,t.length-1),s;if(l==="color"){if(i=i.split(" "),s=i.shift(),i.length===4&&i[3].charAt(0)==="/"&&(i[3]=i[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(s))throw new Error(ra(10,s))}else i=i.split(",");return i=i.map(u=>parseFloat(u)),{type:l,values:i,colorSpace:s}}const zv=t=>{const r=Ma(t);return r.values.slice(0,3).map((l,i)=>r.type.includes("hsl")&&i!==0?`${l}%`:l).join(" ")},wo=(t,r)=>{try{return zv(t)}catch{return t}};function bc(t){const{type:r,colorSpace:l}=t;let{values:i}=t;return r.includes("rgb")?i=i.map((s,u)=>u<3?parseInt(s,10):s):r.includes("hsl")&&(i[1]=`${i[1]}%`,i[2]=`${i[2]}%`),r.includes("color")?i=`${l} ${i.join(" ")}`:i=`${i.join(", ")}`,`${r}(${i})`}function r4(t){t=Ma(t);const{values:r}=t,l=r[0],i=r[1]/100,s=r[2]/100,u=i*Math.min(s,1-s),f=(h,K=(h+l/30)%12)=>s-u*Math.max(Math.min(K-3,9-K,1),-1);let p="rgb";const m=[Math.round(f(0)*255),Math.round(f(8)*255),Math.round(f(4)*255)];return t.type==="hsla"&&(p+="a",m.push(r[3])),bc({type:p,values:m})}function pd(t){t=Ma(t);let r=t.type==="hsl"||t.type==="hsla"?Ma(r4(t)).values:t.values;return r=r.map(l=>(t.type!=="color"&&(l/=255),l<=.03928?l/12.92:((l+.055)/1.055)**2.4)),Number((.2126*r[0]+.7152*r[1]+.0722*r[2]).toFixed(3))}function Lv(t,r){const l=pd(t),i=pd(r);return(Math.max(l,i)+.05)/(Math.min(l,i)+.05)}function Gu(t,r){return t=Ma(t),r=Xd(r),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${r}`:t.values[3]=r,bc(t)}function el(t,r,l){try{return Gu(t,r)}catch{return t}}function Sc(t,r){if(t=Ma(t),r=Xd(r),t.type.includes("hsl"))t.values[2]*=1-r;else if(t.type.includes("rgb")||t.type.includes("color"))for(let l=0;l<3;l+=1)t.values[l]*=1-r;return bc(t)}function rt(t,r,l){try{return Sc(t,r)}catch{return t}}function xc(t,r){if(t=Ma(t),r=Xd(r),t.type.includes("hsl"))t.values[2]+=(100-t.values[2])*r;else if(t.type.includes("rgb"))for(let l=0;l<3;l+=1)t.values[l]+=(255-t.values[l])*r;else if(t.type.includes("color"))for(let l=0;l<3;l+=1)t.values[l]+=(1-t.values[l])*r;return bc(t)}function at(t,r,l){try{return xc(t,r)}catch{return t}}function Uv(t,r=.15){return pd(t)>.5?Sc(t,r):xc(t,r)}function Cu(t,r,l){try{return Uv(t,r)}catch{return t}}const kv=R.createContext(),is=()=>R.useContext(kv)??!1,Hv=R.createContext(void 0);function jv(t){const{theme:r,name:l,props:i}=t;if(!r||!r.components||!r.components[l])return i;const s=r.components[l];return s.defaultProps?Vu(s.defaultProps,i,r.components.mergeClassNameAndStyle):!s.styleOverrides&&!s.variants?Vu(s,i,r.components.mergeClassNameAndStyle):i}function $v({props:t,name:r}){const l=R.useContext(Hv);return jv({props:t,name:r,theme:{components:l}})}let D3=0;function Pv(t){const[r,l]=R.useState(t),i=t||r;return R.useEffect(()=>{r==null&&(D3+=1,l(`mui-${D3}`))},[r]),i}const qv={...od},N3=qv.useId;function Zd(t){if(N3!==void 0){const r=N3();return t??r}return Pv(t)}const B3={theme:void 0};function Yv(t){let r,l;return function(s){let u=r;return(u===void 0||s.theme!==l)&&(B3.theme=s.theme,u=e4(t(B3)),r=u,l=s.theme),u}}function Vv(t=""){function r(...i){if(!i.length)return"";const s=i[0];return typeof s=="string"&&!s.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${t?`${t}-`:""}${s}${r(...i.slice(1))})`:`, ${s}`}return(i,...s)=>`var(--${t?`${t}-`:""}${i}${r(...s)})`}const _3=(t,r,l,i=[])=>{let s=t;r.forEach((u,f)=>{f===r.length-1?Array.isArray(s)?s[Number(u)]=l:s&&typeof s=="object"&&(s[u]=l):s&&typeof s=="object"&&(s[u]||(s[u]=i.includes(u)?[]:{}),s=s[u])})},Gv=(t,r,l)=>{function i(s,u=[],f=[]){Object.entries(s).forEach(([p,m])=>{(!l||l&&!l([...u,p]))&&m!=null&&(typeof m=="object"&&Object.keys(m).length>0?i(m,[...u,p],Array.isArray(m)?[...f,p]:f):r([...u,p],m,f))})}i(t)},Fv=(t,r)=>typeof r=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(i=>t.includes(i))||t[t.length-1].toLowerCase().includes("opacity")?r:`${r}px`:r;function J0(t,r){const{prefix:l,shouldSkipGeneratingVar:i}=r||{},s={},u={},f={};return Gv(t,(p,m,h)=>{if((typeof m=="string"||typeof m=="number")&&(!i||!i(p,m))){const K=`--${l?`${l}-`:""}${p.join("-")}`,v=Fv(p,m);Object.assign(s,{[K]:v}),_3(u,p,`var(${K})`,h),_3(f,p,`var(${K}, ${v})`,h)}},p=>p[0]==="vars"),{css:s,vars:u,varsWithDefaults:f}}function Xv(t,r={}){const{getSelector:l=_,disableCssColorScheme:i,colorSchemeSelector:s,enableContrastVars:u}=r,{colorSchemes:f={},components:p,defaultColorScheme:m="light",...h}=t,{vars:K,css:v,varsWithDefaults:y}=J0(h,r);let x=y;const E={},{[m]:T,...M}=f;if(Object.entries(M||{}).forEach(([w,A])=>{const{vars:B,css:k,varsWithDefaults:Z}=J0(A,r);x=en(x,Z),E[w]={css:k,vars:B}}),T){const{css:w,vars:A,varsWithDefaults:B}=J0(T,r);x=en(x,B),E[m]={css:w,vars:A}}function _(w,A){let B=s;if(s==="class"&&(B=".%s"),s==="data"&&(B="[data-%s]"),s?.startsWith("data-")&&!s.includes("%s")&&(B=`[${s}="%s"]`),w){if(B==="media")return t.defaultColorScheme===w?":root":{[`@media (prefers-color-scheme: ${f[w]?.palette?.mode||w})`]:{":root":A}};if(B)return t.defaultColorScheme===w?`:root, ${B.replace("%s",String(w))}`:B.replace("%s",String(w))}return":root"}return{vars:x,generateThemeVars:()=>{let w={...K};return Object.entries(E).forEach(([,{vars:A}])=>{w=en(w,A)}),w},generateStyleSheets:()=>{const w=[],A=t.defaultColorScheme||"light";function B(W,ee){Object.keys(ee).length&&w.push(typeof W=="string"?{[W]:{...ee}}:W)}B(l(void 0,{...v}),v);const{[A]:k,...Z}=E;if(k){const{css:W}=k,ee=f[A]?.palette?.mode,I=!i&&ee?{colorScheme:ee,...W}:{...W};B(l(A,{...I}),I)}return Object.entries(Z).forEach(([W,{css:ee}])=>{const I=f[W]?.palette?.mode,S=!i&&I?{colorScheme:I,...ee}:{...ee};B(l(W,{...S}),S)}),u&&w.push({":root":{"--__l-threshold":"0.7","--__l":"clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)","--__a":"clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"}}),w}}}function Zv(t){return function(l){return t==="media"?`@media (prefers-color-scheme: ${l})`:t?t.startsWith("data-")&&!t.includes("%s")?`[${t}="${l}"] &`:t==="class"?`.${l} &`:t==="data"?`[data-${l}] &`:`${t.replace("%s",l)} &`:"&"}}function bt(t,r,l=void 0){const i={};for(const s in t){const u=t[s];let f="",p=!0;for(let m=0;m<u.length;m+=1){const h=u[m];h&&(f+=(p===!0?"":" ")+r(h),p=!1,l&&l[h]&&(f+=" "+l[h]))}i[s]=f}return i}function ed(t,r){return R.isValidElement(t)&&r.indexOf(t.type.muiName??t.type?._payload?.value?.muiName)!==-1}const Qv=vc(),Iv=Mv("div",{name:"MuiStack",slot:"Root"});function Wv(t){return Nv({props:t,name:"MuiStack",defaultTheme:Qv})}function Jv(t,r){const l=R.Children.toArray(t).filter(Boolean);return l.reduce((i,s,u)=>(i.push(s),u<l.length-1&&i.push(R.cloneElement(r,{key:`separator-${u}`})),i),[])}const e8=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],t8=({ownerState:t,theme:r})=>{let l={display:"flex",flexDirection:"column",...hr({theme:r},Q0({values:t.direction,breakpoints:r.breakpoints.values}),i=>({flexDirection:i}))};if(t.spacing){const i=dc(r),s=Object.keys(r.breakpoints.values).reduce((m,h)=>((typeof t.spacing=="object"&&t.spacing[h]!=null||typeof t.direction=="object"&&t.direction[h]!=null)&&(m[h]=!0),m),{}),u=Q0({values:t.direction,base:s}),f=Q0({values:t.spacing,base:s});typeof u=="object"&&Object.keys(u).forEach((m,h,K)=>{if(!u[m]){const y=h>0?u[K[h-1]]:"column";u[m]=y}}),l=en(l,hr({theme:r},f,(m,h)=>t.useFlexGap?{gap:ol(i,m)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${e8(h?u[h]:t.direction)}`]:ol(i,m)}}))}return l=R6(r.breakpoints,l),l};function n8(t={}){const{createStyledComponent:r=Iv,useThemeProps:l=Wv,componentName:i="MuiStack"}=t,s=()=>bt({root:["root"]},m=>vt(i,m),{}),u=r(t8);return R.forwardRef(function(m,h){const K=l(m),v=Fd(K),{component:y="div",direction:x="column",spacing:E=0,divider:T,children:M,className:_,useFlexGap:L=!1,...O}=v,w={direction:x,spacing:E,useFlexGap:L},A=s();return q.jsx(u,{as:y,ownerState:w,ref:h,className:Me(A.root,_),...O,children:T?Jv(M,T):M})})}function a4(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:jo.white,default:jo.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const l4=a4();function i4(){return{text:{primary:jo.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:jo.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const hd=i4();function z3(t,r,l,i){const s=i.light||i,u=i.dark||i*1.5;t[r]||(t.hasOwnProperty(l)?t[r]=t[l]:r==="light"?t.light=xc(t.main,s):r==="dark"&&(t.dark=Sc(t.main,u)))}function L3(t,r,l,i,s){const u=s.light||s,f=s.dark||s*1.5;r[l]||(r.hasOwnProperty(i)?r[l]=r[i]:l==="light"?r.light=`color-mix(in ${t}, ${r.main}, #fff ${(u*100).toFixed(0)}%)`:l==="dark"&&(r.dark=`color-mix(in ${t}, ${r.main}, #000 ${(f*100).toFixed(0)}%)`))}function r8(t="light"){return t==="dark"?{main:Jl[200],light:Jl[50],dark:Jl[400]}:{main:Jl[700],light:Jl[400],dark:Jl[800]}}function a8(t="light"){return t==="dark"?{main:Wl[200],light:Wl[50],dark:Wl[400]}:{main:Wl[500],light:Wl[300],dark:Wl[700]}}function l8(t="light"){return t==="dark"?{main:Il[500],light:Il[300],dark:Il[700]}:{main:Il[700],light:Il[400],dark:Il[800]}}function i8(t="light"){return t==="dark"?{main:ei[400],light:ei[300],dark:ei[700]}:{main:ei[700],light:ei[500],dark:ei[900]}}function o8(t="light"){return t==="dark"?{main:ti[400],light:ti[300],dark:ti[700]}:{main:ti[800],light:ti[500],dark:ti[900]}}function s8(t="light"){return t==="dark"?{main:yo[400],light:yo[300],dark:yo[700]}:{main:"#ed6c02",light:yo[500],dark:yo[900]}}function u8(t){return`oklch(from ${t} var(--__l) 0 h / var(--__a))`}function Qd(t){const{mode:r="light",contrastThreshold:l=3,tonalOffset:i=.2,colorSpace:s,...u}=t,f=t.primary||r8(r),p=t.secondary||a8(r),m=t.error||l8(r),h=t.info||i8(r),K=t.success||o8(r),v=t.warning||s8(r);function y(M){return s?u8(M):Lv(M,hd.text.primary)>=l?hd.text.primary:l4.text.primary}const x=({color:M,name:_,mainShade:L=500,lightShade:O=300,darkShade:w=700})=>{if(M={...M},!M.main&&M[L]&&(M.main=M[L]),!M.hasOwnProperty("main"))throw new Error(ra(11,_?` (${_})`:"",L));if(typeof M.main!="string")throw new Error(ra(12,_?` (${_})`:"",JSON.stringify(M.main)));return s?(L3(s,M,"light",O,i),L3(s,M,"dark",w,i)):(z3(M,"light",O,i),z3(M,"dark",w,i)),M.contrastText||(M.contrastText=y(M.main)),M};let E;return r==="light"?E=a4():r==="dark"&&(E=i4()),en({common:{...jo},mode:r,primary:x({color:f,name:"primary"}),secondary:x({color:p,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:x({color:m,name:"error"}),warning:x({color:v,name:"warning"}),info:x({color:h,name:"info"}),success:x({color:K,name:"success"}),grey:Kg,contrastThreshold:l,getContrastText:y,augmentColor:x,tonalOffset:i,...E},u)}function c8(t){const r={};return Object.entries(t).forEach(i=>{const[s,u]=i;typeof u=="object"&&(r[s]=`${u.fontStyle?`${u.fontStyle} `:""}${u.fontVariant?`${u.fontVariant} `:""}${u.fontWeight?`${u.fontWeight} `:""}${u.fontStretch?`${u.fontStretch} `:""}${u.fontSize||""}${u.lineHeight?`/${u.lineHeight} `:""}${u.fontFamily||""}`)}),r}function f8(t,r){return{toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}},...r}}function d8(t){return Math.round(t*1e5)/1e5}const U3={textTransform:"uppercase"},k3='"Roboto", "Helvetica", "Arial", sans-serif';function p8(t,r){const{fontFamily:l=k3,fontSize:i=14,fontWeightLight:s=300,fontWeightRegular:u=400,fontWeightMedium:f=500,fontWeightBold:p=700,htmlFontSize:m=16,allVariants:h,pxToRem:K,...v}=typeof r=="function"?r(t):r,y=i/14,x=K||(M=>`${M/m*y}rem`),E=(M,_,L,O,w)=>({fontFamily:l,fontWeight:M,fontSize:x(_),lineHeight:L,...l===k3?{letterSpacing:`${d8(O/_)}em`}:{},...w,...h}),T={h1:E(s,96,1.167,-1.5),h2:E(s,60,1.2,-.5),h3:E(u,48,1.167,0),h4:E(u,34,1.235,.25),h5:E(u,24,1.334,0),h6:E(f,20,1.6,.15),subtitle1:E(u,16,1.75,.15),subtitle2:E(f,14,1.57,.1),body1:E(u,16,1.5,.15),body2:E(u,14,1.43,.15),button:E(f,14,1.75,.4,U3),caption:E(u,12,1.66,.4),overline:E(u,12,2.66,1,U3),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return en({htmlFontSize:m,pxToRem:x,fontFamily:l,fontSize:i,fontWeightLight:s,fontWeightRegular:u,fontWeightMedium:f,fontWeightBold:p,...T},v,{clone:!1})}const h8=.2,m8=.14,K8=.12;function Rt(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${h8})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${m8})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${K8})`].join(",")}const g8=["none",Rt(0,2,1,-1,0,1,1,0,0,1,3,0),Rt(0,3,1,-2,0,2,2,0,0,1,5,0),Rt(0,3,3,-2,0,3,4,0,0,1,8,0),Rt(0,2,4,-1,0,4,5,0,0,1,10,0),Rt(0,3,5,-1,0,5,8,0,0,1,14,0),Rt(0,3,5,-1,0,6,10,0,0,1,18,0),Rt(0,4,5,-2,0,7,10,1,0,2,16,1),Rt(0,5,5,-3,0,8,10,1,0,3,14,2),Rt(0,5,6,-3,0,9,12,1,0,3,16,2),Rt(0,6,6,-3,0,10,14,1,0,4,18,3),Rt(0,6,7,-4,0,11,15,1,0,4,20,3),Rt(0,7,8,-4,0,12,17,2,0,5,22,4),Rt(0,7,8,-4,0,13,19,2,0,5,24,4),Rt(0,7,9,-4,0,14,21,2,0,5,26,4),Rt(0,8,9,-5,0,15,22,2,0,6,28,5),Rt(0,8,10,-5,0,16,24,2,0,6,30,5),Rt(0,8,11,-5,0,17,26,2,0,6,32,5),Rt(0,9,11,-5,0,18,28,2,0,7,34,6),Rt(0,9,12,-6,0,19,29,2,0,7,36,6),Rt(0,10,13,-6,0,20,31,3,0,8,38,7),Rt(0,10,13,-6,0,21,33,3,0,8,40,7),Rt(0,10,14,-6,0,22,35,3,0,8,42,7),Rt(0,11,14,-7,0,23,36,3,0,9,44,8),Rt(0,11,15,-7,0,24,38,3,0,9,46,8)],v8={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},y8={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function H3(t){return`${Math.round(t)}ms`}function b8(t){if(!t)return 0;const r=t/36;return Math.min(Math.round((4+15*r**.25+r/5)*10),3e3)}function S8(t){const r={...v8,...t.easing},l={...y8,...t.duration};return{getAutoHeightDuration:b8,create:(s=["all"],u={})=>{const{duration:f=l.standard,easing:p=r.easeInOut,delay:m=0,...h}=u;return(Array.isArray(s)?s:[s]).map(K=>`${K} ${typeof f=="string"?f:H3(f)} ${p} ${typeof m=="string"?m:H3(m)}`).join(",")},...t,easing:r,duration:l}}const x8={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function T8(t){return Ar(t)||typeof t>"u"||typeof t=="string"||typeof t=="boolean"||typeof t=="number"||Array.isArray(t)}function o4(t={}){const r={...t};function l(i){const s=Object.entries(i);for(let u=0;u<s.length;u++){const[f,p]=s[u];!T8(p)||f.startsWith("unstable_")?delete i[f]:Ar(p)&&(i[f]={...p},l(i[f]))}}return l(r),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function j3(t){return typeof t=="number"?`${(t*100).toFixed(0)}%`:`calc((${t}) * 100%)`}const E8=t=>{if(!Number.isNaN(+t))return+t;const r=t.match(/\d*\.?\d+/g);if(!r)return 0;let l=0;for(let i=0;i<r.length;i+=1)l+=+r[i];return l};function C8(t){Object.assign(t,{alpha(r,l){const i=this||t;return i.colorSpace?`oklch(from ${r} l c h / ${typeof l=="string"?`calc(${l})`:l})`:i.vars?`rgba(${r.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g,"var(--$1Channel)")} / ${typeof l=="string"?`calc(${l})`:l})`:Gu(r,E8(l))},lighten(r,l){const i=this||t;return i.colorSpace?`color-mix(in ${i.colorSpace}, ${r}, #fff ${j3(l)})`:xc(r,l)},darken(r,l){const i=this||t;return i.colorSpace?`color-mix(in ${i.colorSpace}, ${r}, #000 ${j3(l)})`:Sc(r,l)}})}function md(t={},...r){const{breakpoints:l,mixins:i={},spacing:s,palette:u={},transitions:f={},typography:p={},shape:m,colorSpace:h,...K}=t;if(t.vars&&t.generateThemeVars===void 0)throw new Error(ra(20));const v=Qd({...u,colorSpace:h}),y=vc(t);let x=en(y,{mixins:f8(y.breakpoints,i),palette:v,shadows:g8.slice(),typography:p8(v,p),transitions:S8(f),zIndex:{...x8}});return x=en(x,K),x=r.reduce((E,T)=>en(E,T),x),x.unstable_sxConfig={...ls,...K?.unstable_sxConfig},x.unstable_sx=function(T){return sl({sx:T,theme:this})},x.toRuntimeSource=o4,C8(x),x}function Kd(t){let r;return t<1?r=5.11916*t**2:r=4.5*Math.log(t+1)+2,Math.round(r*10)/1e3}const w8=[...Array(25)].map((t,r)=>{if(r===0)return"none";const l=Kd(r);return`linear-gradient(rgba(255 255 255 / ${l}), rgba(255 255 255 / ${l}))`});function s4(t){return{inputPlaceholder:t==="dark"?.5:.42,inputUnderline:t==="dark"?.7:.42,switchTrackDisabled:t==="dark"?.2:.12,switchTrack:t==="dark"?.3:.38}}function u4(t){return t==="dark"?w8:[]}function R8(t){const{palette:r={mode:"light"},opacity:l,overlays:i,colorSpace:s,...u}=t,f=Qd({...r,colorSpace:s});return{palette:f,opacity:{...s4(f.mode),...l},overlays:i||u4(f.mode),...u}}function A8(t){return!!t[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!t[0].match(/sxConfig$/)||t[0]==="palette"&&!!t[1]?.match(/(mode|contrastThreshold|tonalOffset)/)}const O8=t=>[...[...Array(25)].map((r,l)=>`--${t?`${t}-`:""}overlays-${l}`),`--${t?`${t}-`:""}palette-AppBar-darkBg`,`--${t?`${t}-`:""}palette-AppBar-darkColor`],M8=t=>(r,l)=>{const i=t.rootSelector||":root",s=t.colorSchemeSelector;let u=s;if(s==="class"&&(u=".%s"),s==="data"&&(u="[data-%s]"),s?.startsWith("data-")&&!s.includes("%s")&&(u=`[${s}="%s"]`),t.defaultColorScheme===r){if(r==="dark"){const f={};return O8(t.cssVarPrefix).forEach(p=>{f[p]=l[p],delete l[p]}),u==="media"?{[i]:l,"@media (prefers-color-scheme: dark)":{[i]:f}}:u?{[u.replace("%s",r)]:f,[`${i}, ${u.replace("%s",r)}`]:l}:{[i]:{...l,...f}}}if(u&&u!=="media")return`${i}, ${u.replace("%s",String(r))}`}else if(r){if(u==="media")return{[`@media (prefers-color-scheme: ${String(r)})`]:{[i]:l}};if(u)return u.replace("%s",String(r))}return i};function D8(t,r){r.forEach(l=>{t[l]||(t[l]={})})}function Q(t,r,l){!t[r]&&l&&(t[r]=l)}function Ro(t){return typeof t!="string"||!t.startsWith("hsl")?t:r4(t)}function ea(t,r){`${r}Channel`in t||(t[`${r}Channel`]=wo(Ro(t[r])))}function N8(t){return typeof t=="number"?`${t}px`:typeof t=="string"||typeof t=="function"||Array.isArray(t)?t:"8px"}const Sr=t=>{try{return t()}catch{}},B8=(t="mui")=>Vv(t);function td(t,r,l,i,s){if(!l)return;l=l===!0?{}:l;const u=s==="dark"?"dark":"light";if(!i){r[s]=R8({...l,palette:{mode:u,...l?.palette},colorSpace:t});return}const{palette:f,...p}=md({...i,palette:{mode:u,...l?.palette},colorSpace:t});return r[s]={...l,palette:f,opacity:{...s4(u),...l?.opacity},overlays:l?.overlays||u4(u)},p}function _8(t={},...r){const{colorSchemes:l={light:!0},defaultColorScheme:i,disableCssColorScheme:s=!1,cssVarPrefix:u="mui",nativeColor:f=!1,shouldSkipGeneratingVar:p=A8,colorSchemeSelector:m=l.light&&l.dark?"media":void 0,rootSelector:h=":root",...K}=t,v=Object.keys(l)[0],y=i||(l.light&&v!=="light"?"light":v),x=B8(u),{[y]:E,light:T,dark:M,..._}=l,L={..._};let O=E;if((y==="dark"&&!("dark"in l)||y==="light"&&!("light"in l))&&(O=!0),!O)throw new Error(ra(21,y));let w;f&&(w="oklch");const A=td(w,L,O,K,y);T&&!L.light&&td(w,L,T,void 0,"light"),M&&!L.dark&&td(w,L,M,void 0,"dark");let B={defaultColorScheme:y,...A,cssVarPrefix:u,colorSchemeSelector:m,rootSelector:h,getCssVar:x,colorSchemes:L,font:{...c8(A.typography),...A.font},spacing:N8(K.spacing)};Object.keys(B.colorSchemes).forEach(I=>{const S=B.colorSchemes[I].palette,F=j=>{const C=j.split("-"),V=C[1],oe=C[2];return x(j,S[V][oe])};S.mode==="light"&&(Q(S.common,"background","#fff"),Q(S.common,"onBackground","#000")),S.mode==="dark"&&(Q(S.common,"background","#000"),Q(S.common,"onBackground","#fff"));function P(j,C,V){if(w){let oe;return j===el&&(oe=`transparent ${((1-V)*100).toFixed(0)}%`),j===rt&&(oe=`#000 ${(V*100).toFixed(0)}%`),j===at&&(oe=`#fff ${(V*100).toFixed(0)}%`),`color-mix(in ${w}, ${C}, ${oe})`}return j(C,V)}if(D8(S,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),S.mode==="light"){Q(S.Alert,"errorColor",P(rt,S.error.light,.6)),Q(S.Alert,"infoColor",P(rt,S.info.light,.6)),Q(S.Alert,"successColor",P(rt,S.success.light,.6)),Q(S.Alert,"warningColor",P(rt,S.warning.light,.6)),Q(S.Alert,"errorFilledBg",F("palette-error-main")),Q(S.Alert,"infoFilledBg",F("palette-info-main")),Q(S.Alert,"successFilledBg",F("palette-success-main")),Q(S.Alert,"warningFilledBg",F("palette-warning-main")),Q(S.Alert,"errorFilledColor",Sr(()=>S.getContrastText(S.error.main))),Q(S.Alert,"infoFilledColor",Sr(()=>S.getContrastText(S.info.main))),Q(S.Alert,"successFilledColor",Sr(()=>S.getContrastText(S.success.main))),Q(S.Alert,"warningFilledColor",Sr(()=>S.getContrastText(S.warning.main))),Q(S.Alert,"errorStandardBg",P(at,S.error.light,.9)),Q(S.Alert,"infoStandardBg",P(at,S.info.light,.9)),Q(S.Alert,"successStandardBg",P(at,S.success.light,.9)),Q(S.Alert,"warningStandardBg",P(at,S.warning.light,.9)),Q(S.Alert,"errorIconColor",F("palette-error-main")),Q(S.Alert,"infoIconColor",F("palette-info-main")),Q(S.Alert,"successIconColor",F("palette-success-main")),Q(S.Alert,"warningIconColor",F("palette-warning-main")),Q(S.AppBar,"defaultBg",F("palette-grey-100")),Q(S.Avatar,"defaultBg",F("palette-grey-400")),Q(S.Button,"inheritContainedBg",F("palette-grey-300")),Q(S.Button,"inheritContainedHoverBg",F("palette-grey-A100")),Q(S.Chip,"defaultBorder",F("palette-grey-400")),Q(S.Chip,"defaultAvatarColor",F("palette-grey-700")),Q(S.Chip,"defaultIconColor",F("palette-grey-700")),Q(S.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),Q(S.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),Q(S.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),Q(S.LinearProgress,"primaryBg",P(at,S.primary.main,.62)),Q(S.LinearProgress,"secondaryBg",P(at,S.secondary.main,.62)),Q(S.LinearProgress,"errorBg",P(at,S.error.main,.62)),Q(S.LinearProgress,"infoBg",P(at,S.info.main,.62)),Q(S.LinearProgress,"successBg",P(at,S.success.main,.62)),Q(S.LinearProgress,"warningBg",P(at,S.warning.main,.62)),Q(S.Skeleton,"bg",w?P(el,S.text.primary,.11):`rgba(${F("palette-text-primaryChannel")} / 0.11)`),Q(S.Slider,"primaryTrack",P(at,S.primary.main,.62)),Q(S.Slider,"secondaryTrack",P(at,S.secondary.main,.62)),Q(S.Slider,"errorTrack",P(at,S.error.main,.62)),Q(S.Slider,"infoTrack",P(at,S.info.main,.62)),Q(S.Slider,"successTrack",P(at,S.success.main,.62)),Q(S.Slider,"warningTrack",P(at,S.warning.main,.62));const j=w?P(rt,S.background.default,.6825):Cu(S.background.default,.8);Q(S.SnackbarContent,"bg",j),Q(S.SnackbarContent,"color",Sr(()=>w?hd.text.primary:S.getContrastText(j))),Q(S.SpeedDialAction,"fabHoverBg",Cu(S.background.paper,.15)),Q(S.StepConnector,"border",F("palette-grey-400")),Q(S.StepContent,"border",F("palette-grey-400")),Q(S.Switch,"defaultColor",F("palette-common-white")),Q(S.Switch,"defaultDisabledColor",F("palette-grey-100")),Q(S.Switch,"primaryDisabledColor",P(at,S.primary.main,.62)),Q(S.Switch,"secondaryDisabledColor",P(at,S.secondary.main,.62)),Q(S.Switch,"errorDisabledColor",P(at,S.error.main,.62)),Q(S.Switch,"infoDisabledColor",P(at,S.info.main,.62)),Q(S.Switch,"successDisabledColor",P(at,S.success.main,.62)),Q(S.Switch,"warningDisabledColor",P(at,S.warning.main,.62)),Q(S.TableCell,"border",P(at,P(el,S.divider,1),.88)),Q(S.Tooltip,"bg",P(el,S.grey[700],.92))}if(S.mode==="dark"){Q(S.Alert,"errorColor",P(at,S.error.light,.6)),Q(S.Alert,"infoColor",P(at,S.info.light,.6)),Q(S.Alert,"successColor",P(at,S.success.light,.6)),Q(S.Alert,"warningColor",P(at,S.warning.light,.6)),Q(S.Alert,"errorFilledBg",F("palette-error-dark")),Q(S.Alert,"infoFilledBg",F("palette-info-dark")),Q(S.Alert,"successFilledBg",F("palette-success-dark")),Q(S.Alert,"warningFilledBg",F("palette-warning-dark")),Q(S.Alert,"errorFilledColor",Sr(()=>S.getContrastText(S.error.dark))),Q(S.Alert,"infoFilledColor",Sr(()=>S.getContrastText(S.info.dark))),Q(S.Alert,"successFilledColor",Sr(()=>S.getContrastText(S.success.dark))),Q(S.Alert,"warningFilledColor",Sr(()=>S.getContrastText(S.warning.dark))),Q(S.Alert,"errorStandardBg",P(rt,S.error.light,.9)),Q(S.Alert,"infoStandardBg",P(rt,S.info.light,.9)),Q(S.Alert,"successStandardBg",P(rt,S.success.light,.9)),Q(S.Alert,"warningStandardBg",P(rt,S.warning.light,.9)),Q(S.Alert,"errorIconColor",F("palette-error-main")),Q(S.Alert,"infoIconColor",F("palette-info-main")),Q(S.Alert,"successIconColor",F("palette-success-main")),Q(S.Alert,"warningIconColor",F("palette-warning-main")),Q(S.AppBar,"defaultBg",F("palette-grey-900")),Q(S.AppBar,"darkBg",F("palette-background-paper")),Q(S.AppBar,"darkColor",F("palette-text-primary")),Q(S.Avatar,"defaultBg",F("palette-grey-600")),Q(S.Button,"inheritContainedBg",F("palette-grey-800")),Q(S.Button,"inheritContainedHoverBg",F("palette-grey-700")),Q(S.Chip,"defaultBorder",F("palette-grey-700")),Q(S.Chip,"defaultAvatarColor",F("palette-grey-300")),Q(S.Chip,"defaultIconColor",F("palette-grey-300")),Q(S.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),Q(S.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),Q(S.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),Q(S.LinearProgress,"primaryBg",P(rt,S.primary.main,.5)),Q(S.LinearProgress,"secondaryBg",P(rt,S.secondary.main,.5)),Q(S.LinearProgress,"errorBg",P(rt,S.error.main,.5)),Q(S.LinearProgress,"infoBg",P(rt,S.info.main,.5)),Q(S.LinearProgress,"successBg",P(rt,S.success.main,.5)),Q(S.LinearProgress,"warningBg",P(rt,S.warning.main,.5)),Q(S.Skeleton,"bg",w?P(el,S.text.primary,.13):`rgba(${F("palette-text-primaryChannel")} / 0.13)`),Q(S.Slider,"primaryTrack",P(rt,S.primary.main,.5)),Q(S.Slider,"secondaryTrack",P(rt,S.secondary.main,.5)),Q(S.Slider,"errorTrack",P(rt,S.error.main,.5)),Q(S.Slider,"infoTrack",P(rt,S.info.main,.5)),Q(S.Slider,"successTrack",P(rt,S.success.main,.5)),Q(S.Slider,"warningTrack",P(rt,S.warning.main,.5));const j=w?P(at,S.background.default,.985):Cu(S.background.default,.98);Q(S.SnackbarContent,"bg",j),Q(S.SnackbarContent,"color",Sr(()=>w?l4.text.primary:S.getContrastText(j))),Q(S.SpeedDialAction,"fabHoverBg",Cu(S.background.paper,.15)),Q(S.StepConnector,"border",F("palette-grey-600")),Q(S.StepContent,"border",F("palette-grey-600")),Q(S.Switch,"defaultColor",F("palette-grey-300")),Q(S.Switch,"defaultDisabledColor",F("palette-grey-600")),Q(S.Switch,"primaryDisabledColor",P(rt,S.primary.main,.55)),Q(S.Switch,"secondaryDisabledColor",P(rt,S.secondary.main,.55)),Q(S.Switch,"errorDisabledColor",P(rt,S.error.main,.55)),Q(S.Switch,"infoDisabledColor",P(rt,S.info.main,.55)),Q(S.Switch,"successDisabledColor",P(rt,S.success.main,.55)),Q(S.Switch,"warningDisabledColor",P(rt,S.warning.main,.55)),Q(S.TableCell,"border",P(rt,P(el,S.divider,1),.68)),Q(S.Tooltip,"bg",P(el,S.grey[700],.92))}ea(S.background,"default"),ea(S.background,"paper"),ea(S.common,"background"),ea(S.common,"onBackground"),ea(S,"divider"),Object.keys(S).forEach(j=>{const C=S[j];j!=="tonalOffset"&&C&&typeof C=="object"&&(C.main&&Q(S[j],"mainChannel",wo(Ro(C.main))),C.light&&Q(S[j],"lightChannel",wo(Ro(C.light))),C.dark&&Q(S[j],"darkChannel",wo(Ro(C.dark))),C.contrastText&&Q(S[j],"contrastTextChannel",wo(Ro(C.contrastText))),j==="text"&&(ea(S[j],"primary"),ea(S[j],"secondary")),j==="action"&&(C.active&&ea(S[j],"active"),C.selected&&ea(S[j],"selected")))})}),B=r.reduce((I,S)=>en(I,S),B);const k={prefix:u,disableCssColorScheme:s,shouldSkipGeneratingVar:p,getSelector:M8(B),enableContrastVars:f},{vars:Z,generateThemeVars:W,generateStyleSheets:ee}=Xv(B,k);return B.vars=Z,Object.entries(B.colorSchemes[B.defaultColorScheme]).forEach(([I,S])=>{B[I]=S}),B.generateThemeVars=W,B.generateStyleSheets=ee,B.generateSpacing=function(){return Im(K.spacing,dc(this))},B.getColorSchemeSelector=Zv(m),B.spacing=B.generateSpacing(),B.shouldSkipGeneratingVar=p,B.unstable_sxConfig={...ls,...K?.unstable_sxConfig},B.unstable_sx=function(S){return sl({sx:S,theme:this})},B.toRuntimeSource=o4,B}function $3(t,r,l){t.colorSchemes&&l&&(t.colorSchemes[r]={...l!==!0&&l,palette:Qd({...l===!0?{}:l.palette,mode:r})})}function c4(t={},...r){const{palette:l,cssVariables:i=!1,colorSchemes:s=l?void 0:{light:!0},defaultColorScheme:u=l?.mode,...f}=t,p=u||"light",m=s?.[p],h={...s,...l?{[p]:{...typeof m!="boolean"&&m,palette:l}}:void 0};if(i===!1){if(!("colorSchemes"in t))return md(t,...r);let K=l;"palette"in t||h[p]&&(h[p]!==!0?K=h[p].palette:p==="dark"&&(K={mode:"dark"}));const v=md({...t,palette:K},...r);return v.defaultColorScheme=p,v.colorSchemes=h,v.palette.mode==="light"&&(v.colorSchemes.light={...h.light!==!0&&h.light,palette:v.palette},$3(v,"dark",h.dark)),v.palette.mode==="dark"&&(v.colorSchemes.dark={...h.dark!==!0&&h.dark,palette:v.palette},$3(v,"light",h.light)),v}return!l&&!("light"in h)&&p==="light"&&(h.light=!0),_8({...f,colorSchemes:h,defaultColorScheme:p,...typeof i!="boolean"&&i},...r)}const Id=c4();function os(){const t=yc(Id);return t[lc]||t}function f4(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const zr=t=>f4(t)&&t!=="classes",ye=n4({themeId:lc,defaultTheme:Id,rootShouldForwardProp:zr});function P3(...t){return t.reduce((r,l)=>l==null?r:function(...s){r.apply(this,s),l.apply(this,s)},()=>{})}function z8(t){return q.jsx(vv,{...t,defaultTheme:Id,themeId:lc})}function L8(t){return function(l){return q.jsx(z8,{styles:typeof t=="function"?i=>t({theme:i,...l}):t})}}function U8(){return Fd}const Nt=Yv;function Et(t){return $v(t)}function k8(t){return vt("MuiSvgIcon",t)}yt("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const H8=t=>{const{color:r,fontSize:l,classes:i}=t,s={root:["root",r!=="inherit"&&`color${gt(r)}`,`fontSize${gt(l)}`]};return bt(s,k8,i)},j8=ye("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:l}=t;return[r.root,l.color!=="inherit"&&r[`color${gt(l.color)}`],r[`fontSize${gt(l.fontSize)}`]]}})(Nt(({theme:t})=>({userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:t.transitions?.create?.("fill",{duration:(t.vars??t).transitions?.duration?.shorter}),variants:[{props:r=>!r.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:t.typography?.pxToRem?.(20)||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:t.typography?.pxToRem?.(24)||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:t.typography?.pxToRem?.(35)||"2.1875rem"}},...Object.entries((t.vars??t).palette).filter(([,r])=>r&&r.main).map(([r])=>({props:{color:r},style:{color:(t.vars??t).palette?.[r]?.main}})),{props:{color:"action"},style:{color:(t.vars??t).palette?.action?.active}},{props:{color:"disabled"},style:{color:(t.vars??t).palette?.action?.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}))),gd=R.forwardRef(function(r,l){const i=Et({props:r,name:"MuiSvgIcon"}),{children:s,className:u,color:f="inherit",component:p="svg",fontSize:m="medium",htmlColor:h,inheritViewBox:K=!1,titleAccess:v,viewBox:y="0 0 24 24",...x}=i,E=R.isValidElement(s)&&s.type==="svg",T={...i,color:f,component:p,fontSize:m,instanceFontSize:r.fontSize,inheritViewBox:K,viewBox:y,hasSvgAsChild:E},M={};K||(M.viewBox=y);const _=H8(T);return q.jsxs(j8,{as:p,className:Me(_.root,u),focusable:"false",color:h,"aria-hidden":v?void 0:!0,role:v?"img":void 0,ref:l,...M,...x,...E&&s.props,ownerState:T,children:[E?s.props.children:s,v?q.jsx("title",{children:v}):null]})});gd.muiName="SvgIcon";function Wd(t,r){function l(i,s){return q.jsx(gd,{"data-testid":void 0,ref:s,...i,children:t})}return l.muiName=gd.muiName,R.memo(R.forwardRef(l))}function ss(t,r=166){let l;function i(...s){const u=()=>{t.apply(this,s)};clearTimeout(l),l=setTimeout(u,r)}return i.clear=()=>{clearTimeout(l)},i}function Rn(t){return t&&t.ownerDocument||document}function mr(t){return Rn(t).defaultView||window}function q3(t,r){typeof t=="function"?t(r):t&&(t.current=r)}function vd(t){const{controlled:r,default:l,name:i,state:s="value"}=t,{current:u}=R.useRef(r!==void 0),[f,p]=R.useState(l),m=u?r:f,h=R.useCallback(K=>{u||p(K)},[]);return[m,h]}function rr(t){const r=R.useRef(t);return Nr(()=>{r.current=t}),R.useRef((...l)=>(0,r.current)(...l)).current}function un(...t){const r=R.useRef(void 0),l=R.useCallback(i=>{const s=t.map(u=>{if(u==null)return null;if(typeof u=="function"){const f=u,p=f(i);return typeof p=="function"?p:()=>{f(null)}}return u.current=i,()=>{u.current=null}});return()=>{s.forEach(u=>u?.())}},t);return R.useMemo(()=>t.every(i=>i==null)?null:i=>{r.current&&(r.current(),r.current=void 0),i!=null&&(r.current=l(i))},t)}function $8(t,r){const l=t.charCodeAt(2);return t[0]==="o"&&t[1]==="n"&&l>=65&&l<=90&&typeof r=="function"}function P8(t,r){if(!t)return r;function l(f,p){const m={};return Object.keys(p).forEach(h=>{$8(h,p[h])&&typeof f[h]=="function"&&(m[h]=(...K)=>{f[h](...K),p[h](...K)})}),m}if(typeof t=="function"||typeof r=="function")return f=>{const p=typeof r=="function"?r(f):r,m=typeof t=="function"?t({...f,...p}):t,h=Me(f?.className,p?.className,m?.className),K=l(m,p);return{...p,...m,...K,...!!h&&{className:h},...p?.style&&m?.style&&{style:{...p.style,...m.style}},...p?.sx&&m?.sx&&{sx:[...Array.isArray(p.sx)?p.sx:[p.sx],...Array.isArray(m.sx)?m.sx:[m.sx]]}}};const i=r,s=l(t,i),u=Me(i?.className,t?.className);return{...r,...t,...s,...!!u&&{className:u},...i?.style&&t?.style&&{style:{...i.style,...t.style}},...i?.sx&&t?.sx&&{sx:[...Array.isArray(i.sx)?i.sx:[i.sx],...Array.isArray(t.sx)?t.sx:[t.sx]]}}}function d4(t,r){if(t==null)return{};var l={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(r.indexOf(i)!==-1)continue;l[i]=t[i]}return l}function yd(t,r){return yd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(l,i){return l.__proto__=i,l},yd(t,r)}function p4(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,yd(t,r)}var h4=Nm();const wu=Dm(h4),Y3={disabled:!1},Fu=Tn.createContext(null);var q8=function(r){return r.scrollTop},Ao="unmounted",nl="exited",rl="entering",ri="entered",bd="exiting",Lr=(function(t){p4(r,t);function r(i,s){var u;u=t.call(this,i,s)||this;var f=s,p=f&&!f.isMounting?i.enter:i.appear,m;return u.appearStatus=null,i.in?p?(m=nl,u.appearStatus=rl):m=ri:i.unmountOnExit||i.mountOnEnter?m=Ao:m=nl,u.state={status:m},u.nextCallback=null,u}r.getDerivedStateFromProps=function(s,u){var f=s.in;return f&&u.status===Ao?{status:nl}:null};var l=r.prototype;return l.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},l.componentDidUpdate=function(s){var u=null;if(s!==this.props){var f=this.state.status;this.props.in?f!==rl&&f!==ri&&(u=rl):(f===rl||f===ri)&&(u=bd)}this.updateStatus(!1,u)},l.componentWillUnmount=function(){this.cancelNextCallback()},l.getTimeouts=function(){var s=this.props.timeout,u,f,p;return u=f=p=s,s!=null&&typeof s!="number"&&(u=s.exit,f=s.enter,p=s.appear!==void 0?s.appear:f),{exit:u,enter:f,appear:p}},l.updateStatus=function(s,u){if(s===void 0&&(s=!1),u!==null)if(this.cancelNextCallback(),u===rl){if(this.props.unmountOnExit||this.props.mountOnEnter){var f=this.props.nodeRef?this.props.nodeRef.current:wu.findDOMNode(this);f&&q8(f)}this.performEnter(s)}else this.performExit();else this.props.unmountOnExit&&this.state.status===nl&&this.setState({status:Ao})},l.performEnter=function(s){var u=this,f=this.props.enter,p=this.context?this.context.isMounting:s,m=this.props.nodeRef?[p]:[wu.findDOMNode(this),p],h=m[0],K=m[1],v=this.getTimeouts(),y=p?v.appear:v.enter;if(!s&&!f||Y3.disabled){this.safeSetState({status:ri},function(){u.props.onEntered(h)});return}this.props.onEnter(h,K),this.safeSetState({status:rl},function(){u.props.onEntering(h,K),u.onTransitionEnd(y,function(){u.safeSetState({status:ri},function(){u.props.onEntered(h,K)})})})},l.performExit=function(){var s=this,u=this.props.exit,f=this.getTimeouts(),p=this.props.nodeRef?void 0:wu.findDOMNode(this);if(!u||Y3.disabled){this.safeSetState({status:nl},function(){s.props.onExited(p)});return}this.props.onExit(p),this.safeSetState({status:bd},function(){s.props.onExiting(p),s.onTransitionEnd(f.exit,function(){s.safeSetState({status:nl},function(){s.props.onExited(p)})})})},l.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},l.safeSetState=function(s,u){u=this.setNextCallback(u),this.setState(s,u)},l.setNextCallback=function(s){var u=this,f=!0;return this.nextCallback=function(p){f&&(f=!1,u.nextCallback=null,s(p))},this.nextCallback.cancel=function(){f=!1},this.nextCallback},l.onTransitionEnd=function(s,u){this.setNextCallback(u);var f=this.props.nodeRef?this.props.nodeRef.current:wu.findDOMNode(this),p=s==null&&!this.props.addEndListener;if(!f||p){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var m=this.props.nodeRef?[this.nextCallback]:[f,this.nextCallback],h=m[0],K=m[1];this.props.addEndListener(h,K)}s!=null&&setTimeout(this.nextCallback,s)},l.render=function(){var s=this.state.status;if(s===Ao)return null;var u=this.props,f=u.children;u.in,u.mountOnEnter,u.unmountOnExit,u.appear,u.enter,u.exit,u.timeout,u.addEndListener,u.onEnter,u.onEntering,u.onEntered,u.onExit,u.onExiting,u.onExited,u.nodeRef;var p=d4(u,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Tn.createElement(Fu.Provider,{value:null},typeof f=="function"?f(s,p):Tn.cloneElement(Tn.Children.only(f),p))},r})(Tn.Component);Lr.contextType=Fu;Lr.propTypes={};function ni(){}Lr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ni,onEntering:ni,onEntered:ni,onExit:ni,onExiting:ni,onExited:ni};Lr.UNMOUNTED=Ao;Lr.EXITED=nl;Lr.ENTERING=rl;Lr.ENTERED=ri;Lr.EXITING=bd;function Y8(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Jd(t,r){var l=function(u){return r&&R.isValidElement(u)?r(u):u},i=Object.create(null);return t&&R.Children.map(t,function(s){return s}).forEach(function(s){i[s.key]=l(s)}),i}function V8(t,r){t=t||{},r=r||{};function l(K){return K in r?r[K]:t[K]}var i=Object.create(null),s=[];for(var u in t)u in r?s.length&&(i[u]=s,s=[]):s.push(u);var f,p={};for(var m in r){if(i[m])for(f=0;f<i[m].length;f++){var h=i[m][f];p[i[m][f]]=l(h)}p[m]=l(m)}for(f=0;f<s.length;f++)p[s[f]]=l(s[f]);return p}function ll(t,r,l){return l[r]!=null?l[r]:t.props[r]}function G8(t,r){return Jd(t.children,function(l){return R.cloneElement(l,{onExited:r.bind(null,l),in:!0,appear:ll(l,"appear",t),enter:ll(l,"enter",t),exit:ll(l,"exit",t)})})}function F8(t,r,l){var i=Jd(t.children),s=V8(r,i);return Object.keys(s).forEach(function(u){var f=s[u];if(R.isValidElement(f)){var p=u in r,m=u in i,h=r[u],K=R.isValidElement(h)&&!h.props.in;m&&(!p||K)?s[u]=R.cloneElement(f,{onExited:l.bind(null,f),in:!0,exit:ll(f,"exit",t),enter:ll(f,"enter",t)}):!m&&p&&!K?s[u]=R.cloneElement(f,{in:!1}):m&&p&&R.isValidElement(h)&&(s[u]=R.cloneElement(f,{onExited:l.bind(null,f),in:h.props.in,exit:ll(f,"exit",t),enter:ll(f,"enter",t)}))}}),s}var X8=Object.values||function(t){return Object.keys(t).map(function(r){return t[r]})},Z8={component:"div",childFactory:function(r){return r}},e1=(function(t){p4(r,t);function r(i,s){var u;u=t.call(this,i,s)||this;var f=u.handleExited.bind(Y8(u));return u.state={contextValue:{isMounting:!0},handleExited:f,firstRender:!0},u}var l=r.prototype;return l.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},l.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(s,u){var f=u.children,p=u.handleExited,m=u.firstRender;return{children:m?G8(s,p):F8(s,f,p),firstRender:!1}},l.handleExited=function(s,u){var f=Jd(this.props.children);s.key in f||(s.props.onExited&&s.props.onExited(u),this.mounted&&this.setState(function(p){var m=Pu({},p.children);return delete m[s.key],{children:m}}))},l.render=function(){var s=this.props,u=s.component,f=s.childFactory,p=d4(s,["component","childFactory"]),m=this.state.contextValue,h=X8(this.state.children).map(f);return delete p.appear,delete p.enter,delete p.exit,u===null?Tn.createElement(Fu.Provider,{value:m},h):Tn.createElement(Fu.Provider,{value:m},Tn.createElement(u,p,h))},r})(Tn.Component);e1.propTypes={};e1.defaultProps=Z8;const V3={};function m4(t,r){const l=R.useRef(V3);return l.current===V3&&(l.current=t(r)),l}const Q8=[];function I8(t){R.useEffect(t,Q8)}class Tc{static create(){return new Tc}currentId=null;start(r,l){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,l()},r)}clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear}function ai(){const t=m4(Tc.create).current;return I8(t.disposeEffect),t}const K4=t=>t.scrollTop;function Xu(t,r){const{timeout:l,easing:i,style:s={}}=t;return{duration:s.transitionDuration??(typeof l=="number"?l:l[r.mode]||0),easing:s.transitionTimingFunction??(typeof i=="object"?i[r.mode]:i),delay:s.transitionDelay}}function W8(t){return vt("MuiPaper",t)}yt("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const J8=t=>{const{square:r,elevation:l,variant:i,classes:s}=t,u={root:["root",i,!r&&"rounded",i==="elevation"&&`elevation${l}`]};return bt(u,W8,s)},e7=ye("div",{name:"MuiPaper",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:l}=t;return[r.root,r[l.variant],!l.square&&r.rounded,l.variant==="elevation"&&r[`elevation${l.elevation}`]]}})(Nt(({theme:t})=>({backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow"),variants:[{props:({ownerState:r})=>!r.square,style:{borderRadius:t.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(t.vars||t).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),t7=R.forwardRef(function(r,l){const i=Et({props:r,name:"MuiPaper"}),s=os(),{className:u,component:f="div",elevation:p=1,square:m=!1,variant:h="elevation",...K}=i,v={...i,component:f,elevation:p,square:m,variant:h},y=J8(v);return q.jsx(e7,{as:f,ownerState:v,className:Me(y.root,u),ref:l,...K,style:{...h==="elevation"&&{"--Paper-shadow":(s.vars||s).shadows[p],...s.vars&&{"--Paper-overlay":s.vars.overlays?.[p]},...!s.vars&&s.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${Gu("#fff",Kd(p))}, ${Gu("#fff",Kd(p))})`}},...K.style}})});function Zu(t){return typeof t=="string"}function g4(t,r,l){return t===void 0||Zu(t)?r:{...r,ownerState:{...r.ownerState,...l}}}function v4(t,r,l){return typeof t=="function"?t(r,l):t}function y4(t,r=[]){if(t===void 0)return{};const l={};return Object.keys(t).filter(i=>i.match(/^on[A-Z]/)&&typeof t[i]=="function"&&!r.includes(i)).forEach(i=>{l[i]=t[i]}),l}function G3(t){if(t===void 0)return{};const r={};return Object.keys(t).filter(l=>!(l.match(/^on[A-Z]/)&&typeof t[l]=="function")).forEach(l=>{r[l]=t[l]}),r}function b4(t){const{getSlotProps:r,additionalProps:l,externalSlotProps:i,externalForwardedProps:s,className:u}=t;if(!r){const x=Me(l?.className,u,s?.className,i?.className),E={...l?.style,...s?.style,...i?.style},T={...l,...s,...i};return x.length>0&&(T.className=x),Object.keys(E).length>0&&(T.style=E),{props:T,internalRef:void 0}}const f=y4({...s,...i}),p=G3(i),m=G3(s),h=r(f),K=Me(h?.className,l?.className,u,s?.className,i?.className),v={...h?.style,...l?.style,...s?.style,...i?.style},y={...h,...l,...m,...p};return K.length>0&&(y.className=K),Object.keys(v).length>0&&(y.style=v),{props:y,internalRef:h.ref}}function Tt(t,r){const{className:l,elementType:i,ownerState:s,externalForwardedProps:u,internalForwardedProps:f,shouldForwardComponentProp:p=!1,...m}=r,{component:h,slots:K={[t]:void 0},slotProps:v={[t]:void 0},...y}=u,x=K[t]||i,E=v4(v[t],s),{props:{component:T,...M},internalRef:_}=b4({className:l,...m,externalForwardedProps:t==="root"?y:void 0,externalSlotProps:E}),L=un(_,E?.ref,r.ref),O=t==="root"?T||h:T,w=g4(x,{...t==="root"&&!h&&!K[t]&&f,...t!=="root"&&!K[t]&&f,...M,...O&&!p&&{as:O},...O&&p&&{component:O},ref:L},s);return[x,w]}function Qu(t){try{return t.matches(":focus-visible")}catch{}return!1}class Iu{static create(){return new Iu}static use(){const r=m4(Iu.create).current,[l,i]=R.useState(!1);return r.shouldMount=l,r.setShouldMount=i,R.useEffect(r.mountEffect,[l]),r}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=r7(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...r){this.mount().then(()=>this.ref.current?.start(...r))}stop(...r){this.mount().then(()=>this.ref.current?.stop(...r))}pulsate(...r){this.mount().then(()=>this.ref.current?.pulsate(...r))}}function n7(){return Iu.use()}function r7(){let t,r;const l=new Promise((i,s)=>{t=i,r=s});return l.resolve=t,l.reject=r,l}function a7(t){const{className:r,classes:l,pulsate:i=!1,rippleX:s,rippleY:u,rippleSize:f,in:p,onExited:m,timeout:h}=t,[K,v]=R.useState(!1),y=Me(r,l.ripple,l.rippleVisible,i&&l.ripplePulsate),x={width:f,height:f,top:-(f/2)+u,left:-(f/2)+s},E=Me(l.child,K&&l.childLeaving,i&&l.childPulsate);return!p&&!K&&v(!0),R.useEffect(()=>{if(!p&&m!=null){const T=setTimeout(m,h);return()=>{clearTimeout(T)}}},[m,p,h]),q.jsx("span",{className:y,style:x,children:q.jsx("span",{className:E})})}const tr=yt("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Sd=550,l7=80,i7=qd`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,o7=qd`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,s7=qd`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,u7=ye("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),c7=ye(a7,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${tr.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${i7};
    animation-duration: ${Sd}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${tr.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${tr.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${tr.childLeaving} {
    opacity: 0;
    animation-name: ${o7};
    animation-duration: ${Sd}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${tr.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${s7};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,f7=R.forwardRef(function(r,l){const i=Et({props:r,name:"MuiTouchRipple"}),{center:s=!1,classes:u={},className:f,...p}=i,[m,h]=R.useState([]),K=R.useRef(0),v=R.useRef(null);R.useEffect(()=>{v.current&&(v.current(),v.current=null)},[m]);const y=R.useRef(!1),x=ai(),E=R.useRef(null),T=R.useRef(null),M=R.useCallback(w=>{const{pulsate:A,rippleX:B,rippleY:k,rippleSize:Z,cb:W}=w;h(ee=>[...ee,q.jsx(c7,{classes:{ripple:Me(u.ripple,tr.ripple),rippleVisible:Me(u.rippleVisible,tr.rippleVisible),ripplePulsate:Me(u.ripplePulsate,tr.ripplePulsate),child:Me(u.child,tr.child),childLeaving:Me(u.childLeaving,tr.childLeaving),childPulsate:Me(u.childPulsate,tr.childPulsate)},timeout:Sd,pulsate:A,rippleX:B,rippleY:k,rippleSize:Z},K.current)]),K.current+=1,v.current=W},[u]),_=R.useCallback((w={},A={},B=()=>{})=>{const{pulsate:k=!1,center:Z=s||A.pulsate,fakeElement:W=!1}=A;if(w?.type==="mousedown"&&y.current){y.current=!1;return}w?.type==="touchstart"&&(y.current=!0);const ee=W?null:T.current,I=ee?ee.getBoundingClientRect():{width:0,height:0,left:0,top:0};let S,F,P;if(Z||w===void 0||w.clientX===0&&w.clientY===0||!w.clientX&&!w.touches)S=Math.round(I.width/2),F=Math.round(I.height/2);else{const{clientX:j,clientY:C}=w.touches&&w.touches.length>0?w.touches[0]:w;S=Math.round(j-I.left),F=Math.round(C-I.top)}if(Z)P=Math.sqrt((2*I.width**2+I.height**2)/3),P%2===0&&(P+=1);else{const j=Math.max(Math.abs((ee?ee.clientWidth:0)-S),S)*2+2,C=Math.max(Math.abs((ee?ee.clientHeight:0)-F),F)*2+2;P=Math.sqrt(j**2+C**2)}w?.touches?E.current===null&&(E.current=()=>{M({pulsate:k,rippleX:S,rippleY:F,rippleSize:P,cb:B})},x.start(l7,()=>{E.current&&(E.current(),E.current=null)})):M({pulsate:k,rippleX:S,rippleY:F,rippleSize:P,cb:B})},[s,M,x]),L=R.useCallback(()=>{_({},{pulsate:!0})},[_]),O=R.useCallback((w,A)=>{if(x.clear(),w?.type==="touchend"&&E.current){E.current(),E.current=null,x.start(0,()=>{O(w,A)});return}E.current=null,h(B=>B.length>0?B.slice(1):B),v.current=A},[x]);return R.useImperativeHandle(l,()=>({pulsate:L,start:_,stop:O}),[L,_,O]),q.jsx(u7,{className:Me(tr.root,u.root,f),ref:T,...p,children:q.jsx(e1,{component:null,exit:!0,children:m})})});function d7(t){return vt("MuiButtonBase",t)}const p7=yt("MuiButtonBase",["root","disabled","focusVisible"]),h7=t=>{const{disabled:r,focusVisible:l,focusVisibleClassName:i,classes:s}=t,f=bt({root:["root",r&&"disabled",l&&"focusVisible"]},d7,s);return l&&i&&(f.root+=` ${i}`),f},m7=ye("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${p7.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),S4=R.forwardRef(function(r,l){const i=Et({props:r,name:"MuiButtonBase"}),{action:s,centerRipple:u=!1,children:f,className:p,component:m="button",disabled:h=!1,disableRipple:K=!1,disableTouchRipple:v=!1,focusRipple:y=!1,focusVisibleClassName:x,LinkComponent:E="a",onBlur:T,onClick:M,onContextMenu:_,onDragLeave:L,onFocus:O,onFocusVisible:w,onKeyDown:A,onKeyUp:B,onMouseDown:k,onMouseLeave:Z,onMouseUp:W,onTouchEnd:ee,onTouchMove:I,onTouchStart:S,tabIndex:F=0,TouchRippleProps:P,touchRippleRef:j,type:C,...V}=i,oe=R.useRef(null),te=n7(),D=un(te.ref,j),[X,se]=R.useState(!1);h&&X&&se(!1),R.useImperativeHandle(s,()=>({focusVisible:()=>{se(!0),oe.current.focus()}}),[]);const ae=te.shouldMount&&!K&&!h;R.useEffect(()=>{X&&y&&!K&&te.pulsate()},[K,y,X,te]);const ue=ta(te,"start",k,v),fe=ta(te,"stop",_,v),ce=ta(te,"stop",L,v),ze=ta(te,"stop",W,v),be=ta(te,"stop",me=>{X&&me.preventDefault(),Z&&Z(me)},v),Le=ta(te,"start",S,v),Se=ta(te,"stop",ee,v),Ne=ta(te,"stop",I,v),Re=ta(te,"stop",me=>{Qu(me.target)||se(!1),T&&T(me)},!1),lt=rr(me=>{oe.current||(oe.current=me.currentTarget),Qu(me.target)&&(se(!0),w&&w(me)),O&&O(me)}),Ce=()=>{const me=oe.current;return m&&m!=="button"&&!(me.tagName==="A"&&me.href)},Ve=rr(me=>{y&&!me.repeat&&X&&me.key===" "&&te.stop(me,()=>{te.start(me)}),me.target===me.currentTarget&&Ce()&&me.key===" "&&me.preventDefault(),A&&A(me),me.target===me.currentTarget&&Ce()&&me.key==="Enter"&&!h&&(me.preventDefault(),M&&M(me))}),Ct=rr(me=>{y&&me.key===" "&&X&&!me.defaultPrevented&&te.stop(me,()=>{te.pulsate(me)}),B&&B(me),M&&me.target===me.currentTarget&&Ce()&&me.key===" "&&!me.defaultPrevented&&M(me)});let _e=m;_e==="button"&&(V.href||V.to)&&(_e=E);const Ge={};_e==="button"?(Ge.type=C===void 0?"button":C,Ge.disabled=h):(!V.href&&!V.to&&(Ge.role="button"),h&&(Ge["aria-disabled"]=h));const St=un(l,oe),Xe={...i,centerRipple:u,component:m,disabled:h,disableRipple:K,disableTouchRipple:v,focusRipple:y,tabIndex:F,focusVisible:X},je=h7(Xe);return q.jsxs(m7,{as:_e,className:Me(je.root,p),ownerState:Xe,onBlur:Re,onClick:M,onContextMenu:fe,onFocus:lt,onKeyDown:Ve,onKeyUp:Ct,onMouseDown:ue,onMouseLeave:be,onMouseUp:ze,onDragLeave:ce,onTouchEnd:Se,onTouchMove:Ne,onTouchStart:Le,ref:St,tabIndex:h?-1:F,type:C,...Ge,...V,children:[f,ae?q.jsx(f7,{ref:D,center:u,...P}):null]})});function ta(t,r,l,i=!1){return rr(s=>(l&&l(s),i||t[r](s),!0))}function K7(t){return typeof t.main=="string"}function g7(t,r=[]){if(!K7(t))return!1;for(const l of r)if(!t.hasOwnProperty(l)||typeof t[l]!="string")return!1;return!0}function us(t=[]){return([,r])=>r&&g7(r,t)}function v7(t){return vt("MuiTypography",t)}yt("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const y7={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},b7=U8(),S7=t=>{const{align:r,gutterBottom:l,noWrap:i,paragraph:s,variant:u,classes:f}=t,p={root:["root",u,t.align!=="inherit"&&`align${gt(r)}`,l&&"gutterBottom",i&&"noWrap",s&&"paragraph"]};return bt(p,v7,f)},x7=ye("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:l}=t;return[r.root,l.variant&&r[l.variant],l.align!=="inherit"&&r[`align${gt(l.align)}`],l.noWrap&&r.noWrap,l.gutterBottom&&r.gutterBottom,l.paragraph&&r.paragraph]}})(Nt(({theme:t})=>({margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(t.typography).filter(([r,l])=>r!=="inherit"&&l&&typeof l=="object").map(([r,l])=>({props:{variant:r},style:l})),...Object.entries(t.palette).filter(us()).map(([r])=>({props:{color:r},style:{color:(t.vars||t).palette[r].main}})),...Object.entries(t.palette?.text||{}).filter(([,r])=>typeof r=="string").map(([r])=>({props:{color:`text${gt(r)}`},style:{color:(t.vars||t).palette.text[r]}})),{props:({ownerState:r})=>r.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:r})=>r.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:r})=>r.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:r})=>r.paragraph,style:{marginBottom:16}}]}))),F3={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},kn=R.forwardRef(function(r,l){const{color:i,...s}=Et({props:r,name:"MuiTypography"}),u=!y7[i],f=b7({...s,...u&&{color:i}}),{align:p="inherit",className:m,component:h,gutterBottom:K=!1,noWrap:v=!1,paragraph:y=!1,variant:x="body1",variantMapping:E=F3,...T}=f,M={...f,align:p,color:i,className:m,component:h,gutterBottom:K,noWrap:v,paragraph:y,variant:x,variantMapping:E},_=h||(y?"p":E[x]||F3[x])||"span",L=S7(M);return q.jsx(x7,{as:_,ref:l,className:Me(L.root,m),...T,ownerState:M,style:{...p!=="inherit"&&{"--Typography-textAlign":p},...T.style}})});var En="top",lr="bottom",ir="right",Cn="left",t1="auto",cs=[En,lr,ir,Cn],ci="start",Yo="end",T7="clippingParents",x4="viewport",So="popper",E7="reference",X3=cs.reduce(function(t,r){return t.concat([r+"-"+ci,r+"-"+Yo])},[]),T4=[].concat(cs,[t1]).reduce(function(t,r){return t.concat([r,r+"-"+ci,r+"-"+Yo])},[]),C7="beforeRead",w7="read",R7="afterRead",A7="beforeMain",O7="main",M7="afterMain",D7="beforeWrite",N7="write",B7="afterWrite",_7=[C7,w7,R7,A7,O7,M7,D7,N7,B7];function Br(t){return t?(t.nodeName||"").toLowerCase():null}function $n(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var r=t.ownerDocument;return r&&r.defaultView||window}return t}function ul(t){var r=$n(t).Element;return t instanceof r||t instanceof Element}function ar(t){var r=$n(t).HTMLElement;return t instanceof r||t instanceof HTMLElement}function n1(t){if(typeof ShadowRoot>"u")return!1;var r=$n(t).ShadowRoot;return t instanceof r||t instanceof ShadowRoot}function z7(t){var r=t.state;Object.keys(r.elements).forEach(function(l){var i=r.styles[l]||{},s=r.attributes[l]||{},u=r.elements[l];!ar(u)||!Br(u)||(Object.assign(u.style,i),Object.keys(s).forEach(function(f){var p=s[f];p===!1?u.removeAttribute(f):u.setAttribute(f,p===!0?"":p)}))})}function L7(t){var r=t.state,l={popper:{position:r.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(r.elements.popper.style,l.popper),r.styles=l,r.elements.arrow&&Object.assign(r.elements.arrow.style,l.arrow),function(){Object.keys(r.elements).forEach(function(i){var s=r.elements[i],u=r.attributes[i]||{},f=Object.keys(r.styles.hasOwnProperty(i)?r.styles[i]:l[i]),p=f.reduce(function(m,h){return m[h]="",m},{});!ar(s)||!Br(s)||(Object.assign(s.style,p),Object.keys(u).forEach(function(m){s.removeAttribute(m)}))})}}const U7={name:"applyStyles",enabled:!0,phase:"write",fn:z7,effect:L7,requires:["computeStyles"]};function Dr(t){return t.split("-")[0]}var il=Math.max,Wu=Math.min,fi=Math.round;function xd(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(r){return r.brand+"/"+r.version}).join(" "):navigator.userAgent}function E4(){return!/^((?!chrome|android).)*safari/i.test(xd())}function di(t,r,l){r===void 0&&(r=!1),l===void 0&&(l=!1);var i=t.getBoundingClientRect(),s=1,u=1;r&&ar(t)&&(s=t.offsetWidth>0&&fi(i.width)/t.offsetWidth||1,u=t.offsetHeight>0&&fi(i.height)/t.offsetHeight||1);var f=ul(t)?$n(t):window,p=f.visualViewport,m=!E4()&&l,h=(i.left+(m&&p?p.offsetLeft:0))/s,K=(i.top+(m&&p?p.offsetTop:0))/u,v=i.width/s,y=i.height/u;return{width:v,height:y,top:K,right:h+v,bottom:K+y,left:h,x:h,y:K}}function r1(t){var r=di(t),l=t.offsetWidth,i=t.offsetHeight;return Math.abs(r.width-l)<=1&&(l=r.width),Math.abs(r.height-i)<=1&&(i=r.height),{x:t.offsetLeft,y:t.offsetTop,width:l,height:i}}function C4(t,r){var l=r.getRootNode&&r.getRootNode();if(t.contains(r))return!0;if(l&&n1(l)){var i=r;do{if(i&&t.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function aa(t){return $n(t).getComputedStyle(t)}function k7(t){return["table","td","th"].indexOf(Br(t))>=0}function Na(t){return((ul(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ec(t){return Br(t)==="html"?t:t.assignedSlot||t.parentNode||(n1(t)?t.host:null)||Na(t)}function Z3(t){return!ar(t)||aa(t).position==="fixed"?null:t.offsetParent}function H7(t){var r=/firefox/i.test(xd()),l=/Trident/i.test(xd());if(l&&ar(t)){var i=aa(t);if(i.position==="fixed")return null}var s=Ec(t);for(n1(s)&&(s=s.host);ar(s)&&["html","body"].indexOf(Br(s))<0;){var u=aa(s);if(u.transform!=="none"||u.perspective!=="none"||u.contain==="paint"||["transform","perspective"].indexOf(u.willChange)!==-1||r&&u.willChange==="filter"||r&&u.filter&&u.filter!=="none")return s;s=s.parentNode}return null}function fs(t){for(var r=$n(t),l=Z3(t);l&&k7(l)&&aa(l).position==="static";)l=Z3(l);return l&&(Br(l)==="html"||Br(l)==="body"&&aa(l).position==="static")?r:l||H7(t)||r}function a1(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function No(t,r,l){return il(t,Wu(r,l))}function j7(t,r,l){var i=No(t,r,l);return i>l?l:i}function w4(){return{top:0,right:0,bottom:0,left:0}}function R4(t){return Object.assign({},w4(),t)}function A4(t,r){return r.reduce(function(l,i){return l[i]=t,l},{})}var $7=function(r,l){return r=typeof r=="function"?r(Object.assign({},l.rects,{placement:l.placement})):r,R4(typeof r!="number"?r:A4(r,cs))};function P7(t){var r,l=t.state,i=t.name,s=t.options,u=l.elements.arrow,f=l.modifiersData.popperOffsets,p=Dr(l.placement),m=a1(p),h=[Cn,ir].indexOf(p)>=0,K=h?"height":"width";if(!(!u||!f)){var v=$7(s.padding,l),y=r1(u),x=m==="y"?En:Cn,E=m==="y"?lr:ir,T=l.rects.reference[K]+l.rects.reference[m]-f[m]-l.rects.popper[K],M=f[m]-l.rects.reference[m],_=fs(u),L=_?m==="y"?_.clientHeight||0:_.clientWidth||0:0,O=T/2-M/2,w=v[x],A=L-y[K]-v[E],B=L/2-y[K]/2+O,k=No(w,B,A),Z=m;l.modifiersData[i]=(r={},r[Z]=k,r.centerOffset=k-B,r)}}function q7(t){var r=t.state,l=t.options,i=l.element,s=i===void 0?"[data-popper-arrow]":i;s!=null&&(typeof s=="string"&&(s=r.elements.popper.querySelector(s),!s)||C4(r.elements.popper,s)&&(r.elements.arrow=s))}const Y7={name:"arrow",enabled:!0,phase:"main",fn:P7,effect:q7,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function pi(t){return t.split("-")[1]}var V7={top:"auto",right:"auto",bottom:"auto",left:"auto"};function G7(t,r){var l=t.x,i=t.y,s=r.devicePixelRatio||1;return{x:fi(l*s)/s||0,y:fi(i*s)/s||0}}function Q3(t){var r,l=t.popper,i=t.popperRect,s=t.placement,u=t.variation,f=t.offsets,p=t.position,m=t.gpuAcceleration,h=t.adaptive,K=t.roundOffsets,v=t.isFixed,y=f.x,x=y===void 0?0:y,E=f.y,T=E===void 0?0:E,M=typeof K=="function"?K({x,y:T}):{x,y:T};x=M.x,T=M.y;var _=f.hasOwnProperty("x"),L=f.hasOwnProperty("y"),O=Cn,w=En,A=window;if(h){var B=fs(l),k="clientHeight",Z="clientWidth";if(B===$n(l)&&(B=Na(l),aa(B).position!=="static"&&p==="absolute"&&(k="scrollHeight",Z="scrollWidth")),B=B,s===En||(s===Cn||s===ir)&&u===Yo){w=lr;var W=v&&B===A&&A.visualViewport?A.visualViewport.height:B[k];T-=W-i.height,T*=m?1:-1}if(s===Cn||(s===En||s===lr)&&u===Yo){O=ir;var ee=v&&B===A&&A.visualViewport?A.visualViewport.width:B[Z];x-=ee-i.width,x*=m?1:-1}}var I=Object.assign({position:p},h&&V7),S=K===!0?G7({x,y:T},$n(l)):{x,y:T};if(x=S.x,T=S.y,m){var F;return Object.assign({},I,(F={},F[w]=L?"0":"",F[O]=_?"0":"",F.transform=(A.devicePixelRatio||1)<=1?"translate("+x+"px, "+T+"px)":"translate3d("+x+"px, "+T+"px, 0)",F))}return Object.assign({},I,(r={},r[w]=L?T+"px":"",r[O]=_?x+"px":"",r.transform="",r))}function F7(t){var r=t.state,l=t.options,i=l.gpuAcceleration,s=i===void 0?!0:i,u=l.adaptive,f=u===void 0?!0:u,p=l.roundOffsets,m=p===void 0?!0:p,h={placement:Dr(r.placement),variation:pi(r.placement),popper:r.elements.popper,popperRect:r.rects.popper,gpuAcceleration:s,isFixed:r.options.strategy==="fixed"};r.modifiersData.popperOffsets!=null&&(r.styles.popper=Object.assign({},r.styles.popper,Q3(Object.assign({},h,{offsets:r.modifiersData.popperOffsets,position:r.options.strategy,adaptive:f,roundOffsets:m})))),r.modifiersData.arrow!=null&&(r.styles.arrow=Object.assign({},r.styles.arrow,Q3(Object.assign({},h,{offsets:r.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:m})))),r.attributes.popper=Object.assign({},r.attributes.popper,{"data-popper-placement":r.placement})}const X7={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:F7,data:{}};var Ru={passive:!0};function Z7(t){var r=t.state,l=t.instance,i=t.options,s=i.scroll,u=s===void 0?!0:s,f=i.resize,p=f===void 0?!0:f,m=$n(r.elements.popper),h=[].concat(r.scrollParents.reference,r.scrollParents.popper);return u&&h.forEach(function(K){K.addEventListener("scroll",l.update,Ru)}),p&&m.addEventListener("resize",l.update,Ru),function(){u&&h.forEach(function(K){K.removeEventListener("scroll",l.update,Ru)}),p&&m.removeEventListener("resize",l.update,Ru)}}const Q7={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Z7,data:{}};var I7={left:"right",right:"left",bottom:"top",top:"bottom"};function Hu(t){return t.replace(/left|right|bottom|top/g,function(r){return I7[r]})}var W7={start:"end",end:"start"};function I3(t){return t.replace(/start|end/g,function(r){return W7[r]})}function l1(t){var r=$n(t),l=r.pageXOffset,i=r.pageYOffset;return{scrollLeft:l,scrollTop:i}}function i1(t){return di(Na(t)).left+l1(t).scrollLeft}function J7(t,r){var l=$n(t),i=Na(t),s=l.visualViewport,u=i.clientWidth,f=i.clientHeight,p=0,m=0;if(s){u=s.width,f=s.height;var h=E4();(h||!h&&r==="fixed")&&(p=s.offsetLeft,m=s.offsetTop)}return{width:u,height:f,x:p+i1(t),y:m}}function ey(t){var r,l=Na(t),i=l1(t),s=(r=t.ownerDocument)==null?void 0:r.body,u=il(l.scrollWidth,l.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),f=il(l.scrollHeight,l.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),p=-i.scrollLeft+i1(t),m=-i.scrollTop;return aa(s||l).direction==="rtl"&&(p+=il(l.clientWidth,s?s.clientWidth:0)-u),{width:u,height:f,x:p,y:m}}function o1(t){var r=aa(t),l=r.overflow,i=r.overflowX,s=r.overflowY;return/auto|scroll|overlay|hidden/.test(l+s+i)}function O4(t){return["html","body","#document"].indexOf(Br(t))>=0?t.ownerDocument.body:ar(t)&&o1(t)?t:O4(Ec(t))}function Bo(t,r){var l;r===void 0&&(r=[]);var i=O4(t),s=i===((l=t.ownerDocument)==null?void 0:l.body),u=$n(i),f=s?[u].concat(u.visualViewport||[],o1(i)?i:[]):i,p=r.concat(f);return s?p:p.concat(Bo(Ec(f)))}function Td(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function ty(t,r){var l=di(t,!1,r==="fixed");return l.top=l.top+t.clientTop,l.left=l.left+t.clientLeft,l.bottom=l.top+t.clientHeight,l.right=l.left+t.clientWidth,l.width=t.clientWidth,l.height=t.clientHeight,l.x=l.left,l.y=l.top,l}function W3(t,r,l){return r===x4?Td(J7(t,l)):ul(r)?ty(r,l):Td(ey(Na(t)))}function ny(t){var r=Bo(Ec(t)),l=["absolute","fixed"].indexOf(aa(t).position)>=0,i=l&&ar(t)?fs(t):t;return ul(i)?r.filter(function(s){return ul(s)&&C4(s,i)&&Br(s)!=="body"}):[]}function ry(t,r,l,i){var s=r==="clippingParents"?ny(t):[].concat(r),u=[].concat(s,[l]),f=u[0],p=u.reduce(function(m,h){var K=W3(t,h,i);return m.top=il(K.top,m.top),m.right=Wu(K.right,m.right),m.bottom=Wu(K.bottom,m.bottom),m.left=il(K.left,m.left),m},W3(t,f,i));return p.width=p.right-p.left,p.height=p.bottom-p.top,p.x=p.left,p.y=p.top,p}function M4(t){var r=t.reference,l=t.element,i=t.placement,s=i?Dr(i):null,u=i?pi(i):null,f=r.x+r.width/2-l.width/2,p=r.y+r.height/2-l.height/2,m;switch(s){case En:m={x:f,y:r.y-l.height};break;case lr:m={x:f,y:r.y+r.height};break;case ir:m={x:r.x+r.width,y:p};break;case Cn:m={x:r.x-l.width,y:p};break;default:m={x:r.x,y:r.y}}var h=s?a1(s):null;if(h!=null){var K=h==="y"?"height":"width";switch(u){case ci:m[h]=m[h]-(r[K]/2-l[K]/2);break;case Yo:m[h]=m[h]+(r[K]/2-l[K]/2);break}}return m}function Vo(t,r){r===void 0&&(r={});var l=r,i=l.placement,s=i===void 0?t.placement:i,u=l.strategy,f=u===void 0?t.strategy:u,p=l.boundary,m=p===void 0?T7:p,h=l.rootBoundary,K=h===void 0?x4:h,v=l.elementContext,y=v===void 0?So:v,x=l.altBoundary,E=x===void 0?!1:x,T=l.padding,M=T===void 0?0:T,_=R4(typeof M!="number"?M:A4(M,cs)),L=y===So?E7:So,O=t.rects.popper,w=t.elements[E?L:y],A=ry(ul(w)?w:w.contextElement||Na(t.elements.popper),m,K,f),B=di(t.elements.reference),k=M4({reference:B,element:O,placement:s}),Z=Td(Object.assign({},O,k)),W=y===So?Z:B,ee={top:A.top-W.top+_.top,bottom:W.bottom-A.bottom+_.bottom,left:A.left-W.left+_.left,right:W.right-A.right+_.right},I=t.modifiersData.offset;if(y===So&&I){var S=I[s];Object.keys(ee).forEach(function(F){var P=[ir,lr].indexOf(F)>=0?1:-1,j=[En,lr].indexOf(F)>=0?"y":"x";ee[F]+=S[j]*P})}return ee}function ay(t,r){r===void 0&&(r={});var l=r,i=l.placement,s=l.boundary,u=l.rootBoundary,f=l.padding,p=l.flipVariations,m=l.allowedAutoPlacements,h=m===void 0?T4:m,K=pi(i),v=K?p?X3:X3.filter(function(E){return pi(E)===K}):cs,y=v.filter(function(E){return h.indexOf(E)>=0});y.length===0&&(y=v);var x=y.reduce(function(E,T){return E[T]=Vo(t,{placement:T,boundary:s,rootBoundary:u,padding:f})[Dr(T)],E},{});return Object.keys(x).sort(function(E,T){return x[E]-x[T]})}function ly(t){if(Dr(t)===t1)return[];var r=Hu(t);return[I3(t),r,I3(r)]}function iy(t){var r=t.state,l=t.options,i=t.name;if(!r.modifiersData[i]._skip){for(var s=l.mainAxis,u=s===void 0?!0:s,f=l.altAxis,p=f===void 0?!0:f,m=l.fallbackPlacements,h=l.padding,K=l.boundary,v=l.rootBoundary,y=l.altBoundary,x=l.flipVariations,E=x===void 0?!0:x,T=l.allowedAutoPlacements,M=r.options.placement,_=Dr(M),L=_===M,O=m||(L||!E?[Hu(M)]:ly(M)),w=[M].concat(O).reduce(function(ue,fe){return ue.concat(Dr(fe)===t1?ay(r,{placement:fe,boundary:K,rootBoundary:v,padding:h,flipVariations:E,allowedAutoPlacements:T}):fe)},[]),A=r.rects.reference,B=r.rects.popper,k=new Map,Z=!0,W=w[0],ee=0;ee<w.length;ee++){var I=w[ee],S=Dr(I),F=pi(I)===ci,P=[En,lr].indexOf(S)>=0,j=P?"width":"height",C=Vo(r,{placement:I,boundary:K,rootBoundary:v,altBoundary:y,padding:h}),V=P?F?ir:Cn:F?lr:En;A[j]>B[j]&&(V=Hu(V));var oe=Hu(V),te=[];if(u&&te.push(C[S]<=0),p&&te.push(C[V]<=0,C[oe]<=0),te.every(function(ue){return ue})){W=I,Z=!1;break}k.set(I,te)}if(Z)for(var D=E?3:1,X=function(fe){var ce=w.find(function(ze){var be=k.get(ze);if(be)return be.slice(0,fe).every(function(Le){return Le})});if(ce)return W=ce,"break"},se=D;se>0;se--){var ae=X(se);if(ae==="break")break}r.placement!==W&&(r.modifiersData[i]._skip=!0,r.placement=W,r.reset=!0)}}const oy={name:"flip",enabled:!0,phase:"main",fn:iy,requiresIfExists:["offset"],data:{_skip:!1}};function J3(t,r,l){return l===void 0&&(l={x:0,y:0}),{top:t.top-r.height-l.y,right:t.right-r.width+l.x,bottom:t.bottom-r.height+l.y,left:t.left-r.width-l.x}}function em(t){return[En,ir,lr,Cn].some(function(r){return t[r]>=0})}function sy(t){var r=t.state,l=t.name,i=r.rects.reference,s=r.rects.popper,u=r.modifiersData.preventOverflow,f=Vo(r,{elementContext:"reference"}),p=Vo(r,{altBoundary:!0}),m=J3(f,i),h=J3(p,s,u),K=em(m),v=em(h);r.modifiersData[l]={referenceClippingOffsets:m,popperEscapeOffsets:h,isReferenceHidden:K,hasPopperEscaped:v},r.attributes.popper=Object.assign({},r.attributes.popper,{"data-popper-reference-hidden":K,"data-popper-escaped":v})}const uy={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:sy};function cy(t,r,l){var i=Dr(t),s=[Cn,En].indexOf(i)>=0?-1:1,u=typeof l=="function"?l(Object.assign({},r,{placement:t})):l,f=u[0],p=u[1];return f=f||0,p=(p||0)*s,[Cn,ir].indexOf(i)>=0?{x:p,y:f}:{x:f,y:p}}function fy(t){var r=t.state,l=t.options,i=t.name,s=l.offset,u=s===void 0?[0,0]:s,f=T4.reduce(function(K,v){return K[v]=cy(v,r.rects,u),K},{}),p=f[r.placement],m=p.x,h=p.y;r.modifiersData.popperOffsets!=null&&(r.modifiersData.popperOffsets.x+=m,r.modifiersData.popperOffsets.y+=h),r.modifiersData[i]=f}const dy={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:fy};function py(t){var r=t.state,l=t.name;r.modifiersData[l]=M4({reference:r.rects.reference,element:r.rects.popper,placement:r.placement})}const hy={name:"popperOffsets",enabled:!0,phase:"read",fn:py,data:{}};function my(t){return t==="x"?"y":"x"}function Ky(t){var r=t.state,l=t.options,i=t.name,s=l.mainAxis,u=s===void 0?!0:s,f=l.altAxis,p=f===void 0?!1:f,m=l.boundary,h=l.rootBoundary,K=l.altBoundary,v=l.padding,y=l.tether,x=y===void 0?!0:y,E=l.tetherOffset,T=E===void 0?0:E,M=Vo(r,{boundary:m,rootBoundary:h,padding:v,altBoundary:K}),_=Dr(r.placement),L=pi(r.placement),O=!L,w=a1(_),A=my(w),B=r.modifiersData.popperOffsets,k=r.rects.reference,Z=r.rects.popper,W=typeof T=="function"?T(Object.assign({},r.rects,{placement:r.placement})):T,ee=typeof W=="number"?{mainAxis:W,altAxis:W}:Object.assign({mainAxis:0,altAxis:0},W),I=r.modifiersData.offset?r.modifiersData.offset[r.placement]:null,S={x:0,y:0};if(B){if(u){var F,P=w==="y"?En:Cn,j=w==="y"?lr:ir,C=w==="y"?"height":"width",V=B[w],oe=V+M[P],te=V-M[j],D=x?-Z[C]/2:0,X=L===ci?k[C]:Z[C],se=L===ci?-Z[C]:-k[C],ae=r.elements.arrow,ue=x&&ae?r1(ae):{width:0,height:0},fe=r.modifiersData["arrow#persistent"]?r.modifiersData["arrow#persistent"].padding:w4(),ce=fe[P],ze=fe[j],be=No(0,k[C],ue[C]),Le=O?k[C]/2-D-be-ce-ee.mainAxis:X-be-ce-ee.mainAxis,Se=O?-k[C]/2+D+be+ze+ee.mainAxis:se+be+ze+ee.mainAxis,Ne=r.elements.arrow&&fs(r.elements.arrow),Re=Ne?w==="y"?Ne.clientTop||0:Ne.clientLeft||0:0,lt=(F=I?.[w])!=null?F:0,Ce=V+Le-lt-Re,Ve=V+Se-lt,Ct=No(x?Wu(oe,Ce):oe,V,x?il(te,Ve):te);B[w]=Ct,S[w]=Ct-V}if(p){var _e,Ge=w==="x"?En:Cn,St=w==="x"?lr:ir,Xe=B[A],je=A==="y"?"height":"width",me=Xe+M[Ge],$t=Xe-M[St],it=[En,Cn].indexOf(_)!==-1,Kn=(_e=I?.[A])!=null?_e:0,Zt=it?me:Xe-k[je]-Z[je]-Kn+ee.altAxis,ot=it?Xe+k[je]+Z[je]-Kn-ee.altAxis:$t,At=x&&it?j7(Zt,Xe,ot):No(x?Zt:me,Xe,x?ot:$t);B[A]=At,S[A]=At-Xe}r.modifiersData[i]=S}}const gy={name:"preventOverflow",enabled:!0,phase:"main",fn:Ky,requiresIfExists:["offset"]};function vy(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function yy(t){return t===$n(t)||!ar(t)?l1(t):vy(t)}function by(t){var r=t.getBoundingClientRect(),l=fi(r.width)/t.offsetWidth||1,i=fi(r.height)/t.offsetHeight||1;return l!==1||i!==1}function Sy(t,r,l){l===void 0&&(l=!1);var i=ar(r),s=ar(r)&&by(r),u=Na(r),f=di(t,s,l),p={scrollLeft:0,scrollTop:0},m={x:0,y:0};return(i||!i&&!l)&&((Br(r)!=="body"||o1(u))&&(p=yy(r)),ar(r)?(m=di(r,!0),m.x+=r.clientLeft,m.y+=r.clientTop):u&&(m.x=i1(u))),{x:f.left+p.scrollLeft-m.x,y:f.top+p.scrollTop-m.y,width:f.width,height:f.height}}function xy(t){var r=new Map,l=new Set,i=[];t.forEach(function(u){r.set(u.name,u)});function s(u){l.add(u.name);var f=[].concat(u.requires||[],u.requiresIfExists||[]);f.forEach(function(p){if(!l.has(p)){var m=r.get(p);m&&s(m)}}),i.push(u)}return t.forEach(function(u){l.has(u.name)||s(u)}),i}function Ty(t){var r=xy(t);return _7.reduce(function(l,i){return l.concat(r.filter(function(s){return s.phase===i}))},[])}function Ey(t){var r;return function(){return r||(r=new Promise(function(l){Promise.resolve().then(function(){r=void 0,l(t())})})),r}}function Cy(t){var r=t.reduce(function(l,i){var s=l[i.name];return l[i.name]=s?Object.assign({},s,i,{options:Object.assign({},s.options,i.options),data:Object.assign({},s.data,i.data)}):i,l},{});return Object.keys(r).map(function(l){return r[l]})}var tm={placement:"bottom",modifiers:[],strategy:"absolute"};function nm(){for(var t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];return!r.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function wy(t){t===void 0&&(t={});var r=t,l=r.defaultModifiers,i=l===void 0?[]:l,s=r.defaultOptions,u=s===void 0?tm:s;return function(p,m,h){h===void 0&&(h=u);var K={placement:"bottom",orderedModifiers:[],options:Object.assign({},tm,u),modifiersData:{},elements:{reference:p,popper:m},attributes:{},styles:{}},v=[],y=!1,x={state:K,setOptions:function(_){var L=typeof _=="function"?_(K.options):_;T(),K.options=Object.assign({},u,K.options,L),K.scrollParents={reference:ul(p)?Bo(p):p.contextElement?Bo(p.contextElement):[],popper:Bo(m)};var O=Ty(Cy([].concat(i,K.options.modifiers)));return K.orderedModifiers=O.filter(function(w){return w.enabled}),E(),x.update()},forceUpdate:function(){if(!y){var _=K.elements,L=_.reference,O=_.popper;if(nm(L,O)){K.rects={reference:Sy(L,fs(O),K.options.strategy==="fixed"),popper:r1(O)},K.reset=!1,K.placement=K.options.placement,K.orderedModifiers.forEach(function(ee){return K.modifiersData[ee.name]=Object.assign({},ee.data)});for(var w=0;w<K.orderedModifiers.length;w++){if(K.reset===!0){K.reset=!1,w=-1;continue}var A=K.orderedModifiers[w],B=A.fn,k=A.options,Z=k===void 0?{}:k,W=A.name;typeof B=="function"&&(K=B({state:K,options:Z,name:W,instance:x})||K)}}}},update:Ey(function(){return new Promise(function(M){x.forceUpdate(),M(K)})}),destroy:function(){T(),y=!0}};if(!nm(p,m))return x;x.setOptions(h).then(function(M){!y&&h.onFirstUpdate&&h.onFirstUpdate(M)});function E(){K.orderedModifiers.forEach(function(M){var _=M.name,L=M.options,O=L===void 0?{}:L,w=M.effect;if(typeof w=="function"){var A=w({state:K,name:_,instance:x,options:O}),B=function(){};v.push(A||B)}})}function T(){v.forEach(function(M){return M()}),v=[]}return x}}var Ry=[Q7,hy,X7,U7,dy,oy,gy,Y7,uy],Ay=wy({defaultModifiers:Ry});function hi(t){const{elementType:r,externalSlotProps:l,ownerState:i,skipResolvingSlotProps:s=!1,...u}=t,f=s?{}:v4(l,i),{props:p,internalRef:m}=b4({...u,externalSlotProps:f}),h=un(m,f?.ref,t.additionalProps?.ref);return g4(r,{...p,ref:h},i)}function vi(t){return parseInt(R.version,10)>=19?t?.props?.ref||null:t?.ref||null}function Oy(t){return typeof t=="function"?t():t}const D4=R.forwardRef(function(r,l){const{children:i,container:s,disablePortal:u=!1}=r,[f,p]=R.useState(null),m=un(R.isValidElement(i)?vi(i):null,l);if(Nr(()=>{u||p(Oy(s)||document.body)},[s,u]),Nr(()=>{if(f&&!u)return q3(l,f),()=>{q3(l,null)}},[l,f,u]),u){if(R.isValidElement(i)){const h={ref:m};return R.cloneElement(i,h)}return i}return f&&h4.createPortal(i,f)});function My(t){return vt("MuiPopper",t)}yt("MuiPopper",["root"]);function Dy(t,r){if(r==="ltr")return t;switch(t){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return t}}function Ed(t){return typeof t=="function"?t():t}function Ny(t){return t.nodeType!==void 0}const By=t=>{const{classes:r}=t;return bt({root:["root"]},My,r)},_y={},zy=R.forwardRef(function(r,l){const{anchorEl:i,children:s,direction:u,disablePortal:f,modifiers:p,open:m,placement:h,popperOptions:K,popperRef:v,slotProps:y={},slots:x={},TransitionProps:E,ownerState:T,...M}=r,_=R.useRef(null),L=un(_,l),O=R.useRef(null),w=un(O,v),A=R.useRef(w);Nr(()=>{A.current=w},[w]),R.useImperativeHandle(v,()=>O.current,[]);const B=Dy(h,u),[k,Z]=R.useState(B),[W,ee]=R.useState(Ed(i));R.useEffect(()=>{O.current&&O.current.forceUpdate()}),R.useEffect(()=>{i&&ee(Ed(i))},[i]),Nr(()=>{if(!W||!m)return;const j=oe=>{Z(oe.placement)};let C=[{name:"preventOverflow",options:{altBoundary:f}},{name:"flip",options:{altBoundary:f}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:oe})=>{j(oe)}}];p!=null&&(C=C.concat(p)),K&&K.modifiers!=null&&(C=C.concat(K.modifiers));const V=Ay(W,_.current,{placement:B,...K,modifiers:C});return A.current(V),()=>{V.destroy(),A.current(null)}},[W,f,p,m,K,B]);const I={placement:k};E!==null&&(I.TransitionProps=E);const S=By(r),F=x.root??"div",P=hi({elementType:F,externalSlotProps:y.root,externalForwardedProps:M,additionalProps:{role:"tooltip",ref:L},ownerState:r,className:S.root});return q.jsx(F,{...P,children:typeof s=="function"?s(I):s})}),Ly=R.forwardRef(function(r,l){const{anchorEl:i,children:s,container:u,direction:f="ltr",disablePortal:p=!1,keepMounted:m=!1,modifiers:h,open:K,placement:v="bottom",popperOptions:y=_y,popperRef:x,style:E,transition:T=!1,slotProps:M={},slots:_={},...L}=r,[O,w]=R.useState(!0),A=()=>{w(!1)},B=()=>{w(!0)};if(!m&&!K&&(!T||O))return null;let k;if(u)k=u;else if(i){const ee=Ed(i);k=ee&&Ny(ee)?Rn(ee).body:Rn(null).body}const Z=!K&&m&&(!T||O)?"none":void 0,W=T?{in:K,onEnter:A,onExited:B}:void 0;return q.jsx(D4,{disablePortal:p,container:k,children:q.jsx(zy,{anchorEl:i,direction:f,disablePortal:p,modifiers:h,ref:l,open:T?!O:K,placement:v,popperOptions:y,popperRef:x,slotProps:M,slots:_,...L,style:{position:"fixed",top:0,left:0,display:Z,...E},TransitionProps:W,children:s})})}),Uy=ye(Ly,{name:"MuiPopper",slot:"Root"})({}),N4=R.forwardRef(function(r,l){const i=is(),s=Et({props:r,name:"MuiPopper"}),{anchorEl:u,component:f,components:p,componentsProps:m,container:h,disablePortal:K,keepMounted:v,modifiers:y,open:x,placement:E,popperOptions:T,popperRef:M,transition:_,slots:L,slotProps:O,...w}=s,A=L?.root??p?.Root,B={anchorEl:u,container:h,disablePortal:K,keepMounted:v,modifiers:y,open:x,placement:E,popperOptions:T,popperRef:M,transition:_,...w};return q.jsx(Uy,{as:f,direction:i?"rtl":"ltr",slots:{root:A},slotProps:O??m,...B,ref:l})});function Au(t){return parseInt(t,10)||0}const ky={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function Hy(t){for(const r in t)return!1;return!0}function rm(t){return Hy(t)||t.outerHeightStyle===0&&!t.overflowing}const jy=R.forwardRef(function(r,l){const{onChange:i,maxRows:s,minRows:u=1,style:f,value:p,...m}=r,{current:h}=R.useRef(p!=null),K=R.useRef(null),v=un(l,K),y=R.useRef(null),x=R.useRef(null),E=R.useCallback(()=>{const O=K.current,w=x.current;if(!O||!w)return;const B=mr(O).getComputedStyle(O);if(B.width==="0px")return{outerHeightStyle:0,overflowing:!1};w.style.width=B.width,w.value=O.value||r.placeholder||"x",w.value.slice(-1)===`
`&&(w.value+=" ");const k=B.boxSizing,Z=Au(B.paddingBottom)+Au(B.paddingTop),W=Au(B.borderBottomWidth)+Au(B.borderTopWidth),ee=w.scrollHeight;w.value="x";const I=w.scrollHeight;let S=ee;u&&(S=Math.max(Number(u)*I,S)),s&&(S=Math.min(Number(s)*I,S)),S=Math.max(S,I);const F=S+(k==="border-box"?Z+W:0),P=Math.abs(S-ee)<=1;return{outerHeightStyle:F,overflowing:P}},[s,u,r.placeholder]),T=rr(()=>{const O=K.current,w=E();if(!O||!w||rm(w))return!1;const A=w.outerHeightStyle;return y.current!=null&&y.current!==A}),M=R.useCallback(()=>{const O=K.current,w=E();if(!O||!w||rm(w))return;const A=w.outerHeightStyle;y.current!==A&&(y.current=A,O.style.height=`${A}px`),O.style.overflow=w.overflowing?"hidden":""},[E]),_=R.useRef(-1);Nr(()=>{const O=ss(M),w=K?.current;if(!w)return;const A=mr(w);A.addEventListener("resize",O);let B;return typeof ResizeObserver<"u"&&(B=new ResizeObserver(()=>{T()&&(B.unobserve(w),cancelAnimationFrame(_.current),M(),_.current=requestAnimationFrame(()=>{B.observe(w)}))}),B.observe(w)),()=>{O.clear(),cancelAnimationFrame(_.current),A.removeEventListener("resize",O),B&&B.disconnect()}},[E,M,T]),Nr(()=>{M()});const L=O=>{h||M();const w=O.target,A=w.value.length,B=w.value.endsWith(`
`),k=w.selectionStart===A;B&&k&&w.setSelectionRange(A,A),i&&i(O)};return q.jsxs(R.Fragment,{children:[q.jsx("textarea",{value:p,onChange:L,ref:v,rows:u,style:f,...m}),q.jsx("textarea",{"aria-hidden":!0,className:r.className,readOnly:!0,ref:x,tabIndex:-1,style:{...ky.shadow,...f,paddingTop:0,paddingBottom:0}})]})});function yi({props:t,states:r,muiFormControl:l}){return r.reduce((i,s)=>(i[s]=t[s],l&&typeof t[s]>"u"&&(i[s]=l[s]),i),{})}const s1=R.createContext(void 0);function bi(){return R.useContext(s1)}function am(t){return t!=null&&!(Array.isArray(t)&&t.length===0)}function Ju(t,r=!1){return t&&(am(t.value)&&t.value!==""||r&&am(t.defaultValue)&&t.defaultValue!=="")}function $y(t){return t.startAdornment}function Py(t){return vt("MuiInputBase",t)}const mi=yt("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]);var lm;const Cc=(t,r)=>{const{ownerState:l}=t;return[r.root,l.formControl&&r.formControl,l.startAdornment&&r.adornedStart,l.endAdornment&&r.adornedEnd,l.error&&r.error,l.size==="small"&&r.sizeSmall,l.multiline&&r.multiline,l.color&&r[`color${gt(l.color)}`],l.fullWidth&&r.fullWidth,l.hiddenLabel&&r.hiddenLabel]},wc=(t,r)=>{const{ownerState:l}=t;return[r.input,l.size==="small"&&r.inputSizeSmall,l.multiline&&r.inputMultiline,l.type==="search"&&r.inputTypeSearch,l.startAdornment&&r.inputAdornedStart,l.endAdornment&&r.inputAdornedEnd,l.hiddenLabel&&r.inputHiddenLabel]},qy=t=>{const{classes:r,color:l,disabled:i,error:s,endAdornment:u,focused:f,formControl:p,fullWidth:m,hiddenLabel:h,multiline:K,readOnly:v,size:y,startAdornment:x,type:E}=t,T={root:["root",`color${gt(l)}`,i&&"disabled",s&&"error",m&&"fullWidth",f&&"focused",p&&"formControl",y&&y!=="medium"&&`size${gt(y)}`,K&&"multiline",x&&"adornedStart",u&&"adornedEnd",h&&"hiddenLabel",v&&"readOnly"],input:["input",i&&"disabled",E==="search"&&"inputTypeSearch",K&&"inputMultiline",y==="small"&&"inputSizeSmall",h&&"inputHiddenLabel",x&&"inputAdornedStart",u&&"inputAdornedEnd",v&&"readOnly"]};return bt(T,Py,r)},Rc=ye("div",{name:"MuiInputBase",slot:"Root",overridesResolver:Cc})(Nt(({theme:t})=>({...t.typography.body1,color:(t.vars||t).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${mi.disabled}`]:{color:(t.vars||t).palette.text.disabled,cursor:"default"},variants:[{props:({ownerState:r})=>r.multiline,style:{padding:"4px 0 5px"}},{props:({ownerState:r,size:l})=>r.multiline&&l==="small",style:{paddingTop:1}},{props:({ownerState:r})=>r.fullWidth,style:{width:"100%"}}]}))),Ac=ye("input",{name:"MuiInputBase",slot:"Input",overridesResolver:wc})(Nt(({theme:t})=>{const r=t.palette.mode==="light",l={color:"currentColor",...t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:r?.42:.5},transition:t.transitions.create("opacity",{duration:t.transitions.duration.shorter})},i={opacity:"0 !important"},s=t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:r?.42:.5};return{font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%","&::-webkit-input-placeholder":l,"&::-moz-placeholder":l,"&::-ms-input-placeholder":l,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${mi.formControl} &`]:{"&::-webkit-input-placeholder":i,"&::-moz-placeholder":i,"&::-ms-input-placeholder":i,"&:focus::-webkit-input-placeholder":s,"&:focus::-moz-placeholder":s,"&:focus::-ms-input-placeholder":s},[`&.${mi.disabled}`]:{opacity:1,WebkitTextFillColor:(t.vars||t).palette.text.disabled},variants:[{props:({ownerState:u})=>!u.disableInjectingGlobalStyles,style:{animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}}},{props:{size:"small"},style:{paddingTop:1}},{props:({ownerState:u})=>u.multiline,style:{height:"auto",resize:"none",padding:0,paddingTop:0}},{props:{type:"search"},style:{MozAppearance:"textfield"}}]}})),im=L8({"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}),u1=R.forwardRef(function(r,l){const i=Et({props:r,name:"MuiInputBase"}),{"aria-describedby":s,autoComplete:u,autoFocus:f,className:p,color:m,components:h={},componentsProps:K={},defaultValue:v,disabled:y,disableInjectingGlobalStyles:x,endAdornment:E,error:T,fullWidth:M=!1,id:_,inputComponent:L="input",inputProps:O={},inputRef:w,margin:A,maxRows:B,minRows:k,multiline:Z=!1,name:W,onBlur:ee,onChange:I,onClick:S,onFocus:F,onKeyDown:P,onKeyUp:j,placeholder:C,readOnly:V,renderSuffix:oe,rows:te,size:D,slotProps:X={},slots:se={},startAdornment:ae,type:ue="text",value:fe,...ce}=i,ze=O.value!=null?O.value:fe,{current:be}=R.useRef(ze!=null),Le=R.useRef(),Se=R.useCallback(Ue=>{},[]),Ne=un(Le,w,O.ref,Se),[Re,lt]=R.useState(!1),Ce=bi(),Ve=yi({props:i,muiFormControl:Ce,states:["color","disabled","error","hiddenLabel","size","required","filled"]});Ve.focused=Ce?Ce.focused:Re,R.useEffect(()=>{!Ce&&y&&Re&&(lt(!1),ee&&ee())},[Ce,y,Re,ee]);const Ct=Ce&&Ce.onFilled,_e=Ce&&Ce.onEmpty,Ge=R.useCallback(Ue=>{Ju(Ue)?Ct&&Ct():_e&&_e()},[Ct,_e]);Nr(()=>{be&&Ge({value:ze})},[ze,Ge,be]);const St=Ue=>{F&&F(Ue),O.onFocus&&O.onFocus(Ue),Ce&&Ce.onFocus?Ce.onFocus(Ue):lt(!0)},Xe=Ue=>{ee&&ee(Ue),O.onBlur&&O.onBlur(Ue),Ce&&Ce.onBlur?Ce.onBlur(Ue):lt(!1)},je=(Ue,...nn)=>{if(!be){const Vt=Ue.target||Le.current;if(Vt==null)throw new Error(ra(1));Ge({value:Vt.value})}O.onChange&&O.onChange(Ue,...nn),I&&I(Ue,...nn)};R.useEffect(()=>{Ge(Le.current)},[]);const me=Ue=>{Le.current&&Ue.currentTarget===Ue.target&&Le.current.focus(),S&&S(Ue)};let $t=L,it=O;Z&&$t==="input"&&(te?it={type:void 0,minRows:te,maxRows:te,...it}:it={type:void 0,maxRows:B,minRows:k,...it},$t=jy);const Kn=Ue=>{Ge(Ue.animationName==="mui-auto-fill-cancel"?Le.current:{value:"x"})};R.useEffect(()=>{Ce&&Ce.setAdornedStart(!!ae)},[Ce,ae]);const Zt={...i,color:Ve.color||"primary",disabled:Ve.disabled,endAdornment:E,error:Ve.error,focused:Ve.focused,formControl:Ce,fullWidth:M,hiddenLabel:Ve.hiddenLabel,multiline:Z,size:Ve.size,startAdornment:ae,type:ue},ot=qy(Zt),At=se.root||h.Root||Rc,st=X.root||K.root||{},tn=se.input||h.Input||Ac;return it={...it,...X.input??K.input},q.jsxs(R.Fragment,{children:[!x&&typeof im=="function"&&(lm||(lm=q.jsx(im,{}))),q.jsxs(At,{...st,ref:l,onClick:me,...ce,...!Zu(At)&&{ownerState:{...Zt,...st.ownerState}},className:Me(ot.root,st.className,p,V&&"MuiInputBase-readOnly"),children:[ae,q.jsx(s1.Provider,{value:null,children:q.jsx(tn,{"aria-invalid":Ve.error,"aria-describedby":s,autoComplete:u,autoFocus:f,defaultValue:v,disabled:Ve.disabled,id:_,onAnimationStart:Kn,name:W,placeholder:C,readOnly:V,required:Ve.required,rows:te,value:ze,onKeyDown:P,onKeyUp:j,type:ue,...it,...!Zu(tn)&&{as:$t,ownerState:{...Zt,...it.ownerState}},ref:Ne,className:Me(ot.input,it.className,V&&"MuiInputBase-readOnly"),onBlur:Xe,onChange:je,onFocus:St})}),E,oe?oe({...Ve,startAdornment:ae}):null]})]})});function Yy(t){return vt("MuiInput",t)}const xo={...mi,...yt("MuiInput",["root","underline","input"])};function Vy(t){return vt("MuiOutlinedInput",t)}const xr={...mi,...yt("MuiOutlinedInput",["root","notchedOutline","input"])};function Gy(t){return vt("MuiFilledInput",t)}const tl={...mi,...yt("MuiFilledInput",["root","underline","input","adornedStart","adornedEnd","sizeSmall","multiline","hiddenLabel"])},Fy=Wd(q.jsx("path",{d:"M7 10l5 5 5-5z"})),Xy={entering:{opacity:1},entered:{opacity:1}},Zy=R.forwardRef(function(r,l){const i=os(),s={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{addEndListener:u,appear:f=!0,children:p,easing:m,in:h,onEnter:K,onEntered:v,onEntering:y,onExit:x,onExited:E,onExiting:T,style:M,timeout:_=s,TransitionComponent:L=Lr,...O}=r,w=R.useRef(null),A=un(w,vi(p),l),B=P=>j=>{if(P){const C=w.current;j===void 0?P(C):P(C,j)}},k=B(y),Z=B((P,j)=>{K4(P);const C=Xu({style:M,timeout:_,easing:m},{mode:"enter"});P.style.webkitTransition=i.transitions.create("opacity",C),P.style.transition=i.transitions.create("opacity",C),K&&K(P,j)}),W=B(v),ee=B(T),I=B(P=>{const j=Xu({style:M,timeout:_,easing:m},{mode:"exit"});P.style.webkitTransition=i.transitions.create("opacity",j),P.style.transition=i.transitions.create("opacity",j),x&&x(P)}),S=B(E),F=P=>{u&&u(w.current,P)};return q.jsx(L,{appear:f,in:h,nodeRef:w,onEnter:Z,onEntered:W,onEntering:k,onExit:I,onExited:S,onExiting:ee,addEndListener:F,timeout:_,...O,children:(P,{ownerState:j,...C})=>R.cloneElement(p,{style:{opacity:0,visibility:P==="exited"&&!h?"hidden":void 0,...Xy[P],...M,...p.props.style},ref:A,...C})})});function Qy(t){return vt("MuiBackdrop",t)}yt("MuiBackdrop",["root","invisible"]);const Iy=t=>{const{classes:r,invisible:l}=t;return bt({root:["root",l&&"invisible"]},Qy,r)},Wy=ye("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:l}=t;return[r.root,l.invisible&&r.invisible]}})({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",variants:[{props:{invisible:!0},style:{backgroundColor:"transparent"}}]}),Jy=R.forwardRef(function(r,l){const i=Et({props:r,name:"MuiBackdrop"}),{children:s,className:u,component:f="div",invisible:p=!1,open:m,components:h={},componentsProps:K={},slotProps:v={},slots:y={},TransitionComponent:x,transitionDuration:E,...T}=i,M={...i,component:f,invisible:p},_=Iy(M),L={transition:x,root:h.Root,...y},O={...K,...v},w={component:f,slots:L,slotProps:O},[A,B]=Tt("root",{elementType:Wy,externalForwardedProps:w,className:Me(_.root,u),ownerState:M}),[k,Z]=Tt("transition",{elementType:Zy,externalForwardedProps:w,ownerState:M});return q.jsx(k,{in:m,timeout:E,...T,...Z,children:q.jsx(A,{"aria-hidden":!0,...B,classes:_,ref:l,children:s})})}),e9=yt("MuiBox",["root"]),t9=c4(),Ou=Sv({themeId:lc,defaultTheme:t9,defaultClassName:e9.root,generateClassName:Wm.generate});function B4(t=window){const r=t.document.documentElement.clientWidth;return t.innerWidth-r}function n9(t){const r=Rn(t);return r.body===t?mr(t).innerWidth>r.documentElement.clientWidth:t.scrollHeight>t.clientHeight}function _o(t,r){r?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden")}function om(t){return parseInt(mr(t).getComputedStyle(t).paddingRight,10)||0}function r9(t){const l=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].includes(t.tagName),i=t.tagName==="INPUT"&&t.getAttribute("type")==="hidden";return l||i}function sm(t,r,l,i,s){const u=[r,l,...i];[].forEach.call(t.children,f=>{const p=!u.includes(f),m=!r9(f);p&&m&&_o(f,s)})}function nd(t,r){let l=-1;return t.some((i,s)=>r(i)?(l=s,!0):!1),l}function a9(t,r){const l=[],i=t.container;if(!r.disableScrollLock){if(n9(i)){const f=B4(mr(i));l.push({value:i.style.paddingRight,property:"padding-right",el:i}),i.style.paddingRight=`${om(i)+f}px`;const p=Rn(i).querySelectorAll(".mui-fixed");[].forEach.call(p,m=>{l.push({value:m.style.paddingRight,property:"padding-right",el:m}),m.style.paddingRight=`${om(m)+f}px`})}let u;if(i.parentNode instanceof DocumentFragment)u=Rn(i).body;else{const f=i.parentElement,p=mr(i);u=f?.nodeName==="HTML"&&p.getComputedStyle(f).overflowY==="scroll"?f:i}l.push({value:u.style.overflow,property:"overflow",el:u},{value:u.style.overflowX,property:"overflow-x",el:u},{value:u.style.overflowY,property:"overflow-y",el:u}),u.style.overflow="hidden"}return()=>{l.forEach(({value:u,el:f,property:p})=>{u?f.style.setProperty(p,u):f.style.removeProperty(p)})}}function l9(t){const r=[];return[].forEach.call(t.children,l=>{l.getAttribute("aria-hidden")==="true"&&r.push(l)}),r}class i9{constructor(){this.modals=[],this.containers=[]}add(r,l){let i=this.modals.indexOf(r);if(i!==-1)return i;i=this.modals.length,this.modals.push(r),r.modalRef&&_o(r.modalRef,!1);const s=l9(l);sm(l,r.mount,r.modalRef,s,!0);const u=nd(this.containers,f=>f.container===l);return u!==-1?(this.containers[u].modals.push(r),i):(this.containers.push({modals:[r],container:l,restore:null,hiddenSiblings:s}),i)}mount(r,l){const i=nd(this.containers,u=>u.modals.includes(r)),s=this.containers[i];s.restore||(s.restore=a9(s,l))}remove(r,l=!0){const i=this.modals.indexOf(r);if(i===-1)return i;const s=nd(this.containers,f=>f.modals.includes(r)),u=this.containers[s];if(u.modals.splice(u.modals.indexOf(r),1),this.modals.splice(i,1),u.modals.length===0)u.restore&&u.restore(),r.modalRef&&_o(r.modalRef,l),sm(u.container,r.mount,r.modalRef,u.hiddenSiblings,!1),this.containers.splice(s,1);else{const f=u.modals[u.modals.length-1];f.modalRef&&_o(f.modalRef,!1)}return i}isTopModal(r){return this.modals.length>0&&this.modals[this.modals.length-1]===r}}const o9=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function s9(t){const r=parseInt(t.getAttribute("tabindex")||"",10);return Number.isNaN(r)?t.contentEditable==="true"||(t.nodeName==="AUDIO"||t.nodeName==="VIDEO"||t.nodeName==="DETAILS")&&t.getAttribute("tabindex")===null?0:t.tabIndex:r}function u9(t){if(t.tagName!=="INPUT"||t.type!=="radio"||!t.name)return!1;const r=i=>t.ownerDocument.querySelector(`input[type="radio"]${i}`);let l=r(`[name="${t.name}"]:checked`);return l||(l=r(`[name="${t.name}"]`)),l!==t}function c9(t){return!(t.disabled||t.tagName==="INPUT"&&t.type==="hidden"||u9(t))}function f9(t){const r=[],l=[];return Array.from(t.querySelectorAll(o9)).forEach((i,s)=>{const u=s9(i);u===-1||!c9(i)||(u===0?r.push(i):l.push({documentOrder:s,tabIndex:u,node:i}))}),l.sort((i,s)=>i.tabIndex===s.tabIndex?i.documentOrder-s.documentOrder:i.tabIndex-s.tabIndex).map(i=>i.node).concat(r)}function d9(){return!0}function p9(t){const{children:r,disableAutoFocus:l=!1,disableEnforceFocus:i=!1,disableRestoreFocus:s=!1,getTabbable:u=f9,isEnabled:f=d9,open:p}=t,m=R.useRef(!1),h=R.useRef(null),K=R.useRef(null),v=R.useRef(null),y=R.useRef(null),x=R.useRef(!1),E=R.useRef(null),T=un(vi(r),E),M=R.useRef(null);R.useEffect(()=>{!p||!E.current||(x.current=!l)},[l,p]),R.useEffect(()=>{if(!p||!E.current)return;const O=Rn(E.current);return E.current.contains(O.activeElement)||(E.current.hasAttribute("tabIndex")||E.current.setAttribute("tabIndex","-1"),x.current&&E.current.focus()),()=>{s||(v.current&&v.current.focus&&(m.current=!0,v.current.focus()),v.current=null)}},[p]),R.useEffect(()=>{if(!p||!E.current)return;const O=Rn(E.current),w=k=>{M.current=k,!(i||!f()||k.key!=="Tab")&&O.activeElement===E.current&&k.shiftKey&&(m.current=!0,K.current&&K.current.focus())},A=()=>{const k=E.current;if(k===null)return;if(!O.hasFocus()||!f()||m.current){m.current=!1;return}if(k.contains(O.activeElement)||i&&O.activeElement!==h.current&&O.activeElement!==K.current)return;if(O.activeElement!==y.current)y.current=null;else if(y.current!==null)return;if(!x.current)return;let Z=[];if((O.activeElement===h.current||O.activeElement===K.current)&&(Z=u(E.current)),Z.length>0){const W=!!(M.current?.shiftKey&&M.current?.key==="Tab"),ee=Z[0],I=Z[Z.length-1];typeof ee!="string"&&typeof I!="string"&&(W?I.focus():ee.focus())}else k.focus()};O.addEventListener("focusin",A),O.addEventListener("keydown",w,!0);const B=setInterval(()=>{O.activeElement&&O.activeElement.tagName==="BODY"&&A()},50);return()=>{clearInterval(B),O.removeEventListener("focusin",A),O.removeEventListener("keydown",w,!0)}},[l,i,s,f,p,u]);const _=O=>{v.current===null&&(v.current=O.relatedTarget),x.current=!0,y.current=O.target;const w=r.props.onFocus;w&&w(O)},L=O=>{v.current===null&&(v.current=O.relatedTarget),x.current=!0};return q.jsxs(R.Fragment,{children:[q.jsx("div",{tabIndex:p?0:-1,onFocus:L,ref:h,"data-testid":"sentinelStart"}),R.cloneElement(r,{ref:T,onFocus:_}),q.jsx("div",{tabIndex:p?0:-1,onFocus:L,ref:K,"data-testid":"sentinelEnd"})]})}function h9(t){return typeof t=="function"?t():t}function m9(t){return t?t.props.hasOwnProperty("in"):!1}const um=()=>{},Mu=new i9;function K9(t){const{container:r,disableEscapeKeyDown:l=!1,disableScrollLock:i=!1,closeAfterTransition:s=!1,onTransitionEnter:u,onTransitionExited:f,children:p,onClose:m,open:h,rootRef:K}=t,v=R.useRef({}),y=R.useRef(null),x=R.useRef(null),E=un(x,K),[T,M]=R.useState(!h),_=m9(p);let L=!0;(t["aria-hidden"]==="false"||t["aria-hidden"]===!1)&&(L=!1);const O=()=>Rn(y.current),w=()=>(v.current.modalRef=x.current,v.current.mount=y.current,v.current),A=()=>{Mu.mount(w(),{disableScrollLock:i}),x.current&&(x.current.scrollTop=0)},B=rr(()=>{const j=h9(r)||O().body;Mu.add(w(),j),x.current&&A()}),k=()=>Mu.isTopModal(w()),Z=rr(j=>{y.current=j,j&&(h&&k()?A():x.current&&_o(x.current,L))}),W=R.useCallback(()=>{Mu.remove(w(),L)},[L]);R.useEffect(()=>()=>{W()},[W]),R.useEffect(()=>{h?B():(!_||!s)&&W()},[h,W,_,s,B]);const ee=j=>C=>{j.onKeyDown?.(C),!(C.key!=="Escape"||C.which===229||!k())&&(l||(C.stopPropagation(),m&&m(C,"escapeKeyDown")))},I=j=>C=>{j.onClick?.(C),C.target===C.currentTarget&&m&&m(C,"backdropClick")};return{getRootProps:(j={})=>{const C=y4(t);delete C.onTransitionEnter,delete C.onTransitionExited;const V={...C,...j};return{role:"presentation",...V,onKeyDown:ee(V),ref:E}},getBackdropProps:(j={})=>{const C=j;return{"aria-hidden":!0,...C,onClick:I(C),open:h}},getTransitionProps:()=>{const j=()=>{M(!1),u&&u()},C=()=>{M(!0),f&&f(),s&&W()};return{onEnter:P3(j,p?.props.onEnter??um),onExited:P3(C,p?.props.onExited??um)}},rootRef:E,portalRef:Z,isTopModal:k,exited:T,hasTransition:_}}function g9(t){return vt("MuiModal",t)}yt("MuiModal",["root","hidden","backdrop"]);const v9=t=>{const{open:r,exited:l,classes:i}=t;return bt({root:["root",!r&&l&&"hidden"],backdrop:["backdrop"]},g9,i)},y9=ye("div",{name:"MuiModal",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:l}=t;return[r.root,!l.open&&l.exited&&r.hidden]}})(Nt(({theme:t})=>({position:"fixed",zIndex:(t.vars||t).zIndex.modal,right:0,bottom:0,top:0,left:0,variants:[{props:({ownerState:r})=>!r.open&&r.exited,style:{visibility:"hidden"}}]}))),b9=ye(Jy,{name:"MuiModal",slot:"Backdrop"})({zIndex:-1}),S9=R.forwardRef(function(r,l){const i=Et({name:"MuiModal",props:r}),{BackdropComponent:s=b9,BackdropProps:u,classes:f,className:p,closeAfterTransition:m=!1,children:h,container:K,component:v,components:y={},componentsProps:x={},disableAutoFocus:E=!1,disableEnforceFocus:T=!1,disableEscapeKeyDown:M=!1,disablePortal:_=!1,disableRestoreFocus:L=!1,disableScrollLock:O=!1,hideBackdrop:w=!1,keepMounted:A=!1,onClose:B,onTransitionEnter:k,onTransitionExited:Z,open:W,slotProps:ee={},slots:I={},theme:S,...F}=i,P={...i,closeAfterTransition:m,disableAutoFocus:E,disableEnforceFocus:T,disableEscapeKeyDown:M,disablePortal:_,disableRestoreFocus:L,disableScrollLock:O,hideBackdrop:w,keepMounted:A},{getRootProps:j,getBackdropProps:C,getTransitionProps:V,portalRef:oe,isTopModal:te,exited:D,hasTransition:X}=K9({...P,rootRef:l}),se={...P,exited:D},ae=v9(se),ue={};if(h.props.tabIndex===void 0&&(ue.tabIndex="-1"),X){const{onEnter:Se,onExited:Ne}=V();ue.onEnter=Se,ue.onExited=Ne}const fe={slots:{root:y.Root,backdrop:y.Backdrop,...I},slotProps:{...x,...ee}},[ce,ze]=Tt("root",{ref:l,elementType:y9,externalForwardedProps:{...fe,...F,component:v},getSlotProps:j,ownerState:se,className:Me(p,ae?.root,!se.open&&se.exited&&ae?.hidden)}),[be,Le]=Tt("backdrop",{ref:u?.ref,elementType:s,externalForwardedProps:fe,shouldForwardComponentProp:!0,additionalProps:u,getSlotProps:Se=>C({...Se,onClick:Ne=>{Se?.onClick&&Se.onClick(Ne)}}),className:Me(u?.className,ae?.backdrop),ownerState:se});return!A&&!W&&(!X||D)?null:q.jsx(D4,{ref:oe,container:K,disablePortal:_,children:q.jsxs(ce,{...ze,children:[!w&&s?q.jsx(be,{...Le}):null,q.jsx(p9,{disableEnforceFocus:T,disableAutoFocus:E,disableRestoreFocus:L,isEnabled:te,open:W,children:R.cloneElement(h,ue)})]})})}),x9=t=>{const{classes:r,disableUnderline:l,startAdornment:i,endAdornment:s,size:u,hiddenLabel:f,multiline:p}=t,m={root:["root",!l&&"underline",i&&"adornedStart",s&&"adornedEnd",u==="small"&&`size${gt(u)}`,f&&"hiddenLabel",p&&"multiline"],input:["input"]},h=bt(m,Gy,r);return{...r,...h}},T9=ye(Rc,{shouldForwardProp:t=>zr(t)||t==="classes",name:"MuiFilledInput",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:l}=t;return[...Cc(t,r),!l.disableUnderline&&r.underline]}})(Nt(({theme:t})=>{const r=t.palette.mode==="light",l=r?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",i=r?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",s=r?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",u=r?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return{position:"relative",backgroundColor:t.vars?t.vars.palette.FilledInput.bg:i,borderTopLeftRadius:(t.vars||t).shape.borderRadius,borderTopRightRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut}),"&:hover":{backgroundColor:t.vars?t.vars.palette.FilledInput.hoverBg:s,"@media (hover: none)":{backgroundColor:t.vars?t.vars.palette.FilledInput.bg:i}},[`&.${tl.focused}`]:{backgroundColor:t.vars?t.vars.palette.FilledInput.bg:i},[`&.${tl.disabled}`]:{backgroundColor:t.vars?t.vars.palette.FilledInput.disabledBg:u},variants:[{props:({ownerState:f})=>!f.disableUnderline,style:{"&::after":{left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${tl.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${tl.error}`]:{"&::before, &::after":{borderBottomColor:(t.vars||t).palette.error.main}},"&::before":{borderBottom:`1px solid ${t.vars?t.alpha(t.vars.palette.common.onBackground,t.vars.opacity.inputUnderline):l}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:t.transitions.create("border-bottom-color",{duration:t.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${tl.disabled}, .${tl.error}):before`]:{borderBottom:`1px solid ${(t.vars||t).palette.text.primary}`},[`&.${tl.disabled}:before`]:{borderBottomStyle:"dotted"}}},...Object.entries(t.palette).filter(us()).map(([f])=>({props:{disableUnderline:!1,color:f},style:{"&::after":{borderBottom:`2px solid ${(t.vars||t).palette[f]?.main}`}}})),{props:({ownerState:f})=>f.startAdornment,style:{paddingLeft:12}},{props:({ownerState:f})=>f.endAdornment,style:{paddingRight:12}},{props:({ownerState:f})=>f.multiline,style:{padding:"25px 12px 8px"}},{props:({ownerState:f,size:p})=>f.multiline&&p==="small",style:{paddingTop:21,paddingBottom:4}},{props:({ownerState:f})=>f.multiline&&f.hiddenLabel,style:{paddingTop:16,paddingBottom:17}},{props:({ownerState:f})=>f.multiline&&f.hiddenLabel&&f.size==="small",style:{paddingTop:8,paddingBottom:9}}]}})),E9=ye(Ac,{name:"MuiFilledInput",slot:"Input",overridesResolver:wc})(Nt(({theme:t})=>({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12,...!t.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:t.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:t.palette.mode==="light"?null:"#fff",caretColor:t.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},...t.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[t.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},variants:[{props:{size:"small"},style:{paddingTop:21,paddingBottom:4}},{props:({ownerState:r})=>r.hiddenLabel,style:{paddingTop:16,paddingBottom:17}},{props:({ownerState:r})=>r.startAdornment,style:{paddingLeft:0}},{props:({ownerState:r})=>r.endAdornment,style:{paddingRight:0}},{props:({ownerState:r})=>r.hiddenLabel&&r.size==="small",style:{paddingTop:8,paddingBottom:9}},{props:({ownerState:r})=>r.multiline,style:{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}}]}))),c1=R.forwardRef(function(r,l){const i=Et({props:r,name:"MuiFilledInput"}),{disableUnderline:s=!1,components:u={},componentsProps:f,fullWidth:p=!1,hiddenLabel:m,inputComponent:h="input",multiline:K=!1,slotProps:v,slots:y={},type:x="text",...E}=i,T={...i,disableUnderline:s,fullWidth:p,inputComponent:h,multiline:K,type:x},M=x9(i),_={root:{ownerState:T},input:{ownerState:T}},L=v??f?en(_,v??f):_,O=y.root??u.Root??T9,w=y.input??u.Input??E9;return q.jsx(u1,{slots:{root:O,input:w},slotProps:L,fullWidth:p,inputComponent:h,multiline:K,ref:l,type:x,...E,classes:M})});c1.muiName="Input";function C9(t){return vt("MuiFormControl",t)}yt("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const w9=t=>{const{classes:r,margin:l,fullWidth:i}=t,s={root:["root",l!=="none"&&`margin${gt(l)}`,i&&"fullWidth"]};return bt(s,C9,r)},R9=ye("div",{name:"MuiFormControl",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:l}=t;return[r.root,r[`margin${gt(l.margin)}`],l.fullWidth&&r.fullWidth]}})({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top",variants:[{props:{margin:"normal"},style:{marginTop:16,marginBottom:8}},{props:{margin:"dense"},style:{marginTop:8,marginBottom:4}},{props:{fullWidth:!0},style:{width:"100%"}}]}),A9=R.forwardRef(function(r,l){const i=Et({props:r,name:"MuiFormControl"}),{children:s,className:u,color:f="primary",component:p="div",disabled:m=!1,error:h=!1,focused:K,fullWidth:v=!1,hiddenLabel:y=!1,margin:x="none",required:E=!1,size:T="medium",variant:M="outlined",..._}=i,L={...i,color:f,component:p,disabled:m,error:h,fullWidth:v,hiddenLabel:y,margin:x,required:E,size:T,variant:M},O=w9(L),[w,A]=R.useState(()=>{let j=!1;return s&&R.Children.forEach(s,C=>{if(!ed(C,["Input","Select"]))return;const V=ed(C,["Select"])?C.props.input:C;V&&$y(V.props)&&(j=!0)}),j}),[B,k]=R.useState(()=>{let j=!1;return s&&R.Children.forEach(s,C=>{ed(C,["Input","Select"])&&(Ju(C.props,!0)||Ju(C.props.inputProps,!0))&&(j=!0)}),j}),[Z,W]=R.useState(!1);m&&Z&&W(!1);const ee=K!==void 0&&!m?K:Z;let I;R.useRef(!1);const S=R.useCallback(()=>{k(!0)},[]),F=R.useCallback(()=>{k(!1)},[]),P=R.useMemo(()=>({adornedStart:w,setAdornedStart:A,color:f,disabled:m,error:h,filled:B,focused:ee,fullWidth:v,hiddenLabel:y,size:T,onBlur:()=>{W(!1)},onFocus:()=>{W(!0)},onEmpty:F,onFilled:S,registerEffect:I,required:E,variant:M}),[w,f,m,h,B,ee,v,y,I,F,S,E,T,M]);return q.jsx(s1.Provider,{value:P,children:q.jsx(R9,{as:p,ownerState:L,className:Me(O.root,u),ref:l,..._,children:s})})});function O9(t){return vt("MuiFormHelperText",t)}const cm=yt("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var fm;const M9=t=>{const{classes:r,contained:l,size:i,disabled:s,error:u,filled:f,focused:p,required:m}=t,h={root:["root",s&&"disabled",u&&"error",i&&`size${gt(i)}`,l&&"contained",p&&"focused",f&&"filled",m&&"required"]};return bt(h,O9,r)},D9=ye("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:l}=t;return[r.root,l.size&&r[`size${gt(l.size)}`],l.contained&&r.contained,l.filled&&r.filled]}})(Nt(({theme:t})=>({color:(t.vars||t).palette.text.secondary,...t.typography.caption,textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${cm.disabled}`]:{color:(t.vars||t).palette.text.disabled},[`&.${cm.error}`]:{color:(t.vars||t).palette.error.main},variants:[{props:{size:"small"},style:{marginTop:4}},{props:({ownerState:r})=>r.contained,style:{marginLeft:14,marginRight:14}}]}))),N9=R.forwardRef(function(r,l){const i=Et({props:r,name:"MuiFormHelperText"}),{children:s,className:u,component:f="p",disabled:p,error:m,filled:h,focused:K,margin:v,required:y,variant:x,...E}=i,T=bi(),M=yi({props:i,muiFormControl:T,states:["variant","size","disabled","error","filled","focused","required"]}),_={...i,component:f,contained:M.variant==="filled"||M.variant==="outlined",variant:M.variant,size:M.size,disabled:M.disabled,error:M.error,filled:M.filled,focused:M.focused,required:M.required};delete _.ownerState;const L=M9(_);return q.jsx(D9,{as:f,className:Me(L.root,u),ref:l,...E,ownerState:_,children:s===" "?fm||(fm=q.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"})):s})});function B9(t){return vt("MuiFormLabel",t)}const zo=yt("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),_9=t=>{const{classes:r,color:l,focused:i,disabled:s,error:u,filled:f,required:p}=t,m={root:["root",`color${gt(l)}`,s&&"disabled",u&&"error",f&&"filled",i&&"focused",p&&"required"],asterisk:["asterisk",u&&"error"]};return bt(m,B9,r)},z9=ye("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:l}=t;return[r.root,l.color==="secondary"&&r.colorSecondary,l.filled&&r.filled]}})(Nt(({theme:t})=>({color:(t.vars||t).palette.text.secondary,...t.typography.body1,lineHeight:"1.4375em",padding:0,position:"relative",variants:[...Object.entries(t.palette).filter(us()).map(([r])=>({props:{color:r},style:{[`&.${zo.focused}`]:{color:(t.vars||t).palette[r].main}}})),{props:{},style:{[`&.${zo.disabled}`]:{color:(t.vars||t).palette.text.disabled},[`&.${zo.error}`]:{color:(t.vars||t).palette.error.main}}}]}))),L9=ye("span",{name:"MuiFormLabel",slot:"Asterisk"})(Nt(({theme:t})=>({[`&.${zo.error}`]:{color:(t.vars||t).palette.error.main}}))),U9=R.forwardRef(function(r,l){const i=Et({props:r,name:"MuiFormLabel"}),{children:s,className:u,color:f,component:p="label",disabled:m,error:h,filled:K,focused:v,required:y,...x}=i,E=bi(),T=yi({props:i,muiFormControl:E,states:["color","required","focused","disabled","error","filled"]}),M={...i,color:T.color||"primary",component:p,disabled:T.disabled,error:T.error,filled:T.filled,focused:T.focused,required:T.required},_=_9(M);return q.jsxs(z9,{as:p,ownerState:M,className:Me(_.root,u),ref:l,...x,children:[s,T.required&&q.jsxs(L9,{ownerState:M,"aria-hidden":!0,className:_.asterisk,children:[" ","*"]})]})});function Cd(t){return`scale(${t}, ${t**2})`}const k9={entering:{opacity:1,transform:Cd(1)},entered:{opacity:1,transform:"none"}},rd=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),ec=R.forwardRef(function(r,l){const{addEndListener:i,appear:s=!0,children:u,easing:f,in:p,onEnter:m,onEntered:h,onEntering:K,onExit:v,onExited:y,onExiting:x,style:E,timeout:T="auto",TransitionComponent:M=Lr,..._}=r,L=ai(),O=R.useRef(),w=os(),A=R.useRef(null),B=un(A,vi(u),l),k=j=>C=>{if(j){const V=A.current;C===void 0?j(V):j(V,C)}},Z=k(K),W=k((j,C)=>{K4(j);const{duration:V,delay:oe,easing:te}=Xu({style:E,timeout:T,easing:f},{mode:"enter"});let D;T==="auto"?(D=w.transitions.getAutoHeightDuration(j.clientHeight),O.current=D):D=V,j.style.transition=[w.transitions.create("opacity",{duration:D,delay:oe}),w.transitions.create("transform",{duration:rd?D:D*.666,delay:oe,easing:te})].join(","),m&&m(j,C)}),ee=k(h),I=k(x),S=k(j=>{const{duration:C,delay:V,easing:oe}=Xu({style:E,timeout:T,easing:f},{mode:"exit"});let te;T==="auto"?(te=w.transitions.getAutoHeightDuration(j.clientHeight),O.current=te):te=C,j.style.transition=[w.transitions.create("opacity",{duration:te,delay:V}),w.transitions.create("transform",{duration:rd?te:te*.666,delay:rd?V:V||te*.333,easing:oe})].join(","),j.style.opacity=0,j.style.transform=Cd(.75),v&&v(j)}),F=k(y),P=j=>{T==="auto"&&L.start(O.current||0,j),i&&i(A.current,j)};return q.jsx(M,{appear:s,in:p,nodeRef:A,onEnter:W,onEntered:ee,onEntering:Z,onExit:S,onExited:F,onExiting:I,addEndListener:P,timeout:T==="auto"?null:T,..._,children:(j,{ownerState:C,...V})=>R.cloneElement(u,{style:{opacity:0,transform:Cd(.75),visibility:j==="exited"&&!p?"hidden":void 0,...k9[j],...E,...u.props.style},ref:B,...V})})});ec&&(ec.muiSupportAuto=!0);const H9=t=>{const{classes:r,disableUnderline:l}=t,s=bt({root:["root",!l&&"underline"],input:["input"]},Yy,r);return{...r,...s}},j9=ye(Rc,{shouldForwardProp:t=>zr(t)||t==="classes",name:"MuiInput",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:l}=t;return[...Cc(t,r),!l.disableUnderline&&r.underline]}})(Nt(({theme:t})=>{let l=t.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return t.vars&&(l=t.alpha(t.vars.palette.common.onBackground,t.vars.opacity.inputUnderline)),{position:"relative",variants:[{props:({ownerState:i})=>i.formControl,style:{"label + &":{marginTop:16}}},{props:({ownerState:i})=>!i.disableUnderline,style:{"&::after":{left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${xo.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${xo.error}`]:{"&::before, &::after":{borderBottomColor:(t.vars||t).palette.error.main}},"&::before":{borderBottom:`1px solid ${l}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:t.transitions.create("border-bottom-color",{duration:t.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${xo.disabled}, .${xo.error}):before`]:{borderBottom:`2px solid ${(t.vars||t).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${l}`}},[`&.${xo.disabled}:before`]:{borderBottomStyle:"dotted"}}},...Object.entries(t.palette).filter(us()).map(([i])=>({props:{color:i,disableUnderline:!1},style:{"&::after":{borderBottom:`2px solid ${(t.vars||t).palette[i].main}`}}}))]}})),$9=ye(Ac,{name:"MuiInput",slot:"Input",overridesResolver:wc})({}),f1=R.forwardRef(function(r,l){const i=Et({props:r,name:"MuiInput"}),{disableUnderline:s=!1,components:u={},componentsProps:f,fullWidth:p=!1,inputComponent:m="input",multiline:h=!1,slotProps:K,slots:v={},type:y="text",...x}=i,E=H9(i),M={root:{ownerState:{disableUnderline:s}}},_=K??f?en(K??f,M):M,L=v.root??u.Root??j9,O=v.input??u.Input??$9;return q.jsx(u1,{slots:{root:L,input:O},slotProps:_,fullWidth:p,inputComponent:m,multiline:h,ref:l,type:y,...x,classes:E})});f1.muiName="Input";function P9(t){return vt("MuiInputLabel",t)}yt("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const q9=t=>{const{classes:r,formControl:l,size:i,shrink:s,disableAnimation:u,variant:f,required:p}=t,m={root:["root",l&&"formControl",!u&&"animated",s&&"shrink",i&&i!=="medium"&&`size${gt(i)}`,f],asterisk:[p&&"asterisk"]},h=bt(m,P9,r);return{...r,...h}},Y9=ye(U9,{shouldForwardProp:t=>zr(t)||t==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:l}=t;return[{[`& .${zo.asterisk}`]:r.asterisk},r.root,l.formControl&&r.formControl,l.size==="small"&&r.sizeSmall,l.shrink&&r.shrink,!l.disableAnimation&&r.animated,l.focused&&r.focused,r[l.variant]]}})(Nt(({theme:t})=>({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%",variants:[{props:({ownerState:r})=>r.formControl,style:{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"}},{props:{size:"small"},style:{transform:"translate(0, 17px) scale(1)"}},{props:({ownerState:r})=>r.shrink,style:{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"}},{props:({ownerState:r})=>!r.disableAnimation,style:{transition:t.transitions.create(["color","transform","max-width"],{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut})}},{props:{variant:"filled"},style:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"}},{props:{variant:"filled",size:"small"},style:{transform:"translate(12px, 13px) scale(1)"}},{props:({variant:r,ownerState:l})=>r==="filled"&&l.shrink,style:{userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"}},{props:({variant:r,ownerState:l,size:i})=>r==="filled"&&l.shrink&&i==="small",style:{transform:"translate(12px, 4px) scale(0.75)"}},{props:{variant:"outlined"},style:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"}},{props:{variant:"outlined",size:"small"},style:{transform:"translate(14px, 9px) scale(1)"}},{props:({variant:r,ownerState:l})=>r==="outlined"&&l.shrink,style:{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}}]}))),V9=R.forwardRef(function(r,l){const i=Et({name:"MuiInputLabel",props:r}),{disableAnimation:s=!1,margin:u,shrink:f,variant:p,className:m,...h}=i,K=bi();let v=f;typeof v>"u"&&K&&(v=K.filled||K.focused||K.adornedStart);const y=yi({props:i,muiFormControl:K,states:["size","variant","required","focused"]}),x={...i,disableAnimation:s,formControl:K,shrink:v,size:y.size,variant:y.variant,required:y.required,focused:y.focused},E=q9(x);return q.jsx(Y9,{"data-shrink":v,ref:l,className:Me(E.root,m),...h,ownerState:x,classes:E})}),G9=R.createContext({});function F9(t){return vt("MuiList",t)}yt("MuiList",["root","padding","dense","subheader"]);const X9=t=>{const{classes:r,disablePadding:l,dense:i,subheader:s}=t;return bt({root:["root",!l&&"padding",i&&"dense",s&&"subheader"]},F9,r)},Z9=ye("ul",{name:"MuiList",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:l}=t;return[r.root,!l.disablePadding&&r.padding,l.dense&&r.dense,l.subheader&&r.subheader]}})({listStyle:"none",margin:0,padding:0,position:"relative",variants:[{props:({ownerState:t})=>!t.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:t})=>t.subheader,style:{paddingTop:0}}]}),Q9=R.forwardRef(function(r,l){const i=Et({props:r,name:"MuiList"}),{children:s,className:u,component:f="ul",dense:p=!1,disablePadding:m=!1,subheader:h,...K}=i,v=R.useMemo(()=>({dense:p}),[p]),y={...i,component:f,dense:p,disablePadding:m},x=X9(y);return q.jsx(G9.Provider,{value:v,children:q.jsxs(Z9,{as:f,className:Me(x.root,u),ref:l,ownerState:y,...K,children:[h,s]})})});function ad(t,r,l){return t===r?t.firstChild:r&&r.nextElementSibling?r.nextElementSibling:l?null:t.firstChild}function dm(t,r,l){return t===r?l?t.firstChild:t.lastChild:r&&r.previousElementSibling?r.previousElementSibling:l?null:t.lastChild}function _4(t,r){if(r===void 0)return!0;let l=t.innerText;return l===void 0&&(l=t.textContent),l=l.trim().toLowerCase(),l.length===0?!1:r.repeating?l[0]===r.keys[0]:l.startsWith(r.keys.join(""))}function To(t,r,l,i,s,u){let f=!1,p=s(t,r,r?l:!1);for(;p;){if(p===t.firstChild){if(f)return!1;f=!0}const m=i?!1:p.disabled||p.getAttribute("aria-disabled")==="true";if(!p.hasAttribute("tabindex")||!_4(p,u)||m)p=s(t,p,l);else return p.focus(),!0}return!1}const I9=R.forwardRef(function(r,l){const{actions:i,autoFocus:s=!1,autoFocusItem:u=!1,children:f,className:p,disabledItemsFocusable:m=!1,disableListWrap:h=!1,onKeyDown:K,variant:v="selectedMenu",...y}=r,x=R.useRef(null),E=R.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Nr(()=>{s&&x.current.focus()},[s]),R.useImperativeHandle(i,()=>({adjustStyleForScrollbar:(O,{direction:w})=>{const A=!x.current.style.width;if(O.clientHeight<x.current.clientHeight&&A){const B=`${B4(mr(O))}px`;x.current.style[w==="rtl"?"paddingLeft":"paddingRight"]=B,x.current.style.width=`calc(100% + ${B})`}return x.current}}),[]);const T=O=>{const w=x.current,A=O.key;if(O.ctrlKey||O.metaKey||O.altKey){K&&K(O);return}const k=Rn(w).activeElement;if(A==="ArrowDown")O.preventDefault(),To(w,k,h,m,ad);else if(A==="ArrowUp")O.preventDefault(),To(w,k,h,m,dm);else if(A==="Home")O.preventDefault(),To(w,null,h,m,ad);else if(A==="End")O.preventDefault(),To(w,null,h,m,dm);else if(A.length===1){const Z=E.current,W=A.toLowerCase(),ee=performance.now();Z.keys.length>0&&(ee-Z.lastTime>500?(Z.keys=[],Z.repeating=!0,Z.previousKeyMatched=!0):Z.repeating&&W!==Z.keys[0]&&(Z.repeating=!1)),Z.lastTime=ee,Z.keys.push(W);const I=k&&!Z.repeating&&_4(k,Z);Z.previousKeyMatched&&(I||To(w,k,!1,m,ad,Z))?O.preventDefault():Z.previousKeyMatched=!1}K&&K(O)},M=un(x,l);let _=-1;R.Children.forEach(f,(O,w)=>{if(!R.isValidElement(O)){_===w&&(_+=1,_>=f.length&&(_=-1));return}O.props.disabled||(v==="selectedMenu"&&O.props.selected||_===-1)&&(_=w),_===w&&(O.props.disabled||O.props.muiSkipListHighlight||O.type.muiSkipListHighlight)&&(_+=1,_>=f.length&&(_=-1))});const L=R.Children.map(f,(O,w)=>{if(w===_){const A={};return u&&(A.autoFocus=!0),O.props.tabIndex===void 0&&v==="selectedMenu"&&(A.tabIndex=0),R.cloneElement(O,A)}return O});return q.jsx(Q9,{role:"menu",ref:M,className:p,onKeyDown:T,tabIndex:s?0:-1,...y,children:L})});function W9(t){return vt("MuiPopover",t)}yt("MuiPopover",["root","paper"]);function pm(t,r){let l=0;return typeof r=="number"?l=r:r==="center"?l=t.height/2:r==="bottom"&&(l=t.height),l}function hm(t,r){let l=0;return typeof r=="number"?l=r:r==="center"?l=t.width/2:r==="right"&&(l=t.width),l}function mm(t){return[t.horizontal,t.vertical].map(r=>typeof r=="number"?`${r}px`:r).join(" ")}function Du(t){return typeof t=="function"?t():t}const J9=t=>{const{classes:r}=t;return bt({root:["root"],paper:["paper"]},W9,r)},eb=ye(S9,{name:"MuiPopover",slot:"Root"})({}),z4=ye(t7,{name:"MuiPopover",slot:"Paper"})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),tb=R.forwardRef(function(r,l){const i=Et({props:r,name:"MuiPopover"}),{action:s,anchorEl:u,anchorOrigin:f={vertical:"top",horizontal:"left"},anchorPosition:p,anchorReference:m="anchorEl",children:h,className:K,container:v,elevation:y=8,marginThreshold:x=16,open:E,PaperProps:T={},slots:M={},slotProps:_={},transformOrigin:L={vertical:"top",horizontal:"left"},TransitionComponent:O,transitionDuration:w="auto",TransitionProps:A={},disableScrollLock:B=!1,...k}=i,Z=R.useRef(),W={...i,anchorOrigin:f,anchorReference:m,elevation:y,marginThreshold:x,transformOrigin:L,TransitionComponent:O,transitionDuration:w,TransitionProps:A},ee=J9(W),I=R.useCallback(()=>{if(m==="anchorPosition")return p;const Se=Du(u),Re=(Se&&Se.nodeType===1?Se:Rn(Z.current).body).getBoundingClientRect();return{top:Re.top+pm(Re,f.vertical),left:Re.left+hm(Re,f.horizontal)}},[u,f.horizontal,f.vertical,p,m]),S=R.useCallback(Se=>({vertical:pm(Se,L.vertical),horizontal:hm(Se,L.horizontal)}),[L.horizontal,L.vertical]),F=R.useCallback(Se=>{const Ne={width:Se.offsetWidth,height:Se.offsetHeight},Re=S(Ne);if(m==="none")return{top:null,left:null,transformOrigin:mm(Re)};const lt=I();let Ce=lt.top-Re.vertical,Ve=lt.left-Re.horizontal;const Ct=Ce+Ne.height,_e=Ve+Ne.width,Ge=mr(Du(u)),St=Ge.innerHeight-x,Xe=Ge.innerWidth-x;if(x!==null&&Ce<x){const je=Ce-x;Ce-=je,Re.vertical+=je}else if(x!==null&&Ct>St){const je=Ct-St;Ce-=je,Re.vertical+=je}if(x!==null&&Ve<x){const je=Ve-x;Ve-=je,Re.horizontal+=je}else if(_e>Xe){const je=_e-Xe;Ve-=je,Re.horizontal+=je}return{top:`${Math.round(Ce)}px`,left:`${Math.round(Ve)}px`,transformOrigin:mm(Re)}},[u,m,I,S,x]),[P,j]=R.useState(E),C=R.useCallback(()=>{const Se=Z.current;if(!Se)return;const Ne=F(Se);Ne.top!==null&&Se.style.setProperty("top",Ne.top),Ne.left!==null&&(Se.style.left=Ne.left),Se.style.transformOrigin=Ne.transformOrigin,j(!0)},[F]);R.useEffect(()=>(B&&window.addEventListener("scroll",C),()=>window.removeEventListener("scroll",C)),[u,B,C]);const V=()=>{C()},oe=()=>{j(!1)};R.useEffect(()=>{E&&C()}),R.useImperativeHandle(s,()=>E?{updatePosition:()=>{C()}}:null,[E,C]),R.useEffect(()=>{if(!E)return;const Se=ss(()=>{C()}),Ne=mr(Du(u));return Ne.addEventListener("resize",Se),()=>{Se.clear(),Ne.removeEventListener("resize",Se)}},[u,E,C]);let te=w;const D={slots:{transition:O,...M},slotProps:{transition:A,paper:T,..._}},[X,se]=Tt("transition",{elementType:ec,externalForwardedProps:D,ownerState:W,getSlotProps:Se=>({...Se,onEntering:(Ne,Re)=>{Se.onEntering?.(Ne,Re),V()},onExited:Ne=>{Se.onExited?.(Ne),oe()}}),additionalProps:{appear:!0,in:E}});w==="auto"&&!X.muiSupportAuto&&(te=void 0);const ae=v||(u?Rn(Du(u)).body:void 0),[ue,{slots:fe,slotProps:ce,...ze}]=Tt("root",{ref:l,elementType:eb,externalForwardedProps:{...D,...k},shouldForwardComponentProp:!0,additionalProps:{slots:{backdrop:M.backdrop},slotProps:{backdrop:P8(typeof _.backdrop=="function"?_.backdrop(W):_.backdrop,{invisible:!0})},container:ae,open:E},ownerState:W,className:Me(ee.root,K)}),[be,Le]=Tt("paper",{ref:Z,className:ee.paper,elementType:z4,externalForwardedProps:D,shouldForwardComponentProp:!0,additionalProps:{elevation:y,style:P?void 0:{opacity:0}},ownerState:W});return q.jsx(ue,{...ze,...!Zu(ue)&&{slots:fe,slotProps:ce,disableScrollLock:B},children:q.jsx(X,{...se,timeout:te,children:q.jsx(be,{...Le,children:h})})})});function nb(t){return vt("MuiMenu",t)}yt("MuiMenu",["root","paper","list"]);const rb={vertical:"top",horizontal:"right"},ab={vertical:"top",horizontal:"left"},lb=t=>{const{classes:r}=t;return bt({root:["root"],paper:["paper"],list:["list"]},nb,r)},ib=ye(tb,{shouldForwardProp:t=>zr(t)||t==="classes",name:"MuiMenu",slot:"Root"})({}),ob=ye(z4,{name:"MuiMenu",slot:"Paper"})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),sb=ye(I9,{name:"MuiMenu",slot:"List"})({outline:0}),ub=R.forwardRef(function(r,l){const i=Et({props:r,name:"MuiMenu"}),{autoFocus:s=!0,children:u,className:f,disableAutoFocusItem:p=!1,MenuListProps:m={},onClose:h,open:K,PaperProps:v={},PopoverClasses:y,transitionDuration:x="auto",TransitionProps:{onEntering:E,...T}={},variant:M="selectedMenu",slots:_={},slotProps:L={},...O}=i,w=is(),A={...i,autoFocus:s,disableAutoFocusItem:p,MenuListProps:m,onEntering:E,PaperProps:v,transitionDuration:x,TransitionProps:T,variant:M},B=lb(A),k=s&&!p&&K,Z=R.useRef(null),W=(te,D)=>{Z.current&&Z.current.adjustStyleForScrollbar(te,{direction:w?"rtl":"ltr"}),E&&E(te,D)},ee=te=>{te.key==="Tab"&&(te.preventDefault(),h&&h(te,"tabKeyDown"))};let I=-1;R.Children.map(u,(te,D)=>{R.isValidElement(te)&&(te.props.disabled||(M==="selectedMenu"&&te.props.selected||I===-1)&&(I=D))});const S={slots:_,slotProps:{list:m,transition:T,paper:v,...L}},F=hi({elementType:_.root,externalSlotProps:L.root,ownerState:A,className:[B.root,f]}),[P,j]=Tt("paper",{className:B.paper,elementType:ob,externalForwardedProps:S,shouldForwardComponentProp:!0,ownerState:A}),[C,V]=Tt("list",{className:Me(B.list,m.className),elementType:sb,shouldForwardComponentProp:!0,externalForwardedProps:S,getSlotProps:te=>({...te,onKeyDown:D=>{ee(D),te.onKeyDown?.(D)}}),ownerState:A}),oe=typeof S.slotProps.transition=="function"?S.slotProps.transition(A):S.slotProps.transition;return q.jsx(ib,{onClose:h,anchorOrigin:{vertical:"bottom",horizontal:w?"right":"left"},transformOrigin:w?rb:ab,slots:{root:_.root,paper:P,backdrop:_.backdrop,..._.transition&&{transition:_.transition}},slotProps:{root:F,paper:j,backdrop:typeof L.backdrop=="function"?L.backdrop(A):L.backdrop,transition:{...oe,onEntering:(...te)=>{W(...te),oe?.onEntering?.(...te)}}},open:K,ref:l,transitionDuration:x,ownerState:A,...O,classes:y,children:q.jsx(C,{actions:Z,autoFocus:s&&(I===-1||p),autoFocusItem:k,variant:M,...V,children:u})})});function cb(t){return vt("MuiNativeSelect",t)}const d1=yt("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),fb=t=>{const{classes:r,variant:l,disabled:i,multiple:s,open:u,error:f}=t,p={select:["select",l,i&&"disabled",s&&"multiple",f&&"error"],icon:["icon",`icon${gt(l)}`,u&&"iconOpen",i&&"disabled"]};return bt(p,cb,r)},L4=ye("select",{name:"MuiNativeSelect"})(({theme:t})=>({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":{borderRadius:0},[`&.${d1.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(t.vars||t).palette.background.paper},variants:[{props:({ownerState:r})=>r.variant!=="filled"&&r.variant!=="outlined",style:{"&&&":{paddingRight:24,minWidth:16}}},{props:{variant:"filled"},style:{"&&&":{paddingRight:32}}},{props:{variant:"outlined"},style:{borderRadius:(t.vars||t).shape.borderRadius,"&:focus":{borderRadius:(t.vars||t).shape.borderRadius},"&&&":{paddingRight:32}}}]})),db=ye(L4,{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:zr,overridesResolver:(t,r)=>{const{ownerState:l}=t;return[r.select,r[l.variant],l.error&&r.error,{[`&.${d1.multiple}`]:r.multiple}]}})({}),U4=ye("svg",{name:"MuiNativeSelect"})(({theme:t})=>({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(t.vars||t).palette.action.active,[`&.${d1.disabled}`]:{color:(t.vars||t).palette.action.disabled},variants:[{props:({ownerState:r})=>r.open,style:{transform:"rotate(180deg)"}},{props:{variant:"filled"},style:{right:7}},{props:{variant:"outlined"},style:{right:7}}]})),pb=ye(U4,{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(t,r)=>{const{ownerState:l}=t;return[r.icon,l.variant&&r[`icon${gt(l.variant)}`],l.open&&r.iconOpen]}})({}),hb=R.forwardRef(function(r,l){const{className:i,disabled:s,error:u,IconComponent:f,inputRef:p,variant:m="standard",...h}=r,K={...r,disabled:s,variant:m,error:u},v=fb(K);return q.jsxs(R.Fragment,{children:[q.jsx(db,{ownerState:K,className:Me(v.select,i),disabled:s,ref:p||l,...h}),r.multiple?null:q.jsx(pb,{as:f,ownerState:K,className:v.icon})]})});var Km;const mb=ye("fieldset",{name:"MuiNotchedOutlined",shouldForwardProp:zr})({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),Kb=ye("legend",{name:"MuiNotchedOutlined",shouldForwardProp:zr})(Nt(({theme:t})=>({float:"unset",width:"auto",overflow:"hidden",variants:[{props:({ownerState:r})=>!r.withLabel,style:{padding:0,lineHeight:"11px",transition:t.transitions.create("width",{duration:150,easing:t.transitions.easing.easeOut})}},{props:({ownerState:r})=>r.withLabel,style:{display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:t.transitions.create("max-width",{duration:50,easing:t.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}}},{props:({ownerState:r})=>r.withLabel&&r.notched,style:{maxWidth:"100%",transition:t.transitions.create("max-width",{duration:100,easing:t.transitions.easing.easeOut,delay:50})}}]})));function gb(t){const{children:r,classes:l,className:i,label:s,notched:u,...f}=t,p=s!=null&&s!=="",m={...t,notched:u,withLabel:p};return q.jsx(mb,{"aria-hidden":!0,className:i,ownerState:m,...f,children:q.jsx(Kb,{ownerState:m,children:p?q.jsx("span",{children:s}):Km||(Km=q.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"}))})})}const vb=t=>{const{classes:r}=t,i=bt({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},Vy,r);return{...r,...i}},yb=ye(Rc,{shouldForwardProp:t=>zr(t)||t==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:Cc})(Nt(({theme:t})=>{const r=t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{position:"relative",borderRadius:(t.vars||t).shape.borderRadius,[`&:hover .${xr.notchedOutline}`]:{borderColor:(t.vars||t).palette.text.primary},"@media (hover: none)":{[`&:hover .${xr.notchedOutline}`]:{borderColor:t.vars?t.alpha(t.vars.palette.common.onBackground,.23):r}},[`&.${xr.focused} .${xr.notchedOutline}`]:{borderWidth:2},variants:[...Object.entries(t.palette).filter(us()).map(([l])=>({props:{color:l},style:{[`&.${xr.focused} .${xr.notchedOutline}`]:{borderColor:(t.vars||t).palette[l].main}}})),{props:{},style:{[`&.${xr.error} .${xr.notchedOutline}`]:{borderColor:(t.vars||t).palette.error.main},[`&.${xr.disabled} .${xr.notchedOutline}`]:{borderColor:(t.vars||t).palette.action.disabled}}},{props:({ownerState:l})=>l.startAdornment,style:{paddingLeft:14}},{props:({ownerState:l})=>l.endAdornment,style:{paddingRight:14}},{props:({ownerState:l})=>l.multiline,style:{padding:"16.5px 14px"}},{props:({ownerState:l,size:i})=>l.multiline&&i==="small",style:{padding:"8.5px 14px"}}]}})),bb=ye(gb,{name:"MuiOutlinedInput",slot:"NotchedOutline"})(Nt(({theme:t})=>{const r=t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:t.vars?t.alpha(t.vars.palette.common.onBackground,.23):r}})),Sb=ye(Ac,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:wc})(Nt(({theme:t})=>({padding:"16.5px 14px",...!t.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:t.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:t.palette.mode==="light"?null:"#fff",caretColor:t.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},...t.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[t.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},variants:[{props:{size:"small"},style:{padding:"8.5px 14px"}},{props:({ownerState:r})=>r.multiline,style:{padding:0}},{props:({ownerState:r})=>r.startAdornment,style:{paddingLeft:0}},{props:({ownerState:r})=>r.endAdornment,style:{paddingRight:0}}]}))),p1=R.forwardRef(function(r,l){const i=Et({props:r,name:"MuiOutlinedInput"}),{components:s={},fullWidth:u=!1,inputComponent:f="input",label:p,multiline:m=!1,notched:h,slots:K={},slotProps:v={},type:y="text",...x}=i,E=vb(i),T=bi(),M=yi({props:i,muiFormControl:T,states:["color","disabled","error","focused","hiddenLabel","size","required"]}),_={...i,color:M.color||"primary",disabled:M.disabled,error:M.error,focused:M.focused,formControl:T,fullWidth:u,hiddenLabel:M.hiddenLabel,multiline:m,size:M.size,type:y},L=K.root??s.Root??yb,O=K.input??s.Input??Sb,[w,A]=Tt("notchedOutline",{elementType:bb,className:E.notchedOutline,shouldForwardComponentProp:!0,ownerState:_,externalForwardedProps:{slots:K,slotProps:v},additionalProps:{label:p!=null&&p!==""&&M.required?q.jsxs(R.Fragment,{children:[p," ","*"]}):p}});return q.jsx(u1,{slots:{root:L,input:O},slotProps:v,renderSuffix:B=>q.jsx(w,{...A,notched:typeof h<"u"?h:!!(B.startAdornment||B.filled||B.focused)}),fullWidth:u,inputComponent:f,multiline:m,ref:l,type:y,...x,classes:{...E,notchedOutline:null}})});p1.muiName="Input";function k4(t){return vt("MuiSelect",t)}const Eo=yt("MuiSelect",["root","select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]);var gm;const xb=ye(L4,{name:"MuiSelect",slot:"Select",overridesResolver:(t,r)=>{const{ownerState:l}=t;return[{[`&.${Eo.select}`]:r.select},{[`&.${Eo.select}`]:r[l.variant]},{[`&.${Eo.error}`]:r.error},{[`&.${Eo.multiple}`]:r.multiple}]}})({[`&.${Eo.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),Tb=ye(U4,{name:"MuiSelect",slot:"Icon",overridesResolver:(t,r)=>{const{ownerState:l}=t;return[r.icon,l.variant&&r[`icon${gt(l.variant)}`],l.open&&r.iconOpen]}})({}),Eb=ye("input",{shouldForwardProp:t=>f4(t)&&t!=="classes",name:"MuiSelect",slot:"NativeInput"})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function vm(t,r){return typeof r=="object"&&r!==null?t===r:String(t)===String(r)}function Cb(t){return t==null||typeof t=="string"&&!t.trim()}const wb=t=>{const{classes:r,variant:l,disabled:i,multiple:s,open:u,error:f}=t,p={select:["select",l,i&&"disabled",s&&"multiple",f&&"error"],icon:["icon",`icon${gt(l)}`,u&&"iconOpen",i&&"disabled"],nativeInput:["nativeInput"]};return bt(p,k4,r)},Rb=R.forwardRef(function(r,l){const{"aria-describedby":i,"aria-label":s,autoFocus:u,autoWidth:f,children:p,className:m,defaultOpen:h,defaultValue:K,disabled:v,displayEmpty:y,error:x=!1,IconComponent:E,inputRef:T,labelId:M,MenuProps:_={},multiple:L,name:O,onBlur:w,onChange:A,onClose:B,onFocus:k,onOpen:Z,open:W,readOnly:ee,renderValue:I,required:S,SelectDisplayProps:F={},tabIndex:P,type:j,value:C,variant:V="standard",...oe}=r,[te,D]=vd({controlled:C,default:K,name:"Select"}),[X,se]=vd({controlled:W,default:h,name:"Select"}),ae=R.useRef(null),ue=R.useRef(null),[fe,ce]=R.useState(null),{current:ze}=R.useRef(W!=null),[be,Le]=R.useState(),Se=un(l,T),Ne=R.useCallback(he=>{ue.current=he,he&&ce(he)},[]),Re=fe?.parentNode;R.useImperativeHandle(Se,()=>({focus:()=>{ue.current.focus()},node:ae.current,value:te}),[te]),R.useEffect(()=>{h&&X&&fe&&!ze&&(Le(f?null:Re.clientWidth),ue.current.focus())},[fe,f]),R.useEffect(()=>{u&&ue.current.focus()},[u]),R.useEffect(()=>{if(!M)return;const he=Rn(ue.current).getElementById(M);if(he){const Ye=()=>{getSelection().isCollapsed&&ue.current.focus()};return he.addEventListener("click",Ye),()=>{he.removeEventListener("click",Ye)}}},[M]);const lt=(he,Ye)=>{he?Z&&Z(Ye):B&&B(Ye),ze||(Le(f?null:Re.clientWidth),se(he))},Ce=he=>{he.button===0&&(he.preventDefault(),ue.current.focus(),lt(!0,he))},Ve=he=>{lt(!1,he)},Ct=R.Children.toArray(p),_e=he=>{const Ye=Ct.find(pt=>pt.props.value===he.target.value);Ye!==void 0&&(D(Ye.props.value),A&&A(he,Ye))},Ge=he=>Ye=>{let pt;if(Ye.currentTarget.hasAttribute("tabindex")){if(L){pt=Array.isArray(te)?te.slice():[];const fn=te.indexOf(he.props.value);fn===-1?pt.push(he.props.value):pt.splice(fn,1)}else pt=he.props.value;if(he.props.onClick&&he.props.onClick(Ye),te!==pt&&(D(pt),A)){const fn=Ye.nativeEvent||Ye,qn=new fn.constructor(fn.type,fn);Object.defineProperty(qn,"target",{writable:!0,value:{value:pt,name:O}}),A(qn,he)}L||lt(!1,Ye)}},St=he=>{ee||[" ","ArrowUp","ArrowDown","Enter"].includes(he.key)&&(he.preventDefault(),lt(!0,he))},Xe=fe!==null&&X,je=he=>{!Xe&&w&&(Object.defineProperty(he,"target",{writable:!0,value:{value:te,name:O}}),w(he))};delete oe["aria-invalid"];let me,$t;const it=[];let Kn=!1;(Ju({value:te})||y)&&(I?me=I(te):Kn=!0);const Zt=Ct.map(he=>{if(!R.isValidElement(he))return null;let Ye;if(L){if(!Array.isArray(te))throw new Error(ra(2));Ye=te.some(pt=>vm(pt,he.props.value)),Ye&&Kn&&it.push(he.props.children)}else Ye=vm(te,he.props.value),Ye&&Kn&&($t=he.props.children);return R.cloneElement(he,{"aria-selected":Ye?"true":"false",onClick:Ge(he),onKeyUp:pt=>{pt.key===" "&&pt.preventDefault(),he.props.onKeyUp&&he.props.onKeyUp(pt)},role:"option",selected:Ye,value:void 0,"data-value":he.props.value})});Kn&&(L?it.length===0?me=null:me=it.reduce((he,Ye,pt)=>(he.push(Ye),pt<it.length-1&&he.push(", "),he),[]):me=$t);let ot=be;!f&&ze&&fe&&(ot=Re.clientWidth);let At;typeof P<"u"?At=P:At=v?null:0;const st=F.id||(O?`mui-component-select-${O}`:void 0),tn={...r,variant:V,value:te,open:Xe,error:x},Ue=wb(tn),nn={..._.PaperProps,...typeof _.slotProps?.paper=="function"?_.slotProps.paper(tn):_.slotProps?.paper},Vt={..._.MenuListProps,...typeof _.slotProps?.list=="function"?_.slotProps.list(tn):_.slotProps?.list},cn=Zd();return q.jsxs(R.Fragment,{children:[q.jsx(xb,{as:"div",ref:Ne,tabIndex:At,role:"combobox","aria-controls":Xe?cn:void 0,"aria-disabled":v?"true":void 0,"aria-expanded":Xe?"true":"false","aria-haspopup":"listbox","aria-label":s,"aria-labelledby":[M,st].filter(Boolean).join(" ")||void 0,"aria-describedby":i,"aria-required":S?"true":void 0,"aria-invalid":x?"true":void 0,onKeyDown:St,onMouseDown:v||ee?null:Ce,onBlur:je,onFocus:k,...F,ownerState:tn,className:Me(F.className,Ue.select,m),id:st,children:Cb(me)?gm||(gm=q.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"})):me}),q.jsx(Eb,{"aria-invalid":x,value:Array.isArray(te)?te.join(","):te,name:O,ref:ae,"aria-hidden":!0,onChange:_e,tabIndex:-1,disabled:v,className:Ue.nativeInput,autoFocus:u,required:S,...oe,ownerState:tn}),q.jsx(Tb,{as:E,className:Ue.icon,ownerState:tn}),q.jsx(ub,{id:`menu-${O||""}`,anchorEl:Re,open:Xe,onClose:Ve,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},..._,slotProps:{..._.slotProps,list:{"aria-labelledby":M,role:"listbox","aria-multiselectable":L?"true":void 0,disableListWrap:!0,id:cn,...Vt},paper:{...nn,style:{minWidth:ot,...nn!=null?nn.style:null}}},children:Zt})]})}),Ab=t=>{const{classes:r}=t,i=bt({root:["root"]},k4,r);return{...r,...i}},h1={name:"MuiSelect",slot:"Root",shouldForwardProp:t=>zr(t)&&t!=="variant"},Ob=ye(f1,h1)(""),Mb=ye(p1,h1)(""),Db=ye(c1,h1)(""),H4=R.forwardRef(function(r,l){const i=Et({name:"MuiSelect",props:r}),{autoWidth:s=!1,children:u,classes:f={},className:p,defaultOpen:m=!1,displayEmpty:h=!1,IconComponent:K=Fy,id:v,input:y,inputProps:x,label:E,labelId:T,MenuProps:M,multiple:_=!1,native:L=!1,onClose:O,onOpen:w,open:A,renderValue:B,SelectDisplayProps:k,variant:Z="outlined",...W}=i,ee=L?hb:Rb,I=bi(),S=yi({props:i,muiFormControl:I,states:["variant","error"]}),F=S.variant||Z,P={...i,variant:F,classes:f},j=Ab(P),{root:C,...V}=j,oe=y||{standard:q.jsx(Ob,{ownerState:P}),outlined:q.jsx(Mb,{label:E,ownerState:P}),filled:q.jsx(Db,{ownerState:P})}[F],te=un(l,vi(oe));return q.jsx(R.Fragment,{children:R.cloneElement(oe,{inputComponent:ee,inputProps:{children:u,error:S.error,IconComponent:K,variant:F,type:void 0,multiple:_,...L?{id:v}:{autoWidth:s,defaultOpen:m,displayEmpty:h,labelId:T,MenuProps:M,onClose:O,onOpen:w,open:A,renderValue:B,SelectDisplayProps:{id:v,...k}},...x,classes:x?en(V,x.classes):V,...y?y.props.inputProps:{}},...(_&&L||h)&&F==="outlined"?{notched:!0}:{},ref:te,className:Me(oe.props.className,p,j.root),...!y&&{variant:F},...W})})});H4.muiName="Select";function Nb(t){return vt("MuiTooltip",t)}const Mt=yt("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);function Bb(t){return Math.round(t*1e5)/1e5}const _b=t=>{const{classes:r,disableInteractive:l,arrow:i,touch:s,placement:u}=t,f={popper:["popper",!l&&"popperInteractive",i&&"popperArrow"],tooltip:["tooltip",i&&"tooltipArrow",s&&"touch",`tooltipPlacement${gt(u.split("-")[0])}`],arrow:["arrow"]};return bt(f,Nb,r)},zb=ye(N4,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,r)=>{const{ownerState:l}=t;return[r.popper,!l.disableInteractive&&r.popperInteractive,l.arrow&&r.popperArrow,!l.open&&r.popperClose]}})(Nt(({theme:t})=>({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none",variants:[{props:({ownerState:r})=>!r.disableInteractive,style:{pointerEvents:"auto"}},{props:({open:r})=>!r,style:{pointerEvents:"none"}},{props:({ownerState:r})=>r.arrow,style:{[`&[data-popper-placement*="bottom"] .${Mt.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${Mt.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${Mt.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}},[`&[data-popper-placement*="left"] .${Mt.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}}}},{props:({ownerState:r})=>r.arrow&&!r.isRtl,style:{[`&[data-popper-placement*="right"] .${Mt.arrow}`]:{left:0,marginLeft:"-0.71em"}}},{props:({ownerState:r})=>r.arrow&&!!r.isRtl,style:{[`&[data-popper-placement*="right"] .${Mt.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:r})=>r.arrow&&!r.isRtl,style:{[`&[data-popper-placement*="left"] .${Mt.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:r})=>r.arrow&&!!r.isRtl,style:{[`&[data-popper-placement*="left"] .${Mt.arrow}`]:{left:0,marginLeft:"-0.71em"}}}]}))),Lb=ye("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,r)=>{const{ownerState:l}=t;return[r.tooltip,l.touch&&r.touch,l.arrow&&r.tooltipArrow,r[`tooltipPlacement${gt(l.placement.split("-")[0])}`]]}})(Nt(({theme:t})=>({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:t.alpha(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium,[`.${Mt.popper}[data-popper-placement*="left"] &`]:{transformOrigin:"right center"},[`.${Mt.popper}[data-popper-placement*="right"] &`]:{transformOrigin:"left center"},[`.${Mt.popper}[data-popper-placement*="top"] &`]:{transformOrigin:"center bottom",marginBottom:"14px"},[`.${Mt.popper}[data-popper-placement*="bottom"] &`]:{transformOrigin:"center top",marginTop:"14px"},variants:[{props:({ownerState:r})=>r.arrow,style:{position:"relative",margin:0}},{props:({ownerState:r})=>r.touch,style:{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${Bb(16/14)}em`,fontWeight:t.typography.fontWeightRegular}},{props:({ownerState:r})=>!r.isRtl,style:{[`.${Mt.popper}[data-popper-placement*="left"] &`]:{marginRight:"14px"},[`.${Mt.popper}[data-popper-placement*="right"] &`]:{marginLeft:"14px"}}},{props:({ownerState:r})=>!r.isRtl&&r.touch,style:{[`.${Mt.popper}[data-popper-placement*="left"] &`]:{marginRight:"24px"},[`.${Mt.popper}[data-popper-placement*="right"] &`]:{marginLeft:"24px"}}},{props:({ownerState:r})=>!!r.isRtl,style:{[`.${Mt.popper}[data-popper-placement*="left"] &`]:{marginLeft:"14px"},[`.${Mt.popper}[data-popper-placement*="right"] &`]:{marginRight:"14px"}}},{props:({ownerState:r})=>!!r.isRtl&&r.touch,style:{[`.${Mt.popper}[data-popper-placement*="left"] &`]:{marginLeft:"24px"},[`.${Mt.popper}[data-popper-placement*="right"] &`]:{marginRight:"24px"}}},{props:({ownerState:r})=>r.touch,style:{[`.${Mt.popper}[data-popper-placement*="top"] &`]:{marginBottom:"24px"}}},{props:({ownerState:r})=>r.touch,style:{[`.${Mt.popper}[data-popper-placement*="bottom"] &`]:{marginTop:"24px"}}}]}))),Ub=ye("span",{name:"MuiTooltip",slot:"Arrow"})(Nt(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:t.alpha(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let Nu=!1;const ym=new Tc;let Co={x:0,y:0};function Bu(t,r){return(l,...i)=>{r&&r(l,...i),t(l,...i)}}const kb=R.forwardRef(function(r,l){const i=Et({props:r,name:"MuiTooltip"}),{arrow:s=!1,children:u,classes:f,components:p={},componentsProps:m={},describeChild:h=!1,disableFocusListener:K=!1,disableHoverListener:v=!1,disableInteractive:y=!1,disableTouchListener:x=!1,enterDelay:E=100,enterNextDelay:T=0,enterTouchDelay:M=700,followCursor:_=!1,id:L,leaveDelay:O=0,leaveTouchDelay:w=1500,onClose:A,onOpen:B,open:k,placement:Z="bottom",PopperComponent:W,PopperProps:ee={},slotProps:I={},slots:S={},title:F,TransitionComponent:P,TransitionProps:j,...C}=i,V=R.isValidElement(u)?u:q.jsx("span",{children:u}),oe=os(),te=is(),[D,X]=R.useState(),[se,ae]=R.useState(null),ue=R.useRef(!1),fe=y||_,ce=ai(),ze=ai(),be=ai(),Le=ai(),[Se,Ne]=vd({controlled:k,default:!1,name:"Tooltip",state:"open"});let Re=Se;const lt=Zd(L),Ce=R.useRef(),Ve=rr(()=>{Ce.current!==void 0&&(document.body.style.WebkitUserSelect=Ce.current,Ce.current=void 0),Le.clear()});R.useEffect(()=>Ve,[Ve]);const Ct=Be=>{ym.clear(),Nu=!0,Ne(!0),B&&!Re&&B(Be)},_e=rr(Be=>{ym.start(800+O,()=>{Nu=!1}),Ne(!1),A&&Re&&A(Be),ce.start(oe.transitions.duration.shortest,()=>{ue.current=!1})}),Ge=Be=>{ue.current&&Be.type!=="touchstart"||(D&&D.removeAttribute("title"),ze.clear(),be.clear(),E||Nu&&T?ze.start(Nu?T:E,()=>{Ct(Be)}):Ct(Be))},St=Be=>{ze.clear(),be.start(O,()=>{_e(Be)})},[,Xe]=R.useState(!1),je=Be=>{Qu(Be.target)||(Xe(!1),St(Be))},me=Be=>{D||X(Be.currentTarget),Qu(Be.target)&&(Xe(!0),Ge(Be))},$t=Be=>{ue.current=!0;const On=V.props;On.onTouchStart&&On.onTouchStart(Be)},it=Be=>{$t(Be),be.clear(),ce.clear(),Ve(),Ce.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Le.start(M,()=>{document.body.style.WebkitUserSelect=Ce.current,Ge(Be)})},Kn=Be=>{V.props.onTouchEnd&&V.props.onTouchEnd(Be),Ve(),be.start(w,()=>{_e(Be)})};R.useEffect(()=>{if(!Re)return;function Be(On){On.key==="Escape"&&_e(On)}return document.addEventListener("keydown",Be),()=>{document.removeEventListener("keydown",Be)}},[_e,Re]);const Zt=un(vi(V),X,l);!F&&F!==0&&(Re=!1);const ot=R.useRef(),At=Be=>{const On=V.props;On.onMouseMove&&On.onMouseMove(Be),Co={x:Be.clientX,y:Be.clientY},ot.current&&ot.current.update()},st={},tn=typeof F=="string";h?(st.title=!Re&&tn&&!v?F:null,st["aria-describedby"]=Re?lt:null):(st["aria-label"]=tn?F:null,st["aria-labelledby"]=Re&&!tn?lt:null);const Ue={...st,...C,...V.props,className:Me(C.className,V.props.className),onTouchStart:$t,ref:Zt,..._?{onMouseMove:At}:{}},nn={};x||(Ue.onTouchStart=it,Ue.onTouchEnd=Kn),v||(Ue.onMouseOver=Bu(Ge,Ue.onMouseOver),Ue.onMouseLeave=Bu(St,Ue.onMouseLeave),fe||(nn.onMouseOver=Ge,nn.onMouseLeave=St)),K||(Ue.onFocus=Bu(me,Ue.onFocus),Ue.onBlur=Bu(je,Ue.onBlur),fe||(nn.onFocus=me,nn.onBlur=je));const Vt={...i,isRtl:te,arrow:s,disableInteractive:fe,placement:Z,PopperComponentProp:W,touch:ue.current},cn=typeof I.popper=="function"?I.popper(Vt):I.popper,he=R.useMemo(()=>{let Be=[{name:"arrow",enabled:!!se,options:{element:se,padding:4}}];return ee.popperOptions?.modifiers&&(Be=Be.concat(ee.popperOptions.modifiers)),cn?.popperOptions?.modifiers&&(Be=Be.concat(cn.popperOptions.modifiers)),{...ee.popperOptions,...cn?.popperOptions,modifiers:Be}},[se,ee.popperOptions,cn?.popperOptions]),Ye=_b(Vt),pt=typeof I.transition=="function"?I.transition(Vt):I.transition,fn={slots:{popper:p.Popper,transition:p.Transition??P,tooltip:p.Tooltip,arrow:p.Arrow,...S},slotProps:{arrow:I.arrow??m.arrow,popper:{...ee,...cn??m.popper},tooltip:I.tooltip??m.tooltip,transition:{...j,...pt??m.transition}}},[qn,cl]=Tt("popper",{elementType:zb,externalForwardedProps:fn,ownerState:Vt,className:Me(Ye.popper,ee?.className)}),[_a,sr]=Tt("transition",{elementType:ec,externalForwardedProps:fn,ownerState:Vt}),[Si,fl]=Tt("tooltip",{elementType:Lb,className:Ye.tooltip,externalForwardedProps:fn,ownerState:Vt}),[dl,za]=Tt("arrow",{elementType:Ub,className:Ye.arrow,externalForwardedProps:fn,ownerState:Vt,ref:ae});return q.jsxs(R.Fragment,{children:[R.cloneElement(V,Ue),q.jsx(qn,{as:W??N4,placement:Z,anchorEl:_?{getBoundingClientRect:()=>({top:Co.y,left:Co.x,right:Co.x,bottom:Co.y,width:0,height:0})}:D,popperRef:ot,open:D?Re:!1,id:lt,transition:!0,...nn,...cl,popperOptions:he,children:({TransitionProps:Be})=>q.jsx(_a,{timeout:oe.transitions.duration.shorter,...Be,...sr,children:q.jsxs(Si,{...fl,children:[F,s?q.jsx(dl,{...za}):null]})})})]})}),dr=n8({createStyledComponent:ye("div",{name:"MuiStack",slot:"Root"}),useThemeProps:t=>Et({props:t,name:"MuiStack"})});function Hb(t){return vt("MuiTab",t)}const Jn=yt("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper","icon"]),jb=t=>{const{classes:r,textColor:l,fullWidth:i,wrapped:s,icon:u,label:f,selected:p,disabled:m}=t,h={root:["root",u&&f&&"labelIcon",`textColor${gt(l)}`,i&&"fullWidth",s&&"wrapped",p&&"selected",m&&"disabled"],icon:["iconWrapper","icon"]};return bt(h,Hb,r)},$b=ye(S4,{name:"MuiTab",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:l}=t;return[r.root,l.label&&l.icon&&r.labelIcon,r[`textColor${gt(l.textColor)}`],l.fullWidth&&r.fullWidth,l.wrapped&&r.wrapped,{[`& .${Jn.iconWrapper}`]:r.iconWrapper},{[`& .${Jn.icon}`]:r.icon}]}})(Nt(({theme:t})=>({...t.typography.button,maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center",lineHeight:1.25,variants:[{props:({ownerState:r})=>r.label&&(r.iconPosition==="top"||r.iconPosition==="bottom"),style:{flexDirection:"column"}},{props:({ownerState:r})=>r.label&&r.iconPosition!=="top"&&r.iconPosition!=="bottom",style:{flexDirection:"row"}},{props:({ownerState:r})=>r.icon&&r.label,style:{minHeight:72,paddingTop:9,paddingBottom:9}},{props:({ownerState:r,iconPosition:l})=>r.icon&&r.label&&l==="top",style:{[`& > .${Jn.icon}`]:{marginBottom:6}}},{props:({ownerState:r,iconPosition:l})=>r.icon&&r.label&&l==="bottom",style:{[`& > .${Jn.icon}`]:{marginTop:6}}},{props:({ownerState:r,iconPosition:l})=>r.icon&&r.label&&l==="start",style:{[`& > .${Jn.icon}`]:{marginRight:t.spacing(1)}}},{props:({ownerState:r,iconPosition:l})=>r.icon&&r.label&&l==="end",style:{[`& > .${Jn.icon}`]:{marginLeft:t.spacing(1)}}},{props:{textColor:"inherit"},style:{color:"inherit",opacity:.6,[`&.${Jn.selected}`]:{opacity:1},[`&.${Jn.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}}},{props:{textColor:"primary"},style:{color:(t.vars||t).palette.text.secondary,[`&.${Jn.selected}`]:{color:(t.vars||t).palette.primary.main},[`&.${Jn.disabled}`]:{color:(t.vars||t).palette.text.disabled}}},{props:{textColor:"secondary"},style:{color:(t.vars||t).palette.text.secondary,[`&.${Jn.selected}`]:{color:(t.vars||t).palette.secondary.main},[`&.${Jn.disabled}`]:{color:(t.vars||t).palette.text.disabled}}},{props:({ownerState:r})=>r.fullWidth,style:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"}},{props:({ownerState:r})=>r.wrapped,style:{fontSize:t.typography.pxToRem(12)}}]}))),bm=R.forwardRef(function(r,l){const i=Et({props:r,name:"MuiTab"}),{className:s,disabled:u=!1,disableFocusRipple:f=!1,fullWidth:p,icon:m,iconPosition:h="top",indicator:K,label:v,onChange:y,onClick:x,onFocus:E,selected:T,selectionFollowsFocus:M,textColor:_="inherit",value:L,wrapped:O=!1,...w}=i,A={...i,disabled:u,disableFocusRipple:f,selected:T,icon:!!m,iconPosition:h,label:!!v,fullWidth:p,textColor:_,wrapped:O},B=jb(A),k=m&&v&&R.isValidElement(m)?R.cloneElement(m,{className:Me(B.icon,m.props.className)}):m,Z=ee=>{!T&&y&&y(ee,L),x&&x(ee)},W=ee=>{M&&!T&&y&&y(ee,L),E&&E(ee)};return q.jsxs($b,{focusRipple:!f,className:Me(B.root,s),ref:l,role:"tab","aria-selected":T,disabled:u,onClick:Z,onFocus:W,ownerState:A,tabIndex:T?0:-1,...w,children:[h==="top"||h==="start"?q.jsxs(R.Fragment,{children:[k,v]}):q.jsxs(R.Fragment,{children:[v,k]}),K]})}),Pb=Wd(q.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})),qb=Wd(q.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}));function Yb(t){return(1+Math.sin(Math.PI*t-Math.PI/2))/2}function Vb(t,r,l,i={},s=()=>{}){const{ease:u=Yb,duration:f=300}=i;let p=null;const m=r[t];let h=!1;const K=()=>{h=!0},v=y=>{if(h){s(new Error("Animation cancelled"));return}p===null&&(p=y);const x=Math.min(1,(y-p)/f);if(r[t]=u(x)*(l-m)+m,x>=1){requestAnimationFrame(()=>{s(null)});return}requestAnimationFrame(v)};return m===l?(s(new Error("Element already at target position")),K):(requestAnimationFrame(v),K)}const Gb={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function Fb(t){const{onChange:r,...l}=t,i=R.useRef(),s=R.useRef(null),u=()=>{i.current=s.current.offsetHeight-s.current.clientHeight};return Nr(()=>{const f=ss(()=>{const m=i.current;u(),m!==i.current&&r(i.current)}),p=mr(s.current);return p.addEventListener("resize",f),()=>{f.clear(),p.removeEventListener("resize",f)}},[r]),R.useEffect(()=>{u(),r(i.current)},[r]),q.jsx("div",{style:Gb,...l,ref:s})}function Xb(t){return vt("MuiTabScrollButton",t)}const Zb=yt("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),Qb=t=>{const{classes:r,orientation:l,disabled:i}=t;return bt({root:["root",l,i&&"disabled"]},Xb,r)},Ib=ye(S4,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:l}=t;return[r.root,l.orientation&&r[l.orientation]]}})({width:40,flexShrink:0,opacity:.8,[`&.${Zb.disabled}`]:{opacity:0},variants:[{props:{orientation:"vertical"},style:{width:"100%",height:40,"& svg":{transform:"var(--TabScrollButton-svgRotate)"}}}]}),Wb=R.forwardRef(function(r,l){const i=Et({props:r,name:"MuiTabScrollButton"}),{className:s,slots:u={},slotProps:f={},direction:p,orientation:m,disabled:h,...K}=i,v=is(),y={isRtl:v,...i},x=Qb(y),E=u.StartScrollButtonIcon??Pb,T=u.EndScrollButtonIcon??qb,M=hi({elementType:E,externalSlotProps:f.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:y}),_=hi({elementType:T,externalSlotProps:f.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:y});return q.jsx(Ib,{component:"div",className:Me(x.root,s),ref:l,role:null,ownerState:y,tabIndex:null,...K,style:{...K.style,...m==="vertical"&&{"--TabScrollButton-svgRotate":`rotate(${v?-90:90}deg)`}},children:p==="left"?q.jsx(E,{...M}):q.jsx(T,{..._})})});function Jb(t){return vt("MuiTabs",t)}const ld=yt("MuiTabs",["root","vertical","list","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),Sm=(t,r)=>t===r?t.firstChild:r&&r.nextElementSibling?r.nextElementSibling:t.firstChild,xm=(t,r)=>t===r?t.lastChild:r&&r.previousElementSibling?r.previousElementSibling:t.lastChild,_u=(t,r,l)=>{let i=!1,s=l(t,r);for(;s;){if(s===t.firstChild){if(i)return;i=!0}const u=s.disabled||s.getAttribute("aria-disabled")==="true";if(!s.hasAttribute("tabindex")||u)s=l(t,s);else{s.focus();return}}},eS=t=>{const{vertical:r,fixed:l,hideScrollbar:i,scrollableX:s,scrollableY:u,centered:f,scrollButtonsHideMobile:p,classes:m}=t;return bt({root:["root",r&&"vertical"],scroller:["scroller",l&&"fixed",i&&"hideScrollbar",s&&"scrollableX",u&&"scrollableY"],list:["list","flexContainer",r&&"flexContainerVertical",r&&"vertical",f&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",p&&"scrollButtonsHideMobile"],scrollableX:[s&&"scrollableX"],hideScrollbar:[i&&"hideScrollbar"]},Jb,m)},tS=ye("div",{name:"MuiTabs",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:l}=t;return[{[`& .${ld.scrollButtons}`]:r.scrollButtons},{[`& .${ld.scrollButtons}`]:l.scrollButtonsHideMobile&&r.scrollButtonsHideMobile},r.root,l.vertical&&r.vertical]}})(Nt(({theme:t})=>({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex",variants:[{props:({ownerState:r})=>r.vertical,style:{flexDirection:"column"}},{props:({ownerState:r})=>r.scrollButtonsHideMobile,style:{[`& .${ld.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}}}]}))),nS=ye("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(t,r)=>{const{ownerState:l}=t;return[r.scroller,l.fixed&&r.fixed,l.hideScrollbar&&r.hideScrollbar,l.scrollableX&&r.scrollableX,l.scrollableY&&r.scrollableY]}})({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap",variants:[{props:({ownerState:t})=>t.fixed,style:{overflowX:"hidden",width:"100%"}},{props:({ownerState:t})=>t.hideScrollbar,style:{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}},{props:({ownerState:t})=>t.scrollableX,style:{overflowX:"auto",overflowY:"hidden"}},{props:({ownerState:t})=>t.scrollableY,style:{overflowY:"auto",overflowX:"hidden"}}]}),rS=ye("div",{name:"MuiTabs",slot:"List",overridesResolver:(t,r)=>{const{ownerState:l}=t;return[r.list,r.flexContainer,l.vertical&&r.flexContainerVertical,l.centered&&r.centered]}})({display:"flex",variants:[{props:({ownerState:t})=>t.vertical,style:{flexDirection:"column"}},{props:({ownerState:t})=>t.centered,style:{justifyContent:"center"}}]}),aS=ye("span",{name:"MuiTabs",slot:"Indicator"})(Nt(({theme:t})=>({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create(),variants:[{props:{indicatorColor:"primary"},style:{backgroundColor:(t.vars||t).palette.primary.main}},{props:{indicatorColor:"secondary"},style:{backgroundColor:(t.vars||t).palette.secondary.main}},{props:({ownerState:r})=>r.vertical,style:{height:"100%",width:2,right:0}}]}))),lS=ye(Fb)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Tm={},iS=R.forwardRef(function(r,l){const i=Et({props:r,name:"MuiTabs"}),s=os(),u=is(),{"aria-label":f,"aria-labelledby":p,action:m,centered:h=!1,children:K,className:v,component:y="div",allowScrollButtonsMobile:x=!1,indicatorColor:E="primary",onChange:T,orientation:M="horizontal",ScrollButtonComponent:_,scrollButtons:L="auto",selectionFollowsFocus:O,slots:w={},slotProps:A={},TabIndicatorProps:B={},TabScrollButtonProps:k={},textColor:Z="primary",value:W,variant:ee="standard",visibleScrollbar:I=!1,...S}=i,F=ee==="scrollable",P=M==="vertical",j=P?"scrollTop":"scrollLeft",C=P?"top":"left",V=P?"bottom":"right",oe=P?"clientHeight":"clientWidth",te=P?"height":"width",D={...i,component:y,allowScrollButtonsMobile:x,indicatorColor:E,orientation:M,vertical:P,scrollButtons:L,textColor:Z,variant:ee,visibleScrollbar:I,fixed:!F,hideScrollbar:F&&!I,scrollableX:F&&!P,scrollableY:F&&P,centered:h&&!F,scrollButtonsHideMobile:!x},X=eS(D),se=hi({elementType:w.StartScrollButtonIcon,externalSlotProps:A.startScrollButtonIcon,ownerState:D}),ae=hi({elementType:w.EndScrollButtonIcon,externalSlotProps:A.endScrollButtonIcon,ownerState:D}),[ue,fe]=R.useState(!1),[ce,ze]=R.useState(Tm),[be,Le]=R.useState(!1),[Se,Ne]=R.useState(!1),[Re,lt]=R.useState(!1),[Ce,Ve]=R.useState({overflow:"hidden",scrollbarWidth:0}),Ct=new Map,_e=R.useRef(null),Ge=R.useRef(null),St={slots:w,slotProps:{indicator:B,scrollButton:k,...A}},Xe=()=>{const de=_e.current;let Ke;if(de){const Oe=de.getBoundingClientRect();Ke={clientWidth:de.clientWidth,scrollLeft:de.scrollLeft,scrollTop:de.scrollTop,scrollWidth:de.scrollWidth,top:Oe.top,bottom:Oe.bottom,left:Oe.left,right:Oe.right}}let Ae;if(de&&W!==!1){const Oe=Ge.current.children;if(Oe.length>0){const ht=Oe[Ct.get(W)];Ae=ht?ht.getBoundingClientRect():null}}return{tabsMeta:Ke,tabMeta:Ae}},je=rr(()=>{const{tabsMeta:de,tabMeta:Ke}=Xe();let Ae=0,Oe;P?(Oe="top",Ke&&de&&(Ae=Ke.top-de.top+de.scrollTop)):(Oe=u?"right":"left",Ke&&de&&(Ae=(u?-1:1)*(Ke[Oe]-de[Oe]+de.scrollLeft)));const ht={[Oe]:Ae,[te]:Ke?Ke[te]:0};if(typeof ce[Oe]!="number"||typeof ce[te]!="number")ze(ht);else{const vn=Math.abs(ce[Oe]-ht[Oe]),Ur=Math.abs(ce[te]-ht[te]);(vn>=1||Ur>=1)&&ze(ht)}}),me=(de,{animation:Ke=!0}={})=>{Ke?Vb(j,_e.current,de,{duration:s.transitions.duration.standard}):_e.current[j]=de},$t=de=>{let Ke=_e.current[j];P?Ke+=de:Ke+=de*(u?-1:1),me(Ke)},it=()=>{const de=_e.current[oe];let Ke=0;const Ae=Array.from(Ge.current.children);for(let Oe=0;Oe<Ae.length;Oe+=1){const ht=Ae[Oe];if(Ke+ht[oe]>de){Oe===0&&(Ke=de);break}Ke+=ht[oe]}return Ke},Kn=()=>{$t(-1*it())},Zt=()=>{$t(it())},[ot,{onChange:At,...st}]=Tt("scrollbar",{className:Me(X.scrollableX,X.hideScrollbar),elementType:lS,shouldForwardComponentProp:!0,externalForwardedProps:St,ownerState:D}),tn=R.useCallback(de=>{At?.(de),Ve({overflow:null,scrollbarWidth:de})},[At]),[Ue,nn]=Tt("scrollButtons",{className:Me(X.scrollButtons,k.className),elementType:Wb,externalForwardedProps:St,ownerState:D,additionalProps:{orientation:M,slots:{StartScrollButtonIcon:w.startScrollButtonIcon||w.StartScrollButtonIcon,EndScrollButtonIcon:w.endScrollButtonIcon||w.EndScrollButtonIcon},slotProps:{startScrollButtonIcon:se,endScrollButtonIcon:ae}}}),Vt=()=>{const de={};de.scrollbarSizeListener=F?q.jsx(ot,{...st,onChange:tn}):null;const Ae=F&&(L==="auto"&&(be||Se)||L===!0);return de.scrollButtonStart=Ae?q.jsx(Ue,{direction:u?"right":"left",onClick:Kn,disabled:!be,...nn}):null,de.scrollButtonEnd=Ae?q.jsx(Ue,{direction:u?"left":"right",onClick:Zt,disabled:!Se,...nn}):null,de},cn=rr(de=>{const{tabsMeta:Ke,tabMeta:Ae}=Xe();if(!(!Ae||!Ke)){if(Ae[C]<Ke[C]){const Oe=Ke[j]+(Ae[C]-Ke[C]);me(Oe,{animation:de})}else if(Ae[V]>Ke[V]){const Oe=Ke[j]+(Ae[V]-Ke[V]);me(Oe,{animation:de})}}}),he=rr(()=>{F&&L!==!1&&lt(!Re)});R.useEffect(()=>{const de=ss(()=>{_e.current&&je()});let Ke;const Ae=vn=>{vn.forEach(Ur=>{Ur.removedNodes.forEach(La=>{Ke?.unobserve(La)}),Ur.addedNodes.forEach(La=>{Ke?.observe(La)})}),de(),he()},Oe=mr(_e.current);Oe.addEventListener("resize",de);let ht;return typeof ResizeObserver<"u"&&(Ke=new ResizeObserver(de),Array.from(Ge.current.children).forEach(vn=>{Ke.observe(vn)})),typeof MutationObserver<"u"&&(ht=new MutationObserver(Ae),ht.observe(Ge.current,{childList:!0})),()=>{de.clear(),Oe.removeEventListener("resize",de),ht?.disconnect(),Ke?.disconnect()}},[je,he]),R.useEffect(()=>{const de=Array.from(Ge.current.children),Ke=de.length;if(typeof IntersectionObserver<"u"&&Ke>0&&F&&L!==!1){const Ae=de[0],Oe=de[Ke-1],ht={root:_e.current,threshold:.99},vn=kr=>{Le(!kr[0].isIntersecting)},Ur=new IntersectionObserver(vn,ht);Ur.observe(Ae);const La=kr=>{Ne(!kr[0].isIntersecting)},xi=new IntersectionObserver(La,ht);return xi.observe(Oe),()=>{Ur.disconnect(),xi.disconnect()}}},[F,L,Re,K?.length]),R.useEffect(()=>{fe(!0)},[]),R.useEffect(()=>{je()}),R.useEffect(()=>{cn(Tm!==ce)},[cn,ce]),R.useImperativeHandle(m,()=>({updateIndicator:je,updateScrollButtons:he}),[je,he]);const[Ye,pt]=Tt("indicator",{className:Me(X.indicator,B.className),elementType:aS,externalForwardedProps:St,ownerState:D,additionalProps:{style:ce}}),fn=q.jsx(Ye,{...pt});let qn=0;const cl=R.Children.map(K,de=>{if(!R.isValidElement(de))return null;const Ke=de.props.value===void 0?qn:de.props.value;Ct.set(Ke,qn);const Ae=Ke===W;return qn+=1,R.cloneElement(de,{fullWidth:ee==="fullWidth",indicator:Ae&&!ue&&fn,selected:Ae,selectionFollowsFocus:O,onChange:T,textColor:Z,value:Ke,...qn===1&&W===!1&&!de.props.tabIndex?{tabIndex:0}:{}})}),_a=de=>{if(de.altKey||de.shiftKey||de.ctrlKey||de.metaKey)return;const Ke=Ge.current,Ae=Rn(Ke).activeElement;if(Ae.getAttribute("role")!=="tab")return;let ht=M==="horizontal"?"ArrowLeft":"ArrowUp",vn=M==="horizontal"?"ArrowRight":"ArrowDown";switch(M==="horizontal"&&u&&(ht="ArrowRight",vn="ArrowLeft"),de.key){case ht:de.preventDefault(),_u(Ke,Ae,xm);break;case vn:de.preventDefault(),_u(Ke,Ae,Sm);break;case"Home":de.preventDefault(),_u(Ke,null,Sm);break;case"End":de.preventDefault(),_u(Ke,null,xm);break}},sr=Vt(),[Si,fl]=Tt("root",{ref:l,className:Me(X.root,v),elementType:tS,externalForwardedProps:{...St,...S,component:y},ownerState:D}),[dl,za]=Tt("scroller",{ref:_e,className:X.scroller,elementType:nS,externalForwardedProps:St,ownerState:D,additionalProps:{style:{overflow:Ce.overflow,[P?`margin${u?"Left":"Right"}`:"marginBottom"]:I?void 0:-Ce.scrollbarWidth}}}),[Be,On]=Tt("list",{ref:Ge,className:Me(X.list,X.flexContainer),elementType:rS,externalForwardedProps:St,ownerState:D,getSlotProps:de=>({...de,onKeyDown:Ke=>{_a(Ke),de.onKeyDown?.(Ke)}})});return q.jsxs(Si,{...fl,children:[sr.scrollButtonStart,sr.scrollbarSizeListener,q.jsxs(dl,{...za,children:[q.jsx(Be,{"aria-label":f,"aria-labelledby":p,"aria-orientation":M==="vertical"?"vertical":null,role:"tablist",...On,children:cl}),ue&&fn]}),sr.scrollButtonEnd]})});function oS(t){return vt("MuiTextField",t)}yt("MuiTextField",["root"]);const sS={standard:f1,filled:c1,outlined:p1},uS=t=>{const{classes:r}=t;return bt({root:["root"]},oS,r)},cS=ye(A9,{name:"MuiTextField",slot:"Root"})({}),tc=R.forwardRef(function(r,l){const i=Et({props:r,name:"MuiTextField"}),{autoComplete:s,autoFocus:u=!1,children:f,className:p,color:m="primary",defaultValue:h,disabled:K=!1,error:v=!1,FormHelperTextProps:y,fullWidth:x=!1,helperText:E,id:T,InputLabelProps:M,inputProps:_,InputProps:L,inputRef:O,label:w,maxRows:A,minRows:B,multiline:k=!1,name:Z,onBlur:W,onChange:ee,onFocus:I,placeholder:S,required:F=!1,rows:P,select:j=!1,SelectProps:C,slots:V={},slotProps:oe={},type:te,value:D,variant:X="outlined",...se}=i,ae={...i,autoFocus:u,color:m,disabled:K,error:v,fullWidth:x,multiline:k,required:F,select:j,variant:X},ue=uS(ae),fe=Zd(T),ce=E&&fe?`${fe}-helper-text`:void 0,ze=w&&fe?`${fe}-label`:void 0,be=sS[X],Le={slots:V,slotProps:{input:L,inputLabel:M,htmlInput:_,formHelperText:y,select:C,...oe}},Se={},Ne=Le.slotProps.inputLabel;X==="outlined"&&(Ne&&typeof Ne.shrink<"u"&&(Se.notched=Ne.shrink),Se.label=w),j&&((!C||!C.native)&&(Se.id=void 0),Se["aria-describedby"]=void 0);const[Re,lt]=Tt("root",{elementType:cS,shouldForwardComponentProp:!0,externalForwardedProps:{...Le,...se},ownerState:ae,className:Me(ue.root,p),ref:l,additionalProps:{disabled:K,error:v,fullWidth:x,required:F,color:m,variant:X}}),[Ce,Ve]=Tt("input",{elementType:be,externalForwardedProps:Le,additionalProps:Se,ownerState:ae}),[Ct,_e]=Tt("inputLabel",{elementType:V9,externalForwardedProps:Le,ownerState:ae}),[Ge,St]=Tt("htmlInput",{elementType:"input",externalForwardedProps:Le,ownerState:ae}),[Xe,je]=Tt("formHelperText",{elementType:N9,externalForwardedProps:Le,ownerState:ae}),[me,$t]=Tt("select",{elementType:H4,externalForwardedProps:Le,ownerState:ae}),it=q.jsx(Ce,{"aria-describedby":ce,autoComplete:s,autoFocus:u,defaultValue:h,fullWidth:x,multiline:k,name:Z,rows:P,maxRows:A,minRows:B,type:te,value:D,id:fe,inputRef:O,onBlur:W,onChange:ee,onFocus:I,placeholder:S,inputProps:St,slots:{input:V.htmlInput?Ge:void 0},...Ve});return q.jsxs(Re,{...lt,children:[w!=null&&w!==""&&q.jsx(Ct,{htmlFor:fe,id:ze,..._e,children:w}),j?q.jsx(me,{"aria-describedby":ce,id:fe,labelId:ze,value:D,input:it,...$t,children:f}):it,E&&q.jsx(Xe,{id:ce,...je,children:E})]})}),fS=`0	3.00	10.00
1	5.88	12.00
2	8.91	14.00
3	12.09	17.00
4	15.43	20.00
5	18.93	24.00
6	22.57	29.00
7	26.37	35.00
8	30.33	42.00
9	34.44	49.00
10	38.70	57.00
11	43.12	66.00
12	47.69	76.00
13	52.41	87.00
14	57.29	99.00
15	62.33	111.00
16	67.51	125.00
17	72.85	139.00
18	78.35	154.00
19	84.00	170.00
20	89.80	187.00
21	95.76	205.00
22	101.87	224.00
23	108.13	244.00
24	114.55	265.00
25	121.13	287.00
26	127.85	310.00
27	134.73	333.00
28	141.77	358.00
29	148.96	384.00
30	156.30	410.00
31	163.80	438.00
32	171.45	467.00
33	179.25	496.00
34	187.21	527.00
35	195.32	558.00
36	203.59	591.00
37	212.01	625.00
38	220.59	659.00
39	229.32	695.00
40	238.20	732.00
41	247.24	770.00
42	256.43	808.00
43	265.77	848.00
44	275.27	889.00
45	284.93	931.00
46	294.73	974.00
47	304.69	1.02K
48	314.81	1.06K
49	325.08	1.11K
50	335.50	1.16K
51	346.08	1.21K
52	356.81	1.25K
53	367.69	1.30K
54	378.73	1.36K
55	389.93	1.41K
56	401.27	1.46K
57	412.77	1.52K
58	424.43	1.57K
59	436.24	1.63K
60	448.20	1.69K
61	460.32	1.75K
62	472.59	1.81K
63	485.01	1.87K
64	497.59	1.93K
65	510.32	1.99K
66	523.21	2.06K
67	536.25	2.13K
68	549.45	2.19K
69	562.80	2.26K
70	576.30	2.33K
71	589.96	2.40K
72	603.77	2.47K
73	617.73	2.54K
74	631.85	2.62K
75	646.13	2.69K
76	660.55	2.77K
77	675.13	2.84K
78	689.87	2.92K
79	704.76	3.00K
80	719.80	3.08K
81	735.00	3.16K
82	750.35	3.25K
83	765.85	3.33K
84	781.51	3.42K
85	797.33	3.50K
86	813.29	3.59K
87	829.41	3.68K
88	845.69	3.77K
89	862.12	3.86K
90	878.70	3.95K
91	895.44	4.04K
92	912.33	4.14K
93	929.37	4.23K
94	946.57	4.33K
95	963.92	4.43K
96	981.43	4.53K
97	999.09	4.63K
98	1.02K	4.73K
99	1.03K	4.83K
100	1.05K	4.93K
101	1.07K	5.04K
102	1.09K	5.15K
103	1.11K	5.25K
104	1.13K	5.36K
105	1.15K	5.47K
106	1.16K	5.58K
107	1.18K	5.69K
108	1.20K	5.81K
109	1.22K	5.92K
110	1.24K	6.04K
111	1.26K	6.15K
112	1.28K	6.27K
113	1.30K	6.39K
114	1.32K	6.51K
115	1.34K	6.63K
116	1.36K	6.76K
117	1.38K	6.88K
118	1.41K	7.01K
119	1.43K	7.13K
120	1.45K	7.26K
121	1.47K	7.39K
122	1.49K	7.52K
123	1.51K	7.65K
124	1.53K	7.78K
125	1.56K	7.92K
126	1.58K	8.05K
127	1.60K	8.19K
128	1.62K	8.32K
129	1.65K	8.46K
130	1.67K	8.60K
131	1.69K	8.74K
132	1.71K	8.89K
133	1.74K	9.03K
134	1.76K	9.18K
135	1.78K	9.32K
136	1.81K	9.47K
137	1.83K	9.62K
138	1.86K	9.77K
139	1.88K	9.92K
140	1.90K	10.07K
141	1.93K	10.22K
142	1.95K	10.38K
143	1.98K	10.54K
144	2.00K	10.69K
145	2.03K	10.85K
146	2.05K	11.01K
147	2.08K	11.17K
148	2.10K	11.33K
149	2.13K	11.50K
150	2.16K	11.66K
151	2.18K	11.83K
152	2.21K	12.00K
153	2.23K	12.17K
154	2.26K	12.34K
155	2.29K	12.51K
156	2.31K	12.68K
157	2.34K	12.85K
158	2.37K	13.03K
159	2.39K	13.20K
160	2.42K	13.38K
161	2.45K	13.56K
162	2.48K	13.74K
163	2.51K	13.92K
164	2.53K	14.10K
165	2.56K	14.29K
166	2.59K	14.47K
167	2.62K	14.66K
168	2.65K	14.85K
169	2.68K	15.04K
170	2.70K	15.23K
171	2.73K	15.42K
172	2.76K	15.61K
173	2.79K	15.80K
174	2.82K	16.00K
175	2.85K	16.20K
176	2.88K	16.39K
177	2.91K	16.59K
178	2.94K	16.79K
179	2.97K	17.00K
180	3.00K	17.20K
181	3.03K	17.40K
182	3.06K	17.61K
183	3.09K	17.82K
184	3.13K	18.02K
185	3.16K	18.23K
186	3.19K	18.44K
187	3.22K	18.66K
188	3.25K	18.87K
189	3.28K	19.08K
190	3.31K	19.30K
191	3.35K	19.52K
192	3.38K	19.74K
193	3.41K	19.96K
194	3.44K	20.18K
195	3.48K	20.40K
196	3.51K	20.62K
197	3.54K	20.85K
198	3.58K	21.08K
199	3.61K	21.30K
200	3.64K	21.53K
201	3.68K	21.76K
202	3.71K	22.00K
203	3.74K	22.23K
204	3.78K	22.46K
205	3.81K	22.70K
206	3.85K	22.94K
207	3.88K	23.17K
208	3.92K	23.41K
209	3.95K	23.66K
210	3.99K	23.90K
211	4.02K	24.14K
212	4.06K	24.39K
213	4.09K	24.63K
214	4.13K	24.88K
215	4.16K	25.13K
216	4.20K	25.38K
217	4.24K	25.63K
218	4.27K	25.88K
219	4.31K	26.14K
220	4.35K	26.39K
221	4.38K	26.65K
222	4.42K	26.91K
223	4.46K	27.17K
224	4.49K	27.43K
225	4.53K	27.69K
226	4.57K	27.96K
227	4.61K	28.22K
228	4.64K	28.49K
229	4.68K	28.75K
230	4.72K	29.02K
231	4.76K	29.29K
232	4.80K	29.57K
233	4.84K	29.84K
234	4.87K	30.11K
235	4.91K	30.39K
236	4.95K	30.67K
237	4.99K	30.94K
238	5.03K	31.22K
239	5.07K	31.51K
240	5.11K	31.79K
241	5.15K	32.07K
242	5.19K	32.36K
243	5.23K	32.64K
244	5.27K	32.93K
245	5.31K	33.22K
246	5.35K	33.51K
247	5.39K	33.80K
248	5.43K	34.10K
249	5.47K	34.39K
250	5.52K	34.69K
251	5.56K	34.98K
252	5.60K	35.28K
253	5.64K	35.58K
254	5.68K	35.88K
255	5.72K	36.19K
256	5.77K	36.49K
257	5.81K	36.80K
258	5.85K	37.10K
259	5.89K	37.41K
260	5.94K	37.72K
261	5.98K	38.03K
262	6.02K	38.34K
263	6.07K	38.66K
264	6.11K	38.97K
265	6.15K	39.29K
266	6.20K	39.61K
267	6.24K	39.93K
268	6.28K	40.25K
269	6.33K	40.57K
270	6.37K	40.89K
271	6.42K	41.22K
272	6.46K	41.54K
273	6.51K	41.87K
274	6.55K	42.20K
275	6.60K	42.53K
276	6.64K	42.86K
277	6.69K	43.19K
278	6.73K	43.53K
279	6.78K	43.86K
280	6.82K	44.20K
281	6.87K	44.54K
282	6.92K	44.88K
283	6.96K	45.22K
284	7.01K	45.56K
285	7.06K	45.91K
286	7.10K	46.25K
287	7.15K	46.60K
288	7.20K	46.95K
289	7.24K	47.30K
290	7.29K	47.65K
291	7.34K	48.00K
292	7.39K	48.35K
293	7.43K	48.71K
294	7.48K	49.07K
295	7.53K	49.42K
296	7.58K	49.78K
297	7.63K	50.14K
298	7.68K	50.51K
299	7.72K	50.87K
300	7.77K	51.23K
301	7.82K	51.60K
302	7.87K	51.97K
303	7.92K	52.34K
304	7.97K	52.71K
305	8.02K	53.08K
306	8.07K	53.45K
307	8.12K	53.83K
308	8.17K	54.20K
309	8.22K	54.58K
310	8.27K	54.96K
311	8.32K	55.34K
312	8.37K	55.72K
313	8.42K	56.10K
314	8.47K	56.49K
315	8.53K	56.87K
316	8.58K	57.26K
317	8.63K	57.65K
318	8.68K	58.04K
319	8.73K	58.43K
320	8.78K	58.83K
321	8.84K	59.22K
322	8.89K	59.62K
323	8.94K	60.01K
324	8.99K	60.41K
325	9.05K	60.81K
326	9.10K	61.21K
327	9.15K	61.61K
328	9.21K	62.02K
329	9.26K	62.42K
330	9.31K	62.83K
331	9.37K	63.24K
332	9.42K	63.65K
333	9.47K	64.06K
334	9.53K	64.47K
335	9.58K	64.89K
336	9.64K	65.30K
337	9.69K	65.72K
338	9.75K	66.14K
339	9.80K	66.56K
340	9.86K	66.98K
341	9.91K	67.40K
342	9.97K	67.83K
343	10.02K	68.25K
344	10.08K	68.68K
345	10.13K	69.11K
346	10.19K	69.54K
347	10.25K	69.97K
348	10.30K	70.40K
349	10.36K	70.83K
350	10.42K	71.27K
351	10.47K	71.71K
352	10.53K	72.15K
353	10.59K	72.58K
354	10.64K	73.03K
355	10.70K	73.47K
356	10.76K	73.91K
357	10.82K	74.36K
358	10.87K	74.81K
359	10.93K	75.25K
360	10.99K	75.70K
361	11.05K	76.16K
362	11.11K	76.61K
363	11.17K	77.06K
364	11.22K	77.52K
365	11.28K	77.97K
366	11.34K	78.43K
367	11.40K	78.89K
368	11.46K	79.35K
369	11.52K	79.82K
370	11.58K	80.28K
371	11.64K	80.75K
372	11.70K	81.21K
373	11.76K	81.68K
374	11.82K	82.15K
375	11.88K	82.62K
376	11.94K	83.10K
377	12.00K	83.57K
378	12.06K	84.05K
379	12.12K	84.52K
380	12.19K	85.00K
381	12.25K	85.48K
382	12.31K	85.96K
383	12.37K	86.45K
384	12.43K	86.93K
385	12.49K	87.42K
386	12.56K	87.90K
387	12.62K	88.39K
388	12.68K	88.88K
389	12.74K	89.37K
390	12.81K	89.87K
391	12.87K	90.36K
392	12.93K	90.86K
393	13.00K	91.36K
394	13.06K	91.85K
395	13.12K	92.35K
396	13.19K	92.86K
397	13.25K	93.36K
398	13.31K	93.86K
399	13.38K	94.37K`,dS=`0	1.00	5.00
1	1.05	7.00
2	1.10	10.00
3	1.15	15.00
4	1.20	21.00
5	1.25	28.00
6	1.30	36.00
7	1.35	47.00
8	1.40	58.00
9	1.45	72.00
10	1.50	87.00
11	1.55	103.00
12	1.60	121.00
13	1.65	141.00
14	1.70	163.00
15	1.75	186.00
16	1.80	211.00
17	1.85	238.00
18	1.90	266.00
19	1.95	297.00
20	2.00	329.00
21	2.05	363.00
22	2.10	398.00
23	2.15	436.00
24	2.20	476.00
25	2.25	517.00
26	2.30	560.00
27	2.35	605.00
28	2.40	652.00
29	2.45	701.00
30	2.50	752.00
31	2.55	805.00
32	2.60	860.00
33	2.65	917.00
34	2.70	976.00
35	2.75	1.04K
36	2.80	1.10K
37	2.85	1.16K
38	2.90	1.23K
39	2.95	1.30K
40	3.00	1.37K
41	3.05	1.44K
42	3.10	1.52K
43	3.15	1.60K
44	3.20	1.67K
45	3.25	1.76K
46	3.30	1.84K
47	3.35	1.92K
48	3.40	2.01K
49	3.45	2.10K
50	3.50	2.19K
51	3.55	2.29K
52	3.60	2.38K
53	3.65	2.48K
54	3.70	2.58K
55	3.75	2.68K
56	3.80	2.79K
57	3.85	2.89K
58	3.90	3.00K
59	3.95	3.11K
60	4.00	3.22K
61	4.05	3.34K
62	4.10	3.46K
63	4.15	3.58K
64	4.20	3.70K
65	4.25	3.82K
66	4.30	3.95K
67	4.35	4.07K
68	4.40	4.20K
69	4.45	4.34K
70	4.50	4.47K
71	4.55	4.61K
72	4.60	4.75K
73	4.65	4.89K
74	4.70	5.03K
75	4.75	5.18K
76	4.80	5.33K
77	4.85	5.48K
78	4.90	5.63K
79	4.95	5.79K
80	5.00	5.94K
81	5.05	6.10K
82	5.10	6.27K
83	5.15	6.43K
84	5.20	6.60K
85	5.25	6.76K
86	5.30	6.94K
87	5.35	7.11K
88	5.40	7.28K
89	5.45	7.46K
90	5.50	7.64K
91	5.55	7.82K
92	5.60	8.01K
93	5.65	8.20K
94	5.70	8.39K
95	5.75	8.58K
96	5.80	8.77K
97	5.85	8.97K
98	5.90	9.17K`,pS=`0	1.00	4.00
1	2.00	6.00
2	3.00	9.00
3	4.00	13.00
4	5.00	18.00
5	6.00	24.00
6	7.00	31.00
7	8.00	39.00
8	9.00	48.00
9	10.00	58.00
10	11.00	70.00
11	12.00	83.00
12	13.00	97.00
13	14.00	112.00
14	15.00	128.00
15	16.00	146.00
16	17.00	165.00
17	18.00	186.00
18	19.00	207.00
19	20.00	231.00
20	21.00	255.00
21	22.00	281.00
22	23.00	308.00
23	24.00	337.00
24	25.00	367.00
25	26.00	399.00
26	27.00	432.00
27	28.00	467.00
28	29.00	503.00
29	30.00	540.00
30	31.00	579.00
31	32.00	620.00
32	33.00	662.00
33	34.00	706.00
34	35.00	751.00
35	36.00	797.00
36	37.00	846.00
37	38.00	895.00
38	39.00	947.00
39	40.00	1.00K
40	41.00	1.05K
41	42.00	1.11K
42	43.00	1.17K
43	44.00	1.23K
44	45.00	1.29K
45	46.00	1.35K
46	47.00	1.42K
47	48.00	1.48K
48	49.00	1.55K
49	50.00	1.62K
50	51.00	1.69K
51	52.00	1.76K
52	53.00	1.84K
53	54.00	1.91K
54	55.00	1.99K
55	56.00	2.07K
56	57.00	2.15K
57	58.00	2.23K
58	59.00	2.32K
59	60.00	2.40K
60	61.00	2.49K
61	62.00	2.58K
62	63.00	2.67K
63	64.00	2.77K
64	65.00	2.86K
65	66.00	2.96K
66	67.00	3.06K
67	68.00	3.16K
68	69.00	3.26K
69	70.00	3.36K
70	71.00	3.47K
71	72.00	3.58K
72	73.00	3.68K
73	74.00	3.80K
74	75.00	3.91K
75	76.00	4.02K
76	77.00	4.14K
77	78.00	4.26K
78	79.00	4.38K
79	80.00	4.50K`,hS=`0	1.20	10.00
1	1.30	12.00
2	1.40	15.00
3	1.50	19.00
4	1.60	23.00
5	1.70	28.00
6	1.80	34.00
7	1.90	41.00
8	2.00	49.00
9	2.10	57.00
10	2.20	67.00
11	2.30	77.00
12	2.40	88.00
13	2.50	101.00
14	2.60	114.00
15	2.70	128.00
16	2.80	143.00
17	2.90	159.00
18	3.00	176.00
19	3.10	194.00
20	3.20	213.00
21	3.30	233.00
22	3.40	254.00
23	3.50	276.00
24	3.60	299.00
25	3.70	323.00
26	3.80	349.00
27	3.90	375.00
28	4.00	402.00
29	4.10	430.00
30	4.20	460.00
31	4.30	490.00
32	4.40	522.00
33	4.50	554.00
34	4.60	588.00
35	4.70	623.00
36	4.80	659.00
37	4.90	696.00
38	5.00	734.00
39	5.10	773.00
40	5.20	813.00
41	5.30	855.00
42	5.40	897.00
43	5.50	941.00
44	5.60	986.00
45	5.70	1.03K
46	5.80	1.08K
47	5.90	1.13K
48	6.00	1.18K
49	6.10	1.23K
50	6.20	1.28K
51	6.30	1.33K
52	6.40	1.39K
53	6.50	1.44K
54	6.60	1.50K
55	6.70	1.56K
56	6.80	1.61K
57	6.90	1.67K
58	7.00	1.73K
59	7.10	1.80K
60	7.20	1.86K
61	7.30	1.92K
62	7.40	1.99K
63	7.50	2.06K
64	7.60	2.13K
65	7.70	2.19K
66	7.80	2.27K
67	7.90	2.34K
68	8.00	2.41K
69	8.10	2.48K
70	8.20	2.56K
71	8.30	2.64K
72	8.40	2.71K
73	8.50	2.79K
74	8.60	2.87K
75	8.70	2.96K
76	8.80	3.04K
77	8.90	3.12K
78	9.00	3.21K
79	9.10	3.29K
80	9.20	3.38K
81	9.30	3.47K
82	9.40	3.56K
83	9.50	3.65K
84	9.60	3.74K
85	9.70	3.84K
86	9.80	3.93K
87	9.90	4.03K
88	10.00	4.13K
89	10.10	4.23K
90	10.20	4.33K
91	10.30	4.43K
92	10.40	4.53K
93	10.50	4.63K
94	10.60	4.74K
95	10.70	4.85K
96	10.80	4.95K
97	10.90	5.06K
98	11.00	5.17K
99	11.10	5.29K
100	11.20	8.10K
101	11.30	8.27K
102	11.40	8.44K
103	11.50	8.62K
104	11.60	8.79K
105	11.70	8.97K
106	11.80	9.15K
107	11.90	9.34K
108	12.00	9.52K
109	12.10	9.71K
110	12.20	14.84K
111	12.30	15.13K
112	12.40	15.42K
113	12.50	15.71K
114	12.60	16.01K
115	12.70	16.30K
116	12.80	16.60K
117	12.90	16.91K
118	13.00	17.22K
119	13.10	17.52K
120	13.20	26.76K
121	13.30	27.23K
122	13.40	27.71K
123	13.50	28.19K
124	13.60	28.68K
125	13.70	29.17K
126	13.80	29.66K
127	13.90	30.16K
128	14.00	30.67K
129	14.10	31.18K
130	14.20	47.53K
131	14.30	48.31K
132	14.40	49.09K
133	14.50	49.88K
134	14.60	50.68K
135	14.70	51.49K
136	14.80	52.30K
137	14.90	53.11K
138	15.00	53.94K
139	15.10	54.77K
140	15.20	83.41K
141	15.30	84.68K
142	15.40	85.96K
143	15.50	87.24K
144	15.60	88.54K
145	15.70	89.85K
146	15.80	91.17K
147	15.90	92.50K
148	16.00	93.84K
149	16.10	95.19K
150	16.20	0.00`,mS=`0	0.00	10.00
1	0.50	16.00
2	1.00	23.00
3	1.50	33.00
4	2.00	45.00
5	2.50	59.00
6	3.00	76.00
7	3.50	96.00
8	4.00	118.00
9	4.50	143.00
10	5.00	171.00
11	5.50	202.00
12	6.00	236.00
13	6.50	273.00
14	7.00	313.00
15	7.50	356.00
16	8.00	402.00
17	8.50	452.00
18	9.00	504.00
19	9.50	560.00
20	10.00	620.00
21	10.50	683.00
22	11.00	749.00
23	11.50	818.00
24	12.00	891.00
25	12.50	968.00
26	13.00	1.05K
27	13.50	1.13K
28	14.00	1.22K
29	14.50	1.31K
30	15.00	1.40K
31	15.50	1.50K
32	16.00	1.60K
33	16.50	1.71K
34	17.00	1.82K
35	17.50	1.93K
36	18.00	2.05K
37	18.50	2.17K
38	19.00	2.29K
39	19.50	2.42K
40	20.00	2.55K
41	20.50	2.69K
42	21.00	2.83K
43	21.50	2.97K
44	22.00	3.12K
45	22.50	3.27K
46	23.00	3.43K
47	23.50	3.59K
48	24.00	3.75K
49	24.50	3.92K
50	25.00	4.09K
51	25.50	4.26K
52	26.00	4.44K
53	26.50	4.63K
54	27.00	4.81K
55	27.50	5.01K
56	28.00	5.20K
57	28.50	5.40K
58	29.00	5.60K
59	29.50	5.81K
60	30.00	6.03K
61	30.50	6.24K
62	31.00	6.46K
63	31.50	6.69K
64	32.00	6.92K
65	32.50	7.15K
66	33.00	7.39K
67	33.50	7.63K
68	34.00	7.88K
69	34.50	8.13K
70	35.00	8.38K
71	35.50	8.64K
72	36.00	8.91K
73	36.50	9.17K
74	37.00	9.45K
75	37.50	9.72K
76	38.00	10.00K
77	38.50	10.29K
78	39.00	10.58K
79	39.50	10.87K
80	40.00	11.17K
81	40.50	11.48K
82	41.00	11.78K
83	41.50	12.10K
84	42.00	12.41K
85	42.50	12.73K
86	43.00	13.06K
87	43.50	13.39K
88	44.00	13.72K
89	44.50	14.06K
90	45.00	14.41K
91	45.50	14.75K
92	46.00	15.11K
93	46.50	15.46K
94	47.00	15.83K
95	47.50	16.19K
96	48.00	16.56K
97	48.50	16.94K
98	49.00	17.32K`,KS=`0	2.00	125.00
1	3.00	350.00
2	4.00	800.00
3	5.00	2.00K
4	6.00	8.00K
5	7.00	20.00K
6	8.00	40.00K`,gS=`0	0.00	20.00
1	0.40	36.00
2	0.80	55.00
3	1.20	77.00
4	1.60	103.00
5	2.00	132.00
6	2.40	166.00
7	2.80	205.00
8	3.20	248.00
9	3.60	295.00
10	4.00	348.00
11	4.40	405.00
12	4.80	468.00
13	5.20	536.00
14	5.60	609.00
15	6.00	688.00
16	6.40	772.00
17	6.80	862.00
18	7.20	957.00
19	7.60	1.06K
20	8.00	1.17K
21	8.40	1.28K
22	8.80	1.40K
23	9.20	1.52K
24	9.60	1.66K
25	10.00	1.79K
26	10.40	1.94K
27	10.80	2.09K
28	11.20	2.24K
29	11.60	2.41K
30	12.00	2.58K
31	12.40	2.75K
32	12.80	2.94K
33	13.20	3.13K
34	13.60	3.32K
35	14.00	3.53K
36	14.40	3.74K
37	14.80	3.95K
38	15.20	4.18K
39	15.60	4.41K
40	16.00	4.64K
41	16.40	4.89K
42	16.80	5.14K
43	17.20	5.40K
44	17.60	5.67K
45	18.00	5.94K
46	18.40	6.22K
47	18.80	6.51K
48	19.20	6.80K
49	19.60	7.11K
50	20.00	7.42K
51	20.40	7.74K
52	20.80	8.06K
53	21.20	8.39K
54	21.60	8.74K
55	22.00	9.08K
56	22.40	9.44K
57	22.80	9.80K
58	23.20	10.17K
59	23.60	10.55K
60	24.00	10.94K
61	24.40	11.33K
62	24.80	11.74K
63	25.20	12.15K
64	25.60	12.57K
65	26.00	12.99K
66	26.40	13.43K
67	26.80	13.87K
68	27.20	14.32K
69	27.60	14.78K
70	28.00	15.24K
71	28.40	15.72K
72	28.80	16.20K
73	29.20	16.69K
74	29.60	17.19K
75	30.00	17.70K
76	30.40	18.21K
77	30.80	18.74K
78	31.20	19.27K
79	31.60	19.81K
80	32.00	20.36K
81	32.40	20.92K
82	32.80	21.48K
83	33.20	22.06K
84	33.60	22.64K`,vS=`0	0.00	20.00
1	0.80	26.00
2	1.60	35.00
3	2.40	48.00
4	3.20	64.00
5	4.00	86.00
6	4.80	112.00
7	5.60	143.00
8	6.40	179.00
9	7.20	222.00
10	8.00	270.00
11	8.80	323.00
12	9.60	383.00
13	10.40	450.00
14	11.20	523.00
15	12.00	602.00
16	12.80	688.00
17	13.60	781.00
18	14.40	881.00
19	15.20	988.00
20	16.00	1.10K
21	16.80	1.22K
22	17.60	1.35K
23	18.40	1.49K
24	19.20	1.63K
25	20.00	1.79K
26	20.80	1.95K
27	21.60	2.11K
28	22.40	2.29K
29	23.20	2.47K
30	24.00	2.67K
31	24.80	2.87K
32	25.60	3.08K
33	26.40	3.29K
34	27.20	3.52K
35	28.00	3.75K
36	28.80	4.00K
37	29.60	4.25K
38	30.40	4.51K
39	31.20	4.78K
40	32.00	5.06K
41	32.80	5.35K
42	33.60	5.64K
43	34.40	5.95K
44	35.20	6.27K
45	36.00	6.59K
46	36.80	6.92K
47	37.60	7.27K
48	38.40	7.62K
49	39.20	7.98K
50	40.00	8.35K
51	40.80	8.74K
52	41.60	9.13K
53	42.40	9.53K
54	43.20	9.94K
55	44.00	10.36K
56	44.80	10.79K
57	45.60	11.23K
58	46.40	11.68K
59	47.20	12.14K
60	48.00	12.62K
61	48.80	13.10K
62	49.60	13.59K
63	50.40	14.09K
64	51.20	14.60K
65	52.00	15.13K
66	52.80	15.66K
67	53.60	16.20K
68	54.40	16.76K
69	55.20	17.32K
70	56.00	17.90K
71	56.80	18.48K
72	57.60	19.08K
73	58.40	19.69K
74	59.20	20.31K
75	60.00	20.94K
76	60.80	21.58K
77	61.60	22.23K
78	62.40	22.89K
79	63.20	23.57K
80	64.00	24.25K
81	64.80	24.95K
82	65.60	25.65K
83	66.40	26.37K
84	67.20	27.10K`,yS=`0	1.00	250.00
1	2.00	700.00
2	3.00	1.50K
3	4.00	4.00K
4	5.00	12.50K
5	6.00	50.00K
6	7.00	140.00K`,bS=`0	5.00	10.00
1	10.00	12.00
2	15.08	15.00
3	20.10	19.00
4	26.00	23.00
5	32.68	28.00
6	40.31	33.00
7	49.07	39.00
8	59.11	47.00
9	70.58	54.00
10	83.63	63.00
11	98.40	72.00
12	115.02	83.00
13	133.63	93.00
14	154.34	105.00
15	176.39	118.00
16	201.58	131.00
17	229.23	146.00
18	259.47	161.00
19	292.41	176.00
20	328.17	193.00
21	366.85	211.00
22	408.56	229.00
23	453.42	249.00
24	501.54	269.00
25	553.01	290.00
26	607.94	312.00
27	666.44	335.00
28	728.60	358.00
29	794.53	383.00
30	873.20	408.00
31	947.73	435.00
32	1.03K	462.00
33	1.11K	490.00
34	1.20K	519.00
35	1.29K	549.00
36	1.38K	580.00
37	1.48K	612.00
38	1.59K	645.00
39	1.70K	678.00
40	1.81K	713.00
41	1.93K	748.00
42	2.06K	785.00
43	2.19K	822.00
44	2.33K	860.00
45	2.47K	899.00
46	2.61K	940.00
47	2.76K	981.00
48	2.92K	1.02K
49	3.08K	1.07K
50	3.30K	1.11K
51	3.48K	1.15K
52	3.66K	1.20K
53	3.85K	1.25K
54	4.05K	1.30K
55	4.25K	1.34K
56	4.46K	1.39K
57	4.67K	1.44K
58	4.89K	1.50K
59	5.12K	1.55K
60	5.35K	1.60K
61	5.60K	1.66K
62	5.84K	1.71K
63	6.10K	1.77K
64	6.36K	1.83K
65	6.63K	1.88K
66	6.91K	1.94K
67	7.19K	2.00K
68	7.48K	2.06K
69	7.78K	2.13K
70	8.08K	2.19K
71	8.40K	2.25K
72	8.72K	2.32K
73	9.05K	2.38K
74	9.39K	2.45K
75	9.83K	2.52K
76	10.18K	2.59K
77	10.55K	2.66K
78	10.92K	2.73K
79	11.30K	2.80K
80	11.69K	2.88K
81	12.09K	2.95K
82	12.49K	3.03K
83	12.91K	3.10K
84	13.33K	3.18K
85	13.76K	3.26K
86	14.21K	3.34K
87	14.66K	3.42K
88	15.12K	3.50K
89	15.58K	3.58K
90	16.06K	3.67K
91	16.55K	3.75K
92	17.04K	3.84K
93	17.55K	3.92K
94	18.06K	4.01K
95	18.59K	4.10K
96	19.12K	4.19K
97	19.66K	4.28K
98	20.22K	4.37K
99	20.78K	4.46K
100	21.56K	4.55K
101	22.15K	4.65K
102	22.75K	4.75K
103	23.36K	4.84K
104	23.98K	4.94K
105	24.61K	5.04K
106	25.25K	5.14K
107	25.90K	5.24K
108	26.56K	5.34K
109	27.23K	5.44K
110	27.91K	5.55K
111	28.60K	5.65K
112	29.31K	5.76K
113	30.02K	5.87K
114	30.75K	5.97K
115	31.49K	6.08K
116	32.23K	6.19K
117	32.99K	6.30K
118	33.76K	6.42K
119	34.54K	6.53K
120	35.34K	6.64K
121	36.14K	6.76K
122	36.96K	6.88K
123	37.79K	6.99K
124	38.62K	7.11K
125	39.48K	7.23K
126	40.34K	7.35K
127	41.21K	7.48K
128	42.10K	7.60K
129	43.00K	7.72K
130	44.34K	7.85K
131	45.27K	7.97K
132	46.22K	8.10K
133	47.17K	8.23K
134	48.14K	8.36K
135	49.12K	8.49K
136	50.12K	8.62K
137	51.13K	8.75K
138	52.14K	8.89K
139	53.18K	9.02K
140	54.22K	9.16K
141	55.28K	9.29K
142	56.35K	9.43K
143	57.44K	9.57K
144	58.54K	9.71K
145	59.65K	9.85K
146	60.77K	9.99K
147	61.91K	10.14K
148	63.06K	10.28K
149	64.22K	10.43K
150	65.40K	10.57K
151	66.59K	10.72K
152	67.80K	10.87K
153	69.02K	11.02K
154	70.25K	11.17K
155	71.50K	11.32K
156	72.76K	11.47K
157	74.03K	11.63K
158	75.32K	11.78K
159	76.63K	11.94K
160	77.94K	12.10K
161	79.27K	12.26K
162	80.62K	12.42K
163	81.98K	12.58K
164	83.35K	12.74K
165	84.74K	12.90K
166	86.15K	13.06K
167	87.57K	13.23K
168	89.00K	13.40K
169	90.45K	13.56K
170	91.91K	13.73K
171	93.39K	13.90K
172	94.88K	14.07K
173	96.39K	14.24K
174	97.91K	14.42K
175	99.45K	14.59K
176	101.00K	14.76K
177	102.57K	14.94K
178	104.15K	15.12K
179	105.75K	15.30K
180	107.37K	15.48K
181	109.00K	15.66K
182	110.64K	15.84K
183	112.31K	16.02K
184	113.98K	16.20K
185	115.68K	16.39K
186	117.39K	16.57K
187	119.11K	16.76K
188	120.85K	16.95K
189	122.61K	17.14K
190	124.38K	17.33K
191	126.17K	17.52K
192	127.97K	17.71K
193	129.80K	17.91K
194	131.63K	18.10K
195	133.49K	18.30K
196	135.36K	18.50K
197	137.25K	18.69K
198	139.15K	18.89K
199	141.07K	19.09K
200	143.01K	19.30K
201	144.96K	19.50K
202	146.93K	19.70K
203	148.92K	19.91K
204	150.93K	20.11K
205	152.95K	20.32K
206	154.99K	20.53K
207	157.04K	20.74K
208	159.12K	20.95K
209	161.21K	21.16K
210	163.31K	21.37K
211	165.44K	21.59K
212	167.58K	21.80K
213	169.74K	22.02K
214	171.92K	22.24K
215	174.12K	22.46K
216	176.33K	22.67K
217	178.56K	22.90K
218	180.81K	23.12K
219	183.07K	23.34K
220	185.36K	23.56K
221	187.66K	23.79K
222	189.98K	24.02K
223	192.32K	24.24K
224	194.67K	24.47K
225	197.05K	24.70K
226	199.44K	24.93K
227	201.85K	25.17K
228	204.28K	25.40K
229	206.73K	25.63K
230	209.20K	25.87K
231	211.68K	26.11K
232	214.19K	26.34K
233	216.71K	26.58K
234	219.25K	26.82K
235	221.81K	27.06K
236	224.39K	27.31K
237	226.99K	27.55K
238	229.60K	27.79K
239	232.24K	28.04K
240	234.89K	28.29K
241	237.57K	28.53K
242	240.26K	28.78K
243	242.97K	29.03K
244	245.70K	29.29K
245	248.46K	29.54K
246	251.23K	29.79K
247	254.02K	30.05K
248	256.83K	30.30K
249	259.65K	30.56K
250	262.50K	30.82K
251	265.37K	31.08K
252	268.26K	31.34K
253	271.17K	31.60K
254	274.10K	31.86K
255	277.04K	32.13K
256	280.01K	32.39K
257	283.00K	32.66K
258	286.01K	32.93K
259	289.03K	33.20K
260	292.08K	33.47K
261	295.15K	33.74K
262	298.24K	34.01K
263	301.35K	34.28K
264	304.48K	34.56K
265	307.63K	34.83K
266	310.80K	35.11K
267	313.99K	35.39K
268	317.20K	35.67K
269	320.44K	35.95K
270	323.69K	36.23K
271	326.97K	36.51K
272	330.26K	36.80K
273	333.58K	37.08K
274	336.91K	37.37K
275	340.27K	37.66K
276	343.65K	37.94K
277	347.05K	38.23K
278	350.48K	38.53K
279	353.92K	38.82K
280	357.38K	39.11K
281	360.87K	39.41K
282	364.38K	39.70K
283	367.90K	40.00K
284	371.46K	40.30K
285	375.03K	40.59K
286	378.62K	40.89K
287	382.24K	41.20K
288	385.87K	41.50K
289	389.53K	41.80K
290	393.21K	42.11K
291	396.92K	42.41K
292	400.64K	42.72K
293	404.39K	43.03K
294	408.16K	43.34K
295	411.95K	43.65K
296	415.76K	43.96K
297	419.60K	44.27K
298	423.46K	44.59K
299	427.34K	44.90K
300	431.24K	45.22K
301	435.16K	45.54K
302	439.11K	45.86K
303	443.08K	46.18K
304	447.08K	46.50K
305	451.09K	46.82K
306	455.13K	47.15K
307	459.19K	47.47K
308	463.27K	47.80K
309	467.38K	48.12K
310	471.51K	48.45K
311	475.67K	48.78K
312	479.84K	49.11K
313	484.04K	49.44K
314	488.26K	49.78K
315	492.51K	50.11K
316	496.78K	50.45K
317	501.07K	50.78K
318	505.39K	51.12K
319	509.73K	51.46K
320	514.09K	51.80K
321	518.47K	52.14K
322	522.88K	52.49K
323	527.32K	52.83K
324	531.78K	53.17K
325	536.26K	53.52K
326	540.76K	53.87K
327	545.29K	54.22K
328	549.84K	54.57K
329	554.42K	54.92K
330	559.02K	55.27K
331	563.64K	55.62K
332	568.29K	55.98K
333	572.97K	56.33K
334	577.66K	56.69K
335	582.39K	57.05K
336	587.13K	57.41K
337	591.90K	57.77K
338	596.70K	58.13K
339	601.52K	58.49K
340	606.36K	58.86K
341	611.23K	59.22K
342	616.12K	59.59K
343	621.04K	59.96K
344	625.98K	60.33K
345	630.95K	60.70K
346	635.94K	61.07K
347	640.96K	61.44K
348	646.00K	61.81K
349	651.07K	62.19K
350	656.16K	62.56K
351	661.28K	62.94K
352	666.42K	63.32K
353	671.59K	63.70K
354	676.78K	64.08K
355	682.00K	64.46K
356	687.25K	64.85K
357	692.52K	65.23K
358	697.81K	65.61K
359	703.13K	66.00K
360	708.48K	66.39K
361	713.85K	66.78K
362	719.25K	67.17K
363	724.67K	67.56K
364	730.12K	67.95K
365	735.59K	68.35K
366	741.09K	68.74K
367	746.62K	69.14K
368	752.17K	69.54K
369	757.75K	69.94K
370	763.36K	70.34K
371	768.99K	70.74K
372	774.65K	71.14K
373	780.33K	71.54K
374	786.04K	71.95K
375	791.78K	72.36K
376	797.54K	72.76K
377	803.33K	73.17K
378	809.14K	73.58K
379	814.99K	73.99K
380	820.85K	74.40K
381	826.75K	74.82K
382	832.67K	75.23K
383	838.62K	75.65K
384	844.60K	76.07K
385	850.60K	76.48K
386	856.63K	76.90K
387	862.69K	77.32K
388	868.77K	77.75K
389	874.88K	78.17K
390	881.02K	78.59K
391	887.18K	79.02K
392	893.38K	79.44K
393	899.59K	79.87K
394	905.84K	80.30K
395	912.12K	80.73K
396	918.42K	81.17K
397	924.75K	81.60K
398	931.10K	82.03K
399	937.49K	82.47K`,SS=`0	0.00	5.00
1	0.04	7.00
2	0.09	10.00
3	0.15	14.00
4	0.23	18.00
5	0.34	23.00
6	0.47	28.00
7	0.63	34.00
8	0.82	42.00
9	1.04	49.00
10	1.29	58.00
11	1.58	67.00
12	1.91	78.00
13	2.28	88.00
14	2.68	100.00
15	3.12	113.00
16	3.61	126.00
17	4.14	141.00
18	4.71	156.00
19	5.33	171.00
20	6.00	188.00
21	6.71	206.00
22	7.47	224.00
23	8.28	244.00
24	9.14	264.00
25	10.05	285.00
26	11.01	307.00
27	12.02	330.00
28	13.09	353.00
29	14.21	378.00
30	15.39	403.00
31	16.62	430.00
32	17.91	457.00
33	19.25	485.00
34	20.65	514.00
35	22.12	544.00
36	23.64	575.00
37	25.22	607.00
38	26.86	640.00
39	28.56	673.00
40	30.32	708.00
41	32.15	743.00
42	34.04	780.00
43	35.99	817.00
44	38.01	855.00
45	40.09	894.00
46	42.24	935.00
47	44.45	976.00
48	46.73	1.02K
49	49.07	1.06K
50	51.49	1.10K
51	53.97	1.15K
52	56.52	1.20K
53	59.14	1.24K
54	61.83	1.29K
55	64.59	1.34K
56	67.43	1.39K
57	70.33	1.44K
58	73.30	1.49K
59	76.35	1.54K
60	79.47	1.60K
61	82.66	1.65K
62	85.93	1.71K
63	89.27	1.76K
64	92.69	1.82K
65	96.18	1.88K
66	99.74	1.94K
67	103.39	2.00K
68	107.11	2.06K
69	110.90	2.12K
70	114.78	2.19K
71	118.73	2.25K
72	122.76	2.31K
73	126.87	2.38K
74	131.06	2.45K
75	135.33	2.52K
76	139.68	2.59K
77	144.10	2.66K
78	148.61	2.73K
79	153.21	2.80K
80	157.88	2.87K
81	162.63	2.95K
82	167.47	3.02K
83	172.39	3.10K
84	177.40	3.18K
85	182.48	3.25K
86	187.66	3.33K
87	192.91	3.41K
88	198.25	3.49K
89	203.68	3.58K
90	209.19	3.66K
91	214.79	3.74K
92	220.48	3.83K
93	226.25	3.92K
94	232.11	4.00K
95	238.05	4.09K
96	244.09	4.18K
97	250.21	4.27K
98	256.42	4.36K
99	262.72	4.46K
100	269.11	4.55K
101	275.59	4.64K
102	282.16	4.74K
103	288.82	4.84K
104	295.57	4.93K
105	302.41	5.03K
106	309.35	5.13K
107	316.37	5.23K
108	323.49	5.34K
109	330.70	5.44K
110	338.00	5.54K
111	345.40	5.65K
112	352.89	5.75K
113	360.47	5.86K
114	368.15	5.97K
115	375.92	6.08K
116	383.79	6.19K
117	391.75	6.30K
118	399.81	6.41K
119	407.96	6.53K
120	416.21	6.64K
121	424.55	6.76K
122	433.00	6.87K
123	441.53	6.99K
124	450.17	7.11K
125	458.91	7.23K
126	467.74	7.35K
127	476.67	7.47K
128	485.70	7.59K
129	494.82	7.72K
130	504.05	7.84K
131	513.38	7.97K
132	522.80	8.10K
133	532.33	8.22K
134	541.96	8.35K
135	551.69	8.48K
136	561.51	8.62K
137	571.44	8.75K
138	581.47	8.88K
139	591.61	9.02K
140	601.84	9.15K
141	612.18	9.29K
142	622.62	9.43K
143	633.16	9.57K
144	643.81	9.71K
145	654.56	9.85K
146	665.42	9.99K
147	676.37	10.13K
148	687.44	10.28K
149	698.60	10.42K
150	709.88	10.57K
151	721.25	10.72K
152	732.74	10.86K
153	744.32	11.01K
154	756.02	11.16K
155	767.82	11.32K
156	779.73	11.47K
157	791.74	11.62K
158	803.86	11.78K
159	816.09	11.94K
160	828.43	12.09K
161	840.88	12.25K
162	853.43	12.41K
163	866.09	12.57K
164	878.86	12.73K
165	891.74	12.90K
166	904.73	13.06K
167	917.83	13.22K
168	931.03	13.39K
169	944.35	13.56K
170	957.78	13.73K
171	971.32	13.90K
172	984.97	14.07K
173	998.73	14.24K
174	1.01K	14.41K
175	1.03K	14.58K
176	1.04K	14.76K
177	1.05K	14.94K
178	1.07K	15.11K
179	1.08K	15.29K
180	1.10K	15.47K
181	1.11K	15.65K
182	1.13K	15.83K
183	1.14K	16.02K
184	1.16K	16.20K
185	1.17K	16.38K
186	1.19K	16.57K
187	1.20K	16.76K
188	1.22K	16.95K
189	1.23K	17.13K
190	1.25K	17.32K
191	1.27K	17.52K
192	1.28K	17.71K
193	1.30K	17.90K
194	1.31K	18.10K
195	1.33K	18.29K
196	1.35K	18.49K
197	1.36K	18.69K
198	1.38K	18.89K
199	1.40K	19.09K
200	1.41K	19.29K
201	1.43K	19.49K
202	1.45K	19.70K
203	1.46K	19.90K
204	1.48K	20.11K
205	1.50K	20.32K
206	1.52K	20.52K
207	1.53K	20.73K
208	1.55K	20.94K
209	1.57K	21.16K
210	1.59K	21.37K
211	1.61K	21.58K
212	1.62K	21.80K
213	1.64K	22.01K
214	1.66K	22.23K
215	1.68K	22.45K
216	1.70K	22.67K
217	1.72K	22.89K
218	1.74K	23.11K
219	1.76K	23.34K
220	1.78K	23.56K
221	1.79K	23.78K
222	1.81K	24.01K
223	1.83K	24.24K
224	1.85K	24.47K
225	1.87K	24.70K
226	1.89K	24.93K
227	1.91K	25.16K
228	1.93K	25.39K
229	1.95K	25.63K
230	1.97K	25.86K
231	2.00K	26.10K
232	2.02K	26.34K
233	2.04K	26.58K
234	2.06K	26.82K
235	2.08K	27.06K
236	2.10K	27.30K
237	2.12K	27.54K
238	2.14K	27.79K
239	2.16K	28.03K
240	2.19K	28.28K
241	2.21K	28.53K
242	2.23K	28.78K
243	2.25K	29.03K
244	2.27K	29.28K
245	2.30K	29.53K
246	2.32K	29.79K
247	2.34K	30.04K
248	2.36K	30.30K
249	2.39K	30.56K
250	2.41K	30.81K
251	2.43K	31.07K
252	2.46K	31.33K
253	2.48K	31.60K
254	2.50K	31.86K
255	2.53K	32.12K
256	2.55K	32.39K
257	2.58K	32.66K
258	2.60K	32.92K
259	2.63K	33.19K
260	2.65K	33.46K
261	2.68K	33.73K
262	2.70K	34.01K
263	2.73K	34.28K
264	2.76K	34.55K
265	2.78K	34.83K
266	2.81K	35.11K
267	2.83K	35.38K
268	2.86K	35.66K
269	2.89K	35.94K
270	2.92K	36.23K
271	2.94K	36.51K
272	2.97K	36.79K
273	3.00K	37.08K
274	3.03K	37.36K
275	3.06K	37.65K
276	3.09K	37.94K
277	3.12K	38.23K
278	3.15K	38.52K
279	3.18K	38.81K
280	3.21K	39.10K
281	3.24K	39.40K
282	3.27K	39.70K
283	3.30K	39.99K
284	3.33K	40.29K
285	3.36K	40.59K
286	3.39K	40.89K
287	3.43K	41.19K
288	3.46K	41.49K
289	3.49K	41.80K
290	3.52K	42.10K
291	3.56K	42.41K
292	3.59K	42.72K
293	3.62K	43.02K
294	3.66K	43.33K
295	3.69K	43.64K
296	3.73K	43.96K
297	3.76K	44.27K
298	3.80K	44.58K
299	3.83K	44.90K
300	3.87K	45.22K
301	3.90K	45.53K
302	3.94K	45.85K
303	3.98K	46.17K
304	4.01K	46.49K
305	4.05K	46.82K
306	4.09K	47.14K
307	4.13K	47.47K
308	4.16K	47.79K
309	4.20K	48.12K
310	4.24K	48.45K
311	4.28K	48.78K
312	4.32K	49.11K
313	4.36K	49.44K
314	4.40K	49.77K
315	4.44K	50.11K
316	4.48K	50.44K
317	4.52K	50.78K
318	4.56K	51.12K
319	4.60K	51.46K
320	4.64K	51.80K
321	4.69K	52.14K
322	4.73K	52.48K
323	4.77K	52.82K
324	4.81K	53.17K
325	4.86K	53.52K
326	4.90K	53.86K
327	4.94K	54.21K
328	4.99K	54.56K
329	5.03K	54.91K
330	5.08K	55.27K
331	5.12K	55.62K
332	5.17K	55.97K
333	5.21K	56.33K
334	5.26K	56.69K
335	5.31K	57.04K
336	5.35K	57.40K
337	5.40K	57.76K
338	5.45K	58.13K
339	5.49K	58.49K
340	5.54K	58.85K
341	5.59K	59.22K
342	5.64K	59.58K
343	5.69K	59.95K
344	5.74K	60.32K
345	5.79K	60.69K
346	5.84K	61.06K
347	5.89K	61.43K
348	5.94K	61.81K
349	5.99K	62.18K
350	6.04K	62.56K
351	6.09K	62.94K
352	6.14K	63.31K
353	6.19K	63.69K
354	6.25K	64.08K
355	6.30K	64.46K
356	6.35K	64.84K
357	6.41K	65.22K
358	6.46K	65.61K
359	6.51K	66.00K
360	6.57K	66.39K
361	6.62K	66.77K
362	6.68K	67.17K
363	6.73K	67.56K
364	6.79K	67.95K
365	6.85K	68.34K
366	6.90K	68.74K
367	6.96K	69.14K
368	7.02K	69.53K
369	7.07K	69.93K
370	7.13K	70.33K
371	7.19K	70.73K
372	7.25K	71.14K
373	7.31K	71.54K
374	7.37K	71.94K
375	7.42K	72.35K
376	7.48K	72.76K
377	7.54K	73.17K
378	7.60K	73.58K
379	7.67K	73.99K
380	7.73K	74.40K
381	7.79K	74.81K
382	7.85K	75.23K
383	7.91K	75.64K
384	7.97K	76.06K
385	8.04K	76.48K
386	8.10K	76.90K
387	8.16K	77.32K
388	8.23K	77.74K
389	8.29K	78.16K
390	8.36K	78.59K
391	8.42K	79.01K
392	8.49K	79.44K
393	8.55K	79.87K
394	8.62K	80.30K
395	8.68K	80.73K
396	8.75K	81.16K
397	8.82K	81.59K
398	8.89K	82.03K
399	8.95K	82.46K`,xS=`0	0.00	5.00
1	0.50	9.00
2	1.00	14.00
3	1.50	20.00
4	2.00	27.00
5	2.50	35.00
6	3.00	44.00
7	3.50	54.00
8	4.00	65.00
9	4.50	77.00
10	5.00	90.00
11	5.50	104.00
12	6.00	119.00
13	6.50	135.00
14	7.00	152.00
15	7.50	171.00
16	8.00	190.00
17	8.50	211.00
18	9.00	233.00
19	9.50	256.00
20	10.00	280.00
21	10.50	305.00
22	11.00	331.00
23	11.50	359.00
24	12.00	388.00
25	12.50	418.00
26	13.00	449.00
27	13.50	481.00
28	14.00	515.00
29	14.50	549.00
30	15.00	585.00
31	15.50	622.00
32	16.00	661.00
33	16.50	700.00
34	17.00	741.00
35	17.50	783.00
36	18.00	826.00
37	18.50	871.00
38	19.00	917.00
39	19.50	964.00
40	20.00	1.01K
41	20.50	1.06K
42	21.00	1.11K
43	21.50	1.16K
44	22.00	1.22K
45	22.50	1.27K
46	23.00	1.33K
47	23.50	1.39K
48	24.00	1.44K
49	24.50	1.50K
50	25.00	1.56K
51	25.50	1.63K
52	26.00	1.69K
53	26.50	1.76K
54	27.00	1.82K
55	27.50	1.89K
56	28.00	1.96K
57	28.50	2.03K
58	29.00	2.10K
59	29.50	2.17K
60	30.00	2.25K
61	30.50	2.32K
62	31.00	2.40K
63	31.50	2.48K
64	32.00	2.56K
65	32.50	2.64K
66	33.00	2.72K
67	33.50	2.80K
68	34.00	2.89K
69	34.50	2.97K
70	35.00	3.06K
71	35.50	3.15K
72	36.00	3.24K
73	36.50	3.33K
74	37.00	3.42K
75	37.50	3.52K
76	38.00	3.61K
77	38.50	3.71K
78	39.00	3.81K
79	39.50	3.91K
80	40.00	4.01K
81	40.50	4.11K
82	41.00	4.21K
83	41.50	4.32K
84	42.00	4.42K
85	42.50	4.53K
86	43.00	4.64K
87	43.50	4.75K
88	44.00	4.86K
89	44.50	4.98K
90	45.00	5.09K
91	45.50	5.21K
92	46.00	5.32K
93	46.50	5.44K
94	47.00	5.56K
95	47.50	5.69K
96	48.00	5.81K
97	48.50	5.93K
98	49.00	6.06K`,TS=`0	0.00	3.00
1	0.50	5.00
2	1.52	8.00
3	2.56	12.00
4	3.62	16.00
5	4.73	21.00
6	5.90	26.00
7	7.12	32.00
8	8.40	40.00
9	9.76	47.00
10	11.20	56.00
11	12.72	65.00
12	14.33	76.00
13	16.04	86.00
14	17.84	98.00
15	19.76	111.00
16	21.79	124.00
17	23.93	139.00
18	26.20	154.00
19	28.59	169.00
20	31.11	186.00
21	33.77	204.00
22	36.57	222.00
23	39.52	242.00
24	42.61	262.00
25	45.85	283.00
26	49.26	305.00
27	52.82	328.00
28	56.55	351.00
29	60.45	376.00
30	65.16	401.00
31	69.45	428.00
32	73.92	455.00
33	78.58	483.00
34	83.43	512.00
35	88.47	542.00
36	93.71	573.00
37	99.16	605.00
38	104.80	638.00
39	110.66	671.00
40	116.73	706.00
41	123.01	741.00
42	129.51	778.00
43	136.23	815.00
44	143.18	853.00
45	150.36	892.00
46	157.77	933.00
47	165.42	974.00
48	173.31	1.02K
49	181.44	1.06K
50	191.67	1.10K
51	200.38	1.15K
52	209.34	1.19K
53	218.56	1.24K
54	228.04	1.29K
55	237.78	1.34K
56	247.79	1.39K
57	258.07	1.44K
58	268.63	1.49K
59	279.46	1.54K
60	290.57	1.59K
61	301.96	1.65K
62	313.64	1.70K
63	325.61	1.76K
64	337.86	1.82K
65	350.41	1.88K
66	363.26	1.94K
67	376.41	2.00K
68	389.86	2.06K
69	403.62	2.12K
70	421.74	2.18K
71	436.26	2.25K
72	451.10	2.31K
73	466.25	2.38K
74	481.73	2.45K
75	497.54	2.51K
76	513.67	2.58K
77	530.14	2.65K
78	546.94	2.73K
79	564.07	2.80K
80	581.55	2.87K
81	599.37	2.94K
82	617.54	3.02K
83	636.05	3.10K
84	654.91	3.17K
85	674.13	3.25K
86	693.71	3.33K
87	713.64	3.41K
88	733.93	3.49K
89	754.59	3.57K
90	783.07	3.66K
91	804.67	3.74K
92	826.65	3.83K
93	849.00	3.91K
94	871.74	4.00K
95	894.86	4.09K
96	918.36	4.18K
97	942.25	4.27K
98	966.54	4.36K
99	991.21	4.45K
100	1.02K	4.55K
101	1.04K	4.64K
102	1.07K	4.74K
103	1.09K	4.83K
104	1.12K	4.93K
105	1.15K	5.03K
106	1.18K	5.13K
107	1.20K	5.23K
108	1.23K	5.33K
109	1.26K	5.44K
110	1.30K	5.54K
111	1.33K	5.65K
112	1.36K	5.75K
113	1.39K	5.86K
114	1.42K	5.97K
115	1.46K	6.08K
116	1.49K	6.19K
117	1.52K	6.30K
118	1.55K	6.41K
119	1.59K	6.52K
120	1.62K	6.64K
121	1.65K	6.75K
122	1.69K	6.87K
123	1.72K	6.99K
124	1.76K	7.11K
125	1.80K	7.23K
126	1.83K	7.35K
127	1.87K	7.47K
128	1.91K	7.59K
129	1.95K	7.72K
130	1.98K	7.84K
131	2.02K	7.97K
132	2.06K	8.09K
133	2.10K	8.22K
134	2.14K	8.35K
135	2.18K	8.48K
136	2.22K	8.61K
137	2.27K	8.74K
138	2.31K	8.88K
139	2.35K	9.01K
140	2.40K	9.15K
141	2.44K	9.29K
142	2.48K	9.42K
143	2.53K	9.56K
144	2.57K	9.70K
145	2.62K	9.84K
146	2.67K	9.99K
147	2.71K	10.13K
148	2.76K	10.27K
149	2.81K	10.42K
150	2.86K	10.57K
151	2.91K	10.71K
152	2.95K	10.86K
153	3.00K	11.01K
154	3.05K	11.16K
155	3.11K	11.31K
156	3.16K	11.47K
157	3.21K	11.62K
158	3.26K	11.78K
159	3.32K	11.93K
160	3.37K	12.09K
161	3.42K	12.25K
162	3.48K	12.41K
163	3.53K	12.57K
164	3.59K	12.73K
165	3.65K	12.89K
166	3.70K	13.06K
167	3.76K	13.22K
168	3.82K	13.39K
169	3.88K	13.56K
170	3.94K	13.72K
171	4.00K	13.89K
172	4.06K	14.06K
173	4.12K	14.24K
174	4.18K	14.41K
175	4.24K	14.58K
176	4.30K	14.76K
177	4.37K	14.93K
178	4.43K	15.11K
179	4.50K	15.29K
180	4.56K	15.47K
181	4.63K	15.65K
182	4.69K	15.83K
183	4.76K	16.01K
184	4.83K	16.20K
185	4.89K	16.38K
186	4.96K	16.57K
187	5.03K	16.75K
188	5.10K	16.94K
189	5.17K	17.13K
190	5.24K	17.32K
191	5.31K	17.51K
192	5.39K	17.71K
193	5.46K	17.90K
194	5.53K	18.10K
195	5.61K	18.29K
196	5.68K	18.49K
197	5.76K	18.69K
198	5.83K	18.89K
199	5.91K	19.09K
200	5.99K	19.29K
201	6.06K	19.49K
202	6.14K	19.70K
203	6.22K	19.90K
204	6.30K	20.11K
205	6.38K	20.31K
206	6.46K	20.52K
207	6.54K	20.73K
208	6.62K	20.94K
209	6.71K	21.15K
210	6.79K	21.37K
211	6.87K	21.58K
212	6.96K	21.80K
213	7.04K	22.01K
214	7.13K	22.23K
215	7.22K	22.45K
216	7.30K	22.67K
217	7.39K	22.89K
218	7.48K	23.11K
219	7.57K	23.33K
220	7.66K	23.56K
221	7.75K	23.78K
222	7.84K	24.01K
223	7.93K	24.24K
224	8.03K	24.47K
225	8.12K	24.70K
226	8.21K	24.93K
227	8.31K	25.16K
228	8.40K	25.39K
229	8.50K	25.63K
230	8.60K	25.86K
231	8.69K	26.10K
232	8.79K	26.34K
233	8.89K	26.58K
234	8.99K	26.82K
235	9.09K	27.06K
236	9.19K	27.30K
237	9.29K	27.54K
238	9.39K	27.79K
239	9.50K	28.03K
240	9.60K	28.28K
241	9.71K	28.53K
242	9.81K	28.78K
243	9.92K	29.03K
244	10.02K	29.28K
245	10.13K	29.53K
246	10.24K	29.79K
247	10.35K	30.04K
248	10.46K	30.30K
249	10.57K	30.55K
250	10.68K	30.81K
251	10.79K	31.07K
252	10.90K	31.33K
253	11.01K	31.59K
254	11.13K	31.86K
255	11.24K	32.12K
256	11.35K	32.39K
257	11.47K	32.65K
258	11.59K	32.92K
259	11.70K	33.19K
260	11.82K	33.46K
261	11.94K	33.73K
262	12.06K	34.00K
263	12.18K	34.28K
264	12.30K	34.55K
265	12.42K	34.83K
266	12.55K	35.10K
267	12.67K	35.38K
268	12.79K	35.66K
269	12.92K	35.94K
270	13.04K	36.22K
271	13.17K	36.51K
272	13.30K	36.79K
273	13.42K	37.08K
274	13.55K	37.36K
275	13.68K	37.65K
276	13.81K	37.94K
277	13.94K	38.23K
278	14.07K	38.52K
279	14.21K	38.81K
280	14.34K	39.10K
281	14.47K	39.40K
282	14.61K	39.69K
283	14.74K	39.99K
284	14.88K	40.29K
285	15.02K	40.59K
286	15.15K	40.89K
287	15.29K	41.19K
288	15.43K	41.49K
289	15.57K	41.80K
290	15.71K	42.10K
291	15.85K	42.41K
292	16.00K	42.71K
293	16.14K	43.02K
294	16.28K	43.33K
295	16.43K	43.64K
296	16.57K	43.95K
297	16.72K	44.27K
298	16.87K	44.58K
299	17.02K	44.90K
300	17.16K	45.21K
301	17.31K	45.53K
302	17.47K	45.85K
303	17.62K	46.17K
304	17.77K	46.49K
305	17.92K	46.81K
306	18.08K	47.14K
307	18.24K	47.46K
308	18.39K	47.79K
309	18.55K	48.12K
310	18.71K	48.45K
311	18.87K	48.77K
312	19.04K	49.11K
313	19.20K	49.44K
314	19.36K	49.77K
315	19.53K	50.11K
316	19.70K	50.44K
317	19.87K	50.78K
318	20.04K	51.12K
319	20.21K	51.45K
320	20.38K	51.79K
321	20.55K	52.14K
322	20.73K	52.48K
323	20.90K	52.82K
324	21.08K	53.17K
325	21.26K	53.51K
326	21.43K	53.86K
327	21.61K	54.21K
328	21.80K	54.56K
329	21.98K	54.91K
330	22.16K	55.26K
331	22.35K	55.62K
332	22.54K	55.97K
333	22.72K	56.33K
334	22.91K	56.68K
335	23.10K	57.04K
336	23.30K	57.40K
337	23.49K	57.76K
338	23.68K	58.12K
339	23.88K	58.49K
340	24.08K	58.85K
341	24.27K	59.22K
342	24.47K	59.58K
343	24.68K	59.95K
344	24.88K	60.32K
345	25.08K	60.69K
346	25.29K	61.06K
347	25.49K	61.43K
348	25.70K	61.81K
349	25.91K	62.18K
350	26.12K	62.56K
351	26.33K	62.93K
352	26.54K	63.31K
353	26.76K	63.69K
354	26.97K	64.07K
355	27.19K	64.46K
356	27.41K	64.84K
357	27.63K	65.22K
358	27.85K	65.61K
359	28.07K	66.00K
360	28.29K	66.38K
361	28.52K	66.77K
362	28.75K	67.16K
363	28.97K	67.55K
364	29.20K	67.95K
365	29.43K	68.34K
366	29.67K	68.74K
367	29.90K	69.13K
368	30.13K	69.53K
369	30.37K	69.93K
370	30.61K	70.33K
371	30.85K	70.73K
372	31.09K	71.13K
373	31.33K	71.54K
374	31.57K	71.94K
375	31.81K	72.35K
376	32.06K	72.76K
377	32.31K	73.16K
378	32.56K	73.57K
379	32.81K	73.99K
380	33.06K	74.40K
381	33.31K	74.81K
382	33.57K	75.22K
383	33.82K	75.64K
384	34.08K	76.06K
385	34.34K	76.48K
386	34.60K	76.90K
387	34.86K	77.32K
388	35.12K	77.74K
389	35.39K	78.16K
390	35.65K	78.59K
391	35.92K	79.01K
392	36.19K	79.44K
393	36.46K	79.87K
394	36.73K	80.30K
395	37.00K	80.73K
396	37.28K	81.16K
397	37.55K	81.59K
398	37.83K	82.02K
399	38.11K	82.46K`,ES=`1	1.02
2	1.04
3	1.06
4	1.08
5	1.10
6	1.12
7	1.14
8	1.16
9	1.18
10	1.20
11	1.22
12	1.24
13	1.26
14	1.28
15	1.30
16	1.32
17	1.34
18	1.36
19	1.38
20	1.40
21	1.42
22	1.44
23	1.46
24	1.48
25	1.50
26	1.52
27	1.54
28	1.56
29	1.58
30	1.60
31	1.62
32	1.64
33	1.66
34	1.68
35	1.70
36	1.72
37	1.74
38	1.76
39	1.78
40	1.80
41	1.82
42	1.84
43	1.86
44	1.88
45	1.90
46	1.92
47	1.94
48	1.96
49	1.98
50	2.00
51	2.02
52	2.04
53	2.06
54	2.08
55	2.10
56	2.12
57	2.14
58	2.16
59	2.18
60	2.20
61	2.22
62	2.24
63	2.26
64	2.28
65	2.30
66	2.32
67	2.34
68	2.36
69	2.38
70	2.40
71	2.42
72	2.44
73	2.46
74	2.48
75	2.50
76	2.52
77	2.54
78	2.56
79	2.58
80	2.60
81	2.62
82	2.64
83	2.66
84	2.68
85	2.70
86	2.72
87	2.74
88	2.76
89	2.78
90	2.80
91	2.82
92	2.84
93	2.86
94	2.88
95	2.90
96	2.92
97	2.94
98	2.96
99	2.98
100	3.00`,CS=`1	1.03
2	1.06
3	1.09
4	1.12
5	1.15
6	1.18
7	1.21
8	1.24
9	1.27
10	1.30
11	1.33
12	1.36
13	1.39
14	1.42
15	1.45
16	1.48
17	1.51
18	1.54
19	1.57
20	1.60
21	1.63
22	1.66
23	1.69
24	1.72
25	1.75
26	1.78
27	1.81
28	1.84
29	1.87
30	1.90
31	1.93
32	1.96
33	1.99
34	2.02
35	2.05
36	2.08
37	2.11
38	2.14
39	2.17
40	2.20
41	2.23
42	2.26
43	2.29
44	2.32
45	2.35
46	2.38
47	2.41
48	2.44
49	2.47
50	2.50
51	2.53
52	2.56
53	2.59
54	2.62
55	2.65
56	2.68
57	2.71
58	2.74
59	2.77
60	2.80
61	2.83
62	2.86
63	2.89
64	2.92
65	2.95
66	2.98
67	3.01
68	3.04
69	3.07
70	3.10
71	3.13
72	3.16
73	3.19
74	3.22
75	3.25
76	3.28
77	3.31
78	3.34
79	3.37
80	3.40
81	3.43
82	3.46
83	3.49
84	3.52
85	3.55
86	3.58
87	3.61
88	3.64
89	3.67
90	3.70
91	3.73
92	3.76
93	3.79
94	3.82
95	3.85
96	3.88
97	3.91
98	3.94
99	3.97`,wS=`1	1.02
2	1.04
3	1.06
4	1.08
5	1.10
6	1.12
7	1.14
8	1.16
9	1.18
10	1.2
11	1.22
12	1.24
13	1.26
14	1.28
15	1.30
16	1.32
17	1.34
18	1.36
19	1.38
20	1.40
21	1.42
22	1.44
23	1.46
24	1.48
25	1.50
26	1.52
27	1.54
28	1.56
29	1.58
30	1.60
31	1.62
32	1.64
33	1.66
34	1.68
35	1.70
36	1.72
37	1.74
38	1.76
39	1.78
40	1.80
41	1.82
42	1.84
43	1.86
44	1.88
45	1.90
46	1.92
47	1.94
48	1.96
49	1.98
50	2.00
51	2.02
52	2.04
53	2.06
54	2.08
55	2.10
56	2.12
57	2.14
58	2.16
59	2.18
60	2.20
61	2.22
62	2.24
63	2.26
64	2.28
65	2.30
66	2.32
67	2.34
68	2.36
69	2.38
70	2.40
71	2.42
72	2.44
73	2.46
74	2.48
75	2.50
76	2.52
77	2.54
78	2.56
79	2.58
80	2.60
81	2.62
82	2.64
83	2.66
84	2.68
85	2.70
86	2.72
87	2.74
88	2.76
89	2.78
90	2.80
91	2.82
92	2.84
93	2.86
94	2.88
95	2.90
96	2.92
97	2.94
98	2.96
99	2.98`,RS=`1	1.03
2	1.06
3	1.09
4	1.12
5	1.15
6	1.18
7	1.21
8	1.24
9	1.27
10	1.30
11	1.33
12	1.36
13	1.39
14	1.42
15	1.45
16	1.48
17	1.51
18	1.54
19	1.57
20	1.60
21	1.63
22	1.66
23	1.69
24	1.72
25	1.75
26	1.78
27	1.81
28	1.84
29	1.87
30	1.90
31	1.93
32	1.96
33	1.99
34	2.02
35	2.05
36	2.08
37	2.11
38	2.14
39	2.17
40	2.20
41	2.23
42	2.26
43	2.29
44	2.32
45	2.35
46	2.38
47	2.41
48	2.44
49	2.47
50	2.50
51	2.53
52	2.56
53	2.59
54	2.62
55	2.65
56	2.68
57	2.71
58	2.74
59	2.77
60	2.80
61	2.83
62	2.86
63	2.89
64	2.92
65	2.95
66	2.98
67	3.01
68	3.04
69	3.07
70	3.10
71	3.13
72	3.16
73	3.19
74	3.22
75	3.25
76	3.28
77	3.31
78	3.34
79	3.37
80	3.40
81	3.43
82	3.46
83	3.49
84	3.52
85	3.55
86	3.58
87	3.61
88	3.64
89	3.67
90	3.70
91	3.73
92	3.76
93	3.79
94	3.82
95	3.85
96	3.88
97	3.91
98	3.94
99	3.97
100	4.00`,AS=`1	0.20
2	0.40
3	0.60
4	0.80
5	1.00
6	1.20
7	1.40
8	1.60
9	1.80
10	2.00
11	2.20
12	2.40
13	2.60
14	2.80
15	3.00
16	3.20
17	3.40
18	3.60
19	3.80
20	4.00
21	4.20
22	4.40
23	4.60
24	4.80
25	5.00
26	5.20
27	5.40
28	5.60
29	5.80
30	6.00
31	6.20
32	6.40
33	6.60
34	6.80
35	7.00
36	7.20
37	7.40
38	7.60
39	7.80
40	8.00
41	8.20
42	8.40
43	8.60
44	8.80
45	9.00
46	9.20
47	9.40
48	9.60
49	9.80
50	10.00`,ds="lab_and_start_setup";function Lo(t){return t.endsWith("K")?Number(t.slice(0,-1))*1e3:Number(t)}function Uo(t){return t===void 0?"N/A":t<1e3?t.toString():t<1e6?(t/1e3).toFixed(2)+"K":t<1e9?(t/1e6).toFixed(2)+"M":(t/1e9).toFixed(2)+"B"}const Je={Damage:"damage",CritFactor:"critFactor",AttackSpeed:"attackSpeed",DefenseFlat:"defenseFlat",DefensePercent:"defensePercent"};function ps(t,r){return t.split(`
`).map(l=>{const[i,s]=l.split("	").map(u=>u.trim());return{id:r,level:Lo(i)+1,value:Lo(s)}})}const OS=ps(ES,Je.Damage),MS=ps(CS,Je.CritFactor),DS=ps(wS,Je.AttackSpeed),NS=ps(RS,Je.DefenseFlat),BS=ps(AS,Je.DefensePercent),m1={[Je.Damage]:OS,[Je.CritFactor]:MS,[Je.AttackSpeed]:DS,[Je.DefenseFlat]:NS,[Je.DefensePercent]:BS};function j4(t,r){let l;const i=m1[t];if(!i)return 0;try{l=i[r-1]}catch{l=void 0}return(!l||l.level!==r)&&(l=i.find(s=>s.level===r)),l?l.value:0}function Em(t){const r=t===Je.DefensePercent?0:1;if(!m1[t])return r;const i=localStorage.getItem(ds);if(!i)return r;const s=JSON.parse(i);if(!s||!s.lab||!s.lab[t])return r;const u=s.lab[t].level;return u<=0?r:j4(t,u)}function _S(t){return Object.values(Je).includes(t)}const ie={Damage:"damage",AttackSpeed:"attackSpeed",CritChance:"critChance",CritFactor:"critFactor",MultishotChance:"multishotChance",MultishotTargets:"multishotTargets",RapidFireChance:"rapidFireChance",BounceChance:"bounceChance",BounceTargets:"bounceTargets",Health:"health",HealthRegen:"healthRegen",DefensePercent:"defensePercent",DefenseFlat:"defenseFlat"};function Pn(t,r){return t.split(`
`).map(l=>{const[i,s,u]=l.split("	").map(f=>f.trim());return{id:r,level:Lo(i),cost:Lo(u),value:Lo(s)}})}const Go=Pn(fS,ie.Damage),Fo=Pn(dS,ie.AttackSpeed),Xo=Pn(pS,ie.CritChance),Zo=Pn(hS,ie.CritFactor),Qo=Pn(mS,ie.MultishotChance),Io=Pn(KS,ie.MultishotTargets),Wo=Pn(gS,ie.RapidFireChance),Jo=Pn(vS,ie.BounceChance),es=Pn(yS,ie.BounceTargets),wd=Pn(bS,ie.Health),Rd=Pn(SS,ie.HealthRegen),Ad=Pn(xS,ie.DefensePercent),Od=Pn(TS,ie.DefenseFlat),ko={[ie.Damage]:Go,[ie.AttackSpeed]:Fo,[ie.CritChance]:Xo,[ie.CritFactor]:Zo,[ie.MultishotChance]:Qo,[ie.MultishotTargets]:Io,[ie.RapidFireChance]:Wo,[ie.BounceChance]:Jo,[ie.BounceTargets]:es,[ie.Health]:wd,[ie.HealthRegen]:Rd,[ie.DefensePercent]:Ad,[ie.DefenseFlat]:Od};function Cr(t,r){if(t===ie.Damage){const u=Em(Je.Damage);return Math.round((4.73+4.2*r+.115*r*r)*u*100)/100}let l;const i=ko[t];if(!i)return 0;try{l=i[r-1]}catch{l=void 0}if((!l||l.level!==r)&&(l=i.find(u=>u.level===r)),!l)return 0;let s=l.value;if(_S(t)){const u=Em(t);t===ie.DefensePercent&&(s+=u),s*=u}return Math.round(s*100)/100}function Un(t){const r=t[0];return r?r.value:0}function er(t,r,l){let i;const s=r-l;if(s<0)return 0;try{i=t[s-1]}catch{i=void 0}return(!i||i.level!==s)&&(i=t.find(u=>u.level===s)),i?Math.round(i.cost):0}function Ut(t){const r=t[0];return r?Math.round(r.cost):0}const zS=[{id:Je.Damage,label:"Damage"},{id:Je.CritFactor,label:"Crit Factor"},{id:Je.AttackSpeed,label:"Attack Speed"},{id:Je.DefenseFlat,label:"Defense Flat"},{id:Je.DefensePercent,label:"Defense Percent"}],K1=[{id:ie.Damage,label:"Damage"},{id:ie.CritFactor,label:"Crit Factor"},{id:ie.AttackSpeed,label:"Attack Speed"},{id:ie.CritChance,label:"Crit Chance"},{id:ie.MultishotChance,label:"Multishot Chance"},{id:ie.MultishotTargets,label:"Multishot Targets"},{id:ie.RapidFireChance,label:"Rapid Fire Chance"},{id:ie.BounceChance,label:"Bounce Chance"},{id:ie.BounceTargets,label:"Bounce Targets"},{id:ie.Health,label:"Health"},{id:ie.HealthRegen,label:"Health Regen"},{id:ie.DefensePercent,label:"Defense Percent"},{id:ie.DefenseFlat,label:"Defense Flat"}];function LS({state:t}){const r=Object.keys(t).filter(l=>l!=="index"&&l!=="changedStat"&&l!=="statCost"&&l!=="oldStatValue");return q.jsxs(dr,{direction:"column",alignItems:"center",children:[q.jsx(kn,{variant:"h6",children:"Current stats at this point"}),q.jsx(dr,{direction:"row",spacing:2,marginTop:2,width:390,justifyContent:"center",flexWrap:"wrap",children:r.map(l=>q.jsxs(dr,{paddingY:1,sx:{marginLeft:"0 !important"},alignItems:"center",children:[q.jsx(kn,{variant:"subtitle2",width:120,height:24,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",textAlign:"center",children:K1.find(i=>i.id===l)?.label}),q.jsx(kn,{variant:"body2",children:Uo(t[l].value)}),q.jsxs(kn,{variant:"body2",children:["$",Uo(t[l].cost)]})]},l))})]})}/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Md=function(t,r){return Md=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,i){l.__proto__=i}||function(l,i){for(var s in i)i.hasOwnProperty(s)&&(l[s]=i[s])},Md(t,r)};function US(t,r){Md(t,r);function l(){this.constructor=t}t.prototype=r===null?Object.create(r):(l.prototype=r.prototype,new l)}var Ho=function(){return Ho=Object.assign||function(r){for(var l,i=1,s=arguments.length;i<s;i++){l=arguments[i];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(r[u]=l[u])}return r},Ho.apply(this,arguments)};function kS(t,r,l,i){var s,u=!1,f=0;function p(){s&&clearTimeout(s)}function m(){p(),u=!0}typeof r!="boolean"&&(i=l,l=r,r=void 0);function h(){var K=this,v=Date.now()-f,y=arguments;if(u)return;function x(){f=Date.now(),l.apply(K,y)}function E(){s=void 0}i&&!s&&x(),p(),i===void 0&&v>t?x():r!==!0&&(s=setTimeout(i?E:x,i===void 0?t-v:t))}return h.cancel=m,h}var si={Pixel:"Pixel",Percent:"Percent"},Cm={unit:si.Percent,value:.8};function wm(t){return typeof t=="number"?{unit:si.Percent,value:t*100}:typeof t=="string"?t.match(/^(\d*(\.\d+)?)px$/)?{unit:si.Pixel,value:parseFloat(t)}:t.match(/^(\d*(\.\d+)?)%$/)?{unit:si.Percent,value:parseFloat(t)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),Cm):(console.warn("scrollThreshold should be string or number"),Cm)}var HS=(function(t){US(r,t);function r(l){var i=t.call(this,l)||this;return i.lastScrollTop=0,i.actionTriggered=!1,i.startY=0,i.currentY=0,i.dragging=!1,i.maxPullDownDistance=0,i.getScrollableTarget=function(){return i.props.scrollableTarget instanceof HTMLElement?i.props.scrollableTarget:typeof i.props.scrollableTarget=="string"?document.getElementById(i.props.scrollableTarget):(i.props.scrollableTarget===null&&console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
      `),null)},i.onStart=function(s){i.lastScrollTop||(i.dragging=!0,s instanceof MouseEvent?i.startY=s.pageY:s instanceof TouchEvent&&(i.startY=s.touches[0].pageY),i.currentY=i.startY,i._infScroll&&(i._infScroll.style.willChange="transform",i._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},i.onMove=function(s){i.dragging&&(s instanceof MouseEvent?i.currentY=s.pageY:s instanceof TouchEvent&&(i.currentY=s.touches[0].pageY),!(i.currentY<i.startY)&&(i.currentY-i.startY>=Number(i.props.pullDownToRefreshThreshold)&&i.setState({pullToRefreshThresholdBreached:!0}),!(i.currentY-i.startY>i.maxPullDownDistance*1.5)&&i._infScroll&&(i._infScroll.style.overflow="visible",i._infScroll.style.transform="translate3d(0px, "+(i.currentY-i.startY)+"px, 0px)")))},i.onEnd=function(){i.startY=0,i.currentY=0,i.dragging=!1,i.state.pullToRefreshThresholdBreached&&(i.props.refreshFunction&&i.props.refreshFunction(),i.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){i._infScroll&&(i._infScroll.style.overflow="auto",i._infScroll.style.transform="none",i._infScroll.style.willChange="unset")})},i.onScrollListener=function(s){typeof i.props.onScroll=="function"&&setTimeout(function(){return i.props.onScroll&&i.props.onScroll(s)},0);var u=i.props.height||i._scrollableNode?s.target:document.documentElement.scrollTop?document.documentElement:document.body;if(!i.actionTriggered){var f=i.props.inverse?i.isElementAtTop(u,i.props.scrollThreshold):i.isElementAtBottom(u,i.props.scrollThreshold);f&&i.props.hasMore&&(i.actionTriggered=!0,i.setState({showLoader:!0}),i.props.next&&i.props.next()),i.lastScrollTop=u.scrollTop}},i.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:l.dataLength},i.throttledOnScrollListener=kS(150,i.onScrollListener).bind(i),i.onStart=i.onStart.bind(i),i.onMove=i.onMove.bind(i),i.onEnd=i.onEnd.bind(i),i}return r.prototype.componentDidMount=function(){if(typeof this.props.dataLength>"u")throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),typeof this.props.initialScrollY=="number"&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),typeof this.props.refreshFunction!="function"))throw new Error(`Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`)},r.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},r.prototype.componentDidUpdate=function(l){this.props.dataLength!==l.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},r.getDerivedStateFromProps=function(l,i){var s=l.dataLength!==i.prevDataLength;return s?Ho(Ho({},i),{prevDataLength:l.dataLength}):null},r.prototype.isElementAtTop=function(l,i){i===void 0&&(i=.8);var s=l===document.body||l===document.documentElement?window.screen.availHeight:l.clientHeight,u=wm(i);return u.unit===si.Pixel?l.scrollTop<=u.value+s-l.scrollHeight+1:l.scrollTop<=u.value/100+s-l.scrollHeight+1},r.prototype.isElementAtBottom=function(l,i){i===void 0&&(i=.8);var s=l===document.body||l===document.documentElement?window.screen.availHeight:l.clientHeight,u=wm(i);return u.unit===si.Pixel?l.scrollTop+s>=l.scrollHeight-u.value:l.scrollTop+s>=u.value/100*l.scrollHeight},r.prototype.render=function(){var l=this,i=Ho({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),s=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),u=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return Tn.createElement("div",{style:u,className:"infinite-scroll-component__outerdiv"},Tn.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(f){return l._infScroll=f},style:i},this.props.pullDownToRefresh&&Tn.createElement("div",{style:{position:"relative"},ref:function(f){return l._pullDown=f}},Tn.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!s&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},r})(R.Component);/*!
 *  decimal.js v10.6.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */var li=9e15,Ba=1e9,Dd="0123456789abcdef",nc="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",rc="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",Nd={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-li,maxE:li,crypto:!1},$4,na,De=!0,Oc="[DecimalError] ",Da=Oc+"Invalid argument: ",P4=Oc+"Precision limit exceeded",q4=Oc+"crypto unavailable",Y4="[object Decimal]",mn=Math.floor,Xt=Math.pow,jS=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,$S=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,PS=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,V4=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,pr=1e7,Te=7,qS=9007199254740991,YS=nc.length-1,Bd=rc.length-1,le={toStringTag:Y4};le.absoluteValue=le.abs=function(){var t=new this.constructor(this);return t.s<0&&(t.s=1),ve(t)};le.ceil=function(){return ve(new this.constructor(this),this.e+1,2)};le.clampedTo=le.clamp=function(t,r){var l,i=this,s=i.constructor;if(t=new s(t),r=new s(r),!t.s||!r.s)return new s(NaN);if(t.gt(r))throw Error(Da+r);return l=i.cmp(t),l<0?t:i.cmp(r)>0?r:new s(i)};le.comparedTo=le.cmp=function(t){var r,l,i,s,u=this,f=u.d,p=(t=new u.constructor(t)).d,m=u.s,h=t.s;if(!f||!p)return!m||!h?NaN:m!==h?m:f===p?0:!f^m<0?1:-1;if(!f[0]||!p[0])return f[0]?m:p[0]?-h:0;if(m!==h)return m;if(u.e!==t.e)return u.e>t.e^m<0?1:-1;for(i=f.length,s=p.length,r=0,l=i<s?i:s;r<l;++r)if(f[r]!==p[r])return f[r]>p[r]^m<0?1:-1;return i===s?0:i>s^m<0?1:-1};le.cosine=le.cos=function(){var t,r,l=this,i=l.constructor;return l.d?l.d[0]?(t=i.precision,r=i.rounding,i.precision=t+Math.max(l.e,l.sd())+Te,i.rounding=1,l=VS(i,Q4(i,l)),i.precision=t,i.rounding=r,ve(na==2||na==3?l.neg():l,t,r,!0)):new i(1):new i(NaN)};le.cubeRoot=le.cbrt=function(){var t,r,l,i,s,u,f,p,m,h,K=this,v=K.constructor;if(!K.isFinite()||K.isZero())return new v(K);for(De=!1,u=K.s*Xt(K.s*K,1/3),!u||Math.abs(u)==1/0?(l=sn(K.d),t=K.e,(u=(t-l.length+1)%3)&&(l+=u==1||u==-2?"0":"00"),u=Xt(l,1/3),t=mn((t+1)/3)-(t%3==(t<0?-1:2)),u==1/0?l="5e"+t:(l=u.toExponential(),l=l.slice(0,l.indexOf("e")+1)+t),i=new v(l),i.s=K.s):i=new v(u.toString()),f=(t=v.precision)+3;;)if(p=i,m=p.times(p).times(p),h=m.plus(K),i=Kt(h.plus(K).times(p),h.plus(m),f+2,1),sn(p.d).slice(0,f)===(l=sn(i.d)).slice(0,f))if(l=l.slice(f-3,f+1),l=="9999"||!s&&l=="4999"){if(!s&&(ve(p,t+1,0),p.times(p).times(p).eq(K))){i=p;break}f+=4,s=1}else{(!+l||!+l.slice(1)&&l.charAt(0)=="5")&&(ve(i,t+1,1),r=!i.times(i).times(i).eq(K));break}return De=!0,ve(i,t,v.rounding,r)};le.decimalPlaces=le.dp=function(){var t,r=this.d,l=NaN;if(r){if(t=r.length-1,l=(t-mn(this.e/Te))*Te,t=r[t],t)for(;t%10==0;t/=10)l--;l<0&&(l=0)}return l};le.dividedBy=le.div=function(t){return Kt(this,new this.constructor(t))};le.dividedToIntegerBy=le.divToInt=function(t){var r=this,l=r.constructor;return ve(Kt(r,new l(t),0,1,1),l.precision,l.rounding)};le.equals=le.eq=function(t){return this.cmp(t)===0};le.floor=function(){return ve(new this.constructor(this),this.e+1,3)};le.greaterThan=le.gt=function(t){return this.cmp(t)>0};le.greaterThanOrEqualTo=le.gte=function(t){var r=this.cmp(t);return r==1||r===0};le.hyperbolicCosine=le.cosh=function(){var t,r,l,i,s,u=this,f=u.constructor,p=new f(1);if(!u.isFinite())return new f(u.s?1/0:NaN);if(u.isZero())return p;l=f.precision,i=f.rounding,f.precision=l+Math.max(u.e,u.sd())+4,f.rounding=1,s=u.d.length,s<32?(t=Math.ceil(s/3),r=(1/Dc(4,t)).toString()):(t=16,r="2.3283064365386962890625e-10"),u=Ki(f,1,u.times(r),new f(1),!0);for(var m,h=t,K=new f(8);h--;)m=u.times(u),u=p.minus(m.times(K.minus(m.times(K))));return ve(u,f.precision=l,f.rounding=i,!0)};le.hyperbolicSine=le.sinh=function(){var t,r,l,i,s=this,u=s.constructor;if(!s.isFinite()||s.isZero())return new u(s);if(r=u.precision,l=u.rounding,u.precision=r+Math.max(s.e,s.sd())+4,u.rounding=1,i=s.d.length,i<3)s=Ki(u,2,s,s,!0);else{t=1.4*Math.sqrt(i),t=t>16?16:t|0,s=s.times(1/Dc(5,t)),s=Ki(u,2,s,s,!0);for(var f,p=new u(5),m=new u(16),h=new u(20);t--;)f=s.times(s),s=s.times(p.plus(f.times(m.times(f).plus(h))))}return u.precision=r,u.rounding=l,ve(s,r,l,!0)};le.hyperbolicTangent=le.tanh=function(){var t,r,l=this,i=l.constructor;return l.isFinite()?l.isZero()?new i(l):(t=i.precision,r=i.rounding,i.precision=t+7,i.rounding=1,Kt(l.sinh(),l.cosh(),i.precision=t,i.rounding=r)):new i(l.s)};le.inverseCosine=le.acos=function(){var t=this,r=t.constructor,l=t.abs().cmp(1),i=r.precision,s=r.rounding;return l!==-1?l===0?t.isNeg()?Or(r,i,s):new r(0):new r(NaN):t.isZero()?Or(r,i+4,s).times(.5):(r.precision=i+6,r.rounding=1,t=new r(1).minus(t).div(t.plus(1)).sqrt().atan(),r.precision=i,r.rounding=s,t.times(2))};le.inverseHyperbolicCosine=le.acosh=function(){var t,r,l=this,i=l.constructor;return l.lte(1)?new i(l.eq(1)?0:NaN):l.isFinite()?(t=i.precision,r=i.rounding,i.precision=t+Math.max(Math.abs(l.e),l.sd())+4,i.rounding=1,De=!1,l=l.times(l).minus(1).sqrt().plus(l),De=!0,i.precision=t,i.rounding=r,l.ln()):new i(l)};le.inverseHyperbolicSine=le.asinh=function(){var t,r,l=this,i=l.constructor;return!l.isFinite()||l.isZero()?new i(l):(t=i.precision,r=i.rounding,i.precision=t+2*Math.max(Math.abs(l.e),l.sd())+6,i.rounding=1,De=!1,l=l.times(l).plus(1).sqrt().plus(l),De=!0,i.precision=t,i.rounding=r,l.ln())};le.inverseHyperbolicTangent=le.atanh=function(){var t,r,l,i,s=this,u=s.constructor;return s.isFinite()?s.e>=0?new u(s.abs().eq(1)?s.s/0:s.isZero()?s:NaN):(t=u.precision,r=u.rounding,i=s.sd(),Math.max(i,t)<2*-s.e-1?ve(new u(s),t,r,!0):(u.precision=l=i-s.e,s=Kt(s.plus(1),new u(1).minus(s),l+t,1),u.precision=t+4,u.rounding=1,s=s.ln(),u.precision=t,u.rounding=r,s.times(.5))):new u(NaN)};le.inverseSine=le.asin=function(){var t,r,l,i,s=this,u=s.constructor;return s.isZero()?new u(s):(r=s.abs().cmp(1),l=u.precision,i=u.rounding,r!==-1?r===0?(t=Or(u,l+4,i).times(.5),t.s=s.s,t):new u(NaN):(u.precision=l+6,u.rounding=1,s=s.div(new u(1).minus(s.times(s)).sqrt().plus(1)).atan(),u.precision=l,u.rounding=i,s.times(2)))};le.inverseTangent=le.atan=function(){var t,r,l,i,s,u,f,p,m,h=this,K=h.constructor,v=K.precision,y=K.rounding;if(h.isFinite()){if(h.isZero())return new K(h);if(h.abs().eq(1)&&v+4<=Bd)return f=Or(K,v+4,y).times(.25),f.s=h.s,f}else{if(!h.s)return new K(NaN);if(v+4<=Bd)return f=Or(K,v+4,y).times(.5),f.s=h.s,f}for(K.precision=p=v+10,K.rounding=1,l=Math.min(28,p/Te+2|0),t=l;t;--t)h=h.div(h.times(h).plus(1).sqrt().plus(1));for(De=!1,r=Math.ceil(p/Te),i=1,m=h.times(h),f=new K(h),s=h;t!==-1;)if(s=s.times(m),u=f.minus(s.div(i+=2)),s=s.times(m),f=u.plus(s.div(i+=2)),f.d[r]!==void 0)for(t=r;f.d[t]===u.d[t]&&t--;);return l&&(f=f.times(2<<l-1)),De=!0,ve(f,K.precision=v,K.rounding=y,!0)};le.isFinite=function(){return!!this.d};le.isInteger=le.isInt=function(){return!!this.d&&mn(this.e/Te)>this.d.length-2};le.isNaN=function(){return!this.s};le.isNegative=le.isNeg=function(){return this.s<0};le.isPositive=le.isPos=function(){return this.s>0};le.isZero=function(){return!!this.d&&this.d[0]===0};le.lessThan=le.lt=function(t){return this.cmp(t)<0};le.lessThanOrEqualTo=le.lte=function(t){return this.cmp(t)<1};le.logarithm=le.log=function(t){var r,l,i,s,u,f,p,m,h=this,K=h.constructor,v=K.precision,y=K.rounding,x=5;if(t==null)t=new K(10),r=!0;else{if(t=new K(t),l=t.d,t.s<0||!l||!l[0]||t.eq(1))return new K(NaN);r=t.eq(10)}if(l=h.d,h.s<0||!l||!l[0]||h.eq(1))return new K(l&&!l[0]?-1/0:h.s!=1?NaN:l?0:1/0);if(r)if(l.length>1)u=!0;else{for(s=l[0];s%10===0;)s/=10;u=s!==1}if(De=!1,p=v+x,f=Aa(h,p),i=r?ac(K,p+10):Aa(t,p),m=Kt(f,i,p,1),ts(m.d,s=v,y))do if(p+=10,f=Aa(h,p),i=r?ac(K,p+10):Aa(t,p),m=Kt(f,i,p,1),!u){+sn(m.d).slice(s+1,s+15)+1==1e14&&(m=ve(m,v+1,0));break}while(ts(m.d,s+=10,y));return De=!0,ve(m,v,y)};le.minus=le.sub=function(t){var r,l,i,s,u,f,p,m,h,K,v,y,x=this,E=x.constructor;if(t=new E(t),!x.d||!t.d)return!x.s||!t.s?t=new E(NaN):x.d?t.s=-t.s:t=new E(t.d||x.s!==t.s?x:NaN),t;if(x.s!=t.s)return t.s=-t.s,x.plus(t);if(h=x.d,y=t.d,p=E.precision,m=E.rounding,!h[0]||!y[0]){if(y[0])t.s=-t.s;else if(h[0])t=new E(x);else return new E(m===3?-0:0);return De?ve(t,p,m):t}if(l=mn(t.e/Te),K=mn(x.e/Te),h=h.slice(),u=K-l,u){for(v=u<0,v?(r=h,u=-u,f=y.length):(r=y,l=K,f=h.length),i=Math.max(Math.ceil(p/Te),f)+2,u>i&&(u=i,r.length=1),r.reverse(),i=u;i--;)r.push(0);r.reverse()}else{for(i=h.length,f=y.length,v=i<f,v&&(f=i),i=0;i<f;i++)if(h[i]!=y[i]){v=h[i]<y[i];break}u=0}for(v&&(r=h,h=y,y=r,t.s=-t.s),f=h.length,i=y.length-f;i>0;--i)h[f++]=0;for(i=y.length;i>u;){if(h[--i]<y[i]){for(s=i;s&&h[--s]===0;)h[s]=pr-1;--h[s],h[i]+=pr}h[i]-=y[i]}for(;h[--f]===0;)h.pop();for(;h[0]===0;h.shift())--l;return h[0]?(t.d=h,t.e=Mc(h,l),De?ve(t,p,m):t):new E(m===3?-0:0)};le.modulo=le.mod=function(t){var r,l=this,i=l.constructor;return t=new i(t),!l.d||!t.s||t.d&&!t.d[0]?new i(NaN):!t.d||l.d&&!l.d[0]?ve(new i(l),i.precision,i.rounding):(De=!1,i.modulo==9?(r=Kt(l,t.abs(),0,3,1),r.s*=t.s):r=Kt(l,t,0,i.modulo,1),r=r.times(t),De=!0,l.minus(r))};le.naturalExponential=le.exp=function(){return _d(this)};le.naturalLogarithm=le.ln=function(){return Aa(this)};le.negated=le.neg=function(){var t=new this.constructor(this);return t.s=-t.s,ve(t)};le.plus=le.add=function(t){var r,l,i,s,u,f,p,m,h,K,v=this,y=v.constructor;if(t=new y(t),!v.d||!t.d)return!v.s||!t.s?t=new y(NaN):v.d||(t=new y(t.d||v.s===t.s?v:NaN)),t;if(v.s!=t.s)return t.s=-t.s,v.minus(t);if(h=v.d,K=t.d,p=y.precision,m=y.rounding,!h[0]||!K[0])return K[0]||(t=new y(v)),De?ve(t,p,m):t;if(u=mn(v.e/Te),i=mn(t.e/Te),h=h.slice(),s=u-i,s){for(s<0?(l=h,s=-s,f=K.length):(l=K,i=u,f=h.length),u=Math.ceil(p/Te),f=u>f?u+1:f+1,s>f&&(s=f,l.length=1),l.reverse();s--;)l.push(0);l.reverse()}for(f=h.length,s=K.length,f-s<0&&(s=f,l=K,K=h,h=l),r=0;s;)r=(h[--s]=h[s]+K[s]+r)/pr|0,h[s]%=pr;for(r&&(h.unshift(r),++i),f=h.length;h[--f]==0;)h.pop();return t.d=h,t.e=Mc(h,i),De?ve(t,p,m):t};le.precision=le.sd=function(t){var r,l=this;if(t!==void 0&&t!==!!t&&t!==1&&t!==0)throw Error(Da+t);return l.d?(r=G4(l.d),t&&l.e+1>r&&(r=l.e+1)):r=NaN,r};le.round=function(){var t=this,r=t.constructor;return ve(new r(t),t.e+1,r.rounding)};le.sine=le.sin=function(){var t,r,l=this,i=l.constructor;return l.isFinite()?l.isZero()?new i(l):(t=i.precision,r=i.rounding,i.precision=t+Math.max(l.e,l.sd())+Te,i.rounding=1,l=FS(i,Q4(i,l)),i.precision=t,i.rounding=r,ve(na>2?l.neg():l,t,r,!0)):new i(NaN)};le.squareRoot=le.sqrt=function(){var t,r,l,i,s,u,f=this,p=f.d,m=f.e,h=f.s,K=f.constructor;if(h!==1||!p||!p[0])return new K(!h||h<0&&(!p||p[0])?NaN:p?f:1/0);for(De=!1,h=Math.sqrt(+f),h==0||h==1/0?(r=sn(p),(r.length+m)%2==0&&(r+="0"),h=Math.sqrt(r),m=mn((m+1)/2)-(m<0||m%2),h==1/0?r="5e"+m:(r=h.toExponential(),r=r.slice(0,r.indexOf("e")+1)+m),i=new K(r)):i=new K(h.toString()),l=(m=K.precision)+3;;)if(u=i,i=u.plus(Kt(f,u,l+2,1)).times(.5),sn(u.d).slice(0,l)===(r=sn(i.d)).slice(0,l))if(r=r.slice(l-3,l+1),r=="9999"||!s&&r=="4999"){if(!s&&(ve(u,m+1,0),u.times(u).eq(f))){i=u;break}l+=4,s=1}else{(!+r||!+r.slice(1)&&r.charAt(0)=="5")&&(ve(i,m+1,1),t=!i.times(i).eq(f));break}return De=!0,ve(i,m,K.rounding,t)};le.tangent=le.tan=function(){var t,r,l=this,i=l.constructor;return l.isFinite()?l.isZero()?new i(l):(t=i.precision,r=i.rounding,i.precision=t+10,i.rounding=1,l=l.sin(),l.s=1,l=Kt(l,new i(1).minus(l.times(l)).sqrt(),t+10,0),i.precision=t,i.rounding=r,ve(na==2||na==4?l.neg():l,t,r,!0)):new i(NaN)};le.times=le.mul=function(t){var r,l,i,s,u,f,p,m,h,K=this,v=K.constructor,y=K.d,x=(t=new v(t)).d;if(t.s*=K.s,!y||!y[0]||!x||!x[0])return new v(!t.s||y&&!y[0]&&!x||x&&!x[0]&&!y?NaN:!y||!x?t.s/0:t.s*0);for(l=mn(K.e/Te)+mn(t.e/Te),m=y.length,h=x.length,m<h&&(u=y,y=x,x=u,f=m,m=h,h=f),u=[],f=m+h,i=f;i--;)u.push(0);for(i=h;--i>=0;){for(r=0,s=m+i;s>i;)p=u[s]+x[i]*y[s-i-1]+r,u[s--]=p%pr|0,r=p/pr|0;u[s]=(u[s]+r)%pr|0}for(;!u[--f];)u.pop();return r?++l:u.shift(),t.d=u,t.e=Mc(u,l),De?ve(t,v.precision,v.rounding):t};le.toBinary=function(t,r){return g1(this,2,t,r)};le.toDecimalPlaces=le.toDP=function(t,r){var l=this,i=l.constructor;return l=new i(l),t===void 0?l:(An(t,0,Ba),r===void 0?r=i.rounding:An(r,0,8),ve(l,t+l.e+1,r))};le.toExponential=function(t,r){var l,i=this,s=i.constructor;return t===void 0?l=_r(i,!0):(An(t,0,Ba),r===void 0?r=s.rounding:An(r,0,8),i=ve(new s(i),t+1,r),l=_r(i,!0,t+1)),i.isNeg()&&!i.isZero()?"-"+l:l};le.toFixed=function(t,r){var l,i,s=this,u=s.constructor;return t===void 0?l=_r(s):(An(t,0,Ba),r===void 0?r=u.rounding:An(r,0,8),i=ve(new u(s),t+s.e+1,r),l=_r(i,!1,t+i.e+1)),s.isNeg()&&!s.isZero()?"-"+l:l};le.toFraction=function(t){var r,l,i,s,u,f,p,m,h,K,v,y,x=this,E=x.d,T=x.constructor;if(!E)return new T(x);if(h=l=new T(1),i=m=new T(0),r=new T(i),u=r.e=G4(E)-x.e-1,f=u%Te,r.d[0]=Xt(10,f<0?Te+f:f),t==null)t=u>0?r:h;else{if(p=new T(t),!p.isInt()||p.lt(h))throw Error(Da+p);t=p.gt(r)?u>0?r:h:p}for(De=!1,p=new T(sn(E)),K=T.precision,T.precision=u=E.length*Te*2;v=Kt(p,r,0,1,1),s=l.plus(v.times(i)),s.cmp(t)!=1;)l=i,i=s,s=h,h=m.plus(v.times(s)),m=s,s=r,r=p.minus(v.times(s)),p=s;return s=Kt(t.minus(l),i,0,1,1),m=m.plus(s.times(h)),l=l.plus(s.times(i)),m.s=h.s=x.s,y=Kt(h,i,u,1).minus(x).abs().cmp(Kt(m,l,u,1).minus(x).abs())<1?[h,i]:[m,l],T.precision=K,De=!0,y};le.toHexadecimal=le.toHex=function(t,r){return g1(this,16,t,r)};le.toNearest=function(t,r){var l=this,i=l.constructor;if(l=new i(l),t==null){if(!l.d)return l;t=new i(1),r=i.rounding}else{if(t=new i(t),r===void 0?r=i.rounding:An(r,0,8),!l.d)return t.s?l:t;if(!t.d)return t.s&&(t.s=l.s),t}return t.d[0]?(De=!1,l=Kt(l,t,0,r,1).times(t),De=!0,ve(l)):(t.s=l.s,l=t),l};le.toNumber=function(){return+this};le.toOctal=function(t,r){return g1(this,8,t,r)};le.toPower=le.pow=function(t){var r,l,i,s,u,f,p=this,m=p.constructor,h=+(t=new m(t));if(!p.d||!t.d||!p.d[0]||!t.d[0])return new m(Xt(+p,h));if(p=new m(p),p.eq(1))return p;if(i=m.precision,u=m.rounding,t.eq(1))return ve(p,i,u);if(r=mn(t.e/Te),r>=t.d.length-1&&(l=h<0?-h:h)<=qS)return s=F4(m,p,l,i),t.s<0?new m(1).div(s):ve(s,i,u);if(f=p.s,f<0){if(r<t.d.length-1)return new m(NaN);if((t.d[r]&1)==0&&(f=1),p.e==0&&p.d[0]==1&&p.d.length==1)return p.s=f,p}return l=Xt(+p,h),r=l==0||!isFinite(l)?mn(h*(Math.log("0."+sn(p.d))/Math.LN10+p.e+1)):new m(l+"").e,r>m.maxE+1||r<m.minE-1?new m(r>0?f/0:0):(De=!1,m.rounding=p.s=1,l=Math.min(12,(r+"").length),s=_d(t.times(Aa(p,i+l)),i),s.d&&(s=ve(s,i+5,1),ts(s.d,i,u)&&(r=i+10,s=ve(_d(t.times(Aa(p,r+l)),r),r+5,1),+sn(s.d).slice(i+1,i+15)+1==1e14&&(s=ve(s,i+1,0)))),s.s=f,De=!0,m.rounding=u,ve(s,i,u))};le.toPrecision=function(t,r){var l,i=this,s=i.constructor;return t===void 0?l=_r(i,i.e<=s.toExpNeg||i.e>=s.toExpPos):(An(t,1,Ba),r===void 0?r=s.rounding:An(r,0,8),i=ve(new s(i),t,r),l=_r(i,t<=i.e||i.e<=s.toExpNeg,t)),i.isNeg()&&!i.isZero()?"-"+l:l};le.toSignificantDigits=le.toSD=function(t,r){var l=this,i=l.constructor;return t===void 0?(t=i.precision,r=i.rounding):(An(t,1,Ba),r===void 0?r=i.rounding:An(r,0,8)),ve(new i(l),t,r)};le.toString=function(){var t=this,r=t.constructor,l=_r(t,t.e<=r.toExpNeg||t.e>=r.toExpPos);return t.isNeg()&&!t.isZero()?"-"+l:l};le.truncated=le.trunc=function(){return ve(new this.constructor(this),this.e+1,1)};le.valueOf=le.toJSON=function(){var t=this,r=t.constructor,l=_r(t,t.e<=r.toExpNeg||t.e>=r.toExpPos);return t.isNeg()?"-"+l:l};function sn(t){var r,l,i,s=t.length-1,u="",f=t[0];if(s>0){for(u+=f,r=1;r<s;r++)i=t[r]+"",l=Te-i.length,l&&(u+=Ra(l)),u+=i;f=t[r],i=f+"",l=Te-i.length,l&&(u+=Ra(l))}else if(f===0)return"0";for(;f%10===0;)f/=10;return u+f}function An(t,r,l){if(t!==~~t||t<r||t>l)throw Error(Da+t)}function ts(t,r,l,i){var s,u,f,p;for(u=t[0];u>=10;u/=10)--r;return--r<0?(r+=Te,s=0):(s=Math.ceil((r+1)/Te),r%=Te),u=Xt(10,Te-r),p=t[s]%u|0,i==null?r<3?(r==0?p=p/100|0:r==1&&(p=p/10|0),f=l<4&&p==99999||l>3&&p==49999||p==5e4||p==0):f=(l<4&&p+1==u||l>3&&p+1==u/2)&&(t[s+1]/u/100|0)==Xt(10,r-2)-1||(p==u/2||p==0)&&(t[s+1]/u/100|0)==0:r<4?(r==0?p=p/1e3|0:r==1?p=p/100|0:r==2&&(p=p/10|0),f=(i||l<4)&&p==9999||!i&&l>3&&p==4999):f=((i||l<4)&&p+1==u||!i&&l>3&&p+1==u/2)&&(t[s+1]/u/1e3|0)==Xt(10,r-3)-1,f}function ju(t,r,l){for(var i,s=[0],u,f=0,p=t.length;f<p;){for(u=s.length;u--;)s[u]*=r;for(s[0]+=Dd.indexOf(t.charAt(f++)),i=0;i<s.length;i++)s[i]>l-1&&(s[i+1]===void 0&&(s[i+1]=0),s[i+1]+=s[i]/l|0,s[i]%=l)}return s.reverse()}function VS(t,r){var l,i,s;if(r.isZero())return r;i=r.d.length,i<32?(l=Math.ceil(i/3),s=(1/Dc(4,l)).toString()):(l=16,s="2.3283064365386962890625e-10"),t.precision+=l,r=Ki(t,1,r.times(s),new t(1));for(var u=l;u--;){var f=r.times(r);r=f.times(f).minus(f).times(8).plus(1)}return t.precision-=l,r}var Kt=(function(){function t(i,s,u){var f,p=0,m=i.length;for(i=i.slice();m--;)f=i[m]*s+p,i[m]=f%u|0,p=f/u|0;return p&&i.unshift(p),i}function r(i,s,u,f){var p,m;if(u!=f)m=u>f?1:-1;else for(p=m=0;p<u;p++)if(i[p]!=s[p]){m=i[p]>s[p]?1:-1;break}return m}function l(i,s,u,f){for(var p=0;u--;)i[u]-=p,p=i[u]<s[u]?1:0,i[u]=p*f+i[u]-s[u];for(;!i[0]&&i.length>1;)i.shift()}return function(i,s,u,f,p,m){var h,K,v,y,x,E,T,M,_,L,O,w,A,B,k,Z,W,ee,I,S,F=i.constructor,P=i.s==s.s?1:-1,j=i.d,C=s.d;if(!j||!j[0]||!C||!C[0])return new F(!i.s||!s.s||(j?C&&j[0]==C[0]:!C)?NaN:j&&j[0]==0||!C?P*0:P/0);for(m?(x=1,K=i.e-s.e):(m=pr,x=Te,K=mn(i.e/x)-mn(s.e/x)),I=C.length,W=j.length,_=new F(P),L=_.d=[],v=0;C[v]==(j[v]||0);v++);if(C[v]>(j[v]||0)&&K--,u==null?(B=u=F.precision,f=F.rounding):p?B=u+(i.e-s.e)+1:B=u,B<0)L.push(1),E=!0;else{if(B=B/x+2|0,v=0,I==1){for(y=0,C=C[0],B++;(v<W||y)&&B--;v++)k=y*m+(j[v]||0),L[v]=k/C|0,y=k%C|0;E=y||v<W}else{for(y=m/(C[0]+1)|0,y>1&&(C=t(C,y,m),j=t(j,y,m),I=C.length,W=j.length),Z=I,O=j.slice(0,I),w=O.length;w<I;)O[w++]=0;S=C.slice(),S.unshift(0),ee=C[0],C[1]>=m/2&&++ee;do y=0,h=r(C,O,I,w),h<0?(A=O[0],I!=w&&(A=A*m+(O[1]||0)),y=A/ee|0,y>1?(y>=m&&(y=m-1),T=t(C,y,m),M=T.length,w=O.length,h=r(T,O,M,w),h==1&&(y--,l(T,I<M?S:C,M,m))):(y==0&&(h=y=1),T=C.slice()),M=T.length,M<w&&T.unshift(0),l(O,T,w,m),h==-1&&(w=O.length,h=r(C,O,I,w),h<1&&(y++,l(O,I<w?S:C,w,m))),w=O.length):h===0&&(y++,O=[0]),L[v++]=y,h&&O[0]?O[w++]=j[Z]||0:(O=[j[Z]],w=1);while((Z++<W||O[0]!==void 0)&&B--);E=O[0]!==void 0}L[0]||L.shift()}if(x==1)_.e=K,$4=E;else{for(v=1,y=L[0];y>=10;y/=10)v++;_.e=v+K*x-1,ve(_,p?u+_.e+1:u,f,E)}return _}})();function ve(t,r,l,i){var s,u,f,p,m,h,K,v,y,x=t.constructor;e:if(r!=null){if(v=t.d,!v)return t;for(s=1,p=v[0];p>=10;p/=10)s++;if(u=r-s,u<0)u+=Te,f=r,K=v[y=0],m=K/Xt(10,s-f-1)%10|0;else if(y=Math.ceil((u+1)/Te),p=v.length,y>=p)if(i){for(;p++<=y;)v.push(0);K=m=0,s=1,u%=Te,f=u-Te+1}else break e;else{for(K=p=v[y],s=1;p>=10;p/=10)s++;u%=Te,f=u-Te+s,m=f<0?0:K/Xt(10,s-f-1)%10|0}if(i=i||r<0||v[y+1]!==void 0||(f<0?K:K%Xt(10,s-f-1)),h=l<4?(m||i)&&(l==0||l==(t.s<0?3:2)):m>5||m==5&&(l==4||i||l==6&&(u>0?f>0?K/Xt(10,s-f):0:v[y-1])%10&1||l==(t.s<0?8:7)),r<1||!v[0])return v.length=0,h?(r-=t.e+1,v[0]=Xt(10,(Te-r%Te)%Te),t.e=-r||0):v[0]=t.e=0,t;if(u==0?(v.length=y,p=1,y--):(v.length=y+1,p=Xt(10,Te-u),v[y]=f>0?(K/Xt(10,s-f)%Xt(10,f)|0)*p:0),h)for(;;)if(y==0){for(u=1,f=v[0];f>=10;f/=10)u++;for(f=v[0]+=p,p=1;f>=10;f/=10)p++;u!=p&&(t.e++,v[0]==pr&&(v[0]=1));break}else{if(v[y]+=p,v[y]!=pr)break;v[y--]=0,p=1}for(u=v.length;v[--u]===0;)v.pop()}return De&&(t.e>x.maxE?(t.d=null,t.e=NaN):t.e<x.minE&&(t.e=0,t.d=[0])),t}function _r(t,r,l){if(!t.isFinite())return Z4(t);var i,s=t.e,u=sn(t.d),f=u.length;return r?(l&&(i=l-f)>0?u=u.charAt(0)+"."+u.slice(1)+Ra(i):f>1&&(u=u.charAt(0)+"."+u.slice(1)),u=u+(t.e<0?"e":"e+")+t.e):s<0?(u="0."+Ra(-s-1)+u,l&&(i=l-f)>0&&(u+=Ra(i))):s>=f?(u+=Ra(s+1-f),l&&(i=l-s-1)>0&&(u=u+"."+Ra(i))):((i=s+1)<f&&(u=u.slice(0,i)+"."+u.slice(i)),l&&(i=l-f)>0&&(s+1===f&&(u+="."),u+=Ra(i))),u}function Mc(t,r){var l=t[0];for(r*=Te;l>=10;l/=10)r++;return r}function ac(t,r,l){if(r>YS)throw De=!0,l&&(t.precision=l),Error(P4);return ve(new t(nc),r,1,!0)}function Or(t,r,l){if(r>Bd)throw Error(P4);return ve(new t(rc),r,l,!0)}function G4(t){var r=t.length-1,l=r*Te+1;if(r=t[r],r){for(;r%10==0;r/=10)l--;for(r=t[0];r>=10;r/=10)l++}return l}function Ra(t){for(var r="";t--;)r+="0";return r}function F4(t,r,l,i){var s,u=new t(1),f=Math.ceil(i/Te+4);for(De=!1;;){if(l%2&&(u=u.times(r),Am(u.d,f)&&(s=!0)),l=mn(l/2),l===0){l=u.d.length-1,s&&u.d[l]===0&&++u.d[l];break}r=r.times(r),Am(r.d,f)}return De=!0,u}function Rm(t){return t.d[t.d.length-1]&1}function X4(t,r,l){for(var i,s,u=new t(r[0]),f=0;++f<r.length;){if(s=new t(r[f]),!s.s){u=s;break}i=u.cmp(s),(i===l||i===0&&u.s===l)&&(u=s)}return u}function _d(t,r){var l,i,s,u,f,p,m,h=0,K=0,v=0,y=t.constructor,x=y.rounding,E=y.precision;if(!t.d||!t.d[0]||t.e>17)return new y(t.d?t.d[0]?t.s<0?0:1/0:1:t.s?t.s<0?0:t:NaN);for(r==null?(De=!1,m=E):m=r,p=new y(.03125);t.e>-2;)t=t.times(p),v+=5;for(i=Math.log(Xt(2,v))/Math.LN10*2+5|0,m+=i,l=u=f=new y(1),y.precision=m;;){if(u=ve(u.times(t),m,1),l=l.times(++K),p=f.plus(Kt(u,l,m,1)),sn(p.d).slice(0,m)===sn(f.d).slice(0,m)){for(s=v;s--;)f=ve(f.times(f),m,1);if(r==null)if(h<3&&ts(f.d,m-i,x,h))y.precision=m+=10,l=u=p=new y(1),K=0,h++;else return ve(f,y.precision=E,x,De=!0);else return y.precision=E,f}f=p}}function Aa(t,r){var l,i,s,u,f,p,m,h,K,v,y,x=1,E=10,T=t,M=T.d,_=T.constructor,L=_.rounding,O=_.precision;if(T.s<0||!M||!M[0]||!T.e&&M[0]==1&&M.length==1)return new _(M&&!M[0]?-1/0:T.s!=1?NaN:M?0:T);if(r==null?(De=!1,K=O):K=r,_.precision=K+=E,l=sn(M),i=l.charAt(0),Math.abs(u=T.e)<15e14){for(;i<7&&i!=1||i==1&&l.charAt(1)>3;)T=T.times(t),l=sn(T.d),i=l.charAt(0),x++;u=T.e,i>1?(T=new _("0."+l),u++):T=new _(i+"."+l.slice(1))}else return h=ac(_,K+2,O).times(u+""),T=Aa(new _(i+"."+l.slice(1)),K-E).plus(h),_.precision=O,r==null?ve(T,O,L,De=!0):T;for(v=T,m=f=T=Kt(T.minus(1),T.plus(1),K,1),y=ve(T.times(T),K,1),s=3;;){if(f=ve(f.times(y),K,1),h=m.plus(Kt(f,new _(s),K,1)),sn(h.d).slice(0,K)===sn(m.d).slice(0,K))if(m=m.times(2),u!==0&&(m=m.plus(ac(_,K+2,O).times(u+""))),m=Kt(m,new _(x),K,1),r==null)if(ts(m.d,K-E,L,p))_.precision=K+=E,h=f=T=Kt(v.minus(1),v.plus(1),K,1),y=ve(T.times(T),K,1),s=p=1;else return ve(m,_.precision=O,L,De=!0);else return _.precision=O,m;m=h,s+=2}}function Z4(t){return String(t.s*t.s/0)}function $u(t,r){var l,i,s;for((l=r.indexOf("."))>-1&&(r=r.replace(".","")),(i=r.search(/e/i))>0?(l<0&&(l=i),l+=+r.slice(i+1),r=r.substring(0,i)):l<0&&(l=r.length),i=0;r.charCodeAt(i)===48;i++);for(s=r.length;r.charCodeAt(s-1)===48;--s);if(r=r.slice(i,s),r){if(s-=i,t.e=l=l-i-1,t.d=[],i=(l+1)%Te,l<0&&(i+=Te),i<s){for(i&&t.d.push(+r.slice(0,i)),s-=Te;i<s;)t.d.push(+r.slice(i,i+=Te));r=r.slice(i),i=Te-r.length}else i-=s;for(;i--;)r+="0";t.d.push(+r),De&&(t.e>t.constructor.maxE?(t.d=null,t.e=NaN):t.e<t.constructor.minE&&(t.e=0,t.d=[0]))}else t.e=0,t.d=[0];return t}function GS(t,r){var l,i,s,u,f,p,m,h,K;if(r.indexOf("_")>-1){if(r=r.replace(/(\d)_(?=\d)/g,"$1"),V4.test(r))return $u(t,r)}else if(r==="Infinity"||r==="NaN")return+r||(t.s=NaN),t.e=NaN,t.d=null,t;if($S.test(r))l=16,r=r.toLowerCase();else if(jS.test(r))l=2;else if(PS.test(r))l=8;else throw Error(Da+r);for(u=r.search(/p/i),u>0?(m=+r.slice(u+1),r=r.substring(2,u)):r=r.slice(2),u=r.indexOf("."),f=u>=0,i=t.constructor,f&&(r=r.replace(".",""),p=r.length,u=p-u,s=F4(i,new i(l),u,u*2)),h=ju(r,l,pr),K=h.length-1,u=K;h[u]===0;--u)h.pop();return u<0?new i(t.s*0):(t.e=Mc(h,K),t.d=h,De=!1,f&&(t=Kt(t,s,p*4)),m&&(t=t.times(Math.abs(m)<54?Xt(2,m):Dt.pow(2,m))),De=!0,t)}function FS(t,r){var l,i=r.d.length;if(i<3)return r.isZero()?r:Ki(t,2,r,r);l=1.4*Math.sqrt(i),l=l>16?16:l|0,r=r.times(1/Dc(5,l)),r=Ki(t,2,r,r);for(var s,u=new t(5),f=new t(16),p=new t(20);l--;)s=r.times(r),r=r.times(u.plus(s.times(f.times(s).minus(p))));return r}function Ki(t,r,l,i,s){var u,f,p,m,h=t.precision,K=Math.ceil(h/Te);for(De=!1,m=l.times(l),p=new t(i);;){if(f=Kt(p.times(m),new t(r++*r++),h,1),p=s?i.plus(f):i.minus(f),i=Kt(f.times(m),new t(r++*r++),h,1),f=p.plus(i),f.d[K]!==void 0){for(u=K;f.d[u]===p.d[u]&&u--;);if(u==-1)break}u=p,p=i,i=f,f=u}return De=!0,f.d.length=K+1,f}function Dc(t,r){for(var l=t;--r;)l*=t;return l}function Q4(t,r){var l,i=r.s<0,s=Or(t,t.precision,1),u=s.times(.5);if(r=r.abs(),r.lte(u))return na=i?4:1,r;if(l=r.divToInt(s),l.isZero())na=i?3:2;else{if(r=r.minus(l.times(s)),r.lte(u))return na=Rm(l)?i?2:3:i?4:1,r;na=Rm(l)?i?1:4:i?3:2}return r.minus(s).abs()}function g1(t,r,l,i){var s,u,f,p,m,h,K,v,y,x=t.constructor,E=l!==void 0;if(E?(An(l,1,Ba),i===void 0?i=x.rounding:An(i,0,8)):(l=x.precision,i=x.rounding),!t.isFinite())K=Z4(t);else{for(K=_r(t),f=K.indexOf("."),E?(s=2,r==16?l=l*4-3:r==8&&(l=l*3-2)):s=r,f>=0&&(K=K.replace(".",""),y=new x(1),y.e=K.length-f,y.d=ju(_r(y),10,s),y.e=y.d.length),v=ju(K,10,s),u=m=v.length;v[--m]==0;)v.pop();if(!v[0])K=E?"0p+0":"0";else{if(f<0?u--:(t=new x(t),t.d=v,t.e=u,t=Kt(t,y,l,i,0,s),v=t.d,u=t.e,h=$4),f=v[l],p=s/2,h=h||v[l+1]!==void 0,h=i<4?(f!==void 0||h)&&(i===0||i===(t.s<0?3:2)):f>p||f===p&&(i===4||h||i===6&&v[l-1]&1||i===(t.s<0?8:7)),v.length=l,h)for(;++v[--l]>s-1;)v[l]=0,l||(++u,v.unshift(1));for(m=v.length;!v[m-1];--m);for(f=0,K="";f<m;f++)K+=Dd.charAt(v[f]);if(E){if(m>1)if(r==16||r==8){for(f=r==16?4:3,--m;m%f;m++)K+="0";for(v=ju(K,s,r),m=v.length;!v[m-1];--m);for(f=1,K="1.";f<m;f++)K+=Dd.charAt(v[f])}else K=K.charAt(0)+"."+K.slice(1);K=K+(u<0?"p":"p+")+u}else if(u<0){for(;++u;)K="0"+K;K="0."+K}else if(++u>m)for(u-=m;u--;)K+="0";else u<m&&(K=K.slice(0,u)+"."+K.slice(u))}K=(r==16?"0x":r==2?"0b":r==8?"0o":"")+K}return t.s<0?"-"+K:K}function Am(t,r){if(t.length>r)return t.length=r,!0}function XS(t){return new this(t).abs()}function ZS(t){return new this(t).acos()}function QS(t){return new this(t).acosh()}function IS(t,r){return new this(t).plus(r)}function WS(t){return new this(t).asin()}function JS(t){return new this(t).asinh()}function ex(t){return new this(t).atan()}function tx(t){return new this(t).atanh()}function nx(t,r){t=new this(t),r=new this(r);var l,i=this.precision,s=this.rounding,u=i+4;return!t.s||!r.s?l=new this(NaN):!t.d&&!r.d?(l=Or(this,u,1).times(r.s>0?.25:.75),l.s=t.s):!r.d||t.isZero()?(l=r.s<0?Or(this,i,s):new this(0),l.s=t.s):!t.d||r.isZero()?(l=Or(this,u,1).times(.5),l.s=t.s):r.s<0?(this.precision=u,this.rounding=1,l=this.atan(Kt(t,r,u,1)),r=Or(this,u,1),this.precision=i,this.rounding=s,l=t.s<0?l.minus(r):l.plus(r)):l=this.atan(Kt(t,r,u,1)),l}function rx(t){return new this(t).cbrt()}function ax(t){return ve(t=new this(t),t.e+1,2)}function lx(t,r,l){return new this(t).clamp(r,l)}function ix(t){if(!t||typeof t!="object")throw Error(Oc+"Object expected");var r,l,i,s=t.defaults===!0,u=["precision",1,Ba,"rounding",0,8,"toExpNeg",-li,0,"toExpPos",0,li,"maxE",0,li,"minE",-li,0,"modulo",0,9];for(r=0;r<u.length;r+=3)if(l=u[r],s&&(this[l]=Nd[l]),(i=t[l])!==void 0)if(mn(i)===i&&i>=u[r+1]&&i<=u[r+2])this[l]=i;else throw Error(Da+l+": "+i);if(l="crypto",s&&(this[l]=Nd[l]),(i=t[l])!==void 0)if(i===!0||i===!1||i===0||i===1)if(i)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[l]=!0;else throw Error(q4);else this[l]=!1;else throw Error(Da+l+": "+i);return this}function ox(t){return new this(t).cos()}function sx(t){return new this(t).cosh()}function I4(t){var r,l,i;function s(u){var f,p,m,h=this;if(!(h instanceof s))return new s(u);if(h.constructor=s,Om(u)){h.s=u.s,De?!u.d||u.e>s.maxE?(h.e=NaN,h.d=null):u.e<s.minE?(h.e=0,h.d=[0]):(h.e=u.e,h.d=u.d.slice()):(h.e=u.e,h.d=u.d?u.d.slice():u.d);return}if(m=typeof u,m==="number"){if(u===0){h.s=1/u<0?-1:1,h.e=0,h.d=[0];return}if(u<0?(u=-u,h.s=-1):h.s=1,u===~~u&&u<1e7){for(f=0,p=u;p>=10;p/=10)f++;De?f>s.maxE?(h.e=NaN,h.d=null):f<s.minE?(h.e=0,h.d=[0]):(h.e=f,h.d=[u]):(h.e=f,h.d=[u]);return}if(u*0!==0){u||(h.s=NaN),h.e=NaN,h.d=null;return}return $u(h,u.toString())}if(m==="string")return(p=u.charCodeAt(0))===45?(u=u.slice(1),h.s=-1):(p===43&&(u=u.slice(1)),h.s=1),V4.test(u)?$u(h,u):GS(h,u);if(m==="bigint")return u<0?(u=-u,h.s=-1):h.s=1,$u(h,u.toString());throw Error(Da+u)}if(s.prototype=le,s.ROUND_UP=0,s.ROUND_DOWN=1,s.ROUND_CEIL=2,s.ROUND_FLOOR=3,s.ROUND_HALF_UP=4,s.ROUND_HALF_DOWN=5,s.ROUND_HALF_EVEN=6,s.ROUND_HALF_CEIL=7,s.ROUND_HALF_FLOOR=8,s.EUCLID=9,s.config=s.set=ix,s.clone=I4,s.isDecimal=Om,s.abs=XS,s.acos=ZS,s.acosh=QS,s.add=IS,s.asin=WS,s.asinh=JS,s.atan=ex,s.atanh=tx,s.atan2=nx,s.cbrt=rx,s.ceil=ax,s.clamp=lx,s.cos=ox,s.cosh=sx,s.div=ux,s.exp=cx,s.floor=fx,s.hypot=dx,s.ln=px,s.log=hx,s.log10=Kx,s.log2=mx,s.max=gx,s.min=vx,s.mod=yx,s.mul=bx,s.pow=Sx,s.random=xx,s.round=Tx,s.sign=Ex,s.sin=Cx,s.sinh=wx,s.sqrt=Rx,s.sub=Ax,s.sum=Ox,s.tan=Mx,s.tanh=Dx,s.trunc=Nx,t===void 0&&(t={}),t&&t.defaults!==!0)for(i=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],r=0;r<i.length;)t.hasOwnProperty(l=i[r++])||(t[l]=this[l]);return s.config(t),s}function ux(t,r){return new this(t).div(r)}function cx(t){return new this(t).exp()}function fx(t){return ve(t=new this(t),t.e+1,3)}function dx(){var t,r,l=new this(0);for(De=!1,t=0;t<arguments.length;)if(r=new this(arguments[t++]),r.d)l.d&&(l=l.plus(r.times(r)));else{if(r.s)return De=!0,new this(1/0);l=r}return De=!0,l.sqrt()}function Om(t){return t instanceof Dt||t&&t.toStringTag===Y4||!1}function px(t){return new this(t).ln()}function hx(t,r){return new this(t).log(r)}function mx(t){return new this(t).log(2)}function Kx(t){return new this(t).log(10)}function gx(){return X4(this,arguments,-1)}function vx(){return X4(this,arguments,1)}function yx(t,r){return new this(t).mod(r)}function bx(t,r){return new this(t).mul(r)}function Sx(t,r){return new this(t).pow(r)}function xx(t){var r,l,i,s,u=0,f=new this(1),p=[];if(t===void 0?t=this.precision:An(t,1,Ba),i=Math.ceil(t/Te),this.crypto)if(crypto.getRandomValues)for(r=crypto.getRandomValues(new Uint32Array(i));u<i;)s=r[u],s>=429e7?r[u]=crypto.getRandomValues(new Uint32Array(1))[0]:p[u++]=s%1e7;else if(crypto.randomBytes){for(r=crypto.randomBytes(i*=4);u<i;)s=r[u]+(r[u+1]<<8)+(r[u+2]<<16)+((r[u+3]&127)<<24),s>=214e7?crypto.randomBytes(4).copy(r,u):(p.push(s%1e7),u+=4);u=i/4}else throw Error(q4);else for(;u<i;)p[u++]=Math.random()*1e7|0;for(i=p[--u],t%=Te,i&&t&&(s=Xt(10,Te-t),p[u]=(i/s|0)*s);p[u]===0;u--)p.pop();if(u<0)l=0,p=[0];else{for(l=-1;p[0]===0;l-=Te)p.shift();for(i=1,s=p[0];s>=10;s/=10)i++;i<Te&&(l-=Te-i)}return f.e=l,f.d=p,f}function Tx(t){return ve(t=new this(t),t.e+1,this.rounding)}function Ex(t){return t=new this(t),t.d?t.d[0]?t.s:0*t.s:t.s||NaN}function Cx(t){return new this(t).sin()}function wx(t){return new this(t).sinh()}function Rx(t){return new this(t).sqrt()}function Ax(t,r){return new this(t).sub(r)}function Ox(){var t=0,r=arguments,l=new this(r[t]);for(De=!1;l.s&&++t<r.length;)l=l.plus(r[t]);return De=!0,ve(l,this.precision,this.rounding)}function Mx(t){return new this(t).tan()}function Dx(t){return new this(t).tanh()}function Nx(t){return ve(t=new this(t),t.e+1,1)}le[Symbol.for("nodejs.util.inspect.custom")]=le.toString;le[Symbol.toStringTag]="Decimal";var Dt=le.constructor=I4(Nd);nc=new Dt(nc);rc=new Dt(rc);const Bx=Dt(4),Mm=Dt(1),_x=20,zx=ye(({className:t,...r})=>q.jsx(kb,{...r,classes:{popper:t}}))(({theme:t})=>({[`& .${Mt.tooltip}`]:{backgroundColor:t.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:t.shadows[1],fontSize:11,maxWidth:400,paddingLeft:0,paddingRight:0}}));let Oo={},Mo={};function id(t){if(Oo[t])return Oo[t];const r=localStorage.getItem(ds);if(!r)return 1;const l=JSON.parse(r).lab;return Oo[t]=l[t].value||1,Oo[t]}function Tr(t){if(Mo[t])return Mo[t];const r=localStorage.getItem(ds);if(!r)return 0;const l=JSON.parse(r).workshop;return Mo[t]=l[t]?.level||0,Mo[t]}function Er({damage:t,attackSpeed:r,critChance:l,critFactor:i,multishotChance:s,multishotTargets:u,rapidFireChance:f,bounceChance:p,bounceTargets:m}){const h=Dt(t.value).mul(id(Je.Damage)),K=Dt(r.value).mul(id(Je.AttackSpeed)),v=Dt(l.value),y=Dt(i.value).mul(id(Je.CritFactor)),x=Dt(s.value),E=Dt(u.value),T=Dt(f.value),M=Dt(p.value),_=Dt(m.value),L=Dt(1).sub(v.div(100)).add(v.div(100).mul(y)),O=Dt(1).sub(x.div(100)).add(x.div(100).mul(E)),w=Dt(1).sub(M.div(100)).add(M.div(100).mul(_)),A=Dt(1).div(K).mul(100).div(T),B=Bx.mul(Mm).div(Mm.add(A)),k=K.mul(Dt(1).add(B.div(100)));return h.mul(k).mul(L).mul(O).mul(w)}function Lx(t){const r=Er(t),l={damage:Cr(ie.Damage,t.damage.level+1),attackSpeed:Cr(ie.AttackSpeed,t.attackSpeed.level+1),critChance:Cr(ie.CritChance,t.critChance.level+1),critFactor:Cr(ie.CritFactor,t.critFactor.level+1),multishotChance:Cr(ie.MultishotChance,t.multishotChance.level+1),multishotTargets:Cr(ie.MultishotTargets,t.multishotTargets.level+1),rapidFireChance:Cr(ie.RapidFireChance,t.rapidFireChance.level+1),bounceChance:Cr(ie.BounceChance,t.bounceChance.level+1),bounceTargets:Cr(ie.BounceTargets,t.bounceTargets.level+1)},i={damage:Er({...t,damage:{...t.damage,value:l.damage}}),attackSpeed:Er({...t,attackSpeed:{...t.attackSpeed,value:l.attackSpeed}}),critChance:Er({...t,critChance:{...t.critChance,value:l.critChance}}),critFactor:Er({...t,critFactor:{...t.critFactor,value:l.critFactor}}),multishotChance:Er({...t,multishotChance:{...t.multishotChance,value:l.multishotChance}}),multishotTargets:Er({...t,multishotTargets:{...t.multishotTargets,value:l.multishotTargets}}),rapidFireChance:Er({...t,rapidFireChance:{...t.rapidFireChance,value:l.rapidFireChance}}),bounceChance:Er({...t,bounceChance:{...t.bounceChance,value:l.bounceChance}}),bounceTargets:Er({...t,bounceTargets:{...t.bounceTargets,value:l.bounceTargets}})},s={damage:er(Go,t.damage.level,Tr(ie.Damage)),attackSpeed:er(Fo,t.attackSpeed.level,Tr(ie.AttackSpeed)),critChance:er(Xo,t.critChance.level,Tr(ie.CritChance)),critFactor:er(Zo,t.critFactor.level,Tr(ie.CritFactor)),multishotChance:er(Qo,t.multishotChance.level,Tr(ie.MultishotChance)),multishotTargets:er(Io,t.multishotTargets.level,Tr(ie.MultishotTargets)),rapidFireChance:er(Wo,t.rapidFireChance.level,Tr(ie.RapidFireChance)),bounceChance:er(Jo,t.bounceChance.level,Tr(ie.BounceChance)),bounceTargets:er(es,t.bounceTargets.level,Tr(ie.BounceTargets))};let u=Dt(0),f=null,p=Dt(0);for(const[K,v]of Object.entries(i)){const y=v.sub(r),x=Dt(s[K]);if(x.lte(0))continue;const E=y.div(x);E.gt(u)&&(u=E,f=K,p=x)}if(!f)return t;const m=t[f].value,h={...t,index:t.index+1,changedStat:f,statCost:p.toNumber(),oldStatValue:m};return h[f]={...h[f],level:h[f].level+1,value:l[f],cost:er(ko[f],h[f].level+1,Tr(f))},h}function Ux(){const[t,r]=R.useState([]);Oo={},Mo={};const l=localStorage.getItem(ds);if(!l)return q.jsx(kn,{variant:"body1",gutterBottom:!0,children:"Please set your lab and workshop start levels in the Lab and Start Setup tab."});const i=JSON.parse(l).workshop,s={index:1,damage:i[ie.Damage]||{id:ie.Damage,level:0,value:0,cost:Ut(Go)},attackSpeed:i[ie.AttackSpeed]||{id:ie.AttackSpeed,level:0,value:0,cost:Ut(Fo)},critChance:i[ie.CritChance]||{id:ie.CritChance,level:0,value:0,cost:Ut(Xo)},critFactor:i[ie.CritFactor]||{id:ie.CritFactor,level:0,value:0,cost:Ut(Zo)},multishotChance:i[ie.MultishotChance]||{id:ie.MultishotChance,level:0,value:0,cost:Ut(Qo)},multishotTargets:i[ie.MultishotTargets]||{id:ie.MultishotTargets,level:0,value:0,cost:Ut(Io)},rapidFireChance:i[ie.RapidFireChance]||{id:ie.RapidFireChance,level:0,value:0,cost:Ut(Wo)},bounceChance:i[ie.BounceChance]||{id:ie.BounceChance,level:0,value:0,cost:Ut(Jo)},bounceTargets:i[ie.BounceTargets]||{id:ie.BounceTargets,level:0,value:0,cost:Ut(es)}},u=()=>{const p=[...t];p.length===0&&p.push(s);let m=p[p.length-1];for(let h=0;h<_x;h++){const K=Lx(m);if(K.index===m.index)break;p.push(K),m=K}r(p)};t.length===0&&u();const f={damage:"rgba(255, 0, 0, 0.1)",attackSpeed:"rgba(0, 255, 0, 0.1)",critChance:"rgba(0, 0, 255, 0.1)",critFactor:"rgba(255, 0, 255, 0.1)",multishotChance:"rgba(255, 165, 0, 0.1)",multishotTargets:"rgba(0, 255, 128, 0.1)",rapidFireChance:"rgba(0, 255, 255, 0.1)",bounceChance:"rgba(196, 196, 196, 0.1)",bounceTargets:"rgba(92, 92, 92, 0.1)"};return q.jsx(dr,{direction:"column",display:"flex",alignItems:"center",padding:2,gap:2,overflow:"auto",maxHeight:"calc(100vh - 250px)",width:"95vw",id:"scrollableDiv",children:t.length>0?q.jsx(HS,{dataLength:t.length,next:u,hasMore:!0,loader:q.jsx(kn,{variant:"body2",gutterBottom:!0,children:"Loading more upgrades..."}),scrollableTarget:"scrollableDiv",style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},children:t.map((p,m)=>q.jsx(zx,{title:q.jsx(LS,{state:p}),placement:"right",children:q.jsx(dr,{direction:"row",width:200,alignItems:"center",justifyContent:"center",sx:{padding:1,border:"1px solid lightgray",borderRadius:2,backgroundColor:f[p.changedStat||""]},spacing:4,children:p.changedStat?q.jsxs(dr,{direction:"column",alignItems:"center",children:[q.jsx(kn,{variant:"body1",gutterBottom:!0,children:K1.find(h=>h.id===p.changedStat)?.label}),q.jsxs(kn,{variant:"body1",gutterBottom:!0,children:[Uo(p.oldStatValue)," -> ",q.jsx("strong",{children:Uo(p[p.changedStat].value)})," for $",Uo(p.statCost)]})]}):q.jsx(kn,{variant:"body1",gutterBottom:!0,children:"Initial State"})},m)},m))}):q.jsx(kn,{variant:"body1",gutterBottom:!0,children:"No upgrades available, please set your lab and workshop start levels in the Lab and Start Setup tab."})})}function kx({stat:t,research:r,onChange:l}){const[i,s]=R.useState(r.level),[u,f]=R.useState(r.value);R.useEffect(()=>{s(r.level),f(r.value)},[r]);const p=h=>{if(h<0||h>m1[t.id].length-1)return;s(h);const K=j4(t.id,h);f(K),l({id:t.id,level:h,value:K})},m=h=>{h<0||(f(h),l({id:t.id,level:i,value:h}))};return q.jsxs(dr,{direction:"row",spacing:2,alignItems:"center",marginBottom:2,children:[q.jsx(tc,{label:`${t.label} Level`,type:"number",value:i,onChange:h=>p(parseInt(h.target.value)||0),variant:"outlined",margin:"normal"}),q.jsx(tc,{label:`${t.label} Value`,type:"number",value:u,onChange:h=>m(parseFloat(h.target.value)||0),variant:"outlined",margin:"normal",disabled:!0})]})}function Hx({stat:t,upgrade:r,onChange:l}){const[i,s]=R.useState(r.level),[u,f]=R.useState(r.value);R.useEffect(()=>{s(r.level),f(r.value)},[r]);const p=h=>{if(h<0||h>ko[t.id].length-1)return;s(h);const K=Cr(t.id,h);f(K),l({id:t.id,level:h,value:K,cost:er(ko[t.id],h,r.level)})},m=h=>{h<0||(f(h),l({id:t.id,level:i,value:h,cost:er(ko[t.id],i,r.level)}))};return q.jsxs(dr,{direction:"row",spacing:2,alignItems:"center",marginBottom:2,children:[q.jsx(tc,{label:`${t.label} Level`,type:"number",value:i,onChange:h=>p(parseInt(h.target.value)||0),variant:"outlined",margin:"normal"}),q.jsx(tc,{label:`${t.label} Value`,type:"number",value:u,onChange:h=>m(parseFloat(h.target.value)||0),variant:"outlined",margin:"normal",disabled:!0})]})}function jx(t,r){const[l,i]=R.useState(r);R.useEffect(()=>{const u=localStorage.getItem(t);u&&i(JSON.parse(u))},[t]);const s=ss(u=>{localStorage.setItem(t,JSON.stringify(u)),i(u)},300);return[l,s]}function $x(){const t={lab:{[Je.Damage]:{id:Je.Damage,level:0,value:0},[Je.CritFactor]:{id:Je.CritFactor,level:0,value:0},[Je.AttackSpeed]:{id:Je.AttackSpeed,level:0,value:0},[Je.DefenseFlat]:{id:Je.DefenseFlat,level:0,value:0},[Je.DefensePercent]:{id:Je.DefensePercent,level:0,value:0}},workshop:{[ie.Damage]:{id:ie.Damage,level:0,value:Un(Go),cost:Ut(Go)},[ie.AttackSpeed]:{id:ie.AttackSpeed,level:0,value:Un(Fo),cost:Ut(Fo)},[ie.CritChance]:{id:ie.CritChance,level:0,value:Un(Xo),cost:Ut(Xo)},[ie.CritFactor]:{id:ie.CritFactor,level:0,value:Un(Zo),cost:Ut(Zo)},[ie.MultishotChance]:{id:ie.MultishotChance,level:0,value:Un(Qo),cost:Ut(Qo)},[ie.MultishotTargets]:{id:ie.MultishotTargets,level:0,value:Un(Io),cost:Ut(Io)},[ie.RapidFireChance]:{id:ie.RapidFireChance,level:0,value:Un(Wo),cost:Ut(Wo)},[ie.BounceChance]:{id:ie.BounceChance,level:0,value:Un(Jo),cost:Ut(Jo)},[ie.BounceTargets]:{id:ie.BounceTargets,level:0,value:Un(es),cost:Ut(es)},[ie.Health]:{id:ie.Health,level:0,value:Un(wd),cost:Ut(wd)},[ie.HealthRegen]:{id:ie.HealthRegen,level:0,value:Un(Rd),cost:Ut(Rd)},[ie.DefensePercent]:{id:ie.DefensePercent,level:0,value:Un(Ad),cost:Ut(Ad)},[ie.DefenseFlat]:{id:ie.DefenseFlat,level:0,value:Un(Od),cost:Ut(Od)}}},[r,l]=jx(ds,t),i=u=>{r.lab[u.id]=u,l({...r})},s=u=>{r.workshop[u.id]=u,l({...r})};return q.jsxs(dr,{direction:"row",display:"flex",justifyContent:"space-around",padding:2,gap:4,children:[q.jsxs(dr,{children:[q.jsx("h2",{children:"Lab Research Levels"}),zS.map(u=>q.jsx(kx,{stat:u,research:r.lab[u.id],onChange:i},u.id))]}),q.jsxs(dr,{children:[q.jsx("h2",{children:"Workshop Upgrade Levels"}),K1.map(u=>q.jsx(Hx,{stat:u,upgrade:r.workshop[u.id],onChange:s},u.id))]})]})}function Px(){const[t,r]=R.useState(0),l=(i,s)=>{r(s)};return q.jsxs(Ou,{sx:{height:"95vh"},display:"flex",flexDirection:"column",alignItems:"center",position:"relative",children:[q.jsx(kn,{variant:"h4",gutterBottom:!0,children:"The Tower Mobile Idle Game: Upgrades calculator"}),q.jsx(Ou,{sx:{width:"100%"},children:q.jsx(Ou,{sx:{borderBottom:1,borderColor:"divider"},children:q.jsxs(iS,{value:t,onChange:l,"aria-label":"basic tabs example",centered:!0,children:[q.jsx(bm,{label:"Attack Upgrades"}),q.jsx(bm,{label:"Lab and start setup"})]})})}),t===0&&q.jsx(Ux,{}),t===1&&q.jsx($x,{}),q.jsxs(Ou,{sx:{position:"fixed",bottom:0,width:"100%",textAlign:"center"},children:[q.jsxs(kn,{variant:"body2",color:"textSecondary",children:["Data pulled from ",q.jsx("a",{href:"https://tower-workshop-calculator.netlify.app",target:"_blank",children:"https://tower-workshop-calculator.netlify.app"})]}),q.jsxs(kn,{variant:"body2",color:"textSecondary",children:["Source code available on ",q.jsx("a",{href:"https://github.com/jacoelt/tower-calculator",target:"_blank",children:"GitHub"})]})]})]})}mg.createRoot(document.getElementById("root")).render(q.jsx(R.StrictMode,{children:q.jsx(Px,{})}));
